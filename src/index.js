import { Actor, HttpAgent, AnonymousIdentity } from '@dfinity/agent';
import { NNS_IDL } from './did/nns.idl';
import { walletList, web3Wallets } from "./wallets";

import { BatchTransaction } from './libs/batchTransact'

import { getAccountIdentifier } from './libs/identifier-utils';
import { Principal } from '@dfinity/principal';
import { NNS_CANISTER_ID , ICP_DECIMAL , HOSTURL , localStorageKey} from './config'

export const Artemis = class Artemis {
    accountId = false;
    principalId = false;
    walletActive = '';
    provider = false;
    balance = 0;
    canisterActors = {};
    anoncanisterActors = [];
    connectedWalletInfo = {};
    wallets = walletList;
    _connectObject = { whitelist: [NNS_CANISTER_ID], host: HOSTURL, }
    _cleanUpConnObj(connectObj) {
        connectObj.whitelist.push(NNS_CANISTER_ID);
        connectObj.whitelist = Array.from(new Set([...connectObj.whitelist]));
        this._connectObject = connectObj;
        return connectObj;
    }
    async connect(wallet, connectObj = { whitelist: [], host: HOSTURL , delegationTargets:[]} , clcik=false) {
        connectObj = this._cleanUpConnObj(connectObj);
        if (!wallet) return false;
        return new Promise(async (resolve, reject) => {
            var selectedWallet = this.wallets.find(o => o.id == wallet);
            if (selectedWallet?.adapter?.init) selectedWallet.adapter.init()
                
            if (selectedWallet.adapter.readyState == "Installed" || selectedWallet.adapter.readyState == "Loadable") {
                var p = await selectedWallet.adapter.connectWallet(connectObj, clcik).catch((e) => {
                    reject(e);
                });
                if (!p) return resolve(false);
                this.principalId = p.principalId; this.accountId = p.accountId; this.walletActive = wallet;
                this.provider = selectedWallet.adapter;
                this.connectedWalletInfo = { id: selectedWallet.id, icon: selectedWallet.icon, name: selectedWallet.name };
                if (!!p.stoicAccounts) { localStorage.setItem("stoicAccounts", p.stoicAccounts.length || 0); }
                localStorage.setItem(localStorageKey, this.walletActive);
                var event = new CustomEvent('dfinityWalletConnected');
                window.dispatchEvent(event, wallet);
                this.getWalletBalance();
            } else if (selectedWallet.adapter.readyState == 'NotDetected') {
                window.open(selectedWallet.adapter.url, '_blank');
            }
            resolve(this.principalId);
        });
    };
    async disconnect() {
        var res = this.provider.disConnectWallet();
        localStorage.removeItem(localStorageKey);
        this.provider = false, this.address = false, this.wallet = '';
        return true;
    };
    async isLoaded() {
        return new Promise((resolve, reject) => {
            var intrvl = setInterval(() => {
                if (this.provider) { clearInterval(intrvl); resolve(true); }
            }, 500);
        })
    };
    async getWalletBalance(returnType = "number") {
        if (!this.accountId) return 0;
        var actor = await this.getCanisterActor(NNS_CANISTER_ID, NNS_IDL, true);
        const balance = await actor.icrc1_balance_of({ owner: Principal.from(this.principalId), subaccount: [] });
        if (returnType == 'number') { this.balance = (parseFloat(balance) / ICP_DECIMAL) }
        else { this.balance = balance; }
        return this.balance
    };
    async requestICPTransfer(transferRequest) {
        return new Promise(async (resolve, reject) => {
            var IDL = () => { };
            var actor = await this.getCanisterActor(NNS_CANISTER_ID, IDL);
            const blockHeight = await actor.send_dfx(transferRequest).catch(err => { reject(err) });
            if (blockHeight) resolve(blockHeight)
            reject(false)
        })
    };
    async getCanisterActor(canisterId, idl, isAnon = false, isForced = false) {
        let actor = false;
        if (isAnon) {
            if (isForced) {
                const pubAgent = HttpAgent.createSync({ AnonymousIdentity, host: this._connectObject.host });
                actor = await Actor.createActor(idl, { agent: pubAgent, canisterId: canisterId })
                if (actor) this.anoncanisterActors[canisterId] = actor;
            } else if (this.anoncanisterActors[canisterId])
                actor = this.anoncanisterActors[canisterId]
            else {
                const pubAgent = HttpAgent.createSync({ AnonymousIdentity, host: this._connectObject.host });
                actor = await Actor.createActor(idl, { agent: pubAgent, canisterId: canisterId })
                if (actor) this.anoncanisterActors[canisterId] = actor;
            }
        } else {
            if (isForced) {
                actor = await this.provider.createActor({ canisterId: canisterId, interfaceFactory: idl });
                if (actor) this.canisterActors[canisterId] = actor;
            }
            else if (this.canisterActors[canisterId]) {
                actor = this.canisterActors[canisterId];
            } else {
                actor = await this.provider.createActor({ canisterId: canisterId, interfaceFactory: idl });
                if (actor) this.canisterActors[canisterId] = actor;
            }
        }
        return actor;
    };
    async autoConnect(connectObj = { whitelist: [NNS_CANISTER_ID], host: HOSTURL, }) {
        connectObj = this._cleanUpConnObj(connectObj);
        var walletConnected = localStorage.getItem(localStorageKey);
        var selectedWallet = this.wallets.find(o => o.id == walletConnected);
        if (!selectedWallet) return false;
        await window.onload();
        var data = await this.connect(walletConnected, connectObj);
        return data;
    }
    constructor(connectObj = { whitelist: [NNS_CANISTER_ID], host: HOSTURL, }) {
        var walletConnected = localStorage.getItem(localStorageKey);
        connectObj = this._cleanUpConnObj(connectObj);
        (async () => {
            var selectedWallet = this.wallets.find(o => o.id == walletConnected);
            if (!selectedWallet) return false;
            var data = await this.connect(walletConnected, connectObj);
        })
    }
}
export const BatchTransact = BatchTransaction;

export const principalIdFromHex = getAccountIdentifier;

export const ArtemisAdapter = new Artemis({ whitelist: [NNS_CANISTER_ID], host: HOSTURL });

export const initAdapter = async function () {
    window.artemis = Artemis;
    window.artemis.BatchTransact = BatchTransaction;
    window.artemis.dfinity = { AnonymousIdentity, Principal }
    window.onload = function () {
        if (window.ic && window.ic.plug) { window.ic.plug.init(); }
        if (window.ic.bitfinityWallet) web3Wallets.bitfinity.readyState = 'Installed';
        if (window.ic.plug) web3Wallets.plug.readyState = 'Installed';
        var tries = 0;
        const s = setInterval(() => {
            if (window.ic.plug) { web3Wallets.plug.readyState = 'Installed'; }
            if (window.ic.bitfinityWallet) { web3Wallets.bitfinity.readyState = 'Installed' };
            tries++;
            if (tries > 10) { clearInterval(s); }
        }, 1000);
    }
    if(!window.process) window.process ={}
}

if (window) {
    initAdapter();
}
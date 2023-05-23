import { Actor, HttpAgent } from '@dfinity/agent';
import { NNS_IDL } from './did/nns.idl';
import { walletList } from "./wallets";
import { BatchTransaction } from './libs/batchTransact'

const HOSTURL = "https://icp0.io";
const ICP_DECIMAL = 10 ** 8;
const NNS_CANISTER_ID = 'ryjl3-tyaaa-aaaaa-aaaba-cai';
const localStorageKey = 'dfinityWallet'

export const Artemis = class Artemis {
    accountId = false;
    principalId = false;
    walletActive = '';
    provider = false;
    balance = 0;
    hostUrl = HOSTURL;
    canisterActors = {};
    anoncanisterActors = [];
    connectedWalletInfo = {};
    wallets = walletList;
    _cleanUpConnObj(connectObj) {
        connectObj.whitelist.push(NNS_CANISTER_ID);
        connectObj.whitelist = Array.from(new Set([...connectObj.whitelist]));
        return connectObj;
    }
    async connect(wallet, connectObj = { whitelist: [], host: HOSTURL }) {
        connectObj = this._cleanUpConnObj(connectObj);
        this.hostUrl = connectObj.host;
        if (!wallet) return false;
        try {
            var selectedWallet = this.wallets.find(o => o.id == wallet);
            if (!selectedWallet) return false;
            if (selectedWallet.adapter.readyState == "Installed" || selectedWallet.adapter.readyState == "Loadable") {
                var p = await selectedWallet.adapter.connectWallet(connectObj);
                if (!p) return false;
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
            return this.principalId;
        } catch (error) { return false; }
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
    async getWalletBalance(returnType = "number") { //bigInt // row
        if (!this.accountId) return 0;
        var actor = await this.getCanisterActor(NNS_CANISTER_ID, NNS_IDL, false);
        const balance = (await actor.account_balance_dfx({ account: this.accountId })).e8s;
        if (returnType == 'number') {
            this.balance = (parseFloat(balance) / ICP_DECIMAL)
        } else {
            this.balance = balance;
        }
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
    async getCanisterActor(canisterId, idl, isAnon = false) {
        let actor = false;
        if (isAnon) {
            if (this.anoncanisterActors[canisterId])
                return actor = this.canisterActors[canisterId]
            else {
                const pubAgent = new HttpAgent({ AnonymousIdentity, host: this.hostUrl });
                return actor = await Actor.createActor(idl, { agent: pubAgent, canisterId: canisterId })
            }
        } else {
            if (this.canisterActors[canisterId]) {
                actor = await this.canisterActors[canisterId];
            } else if (this.walletActive == 'plug') {
                actor = await this.provider.createActor({ canisterId: canisterId, interfaceFactory: idl });
                this.canisterActors[canisterId] = actor;
            } else if (this.walletActive == 'stoic' || this.walletActive == 'dfinity') {
                actor = await Actor.createActor(idl, { agent: this.provider.agent, canisterId: canisterId });
                this.canisterActors[canisterId] = actor;
            } else if (this.walletActive == 'bitfinity') {
                actor = await this.provider.createActor({ canisterId: canisterId, interfaceFactory: idl });
                this.canisterActors[canisterId] = actor;
            }
            return actor;
        }
    };
    async autoConnect(connectObj = { whitelist: [NNS_CANISTER_ID], host: HOSTURL, }) {
        connectObj = this._cleanUpConnObj(connectObj);
        var walletConnected = localStorage.getItem(localStorageKey);
        var selectedWallet = this.wallets.find(o => o.id == walletConnected);
        if (!selectedWallet) return false;
        var data = await this.connect(walletConnected, connectObj);
        return data;
    }
    async batchTransaction(transactionsArray=[],){

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

if (window) {
    window.artemis = new Artemis({ whitelist: [NNS_CANISTER_ID], host: HOSTURL });
}
import { StoicIdentity } from "ic-stoic-identity";
const { Actor, HttpAgent, SignIdentity, AnonymousIdentity } = require('@dfinity/agent');
import { AuthClient } from "@dfinity/auth-client"
import { NNS_IDL } from './nns.idl'
import { getAccountIdentifier } from './identifier-utils'

const HOSTURL = "https://boundary.ic0.app/";
const ICP_DECIMAL = 100000000;
const pubAgent = new HttpAgent({ AnonymousIdentity, host: HOSTURL })

var wallets = {
    plug: window.ic ? window.ic.plug ? {
        readyState: "Installed",
        connectWallet: async function (connectObj = { whitelist: [], host: '', }) {
            var publicKey = false, prinObj = false;
            var isConnected = () => {
                return new Promise(async (resolve) => {
                    setTimeout(() => { resolve(false); }, 1000);
                    var s = await window.ic.plug.isConnected(); resolve(s);
                })
            };
            var result = await window.ic.plug.isConnected();
            try {
                if (result) {
                    await window.ic.plug.createAgent(connectObj)
                } else { publicKey = await window.ic.plug.requestConnect(connectObj) }
                prinObj = await window.ic.plug.agent.getPrincipal();
                var sess = await window.ic.plug.sessionManager.getSession();
                this.agent = window.ic.plug.agent;
                this.getPrincipal = async function () { return window.ic.plug.getPrincipal() }
                this.createActor = async function (t1, t2) { return window.ic.plug.createActor(t1, t2) };
                return { accountId: sess.accountId, principalId: prinObj.toString() }
            } catch (e) { return false; }
        },
        disConnectWallet: async function () {
            await window.ic.plug.disconnect();
        },
    } : { readyState: 'NotDetected', url: 'https://plugwallet.ooo/' } : { readyState: 'NotDetected', url: 'https://plugwallet.ooo/' },
    stoic: {
        readyState: "Loadable", url: 'https://www.stoicwallet.com/',
        connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
            var identity = await StoicIdentity.load();
            if (!identity) { identity = await StoicIdentity.connect(); }
            let getAcnts = await identity.accounts();
            getAcnts = JSON.parse(getAcnts);
            this.agent = new HttpAgent({ identity, host: connectObj.host });
            this.createActor = function (interfaceFactory, dconfig) {
                return Actor.createActor(interfaceFactory, dconfig);
            };
            this.createAgent = function () {
                return new HttpAgent({ identity, host: connectObj.host });
            };
            this.getPrincipal = function () { return identity.getPrincipal() }
            this.disConnectWallet = async function () {
                await StoicIdentity.disconnect();
            }
            return { stoicAccounts: getAcnts, accountId: getAcnts[0].address, principalId: identity._principal.toString() }
        }
    },
    bitfinity: window.ic ? window.ic.bitfinityWallet && "InfinityWallet!" ? {
        readyState: "Installed",
        connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
            var isconn = await window.ic.bitfinityWallet.isConnected();
            if (!isconn) {
                let s = await window.ic.bitfinityWallet.requestConnect(connectObj)
            }
            if (!window.ic.bitfinityWallet.agent) {
                await window.ic.bitfinityWallet.requestConnect(connectObj)
            }
            this.agent = window.ic.bitfinityWallet.agent;

            this.getPrincipal = async function () { return window.ic.bitfinityWallet.getPrincipal() }
            this.createActor = async function (t1) { return window.ic.bitfinityWallet.createActor(t1) };
            var prinObj = await this.getPrincipal();
            var acntid = await window.ic.bitfinityWallet.getAccountID()
            return { accountId: acntid, principalId: prinObj.toString() }
        },
        disConnectWallet: async function () {
            await window.ic.bitfinityWallet.disconnect();
        },
    } : { readyState: 'NotDetected', url: 'https://wallet.infinityswap.one/' } : { readyState: 'NotDetected', url: 'https://wallet.infinityswap.one/' },
    dfinity: {
        readyState: "Loadable", url: "https://identity.ic0.app",
        connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
            var authClient = await AuthClient.create();
            var isConnected = await authClient.isAuthenticated();
            var self = this;
            var returnData = {}
            if (!isConnected) {
                var conn = await authClient.login({ identityProvider: 'https://identity.ic0.app', onSuccess: async () => { returnData = await continueLogin(); } });
            } else {
                returnData = await continueLogin();
            }

            async function continueLogin() {
                var identity = await authClient.getIdentity();
                var principal = identity?.getPrincipal();
                self.agent = new HttpAgent({ identity: identity, host: connectObj.host });
                var sid = getAccountIdentifier(identity?.getPrincipal().toString());
                self.createActor = function (interfaceFactory, dconfig) {
                    return Actor.createActor(interfaceFactory, dconfig);
                };
                self.createAgent = function () {
                    return new HttpAgent({ identity: identity, host: connectObj.host });
                };
                self.getPrincipal = function () { return identity.getPrincipal() }
                self.disConnectWallet = async function () { await authClient.logout() }
                return { accountId: sid, principalId: principal.toString() }
            }
            return returnData;
        }
    }
}

class Artemis {
    accountId = false;
    principalId = false;
    walletActive = '';
    provider = false;
    balance = 0;
    canisterActors = {};
    anoncanisterActors = [];
    connectedWalletInfo = {};
    _cleanUpConnObj(connectObj) {
        connectObj.whitelist.push('ryjl3-tyaaa-aaaaa-aaaba-cai');
        connectObj.whitelist = Array.from(new Set([...connectObj.whitelist]));
        return connectObj;
    }
    async connect(wallet, connectObj = { whitelist: [], host: HOSTURL }) {
        connectObj = this._cleanUpConnObj(connectObj);
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
                localStorage.setItem("dfinityWallet", this.walletActive);
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
        localStorage.removeItem("dfinityWallet");
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
    wallets = [
        { id: 'plug', name: 'Plug Wallet', icon: 'https://raw.githubusercontent.com/sonicdex/artemis/main/assets/plug.jpg', adapter: wallets.plug },
        { id: 'stoic', name: 'Stoic Wallet', icon: 'https://raw.githubusercontent.com/sonicdex/artemis/main/assets/stoic.png', adapter: wallets.stoic },
        { id: 'bitfinity', name: 'Bitfinity Wallet', icon: 'https://raw.githubusercontent.com/sonicdex/artemis/main/assets/bitfinity.svg', adapter: wallets.bitfinity },
        { id: 'dfinity', name: "Internet Identity", icon: 'https://raw.githubusercontent.com/sonicdex/artemis/main/assets/dfinity.svg', adapter: wallets.dfinity },
    ];
    async getWalletBalance() {
        if (!this.accountId) return 0;
        var requestOptions = { method: 'GET', redirect: 'follow' };
        var _resp = await fetch("https://ledger-api.internetcomputer.org/accounts/" + this.accountId, requestOptions);
        var _resp = await _resp.json()
        if (_resp) {
            var acntinfo = _resp;
            this.balance = parseFloat((acntinfo.balance / ICP_DECIMAL).toFixed(3))
        } else {
            this.balance = 0;
        }
        return this.balance
    };
    async requestICPTransfer(transferRequest) {
        return new Promise(async (resolve, reject) => {
            var IDL = NNS_IDL;
            var NNS_CANISTER_ID = 'ryjl3-tyaaa-aaaaa-aaaba-cai';
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
            else
                return actor = await Actor.createActor(idl, { agent: pubAgent, canisterId: canisterId })
        }else{
            if(this.canisterActors[canisterId]){
                actor = await this.canisterActors[canisterId];
            }else if(this.walletActive == 'plug'){
                actor = await this.provider.createActor({ canisterId: canisterId, interfaceFactory: idl });
                this.canisterActors[canisterId] = actor;
            }else if (this.walletActive == 'stoic' || this.walletActive == 'dfinity') {
                actor = await Actor.createActor(idl, { agent: this.provider.agent, canisterId: canisterId });
                this.canisterActors[canisterId] = actor;
            }else if(this.walletActive == 'bitfinity'){
                actor = await this.provider.createActor({ canisterId: canisterId, interfaceFactory: idl });
                this.canisterActors[canisterId] = actor;
            }
            return actor;
        }
    };
    async autoConnect(connectObj = { whitelist: ['ryjl3-tyaaa-aaaaa-aaaba-cai'], host: HOSTURL, }) {
        connectObj = this._cleanUpConnObj(connectObj);
        var walletConnected = localStorage.getItem('dfinityWallet');
        var selectedWallet = this.wallets.find(o => o.id == walletConnected);
        if (!selectedWallet) return false;
        var data = await this.connect(walletConnected, connectObj);
        return data;
    }
    constructor(connectObj = { whitelist: ['ryjl3-tyaaa-aaaaa-aaaba-cai'], host: HOSTURL, }) {
        var walletConnected = localStorage.getItem('dfinityWallet');
        connectObj = this._cleanUpConnObj(connectObj);
        (async () => {
            var selectedWallet = this.wallets.find(o => o.id == walletConnected);
            if (!selectedWallet) return false;
            var data = await this.connect(walletConnected, connectObj);
        })
    }
}
if (window) {
    window.artemis = new Artemis({ whitelist: ['ryjl3-tyaaa-aaaaa-aaaba-cai'], host: HOSTURL });
}
export default Artemis;
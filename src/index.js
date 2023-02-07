import {StoicIdentity} from "ic-stoic-identity";
const { Actor, HttpAgent, SignIdentity, AuthClient } = require('@dfinity/agent');
import {NNS_IDL} from './nns.idl'

var wallets = {
    plug: window.ic ? window.ic.plug ? {
        readyState: "Installed",
        icon: '',
        connectWallet: async function (connectObj = { whitelist: [], host: '', }) {
          console.log
            var publicKey = false, prinObj = false;
            var isConnected = () => {
                return new Promise(async (resolve) => {
                    setTimeout(() => { resolve(false); }, 1000);
                    var s = await window.ic.plug.isConnected(); resolve(s);
                })
            };
            var result = await isConnected();
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
            } catch (e) { console.log(e); return false; }
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
    infinityswap: window.ic ? window.ic.infinityWallet && "InfinityWallet!" ? {
        readyState: "Installed",
        connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
            var isconn = await window.ic.infinityWallet.isConnected();
            if (!isconn) {
                let s = await window.ic.infinityWallet.requestConnect(connectObj)
            }
            if (!window.ic.infinityWallet.agent) {
                await window.ic.infinityWallet.requestConnect(connectObj)
            }
            this.agent = window.ic.infinityWallet.agent;

            this.getPrincipal = async function () { return window.ic.infinityWallet.getPrincipal() }
            this.createActor = async function (t1, t2) { return window.ic.infinityWallet.createActor(t1, t2) };
            var prinObj = await this.getPrincipal();
            var acntid = await window.ic.infinityWallet.getAccountID()
            return { accountId: acntid, principalId: prinObj.toString() }
        },
        disConnectWallet: async function () {
            await window.ic.infinityWallet.disconnect();
        },
    } : { readyState: 'NotDetected', url: 'https://infinityswap.one/' } : { readyState: 'NotDetected', url: 'https://infinityswap.one/' },
    dfinity: {
        readyState: "Loadable", url: 'https://nns.ic0.app/',
        connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
            var identity = new SignIdentity();
            var asd = await identity.getPrincipal()
            console.log(identity, asd)
        }
    }
}
var ICP_DECIMAL = 100000000;
class Artemis {
    accountId = false;
    principalId = false;
    walletActive = '';
    provider = false;
    balance = 0;
    async connect (wallet, connectObj = { whitelist:[], host: "https://boundary.ic0.app/" }) {
      connectObj.whitelist.push('ryjl3-tyaaa-aaaaa-aaaba-cai')
        if (!wallet) return false;
        try {
            var selectedWallet = this.wallets.find(o => o.id == wallet);
            if (!selectedWallet) return false;
            if (selectedWallet.adapter.readyState == "Installed" || selectedWallet.adapter.readyState == "Loadable") {
                var p = await selectedWallet.adapter.connectWallet(connectObj);
                if (!p) return false;
                this.principalId = p.principalId; this.accountId = p.accountId;this.walletActive = wallet;
                this.provider = selectedWallet.adapter;
                if(!!p.stoicAccounts){localStorage.setItem("stoicAccounts", p.stoicAccounts.length || 0);}
                localStorage.setItem("dfinityWallet", this.walletActive );
                var event =  new CustomEvent('walletConnected');
                window.dispatchEvent(event, wallet);
                this.getWalletBalance();
            } else if (selectedWallet.adapter.readyState == 'NotDetected') {
                window.open(selectedWallet.adapter.url, '_blank');
            }
            return this.principalId;
        } catch (error) { console.log(error); return false; }
    };
    async disconnect () {
        var res = this.provider.disConnectWallet();
        localStorage.removeItem("dfinityWallet");
        this.provider = false, this.address = false, this.wallet = '';
        return true;
    };
    async isLoaded () {
        return new Promise((resolve, reject) => {
            var intrvl = setInterval(() => {
                if (this.provider) { clearInterval(intrvl); resolve(true); }
            }, 500);
        })
    };
    wallets = [
        { id: 'plug', name: 'Plug', icon: 'https://raw.githubusercontent.com/artemisweb3/artemis/main/assets/plug.jpg', chain: 'dfinity', adapter: wallets.plug },
        { id: 'stoic', name: 'Stoic', icon: 'https://raw.githubusercontent.com/artemisweb3/artemis/main/assets/stoic.png', chain: 'dfinity', adapter: wallets.stoic },
        { id: 'infinityswap', name: 'Infinity Wallet', icon: 'https://raw.githubusercontent.com/artemisweb3/artemis/main/assets/infinityswap.svg', chain: 'dfinity', adapter: wallets.infinityswap }
    ];
    async getWalletBalance () {
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
    async requestICPTransfer(transferRequest){
        return new Promise(async (resolve, reject) => {
            var IDL = NNS_IDL;
            var NNS_CANISTER_ID = 'ryjl3-tyaaa-aaaaa-aaaba-cai';
            var actor =  await this.provider.createActor( { canisterId: NNS_CANISTER_ID, interfaceFactory: IDL } );
            const blockHeight = await actor.send_dfx(transferRequest).catch(err => { reject(err) });
            if (blockHeight) resolve(blockHeight)
            reject(false)
        })
    };
    constructor(connectObj = { whitelist: ['ryjl3-tyaaa-aaaaa-aaaba-cai'], host: "https://boundary.ic0.app/", }) {
        var walletConnected = localStorage.getItem('dfinityWallet');
        (async () => {
            var selectedWallet = this.wallets.find(o => o.id == walletConnected);
            if (!selectedWallet) return false;
            var data = await this.connect(walletConnected , connectObj);
        })
    }
}
if(window){
  window.artemis = new artemis({ whitelist: ['ryjl3-tyaaa-aaaaa-aaaba-cai'], host: 'https://boundary.ic0.app/'}  );
}
export{Artemis};
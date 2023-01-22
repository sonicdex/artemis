import { StoicIdentity } from './stoicIdentity'
const { Actor, HttpAgent, SignIdentity , AuthClient} = require('@dfinity/agent');

import * as dfn  from '@dfinity/agent'
export default {
    plug: window.ic ? window.ic.plug ?{
        readyState: "Installed",
        connectWallet: async function (connectObj = { whitelist: [], host: '' ,  }) {
            var publicKey = false, prinObj = false;;
            connectObj.onConnectionUpdate = () => { };
            var isConnected = ()=>{ return new Promise(async (resolve) =>{
                setTimeout(() => { resolve(false);}, 3000);var s = await window.ic.plug.isConnected();resolve(s);
            })};
            var result = await isConnected();
            try {
                if(result){  await window.ic.plug.createAgent(connectObj)
                }else{ publicKey = await window.ic.plug.requestConnect(connectObj) }
                prinObj = await window.ic.plug.agent.getPrincipal();
                var sess = await window.ic.plug.sessionManager.getSession();
                this.agent = window.ic.plug.agent;
                this.getPrincipal  = async  function () { return window.ic.plug.getPrincipal()}
                this.createActor =  async function (t1,t2) { return  window.ic.plug.createActor(t1,t2)} ;
                return { accountId: sess.accountId, principalId: prinObj.toString() }
              } catch (e) { console.log(e); return false;  }
        },
        disConnectWallet:async function () {
            await window.ic.plug.disconnect();
        },
    }:{ readyState: 'NotDetected', url: 'https://plugwallet.ooo/' }:{ readyState: 'NotDetected', url: 'https://plugwallet.ooo/' },
    stoic:{
        readyState:"Loadable", url:'https://www.stoicwallet.com/',
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
            return {stoicAccounts: getAcnts, accountId: getAcnts[0].address, principalId: identity._principal.toString() }
        }
    },
    infinityswap: window.ic ? window.ic.infinityWallet && "InfinityWallet!" ?{
        readyState: "Installed",
        connectWallet:async function (connectObj = { whitelist: [], host: '' }) {
            var isconn = await window.ic.infinityWallet.isConnected();
            if(!isconn){
                let s = await window.ic.infinityWallet.requestConnect(connectObj)
            }
            if(!window.ic.infinityWallet.agent){
                await window.ic.infinityWallet.requestConnect(connectObj)
            }
            this.agent =  window.ic.infinityWallet.agent;

            this.getPrincipal  = async function () { return window.ic.infinityWallet.getPrincipal()}
            this.createActor =  async function (t1,t2) { return window.ic.infinityWallet.createActor(t1,t2)} ;
            var  prinObj = await this.getPrincipal();
            var  acntid = await window.ic.infinityWallet.getAccountID()
            return { accountId: acntid, principalId: prinObj.toString() }
        },
        disConnectWallet:async function () {
            await window.ic.infinityWallet.disconnect();
        },
    }:{ readyState: 'NotDetected', url: 'https://infinityswap.one/' }:{ readyState: 'NotDetected', url: 'https://infinityswap.one/' },
    dfinity:{
        readyState:"Loadable", url:'https://www.stoicwallet.com/',
        connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
            var identity = new SignIdentity();
            var asd = await identity.getPrincipal()
            console.log(identity , asd)
        }
    }
}
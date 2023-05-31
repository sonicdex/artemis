import { HttpAgent } from '@dfinity/agent';
import { getAccountIdentifier } from '../libs/identifier-utils';
// import { AuthClient } from "@dfinity/auth-client";

import { IC } from "@astrox/sdk-web";

const astroxConfig = {
    providerUrl: 'https://63k2f-nyaaa-aaaah-aakla-cai.raw.ic0.app',
    delegationModes: ["global"],
    ledgerHost: "https://boundary.ic0.app/",
}

const astroxInit = async (host='' , whitelist=[]) => {
    const ic = await IC.create({
        useFrame: !(window.innerWidth < 768),
        signerProviderUrl: `${astroxConfig.providerUrl}/#signer`,
        walletProviderUrl: `${astroxConfig.providerUrl}/#transaction`,
        identityProvider: `${astroxConfig.providerUrl}/#authorize`,
        host: host?host:astroxConfig.ledgerHost,
        ledgerHost: host?host:astroxConfig.ledgerHost,
        ledgerCanisterId: "ryjl3-tyaaa-aaaaa-aaaba-cai",
        permissions: ["permissions-identity", "permissions-wallet"],
        delegationTargets:whitelist,
        noUnify: false,
    })
    return ic;
}
if(!window.ic.astrox) astroxInit()

export const astrox= {
    readyState: "Loadable", url: "https://63k2f-nyaaa-aaaah-aakla-cai.raw.ic0.app",
    connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
        var self = this;  
        // var authClient = await AuthClient.create();
        // var isConnected = await authClient.isAuthenticated();
        // if(isConnected) authClient.logout();
        return new Promise(async (resolve, reject) => {
            if(!window.ic.astrox){
                await astroxInit()
                if(!window.ic.astrox)return false;
            } 
            var isconneted = await window.ic.astrox.isAuthenticated();
            if(!isconneted){
               await window.ic.astrox.connect({...window.ic.astrox.connectOptions , delegationTargets:connectObj.whitelist,ledgerHost:connectObj.host })
            }
            var sid = await getAccountIdentifier( window.ic.astrox.principal.toString());
            
            self.agent = new HttpAgent({ identity: window.ic.astrox.identity, host: connectObj.host });
            
            self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
                if (!connObj.canisterId || !connObj.interfaceFactory) return false;
                return await window.ic.astrox.createActor(connObj.interfaceFactory, connObj.canisterId);
            };
            self.getPrincipal = async function (t1) { return  window.ic.astrox.principal };
            self.disConnectWallet = async function () { await  window.ic.astrox.disconnect() }
            resolve( { accountId: sid, principalId: window.ic.astrox.principal.toString() });
        });
    }
}


import { Actor, HttpAgent } from '@dfinity/agent';

import { getAccountIdentifier } from '../utils/identifierUtils';
import { IC } from "@astrox/sdk-web";
import { AstroXWebViewHandler } from '@astrox/sdk-webview';
import { Principal } from '@dfinity/principal'


window.icx = new AstroXWebViewHandler();

const astroxConfig = {
    providerUrl: 'https://63k2f-nyaaa-aaaah-aakla-cai.raw.ic0.app',
    delegationModes: ["global"],
    ledgerHost: "https://icp0.io/",
}

const astroxInit = async (host = '', whitelist = []) => {
    const ic = await IC.create({
        useFrame: !(window.innerWidth < 768),
        signerProviderUrl: `${astroxConfig.providerUrl}/#signer`,
        walletProviderUrl: `${astroxConfig.providerUrl}/#transaction`,
        identityProvider: `${astroxConfig.providerUrl}/#authorize`,
        host: host ? host : astroxConfig.ledgerHost,
        ledgerHost: host ? host : astroxConfig.ledgerHost,
        ledgerCanisterId: "ryjl3-tyaaa-aaaaa-aaaba-cai",
        permissions: ["permissions-identity", "permissions-wallet"],
        delegationTargets: whitelist,
        noUnify: false,
    })
    return ic;
}
if (!window.ic?.astrox) astroxInit()

export const astrox = {
    readyState: "Loadable", url: "https://63k2f-nyaaa-aaaah-aakla-cai.raw.ic0.app",
    connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
        var self = this;
        return new Promise(async (resolve, reject) => {
            //check app is  in ME App.
            try { await window.icx.init(); } catch (e) { window.icx = false };
            const isICXReady = window.icx._isReady;
            if (isICXReady) {
                await astroxInit(connectObj.host  , connectObj.whitelist);
                
                const isconneted = await window.icx.isConnected();
                if (!isconneted) {
                    await window.icx.connect({ ...astroxConfig, delegationTargets: connectObj.whitelist, ledgerHost: connectObj.host })
                }

                var sid = window.icx.wallet.accountId;
                self.agent = new HttpAgent({ identity: window.icx.identity, host: connectObj.host });

                // self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
                //     if (!connObj.canisterId || !connObj.interfaceFactory) return false;
                //     return await Actor.createActor(connObj.interfaceFactory, { agent: this.agent, canisterId: connObj.canisterId });
                // };

                self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
                    if (!connObj.canisterId || !connObj.interfaceFactory) return false;
                    const actor = await window.icx.createActor(connObj.canisterId, connObj.interfaceFactory);
                    return actor;
                };
                self.getPrincipal = async function (t1) { return Principal.fromText(window.icx.wallet.principal) };
                self.disConnectWallet = async function () { await window.icx.disconnect(); }
                resolve({ accountId: sid, principalId: window.icx.wallet.principal });

            } else {
                if (!window.ic?.astrox) {
                    await astroxInit()
                    if (!window.ic?.astrox) return false;
                }
                var isconneted = await window.ic.astrox.isAuthenticated();
                if (!isconneted) {
                    await window.ic.astrox.connect({ ...window.ic.astrox.connectOptions, delegationTargets: connectObj.whitelist, ledgerHost: connectObj.host })
                }
                var sid = await getAccountIdentifier(window.ic.astrox.principal.toString());

                self.agent = new HttpAgent({ identity: window.ic.astrox.identity, host: connectObj.host });

                self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
                    if (!connObj.canisterId || !connObj.interfaceFactory) return false;
                    return await window.ic.astrox.createActor(connObj.interfaceFactory, connObj.canisterId);
                };

                self.getPrincipal = async function (t1) { return window.ic.astrox.principal };
                self.disConnectWallet = async function () { await window.ic.astrox.disconnect() }
                resolve({ accountId: sid, principalId: window.ic.astrox.principal.toString() });

            }
        });
    }
}


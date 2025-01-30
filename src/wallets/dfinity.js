import { Actor, HttpAgent } from '@dfinity/agent';
import { createAuthClient, getAccountIdentifier } from '../libs/identifier-utils';
import { AuthClient } from "@dfinity/auth-client";

export const dfinity = {
    readyState: "Loadable", url: "https://identity.ic0.app",
    authClient: false,
    connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
        var self = this, returnData = {};
        self.authClient = await createAuthClient()
        return new Promise(async (resolve, reject) => {
            var isConnected = await self.authClient.isAuthenticated();
            if (!isConnected) {
                self.authClient.login({
                    identityProvider: 'https://identity.ic0.app',host: connectObj.host,
                    windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,
                    maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
                    onSuccess: async () => {
                        returnData = await continueLogin();
                        resolve(returnData);
                    }
                });
            } else {
                returnData = await continueLogin();
                resolve(returnData);
            }
            async function continueLogin() {
                var identity = await self.authClient.getIdentity();
                var principal = await identity?.getPrincipal();
                self.agent = HttpAgent.createSync({ identity: identity, host: connectObj.host });
                var sid = await getAccountIdentifier(identity?.getPrincipal().toString());

                self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
                    if (!connObj.canisterId || !connObj.interfaceFactory) return false;
                    return await Actor.createActor(connObj.interfaceFactory, { agent: this.agent, canisterId: connObj.canisterId });
                };
                self.createAgent = async function () {
                    return HttpAgent.createSync({ identity: identity, host: connectObj.host });
                };
                self.getPrincipal = async function () { return identity.getPrincipal() }
                self.disConnectWallet = async function () { await self.authClient.logout() }
                return { accountId: sid, principalId: principal.toString() }
            }
        });
    }
};
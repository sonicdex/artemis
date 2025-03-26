import { Actor, HttpAgent } from '@dfinity/agent';
import { createAuthClient, getAccountIdentifier } from '../libs/identifier-utils';
import { walletConfig } from '../config';

export const dfinity = {
    readyState: "Loadable", url: walletConfig.dfinity.url,
    authClient: false,
    connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
        var self = this, returnData = {};
        self.authClient = await createAuthClient()
        return new Promise(async (resolve, reject) => {
            if (self.state == 'conneting') resolve(false);;
            self.state = 'conneting';
            var isConnected = await self.authClient.isAuthenticated();
            if (!isConnected) {
                self.authClient.login({
                    identityProvider:  walletConfig.dfinity.url ,host: connectObj.host,
                    windowOpenerFeatures: walletConfig.windowPos,
                    maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
                    onSuccess: async () => {
                        returnData = await continueLogin();
                        resolve(returnData);
                    },
                    onError: async (e) => {
                        self.state = 'error';
                        resolve(false);
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
                self.state = 'connected';
                return { accountId: sid, principalId: principal.toString() }
            }
        });
    }
};
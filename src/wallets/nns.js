import { Actor, HttpAgent } from '@dfinity/agent';
import { getAccountIdentifier } from '../libs/identifier-utils';
import { AuthClient } from "@dfinity/auth-client";

export const nns = {
    readyState: "Loadable", url: "http://localhost:4943",
    authClient: true,
    connectWallet: async function (connectObj = { whitelist: [], host: '', identityProvider: '' }) {
        var self = this, returnData = {};
        self.authClient = await AuthClient.create();
        return new Promise(async (resolve, reject) => {
            var isConnected = await  self.authClient.isAuthenticated();
            if (!isConnected) {
                self.authClient.login({
                    identityProvider: connectObj.identityProvider,
                    onSuccess: async () => {
                        returnData = await continueLogin();
                        resolve(returnData);
                    }
                });
            }else {
                returnData = await continueLogin();
                resolve(returnData);
            }
            async function continueLogin() {
                var identity = await  self.authClient.getIdentity();
                var principal = await identity?.getPrincipal();
                self.agent = new HttpAgent({ identity: identity, host: connectObj.host });
                self.agent.fetchRootKey();
                var sid = await getAccountIdentifier(identity?.getPrincipal().toString());
                
                self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
                    if (!connObj.canisterId || !connObj.interfaceFactory) return false;
                    return await Actor.createActor(connObj.interfaceFactory, { agent: this.agent, canisterId: connObj.canisterId });
                };
                self.createAgent = async function () {
                    return new HttpAgent({ identity: identity, host: connectObj.host });
                };
                self.getPrincipal = async function () { return identity.getPrincipal() }
                self.disConnectWallet = async function () { await  self.authClient.logout() }
                return { accountId: sid, principalId: principal.toString() }
            }
        });
    }
};
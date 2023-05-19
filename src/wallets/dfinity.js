import { Actor, HttpAgent } from '@dfinity/agent';
import { getAccountIdentifier } from '../libs/identifier-utils';
import { AuthClient } from "@dfinity/auth-client";

export const dfinity = {
    readyState: "Loadable", url: "https://identity.ic0.app",
    connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
        var self = this, returnData = {}
        return new Promise(async (resolve, reject) => {
            var authClient = await AuthClient.create();
            var isConnected = await authClient.isAuthenticated();
            if (!isConnected) {
                authClient.login({
                    identityProvider: 'https://identity.ic0.app',
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
                var identity = await authClient.getIdentity();
                var principal = await identity?.getPrincipal();
                self.agent = new HttpAgent({ identity: identity, host: connectObj.host });
                var sid = await getAccountIdentifier(identity?.getPrincipal().toString());
                self.createActor = async function (interfaceFactory, dconfig) {
                    return Actor.createActor(interfaceFactory, dconfig);
                };
                self.createAgent = async function () {
                    return new HttpAgent({ identity: identity, host: connectObj.host });
                };
                self.getPrincipal = async function () { return identity.getPrincipal() }
                self.disConnectWallet = async function () { await authClient.logout() }
                return { accountId: sid, principalId: principal.toString() }
            }
        });
    }
};
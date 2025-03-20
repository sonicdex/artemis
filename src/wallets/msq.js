import { MsqClient } from "@fort-major/msq-client";

import { Actor, HttpAgent } from "@dfinity/agent";
import { getAccountIdentifier } from '../libs/identifier-utils';

export const metaMask = window?.ethereum?.isMetaMask ? {
    readyState: "Installed",
    authClient: false, msq: false,
    connectWallet: function (connectObj = { whitelist: [], host: '', }) {
        const self = this;
        return new Promise(async (resolve, reject) => {
            if (self.state == 'conneting') resolve(false);;
            self.state = 'conneting';
            let msq = await MsqClient.create();
            if (msq?.Ok) {
                self.msq = msq.Ok; //msq = undefined;
                const identity = await self.msq.requestLogin();
                var principal = await identity?.getPrincipal();
                self.agent = HttpAgent.createSync({ identity: identity, host: connectObj.host });
                var accountId = await getAccountIdentifier(identity?.getPrincipal().toString());

                self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
                    if (!connObj.canisterId || !connObj.interfaceFactory) return false;
                    return await Actor.createActor(connObj.interfaceFactory, { agent: this.agent, canisterId: connObj.canisterId });
                };
                self.createAgent = async function () {
                    return HttpAgent.createSync({ identity: identity, host: connectObj.host });
                };
                self.getPrincipal = async function () { return identity.getPrincipal() }
                self.disConnectWallet = async function () { await self.msq.requestLogout() }
                self.state = 'connected';
                resolve( { accountId: accountId, principalId: principal.toString() });
            } else {
                self.state = 'error';
                reject(false);
            }
        });
    },
} : { readyState: 'NotDetected', url: 'https://metamask.io/download/' };
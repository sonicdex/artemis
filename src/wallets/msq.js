import { TMsqCreateOk, MsqClient } from "@fort-major/msq-client";

import { Actor, HttpAgent } from "@dfinity/agent";
import { getAccountIdentifier } from '../libs/identifier-utils';

export const metaMask = window?.ethereum?.isMetaMask ? {
    readyState: "Installed",
    authClient: false, msq: false,
    connectWallet: async function (connectObj = { whitelist: [], host: '', }) {
        var self = this, returnData = {};
        var msq = await MsqClient.create();
        if (msq?.Ok) {
            self.msq = msq.Ok; msq = undefined;
            const identity = await self.msq.requestLogin();

            var principal = await identity?.getPrincipal();
            self.agent = new HttpAgent({ identity: identity, host: connectObj.host });
            var sid = await getAccountIdentifier(identity?.getPrincipal().toString());

            self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
                if (!connObj.canisterId || !connObj.interfaceFactory) return false;
                return await Actor.createActor(connObj.interfaceFactory, { agent: this.agent, canisterId: connObj.canisterId });
            };
            self.createAgent = async function () {
                return new HttpAgent({ identity: identity, host: connectObj.host });
            };
            self.getPrincipal = async function () { return identity.getPrincipal() }
            self.disConnectWallet = async function () { await self.msq.requestLogout() }
            return { accountId: sid, principalId: principal.toString() }

        } else { return false; }
    },
} : { readyState: 'NotDetected', url: 'https://metamask.io/download/' };
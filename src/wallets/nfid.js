import { Actor, HttpAgent } from '@dfinity/agent';
import { getAccountIdentifier } from '../libs/identifier-utils';
import { AuthClient } from "@dfinity/auth-client";
import { PostMessageTransport } from '@slide-computer/signer-web';
import { Signer } from '@slide-computer/signer';
import { SignerAgent } from '@slide-computer/signer-agent';
import { LocalDStorage } from '../libs/utils';
import { Principal } from '@dfinity/principal';
import { SignerClient } from "@slide-computer/signer-client";
import { DelegationIdentity, Ed25519KeyIdentity } from '@dfinity/identity';

const NFIDConfig = {
    url: "https://nfid.one/rpc"
}

export const nfid = {
    readyState: "Loadable", url: NFIDConfig.url,
    delegationStorage: new LocalDStorage(),
    storageKey :'nfid_del_key',
    signerAgent: SignerAgent.createSync({
        signer: new Signer({
            transport: new PostMessageTransport({
                url: NFIDConfig.url,
                windowOpenerFeatures: "windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,",
                establishTimeout: 45000, disconnectTimeout: 35000, manageFocus: false,
            }),
        }),
        account: Principal.anonymous(),
        agent: HttpAgent.createSync({ host: NFIDConfig.url }),
    }),
    connectWallet: async function (params, clickEvent = false) {
        var self = this, returnData = {};
        self.signer = self.signerAgent.signer;
        if (!self.sessionKey) {
            self.sessionKey = Ed25519KeyIdentity.generate();
        }
        var isConn = await this.delegationStorage.get(self.storageKey);
        console.log(isConn);
        if (isConn) {
            console.log(isConn);
            const delegationIdentity = DelegationIdentity.fromDelegation(isConn.sessionKey, isConn.delegationChain);
            self.signerAgent.replaceAccount(delegationIdentity.getPrincipal());
            const principal = delegationIdentity.getPrincipal();

            console.log(principal.toString())
            var sid = getAccountIdentifier(principal.toString());
            self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
                if (!connObj.canisterId || !connObj.interfaceFactory) return false;
                return await Actor.createActor(connObj.interfaceFactory, { agent: self.signerAgent, canisterId: connObj.canisterId });
            };
            return { accountId: sid, principalId: principal.toString() };
        }



        var t = params.delegationTargets.length ? params.delegationTargets.map(cid => Principal.fromText(cid)) : [];
        const delegationChain = await self.signer.delegation({
            publicKey: self.sessionKey.getPublicKey().toDer(),
            targets: t,
            maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000)
        });

        console.log(self.sessionKey);

        const delegationIdentity = DelegationIdentity.fromDelegation(self.sessionKey, delegationChain);
        self.signerAgent.replaceAccount(delegationIdentity.getPrincipal());
        self.identity = delegationIdentity;
        const principal = delegationIdentity.getPrincipal();
        const sessionData = {
            sessionKey: self.sessionKey.toJSON(),
            walletId:principal.toString(),
            delegationChain: delegationChain.toJSON(),
        };
        self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
            if (!connObj.canisterId || !connObj.interfaceFactory) return false;
            return await Actor.createActor(connObj.interfaceFactory, { agent: self.signerAgent, canisterId: connObj.canisterId });
        };
        var sid = getAccountIdentifier(principal.toString());
        await self.delegationStorage.set(self.storageKey, sessionData);
        return { accountId: sid, principalId: principal.toString() };


    }
}
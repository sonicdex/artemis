import { Actor, HttpAgent } from '@dfinity/agent';
import { createSignerAgent, getAccountIdentifier } from '../libs/identifier-utils';
import { SignerAgent } from '@slide-computer/signer-agent';
import { LocalDStorage } from '../libs/utils';
import { Principal } from '@dfinity/principal';
import { DelegationChain, DelegationIdentity, Ed25519KeyIdentity, } from '@dfinity/identity';
import { walletConfig } from '../config';

export const nfid = {
    readyState: "Loadable", url: walletConfig.nfid.url,
    delegationStorage: new LocalDStorage(),
    storageKey: 'artemis_nfid_session',
    signerAgent: createSignerAgent(walletConfig.nfid.url),
    connectWallet: async function (connectObj) {
        var self = this;
        self.signer = self.signerAgent.signer;
        try {
            if (self.state == 'conneting') return(false);;
            self.state = 'conneting';
            const targets = connectObj?.delegationTargets && connectObj?.delegationTargets?.length ? connectObj.delegationTargets.map(cid => Principal.fromText(cid)) : [];
            var delegationIdentity = false, principal = false, accountId = false;

            if (targets.length) {
                var isConn = await self.delegationStorage.get(self.storageKey);
                if (isConn && isConn?.delegationChain) {
                    const delegationChain = DelegationChain.fromJSON(isConn.delegationChain);
                    const ses = Ed25519KeyIdentity.fromParsedJson(isConn.sessionKey)
                    delegationIdentity = DelegationIdentity.fromDelegation(ses, delegationChain);
                } else {
                    if (!self.sessionKey) { self.sessionKey = Ed25519KeyIdentity.generate(); }
                    const delegationChain = await self.signer.delegation({
                        publicKey: self.sessionKey.getPublicKey().toDer(),
                        targets: targets,
                        maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000)
                    });
                    delegationIdentity = DelegationIdentity.fromDelegation(self.sessionKey, delegationChain);
                    principal = delegationIdentity.getPrincipal();
                    const sessionData = { sessionKey: self.sessionKey.toJSON(), walletId: principal.toString(), delegationChain: delegationChain.toJSON(), };
                    await self.delegationStorage.set(self.storageKey, sessionData);
                }
                principal = delegationIdentity.getPrincipal();
                self.signerAgent = SignerAgent.createSync({ signer: self.signer, account: principal, });
                self.createAgent = async function () {
                    return HttpAgent.createSync({ identity: delegationIdentity, host: connectObj.host });
                };
            } else {
                var principal = false, accountId = false;
                var isConn = await self.delegationStorage.get(self.storageKey);
                if (isConn) {
                    principal = Principal.fromText(isConn.walletId);
                } else {
                    await self.signer.requestPermissions([{ method: "icrc27_accounts" }, { method: "icrc49_call_canister" },]);
                    const userAccounts = await self.signer.accounts();
                    principal = userAccounts[0].owner;
                    const sessionData = { walletId: principal.toString() };
                    await self.delegationStorage.set(self.storageKey, sessionData);
                }
                self.signerAgent = SignerAgent.createSync({ signer: self.signer, account: principal });
            }

            accountId = await getAccountIdentifier(principal.toString());
            self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
                if (!connObj.canisterId || !connObj.interfaceFactory) return false;
                return await Actor.createActor(connObj.interfaceFactory, { agent: self.signerAgent, canisterId: connObj.canisterId });
            };
            self.getPrincipal = async function () { return principal }
            self.disConnectWallet = async function () {
                self.delegationStorage.remove(self.storageKey);
                self.getPrincipal = false;
            }
            self.state = 'connected';
            return { accountId: accountId, principalId: principal.toString() }
        } catch (error) {
            self.state = 'error';
            throw new Error(error);          
            return false;
        }
    }
}
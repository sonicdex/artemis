import { Actor, HttpAgent } from '@dfinity/agent';
import { getAccountIdentifier } from '../libs/identifier-utils';
import { PostMessageTransport } from '@slide-computer/signer-web';
import { Signer } from '@slide-computer/signer';
import { SignerAgent } from '@slide-computer/signer-agent';
import { LocalDStorage } from '../libs/utils';
import { Principal } from '@dfinity/principal';
import { DelegationChain, DelegationIdentity, Ed25519KeyIdentity , } from '@dfinity/identity';

const NFIDConfig = {
    url: "https://nfid.one/rpc"
}

export const nfid = {
    readyState: "Loadable", url: NFIDConfig.url,
    delegationStorage: new LocalDStorage(),
    storageKey: 'artemis_nfid_session',
    signerAgent: SignerAgent.createSync({
        signer: new Signer({
            transport: new PostMessageTransport({
                url: NFIDConfig.url,
                windowOpenerFeatures: "windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,",
                establishTimeout: 45000, disconnectTimeout: 35000, manageFocus: false,
                detectNonClickEstablishment: false
            }),
        }),
        account: Principal.anonymous(),
        agent: HttpAgent.createSync({ host: NFIDConfig.url }),
    }),
    connectWallet: async function (connectObj) {
        var self = this;
        self.signer = self.signerAgent.signer;
        try {
            const targets = connectObj.delegationTargets.length ? connectObj.delegationTargets.map(cid => Principal.fromText(cid)) : [];
            if (targets.length) {
                var isConn = await this.delegationStorage.get(self.storageKey);           
                var delegationIdentity = false, principal = false, accountId = false;
                if (isConn) {
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
                accountId = await getAccountIdentifier(principal.toString());
                self.signerAgent = SignerAgent.createSync({ signer: self.signer, account: principal, });
                self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
                    if (!connObj.canisterId || !connObj.interfaceFactory) return false;
                    return await Actor.createActor(connObj.interfaceFactory, { agent: self.signerAgent, canisterId: connObj.canisterId });
                };
                self.createAgent = async function () {
                    return HttpAgent.createSync({ identity: delegationIdentity, host: connectObj.host });
                };
                self.getPrincipal = async function () { return delegationIdentity.getPrincipal() }
                self.disConnectWallet = async function () {
                    self.delegationStorage.remove(self.storageKey);
                    self.getPrincipal = false;
                    self.signer = false;
                    self.signerAgent = false;
                }
                return { accountId: accountId, principalId: principal.toString() }
            } else {
                var principal = false, accountId = false;
                var isConn = await this.delegationStorage.get(self.storageKey);        
                if(isConn){
                    principal = Principal.fromText(isConn.walletId);
                }else{
                    await self.signer.requestPermissions([{ method: "icrc27_accounts" }, { method: "icrc49_call_canister" },]);
                    const userAccounts = await self.signer.accounts();
                    principal = userAccounts[0].owner;
                    const sessionData = {  walletId: principal.toString() };
                    await self.delegationStorage.set(self.storageKey, sessionData);
                }
                self.signerAgent = SignerAgent.createSync({ signer: self.signer, account: principal });
                self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
                    if (!connObj.canisterId || !connObj.interfaceFactory) return false;
                    return await Actor.createActor(connObj.interfaceFactory, { agent: self.signerAgent, canisterId: connObj.canisterId });
                };
                accountId = await getAccountIdentifier(principal.toString());
                self.getPrincipal = async function () { return principal };
                self.disConnectWallet = async function () {
                    self.delegationStorage.remove(self.storageKey);
                    self.getPrincipal = false; self.signer = false; self.signerAgent = false;
                }
                return { accountId: accountId, principalId: principal.toString() }               
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
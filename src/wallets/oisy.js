import { createSignerAgent, getAccountIdentifier } from '../libs/identifier-utils';
import { Actor } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import { SignerAgent } from '@slide-computer/signer-agent';
import { LocalDStorage } from '../libs/utils';
import { walletConfig } from '../config';



export const oisyWallet = {
    readyState: "Loadable", url: walletConfig.oisyWallet.url,
    delegationStorage: new LocalDStorage(),
    storageKey: 'artemis_oisy_key',
    signerAgent: createSignerAgent(walletConfig.oisyWallet.url),
    connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
        var self = this;

        if (self.state == 'conneting') return (false);;
        self.state = 'conneting';
        
        self.signer = self.signerAgent.signer;
        var principal = false, accountId = false;
        try {
            var isConn = await this.delegationStorage.get(self.storageKey);
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
            self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
                if (!connObj.canisterId || !connObj.interfaceFactory) return false;
                return await Actor.createActor(connObj.interfaceFactory, { agent: self.signerAgent, canisterId: connObj.canisterId });
            };
            accountId = await getAccountIdentifier(principal.toString());
            self.getPrincipal = async function () { return principal };
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
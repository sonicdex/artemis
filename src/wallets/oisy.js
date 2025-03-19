import { getAccountIdentifier } from '../libs/identifier-utils';

// import { IcpWallet } from '@dfinity/oisy-wallet-signer/icp-wallet';

import { AuthClient } from "@dfinity/auth-client";
import { Actor, HttpAgent } from '@dfinity/agent';
// import {
//     ICRC25_REQUEST_PERMISSIONS, ICRC27_ACCOUNTS,
//     ICRC21_CALL_CONSENT_MESSAGE, ICRC49_CALL_CANISTER
// } from '@dfinity/oisy-wallet-signer';
import { Principal } from '@dfinity/principal';

import { PostMessageTransport } from "@slide-computer/signer-web";
import { SignerAgent } from '@slide-computer/signer-agent';
import { createAccountsPermissionScope, Signer } from "@slide-computer/signer";

import { ICRC1_IDL } from '../did';
import { LocalDStorage } from '../libs/utils';
import { DelegationIdentity, Ed25519KeyIdentity } from '@dfinity/identity';

const OisyConfig = {
    url: "https://oisy.com/sign"
}

export const oisyWallet = {
    readyState: "Loadable", url: OisyConfig.url,
    delegationStorage: new LocalDStorage(),
    storageKey: 'artemis_oisy_key',
    signerAgent: SignerAgent.createSync({
        signer: new Signer({
            transport: new PostMessageTransport({
                url: OisyConfig.url,
                windowOpenerFeatures: "windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,",
                establishTimeout: 45000, disconnectTimeout: 35000, manageFocus: false,

            }),
        }),
        account: Principal.anonymous(),
        agent: HttpAgent.createSync({ host: OisyConfig.url }),
    }),
    connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
        var self = this;
        self.signer = self.signerAgent.signer;
        var principal = false, accountId = false;
        try {
            const targets = connectObj.delegationTargets.length ? connectObj.delegationTargets.map(cid => Principal.fromText(cid)) : [];
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
                self.getPrincipal = false; self.signer = false; self.signerAgent = false;
            }
            return { accountId: accountId, principalId: principal.toString() }
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
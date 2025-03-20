import { Principal } from '@dfinity/principal';
import { Buffer } from 'buffer';
import { AccountIdentifier, SubAccount } from '@dfinity/ledger-icp';
import { AuthClient } from "@dfinity/auth-client";

import { PostMessageTransport } from '@slide-computer/signer-web';
import { SignerAgent } from '@slide-computer/signer-agent';
import { Signer } from '@slide-computer/signer';
import { HttpAgent } from '@dfinity/agent';
import { HOSTURL , walletConfig } from '../config'
// @ts-ignore
window.Buffer = Buffer;

export const getAccountIdentifier = (principalId, subAccount = 0) => {
  try {
    var accId = AccountIdentifier.fromPrincipal({ principal: Principal.from(principalId), subAccount: SubAccount.fromID(subAccount) })
    return accId.toHex();
  } catch (error) {
    return false
  }
};

export const createAuthClient = () => AuthClient.create({
  idleOptions: {
    disableIdle: true,
    idleTimeout: 1000 * 60 * 60 * 12,
    disableDefaultIdleCallback: true,
  }
});

export const createSignerAgent = (url = '') => {
 return SignerAgent.createSync({
    signer: new Signer({
      transport: new PostMessageTransport({
        url: url,
        windowOpenerFeatures:walletConfig.windowPos ,// "windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,",
        establishTimeout: 45000, disconnectTimeout: 35000, manageFocus: false,
        detectNonClickEstablishment: false
      }),
    }),
    account: Principal.anonymous(),
    agent: HttpAgent.createSync({ host: HOSTURL }),
  });
}
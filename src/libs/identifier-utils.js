import { Principal } from '@dfinity/principal';
import { Buffer } from 'buffer';
import { AccountIdentifier, SubAccount } from '@dfinity/ledger-icp';
import { AuthClient } from "@dfinity/auth-client";

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
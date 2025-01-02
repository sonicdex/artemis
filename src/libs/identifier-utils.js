import { Principal } from '@dfinity/principal';
import { Buffer } from 'buffer';
import { AccountIdentifier, SubAccount } from '@dfinity/ledger-icp';
// @ts-ignore
window.Buffer = Buffer;

const getAccountIdentifier = (principalId, subAccount = 0) => {
  try {
    var accId = AccountIdentifier.fromPrincipal({ principal: Principal.from(principalId), subAccount: SubAccount.fromID(subAccount) })
    return accId.toHex();
  } catch (error) {
    return false
  }
};

export { getAccountIdentifier }
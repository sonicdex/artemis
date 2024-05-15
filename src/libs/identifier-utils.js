import { Principal } from '@dfinity/principal';
import { AccountIdentifier, SubAccount } from "@dfinity/ledger-icp";

export const getAccountIdentifier = (principalId, subAccount = 0) => {
  try {
    var prinObj = Principal.from(principalId);
    var accId = AccountIdentifier.fromPrincipal({ principal: prinObj, subAccount: SubAccount.fromID(subAccount) });
    const val = accId.toHex();
    return val;
  } catch (error) {
    return false
  }
};

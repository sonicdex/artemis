// Path: src/index.js

import { AnonymousIdentity } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { PnP } from './core/PnP';
import { BatchTransaction } from './utils/batchTransact';
import { getAccountIdentifier } from './utils/identifierUtils';
import { HOSTURL, NNS_CANISTER_ID } from './core/constants';

const BatchTransact = BatchTransaction;
const principalIdFromHex = getAccountIdentifier;
const PnPAdapter = new PnP({
  whitelist: [NNS_CANISTER_ID],
  host: HOSTURL,
  identityProvider: "",
});

if (typeof window !== 'undefined') {
  window.pnp = PnP;
  window.pnp.BatchTransact = BatchTransaction;
  window.pnp.nns = { AnonymousIdentity, Principal };
}

export { PnP, BatchTransact, principalIdFromHex,getAccountIdentifier, PnPAdapter };
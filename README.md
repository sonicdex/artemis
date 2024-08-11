# Plug N Play for the Internet Computer

Plug N Play simplifies the integration of Internet Computer wallets into your decentralized applications (dApps). It provides a standardized interface for connecting to various wallets, managing transactions, and interacting with the Internet Computer blockchain.

## Features

- Seamless integration with multiple Internet Computer wallets
- Simplified wallet connection, disconnection, and auto-connection
- Built-in support for signatures and transaction status monitoring
- Automatic data updates in response to wallet, block, and network changes
- Optional built-in user interface for quick implementation
- Batch transaction support for complex operations
- Robust error handling and delegation refresh mechanisms

## Supported Wallets

- Internet Identity
- More to be added

## Installation

Install Plug N Play using npm:

```bash
npm install w98-plug-n-play
```

## Basic Usage

1. Define your canisters in a separate file (e.g., `canisters.js`):

```javascript
// canisters.js
import { idlFactory as myCanisterIdl } from './declarations/my_canister.did.js';
import { idlFactory as anotherCanisterIdl } from './declarations/another_canister.did.js';

export const canisters = {
  MY_CANISTER: {
    canisterId: 'aaaaa-aa',
    idlFactory: myCanisterIdl,
  },
  ANOTHER_CANISTER: {
    canisterId: 'bbbbb-bb',
    idlFactory: anotherCanisterIdl,
  },
};

export const Canisters = {
  MY_CANISTER: 'MY_CANISTER',
  ANOTHER_CANISTER: 'ANOTHER_CANISTER',
};
```

2. Import the PnP class, necessary dependencies, and your canisters:

```javascript
import { PnP } from 'w98-plug-n-play';
import { AuthClient } from '@dfinity/auth-client';
import { Actor, HttpAgent } from '@dfinity/agent';
import { canisters, Canisters } from './canisters';
```

3. Create a new PnP instance:

```javascript
const connectObj = { 
  whitelist: Object.values(canisters).map(canister => canister.canisterId),
  host: 'https://icp0.io/' 
};
const pnpWalletAdapter = new PnP(connectObj);
```

4. Connect to a wallet:

```javascript
try {
  const principalId = await pnpWalletAdapter.connect('internet-identity');
  console.log('Connected with principal ID:', principalId);
} catch (error) {
  console.error('Failed to connect wallet:', error);
}
```

5. Use the adapter to interact with the blockchain:

```javascript
try {
  const balance = await pnpWalletAdapter.getWalletBalance();
  console.log('Wallet balance:', balance);
} catch (error) {
  console.error('Failed to get wallet balance:', error);
}
```

## Advanced Usage: Signed Calls

To make signed calls to canisters, use the `getSignedActor` function:

```javascript
import { canisters } from './canisters';

async function getSignedActor(pnp, canisterType) {
  try {
    const canisterDef = canisters[canisterType];
    if (!canisterDef) {
      throw new Error(`Missing canister definition for ${canisterType}`);
    }
    const principal = canisterDef.canisterId;

    // Refresh the delegation
    const authClient = await AuthClient.create();
    const isAuthenticated = await authClient.isAuthenticated();
    if (!isAuthenticated) {
      throw new Error('User is not authenticated');
    }

    const identity = await authClient.getIdentity();
    const agent = new HttpAgent({ identity, host: pnp._connectObject.host });
    
    if (pnp._connectObject.host.includes('localhost')) {
      await agent.fetchRootKey();
    }

    const actor = await Actor.createActor(canisterDef.idlFactory, {
      agent,
      canisterId: principal,
    });

    return actor;
  } catch (error) {
    console.error(`Error in getSignedActor for ${canisterType}:`, error);
    throw error;
  }
}

// Usage
try {
  const myActor = await getSignedActor(pnpWalletAdapter, Canisters.MY_CANISTER);
  const response = await myActor.myMethod();
  console.log('Method response:', response);
} catch (error) {
  console.error('Error making signed call:', error);
}
```

## Error Handling

Implement robust error handling in your calls:

```javascript
async function getMethodResponse() {
  try {
    const myActor = await getSignedActor(pnpWalletAdapter, Canisters.MY_CANISTER);
    const response = await myActor.myMethod();
    return JSON.stringify(response);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('User is not authenticated')) {
        return "Error: User is not authenticated. Please log in again.";
      } else if (error.message.includes('Invalid delegation')) {
        return "Error: Invalid delegation. Please log out and log in again.";
      }
    }
    return "Error: " + (error as Error).message;
  }
}
```

## Best Practices

1. Always refresh delegations before creating new actors.
2. Implement thorough error handling for authentication and delegation issues.
3. Use a reconnection mechanism to handle session expirations:

```javascript
async function reconnectWallet() {
  if (pnpWalletAdapter.walletActive) {
    try {
      await pnpWalletAdapter.disconnect();
      const principalId = await pnpWalletAdapter.connect(pnpWalletAdapter.walletActive);
      if (principalId) {
        console.log('Reconnected successfully');
      } else {
        console.error('Failed to reconnect');
      }
    } catch (error) {
      console.error("Failed to reconnect wallet:", error);
    }
  }
}
```

4. Regularly verify your canister configurations and keep them updated.
5. For local development, always fetch the root key.

## Advanced Usage: Batch Transactions

For complex operations involving multiple transactions, use the BatchTransact class:

```javascript
import { BatchTransact } from 'w98-plug-n-play';
import { Principal } from '@dfinity/principal';
import { canisters, Canisters } from './canisters';

const transactions = {
  step1: {
    canisterId: canisters[Canisters.MY_CANISTER].canisterId,
    idl: canisters[Canisters.MY_CANISTER].idlFactory,
    methodName: 'myInitMethod',
    updateNextStep: (trxResult, nextTrxItem) => {
      nextTrxItem.args[0].subaccount = [trxResult];
    },
    onSuccess: () => { console.log('Step 1 succeeded'); },
    onFail: () => { console.error('Step 1 failed'); },
    args: []
  },
  step2: {
    canisterId: canisters[Canisters.ANOTHER_CANISTER].canisterId,
    idl: canisters[Canisters.ANOTHER_CANISTER].idlFactory,
    methodName: 'myTransferMethod',
    args: [{
      to: { owner: Principal.fromText(canisters[Canisters.MY_CANISTER].canisterId), subaccount: [] },
      fee: [], memo: [], amount: BigInt(0), from_subaccount: [], created_at_time: []
    }],
  },
};

const batchTransactionObject = new BatchTransact(transactions, pnpWalletAdapter);
try {
  const response = await batchTransactionObject.execute();
  console.log('Batch transaction response:', response);
} catch (error) {
  console.error('Batch transaction failed:', error);
}
```

## License

This project is licensed under the [MIT License](link-to-license-file).

## Support

If you encounter any issues or have questions, please file an issue on our [GitHub issue tracker](link-to-github-issues).

---

For more information about the Internet Computer and Dfinity, visit [https://dfinity.org/](https://dfinity.org/).
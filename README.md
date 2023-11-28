# Artemis Web3 Adapter for Dfinity

Artemis simplifies the process of integrating all Internet computer wallets. It offers convenient features, such as connection, disconnection, and automatic connection, making it the ideal bridge between platforms and their corresponding wallet providers. Incorporation of various functions, such as working with signatures, connecting wallets, and monitoring transaction status. Integration of built-in connectors for various wallets, including Plug, Stoic, Infinity swap, NNS and other wallets. Automatic updating of data in response to changes in the wallet, blocks, and network. Implementation of an inbuilt user interfaces for ease of use.

Artemis acts as a liaison between platforms and their corresponding wallet providers. The Dfinity chain offers a wide range of wallets, each with its unique connection and transaction process. This can be a challenging and time-consuming task for developers to integrate and keep track of all the wallets individually. However, by using the Artemis wallet adapter, developers can effortlessly incorporate all the wallets by following a standard structure for all wallets on the front-end. The adapter takes care of managing all the wallets on the back end. Architecture Artemis standardizes the methods of various wallets and facilitates their integration into the platform. It manages and formalizes all wallet authorization queries. Artemis supports all wallets on the Internet Computer (IC) and their associated methods, including wallet connection, actor, get agent, disconnect, canister calls, and ICP transaction. Artemis communicates with each wallet based on its specific standards. Additionally, Artemis provides a common standard for all wallets, allowing developers to use a single set of documentation for integration purposes. Artemis serves as a mediator between wallets and platforms by communicating with front-end DAPP or any web3 platforms, passing the request to the relevant wallets, and executing transactions using their established standards. To enhance performance, Artemis saves actor data, enabling the adapter to load user information quickly and avoid delays. Developers have the option to utilize our built-in user interface or they can customize it to meet their specific needs. Benefits of using Artemis include:

Developers are not required to individually integrate all wallets, resulting in time savings. The integration process is more reliable and stable. Updating wallets becomes less of a concern as Artemis manages all wallet updates.

## Features

- Simplifies Web3.js integration for Dfinity blockchain development.
- Provides a set of utility functions for common blockchain operations.
- Compatible with the following wallets:
    - Internet Identity
    - Stoic Wallet
    - Plug
    - AstroX ME
    - Infinity Wallet

## Installation

To install Artemis Web3 Adapter for Dfinity, use npm:

```
npm install artemis-web3-adapter
```

## Usage

Import the package into your project:

```
import { Artemis } from 'artemis-web3-adapter';

const connectObj = { whitelist: ['ryjl3-tyaaa-aaaaa-aaaba-cai'], host: 'https://icp0.io/' }

const artemisWalletAdapter = new Artemis(connectObj);

```

or

```

```




## Using Batch Transaction

Import  BatchTransact class

```
import { BatchTransact } from 'artemis-web3-adapter';

    const transactions = {
        initGetAcc1: {
          canisterId: '3xwpq-ziaaa-aaaah-qcn4a-cai',
          idl: SONICSWAP_IDL,
          methodName: 'initiateICRC1Transfer',
          updateNextStep: (trxResult , nextTrxItem) => {
            nextTrxItem.args[0].to.subaccount=[trxResult]
          },
          onSuccess: () => { },
          onFail: () => { },
          args: []
        },
        deposit: {
          canisterId: 'ryjl3-tyaaa-aaaaa-aaaba-cai',
          idl: ICRC1_IDL,
          methodName: 'icrc1_transfer1',
          args: [{
            to: { owner: Principal.fromText('3xwpq-ziaaa-aaaah-qcn4a-cai'), subaccount: [] },
            fee: [], memo: [], amount: BigInt(0), from_subaccount: [], created_at_time: []
          }],
        },
    }

    const batchTransactionObject =  new BatchTransact(transactions, artemisWalletAdapter);

    const resp = await batchTransactionObject.execute();

```






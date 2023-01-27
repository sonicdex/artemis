# Dfinity Wallet Adapter

Artemis simplifies the process of integrating all Internet computer wallets. It offers convenient features, such as connection, disconnection, and automatic connection, making it the ideal bridge between platforms and their corresponding wallet providers.
Incorporation of various functions, such as working with signatures, connecting wallets, and monitoring transaction status.
Integration of built-in connectors for various wallets, including Plug, Stoic, Infinity swap, NNS and other wallets. 
Automatic updating of data in response to changes in the wallet, blocks, and network. Implementation of an inbuilt user interfaces for ease of use.

Artemis acts as a liaison between platforms and their corresponding wallet providers. The Dfinity chain offers a wide range of wallets, each with its unique connection and transaction process. This can be a challenging and time-consuming task for developers to integrate and keep track of all the wallets individually. However, by using the Artemis wallet adapter, developers can effortlessly incorporate all the wallets by following a standard structure for all wallets on the front-end. The adapter takes care of managing all the wallets on the back end.
Architecture
Artemis standardizes the methods of various wallets and facilitates their integration into the platform. It manages and formalizes all wallet authorization queries. Artemis supports all wallets on the Internet Computer (IC) and their associated methods, including wallet connection, actor, get agent, disconnect, canister calls, and ICP transaction. Artemis communicates with each wallet based on its specific standards. Additionally, Artemis provides a common standard for all wallets, allowing developers to use a single set of documentation for integration purposes. Artemis serves as a mediator between wallets and platforms by communicating with front-end DAPP or any web3 platforms, passing the request to the relevant wallets, and executing transactions using their established standards. To enhance performance, Artemis saves actor data, enabling the adapter to load user information quickly and avoid delays. Developers have the option to utilize our built-in user interface or they can customize it to meet their specific needs.
Benefits of using Artemis include: 

Developers are not required to individually integrate all wallets, resulting in time savings. 
The integration process is more reliable and stable. 
Updating wallets becomes less of a concern as Artemis manages all wallet updates.

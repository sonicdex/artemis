

// import { Actor, AnonymousIdentity, HttpAgent } from '@dfinity/agent';
// import { createAuthClient, getAccountIdentifier } from '../libs/identifier-utils';
// import { DelegationChain, DelegationIdentity, Ed25519KeyIdentity, } from "@dfinity/identity";

// import { PostMessageTransport } from "@slide-computer/signer-web";
// import { SignerAgent } from "@slide-computer/signer-agent";
// import { Signer, fromBase64, toBase64 } from "@slide-computer/signer";
// import { Principal } from '@dfinity/principal';
// import { IdbStorage, getDelegationChain, getIdentity, removeDelegationChain, removeIdentity, setDelegationChain, setIdentity, } from "@slide-computer/signer-storage"

// // import { SignerClient } from "@slide-computer/signer-client";
// import { ICRC1_IDL } from '../did'
// import { LocalDStorage } from '../libs/utils';


// export const nfid = {
//     readyState: "Loadable", url: NFIDConfig.url,
//     delegationStorage: new LocalDelegationStorage(),
//     signerAgent: SignerAgent.createSync({
//         signer:new Signer({
//             transport: new PostMessageTransport({
//                 url: NFIDConfig.url,
//                 windowOpenerFeatures: "windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,",
//                 establishTimeout: 45000, disconnectTimeout: 35000, manageFocus: false,
//             }),
//         }),
//         account: Principal.anonymous(),
//         agent: HttpAgent.createSync({ host: NFIDConfig.url }),
//     }),
//     agent: HttpAgent.createSync({ host: NFIDConfig.url }),
//     connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
//         const self = this;
//         self.signer = self.signerAgent.signer;
//         self.storageKey = 'nfid_del_key';

//         var isConn = await this.delegationStorage.get(self.storageKey);
          
//         if(isConn){
//             console.log(isConn);
//         const delegationIdentity = DelegationIdentity.fromDelegation( self.sessionKey, isConn.delegationChain );
//         self.signerAgent.replaceAccount(delegationIdentity.getPrincipal());
//         const principal = delegationIdentity.getPrincipal();
//         var sid = getAccountIdentifier(principal.toString());
//         return { accountId: sid, principalId: principal.toString() } ;
//         }else{
//             if (!this.sessionKey) { 
//                 this.sessionKey = Ed25519KeyIdentity.generate();
//               }
//             const delegationChain = await self.signer.delegation({
//                 publicKey: this.sessionKey.getPublicKey().toDer(),
//                 targets: [],
//                 maxTimeToLive:BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000)
//             });
//             const delegationIdentity = DelegationIdentity.fromDelegation( this.sessionKey, delegationChain );
//             self.signerAgent.replaceAccount(delegationIdentity.getPrincipal());
          
//             self.identity = delegationIdentity;
//             const principal = delegationIdentity.getPrincipal();
//             const sessionData = {
//                sessionKey: this.sessionKey.toJSON(),
//                delegationChain: delegationChain.toJSON(),
//             };

//             var sid = getAccountIdentifier(principal.toString());
//             await this.delegationStorage.set(self.storageKey, sessionData);
//             return { accountId: sid, principalId: principal.toString() } ;
//         }
        

//         //self.agent = HttpAgent.createSync({ host: self.url });
       
     
    

//         //   const delegationIdentity = DelegationIdentity.fromDelegation( this.sessionKey, delegationChain );

//         //   self.signerAgent.replaceAccount(delegationIdentity.getPrincipal());
//         //   const principal = delegationIdentity.getPrincipal();
//         //   self.signerAgent = SignerAgent.createSync({ signer: self.signer, account: principal, });
//         //   self.identity = delegationIdentity;
//         //   const sessionData = {
//         //     sessionKey: this.sessionKey.toJSON(),
//         //     delegationChain: delegationChain.toJSON(),
//         //   };
//         //   await this.delegationStorage.set(self.storageKey, sessionData);
    
//     }
// }


// var self = this, returnData = {};
// const transport = new PostMessageTransport({
//     url: this.url,
//     windowOpenerFeatures: "width=525,height=705",
//     establishTimeout: 45000,
//     disconnectTimeout: 35000,
//     manageFocus: false,
// });
// const signer = new Signer({ transport });

// const userPrincipal = (await signer.accounts())[0].owner;
// const signerAgent = SignerAgent.createSync({
//     signer: signer,
//     account: userPrincipal
// });
// console.log(signer, signerAgent, userPrincipal)

// const actor = Actor.createActor(ICRC1_IDL, {
//     agent: this.signerAgent,
//     canisterId: "ryjl3-tyaaa-aaaaa-aaaba-cai",
// });

// console.log(actor);
// return new Promise(async (resolve, reject) => {
//     try {
//         const TRANSPORT_CONFIG = {
//             windowOpenerFeatures: "width=525,height=705",
//             establishTimeout: 45000,
//             disconnectTimeout: 45000,
//         };
//         self.agent = HttpAgent.createSync({ host: this.url });
//         var signerAgent = SignerAgent.createSync({
//             signer: new Signer({ transport: new PostMessageTransport({ url: self.url, ...TRANSPORT_CONFIG }) }),
//             account: Principal.anonymous(),
//             agent: self.agent
//         });


//         // const onDisconnect = () => console.log('The user has close the wallet popup.');
//         // const wallet = await IcpWallet.connect({ url: self.url, host: connectObj.host, windowOptions: { width: 525, height: 705, position: 'center', }, establishTimeout: 45000, disconnectTimeout: 45000, }, onDisconnect);
//         // self.agent = HttpAgent.createSync({ host: this.url })
//         // var signerAgent = await SignerAgent.createSync({
//         //     signer: new Signer({ transport: new PostMessageTransport({ url: this.url}) }),
//         //     account: Principal.anonymous(),
//         //     agent: self.agent
//         //   });
//         // const signer = Signer.init({ owner: signerAgent, host: connectObj.host });
//         // console.log(signerAgent)

//         // const TRANSPORT_CONFIG = {
//         //     windowOpenerFeatures: "width=525,height=705",
//         //     establishTimeout: 45000,
//         //     disconnectTimeout: 45000,
//         // };

//         // self.agent = HttpAgent.createSync({ host: this.url });

//         // var signerAgent = SignerAgent.createSync({
//         //     signer: new Signer({ transport: new PostMessageTransport({ url: self.url, ...TRANSPORT_CONFIG }) }),
//         //     account: Principal.anonymous(),
//         //     agent: self.agent
//         // });


//         // console.log(signerAgent);
//         // const accounts = await signerAgent.signer.accounts();


//         // const onDisconnect = () => console.log('The user has close the wallet popup.');
//         // const wallet = await IcpWallet.connect({ url: self.url, host: connectObj.host, windowOptions: { width: 525, height: 705, position: 'center', }, establishTimeout: 45000, disconnectTimeout: 45000, } ,  onDisconnect);

//         // const { allPermissionsGranted } = await wallet.requestPermissionsNotGranted();

//         // self.authClient = await AuthClient.create({
//         //     idleOptions: {
//         //         disableIdle: true,
//         //         idleTimeout: 1000 * 60 * 60 * 12,
//         //         disableDefaultIdleCallback: true,
//         //     }
//         // });

//         // console.log(wallet, self.authClient);

//         // console.log('allPermissionsGranted' , allPermissionsGranted);

//         // await wallet.disconnect();

//         // if (!allPermissionsGranted) { reject((false)); }

//         // var isConnected = await self.authClient.isAuthenticated();



//         // console.log(isConnected)
//         // var identity = await self.authClient.getIdentity();
//         // var principal = await identity?.getPrincipal();

//         // console.log(identity , principal.toString())
//         //
//         // const { allPermissionsGranted } = await wallet.requestPermissionsNotGranted();
//         // if (!allPermissionsGranted) { resolve((false)); }
//         // const accounts = await wallet.accounts();
//         // const account = accounts?.[0];
//         // var sid = await getAccountIdentifier(account.owner);
//         // const returnData = { accountId: sid, principalId: account.owner }
//         // await wallet.disconnect();

//         // //self.agent = HttpAgent.createSync({ identity: identity, host: connectObj.host });
//         // const signer = Signer.init({ owner: account.owner, host: connectObj.host });
//         // console.log(signer)
//         // resolve(returnData);

//         // const signer = Signer.init({ owner: account.owner, host: connectObj.host });
//         // await wallet.disconnect();


//         // signer.register({
//         //     method: ICRC49_CALL_CANISTER,
//         //     prompt: ({ status: s }) => {
//         //         status = s;

//         //         setTimeout(() => {
//         //             emit({
//         //                 message: 'oisyDemoReloadBalance'
//         //             });
//         //         }, 2000);
//         //     }
//         // });






//         // const request = {
//         //     owner: {
//         //         owner: Principal.fromText('q4pfp-u2uym-tnvgd-rwnwg-5r5we-2p5e7-vuwuz-h774f-5hkwy-jm2gc-tqe'),
//         //         subaccount: []
//         //     },
//         //     amount: 1000n
//         // };

//         // await wallet.icrc1Transfer({
//         //     owner: account.owner,
//         //     request
//         // });

//         return;
//         let scopes = undefined;
//         let confirm = undefined;
//         let approveAccounts = undefined;
//         signer.register({
//             method: ICRC27_ACCOUNTS,
//             prompt: ({ approve: approveAccounts }) => {
//                 approve = approveAccounts;
//             }
//         });
//     } catch (error) {
//         console.log(error)
//         reject(error);
//     }
// });



// let scopes = undefined;
// let confirm = undefined;
// const accounts = await wallet.accounts();
// const account = accounts?.[0];
// const signer = Signer.init({ owner: account.owner, host: connectObj.host });
// signer.register({
//     method: ICRC25_REQUEST_PERMISSIONS,
//     prompt: ({ confirm: confirmScopes, requestedScopes }) => {
//         scopes = requestedScopes;
//         confirm = confirmScopes;
//     }
// });

// const { allPermissionsGranted } = await wallet.requestPermissionsNotGranted();


// const {allPermissionsGranted} = await wallet.requestPermissionsNotGranted();

// console.log(allPermissionsGranted);
// await self.authClient.login({
//     identityProvider: url,
//     host: connectObj.host,
//     windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,
//     maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
//     onSuccess: async () => {
//         var identity = await self.authClient.getIdentity();
//         var principal = await identity?.getPrincipal();

//         console.log(principal);
//     }
// });

// const { allPermissionsGranted } = await wallet.requestPermissionsNotGranted();

// var TRANSPORT_CONFIG = {
//     windowOpenerFeatures: "width=525,height=705",
//     establishTimeout: 45000,
//     disconnectTimeout: 45000,
// };
// this.agent = HttpAgent.createSync({ host: url })
// const signer = Signer.init({ owner: account.owner, host: connectObj.host });
// var signerAgent = Signer.createSync({
//     signer: new Signer({ transport: new PostMessageTransport({ url: url, TRANSPORT_CONFIG }) }),
//     account: Principal.anonymous(),
//     agent: this.agent
//});




//     const { allPermissionsGranted } = await wallet.requestPermissionsNotGranted();
//     if (!allPermissionsGranted) {
//         return;
//     }
//     const accounts = await wallet.accounts();
//     const account = accounts?.[0];
//     var sid = await getAccountIdentifier(account.owner);
//   //  const signer = Signer.init({ owner: account.owner, host: connectObj.host });

//     self.getPrincipal = async function () { return account.owner }
//     self.disConnectWallet = async function () { await wallet.disconnect() }
//     // console.log( { accountId: sid, principalId: account.owner } )
//     const returnData = { accountId: sid, principalId: account.owner }
//     resolve(returnData);

// let identity = Ed25519KeyIdentity.generate(crypto.getRandomValues(new Uint8Array(32)))
// try {
//     if (self.state == 'conneting') return false;
//     self.state = 'conneting';
//     if (!self.sessionKey) { self.sessionKey = Ed25519KeyIdentity.generate(); }
//     // const accounts = await self.signer.accounts();
//     // const signerAgent = await SignerAgent.create({ signer:self.signer, account: accounts[0].owner });
//     // self.signer = signerAgent.signer;

//     var id
//    var t = connectObj.whitelist.map(x => Principal.fromText(x));

//    var stat =   await self.signer.requestPermissions([
//     { method: "icrc27_accounts" },
//     {
//       method: "icrc34_delegation",
//       targets: connectObj.whitelist,
//     },
//     // { method: "icrc49_call_canister" },
//   ]);


//    var stat =  await self.signer.delegation({
//             publicKey: identity.getPublicKey().toDer(),
//             targets: t,
//             maxTimeToLive:BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
//     })

//    console.log(stat , self.signer);
    
    
//     // const delegationChain = await self.signer.delegation({
//     //         publicKey:  signerAgent.rootKey,
//     //         targets: t,
//     //         maxTimeToLive:BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
//     // });

//  //   console.log(signerAgent);
//     //     self.signer = self.signerAgent.signer;
//     //     var t = connectObj.whitelist.map(x => Principal.fromText(x));

//     //    // const userAccounts = await self.signer.accounts();


//     //     const delegationChain = await self.signer.delegation({
//     //         publicKey:  self.sessionKey.getPublicKey().toDer(),
//     //         targets: t,
//     //         maxTimeToLive:BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
//     //     });

//     //     console.log(delegationChain  );



//     // self.agent = HttpAgent.createSync({ host: self.url });
//     // var t = connectObj.whitelist.map(x => Principal.fromText(x));
//     // const delegationChain = await this.signer.delegation({
//     //     publicKey: self.sessionKey.getPublicKey().toDer(),
//     //     targets: t,
//     //     maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
//     // });
//     // const delegationIdentity = DelegationIdentity.fromDelegation(self.sessionKey, delegationChain);

//     // console.log(delegationIdentity);




//     // self.delegationStorage = new LocalDelegationStorage();
//     // const transport = new PostMessageTransport({
//     //     url: self.url,
//     //     windowOpenerFeatures: "windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,",
//     //     maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
//     //     establishTimeout: 45000, disconnectTimeout: 35000, manageFocus: false,
//     // });
//     // const signer = new Signer({ transport });
//     // const signerAgent = SignerAgent.createSync({signer:signer});
//     // //const userAccounts = await signer.accounts();
//     // var t = connectObj.whitelist.map(x => Principal.fromText(x));

//     // const delegationChain = await signer.delegation({
//     //     publicKey: self.sessionKey.getPublicKey().toDer(),
//     //     targets: t,
//     //     maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
//     // });
//     // const delegationIdentity = DelegationIdentity.fromDelegation(self.sessionKey,delegationChain);
//     // signerAgent.replaceAccount(delegationIdentity.getPrincipal());

//     // const principal = delegationIdentity.getPrincipal();
//     // console.log(signer);




//     //     const signerAgent = SignerAgent.createSync({
//     //         signer: new Signer({
//     //             transport: new PostMessageTransport({
//     //                 url: self.url,
//     //                 windowOpenerFeatures: "windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,",
//     //                 establishTimeout: 45000, disconnectTimeout: 35000,
//     //             }),
//     //         }),
//     //         account: Principal.fromText('n4bdu-yfmty-b3apu-gskck-p573w-c3ngx-g4gd3-mfg6v-yl5r2-ibe7m-rae'),
//     //         agent: HttpAgent.createSync({ host: this.url }),
//     //     });
//     //     self.signer = signerAgent.signer;
//     //    const userAccounts = await self.signer.accounts();

//     //     console.log(self.signer);
//     //     // var t = connectObj.whitelist.map(x=>Principal.fromText(x))
//     //     // const delegationChain = await self.signer.delegation({
//     //     //     publicKey: self.sessionKey.getPublicKey().toDer(),
//     //     //     targets:t,
//     //     //     maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
//     //     // });
//     //     console.log( userAccounts);





//     //     
//     //     self.agent = HttpAgent.createSync({ host: this.url });
//     //     const targets =[];
//     //     const userAccounts = await self.signer.accounts();
//     //     const delegationChain = await  self.signer.delegation({
//     //         publicKey: this.sessionKey.getPublicKey().toDer(),
//     //         targets: ,
//     //         maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000), 
//     //     });
//     //    // const delegationIdentity = DelegationIdentity.fromDelegation( self.sessionKey, delegationChain );

//     //     console.log( delegationChain);

//     // signerAgent.replaceAccount(delegationIdentity.getPrincipal());
//     // const principal = delegationIdentity.getPrincipal();
//     // signerAgent = SignerAgent.createSync({ signer: self.signer, account: principal, });
//     // console.log(principal.toString())

//     self.state = 'connected';

// } catch (e) {
//     self.state = 'error';
//     console.log(e);

// }



// const transport = new PostMessageTransport({
//     url: this.url,
//     windowOpenerFeatures: "windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,",
//     maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
//     establishTimeout: 45000, disconnectTimeout: 35000, manageFocus: false,
// });
// const signer = new Signer({ transport });
// const userAccounts = await signer.accounts();
// const userPrincipal = userAccounts[0].owner;

// console.log(userPrincipal, signer);

// self.agent = SignerAgent.createSync({ signer: signer, account: userPrincipal });
// var sid = await getAccountIdentifier(userPrincipal.toString());

// self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
//     if (!connObj.canisterId || !connObj.interfaceFactory) return false;
//     return await Actor.createActor(connObj.interfaceFactory, { agent: self.agent, canisterId: connObj.canisterId });
// };

// self.createAgent = async function () {
//     return self.agent;
//     // HttpAgent.createSync({ identity: identity, host: connectObj.host });
// };
// self.getPrincipal = async function () { return self.agent.getPrincipal() }
// self.disConnectWallet = async function () {
//     self.createActor = null;
//     self.createAgent = null;
//     self.getPrincipal = null;

// }
// return { accountId: sid, principalId: userPrincipal.toString() }


//v1

//     // const act = await self.createActor({ canisterId:"ryjl3-tyaaa-aaaaa-aaaba-cai" , interfaceFactory: ICRC1_IDL })

//    // console.log(act);

//     // const actor = Actor.createActor(ICRC1_IDL, {
//     //     agent: self.agent ,
//     //     canisterId:"ryjl3-tyaaa-aaaaa-aaaba-cai",
//     //   });

//     //   console.log(actor);
//    // const permissions = await signer.requestPermissions([createAccountsPermissionScope()]);
//     //await transport.connection.connect();


//     //console.log(signerClient);
//     // self.agent = HttpAgent.createSync({ host: this.url });
//     // // self.authClient = await createAuthClient();
//     // var sessionKey = Ed25519KeyIdentity.generate();
//     // var da = [];
//     // const maxTTL = BigInt(24 * 60 * 60) * BigInt(10 ** 9);
//     // const delegationChain = await self.signer.delegation({
//     //   publicKey: sessionKey.getPublicKey().toDer(),
//     //   targets: da,
//     //   maxTimeToLive: maxTTL,
//     // });

//    // console.log(delegationChain , self.signer);

//    return false;
//    return new Promise(async (resolve, reject) => {


//        // var isConnected = await self.authClient.isAuthenticated();
//        // if (!isConnected) {
//        //     self.authClient.login({
//        //         identityProvider: 'https://nfid.one/authenticate/?applicationName=' + window.location.hostname,
//        //         maxTimeToLive: BigInt(((60 * 60 * 1000 * 24 * 7) * 1000 * 1000)),
//        //         windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,
//        //         onSuccess: async () => {
//        //             returnData = await continueLogin();
//        //             resolve(returnData);
//        //         },
//        //     });
//        // } else {
//        //     returnData = await continueLogin();
//        //     resolve(returnData);
//        // }
//        // async function continueLogin() {
//        //     var identity = await self.authClient.getIdentity();
//        //     var principal = await identity?.getPrincipal();
//        //     self.agent =  HttpAgent.createSync({ identity: identity, host: connectObj.host });
//        //     var sid = await getAccountIdentifier(identity?.getPrincipal().toString());

//        //     self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
//        //         if (!connObj.canisterId || !connObj.interfaceFactory) return false;
//        //         return await Actor.createActor(connObj.interfaceFactory, { agent: this.agent, canisterId: connObj.canisterId });
//        //     };
//        //     self.createAgent = async function () {
//        //         return  HttpAgent.createSync({ identity: identity, host: connectObj.host });
//        //     };
//        //     self.getPrincipal = async function () { return identity.getPrincipal() }
//        //     self.disConnectWallet = async function () { await self.authClient.logout() }
//        //     return { accountId: sid, principalId: principal.toString() }
//        //}
//    })
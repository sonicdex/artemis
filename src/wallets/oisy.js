import { getAccountIdentifier } from '../libs/identifier-utils';

import { IcpWallet } from '@dfinity/oisy-wallet-signer/icp-wallet';

import { AuthClient } from "@dfinity/auth-client";
import { Actor, HttpAgent } from '@dfinity/agent';
import {
    ICRC25_REQUEST_PERMISSIONS, ICRC27_ACCOUNTS,
    ICRC21_CALL_CONSENT_MESSAGE, ICRC49_CALL_CANISTER
} from '@dfinity/oisy-wallet-signer';
import { Principal } from '@dfinity/principal';

import { PostMessageTransport } from "@slide-computer/signer-web";
import { SignerAgent } from "@slide-computer/signer-agent";
import { createAccountsPermissionScope, Signer } from "@slide-computer/signer";


import { ICRC1_IDL } from '../did'

export const oisyWallet = {
    readyState: "Loadable", url: "https://oisy.com/sign",
    authClient: false,
    connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
        var self = this, returnData = {};

                var self = this, returnData = {};
               const transport =  new PostMessageTransport({
                    url: this.url,
                    windowOpenerFeatures: "width=525,height=705",
                    establishTimeout: 45000,
                    disconnectTimeout: 35000,
                    manageFocus: false,
                });
                const signer = new Signer({transport});
                await signer.requestPermissions([
                    { method: "icrc27_accounts" },
                    {
                      method: "icrc34_delegation",
                      targets: connectObj.whitelist,
                    },
                    { method: "icrc49_call_canister" },
                  ]);
                const userPrincipal = (await signer.accounts())[0].owner;
                const signerAgent = SignerAgent.createSync({
                    signer: signer,
                    account: userPrincipal
                });
                console.log(signer,signerAgent,userPrincipal)
        
                const actor = Actor.createActor(ICRC1_IDL, {
                    agent: this.signerAgent,
                    canisterId:"ryjl3-tyaaa-aaaaa-aaaba-cai",
                  });
        
                  console.log(actor);
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
    }
}




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
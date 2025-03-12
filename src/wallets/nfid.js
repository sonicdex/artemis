import { Actor, HttpAgent } from '@dfinity/agent';
import { createAuthClient, getAccountIdentifier } from '../libs/identifier-utils';

import { Ed25519KeyIdentity } from "@dfinity/identity";
// import { HttpAgent} from "@dfinity/agent";

import { PostMessageTransport } from "@slide-computer/signer-web";
import { SignerAgent } from "@slide-computer/signer-agent";
import { createAccountsPermissionScope, Signer } from "@slide-computer/signer";
import { Principal } from '@dfinity/principal';

import { SignerClient } from "@slide-computer/signer-client";
import { ICRC1_IDL } from '../did'

export const nfid = {
    readyState: "Loadable", url: "https://nfid.one/rpc",
    authClient: false,
    connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
        var self = this, returnData = {};
       const transport =  new PostMessageTransport({
            url: this.url,
            windowOpenerFeatures: "width=525,height=705",
            establishTimeout: 45000,
            disconnectTimeout: 35000,
            manageFocus: false,
        });
        const signer = new Signer({transport});
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
       // const permissions = await signer.requestPermissions([createAccountsPermissionScope()]);
        //await transport.connection.connect();


        //console.log(signerClient);
        // self.agent = HttpAgent.createSync({ host: this.url });
        // // self.authClient = await createAuthClient();
        // var sessionKey = Ed25519KeyIdentity.generate();
        // var da = [];
        // const maxTTL = BigInt(24 * 60 * 60) * BigInt(10 ** 9);
        // const delegationChain = await self.signer.delegation({
        //   publicKey: sessionKey.getPublicKey().toDer(),
        //   targets: da,
        //   maxTimeToLive: maxTTL,
        // });

       // console.log(delegationChain , self.signer);

        return false;
        return new Promise(async (resolve, reject) => {


            // var isConnected = await self.authClient.isAuthenticated();
            // if (!isConnected) {
            //     self.authClient.login({
            //         identityProvider: 'https://nfid.one/authenticate/?applicationName=' + window.location.hostname,
            //         maxTimeToLive: BigInt(((60 * 60 * 1000 * 24 * 7) * 1000 * 1000)),
            //         windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,
            //         onSuccess: async () => {
            //             returnData = await continueLogin();
            //             resolve(returnData);
            //         },
            //     });
            // } else {
            //     returnData = await continueLogin();
            //     resolve(returnData);
            // }
            // async function continueLogin() {
            //     var identity = await self.authClient.getIdentity();
            //     var principal = await identity?.getPrincipal();
            //     self.agent =  HttpAgent.createSync({ identity: identity, host: connectObj.host });
            //     var sid = await getAccountIdentifier(identity?.getPrincipal().toString());

            //     self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
            //         if (!connObj.canisterId || !connObj.interfaceFactory) return false;
            //         return await Actor.createActor(connObj.interfaceFactory, { agent: this.agent, canisterId: connObj.canisterId });
            //     };
            //     self.createAgent = async function () {
            //         return  HttpAgent.createSync({ identity: identity, host: connectObj.host });
            //     };
            //     self.getPrincipal = async function () { return identity.getPrincipal() }
            //     self.disConnectWallet = async function () { await self.authClient.logout() }
            //     return { accountId: sid, principalId: principal.toString() }
            //}
        })
    }
}
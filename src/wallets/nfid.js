import { Actor, HttpAgent } from '@dfinity/agent';
import { getAccountIdentifier } from '../libs/identifier-utils';
import { AuthClient } from "@dfinity/auth-client";
import { PostMessageTransport } from '@slide-computer/signer-web';
import { Signer } from '@slide-computer/signer';
import { SignerAgent } from '@slide-computer/signer-agent';
import { LocalDStorage } from '../libs/utils';
import { Principal } from '@dfinity/principal';

const NFIDConfig = {
    url: "https://nfid.one/rpc"
}

export const nfid = {
    readyState: "Loadable", url: NFIDConfig.url,
    authClient: false,
    connectWallet: async function (params) {
        var self = this, returnData = {};
        self.storageKey = 'nfid_del_key';
        var storage = new LocalDStorage();
        var t = await storage.get(self.storageKey);
        const transport = new PostMessageTransport({
            url: this.url,
            windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,
            maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
            establishTimeout: 45000, disconnectTimeout: 35000, manageFocus: false,
           // detectNonClickEstablishment:false
        });
        const signer = new Signer({ transport });
        const accounts = await signer.accounts();

        
        console.log(transport.connection);
        if (transport.connection && !transport.connection.connected) {
            
            await transport.connection.connect();
        }
       

        return false;

       
        if(accounts[0].owner){
            storage.set(self.storageKey , { userId: accounts[0].owner} )
        }
        self.agent = SignerAgent.createSync({ signer: signer, account: accounts[0].owner });

        self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
            if (!connObj.canisterId || !connObj.interfaceFactory) return false;
            return await Actor.createActor(connObj.interfaceFactory, { agent: self.agent, canisterId: connObj.canisterId });
        };
        const userPrincipal = await self.agent?.getPrincipal();

        console.log(userPrincipal);


        var sid = getAccountIdentifier(userPrincipal.toString());
        self.getPrincipal = async function () { return await self.agent?.getPrincipal() }
        self.disConnectWallet = async function () {
            self.createActor = null;
            self.agent = null;
            self.getPrincipal = null;
        }
        return { accountId: sid, principalId: userPrincipal.toString() }
    }
}
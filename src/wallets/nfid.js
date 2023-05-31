import { AuthClient } from "@dfinity/auth-client"
import { Actor, ActorSubclass, HttpAgent } from "@dfinity/agent"
import { SignIdentity } from '@dfinity/agent';

export const nfid = {
    readyState: "Loadable", url: "https://nfid.one/",
    authClient: false,
    connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
        this.authClient = await AuthClient.create();
        const self = this;
        return new Promise(async (resolve, reject) => {  
            await new Promise((resolve, reject) => {
                self.authClient.login({
                    identityProvider:'https://nfid.one/authenticate/?applicationName='+window.location.hostname,
                    onSuccess: resolve,
                    onError: reject,
                })
            })
            const identity =  self.authClient.getIdentity();
            const principal = identity.getPrincipal().toString();

            console.log(identity ,principal )

            //             console.log(identity , identity);


            //             if (!isConnected) {
            //               await  authClient.login({
            //                     identityProvider: 'https://nfid.one/authenticate',
            //                     windowOpenerFeatures: 
            //   `left=${window.screen.width / 2 - 525 / 2}, `+ 
            //   `top=${window.screen.height / 2 - 705 / 2},` + 
            //   `toolbar=0,location=0,menubar=0,width=525,height=705`,
            //                     onSuccess: async (data) => {


            //                         var identity = authClient.getIdentity();
            //                         var authClient = await AuthClient.create({});
            //                         console.log(data);

            //                         // returnData = await continueLogin();
            //                         // resolve(returnData);
            //                     }
            //                 });
            //             }

            //             var identity = authClient.getIdentity();

            //             var isConnected = await authClient.isAuthenticated();

            //             console.log(identity , isConnected);
            // authClient.login({
            //     // TODO: local
            //     identityProvider: 'https://nfid.one' + `/authenticate/?applicationName=sonic`,
            //     onSuccess: resolve,
            //     onError: reject,
            //   })
        })
    }
}
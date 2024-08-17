import { StoicIdentity } from '../utils/stoicidentity';
import { Actor, HttpAgent } from '@dfinity/agent';

export const stoic = {
    readyState: "Loadable",
    url: 'https://www.stoicwallet.com/',
    connectWallet: async function (connectObj = { whitelist: [], host: 'http://localhost:4943', identityProvider: "" }) {
        let identity = await StoicIdentity.load();

        console.log(identity);

        if (!identity) {
            identity = await StoicIdentity.connect();
        }
        let getAcnts = await identity.accounts();
        getAcnts = JSON.parse(getAcnts);

        // Create the HttpAgent instance correctly
        this.agent = HttpAgent.createSync({ identity, host: connectObj.host });

        // If we're in a local development environment, fetch the root key
        if (connectObj.host.includes('localhost') || connectObj.host.includes('127.0.0.1')) {
            await this.agent.fetchRootKey().catch(err => {
                console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
                console.error(err);
            });
        }

        this.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
            if (!connObj.canisterId || !connObj.interfaceFactory) return false;
            return Actor.createActor(connObj.interfaceFactory, { agent: this.agent, canisterId: connObj.canisterId });
        };

        this.createAgent = function () {
            return HttpAgent.createSync({ identity, host: connectObj.host });
        };

        this.getPrincipal = function () { return identity.getPrincipal() };

        this.disConnectWallet = async function () {
            StoicIdentity.disconnect();
        };

        return { 
            stoicAccounts: getAcnts, 
            accountId: getAcnts[0].address, 
            principalId: identity._principal.toString() 
        };
    }
};
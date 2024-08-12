import { StoicIdentity } from '../utils/stoicidentity';
import { Actor, HttpAgent } from '@dfinity/agent';

export const stoic = {
    readyState: "Loadable",
    url: 'https://www.stoicwallet.com/',
    connectWallet: async function (connectObj = { whitelist: [], host: 'http://localhost:4943' }) {
        let identity = await StoicIdentity.load();

        console.log(identity);

        if (!identity) {
            identity = await StoicIdentity.connect();
        }
        let getAcnts = await identity.accounts();
        getAcnts = JSON.parse(getAcnts);

        // Create the HttpAgent instance correctly
        this.agent = new HttpAgent({ identity, host: connectObj.host });

        // If we're in a local development environment, fetch the root key
        if (connectObj.host.includes('localhost') || connectObj.host.includes('127.0.0.1')) {
            await this.agent.fetchRootKey().catch(err => {
                console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
                console.error(err);
            });
        }

        this.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
            if (!connObj.canisterId || !connObj.interfaceFactory) return false;
            return await Actor.createActor(connObj.interfaceFactory, { agent: this.agent, canisterId: connObj.canisterId });
        };

        this.createAgent = function () {
            return new HttpAgent({ identity, host: connectObj.host });
        };

        this.getPrincipal = function () { return identity.getPrincipal() };

        this.disConnectWallet = async function () {
            await StoicIdentity.disconnect();
        };

        return { 
            stoicAccounts: getAcnts, 
            accountId: getAcnts[0].address, 
            principalId: identity._principal.toString() 
        };
    }
};
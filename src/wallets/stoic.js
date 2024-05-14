import { StoicIdentity } from '../libs/stoicidentity';
import { Actor, HttpAgent } from '@dfinity/agent';

export const stoic = {
    readyState: "Loadable", url: 'https://www.stoicwallet.com/',
    connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
        var identity = await StoicIdentity.load();

        console.log(identity);

        
        if (!identity) { identity = await StoicIdentity.connect(); }
        let getAcnts = await identity.accounts();
        getAcnts = JSON.parse(getAcnts);

        this.agent = new HttpAgent({ identity, host: connectObj.host });

        this.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
            if (!connObj.canisterId || !connObj.interfaceFactory) return false;
            return await Actor.createActor(connObj.interfaceFactory, { agent: this.agent, canisterId: connObj.canisterId });
        };
        this.createAgent = function () {
            return new HttpAgent({ identity, host: connectObj.host });
        };
        this.getPrincipal = function () { return identity.getPrincipal() }
        this.disConnectWallet = async function () {
            await StoicIdentity.disconnect();
        }
        return { stoicAccounts: getAcnts, accountId: getAcnts[0].address, principalId: identity._principal.toString() }
    }
};
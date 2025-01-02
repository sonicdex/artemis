import { getAccountIdentifier } from '../libs/identifier-utils';
import { Signer } from '@dfinity/oisy-wallet-signer/signer';

import { IcpWallet } from '@dfinity/oisy-wallet-signer/icp-wallet';

export const oisyWallet = {
    readyState: "Loadable", url: "https://identity.ic0.app",
    authClient: false,
    connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
        var self = this, returnData = {}
        return new Promise(async (resolve, reject) => {
            try {
                const wallet = await IcpWallet.connect({
                    url: 'https://oisy.com/sign', host: connectObj.host,
                });
                const { allPermissionsGranted } = await wallet.requestPermissionsNotGranted();
                if (!allPermissionsGranted) {
                    return;
                }
                const accounts = await wallet.accounts();
                const account = accounts?.[0];
                var sid = await getAccountIdentifier(account.owner);
                const signer = Signer.init({ owner: account.owner, host: connectObj.host });
                
                self.getPrincipal = async function () { return account.owner }
                self.disConnectWallet = async function () { await wallet.disconnect() }
                // console.log( { accountId: sid, principalId: account.owner } )
                const returnData = { accountId: sid, principalId: account.owner }
                resolve(returnData);
            } catch (error) {
                resolve(false);
            }
        });
    }
}
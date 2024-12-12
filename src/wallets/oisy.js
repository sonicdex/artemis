import { Actor, HttpAgent } from '@dfinity/agent';
import { getAccountIdentifier } from '../libs/identifier-utils';
import { AuthClient } from "@dfinity/auth-client";
import { Signer } from '@dfinity/oisy-wallet-signer/signer';
import {IcpWallet} from '@dfinity/oisy-wallet-signer/icp-wallet';

export const oisyWallet = {
    readyState: "Loadable", url: "https://identity.ic0.app",
    authClient: false,
    connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
        var self = this, returnData = {};
        return new Promise(async (resolve, reject) => {
            const wallet = await IcpWallet.connect({
                url: 'https://staging.oisy.com/sign'
                
              });

              console.log(wallet);
        });
    }
}
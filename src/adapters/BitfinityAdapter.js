// src/adapters/BitfinityAdapter.js

window.onload = function() {     
    if(window.ic && window.ic.infinityWallet) bitfinity.readyState = 'Installed';
};

export const bitfinity = window.ic && window.ic.infinityWallet ? {
    readyState: "Installed",
    connectWallet: async function (connectObj = { whitelist: [], host: 'http://localhost:4943', identityProvider: '' }) {
        var isconn = await window.ic.infinityWallet.isConnected();
        if (!isconn) {
            await window.ic.infinityWallet.requestConnect({ whitelist: connectObj.whitelist });
        }
        this.agent = window.ic.infinityWallet;

        this.getPrincipal = async function () { return window.ic.infinityWallet.getPrincipal() };
        this.createActor = async function (canisterId, interfaceFactory, host) { 
            return window.ic.infinityWallet.createActor({
                canisterId,
                interfaceFactory,
                host: 'http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943',
            });
        };
        this.batchTransactions = async function (t1) { return window.ic.infinityWallet.batchTransactions(t1) };

        var prinObj = await this.getPrincipal();
        var acntid = await window.ic.infinityWallet.getAccountID();
        return { accountId: acntid, principalId: prinObj.toString() };
    },
    disConnectWallet: async function () {
        await window.ic.infinityWallet.disconnect();
    },
} : { readyState: 'NotDetected', url: 'https://wallet.infinityswap.one/' };
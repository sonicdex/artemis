export const bitfinity= window.ic ? window.ic.bitfinityWallet && "InfinityWallet!" ? {
    readyState: "Installed",
    connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
        var isconn = await window.ic.bitfinityWallet.isConnected();
        if (!isconn) {
            let s = await window.ic.bitfinityWallet.requestConnect(connectObj)
        }
        if (!window.ic.bitfinityWallet.agent) {
            await window.ic.bitfinityWallet.requestConnect(connectObj)
        }
        this.agent = window.ic.bitfinityWallet.agent;

        this.getPrincipal = async function () { return window.ic.bitfinityWallet.getPrincipal() }
        this.createActor = async function (t1) { return window.ic.bitfinityWallet.createActor(t1) };
        var prinObj = await this.getPrincipal();
        var acntid = await window.ic.bitfinityWallet.getAccountID()
        return { accountId: acntid, principalId: prinObj.toString() }
    },
    disConnectWallet: async function () {
        await window.ic.bitfinityWallet.disconnect();
    },
} : { readyState: 'NotDetected', url: 'https://wallet.infinityswap.one/' } : { readyState: 'NotDetected', url: 'https://wallet.infinityswap.one/' };
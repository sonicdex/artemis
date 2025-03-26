

window.onload = function () {
    if (window.ic.bitfinityWallet) bitfinity.readyState = 'Installed';
};

export const bitfinity = window?.ic && window.ic.bitfinityWallet && "InfinityWallet!" ? {
    readyState: "Installed",
    connectWallet: function (connectObj = { whitelist: [], host: '' }) {
        var self = this;
        return new Promise(async (resolve, reject) => {
            if (self.state == 'conneting') resolve(false);;
            self.state = 'conneting';
            try {
                var isconn = await window.ic.bitfinityWallet.isConnected();
                if (!isconn) {
                    let s = await window.ic.bitfinityWallet.requestConnect(connectObj)
                }
                if (!window.ic.bitfinityWallet.agent) {
                    await window.ic.bitfinityWallet.requestConnect(connectObj)
                }
                self.agent = window.ic.bitfinityWallet.agent;
                self.getPrincipal = async function () { return window.ic.bitfinityWallet.getPrincipal() }
                self.createActor = async function (t1) { return window.ic.bitfinityWallet.createActor(t1) };
                self.batchTransactions = async function (t1) { return window.ic.bitfinityWallet.batchTransactions(t1) };
                var prinObj = await self.getPrincipal();
                var acntid = await window.ic.bitfinityWallet.getAccountID()
                self.state = 'conneting';
                resolve({ accountId: acntid, principalId: prinObj.toString() })
            } catch (error) {
                self.state = 'error';
                resolve(false)
            }

        })
    },
    disConnectWallet: async function () {
        await window.ic.bitfinityWallet.disconnect();
    },
} : { readyState: 'NotDetected', url: 'https://wallet.infinityswap.one/' } ;
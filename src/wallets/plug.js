

// const MAX_PLUG_WHITELIST_NUMBER = 200;

export const plug = {
    readyState: "NotDetected",
    url: 'https://plugwallet.ooo/',

    connectWallet: async function (connectObj = { whitelist: [], host: '', }) {
        var self = this;
        return new Promise(async (resolve, reject) => {
            if (!window.ic.plug) { self.readyState = 'NotDetected'; window.open("https://plugwallet.ooo/"); }
            var isConnected = false;
            isConnected = await window.ic.plug.isConnected();
          //  connectObj.whitelist = connectObj.whitelist.length > MAX_PLUG_WHITELIST_NUMBER ? this.config.whitelist.slice(0, MAX_PLUG_WHITELIST_NUMBER): this.config.whitelist;
            try {
                if (isConnected) {
                    await window.ic.plug.createAgent(connectObj)
                } else {
                    await window.ic.plug.requestConnect(connectObj);
                }
                self.principal = window.ic.plug.principalId;
                self.agent = window.ic.plug.agent;
                self.getPrincipal = async function () { return await window.ic.plug.getPrincipal() }
                self.createActor = async function (t1, t2) { return window.ic.plug.createActor(t1, t2) };
                self.batchTransactions = async function (t1, TxStatus = { state: 'init', txList: [] }) {
                    if (TxStatus && TxStatus.txList > 0) {
                        t1.forEach((x, i) => {
                            t1[i].onSuccess = () => { TxStatus.state = txList[i]; x.onSuccess(); }
                        });
                    }
                    return window.ic.plug.batchTransactions(t1)
                };
                resolve({ accountId: window.ic.plug.accountId, principalId: window.ic.plug.principalId })
            } catch (e) {
                reject(e)
            }
        });
    },
    disConnectWallet: async function () {
        await window.ic.plug.disconnect();
    },
}
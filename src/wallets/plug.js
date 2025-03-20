// const MAX_PLUG_WHITELIST_NUMBER = 200;
export const plug = {
    readyState: "NotDetected",
    url: 'https://plugwallet.ooo/',
    state: 'init', // connected, conneting,error,init,
    init: async function () {
        const self = this;
        await window?.ic?.plug?.init();
        if (window.ic.plug) self.readyState = 'Installed';
        else self.readyState = 'NotDetected';
    },
    connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
        var self = this;
        return new Promise(async (resolve, reject) => {
            connectObj = { ...connectObj, timeout: 5000, dev: false };
            if (!window.ic.plug) { self.readyState = 'NotDetected'; window.open("https://plugwallet.ooo/"); }
            const isConnected = await window.ic.plug.isConnected();
            //isConnected; not usable in mobile
            try {
                if (self.state == 'conneting') return false;
                self.state = 'conneting';
                if (!isConnected || (isConnected && navigator.userAgentData.mobile))
                    await window?.ic?.plug?.requestConnect(connectObj);
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
                window.ic.plug.onExternalDisconnect(async () => {
                    if (self.state == 'connected') {
                        if (connectObj?.onConnectionUpdate) {
                            connectObj?.onConnectionUpdate();
                        }
                    }
                })
                self.state = 'connected';
                resolve({ accountId: window.ic.plug.accountId, principalId: window.ic.plug.principalId })
            } catch (e) {
                self.state = 'error';
                console.log(e)
                reject(e)
            }
        });
    },
    disConnectWallet: async function () {
        self.state = 'init';
        await window.ic.plug.disconnect();
    },
}
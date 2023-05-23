if(window.ic && window.ic.plug ){ window.ic.plug.init(); }

export const  plug = window.ic ? window.ic.plug ?  {
    readyState: "Installed",
    connectWallet: async function (connectObj = { whitelist: [], host: '', }) {
        var publicKey = false, prinObj = false;
        var result = await window.ic.plug.isConnected();
        try {
            if (result) {
                await window.ic.plug.createAgent(connectObj)
            } else {
                publicKey = await window.ic.plug.requestConnect(connectObj) 
            }
            prinObj = await window.ic.plug.agent.getPrincipal();
            var sess = await window.ic.plug.sessionManager.getSession();
            this.agent = window.ic.plug.agent;
            this.getPrincipal = async function () { return window.ic.plug.getPrincipal() }
            this.createActor = async function (t1, t2) { return window.ic.plug.createActor(t1, t2) };
            this.batchTransactions = async function (t1 , TxStatus = {state:'init', txList: [] } ) { 
                if(TxStatus && TxStatus.txList >0 ){
                    t1.forEach((x, i) => {
                        t1[i].onSuccess = ()=>{ TxStatus.state = txList[i]; x.onSuccess(); } 
                    });
                }
                return window.ic.plug.batchTransactions(t1)
            };

            return { accountId: sess.accountId, principalId: prinObj.toString() }
        } catch (e) { return false; }
    },
    disConnectWallet: async function () {
        await window.ic.plug.disconnect();
    },
} : { readyState: 'NotDetected', url: 'https://plugwallet.ooo/' } : { readyState: 'NotDetected', url: 'https://plugwallet.ooo/' };
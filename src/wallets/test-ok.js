try {
    if (self.state == 'conneting') return false;
    self.state = 'conneting';
    self.storageKey = 'nfid_del_key';
    var storage = new LocalDStorage();
    var t = await storage.get(self.storageKey);
    const transport = new PostMessageTransport({
        url: this.url,
        windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,
        maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
        establishTimeout: 45000, disconnectTimeout: 35000, manageFocus: false,
        detectNonClickEstablishment: false
    });
    const signer = new Signer({ transport });
    const userAccounts = await signer.accounts();

    self.agent = SignerAgent.createSync({ signer: signer, account: userAccounts[0].owner });
    self.createActor = async function (connObj = { canisterId: '', interfaceFactory: false }) {
        if (!connObj.canisterId || !connObj.interfaceFactory) return false;
        return await Actor.createActor(connObj.interfaceFactory, { agent: self.agent, canisterId: connObj.canisterId });
    };
    const userPrincipal = await self.agent?.getPrincipal();

    console.log( self.agent);
    var sid = getAccountIdentifier(userPrincipal.toString());
    self.getPrincipal = async function () { return await self.agent?.getPrincipal() }
    self.disConnectWallet = async function () {
        self.createActor = null;
        self.agent = null;
        self.getPrincipal = null;
    }
    self.state = 'connected';
    return { accountId: sid, principalId: userPrincipal.toString() }
} catch (error) {
    self.state = 'error';
   // console.log(error)
   return false;
}

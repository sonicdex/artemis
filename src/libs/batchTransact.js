export const BatchTransaction = class BatchTransaction {
    state = 'idle'; //   'idle' ,'running', 'error' ,'done' 
    transactionLlist = {};
    stepsList = [];
    compled = [];
    activeStep = '';
    FailedSteps = [];
    transactionResults = {};
    _adapterObj = false;
    constructor(transactionLlist = {}, _adapterObj) {
        if(!_adapterObj || !_adapterObj.provider) return false;
        Object.entries(transactionLlist).forEach(([key, value]) => {
            if (typeof value === 'object') {this.transactionLlist[key] = value;}
        });
        if(Object.keys(this.transactionLlist).length >0  ){
            this.stepsList = Object.keys(this.transactionLlist);
            this._adapterObj = _adapterObj;
        } 
        else return false;
    }
    async execute() {
        if (this.state == 'running') return false;
        if (!this._adapterObj || Object.keys(this.transactionLlist).length == 0) return false;
        this.state = 'running';
        const trxArray = Object.values(this.transactionLlist);
        let self = this;
        trxArray.forEach((el, i) => {
            trxArray[i].onSuccess = (data) => {
                if (data.err || data.Err || data.ERR) {
                    self.FailedSteps.push(self.stepsList[i]);
                    self.transactionResults[self.stepsList[i]] = data;
                    self.state = 'error';
                    return false;
                } else {
                    self.compled.push(self.stepsList[i]);
                    self.activeStep = self.stepsList[i + 1];
                    self.transactionResults[self.stepsList[i]] = data;
                }
            };
            trxArray[i].onFail = (err) => {
                self.FailedSteps.push(self.stepsList[i]);
                self.activeStep = self.stepsList[i]
                self.state = 'error';
                return false;
            }
        });

        if (['plug', 'bitfinity'].includes(this._adapterObj.walletActive)) {
            self.activeStep = self.stepsList[0];
            var resp = await this._adapterObj.provider.batchTransactions(trxArray);
            if (self.FailedSteps.length == 0) {
                self.state = 'done';
                return self.transactionResults;
            } else {
                self.state = 'error';
                return false;
            }
        } else if (['stoic', 'dfinity', 'astrox'].includes(this._adapterObj.walletActive)){
            self.activeStep = self.stepsList[0];
            for (const trxItem of trxArray) {
                var actor = await self._adapterObj.getCanisterActor(trxItem.canisterId, trxItem.idl);
                var resp = false;
                if (trxItem.args) {
                    resp = await actor[trxItem.methodName](...trxItem.args);
                }else{
                    resp = await actor[trxItem.methodName]();
                } 
                if (resp) {
                    await trxItem.onSuccess(resp);
                } else {
                    trxItem.onFail(resp);
                    break;
                }
            }
            if (self.FailedSteps.length == 0) {
                self.state = 'done';
                return self.transactionResults;
            } else {
                self.state = 'error';
                return false;
            }
        }
        else {
            self.state = 'error';
            return false;
        }
    }
}
export const BatchTransaction = class BatchTransaction {
    state = 'idle'; //   'idle' ,'running', 'error' ,'done' 
    transactionLlist = {};
    stepsList = [];
    completed = [];
    activeStep = '';
    FailedSteps = [];
    transactionResults = {};
    trxArray = [];
    _info= false;
    _adapterObj = false;
    constructor(transactionLlist = {}, _adapterObj) {
        if (!_adapterObj || !_adapterObj.provider) return false;
        Object.entries(transactionLlist).forEach(([key, value]) => {
            if (typeof value === 'object') { this.transactionLlist[key] = value; }
        });
        if (Object.keys(this.transactionLlist).length > 0) {
            this.stepsList = Object.keys(this.transactionLlist);
            this._adapterObj = _adapterObj;
        }
        else return false;
    }
    _prepareTrxArry = function () {
        var self = this;
        self.trxArray = [];
        var tempArray = [];
        Object.values(this.transactionLlist).forEach(x => {
            tempArray.push(x);
            if (x.updateNextStep) { self.trxArray.push(tempArray); tempArray = []; }
        });
        if (tempArray.length > 0) self.trxArray.push(tempArray);
        var trxIndex = 0;
        self.trxArray.forEach((subArray, i) => {
            subArray.forEach((el, j) => {
                self.trxArray[i][j].stepIndex = trxIndex;
                self.trxArray[i][j].state = 'idle';
                self.trxArray[i][j].onSuccess = async (data) => {
                    const stepIndex = self.trxArray[i][j].stepIndex;
                    if (data.err || data.Err || data.ERR) {
                        self.FailedSteps.push(self.stepsList[stepIndex]);
                        self.transactionResults[self.stepsList[stepIndex]] = data;
                        self.state = 'error';
                        self.trxArray[i][j].state = 'error';
                        return false;
                    } else {
                        self.completed.push(self.stepsList[stepIndex]);
                        self.activeStep = self.stepsList[stepIndex + 1];
                        self.transactionResults[self.stepsList[stepIndex]] = data;
                        self.trxArray[i][j].state = 'done';
                    }
                    if (self.trxArray[i][j].updateNextStep && self.trxArray[(i + 1)]){
                        await self.trxArray[i][j].updateNextStep(data, self.trxArray[(i + 1)][0]);
                     } 
                };
                self.trxArray[i][j].onFail = (err) => {
                    const stepIndex = self.trxArray[i][j].stepIndex;
                    console.error(`error in  ${ self.stepsList[stepIndex]} ` , self.trxArray[i][j])
                    console.error(err);
                    self.FailedSteps.push(self.stepsList[stepIndex]);
                    self.activeStep = self.stepsList[stepIndex];
                    self.state = 'error';
                    self.trxArray[i][j].state = 'error';
                    return false;
                }
                trxIndex++;
            })
        });
        return self.trxArray;
    }
    async retryExecute() {
        if (this.state != "error") return false;
        this.trxArray = this.trxArray.map(innerArray => innerArray.filter(item => item.state !== 'done'));
        this.state = 'running';
        this.FailedSteps = [];
        var data = await this._processBatch();
        return data;
    }

    async execute() {
        if (this.state == 'running' || !this._adapterObj || Object.keys(this.transactionLlist).length == 0) return false;
        if (this.state == 'done') return this.transactionResults;
        this.state = 'running';
        this.FailedSteps = [];
        this.trxArray = this._prepareTrxArry();
        return await this._processBatch();
    }
    async _processBatch() {
        if (!this.trxArray.length) return false;
        var self = this;
        self.activeStep = self.completed.length > 0 ? self.stepsList[self.completed.length] : self.stepsList[0];
        console.log(this._adapterObj.walletActive);
        if (['bitfinity','plug'].includes(this._adapterObj.walletActive)) {
            for (const trxStepItem of self.trxArray) {
                if (self.state == 'error' || self.state == 'done') break;
                if (trxStepItem.length)
                    var resp = await this._adapterObj.provider.batchTransactions(trxStepItem);
            }
            if (self.FailedSteps.length == 0) {
                self.state = 'done';
                return self.transactionResults;
            } else {
                self.state = 'error';
                return false;
            }
        } else if (['stoic', 'dfinity', 'astrox','metamask','nfid'].includes(this._adapterObj.walletActive)) {
            try {
                for (const trxStepItem of self.trxArray) {
                    if (self.state == 'error' || self.state == 'done') break;
                    if (trxStepItem.length){
                        for (const trxItem of trxStepItem) {
                            if (self.state == 'error' || self.state == 'done') break;
                            var actor = await self._adapterObj.getCanisterActor(trxItem.canisterId, trxItem.idl);
                            var resp = false;
                            if(trxItem.methodName){
                                if (trxItem.args) { resp = await actor[trxItem.methodName](...trxItem.args);}
                                else { resp = await actor[trxItem.methodName]();}
                            }else { await trxItem.onFail(resp);}
                            if (resp) { await trxItem.onSuccess(resp); }
                            else { await trxItem.onFail(resp); }
                        }
                    }
                }
                if (self.FailedSteps.length == 0) {
                    self.state = 'done';
                    return self.transactionResults;
                } else {
                    self.state = 'error';
                    return false;
                }
            } catch (error) {
                self.state = 'error';
                self._info = error;
                return false;
            }
        } else {
            console.log('trx method not defined...');
            self.state = 'error';
            return false;
        }
    }
}
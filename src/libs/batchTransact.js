export const BatchTransaction = class BatchTransaction {
    state = 'idle'; //   'idle' ,'running', 'error' ,'done' 
    transactionLlist = {};
    stepsList = [];
    completed = [];
    activeStep = '';
    failedSteps = [];
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
                self.trxArray[i][j].onSuccess = async (data , _this) => {
                    const stepIndex = _this.stepIndex;
                    if (data.err || data.Err || data.ERR) {
                        self.failedSteps.push(self.stepsList[stepIndex]);
                        self.transactionResults[self.stepsList[stepIndex]] = data;
                        self.state = 'error';
                        _this.state = 'error';
                        return false;
                    } else {
                        self.completed.push(self.stepsList[stepIndex]);
                        self.activeStep = self.stepsList[stepIndex + 1];
                        self.transactionResults[self.stepsList[stepIndex]] = data;
                        _this.state = 'done';
                    }
                    if ( _this.updateNextStep && self.trxArray[(i + 1)]){
                        await _this.updateNextStep(data, self.trxArray[(i + 1)][0]);
                     } 
                };

                self.trxArray[i][j].onFail = (err , _this) => {
                    const stepIndex =  _this.stepIndex;;
                    console.error(`error in  ${ self.stepsList[stepIndex]} ` , self.trxArray[i][j])
                    console.error(err);
                    self.failedSteps.push(self.stepsList[stepIndex]);
                    self.activeStep = self.stepsList[stepIndex];
                    self.state = 'error';
                    _this.state = 'error';
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
        this._info ='';
        this.failedSteps = [];
        var data = await this._processBatch();
        return data;
    }

    async execute() {
        if (this.state == 'running' || !this._adapterObj || Object.keys(this.transactionLlist).length == 0) return false;
        if (this.state == 'done') return this.transactionResults;
        this.state = 'running';
        this.failedSteps = [];
        this.trxArray = this._prepareTrxArry();
        return await this._processBatch();
    }
    async _processBatch() {
        if (!this.trxArray.length) return false;
        var self = this;
        self.activeStep = self.completed.length > 0 ? self.stepsList[self.completed.length] : self.stepsList[0];
        if (['bitfinity'].includes(this._adapterObj.walletActive)) {
            for (const trxStepItem of self.trxArray) {
                if (self.state == 'error' || self.state == 'done') break;
                if (trxStepItem.length)
                    var resp = await this._adapterObj.provider.batchTransactions(trxStepItem);
            }
            if (self.failedSteps.length == 0) {
                self.state = 'done';
                return self.transactionResults;
            } else {
                self.state = 'error';
                return false;
            }
        } else if (['plug','stoic', 'dfinity', 'astrox','metamask','nfid'].includes(this._adapterObj.walletActive)) {
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
                            if (resp) { await trxItem.onSuccess(resp, trxItem); }
                            else { await trxItem.onFail(resp , trxItem); }
                        }
                    }
                }
                if (self.failedSteps.length == 0) {
                    self.state = 'done';
                    return self.transactionResults;
                } else {
                    self.state = 'error';
                    return false;
                }
            } catch (error) {
                self.state = 'error';
                console.error(error);
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
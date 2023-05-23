interface TransactionItem {
    canisterId: string;
    methodName: string;
    args: any;
    idl: any;
    onSuccess: any;
    onFail: any;
}
type BatchTransact = {
    [key: string]: TransactionItem[];
};
export const Artemis = class Artemis {
    accountId: string;
    principalId: string;
    walletActive: string;
    provider: any;
    balance: number;
    wallets: [];
    canisterActors: {};
    connectedWalletInfo: { id: string, icon: string, name: string };
    connect(wallet: string, connectObj?: any): string;
    autoConnect(connectObj?: any): any;
    disconnect(): boolean { };
    isLoaded(): any;
    getWalletBalance(returnType: string): number;
    requestICPTransfer(transferRequest: any): any;
    getCanisterActor(canisterId: string, idl: any, isAnon: boolean): any;
    batchTransact(transactions: BatchTransact): any;
}
export const BatchTransaction = class BatchTransact{
    state:'idle'; //   'idle' ,'running', 'error' ,'done' 
    transactionLlist={};
    stepsList=[];
    pending=[];
    compled=[];
    previousStep='';
    activeStep='';
    nextStep='';
    FailedStep='';
    transactionResults={};
    execute(trx:any):any;
} 
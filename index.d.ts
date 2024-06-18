interface TransactionItem {
    canisterId: string;
    methodName: string;
    args: any;
    idl: any;
    onSuccess: any;
    onFail: any;
    updateNextStep: any;
}
type BatchTransactType = {
    [key: string]: TransactionItem[];
};
const Artemis = class Artemis {
    constructor(connectObj?: { host: string; whitelist: string[] });
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
    disconnect(): any;
    isLoaded(): any;
    getWalletBalance(returnType: string): number;
    requestICPTransfer(transferRequest: any): any;
    getCanisterActor(canisterId: string, idl: any, isAnon: boolean): any;
    batchTransact(transactions: BatchTransactType): any;
    trxArray:[TransactionItem[]]
}

const BatchTransact = class BatchTransact {
    state: 'idle' | 'running' | 'error' | 'done';
    transactionLlist: BatchTransactType;
    stepsList: string[];
    pending: string[];
    completed: string[];
    previousStep: string;
    activeStep: string;
    nextStep: string;
    failedSteps: string[];
    transactionResults: {};
    trxArray:[];
    execute(): any;
    retryExecute(): any;
    constructor(transactionList: any, artemis: Artemis)
}

const principalIdFromHex:(params:string)=> {};
declare module 'artemis-web3-adapter' {
    export { Artemis }
    export { BatchTransact };
    export{ principalIdFromHex };
    export { ArtemisAdapter};
}
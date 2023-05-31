interface TransactionItem {
    canisterId: string;
    methodName: string;
    args: any;
    idl: any;
    onSuccess: any;
    onFail: any;
}
type BatchTransactType = {
    [key: string]: TransactionItem[];
};
const Artemis = class Artemis {
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
}
const BatchTransact = class BatchTransact {
    state: 'idle' | 'running' | 'error' | 'done';
    transactionLlist: {};
    stepsList: [];
    pending: [];
    compled: [];
    previousStep: '';
    activeStep: '';
    nextStep: '';
    FailedStep: '';
    transactionResults: {};
    execute(): any;
    constructor(transactionList: any, artemis: Artemis)
}

declare module 'artemis-web3-adapter' {
    export { Artemis }
    export { BatchTransact };
}
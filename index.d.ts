// index.d.ts
import { Writable } from 'svelte/store';

export interface TransactionItem {
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

declare class PnP {
    constructor(connectObj?: { host: string; whitelist: string[] });
    accountId: Writable<string | false>;
    principalId: Writable<string | false>;
    walletActive: Writable<string>;
    provider: Writable<any>;
    balance: Writable<number>;
    wallets: any[];
    canisterActors: {[key: string]: any};
    connectedWalletInfo: Writable<{ id: string, icon: string, name: string }>;
    connect(wallet: string, connectObj?: any): Promise<string>;
    autoConnect(connectObj?: any): Promise<any>;
    disconnect(): Promise<boolean>;
    isLoaded(): Promise<boolean>;
    getWalletBalance(returnType: string): Promise<number>;
    requestICPTransfer(transferRequest: any): Promise<any>;
    getCanisterActor(canisterId: string, idl: any, isAnon: boolean, isForced: boolean): Promise<any>;
    batchTransact(transactions: BatchTransactType): any;
    trxArray: [TransactionItem[]];
}

declare class BatchTransact {
    state: 'idle' | 'running' | 'error' | 'done';
    transactionLlist: BatchTransactType;
    stepsList: string[];
    pending: string[];
    completed: string[];
    previousStep: string;
    activeStep: string;
    nextStep: string;
    failedSteps: string[];
    transactionResults: {[key: string]: any};
    trxArray: any[];
    execute(): Promise<any>;
    retryExecute(): Promise<any>;
    constructor(transactionList: any, pnp: PnP)
}

declare function principalIdFromHex(params: string): any;

declare const PnPAdapter: PnP;

export { PnP, BatchTransact, principalIdFromHex, PnPAdapter };
export default class Artemis {
    accountId:string;
    principalId:string;
    walletActive:string;
    provider:any;
    balance:number;
    wallets:[];
    connect(wallet: string, connectObj?:any): string;
    disconnect():boolean;
    isLoaded():boolean;
    getWalletBalance():number;
    requestICPTransfer(transferRequest:any):any;
}
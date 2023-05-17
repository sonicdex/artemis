export default class Artemis {
    accountId:string;
    principalId:string;
    walletActive:string;
    provider:any;
    balance:number;
    wallets:[];
    canisterActors:{};
    connectedWalletInfo:{ id: string , icon:string , name:string};
    connect(wallet: string, connectObj?:any): string;
    autoConnect(connectObj?:any):any;
    disconnect():boolean{};
    isLoaded():any;
    getWalletBalance(returnType:string):number;
    requestICPTransfer(transferRequest:any):any;
    getCanisterActor(canisterId:string, idl:any,isAnon:boolean):any;
}
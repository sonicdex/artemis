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
    disconnect():boolean;
    isLoaded():boolean;
    getWalletBalance():number;
    requestICPTransfer(transferRequest:any):any;
    getCanisterActor(canisterId:string, idl:any,isAnon:boolean):any;
}
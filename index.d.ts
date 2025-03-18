interface TransactionItem {
  canisterId: string;
  methodName: string;
  args: any;
  idl: any;
  onSuccess: any;
  onFail: any;
  updateNextStep: any;
  skipCondition: string | string[];
}
type BatchTransactType = {
  [key: string]: TransactionItem[];
};

type ConnectObjType = {host: string; whitelist: string[], delegationTargets?:string[], onConnectionUpdate?:Function};

const Artemis = class Artemis {
  constructor(connectObj?: ConnectObjType);
  accountId: string;
  principalId: string;
  walletActive: string;
  provider: any;
  balance: number;
  wallets: [];
  canisterActors: {};
  connectedWalletInfo: {id: string; icon: string; name: string};
  connect(wallet: string, connectObj?: ConnectObjType, clickEvent?:any): Promise<{accountId:string, principalId:string}>;
  autoConnect(connectObj?: ConnectObjType): Promise<{accountId:string, principalId:string}>;
  disconnect(): Promise<any>;
  isLoaded(): Promise<any>;
  getWalletBalance(returnType: string): Promise<number>;
  requestICPTransfer(transferRequest: any): Promise<any>;
  getCanisterActor(canisterId: string, idl: any, isAnon: boolean, isForced?: boolean): Promise<any>;
  batchTransact(transactions: BatchTransactType): Promise<any>;
  trxArray: [TransactionItem[]];
};

const BatchTransact = class BatchTransact {
  state: "idle" | "running" | "error" | "done";
  transactionLlist: BatchTransactType;
  stepsList: string[];
  pending: string[];
  completed: string[];
  previousStep: string;
  activeStep: string;
  nextStep: () => void;
  failedSteps: string[];
  transactionResults: {};
  trxArray: [];
  execute(): any;
  retryExecute(): any;
  constructor(transactionList: any, artemis: Artemis);
};

const principalIdFromHex: (params: string) => {};
declare module "artemis-web3-adapter" {
  export {Artemis, BatchTransact, principalIdFromHex, ArtemisAdapter, TransactionItem, BatchTransactType};
}

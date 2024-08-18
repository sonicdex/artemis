export interface AdapterConfig {
  whitelist?: string[];
  host?: string;
  identityProvider?: string;
  [key: string]: any;
}

export interface TransferParams {
  to: string;
  amount: bigint;
  fee?: bigint;
  memo?: Uint8Array;
  fromSubaccount?: Uint8Array;
}

export abstract class AdapterInterface {
  constructor() {
    if (new.target === AdapterInterface) {
      throw new Error("AdapterInterface is an abstract class and can't be instantiated directly.");
    }
  }

  abstract isAvailable(): Promise<void>;

  abstract connect(config: AdapterConfig): Promise<void>;

  abstract disconnect(): Promise<void>;

  abstract getBalance(): Promise<bigint>;

  abstract transfer(params: TransferParams): Promise<void>;

  abstract createActor<T>(canisterId: string, idl: any): Promise<T>;

  abstract getAccountId(): Promise<string>;

  abstract getPrincipal(): Promise<string>;

  abstract isConnected(): boolean;

  abstract whoAmI(): Promise<string>;
}

import { Principal } from '@dfinity/principal';

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

export type Account = {
  accountId: string | boolean;
  principalId: string;
}

export abstract class AdapterInterface {
  constructor() {
    if (new.target === AdapterInterface) {
      throw new Error("AdapterInterface is an abstract class and can't be instantiated directly.");
    }
  }

  abstract isAvailable(): Promise<boolean>;

  abstract connect(config: AdapterConfig): Promise<Account>;

  abstract disconnect(): Promise<void>;

  abstract getBalance(): Promise<bigint>;

  abstract transfer(params: TransferParams): Promise<void>;

  abstract createActor<T>(canisterId: string, idl: any): Promise<T>;

  abstract getAccountId(): Promise<string|boolean>;

  abstract getPrincipal(): Promise<string|boolean>;

  abstract isConnected(): boolean;

  abstract whoAmI(): Promise<string>;
}

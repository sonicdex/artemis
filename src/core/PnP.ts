import { Actor, HttpAgent, ActorSubclass, AnonymousIdentity } from "@dfinity/agent";
import { walletList } from "../adapters";

interface PnPConfig {
  hostUrl?: string;
  localStorageKey?: string;
  defaultCanisterId?: string;
  identityProvider?: string; // Added identityProvider to the PnPConfig
  [key: string]: any;
}

interface ConnectionResult {
  accountId: string;
  principalId: string;
}

interface WalletInfo {
  id: string;
  icon: string;
  name: string;
}

interface WalletState {
  principalId: string | null;
  accountId: string | null;
  activeWallet: string | null;
  exeBalance: number;
  icpBalance: number;
}

interface WalletAdapter {
  isAvailable(): Promise<boolean>;
  connect(config: PnPConfig): Promise<ConnectionResult | false>;
  disconnect(): Promise<void>;
  createActor<T>(canisterId: string, idl: any): Promise<ActorSubclass<T>>;
  transfer(params: any): Promise<any>;
  url: string;
}
type WalletEventCallback = (state: WalletState) => void;

class PnP {
  private accountId: string | null = null;
  private principalId: string | null = null;
  private activeWallet: string | null = null;
  private provider: WalletAdapter | null = null;
  private balance: number = 0;
  private canisterActors: Record<string, ActorSubclass<any>> = {};
  private anonCanisterActors: Record<string, ActorSubclass<any>> = {};
  private connectedWalletInfo: WalletInfo | null = null;
  private wallets: Array<{ id: string; adapter: new () => WalletAdapter; icon: string; name: string }>;
  private config: PnPConfig;
  private walletState: WalletState = {
    principalId: null,
    accountId: null,
    activeWallet: null,
    exeBalance: 0,
    icpBalance: 0,
  };
  
  private callbacks: WalletEventCallback[] = [];  // Callbacks array

  constructor(config: PnPConfig = {}) {
    this.wallets = walletList.map((wallet) => ({
      id: wallet.id,
      adapter: wallet.adapter as new () => WalletAdapter,
      icon: wallet.icon,
      name: wallet.name,
    }));
    this.config = {
      hostUrl: config.hostUrl || "http://localhost:4943",
      localStorageKey: config.localStorageKey || "connectedWallet",
      defaultCanisterId: config.defaultCanisterId || "",
      identityProvider: config.identityProvider,  // Ensure identityProvider is part of the config
      ...config,
    };

    this._initializeFromLocalStorage();
  }

  private async _initializeFromLocalStorage(): Promise<void> {
    const connectedWallet = localStorage.getItem(this.config.localStorageKey || "");
    if (connectedWallet) {
      await this.connect(connectedWallet);
    }
  }

  // Method to register callbacks
  registerCallback(callback: WalletEventCallback): void {
    this.callbacks.push(callback);
  }

  // Method to trigger callbacks
  private triggerCallbacks() {
    for (const callback of this.callbacks) {
      callback(this.walletState);
    }
  }

  async connect(walletId: string, connectObj: PnPConfig = {}): Promise<string | false> {
    const selectedWallet = this.wallets.find((w) => w.id === walletId);
    if (!selectedWallet) return false;

    try {
      const walletInstance = new selectedWallet.adapter();
      if (await walletInstance.isAvailable()) {
        const connectionResult = await walletInstance.connect({
          ...this.config,
          ...connectObj,
        });

        if (connectionResult && typeof connectionResult !== 'boolean') {
          this.accountId = connectionResult.accountId;
          this.principalId = connectionResult.principalId;
          this.activeWallet = walletId;
          this.provider = walletInstance;
          this.connectedWalletInfo = {
            id: selectedWallet.id,
            icon: selectedWallet.icon,
            name: selectedWallet.name,
          };

          localStorage.setItem(this.config.localStorageKey || "", this.activeWallet);
          this._dispatchWalletConnectedEvent(walletId);
          await this.getWalletBalance();
          this.walletState = {
            principalId: this.principalId,
            accountId: this.accountId,
            activeWallet: this.activeWallet,
            exeBalance: this.balance,
            icpBalance: 0,
          };
          
          // Trigger the callbacks after updating the state
          this.triggerCallbacks();
          
          return this.principalId;
        }
      } else {
        window.open(walletInstance.url, "_blank");
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
    return false;
  }

  async disconnect(): Promise<boolean> {
    if (this.provider) {
      await this.provider.disconnect();
    }
    localStorage.removeItem(this.config.localStorageKey || "");
    this.provider = null;
    this.accountId = null;
    this.principalId = null;
    this.activeWallet = null;

    // Update state and trigger callbacks after disconnecting
    this.walletState = {
      principalId: null,
      accountId: null,
      activeWallet: null,
      exeBalance: 0,
      icpBalance: 0,
    };
    this.triggerCallbacks();
    
    return true;
  }

  async getWalletBalance(): Promise<number> {
    return 0;
  }

  async getSignedActor<T>(canisterId: string, idl: any): Promise<ActorSubclass<T>> {
    if (!this.provider) {
      throw new Error("Wallet not connected");
    }

    try {
      return await this.provider.createActor<T>(canisterId, idl);
    } catch (error) {
      console.error(
        `Error creating signed actor for canister ${canisterId}:`,
        error
      );
      throw error;
    }
  }

  async getCanisterActor<T>(
    canisterId: string,
    idl: any,
    isAnon: boolean = false,
    isForced: boolean = false,
    isSigned: boolean = false
  ): Promise<ActorSubclass<T>> {
    if (isSigned) {
      return this.getSignedActor<T>(canisterId, idl);
    }

    let actor: ActorSubclass<T>;

    if (isAnon) {
      if (isForced || !this.anonCanisterActors[canisterId]) {
        const pubAgent = new HttpAgent({
          identity: new AnonymousIdentity(),
          host: this.config.hostUrl,
        });
        if (this.config.hostUrl?.includes("localhost")) {
          await pubAgent.fetchRootKey();
        }
        actor = Actor.createActor<T>(idl, {
          agent: pubAgent,
          canisterId: canisterId,
        });
        this.anonCanisterActors[canisterId] = actor;
      } else {
        actor = this.anonCanisterActors[canisterId] as ActorSubclass<T>;
      }
    } else {
      if (!this.provider) {
        throw new Error("Wallet not connected");
      }
      if (isForced || !this.canisterActors[canisterId]) {
        actor = await this.provider.createActor<T>(canisterId, idl);
        this.canisterActors[canisterId] = actor;
      } else {
        actor = this.canisterActors[canisterId] as ActorSubclass<T>;
      }
    }

    return actor;
  }

  async transfer(params: any): Promise<any> {
    if (!this.provider) {
      throw new Error("Wallet not connected");
    }
    return this.provider.transfer(params);
  }

  isWalletConnected(): boolean {
    return !!this.activeWallet;
  }

  private _dispatchWalletConnectedEvent(walletId: string): void {
    const event = new CustomEvent("walletConnected", { detail: { walletId } });
    window.dispatchEvent(event);
  }
}

export default PnP;

import { AdapterInterface, Account, AdapterConfig, TransferParams } from "./AdapterInterface";
import { Actor, HttpAgent, ActorSubclass } from "@dfinity/agent";
import { getAccountIdentifier } from "../utils/identifierUtils";
import { AuthClient } from "@dfinity/auth-client";

export class NNSAdapter extends AdapterInterface {
  name: string;
  logo: string;
  readyState: string;
  url: string;
  private authClient: AuthClient | null;
  private agent: HttpAgent | null;

  constructor() {
    super();
    this.name = "NNS";
    this.logo = "path_to_nns_logo.svg";
    this.readyState = "Loadable";
    this.url = "http://localhost:4943"; // Use the correct host in production
    this.authClient = null;
    this.agent = null;
  }

  async isAvailable(): Promise<boolean> {
    if (!this.authClient) {
      this.authClient = await AuthClient.create();
    }
    return true;
  }

  async connect(config: AdapterConfig): Promise<Account> {
    if (!this.authClient) {
      this.authClient = await AuthClient.create();
    }

    const isConnected = await this.authClient.isAuthenticated();
    
    if (!isConnected) {
      return new Promise<Account>((resolve, reject) => {
        this.authClient!.login({
          identityProvider: config.identityProvider || this.url,
          onSuccess: async () => {
            try {
              const result = await this._continueLogin(config.host || this.url);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          },
          onError: (error) => {
            reject(new Error("Authentication failed: " + error));
          },
        });
      });
    } else {
      // User is already authenticated, proceed with login
      return this._continueLogin(config.host || this.url);
    }
  }

  private async _continueLogin(host: string): Promise<Account> {
    try {
      const identity = this.authClient!.getIdentity();
      const principal = identity.getPrincipal();  
      this.agent = HttpAgent.createSync({
        identity,
        host,
      });
      // Fetch the root key in development mode
      if (this.url.includes("localhost") || this.url.includes("127.0.0.1")) {
        await this.agent.fetchRootKey();
      }
      const sid = getAccountIdentifier(principal.toString());  
      return {
        accountId: sid,
        principalId: principal.toString(),
      };
    } catch (error) {
      console.error("Error during _continueLogin:", error);
      throw error;
    }
  }


  async disconnect(): Promise<void> {
    if (this.authClient) {
      await this.authClient.logout();
      this.readyState = "Loadable";
      this.agent = null;
    }
  }

  async createActor<T>(canisterId: string, idl: any): Promise<ActorSubclass<T>> {
    if (!canisterId || !idl) {
      throw new Error("Canister ID and Interface Factory are required");
    }

    if (!this.agent) {
      throw new Error("Agent is not initialized. Ensure the wallet is connected.");
    }

    return Actor.createActor(idl, { agent: this.agent, canisterId });
  }

  async createAgent(host: string): Promise<HttpAgent> {
    if (!this.authClient) {
      throw new Error("AuthClient is not initialized");
    }
    const identity = this.authClient.getIdentity();
    const agent = HttpAgent.createSync({ identity, host });
    if (this.url.includes("localhost") || this.url.includes("127.0.0.1")) {
      await agent.fetchRootKey();
    }
    return agent;
  }

  async getAccountId(): Promise<string|boolean> {
    if (!this.authClient || !this.agent) {
      throw new Error("Wallet is not connected or initialized");
    }
    const identity = this.authClient.getIdentity();
    const principal = await identity.getPrincipal();
    return getAccountIdentifier(principal.toString());
  }

  async getPrincipal(): Promise<string> {
    if (!this.authClient) {
      throw new Error("AuthClient is not initialized");
    }
    const identity = this.authClient.getIdentity();
    return identity.getPrincipal().toString();
  }

  // Implement these methods to satisfy the interface
  async getBalance(): Promise<bigint> {
    throw new Error("Method not implemented.");
  }

  async transfer(params: TransferParams): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async whoAmI(): Promise<string> {
    if (!this.authClient || !this.agent) {
      throw new Error("Wallet is not connected or initialized");
    }
    const identity = this.authClient.getIdentity();
    return identity.getPrincipal().toString();
  }

  isConnected(): boolean {
    return this.authClient !== null && this.agent !== null;
  }
}
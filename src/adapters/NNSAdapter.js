// src/adapters/NNSAdapter.js

import { AdapterInterface } from "./AdapterInterface";
import { Actor, HttpAgent } from "@dfinity/agent";
import { getAccountIdentifier } from "../utils/identifierUtils";
import { AuthClient } from "@dfinity/auth-client";

export class NNSAdapter extends AdapterInterface {
  constructor() {
    super();
    this.name = "NNS";
    this.logo = "path_to_nns_logo.svg";
    this.readyState = "Loadable";
    this.url = "http://localhost:4943"; // Use the correct host in production
    this.authClient = null;
    this.agent = null;
  }

  async isAvailable() {
    if (!this.authClient) {
      this.authClient = await AuthClient.create();
    }
    return true;
  }

  async connect(config = { whitelist: [], host: "", identityProvider: "" }) {
    if (!this.authClient) {
      this.authClient = await AuthClient.create();
    }

    const isConnected = await this.authClient.isAuthenticated();

    return new Promise(async (resolve, reject) => {
      if (!isConnected) {
        this.authClient.login({
          identityProvider: config.identityProvider || this.url,
          onSuccess: async () => {
            try {
              const returnData = await this._continueLogin(config.host || this.url);
              resolve(returnData);
            } catch (error) {
              reject(error);
            }
          },
          onError: reject,
        });
      } else {
        try {
          const returnData = await this._continueLogin(config.host || this.url);
          resolve(returnData);
        } catch (error) {
          reject(error);
        }
      }
    });
  }

  async _continueLogin(host) {
    try {
      const identity = this.authClient.getIdentity();
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
  


  async disconnect() {
    if (this.authClient) {
      await this.authClient.logout();
      this.readyState = "Loadable";
      this.agent = null;
    }
  }

  async createActor(canisterId, idl) {
    if (!canisterId || !idl) {
      throw new Error("Canister ID and Interface Factory are required");
    }

    if (!this.agent) {
      throw new Error("Agent is not initialized. Ensure the wallet is connected.");
    }

    return Actor.createActor(idl, { agent: this.agent, canisterId });
  }

  async createAgent(host) {
    if (!this.authClient) {
      throw new Error("AuthClient is not initialized");
    }
    const identity = this.authClient.getIdentity();
    const agent = HttpAgent.createSync({ identity, host });
    if (this.url.includes("localhost") || this.url.includes("127.0.0.1")) {
      await this.agent.fetchRootKey();
    }

    return agent;
  }

  async getAccountId() {
    if (!this.authClient || !this.agent) {
      throw new Error("Wallet is not connected or initialized");
    }
    const identity = this.authClient.getIdentity();
    const principal = await identity.getPrincipal();
    return getAccountIdentifier(principal.toString());
  }

  async getPrincipal() {
    if (!this.authClient) {
      throw new Error("AuthClient is not initialized");
    }
    const identity = this.authClient.getIdentity();
    return identity.getPrincipal().toString();
  }
}

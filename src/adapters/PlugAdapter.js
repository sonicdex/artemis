// src/adapters/PlugAdapter.js

import { AdapterInterface } from './AdapterInterface';

export class PlugAdapter extends AdapterInterface {
  constructor() {
    super();
    this.name = 'Plug';
    this.logo = 'path_to_plug_logo.svg';
    this.readyState = "NotDetected";
    this.url = "https://plugwallet.ooo/";
  }

  async isAvailable() {
    return !!(window.ic && window.ic.plug);
  }

  async connect(config) {
    if (!await this.isAvailable()) {
      this.readyState = "NotDetected";
      window.open(this.url, "_blank");
      return false;
    }

    try {
      const isConnected = await window.ic.plug.isConnected();

      if (!isConnected) {
        const publicKey = await window.ic.plug.requestConnect({
          whitelist: config.whitelist,
          host: config.host,
          timeout: config.timeout || 120000,
          onConnectionUpdate: () => {
            console.log("Connection updated");
          },
        });

        if (!publicKey) {
          throw new Error("Failed to connect to Plug wallet");
        }
      }

      await window.ic.plug.createAgent({
        whitelist: config.whitelist,
        host: config.host,
      });

      const principal = await window.ic.plug.agent.getPrincipal();
      const accountId = window.ic.plug.accountId;

      this.readyState = "Installed";

      return {
        accountId: accountId,
        principalId: principal.toString(),
      };
    } catch (error) {
      console.error("Error connecting to Plug wallet:", error);
      return false;
    }
  }

  async disconnect() {
    if (window.ic && window.ic.plug && window.ic.plug.disconnect) {
      await window.ic.plug.disconnect();
    }
  }
  async transfer(params) {
    if (!window.ic || !window.ic.plug) {
      throw new Error("Plug wallet is not installed or initialized");
    }
    return window.ic.plug.requestTransfer(params);
  }

  async createActor(canisterId, idl) {
    if (!window.ic || !window.ic.plug) {
      throw new Error("Plug wallet is not installed or initialized");
    }
    return window.ic.plug.createActor({
      canisterId,
      interfaceFactory: idl,
    });
  }

  async getAccountId() {
    if (!window.ic || !window.ic.plug) {
      throw new Error("Plug wallet is not installed or initialized");
    }
    return window.ic.plug.accountId;
  }

  async getPrincipal() {
    if (!window.ic || !window.ic.plug) {
      throw new Error("Plug wallet is not installed or initialized");
    }
    return window.ic.plug.principalId;
  }

  // Additional methods specific to Plug wallet
  async requestTransferToken(params) {
    if (!window.ic || !window.ic.plug) {
      throw new Error("Plug wallet is not installed or initialized");
    }
    return window.ic.plug.requestTransferToken(params);
  }

  async requestBurnXTC(params) {
    if (!window.ic || !window.ic.plug) {
      throw new Error("Plug wallet is not installed or initialized");
    }
    return window.ic.plug.requestBurnXTC(params);
  }

  async batchTransactions(transactions) {
    if (!window.ic || !window.ic.plug) {
      throw new Error("Plug wallet is not installed or initialized");
    }
    return window.ic.plug.batchTransactions(transactions);
  }
}

// Initialize Plug if it's available
if (window.ic && window.ic.plug) {
  window.ic.plug.init();
}

// Add event listener for when the page is fully loaded
window.addEventListener("load", () => {
  if (window.ic && window.ic.plug) {
    PlugWallet.prototype.readyState = "Installed";
  }
});
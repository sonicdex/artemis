// Path: src/adapters/index.ts

// Import adapters
import { NNSAdapter } from "./NNSAdapter";
import { PlugAdapter } from "./PlugAdapter";

// Import logos
import dfinityLogo from "../assets/dfinity.svg";
import plugLogo from "../assets/plug.jpg";

// Define the type for the adapter constructors
interface WalletAdapterConstructor {
  new (): WalletAdapter;
}

// Define the WalletAdapter interface (based on your existing adapters' methods)
export interface WalletAdapter {
  isAvailable(): Promise<boolean>;
  connect(config: any): Promise<any>;
  disconnect(): Promise<void>;
  createActor<T>(canisterId: string, idl: any): Promise<T>;
}

// Define the WalletInfo interface
export interface WalletInfo {
  id: string;
  name: string;
  icon: string;
  adapter: WalletAdapterConstructor;
}

// Define the WalletList array with specific types
export const walletList: WalletInfo[] = [
  {
    id: "nns",
    name: "Internet Identity",
    icon: dfinityLogo,
    adapter: NNSAdapter,
  },
  {
    id: "plug",
    name: "Plug Wallet",
    icon: plugLogo,
    adapter: PlugAdapter,
  },
];

// Create a typed adapters object for backward compatibility
export const adapters: Record<string, WalletAdapterConstructor> = {
  nns: NNSAdapter,
  plug: PlugAdapter
};

// Export individual wallet modules
export {
  NNSAdapter as nnsAdapter,
  PlugAdapter as plugAdapter
};

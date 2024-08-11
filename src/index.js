import { Actor, HttpAgent, AnonymousIdentity } from '@dfinity/agent';
import { AuthClient } from '@dfinity/auth-client';
import { NNS_IDL } from './did/nns.idl';
import { walletList } from "./wallets";
import { BatchTransaction } from './libs/batchTransact'
import { getAccountIdentifier } from './libs/identifier-utils';
import { Principal } from '@dfinity/principal';

const HOSTURL = "http://localhost:4943";
const ICP_DECIMAL = 10 ** 8;
const NNS_CANISTER_ID = 'ryjl3-tyaaa-aaaaa-aaaba-cai';
const localStorageKey = 'nnsWallet';

export const PnP = class PnP {
	accountId = false;
	principalId = false;
	walletActive = "";
	provider = false;
	balance = 0;
	canisterActors = {};
	anoncanisterActors = [];
	connectedWalletInfo = {};
	wallets = walletList;
	_connectObject = { whitelist: [NNS_CANISTER_ID], host: HOSTURL };
	_cleanUpConnObj(connectObj) {
		connectObj.whitelist.push(NNS_CANISTER_ID);
		connectObj.whitelist = Array.from(new Set([...connectObj.whitelist]));
		this._connectObject = connectObj;
		return connectObj;
	}
	async connect(wallet, connectObj = { whitelist: [], host: HOSTURL }) {
		connectObj = this._cleanUpConnObj(connectObj);
		if (!wallet) return false;
		try {
			var selectedWallet = this.wallets.find((o) => o.id == wallet);
			if (!selectedWallet) return false;
			if (
				selectedWallet.adapter.readyState == "Installed" ||
				selectedWallet.adapter.readyState == "Loadable"
			) {
				var p = await selectedWallet.adapter.connectWallet(connectObj);
				if (!p) return false;
				this.principalId = p.principalId;
				this.accountId = p.accountId;
				this.walletActive = wallet;
				this.provider = selectedWallet.adapter;
				this.connectedWalletInfo = {
					id: selectedWallet.id,
					icon: selectedWallet.icon,
					name: selectedWallet.name,
				};
				if (!!p.stoicAccounts) {
					localStorage.setItem("stoicAccounts", p.stoicAccounts.length || 0);
				}
				localStorage.setItem(localStorageKey, this.walletActive);
				var event = new CustomEvent("nnsWalletConnected");
				window.dispatchEvent(event, wallet);
				this.getWalletBalance();
			} else if (selectedWallet.adapter.readyState == "NotDetected") {
				window.open(selectedWallet.adapter.url, "_blank");
			}
			return this.principalId;
		} catch (error) {
			return false;
		}
	}
	async disconnect() {
		var res = this.provider.disConnectWallet();
		localStorage.removeItem(localStorageKey);
		(this.provider = false), (this.address = false), (this.wallet = "");
		return true;
	}
	async isLoaded() {
		return new Promise((resolve, reject) => {
			var intrvl = setInterval(() => {
				if (this.provider) {
					clearInterval(intrvl);
					resolve(true);
				}
			}, 500);
		});
	}
	async getWalletBalance(returnType = "number") {
		if (!this.accountId) return 0;
		var actor = await this.getCanisterActor(NNS_CANISTER_ID, NNS_IDL, true);
		const balance = await actor.icrc1_balance_of({
			owner: Principal.from(this.principalId),
			subaccount: [],
		});
		if (returnType == "number") {
			this.balance = parseFloat(balance) / ICP_DECIMAL;
		} else {
			this.balance = balance;
		}
		return this.balance;
	}
	async requestICPTransfer(transferRequest) {
		return new Promise(async (resolve, reject) => {
			var IDL = () => {};
			var actor = await this.getCanisterActor(NNS_CANISTER_ID, IDL);
			const blockHeight = await actor.send_dfx(transferRequest).catch((err) => {
				reject(err);
			});
			if (blockHeight) resolve(blockHeight);
			reject(false);
		});
	}
	async getCanisterActor(canisterId, idl, isAnon = false, isForced = false, isSigned = false) {
        if (isSigned) {
            return this.getSignedActor(canisterId, idl);
        }
		let actor = false;
		if (isAnon) {
			if (isForced) {
				const pubAgent = new HttpAgent({
					AnonymousIdentity,
					host: this._connectObject.host,
				});
				actor = await Actor.createActor(idl, {
					agent: pubAgent,
					canisterId: canisterId,
				});
				this.anoncanisterActors[canisterId] = actor;
			} else if (this.anoncanisterActors[canisterId])
				actor = this.anoncanisterActors[canisterId];
			else {
				const pubAgent = new HttpAgent({
					AnonymousIdentity,
					host: this._connectObject.host,
				});
				actor = await Actor.createActor(idl, {
					agent: pubAgent,
					canisterId: canisterId,
				});
				this.anoncanisterActors[canisterId] = actor;
			}
		} else {
			if (isForced) {
				actor = await this.provider.createActor({
					canisterId: canisterId,
					interfaceFactory: idl,
				});
				this.canisterActors[canisterId] = actor;
			} else if (this.canisterActors[canisterId]) {
				actor = this.canisterActors[canisterId];
			} else {
				actor = await this.provider.createActor({
					canisterId: canisterId,
					interfaceFactory: idl,
				});
				this.canisterActors[canisterId] = actor;
			}
		}
		return actor;
	}

	async getSignedActor(canisterId, idl) {
		if (!this.provider) {
			throw new Error("Wallet not connected");
		}

		try {
			const authClient = await AuthClient.create();
			const identity = await authClient.getIdentity();
			const agent = new HttpAgent({ identity, host: this._connectObject.host });

			if (this._connectObject.host.includes("localhost")) {
				await agent.fetchRootKey();
			}

			const actor = await Actor.createActor(idl, {
				agent,
				canisterId,
			});

			return actor;
		} catch (error) {
			console.error(
				`Error creating signed actor for canister ${canisterId}:`,
				error
			);
			throw error;
		}
	}

	async autoConnect(
		connectObj = { whitelist: [NNS_CANISTER_ID], host: HOSTURL }
	) {
		connectObj = this._cleanUpConnObj(connectObj);
		var walletConnected = localStorage.getItem(localStorageKey);
		var selectedWallet = this.wallets.find((o) => o.id == walletConnected);
		if (!selectedWallet) return false;
		await window.onload();
		var data = await this.connect(walletConnected, connectObj);
		return data;
	}
	constructor(connectObj = { whitelist: [NNS_CANISTER_ID], host: HOSTURL }) {
		var walletConnected = localStorage.getItem(localStorageKey);
		connectObj = this._cleanUpConnObj(connectObj);
		async () => {
			var selectedWallet = this.wallets.find((o) => o.id == walletConnected);
			if (!selectedWallet) return false;
			var data = await this.connect(walletConnected, connectObj);
		};
	}
};

export const BatchTransact = BatchTransaction;
export const principalIdFromHex = getAccountIdentifier;
export const PnPAdapter = new PnP({
	whitelist: [NNS_CANISTER_ID],
	host: HOSTURL,
});

if (window) {
	window.pnp = PnP;
	window.pnp.BatchTransact = BatchTransaction;
	window.pnp.nns = { AnonymousIdentity, Principal };
}

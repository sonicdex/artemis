import { Actor, HttpAgent } from "@dfinity/agent";
import { getAccountIdentifier } from "../utils/identifierUtils";
import { AuthClient } from "@dfinity/auth-client";

export const nfid = {
	readyState: "Loadable",
	url: "https://nfid.one/",
	authClient: false,
	connectWallet: async function (connectObj = { whitelist: [], host: "" }) {
		var self = this,
			returnData = {};
		self.authClient = await AuthClient.create();
		return new Promise(async (resolve, reject) => {
			var isConnected = await self.authClient.isAuthenticated();
			if (!isConnected) {
				self.authClient.login({
					identityProvider:
						"https://nfid.one/authenticate/?applicationName=" +
						window.location.hostname,
					windowOpenerFeatures: `left=${
						window.screen.width / 2 - 525 / 2
					}, top=${
						window.screen.height / 2 - 705 / 2
					}, toolbar=0,location=0,menubar=0,width=525,height=705`,
					onSuccess: async () => {
						returnData = await continueLogin();
						resolve(returnData);
					},
				});
			} else {
				returnData = await continueLogin();
				resolve(returnData);
			}
			async function continueLogin() {
				var identity = await self.authClient.getIdentity();
				var principal = await identity?.getPrincipal();
				self.agent = new HttpAgent({
					identity: identity,
					host: connectObj.host,
				});
				var sid = await getAccountIdentifier(
					identity?.getPrincipal().toString()
				);

				self.createActor = async function (
					connObj = { canisterId: "", interfaceFactory: false }
				) {
					if (!connObj.canisterId || !connObj.interfaceFactory) return false;
					return await Actor.createActor(connObj.interfaceFactory, {
						agent: this.agent,
						canisterId: connObj.canisterId,
					});
				};
				self.createAgent = async function () {
					return new HttpAgent({ identity: identity, host: connectObj.host });
				};
				self.getPrincipal = async function () {
					return identity.getPrincipal();
				};
				self.disConnectWallet = async function () {
					await self.authClient.logout();
				};
				return { accountId: sid, principalId: principal.toString() };
			}
		});
	},
};

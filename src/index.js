import {StoicIdentity} from "ic-stoic-identity";
const { Actor, HttpAgent, SignIdentity, AuthClient } = require('@dfinity/agent');
const NNS_IDL = ({ IDL }) => {
    const AccountIdentifier = IDL.Vec(IDL.Nat8);
    const AccountIdentifier2 = IDL.Text;
    const AccountBalanceArgs = IDL.Record({ 'account': AccountIdentifier });
    const Tokens = IDL.Record({ 'e8s': IDL.Nat64 });
    const Archive = IDL.Record({ 'canister_id': IDL.Principal });
    const Archives = IDL.Record({ 'archives': IDL.Vec(Archive) });
    const BlockIndex = IDL.Nat64;
    const BlockHeight = IDL.Nat64;
    const GetBlocksArgs = IDL.Record({
      'start': BlockIndex,
      'length': IDL.Nat64,
    });
    const Memo = IDL.Nat64;
    const Operation = IDL.Variant({
      'Burn': IDL.Record({ 'from': AccountIdentifier, 'amount': Tokens }),
      'Mint': IDL.Record({ 'to': AccountIdentifier, 'amount': Tokens }),
      'Transfer': IDL.Record({
        'to': AccountIdentifier,
        'fee': Tokens,
        'from': AccountIdentifier,
        'amount': Tokens,
      }),
    });
    const TimeStamp = IDL.Record({ 'timestamp_nanos': IDL.Nat64 });
    const Transaction = IDL.Record({
      'memo': Memo,
      'operation': IDL.Opt(Operation),
      'created_at_time': TimeStamp,
    });
    const Block = IDL.Record({
      'transaction': Transaction,
      'timestamp': TimeStamp,
      'parent_hash': IDL.Opt(IDL.Vec(IDL.Nat8)),
    });
    const BlockRange = IDL.Record({ 'blocks': IDL.Vec(Block) });
    const QueryArchiveError = IDL.Variant({
      'BadFirstBlockIndex': IDL.Record({
        'requested_index': BlockIndex,
        'first_valid_index': BlockIndex,
      }),
      'Other': IDL.Record({
        'error_message': IDL.Text,
        'error_code': IDL.Nat64,
      }),
    });
    const QueryArchiveResult = IDL.Variant({
      'Ok': BlockRange,
      'Err': QueryArchiveError,
    });
    const QueryArchiveFn = IDL.Func(
      [GetBlocksArgs],
      [QueryArchiveResult],
      ['query'],
    );
    const QueryBlocksResponse = IDL.Record({
      'certificate': IDL.Opt(IDL.Vec(IDL.Nat8)),
      'blocks': IDL.Vec(Block),
      'chain_length': IDL.Nat64,
      'first_block_index': BlockIndex,
      'archived_blocks': IDL.Vec(
        IDL.Record({
          'callback': QueryArchiveFn,
          'start': BlockIndex,
          'length': IDL.Nat64,
        })
      ),
    });
    const SubAccount = IDL.Vec(IDL.Nat8);
    const TransferArgs = IDL.Record({
      'to': AccountIdentifier,
      'memo': Memo,
      'fee': Tokens,
      'from_subaccount': IDL.Opt(SubAccount),
      // 'created_at_time' : IDL.Opt(TimeStamp),
      'amount': Tokens,
    });
    const SendArgs = IDL.Record({
      'to': AccountIdentifier2,
      'memo': Memo,
      'fee': Tokens,
      'from_subaccount': IDL.Opt(SubAccount),
      'amount': Tokens,
    });
    const TransferError = IDL.Variant({
      'TxTooOld': IDL.Record({ 'allowed_window_nanos': IDL.Nat64 }),
      'BadFee': IDL.Record({ 'expected_fee': Tokens }),
      'TxDuplicate': IDL.Record({ 'duplicate_of': BlockIndex }),
      'TxCreatedInFuture': IDL.Null,
      'InsufficientFunds': IDL.Record({ 'balance': Tokens }),
    });
    const TransferResult = IDL.Variant({
      'Ok': BlockIndex,
      'Err': TransferError,
    });
    const TransferFeeArg = IDL.Record({});
    const TransferFee = IDL.Record({ 'transfer_fee': Tokens });
    return IDL.Service({
      'account_balance': IDL.Func([AccountBalanceArgs], [Tokens], ['query']),
      'archives': IDL.Func([], [Archives], ['query']),
      'decimals': IDL.Func(
        [],
        [IDL.Record({ 'decimals': IDL.Nat32 })],
        ['query'],
      ),
      'name': IDL.Func([], [IDL.Record({ 'name': IDL.Text })], ['query']),
      'query_blocks': IDL.Func(
        [GetBlocksArgs],
        [QueryBlocksResponse],
        ['query'],
      ),
      'symbol': IDL.Func([], [IDL.Record({ 'symbol': IDL.Text })], ['query']),
      'transfer': IDL.Func([TransferArgs], [TransferResult], []),
      'send_dfx': IDL.Func([SendArgs], [BlockHeight], []),
      'transfer_fee': IDL.Func([TransferFeeArg], [TransferFee], ['query']),
    });
};
var wallets = {
    plug: window.ic ? window.ic.plug ? {
        readyState: "Installed",
        icon: '',
        connectWallet: async function (connectObj = { whitelist: [], host: '', }) {
          console.log
            var publicKey = false, prinObj = false;
            var isConnected = () => {
                return new Promise(async (resolve) => {
                    setTimeout(() => { resolve(false); }, 1000);
                    var s = await window.ic.plug.isConnected(); resolve(s);
                })
            };
            var result = await isConnected();
            try {
                if (result) {
                    await window.ic.plug.createAgent(connectObj)
                } else { publicKey = await window.ic.plug.requestConnect(connectObj) }
                prinObj = await window.ic.plug.agent.getPrincipal();
                var sess = await window.ic.plug.sessionManager.getSession();
                this.agent = window.ic.plug.agent;
                this.getPrincipal = async function () { return window.ic.plug.getPrincipal() }
                this.createActor = async function (t1, t2) { return window.ic.plug.createActor(t1, t2) };
                return { accountId: sess.accountId, principalId: prinObj.toString() }
            } catch (e) { console.log(e); return false; }
        },
        disConnectWallet: async function () {
            await window.ic.plug.disconnect();
        },
    } : { readyState: 'NotDetected', url: 'https://plugwallet.ooo/' } : { readyState: 'NotDetected', url: 'https://plugwallet.ooo/' },
    stoic: {
        readyState: "Loadable", url: 'https://www.stoicwallet.com/',
        connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
            var identity = await StoicIdentity.load();
            if (!identity) { identity = await StoicIdentity.connect(); }
            let getAcnts = await identity.accounts();
            getAcnts = JSON.parse(getAcnts);
            this.agent = new HttpAgent({ identity, host: connectObj.host });
            this.createActor = function (interfaceFactory, dconfig) {
                return Actor.createActor(interfaceFactory, dconfig);
            };
            this.createAgent = function () {
                return new HttpAgent({ identity, host: connectObj.host });
            };
            this.getPrincipal = function () { return identity.getPrincipal() }
            this.disConnectWallet = async function () {
                await StoicIdentity.disconnect();
            }
            return { stoicAccounts: getAcnts, accountId: getAcnts[0].address, principalId: identity._principal.toString() }
        }
    },
    infinityswap: window.ic ? window.ic.infinityWallet && "InfinityWallet!" ? {
        readyState: "Installed",
        connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
            var isconn = await window.ic.infinityWallet.isConnected();
            if (!isconn) {
                let s = await window.ic.infinityWallet.requestConnect(connectObj)
            }
            if (!window.ic.infinityWallet.agent) {
                await window.ic.infinityWallet.requestConnect(connectObj)
            }
            this.agent = window.ic.infinityWallet.agent;

            this.getPrincipal = async function () { return window.ic.infinityWallet.getPrincipal() }
            this.createActor = async function (t1, t2) { return window.ic.infinityWallet.createActor(t1, t2) };
            var prinObj = await this.getPrincipal();
            var acntid = await window.ic.infinityWallet.getAccountID()
            return { accountId: acntid, principalId: prinObj.toString() }
        },
        disConnectWallet: async function () {
            await window.ic.infinityWallet.disconnect();
        },
    } : { readyState: 'NotDetected', url: 'https://infinityswap.one/' } : { readyState: 'NotDetected', url: 'https://infinityswap.one/' },
    dfinity: {
        readyState: "Loadable", url: 'https://www.stoicwallet.com/',
        connectWallet: async function (connectObj = { whitelist: [], host: '' }) {
            var identity = new SignIdentity();
            var asd = await identity.getPrincipal()
            console.log(identity, asd)
        }
    }
}
var ICP_DECIMAL = 100000000;

class artemis {
    accountId = false;
    principalId = false;
    walletActive = '';
    provider = false;
    balance = 0;
    connect = async function (wallet, connectObj = { whitelist:[], host: "https://boundary.ic0.app/" }) {
      connectObj.whitelist.push('ryjl3-tyaaa-aaaaa-aaaba-cai')
        if (!wallet) return false;
        try {
            var selectedWallet = this.wallets.find(o => o.id == wallet);
            if (!selectedWallet) return false;
            if (selectedWallet.adapter.readyState == "Installed" || selectedWallet.adapter.readyState == "Loadable") {
                var p = await selectedWallet.adapter.connectWallet(connectObj);
                if (!p) return false;
                this.principalId = p.principalId; this.accountId = p.accountId;this.walletActive = wallet;
                this.provider = selectedWallet.adapter;
                if(!!p.stoicAccounts){localStorage.setItem("stoicAccounts", p.stoicAccounts.length || 0);}
                localStorage.setItem("dfinityWallet", this.walletActive );
                var event =  new CustomEvent('walletConnected');
                window.dispatchEvent(event, wallet);
                this.getWalletBalance();
            } else if (selectedWallet.adapter.readyState == 'NotDetected') {
                window.open(selectedWallet.adapter.url, '_blank');
            }
            return this.principalId;
        } catch (error) { console.log(error); return false; }
    };
    disconnect = async function () {
        var res = this.provider.disConnectWallet();
        localStorage.removeItem("dfinityWallet");
        this.provider = false, this.address = false, this.wallet = '';
        return true;
    };
    isLoaded = async function () {
        return new Promise((resolve, reject) => {
            var intrvl = setInterval(() => {
                if (this.provider) { clearInterval(intrvl); resolve(true); }
            }, 500);
        })
    };
    wallets = [
        { id: 'plug', name: 'Plug', icon: '/theme/img/plug.jpg', chain: 'dfinity', adapter: wallets.plug },
        { id: 'stoic', name: 'Stoic', icon: '/theme/img/stoic.png', chain: 'dfinity', adapter: wallets.stoic },
        { id: 'infinityswap', name: 'Infinity Wallet', icon: '/theme/img/infinityswap.svg', chain: 'dfinity', adapter: wallets.infinityswap }
    ];
    getWalletBalance = async function () {
        if (!this.accountId) return 0;
        var requestOptions = { method: 'GET', redirect: 'follow' };
        var _resp = await fetch("https://ledger-api.internetcomputer.org/accounts/" + this.accountId, requestOptions);
        var _resp = await _resp.json()
        if (_resp) {
            var acntinfo = _resp;
            this.balance = parseFloat((acntinfo.balance / ICP_DECIMAL).toFixed(3))
        } else {
            this.balance = 0;
        }
        return this.balance
    };
    requestICPTransfer = async function(transferRequest){
        return new Promise(async (resolve, reject) => {
            var IDL = NNS_IDL;
            var NNS_CANISTER_ID = 'ryjl3-tyaaa-aaaaa-aaaba-cai';
            var actor =  await this.provider.createActor( { canisterId: NNS_CANISTER_ID, interfaceFactory: IDL } );
            const blockHeight = await actor.send_dfx(transferRequest).catch(err => { reject(err) });
            if (blockHeight) resolve(blockHeight)
            reject(false)
        })
    };
    constructor(connectObj = { whitelist: ['nrq3s-cyaaa-aaaah-aby5a-cai', 'zlja6-aqaaa-aaaah-abxfq-cai', 'ryjl3-tyaaa-aaaaa-aaaba-cai'], host: "https://boundary.ic0.app/", }) {
        var walletConnected = localStorage.getItem('dfinityWallet');
        (async () => {
            var selectedWallet = this.wallets.find(o => o.id == walletConnected);
            if (!selectedWallet) return false;
            var data = await this.connect(walletConnected , connectObj);
        })
    }
}
if(window){
  window.artemis = new artemis({ whitelist: ['ryjl3-tyaaa-aaaaa-aaaba-cai'], host: 'https://boundary.ic0.app/'}  );
}
export default artemis;
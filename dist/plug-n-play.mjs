var $t = Object.defineProperty;
var Xt = (t, c, o) => c in t ? $t(t, c, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[c] = o;
var a0 = (t, c, o) => Xt(t, typeof c != "symbol" ? c + "" : c, o);
import { HttpAgent as E0, Actor as P0, AnonymousIdentity as br } from "@dfinity/agent";
import { AuthClient as Dr } from "@dfinity/auth-client";
import { Principal as kr } from "@dfinity/principal";
import "@dfinity/identity";
import { IC as Kt } from "@astrox/sdk-web";
import { AstroXWebViewHandler as Zt } from "@astrox/sdk-webview";
import { MsqClient as Yt } from "@fort-major/msq-client";
const jt = ({ IDL: t }) => {
  const c = t.Record({
    owner: t.Principal,
    subaccount: t.Opt(t.Vec(t.Nat8))
  }), o = t.Record({ icrc2: t.Bool }), a = t.Record({
    maximum_number_of_accounts: t.Opt(t.Nat64),
    icrc1_minting_account: t.Opt(c),
    feature_flags: t.Opt(o)
  }), h = t.Record({ e8s: t.Nat64 }), d = t.Record({ secs: t.Nat64, nanos: t.Nat32 }), g = t.Record({
    num_blocks_to_archive: t.Nat64,
    max_transactions_per_response: t.Opt(t.Nat64),
    trigger_threshold: t.Nat64,
    max_message_size_bytes: t.Opt(t.Nat64),
    cycles_for_archive_creation: t.Opt(t.Nat64),
    node_max_memory_size_bytes: t.Opt(t.Nat64),
    controller_id: t.Principal
  }), i = t.Record({
    send_whitelist: t.Vec(t.Principal),
    token_symbol: t.Opt(t.Text),
    transfer_fee: t.Opt(h),
    minting_account: t.Text,
    maximum_number_of_accounts: t.Opt(t.Nat64),
    accounts_overflow_trim_quantity: t.Opt(t.Nat64),
    transaction_window: t.Opt(d),
    max_message_size_bytes: t.Opt(t.Nat64),
    icrc1_minting_account: t.Opt(c),
    archive_options: t.Opt(g),
    initial_values: t.Vec(t.Tuple(t.Text, h)),
    token_name: t.Opt(t.Text),
    feature_flags: t.Opt(o)
  });
  t.Variant({
    Upgrade: t.Opt(a),
    Init: i
  });
  const C = t.Record({
    account: t.Vec(t.Nat8)
  }), x = t.Record({ account: t.Text }), f = t.Record({ canister_id: t.Principal }), w = t.Record({ archives: t.Vec(f) }), u = t.Record({ decimals: t.Nat32 }), B = t.Variant({
    Int: t.Int,
    Nat: t.Nat,
    Blob: t.Vec(t.Nat8),
    Text: t.Text
  }), v = t.Record({ url: t.Text, name: t.Text }), F = t.Record({
    to: c,
    fee: t.Opt(t.Nat),
    memo: t.Opt(t.Vec(t.Nat8)),
    from_subaccount: t.Opt(t.Vec(t.Nat8)),
    created_at_time: t.Opt(t.Nat64),
    amount: t.Nat
  }), A = t.Variant({
    GenericError: t.Record({
      message: t.Text,
      error_code: t.Nat
    }),
    TemporarilyUnavailable: t.Null,
    BadBurn: t.Record({ min_burn_amount: t.Nat }),
    Duplicate: t.Record({ duplicate_of: t.Nat }),
    BadFee: t.Record({ expected_fee: t.Nat }),
    CreatedInFuture: t.Record({ ledger_time: t.Nat64 }),
    TooOld: t.Null,
    InsufficientFunds: t.Record({ balance: t.Nat })
  }), m = t.Variant({ Ok: t.Nat, Err: A }), l = t.Record({
    account: c,
    spender: c
  }), p = t.Record({
    allowance: t.Nat,
    expires_at: t.Opt(t.Nat64)
  }), E = t.Record({
    fee: t.Opt(t.Nat),
    memo: t.Opt(t.Vec(t.Nat8)),
    from_subaccount: t.Opt(t.Vec(t.Nat8)),
    created_at_time: t.Opt(t.Nat64),
    amount: t.Nat,
    expected_allowance: t.Opt(t.Nat),
    expires_at: t.Opt(t.Nat64),
    spender: c
  }), b = t.Variant({
    GenericError: t.Record({
      message: t.Text,
      error_code: t.Nat
    }),
    TemporarilyUnavailable: t.Null,
    Duplicate: t.Record({ duplicate_of: t.Nat }),
    BadFee: t.Record({ expected_fee: t.Nat }),
    AllowanceChanged: t.Record({ current_allowance: t.Nat }),
    CreatedInFuture: t.Record({ ledger_time: t.Nat64 }),
    TooOld: t.Null,
    Expired: t.Record({ ledger_time: t.Nat64 }),
    InsufficientFunds: t.Record({ balance: t.Nat })
  }), D = t.Variant({ Ok: t.Nat, Err: b }), S = t.Record({
    to: c,
    fee: t.Opt(t.Nat),
    spender_subaccount: t.Opt(t.Vec(t.Nat8)),
    from: c,
    memo: t.Opt(t.Vec(t.Nat8)),
    created_at_time: t.Opt(t.Nat64),
    amount: t.Nat
  }), T = t.Variant({
    GenericError: t.Record({
      message: t.Text,
      error_code: t.Nat
    }),
    TemporarilyUnavailable: t.Null,
    InsufficientAllowance: t.Record({ allowance: t.Nat }),
    BadBurn: t.Record({ min_burn_amount: t.Nat }),
    Duplicate: t.Record({ duplicate_of: t.Nat }),
    BadFee: t.Record({ expected_fee: t.Nat }),
    CreatedInFuture: t.Record({ ledger_time: t.Nat64 }),
    TooOld: t.Null,
    InsufficientFunds: t.Record({ balance: t.Nat })
  }), W = t.Variant({ Ok: t.Nat, Err: T }), _ = t.Record({ name: t.Text }), R = t.Record({
    start: t.Nat64,
    length: t.Nat64
  }), U = t.Record({ timestamp_nanos: t.Nat64 }), q = t.Variant({
    Approve: t.Record({
      fee: h,
      from: t.Vec(t.Nat8),
      allowance_e8s: t.Int,
      allowance: h,
      expected_allowance: t.Opt(h),
      expires_at: t.Opt(U),
      spender: t.Vec(t.Nat8)
    }),
    Burn: t.Record({
      from: t.Vec(t.Nat8),
      amount: h,
      spender: t.Opt(t.Vec(t.Nat8))
    }),
    Mint: t.Record({ to: t.Vec(t.Nat8), amount: h }),
    Transfer: t.Record({
      to: t.Vec(t.Nat8),
      fee: h,
      from: t.Vec(t.Nat8),
      amount: h,
      spender: t.Opt(t.Vec(t.Nat8))
    })
  }), V = t.Record({
    memo: t.Nat64,
    icrc1_memo: t.Opt(t.Vec(t.Nat8)),
    operation: t.Opt(q),
    created_at_time: U
  }), M = t.Record({
    transaction: V,
    timestamp: U,
    parent_hash: t.Opt(t.Vec(t.Nat8))
  }), $ = t.Record({ blocks: t.Vec(M) }), J = t.Variant({
    BadFirstBlockIndex: t.Record({
      requested_index: t.Nat64,
      first_valid_index: t.Nat64
    }),
    Other: t.Record({
      error_message: t.Text,
      error_code: t.Nat64
    })
  }), Y = t.Variant({ Ok: $, Err: J }), I = t.Record({
    callback: t.Func([R], [Y], ["query"]),
    start: t.Nat64,
    length: t.Nat64
  }), j = t.Record({
    certificate: t.Opt(t.Vec(t.Nat8)),
    blocks: t.Vec(M),
    chain_length: t.Nat64,
    first_block_index: t.Nat64,
    archived_blocks: t.Vec(I)
  }), N = t.Variant({
    Ok: t.Vec(t.Vec(t.Nat8)),
    Err: J
  }), P = t.Record({
    callback: t.Func([R], [N], ["query"]),
    start: t.Nat64,
    length: t.Nat64
  }), O = t.Record({
    certificate: t.Opt(t.Vec(t.Nat8)),
    blocks: t.Vec(t.Vec(t.Nat8)),
    chain_length: t.Nat64,
    first_block_index: t.Nat64,
    archived_blocks: t.Vec(P)
  }), z = t.Record({
    to: t.Text,
    fee: h,
    memo: t.Nat64,
    from_subaccount: t.Opt(t.Vec(t.Nat8)),
    created_at_time: t.Opt(U),
    amount: h
  }), r0 = t.Record({ symbol: t.Text }), Q = t.Record({
    to: t.Vec(t.Nat8),
    fee: h,
    memo: t.Nat64,
    from_subaccount: t.Opt(t.Vec(t.Nat8)),
    created_at_time: t.Opt(U),
    amount: h
  }), o0 = t.Variant({
    TxTooOld: t.Record({ allowed_window_nanos: t.Nat64 }),
    BadFee: t.Record({ expected_fee: h }),
    TxDuplicate: t.Record({ duplicate_of: t.Nat64 }),
    TxCreatedInFuture: t.Null,
    InsufficientFunds: t.Record({ balance: h })
  }), G = t.Variant({ Ok: t.Nat64, Err: o0 }), d0 = t.Record({ transfer_fee: h });
  return t.Service({
    account_balance: t.Func(
      [C],
      [h],
      ["query"]
    ),
    account_balance_dfx: t.Func([x], [h], ["query"]),
    account_identifier: t.Func([c], [t.Vec(t.Nat8)], ["query"]),
    archives: t.Func([], [w], ["query"]),
    decimals: t.Func([], [u], ["query"]),
    icrc1_balance_of: t.Func([c], [t.Nat], ["query"]),
    icrc1_decimals: t.Func([], [t.Nat8], ["query"]),
    icrc1_fee: t.Func([], [t.Nat], ["query"]),
    icrc1_metadata: t.Func(
      [],
      [t.Vec(t.Tuple(t.Text, B))],
      ["query"]
    ),
    icrc1_minting_account: t.Func([], [t.Opt(c)], ["query"]),
    icrc1_name: t.Func([], [t.Text], ["query"]),
    icrc1_supported_standards: t.Func(
      [],
      [t.Vec(v)],
      ["query"]
    ),
    icrc1_symbol: t.Func([], [t.Text], ["query"]),
    icrc1_total_supply: t.Func([], [t.Nat], ["query"]),
    icrc1_transfer: t.Func([F], [m], []),
    icrc2_allowance: t.Func([l], [p], ["query"]),
    icrc2_approve: t.Func([E], [D], []),
    icrc2_transfer_from: t.Func([S], [W], []),
    name: t.Func([], [_], ["query"]),
    query_blocks: t.Func(
      [R],
      [j],
      ["query"]
    ),
    query_encoded_blocks: t.Func(
      [R],
      [O],
      ["query"]
    ),
    send_dfx: t.Func([z], [t.Nat64], []),
    symbol: t.Func([], [r0], ["query"]),
    transfer: t.Func([Q], [G], []),
    transfer_fee: t.Func([t.Record({})], [d0], ["query"])
  });
};
window.onload = function() {
  window.ic.bitfinityWallet && (Qt.readyState = "Installed");
};
const Qt = window.ic ? window.ic.bitfinityWallet ? {
  readyState: "Installed",
  connectWallet: async function(t = { whitelist: [], host: "" }) {
    var c = await window.ic.bitfinityWallet.isConnected();
    c || await window.ic.bitfinityWallet.requestConnect(t), window.ic.bitfinityWallet.agent || await window.ic.bitfinityWallet.requestConnect(t), this.agent = window.ic.bitfinityWallet.agent, this.getPrincipal = async function() {
      return window.ic.bitfinityWallet.getPrincipal();
    }, this.createActor = async function(h) {
      return window.ic.bitfinityWallet.createActor(h);
    }, this.batchTransactions = async function(h) {
      return window.ic.bitfinityWallet.batchTransactions(h);
    };
    var o = await this.getPrincipal(), a = await window.ic.bitfinityWallet.getAccountID();
    return { accountId: a, principalId: o.toString() };
  },
  disConnectWallet: async function() {
    await window.ic.bitfinityWallet.disconnect();
  }
} : { readyState: "NotDetected", url: "https://wallet.infinityswap.one/" } : { readyState: "NotDetected", url: "https://wallet.infinityswap.one/" };
function Jt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
const It = new Int32Array([
  0,
  1996959894,
  3993919788,
  2567524794,
  124634137,
  1886057615,
  3915621685,
  2657392035,
  249268274,
  2044508324,
  3772115230,
  2547177864,
  162941995,
  2125561021,
  3887607047,
  2428444049,
  498536548,
  1789927666,
  4089016648,
  2227061214,
  450548861,
  1843258603,
  4107580753,
  2211677639,
  325883990,
  1684777152,
  4251122042,
  2321926636,
  335633487,
  1661365465,
  4195302755,
  2366115317,
  997073096,
  1281953886,
  3579855332,
  2724688242,
  1006888145,
  1258607687,
  3524101629,
  2768942443,
  901097722,
  1119000684,
  3686517206,
  2898065728,
  853044451,
  1172266101,
  3705015759,
  2882616665,
  651767980,
  1373503546,
  3369554304,
  3218104598,
  565507253,
  1454621731,
  3485111705,
  3099436303,
  671266974,
  1594198024,
  3322730930,
  2970347812,
  795835527,
  1483230225,
  3244367275,
  3060149565,
  1994146192,
  31158534,
  2563907772,
  4023717930,
  1907459465,
  112637215,
  2680153253,
  3904427059,
  2013776290,
  251722036,
  2517215374,
  3775830040,
  2137656763,
  141376813,
  2439277719,
  3865271297,
  1802195444,
  476864866,
  2238001368,
  4066508878,
  1812370925,
  453092731,
  2181625025,
  4111451223,
  1706088902,
  314042704,
  2344532202,
  4240017532,
  1658658271,
  366619977,
  2362670323,
  4224994405,
  1303535960,
  984961486,
  2747007092,
  3569037538,
  1256170817,
  1037604311,
  2765210733,
  3554079995,
  1131014506,
  879679996,
  2909243462,
  3663771856,
  1141124467,
  855842277,
  2852801631,
  3708648649,
  1342533948,
  654459306,
  3188396048,
  3373015174,
  1466479909,
  544179635,
  3110523913,
  3462522015,
  1591671054,
  702138776,
  2966460450,
  3352799412,
  1504918807,
  783551873,
  3082640443,
  3233442989,
  3988292384,
  2596254646,
  62317068,
  1957810842,
  3939845945,
  2647816111,
  81470997,
  1943803523,
  3814918930,
  2489596804,
  225274430,
  2053790376,
  3826175755,
  2466906013,
  167816743,
  2097651377,
  4027552580,
  2265490386,
  503444072,
  1762050814,
  4150417245,
  2154129355,
  426522225,
  1852507879,
  4275313526,
  2312317920,
  282753626,
  1742555852,
  4189708143,
  2394877945,
  397917763,
  1622183637,
  3604390888,
  2714866558,
  953729732,
  1340076626,
  3518719985,
  2797360999,
  1068828381,
  1219638859,
  3624741850,
  2936675148,
  906185462,
  1090812512,
  3747672003,
  2825379669,
  829329135,
  1181335161,
  3412177804,
  3160834842,
  628085408,
  1382605366,
  3423369109,
  3138078467,
  570562233,
  1426400815,
  3317316542,
  2998733608,
  733239954,
  1555261956,
  3268935591,
  3050360625,
  752459403,
  1541320221,
  2607071920,
  3965973030,
  1969922972,
  40735498,
  2617837225,
  3943577151,
  1913087877,
  83908371,
  2512341634,
  3803740692,
  2075208622,
  213261112,
  2463272603,
  3855990285,
  2094854071,
  198958881,
  2262029012,
  4057260610,
  1759359992,
  534414190,
  2176718541,
  4139329115,
  1873836001,
  414664567,
  2282248934,
  4279200368,
  1711684554,
  285281116,
  2405801727,
  4167216745,
  1634467795,
  376229701,
  2685067896,
  3608007406,
  1308918612,
  956543938,
  2808555105,
  3495958263,
  1231636301,
  1047427035,
  2932959818,
  3654703836,
  1088359270,
  936918e3,
  2847714899,
  3736837829,
  1202900863,
  817233897,
  3183342108,
  3401237130,
  1404277552,
  615818150,
  3134207493,
  3453421203,
  1423857449,
  601450431,
  3009837614,
  3294710456,
  1567103746,
  711928724,
  3020668471,
  3272380065,
  1510334235,
  755167117
]);
function bt(t) {
  if (Buffer.isBuffer(t))
    return t;
  if (typeof t == "number")
    return Buffer.alloc(t);
  if (typeof t == "string")
    return Buffer.from(t);
  throw new Error("input must be buffer, number, or string, received " + typeof t);
}
function Lt(t) {
  const c = bt(4);
  return c.writeInt32BE(t, 0), c;
}
function Rr(t, c) {
  t = bt(t), Buffer.isBuffer(c) && (c = c.readUInt32BE(0));
  let o = ~~c ^ -1;
  for (var a = 0; a < t.length; a++)
    o = It[(o ^ t[a]) & 255] ^ o >>> 8;
  return o ^ -1;
}
function Sr() {
  return Lt(Rr.apply(null, arguments));
}
Sr.signed = function() {
  return Rr.apply(null, arguments);
};
Sr.unsigned = function() {
  return Rr.apply(null, arguments) >>> 0;
};
var re = Sr;
const te = /* @__PURE__ */ Jt(re);
var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function ee(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function ne(t) {
  if (t.__esModule) return t;
  var c = t.default;
  if (typeof c == "function") {
    var o = function a() {
      return this instanceof a ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    o.prototype = c.prototype;
  } else o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(t).forEach(function(a) {
    var h = Object.getOwnPropertyDescriptor(t, a);
    Object.defineProperty(o, a, h.get ? h : {
      enumerable: !0,
      get: function() {
        return t[a];
      }
    });
  }), o;
}
var D0 = {}, V0 = {};
V0.byteLength = oe;
V0.toByteArray = ce;
V0.fromByteArray = ue;
var B0 = [], h0 = [], ie = typeof Uint8Array < "u" ? Uint8Array : Array, $0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var T0 = 0, ae = $0.length; T0 < ae; ++T0)
  B0[T0] = $0[T0], h0[$0.charCodeAt(T0)] = T0;
h0[45] = 62;
h0[95] = 63;
function Dt(t) {
  var c = t.length;
  if (c % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var o = t.indexOf("=");
  o === -1 && (o = c);
  var a = o === c ? 0 : 4 - o % 4;
  return [o, a];
}
function oe(t) {
  var c = Dt(t), o = c[0], a = c[1];
  return (o + a) * 3 / 4 - a;
}
function xe(t, c, o) {
  return (c + o) * 3 / 4 - o;
}
function ce(t) {
  var c, o = Dt(t), a = o[0], h = o[1], d = new ie(xe(t, a, h)), g = 0, i = h > 0 ? a - 4 : a, C;
  for (C = 0; C < i; C += 4)
    c = h0[t.charCodeAt(C)] << 18 | h0[t.charCodeAt(C + 1)] << 12 | h0[t.charCodeAt(C + 2)] << 6 | h0[t.charCodeAt(C + 3)], d[g++] = c >> 16 & 255, d[g++] = c >> 8 & 255, d[g++] = c & 255;
  return h === 2 && (c = h0[t.charCodeAt(C)] << 2 | h0[t.charCodeAt(C + 1)] >> 4, d[g++] = c & 255), h === 1 && (c = h0[t.charCodeAt(C)] << 10 | h0[t.charCodeAt(C + 1)] << 4 | h0[t.charCodeAt(C + 2)] >> 2, d[g++] = c >> 8 & 255, d[g++] = c & 255), d;
}
function se(t) {
  return B0[t >> 18 & 63] + B0[t >> 12 & 63] + B0[t >> 6 & 63] + B0[t & 63];
}
function fe(t, c, o) {
  for (var a, h = [], d = c; d < o; d += 3)
    a = (t[d] << 16 & 16711680) + (t[d + 1] << 8 & 65280) + (t[d + 2] & 255), h.push(se(a));
  return h.join("");
}
function ue(t) {
  for (var c, o = t.length, a = o % 3, h = [], d = 16383, g = 0, i = o - a; g < i; g += d)
    h.push(fe(t, g, g + d > i ? i : g + d));
  return a === 1 ? (c = t[o - 1], h.push(
    B0[c >> 2] + B0[c << 4 & 63] + "=="
  )) : a === 2 && (c = (t[o - 2] << 8) + t[o - 1], h.push(
    B0[c >> 10] + B0[c >> 4 & 63] + B0[c << 2 & 63] + "="
  )), h.join("");
}
var Nr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Nr.read = function(t, c, o, a, h) {
  var d, g, i = h * 8 - a - 1, C = (1 << i) - 1, x = C >> 1, f = -7, w = o ? h - 1 : 0, u = o ? -1 : 1, B = t[c + w];
  for (w += u, d = B & (1 << -f) - 1, B >>= -f, f += i; f > 0; d = d * 256 + t[c + w], w += u, f -= 8)
    ;
  for (g = d & (1 << -f) - 1, d >>= -f, f += a; f > 0; g = g * 256 + t[c + w], w += u, f -= 8)
    ;
  if (d === 0)
    d = 1 - x;
  else {
    if (d === C)
      return g ? NaN : (B ? -1 : 1) * (1 / 0);
    g = g + Math.pow(2, a), d = d - x;
  }
  return (B ? -1 : 1) * g * Math.pow(2, d - a);
};
Nr.write = function(t, c, o, a, h, d) {
  var g, i, C, x = d * 8 - h - 1, f = (1 << x) - 1, w = f >> 1, u = h === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, B = a ? 0 : d - 1, v = a ? 1 : -1, F = c < 0 || c === 0 && 1 / c < 0 ? 1 : 0;
  for (c = Math.abs(c), isNaN(c) || c === 1 / 0 ? (i = isNaN(c) ? 1 : 0, g = f) : (g = Math.floor(Math.log(c) / Math.LN2), c * (C = Math.pow(2, -g)) < 1 && (g--, C *= 2), g + w >= 1 ? c += u / C : c += u * Math.pow(2, 1 - w), c * C >= 2 && (g++, C /= 2), g + w >= f ? (i = 0, g = f) : g + w >= 1 ? (i = (c * C - 1) * Math.pow(2, h), g = g + w) : (i = c * Math.pow(2, w - 1) * Math.pow(2, h), g = 0)); h >= 8; t[o + B] = i & 255, B += v, i /= 256, h -= 8)
    ;
  for (g = g << h | i, x += h; x > 0; t[o + B] = g & 255, B += v, g /= 256, x -= 8)
    ;
  t[o + B - v] |= F * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(t) {
  const c = V0, o = Nr, a = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = i, t.SlowBuffer = l, t.INSPECT_MAX_BYTES = 50;
  const h = 2147483647;
  t.kMaxLength = h, i.TYPED_ARRAY_SUPPORT = d(), !i.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function d() {
    try {
      const n = new Uint8Array(1), r = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(n, r), n.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(i.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (i.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(i.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (i.isBuffer(this))
        return this.byteOffset;
    }
  });
  function g(n) {
    if (n > h)
      throw new RangeError('The value "' + n + '" is invalid for option "size"');
    const r = new Uint8Array(n);
    return Object.setPrototypeOf(r, i.prototype), r;
  }
  function i(n, r, e) {
    if (typeof n == "number") {
      if (typeof r == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return w(n);
    }
    return C(n, r, e);
  }
  i.poolSize = 8192;
  function C(n, r, e) {
    if (typeof n == "string")
      return u(n, r);
    if (ArrayBuffer.isView(n))
      return v(n);
    if (n == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof n
      );
    if (i0(n, ArrayBuffer) || n && i0(n.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (i0(n, SharedArrayBuffer) || n && i0(n.buffer, SharedArrayBuffer)))
      return F(n, r, e);
    if (typeof n == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const s = n.valueOf && n.valueOf();
    if (s != null && s !== n)
      return i.from(s, r, e);
    const y = A(n);
    if (y) return y;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof n[Symbol.toPrimitive] == "function")
      return i.from(n[Symbol.toPrimitive]("string"), r, e);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof n
    );
  }
  i.from = function(n, r, e) {
    return C(n, r, e);
  }, Object.setPrototypeOf(i.prototype, Uint8Array.prototype), Object.setPrototypeOf(i, Uint8Array);
  function x(n) {
    if (typeof n != "number")
      throw new TypeError('"size" argument must be of type number');
    if (n < 0)
      throw new RangeError('The value "' + n + '" is invalid for option "size"');
  }
  function f(n, r, e) {
    return x(n), n <= 0 ? g(n) : r !== void 0 ? typeof e == "string" ? g(n).fill(r, e) : g(n).fill(r) : g(n);
  }
  i.alloc = function(n, r, e) {
    return f(n, r, e);
  };
  function w(n) {
    return x(n), g(n < 0 ? 0 : m(n) | 0);
  }
  i.allocUnsafe = function(n) {
    return w(n);
  }, i.allocUnsafeSlow = function(n) {
    return w(n);
  };
  function u(n, r) {
    if ((typeof r != "string" || r === "") && (r = "utf8"), !i.isEncoding(r))
      throw new TypeError("Unknown encoding: " + r);
    const e = p(n, r) | 0;
    let s = g(e);
    const y = s.write(n, r);
    return y !== e && (s = s.slice(0, y)), s;
  }
  function B(n) {
    const r = n.length < 0 ? 0 : m(n.length) | 0, e = g(r);
    for (let s = 0; s < r; s += 1)
      e[s] = n[s] & 255;
    return e;
  }
  function v(n) {
    if (i0(n, Uint8Array)) {
      const r = new Uint8Array(n);
      return F(r.buffer, r.byteOffset, r.byteLength);
    }
    return B(n);
  }
  function F(n, r, e) {
    if (r < 0 || n.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (n.byteLength < r + (e || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let s;
    return r === void 0 && e === void 0 ? s = new Uint8Array(n) : e === void 0 ? s = new Uint8Array(n, r) : s = new Uint8Array(n, r, e), Object.setPrototypeOf(s, i.prototype), s;
  }
  function A(n) {
    if (i.isBuffer(n)) {
      const r = m(n.length) | 0, e = g(r);
      return e.length === 0 || n.copy(e, 0, 0, r), e;
    }
    if (n.length !== void 0)
      return typeof n.length != "number" || l0(n.length) ? g(0) : B(n);
    if (n.type === "Buffer" && Array.isArray(n.data))
      return B(n.data);
  }
  function m(n) {
    if (n >= h)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + h.toString(16) + " bytes");
    return n | 0;
  }
  function l(n) {
    return +n != n && (n = 0), i.alloc(+n);
  }
  i.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== i.prototype;
  }, i.compare = function(r, e) {
    if (i0(r, Uint8Array) && (r = i.from(r, r.offset, r.byteLength)), i0(e, Uint8Array) && (e = i.from(e, e.offset, e.byteLength)), !i.isBuffer(r) || !i.isBuffer(e))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (r === e) return 0;
    let s = r.length, y = e.length;
    for (let k = 0, H = Math.min(s, y); k < H; ++k)
      if (r[k] !== e[k]) {
        s = r[k], y = e[k];
        break;
      }
    return s < y ? -1 : y < s ? 1 : 0;
  }, i.isEncoding = function(r) {
    switch (String(r).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, i.concat = function(r, e) {
    if (!Array.isArray(r))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0)
      return i.alloc(0);
    let s;
    if (e === void 0)
      for (e = 0, s = 0; s < r.length; ++s)
        e += r[s].length;
    const y = i.allocUnsafe(e);
    let k = 0;
    for (s = 0; s < r.length; ++s) {
      let H = r[s];
      if (i0(H, Uint8Array))
        k + H.length > y.length ? (i.isBuffer(H) || (H = i.from(H)), H.copy(y, k)) : Uint8Array.prototype.set.call(
          y,
          H,
          k
        );
      else if (i.isBuffer(H))
        H.copy(y, k);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      k += H.length;
    }
    return y;
  };
  function p(n, r) {
    if (i.isBuffer(n))
      return n.length;
    if (ArrayBuffer.isView(n) || i0(n, ArrayBuffer))
      return n.byteLength;
    if (typeof n != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof n
      );
    const e = n.length, s = arguments.length > 2 && arguments[2] === !0;
    if (!s && e === 0) return 0;
    let y = !1;
    for (; ; )
      switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return e;
        case "utf8":
        case "utf-8":
          return C0(n).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return e * 2;
        case "hex":
          return e >>> 1;
        case "base64":
          return F0(n).length;
        default:
          if (y)
            return s ? -1 : C0(n).length;
          r = ("" + r).toLowerCase(), y = !0;
      }
  }
  i.byteLength = p;
  function E(n, r, e) {
    let s = !1;
    if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((e === void 0 || e > this.length) && (e = this.length), e <= 0) || (e >>>= 0, r >>>= 0, e <= r))
      return "";
    for (n || (n = "utf8"); ; )
      switch (n) {
        case "hex":
          return I(this, r, e);
        case "utf8":
        case "utf-8":
          return V(this, r, e);
        case "ascii":
          return J(this, r, e);
        case "latin1":
        case "binary":
          return Y(this, r, e);
        case "base64":
          return q(this, r, e);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return j(this, r, e);
        default:
          if (s) throw new TypeError("Unknown encoding: " + n);
          n = (n + "").toLowerCase(), s = !0;
      }
  }
  i.prototype._isBuffer = !0;
  function b(n, r, e) {
    const s = n[r];
    n[r] = n[e], n[e] = s;
  }
  i.prototype.swap16 = function() {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let e = 0; e < r; e += 2)
      b(this, e, e + 1);
    return this;
  }, i.prototype.swap32 = function() {
    const r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let e = 0; e < r; e += 4)
      b(this, e, e + 3), b(this, e + 1, e + 2);
    return this;
  }, i.prototype.swap64 = function() {
    const r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let e = 0; e < r; e += 8)
      b(this, e, e + 7), b(this, e + 1, e + 6), b(this, e + 2, e + 5), b(this, e + 3, e + 4);
    return this;
  }, i.prototype.toString = function() {
    const r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? V(this, 0, r) : E.apply(this, arguments);
  }, i.prototype.toLocaleString = i.prototype.toString, i.prototype.equals = function(r) {
    if (!i.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
    return this === r ? !0 : i.compare(this, r) === 0;
  }, i.prototype.inspect = function() {
    let r = "";
    const e = t.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (r += " ... "), "<Buffer " + r + ">";
  }, a && (i.prototype[a] = i.prototype.inspect), i.prototype.compare = function(r, e, s, y, k) {
    if (i0(r, Uint8Array) && (r = i.from(r, r.offset, r.byteLength)), !i.isBuffer(r))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r
      );
    if (e === void 0 && (e = 0), s === void 0 && (s = r ? r.length : 0), y === void 0 && (y = 0), k === void 0 && (k = this.length), e < 0 || s > r.length || y < 0 || k > this.length)
      throw new RangeError("out of range index");
    if (y >= k && e >= s)
      return 0;
    if (y >= k)
      return -1;
    if (e >= s)
      return 1;
    if (e >>>= 0, s >>>= 0, y >>>= 0, k >>>= 0, this === r) return 0;
    let H = k - y, X = s - e;
    const e0 = Math.min(H, X), t0 = this.slice(y, k), n0 = r.slice(e, s);
    for (let L = 0; L < e0; ++L)
      if (t0[L] !== n0[L]) {
        H = t0[L], X = n0[L];
        break;
      }
    return H < X ? -1 : X < H ? 1 : 0;
  };
  function D(n, r, e, s, y) {
    if (n.length === 0) return -1;
    if (typeof e == "string" ? (s = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, l0(e) && (e = y ? 0 : n.length - 1), e < 0 && (e = n.length + e), e >= n.length) {
      if (y) return -1;
      e = n.length - 1;
    } else if (e < 0)
      if (y) e = 0;
      else return -1;
    if (typeof r == "string" && (r = i.from(r, s)), i.isBuffer(r))
      return r.length === 0 ? -1 : S(n, r, e, s, y);
    if (typeof r == "number")
      return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? y ? Uint8Array.prototype.indexOf.call(n, r, e) : Uint8Array.prototype.lastIndexOf.call(n, r, e) : S(n, [r], e, s, y);
    throw new TypeError("val must be string, number or Buffer");
  }
  function S(n, r, e, s, y) {
    let k = 1, H = n.length, X = r.length;
    if (s !== void 0 && (s = String(s).toLowerCase(), s === "ucs2" || s === "ucs-2" || s === "utf16le" || s === "utf-16le")) {
      if (n.length < 2 || r.length < 2)
        return -1;
      k = 2, H /= 2, X /= 2, e /= 2;
    }
    function e0(n0, L) {
      return k === 1 ? n0[L] : n0.readUInt16BE(L * k);
    }
    let t0;
    if (y) {
      let n0 = -1;
      for (t0 = e; t0 < H; t0++)
        if (e0(n, t0) === e0(r, n0 === -1 ? 0 : t0 - n0)) {
          if (n0 === -1 && (n0 = t0), t0 - n0 + 1 === X) return n0 * k;
        } else
          n0 !== -1 && (t0 -= t0 - n0), n0 = -1;
    } else
      for (e + X > H && (e = H - X), t0 = e; t0 >= 0; t0--) {
        let n0 = !0;
        for (let L = 0; L < X; L++)
          if (e0(n, t0 + L) !== e0(r, L)) {
            n0 = !1;
            break;
          }
        if (n0) return t0;
      }
    return -1;
  }
  i.prototype.includes = function(r, e, s) {
    return this.indexOf(r, e, s) !== -1;
  }, i.prototype.indexOf = function(r, e, s) {
    return D(this, r, e, s, !0);
  }, i.prototype.lastIndexOf = function(r, e, s) {
    return D(this, r, e, s, !1);
  };
  function T(n, r, e, s) {
    e = Number(e) || 0;
    const y = n.length - e;
    s ? (s = Number(s), s > y && (s = y)) : s = y;
    const k = r.length;
    s > k / 2 && (s = k / 2);
    let H;
    for (H = 0; H < s; ++H) {
      const X = parseInt(r.substr(H * 2, 2), 16);
      if (l0(X)) return H;
      n[e + H] = X;
    }
    return H;
  }
  function W(n, r, e, s) {
    return f0(C0(r, n.length - e), n, e, s);
  }
  function _(n, r, e, s) {
    return f0(m0(r), n, e, s);
  }
  function R(n, r, e, s) {
    return f0(F0(r), n, e, s);
  }
  function U(n, r, e, s) {
    return f0(q0(r, n.length - e), n, e, s);
  }
  i.prototype.write = function(r, e, s, y) {
    if (e === void 0)
      y = "utf8", s = this.length, e = 0;
    else if (s === void 0 && typeof e == "string")
      y = e, s = this.length, e = 0;
    else if (isFinite(e))
      e = e >>> 0, isFinite(s) ? (s = s >>> 0, y === void 0 && (y = "utf8")) : (y = s, s = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const k = this.length - e;
    if ((s === void 0 || s > k) && (s = k), r.length > 0 && (s < 0 || e < 0) || e > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    y || (y = "utf8");
    let H = !1;
    for (; ; )
      switch (y) {
        case "hex":
          return T(this, r, e, s);
        case "utf8":
        case "utf-8":
          return W(this, r, e, s);
        case "ascii":
        case "latin1":
        case "binary":
          return _(this, r, e, s);
        case "base64":
          return R(this, r, e, s);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return U(this, r, e, s);
        default:
          if (H) throw new TypeError("Unknown encoding: " + y);
          y = ("" + y).toLowerCase(), H = !0;
      }
  }, i.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function q(n, r, e) {
    return r === 0 && e === n.length ? c.fromByteArray(n) : c.fromByteArray(n.slice(r, e));
  }
  function V(n, r, e) {
    e = Math.min(n.length, e);
    const s = [];
    let y = r;
    for (; y < e; ) {
      const k = n[y];
      let H = null, X = k > 239 ? 4 : k > 223 ? 3 : k > 191 ? 2 : 1;
      if (y + X <= e) {
        let e0, t0, n0, L;
        switch (X) {
          case 1:
            k < 128 && (H = k);
            break;
          case 2:
            e0 = n[y + 1], (e0 & 192) === 128 && (L = (k & 31) << 6 | e0 & 63, L > 127 && (H = L));
            break;
          case 3:
            e0 = n[y + 1], t0 = n[y + 2], (e0 & 192) === 128 && (t0 & 192) === 128 && (L = (k & 15) << 12 | (e0 & 63) << 6 | t0 & 63, L > 2047 && (L < 55296 || L > 57343) && (H = L));
            break;
          case 4:
            e0 = n[y + 1], t0 = n[y + 2], n0 = n[y + 3], (e0 & 192) === 128 && (t0 & 192) === 128 && (n0 & 192) === 128 && (L = (k & 15) << 18 | (e0 & 63) << 12 | (t0 & 63) << 6 | n0 & 63, L > 65535 && L < 1114112 && (H = L));
        }
      }
      H === null ? (H = 65533, X = 1) : H > 65535 && (H -= 65536, s.push(H >>> 10 & 1023 | 55296), H = 56320 | H & 1023), s.push(H), y += X;
    }
    return $(s);
  }
  const M = 4096;
  function $(n) {
    const r = n.length;
    if (r <= M)
      return String.fromCharCode.apply(String, n);
    let e = "", s = 0;
    for (; s < r; )
      e += String.fromCharCode.apply(
        String,
        n.slice(s, s += M)
      );
    return e;
  }
  function J(n, r, e) {
    let s = "";
    e = Math.min(n.length, e);
    for (let y = r; y < e; ++y)
      s += String.fromCharCode(n[y] & 127);
    return s;
  }
  function Y(n, r, e) {
    let s = "";
    e = Math.min(n.length, e);
    for (let y = r; y < e; ++y)
      s += String.fromCharCode(n[y]);
    return s;
  }
  function I(n, r, e) {
    const s = n.length;
    (!r || r < 0) && (r = 0), (!e || e < 0 || e > s) && (e = s);
    let y = "";
    for (let k = r; k < e; ++k)
      y += N0[n[k]];
    return y;
  }
  function j(n, r, e) {
    const s = n.slice(r, e);
    let y = "";
    for (let k = 0; k < s.length - 1; k += 2)
      y += String.fromCharCode(s[k] + s[k + 1] * 256);
    return y;
  }
  i.prototype.slice = function(r, e) {
    const s = this.length;
    r = ~~r, e = e === void 0 ? s : ~~e, r < 0 ? (r += s, r < 0 && (r = 0)) : r > s && (r = s), e < 0 ? (e += s, e < 0 && (e = 0)) : e > s && (e = s), e < r && (e = r);
    const y = this.subarray(r, e);
    return Object.setPrototypeOf(y, i.prototype), y;
  };
  function N(n, r, e) {
    if (n % 1 !== 0 || n < 0) throw new RangeError("offset is not uint");
    if (n + r > e) throw new RangeError("Trying to access beyond buffer length");
  }
  i.prototype.readUintLE = i.prototype.readUIntLE = function(r, e, s) {
    r = r >>> 0, e = e >>> 0, s || N(r, e, this.length);
    let y = this[r], k = 1, H = 0;
    for (; ++H < e && (k *= 256); )
      y += this[r + H] * k;
    return y;
  }, i.prototype.readUintBE = i.prototype.readUIntBE = function(r, e, s) {
    r = r >>> 0, e = e >>> 0, s || N(r, e, this.length);
    let y = this[r + --e], k = 1;
    for (; e > 0 && (k *= 256); )
      y += this[r + --e] * k;
    return y;
  }, i.prototype.readUint8 = i.prototype.readUInt8 = function(r, e) {
    return r = r >>> 0, e || N(r, 1, this.length), this[r];
  }, i.prototype.readUint16LE = i.prototype.readUInt16LE = function(r, e) {
    return r = r >>> 0, e || N(r, 2, this.length), this[r] | this[r + 1] << 8;
  }, i.prototype.readUint16BE = i.prototype.readUInt16BE = function(r, e) {
    return r = r >>> 0, e || N(r, 2, this.length), this[r] << 8 | this[r + 1];
  }, i.prototype.readUint32LE = i.prototype.readUInt32LE = function(r, e) {
    return r = r >>> 0, e || N(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  }, i.prototype.readUint32BE = i.prototype.readUInt32BE = function(r, e) {
    return r = r >>> 0, e || N(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  }, i.prototype.readBigUInt64LE = p0(function(r) {
    r = r >>> 0, c0(r, "offset");
    const e = this[r], s = this[r + 7];
    (e === void 0 || s === void 0) && x0(r, this.length - 8);
    const y = e + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, k = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + s * 2 ** 24;
    return BigInt(y) + (BigInt(k) << BigInt(32));
  }), i.prototype.readBigUInt64BE = p0(function(r) {
    r = r >>> 0, c0(r, "offset");
    const e = this[r], s = this[r + 7];
    (e === void 0 || s === void 0) && x0(r, this.length - 8);
    const y = e * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], k = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + s;
    return (BigInt(y) << BigInt(32)) + BigInt(k);
  }), i.prototype.readIntLE = function(r, e, s) {
    r = r >>> 0, e = e >>> 0, s || N(r, e, this.length);
    let y = this[r], k = 1, H = 0;
    for (; ++H < e && (k *= 256); )
      y += this[r + H] * k;
    return k *= 128, y >= k && (y -= Math.pow(2, 8 * e)), y;
  }, i.prototype.readIntBE = function(r, e, s) {
    r = r >>> 0, e = e >>> 0, s || N(r, e, this.length);
    let y = e, k = 1, H = this[r + --y];
    for (; y > 0 && (k *= 256); )
      H += this[r + --y] * k;
    return k *= 128, H >= k && (H -= Math.pow(2, 8 * e)), H;
  }, i.prototype.readInt8 = function(r, e) {
    return r = r >>> 0, e || N(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  }, i.prototype.readInt16LE = function(r, e) {
    r = r >>> 0, e || N(r, 2, this.length);
    const s = this[r] | this[r + 1] << 8;
    return s & 32768 ? s | 4294901760 : s;
  }, i.prototype.readInt16BE = function(r, e) {
    r = r >>> 0, e || N(r, 2, this.length);
    const s = this[r + 1] | this[r] << 8;
    return s & 32768 ? s | 4294901760 : s;
  }, i.prototype.readInt32LE = function(r, e) {
    return r = r >>> 0, e || N(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  }, i.prototype.readInt32BE = function(r, e) {
    return r = r >>> 0, e || N(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  }, i.prototype.readBigInt64LE = p0(function(r) {
    r = r >>> 0, c0(r, "offset");
    const e = this[r], s = this[r + 7];
    (e === void 0 || s === void 0) && x0(r, this.length - 8);
    const y = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (s << 24);
    return (BigInt(y) << BigInt(32)) + BigInt(e + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  }), i.prototype.readBigInt64BE = p0(function(r) {
    r = r >>> 0, c0(r, "offset");
    const e = this[r], s = this[r + 7];
    (e === void 0 || s === void 0) && x0(r, this.length - 8);
    const y = (e << 24) + // Overflow
    this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(y) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + s);
  }), i.prototype.readFloatLE = function(r, e) {
    return r = r >>> 0, e || N(r, 4, this.length), o.read(this, r, !0, 23, 4);
  }, i.prototype.readFloatBE = function(r, e) {
    return r = r >>> 0, e || N(r, 4, this.length), o.read(this, r, !1, 23, 4);
  }, i.prototype.readDoubleLE = function(r, e) {
    return r = r >>> 0, e || N(r, 8, this.length), o.read(this, r, !0, 52, 8);
  }, i.prototype.readDoubleBE = function(r, e) {
    return r = r >>> 0, e || N(r, 8, this.length), o.read(this, r, !1, 52, 8);
  };
  function P(n, r, e, s, y, k) {
    if (!i.isBuffer(n)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > y || r < k) throw new RangeError('"value" argument is out of bounds');
    if (e + s > n.length) throw new RangeError("Index out of range");
  }
  i.prototype.writeUintLE = i.prototype.writeUIntLE = function(r, e, s, y) {
    if (r = +r, e = e >>> 0, s = s >>> 0, !y) {
      const X = Math.pow(2, 8 * s) - 1;
      P(this, r, e, s, X, 0);
    }
    let k = 1, H = 0;
    for (this[e] = r & 255; ++H < s && (k *= 256); )
      this[e + H] = r / k & 255;
    return e + s;
  }, i.prototype.writeUintBE = i.prototype.writeUIntBE = function(r, e, s, y) {
    if (r = +r, e = e >>> 0, s = s >>> 0, !y) {
      const X = Math.pow(2, 8 * s) - 1;
      P(this, r, e, s, X, 0);
    }
    let k = s - 1, H = 1;
    for (this[e + k] = r & 255; --k >= 0 && (H *= 256); )
      this[e + k] = r / H & 255;
    return e + s;
  }, i.prototype.writeUint8 = i.prototype.writeUInt8 = function(r, e, s) {
    return r = +r, e = e >>> 0, s || P(this, r, e, 1, 255, 0), this[e] = r & 255, e + 1;
  }, i.prototype.writeUint16LE = i.prototype.writeUInt16LE = function(r, e, s) {
    return r = +r, e = e >>> 0, s || P(this, r, e, 2, 65535, 0), this[e] = r & 255, this[e + 1] = r >>> 8, e + 2;
  }, i.prototype.writeUint16BE = i.prototype.writeUInt16BE = function(r, e, s) {
    return r = +r, e = e >>> 0, s || P(this, r, e, 2, 65535, 0), this[e] = r >>> 8, this[e + 1] = r & 255, e + 2;
  }, i.prototype.writeUint32LE = i.prototype.writeUInt32LE = function(r, e, s) {
    return r = +r, e = e >>> 0, s || P(this, r, e, 4, 4294967295, 0), this[e + 3] = r >>> 24, this[e + 2] = r >>> 16, this[e + 1] = r >>> 8, this[e] = r & 255, e + 4;
  }, i.prototype.writeUint32BE = i.prototype.writeUInt32BE = function(r, e, s) {
    return r = +r, e = e >>> 0, s || P(this, r, e, 4, 4294967295, 0), this[e] = r >>> 24, this[e + 1] = r >>> 16, this[e + 2] = r >>> 8, this[e + 3] = r & 255, e + 4;
  };
  function O(n, r, e, s, y) {
    A0(r, s, y, n, e, 7);
    let k = Number(r & BigInt(4294967295));
    n[e++] = k, k = k >> 8, n[e++] = k, k = k >> 8, n[e++] = k, k = k >> 8, n[e++] = k;
    let H = Number(r >> BigInt(32) & BigInt(4294967295));
    return n[e++] = H, H = H >> 8, n[e++] = H, H = H >> 8, n[e++] = H, H = H >> 8, n[e++] = H, e;
  }
  function z(n, r, e, s, y) {
    A0(r, s, y, n, e, 7);
    let k = Number(r & BigInt(4294967295));
    n[e + 7] = k, k = k >> 8, n[e + 6] = k, k = k >> 8, n[e + 5] = k, k = k >> 8, n[e + 4] = k;
    let H = Number(r >> BigInt(32) & BigInt(4294967295));
    return n[e + 3] = H, H = H >> 8, n[e + 2] = H, H = H >> 8, n[e + 1] = H, H = H >> 8, n[e] = H, e + 8;
  }
  i.prototype.writeBigUInt64LE = p0(function(r, e = 0) {
    return O(this, r, e, BigInt(0), BigInt("0xffffffffffffffff"));
  }), i.prototype.writeBigUInt64BE = p0(function(r, e = 0) {
    return z(this, r, e, BigInt(0), BigInt("0xffffffffffffffff"));
  }), i.prototype.writeIntLE = function(r, e, s, y) {
    if (r = +r, e = e >>> 0, !y) {
      const e0 = Math.pow(2, 8 * s - 1);
      P(this, r, e, s, e0 - 1, -e0);
    }
    let k = 0, H = 1, X = 0;
    for (this[e] = r & 255; ++k < s && (H *= 256); )
      r < 0 && X === 0 && this[e + k - 1] !== 0 && (X = 1), this[e + k] = (r / H >> 0) - X & 255;
    return e + s;
  }, i.prototype.writeIntBE = function(r, e, s, y) {
    if (r = +r, e = e >>> 0, !y) {
      const e0 = Math.pow(2, 8 * s - 1);
      P(this, r, e, s, e0 - 1, -e0);
    }
    let k = s - 1, H = 1, X = 0;
    for (this[e + k] = r & 255; --k >= 0 && (H *= 256); )
      r < 0 && X === 0 && this[e + k + 1] !== 0 && (X = 1), this[e + k] = (r / H >> 0) - X & 255;
    return e + s;
  }, i.prototype.writeInt8 = function(r, e, s) {
    return r = +r, e = e >>> 0, s || P(this, r, e, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[e] = r & 255, e + 1;
  }, i.prototype.writeInt16LE = function(r, e, s) {
    return r = +r, e = e >>> 0, s || P(this, r, e, 2, 32767, -32768), this[e] = r & 255, this[e + 1] = r >>> 8, e + 2;
  }, i.prototype.writeInt16BE = function(r, e, s) {
    return r = +r, e = e >>> 0, s || P(this, r, e, 2, 32767, -32768), this[e] = r >>> 8, this[e + 1] = r & 255, e + 2;
  }, i.prototype.writeInt32LE = function(r, e, s) {
    return r = +r, e = e >>> 0, s || P(this, r, e, 4, 2147483647, -2147483648), this[e] = r & 255, this[e + 1] = r >>> 8, this[e + 2] = r >>> 16, this[e + 3] = r >>> 24, e + 4;
  }, i.prototype.writeInt32BE = function(r, e, s) {
    return r = +r, e = e >>> 0, s || P(this, r, e, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[e] = r >>> 24, this[e + 1] = r >>> 16, this[e + 2] = r >>> 8, this[e + 3] = r & 255, e + 4;
  }, i.prototype.writeBigInt64LE = p0(function(r, e = 0) {
    return O(this, r, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), i.prototype.writeBigInt64BE = p0(function(r, e = 0) {
    return z(this, r, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function r0(n, r, e, s, y, k) {
    if (e + s > n.length) throw new RangeError("Index out of range");
    if (e < 0) throw new RangeError("Index out of range");
  }
  function Q(n, r, e, s, y) {
    return r = +r, e = e >>> 0, y || r0(n, r, e, 4), o.write(n, r, e, s, 23, 4), e + 4;
  }
  i.prototype.writeFloatLE = function(r, e, s) {
    return Q(this, r, e, !0, s);
  }, i.prototype.writeFloatBE = function(r, e, s) {
    return Q(this, r, e, !1, s);
  };
  function o0(n, r, e, s, y) {
    return r = +r, e = e >>> 0, y || r0(n, r, e, 8), o.write(n, r, e, s, 52, 8), e + 8;
  }
  i.prototype.writeDoubleLE = function(r, e, s) {
    return o0(this, r, e, !0, s);
  }, i.prototype.writeDoubleBE = function(r, e, s) {
    return o0(this, r, e, !1, s);
  }, i.prototype.copy = function(r, e, s, y) {
    if (!i.isBuffer(r)) throw new TypeError("argument should be a Buffer");
    if (s || (s = 0), !y && y !== 0 && (y = this.length), e >= r.length && (e = r.length), e || (e = 0), y > 0 && y < s && (y = s), y === s || r.length === 0 || this.length === 0) return 0;
    if (e < 0)
      throw new RangeError("targetStart out of bounds");
    if (s < 0 || s >= this.length) throw new RangeError("Index out of range");
    if (y < 0) throw new RangeError("sourceEnd out of bounds");
    y > this.length && (y = this.length), r.length - e < y - s && (y = r.length - e + s);
    const k = y - s;
    return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(e, s, y) : Uint8Array.prototype.set.call(
      r,
      this.subarray(s, y),
      e
    ), k;
  }, i.prototype.fill = function(r, e, s, y) {
    if (typeof r == "string") {
      if (typeof e == "string" ? (y = e, e = 0, s = this.length) : typeof s == "string" && (y = s, s = this.length), y !== void 0 && typeof y != "string")
        throw new TypeError("encoding must be a string");
      if (typeof y == "string" && !i.isEncoding(y))
        throw new TypeError("Unknown encoding: " + y);
      if (r.length === 1) {
        const H = r.charCodeAt(0);
        (y === "utf8" && H < 128 || y === "latin1") && (r = H);
      }
    } else typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (e < 0 || this.length < e || this.length < s)
      throw new RangeError("Out of range index");
    if (s <= e)
      return this;
    e = e >>> 0, s = s === void 0 ? this.length : s >>> 0, r || (r = 0);
    let k;
    if (typeof r == "number")
      for (k = e; k < s; ++k)
        this[k] = r;
    else {
      const H = i.isBuffer(r) ? r : i.from(r, y), X = H.length;
      if (X === 0)
        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (k = 0; k < s - e; ++k)
        this[k + e] = H[k % X];
    }
    return this;
  };
  const G = {};
  function d0(n, r, e) {
    G[n] = class extends e {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: r.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${n}]`, this.stack, delete this.name;
      }
      get code() {
        return n;
      }
      set code(y) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: y,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${n}]: ${this.message}`;
      }
    };
  }
  d0(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(n) {
      return n ? `${n} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), d0(
    "ERR_INVALID_ARG_TYPE",
    function(n, r) {
      return `The "${n}" argument must be of type number. Received type ${typeof r}`;
    },
    TypeError
  ), d0(
    "ERR_OUT_OF_RANGE",
    function(n, r, e) {
      let s = `The value of "${n}" is out of range.`, y = e;
      return Number.isInteger(e) && Math.abs(e) > 2 ** 32 ? y = v0(String(e)) : typeof e == "bigint" && (y = String(e), (e > BigInt(2) ** BigInt(32) || e < -(BigInt(2) ** BigInt(32))) && (y = v0(y)), y += "n"), s += ` It must be ${r}. Received ${y}`, s;
    },
    RangeError
  );
  function v0(n) {
    let r = "", e = n.length;
    const s = n[0] === "-" ? 1 : 0;
    for (; e >= s + 4; e -= 3)
      r = `_${n.slice(e - 3, e)}${r}`;
    return `${n.slice(0, e)}${r}`;
  }
  function U0(n, r, e) {
    c0(r, "offset"), (n[r] === void 0 || n[r + e] === void 0) && x0(r, n.length - (e + 1));
  }
  function A0(n, r, e, s, y, k) {
    if (n > e || n < r) {
      const H = typeof r == "bigint" ? "n" : "";
      let X;
      throw r === 0 || r === BigInt(0) ? X = `>= 0${H} and < 2${H} ** ${(k + 1) * 8}${H}` : X = `>= -(2${H} ** ${(k + 1) * 8 - 1}${H}) and < 2 ** ${(k + 1) * 8 - 1}${H}`, new G.ERR_OUT_OF_RANGE("value", X, n);
    }
    U0(s, y, k);
  }
  function c0(n, r) {
    if (typeof n != "number")
      throw new G.ERR_INVALID_ARG_TYPE(r, "number", n);
  }
  function x0(n, r, e) {
    throw Math.floor(n) !== n ? (c0(n, e), new G.ERR_OUT_OF_RANGE("offset", "an integer", n)) : r < 0 ? new G.ERR_BUFFER_OUT_OF_BOUNDS() : new G.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${r}`,
      n
    );
  }
  const S0 = /[^+/0-9A-Za-z-_]/g;
  function _0(n) {
    if (n = n.split("=")[0], n = n.trim().replace(S0, ""), n.length < 2) return "";
    for (; n.length % 4 !== 0; )
      n = n + "=";
    return n;
  }
  function C0(n, r) {
    r = r || 1 / 0;
    let e;
    const s = n.length;
    let y = null;
    const k = [];
    for (let H = 0; H < s; ++H) {
      if (e = n.charCodeAt(H), e > 55295 && e < 57344) {
        if (!y) {
          if (e > 56319) {
            (r -= 3) > -1 && k.push(239, 191, 189);
            continue;
          } else if (H + 1 === s) {
            (r -= 3) > -1 && k.push(239, 191, 189);
            continue;
          }
          y = e;
          continue;
        }
        if (e < 56320) {
          (r -= 3) > -1 && k.push(239, 191, 189), y = e;
          continue;
        }
        e = (y - 55296 << 10 | e - 56320) + 65536;
      } else y && (r -= 3) > -1 && k.push(239, 191, 189);
      if (y = null, e < 128) {
        if ((r -= 1) < 0) break;
        k.push(e);
      } else if (e < 2048) {
        if ((r -= 2) < 0) break;
        k.push(
          e >> 6 | 192,
          e & 63 | 128
        );
      } else if (e < 65536) {
        if ((r -= 3) < 0) break;
        k.push(
          e >> 12 | 224,
          e >> 6 & 63 | 128,
          e & 63 | 128
        );
      } else if (e < 1114112) {
        if ((r -= 4) < 0) break;
        k.push(
          e >> 18 | 240,
          e >> 12 & 63 | 128,
          e >> 6 & 63 | 128,
          e & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return k;
  }
  function m0(n) {
    const r = [];
    for (let e = 0; e < n.length; ++e)
      r.push(n.charCodeAt(e) & 255);
    return r;
  }
  function q0(n, r) {
    let e, s, y;
    const k = [];
    for (let H = 0; H < n.length && !((r -= 2) < 0); ++H)
      e = n.charCodeAt(H), s = e >> 8, y = e % 256, k.push(y), k.push(s);
    return k;
  }
  function F0(n) {
    return c.toByteArray(_0(n));
  }
  function f0(n, r, e, s) {
    let y;
    for (y = 0; y < s && !(y + e >= r.length || y >= n.length); ++y)
      r[y + e] = n[y];
    return y;
  }
  function i0(n, r) {
    return n instanceof r || n != null && n.constructor != null && n.constructor.name != null && n.constructor.name === r.name;
  }
  function l0(n) {
    return n !== n;
  }
  const N0 = function() {
    const n = "0123456789abcdef", r = new Array(256);
    for (let e = 0; e < 16; ++e) {
      const s = e * 16;
      for (let y = 0; y < 16; ++y)
        r[s + y] = n[e] + n[y];
    }
    return r;
  }();
  function p0(n) {
    return typeof BigInt > "u" ? y0 : n;
  }
  function y0() {
    throw new Error("BigInt not supported");
  }
})(D0);
var kt = { exports: {} };
function le(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var X0 = { exports: {} };
const he = {}, de = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: he
}, Symbol.toStringTag, { value: "Module" })), pe = /* @__PURE__ */ ne(de);
var Vr;
function Z() {
  return Vr || (Vr = 1, function(t, c) {
    (function(o, a) {
      t.exports = a();
    })(K, function() {
      var o = o || function(a, h) {
        var d;
        if (typeof window < "u" && window.crypto && (d = window.crypto), typeof self < "u" && self.crypto && (d = self.crypto), typeof globalThis < "u" && globalThis.crypto && (d = globalThis.crypto), !d && typeof window < "u" && window.msCrypto && (d = window.msCrypto), !d && typeof globalThis < "u" && globalThis.crypto && (d = globalThis.crypto), !d && typeof le == "function")
          try {
            d = pe;
          } catch {
          }
        var g = function() {
          if (d) {
            if (typeof d.getRandomValues == "function")
              try {
                return d.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof d.randomBytes == "function")
              try {
                return d.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, i = Object.create || /* @__PURE__ */ function() {
          function l() {
          }
          return function(p) {
            var E;
            return l.prototype = p, E = new l(), l.prototype = null, E;
          };
        }(), C = {}, x = C.lib = {}, f = x.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(l) {
              var p = i(this);
              return l && p.mixIn(l), (!p.hasOwnProperty("init") || this.init === p.init) && (p.init = function() {
                p.$super.init.apply(this, arguments);
              }), p.init.prototype = p, p.$super = this, p;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var l = this.extend();
              return l.init.apply(l, arguments), l;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(l) {
              for (var p in l)
                l.hasOwnProperty(p) && (this[p] = l[p]);
              l.hasOwnProperty("toString") && (this.toString = l.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), w = x.WordArray = f.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(l, p) {
            l = this.words = l || [], p != h ? this.sigBytes = p : this.sigBytes = l.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(l) {
            return (l || B).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(l) {
            var p = this.words, E = l.words, b = this.sigBytes, D = l.sigBytes;
            if (this.clamp(), b % 4)
              for (var S = 0; S < D; S++) {
                var T = E[S >>> 2] >>> 24 - S % 4 * 8 & 255;
                p[b + S >>> 2] |= T << 24 - (b + S) % 4 * 8;
              }
            else
              for (var W = 0; W < D; W += 4)
                p[b + W >>> 2] = E[W >>> 2];
            return this.sigBytes += D, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var l = this.words, p = this.sigBytes;
            l[p >>> 2] &= 4294967295 << 32 - p % 4 * 8, l.length = a.ceil(p / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var l = f.clone.call(this);
            return l.words = this.words.slice(0), l;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(l) {
            for (var p = [], E = 0; E < l; E += 4)
              p.push(g());
            return new w.init(p, l);
          }
        }), u = C.enc = {}, B = u.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(l) {
            for (var p = l.words, E = l.sigBytes, b = [], D = 0; D < E; D++) {
              var S = p[D >>> 2] >>> 24 - D % 4 * 8 & 255;
              b.push((S >>> 4).toString(16)), b.push((S & 15).toString(16));
            }
            return b.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(l) {
            for (var p = l.length, E = [], b = 0; b < p; b += 2)
              E[b >>> 3] |= parseInt(l.substr(b, 2), 16) << 24 - b % 8 * 4;
            return new w.init(E, p / 2);
          }
        }, v = u.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(l) {
            for (var p = l.words, E = l.sigBytes, b = [], D = 0; D < E; D++) {
              var S = p[D >>> 2] >>> 24 - D % 4 * 8 & 255;
              b.push(String.fromCharCode(S));
            }
            return b.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(l) {
            for (var p = l.length, E = [], b = 0; b < p; b++)
              E[b >>> 2] |= (l.charCodeAt(b) & 255) << 24 - b % 4 * 8;
            return new w.init(E, p);
          }
        }, F = u.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(l) {
            try {
              return decodeURIComponent(escape(v.stringify(l)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(l) {
            return v.parse(unescape(encodeURIComponent(l)));
          }
        }, A = x.BufferedBlockAlgorithm = f.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new w.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(l) {
            typeof l == "string" && (l = F.parse(l)), this._data.concat(l), this._nDataBytes += l.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(l) {
            var p, E = this._data, b = E.words, D = E.sigBytes, S = this.blockSize, T = S * 4, W = D / T;
            l ? W = a.ceil(W) : W = a.max((W | 0) - this._minBufferSize, 0);
            var _ = W * S, R = a.min(_ * 4, D);
            if (_) {
              for (var U = 0; U < _; U += S)
                this._doProcessBlock(b, U);
              p = b.splice(0, _), E.sigBytes -= R;
            }
            return new w.init(p, R);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var l = f.clone.call(this);
            return l._data = this._data.clone(), l;
          },
          _minBufferSize: 0
        });
        x.Hasher = A.extend({
          /**
           * Configuration options.
           */
          cfg: f.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(l) {
            this.cfg = this.cfg.extend(l), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            A.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(l) {
            return this._append(l), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(l) {
            l && this._append(l);
            var p = this._doFinalize();
            return p;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(l) {
            return function(p, E) {
              return new l.init(E).finalize(p);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(l) {
            return function(p, E) {
              return new m.HMAC.init(l, E).finalize(p);
            };
          }
        });
        var m = C.algo = {};
        return C;
      }(Math);
      return o;
    });
  }(X0)), X0.exports;
}
var K0 = { exports: {} }, Mr;
function M0() {
  return Mr || (Mr = 1, function(t, c) {
    (function(o, a) {
      t.exports = a(Z());
    })(K, function(o) {
      return function(a) {
        var h = o, d = h.lib, g = d.Base, i = d.WordArray, C = h.x64 = {};
        C.Word = g.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(x, f) {
            this.high = x, this.low = f;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        }), C.WordArray = g.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(x, f) {
            x = this.words = x || [], f != a ? this.sigBytes = f : this.sigBytes = x.length * 8;
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            for (var x = this.words, f = x.length, w = [], u = 0; u < f; u++) {
              var B = x[u];
              w.push(B.high), w.push(B.low);
            }
            return i.create(w, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            for (var x = g.clone.call(this), f = x.words = this.words.slice(0), w = f.length, u = 0; u < w; u++)
              f[u] = f[u].clone();
            return x;
          }
        });
      }(), o;
    });
  }(K0)), K0.exports;
}
var Z0 = { exports: {} }, Gr;
function Be() {
  return Gr || (Gr = 1, function(t, c) {
    (function(o, a) {
      t.exports = a(Z());
    })(K, function(o) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var a = o, h = a.lib, d = h.WordArray, g = d.init, i = d.init = function(C) {
            if (C instanceof ArrayBuffer && (C = new Uint8Array(C)), (C instanceof Int8Array || typeof Uint8ClampedArray < "u" && C instanceof Uint8ClampedArray || C instanceof Int16Array || C instanceof Uint16Array || C instanceof Int32Array || C instanceof Uint32Array || C instanceof Float32Array || C instanceof Float64Array) && (C = new Uint8Array(C.buffer, C.byteOffset, C.byteLength)), C instanceof Uint8Array) {
              for (var x = C.byteLength, f = [], w = 0; w < x; w++)
                f[w >>> 2] |= C[w] << 24 - w % 4 * 8;
              g.call(this, f, x);
            } else
              g.apply(this, arguments);
          };
          i.prototype = d;
        }
      }(), o.lib.WordArray;
    });
  }(Z0)), Z0.exports;
}
var Y0 = { exports: {} }, $r;
function ve() {
  return $r || ($r = 1, function(t, c) {
    (function(o, a) {
      t.exports = a(Z());
    })(K, function(o) {
      return function() {
        var a = o, h = a.lib, d = h.WordArray, g = a.enc;
        g.Utf16 = g.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(C) {
            for (var x = C.words, f = C.sigBytes, w = [], u = 0; u < f; u += 2) {
              var B = x[u >>> 2] >>> 16 - u % 4 * 8 & 65535;
              w.push(String.fromCharCode(B));
            }
            return w.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(C) {
            for (var x = C.length, f = [], w = 0; w < x; w++)
              f[w >>> 1] |= C.charCodeAt(w) << 16 - w % 2 * 16;
            return d.create(f, x * 2);
          }
        }, g.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(C) {
            for (var x = C.words, f = C.sigBytes, w = [], u = 0; u < f; u += 2) {
              var B = i(x[u >>> 2] >>> 16 - u % 4 * 8 & 65535);
              w.push(String.fromCharCode(B));
            }
            return w.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(C) {
            for (var x = C.length, f = [], w = 0; w < x; w++)
              f[w >>> 1] |= i(C.charCodeAt(w) << 16 - w % 2 * 16);
            return d.create(f, x * 2);
          }
        };
        function i(C) {
          return C << 8 & 4278255360 | C >>> 8 & 16711935;
        }
      }(), o.enc.Utf16;
    });
  }(Y0)), Y0.exports;
}
var j0 = { exports: {} }, Xr;
function k0() {
  return Xr || (Xr = 1, function(t, c) {
    (function(o, a) {
      t.exports = a(Z());
    })(K, function(o) {
      return function() {
        var a = o, h = a.lib, d = h.WordArray, g = a.enc;
        g.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(C) {
            var x = C.words, f = C.sigBytes, w = this._map;
            C.clamp();
            for (var u = [], B = 0; B < f; B += 3)
              for (var v = x[B >>> 2] >>> 24 - B % 4 * 8 & 255, F = x[B + 1 >>> 2] >>> 24 - (B + 1) % 4 * 8 & 255, A = x[B + 2 >>> 2] >>> 24 - (B + 2) % 4 * 8 & 255, m = v << 16 | F << 8 | A, l = 0; l < 4 && B + l * 0.75 < f; l++)
                u.push(w.charAt(m >>> 6 * (3 - l) & 63));
            var p = w.charAt(64);
            if (p)
              for (; u.length % 4; )
                u.push(p);
            return u.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(C) {
            var x = C.length, f = this._map, w = this._reverseMap;
            if (!w) {
              w = this._reverseMap = [];
              for (var u = 0; u < f.length; u++)
                w[f.charCodeAt(u)] = u;
            }
            var B = f.charAt(64);
            if (B) {
              var v = C.indexOf(B);
              v !== -1 && (x = v);
            }
            return i(C, x, w);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function i(C, x, f) {
          for (var w = [], u = 0, B = 0; B < x; B++)
            if (B % 4) {
              var v = f[C.charCodeAt(B - 1)] << B % 4 * 2, F = f[C.charCodeAt(B)] >>> 6 - B % 4 * 2, A = v | F;
              w[u >>> 2] |= A << 24 - u % 4 * 8, u++;
            }
          return d.create(w, u);
        }
      }(), o.enc.Base64;
    });
  }(j0)), j0.exports;
}
var Q0 = { exports: {} }, Kr;
function Ee() {
  return Kr || (Kr = 1, function(t, c) {
    (function(o, a) {
      t.exports = a(Z());
    })(K, function(o) {
      return function() {
        var a = o, h = a.lib, d = h.WordArray, g = a.enc;
        g.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(C, x) {
            x === void 0 && (x = !0);
            var f = C.words, w = C.sigBytes, u = x ? this._safe_map : this._map;
            C.clamp();
            for (var B = [], v = 0; v < w; v += 3)
              for (var F = f[v >>> 2] >>> 24 - v % 4 * 8 & 255, A = f[v + 1 >>> 2] >>> 24 - (v + 1) % 4 * 8 & 255, m = f[v + 2 >>> 2] >>> 24 - (v + 2) % 4 * 8 & 255, l = F << 16 | A << 8 | m, p = 0; p < 4 && v + p * 0.75 < w; p++)
                B.push(u.charAt(l >>> 6 * (3 - p) & 63));
            var E = u.charAt(64);
            if (E)
              for (; B.length % 4; )
                B.push(E);
            return B.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(C, x) {
            x === void 0 && (x = !0);
            var f = C.length, w = x ? this._safe_map : this._map, u = this._reverseMap;
            if (!u) {
              u = this._reverseMap = [];
              for (var B = 0; B < w.length; B++)
                u[w.charCodeAt(B)] = B;
            }
            var v = w.charAt(64);
            if (v) {
              var F = C.indexOf(v);
              F !== -1 && (f = F);
            }
            return i(C, f, u);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function i(C, x, f) {
          for (var w = [], u = 0, B = 0; B < x; B++)
            if (B % 4) {
              var v = f[C.charCodeAt(B - 1)] << B % 4 * 2, F = f[C.charCodeAt(B)] >>> 6 - B % 4 * 2, A = v | F;
              w[u >>> 2] |= A << 24 - u % 4 * 8, u++;
            }
          return d.create(w, u);
        }
      }(), o.enc.Base64url;
    });
  }(Q0)), Q0.exports;
}
var J0 = { exports: {} }, Zr;
function R0() {
  return Zr || (Zr = 1, function(t, c) {
    (function(o, a) {
      t.exports = a(Z());
    })(K, function(o) {
      return function(a) {
        var h = o, d = h.lib, g = d.WordArray, i = d.Hasher, C = h.algo, x = [];
        (function() {
          for (var F = 0; F < 64; F++)
            x[F] = a.abs(a.sin(F + 1)) * 4294967296 | 0;
        })();
        var f = C.MD5 = i.extend({
          _doReset: function() {
            this._hash = new g.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(F, A) {
            for (var m = 0; m < 16; m++) {
              var l = A + m, p = F[l];
              F[l] = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360;
            }
            var E = this._hash.words, b = F[A + 0], D = F[A + 1], S = F[A + 2], T = F[A + 3], W = F[A + 4], _ = F[A + 5], R = F[A + 6], U = F[A + 7], q = F[A + 8], V = F[A + 9], M = F[A + 10], $ = F[A + 11], J = F[A + 12], Y = F[A + 13], I = F[A + 14], j = F[A + 15], N = E[0], P = E[1], O = E[2], z = E[3];
            N = w(N, P, O, z, b, 7, x[0]), z = w(z, N, P, O, D, 12, x[1]), O = w(O, z, N, P, S, 17, x[2]), P = w(P, O, z, N, T, 22, x[3]), N = w(N, P, O, z, W, 7, x[4]), z = w(z, N, P, O, _, 12, x[5]), O = w(O, z, N, P, R, 17, x[6]), P = w(P, O, z, N, U, 22, x[7]), N = w(N, P, O, z, q, 7, x[8]), z = w(z, N, P, O, V, 12, x[9]), O = w(O, z, N, P, M, 17, x[10]), P = w(P, O, z, N, $, 22, x[11]), N = w(N, P, O, z, J, 7, x[12]), z = w(z, N, P, O, Y, 12, x[13]), O = w(O, z, N, P, I, 17, x[14]), P = w(P, O, z, N, j, 22, x[15]), N = u(N, P, O, z, D, 5, x[16]), z = u(z, N, P, O, R, 9, x[17]), O = u(O, z, N, P, $, 14, x[18]), P = u(P, O, z, N, b, 20, x[19]), N = u(N, P, O, z, _, 5, x[20]), z = u(z, N, P, O, M, 9, x[21]), O = u(O, z, N, P, j, 14, x[22]), P = u(P, O, z, N, W, 20, x[23]), N = u(N, P, O, z, V, 5, x[24]), z = u(z, N, P, O, I, 9, x[25]), O = u(O, z, N, P, T, 14, x[26]), P = u(P, O, z, N, q, 20, x[27]), N = u(N, P, O, z, Y, 5, x[28]), z = u(z, N, P, O, S, 9, x[29]), O = u(O, z, N, P, U, 14, x[30]), P = u(P, O, z, N, J, 20, x[31]), N = B(N, P, O, z, _, 4, x[32]), z = B(z, N, P, O, q, 11, x[33]), O = B(O, z, N, P, $, 16, x[34]), P = B(P, O, z, N, I, 23, x[35]), N = B(N, P, O, z, D, 4, x[36]), z = B(z, N, P, O, W, 11, x[37]), O = B(O, z, N, P, U, 16, x[38]), P = B(P, O, z, N, M, 23, x[39]), N = B(N, P, O, z, Y, 4, x[40]), z = B(z, N, P, O, b, 11, x[41]), O = B(O, z, N, P, T, 16, x[42]), P = B(P, O, z, N, R, 23, x[43]), N = B(N, P, O, z, V, 4, x[44]), z = B(z, N, P, O, J, 11, x[45]), O = B(O, z, N, P, j, 16, x[46]), P = B(P, O, z, N, S, 23, x[47]), N = v(N, P, O, z, b, 6, x[48]), z = v(z, N, P, O, U, 10, x[49]), O = v(O, z, N, P, I, 15, x[50]), P = v(P, O, z, N, _, 21, x[51]), N = v(N, P, O, z, J, 6, x[52]), z = v(z, N, P, O, T, 10, x[53]), O = v(O, z, N, P, M, 15, x[54]), P = v(P, O, z, N, D, 21, x[55]), N = v(N, P, O, z, q, 6, x[56]), z = v(z, N, P, O, j, 10, x[57]), O = v(O, z, N, P, R, 15, x[58]), P = v(P, O, z, N, Y, 21, x[59]), N = v(N, P, O, z, W, 6, x[60]), z = v(z, N, P, O, $, 10, x[61]), O = v(O, z, N, P, S, 15, x[62]), P = v(P, O, z, N, V, 21, x[63]), E[0] = E[0] + N | 0, E[1] = E[1] + P | 0, E[2] = E[2] + O | 0, E[3] = E[3] + z | 0;
          },
          _doFinalize: function() {
            var F = this._data, A = F.words, m = this._nDataBytes * 8, l = F.sigBytes * 8;
            A[l >>> 5] |= 128 << 24 - l % 32;
            var p = a.floor(m / 4294967296), E = m;
            A[(l + 64 >>> 9 << 4) + 15] = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360, A[(l + 64 >>> 9 << 4) + 14] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, F.sigBytes = (A.length + 1) * 4, this._process();
            for (var b = this._hash, D = b.words, S = 0; S < 4; S++) {
              var T = D[S];
              D[S] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360;
            }
            return b;
          },
          clone: function() {
            var F = i.clone.call(this);
            return F._hash = this._hash.clone(), F;
          }
        });
        function w(F, A, m, l, p, E, b) {
          var D = F + (A & m | ~A & l) + p + b;
          return (D << E | D >>> 32 - E) + A;
        }
        function u(F, A, m, l, p, E, b) {
          var D = F + (A & l | m & ~l) + p + b;
          return (D << E | D >>> 32 - E) + A;
        }
        function B(F, A, m, l, p, E, b) {
          var D = F + (A ^ m ^ l) + p + b;
          return (D << E | D >>> 32 - E) + A;
        }
        function v(F, A, m, l, p, E, b) {
          var D = F + (m ^ (A | ~l)) + p + b;
          return (D << E | D >>> 32 - E) + A;
        }
        h.MD5 = i._createHelper(f), h.HmacMD5 = i._createHmacHelper(f);
      }(Math), o.MD5;
    });
  }(J0)), J0.exports;
}
var I0 = { exports: {} }, Yr;
function Rt() {
  return Yr || (Yr = 1, function(t, c) {
    (function(o, a) {
      t.exports = a(Z());
    })(K, function(o) {
      return function() {
        var a = o, h = a.lib, d = h.WordArray, g = h.Hasher, i = a.algo, C = [], x = i.SHA1 = g.extend({
          _doReset: function() {
            this._hash = new d.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(f, w) {
            for (var u = this._hash.words, B = u[0], v = u[1], F = u[2], A = u[3], m = u[4], l = 0; l < 80; l++) {
              if (l < 16)
                C[l] = f[w + l] | 0;
              else {
                var p = C[l - 3] ^ C[l - 8] ^ C[l - 14] ^ C[l - 16];
                C[l] = p << 1 | p >>> 31;
              }
              var E = (B << 5 | B >>> 27) + m + C[l];
              l < 20 ? E += (v & F | ~v & A) + 1518500249 : l < 40 ? E += (v ^ F ^ A) + 1859775393 : l < 60 ? E += (v & F | v & A | F & A) - 1894007588 : E += (v ^ F ^ A) - 899497514, m = A, A = F, F = v << 30 | v >>> 2, v = B, B = E;
            }
            u[0] = u[0] + B | 0, u[1] = u[1] + v | 0, u[2] = u[2] + F | 0, u[3] = u[3] + A | 0, u[4] = u[4] + m | 0;
          },
          _doFinalize: function() {
            var f = this._data, w = f.words, u = this._nDataBytes * 8, B = f.sigBytes * 8;
            return w[B >>> 5] |= 128 << 24 - B % 32, w[(B + 64 >>> 9 << 4) + 14] = Math.floor(u / 4294967296), w[(B + 64 >>> 9 << 4) + 15] = u, f.sigBytes = w.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var f = g.clone.call(this);
            return f._hash = this._hash.clone(), f;
          }
        });
        a.SHA1 = g._createHelper(x), a.HmacSHA1 = g._createHmacHelper(x);
      }(), o.SHA1;
    });
  }(I0)), I0.exports;
}
var L0 = { exports: {} }, jr;
function Tr() {
  return jr || (jr = 1, function(t, c) {
    (function(o, a) {
      t.exports = a(Z());
    })(K, function(o) {
      return function(a) {
        var h = o, d = h.lib, g = d.WordArray, i = d.Hasher, C = h.algo, x = [], f = [];
        (function() {
          function B(m) {
            for (var l = a.sqrt(m), p = 2; p <= l; p++)
              if (!(m % p))
                return !1;
            return !0;
          }
          function v(m) {
            return (m - (m | 0)) * 4294967296 | 0;
          }
          for (var F = 2, A = 0; A < 64; )
            B(F) && (A < 8 && (x[A] = v(a.pow(F, 1 / 2))), f[A] = v(a.pow(F, 1 / 3)), A++), F++;
        })();
        var w = [], u = C.SHA256 = i.extend({
          _doReset: function() {
            this._hash = new g.init(x.slice(0));
          },
          _doProcessBlock: function(B, v) {
            for (var F = this._hash.words, A = F[0], m = F[1], l = F[2], p = F[3], E = F[4], b = F[5], D = F[6], S = F[7], T = 0; T < 64; T++) {
              if (T < 16)
                w[T] = B[v + T] | 0;
              else {
                var W = w[T - 15], _ = (W << 25 | W >>> 7) ^ (W << 14 | W >>> 18) ^ W >>> 3, R = w[T - 2], U = (R << 15 | R >>> 17) ^ (R << 13 | R >>> 19) ^ R >>> 10;
                w[T] = _ + w[T - 7] + U + w[T - 16];
              }
              var q = E & b ^ ~E & D, V = A & m ^ A & l ^ m & l, M = (A << 30 | A >>> 2) ^ (A << 19 | A >>> 13) ^ (A << 10 | A >>> 22), $ = (E << 26 | E >>> 6) ^ (E << 21 | E >>> 11) ^ (E << 7 | E >>> 25), J = S + $ + q + f[T] + w[T], Y = M + V;
              S = D, D = b, b = E, E = p + J | 0, p = l, l = m, m = A, A = J + Y | 0;
            }
            F[0] = F[0] + A | 0, F[1] = F[1] + m | 0, F[2] = F[2] + l | 0, F[3] = F[3] + p | 0, F[4] = F[4] + E | 0, F[5] = F[5] + b | 0, F[6] = F[6] + D | 0, F[7] = F[7] + S | 0;
          },
          _doFinalize: function() {
            var B = this._data, v = B.words, F = this._nDataBytes * 8, A = B.sigBytes * 8;
            return v[A >>> 5] |= 128 << 24 - A % 32, v[(A + 64 >>> 9 << 4) + 14] = a.floor(F / 4294967296), v[(A + 64 >>> 9 << 4) + 15] = F, B.sigBytes = v.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var B = i.clone.call(this);
            return B._hash = this._hash.clone(), B;
          }
        });
        h.SHA256 = i._createHelper(u), h.HmacSHA256 = i._createHmacHelper(u);
      }(Math), o.SHA256;
    });
  }(L0)), L0.exports;
}
var rr = { exports: {} }, Qr;
function Ae() {
  return Qr || (Qr = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), Tr());
    })(K, function(o) {
      return function() {
        var a = o, h = a.lib, d = h.WordArray, g = a.algo, i = g.SHA256, C = g.SHA224 = i.extend({
          _doReset: function() {
            this._hash = new d.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var x = i._doFinalize.call(this);
            return x.sigBytes -= 4, x;
          }
        });
        a.SHA224 = i._createHelper(C), a.HmacSHA224 = i._createHmacHelper(C);
      }(), o.SHA224;
    });
  }(rr)), rr.exports;
}
var tr = { exports: {} }, Jr;
function St() {
  return Jr || (Jr = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), M0());
    })(K, function(o) {
      return function() {
        var a = o, h = a.lib, d = h.Hasher, g = a.x64, i = g.Word, C = g.WordArray, x = a.algo;
        function f() {
          return i.create.apply(i, arguments);
        }
        var w = [
          f(1116352408, 3609767458),
          f(1899447441, 602891725),
          f(3049323471, 3964484399),
          f(3921009573, 2173295548),
          f(961987163, 4081628472),
          f(1508970993, 3053834265),
          f(2453635748, 2937671579),
          f(2870763221, 3664609560),
          f(3624381080, 2734883394),
          f(310598401, 1164996542),
          f(607225278, 1323610764),
          f(1426881987, 3590304994),
          f(1925078388, 4068182383),
          f(2162078206, 991336113),
          f(2614888103, 633803317),
          f(3248222580, 3479774868),
          f(3835390401, 2666613458),
          f(4022224774, 944711139),
          f(264347078, 2341262773),
          f(604807628, 2007800933),
          f(770255983, 1495990901),
          f(1249150122, 1856431235),
          f(1555081692, 3175218132),
          f(1996064986, 2198950837),
          f(2554220882, 3999719339),
          f(2821834349, 766784016),
          f(2952996808, 2566594879),
          f(3210313671, 3203337956),
          f(3336571891, 1034457026),
          f(3584528711, 2466948901),
          f(113926993, 3758326383),
          f(338241895, 168717936),
          f(666307205, 1188179964),
          f(773529912, 1546045734),
          f(1294757372, 1522805485),
          f(1396182291, 2643833823),
          f(1695183700, 2343527390),
          f(1986661051, 1014477480),
          f(2177026350, 1206759142),
          f(2456956037, 344077627),
          f(2730485921, 1290863460),
          f(2820302411, 3158454273),
          f(3259730800, 3505952657),
          f(3345764771, 106217008),
          f(3516065817, 3606008344),
          f(3600352804, 1432725776),
          f(4094571909, 1467031594),
          f(275423344, 851169720),
          f(430227734, 3100823752),
          f(506948616, 1363258195),
          f(659060556, 3750685593),
          f(883997877, 3785050280),
          f(958139571, 3318307427),
          f(1322822218, 3812723403),
          f(1537002063, 2003034995),
          f(1747873779, 3602036899),
          f(1955562222, 1575990012),
          f(2024104815, 1125592928),
          f(2227730452, 2716904306),
          f(2361852424, 442776044),
          f(2428436474, 593698344),
          f(2756734187, 3733110249),
          f(3204031479, 2999351573),
          f(3329325298, 3815920427),
          f(3391569614, 3928383900),
          f(3515267271, 566280711),
          f(3940187606, 3454069534),
          f(4118630271, 4000239992),
          f(116418474, 1914138554),
          f(174292421, 2731055270),
          f(289380356, 3203993006),
          f(460393269, 320620315),
          f(685471733, 587496836),
          f(852142971, 1086792851),
          f(1017036298, 365543100),
          f(1126000580, 2618297676),
          f(1288033470, 3409855158),
          f(1501505948, 4234509866),
          f(1607167915, 987167468),
          f(1816402316, 1246189591)
        ], u = [];
        (function() {
          for (var v = 0; v < 80; v++)
            u[v] = f();
        })();
        var B = x.SHA512 = d.extend({
          _doReset: function() {
            this._hash = new C.init([
              new i.init(1779033703, 4089235720),
              new i.init(3144134277, 2227873595),
              new i.init(1013904242, 4271175723),
              new i.init(2773480762, 1595750129),
              new i.init(1359893119, 2917565137),
              new i.init(2600822924, 725511199),
              new i.init(528734635, 4215389547),
              new i.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(v, F) {
            for (var A = this._hash.words, m = A[0], l = A[1], p = A[2], E = A[3], b = A[4], D = A[5], S = A[6], T = A[7], W = m.high, _ = m.low, R = l.high, U = l.low, q = p.high, V = p.low, M = E.high, $ = E.low, J = b.high, Y = b.low, I = D.high, j = D.low, N = S.high, P = S.low, O = T.high, z = T.low, r0 = W, Q = _, o0 = R, G = U, d0 = q, v0 = V, U0 = M, A0 = $, c0 = J, x0 = Y, S0 = I, _0 = j, C0 = N, m0 = P, q0 = O, F0 = z, f0 = 0; f0 < 80; f0++) {
              var i0, l0, N0 = u[f0];
              if (f0 < 16)
                l0 = N0.high = v[F + f0 * 2] | 0, i0 = N0.low = v[F + f0 * 2 + 1] | 0;
              else {
                var p0 = u[f0 - 15], y0 = p0.high, n = p0.low, r = (y0 >>> 1 | n << 31) ^ (y0 >>> 8 | n << 24) ^ y0 >>> 7, e = (n >>> 1 | y0 << 31) ^ (n >>> 8 | y0 << 24) ^ (n >>> 7 | y0 << 25), s = u[f0 - 2], y = s.high, k = s.low, H = (y >>> 19 | k << 13) ^ (y << 3 | k >>> 29) ^ y >>> 6, X = (k >>> 19 | y << 13) ^ (k << 3 | y >>> 29) ^ (k >>> 6 | y << 26), e0 = u[f0 - 7], t0 = e0.high, n0 = e0.low, L = u[f0 - 16], Pt = L.high, Pr = L.low;
                i0 = e + n0, l0 = r + t0 + (i0 >>> 0 < e >>> 0 ? 1 : 0), i0 = i0 + X, l0 = l0 + H + (i0 >>> 0 < X >>> 0 ? 1 : 0), i0 = i0 + Pr, l0 = l0 + Pt + (i0 >>> 0 < Pr >>> 0 ? 1 : 0), N0.high = l0, N0.low = i0;
              }
              var Ut = c0 & S0 ^ ~c0 & C0, Ur = x0 & _0 ^ ~x0 & m0, qt = r0 & o0 ^ r0 & d0 ^ o0 & d0, zt = Q & G ^ Q & v0 ^ G & v0, Ot = (r0 >>> 28 | Q << 4) ^ (r0 << 30 | Q >>> 2) ^ (r0 << 25 | Q >>> 7), qr = (Q >>> 28 | r0 << 4) ^ (Q << 30 | r0 >>> 2) ^ (Q << 25 | r0 >>> 7), Wt = (c0 >>> 14 | x0 << 18) ^ (c0 >>> 18 | x0 << 14) ^ (c0 << 23 | x0 >>> 9), Vt = (x0 >>> 14 | c0 << 18) ^ (x0 >>> 18 | c0 << 14) ^ (x0 << 23 | c0 >>> 9), zr = w[f0], Mt = zr.high, Or = zr.low, u0 = F0 + Vt, g0 = q0 + Wt + (u0 >>> 0 < F0 >>> 0 ? 1 : 0), u0 = u0 + Ur, g0 = g0 + Ut + (u0 >>> 0 < Ur >>> 0 ? 1 : 0), u0 = u0 + Or, g0 = g0 + Mt + (u0 >>> 0 < Or >>> 0 ? 1 : 0), u0 = u0 + i0, g0 = g0 + l0 + (u0 >>> 0 < i0 >>> 0 ? 1 : 0), Wr = qr + zt, Gt = Ot + qt + (Wr >>> 0 < qr >>> 0 ? 1 : 0);
              q0 = C0, F0 = m0, C0 = S0, m0 = _0, S0 = c0, _0 = x0, x0 = A0 + u0 | 0, c0 = U0 + g0 + (x0 >>> 0 < A0 >>> 0 ? 1 : 0) | 0, U0 = d0, A0 = v0, d0 = o0, v0 = G, o0 = r0, G = Q, Q = u0 + Wr | 0, r0 = g0 + Gt + (Q >>> 0 < u0 >>> 0 ? 1 : 0) | 0;
            }
            _ = m.low = _ + Q, m.high = W + r0 + (_ >>> 0 < Q >>> 0 ? 1 : 0), U = l.low = U + G, l.high = R + o0 + (U >>> 0 < G >>> 0 ? 1 : 0), V = p.low = V + v0, p.high = q + d0 + (V >>> 0 < v0 >>> 0 ? 1 : 0), $ = E.low = $ + A0, E.high = M + U0 + ($ >>> 0 < A0 >>> 0 ? 1 : 0), Y = b.low = Y + x0, b.high = J + c0 + (Y >>> 0 < x0 >>> 0 ? 1 : 0), j = D.low = j + _0, D.high = I + S0 + (j >>> 0 < _0 >>> 0 ? 1 : 0), P = S.low = P + m0, S.high = N + C0 + (P >>> 0 < m0 >>> 0 ? 1 : 0), z = T.low = z + F0, T.high = O + q0 + (z >>> 0 < F0 >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var v = this._data, F = v.words, A = this._nDataBytes * 8, m = v.sigBytes * 8;
            F[m >>> 5] |= 128 << 24 - m % 32, F[(m + 128 >>> 10 << 5) + 30] = Math.floor(A / 4294967296), F[(m + 128 >>> 10 << 5) + 31] = A, v.sigBytes = F.length * 4, this._process();
            var l = this._hash.toX32();
            return l;
          },
          clone: function() {
            var v = d.clone.call(this);
            return v._hash = this._hash.clone(), v;
          },
          blockSize: 1024 / 32
        });
        a.SHA512 = d._createHelper(B), a.HmacSHA512 = d._createHmacHelper(B);
      }(), o.SHA512;
    });
  }(tr)), tr.exports;
}
var er = { exports: {} }, Ir;
function Ce() {
  return Ir || (Ir = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), M0(), St());
    })(K, function(o) {
      return function() {
        var a = o, h = a.x64, d = h.Word, g = h.WordArray, i = a.algo, C = i.SHA512, x = i.SHA384 = C.extend({
          _doReset: function() {
            this._hash = new g.init([
              new d.init(3418070365, 3238371032),
              new d.init(1654270250, 914150663),
              new d.init(2438529370, 812702999),
              new d.init(355462360, 4144912697),
              new d.init(1731405415, 4290775857),
              new d.init(2394180231, 1750603025),
              new d.init(3675008525, 1694076839),
              new d.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var f = C._doFinalize.call(this);
            return f.sigBytes -= 16, f;
          }
        });
        a.SHA384 = C._createHelper(x), a.HmacSHA384 = C._createHmacHelper(x);
      }(), o.SHA384;
    });
  }(er)), er.exports;
}
var nr = { exports: {} }, Lr;
function Fe() {
  return Lr || (Lr = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), M0());
    })(K, function(o) {
      return function(a) {
        var h = o, d = h.lib, g = d.WordArray, i = d.Hasher, C = h.x64, x = C.Word, f = h.algo, w = [], u = [], B = [];
        (function() {
          for (var A = 1, m = 0, l = 0; l < 24; l++) {
            w[A + 5 * m] = (l + 1) * (l + 2) / 2 % 64;
            var p = m % 5, E = (2 * A + 3 * m) % 5;
            A = p, m = E;
          }
          for (var A = 0; A < 5; A++)
            for (var m = 0; m < 5; m++)
              u[A + 5 * m] = m + (2 * A + 3 * m) % 5 * 5;
          for (var b = 1, D = 0; D < 24; D++) {
            for (var S = 0, T = 0, W = 0; W < 7; W++) {
              if (b & 1) {
                var _ = (1 << W) - 1;
                _ < 32 ? T ^= 1 << _ : S ^= 1 << _ - 32;
              }
              b & 128 ? b = b << 1 ^ 113 : b <<= 1;
            }
            B[D] = x.create(S, T);
          }
        })();
        var v = [];
        (function() {
          for (var A = 0; A < 25; A++)
            v[A] = x.create();
        })();
        var F = f.SHA3 = i.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: i.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var A = this._state = [], m = 0; m < 25; m++)
              A[m] = new x.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(A, m) {
            for (var l = this._state, p = this.blockSize / 2, E = 0; E < p; E++) {
              var b = A[m + 2 * E], D = A[m + 2 * E + 1];
              b = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, D = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360;
              var S = l[E];
              S.high ^= D, S.low ^= b;
            }
            for (var T = 0; T < 24; T++) {
              for (var W = 0; W < 5; W++) {
                for (var _ = 0, R = 0, U = 0; U < 5; U++) {
                  var S = l[W + 5 * U];
                  _ ^= S.high, R ^= S.low;
                }
                var q = v[W];
                q.high = _, q.low = R;
              }
              for (var W = 0; W < 5; W++)
                for (var V = v[(W + 4) % 5], M = v[(W + 1) % 5], $ = M.high, J = M.low, _ = V.high ^ ($ << 1 | J >>> 31), R = V.low ^ (J << 1 | $ >>> 31), U = 0; U < 5; U++) {
                  var S = l[W + 5 * U];
                  S.high ^= _, S.low ^= R;
                }
              for (var Y = 1; Y < 25; Y++) {
                var _, R, S = l[Y], I = S.high, j = S.low, N = w[Y];
                N < 32 ? (_ = I << N | j >>> 32 - N, R = j << N | I >>> 32 - N) : (_ = j << N - 32 | I >>> 64 - N, R = I << N - 32 | j >>> 64 - N);
                var P = v[u[Y]];
                P.high = _, P.low = R;
              }
              var O = v[0], z = l[0];
              O.high = z.high, O.low = z.low;
              for (var W = 0; W < 5; W++)
                for (var U = 0; U < 5; U++) {
                  var Y = W + 5 * U, S = l[Y], r0 = v[Y], Q = v[(W + 1) % 5 + 5 * U], o0 = v[(W + 2) % 5 + 5 * U];
                  S.high = r0.high ^ ~Q.high & o0.high, S.low = r0.low ^ ~Q.low & o0.low;
                }
              var S = l[0], G = B[T];
              S.high ^= G.high, S.low ^= G.low;
            }
          },
          _doFinalize: function() {
            var A = this._data, m = A.words;
            this._nDataBytes * 8;
            var l = A.sigBytes * 8, p = this.blockSize * 32;
            m[l >>> 5] |= 1 << 24 - l % 32, m[(a.ceil((l + 1) / p) * p >>> 5) - 1] |= 128, A.sigBytes = m.length * 4, this._process();
            for (var E = this._state, b = this.cfg.outputLength / 8, D = b / 8, S = [], T = 0; T < D; T++) {
              var W = E[T], _ = W.high, R = W.low;
              _ = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, R = (R << 8 | R >>> 24) & 16711935 | (R << 24 | R >>> 8) & 4278255360, S.push(R), S.push(_);
            }
            return new g.init(S, b);
          },
          clone: function() {
            for (var A = i.clone.call(this), m = A._state = this._state.slice(0), l = 0; l < 25; l++)
              m[l] = m[l].clone();
            return A;
          }
        });
        h.SHA3 = i._createHelper(F), h.HmacSHA3 = i._createHmacHelper(F);
      }(Math), o.SHA3;
    });
  }(nr)), nr.exports;
}
var ir = { exports: {} }, rt;
function ye() {
  return rt || (rt = 1, function(t, c) {
    (function(o, a) {
      t.exports = a(Z());
    })(K, function(o) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(a) {
        var h = o, d = h.lib, g = d.WordArray, i = d.Hasher, C = h.algo, x = g.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]), f = g.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]), w = g.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]), u = g.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]), B = g.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), v = g.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), F = C.RIPEMD160 = i.extend({
          _doReset: function() {
            this._hash = g.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(D, S) {
            for (var T = 0; T < 16; T++) {
              var W = S + T, _ = D[W];
              D[W] = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360;
            }
            var R = this._hash.words, U = B.words, q = v.words, V = x.words, M = f.words, $ = w.words, J = u.words, Y, I, j, N, P, O, z, r0, Q, o0;
            O = Y = R[0], z = I = R[1], r0 = j = R[2], Q = N = R[3], o0 = P = R[4];
            for (var G, T = 0; T < 80; T += 1)
              G = Y + D[S + V[T]] | 0, T < 16 ? G += A(I, j, N) + U[0] : T < 32 ? G += m(I, j, N) + U[1] : T < 48 ? G += l(I, j, N) + U[2] : T < 64 ? G += p(I, j, N) + U[3] : G += E(I, j, N) + U[4], G = G | 0, G = b(G, $[T]), G = G + P | 0, Y = P, P = N, N = b(j, 10), j = I, I = G, G = O + D[S + M[T]] | 0, T < 16 ? G += E(z, r0, Q) + q[0] : T < 32 ? G += p(z, r0, Q) + q[1] : T < 48 ? G += l(z, r0, Q) + q[2] : T < 64 ? G += m(z, r0, Q) + q[3] : G += A(z, r0, Q) + q[4], G = G | 0, G = b(G, J[T]), G = G + o0 | 0, O = o0, o0 = Q, Q = b(r0, 10), r0 = z, z = G;
            G = R[1] + j + Q | 0, R[1] = R[2] + N + o0 | 0, R[2] = R[3] + P + O | 0, R[3] = R[4] + Y + z | 0, R[4] = R[0] + I + r0 | 0, R[0] = G;
          },
          _doFinalize: function() {
            var D = this._data, S = D.words, T = this._nDataBytes * 8, W = D.sigBytes * 8;
            S[W >>> 5] |= 128 << 24 - W % 32, S[(W + 64 >>> 9 << 4) + 14] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360, D.sigBytes = (S.length + 1) * 4, this._process();
            for (var _ = this._hash, R = _.words, U = 0; U < 5; U++) {
              var q = R[U];
              R[U] = (q << 8 | q >>> 24) & 16711935 | (q << 24 | q >>> 8) & 4278255360;
            }
            return _;
          },
          clone: function() {
            var D = i.clone.call(this);
            return D._hash = this._hash.clone(), D;
          }
        });
        function A(D, S, T) {
          return D ^ S ^ T;
        }
        function m(D, S, T) {
          return D & S | ~D & T;
        }
        function l(D, S, T) {
          return (D | ~S) ^ T;
        }
        function p(D, S, T) {
          return D & T | S & ~T;
        }
        function E(D, S, T) {
          return D ^ (S | ~T);
        }
        function b(D, S) {
          return D << S | D >>> 32 - S;
        }
        h.RIPEMD160 = i._createHelper(F), h.HmacRIPEMD160 = i._createHmacHelper(F);
      }(), o.RIPEMD160;
    });
  }(ir)), ir.exports;
}
var ar = { exports: {} }, tt;
function Hr() {
  return tt || (tt = 1, function(t, c) {
    (function(o, a) {
      t.exports = a(Z());
    })(K, function(o) {
      (function() {
        var a = o, h = a.lib, d = h.Base, g = a.enc, i = g.Utf8, C = a.algo;
        C.HMAC = d.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(x, f) {
            x = this._hasher = new x.init(), typeof f == "string" && (f = i.parse(f));
            var w = x.blockSize, u = w * 4;
            f.sigBytes > u && (f = x.finalize(f)), f.clamp();
            for (var B = this._oKey = f.clone(), v = this._iKey = f.clone(), F = B.words, A = v.words, m = 0; m < w; m++)
              F[m] ^= 1549556828, A[m] ^= 909522486;
            B.sigBytes = v.sigBytes = u, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var x = this._hasher;
            x.reset(), x.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(x) {
            return this._hasher.update(x), this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(x) {
            var f = this._hasher, w = f.finalize(x);
            f.reset();
            var u = f.finalize(this._oKey.clone().concat(w));
            return u;
          }
        });
      })();
    });
  }(ar)), ar.exports;
}
var or = { exports: {} }, et;
function ge() {
  return et || (et = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), Tr(), Hr());
    })(K, function(o) {
      return function() {
        var a = o, h = a.lib, d = h.Base, g = h.WordArray, i = a.algo, C = i.SHA256, x = i.HMAC, f = i.PBKDF2 = d.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: d.extend({
            keySize: 128 / 32,
            hasher: C,
            iterations: 25e4
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(w) {
            this.cfg = this.cfg.extend(w);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(w, u) {
            for (var B = this.cfg, v = x.create(B.hasher, w), F = g.create(), A = g.create([1]), m = F.words, l = A.words, p = B.keySize, E = B.iterations; m.length < p; ) {
              var b = v.update(u).finalize(A);
              v.reset();
              for (var D = b.words, S = D.length, T = b, W = 1; W < E; W++) {
                T = v.finalize(T), v.reset();
                for (var _ = T.words, R = 0; R < S; R++)
                  D[R] ^= _[R];
              }
              F.concat(b), l[0]++;
            }
            return F.sigBytes = p * 4, F;
          }
        });
        a.PBKDF2 = function(w, u, B) {
          return f.create(B).compute(w, u);
        };
      }(), o.PBKDF2;
    });
  }(or)), or.exports;
}
var xr = { exports: {} }, nt;
function w0() {
  return nt || (nt = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), Rt(), Hr());
    })(K, function(o) {
      return function() {
        var a = o, h = a.lib, d = h.Base, g = h.WordArray, i = a.algo, C = i.MD5, x = i.EvpKDF = d.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: d.extend({
            keySize: 128 / 32,
            hasher: C,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(f) {
            this.cfg = this.cfg.extend(f);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(f, w) {
            for (var u, B = this.cfg, v = B.hasher.create(), F = g.create(), A = F.words, m = B.keySize, l = B.iterations; A.length < m; ) {
              u && v.update(u), u = v.update(f).finalize(w), v.reset();
              for (var p = 1; p < l; p++)
                u = v.finalize(u), v.reset();
              F.concat(u);
            }
            return F.sigBytes = m * 4, F;
          }
        });
        a.EvpKDF = function(f, w, u) {
          return x.create(u).compute(f, w);
        };
      }(), o.EvpKDF;
    });
  }(xr)), xr.exports;
}
var cr = { exports: {} }, it;
function s0() {
  return it || (it = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), w0());
    })(K, function(o) {
      o.lib.Cipher || function(a) {
        var h = o, d = h.lib, g = d.Base, i = d.WordArray, C = d.BufferedBlockAlgorithm, x = h.enc;
        x.Utf8;
        var f = x.Base64, w = h.algo, u = w.EvpKDF, B = d.Cipher = C.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: g.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(_, R) {
            return this.create(this._ENC_XFORM_MODE, _, R);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(_, R) {
            return this.create(this._DEC_XFORM_MODE, _, R);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(_, R, U) {
            this.cfg = this.cfg.extend(U), this._xformMode = _, this._key = R, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            C.reset.call(this), this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(_) {
            return this._append(_), this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(_) {
            _ && this._append(_);
            var R = this._doFinalize();
            return R;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: /* @__PURE__ */ function() {
            function _(R) {
              return typeof R == "string" ? W : D;
            }
            return function(R) {
              return {
                encrypt: function(U, q, V) {
                  return _(q).encrypt(R, U, q, V);
                },
                decrypt: function(U, q, V) {
                  return _(q).decrypt(R, U, q, V);
                }
              };
            };
          }()
        });
        d.StreamCipher = B.extend({
          _doFinalize: function() {
            var _ = this._process(!0);
            return _;
          },
          blockSize: 1
        });
        var v = h.mode = {}, F = d.BlockCipherMode = g.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(_, R) {
            return this.Encryptor.create(_, R);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(_, R) {
            return this.Decryptor.create(_, R);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(_, R) {
            this._cipher = _, this._iv = R;
          }
        }), A = v.CBC = function() {
          var _ = F.extend();
          _.Encryptor = _.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(U, q) {
              var V = this._cipher, M = V.blockSize;
              R.call(this, U, q, M), V.encryptBlock(U, q), this._prevBlock = U.slice(q, q + M);
            }
          }), _.Decryptor = _.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(U, q) {
              var V = this._cipher, M = V.blockSize, $ = U.slice(q, q + M);
              V.decryptBlock(U, q), R.call(this, U, q, M), this._prevBlock = $;
            }
          });
          function R(U, q, V) {
            var M, $ = this._iv;
            $ ? (M = $, this._iv = a) : M = this._prevBlock;
            for (var J = 0; J < V; J++)
              U[q + J] ^= M[J];
          }
          return _;
        }(), m = h.pad = {}, l = m.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(_, R) {
            for (var U = R * 4, q = U - _.sigBytes % U, V = q << 24 | q << 16 | q << 8 | q, M = [], $ = 0; $ < q; $ += 4)
              M.push(V);
            var J = i.create(M, q);
            _.concat(J);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(_) {
            var R = _.words[_.sigBytes - 1 >>> 2] & 255;
            _.sigBytes -= R;
          }
        };
        d.BlockCipher = B.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: B.cfg.extend({
            mode: A,
            padding: l
          }),
          reset: function() {
            var _;
            B.reset.call(this);
            var R = this.cfg, U = R.iv, q = R.mode;
            this._xformMode == this._ENC_XFORM_MODE ? _ = q.createEncryptor : (_ = q.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == _ ? this._mode.init(this, U && U.words) : (this._mode = _.call(q, this, U && U.words), this._mode.__creator = _);
          },
          _doProcessBlock: function(_, R) {
            this._mode.processBlock(_, R);
          },
          _doFinalize: function() {
            var _, R = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (R.pad(this._data, this.blockSize), _ = this._process(!0)) : (_ = this._process(!0), R.unpad(_)), _;
          },
          blockSize: 128 / 32
        });
        var p = d.CipherParams = g.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(_) {
            this.mixIn(_);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(_) {
            return (_ || this.formatter).stringify(this);
          }
        }), E = h.format = {}, b = E.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(_) {
            var R, U = _.ciphertext, q = _.salt;
            return q ? R = i.create([1398893684, 1701076831]).concat(q).concat(U) : R = U, R.toString(f);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(_) {
            var R, U = f.parse(_), q = U.words;
            return q[0] == 1398893684 && q[1] == 1701076831 && (R = i.create(q.slice(2, 4)), q.splice(0, 4), U.sigBytes -= 16), p.create({ ciphertext: U, salt: R });
          }
        }, D = d.SerializableCipher = g.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: g.extend({
            format: b
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(_, R, U, q) {
            q = this.cfg.extend(q);
            var V = _.createEncryptor(U, q), M = V.finalize(R), $ = V.cfg;
            return p.create({
              ciphertext: M,
              key: U,
              iv: $.iv,
              algorithm: _,
              mode: $.mode,
              padding: $.padding,
              blockSize: _.blockSize,
              formatter: q.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(_, R, U, q) {
            q = this.cfg.extend(q), R = this._parse(R, q.format);
            var V = _.createDecryptor(U, q).finalize(R.ciphertext);
            return V;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(_, R) {
            return typeof _ == "string" ? R.parse(_, this) : _;
          }
        }), S = h.kdf = {}, T = S.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(_, R, U, q, V) {
            if (q || (q = i.random(64 / 8)), V)
              var M = u.create({ keySize: R + U, hasher: V }).compute(_, q);
            else
              var M = u.create({ keySize: R + U }).compute(_, q);
            var $ = i.create(M.words.slice(R), U * 4);
            return M.sigBytes = R * 4, p.create({ key: M, iv: $, salt: q });
          }
        }, W = d.PasswordBasedCipher = D.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: D.cfg.extend({
            kdf: T
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(_, R, U, q) {
            q = this.cfg.extend(q);
            var V = q.kdf.execute(U, _.keySize, _.ivSize, q.salt, q.hasher);
            q.iv = V.iv;
            var M = D.encrypt.call(this, _, R, V.key, q);
            return M.mixIn(V), M;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(_, R, U, q) {
            q = this.cfg.extend(q), R = this._parse(R, q.format);
            var V = q.kdf.execute(U, _.keySize, _.ivSize, R.salt, q.hasher);
            q.iv = V.iv;
            var M = D.decrypt.call(this, _, R, V.key, q);
            return M;
          }
        });
      }();
    });
  }(cr)), cr.exports;
}
var sr = { exports: {} }, at;
function we() {
  return at || (at = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), s0());
    })(K, function(o) {
      return o.mode.CFB = function() {
        var a = o.lib.BlockCipherMode.extend();
        a.Encryptor = a.extend({
          processBlock: function(d, g) {
            var i = this._cipher, C = i.blockSize;
            h.call(this, d, g, C, i), this._prevBlock = d.slice(g, g + C);
          }
        }), a.Decryptor = a.extend({
          processBlock: function(d, g) {
            var i = this._cipher, C = i.blockSize, x = d.slice(g, g + C);
            h.call(this, d, g, C, i), this._prevBlock = x;
          }
        });
        function h(d, g, i, C) {
          var x, f = this._iv;
          f ? (x = f.slice(0), this._iv = void 0) : x = this._prevBlock, C.encryptBlock(x, 0);
          for (var w = 0; w < i; w++)
            d[g + w] ^= x[w];
        }
        return a;
      }(), o.mode.CFB;
    });
  }(sr)), sr.exports;
}
var fr = { exports: {} }, ot;
function _e() {
  return ot || (ot = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), s0());
    })(K, function(o) {
      return o.mode.CTR = function() {
        var a = o.lib.BlockCipherMode.extend(), h = a.Encryptor = a.extend({
          processBlock: function(d, g) {
            var i = this._cipher, C = i.blockSize, x = this._iv, f = this._counter;
            x && (f = this._counter = x.slice(0), this._iv = void 0);
            var w = f.slice(0);
            i.encryptBlock(w, 0), f[C - 1] = f[C - 1] + 1 | 0;
            for (var u = 0; u < C; u++)
              d[g + u] ^= w[u];
          }
        });
        return a.Decryptor = h, a;
      }(), o.mode.CTR;
    });
  }(fr)), fr.exports;
}
var ur = { exports: {} }, xt;
function me() {
  return xt || (xt = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), s0());
    })(K, function(o) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return o.mode.CTRGladman = function() {
        var a = o.lib.BlockCipherMode.extend();
        function h(i) {
          if ((i >> 24 & 255) === 255) {
            var C = i >> 16 & 255, x = i >> 8 & 255, f = i & 255;
            C === 255 ? (C = 0, x === 255 ? (x = 0, f === 255 ? f = 0 : ++f) : ++x) : ++C, i = 0, i += C << 16, i += x << 8, i += f;
          } else
            i += 1 << 24;
          return i;
        }
        function d(i) {
          return (i[0] = h(i[0])) === 0 && (i[1] = h(i[1])), i;
        }
        var g = a.Encryptor = a.extend({
          processBlock: function(i, C) {
            var x = this._cipher, f = x.blockSize, w = this._iv, u = this._counter;
            w && (u = this._counter = w.slice(0), this._iv = void 0), d(u);
            var B = u.slice(0);
            x.encryptBlock(B, 0);
            for (var v = 0; v < f; v++)
              i[C + v] ^= B[v];
          }
        });
        return a.Decryptor = g, a;
      }(), o.mode.CTRGladman;
    });
  }(ur)), ur.exports;
}
var lr = { exports: {} }, ct;
function be() {
  return ct || (ct = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), s0());
    })(K, function(o) {
      return o.mode.OFB = function() {
        var a = o.lib.BlockCipherMode.extend(), h = a.Encryptor = a.extend({
          processBlock: function(d, g) {
            var i = this._cipher, C = i.blockSize, x = this._iv, f = this._keystream;
            x && (f = this._keystream = x.slice(0), this._iv = void 0), i.encryptBlock(f, 0);
            for (var w = 0; w < C; w++)
              d[g + w] ^= f[w];
          }
        });
        return a.Decryptor = h, a;
      }(), o.mode.OFB;
    });
  }(lr)), lr.exports;
}
var hr = { exports: {} }, st;
function De() {
  return st || (st = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), s0());
    })(K, function(o) {
      return o.mode.ECB = function() {
        var a = o.lib.BlockCipherMode.extend();
        return a.Encryptor = a.extend({
          processBlock: function(h, d) {
            this._cipher.encryptBlock(h, d);
          }
        }), a.Decryptor = a.extend({
          processBlock: function(h, d) {
            this._cipher.decryptBlock(h, d);
          }
        }), a;
      }(), o.mode.ECB;
    });
  }(hr)), hr.exports;
}
var dr = { exports: {} }, ft;
function ke() {
  return ft || (ft = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), s0());
    })(K, function(o) {
      return o.pad.AnsiX923 = {
        pad: function(a, h) {
          var d = a.sigBytes, g = h * 4, i = g - d % g, C = d + i - 1;
          a.clamp(), a.words[C >>> 2] |= i << 24 - C % 4 * 8, a.sigBytes += i;
        },
        unpad: function(a) {
          var h = a.words[a.sigBytes - 1 >>> 2] & 255;
          a.sigBytes -= h;
        }
      }, o.pad.Ansix923;
    });
  }(dr)), dr.exports;
}
var pr = { exports: {} }, ut;
function Re() {
  return ut || (ut = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), s0());
    })(K, function(o) {
      return o.pad.Iso10126 = {
        pad: function(a, h) {
          var d = h * 4, g = d - a.sigBytes % d;
          a.concat(o.lib.WordArray.random(g - 1)).concat(o.lib.WordArray.create([g << 24], 1));
        },
        unpad: function(a) {
          var h = a.words[a.sigBytes - 1 >>> 2] & 255;
          a.sigBytes -= h;
        }
      }, o.pad.Iso10126;
    });
  }(pr)), pr.exports;
}
var Br = { exports: {} }, lt;
function Se() {
  return lt || (lt = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), s0());
    })(K, function(o) {
      return o.pad.Iso97971 = {
        pad: function(a, h) {
          a.concat(o.lib.WordArray.create([2147483648], 1)), o.pad.ZeroPadding.pad(a, h);
        },
        unpad: function(a) {
          o.pad.ZeroPadding.unpad(a), a.sigBytes--;
        }
      }, o.pad.Iso97971;
    });
  }(Br)), Br.exports;
}
var vr = { exports: {} }, ht;
function Ne() {
  return ht || (ht = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), s0());
    })(K, function(o) {
      return o.pad.ZeroPadding = {
        pad: function(a, h) {
          var d = h * 4;
          a.clamp(), a.sigBytes += d - (a.sigBytes % d || d);
        },
        unpad: function(a) {
          for (var h = a.words, d = a.sigBytes - 1, d = a.sigBytes - 1; d >= 0; d--)
            if (h[d >>> 2] >>> 24 - d % 4 * 8 & 255) {
              a.sigBytes = d + 1;
              break;
            }
        }
      }, o.pad.ZeroPadding;
    });
  }(vr)), vr.exports;
}
var Er = { exports: {} }, dt;
function Te() {
  return dt || (dt = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), s0());
    })(K, function(o) {
      return o.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, o.pad.NoPadding;
    });
  }(Er)), Er.exports;
}
var Ar = { exports: {} }, pt;
function He() {
  return pt || (pt = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), s0());
    })(K, function(o) {
      return function(a) {
        var h = o, d = h.lib, g = d.CipherParams, i = h.enc, C = i.Hex, x = h.format;
        x.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(f) {
            return f.ciphertext.toString(C);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(f) {
            var w = C.parse(f);
            return g.create({ ciphertext: w });
          }
        };
      }(), o.format.Hex;
    });
  }(Ar)), Ar.exports;
}
var Cr = { exports: {} }, Bt;
function Pe() {
  return Bt || (Bt = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), k0(), R0(), w0(), s0());
    })(K, function(o) {
      return function() {
        var a = o, h = a.lib, d = h.BlockCipher, g = a.algo, i = [], C = [], x = [], f = [], w = [], u = [], B = [], v = [], F = [], A = [];
        (function() {
          for (var p = [], E = 0; E < 256; E++)
            E < 128 ? p[E] = E << 1 : p[E] = E << 1 ^ 283;
          for (var b = 0, D = 0, E = 0; E < 256; E++) {
            var S = D ^ D << 1 ^ D << 2 ^ D << 3 ^ D << 4;
            S = S >>> 8 ^ S & 255 ^ 99, i[b] = S, C[S] = b;
            var T = p[b], W = p[T], _ = p[W], R = p[S] * 257 ^ S * 16843008;
            x[b] = R << 24 | R >>> 8, f[b] = R << 16 | R >>> 16, w[b] = R << 8 | R >>> 24, u[b] = R;
            var R = _ * 16843009 ^ W * 65537 ^ T * 257 ^ b * 16843008;
            B[S] = R << 24 | R >>> 8, v[S] = R << 16 | R >>> 16, F[S] = R << 8 | R >>> 24, A[S] = R, b ? (b = T ^ p[p[p[_ ^ T]]], D ^= p[p[D]]) : b = D = 1;
          }
        })();
        var m = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], l = g.AES = d.extend({
          _doReset: function() {
            var p;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var E = this._keyPriorReset = this._key, b = E.words, D = E.sigBytes / 4, S = this._nRounds = D + 6, T = (S + 1) * 4, W = this._keySchedule = [], _ = 0; _ < T; _++)
                _ < D ? W[_] = b[_] : (p = W[_ - 1], _ % D ? D > 6 && _ % D == 4 && (p = i[p >>> 24] << 24 | i[p >>> 16 & 255] << 16 | i[p >>> 8 & 255] << 8 | i[p & 255]) : (p = p << 8 | p >>> 24, p = i[p >>> 24] << 24 | i[p >>> 16 & 255] << 16 | i[p >>> 8 & 255] << 8 | i[p & 255], p ^= m[_ / D | 0] << 24), W[_] = W[_ - D] ^ p);
              for (var R = this._invKeySchedule = [], U = 0; U < T; U++) {
                var _ = T - U;
                if (U % 4)
                  var p = W[_];
                else
                  var p = W[_ - 4];
                U < 4 || _ <= 4 ? R[U] = p : R[U] = B[i[p >>> 24]] ^ v[i[p >>> 16 & 255]] ^ F[i[p >>> 8 & 255]] ^ A[i[p & 255]];
              }
            }
          },
          encryptBlock: function(p, E) {
            this._doCryptBlock(p, E, this._keySchedule, x, f, w, u, i);
          },
          decryptBlock: function(p, E) {
            var b = p[E + 1];
            p[E + 1] = p[E + 3], p[E + 3] = b, this._doCryptBlock(p, E, this._invKeySchedule, B, v, F, A, C);
            var b = p[E + 1];
            p[E + 1] = p[E + 3], p[E + 3] = b;
          },
          _doCryptBlock: function(p, E, b, D, S, T, W, _) {
            for (var R = this._nRounds, U = p[E] ^ b[0], q = p[E + 1] ^ b[1], V = p[E + 2] ^ b[2], M = p[E + 3] ^ b[3], $ = 4, J = 1; J < R; J++) {
              var Y = D[U >>> 24] ^ S[q >>> 16 & 255] ^ T[V >>> 8 & 255] ^ W[M & 255] ^ b[$++], I = D[q >>> 24] ^ S[V >>> 16 & 255] ^ T[M >>> 8 & 255] ^ W[U & 255] ^ b[$++], j = D[V >>> 24] ^ S[M >>> 16 & 255] ^ T[U >>> 8 & 255] ^ W[q & 255] ^ b[$++], N = D[M >>> 24] ^ S[U >>> 16 & 255] ^ T[q >>> 8 & 255] ^ W[V & 255] ^ b[$++];
              U = Y, q = I, V = j, M = N;
            }
            var Y = (_[U >>> 24] << 24 | _[q >>> 16 & 255] << 16 | _[V >>> 8 & 255] << 8 | _[M & 255]) ^ b[$++], I = (_[q >>> 24] << 24 | _[V >>> 16 & 255] << 16 | _[M >>> 8 & 255] << 8 | _[U & 255]) ^ b[$++], j = (_[V >>> 24] << 24 | _[M >>> 16 & 255] << 16 | _[U >>> 8 & 255] << 8 | _[q & 255]) ^ b[$++], N = (_[M >>> 24] << 24 | _[U >>> 16 & 255] << 16 | _[q >>> 8 & 255] << 8 | _[V & 255]) ^ b[$++];
            p[E] = Y, p[E + 1] = I, p[E + 2] = j, p[E + 3] = N;
          },
          keySize: 256 / 32
        });
        a.AES = d._createHelper(l);
      }(), o.AES;
    });
  }(Cr)), Cr.exports;
}
var Fr = { exports: {} }, vt;
function Ue() {
  return vt || (vt = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), k0(), R0(), w0(), s0());
    })(K, function(o) {
      return function() {
        var a = o, h = a.lib, d = h.WordArray, g = h.BlockCipher, i = a.algo, C = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], x = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], f = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], w = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], u = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], B = i.DES = g.extend({
          _doReset: function() {
            for (var m = this._key, l = m.words, p = [], E = 0; E < 56; E++) {
              var b = C[E] - 1;
              p[E] = l[b >>> 5] >>> 31 - b % 32 & 1;
            }
            for (var D = this._subKeys = [], S = 0; S < 16; S++) {
              for (var T = D[S] = [], W = f[S], E = 0; E < 24; E++)
                T[E / 6 | 0] |= p[(x[E] - 1 + W) % 28] << 31 - E % 6, T[4 + (E / 6 | 0)] |= p[28 + (x[E + 24] - 1 + W) % 28] << 31 - E % 6;
              T[0] = T[0] << 1 | T[0] >>> 31;
              for (var E = 1; E < 7; E++)
                T[E] = T[E] >>> (E - 1) * 4 + 3;
              T[7] = T[7] << 5 | T[7] >>> 27;
            }
            for (var _ = this._invSubKeys = [], E = 0; E < 16; E++)
              _[E] = D[15 - E];
          },
          encryptBlock: function(m, l) {
            this._doCryptBlock(m, l, this._subKeys);
          },
          decryptBlock: function(m, l) {
            this._doCryptBlock(m, l, this._invSubKeys);
          },
          _doCryptBlock: function(m, l, p) {
            this._lBlock = m[l], this._rBlock = m[l + 1], v.call(this, 4, 252645135), v.call(this, 16, 65535), F.call(this, 2, 858993459), F.call(this, 8, 16711935), v.call(this, 1, 1431655765);
            for (var E = 0; E < 16; E++) {
              for (var b = p[E], D = this._lBlock, S = this._rBlock, T = 0, W = 0; W < 8; W++)
                T |= w[W][((S ^ b[W]) & u[W]) >>> 0];
              this._lBlock = S, this._rBlock = D ^ T;
            }
            var _ = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = _, v.call(this, 1, 1431655765), F.call(this, 8, 16711935), F.call(this, 2, 858993459), v.call(this, 16, 65535), v.call(this, 4, 252645135), m[l] = this._lBlock, m[l + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function v(m, l) {
          var p = (this._lBlock >>> m ^ this._rBlock) & l;
          this._rBlock ^= p, this._lBlock ^= p << m;
        }
        function F(m, l) {
          var p = (this._rBlock >>> m ^ this._lBlock) & l;
          this._lBlock ^= p, this._rBlock ^= p << m;
        }
        a.DES = g._createHelper(B);
        var A = i.TripleDES = g.extend({
          _doReset: function() {
            var m = this._key, l = m.words;
            if (l.length !== 2 && l.length !== 4 && l.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var p = l.slice(0, 2), E = l.length < 4 ? l.slice(0, 2) : l.slice(2, 4), b = l.length < 6 ? l.slice(0, 2) : l.slice(4, 6);
            this._des1 = B.createEncryptor(d.create(p)), this._des2 = B.createEncryptor(d.create(E)), this._des3 = B.createEncryptor(d.create(b));
          },
          encryptBlock: function(m, l) {
            this._des1.encryptBlock(m, l), this._des2.decryptBlock(m, l), this._des3.encryptBlock(m, l);
          },
          decryptBlock: function(m, l) {
            this._des3.decryptBlock(m, l), this._des2.encryptBlock(m, l), this._des1.decryptBlock(m, l);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        a.TripleDES = g._createHelper(A);
      }(), o.TripleDES;
    });
  }(Fr)), Fr.exports;
}
var yr = { exports: {} }, Et;
function qe() {
  return Et || (Et = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), k0(), R0(), w0(), s0());
    })(K, function(o) {
      return function() {
        var a = o, h = a.lib, d = h.StreamCipher, g = a.algo, i = g.RC4 = d.extend({
          _doReset: function() {
            for (var f = this._key, w = f.words, u = f.sigBytes, B = this._S = [], v = 0; v < 256; v++)
              B[v] = v;
            for (var v = 0, F = 0; v < 256; v++) {
              var A = v % u, m = w[A >>> 2] >>> 24 - A % 4 * 8 & 255;
              F = (F + B[v] + m) % 256;
              var l = B[v];
              B[v] = B[F], B[F] = l;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(f, w) {
            f[w] ^= C.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function C() {
          for (var f = this._S, w = this._i, u = this._j, B = 0, v = 0; v < 4; v++) {
            w = (w + 1) % 256, u = (u + f[w]) % 256;
            var F = f[w];
            f[w] = f[u], f[u] = F, B |= f[(f[w] + f[u]) % 256] << 24 - v * 8;
          }
          return this._i = w, this._j = u, B;
        }
        a.RC4 = d._createHelper(i);
        var x = g.RC4Drop = i.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: i.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            i._doReset.call(this);
            for (var f = this.cfg.drop; f > 0; f--)
              C.call(this);
          }
        });
        a.RC4Drop = d._createHelper(x);
      }(), o.RC4;
    });
  }(yr)), yr.exports;
}
var gr = { exports: {} }, At;
function ze() {
  return At || (At = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), k0(), R0(), w0(), s0());
    })(K, function(o) {
      return function() {
        var a = o, h = a.lib, d = h.StreamCipher, g = a.algo, i = [], C = [], x = [], f = g.Rabbit = d.extend({
          _doReset: function() {
            for (var u = this._key.words, B = this.cfg.iv, v = 0; v < 4; v++)
              u[v] = (u[v] << 8 | u[v] >>> 24) & 16711935 | (u[v] << 24 | u[v] >>> 8) & 4278255360;
            var F = this._X = [
              u[0],
              u[3] << 16 | u[2] >>> 16,
              u[1],
              u[0] << 16 | u[3] >>> 16,
              u[2],
              u[1] << 16 | u[0] >>> 16,
              u[3],
              u[2] << 16 | u[1] >>> 16
            ], A = this._C = [
              u[2] << 16 | u[2] >>> 16,
              u[0] & 4294901760 | u[1] & 65535,
              u[3] << 16 | u[3] >>> 16,
              u[1] & 4294901760 | u[2] & 65535,
              u[0] << 16 | u[0] >>> 16,
              u[2] & 4294901760 | u[3] & 65535,
              u[1] << 16 | u[1] >>> 16,
              u[3] & 4294901760 | u[0] & 65535
            ];
            this._b = 0;
            for (var v = 0; v < 4; v++)
              w.call(this);
            for (var v = 0; v < 8; v++)
              A[v] ^= F[v + 4 & 7];
            if (B) {
              var m = B.words, l = m[0], p = m[1], E = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, b = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360, D = E >>> 16 | b & 4294901760, S = b << 16 | E & 65535;
              A[0] ^= E, A[1] ^= D, A[2] ^= b, A[3] ^= S, A[4] ^= E, A[5] ^= D, A[6] ^= b, A[7] ^= S;
              for (var v = 0; v < 4; v++)
                w.call(this);
            }
          },
          _doProcessBlock: function(u, B) {
            var v = this._X;
            w.call(this), i[0] = v[0] ^ v[5] >>> 16 ^ v[3] << 16, i[1] = v[2] ^ v[7] >>> 16 ^ v[5] << 16, i[2] = v[4] ^ v[1] >>> 16 ^ v[7] << 16, i[3] = v[6] ^ v[3] >>> 16 ^ v[1] << 16;
            for (var F = 0; F < 4; F++)
              i[F] = (i[F] << 8 | i[F] >>> 24) & 16711935 | (i[F] << 24 | i[F] >>> 8) & 4278255360, u[B + F] ^= i[F];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function w() {
          for (var u = this._X, B = this._C, v = 0; v < 8; v++)
            C[v] = B[v];
          B[0] = B[0] + 1295307597 + this._b | 0, B[1] = B[1] + 3545052371 + (B[0] >>> 0 < C[0] >>> 0 ? 1 : 0) | 0, B[2] = B[2] + 886263092 + (B[1] >>> 0 < C[1] >>> 0 ? 1 : 0) | 0, B[3] = B[3] + 1295307597 + (B[2] >>> 0 < C[2] >>> 0 ? 1 : 0) | 0, B[4] = B[4] + 3545052371 + (B[3] >>> 0 < C[3] >>> 0 ? 1 : 0) | 0, B[5] = B[5] + 886263092 + (B[4] >>> 0 < C[4] >>> 0 ? 1 : 0) | 0, B[6] = B[6] + 1295307597 + (B[5] >>> 0 < C[5] >>> 0 ? 1 : 0) | 0, B[7] = B[7] + 3545052371 + (B[6] >>> 0 < C[6] >>> 0 ? 1 : 0) | 0, this._b = B[7] >>> 0 < C[7] >>> 0 ? 1 : 0;
          for (var v = 0; v < 8; v++) {
            var F = u[v] + B[v], A = F & 65535, m = F >>> 16, l = ((A * A >>> 17) + A * m >>> 15) + m * m, p = ((F & 4294901760) * F | 0) + ((F & 65535) * F | 0);
            x[v] = l ^ p;
          }
          u[0] = x[0] + (x[7] << 16 | x[7] >>> 16) + (x[6] << 16 | x[6] >>> 16) | 0, u[1] = x[1] + (x[0] << 8 | x[0] >>> 24) + x[7] | 0, u[2] = x[2] + (x[1] << 16 | x[1] >>> 16) + (x[0] << 16 | x[0] >>> 16) | 0, u[3] = x[3] + (x[2] << 8 | x[2] >>> 24) + x[1] | 0, u[4] = x[4] + (x[3] << 16 | x[3] >>> 16) + (x[2] << 16 | x[2] >>> 16) | 0, u[5] = x[5] + (x[4] << 8 | x[4] >>> 24) + x[3] | 0, u[6] = x[6] + (x[5] << 16 | x[5] >>> 16) + (x[4] << 16 | x[4] >>> 16) | 0, u[7] = x[7] + (x[6] << 8 | x[6] >>> 24) + x[5] | 0;
        }
        a.Rabbit = d._createHelper(f);
      }(), o.Rabbit;
    });
  }(gr)), gr.exports;
}
var wr = { exports: {} }, Ct;
function Oe() {
  return Ct || (Ct = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), k0(), R0(), w0(), s0());
    })(K, function(o) {
      return function() {
        var a = o, h = a.lib, d = h.StreamCipher, g = a.algo, i = [], C = [], x = [], f = g.RabbitLegacy = d.extend({
          _doReset: function() {
            var u = this._key.words, B = this.cfg.iv, v = this._X = [
              u[0],
              u[3] << 16 | u[2] >>> 16,
              u[1],
              u[0] << 16 | u[3] >>> 16,
              u[2],
              u[1] << 16 | u[0] >>> 16,
              u[3],
              u[2] << 16 | u[1] >>> 16
            ], F = this._C = [
              u[2] << 16 | u[2] >>> 16,
              u[0] & 4294901760 | u[1] & 65535,
              u[3] << 16 | u[3] >>> 16,
              u[1] & 4294901760 | u[2] & 65535,
              u[0] << 16 | u[0] >>> 16,
              u[2] & 4294901760 | u[3] & 65535,
              u[1] << 16 | u[1] >>> 16,
              u[3] & 4294901760 | u[0] & 65535
            ];
            this._b = 0;
            for (var A = 0; A < 4; A++)
              w.call(this);
            for (var A = 0; A < 8; A++)
              F[A] ^= v[A + 4 & 7];
            if (B) {
              var m = B.words, l = m[0], p = m[1], E = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, b = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360, D = E >>> 16 | b & 4294901760, S = b << 16 | E & 65535;
              F[0] ^= E, F[1] ^= D, F[2] ^= b, F[3] ^= S, F[4] ^= E, F[5] ^= D, F[6] ^= b, F[7] ^= S;
              for (var A = 0; A < 4; A++)
                w.call(this);
            }
          },
          _doProcessBlock: function(u, B) {
            var v = this._X;
            w.call(this), i[0] = v[0] ^ v[5] >>> 16 ^ v[3] << 16, i[1] = v[2] ^ v[7] >>> 16 ^ v[5] << 16, i[2] = v[4] ^ v[1] >>> 16 ^ v[7] << 16, i[3] = v[6] ^ v[3] >>> 16 ^ v[1] << 16;
            for (var F = 0; F < 4; F++)
              i[F] = (i[F] << 8 | i[F] >>> 24) & 16711935 | (i[F] << 24 | i[F] >>> 8) & 4278255360, u[B + F] ^= i[F];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function w() {
          for (var u = this._X, B = this._C, v = 0; v < 8; v++)
            C[v] = B[v];
          B[0] = B[0] + 1295307597 + this._b | 0, B[1] = B[1] + 3545052371 + (B[0] >>> 0 < C[0] >>> 0 ? 1 : 0) | 0, B[2] = B[2] + 886263092 + (B[1] >>> 0 < C[1] >>> 0 ? 1 : 0) | 0, B[3] = B[3] + 1295307597 + (B[2] >>> 0 < C[2] >>> 0 ? 1 : 0) | 0, B[4] = B[4] + 3545052371 + (B[3] >>> 0 < C[3] >>> 0 ? 1 : 0) | 0, B[5] = B[5] + 886263092 + (B[4] >>> 0 < C[4] >>> 0 ? 1 : 0) | 0, B[6] = B[6] + 1295307597 + (B[5] >>> 0 < C[5] >>> 0 ? 1 : 0) | 0, B[7] = B[7] + 3545052371 + (B[6] >>> 0 < C[6] >>> 0 ? 1 : 0) | 0, this._b = B[7] >>> 0 < C[7] >>> 0 ? 1 : 0;
          for (var v = 0; v < 8; v++) {
            var F = u[v] + B[v], A = F & 65535, m = F >>> 16, l = ((A * A >>> 17) + A * m >>> 15) + m * m, p = ((F & 4294901760) * F | 0) + ((F & 65535) * F | 0);
            x[v] = l ^ p;
          }
          u[0] = x[0] + (x[7] << 16 | x[7] >>> 16) + (x[6] << 16 | x[6] >>> 16) | 0, u[1] = x[1] + (x[0] << 8 | x[0] >>> 24) + x[7] | 0, u[2] = x[2] + (x[1] << 16 | x[1] >>> 16) + (x[0] << 16 | x[0] >>> 16) | 0, u[3] = x[3] + (x[2] << 8 | x[2] >>> 24) + x[1] | 0, u[4] = x[4] + (x[3] << 16 | x[3] >>> 16) + (x[2] << 16 | x[2] >>> 16) | 0, u[5] = x[5] + (x[4] << 8 | x[4] >>> 24) + x[3] | 0, u[6] = x[6] + (x[5] << 16 | x[5] >>> 16) + (x[4] << 16 | x[4] >>> 16) | 0, u[7] = x[7] + (x[6] << 8 | x[6] >>> 24) + x[5] | 0;
        }
        a.RabbitLegacy = d._createHelper(f);
      }(), o.RabbitLegacy;
    });
  }(wr)), wr.exports;
}
var _r = { exports: {} }, Ft;
function We() {
  return Ft || (Ft = 1, function(t, c) {
    (function(o, a, h) {
      t.exports = a(Z(), k0(), R0(), w0(), s0());
    })(K, function(o) {
      return function() {
        var a = o, h = a.lib, d = h.BlockCipher, g = a.algo;
        const i = 16, C = [
          608135816,
          2242054355,
          320440878,
          57701188,
          2752067618,
          698298832,
          137296536,
          3964562569,
          1160258022,
          953160567,
          3193202383,
          887688300,
          3232508343,
          3380367581,
          1065670069,
          3041331479,
          2450970073,
          2306472731
        ], x = [
          [
            3509652390,
            2564797868,
            805139163,
            3491422135,
            3101798381,
            1780907670,
            3128725573,
            4046225305,
            614570311,
            3012652279,
            134345442,
            2240740374,
            1667834072,
            1901547113,
            2757295779,
            4103290238,
            227898511,
            1921955416,
            1904987480,
            2182433518,
            2069144605,
            3260701109,
            2620446009,
            720527379,
            3318853667,
            677414384,
            3393288472,
            3101374703,
            2390351024,
            1614419982,
            1822297739,
            2954791486,
            3608508353,
            3174124327,
            2024746970,
            1432378464,
            3864339955,
            2857741204,
            1464375394,
            1676153920,
            1439316330,
            715854006,
            3033291828,
            289532110,
            2706671279,
            2087905683,
            3018724369,
            1668267050,
            732546397,
            1947742710,
            3462151702,
            2609353502,
            2950085171,
            1814351708,
            2050118529,
            680887927,
            999245976,
            1800124847,
            3300911131,
            1713906067,
            1641548236,
            4213287313,
            1216130144,
            1575780402,
            4018429277,
            3917837745,
            3693486850,
            3949271944,
            596196993,
            3549867205,
            258830323,
            2213823033,
            772490370,
            2760122372,
            1774776394,
            2652871518,
            566650946,
            4142492826,
            1728879713,
            2882767088,
            1783734482,
            3629395816,
            2517608232,
            2874225571,
            1861159788,
            326777828,
            3124490320,
            2130389656,
            2716951837,
            967770486,
            1724537150,
            2185432712,
            2364442137,
            1164943284,
            2105845187,
            998989502,
            3765401048,
            2244026483,
            1075463327,
            1455516326,
            1322494562,
            910128902,
            469688178,
            1117454909,
            936433444,
            3490320968,
            3675253459,
            1240580251,
            122909385,
            2157517691,
            634681816,
            4142456567,
            3825094682,
            3061402683,
            2540495037,
            79693498,
            3249098678,
            1084186820,
            1583128258,
            426386531,
            1761308591,
            1047286709,
            322548459,
            995290223,
            1845252383,
            2603652396,
            3431023940,
            2942221577,
            3202600964,
            3727903485,
            1712269319,
            422464435,
            3234572375,
            1170764815,
            3523960633,
            3117677531,
            1434042557,
            442511882,
            3600875718,
            1076654713,
            1738483198,
            4213154764,
            2393238008,
            3677496056,
            1014306527,
            4251020053,
            793779912,
            2902807211,
            842905082,
            4246964064,
            1395751752,
            1040244610,
            2656851899,
            3396308128,
            445077038,
            3742853595,
            3577915638,
            679411651,
            2892444358,
            2354009459,
            1767581616,
            3150600392,
            3791627101,
            3102740896,
            284835224,
            4246832056,
            1258075500,
            768725851,
            2589189241,
            3069724005,
            3532540348,
            1274779536,
            3789419226,
            2764799539,
            1660621633,
            3471099624,
            4011903706,
            913787905,
            3497959166,
            737222580,
            2514213453,
            2928710040,
            3937242737,
            1804850592,
            3499020752,
            2949064160,
            2386320175,
            2390070455,
            2415321851,
            4061277028,
            2290661394,
            2416832540,
            1336762016,
            1754252060,
            3520065937,
            3014181293,
            791618072,
            3188594551,
            3933548030,
            2332172193,
            3852520463,
            3043980520,
            413987798,
            3465142937,
            3030929376,
            4245938359,
            2093235073,
            3534596313,
            375366246,
            2157278981,
            2479649556,
            555357303,
            3870105701,
            2008414854,
            3344188149,
            4221384143,
            3956125452,
            2067696032,
            3594591187,
            2921233993,
            2428461,
            544322398,
            577241275,
            1471733935,
            610547355,
            4027169054,
            1432588573,
            1507829418,
            2025931657,
            3646575487,
            545086370,
            48609733,
            2200306550,
            1653985193,
            298326376,
            1316178497,
            3007786442,
            2064951626,
            458293330,
            2589141269,
            3591329599,
            3164325604,
            727753846,
            2179363840,
            146436021,
            1461446943,
            4069977195,
            705550613,
            3059967265,
            3887724982,
            4281599278,
            3313849956,
            1404054877,
            2845806497,
            146425753,
            1854211946
          ],
          [
            1266315497,
            3048417604,
            3681880366,
            3289982499,
            290971e4,
            1235738493,
            2632868024,
            2414719590,
            3970600049,
            1771706367,
            1449415276,
            3266420449,
            422970021,
            1963543593,
            2690192192,
            3826793022,
            1062508698,
            1531092325,
            1804592342,
            2583117782,
            2714934279,
            4024971509,
            1294809318,
            4028980673,
            1289560198,
            2221992742,
            1669523910,
            35572830,
            157838143,
            1052438473,
            1016535060,
            1802137761,
            1753167236,
            1386275462,
            3080475397,
            2857371447,
            1040679964,
            2145300060,
            2390574316,
            1461121720,
            2956646967,
            4031777805,
            4028374788,
            33600511,
            2920084762,
            1018524850,
            629373528,
            3691585981,
            3515945977,
            2091462646,
            2486323059,
            586499841,
            988145025,
            935516892,
            3367335476,
            2599673255,
            2839830854,
            265290510,
            3972581182,
            2759138881,
            3795373465,
            1005194799,
            847297441,
            406762289,
            1314163512,
            1332590856,
            1866599683,
            4127851711,
            750260880,
            613907577,
            1450815602,
            3165620655,
            3734664991,
            3650291728,
            3012275730,
            3704569646,
            1427272223,
            778793252,
            1343938022,
            2676280711,
            2052605720,
            1946737175,
            3164576444,
            3914038668,
            3967478842,
            3682934266,
            1661551462,
            3294938066,
            4011595847,
            840292616,
            3712170807,
            616741398,
            312560963,
            711312465,
            1351876610,
            322626781,
            1910503582,
            271666773,
            2175563734,
            1594956187,
            70604529,
            3617834859,
            1007753275,
            1495573769,
            4069517037,
            2549218298,
            2663038764,
            504708206,
            2263041392,
            3941167025,
            2249088522,
            1514023603,
            1998579484,
            1312622330,
            694541497,
            2582060303,
            2151582166,
            1382467621,
            776784248,
            2618340202,
            3323268794,
            2497899128,
            2784771155,
            503983604,
            4076293799,
            907881277,
            423175695,
            432175456,
            1378068232,
            4145222326,
            3954048622,
            3938656102,
            3820766613,
            2793130115,
            2977904593,
            26017576,
            3274890735,
            3194772133,
            1700274565,
            1756076034,
            4006520079,
            3677328699,
            720338349,
            1533947780,
            354530856,
            688349552,
            3973924725,
            1637815568,
            332179504,
            3949051286,
            53804574,
            2852348879,
            3044236432,
            1282449977,
            3583942155,
            3416972820,
            4006381244,
            1617046695,
            2628476075,
            3002303598,
            1686838959,
            431878346,
            2686675385,
            1700445008,
            1080580658,
            1009431731,
            832498133,
            3223435511,
            2605976345,
            2271191193,
            2516031870,
            1648197032,
            4164389018,
            2548247927,
            300782431,
            375919233,
            238389289,
            3353747414,
            2531188641,
            2019080857,
            1475708069,
            455242339,
            2609103871,
            448939670,
            3451063019,
            1395535956,
            2413381860,
            1841049896,
            1491858159,
            885456874,
            4264095073,
            4001119347,
            1565136089,
            3898914787,
            1108368660,
            540939232,
            1173283510,
            2745871338,
            3681308437,
            4207628240,
            3343053890,
            4016749493,
            1699691293,
            1103962373,
            3625875870,
            2256883143,
            3830138730,
            1031889488,
            3479347698,
            1535977030,
            4236805024,
            3251091107,
            2132092099,
            1774941330,
            1199868427,
            1452454533,
            157007616,
            2904115357,
            342012276,
            595725824,
            1480756522,
            206960106,
            497939518,
            591360097,
            863170706,
            2375253569,
            3596610801,
            1814182875,
            2094937945,
            3421402208,
            1082520231,
            3463918190,
            2785509508,
            435703966,
            3908032597,
            1641649973,
            2842273706,
            3305899714,
            1510255612,
            2148256476,
            2655287854,
            3276092548,
            4258621189,
            236887753,
            3681803219,
            274041037,
            1734335097,
            3815195456,
            3317970021,
            1899903192,
            1026095262,
            4050517792,
            356393447,
            2410691914,
            3873677099,
            3682840055
          ],
          [
            3913112168,
            2491498743,
            4132185628,
            2489919796,
            1091903735,
            1979897079,
            3170134830,
            3567386728,
            3557303409,
            857797738,
            1136121015,
            1342202287,
            507115054,
            2535736646,
            337727348,
            3213592640,
            1301675037,
            2528481711,
            1895095763,
            1721773893,
            3216771564,
            62756741,
            2142006736,
            835421444,
            2531993523,
            1442658625,
            3659876326,
            2882144922,
            676362277,
            1392781812,
            170690266,
            3921047035,
            1759253602,
            3611846912,
            1745797284,
            664899054,
            1329594018,
            3901205900,
            3045908486,
            2062866102,
            2865634940,
            3543621612,
            3464012697,
            1080764994,
            553557557,
            3656615353,
            3996768171,
            991055499,
            499776247,
            1265440854,
            648242737,
            3940784050,
            980351604,
            3713745714,
            1749149687,
            3396870395,
            4211799374,
            3640570775,
            1161844396,
            3125318951,
            1431517754,
            545492359,
            4268468663,
            3499529547,
            1437099964,
            2702547544,
            3433638243,
            2581715763,
            2787789398,
            1060185593,
            1593081372,
            2418618748,
            4260947970,
            69676912,
            2159744348,
            86519011,
            2512459080,
            3838209314,
            1220612927,
            3339683548,
            133810670,
            1090789135,
            1078426020,
            1569222167,
            845107691,
            3583754449,
            4072456591,
            1091646820,
            628848692,
            1613405280,
            3757631651,
            526609435,
            236106946,
            48312990,
            2942717905,
            3402727701,
            1797494240,
            859738849,
            992217954,
            4005476642,
            2243076622,
            3870952857,
            3732016268,
            765654824,
            3490871365,
            2511836413,
            1685915746,
            3888969200,
            1414112111,
            2273134842,
            3281911079,
            4080962846,
            172450625,
            2569994100,
            980381355,
            4109958455,
            2819808352,
            2716589560,
            2568741196,
            3681446669,
            3329971472,
            1835478071,
            660984891,
            3704678404,
            4045999559,
            3422617507,
            3040415634,
            1762651403,
            1719377915,
            3470491036,
            2693910283,
            3642056355,
            3138596744,
            1364962596,
            2073328063,
            1983633131,
            926494387,
            3423689081,
            2150032023,
            4096667949,
            1749200295,
            3328846651,
            309677260,
            2016342300,
            1779581495,
            3079819751,
            111262694,
            1274766160,
            443224088,
            298511866,
            1025883608,
            3806446537,
            1145181785,
            168956806,
            3641502830,
            3584813610,
            1689216846,
            3666258015,
            3200248200,
            1692713982,
            2646376535,
            4042768518,
            1618508792,
            1610833997,
            3523052358,
            4130873264,
            2001055236,
            3610705100,
            2202168115,
            4028541809,
            2961195399,
            1006657119,
            2006996926,
            3186142756,
            1430667929,
            3210227297,
            1314452623,
            4074634658,
            4101304120,
            2273951170,
            1399257539,
            3367210612,
            3027628629,
            1190975929,
            2062231137,
            2333990788,
            2221543033,
            2438960610,
            1181637006,
            548689776,
            2362791313,
            3372408396,
            3104550113,
            3145860560,
            296247880,
            1970579870,
            3078560182,
            3769228297,
            1714227617,
            3291629107,
            3898220290,
            166772364,
            1251581989,
            493813264,
            448347421,
            195405023,
            2709975567,
            677966185,
            3703036547,
            1463355134,
            2715995803,
            1338867538,
            1343315457,
            2802222074,
            2684532164,
            233230375,
            2599980071,
            2000651841,
            3277868038,
            1638401717,
            4028070440,
            3237316320,
            6314154,
            819756386,
            300326615,
            590932579,
            1405279636,
            3267499572,
            3150704214,
            2428286686,
            3959192993,
            3461946742,
            1862657033,
            1266418056,
            963775037,
            2089974820,
            2263052895,
            1917689273,
            448879540,
            3550394620,
            3981727096,
            150775221,
            3627908307,
            1303187396,
            508620638,
            2975983352,
            2726630617,
            1817252668,
            1876281319,
            1457606340,
            908771278,
            3720792119,
            3617206836,
            2455994898,
            1729034894,
            1080033504
          ],
          [
            976866871,
            3556439503,
            2881648439,
            1522871579,
            1555064734,
            1336096578,
            3548522304,
            2579274686,
            3574697629,
            3205460757,
            3593280638,
            3338716283,
            3079412587,
            564236357,
            2993598910,
            1781952180,
            1464380207,
            3163844217,
            3332601554,
            1699332808,
            1393555694,
            1183702653,
            3581086237,
            1288719814,
            691649499,
            2847557200,
            2895455976,
            3193889540,
            2717570544,
            1781354906,
            1676643554,
            2592534050,
            3230253752,
            1126444790,
            2770207658,
            2633158820,
            2210423226,
            2615765581,
            2414155088,
            3127139286,
            673620729,
            2805611233,
            1269405062,
            4015350505,
            3341807571,
            4149409754,
            1057255273,
            2012875353,
            2162469141,
            2276492801,
            2601117357,
            993977747,
            3918593370,
            2654263191,
            753973209,
            36408145,
            2530585658,
            25011837,
            3520020182,
            2088578344,
            530523599,
            2918365339,
            1524020338,
            1518925132,
            3760827505,
            3759777254,
            1202760957,
            3985898139,
            3906192525,
            674977740,
            4174734889,
            2031300136,
            2019492241,
            3983892565,
            4153806404,
            3822280332,
            352677332,
            2297720250,
            60907813,
            90501309,
            3286998549,
            1016092578,
            2535922412,
            2839152426,
            457141659,
            509813237,
            4120667899,
            652014361,
            1966332200,
            2975202805,
            55981186,
            2327461051,
            676427537,
            3255491064,
            2882294119,
            3433927263,
            1307055953,
            942726286,
            933058658,
            2468411793,
            3933900994,
            4215176142,
            1361170020,
            2001714738,
            2830558078,
            3274259782,
            1222529897,
            1679025792,
            2729314320,
            3714953764,
            1770335741,
            151462246,
            3013232138,
            1682292957,
            1483529935,
            471910574,
            1539241949,
            458788160,
            3436315007,
            1807016891,
            3718408830,
            978976581,
            1043663428,
            3165965781,
            1927990952,
            4200891579,
            2372276910,
            3208408903,
            3533431907,
            1412390302,
            2931980059,
            4132332400,
            1947078029,
            3881505623,
            4168226417,
            2941484381,
            1077988104,
            1320477388,
            886195818,
            18198404,
            3786409e3,
            2509781533,
            112762804,
            3463356488,
            1866414978,
            891333506,
            18488651,
            661792760,
            1628790961,
            3885187036,
            3141171499,
            876946877,
            2693282273,
            1372485963,
            791857591,
            2686433993,
            3759982718,
            3167212022,
            3472953795,
            2716379847,
            445679433,
            3561995674,
            3504004811,
            3574258232,
            54117162,
            3331405415,
            2381918588,
            3769707343,
            4154350007,
            1140177722,
            4074052095,
            668550556,
            3214352940,
            367459370,
            261225585,
            2610173221,
            4209349473,
            3468074219,
            3265815641,
            314222801,
            3066103646,
            3808782860,
            282218597,
            3406013506,
            3773591054,
            379116347,
            1285071038,
            846784868,
            2669647154,
            3771962079,
            3550491691,
            2305946142,
            453669953,
            1268987020,
            3317592352,
            3279303384,
            3744833421,
            2610507566,
            3859509063,
            266596637,
            3847019092,
            517658769,
            3462560207,
            3443424879,
            370717030,
            4247526661,
            2224018117,
            4143653529,
            4112773975,
            2788324899,
            2477274417,
            1456262402,
            2901442914,
            1517677493,
            1846949527,
            2295493580,
            3734397586,
            2176403920,
            1280348187,
            1908823572,
            3871786941,
            846861322,
            1172426758,
            3287448474,
            3383383037,
            1655181056,
            3139813346,
            901632758,
            1897031941,
            2986607138,
            3066810236,
            3447102507,
            1393639104,
            373351379,
            950779232,
            625454576,
            3124240540,
            4148612726,
            2007998917,
            544563296,
            2244738638,
            2330496472,
            2058025392,
            1291430526,
            424198748,
            50039436,
            29584100,
            3605783033,
            2429876329,
            2791104160,
            1057563949,
            3255363231,
            3075367218,
            3463963227,
            1469046755,
            985887462
          ]
        ];
        var f = {
          pbox: [],
          sbox: []
        };
        function w(A, m) {
          let l = m >> 24 & 255, p = m >> 16 & 255, E = m >> 8 & 255, b = m & 255, D = A.sbox[0][l] + A.sbox[1][p];
          return D = D ^ A.sbox[2][E], D = D + A.sbox[3][b], D;
        }
        function u(A, m, l) {
          let p = m, E = l, b;
          for (let D = 0; D < i; ++D)
            p = p ^ A.pbox[D], E = w(A, p) ^ E, b = p, p = E, E = b;
          return b = p, p = E, E = b, E = E ^ A.pbox[i], p = p ^ A.pbox[i + 1], { left: p, right: E };
        }
        function B(A, m, l) {
          let p = m, E = l, b;
          for (let D = i + 1; D > 1; --D)
            p = p ^ A.pbox[D], E = w(A, p) ^ E, b = p, p = E, E = b;
          return b = p, p = E, E = b, E = E ^ A.pbox[1], p = p ^ A.pbox[0], { left: p, right: E };
        }
        function v(A, m, l) {
          for (let S = 0; S < 4; S++) {
            A.sbox[S] = [];
            for (let T = 0; T < 256; T++)
              A.sbox[S][T] = x[S][T];
          }
          let p = 0;
          for (let S = 0; S < i + 2; S++)
            A.pbox[S] = C[S] ^ m[p], p++, p >= l && (p = 0);
          let E = 0, b = 0, D = 0;
          for (let S = 0; S < i + 2; S += 2)
            D = u(A, E, b), E = D.left, b = D.right, A.pbox[S] = E, A.pbox[S + 1] = b;
          for (let S = 0; S < 4; S++)
            for (let T = 0; T < 256; T += 2)
              D = u(A, E, b), E = D.left, b = D.right, A.sbox[S][T] = E, A.sbox[S][T + 1] = b;
          return !0;
        }
        var F = g.Blowfish = d.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var A = this._keyPriorReset = this._key, m = A.words, l = A.sigBytes / 4;
              v(f, m, l);
            }
          },
          encryptBlock: function(A, m) {
            var l = u(f, A[m], A[m + 1]);
            A[m] = l.left, A[m + 1] = l.right;
          },
          decryptBlock: function(A, m) {
            var l = B(f, A[m], A[m + 1]);
            A[m] = l.left, A[m + 1] = l.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        a.Blowfish = d._createHelper(F);
      }(), o.Blowfish;
    });
  }(_r)), _r.exports;
}
(function(t, c) {
  (function(o, a, h) {
    t.exports = a(Z(), M0(), Be(), ve(), k0(), Ee(), R0(), Rt(), Tr(), Ae(), St(), Ce(), Fe(), ye(), Hr(), ge(), w0(), s0(), we(), _e(), me(), be(), De(), ke(), Re(), Se(), Ne(), Te(), He(), Pe(), Ue(), qe(), ze(), Oe(), We());
  })(K, function(o) {
    return o;
  });
})(kt);
var Ve = kt.exports;
const Nt = /* @__PURE__ */ ee(Ve);
window.Buffer = D0.Buffer;
const Me = D0.Buffer.alloc(32), Ge = `
account-id`, $e = (t) => t < 0 ? (Number(t) >>> 0).toString(16) : Number(t).toString(16), Xe = (t) => {
  const c = te.unsigned(D0.Buffer.from(t));
  return $e(c).padStart(8, "0");
}, yt = (t) => {
  const c = [];
  let o;
  for (o = 0; o < t.length; o += 1)
    c[o / 4 | 0] |= t[o] << 24 - 8 * o;
  return Nt.lib.WordArray.create(c, t.length);
}, Ke = (t, c) => {
  const o = [];
  return c > 0 && o.push(t >>> 24), c > 1 && o.push(t >>> 16 & 255), c > 2 && o.push(t >>> 8 & 255), c > 3 && o.push(t & 255), o;
}, Ze = (t, c) => {
  t.hasOwnProperty("sigBytes") && t.hasOwnProperty("words") && (c = t.sigBytes, t = t.words);
  let o = [], a, h = 0;
  for (; c > 0; )
    a = Ke(t[h], Math.min(4, c)), c -= a.length, o = [...o, a], h++;
  return [].concat.apply([], o);
}, G0 = (t, c = "") => {
  try {
    var o = kr.from(t);
    const a = Nt.algo.SHA224.create();
    a.update(Ge), a.update(yt(o.toUint8Array()));
    const h = D0.Buffer.from(Me);
    c && h.writeUInt32BE(c), a.update(yt(h));
    const d = a.finalize(), g = Ze(d, 28);
    return Xe(g) + d.toString();
  } catch (a) {
    return console.log(a), !1;
  }
}, Ye = {
  readyState: "Loadable",
  url: "http://localhost:4943",
  authClient: !0,
  connectWallet: async function(t = { whitelist: [], host: "", identityProvider: "" }) {
    var c = this, o = {};
    return c.authClient = await Dr.create(), new Promise(async (a, h) => {
      var d = await c.authClient.isAuthenticated();
      d ? (o = await g(), a(o)) : c.authClient.login({
        identityProvider,
        onSuccess: async () => {
          o = await g(), a(o);
        }
      });
      async function g() {
        var i = await c.authClient.getIdentity(), C = await (i == null ? void 0 : i.getPrincipal());
        c.agent = new E0({ identity: i, host: t.host }), c.agent.fetchRootKey();
        var x = await G0(i == null ? void 0 : i.getPrincipal().toString());
        return c.createActor = async function(f = { canisterId: "", interfaceFactory: !1 }) {
          return !f.canisterId || !f.interfaceFactory ? !1 : await P0.createActor(f.interfaceFactory, { agent: this.agent, canisterId: f.canisterId });
        }, c.createAgent = async function() {
          return new E0({ identity: i, host: t.host });
        }, c.getPrincipal = async function() {
          return i.getPrincipal();
        }, c.disConnectWallet = async function() {
          await c.authClient.logout();
        }, { accountId: x, principalId: C.toString() };
      }
    });
  }
};
window.ic && window.ic.plug && window.ic.plug.init();
window.onload = function() {
  window.ic.plug && (je.readyState = "Installed");
};
const je = {
  readyState: "NotDetected",
  url: "https://plugwallet.ooo/",
  connectWallet: async function(t = { whitelist: [], host: "" }) {
    window.ic.plug || (this.readyState = "NotDetected", window.open("https://plugwallet.ooo/"));
    var c = !1, o = !1, a = !1;
    new Promise((d) => {
      setTimeout(() => {
        d(!1);
      }, 3e3);
    }), a = await window.ic.plug.isConnected();
    try {
      a ? await window.ic.plug.createAgent(t) : c = await window.ic.plug.requestConnect(t), o = await window.ic.plug.agent.getPrincipal();
      var h = await window.ic.plug.sessionManager.getSession();
      return this.agent = window.ic.plug.agent, this.getPrincipal = async function() {
        return window.ic.plug.getPrincipal();
      }, this.createActor = async function(d, g) {
        return window.ic.plug.createActor(d, g);
      }, this.batchTransactions = async function(d, g = { state: "init", txList: [] }) {
        return g && g.txList > 0 && d.forEach((i, C) => {
          d[C].onSuccess = () => {
            g.state = txList[C], i.onSuccess();
          };
        }), window.ic.plug.batchTransactions(d);
      }, { accountId: h.accountId, principalId: o.toString() };
    } catch {
      return !1;
    }
  },
  disConnectWallet: async function() {
    await window.ic.plug.disconnect();
  }
};
window.Buffer = D0.Buffer;
D0.Buffer.from(new TextEncoder().encode(`
ic-request`));
var Qe = "https://www.stoicwallet.com", mr, O0, Je, gt = {}, wt = {};
function Ie(t) {
  wt[t].parentNode.removeChild(wt[t]);
}
window.addEventListener("message", function(t) {
  t.origin == Qe && (t && t.data && t.data.target === "STOIC-EXT" ? (typeof t.data.success < "u" && t.data.success ? gt[t.data.listener][0](t.data.data) : gt[t.data.listener][1](t.data.data), Ie(t.data.listener)) : t.data.action == "initiateStoicConnect" ? mr.postMessage({ action: "requestAuthorization", apikey: Je }, "*") : t.data.action == "rejectAuthorization" ? (O0[1]("Authorization Rejected"), O0 = null, mr.close()) : t.data.action == "confirmAuthorization" && (O0[0](t.data), O0 = null, mr.close()));
}, !1);
window.icx = new Zt();
const z0 = {
  providerUrl: "https://63k2f-nyaaa-aaaah-aakla-cai.raw.ic0.app",
  delegationModes: ["global"],
  ledgerHost: "https://icp0.io/"
}, Le = async (t = "", c = []) => await Kt.create({
  useFrame: !(window.innerWidth < 768),
  signerProviderUrl: `${z0.providerUrl}/#signer`,
  walletProviderUrl: `${z0.providerUrl}/#transaction`,
  identityProvider: `${z0.providerUrl}/#authorize`,
  host: t || z0.ledgerHost,
  ledgerHost: t || z0.ledgerHost,
  ledgerCanisterId: "ryjl3-tyaaa-aaaaa-aaaba-cai",
  permissions: ["permissions-identity", "permissions-wallet"],
  delegationTargets: c,
  noUnify: !1
});
var _t;
(_t = window.ic) != null && _t.astrox || Le();
const rn = {
  readyState: "Loadable",
  url: "https://nfid.one/",
  authClient: !1,
  connectWallet: async function(t = { whitelist: [], host: "" }) {
    var c = this, o = {};
    return c.authClient = await Dr.create(), new Promise(async (a, h) => {
      var d = await c.authClient.isAuthenticated();
      d ? (o = await g(), a(o)) : c.authClient.login({
        identityProvider: "https://nfid.one/authenticate/?applicationName=" + window.location.hostname,
        windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,
        onSuccess: async () => {
          o = await g(), a(o);
        }
      });
      async function g() {
        var i = await c.authClient.getIdentity(), C = await (i == null ? void 0 : i.getPrincipal());
        c.agent = new E0({
          identity: i,
          host: t.host
        });
        var x = await G0(
          i == null ? void 0 : i.getPrincipal().toString()
        );
        return c.createActor = async function(f = { canisterId: "", interfaceFactory: !1 }) {
          return !f.canisterId || !f.interfaceFactory ? !1 : await P0.createActor(f.interfaceFactory, {
            agent: this.agent,
            canisterId: f.canisterId
          });
        }, c.createAgent = async function() {
          return new E0({ identity: i, host: t.host });
        }, c.getPrincipal = async function() {
          return i.getPrincipal();
        }, c.disConnectWallet = async function() {
          await c.authClient.logout();
        }, { accountId: x, principalId: C.toString() };
      }
    });
  }
};
var mt;
(mt = window == null ? void 0 : window.ethereum) != null && mt.isMetaMask;
const tn = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20880%20640'%20style='enable-background:new%200%200%20880%20640;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:none;}%20.st1{fill:url(%23SVGID_1_);}%20.st2{fill:url(%23SVGID_2_);}%20.st3{fill:%2329ABE2;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M671.99,320c0-45.09-37.63-81.78-83.89-81.78c-12.26,0-33.8,6.07-66.78,34.97%20c-17.73,15.54-33.17,32.87-43.85,45.55c17.99,19.05,37.47,39.23,46.31,46.89c3.63,3.14,27.63,22.81,56.09,35.14%20c3.34,0.74,6.06,1,8.16,1C634.34,401.5,671.99,364.84,671.99,320z'/%3e%3cpath%20class='st0'%20d='M522.89,366.54c27.22,23.59,45.72,31.74,56.98,34.24c3.34,0.74,6.06,1,8.16,1%20c46.3-0.28,83.95-36.94,83.95-81.78c0-45.09-37.63-81.78-83.89-81.78c-12.26,0-33.8,6.07-66.78,34.97%20c-17.73,15.54-33.17,32.87-43.85,45.55C477.21,319.05,504.3,350.43,522.89,366.54z'/%3e%3clinearGradient%20id='SVGID_1_'%20gradientUnits='userSpaceOnUse'%20x1='515.2743'%20y1='201.9346'%20x2='705.4849'%20y2='398.9034'%3e%3cstop%20offset='0.21'%20style='stop-color:%23F15A24'/%3e%3cstop%20offset='0.6841'%20style='stop-color:%23FBB03B'/%3e%3c/linearGradient%3e%3cpath%20class='st1'%20d='M588.1,184c-32.16,0-67.28,16.49-104.38,49c-17.57,15.4-32.8,31.88-44.23,45.1c0.02,0.02,0.04,0.04,0.06,0.07%20c0.03-0.04,0.05-0.06,0.05-0.06s18.03,19.63,37.87,40.64c10.68-12.69,26.11-30.01,43.85-45.55c32.98-28.91,54.52-34.97,66.78-34.97%20c46.26,0,83.89,36.69,83.89,81.78c0,44.84-37.65,81.5-83.95,81.78c-2.11,0-4.82-0.26-8.16-1c13.49,5.84,27.99,10.04,41.8,10.04%20c84.79,0,101.36-55.33,102.49-59.25c2.51-10.14,3.84-20.7,3.84-31.56C728,245.01,665.24,184,588.1,184z'/%3e%3cpath%20class='st0'%20d='M208.01,320c0,45.09,37.63,81.78,83.89,81.78c12.26,0,33.8-6.07,66.78-34.97%20c17.73-15.54,33.17-32.87,43.85-45.55c-17.99-19.05-37.47-39.23-46.31-46.89c-3.63-3.14-27.63-22.81-56.09-35.14%20c-3.34-0.74-6.06-1-8.16-1C245.66,238.5,208.01,275.16,208.01,320z'/%3e%3cpath%20class='st0'%20d='M357.11,273.46c-27.22-23.59-45.72-31.74-56.98-34.24c-3.34-0.74-6.06-1-8.16-1%20c-46.3,0.28-83.95,36.94-83.95,81.78c0,45.09,37.63,81.78,83.89,81.78c12.26,0,33.8-6.07,66.78-34.97%20c17.73-15.54,33.17-32.87,43.85-45.55c0.26-0.3,0.52-0.62,0.78-0.92C392.12,307.51,375.7,289.57,357.11,273.46z'/%3e%3clinearGradient%20id='SVGID_2_'%20gradientUnits='userSpaceOnUse'%20x1='-877.3035'%20y1='-1122.6819'%20x2='-687.0928'%20y2='-925.7131'%20gradientTransform='matrix(-1%200%200%20-1%20-512.5778%20-684.6164)'%3e%3cstop%20offset='0.21'%20style='stop-color:%23ED1E79'/%3e%3cstop%20offset='0.8929'%20style='stop-color:%23522785'/%3e%3c/linearGradient%3e%3cpath%20class='st2'%20d='M291.9,456c32.16,0,67.28-16.49,104.38-49c17.57-15.4,32.8-31.88,44.23-45.1c-0.02-0.02-0.04-0.04-0.06-0.07%20c-0.03,0.04-0.05,0.06-0.05,0.06s-18.03-19.63-37.87-40.64c-10.68,12.69-26.11,30.01-43.85,45.55%20c-32.98,28.91-54.52,34.97-66.78,34.97c-46.26,0-83.89-36.69-83.89-81.78c0-44.84,37.65-81.5,83.95-81.78c2.11,0,4.82,0.26,8.16,1%20c-13.49-5.84-27.99-10.04-41.8-10.04c-84.79,0-101.36,55.33-102.49,59.25c-2.51,10.14-3.84,20.7-3.84,31.56%20C152,394.99,214.76,456,291.9,456z'/%3e%3cpath%20class='st3'%20d='M621.52,409.45c-43.41-1.07-88.53-35.3-97.74-43.81c-23.78-21.99-78.66-81.53-82.97-86.2%20C400.58,234.4,346.07,184,291.9,184h-0.07h-0.07c-65.85,0.33-121.19,44.92-135.91,104.44c1.13-3.92,22.76-60.3,102.42-58.34%20c43.41,1.07,88.75,35.76,97.95,44.27c23.78,21.99,78.68,81.54,82.97,86.21C479.42,405.61,533.93,456,588.1,456h0.07h0.07%20c65.85-0.33,121.19-44.92,135.91-104.44C723.03,355.48,701.18,411.41,621.52,409.45z'/%3e%3c/g%3e%3c/svg%3e", en = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20fill='none'%3e%3cpath%20d='M11.794%202.433A1.162%201.162%200%200%200%2011.548.12L9.174.374c-1.216.13-2.191.234-2.983.378-.816.148-1.516.35-2.165.714a6.675%206.675%200%200%200-2.53%202.506c-.37.646-.578%201.343-.732%202.157C.614%206.919.5%207.893.36%209.106l-.006.052-.233%202.318a1.162%201.162%200%201%200%202.313.232l.231-2.3c.146-1.264.249-2.15.381-2.845.13-.682.275-1.1.467-1.436a4.35%204.35%200%200%201%201.648-1.633c.338-.19.76-.331%201.443-.455.699-.127%201.59-.223%202.86-.358l2.33-.248Zm22.613-1.28a1.162%201.162%200%200%200%201.033%201.28l2.33.248c1.27.135%202.16.231%202.859.358.684.124%201.105.265%201.443.455a4.35%204.35%200%200%201%201.648%201.633c.193.335.337.754.467%201.436.132.695.235%201.581.38%202.844l.232%202.302a1.162%201.162%200%201%200%202.313-.233l-.233-2.318-.006-.052c-.14-1.214-.252-2.187-.402-2.977-.155-.814-.364-1.511-.734-2.157a6.675%206.675%200%200%200-2.529-2.506c-.65-.364-1.349-.566-2.165-.714-.792-.144-1.767-.248-2.983-.378L35.686.121a1.162%201.162%200%200%200-1.279%201.033Zm0%2044.923a1.162%201.162%200%200%201%201.033-1.28l2.33-.248c1.27-.135%202.16-.23%202.859-.357.684-.124%201.105-.266%201.443-.455a4.35%204.35%200%200%200%201.648-1.633c.193-.336.337-.755.467-1.437.132-.695.235-1.581.38-2.844l.232-2.301a1.162%201.162%200%201%201%202.313.233l-.233%202.317-.006.053c-.14%201.213-.252%202.186-.402%202.976-.155.814-.364%201.512-.734%202.158a6.675%206.675%200%200%201-2.529%202.506c-.65.364-1.349.566-2.165.714-.792.143-1.767.247-2.983.377l-2.374.253a1.162%201.162%200%200%201-1.279-1.032Zm-21.58%200a1.162%201.162%200%200%200-1.033-1.28l-2.33-.248c-1.27-.135-2.16-.23-2.859-.357-.684-.124-1.105-.266-1.443-.455a4.35%204.35%200%200%201-1.648-1.633c-.192-.336-.337-.755-.467-1.437-.132-.695-.235-1.581-.38-2.844l-.232-2.301a1.162%201.162%200%200%200-2.313.233l.233%202.317.006.053c.14%201.213.252%202.186.403%202.976.154.814.363%201.512.733%202.158a6.674%206.674%200%200%200%202.529%202.506c.65.364%201.349.566%202.165.714.792.143%201.767.247%202.983.377l2.374.253a1.162%201.162%200%200%200%201.279-1.032Zm-.636-31.422a1%201%200%200%200-1%201v16.264a1%201%200%200%200%201%201h3.166a1%201%200%200%200%201-1V15.654a1%201%200%200%200-1-1h-3.166Zm8.56%200a1%201%200%200%200-1%201v16.264a1%201%200%200%200%201%201h7.637c2%200%203.774-.374%205.322-1.122%201.548-.748%202.749-1.809%203.601-3.183.852-1.374%201.279-2.983%201.279-4.827%200-1.844-.427-3.453-1.279-4.827-.852-1.374-2.053-2.435-3.6-3.183-1.549-.748-3.323-1.122-5.323-1.122H20.75Zm11.185%2012.811c-.94.887-2.192%201.33-3.757%201.33h-2.962a.3.3%200%200%201-.3-.3v-9.419a.3.3%200%200%201%20.3-.3h2.962c1.565%200%202.818.444%203.757%201.331.957.887%201.435%202.114%201.435%203.68%200%201.565-.478%202.79-1.435%203.678Z'%20fill='url(%23a)'/%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='11.415'%20y1='15.756'%20x2='27.548'%20y2='39.206'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23CC5CDC'/%3e%3cstop%20offset='.245'%20stop-color='%237B66FF'/%3e%3cstop%20offset='.521'%20stop-color='%231F8AF0'/%3e%3cstop%20offset='.76'%20stop-color='%2300D1FF'/%3e%3cstop%20offset='1'%20stop-color='%233DEDD7'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", nn = [
  { id: "nns", name: "Internet Identity", icon: tn, adapter: Ye },
  // { id: 'plug', name: 'Plug Wallet', icon: BaseUrl + 'assets/plug.jpg', adapter: plug },
  // { id: 'astrox', name: 'AstroX ME', icon: BaseUrl + 'assets/astroxme.webp', adapter: astrox },
  // { id: 'bitfinity', name: 'Bitfinity Wallet', icon: BaseUrl + 'assets/bitfinity.svg', adapter: bitfinity },
  // { id: 'stoic', name: 'Stoic Wallet', icon: stoicLogo, adapter: stoic },
  { id: "nfid", name: "NFID", icon: en, adapter: rn }
  // { id: 'metamask', name: 'MetaMask', icon: BaseUrl + 'assets/metamask.svg', adapter: metaMask },
], Tt = class {
  constructor(c = {}, o) {
    a0(this, "state", "idle");
    //   'idle' ,'running', 'error' ,'done' 
    a0(this, "transactionLlist", {});
    a0(this, "stepsList", []);
    a0(this, "completed", []);
    a0(this, "activeStep", "");
    a0(this, "failedSteps", []);
    a0(this, "transactionResults", {});
    a0(this, "trxArray", []);
    a0(this, "_info", !1);
    a0(this, "_adapterObj", !1);
    a0(this, "_prepareTrxArry", function() {
      var c = this;
      c.trxArray = [];
      var o = [];
      Object.values(this.transactionLlist).forEach((h) => {
        o.push(h), h.updateNextStep && (c.trxArray.push(o), o = []);
      }), o.length > 0 && c.trxArray.push(o);
      var a = 0;
      return c.trxArray.forEach((h, d) => {
        h.forEach((g, i) => {
          c.trxArray[d][i].stepIndex = a, c.trxArray[d][i].state = "idle", c.trxArray[d][i].onSuccessMain = async (C, x) => {
            const f = x.stepIndex, w = g.onSuccess, u = g.onFail;
            if (C.err || C.Err || C.ERR)
              return c.failedSteps.push(c.stepsList[f]), c.transactionResults[c.stepsList[f]] = C, c.state = "error", x.state = "error", u && await u(C), !1;
            c.completed.push(c.stepsList[f]), c.activeStep = c.stepsList[f + 1], c.transactionResults[c.stepsList[f]] = C, x.state = "done", x.updateNextStep && c.trxArray[d + 1] && await x.updateNextStep(C, c.trxArray[d + 1][0]), w && await w(C);
          }, c.trxArray[d][i].onFailMain = async (C, x) => {
            const f = g.onFail, w = x.stepIndex;
            return console.error(`error in  ${c.stepsList[w]} `, c.trxArray[d][i]), console.error(C), c.failedSteps.push(c.stepsList[w]), c.activeStep = c.stepsList[w], c.state = "error", x.state = "error", f && await f(C), !1;
          }, a++;
        });
      }), c.trxArray;
    });
    if (!o || !o.provider) return !1;
    if (Object.entries(c).forEach(([a, h]) => {
      typeof h == "object" && (this.transactionLlist[a] = h);
    }), Object.keys(this.transactionLlist).length > 0)
      this.stepsList = Object.keys(this.transactionLlist), this._adapterObj = o;
    else return !1;
  }
  async retryExecute() {
    if (this.state != "error") return !1;
    this.trxArray = this.trxArray.map((o) => o.filter((a) => a.state !== "done")), this.state = "running", this._info = "", this.failedSteps = [];
    var c = await this._processBatch();
    return c;
  }
  async execute() {
    return this.state == "running" || !this._adapterObj || Object.keys(this.transactionLlist).length == 0 ? !1 : this.state == "done" ? this.transactionResults : (this.state = "running", this.failedSteps = [], this.trxArray = this._prepareTrxArry(), await this._processBatch());
  }
  async _processBatch() {
    if (!this.trxArray.length) return !1;
    var c = this;
    if (c.activeStep = c.completed.length > 0 ? c.stepsList[c.completed.length] : c.stepsList[0], ["bitfinity"].includes(this._adapterObj.walletActive)) {
      for (const h of c.trxArray) {
        if (c.state == "error" || c.state == "done") break;
        if (h.length)
          var o = await this._adapterObj.provider.batchTransactions(h);
      }
      return c.failedSteps.length == 0 ? (c.state = "done", c.transactionResults) : (c.state = "error", !1);
    } else if (["plug", "stoic", "dfinity", "astrox", "metamask", "nfid"].includes(this._adapterObj.walletActive))
      try {
        for (const h of c.trxArray) {
          if (c.state == "error" || c.state == "done") break;
          if (h.length)
            for (const d of h) {
              if (c.state == "error" || c.state == "done") break;
              var a = await c._adapterObj.getCanisterActor(d.canisterId, d.idl, !1, !0), o = !1;
              d.methodName ? d.args ? o = await a[d.methodName](...d.args) : o = await a[d.methodName]() : await d.onFailMain(o), o ? await d.onSuccessMain(o, d) : await d.onFailMain(o, d);
            }
        }
        return c.failedSteps.length == 0 ? (c.state = "done", c.transactionResults) : (c.state = "error", !1);
      } catch (h) {
        return c.state = "error", console.error(h), c._info = h, !1;
      }
    else
      return console.log("trx method not defined..."), c.state = "error", !1;
  }
}, H0 = "http://localhost:4943", an = 10 ** 8, b0 = "ryjl3-tyaaa-aaaaa-aaaba-cai", W0 = "nnsWallet", Ht = class {
  constructor(c = { whitelist: [b0], host: H0 }) {
    a0(this, "accountId", !1);
    a0(this, "principalId", !1);
    a0(this, "walletActive", "");
    a0(this, "provider", !1);
    a0(this, "balance", 0);
    a0(this, "canisterActors", {});
    a0(this, "anoncanisterActors", []);
    a0(this, "connectedWalletInfo", {});
    a0(this, "wallets", nn);
    a0(this, "_connectObject", { whitelist: [b0], host: H0 });
    localStorage.getItem(W0), c = this._cleanUpConnObj(c);
  }
  _cleanUpConnObj(c) {
    return c.whitelist.push(b0), c.whitelist = Array.from(/* @__PURE__ */ new Set([...c.whitelist])), c.host = c.host || H0, c.identityProvider = c.identityProvider || "", this._connectObject = c, c;
  }
  async connect(c, o = { whitelist: [], host: H0, identityProvider: "" }) {
    if (o = this._cleanUpConnObj(o), !c) return !1;
    try {
      var a = this.wallets.find((g) => g.id == c);
      if (!a) return !1;
      if (a.adapter.readyState == "Installed" || a.adapter.readyState == "Loadable") {
        var h = await a.adapter.connectWallet(o);
        if (!h) return !1;
        this.principalId = h.principalId, this.accountId = h.accountId, this.walletActive = c, this.provider = a.adapter, this.connectedWalletInfo = {
          id: a.id,
          icon: a.icon,
          name: a.name
        }, h.stoicAccounts && localStorage.setItem("stoicAccounts", h.stoicAccounts.length || 0), localStorage.setItem(W0, this.walletActive);
        var d = new CustomEvent("nnsWalletConnected");
        window.dispatchEvent(d, c), this.getWalletBalance();
      } else a.adapter.readyState == "NotDetected" && window.open(a.adapter.url, "_blank");
      return this.principalId;
    } catch {
      return !1;
    }
  }
  async disconnect() {
    return this.provider.disConnectWallet(), localStorage.removeItem(W0), this.provider = !1, this.address = !1, this.wallet = "", !0;
  }
  async isLoaded() {
    return new Promise((c, o) => {
      var a = setInterval(() => {
        this.provider && (clearInterval(a), c(!0));
      }, 500);
    });
  }
  async getWalletBalance(c = "number") {
    if (!this.accountId) return 0;
    var o = await this.getCanisterActor(b0, jt, !0);
    const a = await o.icrc1_balance_of({
      owner: kr.from(this.principalId),
      subaccount: []
    });
    return c == "number" ? this.balance = parseFloat(a) / an : this.balance = a, this.balance;
  }
  async requestICPTransfer(c) {
    return new Promise(async (o, a) => {
      var h = () => {
      }, d = await this.getCanisterActor(b0, h);
      const g = await d.send_dfx(c).catch((i) => {
        a(i);
      });
      g && o(g), a(!1);
    });
  }
  async getCanisterActor(c, o, a = !1, h = !1, d = !1) {
    if (d)
      return this.getSignedActor(c, o);
    let g = !1;
    if (a)
      if (h) {
        const i = new E0({
          AnonymousIdentity: br,
          host: this._connectObject.host
        });
        g = await P0.createActor(o, {
          agent: i,
          canisterId: c
        }), this.anoncanisterActors[c] = g;
      } else if (this.anoncanisterActors[c])
        g = this.anoncanisterActors[c];
      else {
        const i = new E0({
          AnonymousIdentity: br,
          host: this._connectObject.host
        });
        g = await P0.createActor(o, {
          agent: i,
          canisterId: c
        }), this.anoncanisterActors[c] = g;
      }
    else
      h ? (g = await this.provider.createActor({
        canisterId: c,
        interfaceFactory: o
      }), this.canisterActors[c] = g) : this.canisterActors[c] ? g = this.canisterActors[c] : (g = await this.provider.createActor({
        canisterId: c,
        interfaceFactory: o
      }), this.canisterActors[c] = g);
    return g;
  }
  async getSignedActor(c, o) {
    if (!this.provider)
      throw new Error("Wallet not connected");
    try {
      const h = await (await Dr.create()).getIdentity(), d = new E0({ identity: h, host: this._connectObject.host });
      return this._connectObject.host.includes("localhost") && await d.fetchRootKey(), await P0.createActor(o, {
        agent: d,
        canisterId: c
      });
    } catch (a) {
      throw console.error(
        `Error creating signed actor for canister ${c}:`,
        a
      ), a;
    }
  }
  async autoConnect(c = { whitelist: [b0], host: H0 }) {
    c = this._cleanUpConnObj(c);
    var o = localStorage.getItem(W0), a = this.wallets.find((d) => d.id == o);
    if (!a) return !1;
    await window.onload();
    var h = await this.connect(o, c);
    return h;
  }
}, vn = Tt, En = G0, An = new Ht({
  whitelist: [b0],
  host: H0
});
window && (window.pnp = Ht, window.pnp.BatchTransact = Tt, window.pnp.nns = { AnonymousIdentity: br, Principal: kr });
export {
  vn as BatchTransact,
  Ht as PnP,
  An as PnPAdapter,
  En as principalIdFromHex
};

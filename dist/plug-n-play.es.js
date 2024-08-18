var Pt = Object.defineProperty;
var zt = (y, c, a) => c in y ? Pt(y, c, { enumerable: !0, configurable: !0, writable: !0, value: a }) : y[c] = a;
var l0 = (y, c, a) => zt(y, typeof c != "symbol" ? c + "" : c, a);
import { HttpAgent as Er, Actor as pt, AnonymousIdentity as Bt } from "@dfinity/agent";
import { Principal as vt } from "@dfinity/principal";
import { AuthClient as Rr } from "@dfinity/auth-client";
class U0 {
  constructor() {
    if (new.target === U0)
      throw new Error("AdapterInterface is an abstract class and can't be instantiated directly.");
  }
}
function Lt(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
const Tt = new Int32Array([
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
function At(y) {
  if (Buffer.isBuffer(y))
    return y;
  if (typeof y == "number")
    return Buffer.alloc(y);
  if (typeof y == "string")
    return Buffer.from(y);
  throw new Error("input must be buffer, number, or string, received " + typeof y);
}
function Wt(y) {
  const c = At(4);
  return c.writeInt32BE(y, 0), c;
}
function Fr(y, c) {
  y = At(y), Buffer.isBuffer(c) && (c = c.readUInt32BE(0));
  let a = ~~c ^ -1;
  for (var i = 0; i < y.length; i++)
    a = Tt[(a ^ y[i]) & 255] ^ a >>> 8;
  return a ^ -1;
}
function yr() {
  return Wt(Fr.apply(null, arguments));
}
yr.signed = function() {
  return Fr.apply(null, arguments);
};
yr.unsigned = function() {
  return Fr.apply(null, arguments) >>> 0;
};
var qt = yr;
const Nt = /* @__PURE__ */ Lt(qt);
var G = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function Ot(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
function Mt(y) {
  if (y.__esModule) return y;
  var c = y.default;
  if (typeof c == "function") {
    var a = function i() {
      return this instanceof i ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    a.prototype = c.prototype;
  } else a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(y).forEach(function(i) {
    var A = Object.getOwnPropertyDescriptor(y, i);
    Object.defineProperty(a, i, A.get ? A : {
      enumerable: !0,
      get: function() {
        return y[i];
      }
    });
  }), a;
}
var H0 = {}, P0 = {};
P0.byteLength = Gt;
P0.toByteArray = jt;
P0.fromByteArray = Yt;
var p0 = [], h0 = [], Kt = typeof Uint8Array < "u" ? Uint8Array : Array, L0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var k0 = 0, Xt = L0.length; k0 < Xt; ++k0)
  p0[k0] = L0[k0], h0[L0.charCodeAt(k0)] = k0;
h0[45] = 62;
h0[95] = 63;
function Et(y) {
  var c = y.length;
  if (c % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var a = y.indexOf("=");
  a === -1 && (a = c);
  var i = a === c ? 0 : 4 - a % 4;
  return [a, i];
}
function Gt(y) {
  var c = Et(y), a = c[0], i = c[1];
  return (a + i) * 3 / 4 - i;
}
function Vt(y, c, a) {
  return (c + a) * 3 / 4 - a;
}
function jt(y) {
  var c, a = Et(y), i = a[0], A = a[1], p = new Kt(Vt(y, i, A)), w = 0, n = A > 0 ? i - 4 : i, E;
  for (E = 0; E < n; E += 4)
    c = h0[y.charCodeAt(E)] << 18 | h0[y.charCodeAt(E + 1)] << 12 | h0[y.charCodeAt(E + 2)] << 6 | h0[y.charCodeAt(E + 3)], p[w++] = c >> 16 & 255, p[w++] = c >> 8 & 255, p[w++] = c & 255;
  return A === 2 && (c = h0[y.charCodeAt(E)] << 2 | h0[y.charCodeAt(E + 1)] >> 4, p[w++] = c & 255), A === 1 && (c = h0[y.charCodeAt(E)] << 10 | h0[y.charCodeAt(E + 1)] << 4 | h0[y.charCodeAt(E + 2)] >> 2, p[w++] = c >> 8 & 255, p[w++] = c & 255), p;
}
function Qt(y) {
  return p0[y >> 18 & 63] + p0[y >> 12 & 63] + p0[y >> 6 & 63] + p0[y & 63];
}
function Zt(y, c, a) {
  for (var i, A = [], p = c; p < a; p += 3)
    i = (y[p] << 16 & 16711680) + (y[p + 1] << 8 & 65280) + (y[p + 2] & 255), A.push(Qt(i));
  return A.join("");
}
function Yt(y) {
  for (var c, a = y.length, i = a % 3, A = [], p = 16383, w = 0, n = a - i; w < n; w += p)
    A.push(Zt(y, w, w + p > n ? n : w + p));
  return i === 1 ? (c = y[a - 1], A.push(
    p0[c >> 2] + p0[c << 4 & 63] + "=="
  )) : i === 2 && (c = (y[a - 2] << 8) + y[a - 1], A.push(
    p0[c >> 10] + p0[c >> 4 & 63] + p0[c << 2 & 63] + "="
  )), A.join("");
}
var Dr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Dr.read = function(y, c, a, i, A) {
  var p, w, n = A * 8 - i - 1, E = (1 << n) - 1, x = E >> 1, s = -7, D = a ? A - 1 : 0, f = a ? -1 : 1, h = y[c + D];
  for (D += f, p = h & (1 << -s) - 1, h >>= -s, s += n; s > 0; p = p * 256 + y[c + D], D += f, s -= 8)
    ;
  for (w = p & (1 << -s) - 1, p >>= -s, s += i; s > 0; w = w * 256 + y[c + D], D += f, s -= 8)
    ;
  if (p === 0)
    p = 1 - x;
  else {
    if (p === E)
      return w ? NaN : (h ? -1 : 1) * (1 / 0);
    w = w + Math.pow(2, i), p = p - x;
  }
  return (h ? -1 : 1) * w * Math.pow(2, p - i);
};
Dr.write = function(y, c, a, i, A, p) {
  var w, n, E, x = p * 8 - A - 1, s = (1 << x) - 1, D = s >> 1, f = A === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = i ? 0 : p - 1, d = i ? 1 : -1, F = c < 0 || c === 0 && 1 / c < 0 ? 1 : 0;
  for (c = Math.abs(c), isNaN(c) || c === 1 / 0 ? (n = isNaN(c) ? 1 : 0, w = s) : (w = Math.floor(Math.log(c) / Math.LN2), c * (E = Math.pow(2, -w)) < 1 && (w--, E *= 2), w + D >= 1 ? c += f / E : c += f * Math.pow(2, 1 - D), c * E >= 2 && (w++, E /= 2), w + D >= s ? (n = 0, w = s) : w + D >= 1 ? (n = (c * E - 1) * Math.pow(2, A), w = w + D) : (n = c * Math.pow(2, D - 1) * Math.pow(2, A), w = 0)); A >= 8; y[a + h] = n & 255, h += d, n /= 256, A -= 8)
    ;
  for (w = w << A | n, x += A; x > 0; y[a + h] = w & 255, h += d, w /= 256, x -= 8)
    ;
  y[a + h - d] |= F * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(y) {
  const c = P0, a = Dr, i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  y.Buffer = n, y.SlowBuffer = u, y.INSPECT_MAX_BYTES = 50;
  const A = 2147483647;
  y.kMaxLength = A, n.TYPED_ARRAY_SUPPORT = p(), !n.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function p() {
    try {
      const e = new Uint8Array(1), r = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(e, r), e.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(n.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (n.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(n.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (n.isBuffer(this))
        return this.byteOffset;
    }
  });
  function w(e) {
    if (e > A)
      throw new RangeError('The value "' + e + '" is invalid for option "size"');
    const r = new Uint8Array(e);
    return Object.setPrototypeOf(r, n.prototype), r;
  }
  function n(e, r, t) {
    if (typeof e == "number") {
      if (typeof r == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return D(e);
    }
    return E(e, r, t);
  }
  n.poolSize = 8192;
  function E(e, r, t) {
    if (typeof e == "string")
      return f(e, r);
    if (ArrayBuffer.isView(e))
      return d(e);
    if (e == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e
      );
    if (i0(e, ArrayBuffer) || e && i0(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (i0(e, SharedArrayBuffer) || e && i0(e.buffer, SharedArrayBuffer)))
      return F(e, r, t);
    if (typeof e == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const o = e.valueOf && e.valueOf();
    if (o != null && o !== e)
      return n.from(o, r, t);
    const C = v(e);
    if (C) return C;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
      return n.from(e[Symbol.toPrimitive]("string"), r, t);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e
    );
  }
  n.from = function(e, r, t) {
    return E(e, r, t);
  }, Object.setPrototypeOf(n.prototype, Uint8Array.prototype), Object.setPrototypeOf(n, Uint8Array);
  function x(e) {
    if (typeof e != "number")
      throw new TypeError('"size" argument must be of type number');
    if (e < 0)
      throw new RangeError('The value "' + e + '" is invalid for option "size"');
  }
  function s(e, r, t) {
    return x(e), e <= 0 ? w(e) : r !== void 0 ? typeof t == "string" ? w(e).fill(r, t) : w(e).fill(r) : w(e);
  }
  n.alloc = function(e, r, t) {
    return s(e, r, t);
  };
  function D(e) {
    return x(e), w(e < 0 ? 0 : b(e) | 0);
  }
  n.allocUnsafe = function(e) {
    return D(e);
  }, n.allocUnsafeSlow = function(e) {
    return D(e);
  };
  function f(e, r) {
    if ((typeof r != "string" || r === "") && (r = "utf8"), !n.isEncoding(r))
      throw new TypeError("Unknown encoding: " + r);
    const t = l(e, r) | 0;
    let o = w(t);
    const C = o.write(e, r);
    return C !== t && (o = o.slice(0, C)), o;
  }
  function h(e) {
    const r = e.length < 0 ? 0 : b(e.length) | 0, t = w(r);
    for (let o = 0; o < r; o += 1)
      t[o] = e[o] & 255;
    return t;
  }
  function d(e) {
    if (i0(e, Uint8Array)) {
      const r = new Uint8Array(e);
      return F(r.buffer, r.byteOffset, r.byteLength);
    }
    return h(e);
  }
  function F(e, r, t) {
    if (r < 0 || e.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < r + (t || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let o;
    return r === void 0 && t === void 0 ? o = new Uint8Array(e) : t === void 0 ? o = new Uint8Array(e, r) : o = new Uint8Array(e, r, t), Object.setPrototypeOf(o, n.prototype), o;
  }
  function v(e) {
    if (n.isBuffer(e)) {
      const r = b(e.length) | 0, t = w(r);
      return t.length === 0 || e.copy(t, 0, 0, r), t;
    }
    if (e.length !== void 0)
      return typeof e.length != "number" || u0(e.length) ? w(0) : h(e);
    if (e.type === "Buffer" && Array.isArray(e.data))
      return h(e.data);
  }
  function b(e) {
    if (e >= A)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + A.toString(16) + " bytes");
    return e | 0;
  }
  function u(e) {
    return +e != e && (e = 0), n.alloc(+e);
  }
  n.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== n.prototype;
  }, n.compare = function(r, t) {
    if (i0(r, Uint8Array) && (r = n.from(r, r.offset, r.byteLength)), i0(t, Uint8Array) && (t = n.from(t, t.offset, t.byteLength)), !n.isBuffer(r) || !n.isBuffer(t))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (r === t) return 0;
    let o = r.length, C = t.length;
    for (let I = 0, U = Math.min(o, C); I < U; ++I)
      if (r[I] !== t[I]) {
        o = r[I], C = t[I];
        break;
      }
    return o < C ? -1 : C < o ? 1 : 0;
  }, n.isEncoding = function(r) {
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
  }, n.concat = function(r, t) {
    if (!Array.isArray(r))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0)
      return n.alloc(0);
    let o;
    if (t === void 0)
      for (t = 0, o = 0; o < r.length; ++o)
        t += r[o].length;
    const C = n.allocUnsafe(t);
    let I = 0;
    for (o = 0; o < r.length; ++o) {
      let U = r[o];
      if (i0(U, Uint8Array))
        I + U.length > C.length ? (n.isBuffer(U) || (U = n.from(U)), U.copy(C, I)) : Uint8Array.prototype.set.call(
          C,
          U,
          I
        );
      else if (n.isBuffer(U))
        U.copy(C, I);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      I += U.length;
    }
    return C;
  };
  function l(e, r) {
    if (n.isBuffer(e))
      return e.length;
    if (ArrayBuffer.isView(e) || i0(e, ArrayBuffer))
      return e.byteLength;
    if (typeof e != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e
      );
    const t = e.length, o = arguments.length > 2 && arguments[2] === !0;
    if (!o && t === 0) return 0;
    let C = !1;
    for (; ; )
      switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return t;
        case "utf8":
        case "utf-8":
          return E0(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return t * 2;
        case "hex":
          return t >>> 1;
        case "base64":
          return C0(e).length;
        default:
          if (C)
            return o ? -1 : E0(e).length;
          r = ("" + r).toLowerCase(), C = !0;
      }
  }
  n.byteLength = l;
  function B(e, r, t) {
    let o = !1;
    if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r))
      return "";
    for (e || (e = "utf8"); ; )
      switch (e) {
        case "hex":
          return J(this, r, t);
        case "utf8":
        case "utf-8":
          return N(this, r, t);
        case "ascii":
          return $(this, r, t);
        case "latin1":
        case "binary":
          return j(this, r, t);
        case "base64":
          return L(this, r, t);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Q(this, r, t);
        default:
          if (o) throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), o = !0;
      }
  }
  n.prototype._isBuffer = !0;
  function _(e, r, t) {
    const o = e[r];
    e[r] = e[t], e[t] = o;
  }
  n.prototype.swap16 = function() {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < r; t += 2)
      _(this, t, t + 1);
    return this;
  }, n.prototype.swap32 = function() {
    const r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < r; t += 4)
      _(this, t, t + 3), _(this, t + 1, t + 2);
    return this;
  }, n.prototype.swap64 = function() {
    const r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < r; t += 8)
      _(this, t, t + 7), _(this, t + 1, t + 6), _(this, t + 2, t + 5), _(this, t + 3, t + 4);
    return this;
  }, n.prototype.toString = function() {
    const r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? N(this, 0, r) : B.apply(this, arguments);
  }, n.prototype.toLocaleString = n.prototype.toString, n.prototype.equals = function(r) {
    if (!n.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
    return this === r ? !0 : n.compare(this, r) === 0;
  }, n.prototype.inspect = function() {
    let r = "";
    const t = y.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (r += " ... "), "<Buffer " + r + ">";
  }, i && (n.prototype[i] = n.prototype.inspect), n.prototype.compare = function(r, t, o, C, I) {
    if (i0(r, Uint8Array) && (r = n.from(r, r.offset, r.byteLength)), !n.isBuffer(r))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r
      );
    if (t === void 0 && (t = 0), o === void 0 && (o = r ? r.length : 0), C === void 0 && (C = 0), I === void 0 && (I = this.length), t < 0 || o > r.length || C < 0 || I > this.length)
      throw new RangeError("out of range index");
    if (C >= I && t >= o)
      return 0;
    if (C >= I)
      return -1;
    if (t >= o)
      return 1;
    if (t >>>= 0, o >>>= 0, C >>>= 0, I >>>= 0, this === r) return 0;
    let U = I - C, X = o - t;
    const e0 = Math.min(U, X), t0 = this.slice(C, I), n0 = r.slice(t, o);
    for (let Z = 0; Z < e0; ++Z)
      if (t0[Z] !== n0[Z]) {
        U = t0[Z], X = n0[Z];
        break;
      }
    return U < X ? -1 : X < U ? 1 : 0;
  };
  function m(e, r, t, o, C) {
    if (e.length === 0) return -1;
    if (typeof t == "string" ? (o = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, u0(t) && (t = C ? 0 : e.length - 1), t < 0 && (t = e.length + t), t >= e.length) {
      if (C) return -1;
      t = e.length - 1;
    } else if (t < 0)
      if (C) t = 0;
      else return -1;
    if (typeof r == "string" && (r = n.from(r, o)), n.isBuffer(r))
      return r.length === 0 ? -1 : k(e, r, t, o, C);
    if (typeof r == "number")
      return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? C ? Uint8Array.prototype.indexOf.call(e, r, t) : Uint8Array.prototype.lastIndexOf.call(e, r, t) : k(e, [r], t, o, C);
    throw new TypeError("val must be string, number or Buffer");
  }
  function k(e, r, t, o, C) {
    let I = 1, U = e.length, X = r.length;
    if (o !== void 0 && (o = String(o).toLowerCase(), o === "ucs2" || o === "ucs-2" || o === "utf16le" || o === "utf-16le")) {
      if (e.length < 2 || r.length < 2)
        return -1;
      I = 2, U /= 2, X /= 2, t /= 2;
    }
    function e0(n0, Z) {
      return I === 1 ? n0[Z] : n0.readUInt16BE(Z * I);
    }
    let t0;
    if (C) {
      let n0 = -1;
      for (t0 = t; t0 < U; t0++)
        if (e0(e, t0) === e0(r, n0 === -1 ? 0 : t0 - n0)) {
          if (n0 === -1 && (n0 = t0), t0 - n0 + 1 === X) return n0 * I;
        } else
          n0 !== -1 && (t0 -= t0 - n0), n0 = -1;
    } else
      for (t + X > U && (t = U - X), t0 = t; t0 >= 0; t0--) {
        let n0 = !0;
        for (let Z = 0; Z < X; Z++)
          if (e0(e, t0 + Z) !== e0(r, Z)) {
            n0 = !1;
            break;
          }
        if (n0) return t0;
      }
    return -1;
  }
  n.prototype.includes = function(r, t, o) {
    return this.indexOf(r, t, o) !== -1;
  }, n.prototype.indexOf = function(r, t, o) {
    return m(this, r, t, o, !0);
  }, n.prototype.lastIndexOf = function(r, t, o) {
    return m(this, r, t, o, !1);
  };
  function H(e, r, t, o) {
    t = Number(t) || 0;
    const C = e.length - t;
    o ? (o = Number(o), o > C && (o = C)) : o = C;
    const I = r.length;
    o > I / 2 && (o = I / 2);
    let U;
    for (U = 0; U < o; ++U) {
      const X = parseInt(r.substr(U * 2, 2), 16);
      if (u0(X)) return U;
      e[t + U] = X;
    }
    return U;
  }
  function q(e, r, t, o) {
    return c0(E0(r, e.length - t), e, t, o);
  }
  function g(e, r, t, o) {
    return c0(w0(r), e, t, o);
  }
  function S(e, r, t, o) {
    return c0(C0(r), e, t, o);
  }
  function z(e, r, t, o) {
    return c0(R0(r, e.length - t), e, t, o);
  }
  n.prototype.write = function(r, t, o, C) {
    if (t === void 0)
      C = "utf8", o = this.length, t = 0;
    else if (o === void 0 && typeof t == "string")
      C = t, o = this.length, t = 0;
    else if (isFinite(t))
      t = t >>> 0, isFinite(o) ? (o = o >>> 0, C === void 0 && (C = "utf8")) : (C = o, o = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const I = this.length - t;
    if ((o === void 0 || o > I) && (o = I), r.length > 0 && (o < 0 || t < 0) || t > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    C || (C = "utf8");
    let U = !1;
    for (; ; )
      switch (C) {
        case "hex":
          return H(this, r, t, o);
        case "utf8":
        case "utf-8":
          return q(this, r, t, o);
        case "ascii":
        case "latin1":
        case "binary":
          return g(this, r, t, o);
        case "base64":
          return S(this, r, t, o);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return z(this, r, t, o);
        default:
          if (U) throw new TypeError("Unknown encoding: " + C);
          C = ("" + C).toLowerCase(), U = !0;
      }
  }, n.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function L(e, r, t) {
    return r === 0 && t === e.length ? c.fromByteArray(e) : c.fromByteArray(e.slice(r, t));
  }
  function N(e, r, t) {
    t = Math.min(e.length, t);
    const o = [];
    let C = r;
    for (; C < t; ) {
      const I = e[C];
      let U = null, X = I > 239 ? 4 : I > 223 ? 3 : I > 191 ? 2 : 1;
      if (C + X <= t) {
        let e0, t0, n0, Z;
        switch (X) {
          case 1:
            I < 128 && (U = I);
            break;
          case 2:
            e0 = e[C + 1], (e0 & 192) === 128 && (Z = (I & 31) << 6 | e0 & 63, Z > 127 && (U = Z));
            break;
          case 3:
            e0 = e[C + 1], t0 = e[C + 2], (e0 & 192) === 128 && (t0 & 192) === 128 && (Z = (I & 15) << 12 | (e0 & 63) << 6 | t0 & 63, Z > 2047 && (Z < 55296 || Z > 57343) && (U = Z));
            break;
          case 4:
            e0 = e[C + 1], t0 = e[C + 2], n0 = e[C + 3], (e0 & 192) === 128 && (t0 & 192) === 128 && (n0 & 192) === 128 && (Z = (I & 15) << 18 | (e0 & 63) << 12 | (t0 & 63) << 6 | n0 & 63, Z > 65535 && Z < 1114112 && (U = Z));
        }
      }
      U === null ? (U = 65533, X = 1) : U > 65535 && (U -= 65536, o.push(U >>> 10 & 1023 | 55296), U = 56320 | U & 1023), o.push(U), C += X;
    }
    return K(o);
  }
  const O = 4096;
  function K(e) {
    const r = e.length;
    if (r <= O)
      return String.fromCharCode.apply(String, e);
    let t = "", o = 0;
    for (; o < r; )
      t += String.fromCharCode.apply(
        String,
        e.slice(o, o += O)
      );
    return t;
  }
  function $(e, r, t) {
    let o = "";
    t = Math.min(e.length, t);
    for (let C = r; C < t; ++C)
      o += String.fromCharCode(e[C] & 127);
    return o;
  }
  function j(e, r, t) {
    let o = "";
    t = Math.min(e.length, t);
    for (let C = r; C < t; ++C)
      o += String.fromCharCode(e[C]);
    return o;
  }
  function J(e, r, t) {
    const o = e.length;
    (!r || r < 0) && (r = 0), (!t || t < 0 || t > o) && (t = o);
    let C = "";
    for (let I = r; I < t; ++I)
      C += I0[e[I]];
    return C;
  }
  function Q(e, r, t) {
    const o = e.slice(r, t);
    let C = "";
    for (let I = 0; I < o.length - 1; I += 2)
      C += String.fromCharCode(o[I] + o[I + 1] * 256);
    return C;
  }
  n.prototype.slice = function(r, t) {
    const o = this.length;
    r = ~~r, t = t === void 0 ? o : ~~t, r < 0 ? (r += o, r < 0 && (r = 0)) : r > o && (r = o), t < 0 ? (t += o, t < 0 && (t = 0)) : t > o && (t = o), t < r && (t = r);
    const C = this.subarray(r, t);
    return Object.setPrototypeOf(C, n.prototype), C;
  };
  function R(e, r, t) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
  }
  n.prototype.readUintLE = n.prototype.readUIntLE = function(r, t, o) {
    r = r >>> 0, t = t >>> 0, o || R(r, t, this.length);
    let C = this[r], I = 1, U = 0;
    for (; ++U < t && (I *= 256); )
      C += this[r + U] * I;
    return C;
  }, n.prototype.readUintBE = n.prototype.readUIntBE = function(r, t, o) {
    r = r >>> 0, t = t >>> 0, o || R(r, t, this.length);
    let C = this[r + --t], I = 1;
    for (; t > 0 && (I *= 256); )
      C += this[r + --t] * I;
    return C;
  }, n.prototype.readUint8 = n.prototype.readUInt8 = function(r, t) {
    return r = r >>> 0, t || R(r, 1, this.length), this[r];
  }, n.prototype.readUint16LE = n.prototype.readUInt16LE = function(r, t) {
    return r = r >>> 0, t || R(r, 2, this.length), this[r] | this[r + 1] << 8;
  }, n.prototype.readUint16BE = n.prototype.readUInt16BE = function(r, t) {
    return r = r >>> 0, t || R(r, 2, this.length), this[r] << 8 | this[r + 1];
  }, n.prototype.readUint32LE = n.prototype.readUInt32LE = function(r, t) {
    return r = r >>> 0, t || R(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  }, n.prototype.readUint32BE = n.prototype.readUInt32BE = function(r, t) {
    return r = r >>> 0, t || R(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  }, n.prototype.readBigUInt64LE = d0(function(r) {
    r = r >>> 0, a0(r, "offset");
    const t = this[r], o = this[r + 7];
    (t === void 0 || o === void 0) && x0(r, this.length - 8);
    const C = t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, I = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + o * 2 ** 24;
    return BigInt(C) + (BigInt(I) << BigInt(32));
  }), n.prototype.readBigUInt64BE = d0(function(r) {
    r = r >>> 0, a0(r, "offset");
    const t = this[r], o = this[r + 7];
    (t === void 0 || o === void 0) && x0(r, this.length - 8);
    const C = t * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], I = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + o;
    return (BigInt(C) << BigInt(32)) + BigInt(I);
  }), n.prototype.readIntLE = function(r, t, o) {
    r = r >>> 0, t = t >>> 0, o || R(r, t, this.length);
    let C = this[r], I = 1, U = 0;
    for (; ++U < t && (I *= 256); )
      C += this[r + U] * I;
    return I *= 128, C >= I && (C -= Math.pow(2, 8 * t)), C;
  }, n.prototype.readIntBE = function(r, t, o) {
    r = r >>> 0, t = t >>> 0, o || R(r, t, this.length);
    let C = t, I = 1, U = this[r + --C];
    for (; C > 0 && (I *= 256); )
      U += this[r + --C] * I;
    return I *= 128, U >= I && (U -= Math.pow(2, 8 * t)), U;
  }, n.prototype.readInt8 = function(r, t) {
    return r = r >>> 0, t || R(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  }, n.prototype.readInt16LE = function(r, t) {
    r = r >>> 0, t || R(r, 2, this.length);
    const o = this[r] | this[r + 1] << 8;
    return o & 32768 ? o | 4294901760 : o;
  }, n.prototype.readInt16BE = function(r, t) {
    r = r >>> 0, t || R(r, 2, this.length);
    const o = this[r + 1] | this[r] << 8;
    return o & 32768 ? o | 4294901760 : o;
  }, n.prototype.readInt32LE = function(r, t) {
    return r = r >>> 0, t || R(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  }, n.prototype.readInt32BE = function(r, t) {
    return r = r >>> 0, t || R(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  }, n.prototype.readBigInt64LE = d0(function(r) {
    r = r >>> 0, a0(r, "offset");
    const t = this[r], o = this[r + 7];
    (t === void 0 || o === void 0) && x0(r, this.length - 8);
    const C = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (o << 24);
    return (BigInt(C) << BigInt(32)) + BigInt(t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  }), n.prototype.readBigInt64BE = d0(function(r) {
    r = r >>> 0, a0(r, "offset");
    const t = this[r], o = this[r + 7];
    (t === void 0 || o === void 0) && x0(r, this.length - 8);
    const C = (t << 24) + // Overflow
    this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(C) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + o);
  }), n.prototype.readFloatLE = function(r, t) {
    return r = r >>> 0, t || R(r, 4, this.length), a.read(this, r, !0, 23, 4);
  }, n.prototype.readFloatBE = function(r, t) {
    return r = r >>> 0, t || R(r, 4, this.length), a.read(this, r, !1, 23, 4);
  }, n.prototype.readDoubleLE = function(r, t) {
    return r = r >>> 0, t || R(r, 8, this.length), a.read(this, r, !0, 52, 8);
  }, n.prototype.readDoubleBE = function(r, t) {
    return r = r >>> 0, t || R(r, 8, this.length), a.read(this, r, !1, 52, 8);
  };
  function P(e, r, t, o, C, I) {
    if (!n.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > C || r < I) throw new RangeError('"value" argument is out of bounds');
    if (t + o > e.length) throw new RangeError("Index out of range");
  }
  n.prototype.writeUintLE = n.prototype.writeUIntLE = function(r, t, o, C) {
    if (r = +r, t = t >>> 0, o = o >>> 0, !C) {
      const X = Math.pow(2, 8 * o) - 1;
      P(this, r, t, o, X, 0);
    }
    let I = 1, U = 0;
    for (this[t] = r & 255; ++U < o && (I *= 256); )
      this[t + U] = r / I & 255;
    return t + o;
  }, n.prototype.writeUintBE = n.prototype.writeUIntBE = function(r, t, o, C) {
    if (r = +r, t = t >>> 0, o = o >>> 0, !C) {
      const X = Math.pow(2, 8 * o) - 1;
      P(this, r, t, o, X, 0);
    }
    let I = o - 1, U = 1;
    for (this[t + I] = r & 255; --I >= 0 && (U *= 256); )
      this[t + I] = r / U & 255;
    return t + o;
  }, n.prototype.writeUint8 = n.prototype.writeUInt8 = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 1, 255, 0), this[t] = r & 255, t + 1;
  }, n.prototype.writeUint16LE = n.prototype.writeUInt16LE = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 2, 65535, 0), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
  }, n.prototype.writeUint16BE = n.prototype.writeUInt16BE = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 2, 65535, 0), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
  }, n.prototype.writeUint32LE = n.prototype.writeUInt32LE = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 4, 4294967295, 0), this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255, t + 4;
  }, n.prototype.writeUint32BE = n.prototype.writeUInt32BE = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 4, 4294967295, 0), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
  };
  function W(e, r, t, o, C) {
    A0(r, o, C, e, t, 7);
    let I = Number(r & BigInt(4294967295));
    e[t++] = I, I = I >> 8, e[t++] = I, I = I >> 8, e[t++] = I, I = I >> 8, e[t++] = I;
    let U = Number(r >> BigInt(32) & BigInt(4294967295));
    return e[t++] = U, U = U >> 8, e[t++] = U, U = U >> 8, e[t++] = U, U = U >> 8, e[t++] = U, t;
  }
  function T(e, r, t, o, C) {
    A0(r, o, C, e, t, 7);
    let I = Number(r & BigInt(4294967295));
    e[t + 7] = I, I = I >> 8, e[t + 6] = I, I = I >> 8, e[t + 5] = I, I = I >> 8, e[t + 4] = I;
    let U = Number(r >> BigInt(32) & BigInt(4294967295));
    return e[t + 3] = U, U = U >> 8, e[t + 2] = U, U = U >> 8, e[t + 1] = U, U = U >> 8, e[t] = U, t + 8;
  }
  n.prototype.writeBigUInt64LE = d0(function(r, t = 0) {
    return W(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
  }), n.prototype.writeBigUInt64BE = d0(function(r, t = 0) {
    return T(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
  }), n.prototype.writeIntLE = function(r, t, o, C) {
    if (r = +r, t = t >>> 0, !C) {
      const e0 = Math.pow(2, 8 * o - 1);
      P(this, r, t, o, e0 - 1, -e0);
    }
    let I = 0, U = 1, X = 0;
    for (this[t] = r & 255; ++I < o && (U *= 256); )
      r < 0 && X === 0 && this[t + I - 1] !== 0 && (X = 1), this[t + I] = (r / U >> 0) - X & 255;
    return t + o;
  }, n.prototype.writeIntBE = function(r, t, o, C) {
    if (r = +r, t = t >>> 0, !C) {
      const e0 = Math.pow(2, 8 * o - 1);
      P(this, r, t, o, e0 - 1, -e0);
    }
    let I = o - 1, U = 1, X = 0;
    for (this[t + I] = r & 255; --I >= 0 && (U *= 256); )
      r < 0 && X === 0 && this[t + I + 1] !== 0 && (X = 1), this[t + I] = (r / U >> 0) - X & 255;
    return t + o;
  }, n.prototype.writeInt8 = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1;
  }, n.prototype.writeInt16LE = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 2, 32767, -32768), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
  }, n.prototype.writeInt16BE = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 2, 32767, -32768), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
  }, n.prototype.writeInt32LE = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 4, 2147483647, -2147483648), this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24, t + 4;
  }, n.prototype.writeInt32BE = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
  }, n.prototype.writeBigInt64LE = d0(function(r, t = 0) {
    return W(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), n.prototype.writeBigInt64BE = d0(function(r, t = 0) {
    return T(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function r0(e, r, t, o, C, I) {
    if (t + o > e.length) throw new RangeError("Index out of range");
    if (t < 0) throw new RangeError("Index out of range");
  }
  function Y(e, r, t, o, C) {
    return r = +r, t = t >>> 0, C || r0(e, r, t, 4), a.write(e, r, t, o, 23, 4), t + 4;
  }
  n.prototype.writeFloatLE = function(r, t, o) {
    return Y(this, r, t, !0, o);
  }, n.prototype.writeFloatBE = function(r, t, o) {
    return Y(this, r, t, !1, o);
  };
  function s0(e, r, t, o, C) {
    return r = +r, t = t >>> 0, C || r0(e, r, t, 8), a.write(e, r, t, o, 52, 8), t + 8;
  }
  n.prototype.writeDoubleLE = function(r, t, o) {
    return s0(this, r, t, !0, o);
  }, n.prototype.writeDoubleBE = function(r, t, o) {
    return s0(this, r, t, !1, o);
  }, n.prototype.copy = function(r, t, o, C) {
    if (!n.isBuffer(r)) throw new TypeError("argument should be a Buffer");
    if (o || (o = 0), !C && C !== 0 && (C = this.length), t >= r.length && (t = r.length), t || (t = 0), C > 0 && C < o && (C = o), C === o || r.length === 0 || this.length === 0) return 0;
    if (t < 0)
      throw new RangeError("targetStart out of bounds");
    if (o < 0 || o >= this.length) throw new RangeError("Index out of range");
    if (C < 0) throw new RangeError("sourceEnd out of bounds");
    C > this.length && (C = this.length), r.length - t < C - o && (C = r.length - t + o);
    const I = C - o;
    return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, o, C) : Uint8Array.prototype.set.call(
      r,
      this.subarray(o, C),
      t
    ), I;
  }, n.prototype.fill = function(r, t, o, C) {
    if (typeof r == "string") {
      if (typeof t == "string" ? (C = t, t = 0, o = this.length) : typeof o == "string" && (C = o, o = this.length), C !== void 0 && typeof C != "string")
        throw new TypeError("encoding must be a string");
      if (typeof C == "string" && !n.isEncoding(C))
        throw new TypeError("Unknown encoding: " + C);
      if (r.length === 1) {
        const U = r.charCodeAt(0);
        (C === "utf8" && U < 128 || C === "latin1") && (r = U);
      }
    } else typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (t < 0 || this.length < t || this.length < o)
      throw new RangeError("Out of range index");
    if (o <= t)
      return this;
    t = t >>> 0, o = o === void 0 ? this.length : o >>> 0, r || (r = 0);
    let I;
    if (typeof r == "number")
      for (I = t; I < o; ++I)
        this[I] = r;
    else {
      const U = n.isBuffer(r) ? r : n.from(r, C), X = U.length;
      if (X === 0)
        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (I = 0; I < o - t; ++I)
        this[I + t] = U[I % X];
    }
    return this;
  };
  const M = {};
  function B0(e, r, t) {
    M[e] = class extends t {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: r.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
      }
      get code() {
        return e;
      }
      set code(C) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: C,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`;
      }
    };
  }
  B0(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(e) {
      return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), B0(
    "ERR_INVALID_ARG_TYPE",
    function(e, r) {
      return `The "${e}" argument must be of type number. Received type ${typeof r}`;
    },
    TypeError
  ), B0(
    "ERR_OUT_OF_RANGE",
    function(e, r, t) {
      let o = `The value of "${e}" is out of range.`, C = t;
      return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? C = v0(String(t)) : typeof t == "bigint" && (C = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (C = v0(C)), C += "n"), o += ` It must be ${r}. Received ${C}`, o;
    },
    RangeError
  );
  function v0(e) {
    let r = "", t = e.length;
    const o = e[0] === "-" ? 1 : 0;
    for (; t >= o + 4; t -= 3)
      r = `_${e.slice(t - 3, t)}${r}`;
    return `${e.slice(0, t)}${r}`;
  }
  function S0(e, r, t) {
    a0(r, "offset"), (e[r] === void 0 || e[r + t] === void 0) && x0(r, e.length - (t + 1));
  }
  function A0(e, r, t, o, C, I) {
    if (e > t || e < r) {
      const U = typeof r == "bigint" ? "n" : "";
      let X;
      throw r === 0 || r === BigInt(0) ? X = `>= 0${U} and < 2${U} ** ${(I + 1) * 8}${U}` : X = `>= -(2${U} ** ${(I + 1) * 8 - 1}${U}) and < 2 ** ${(I + 1) * 8 - 1}${U}`, new M.ERR_OUT_OF_RANGE("value", X, e);
    }
    S0(o, C, I);
  }
  function a0(e, r) {
    if (typeof e != "number")
      throw new M.ERR_INVALID_ARG_TYPE(r, "number", e);
  }
  function x0(e, r, t) {
    throw Math.floor(e) !== e ? (a0(e, t), new M.ERR_OUT_OF_RANGE("offset", "an integer", e)) : r < 0 ? new M.ERR_BUFFER_OUT_OF_BOUNDS() : new M.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${r}`,
      e
    );
  }
  const m0 = /[^+/0-9A-Za-z-_]/g;
  function g0(e) {
    if (e = e.split("=")[0], e = e.trim().replace(m0, ""), e.length < 2) return "";
    for (; e.length % 4 !== 0; )
      e = e + "=";
    return e;
  }
  function E0(e, r) {
    r = r || 1 / 0;
    let t;
    const o = e.length;
    let C = null;
    const I = [];
    for (let U = 0; U < o; ++U) {
      if (t = e.charCodeAt(U), t > 55295 && t < 57344) {
        if (!C) {
          if (t > 56319) {
            (r -= 3) > -1 && I.push(239, 191, 189);
            continue;
          } else if (U + 1 === o) {
            (r -= 3) > -1 && I.push(239, 191, 189);
            continue;
          }
          C = t;
          continue;
        }
        if (t < 56320) {
          (r -= 3) > -1 && I.push(239, 191, 189), C = t;
          continue;
        }
        t = (C - 55296 << 10 | t - 56320) + 65536;
      } else C && (r -= 3) > -1 && I.push(239, 191, 189);
      if (C = null, t < 128) {
        if ((r -= 1) < 0) break;
        I.push(t);
      } else if (t < 2048) {
        if ((r -= 2) < 0) break;
        I.push(
          t >> 6 | 192,
          t & 63 | 128
        );
      } else if (t < 65536) {
        if ((r -= 3) < 0) break;
        I.push(
          t >> 12 | 224,
          t >> 6 & 63 | 128,
          t & 63 | 128
        );
      } else if (t < 1114112) {
        if ((r -= 4) < 0) break;
        I.push(
          t >> 18 | 240,
          t >> 12 & 63 | 128,
          t >> 6 & 63 | 128,
          t & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return I;
  }
  function w0(e) {
    const r = [];
    for (let t = 0; t < e.length; ++t)
      r.push(e.charCodeAt(t) & 255);
    return r;
  }
  function R0(e, r) {
    let t, o, C;
    const I = [];
    for (let U = 0; U < e.length && !((r -= 2) < 0); ++U)
      t = e.charCodeAt(U), o = t >> 8, C = t % 256, I.push(C), I.push(o);
    return I;
  }
  function C0(e) {
    return c.toByteArray(g0(e));
  }
  function c0(e, r, t, o) {
    let C;
    for (C = 0; C < o && !(C + t >= r.length || C >= e.length); ++C)
      r[C + t] = e[C];
    return C;
  }
  function i0(e, r) {
    return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
  }
  function u0(e) {
    return e !== e;
  }
  const I0 = function() {
    const e = "0123456789abcdef", r = new Array(256);
    for (let t = 0; t < 16; ++t) {
      const o = t * 16;
      for (let C = 0; C < 16; ++C)
        r[o + C] = e[t] + e[C];
    }
    return r;
  }();
  function d0(e) {
    return typeof BigInt > "u" ? F0 : e;
  }
  function F0() {
    throw new Error("BigInt not supported");
  }
})(H0);
var Ct = { exports: {} };
function Jt(y) {
  throw new Error('Could not dynamically require "' + y + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var T0 = { exports: {} };
const $t = {}, re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $t
}, Symbol.toStringTag, { value: "Module" })), te = /* @__PURE__ */ Mt(re);
var Hr;
function V() {
  return Hr || (Hr = 1, function(y, c) {
    (function(a, i) {
      y.exports = i();
    })(G, function() {
      var a = a || function(i, A) {
        var p;
        if (typeof window < "u" && window.crypto && (p = window.crypto), typeof self < "u" && self.crypto && (p = self.crypto), typeof globalThis < "u" && globalThis.crypto && (p = globalThis.crypto), !p && typeof window < "u" && window.msCrypto && (p = window.msCrypto), !p && typeof globalThis < "u" && globalThis.crypto && (p = globalThis.crypto), !p && typeof Jt == "function")
          try {
            p = te;
          } catch {
          }
        var w = function() {
          if (p) {
            if (typeof p.getRandomValues == "function")
              try {
                return p.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof p.randomBytes == "function")
              try {
                return p.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, n = Object.create || /* @__PURE__ */ function() {
          function u() {
          }
          return function(l) {
            var B;
            return u.prototype = l, B = new u(), u.prototype = null, B;
          };
        }(), E = {}, x = E.lib = {}, s = x.Base = /* @__PURE__ */ function() {
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
            extend: function(u) {
              var l = n(this);
              return u && l.mixIn(u), (!l.hasOwnProperty("init") || this.init === l.init) && (l.init = function() {
                l.$super.init.apply(this, arguments);
              }), l.init.prototype = l, l.$super = this, l;
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
              var u = this.extend();
              return u.init.apply(u, arguments), u;
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
            mixIn: function(u) {
              for (var l in u)
                u.hasOwnProperty(l) && (this[l] = u[l]);
              u.hasOwnProperty("toString") && (this.toString = u.toString);
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
        }(), D = x.WordArray = s.extend({
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
          init: function(u, l) {
            u = this.words = u || [], l != A ? this.sigBytes = l : this.sigBytes = u.length * 4;
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
          toString: function(u) {
            return (u || h).stringify(this);
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
          concat: function(u) {
            var l = this.words, B = u.words, _ = this.sigBytes, m = u.sigBytes;
            if (this.clamp(), _ % 4)
              for (var k = 0; k < m; k++) {
                var H = B[k >>> 2] >>> 24 - k % 4 * 8 & 255;
                l[_ + k >>> 2] |= H << 24 - (_ + k) % 4 * 8;
              }
            else
              for (var q = 0; q < m; q += 4)
                l[_ + q >>> 2] = B[q >>> 2];
            return this.sigBytes += m, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var u = this.words, l = this.sigBytes;
            u[l >>> 2] &= 4294967295 << 32 - l % 4 * 8, u.length = i.ceil(l / 4);
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
            var u = s.clone.call(this);
            return u.words = this.words.slice(0), u;
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
          random: function(u) {
            for (var l = [], B = 0; B < u; B += 4)
              l.push(w());
            return new D.init(l, u);
          }
        }), f = E.enc = {}, h = f.Hex = {
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
          stringify: function(u) {
            for (var l = u.words, B = u.sigBytes, _ = [], m = 0; m < B; m++) {
              var k = l[m >>> 2] >>> 24 - m % 4 * 8 & 255;
              _.push((k >>> 4).toString(16)), _.push((k & 15).toString(16));
            }
            return _.join("");
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
          parse: function(u) {
            for (var l = u.length, B = [], _ = 0; _ < l; _ += 2)
              B[_ >>> 3] |= parseInt(u.substr(_, 2), 16) << 24 - _ % 8 * 4;
            return new D.init(B, l / 2);
          }
        }, d = f.Latin1 = {
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
          stringify: function(u) {
            for (var l = u.words, B = u.sigBytes, _ = [], m = 0; m < B; m++) {
              var k = l[m >>> 2] >>> 24 - m % 4 * 8 & 255;
              _.push(String.fromCharCode(k));
            }
            return _.join("");
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
          parse: function(u) {
            for (var l = u.length, B = [], _ = 0; _ < l; _++)
              B[_ >>> 2] |= (u.charCodeAt(_) & 255) << 24 - _ % 4 * 8;
            return new D.init(B, l);
          }
        }, F = f.Utf8 = {
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
          stringify: function(u) {
            try {
              return decodeURIComponent(escape(d.stringify(u)));
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
          parse: function(u) {
            return d.parse(unescape(encodeURIComponent(u)));
          }
        }, v = x.BufferedBlockAlgorithm = s.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new D.init(), this._nDataBytes = 0;
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
          _append: function(u) {
            typeof u == "string" && (u = F.parse(u)), this._data.concat(u), this._nDataBytes += u.sigBytes;
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
          _process: function(u) {
            var l, B = this._data, _ = B.words, m = B.sigBytes, k = this.blockSize, H = k * 4, q = m / H;
            u ? q = i.ceil(q) : q = i.max((q | 0) - this._minBufferSize, 0);
            var g = q * k, S = i.min(g * 4, m);
            if (g) {
              for (var z = 0; z < g; z += k)
                this._doProcessBlock(_, z);
              l = _.splice(0, g), B.sigBytes -= S;
            }
            return new D.init(l, S);
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
            var u = s.clone.call(this);
            return u._data = this._data.clone(), u;
          },
          _minBufferSize: 0
        });
        x.Hasher = v.extend({
          /**
           * Configuration options.
           */
          cfg: s.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(u) {
            this.cfg = this.cfg.extend(u), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            v.reset.call(this), this._doReset();
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
          update: function(u) {
            return this._append(u), this._process(), this;
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
          finalize: function(u) {
            u && this._append(u);
            var l = this._doFinalize();
            return l;
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
          _createHelper: function(u) {
            return function(l, B) {
              return new u.init(B).finalize(l);
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
          _createHmacHelper: function(u) {
            return function(l, B) {
              return new b.HMAC.init(u, B).finalize(l);
            };
          }
        });
        var b = E.algo = {};
        return E;
      }(Math);
      return a;
    });
  }(T0)), T0.exports;
}
var W0 = { exports: {} }, Ur;
function z0() {
  return Ur || (Ur = 1, function(y, c) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      return function(i) {
        var A = a, p = A.lib, w = p.Base, n = p.WordArray, E = A.x64 = {};
        E.Word = w.extend({
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
          init: function(x, s) {
            this.high = x, this.low = s;
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
        }), E.WordArray = w.extend({
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
          init: function(x, s) {
            x = this.words = x || [], s != i ? this.sigBytes = s : this.sigBytes = x.length * 8;
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
            for (var x = this.words, s = x.length, D = [], f = 0; f < s; f++) {
              var h = x[f];
              D.push(h.high), D.push(h.low);
            }
            return n.create(D, this.sigBytes);
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
            for (var x = w.clone.call(this), s = x.words = this.words.slice(0), D = s.length, f = 0; f < D; f++)
              s[f] = s[f].clone();
            return x;
          }
        });
      }(), a;
    });
  }(W0)), W0.exports;
}
var q0 = { exports: {} }, Pr;
function ee() {
  return Pr || (Pr = 1, function(y, c) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var i = a, A = i.lib, p = A.WordArray, w = p.init, n = p.init = function(E) {
            if (E instanceof ArrayBuffer && (E = new Uint8Array(E)), (E instanceof Int8Array || typeof Uint8ClampedArray < "u" && E instanceof Uint8ClampedArray || E instanceof Int16Array || E instanceof Uint16Array || E instanceof Int32Array || E instanceof Uint32Array || E instanceof Float32Array || E instanceof Float64Array) && (E = new Uint8Array(E.buffer, E.byteOffset, E.byteLength)), E instanceof Uint8Array) {
              for (var x = E.byteLength, s = [], D = 0; D < x; D++)
                s[D >>> 2] |= E[D] << 24 - D % 4 * 8;
              w.call(this, s, x);
            } else
              w.apply(this, arguments);
          };
          n.prototype = p;
        }
      }(), a.lib.WordArray;
    });
  }(q0)), q0.exports;
}
var N0 = { exports: {} }, zr;
function ne() {
  return zr || (zr = 1, function(y, c) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      return function() {
        var i = a, A = i.lib, p = A.WordArray, w = i.enc;
        w.Utf16 = w.Utf16BE = {
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
          stringify: function(E) {
            for (var x = E.words, s = E.sigBytes, D = [], f = 0; f < s; f += 2) {
              var h = x[f >>> 2] >>> 16 - f % 4 * 8 & 65535;
              D.push(String.fromCharCode(h));
            }
            return D.join("");
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
          parse: function(E) {
            for (var x = E.length, s = [], D = 0; D < x; D++)
              s[D >>> 1] |= E.charCodeAt(D) << 16 - D % 2 * 16;
            return p.create(s, x * 2);
          }
        }, w.Utf16LE = {
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
          stringify: function(E) {
            for (var x = E.words, s = E.sigBytes, D = [], f = 0; f < s; f += 2) {
              var h = n(x[f >>> 2] >>> 16 - f % 4 * 8 & 65535);
              D.push(String.fromCharCode(h));
            }
            return D.join("");
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
          parse: function(E) {
            for (var x = E.length, s = [], D = 0; D < x; D++)
              s[D >>> 1] |= n(E.charCodeAt(D) << 16 - D % 2 * 16);
            return p.create(s, x * 2);
          }
        };
        function n(E) {
          return E << 8 & 4278255360 | E >>> 8 & 16711935;
        }
      }(), a.enc.Utf16;
    });
  }(N0)), N0.exports;
}
var O0 = { exports: {} }, Lr;
function b0() {
  return Lr || (Lr = 1, function(y, c) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      return function() {
        var i = a, A = i.lib, p = A.WordArray, w = i.enc;
        w.Base64 = {
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
          stringify: function(E) {
            var x = E.words, s = E.sigBytes, D = this._map;
            E.clamp();
            for (var f = [], h = 0; h < s; h += 3)
              for (var d = x[h >>> 2] >>> 24 - h % 4 * 8 & 255, F = x[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255, v = x[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, b = d << 16 | F << 8 | v, u = 0; u < 4 && h + u * 0.75 < s; u++)
                f.push(D.charAt(b >>> 6 * (3 - u) & 63));
            var l = D.charAt(64);
            if (l)
              for (; f.length % 4; )
                f.push(l);
            return f.join("");
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
          parse: function(E) {
            var x = E.length, s = this._map, D = this._reverseMap;
            if (!D) {
              D = this._reverseMap = [];
              for (var f = 0; f < s.length; f++)
                D[s.charCodeAt(f)] = f;
            }
            var h = s.charAt(64);
            if (h) {
              var d = E.indexOf(h);
              d !== -1 && (x = d);
            }
            return n(E, x, D);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function n(E, x, s) {
          for (var D = [], f = 0, h = 0; h < x; h++)
            if (h % 4) {
              var d = s[E.charCodeAt(h - 1)] << h % 4 * 2, F = s[E.charCodeAt(h)] >>> 6 - h % 4 * 2, v = d | F;
              D[f >>> 2] |= v << 24 - f % 4 * 8, f++;
            }
          return p.create(D, f);
        }
      }(), a.enc.Base64;
    });
  }(O0)), O0.exports;
}
var M0 = { exports: {} }, Tr;
function ie() {
  return Tr || (Tr = 1, function(y, c) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      return function() {
        var i = a, A = i.lib, p = A.WordArray, w = i.enc;
        w.Base64url = {
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
          stringify: function(E, x) {
            x === void 0 && (x = !0);
            var s = E.words, D = E.sigBytes, f = x ? this._safe_map : this._map;
            E.clamp();
            for (var h = [], d = 0; d < D; d += 3)
              for (var F = s[d >>> 2] >>> 24 - d % 4 * 8 & 255, v = s[d + 1 >>> 2] >>> 24 - (d + 1) % 4 * 8 & 255, b = s[d + 2 >>> 2] >>> 24 - (d + 2) % 4 * 8 & 255, u = F << 16 | v << 8 | b, l = 0; l < 4 && d + l * 0.75 < D; l++)
                h.push(f.charAt(u >>> 6 * (3 - l) & 63));
            var B = f.charAt(64);
            if (B)
              for (; h.length % 4; )
                h.push(B);
            return h.join("");
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
          parse: function(E, x) {
            x === void 0 && (x = !0);
            var s = E.length, D = x ? this._safe_map : this._map, f = this._reverseMap;
            if (!f) {
              f = this._reverseMap = [];
              for (var h = 0; h < D.length; h++)
                f[D.charCodeAt(h)] = h;
            }
            var d = D.charAt(64);
            if (d) {
              var F = E.indexOf(d);
              F !== -1 && (s = F);
            }
            return n(E, s, f);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function n(E, x, s) {
          for (var D = [], f = 0, h = 0; h < x; h++)
            if (h % 4) {
              var d = s[E.charCodeAt(h - 1)] << h % 4 * 2, F = s[E.charCodeAt(h)] >>> 6 - h % 4 * 2, v = d | F;
              D[f >>> 2] |= v << 24 - f % 4 * 8, f++;
            }
          return p.create(D, f);
        }
      }(), a.enc.Base64url;
    });
  }(M0)), M0.exports;
}
var K0 = { exports: {} }, Wr;
function _0() {
  return Wr || (Wr = 1, function(y, c) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      return function(i) {
        var A = a, p = A.lib, w = p.WordArray, n = p.Hasher, E = A.algo, x = [];
        (function() {
          for (var F = 0; F < 64; F++)
            x[F] = i.abs(i.sin(F + 1)) * 4294967296 | 0;
        })();
        var s = E.MD5 = n.extend({
          _doReset: function() {
            this._hash = new w.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(F, v) {
            for (var b = 0; b < 16; b++) {
              var u = v + b, l = F[u];
              F[u] = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360;
            }
            var B = this._hash.words, _ = F[v + 0], m = F[v + 1], k = F[v + 2], H = F[v + 3], q = F[v + 4], g = F[v + 5], S = F[v + 6], z = F[v + 7], L = F[v + 8], N = F[v + 9], O = F[v + 10], K = F[v + 11], $ = F[v + 12], j = F[v + 13], J = F[v + 14], Q = F[v + 15], R = B[0], P = B[1], W = B[2], T = B[3];
            R = D(R, P, W, T, _, 7, x[0]), T = D(T, R, P, W, m, 12, x[1]), W = D(W, T, R, P, k, 17, x[2]), P = D(P, W, T, R, H, 22, x[3]), R = D(R, P, W, T, q, 7, x[4]), T = D(T, R, P, W, g, 12, x[5]), W = D(W, T, R, P, S, 17, x[6]), P = D(P, W, T, R, z, 22, x[7]), R = D(R, P, W, T, L, 7, x[8]), T = D(T, R, P, W, N, 12, x[9]), W = D(W, T, R, P, O, 17, x[10]), P = D(P, W, T, R, K, 22, x[11]), R = D(R, P, W, T, $, 7, x[12]), T = D(T, R, P, W, j, 12, x[13]), W = D(W, T, R, P, J, 17, x[14]), P = D(P, W, T, R, Q, 22, x[15]), R = f(R, P, W, T, m, 5, x[16]), T = f(T, R, P, W, S, 9, x[17]), W = f(W, T, R, P, K, 14, x[18]), P = f(P, W, T, R, _, 20, x[19]), R = f(R, P, W, T, g, 5, x[20]), T = f(T, R, P, W, O, 9, x[21]), W = f(W, T, R, P, Q, 14, x[22]), P = f(P, W, T, R, q, 20, x[23]), R = f(R, P, W, T, N, 5, x[24]), T = f(T, R, P, W, J, 9, x[25]), W = f(W, T, R, P, H, 14, x[26]), P = f(P, W, T, R, L, 20, x[27]), R = f(R, P, W, T, j, 5, x[28]), T = f(T, R, P, W, k, 9, x[29]), W = f(W, T, R, P, z, 14, x[30]), P = f(P, W, T, R, $, 20, x[31]), R = h(R, P, W, T, g, 4, x[32]), T = h(T, R, P, W, L, 11, x[33]), W = h(W, T, R, P, K, 16, x[34]), P = h(P, W, T, R, J, 23, x[35]), R = h(R, P, W, T, m, 4, x[36]), T = h(T, R, P, W, q, 11, x[37]), W = h(W, T, R, P, z, 16, x[38]), P = h(P, W, T, R, O, 23, x[39]), R = h(R, P, W, T, j, 4, x[40]), T = h(T, R, P, W, _, 11, x[41]), W = h(W, T, R, P, H, 16, x[42]), P = h(P, W, T, R, S, 23, x[43]), R = h(R, P, W, T, N, 4, x[44]), T = h(T, R, P, W, $, 11, x[45]), W = h(W, T, R, P, Q, 16, x[46]), P = h(P, W, T, R, k, 23, x[47]), R = d(R, P, W, T, _, 6, x[48]), T = d(T, R, P, W, z, 10, x[49]), W = d(W, T, R, P, J, 15, x[50]), P = d(P, W, T, R, g, 21, x[51]), R = d(R, P, W, T, $, 6, x[52]), T = d(T, R, P, W, H, 10, x[53]), W = d(W, T, R, P, O, 15, x[54]), P = d(P, W, T, R, m, 21, x[55]), R = d(R, P, W, T, L, 6, x[56]), T = d(T, R, P, W, Q, 10, x[57]), W = d(W, T, R, P, S, 15, x[58]), P = d(P, W, T, R, j, 21, x[59]), R = d(R, P, W, T, q, 6, x[60]), T = d(T, R, P, W, K, 10, x[61]), W = d(W, T, R, P, k, 15, x[62]), P = d(P, W, T, R, N, 21, x[63]), B[0] = B[0] + R | 0, B[1] = B[1] + P | 0, B[2] = B[2] + W | 0, B[3] = B[3] + T | 0;
          },
          _doFinalize: function() {
            var F = this._data, v = F.words, b = this._nDataBytes * 8, u = F.sigBytes * 8;
            v[u >>> 5] |= 128 << 24 - u % 32;
            var l = i.floor(b / 4294967296), B = b;
            v[(u + 64 >>> 9 << 4) + 15] = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, v[(u + 64 >>> 9 << 4) + 14] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360, F.sigBytes = (v.length + 1) * 4, this._process();
            for (var _ = this._hash, m = _.words, k = 0; k < 4; k++) {
              var H = m[k];
              m[k] = (H << 8 | H >>> 24) & 16711935 | (H << 24 | H >>> 8) & 4278255360;
            }
            return _;
          },
          clone: function() {
            var F = n.clone.call(this);
            return F._hash = this._hash.clone(), F;
          }
        });
        function D(F, v, b, u, l, B, _) {
          var m = F + (v & b | ~v & u) + l + _;
          return (m << B | m >>> 32 - B) + v;
        }
        function f(F, v, b, u, l, B, _) {
          var m = F + (v & u | b & ~u) + l + _;
          return (m << B | m >>> 32 - B) + v;
        }
        function h(F, v, b, u, l, B, _) {
          var m = F + (v ^ b ^ u) + l + _;
          return (m << B | m >>> 32 - B) + v;
        }
        function d(F, v, b, u, l, B, _) {
          var m = F + (b ^ (v | ~u)) + l + _;
          return (m << B | m >>> 32 - B) + v;
        }
        A.MD5 = n._createHelper(s), A.HmacMD5 = n._createHmacHelper(s);
      }(Math), a.MD5;
    });
  }(K0)), K0.exports;
}
var X0 = { exports: {} }, qr;
function Ft() {
  return qr || (qr = 1, function(y, c) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      return function() {
        var i = a, A = i.lib, p = A.WordArray, w = A.Hasher, n = i.algo, E = [], x = n.SHA1 = w.extend({
          _doReset: function() {
            this._hash = new p.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(s, D) {
            for (var f = this._hash.words, h = f[0], d = f[1], F = f[2], v = f[3], b = f[4], u = 0; u < 80; u++) {
              if (u < 16)
                E[u] = s[D + u] | 0;
              else {
                var l = E[u - 3] ^ E[u - 8] ^ E[u - 14] ^ E[u - 16];
                E[u] = l << 1 | l >>> 31;
              }
              var B = (h << 5 | h >>> 27) + b + E[u];
              u < 20 ? B += (d & F | ~d & v) + 1518500249 : u < 40 ? B += (d ^ F ^ v) + 1859775393 : u < 60 ? B += (d & F | d & v | F & v) - 1894007588 : B += (d ^ F ^ v) - 899497514, b = v, v = F, F = d << 30 | d >>> 2, d = h, h = B;
            }
            f[0] = f[0] + h | 0, f[1] = f[1] + d | 0, f[2] = f[2] + F | 0, f[3] = f[3] + v | 0, f[4] = f[4] + b | 0;
          },
          _doFinalize: function() {
            var s = this._data, D = s.words, f = this._nDataBytes * 8, h = s.sigBytes * 8;
            return D[h >>> 5] |= 128 << 24 - h % 32, D[(h + 64 >>> 9 << 4) + 14] = Math.floor(f / 4294967296), D[(h + 64 >>> 9 << 4) + 15] = f, s.sigBytes = D.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var s = w.clone.call(this);
            return s._hash = this._hash.clone(), s;
          }
        });
        i.SHA1 = w._createHelper(x), i.HmacSHA1 = w._createHmacHelper(x);
      }(), a.SHA1;
    });
  }(X0)), X0.exports;
}
var G0 = { exports: {} }, Nr;
function gr() {
  return Nr || (Nr = 1, function(y, c) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      return function(i) {
        var A = a, p = A.lib, w = p.WordArray, n = p.Hasher, E = A.algo, x = [], s = [];
        (function() {
          function h(b) {
            for (var u = i.sqrt(b), l = 2; l <= u; l++)
              if (!(b % l))
                return !1;
            return !0;
          }
          function d(b) {
            return (b - (b | 0)) * 4294967296 | 0;
          }
          for (var F = 2, v = 0; v < 64; )
            h(F) && (v < 8 && (x[v] = d(i.pow(F, 1 / 2))), s[v] = d(i.pow(F, 1 / 3)), v++), F++;
        })();
        var D = [], f = E.SHA256 = n.extend({
          _doReset: function() {
            this._hash = new w.init(x.slice(0));
          },
          _doProcessBlock: function(h, d) {
            for (var F = this._hash.words, v = F[0], b = F[1], u = F[2], l = F[3], B = F[4], _ = F[5], m = F[6], k = F[7], H = 0; H < 64; H++) {
              if (H < 16)
                D[H] = h[d + H] | 0;
              else {
                var q = D[H - 15], g = (q << 25 | q >>> 7) ^ (q << 14 | q >>> 18) ^ q >>> 3, S = D[H - 2], z = (S << 15 | S >>> 17) ^ (S << 13 | S >>> 19) ^ S >>> 10;
                D[H] = g + D[H - 7] + z + D[H - 16];
              }
              var L = B & _ ^ ~B & m, N = v & b ^ v & u ^ b & u, O = (v << 30 | v >>> 2) ^ (v << 19 | v >>> 13) ^ (v << 10 | v >>> 22), K = (B << 26 | B >>> 6) ^ (B << 21 | B >>> 11) ^ (B << 7 | B >>> 25), $ = k + K + L + s[H] + D[H], j = O + N;
              k = m, m = _, _ = B, B = l + $ | 0, l = u, u = b, b = v, v = $ + j | 0;
            }
            F[0] = F[0] + v | 0, F[1] = F[1] + b | 0, F[2] = F[2] + u | 0, F[3] = F[3] + l | 0, F[4] = F[4] + B | 0, F[5] = F[5] + _ | 0, F[6] = F[6] + m | 0, F[7] = F[7] + k | 0;
          },
          _doFinalize: function() {
            var h = this._data, d = h.words, F = this._nDataBytes * 8, v = h.sigBytes * 8;
            return d[v >>> 5] |= 128 << 24 - v % 32, d[(v + 64 >>> 9 << 4) + 14] = i.floor(F / 4294967296), d[(v + 64 >>> 9 << 4) + 15] = F, h.sigBytes = d.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var h = n.clone.call(this);
            return h._hash = this._hash.clone(), h;
          }
        });
        A.SHA256 = n._createHelper(f), A.HmacSHA256 = n._createHmacHelper(f);
      }(Math), a.SHA256;
    });
  }(G0)), G0.exports;
}
var V0 = { exports: {} }, Or;
function xe() {
  return Or || (Or = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), gr());
    })(G, function(a) {
      return function() {
        var i = a, A = i.lib, p = A.WordArray, w = i.algo, n = w.SHA256, E = w.SHA224 = n.extend({
          _doReset: function() {
            this._hash = new p.init([
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
            var x = n._doFinalize.call(this);
            return x.sigBytes -= 4, x;
          }
        });
        i.SHA224 = n._createHelper(E), i.HmacSHA224 = n._createHmacHelper(E);
      }(), a.SHA224;
    });
  }(V0)), V0.exports;
}
var j0 = { exports: {} }, Mr;
function yt() {
  return Mr || (Mr = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), z0());
    })(G, function(a) {
      return function() {
        var i = a, A = i.lib, p = A.Hasher, w = i.x64, n = w.Word, E = w.WordArray, x = i.algo;
        function s() {
          return n.create.apply(n, arguments);
        }
        var D = [
          s(1116352408, 3609767458),
          s(1899447441, 602891725),
          s(3049323471, 3964484399),
          s(3921009573, 2173295548),
          s(961987163, 4081628472),
          s(1508970993, 3053834265),
          s(2453635748, 2937671579),
          s(2870763221, 3664609560),
          s(3624381080, 2734883394),
          s(310598401, 1164996542),
          s(607225278, 1323610764),
          s(1426881987, 3590304994),
          s(1925078388, 4068182383),
          s(2162078206, 991336113),
          s(2614888103, 633803317),
          s(3248222580, 3479774868),
          s(3835390401, 2666613458),
          s(4022224774, 944711139),
          s(264347078, 2341262773),
          s(604807628, 2007800933),
          s(770255983, 1495990901),
          s(1249150122, 1856431235),
          s(1555081692, 3175218132),
          s(1996064986, 2198950837),
          s(2554220882, 3999719339),
          s(2821834349, 766784016),
          s(2952996808, 2566594879),
          s(3210313671, 3203337956),
          s(3336571891, 1034457026),
          s(3584528711, 2466948901),
          s(113926993, 3758326383),
          s(338241895, 168717936),
          s(666307205, 1188179964),
          s(773529912, 1546045734),
          s(1294757372, 1522805485),
          s(1396182291, 2643833823),
          s(1695183700, 2343527390),
          s(1986661051, 1014477480),
          s(2177026350, 1206759142),
          s(2456956037, 344077627),
          s(2730485921, 1290863460),
          s(2820302411, 3158454273),
          s(3259730800, 3505952657),
          s(3345764771, 106217008),
          s(3516065817, 3606008344),
          s(3600352804, 1432725776),
          s(4094571909, 1467031594),
          s(275423344, 851169720),
          s(430227734, 3100823752),
          s(506948616, 1363258195),
          s(659060556, 3750685593),
          s(883997877, 3785050280),
          s(958139571, 3318307427),
          s(1322822218, 3812723403),
          s(1537002063, 2003034995),
          s(1747873779, 3602036899),
          s(1955562222, 1575990012),
          s(2024104815, 1125592928),
          s(2227730452, 2716904306),
          s(2361852424, 442776044),
          s(2428436474, 593698344),
          s(2756734187, 3733110249),
          s(3204031479, 2999351573),
          s(3329325298, 3815920427),
          s(3391569614, 3928383900),
          s(3515267271, 566280711),
          s(3940187606, 3454069534),
          s(4118630271, 4000239992),
          s(116418474, 1914138554),
          s(174292421, 2731055270),
          s(289380356, 3203993006),
          s(460393269, 320620315),
          s(685471733, 587496836),
          s(852142971, 1086792851),
          s(1017036298, 365543100),
          s(1126000580, 2618297676),
          s(1288033470, 3409855158),
          s(1501505948, 4234509866),
          s(1607167915, 987167468),
          s(1816402316, 1246189591)
        ], f = [];
        (function() {
          for (var d = 0; d < 80; d++)
            f[d] = s();
        })();
        var h = x.SHA512 = p.extend({
          _doReset: function() {
            this._hash = new E.init([
              new n.init(1779033703, 4089235720),
              new n.init(3144134277, 2227873595),
              new n.init(1013904242, 4271175723),
              new n.init(2773480762, 1595750129),
              new n.init(1359893119, 2917565137),
              new n.init(2600822924, 725511199),
              new n.init(528734635, 4215389547),
              new n.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(d, F) {
            for (var v = this._hash.words, b = v[0], u = v[1], l = v[2], B = v[3], _ = v[4], m = v[5], k = v[6], H = v[7], q = b.high, g = b.low, S = u.high, z = u.low, L = l.high, N = l.low, O = B.high, K = B.low, $ = _.high, j = _.low, J = m.high, Q = m.low, R = k.high, P = k.low, W = H.high, T = H.low, r0 = q, Y = g, s0 = S, M = z, B0 = L, v0 = N, S0 = O, A0 = K, a0 = $, x0 = j, m0 = J, g0 = Q, E0 = R, w0 = P, R0 = W, C0 = T, c0 = 0; c0 < 80; c0++) {
              var i0, u0, I0 = f[c0];
              if (c0 < 16)
                u0 = I0.high = d[F + c0 * 2] | 0, i0 = I0.low = d[F + c0 * 2 + 1] | 0;
              else {
                var d0 = f[c0 - 15], F0 = d0.high, e = d0.low, r = (F0 >>> 1 | e << 31) ^ (F0 >>> 8 | e << 24) ^ F0 >>> 7, t = (e >>> 1 | F0 << 31) ^ (e >>> 8 | F0 << 24) ^ (e >>> 7 | F0 << 25), o = f[c0 - 2], C = o.high, I = o.low, U = (C >>> 19 | I << 13) ^ (C << 3 | I >>> 29) ^ C >>> 6, X = (I >>> 19 | C << 13) ^ (I << 3 | C >>> 29) ^ (I >>> 6 | C << 26), e0 = f[c0 - 7], t0 = e0.high, n0 = e0.low, Z = f[c0 - 16], bt = Z.high, br = Z.low;
                i0 = t + n0, u0 = r + t0 + (i0 >>> 0 < t >>> 0 ? 1 : 0), i0 = i0 + X, u0 = u0 + U + (i0 >>> 0 < X >>> 0 ? 1 : 0), i0 = i0 + br, u0 = u0 + bt + (i0 >>> 0 < br >>> 0 ? 1 : 0), I0.high = u0, I0.low = i0;
              }
              var _t = a0 & m0 ^ ~a0 & E0, _r = x0 & g0 ^ ~x0 & w0, mt = r0 & s0 ^ r0 & B0 ^ s0 & B0, It = Y & M ^ Y & v0 ^ M & v0, kt = (r0 >>> 28 | Y << 4) ^ (r0 << 30 | Y >>> 2) ^ (r0 << 25 | Y >>> 7), mr = (Y >>> 28 | r0 << 4) ^ (Y << 30 | r0 >>> 2) ^ (Y << 25 | r0 >>> 7), St = (a0 >>> 14 | x0 << 18) ^ (a0 >>> 18 | x0 << 14) ^ (a0 << 23 | x0 >>> 9), Rt = (x0 >>> 14 | a0 << 18) ^ (x0 >>> 18 | a0 << 14) ^ (x0 << 23 | a0 >>> 9), Ir = D[c0], Ht = Ir.high, kr = Ir.low, f0 = C0 + Rt, y0 = R0 + St + (f0 >>> 0 < C0 >>> 0 ? 1 : 0), f0 = f0 + _r, y0 = y0 + _t + (f0 >>> 0 < _r >>> 0 ? 1 : 0), f0 = f0 + kr, y0 = y0 + Ht + (f0 >>> 0 < kr >>> 0 ? 1 : 0), f0 = f0 + i0, y0 = y0 + u0 + (f0 >>> 0 < i0 >>> 0 ? 1 : 0), Sr = mr + It, Ut = kt + mt + (Sr >>> 0 < mr >>> 0 ? 1 : 0);
              R0 = E0, C0 = w0, E0 = m0, w0 = g0, m0 = a0, g0 = x0, x0 = A0 + f0 | 0, a0 = S0 + y0 + (x0 >>> 0 < A0 >>> 0 ? 1 : 0) | 0, S0 = B0, A0 = v0, B0 = s0, v0 = M, s0 = r0, M = Y, Y = f0 + Sr | 0, r0 = y0 + Ut + (Y >>> 0 < f0 >>> 0 ? 1 : 0) | 0;
            }
            g = b.low = g + Y, b.high = q + r0 + (g >>> 0 < Y >>> 0 ? 1 : 0), z = u.low = z + M, u.high = S + s0 + (z >>> 0 < M >>> 0 ? 1 : 0), N = l.low = N + v0, l.high = L + B0 + (N >>> 0 < v0 >>> 0 ? 1 : 0), K = B.low = K + A0, B.high = O + S0 + (K >>> 0 < A0 >>> 0 ? 1 : 0), j = _.low = j + x0, _.high = $ + a0 + (j >>> 0 < x0 >>> 0 ? 1 : 0), Q = m.low = Q + g0, m.high = J + m0 + (Q >>> 0 < g0 >>> 0 ? 1 : 0), P = k.low = P + w0, k.high = R + E0 + (P >>> 0 < w0 >>> 0 ? 1 : 0), T = H.low = T + C0, H.high = W + R0 + (T >>> 0 < C0 >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var d = this._data, F = d.words, v = this._nDataBytes * 8, b = d.sigBytes * 8;
            F[b >>> 5] |= 128 << 24 - b % 32, F[(b + 128 >>> 10 << 5) + 30] = Math.floor(v / 4294967296), F[(b + 128 >>> 10 << 5) + 31] = v, d.sigBytes = F.length * 4, this._process();
            var u = this._hash.toX32();
            return u;
          },
          clone: function() {
            var d = p.clone.call(this);
            return d._hash = this._hash.clone(), d;
          },
          blockSize: 1024 / 32
        });
        i.SHA512 = p._createHelper(h), i.HmacSHA512 = p._createHmacHelper(h);
      }(), a.SHA512;
    });
  }(j0)), j0.exports;
}
var Q0 = { exports: {} }, Kr;
function ae() {
  return Kr || (Kr = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), z0(), yt());
    })(G, function(a) {
      return function() {
        var i = a, A = i.x64, p = A.Word, w = A.WordArray, n = i.algo, E = n.SHA512, x = n.SHA384 = E.extend({
          _doReset: function() {
            this._hash = new w.init([
              new p.init(3418070365, 3238371032),
              new p.init(1654270250, 914150663),
              new p.init(2438529370, 812702999),
              new p.init(355462360, 4144912697),
              new p.init(1731405415, 4290775857),
              new p.init(2394180231, 1750603025),
              new p.init(3675008525, 1694076839),
              new p.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var s = E._doFinalize.call(this);
            return s.sigBytes -= 16, s;
          }
        });
        i.SHA384 = E._createHelper(x), i.HmacSHA384 = E._createHmacHelper(x);
      }(), a.SHA384;
    });
  }(Q0)), Q0.exports;
}
var Z0 = { exports: {} }, Xr;
function oe() {
  return Xr || (Xr = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), z0());
    })(G, function(a) {
      return function(i) {
        var A = a, p = A.lib, w = p.WordArray, n = p.Hasher, E = A.x64, x = E.Word, s = A.algo, D = [], f = [], h = [];
        (function() {
          for (var v = 1, b = 0, u = 0; u < 24; u++) {
            D[v + 5 * b] = (u + 1) * (u + 2) / 2 % 64;
            var l = b % 5, B = (2 * v + 3 * b) % 5;
            v = l, b = B;
          }
          for (var v = 0; v < 5; v++)
            for (var b = 0; b < 5; b++)
              f[v + 5 * b] = b + (2 * v + 3 * b) % 5 * 5;
          for (var _ = 1, m = 0; m < 24; m++) {
            for (var k = 0, H = 0, q = 0; q < 7; q++) {
              if (_ & 1) {
                var g = (1 << q) - 1;
                g < 32 ? H ^= 1 << g : k ^= 1 << g - 32;
              }
              _ & 128 ? _ = _ << 1 ^ 113 : _ <<= 1;
            }
            h[m] = x.create(k, H);
          }
        })();
        var d = [];
        (function() {
          for (var v = 0; v < 25; v++)
            d[v] = x.create();
        })();
        var F = s.SHA3 = n.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: n.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var v = this._state = [], b = 0; b < 25; b++)
              v[b] = new x.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(v, b) {
            for (var u = this._state, l = this.blockSize / 2, B = 0; B < l; B++) {
              var _ = v[b + 2 * B], m = v[b + 2 * B + 1];
              _ = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, m = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360;
              var k = u[B];
              k.high ^= m, k.low ^= _;
            }
            for (var H = 0; H < 24; H++) {
              for (var q = 0; q < 5; q++) {
                for (var g = 0, S = 0, z = 0; z < 5; z++) {
                  var k = u[q + 5 * z];
                  g ^= k.high, S ^= k.low;
                }
                var L = d[q];
                L.high = g, L.low = S;
              }
              for (var q = 0; q < 5; q++)
                for (var N = d[(q + 4) % 5], O = d[(q + 1) % 5], K = O.high, $ = O.low, g = N.high ^ (K << 1 | $ >>> 31), S = N.low ^ ($ << 1 | K >>> 31), z = 0; z < 5; z++) {
                  var k = u[q + 5 * z];
                  k.high ^= g, k.low ^= S;
                }
              for (var j = 1; j < 25; j++) {
                var g, S, k = u[j], J = k.high, Q = k.low, R = D[j];
                R < 32 ? (g = J << R | Q >>> 32 - R, S = Q << R | J >>> 32 - R) : (g = Q << R - 32 | J >>> 64 - R, S = J << R - 32 | Q >>> 64 - R);
                var P = d[f[j]];
                P.high = g, P.low = S;
              }
              var W = d[0], T = u[0];
              W.high = T.high, W.low = T.low;
              for (var q = 0; q < 5; q++)
                for (var z = 0; z < 5; z++) {
                  var j = q + 5 * z, k = u[j], r0 = d[j], Y = d[(q + 1) % 5 + 5 * z], s0 = d[(q + 2) % 5 + 5 * z];
                  k.high = r0.high ^ ~Y.high & s0.high, k.low = r0.low ^ ~Y.low & s0.low;
                }
              var k = u[0], M = h[H];
              k.high ^= M.high, k.low ^= M.low;
            }
          },
          _doFinalize: function() {
            var v = this._data, b = v.words;
            this._nDataBytes * 8;
            var u = v.sigBytes * 8, l = this.blockSize * 32;
            b[u >>> 5] |= 1 << 24 - u % 32, b[(i.ceil((u + 1) / l) * l >>> 5) - 1] |= 128, v.sigBytes = b.length * 4, this._process();
            for (var B = this._state, _ = this.cfg.outputLength / 8, m = _ / 8, k = [], H = 0; H < m; H++) {
              var q = B[H], g = q.high, S = q.low;
              g = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, S = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, k.push(S), k.push(g);
            }
            return new w.init(k, _);
          },
          clone: function() {
            for (var v = n.clone.call(this), b = v._state = this._state.slice(0), u = 0; u < 25; u++)
              b[u] = b[u].clone();
            return v;
          }
        });
        A.SHA3 = n._createHelper(F), A.HmacSHA3 = n._createHmacHelper(F);
      }(Math), a.SHA3;
    });
  }(Z0)), Z0.exports;
}
var Y0 = { exports: {} }, Gr;
function se() {
  return Gr || (Gr = 1, function(y, c) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(i) {
        var A = a, p = A.lib, w = p.WordArray, n = p.Hasher, E = A.algo, x = w.create([
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
        ]), s = w.create([
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
        ]), D = w.create([
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
        ]), f = w.create([
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
        ]), h = w.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), d = w.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), F = E.RIPEMD160 = n.extend({
          _doReset: function() {
            this._hash = w.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(m, k) {
            for (var H = 0; H < 16; H++) {
              var q = k + H, g = m[q];
              m[q] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
            }
            var S = this._hash.words, z = h.words, L = d.words, N = x.words, O = s.words, K = D.words, $ = f.words, j, J, Q, R, P, W, T, r0, Y, s0;
            W = j = S[0], T = J = S[1], r0 = Q = S[2], Y = R = S[3], s0 = P = S[4];
            for (var M, H = 0; H < 80; H += 1)
              M = j + m[k + N[H]] | 0, H < 16 ? M += v(J, Q, R) + z[0] : H < 32 ? M += b(J, Q, R) + z[1] : H < 48 ? M += u(J, Q, R) + z[2] : H < 64 ? M += l(J, Q, R) + z[3] : M += B(J, Q, R) + z[4], M = M | 0, M = _(M, K[H]), M = M + P | 0, j = P, P = R, R = _(Q, 10), Q = J, J = M, M = W + m[k + O[H]] | 0, H < 16 ? M += B(T, r0, Y) + L[0] : H < 32 ? M += l(T, r0, Y) + L[1] : H < 48 ? M += u(T, r0, Y) + L[2] : H < 64 ? M += b(T, r0, Y) + L[3] : M += v(T, r0, Y) + L[4], M = M | 0, M = _(M, $[H]), M = M + s0 | 0, W = s0, s0 = Y, Y = _(r0, 10), r0 = T, T = M;
            M = S[1] + Q + Y | 0, S[1] = S[2] + R + s0 | 0, S[2] = S[3] + P + W | 0, S[3] = S[4] + j + T | 0, S[4] = S[0] + J + r0 | 0, S[0] = M;
          },
          _doFinalize: function() {
            var m = this._data, k = m.words, H = this._nDataBytes * 8, q = m.sigBytes * 8;
            k[q >>> 5] |= 128 << 24 - q % 32, k[(q + 64 >>> 9 << 4) + 14] = (H << 8 | H >>> 24) & 16711935 | (H << 24 | H >>> 8) & 4278255360, m.sigBytes = (k.length + 1) * 4, this._process();
            for (var g = this._hash, S = g.words, z = 0; z < 5; z++) {
              var L = S[z];
              S[z] = (L << 8 | L >>> 24) & 16711935 | (L << 24 | L >>> 8) & 4278255360;
            }
            return g;
          },
          clone: function() {
            var m = n.clone.call(this);
            return m._hash = this._hash.clone(), m;
          }
        });
        function v(m, k, H) {
          return m ^ k ^ H;
        }
        function b(m, k, H) {
          return m & k | ~m & H;
        }
        function u(m, k, H) {
          return (m | ~k) ^ H;
        }
        function l(m, k, H) {
          return m & H | k & ~H;
        }
        function B(m, k, H) {
          return m ^ (k | ~H);
        }
        function _(m, k) {
          return m << k | m >>> 32 - k;
        }
        A.RIPEMD160 = n._createHelper(F), A.HmacRIPEMD160 = n._createHmacHelper(F);
      }(), a.RIPEMD160;
    });
  }(Y0)), Y0.exports;
}
var J0 = { exports: {} }, Vr;
function wr() {
  return Vr || (Vr = 1, function(y, c) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      (function() {
        var i = a, A = i.lib, p = A.Base, w = i.enc, n = w.Utf8, E = i.algo;
        E.HMAC = p.extend({
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
          init: function(x, s) {
            x = this._hasher = new x.init(), typeof s == "string" && (s = n.parse(s));
            var D = x.blockSize, f = D * 4;
            s.sigBytes > f && (s = x.finalize(s)), s.clamp();
            for (var h = this._oKey = s.clone(), d = this._iKey = s.clone(), F = h.words, v = d.words, b = 0; b < D; b++)
              F[b] ^= 1549556828, v[b] ^= 909522486;
            h.sigBytes = d.sigBytes = f, this.reset();
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
            var s = this._hasher, D = s.finalize(x);
            s.reset();
            var f = s.finalize(this._oKey.clone().concat(D));
            return f;
          }
        });
      })();
    });
  }(J0)), J0.exports;
}
var $0 = { exports: {} }, jr;
function ce() {
  return jr || (jr = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), gr(), wr());
    })(G, function(a) {
      return function() {
        var i = a, A = i.lib, p = A.Base, w = A.WordArray, n = i.algo, E = n.SHA256, x = n.HMAC, s = n.PBKDF2 = p.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: p.extend({
            keySize: 128 / 32,
            hasher: E,
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
          init: function(D) {
            this.cfg = this.cfg.extend(D);
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
          compute: function(D, f) {
            for (var h = this.cfg, d = x.create(h.hasher, D), F = w.create(), v = w.create([1]), b = F.words, u = v.words, l = h.keySize, B = h.iterations; b.length < l; ) {
              var _ = d.update(f).finalize(v);
              d.reset();
              for (var m = _.words, k = m.length, H = _, q = 1; q < B; q++) {
                H = d.finalize(H), d.reset();
                for (var g = H.words, S = 0; S < k; S++)
                  m[S] ^= g[S];
              }
              F.concat(_), u[0]++;
            }
            return F.sigBytes = l * 4, F;
          }
        });
        i.PBKDF2 = function(D, f, h) {
          return s.create(h).compute(D, f);
        };
      }(), a.PBKDF2;
    });
  }($0)), $0.exports;
}
var rr = { exports: {} }, Qr;
function D0() {
  return Qr || (Qr = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), Ft(), wr());
    })(G, function(a) {
      return function() {
        var i = a, A = i.lib, p = A.Base, w = A.WordArray, n = i.algo, E = n.MD5, x = n.EvpKDF = p.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: p.extend({
            keySize: 128 / 32,
            hasher: E,
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
          init: function(s) {
            this.cfg = this.cfg.extend(s);
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
          compute: function(s, D) {
            for (var f, h = this.cfg, d = h.hasher.create(), F = w.create(), v = F.words, b = h.keySize, u = h.iterations; v.length < b; ) {
              f && d.update(f), f = d.update(s).finalize(D), d.reset();
              for (var l = 1; l < u; l++)
                f = d.finalize(f), d.reset();
              F.concat(f);
            }
            return F.sigBytes = b * 4, F;
          }
        });
        i.EvpKDF = function(s, D, f) {
          return x.create(f).compute(s, D);
        };
      }(), a.EvpKDF;
    });
  }(rr)), rr.exports;
}
var tr = { exports: {} }, Zr;
function o0() {
  return Zr || (Zr = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), D0());
    })(G, function(a) {
      a.lib.Cipher || function(i) {
        var A = a, p = A.lib, w = p.Base, n = p.WordArray, E = p.BufferedBlockAlgorithm, x = A.enc;
        x.Utf8;
        var s = x.Base64, D = A.algo, f = D.EvpKDF, h = p.Cipher = E.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: w.extend(),
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
          createEncryptor: function(g, S) {
            return this.create(this._ENC_XFORM_MODE, g, S);
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
          createDecryptor: function(g, S) {
            return this.create(this._DEC_XFORM_MODE, g, S);
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
          init: function(g, S, z) {
            this.cfg = this.cfg.extend(z), this._xformMode = g, this._key = S, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            E.reset.call(this), this._doReset();
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
          process: function(g) {
            return this._append(g), this._process();
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
          finalize: function(g) {
            g && this._append(g);
            var S = this._doFinalize();
            return S;
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
            function g(S) {
              return typeof S == "string" ? q : m;
            }
            return function(S) {
              return {
                encrypt: function(z, L, N) {
                  return g(L).encrypt(S, z, L, N);
                },
                decrypt: function(z, L, N) {
                  return g(L).decrypt(S, z, L, N);
                }
              };
            };
          }()
        });
        p.StreamCipher = h.extend({
          _doFinalize: function() {
            var g = this._process(!0);
            return g;
          },
          blockSize: 1
        });
        var d = A.mode = {}, F = p.BlockCipherMode = w.extend({
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
          createEncryptor: function(g, S) {
            return this.Encryptor.create(g, S);
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
          createDecryptor: function(g, S) {
            return this.Decryptor.create(g, S);
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
          init: function(g, S) {
            this._cipher = g, this._iv = S;
          }
        }), v = d.CBC = function() {
          var g = F.extend();
          g.Encryptor = g.extend({
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
            processBlock: function(z, L) {
              var N = this._cipher, O = N.blockSize;
              S.call(this, z, L, O), N.encryptBlock(z, L), this._prevBlock = z.slice(L, L + O);
            }
          }), g.Decryptor = g.extend({
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
            processBlock: function(z, L) {
              var N = this._cipher, O = N.blockSize, K = z.slice(L, L + O);
              N.decryptBlock(z, L), S.call(this, z, L, O), this._prevBlock = K;
            }
          });
          function S(z, L, N) {
            var O, K = this._iv;
            K ? (O = K, this._iv = i) : O = this._prevBlock;
            for (var $ = 0; $ < N; $++)
              z[L + $] ^= O[$];
          }
          return g;
        }(), b = A.pad = {}, u = b.Pkcs7 = {
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
          pad: function(g, S) {
            for (var z = S * 4, L = z - g.sigBytes % z, N = L << 24 | L << 16 | L << 8 | L, O = [], K = 0; K < L; K += 4)
              O.push(N);
            var $ = n.create(O, L);
            g.concat($);
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
          unpad: function(g) {
            var S = g.words[g.sigBytes - 1 >>> 2] & 255;
            g.sigBytes -= S;
          }
        };
        p.BlockCipher = h.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: h.cfg.extend({
            mode: v,
            padding: u
          }),
          reset: function() {
            var g;
            h.reset.call(this);
            var S = this.cfg, z = S.iv, L = S.mode;
            this._xformMode == this._ENC_XFORM_MODE ? g = L.createEncryptor : (g = L.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == g ? this._mode.init(this, z && z.words) : (this._mode = g.call(L, this, z && z.words), this._mode.__creator = g);
          },
          _doProcessBlock: function(g, S) {
            this._mode.processBlock(g, S);
          },
          _doFinalize: function() {
            var g, S = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (S.pad(this._data, this.blockSize), g = this._process(!0)) : (g = this._process(!0), S.unpad(g)), g;
          },
          blockSize: 128 / 32
        });
        var l = p.CipherParams = w.extend({
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
          init: function(g) {
            this.mixIn(g);
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
          toString: function(g) {
            return (g || this.formatter).stringify(this);
          }
        }), B = A.format = {}, _ = B.OpenSSL = {
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
          stringify: function(g) {
            var S, z = g.ciphertext, L = g.salt;
            return L ? S = n.create([1398893684, 1701076831]).concat(L).concat(z) : S = z, S.toString(s);
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
          parse: function(g) {
            var S, z = s.parse(g), L = z.words;
            return L[0] == 1398893684 && L[1] == 1701076831 && (S = n.create(L.slice(2, 4)), L.splice(0, 4), z.sigBytes -= 16), l.create({ ciphertext: z, salt: S });
          }
        }, m = p.SerializableCipher = w.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: w.extend({
            format: _
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
          encrypt: function(g, S, z, L) {
            L = this.cfg.extend(L);
            var N = g.createEncryptor(z, L), O = N.finalize(S), K = N.cfg;
            return l.create({
              ciphertext: O,
              key: z,
              iv: K.iv,
              algorithm: g,
              mode: K.mode,
              padding: K.padding,
              blockSize: g.blockSize,
              formatter: L.format
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
          decrypt: function(g, S, z, L) {
            L = this.cfg.extend(L), S = this._parse(S, L.format);
            var N = g.createDecryptor(z, L).finalize(S.ciphertext);
            return N;
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
          _parse: function(g, S) {
            return typeof g == "string" ? S.parse(g, this) : g;
          }
        }), k = A.kdf = {}, H = k.OpenSSL = {
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
          execute: function(g, S, z, L, N) {
            if (L || (L = n.random(64 / 8)), N)
              var O = f.create({ keySize: S + z, hasher: N }).compute(g, L);
            else
              var O = f.create({ keySize: S + z }).compute(g, L);
            var K = n.create(O.words.slice(S), z * 4);
            return O.sigBytes = S * 4, l.create({ key: O, iv: K, salt: L });
          }
        }, q = p.PasswordBasedCipher = m.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: m.cfg.extend({
            kdf: H
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
          encrypt: function(g, S, z, L) {
            L = this.cfg.extend(L);
            var N = L.kdf.execute(z, g.keySize, g.ivSize, L.salt, L.hasher);
            L.iv = N.iv;
            var O = m.encrypt.call(this, g, S, N.key, L);
            return O.mixIn(N), O;
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
          decrypt: function(g, S, z, L) {
            L = this.cfg.extend(L), S = this._parse(S, L.format);
            var N = L.kdf.execute(z, g.keySize, g.ivSize, S.salt, L.hasher);
            L.iv = N.iv;
            var O = m.decrypt.call(this, g, S, N.key, L);
            return O;
          }
        });
      }();
    });
  }(tr)), tr.exports;
}
var er = { exports: {} }, Yr;
function fe() {
  return Yr || (Yr = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), o0());
    })(G, function(a) {
      return a.mode.CFB = function() {
        var i = a.lib.BlockCipherMode.extend();
        i.Encryptor = i.extend({
          processBlock: function(p, w) {
            var n = this._cipher, E = n.blockSize;
            A.call(this, p, w, E, n), this._prevBlock = p.slice(w, w + E);
          }
        }), i.Decryptor = i.extend({
          processBlock: function(p, w) {
            var n = this._cipher, E = n.blockSize, x = p.slice(w, w + E);
            A.call(this, p, w, E, n), this._prevBlock = x;
          }
        });
        function A(p, w, n, E) {
          var x, s = this._iv;
          s ? (x = s.slice(0), this._iv = void 0) : x = this._prevBlock, E.encryptBlock(x, 0);
          for (var D = 0; D < n; D++)
            p[w + D] ^= x[D];
        }
        return i;
      }(), a.mode.CFB;
    });
  }(er)), er.exports;
}
var nr = { exports: {} }, Jr;
function ue() {
  return Jr || (Jr = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), o0());
    })(G, function(a) {
      return a.mode.CTR = function() {
        var i = a.lib.BlockCipherMode.extend(), A = i.Encryptor = i.extend({
          processBlock: function(p, w) {
            var n = this._cipher, E = n.blockSize, x = this._iv, s = this._counter;
            x && (s = this._counter = x.slice(0), this._iv = void 0);
            var D = s.slice(0);
            n.encryptBlock(D, 0), s[E - 1] = s[E - 1] + 1 | 0;
            for (var f = 0; f < E; f++)
              p[w + f] ^= D[f];
          }
        });
        return i.Decryptor = A, i;
      }(), a.mode.CTR;
    });
  }(nr)), nr.exports;
}
var ir = { exports: {} }, $r;
function le() {
  return $r || ($r = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), o0());
    })(G, function(a) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return a.mode.CTRGladman = function() {
        var i = a.lib.BlockCipherMode.extend();
        function A(n) {
          if ((n >> 24 & 255) === 255) {
            var E = n >> 16 & 255, x = n >> 8 & 255, s = n & 255;
            E === 255 ? (E = 0, x === 255 ? (x = 0, s === 255 ? s = 0 : ++s) : ++x) : ++E, n = 0, n += E << 16, n += x << 8, n += s;
          } else
            n += 1 << 24;
          return n;
        }
        function p(n) {
          return (n[0] = A(n[0])) === 0 && (n[1] = A(n[1])), n;
        }
        var w = i.Encryptor = i.extend({
          processBlock: function(n, E) {
            var x = this._cipher, s = x.blockSize, D = this._iv, f = this._counter;
            D && (f = this._counter = D.slice(0), this._iv = void 0), p(f);
            var h = f.slice(0);
            x.encryptBlock(h, 0);
            for (var d = 0; d < s; d++)
              n[E + d] ^= h[d];
          }
        });
        return i.Decryptor = w, i;
      }(), a.mode.CTRGladman;
    });
  }(ir)), ir.exports;
}
var xr = { exports: {} }, rt;
function he() {
  return rt || (rt = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), o0());
    })(G, function(a) {
      return a.mode.OFB = function() {
        var i = a.lib.BlockCipherMode.extend(), A = i.Encryptor = i.extend({
          processBlock: function(p, w) {
            var n = this._cipher, E = n.blockSize, x = this._iv, s = this._keystream;
            x && (s = this._keystream = x.slice(0), this._iv = void 0), n.encryptBlock(s, 0);
            for (var D = 0; D < E; D++)
              p[w + D] ^= s[D];
          }
        });
        return i.Decryptor = A, i;
      }(), a.mode.OFB;
    });
  }(xr)), xr.exports;
}
var ar = { exports: {} }, tt;
function de() {
  return tt || (tt = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), o0());
    })(G, function(a) {
      return a.mode.ECB = function() {
        var i = a.lib.BlockCipherMode.extend();
        return i.Encryptor = i.extend({
          processBlock: function(A, p) {
            this._cipher.encryptBlock(A, p);
          }
        }), i.Decryptor = i.extend({
          processBlock: function(A, p) {
            this._cipher.decryptBlock(A, p);
          }
        }), i;
      }(), a.mode.ECB;
    });
  }(ar)), ar.exports;
}
var or = { exports: {} }, et;
function pe() {
  return et || (et = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), o0());
    })(G, function(a) {
      return a.pad.AnsiX923 = {
        pad: function(i, A) {
          var p = i.sigBytes, w = A * 4, n = w - p % w, E = p + n - 1;
          i.clamp(), i.words[E >>> 2] |= n << 24 - E % 4 * 8, i.sigBytes += n;
        },
        unpad: function(i) {
          var A = i.words[i.sigBytes - 1 >>> 2] & 255;
          i.sigBytes -= A;
        }
      }, a.pad.Ansix923;
    });
  }(or)), or.exports;
}
var sr = { exports: {} }, nt;
function Be() {
  return nt || (nt = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), o0());
    })(G, function(a) {
      return a.pad.Iso10126 = {
        pad: function(i, A) {
          var p = A * 4, w = p - i.sigBytes % p;
          i.concat(a.lib.WordArray.random(w - 1)).concat(a.lib.WordArray.create([w << 24], 1));
        },
        unpad: function(i) {
          var A = i.words[i.sigBytes - 1 >>> 2] & 255;
          i.sigBytes -= A;
        }
      }, a.pad.Iso10126;
    });
  }(sr)), sr.exports;
}
var cr = { exports: {} }, it;
function ve() {
  return it || (it = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), o0());
    })(G, function(a) {
      return a.pad.Iso97971 = {
        pad: function(i, A) {
          i.concat(a.lib.WordArray.create([2147483648], 1)), a.pad.ZeroPadding.pad(i, A);
        },
        unpad: function(i) {
          a.pad.ZeroPadding.unpad(i), i.sigBytes--;
        }
      }, a.pad.Iso97971;
    });
  }(cr)), cr.exports;
}
var fr = { exports: {} }, xt;
function Ae() {
  return xt || (xt = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), o0());
    })(G, function(a) {
      return a.pad.ZeroPadding = {
        pad: function(i, A) {
          var p = A * 4;
          i.clamp(), i.sigBytes += p - (i.sigBytes % p || p);
        },
        unpad: function(i) {
          for (var A = i.words, p = i.sigBytes - 1, p = i.sigBytes - 1; p >= 0; p--)
            if (A[p >>> 2] >>> 24 - p % 4 * 8 & 255) {
              i.sigBytes = p + 1;
              break;
            }
        }
      }, a.pad.ZeroPadding;
    });
  }(fr)), fr.exports;
}
var ur = { exports: {} }, at;
function Ee() {
  return at || (at = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), o0());
    })(G, function(a) {
      return a.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, a.pad.NoPadding;
    });
  }(ur)), ur.exports;
}
var lr = { exports: {} }, ot;
function Ce() {
  return ot || (ot = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), o0());
    })(G, function(a) {
      return function(i) {
        var A = a, p = A.lib, w = p.CipherParams, n = A.enc, E = n.Hex, x = A.format;
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
          stringify: function(s) {
            return s.ciphertext.toString(E);
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
          parse: function(s) {
            var D = E.parse(s);
            return w.create({ ciphertext: D });
          }
        };
      }(), a.format.Hex;
    });
  }(lr)), lr.exports;
}
var hr = { exports: {} }, st;
function Fe() {
  return st || (st = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), b0(), _0(), D0(), o0());
    })(G, function(a) {
      return function() {
        var i = a, A = i.lib, p = A.BlockCipher, w = i.algo, n = [], E = [], x = [], s = [], D = [], f = [], h = [], d = [], F = [], v = [];
        (function() {
          for (var l = [], B = 0; B < 256; B++)
            B < 128 ? l[B] = B << 1 : l[B] = B << 1 ^ 283;
          for (var _ = 0, m = 0, B = 0; B < 256; B++) {
            var k = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4;
            k = k >>> 8 ^ k & 255 ^ 99, n[_] = k, E[k] = _;
            var H = l[_], q = l[H], g = l[q], S = l[k] * 257 ^ k * 16843008;
            x[_] = S << 24 | S >>> 8, s[_] = S << 16 | S >>> 16, D[_] = S << 8 | S >>> 24, f[_] = S;
            var S = g * 16843009 ^ q * 65537 ^ H * 257 ^ _ * 16843008;
            h[k] = S << 24 | S >>> 8, d[k] = S << 16 | S >>> 16, F[k] = S << 8 | S >>> 24, v[k] = S, _ ? (_ = H ^ l[l[l[g ^ H]]], m ^= l[l[m]]) : _ = m = 1;
          }
        })();
        var b = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], u = w.AES = p.extend({
          _doReset: function() {
            var l;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var B = this._keyPriorReset = this._key, _ = B.words, m = B.sigBytes / 4, k = this._nRounds = m + 6, H = (k + 1) * 4, q = this._keySchedule = [], g = 0; g < H; g++)
                g < m ? q[g] = _[g] : (l = q[g - 1], g % m ? m > 6 && g % m == 4 && (l = n[l >>> 24] << 24 | n[l >>> 16 & 255] << 16 | n[l >>> 8 & 255] << 8 | n[l & 255]) : (l = l << 8 | l >>> 24, l = n[l >>> 24] << 24 | n[l >>> 16 & 255] << 16 | n[l >>> 8 & 255] << 8 | n[l & 255], l ^= b[g / m | 0] << 24), q[g] = q[g - m] ^ l);
              for (var S = this._invKeySchedule = [], z = 0; z < H; z++) {
                var g = H - z;
                if (z % 4)
                  var l = q[g];
                else
                  var l = q[g - 4];
                z < 4 || g <= 4 ? S[z] = l : S[z] = h[n[l >>> 24]] ^ d[n[l >>> 16 & 255]] ^ F[n[l >>> 8 & 255]] ^ v[n[l & 255]];
              }
            }
          },
          encryptBlock: function(l, B) {
            this._doCryptBlock(l, B, this._keySchedule, x, s, D, f, n);
          },
          decryptBlock: function(l, B) {
            var _ = l[B + 1];
            l[B + 1] = l[B + 3], l[B + 3] = _, this._doCryptBlock(l, B, this._invKeySchedule, h, d, F, v, E);
            var _ = l[B + 1];
            l[B + 1] = l[B + 3], l[B + 3] = _;
          },
          _doCryptBlock: function(l, B, _, m, k, H, q, g) {
            for (var S = this._nRounds, z = l[B] ^ _[0], L = l[B + 1] ^ _[1], N = l[B + 2] ^ _[2], O = l[B + 3] ^ _[3], K = 4, $ = 1; $ < S; $++) {
              var j = m[z >>> 24] ^ k[L >>> 16 & 255] ^ H[N >>> 8 & 255] ^ q[O & 255] ^ _[K++], J = m[L >>> 24] ^ k[N >>> 16 & 255] ^ H[O >>> 8 & 255] ^ q[z & 255] ^ _[K++], Q = m[N >>> 24] ^ k[O >>> 16 & 255] ^ H[z >>> 8 & 255] ^ q[L & 255] ^ _[K++], R = m[O >>> 24] ^ k[z >>> 16 & 255] ^ H[L >>> 8 & 255] ^ q[N & 255] ^ _[K++];
              z = j, L = J, N = Q, O = R;
            }
            var j = (g[z >>> 24] << 24 | g[L >>> 16 & 255] << 16 | g[N >>> 8 & 255] << 8 | g[O & 255]) ^ _[K++], J = (g[L >>> 24] << 24 | g[N >>> 16 & 255] << 16 | g[O >>> 8 & 255] << 8 | g[z & 255]) ^ _[K++], Q = (g[N >>> 24] << 24 | g[O >>> 16 & 255] << 16 | g[z >>> 8 & 255] << 8 | g[L & 255]) ^ _[K++], R = (g[O >>> 24] << 24 | g[z >>> 16 & 255] << 16 | g[L >>> 8 & 255] << 8 | g[N & 255]) ^ _[K++];
            l[B] = j, l[B + 1] = J, l[B + 2] = Q, l[B + 3] = R;
          },
          keySize: 256 / 32
        });
        i.AES = p._createHelper(u);
      }(), a.AES;
    });
  }(hr)), hr.exports;
}
var dr = { exports: {} }, ct;
function ye() {
  return ct || (ct = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), b0(), _0(), D0(), o0());
    })(G, function(a) {
      return function() {
        var i = a, A = i.lib, p = A.WordArray, w = A.BlockCipher, n = i.algo, E = [
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
        ], s = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], D = [
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
        ], f = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], h = n.DES = w.extend({
          _doReset: function() {
            for (var b = this._key, u = b.words, l = [], B = 0; B < 56; B++) {
              var _ = E[B] - 1;
              l[B] = u[_ >>> 5] >>> 31 - _ % 32 & 1;
            }
            for (var m = this._subKeys = [], k = 0; k < 16; k++) {
              for (var H = m[k] = [], q = s[k], B = 0; B < 24; B++)
                H[B / 6 | 0] |= l[(x[B] - 1 + q) % 28] << 31 - B % 6, H[4 + (B / 6 | 0)] |= l[28 + (x[B + 24] - 1 + q) % 28] << 31 - B % 6;
              H[0] = H[0] << 1 | H[0] >>> 31;
              for (var B = 1; B < 7; B++)
                H[B] = H[B] >>> (B - 1) * 4 + 3;
              H[7] = H[7] << 5 | H[7] >>> 27;
            }
            for (var g = this._invSubKeys = [], B = 0; B < 16; B++)
              g[B] = m[15 - B];
          },
          encryptBlock: function(b, u) {
            this._doCryptBlock(b, u, this._subKeys);
          },
          decryptBlock: function(b, u) {
            this._doCryptBlock(b, u, this._invSubKeys);
          },
          _doCryptBlock: function(b, u, l) {
            this._lBlock = b[u], this._rBlock = b[u + 1], d.call(this, 4, 252645135), d.call(this, 16, 65535), F.call(this, 2, 858993459), F.call(this, 8, 16711935), d.call(this, 1, 1431655765);
            for (var B = 0; B < 16; B++) {
              for (var _ = l[B], m = this._lBlock, k = this._rBlock, H = 0, q = 0; q < 8; q++)
                H |= D[q][((k ^ _[q]) & f[q]) >>> 0];
              this._lBlock = k, this._rBlock = m ^ H;
            }
            var g = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = g, d.call(this, 1, 1431655765), F.call(this, 8, 16711935), F.call(this, 2, 858993459), d.call(this, 16, 65535), d.call(this, 4, 252645135), b[u] = this._lBlock, b[u + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function d(b, u) {
          var l = (this._lBlock >>> b ^ this._rBlock) & u;
          this._rBlock ^= l, this._lBlock ^= l << b;
        }
        function F(b, u) {
          var l = (this._rBlock >>> b ^ this._lBlock) & u;
          this._lBlock ^= l, this._rBlock ^= l << b;
        }
        i.DES = w._createHelper(h);
        var v = n.TripleDES = w.extend({
          _doReset: function() {
            var b = this._key, u = b.words;
            if (u.length !== 2 && u.length !== 4 && u.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var l = u.slice(0, 2), B = u.length < 4 ? u.slice(0, 2) : u.slice(2, 4), _ = u.length < 6 ? u.slice(0, 2) : u.slice(4, 6);
            this._des1 = h.createEncryptor(p.create(l)), this._des2 = h.createEncryptor(p.create(B)), this._des3 = h.createEncryptor(p.create(_));
          },
          encryptBlock: function(b, u) {
            this._des1.encryptBlock(b, u), this._des2.decryptBlock(b, u), this._des3.encryptBlock(b, u);
          },
          decryptBlock: function(b, u) {
            this._des3.decryptBlock(b, u), this._des2.encryptBlock(b, u), this._des1.decryptBlock(b, u);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        i.TripleDES = w._createHelper(v);
      }(), a.TripleDES;
    });
  }(dr)), dr.exports;
}
var pr = { exports: {} }, ft;
function De() {
  return ft || (ft = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), b0(), _0(), D0(), o0());
    })(G, function(a) {
      return function() {
        var i = a, A = i.lib, p = A.StreamCipher, w = i.algo, n = w.RC4 = p.extend({
          _doReset: function() {
            for (var s = this._key, D = s.words, f = s.sigBytes, h = this._S = [], d = 0; d < 256; d++)
              h[d] = d;
            for (var d = 0, F = 0; d < 256; d++) {
              var v = d % f, b = D[v >>> 2] >>> 24 - v % 4 * 8 & 255;
              F = (F + h[d] + b) % 256;
              var u = h[d];
              h[d] = h[F], h[F] = u;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(s, D) {
            s[D] ^= E.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function E() {
          for (var s = this._S, D = this._i, f = this._j, h = 0, d = 0; d < 4; d++) {
            D = (D + 1) % 256, f = (f + s[D]) % 256;
            var F = s[D];
            s[D] = s[f], s[f] = F, h |= s[(s[D] + s[f]) % 256] << 24 - d * 8;
          }
          return this._i = D, this._j = f, h;
        }
        i.RC4 = p._createHelper(n);
        var x = w.RC4Drop = n.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: n.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            n._doReset.call(this);
            for (var s = this.cfg.drop; s > 0; s--)
              E.call(this);
          }
        });
        i.RC4Drop = p._createHelper(x);
      }(), a.RC4;
    });
  }(pr)), pr.exports;
}
var Br = { exports: {} }, ut;
function ge() {
  return ut || (ut = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), b0(), _0(), D0(), o0());
    })(G, function(a) {
      return function() {
        var i = a, A = i.lib, p = A.StreamCipher, w = i.algo, n = [], E = [], x = [], s = w.Rabbit = p.extend({
          _doReset: function() {
            for (var f = this._key.words, h = this.cfg.iv, d = 0; d < 4; d++)
              f[d] = (f[d] << 8 | f[d] >>> 24) & 16711935 | (f[d] << 24 | f[d] >>> 8) & 4278255360;
            var F = this._X = [
              f[0],
              f[3] << 16 | f[2] >>> 16,
              f[1],
              f[0] << 16 | f[3] >>> 16,
              f[2],
              f[1] << 16 | f[0] >>> 16,
              f[3],
              f[2] << 16 | f[1] >>> 16
            ], v = this._C = [
              f[2] << 16 | f[2] >>> 16,
              f[0] & 4294901760 | f[1] & 65535,
              f[3] << 16 | f[3] >>> 16,
              f[1] & 4294901760 | f[2] & 65535,
              f[0] << 16 | f[0] >>> 16,
              f[2] & 4294901760 | f[3] & 65535,
              f[1] << 16 | f[1] >>> 16,
              f[3] & 4294901760 | f[0] & 65535
            ];
            this._b = 0;
            for (var d = 0; d < 4; d++)
              D.call(this);
            for (var d = 0; d < 8; d++)
              v[d] ^= F[d + 4 & 7];
            if (h) {
              var b = h.words, u = b[0], l = b[1], B = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360, _ = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, m = B >>> 16 | _ & 4294901760, k = _ << 16 | B & 65535;
              v[0] ^= B, v[1] ^= m, v[2] ^= _, v[3] ^= k, v[4] ^= B, v[5] ^= m, v[6] ^= _, v[7] ^= k;
              for (var d = 0; d < 4; d++)
                D.call(this);
            }
          },
          _doProcessBlock: function(f, h) {
            var d = this._X;
            D.call(this), n[0] = d[0] ^ d[5] >>> 16 ^ d[3] << 16, n[1] = d[2] ^ d[7] >>> 16 ^ d[5] << 16, n[2] = d[4] ^ d[1] >>> 16 ^ d[7] << 16, n[3] = d[6] ^ d[3] >>> 16 ^ d[1] << 16;
            for (var F = 0; F < 4; F++)
              n[F] = (n[F] << 8 | n[F] >>> 24) & 16711935 | (n[F] << 24 | n[F] >>> 8) & 4278255360, f[h + F] ^= n[F];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function D() {
          for (var f = this._X, h = this._C, d = 0; d < 8; d++)
            E[d] = h[d];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < E[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < E[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < E[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < E[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < E[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < E[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < E[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < E[7] >>> 0 ? 1 : 0;
          for (var d = 0; d < 8; d++) {
            var F = f[d] + h[d], v = F & 65535, b = F >>> 16, u = ((v * v >>> 17) + v * b >>> 15) + b * b, l = ((F & 4294901760) * F | 0) + ((F & 65535) * F | 0);
            x[d] = u ^ l;
          }
          f[0] = x[0] + (x[7] << 16 | x[7] >>> 16) + (x[6] << 16 | x[6] >>> 16) | 0, f[1] = x[1] + (x[0] << 8 | x[0] >>> 24) + x[7] | 0, f[2] = x[2] + (x[1] << 16 | x[1] >>> 16) + (x[0] << 16 | x[0] >>> 16) | 0, f[3] = x[3] + (x[2] << 8 | x[2] >>> 24) + x[1] | 0, f[4] = x[4] + (x[3] << 16 | x[3] >>> 16) + (x[2] << 16 | x[2] >>> 16) | 0, f[5] = x[5] + (x[4] << 8 | x[4] >>> 24) + x[3] | 0, f[6] = x[6] + (x[5] << 16 | x[5] >>> 16) + (x[4] << 16 | x[4] >>> 16) | 0, f[7] = x[7] + (x[6] << 8 | x[6] >>> 24) + x[5] | 0;
        }
        i.Rabbit = p._createHelper(s);
      }(), a.Rabbit;
    });
  }(Br)), Br.exports;
}
var vr = { exports: {} }, lt;
function we() {
  return lt || (lt = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), b0(), _0(), D0(), o0());
    })(G, function(a) {
      return function() {
        var i = a, A = i.lib, p = A.StreamCipher, w = i.algo, n = [], E = [], x = [], s = w.RabbitLegacy = p.extend({
          _doReset: function() {
            var f = this._key.words, h = this.cfg.iv, d = this._X = [
              f[0],
              f[3] << 16 | f[2] >>> 16,
              f[1],
              f[0] << 16 | f[3] >>> 16,
              f[2],
              f[1] << 16 | f[0] >>> 16,
              f[3],
              f[2] << 16 | f[1] >>> 16
            ], F = this._C = [
              f[2] << 16 | f[2] >>> 16,
              f[0] & 4294901760 | f[1] & 65535,
              f[3] << 16 | f[3] >>> 16,
              f[1] & 4294901760 | f[2] & 65535,
              f[0] << 16 | f[0] >>> 16,
              f[2] & 4294901760 | f[3] & 65535,
              f[1] << 16 | f[1] >>> 16,
              f[3] & 4294901760 | f[0] & 65535
            ];
            this._b = 0;
            for (var v = 0; v < 4; v++)
              D.call(this);
            for (var v = 0; v < 8; v++)
              F[v] ^= d[v + 4 & 7];
            if (h) {
              var b = h.words, u = b[0], l = b[1], B = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360, _ = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, m = B >>> 16 | _ & 4294901760, k = _ << 16 | B & 65535;
              F[0] ^= B, F[1] ^= m, F[2] ^= _, F[3] ^= k, F[4] ^= B, F[5] ^= m, F[6] ^= _, F[7] ^= k;
              for (var v = 0; v < 4; v++)
                D.call(this);
            }
          },
          _doProcessBlock: function(f, h) {
            var d = this._X;
            D.call(this), n[0] = d[0] ^ d[5] >>> 16 ^ d[3] << 16, n[1] = d[2] ^ d[7] >>> 16 ^ d[5] << 16, n[2] = d[4] ^ d[1] >>> 16 ^ d[7] << 16, n[3] = d[6] ^ d[3] >>> 16 ^ d[1] << 16;
            for (var F = 0; F < 4; F++)
              n[F] = (n[F] << 8 | n[F] >>> 24) & 16711935 | (n[F] << 24 | n[F] >>> 8) & 4278255360, f[h + F] ^= n[F];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function D() {
          for (var f = this._X, h = this._C, d = 0; d < 8; d++)
            E[d] = h[d];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < E[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < E[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < E[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < E[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < E[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < E[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < E[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < E[7] >>> 0 ? 1 : 0;
          for (var d = 0; d < 8; d++) {
            var F = f[d] + h[d], v = F & 65535, b = F >>> 16, u = ((v * v >>> 17) + v * b >>> 15) + b * b, l = ((F & 4294901760) * F | 0) + ((F & 65535) * F | 0);
            x[d] = u ^ l;
          }
          f[0] = x[0] + (x[7] << 16 | x[7] >>> 16) + (x[6] << 16 | x[6] >>> 16) | 0, f[1] = x[1] + (x[0] << 8 | x[0] >>> 24) + x[7] | 0, f[2] = x[2] + (x[1] << 16 | x[1] >>> 16) + (x[0] << 16 | x[0] >>> 16) | 0, f[3] = x[3] + (x[2] << 8 | x[2] >>> 24) + x[1] | 0, f[4] = x[4] + (x[3] << 16 | x[3] >>> 16) + (x[2] << 16 | x[2] >>> 16) | 0, f[5] = x[5] + (x[4] << 8 | x[4] >>> 24) + x[3] | 0, f[6] = x[6] + (x[5] << 16 | x[5] >>> 16) + (x[4] << 16 | x[4] >>> 16) | 0, f[7] = x[7] + (x[6] << 8 | x[6] >>> 24) + x[5] | 0;
        }
        i.RabbitLegacy = p._createHelper(s);
      }(), a.RabbitLegacy;
    });
  }(vr)), vr.exports;
}
var Ar = { exports: {} }, ht;
function be() {
  return ht || (ht = 1, function(y, c) {
    (function(a, i, A) {
      y.exports = i(V(), b0(), _0(), D0(), o0());
    })(G, function(a) {
      return function() {
        var i = a, A = i.lib, p = A.BlockCipher, w = i.algo;
        const n = 16, E = [
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
        var s = {
          pbox: [],
          sbox: []
        };
        function D(v, b) {
          let u = b >> 24 & 255, l = b >> 16 & 255, B = b >> 8 & 255, _ = b & 255, m = v.sbox[0][u] + v.sbox[1][l];
          return m = m ^ v.sbox[2][B], m = m + v.sbox[3][_], m;
        }
        function f(v, b, u) {
          let l = b, B = u, _;
          for (let m = 0; m < n; ++m)
            l = l ^ v.pbox[m], B = D(v, l) ^ B, _ = l, l = B, B = _;
          return _ = l, l = B, B = _, B = B ^ v.pbox[n], l = l ^ v.pbox[n + 1], { left: l, right: B };
        }
        function h(v, b, u) {
          let l = b, B = u, _;
          for (let m = n + 1; m > 1; --m)
            l = l ^ v.pbox[m], B = D(v, l) ^ B, _ = l, l = B, B = _;
          return _ = l, l = B, B = _, B = B ^ v.pbox[1], l = l ^ v.pbox[0], { left: l, right: B };
        }
        function d(v, b, u) {
          for (let k = 0; k < 4; k++) {
            v.sbox[k] = [];
            for (let H = 0; H < 256; H++)
              v.sbox[k][H] = x[k][H];
          }
          let l = 0;
          for (let k = 0; k < n + 2; k++)
            v.pbox[k] = E[k] ^ b[l], l++, l >= u && (l = 0);
          let B = 0, _ = 0, m = 0;
          for (let k = 0; k < n + 2; k += 2)
            m = f(v, B, _), B = m.left, _ = m.right, v.pbox[k] = B, v.pbox[k + 1] = _;
          for (let k = 0; k < 4; k++)
            for (let H = 0; H < 256; H += 2)
              m = f(v, B, _), B = m.left, _ = m.right, v.sbox[k][H] = B, v.sbox[k][H + 1] = _;
          return !0;
        }
        var F = w.Blowfish = p.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var v = this._keyPriorReset = this._key, b = v.words, u = v.sigBytes / 4;
              d(s, b, u);
            }
          },
          encryptBlock: function(v, b) {
            var u = f(s, v[b], v[b + 1]);
            v[b] = u.left, v[b + 1] = u.right;
          },
          decryptBlock: function(v, b) {
            var u = h(s, v[b], v[b + 1]);
            v[b] = u.left, v[b + 1] = u.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        i.Blowfish = p._createHelper(F);
      }(), a.Blowfish;
    });
  }(Ar)), Ar.exports;
}
(function(y, c) {
  (function(a, i, A) {
    y.exports = i(V(), z0(), ee(), ne(), b0(), ie(), _0(), Ft(), gr(), xe(), yt(), ae(), oe(), se(), wr(), ce(), D0(), o0(), fe(), ue(), le(), he(), de(), pe(), Be(), ve(), Ae(), Ee(), Ce(), Fe(), ye(), De(), ge(), we(), be());
  })(G, function(a) {
    return a;
  });
})(Ct);
var _e = Ct.exports;
const Dt = /* @__PURE__ */ Ot(_e);
window.Buffer = H0.Buffer;
const me = H0.Buffer.alloc(32), Ie = `
account-id`, ke = (y) => y < 0 ? (Number(y) >>> 0).toString(16) : Number(y).toString(16), Se = (y) => {
  const c = Nt.unsigned(H0.Buffer.from(y));
  return ke(c).padStart(8, "0");
}, dt = (y) => {
  const c = [];
  let a;
  for (a = 0; a < y.length; a += 1)
    c[a / 4 | 0] |= y[a] << 24 - 8 * a;
  return Dt.lib.WordArray.create(c, y.length);
}, Re = (y, c) => {
  const a = [];
  return c > 0 && a.push(y >>> 24), c > 1 && a.push(y >>> 16 & 255), c > 2 && a.push(y >>> 8 & 255), c > 3 && a.push(y & 255), a;
}, He = (y, c) => {
  y.hasOwnProperty("sigBytes") && y.hasOwnProperty("words") && (c = y.sigBytes, y = y.words);
  let a = [], i, A = 0;
  for (; c > 0; )
    i = Re(y[A], Math.min(4, c)), c -= i.length, a = [...a, i], A++;
  return [].concat.apply([], a);
}, Cr = (y, c = "") => {
  try {
    var a = vt.from(y);
    const i = Dt.algo.SHA224.create();
    i.update(Ie), i.update(dt(a.toUint8Array()));
    const A = H0.Buffer.from(me);
    c && A.writeUInt32BE(c), i.update(dt(A));
    const p = i.finalize(), w = He(p, 28);
    return Se(w) + p.toString();
  } catch (i) {
    return console.log(i), !1;
  }
};
class Ue extends U0 {
  constructor() {
    super(), this.name = "NNS", this.logo = "path_to_nns_logo.svg", this.readyState = "Loadable", this.url = "http://localhost:4943", this.authClient = null, this.agent = null;
  }
  async isAvailable() {
    return this.authClient || (this.authClient = await Rr.create()), !0;
  }
  async connect(c = { whitelist: [], host: "", identityProvider: "" }) {
    this.authClient || (this.authClient = await Rr.create());
    const a = await this.authClient.isAuthenticated();
    return new Promise(async (i, A) => {
      if (!a)
        this.authClient.login({
          identityProvider: c.identityProvider || this.url,
          onSuccess: async () => {
            try {
              const p = await this._continueLogin(c.host || this.url);
              i(p);
            } catch (p) {
              A(p);
            }
          },
          onError: A
        });
      else
        try {
          const p = await this._continueLogin(c.host || this.url);
          i(p);
        } catch (p) {
          A(p);
        }
    });
  }
  async _continueLogin(c) {
    try {
      const a = this.authClient.getIdentity(), i = a.getPrincipal();
      return this.agent = Er.createSync({
        identity: a,
        host: c
      }), (this.url.includes("localhost") || this.url.includes("127.0.0.1")) && await this.agent.fetchRootKey(), {
        accountId: Cr(i.toString()),
        principalId: i.toString()
      };
    } catch (a) {
      throw console.error("Error during _continueLogin:", a), a;
    }
  }
  async disconnect() {
    this.authClient && (await this.authClient.logout(), this.readyState = "Loadable", this.agent = null);
  }
  async createActor(c, a) {
    if (!c || !a)
      throw new Error("Canister ID and Interface Factory are required");
    if (!this.agent)
      throw new Error("Agent is not initialized. Ensure the wallet is connected.");
    return pt.createActor(a, { agent: this.agent, canisterId: c });
  }
  async createAgent(c) {
    if (!this.authClient)
      throw new Error("AuthClient is not initialized");
    const a = this.authClient.getIdentity(), i = Er.createSync({ identity: a, host: c });
    return (this.url.includes("localhost") || this.url.includes("127.0.0.1")) && await this.agent.fetchRootKey(), i;
  }
  async getAccountId() {
    if (!this.authClient || !this.agent)
      throw new Error("Wallet is not connected or initialized");
    const a = await this.authClient.getIdentity().getPrincipal();
    return Cr(a.toString());
  }
  async getPrincipal() {
    if (!this.authClient)
      throw new Error("AuthClient is not initialized");
    return this.authClient.getIdentity().getPrincipal().toString();
  }
}
class Pe extends U0 {
  constructor() {
    super(), this.name = "Plug", this.logo = "path_to_plug_logo.svg", this.readyState = "NotDetected", this.url = "https://plugwallet.ooo/";
  }
  async isAvailable() {
    return !!(window.ic && window.ic.plug);
  }
  async connect(c) {
    if (!await this.isAvailable())
      return this.readyState = "NotDetected", window.open(this.url, "_blank"), !1;
    try {
      if (!await window.ic.plug.isConnected() && !await window.ic.plug.requestConnect({
        whitelist: c.whitelist,
        host: c.host,
        timeout: c.timeout || 12e4,
        onConnectionUpdate: () => {
          console.log("Connection updated");
        }
      }))
        throw new Error("Failed to connect to Plug wallet");
      await window.ic.plug.createAgent({
        whitelist: c.whitelist,
        host: c.host
      });
      const i = await window.ic.plug.agent.getPrincipal(), A = window.ic.plug.accountId;
      return this.readyState = "Installed", {
        accountId: A,
        principalId: i.toString()
      };
    } catch (a) {
      return console.error("Error connecting to Plug wallet:", a), !1;
    }
  }
  async disconnect() {
    window.ic && window.ic.plug && window.ic.plug.disconnect && await window.ic.plug.disconnect();
  }
  async transfer(c) {
    if (!window.ic || !window.ic.plug)
      throw new Error("Plug wallet is not installed or initialized");
    return window.ic.plug.requestTransfer(c);
  }
  async createActor(c, a) {
    if (!window.ic || !window.ic.plug)
      throw new Error("Plug wallet is not installed or initialized");
    return window.ic.plug.createActor({
      canisterId: c,
      interfaceFactory: a
    });
  }
  async getAccountId() {
    if (!window.ic || !window.ic.plug)
      throw new Error("Plug wallet is not installed or initialized");
    return window.ic.plug.accountId;
  }
  async getPrincipal() {
    if (!window.ic || !window.ic.plug)
      throw new Error("Plug wallet is not installed or initialized");
    return window.ic.plug.principalId;
  }
  // Additional methods specific to Plug wallet
  async requestTransferToken(c) {
    if (!window.ic || !window.ic.plug)
      throw new Error("Plug wallet is not installed or initialized");
    return window.ic.plug.requestTransferToken(c);
  }
  async requestBurnXTC(c) {
    if (!window.ic || !window.ic.plug)
      throw new Error("Plug wallet is not installed or initialized");
    return window.ic.plug.requestBurnXTC(c);
  }
  async batchTransactions(c) {
    if (!window.ic || !window.ic.plug)
      throw new Error("Plug wallet is not installed or initialized");
    return window.ic.plug.batchTransactions(c);
  }
}
window.ic && window.ic.plug && window.ic.plug.init();
window.addEventListener("load", () => {
  window.ic && window.ic.plug && (PlugWallet.prototype.readyState = "Installed");
});
const ze = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20880%20640'%20style='enable-background:new%200%200%20880%20640;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:none;}%20.st1{fill:url(%23SVGID_1_);}%20.st2{fill:url(%23SVGID_2_);}%20.st3{fill:%2329ABE2;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M671.99,320c0-45.09-37.63-81.78-83.89-81.78c-12.26,0-33.8,6.07-66.78,34.97%20c-17.73,15.54-33.17,32.87-43.85,45.55c17.99,19.05,37.47,39.23,46.31,46.89c3.63,3.14,27.63,22.81,56.09,35.14%20c3.34,0.74,6.06,1,8.16,1C634.34,401.5,671.99,364.84,671.99,320z'/%3e%3cpath%20class='st0'%20d='M522.89,366.54c27.22,23.59,45.72,31.74,56.98,34.24c3.34,0.74,6.06,1,8.16,1%20c46.3-0.28,83.95-36.94,83.95-81.78c0-45.09-37.63-81.78-83.89-81.78c-12.26,0-33.8,6.07-66.78,34.97%20c-17.73,15.54-33.17,32.87-43.85,45.55C477.21,319.05,504.3,350.43,522.89,366.54z'/%3e%3clinearGradient%20id='SVGID_1_'%20gradientUnits='userSpaceOnUse'%20x1='515.2743'%20y1='201.9346'%20x2='705.4849'%20y2='398.9034'%3e%3cstop%20offset='0.21'%20style='stop-color:%23F15A24'/%3e%3cstop%20offset='0.6841'%20style='stop-color:%23FBB03B'/%3e%3c/linearGradient%3e%3cpath%20class='st1'%20d='M588.1,184c-32.16,0-67.28,16.49-104.38,49c-17.57,15.4-32.8,31.88-44.23,45.1c0.02,0.02,0.04,0.04,0.06,0.07%20c0.03-0.04,0.05-0.06,0.05-0.06s18.03,19.63,37.87,40.64c10.68-12.69,26.11-30.01,43.85-45.55c32.98-28.91,54.52-34.97,66.78-34.97%20c46.26,0,83.89,36.69,83.89,81.78c0,44.84-37.65,81.5-83.95,81.78c-2.11,0-4.82-0.26-8.16-1c13.49,5.84,27.99,10.04,41.8,10.04%20c84.79,0,101.36-55.33,102.49-59.25c2.51-10.14,3.84-20.7,3.84-31.56C728,245.01,665.24,184,588.1,184z'/%3e%3cpath%20class='st0'%20d='M208.01,320c0,45.09,37.63,81.78,83.89,81.78c12.26,0,33.8-6.07,66.78-34.97%20c17.73-15.54,33.17-32.87,43.85-45.55c-17.99-19.05-37.47-39.23-46.31-46.89c-3.63-3.14-27.63-22.81-56.09-35.14%20c-3.34-0.74-6.06-1-8.16-1C245.66,238.5,208.01,275.16,208.01,320z'/%3e%3cpath%20class='st0'%20d='M357.11,273.46c-27.22-23.59-45.72-31.74-56.98-34.24c-3.34-0.74-6.06-1-8.16-1%20c-46.3,0.28-83.95,36.94-83.95,81.78c0,45.09,37.63,81.78,83.89,81.78c12.26,0,33.8-6.07,66.78-34.97%20c17.73-15.54,33.17-32.87,43.85-45.55c0.26-0.3,0.52-0.62,0.78-0.92C392.12,307.51,375.7,289.57,357.11,273.46z'/%3e%3clinearGradient%20id='SVGID_2_'%20gradientUnits='userSpaceOnUse'%20x1='-877.3035'%20y1='-1122.6819'%20x2='-687.0928'%20y2='-925.7131'%20gradientTransform='matrix(-1%200%200%20-1%20-512.5778%20-684.6164)'%3e%3cstop%20offset='0.21'%20style='stop-color:%23ED1E79'/%3e%3cstop%20offset='0.8929'%20style='stop-color:%23522785'/%3e%3c/linearGradient%3e%3cpath%20class='st2'%20d='M291.9,456c32.16,0,67.28-16.49,104.38-49c17.57-15.4,32.8-31.88,44.23-45.1c-0.02-0.02-0.04-0.04-0.06-0.07%20c-0.03,0.04-0.05,0.06-0.05,0.06s-18.03-19.63-37.87-40.64c-10.68,12.69-26.11,30.01-43.85,45.55%20c-32.98,28.91-54.52,34.97-66.78,34.97c-46.26,0-83.89-36.69-83.89-81.78c0-44.84,37.65-81.5,83.95-81.78c2.11,0,4.82,0.26,8.16,1%20c-13.49-5.84-27.99-10.04-41.8-10.04c-84.79,0-101.36,55.33-102.49,59.25c-2.51,10.14-3.84,20.7-3.84,31.56%20C152,394.99,214.76,456,291.9,456z'/%3e%3cpath%20class='st3'%20d='M621.52,409.45c-43.41-1.07-88.53-35.3-97.74-43.81c-23.78-21.99-78.66-81.53-82.97-86.2%20C400.58,234.4,346.07,184,291.9,184h-0.07h-0.07c-65.85,0.33-121.19,44.92-135.91,104.44c1.13-3.92,22.76-60.3,102.42-58.34%20c43.41,1.07,88.75,35.76,97.95,44.27c23.78,21.99,78.68,81.54,82.97,86.21C479.42,405.61,533.93,456,588.1,456h0.07h0.07%20c65.85-0.33,121.19-44.92,135.91-104.44C723.03,355.48,701.18,411.41,621.52,409.45z'/%3e%3c/g%3e%3c/svg%3e", Le = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAggICAgICAoICAgICAgICAgICAgICAgICQgICAgICQgICAgICAkICAgICAoICAgICgkKCAgLDQsIDAgICggBAwQEBgUGCgYGCg0OCw0NDg8NDg8PDQ0ODRANDQ4PDg0QDQ0ODQ4PEA4ODw0ODg4QDQ0PDQ8ODxAOEA8ODQ0NDf/AABEIAIAAgAMBEQACEQEDEQH/xAAeAAEAAgMAAwEBAAAAAAAAAAAABwgFBgkDBAoCAf/EAE8QAAIBAwEEBAcJDAYLAAAAAAECAwAEEQUGBxIhCBMxQQkUIjJRYYEkNHFzkZKhs7QVI0JSdHWChbLB0dMzNTZTctQXJSZDYmODk5Sio//EAB0BAQABBQEBAQAAAAAAAAAAAAAHAwQFBggCAQn/xABBEQABAwIDBAUIBwgCAwAAAAABAAIDBBEFITEGEkFRMmFxgZEHEyKhscHR0iMkQoKSsvEWM1JicnPh8KLCFBVD/9oADAMBAAIRAxEAPwDqnREoiURKIlEUdar0kNnYJHhn1jRYZomKSRS6pYxyRuOTI8bzhkYHkVYAivtl5LgNSts2U20s7+EXFjc217ASVE9pPFcwll5Mokhd0JXvHFkV8X0G6zNF9SiLGbR7T21nC9xeTwWtvHgyT3MscEKAnA45ZWVFySAOJhzNEWj2vSb2akZUTWtDd3YKiJq1gzMxOAqqLgliTyAAJJr7ZeQ9p4hSUDXxel/aIlESiJREoiURKIlESiL5ntvD7uvfyu4+ueq40WKf0j2rq/4Gc/6h1T87n7Ha1Tdqryn6PeugVeFcpRFSzwtx/wBkv1nZfsz16bqqM3QK4qVWWNX01bL+9rf4iH6tat1mFlKIlESiJREoiURKIlESiL5nduvf15+VXH1z1XGixT+ke1dX/Az/ANQ6p+dz9jtapu1V5T9HvXQOvCuUoipZ4W/+yX6zsv2bivTdVRm6BXFSqyxq+mrZf3tbfEQ/VrVuswspREoiURKIlESiJREoiURfM7t17+vPyq4+ueq40WKf0j2rq/4Gf+odU/O5+x2tU3aq8p+j3roHXhXKURUs8Lf/AGS/Wdl+zcV6bqqM3QK4qVWWNX01bL+9rb4iH6tat1mFlKIlESiJREoiURKIoo3j735bW4a3gSMmMLxtIGOSyhwFCsuAFYcyTknsGOcdY5tNLRVBp4Gt9EDeLrnUXsACOBCibaTbGfD6s0lMxt2gbxdc5uANgARwIzufUtU/0+Xv4tv8yT+bWuftlXfwx+DvmWp/t/iX8EX4XfOqSar0D9DllkleS/DyyPI2LiEDidixwPFuQyeQq8i2oxaUXjiaexjz7CrR23dfe5EQ7j8ynzo26LFstaz2emkyRXFx4y5umEriTq0iwpjEIC8Ma8ipOc8+dVnbQY03N1P4xyD3qpH5Qa5osBD4O+dTFFv6vD+Db/Mf+bVodra9ps9jAetrh/2V23b7EHfZi/C7517Ue/G7P4MHzH/mVUG1tYfsx+B+ZXTdua8/Zi/C75lHm/8A0hNptP8AubqHElv18dxm1Ijk44w4UcUgmXh8s5HDk4HMc8127VVfJngfmVY7Z1zxYtj8HfMq5R+Df2fP+81L/wAmD/K1cN2oqzwZ4H4r03amrPBngfmV4tM3mTxxpGBERGioCVbJCgKM4cDOBzwBVUbR1J4M8D8Vkm7W1h4M8D8y2HZ3eRJJKiSKmHYKCgIIJOB2scjJGez91ZSixySWVscrRZxAyuLX04lZrDtpJZpmxTNbZxAuLggnIak8VIVbqpDSiJREoiURKIqpb89Z4NTuVAyR1PM9nO3iPt+irCDyeDF6p1fVS7sTiN1rOkd1oabuOTcwdA645Lkvb2v81jVQxoz+jzOn7pijWfUXbtY/AOQ+ipVw3ZLCMOAEFOy4+04b7u3edcjusFF0lVLJq492XsUCb6elvY6RI1siNe3i+fDG4SOI4ziWYq/C3Z5CJIw/C4eWa+I4nT030YG84cBkB2n3WUg7ObDVuLsFQ9wihOjnC5d1tbcXHWSByuos0Pwhr9YPGdO4YSRloLnikRe8hHiVZD6uOP4RWqOxJrz6TMuo/wCPgt8n8lwDPq9Vd3JzLA94cSPBytfu43n2mp263VlKJIzyYebJE/ekiecjDtweRGGBZSCac9DDVsvuhw5EA+oqIcRw+rwqcwVLS13A8HDm08R7NDY5LYtod48FhbyXV3KkUEQy7yH5FXHlM7HkqKGZicAE1H+I7JUkl3MG4ebdPw6eFlfYY+qqpmwQNL3HQe+/ADiTkOKq1tV4TcLKVsNOaWJTymubjqmf04hjifhHeCZSfSq9la3Fsgfty+DfiVOlJsU7cBqZgHfwtG8B94kX8FJm4nwgWn6pOlpewtplzIwSIvKJraVyQFTruCJo3Y+arx8J7OsJIBx1ds9PSt34zvtGuViO7O/j3KyxHZeekYZYXecaNbCzh3XNx2G/UrZwzVrjXLVGPWf2Wl90QfHRftrWYw931mL+tv5gs/hT/rcP9xn5gp7qYlPqURKIlESiJRFT3f64GrXeeX9B9mhqV8ENqGO/8353LkXbHDavEtpqimoonyyO83ZjGl7j9DHwaCe06BQJvk3heIaZeXUf9JHFiI45CWRlijbB7QrurEY5gGrqurBDC57dQMu05BSHhfkJx5sQrsWEcMTS0ujL96VwLgLWj3mi9+LwRyXMG4mZ3Z3JZ3ZmdmOWZmJLMSeZJJJJPaTUUOJJJOql/wA22IebYLBuQAyAAyGS/FeUUg7jt7M2j3yXEZLQuQlzBnyZYs8wAeQdPOjbkQwx5rMDe0k5hffhxHMf7otY2hwKPGaUwOtvjON3FrvgdCOXWAVn+kvvufWbzCFhY25K20fNeLuad1PPjk7gccCYXAJct9rZRLId3ojT4rG7JbOjBqb6QfTv/eHlyYDyHHmc9LWh+rFbyhFeHN3hZegbLrX0Nt5smpaHbvOxee1d7OaRjkyGII0bEnmWMEkXExJLMGPfUJ4xTimqnNbkD6QHK+vrBUI4/StpK1zWZNcA4DlfUeIPcrGbJy+6bf4+L6xap4a761F/W38wVLCXfXIP7jPzBWHqa10SlESiJREoiURUm6Rrn7s3g9Hi/wBlgqScIP1Rn3vzFdCbE4fSwYe2piiY2WUuMjw0Bz91zmt3nandaABc5AZKu+/jZ57rSbyJBl+BJQBzJ6mRJmAHeSqEAenFXFfGZIHNHK/gbrYcfp3VFBLG3WwP4SHewKZujJ0QNhNW0XT9Q+5/WzSQIt2HvtQ8m8jUJcqUW7VVHWhmUcKgxsjAAMKjN92my5bmpmseQRxWL6QXgztLvbzTX0eOGwsUE8eowxTyJOxZc29xFLOl2r9XJgSROFzGPIPExK+Q5WroQSLLWOmHszs7YWlrs3o+m6VLrl2kEdxeJY2wmtIFVTJcGTgLQz3HDxDBykRkfkTCWvKWB8zw1v8Av6LM0GGSVbwyJtydPee7isR0MtC0CC7uNm9otO0u4uGkM2l6jc2VuZLuN85t2mdS5fI4oVLsc9bFnMcQatXUr6d5B/Uc16xDC30chZI31ajmt23FeDI061v7yfWhBfW5nuhbQJIy28ltKYmtmMKJDLbTwETBwtxLGQyKo8lnbGlywbYQDmpK3mdCXd/ZWV1fXOnCKG1heZzHf6ghPCMqijxvBeRsRooHlMygAk0BJNgvsjY2NLnaBQh0HtINrpGGHB43dTXUa5JxGVjhUZPM5EHEpPapB760Ta3B5AxtezogbrhyFzZ3eTY93WucNosVZPiZhH2Ghvfm4juv6irU7Hy+6rb8oh+sWtCwx31qH+4z8wXvB3fXYP7rPzhWTqdV0qlESiJREoiURVF3/wCxM8mrzui+RKkD8bcl5RLEfWecZ5AH2Vkpdr8NwWlayqk+kztG0XeRc520A6yRexteyn7ZTEoY8Kja45tLxYa9Iu9601N3IA8tix9CgAfTnP0VpkvlQdK61PC1o/mJcfVugdma2N2Lb3RaO/NRpZbtdV0K6lu9npUMM7cdxplyfc8jelPKQKfQQ8TIPJDlMILaLaZtQbygDsGSjjFcBbUuMkNs87aW7DpbqOnBZrW99+2N1GYIrKy05mHC92ZFlMee1o166UA+gmKb2dtZqLEadxzN1gYNlp3O9IZdZbb1EnwWn7F7pPEDLPM73V7cEtcXkhLO7MeJgCxLBS3M8RLOQCTyULJeDz0j2/Quu62YOR7AOXZdTFguF09Cz0M3kZnTuA5e3jws3g7u4dQiVZMxyxnignTlJC/I5U8iQSBlcjOAQVIVhmqmmZO3dd3Hkr3E8JgxCPckGfB3EfEcx+qyGzG/3azToxbyQWurog4Y7l5OqnK9iiQ9bHxkDtLRlj3yP21qMuCyB3ojwt71ENXsTVNefNC45gi3gSCPYsVtImtbRSJ92pIrWxicSDTrQnEjjsMjB5M8jjiMrlefCsZbirKUGB53l8OJ9wXN/lTkxTZhkYdGd2W4Y/Ita5uoNibutm0GwI57rgpV04iIIqAIqBVRVGAoUYUADkAAAAPRWZrMMjmjdE4XaQQR1EWsuPhUv3/OEneve/G/NTBuwk666tcf3iufVweWfk4TXJwwqSgxoUTvsSAg82j0ge9vrUybKv8A/Lract/jBP3cz7FZ2pdXUCURKIlESiJRFoO9XZ/rFSYDmnkN/hJyvyNkfpVB3lRo3MpYsSj/APmdx/8AS8+ie52X3ltmA1fm3OiPHMdo19XsUT3Ok1AtLjfWt8ZOoW6Re0s2nQ2NytyLG1N/HBf3JsvHxBbyxTBJmtxNA7ItwIVfq5VfhcleMgI0t7IVNPiNSaecnNhLbGxuCPdc9yscUxCanhEkFrh2dxfIg++y2LT9gteuIEutMk2e1+0ceRPa3lxp7N/02i1OEN3FTdAqeRA54l8bPhucUpt1gH2WWFi2ulb+8jB7CR7d5ejNsdtMMiTZ+ZvXBqukyqf+7c27Y+FBV5DQVUJBbILjQ5g+9ZePbOIZujcOwg/Ba9d7q9pnb7zoNwoP99qekIB7UvJWx8Ck/DUl0OOSMi3akbzhxGV+3LX2rLt2+gDbGJ5PaB8V71r0fNpeB5r1dE0a1jUvLcXeoy3RiQdrMkVtbQAL3l7xAOXM91w/H3fYjHeb+4Kwm8oLzlDAAetxPqAb7VFOw+1Yl1C/S3v4tWsbXxeJbyCxNlBJcnrWuUgD3V280cadRiZpAHZm4RwhXkzGEVs05c+S1hYCw8fcsRimFz7eYHW0NY1gNgacgWDJmhxa65JPJrv5XEcVKYNbevysljfE90bwQ5pIIOoINiO4qfOjBoTM01y3mJ97j9bsAXx/hXA/TqJtpsOh/wDYx1g6fmy0j73ont6Q7F0D5KsPe8y1j+i30Wf1EAu8BYfeKsLWDXRSURKIlESiJRF4rq2DqyNzVgQR6jVnWUkVZA+mnF2PaWuHMEKpG8xuDm6hRBruitDIUbmO1W/GXuP8R3Gvz+2m2eqdnq51LLfd1jfwe3ge0aOHA9RBMiUtS2eMPb3jkVpm3mwNvqNpcWVyvFDcxtHIAcEZ5qynuZGCupwcMoPOsdhuNVGHzsqIj6TDcfA9RGR6ldSASMLHaFcvdu90es7K3zCCe6tgx9z3tpLLAlxGCSMtE4w4HnwOSVP4ylWbsLANrqfF4BLA6zx02X9Jp945O0PbcDSaikMLt1wy4Hms7pfTN2uhAC6nM4AxiWG1mPzpIGf28XOtzbibuatfMtPBeTU+mztfIMHUpEH/AC7azQ/OW34x7GFXAxAnivQgbyUW6lJrm0FysVzc3t+2Qc3M8skMCntchiY4lHPkqjixgAkgHb8OYaxo82M+PV2rPYdhclY8RwNz4ngOsn/erNW/3bbAxaZZxWkXMJlpHxgyStzeQjJxk8gMnhUKMnFSRTU7YIxG39TzU/4Zh7KCnbAzhqeZOp/3QKWNidnpbySKCEFnc49SqPOdj3Ko5k+zmSAcjLVMp4TLIch6+Q71+X/lN2Sm/biqoKRmUz2zDk0StDnuPINeX9trDMgK7WyOzEdnbxW8fmxrgnvdjzZz62bJ9XZ3VEdVUuqZXSv1Pq5DuU74RhcOF0kdHD0WC1+Ljxcesm5WZq0WYSiJREoiURKIlEWP1rREnThf9Fh2qfSP3jvrVdo9nKTH6U01UOtjx0mHmPeNCFd01U+nfvM7xzUX61s9JAcMMr3OPNP8D6j9NcSbS7H4hs/KRUN3oyfRlaCWO5X/AIT/ACnuJAut6payOoF2nPiOK17WtDhuY2huI454nGGjlRZEb4VYEcu0HHI1p0FRLTvEsLi1w0LSQR3hXjmhws4XChDaHoSaHOxaNbm1zzxbzAr8lwk+B6lIA9VSBS7f4tALOLH/ANTc/wDgWrHuw+I6XHZ/m69PSegtosZy5u7j/hmmVV/+EULf+1ZB3lGxJ+QDG9bWkn/kXD1L0yghbrc9/wALLMbe7t7Wxt4RaQxW8auUKxIF4uJchmPa7eT5zEk57a6H8ie1U1dXVVFO8u3oxILnQscGm3K4ePBSNs3I1jnwsAAtfwy96wmxO7661CTq7aMtgjjkPKKMHvd+wenhGWPcDXWdTVxUzd6Q9g4nuWyYli1NhsfnKh1uTdXO7B79BxKuPur3VQ6XDwJ98mfnNMRgsfxVH4KDuXJz2nJ7I+rq+Srdnk0aDl/lcz4zWMxLEH4h5trXlrWX+1uMJLQTxzcT+i3isYsUlESiJREoiURKIlESiL8SRBgQQCD2gjIPsqlLCyZhjlaHNIsQQCCORByXpri03BzUcbeaLHEyGNeEOGyBnGRjs9Hb2Vx55VdnKLCJ6eWhi3BKH74F927d21ho3InIWHUtzwmpfM1wkN7WtzWrVBF1nkpdF7+ibIQXsgiuE6yJfvnDkgFl5LnhIJHPszzqd/I0+WPHnSR3FoH3PK7mD9P8Kyq8QmoY/OU7t1xyvkcjra6lnTNKigRY4USKNRhURQqj2AAe3vrst73PO84knmVoE08k7zJK4ucdSTc+te3XhUEoiURKIlESiJREoiURKIlEWL2h0VZ4yrciPKVh2g/wPYRWnbVbN02P0Jpqi4I9Jjxq1wGvWCMiOPaAVfUdU6nk3m9hHNRBX54KRUoilHYrRFjiVxzaVVYk9wIyFHqH0/JXc3k32bpsLwyOrYS6SoYx73HgC24YOoXPWTnyA0TE6p0spYdGkgfFbFUtLDpREoiURKIlESiJREoiURKIlEX5Zcgj015c3eBHNfQbKHNT0aSJirKeR5HBww9INfnZjezGIYRUvp54nkA2a8NO68cCDmMxwvlodFJEFTHM0OaR2cQvDa6c7kKqsSfQD9Po+E1YUGCV9fMIKaB7nE26JsL8SbWA6yQFUkmZGN5xACmHS7Tq440PMqiqT6wAK/QvBqE4fQU9G43McTGE8y1oBPqUczyeckc8cSSvarMqglESiJREoiURKIlESiJREoiURKIlESiJREoiURKIlESiJRF//9k=", Te = [
  {
    id: "nns",
    name: "Internet Identity",
    icon: ze,
    adapter: Ue
  },
  {
    id: "plug",
    name: "Plug Wallet",
    icon: Le,
    adapter: Pe
  }
];
class gt {
  // Callbacks array
  constructor(c = {}) {
    this.accountId = null, this.principalId = null, this.activeWallet = null, this.provider = null, this.balance = 0, this.canisterActors = {}, this.anonCanisterActors = {}, this.connectedWalletInfo = null, this.walletState = {
      principalId: null,
      accountId: null,
      activeWallet: null,
      exeBalance: 0,
      icpBalance: 0
    }, this.callbacks = [], this.wallets = Te.map((a) => ({
      id: a.id,
      adapter: a.adapter,
      icon: a.icon,
      name: a.name
    })), this.config = {
      hostUrl: c.hostUrl || "http://localhost:4943",
      localStorageKey: c.localStorageKey || "connectedWallet",
      defaultCanisterId: c.defaultCanisterId || "",
      identityProvider: c.identityProvider,
      // Ensure identityProvider is part of the config
      ...c
    }, this._initializeFromLocalStorage();
  }
  async _initializeFromLocalStorage() {
    const c = localStorage.getItem(this.config.localStorageKey || "");
    c && await this.connect(c);
  }
  // Method to register callbacks
  registerCallback(c) {
    this.callbacks.push(c);
  }
  // Method to trigger callbacks
  triggerCallbacks() {
    for (const c of this.callbacks)
      c(this.walletState);
  }
  async connect(c, a = {}) {
    const i = this.wallets.find((A) => A.id === c);
    if (!i) return !1;
    try {
      const A = new i.adapter();
      if (await A.isAvailable()) {
        const p = await A.connect({
          ...this.config,
          ...a
        });
        if (p && typeof p != "boolean")
          return this.accountId = p.accountId, this.principalId = p.principalId, this.activeWallet = c, this.provider = A, this.connectedWalletInfo = {
            id: i.id,
            icon: i.icon,
            name: i.name
          }, localStorage.setItem(this.config.localStorageKey || "", this.activeWallet), this._dispatchWalletConnectedEvent(c), await this.getWalletBalance(), this.walletState = {
            principalId: this.principalId,
            accountId: this.accountId,
            activeWallet: this.activeWallet,
            exeBalance: this.balance,
            icpBalance: 0
          }, this.triggerCallbacks(), this.principalId;
      } else
        window.open(A.url, "_blank");
    } catch (A) {
      console.error("Error connecting to wallet:", A);
    }
    return !1;
  }
  async disconnect() {
    return this.provider && await this.provider.disconnect(), localStorage.removeItem(this.config.localStorageKey || ""), this.provider = null, this.accountId = null, this.principalId = null, this.activeWallet = null, this.walletState = {
      principalId: null,
      accountId: null,
      activeWallet: null,
      exeBalance: 0,
      icpBalance: 0
    }, this.triggerCallbacks(), !0;
  }
  async getWalletBalance() {
    return 0;
  }
  async getSignedActor(c, a) {
    if (!this.provider)
      throw new Error("Wallet not connected");
    try {
      return await this.provider.createActor(c, a);
    } catch (i) {
      throw console.error(
        `Error creating signed actor for canister ${c}:`,
        i
      ), i;
    }
  }
  async getCanisterActor(c, a, i = !1, A = !1, p = !1) {
    var n;
    if (p)
      return this.getSignedActor(c, a);
    let w;
    if (i)
      if (A || !this.anonCanisterActors[c]) {
        const E = new Er({
          identity: new Bt(),
          host: this.config.hostUrl
        });
        (n = this.config.hostUrl) != null && n.includes("localhost") && await E.fetchRootKey(), w = await pt.createActor(a, {
          agent: E,
          canisterId: c
        }), this.anonCanisterActors[c] = w;
      } else
        w = this.anonCanisterActors[c];
    else {
      if (!this.provider)
        throw new Error("Wallet not connected");
      A || !this.canisterActors[c] ? (w = await this.provider.createActor(c, a), this.canisterActors[c] = w) : w = this.canisterActors[c];
    }
    return w;
  }
  async transfer(c) {
    if (!this.provider)
      throw new Error("Wallet not connected");
    return this.provider.transfer(c);
  }
  isWalletConnected() {
    return !!this.activeWallet;
  }
  _dispatchWalletConnectedEvent(c) {
    const a = new CustomEvent("walletConnected", { detail: { walletId: c } });
    window.dispatchEvent(a);
  }
}
const wt = class {
  constructor(c = {}, a) {
    l0(this, "state", "idle");
    //   'idle' ,'running', 'error' ,'done' 
    l0(this, "transactionLlist", {});
    l0(this, "stepsList", []);
    l0(this, "completed", []);
    l0(this, "activeStep", "");
    l0(this, "failedSteps", []);
    l0(this, "transactionResults", {});
    l0(this, "trxArray", []);
    l0(this, "_info", !1);
    l0(this, "_adapterObj", !1);
    l0(this, "_prepareTrxArry", function() {
      var c = this;
      c.trxArray = [];
      var a = [];
      Object.values(this.transactionLlist).forEach((A) => {
        a.push(A), A.updateNextStep && (c.trxArray.push(a), a = []);
      }), a.length > 0 && c.trxArray.push(a);
      var i = 0;
      return c.trxArray.forEach((A, p) => {
        A.forEach((w, n) => {
          c.trxArray[p][n].stepIndex = i, c.trxArray[p][n].state = "idle", c.trxArray[p][n].onSuccessMain = async (E, x) => {
            const s = x.stepIndex, D = w.onSuccess, f = w.onFail;
            if (E.err || E.Err || E.ERR)
              return c.failedSteps.push(c.stepsList[s]), c.transactionResults[c.stepsList[s]] = E, c.state = "error", x.state = "error", f && await f(E), !1;
            c.completed.push(c.stepsList[s]), c.activeStep = c.stepsList[s + 1], c.transactionResults[c.stepsList[s]] = E, x.state = "done", x.updateNextStep && c.trxArray[p + 1] && await x.updateNextStep(E, c.trxArray[p + 1][0]), D && await D(E);
          }, c.trxArray[p][n].onFailMain = async (E, x) => {
            const s = w.onFail, D = x.stepIndex;
            return console.error(`error in  ${c.stepsList[D]} `, c.trxArray[p][n]), console.error(E), c.failedSteps.push(c.stepsList[D]), c.activeStep = c.stepsList[D], c.state = "error", x.state = "error", s && await s(E), !1;
          }, i++;
        });
      }), c.trxArray;
    });
    if (!a || !a.provider) return !1;
    if (Object.entries(c).forEach(([i, A]) => {
      typeof A == "object" && (this.transactionLlist[i] = A);
    }), Object.keys(this.transactionLlist).length > 0)
      this.stepsList = Object.keys(this.transactionLlist), this._adapterObj = a;
    else return !1;
  }
  async retryExecute() {
    if (this.state != "error") return !1;
    this.trxArray = this.trxArray.map((a) => a.filter((i) => i.state !== "done")), this.state = "running", this._info = "", this.failedSteps = [];
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
      for (const A of c.trxArray) {
        if (c.state == "error" || c.state == "done") break;
        if (A.length)
          var a = await this._adapterObj.provider.batchTransactions(A);
      }
      return c.failedSteps.length == 0 ? (c.state = "done", c.transactionResults) : (c.state = "error", !1);
    } else if (["plug", "stoic", "dfinity", "astrox", "metamask", "nfid"].includes(this._adapterObj.walletActive))
      try {
        for (const A of c.trxArray) {
          if (c.state == "error" || c.state == "done") break;
          if (A.length)
            for (const p of A) {
              if (c.state == "error" || c.state == "done") break;
              var i = await c._adapterObj.getCanisterActor(p.canisterId, p.idl, !1, !0), a = !1;
              p.methodName ? p.args ? a = await i[p.methodName](...p.args) : a = await i[p.methodName]() : await p.onFailMain(a), a ? await p.onSuccessMain(a, p) : await p.onFailMain(a, p);
            }
        }
        return c.failedSteps.length == 0 ? (c.state = "done", c.transactionResults) : (c.state = "error", !1);
      } catch (A) {
        return c.state = "error", console.error(A), c._info = A, !1;
      }
    else
      return console.log("trx method not defined..."), c.state = "error", !1;
  }
}, We = "http://localhost:4943", qe = "ryjl3-tyaaa-aaaaa-aaaba-cai", Ve = wt, je = Cr, Qe = new gt({
  whitelist: [qe],
  host: We,
  identityProvider: ""
});
typeof window < "u" && (window.pnp = gt, window.pnp.BatchTransact = wt, window.pnp.nns = { AnonymousIdentity: Bt, Principal: vt });
export {
  Ve as BatchTransact,
  gt as PnP,
  Qe as PnPAdapter,
  Cr as getAccountIdentifier,
  je as principalIdFromHex
};

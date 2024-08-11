var qu = Object.defineProperty;
var $u = (t, e, r) => e in t ? qu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var ze = (t, e, r) => ($u(t, typeof e != "symbol" ? e + "" : e, r), r);
import { IC as Hu } from "@astrox/sdk-web";
import { AstroXWebViewHandler as Vu } from "@astrox/sdk-webview";
import { MsqClient as Gu } from "@fort-major/msq-client";
var ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function mo(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Wu(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var lr = {}, cn = {};
cn.byteLength = Yu;
cn.toByteArray = Qu;
cn.fromByteArray = ef;
var Ot = [], xt = [], Lu = typeof Uint8Array < "u" ? Uint8Array : Array, D0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Fr = 0, Ku = D0.length; Fr < Ku; ++Fr)
  Ot[Fr] = D0[Fr], xt[D0.charCodeAt(Fr)] = Fr;
xt["-".charCodeAt(0)] = 62;
xt["_".charCodeAt(0)] = 63;
function _o(t) {
  var e = t.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = t.indexOf("=");
  r === -1 && (r = e);
  var n = r === e ? 0 : 4 - r % 4;
  return [r, n];
}
function Yu(t) {
  var e = _o(t), r = e[0], n = e[1];
  return (r + n) * 3 / 4 - n;
}
function Zu(t, e, r) {
  return (e + r) * 3 / 4 - r;
}
function Qu(t) {
  var e, r = _o(t), n = r[0], i = r[1], s = new Lu(Zu(t, n, i)), c = 0, a = i > 0 ? n - 4 : n, d;
  for (d = 0; d < a; d += 4)
    e = xt[t.charCodeAt(d)] << 18 | xt[t.charCodeAt(d + 1)] << 12 | xt[t.charCodeAt(d + 2)] << 6 | xt[t.charCodeAt(d + 3)], s[c++] = e >> 16 & 255, s[c++] = e >> 8 & 255, s[c++] = e & 255;
  return i === 2 && (e = xt[t.charCodeAt(d)] << 2 | xt[t.charCodeAt(d + 1)] >> 4, s[c++] = e & 255), i === 1 && (e = xt[t.charCodeAt(d)] << 10 | xt[t.charCodeAt(d + 1)] << 4 | xt[t.charCodeAt(d + 2)] >> 2, s[c++] = e >> 8 & 255, s[c++] = e & 255), s;
}
function Xu(t) {
  return Ot[t >> 18 & 63] + Ot[t >> 12 & 63] + Ot[t >> 6 & 63] + Ot[t & 63];
}
function Ju(t, e, r) {
  for (var n, i = [], s = e; s < r; s += 3)
    n = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (t[s + 2] & 255), i.push(Xu(n));
  return i.join("");
}
function ef(t) {
  for (var e, r = t.length, n = r % 3, i = [], s = 16383, c = 0, a = r - n; c < a; c += s)
    i.push(Ju(t, c, c + s > a ? a : c + s));
  return n === 1 ? (e = t[r - 1], i.push(
    Ot[e >> 2] + Ot[e << 4 & 63] + "=="
  )) : n === 2 && (e = (t[r - 2] << 8) + t[r - 1], i.push(
    Ot[e >> 10] + Ot[e >> 4 & 63] + Ot[e << 2 & 63] + "="
  )), i.join("");
}
var un = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
un.read = function(t, e, r, n, i) {
  var s, c, a = i * 8 - n - 1, d = (1 << a) - 1, l = d >> 1, p = -7, w = r ? i - 1 : 0, _ = r ? -1 : 1, m = t[e + w];
  for (w += _, s = m & (1 << -p) - 1, m >>= -p, p += a; p > 0; s = s * 256 + t[e + w], w += _, p -= 8)
    ;
  for (c = s & (1 << -p) - 1, s >>= -p, p += n; p > 0; c = c * 256 + t[e + w], w += _, p -= 8)
    ;
  if (s === 0)
    s = 1 - l;
  else {
    if (s === d)
      return c ? NaN : (m ? -1 : 1) * (1 / 0);
    c = c + Math.pow(2, n), s = s - l;
  }
  return (m ? -1 : 1) * c * Math.pow(2, s - n);
};
un.write = function(t, e, r, n, i, s) {
  var c, a, d, l = s * 8 - i - 1, p = (1 << l) - 1, w = p >> 1, _ = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, m = n ? 0 : s - 1, h = n ? 1 : -1, E = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, c = p) : (c = Math.floor(Math.log(e) / Math.LN2), e * (d = Math.pow(2, -c)) < 1 && (c--, d *= 2), c + w >= 1 ? e += _ / d : e += _ * Math.pow(2, 1 - w), e * d >= 2 && (c++, d /= 2), c + w >= p ? (a = 0, c = p) : c + w >= 1 ? (a = (e * d - 1) * Math.pow(2, i), c = c + w) : (a = e * Math.pow(2, w - 1) * Math.pow(2, i), c = 0)); i >= 8; t[r + m] = a & 255, m += h, a /= 256, i -= 8)
    ;
  for (c = c << i | a, l += i; l > 0; t[r + m] = c & 255, m += h, c /= 256, l -= 8)
    ;
  t[r + m - h] |= E * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(t) {
  const e = cn, r = un, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = a, t.SlowBuffer = B, t.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  t.kMaxLength = i, a.TYPED_ARRAY_SUPPORT = s(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function s() {
    try {
      const b = new Uint8Array(1), f = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(f, Uint8Array.prototype), Object.setPrototypeOf(b, f), b.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(a.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(a.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.byteOffset;
    }
  });
  function c(b) {
    if (b > i)
      throw new RangeError('The value "' + b + '" is invalid for option "size"');
    const f = new Uint8Array(b);
    return Object.setPrototypeOf(f, a.prototype), f;
  }
  function a(b, f, x) {
    if (typeof b == "number") {
      if (typeof f == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return w(b);
    }
    return d(b, f, x);
  }
  a.poolSize = 8192;
  function d(b, f, x) {
    if (typeof b == "string")
      return _(b, f);
    if (ArrayBuffer.isView(b))
      return h(b);
    if (b == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b
      );
    if (J(b, ArrayBuffer) || b && J(b.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (J(b, SharedArrayBuffer) || b && J(b.buffer, SharedArrayBuffer)))
      return E(b, f, x);
    if (typeof b == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const I = b.valueOf && b.valueOf();
    if (I != null && I !== b)
      return a.from(I, f, x);
    const Y = A(b);
    if (Y)
      return Y;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof b[Symbol.toPrimitive] == "function")
      return a.from(b[Symbol.toPrimitive]("string"), f, x);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b
    );
  }
  a.from = function(b, f, x) {
    return d(b, f, x);
  }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
  function l(b) {
    if (typeof b != "number")
      throw new TypeError('"size" argument must be of type number');
    if (b < 0)
      throw new RangeError('The value "' + b + '" is invalid for option "size"');
  }
  function p(b, f, x) {
    return l(b), b <= 0 ? c(b) : f !== void 0 ? typeof x == "string" ? c(b).fill(f, x) : c(b).fill(f) : c(b);
  }
  a.alloc = function(b, f, x) {
    return p(b, f, x);
  };
  function w(b) {
    return l(b), c(b < 0 ? 0 : U(b) | 0);
  }
  a.allocUnsafe = function(b) {
    return w(b);
  }, a.allocUnsafeSlow = function(b) {
    return w(b);
  };
  function _(b, f) {
    if ((typeof f != "string" || f === "") && (f = "utf8"), !a.isEncoding(f))
      throw new TypeError("Unknown encoding: " + f);
    const x = C(b, f) | 0;
    let I = c(x);
    const Y = I.write(b, f);
    return Y !== x && (I = I.slice(0, Y)), I;
  }
  function m(b) {
    const f = b.length < 0 ? 0 : U(b.length) | 0, x = c(f);
    for (let I = 0; I < f; I += 1)
      x[I] = b[I] & 255;
    return x;
  }
  function h(b) {
    if (J(b, Uint8Array)) {
      const f = new Uint8Array(b);
      return E(f.buffer, f.byteOffset, f.byteLength);
    }
    return m(b);
  }
  function E(b, f, x) {
    if (f < 0 || b.byteLength < f)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (b.byteLength < f + (x || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let I;
    return f === void 0 && x === void 0 ? I = new Uint8Array(b) : x === void 0 ? I = new Uint8Array(b, f) : I = new Uint8Array(b, f, x), Object.setPrototypeOf(I, a.prototype), I;
  }
  function A(b) {
    if (a.isBuffer(b)) {
      const f = U(b.length) | 0, x = c(f);
      return x.length === 0 || b.copy(x, 0, 0, f), x;
    }
    if (b.length !== void 0)
      return typeof b.length != "number" || ue(b.length) ? c(0) : m(b);
    if (b.type === "Buffer" && Array.isArray(b.data))
      return m(b.data);
  }
  function U(b) {
    if (b >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return b | 0;
  }
  function B(b) {
    return +b != b && (b = 0), a.alloc(+b);
  }
  a.isBuffer = function(f) {
    return f != null && f._isBuffer === !0 && f !== a.prototype;
  }, a.compare = function(f, x) {
    if (J(f, Uint8Array) && (f = a.from(f, f.offset, f.byteLength)), J(x, Uint8Array) && (x = a.from(x, x.offset, x.byteLength)), !a.isBuffer(f) || !a.isBuffer(x))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (f === x)
      return 0;
    let I = f.length, Y = x.length;
    for (let te = 0, ne = Math.min(I, Y); te < ne; ++te)
      if (f[te] !== x[te]) {
        I = f[te], Y = x[te];
        break;
      }
    return I < Y ? -1 : Y < I ? 1 : 0;
  }, a.isEncoding = function(f) {
    switch (String(f).toLowerCase()) {
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
  }, a.concat = function(f, x) {
    if (!Array.isArray(f))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (f.length === 0)
      return a.alloc(0);
    let I;
    if (x === void 0)
      for (x = 0, I = 0; I < f.length; ++I)
        x += f[I].length;
    const Y = a.allocUnsafe(x);
    let te = 0;
    for (I = 0; I < f.length; ++I) {
      let ne = f[I];
      if (J(ne, Uint8Array))
        te + ne.length > Y.length ? (a.isBuffer(ne) || (ne = a.from(ne)), ne.copy(Y, te)) : Uint8Array.prototype.set.call(
          Y,
          ne,
          te
        );
      else if (a.isBuffer(ne))
        ne.copy(Y, te);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      te += ne.length;
    }
    return Y;
  };
  function C(b, f) {
    if (a.isBuffer(b))
      return b.length;
    if (ArrayBuffer.isView(b) || J(b, ArrayBuffer))
      return b.byteLength;
    if (typeof b != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof b
      );
    const x = b.length, I = arguments.length > 2 && arguments[2] === !0;
    if (!I && x === 0)
      return 0;
    let Y = !1;
    for (; ; )
      switch (f) {
        case "ascii":
        case "latin1":
        case "binary":
          return x;
        case "utf8":
        case "utf-8":
          return o(b).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return x * 2;
        case "hex":
          return x >>> 1;
        case "base64":
          return N(b).length;
        default:
          if (Y)
            return I ? -1 : o(b).length;
          f = ("" + f).toLowerCase(), Y = !0;
      }
  }
  a.byteLength = C;
  function O(b, f, x) {
    let I = !1;
    if ((f === void 0 || f < 0) && (f = 0), f > this.length || ((x === void 0 || x > this.length) && (x = this.length), x <= 0) || (x >>>= 0, f >>>= 0, x <= f))
      return "";
    for (b || (b = "utf8"); ; )
      switch (b) {
        case "hex":
          return oe(this, f, x);
        case "utf8":
        case "utf-8":
          return q(this, f, x);
        case "ascii":
          return re(this, f, x);
        case "latin1":
        case "binary":
          return se(this, f, x);
        case "base64":
          return F(this, f, x);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return he(this, f, x);
        default:
          if (I)
            throw new TypeError("Unknown encoding: " + b);
          b = (b + "").toLowerCase(), I = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function S(b, f, x) {
    const I = b[f];
    b[f] = b[x], b[x] = I;
  }
  a.prototype.swap16 = function() {
    const f = this.length;
    if (f % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let x = 0; x < f; x += 2)
      S(this, x, x + 1);
    return this;
  }, a.prototype.swap32 = function() {
    const f = this.length;
    if (f % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let x = 0; x < f; x += 4)
      S(this, x, x + 3), S(this, x + 1, x + 2);
    return this;
  }, a.prototype.swap64 = function() {
    const f = this.length;
    if (f % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let x = 0; x < f; x += 8)
      S(this, x, x + 7), S(this, x + 1, x + 6), S(this, x + 2, x + 5), S(this, x + 3, x + 4);
    return this;
  }, a.prototype.toString = function() {
    const f = this.length;
    return f === 0 ? "" : arguments.length === 0 ? q(this, 0, f) : O.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(f) {
    if (!a.isBuffer(f))
      throw new TypeError("Argument must be a Buffer");
    return this === f ? !0 : a.compare(this, f) === 0;
  }, a.prototype.inspect = function() {
    let f = "";
    const x = t.INSPECT_MAX_BYTES;
    return f = this.toString("hex", 0, x).replace(/(.{2})/g, "$1 ").trim(), this.length > x && (f += " ... "), "<Buffer " + f + ">";
  }, n && (a.prototype[n] = a.prototype.inspect), a.prototype.compare = function(f, x, I, Y, te) {
    if (J(f, Uint8Array) && (f = a.from(f, f.offset, f.byteLength)), !a.isBuffer(f))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof f
      );
    if (x === void 0 && (x = 0), I === void 0 && (I = f ? f.length : 0), Y === void 0 && (Y = 0), te === void 0 && (te = this.length), x < 0 || I > f.length || Y < 0 || te > this.length)
      throw new RangeError("out of range index");
    if (Y >= te && x >= I)
      return 0;
    if (Y >= te)
      return -1;
    if (x >= I)
      return 1;
    if (x >>>= 0, I >>>= 0, Y >>>= 0, te >>>= 0, this === f)
      return 0;
    let ne = te - Y, be = I - x;
    const Be = Math.min(ne, be), _e = this.slice(Y, te), me = f.slice(x, I);
    for (let Oe = 0; Oe < Be; ++Oe)
      if (_e[Oe] !== me[Oe]) {
        ne = _e[Oe], be = me[Oe];
        break;
      }
    return ne < be ? -1 : be < ne ? 1 : 0;
  };
  function k(b, f, x, I, Y) {
    if (b.length === 0)
      return -1;
    if (typeof x == "string" ? (I = x, x = 0) : x > 2147483647 ? x = 2147483647 : x < -2147483648 && (x = -2147483648), x = +x, ue(x) && (x = Y ? 0 : b.length - 1), x < 0 && (x = b.length + x), x >= b.length) {
      if (Y)
        return -1;
      x = b.length - 1;
    } else if (x < 0)
      if (Y)
        x = 0;
      else
        return -1;
    if (typeof f == "string" && (f = a.from(f, I)), a.isBuffer(f))
      return f.length === 0 ? -1 : P(b, f, x, I, Y);
    if (typeof f == "number")
      return f = f & 255, typeof Uint8Array.prototype.indexOf == "function" ? Y ? Uint8Array.prototype.indexOf.call(b, f, x) : Uint8Array.prototype.lastIndexOf.call(b, f, x) : P(b, [f], x, I, Y);
    throw new TypeError("val must be string, number or Buffer");
  }
  function P(b, f, x, I, Y) {
    let te = 1, ne = b.length, be = f.length;
    if (I !== void 0 && (I = String(I).toLowerCase(), I === "ucs2" || I === "ucs-2" || I === "utf16le" || I === "utf-16le")) {
      if (b.length < 2 || f.length < 2)
        return -1;
      te = 2, ne /= 2, be /= 2, x /= 2;
    }
    function Be(me, Oe) {
      return te === 1 ? me[Oe] : me.readUInt16BE(Oe * te);
    }
    let _e;
    if (Y) {
      let me = -1;
      for (_e = x; _e < ne; _e++)
        if (Be(b, _e) === Be(f, me === -1 ? 0 : _e - me)) {
          if (me === -1 && (me = _e), _e - me + 1 === be)
            return me * te;
        } else
          me !== -1 && (_e -= _e - me), me = -1;
    } else
      for (x + be > ne && (x = ne - be), _e = x; _e >= 0; _e--) {
        let me = !0;
        for (let Oe = 0; Oe < be; Oe++)
          if (Be(b, _e + Oe) !== Be(f, Oe)) {
            me = !1;
            break;
          }
        if (me)
          return _e;
      }
    return -1;
  }
  a.prototype.includes = function(f, x, I) {
    return this.indexOf(f, x, I) !== -1;
  }, a.prototype.indexOf = function(f, x, I) {
    return k(this, f, x, I, !0);
  }, a.prototype.lastIndexOf = function(f, x, I) {
    return k(this, f, x, I, !1);
  };
  function H(b, f, x, I) {
    x = Number(x) || 0;
    const Y = b.length - x;
    I ? (I = Number(I), I > Y && (I = Y)) : I = Y;
    const te = f.length;
    I > te / 2 && (I = te / 2);
    let ne;
    for (ne = 0; ne < I; ++ne) {
      const be = parseInt(f.substr(ne * 2, 2), 16);
      if (ue(be))
        return ne;
      b[x + ne] = be;
    }
    return ne;
  }
  function ie(b, f, x, I) {
    return z(o(f, b.length - x), b, x, I);
  }
  function M(b, f, x, I) {
    return z(u(f), b, x, I);
  }
  function W(b, f, x, I) {
    return z(N(f), b, x, I);
  }
  function ee(b, f, x, I) {
    return z(v(f, b.length - x), b, x, I);
  }
  a.prototype.write = function(f, x, I, Y) {
    if (x === void 0)
      Y = "utf8", I = this.length, x = 0;
    else if (I === void 0 && typeof x == "string")
      Y = x, I = this.length, x = 0;
    else if (isFinite(x))
      x = x >>> 0, isFinite(I) ? (I = I >>> 0, Y === void 0 && (Y = "utf8")) : (Y = I, I = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const te = this.length - x;
    if ((I === void 0 || I > te) && (I = te), f.length > 0 && (I < 0 || x < 0) || x > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    Y || (Y = "utf8");
    let ne = !1;
    for (; ; )
      switch (Y) {
        case "hex":
          return H(this, f, x, I);
        case "utf8":
        case "utf-8":
          return ie(this, f, x, I);
        case "ascii":
        case "latin1":
        case "binary":
          return M(this, f, x, I);
        case "base64":
          return W(this, f, x, I);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ee(this, f, x, I);
        default:
          if (ne)
            throw new TypeError("Unknown encoding: " + Y);
          Y = ("" + Y).toLowerCase(), ne = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function F(b, f, x) {
    return f === 0 && x === b.length ? e.fromByteArray(b) : e.fromByteArray(b.slice(f, x));
  }
  function q(b, f, x) {
    x = Math.min(b.length, x);
    const I = [];
    let Y = f;
    for (; Y < x; ) {
      const te = b[Y];
      let ne = null, be = te > 239 ? 4 : te > 223 ? 3 : te > 191 ? 2 : 1;
      if (Y + be <= x) {
        let Be, _e, me, Oe;
        switch (be) {
          case 1:
            te < 128 && (ne = te);
            break;
          case 2:
            Be = b[Y + 1], (Be & 192) === 128 && (Oe = (te & 31) << 6 | Be & 63, Oe > 127 && (ne = Oe));
            break;
          case 3:
            Be = b[Y + 1], _e = b[Y + 2], (Be & 192) === 128 && (_e & 192) === 128 && (Oe = (te & 15) << 12 | (Be & 63) << 6 | _e & 63, Oe > 2047 && (Oe < 55296 || Oe > 57343) && (ne = Oe));
            break;
          case 4:
            Be = b[Y + 1], _e = b[Y + 2], me = b[Y + 3], (Be & 192) === 128 && (_e & 192) === 128 && (me & 192) === 128 && (Oe = (te & 15) << 18 | (Be & 63) << 12 | (_e & 63) << 6 | me & 63, Oe > 65535 && Oe < 1114112 && (ne = Oe));
        }
      }
      ne === null ? (ne = 65533, be = 1) : ne > 65535 && (ne -= 65536, I.push(ne >>> 10 & 1023 | 55296), ne = 56320 | ne & 1023), I.push(ne), Y += be;
    }
    return V(I);
  }
  const j = 4096;
  function V(b) {
    const f = b.length;
    if (f <= j)
      return String.fromCharCode.apply(String, b);
    let x = "", I = 0;
    for (; I < f; )
      x += String.fromCharCode.apply(
        String,
        b.slice(I, I += j)
      );
    return x;
  }
  function re(b, f, x) {
    let I = "";
    x = Math.min(b.length, x);
    for (let Y = f; Y < x; ++Y)
      I += String.fromCharCode(b[Y] & 127);
    return I;
  }
  function se(b, f, x) {
    let I = "";
    x = Math.min(b.length, x);
    for (let Y = f; Y < x; ++Y)
      I += String.fromCharCode(b[Y]);
    return I;
  }
  function oe(b, f, x) {
    const I = b.length;
    (!f || f < 0) && (f = 0), (!x || x < 0 || x > I) && (x = I);
    let Y = "";
    for (let te = f; te < x; ++te)
      Y += de[b[te]];
    return Y;
  }
  function he(b, f, x) {
    const I = b.slice(f, x);
    let Y = "";
    for (let te = 0; te < I.length - 1; te += 2)
      Y += String.fromCharCode(I[te] + I[te + 1] * 256);
    return Y;
  }
  a.prototype.slice = function(f, x) {
    const I = this.length;
    f = ~~f, x = x === void 0 ? I : ~~x, f < 0 ? (f += I, f < 0 && (f = 0)) : f > I && (f = I), x < 0 ? (x += I, x < 0 && (x = 0)) : x > I && (x = I), x < f && (x = f);
    const Y = this.subarray(f, x);
    return Object.setPrototypeOf(Y, a.prototype), Y;
  };
  function Z(b, f, x) {
    if (b % 1 !== 0 || b < 0)
      throw new RangeError("offset is not uint");
    if (b + f > x)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(f, x, I) {
    f = f >>> 0, x = x >>> 0, I || Z(f, x, this.length);
    let Y = this[f], te = 1, ne = 0;
    for (; ++ne < x && (te *= 256); )
      Y += this[f + ne] * te;
    return Y;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(f, x, I) {
    f = f >>> 0, x = x >>> 0, I || Z(f, x, this.length);
    let Y = this[f + --x], te = 1;
    for (; x > 0 && (te *= 256); )
      Y += this[f + --x] * te;
    return Y;
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(f, x) {
    return f = f >>> 0, x || Z(f, 1, this.length), this[f];
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(f, x) {
    return f = f >>> 0, x || Z(f, 2, this.length), this[f] | this[f + 1] << 8;
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(f, x) {
    return f = f >>> 0, x || Z(f, 2, this.length), this[f] << 8 | this[f + 1];
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(f, x) {
    return f = f >>> 0, x || Z(f, 4, this.length), (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + this[f + 3] * 16777216;
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(f, x) {
    return f = f >>> 0, x || Z(f, 4, this.length), this[f] * 16777216 + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]);
  }, a.prototype.readBigUInt64LE = xe(function(f) {
    f = f >>> 0, K(f, "offset");
    const x = this[f], I = this[f + 7];
    (x === void 0 || I === void 0) && G(f, this.length - 8);
    const Y = x + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24, te = this[++f] + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + I * 2 ** 24;
    return BigInt(Y) + (BigInt(te) << BigInt(32));
  }), a.prototype.readBigUInt64BE = xe(function(f) {
    f = f >>> 0, K(f, "offset");
    const x = this[f], I = this[f + 7];
    (x === void 0 || I === void 0) && G(f, this.length - 8);
    const Y = x * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f], te = this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + I;
    return (BigInt(Y) << BigInt(32)) + BigInt(te);
  }), a.prototype.readIntLE = function(f, x, I) {
    f = f >>> 0, x = x >>> 0, I || Z(f, x, this.length);
    let Y = this[f], te = 1, ne = 0;
    for (; ++ne < x && (te *= 256); )
      Y += this[f + ne] * te;
    return te *= 128, Y >= te && (Y -= Math.pow(2, 8 * x)), Y;
  }, a.prototype.readIntBE = function(f, x, I) {
    f = f >>> 0, x = x >>> 0, I || Z(f, x, this.length);
    let Y = x, te = 1, ne = this[f + --Y];
    for (; Y > 0 && (te *= 256); )
      ne += this[f + --Y] * te;
    return te *= 128, ne >= te && (ne -= Math.pow(2, 8 * x)), ne;
  }, a.prototype.readInt8 = function(f, x) {
    return f = f >>> 0, x || Z(f, 1, this.length), this[f] & 128 ? (255 - this[f] + 1) * -1 : this[f];
  }, a.prototype.readInt16LE = function(f, x) {
    f = f >>> 0, x || Z(f, 2, this.length);
    const I = this[f] | this[f + 1] << 8;
    return I & 32768 ? I | 4294901760 : I;
  }, a.prototype.readInt16BE = function(f, x) {
    f = f >>> 0, x || Z(f, 2, this.length);
    const I = this[f + 1] | this[f] << 8;
    return I & 32768 ? I | 4294901760 : I;
  }, a.prototype.readInt32LE = function(f, x) {
    return f = f >>> 0, x || Z(f, 4, this.length), this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24;
  }, a.prototype.readInt32BE = function(f, x) {
    return f = f >>> 0, x || Z(f, 4, this.length), this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3];
  }, a.prototype.readBigInt64LE = xe(function(f) {
    f = f >>> 0, K(f, "offset");
    const x = this[f], I = this[f + 7];
    (x === void 0 || I === void 0) && G(f, this.length - 8);
    const Y = this[f + 4] + this[f + 5] * 2 ** 8 + this[f + 6] * 2 ** 16 + (I << 24);
    return (BigInt(Y) << BigInt(32)) + BigInt(x + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24);
  }), a.prototype.readBigInt64BE = xe(function(f) {
    f = f >>> 0, K(f, "offset");
    const x = this[f], I = this[f + 7];
    (x === void 0 || I === void 0) && G(f, this.length - 8);
    const Y = (x << 24) + // Overflow
    this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f];
    return (BigInt(Y) << BigInt(32)) + BigInt(this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + I);
  }), a.prototype.readFloatLE = function(f, x) {
    return f = f >>> 0, x || Z(f, 4, this.length), r.read(this, f, !0, 23, 4);
  }, a.prototype.readFloatBE = function(f, x) {
    return f = f >>> 0, x || Z(f, 4, this.length), r.read(this, f, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(f, x) {
    return f = f >>> 0, x || Z(f, 8, this.length), r.read(this, f, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(f, x) {
    return f = f >>> 0, x || Z(f, 8, this.length), r.read(this, f, !1, 52, 8);
  };
  function $(b, f, x, I, Y, te) {
    if (!a.isBuffer(b))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (f > Y || f < te)
      throw new RangeError('"value" argument is out of bounds');
    if (x + I > b.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(f, x, I, Y) {
    if (f = +f, x = x >>> 0, I = I >>> 0, !Y) {
      const be = Math.pow(2, 8 * I) - 1;
      $(this, f, x, I, be, 0);
    }
    let te = 1, ne = 0;
    for (this[x] = f & 255; ++ne < I && (te *= 256); )
      this[x + ne] = f / te & 255;
    return x + I;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(f, x, I, Y) {
    if (f = +f, x = x >>> 0, I = I >>> 0, !Y) {
      const be = Math.pow(2, 8 * I) - 1;
      $(this, f, x, I, be, 0);
    }
    let te = I - 1, ne = 1;
    for (this[x + te] = f & 255; --te >= 0 && (ne *= 256); )
      this[x + te] = f / ne & 255;
    return x + I;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(f, x, I) {
    return f = +f, x = x >>> 0, I || $(this, f, x, 1, 255, 0), this[x] = f & 255, x + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(f, x, I) {
    return f = +f, x = x >>> 0, I || $(this, f, x, 2, 65535, 0), this[x] = f & 255, this[x + 1] = f >>> 8, x + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(f, x, I) {
    return f = +f, x = x >>> 0, I || $(this, f, x, 2, 65535, 0), this[x] = f >>> 8, this[x + 1] = f & 255, x + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(f, x, I) {
    return f = +f, x = x >>> 0, I || $(this, f, x, 4, 4294967295, 0), this[x + 3] = f >>> 24, this[x + 2] = f >>> 16, this[x + 1] = f >>> 8, this[x] = f & 255, x + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(f, x, I) {
    return f = +f, x = x >>> 0, I || $(this, f, x, 4, 4294967295, 0), this[x] = f >>> 24, this[x + 1] = f >>> 16, this[x + 2] = f >>> 8, this[x + 3] = f & 255, x + 4;
  };
  function X(b, f, x, I, Y) {
    D(f, I, Y, b, x, 7);
    let te = Number(f & BigInt(4294967295));
    b[x++] = te, te = te >> 8, b[x++] = te, te = te >> 8, b[x++] = te, te = te >> 8, b[x++] = te;
    let ne = Number(f >> BigInt(32) & BigInt(4294967295));
    return b[x++] = ne, ne = ne >> 8, b[x++] = ne, ne = ne >> 8, b[x++] = ne, ne = ne >> 8, b[x++] = ne, x;
  }
  function y(b, f, x, I, Y) {
    D(f, I, Y, b, x, 7);
    let te = Number(f & BigInt(4294967295));
    b[x + 7] = te, te = te >> 8, b[x + 6] = te, te = te >> 8, b[x + 5] = te, te = te >> 8, b[x + 4] = te;
    let ne = Number(f >> BigInt(32) & BigInt(4294967295));
    return b[x + 3] = ne, ne = ne >> 8, b[x + 2] = ne, ne = ne >> 8, b[x + 1] = ne, ne = ne >> 8, b[x] = ne, x + 8;
  }
  a.prototype.writeBigUInt64LE = xe(function(f, x = 0) {
    return X(this, f, x, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeBigUInt64BE = xe(function(f, x = 0) {
    return y(this, f, x, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeIntLE = function(f, x, I, Y) {
    if (f = +f, x = x >>> 0, !Y) {
      const Be = Math.pow(2, 8 * I - 1);
      $(this, f, x, I, Be - 1, -Be);
    }
    let te = 0, ne = 1, be = 0;
    for (this[x] = f & 255; ++te < I && (ne *= 256); )
      f < 0 && be === 0 && this[x + te - 1] !== 0 && (be = 1), this[x + te] = (f / ne >> 0) - be & 255;
    return x + I;
  }, a.prototype.writeIntBE = function(f, x, I, Y) {
    if (f = +f, x = x >>> 0, !Y) {
      const Be = Math.pow(2, 8 * I - 1);
      $(this, f, x, I, Be - 1, -Be);
    }
    let te = I - 1, ne = 1, be = 0;
    for (this[x + te] = f & 255; --te >= 0 && (ne *= 256); )
      f < 0 && be === 0 && this[x + te + 1] !== 0 && (be = 1), this[x + te] = (f / ne >> 0) - be & 255;
    return x + I;
  }, a.prototype.writeInt8 = function(f, x, I) {
    return f = +f, x = x >>> 0, I || $(this, f, x, 1, 127, -128), f < 0 && (f = 255 + f + 1), this[x] = f & 255, x + 1;
  }, a.prototype.writeInt16LE = function(f, x, I) {
    return f = +f, x = x >>> 0, I || $(this, f, x, 2, 32767, -32768), this[x] = f & 255, this[x + 1] = f >>> 8, x + 2;
  }, a.prototype.writeInt16BE = function(f, x, I) {
    return f = +f, x = x >>> 0, I || $(this, f, x, 2, 32767, -32768), this[x] = f >>> 8, this[x + 1] = f & 255, x + 2;
  }, a.prototype.writeInt32LE = function(f, x, I) {
    return f = +f, x = x >>> 0, I || $(this, f, x, 4, 2147483647, -2147483648), this[x] = f & 255, this[x + 1] = f >>> 8, this[x + 2] = f >>> 16, this[x + 3] = f >>> 24, x + 4;
  }, a.prototype.writeInt32BE = function(f, x, I) {
    return f = +f, x = x >>> 0, I || $(this, f, x, 4, 2147483647, -2147483648), f < 0 && (f = 4294967295 + f + 1), this[x] = f >>> 24, this[x + 1] = f >>> 16, this[x + 2] = f >>> 8, this[x + 3] = f & 255, x + 4;
  }, a.prototype.writeBigInt64LE = xe(function(f, x = 0) {
    return X(this, f, x, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = xe(function(f, x = 0) {
    return y(this, f, x, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function ce(b, f, x, I, Y, te) {
    if (x + I > b.length)
      throw new RangeError("Index out of range");
    if (x < 0)
      throw new RangeError("Index out of range");
  }
  function fe(b, f, x, I, Y) {
    return f = +f, x = x >>> 0, Y || ce(b, f, x, 4), r.write(b, f, x, I, 23, 4), x + 4;
  }
  a.prototype.writeFloatLE = function(f, x, I) {
    return fe(this, f, x, !0, I);
  }, a.prototype.writeFloatBE = function(f, x, I) {
    return fe(this, f, x, !1, I);
  };
  function pe(b, f, x, I, Y) {
    return f = +f, x = x >>> 0, Y || ce(b, f, x, 8), r.write(b, f, x, I, 52, 8), x + 8;
  }
  a.prototype.writeDoubleLE = function(f, x, I) {
    return pe(this, f, x, !0, I);
  }, a.prototype.writeDoubleBE = function(f, x, I) {
    return pe(this, f, x, !1, I);
  }, a.prototype.copy = function(f, x, I, Y) {
    if (!a.isBuffer(f))
      throw new TypeError("argument should be a Buffer");
    if (I || (I = 0), !Y && Y !== 0 && (Y = this.length), x >= f.length && (x = f.length), x || (x = 0), Y > 0 && Y < I && (Y = I), Y === I || f.length === 0 || this.length === 0)
      return 0;
    if (x < 0)
      throw new RangeError("targetStart out of bounds");
    if (I < 0 || I >= this.length)
      throw new RangeError("Index out of range");
    if (Y < 0)
      throw new RangeError("sourceEnd out of bounds");
    Y > this.length && (Y = this.length), f.length - x < Y - I && (Y = f.length - x + I);
    const te = Y - I;
    return this === f && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(x, I, Y) : Uint8Array.prototype.set.call(
      f,
      this.subarray(I, Y),
      x
    ), te;
  }, a.prototype.fill = function(f, x, I, Y) {
    if (typeof f == "string") {
      if (typeof x == "string" ? (Y = x, x = 0, I = this.length) : typeof I == "string" && (Y = I, I = this.length), Y !== void 0 && typeof Y != "string")
        throw new TypeError("encoding must be a string");
      if (typeof Y == "string" && !a.isEncoding(Y))
        throw new TypeError("Unknown encoding: " + Y);
      if (f.length === 1) {
        const ne = f.charCodeAt(0);
        (Y === "utf8" && ne < 128 || Y === "latin1") && (f = ne);
      }
    } else
      typeof f == "number" ? f = f & 255 : typeof f == "boolean" && (f = Number(f));
    if (x < 0 || this.length < x || this.length < I)
      throw new RangeError("Out of range index");
    if (I <= x)
      return this;
    x = x >>> 0, I = I === void 0 ? this.length : I >>> 0, f || (f = 0);
    let te;
    if (typeof f == "number")
      for (te = x; te < I; ++te)
        this[te] = f;
    else {
      const ne = a.isBuffer(f) ? f : a.from(f, Y), be = ne.length;
      if (be === 0)
        throw new TypeError('The value "' + f + '" is invalid for argument "value"');
      for (te = 0; te < I - x; ++te)
        this[te + x] = ne[te % be];
    }
    return this;
  };
  const ae = {};
  function le(b, f, x) {
    ae[b] = class extends x {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: f.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${b}]`, this.stack, delete this.name;
      }
      get code() {
        return b;
      }
      set code(Y) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: Y,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${b}]: ${this.message}`;
      }
    };
  }
  le(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(b) {
      return b ? `${b} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), le(
    "ERR_INVALID_ARG_TYPE",
    function(b, f) {
      return `The "${b}" argument must be of type number. Received type ${typeof f}`;
    },
    TypeError
  ), le(
    "ERR_OUT_OF_RANGE",
    function(b, f, x) {
      let I = `The value of "${b}" is out of range.`, Y = x;
      return Number.isInteger(x) && Math.abs(x) > 2 ** 32 ? Y = T(String(x)) : typeof x == "bigint" && (Y = String(x), (x > BigInt(2) ** BigInt(32) || x < -(BigInt(2) ** BigInt(32))) && (Y = T(Y)), Y += "n"), I += ` It must be ${f}. Received ${Y}`, I;
    },
    RangeError
  );
  function T(b) {
    let f = "", x = b.length;
    const I = b[0] === "-" ? 1 : 0;
    for (; x >= I + 4; x -= 3)
      f = `_${b.slice(x - 3, x)}${f}`;
    return `${b.slice(0, x)}${f}`;
  }
  function R(b, f, x) {
    K(f, "offset"), (b[f] === void 0 || b[f + x] === void 0) && G(f, b.length - (x + 1));
  }
  function D(b, f, x, I, Y, te) {
    if (b > x || b < f) {
      const ne = typeof f == "bigint" ? "n" : "";
      let be;
      throw te > 3 ? f === 0 || f === BigInt(0) ? be = `>= 0${ne} and < 2${ne} ** ${(te + 1) * 8}${ne}` : be = `>= -(2${ne} ** ${(te + 1) * 8 - 1}${ne}) and < 2 ** ${(te + 1) * 8 - 1}${ne}` : be = `>= ${f}${ne} and <= ${x}${ne}`, new ae.ERR_OUT_OF_RANGE("value", be, b);
    }
    R(I, Y, te);
  }
  function K(b, f) {
    if (typeof b != "number")
      throw new ae.ERR_INVALID_ARG_TYPE(f, "number", b);
  }
  function G(b, f, x) {
    throw Math.floor(b) !== b ? (K(b, x), new ae.ERR_OUT_OF_RANGE(x || "offset", "an integer", b)) : f < 0 ? new ae.ERR_BUFFER_OUT_OF_BOUNDS() : new ae.ERR_OUT_OF_RANGE(
      x || "offset",
      `>= ${x ? 1 : 0} and <= ${f}`,
      b
    );
  }
  const Q = /[^+/0-9A-Za-z-_]/g;
  function g(b) {
    if (b = b.split("=")[0], b = b.trim().replace(Q, ""), b.length < 2)
      return "";
    for (; b.length % 4 !== 0; )
      b = b + "=";
    return b;
  }
  function o(b, f) {
    f = f || 1 / 0;
    let x;
    const I = b.length;
    let Y = null;
    const te = [];
    for (let ne = 0; ne < I; ++ne) {
      if (x = b.charCodeAt(ne), x > 55295 && x < 57344) {
        if (!Y) {
          if (x > 56319) {
            (f -= 3) > -1 && te.push(239, 191, 189);
            continue;
          } else if (ne + 1 === I) {
            (f -= 3) > -1 && te.push(239, 191, 189);
            continue;
          }
          Y = x;
          continue;
        }
        if (x < 56320) {
          (f -= 3) > -1 && te.push(239, 191, 189), Y = x;
          continue;
        }
        x = (Y - 55296 << 10 | x - 56320) + 65536;
      } else
        Y && (f -= 3) > -1 && te.push(239, 191, 189);
      if (Y = null, x < 128) {
        if ((f -= 1) < 0)
          break;
        te.push(x);
      } else if (x < 2048) {
        if ((f -= 2) < 0)
          break;
        te.push(
          x >> 6 | 192,
          x & 63 | 128
        );
      } else if (x < 65536) {
        if ((f -= 3) < 0)
          break;
        te.push(
          x >> 12 | 224,
          x >> 6 & 63 | 128,
          x & 63 | 128
        );
      } else if (x < 1114112) {
        if ((f -= 4) < 0)
          break;
        te.push(
          x >> 18 | 240,
          x >> 12 & 63 | 128,
          x >> 6 & 63 | 128,
          x & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return te;
  }
  function u(b) {
    const f = [];
    for (let x = 0; x < b.length; ++x)
      f.push(b.charCodeAt(x) & 255);
    return f;
  }
  function v(b, f) {
    let x, I, Y;
    const te = [];
    for (let ne = 0; ne < b.length && !((f -= 2) < 0); ++ne)
      x = b.charCodeAt(ne), I = x >> 8, Y = x % 256, te.push(Y), te.push(I);
    return te;
  }
  function N(b) {
    return e.toByteArray(g(b));
  }
  function z(b, f, x, I) {
    let Y;
    for (Y = 0; Y < I && !(Y + x >= f.length || Y >= b.length); ++Y)
      f[Y + x] = b[Y];
    return Y;
  }
  function J(b, f) {
    return b instanceof f || b != null && b.constructor != null && b.constructor.name != null && b.constructor.name === f.name;
  }
  function ue(b) {
    return b !== b;
  }
  const de = function() {
    const b = "0123456789abcdef", f = new Array(256);
    for (let x = 0; x < 16; ++x) {
      const I = x * 16;
      for (let Y = 0; Y < 16; ++Y)
        f[I + Y] = b[x] + b[Y];
    }
    return f;
  }();
  function xe(b) {
    return typeof BigInt > "u" ? we : b;
  }
  function we() {
    throw new Error("BigInt not supported");
  }
})(lr);
var $i;
(function(t) {
  t[t.SysFatal = 1] = "SysFatal", t[t.SysTransient = 2] = "SysTransient", t[t.DestinationInvalid = 3] = "DestinationInvalid", t[t.CanisterReject = 4] = "CanisterReject", t[t.CanisterError = 5] = "CanisterError";
})($i || ($i = {}));
const a0 = "abcdefghijklmnopqrstuvwxyz234567", zr = /* @__PURE__ */ Object.create(null);
for (let t = 0; t < a0.length; t++)
  zr[a0[t]] = t;
zr[0] = zr.o;
zr[1] = zr.i;
function tf(t) {
  let e = 0, r = 0, n = "";
  function i(s) {
    return e < 0 ? r |= s >> -e : r = s << e & 248, e > 3 ? (e -= 8, 1) : (e < 4 && (n += a0[r >> 3], e += 5), 0);
  }
  for (let s = 0; s < t.length; )
    s += i(t[s]);
  return n + (e < 0 ? a0[r >> 3] : "");
}
function rf(t) {
  let e = 0, r = 0;
  const n = new Uint8Array(t.length * 4 / 3 | 0);
  let i = 0;
  function s(c) {
    let a = zr[c.toLowerCase()];
    if (a === void 0)
      throw new Error(`Invalid character: ${JSON.stringify(c)}`);
    a <<= 3, r |= a >>> e, e += 5, e >= 8 && (n[i++] = r, e -= 8, e > 0 ? r = a << 5 - e & 255 : r = 0);
  }
  for (const c of t)
    s(c);
  return n.slice(0, i);
}
const nf = new Uint32Array([
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
function sf(t) {
  const e = new Uint8Array(t);
  let r = -1;
  for (let n = 0; n < e.length; n++) {
    const s = (e[n] ^ r) & 255;
    r = nf[s] ^ r >>> 8;
  }
  return (r ^ -1) >>> 0;
}
function af(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
function Eo(t, ...e) {
  if (!af(t))
    throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
}
function zs(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function of(t, e) {
  Eo(t);
  const r = e.outputLen;
  if (t.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const z0 = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const j0 = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength), Ct = (t, e) => t << 32 - e | t >>> e;
new Uint8Array(new Uint32Array([287454020]).buffer)[0];
function cf(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function vo(t) {
  return typeof t == "string" && (t = cf(t)), Eo(t), t;
}
class uf {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function fs(t) {
  const e = (n) => t().update(vo(n)).digest(), r = t();
  return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = () => t(), e;
}
function Bo(t = 32) {
  if (z0 && typeof z0.getRandomValues == "function")
    return z0.getRandomValues(new Uint8Array(t));
  throw new Error("crypto.getRandomValues must be defined");
}
function ff(t, e, r, n) {
  if (typeof t.setBigUint64 == "function")
    return t.setBigUint64(e, r, n);
  const i = BigInt(32), s = BigInt(4294967295), c = Number(r >> i & s), a = Number(r & s), d = n ? 4 : 0, l = n ? 0 : 4;
  t.setUint32(e + d, c, n), t.setUint32(e + l, a, n);
}
const lf = (t, e, r) => t & e ^ ~t & r, hf = (t, e, r) => t & e ^ t & r ^ e & r;
class Ao extends uf {
  constructor(e, r, n, i) {
    super(), this.blockLen = e, this.outputLen = r, this.padOffset = n, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = j0(this.buffer);
  }
  update(e) {
    zs(this);
    const { view: r, buffer: n, blockLen: i } = this;
    e = vo(e);
    const s = e.length;
    for (let c = 0; c < s; ) {
      const a = Math.min(i - this.pos, s - c);
      if (a === i) {
        const d = j0(e);
        for (; i <= s - c; c += i)
          this.process(d, c);
        continue;
      }
      n.set(e.subarray(c, c + a), this.pos), this.pos += a, c += a, this.pos === i && (this.process(r, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    zs(this), of(e, this), this.finished = !0;
    const { buffer: r, view: n, blockLen: i, isLE: s } = this;
    let { pos: c } = this;
    r[c++] = 128, this.buffer.subarray(c).fill(0), this.padOffset > i - c && (this.process(n, 0), c = 0);
    for (let w = c; w < i; w++)
      r[w] = 0;
    ff(n, i - 8, BigInt(this.length * 8), s), this.process(n, 0);
    const a = j0(e), d = this.outputLen;
    if (d % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const l = d / 4, p = this.get();
    if (l > p.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let w = 0; w < l; w++)
      a.setUint32(4 * w, p[w], s);
  }
  digest() {
    const { buffer: e, outputLen: r } = this;
    this.digestInto(e);
    const n = e.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: r, buffer: n, length: i, finished: s, destroyed: c, pos: a } = this;
    return e.length = i, e.pos = a, e.finished = s, e.destroyed = c, i % r && e.buffer.set(n), e;
  }
}
const df = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Wt = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Lt = /* @__PURE__ */ new Uint32Array(64);
class Co extends Ao {
  constructor() {
    super(64, 32, 8, !1), this.A = Wt[0] | 0, this.B = Wt[1] | 0, this.C = Wt[2] | 0, this.D = Wt[3] | 0, this.E = Wt[4] | 0, this.F = Wt[5] | 0, this.G = Wt[6] | 0, this.H = Wt[7] | 0;
  }
  get() {
    const { A: e, B: r, C: n, D: i, E: s, F: c, G: a, H: d } = this;
    return [e, r, n, i, s, c, a, d];
  }
  // prettier-ignore
  set(e, r, n, i, s, c, a, d) {
    this.A = e | 0, this.B = r | 0, this.C = n | 0, this.D = i | 0, this.E = s | 0, this.F = c | 0, this.G = a | 0, this.H = d | 0;
  }
  process(e, r) {
    for (let w = 0; w < 16; w++, r += 4)
      Lt[w] = e.getUint32(r, !1);
    for (let w = 16; w < 64; w++) {
      const _ = Lt[w - 15], m = Lt[w - 2], h = Ct(_, 7) ^ Ct(_, 18) ^ _ >>> 3, E = Ct(m, 17) ^ Ct(m, 19) ^ m >>> 10;
      Lt[w] = E + Lt[w - 7] + h + Lt[w - 16] | 0;
    }
    let { A: n, B: i, C: s, D: c, E: a, F: d, G: l, H: p } = this;
    for (let w = 0; w < 64; w++) {
      const _ = Ct(a, 6) ^ Ct(a, 11) ^ Ct(a, 25), m = p + _ + lf(a, d, l) + df[w] + Lt[w] | 0, E = (Ct(n, 2) ^ Ct(n, 13) ^ Ct(n, 22)) + hf(n, i, s) | 0;
      p = l, l = d, d = a, a = c + m | 0, c = s, s = i, i = n, n = m + E | 0;
    }
    n = n + this.A | 0, i = i + this.B | 0, s = s + this.C | 0, c = c + this.D | 0, a = a + this.E | 0, d = d + this.F | 0, l = l + this.G | 0, p = p + this.H | 0, this.set(n, i, s, c, a, d, l, p);
  }
  roundClean() {
    Lt.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class xf extends Co {
  constructor() {
    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
  }
}
const ls = /* @__PURE__ */ fs(() => new Co()), pf = /* @__PURE__ */ fs(() => new xf());
function yf(t) {
  return pf.create().update(new Uint8Array(t)).digest();
}
const wn = "__principal__", gf = 2, js = 4, wf = "aaaaa-aa", bf = (t) => {
  var e;
  return new Uint8Array(((e = t.match(/.{1,2}/g)) !== null && e !== void 0 ? e : []).map((r) => parseInt(r, 16)));
}, mf = (t) => t.reduce((e, r) => e + r.toString(16).padStart(2, "0"), "");
let Ee = class Un {
  constructor(e) {
    this._arr = e, this._isPrincipal = !0;
  }
  static anonymous() {
    return new this(new Uint8Array([js]));
  }
  /**
   * Utility method, returning the principal representing the management canister, decoded from the hex string `'aaaaa-aa'`
   * @returns {Principal} principal of the management canister
   */
  static managementCanister() {
    return this.fromHex(wf);
  }
  static selfAuthenticating(e) {
    const r = yf(e);
    return new this(new Uint8Array([...r, gf]));
  }
  static from(e) {
    if (typeof e == "string")
      return Un.fromText(e);
    if (Object.getPrototypeOf(e) === Uint8Array.prototype)
      return new Un(e);
    if (typeof e == "object" && e !== null && e._isPrincipal === !0)
      return new Un(e._arr);
    throw new Error(`Impossible to convert ${JSON.stringify(e)} to Principal.`);
  }
  static fromHex(e) {
    return new this(bf(e));
  }
  static fromText(e) {
    let r = e;
    if (e.includes(wn)) {
      const c = JSON.parse(e);
      wn in c && (r = c[wn]);
    }
    const n = r.toLowerCase().replace(/-/g, "");
    let i = rf(n);
    i = i.slice(4, i.length);
    const s = new this(i);
    if (s.toText() !== r)
      throw new Error(`Principal "${s.toText()}" does not have a valid checksum (original value "${r}" may not be a valid Principal ID).`);
    return s;
  }
  static fromUint8Array(e) {
    return new this(e);
  }
  isAnonymous() {
    return this._arr.byteLength === 1 && this._arr[0] === js;
  }
  toUint8Array() {
    return this._arr;
  }
  toHex() {
    return mf(this._arr).toUpperCase();
  }
  toText() {
    const e = new ArrayBuffer(4);
    new DataView(e).setUint32(0, sf(this._arr));
    const n = new Uint8Array(e), i = Uint8Array.from(this._arr), s = new Uint8Array([...n, ...i]), a = tf(s).match(/.{1,5}/g);
    if (!a)
      throw new Error();
    return a.join("-");
  }
  toString() {
    return this.toText();
  }
  /**
   * Serializes to JSON
   * @returns {JsonnablePrincipal} a JSON object with a single key, {@link JSON_KEY_PRINCIPAL}, whose value is the principal as a string
   */
  toJSON() {
    return { [wn]: this.toText() };
  }
  /**
   * Utility method taking a Principal to compare against. Used for determining canister ranges in certificate verification
   * @param {Principal} other - a {@link Principal} to compare
   * @returns {'lt' | 'eq' | 'gt'} `'lt' | 'eq' | 'gt'` a string, representing less than, equal to, or greater than
   */
  compareTo(e) {
    for (let r = 0; r < Math.min(this._arr.length, e._arr.length); r++) {
      if (this._arr[r] < e._arr[r])
        return "lt";
      if (this._arr[r] > e._arr[r])
        return "gt";
    }
    return this._arr.length < e._arr.length ? "lt" : this._arr.length > e._arr.length ? "gt" : "eq";
  }
  /**
   * Utility method checking whether a provided Principal is less than or equal to the current one using the {@link Principal.compareTo} method
   * @param other a {@link Principal} to compare
   * @returns {boolean} boolean
   */
  ltEq(e) {
    const r = this.compareTo(e);
    return r == "lt" || r == "eq";
  }
  /**
   * Utility method checking whether a provided Principal is greater than or equal to the current one using the {@link Principal.compareTo} method
   * @param other a {@link Principal} to compare
   * @returns {boolean} boolean
   */
  gtEq(e) {
    const r = this.compareTo(e);
    return r == "gt" || r == "eq";
  }
};
class ht extends Error {
  constructor(e) {
    super(e), this.message = e, Object.setPrototypeOf(this, ht.prototype);
  }
}
function Me(...t) {
  const e = new Uint8Array(t.reduce((n, i) => n + i.byteLength, 0));
  let r = 0;
  for (const n of t)
    e.set(new Uint8Array(n), r), r += n.byteLength;
  return e;
}
class Hr {
  /**
   * Creates a new instance of a pipe
   * @param buffer an optional buffer to start with
   * @param length an optional amount of bytes to use for the length.
   */
  constructor(e, r = (e == null ? void 0 : e.byteLength) || 0) {
    this._buffer = Hi(e || new ArrayBuffer(0)), this._view = new Uint8Array(this._buffer, 0, r);
  }
  get buffer() {
    return Hi(this._view.slice());
  }
  get byteLength() {
    return this._view.byteLength;
  }
  /**
   * Read `num` number of bytes from the front of the pipe.
   * @param num The number of bytes to read.
   */
  read(e) {
    const r = this._view.subarray(0, e);
    return this._view = this._view.subarray(e), r.slice().buffer;
  }
  readUint8() {
    const e = this._view[0];
    return this._view = this._view.subarray(1), e;
  }
  /**
   * Write a buffer to the end of the pipe.
   * @param buf The bytes to write.
   */
  write(e) {
    const r = new Uint8Array(e), n = this._view.byteLength;
    this._view.byteOffset + this._view.byteLength + r.byteLength >= this._buffer.byteLength ? this.alloc(r.byteLength) : this._view = new Uint8Array(this._buffer, this._view.byteOffset, this._view.byteLength + r.byteLength), this._view.set(r, n);
  }
  /**
   * Whether or not there is more data to read from the buffer
   */
  get end() {
    return this._view.byteLength === 0;
  }
  /**
   * Allocate a fixed amount of memory in the buffer. This does not affect the view.
   * @param amount A number of bytes to add to the buffer.
   */
  alloc(e) {
    const r = new ArrayBuffer((this._buffer.byteLength + e) * 1.2 | 0), n = new Uint8Array(r, 0, this._view.byteLength + e);
    n.set(this._view), this._buffer = r, this._view = n;
  }
}
function q0(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength).buffer;
}
function Hi(t) {
  return t instanceof Uint8Array ? q0(t) : t instanceof ArrayBuffer ? t : Array.isArray(t) ? q0(new Uint8Array(t)) : "buffer" in t ? Hi(t.buffer) : q0(new Uint8Array(t));
}
function _f(t) {
  const r = new TextEncoder().encode(t);
  let n = 0;
  for (const i of r)
    n = (n * 223 + i) % 2 ** 32;
  return n;
}
function Mt(t) {
  if (/^_\d+_$/.test(t) || /^_0x[0-9a-fA-F]+_$/.test(t)) {
    const e = +t.slice(1, -1);
    if (Number.isSafeInteger(e) && e >= 0 && e < 2 ** 32)
      return e;
  }
  return _f(t);
}
function Fo() {
  throw new Error("unexpected end of buffer");
}
function _r(t, e) {
  return t.byteLength < e && Fo(), t.read(e);
}
function Er(t) {
  const e = t.readUint8();
  return e === void 0 && Fo(), e;
}
function qe(t) {
  if (typeof t == "number" && (t = BigInt(t)), t < BigInt(0))
    throw new Error("Cannot leb encode negative values.");
  const e = (t === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(t)))) + 1, r = new Hr(new ArrayBuffer(e), 0);
  for (; ; ) {
    const n = Number(t & BigInt(127));
    if (t /= BigInt(128), t === BigInt(0)) {
      r.write(new Uint8Array([n]));
      break;
    } else
      r.write(new Uint8Array([n | 128]));
  }
  return r.buffer;
}
function Ze(t) {
  let e = BigInt(1), r = BigInt(0), n;
  do
    n = Er(t), r += BigInt(n & 127).valueOf() * e, e *= BigInt(128);
  while (n >= 128);
  return r;
}
function Ke(t) {
  typeof t == "number" && (t = BigInt(t));
  const e = t < BigInt(0);
  e && (t = -t - BigInt(1));
  const r = (t === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(t)))) + 1, n = new Hr(new ArrayBuffer(r), 0);
  for (; ; ) {
    const s = i(t);
    if (t /= BigInt(128), e && t === BigInt(0) && s & 64 || !e && t === BigInt(0) && !(s & 64)) {
      n.write(new Uint8Array([s]));
      break;
    } else
      n.write(new Uint8Array([s | 128]));
  }
  function i(s) {
    const c = s % BigInt(128);
    return Number(e ? BigInt(128) - c - BigInt(1) : c);
  }
  return n.buffer;
}
function Qt(t) {
  const e = new Uint8Array(t.buffer);
  let r = 0;
  for (; r < e.byteLength; r++)
    if (e[r] < 128) {
      if (!(e[r] & 64))
        return Ze(t);
      break;
    }
  const n = new Uint8Array(_r(t, r + 1));
  let i = BigInt(0);
  for (let s = n.byteLength - 1; s >= 0; s--)
    i = i * BigInt(128) + BigInt(128 - (n[s] & 127) - 1);
  return -i - BigInt(1);
}
function Ef(t, e) {
  if (BigInt(t) < BigInt(0))
    throw new Error("Cannot write negative values.");
  return To(t, e);
}
function To(t, e) {
  t = BigInt(t);
  const r = new Hr(new ArrayBuffer(Math.min(1, e)), 0);
  let n = 0, i = BigInt(256), s = BigInt(0), c = Number(t % i);
  for (r.write(new Uint8Array([c])); ++n < e; )
    t < 0 && s === BigInt(0) && c !== 0 && (s = BigInt(1)), c = Number((t / i - s) % BigInt(256)), r.write(new Uint8Array([c])), i *= BigInt(256);
  return r.buffer;
}
function So(t, e) {
  let r = BigInt(Er(t)), n = BigInt(1), i = 0;
  for (; ++i < e; ) {
    n *= BigInt(256);
    const s = BigInt(Er(t));
    r = r + n * s;
  }
  return r;
}
function vf(t, e) {
  let r = So(t, e);
  const n = BigInt(2) ** (BigInt(8) * BigInt(e - 1) + BigInt(7));
  return r >= n && (r -= n * BigInt(2)), r;
}
function Vi(t) {
  const e = BigInt(t);
  if (t < 0)
    throw new RangeError("Input must be non-negative");
  return BigInt(1) << e;
}
const In = "DIDL", qs = 400;
function nn(t, e, r) {
  return t.map((n, i) => r(n, e[i]));
}
class Bf {
  constructor() {
    this._typs = [], this._idx = /* @__PURE__ */ new Map();
  }
  has(e) {
    return this._idx.has(e.name);
  }
  add(e, r) {
    const n = this._typs.length;
    this._idx.set(e.name, n), this._typs.push(r);
  }
  merge(e, r) {
    const n = this._idx.get(e.name), i = this._idx.get(r);
    if (n === void 0)
      throw new Error("Missing type index for " + e);
    if (i === void 0)
      throw new Error("Missing type index for " + r);
    this._typs[n] = this._typs[i], this._typs.splice(i, 1), this._idx.delete(r);
  }
  encode() {
    const e = qe(this._typs.length), r = Me(...this._typs);
    return Me(e, r);
  }
  indexOf(e) {
    if (!this._idx.has(e))
      throw new Error("Missing type index for " + e);
    return Ke(this._idx.get(e) || 0);
  }
}
class Af {
  visitType(e, r) {
    throw new Error("Not implemented");
  }
  visitPrimitive(e, r) {
    return this.visitType(e, r);
  }
  visitEmpty(e, r) {
    return this.visitPrimitive(e, r);
  }
  visitBool(e, r) {
    return this.visitPrimitive(e, r);
  }
  visitNull(e, r) {
    return this.visitPrimitive(e, r);
  }
  visitReserved(e, r) {
    return this.visitPrimitive(e, r);
  }
  visitText(e, r) {
    return this.visitPrimitive(e, r);
  }
  visitNumber(e, r) {
    return this.visitPrimitive(e, r);
  }
  visitInt(e, r) {
    return this.visitNumber(e, r);
  }
  visitNat(e, r) {
    return this.visitNumber(e, r);
  }
  visitFloat(e, r) {
    return this.visitPrimitive(e, r);
  }
  visitFixedInt(e, r) {
    return this.visitNumber(e, r);
  }
  visitFixedNat(e, r) {
    return this.visitNumber(e, r);
  }
  visitPrincipal(e, r) {
    return this.visitPrimitive(e, r);
  }
  visitConstruct(e, r) {
    return this.visitType(e, r);
  }
  visitVec(e, r, n) {
    return this.visitConstruct(e, n);
  }
  visitOpt(e, r, n) {
    return this.visitConstruct(e, n);
  }
  visitRecord(e, r, n) {
    return this.visitConstruct(e, n);
  }
  visitTuple(e, r, n) {
    const i = r.map((s, c) => [`_${c}_`, s]);
    return this.visitRecord(e, i, n);
  }
  visitVariant(e, r, n) {
    return this.visitConstruct(e, n);
  }
  visitRec(e, r, n) {
    return this.visitConstruct(r, n);
  }
  visitFunc(e, r) {
    return this.visitConstruct(e, r);
  }
  visitService(e, r) {
    return this.visitConstruct(e, r);
  }
}
class b0 {
  /* Display type name */
  display() {
    return this.name;
  }
  valueToString(e) {
    return He(e);
  }
  /* Implement `T` in the IDL spec, only needed for non-primitive types */
  buildTypeTable(e) {
    e.has(this) || this._buildTypeTableImpl(e);
  }
}
class gt extends b0 {
  checkType(e) {
    if (this.name !== e.name)
      throw new Error(`type mismatch: type on the wire ${e.name}, expect type ${this.name}`);
    return e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _buildTypeTableImpl(e) {
  }
}
class hr extends b0 {
  checkType(e) {
    if (e instanceof dr) {
      const r = e.getType();
      if (typeof r > "u")
        throw new Error("type mismatch with uninitialized type");
      return r;
    }
    throw new Error(`type mismatch: type on the wire ${e.name}, expect type ${this.name}`);
  }
  encodeType(e) {
    return e.indexOf(this.name);
  }
}
class No extends gt {
  accept(e, r) {
    return e.visitEmpty(this, r);
  }
  covariant(e) {
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue() {
    throw new Error("Empty cannot appear as a function argument");
  }
  valueToString() {
    throw new Error("Empty cannot appear as a value");
  }
  encodeType() {
    return Ke(
      -17
      /* IDLTypeIds.Empty */
    );
  }
  decodeValue() {
    throw new Error("Empty cannot appear as an output");
  }
  get name() {
    return "empty";
  }
}
class Ro extends b0 {
  checkType(e) {
    throw new Error("Method not implemented for unknown.");
  }
  accept(e, r) {
    throw e.visitType(this, r);
  }
  covariant(e) {
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue() {
    throw new Error("Unknown cannot appear as a function argument");
  }
  valueToString() {
    throw new Error("Unknown cannot appear as a value");
  }
  encodeType() {
    throw new Error("Unknown cannot be serialized");
  }
  decodeValue(e, r) {
    let n = r.decodeValue(e, r);
    Object(n) !== n && (n = Object(n));
    let i;
    return r instanceof dr ? i = () => r.getType() : i = () => r, Object.defineProperty(n, "type", {
      value: i,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), n;
  }
  _buildTypeTableImpl() {
    throw new Error("Unknown cannot be serialized");
  }
  get name() {
    return "Unknown";
  }
}
class Oo extends gt {
  accept(e, r) {
    return e.visitBool(this, r);
  }
  covariant(e) {
    if (typeof e == "boolean")
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue(e) {
    return new Uint8Array([e ? 1 : 0]);
  }
  encodeType() {
    return Ke(
      -2
      /* IDLTypeIds.Bool */
    );
  }
  decodeValue(e, r) {
    switch (this.checkType(r), Er(e)) {
      case 0:
        return !1;
      case 1:
        return !0;
      default:
        throw new Error("Boolean value out of range");
    }
  }
  get name() {
    return "bool";
  }
}
class Mo extends gt {
  accept(e, r) {
    return e.visitNull(this, r);
  }
  covariant(e) {
    if (e === null)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue() {
    return new ArrayBuffer(0);
  }
  encodeType() {
    return Ke(
      -1
      /* IDLTypeIds.Null */
    );
  }
  decodeValue(e, r) {
    return this.checkType(r), null;
  }
  get name() {
    return "null";
  }
}
class o0 extends gt {
  accept(e, r) {
    return e.visitReserved(this, r);
  }
  covariant(e) {
    return !0;
  }
  encodeValue() {
    return new ArrayBuffer(0);
  }
  encodeType() {
    return Ke(
      -16
      /* IDLTypeIds.Reserved */
    );
  }
  decodeValue(e, r) {
    return r.name !== this.name && r.decodeValue(e, r), null;
  }
  get name() {
    return "reserved";
  }
}
class Uo extends gt {
  accept(e, r) {
    return e.visitText(this, r);
  }
  covariant(e) {
    if (typeof e == "string")
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue(e) {
    const r = new TextEncoder().encode(e), n = qe(r.byteLength);
    return Me(n, r);
  }
  encodeType() {
    return Ke(
      -15
      /* IDLTypeIds.Text */
    );
  }
  decodeValue(e, r) {
    this.checkType(r);
    const n = Ze(e), i = _r(e, Number(n));
    return new TextDecoder("utf8", { fatal: !0 }).decode(i);
  }
  get name() {
    return "text";
  }
  valueToString(e) {
    return '"' + e + '"';
  }
}
class Io extends gt {
  accept(e, r) {
    return e.visitInt(this, r);
  }
  covariant(e) {
    if (typeof e == "bigint" || Number.isInteger(e))
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue(e) {
    return Ke(e);
  }
  encodeType() {
    return Ke(
      -4
      /* IDLTypeIds.Int */
    );
  }
  decodeValue(e, r) {
    return this.checkType(r), Qt(e);
  }
  get name() {
    return "int";
  }
  valueToString(e) {
    return e.toString();
  }
}
class ko extends gt {
  accept(e, r) {
    return e.visitNat(this, r);
  }
  covariant(e) {
    if (typeof e == "bigint" && e >= BigInt(0) || Number.isInteger(e) && e >= 0)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue(e) {
    return qe(e);
  }
  encodeType() {
    return Ke(
      -3
      /* IDLTypeIds.Nat */
    );
  }
  decodeValue(e, r) {
    return this.checkType(r), Ze(e);
  }
  get name() {
    return "nat";
  }
  valueToString(e) {
    return e.toString();
  }
}
class hs extends gt {
  constructor(e) {
    if (super(), this._bits = e, e !== 32 && e !== 64)
      throw new Error("not a valid float type");
  }
  accept(e, r) {
    return e.visitFloat(this, r);
  }
  covariant(e) {
    if (typeof e == "number" || e instanceof Number)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue(e) {
    const r = new ArrayBuffer(this._bits / 8), n = new DataView(r);
    return this._bits === 32 ? n.setFloat32(0, e, !0) : n.setFloat64(0, e, !0), r;
  }
  encodeType() {
    const e = this._bits === 32 ? -13 : -14;
    return Ke(e);
  }
  decodeValue(e, r) {
    this.checkType(r);
    const n = _r(e, this._bits / 8), i = new DataView(n);
    return this._bits === 32 ? i.getFloat32(0, !0) : i.getFloat64(0, !0);
  }
  get name() {
    return "float" + this._bits;
  }
  valueToString(e) {
    return e.toString();
  }
}
class vr extends gt {
  constructor(e) {
    super(), this._bits = e;
  }
  accept(e, r) {
    return e.visitFixedInt(this, r);
  }
  covariant(e) {
    const r = Vi(this._bits - 1) * BigInt(-1), n = Vi(this._bits - 1) - BigInt(1);
    let i = !1;
    if (typeof e == "bigint")
      i = e >= r && e <= n;
    else if (Number.isInteger(e)) {
      const s = BigInt(e);
      i = s >= r && s <= n;
    } else
      i = !1;
    if (i)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue(e) {
    return To(e, this._bits / 8);
  }
  encodeType() {
    const e = Math.log2(this._bits) - 3;
    return Ke(-9 - e);
  }
  decodeValue(e, r) {
    this.checkType(r);
    const n = vf(e, this._bits / 8);
    return this._bits <= 32 ? Number(n) : n;
  }
  get name() {
    return `int${this._bits}`;
  }
  valueToString(e) {
    return e.toString();
  }
}
class or extends gt {
  constructor(e) {
    super(), this._bits = e;
  }
  accept(e, r) {
    return e.visitFixedNat(this, r);
  }
  covariant(e) {
    const r = Vi(this._bits);
    let n = !1;
    if (typeof e == "bigint" && e >= BigInt(0) ? n = e < r : Number.isInteger(e) && e >= 0 ? n = BigInt(e) < r : n = !1, n)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue(e) {
    return Ef(e, this._bits / 8);
  }
  encodeType() {
    const e = Math.log2(this._bits) - 3;
    return Ke(-5 - e);
  }
  decodeValue(e, r) {
    this.checkType(r);
    const n = So(e, this._bits / 8);
    return this._bits <= 32 ? Number(n) : n;
  }
  get name() {
    return `nat${this._bits}`;
  }
  valueToString(e) {
    return e.toString();
  }
}
class m0 extends hr {
  constructor(e) {
    super(), this._type = e, this._blobOptimization = !1, e instanceof or && e._bits === 8 && (this._blobOptimization = !0);
  }
  accept(e, r) {
    return e.visitVec(this, this._type, r);
  }
  covariant(e) {
    const r = this._type instanceof or ? this._type._bits : this._type instanceof vr ? this._type._bits : 0;
    if (ArrayBuffer.isView(e) && r == e.BYTES_PER_ELEMENT * 8 || Array.isArray(e) && e.every((n, i) => {
      try {
        return this._type.covariant(n);
      } catch (s) {
        throw new Error(`Invalid ${this.display()} argument: 

index ${i} -> ${s.message}`);
      }
    }))
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue(e) {
    const r = qe(e.length);
    if (this._blobOptimization)
      return Me(r, new Uint8Array(e));
    if (ArrayBuffer.isView(e))
      return Me(r, new Uint8Array(e.buffer));
    const n = new Hr(new ArrayBuffer(r.byteLength + e.length), 0);
    n.write(r);
    for (const i of e) {
      const s = this._type.encodeValue(i);
      n.write(new Uint8Array(s));
    }
    return n.buffer;
  }
  _buildTypeTableImpl(e) {
    this._type.buildTypeTable(e);
    const r = Ke(
      -19
      /* IDLTypeIds.Vector */
    ), n = this._type.encodeType(e);
    e.add(this, Me(r, n));
  }
  decodeValue(e, r) {
    const n = this.checkType(r);
    if (!(n instanceof m0))
      throw new Error("Not a vector type");
    const i = Number(Ze(e));
    if (this._type instanceof or) {
      if (this._type._bits == 8)
        return new Uint8Array(e.read(i));
      if (this._type._bits == 16)
        return new Uint16Array(e.read(i * 2));
      if (this._type._bits == 32)
        return new Uint32Array(e.read(i * 4));
      if (this._type._bits == 64)
        return new BigUint64Array(e.read(i * 8));
    }
    if (this._type instanceof vr) {
      if (this._type._bits == 8)
        return new Int8Array(e.read(i));
      if (this._type._bits == 16)
        return new Int16Array(e.read(i * 2));
      if (this._type._bits == 32)
        return new Int32Array(e.read(i * 4));
      if (this._type._bits == 64)
        return new BigInt64Array(e.read(i * 8));
    }
    const s = [];
    for (let c = 0; c < i; c++)
      s.push(this._type.decodeValue(e, n._type));
    return s;
  }
  get name() {
    return `vec ${this._type.name}`;
  }
  display() {
    return `vec ${this._type.display()}`;
  }
  valueToString(e) {
    return "vec {" + e.map((n) => this._type.valueToString(n)).join("; ") + "}";
  }
}
class jr extends hr {
  constructor(e) {
    super(), this._type = e;
  }
  accept(e, r) {
    return e.visitOpt(this, this._type, r);
  }
  covariant(e) {
    try {
      if (Array.isArray(e) && (e.length === 0 || e.length === 1 && this._type.covariant(e[0])))
        return !0;
    } catch (r) {
      throw new Error(`Invalid ${this.display()} argument: ${He(e)} 

-> ${r.message}`);
    }
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue(e) {
    return e.length === 0 ? new Uint8Array([0]) : Me(new Uint8Array([1]), this._type.encodeValue(e[0]));
  }
  _buildTypeTableImpl(e) {
    this._type.buildTypeTable(e);
    const r = Ke(
      -18
      /* IDLTypeIds.Opt */
    ), n = this._type.encodeType(e);
    e.add(this, Me(r, n));
  }
  decodeValue(e, r) {
    const n = this.checkType(r);
    if (!(n instanceof jr))
      throw new Error("Not an option type");
    switch (Er(e)) {
      case 0:
        return [];
      case 1:
        return [this._type.decodeValue(e, n._type)];
      default:
        throw new Error("Not an option value");
    }
  }
  get name() {
    return `opt ${this._type.name}`;
  }
  display() {
    return `opt ${this._type.display()}`;
  }
  valueToString(e) {
    return e.length === 0 ? "null" : `opt ${this._type.valueToString(e[0])}`;
  }
}
class fn extends hr {
  constructor(e = {}) {
    super(), this._fields = Object.entries(e).sort((r, n) => Mt(r[0]) - Mt(n[0]));
  }
  accept(e, r) {
    return e.visitRecord(this, this._fields, r);
  }
  tryAsTuple() {
    const e = [];
    for (let r = 0; r < this._fields.length; r++) {
      const [n, i] = this._fields[r];
      if (n !== `_${r}_`)
        return null;
      e.push(i);
    }
    return e;
  }
  covariant(e) {
    if (typeof e == "object" && this._fields.every(([r, n]) => {
      if (!e.hasOwnProperty(r))
        throw new Error(`Record is missing key "${r}".`);
      try {
        return n.covariant(e[r]);
      } catch (i) {
        throw new Error(`Invalid ${this.display()} argument: 

field ${r} -> ${i.message}`);
      }
    }))
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue(e) {
    const r = this._fields.map(([i]) => e[i]), n = nn(this._fields, r, ([, i], s) => i.encodeValue(s));
    return Me(...n);
  }
  _buildTypeTableImpl(e) {
    this._fields.forEach(([s, c]) => c.buildTypeTable(e));
    const r = Ke(
      -20
      /* IDLTypeIds.Record */
    ), n = qe(this._fields.length), i = this._fields.map(([s, c]) => Me(qe(Mt(s)), c.encodeType(e)));
    e.add(this, Me(r, n, Me(...i)));
  }
  decodeValue(e, r) {
    const n = this.checkType(r);
    if (!(n instanceof fn))
      throw new Error("Not a record type");
    const i = {};
    let s = 0, c = 0;
    for (; c < n._fields.length; ) {
      const [a, d] = n._fields[c];
      if (s >= this._fields.length) {
        d.decodeValue(e, d), c++;
        continue;
      }
      const [l, p] = this._fields[s], w = Mt(this._fields[s][0]), _ = Mt(a);
      if (w === _)
        i[l] = p.decodeValue(e, d), s++, c++;
      else if (_ > w)
        if (p instanceof jr || p instanceof o0)
          i[l] = [], s++;
        else
          throw new Error("Cannot find required field " + l);
      else
        d.decodeValue(e, d), c++;
    }
    for (const [a, d] of this._fields.slice(s))
      if (d instanceof jr || d instanceof o0)
        i[a] = [];
      else
        throw new Error("Cannot find required field " + a);
    return i;
  }
  get name() {
    return `record {${this._fields.map(([r, n]) => r + ":" + n.name).join("; ")}}`;
  }
  display() {
    return `record {${this._fields.map(([r, n]) => r + ":" + n.display()).join("; ")}}`;
  }
  valueToString(e) {
    const r = this._fields.map(([i]) => e[i]);
    return `record {${nn(this._fields, r, ([i, s], c) => i + "=" + s.valueToString(c)).join("; ")}}`;
  }
}
class _0 extends fn {
  constructor(e) {
    const r = {};
    e.forEach((n, i) => r["_" + i + "_"] = n), super(r), this._components = e;
  }
  accept(e, r) {
    return e.visitTuple(this, this._components, r);
  }
  covariant(e) {
    if (Array.isArray(e) && e.length >= this._fields.length && this._components.every((r, n) => {
      try {
        return r.covariant(e[n]);
      } catch (i) {
        throw new Error(`Invalid ${this.display()} argument: 

index ${n} -> ${i.message}`);
      }
    }))
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue(e) {
    const r = nn(this._components, e, (n, i) => n.encodeValue(i));
    return Me(...r);
  }
  decodeValue(e, r) {
    const n = this.checkType(r);
    if (!(n instanceof _0))
      throw new Error("not a tuple type");
    if (n._components.length < this._components.length)
      throw new Error("tuple mismatch");
    const i = [];
    for (const [s, c] of n._components.entries())
      s >= this._components.length ? c.decodeValue(e, c) : i.push(this._components[s].decodeValue(e, c));
    return i;
  }
  display() {
    return `record {${this._components.map((r) => r.display()).join("; ")}}`;
  }
  valueToString(e) {
    return `record {${nn(this._components, e, (n, i) => n.valueToString(i)).join("; ")}}`;
  }
}
class E0 extends hr {
  constructor(e = {}) {
    super(), this._fields = Object.entries(e).sort((r, n) => Mt(r[0]) - Mt(n[0]));
  }
  accept(e, r) {
    return e.visitVariant(this, this._fields, r);
  }
  covariant(e) {
    if (typeof e == "object" && Object.entries(e).length === 1 && this._fields.every(([r, n]) => {
      try {
        return !e.hasOwnProperty(r) || n.covariant(e[r]);
      } catch (i) {
        throw new Error(`Invalid ${this.display()} argument: 

variant ${r} -> ${i.message}`);
      }
    }))
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue(e) {
    for (let r = 0; r < this._fields.length; r++) {
      const [n, i] = this._fields[r];
      if (e.hasOwnProperty(n)) {
        const s = qe(r), c = i.encodeValue(e[n]);
        return Me(s, c);
      }
    }
    throw Error("Variant has no data: " + e);
  }
  _buildTypeTableImpl(e) {
    this._fields.forEach(([, s]) => {
      s.buildTypeTable(e);
    });
    const r = Ke(
      -21
      /* IDLTypeIds.Variant */
    ), n = qe(this._fields.length), i = this._fields.map(([s, c]) => Me(qe(Mt(s)), c.encodeType(e)));
    e.add(this, Me(r, n, ...i));
  }
  decodeValue(e, r) {
    const n = this.checkType(r);
    if (!(n instanceof E0))
      throw new Error("Not a variant type");
    const i = Number(Ze(e));
    if (i >= n._fields.length)
      throw Error("Invalid variant index: " + i);
    const [s, c] = n._fields[i];
    for (const [a, d] of this._fields)
      if (Mt(s) === Mt(a)) {
        const l = d.decodeValue(e, c);
        return { [a]: l };
      }
    throw new Error("Cannot find field hash " + s);
  }
  get name() {
    return `variant {${this._fields.map(([r, n]) => r + ":" + n.name).join("; ")}}`;
  }
  display() {
    return `variant {${this._fields.map(([r, n]) => r + (n.name === "null" ? "" : `:${n.display()}`)).join("; ")}}`;
  }
  valueToString(e) {
    for (const [r, n] of this._fields)
      if (e.hasOwnProperty(r)) {
        const i = n.valueToString(e[r]);
        return i === "null" ? `variant {${r}}` : `variant {${r}=${i}}`;
      }
    throw new Error("Variant has no data: " + e);
  }
}
class dr extends hr {
  constructor() {
    super(...arguments), this._id = dr._counter++, this._type = void 0;
  }
  accept(e, r) {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    return e.visitRec(this, this._type, r);
  }
  fill(e) {
    this._type = e;
  }
  getType() {
    return this._type;
  }
  covariant(e) {
    if (this._type && this._type.covariant(e))
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue(e) {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    return this._type.encodeValue(e);
  }
  _buildTypeTableImpl(e) {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    e.add(this, new Uint8Array([])), this._type.buildTypeTable(e), e.merge(this, this._type.name);
  }
  decodeValue(e, r) {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    return this._type.decodeValue(e, r);
  }
  get name() {
    return `rec_${this._id}`;
  }
  display() {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    return `μ${this.name}.${this._type.name}`;
  }
  valueToString(e) {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    return this._type.valueToString(e);
  }
}
dr._counter = 0;
function ds(t) {
  if (Er(t) !== 1)
    throw new Error("Cannot decode principal");
  const r = Number(Ze(t));
  return Ee.fromUint8Array(new Uint8Array(_r(t, r)));
}
class Po extends gt {
  accept(e, r) {
    return e.visitPrincipal(this, r);
  }
  covariant(e) {
    if (e && e._isPrincipal)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue(e) {
    const r = e.toUint8Array(), n = qe(r.byteLength);
    return Me(new Uint8Array([1]), n, r);
  }
  encodeType() {
    return Ke(
      -24
      /* IDLTypeIds.Principal */
    );
  }
  decodeValue(e, r) {
    return this.checkType(r), ds(e);
  }
  get name() {
    return "principal";
  }
  valueToString(e) {
    return `${this.name} "${e.toText()}"`;
  }
}
class xs extends hr {
  constructor(e, r, n = []) {
    super(), this.argTypes = e, this.retTypes = r, this.annotations = n;
  }
  static argsToString(e, r) {
    if (e.length !== r.length)
      throw new Error("arity mismatch");
    return "(" + e.map((n, i) => n.valueToString(r[i])).join(", ") + ")";
  }
  accept(e, r) {
    return e.visitFunc(this, r);
  }
  covariant(e) {
    if (Array.isArray(e) && e.length === 2 && e[0] && e[0]._isPrincipal && typeof e[1] == "string")
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue([e, r]) {
    const n = e.toUint8Array(), i = qe(n.byteLength), s = Me(new Uint8Array([1]), i, n), c = new TextEncoder().encode(r), a = qe(c.byteLength);
    return Me(new Uint8Array([1]), s, a, c);
  }
  _buildTypeTableImpl(e) {
    this.argTypes.forEach((l) => l.buildTypeTable(e)), this.retTypes.forEach((l) => l.buildTypeTable(e));
    const r = Ke(
      -22
      /* IDLTypeIds.Func */
    ), n = qe(this.argTypes.length), i = Me(...this.argTypes.map((l) => l.encodeType(e))), s = qe(this.retTypes.length), c = Me(...this.retTypes.map((l) => l.encodeType(e))), a = qe(this.annotations.length), d = Me(...this.annotations.map((l) => this.encodeAnnotation(l)));
    e.add(this, Me(r, n, i, s, c, a, d));
  }
  decodeValue(e) {
    if (Er(e) !== 1)
      throw new Error("Cannot decode function reference");
    const n = ds(e), i = Number(Ze(e)), s = _r(e, i), a = new TextDecoder("utf8", { fatal: !0 }).decode(s);
    return [n, a];
  }
  get name() {
    const e = this.argTypes.map((i) => i.name).join(", "), r = this.retTypes.map((i) => i.name).join(", "), n = " " + this.annotations.join(" ");
    return `(${e}) -> (${r})${n}`;
  }
  valueToString([e, r]) {
    return `func "${e.toText()}".${r}`;
  }
  display() {
    const e = this.argTypes.map((i) => i.display()).join(", "), r = this.retTypes.map((i) => i.display()).join(", "), n = " " + this.annotations.join(" ");
    return `(${e}) → (${r})${n}`;
  }
  encodeAnnotation(e) {
    if (e === "query")
      return new Uint8Array([1]);
    if (e === "oneway")
      return new Uint8Array([2]);
    if (e === "composite_query")
      return new Uint8Array([3]);
    throw new Error("Illegal function annotation");
  }
}
class Do extends hr {
  constructor(e) {
    super(), this._fields = Object.entries(e).sort((r, n) => r[0] < n[0] ? -1 : r[0] > n[0] ? 1 : 0);
  }
  accept(e, r) {
    return e.visitService(this, r);
  }
  covariant(e) {
    if (e && e._isPrincipal)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${He(e)}`);
  }
  encodeValue(e) {
    const r = e.toUint8Array(), n = qe(r.length);
    return Me(new Uint8Array([1]), n, r);
  }
  _buildTypeTableImpl(e) {
    this._fields.forEach(([s, c]) => c.buildTypeTable(e));
    const r = Ke(
      -23
      /* IDLTypeIds.Service */
    ), n = qe(this._fields.length), i = this._fields.map(([s, c]) => {
      const a = new TextEncoder().encode(s), d = qe(a.length);
      return Me(d, a, c.encodeType(e));
    });
    e.add(this, Me(r, n, ...i));
  }
  decodeValue(e) {
    return ds(e);
  }
  get name() {
    return `service {${this._fields.map(([r, n]) => r + ":" + n.name).join("; ")}}`;
  }
  valueToString(e) {
    return `service "${e.toText()}"`;
  }
}
function He(t) {
  const e = JSON.stringify(t, (r, n) => typeof n == "bigint" ? `BigInt(${n})` : n);
  return e && e.length > qs ? e.substring(0, qs - 3) + "..." : e;
}
function Gi(t, e) {
  if (e.length < t.length)
    throw Error("Wrong number of message arguments");
  const r = new Bf();
  t.forEach((d) => d.buildTypeTable(r));
  const n = new TextEncoder().encode(In), i = r.encode(), s = qe(e.length), c = Me(...t.map((d) => d.encodeType(r))), a = Me(...nn(t, e, (d, l) => {
    try {
      d.covariant(l);
    } catch (p) {
      throw new Error(p.message + `

`);
    }
    return d.encodeValue(l);
  }));
  return Me(n, i, s, c, a);
}
function zo(t, e) {
  const r = new Hr(e);
  if (e.byteLength < In.length)
    throw new Error("Message length smaller than magic number");
  const n = _r(r, In.length), i = new TextDecoder().decode(n);
  if (i !== In)
    throw new Error("Wrong magic number: " + JSON.stringify(i));
  function s(m) {
    const h = [], E = Number(Ze(m));
    for (let B = 0; B < E; B++) {
      const C = Number(Qt(m));
      switch (C) {
        case -18:
        case -19: {
          const O = Number(Qt(m));
          h.push([C, O]);
          break;
        }
        case -20:
        case -21: {
          const O = [];
          let S = Number(Ze(m)), k;
          for (; S--; ) {
            const P = Number(Ze(m));
            if (P >= Math.pow(2, 32))
              throw new Error("field id out of 32-bit range");
            if (typeof k == "number" && k >= P)
              throw new Error("field id collision or not sorted");
            k = P;
            const H = Number(Qt(m));
            O.push([P, H]);
          }
          h.push([C, O]);
          break;
        }
        case -22: {
          const O = [];
          let S = Number(Ze(m));
          for (; S--; )
            O.push(Number(Qt(m)));
          const k = [];
          let P = Number(Ze(m));
          for (; P--; )
            k.push(Number(Qt(m)));
          const H = [];
          let ie = Number(Ze(m));
          for (; ie--; )
            switch (Number(Ze(m))) {
              case 1: {
                H.push("query");
                break;
              }
              case 2: {
                H.push("oneway");
                break;
              }
              case 3: {
                H.push("composite_query");
                break;
              }
              default:
                throw new Error("unknown annotation");
            }
          h.push([C, [O, k, H]]);
          break;
        }
        case -23: {
          let O = Number(Ze(m));
          const S = [];
          for (; O--; ) {
            const k = Number(Ze(m)), P = new TextDecoder().decode(_r(m, k)), H = Qt(m);
            S.push([P, H]);
          }
          h.push([C, S]);
          break;
        }
        default:
          throw new Error("Illegal op_code: " + C);
      }
    }
    const A = [], U = Number(Ze(m));
    for (let B = 0; B < U; B++)
      A.push(Number(Qt(m)));
    return [h, A];
  }
  const [c, a] = s(r);
  if (a.length < t.length)
    throw new Error("Wrong number of return values");
  const d = c.map((m) => uc());
  function l(m) {
    if (m < -24)
      throw new Error("future value not supported");
    if (m < 0)
      switch (m) {
        case -1:
          return Ho;
        case -2:
          return $o;
        case -3:
          return Wo;
        case -4:
          return Go;
        case -5:
          return Jo;
        case -6:
          return ec;
        case -7:
          return tc;
        case -8:
          return rc;
        case -9:
          return Yo;
        case -10:
          return Zo;
        case -11:
          return Qo;
        case -12:
          return Xo;
        case -13:
          return Lo;
        case -14:
          return Ko;
        case -15:
          return Vo;
        case -16:
          return qo;
        case -17:
          return jo;
        case -24:
          return nc;
        default:
          throw new Error("Illegal op_code: " + m);
      }
    if (m >= c.length)
      throw new Error("type index out of range");
    return d[m];
  }
  function p(m) {
    switch (m[0]) {
      case -19: {
        const h = l(m[1]);
        return sc(h);
      }
      case -18: {
        const h = l(m[1]);
        return ac(h);
      }
      case -20: {
        const h = {};
        for (const [U, B] of m[1]) {
          const C = `_${U}_`;
          h[C] = l(B);
        }
        const E = oc(h), A = E.tryAsTuple();
        return Array.isArray(A) ? ic(...A) : E;
      }
      case -21: {
        const h = {};
        for (const [E, A] of m[1]) {
          const U = `_${E}_`;
          h[U] = l(A);
        }
        return cc(h);
      }
      case -22: {
        const [h, E, A] = m[1];
        return fc(h.map((U) => l(U)), E.map((U) => l(U)), A);
      }
      case -23: {
        const h = {}, E = m[1];
        for (const [A, U] of E) {
          let B = l(U);
          if (B instanceof dr && (B = B.getType()), !(B instanceof xs))
            throw new Error("Illegal service definition: services can only contain functions");
          h[A] = B;
        }
        return lc(h);
      }
      default:
        throw new Error("Illegal op_code: " + m[0]);
    }
  }
  c.forEach((m, h) => {
    if (m[0] === -22) {
      const E = p(m);
      d[h].fill(E);
    }
  }), c.forEach((m, h) => {
    if (m[0] !== -22) {
      const E = p(m);
      d[h].fill(E);
    }
  });
  const w = a.map((m) => l(m)), _ = t.map((m, h) => m.decodeValue(r, w[h]));
  for (let m = t.length; m < w.length; m++)
    w[m].decodeValue(r, w[m]);
  if (r.byteLength > 0)
    throw new Error("decode: Left-over bytes");
  return _;
}
const jo = new No(), qo = new o0(), Cf = new Ro(), $o = new Oo(), Ho = new Mo(), Vo = new Uo(), Go = new Io(), Wo = new ko(), Lo = new hs(32), Ko = new hs(64), Yo = new vr(8), Zo = new vr(16), Qo = new vr(32), Xo = new vr(64), Jo = new or(8), ec = new or(16), tc = new or(32), rc = new or(64), nc = new Po();
function ic(...t) {
  return new _0(t);
}
function sc(t) {
  return new m0(t);
}
function ac(t) {
  return new jr(t);
}
function oc(t) {
  return new fn(t);
}
function cc(t) {
  return new E0(t);
}
function uc() {
  return new dr();
}
function fc(t, e, r = []) {
  return new xs(t, e, r);
}
function lc(t) {
  return new Do(t);
}
const Ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Bool: $o,
  BoolClass: Oo,
  ConstructType: hr,
  Empty: jo,
  EmptyClass: No,
  FixedIntClass: vr,
  FixedNatClass: or,
  Float32: Lo,
  Float64: Ko,
  FloatClass: hs,
  Func: fc,
  FuncClass: xs,
  Int: Go,
  Int16: Zo,
  Int32: Qo,
  Int64: Xo,
  Int8: Yo,
  IntClass: Io,
  Nat: Wo,
  Nat16: ec,
  Nat32: tc,
  Nat64: rc,
  Nat8: Jo,
  NatClass: ko,
  Null: Ho,
  NullClass: Mo,
  Opt: ac,
  OptClass: jr,
  PrimitiveType: gt,
  Principal: nc,
  PrincipalClass: Po,
  Rec: uc,
  RecClass: dr,
  Record: oc,
  RecordClass: fn,
  Reserved: qo,
  ReservedClass: o0,
  Service: lc,
  ServiceClass: Do,
  Text: Vo,
  TextClass: Uo,
  Tuple: ic,
  TupleClass: _0,
  Type: b0,
  Unknown: Cf,
  UnknownClass: Ro,
  Variant: cc,
  VariantClass: E0,
  Vec: sc,
  VecClass: m0,
  Visitor: Af,
  decode: zo,
  encode: Gi
}, Symbol.toStringTag, { value: "Module" }));
var hc = {}, ln = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(t) {
  var e = cn, r = un, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = a, t.SlowBuffer = B, t.INSPECT_MAX_BYTES = 50;
  var i = 2147483647;
  t.kMaxLength = i, a.TYPED_ARRAY_SUPPORT = s(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function s() {
    try {
      var g = new Uint8Array(1), o = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(o, Uint8Array.prototype), Object.setPrototypeOf(g, o), g.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(a.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(a.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.byteOffset;
    }
  });
  function c(g) {
    if (g > i)
      throw new RangeError('The value "' + g + '" is invalid for option "size"');
    var o = new Uint8Array(g);
    return Object.setPrototypeOf(o, a.prototype), o;
  }
  function a(g, o, u) {
    if (typeof g == "number") {
      if (typeof o == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return w(g);
    }
    return d(g, o, u);
  }
  a.poolSize = 8192;
  function d(g, o, u) {
    if (typeof g == "string")
      return _(g, o);
    if (ArrayBuffer.isView(g))
      return h(g);
    if (g == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
      );
    if (K(g, ArrayBuffer) || g && K(g.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (K(g, SharedArrayBuffer) || g && K(g.buffer, SharedArrayBuffer)))
      return E(g, o, u);
    if (typeof g == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var v = g.valueOf && g.valueOf();
    if (v != null && v !== g)
      return a.from(v, o, u);
    var N = A(g);
    if (N)
      return N;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof g[Symbol.toPrimitive] == "function")
      return a.from(
        g[Symbol.toPrimitive]("string"),
        o,
        u
      );
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
    );
  }
  a.from = function(g, o, u) {
    return d(g, o, u);
  }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
  function l(g) {
    if (typeof g != "number")
      throw new TypeError('"size" argument must be of type number');
    if (g < 0)
      throw new RangeError('The value "' + g + '" is invalid for option "size"');
  }
  function p(g, o, u) {
    return l(g), g <= 0 ? c(g) : o !== void 0 ? typeof u == "string" ? c(g).fill(o, u) : c(g).fill(o) : c(g);
  }
  a.alloc = function(g, o, u) {
    return p(g, o, u);
  };
  function w(g) {
    return l(g), c(g < 0 ? 0 : U(g) | 0);
  }
  a.allocUnsafe = function(g) {
    return w(g);
  }, a.allocUnsafeSlow = function(g) {
    return w(g);
  };
  function _(g, o) {
    if ((typeof o != "string" || o === "") && (o = "utf8"), !a.isEncoding(o))
      throw new TypeError("Unknown encoding: " + o);
    var u = C(g, o) | 0, v = c(u), N = v.write(g, o);
    return N !== u && (v = v.slice(0, N)), v;
  }
  function m(g) {
    for (var o = g.length < 0 ? 0 : U(g.length) | 0, u = c(o), v = 0; v < o; v += 1)
      u[v] = g[v] & 255;
    return u;
  }
  function h(g) {
    if (K(g, Uint8Array)) {
      var o = new Uint8Array(g);
      return E(o.buffer, o.byteOffset, o.byteLength);
    }
    return m(g);
  }
  function E(g, o, u) {
    if (o < 0 || g.byteLength < o)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (g.byteLength < o + (u || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var v;
    return o === void 0 && u === void 0 ? v = new Uint8Array(g) : u === void 0 ? v = new Uint8Array(g, o) : v = new Uint8Array(g, o, u), Object.setPrototypeOf(v, a.prototype), v;
  }
  function A(g) {
    if (a.isBuffer(g)) {
      var o = U(g.length) | 0, u = c(o);
      return u.length === 0 || g.copy(u, 0, 0, o), u;
    }
    if (g.length !== void 0)
      return typeof g.length != "number" || G(g.length) ? c(0) : m(g);
    if (g.type === "Buffer" && Array.isArray(g.data))
      return m(g.data);
  }
  function U(g) {
    if (g >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return g | 0;
  }
  function B(g) {
    return +g != g && (g = 0), a.alloc(+g);
  }
  a.isBuffer = function(o) {
    return o != null && o._isBuffer === !0 && o !== a.prototype;
  }, a.compare = function(o, u) {
    if (K(o, Uint8Array) && (o = a.from(o, o.offset, o.byteLength)), K(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)), !a.isBuffer(o) || !a.isBuffer(u))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (o === u)
      return 0;
    for (var v = o.length, N = u.length, z = 0, J = Math.min(v, N); z < J; ++z)
      if (o[z] !== u[z]) {
        v = o[z], N = u[z];
        break;
      }
    return v < N ? -1 : N < v ? 1 : 0;
  }, a.isEncoding = function(o) {
    switch (String(o).toLowerCase()) {
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
  }, a.concat = function(o, u) {
    if (!Array.isArray(o))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (o.length === 0)
      return a.alloc(0);
    var v;
    if (u === void 0)
      for (u = 0, v = 0; v < o.length; ++v)
        u += o[v].length;
    var N = a.allocUnsafe(u), z = 0;
    for (v = 0; v < o.length; ++v) {
      var J = o[v];
      if (K(J, Uint8Array))
        z + J.length > N.length ? a.from(J).copy(N, z) : Uint8Array.prototype.set.call(
          N,
          J,
          z
        );
      else if (a.isBuffer(J))
        J.copy(N, z);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      z += J.length;
    }
    return N;
  };
  function C(g, o) {
    if (a.isBuffer(g))
      return g.length;
    if (ArrayBuffer.isView(g) || K(g, ArrayBuffer))
      return g.byteLength;
    if (typeof g != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof g
      );
    var u = g.length, v = arguments.length > 2 && arguments[2] === !0;
    if (!v && u === 0)
      return 0;
    for (var N = !1; ; )
      switch (o) {
        case "ascii":
        case "latin1":
        case "binary":
          return u;
        case "utf8":
        case "utf-8":
          return ae(g).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return u * 2;
        case "hex":
          return u >>> 1;
        case "base64":
          return R(g).length;
        default:
          if (N)
            return v ? -1 : ae(g).length;
          o = ("" + o).toLowerCase(), N = !0;
      }
  }
  a.byteLength = C;
  function O(g, o, u) {
    var v = !1;
    if ((o === void 0 || o < 0) && (o = 0), o > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, o >>>= 0, u <= o))
      return "";
    for (g || (g = "utf8"); ; )
      switch (g) {
        case "hex":
          return oe(this, o, u);
        case "utf8":
        case "utf-8":
          return q(this, o, u);
        case "ascii":
          return re(this, o, u);
        case "latin1":
        case "binary":
          return se(this, o, u);
        case "base64":
          return F(this, o, u);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return he(this, o, u);
        default:
          if (v)
            throw new TypeError("Unknown encoding: " + g);
          g = (g + "").toLowerCase(), v = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function S(g, o, u) {
    var v = g[o];
    g[o] = g[u], g[u] = v;
  }
  a.prototype.swap16 = function() {
    var o = this.length;
    if (o % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var u = 0; u < o; u += 2)
      S(this, u, u + 1);
    return this;
  }, a.prototype.swap32 = function() {
    var o = this.length;
    if (o % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var u = 0; u < o; u += 4)
      S(this, u, u + 3), S(this, u + 1, u + 2);
    return this;
  }, a.prototype.swap64 = function() {
    var o = this.length;
    if (o % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var u = 0; u < o; u += 8)
      S(this, u, u + 7), S(this, u + 1, u + 6), S(this, u + 2, u + 5), S(this, u + 3, u + 4);
    return this;
  }, a.prototype.toString = function() {
    var o = this.length;
    return o === 0 ? "" : arguments.length === 0 ? q(this, 0, o) : O.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(o) {
    if (!a.isBuffer(o))
      throw new TypeError("Argument must be a Buffer");
    return this === o ? !0 : a.compare(this, o) === 0;
  }, a.prototype.inspect = function() {
    var o = "", u = t.INSPECT_MAX_BYTES;
    return o = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (o += " ... "), "<Buffer " + o + ">";
  }, n && (a.prototype[n] = a.prototype.inspect), a.prototype.compare = function(o, u, v, N, z) {
    if (K(o, Uint8Array) && (o = a.from(o, o.offset, o.byteLength)), !a.isBuffer(o))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof o
      );
    if (u === void 0 && (u = 0), v === void 0 && (v = o ? o.length : 0), N === void 0 && (N = 0), z === void 0 && (z = this.length), u < 0 || v > o.length || N < 0 || z > this.length)
      throw new RangeError("out of range index");
    if (N >= z && u >= v)
      return 0;
    if (N >= z)
      return -1;
    if (u >= v)
      return 1;
    if (u >>>= 0, v >>>= 0, N >>>= 0, z >>>= 0, this === o)
      return 0;
    for (var J = z - N, ue = v - u, de = Math.min(J, ue), xe = this.slice(N, z), we = o.slice(u, v), b = 0; b < de; ++b)
      if (xe[b] !== we[b]) {
        J = xe[b], ue = we[b];
        break;
      }
    return J < ue ? -1 : ue < J ? 1 : 0;
  };
  function k(g, o, u, v, N) {
    if (g.length === 0)
      return -1;
    if (typeof u == "string" ? (v = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, G(u) && (u = N ? 0 : g.length - 1), u < 0 && (u = g.length + u), u >= g.length) {
      if (N)
        return -1;
      u = g.length - 1;
    } else if (u < 0)
      if (N)
        u = 0;
      else
        return -1;
    if (typeof o == "string" && (o = a.from(o, v)), a.isBuffer(o))
      return o.length === 0 ? -1 : P(g, o, u, v, N);
    if (typeof o == "number")
      return o = o & 255, typeof Uint8Array.prototype.indexOf == "function" ? N ? Uint8Array.prototype.indexOf.call(g, o, u) : Uint8Array.prototype.lastIndexOf.call(g, o, u) : P(g, [o], u, v, N);
    throw new TypeError("val must be string, number or Buffer");
  }
  function P(g, o, u, v, N) {
    var z = 1, J = g.length, ue = o.length;
    if (v !== void 0 && (v = String(v).toLowerCase(), v === "ucs2" || v === "ucs-2" || v === "utf16le" || v === "utf-16le")) {
      if (g.length < 2 || o.length < 2)
        return -1;
      z = 2, J /= 2, ue /= 2, u /= 2;
    }
    function de(x, I) {
      return z === 1 ? x[I] : x.readUInt16BE(I * z);
    }
    var xe;
    if (N) {
      var we = -1;
      for (xe = u; xe < J; xe++)
        if (de(g, xe) === de(o, we === -1 ? 0 : xe - we)) {
          if (we === -1 && (we = xe), xe - we + 1 === ue)
            return we * z;
        } else
          we !== -1 && (xe -= xe - we), we = -1;
    } else
      for (u + ue > J && (u = J - ue), xe = u; xe >= 0; xe--) {
        for (var b = !0, f = 0; f < ue; f++)
          if (de(g, xe + f) !== de(o, f)) {
            b = !1;
            break;
          }
        if (b)
          return xe;
      }
    return -1;
  }
  a.prototype.includes = function(o, u, v) {
    return this.indexOf(o, u, v) !== -1;
  }, a.prototype.indexOf = function(o, u, v) {
    return k(this, o, u, v, !0);
  }, a.prototype.lastIndexOf = function(o, u, v) {
    return k(this, o, u, v, !1);
  };
  function H(g, o, u, v) {
    u = Number(u) || 0;
    var N = g.length - u;
    v ? (v = Number(v), v > N && (v = N)) : v = N;
    var z = o.length;
    v > z / 2 && (v = z / 2);
    for (var J = 0; J < v; ++J) {
      var ue = parseInt(o.substr(J * 2, 2), 16);
      if (G(ue))
        return J;
      g[u + J] = ue;
    }
    return J;
  }
  function ie(g, o, u, v) {
    return D(ae(o, g.length - u), g, u, v);
  }
  function M(g, o, u, v) {
    return D(le(o), g, u, v);
  }
  function W(g, o, u, v) {
    return D(R(o), g, u, v);
  }
  function ee(g, o, u, v) {
    return D(T(o, g.length - u), g, u, v);
  }
  a.prototype.write = function(o, u, v, N) {
    if (u === void 0)
      N = "utf8", v = this.length, u = 0;
    else if (v === void 0 && typeof u == "string")
      N = u, v = this.length, u = 0;
    else if (isFinite(u))
      u = u >>> 0, isFinite(v) ? (v = v >>> 0, N === void 0 && (N = "utf8")) : (N = v, v = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var z = this.length - u;
    if ((v === void 0 || v > z) && (v = z), o.length > 0 && (v < 0 || u < 0) || u > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    N || (N = "utf8");
    for (var J = !1; ; )
      switch (N) {
        case "hex":
          return H(this, o, u, v);
        case "utf8":
        case "utf-8":
          return ie(this, o, u, v);
        case "ascii":
        case "latin1":
        case "binary":
          return M(this, o, u, v);
        case "base64":
          return W(this, o, u, v);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ee(this, o, u, v);
        default:
          if (J)
            throw new TypeError("Unknown encoding: " + N);
          N = ("" + N).toLowerCase(), J = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function F(g, o, u) {
    return o === 0 && u === g.length ? e.fromByteArray(g) : e.fromByteArray(g.slice(o, u));
  }
  function q(g, o, u) {
    u = Math.min(g.length, u);
    for (var v = [], N = o; N < u; ) {
      var z = g[N], J = null, ue = z > 239 ? 4 : z > 223 ? 3 : z > 191 ? 2 : 1;
      if (N + ue <= u) {
        var de, xe, we, b;
        switch (ue) {
          case 1:
            z < 128 && (J = z);
            break;
          case 2:
            de = g[N + 1], (de & 192) === 128 && (b = (z & 31) << 6 | de & 63, b > 127 && (J = b));
            break;
          case 3:
            de = g[N + 1], xe = g[N + 2], (de & 192) === 128 && (xe & 192) === 128 && (b = (z & 15) << 12 | (de & 63) << 6 | xe & 63, b > 2047 && (b < 55296 || b > 57343) && (J = b));
            break;
          case 4:
            de = g[N + 1], xe = g[N + 2], we = g[N + 3], (de & 192) === 128 && (xe & 192) === 128 && (we & 192) === 128 && (b = (z & 15) << 18 | (de & 63) << 12 | (xe & 63) << 6 | we & 63, b > 65535 && b < 1114112 && (J = b));
        }
      }
      J === null ? (J = 65533, ue = 1) : J > 65535 && (J -= 65536, v.push(J >>> 10 & 1023 | 55296), J = 56320 | J & 1023), v.push(J), N += ue;
    }
    return V(v);
  }
  var j = 4096;
  function V(g) {
    var o = g.length;
    if (o <= j)
      return String.fromCharCode.apply(String, g);
    for (var u = "", v = 0; v < o; )
      u += String.fromCharCode.apply(
        String,
        g.slice(v, v += j)
      );
    return u;
  }
  function re(g, o, u) {
    var v = "";
    u = Math.min(g.length, u);
    for (var N = o; N < u; ++N)
      v += String.fromCharCode(g[N] & 127);
    return v;
  }
  function se(g, o, u) {
    var v = "";
    u = Math.min(g.length, u);
    for (var N = o; N < u; ++N)
      v += String.fromCharCode(g[N]);
    return v;
  }
  function oe(g, o, u) {
    var v = g.length;
    (!o || o < 0) && (o = 0), (!u || u < 0 || u > v) && (u = v);
    for (var N = "", z = o; z < u; ++z)
      N += Q[g[z]];
    return N;
  }
  function he(g, o, u) {
    for (var v = g.slice(o, u), N = "", z = 0; z < v.length - 1; z += 2)
      N += String.fromCharCode(v[z] + v[z + 1] * 256);
    return N;
  }
  a.prototype.slice = function(o, u) {
    var v = this.length;
    o = ~~o, u = u === void 0 ? v : ~~u, o < 0 ? (o += v, o < 0 && (o = 0)) : o > v && (o = v), u < 0 ? (u += v, u < 0 && (u = 0)) : u > v && (u = v), u < o && (u = o);
    var N = this.subarray(o, u);
    return Object.setPrototypeOf(N, a.prototype), N;
  };
  function Z(g, o, u) {
    if (g % 1 !== 0 || g < 0)
      throw new RangeError("offset is not uint");
    if (g + o > u)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(o, u, v) {
    o = o >>> 0, u = u >>> 0, v || Z(o, u, this.length);
    for (var N = this[o], z = 1, J = 0; ++J < u && (z *= 256); )
      N += this[o + J] * z;
    return N;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(o, u, v) {
    o = o >>> 0, u = u >>> 0, v || Z(o, u, this.length);
    for (var N = this[o + --u], z = 1; u > 0 && (z *= 256); )
      N += this[o + --u] * z;
    return N;
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(o, u) {
    return o = o >>> 0, u || Z(o, 1, this.length), this[o];
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(o, u) {
    return o = o >>> 0, u || Z(o, 2, this.length), this[o] | this[o + 1] << 8;
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(o, u) {
    return o = o >>> 0, u || Z(o, 2, this.length), this[o] << 8 | this[o + 1];
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(o, u) {
    return o = o >>> 0, u || Z(o, 4, this.length), (this[o] | this[o + 1] << 8 | this[o + 2] << 16) + this[o + 3] * 16777216;
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(o, u) {
    return o = o >>> 0, u || Z(o, 4, this.length), this[o] * 16777216 + (this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3]);
  }, a.prototype.readIntLE = function(o, u, v) {
    o = o >>> 0, u = u >>> 0, v || Z(o, u, this.length);
    for (var N = this[o], z = 1, J = 0; ++J < u && (z *= 256); )
      N += this[o + J] * z;
    return z *= 128, N >= z && (N -= Math.pow(2, 8 * u)), N;
  }, a.prototype.readIntBE = function(o, u, v) {
    o = o >>> 0, u = u >>> 0, v || Z(o, u, this.length);
    for (var N = u, z = 1, J = this[o + --N]; N > 0 && (z *= 256); )
      J += this[o + --N] * z;
    return z *= 128, J >= z && (J -= Math.pow(2, 8 * u)), J;
  }, a.prototype.readInt8 = function(o, u) {
    return o = o >>> 0, u || Z(o, 1, this.length), this[o] & 128 ? (255 - this[o] + 1) * -1 : this[o];
  }, a.prototype.readInt16LE = function(o, u) {
    o = o >>> 0, u || Z(o, 2, this.length);
    var v = this[o] | this[o + 1] << 8;
    return v & 32768 ? v | 4294901760 : v;
  }, a.prototype.readInt16BE = function(o, u) {
    o = o >>> 0, u || Z(o, 2, this.length);
    var v = this[o + 1] | this[o] << 8;
    return v & 32768 ? v | 4294901760 : v;
  }, a.prototype.readInt32LE = function(o, u) {
    return o = o >>> 0, u || Z(o, 4, this.length), this[o] | this[o + 1] << 8 | this[o + 2] << 16 | this[o + 3] << 24;
  }, a.prototype.readInt32BE = function(o, u) {
    return o = o >>> 0, u || Z(o, 4, this.length), this[o] << 24 | this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3];
  }, a.prototype.readFloatLE = function(o, u) {
    return o = o >>> 0, u || Z(o, 4, this.length), r.read(this, o, !0, 23, 4);
  }, a.prototype.readFloatBE = function(o, u) {
    return o = o >>> 0, u || Z(o, 4, this.length), r.read(this, o, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(o, u) {
    return o = o >>> 0, u || Z(o, 8, this.length), r.read(this, o, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(o, u) {
    return o = o >>> 0, u || Z(o, 8, this.length), r.read(this, o, !1, 52, 8);
  };
  function $(g, o, u, v, N, z) {
    if (!a.isBuffer(g))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (o > N || o < z)
      throw new RangeError('"value" argument is out of bounds');
    if (u + v > g.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(o, u, v, N) {
    if (o = +o, u = u >>> 0, v = v >>> 0, !N) {
      var z = Math.pow(2, 8 * v) - 1;
      $(this, o, u, v, z, 0);
    }
    var J = 1, ue = 0;
    for (this[u] = o & 255; ++ue < v && (J *= 256); )
      this[u + ue] = o / J & 255;
    return u + v;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(o, u, v, N) {
    if (o = +o, u = u >>> 0, v = v >>> 0, !N) {
      var z = Math.pow(2, 8 * v) - 1;
      $(this, o, u, v, z, 0);
    }
    var J = v - 1, ue = 1;
    for (this[u + J] = o & 255; --J >= 0 && (ue *= 256); )
      this[u + J] = o / ue & 255;
    return u + v;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(o, u, v) {
    return o = +o, u = u >>> 0, v || $(this, o, u, 1, 255, 0), this[u] = o & 255, u + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(o, u, v) {
    return o = +o, u = u >>> 0, v || $(this, o, u, 2, 65535, 0), this[u] = o & 255, this[u + 1] = o >>> 8, u + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(o, u, v) {
    return o = +o, u = u >>> 0, v || $(this, o, u, 2, 65535, 0), this[u] = o >>> 8, this[u + 1] = o & 255, u + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(o, u, v) {
    return o = +o, u = u >>> 0, v || $(this, o, u, 4, 4294967295, 0), this[u + 3] = o >>> 24, this[u + 2] = o >>> 16, this[u + 1] = o >>> 8, this[u] = o & 255, u + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(o, u, v) {
    return o = +o, u = u >>> 0, v || $(this, o, u, 4, 4294967295, 0), this[u] = o >>> 24, this[u + 1] = o >>> 16, this[u + 2] = o >>> 8, this[u + 3] = o & 255, u + 4;
  }, a.prototype.writeIntLE = function(o, u, v, N) {
    if (o = +o, u = u >>> 0, !N) {
      var z = Math.pow(2, 8 * v - 1);
      $(this, o, u, v, z - 1, -z);
    }
    var J = 0, ue = 1, de = 0;
    for (this[u] = o & 255; ++J < v && (ue *= 256); )
      o < 0 && de === 0 && this[u + J - 1] !== 0 && (de = 1), this[u + J] = (o / ue >> 0) - de & 255;
    return u + v;
  }, a.prototype.writeIntBE = function(o, u, v, N) {
    if (o = +o, u = u >>> 0, !N) {
      var z = Math.pow(2, 8 * v - 1);
      $(this, o, u, v, z - 1, -z);
    }
    var J = v - 1, ue = 1, de = 0;
    for (this[u + J] = o & 255; --J >= 0 && (ue *= 256); )
      o < 0 && de === 0 && this[u + J + 1] !== 0 && (de = 1), this[u + J] = (o / ue >> 0) - de & 255;
    return u + v;
  }, a.prototype.writeInt8 = function(o, u, v) {
    return o = +o, u = u >>> 0, v || $(this, o, u, 1, 127, -128), o < 0 && (o = 255 + o + 1), this[u] = o & 255, u + 1;
  }, a.prototype.writeInt16LE = function(o, u, v) {
    return o = +o, u = u >>> 0, v || $(this, o, u, 2, 32767, -32768), this[u] = o & 255, this[u + 1] = o >>> 8, u + 2;
  }, a.prototype.writeInt16BE = function(o, u, v) {
    return o = +o, u = u >>> 0, v || $(this, o, u, 2, 32767, -32768), this[u] = o >>> 8, this[u + 1] = o & 255, u + 2;
  }, a.prototype.writeInt32LE = function(o, u, v) {
    return o = +o, u = u >>> 0, v || $(this, o, u, 4, 2147483647, -2147483648), this[u] = o & 255, this[u + 1] = o >>> 8, this[u + 2] = o >>> 16, this[u + 3] = o >>> 24, u + 4;
  }, a.prototype.writeInt32BE = function(o, u, v) {
    return o = +o, u = u >>> 0, v || $(this, o, u, 4, 2147483647, -2147483648), o < 0 && (o = 4294967295 + o + 1), this[u] = o >>> 24, this[u + 1] = o >>> 16, this[u + 2] = o >>> 8, this[u + 3] = o & 255, u + 4;
  };
  function X(g, o, u, v, N, z) {
    if (u + v > g.length)
      throw new RangeError("Index out of range");
    if (u < 0)
      throw new RangeError("Index out of range");
  }
  function y(g, o, u, v, N) {
    return o = +o, u = u >>> 0, N || X(g, o, u, 4), r.write(g, o, u, v, 23, 4), u + 4;
  }
  a.prototype.writeFloatLE = function(o, u, v) {
    return y(this, o, u, !0, v);
  }, a.prototype.writeFloatBE = function(o, u, v) {
    return y(this, o, u, !1, v);
  };
  function ce(g, o, u, v, N) {
    return o = +o, u = u >>> 0, N || X(g, o, u, 8), r.write(g, o, u, v, 52, 8), u + 8;
  }
  a.prototype.writeDoubleLE = function(o, u, v) {
    return ce(this, o, u, !0, v);
  }, a.prototype.writeDoubleBE = function(o, u, v) {
    return ce(this, o, u, !1, v);
  }, a.prototype.copy = function(o, u, v, N) {
    if (!a.isBuffer(o))
      throw new TypeError("argument should be a Buffer");
    if (v || (v = 0), !N && N !== 0 && (N = this.length), u >= o.length && (u = o.length), u || (u = 0), N > 0 && N < v && (N = v), N === v || o.length === 0 || this.length === 0)
      return 0;
    if (u < 0)
      throw new RangeError("targetStart out of bounds");
    if (v < 0 || v >= this.length)
      throw new RangeError("Index out of range");
    if (N < 0)
      throw new RangeError("sourceEnd out of bounds");
    N > this.length && (N = this.length), o.length - u < N - v && (N = o.length - u + v);
    var z = N - v;
    return this === o && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(u, v, N) : Uint8Array.prototype.set.call(
      o,
      this.subarray(v, N),
      u
    ), z;
  }, a.prototype.fill = function(o, u, v, N) {
    if (typeof o == "string") {
      if (typeof u == "string" ? (N = u, u = 0, v = this.length) : typeof v == "string" && (N = v, v = this.length), N !== void 0 && typeof N != "string")
        throw new TypeError("encoding must be a string");
      if (typeof N == "string" && !a.isEncoding(N))
        throw new TypeError("Unknown encoding: " + N);
      if (o.length === 1) {
        var z = o.charCodeAt(0);
        (N === "utf8" && z < 128 || N === "latin1") && (o = z);
      }
    } else
      typeof o == "number" ? o = o & 255 : typeof o == "boolean" && (o = Number(o));
    if (u < 0 || this.length < u || this.length < v)
      throw new RangeError("Out of range index");
    if (v <= u)
      return this;
    u = u >>> 0, v = v === void 0 ? this.length : v >>> 0, o || (o = 0);
    var J;
    if (typeof o == "number")
      for (J = u; J < v; ++J)
        this[J] = o;
    else {
      var ue = a.isBuffer(o) ? o : a.from(o, N), de = ue.length;
      if (de === 0)
        throw new TypeError('The value "' + o + '" is invalid for argument "value"');
      for (J = 0; J < v - u; ++J)
        this[J + u] = ue[J % de];
    }
    return this;
  };
  var fe = /[^+/0-9A-Za-z-_]/g;
  function pe(g) {
    if (g = g.split("=")[0], g = g.trim().replace(fe, ""), g.length < 2)
      return "";
    for (; g.length % 4 !== 0; )
      g = g + "=";
    return g;
  }
  function ae(g, o) {
    o = o || 1 / 0;
    for (var u, v = g.length, N = null, z = [], J = 0; J < v; ++J) {
      if (u = g.charCodeAt(J), u > 55295 && u < 57344) {
        if (!N) {
          if (u > 56319) {
            (o -= 3) > -1 && z.push(239, 191, 189);
            continue;
          } else if (J + 1 === v) {
            (o -= 3) > -1 && z.push(239, 191, 189);
            continue;
          }
          N = u;
          continue;
        }
        if (u < 56320) {
          (o -= 3) > -1 && z.push(239, 191, 189), N = u;
          continue;
        }
        u = (N - 55296 << 10 | u - 56320) + 65536;
      } else
        N && (o -= 3) > -1 && z.push(239, 191, 189);
      if (N = null, u < 128) {
        if ((o -= 1) < 0)
          break;
        z.push(u);
      } else if (u < 2048) {
        if ((o -= 2) < 0)
          break;
        z.push(
          u >> 6 | 192,
          u & 63 | 128
        );
      } else if (u < 65536) {
        if ((o -= 3) < 0)
          break;
        z.push(
          u >> 12 | 224,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else if (u < 1114112) {
        if ((o -= 4) < 0)
          break;
        z.push(
          u >> 18 | 240,
          u >> 12 & 63 | 128,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return z;
  }
  function le(g) {
    for (var o = [], u = 0; u < g.length; ++u)
      o.push(g.charCodeAt(u) & 255);
    return o;
  }
  function T(g, o) {
    for (var u, v, N, z = [], J = 0; J < g.length && !((o -= 2) < 0); ++J)
      u = g.charCodeAt(J), v = u >> 8, N = u % 256, z.push(N), z.push(v);
    return z;
  }
  function R(g) {
    return e.toByteArray(pe(g));
  }
  function D(g, o, u, v) {
    for (var N = 0; N < v && !(N + u >= o.length || N >= g.length); ++N)
      o[N + u] = g[N];
    return N;
  }
  function K(g, o) {
    return g instanceof o || g != null && g.constructor != null && g.constructor.name != null && g.constructor.name === o.name;
  }
  function G(g) {
    return g !== g;
  }
  var Q = function() {
    for (var g = "0123456789abcdef", o = new Array(256), u = 0; u < 16; ++u)
      for (var v = u * 16, N = 0; N < 16; ++N)
        o[v + N] = g[u] + g[N];
    return o;
  }();
})(ln);
var dc = { exports: {} };
(function(t) {
  (function(e) {
    var r, n = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, i = Math.ceil, s = Math.floor, c = "[BigNumber Error] ", a = c + "Number primitive has more than 15 significant digits: ", d = 1e14, l = 14, p = 9007199254740991, w = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], _ = 1e7, m = 1e9;
    function h(k) {
      var P, H, ie, M = y.prototype = { constructor: y, toString: null, valueOf: null }, W = new y(1), ee = 20, F = 4, q = -7, j = 21, V = -1e7, re = 1e7, se = !1, oe = 1, he = 0, Z = {
        prefix: "",
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ",",
        decimalSeparator: ".",
        fractionGroupSize: 0,
        fractionGroupSeparator: " ",
        // non-breaking space
        suffix: ""
      }, $ = "0123456789abcdefghijklmnopqrstuvwxyz", X = !0;
      function y(T, R) {
        var D, K, G, Q, g, o, u, v, N = this;
        if (!(N instanceof y))
          return new y(T, R);
        if (R == null) {
          if (T && T._isBigNumber === !0) {
            N.s = T.s, !T.c || T.e > re ? N.c = N.e = null : T.e < V ? N.c = [N.e = 0] : (N.e = T.e, N.c = T.c.slice());
            return;
          }
          if ((o = typeof T == "number") && T * 0 == 0) {
            if (N.s = 1 / T < 0 ? (T = -T, -1) : 1, T === ~~T) {
              for (Q = 0, g = T; g >= 10; g /= 10, Q++)
                ;
              Q > re ? N.c = N.e = null : (N.e = Q, N.c = [T]);
              return;
            }
            v = String(T);
          } else {
            if (!n.test(v = String(T)))
              return ie(N, v, o);
            N.s = v.charCodeAt(0) == 45 ? (v = v.slice(1), -1) : 1;
          }
          (Q = v.indexOf(".")) > -1 && (v = v.replace(".", "")), (g = v.search(/e/i)) > 0 ? (Q < 0 && (Q = g), Q += +v.slice(g + 1), v = v.substring(0, g)) : Q < 0 && (Q = v.length);
        } else {
          if (B(R, 2, $.length, "Base"), R == 10 && X)
            return N = new y(T), ae(N, ee + N.e + 1, F);
          if (v = String(T), o = typeof T == "number") {
            if (T * 0 != 0)
              return ie(N, v, o, R);
            if (N.s = 1 / T < 0 ? (v = v.slice(1), -1) : 1, y.DEBUG && v.replace(/^0\.0*|\./, "").length > 15)
              throw Error(a + T);
          } else
            N.s = v.charCodeAt(0) === 45 ? (v = v.slice(1), -1) : 1;
          for (D = $.slice(0, R), Q = g = 0, u = v.length; g < u; g++)
            if (D.indexOf(K = v.charAt(g)) < 0) {
              if (K == ".") {
                if (g > Q) {
                  Q = u;
                  continue;
                }
              } else if (!G && (v == v.toUpperCase() && (v = v.toLowerCase()) || v == v.toLowerCase() && (v = v.toUpperCase()))) {
                G = !0, g = -1, Q = 0;
                continue;
              }
              return ie(N, String(T), o, R);
            }
          o = !1, v = H(v, R, 10, N.s), (Q = v.indexOf(".")) > -1 ? v = v.replace(".", "") : Q = v.length;
        }
        for (g = 0; v.charCodeAt(g) === 48; g++)
          ;
        for (u = v.length; v.charCodeAt(--u) === 48; )
          ;
        if (v = v.slice(g, ++u)) {
          if (u -= g, o && y.DEBUG && u > 15 && (T > p || T !== s(T)))
            throw Error(a + N.s * T);
          if ((Q = Q - g - 1) > re)
            N.c = N.e = null;
          else if (Q < V)
            N.c = [N.e = 0];
          else {
            if (N.e = Q, N.c = [], g = (Q + 1) % l, Q < 0 && (g += l), g < u) {
              for (g && N.c.push(+v.slice(0, g)), u -= l; g < u; )
                N.c.push(+v.slice(g, g += l));
              g = l - (v = v.slice(g)).length;
            } else
              g -= u;
            for (; g--; v += "0")
              ;
            N.c.push(+v);
          }
        } else
          N.c = [N.e = 0];
      }
      y.clone = h, y.ROUND_UP = 0, y.ROUND_DOWN = 1, y.ROUND_CEIL = 2, y.ROUND_FLOOR = 3, y.ROUND_HALF_UP = 4, y.ROUND_HALF_DOWN = 5, y.ROUND_HALF_EVEN = 6, y.ROUND_HALF_CEIL = 7, y.ROUND_HALF_FLOOR = 8, y.EUCLID = 9, y.config = y.set = function(T) {
        var R, D;
        if (T != null)
          if (typeof T == "object") {
            if (T.hasOwnProperty(R = "DECIMAL_PLACES") && (D = T[R], B(D, 0, m, R), ee = D), T.hasOwnProperty(R = "ROUNDING_MODE") && (D = T[R], B(D, 0, 8, R), F = D), T.hasOwnProperty(R = "EXPONENTIAL_AT") && (D = T[R], D && D.pop ? (B(D[0], -m, 0, R), B(D[1], 0, m, R), q = D[0], j = D[1]) : (B(D, -m, m, R), q = -(j = D < 0 ? -D : D))), T.hasOwnProperty(R = "RANGE"))
              if (D = T[R], D && D.pop)
                B(D[0], -m, -1, R), B(D[1], 1, m, R), V = D[0], re = D[1];
              else if (B(D, -m, m, R), D)
                V = -(re = D < 0 ? -D : D);
              else
                throw Error(c + R + " cannot be zero: " + D);
            if (T.hasOwnProperty(R = "CRYPTO"))
              if (D = T[R], D === !!D)
                if (D)
                  if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                    se = D;
                  else
                    throw se = !D, Error(c + "crypto unavailable");
                else
                  se = D;
              else
                throw Error(c + R + " not true or false: " + D);
            if (T.hasOwnProperty(R = "MODULO_MODE") && (D = T[R], B(D, 0, 9, R), oe = D), T.hasOwnProperty(R = "POW_PRECISION") && (D = T[R], B(D, 0, m, R), he = D), T.hasOwnProperty(R = "FORMAT"))
              if (D = T[R], typeof D == "object")
                Z = D;
              else
                throw Error(c + R + " not an object: " + D);
            if (T.hasOwnProperty(R = "ALPHABET"))
              if (D = T[R], typeof D == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(D))
                X = D.slice(0, 10) == "0123456789", $ = D;
              else
                throw Error(c + R + " invalid: " + D);
          } else
            throw Error(c + "Object expected: " + T);
        return {
          DECIMAL_PLACES: ee,
          ROUNDING_MODE: F,
          EXPONENTIAL_AT: [q, j],
          RANGE: [V, re],
          CRYPTO: se,
          MODULO_MODE: oe,
          POW_PRECISION: he,
          FORMAT: Z,
          ALPHABET: $
        };
      }, y.isBigNumber = function(T) {
        if (!T || T._isBigNumber !== !0)
          return !1;
        if (!y.DEBUG)
          return !0;
        var R, D, K = T.c, G = T.e, Q = T.s;
        e:
          if ({}.toString.call(K) == "[object Array]") {
            if ((Q === 1 || Q === -1) && G >= -m && G <= m && G === s(G)) {
              if (K[0] === 0) {
                if (G === 0 && K.length === 1)
                  return !0;
                break e;
              }
              if (R = (G + 1) % l, R < 1 && (R += l), String(K[0]).length == R) {
                for (R = 0; R < K.length; R++)
                  if (D = K[R], D < 0 || D >= d || D !== s(D))
                    break e;
                if (D !== 0)
                  return !0;
              }
            }
          } else if (K === null && G === null && (Q === null || Q === 1 || Q === -1))
            return !0;
        throw Error(c + "Invalid BigNumber: " + T);
      }, y.maximum = y.max = function() {
        return fe(arguments, -1);
      }, y.minimum = y.min = function() {
        return fe(arguments, 1);
      }, y.random = function() {
        var T = 9007199254740992, R = Math.random() * T & 2097151 ? function() {
          return s(Math.random() * T);
        } : function() {
          return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
        };
        return function(D) {
          var K, G, Q, g, o, u = 0, v = [], N = new y(W);
          if (D == null ? D = ee : B(D, 0, m), g = i(D / l), se)
            if (crypto.getRandomValues) {
              for (K = crypto.getRandomValues(new Uint32Array(g *= 2)); u < g; )
                o = K[u] * 131072 + (K[u + 1] >>> 11), o >= 9e15 ? (G = crypto.getRandomValues(new Uint32Array(2)), K[u] = G[0], K[u + 1] = G[1]) : (v.push(o % 1e14), u += 2);
              u = g / 2;
            } else if (crypto.randomBytes) {
              for (K = crypto.randomBytes(g *= 7); u < g; )
                o = (K[u] & 31) * 281474976710656 + K[u + 1] * 1099511627776 + K[u + 2] * 4294967296 + K[u + 3] * 16777216 + (K[u + 4] << 16) + (K[u + 5] << 8) + K[u + 6], o >= 9e15 ? crypto.randomBytes(7).copy(K, u) : (v.push(o % 1e14), u += 7);
              u = g / 7;
            } else
              throw se = !1, Error(c + "crypto unavailable");
          if (!se)
            for (; u < g; )
              o = R(), o < 9e15 && (v[u++] = o % 1e14);
          for (g = v[--u], D %= l, g && D && (o = w[l - D], v[u] = s(g / o) * o); v[u] === 0; v.pop(), u--)
            ;
          if (u < 0)
            v = [Q = 0];
          else {
            for (Q = -1; v[0] === 0; v.splice(0, 1), Q -= l)
              ;
            for (u = 1, o = v[0]; o >= 10; o /= 10, u++)
              ;
            u < l && (Q -= l - u);
          }
          return N.e = Q, N.c = v, N;
        };
      }(), y.sum = function() {
        for (var T = 1, R = arguments, D = new y(R[0]); T < R.length; )
          D = D.plus(R[T++]);
        return D;
      }, H = function() {
        var T = "0123456789";
        function R(D, K, G, Q) {
          for (var g, o = [0], u, v = 0, N = D.length; v < N; ) {
            for (u = o.length; u--; o[u] *= K)
              ;
            for (o[0] += Q.indexOf(D.charAt(v++)), g = 0; g < o.length; g++)
              o[g] > G - 1 && (o[g + 1] == null && (o[g + 1] = 0), o[g + 1] += o[g] / G | 0, o[g] %= G);
          }
          return o.reverse();
        }
        return function(D, K, G, Q, g) {
          var o, u, v, N, z, J, ue, de, xe = D.indexOf("."), we = ee, b = F;
          for (xe >= 0 && (N = he, he = 0, D = D.replace(".", ""), de = new y(K), J = de.pow(D.length - xe), he = N, de.c = R(
            S(A(J.c), J.e, "0"),
            10,
            G,
            T
          ), de.e = de.c.length), ue = R(D, K, G, g ? (o = $, T) : (o = T, $)), v = N = ue.length; ue[--N] == 0; ue.pop())
            ;
          if (!ue[0])
            return o.charAt(0);
          if (xe < 0 ? --v : (J.c = ue, J.e = v, J.s = Q, J = P(J, de, we, b, G), ue = J.c, z = J.r, v = J.e), u = v + we + 1, xe = ue[u], N = G / 2, z = z || u < 0 || ue[u + 1] != null, z = b < 4 ? (xe != null || z) && (b == 0 || b == (J.s < 0 ? 3 : 2)) : xe > N || xe == N && (b == 4 || z || b == 6 && ue[u - 1] & 1 || b == (J.s < 0 ? 8 : 7)), u < 1 || !ue[0])
            D = z ? S(o.charAt(1), -we, o.charAt(0)) : o.charAt(0);
          else {
            if (ue.length = u, z)
              for (--G; ++ue[--u] > G; )
                ue[u] = 0, u || (++v, ue = [1].concat(ue));
            for (N = ue.length; !ue[--N]; )
              ;
            for (xe = 0, D = ""; xe <= N; D += o.charAt(ue[xe++]))
              ;
            D = S(D, v, o.charAt(0));
          }
          return D;
        };
      }(), P = function() {
        function T(K, G, Q) {
          var g, o, u, v, N = 0, z = K.length, J = G % _, ue = G / _ | 0;
          for (K = K.slice(); z--; )
            u = K[z] % _, v = K[z] / _ | 0, g = ue * u + v * J, o = J * u + g % _ * _ + N, N = (o / Q | 0) + (g / _ | 0) + ue * v, K[z] = o % Q;
          return N && (K = [N].concat(K)), K;
        }
        function R(K, G, Q, g) {
          var o, u;
          if (Q != g)
            u = Q > g ? 1 : -1;
          else
            for (o = u = 0; o < Q; o++)
              if (K[o] != G[o]) {
                u = K[o] > G[o] ? 1 : -1;
                break;
              }
          return u;
        }
        function D(K, G, Q, g) {
          for (var o = 0; Q--; )
            K[Q] -= o, o = K[Q] < G[Q] ? 1 : 0, K[Q] = o * g + K[Q] - G[Q];
          for (; !K[0] && K.length > 1; K.splice(0, 1))
            ;
        }
        return function(K, G, Q, g, o) {
          var u, v, N, z, J, ue, de, xe, we, b, f, x, I, Y, te, ne, be, Be = K.s == G.s ? 1 : -1, _e = K.c, me = G.c;
          if (!_e || !_e[0] || !me || !me[0])
            return new y(
              // Return NaN if either NaN, or both Infinity or 0.
              !K.s || !G.s || (_e ? me && _e[0] == me[0] : !me) ? NaN : (
                // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                _e && _e[0] == 0 || !me ? Be * 0 : Be / 0
              )
            );
          for (xe = new y(Be), we = xe.c = [], v = K.e - G.e, Be = Q + v + 1, o || (o = d, v = E(K.e / l) - E(G.e / l), Be = Be / l | 0), N = 0; me[N] == (_e[N] || 0); N++)
            ;
          if (me[N] > (_e[N] || 0) && v--, Be < 0)
            we.push(1), z = !0;
          else {
            for (Y = _e.length, ne = me.length, N = 0, Be += 2, J = s(o / (me[0] + 1)), J > 1 && (me = T(me, J, o), _e = T(_e, J, o), ne = me.length, Y = _e.length), I = ne, b = _e.slice(0, ne), f = b.length; f < ne; b[f++] = 0)
              ;
            be = me.slice(), be = [0].concat(be), te = me[0], me[1] >= o / 2 && te++;
            do {
              if (J = 0, u = R(me, b, ne, f), u < 0) {
                if (x = b[0], ne != f && (x = x * o + (b[1] || 0)), J = s(x / te), J > 1)
                  for (J >= o && (J = o - 1), ue = T(me, J, o), de = ue.length, f = b.length; R(ue, b, de, f) == 1; )
                    J--, D(ue, ne < de ? be : me, de, o), de = ue.length, u = 1;
                else
                  J == 0 && (u = J = 1), ue = me.slice(), de = ue.length;
                if (de < f && (ue = [0].concat(ue)), D(b, ue, f, o), f = b.length, u == -1)
                  for (; R(me, b, ne, f) < 1; )
                    J++, D(b, ne < f ? be : me, f, o), f = b.length;
              } else
                u === 0 && (J++, b = [0]);
              we[N++] = J, b[0] ? b[f++] = _e[I] || 0 : (b = [_e[I]], f = 1);
            } while ((I++ < Y || b[0] != null) && Be--);
            z = b[0] != null, we[0] || we.splice(0, 1);
          }
          if (o == d) {
            for (N = 1, Be = we[0]; Be >= 10; Be /= 10, N++)
              ;
            ae(xe, Q + (xe.e = N + v * l - 1) + 1, g, z);
          } else
            xe.e = v, xe.r = +z;
          return xe;
        };
      }();
      function ce(T, R, D, K) {
        var G, Q, g, o, u;
        if (D == null ? D = F : B(D, 0, 8), !T.c)
          return T.toString();
        if (G = T.c[0], g = T.e, R == null)
          u = A(T.c), u = K == 1 || K == 2 && (g <= q || g >= j) ? O(u, g) : S(u, g, "0");
        else if (T = ae(new y(T), R, D), Q = T.e, u = A(T.c), o = u.length, K == 1 || K == 2 && (R <= Q || Q <= q)) {
          for (; o < R; u += "0", o++)
            ;
          u = O(u, Q);
        } else if (R -= g, u = S(u, Q, "0"), Q + 1 > o) {
          if (--R > 0)
            for (u += "."; R--; u += "0")
              ;
        } else if (R += Q - o, R > 0)
          for (Q + 1 == o && (u += "."); R--; u += "0")
            ;
        return T.s < 0 && G ? "-" + u : u;
      }
      function fe(T, R) {
        for (var D, K, G = 1, Q = new y(T[0]); G < T.length; G++)
          K = new y(T[G]), (!K.s || (D = U(Q, K)) === R || D === 0 && Q.s === R) && (Q = K);
        return Q;
      }
      function pe(T, R, D) {
        for (var K = 1, G = R.length; !R[--G]; R.pop())
          ;
        for (G = R[0]; G >= 10; G /= 10, K++)
          ;
        return (D = K + D * l - 1) > re ? T.c = T.e = null : D < V ? T.c = [T.e = 0] : (T.e = D, T.c = R), T;
      }
      ie = function() {
        var T = /^(-?)0([xbo])(?=\w[\w.]*$)/i, R = /^([^.]+)\.$/, D = /^\.([^.]+)$/, K = /^-?(Infinity|NaN)$/, G = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(Q, g, o, u) {
          var v, N = o ? g : g.replace(G, "");
          if (K.test(N))
            Q.s = isNaN(N) ? null : N < 0 ? -1 : 1;
          else {
            if (!o && (N = N.replace(T, function(z, J, ue) {
              return v = (ue = ue.toLowerCase()) == "x" ? 16 : ue == "b" ? 2 : 8, !u || u == v ? J : z;
            }), u && (v = u, N = N.replace(R, "$1").replace(D, "0.$1")), g != N))
              return new y(N, v);
            if (y.DEBUG)
              throw Error(c + "Not a" + (u ? " base " + u : "") + " number: " + g);
            Q.s = null;
          }
          Q.c = Q.e = null;
        };
      }();
      function ae(T, R, D, K) {
        var G, Q, g, o, u, v, N, z = T.c, J = w;
        if (z) {
          e: {
            for (G = 1, o = z[0]; o >= 10; o /= 10, G++)
              ;
            if (Q = R - G, Q < 0)
              Q += l, g = R, u = z[v = 0], N = s(u / J[G - g - 1] % 10);
            else if (v = i((Q + 1) / l), v >= z.length)
              if (K) {
                for (; z.length <= v; z.push(0))
                  ;
                u = N = 0, G = 1, Q %= l, g = Q - l + 1;
              } else
                break e;
            else {
              for (u = o = z[v], G = 1; o >= 10; o /= 10, G++)
                ;
              Q %= l, g = Q - l + G, N = g < 0 ? 0 : s(u / J[G - g - 1] % 10);
            }
            if (K = K || R < 0 || // Are there any non-zero digits after the rounding digit?
            // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
            // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
            z[v + 1] != null || (g < 0 ? u : u % J[G - g - 1]), K = D < 4 ? (N || K) && (D == 0 || D == (T.s < 0 ? 3 : 2)) : N > 5 || N == 5 && (D == 4 || K || D == 6 && // Check whether the digit to the left of the rounding digit is odd.
            (Q > 0 ? g > 0 ? u / J[G - g] : 0 : z[v - 1]) % 10 & 1 || D == (T.s < 0 ? 8 : 7)), R < 1 || !z[0])
              return z.length = 0, K ? (R -= T.e + 1, z[0] = J[(l - R % l) % l], T.e = -R || 0) : z[0] = T.e = 0, T;
            if (Q == 0 ? (z.length = v, o = 1, v--) : (z.length = v + 1, o = J[l - Q], z[v] = g > 0 ? s(u / J[G - g] % J[g]) * o : 0), K)
              for (; ; )
                if (v == 0) {
                  for (Q = 1, g = z[0]; g >= 10; g /= 10, Q++)
                    ;
                  for (g = z[0] += o, o = 1; g >= 10; g /= 10, o++)
                    ;
                  Q != o && (T.e++, z[0] == d && (z[0] = 1));
                  break;
                } else {
                  if (z[v] += o, z[v] != d)
                    break;
                  z[v--] = 0, o = 1;
                }
            for (Q = z.length; z[--Q] === 0; z.pop())
              ;
          }
          T.e > re ? T.c = T.e = null : T.e < V && (T.c = [T.e = 0]);
        }
        return T;
      }
      function le(T) {
        var R, D = T.e;
        return D === null ? T.toString() : (R = A(T.c), R = D <= q || D >= j ? O(R, D) : S(R, D, "0"), T.s < 0 ? "-" + R : R);
      }
      return M.absoluteValue = M.abs = function() {
        var T = new y(this);
        return T.s < 0 && (T.s = 1), T;
      }, M.comparedTo = function(T, R) {
        return U(this, new y(T, R));
      }, M.decimalPlaces = M.dp = function(T, R) {
        var D, K, G, Q = this;
        if (T != null)
          return B(T, 0, m), R == null ? R = F : B(R, 0, 8), ae(new y(Q), T + Q.e + 1, R);
        if (!(D = Q.c))
          return null;
        if (K = ((G = D.length - 1) - E(this.e / l)) * l, G = D[G])
          for (; G % 10 == 0; G /= 10, K--)
            ;
        return K < 0 && (K = 0), K;
      }, M.dividedBy = M.div = function(T, R) {
        return P(this, new y(T, R), ee, F);
      }, M.dividedToIntegerBy = M.idiv = function(T, R) {
        return P(this, new y(T, R), 0, 1);
      }, M.exponentiatedBy = M.pow = function(T, R) {
        var D, K, G, Q, g, o, u, v, N, z = this;
        if (T = new y(T), T.c && !T.isInteger())
          throw Error(c + "Exponent not an integer: " + le(T));
        if (R != null && (R = new y(R)), o = T.e > 14, !z.c || !z.c[0] || z.c[0] == 1 && !z.e && z.c.length == 1 || !T.c || !T.c[0])
          return N = new y(Math.pow(+le(z), o ? T.s * (2 - C(T)) : +le(T))), R ? N.mod(R) : N;
        if (u = T.s < 0, R) {
          if (R.c ? !R.c[0] : !R.s)
            return new y(NaN);
          K = !u && z.isInteger() && R.isInteger(), K && (z = z.mod(R));
        } else {
          if (T.e > 9 && (z.e > 0 || z.e < -1 || (z.e == 0 ? z.c[0] > 1 || o && z.c[1] >= 24e7 : z.c[0] < 8e13 || o && z.c[0] <= 9999975e7)))
            return Q = z.s < 0 && C(T) ? -0 : 0, z.e > -1 && (Q = 1 / Q), new y(u ? 1 / Q : Q);
          he && (Q = i(he / l + 2));
        }
        for (o ? (D = new y(0.5), u && (T.s = 1), v = C(T)) : (G = Math.abs(+le(T)), v = G % 2), N = new y(W); ; ) {
          if (v) {
            if (N = N.times(z), !N.c)
              break;
            Q ? N.c.length > Q && (N.c.length = Q) : K && (N = N.mod(R));
          }
          if (G) {
            if (G = s(G / 2), G === 0)
              break;
            v = G % 2;
          } else if (T = T.times(D), ae(T, T.e + 1, 1), T.e > 14)
            v = C(T);
          else {
            if (G = +le(T), G === 0)
              break;
            v = G % 2;
          }
          z = z.times(z), Q ? z.c && z.c.length > Q && (z.c.length = Q) : K && (z = z.mod(R));
        }
        return K ? N : (u && (N = W.div(N)), R ? N.mod(R) : Q ? ae(N, he, F, g) : N);
      }, M.integerValue = function(T) {
        var R = new y(this);
        return T == null ? T = F : B(T, 0, 8), ae(R, R.e + 1, T);
      }, M.isEqualTo = M.eq = function(T, R) {
        return U(this, new y(T, R)) === 0;
      }, M.isFinite = function() {
        return !!this.c;
      }, M.isGreaterThan = M.gt = function(T, R) {
        return U(this, new y(T, R)) > 0;
      }, M.isGreaterThanOrEqualTo = M.gte = function(T, R) {
        return (R = U(this, new y(T, R))) === 1 || R === 0;
      }, M.isInteger = function() {
        return !!this.c && E(this.e / l) > this.c.length - 2;
      }, M.isLessThan = M.lt = function(T, R) {
        return U(this, new y(T, R)) < 0;
      }, M.isLessThanOrEqualTo = M.lte = function(T, R) {
        return (R = U(this, new y(T, R))) === -1 || R === 0;
      }, M.isNaN = function() {
        return !this.s;
      }, M.isNegative = function() {
        return this.s < 0;
      }, M.isPositive = function() {
        return this.s > 0;
      }, M.isZero = function() {
        return !!this.c && this.c[0] == 0;
      }, M.minus = function(T, R) {
        var D, K, G, Q, g = this, o = g.s;
        if (T = new y(T, R), R = T.s, !o || !R)
          return new y(NaN);
        if (o != R)
          return T.s = -R, g.plus(T);
        var u = g.e / l, v = T.e / l, N = g.c, z = T.c;
        if (!u || !v) {
          if (!N || !z)
            return N ? (T.s = -R, T) : new y(z ? g : NaN);
          if (!N[0] || !z[0])
            return z[0] ? (T.s = -R, T) : new y(N[0] ? g : (
              // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
              F == 3 ? -0 : 0
            ));
        }
        if (u = E(u), v = E(v), N = N.slice(), o = u - v) {
          for ((Q = o < 0) ? (o = -o, G = N) : (v = u, G = z), G.reverse(), R = o; R--; G.push(0))
            ;
          G.reverse();
        } else
          for (K = (Q = (o = N.length) < (R = z.length)) ? o : R, o = R = 0; R < K; R++)
            if (N[R] != z[R]) {
              Q = N[R] < z[R];
              break;
            }
        if (Q && (G = N, N = z, z = G, T.s = -T.s), R = (K = z.length) - (D = N.length), R > 0)
          for (; R--; N[D++] = 0)
            ;
        for (R = d - 1; K > o; ) {
          if (N[--K] < z[K]) {
            for (D = K; D && !N[--D]; N[D] = R)
              ;
            --N[D], N[K] += d;
          }
          N[K] -= z[K];
        }
        for (; N[0] == 0; N.splice(0, 1), --v)
          ;
        return N[0] ? pe(T, N, v) : (T.s = F == 3 ? -1 : 1, T.c = [T.e = 0], T);
      }, M.modulo = M.mod = function(T, R) {
        var D, K, G = this;
        return T = new y(T, R), !G.c || !T.s || T.c && !T.c[0] ? new y(NaN) : !T.c || G.c && !G.c[0] ? new y(G) : (oe == 9 ? (K = T.s, T.s = 1, D = P(G, T, 0, 3), T.s = K, D.s *= K) : D = P(G, T, 0, oe), T = G.minus(D.times(T)), !T.c[0] && oe == 1 && (T.s = G.s), T);
      }, M.multipliedBy = M.times = function(T, R) {
        var D, K, G, Q, g, o, u, v, N, z, J, ue, de, xe, we, b = this, f = b.c, x = (T = new y(T, R)).c;
        if (!f || !x || !f[0] || !x[0])
          return !b.s || !T.s || f && !f[0] && !x || x && !x[0] && !f ? T.c = T.e = T.s = null : (T.s *= b.s, !f || !x ? T.c = T.e = null : (T.c = [0], T.e = 0)), T;
        for (K = E(b.e / l) + E(T.e / l), T.s *= b.s, u = f.length, z = x.length, u < z && (de = f, f = x, x = de, G = u, u = z, z = G), G = u + z, de = []; G--; de.push(0))
          ;
        for (xe = d, we = _, G = z; --G >= 0; ) {
          for (D = 0, J = x[G] % we, ue = x[G] / we | 0, g = u, Q = G + g; Q > G; )
            v = f[--g] % we, N = f[g] / we | 0, o = ue * v + N * J, v = J * v + o % we * we + de[Q] + D, D = (v / xe | 0) + (o / we | 0) + ue * N, de[Q--] = v % xe;
          de[Q] = D;
        }
        return D ? ++K : de.splice(0, 1), pe(T, de, K);
      }, M.negated = function() {
        var T = new y(this);
        return T.s = -T.s || null, T;
      }, M.plus = function(T, R) {
        var D, K = this, G = K.s;
        if (T = new y(T, R), R = T.s, !G || !R)
          return new y(NaN);
        if (G != R)
          return T.s = -R, K.minus(T);
        var Q = K.e / l, g = T.e / l, o = K.c, u = T.c;
        if (!Q || !g) {
          if (!o || !u)
            return new y(G / 0);
          if (!o[0] || !u[0])
            return u[0] ? T : new y(o[0] ? K : G * 0);
        }
        if (Q = E(Q), g = E(g), o = o.slice(), G = Q - g) {
          for (G > 0 ? (g = Q, D = u) : (G = -G, D = o), D.reverse(); G--; D.push(0))
            ;
          D.reverse();
        }
        for (G = o.length, R = u.length, G - R < 0 && (D = u, u = o, o = D, R = G), G = 0; R; )
          G = (o[--R] = o[R] + u[R] + G) / d | 0, o[R] = d === o[R] ? 0 : o[R] % d;
        return G && (o = [G].concat(o), ++g), pe(T, o, g);
      }, M.precision = M.sd = function(T, R) {
        var D, K, G, Q = this;
        if (T != null && T !== !!T)
          return B(T, 1, m), R == null ? R = F : B(R, 0, 8), ae(new y(Q), T, R);
        if (!(D = Q.c))
          return null;
        if (G = D.length - 1, K = G * l + 1, G = D[G]) {
          for (; G % 10 == 0; G /= 10, K--)
            ;
          for (G = D[0]; G >= 10; G /= 10, K++)
            ;
        }
        return T && Q.e + 1 > K && (K = Q.e + 1), K;
      }, M.shiftedBy = function(T) {
        return B(T, -p, p), this.times("1e" + T);
      }, M.squareRoot = M.sqrt = function() {
        var T, R, D, K, G, Q = this, g = Q.c, o = Q.s, u = Q.e, v = ee + 4, N = new y("0.5");
        if (o !== 1 || !g || !g[0])
          return new y(!o || o < 0 && (!g || g[0]) ? NaN : g ? Q : 1 / 0);
        if (o = Math.sqrt(+le(Q)), o == 0 || o == 1 / 0 ? (R = A(g), (R.length + u) % 2 == 0 && (R += "0"), o = Math.sqrt(+R), u = E((u + 1) / 2) - (u < 0 || u % 2), o == 1 / 0 ? R = "5e" + u : (R = o.toExponential(), R = R.slice(0, R.indexOf("e") + 1) + u), D = new y(R)) : D = new y(o + ""), D.c[0]) {
          for (u = D.e, o = u + v, o < 3 && (o = 0); ; )
            if (G = D, D = N.times(G.plus(P(Q, G, v, 1))), A(G.c).slice(0, o) === (R = A(D.c)).slice(0, o))
              if (D.e < u && --o, R = R.slice(o - 3, o + 1), R == "9999" || !K && R == "4999") {
                if (!K && (ae(G, G.e + ee + 2, 0), G.times(G).eq(Q))) {
                  D = G;
                  break;
                }
                v += 4, o += 4, K = 1;
              } else {
                (!+R || !+R.slice(1) && R.charAt(0) == "5") && (ae(D, D.e + ee + 2, 1), T = !D.times(D).eq(Q));
                break;
              }
        }
        return ae(D, D.e + ee + 1, F, T);
      }, M.toExponential = function(T, R) {
        return T != null && (B(T, 0, m), T++), ce(this, T, R, 1);
      }, M.toFixed = function(T, R) {
        return T != null && (B(T, 0, m), T = T + this.e + 1), ce(this, T, R);
      }, M.toFormat = function(T, R, D) {
        var K, G = this;
        if (D == null)
          T != null && R && typeof R == "object" ? (D = R, R = null) : T && typeof T == "object" ? (D = T, T = R = null) : D = Z;
        else if (typeof D != "object")
          throw Error(c + "Argument not an object: " + D);
        if (K = G.toFixed(T, R), G.c) {
          var Q, g = K.split("."), o = +D.groupSize, u = +D.secondaryGroupSize, v = D.groupSeparator || "", N = g[0], z = g[1], J = G.s < 0, ue = J ? N.slice(1) : N, de = ue.length;
          if (u && (Q = o, o = u, u = Q, de -= Q), o > 0 && de > 0) {
            for (Q = de % o || o, N = ue.substr(0, Q); Q < de; Q += o)
              N += v + ue.substr(Q, o);
            u > 0 && (N += v + ue.slice(Q)), J && (N = "-" + N);
          }
          K = z ? N + (D.decimalSeparator || "") + ((u = +D.fractionGroupSize) ? z.replace(
            new RegExp("\\d{" + u + "}\\B", "g"),
            "$&" + (D.fractionGroupSeparator || "")
          ) : z) : N;
        }
        return (D.prefix || "") + K + (D.suffix || "");
      }, M.toFraction = function(T) {
        var R, D, K, G, Q, g, o, u, v, N, z, J, ue = this, de = ue.c;
        if (T != null && (o = new y(T), !o.isInteger() && (o.c || o.s !== 1) || o.lt(W)))
          throw Error(c + "Argument " + (o.isInteger() ? "out of range: " : "not an integer: ") + le(o));
        if (!de)
          return new y(ue);
        for (R = new y(W), v = D = new y(W), K = u = new y(W), J = A(de), Q = R.e = J.length - ue.e - 1, R.c[0] = w[(g = Q % l) < 0 ? l + g : g], T = !T || o.comparedTo(R) > 0 ? Q > 0 ? R : v : o, g = re, re = 1 / 0, o = new y(J), u.c[0] = 0; N = P(o, R, 0, 1), G = D.plus(N.times(K)), G.comparedTo(T) != 1; )
          D = K, K = G, v = u.plus(N.times(G = v)), u = G, R = o.minus(N.times(G = R)), o = G;
        return G = P(T.minus(D), K, 0, 1), u = u.plus(G.times(v)), D = D.plus(G.times(K)), u.s = v.s = ue.s, Q = Q * 2, z = P(v, K, Q, F).minus(ue).abs().comparedTo(
          P(u, D, Q, F).minus(ue).abs()
        ) < 1 ? [v, K] : [u, D], re = g, z;
      }, M.toNumber = function() {
        return +le(this);
      }, M.toPrecision = function(T, R) {
        return T != null && B(T, 1, m), ce(this, T, R, 2);
      }, M.toString = function(T) {
        var R, D = this, K = D.s, G = D.e;
        return G === null ? K ? (R = "Infinity", K < 0 && (R = "-" + R)) : R = "NaN" : (T == null ? R = G <= q || G >= j ? O(A(D.c), G) : S(A(D.c), G, "0") : T === 10 && X ? (D = ae(new y(D), ee + G + 1, F), R = S(A(D.c), D.e, "0")) : (B(T, 2, $.length, "Base"), R = H(S(A(D.c), G, "0"), 10, T, K, !0)), K < 0 && D.c[0] && (R = "-" + R)), R;
      }, M.valueOf = M.toJSON = function() {
        return le(this);
      }, M._isBigNumber = !0, k != null && y.set(k), y;
    }
    function E(k) {
      var P = k | 0;
      return k > 0 || k === P ? P : P - 1;
    }
    function A(k) {
      for (var P, H, ie = 1, M = k.length, W = k[0] + ""; ie < M; ) {
        for (P = k[ie++] + "", H = l - P.length; H--; P = "0" + P)
          ;
        W += P;
      }
      for (M = W.length; W.charCodeAt(--M) === 48; )
        ;
      return W.slice(0, M + 1 || 1);
    }
    function U(k, P) {
      var H, ie, M = k.c, W = P.c, ee = k.s, F = P.s, q = k.e, j = P.e;
      if (!ee || !F)
        return null;
      if (H = M && !M[0], ie = W && !W[0], H || ie)
        return H ? ie ? 0 : -F : ee;
      if (ee != F)
        return ee;
      if (H = ee < 0, ie = q == j, !M || !W)
        return ie ? 0 : !M ^ H ? 1 : -1;
      if (!ie)
        return q > j ^ H ? 1 : -1;
      for (F = (q = M.length) < (j = W.length) ? q : j, ee = 0; ee < F; ee++)
        if (M[ee] != W[ee])
          return M[ee] > W[ee] ^ H ? 1 : -1;
      return q == j ? 0 : q > j ^ H ? 1 : -1;
    }
    function B(k, P, H, ie) {
      if (k < P || k > H || k !== s(k))
        throw Error(c + (ie || "Argument") + (typeof k == "number" ? k < P || k > H ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(k));
    }
    function C(k) {
      var P = k.c.length - 1;
      return E(k.e / l) == P && k.c[P] % 2 != 0;
    }
    function O(k, P) {
      return (k.length > 1 ? k.charAt(0) + "." + k.slice(1) : k) + (P < 0 ? "e" : "e+") + P;
    }
    function S(k, P, H) {
      var ie, M;
      if (P < 0) {
        for (M = H + "."; ++P; M += H)
          ;
        k = M + k;
      } else if (ie = k.length, ++P > ie) {
        for (M = H, P -= ie; --P; M += H)
          ;
        k += M;
      } else
        P < ie && (k = k.slice(0, P) + "." + k.slice(P));
      return k;
    }
    r = h(), r.default = r.BigNumber = r, t.exports ? t.exports = r : (e || (e = typeof self < "u" && self ? self : window), e.BigNumber = r);
  })(ve);
})(dc);
var v0 = dc.exports, Tf = function(e, r, n) {
  var i = new e.Uint8Array(n), s = r.pushInt, c = r.pushInt32, a = r.pushInt32Neg, d = r.pushInt64, l = r.pushInt64Neg, p = r.pushFloat, w = r.pushFloatSingle, _ = r.pushFloatDouble, m = r.pushTrue, h = r.pushFalse, E = r.pushUndefined, A = r.pushNull, U = r.pushInfinity, B = r.pushInfinityNeg, C = r.pushNaN, O = r.pushNaNNeg, S = r.pushArrayStart, k = r.pushArrayStartFixed, P = r.pushArrayStartFixed32, H = r.pushArrayStartFixed64, ie = r.pushObjectStart, M = r.pushObjectStartFixed, W = r.pushObjectStartFixed32, ee = r.pushObjectStartFixed64, F = r.pushByteString, q = r.pushByteStringStart, j = r.pushUtf8String, V = r.pushUtf8StringStart, re = r.pushSimpleUnassigned, se = r.pushTagStart, oe = r.pushTagStart4, he = r.pushTagStart8, Z = r.pushTagUnassigned, $ = r.pushBreak, X = e.Math.pow, y = 0, ce = 0, fe = 0;
  function pe(L) {
    for (L = L | 0, y = 0, ce = L; (y | 0) < (ce | 0) && (fe = ju[i[y] & 255](i[y] | 0) | 0, !((fe | 0) > 0)); )
      ;
    return fe | 0;
  }
  function ae(L) {
    return L = L | 0, ((y | 0) + (L | 0) | 0) < (ce | 0) ? 0 : 1;
  }
  function le(L) {
    return L = L | 0, i[L | 0] << 8 | i[L + 1 | 0] | 0;
  }
  function T(L) {
    return L = L | 0, i[L | 0] << 24 | i[L + 1 | 0] << 16 | i[L + 2 | 0] << 8 | i[L + 3 | 0] | 0;
  }
  function R(L) {
    return L = L | 0, s(L | 0), y = y + 1 | 0, 0;
  }
  function D(L) {
    return L = L | 0, ae(1) | 0 ? 1 : (s(i[y + 1 | 0] | 0), y = y + 2 | 0, 0);
  }
  function K(L) {
    return L = L | 0, ae(2) | 0 ? 1 : (s(
      le(y + 1 | 0) | 0
    ), y = y + 3 | 0, 0);
  }
  function G(L) {
    return L = L | 0, ae(4) | 0 ? 1 : (c(
      le(y + 1 | 0) | 0,
      le(y + 3 | 0) | 0
    ), y = y + 5 | 0, 0);
  }
  function Q(L) {
    return L = L | 0, ae(8) | 0 ? 1 : (d(
      le(y + 1 | 0) | 0,
      le(y + 3 | 0) | 0,
      le(y + 5 | 0) | 0,
      le(y + 7 | 0) | 0
    ), y = y + 9 | 0, 0);
  }
  function g(L) {
    return L = L | 0, s(-1 - (L - 32 | 0) | 0), y = y + 1 | 0, 0;
  }
  function o(L) {
    return L = L | 0, ae(1) | 0 ? 1 : (s(
      -1 - (i[y + 1 | 0] | 0) | 0
    ), y = y + 2 | 0, 0);
  }
  function u(L) {
    L = L | 0;
    var Se = 0;
    return ae(2) | 0 ? 1 : (Se = le(y + 1 | 0) | 0, s(-1 - (Se | 0) | 0), y = y + 3 | 0, 0);
  }
  function v(L) {
    return L = L | 0, ae(4) | 0 ? 1 : (a(
      le(y + 1 | 0) | 0,
      le(y + 3 | 0) | 0
    ), y = y + 5 | 0, 0);
  }
  function N(L) {
    return L = L | 0, ae(8) | 0 ? 1 : (l(
      le(y + 1 | 0) | 0,
      le(y + 3 | 0) | 0,
      le(y + 5 | 0) | 0,
      le(y + 7 | 0) | 0
    ), y = y + 9 | 0, 0);
  }
  function z(L) {
    L = L | 0;
    var Se = 0, Re = 0, Fe = 0;
    return Fe = L - 64 | 0, ae(Fe | 0) | 0 ? 1 : (Se = y + 1 | 0, Re = (y + 1 | 0) + (Fe | 0) | 0, F(Se | 0, Re | 0), y = Re | 0, 0);
  }
  function J(L) {
    L = L | 0;
    var Se = 0, Re = 0, Fe = 0;
    return ae(1) | 0 || (Fe = i[y + 1 | 0] | 0, Se = y + 2 | 0, Re = (y + 2 | 0) + (Fe | 0) | 0, ae(Fe + 1 | 0) | 0) ? 1 : (F(Se | 0, Re | 0), y = Re | 0, 0);
  }
  function ue(L) {
    L = L | 0;
    var Se = 0, Re = 0, Fe = 0;
    return ae(2) | 0 || (Fe = le(y + 1 | 0) | 0, Se = y + 3 | 0, Re = (y + 3 | 0) + (Fe | 0) | 0, ae(Fe + 2 | 0) | 0) ? 1 : (F(Se | 0, Re | 0), y = Re | 0, 0);
  }
  function de(L) {
    L = L | 0;
    var Se = 0, Re = 0, Fe = 0;
    return ae(4) | 0 || (Fe = T(y + 1 | 0) | 0, Se = y + 5 | 0, Re = (y + 5 | 0) + (Fe | 0) | 0, ae(Fe + 4 | 0) | 0) ? 1 : (F(Se | 0, Re | 0), y = Re | 0, 0);
  }
  function xe(L) {
    return L = L | 0, 1;
  }
  function we(L) {
    return L = L | 0, q(), y = y + 1 | 0, 0;
  }
  function b(L) {
    L = L | 0;
    var Se = 0, Re = 0, Fe = 0;
    return Fe = L - 96 | 0, ae(Fe | 0) | 0 ? 1 : (Se = y + 1 | 0, Re = (y + 1 | 0) + (Fe | 0) | 0, j(Se | 0, Re | 0), y = Re | 0, 0);
  }
  function f(L) {
    L = L | 0;
    var Se = 0, Re = 0, Fe = 0;
    return ae(1) | 0 || (Fe = i[y + 1 | 0] | 0, Se = y + 2 | 0, Re = (y + 2 | 0) + (Fe | 0) | 0, ae(Fe + 1 | 0) | 0) ? 1 : (j(Se | 0, Re | 0), y = Re | 0, 0);
  }
  function x(L) {
    L = L | 0;
    var Se = 0, Re = 0, Fe = 0;
    return ae(2) | 0 || (Fe = le(y + 1 | 0) | 0, Se = y + 3 | 0, Re = (y + 3 | 0) + (Fe | 0) | 0, ae(Fe + 2 | 0) | 0) ? 1 : (j(Se | 0, Re | 0), y = Re | 0, 0);
  }
  function I(L) {
    L = L | 0;
    var Se = 0, Re = 0, Fe = 0;
    return ae(4) | 0 || (Fe = T(y + 1 | 0) | 0, Se = y + 5 | 0, Re = (y + 5 | 0) + (Fe | 0) | 0, ae(Fe + 4 | 0) | 0) ? 1 : (j(Se | 0, Re | 0), y = Re | 0, 0);
  }
  function Y(L) {
    return L = L | 0, 1;
  }
  function te(L) {
    return L = L | 0, V(), y = y + 1 | 0, 0;
  }
  function ne(L) {
    return L = L | 0, k(L - 128 | 0), y = y + 1 | 0, 0;
  }
  function be(L) {
    return L = L | 0, ae(1) | 0 ? 1 : (k(i[y + 1 | 0] | 0), y = y + 2 | 0, 0);
  }
  function Be(L) {
    return L = L | 0, ae(2) | 0 ? 1 : (k(
      le(y + 1 | 0) | 0
    ), y = y + 3 | 0, 0);
  }
  function _e(L) {
    return L = L | 0, ae(4) | 0 ? 1 : (P(
      le(y + 1 | 0) | 0,
      le(y + 3 | 0) | 0
    ), y = y + 5 | 0, 0);
  }
  function me(L) {
    return L = L | 0, ae(8) | 0 ? 1 : (H(
      le(y + 1 | 0) | 0,
      le(y + 3 | 0) | 0,
      le(y + 5 | 0) | 0,
      le(y + 7 | 0) | 0
    ), y = y + 9 | 0, 0);
  }
  function Oe(L) {
    return L = L | 0, S(), y = y + 1 | 0, 0;
  }
  function Pe(L) {
    L = L | 0;
    var Se = 0;
    return Se = L - 160 | 0, ae(Se | 0) | 0 ? 1 : (M(Se | 0), y = y + 1 | 0, 0);
  }
  function xn(L) {
    return L = L | 0, ae(1) | 0 ? 1 : (M(i[y + 1 | 0] | 0), y = y + 2 | 0, 0);
  }
  function R0(L) {
    return L = L | 0, ae(2) | 0 ? 1 : (M(
      le(y + 1 | 0) | 0
    ), y = y + 3 | 0, 0);
  }
  function pn(L) {
    return L = L | 0, ae(4) | 0 ? 1 : (W(
      le(y + 1 | 0) | 0,
      le(y + 3 | 0) | 0
    ), y = y + 5 | 0, 0);
  }
  function O0(L) {
    return L = L | 0, ae(8) | 0 ? 1 : (ee(
      le(y + 1 | 0) | 0,
      le(y + 3 | 0) | 0,
      le(y + 5 | 0) | 0,
      le(y + 7 | 0) | 0
    ), y = y + 9 | 0, 0);
  }
  function M0(L) {
    return L = L | 0, ie(), y = y + 1 | 0, 0;
  }
  function Gt(L) {
    return L = L | 0, se(L - 192 | 0 | 0), y = y + 1 | 0, 0;
  }
  function U0(L) {
    return L = L | 0, se(L | 0), y = y + 1 | 0, 0;
  }
  function Ps(L) {
    return L = L | 0, se(L | 0), y = y + 1 | 0, 0;
  }
  function Ds(L) {
    return L = L | 0, se(L | 0), y = y + 1 | 0, 0;
  }
  function I0(L) {
    return L = L | 0, se(L | 0), y = y + 1 | 0, 0;
  }
  function Ve(L) {
    return L = L | 0, se(L - 192 | 0 | 0), y = y + 1 | 0, 0;
  }
  function k0(L) {
    return L = L | 0, se(L | 0), y = y + 1 | 0, 0;
  }
  function ct(L) {
    return L = L | 0, se(L | 0), y = y + 1 | 0, 0;
  }
  function It(L) {
    return L = L | 0, se(L | 0), y = y + 1 | 0, 0;
  }
  function yn(L) {
    return L = L | 0, ae(1) | 0 ? 1 : (se(i[y + 1 | 0] | 0), y = y + 2 | 0, 0);
  }
  function P0(L) {
    return L = L | 0, ae(2) | 0 ? 1 : (se(
      le(y + 1 | 0) | 0
    ), y = y + 3 | 0, 0);
  }
  function Su(L) {
    return L = L | 0, ae(4) | 0 ? 1 : (oe(
      le(y + 1 | 0) | 0,
      le(y + 3 | 0) | 0
    ), y = y + 5 | 0, 0);
  }
  function Nu(L) {
    return L = L | 0, ae(8) | 0 ? 1 : (he(
      le(y + 1 | 0) | 0,
      le(y + 3 | 0) | 0,
      le(y + 5 | 0) | 0,
      le(y + 7 | 0) | 0
    ), y = y + 9 | 0, 0);
  }
  function Ge(L) {
    return L = L | 0, re((L | 0) - 224 | 0), y = y + 1 | 0, 0;
  }
  function Ru(L) {
    return L = L | 0, h(), y = y + 1 | 0, 0;
  }
  function Ou(L) {
    return L = L | 0, m(), y = y + 1 | 0, 0;
  }
  function Mu(L) {
    return L = L | 0, A(), y = y + 1 | 0, 0;
  }
  function Uu(L) {
    return L = L | 0, E(), y = y + 1 | 0, 0;
  }
  function Iu(L) {
    return L = L | 0, ae(1) | 0 ? 1 : (re(i[y + 1 | 0] | 0), y = y + 2 | 0, 0);
  }
  function ku(L) {
    L = L | 0;
    var Se = 0, Re = 0, Fe = 1, gn = 0, Gr = 0, rx = 0;
    return ae(2) | 0 ? 1 : (Se = i[y + 1 | 0] | 0, Re = i[y + 2 | 0] | 0, (Se | 0) & 128 && (Fe = -1), gn = +(((Se | 0) & 124) >> 2), Gr = +(((Se | 0) & 3) << 8 | Re), +gn == 0 ? p(+(+Fe * 5960464477539063e-23 * +Gr)) : +gn == 31 ? +Fe == 1 ? +Gr > 0 ? C() : U() : +Gr > 0 ? O() : B() : p(+(+Fe * X(2, +(+gn - 25)) * +(1024 + Gr))), y = y + 3 | 0, 0);
  }
  function Pu(L) {
    return L = L | 0, ae(4) | 0 ? 1 : (w(
      i[y + 1 | 0] | 0,
      i[y + 2 | 0] | 0,
      i[y + 3 | 0] | 0,
      i[y + 4 | 0] | 0
    ), y = y + 5 | 0, 0);
  }
  function Du(L) {
    return L = L | 0, ae(8) | 0 ? 1 : (_(
      i[y + 1 | 0] | 0,
      i[y + 2 | 0] | 0,
      i[y + 3 | 0] | 0,
      i[y + 4 | 0] | 0,
      i[y + 5 | 0] | 0,
      i[y + 6 | 0] | 0,
      i[y + 7 | 0] | 0,
      i[y + 8 | 0] | 0
    ), y = y + 9 | 0, 0);
  }
  function Ie(L) {
    return L = L | 0, 1;
  }
  function zu(L) {
    return L = L | 0, $(), y = y + 1 | 0, 0;
  }
  var ju = [
    // Integer 0x00..0x17 (0..23)
    R,
    // 0x00
    R,
    // 0x01
    R,
    // 0x02
    R,
    // 0x03
    R,
    // 0x04
    R,
    // 0x05
    R,
    // 0x06
    R,
    // 0x07
    R,
    // 0x08
    R,
    // 0x09
    R,
    // 0x0A
    R,
    // 0x0B
    R,
    // 0x0C
    R,
    // 0x0D
    R,
    // 0x0E
    R,
    // 0x0F
    R,
    // 0x10
    R,
    // 0x11
    R,
    // 0x12
    R,
    // 0x13
    R,
    // 0x14
    R,
    // 0x15
    R,
    // 0x16
    R,
    // 0x17
    // Unsigned integer (one-byte uint8_t follows)
    D,
    // 0x18
    // Unsigned integer (two-byte uint16_t follows)
    K,
    // 0x19
    // Unsigned integer (four-byte uint32_t follows)
    G,
    // 0x1a
    // Unsigned integer (eight-byte uint64_t follows)
    Q,
    // 0x1b
    Ie,
    // 0x1c
    Ie,
    // 0x1d
    Ie,
    // 0x1e
    Ie,
    // 0x1f
    // Negative integer -1-0x00..-1-0x17 (-1..-24)
    g,
    // 0x20
    g,
    // 0x21
    g,
    // 0x22
    g,
    // 0x23
    g,
    // 0x24
    g,
    // 0x25
    g,
    // 0x26
    g,
    // 0x27
    g,
    // 0x28
    g,
    // 0x29
    g,
    // 0x2A
    g,
    // 0x2B
    g,
    // 0x2C
    g,
    // 0x2D
    g,
    // 0x2E
    g,
    // 0x2F
    g,
    // 0x30
    g,
    // 0x31
    g,
    // 0x32
    g,
    // 0x33
    g,
    // 0x34
    g,
    // 0x35
    g,
    // 0x36
    g,
    // 0x37
    // Negative integer -1-n (one-byte uint8_t for n follows)
    o,
    // 0x38
    // Negative integer -1-n (two-byte uint16_t for n follows)
    u,
    // 0x39
    // Negative integer -1-n (four-byte uint32_t for nfollows)
    v,
    // 0x3a
    // Negative integer -1-n (eight-byte uint64_t for n follows)
    N,
    // 0x3b
    Ie,
    // 0x3c
    Ie,
    // 0x3d
    Ie,
    // 0x3e
    Ie,
    // 0x3f
    // byte string (0x00..0x17 bytes follow)
    z,
    // 0x40
    z,
    // 0x41
    z,
    // 0x42
    z,
    // 0x43
    z,
    // 0x44
    z,
    // 0x45
    z,
    // 0x46
    z,
    // 0x47
    z,
    // 0x48
    z,
    // 0x49
    z,
    // 0x4A
    z,
    // 0x4B
    z,
    // 0x4C
    z,
    // 0x4D
    z,
    // 0x4E
    z,
    // 0x4F
    z,
    // 0x50
    z,
    // 0x51
    z,
    // 0x52
    z,
    // 0x53
    z,
    // 0x54
    z,
    // 0x55
    z,
    // 0x56
    z,
    // 0x57
    // byte string (one-byte uint8_t for n, and then n bytes follow)
    J,
    // 0x58
    // byte string (two-byte uint16_t for n, and then n bytes follow)
    ue,
    // 0x59
    // byte string (four-byte uint32_t for n, and then n bytes follow)
    de,
    // 0x5a
    // byte string (eight-byte uint64_t for n, and then n bytes follow)
    xe,
    // 0x5b
    Ie,
    // 0x5c
    Ie,
    // 0x5d
    Ie,
    // 0x5e
    // byte string, byte strings follow, terminated by "break"
    we,
    // 0x5f
    // UTF-8 string (0x00..0x17 bytes follow)
    b,
    // 0x60
    b,
    // 0x61
    b,
    // 0x62
    b,
    // 0x63
    b,
    // 0x64
    b,
    // 0x65
    b,
    // 0x66
    b,
    // 0x67
    b,
    // 0x68
    b,
    // 0x69
    b,
    // 0x6A
    b,
    // 0x6B
    b,
    // 0x6C
    b,
    // 0x6D
    b,
    // 0x6E
    b,
    // 0x6F
    b,
    // 0x70
    b,
    // 0x71
    b,
    // 0x72
    b,
    // 0x73
    b,
    // 0x74
    b,
    // 0x75
    b,
    // 0x76
    b,
    // 0x77
    // UTF-8 string (one-byte uint8_t for n, and then n bytes follow)
    f,
    // 0x78
    // UTF-8 string (two-byte uint16_t for n, and then n bytes follow)
    x,
    // 0x79
    // UTF-8 string (four-byte uint32_t for n, and then n bytes follow)
    I,
    // 0x7a
    // UTF-8 string (eight-byte uint64_t for n, and then n bytes follow)
    Y,
    // 0x7b
    // UTF-8 string, UTF-8 strings follow, terminated by "break"
    Ie,
    // 0x7c
    Ie,
    // 0x7d
    Ie,
    // 0x7e
    te,
    // 0x7f
    // array (0x00..0x17 data items follow)
    ne,
    // 0x80
    ne,
    // 0x81
    ne,
    // 0x82
    ne,
    // 0x83
    ne,
    // 0x84
    ne,
    // 0x85
    ne,
    // 0x86
    ne,
    // 0x87
    ne,
    // 0x88
    ne,
    // 0x89
    ne,
    // 0x8A
    ne,
    // 0x8B
    ne,
    // 0x8C
    ne,
    // 0x8D
    ne,
    // 0x8E
    ne,
    // 0x8F
    ne,
    // 0x90
    ne,
    // 0x91
    ne,
    // 0x92
    ne,
    // 0x93
    ne,
    // 0x94
    ne,
    // 0x95
    ne,
    // 0x96
    ne,
    // 0x97
    // array (one-byte uint8_t fo, and then n data items follow)
    be,
    // 0x98
    // array (two-byte uint16_t for n, and then n data items follow)
    Be,
    // 0x99
    // array (four-byte uint32_t for n, and then n data items follow)
    _e,
    // 0x9a
    // array (eight-byte uint64_t for n, and then n data items follow)
    me,
    // 0x9b
    // array, data items follow, terminated by "break"
    Ie,
    // 0x9c
    Ie,
    // 0x9d
    Ie,
    // 0x9e
    Oe,
    // 0x9f
    // map (0x00..0x17 pairs of data items follow)
    Pe,
    // 0xa0
    Pe,
    // 0xa1
    Pe,
    // 0xa2
    Pe,
    // 0xa3
    Pe,
    // 0xa4
    Pe,
    // 0xa5
    Pe,
    // 0xa6
    Pe,
    // 0xa7
    Pe,
    // 0xa8
    Pe,
    // 0xa9
    Pe,
    // 0xaA
    Pe,
    // 0xaB
    Pe,
    // 0xaC
    Pe,
    // 0xaD
    Pe,
    // 0xaE
    Pe,
    // 0xaF
    Pe,
    // 0xb0
    Pe,
    // 0xb1
    Pe,
    // 0xb2
    Pe,
    // 0xb3
    Pe,
    // 0xb4
    Pe,
    // 0xb5
    Pe,
    // 0xb6
    Pe,
    // 0xb7
    // map (one-byte uint8_t for n, and then n pairs of data items follow)
    xn,
    // 0xb8
    // map (two-byte uint16_t for n, and then n pairs of data items follow)
    R0,
    // 0xb9
    // map (four-byte uint32_t for n, and then n pairs of data items follow)
    pn,
    // 0xba
    // map (eight-byte uint64_t for n, and then n pairs of data items follow)
    O0,
    // 0xbb
    Ie,
    // 0xbc
    Ie,
    // 0xbd
    Ie,
    // 0xbe
    // map, pairs of data items follow, terminated by "break"
    M0,
    // 0xbf
    // Text-based date/time (data item follows; see Section 2.4.1)
    Gt,
    // 0xc0
    // Epoch-based date/time (data item follows; see Section 2.4.1)
    Gt,
    // 0xc1
    // Positive bignum (data item "byte string" follows)
    Gt,
    // 0xc2
    // Negative bignum (data item "byte string" follows)
    Gt,
    // 0xc3
    // Decimal Fraction (data item "array" follows; see Section 2.4.3)
    Gt,
    // 0xc4
    // Bigfloat (data item "array" follows; see Section 2.4.3)
    Gt,
    // 0xc5
    // (tagged item)
    Ve,
    // 0xc6
    Ve,
    // 0xc7
    Ve,
    // 0xc8
    Ve,
    // 0xc9
    Ve,
    // 0xca
    Ve,
    // 0xcb
    Ve,
    // 0xcc
    Ve,
    // 0xcd
    Ve,
    // 0xce
    Ve,
    // 0xcf
    Ve,
    // 0xd0
    Ve,
    // 0xd1
    Ve,
    // 0xd2
    Ve,
    // 0xd3
    Ve,
    // 0xd4
    // Expected Conversion (data item follows; see Section 2.4.4.2)
    Ve,
    // 0xd5
    Ve,
    // 0xd6
    Ve,
    // 0xd7
    // (more tagged items, 1/2/4/8 bytes and then a data item follow)
    yn,
    // 0xd8
    P0,
    // 0xd9
    Su,
    // 0xda
    Nu,
    // 0xdb
    Ie,
    // 0xdc
    Ie,
    // 0xdd
    Ie,
    // 0xde
    Ie,
    // 0xdf
    // (simple value)
    Ge,
    // 0xe0
    Ge,
    // 0xe1
    Ge,
    // 0xe2
    Ge,
    // 0xe3
    Ge,
    // 0xe4
    Ge,
    // 0xe5
    Ge,
    // 0xe6
    Ge,
    // 0xe7
    Ge,
    // 0xe8
    Ge,
    // 0xe9
    Ge,
    // 0xea
    Ge,
    // 0xeb
    Ge,
    // 0xec
    Ge,
    // 0xed
    Ge,
    // 0xee
    Ge,
    // 0xef
    Ge,
    // 0xf0
    Ge,
    // 0xf1
    Ge,
    // 0xf2
    Ge,
    // 0xf3
    // False
    Ru,
    // 0xf4
    // True
    Ou,
    // 0xf5
    // Null
    Mu,
    // 0xf6
    // Undefined
    Uu,
    // 0xf7
    // (simple value, one byte follows)
    Iu,
    // 0xf8
    // Half-Precision Float (two-byte IEEE 754)
    ku,
    // 0xf9
    // Single-Precision Float (four-byte IEEE 754)
    Pu,
    // 0xfa
    // Double-Precision Float (eight-byte IEEE 754)
    Du,
    // 0xfb
    Ie,
    // 0xfc
    Ie,
    // 0xfd
    Ie,
    // 0xfe
    // "break" stop code
    zu
    // 0xff
  ];
  return {
    parse: pe
  };
}, B0 = {}, it = {};
const ps = v0.BigNumber;
it.MT = {
  POS_INT: 0,
  NEG_INT: 1,
  BYTE_STRING: 2,
  UTF8_STRING: 3,
  ARRAY: 4,
  MAP: 5,
  TAG: 6,
  SIMPLE_FLOAT: 7
};
it.TAG = {
  DATE_STRING: 0,
  DATE_EPOCH: 1,
  POS_BIGINT: 2,
  NEG_BIGINT: 3,
  DECIMAL_FRAC: 4,
  BIGFLOAT: 5,
  BASE64URL_EXPECTED: 21,
  BASE64_EXPECTED: 22,
  BASE16_EXPECTED: 23,
  CBOR: 24,
  URI: 32,
  BASE64URL: 33,
  BASE64: 34,
  REGEXP: 35,
  MIME: 36
};
it.NUMBYTES = {
  ZERO: 0,
  ONE: 24,
  TWO: 25,
  FOUR: 26,
  EIGHT: 27,
  INDEFINITE: 31
};
it.SIMPLE = {
  FALSE: 20,
  TRUE: 21,
  NULL: 22,
  UNDEFINED: 23
};
it.SYMS = {
  NULL: Symbol("null"),
  UNDEFINED: Symbol("undef"),
  PARENT: Symbol("parent"),
  BREAK: Symbol("break"),
  STREAM: Symbol("stream")
};
it.SHIFT32 = Math.pow(2, 32);
it.SHIFT16 = Math.pow(2, 16);
it.MAX_SAFE_HIGH = 2097151;
it.NEG_ONE = new ps(-1);
it.TEN = new ps(10);
it.TWO = new ps(2);
it.PARENT = {
  ARRAY: 0,
  OBJECT: 1,
  MAP: 2,
  TAG: 3,
  BYTE_STRING: 4,
  UTF8_STRING: 5
};
(function(t) {
  const { Buffer: e } = ln, r = v0.BigNumber, n = it, i = n.SHIFT32, s = n.SHIFT16, c = 2097151;
  t.parseHalf = function(l) {
    var p, w, _;
    return _ = l[0] & 128 ? -1 : 1, p = (l[0] & 124) >> 2, w = (l[0] & 3) << 8 | l[1], p ? p === 31 ? _ * (w ? 0 / 0 : 1 / 0) : _ * Math.pow(2, p - 25) * (1024 + w) : _ * 5960464477539063e-23 * w;
  };
  function a(d) {
    return d < 16 ? "0" + d.toString(16) : d.toString(16);
  }
  t.arrayBufferToBignumber = function(d) {
    const l = d.byteLength;
    let p = "";
    for (let w = 0; w < l; w++)
      p += a(d[w]);
    return new r(p, 16);
  }, t.buildMap = (d) => {
    const l = /* @__PURE__ */ new Map(), p = Object.keys(d), w = p.length;
    for (let _ = 0; _ < w; _++)
      l.set(p[_], d[p[_]]);
    return l;
  }, t.buildInt32 = (d, l) => d * s + l, t.buildInt64 = (d, l, p, w) => {
    const _ = t.buildInt32(d, l), m = t.buildInt32(p, w);
    return _ > c ? new r(_).times(i).plus(m) : _ * i + m;
  }, t.writeHalf = function(l, p) {
    const w = e.allocUnsafe(4);
    w.writeFloatBE(p, 0);
    const _ = w.readUInt32BE(0);
    if (_ & 8191)
      return !1;
    var m = _ >> 16 & 32768;
    const h = _ >> 23 & 255, E = _ & 8388607;
    if (h >= 113 && h <= 142)
      m += (h - 112 << 10) + (E >> 13);
    else if (h >= 103 && h < 113) {
      if (E & (1 << 126 - h) - 1)
        return !1;
      m += E + 8388608 >> 126 - h;
    } else
      return !1;
    return l.writeUInt16BE(m, 0), !0;
  }, t.keySorter = function(d, l) {
    var p = d[0].byteLength, w = l[0].byteLength;
    return p > w ? 1 : w > p ? -1 : d[0].compare(l[0]);
  }, t.isNegativeZero = (d) => d === 0 && 1 / d < 0, t.nextPowerOf2 = (d) => {
    let l = 0;
    if (d && !(d & d - 1))
      return d;
    for (; d !== 0; )
      d >>= 1, l += 1;
    return 1 << l;
  };
})(B0);
const ys = it, Sf = ys.MT, bn = ys.SIMPLE, $0 = ys.SYMS;
let Nf = class Wi {
  /**
   * Creates an instance of Simple.
   *
   * @param {integer} value - the simple value's integer value
   */
  constructor(e) {
    if (typeof e != "number")
      throw new Error("Invalid Simple type: " + typeof e);
    if (e < 0 || e > 255 || (e | 0) !== e)
      throw new Error("value must be a small positive integer: " + e);
    this.value = e;
  }
  /**
   * Debug string for simple value
   *
   * @returns {string} simple(value)
   */
  toString() {
    return "simple(" + this.value + ")";
  }
  /**
   * Debug string for simple value
   *
   * @returns {string} simple(value)
   */
  inspect() {
    return "simple(" + this.value + ")";
  }
  /**
   * Push the simple value onto the CBOR stream
   *
   * @param {cbor.Encoder} gen The generator to push onto
   * @returns {number}
   */
  encodeCBOR(e) {
    return e._pushInt(this.value, Sf.SIMPLE_FLOAT);
  }
  /**
   * Is the given object a Simple?
   *
   * @param {any} obj - object to test
   * @returns {bool} - is it Simple?
   */
  static isSimple(e) {
    return e instanceof Wi;
  }
  /**
   * Decode from the CBOR additional information into a JavaScript value.
   * If the CBOR item has no parent, return a "safe" symbol instead of
   * `null` or `undefined`, so that the value can be passed through a
   * stream in object mode.
   *
   * @param {Number} val - the CBOR additional info to convert
   * @param {bool} hasParent - Does the CBOR item have a parent?
   * @returns {(null|undefined|Boolean|Symbol)} - the decoded value
   */
  static decode(e, r) {
    switch (r == null && (r = !0), e) {
      case bn.FALSE:
        return !1;
      case bn.TRUE:
        return !0;
      case bn.NULL:
        return r ? null : $0.NULL;
      case bn.UNDEFINED:
        return r ? void 0 : $0.UNDEFINED;
      case -1:
        if (!r)
          throw new Error("Invalid BREAK");
        return $0.BREAK;
      default:
        return new Wi(e);
    }
  }
};
var xc = Nf;
let Rf = class Li {
  /**
   * Creates an instance of Tagged.
   *
   * @param {Number} tag - the number of the tag
   * @param {any} value - the value inside the tag
   * @param {Error} err - the error that was thrown parsing the tag, or null
   */
  constructor(e, r, n) {
    if (this.tag = e, this.value = r, this.err = n, typeof this.tag != "number")
      throw new Error("Invalid tag type (" + typeof this.tag + ")");
    if (this.tag < 0 || (this.tag | 0) !== this.tag)
      throw new Error("Tag must be a positive integer: " + this.tag);
  }
  /**
   * Convert to a String
   *
   * @returns {String} string of the form '1(2)'
   */
  toString() {
    return `${this.tag}(${JSON.stringify(this.value)})`;
  }
  /**
   * Push the simple value onto the CBOR stream
   *
   * @param {cbor.Encoder} gen The generator to push onto
   * @returns {number}
   */
  encodeCBOR(e) {
    return e._pushTag(this.tag), e.pushAny(this.value);
  }
  /**
   * If we have a converter for this type, do the conversion.  Some converters
   * are built-in.  Additional ones can be passed in.  If you want to remove
   * a built-in converter, pass a converter in whose value is 'null' instead
   * of a function.
   *
   * @param {Object} converters - keys in the object are a tag number, the value
   *   is a function that takes the decoded CBOR and returns a JavaScript value
   *   of the appropriate type.  Throw an exception in the function on errors.
   * @returns {any} - the converted item
   */
  convert(e) {
    var r, n;
    if (n = e != null ? e[this.tag] : void 0, typeof n != "function" && (n = Li["_tag" + this.tag], typeof n != "function"))
      return this;
    try {
      return n.call(Li, this.value);
    } catch (i) {
      return r = i, this.err = r, this;
    }
  }
};
var pc = Rf;
const yc = self.location ? self.location.protocol + "//" + self.location.host : "", Ki = self.URL;
let Of = class {
  constructor(e = "", r = yc) {
    this.super = new Ki(e, r), this.path = this.pathname + this.search, this.auth = this.username && this.password ? this.username + ":" + this.password : null, this.query = this.search && this.search.startsWith("?") ? this.search.slice(1) : null;
  }
  get hash() {
    return this.super.hash;
  }
  get host() {
    return this.super.host;
  }
  get hostname() {
    return this.super.hostname;
  }
  get href() {
    return this.super.href;
  }
  get origin() {
    return this.super.origin;
  }
  get password() {
    return this.super.password;
  }
  get pathname() {
    return this.super.pathname;
  }
  get port() {
    return this.super.port;
  }
  get protocol() {
    return this.super.protocol;
  }
  get search() {
    return this.super.search;
  }
  get searchParams() {
    return this.super.searchParams;
  }
  get username() {
    return this.super.username;
  }
  set hash(e) {
    this.super.hash = e;
  }
  set host(e) {
    this.super.host = e;
  }
  set hostname(e) {
    this.super.hostname = e;
  }
  set href(e) {
    this.super.href = e;
  }
  set origin(e) {
    this.super.origin = e;
  }
  set password(e) {
    this.super.password = e;
  }
  set pathname(e) {
    this.super.pathname = e;
  }
  set port(e) {
    this.super.port = e;
  }
  set protocol(e) {
    this.super.protocol = e;
  }
  set search(e) {
    this.super.search = e;
  }
  set searchParams(e) {
    this.super.searchParams = e;
  }
  set username(e) {
    this.super.username = e;
  }
  createObjectURL(e) {
    return this.super.createObjectURL(e);
  }
  revokeObjectURL(e) {
    this.super.revokeObjectURL(e);
  }
  toJSON() {
    return this.super.toJSON();
  }
  toString() {
    return this.super.toString();
  }
  format() {
    return this.toString();
  }
};
function Mf(t) {
  if (typeof t == "string")
    return new Ki(t).toString();
  if (!(t instanceof Ki)) {
    const e = t.username && t.password ? `${t.username}:${t.password}@` : "", r = t.auth ? t.auth + "@" : "", n = t.port ? ":" + t.port : "", i = t.protocol ? t.protocol + "//" : "", s = t.host || "", c = t.hostname || "", a = t.search || (t.query ? "?" + t.query : ""), d = t.hash || "", l = t.pathname || "", p = t.path || l + a;
    return `${i}${e || r}${s || c + n}${p}${d}`;
  }
}
var gc = {
  URLWithLegacySupport: Of,
  URLSearchParams: self.URLSearchParams,
  defaultBase: yc,
  format: Mf
};
const { URLWithLegacySupport: $s, format: Uf } = gc;
var If = (t, e = {}, r = {}, n) => {
  let i = e.protocol ? e.protocol.replace(":", "") : "http";
  i = (r[i] || n || i) + ":";
  let s;
  try {
    s = new $s(t);
  } catch {
    s = {};
  }
  const c = Object.assign({}, e, {
    protocol: i || s.protocol,
    host: e.host || s.host
  });
  return new $s(t, Uf(c)).toString();
};
const {
  URLWithLegacySupport: kf,
  format: Pf,
  URLSearchParams: Df,
  defaultBase: zf
} = gc, jf = If;
var wc = {
  URL: kf,
  URLSearchParams: Df,
  format: Pf,
  relative: jf,
  defaultBase: zf
};
const { Buffer: Tr } = ln, Hs = un, qf = v0.BigNumber, $f = Tf, st = B0, Ue = it, Hf = xc, Vf = pc, { URL: Gf } = wc;
let Yi = class Zi {
  /**
   * @param {Object} [opts={}]
   * @param {number} [opts.size=65536] - Size of the allocated heap.
   */
  constructor(e) {
    e = e || {}, !e.size || e.size < 65536 ? e.size = 65536 : e.size = st.nextPowerOf2(e.size), this._heap = new ArrayBuffer(e.size), this._heap8 = new Uint8Array(this._heap), this._buffer = Tr.from(this._heap), this._reset(), this._knownTags = Object.assign({
      0: (r) => new Date(r),
      1: (r) => new Date(r * 1e3),
      2: (r) => st.arrayBufferToBignumber(r),
      3: (r) => Ue.NEG_ONE.minus(st.arrayBufferToBignumber(r)),
      4: (r) => Ue.TEN.pow(r[0]).times(r[1]),
      5: (r) => Ue.TWO.pow(r[0]).times(r[1]),
      32: (r) => new Gf(r),
      35: (r) => new RegExp(r)
    }, e.tags), this.parser = $f(globalThis, {
      // eslint-disable-next-line no-console
      log: console.log.bind(console),
      pushInt: this.pushInt.bind(this),
      pushInt32: this.pushInt32.bind(this),
      pushInt32Neg: this.pushInt32Neg.bind(this),
      pushInt64: this.pushInt64.bind(this),
      pushInt64Neg: this.pushInt64Neg.bind(this),
      pushFloat: this.pushFloat.bind(this),
      pushFloatSingle: this.pushFloatSingle.bind(this),
      pushFloatDouble: this.pushFloatDouble.bind(this),
      pushTrue: this.pushTrue.bind(this),
      pushFalse: this.pushFalse.bind(this),
      pushUndefined: this.pushUndefined.bind(this),
      pushNull: this.pushNull.bind(this),
      pushInfinity: this.pushInfinity.bind(this),
      pushInfinityNeg: this.pushInfinityNeg.bind(this),
      pushNaN: this.pushNaN.bind(this),
      pushNaNNeg: this.pushNaNNeg.bind(this),
      pushArrayStart: this.pushArrayStart.bind(this),
      pushArrayStartFixed: this.pushArrayStartFixed.bind(this),
      pushArrayStartFixed32: this.pushArrayStartFixed32.bind(this),
      pushArrayStartFixed64: this.pushArrayStartFixed64.bind(this),
      pushObjectStart: this.pushObjectStart.bind(this),
      pushObjectStartFixed: this.pushObjectStartFixed.bind(this),
      pushObjectStartFixed32: this.pushObjectStartFixed32.bind(this),
      pushObjectStartFixed64: this.pushObjectStartFixed64.bind(this),
      pushByteString: this.pushByteString.bind(this),
      pushByteStringStart: this.pushByteStringStart.bind(this),
      pushUtf8String: this.pushUtf8String.bind(this),
      pushUtf8StringStart: this.pushUtf8StringStart.bind(this),
      pushSimpleUnassigned: this.pushSimpleUnassigned.bind(this),
      pushTagUnassigned: this.pushTagUnassigned.bind(this),
      pushTagStart: this.pushTagStart.bind(this),
      pushTagStart4: this.pushTagStart4.bind(this),
      pushTagStart8: this.pushTagStart8.bind(this),
      pushBreak: this.pushBreak.bind(this)
    }, this._heap);
  }
  get _depth() {
    return this._parents.length;
  }
  get _currentParent() {
    return this._parents[this._depth - 1];
  }
  get _ref() {
    return this._currentParent.ref;
  }
  // Finish the current parent
  _closeParent() {
    var e = this._parents.pop();
    if (e.length > 0)
      throw new Error(`Missing ${e.length} elements`);
    switch (e.type) {
      case Ue.PARENT.TAG:
        this._push(
          this.createTag(e.ref[0], e.ref[1])
        );
        break;
      case Ue.PARENT.BYTE_STRING:
        this._push(this.createByteString(e.ref, e.length));
        break;
      case Ue.PARENT.UTF8_STRING:
        this._push(this.createUtf8String(e.ref, e.length));
        break;
      case Ue.PARENT.MAP:
        if (e.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createMap(e.ref, e.length));
        break;
      case Ue.PARENT.OBJECT:
        if (e.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createObject(e.ref, e.length));
        break;
      case Ue.PARENT.ARRAY:
        this._push(this.createArray(e.ref, e.length));
        break;
    }
    this._currentParent && this._currentParent.type === Ue.PARENT.TAG && this._dec();
  }
  // Reduce the expected length of the current parent by one
  _dec() {
    const e = this._currentParent;
    e.length < 0 || (e.length--, e.length === 0 && this._closeParent());
  }
  // Push any value to the current parent
  _push(e, r) {
    const n = this._currentParent;
    switch (n.values++, n.type) {
      case Ue.PARENT.ARRAY:
      case Ue.PARENT.BYTE_STRING:
      case Ue.PARENT.UTF8_STRING:
        n.length > -1 ? this._ref[this._ref.length - n.length] = e : this._ref.push(e), this._dec();
        break;
      case Ue.PARENT.OBJECT:
        n.tmpKey != null ? (this._ref[n.tmpKey] = e, n.tmpKey = null, this._dec()) : (n.tmpKey = e, typeof n.tmpKey != "string" && (n.type = Ue.PARENT.MAP, n.ref = st.buildMap(n.ref)));
        break;
      case Ue.PARENT.MAP:
        n.tmpKey != null ? (this._ref.set(n.tmpKey, e), n.tmpKey = null, this._dec()) : n.tmpKey = e;
        break;
      case Ue.PARENT.TAG:
        this._ref.push(e), r || this._dec();
        break;
      default:
        throw new Error("Unknown parent type");
    }
  }
  // Create a new parent in the parents list
  _createParent(e, r, n) {
    this._parents[this._depth] = {
      type: r,
      length: n,
      ref: e,
      values: 0,
      tmpKey: null
    };
  }
  // Reset all state back to the beginning, also used for initiatlization
  _reset() {
    this._res = [], this._parents = [{
      type: Ue.PARENT.ARRAY,
      length: -1,
      ref: this._res,
      values: 0,
      tmpKey: null
    }];
  }
  // -- Interface to customize deoding behaviour
  createTag(e, r) {
    const n = this._knownTags[e];
    return n ? n(r) : new Vf(e, r);
  }
  createMap(e, r) {
    return e;
  }
  createObject(e, r) {
    return e;
  }
  createArray(e, r) {
    return e;
  }
  createByteString(e, r) {
    return Tr.concat(e);
  }
  createByteStringFromHeap(e, r) {
    return e === r ? Tr.alloc(0) : Tr.from(this._heap.slice(e, r));
  }
  createInt(e) {
    return e;
  }
  createInt32(e, r) {
    return st.buildInt32(e, r);
  }
  createInt64(e, r, n, i) {
    return st.buildInt64(e, r, n, i);
  }
  createFloat(e) {
    return e;
  }
  createFloatSingle(e, r, n, i) {
    return Hs.read([e, r, n, i], 0, !1, 23, 4);
  }
  createFloatDouble(e, r, n, i, s, c, a, d) {
    return Hs.read([e, r, n, i, s, c, a, d], 0, !1, 52, 8);
  }
  createInt32Neg(e, r) {
    return -1 - st.buildInt32(e, r);
  }
  createInt64Neg(e, r, n, i) {
    const s = st.buildInt32(e, r), c = st.buildInt32(n, i);
    return s > Ue.MAX_SAFE_HIGH ? Ue.NEG_ONE.minus(new qf(s).times(Ue.SHIFT32).plus(c)) : -1 - (s * Ue.SHIFT32 + c);
  }
  createTrue() {
    return !0;
  }
  createFalse() {
    return !1;
  }
  createNull() {
    return null;
  }
  createUndefined() {
  }
  createInfinity() {
    return 1 / 0;
  }
  createInfinityNeg() {
    return -1 / 0;
  }
  createNaN() {
    return NaN;
  }
  createNaNNeg() {
    return NaN;
  }
  createUtf8String(e, r) {
    return e.join("");
  }
  createUtf8StringFromHeap(e, r) {
    return e === r ? "" : this._buffer.toString("utf8", e, r);
  }
  createSimpleUnassigned(e) {
    return new Hf(e);
  }
  // -- Interface for decoder.asm.js
  pushInt(e) {
    this._push(this.createInt(e));
  }
  pushInt32(e, r) {
    this._push(this.createInt32(e, r));
  }
  pushInt64(e, r, n, i) {
    this._push(this.createInt64(e, r, n, i));
  }
  pushFloat(e) {
    this._push(this.createFloat(e));
  }
  pushFloatSingle(e, r, n, i) {
    this._push(this.createFloatSingle(e, r, n, i));
  }
  pushFloatDouble(e, r, n, i, s, c, a, d) {
    this._push(this.createFloatDouble(e, r, n, i, s, c, a, d));
  }
  pushInt32Neg(e, r) {
    this._push(this.createInt32Neg(e, r));
  }
  pushInt64Neg(e, r, n, i) {
    this._push(this.createInt64Neg(e, r, n, i));
  }
  pushTrue() {
    this._push(this.createTrue());
  }
  pushFalse() {
    this._push(this.createFalse());
  }
  pushNull() {
    this._push(this.createNull());
  }
  pushUndefined() {
    this._push(this.createUndefined());
  }
  pushInfinity() {
    this._push(this.createInfinity());
  }
  pushInfinityNeg() {
    this._push(this.createInfinityNeg());
  }
  pushNaN() {
    this._push(this.createNaN());
  }
  pushNaNNeg() {
    this._push(this.createNaNNeg());
  }
  pushArrayStart() {
    this._createParent([], Ue.PARENT.ARRAY, -1);
  }
  pushArrayStartFixed(e) {
    this._createArrayStartFixed(e);
  }
  pushArrayStartFixed32(e, r) {
    const n = st.buildInt32(e, r);
    this._createArrayStartFixed(n);
  }
  pushArrayStartFixed64(e, r, n, i) {
    const s = st.buildInt64(e, r, n, i);
    this._createArrayStartFixed(s);
  }
  pushObjectStart() {
    this._createObjectStartFixed(-1);
  }
  pushObjectStartFixed(e) {
    this._createObjectStartFixed(e);
  }
  pushObjectStartFixed32(e, r) {
    const n = st.buildInt32(e, r);
    this._createObjectStartFixed(n);
  }
  pushObjectStartFixed64(e, r, n, i) {
    const s = st.buildInt64(e, r, n, i);
    this._createObjectStartFixed(s);
  }
  pushByteStringStart() {
    this._parents[this._depth] = {
      type: Ue.PARENT.BYTE_STRING,
      length: -1,
      ref: [],
      values: 0,
      tmpKey: null
    };
  }
  pushByteString(e, r) {
    this._push(this.createByteStringFromHeap(e, r));
  }
  pushUtf8StringStart() {
    this._parents[this._depth] = {
      type: Ue.PARENT.UTF8_STRING,
      length: -1,
      ref: [],
      values: 0,
      tmpKey: null
    };
  }
  pushUtf8String(e, r) {
    this._push(this.createUtf8StringFromHeap(e, r));
  }
  pushSimpleUnassigned(e) {
    this._push(this.createSimpleUnassigned(e));
  }
  pushTagStart(e) {
    this._parents[this._depth] = {
      type: Ue.PARENT.TAG,
      length: 1,
      ref: [e]
    };
  }
  pushTagStart4(e, r) {
    this.pushTagStart(st.buildInt32(e, r));
  }
  pushTagStart8(e, r, n, i) {
    this.pushTagStart(st.buildInt64(e, r, n, i));
  }
  pushTagUnassigned(e) {
    this._push(this.createTag(e));
  }
  pushBreak() {
    if (this._currentParent.length > -1)
      throw new Error("Unexpected break");
    this._closeParent();
  }
  _createObjectStartFixed(e) {
    if (e === 0) {
      this._push(this.createObject({}));
      return;
    }
    this._createParent({}, Ue.PARENT.OBJECT, e);
  }
  _createArrayStartFixed(e) {
    if (e === 0) {
      this._push(this.createArray([]));
      return;
    }
    this._createParent(new Array(e), Ue.PARENT.ARRAY, e);
  }
  _decode(e) {
    if (e.byteLength === 0)
      throw new Error("Input too short");
    this._reset(), this._heap8.set(e);
    const r = this.parser.parse(e.byteLength);
    if (this._depth > 1) {
      for (; this._currentParent.length === 0; )
        this._closeParent();
      if (this._depth > 1)
        throw new Error("Undeterminated nesting");
    }
    if (r > 0)
      throw new Error("Failed to parse");
    if (this._res.length === 0)
      throw new Error("No valid result");
  }
  // -- Public Interface
  decodeFirst(e) {
    return this._decode(e), this._res[0];
  }
  decodeAll(e) {
    return this._decode(e), this._res;
  }
  /**
   * Decode the first cbor object.
   *
   * @param {Buffer|string} input
   * @param {string} [enc='hex'] - Encoding used if a string is passed.
   * @returns {*}
   */
  static decode(e, r) {
    return typeof e == "string" && (e = Tr.from(e, r || "hex")), new Zi({ size: e.length }).decodeFirst(e);
  }
  /**
   * Decode all cbor objects.
   *
   * @param {Buffer|string} input
   * @param {string} [enc='hex'] - Encoding used if a string is passed.
   * @returns {Array<*>}
   */
  static decodeAll(e, r) {
    return typeof e == "string" && (e = Tr.from(e, r || "hex")), new Zi({ size: e.length }).decodeAll(e);
  }
};
Yi.decodeFirst = Yi.decode;
var bc = Yi;
const { Buffer: H0 } = ln, Wf = bc, Lf = B0;
class gs extends Wf {
  createTag(e, r) {
    return `${e}(${r})`;
  }
  createInt(e) {
    return super.createInt(e).toString();
  }
  createInt32(e, r) {
    return super.createInt32(e, r).toString();
  }
  createInt64(e, r, n, i) {
    return super.createInt64(e, r, n, i).toString();
  }
  createInt32Neg(e, r) {
    return super.createInt32Neg(e, r).toString();
  }
  createInt64Neg(e, r, n, i) {
    return super.createInt64Neg(e, r, n, i).toString();
  }
  createTrue() {
    return "true";
  }
  createFalse() {
    return "false";
  }
  createFloat(e) {
    const r = super.createFloat(e);
    return Lf.isNegativeZero(e) ? "-0_1" : `${r}_1`;
  }
  createFloatSingle(e, r, n, i) {
    return `${super.createFloatSingle(e, r, n, i)}_2`;
  }
  createFloatDouble(e, r, n, i, s, c, a, d) {
    return `${super.createFloatDouble(e, r, n, i, s, c, a, d)}_3`;
  }
  createByteString(e, r) {
    const n = e.join(", ");
    return r === -1 ? `(_ ${n})` : `h'${n}`;
  }
  createByteStringFromHeap(e, r) {
    return `h'${H0.from(
      super.createByteStringFromHeap(e, r)
    ).toString("hex")}'`;
  }
  createInfinity() {
    return "Infinity_1";
  }
  createInfinityNeg() {
    return "-Infinity_1";
  }
  createNaN() {
    return "NaN_1";
  }
  createNaNNeg() {
    return "-NaN_1";
  }
  createNull() {
    return "null";
  }
  createUndefined() {
    return "undefined";
  }
  createSimpleUnassigned(e) {
    return `simple(${e})`;
  }
  createArray(e, r) {
    const n = super.createArray(e, r);
    return r === -1 ? `[_ ${n.join(", ")}]` : `[${n.join(", ")}]`;
  }
  createMap(e, r) {
    const n = super.createMap(e), i = Array.from(n.keys()).reduce(Vs(n), "");
    return r === -1 ? `{_ ${i}}` : `{${i}}`;
  }
  createObject(e, r) {
    const n = super.createObject(e), i = Object.keys(n).reduce(Vs(n), "");
    return r === -1 ? `{_ ${i}}` : `{${i}}`;
  }
  createUtf8String(e, r) {
    const n = e.join(", ");
    return r === -1 ? `(_ ${n})` : `"${n}"`;
  }
  createUtf8StringFromHeap(e, r) {
    return `"${H0.from(
      super.createUtf8StringFromHeap(e, r)
    ).toString("utf8")}"`;
  }
  static diagnose(e, r) {
    return typeof e == "string" && (e = H0.from(e, r || "hex")), new gs().decodeFirst(e);
  }
}
var Kf = gs;
function Vs(t) {
  return (e, r) => e ? `${e}, ${r}: ${t[r]}` : `${r}: ${t[r]}`;
}
const { Buffer: Nt } = ln, { URL: Yf } = wc, Qi = v0.BigNumber, V0 = B0, Ye = it, wt = Ye.MT, mn = Ye.NUMBYTES, Gs = Ye.SHIFT32, Ws = Ye.SYMS, Sr = Ye.TAG, Zf = Ye.MT.SIMPLE_FLOAT << 5 | Ye.NUMBYTES.TWO, Qf = Ye.MT.SIMPLE_FLOAT << 5 | Ye.NUMBYTES.FOUR, Xf = Ye.MT.SIMPLE_FLOAT << 5 | Ye.NUMBYTES.EIGHT, Jf = Ye.MT.SIMPLE_FLOAT << 5 | Ye.SIMPLE.TRUE, el = Ye.MT.SIMPLE_FLOAT << 5 | Ye.SIMPLE.FALSE, tl = Ye.MT.SIMPLE_FLOAT << 5 | Ye.SIMPLE.UNDEFINED, Ls = Ye.MT.SIMPLE_FLOAT << 5 | Ye.SIMPLE.NULL, rl = new Qi("0x20000000000000"), nl = Nt.from("f97e00", "hex"), il = Nt.from("f9fc00", "hex"), sl = Nt.from("f97c00", "hex");
function al(t) {
  return {}.toString.call(t).slice(8, -1);
}
class c0 {
  /**
   * @param {Object} [options={}]
   * @param {function(Buffer)} options.stream
   */
  constructor(e) {
    e = e || {}, this.streaming = typeof e.stream == "function", this.onData = e.stream, this.semanticTypes = [
      [Yf, this._pushUrl],
      [Qi, this._pushBigNumber]
    ];
    const r = e.genTypes || [], n = r.length;
    for (let i = 0; i < n; i++)
      this.addSemanticType(
        r[i][0],
        r[i][1]
      );
    this._reset();
  }
  addSemanticType(e, r) {
    const n = this.semanticTypes.length;
    for (let i = 0; i < n; i++)
      if (this.semanticTypes[i][0] === e) {
        const c = this.semanticTypes[i][1];
        return this.semanticTypes[i][1] = r, c;
      }
    return this.semanticTypes.push([e, r]), null;
  }
  push(e) {
    return e && (this.result[this.offset] = e, this.resultMethod[this.offset] = 0, this.resultLength[this.offset] = e.length, this.offset++, this.streaming && this.onData(this.finalize())), !0;
  }
  pushWrite(e, r, n) {
    return this.result[this.offset] = e, this.resultMethod[this.offset] = r, this.resultLength[this.offset] = n, this.offset++, this.streaming && this.onData(this.finalize()), !0;
  }
  _pushUInt8(e) {
    return this.pushWrite(e, 1, 1);
  }
  _pushUInt16BE(e) {
    return this.pushWrite(e, 2, 2);
  }
  _pushUInt32BE(e) {
    return this.pushWrite(e, 3, 4);
  }
  _pushDoubleBE(e) {
    return this.pushWrite(e, 4, 8);
  }
  _pushNaN() {
    return this.push(nl);
  }
  _pushInfinity(e) {
    const r = e < 0 ? il : sl;
    return this.push(r);
  }
  _pushFloat(e) {
    const r = Nt.allocUnsafe(2);
    if (V0.writeHalf(r, e) && V0.parseHalf(r) === e)
      return this._pushUInt8(Zf) && this.push(r);
    const n = Nt.allocUnsafe(4);
    return n.writeFloatBE(e, 0), n.readFloatBE(0) === e ? this._pushUInt8(Qf) && this.push(n) : this._pushUInt8(Xf) && this._pushDoubleBE(e);
  }
  _pushInt(e, r, n) {
    const i = r << 5;
    return e < 24 ? this._pushUInt8(i | e) : e <= 255 ? this._pushUInt8(i | mn.ONE) && this._pushUInt8(e) : e <= 65535 ? this._pushUInt8(i | mn.TWO) && this._pushUInt16BE(e) : e <= 4294967295 ? this._pushUInt8(i | mn.FOUR) && this._pushUInt32BE(e) : e <= Number.MAX_SAFE_INTEGER ? this._pushUInt8(i | mn.EIGHT) && this._pushUInt32BE(Math.floor(e / Gs)) && this._pushUInt32BE(e % Gs) : r === wt.NEG_INT ? this._pushFloat(n) : this._pushFloat(e);
  }
  _pushIntNum(e) {
    return e < 0 ? this._pushInt(-e - 1, wt.NEG_INT, e) : this._pushInt(e, wt.POS_INT);
  }
  _pushNumber(e) {
    switch (!1) {
      case e === e:
        return this._pushNaN(e);
      case isFinite(e):
        return this._pushInfinity(e);
      case e % 1 !== 0:
        return this._pushIntNum(e);
      default:
        return this._pushFloat(e);
    }
  }
  _pushString(e) {
    const r = Nt.byteLength(e, "utf8");
    return this._pushInt(r, wt.UTF8_STRING) && this.pushWrite(e, 5, r);
  }
  _pushBoolean(e) {
    return this._pushUInt8(e ? Jf : el);
  }
  _pushUndefined(e) {
    return this._pushUInt8(tl);
  }
  _pushArray(e, r) {
    const n = r.length;
    if (!e._pushInt(n, wt.ARRAY))
      return !1;
    for (let i = 0; i < n; i++)
      if (!e.pushAny(r[i]))
        return !1;
    return !0;
  }
  _pushTag(e) {
    return this._pushInt(e, wt.TAG);
  }
  _pushDate(e, r) {
    return e._pushTag(Sr.DATE_EPOCH) && e.pushAny(Math.round(r / 1e3));
  }
  _pushBuffer(e, r) {
    return e._pushInt(r.length, wt.BYTE_STRING) && e.push(r);
  }
  _pushNoFilter(e, r) {
    return e._pushBuffer(e, r.slice());
  }
  _pushRegexp(e, r) {
    return e._pushTag(Sr.REGEXP) && e.pushAny(r.source);
  }
  _pushSet(e, r) {
    if (!e._pushInt(r.size, wt.ARRAY))
      return !1;
    for (const n of r)
      if (!e.pushAny(n))
        return !1;
    return !0;
  }
  _pushUrl(e, r) {
    return e._pushTag(Sr.URI) && e.pushAny(r.format());
  }
  _pushBigint(e) {
    let r = Sr.POS_BIGINT;
    e.isNegative() && (e = e.negated().minus(1), r = Sr.NEG_BIGINT);
    let n = e.toString(16);
    n.length % 2 && (n = "0" + n);
    const i = Nt.from(n, "hex");
    return this._pushTag(r) && this._pushBuffer(this, i);
  }
  _pushBigNumber(e, r) {
    if (r.isNaN())
      return e._pushNaN();
    if (!r.isFinite())
      return e._pushInfinity(r.isNegative() ? -1 / 0 : 1 / 0);
    if (r.isInteger())
      return e._pushBigint(r);
    if (!(e._pushTag(Sr.DECIMAL_FRAC) && e._pushInt(2, wt.ARRAY)))
      return !1;
    const n = r.decimalPlaces(), i = r.multipliedBy(new Qi(10).pow(n));
    return e._pushIntNum(-n) ? i.abs().isLessThan(rl) ? e._pushIntNum(i.toNumber()) : e._pushBigint(i) : !1;
  }
  _pushMap(e, r) {
    return e._pushInt(r.size, wt.MAP) ? this._pushRawMap(
      r.size,
      Array.from(r)
    ) : !1;
  }
  _pushObject(e) {
    if (!e)
      return this._pushUInt8(Ls);
    for (var r = this.semanticTypes.length, n = 0; n < r; n++)
      if (e instanceof this.semanticTypes[n][0])
        return this.semanticTypes[n][1].call(e, this, e);
    var i = e.encodeCBOR;
    if (typeof i == "function")
      return i.call(e, this);
    var s = Object.keys(e), c = s.length;
    return this._pushInt(c, wt.MAP) ? this._pushRawMap(
      c,
      s.map((a) => [a, e[a]])
    ) : !1;
  }
  _pushRawMap(e, r) {
    r = r.map(function(i) {
      return i[0] = c0.encode(i[0]), i;
    }).sort(V0.keySorter);
    for (var n = 0; n < e; n++)
      if (!this.push(r[n][0]) || !this.pushAny(r[n][1]))
        return !1;
    return !0;
  }
  /**
   * Alias for `.pushAny`
   *
   * @param {*} obj
   * @returns {boolean} true on success
   */
  write(e) {
    return this.pushAny(e);
  }
  /**
   * Push any supported type onto the encoded stream
   *
   * @param {any} obj
   * @returns {boolean} true on success
   */
  pushAny(e) {
    var r = al(e);
    switch (r) {
      case "Number":
        return this._pushNumber(e);
      case "String":
        return this._pushString(e);
      case "Boolean":
        return this._pushBoolean(e);
      case "Object":
        return this._pushObject(e);
      case "Array":
        return this._pushArray(this, e);
      case "Uint8Array":
        return this._pushBuffer(this, Nt.isBuffer(e) ? e : Nt.from(e));
      case "Null":
        return this._pushUInt8(Ls);
      case "Undefined":
        return this._pushUndefined(e);
      case "Map":
        return this._pushMap(this, e);
      case "Set":
        return this._pushSet(this, e);
      case "URL":
        return this._pushUrl(this, e);
      case "BigNumber":
        return this._pushBigNumber(this, e);
      case "Date":
        return this._pushDate(this, e);
      case "RegExp":
        return this._pushRegexp(this, e);
      case "Symbol":
        switch (e) {
          case Ws.NULL:
            return this._pushObject(null);
          case Ws.UNDEFINED:
            return this._pushUndefined(void 0);
          default:
            throw new Error("Unknown symbol: " + e.toString());
        }
      default:
        throw new Error("Unknown type: " + typeof e + ", " + (e ? e.toString() : ""));
    }
  }
  finalize() {
    if (this.offset === 0)
      return null;
    for (var e = this.result, r = this.resultLength, n = this.resultMethod, i = this.offset, s = 0, c = 0; c < i; c++)
      s += r[c];
    var a = Nt.allocUnsafe(s), d = 0, l = 0;
    for (c = 0; c < i; c++) {
      switch (l = r[c], n[c]) {
        case 0:
          e[c].copy(a, d);
          break;
        case 1:
          a.writeUInt8(e[c], d, !0);
          break;
        case 2:
          a.writeUInt16BE(e[c], d, !0);
          break;
        case 3:
          a.writeUInt32BE(e[c], d, !0);
          break;
        case 4:
          a.writeDoubleBE(e[c], d, !0);
          break;
        case 5:
          a.write(e[c], d, l, "utf8");
          break;
        default:
          throw new Error("unkown method");
      }
      d += l;
    }
    var p = a;
    return this._reset(), p;
  }
  _reset() {
    this.result = [], this.resultMethod = [], this.resultLength = [], this.offset = 0;
  }
  /**
   * Encode the given value
   * @param {*} o
   * @returns {Buffer}
   */
  static encode(e) {
    const r = new c0();
    if (!r.pushAny(e))
      throw new Error("Failed to encode input");
    return r.finalize();
  }
}
var ol = c0;
(function(t) {
  t.Diagnose = Kf, t.Decoder = bc, t.Encoder = ol, t.Simple = xc, t.Tagged = pc, t.decodeAll = t.Decoder.decodeAll, t.decodeFirst = t.Decoder.decodeFirst, t.diagnose = t.Diagnose.diagnose, t.encode = t.Encoder.encode, t.decode = t.Decoder.decode, t.leveldb = {
    decode: t.Decoder.decodeAll,
    encode: t.Encoder.encode,
    buffer: !0,
    name: "cbor"
  };
})(hc);
const mc = /* @__PURE__ */ mo(hc);
function Bt(...t) {
  const e = new Uint8Array(t.reduce((n, i) => n + i.byteLength, 0));
  let r = 0;
  for (const n of t)
    e.set(new Uint8Array(n), r), r += n.byteLength;
  return e.buffer;
}
function tt(t) {
  return [...new Uint8Array(t)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
const cl = new RegExp(/^[0-9a-fA-F]+$/);
function $t(t) {
  if (!cl.test(t))
    throw new Error("Invalid hexadecimal string.");
  const e = [...t].reduce((r, n, i) => (r[i / 2 | 0] = (r[i / 2 | 0] || "") + n, r), []).map((r) => Number.parseInt(r, 16));
  return new Uint8Array(e).buffer;
}
function _c(t, e) {
  if (t.byteLength !== e.byteLength)
    return t.byteLength - e.byteLength;
  const r = new Uint8Array(t), n = new Uint8Array(e);
  for (let i = 0; i < r.length; i++)
    if (r[i] !== n[i])
      return r[i] - n[i];
  return 0;
}
function A0(t, e) {
  return _c(t, e) === 0;
}
function Jr(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength).buffer;
}
function ws(t) {
  return t instanceof Uint8Array ? Jr(t) : t instanceof ArrayBuffer ? t : Array.isArray(t) ? Jr(new Uint8Array(t)) : "buffer" in t ? ws(t.buffer) : Jr(new Uint8Array(t));
}
function vt(t) {
  return Jr(ls.create().update(new Uint8Array(t)).digest());
}
function kn(t) {
  if (t instanceof mc.Tagged)
    return kn(t.value);
  if (typeof t == "string")
    return Ec(t);
  if (typeof t == "number")
    return vt(qe(t));
  if (t instanceof ArrayBuffer || ArrayBuffer.isView(t))
    return vt(t);
  if (Array.isArray(t)) {
    const e = t.map(kn);
    return vt(Bt(...e));
  } else {
    if (t && typeof t == "object" && t._isPrincipal)
      return vt(t.toUint8Array());
    if (typeof t == "object" && t !== null && typeof t.toHash == "function")
      return kn(t.toHash());
    if (typeof t == "object")
      return u0(t);
    if (typeof t == "bigint")
      return vt(qe(t));
  }
  throw Object.assign(new Error(`Attempt to hash a value of unsupported type: ${t}`), {
    // include so logs/callers can understand the confusing value.
    // (when stringified in error message, prototype info is lost)
    value: t
  });
}
const Ec = (t) => {
  const e = new TextEncoder().encode(t);
  return vt(e);
};
function sn(t) {
  return u0(t);
}
function u0(t) {
  const n = Object.entries(t).filter(([, c]) => c !== void 0).map(([c, a]) => {
    const d = Ec(c), l = kn(a);
    return [d, l];
  }).sort(([c], [a]) => _c(c, a)), i = Bt(...n.map((c) => Bt(...c)));
  return vt(i);
}
var ul = globalThis && globalThis.__rest || function(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
};
const fl = new TextEncoder().encode(`
ic-request`);
class bs {
  /**
   * Get the principal represented by this identity. Normally should be a
   * `Principal.selfAuthenticating()`.
   */
  getPrincipal() {
    return this._principal || (this._principal = Ee.selfAuthenticating(new Uint8Array(this.getPublicKey().toDer()))), this._principal;
  }
  /**
   * Transform a request into a signed version of the request. This is done last
   * after the transforms on the body of a request. The returned object can be
   * anything, but must be serializable to CBOR.
   * @param request - internet computer request to transform
   */
  async transformRequest(e) {
    const { body: r } = e, n = ul(e, ["body"]), i = await sn(r);
    return Object.assign(Object.assign({}, n), { body: {
      content: r,
      sender_pubkey: this.getPublicKey().toDer(),
      sender_sig: await this.sign(Bt(fl, i))
    } });
  }
}
class qr {
  getPrincipal() {
    return Ee.anonymous();
  }
  async transformRequest(e) {
    return Object.assign(Object.assign({}, e), { body: { content: e.body } });
  }
}
var lt = {}, Vr = {}, ke = {};
Object.defineProperty(ke, "__esModule", { value: !0 });
const ll = 9007199254740992;
function Vt(t, ...e) {
  const r = new Uint8Array(t.byteLength + e.reduce((i, s) => i + s.byteLength, 0));
  r.set(new Uint8Array(t), 0);
  let n = t.byteLength;
  for (const i of e)
    r.set(new Uint8Array(i), n), n += i.byteLength;
  return r.buffer;
}
function At(t, e, r) {
  r = r.replace(/[^0-9a-fA-F]/g, "");
  const n = 2 ** (e - 24);
  r = r.slice(-n * 2).padStart(n * 2, "0");
  const i = [(t << 5) + e].concat(r.match(/../g).map((s) => parseInt(s, 16)));
  return new Uint8Array(i).buffer;
}
function C0(t, e) {
  if (e < 24)
    return new Uint8Array([(t << 5) + e]).buffer;
  {
    const r = e <= 255 ? 24 : e <= 65535 ? 25 : e <= 4294967295 ? 26 : 27;
    return At(t, r, e.toString(16));
  }
}
function vc(t) {
  const e = [];
  for (let r = 0; r < t.length; r++) {
    let n = t.charCodeAt(r);
    n < 128 ? e.push(n) : n < 2048 ? e.push(192 | n >> 6, 128 | n & 63) : n < 55296 || n >= 57344 ? e.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | n & 63) : (r++, n = (n & 1023) << 10 | t.charCodeAt(r) & 1023, e.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | n & 63));
  }
  return Vt(new Uint8Array(C0(3, t.length)), new Uint8Array(e));
}
function hl(t, e) {
  if (t == 14277111)
    return Vt(new Uint8Array([217, 217, 247]), e);
  if (t < 24)
    return Vt(new Uint8Array([192 + t]), e);
  {
    const r = t <= 255 ? 24 : t <= 65535 ? 25 : t <= 4294967295 ? 26 : 27, n = 2 ** (r - 24), i = t.toString(16).slice(-n * 2).padStart(n * 2, "0"), s = [192 + r].concat(i.match(/../g).map((c) => parseInt(c, 16)));
    return new Uint8Array(s).buffer;
  }
}
ke.tagged = hl;
function hn(t) {
  return new Uint8Array(t).buffer;
}
ke.raw = hn;
function ms(t) {
  if (isNaN(t))
    throw new RangeError("Invalid number.");
  t = Math.min(Math.max(0, t), 23);
  const e = [0 + t];
  return new Uint8Array(e).buffer;
}
ke.uSmall = ms;
function Bc(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, t), 255), t = t.toString(16), At(0, 24, t);
}
ke.u8 = Bc;
function Ac(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, t), 65535), t = t.toString(16), At(0, 25, t);
}
ke.u16 = Ac;
function Cc(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, t), 4294967295), t = t.toString(16), At(0, 26, t);
}
ke.u32 = Cc;
function _s(t, e) {
  if (typeof t == "string" && e == 16) {
    if (t.match(/[^0-9a-fA-F]/))
      throw new RangeError("Invalid number.");
    return At(0, 27, t);
  }
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, t), ll), t = t.toString(16), At(0, 27, t);
}
ke.u64 = _s;
function Fc(t) {
  if (isNaN(t))
    throw new RangeError("Invalid number.");
  if (t === 0)
    return ms(0);
  t = Math.min(Math.max(0, -t), 24) - 1;
  const e = [32 + t];
  return new Uint8Array(e).buffer;
}
ke.iSmall = Fc;
function Tc(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, -t - 1), 255), t = t.toString(16), At(1, 24, t);
}
ke.i8 = Tc;
function Sc(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, -t - 1), 65535), t = t.toString(16), At(1, 25, t);
}
ke.i16 = Sc;
function Nc(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, -t - 1), 4294967295), t = t.toString(16), At(1, 26, t);
}
ke.i32 = Nc;
function Rc(t, e) {
  if (typeof t == "string" && e == 16) {
    if (t.startsWith("-") ? t = t.slice(1) : t = "0", t.match(/[^0-9a-fA-F]/) || t.length > 16)
      throw new RangeError("Invalid number.");
    let r = !1, n = t.split("").reduceRight((i, s) => {
      if (r)
        return s + i;
      let c = parseInt(s, 16) - 1;
      return c >= 0 ? (r = !0, c.toString(16) + i) : "f" + i;
    }, "");
    return r ? At(1, 27, n) : _s(0);
  }
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, -t - 1), 9007199254740992), t = t.toString(16), At(1, 27, t);
}
ke.i64 = Rc;
function dl(t) {
  return t >= 0 ? t < 24 ? ms(t) : t <= 255 ? Bc(t) : t <= 65535 ? Ac(t) : t <= 4294967295 ? Cc(t) : _s(t) : t >= -24 ? Fc(t) : t >= -255 ? Tc(t) : t >= -65535 ? Sc(t) : t >= -4294967295 ? Nc(t) : Rc(t);
}
ke.number = dl;
function xl(t) {
  return Vt(C0(2, t.byteLength), t);
}
ke.bytes = xl;
function pl(t) {
  return vc(t);
}
ke.string = pl;
function yl(t) {
  return Vt(C0(4, t.length), ...t);
}
ke.array = yl;
function gl(t, e = !1) {
  t instanceof Map || (t = new Map(Object.entries(t)));
  let r = Array.from(t.entries());
  return e && (r = r.sort(([n], [i]) => n.localeCompare(i))), Vt(C0(5, t.size), ...r.map(([n, i]) => Vt(vc(n), i)));
}
ke.map = gl;
function wl(t) {
  const e = new Float32Array([t]);
  return Vt(new Uint8Array([224 + 26]), new Uint8Array(e.buffer));
}
ke.singleFloat = wl;
function bl(t) {
  const e = new Float64Array([t]);
  return Vt(new Uint8Array([224 + 27]), new Uint8Array(e.buffer));
}
ke.doubleFloat = bl;
function ml(t) {
  return t ? Oc() : Mc();
}
ke.bool = ml;
function Oc() {
  return hn(new Uint8Array([224 + 21]));
}
ke.true_ = Oc;
function Mc() {
  return hn(new Uint8Array([224 + 20]));
}
ke.false_ = Mc;
function _l() {
  return hn(new Uint8Array([224 + 22]));
}
ke.null_ = _l;
function El() {
  return hn(new Uint8Array([224 + 23]));
}
ke.undefined_ = El;
var vl = ve && ve.__importStar || function(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
};
Object.defineProperty(Vr, "__esModule", { value: !0 });
const mt = vl(ke), Bl = [
  ArrayBuffer,
  Uint8Array,
  Uint16Array,
  Uint32Array,
  Int8Array,
  Int16Array,
  Int32Array,
  Float32Array,
  Float64Array
];
class Uc {
  // @param _serializer The CBOR Serializer to use.
  // @param _stable Whether or not keys from objects should be sorted (stable). This is
  //     particularly useful when testing encodings between JSON objects.
  constructor(e, r = !1) {
    this._serializer = e, this._stable = r, this.name = "jsonDefault", this.priority = -100;
  }
  match(e) {
    return ["undefined", "boolean", "number", "string", "object"].indexOf(typeof e) != -1;
  }
  encode(e) {
    switch (typeof e) {
      case "undefined":
        return mt.undefined_();
      case "boolean":
        return mt.bool(e);
      case "number":
        return Math.floor(e) === e ? mt.number(e) : mt.doubleFloat(e);
      case "string":
        return mt.string(e);
      case "object":
        if (e === null)
          return mt.null_();
        if (Array.isArray(e))
          return mt.array(e.map((r) => this._serializer.serializeValue(r)));
        if (Bl.find((r) => e instanceof r))
          return mt.bytes(e.buffer);
        if (Object.getOwnPropertyNames(e).indexOf("toJSON") !== -1)
          return this.encode(e.toJSON());
        if (e instanceof Map) {
          const r = /* @__PURE__ */ new Map();
          for (const [n, i] of e.entries())
            r.set(n, this._serializer.serializeValue(i));
          return mt.map(r, this._stable);
        } else {
          const r = /* @__PURE__ */ new Map();
          for (const [n, i] of Object.entries(e))
            r.set(n, this._serializer.serializeValue(i));
          return mt.map(r, this._stable);
        }
      default:
        throw new Error("Invalid value.");
    }
  }
}
Vr.JsonDefaultCborEncoder = Uc;
class Ic {
  constructor() {
    this.name = "cborEncoder", this.priority = -90;
  }
  match(e) {
    return typeof e == "object" && typeof e.toCBOR == "function";
  }
  encode(e) {
    return e.toCBOR();
  }
}
Vr.ToCborEncoder = Ic;
class kc {
  constructor() {
    this._encoders = /* @__PURE__ */ new Set();
  }
  static withDefaultEncoders(e = !1) {
    const r = new this();
    return r.addEncoder(new Uc(r, e)), r.addEncoder(new Ic()), r;
  }
  removeEncoder(e) {
    for (const r of this._encoders.values())
      r.name == e && this._encoders.delete(r);
  }
  addEncoder(e) {
    this._encoders.add(e);
  }
  getEncoderFor(e) {
    let r = null;
    for (const n of this._encoders)
      (!r || n.priority > r.priority) && n.match(e) && (r = n);
    if (r === null)
      throw new Error("Could not find an encoder for value.");
    return r;
  }
  serializeValue(e) {
    return this.getEncoderFor(e).encode(e);
  }
  serialize(e) {
    return this.serializeValue(e);
  }
}
Vr.CborSerializer = kc;
class Al extends kc {
  serialize(e) {
    return mt.raw(new Uint8Array([
      // Self describe CBOR.
      ...new Uint8Array([217, 217, 247]),
      ...new Uint8Array(super.serializeValue(e))
    ]));
  }
}
Vr.SelfDescribeCborSerializer = Al;
(function(t) {
  function e(i) {
    for (var s in i)
      t.hasOwnProperty(s) || (t[s] = i[s]);
  }
  var r = ve && ve.__importStar || function(i) {
    if (i && i.__esModule)
      return i;
    var s = {};
    if (i != null)
      for (var c in i)
        Object.hasOwnProperty.call(i, c) && (s[c] = i[c]);
    return s.default = i, s;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), e(Vr);
  const n = r(ke);
  t.value = n;
})(lt);
class Cl {
  get name() {
    return "Principal";
  }
  get priority() {
    return 0;
  }
  match(e) {
    return e && e._isPrincipal === !0;
  }
  encode(e) {
    return lt.value.bytes(e.toUint8Array());
  }
}
class Fl {
  get name() {
    return "Buffer";
  }
  get priority() {
    return 1;
  }
  match(e) {
    return e instanceof ArrayBuffer || ArrayBuffer.isView(e);
  }
  encode(e) {
    return lt.value.bytes(new Uint8Array(e));
  }
}
class Tl {
  get name() {
    return "BigInt";
  }
  get priority() {
    return 1;
  }
  match(e) {
    return typeof e == "bigint";
  }
  encode(e) {
    return e > BigInt(0) ? lt.value.tagged(2, lt.value.bytes($t(e.toString(16)))) : lt.value.tagged(3, lt.value.bytes($t((BigInt("-1") * e).toString(16))));
  }
}
const F0 = lt.SelfDescribeCborSerializer.withDefaultEncoders(!0);
F0.addEncoder(new Cl());
F0.addEncoder(new Fl());
F0.addEncoder(new Tl());
var Xi;
(function(t) {
  t[t.Uint64LittleEndian = 71] = "Uint64LittleEndian", t[t.Semantic = 55799] = "Semantic";
})(Xi || (Xi = {}));
function G0(t) {
  return F0.serialize(t);
}
function Ks(t) {
  const e = t.byteLength;
  let r = BigInt(0);
  for (let n = 0; n < e; n++)
    r = r * BigInt(256) + BigInt(t[n]);
  return r;
}
class Sl extends mc.Decoder {
  createByteString(e) {
    return Bt(...e);
  }
  createByteStringFromHeap(e, r) {
    return e === r ? new ArrayBuffer(0) : new Uint8Array(this._heap.slice(e, r));
  }
}
function jt(t) {
  const e = new Uint8Array(t), r = new Sl({
    size: e.byteLength,
    tags: {
      // Override tags 2 and 3 for BigInt support (borc supports only BigNumber).
      2: (n) => Ks(n),
      3: (n) => -Ks(n),
      [Xi.Semantic]: (n) => n
    }
  });
  try {
    return r.decodeFirst(e);
  } catch (n) {
    throw new Error(`Failed to decode CBOR: ${n}, input: ${tt(e)}`);
  }
}
const _n = () => {
  if (typeof window < "u" && window.crypto && window.crypto.getRandomValues) {
    const t = new Uint32Array(1);
    return window.crypto.getRandomValues(t), t[0];
  }
  if (typeof crypto < "u" && crypto.getRandomValues) {
    const t = new Uint32Array(1);
    return crypto.getRandomValues(t), t[0];
  }
  return typeof crypto < "u" && crypto.randomInt ? crypto.randomInt(0, 4294967295) : Math.floor(Math.random() * 4294967295);
};
var Ji;
(function(t) {
  t.Call = "call";
})(Ji || (Ji = {}));
function es() {
  const t = new ArrayBuffer(16), e = new DataView(t), r = _n(), n = _n(), i = _n(), s = _n();
  return e.setUint32(0, r), e.setUint32(4, n), e.setUint32(8, i), e.setUint32(12, s), t;
}
const Nl = BigInt(1e6), Rl = 60 * 1e3;
class En {
  constructor(e) {
    const s = BigInt(Math.floor(Date.now() + e - Rl)) * Nl / BigInt(1e9) / BigInt(60) * BigInt(60) * BigInt(1e9);
    this._value = s;
  }
  toCBOR() {
    return lt.value.u64(this._value.toString(16), 16);
  }
  toHash() {
    return qe(this._value);
  }
}
function Ys(t = es) {
  return async (e) => {
    const r = e.request.headers;
    e.request.headers = r, e.endpoint === "call" && (e.body.nonce = t());
  };
}
function Pn(t) {
  const e = [];
  return t.forEach((r, n) => {
    e.push([n, r]);
  }), e;
}
class Zs extends ht {
  constructor(e, r) {
    super(e), this.response = r, this.name = this.constructor.name, Object.setPrototypeOf(this, new.target.prototype);
  }
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Pc = /* @__PURE__ */ BigInt(0), Es = /* @__PURE__ */ BigInt(1), Ol = /* @__PURE__ */ BigInt(2);
function T0(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
function fr(t) {
  if (!T0(t))
    throw new Error("Uint8Array expected");
}
function en(t, e) {
  if (typeof e != "boolean")
    throw new Error(`${t} must be valid boolean, got "${e}".`);
}
const Ml = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Br(t) {
  fr(t);
  let e = "";
  for (let r = 0; r < t.length; r++)
    e += Ml[t[r]];
  return e;
}
function Dc(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return BigInt(t === "" ? "0" : `0x${t}`);
}
const kt = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function Qs(t) {
  if (t >= kt._0 && t <= kt._9)
    return t - kt._0;
  if (t >= kt._A && t <= kt._F)
    return t - (kt._A - 10);
  if (t >= kt._a && t <= kt._f)
    return t - (kt._a - 10);
}
function zc(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  const e = t.length, r = e / 2;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const n = new Uint8Array(r);
  for (let i = 0, s = 0; i < r; i++, s += 2) {
    const c = Qs(t.charCodeAt(s)), a = Qs(t.charCodeAt(s + 1));
    if (c === void 0 || a === void 0) {
      const d = t[s] + t[s + 1];
      throw new Error('hex string expected, got non-hex character "' + d + '" at index ' + s);
    }
    n[i] = c * 16 + a;
  }
  return n;
}
function Et(t) {
  return Dc(Br(t));
}
function tn(t) {
  return fr(t), Dc(Br(Uint8Array.from(t).reverse()));
}
function et(t, e) {
  return zc(t.toString(16).padStart(e * 2, "0"));
}
function f0(t, e) {
  return et(t, e).reverse();
}
function ft(t, e, r) {
  let n;
  if (typeof e == "string")
    try {
      n = zc(e);
    } catch (s) {
      throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${s}`);
    }
  else if (T0(e))
    n = Uint8Array.from(e);
  else
    throw new Error(`${t} must be hex string or Uint8Array`);
  const i = n.length;
  if (typeof r == "number" && i !== r)
    throw new Error(`${t} expected ${r} bytes, got ${i}`);
  return n;
}
function We(...t) {
  let e = 0;
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    fr(i), e += i.length;
  }
  const r = new Uint8Array(e);
  for (let n = 0, i = 0; n < t.length; n++) {
    const s = t[n];
    r.set(s, i), i += s.length;
  }
  return r;
}
function vs(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
const W0 = (t) => typeof t == "bigint" && Pc <= t;
function jc(t, e, r) {
  return W0(t) && W0(e) && W0(r) && e <= t && t < r;
}
function nr(t, e, r, n) {
  if (!jc(e, r, n))
    throw new Error(`expected valid ${t}: ${r} <= n < ${n}, got ${typeof e} ${e}`);
}
function Dn(t) {
  let e;
  for (e = 0; t > Pc; t >>= Es, e += 1)
    ;
  return e;
}
function Ul(t, e) {
  return t >> BigInt(e) & Es;
}
const zn = (t) => (Ol << BigInt(t - 1)) - Es, Il = {
  bigint: (t) => typeof t == "bigint",
  function: (t) => typeof t == "function",
  boolean: (t) => typeof t == "boolean",
  string: (t) => typeof t == "string",
  stringOrUint8Array: (t) => typeof t == "string" || T0(t),
  isSafeInteger: (t) => Number.isSafeInteger(t),
  array: (t) => Array.isArray(t),
  field: (t, e) => e.Fp.isValid(t),
  hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function dn(t, e, r = {}) {
  const n = (i, s, c) => {
    const a = Il[s];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${s}", expected function`);
    const d = t[i];
    if (!(c && d === void 0) && !a(d, t))
      throw new Error(`Invalid param ${String(i)}=${d} (${typeof d}), expected ${s}`);
  };
  for (const [i, s] of Object.entries(e))
    n(i, s, !1);
  for (const [i, s] of Object.entries(r))
    n(i, s, !0);
  return t;
}
const Xs = () => {
  throw new Error("not implemented");
};
function an(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (r, ...n) => {
    const i = e.get(r);
    if (i !== void 0)
      return i;
    const s = t(r, ...n);
    return e.set(r, s), s;
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Xe = BigInt(0), De = BigInt(1), ir = BigInt(2), kl = BigInt(3), ts = BigInt(4), Js = BigInt(5), ea = BigInt(8);
BigInt(9);
BigInt(16);
function je(t, e) {
  const r = t % e;
  return r >= Xe ? r : e + r;
}
function Pl(t, e, r) {
  if (r <= Xe || e < Xe)
    throw new Error("Expected power/modulo > 0");
  if (r === De)
    return Xe;
  let n = De;
  for (; e > Xe; )
    e & De && (n = n * t % r), t = t * t % r, e >>= De;
  return n;
}
function Ft(t, e, r) {
  let n = t;
  for (; e-- > Xe; )
    n *= n, n %= r;
  return n;
}
function ta(t, e) {
  if (t === Xe || e <= Xe)
    throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
  let r = je(t, e), n = e, i = Xe, s = De;
  for (; r !== Xe; ) {
    const a = n / r, d = n % r, l = i - s * a;
    n = r, r = d, i = s, s = l;
  }
  if (n !== De)
    throw new Error("invert: does not exist");
  return je(i, e);
}
function Dl(t) {
  const e = (t - De) / ir;
  let r, n, i;
  for (r = t - De, n = 0; r % ir === Xe; r /= ir, n++)
    ;
  for (i = ir; i < t && Pl(i, e, t) !== t - De; i++)
    ;
  if (n === 1) {
    const c = (t + De) / ts;
    return function(d, l) {
      const p = d.pow(l, c);
      if (!d.eql(d.sqr(p), l))
        throw new Error("Cannot find square root");
      return p;
    };
  }
  const s = (r + De) / ir;
  return function(a, d) {
    if (a.pow(d, e) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let l = n, p = a.pow(a.mul(a.ONE, i), r), w = a.pow(d, s), _ = a.pow(d, r);
    for (; !a.eql(_, a.ONE); ) {
      if (a.eql(_, a.ZERO))
        return a.ZERO;
      let m = 1;
      for (let E = a.sqr(_); m < l && !a.eql(E, a.ONE); m++)
        E = a.sqr(E);
      const h = a.pow(p, De << BigInt(l - m - 1));
      p = a.sqr(h), w = a.mul(w, h), _ = a.mul(_, p), l = m;
    }
    return w;
  };
}
function zl(t) {
  if (t % ts === kl) {
    const e = (t + De) / ts;
    return function(n, i) {
      const s = n.pow(i, e);
      if (!n.eql(n.sqr(s), i))
        throw new Error("Cannot find square root");
      return s;
    };
  }
  if (t % ea === Js) {
    const e = (t - Js) / ea;
    return function(n, i) {
      const s = n.mul(i, ir), c = n.pow(s, e), a = n.mul(i, c), d = n.mul(n.mul(a, ir), c), l = n.mul(a, n.sub(d, n.ONE));
      if (!n.eql(n.sqr(l), i))
        throw new Error("Cannot find square root");
      return l;
    };
  }
  return Dl(t);
}
const jl = (t, e) => (je(t, e) & De) === De, ql = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function qc(t) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, r = ql.reduce((n, i) => (n[i] = "function", n), e);
  return dn(t, r);
}
function jn(t, e, r) {
  if (r < Xe)
    throw new Error("Expected power > 0");
  if (r === Xe)
    return t.ONE;
  if (r === De)
    return e;
  let n = t.ONE, i = e;
  for (; r > Xe; )
    r & De && (n = t.mul(n, i)), i = t.sqr(i), r >>= De;
  return n;
}
function qn(t, e) {
  const r = new Array(e.length), n = e.reduce((s, c, a) => t.is0(c) ? s : (r[a] = s, t.mul(s, c)), t.ONE), i = t.inv(n);
  return e.reduceRight((s, c, a) => t.is0(c) ? s : (r[a] = t.mul(s, r[a]), t.mul(s, c)), i), r;
}
function $l(t) {
  const e = (t - De) / ir;
  return (r, n) => r.pow(n, e);
}
function $c(t, e) {
  const r = e !== void 0 ? e : t.toString(2).length, n = Math.ceil(r / 8);
  return { nBitLength: r, nByteLength: n };
}
function Bs(t, e, r = !1, n = {}) {
  if (t <= Xe)
    throw new Error(`Expected Field ORDER > 0, got ${t}`);
  const { nBitLength: i, nByteLength: s } = $c(t, e);
  if (s > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const c = zl(t), a = Object.freeze({
    ORDER: t,
    BITS: i,
    BYTES: s,
    MASK: zn(i),
    ZERO: Xe,
    ONE: De,
    create: (d) => je(d, t),
    isValid: (d) => {
      if (typeof d != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);
      return Xe <= d && d < t;
    },
    is0: (d) => d === Xe,
    isOdd: (d) => (d & De) === De,
    neg: (d) => je(-d, t),
    eql: (d, l) => d === l,
    sqr: (d) => je(d * d, t),
    add: (d, l) => je(d + l, t),
    sub: (d, l) => je(d - l, t),
    mul: (d, l) => je(d * l, t),
    pow: (d, l) => jn(a, d, l),
    div: (d, l) => je(d * ta(l, t), t),
    // Same as above, but doesn't normalize
    sqrN: (d) => d * d,
    addN: (d, l) => d + l,
    subN: (d, l) => d - l,
    mulN: (d, l) => d * l,
    inv: (d) => ta(d, t),
    sqrt: n.sqrt || ((d) => c(a, d)),
    invertBatch: (d) => qn(a, d),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (d, l, p) => p ? l : d,
    toBytes: (d) => r ? f0(d, s) : et(d, s),
    fromBytes: (d) => {
      if (d.length !== s)
        throw new Error(`Fp.fromBytes: expected ${s}, got ${d.length}`);
      return r ? tn(d) : Et(d);
    }
  });
  return Object.freeze(a);
}
function Hc(t) {
  if (typeof t != "bigint")
    throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function Vc(t) {
  const e = Hc(t);
  return e + Math.ceil(e / 2);
}
function Hl(t, e, r = !1) {
  const n = t.length, i = Hc(e), s = Vc(e);
  if (n < 16 || n < s || n > 1024)
    throw new Error(`expected ${s}-1024 bytes of input, got ${n}`);
  const c = r ? Et(t) : tn(t), a = je(c, e - De) + De;
  return r ? f0(a, i) : et(a, i);
}
const Vl = Et;
function Jt(t, e) {
  if (t < 0 || t >= 1 << 8 * e)
    throw new Error(`bad I2OSP call: value=${t} length=${e}`);
  const r = Array.from({ length: e }).fill(0);
  for (let n = e - 1; n >= 0; n--)
    r[n] = t & 255, t >>>= 8;
  return new Uint8Array(r);
}
function Gl(t, e) {
  const r = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++)
    r[n] = t[n] ^ e[n];
  return r;
}
function As(t) {
  if (!Number.isSafeInteger(t))
    throw new Error("number expected");
}
function Wl(t, e, r, n) {
  fr(t), fr(e), As(r), e.length > 255 && (e = n(We(vs("H2C-OVERSIZE-DST-"), e)));
  const { outputLen: i, blockLen: s } = n, c = Math.ceil(r / i);
  if (c > 255)
    throw new Error("Invalid xmd length");
  const a = We(e, Jt(e.length, 1)), d = Jt(0, s), l = Jt(r, 2), p = new Array(c), w = n(We(d, t, l, Jt(0, 1), a));
  p[0] = n(We(w, Jt(1, 1), a));
  for (let m = 1; m <= c; m++) {
    const h = [Gl(w, p[m - 1]), Jt(m + 1, 1), a];
    p[m] = n(We(...h));
  }
  return We(...p).slice(0, r);
}
function Ll(t, e, r, n, i) {
  if (fr(t), fr(e), As(r), e.length > 255) {
    const s = Math.ceil(2 * n / 8);
    e = i.create({ dkLen: s }).update(vs("H2C-OVERSIZE-DST-")).update(e).digest();
  }
  if (r > 65535 || e.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes");
  return i.create({ dkLen: r }).update(t).update(Jt(r, 2)).update(e).update(Jt(e.length, 1)).digest();
}
function ra(t, e, r) {
  dn(r, {
    DST: "stringOrUint8Array",
    p: "bigint",
    m: "isSafeInteger",
    k: "isSafeInteger",
    hash: "hash"
  });
  const { p: n, k: i, m: s, hash: c, expand: a, DST: d } = r;
  fr(t), As(e);
  const l = typeof d == "string" ? vs(d) : d, p = n.toString(2).length, w = Math.ceil((p + i) / 8), _ = e * s * w;
  let m;
  if (a === "xmd")
    m = Wl(t, l, _, c);
  else if (a === "xof")
    m = Ll(t, l, _, i, c);
  else if (a === "_internal_pass")
    m = t;
  else
    throw new Error('expand must be "xmd" or "xof"');
  const h = new Array(e);
  for (let E = 0; E < e; E++) {
    const A = new Array(s);
    for (let U = 0; U < s; U++) {
      const B = w * (U + E * s), C = m.subarray(B, B + w);
      A[U] = je(Vl(C), n);
    }
    h[E] = A;
  }
  return h;
}
function Gc(t, e) {
  const r = e.map((n) => Array.from(n).reverse());
  return (n, i) => {
    const [s, c, a, d] = r.map((l) => l.reduce((p, w) => t.add(t.mul(p, n), w)));
    return n = t.div(s, c), i = t.mul(i, t.div(a, d)), { x: n, y: i };
  };
}
function na(t, e, r) {
  if (typeof e != "function")
    throw new Error("mapToCurve() must be defined");
  return {
    // Encodes byte string to elliptic curve.
    // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    hashToCurve(n, i) {
      const s = ra(n, 2, { ...r, DST: r.DST, ...i }), c = t.fromAffine(e(s[0])), a = t.fromAffine(e(s[1])), d = c.add(a).clearCofactor();
      return d.assertValidity(), d;
    },
    // Encodes byte string to elliptic curve.
    // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    encodeToCurve(n, i) {
      const s = ra(n, 1, { ...r, DST: r.encodeDST, ...i }), c = t.fromAffine(e(s[0])).clearCofactor();
      return c.assertValidity(), c;
    },
    // Same as encodeToCurve, but without hash
    mapToCurve(n) {
      if (!Array.isArray(n))
        throw new Error("mapToCurve: expected array of bigints");
      for (const s of n)
        if (typeof s != "bigint")
          throw new Error(`mapToCurve: expected array of bigints, got ${s} in array`);
      const i = t.fromAffine(e(n)).clearCofactor();
      return i.assertValidity(), i;
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Kl = BigInt(0), L0 = BigInt(1), K0 = /* @__PURE__ */ new WeakMap(), ia = /* @__PURE__ */ new WeakMap();
function Wc(t, e) {
  const r = (s, c) => {
    const a = c.negate();
    return s ? a : c;
  }, n = (s) => {
    if (!Number.isSafeInteger(s) || s <= 0 || s > e)
      throw new Error(`Wrong window size=${s}, should be [1..${e}]`);
  }, i = (s) => {
    n(s);
    const c = Math.ceil(e / s) + 1, a = 2 ** (s - 1);
    return { windows: c, windowSize: a };
  };
  return {
    constTimeNegate: r,
    // non-const time multiplication ladder
    unsafeLadder(s, c) {
      let a = t.ZERO, d = s;
      for (; c > Kl; )
        c & L0 && (a = a.add(d)), d = d.double(), c >>= L0;
      return a;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(s, c) {
      const { windows: a, windowSize: d } = i(c), l = [];
      let p = s, w = p;
      for (let _ = 0; _ < a; _++) {
        w = p, l.push(w);
        for (let m = 1; m < d; m++)
          w = w.add(p), l.push(w);
        p = w.double();
      }
      return l;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(s, c, a) {
      const { windows: d, windowSize: l } = i(s);
      let p = t.ZERO, w = t.BASE;
      const _ = BigInt(2 ** s - 1), m = 2 ** s, h = BigInt(s);
      for (let E = 0; E < d; E++) {
        const A = E * l;
        let U = Number(a & _);
        a >>= h, U > l && (U -= m, a += L0);
        const B = A, C = A + Math.abs(U) - 1, O = E % 2 !== 0, S = U < 0;
        U === 0 ? w = w.add(r(O, c[B])) : p = p.add(r(S, c[C]));
      }
      return { p, f: w };
    },
    wNAFCached(s, c, a) {
      const d = ia.get(s) || 1;
      let l = K0.get(s);
      return l || (l = this.precomputeWindow(s, d), d !== 1 && K0.set(s, a(l))), this.wNAF(d, l, c);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(s, c) {
      n(c), ia.set(s, c), K0.delete(s);
    }
  };
}
function Lc(t) {
  return qc(t.Fp), dn(t, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...$c(t.n, t.nBitLength),
    ...t,
    p: t.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Yl(t) {
  const e = Lc(t);
  dn(e, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: r, Fp: n, a: i } = e;
  if (r) {
    if (!n.eql(i, n.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof r != "object" || typeof r.beta != "bigint" || typeof r.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...e });
}
const wr = BigInt(0), $e = BigInt(1), Kt = BigInt(2), l0 = BigInt(3), sa = BigInt(4);
function aa(t) {
  const e = Yl(t), { Fp: r } = e, n = e.toBytes || ((h, E, A) => {
    const U = E.toAffine();
    return We(Uint8Array.from([4]), r.toBytes(U.x), r.toBytes(U.y));
  }), i = e.fromBytes || ((h) => {
    const E = h.subarray(1), A = r.fromBytes(E.subarray(0, r.BYTES)), U = r.fromBytes(E.subarray(r.BYTES, 2 * r.BYTES));
    return { x: A, y: U };
  });
  function s(h) {
    const { a: E, b: A } = e, U = r.sqr(h), B = r.mul(U, h);
    return r.add(r.add(B, r.mul(h, E)), A);
  }
  if (!r.eql(r.sqr(e.Gy), s(e.Gx)))
    throw new Error("bad generator point: equation left != right");
  function c(h) {
    return jc(h, $e, e.n);
  }
  function a(h) {
    const { allowedPrivateKeyLengths: E, nByteLength: A, wrapPrivateKey: U, n: B } = e;
    if (E && typeof h != "bigint") {
      if (T0(h) && (h = Br(h)), typeof h != "string" || !E.includes(h.length))
        throw new Error("Invalid key");
      h = h.padStart(A * 2, "0");
    }
    let C;
    try {
      C = typeof h == "bigint" ? h : Et(ft("private key", h, A));
    } catch {
      throw new Error(`private key must be ${A} bytes, hex or bigint, not ${typeof h}`);
    }
    return U && (C = je(C, B)), nr("private key", C, $e, B), C;
  }
  function d(h) {
    if (!(h instanceof w))
      throw new Error("ProjectivePoint expected");
  }
  const l = an((h, E) => {
    const { px: A, py: U, pz: B } = h;
    if (r.eql(B, r.ONE))
      return { x: A, y: U };
    const C = h.is0();
    E == null && (E = C ? r.ONE : r.inv(B));
    const O = r.mul(A, E), S = r.mul(U, E), k = r.mul(B, E);
    if (C)
      return { x: r.ZERO, y: r.ZERO };
    if (!r.eql(k, r.ONE))
      throw new Error("invZ was invalid");
    return { x: O, y: S };
  }), p = an((h) => {
    if (h.is0()) {
      if (e.allowInfinityPoint && !r.is0(h.py))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x: E, y: A } = h.toAffine();
    if (!r.isValid(E) || !r.isValid(A))
      throw new Error("bad point: x or y not FE");
    const U = r.sqr(A), B = s(E);
    if (!r.eql(U, B))
      throw new Error("bad point: equation left != right");
    if (!h.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  class w {
    constructor(E, A, U) {
      if (this.px = E, this.py = A, this.pz = U, E == null || !r.isValid(E))
        throw new Error("x required");
      if (A == null || !r.isValid(A))
        throw new Error("y required");
      if (U == null || !r.isValid(U))
        throw new Error("z required");
      Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(E) {
      const { x: A, y: U } = E || {};
      if (!E || !r.isValid(A) || !r.isValid(U))
        throw new Error("invalid affine point");
      if (E instanceof w)
        throw new Error("projective point not allowed");
      const B = (C) => r.eql(C, r.ZERO);
      return B(A) && B(U) ? w.ZERO : new w(A, U, r.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(E) {
      const A = r.invertBatch(E.map((U) => U.pz));
      return E.map((U, B) => U.toAffine(A[B])).map(w.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(E) {
      const A = w.fromAffine(i(ft("pointHex", E)));
      return A.assertValidity(), A;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(E) {
      return w.BASE.multiply(a(E));
    }
    // "Private method", don't use it directly
    _setWindowSize(E) {
      m.setWindowSize(this, E);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      p(this);
    }
    hasEvenY() {
      const { y: E } = this.toAffine();
      if (r.isOdd)
        return !r.isOdd(E);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(E) {
      d(E);
      const { px: A, py: U, pz: B } = this, { px: C, py: O, pz: S } = E, k = r.eql(r.mul(A, S), r.mul(C, B)), P = r.eql(r.mul(U, S), r.mul(O, B));
      return k && P;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new w(this.px, r.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: E, b: A } = e, U = r.mul(A, l0), { px: B, py: C, pz: O } = this;
      let S = r.ZERO, k = r.ZERO, P = r.ZERO, H = r.mul(B, B), ie = r.mul(C, C), M = r.mul(O, O), W = r.mul(B, C);
      return W = r.add(W, W), P = r.mul(B, O), P = r.add(P, P), S = r.mul(E, P), k = r.mul(U, M), k = r.add(S, k), S = r.sub(ie, k), k = r.add(ie, k), k = r.mul(S, k), S = r.mul(W, S), P = r.mul(U, P), M = r.mul(E, M), W = r.sub(H, M), W = r.mul(E, W), W = r.add(W, P), P = r.add(H, H), H = r.add(P, H), H = r.add(H, M), H = r.mul(H, W), k = r.add(k, H), M = r.mul(C, O), M = r.add(M, M), H = r.mul(M, W), S = r.sub(S, H), P = r.mul(M, ie), P = r.add(P, P), P = r.add(P, P), new w(S, k, P);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(E) {
      d(E);
      const { px: A, py: U, pz: B } = this, { px: C, py: O, pz: S } = E;
      let k = r.ZERO, P = r.ZERO, H = r.ZERO;
      const ie = e.a, M = r.mul(e.b, l0);
      let W = r.mul(A, C), ee = r.mul(U, O), F = r.mul(B, S), q = r.add(A, U), j = r.add(C, O);
      q = r.mul(q, j), j = r.add(W, ee), q = r.sub(q, j), j = r.add(A, B);
      let V = r.add(C, S);
      return j = r.mul(j, V), V = r.add(W, F), j = r.sub(j, V), V = r.add(U, B), k = r.add(O, S), V = r.mul(V, k), k = r.add(ee, F), V = r.sub(V, k), H = r.mul(ie, j), k = r.mul(M, F), H = r.add(k, H), k = r.sub(ee, H), H = r.add(ee, H), P = r.mul(k, H), ee = r.add(W, W), ee = r.add(ee, W), F = r.mul(ie, F), j = r.mul(M, j), ee = r.add(ee, F), F = r.sub(W, F), F = r.mul(ie, F), j = r.add(j, F), W = r.mul(ee, j), P = r.add(P, W), W = r.mul(V, j), k = r.mul(q, k), k = r.sub(k, W), W = r.mul(q, ee), H = r.mul(V, H), H = r.add(H, W), new w(k, P, H);
    }
    subtract(E) {
      return this.add(E.negate());
    }
    is0() {
      return this.equals(w.ZERO);
    }
    wNAF(E) {
      return m.wNAFCached(this, E, w.normalizeZ);
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(E) {
      nr("scalar", E, wr, e.n);
      const A = w.ZERO;
      if (E === wr)
        return A;
      if (E === $e)
        return this;
      const { endo: U } = e;
      if (!U)
        return m.unsafeLadder(this, E);
      let { k1neg: B, k1: C, k2neg: O, k2: S } = U.splitScalar(E), k = A, P = A, H = this;
      for (; C > wr || S > wr; )
        C & $e && (k = k.add(H)), S & $e && (P = P.add(H)), H = H.double(), C >>= $e, S >>= $e;
      return B && (k = k.negate()), O && (P = P.negate()), P = new w(r.mul(P.px, U.beta), P.py, P.pz), k.add(P);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(E) {
      const { endo: A, n: U } = e;
      nr("scalar", E, $e, U);
      let B, C;
      if (A) {
        const { k1neg: O, k1: S, k2neg: k, k2: P } = A.splitScalar(E);
        let { p: H, f: ie } = this.wNAF(S), { p: M, f: W } = this.wNAF(P);
        H = m.constTimeNegate(O, H), M = m.constTimeNegate(k, M), M = new w(r.mul(M.px, A.beta), M.py, M.pz), B = H.add(M), C = ie.add(W);
      } else {
        const { p: O, f: S } = this.wNAF(E);
        B = O, C = S;
      }
      return w.normalizeZ([B, C])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(E, A, U) {
      const B = w.BASE, C = (S, k) => k === wr || k === $e || !S.equals(B) ? S.multiplyUnsafe(k) : S.multiply(k), O = C(this, A).add(C(E, U));
      return O.is0() ? void 0 : O;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(E) {
      return l(this, E);
    }
    isTorsionFree() {
      const { h: E, isTorsionFree: A } = e;
      if (E === $e)
        return !0;
      if (A)
        return A(w, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: E, clearCofactor: A } = e;
      return E === $e ? this : A ? A(w, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(E = !0) {
      return en("isCompressed", E), this.assertValidity(), n(w, this, E);
    }
    toHex(E = !0) {
      return en("isCompressed", E), Br(this.toRawBytes(E));
    }
  }
  w.BASE = new w(e.Gx, e.Gy, r.ONE), w.ZERO = new w(r.ZERO, r.ONE, r.ZERO);
  const _ = e.nBitLength, m = Wc(w, e.endo ? Math.ceil(_ / 2) : _);
  return {
    CURVE: e,
    ProjectivePoint: w,
    normPrivateKeyToScalar: a,
    weierstrassEquation: s,
    isWithinCurveOrder: c
  };
}
function Zl(t, e) {
  const r = t.ORDER;
  let n = wr;
  for (let h = r - $e; h % Kt === wr; h /= Kt)
    n += $e;
  const i = n, s = Kt << i - $e - $e, c = s * Kt, a = (r - $e) / c, d = (a - $e) / Kt, l = c - $e, p = s, w = t.pow(e, a), _ = t.pow(e, (a + $e) / Kt);
  let m = (h, E) => {
    let A = w, U = t.pow(E, l), B = t.sqr(U);
    B = t.mul(B, E);
    let C = t.mul(h, B);
    C = t.pow(C, d), C = t.mul(C, U), U = t.mul(C, E), B = t.mul(C, h);
    let O = t.mul(B, U);
    C = t.pow(O, p);
    let S = t.eql(C, t.ONE);
    U = t.mul(B, _), C = t.mul(O, A), B = t.cmov(U, B, S), O = t.cmov(C, O, S);
    for (let k = i; k > $e; k--) {
      let P = k - Kt;
      P = Kt << P - $e;
      let H = t.pow(O, P);
      const ie = t.eql(H, t.ONE);
      U = t.mul(B, A), A = t.mul(A, A), H = t.mul(O, A), B = t.cmov(U, B, ie), O = t.cmov(H, O, ie);
    }
    return { isValid: S, value: B };
  };
  if (t.ORDER % sa === l0) {
    const h = (t.ORDER - l0) / sa, E = t.sqrt(t.neg(e));
    m = (A, U) => {
      let B = t.sqr(U);
      const C = t.mul(A, U);
      B = t.mul(B, C);
      let O = t.pow(B, h);
      O = t.mul(O, C);
      const S = t.mul(O, E), k = t.mul(t.sqr(O), U), P = t.eql(k, A);
      let H = t.cmov(S, O, P);
      return { isValid: P, value: H };
    };
  }
  return m;
}
function Kc(t, e) {
  if (qc(t), !t.isValid(e.A) || !t.isValid(e.B) || !t.isValid(e.Z))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  const r = Zl(t, e.Z);
  if (!t.isOdd)
    throw new Error("Fp.isOdd is not implemented!");
  return (n) => {
    let i, s, c, a, d, l, p, w;
    i = t.sqr(n), i = t.mul(i, e.Z), s = t.sqr(i), s = t.add(s, i), c = t.add(s, t.ONE), c = t.mul(c, e.B), a = t.cmov(e.Z, t.neg(s), !t.eql(s, t.ZERO)), a = t.mul(a, e.A), s = t.sqr(c), l = t.sqr(a), d = t.mul(l, e.A), s = t.add(s, d), s = t.mul(s, c), l = t.mul(l, a), d = t.mul(l, e.B), s = t.add(s, d), p = t.mul(i, c);
    const { isValid: _, value: m } = r(s, l);
    w = t.mul(i, n), w = t.mul(w, m), p = t.cmov(p, c, _), w = t.cmov(w, m, _);
    const h = t.isOdd(n) === t.isOdd(w);
    return w = t.cmov(t.neg(w), w, h), p = t.div(p, a), { x: p, y: w };
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ql = BigInt(0), vn = BigInt(1), oa = BigInt(2), kr = BigInt(3);
function Xl(t) {
  const e = [];
  for (; t > vn; t >>= vn)
    (t & vn) === Ql ? e.unshift(0) : (t & kr) === kr ? (e.unshift(-1), t += vn) : e.unshift(1);
  return e;
}
function Jl(t) {
  const { Fp: e, Fr: r, Fp2: n, Fp6: i, Fp12: s } = t.fields, c = t.params.xNegative, a = t.params.twistType, d = aa({ n: r.ORDER, ...t.G1 }), l = Object.assign(d, na(d.ProjectivePoint, t.G1.mapToCurve, {
    ...t.htfDefaults,
    ...t.G1.htfDefaults
  })), p = aa({ n: r.ORDER, ...t.G2 }), w = Object.assign(p, na(p.ProjectivePoint, t.G2.mapToCurve, {
    ...t.htfDefaults,
    ...t.G2.htfDefaults
  }));
  let _;
  if (a === "multiplicative")
    _ = ($, X, y, ce, fe, pe) => s.mul014(ce, $, n.mul(X, fe), n.mul(y, pe));
  else if (a === "divisive")
    _ = ($, X, y, ce, fe, pe) => s.mul034(ce, n.mul(y, pe), n.mul(X, fe), $);
  else
    throw new Error("bls: unknown twist type");
  const m = n.div(n.ONE, n.mul(n.ONE, oa));
  function h($, X, y, ce) {
    const fe = n.sqr(y), pe = n.sqr(ce), ae = n.mulByB(n.mul(pe, kr)), le = n.mul(ae, kr), T = n.sub(n.sub(n.sqr(n.add(y, ce)), pe), fe), R = n.sub(ae, fe), D = n.mul(n.sqr(X), kr), K = n.neg(T);
    return $.push([R, D, K]), X = n.mul(n.mul(n.mul(n.sub(fe, le), X), y), m), y = n.sub(n.sqr(n.mul(n.add(fe, le), m)), n.mul(n.sqr(ae), kr)), ce = n.mul(fe, T), { Rx: X, Ry: y, Rz: ce };
  }
  function E($, X, y, ce, fe, pe) {
    const ae = n.sub(y, n.mul(pe, ce)), le = n.sub(X, n.mul(fe, ce)), T = n.sub(n.mul(ae, fe), n.mul(le, pe)), R = n.neg(ae), D = le;
    $.push([T, R, D]);
    const K = n.sqr(le), G = n.mul(K, le), Q = n.mul(K, X), g = n.add(n.sub(G, n.mul(Q, oa)), n.mul(n.sqr(ae), ce));
    return X = n.mul(le, g), y = n.sub(n.mul(n.sub(Q, g), ae), n.mul(G, y)), ce = n.mul(ce, G), { Rx: X, Ry: y, Rz: ce };
  }
  const A = Xl(t.params.ateLoopSize), U = an(($) => {
    const X = $, { x: y, y: ce } = X.toAffine(), fe = y, pe = ce, ae = n.neg(ce);
    let le = fe, T = pe, R = n.ONE;
    const D = [];
    for (const K of A) {
      const G = [];
      ({ Rx: le, Ry: T, Rz: R } = h(G, le, T, R)), K && ({ Rx: le, Ry: T, Rz: R } = E(G, le, T, R, fe, K === -1 ? ae : pe)), D.push(G);
    }
    if (t.postPrecompute) {
      const K = D[D.length - 1];
      t.postPrecompute(le, T, R, fe, pe, E.bind(null, K));
    }
    return D;
  });
  function B($, X = !1) {
    let y = s.ONE;
    if ($.length) {
      const ce = $[0][0].length;
      for (let fe = 0; fe < ce; fe++) {
        y = s.sqr(y);
        for (const [pe, ae, le] of $)
          for (const [T, R, D] of pe[fe])
            y = _(T, R, D, y, ae, le);
      }
    }
    return c && (y = s.conjugate(y)), X ? s.finalExponentiate(y) : y;
  }
  function C($, X = !0) {
    const y = [];
    l.ProjectivePoint.normalizeZ($.map(({ g1: ce }) => ce)), w.ProjectivePoint.normalizeZ($.map(({ g2: ce }) => ce));
    for (const { g1: ce, g2: fe } of $) {
      if (ce.equals(l.ProjectivePoint.ZERO) || fe.equals(w.ProjectivePoint.ZERO))
        throw new Error("pairing is not available for ZERO point");
      ce.assertValidity(), fe.assertValidity();
      const pe = ce.toAffine();
      y.push([U(fe), pe.x, pe.y]);
    }
    return B(y, X);
  }
  function O($, X, y = !0) {
    return C([{ g1: $, g2: X }], y);
  }
  const S = {
    randomPrivateKey: () => {
      const $ = Vc(r.ORDER);
      return Hl(t.randomBytes($), r.ORDER);
    },
    calcPairingPrecomputes: U
  }, { ShortSignature: k } = t.G1, { Signature: P } = t.G2;
  function H($) {
    return $ instanceof l.ProjectivePoint ? $ : l.ProjectivePoint.fromHex($);
  }
  function ie($, X) {
    return $ instanceof l.ProjectivePoint ? $ : l.hashToCurve(ft("point", $), X);
  }
  function M($) {
    return $ instanceof w.ProjectivePoint ? $ : P.fromHex($);
  }
  function W($, X) {
    return $ instanceof w.ProjectivePoint ? $ : w.hashToCurve(ft("point", $), X);
  }
  function ee($) {
    return l.ProjectivePoint.fromPrivateKey($).toRawBytes(!0);
  }
  function F($) {
    return w.ProjectivePoint.fromPrivateKey($).toRawBytes(!0);
  }
  function q($, X, y) {
    const ce = W($, y);
    ce.assertValidity();
    const fe = ce.multiply(l.normPrivateKeyToScalar(X));
    return $ instanceof w.ProjectivePoint ? fe : P.toRawBytes(fe);
  }
  function j($, X, y) {
    const ce = ie($, y);
    ce.assertValidity();
    const fe = ce.multiply(l.normPrivateKeyToScalar(X));
    return $ instanceof l.ProjectivePoint ? fe : k.toRawBytes(fe);
  }
  function V($, X, y, ce) {
    const fe = H(y), pe = W(X, ce), ae = l.ProjectivePoint.BASE, le = M($), T = C([
      { g1: fe.negate(), g2: pe },
      // ePHM = pairing(P.negate(), Hm, false);
      { g1: ae, g2: le }
      // eGS = pairing(G, S, false);
    ]);
    return s.eql(T, s.ONE);
  }
  function re($, X, y, ce) {
    const fe = M(y), pe = ie(X, ce), ae = w.ProjectivePoint.BASE, le = H($), T = C([
      { g1: pe, g2: fe },
      // eHmP = pairing(Hm, P, false);
      { g1: le, g2: ae.negate() }
      // eSG = pairing(S, G.negate(), false);
    ]);
    return s.eql(T, s.ONE);
  }
  function se($) {
    if (!$.length)
      throw new Error("Expected non-empty array");
    const y = $.map(H).reduce((ce, fe) => ce.add(fe), l.ProjectivePoint.ZERO);
    return $[0] instanceof l.ProjectivePoint ? (y.assertValidity(), y) : y.toRawBytes(!0);
  }
  function oe($) {
    if (!$.length)
      throw new Error("Expected non-empty array");
    const y = $.map(M).reduce((ce, fe) => ce.add(fe), w.ProjectivePoint.ZERO);
    return $[0] instanceof w.ProjectivePoint ? (y.assertValidity(), y) : P.toRawBytes(y);
  }
  function he($) {
    if (!$.length)
      throw new Error("Expected non-empty array");
    const y = $.map(H).reduce((ce, fe) => ce.add(fe), l.ProjectivePoint.ZERO);
    return $[0] instanceof l.ProjectivePoint ? (y.assertValidity(), y) : k.toRawBytes(y);
  }
  function Z($, X, y, ce) {
    if (!X.length)
      throw new Error("Expected non-empty messages array");
    if (y.length !== X.length)
      throw new Error("Pubkey count should equal msg count");
    const fe = M($), pe = X.map((R) => W(R, ce)), ae = y.map(H), le = /* @__PURE__ */ new Map();
    for (let R = 0; R < ae.length; R++) {
      const D = ae[R], K = pe[R];
      let G = le.get(K);
      G === void 0 && (G = [], le.set(K, G)), G.push(D);
    }
    const T = [];
    try {
      for (const [R, D] of le) {
        const K = D.reduce((G, Q) => G.add(Q));
        T.push({ g1: K, g2: R });
      }
      return T.push({ g1: l.ProjectivePoint.BASE.negate(), g2: fe }), s.eql(C(T), s.ONE);
    } catch {
      return !1;
    }
  }
  return l.ProjectivePoint.BASE._setWindowSize(4), {
    getPublicKey: ee,
    getPublicKeyForShortSignatures: F,
    sign: q,
    signShortSignature: j,
    verify: V,
    verifyBatch: Z,
    verifyShortSignature: re,
    aggregatePublicKeys: se,
    aggregateSignatures: oe,
    aggregateShortSignatures: he,
    millerLoopBatch: B,
    pairing: O,
    pairingBatch: C,
    G1: l,
    G2: w,
    Signature: P,
    ShortSignature: k,
    fields: {
      Fr: r,
      Fp: e,
      Fp2: n,
      Fp6: i,
      Fp12: s
    },
    params: {
      ateLoopSize: t.params.ateLoopSize,
      r: t.params.r,
      G1b: t.G1.b,
      G2b: t.G2.b
    },
    utils: S
  };
}
const eh = BigInt(0), Pr = BigInt(1), Dt = BigInt(2), ca = BigInt(3);
function Y0(t, e, r, n, i = 1, s) {
  const c = BigInt(s === void 0 ? n : s), a = r ** BigInt(n), d = [];
  for (let l = 0; l < i; l++) {
    const p = BigInt(l + 1), w = [];
    for (let _ = 0, m = Pr; _ < n; _++) {
      const h = (p * m - p) / c % a;
      w.push(t.pow(e, h)), m *= r;
    }
    d.push(w);
  }
  return d;
}
function th(t, e, r) {
  const n = e.pow(r, (t.ORDER - Pr) / ca), i = e.pow(r, (t.ORDER - Pr) / Dt);
  function s(_, m) {
    const h = e.mul(e.frobeniusMap(_, 1), n), E = e.mul(e.frobeniusMap(m, 1), i);
    return [h, E];
  }
  const c = e.pow(r, (t.ORDER ** Dt - Pr) / ca), a = e.pow(r, (t.ORDER ** Dt - Pr) / Dt);
  if (!e.eql(a, e.neg(e.ONE)))
    throw new Error("psiFrobenius: PSI2_Y!==-1");
  function d(_, m) {
    return [e.mul(_, c), e.neg(m)];
  }
  const l = (_) => (m, h) => {
    const E = h.toAffine(), A = _(E.x, E.y);
    return m.fromAffine({ x: A[0], y: A[1] });
  }, p = l(s), w = l(d);
  return { psi: s, psi2: d, G2psi: p, G2psi2: w, PSI_X: n, PSI_Y: i, PSI2_X: c, PSI2_Y: a };
}
function rh(t) {
  const { ORDER: e } = t, r = Bs(e), n = r.create(t.NONRESIDUE || BigInt(-1)), i = $l(e), s = r.div(r.ONE, Dt), c = Y0(r, n, r.ORDER, 2)[0], a = ({ c0: F, c1: q }, { c0: j, c1: V }) => ({
    c0: r.add(F, j),
    c1: r.add(q, V)
  }), d = ({ c0: F, c1: q }, { c0: j, c1: V }) => ({
    c0: r.sub(F, j),
    c1: r.sub(q, V)
  }), l = ({ c0: F, c1: q }, j) => {
    if (typeof j == "bigint")
      return { c0: r.mul(F, j), c1: r.mul(q, j) };
    const { c0: V, c1: re } = j;
    let se = r.mul(F, V), oe = r.mul(q, re);
    const he = r.sub(se, oe), Z = r.sub(r.mul(r.add(F, q), r.add(V, re)), r.add(se, oe));
    return { c0: he, c1: Z };
  }, p = ({ c0: F, c1: q }) => {
    const j = r.add(F, q), V = r.sub(F, q), re = r.add(F, F);
    return { c0: r.mul(j, V), c1: r.mul(re, q) };
  }, w = (F) => {
    if (F.length !== 2)
      throw new Error("Invalid tuple");
    const q = F.map((j) => r.create(j));
    return { c0: q[0], c1: q[1] };
  }, _ = e * e, m = w(t.FP2_NONRESIDUE), h = {
    ORDER: _,
    NONRESIDUE: m,
    BITS: Dn(_),
    BYTES: Math.ceil(Dn(_) / 8),
    MASK: zn(Dn(_)),
    ZERO: { c0: r.ZERO, c1: r.ZERO },
    ONE: { c0: r.ONE, c1: r.ZERO },
    create: (F) => F,
    isValid: ({ c0: F, c1: q }) => typeof F == "bigint" && typeof q == "bigint",
    is0: ({ c0: F, c1: q }) => r.is0(F) && r.is0(q),
    eql: ({ c0: F, c1: q }, { c0: j, c1: V }) => r.eql(F, j) && r.eql(q, V),
    neg: ({ c0: F, c1: q }) => ({ c0: r.neg(F), c1: r.neg(q) }),
    pow: (F, q) => jn(h, F, q),
    invertBatch: (F) => qn(h, F),
    // Normalized
    add: a,
    sub: d,
    mul: l,
    sqr: p,
    // NonNormalized stuff
    addN: a,
    subN: d,
    mulN: l,
    sqrN: p,
    // Why inversion for bigint inside Fp instead of Fp2? it is even used in that context?
    div: (F, q) => h.mul(F, typeof q == "bigint" ? r.inv(r.create(q)) : h.inv(q)),
    inv: ({ c0: F, c1: q }) => {
      const j = r.inv(r.create(F * F + q * q));
      return { c0: r.mul(j, r.create(F)), c1: r.mul(j, r.create(-q)) };
    },
    sqrt: (F) => {
      if (t.Fp2sqrt)
        return t.Fp2sqrt(F);
      const { c0: q, c1: j } = F;
      if (r.is0(j))
        return r.eql(i(r, q), r.ONE) ? h.create({ c0: r.sqrt(q), c1: r.ZERO }) : h.create({ c0: r.ZERO, c1: r.sqrt(r.div(q, n)) });
      const V = r.sqrt(r.sub(r.sqr(q), r.mul(r.sqr(j), n)));
      let re = r.mul(r.add(V, q), s);
      const se = i(r, re);
      !r.is0(se) && !r.eql(se, r.ONE) && (re = r.sub(re, V));
      const oe = r.sqrt(re), he = h.create({ c0: oe, c1: r.div(r.mul(j, s), oe) });
      if (!h.eql(h.sqr(he), F))
        throw new Error("Cannot find square root");
      const Z = he, $ = h.neg(Z), { re: X, im: y } = h.reim(Z), { re: ce, im: fe } = h.reim($);
      return y > fe || y === fe && X > ce ? Z : $;
    },
    // Same as sgn0_m_eq_2 in RFC 9380
    isOdd: (F) => {
      const { re: q, im: j } = h.reim(F), V = q % Dt, re = q === eh, se = j % Dt;
      return BigInt(V || re && se) == Pr;
    },
    // Bytes util
    fromBytes(F) {
      if (F.length !== h.BYTES)
        throw new Error(`fromBytes wrong length=${F.length}`);
      return { c0: r.fromBytes(F.subarray(0, r.BYTES)), c1: r.fromBytes(F.subarray(r.BYTES)) };
    },
    toBytes: ({ c0: F, c1: q }) => We(r.toBytes(F), r.toBytes(q)),
    cmov: ({ c0: F, c1: q }, { c0: j, c1: V }, re) => ({
      c0: r.cmov(F, j, re),
      c1: r.cmov(q, V, re)
    }),
    reim: ({ c0: F, c1: q }) => ({ re: F, im: q }),
    // multiply by u + 1
    mulByNonresidue: ({ c0: F, c1: q }) => h.mul({ c0: F, c1: q }, m),
    mulByB: t.Fp2mulByB,
    fromBigTuple: w,
    frobeniusMap: ({ c0: F, c1: q }, j) => ({
      c0: F,
      c1: r.mul(q, c[j % 2])
    })
  }, E = ({ c0: F, c1: q, c2: j }, { c0: V, c1: re, c2: se }) => ({
    c0: h.add(F, V),
    c1: h.add(q, re),
    c2: h.add(j, se)
  }), A = ({ c0: F, c1: q, c2: j }, { c0: V, c1: re, c2: se }) => ({
    c0: h.sub(F, V),
    c1: h.sub(q, re),
    c2: h.sub(j, se)
  }), U = ({ c0: F, c1: q, c2: j }, V) => {
    if (typeof V == "bigint")
      return {
        c0: h.mul(F, V),
        c1: h.mul(q, V),
        c2: h.mul(j, V)
      };
    const { c0: re, c1: se, c2: oe } = V, he = h.mul(F, re), Z = h.mul(q, se), $ = h.mul(j, oe);
    return {
      // t0 + (c1 + c2) * (r1 * r2) - (T1 + T2) * (u + 1)
      c0: h.add(he, h.mulByNonresidue(h.sub(h.mul(h.add(q, j), h.add(se, oe)), h.add(Z, $)))),
      // (c0 + c1) * (r0 + r1) - (T0 + T1) + T2 * (u + 1)
      c1: h.add(h.sub(h.mul(h.add(F, q), h.add(re, se)), h.add(he, Z)), h.mulByNonresidue($)),
      // T1 + (c0 + c2) * (r0 + r2) - T0 + T2
      c2: h.sub(h.add(Z, h.mul(h.add(F, j), h.add(re, oe))), h.add(he, $))
    };
  }, B = ({ c0: F, c1: q, c2: j }) => {
    let V = h.sqr(F), re = h.mul(h.mul(F, q), Dt), se = h.mul(h.mul(q, j), Dt), oe = h.sqr(j);
    return {
      c0: h.add(h.mulByNonresidue(se), V),
      // T3 * (u + 1) + T0
      c1: h.add(h.mulByNonresidue(oe), re),
      // T4 * (u + 1) + T1
      // T1 + (c0 - c1 + c2)² + T3 - T0 - T4
      c2: h.sub(h.sub(h.add(h.add(re, h.sqr(h.add(h.sub(F, q), j))), se), V), oe)
    };
  }, [C, O] = Y0(h, m, r.ORDER, 6, 2, 3), S = {
    ORDER: h.ORDER,
    // TODO: unused, but need to verify
    BITS: 3 * h.BITS,
    BYTES: 3 * h.BYTES,
    MASK: zn(3 * h.BITS),
    ZERO: { c0: h.ZERO, c1: h.ZERO, c2: h.ZERO },
    ONE: { c0: h.ONE, c1: h.ZERO, c2: h.ZERO },
    create: (F) => F,
    isValid: ({ c0: F, c1: q, c2: j }) => h.isValid(F) && h.isValid(q) && h.isValid(j),
    is0: ({ c0: F, c1: q, c2: j }) => h.is0(F) && h.is0(q) && h.is0(j),
    neg: ({ c0: F, c1: q, c2: j }) => ({ c0: h.neg(F), c1: h.neg(q), c2: h.neg(j) }),
    eql: ({ c0: F, c1: q, c2: j }, { c0: V, c1: re, c2: se }) => h.eql(F, V) && h.eql(q, re) && h.eql(j, se),
    sqrt: Xs,
    // Do we need division by bigint at all? Should be done via order:
    div: (F, q) => S.mul(F, typeof q == "bigint" ? r.inv(r.create(q)) : S.inv(q)),
    pow: (F, q) => jn(S, F, q),
    invertBatch: (F) => qn(S, F),
    // Normalized
    add: E,
    sub: A,
    mul: U,
    sqr: B,
    // NonNormalized stuff
    addN: E,
    subN: A,
    mulN: U,
    sqrN: B,
    inv: ({ c0: F, c1: q, c2: j }) => {
      let V = h.sub(h.sqr(F), h.mulByNonresidue(h.mul(j, q))), re = h.sub(h.mulByNonresidue(h.sqr(j)), h.mul(F, q)), se = h.sub(h.sqr(q), h.mul(F, j)), oe = h.inv(h.add(h.mulByNonresidue(h.add(h.mul(j, re), h.mul(q, se))), h.mul(F, V)));
      return { c0: h.mul(oe, V), c1: h.mul(oe, re), c2: h.mul(oe, se) };
    },
    // Bytes utils
    fromBytes: (F) => {
      if (F.length !== S.BYTES)
        throw new Error(`fromBytes wrong length=${F.length}`);
      return {
        c0: h.fromBytes(F.subarray(0, h.BYTES)),
        c1: h.fromBytes(F.subarray(h.BYTES, 2 * h.BYTES)),
        c2: h.fromBytes(F.subarray(2 * h.BYTES))
      };
    },
    toBytes: ({ c0: F, c1: q, c2: j }) => We(h.toBytes(F), h.toBytes(q), h.toBytes(j)),
    cmov: ({ c0: F, c1: q, c2: j }, { c0: V, c1: re, c2: se }, oe) => ({
      c0: h.cmov(F, V, oe),
      c1: h.cmov(q, re, oe),
      c2: h.cmov(j, se, oe)
    }),
    fromBigSix: (F) => {
      if (!Array.isArray(F) || F.length !== 6)
        throw new Error("Invalid Fp6 usage");
      return {
        c0: h.fromBigTuple(F.slice(0, 2)),
        c1: h.fromBigTuple(F.slice(2, 4)),
        c2: h.fromBigTuple(F.slice(4, 6))
      };
    },
    frobeniusMap: ({ c0: F, c1: q, c2: j }, V) => ({
      c0: h.frobeniusMap(F, V),
      c1: h.mul(h.frobeniusMap(q, V), C[V % 6]),
      c2: h.mul(h.frobeniusMap(j, V), O[V % 6])
    }),
    mulByFp2: ({ c0: F, c1: q, c2: j }, V) => ({
      c0: h.mul(F, V),
      c1: h.mul(q, V),
      c2: h.mul(j, V)
    }),
    mulByNonresidue: ({ c0: F, c1: q, c2: j }) => ({ c0: h.mulByNonresidue(j), c1: F, c2: q }),
    // Sparse multiplication
    mul1: ({ c0: F, c1: q, c2: j }, V) => ({
      c0: h.mulByNonresidue(h.mul(j, V)),
      c1: h.mul(F, V),
      c2: h.mul(q, V)
    }),
    // Sparse multiplication
    mul01({ c0: F, c1: q, c2: j }, V, re) {
      let se = h.mul(F, V), oe = h.mul(q, re);
      return {
        // ((c1 + c2) * b1 - T1) * (u + 1) + T0
        c0: h.add(h.mulByNonresidue(h.sub(h.mul(h.add(q, j), re), oe)), se),
        // (b0 + b1) * (c0 + c1) - T0 - T1
        c1: h.sub(h.sub(h.mul(h.add(V, re), h.add(F, q)), se), oe),
        // (c0 + c2) * b0 - T0 + T1
        c2: h.add(h.sub(h.mul(h.add(F, j), V), se), oe)
      };
    }
  }, k = Y0(h, m, r.ORDER, 12, 1, 6)[0], P = ({ c0: F, c1: q }, { c0: j, c1: V }) => ({
    c0: S.add(F, j),
    c1: S.add(q, V)
  }), H = ({ c0: F, c1: q }, { c0: j, c1: V }) => ({
    c0: S.sub(F, j),
    c1: S.sub(q, V)
  }), ie = ({ c0: F, c1: q }, j) => {
    if (typeof j == "bigint")
      return { c0: S.mul(F, j), c1: S.mul(q, j) };
    let { c0: V, c1: re } = j, se = S.mul(F, V), oe = S.mul(q, re);
    return {
      c0: S.add(se, S.mulByNonresidue(oe)),
      // T1 + T2 * v
      // (c0 + c1) * (r0 + r1) - (T1 + T2)
      c1: S.sub(S.mul(S.add(F, q), S.add(V, re)), S.add(se, oe))
    };
  }, M = ({ c0: F, c1: q }) => {
    let j = S.mul(F, q);
    return {
      // (c1 * v + c0) * (c0 + c1) - AB - AB * v
      c0: S.sub(S.sub(S.mul(S.add(S.mulByNonresidue(q), F), S.add(F, q)), j), S.mulByNonresidue(j)),
      c1: S.add(j, j)
    };
  };
  function W(F, q) {
    const j = h.sqr(F), V = h.sqr(q);
    return {
      first: h.add(h.mulByNonresidue(V), j),
      // b² * Nonresidue + a²
      second: h.sub(h.sub(h.sqr(h.add(F, q)), j), V)
      // (a + b)² - a² - b²
    };
  }
  const ee = {
    ORDER: h.ORDER,
    // TODO: unused, but need to verify
    BITS: 2 * h.BITS,
    BYTES: 2 * h.BYTES,
    MASK: zn(2 * h.BITS),
    ZERO: { c0: S.ZERO, c1: S.ZERO },
    ONE: { c0: S.ONE, c1: S.ZERO },
    create: (F) => F,
    isValid: ({ c0: F, c1: q }) => S.isValid(F) && S.isValid(q),
    is0: ({ c0: F, c1: q }) => S.is0(F) && S.is0(q),
    neg: ({ c0: F, c1: q }) => ({ c0: S.neg(F), c1: S.neg(q) }),
    eql: ({ c0: F, c1: q }, { c0: j, c1: V }) => S.eql(F, j) && S.eql(q, V),
    sqrt: Xs,
    inv: ({ c0: F, c1: q }) => {
      let j = S.inv(S.sub(S.sqr(F), S.mulByNonresidue(S.sqr(q))));
      return { c0: S.mul(F, j), c1: S.neg(S.mul(q, j)) };
    },
    div: (F, q) => ee.mul(F, typeof q == "bigint" ? r.inv(r.create(q)) : ee.inv(q)),
    pow: (F, q) => jn(ee, F, q),
    invertBatch: (F) => qn(ee, F),
    // Normalized
    add: P,
    sub: H,
    mul: ie,
    sqr: M,
    // NonNormalized stuff
    addN: P,
    subN: H,
    mulN: ie,
    sqrN: M,
    // Bytes utils
    fromBytes: (F) => {
      if (F.length !== ee.BYTES)
        throw new Error(`fromBytes wrong length=${F.length}`);
      return {
        c0: S.fromBytes(F.subarray(0, S.BYTES)),
        c1: S.fromBytes(F.subarray(S.BYTES))
      };
    },
    toBytes: ({ c0: F, c1: q }) => We(S.toBytes(F), S.toBytes(q)),
    cmov: ({ c0: F, c1: q }, { c0: j, c1: V }, re) => ({
      c0: S.cmov(F, j, re),
      c1: S.cmov(q, V, re)
    }),
    // Utils
    // toString() {
    //   return `Fp12(${this.c0} + ${this.c1} * w)`;
    // },
    // fromTuple(c: [Fp6, Fp6]) {
    //   return new Fp12(...c);
    // }
    fromBigTwelve: (F) => ({
      c0: S.fromBigSix(F.slice(0, 6)),
      c1: S.fromBigSix(F.slice(6, 12))
    }),
    // Raises to q**i -th power
    frobeniusMap(F, q) {
      const { c0: j, c1: V, c2: re } = S.frobeniusMap(F.c1, q), se = k[q % 12];
      return {
        c0: S.frobeniusMap(F.c0, q),
        c1: S.create({
          c0: h.mul(j, se),
          c1: h.mul(V, se),
          c2: h.mul(re, se)
        })
      };
    },
    mulByFp2: ({ c0: F, c1: q }, j) => ({
      c0: S.mulByFp2(F, j),
      c1: S.mulByFp2(q, j)
    }),
    conjugate: ({ c0: F, c1: q }) => ({ c0: F, c1: S.neg(q) }),
    // Sparse multiplication
    mul014: ({ c0: F, c1: q }, j, V, re) => {
      let se = S.mul01(F, j, V), oe = S.mul1(q, re);
      return {
        c0: S.add(S.mulByNonresidue(oe), se),
        // T1 * v + T0
        // (c1 + c0) * [o0, o1+o4] - T0 - T1
        c1: S.sub(S.sub(S.mul01(S.add(q, F), j, h.add(V, re)), se), oe)
      };
    },
    mul034: ({ c0: F, c1: q }, j, V, re) => {
      const se = S.create({
        c0: h.mul(F.c0, j),
        c1: h.mul(F.c1, j),
        c2: h.mul(F.c2, j)
      }), oe = S.mul01(q, V, re), he = S.mul01(S.add(F, q), h.add(j, V), re);
      return {
        c0: S.add(S.mulByNonresidue(oe), se),
        c1: S.sub(he, S.add(se, oe))
      };
    },
    // A cyclotomic group is a subgroup of Fp^n defined by
    //   GΦₙ(p) = {α ∈ Fpⁿ : α^Φₙ(p) = 1}
    // The result of any pairing is in a cyclotomic subgroup
    // https://eprint.iacr.org/2009/565.pdf
    _cyclotomicSquare: t.Fp12cyclotomicSquare,
    _cyclotomicExp: t.Fp12cyclotomicExp,
    // https://eprint.iacr.org/2010/354.pdf
    // https://eprint.iacr.org/2009/565.pdf
    finalExponentiate: t.Fp12finalExponentiate
  };
  return { Fp: r, Fp2: h, Fp6: S, Fp4Square: W, Fp12: ee };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ot = BigInt(0), h0 = BigInt(1), Qe = BigInt(2), Bn = BigInt(3), rn = BigInt(4), er = BigInt("0xd201000000010000"), nh = Dn(er), { Fp: ye, Fp2: ge, Fp6: rs, Fp4Square: Z0, Fp12: Te } = rh({
  // Order of Fp
  ORDER: BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab"),
  // Finite extension field over irreducible polynominal.
  // Fp(u) / (u² - β) where β = -1
  FP2_NONRESIDUE: [h0, h0],
  Fp2mulByB: ({ c0: t, c1: e }) => {
    const r = ye.mul(t, rn), n = ye.mul(e, rn);
    return { c0: ye.sub(r, n), c1: ye.add(r, n) };
  },
  // Fp12
  // A cyclotomic group is a subgroup of Fp^n defined by
  //   GΦₙ(p) = {α ∈ Fpⁿ : α^Φₙ(p) = 1}
  // The result of any pairing is in a cyclotomic subgroup
  // https://eprint.iacr.org/2009/565.pdf
  Fp12cyclotomicSquare: ({ c0: t, c1: e }) => {
    const { c0: r, c1: n, c2: i } = t, { c0: s, c1: c, c2: a } = e, { first: d, second: l } = Z0(r, c), { first: p, second: w } = Z0(s, i), { first: _, second: m } = Z0(n, a), h = ge.mulByNonresidue(m);
    return {
      c0: rs.create({
        c0: ge.add(ge.mul(ge.sub(d, r), Qe), d),
        // 2 * (T3 - c0c0)  + T3
        c1: ge.add(ge.mul(ge.sub(p, n), Qe), p),
        // 2 * (T5 - c0c1)  + T5
        c2: ge.add(ge.mul(ge.sub(_, i), Qe), _)
      }),
      // 2 * (T7 - c0c2)  + T7
      c1: rs.create({
        c0: ge.add(ge.mul(ge.add(h, s), Qe), h),
        // 2 * (T9 + c1c0) + T9
        c1: ge.add(ge.mul(ge.add(l, c), Qe), l),
        // 2 * (T4 + c1c1) + T4
        c2: ge.add(ge.mul(ge.add(w, a), Qe), w)
      })
    };
  },
  Fp12cyclotomicExp(t, e) {
    let r = Te.ONE;
    for (let n = nh - 1; n >= 0; n--)
      r = Te._cyclotomicSquare(r), Ul(e, n) && (r = Te.mul(r, t));
    return r;
  },
  // https://eprint.iacr.org/2010/354.pdf
  // https://eprint.iacr.org/2009/565.pdf
  Fp12finalExponentiate: (t) => {
    const e = er, r = Te.div(Te.frobeniusMap(t, 6), t), n = Te.mul(Te.frobeniusMap(r, 2), r), i = Te.conjugate(Te._cyclotomicExp(n, e)), s = Te.mul(Te.conjugate(Te._cyclotomicSquare(n)), i), c = Te.conjugate(Te._cyclotomicExp(s, e)), a = Te.conjugate(Te._cyclotomicExp(c, e)), d = Te.mul(Te.conjugate(Te._cyclotomicExp(a, e)), Te._cyclotomicSquare(i)), l = Te.conjugate(Te._cyclotomicExp(d, e)), p = Te.frobeniusMap(Te.mul(i, a), 2), w = Te.frobeniusMap(Te.mul(c, n), 3), _ = Te.frobeniusMap(Te.mul(d, Te.conjugate(n)), 1), m = Te.mul(Te.mul(l, Te.conjugate(s)), n);
    return Te.mul(Te.mul(Te.mul(p, w), _), m);
  }
}), ua = Bs(BigInt("0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001")), ih = Gc(ge, [
  // xNum
  [
    [
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6",
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6"
    ],
    [
      "0x0",
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71a"
    ],
    [
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71e",
      "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38d"
    ],
    [
      "0x171d6541fa38ccfaed6dea691f5fb614cb14b4e7f4e810aa22d6108f142b85757098e38d0f671c7188e2aaaaaaaa5ed1",
      "0x0"
    ]
  ],
  // xDen
  [
    [
      "0x0",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa63"
    ],
    [
      "0xc",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa9f"
    ],
    ["0x1", "0x0"]
    // LAST 1
  ],
  // yNum
  [
    [
      "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706",
      "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706"
    ],
    [
      "0x0",
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97be"
    ],
    [
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71c",
      "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38f"
    ],
    [
      "0x124c9ad43b6cf79bfbf7043de3811ad0761b0f37a1e26286b0e977c69aa274524e79097a56dc4bd9e1b371c71c718b10",
      "0x0"
    ]
  ],
  // yDen
  [
    [
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb"
    ],
    [
      "0x0",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa9d3"
    ],
    [
      "0x12",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa99"
    ],
    ["0x1", "0x0"]
    // LAST 1
  ]
].map((t) => t.map((e) => ge.fromBigTuple(e.map(BigInt))))), sh = Gc(ye, [
  // xNum
  [
    "0x11a05f2b1e833340b809101dd99815856b303e88a2d7005ff2627b56cdb4e2c85610c2d5f2e62d6eaeac1662734649b7",
    "0x17294ed3e943ab2f0588bab22147a81c7c17e75b2f6a8417f565e33c70d1e86b4838f2a6f318c356e834eef1b3cb83bb",
    "0xd54005db97678ec1d1048c5d10a9a1bce032473295983e56878e501ec68e25c958c3e3d2a09729fe0179f9dac9edcb0",
    "0x1778e7166fcc6db74e0609d307e55412d7f5e4656a8dbf25f1b33289f1b330835336e25ce3107193c5b388641d9b6861",
    "0xe99726a3199f4436642b4b3e4118e5499db995a1257fb3f086eeb65982fac18985a286f301e77c451154ce9ac8895d9",
    "0x1630c3250d7313ff01d1201bf7a74ab5db3cb17dd952799b9ed3ab9097e68f90a0870d2dcae73d19cd13c1c66f652983",
    "0xd6ed6553fe44d296a3726c38ae652bfb11586264f0f8ce19008e218f9c86b2a8da25128c1052ecaddd7f225a139ed84",
    "0x17b81e7701abdbe2e8743884d1117e53356de5ab275b4db1a682c62ef0f2753339b7c8f8c8f475af9ccb5618e3f0c88e",
    "0x80d3cf1f9a78fc47b90b33563be990dc43b756ce79f5574a2c596c928c5d1de4fa295f296b74e956d71986a8497e317",
    "0x169b1f8e1bcfa7c42e0c37515d138f22dd2ecb803a0c5c99676314baf4bb1b7fa3190b2edc0327797f241067be390c9e",
    "0x10321da079ce07e272d8ec09d2565b0dfa7dccdde6787f96d50af36003b14866f69b771f8c285decca67df3f1605fb7b",
    "0x6e08c248e260e70bd1e962381edee3d31d79d7e22c837bc23c0bf1bc24c6b68c24b1b80b64d391fa9c8ba2e8ba2d229"
  ],
  // xDen
  [
    "0x8ca8d548cff19ae18b2e62f4bd3fa6f01d5ef4ba35b48ba9c9588617fc8ac62b558d681be343df8993cf9fa40d21b1c",
    "0x12561a5deb559c4348b4711298e536367041e8ca0cf0800c0126c2588c48bf5713daa8846cb026e9e5c8276ec82b3bff",
    "0xb2962fe57a3225e8137e629bff2991f6f89416f5a718cd1fca64e00b11aceacd6a3d0967c94fedcfcc239ba5cb83e19",
    "0x3425581a58ae2fec83aafef7c40eb545b08243f16b1655154cca8abc28d6fd04976d5243eecf5c4130de8938dc62cd8",
    "0x13a8e162022914a80a6f1d5f43e7a07dffdfc759a12062bb8d6b44e833b306da9bd29ba81f35781d539d395b3532a21e",
    "0xe7355f8e4e667b955390f7f0506c6e9395735e9ce9cad4d0a43bcef24b8982f7400d24bc4228f11c02df9a29f6304a5",
    "0x772caacf16936190f3e0c63e0596721570f5799af53a1894e2e073062aede9cea73b3538f0de06cec2574496ee84a3a",
    "0x14a7ac2a9d64a8b230b3f5b074cf01996e7f63c21bca68a81996e1cdf9822c580fa5b9489d11e2d311f7d99bbdcc5a5e",
    "0xa10ecf6ada54f825e920b3dafc7a3cce07f8d1d7161366b74100da67f39883503826692abba43704776ec3a79a1d641",
    "0x95fc13ab9e92ad4476d6e3eb3a56680f682b4ee96f7d03776df533978f31c1593174e4b4b7865002d6384d168ecdd0a",
    "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ],
  // yNum
  [
    "0x90d97c81ba24ee0259d1f094980dcfa11ad138e48a869522b52af6c956543d3cd0c7aee9b3ba3c2be9845719707bb33",
    "0x134996a104ee5811d51036d776fb46831223e96c254f383d0f906343eb67ad34d6c56711962fa8bfe097e75a2e41c696",
    "0xcc786baa966e66f4a384c86a3b49942552e2d658a31ce2c344be4b91400da7d26d521628b00523b8dfe240c72de1f6",
    "0x1f86376e8981c217898751ad8746757d42aa7b90eeb791c09e4a3ec03251cf9de405aba9ec61deca6355c77b0e5f4cb",
    "0x8cc03fdefe0ff135caf4fe2a21529c4195536fbe3ce50b879833fd221351adc2ee7f8dc099040a841b6daecf2e8fedb",
    "0x16603fca40634b6a2211e11db8f0a6a074a7d0d4afadb7bd76505c3d3ad5544e203f6326c95a807299b23ab13633a5f0",
    "0x4ab0b9bcfac1bbcb2c977d027796b3ce75bb8ca2be184cb5231413c4d634f3747a87ac2460f415ec961f8855fe9d6f2",
    "0x987c8d5333ab86fde9926bd2ca6c674170a05bfe3bdd81ffd038da6c26c842642f64550fedfe935a15e4ca31870fb29",
    "0x9fc4018bd96684be88c9e221e4da1bb8f3abd16679dc26c1e8b6e6a1f20cabe69d65201c78607a360370e577bdba587",
    "0xe1bba7a1186bdb5223abde7ada14a23c42a0ca7915af6fe06985e7ed1e4d43b9b3f7055dd4eba6f2bafaaebca731c30",
    "0x19713e47937cd1be0dfd0b8f1d43fb93cd2fcbcb6caf493fd1183e416389e61031bf3a5cce3fbafce813711ad011c132",
    "0x18b46a908f36f6deb918c143fed2edcc523559b8aaf0c2462e6bfe7f911f643249d9cdf41b44d606ce07c8a4d0074d8e",
    "0xb182cac101b9399d155096004f53f447aa7b12a3426b08ec02710e807b4633f06c851c1919211f20d4c04f00b971ef8",
    "0x245a394ad1eca9b72fc00ae7be315dc757b3b080d4c158013e6632d3c40659cc6cf90ad1c232a6442d9d3f5db980133",
    "0x5c129645e44cf1102a159f748c4a3fc5e673d81d7e86568d9ab0f5d396a7ce46ba1049b6579afb7866b1e715475224b",
    "0x15e6be4e990f03ce4ea50b3b42df2eb5cb181d8f84965a3957add4fa95af01b2b665027efec01c7704b456be69c8b604"
  ],
  // yDen
  [
    "0x16112c4c3a9c98b252181140fad0eae9601a6de578980be6eec3232b5be72e7a07f3688ef60c206d01479253b03663c1",
    "0x1962d75c2381201e1a0cbd6c43c348b885c84ff731c4d59ca4a10356f453e01f78a4260763529e3532f6102c2e49a03d",
    "0x58df3306640da276faaae7d6e8eb15778c4855551ae7f310c35a5dd279cd2eca6757cd636f96f891e2538b53dbf67f2",
    "0x16b7d288798e5395f20d23bf89edb4d1d115c5dbddbcd30e123da489e726af41727364f2c28297ada8d26d98445f5416",
    "0xbe0e079545f43e4b00cc912f8228ddcc6d19c9f0f69bbb0542eda0fc9dec916a20b15dc0fd2ededda39142311a5001d",
    "0x8d9e5297186db2d9fb266eaac783182b70152c65550d881c5ecd87b6f0f5a6449f38db9dfa9cce202c6477faaf9b7ac",
    "0x166007c08a99db2fc3ba8734ace9824b5eecfdfa8d0cf8ef5dd365bc400a0051d5fa9c01a58b1fb93d1a1399126a775c",
    "0x16a3ef08be3ea7ea03bcddfabba6ff6ee5a4375efa1f4fd7feb34fd206357132b920f5b00801dee460ee415a15812ed9",
    "0x1866c8ed336c61231a1be54fd1d74cc4f9fb0ce4c6af5920abc5750c4bf39b4852cfe2f7bb9248836b233d9d55535d4a",
    "0x167a55cda70a6e1cea820597d94a84903216f763e13d87bb5308592e7ea7d4fbc7385ea3d529b35e346ef48bb8913f55",
    "0x4d2f259eea405bd48f010a01ad2911d9c6dd039bb61a6290e591b36e636a5c871a5c29f4f83060400f8b49cba8f6aa8",
    "0xaccbb67481d033ff5852c1e48c50c477f94ff8aefce42d28c0f9a88cea7913516f968986f7ebbea9684b529e2561092",
    "0xad6b9514c767fe3c3613144b45f1496543346d98adf02267d5ceef9a00d9b8693000763e3b90ac11e99b138573345cc",
    "0x2660400eb2e4f3b628bdd0d53cd76f2bf565b94e72927c1cb748df27942480e420517bd8714cc80d1fadc1326ed06f7",
    "0xe0fa1d816ddc03e6b24255e0d7819c171c40f65e273b853324efcd6356caa205ca2f570f13497804415473a1d634b8f",
    "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ]
].map((t) => t.map((e) => BigInt(e)))), ah = Kc(ge, {
  A: ge.create({ c0: ye.create(ot), c1: ye.create(BigInt(240)) }),
  // A' = 240 * I
  B: ge.create({ c0: ye.create(BigInt(1012)), c1: ye.create(BigInt(1012)) }),
  // B' = 1012 * (1 + I)
  Z: ge.create({ c0: ye.create(BigInt(-2)), c1: ye.create(BigInt(-1)) })
  // Z: -(2 + I)
}), oh = Kc(ye, {
  A: ye.create(BigInt("0x144698a3b8e9433d693a02c96d4982b0ea985383ee66a8d8e8981aefd881ac98936f8da0e0f97f5cf428082d584c1d")),
  B: ye.create(BigInt("0x12e2908d11688030018b12e8753eee3b2016c1f0f24f4070a0b9c14fcef35ef55a23215a316ceaa5d1cc48e98e172be0")),
  Z: ye.create(BigInt(11))
}), { G2psi: fa, G2psi2: ch } = th(ye, ge, ge.div(ge.ONE, ge.NONRESIDUE)), Q0 = Object.freeze({
  // DST: a domain separation tag
  // defined in section 2.2.5
  // Use utils.getDSTLabel(), utils.setDSTLabel(value)
  DST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  encodeDST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  // p: the characteristic of F
  //    where F is a finite field of characteristic p and order q = p^m
  p: ye.ORDER,
  // m: the extension degree of F, m >= 1
  //     where F is a finite field of characteristic p and order q = p^m
  m: 2,
  // k: the target security level for the suite in bits
  // defined in section 5.1
  k: 128,
  // option to use a message that has already been processed by
  // expand_message_xmd
  expand: "xmd",
  // Hash functions for: expand_message_xmd is appropriate for use with a
  // wide range of hash functions, including SHA-2, SHA-3, BLAKE2, and others.
  // BBS+ uses blake2: https://github.com/hyperledger/aries-framework-go/issues/2247
  hash: ls
}), d0 = on(ye.toBytes(ot), { infinity: !0, compressed: !0 });
function An(t) {
  t = t.slice();
  const e = t[0] & 224, r = !!(e >> 7 & 1), n = !!(e >> 6 & 1), i = !!(e >> 5 & 1);
  return t[0] &= 31, { compressed: r, infinity: n, sort: i, value: t };
}
function on(t, e) {
  if (t[0] & 224)
    throw new Error("setMask: non-empty mask");
  return e.compressed && (t[0] |= 128), e.infinity && (t[0] |= 64), e.sort && (t[0] |= 32), t;
}
function la(t) {
  t.assertValidity();
  const e = t.equals(pt.G1.ProjectivePoint.ZERO), { x: r, y: n } = t.toAffine();
  if (e)
    return d0.slice();
  const i = ye.ORDER, s = !!(n * Qe / i);
  return on(et(r, ye.BYTES), { compressed: !0, sort: s });
}
function ha(t) {
  t.assertValidity();
  const e = ye.BYTES;
  if (t.equals(pt.G2.ProjectivePoint.ZERO))
    return We(d0, et(ot, e));
  const { x: r, y: n } = t.toAffine(), { re: i, im: s } = ge.reim(r), { re: c, im: a } = ge.reim(n), l = !!((a > ot ? a * Qe : c * Qe) / ye.ORDER & h0), p = i;
  return We(on(et(s, e), { sort: l, compressed: !0 }), et(p, e));
}
const pt = Jl({
  // Fields
  fields: {
    Fp: ye,
    Fp2: ge,
    Fp6: rs,
    Fp12: Te,
    Fr: ua
  },
  // G1 is the order-q subgroup of E1(Fp) : y² = x³ + 4, #E1(Fp) = h1q, where
  // characteristic; z + (z⁴ - z² + 1)(z - 1)²/3
  G1: {
    Fp: ye,
    // cofactor; (z - 1)²/3
    h: BigInt("0x396c8c005555e1568c00aaab0000aaab"),
    // generator's coordinates
    // x = 3685416753713387016781088315183077757961620795782546409894578378688607592378376318836054947676345821548104185464507
    // y = 1339506544944476473020471379941921221584933875938349620426543736416511423956333506472724655353366534992391756441569
    Gx: BigInt("0x17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb"),
    Gy: BigInt("0x08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1"),
    a: ye.ZERO,
    b: rn,
    htfDefaults: { ...Q0, m: 1, DST: "BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_" },
    wrapPrivateKey: !0,
    allowInfinityPoint: !0,
    // Checks is the point resides in prime-order subgroup.
    // point.isTorsionFree() should return true for valid points
    // It returns false for shitty points.
    // https://eprint.iacr.org/2021/1130.pdf
    isTorsionFree: (t, e) => {
      const r = BigInt("0x5f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"), n = new t(ye.mul(e.px, r), e.py, e.pz);
      return e.multiplyUnsafe(er).negate().multiplyUnsafe(er).equals(n);
    },
    // Clear cofactor of G1
    // https://eprint.iacr.org/2019/403
    clearCofactor: (t, e) => e.multiplyUnsafe(er).add(e),
    mapToCurve: (t) => {
      const { x: e, y: r } = oh(ye.create(t[0]));
      return sh(e, r);
    },
    fromBytes: (t) => {
      const { compressed: e, infinity: r, sort: n, value: i } = An(t);
      if (i.length === 48 && e) {
        const s = ye.ORDER, c = Et(i), a = ye.create(c & ye.MASK);
        if (r) {
          if (a !== ot)
            throw new Error("G1: non-empty compressed point at infinity");
          return { x: ot, y: ot };
        }
        const d = ye.add(ye.pow(a, Bn), ye.create(pt.params.G1b));
        let l = ye.sqrt(d);
        if (!l)
          throw new Error("Invalid compressed G1 point");
        return l * Qe / s !== BigInt(n) && (l = ye.neg(l)), { x: ye.create(a), y: ye.create(l) };
      } else if (i.length === 96 && !e) {
        const s = Et(i.subarray(0, ye.BYTES)), c = Et(i.subarray(ye.BYTES));
        if (r) {
          if (s !== ot || c !== ot)
            throw new Error("G1: non-empty point at infinity");
          return pt.G1.ProjectivePoint.ZERO.toAffine();
        }
        return { x: ye.create(s), y: ye.create(c) };
      } else
        throw new Error("Invalid point G1, expected 48/96 bytes");
    },
    toBytes: (t, e, r) => {
      const n = e.equals(t.ZERO), { x: i, y: s } = e.toAffine();
      if (r) {
        if (n)
          return d0.slice();
        const c = ye.ORDER, a = !!(s * Qe / c);
        return on(et(i, ye.BYTES), { compressed: !0, sort: a });
      } else
        return n ? We(new Uint8Array([64]), new Uint8Array(2 * ye.BYTES - 1)) : We(et(i, ye.BYTES), et(s, ye.BYTES));
    },
    ShortSignature: {
      fromHex(t) {
        const { infinity: e, sort: r, value: n } = An(ft("signatureHex", t, 48)), i = ye.ORDER, s = Et(n);
        if (e)
          return pt.G1.ProjectivePoint.ZERO;
        const c = ye.create(s & ye.MASK), a = ye.add(ye.pow(c, Bn), ye.create(pt.params.G1b));
        let d = ye.sqrt(a);
        if (!d)
          throw new Error("Invalid compressed G1 point");
        const l = BigInt(r);
        d * Qe / i !== l && (d = ye.neg(d));
        const p = pt.G1.ProjectivePoint.fromAffine({ x: c, y: d });
        return p.assertValidity(), p;
      },
      toRawBytes(t) {
        return la(t);
      },
      toHex(t) {
        return Br(la(t));
      }
    }
  },
  // G2 is the order-q subgroup of E2(Fp²) : y² = x³+4(1+√−1),
  // where Fp2 is Fp[√−1]/(x2+1). #E2(Fp2 ) = h2q, where
  // G² - 1
  // h2q
  G2: {
    Fp: ge,
    // cofactor
    h: BigInt("0x5d543a95414e7f1091d50792876a202cd91de4547085abaa68a205b2e5a7ddfa628f1cb4d9e82ef21537e293a6691ae1616ec6e786f0c70cf1c38e31c7238e5"),
    Gx: ge.fromBigTuple([
      BigInt("0x024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb8"),
      BigInt("0x13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e")
    ]),
    // y =
    // 927553665492332455747201965776037880757740193453592970025027978793976877002675564980949289727957565575433344219582,
    // 1985150602287291935568054521177171638300868978215655730859378665066344726373823718423869104263333984641494340347905
    Gy: ge.fromBigTuple([
      BigInt("0x0ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801"),
      BigInt("0x0606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be")
    ]),
    a: ge.ZERO,
    b: ge.fromBigTuple([rn, rn]),
    hEff: BigInt("0xbc69f08f2ee75b3584c6a0ea91b352888e2a8e9145ad7689986ff031508ffe1329c2f178731db956d82bf015d1212b02ec0ec69d7477c1ae954cbc06689f6a359894c0adebbf6b4e8020005aaa95551"),
    htfDefaults: { ...Q0 },
    wrapPrivateKey: !0,
    allowInfinityPoint: !0,
    mapToCurve: (t) => {
      const { x: e, y: r } = ah(ge.fromBigTuple(t));
      return ih(e, r);
    },
    // Checks is the point resides in prime-order subgroup.
    // point.isTorsionFree() should return true for valid points
    // It returns false for shitty points.
    // https://eprint.iacr.org/2021/1130.pdf
    isTorsionFree: (t, e) => e.multiplyUnsafe(er).negate().equals(fa(t, e)),
    // Maps the point into the prime-order subgroup G2.
    // clear_cofactor_bls12381_g2 from cfrg-hash-to-curve-11
    // https://eprint.iacr.org/2017/419.pdf
    // prettier-ignore
    clearCofactor: (t, e) => {
      const r = er;
      let n = e.multiplyUnsafe(r).negate(), i = fa(t, e), s = e.double();
      return s = ch(t, s), s = s.subtract(i), i = n.add(i), i = i.multiplyUnsafe(r).negate(), s = s.add(i), s = s.subtract(n), s.subtract(e);
    },
    fromBytes: (t) => {
      const { compressed: e, infinity: r, sort: n, value: i } = An(t);
      if (!e && !r && n || // 00100000
      !e && r && n || // 01100000
      n && r && e)
        throw new Error("Invalid encoding flag: " + (t[0] & 224));
      const s = ye.BYTES, c = (a, d, l) => Et(a.slice(d, l));
      if (i.length === 96 && e) {
        const a = pt.params.G2b, d = ye.ORDER;
        if (r) {
          if (i.reduce((E, A) => E !== 0 ? A + 1 : A, 0) > 0)
            throw new Error("Invalid compressed G2 point");
          return { x: ge.ZERO, y: ge.ZERO };
        }
        const l = c(i, 0, s), p = c(i, s, 2 * s), w = ge.create({ c0: ye.create(p), c1: ye.create(l) }), _ = ge.add(ge.pow(w, Bn), a);
        let m = ge.sqrt(_);
        const h = m.c1 === ot ? m.c0 * Qe / d : m.c1 * Qe / d ? h0 : ot;
        return m = n && h > 0 ? m : ge.neg(m), { x: w, y: m };
      } else if (i.length === 192 && !e) {
        if (r) {
          if (i.reduce((w, _) => w !== 0 ? _ + 1 : _, 0) > 0)
            throw new Error("Invalid uncompressed G2 point");
          return { x: ge.ZERO, y: ge.ZERO };
        }
        const a = c(i, 0, s), d = c(i, s, 2 * s), l = c(i, 2 * s, 3 * s), p = c(i, 3 * s, 4 * s);
        return { x: ge.fromBigTuple([d, a]), y: ge.fromBigTuple([p, l]) };
      } else
        throw new Error("Invalid point G2, expected 96/192 bytes");
    },
    toBytes: (t, e, r) => {
      const { BYTES: n, ORDER: i } = ye, s = e.equals(t.ZERO), { x: c, y: a } = e.toAffine();
      if (r) {
        if (s)
          return We(d0, et(ot, n));
        const d = !!(a.c1 === ot ? a.c0 * Qe / i : a.c1 * Qe / i);
        return We(on(et(c.c1, n), { compressed: !0, sort: d }), et(c.c0, n));
      } else {
        if (s)
          return We(new Uint8Array([64]), new Uint8Array(4 * n - 1));
        const { re: d, im: l } = ge.reim(c), { re: p, im: w } = ge.reim(a);
        return We(et(l, n), et(d, n), et(w, n), et(p, n));
      }
    },
    Signature: {
      // TODO: Optimize, it's very slow because of sqrt.
      fromHex(t) {
        const { infinity: e, sort: r, value: n } = An(ft("signatureHex", t)), i = ye.ORDER, s = n.length / 2;
        if (s !== 48 && s !== 96)
          throw new Error("Invalid compressed signature length, must be 96 or 192");
        const c = Et(n.slice(0, s)), a = Et(n.slice(s));
        if (e)
          return pt.G2.ProjectivePoint.ZERO;
        const d = ye.create(c & ye.MASK), l = ye.create(a), p = ge.create({ c0: l, c1: d }), w = ge.add(ge.pow(p, Bn), pt.params.G2b);
        let _ = ge.sqrt(w);
        if (!_)
          throw new Error("Failed to find a square root");
        const { re: m, im: h } = ge.reim(_), E = BigInt(r), A = h > ot && h * Qe / i !== E, U = h === ot && m * Qe / i !== E;
        (A || U) && (_ = ge.neg(_));
        const B = pt.G2.ProjectivePoint.fromAffine({ x: p, y: _ });
        return B.assertValidity(), B;
      },
      toRawBytes(t) {
        return ha(t);
      },
      toHex(t) {
        return Br(ha(t));
      }
    }
  },
  params: {
    ateLoopSize: er,
    // The BLS parameter x for BLS12-381
    r: ua.ORDER,
    // order; z⁴ − z² + 1; CURVE.n from other curves
    xNegative: !0,
    twistType: "multiplicative"
  },
  htfDefaults: Q0,
  hash: ls,
  randomBytes: Bo
});
function uh(t, e, r) {
  const n = typeof t == "string" ? t : tt(t), i = typeof e == "string" ? e : tt(e), s = typeof r == "string" ? r : tt(r);
  return pt.verifyShortSignature(i, s, n);
}
const Yc = (t) => Ze(new Hr(t)), Cs = (t) => {
  const e = Yc(t);
  return new Date(Number(e) / 1e6);
};
class Rt extends ht {
  constructor(e) {
    super(`Invalid certificate: ${e}`);
  }
}
var dt;
(function(t) {
  t[t.Empty = 0] = "Empty", t[t.Fork = 1] = "Fork", t[t.Labeled = 2] = "Labeled", t[t.Leaf = 3] = "Leaf", t[t.Pruned = 4] = "Pruned";
})(dt || (dt = {}));
function fh(t, e) {
  const r = new Uint8Array(t), n = new Uint8Array(e);
  for (let i = 0; i < r.length; i++)
    if (r[i] > n[i])
      return !0;
  return !1;
}
class Dr {
  constructor(e, r, n, i, s = 5) {
    this._rootKey = r, this._canisterId = n, this._blsVerify = i, this._maxAgeInMinutes = s, this.cert = jt(new Uint8Array(e));
  }
  /**
   * Create a new instance of a certificate, automatically verifying it. Throws a
   * CertificateVerificationError if the certificate cannot be verified.
   * @constructs  Certificate
   * @param {CreateCertificateOptions} options {@link CreateCertificateOptions}
   * @param {ArrayBuffer} options.certificate The bytes of the certificate
   * @param {ArrayBuffer} options.rootKey The root key to verify against
   * @param {Principal} options.canisterId The effective or signing canister ID
   * @param {number} options.maxAgeInMinutes The maximum age of the certificate in minutes. Default is 5 minutes.
   * @throws {CertificateVerificationError}
   */
  static async create(e) {
    const r = Dr.createUnverified(e);
    return await r.verify(), r;
  }
  static createUnverified(e) {
    let r = e.blsVerify;
    return r || (r = uh), new Dr(e.certificate, e.rootKey, e.canisterId, r, e.maxAgeInMinutes);
  }
  lookup(e) {
    return $r(e, this.cert.tree);
  }
  lookup_label(e) {
    return this.lookup([e]);
  }
  async verify() {
    const e = await $n(this.cert.tree), r = await this._checkDelegationAndGetKey(this.cert.delegation), n = this.cert.signature, i = hh(r), s = Bt(Yr("ic-state-root"), e);
    let c = !1;
    const a = mr(this.lookup(["time"]));
    if (!a)
      throw new Rt("Certificate does not contain a time");
    const d = 5 * 60 * 1e3, l = this._maxAgeInMinutes * 60 * 1e3, p = Date.now(), w = p - l, _ = p + d, m = Cs(a);
    if (m.getTime() < w)
      throw new Rt(`Certificate is signed more than ${this._maxAgeInMinutes} minutes in the past. Certificate time: ` + m.toISOString() + " Current time: " + new Date(p).toISOString());
    if (m.getTime() > _)
      throw new Rt("Certificate is signed more than 5 minutes in the future. Certificate time: " + m.toISOString() + " Current time: " + new Date(p).toISOString());
    try {
      c = await this._blsVerify(new Uint8Array(i), new Uint8Array(n), new Uint8Array(s));
    } catch {
      c = !1;
    }
    if (!c)
      throw new Rt("Signature verification failed");
  }
  async _checkDelegationAndGetKey(e) {
    if (!e)
      return this._rootKey;
    const r = await Dr.createUnverified({
      certificate: e.certificate,
      rootKey: this._rootKey,
      canisterId: this._canisterId,
      blsVerify: this._blsVerify,
      // Do not check max age for delegation certificates
      maxAgeInMinutes: 1 / 0
    });
    if (r.cert.delegation)
      throw new Rt("Delegation certificates cannot be nested");
    if (await r.verify(), !Zc({
      canisterId: this._canisterId,
      subnetId: Ee.fromUint8Array(new Uint8Array(e.subnet_id)),
      tree: r.cert.tree
    }))
      throw new Rt(`Canister ${this._canisterId} not in range of delegations for subnet 0x${tt(e.subnet_id)}`);
    const i = mr(r.lookup(["subnet", e.subnet_id, "public_key"]));
    if (!i)
      throw new Error(`Could not find subnet key for subnet 0x${tt(e.subnet_id)}`);
    return i;
  }
}
const Wr = $t("308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100"), lh = 96;
function hh(t) {
  const e = Wr.byteLength + lh;
  if (t.byteLength !== e)
    throw new TypeError(`BLS DER-encoded public key must be ${e} bytes long`);
  const r = t.slice(0, Wr.byteLength);
  if (!A0(r, Wr))
    throw new TypeError(`BLS DER-encoded public key is invalid. Expect the following prefix: ${Wr}, but get ${r}`);
  return t.slice(Wr.byteLength);
}
function mr(t) {
  if (t.status === Le.Found) {
    if (t.value instanceof ArrayBuffer)
      return t.value;
    if (t.value instanceof Uint8Array)
      return t.value.buffer;
  }
}
async function $n(t) {
  switch (t[0]) {
    case dt.Empty:
      return vt(Yr("ic-hashtree-empty"));
    case dt.Pruned:
      return t[1];
    case dt.Leaf:
      return vt(Bt(Yr("ic-hashtree-leaf"), t[1]));
    case dt.Labeled:
      return vt(Bt(Yr("ic-hashtree-labeled"), t[1], await $n(t[2])));
    case dt.Fork:
      return vt(Bt(Yr("ic-hashtree-fork"), await $n(t[1]), await $n(t[2])));
    default:
      throw new Error("unreachable");
  }
}
function Yr(t) {
  const e = new Uint8Array([t.length]), r = new TextEncoder().encode(t);
  return Bt(e, r);
}
var Le;
(function(t) {
  t.Unknown = "unknown", t.Absent = "absent", t.Found = "found";
})(Le || (Le = {}));
var zt;
(function(t) {
  t.Less = "less", t.Greater = "greater";
})(zt || (zt = {}));
function $r(t, e) {
  if (t.length === 0)
    switch (e[0]) {
      case dt.Leaf: {
        if (!e[1])
          throw new Error("Invalid tree structure for leaf");
        return e[1] instanceof ArrayBuffer ? {
          status: Le.Found,
          value: e[1]
        } : e[1] instanceof Uint8Array ? {
          status: Le.Found,
          value: e[1].buffer
        } : {
          status: Le.Found,
          value: e[1]
        };
      }
      default:
        return {
          status: Le.Found,
          value: e
        };
    }
  const r = typeof t[0] == "string" ? new TextEncoder().encode(t[0]) : t[0], n = Hn(r, e);
  switch (n.status) {
    case Le.Found:
      return $r(t.slice(1), n.value);
    case zt.Greater:
    case zt.Less:
      return {
        status: Le.Absent
      };
    default:
      return n;
  }
}
function ns(t) {
  switch (t[0]) {
    case dt.Empty:
      return [];
    case dt.Fork:
      return ns(t[1]).concat(ns(t[2]));
    default:
      return [t];
  }
}
function Hn(t, e) {
  switch (e[0]) {
    case dt.Labeled:
      return fh(t, e[1]) ? {
        status: zt.Greater
      } : A0(t, e[1]) ? {
        status: Le.Found,
        value: e[2]
      } : {
        status: zt.Less
      };
    case dt.Fork:
      const r = Hn(t, e[1]);
      switch (r.status) {
        case zt.Greater: {
          const n = Hn(t, e[2]);
          return n.status === zt.Less ? {
            status: Le.Absent
          } : n;
        }
        case Le.Unknown: {
          let n = Hn(t, e[2]);
          return n.status === zt.Less ? {
            status: Le.Unknown
          } : n;
        }
        default:
          return r;
      }
    case dt.Pruned:
      return {
        status: Le.Unknown
      };
    default:
      return {
        status: Le.Absent
      };
  }
}
function Zc(t) {
  const { canisterId: e, subnetId: r, tree: n } = t, i = $r(["subnet", r.toUint8Array(), "canister_ranges"], n);
  if (i.status !== Le.Found || !(i.value instanceof ArrayBuffer))
    throw new Error(`Could not find canister ranges for subnet ${r}`);
  return jt(i.value).map((d) => [
    Ee.fromUint8Array(d[0]),
    Ee.fromUint8Array(d[1])
  ]).some((d) => d[0].ltEq(e) && d[1].gtEq(e));
}
class dh {
  constructor(e, r, n) {
    this.key = e, this.path = r, this.decodeStrategy = n;
  }
}
const Qc = async (t) => {
  const { agent: e, paths: r } = t, n = Ee.from(t.canisterId), i = [...new Set(r)], s = i.map((d) => is(d, n)), c = /* @__PURE__ */ new Map(), a = i.map((d, l) => (async () => {
    var p;
    try {
      const w = await e.readState(n, {
        paths: [s[l]]
      }), _ = await Dr.create({
        certificate: w.certificate,
        rootKey: e.rootKey,
        canisterId: n
      }), m = (A, U) => {
        if (U === "subnet") {
          const B = Xc(w.certificate, n, e.rootKey);
          return {
            path: U,
            data: B
          };
        } else
          return {
            path: U,
            data: mr(A.lookup(is(U, n)))
          };
      }, { path: h, data: E } = m(_, i[l]);
      if (!E)
        console.warn(`Expected to find result for path ${h}, but instead found nothing.`), typeof h == "string" ? c.set(h, null) : c.set(h.key, null);
      else
        switch (h) {
          case "time": {
            c.set(h, Cs(E));
            break;
          }
          case "controllers": {
            c.set(h, ph(E));
            break;
          }
          case "module_hash": {
            c.set(h, da(E));
            break;
          }
          case "subnet": {
            c.set(h, E);
            break;
          }
          case "candid": {
            c.set(h, new TextDecoder().decode(E));
            break;
          }
          default:
            if (typeof h != "string" && "key" in h && "path" in h)
              switch (h.decodeStrategy) {
                case "raw":
                  c.set(h.key, E);
                  break;
                case "leb128": {
                  c.set(h.key, Yc(E));
                  break;
                }
                case "cbor": {
                  c.set(h.key, Jc(E));
                  break;
                }
                case "hex": {
                  c.set(h.key, da(E));
                  break;
                }
                case "utf-8":
                  c.set(h.key, xh(E));
              }
        }
    } catch (w) {
      if (!((p = w == null ? void 0 : w.message) === null || p === void 0) && p.includes("Invalid certificate"))
        throw new ht(w.message);
      typeof d != "string" && "key" in d && "path" in d ? c.set(d.key, null) : c.set(d, null), console.group(), console.warn(`Expected to find result for path ${d}, but instead found nothing.`), console.warn(w), console.groupEnd();
    }
  })());
  return await Promise.all(a), c;
}, Xc = (t, e, r) => {
  if (!e._isPrincipal)
    throw new Error("Invalid canisterId");
  const n = jt(new Uint8Array(t)), i = n.tree;
  let s = n.delegation, c;
  if (s && s.subnet_id ? c = Ee.fromUint8Array(new Uint8Array(s.subnet_id)) : !s && typeof r < "u" ? (c = Ee.selfAuthenticating(new Uint8Array(r)), s = {
    subnet_id: c.toUint8Array(),
    certificate: new ArrayBuffer(0)
  }) : (c = Ee.selfAuthenticating(Ee.fromText("tdb26-jop6k-aogll-7ltgs-eruif-6kk7m-qpktf-gdiqx-mxtrf-vb5e6-eqe").toUint8Array()), s = {
    subnet_id: c.toUint8Array(),
    certificate: new ArrayBuffer(0)
  }), !Zc({ canisterId: e, subnetId: c, tree: i }))
    throw new Error("Canister not in range");
  const d = $r(["subnet", s.subnet_id, "node"], i);
  if (d.status !== Le.Found)
    throw new Error("Node not found");
  if (d.value instanceof ArrayBuffer)
    throw new Error("Invalid node tree");
  const l = ns(d.value), p = /* @__PURE__ */ new Map();
  return l.forEach((w) => {
    const _ = Ee.from(new Uint8Array(w[1])).toText(), m = $r(["public_key"], w[2]);
    if (m.status !== Le.Found)
      throw new Error("Public key not found");
    const h = m.value;
    if (h.byteLength !== 44)
      throw new Error("Invalid public key length");
    p.set(_, h);
  }), {
    subnetId: Ee.fromUint8Array(new Uint8Array(s.subnet_id)).toText(),
    nodeKeys: p
  };
}, is = (t, e) => {
  const r = new TextEncoder(), n = (s) => new DataView(r.encode(s).buffer).buffer, i = new DataView(e.toUint8Array().buffer).buffer;
  switch (t) {
    case "time":
      return [n("time")];
    case "controllers":
      return [n("canister"), i, n("controllers")];
    case "module_hash":
      return [n("canister"), i, n("module_hash")];
    case "subnet":
      return [n("subnet")];
    case "candid":
      return [n("canister"), i, n("metadata"), n("candid:service")];
    default:
      if ("key" in t && "path" in t)
        if (typeof t.path == "string" || t.path instanceof ArrayBuffer) {
          const s = t.path, c = typeof s == "string" ? n(s) : s;
          return [n("canister"), i, n("metadata"), c];
        } else
          return t.path;
  }
  throw new Error(`An unexpeected error was encountered while encoding your path for canister status. Please ensure that your path, ${t} was formatted correctly.`);
}, da = (t) => tt(t), Jc = (t) => jt(t), xh = (t) => new TextDecoder().decode(t), ph = (t) => Jc(t).map((r) => Ee.fromUint8Array(new Uint8Array(r))), yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CustomPath: dh,
  encodePath: is,
  fetchNodeKeys: Xc,
  request: Qc
}, Symbol.toStringTag, { value: "Module" })), Cn = /* @__PURE__ */ BigInt(2 ** 32 - 1), ss = /* @__PURE__ */ BigInt(32);
function eu(t, e = !1) {
  return e ? { h: Number(t & Cn), l: Number(t >> ss & Cn) } : { h: Number(t >> ss & Cn) | 0, l: Number(t & Cn) | 0 };
}
function gh(t, e = !1) {
  let r = new Uint32Array(t.length), n = new Uint32Array(t.length);
  for (let i = 0; i < t.length; i++) {
    const { h: s, l: c } = eu(t[i], e);
    [r[i], n[i]] = [s, c];
  }
  return [r, n];
}
const wh = (t, e) => BigInt(t >>> 0) << ss | BigInt(e >>> 0), bh = (t, e, r) => t >>> r, mh = (t, e, r) => t << 32 - r | e >>> r, _h = (t, e, r) => t >>> r | e << 32 - r, Eh = (t, e, r) => t << 32 - r | e >>> r, vh = (t, e, r) => t << 64 - r | e >>> r - 32, Bh = (t, e, r) => t >>> r - 32 | e << 64 - r, Ah = (t, e) => e, Ch = (t, e) => t, Fh = (t, e, r) => t << r | e >>> 32 - r, Th = (t, e, r) => e << r | t >>> 32 - r, Sh = (t, e, r) => e << r - 32 | t >>> 64 - r, Nh = (t, e, r) => t << r - 32 | e >>> 64 - r;
function Rh(t, e, r, n) {
  const i = (e >>> 0) + (n >>> 0);
  return { h: t + r + (i / 2 ** 32 | 0) | 0, l: i | 0 };
}
const Oh = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0), Mh = (t, e, r, n) => e + r + n + (t / 2 ** 32 | 0) | 0, Uh = (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0), Ih = (t, e, r, n, i) => e + r + n + i + (t / 2 ** 32 | 0) | 0, kh = (t, e, r, n, i) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0), Ph = (t, e, r, n, i, s) => e + r + n + i + s + (t / 2 ** 32 | 0) | 0, Dh = {
  fromBig: eu,
  split: gh,
  toBig: wh,
  shrSH: bh,
  shrSL: mh,
  rotrSH: _h,
  rotrSL: Eh,
  rotrBH: vh,
  rotrBL: Bh,
  rotr32H: Ah,
  rotr32L: Ch,
  rotlSH: Fh,
  rotlSL: Th,
  rotlBH: Sh,
  rotlBL: Nh,
  add: Rh,
  add3L: Oh,
  add3H: Mh,
  add4L: Uh,
  add4H: Ih,
  add5H: Ph,
  add5L: kh
}, Ae = Dh, [zh, jh] = /* @__PURE__ */ (() => Ae.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((t) => BigInt(t))))(), Yt = /* @__PURE__ */ new Uint32Array(80), Zt = /* @__PURE__ */ new Uint32Array(80);
class qh extends Ao {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: e, Al: r, Bh: n, Bl: i, Ch: s, Cl: c, Dh: a, Dl: d, Eh: l, El: p, Fh: w, Fl: _, Gh: m, Gl: h, Hh: E, Hl: A } = this;
    return [e, r, n, i, s, c, a, d, l, p, w, _, m, h, E, A];
  }
  // prettier-ignore
  set(e, r, n, i, s, c, a, d, l, p, w, _, m, h, E, A) {
    this.Ah = e | 0, this.Al = r | 0, this.Bh = n | 0, this.Bl = i | 0, this.Ch = s | 0, this.Cl = c | 0, this.Dh = a | 0, this.Dl = d | 0, this.Eh = l | 0, this.El = p | 0, this.Fh = w | 0, this.Fl = _ | 0, this.Gh = m | 0, this.Gl = h | 0, this.Hh = E | 0, this.Hl = A | 0;
  }
  process(e, r) {
    for (let C = 0; C < 16; C++, r += 4)
      Yt[C] = e.getUint32(r), Zt[C] = e.getUint32(r += 4);
    for (let C = 16; C < 80; C++) {
      const O = Yt[C - 15] | 0, S = Zt[C - 15] | 0, k = Ae.rotrSH(O, S, 1) ^ Ae.rotrSH(O, S, 8) ^ Ae.shrSH(O, S, 7), P = Ae.rotrSL(O, S, 1) ^ Ae.rotrSL(O, S, 8) ^ Ae.shrSL(O, S, 7), H = Yt[C - 2] | 0, ie = Zt[C - 2] | 0, M = Ae.rotrSH(H, ie, 19) ^ Ae.rotrBH(H, ie, 61) ^ Ae.shrSH(H, ie, 6), W = Ae.rotrSL(H, ie, 19) ^ Ae.rotrBL(H, ie, 61) ^ Ae.shrSL(H, ie, 6), ee = Ae.add4L(P, W, Zt[C - 7], Zt[C - 16]), F = Ae.add4H(ee, k, M, Yt[C - 7], Yt[C - 16]);
      Yt[C] = F | 0, Zt[C] = ee | 0;
    }
    let { Ah: n, Al: i, Bh: s, Bl: c, Ch: a, Cl: d, Dh: l, Dl: p, Eh: w, El: _, Fh: m, Fl: h, Gh: E, Gl: A, Hh: U, Hl: B } = this;
    for (let C = 0; C < 80; C++) {
      const O = Ae.rotrSH(w, _, 14) ^ Ae.rotrSH(w, _, 18) ^ Ae.rotrBH(w, _, 41), S = Ae.rotrSL(w, _, 14) ^ Ae.rotrSL(w, _, 18) ^ Ae.rotrBL(w, _, 41), k = w & m ^ ~w & E, P = _ & h ^ ~_ & A, H = Ae.add5L(B, S, P, jh[C], Zt[C]), ie = Ae.add5H(H, U, O, k, zh[C], Yt[C]), M = H | 0, W = Ae.rotrSH(n, i, 28) ^ Ae.rotrBH(n, i, 34) ^ Ae.rotrBH(n, i, 39), ee = Ae.rotrSL(n, i, 28) ^ Ae.rotrBL(n, i, 34) ^ Ae.rotrBL(n, i, 39), F = n & s ^ n & a ^ s & a, q = i & c ^ i & d ^ c & d;
      U = E | 0, B = A | 0, E = m | 0, A = h | 0, m = w | 0, h = _ | 0, { h: w, l: _ } = Ae.add(l | 0, p | 0, ie | 0, M | 0), l = a | 0, p = d | 0, a = s | 0, d = c | 0, s = n | 0, c = i | 0;
      const j = Ae.add3L(M, ee, q);
      n = Ae.add3H(j, ie, W, F), i = j | 0;
    }
    ({ h: n, l: i } = Ae.add(this.Ah | 0, this.Al | 0, n | 0, i | 0)), { h: s, l: c } = Ae.add(this.Bh | 0, this.Bl | 0, s | 0, c | 0), { h: a, l: d } = Ae.add(this.Ch | 0, this.Cl | 0, a | 0, d | 0), { h: l, l: p } = Ae.add(this.Dh | 0, this.Dl | 0, l | 0, p | 0), { h: w, l: _ } = Ae.add(this.Eh | 0, this.El | 0, w | 0, _ | 0), { h: m, l: h } = Ae.add(this.Fh | 0, this.Fl | 0, m | 0, h | 0), { h: E, l: A } = Ae.add(this.Gh | 0, this.Gl | 0, E | 0, A | 0), { h: U, l: B } = Ae.add(this.Hh | 0, this.Hl | 0, U | 0, B | 0), this.set(n, i, s, c, a, d, l, p, w, _, m, h, E, A, U, B);
  }
  roundClean() {
    Yt.fill(0), Zt.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const $h = /* @__PURE__ */ fs(() => new qh());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const bt = BigInt(0), ut = BigInt(1), Fn = BigInt(2), Hh = BigInt(8), Vh = { zip215: !0 };
function Gh(t) {
  const e = Lc(t);
  return dn(t, {
    hash: "function",
    a: "bigint",
    d: "bigint",
    randomBytes: "function"
  }, {
    adjustScalarBytes: "function",
    domain: "function",
    uvRatio: "function",
    mapToCurve: "function"
  }), Object.freeze({ ...e });
}
function Wh(t) {
  const e = Gh(t), { Fp: r, n, prehash: i, hash: s, randomBytes: c, nByteLength: a, h: d } = e, l = Fn << BigInt(a * 8) - ut, p = r.create, w = e.uvRatio || ((j, V) => {
    try {
      return { isValid: !0, value: r.sqrt(j * r.inv(V)) };
    } catch {
      return { isValid: !1, value: bt };
    }
  }), _ = e.adjustScalarBytes || ((j) => j), m = e.domain || ((j, V, re) => {
    if (en("phflag", re), V.length || re)
      throw new Error("Contexts/pre-hash are not supported");
    return j;
  });
  function h(j, V) {
    nr("coordinate " + j, V, bt, l);
  }
  function E(j) {
    if (!(j instanceof B))
      throw new Error("ExtendedPoint expected");
  }
  const A = an((j, V) => {
    const { ex: re, ey: se, ez: oe } = j, he = j.is0();
    V == null && (V = he ? Hh : r.inv(oe));
    const Z = p(re * V), $ = p(se * V), X = p(oe * V);
    if (he)
      return { x: bt, y: ut };
    if (X !== ut)
      throw new Error("invZ was invalid");
    return { x: Z, y: $ };
  }), U = an((j) => {
    const { a: V, d: re } = e;
    if (j.is0())
      throw new Error("bad point: ZERO");
    const { ex: se, ey: oe, ez: he, et: Z } = j, $ = p(se * se), X = p(oe * oe), y = p(he * he), ce = p(y * y), fe = p($ * V), pe = p(y * p(fe + X)), ae = p(ce + p(re * p($ * X)));
    if (pe !== ae)
      throw new Error("bad point: equation left != right (1)");
    const le = p(se * oe), T = p(he * Z);
    if (le !== T)
      throw new Error("bad point: equation left != right (2)");
    return !0;
  });
  class B {
    constructor(V, re, se, oe) {
      this.ex = V, this.ey = re, this.ez = se, this.et = oe, h("x", V), h("y", re), h("z", se), h("t", oe), Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(V) {
      if (V instanceof B)
        throw new Error("extended point not allowed");
      const { x: re, y: se } = V || {};
      return h("x", re), h("y", se), new B(re, se, ut, p(re * se));
    }
    static normalizeZ(V) {
      const re = r.invertBatch(V.map((se) => se.ez));
      return V.map((se, oe) => se.toAffine(re[oe])).map(B.fromAffine);
    }
    // "Private method", don't use it directly
    _setWindowSize(V) {
      S.setWindowSize(this, V);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      U(this);
    }
    // Compare one point to another.
    equals(V) {
      E(V);
      const { ex: re, ey: se, ez: oe } = this, { ex: he, ey: Z, ez: $ } = V, X = p(re * $), y = p(he * oe), ce = p(se * $), fe = p(Z * oe);
      return X === y && ce === fe;
    }
    is0() {
      return this.equals(B.ZERO);
    }
    negate() {
      return new B(p(-this.ex), this.ey, this.ez, p(-this.et));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { a: V } = e, { ex: re, ey: se, ez: oe } = this, he = p(re * re), Z = p(se * se), $ = p(Fn * p(oe * oe)), X = p(V * he), y = re + se, ce = p(p(y * y) - he - Z), fe = X + Z, pe = fe - $, ae = X - Z, le = p(ce * pe), T = p(fe * ae), R = p(ce * ae), D = p(pe * fe);
      return new B(le, T, D, R);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(V) {
      E(V);
      const { a: re, d: se } = e, { ex: oe, ey: he, ez: Z, et: $ } = this, { ex: X, ey: y, ez: ce, et: fe } = V;
      if (re === BigInt(-1)) {
        const v = p((he - oe) * (y + X)), N = p((he + oe) * (y - X)), z = p(N - v);
        if (z === bt)
          return this.double();
        const J = p(Z * Fn * fe), ue = p($ * Fn * ce), de = ue + J, xe = N + v, we = ue - J, b = p(de * z), f = p(xe * we), x = p(de * we), I = p(z * xe);
        return new B(b, f, I, x);
      }
      const pe = p(oe * X), ae = p(he * y), le = p($ * se * fe), T = p(Z * ce), R = p((oe + he) * (X + y) - pe - ae), D = T - le, K = T + le, G = p(ae - re * pe), Q = p(R * D), g = p(K * G), o = p(R * G), u = p(D * K);
      return new B(Q, g, u, o);
    }
    subtract(V) {
      return this.add(V.negate());
    }
    wNAF(V) {
      return S.wNAFCached(this, V, B.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(V) {
      const re = V;
      nr("scalar", re, ut, n);
      const { p: se, f: oe } = this.wNAF(re);
      return B.normalizeZ([se, oe])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    multiplyUnsafe(V) {
      const re = V;
      return nr("scalar", re, bt, n), re === bt ? O : this.equals(O) || re === ut ? this : this.equals(C) ? this.wNAF(re).p : S.unsafeLadder(this, re);
    }
    // Checks if point is of small order.
    // If you add something to small order point, you will have "dirty"
    // point with torsion component.
    // Multiplies point by cofactor and checks if the result is 0.
    isSmallOrder() {
      return this.multiplyUnsafe(d).is0();
    }
    // Multiplies point by curve order and checks if the result is 0.
    // Returns `false` is the point is dirty.
    isTorsionFree() {
      return S.unsafeLadder(this, n).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(V) {
      return A(this, V);
    }
    clearCofactor() {
      const { h: V } = e;
      return V === ut ? this : this.multiplyUnsafe(V);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(V, re = !1) {
      const { d: se, a: oe } = e, he = r.BYTES;
      V = ft("pointHex", V, he), en("zip215", re);
      const Z = V.slice(), $ = V[he - 1];
      Z[he - 1] = $ & -129;
      const X = tn(Z), y = re ? l : r.ORDER;
      nr("pointHex.y", X, bt, y);
      const ce = p(X * X), fe = p(ce - ut), pe = p(se * ce - oe);
      let { isValid: ae, value: le } = w(fe, pe);
      if (!ae)
        throw new Error("Point.fromHex: invalid y coordinate");
      const T = (le & ut) === ut, R = ($ & 128) !== 0;
      if (!re && le === bt && R)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      return R !== T && (le = p(-le)), B.fromAffine({ x: le, y: X });
    }
    static fromPrivateKey(V) {
      return H(V).point;
    }
    toRawBytes() {
      const { x: V, y: re } = this.toAffine(), se = f0(re, r.BYTES);
      return se[se.length - 1] |= V & ut ? 128 : 0, se;
    }
    toHex() {
      return Br(this.toRawBytes());
    }
  }
  B.BASE = new B(e.Gx, e.Gy, ut, p(e.Gx * e.Gy)), B.ZERO = new B(bt, ut, ut, bt);
  const { BASE: C, ZERO: O } = B, S = Wc(B, a * 8);
  function k(j) {
    return je(j, n);
  }
  function P(j) {
    return k(tn(j));
  }
  function H(j) {
    const V = a;
    j = ft("private key", j, V);
    const re = ft("hashed private key", s(j), 2 * V), se = _(re.slice(0, V)), oe = re.slice(V, 2 * V), he = P(se), Z = C.multiply(he), $ = Z.toRawBytes();
    return { head: se, prefix: oe, scalar: he, point: Z, pointBytes: $ };
  }
  function ie(j) {
    return H(j).pointBytes;
  }
  function M(j = new Uint8Array(), ...V) {
    const re = We(...V);
    return P(s(m(re, ft("context", j), !!i)));
  }
  function W(j, V, re = {}) {
    j = ft("message", j), i && (j = i(j));
    const { prefix: se, scalar: oe, pointBytes: he } = H(V), Z = M(re.context, se, j), $ = C.multiply(Z).toRawBytes(), X = M(re.context, $, he, j), y = k(Z + X * oe);
    nr("signature.s", y, bt, n);
    const ce = We($, f0(y, r.BYTES));
    return ft("result", ce, a * 2);
  }
  const ee = Vh;
  function F(j, V, re, se = ee) {
    const { context: oe, zip215: he } = se, Z = r.BYTES;
    j = ft("signature", j, 2 * Z), V = ft("message", V), he !== void 0 && en("zip215", he), i && (V = i(V));
    const $ = tn(j.slice(Z, 2 * Z));
    let X, y, ce;
    try {
      X = B.fromHex(re, he), y = B.fromHex(j.slice(0, Z), he), ce = C.multiplyUnsafe($);
    } catch {
      return !1;
    }
    if (!he && X.isSmallOrder())
      return !1;
    const fe = M(oe, y.toRawBytes(), X.toRawBytes(), V);
    return y.add(X.multiplyUnsafe(fe)).subtract(ce).clearCofactor().equals(B.ZERO);
  }
  return C._setWindowSize(8), {
    CURVE: e,
    getPublicKey: ie,
    sign: W,
    verify: F,
    ExtendedPoint: B,
    utils: {
      getExtendedPublicKey: H,
      // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
      randomPrivateKey: () => c(r.BYTES),
      /**
       * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
       * values. This slows down first getPublicKey() by milliseconds (see Speed section),
       * but allows to speed-up subsequent getPublicKey() calls up to 20x.
       * @param windowSize 2, 4, 8, 16
       */
      precompute(j = 8, V = B.BASE) {
        return V._setWindowSize(j), V.multiply(BigInt(3)), V;
      }
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Fs = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), xa = /* @__PURE__ */ BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const Lh = BigInt(1), pa = BigInt(2);
BigInt(3);
const Kh = BigInt(5), Yh = BigInt(8);
function Zh(t) {
  const e = BigInt(10), r = BigInt(20), n = BigInt(40), i = BigInt(80), s = Fs, a = t * t % s * t % s, d = Ft(a, pa, s) * a % s, l = Ft(d, Lh, s) * t % s, p = Ft(l, Kh, s) * l % s, w = Ft(p, e, s) * p % s, _ = Ft(w, r, s) * w % s, m = Ft(_, n, s) * _ % s, h = Ft(m, i, s) * m % s, E = Ft(h, i, s) * m % s, A = Ft(E, e, s) * p % s;
  return { pow_p_5_8: Ft(A, pa, s) * t % s, b2: a };
}
function Qh(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function Xh(t, e) {
  const r = Fs, n = je(e * e * e, r), i = je(n * n * e, r), s = Zh(t * i).pow_p_5_8;
  let c = je(t * n * s, r);
  const a = je(e * c * c, r), d = c, l = je(c * xa, r), p = a === t, w = a === je(-t, r), _ = a === je(-t * xa, r);
  return p && (c = d), (w || _) && (c = l), jl(c, r) && (c = je(-c, r)), { isValid: p || w, value: c };
}
const Jh = /* @__PURE__ */ (() => Bs(Fs, void 0, !0))(), ed = /* @__PURE__ */ (() => ({
  // Param: a
  a: BigInt(-1),
  // Fp.create(-1) is proper; our way still works and is faster
  // d is equal to -121665/121666 over finite field.
  // Negative number is P - number, and division is invert(number, P)
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
  Fp: Jh,
  // Subgroup order: how many points curve has
  // 2n**252n + 27742317777372353535851937790883648493n;
  n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
  // Cofactor
  h: Yh,
  // Base point (x, y) aka generator point
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
  hash: $h,
  randomBytes: Bo,
  adjustScalarBytes: Qh,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio: Xh
}))(), Nr = /* @__PURE__ */ (() => Wh(ed))();
var ya = globalThis && globalThis.__classPrivateFieldSet || function(t, e, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, at = globalThis && globalThis.__classPrivateFieldGet || function(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, nt, Zr, tu, ru;
class td {
  /**
   * Create a new ExpirableMap.
   * @param {ExpirableMapOptions<any, any>} options - options for the map.
   * @param {Iterable<[any, any]>} options.source - an optional source of entries to initialize the map with.
   * @param {number} options.expirationTime - the time in milliseconds after which entries will expire.
   */
  constructor(e = {}) {
    nt.set(this, void 0), Zr.set(this, void 0), this[tu] = this.entries.bind(this), this[ru] = "ExpirableMap";
    const { source: r = [], expirationTime: n = 10 * 60 * 1e3 } = e, i = Date.now();
    ya(this, nt, new Map([...r].map(([s, c]) => [s, { value: c, timestamp: i }])), "f"), ya(this, Zr, n, "f");
  }
  /**
   * Prune removes all expired entries.
   */
  prune() {
    const e = Date.now();
    for (const [r, n] of at(this, nt, "f").entries())
      e - n.timestamp > at(this, Zr, "f") && at(this, nt, "f").delete(r);
    return this;
  }
  // Implementing the Map interface
  /**
   * Set the value for the given key. Prunes expired entries.
   * @param key for the entry
   * @param value of the entry
   * @returns this
   */
  set(e, r) {
    this.prune();
    const n = {
      value: r,
      timestamp: Date.now()
    };
    return at(this, nt, "f").set(e, n), this;
  }
  /**
   * Get the value associated with the key, if it exists and has not expired.
   * @param key K
   * @returns the value associated with the key, or undefined if the key is not present or has expired.
   */
  get(e) {
    const r = at(this, nt, "f").get(e);
    if (r !== void 0) {
      if (Date.now() - r.timestamp > at(this, Zr, "f")) {
        at(this, nt, "f").delete(e);
        return;
      }
      return r.value;
    }
  }
  /**
   * Clear all entries.
   */
  clear() {
    at(this, nt, "f").clear();
  }
  /**
   * Entries returns the entries of the map, without the expiration time.
   * @returns an iterator over the entries of the map.
   */
  entries() {
    const e = at(this, nt, "f").entries();
    return function* () {
      for (const [n, i] of e)
        yield [n, i.value];
    }();
  }
  /**
   * Values returns the values of the map, without the expiration time.
   * @returns an iterator over the values of the map.
   */
  values() {
    const e = at(this, nt, "f").values();
    return function* () {
      for (const n of e)
        yield n.value;
    }();
  }
  /**
   * Keys returns the keys of the map
   * @returns an iterator over the keys of the map.
   */
  keys() {
    return at(this, nt, "f").keys();
  }
  /**
   * forEach calls the callbackfn on each entry of the map.
   * @param callbackfn to call on each entry
   * @param thisArg to use as this when calling the callbackfn
   */
  forEach(e, r) {
    for (const [n, i] of at(this, nt, "f").entries())
      e.call(r, i.value, n, this);
  }
  /**
   * has returns true if the key exists and has not expired.
   * @param key K
   * @returns true if the key exists and has not expired.
   */
  has(e) {
    return at(this, nt, "f").has(e);
  }
  /**
   * delete the entry for the given key.
   * @param key K
   * @returns true if the key existed and has been deleted.
   */
  delete(e) {
    return at(this, nt, "f").delete(e);
  }
  /**
   * get size of the map.
   * @returns the size of the map.
   */
  get size() {
    return at(this, nt, "f").size;
  }
}
nt = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), tu = Symbol.iterator, ru = Symbol.toStringTag;
const ga = (t) => {
  if (t <= 127)
    return 1;
  if (t <= 255)
    return 2;
  if (t <= 65535)
    return 3;
  if (t <= 16777215)
    return 4;
  throw new Error("Length too long (> 4 bytes)");
}, wa = (t, e, r) => {
  if (r <= 127)
    return t[e] = r, 1;
  if (r <= 255)
    return t[e] = 129, t[e + 1] = r, 2;
  if (r <= 65535)
    return t[e] = 130, t[e + 1] = r >> 8, t[e + 2] = r, 3;
  if (r <= 16777215)
    return t[e] = 131, t[e + 1] = r >> 16, t[e + 2] = r >> 8, t[e + 3] = r, 4;
  throw new Error("Length too long (> 4 bytes)");
}, as = (t, e) => {
  if (t[e] < 128)
    return 1;
  if (t[e] === 128)
    throw new Error("Invalid length 0");
  if (t[e] === 129)
    return 2;
  if (t[e] === 130)
    return 3;
  if (t[e] === 131)
    return 4;
  throw new Error("Length too long (> 4 bytes)");
}, rd = (t, e) => {
  const r = as(t, e);
  if (r === 1)
    return t[e];
  if (r === 2)
    return t[e + 1];
  if (r === 3)
    return (t[e + 1] << 8) + t[e + 2];
  if (r === 4)
    return (t[e + 1] << 16) + (t[e + 2] << 8) + t[e + 3];
  throw new Error("Length too long (> 4 bytes)");
};
Uint8Array.from([
  48,
  12,
  6,
  10,
  43,
  6,
  1,
  4,
  1,
  131,
  184,
  67,
  1,
  1
  // DER encoded COSE
]);
const x0 = Uint8Array.from([
  48,
  5,
  6,
  3,
  43,
  101,
  112
  // id-Ed25519 OID
]);
Uint8Array.from([
  48,
  16,
  6,
  7,
  42,
  134,
  72,
  206,
  61,
  2,
  1,
  6,
  5,
  43,
  129,
  4,
  0,
  10
  // OID secp256k1
]);
function nu(t, e) {
  const r = 2 + ga(t.byteLength + 1), n = e.byteLength + r + t.byteLength;
  let i = 0;
  const s = new Uint8Array(1 + ga(n) + n);
  return s[i++] = 48, i += wa(s, i, n), s.set(e, i), i += e.byteLength, s[i++] = 3, i += wa(s, i, t.byteLength + 1), s[i++] = 0, s.set(new Uint8Array(t), i), s;
}
const iu = (t, e) => {
  let r = 0;
  const n = (a, d) => {
    if (i[r++] !== a)
      throw new Error("Expected: " + d);
  }, i = new Uint8Array(t);
  if (n(48, "sequence"), r += as(i, r), !A0(i.slice(r, r + e.byteLength), e))
    throw new Error("Not the expected OID.");
  r += e.byteLength, n(3, "bit string");
  const s = rd(i, r) - 1;
  r += as(i, r), n(0, "0 padding");
  const c = i.slice(r);
  if (s !== c.length)
    throw new Error(`DER payload mismatch: Expected length ${s} actual length ${c.length}`);
  return c;
};
var ba = globalThis && globalThis.__classPrivateFieldSet || function(t, e, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, ma = globalThis && globalThis.__classPrivateFieldGet || function(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, Vn, Gn;
let su = class Qr {
  // `fromRaw` and `fromDer` should be used for instantiation, not this constructor.
  constructor(e) {
    if (Vn.set(this, void 0), Gn.set(this, void 0), e.byteLength !== Qr.RAW_KEY_LENGTH)
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    ba(this, Vn, e, "f"), ba(this, Gn, Qr.derEncode(e), "f");
  }
  static from(e) {
    return this.fromDer(e.toDer());
  }
  static fromRaw(e) {
    return new Qr(e);
  }
  static fromDer(e) {
    return new Qr(this.derDecode(e));
  }
  static derEncode(e) {
    return nu(e, x0).buffer;
  }
  static derDecode(e) {
    const r = iu(e, x0);
    if (r.length !== this.RAW_KEY_LENGTH)
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    return r;
  }
  get rawKey() {
    return ma(this, Vn, "f");
  }
  get derKey() {
    return ma(this, Gn, "f");
  }
  toDer() {
    return this.derKey;
  }
  toRaw() {
    return this.rawKey;
  }
};
Vn = /* @__PURE__ */ new WeakMap(), Gn = /* @__PURE__ */ new WeakMap();
su.RAW_KEY_LENGTH = 32;
class nd {
  constructor() {
    this.observers = [];
  }
  subscribe(e) {
    this.observers.push(e);
  }
  unsubscribe(e) {
    this.observers = this.observers.filter((r) => r !== e);
  }
  notify(e, ...r) {
    this.observers.forEach((n) => n(e, ...r));
  }
}
class id extends nd {
  constructor() {
    super();
  }
  print(e, ...r) {
    this.notify({ message: e, level: "info" }, ...r);
  }
  warn(e, ...r) {
    this.notify({ message: e, level: "warn" }, ...r);
  }
  error(e, r, ...n) {
    this.notify({ message: e, level: "error", error: r }, ...n);
  }
}
var Tt = globalThis && globalThis.__classPrivateFieldSet || function(t, e, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, rt = globalThis && globalThis.__classPrivateFieldGet || function(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, St, Wn, Ln, Kn, Yn, Zn, Qn, Xn, Rr;
const au = 0.5, ou = 1.5, cu = 500, uu = 6e4, fu = 9e5, lu = 10;
class S0 {
  constructor(e = S0.default) {
    St.set(this, void 0), Wn.set(this, void 0), Ln.set(this, void 0), Kn.set(this, void 0), Yn.set(this, void 0), Zn.set(this, void 0), Qn.set(this, void 0), Xn.set(this, void 0), Rr.set(this, 0);
    const { initialInterval: r = cu, randomizationFactor: n = au, multiplier: i = ou, maxInterval: s = uu, maxElapsedTime: c = fu, maxIterations: a = lu, date: d = Date } = e;
    Tt(this, St, r, "f"), Tt(this, Wn, n, "f"), Tt(this, Ln, i, "f"), Tt(this, Kn, s, "f"), Tt(this, Xn, d, "f"), Tt(this, Yn, d.now(), "f"), Tt(this, Zn, c, "f"), Tt(this, Qn, a, "f");
  }
  get ellapsedTimeInMsec() {
    return rt(this, Xn, "f").now() - rt(this, Yn, "f");
  }
  get currentInterval() {
    return rt(this, St, "f");
  }
  get count() {
    return rt(this, Rr, "f");
  }
  get randomValueFromInterval() {
    const e = rt(this, Wn, "f") * rt(this, St, "f"), r = rt(this, St, "f") - e, n = rt(this, St, "f") + e;
    return Math.random() * (n - r) + r;
  }
  incrementCurrentInterval() {
    var e;
    return Tt(this, St, Math.min(rt(this, St, "f") * rt(this, Ln, "f"), rt(this, Kn, "f")), "f"), Tt(this, Rr, (e = rt(this, Rr, "f"), e++, e), "f"), rt(this, St, "f");
  }
  next() {
    return this.ellapsedTimeInMsec >= rt(this, Zn, "f") || rt(this, Rr, "f") >= rt(this, Qn, "f") ? null : (this.incrementCurrentInterval(), this.randomValueFromInterval);
  }
}
St = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), Ln = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap();
S0.default = {
  initialInterval: cu,
  randomizationFactor: au,
  multiplier: ou,
  maxInterval: uu,
  // 1 minute
  maxElapsedTime: fu,
  maxIterations: lu,
  date: Date
};
var Tn = globalThis && globalThis.__classPrivateFieldSet || function(t, e, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, Ce = globalThis && globalThis.__classPrivateFieldGet || function(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, Ut, _t, pr, Jn, Or, Mr, yr, br, hu, e0, t0, Pt;
(function(t) {
  t.Received = "received", t.Processing = "processing", t.Replied = "replied", t.Rejected = "rejected", t.Unknown = "unknown", t.Done = "done";
})(Pt || (Pt = {}));
const Sn = 5 * 60 * 1e3, sd = "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100814c0e6ec71fab583b08bd81373c255c3c371b2e84863c98a4f1e08b74235d14fb5d9c0cd546d9685f913a0c0b2cc5341583bf4b4392e467db96d65b9bb4cb717112f8472e0d5a4d14505ffd7484b01291091c5f87b98883463f98091a0baaae", ad = "ic0.app", od = ".ic0.app", cd = "icp0.io", ud = ".icp0.io", fd = "icp-api.io", ld = ".icp-api.io";
class X0 extends ht {
  constructor(e) {
    super(e), this.message = e;
  }
}
class Nn extends ht {
  constructor(e) {
    super(e), this.message = e;
  }
}
function hd() {
  let t;
  if (typeof window < "u")
    if (window.fetch)
      t = window.fetch.bind(window);
    else
      throw new X0("Fetch implementation was not available. You appear to be in a browser context, but window.fetch was not present.");
  else if (typeof globalThis < "u")
    if (globalThis.fetch)
      t = globalThis.fetch.bind(globalThis);
    else
      throw new X0("Fetch implementation was not available. You appear to be in a Node.js context, but globalThis.fetch was not available.");
  else
    typeof self < "u" && self.fetch && (t = self.fetch.bind(self));
  if (t)
    return t;
  throw new X0("Fetch implementation was not available. Please provide fetch to the HttpAgent constructor, or ensure it is available in the window or globalThis context.");
}
class Ht {
  constructor(e = {}) {
    var r;
    if (Ut.add(this), this.rootKey = $t(sd), this._timeDiffMsecs = 0, this._rootKeyFetched = !1, _t.set(this, void 0), pr.set(this, void 0), this._isAgent = !0, Jn.set(this, 0), this.log = new id(), Or.set(this, []), Mr.set(this, []), yr.set(this, new td({
      expirationTime: 5 * 60 * 1e3
      // 5 minutes
    })), br.set(this, !0), t0.set(this, (i, s) => {
      if (Ce(this, br, "f") === !1)
        return i;
      if (!s)
        throw new Rt("Invalid signature from replica signed query: no matching node key found.");
      const { status: c, signatures: a = [], requestId: d } = i, l = new TextEncoder().encode("\vic-response");
      for (const p of a) {
        const { timestamp: w, identity: _ } = p, m = Ee.fromUint8Array(_).toText();
        let h;
        if (c === "replied") {
          const { reply: C } = i;
          h = u0({
            status: c,
            reply: C,
            timestamp: BigInt(w),
            request_id: d
          });
        } else if (c === "rejected") {
          const { reject_code: C, reject_message: O, error_code: S } = i;
          h = u0({
            status: c,
            reject_code: C,
            reject_message: O,
            error_code: S,
            timestamp: BigInt(w),
            request_id: d
          });
        } else
          throw new Error(`Unknown status: ${c}`);
        const E = Bt(l, new Uint8Array(h)), A = s == null ? void 0 : s.nodeKeys.get(m);
        if (!A)
          throw new Rt("Invalid signature from replica signed query: no matching node key found.");
        const U = su.fromDer(A).rawKey;
        if (Nr.verify(p.signature, new Uint8Array(E), new Uint8Array(U)))
          return i;
        throw new Rt(`Invalid signature from replica ${m} signed query.`);
      }
      return i;
    }), e.source) {
      if (!(e.source instanceof Ht))
        throw new Error("An Agent's source can only be another HttpAgent");
      this._identity = e.source._identity, this._fetch = e.source._fetch, this._host = e.source._host, this._credentials = e.source._credentials;
    } else
      this._fetch = e.fetch || hd() || fetch.bind(globalThis), this._fetchOptions = e.fetchOptions, this._callOptions = e.callOptions;
    if (e.host !== void 0)
      !e.host.match(/^[a-z]+:/) && typeof window < "u" ? this._host = new URL(window.location.protocol + "//" + e.host) : this._host = new URL(e.host);
    else if (e.source !== void 0)
      this._host = e.source._host;
    else {
      const i = typeof window < "u" ? window.location : void 0;
      i || (this._host = new URL("https://icp-api.io"), this.log.warn("Could not infer host from window.location, defaulting to mainnet gateway of https://icp-api.io. Please provide a host to the HttpAgent constructor to avoid this warning."));
      const s = ["ic0.app", "icp0.io", "127.0.0.1", "localhost"], c = [".github.dev", ".gitpod.io"], a = i == null ? void 0 : i.hostname;
      let d;
      a && typeof a == "string" && (c.some((l) => a.endsWith(l)) ? d = a : d = s.find((l) => a.endsWith(l))), i && d ? this._host = new URL(`${i.protocol}//${d}${i.port ? ":" + i.port : ""}`) : (this._host = new URL("https://icp-api.io"), this.log.warn("Could not infer host from window.location, defaulting to mainnet gateway of https://icp-api.io. Please provide a host to the HttpAgent constructor to avoid this warning."));
    }
    e.verifyQuerySignatures !== void 0 && Tn(this, br, e.verifyQuerySignatures, "f"), Tn(this, _t, (r = e.retryTimes) !== null && r !== void 0 ? r : 3, "f");
    const n = () => new S0({
      maxIterations: Ce(this, _t, "f")
    });
    if (Tn(this, pr, e.backoffStrategy || n, "f"), this._host.hostname.endsWith(od) ? this._host.hostname = ad : this._host.hostname.endsWith(ud) ? this._host.hostname = cd : this._host.hostname.endsWith(ld) && (this._host.hostname = fd), e.credentials) {
      const { name: i, password: s } = e.credentials;
      this._credentials = `${i}${s ? ":" + s : ""}`;
    }
    this._identity = Promise.resolve(e.identity || new qr()), this.addTransform("update", Ys(es)), e.useQueryNonces && this.addTransform("query", Ys(es)), e.logToConsole && this.log.subscribe((i) => {
      i.level === "error" ? console.error(i.message) : i.level === "warn" ? console.warn(i.message) : console.log(i.message);
    });
  }
  get waterMark() {
    return Ce(this, Jn, "f");
  }
  isLocal() {
    const e = this._host.hostname;
    return e === "127.0.0.1" || e.endsWith("127.0.0.1");
  }
  addTransform(e, r, n = r.priority || 0) {
    if (e === "update") {
      const i = Ce(this, Mr, "f").findIndex((s) => (s.priority || 0) < n);
      Ce(this, Mr, "f").splice(i >= 0 ? i : Ce(this, Mr, "f").length, 0, Object.assign(r, { priority: n }));
    } else if (e === "query") {
      const i = Ce(this, Or, "f").findIndex((s) => (s.priority || 0) < n);
      Ce(this, Or, "f").splice(i >= 0 ? i : Ce(this, Or, "f").length, 0, Object.assign(r, { priority: n }));
    }
  }
  async getPrincipal() {
    if (!this._identity)
      throw new Nn("This identity has expired due this application's security policy. Please refresh your authentication.");
    return (await this._identity).getPrincipal();
  }
  async call(e, r, n) {
    const i = await (n !== void 0 ? await n : await this._identity);
    if (!i)
      throw new Nn("This identity has expired due this application's security policy. Please refresh your authentication.");
    const s = Ee.from(e), c = r.effectiveCanisterId ? Ee.from(r.effectiveCanisterId) : s, a = i.getPrincipal() || Ee.anonymous();
    let d = new En(Sn);
    Math.abs(this._timeDiffMsecs) > 1e3 * 30 && (d = new En(Sn + this._timeDiffMsecs));
    const l = {
      request_type: Ji.Call,
      canister_id: s,
      method_name: r.methodName,
      arg: r.arg,
      sender: a,
      ingress_expiry: d
    };
    let p = await this._transform({
      request: {
        body: null,
        method: "POST",
        headers: Object.assign({ "Content-Type": "application/cbor" }, this._credentials ? { Authorization: "Basic " + btoa(this._credentials) } : {})
      },
      endpoint: "call",
      body: l
    });
    p = await i.transformRequest(p);
    const w = G0(p.body);
    this.log.print(`fetching "/api/v2/canister/${c.toText()}/call" with request:`, p);
    const _ = Ce(this, pr, "f").call(this), m = Ce(this, Ut, "m", e0).call(this, {
      request: () => this._fetch("" + new URL(`/api/v2/canister/${c.toText()}/call`, this._host), Object.assign(Object.assign(Object.assign({}, this._callOptions), p.request), { body: w })),
      backoff: _,
      tries: 0
    }), [h, E] = await Promise.all([m, sn(l)]), A = await h.arrayBuffer(), U = h.status === 200 && A.byteLength > 0 ? jt(A) : null;
    return {
      requestId: E,
      response: {
        ok: h.ok,
        status: h.status,
        statusText: h.statusText,
        body: U,
        headers: Pn(h.headers)
      }
    };
  }
  async query(e, r, n) {
    const i = Ce(this, pr, "f").call(this), s = r.effectiveCanisterId ? Ee.from(r.effectiveCanisterId) : Ee.from(e);
    this.log.print(`ecid ${s.toString()}`), this.log.print(`canisterId ${e.toString()}`);
    const c = async () => {
      const p = await (n !== void 0 ? await n : await this._identity);
      if (!p)
        throw new Nn("This identity has expired due this application's security policy. Please refresh your authentication.");
      const w = Ee.from(e), _ = (p == null ? void 0 : p.getPrincipal()) || Ee.anonymous(), m = {
        request_type: "query",
        canister_id: w,
        method_name: r.methodName,
        arg: r.arg,
        sender: _,
        ingress_expiry: new En(Sn)
      }, h = await sn(m);
      let E = await this._transform({
        request: {
          method: "POST",
          headers: Object.assign({ "Content-Type": "application/cbor" }, this._credentials ? { Authorization: "Basic " + btoa(this._credentials) } : {})
        },
        endpoint: "read",
        body: m
      });
      E = await (p == null ? void 0 : p.transformRequest(E));
      const A = G0(E.body), U = {
        canister: w.toText(),
        ecid: s,
        transformedRequest: E,
        body: A,
        requestId: h,
        backoff: i,
        tries: 0
      };
      return await Ce(this, Ut, "m", hu).call(this, U);
    }, a = async () => {
      if (!Ce(this, br, "f"))
        return;
      const p = Ce(this, yr, "f").get(s.toString());
      return p || (await this.fetchSubnetKeys(s.toString()), Ce(this, yr, "f").get(s.toString()));
    }, [d, l] = await Promise.all([c(), a()]);
    if (this.log.print("Query response:", d), !Ce(this, br, "f"))
      return d;
    try {
      return Ce(this, t0, "f").call(this, d, l);
    } catch {
      this.log.warn("Query response verification failed. Retrying with fresh subnet keys."), Ce(this, yr, "f").delete(e.toString()), await this.fetchSubnetKeys(s.toString());
      const w = Ce(this, yr, "f").get(e.toString());
      if (!w)
        throw new Rt("Invalid signature from replica signed query: no matching node key found.");
      return Ce(this, t0, "f").call(this, d, w);
    }
  }
  async createReadStateRequest(e, r) {
    const n = await (r !== void 0 ? await r : await this._identity);
    if (!n)
      throw new Nn("This identity has expired due this application's security policy. Please refresh your authentication.");
    const i = (n == null ? void 0 : n.getPrincipal()) || Ee.anonymous(), s = await this._transform({
      request: {
        method: "POST",
        headers: Object.assign({ "Content-Type": "application/cbor" }, this._credentials ? { Authorization: "Basic " + btoa(this._credentials) } : {})
      },
      endpoint: "read_state",
      body: {
        request_type: "read_state",
        paths: e.paths,
        sender: i,
        ingress_expiry: new En(Sn)
      }
    });
    return n == null ? void 0 : n.transformRequest(s);
  }
  async readState(e, r, n, i) {
    const s = typeof e == "string" ? Ee.fromText(e) : e, c = i ?? await this.createReadStateRequest(r, n), a = G0(c.body);
    this.log.print(`fetching "/api/v2/canister/${s}/read_state" with request:`, c);
    const d = Ce(this, pr, "f").call(this), l = await Ce(this, Ut, "m", e0).call(this, {
      request: () => this._fetch("" + new URL(`/api/v2/canister/${s.toString()}/read_state`, this._host), Object.assign(Object.assign(Object.assign({}, this._fetchOptions), c.request), { body: a })),
      backoff: d,
      tries: 0
    });
    if (!l.ok)
      throw new Error(`Server returned an error:
  Code: ${l.status} (${l.statusText})
  Body: ${await l.text()}
`);
    const p = jt(await l.arrayBuffer());
    this.log.print("Read state response:", p);
    const w = await this.parseTimeFromResponse(p);
    return w > 0 && (this.log.print("Read state response time:", w), Tn(this, Jn, w, "f")), p;
  }
  async parseTimeFromResponse(e) {
    let r;
    if (e.certificate) {
      const n = jt(e.certificate);
      if (n && "tree" in n)
        r = n.tree;
      else
        throw new Error("Could not decode time from response");
      const i = $r(["time"], r);
      if (i.status !== Le.Found)
        throw new Error("Time was not found in the response or was not in its expected format.");
      if (!(i.value instanceof ArrayBuffer) && !ArrayBuffer.isView(i))
        throw new Error("Time was not found in the response or was not in its expected format.");
      const s = Cs(ws(i.value));
      return this.log.print("Time from response:", s), this.log.print("Time from response in milliseconds:", Number(s)), Number(s);
    } else
      this.log.warn("No certificate found in response");
    return 0;
  }
  /**
   * Allows agent to sync its time with the network. Can be called during intialization or mid-lifecycle if the device's clock has drifted away from the network time. This is necessary to set the Expiry for a request
   * @param {Principal} canisterId - Pass a canister ID if you need to sync the time with a particular replica. Uses the management canister by default
   */
  async syncTime(e) {
    const r = await Promise.resolve().then(() => yh), n = Date.now();
    try {
      e || this.log.print("Syncing time with the IC. No canisterId provided, so falling back to ryjl3-tyaaa-aaaaa-aaaba-cai");
      const s = (await r.request({
        // Fall back with canisterId of the ICP Ledger
        canisterId: e ?? Ee.from("ryjl3-tyaaa-aaaaa-aaaba-cai"),
        agent: this,
        paths: ["time"]
      })).get("time");
      s && (this._timeDiffMsecs = Number(s) - Number(n));
    } catch (i) {
      this.log.error("Caught exception while attempting to sync time", i);
    }
  }
  async status() {
    const e = this._credentials ? {
      Authorization: "Basic " + btoa(this._credentials)
    } : {};
    this.log.print('fetching "/api/v2/status"');
    const r = Ce(this, pr, "f").call(this), n = await Ce(this, Ut, "m", e0).call(this, {
      backoff: r,
      request: () => this._fetch("" + new URL("/api/v2/status", this._host), Object.assign({ headers: e }, this._fetchOptions)),
      tries: 0
    });
    return jt(await n.arrayBuffer());
  }
  async fetchRootKey() {
    return this._rootKeyFetched || (this.rootKey = (await this.status()).root_key, this._rootKeyFetched = !0), this.rootKey;
  }
  invalidateIdentity() {
    this._identity = null;
  }
  replaceIdentity(e) {
    this._identity = Promise.resolve(e);
  }
  async fetchSubnetKeys(e) {
    const r = Ee.from(e), i = (await Qc({
      canisterId: r,
      paths: ["subnet"],
      agent: this
    })).get("subnet");
    if (i && typeof i == "object" && "nodeKeys" in i)
      return Ce(this, yr, "f").set(r.toText(), i), i;
  }
  _transform(e) {
    let r = Promise.resolve(e);
    if (e.endpoint === "call")
      for (const n of Ce(this, Mr, "f"))
        r = r.then((i) => n(i).then((s) => s || i));
    else
      for (const n of Ce(this, Or, "f"))
        r = r.then((i) => n(i).then((s) => s || i));
    return r;
  }
}
_t = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), Jn = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), t0 = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakSet(), hu = async function t(e) {
  var r, n;
  const { ecid: i, transformedRequest: s, body: c, requestId: a, backoff: d, tries: l } = e, p = l === 0 ? 0 : d.next();
  if (this.log.print(`fetching "/api/v2/canister/${i.toString()}/query" with tries:`, {
    tries: l,
    backoff: d,
    delay: p
  }), p === null)
    throw new ht(`Timestamp failed to pass the watermark after retrying the configured ${Ce(this, _t, "f")} times. We cannot guarantee the integrity of the response since it could be a replay attack.`);
  p > 0 && await new Promise((h) => setTimeout(h, p));
  let w;
  try {
    this.log.print(`fetching "/api/v2/canister/${i.toString()}/query" with request:`, s);
    const h = await this._fetch("" + new URL(`/api/v2/canister/${i.toString()}/query`, this._host), Object.assign(Object.assign(Object.assign({}, this._fetchOptions), s.request), { body: c }));
    if (h.status === 200) {
      const E = jt(await h.arrayBuffer());
      w = Object.assign(Object.assign({}, E), { httpDetails: {
        ok: h.ok,
        status: h.status,
        statusText: h.statusText,
        headers: Pn(h.headers)
      }, requestId: a });
    } else
      throw new Zs(`Gateway returned an error:
  Code: ${h.status} (${h.statusText})
  Body: ${await h.text()}
`, {
        ok: h.ok,
        status: h.status,
        statusText: h.statusText,
        headers: Pn(h.headers)
      });
  } catch (h) {
    if (l < Ce(this, _t, "f"))
      return this.log.warn(`Caught exception while attempting to make query:
  ${h}
  Retrying query.`), await Ce(this, Ut, "m", t).call(this, Object.assign(Object.assign({}, e), { tries: l + 1 }));
    throw h;
  }
  const _ = (n = (r = w.signatures) === null || r === void 0 ? void 0 : r[0]) === null || n === void 0 ? void 0 : n.timestamp;
  if (!Ce(this, br, "f"))
    return w;
  if (!_)
    throw new Error("Timestamp not found in query response. This suggests a malformed or malicious response.");
  const m = Number(BigInt(_) / BigInt(1e6));
  if (this.log.print("watermark and timestamp", {
    waterMark: this.waterMark,
    timestamp: m
  }), Number(this.waterMark) > m) {
    const h = new ht("Timestamp is below the watermark. Retrying query.");
    if (this.log.error("Timestamp is below", h, {
      timestamp: _,
      waterMark: this.waterMark
    }), l < Ce(this, _t, "f"))
      return await Ce(this, Ut, "m", t).call(this, Object.assign(Object.assign({}, e), { tries: l + 1 }));
    throw new ht(`Timestamp failed to pass the watermark after retrying the configured ${Ce(this, _t, "f")} times. We cannot guarantee the integrity of the response since it could be a replay attack.`);
  }
  return w;
}, e0 = async function t(e) {
  const { request: r, backoff: n, tries: i } = e, s = i === 0 ? 0 : n.next();
  if (s === null)
    throw new ht(`Timestamp failed to pass the watermark after retrying the configured ${Ce(this, _t, "f")} times. We cannot guarantee the integrity of the response since it could be a replay attack.`);
  s > 0 && await new Promise((l) => setTimeout(l, s));
  let c;
  try {
    c = await r();
  } catch (l) {
    if (Ce(this, _t, "f") > i)
      return this.log.warn(`Caught exception while attempting to make request:
  ${l}
  Retrying request.`), await Ce(this, Ut, "m", t).call(this, { request: r, backoff: n, tries: i + 1 });
    throw l;
  }
  if (c.ok)
    return c;
  const a = await c.clone().text(), d = `Server returned an error:
  Code: ${c.status} (${c.statusText})
  Body: ${a}
`;
  if (i < Ce(this, _t, "f"))
    return await Ce(this, Ut, "m", t).call(this, { request: r, backoff: n, tries: i + 1 });
  throw new Zs(d, {
    ok: c.ok,
    status: c.status,
    statusText: c.statusText,
    headers: Pn(c.headers)
  });
};
var _a;
(function(t) {
  t.Error = "err", t.GetPrincipal = "gp", t.GetPrincipalResponse = "gpr", t.Query = "q", t.QueryResponse = "qr", t.Call = "c", t.CallResponse = "cr", t.ReadState = "rs", t.ReadStateResponse = "rsr", t.Status = "s", t.StatusResponse = "sr";
})(_a || (_a = {}));
function Ea() {
  const t = typeof window > "u" ? typeof globalThis > "u" ? typeof self > "u" ? void 0 : self.ic.agent : globalThis.ic.agent : window.ic.agent;
  if (!t)
    throw new Error("No Agent could be found.");
  return t;
}
const dd = 5 * 60 * 1e3;
function xd() {
  return bd(yd(pd(), 1e3), wd(1e3, 1.2), gd(dd));
}
function pd() {
  let t = !0;
  return async () => t ? (t = !1, !0) : !1;
}
function yd(t, e) {
  return async (r, n, i) => {
    if (await t(r, n, i))
      return new Promise((s) => setTimeout(s, e));
  };
}
function gd(t) {
  const e = Date.now() + t;
  return async (r, n, i) => {
    if (Date.now() > e)
      throw new Error(`Request timed out after ${t} msec:
  Request ID: ${tt(n)}
  Request status: ${i}
`);
  };
}
function wd(t, e) {
  let r = t;
  return () => new Promise((n) => setTimeout(() => {
    r *= e, n();
  }, r));
}
function bd(...t) {
  return async (e, r, n) => {
    for (const i of t)
      await i(e, r, n);
  };
}
async function du(t, e, r, n, i, s) {
  var c;
  const a = [new TextEncoder().encode("request_status"), r], d = i ?? await ((c = t.createReadStateRequest) === null || c === void 0 ? void 0 : c.call(t, { paths: [a] })), l = await t.readState(e, { paths: [a] }, void 0, d);
  if (t.rootKey == null)
    throw new Error("Agent root key not initialized before polling");
  const p = await Dr.create({
    certificate: l.certificate,
    rootKey: t.rootKey,
    canisterId: e,
    blsVerify: s
  }), w = mr(p.lookup([...a, new TextEncoder().encode("status")]));
  let _;
  switch (typeof w > "u" ? _ = Pt.Unknown : _ = new TextDecoder().decode(w), _) {
    case Pt.Replied:
      return mr(p.lookup([...a, "reply"]));
    case Pt.Received:
    case Pt.Unknown:
    case Pt.Processing:
      return await n(e, r, _), du(t, e, r, n, d);
    case Pt.Rejected: {
      const m = new Uint8Array(mr(p.lookup([...a, "reject_code"])))[0], h = new TextDecoder().decode(mr(p.lookup([...a, "reject_message"])));
      throw new Error(`Call was rejected:
  Request ID: ${tt(r)}
  Reject code: ${m}
  Reject text: ${h}
`);
    }
    case Pt.Done:
      throw new Error(`Call was marked as done but we never saw the reply:
  Request ID: ${tt(r)}
`);
  }
  throw new Error("unreachable");
}
const md = ({ IDL: t }) => {
  const e = t.Variant({
    mainnet: t.Null,
    testnet: t.Null
  }), r = t.Text, n = t.Record({
    network: e,
    address: r,
    min_confirmations: t.Opt(t.Nat32)
  }), i = t.Nat64, s = i, c = t.Record({
    network: e
  }), a = t.Nat64, d = t.Vec(a), l = t.Record({
    network: e,
    filter: t.Opt(t.Variant({
      page: t.Vec(t.Nat8),
      min_confirmations: t.Nat32
    })),
    address: r
  }), p = t.Vec(t.Nat8), w = t.Record({
    txid: t.Vec(t.Nat8),
    vout: t.Nat32
  }), _ = t.Record({
    height: t.Nat32,
    value: i,
    outpoint: w
  }), m = t.Record({
    next_page: t.Opt(t.Vec(t.Nat8)),
    tip_height: t.Nat32,
    tip_block_hash: p,
    utxos: t.Vec(_)
  }), h = t.Record({
    transaction: t.Vec(t.Nat8),
    network: e
  }), E = t.Principal, A = t.Record({
    canister_id: E,
    num_requested_changes: t.Opt(t.Nat64)
  }), U = t.Variant({
    from_user: t.Record({ user_id: t.Principal }),
    from_canister: t.Record({
      canister_version: t.Opt(t.Nat64),
      canister_id: t.Principal
    })
  }), B = t.Variant({
    creation: t.Record({ controllers: t.Vec(t.Principal) }),
    code_deployment: t.Record({
      mode: t.Variant({
        reinstall: t.Null,
        upgrade: t.Null,
        install: t.Null
      }),
      module_hash: t.Vec(t.Nat8)
    }),
    controllers_change: t.Record({
      controllers: t.Vec(t.Principal)
    }),
    code_uninstall: t.Null
  }), C = t.Record({
    timestamp_nanos: t.Nat64,
    canister_version: t.Nat64,
    origin: U,
    details: B
  }), O = t.Record({
    controllers: t.Vec(t.Principal),
    module_hash: t.Opt(t.Vec(t.Nat8)),
    recent_changes: t.Vec(C),
    total_num_changes: t.Nat64
  }), S = t.Record({ canister_id: E }), k = t.Variant({
    controllers: t.Null,
    public: t.Null
  }), P = t.Record({
    freezing_threshold: t.Nat,
    controllers: t.Vec(t.Principal),
    reserved_cycles_limit: t.Nat,
    log_visibility: k,
    wasm_memory_limit: t.Nat,
    memory_allocation: t.Nat,
    compute_allocation: t.Nat
  }), H = t.Record({
    status: t.Variant({
      stopped: t.Null,
      stopping: t.Null,
      running: t.Null
    }),
    memory_size: t.Nat,
    cycles: t.Nat,
    settings: P,
    query_stats: t.Record({
      response_payload_bytes_total: t.Nat,
      num_instructions_total: t.Nat,
      num_calls_total: t.Nat,
      request_payload_bytes_total: t.Nat
    }),
    idle_cycles_burned_per_day: t.Nat,
    module_hash: t.Opt(t.Vec(t.Nat8)),
    reserved_cycles: t.Nat
  }), ie = t.Record({ canister_id: E }), M = t.Record({
    freezing_threshold: t.Opt(t.Nat),
    controllers: t.Opt(t.Vec(t.Principal)),
    reserved_cycles_limit: t.Opt(t.Nat),
    log_visibility: t.Opt(k),
    wasm_memory_limit: t.Opt(t.Nat),
    memory_allocation: t.Opt(t.Nat),
    compute_allocation: t.Opt(t.Nat)
  }), W = t.Record({
    settings: t.Opt(M),
    sender_canister_version: t.Opt(t.Nat64)
  }), ee = t.Record({ canister_id: E }), F = t.Record({ canister_id: E }), q = t.Record({ canister_id: E }), j = t.Variant({ secp256k1: t.Null }), V = t.Record({
    key_id: t.Record({ name: t.Text, curve: j }),
    canister_id: t.Opt(E),
    derivation_path: t.Vec(t.Vec(t.Nat8))
  }), re = t.Record({
    public_key: t.Vec(t.Nat8),
    chain_code: t.Vec(t.Nat8)
  }), se = t.Record({ canister_id: E }), oe = t.Record({
    idx: t.Nat64,
    timestamp_nanos: t.Nat64,
    content: t.Vec(t.Nat8)
  }), he = t.Record({
    canister_log_records: t.Vec(oe)
  }), Z = t.Record({ value: t.Text, name: t.Text }), $ = t.Record({
    status: t.Nat,
    body: t.Vec(t.Nat8),
    headers: t.Vec(Z)
  }), X = t.Record({
    url: t.Text,
    method: t.Variant({
      get: t.Null,
      head: t.Null,
      post: t.Null
    }),
    max_response_bytes: t.Opt(t.Nat64),
    body: t.Opt(t.Vec(t.Nat8)),
    transform: t.Opt(t.Record({
      function: t.Func([
        t.Record({
          context: t.Vec(t.Nat8),
          response: $
        })
      ], [$], ["query"]),
      context: t.Vec(t.Nat8)
    })),
    headers: t.Vec(Z)
  }), y = t.Variant({
    reinstall: t.Null,
    upgrade: t.Opt(t.Record({
      wasm_memory_persistence: t.Opt(t.Variant({ keep: t.Null, replace: t.Null })),
      skip_pre_upgrade: t.Opt(t.Bool)
    })),
    install: t.Null
  }), ce = t.Record({ hash: t.Vec(t.Nat8) }), fe = t.Record({
    arg: t.Vec(t.Nat8),
    wasm_module_hash: t.Vec(t.Nat8),
    mode: y,
    chunk_hashes_list: t.Vec(ce),
    target_canister: E,
    store_canister: t.Opt(E),
    sender_canister_version: t.Opt(t.Nat64)
  }), pe = t.Vec(t.Nat8), ae = t.Record({
    arg: t.Vec(t.Nat8),
    wasm_module: pe,
    mode: y,
    canister_id: E,
    sender_canister_version: t.Opt(t.Nat64)
  }), le = t.Record({
    start_at_timestamp_nanos: t.Nat64,
    subnet_id: t.Principal
  }), T = t.Record({
    num_block_failures_total: t.Nat64,
    node_id: t.Principal,
    num_blocks_proposed_total: t.Nat64
  }), R = t.Vec(t.Record({
    timestamp_nanos: t.Nat64,
    node_metrics: t.Vec(T)
  })), D = t.Record({
    settings: t.Opt(M),
    specified_id: t.Opt(E),
    amount: t.Opt(t.Nat),
    sender_canister_version: t.Opt(t.Nat64)
  }), K = t.Record({
    canister_id: E
  }), G = t.Record({
    canister_id: E,
    amount: t.Nat
  }), Q = t.Vec(t.Nat8), g = t.Record({
    key_id: t.Record({ name: t.Text, curve: j }),
    derivation_path: t.Vec(t.Vec(t.Nat8)),
    message_hash: t.Vec(t.Nat8)
  }), o = t.Record({
    signature: t.Vec(t.Nat8)
  }), u = t.Record({ canister_id: E }), v = t.Record({ canister_id: E }), N = t.Record({ canister_id: E }), z = t.Vec(ce), J = t.Record({
    canister_id: E,
    sender_canister_version: t.Opt(t.Nat64)
  }), ue = t.Record({
    canister_id: t.Principal,
    settings: M,
    sender_canister_version: t.Opt(t.Nat64)
  }), de = t.Record({
    chunk: t.Vec(t.Nat8),
    canister_id: t.Principal
  }), xe = ce;
  return t.Service({
    bitcoin_get_balance: t.Func([n], [s], []),
    bitcoin_get_current_fee_percentiles: t.Func([c], [d], []),
    bitcoin_get_utxos: t.Func([l], [m], []),
    bitcoin_send_transaction: t.Func([h], [], []),
    canister_info: t.Func([A], [O], []),
    canister_status: t.Func([S], [H], []),
    clear_chunk_store: t.Func([ie], [], []),
    create_canister: t.Func([W], [ee], []),
    delete_canister: t.Func([F], [], []),
    deposit_cycles: t.Func([q], [], []),
    ecdsa_public_key: t.Func([V], [re], []),
    fetch_canister_logs: t.Func([se], [he], ["query"]),
    http_request: t.Func([X], [$], []),
    install_chunked_code: t.Func([fe], [], []),
    install_code: t.Func([ae], [], []),
    node_metrics_history: t.Func([le], [R], []),
    provisional_create_canister_with_cycles: t.Func([D], [K], []),
    provisional_top_up_canister: t.Func([G], [], []),
    raw_rand: t.Func([], [Q], []),
    sign_with_ecdsa: t.Func([g], [o], []),
    start_canister: t.Func([u], [], []),
    stop_canister: t.Func([v], [], []),
    stored_chunks: t.Func([N], [z], []),
    uninstall_code: t.Func([J], [], []),
    update_settings: t.Func([ue], [], []),
    upload_chunk: t.Func([de], [xe], [])
  });
};
class xu extends ht {
  constructor(e, r, n, i) {
    super([
      "Call failed:",
      `  Canister: ${e.toText()}`,
      `  Method: ${r} (${n})`,
      ...Object.getOwnPropertyNames(i).map((s) => `  "${s}": ${JSON.stringify(i[s])}`)
    ].join(`
`)), this.canisterId = e, this.methodName = r, this.type = n, this.props = i;
  }
}
class _d extends xu {
  constructor(e, r, n) {
    var i;
    super(e, r, "query", {
      Status: n.status,
      Code: (i = $i[n.reject_code]) !== null && i !== void 0 ? i : `Unknown Code "${n.reject_code}"`,
      Message: n.reject_message
    }), this.result = n;
  }
}
class Ed extends xu {
  constructor(e, r, n, i) {
    super(e, r, "update", Object.assign({ "Request ID": tt(n) }, i.body ? Object.assign(Object.assign({}, i.body.error_code ? {
      "Error code": i.body.error_code
    } : {}), { "Reject code": String(i.body.reject_code), "Reject message": i.body.reject_message }) : {
      "HTTP status code": i.status.toString(),
      "HTTP status text": i.statusText
    })), this.requestId = n, this.response = i;
  }
}
const yt = Symbol.for("ic-agent-metadata");
class cr {
  constructor(e) {
    this[yt] = Object.freeze(e);
  }
  /**
   * Get the Agent class this Actor would call, or undefined if the Actor would use
   * the default agent (globalThis.ic.agent).
   * @param actor The actor to get the agent of.
   */
  static agentOf(e) {
    return e[yt].config.agent;
  }
  /**
   * Get the interface of an actor, in the form of an instance of a Service.
   * @param actor The actor to get the interface of.
   */
  static interfaceOf(e) {
    return e[yt].service;
  }
  static canisterIdOf(e) {
    return Ee.from(e[yt].config.canisterId);
  }
  static async install(e, r) {
    const n = e.mode === void 0 ? { install: null } : e.mode, i = e.arg ? [...new Uint8Array(e.arg)] : [], s = [...new Uint8Array(e.module)], c = typeof r.canisterId == "string" ? Ee.fromText(r.canisterId) : r.canisterId;
    await va(r).install_code({
      mode: n,
      arg: i,
      wasm_module: s,
      canister_id: c,
      sender_canister_version: []
    });
  }
  static async createCanister(e, r) {
    function n(s) {
      return [
        {
          controllers: s.controllers ? [s.controllers] : [],
          compute_allocation: s.compute_allocation ? [s.compute_allocation] : [],
          freezing_threshold: s.freezing_threshold ? [s.freezing_threshold] : [],
          memory_allocation: s.memory_allocation ? [s.memory_allocation] : [],
          reserved_cycles_limit: [],
          log_visibility: [],
          wasm_memory_limit: []
        }
      ];
    }
    const { canister_id: i } = await va(e || {}).provisional_create_canister_with_cycles({
      amount: [],
      settings: n(r || {}),
      specified_id: [],
      sender_canister_version: []
    });
    return i;
  }
  static async createAndInstallCanister(e, r, n) {
    const i = await this.createCanister(n);
    return await this.install(Object.assign({}, r), Object.assign(Object.assign({}, n), { canisterId: i })), this.createActor(e, Object.assign(Object.assign({}, n), { canisterId: i }));
  }
  static createActorClass(e, r) {
    const n = e({ IDL: Ff });
    class i extends cr {
      constructor(c) {
        if (!c.canisterId)
          throw new ht(`Canister ID is required, but received ${typeof c.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in process.env correctly.`);
        const a = typeof c.canisterId == "string" ? Ee.fromText(c.canisterId) : c.canisterId;
        super({
          config: Object.assign(Object.assign(Object.assign({}, pu), c), { canisterId: a }),
          service: n
        });
        for (const [d, l] of n._fields)
          r != null && r.httpDetails && l.annotations.push(os), this[d] = vd(this, d, l, c.blsVerify);
      }
    }
    return i;
  }
  static createActor(e, r) {
    if (!r.canisterId)
      throw new ht(`Canister ID is required, but received ${typeof r.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in process.env correctly.`);
    return new (this.createActorClass(e))(r);
  }
  static createActorWithHttpDetails(e, r) {
    return new (this.createActorClass(e, { httpDetails: !0 }))(r);
  }
}
function Rn(t, e) {
  const r = zo(t, lr.Buffer.from(e));
  switch (r.length) {
    case 0:
      return;
    case 1:
      return r[0];
    default:
      return r;
  }
}
const pu = {
  pollingStrategyFactory: xd
}, os = "http-details";
function vd(t, e, r, n) {
  let i;
  r.annotations.includes("query") || r.annotations.includes("composite_query") ? i = async (c, ...a) => {
    var d, l;
    c = Object.assign(Object.assign({}, c), (l = (d = t[yt].config).queryTransform) === null || l === void 0 ? void 0 : l.call(d, e, a, Object.assign(Object.assign({}, t[yt].config), c)));
    const p = c.agent || t[yt].config.agent || Ea(), w = Ee.from(c.canisterId || t[yt].config.canisterId), _ = Gi(r.argTypes, a), m = await p.query(w, {
      methodName: e,
      arg: _,
      effectiveCanisterId: c.effectiveCanisterId
    });
    switch (m.status) {
      case "rejected":
        throw new _d(w, e, m);
      case "replied":
        return r.annotations.includes(os) ? {
          httpDetails: m.httpDetails,
          result: Rn(r.retTypes, m.reply.arg)
        } : Rn(r.retTypes, m.reply.arg);
    }
  } : i = async (c, ...a) => {
    var d, l;
    c = Object.assign(Object.assign({}, c), (l = (d = t[yt].config).callTransform) === null || l === void 0 ? void 0 : l.call(d, e, a, Object.assign(Object.assign({}, t[yt].config), c)));
    const p = c.agent || t[yt].config.agent || Ea(), { canisterId: w, effectiveCanisterId: _, pollingStrategyFactory: m } = Object.assign(Object.assign(Object.assign({}, pu), t[yt].config), c), h = Ee.from(w), E = _ !== void 0 ? Ee.from(_) : h, A = Gi(r.argTypes, a), { requestId: U, response: B } = await p.call(h, {
      methodName: e,
      arg: A,
      effectiveCanisterId: E
    });
    if (!B.ok || B.body)
      throw new Ed(h, e, U, B);
    const C = m(), O = await du(p, E, U, C, n), S = r.annotations.includes(os);
    if (O !== void 0)
      return S ? {
        httpDetails: B,
        result: Rn(r.retTypes, O)
      } : Rn(r.retTypes, O);
    if (r.retTypes.length === 0)
      return S ? {
        httpDetails: B,
        result: void 0
      } : void 0;
    throw new Error(`Call was returned undefined, but type [${r.retTypes.join(",")}].`);
  };
  const s = (...c) => i({}, ...c);
  return s.withOptions = (c) => (...a) => i(c, ...a), s;
}
function va(t) {
  function e(r, n) {
    if (t.effectiveCanisterId)
      return { effectiveCanisterId: Ee.from(t.effectiveCanisterId) };
    const i = n[0];
    let s = Ee.fromHex("");
    return i && typeof i == "object" && i.canister_id && (s = Ee.from(i.canister_id)), { effectiveCanisterId: s };
  }
  return cr.createActor(md, Object.assign(Object.assign(Object.assign({}, t), { canisterId: Ee.fromHex("") }), {
    callTransform: e,
    queryTransform: e
  }));
}
var p0 = globalThis && globalThis.__classPrivateFieldSet || function(t, e, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, tr = globalThis && globalThis.__classPrivateFieldGet || function(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, r0, n0, Ur, Ir;
function Ba(t) {
  return t !== null && typeof t == "object";
}
class qt {
  // `fromRaw` and `fromDer` should be used for instantiation, not this constructor.
  constructor(e) {
    if (r0.set(this, void 0), n0.set(this, void 0), e.byteLength !== qt.RAW_KEY_LENGTH)
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    p0(this, r0, e, "f"), p0(this, n0, qt.derEncode(e), "f");
  }
  /**
   * Construct Ed25519PublicKey from an existing PublicKey
   * @param {unknown} maybeKey - existing PublicKey, ArrayBuffer, DerEncodedPublicKey, or hex string
   * @returns {Ed25519PublicKey} Instance of Ed25519PublicKey
   */
  static from(e) {
    if (typeof e == "string") {
      const r = $t(e);
      return this.fromRaw(r);
    } else if (Ba(e)) {
      const r = e;
      if (Ba(r) && Object.hasOwnProperty.call(r, "__derEncodedPublicKey__"))
        return this.fromDer(r);
      if (ArrayBuffer.isView(r)) {
        const n = r;
        return this.fromRaw(ws(n.buffer));
      } else {
        if (r instanceof ArrayBuffer)
          return this.fromRaw(r);
        if ("rawKey" in r)
          return this.fromRaw(r.rawKey);
        if ("derKey" in r)
          return this.fromDer(r.derKey);
        if ("toDer" in r)
          return this.fromDer(r.toDer());
      }
    }
    throw new Error("Cannot construct Ed25519PublicKey from the provided key.");
  }
  static fromRaw(e) {
    return new qt(e);
  }
  static fromDer(e) {
    return new qt(this.derDecode(e));
  }
  static derEncode(e) {
    const r = nu(e, x0).buffer;
    return r.__derEncodedPublicKey__ = void 0, r;
  }
  static derDecode(e) {
    const r = iu(e, x0);
    if (r.length !== this.RAW_KEY_LENGTH)
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    return r;
  }
  get rawKey() {
    return tr(this, r0, "f");
  }
  get derKey() {
    return tr(this, n0, "f");
  }
  toDer() {
    return this.derKey;
  }
  toRaw() {
    return this.rawKey;
  }
}
r0 = /* @__PURE__ */ new WeakMap(), n0 = /* @__PURE__ */ new WeakMap();
qt.RAW_KEY_LENGTH = 32;
class ar extends bs {
  // `fromRaw` and `fromDer` should be used for instantiation, not this constructor.
  constructor(e, r) {
    super(), Ur.set(this, void 0), Ir.set(this, void 0), p0(this, Ur, qt.from(e), "f"), p0(this, Ir, new Uint8Array(r), "f");
  }
  /**
   * Generate a new Ed25519KeyIdentity.
   * @param seed a 32-byte seed for the private key. If not provided, a random seed will be generated.
   * @returns Ed25519KeyIdentity
   */
  static generate(e) {
    if (e && e.length !== 32)
      throw new Error("Ed25519 Seed needs to be 32 bytes long.");
    e || (e = Nr.utils.randomPrivateKey()), A0(e, new Uint8Array(new Array(32).fill(0))) && console.warn("Seed is all zeros. This is not a secure seed. Please provide a seed with sufficient entropy if this is a production environment.");
    const r = new Uint8Array(32);
    for (let i = 0; i < 32; i++)
      r[i] = new Uint8Array(e)[i];
    const n = Nr.getPublicKey(r);
    return ar.fromKeyPair(n, r);
  }
  static fromParsedJson(e) {
    const [r, n] = e;
    return new ar(qt.fromDer($t(r)), $t(n));
  }
  static fromJSON(e) {
    const r = JSON.parse(e);
    if (Array.isArray(r)) {
      if (typeof r[0] == "string" && typeof r[1] == "string")
        return this.fromParsedJson([r[0], r[1]]);
      throw new Error("Deserialization error: JSON must have at least 2 items.");
    }
    throw new Error(`Deserialization error: Invalid JSON type for string: ${JSON.stringify(e)}`);
  }
  static fromKeyPair(e, r) {
    return new ar(qt.fromRaw(e), r);
  }
  static fromSecretKey(e) {
    const r = Nr.getPublicKey(new Uint8Array(e));
    return ar.fromKeyPair(r, e);
  }
  /**
   * Serialize this key to JSON.
   */
  toJSON() {
    return [tt(tr(this, Ur, "f").toDer()), tt(tr(this, Ir, "f"))];
  }
  /**
   * Return a copy of the key pair.
   */
  getKeyPair() {
    return {
      secretKey: tr(this, Ir, "f"),
      publicKey: tr(this, Ur, "f")
    };
  }
  /**
   * Return the public key.
   */
  getPublicKey() {
    return tr(this, Ur, "f");
  }
  /**
   * Signs a blob of data, with this identity's private key.
   * @param challenge - challenge to sign with this identity's secretKey, producing a signature
   */
  async sign(e) {
    const r = new Uint8Array(e), n = Jr(Nr.sign(r, tr(this, Ir, "f").slice(0, 32)));
    return Object.defineProperty(n, "__signature__", {
      enumerable: !1,
      value: void 0
    }), n;
  }
  /**
   * Verify
   * @param sig - signature to verify
   * @param msg - message to verify
   * @param pk - public key
   * @returns - true if the signature is valid, false otherwise
   */
  static verify(e, r, n) {
    const [i, s, c] = [e, r, n].map((a) => (typeof a == "string" && (a = $t(a)), a instanceof Uint8Array && (a = a.buffer), new Uint8Array(a)));
    return Nr.verify(s, i, c);
  }
}
Ur = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap();
class Ts extends Error {
  constructor(e) {
    super(e), this.message = e, Object.setPrototypeOf(this, Ts.prototype);
  }
}
function Aa(t) {
  if (typeof globalThis < "u" && globalThis.crypto && globalThis.crypto.subtle)
    return globalThis.crypto.subtle;
  if (t)
    return t;
  if (typeof crypto < "u" && crypto.subtle)
    return crypto.subtle;
  throw new Ts("Global crypto was not available and none was provided. Please inlcude a SubtleCrypto implementation. See https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto");
}
class y0 extends bs {
  // `fromKeyPair` and `generate` should be used for instantiation, not this constructor.
  constructor(e, r, n) {
    super(), this._keyPair = e, this._derKey = r, this._subtleCrypto = n;
  }
  /**
   * Generates a randomly generated identity for use in calls to the Internet Computer.
   * @param {CryptoKeyOptions} options optional settings
   * @param {CryptoKeyOptions['extractable']} options.extractable - whether the key should allow itself to be used. Set to false for maximum security.
   * @param {CryptoKeyOptions['keyUsages']} options.keyUsages - a list of key usages that the key can be used for
   * @param {CryptoKeyOptions['subtleCrypto']} options.subtleCrypto interface
   * @constructs ECDSAKeyIdentity
   * @returns a {@link ECDSAKeyIdentity}
   */
  static async generate(e) {
    const { extractable: r = !1, keyUsages: n = ["sign", "verify"], subtleCrypto: i } = e ?? {}, s = Aa(i), c = await s.generateKey({
      name: "ECDSA",
      namedCurve: "P-256"
    }, r, n), a = await s.exportKey("spki", c.publicKey);
    return new this(c, a, s);
  }
  /**
   * generates an identity from a public and private key. Please ensure that you are generating these keys securely and protect the user's private key
   * @param keyPair a CryptoKeyPair
   * @param subtleCrypto - a SubtleCrypto interface in case one is not available globally
   * @returns an {@link ECDSAKeyIdentity}
   */
  static async fromKeyPair(e, r) {
    const n = Aa(r), i = await n.exportKey("spki", e.publicKey);
    return new y0(e, i, n);
  }
  /**
   * Return the internally-used key pair.
   * @returns a CryptoKeyPair
   */
  getKeyPair() {
    return this._keyPair;
  }
  /**
   * Return the public key.
   * @returns an {@link PublicKey & DerCryptoKey}
   */
  getPublicKey() {
    const e = this._derKey, r = Object.create(this._keyPair.publicKey);
    return r.toDer = function() {
      return e;
    }, r;
  }
  /**
   * Signs a blob of data, with this identity's private key.
   * @param {ArrayBuffer} challenge - challenge to sign with this identity's secretKey, producing a signature
   * @returns {Promise<Signature>} signature
   */
  async sign(e) {
    const r = {
      name: "ECDSA",
      hash: { name: "SHA-256" }
    };
    return this._keyPair.privateKey, await this._subtleCrypto.sign(r, this._keyPair.privateKey, e);
  }
}
var Bd = globalThis && globalThis.__classPrivateFieldSet || function(t, e, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, Lr = globalThis && globalThis.__classPrivateFieldGet || function(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, Xt;
class Ad {
  constructor(e) {
    Xt.set(this, void 0), Bd(this, Xt, e, "f");
  }
  /**
   * The raw public key of this identity.
   */
  get rawKey() {
    return Lr(this, Xt, "f").rawKey;
  }
  /**
   * The DER-encoded public key of this identity.
   */
  get derKey() {
    return Lr(this, Xt, "f").derKey;
  }
  /**
   * The DER-encoded public key of this identity.
   */
  toDer() {
    return Lr(this, Xt, "f").toDer();
  }
  /**
   * The inner {@link PublicKey} used by this identity.
   */
  getPublicKey() {
    return Lr(this, Xt, "f");
  }
  /**
   * The {@link Principal} of this identity.
   */
  getPrincipal() {
    return Ee.from(Lr(this, Xt, "f").rawKey);
  }
  /**
   * Required for the Identity interface, but cannot implemented for just a public key.
   */
  transformRequest() {
    return Promise.reject("Not implemented. You are attempting to use a partial identity to sign calls, but this identity only has access to the public key.To sign calls, use a DelegationIdentity instead.");
  }
}
Xt = /* @__PURE__ */ new WeakMap();
var Cd = globalThis && globalThis.__classPrivateFieldSet || function(t, e, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, Fd = globalThis && globalThis.__classPrivateFieldGet || function(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, Td = globalThis && globalThis.__rest || function(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}, i0;
const Sd = new TextEncoder().encode("ic-request-auth-delegation"), Nd = new TextEncoder().encode(`
ic-request`);
function J0(t) {
  if (typeof t != "string" || t.length < 64)
    throw new Error("Invalid public key.");
  return $t(t);
}
class Ss {
  constructor(e, r, n) {
    this.pubkey = e, this.expiration = r, this.targets = n;
  }
  toCBOR() {
    return lt.value.map(Object.assign({ pubkey: lt.value.bytes(this.pubkey), expiration: lt.value.u64(this.expiration.toString(16), 16) }, this.targets && {
      targets: lt.value.array(this.targets.map((e) => lt.value.bytes(e.toUint8Array())))
    }));
  }
  toJSON() {
    return Object.assign({ expiration: this.expiration.toString(16), pubkey: tt(this.pubkey) }, this.targets && { targets: this.targets.map((e) => e.toHex()) });
  }
}
async function Rd(t, e, r, n) {
  const i = new Ss(
    e.toDer(),
    BigInt(+r) * BigInt(1e6),
    // In nanoseconds.
    n
  ), s = new Uint8Array([
    ...Sd,
    ...new Uint8Array(sn(i))
  ]), c = await t.sign(s);
  return {
    delegation: i,
    signature: c
  };
}
class g0 {
  constructor(e, r) {
    this.delegations = e, this.publicKey = r;
  }
  /**
   * Create a delegation chain between two (or more) keys. By default, the expiration time
   * will be very short (15 minutes).
   *
   * To build a chain of more than 2 identities, this function needs to be called multiple times,
   * passing the previous delegation chain into the options argument. For example:
   * @example
   * const rootKey = createKey();
   * const middleKey = createKey();
   * const bottomeKey = createKey();
   *
   * const rootToMiddle = await DelegationChain.create(
   *   root, middle.getPublicKey(), Date.parse('2100-01-01'),
   * );
   * const middleToBottom = await DelegationChain.create(
   *   middle, bottom.getPublicKey(), Date.parse('2100-01-01'), { previous: rootToMiddle },
   * );
   *
   * // We can now use a delegation identity that uses the delegation above:
   * const identity = DelegationIdentity.fromDelegation(bottomKey, middleToBottom);
   * @param from The identity that will delegate.
   * @param to The identity that gets delegated. It can now sign messages as if it was the
   *           identity above.
   * @param expiration The length the delegation is valid. By default, 15 minutes from calling
   *                   this function.
   * @param options A set of options for this delegation. expiration and previous
   * @param options.previous - Another DelegationChain that this chain should start with.
   * @param options.targets - targets that scope the delegation (e.g. Canister Principals)
   */
  static async create(e, r, n = new Date(Date.now() + 15 * 60 * 1e3), i = {}) {
    var s, c;
    const a = await Rd(e, r, n, i.targets);
    return new g0([...((s = i.previous) === null || s === void 0 ? void 0 : s.delegations) || [], a], ((c = i.previous) === null || c === void 0 ? void 0 : c.publicKey) || e.getPublicKey().toDer());
  }
  /**
   * Creates a DelegationChain object from a JSON string.
   * @param json The JSON string to parse.
   */
  static fromJSON(e) {
    const { publicKey: r, delegations: n } = typeof e == "string" ? JSON.parse(e) : e;
    if (!Array.isArray(n))
      throw new Error("Invalid delegations.");
    const i = n.map((s) => {
      const { delegation: c, signature: a } = s, { pubkey: d, expiration: l, targets: p } = c;
      if (p !== void 0 && !Array.isArray(p))
        throw new Error("Invalid targets.");
      return {
        delegation: new Ss(
          J0(d),
          BigInt("0x" + l),
          // expiration in JSON is an hexa string (See toJSON() below).
          p && p.map((w) => {
            if (typeof w != "string")
              throw new Error("Invalid target.");
            return Ee.fromHex(w);
          })
        ),
        signature: J0(a)
      };
    });
    return new this(i, J0(r));
  }
  /**
   * Creates a DelegationChain object from a list of delegations and a DER-encoded public key.
   * @param delegations The list of delegations.
   * @param publicKey The DER-encoded public key of the key-pair signing the first delegation.
   */
  static fromDelegations(e, r) {
    return new this(e, r);
  }
  toJSON() {
    return {
      delegations: this.delegations.map((e) => {
        const { delegation: r, signature: n } = e, { targets: i } = r;
        return {
          delegation: Object.assign({ expiration: r.expiration.toString(16), pubkey: tt(r.pubkey) }, i && {
            targets: i.map((s) => s.toHex())
          }),
          signature: tt(n)
        };
      }),
      publicKey: tt(this.publicKey)
    };
  }
}
class Ca extends bs {
  constructor(e, r) {
    super(), this._inner = e, this._delegation = r;
  }
  /**
   * Create a delegation without having access to delegateKey.
   * @param key The key used to sign the reqyests.
   * @param delegation A delegation object created using `createDelegation`.
   */
  static fromDelegation(e, r) {
    return new this(e, r);
  }
  getDelegation() {
    return this._delegation;
  }
  getPublicKey() {
    return {
      derKey: this._delegation.publicKey,
      toDer: () => this._delegation.publicKey
    };
  }
  sign(e) {
    return this._inner.sign(e);
  }
  async transformRequest(e) {
    const { body: r } = e, n = Td(e, ["body"]), i = await sn(r);
    return Object.assign(Object.assign({}, n), { body: {
      content: r,
      sender_sig: await this.sign(new Uint8Array([...Nd, ...new Uint8Array(i)])),
      sender_delegation: this._delegation.delegations,
      sender_pubkey: this._delegation.publicKey
    } });
  }
}
class w0 extends Ad {
  constructor(e, r) {
    super(e), i0.set(this, void 0), Cd(this, i0, r, "f");
  }
  /**
   * The Delegation Chain of this identity.
   */
  get delegation() {
    return Fd(this, i0, "f");
  }
  /**
   * Create a {@link PartialDelegationIdentity} from a {@link PublicKey} and a {@link DelegationChain}.
   * @param key The {@link PublicKey} to delegate to.
   * @param delegation a {@link DelegationChain} targeting the inner key.
   * @constructs PartialDelegationIdentity
   */
  static fromDelegation(e, r) {
    return new w0(e, r);
  }
}
i0 = /* @__PURE__ */ new WeakMap();
function Od(t, e) {
  for (const { delegation: i } of t.delegations)
    if (+new Date(Number(i.expiration / BigInt(1e6))) <= +Date.now())
      return !1;
  const r = [], n = e == null ? void 0 : e.scope;
  n && (Array.isArray(n) ? r.push(...n.map((i) => typeof i == "string" ? Ee.fromText(i) : i)) : r.push(typeof n == "string" ? Ee.fromText(n) : n));
  for (const i of r) {
    const s = i.toText();
    for (const { delegation: c } of t.delegations) {
      if (c.targets === void 0)
        continue;
      let a = !0;
      for (const d of c.targets)
        if (d.toText() === s) {
          a = !1;
          break;
        }
      if (a)
        return !1;
    }
  }
  return !0;
}
var Fa;
(function(t) {
  t[t.ECDSA_WITH_SHA256 = -7] = "ECDSA_WITH_SHA256";
})(Fa || (Fa = {}));
const Ta = ["mousedown", "mousemove", "keydown", "touchstart", "wheel"];
class Sa {
  /**
   * @protected
   * @param options {@link IdleManagerOptions}
   */
  constructor(e = {}) {
    var r;
    this.callbacks = [], this.idleTimeout = 10 * 60 * 1e3, this.timeoutID = void 0;
    const { onIdle: n, idleTimeout: i = 10 * 60 * 1e3 } = e || {};
    this.callbacks = n ? [n] : [], this.idleTimeout = i;
    const s = this._resetTimer.bind(this);
    window.addEventListener("load", s, !0), Ta.forEach(function(a) {
      document.addEventListener(a, s, !0);
    });
    const c = (a, d) => {
      let l;
      return (...p) => {
        const w = this, _ = function() {
          l = void 0, a.apply(w, p);
        };
        clearTimeout(l), l = window.setTimeout(_, d);
      };
    };
    if (e != null && e.captureScroll) {
      const a = c(s, (r = e == null ? void 0 : e.scrollDebounce) !== null && r !== void 0 ? r : 100);
      window.addEventListener("scroll", a, !0);
    }
    s();
  }
  /**
   * Creates an {@link IdleManager}
   * @param {IdleManagerOptions} options Optional configuration
   * @see {@link IdleManagerOptions}
   * @param options.onIdle Callback once user has been idle. Use to prompt for fresh login, and use `Actor.agentOf(your_actor).invalidateIdentity()` to protect the user
   * @param options.idleTimeout timeout in ms
   * @param options.captureScroll capture scroll events
   * @param options.scrollDebounce scroll debounce time in ms
   */
  static create(e = {}) {
    return new this(e);
  }
  /**
   * @param {IdleCB} callback function to be called when user goes idle
   */
  registerCallback(e) {
    this.callbacks.push(e);
  }
  /**
   * Cleans up the idle manager and its listeners
   */
  exit() {
    clearTimeout(this.timeoutID), window.removeEventListener("load", this._resetTimer, !0);
    const e = this._resetTimer.bind(this);
    Ta.forEach(function(r) {
      document.removeEventListener(r, e, !0);
    }), this.callbacks.forEach((r) => r());
  }
  /**
   * Resets the timeouts during cleanup
   */
  _resetTimer() {
    const e = this.exit.bind(this);
    window.clearTimeout(this.timeoutID), this.timeoutID = window.setTimeout(e, this.idleTimeout);
  }
}
const Md = (t, e) => e.some((r) => t instanceof r);
let Na, Ra;
function Ud() {
  return Na || (Na = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Id() {
  return Ra || (Ra = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const yu = /* @__PURE__ */ new WeakMap(), cs = /* @__PURE__ */ new WeakMap(), gu = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap(), Ns = /* @__PURE__ */ new WeakMap();
function kd(t) {
  const e = new Promise((r, n) => {
    const i = () => {
      t.removeEventListener("success", s), t.removeEventListener("error", c);
    }, s = () => {
      r(ur(t.result)), i();
    }, c = () => {
      n(t.error), i();
    };
    t.addEventListener("success", s), t.addEventListener("error", c);
  });
  return e.then((r) => {
    r instanceof IDBCursor && yu.set(r, t);
  }).catch(() => {
  }), Ns.set(e, t), e;
}
function Pd(t) {
  if (cs.has(t))
    return;
  const e = new Promise((r, n) => {
    const i = () => {
      t.removeEventListener("complete", s), t.removeEventListener("error", c), t.removeEventListener("abort", c);
    }, s = () => {
      r(), i();
    }, c = () => {
      n(t.error || new DOMException("AbortError", "AbortError")), i();
    };
    t.addEventListener("complete", s), t.addEventListener("error", c), t.addEventListener("abort", c);
  });
  cs.set(t, e);
}
let us = {
  get(t, e, r) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return cs.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || gu.get(t);
      if (e === "store")
        return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0]);
    }
    return ur(t[e]);
  },
  set(t, e, r) {
    return t[e] = r, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function Dd(t) {
  us = t(us);
}
function zd(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...r) {
    const n = t.call(ti(this), e, ...r);
    return gu.set(n, e.sort ? e.sort() : [e]), ur(n);
  } : Id().includes(t) ? function(...e) {
    return t.apply(ti(this), e), ur(yu.get(this));
  } : function(...e) {
    return ur(t.apply(ti(this), e));
  };
}
function jd(t) {
  return typeof t == "function" ? zd(t) : (t instanceof IDBTransaction && Pd(t), Md(t, Ud()) ? new Proxy(t, us) : t);
}
function ur(t) {
  if (t instanceof IDBRequest)
    return kd(t);
  if (ei.has(t))
    return ei.get(t);
  const e = jd(t);
  return e !== t && (ei.set(t, e), Ns.set(e, t)), e;
}
const ti = (t) => Ns.get(t);
function qd(t, e, { blocked: r, upgrade: n, blocking: i, terminated: s } = {}) {
  const c = indexedDB.open(t, e), a = ur(c);
  return n && c.addEventListener("upgradeneeded", (d) => {
    n(ur(c.result), d.oldVersion, d.newVersion, ur(c.transaction), d);
  }), r && c.addEventListener("blocked", (d) => r(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    d.oldVersion,
    d.newVersion,
    d
  )), a.then((d) => {
    s && d.addEventListener("close", () => s()), i && d.addEventListener("versionchange", (l) => i(l.oldVersion, l.newVersion, l));
  }).catch(() => {
  }), a;
}
const $d = ["get", "getKey", "getAll", "getAllKeys", "count"], Hd = ["put", "add", "delete", "clear"], ri = /* @__PURE__ */ new Map();
function Oa(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (ri.get(e))
    return ri.get(e);
  const r = e.replace(/FromIndex$/, ""), n = e !== r, i = Hd.includes(r);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(i || $d.includes(r))
  )
    return;
  const s = async function(c, ...a) {
    const d = this.transaction(c, i ? "readwrite" : "readonly");
    let l = d.store;
    return n && (l = l.index(a.shift())), (await Promise.all([
      l[r](...a),
      i && d.done
    ]))[0];
  };
  return ri.set(e, s), s;
}
Dd((t) => ({
  ...t,
  get: (e, r, n) => Oa(e, r) || t.get(e, r, n),
  has: (e, r) => !!Oa(e, r) || t.has(e, r)
}));
const wu = "auth-client-db", bu = "ic-keyval", Vd = async (t = wu, e = bu, r) => (mu && (localStorage != null && localStorage.getItem(sr)) && (localStorage.removeItem(sr), localStorage.removeItem(rr)), await qd(t, r, {
  upgrade: (n) => {
    n.objectStoreNames, n.objectStoreNames.contains(e) && n.clear(e), n.createObjectStore(e);
  }
}));
async function Gd(t, e, r) {
  return await t.get(e, r);
}
async function Wd(t, e, r, n) {
  return await t.put(e, n, r);
}
async function Ld(t, e, r) {
  return await t.delete(e, r);
}
class Rs {
  // Do not use - instead prefer create
  constructor(e, r) {
    this._db = e, this._storeName = r;
  }
  /**
   * @param {DBCreateOptions} options - DBCreateOptions
   * @param {DBCreateOptions['dbName']} options.dbName name for the indexeddb database
   * @default
   * @param {DBCreateOptions['storeName']} options.storeName name for the indexeddb Data Store
   * @default
   * @param {DBCreateOptions['version']} options.version version of the database. Increment to safely upgrade
   * @constructs an {@link IdbKeyVal}
   */
  static async create(e) {
    const { dbName: r = wu, storeName: n = bu, version: i = Qd } = e ?? {}, s = await Vd(r, n, i);
    return new Rs(s, n);
  }
  /**
   * Basic setter
   * @param {IDBValidKey} key string | number | Date | BufferSource | IDBValidKey[]
   * @param value value to set
   * @returns void
   */
  async set(e, r) {
    return await Wd(this._db, this._storeName, e, r);
  }
  /**
   * Basic getter
   * Pass in a type T for type safety if you know the type the value will have if it is found
   * @param {IDBValidKey} key string | number | Date | BufferSource | IDBValidKey[]
   * @returns `Promise<T | null>`
   * @example
   * await get<string>('exampleKey') -> 'exampleValue'
   */
  async get(e) {
    var r;
    return (r = await Gd(this._db, this._storeName, e)) !== null && r !== void 0 ? r : null;
  }
  /**
   * Remove a key
   * @param key {@link IDBValidKey}
   * @returns void
   */
  async remove(e) {
    return await Ld(this._db, this._storeName, e);
  }
}
var Kd = globalThis && globalThis.__classPrivateFieldSet || function(t, e, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, Yd = globalThis && globalThis.__classPrivateFieldGet || function(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, s0;
const rr = "identity", sr = "delegation", Zd = "iv", Qd = 1, mu = typeof window < "u";
class Xd {
  constructor(e = "ic-", r) {
    this.prefix = e, this._localStorage = r;
  }
  get(e) {
    return Promise.resolve(this._getLocalStorage().getItem(this.prefix + e));
  }
  set(e, r) {
    return this._getLocalStorage().setItem(this.prefix + e, r), Promise.resolve();
  }
  remove(e) {
    return this._getLocalStorage().removeItem(this.prefix + e), Promise.resolve();
  }
  _getLocalStorage() {
    if (this._localStorage)
      return this._localStorage;
    const e = typeof window > "u" ? typeof globalThis > "u" ? typeof self > "u" ? void 0 : self.localStorage : globalThis.localStorage : window.localStorage;
    if (!e)
      throw new Error("Could not find local storage.");
    return e;
  }
}
class Jd {
  /**
   * @param options - DBCreateOptions
   * @param options.dbName - name for the indexeddb database
   * @param options.storeName - name for the indexeddb Data Store
   * @param options.version - version of the database. Increment to safely upgrade
   * @constructs an {@link IdbStorage}
   * @example
   * ```typescript
   * const storage = new IdbStorage({ dbName: 'my-db', storeName: 'my-store', version: 2 });
   * ```
   */
  constructor(e) {
    s0.set(this, void 0), Kd(this, s0, e ?? {}, "f");
  }
  get _db() {
    return new Promise((e) => {
      if (this.initializedDb) {
        e(this.initializedDb);
        return;
      }
      Rs.create(Yd(this, s0, "f")).then((r) => {
        this.initializedDb = r, e(r);
      });
    });
  }
  async get(e) {
    return await (await this._db).get(e);
  }
  async set(e, r) {
    await (await this._db).set(e, r);
  }
  async remove(e) {
    await (await this._db).remove(e);
  }
}
s0 = /* @__PURE__ */ new WeakMap();
const e1 = "https://identity.ic0.app", t1 = "#authorize", ni = "ECDSA", ii = "Ed25519", r1 = 500, n1 = "UserInterrupt";
class _u {
  constructor(e, r, n, i, s, c, a, d) {
    this._identity = e, this._key = r, this._chain = n, this._storage = i, this.idleManager = s, this._createOptions = c, this._idpWindow = a, this._eventHandler = d, this._registerDefaultIdleCallback();
  }
  /**
   * Create an AuthClient to manage authentication and identity
   * @constructs
   * @param {AuthClientCreateOptions} options - Options for creating an {@link AuthClient}
   * @see {@link AuthClientCreateOptions}
   * @param options.identity Optional Identity to use as the base
   * @see {@link SignIdentity}
   * @param options.storage Storage mechanism for delegration credentials
   * @see {@link AuthClientStorage}
   * @param options.keyType Type of key to use for the base key
   * @param {IdleOptions} options.idleOptions Configures an {@link IdleManager}
   * @see {@link IdleOptions}
   * Default behavior is to clear stored identity and reload the page when a user goes idle, unless you set the disableDefaultIdleCallback flag or pass in a custom idle callback.
   * @example
   * const authClient = await AuthClient.create({
   *   idleOptions: {
   *     disableIdle: true
   *   }
   * })
   */
  static async create(e = {}) {
    var r, n, i;
    const s = (r = e.storage) !== null && r !== void 0 ? r : new Jd(), c = (n = e.keyType) !== null && n !== void 0 ? n : ni;
    let a = null;
    if (e.identity)
      a = e.identity;
    else {
      let w = await s.get(rr);
      if (!w && mu)
        try {
          const _ = new Xd(), m = await _.get(sr), h = await _.get(rr);
          m && h && c === ni && (console.log("Discovered an identity stored in localstorage. Migrating to IndexedDB"), await s.set(sr, m), await s.set(rr, h), w = m, await _.remove(sr), await _.remove(rr));
        } catch (_) {
          console.error("error while attempting to recover localstorage: " + _);
        }
      if (w)
        try {
          typeof w == "object" ? c === ii && typeof w == "string" ? a = await ar.fromJSON(w) : a = await y0.fromKeyPair(w) : typeof w == "string" && (a = ar.fromJSON(w));
        } catch {
        }
    }
    let d = new qr(), l = null;
    if (a)
      try {
        const w = await s.get(sr);
        if (typeof w == "object" && w !== null)
          throw new Error("Delegation chain is incorrectly stored. A delegation chain should be stored as a string.");
        e.identity ? d = e.identity : w && (l = g0.fromJSON(w), Od(l) ? "toDer" in a ? d = w0.fromDelegation(a, l) : d = Ca.fromDelegation(a, l) : (await si(s), a = null));
      } catch (w) {
        console.error(w), await si(s), a = null;
      }
    let p;
    return !((i = e.idleOptions) === null || i === void 0) && i.disableIdle ? p = void 0 : (l || e.identity) && (p = Sa.create(e.idleOptions)), a || (c === ii ? (a = await ar.generate(), await s.set(rr, JSON.stringify(a.toJSON()))) : (e.storage && c === ni && console.warn(`You are using a custom storage provider that may not support CryptoKey storage. If you are using a custom storage provider that does not support CryptoKey storage, you should use '${ii}' as the key type, as it can serialize to a string`), a = await y0.generate(), await s.set(rr, a.getKeyPair()))), new this(d, a, l, s, p, e);
  }
  _registerDefaultIdleCallback() {
    var e, r;
    const n = (e = this._createOptions) === null || e === void 0 ? void 0 : e.idleOptions;
    !(n != null && n.onIdle) && !(n != null && n.disableDefaultIdleCallback) && ((r = this.idleManager) === null || r === void 0 || r.registerCallback(() => {
      this.logout(), location.reload();
    }));
  }
  async _handleSuccess(e, r) {
    var n, i;
    const s = e.delegations.map((l) => ({
      delegation: new Ss(l.delegation.pubkey, l.delegation.expiration, l.delegation.targets),
      signature: l.signature.buffer
    })), c = g0.fromDelegations(s, e.userPublicKey.buffer), a = this._key;
    if (!a)
      return;
    this._chain = c, "toDer" in a ? this._identity = w0.fromDelegation(a, this._chain) : this._identity = Ca.fromDelegation(a, this._chain), (n = this._idpWindow) === null || n === void 0 || n.close();
    const d = (i = this._createOptions) === null || i === void 0 ? void 0 : i.idleOptions;
    !this.idleManager && !(d != null && d.disableIdle) && (this.idleManager = Sa.create(d), this._registerDefaultIdleCallback()), this._removeEventListener(), delete this._idpWindow, this._chain && await this._storage.set(sr, JSON.stringify(this._chain.toJSON())), r == null || r(e);
  }
  getIdentity() {
    return this._identity;
  }
  async isAuthenticated() {
    return !this.getIdentity().getPrincipal().isAnonymous() && this._chain !== null;
  }
  /**
   * AuthClient Login -
   * Opens up a new window to authenticate with Internet Identity
   * @param {AuthClientLoginOptions} options - Options for logging in
   * @param options.identityProvider Identity provider
   * @param options.maxTimeToLive Expiration of the authentication in nanoseconds
   * @param options.allowPinAuthentication If present, indicates whether or not the Identity Provider should allow the user to authenticate and/or register using a temporary key/PIN identity. Authenticating dapps may want to prevent users from using Temporary keys/PIN identities because Temporary keys/PIN identities are less secure than Passkeys (webauthn credentials) and because Temporary keys/PIN identities generally only live in a browser database (which may get cleared by the browser/OS).
   * @param options.derivationOrigin Origin for Identity Provider to use while generating the delegated identity
   * @param options.windowOpenerFeatures Configures the opened authentication window
   * @param options.onSuccess Callback once login has completed
   * @param options.onError Callback in case authentication fails
   * @example
   * const authClient = await AuthClient.create();
   * authClient.login({
   *  identityProvider: 'http://<canisterID>.127.0.0.1:8000',
   *  maxTimeToLive: BigInt (7) * BigInt(24) * BigInt(3_600_000_000_000), // 1 week
   *  windowOpenerFeatures: "toolbar=0,location=0,menubar=0,width=500,height=500,left=100,top=100",
   *  onSuccess: () => {
   *    console.log('Login Successful!');
   *  },
   *  onError: (error) => {
   *    console.error('Login Failed: ', error);
   *  }
   * });
   */
  async login(e) {
    var r, n, i, s;
    const c = (
      /* hours */
      BigInt(8) * /* nanoseconds */
      BigInt(36e11)
    ), a = new URL(((r = e == null ? void 0 : e.identityProvider) === null || r === void 0 ? void 0 : r.toString()) || e1);
    a.hash = t1, (n = this._idpWindow) === null || n === void 0 || n.close(), this._removeEventListener(), this._eventHandler = this._getEventHandler(a, Object.assign({ maxTimeToLive: (i = e == null ? void 0 : e.maxTimeToLive) !== null && i !== void 0 ? i : c }, e)), window.addEventListener("message", this._eventHandler), this._idpWindow = (s = window.open(a.toString(), "idpWindow", e == null ? void 0 : e.windowOpenerFeatures)) !== null && s !== void 0 ? s : void 0;
    const d = () => {
      this._idpWindow && (this._idpWindow.closed ? this._handleFailure(n1, e == null ? void 0 : e.onError) : setTimeout(d, r1));
    };
    d();
  }
  _getEventHandler(e, r) {
    return async (n) => {
      var i, s, c;
      if (n.origin !== e.origin) {
        console.warn(`WARNING: expected origin '${e.origin}', got '${n.origin}' (ignoring)`);
        return;
      }
      const a = n.data;
      switch (a.kind) {
        case "authorize-ready": {
          const d = Object.assign({ kind: "authorize-client", sessionPublicKey: new Uint8Array((i = this._key) === null || i === void 0 ? void 0 : i.getPublicKey().toDer()), maxTimeToLive: r == null ? void 0 : r.maxTimeToLive, allowPinAuthentication: r == null ? void 0 : r.allowPinAuthentication, derivationOrigin: (s = r == null ? void 0 : r.derivationOrigin) === null || s === void 0 ? void 0 : s.toString() }, r == null ? void 0 : r.customValues);
          (c = this._idpWindow) === null || c === void 0 || c.postMessage(d, e.origin);
          break;
        }
        case "authorize-client-success":
          try {
            await this._handleSuccess(a, r == null ? void 0 : r.onSuccess);
          } catch (d) {
            this._handleFailure(d.message, r == null ? void 0 : r.onError);
          }
          break;
        case "authorize-client-failure":
          this._handleFailure(a.text, r == null ? void 0 : r.onError);
          break;
      }
    };
  }
  _handleFailure(e, r) {
    var n;
    (n = this._idpWindow) === null || n === void 0 || n.close(), r == null || r(e), this._removeEventListener(), delete this._idpWindow;
  }
  _removeEventListener() {
    this._eventHandler && window.removeEventListener("message", this._eventHandler), this._eventHandler = void 0;
  }
  async logout(e = {}) {
    if (await si(this._storage), this._identity = new qr(), this._chain = null, e.returnTo)
      try {
        window.history.pushState({}, "", e.returnTo);
      } catch {
        window.location.href = e.returnTo;
      }
  }
}
async function si(t) {
  await t.remove(rr), await t.remove(sr), await t.remove(Zd);
}
const i1 = ({ IDL: t }) => {
  const e = t.Record({
    owner: t.Principal,
    subaccount: t.Opt(t.Vec(t.Nat8))
  }), r = t.Record({ icrc2: t.Bool }), n = t.Record({
    maximum_number_of_accounts: t.Opt(t.Nat64),
    icrc1_minting_account: t.Opt(e),
    feature_flags: t.Opt(r)
  }), i = t.Record({ e8s: t.Nat64 }), s = t.Record({ secs: t.Nat64, nanos: t.Nat32 }), c = t.Record({
    num_blocks_to_archive: t.Nat64,
    max_transactions_per_response: t.Opt(t.Nat64),
    trigger_threshold: t.Nat64,
    max_message_size_bytes: t.Opt(t.Nat64),
    cycles_for_archive_creation: t.Opt(t.Nat64),
    node_max_memory_size_bytes: t.Opt(t.Nat64),
    controller_id: t.Principal
  }), a = t.Record({
    send_whitelist: t.Vec(t.Principal),
    token_symbol: t.Opt(t.Text),
    transfer_fee: t.Opt(i),
    minting_account: t.Text,
    maximum_number_of_accounts: t.Opt(t.Nat64),
    accounts_overflow_trim_quantity: t.Opt(t.Nat64),
    transaction_window: t.Opt(s),
    max_message_size_bytes: t.Opt(t.Nat64),
    icrc1_minting_account: t.Opt(e),
    archive_options: t.Opt(c),
    initial_values: t.Vec(t.Tuple(t.Text, i)),
    token_name: t.Opt(t.Text),
    feature_flags: t.Opt(r)
  });
  t.Variant({
    Upgrade: t.Opt(n),
    Init: a
  });
  const d = t.Record({
    account: t.Vec(t.Nat8)
  }), l = t.Record({ account: t.Text }), p = t.Record({ canister_id: t.Principal }), w = t.Record({ archives: t.Vec(p) }), _ = t.Record({ decimals: t.Nat32 }), m = t.Variant({
    Int: t.Int,
    Nat: t.Nat,
    Blob: t.Vec(t.Nat8),
    Text: t.Text
  }), h = t.Record({ url: t.Text, name: t.Text }), E = t.Record({
    to: e,
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
  }), U = t.Variant({ Ok: t.Nat, Err: A }), B = t.Record({
    account: e,
    spender: e
  }), C = t.Record({
    allowance: t.Nat,
    expires_at: t.Opt(t.Nat64)
  }), O = t.Record({
    fee: t.Opt(t.Nat),
    memo: t.Opt(t.Vec(t.Nat8)),
    from_subaccount: t.Opt(t.Vec(t.Nat8)),
    created_at_time: t.Opt(t.Nat64),
    amount: t.Nat,
    expected_allowance: t.Opt(t.Nat),
    expires_at: t.Opt(t.Nat64),
    spender: e
  }), S = t.Variant({
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
  }), k = t.Variant({ Ok: t.Nat, Err: S }), P = t.Record({
    to: e,
    fee: t.Opt(t.Nat),
    spender_subaccount: t.Opt(t.Vec(t.Nat8)),
    from: e,
    memo: t.Opt(t.Vec(t.Nat8)),
    created_at_time: t.Opt(t.Nat64),
    amount: t.Nat
  }), H = t.Variant({
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
  }), ie = t.Variant({ Ok: t.Nat, Err: H }), M = t.Record({ name: t.Text }), W = t.Record({
    start: t.Nat64,
    length: t.Nat64
  }), ee = t.Record({ timestamp_nanos: t.Nat64 }), F = t.Variant({
    Approve: t.Record({
      fee: i,
      from: t.Vec(t.Nat8),
      allowance_e8s: t.Int,
      allowance: i,
      expected_allowance: t.Opt(i),
      expires_at: t.Opt(ee),
      spender: t.Vec(t.Nat8)
    }),
    Burn: t.Record({
      from: t.Vec(t.Nat8),
      amount: i,
      spender: t.Opt(t.Vec(t.Nat8))
    }),
    Mint: t.Record({ to: t.Vec(t.Nat8), amount: i }),
    Transfer: t.Record({
      to: t.Vec(t.Nat8),
      fee: i,
      from: t.Vec(t.Nat8),
      amount: i,
      spender: t.Opt(t.Vec(t.Nat8))
    })
  }), q = t.Record({
    memo: t.Nat64,
    icrc1_memo: t.Opt(t.Vec(t.Nat8)),
    operation: t.Opt(F),
    created_at_time: ee
  }), j = t.Record({
    transaction: q,
    timestamp: ee,
    parent_hash: t.Opt(t.Vec(t.Nat8))
  }), V = t.Record({ blocks: t.Vec(j) }), re = t.Variant({
    BadFirstBlockIndex: t.Record({
      requested_index: t.Nat64,
      first_valid_index: t.Nat64
    }),
    Other: t.Record({
      error_message: t.Text,
      error_code: t.Nat64
    })
  }), se = t.Variant({ Ok: V, Err: re }), oe = t.Record({
    callback: t.Func([W], [se], ["query"]),
    start: t.Nat64,
    length: t.Nat64
  }), he = t.Record({
    certificate: t.Opt(t.Vec(t.Nat8)),
    blocks: t.Vec(j),
    chain_length: t.Nat64,
    first_block_index: t.Nat64,
    archived_blocks: t.Vec(oe)
  }), Z = t.Variant({
    Ok: t.Vec(t.Vec(t.Nat8)),
    Err: re
  }), $ = t.Record({
    callback: t.Func([W], [Z], ["query"]),
    start: t.Nat64,
    length: t.Nat64
  }), X = t.Record({
    certificate: t.Opt(t.Vec(t.Nat8)),
    blocks: t.Vec(t.Vec(t.Nat8)),
    chain_length: t.Nat64,
    first_block_index: t.Nat64,
    archived_blocks: t.Vec($)
  }), y = t.Record({
    to: t.Text,
    fee: i,
    memo: t.Nat64,
    from_subaccount: t.Opt(t.Vec(t.Nat8)),
    created_at_time: t.Opt(ee),
    amount: i
  }), ce = t.Record({ symbol: t.Text }), fe = t.Record({
    to: t.Vec(t.Nat8),
    fee: i,
    memo: t.Nat64,
    from_subaccount: t.Opt(t.Vec(t.Nat8)),
    created_at_time: t.Opt(ee),
    amount: i
  }), pe = t.Variant({
    TxTooOld: t.Record({ allowed_window_nanos: t.Nat64 }),
    BadFee: t.Record({ expected_fee: i }),
    TxDuplicate: t.Record({ duplicate_of: t.Nat64 }),
    TxCreatedInFuture: t.Null,
    InsufficientFunds: t.Record({ balance: i })
  }), ae = t.Variant({ Ok: t.Nat64, Err: pe }), le = t.Record({ transfer_fee: i });
  return t.Service({
    account_balance: t.Func(
      [d],
      [i],
      ["query"]
    ),
    account_balance_dfx: t.Func([l], [i], ["query"]),
    account_identifier: t.Func([e], [t.Vec(t.Nat8)], ["query"]),
    archives: t.Func([], [w], ["query"]),
    decimals: t.Func([], [_], ["query"]),
    icrc1_balance_of: t.Func([e], [t.Nat], ["query"]),
    icrc1_decimals: t.Func([], [t.Nat8], ["query"]),
    icrc1_fee: t.Func([], [t.Nat], ["query"]),
    icrc1_metadata: t.Func(
      [],
      [t.Vec(t.Tuple(t.Text, m))],
      ["query"]
    ),
    icrc1_minting_account: t.Func([], [t.Opt(e)], ["query"]),
    icrc1_name: t.Func([], [t.Text], ["query"]),
    icrc1_supported_standards: t.Func(
      [],
      [t.Vec(h)],
      ["query"]
    ),
    icrc1_symbol: t.Func([], [t.Text], ["query"]),
    icrc1_total_supply: t.Func([], [t.Nat], ["query"]),
    icrc1_transfer: t.Func([E], [U], []),
    icrc2_allowance: t.Func([B], [C], ["query"]),
    icrc2_approve: t.Func([O], [k], []),
    icrc2_transfer_from: t.Func([P], [ie], []),
    name: t.Func([], [M], ["query"]),
    query_blocks: t.Func(
      [W],
      [he],
      ["query"]
    ),
    query_encoded_blocks: t.Func(
      [W],
      [X],
      ["query"]
    ),
    send_dfx: t.Func([y], [t.Nat64], []),
    symbol: t.Func([], [ce], ["query"]),
    transfer: t.Func([fe], [ae], []),
    transfer_fee: t.Func([t.Record({})], [le], ["query"])
  });
};
window.onload = function() {
  window.ic.bitfinityWallet && (s1.readyState = "Installed");
};
const s1 = window.ic ? window.ic.bitfinityWallet ? {
  readyState: "Installed",
  connectWallet: async function(t = { whitelist: [], host: "" }) {
    var e = await window.ic.bitfinityWallet.isConnected();
    e || await window.ic.bitfinityWallet.requestConnect(t), window.ic.bitfinityWallet.agent || await window.ic.bitfinityWallet.requestConnect(t), this.agent = window.ic.bitfinityWallet.agent, this.getPrincipal = async function() {
      return window.ic.bitfinityWallet.getPrincipal();
    }, this.createActor = async function(i) {
      return window.ic.bitfinityWallet.createActor(i);
    }, this.batchTransactions = async function(i) {
      return window.ic.bitfinityWallet.batchTransactions(i);
    };
    var r = await this.getPrincipal(), n = await window.ic.bitfinityWallet.getAccountID();
    return { accountId: n, principalId: r.toString() };
  },
  disConnectWallet: async function() {
    await window.ic.bitfinityWallet.disconnect();
  }
} : { readyState: "NotDetected", url: "https://wallet.infinityswap.one/" } : { readyState: "NotDetected", url: "https://wallet.infinityswap.one/" };
function a1(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
const o1 = new Int32Array([
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
function Eu(t) {
  if (Buffer.isBuffer(t))
    return t;
  if (typeof t == "number")
    return Buffer.alloc(t);
  if (typeof t == "string")
    return Buffer.from(t);
  throw new Error("input must be buffer, number, or string, received " + typeof t);
}
function c1(t) {
  const e = Eu(4);
  return e.writeInt32BE(t, 0), e;
}
function Os(t, e) {
  t = Eu(t), Buffer.isBuffer(e) && (e = e.readUInt32BE(0));
  let r = ~~e ^ -1;
  for (var n = 0; n < t.length; n++)
    r = o1[(r ^ t[n]) & 255] ^ r >>> 8;
  return r ^ -1;
}
function Ms() {
  return c1(Os.apply(null, arguments));
}
Ms.signed = function() {
  return Os.apply(null, arguments);
};
Ms.unsigned = function() {
  return Os.apply(null, arguments) >>> 0;
};
var u1 = Ms;
const f1 = /* @__PURE__ */ a1(u1);
var vu = { exports: {} };
function l1(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ai = { exports: {} };
const h1 = {}, d1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: h1
}, Symbol.toStringTag, { value: "Module" })), x1 = /* @__PURE__ */ Wu(d1);
var Ma;
function Ne() {
  return Ma || (Ma = 1, function(t, e) {
    (function(r, n) {
      t.exports = n();
    })(ve, function() {
      var r = r || function(n, i) {
        var s;
        if (typeof window < "u" && window.crypto && (s = window.crypto), typeof self < "u" && self.crypto && (s = self.crypto), typeof globalThis < "u" && globalThis.crypto && (s = globalThis.crypto), !s && typeof window < "u" && window.msCrypto && (s = window.msCrypto), !s && typeof globalThis < "u" && globalThis.crypto && (s = globalThis.crypto), !s && typeof l1 == "function")
          try {
            s = x1;
          } catch {
          }
        var c = function() {
          if (s) {
            if (typeof s.getRandomValues == "function")
              try {
                return s.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof s.randomBytes == "function")
              try {
                return s.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, a = Object.create || function() {
          function B() {
          }
          return function(C) {
            var O;
            return B.prototype = C, O = new B(), B.prototype = null, O;
          };
        }(), d = {}, l = d.lib = {}, p = l.Base = function() {
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
            extend: function(B) {
              var C = a(this);
              return B && C.mixIn(B), (!C.hasOwnProperty("init") || this.init === C.init) && (C.init = function() {
                C.$super.init.apply(this, arguments);
              }), C.init.prototype = C, C.$super = this, C;
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
              var B = this.extend();
              return B.init.apply(B, arguments), B;
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
            mixIn: function(B) {
              for (var C in B)
                B.hasOwnProperty(C) && (this[C] = B[C]);
              B.hasOwnProperty("toString") && (this.toString = B.toString);
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
        }(), w = l.WordArray = p.extend({
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
          init: function(B, C) {
            B = this.words = B || [], C != i ? this.sigBytes = C : this.sigBytes = B.length * 4;
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
          toString: function(B) {
            return (B || m).stringify(this);
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
          concat: function(B) {
            var C = this.words, O = B.words, S = this.sigBytes, k = B.sigBytes;
            if (this.clamp(), S % 4)
              for (var P = 0; P < k; P++) {
                var H = O[P >>> 2] >>> 24 - P % 4 * 8 & 255;
                C[S + P >>> 2] |= H << 24 - (S + P) % 4 * 8;
              }
            else
              for (var ie = 0; ie < k; ie += 4)
                C[S + ie >>> 2] = O[ie >>> 2];
            return this.sigBytes += k, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var B = this.words, C = this.sigBytes;
            B[C >>> 2] &= 4294967295 << 32 - C % 4 * 8, B.length = n.ceil(C / 4);
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
            var B = p.clone.call(this);
            return B.words = this.words.slice(0), B;
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
          random: function(B) {
            for (var C = [], O = 0; O < B; O += 4)
              C.push(c());
            return new w.init(C, B);
          }
        }), _ = d.enc = {}, m = _.Hex = {
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
          stringify: function(B) {
            for (var C = B.words, O = B.sigBytes, S = [], k = 0; k < O; k++) {
              var P = C[k >>> 2] >>> 24 - k % 4 * 8 & 255;
              S.push((P >>> 4).toString(16)), S.push((P & 15).toString(16));
            }
            return S.join("");
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
          parse: function(B) {
            for (var C = B.length, O = [], S = 0; S < C; S += 2)
              O[S >>> 3] |= parseInt(B.substr(S, 2), 16) << 24 - S % 8 * 4;
            return new w.init(O, C / 2);
          }
        }, h = _.Latin1 = {
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
          stringify: function(B) {
            for (var C = B.words, O = B.sigBytes, S = [], k = 0; k < O; k++) {
              var P = C[k >>> 2] >>> 24 - k % 4 * 8 & 255;
              S.push(String.fromCharCode(P));
            }
            return S.join("");
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
          parse: function(B) {
            for (var C = B.length, O = [], S = 0; S < C; S++)
              O[S >>> 2] |= (B.charCodeAt(S) & 255) << 24 - S % 4 * 8;
            return new w.init(O, C);
          }
        }, E = _.Utf8 = {
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
          stringify: function(B) {
            try {
              return decodeURIComponent(escape(h.stringify(B)));
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
          parse: function(B) {
            return h.parse(unescape(encodeURIComponent(B)));
          }
        }, A = l.BufferedBlockAlgorithm = p.extend({
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
          _append: function(B) {
            typeof B == "string" && (B = E.parse(B)), this._data.concat(B), this._nDataBytes += B.sigBytes;
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
          _process: function(B) {
            var C, O = this._data, S = O.words, k = O.sigBytes, P = this.blockSize, H = P * 4, ie = k / H;
            B ? ie = n.ceil(ie) : ie = n.max((ie | 0) - this._minBufferSize, 0);
            var M = ie * P, W = n.min(M * 4, k);
            if (M) {
              for (var ee = 0; ee < M; ee += P)
                this._doProcessBlock(S, ee);
              C = S.splice(0, M), O.sigBytes -= W;
            }
            return new w.init(C, W);
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
            var B = p.clone.call(this);
            return B._data = this._data.clone(), B;
          },
          _minBufferSize: 0
        });
        l.Hasher = A.extend({
          /**
           * Configuration options.
           */
          cfg: p.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(B) {
            this.cfg = this.cfg.extend(B), this.reset();
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
          update: function(B) {
            return this._append(B), this._process(), this;
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
          finalize: function(B) {
            B && this._append(B);
            var C = this._doFinalize();
            return C;
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
          _createHelper: function(B) {
            return function(C, O) {
              return new B.init(O).finalize(C);
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
          _createHmacHelper: function(B) {
            return function(C, O) {
              return new U.HMAC.init(B, O).finalize(C);
            };
          }
        });
        var U = d.algo = {};
        return d;
      }(Math);
      return r;
    });
  }(ai)), ai.exports;
}
var oi = { exports: {} }, Ua;
function N0() {
  return Ua || (Ua = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(Ne());
    })(ve, function(r) {
      return function(n) {
        var i = r, s = i.lib, c = s.Base, a = s.WordArray, d = i.x64 = {};
        d.Word = c.extend({
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
          init: function(l, p) {
            this.high = l, this.low = p;
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
        }), d.WordArray = c.extend({
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
          init: function(l, p) {
            l = this.words = l || [], p != n ? this.sigBytes = p : this.sigBytes = l.length * 8;
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
            for (var l = this.words, p = l.length, w = [], _ = 0; _ < p; _++) {
              var m = l[_];
              w.push(m.high), w.push(m.low);
            }
            return a.create(w, this.sigBytes);
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
            for (var l = c.clone.call(this), p = l.words = this.words.slice(0), w = p.length, _ = 0; _ < w; _++)
              p[_] = p[_].clone();
            return l;
          }
        });
      }(), r;
    });
  }(oi)), oi.exports;
}
var ci = { exports: {} }, Ia;
function p1() {
  return Ia || (Ia = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(Ne());
    })(ve, function(r) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var n = r, i = n.lib, s = i.WordArray, c = s.init, a = s.init = function(d) {
            if (d instanceof ArrayBuffer && (d = new Uint8Array(d)), (d instanceof Int8Array || typeof Uint8ClampedArray < "u" && d instanceof Uint8ClampedArray || d instanceof Int16Array || d instanceof Uint16Array || d instanceof Int32Array || d instanceof Uint32Array || d instanceof Float32Array || d instanceof Float64Array) && (d = new Uint8Array(d.buffer, d.byteOffset, d.byteLength)), d instanceof Uint8Array) {
              for (var l = d.byteLength, p = [], w = 0; w < l; w++)
                p[w >>> 2] |= d[w] << 24 - w % 4 * 8;
              c.call(this, p, l);
            } else
              c.apply(this, arguments);
          };
          a.prototype = s;
        }
      }(), r.lib.WordArray;
    });
  }(ci)), ci.exports;
}
var ui = { exports: {} }, ka;
function y1() {
  return ka || (ka = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(Ne());
    })(ve, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, c = n.enc;
        c.Utf16 = c.Utf16BE = {
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
          stringify: function(d) {
            for (var l = d.words, p = d.sigBytes, w = [], _ = 0; _ < p; _ += 2) {
              var m = l[_ >>> 2] >>> 16 - _ % 4 * 8 & 65535;
              w.push(String.fromCharCode(m));
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
          parse: function(d) {
            for (var l = d.length, p = [], w = 0; w < l; w++)
              p[w >>> 1] |= d.charCodeAt(w) << 16 - w % 2 * 16;
            return s.create(p, l * 2);
          }
        }, c.Utf16LE = {
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
          stringify: function(d) {
            for (var l = d.words, p = d.sigBytes, w = [], _ = 0; _ < p; _ += 2) {
              var m = a(l[_ >>> 2] >>> 16 - _ % 4 * 8 & 65535);
              w.push(String.fromCharCode(m));
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
          parse: function(d) {
            for (var l = d.length, p = [], w = 0; w < l; w++)
              p[w >>> 1] |= a(d.charCodeAt(w) << 16 - w % 2 * 16);
            return s.create(p, l * 2);
          }
        };
        function a(d) {
          return d << 8 & 4278255360 | d >>> 8 & 16711935;
        }
      }(), r.enc.Utf16;
    });
  }(ui)), ui.exports;
}
var fi = { exports: {} }, Pa;
function Ar() {
  return Pa || (Pa = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(Ne());
    })(ve, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, c = n.enc;
        c.Base64 = {
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
          stringify: function(d) {
            var l = d.words, p = d.sigBytes, w = this._map;
            d.clamp();
            for (var _ = [], m = 0; m < p; m += 3)
              for (var h = l[m >>> 2] >>> 24 - m % 4 * 8 & 255, E = l[m + 1 >>> 2] >>> 24 - (m + 1) % 4 * 8 & 255, A = l[m + 2 >>> 2] >>> 24 - (m + 2) % 4 * 8 & 255, U = h << 16 | E << 8 | A, B = 0; B < 4 && m + B * 0.75 < p; B++)
                _.push(w.charAt(U >>> 6 * (3 - B) & 63));
            var C = w.charAt(64);
            if (C)
              for (; _.length % 4; )
                _.push(C);
            return _.join("");
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
          parse: function(d) {
            var l = d.length, p = this._map, w = this._reverseMap;
            if (!w) {
              w = this._reverseMap = [];
              for (var _ = 0; _ < p.length; _++)
                w[p.charCodeAt(_)] = _;
            }
            var m = p.charAt(64);
            if (m) {
              var h = d.indexOf(m);
              h !== -1 && (l = h);
            }
            return a(d, l, w);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function a(d, l, p) {
          for (var w = [], _ = 0, m = 0; m < l; m++)
            if (m % 4) {
              var h = p[d.charCodeAt(m - 1)] << m % 4 * 2, E = p[d.charCodeAt(m)] >>> 6 - m % 4 * 2, A = h | E;
              w[_ >>> 2] |= A << 24 - _ % 4 * 8, _++;
            }
          return s.create(w, _);
        }
      }(), r.enc.Base64;
    });
  }(fi)), fi.exports;
}
var li = { exports: {} }, Da;
function g1() {
  return Da || (Da = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(Ne());
    })(ve, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, c = n.enc;
        c.Base64url = {
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
          stringify: function(d, l) {
            l === void 0 && (l = !0);
            var p = d.words, w = d.sigBytes, _ = l ? this._safe_map : this._map;
            d.clamp();
            for (var m = [], h = 0; h < w; h += 3)
              for (var E = p[h >>> 2] >>> 24 - h % 4 * 8 & 255, A = p[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255, U = p[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, B = E << 16 | A << 8 | U, C = 0; C < 4 && h + C * 0.75 < w; C++)
                m.push(_.charAt(B >>> 6 * (3 - C) & 63));
            var O = _.charAt(64);
            if (O)
              for (; m.length % 4; )
                m.push(O);
            return m.join("");
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
          parse: function(d, l) {
            l === void 0 && (l = !0);
            var p = d.length, w = l ? this._safe_map : this._map, _ = this._reverseMap;
            if (!_) {
              _ = this._reverseMap = [];
              for (var m = 0; m < w.length; m++)
                _[w.charCodeAt(m)] = m;
            }
            var h = w.charAt(64);
            if (h) {
              var E = d.indexOf(h);
              E !== -1 && (p = E);
            }
            return a(d, p, _);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function a(d, l, p) {
          for (var w = [], _ = 0, m = 0; m < l; m++)
            if (m % 4) {
              var h = p[d.charCodeAt(m - 1)] << m % 4 * 2, E = p[d.charCodeAt(m)] >>> 6 - m % 4 * 2, A = h | E;
              w[_ >>> 2] |= A << 24 - _ % 4 * 8, _++;
            }
          return s.create(w, _);
        }
      }(), r.enc.Base64url;
    });
  }(li)), li.exports;
}
var hi = { exports: {} }, za;
function Cr() {
  return za || (za = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(Ne());
    })(ve, function(r) {
      return function(n) {
        var i = r, s = i.lib, c = s.WordArray, a = s.Hasher, d = i.algo, l = [];
        (function() {
          for (var E = 0; E < 64; E++)
            l[E] = n.abs(n.sin(E + 1)) * 4294967296 | 0;
        })();
        var p = d.MD5 = a.extend({
          _doReset: function() {
            this._hash = new c.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(E, A) {
            for (var U = 0; U < 16; U++) {
              var B = A + U, C = E[B];
              E[B] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
            }
            var O = this._hash.words, S = E[A + 0], k = E[A + 1], P = E[A + 2], H = E[A + 3], ie = E[A + 4], M = E[A + 5], W = E[A + 6], ee = E[A + 7], F = E[A + 8], q = E[A + 9], j = E[A + 10], V = E[A + 11], re = E[A + 12], se = E[A + 13], oe = E[A + 14], he = E[A + 15], Z = O[0], $ = O[1], X = O[2], y = O[3];
            Z = w(Z, $, X, y, S, 7, l[0]), y = w(y, Z, $, X, k, 12, l[1]), X = w(X, y, Z, $, P, 17, l[2]), $ = w($, X, y, Z, H, 22, l[3]), Z = w(Z, $, X, y, ie, 7, l[4]), y = w(y, Z, $, X, M, 12, l[5]), X = w(X, y, Z, $, W, 17, l[6]), $ = w($, X, y, Z, ee, 22, l[7]), Z = w(Z, $, X, y, F, 7, l[8]), y = w(y, Z, $, X, q, 12, l[9]), X = w(X, y, Z, $, j, 17, l[10]), $ = w($, X, y, Z, V, 22, l[11]), Z = w(Z, $, X, y, re, 7, l[12]), y = w(y, Z, $, X, se, 12, l[13]), X = w(X, y, Z, $, oe, 17, l[14]), $ = w($, X, y, Z, he, 22, l[15]), Z = _(Z, $, X, y, k, 5, l[16]), y = _(y, Z, $, X, W, 9, l[17]), X = _(X, y, Z, $, V, 14, l[18]), $ = _($, X, y, Z, S, 20, l[19]), Z = _(Z, $, X, y, M, 5, l[20]), y = _(y, Z, $, X, j, 9, l[21]), X = _(X, y, Z, $, he, 14, l[22]), $ = _($, X, y, Z, ie, 20, l[23]), Z = _(Z, $, X, y, q, 5, l[24]), y = _(y, Z, $, X, oe, 9, l[25]), X = _(X, y, Z, $, H, 14, l[26]), $ = _($, X, y, Z, F, 20, l[27]), Z = _(Z, $, X, y, se, 5, l[28]), y = _(y, Z, $, X, P, 9, l[29]), X = _(X, y, Z, $, ee, 14, l[30]), $ = _($, X, y, Z, re, 20, l[31]), Z = m(Z, $, X, y, M, 4, l[32]), y = m(y, Z, $, X, F, 11, l[33]), X = m(X, y, Z, $, V, 16, l[34]), $ = m($, X, y, Z, oe, 23, l[35]), Z = m(Z, $, X, y, k, 4, l[36]), y = m(y, Z, $, X, ie, 11, l[37]), X = m(X, y, Z, $, ee, 16, l[38]), $ = m($, X, y, Z, j, 23, l[39]), Z = m(Z, $, X, y, se, 4, l[40]), y = m(y, Z, $, X, S, 11, l[41]), X = m(X, y, Z, $, H, 16, l[42]), $ = m($, X, y, Z, W, 23, l[43]), Z = m(Z, $, X, y, q, 4, l[44]), y = m(y, Z, $, X, re, 11, l[45]), X = m(X, y, Z, $, he, 16, l[46]), $ = m($, X, y, Z, P, 23, l[47]), Z = h(Z, $, X, y, S, 6, l[48]), y = h(y, Z, $, X, ee, 10, l[49]), X = h(X, y, Z, $, oe, 15, l[50]), $ = h($, X, y, Z, M, 21, l[51]), Z = h(Z, $, X, y, re, 6, l[52]), y = h(y, Z, $, X, H, 10, l[53]), X = h(X, y, Z, $, j, 15, l[54]), $ = h($, X, y, Z, k, 21, l[55]), Z = h(Z, $, X, y, F, 6, l[56]), y = h(y, Z, $, X, he, 10, l[57]), X = h(X, y, Z, $, W, 15, l[58]), $ = h($, X, y, Z, se, 21, l[59]), Z = h(Z, $, X, y, ie, 6, l[60]), y = h(y, Z, $, X, V, 10, l[61]), X = h(X, y, Z, $, P, 15, l[62]), $ = h($, X, y, Z, q, 21, l[63]), O[0] = O[0] + Z | 0, O[1] = O[1] + $ | 0, O[2] = O[2] + X | 0, O[3] = O[3] + y | 0;
          },
          _doFinalize: function() {
            var E = this._data, A = E.words, U = this._nDataBytes * 8, B = E.sigBytes * 8;
            A[B >>> 5] |= 128 << 24 - B % 32;
            var C = n.floor(U / 4294967296), O = U;
            A[(B + 64 >>> 9 << 4) + 15] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, A[(B + 64 >>> 9 << 4) + 14] = (O << 8 | O >>> 24) & 16711935 | (O << 24 | O >>> 8) & 4278255360, E.sigBytes = (A.length + 1) * 4, this._process();
            for (var S = this._hash, k = S.words, P = 0; P < 4; P++) {
              var H = k[P];
              k[P] = (H << 8 | H >>> 24) & 16711935 | (H << 24 | H >>> 8) & 4278255360;
            }
            return S;
          },
          clone: function() {
            var E = a.clone.call(this);
            return E._hash = this._hash.clone(), E;
          }
        });
        function w(E, A, U, B, C, O, S) {
          var k = E + (A & U | ~A & B) + C + S;
          return (k << O | k >>> 32 - O) + A;
        }
        function _(E, A, U, B, C, O, S) {
          var k = E + (A & B | U & ~B) + C + S;
          return (k << O | k >>> 32 - O) + A;
        }
        function m(E, A, U, B, C, O, S) {
          var k = E + (A ^ U ^ B) + C + S;
          return (k << O | k >>> 32 - O) + A;
        }
        function h(E, A, U, B, C, O, S) {
          var k = E + (U ^ (A | ~B)) + C + S;
          return (k << O | k >>> 32 - O) + A;
        }
        i.MD5 = a._createHelper(p), i.HmacMD5 = a._createHmacHelper(p);
      }(Math), r.MD5;
    });
  }(hi)), hi.exports;
}
var di = { exports: {} }, ja;
function Bu() {
  return ja || (ja = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(Ne());
    })(ve, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, c = i.Hasher, a = n.algo, d = [], l = a.SHA1 = c.extend({
          _doReset: function() {
            this._hash = new s.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(p, w) {
            for (var _ = this._hash.words, m = _[0], h = _[1], E = _[2], A = _[3], U = _[4], B = 0; B < 80; B++) {
              if (B < 16)
                d[B] = p[w + B] | 0;
              else {
                var C = d[B - 3] ^ d[B - 8] ^ d[B - 14] ^ d[B - 16];
                d[B] = C << 1 | C >>> 31;
              }
              var O = (m << 5 | m >>> 27) + U + d[B];
              B < 20 ? O += (h & E | ~h & A) + 1518500249 : B < 40 ? O += (h ^ E ^ A) + 1859775393 : B < 60 ? O += (h & E | h & A | E & A) - 1894007588 : O += (h ^ E ^ A) - 899497514, U = A, A = E, E = h << 30 | h >>> 2, h = m, m = O;
            }
            _[0] = _[0] + m | 0, _[1] = _[1] + h | 0, _[2] = _[2] + E | 0, _[3] = _[3] + A | 0, _[4] = _[4] + U | 0;
          },
          _doFinalize: function() {
            var p = this._data, w = p.words, _ = this._nDataBytes * 8, m = p.sigBytes * 8;
            return w[m >>> 5] |= 128 << 24 - m % 32, w[(m + 64 >>> 9 << 4) + 14] = Math.floor(_ / 4294967296), w[(m + 64 >>> 9 << 4) + 15] = _, p.sigBytes = w.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var p = c.clone.call(this);
            return p._hash = this._hash.clone(), p;
          }
        });
        n.SHA1 = c._createHelper(l), n.HmacSHA1 = c._createHmacHelper(l);
      }(), r.SHA1;
    });
  }(di)), di.exports;
}
var xi = { exports: {} }, qa;
function Us() {
  return qa || (qa = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(Ne());
    })(ve, function(r) {
      return function(n) {
        var i = r, s = i.lib, c = s.WordArray, a = s.Hasher, d = i.algo, l = [], p = [];
        (function() {
          function m(U) {
            for (var B = n.sqrt(U), C = 2; C <= B; C++)
              if (!(U % C))
                return !1;
            return !0;
          }
          function h(U) {
            return (U - (U | 0)) * 4294967296 | 0;
          }
          for (var E = 2, A = 0; A < 64; )
            m(E) && (A < 8 && (l[A] = h(n.pow(E, 1 / 2))), p[A] = h(n.pow(E, 1 / 3)), A++), E++;
        })();
        var w = [], _ = d.SHA256 = a.extend({
          _doReset: function() {
            this._hash = new c.init(l.slice(0));
          },
          _doProcessBlock: function(m, h) {
            for (var E = this._hash.words, A = E[0], U = E[1], B = E[2], C = E[3], O = E[4], S = E[5], k = E[6], P = E[7], H = 0; H < 64; H++) {
              if (H < 16)
                w[H] = m[h + H] | 0;
              else {
                var ie = w[H - 15], M = (ie << 25 | ie >>> 7) ^ (ie << 14 | ie >>> 18) ^ ie >>> 3, W = w[H - 2], ee = (W << 15 | W >>> 17) ^ (W << 13 | W >>> 19) ^ W >>> 10;
                w[H] = M + w[H - 7] + ee + w[H - 16];
              }
              var F = O & S ^ ~O & k, q = A & U ^ A & B ^ U & B, j = (A << 30 | A >>> 2) ^ (A << 19 | A >>> 13) ^ (A << 10 | A >>> 22), V = (O << 26 | O >>> 6) ^ (O << 21 | O >>> 11) ^ (O << 7 | O >>> 25), re = P + V + F + p[H] + w[H], se = j + q;
              P = k, k = S, S = O, O = C + re | 0, C = B, B = U, U = A, A = re + se | 0;
            }
            E[0] = E[0] + A | 0, E[1] = E[1] + U | 0, E[2] = E[2] + B | 0, E[3] = E[3] + C | 0, E[4] = E[4] + O | 0, E[5] = E[5] + S | 0, E[6] = E[6] + k | 0, E[7] = E[7] + P | 0;
          },
          _doFinalize: function() {
            var m = this._data, h = m.words, E = this._nDataBytes * 8, A = m.sigBytes * 8;
            return h[A >>> 5] |= 128 << 24 - A % 32, h[(A + 64 >>> 9 << 4) + 14] = n.floor(E / 4294967296), h[(A + 64 >>> 9 << 4) + 15] = E, m.sigBytes = h.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var m = a.clone.call(this);
            return m._hash = this._hash.clone(), m;
          }
        });
        i.SHA256 = a._createHelper(_), i.HmacSHA256 = a._createHmacHelper(_);
      }(Math), r.SHA256;
    });
  }(xi)), xi.exports;
}
var pi = { exports: {} }, $a;
function w1() {
  return $a || ($a = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Us());
    })(ve, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, c = n.algo, a = c.SHA256, d = c.SHA224 = a.extend({
          _doReset: function() {
            this._hash = new s.init([
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
            var l = a._doFinalize.call(this);
            return l.sigBytes -= 4, l;
          }
        });
        n.SHA224 = a._createHelper(d), n.HmacSHA224 = a._createHmacHelper(d);
      }(), r.SHA224;
    });
  }(pi)), pi.exports;
}
var yi = { exports: {} }, Ha;
function Au() {
  return Ha || (Ha = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), N0());
    })(ve, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.Hasher, c = n.x64, a = c.Word, d = c.WordArray, l = n.algo;
        function p() {
          return a.create.apply(a, arguments);
        }
        var w = [
          p(1116352408, 3609767458),
          p(1899447441, 602891725),
          p(3049323471, 3964484399),
          p(3921009573, 2173295548),
          p(961987163, 4081628472),
          p(1508970993, 3053834265),
          p(2453635748, 2937671579),
          p(2870763221, 3664609560),
          p(3624381080, 2734883394),
          p(310598401, 1164996542),
          p(607225278, 1323610764),
          p(1426881987, 3590304994),
          p(1925078388, 4068182383),
          p(2162078206, 991336113),
          p(2614888103, 633803317),
          p(3248222580, 3479774868),
          p(3835390401, 2666613458),
          p(4022224774, 944711139),
          p(264347078, 2341262773),
          p(604807628, 2007800933),
          p(770255983, 1495990901),
          p(1249150122, 1856431235),
          p(1555081692, 3175218132),
          p(1996064986, 2198950837),
          p(2554220882, 3999719339),
          p(2821834349, 766784016),
          p(2952996808, 2566594879),
          p(3210313671, 3203337956),
          p(3336571891, 1034457026),
          p(3584528711, 2466948901),
          p(113926993, 3758326383),
          p(338241895, 168717936),
          p(666307205, 1188179964),
          p(773529912, 1546045734),
          p(1294757372, 1522805485),
          p(1396182291, 2643833823),
          p(1695183700, 2343527390),
          p(1986661051, 1014477480),
          p(2177026350, 1206759142),
          p(2456956037, 344077627),
          p(2730485921, 1290863460),
          p(2820302411, 3158454273),
          p(3259730800, 3505952657),
          p(3345764771, 106217008),
          p(3516065817, 3606008344),
          p(3600352804, 1432725776),
          p(4094571909, 1467031594),
          p(275423344, 851169720),
          p(430227734, 3100823752),
          p(506948616, 1363258195),
          p(659060556, 3750685593),
          p(883997877, 3785050280),
          p(958139571, 3318307427),
          p(1322822218, 3812723403),
          p(1537002063, 2003034995),
          p(1747873779, 3602036899),
          p(1955562222, 1575990012),
          p(2024104815, 1125592928),
          p(2227730452, 2716904306),
          p(2361852424, 442776044),
          p(2428436474, 593698344),
          p(2756734187, 3733110249),
          p(3204031479, 2999351573),
          p(3329325298, 3815920427),
          p(3391569614, 3928383900),
          p(3515267271, 566280711),
          p(3940187606, 3454069534),
          p(4118630271, 4000239992),
          p(116418474, 1914138554),
          p(174292421, 2731055270),
          p(289380356, 3203993006),
          p(460393269, 320620315),
          p(685471733, 587496836),
          p(852142971, 1086792851),
          p(1017036298, 365543100),
          p(1126000580, 2618297676),
          p(1288033470, 3409855158),
          p(1501505948, 4234509866),
          p(1607167915, 987167468),
          p(1816402316, 1246189591)
        ], _ = [];
        (function() {
          for (var h = 0; h < 80; h++)
            _[h] = p();
        })();
        var m = l.SHA512 = s.extend({
          _doReset: function() {
            this._hash = new d.init([
              new a.init(1779033703, 4089235720),
              new a.init(3144134277, 2227873595),
              new a.init(1013904242, 4271175723),
              new a.init(2773480762, 1595750129),
              new a.init(1359893119, 2917565137),
              new a.init(2600822924, 725511199),
              new a.init(528734635, 4215389547),
              new a.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(h, E) {
            for (var A = this._hash.words, U = A[0], B = A[1], C = A[2], O = A[3], S = A[4], k = A[5], P = A[6], H = A[7], ie = U.high, M = U.low, W = B.high, ee = B.low, F = C.high, q = C.low, j = O.high, V = O.low, re = S.high, se = S.low, oe = k.high, he = k.low, Z = P.high, $ = P.low, X = H.high, y = H.low, ce = ie, fe = M, pe = W, ae = ee, le = F, T = q, R = j, D = V, K = re, G = se, Q = oe, g = he, o = Z, u = $, v = X, N = y, z = 0; z < 80; z++) {
              var J, ue, de = _[z];
              if (z < 16)
                ue = de.high = h[E + z * 2] | 0, J = de.low = h[E + z * 2 + 1] | 0;
              else {
                var xe = _[z - 15], we = xe.high, b = xe.low, f = (we >>> 1 | b << 31) ^ (we >>> 8 | b << 24) ^ we >>> 7, x = (b >>> 1 | we << 31) ^ (b >>> 8 | we << 24) ^ (b >>> 7 | we << 25), I = _[z - 2], Y = I.high, te = I.low, ne = (Y >>> 19 | te << 13) ^ (Y << 3 | te >>> 29) ^ Y >>> 6, be = (te >>> 19 | Y << 13) ^ (te << 3 | Y >>> 29) ^ (te >>> 6 | Y << 26), Be = _[z - 7], _e = Be.high, me = Be.low, Oe = _[z - 16], Pe = Oe.high, xn = Oe.low;
                J = x + me, ue = f + _e + (J >>> 0 < x >>> 0 ? 1 : 0), J = J + be, ue = ue + ne + (J >>> 0 < be >>> 0 ? 1 : 0), J = J + xn, ue = ue + Pe + (J >>> 0 < xn >>> 0 ? 1 : 0), de.high = ue, de.low = J;
              }
              var R0 = K & Q ^ ~K & o, pn = G & g ^ ~G & u, O0 = ce & pe ^ ce & le ^ pe & le, M0 = fe & ae ^ fe & T ^ ae & T, Gt = (ce >>> 28 | fe << 4) ^ (ce << 30 | fe >>> 2) ^ (ce << 25 | fe >>> 7), U0 = (fe >>> 28 | ce << 4) ^ (fe << 30 | ce >>> 2) ^ (fe << 25 | ce >>> 7), Ps = (K >>> 14 | G << 18) ^ (K >>> 18 | G << 14) ^ (K << 23 | G >>> 9), Ds = (G >>> 14 | K << 18) ^ (G >>> 18 | K << 14) ^ (G << 23 | K >>> 9), I0 = w[z], Ve = I0.high, k0 = I0.low, ct = N + Ds, It = v + Ps + (ct >>> 0 < N >>> 0 ? 1 : 0), ct = ct + pn, It = It + R0 + (ct >>> 0 < pn >>> 0 ? 1 : 0), ct = ct + k0, It = It + Ve + (ct >>> 0 < k0 >>> 0 ? 1 : 0), ct = ct + J, It = It + ue + (ct >>> 0 < J >>> 0 ? 1 : 0), yn = U0 + M0, P0 = Gt + O0 + (yn >>> 0 < U0 >>> 0 ? 1 : 0);
              v = o, N = u, o = Q, u = g, Q = K, g = G, G = D + ct | 0, K = R + It + (G >>> 0 < D >>> 0 ? 1 : 0) | 0, R = le, D = T, le = pe, T = ae, pe = ce, ae = fe, fe = ct + yn | 0, ce = It + P0 + (fe >>> 0 < ct >>> 0 ? 1 : 0) | 0;
            }
            M = U.low = M + fe, U.high = ie + ce + (M >>> 0 < fe >>> 0 ? 1 : 0), ee = B.low = ee + ae, B.high = W + pe + (ee >>> 0 < ae >>> 0 ? 1 : 0), q = C.low = q + T, C.high = F + le + (q >>> 0 < T >>> 0 ? 1 : 0), V = O.low = V + D, O.high = j + R + (V >>> 0 < D >>> 0 ? 1 : 0), se = S.low = se + G, S.high = re + K + (se >>> 0 < G >>> 0 ? 1 : 0), he = k.low = he + g, k.high = oe + Q + (he >>> 0 < g >>> 0 ? 1 : 0), $ = P.low = $ + u, P.high = Z + o + ($ >>> 0 < u >>> 0 ? 1 : 0), y = H.low = y + N, H.high = X + v + (y >>> 0 < N >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var h = this._data, E = h.words, A = this._nDataBytes * 8, U = h.sigBytes * 8;
            E[U >>> 5] |= 128 << 24 - U % 32, E[(U + 128 >>> 10 << 5) + 30] = Math.floor(A / 4294967296), E[(U + 128 >>> 10 << 5) + 31] = A, h.sigBytes = E.length * 4, this._process();
            var B = this._hash.toX32();
            return B;
          },
          clone: function() {
            var h = s.clone.call(this);
            return h._hash = this._hash.clone(), h;
          },
          blockSize: 1024 / 32
        });
        n.SHA512 = s._createHelper(m), n.HmacSHA512 = s._createHmacHelper(m);
      }(), r.SHA512;
    });
  }(yi)), yi.exports;
}
var gi = { exports: {} }, Va;
function b1() {
  return Va || (Va = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), N0(), Au());
    })(ve, function(r) {
      return function() {
        var n = r, i = n.x64, s = i.Word, c = i.WordArray, a = n.algo, d = a.SHA512, l = a.SHA384 = d.extend({
          _doReset: function() {
            this._hash = new c.init([
              new s.init(3418070365, 3238371032),
              new s.init(1654270250, 914150663),
              new s.init(2438529370, 812702999),
              new s.init(355462360, 4144912697),
              new s.init(1731405415, 4290775857),
              new s.init(2394180231, 1750603025),
              new s.init(3675008525, 1694076839),
              new s.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var p = d._doFinalize.call(this);
            return p.sigBytes -= 16, p;
          }
        });
        n.SHA384 = d._createHelper(l), n.HmacSHA384 = d._createHmacHelper(l);
      }(), r.SHA384;
    });
  }(gi)), gi.exports;
}
var wi = { exports: {} }, Ga;
function m1() {
  return Ga || (Ga = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), N0());
    })(ve, function(r) {
      return function(n) {
        var i = r, s = i.lib, c = s.WordArray, a = s.Hasher, d = i.x64, l = d.Word, p = i.algo, w = [], _ = [], m = [];
        (function() {
          for (var A = 1, U = 0, B = 0; B < 24; B++) {
            w[A + 5 * U] = (B + 1) * (B + 2) / 2 % 64;
            var C = U % 5, O = (2 * A + 3 * U) % 5;
            A = C, U = O;
          }
          for (var A = 0; A < 5; A++)
            for (var U = 0; U < 5; U++)
              _[A + 5 * U] = U + (2 * A + 3 * U) % 5 * 5;
          for (var S = 1, k = 0; k < 24; k++) {
            for (var P = 0, H = 0, ie = 0; ie < 7; ie++) {
              if (S & 1) {
                var M = (1 << ie) - 1;
                M < 32 ? H ^= 1 << M : P ^= 1 << M - 32;
              }
              S & 128 ? S = S << 1 ^ 113 : S <<= 1;
            }
            m[k] = l.create(P, H);
          }
        })();
        var h = [];
        (function() {
          for (var A = 0; A < 25; A++)
            h[A] = l.create();
        })();
        var E = p.SHA3 = a.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: a.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var A = this._state = [], U = 0; U < 25; U++)
              A[U] = new l.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(A, U) {
            for (var B = this._state, C = this.blockSize / 2, O = 0; O < C; O++) {
              var S = A[U + 2 * O], k = A[U + 2 * O + 1];
              S = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, k = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360;
              var P = B[O];
              P.high ^= k, P.low ^= S;
            }
            for (var H = 0; H < 24; H++) {
              for (var ie = 0; ie < 5; ie++) {
                for (var M = 0, W = 0, ee = 0; ee < 5; ee++) {
                  var P = B[ie + 5 * ee];
                  M ^= P.high, W ^= P.low;
                }
                var F = h[ie];
                F.high = M, F.low = W;
              }
              for (var ie = 0; ie < 5; ie++)
                for (var q = h[(ie + 4) % 5], j = h[(ie + 1) % 5], V = j.high, re = j.low, M = q.high ^ (V << 1 | re >>> 31), W = q.low ^ (re << 1 | V >>> 31), ee = 0; ee < 5; ee++) {
                  var P = B[ie + 5 * ee];
                  P.high ^= M, P.low ^= W;
                }
              for (var se = 1; se < 25; se++) {
                var M, W, P = B[se], oe = P.high, he = P.low, Z = w[se];
                Z < 32 ? (M = oe << Z | he >>> 32 - Z, W = he << Z | oe >>> 32 - Z) : (M = he << Z - 32 | oe >>> 64 - Z, W = oe << Z - 32 | he >>> 64 - Z);
                var $ = h[_[se]];
                $.high = M, $.low = W;
              }
              var X = h[0], y = B[0];
              X.high = y.high, X.low = y.low;
              for (var ie = 0; ie < 5; ie++)
                for (var ee = 0; ee < 5; ee++) {
                  var se = ie + 5 * ee, P = B[se], ce = h[se], fe = h[(ie + 1) % 5 + 5 * ee], pe = h[(ie + 2) % 5 + 5 * ee];
                  P.high = ce.high ^ ~fe.high & pe.high, P.low = ce.low ^ ~fe.low & pe.low;
                }
              var P = B[0], ae = m[H];
              P.high ^= ae.high, P.low ^= ae.low;
            }
          },
          _doFinalize: function() {
            var A = this._data, U = A.words;
            this._nDataBytes * 8;
            var B = A.sigBytes * 8, C = this.blockSize * 32;
            U[B >>> 5] |= 1 << 24 - B % 32, U[(n.ceil((B + 1) / C) * C >>> 5) - 1] |= 128, A.sigBytes = U.length * 4, this._process();
            for (var O = this._state, S = this.cfg.outputLength / 8, k = S / 8, P = [], H = 0; H < k; H++) {
              var ie = O[H], M = ie.high, W = ie.low;
              M = (M << 8 | M >>> 24) & 16711935 | (M << 24 | M >>> 8) & 4278255360, W = (W << 8 | W >>> 24) & 16711935 | (W << 24 | W >>> 8) & 4278255360, P.push(W), P.push(M);
            }
            return new c.init(P, S);
          },
          clone: function() {
            for (var A = a.clone.call(this), U = A._state = this._state.slice(0), B = 0; B < 25; B++)
              U[B] = U[B].clone();
            return A;
          }
        });
        i.SHA3 = a._createHelper(E), i.HmacSHA3 = a._createHmacHelper(E);
      }(Math), r.SHA3;
    });
  }(wi)), wi.exports;
}
var bi = { exports: {} }, Wa;
function _1() {
  return Wa || (Wa = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(Ne());
    })(ve, function(r) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(n) {
        var i = r, s = i.lib, c = s.WordArray, a = s.Hasher, d = i.algo, l = c.create([
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
        ]), p = c.create([
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
        ]), w = c.create([
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
        ]), _ = c.create([
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
        ]), m = c.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), h = c.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), E = d.RIPEMD160 = a.extend({
          _doReset: function() {
            this._hash = c.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(k, P) {
            for (var H = 0; H < 16; H++) {
              var ie = P + H, M = k[ie];
              k[ie] = (M << 8 | M >>> 24) & 16711935 | (M << 24 | M >>> 8) & 4278255360;
            }
            var W = this._hash.words, ee = m.words, F = h.words, q = l.words, j = p.words, V = w.words, re = _.words, se, oe, he, Z, $, X, y, ce, fe, pe;
            X = se = W[0], y = oe = W[1], ce = he = W[2], fe = Z = W[3], pe = $ = W[4];
            for (var ae, H = 0; H < 80; H += 1)
              ae = se + k[P + q[H]] | 0, H < 16 ? ae += A(oe, he, Z) + ee[0] : H < 32 ? ae += U(oe, he, Z) + ee[1] : H < 48 ? ae += B(oe, he, Z) + ee[2] : H < 64 ? ae += C(oe, he, Z) + ee[3] : ae += O(oe, he, Z) + ee[4], ae = ae | 0, ae = S(ae, V[H]), ae = ae + $ | 0, se = $, $ = Z, Z = S(he, 10), he = oe, oe = ae, ae = X + k[P + j[H]] | 0, H < 16 ? ae += O(y, ce, fe) + F[0] : H < 32 ? ae += C(y, ce, fe) + F[1] : H < 48 ? ae += B(y, ce, fe) + F[2] : H < 64 ? ae += U(y, ce, fe) + F[3] : ae += A(y, ce, fe) + F[4], ae = ae | 0, ae = S(ae, re[H]), ae = ae + pe | 0, X = pe, pe = fe, fe = S(ce, 10), ce = y, y = ae;
            ae = W[1] + he + fe | 0, W[1] = W[2] + Z + pe | 0, W[2] = W[3] + $ + X | 0, W[3] = W[4] + se + y | 0, W[4] = W[0] + oe + ce | 0, W[0] = ae;
          },
          _doFinalize: function() {
            var k = this._data, P = k.words, H = this._nDataBytes * 8, ie = k.sigBytes * 8;
            P[ie >>> 5] |= 128 << 24 - ie % 32, P[(ie + 64 >>> 9 << 4) + 14] = (H << 8 | H >>> 24) & 16711935 | (H << 24 | H >>> 8) & 4278255360, k.sigBytes = (P.length + 1) * 4, this._process();
            for (var M = this._hash, W = M.words, ee = 0; ee < 5; ee++) {
              var F = W[ee];
              W[ee] = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360;
            }
            return M;
          },
          clone: function() {
            var k = a.clone.call(this);
            return k._hash = this._hash.clone(), k;
          }
        });
        function A(k, P, H) {
          return k ^ P ^ H;
        }
        function U(k, P, H) {
          return k & P | ~k & H;
        }
        function B(k, P, H) {
          return (k | ~P) ^ H;
        }
        function C(k, P, H) {
          return k & H | P & ~H;
        }
        function O(k, P, H) {
          return k ^ (P | ~H);
        }
        function S(k, P) {
          return k << P | k >>> 32 - P;
        }
        i.RIPEMD160 = a._createHelper(E), i.HmacRIPEMD160 = a._createHmacHelper(E);
      }(), r.RIPEMD160;
    });
  }(bi)), bi.exports;
}
var mi = { exports: {} }, La;
function Is() {
  return La || (La = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(Ne());
    })(ve, function(r) {
      (function() {
        var n = r, i = n.lib, s = i.Base, c = n.enc, a = c.Utf8, d = n.algo;
        d.HMAC = s.extend({
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
          init: function(l, p) {
            l = this._hasher = new l.init(), typeof p == "string" && (p = a.parse(p));
            var w = l.blockSize, _ = w * 4;
            p.sigBytes > _ && (p = l.finalize(p)), p.clamp();
            for (var m = this._oKey = p.clone(), h = this._iKey = p.clone(), E = m.words, A = h.words, U = 0; U < w; U++)
              E[U] ^= 1549556828, A[U] ^= 909522486;
            m.sigBytes = h.sigBytes = _, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var l = this._hasher;
            l.reset(), l.update(this._iKey);
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
          update: function(l) {
            return this._hasher.update(l), this;
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
          finalize: function(l) {
            var p = this._hasher, w = p.finalize(l);
            p.reset();
            var _ = p.finalize(this._oKey.clone().concat(w));
            return _;
          }
        });
      })();
    });
  }(mi)), mi.exports;
}
var _i = { exports: {} }, Ka;
function E1() {
  return Ka || (Ka = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Us(), Is());
    })(ve, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.Base, c = i.WordArray, a = n.algo, d = a.SHA256, l = a.HMAC, p = a.PBKDF2 = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: s.extend({
            keySize: 128 / 32,
            hasher: d,
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
          compute: function(w, _) {
            for (var m = this.cfg, h = l.create(m.hasher, w), E = c.create(), A = c.create([1]), U = E.words, B = A.words, C = m.keySize, O = m.iterations; U.length < C; ) {
              var S = h.update(_).finalize(A);
              h.reset();
              for (var k = S.words, P = k.length, H = S, ie = 1; ie < O; ie++) {
                H = h.finalize(H), h.reset();
                for (var M = H.words, W = 0; W < P; W++)
                  k[W] ^= M[W];
              }
              E.concat(S), B[0]++;
            }
            return E.sigBytes = C * 4, E;
          }
        });
        n.PBKDF2 = function(w, _, m) {
          return p.create(m).compute(w, _);
        };
      }(), r.PBKDF2;
    });
  }(_i)), _i.exports;
}
var Ei = { exports: {} }, Ya;
function xr() {
  return Ya || (Ya = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Bu(), Is());
    })(ve, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.Base, c = i.WordArray, a = n.algo, d = a.MD5, l = a.EvpKDF = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: s.extend({
            keySize: 128 / 32,
            hasher: d,
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
          init: function(p) {
            this.cfg = this.cfg.extend(p);
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
          compute: function(p, w) {
            for (var _, m = this.cfg, h = m.hasher.create(), E = c.create(), A = E.words, U = m.keySize, B = m.iterations; A.length < U; ) {
              _ && h.update(_), _ = h.update(p).finalize(w), h.reset();
              for (var C = 1; C < B; C++)
                _ = h.finalize(_), h.reset();
              E.concat(_);
            }
            return E.sigBytes = U * 4, E;
          }
        });
        n.EvpKDF = function(p, w, _) {
          return l.create(_).compute(p, w);
        };
      }(), r.EvpKDF;
    });
  }(Ei)), Ei.exports;
}
var vi = { exports: {} }, Za;
function Je() {
  return Za || (Za = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), xr());
    })(ve, function(r) {
      r.lib.Cipher || function(n) {
        var i = r, s = i.lib, c = s.Base, a = s.WordArray, d = s.BufferedBlockAlgorithm, l = i.enc;
        l.Utf8;
        var p = l.Base64, w = i.algo, _ = w.EvpKDF, m = s.Cipher = d.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: c.extend(),
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
          createEncryptor: function(M, W) {
            return this.create(this._ENC_XFORM_MODE, M, W);
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
          createDecryptor: function(M, W) {
            return this.create(this._DEC_XFORM_MODE, M, W);
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
          init: function(M, W, ee) {
            this.cfg = this.cfg.extend(ee), this._xformMode = M, this._key = W, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            d.reset.call(this), this._doReset();
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
          process: function(M) {
            return this._append(M), this._process();
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
          finalize: function(M) {
            M && this._append(M);
            var W = this._doFinalize();
            return W;
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
          _createHelper: function() {
            function M(W) {
              return typeof W == "string" ? ie : k;
            }
            return function(W) {
              return {
                encrypt: function(ee, F, q) {
                  return M(F).encrypt(W, ee, F, q);
                },
                decrypt: function(ee, F, q) {
                  return M(F).decrypt(W, ee, F, q);
                }
              };
            };
          }()
        });
        s.StreamCipher = m.extend({
          _doFinalize: function() {
            var M = this._process(!0);
            return M;
          },
          blockSize: 1
        });
        var h = i.mode = {}, E = s.BlockCipherMode = c.extend({
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
          createEncryptor: function(M, W) {
            return this.Encryptor.create(M, W);
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
          createDecryptor: function(M, W) {
            return this.Decryptor.create(M, W);
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
          init: function(M, W) {
            this._cipher = M, this._iv = W;
          }
        }), A = h.CBC = function() {
          var M = E.extend();
          M.Encryptor = M.extend({
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
            processBlock: function(ee, F) {
              var q = this._cipher, j = q.blockSize;
              W.call(this, ee, F, j), q.encryptBlock(ee, F), this._prevBlock = ee.slice(F, F + j);
            }
          }), M.Decryptor = M.extend({
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
            processBlock: function(ee, F) {
              var q = this._cipher, j = q.blockSize, V = ee.slice(F, F + j);
              q.decryptBlock(ee, F), W.call(this, ee, F, j), this._prevBlock = V;
            }
          });
          function W(ee, F, q) {
            var j, V = this._iv;
            V ? (j = V, this._iv = n) : j = this._prevBlock;
            for (var re = 0; re < q; re++)
              ee[F + re] ^= j[re];
          }
          return M;
        }(), U = i.pad = {}, B = U.Pkcs7 = {
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
          pad: function(M, W) {
            for (var ee = W * 4, F = ee - M.sigBytes % ee, q = F << 24 | F << 16 | F << 8 | F, j = [], V = 0; V < F; V += 4)
              j.push(q);
            var re = a.create(j, F);
            M.concat(re);
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
          unpad: function(M) {
            var W = M.words[M.sigBytes - 1 >>> 2] & 255;
            M.sigBytes -= W;
          }
        };
        s.BlockCipher = m.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: m.cfg.extend({
            mode: A,
            padding: B
          }),
          reset: function() {
            var M;
            m.reset.call(this);
            var W = this.cfg, ee = W.iv, F = W.mode;
            this._xformMode == this._ENC_XFORM_MODE ? M = F.createEncryptor : (M = F.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == M ? this._mode.init(this, ee && ee.words) : (this._mode = M.call(F, this, ee && ee.words), this._mode.__creator = M);
          },
          _doProcessBlock: function(M, W) {
            this._mode.processBlock(M, W);
          },
          _doFinalize: function() {
            var M, W = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (W.pad(this._data, this.blockSize), M = this._process(!0)) : (M = this._process(!0), W.unpad(M)), M;
          },
          blockSize: 128 / 32
        });
        var C = s.CipherParams = c.extend({
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
          init: function(M) {
            this.mixIn(M);
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
          toString: function(M) {
            return (M || this.formatter).stringify(this);
          }
        }), O = i.format = {}, S = O.OpenSSL = {
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
          stringify: function(M) {
            var W, ee = M.ciphertext, F = M.salt;
            return F ? W = a.create([1398893684, 1701076831]).concat(F).concat(ee) : W = ee, W.toString(p);
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
          parse: function(M) {
            var W, ee = p.parse(M), F = ee.words;
            return F[0] == 1398893684 && F[1] == 1701076831 && (W = a.create(F.slice(2, 4)), F.splice(0, 4), ee.sigBytes -= 16), C.create({ ciphertext: ee, salt: W });
          }
        }, k = s.SerializableCipher = c.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: c.extend({
            format: S
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
          encrypt: function(M, W, ee, F) {
            F = this.cfg.extend(F);
            var q = M.createEncryptor(ee, F), j = q.finalize(W), V = q.cfg;
            return C.create({
              ciphertext: j,
              key: ee,
              iv: V.iv,
              algorithm: M,
              mode: V.mode,
              padding: V.padding,
              blockSize: M.blockSize,
              formatter: F.format
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
          decrypt: function(M, W, ee, F) {
            F = this.cfg.extend(F), W = this._parse(W, F.format);
            var q = M.createDecryptor(ee, F).finalize(W.ciphertext);
            return q;
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
          _parse: function(M, W) {
            return typeof M == "string" ? W.parse(M, this) : M;
          }
        }), P = i.kdf = {}, H = P.OpenSSL = {
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
          execute: function(M, W, ee, F, q) {
            if (F || (F = a.random(64 / 8)), q)
              var j = _.create({ keySize: W + ee, hasher: q }).compute(M, F);
            else
              var j = _.create({ keySize: W + ee }).compute(M, F);
            var V = a.create(j.words.slice(W), ee * 4);
            return j.sigBytes = W * 4, C.create({ key: j, iv: V, salt: F });
          }
        }, ie = s.PasswordBasedCipher = k.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: k.cfg.extend({
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
          encrypt: function(M, W, ee, F) {
            F = this.cfg.extend(F);
            var q = F.kdf.execute(ee, M.keySize, M.ivSize, F.salt, F.hasher);
            F.iv = q.iv;
            var j = k.encrypt.call(this, M, W, q.key, F);
            return j.mixIn(q), j;
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
          decrypt: function(M, W, ee, F) {
            F = this.cfg.extend(F), W = this._parse(W, F.format);
            var q = F.kdf.execute(ee, M.keySize, M.ivSize, W.salt, F.hasher);
            F.iv = q.iv;
            var j = k.decrypt.call(this, M, W, q.key, F);
            return j;
          }
        });
      }();
    });
  }(vi)), vi.exports;
}
var Bi = { exports: {} }, Qa;
function v1() {
  return Qa || (Qa = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Je());
    })(ve, function(r) {
      return r.mode.CFB = function() {
        var n = r.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function(s, c) {
            var a = this._cipher, d = a.blockSize;
            i.call(this, s, c, d, a), this._prevBlock = s.slice(c, c + d);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(s, c) {
            var a = this._cipher, d = a.blockSize, l = s.slice(c, c + d);
            i.call(this, s, c, d, a), this._prevBlock = l;
          }
        });
        function i(s, c, a, d) {
          var l, p = this._iv;
          p ? (l = p.slice(0), this._iv = void 0) : l = this._prevBlock, d.encryptBlock(l, 0);
          for (var w = 0; w < a; w++)
            s[c + w] ^= l[w];
        }
        return n;
      }(), r.mode.CFB;
    });
  }(Bi)), Bi.exports;
}
var Ai = { exports: {} }, Xa;
function B1() {
  return Xa || (Xa = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Je());
    })(ve, function(r) {
      return r.mode.CTR = function() {
        var n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(s, c) {
            var a = this._cipher, d = a.blockSize, l = this._iv, p = this._counter;
            l && (p = this._counter = l.slice(0), this._iv = void 0);
            var w = p.slice(0);
            a.encryptBlock(w, 0), p[d - 1] = p[d - 1] + 1 | 0;
            for (var _ = 0; _ < d; _++)
              s[c + _] ^= w[_];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.CTR;
    });
  }(Ai)), Ai.exports;
}
var Ci = { exports: {} }, Ja;
function A1() {
  return Ja || (Ja = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Je());
    })(ve, function(r) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return r.mode.CTRGladman = function() {
        var n = r.lib.BlockCipherMode.extend();
        function i(a) {
          if ((a >> 24 & 255) === 255) {
            var d = a >> 16 & 255, l = a >> 8 & 255, p = a & 255;
            d === 255 ? (d = 0, l === 255 ? (l = 0, p === 255 ? p = 0 : ++p) : ++l) : ++d, a = 0, a += d << 16, a += l << 8, a += p;
          } else
            a += 1 << 24;
          return a;
        }
        function s(a) {
          return (a[0] = i(a[0])) === 0 && (a[1] = i(a[1])), a;
        }
        var c = n.Encryptor = n.extend({
          processBlock: function(a, d) {
            var l = this._cipher, p = l.blockSize, w = this._iv, _ = this._counter;
            w && (_ = this._counter = w.slice(0), this._iv = void 0), s(_);
            var m = _.slice(0);
            l.encryptBlock(m, 0);
            for (var h = 0; h < p; h++)
              a[d + h] ^= m[h];
          }
        });
        return n.Decryptor = c, n;
      }(), r.mode.CTRGladman;
    });
  }(Ci)), Ci.exports;
}
var Fi = { exports: {} }, eo;
function C1() {
  return eo || (eo = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Je());
    })(ve, function(r) {
      return r.mode.OFB = function() {
        var n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(s, c) {
            var a = this._cipher, d = a.blockSize, l = this._iv, p = this._keystream;
            l && (p = this._keystream = l.slice(0), this._iv = void 0), a.encryptBlock(p, 0);
            for (var w = 0; w < d; w++)
              s[c + w] ^= p[w];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.OFB;
    });
  }(Fi)), Fi.exports;
}
var Ti = { exports: {} }, to;
function F1() {
  return to || (to = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Je());
    })(ve, function(r) {
      return r.mode.ECB = function() {
        var n = r.lib.BlockCipherMode.extend();
        return n.Encryptor = n.extend({
          processBlock: function(i, s) {
            this._cipher.encryptBlock(i, s);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(i, s) {
            this._cipher.decryptBlock(i, s);
          }
        }), n;
      }(), r.mode.ECB;
    });
  }(Ti)), Ti.exports;
}
var Si = { exports: {} }, ro;
function T1() {
  return ro || (ro = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Je());
    })(ve, function(r) {
      return r.pad.AnsiX923 = {
        pad: function(n, i) {
          var s = n.sigBytes, c = i * 4, a = c - s % c, d = s + a - 1;
          n.clamp(), n.words[d >>> 2] |= a << 24 - d % 4 * 8, n.sigBytes += a;
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, r.pad.Ansix923;
    });
  }(Si)), Si.exports;
}
var Ni = { exports: {} }, no;
function S1() {
  return no || (no = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Je());
    })(ve, function(r) {
      return r.pad.Iso10126 = {
        pad: function(n, i) {
          var s = i * 4, c = s - n.sigBytes % s;
          n.concat(r.lib.WordArray.random(c - 1)).concat(r.lib.WordArray.create([c << 24], 1));
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, r.pad.Iso10126;
    });
  }(Ni)), Ni.exports;
}
var Ri = { exports: {} }, io;
function N1() {
  return io || (io = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Je());
    })(ve, function(r) {
      return r.pad.Iso97971 = {
        pad: function(n, i) {
          n.concat(r.lib.WordArray.create([2147483648], 1)), r.pad.ZeroPadding.pad(n, i);
        },
        unpad: function(n) {
          r.pad.ZeroPadding.unpad(n), n.sigBytes--;
        }
      }, r.pad.Iso97971;
    });
  }(Ri)), Ri.exports;
}
var Oi = { exports: {} }, so;
function R1() {
  return so || (so = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Je());
    })(ve, function(r) {
      return r.pad.ZeroPadding = {
        pad: function(n, i) {
          var s = i * 4;
          n.clamp(), n.sigBytes += s - (n.sigBytes % s || s);
        },
        unpad: function(n) {
          for (var i = n.words, s = n.sigBytes - 1, s = n.sigBytes - 1; s >= 0; s--)
            if (i[s >>> 2] >>> 24 - s % 4 * 8 & 255) {
              n.sigBytes = s + 1;
              break;
            }
        }
      }, r.pad.ZeroPadding;
    });
  }(Oi)), Oi.exports;
}
var Mi = { exports: {} }, ao;
function O1() {
  return ao || (ao = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Je());
    })(ve, function(r) {
      return r.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, r.pad.NoPadding;
    });
  }(Mi)), Mi.exports;
}
var Ui = { exports: {} }, oo;
function M1() {
  return oo || (oo = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Je());
    })(ve, function(r) {
      return function(n) {
        var i = r, s = i.lib, c = s.CipherParams, a = i.enc, d = a.Hex, l = i.format;
        l.Hex = {
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
          stringify: function(p) {
            return p.ciphertext.toString(d);
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
          parse: function(p) {
            var w = d.parse(p);
            return c.create({ ciphertext: w });
          }
        };
      }(), r.format.Hex;
    });
  }(Ui)), Ui.exports;
}
var Ii = { exports: {} }, co;
function U1() {
  return co || (co = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Ar(), Cr(), xr(), Je());
    })(ve, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.BlockCipher, c = n.algo, a = [], d = [], l = [], p = [], w = [], _ = [], m = [], h = [], E = [], A = [];
        (function() {
          for (var C = [], O = 0; O < 256; O++)
            O < 128 ? C[O] = O << 1 : C[O] = O << 1 ^ 283;
          for (var S = 0, k = 0, O = 0; O < 256; O++) {
            var P = k ^ k << 1 ^ k << 2 ^ k << 3 ^ k << 4;
            P = P >>> 8 ^ P & 255 ^ 99, a[S] = P, d[P] = S;
            var H = C[S], ie = C[H], M = C[ie], W = C[P] * 257 ^ P * 16843008;
            l[S] = W << 24 | W >>> 8, p[S] = W << 16 | W >>> 16, w[S] = W << 8 | W >>> 24, _[S] = W;
            var W = M * 16843009 ^ ie * 65537 ^ H * 257 ^ S * 16843008;
            m[P] = W << 24 | W >>> 8, h[P] = W << 16 | W >>> 16, E[P] = W << 8 | W >>> 24, A[P] = W, S ? (S = H ^ C[C[C[M ^ H]]], k ^= C[C[k]]) : S = k = 1;
          }
        })();
        var U = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], B = c.AES = s.extend({
          _doReset: function() {
            var C;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var O = this._keyPriorReset = this._key, S = O.words, k = O.sigBytes / 4, P = this._nRounds = k + 6, H = (P + 1) * 4, ie = this._keySchedule = [], M = 0; M < H; M++)
                M < k ? ie[M] = S[M] : (C = ie[M - 1], M % k ? k > 6 && M % k == 4 && (C = a[C >>> 24] << 24 | a[C >>> 16 & 255] << 16 | a[C >>> 8 & 255] << 8 | a[C & 255]) : (C = C << 8 | C >>> 24, C = a[C >>> 24] << 24 | a[C >>> 16 & 255] << 16 | a[C >>> 8 & 255] << 8 | a[C & 255], C ^= U[M / k | 0] << 24), ie[M] = ie[M - k] ^ C);
              for (var W = this._invKeySchedule = [], ee = 0; ee < H; ee++) {
                var M = H - ee;
                if (ee % 4)
                  var C = ie[M];
                else
                  var C = ie[M - 4];
                ee < 4 || M <= 4 ? W[ee] = C : W[ee] = m[a[C >>> 24]] ^ h[a[C >>> 16 & 255]] ^ E[a[C >>> 8 & 255]] ^ A[a[C & 255]];
              }
            }
          },
          encryptBlock: function(C, O) {
            this._doCryptBlock(C, O, this._keySchedule, l, p, w, _, a);
          },
          decryptBlock: function(C, O) {
            var S = C[O + 1];
            C[O + 1] = C[O + 3], C[O + 3] = S, this._doCryptBlock(C, O, this._invKeySchedule, m, h, E, A, d);
            var S = C[O + 1];
            C[O + 1] = C[O + 3], C[O + 3] = S;
          },
          _doCryptBlock: function(C, O, S, k, P, H, ie, M) {
            for (var W = this._nRounds, ee = C[O] ^ S[0], F = C[O + 1] ^ S[1], q = C[O + 2] ^ S[2], j = C[O + 3] ^ S[3], V = 4, re = 1; re < W; re++) {
              var se = k[ee >>> 24] ^ P[F >>> 16 & 255] ^ H[q >>> 8 & 255] ^ ie[j & 255] ^ S[V++], oe = k[F >>> 24] ^ P[q >>> 16 & 255] ^ H[j >>> 8 & 255] ^ ie[ee & 255] ^ S[V++], he = k[q >>> 24] ^ P[j >>> 16 & 255] ^ H[ee >>> 8 & 255] ^ ie[F & 255] ^ S[V++], Z = k[j >>> 24] ^ P[ee >>> 16 & 255] ^ H[F >>> 8 & 255] ^ ie[q & 255] ^ S[V++];
              ee = se, F = oe, q = he, j = Z;
            }
            var se = (M[ee >>> 24] << 24 | M[F >>> 16 & 255] << 16 | M[q >>> 8 & 255] << 8 | M[j & 255]) ^ S[V++], oe = (M[F >>> 24] << 24 | M[q >>> 16 & 255] << 16 | M[j >>> 8 & 255] << 8 | M[ee & 255]) ^ S[V++], he = (M[q >>> 24] << 24 | M[j >>> 16 & 255] << 16 | M[ee >>> 8 & 255] << 8 | M[F & 255]) ^ S[V++], Z = (M[j >>> 24] << 24 | M[ee >>> 16 & 255] << 16 | M[F >>> 8 & 255] << 8 | M[q & 255]) ^ S[V++];
            C[O] = se, C[O + 1] = oe, C[O + 2] = he, C[O + 3] = Z;
          },
          keySize: 256 / 32
        });
        n.AES = s._createHelper(B);
      }(), r.AES;
    });
  }(Ii)), Ii.exports;
}
var ki = { exports: {} }, uo;
function I1() {
  return uo || (uo = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Ar(), Cr(), xr(), Je());
    })(ve, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, c = i.BlockCipher, a = n.algo, d = [
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
        ], l = [
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
        ], p = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], w = [
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
        ], _ = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], m = a.DES = c.extend({
          _doReset: function() {
            for (var U = this._key, B = U.words, C = [], O = 0; O < 56; O++) {
              var S = d[O] - 1;
              C[O] = B[S >>> 5] >>> 31 - S % 32 & 1;
            }
            for (var k = this._subKeys = [], P = 0; P < 16; P++) {
              for (var H = k[P] = [], ie = p[P], O = 0; O < 24; O++)
                H[O / 6 | 0] |= C[(l[O] - 1 + ie) % 28] << 31 - O % 6, H[4 + (O / 6 | 0)] |= C[28 + (l[O + 24] - 1 + ie) % 28] << 31 - O % 6;
              H[0] = H[0] << 1 | H[0] >>> 31;
              for (var O = 1; O < 7; O++)
                H[O] = H[O] >>> (O - 1) * 4 + 3;
              H[7] = H[7] << 5 | H[7] >>> 27;
            }
            for (var M = this._invSubKeys = [], O = 0; O < 16; O++)
              M[O] = k[15 - O];
          },
          encryptBlock: function(U, B) {
            this._doCryptBlock(U, B, this._subKeys);
          },
          decryptBlock: function(U, B) {
            this._doCryptBlock(U, B, this._invSubKeys);
          },
          _doCryptBlock: function(U, B, C) {
            this._lBlock = U[B], this._rBlock = U[B + 1], h.call(this, 4, 252645135), h.call(this, 16, 65535), E.call(this, 2, 858993459), E.call(this, 8, 16711935), h.call(this, 1, 1431655765);
            for (var O = 0; O < 16; O++) {
              for (var S = C[O], k = this._lBlock, P = this._rBlock, H = 0, ie = 0; ie < 8; ie++)
                H |= w[ie][((P ^ S[ie]) & _[ie]) >>> 0];
              this._lBlock = P, this._rBlock = k ^ H;
            }
            var M = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = M, h.call(this, 1, 1431655765), E.call(this, 8, 16711935), E.call(this, 2, 858993459), h.call(this, 16, 65535), h.call(this, 4, 252645135), U[B] = this._lBlock, U[B + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function h(U, B) {
          var C = (this._lBlock >>> U ^ this._rBlock) & B;
          this._rBlock ^= C, this._lBlock ^= C << U;
        }
        function E(U, B) {
          var C = (this._rBlock >>> U ^ this._lBlock) & B;
          this._lBlock ^= C, this._rBlock ^= C << U;
        }
        n.DES = c._createHelper(m);
        var A = a.TripleDES = c.extend({
          _doReset: function() {
            var U = this._key, B = U.words;
            if (B.length !== 2 && B.length !== 4 && B.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var C = B.slice(0, 2), O = B.length < 4 ? B.slice(0, 2) : B.slice(2, 4), S = B.length < 6 ? B.slice(0, 2) : B.slice(4, 6);
            this._des1 = m.createEncryptor(s.create(C)), this._des2 = m.createEncryptor(s.create(O)), this._des3 = m.createEncryptor(s.create(S));
          },
          encryptBlock: function(U, B) {
            this._des1.encryptBlock(U, B), this._des2.decryptBlock(U, B), this._des3.encryptBlock(U, B);
          },
          decryptBlock: function(U, B) {
            this._des3.decryptBlock(U, B), this._des2.encryptBlock(U, B), this._des1.decryptBlock(U, B);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        n.TripleDES = c._createHelper(A);
      }(), r.TripleDES;
    });
  }(ki)), ki.exports;
}
var Pi = { exports: {} }, fo;
function k1() {
  return fo || (fo = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Ar(), Cr(), xr(), Je());
    })(ve, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.StreamCipher, c = n.algo, a = c.RC4 = s.extend({
          _doReset: function() {
            for (var p = this._key, w = p.words, _ = p.sigBytes, m = this._S = [], h = 0; h < 256; h++)
              m[h] = h;
            for (var h = 0, E = 0; h < 256; h++) {
              var A = h % _, U = w[A >>> 2] >>> 24 - A % 4 * 8 & 255;
              E = (E + m[h] + U) % 256;
              var B = m[h];
              m[h] = m[E], m[E] = B;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(p, w) {
            p[w] ^= d.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function d() {
          for (var p = this._S, w = this._i, _ = this._j, m = 0, h = 0; h < 4; h++) {
            w = (w + 1) % 256, _ = (_ + p[w]) % 256;
            var E = p[w];
            p[w] = p[_], p[_] = E, m |= p[(p[w] + p[_]) % 256] << 24 - h * 8;
          }
          return this._i = w, this._j = _, m;
        }
        n.RC4 = s._createHelper(a);
        var l = c.RC4Drop = a.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: a.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            a._doReset.call(this);
            for (var p = this.cfg.drop; p > 0; p--)
              d.call(this);
          }
        });
        n.RC4Drop = s._createHelper(l);
      }(), r.RC4;
    });
  }(Pi)), Pi.exports;
}
var Di = { exports: {} }, lo;
function P1() {
  return lo || (lo = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Ar(), Cr(), xr(), Je());
    })(ve, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.StreamCipher, c = n.algo, a = [], d = [], l = [], p = c.Rabbit = s.extend({
          _doReset: function() {
            for (var _ = this._key.words, m = this.cfg.iv, h = 0; h < 4; h++)
              _[h] = (_[h] << 8 | _[h] >>> 24) & 16711935 | (_[h] << 24 | _[h] >>> 8) & 4278255360;
            var E = this._X = [
              _[0],
              _[3] << 16 | _[2] >>> 16,
              _[1],
              _[0] << 16 | _[3] >>> 16,
              _[2],
              _[1] << 16 | _[0] >>> 16,
              _[3],
              _[2] << 16 | _[1] >>> 16
            ], A = this._C = [
              _[2] << 16 | _[2] >>> 16,
              _[0] & 4294901760 | _[1] & 65535,
              _[3] << 16 | _[3] >>> 16,
              _[1] & 4294901760 | _[2] & 65535,
              _[0] << 16 | _[0] >>> 16,
              _[2] & 4294901760 | _[3] & 65535,
              _[1] << 16 | _[1] >>> 16,
              _[3] & 4294901760 | _[0] & 65535
            ];
            this._b = 0;
            for (var h = 0; h < 4; h++)
              w.call(this);
            for (var h = 0; h < 8; h++)
              A[h] ^= E[h + 4 & 7];
            if (m) {
              var U = m.words, B = U[0], C = U[1], O = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360, S = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, k = O >>> 16 | S & 4294901760, P = S << 16 | O & 65535;
              A[0] ^= O, A[1] ^= k, A[2] ^= S, A[3] ^= P, A[4] ^= O, A[5] ^= k, A[6] ^= S, A[7] ^= P;
              for (var h = 0; h < 4; h++)
                w.call(this);
            }
          },
          _doProcessBlock: function(_, m) {
            var h = this._X;
            w.call(this), a[0] = h[0] ^ h[5] >>> 16 ^ h[3] << 16, a[1] = h[2] ^ h[7] >>> 16 ^ h[5] << 16, a[2] = h[4] ^ h[1] >>> 16 ^ h[7] << 16, a[3] = h[6] ^ h[3] >>> 16 ^ h[1] << 16;
            for (var E = 0; E < 4; E++)
              a[E] = (a[E] << 8 | a[E] >>> 24) & 16711935 | (a[E] << 24 | a[E] >>> 8) & 4278255360, _[m + E] ^= a[E];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function w() {
          for (var _ = this._X, m = this._C, h = 0; h < 8; h++)
            d[h] = m[h];
          m[0] = m[0] + 1295307597 + this._b | 0, m[1] = m[1] + 3545052371 + (m[0] >>> 0 < d[0] >>> 0 ? 1 : 0) | 0, m[2] = m[2] + 886263092 + (m[1] >>> 0 < d[1] >>> 0 ? 1 : 0) | 0, m[3] = m[3] + 1295307597 + (m[2] >>> 0 < d[2] >>> 0 ? 1 : 0) | 0, m[4] = m[4] + 3545052371 + (m[3] >>> 0 < d[3] >>> 0 ? 1 : 0) | 0, m[5] = m[5] + 886263092 + (m[4] >>> 0 < d[4] >>> 0 ? 1 : 0) | 0, m[6] = m[6] + 1295307597 + (m[5] >>> 0 < d[5] >>> 0 ? 1 : 0) | 0, m[7] = m[7] + 3545052371 + (m[6] >>> 0 < d[6] >>> 0 ? 1 : 0) | 0, this._b = m[7] >>> 0 < d[7] >>> 0 ? 1 : 0;
          for (var h = 0; h < 8; h++) {
            var E = _[h] + m[h], A = E & 65535, U = E >>> 16, B = ((A * A >>> 17) + A * U >>> 15) + U * U, C = ((E & 4294901760) * E | 0) + ((E & 65535) * E | 0);
            l[h] = B ^ C;
          }
          _[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, _[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, _[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, _[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, _[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, _[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, _[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, _[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0;
        }
        n.Rabbit = s._createHelper(p);
      }(), r.Rabbit;
    });
  }(Di)), Di.exports;
}
var zi = { exports: {} }, ho;
function D1() {
  return ho || (ho = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Ar(), Cr(), xr(), Je());
    })(ve, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.StreamCipher, c = n.algo, a = [], d = [], l = [], p = c.RabbitLegacy = s.extend({
          _doReset: function() {
            var _ = this._key.words, m = this.cfg.iv, h = this._X = [
              _[0],
              _[3] << 16 | _[2] >>> 16,
              _[1],
              _[0] << 16 | _[3] >>> 16,
              _[2],
              _[1] << 16 | _[0] >>> 16,
              _[3],
              _[2] << 16 | _[1] >>> 16
            ], E = this._C = [
              _[2] << 16 | _[2] >>> 16,
              _[0] & 4294901760 | _[1] & 65535,
              _[3] << 16 | _[3] >>> 16,
              _[1] & 4294901760 | _[2] & 65535,
              _[0] << 16 | _[0] >>> 16,
              _[2] & 4294901760 | _[3] & 65535,
              _[1] << 16 | _[1] >>> 16,
              _[3] & 4294901760 | _[0] & 65535
            ];
            this._b = 0;
            for (var A = 0; A < 4; A++)
              w.call(this);
            for (var A = 0; A < 8; A++)
              E[A] ^= h[A + 4 & 7];
            if (m) {
              var U = m.words, B = U[0], C = U[1], O = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360, S = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, k = O >>> 16 | S & 4294901760, P = S << 16 | O & 65535;
              E[0] ^= O, E[1] ^= k, E[2] ^= S, E[3] ^= P, E[4] ^= O, E[5] ^= k, E[6] ^= S, E[7] ^= P;
              for (var A = 0; A < 4; A++)
                w.call(this);
            }
          },
          _doProcessBlock: function(_, m) {
            var h = this._X;
            w.call(this), a[0] = h[0] ^ h[5] >>> 16 ^ h[3] << 16, a[1] = h[2] ^ h[7] >>> 16 ^ h[5] << 16, a[2] = h[4] ^ h[1] >>> 16 ^ h[7] << 16, a[3] = h[6] ^ h[3] >>> 16 ^ h[1] << 16;
            for (var E = 0; E < 4; E++)
              a[E] = (a[E] << 8 | a[E] >>> 24) & 16711935 | (a[E] << 24 | a[E] >>> 8) & 4278255360, _[m + E] ^= a[E];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function w() {
          for (var _ = this._X, m = this._C, h = 0; h < 8; h++)
            d[h] = m[h];
          m[0] = m[0] + 1295307597 + this._b | 0, m[1] = m[1] + 3545052371 + (m[0] >>> 0 < d[0] >>> 0 ? 1 : 0) | 0, m[2] = m[2] + 886263092 + (m[1] >>> 0 < d[1] >>> 0 ? 1 : 0) | 0, m[3] = m[3] + 1295307597 + (m[2] >>> 0 < d[2] >>> 0 ? 1 : 0) | 0, m[4] = m[4] + 3545052371 + (m[3] >>> 0 < d[3] >>> 0 ? 1 : 0) | 0, m[5] = m[5] + 886263092 + (m[4] >>> 0 < d[4] >>> 0 ? 1 : 0) | 0, m[6] = m[6] + 1295307597 + (m[5] >>> 0 < d[5] >>> 0 ? 1 : 0) | 0, m[7] = m[7] + 3545052371 + (m[6] >>> 0 < d[6] >>> 0 ? 1 : 0) | 0, this._b = m[7] >>> 0 < d[7] >>> 0 ? 1 : 0;
          for (var h = 0; h < 8; h++) {
            var E = _[h] + m[h], A = E & 65535, U = E >>> 16, B = ((A * A >>> 17) + A * U >>> 15) + U * U, C = ((E & 4294901760) * E | 0) + ((E & 65535) * E | 0);
            l[h] = B ^ C;
          }
          _[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, _[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, _[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, _[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, _[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, _[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, _[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, _[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0;
        }
        n.RabbitLegacy = s._createHelper(p);
      }(), r.RabbitLegacy;
    });
  }(zi)), zi.exports;
}
var ji = { exports: {} }, xo;
function z1() {
  return xo || (xo = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(Ne(), Ar(), Cr(), xr(), Je());
    })(ve, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.BlockCipher, c = n.algo;
        const a = 16, d = [
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
        ], l = [
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
        var p = {
          pbox: [],
          sbox: []
        };
        function w(A, U) {
          let B = U >> 24 & 255, C = U >> 16 & 255, O = U >> 8 & 255, S = U & 255, k = A.sbox[0][B] + A.sbox[1][C];
          return k = k ^ A.sbox[2][O], k = k + A.sbox[3][S], k;
        }
        function _(A, U, B) {
          let C = U, O = B, S;
          for (let k = 0; k < a; ++k)
            C = C ^ A.pbox[k], O = w(A, C) ^ O, S = C, C = O, O = S;
          return S = C, C = O, O = S, O = O ^ A.pbox[a], C = C ^ A.pbox[a + 1], { left: C, right: O };
        }
        function m(A, U, B) {
          let C = U, O = B, S;
          for (let k = a + 1; k > 1; --k)
            C = C ^ A.pbox[k], O = w(A, C) ^ O, S = C, C = O, O = S;
          return S = C, C = O, O = S, O = O ^ A.pbox[1], C = C ^ A.pbox[0], { left: C, right: O };
        }
        function h(A, U, B) {
          for (let P = 0; P < 4; P++) {
            A.sbox[P] = [];
            for (let H = 0; H < 256; H++)
              A.sbox[P][H] = l[P][H];
          }
          let C = 0;
          for (let P = 0; P < a + 2; P++)
            A.pbox[P] = d[P] ^ U[C], C++, C >= B && (C = 0);
          let O = 0, S = 0, k = 0;
          for (let P = 0; P < a + 2; P += 2)
            k = _(A, O, S), O = k.left, S = k.right, A.pbox[P] = O, A.pbox[P + 1] = S;
          for (let P = 0; P < 4; P++)
            for (let H = 0; H < 256; H += 2)
              k = _(A, O, S), O = k.left, S = k.right, A.sbox[P][H] = O, A.sbox[P][H + 1] = S;
          return !0;
        }
        var E = c.Blowfish = s.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var A = this._keyPriorReset = this._key, U = A.words, B = A.sigBytes / 4;
              h(p, U, B);
            }
          },
          encryptBlock: function(A, U) {
            var B = _(p, A[U], A[U + 1]);
            A[U] = B.left, A[U + 1] = B.right;
          },
          decryptBlock: function(A, U) {
            var B = m(p, A[U], A[U + 1]);
            A[U] = B.left, A[U + 1] = B.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        n.Blowfish = s._createHelper(E);
      }(), r.Blowfish;
    });
  }(ji)), ji.exports;
}
(function(t, e) {
  (function(r, n, i) {
    t.exports = n(Ne(), N0(), p1(), y1(), Ar(), g1(), Cr(), Bu(), Us(), w1(), Au(), b1(), m1(), _1(), Is(), E1(), xr(), Je(), v1(), B1(), A1(), C1(), F1(), T1(), S1(), N1(), R1(), O1(), M1(), U1(), I1(), k1(), P1(), D1(), z1());
  })(ve, function(r) {
    return r;
  });
})(vu);
var j1 = vu.exports;
const Cu = /* @__PURE__ */ mo(j1);
window.Buffer = lr.Buffer;
const q1 = lr.Buffer.alloc(32), $1 = `
account-id`, H1 = (t) => t < 0 ? (Number(t) >>> 0).toString(16) : Number(t).toString(16), V1 = (t) => {
  const e = f1.unsigned(lr.Buffer.from(t));
  return H1(e).padStart(8, "0");
}, po = (t) => {
  const e = [];
  let r;
  for (r = 0; r < t.length; r += 1)
    e[r / 4 | 0] |= t[r] << 24 - 8 * r;
  return Cu.lib.WordArray.create(e, t.length);
}, G1 = (t, e) => {
  const r = [];
  return e > 0 && r.push(t >>> 24), e > 1 && r.push(t >>> 16 & 255), e > 2 && r.push(t >>> 8 & 255), e > 3 && r.push(t & 255), r;
}, W1 = (t, e) => {
  t.hasOwnProperty("sigBytes") && t.hasOwnProperty("words") && (e = t.sigBytes, t = t.words);
  let r = [], n, i = 0;
  for (; e > 0; )
    n = G1(t[i], Math.min(4, e)), e -= n.length, r = [...r, n], i++;
  return [].concat.apply([], r);
}, ks = (t, e = "") => {
  try {
    var r = Ee.from(t);
    const n = Cu.algo.SHA224.create();
    n.update($1), n.update(po(r.toUint8Array()));
    const i = lr.Buffer.from(q1);
    e && i.writeUInt32BE(e), n.update(po(i));
    const s = n.finalize(), c = W1(s, 28);
    return V1(c) + s.toString();
  } catch (n) {
    return console.log(n), !1;
  }
}, L1 = {
  readyState: "Loadable",
  url: "http://localhost:4943",
  authClient: !0,
  connectWallet: async function(t = { whitelist: [], host: "" }) {
    var e = this, r = {};
    return e.authClient = await _u.create(), new Promise(async (n, i) => {
      var s = await e.authClient.isAuthenticated();
      s ? (r = await c(), n(r)) : e.authClient.login({
        identityProvider: "http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943",
        onSuccess: async () => {
          r = await c(), n(r);
        }
      });
      async function c() {
        var a = await e.authClient.getIdentity(), d = await (a == null ? void 0 : a.getPrincipal());
        e.agent = new Ht({ identity: a, host: t.host }), e.agent.fetchRootKey();
        var l = await ks(a == null ? void 0 : a.getPrincipal().toString());
        return e.createActor = async function(p = { canisterId: "", interfaceFactory: !1 }) {
          return !p.canisterId || !p.interfaceFactory ? !1 : await cr.createActor(p.interfaceFactory, { agent: this.agent, canisterId: p.canisterId });
        }, e.createAgent = async function() {
          return new Ht({ identity: a, host: t.host });
        }, e.getPrincipal = async function() {
          return a.getPrincipal();
        }, e.disConnectWallet = async function() {
          await e.authClient.logout();
        }, { accountId: l, principalId: d.toString() };
      }
    });
  }
};
window.ic && window.ic.plug && window.ic.plug.init();
window.onload = function() {
  window.ic.plug && (K1.readyState = "Installed");
};
const K1 = {
  readyState: "NotDetected",
  url: "https://plugwallet.ooo/",
  connectWallet: async function(t = { whitelist: [], host: "" }) {
    window.ic.plug || (this.readyState = "NotDetected", window.open("https://plugwallet.ooo/"));
    var e = !1, r = !1, n = !1;
    new Promise((s) => {
      setTimeout(() => {
        s(!1);
      }, 3e3);
    }), n = await window.ic.plug.isConnected();
    try {
      n ? await window.ic.plug.createAgent(t) : e = await window.ic.plug.requestConnect(t), r = await window.ic.plug.agent.getPrincipal();
      var i = await window.ic.plug.sessionManager.getSession();
      return this.agent = window.ic.plug.agent, this.getPrincipal = async function() {
        return window.ic.plug.getPrincipal();
      }, this.createActor = async function(s, c) {
        return window.ic.plug.createActor(s, c);
      }, this.batchTransactions = async function(s, c = { state: "init", txList: [] }) {
        return c && c.txList > 0 && s.forEach((a, d) => {
          s[d].onSuccess = () => {
            c.state = txList[d], a.onSuccess();
          };
        }), window.ic.plug.batchTransactions(s);
      }, { accountId: i.accountId, principalId: r.toString() };
    } catch {
      return !1;
    }
  },
  disConnectWallet: async function() {
    await window.ic.plug.disconnect();
  }
};
window.Buffer = lr.Buffer;
lr.Buffer.from(new TextEncoder().encode(`
ic-request`));
var Y1 = "https://www.stoicwallet.com", qi, On, Z1, yo = {}, go = {};
function Q1(t) {
  go[t].parentNode.removeChild(go[t]);
}
window.addEventListener("message", function(t) {
  t.origin == Y1 && (t && t.data && t.data.target === "STOIC-EXT" ? (typeof t.data.success < "u" && t.data.success ? yo[t.data.listener][0](t.data.data) : yo[t.data.listener][1](t.data.data), Q1(t.data.listener)) : t.data.action == "initiateStoicConnect" ? qi.postMessage({ action: "requestAuthorization", apikey: Z1 }, "*") : t.data.action == "rejectAuthorization" ? (On[1]("Authorization Rejected"), On = null, qi.close()) : t.data.action == "confirmAuthorization" && (On[0](t.data), On = null, qi.close()));
}, !1);
window.icx = new Vu();
const Kr = {
  providerUrl: "https://63k2f-nyaaa-aaaah-aakla-cai.raw.ic0.app",
  delegationModes: ["globalThis"],
  ledgerHost: "https://icp0.io/"
}, X1 = async (t = "", e = []) => await Hu.create({
  useFrame: !(window.innerWidth < 768),
  signerProviderUrl: `${Kr.providerUrl}/#signer`,
  walletProviderUrl: `${Kr.providerUrl}/#transaction`,
  identityProvider: `${Kr.providerUrl}/#authorize`,
  host: t || Kr.ledgerHost,
  ledgerHost: t || Kr.ledgerHost,
  ledgerCanisterId: "ryjl3-tyaaa-aaaaa-aaaba-cai",
  permissions: ["permissions-identity", "permissions-wallet"],
  delegationTargets: e,
  noUnify: !1
});
var wo;
(wo = window.ic) != null && wo.astrox || X1();
var bo;
(bo = window == null ? void 0 : window.ethereum) != null && bo.isMetaMask;
const J1 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA4ODAgNjQwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4ODAgNjQwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTt9Cgkuc3Qxe2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQoJLnN0MntmaWxsOnVybCgjU1ZHSURfMl8pO30KCS5zdDN7ZmlsbDojMjlBQkUyO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjcxLjk5LDMyMGMwLTQ1LjA5LTM3LjYzLTgxLjc4LTgzLjg5LTgxLjc4Yy0xMi4yNiwwLTMzLjgsNi4wNy02Ni43OCwzNC45NwoJCWMtMTcuNzMsMTUuNTQtMzMuMTcsMzIuODctNDMuODUsNDUuNTVjMTcuOTksMTkuMDUsMzcuNDcsMzkuMjMsNDYuMzEsNDYuODljMy42MywzLjE0LDI3LjYzLDIyLjgxLDU2LjA5LDM1LjE0CgkJYzMuMzQsMC43NCw2LjA2LDEsOC4xNiwxQzYzNC4zNCw0MDEuNSw2NzEuOTksMzY0Ljg0LDY3MS45OSwzMjB6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTIyLjg5LDM2Ni41NGMyNy4yMiwyMy41OSw0NS43MiwzMS43NCw1Ni45OCwzNC4yNGMzLjM0LDAuNzQsNi4wNiwxLDguMTYsMQoJCWM0Ni4zLTAuMjgsODMuOTUtMzYuOTQsODMuOTUtODEuNzhjMC00NS4wOS0zNy42My04MS43OC04My44OS04MS43OGMtMTIuMjYsMC0zMy44LDYuMDctNjYuNzgsMzQuOTcKCQljLTE3LjczLDE1LjU0LTMzLjE3LDMyLjg3LTQzLjg1LDQ1LjU1QzQ3Ny4yMSwzMTkuMDUsNTA0LjMsMzUwLjQzLDUyMi44OSwzNjYuNTR6Ii8+Cgk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjUxNS4yNzQzIiB5MT0iMjAxLjkzNDYiIHgyPSI3MDUuNDg0OSIgeTI9IjM5OC45MDM0Ij4KCQk8c3RvcCAgb2Zmc2V0PSIwLjIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRjE1QTI0Ii8+CgkJPHN0b3AgIG9mZnNldD0iMC42ODQxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkJCMDNCIi8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTU4OC4xLDE4NGMtMzIuMTYsMC02Ny4yOCwxNi40OS0xMDQuMzgsNDljLTE3LjU3LDE1LjQtMzIuOCwzMS44OC00NC4yMyw0NS4xYzAuMDIsMC4wMiwwLjA0LDAuMDQsMC4wNiwwLjA3CgkJYzAuMDMtMC4wNCwwLjA1LTAuMDYsMC4wNS0wLjA2czE4LjAzLDE5LjYzLDM3Ljg3LDQwLjY0YzEwLjY4LTEyLjY5LDI2LjExLTMwLjAxLDQzLjg1LTQ1LjU1YzMyLjk4LTI4LjkxLDU0LjUyLTM0Ljk3LDY2Ljc4LTM0Ljk3CgkJYzQ2LjI2LDAsODMuODksMzYuNjksODMuODksODEuNzhjMCw0NC44NC0zNy42NSw4MS41LTgzLjk1LDgxLjc4Yy0yLjExLDAtNC44Mi0wLjI2LTguMTYtMWMxMy40OSw1Ljg0LDI3Ljk5LDEwLjA0LDQxLjgsMTAuMDQKCQljODQuNzksMCwxMDEuMzYtNTUuMzMsMTAyLjQ5LTU5LjI1YzIuNTEtMTAuMTQsMy44NC0yMC43LDMuODQtMzEuNTZDNzI4LDI0NS4wMSw2NjUuMjQsMTg0LDU4OC4xLDE4NHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMDguMDEsMzIwYzAsNDUuMDksMzcuNjMsODEuNzgsODMuODksODEuNzhjMTIuMjYsMCwzMy44LTYuMDcsNjYuNzgtMzQuOTcKCQljMTcuNzMtMTUuNTQsMzMuMTctMzIuODcsNDMuODUtNDUuNTVjLTE3Ljk5LTE5LjA1LTM3LjQ3LTM5LjIzLTQ2LjMxLTQ2Ljg5Yy0zLjYzLTMuMTQtMjcuNjMtMjIuODEtNTYuMDktMzUuMTQKCQljLTMuMzQtMC43NC02LjA2LTEtOC4xNi0xQzI0NS42NiwyMzguNSwyMDguMDEsMjc1LjE2LDIwOC4wMSwzMjB6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzU3LjExLDI3My40NmMtMjcuMjItMjMuNTktNDUuNzItMzEuNzQtNTYuOTgtMzQuMjRjLTMuMzQtMC43NC02LjA2LTEtOC4xNi0xCgkJYy00Ni4zLDAuMjgtODMuOTUsMzYuOTQtODMuOTUsODEuNzhjMCw0NS4wOSwzNy42Myw4MS43OCw4My44OSw4MS43OGMxMi4yNiwwLDMzLjgtNi4wNyw2Ni43OC0zNC45NwoJCWMxNy43My0xNS41NCwzMy4xNy0zMi44Nyw0My44NS00NS41NWMwLjI2LTAuMywwLjUyLTAuNjIsMC43OC0wLjkyQzM5Mi4xMiwzMDcuNTEsMzc1LjcsMjg5LjU3LDM1Ny4xMSwyNzMuNDZ6Ii8+CgkKCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii04NzcuMzAzNSIgeTE9Ii0xMTIyLjY4MTkiIHgyPSItNjg3LjA5MjgiIHkyPSItOTI1LjcxMzEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIC0xIC01MTIuNTc3OCAtNjg0LjYxNjQpIj4KCQk8c3RvcCAgb2Zmc2V0PSIwLjIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRUQxRTc5Ii8+CgkJPHN0b3AgIG9mZnNldD0iMC44OTI5IiBzdHlsZT0ic3RvcC1jb2xvcjojNTIyNzg1Ii8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTI5MS45LDQ1NmMzMi4xNiwwLDY3LjI4LTE2LjQ5LDEwNC4zOC00OWMxNy41Ny0xNS40LDMyLjgtMzEuODgsNDQuMjMtNDUuMWMtMC4wMi0wLjAyLTAuMDQtMC4wNC0wLjA2LTAuMDcKCQljLTAuMDMsMC4wNC0wLjA1LDAuMDYtMC4wNSwwLjA2cy0xOC4wMy0xOS42My0zNy44Ny00MC42NGMtMTAuNjgsMTIuNjktMjYuMTEsMzAuMDEtNDMuODUsNDUuNTUKCQljLTMyLjk4LDI4LjkxLTU0LjUyLDM0Ljk3LTY2Ljc4LDM0Ljk3Yy00Ni4yNiwwLTgzLjg5LTM2LjY5LTgzLjg5LTgxLjc4YzAtNDQuODQsMzcuNjUtODEuNSw4My45NS04MS43OGMyLjExLDAsNC44MiwwLjI2LDguMTYsMQoJCWMtMTMuNDktNS44NC0yNy45OS0xMC4wNC00MS44LTEwLjA0Yy04NC43OSwwLTEwMS4zNiw1NS4zMy0xMDIuNDksNTkuMjVjLTIuNTEsMTAuMTQtMy44NCwyMC43LTMuODQsMzEuNTYKCQlDMTUyLDM5NC45OSwyMTQuNzYsNDU2LDI5MS45LDQ1NnoiLz4KCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik02MjEuNTIsNDA5LjQ1Yy00My40MS0xLjA3LTg4LjUzLTM1LjMtOTcuNzQtNDMuODFjLTIzLjc4LTIxLjk5LTc4LjY2LTgxLjUzLTgyLjk3LTg2LjIKCQlDNDAwLjU4LDIzNC40LDM0Ni4wNywxODQsMjkxLjksMTg0aC0wLjA3aC0wLjA3Yy02NS44NSwwLjMzLTEyMS4xOSw0NC45Mi0xMzUuOTEsMTA0LjQ0YzEuMTMtMy45MiwyMi43Ni02MC4zLDEwMi40Mi01OC4zNAoJCWM0My40MSwxLjA3LDg4Ljc1LDM1Ljc2LDk3Ljk1LDQ0LjI3YzIzLjc4LDIxLjk5LDc4LjY4LDgxLjU0LDgyLjk3LDg2LjIxQzQ3OS40Miw0MDUuNjEsNTMzLjkzLDQ1Niw1ODguMSw0NTZoMC4wN2gwLjA3CgkJYzY1Ljg1LTAuMzMsMTIxLjE5LTQ0LjkyLDEzNS45MS0xMDQuNDRDNzIzLjAzLDM1NS40OCw3MDEuMTgsNDExLjQxLDYyMS41Miw0MDkuNDV6Ii8+CjwvZz4KPC9zdmc+Cg==", ex = [
  { id: "nns", name: "Internet Identity", icon: J1, adapter: L1 }
  // { id: 'plug', name: 'Plug Wallet', icon: BaseUrl + 'assets/plug.jpg', adapter: plug },
  // { id: 'astrox', name: 'AstroX ME', icon: BaseUrl + 'assets/astroxme.webp', adapter: astrox },
  // { id: 'bitfinity', name: 'Bitfinity Wallet', icon: BaseUrl + 'assets/bitfinity.svg', adapter: bitfinity },
  // { id: 'stoic', name: 'Stoic Wallet', icon: BaseUrl + 'assets/stoic.png', adapter: stoic },
  // { id: 'nfid', name: 'NFID', icon: BaseUrl + 'assets/nfid.svg', adapter: nfid },
  // { id: 'metamask', name: 'MetaMask', icon: BaseUrl + 'assets/metamask.svg', adapter: metaMask },
], Fu = class {
  constructor(e = {}, r) {
    ze(this, "state", "idle");
    //   'idle' ,'running', 'error' ,'done' 
    ze(this, "transactionLlist", {});
    ze(this, "stepsList", []);
    ze(this, "completed", []);
    ze(this, "activeStep", "");
    ze(this, "failedSteps", []);
    ze(this, "transactionResults", {});
    ze(this, "trxArray", []);
    ze(this, "_info", !1);
    ze(this, "_adapterObj", !1);
    ze(this, "_prepareTrxArry", function() {
      var e = this;
      e.trxArray = [];
      var r = [];
      Object.values(this.transactionLlist).forEach((i) => {
        r.push(i), i.updateNextStep && (e.trxArray.push(r), r = []);
      }), r.length > 0 && e.trxArray.push(r);
      var n = 0;
      return e.trxArray.forEach((i, s) => {
        i.forEach((c, a) => {
          e.trxArray[s][a].stepIndex = n, e.trxArray[s][a].state = "idle", e.trxArray[s][a].onSuccessMain = async (d, l) => {
            const p = l.stepIndex, w = c.onSuccess, _ = c.onFail;
            if (d.err || d.Err || d.ERR)
              return e.failedSteps.push(e.stepsList[p]), e.transactionResults[e.stepsList[p]] = d, e.state = "error", l.state = "error", _ && await _(d), !1;
            e.completed.push(e.stepsList[p]), e.activeStep = e.stepsList[p + 1], e.transactionResults[e.stepsList[p]] = d, l.state = "done", l.updateNextStep && e.trxArray[s + 1] && await l.updateNextStep(d, e.trxArray[s + 1][0]), w && await w(d);
          }, e.trxArray[s][a].onFailMain = async (d, l) => {
            const p = c.onFail, w = l.stepIndex;
            return console.error(`error in  ${e.stepsList[w]} `, e.trxArray[s][a]), console.error(d), e.failedSteps.push(e.stepsList[w]), e.activeStep = e.stepsList[w], e.state = "error", l.state = "error", p && await p(d), !1;
          }, n++;
        });
      }), e.trxArray;
    });
    if (!r || !r.provider)
      return !1;
    if (Object.entries(e).forEach(([n, i]) => {
      typeof i == "object" && (this.transactionLlist[n] = i);
    }), Object.keys(this.transactionLlist).length > 0)
      this.stepsList = Object.keys(this.transactionLlist), this._adapterObj = r;
    else
      return !1;
  }
  async retryExecute() {
    if (this.state != "error")
      return !1;
    this.trxArray = this.trxArray.map((r) => r.filter((n) => n.state !== "done")), this.state = "running", this._info = "", this.failedSteps = [];
    var e = await this._processBatch();
    return e;
  }
  async execute() {
    return this.state == "running" || !this._adapterObj || Object.keys(this.transactionLlist).length == 0 ? !1 : this.state == "done" ? this.transactionResults : (this.state = "running", this.failedSteps = [], this.trxArray = this._prepareTrxArry(), await this._processBatch());
  }
  async _processBatch() {
    if (!this.trxArray.length)
      return !1;
    var e = this;
    if (e.activeStep = e.completed.length > 0 ? e.stepsList[e.completed.length] : e.stepsList[0], ["bitfinity"].includes(this._adapterObj.walletActive)) {
      for (const i of e.trxArray) {
        if (e.state == "error" || e.state == "done")
          break;
        if (i.length)
          var r = await this._adapterObj.provider.batchTransactions(i);
      }
      return e.failedSteps.length == 0 ? (e.state = "done", e.transactionResults) : (e.state = "error", !1);
    } else if (["plug", "stoic", "dfinity", "astrox", "metamask", "nfid"].includes(this._adapterObj.walletActive))
      try {
        for (const i of e.trxArray) {
          if (e.state == "error" || e.state == "done")
            break;
          if (i.length)
            for (const s of i) {
              if (e.state == "error" || e.state == "done")
                break;
              var n = await e._adapterObj.getCanisterActor(s.canisterId, s.idl, !1, !0), r = !1;
              s.methodName ? s.args ? r = await n[s.methodName](...s.args) : r = await n[s.methodName]() : await s.onFailMain(r), r ? await s.onSuccessMain(r, s) : await s.onFailMain(r, s);
            }
        }
        return e.failedSteps.length == 0 ? (e.state = "done", e.transactionResults) : (e.state = "error", !1);
      } catch (i) {
        return e.state = "error", console.error(i), e._info = i, !1;
      }
    else
      return console.log("trx method not defined..."), e.state = "error", !1;
  }
}, Xr = "http://localhost:4943", tx = 10 ** 8, gr = "ryjl3-tyaaa-aaaaa-aaaba-cai", Mn = "nnsWallet", Tu = class {
  constructor(e = { whitelist: [gr], host: Xr }) {
    ze(this, "accountId", !1);
    ze(this, "principalId", !1);
    ze(this, "walletActive", "");
    ze(this, "provider", !1);
    ze(this, "balance", 0);
    ze(this, "canisterActors", {});
    ze(this, "anoncanisterActors", []);
    ze(this, "connectedWalletInfo", {});
    ze(this, "wallets", ex);
    ze(this, "_connectObject", { whitelist: [gr], host: Xr });
    localStorage.getItem(Mn), e = this._cleanUpConnObj(e);
  }
  _cleanUpConnObj(e) {
    return e.whitelist.push(gr), e.whitelist = Array.from(/* @__PURE__ */ new Set([...e.whitelist])), this._connectObject = e, e;
  }
  async connect(e, r = { whitelist: [], host: Xr }) {
    if (r = this._cleanUpConnObj(r), !e)
      return !1;
    try {
      var n = this.wallets.find((c) => c.id == e);
      if (!n)
        return !1;
      if (n.adapter.readyState == "Installed" || n.adapter.readyState == "Loadable") {
        var i = await n.adapter.connectWallet(r);
        if (!i)
          return !1;
        this.principalId = i.principalId, this.accountId = i.accountId, this.walletActive = e, this.provider = n.adapter, this.connectedWalletInfo = {
          id: n.id,
          icon: n.icon,
          name: n.name
        }, i.stoicAccounts && localStorage.setItem("stoicAccounts", i.stoicAccounts.length || 0), localStorage.setItem(Mn, this.walletActive);
        var s = new CustomEvent("nnsWalletConnected");
        window.dispatchEvent(s, e), this.getWalletBalance();
      } else
        n.adapter.readyState == "NotDetected" && window.open(n.adapter.url, "_blank");
      return this.principalId;
    } catch {
      return !1;
    }
  }
  async disconnect() {
    return this.provider.disConnectWallet(), localStorage.removeItem(Mn), this.provider = !1, this.address = !1, this.wallet = "", !0;
  }
  async isLoaded() {
    return new Promise((e, r) => {
      var n = setInterval(() => {
        this.provider && (clearInterval(n), e(!0));
      }, 500);
    });
  }
  async getWalletBalance(e = "number") {
    if (!this.accountId)
      return 0;
    var r = await this.getCanisterActor(gr, i1, !0);
    const n = await r.icrc1_balance_of({
      owner: Ee.from(this.principalId),
      subaccount: []
    });
    return e == "number" ? this.balance = parseFloat(n) / tx : this.balance = n, this.balance;
  }
  async requestICPTransfer(e) {
    return new Promise(async (r, n) => {
      var i = () => {
      }, s = await this.getCanisterActor(gr, i);
      const c = await s.send_dfx(e).catch((a) => {
        n(a);
      });
      c && r(c), n(!1);
    });
  }
  async getCanisterActor(e, r, n = !1, i = !1, s = !1) {
    if (s)
      return this.getSignedActor(e, r);
    let c = !1;
    if (n)
      if (i) {
        const a = new Ht({
          AnonymousIdentity: qr,
          host: this._connectObject.host
        });
        c = await cr.createActor(r, {
          agent: a,
          canisterId: e
        }), this.anoncanisterActors[e] = c;
      } else if (this.anoncanisterActors[e])
        c = this.anoncanisterActors[e];
      else {
        const a = new Ht({
          AnonymousIdentity: qr,
          host: this._connectObject.host
        });
        c = await cr.createActor(r, {
          agent: a,
          canisterId: e
        }), this.anoncanisterActors[e] = c;
      }
    else
      i ? (c = await this.provider.createActor({
        canisterId: e,
        interfaceFactory: r
      }), this.canisterActors[e] = c) : this.canisterActors[e] ? c = this.canisterActors[e] : (c = await this.provider.createActor({
        canisterId: e,
        interfaceFactory: r
      }), this.canisterActors[e] = c);
    return c;
  }
  async getSignedActor(e, r) {
    if (!this.provider)
      throw new Error("Wallet not connected");
    try {
      const i = await (await _u.create()).getIdentity(), s = new Ht({ identity: i, host: this._connectObject.host });
      return this._connectObject.host.includes("localhost") && await s.fetchRootKey(), await cr.createActor(r, {
        agent: s,
        canisterId: e
      });
    } catch (n) {
      throw console.error(
        `Error creating signed actor for canister ${e}:`,
        n
      ), n;
    }
  }
  async autoConnect(e = { whitelist: [gr], host: Xr }) {
    e = this._cleanUpConnObj(e);
    var r = localStorage.getItem(Mn), n = this.wallets.find((s) => s.id == r);
    if (!n)
      return !1;
    await window.onload();
    var i = await this.connect(r, e);
    return i;
  }
}, lx = Fu, hx = ks, dx = new Tu({
  whitelist: [gr],
  host: Xr
});
window && (window.pnp = Tu, window.pnp.BatchTransact = Fu, window.pnp.nns = { AnonymousIdentity: qr, Principal: Ee });
export {
  lx as BatchTransact,
  Tu as PnP,
  dx as PnPAdapter,
  hx as principalIdFromHex
};

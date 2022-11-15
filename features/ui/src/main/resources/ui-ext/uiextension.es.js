const Ue = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
}, BR = {}, IR = window.Vue.resolveComponent, DR = window.Vue.createVNode, _R = window.Vue.openBlock, OR = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const QR = { class: "main" };
function zR(t, o) {
  const r = IR("router-view");
  return _R(), OR("div", QR, [
    DR(r)
  ]);
}
const GR = /* @__PURE__ */ Ue(BR, [["render", zR], ["__scopeId", "data-v-5d32d140"]]), YR = window.Vue.defineComponent, PR = window.Vue.openBlock, HR = window.Vue.createBlock, jR = /* @__PURE__ */ YR({
  __name: "App",
  setup(t) {
    return (o, r) => (PR(), HR(GR));
  }
});
var Eo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function XR(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ym = { exports: {} }, _c = { exports: {} }, km = function(o, r) {
  return function() {
    for (var l = new Array(arguments.length), c = 0; c < l.length; c++)
      l[c] = arguments[c];
    return o.apply(r, l);
  };
}, LR = km, Oc = Object.prototype.toString, Qc = function(t) {
  return function(o) {
    var r = Oc.call(o);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function dr(t) {
  return t = t.toLowerCase(), function(r) {
    return Qc(r) === t;
  };
}
function zc(t) {
  return Array.isArray(t);
}
function _a(t) {
  return typeof t > "u";
}
function $R(t) {
  return t !== null && !_a(t) && t.constructor !== null && !_a(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var Mm = dr("ArrayBuffer");
function qR(t) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(t) : o = t && t.buffer && Mm(t.buffer), o;
}
function KR(t) {
  return typeof t == "string";
}
function eN(t) {
  return typeof t == "number";
}
function Zm(t) {
  return t !== null && typeof t == "object";
}
function Aa(t) {
  if (Qc(t) !== "object")
    return !1;
  var o = Object.getPrototypeOf(t);
  return o === null || o === Object.prototype;
}
var tN = dr("Date"), nN = dr("File"), rN = dr("Blob"), oN = dr("FileList");
function Gc(t) {
  return Oc.call(t) === "[object Function]";
}
function iN(t) {
  return Zm(t) && Gc(t.pipe);
}
function aN(t) {
  var o = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || Oc.call(t) === o || Gc(t.toString) && t.toString() === o);
}
var sN = dr("URLSearchParams");
function lN(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function cN() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Yc(t, o) {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), zc(t))
      for (var r = 0, a = t.length; r < a; r++)
        o.call(null, t[r], r, t);
    else
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && o.call(null, t[l], l, t);
}
function Mc() {
  var t = {};
  function o(l, c) {
    Aa(t[c]) && Aa(l) ? t[c] = Mc(t[c], l) : Aa(l) ? t[c] = Mc({}, l) : zc(l) ? t[c] = l.slice() : t[c] = l;
  }
  for (var r = 0, a = arguments.length; r < a; r++)
    Yc(arguments[r], o);
  return t;
}
function uN(t, o, r) {
  return Yc(o, function(l, c) {
    r && typeof l == "function" ? t[c] = LR(l, r) : t[c] = l;
  }), t;
}
function dN(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function fN(t, o, r, a) {
  t.prototype = Object.create(o.prototype, a), t.prototype.constructor = t, r && Object.assign(t.prototype, r);
}
function hN(t, o, r) {
  var a, l, c, d = {};
  o = o || {};
  do {
    for (a = Object.getOwnPropertyNames(t), l = a.length; l-- > 0; )
      c = a[l], d[c] || (o[c] = t[c], d[c] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!r || r(t, o)) && t !== Object.prototype);
  return o;
}
function pN(t, o, r) {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= o.length;
  var a = t.indexOf(o, r);
  return a !== -1 && a === r;
}
function mN(t) {
  if (!t)
    return null;
  var o = t.length;
  if (_a(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = t[o];
  return r;
}
var wN = function(t) {
  return function(o) {
    return t && o instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Oe = {
  isArray: zc,
  isArrayBuffer: Mm,
  isBuffer: $R,
  isFormData: aN,
  isArrayBufferView: qR,
  isString: KR,
  isNumber: eN,
  isObject: Zm,
  isPlainObject: Aa,
  isUndefined: _a,
  isDate: tN,
  isFile: nN,
  isBlob: rN,
  isFunction: Gc,
  isStream: iN,
  isURLSearchParams: sN,
  isStandardBrowserEnv: cN,
  forEach: Yc,
  merge: Mc,
  extend: uN,
  trim: lN,
  stripBOM: dN,
  inherits: fN,
  toFlatObject: hN,
  kindOf: Qc,
  kindOfTest: dr,
  endsWith: pN,
  toArray: mN,
  isTypedArray: wN,
  isFileList: oN
}, Sr = Oe;
function Lf(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var bm = function(o, r, a) {
  if (!r)
    return o;
  var l;
  if (a)
    l = a(r);
  else if (Sr.isURLSearchParams(r))
    l = r.toString();
  else {
    var c = [];
    Sr.forEach(r, function(w, V) {
      w === null || typeof w > "u" || (Sr.isArray(w) ? V = V + "[]" : w = [w], Sr.forEach(w, function(R) {
        Sr.isDate(R) ? R = R.toISOString() : Sr.isObject(R) && (R = JSON.stringify(R)), c.push(Lf(V) + "=" + Lf(R));
      }));
    }), l = c.join("&");
  }
  if (l) {
    var d = o.indexOf("#");
    d !== -1 && (o = o.slice(0, d)), o += (o.indexOf("?") === -1 ? "?" : "&") + l;
  }
  return o;
}, vN = Oe;
function $a() {
  this.handlers = [];
}
$a.prototype.use = function(o, r, a) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: a ? a.synchronous : !1,
    runWhen: a ? a.runWhen : null
  }), this.handlers.length - 1;
};
$a.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
$a.prototype.forEach = function(o) {
  vN.forEach(this.handlers, function(a) {
    a !== null && o(a);
  });
};
var VN = $a, TN = Oe, gN = function(o, r) {
  TN.forEach(o, function(l, c) {
    c !== r && c.toUpperCase() === r.toUpperCase() && (o[r] = l, delete o[c]);
  });
}, Jm = Oe;
function qr(t, o, r, a, l) {
  Error.call(this), this.message = t, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), a && (this.request = a), l && (this.response = l);
}
Jm.inherits(qr, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var Em = qr.prototype, Sm = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(t) {
  Sm[t] = { value: t };
});
Object.defineProperties(qr, Sm);
Object.defineProperty(Em, "isAxiosError", { value: !0 });
qr.from = function(t, o, r, a, l, c) {
  var d = Object.create(Em);
  return Jm.toFlatObject(t, d, function(w) {
    return w !== Error.prototype;
  }), qr.call(d, t.message, o, r, a, l), d.name = t.name, c && Object.assign(d, c), d;
};
var ro = qr, Am = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Dt = Oe;
function UN(t, o) {
  o = o || new FormData();
  var r = [];
  function a(c) {
    return c === null ? "" : Dt.isDate(c) ? c.toISOString() : Dt.isArrayBuffer(c) || Dt.isTypedArray(c) ? typeof Blob == "function" ? new Blob([c]) : Buffer.from(c) : c;
  }
  function l(c, d) {
    if (Dt.isPlainObject(c) || Dt.isArray(c)) {
      if (r.indexOf(c) !== -1)
        throw Error("Circular reference detected in " + d);
      r.push(c), Dt.forEach(c, function(w, V) {
        if (!Dt.isUndefined(w)) {
          var U = d ? d + "." + V : V, R;
          if (w && !d && typeof w == "object") {
            if (Dt.endsWith(V, "{}"))
              w = JSON.stringify(w);
            else if (Dt.endsWith(V, "[]") && (R = Dt.toArray(w))) {
              R.forEach(function(y) {
                !Dt.isUndefined(y) && o.append(U, a(y));
              });
              return;
            }
          }
          l(w, U);
        }
      }), r.pop();
    } else
      o.append(d, a(c));
  }
  return l(t), o;
}
var Fm = UN, El, $f;
function RN() {
  if ($f)
    return El;
  $f = 1;
  var t = ro;
  return El = function(r, a, l) {
    var c = l.config.validateStatus;
    !l.status || !c || c(l.status) ? r(l) : a(new t(
      "Request failed with status code " + l.status,
      [t.ERR_BAD_REQUEST, t.ERR_BAD_RESPONSE][Math.floor(l.status / 100) - 4],
      l.config,
      l.request,
      l
    ));
  }, El;
}
var Sl, qf;
function NN() {
  if (qf)
    return Sl;
  qf = 1;
  var t = Oe;
  return Sl = t.isStandardBrowserEnv() ? function() {
    return {
      write: function(a, l, c, d, h, w) {
        var V = [];
        V.push(a + "=" + encodeURIComponent(l)), t.isNumber(c) && V.push("expires=" + new Date(c).toGMTString()), t.isString(d) && V.push("path=" + d), t.isString(h) && V.push("domain=" + h), w === !0 && V.push("secure"), document.cookie = V.join("; ");
      },
      read: function(a) {
        var l = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
        return l ? decodeURIComponent(l[3]) : null;
      },
      remove: function(a) {
        this.write(a, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), Sl;
}
var yN = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, kN = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, MN = yN, ZN = kN, Wm = function(o, r) {
  return o && !MN(r) ? ZN(o, r) : r;
}, Al, Kf;
function bN() {
  if (Kf)
    return Al;
  Kf = 1;
  var t = Oe, o = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return Al = function(a) {
    var l = {}, c, d, h;
    return a && t.forEach(a.split(`
`), function(V) {
      if (h = V.indexOf(":"), c = t.trim(V.substr(0, h)).toLowerCase(), d = t.trim(V.substr(h + 1)), c) {
        if (l[c] && o.indexOf(c) >= 0)
          return;
        c === "set-cookie" ? l[c] = (l[c] ? l[c] : []).concat([d]) : l[c] = l[c] ? l[c] + ", " + d : d;
      }
    }), l;
  }, Al;
}
var Fl, eh;
function JN() {
  if (eh)
    return Fl;
  eh = 1;
  var t = Oe;
  return Fl = t.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), a = document.createElement("a"), l;
    function c(d) {
      var h = d;
      return r && (a.setAttribute("href", h), h = a.href), a.setAttribute("href", h), {
        href: a.href,
        protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
        host: a.host,
        search: a.search ? a.search.replace(/^\?/, "") : "",
        hash: a.hash ? a.hash.replace(/^#/, "") : "",
        hostname: a.hostname,
        port: a.port,
        pathname: a.pathname.charAt(0) === "/" ? a.pathname : "/" + a.pathname
      };
    }
    return l = c(window.location.href), function(h) {
      var w = t.isString(h) ? c(h) : h;
      return w.protocol === l.protocol && w.host === l.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Fl;
}
var Wl, th;
function qa() {
  if (th)
    return Wl;
  th = 1;
  var t = ro, o = Oe;
  function r(a) {
    t.call(this, a == null ? "canceled" : a, t.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, t, {
    __CANCEL__: !0
  }), Wl = r, Wl;
}
var Cl, nh;
function EN() {
  return nh || (nh = 1, Cl = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Cl;
}
var xl, rh;
function oh() {
  if (rh)
    return xl;
  rh = 1;
  var t = Oe, o = RN(), r = NN(), a = bm, l = Wm, c = bN(), d = JN(), h = Am, w = ro, V = qa(), U = EN();
  return xl = function(y) {
    return new Promise(function(S, C) {
      var D = y.data, E = y.headers, B = y.responseType, x;
      function P() {
        y.cancelToken && y.cancelToken.unsubscribe(x), y.signal && y.signal.removeEventListener("abort", x);
      }
      t.isFormData(D) && t.isStandardBrowserEnv() && delete E["Content-Type"];
      var b = new XMLHttpRequest();
      if (y.auth) {
        var W = y.auth.username || "", A = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        E.Authorization = "Basic " + btoa(W + ":" + A);
      }
      var O = l(y.baseURL, y.url);
      b.open(y.method.toUpperCase(), a(O, y.params, y.paramsSerializer), !0), b.timeout = y.timeout;
      function he() {
        if (!!b) {
          var Te = "getAllResponseHeaders" in b ? c(b.getAllResponseHeaders()) : null, Re = !B || B === "text" || B === "json" ? b.responseText : b.response, Ze = {
            data: Re,
            status: b.status,
            statusText: b.statusText,
            headers: Te,
            config: y,
            request: b
          };
          o(function(xe) {
            S(xe), P();
          }, function(xe) {
            C(xe), P();
          }, Ze), b = null;
        }
      }
      if ("onloadend" in b ? b.onloadend = he : b.onreadystatechange = function() {
        !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(he);
      }, b.onabort = function() {
        !b || (C(new w("Request aborted", w.ECONNABORTED, y, b)), b = null);
      }, b.onerror = function() {
        C(new w("Network Error", w.ERR_NETWORK, y, b, b)), b = null;
      }, b.ontimeout = function() {
        var Re = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", Ze = y.transitional || h;
        y.timeoutErrorMessage && (Re = y.timeoutErrorMessage), C(new w(
          Re,
          Ze.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          y,
          b
        )), b = null;
      }, t.isStandardBrowserEnv()) {
        var se = (y.withCredentials || d(O)) && y.xsrfCookieName ? r.read(y.xsrfCookieName) : void 0;
        se && (E[y.xsrfHeaderName] = se);
      }
      "setRequestHeader" in b && t.forEach(E, function(Re, Ze) {
        typeof D > "u" && Ze.toLowerCase() === "content-type" ? delete E[Ze] : b.setRequestHeader(Ze, Re);
      }), t.isUndefined(y.withCredentials) || (b.withCredentials = !!y.withCredentials), B && B !== "json" && (b.responseType = y.responseType), typeof y.onDownloadProgress == "function" && b.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && b.upload && b.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (x = function(Te) {
        !b || (C(!Te || Te && Te.type ? new V() : Te), b.abort(), b = null);
      }, y.cancelToken && y.cancelToken.subscribe(x), y.signal && (y.signal.aborted ? x() : y.signal.addEventListener("abort", x))), D || (D = null);
      var Ve = U(O);
      if (Ve && ["http", "https", "file"].indexOf(Ve) === -1) {
        C(new w("Unsupported protocol " + Ve + ":", w.ERR_BAD_REQUEST, y));
        return;
      }
      b.send(D);
    });
  }, xl;
}
var Bl, ih;
function SN() {
  return ih || (ih = 1, Bl = null), Bl;
}
var Fe = Oe, ah = gN, sh = ro, AN = Am, FN = Fm, WN = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function lh(t, o) {
  !Fe.isUndefined(t) && Fe.isUndefined(t["Content-Type"]) && (t["Content-Type"] = o);
}
function CN() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = oh()), t;
}
function xN(t, o, r) {
  if (Fe.isString(t))
    try {
      return (o || JSON.parse)(t), Fe.trim(t);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (r || JSON.stringify)(t);
}
var Ka = {
  transitional: AN,
  adapter: CN(),
  transformRequest: [function(o, r) {
    if (ah(r, "Accept"), ah(r, "Content-Type"), Fe.isFormData(o) || Fe.isArrayBuffer(o) || Fe.isBuffer(o) || Fe.isStream(o) || Fe.isFile(o) || Fe.isBlob(o))
      return o;
    if (Fe.isArrayBufferView(o))
      return o.buffer;
    if (Fe.isURLSearchParams(o))
      return lh(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var a = Fe.isObject(o), l = r && r["Content-Type"], c;
    if ((c = Fe.isFileList(o)) || a && l === "multipart/form-data") {
      var d = this.env && this.env.FormData;
      return FN(c ? { "files[]": o } : o, d && new d());
    } else if (a || l === "application/json")
      return lh(r, "application/json"), xN(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || Ka.transitional, a = r && r.silentJSONParsing, l = r && r.forcedJSONParsing, c = !a && this.responseType === "json";
    if (c || l && Fe.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (d) {
        if (c)
          throw d.name === "SyntaxError" ? sh.from(d, sh.ERR_BAD_RESPONSE, this, null, this.response) : d;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: SN()
  },
  validateStatus: function(o) {
    return o >= 200 && o < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
Fe.forEach(["delete", "get", "head"], function(o) {
  Ka.headers[o] = {};
});
Fe.forEach(["post", "put", "patch"], function(o) {
  Ka.headers[o] = Fe.merge(WN);
});
var Pc = Ka, BN = Oe, IN = Pc, DN = function(o, r, a) {
  var l = this || IN;
  return BN.forEach(a, function(d) {
    o = d.call(l, o, r);
  }), o;
}, Il, ch;
function Cm() {
  return ch || (ch = 1, Il = function(o) {
    return !!(o && o.__CANCEL__);
  }), Il;
}
var uh = Oe, Dl = DN, _N = Cm(), ON = Pc, QN = qa();
function _l(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new QN();
}
var zN = function(o) {
  _l(o), o.headers = o.headers || {}, o.data = Dl.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = uh.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), uh.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(l) {
      delete o.headers[l];
    }
  );
  var r = o.adapter || ON.adapter;
  return r(o).then(function(l) {
    return _l(o), l.data = Dl.call(
      o,
      l.data,
      l.headers,
      o.transformResponse
    ), l;
  }, function(l) {
    return _N(l) || (_l(o), l && l.response && (l.response.data = Dl.call(
      o,
      l.response.data,
      l.response.headers,
      o.transformResponse
    ))), Promise.reject(l);
  });
}, pt = Oe, xm = function(o, r) {
  r = r || {};
  var a = {};
  function l(U, R) {
    return pt.isPlainObject(U) && pt.isPlainObject(R) ? pt.merge(U, R) : pt.isPlainObject(R) ? pt.merge({}, R) : pt.isArray(R) ? R.slice() : R;
  }
  function c(U) {
    if (pt.isUndefined(r[U])) {
      if (!pt.isUndefined(o[U]))
        return l(void 0, o[U]);
    } else
      return l(o[U], r[U]);
  }
  function d(U) {
    if (!pt.isUndefined(r[U]))
      return l(void 0, r[U]);
  }
  function h(U) {
    if (pt.isUndefined(r[U])) {
      if (!pt.isUndefined(o[U]))
        return l(void 0, o[U]);
    } else
      return l(void 0, r[U]);
  }
  function w(U) {
    if (U in r)
      return l(o[U], r[U]);
    if (U in o)
      return l(void 0, o[U]);
  }
  var V = {
    url: d,
    method: d,
    data: d,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: w
  };
  return pt.forEach(Object.keys(o).concat(Object.keys(r)), function(R) {
    var y = V[R] || c, F = y(R);
    pt.isUndefined(F) && y !== w || (a[R] = F);
  }), a;
}, Ol, dh;
function Bm() {
  return dh || (dh = 1, Ol = {
    version: "0.27.2"
  }), Ol;
}
var GN = Bm().version, Bn = ro, Hc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, o) {
  Hc[t] = function(a) {
    return typeof a === t || "a" + (o < 1 ? "n " : " ") + t;
  };
});
var fh = {};
Hc.transitional = function(o, r, a) {
  function l(c, d) {
    return "[Axios v" + GN + "] Transitional option '" + c + "'" + d + (a ? ". " + a : "");
  }
  return function(c, d, h) {
    if (o === !1)
      throw new Bn(
        l(d, " has been removed" + (r ? " in " + r : "")),
        Bn.ERR_DEPRECATED
      );
    return r && !fh[d] && (fh[d] = !0, console.warn(
      l(
        d,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(c, d, h) : !0;
  };
};
function YN(t, o, r) {
  if (typeof t != "object")
    throw new Bn("options must be an object", Bn.ERR_BAD_OPTION_VALUE);
  for (var a = Object.keys(t), l = a.length; l-- > 0; ) {
    var c = a[l], d = o[c];
    if (d) {
      var h = t[c], w = h === void 0 || d(h, c, t);
      if (w !== !0)
        throw new Bn("option " + c + " must be " + w, Bn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Bn("Unknown option " + c, Bn.ERR_BAD_OPTION);
  }
}
var PN = {
  assertOptions: YN,
  validators: Hc
}, Im = Oe, HN = bm, hh = VN, ph = zN, es = xm, jN = Wm, Dm = PN, Ar = Dm.validators;
function Kr(t) {
  this.defaults = t, this.interceptors = {
    request: new hh(),
    response: new hh()
  };
}
Kr.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = es(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var a = r.transitional;
  a !== void 0 && Dm.assertOptions(a, {
    silentJSONParsing: Ar.transitional(Ar.boolean),
    forcedJSONParsing: Ar.transitional(Ar.boolean),
    clarifyTimeoutError: Ar.transitional(Ar.boolean)
  }, !1);
  var l = [], c = !0;
  this.interceptors.request.forEach(function(F) {
    typeof F.runWhen == "function" && F.runWhen(r) === !1 || (c = c && F.synchronous, l.unshift(F.fulfilled, F.rejected));
  });
  var d = [];
  this.interceptors.response.forEach(function(F) {
    d.push(F.fulfilled, F.rejected);
  });
  var h;
  if (!c) {
    var w = [ph, void 0];
    for (Array.prototype.unshift.apply(w, l), w = w.concat(d), h = Promise.resolve(r); w.length; )
      h = h.then(w.shift(), w.shift());
    return h;
  }
  for (var V = r; l.length; ) {
    var U = l.shift(), R = l.shift();
    try {
      V = U(V);
    } catch (y) {
      R(y);
      break;
    }
  }
  try {
    h = ph(V);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; d.length; )
    h = h.then(d.shift(), d.shift());
  return h;
};
Kr.prototype.getUri = function(o) {
  o = es(this.defaults, o);
  var r = jN(o.baseURL, o.url);
  return HN(r, o.params, o.paramsSerializer);
};
Im.forEach(["delete", "get", "head", "options"], function(o) {
  Kr.prototype[o] = function(r, a) {
    return this.request(es(a || {}, {
      method: o,
      url: r,
      data: (a || {}).data
    }));
  };
});
Im.forEach(["post", "put", "patch"], function(o) {
  function r(a) {
    return function(c, d, h) {
      return this.request(es(h || {}, {
        method: o,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: d
      }));
    };
  }
  Kr.prototype[o] = r(), Kr.prototype[o + "Form"] = r(!0);
});
var XN = Kr, Ql, mh;
function LN() {
  if (mh)
    return Ql;
  mh = 1;
  var t = qa();
  function o(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var a;
    this.promise = new Promise(function(d) {
      a = d;
    });
    var l = this;
    this.promise.then(function(c) {
      if (!!l._listeners) {
        var d, h = l._listeners.length;
        for (d = 0; d < h; d++)
          l._listeners[d](c);
        l._listeners = null;
      }
    }), this.promise.then = function(c) {
      var d, h = new Promise(function(w) {
        l.subscribe(w), d = w;
      }).then(c);
      return h.cancel = function() {
        l.unsubscribe(d);
      }, h;
    }, r(function(d) {
      l.reason || (l.reason = new t(d), a(l.reason));
    });
  }
  return o.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, o.prototype.subscribe = function(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : this._listeners = [a];
  }, o.prototype.unsubscribe = function(a) {
    if (!!this._listeners) {
      var l = this._listeners.indexOf(a);
      l !== -1 && this._listeners.splice(l, 1);
    }
  }, o.source = function() {
    var a, l = new o(function(d) {
      a = d;
    });
    return {
      token: l,
      cancel: a
    };
  }, Ql = o, Ql;
}
var zl, wh;
function $N() {
  return wh || (wh = 1, zl = function(o) {
    return function(a) {
      return o.apply(null, a);
    };
  }), zl;
}
var Gl, vh;
function qN() {
  if (vh)
    return Gl;
  vh = 1;
  var t = Oe;
  return Gl = function(r) {
    return t.isObject(r) && r.isAxiosError === !0;
  }, Gl;
}
var Vh = Oe, KN = km, Fa = XN, ey = xm, ty = Pc;
function _m(t) {
  var o = new Fa(t), r = KN(Fa.prototype.request, o);
  return Vh.extend(r, Fa.prototype, o), Vh.extend(r, o), r.create = function(l) {
    return _m(ey(t, l));
  }, r;
}
var st = _m(ty);
st.Axios = Fa;
st.CanceledError = qa();
st.CancelToken = LN();
st.isCancel = Cm();
st.VERSION = Bm().version;
st.toFormData = Fm;
st.AxiosError = ro;
st.Cancel = st.CanceledError;
st.all = function(o) {
  return Promise.all(o);
};
st.spread = $N();
st.isAxiosError = qN();
_c.exports = st;
_c.exports.default = st;
(function(t) {
  t.exports = _c.exports;
})(ym);
const Om = /* @__PURE__ */ XR(ym.exports), Tn = Om.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), gn = Om.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var we = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(t, o) {
  (function() {
    var r, a = "4.17.21", l = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", h = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", V = 500, U = "__lodash_placeholder__", R = 1, y = 2, F = 4, S = 1, C = 2, D = 1, E = 2, B = 4, x = 8, P = 16, b = 32, W = 64, A = 128, O = 256, he = 512, se = 30, Ve = "...", Te = 800, Re = 16, Ze = 1, ue = 2, xe = 3, Be = 1 / 0, Xe = 9007199254740991, ao = 17976931348623157e292, Ti = 0 / 0, Yt = 4294967295, Xw = Yt - 1, Lw = Yt >>> 1, $w = [
      ["ary", A],
      ["bind", D],
      ["bindKey", E],
      ["curry", x],
      ["curryRight", P],
      ["flip", he],
      ["partial", b],
      ["partialRight", W],
      ["rearg", O]
    ], mr = "[object Arguments]", gi = "[object Array]", qw = "[object AsyncFunction]", so = "[object Boolean]", lo = "[object Date]", Kw = "[object DOMException]", Ui = "[object Error]", Ri = "[object Function]", Vu = "[object GeneratorFunction]", Ft = "[object Map]", co = "[object Number]", e1 = "[object Null]", Kt = "[object Object]", Tu = "[object Promise]", t1 = "[object Proxy]", uo = "[object RegExp]", Wt = "[object Set]", fo = "[object String]", Ni = "[object Symbol]", n1 = "[object Undefined]", ho = "[object WeakMap]", r1 = "[object WeakSet]", po = "[object ArrayBuffer]", wr = "[object DataView]", cs = "[object Float32Array]", us = "[object Float64Array]", ds = "[object Int8Array]", fs = "[object Int16Array]", hs = "[object Int32Array]", ps = "[object Uint8Array]", ms = "[object Uint8ClampedArray]", ws = "[object Uint16Array]", vs = "[object Uint32Array]", o1 = /\b__p \+= '';/g, i1 = /\b(__p \+=) '' \+/g, a1 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, gu = /&(?:amp|lt|gt|quot|#39);/g, Uu = /[&<>"']/g, s1 = RegExp(gu.source), l1 = RegExp(Uu.source), c1 = /<%-([\s\S]+?)%>/g, u1 = /<%([\s\S]+?)%>/g, Ru = /<%=([\s\S]+?)%>/g, d1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, f1 = /^\w*$/, h1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vs = /[\\^$.*+?()[\]{}|]/g, p1 = RegExp(Vs.source), Ts = /^\s+/, m1 = /\s/, w1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, v1 = /\{\n\/\* \[wrapped with (.+)\] \*/, V1 = /,? & /, T1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, g1 = /[()=,{}\[\]\/\s]/, U1 = /\\(\\)?/g, R1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Nu = /\w*$/, N1 = /^[-+]0x[0-9a-f]+$/i, y1 = /^0b[01]+$/i, k1 = /^\[object .+?Constructor\]$/, M1 = /^0o[0-7]+$/i, Z1 = /^(?:0|[1-9]\d*)$/, b1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, yi = /($^)/, J1 = /['\n\r\u2028\u2029\\]/g, ki = "\\ud800-\\udfff", E1 = "\\u0300-\\u036f", S1 = "\\ufe20-\\ufe2f", A1 = "\\u20d0-\\u20ff", yu = E1 + S1 + A1, ku = "\\u2700-\\u27bf", Mu = "a-z\\xdf-\\xf6\\xf8-\\xff", F1 = "\\xac\\xb1\\xd7\\xf7", W1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", C1 = "\\u2000-\\u206f", x1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Zu = "A-Z\\xc0-\\xd6\\xd8-\\xde", bu = "\\ufe0e\\ufe0f", Ju = F1 + W1 + C1 + x1, gs = "['\u2019]", B1 = "[" + ki + "]", Eu = "[" + Ju + "]", Mi = "[" + yu + "]", Su = "\\d+", I1 = "[" + ku + "]", Au = "[" + Mu + "]", Fu = "[^" + ki + Ju + Su + ku + Mu + Zu + "]", Us = "\\ud83c[\\udffb-\\udfff]", D1 = "(?:" + Mi + "|" + Us + ")", Wu = "[^" + ki + "]", Rs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ns = "[\\ud800-\\udbff][\\udc00-\\udfff]", vr = "[" + Zu + "]", Cu = "\\u200d", xu = "(?:" + Au + "|" + Fu + ")", _1 = "(?:" + vr + "|" + Fu + ")", Bu = "(?:" + gs + "(?:d|ll|m|re|s|t|ve))?", Iu = "(?:" + gs + "(?:D|LL|M|RE|S|T|VE))?", Du = D1 + "?", _u = "[" + bu + "]?", O1 = "(?:" + Cu + "(?:" + [Wu, Rs, Ns].join("|") + ")" + _u + Du + ")*", Q1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", z1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ou = _u + Du + O1, G1 = "(?:" + [I1, Rs, Ns].join("|") + ")" + Ou, Y1 = "(?:" + [Wu + Mi + "?", Mi, Rs, Ns, B1].join("|") + ")", P1 = RegExp(gs, "g"), H1 = RegExp(Mi, "g"), ys = RegExp(Us + "(?=" + Us + ")|" + Y1 + Ou, "g"), j1 = RegExp([
      vr + "?" + Au + "+" + Bu + "(?=" + [Eu, vr, "$"].join("|") + ")",
      _1 + "+" + Iu + "(?=" + [Eu, vr + xu, "$"].join("|") + ")",
      vr + "?" + xu + "+" + Bu,
      vr + "+" + Iu,
      z1,
      Q1,
      Su,
      G1
    ].join("|"), "g"), X1 = RegExp("[" + Cu + ki + yu + bu + "]"), L1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, $1 = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], q1 = -1, pe = {};
    pe[cs] = pe[us] = pe[ds] = pe[fs] = pe[hs] = pe[ps] = pe[ms] = pe[ws] = pe[vs] = !0, pe[mr] = pe[gi] = pe[po] = pe[so] = pe[wr] = pe[lo] = pe[Ui] = pe[Ri] = pe[Ft] = pe[co] = pe[Kt] = pe[uo] = pe[Wt] = pe[fo] = pe[ho] = !1;
    var fe = {};
    fe[mr] = fe[gi] = fe[po] = fe[wr] = fe[so] = fe[lo] = fe[cs] = fe[us] = fe[ds] = fe[fs] = fe[hs] = fe[Ft] = fe[co] = fe[Kt] = fe[uo] = fe[Wt] = fe[fo] = fe[Ni] = fe[ps] = fe[ms] = fe[ws] = fe[vs] = !0, fe[Ui] = fe[Ri] = fe[ho] = !1;
    var K1 = {
      \u00C0: "A",
      \u00C1: "A",
      \u00C2: "A",
      \u00C3: "A",
      \u00C4: "A",
      \u00C5: "A",
      \u00E0: "a",
      \u00E1: "a",
      \u00E2: "a",
      \u00E3: "a",
      \u00E4: "a",
      \u00E5: "a",
      \u00C7: "C",
      \u00E7: "c",
      \u00D0: "D",
      \u00F0: "d",
      \u00C8: "E",
      \u00C9: "E",
      \u00CA: "E",
      \u00CB: "E",
      \u00E8: "e",
      \u00E9: "e",
      \u00EA: "e",
      \u00EB: "e",
      \u00CC: "I",
      \u00CD: "I",
      \u00CE: "I",
      \u00CF: "I",
      \u00EC: "i",
      \u00ED: "i",
      \u00EE: "i",
      \u00EF: "i",
      \u00D1: "N",
      \u00F1: "n",
      \u00D2: "O",
      \u00D3: "O",
      \u00D4: "O",
      \u00D5: "O",
      \u00D6: "O",
      \u00D8: "O",
      \u00F2: "o",
      \u00F3: "o",
      \u00F4: "o",
      \u00F5: "o",
      \u00F6: "o",
      \u00F8: "o",
      \u00D9: "U",
      \u00DA: "U",
      \u00DB: "U",
      \u00DC: "U",
      \u00F9: "u",
      \u00FA: "u",
      \u00FB: "u",
      \u00FC: "u",
      \u00DD: "Y",
      \u00FD: "y",
      \u00FF: "y",
      \u00C6: "Ae",
      \u00E6: "ae",
      \u00DE: "Th",
      \u00FE: "th",
      \u00DF: "ss",
      \u0100: "A",
      \u0102: "A",
      \u0104: "A",
      \u0101: "a",
      \u0103: "a",
      \u0105: "a",
      \u0106: "C",
      \u0108: "C",
      \u010A: "C",
      \u010C: "C",
      \u0107: "c",
      \u0109: "c",
      \u010B: "c",
      \u010D: "c",
      \u010E: "D",
      \u0110: "D",
      \u010F: "d",
      \u0111: "d",
      \u0112: "E",
      \u0114: "E",
      \u0116: "E",
      \u0118: "E",
      \u011A: "E",
      \u0113: "e",
      \u0115: "e",
      \u0117: "e",
      \u0119: "e",
      \u011B: "e",
      \u011C: "G",
      \u011E: "G",
      \u0120: "G",
      \u0122: "G",
      \u011D: "g",
      \u011F: "g",
      \u0121: "g",
      \u0123: "g",
      \u0124: "H",
      \u0126: "H",
      \u0125: "h",
      \u0127: "h",
      \u0128: "I",
      \u012A: "I",
      \u012C: "I",
      \u012E: "I",
      \u0130: "I",
      \u0129: "i",
      \u012B: "i",
      \u012D: "i",
      \u012F: "i",
      \u0131: "i",
      \u0134: "J",
      \u0135: "j",
      \u0136: "K",
      \u0137: "k",
      \u0138: "k",
      \u0139: "L",
      \u013B: "L",
      \u013D: "L",
      \u013F: "L",
      \u0141: "L",
      \u013A: "l",
      \u013C: "l",
      \u013E: "l",
      \u0140: "l",
      \u0142: "l",
      \u0143: "N",
      \u0145: "N",
      \u0147: "N",
      \u014A: "N",
      \u0144: "n",
      \u0146: "n",
      \u0148: "n",
      \u014B: "n",
      \u014C: "O",
      \u014E: "O",
      \u0150: "O",
      \u014D: "o",
      \u014F: "o",
      \u0151: "o",
      \u0154: "R",
      \u0156: "R",
      \u0158: "R",
      \u0155: "r",
      \u0157: "r",
      \u0159: "r",
      \u015A: "S",
      \u015C: "S",
      \u015E: "S",
      \u0160: "S",
      \u015B: "s",
      \u015D: "s",
      \u015F: "s",
      \u0161: "s",
      \u0162: "T",
      \u0164: "T",
      \u0166: "T",
      \u0163: "t",
      \u0165: "t",
      \u0167: "t",
      \u0168: "U",
      \u016A: "U",
      \u016C: "U",
      \u016E: "U",
      \u0170: "U",
      \u0172: "U",
      \u0169: "u",
      \u016B: "u",
      \u016D: "u",
      \u016F: "u",
      \u0171: "u",
      \u0173: "u",
      \u0174: "W",
      \u0175: "w",
      \u0176: "Y",
      \u0177: "y",
      \u0178: "Y",
      \u0179: "Z",
      \u017B: "Z",
      \u017D: "Z",
      \u017A: "z",
      \u017C: "z",
      \u017E: "z",
      \u0132: "IJ",
      \u0133: "ij",
      \u0152: "Oe",
      \u0153: "oe",
      \u0149: "'n",
      \u017F: "s"
    }, ev = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, tv = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, nv = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, rv = parseFloat, ov = parseInt, Qu = typeof Eo == "object" && Eo && Eo.Object === Object && Eo, iv = typeof self == "object" && self && self.Object === Object && self, Ie = Qu || iv || Function("return this")(), ks = o && !o.nodeType && o, Qn = ks && !0 && t && !t.nodeType && t, zu = Qn && Qn.exports === ks, Ms = zu && Qu.process, gt = function() {
      try {
        var T = Qn && Qn.require && Qn.require("util").types;
        return T || Ms && Ms.binding && Ms.binding("util");
      } catch {
      }
    }(), Gu = gt && gt.isArrayBuffer, Yu = gt && gt.isDate, Pu = gt && gt.isMap, Hu = gt && gt.isRegExp, ju = gt && gt.isSet, Xu = gt && gt.isTypedArray;
    function lt(T, k, N) {
      switch (N.length) {
        case 0:
          return T.call(k);
        case 1:
          return T.call(k, N[0]);
        case 2:
          return T.call(k, N[0], N[1]);
        case 3:
          return T.call(k, N[0], N[1], N[2]);
      }
      return T.apply(k, N);
    }
    function av(T, k, N, _) {
      for (var H = -1, re = T == null ? 0 : T.length; ++H < re; ) {
        var Je = T[H];
        k(_, Je, N(Je), T);
      }
      return _;
    }
    function Ut(T, k) {
      for (var N = -1, _ = T == null ? 0 : T.length; ++N < _ && k(T[N], N, T) !== !1; )
        ;
      return T;
    }
    function sv(T, k) {
      for (var N = T == null ? 0 : T.length; N-- && k(T[N], N, T) !== !1; )
        ;
      return T;
    }
    function Lu(T, k) {
      for (var N = -1, _ = T == null ? 0 : T.length; ++N < _; )
        if (!k(T[N], N, T))
          return !1;
      return !0;
    }
    function Un(T, k) {
      for (var N = -1, _ = T == null ? 0 : T.length, H = 0, re = []; ++N < _; ) {
        var Je = T[N];
        k(Je, N, T) && (re[H++] = Je);
      }
      return re;
    }
    function Zi(T, k) {
      var N = T == null ? 0 : T.length;
      return !!N && Vr(T, k, 0) > -1;
    }
    function Zs(T, k, N) {
      for (var _ = -1, H = T == null ? 0 : T.length; ++_ < H; )
        if (N(k, T[_]))
          return !0;
      return !1;
    }
    function me(T, k) {
      for (var N = -1, _ = T == null ? 0 : T.length, H = Array(_); ++N < _; )
        H[N] = k(T[N], N, T);
      return H;
    }
    function Rn(T, k) {
      for (var N = -1, _ = k.length, H = T.length; ++N < _; )
        T[H + N] = k[N];
      return T;
    }
    function bs(T, k, N, _) {
      var H = -1, re = T == null ? 0 : T.length;
      for (_ && re && (N = T[++H]); ++H < re; )
        N = k(N, T[H], H, T);
      return N;
    }
    function lv(T, k, N, _) {
      var H = T == null ? 0 : T.length;
      for (_ && H && (N = T[--H]); H--; )
        N = k(N, T[H], H, T);
      return N;
    }
    function Js(T, k) {
      for (var N = -1, _ = T == null ? 0 : T.length; ++N < _; )
        if (k(T[N], N, T))
          return !0;
      return !1;
    }
    var cv = Es("length");
    function uv(T) {
      return T.split("");
    }
    function dv(T) {
      return T.match(T1) || [];
    }
    function $u(T, k, N) {
      var _;
      return N(T, function(H, re, Je) {
        if (k(H, re, Je))
          return _ = re, !1;
      }), _;
    }
    function bi(T, k, N, _) {
      for (var H = T.length, re = N + (_ ? 1 : -1); _ ? re-- : ++re < H; )
        if (k(T[re], re, T))
          return re;
      return -1;
    }
    function Vr(T, k, N) {
      return k === k ? Nv(T, k, N) : bi(T, qu, N);
    }
    function fv(T, k, N, _) {
      for (var H = N - 1, re = T.length; ++H < re; )
        if (_(T[H], k))
          return H;
      return -1;
    }
    function qu(T) {
      return T !== T;
    }
    function Ku(T, k) {
      var N = T == null ? 0 : T.length;
      return N ? As(T, k) / N : Ti;
    }
    function Es(T) {
      return function(k) {
        return k == null ? r : k[T];
      };
    }
    function Ss(T) {
      return function(k) {
        return T == null ? r : T[k];
      };
    }
    function ed(T, k, N, _, H) {
      return H(T, function(re, Je, de) {
        N = _ ? (_ = !1, re) : k(N, re, Je, de);
      }), N;
    }
    function hv(T, k) {
      var N = T.length;
      for (T.sort(k); N--; )
        T[N] = T[N].value;
      return T;
    }
    function As(T, k) {
      for (var N, _ = -1, H = T.length; ++_ < H; ) {
        var re = k(T[_]);
        re !== r && (N = N === r ? re : N + re);
      }
      return N;
    }
    function Fs(T, k) {
      for (var N = -1, _ = Array(T); ++N < T; )
        _[N] = k(N);
      return _;
    }
    function pv(T, k) {
      return me(k, function(N) {
        return [N, T[N]];
      });
    }
    function td(T) {
      return T && T.slice(0, id(T) + 1).replace(Ts, "");
    }
    function ct(T) {
      return function(k) {
        return T(k);
      };
    }
    function Ws(T, k) {
      return me(k, function(N) {
        return T[N];
      });
    }
    function mo(T, k) {
      return T.has(k);
    }
    function nd(T, k) {
      for (var N = -1, _ = T.length; ++N < _ && Vr(k, T[N], 0) > -1; )
        ;
      return N;
    }
    function rd(T, k) {
      for (var N = T.length; N-- && Vr(k, T[N], 0) > -1; )
        ;
      return N;
    }
    function mv(T, k) {
      for (var N = T.length, _ = 0; N--; )
        T[N] === k && ++_;
      return _;
    }
    var wv = Ss(K1), vv = Ss(ev);
    function Vv(T) {
      return "\\" + nv[T];
    }
    function Tv(T, k) {
      return T == null ? r : T[k];
    }
    function Tr(T) {
      return X1.test(T);
    }
    function gv(T) {
      return L1.test(T);
    }
    function Uv(T) {
      for (var k, N = []; !(k = T.next()).done; )
        N.push(k.value);
      return N;
    }
    function Cs(T) {
      var k = -1, N = Array(T.size);
      return T.forEach(function(_, H) {
        N[++k] = [H, _];
      }), N;
    }
    function od(T, k) {
      return function(N) {
        return T(k(N));
      };
    }
    function Nn(T, k) {
      for (var N = -1, _ = T.length, H = 0, re = []; ++N < _; ) {
        var Je = T[N];
        (Je === k || Je === U) && (T[N] = U, re[H++] = N);
      }
      return re;
    }
    function Ji(T) {
      var k = -1, N = Array(T.size);
      return T.forEach(function(_) {
        N[++k] = _;
      }), N;
    }
    function Rv(T) {
      var k = -1, N = Array(T.size);
      return T.forEach(function(_) {
        N[++k] = [_, _];
      }), N;
    }
    function Nv(T, k, N) {
      for (var _ = N - 1, H = T.length; ++_ < H; )
        if (T[_] === k)
          return _;
      return -1;
    }
    function yv(T, k, N) {
      for (var _ = N + 1; _--; )
        if (T[_] === k)
          return _;
      return _;
    }
    function gr(T) {
      return Tr(T) ? Mv(T) : cv(T);
    }
    function Ct(T) {
      return Tr(T) ? Zv(T) : uv(T);
    }
    function id(T) {
      for (var k = T.length; k-- && m1.test(T.charAt(k)); )
        ;
      return k;
    }
    var kv = Ss(tv);
    function Mv(T) {
      for (var k = ys.lastIndex = 0; ys.test(T); )
        ++k;
      return k;
    }
    function Zv(T) {
      return T.match(ys) || [];
    }
    function bv(T) {
      return T.match(j1) || [];
    }
    var Jv = function T(k) {
      k = k == null ? Ie : Ur.defaults(Ie.Object(), k, Ur.pick(Ie, $1));
      var N = k.Array, _ = k.Date, H = k.Error, re = k.Function, Je = k.Math, de = k.Object, xs = k.RegExp, Ev = k.String, Rt = k.TypeError, Ei = N.prototype, Sv = re.prototype, Rr = de.prototype, Si = k["__core-js_shared__"], Ai = Sv.toString, le = Rr.hasOwnProperty, Av = 0, ad = function() {
        var e = /[^.]+$/.exec(Si && Si.keys && Si.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Fi = Rr.toString, Fv = Ai.call(de), Wv = Ie._, Cv = xs(
        "^" + Ai.call(le).replace(Vs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Wi = zu ? k.Buffer : r, yn = k.Symbol, Ci = k.Uint8Array, sd = Wi ? Wi.allocUnsafe : r, xi = od(de.getPrototypeOf, de), ld = de.create, cd = Rr.propertyIsEnumerable, Bi = Ei.splice, ud = yn ? yn.isConcatSpreadable : r, wo = yn ? yn.iterator : r, zn = yn ? yn.toStringTag : r, Ii = function() {
        try {
          var e = jn(de, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), xv = k.clearTimeout !== Ie.clearTimeout && k.clearTimeout, Bv = _ && _.now !== Ie.Date.now && _.now, Iv = k.setTimeout !== Ie.setTimeout && k.setTimeout, Di = Je.ceil, _i = Je.floor, Bs = de.getOwnPropertySymbols, Dv = Wi ? Wi.isBuffer : r, dd = k.isFinite, _v = Ei.join, Ov = od(de.keys, de), Ee = Je.max, ze = Je.min, Qv = _.now, zv = k.parseInt, fd = Je.random, Gv = Ei.reverse, Is = jn(k, "DataView"), vo = jn(k, "Map"), Ds = jn(k, "Promise"), Nr = jn(k, "Set"), Vo = jn(k, "WeakMap"), To = jn(de, "create"), Oi = Vo && new Vo(), yr = {}, Yv = Xn(Is), Pv = Xn(vo), Hv = Xn(Ds), jv = Xn(Nr), Xv = Xn(Vo), Qi = yn ? yn.prototype : r, go = Qi ? Qi.valueOf : r, hd = Qi ? Qi.toString : r;
      function f(e) {
        if (ge(e) && !j(e) && !(e instanceof te)) {
          if (e instanceof Nt)
            return e;
          if (le.call(e, "__wrapped__"))
            return mf(e);
        }
        return new Nt(e);
      }
      var kr = function() {
        function e() {
        }
        return function(n) {
          if (!ve(n))
            return {};
          if (ld)
            return ld(n);
          e.prototype = n;
          var i = new e();
          return e.prototype = r, i;
        };
      }();
      function zi() {
      }
      function Nt(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      f.templateSettings = {
        escape: c1,
        evaluate: u1,
        interpolate: Ru,
        variable: "",
        imports: {
          _: f
        }
      }, f.prototype = zi.prototype, f.prototype.constructor = f, Nt.prototype = kr(zi.prototype), Nt.prototype.constructor = Nt;
      function te(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Yt, this.__views__ = [];
      }
      function Lv() {
        var e = new te(this.__wrapped__);
        return e.__actions__ = et(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = et(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = et(this.__views__), e;
      }
      function $v() {
        if (this.__filtered__) {
          var e = new te(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function qv() {
        var e = this.__wrapped__.value(), n = this.__dir__, i = j(e), s = n < 0, u = i ? e.length : 0, p = u0(0, u, this.__views__), m = p.start, v = p.end, g = v - m, M = s ? v : m - 1, Z = this.__iteratees__, J = Z.length, I = 0, Q = ze(g, this.__takeCount__);
        if (!i || !s && u == g && Q == g)
          return Bd(e, this.__actions__);
        var G = [];
        e:
          for (; g-- && I < Q; ) {
            M += n;
            for (var L = -1, Y = e[M]; ++L < J; ) {
              var ee = Z[L], ne = ee.iteratee, ft = ee.type, qe = ne(Y);
              if (ft == ue)
                Y = qe;
              else if (!qe) {
                if (ft == Ze)
                  continue e;
                break e;
              }
            }
            G[I++] = Y;
          }
        return G;
      }
      te.prototype = kr(zi.prototype), te.prototype.constructor = te;
      function Gn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function Kv() {
        this.__data__ = To ? To(null) : {}, this.size = 0;
      }
      function eV(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function tV(e) {
        var n = this.__data__;
        if (To) {
          var i = n[e];
          return i === w ? r : i;
        }
        return le.call(n, e) ? n[e] : r;
      }
      function nV(e) {
        var n = this.__data__;
        return To ? n[e] !== r : le.call(n, e);
      }
      function rV(e, n) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = To && n === r ? w : n, this;
      }
      Gn.prototype.clear = Kv, Gn.prototype.delete = eV, Gn.prototype.get = tV, Gn.prototype.has = nV, Gn.prototype.set = rV;
      function en(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function oV() {
        this.__data__ = [], this.size = 0;
      }
      function iV(e) {
        var n = this.__data__, i = Gi(n, e);
        if (i < 0)
          return !1;
        var s = n.length - 1;
        return i == s ? n.pop() : Bi.call(n, i, 1), --this.size, !0;
      }
      function aV(e) {
        var n = this.__data__, i = Gi(n, e);
        return i < 0 ? r : n[i][1];
      }
      function sV(e) {
        return Gi(this.__data__, e) > -1;
      }
      function lV(e, n) {
        var i = this.__data__, s = Gi(i, e);
        return s < 0 ? (++this.size, i.push([e, n])) : i[s][1] = n, this;
      }
      en.prototype.clear = oV, en.prototype.delete = iV, en.prototype.get = aV, en.prototype.has = sV, en.prototype.set = lV;
      function tn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function cV() {
        this.size = 0, this.__data__ = {
          hash: new Gn(),
          map: new (vo || en)(),
          string: new Gn()
        };
      }
      function uV(e) {
        var n = na(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function dV(e) {
        return na(this, e).get(e);
      }
      function fV(e) {
        return na(this, e).has(e);
      }
      function hV(e, n) {
        var i = na(this, e), s = i.size;
        return i.set(e, n), this.size += i.size == s ? 0 : 1, this;
      }
      tn.prototype.clear = cV, tn.prototype.delete = uV, tn.prototype.get = dV, tn.prototype.has = fV, tn.prototype.set = hV;
      function Yn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new tn(); ++n < i; )
          this.add(e[n]);
      }
      function pV(e) {
        return this.__data__.set(e, w), this;
      }
      function mV(e) {
        return this.__data__.has(e);
      }
      Yn.prototype.add = Yn.prototype.push = pV, Yn.prototype.has = mV;
      function xt(e) {
        var n = this.__data__ = new en(e);
        this.size = n.size;
      }
      function wV() {
        this.__data__ = new en(), this.size = 0;
      }
      function vV(e) {
        var n = this.__data__, i = n.delete(e);
        return this.size = n.size, i;
      }
      function VV(e) {
        return this.__data__.get(e);
      }
      function TV(e) {
        return this.__data__.has(e);
      }
      function gV(e, n) {
        var i = this.__data__;
        if (i instanceof en) {
          var s = i.__data__;
          if (!vo || s.length < l - 1)
            return s.push([e, n]), this.size = ++i.size, this;
          i = this.__data__ = new tn(s);
        }
        return i.set(e, n), this.size = i.size, this;
      }
      xt.prototype.clear = wV, xt.prototype.delete = vV, xt.prototype.get = VV, xt.prototype.has = TV, xt.prototype.set = gV;
      function pd(e, n) {
        var i = j(e), s = !i && Ln(e), u = !i && !s && Jn(e), p = !i && !s && !u && Jr(e), m = i || s || u || p, v = m ? Fs(e.length, Ev) : [], g = v.length;
        for (var M in e)
          (n || le.call(e, M)) && !(m && (M == "length" || u && (M == "offset" || M == "parent") || p && (M == "buffer" || M == "byteLength" || M == "byteOffset") || an(M, g))) && v.push(M);
        return v;
      }
      function md(e) {
        var n = e.length;
        return n ? e[Ls(0, n - 1)] : r;
      }
      function UV(e, n) {
        return ra(et(e), Pn(n, 0, e.length));
      }
      function RV(e) {
        return ra(et(e));
      }
      function _s(e, n, i) {
        (i !== r && !Bt(e[n], i) || i === r && !(n in e)) && nn(e, n, i);
      }
      function Uo(e, n, i) {
        var s = e[n];
        (!(le.call(e, n) && Bt(s, i)) || i === r && !(n in e)) && nn(e, n, i);
      }
      function Gi(e, n) {
        for (var i = e.length; i--; )
          if (Bt(e[i][0], n))
            return i;
        return -1;
      }
      function NV(e, n, i, s) {
        return kn(e, function(u, p, m) {
          n(s, u, i(u), m);
        }), s;
      }
      function wd(e, n) {
        return e && Ht(n, Ae(n), e);
      }
      function yV(e, n) {
        return e && Ht(n, nt(n), e);
      }
      function nn(e, n, i) {
        n == "__proto__" && Ii ? Ii(e, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : e[n] = i;
      }
      function Os(e, n) {
        for (var i = -1, s = n.length, u = N(s), p = e == null; ++i < s; )
          u[i] = p ? r : Ul(e, n[i]);
        return u;
      }
      function Pn(e, n, i) {
        return e === e && (i !== r && (e = e <= i ? e : i), n !== r && (e = e >= n ? e : n)), e;
      }
      function yt(e, n, i, s, u, p) {
        var m, v = n & R, g = n & y, M = n & F;
        if (i && (m = u ? i(e, s, u, p) : i(e)), m !== r)
          return m;
        if (!ve(e))
          return e;
        var Z = j(e);
        if (Z) {
          if (m = f0(e), !v)
            return et(e, m);
        } else {
          var J = Ge(e), I = J == Ri || J == Vu;
          if (Jn(e))
            return _d(e, v);
          if (J == Kt || J == mr || I && !u) {
            if (m = g || I ? {} : af(e), !v)
              return g ? t0(e, yV(m, e)) : e0(e, wd(m, e));
          } else {
            if (!fe[J])
              return u ? e : {};
            m = h0(e, J, v);
          }
        }
        p || (p = new xt());
        var Q = p.get(e);
        if (Q)
          return Q;
        p.set(e, m), Cf(e) ? e.forEach(function(Y) {
          m.add(yt(Y, n, i, Y, e, p));
        }) : Ff(e) && e.forEach(function(Y, ee) {
          m.set(ee, yt(Y, n, i, ee, e, p));
        });
        var G = M ? g ? sl : al : g ? nt : Ae, L = Z ? r : G(e);
        return Ut(L || e, function(Y, ee) {
          L && (ee = Y, Y = e[ee]), Uo(m, ee, yt(Y, n, i, ee, e, p));
        }), m;
      }
      function kV(e) {
        var n = Ae(e);
        return function(i) {
          return vd(i, e, n);
        };
      }
      function vd(e, n, i) {
        var s = i.length;
        if (e == null)
          return !s;
        for (e = de(e); s--; ) {
          var u = i[s], p = n[u], m = e[u];
          if (m === r && !(u in e) || !p(m))
            return !1;
        }
        return !0;
      }
      function Vd(e, n, i) {
        if (typeof e != "function")
          throw new Rt(d);
        return bo(function() {
          e.apply(r, i);
        }, n);
      }
      function Ro(e, n, i, s) {
        var u = -1, p = Zi, m = !0, v = e.length, g = [], M = n.length;
        if (!v)
          return g;
        i && (n = me(n, ct(i))), s ? (p = Zs, m = !1) : n.length >= l && (p = mo, m = !1, n = new Yn(n));
        e:
          for (; ++u < v; ) {
            var Z = e[u], J = i == null ? Z : i(Z);
            if (Z = s || Z !== 0 ? Z : 0, m && J === J) {
              for (var I = M; I--; )
                if (n[I] === J)
                  continue e;
              g.push(Z);
            } else
              p(n, J, s) || g.push(Z);
          }
        return g;
      }
      var kn = Yd(Pt), Td = Yd(zs, !0);
      function MV(e, n) {
        var i = !0;
        return kn(e, function(s, u, p) {
          return i = !!n(s, u, p), i;
        }), i;
      }
      function Yi(e, n, i) {
        for (var s = -1, u = e.length; ++s < u; ) {
          var p = e[s], m = n(p);
          if (m != null && (v === r ? m === m && !dt(m) : i(m, v)))
            var v = m, g = p;
        }
        return g;
      }
      function ZV(e, n, i, s) {
        var u = e.length;
        for (i = X(i), i < 0 && (i = -i > u ? 0 : u + i), s = s === r || s > u ? u : X(s), s < 0 && (s += u), s = i > s ? 0 : Bf(s); i < s; )
          e[i++] = n;
        return e;
      }
      function gd(e, n) {
        var i = [];
        return kn(e, function(s, u, p) {
          n(s, u, p) && i.push(s);
        }), i;
      }
      function De(e, n, i, s, u) {
        var p = -1, m = e.length;
        for (i || (i = m0), u || (u = []); ++p < m; ) {
          var v = e[p];
          n > 0 && i(v) ? n > 1 ? De(v, n - 1, i, s, u) : Rn(u, v) : s || (u[u.length] = v);
        }
        return u;
      }
      var Qs = Pd(), Ud = Pd(!0);
      function Pt(e, n) {
        return e && Qs(e, n, Ae);
      }
      function zs(e, n) {
        return e && Ud(e, n, Ae);
      }
      function Pi(e, n) {
        return Un(n, function(i) {
          return sn(e[i]);
        });
      }
      function Hn(e, n) {
        n = Zn(n, e);
        for (var i = 0, s = n.length; e != null && i < s; )
          e = e[jt(n[i++])];
        return i && i == s ? e : r;
      }
      function Rd(e, n, i) {
        var s = n(e);
        return j(e) ? s : Rn(s, i(e));
      }
      function Le(e) {
        return e == null ? e === r ? n1 : e1 : zn && zn in de(e) ? c0(e) : R0(e);
      }
      function Gs(e, n) {
        return e > n;
      }
      function bV(e, n) {
        return e != null && le.call(e, n);
      }
      function JV(e, n) {
        return e != null && n in de(e);
      }
      function EV(e, n, i) {
        return e >= ze(n, i) && e < Ee(n, i);
      }
      function Ys(e, n, i) {
        for (var s = i ? Zs : Zi, u = e[0].length, p = e.length, m = p, v = N(p), g = 1 / 0, M = []; m--; ) {
          var Z = e[m];
          m && n && (Z = me(Z, ct(n))), g = ze(Z.length, g), v[m] = !i && (n || u >= 120 && Z.length >= 120) ? new Yn(m && Z) : r;
        }
        Z = e[0];
        var J = -1, I = v[0];
        e:
          for (; ++J < u && M.length < g; ) {
            var Q = Z[J], G = n ? n(Q) : Q;
            if (Q = i || Q !== 0 ? Q : 0, !(I ? mo(I, G) : s(M, G, i))) {
              for (m = p; --m; ) {
                var L = v[m];
                if (!(L ? mo(L, G) : s(e[m], G, i)))
                  continue e;
              }
              I && I.push(G), M.push(Q);
            }
          }
        return M;
      }
      function SV(e, n, i, s) {
        return Pt(e, function(u, p, m) {
          n(s, i(u), p, m);
        }), s;
      }
      function No(e, n, i) {
        n = Zn(n, e), e = uf(e, n);
        var s = e == null ? e : e[jt(Mt(n))];
        return s == null ? r : lt(s, e, i);
      }
      function Nd(e) {
        return ge(e) && Le(e) == mr;
      }
      function AV(e) {
        return ge(e) && Le(e) == po;
      }
      function FV(e) {
        return ge(e) && Le(e) == lo;
      }
      function yo(e, n, i, s, u) {
        return e === n ? !0 : e == null || n == null || !ge(e) && !ge(n) ? e !== e && n !== n : WV(e, n, i, s, yo, u);
      }
      function WV(e, n, i, s, u, p) {
        var m = j(e), v = j(n), g = m ? gi : Ge(e), M = v ? gi : Ge(n);
        g = g == mr ? Kt : g, M = M == mr ? Kt : M;
        var Z = g == Kt, J = M == Kt, I = g == M;
        if (I && Jn(e)) {
          if (!Jn(n))
            return !1;
          m = !0, Z = !1;
        }
        if (I && !Z)
          return p || (p = new xt()), m || Jr(e) ? nf(e, n, i, s, u, p) : s0(e, n, g, i, s, u, p);
        if (!(i & S)) {
          var Q = Z && le.call(e, "__wrapped__"), G = J && le.call(n, "__wrapped__");
          if (Q || G) {
            var L = Q ? e.value() : e, Y = G ? n.value() : n;
            return p || (p = new xt()), u(L, Y, i, s, p);
          }
        }
        return I ? (p || (p = new xt()), l0(e, n, i, s, u, p)) : !1;
      }
      function CV(e) {
        return ge(e) && Ge(e) == Ft;
      }
      function Ps(e, n, i, s) {
        var u = i.length, p = u, m = !s;
        if (e == null)
          return !p;
        for (e = de(e); u--; ) {
          var v = i[u];
          if (m && v[2] ? v[1] !== e[v[0]] : !(v[0] in e))
            return !1;
        }
        for (; ++u < p; ) {
          v = i[u];
          var g = v[0], M = e[g], Z = v[1];
          if (m && v[2]) {
            if (M === r && !(g in e))
              return !1;
          } else {
            var J = new xt();
            if (s)
              var I = s(M, Z, g, e, n, J);
            if (!(I === r ? yo(Z, M, S | C, s, J) : I))
              return !1;
          }
        }
        return !0;
      }
      function yd(e) {
        if (!ve(e) || v0(e))
          return !1;
        var n = sn(e) ? Cv : k1;
        return n.test(Xn(e));
      }
      function xV(e) {
        return ge(e) && Le(e) == uo;
      }
      function BV(e) {
        return ge(e) && Ge(e) == Wt;
      }
      function IV(e) {
        return ge(e) && ca(e.length) && !!pe[Le(e)];
      }
      function kd(e) {
        return typeof e == "function" ? e : e == null ? rt : typeof e == "object" ? j(e) ? bd(e[0], e[1]) : Zd(e) : jf(e);
      }
      function Hs(e) {
        if (!Zo(e))
          return Ov(e);
        var n = [];
        for (var i in de(e))
          le.call(e, i) && i != "constructor" && n.push(i);
        return n;
      }
      function DV(e) {
        if (!ve(e))
          return U0(e);
        var n = Zo(e), i = [];
        for (var s in e)
          s == "constructor" && (n || !le.call(e, s)) || i.push(s);
        return i;
      }
      function js(e, n) {
        return e < n;
      }
      function Md(e, n) {
        var i = -1, s = tt(e) ? N(e.length) : [];
        return kn(e, function(u, p, m) {
          s[++i] = n(u, p, m);
        }), s;
      }
      function Zd(e) {
        var n = cl(e);
        return n.length == 1 && n[0][2] ? lf(n[0][0], n[0][1]) : function(i) {
          return i === e || Ps(i, e, n);
        };
      }
      function bd(e, n) {
        return dl(e) && sf(n) ? lf(jt(e), n) : function(i) {
          var s = Ul(i, e);
          return s === r && s === n ? Rl(i, e) : yo(n, s, S | C);
        };
      }
      function Hi(e, n, i, s, u) {
        e !== n && Qs(n, function(p, m) {
          if (u || (u = new xt()), ve(p))
            _V(e, n, m, i, Hi, s, u);
          else {
            var v = s ? s(hl(e, m), p, m + "", e, n, u) : r;
            v === r && (v = p), _s(e, m, v);
          }
        }, nt);
      }
      function _V(e, n, i, s, u, p, m) {
        var v = hl(e, i), g = hl(n, i), M = m.get(g);
        if (M) {
          _s(e, i, M);
          return;
        }
        var Z = p ? p(v, g, i + "", e, n, m) : r, J = Z === r;
        if (J) {
          var I = j(g), Q = !I && Jn(g), G = !I && !Q && Jr(g);
          Z = g, I || Q || G ? j(v) ? Z = v : Ne(v) ? Z = et(v) : Q ? (J = !1, Z = _d(g, !0)) : G ? (J = !1, Z = Od(g, !0)) : Z = [] : Jo(g) || Ln(g) ? (Z = v, Ln(v) ? Z = If(v) : (!ve(v) || sn(v)) && (Z = af(g))) : J = !1;
        }
        J && (m.set(g, Z), u(Z, g, s, p, m), m.delete(g)), _s(e, i, Z);
      }
      function Jd(e, n) {
        var i = e.length;
        if (!!i)
          return n += n < 0 ? i : 0, an(n, i) ? e[n] : r;
      }
      function Ed(e, n, i) {
        n.length ? n = me(n, function(p) {
          return j(p) ? function(m) {
            return Hn(m, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [rt];
        var s = -1;
        n = me(n, ct(z()));
        var u = Md(e, function(p, m, v) {
          var g = me(n, function(M) {
            return M(p);
          });
          return { criteria: g, index: ++s, value: p };
        });
        return hv(u, function(p, m) {
          return KV(p, m, i);
        });
      }
      function OV(e, n) {
        return Sd(e, n, function(i, s) {
          return Rl(e, s);
        });
      }
      function Sd(e, n, i) {
        for (var s = -1, u = n.length, p = {}; ++s < u; ) {
          var m = n[s], v = Hn(e, m);
          i(v, m) && ko(p, Zn(m, e), v);
        }
        return p;
      }
      function QV(e) {
        return function(n) {
          return Hn(n, e);
        };
      }
      function Xs(e, n, i, s) {
        var u = s ? fv : Vr, p = -1, m = n.length, v = e;
        for (e === n && (n = et(n)), i && (v = me(e, ct(i))); ++p < m; )
          for (var g = 0, M = n[p], Z = i ? i(M) : M; (g = u(v, Z, g, s)) > -1; )
            v !== e && Bi.call(v, g, 1), Bi.call(e, g, 1);
        return e;
      }
      function Ad(e, n) {
        for (var i = e ? n.length : 0, s = i - 1; i--; ) {
          var u = n[i];
          if (i == s || u !== p) {
            var p = u;
            an(u) ? Bi.call(e, u, 1) : Ks(e, u);
          }
        }
        return e;
      }
      function Ls(e, n) {
        return e + _i(fd() * (n - e + 1));
      }
      function zV(e, n, i, s) {
        for (var u = -1, p = Ee(Di((n - e) / (i || 1)), 0), m = N(p); p--; )
          m[s ? p : ++u] = e, e += i;
        return m;
      }
      function $s(e, n) {
        var i = "";
        if (!e || n < 1 || n > Xe)
          return i;
        do
          n % 2 && (i += e), n = _i(n / 2), n && (e += e);
        while (n);
        return i;
      }
      function q(e, n) {
        return pl(cf(e, n, rt), e + "");
      }
      function GV(e) {
        return md(Er(e));
      }
      function YV(e, n) {
        var i = Er(e);
        return ra(i, Pn(n, 0, i.length));
      }
      function ko(e, n, i, s) {
        if (!ve(e))
          return e;
        n = Zn(n, e);
        for (var u = -1, p = n.length, m = p - 1, v = e; v != null && ++u < p; ) {
          var g = jt(n[u]), M = i;
          if (g === "__proto__" || g === "constructor" || g === "prototype")
            return e;
          if (u != m) {
            var Z = v[g];
            M = s ? s(Z, g, v) : r, M === r && (M = ve(Z) ? Z : an(n[u + 1]) ? [] : {});
          }
          Uo(v, g, M), v = v[g];
        }
        return e;
      }
      var Fd = Oi ? function(e, n) {
        return Oi.set(e, n), e;
      } : rt, PV = Ii ? function(e, n) {
        return Ii(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: yl(n),
          writable: !0
        });
      } : rt;
      function HV(e) {
        return ra(Er(e));
      }
      function kt(e, n, i) {
        var s = -1, u = e.length;
        n < 0 && (n = -n > u ? 0 : u + n), i = i > u ? u : i, i < 0 && (i += u), u = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = N(u); ++s < u; )
          p[s] = e[s + n];
        return p;
      }
      function jV(e, n) {
        var i;
        return kn(e, function(s, u, p) {
          return i = n(s, u, p), !i;
        }), !!i;
      }
      function ji(e, n, i) {
        var s = 0, u = e == null ? s : e.length;
        if (typeof n == "number" && n === n && u <= Lw) {
          for (; s < u; ) {
            var p = s + u >>> 1, m = e[p];
            m !== null && !dt(m) && (i ? m <= n : m < n) ? s = p + 1 : u = p;
          }
          return u;
        }
        return qs(e, n, rt, i);
      }
      function qs(e, n, i, s) {
        var u = 0, p = e == null ? 0 : e.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var m = n !== n, v = n === null, g = dt(n), M = n === r; u < p; ) {
          var Z = _i((u + p) / 2), J = i(e[Z]), I = J !== r, Q = J === null, G = J === J, L = dt(J);
          if (m)
            var Y = s || G;
          else
            M ? Y = G && (s || I) : v ? Y = G && I && (s || !Q) : g ? Y = G && I && !Q && (s || !L) : Q || L ? Y = !1 : Y = s ? J <= n : J < n;
          Y ? u = Z + 1 : p = Z;
        }
        return ze(p, Xw);
      }
      function Wd(e, n) {
        for (var i = -1, s = e.length, u = 0, p = []; ++i < s; ) {
          var m = e[i], v = n ? n(m) : m;
          if (!i || !Bt(v, g)) {
            var g = v;
            p[u++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function Cd(e) {
        return typeof e == "number" ? e : dt(e) ? Ti : +e;
      }
      function ut(e) {
        if (typeof e == "string")
          return e;
        if (j(e))
          return me(e, ut) + "";
        if (dt(e))
          return hd ? hd.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -Be ? "-0" : n;
      }
      function Mn(e, n, i) {
        var s = -1, u = Zi, p = e.length, m = !0, v = [], g = v;
        if (i)
          m = !1, u = Zs;
        else if (p >= l) {
          var M = n ? null : i0(e);
          if (M)
            return Ji(M);
          m = !1, u = mo, g = new Yn();
        } else
          g = n ? [] : v;
        e:
          for (; ++s < p; ) {
            var Z = e[s], J = n ? n(Z) : Z;
            if (Z = i || Z !== 0 ? Z : 0, m && J === J) {
              for (var I = g.length; I--; )
                if (g[I] === J)
                  continue e;
              n && g.push(J), v.push(Z);
            } else
              u(g, J, i) || (g !== v && g.push(J), v.push(Z));
          }
        return v;
      }
      function Ks(e, n) {
        return n = Zn(n, e), e = uf(e, n), e == null || delete e[jt(Mt(n))];
      }
      function xd(e, n, i, s) {
        return ko(e, n, i(Hn(e, n)), s);
      }
      function Xi(e, n, i, s) {
        for (var u = e.length, p = s ? u : -1; (s ? p-- : ++p < u) && n(e[p], p, e); )
          ;
        return i ? kt(e, s ? 0 : p, s ? p + 1 : u) : kt(e, s ? p + 1 : 0, s ? u : p);
      }
      function Bd(e, n) {
        var i = e;
        return i instanceof te && (i = i.value()), bs(n, function(s, u) {
          return u.func.apply(u.thisArg, Rn([s], u.args));
        }, i);
      }
      function el(e, n, i) {
        var s = e.length;
        if (s < 2)
          return s ? Mn(e[0]) : [];
        for (var u = -1, p = N(s); ++u < s; )
          for (var m = e[u], v = -1; ++v < s; )
            v != u && (p[u] = Ro(p[u] || m, e[v], n, i));
        return Mn(De(p, 1), n, i);
      }
      function Id(e, n, i) {
        for (var s = -1, u = e.length, p = n.length, m = {}; ++s < u; ) {
          var v = s < p ? n[s] : r;
          i(m, e[s], v);
        }
        return m;
      }
      function tl(e) {
        return Ne(e) ? e : [];
      }
      function nl(e) {
        return typeof e == "function" ? e : rt;
      }
      function Zn(e, n) {
        return j(e) ? e : dl(e, n) ? [e] : pf(ie(e));
      }
      var XV = q;
      function bn(e, n, i) {
        var s = e.length;
        return i = i === r ? s : i, !n && i >= s ? e : kt(e, n, i);
      }
      var Dd = xv || function(e) {
        return Ie.clearTimeout(e);
      };
      function _d(e, n) {
        if (n)
          return e.slice();
        var i = e.length, s = sd ? sd(i) : new e.constructor(i);
        return e.copy(s), s;
      }
      function rl(e) {
        var n = new e.constructor(e.byteLength);
        return new Ci(n).set(new Ci(e)), n;
      }
      function LV(e, n) {
        var i = n ? rl(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function $V(e) {
        var n = new e.constructor(e.source, Nu.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function qV(e) {
        return go ? de(go.call(e)) : {};
      }
      function Od(e, n) {
        var i = n ? rl(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.length);
      }
      function Qd(e, n) {
        if (e !== n) {
          var i = e !== r, s = e === null, u = e === e, p = dt(e), m = n !== r, v = n === null, g = n === n, M = dt(n);
          if (!v && !M && !p && e > n || p && m && g && !v && !M || s && m && g || !i && g || !u)
            return 1;
          if (!s && !p && !M && e < n || M && i && u && !s && !p || v && i && u || !m && u || !g)
            return -1;
        }
        return 0;
      }
      function KV(e, n, i) {
        for (var s = -1, u = e.criteria, p = n.criteria, m = u.length, v = i.length; ++s < m; ) {
          var g = Qd(u[s], p[s]);
          if (g) {
            if (s >= v)
              return g;
            var M = i[s];
            return g * (M == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function zd(e, n, i, s) {
        for (var u = -1, p = e.length, m = i.length, v = -1, g = n.length, M = Ee(p - m, 0), Z = N(g + M), J = !s; ++v < g; )
          Z[v] = n[v];
        for (; ++u < m; )
          (J || u < p) && (Z[i[u]] = e[u]);
        for (; M--; )
          Z[v++] = e[u++];
        return Z;
      }
      function Gd(e, n, i, s) {
        for (var u = -1, p = e.length, m = -1, v = i.length, g = -1, M = n.length, Z = Ee(p - v, 0), J = N(Z + M), I = !s; ++u < Z; )
          J[u] = e[u];
        for (var Q = u; ++g < M; )
          J[Q + g] = n[g];
        for (; ++m < v; )
          (I || u < p) && (J[Q + i[m]] = e[u++]);
        return J;
      }
      function et(e, n) {
        var i = -1, s = e.length;
        for (n || (n = N(s)); ++i < s; )
          n[i] = e[i];
        return n;
      }
      function Ht(e, n, i, s) {
        var u = !i;
        i || (i = {});
        for (var p = -1, m = n.length; ++p < m; ) {
          var v = n[p], g = s ? s(i[v], e[v], v, i, e) : r;
          g === r && (g = e[v]), u ? nn(i, v, g) : Uo(i, v, g);
        }
        return i;
      }
      function e0(e, n) {
        return Ht(e, ul(e), n);
      }
      function t0(e, n) {
        return Ht(e, rf(e), n);
      }
      function Li(e, n) {
        return function(i, s) {
          var u = j(i) ? av : NV, p = n ? n() : {};
          return u(i, e, z(s, 2), p);
        };
      }
      function Mr(e) {
        return q(function(n, i) {
          var s = -1, u = i.length, p = u > 1 ? i[u - 1] : r, m = u > 2 ? i[2] : r;
          for (p = e.length > 3 && typeof p == "function" ? (u--, p) : r, m && $e(i[0], i[1], m) && (p = u < 3 ? r : p, u = 1), n = de(n); ++s < u; ) {
            var v = i[s];
            v && e(n, v, s, p);
          }
          return n;
        });
      }
      function Yd(e, n) {
        return function(i, s) {
          if (i == null)
            return i;
          if (!tt(i))
            return e(i, s);
          for (var u = i.length, p = n ? u : -1, m = de(i); (n ? p-- : ++p < u) && s(m[p], p, m) !== !1; )
            ;
          return i;
        };
      }
      function Pd(e) {
        return function(n, i, s) {
          for (var u = -1, p = de(n), m = s(n), v = m.length; v--; ) {
            var g = m[e ? v : ++u];
            if (i(p[g], g, p) === !1)
              break;
          }
          return n;
        };
      }
      function n0(e, n, i) {
        var s = n & D, u = Mo(e);
        function p() {
          var m = this && this !== Ie && this instanceof p ? u : e;
          return m.apply(s ? i : this, arguments);
        }
        return p;
      }
      function Hd(e) {
        return function(n) {
          n = ie(n);
          var i = Tr(n) ? Ct(n) : r, s = i ? i[0] : n.charAt(0), u = i ? bn(i, 1).join("") : n.slice(1);
          return s[e]() + u;
        };
      }
      function Zr(e) {
        return function(n) {
          return bs(Pf(Yf(n).replace(P1, "")), e, "");
        };
      }
      function Mo(e) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new e();
            case 1:
              return new e(n[0]);
            case 2:
              return new e(n[0], n[1]);
            case 3:
              return new e(n[0], n[1], n[2]);
            case 4:
              return new e(n[0], n[1], n[2], n[3]);
            case 5:
              return new e(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var i = kr(e.prototype), s = e.apply(i, n);
          return ve(s) ? s : i;
        };
      }
      function r0(e, n, i) {
        var s = Mo(e);
        function u() {
          for (var p = arguments.length, m = N(p), v = p, g = br(u); v--; )
            m[v] = arguments[v];
          var M = p < 3 && m[0] !== g && m[p - 1] !== g ? [] : Nn(m, g);
          if (p -= M.length, p < i)
            return qd(
              e,
              n,
              $i,
              u.placeholder,
              r,
              m,
              M,
              r,
              r,
              i - p
            );
          var Z = this && this !== Ie && this instanceof u ? s : e;
          return lt(Z, this, m);
        }
        return u;
      }
      function jd(e) {
        return function(n, i, s) {
          var u = de(n);
          if (!tt(n)) {
            var p = z(i, 3);
            n = Ae(n), i = function(v) {
              return p(u[v], v, u);
            };
          }
          var m = e(n, i, s);
          return m > -1 ? u[p ? n[m] : m] : r;
        };
      }
      function Xd(e) {
        return on(function(n) {
          var i = n.length, s = i, u = Nt.prototype.thru;
          for (e && n.reverse(); s--; ) {
            var p = n[s];
            if (typeof p != "function")
              throw new Rt(d);
            if (u && !m && ta(p) == "wrapper")
              var m = new Nt([], !0);
          }
          for (s = m ? s : i; ++s < i; ) {
            p = n[s];
            var v = ta(p), g = v == "wrapper" ? ll(p) : r;
            g && fl(g[0]) && g[1] == (A | x | b | O) && !g[4].length && g[9] == 1 ? m = m[ta(g[0])].apply(m, g[3]) : m = p.length == 1 && fl(p) ? m[v]() : m.thru(p);
          }
          return function() {
            var M = arguments, Z = M[0];
            if (m && M.length == 1 && j(Z))
              return m.plant(Z).value();
            for (var J = 0, I = i ? n[J].apply(this, M) : Z; ++J < i; )
              I = n[J].call(this, I);
            return I;
          };
        });
      }
      function $i(e, n, i, s, u, p, m, v, g, M) {
        var Z = n & A, J = n & D, I = n & E, Q = n & (x | P), G = n & he, L = I ? r : Mo(e);
        function Y() {
          for (var ee = arguments.length, ne = N(ee), ft = ee; ft--; )
            ne[ft] = arguments[ft];
          if (Q)
            var qe = br(Y), ht = mv(ne, qe);
          if (s && (ne = zd(ne, s, u, Q)), p && (ne = Gd(ne, p, m, Q)), ee -= ht, Q && ee < M) {
            var ye = Nn(ne, qe);
            return qd(
              e,
              n,
              $i,
              Y.placeholder,
              i,
              ne,
              ye,
              v,
              g,
              M - ee
            );
          }
          var It = J ? i : this, cn = I ? It[e] : e;
          return ee = ne.length, v ? ne = N0(ne, v) : G && ee > 1 && ne.reverse(), Z && g < ee && (ne.length = g), this && this !== Ie && this instanceof Y && (cn = L || Mo(cn)), cn.apply(It, ne);
        }
        return Y;
      }
      function Ld(e, n) {
        return function(i, s) {
          return SV(i, e, n(s), {});
        };
      }
      function qi(e, n) {
        return function(i, s) {
          var u;
          if (i === r && s === r)
            return n;
          if (i !== r && (u = i), s !== r) {
            if (u === r)
              return s;
            typeof i == "string" || typeof s == "string" ? (i = ut(i), s = ut(s)) : (i = Cd(i), s = Cd(s)), u = e(i, s);
          }
          return u;
        };
      }
      function ol(e) {
        return on(function(n) {
          return n = me(n, ct(z())), q(function(i) {
            var s = this;
            return e(n, function(u) {
              return lt(u, s, i);
            });
          });
        });
      }
      function Ki(e, n) {
        n = n === r ? " " : ut(n);
        var i = n.length;
        if (i < 2)
          return i ? $s(n, e) : n;
        var s = $s(n, Di(e / gr(n)));
        return Tr(n) ? bn(Ct(s), 0, e).join("") : s.slice(0, e);
      }
      function o0(e, n, i, s) {
        var u = n & D, p = Mo(e);
        function m() {
          for (var v = -1, g = arguments.length, M = -1, Z = s.length, J = N(Z + g), I = this && this !== Ie && this instanceof m ? p : e; ++M < Z; )
            J[M] = s[M];
          for (; g--; )
            J[M++] = arguments[++v];
          return lt(I, u ? i : this, J);
        }
        return m;
      }
      function $d(e) {
        return function(n, i, s) {
          return s && typeof s != "number" && $e(n, i, s) && (i = s = r), n = ln(n), i === r ? (i = n, n = 0) : i = ln(i), s = s === r ? n < i ? 1 : -1 : ln(s), zV(n, i, s, e);
        };
      }
      function ea(e) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Zt(n), i = Zt(i)), e(n, i);
        };
      }
      function qd(e, n, i, s, u, p, m, v, g, M) {
        var Z = n & x, J = Z ? m : r, I = Z ? r : m, Q = Z ? p : r, G = Z ? r : p;
        n |= Z ? b : W, n &= ~(Z ? W : b), n & B || (n &= ~(D | E));
        var L = [
          e,
          n,
          u,
          Q,
          J,
          G,
          I,
          v,
          g,
          M
        ], Y = i.apply(r, L);
        return fl(e) && df(Y, L), Y.placeholder = s, ff(Y, e, n);
      }
      function il(e) {
        var n = Je[e];
        return function(i, s) {
          if (i = Zt(i), s = s == null ? 0 : ze(X(s), 292), s && dd(i)) {
            var u = (ie(i) + "e").split("e"), p = n(u[0] + "e" + (+u[1] + s));
            return u = (ie(p) + "e").split("e"), +(u[0] + "e" + (+u[1] - s));
          }
          return n(i);
        };
      }
      var i0 = Nr && 1 / Ji(new Nr([, -0]))[1] == Be ? function(e) {
        return new Nr(e);
      } : Zl;
      function Kd(e) {
        return function(n) {
          var i = Ge(n);
          return i == Ft ? Cs(n) : i == Wt ? Rv(n) : pv(n, e(n));
        };
      }
      function rn(e, n, i, s, u, p, m, v) {
        var g = n & E;
        if (!g && typeof e != "function")
          throw new Rt(d);
        var M = s ? s.length : 0;
        if (M || (n &= ~(b | W), s = u = r), m = m === r ? m : Ee(X(m), 0), v = v === r ? v : X(v), M -= u ? u.length : 0, n & W) {
          var Z = s, J = u;
          s = u = r;
        }
        var I = g ? r : ll(e), Q = [
          e,
          n,
          i,
          s,
          u,
          Z,
          J,
          p,
          m,
          v
        ];
        if (I && g0(Q, I), e = Q[0], n = Q[1], i = Q[2], s = Q[3], u = Q[4], v = Q[9] = Q[9] === r ? g ? 0 : e.length : Ee(Q[9] - M, 0), !v && n & (x | P) && (n &= ~(x | P)), !n || n == D)
          var G = n0(e, n, i);
        else
          n == x || n == P ? G = r0(e, n, v) : (n == b || n == (D | b)) && !u.length ? G = o0(e, n, i, s) : G = $i.apply(r, Q);
        var L = I ? Fd : df;
        return ff(L(G, Q), e, n);
      }
      function ef(e, n, i, s) {
        return e === r || Bt(e, Rr[i]) && !le.call(s, i) ? n : e;
      }
      function tf(e, n, i, s, u, p) {
        return ve(e) && ve(n) && (p.set(n, e), Hi(e, n, r, tf, p), p.delete(n)), e;
      }
      function a0(e) {
        return Jo(e) ? r : e;
      }
      function nf(e, n, i, s, u, p) {
        var m = i & S, v = e.length, g = n.length;
        if (v != g && !(m && g > v))
          return !1;
        var M = p.get(e), Z = p.get(n);
        if (M && Z)
          return M == n && Z == e;
        var J = -1, I = !0, Q = i & C ? new Yn() : r;
        for (p.set(e, n), p.set(n, e); ++J < v; ) {
          var G = e[J], L = n[J];
          if (s)
            var Y = m ? s(L, G, J, n, e, p) : s(G, L, J, e, n, p);
          if (Y !== r) {
            if (Y)
              continue;
            I = !1;
            break;
          }
          if (Q) {
            if (!Js(n, function(ee, ne) {
              if (!mo(Q, ne) && (G === ee || u(G, ee, i, s, p)))
                return Q.push(ne);
            })) {
              I = !1;
              break;
            }
          } else if (!(G === L || u(G, L, i, s, p))) {
            I = !1;
            break;
          }
        }
        return p.delete(e), p.delete(n), I;
      }
      function s0(e, n, i, s, u, p, m) {
        switch (i) {
          case wr:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case po:
            return !(e.byteLength != n.byteLength || !p(new Ci(e), new Ci(n)));
          case so:
          case lo:
          case co:
            return Bt(+e, +n);
          case Ui:
            return e.name == n.name && e.message == n.message;
          case uo:
          case fo:
            return e == n + "";
          case Ft:
            var v = Cs;
          case Wt:
            var g = s & S;
            if (v || (v = Ji), e.size != n.size && !g)
              return !1;
            var M = m.get(e);
            if (M)
              return M == n;
            s |= C, m.set(e, n);
            var Z = nf(v(e), v(n), s, u, p, m);
            return m.delete(e), Z;
          case Ni:
            if (go)
              return go.call(e) == go.call(n);
        }
        return !1;
      }
      function l0(e, n, i, s, u, p) {
        var m = i & S, v = al(e), g = v.length, M = al(n), Z = M.length;
        if (g != Z && !m)
          return !1;
        for (var J = g; J--; ) {
          var I = v[J];
          if (!(m ? I in n : le.call(n, I)))
            return !1;
        }
        var Q = p.get(e), G = p.get(n);
        if (Q && G)
          return Q == n && G == e;
        var L = !0;
        p.set(e, n), p.set(n, e);
        for (var Y = m; ++J < g; ) {
          I = v[J];
          var ee = e[I], ne = n[I];
          if (s)
            var ft = m ? s(ne, ee, I, n, e, p) : s(ee, ne, I, e, n, p);
          if (!(ft === r ? ee === ne || u(ee, ne, i, s, p) : ft)) {
            L = !1;
            break;
          }
          Y || (Y = I == "constructor");
        }
        if (L && !Y) {
          var qe = e.constructor, ht = n.constructor;
          qe != ht && "constructor" in e && "constructor" in n && !(typeof qe == "function" && qe instanceof qe && typeof ht == "function" && ht instanceof ht) && (L = !1);
        }
        return p.delete(e), p.delete(n), L;
      }
      function on(e) {
        return pl(cf(e, r, Vf), e + "");
      }
      function al(e) {
        return Rd(e, Ae, ul);
      }
      function sl(e) {
        return Rd(e, nt, rf);
      }
      var ll = Oi ? function(e) {
        return Oi.get(e);
      } : Zl;
      function ta(e) {
        for (var n = e.name + "", i = yr[n], s = le.call(yr, n) ? i.length : 0; s--; ) {
          var u = i[s], p = u.func;
          if (p == null || p == e)
            return u.name;
        }
        return n;
      }
      function br(e) {
        var n = le.call(f, "placeholder") ? f : e;
        return n.placeholder;
      }
      function z() {
        var e = f.iteratee || kl;
        return e = e === kl ? kd : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function na(e, n) {
        var i = e.__data__;
        return w0(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function cl(e) {
        for (var n = Ae(e), i = n.length; i--; ) {
          var s = n[i], u = e[s];
          n[i] = [s, u, sf(u)];
        }
        return n;
      }
      function jn(e, n) {
        var i = Tv(e, n);
        return yd(i) ? i : r;
      }
      function c0(e) {
        var n = le.call(e, zn), i = e[zn];
        try {
          e[zn] = r;
          var s = !0;
        } catch {
        }
        var u = Fi.call(e);
        return s && (n ? e[zn] = i : delete e[zn]), u;
      }
      var ul = Bs ? function(e) {
        return e == null ? [] : (e = de(e), Un(Bs(e), function(n) {
          return cd.call(e, n);
        }));
      } : bl, rf = Bs ? function(e) {
        for (var n = []; e; )
          Rn(n, ul(e)), e = xi(e);
        return n;
      } : bl, Ge = Le;
      (Is && Ge(new Is(new ArrayBuffer(1))) != wr || vo && Ge(new vo()) != Ft || Ds && Ge(Ds.resolve()) != Tu || Nr && Ge(new Nr()) != Wt || Vo && Ge(new Vo()) != ho) && (Ge = function(e) {
        var n = Le(e), i = n == Kt ? e.constructor : r, s = i ? Xn(i) : "";
        if (s)
          switch (s) {
            case Yv:
              return wr;
            case Pv:
              return Ft;
            case Hv:
              return Tu;
            case jv:
              return Wt;
            case Xv:
              return ho;
          }
        return n;
      });
      function u0(e, n, i) {
        for (var s = -1, u = i.length; ++s < u; ) {
          var p = i[s], m = p.size;
          switch (p.type) {
            case "drop":
              e += m;
              break;
            case "dropRight":
              n -= m;
              break;
            case "take":
              n = ze(n, e + m);
              break;
            case "takeRight":
              e = Ee(e, n - m);
              break;
          }
        }
        return { start: e, end: n };
      }
      function d0(e) {
        var n = e.match(v1);
        return n ? n[1].split(V1) : [];
      }
      function of(e, n, i) {
        n = Zn(n, e);
        for (var s = -1, u = n.length, p = !1; ++s < u; ) {
          var m = jt(n[s]);
          if (!(p = e != null && i(e, m)))
            break;
          e = e[m];
        }
        return p || ++s != u ? p : (u = e == null ? 0 : e.length, !!u && ca(u) && an(m, u) && (j(e) || Ln(e)));
      }
      function f0(e) {
        var n = e.length, i = new e.constructor(n);
        return n && typeof e[0] == "string" && le.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function af(e) {
        return typeof e.constructor == "function" && !Zo(e) ? kr(xi(e)) : {};
      }
      function h0(e, n, i) {
        var s = e.constructor;
        switch (n) {
          case po:
            return rl(e);
          case so:
          case lo:
            return new s(+e);
          case wr:
            return LV(e, i);
          case cs:
          case us:
          case ds:
          case fs:
          case hs:
          case ps:
          case ms:
          case ws:
          case vs:
            return Od(e, i);
          case Ft:
            return new s();
          case co:
          case fo:
            return new s(e);
          case uo:
            return $V(e);
          case Wt:
            return new s();
          case Ni:
            return qV(e);
        }
      }
      function p0(e, n) {
        var i = n.length;
        if (!i)
          return e;
        var s = i - 1;
        return n[s] = (i > 1 ? "& " : "") + n[s], n = n.join(i > 2 ? ", " : " "), e.replace(w1, `{
/* [wrapped with ` + n + `] */
`);
      }
      function m0(e) {
        return j(e) || Ln(e) || !!(ud && e && e[ud]);
      }
      function an(e, n) {
        var i = typeof e;
        return n = n == null ? Xe : n, !!n && (i == "number" || i != "symbol" && Z1.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function $e(e, n, i) {
        if (!ve(i))
          return !1;
        var s = typeof n;
        return (s == "number" ? tt(i) && an(n, i.length) : s == "string" && n in i) ? Bt(i[n], e) : !1;
      }
      function dl(e, n) {
        if (j(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || dt(e) ? !0 : f1.test(e) || !d1.test(e) || n != null && e in de(n);
      }
      function w0(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function fl(e) {
        var n = ta(e), i = f[n];
        if (typeof i != "function" || !(n in te.prototype))
          return !1;
        if (e === i)
          return !0;
        var s = ll(i);
        return !!s && e === s[0];
      }
      function v0(e) {
        return !!ad && ad in e;
      }
      var V0 = Si ? sn : Jl;
      function Zo(e) {
        var n = e && e.constructor, i = typeof n == "function" && n.prototype || Rr;
        return e === i;
      }
      function sf(e) {
        return e === e && !ve(e);
      }
      function lf(e, n) {
        return function(i) {
          return i == null ? !1 : i[e] === n && (n !== r || e in de(i));
        };
      }
      function T0(e) {
        var n = sa(e, function(s) {
          return i.size === V && i.clear(), s;
        }), i = n.cache;
        return n;
      }
      function g0(e, n) {
        var i = e[1], s = n[1], u = i | s, p = u < (D | E | A), m = s == A && i == x || s == A && i == O && e[7].length <= n[8] || s == (A | O) && n[7].length <= n[8] && i == x;
        if (!(p || m))
          return e;
        s & D && (e[2] = n[2], u |= i & D ? 0 : B);
        var v = n[3];
        if (v) {
          var g = e[3];
          e[3] = g ? zd(g, v, n[4]) : v, e[4] = g ? Nn(e[3], U) : n[4];
        }
        return v = n[5], v && (g = e[5], e[5] = g ? Gd(g, v, n[6]) : v, e[6] = g ? Nn(e[5], U) : n[6]), v = n[7], v && (e[7] = v), s & A && (e[8] = e[8] == null ? n[8] : ze(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = u, e;
      }
      function U0(e) {
        var n = [];
        if (e != null)
          for (var i in de(e))
            n.push(i);
        return n;
      }
      function R0(e) {
        return Fi.call(e);
      }
      function cf(e, n, i) {
        return n = Ee(n === r ? e.length - 1 : n, 0), function() {
          for (var s = arguments, u = -1, p = Ee(s.length - n, 0), m = N(p); ++u < p; )
            m[u] = s[n + u];
          u = -1;
          for (var v = N(n + 1); ++u < n; )
            v[u] = s[u];
          return v[n] = i(m), lt(e, this, v);
        };
      }
      function uf(e, n) {
        return n.length < 2 ? e : Hn(e, kt(n, 0, -1));
      }
      function N0(e, n) {
        for (var i = e.length, s = ze(n.length, i), u = et(e); s--; ) {
          var p = n[s];
          e[s] = an(p, i) ? u[p] : r;
        }
        return e;
      }
      function hl(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var df = hf(Fd), bo = Iv || function(e, n) {
        return Ie.setTimeout(e, n);
      }, pl = hf(PV);
      function ff(e, n, i) {
        var s = n + "";
        return pl(e, p0(s, y0(d0(s), i)));
      }
      function hf(e) {
        var n = 0, i = 0;
        return function() {
          var s = Qv(), u = Re - (s - i);
          if (i = s, u > 0) {
            if (++n >= Te)
              return arguments[0];
          } else
            n = 0;
          return e.apply(r, arguments);
        };
      }
      function ra(e, n) {
        var i = -1, s = e.length, u = s - 1;
        for (n = n === r ? s : n; ++i < n; ) {
          var p = Ls(i, u), m = e[p];
          e[p] = e[i], e[i] = m;
        }
        return e.length = n, e;
      }
      var pf = T0(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(h1, function(i, s, u, p) {
          n.push(u ? p.replace(U1, "$1") : s || i);
        }), n;
      });
      function jt(e) {
        if (typeof e == "string" || dt(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -Be ? "-0" : n;
      }
      function Xn(e) {
        if (e != null) {
          try {
            return Ai.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function y0(e, n) {
        return Ut($w, function(i) {
          var s = "_." + i[0];
          n & i[1] && !Zi(e, s) && e.push(s);
        }), e.sort();
      }
      function mf(e) {
        if (e instanceof te)
          return e.clone();
        var n = new Nt(e.__wrapped__, e.__chain__);
        return n.__actions__ = et(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function k0(e, n, i) {
        (i ? $e(e, n, i) : n === r) ? n = 1 : n = Ee(X(n), 0);
        var s = e == null ? 0 : e.length;
        if (!s || n < 1)
          return [];
        for (var u = 0, p = 0, m = N(Di(s / n)); u < s; )
          m[p++] = kt(e, u, u += n);
        return m;
      }
      function M0(e) {
        for (var n = -1, i = e == null ? 0 : e.length, s = 0, u = []; ++n < i; ) {
          var p = e[n];
          p && (u[s++] = p);
        }
        return u;
      }
      function Z0() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = N(e - 1), i = arguments[0], s = e; s--; )
          n[s - 1] = arguments[s];
        return Rn(j(i) ? et(i) : [i], De(n, 1));
      }
      var b0 = q(function(e, n) {
        return Ne(e) ? Ro(e, De(n, 1, Ne, !0)) : [];
      }), J0 = q(function(e, n) {
        var i = Mt(n);
        return Ne(i) && (i = r), Ne(e) ? Ro(e, De(n, 1, Ne, !0), z(i, 2)) : [];
      }), E0 = q(function(e, n) {
        var i = Mt(n);
        return Ne(i) && (i = r), Ne(e) ? Ro(e, De(n, 1, Ne, !0), r, i) : [];
      });
      function S0(e, n, i) {
        var s = e == null ? 0 : e.length;
        return s ? (n = i || n === r ? 1 : X(n), kt(e, n < 0 ? 0 : n, s)) : [];
      }
      function A0(e, n, i) {
        var s = e == null ? 0 : e.length;
        return s ? (n = i || n === r ? 1 : X(n), n = s - n, kt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function F0(e, n) {
        return e && e.length ? Xi(e, z(n, 3), !0, !0) : [];
      }
      function W0(e, n) {
        return e && e.length ? Xi(e, z(n, 3), !0) : [];
      }
      function C0(e, n, i, s) {
        var u = e == null ? 0 : e.length;
        return u ? (i && typeof i != "number" && $e(e, n, i) && (i = 0, s = u), ZV(e, n, i, s)) : [];
      }
      function wf(e, n, i) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var u = i == null ? 0 : X(i);
        return u < 0 && (u = Ee(s + u, 0)), bi(e, z(n, 3), u);
      }
      function vf(e, n, i) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var u = s - 1;
        return i !== r && (u = X(i), u = i < 0 ? Ee(s + u, 0) : ze(u, s - 1)), bi(e, z(n, 3), u, !0);
      }
      function Vf(e) {
        var n = e == null ? 0 : e.length;
        return n ? De(e, 1) : [];
      }
      function x0(e) {
        var n = e == null ? 0 : e.length;
        return n ? De(e, Be) : [];
      }
      function B0(e, n) {
        var i = e == null ? 0 : e.length;
        return i ? (n = n === r ? 1 : X(n), De(e, n)) : [];
      }
      function I0(e) {
        for (var n = -1, i = e == null ? 0 : e.length, s = {}; ++n < i; ) {
          var u = e[n];
          s[u[0]] = u[1];
        }
        return s;
      }
      function Tf(e) {
        return e && e.length ? e[0] : r;
      }
      function D0(e, n, i) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var u = i == null ? 0 : X(i);
        return u < 0 && (u = Ee(s + u, 0)), Vr(e, n, u);
      }
      function _0(e) {
        var n = e == null ? 0 : e.length;
        return n ? kt(e, 0, -1) : [];
      }
      var O0 = q(function(e) {
        var n = me(e, tl);
        return n.length && n[0] === e[0] ? Ys(n) : [];
      }), Q0 = q(function(e) {
        var n = Mt(e), i = me(e, tl);
        return n === Mt(i) ? n = r : i.pop(), i.length && i[0] === e[0] ? Ys(i, z(n, 2)) : [];
      }), z0 = q(function(e) {
        var n = Mt(e), i = me(e, tl);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === e[0] ? Ys(i, r, n) : [];
      });
      function G0(e, n) {
        return e == null ? "" : _v.call(e, n);
      }
      function Mt(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : r;
      }
      function Y0(e, n, i) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var u = s;
        return i !== r && (u = X(i), u = u < 0 ? Ee(s + u, 0) : ze(u, s - 1)), n === n ? yv(e, n, u) : bi(e, qu, u, !0);
      }
      function P0(e, n) {
        return e && e.length ? Jd(e, X(n)) : r;
      }
      var H0 = q(gf);
      function gf(e, n) {
        return e && e.length && n && n.length ? Xs(e, n) : e;
      }
      function j0(e, n, i) {
        return e && e.length && n && n.length ? Xs(e, n, z(i, 2)) : e;
      }
      function X0(e, n, i) {
        return e && e.length && n && n.length ? Xs(e, n, r, i) : e;
      }
      var L0 = on(function(e, n) {
        var i = e == null ? 0 : e.length, s = Os(e, n);
        return Ad(e, me(n, function(u) {
          return an(u, i) ? +u : u;
        }).sort(Qd)), s;
      });
      function $0(e, n) {
        var i = [];
        if (!(e && e.length))
          return i;
        var s = -1, u = [], p = e.length;
        for (n = z(n, 3); ++s < p; ) {
          var m = e[s];
          n(m, s, e) && (i.push(m), u.push(s));
        }
        return Ad(e, u), i;
      }
      function ml(e) {
        return e == null ? e : Gv.call(e);
      }
      function q0(e, n, i) {
        var s = e == null ? 0 : e.length;
        return s ? (i && typeof i != "number" && $e(e, n, i) ? (n = 0, i = s) : (n = n == null ? 0 : X(n), i = i === r ? s : X(i)), kt(e, n, i)) : [];
      }
      function K0(e, n) {
        return ji(e, n);
      }
      function eT(e, n, i) {
        return qs(e, n, z(i, 2));
      }
      function tT(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var s = ji(e, n);
          if (s < i && Bt(e[s], n))
            return s;
        }
        return -1;
      }
      function nT(e, n) {
        return ji(e, n, !0);
      }
      function rT(e, n, i) {
        return qs(e, n, z(i, 2), !0);
      }
      function oT(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var s = ji(e, n, !0) - 1;
          if (Bt(e[s], n))
            return s;
        }
        return -1;
      }
      function iT(e) {
        return e && e.length ? Wd(e) : [];
      }
      function aT(e, n) {
        return e && e.length ? Wd(e, z(n, 2)) : [];
      }
      function sT(e) {
        var n = e == null ? 0 : e.length;
        return n ? kt(e, 1, n) : [];
      }
      function lT(e, n, i) {
        return e && e.length ? (n = i || n === r ? 1 : X(n), kt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function cT(e, n, i) {
        var s = e == null ? 0 : e.length;
        return s ? (n = i || n === r ? 1 : X(n), n = s - n, kt(e, n < 0 ? 0 : n, s)) : [];
      }
      function uT(e, n) {
        return e && e.length ? Xi(e, z(n, 3), !1, !0) : [];
      }
      function dT(e, n) {
        return e && e.length ? Xi(e, z(n, 3)) : [];
      }
      var fT = q(function(e) {
        return Mn(De(e, 1, Ne, !0));
      }), hT = q(function(e) {
        var n = Mt(e);
        return Ne(n) && (n = r), Mn(De(e, 1, Ne, !0), z(n, 2));
      }), pT = q(function(e) {
        var n = Mt(e);
        return n = typeof n == "function" ? n : r, Mn(De(e, 1, Ne, !0), r, n);
      });
      function mT(e) {
        return e && e.length ? Mn(e) : [];
      }
      function wT(e, n) {
        return e && e.length ? Mn(e, z(n, 2)) : [];
      }
      function vT(e, n) {
        return n = typeof n == "function" ? n : r, e && e.length ? Mn(e, r, n) : [];
      }
      function wl(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = Un(e, function(i) {
          if (Ne(i))
            return n = Ee(i.length, n), !0;
        }), Fs(n, function(i) {
          return me(e, Es(i));
        });
      }
      function Uf(e, n) {
        if (!(e && e.length))
          return [];
        var i = wl(e);
        return n == null ? i : me(i, function(s) {
          return lt(n, r, s);
        });
      }
      var VT = q(function(e, n) {
        return Ne(e) ? Ro(e, n) : [];
      }), TT = q(function(e) {
        return el(Un(e, Ne));
      }), gT = q(function(e) {
        var n = Mt(e);
        return Ne(n) && (n = r), el(Un(e, Ne), z(n, 2));
      }), UT = q(function(e) {
        var n = Mt(e);
        return n = typeof n == "function" ? n : r, el(Un(e, Ne), r, n);
      }), RT = q(wl);
      function NT(e, n) {
        return Id(e || [], n || [], Uo);
      }
      function yT(e, n) {
        return Id(e || [], n || [], ko);
      }
      var kT = q(function(e) {
        var n = e.length, i = n > 1 ? e[n - 1] : r;
        return i = typeof i == "function" ? (e.pop(), i) : r, Uf(e, i);
      });
      function Rf(e) {
        var n = f(e);
        return n.__chain__ = !0, n;
      }
      function MT(e, n) {
        return n(e), e;
      }
      function oa(e, n) {
        return n(e);
      }
      var ZT = on(function(e) {
        var n = e.length, i = n ? e[0] : 0, s = this.__wrapped__, u = function(p) {
          return Os(p, e);
        };
        return n > 1 || this.__actions__.length || !(s instanceof te) || !an(i) ? this.thru(u) : (s = s.slice(i, +i + (n ? 1 : 0)), s.__actions__.push({
          func: oa,
          args: [u],
          thisArg: r
        }), new Nt(s, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function bT() {
        return Rf(this);
      }
      function JT() {
        return new Nt(this.value(), this.__chain__);
      }
      function ET() {
        this.__values__ === r && (this.__values__ = xf(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? r : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function ST() {
        return this;
      }
      function AT(e) {
        for (var n, i = this; i instanceof zi; ) {
          var s = mf(i);
          s.__index__ = 0, s.__values__ = r, n ? u.__wrapped__ = s : n = s;
          var u = s;
          i = i.__wrapped__;
        }
        return u.__wrapped__ = e, n;
      }
      function FT() {
        var e = this.__wrapped__;
        if (e instanceof te) {
          var n = e;
          return this.__actions__.length && (n = new te(this)), n = n.reverse(), n.__actions__.push({
            func: oa,
            args: [ml],
            thisArg: r
          }), new Nt(n, this.__chain__);
        }
        return this.thru(ml);
      }
      function WT() {
        return Bd(this.__wrapped__, this.__actions__);
      }
      var CT = Li(function(e, n, i) {
        le.call(e, i) ? ++e[i] : nn(e, i, 1);
      });
      function xT(e, n, i) {
        var s = j(e) ? Lu : MV;
        return i && $e(e, n, i) && (n = r), s(e, z(n, 3));
      }
      function BT(e, n) {
        var i = j(e) ? Un : gd;
        return i(e, z(n, 3));
      }
      var IT = jd(wf), DT = jd(vf);
      function _T(e, n) {
        return De(ia(e, n), 1);
      }
      function OT(e, n) {
        return De(ia(e, n), Be);
      }
      function QT(e, n, i) {
        return i = i === r ? 1 : X(i), De(ia(e, n), i);
      }
      function Nf(e, n) {
        var i = j(e) ? Ut : kn;
        return i(e, z(n, 3));
      }
      function yf(e, n) {
        var i = j(e) ? sv : Td;
        return i(e, z(n, 3));
      }
      var zT = Li(function(e, n, i) {
        le.call(e, i) ? e[i].push(n) : nn(e, i, [n]);
      });
      function GT(e, n, i, s) {
        e = tt(e) ? e : Er(e), i = i && !s ? X(i) : 0;
        var u = e.length;
        return i < 0 && (i = Ee(u + i, 0)), ua(e) ? i <= u && e.indexOf(n, i) > -1 : !!u && Vr(e, n, i) > -1;
      }
      var YT = q(function(e, n, i) {
        var s = -1, u = typeof n == "function", p = tt(e) ? N(e.length) : [];
        return kn(e, function(m) {
          p[++s] = u ? lt(n, m, i) : No(m, n, i);
        }), p;
      }), PT = Li(function(e, n, i) {
        nn(e, i, n);
      });
      function ia(e, n) {
        var i = j(e) ? me : Md;
        return i(e, z(n, 3));
      }
      function HT(e, n, i, s) {
        return e == null ? [] : (j(n) || (n = n == null ? [] : [n]), i = s ? r : i, j(i) || (i = i == null ? [] : [i]), Ed(e, n, i));
      }
      var jT = Li(function(e, n, i) {
        e[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function XT(e, n, i) {
        var s = j(e) ? bs : ed, u = arguments.length < 3;
        return s(e, z(n, 4), i, u, kn);
      }
      function LT(e, n, i) {
        var s = j(e) ? lv : ed, u = arguments.length < 3;
        return s(e, z(n, 4), i, u, Td);
      }
      function $T(e, n) {
        var i = j(e) ? Un : gd;
        return i(e, la(z(n, 3)));
      }
      function qT(e) {
        var n = j(e) ? md : GV;
        return n(e);
      }
      function KT(e, n, i) {
        (i ? $e(e, n, i) : n === r) ? n = 1 : n = X(n);
        var s = j(e) ? UV : YV;
        return s(e, n);
      }
      function eg(e) {
        var n = j(e) ? RV : HV;
        return n(e);
      }
      function tg(e) {
        if (e == null)
          return 0;
        if (tt(e))
          return ua(e) ? gr(e) : e.length;
        var n = Ge(e);
        return n == Ft || n == Wt ? e.size : Hs(e).length;
      }
      function ng(e, n, i) {
        var s = j(e) ? Js : jV;
        return i && $e(e, n, i) && (n = r), s(e, z(n, 3));
      }
      var rg = q(function(e, n) {
        if (e == null)
          return [];
        var i = n.length;
        return i > 1 && $e(e, n[0], n[1]) ? n = [] : i > 2 && $e(n[0], n[1], n[2]) && (n = [n[0]]), Ed(e, De(n, 1), []);
      }), aa = Bv || function() {
        return Ie.Date.now();
      };
      function og(e, n) {
        if (typeof n != "function")
          throw new Rt(d);
        return e = X(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function kf(e, n, i) {
        return n = i ? r : n, n = e && n == null ? e.length : n, rn(e, A, r, r, r, r, n);
      }
      function Mf(e, n) {
        var i;
        if (typeof n != "function")
          throw new Rt(d);
        return e = X(e), function() {
          return --e > 0 && (i = n.apply(this, arguments)), e <= 1 && (n = r), i;
        };
      }
      var vl = q(function(e, n, i) {
        var s = D;
        if (i.length) {
          var u = Nn(i, br(vl));
          s |= b;
        }
        return rn(e, s, n, i, u);
      }), Zf = q(function(e, n, i) {
        var s = D | E;
        if (i.length) {
          var u = Nn(i, br(Zf));
          s |= b;
        }
        return rn(n, s, e, i, u);
      });
      function bf(e, n, i) {
        n = i ? r : n;
        var s = rn(e, x, r, r, r, r, r, n);
        return s.placeholder = bf.placeholder, s;
      }
      function Jf(e, n, i) {
        n = i ? r : n;
        var s = rn(e, P, r, r, r, r, r, n);
        return s.placeholder = Jf.placeholder, s;
      }
      function Ef(e, n, i) {
        var s, u, p, m, v, g, M = 0, Z = !1, J = !1, I = !0;
        if (typeof e != "function")
          throw new Rt(d);
        n = Zt(n) || 0, ve(i) && (Z = !!i.leading, J = "maxWait" in i, p = J ? Ee(Zt(i.maxWait) || 0, n) : p, I = "trailing" in i ? !!i.trailing : I);
        function Q(ye) {
          var It = s, cn = u;
          return s = u = r, M = ye, m = e.apply(cn, It), m;
        }
        function G(ye) {
          return M = ye, v = bo(ee, n), Z ? Q(ye) : m;
        }
        function L(ye) {
          var It = ye - g, cn = ye - M, Xf = n - It;
          return J ? ze(Xf, p - cn) : Xf;
        }
        function Y(ye) {
          var It = ye - g, cn = ye - M;
          return g === r || It >= n || It < 0 || J && cn >= p;
        }
        function ee() {
          var ye = aa();
          if (Y(ye))
            return ne(ye);
          v = bo(ee, L(ye));
        }
        function ne(ye) {
          return v = r, I && s ? Q(ye) : (s = u = r, m);
        }
        function ft() {
          v !== r && Dd(v), M = 0, s = g = u = v = r;
        }
        function qe() {
          return v === r ? m : ne(aa());
        }
        function ht() {
          var ye = aa(), It = Y(ye);
          if (s = arguments, u = this, g = ye, It) {
            if (v === r)
              return G(g);
            if (J)
              return Dd(v), v = bo(ee, n), Q(g);
          }
          return v === r && (v = bo(ee, n)), m;
        }
        return ht.cancel = ft, ht.flush = qe, ht;
      }
      var ig = q(function(e, n) {
        return Vd(e, 1, n);
      }), ag = q(function(e, n, i) {
        return Vd(e, Zt(n) || 0, i);
      });
      function sg(e) {
        return rn(e, he);
      }
      function sa(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new Rt(d);
        var i = function() {
          var s = arguments, u = n ? n.apply(this, s) : s[0], p = i.cache;
          if (p.has(u))
            return p.get(u);
          var m = e.apply(this, s);
          return i.cache = p.set(u, m) || p, m;
        };
        return i.cache = new (sa.Cache || tn)(), i;
      }
      sa.Cache = tn;
      function la(e) {
        if (typeof e != "function")
          throw new Rt(d);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, n[0]);
            case 2:
              return !e.call(this, n[0], n[1]);
            case 3:
              return !e.call(this, n[0], n[1], n[2]);
          }
          return !e.apply(this, n);
        };
      }
      function lg(e) {
        return Mf(2, e);
      }
      var cg = XV(function(e, n) {
        n = n.length == 1 && j(n[0]) ? me(n[0], ct(z())) : me(De(n, 1), ct(z()));
        var i = n.length;
        return q(function(s) {
          for (var u = -1, p = ze(s.length, i); ++u < p; )
            s[u] = n[u].call(this, s[u]);
          return lt(e, this, s);
        });
      }), Vl = q(function(e, n) {
        var i = Nn(n, br(Vl));
        return rn(e, b, r, n, i);
      }), Sf = q(function(e, n) {
        var i = Nn(n, br(Sf));
        return rn(e, W, r, n, i);
      }), ug = on(function(e, n) {
        return rn(e, O, r, r, r, n);
      });
      function dg(e, n) {
        if (typeof e != "function")
          throw new Rt(d);
        return n = n === r ? n : X(n), q(e, n);
      }
      function fg(e, n) {
        if (typeof e != "function")
          throw new Rt(d);
        return n = n == null ? 0 : Ee(X(n), 0), q(function(i) {
          var s = i[n], u = bn(i, 0, n);
          return s && Rn(u, s), lt(e, this, u);
        });
      }
      function hg(e, n, i) {
        var s = !0, u = !0;
        if (typeof e != "function")
          throw new Rt(d);
        return ve(i) && (s = "leading" in i ? !!i.leading : s, u = "trailing" in i ? !!i.trailing : u), Ef(e, n, {
          leading: s,
          maxWait: n,
          trailing: u
        });
      }
      function pg(e) {
        return kf(e, 1);
      }
      function mg(e, n) {
        return Vl(nl(n), e);
      }
      function wg() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return j(e) ? e : [e];
      }
      function vg(e) {
        return yt(e, F);
      }
      function Vg(e, n) {
        return n = typeof n == "function" ? n : r, yt(e, F, n);
      }
      function Tg(e) {
        return yt(e, R | F);
      }
      function gg(e, n) {
        return n = typeof n == "function" ? n : r, yt(e, R | F, n);
      }
      function Ug(e, n) {
        return n == null || vd(e, n, Ae(n));
      }
      function Bt(e, n) {
        return e === n || e !== e && n !== n;
      }
      var Rg = ea(Gs), Ng = ea(function(e, n) {
        return e >= n;
      }), Ln = Nd(function() {
        return arguments;
      }()) ? Nd : function(e) {
        return ge(e) && le.call(e, "callee") && !cd.call(e, "callee");
      }, j = N.isArray, yg = Gu ? ct(Gu) : AV;
      function tt(e) {
        return e != null && ca(e.length) && !sn(e);
      }
      function Ne(e) {
        return ge(e) && tt(e);
      }
      function kg(e) {
        return e === !0 || e === !1 || ge(e) && Le(e) == so;
      }
      var Jn = Dv || Jl, Mg = Yu ? ct(Yu) : FV;
      function Zg(e) {
        return ge(e) && e.nodeType === 1 && !Jo(e);
      }
      function bg(e) {
        if (e == null)
          return !0;
        if (tt(e) && (j(e) || typeof e == "string" || typeof e.splice == "function" || Jn(e) || Jr(e) || Ln(e)))
          return !e.length;
        var n = Ge(e);
        if (n == Ft || n == Wt)
          return !e.size;
        if (Zo(e))
          return !Hs(e).length;
        for (var i in e)
          if (le.call(e, i))
            return !1;
        return !0;
      }
      function Jg(e, n) {
        return yo(e, n);
      }
      function Eg(e, n, i) {
        i = typeof i == "function" ? i : r;
        var s = i ? i(e, n) : r;
        return s === r ? yo(e, n, r, i) : !!s;
      }
      function Tl(e) {
        if (!ge(e))
          return !1;
        var n = Le(e);
        return n == Ui || n == Kw || typeof e.message == "string" && typeof e.name == "string" && !Jo(e);
      }
      function Sg(e) {
        return typeof e == "number" && dd(e);
      }
      function sn(e) {
        if (!ve(e))
          return !1;
        var n = Le(e);
        return n == Ri || n == Vu || n == qw || n == t1;
      }
      function Af(e) {
        return typeof e == "number" && e == X(e);
      }
      function ca(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Xe;
      }
      function ve(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function ge(e) {
        return e != null && typeof e == "object";
      }
      var Ff = Pu ? ct(Pu) : CV;
      function Ag(e, n) {
        return e === n || Ps(e, n, cl(n));
      }
      function Fg(e, n, i) {
        return i = typeof i == "function" ? i : r, Ps(e, n, cl(n), i);
      }
      function Wg(e) {
        return Wf(e) && e != +e;
      }
      function Cg(e) {
        if (V0(e))
          throw new H(c);
        return yd(e);
      }
      function xg(e) {
        return e === null;
      }
      function Bg(e) {
        return e == null;
      }
      function Wf(e) {
        return typeof e == "number" || ge(e) && Le(e) == co;
      }
      function Jo(e) {
        if (!ge(e) || Le(e) != Kt)
          return !1;
        var n = xi(e);
        if (n === null)
          return !0;
        var i = le.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && Ai.call(i) == Fv;
      }
      var gl = Hu ? ct(Hu) : xV;
      function Ig(e) {
        return Af(e) && e >= -Xe && e <= Xe;
      }
      var Cf = ju ? ct(ju) : BV;
      function ua(e) {
        return typeof e == "string" || !j(e) && ge(e) && Le(e) == fo;
      }
      function dt(e) {
        return typeof e == "symbol" || ge(e) && Le(e) == Ni;
      }
      var Jr = Xu ? ct(Xu) : IV;
      function Dg(e) {
        return e === r;
      }
      function _g(e) {
        return ge(e) && Ge(e) == ho;
      }
      function Og(e) {
        return ge(e) && Le(e) == r1;
      }
      var Qg = ea(js), zg = ea(function(e, n) {
        return e <= n;
      });
      function xf(e) {
        if (!e)
          return [];
        if (tt(e))
          return ua(e) ? Ct(e) : et(e);
        if (wo && e[wo])
          return Uv(e[wo]());
        var n = Ge(e), i = n == Ft ? Cs : n == Wt ? Ji : Er;
        return i(e);
      }
      function ln(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Zt(e), e === Be || e === -Be) {
          var n = e < 0 ? -1 : 1;
          return n * ao;
        }
        return e === e ? e : 0;
      }
      function X(e) {
        var n = ln(e), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function Bf(e) {
        return e ? Pn(X(e), 0, Yt) : 0;
      }
      function Zt(e) {
        if (typeof e == "number")
          return e;
        if (dt(e))
          return Ti;
        if (ve(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = ve(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = td(e);
        var i = y1.test(e);
        return i || M1.test(e) ? ov(e.slice(2), i ? 2 : 8) : N1.test(e) ? Ti : +e;
      }
      function If(e) {
        return Ht(e, nt(e));
      }
      function Gg(e) {
        return e ? Pn(X(e), -Xe, Xe) : e === 0 ? e : 0;
      }
      function ie(e) {
        return e == null ? "" : ut(e);
      }
      var Yg = Mr(function(e, n) {
        if (Zo(n) || tt(n)) {
          Ht(n, Ae(n), e);
          return;
        }
        for (var i in n)
          le.call(n, i) && Uo(e, i, n[i]);
      }), Df = Mr(function(e, n) {
        Ht(n, nt(n), e);
      }), da = Mr(function(e, n, i, s) {
        Ht(n, nt(n), e, s);
      }), Pg = Mr(function(e, n, i, s) {
        Ht(n, Ae(n), e, s);
      }), Hg = on(Os);
      function jg(e, n) {
        var i = kr(e);
        return n == null ? i : wd(i, n);
      }
      var Xg = q(function(e, n) {
        e = de(e);
        var i = -1, s = n.length, u = s > 2 ? n[2] : r;
        for (u && $e(n[0], n[1], u) && (s = 1); ++i < s; )
          for (var p = n[i], m = nt(p), v = -1, g = m.length; ++v < g; ) {
            var M = m[v], Z = e[M];
            (Z === r || Bt(Z, Rr[M]) && !le.call(e, M)) && (e[M] = p[M]);
          }
        return e;
      }), Lg = q(function(e) {
        return e.push(r, tf), lt(_f, r, e);
      });
      function $g(e, n) {
        return $u(e, z(n, 3), Pt);
      }
      function qg(e, n) {
        return $u(e, z(n, 3), zs);
      }
      function Kg(e, n) {
        return e == null ? e : Qs(e, z(n, 3), nt);
      }
      function eU(e, n) {
        return e == null ? e : Ud(e, z(n, 3), nt);
      }
      function tU(e, n) {
        return e && Pt(e, z(n, 3));
      }
      function nU(e, n) {
        return e && zs(e, z(n, 3));
      }
      function rU(e) {
        return e == null ? [] : Pi(e, Ae(e));
      }
      function oU(e) {
        return e == null ? [] : Pi(e, nt(e));
      }
      function Ul(e, n, i) {
        var s = e == null ? r : Hn(e, n);
        return s === r ? i : s;
      }
      function iU(e, n) {
        return e != null && of(e, n, bV);
      }
      function Rl(e, n) {
        return e != null && of(e, n, JV);
      }
      var aU = Ld(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = Fi.call(n)), e[n] = i;
      }, yl(rt)), sU = Ld(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = Fi.call(n)), le.call(e, n) ? e[n].push(i) : e[n] = [i];
      }, z), lU = q(No);
      function Ae(e) {
        return tt(e) ? pd(e) : Hs(e);
      }
      function nt(e) {
        return tt(e) ? pd(e, !0) : DV(e);
      }
      function cU(e, n) {
        var i = {};
        return n = z(n, 3), Pt(e, function(s, u, p) {
          nn(i, n(s, u, p), s);
        }), i;
      }
      function uU(e, n) {
        var i = {};
        return n = z(n, 3), Pt(e, function(s, u, p) {
          nn(i, u, n(s, u, p));
        }), i;
      }
      var dU = Mr(function(e, n, i) {
        Hi(e, n, i);
      }), _f = Mr(function(e, n, i, s) {
        Hi(e, n, i, s);
      }), fU = on(function(e, n) {
        var i = {};
        if (e == null)
          return i;
        var s = !1;
        n = me(n, function(p) {
          return p = Zn(p, e), s || (s = p.length > 1), p;
        }), Ht(e, sl(e), i), s && (i = yt(i, R | y | F, a0));
        for (var u = n.length; u--; )
          Ks(i, n[u]);
        return i;
      });
      function hU(e, n) {
        return Of(e, la(z(n)));
      }
      var pU = on(function(e, n) {
        return e == null ? {} : OV(e, n);
      });
      function Of(e, n) {
        if (e == null)
          return {};
        var i = me(sl(e), function(s) {
          return [s];
        });
        return n = z(n), Sd(e, i, function(s, u) {
          return n(s, u[0]);
        });
      }
      function mU(e, n, i) {
        n = Zn(n, e);
        var s = -1, u = n.length;
        for (u || (u = 1, e = r); ++s < u; ) {
          var p = e == null ? r : e[jt(n[s])];
          p === r && (s = u, p = i), e = sn(p) ? p.call(e) : p;
        }
        return e;
      }
      function wU(e, n, i) {
        return e == null ? e : ko(e, n, i);
      }
      function vU(e, n, i, s) {
        return s = typeof s == "function" ? s : r, e == null ? e : ko(e, n, i, s);
      }
      var Qf = Kd(Ae), zf = Kd(nt);
      function VU(e, n, i) {
        var s = j(e), u = s || Jn(e) || Jr(e);
        if (n = z(n, 4), i == null) {
          var p = e && e.constructor;
          u ? i = s ? new p() : [] : ve(e) ? i = sn(p) ? kr(xi(e)) : {} : i = {};
        }
        return (u ? Ut : Pt)(e, function(m, v, g) {
          return n(i, m, v, g);
        }), i;
      }
      function TU(e, n) {
        return e == null ? !0 : Ks(e, n);
      }
      function gU(e, n, i) {
        return e == null ? e : xd(e, n, nl(i));
      }
      function UU(e, n, i, s) {
        return s = typeof s == "function" ? s : r, e == null ? e : xd(e, n, nl(i), s);
      }
      function Er(e) {
        return e == null ? [] : Ws(e, Ae(e));
      }
      function RU(e) {
        return e == null ? [] : Ws(e, nt(e));
      }
      function NU(e, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = Zt(i), i = i === i ? i : 0), n !== r && (n = Zt(n), n = n === n ? n : 0), Pn(Zt(e), n, i);
      }
      function yU(e, n, i) {
        return n = ln(n), i === r ? (i = n, n = 0) : i = ln(i), e = Zt(e), EV(e, n, i);
      }
      function kU(e, n, i) {
        if (i && typeof i != "boolean" && $e(e, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof e == "boolean" && (i = e, e = r)), e === r && n === r ? (e = 0, n = 1) : (e = ln(e), n === r ? (n = e, e = 0) : n = ln(n)), e > n) {
          var s = e;
          e = n, n = s;
        }
        if (i || e % 1 || n % 1) {
          var u = fd();
          return ze(e + u * (n - e + rv("1e-" + ((u + "").length - 1))), n);
        }
        return Ls(e, n);
      }
      var MU = Zr(function(e, n, i) {
        return n = n.toLowerCase(), e + (i ? Gf(n) : n);
      });
      function Gf(e) {
        return Nl(ie(e).toLowerCase());
      }
      function Yf(e) {
        return e = ie(e), e && e.replace(b1, wv).replace(H1, "");
      }
      function ZU(e, n, i) {
        e = ie(e), n = ut(n);
        var s = e.length;
        i = i === r ? s : Pn(X(i), 0, s);
        var u = i;
        return i -= n.length, i >= 0 && e.slice(i, u) == n;
      }
      function bU(e) {
        return e = ie(e), e && l1.test(e) ? e.replace(Uu, vv) : e;
      }
      function JU(e) {
        return e = ie(e), e && p1.test(e) ? e.replace(Vs, "\\$&") : e;
      }
      var EU = Zr(function(e, n, i) {
        return e + (i ? "-" : "") + n.toLowerCase();
      }), SU = Zr(function(e, n, i) {
        return e + (i ? " " : "") + n.toLowerCase();
      }), AU = Hd("toLowerCase");
      function FU(e, n, i) {
        e = ie(e), n = X(n);
        var s = n ? gr(e) : 0;
        if (!n || s >= n)
          return e;
        var u = (n - s) / 2;
        return Ki(_i(u), i) + e + Ki(Di(u), i);
      }
      function WU(e, n, i) {
        e = ie(e), n = X(n);
        var s = n ? gr(e) : 0;
        return n && s < n ? e + Ki(n - s, i) : e;
      }
      function CU(e, n, i) {
        e = ie(e), n = X(n);
        var s = n ? gr(e) : 0;
        return n && s < n ? Ki(n - s, i) + e : e;
      }
      function xU(e, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), zv(ie(e).replace(Ts, ""), n || 0);
      }
      function BU(e, n, i) {
        return (i ? $e(e, n, i) : n === r) ? n = 1 : n = X(n), $s(ie(e), n);
      }
      function IU() {
        var e = arguments, n = ie(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var DU = Zr(function(e, n, i) {
        return e + (i ? "_" : "") + n.toLowerCase();
      });
      function _U(e, n, i) {
        return i && typeof i != "number" && $e(e, n, i) && (n = i = r), i = i === r ? Yt : i >>> 0, i ? (e = ie(e), e && (typeof n == "string" || n != null && !gl(n)) && (n = ut(n), !n && Tr(e)) ? bn(Ct(e), 0, i) : e.split(n, i)) : [];
      }
      var OU = Zr(function(e, n, i) {
        return e + (i ? " " : "") + Nl(n);
      });
      function QU(e, n, i) {
        return e = ie(e), i = i == null ? 0 : Pn(X(i), 0, e.length), n = ut(n), e.slice(i, i + n.length) == n;
      }
      function zU(e, n, i) {
        var s = f.templateSettings;
        i && $e(e, n, i) && (n = r), e = ie(e), n = da({}, n, s, ef);
        var u = da({}, n.imports, s.imports, ef), p = Ae(u), m = Ws(u, p), v, g, M = 0, Z = n.interpolate || yi, J = "__p += '", I = xs(
          (n.escape || yi).source + "|" + Z.source + "|" + (Z === Ru ? R1 : yi).source + "|" + (n.evaluate || yi).source + "|$",
          "g"
        ), Q = "//# sourceURL=" + (le.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++q1 + "]") + `
`;
        e.replace(I, function(Y, ee, ne, ft, qe, ht) {
          return ne || (ne = ft), J += e.slice(M, ht).replace(J1, Vv), ee && (v = !0, J += `' +
__e(` + ee + `) +
'`), qe && (g = !0, J += `';
` + qe + `;
__p += '`), ne && (J += `' +
((__t = (` + ne + `)) == null ? '' : __t) +
'`), M = ht + Y.length, Y;
        }), J += `';
`;
        var G = le.call(n, "variable") && n.variable;
        if (!G)
          J = `with (obj) {
` + J + `
}
`;
        else if (g1.test(G))
          throw new H(h);
        J = (g ? J.replace(o1, "") : J).replace(i1, "$1").replace(a1, "$1;"), J = "function(" + (G || "obj") + `) {
` + (G ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (g ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var L = Hf(function() {
          return re(p, Q + "return " + J).apply(r, m);
        });
        if (L.source = J, Tl(L))
          throw L;
        return L;
      }
      function GU(e) {
        return ie(e).toLowerCase();
      }
      function YU(e) {
        return ie(e).toUpperCase();
      }
      function PU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return td(e);
        if (!e || !(n = ut(n)))
          return e;
        var s = Ct(e), u = Ct(n), p = nd(s, u), m = rd(s, u) + 1;
        return bn(s, p, m).join("");
      }
      function HU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return e.slice(0, id(e) + 1);
        if (!e || !(n = ut(n)))
          return e;
        var s = Ct(e), u = rd(s, Ct(n)) + 1;
        return bn(s, 0, u).join("");
      }
      function jU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return e.replace(Ts, "");
        if (!e || !(n = ut(n)))
          return e;
        var s = Ct(e), u = nd(s, Ct(n));
        return bn(s, u).join("");
      }
      function XU(e, n) {
        var i = se, s = Ve;
        if (ve(n)) {
          var u = "separator" in n ? n.separator : u;
          i = "length" in n ? X(n.length) : i, s = "omission" in n ? ut(n.omission) : s;
        }
        e = ie(e);
        var p = e.length;
        if (Tr(e)) {
          var m = Ct(e);
          p = m.length;
        }
        if (i >= p)
          return e;
        var v = i - gr(s);
        if (v < 1)
          return s;
        var g = m ? bn(m, 0, v).join("") : e.slice(0, v);
        if (u === r)
          return g + s;
        if (m && (v += g.length - v), gl(u)) {
          if (e.slice(v).search(u)) {
            var M, Z = g;
            for (u.global || (u = xs(u.source, ie(Nu.exec(u)) + "g")), u.lastIndex = 0; M = u.exec(Z); )
              var J = M.index;
            g = g.slice(0, J === r ? v : J);
          }
        } else if (e.indexOf(ut(u), v) != v) {
          var I = g.lastIndexOf(u);
          I > -1 && (g = g.slice(0, I));
        }
        return g + s;
      }
      function LU(e) {
        return e = ie(e), e && s1.test(e) ? e.replace(gu, kv) : e;
      }
      var $U = Zr(function(e, n, i) {
        return e + (i ? " " : "") + n.toUpperCase();
      }), Nl = Hd("toUpperCase");
      function Pf(e, n, i) {
        return e = ie(e), n = i ? r : n, n === r ? gv(e) ? bv(e) : dv(e) : e.match(n) || [];
      }
      var Hf = q(function(e, n) {
        try {
          return lt(e, r, n);
        } catch (i) {
          return Tl(i) ? i : new H(i);
        }
      }), qU = on(function(e, n) {
        return Ut(n, function(i) {
          i = jt(i), nn(e, i, vl(e[i], e));
        }), e;
      });
      function KU(e) {
        var n = e == null ? 0 : e.length, i = z();
        return e = n ? me(e, function(s) {
          if (typeof s[1] != "function")
            throw new Rt(d);
          return [i(s[0]), s[1]];
        }) : [], q(function(s) {
          for (var u = -1; ++u < n; ) {
            var p = e[u];
            if (lt(p[0], this, s))
              return lt(p[1], this, s);
          }
        });
      }
      function eR(e) {
        return kV(yt(e, R));
      }
      function yl(e) {
        return function() {
          return e;
        };
      }
      function tR(e, n) {
        return e == null || e !== e ? n : e;
      }
      var nR = Xd(), rR = Xd(!0);
      function rt(e) {
        return e;
      }
      function kl(e) {
        return kd(typeof e == "function" ? e : yt(e, R));
      }
      function oR(e) {
        return Zd(yt(e, R));
      }
      function iR(e, n) {
        return bd(e, yt(n, R));
      }
      var aR = q(function(e, n) {
        return function(i) {
          return No(i, e, n);
        };
      }), sR = q(function(e, n) {
        return function(i) {
          return No(e, i, n);
        };
      });
      function Ml(e, n, i) {
        var s = Ae(n), u = Pi(n, s);
        i == null && !(ve(n) && (u.length || !s.length)) && (i = n, n = e, e = this, u = Pi(n, Ae(n)));
        var p = !(ve(i) && "chain" in i) || !!i.chain, m = sn(e);
        return Ut(u, function(v) {
          var g = n[v];
          e[v] = g, m && (e.prototype[v] = function() {
            var M = this.__chain__;
            if (p || M) {
              var Z = e(this.__wrapped__), J = Z.__actions__ = et(this.__actions__);
              return J.push({ func: g, args: arguments, thisArg: e }), Z.__chain__ = M, Z;
            }
            return g.apply(e, Rn([this.value()], arguments));
          });
        }), e;
      }
      function lR() {
        return Ie._ === this && (Ie._ = Wv), this;
      }
      function Zl() {
      }
      function cR(e) {
        return e = X(e), q(function(n) {
          return Jd(n, e);
        });
      }
      var uR = ol(me), dR = ol(Lu), fR = ol(Js);
      function jf(e) {
        return dl(e) ? Es(jt(e)) : QV(e);
      }
      function hR(e) {
        return function(n) {
          return e == null ? r : Hn(e, n);
        };
      }
      var pR = $d(), mR = $d(!0);
      function bl() {
        return [];
      }
      function Jl() {
        return !1;
      }
      function wR() {
        return {};
      }
      function vR() {
        return "";
      }
      function VR() {
        return !0;
      }
      function TR(e, n) {
        if (e = X(e), e < 1 || e > Xe)
          return [];
        var i = Yt, s = ze(e, Yt);
        n = z(n), e -= Yt;
        for (var u = Fs(s, n); ++i < e; )
          n(i);
        return u;
      }
      function gR(e) {
        return j(e) ? me(e, jt) : dt(e) ? [e] : et(pf(ie(e)));
      }
      function UR(e) {
        var n = ++Av;
        return ie(e) + n;
      }
      var RR = qi(function(e, n) {
        return e + n;
      }, 0), NR = il("ceil"), yR = qi(function(e, n) {
        return e / n;
      }, 1), kR = il("floor");
      function MR(e) {
        return e && e.length ? Yi(e, rt, Gs) : r;
      }
      function ZR(e, n) {
        return e && e.length ? Yi(e, z(n, 2), Gs) : r;
      }
      function bR(e) {
        return Ku(e, rt);
      }
      function JR(e, n) {
        return Ku(e, z(n, 2));
      }
      function ER(e) {
        return e && e.length ? Yi(e, rt, js) : r;
      }
      function SR(e, n) {
        return e && e.length ? Yi(e, z(n, 2), js) : r;
      }
      var AR = qi(function(e, n) {
        return e * n;
      }, 1), FR = il("round"), WR = qi(function(e, n) {
        return e - n;
      }, 0);
      function CR(e) {
        return e && e.length ? As(e, rt) : 0;
      }
      function xR(e, n) {
        return e && e.length ? As(e, z(n, 2)) : 0;
      }
      return f.after = og, f.ary = kf, f.assign = Yg, f.assignIn = Df, f.assignInWith = da, f.assignWith = Pg, f.at = Hg, f.before = Mf, f.bind = vl, f.bindAll = qU, f.bindKey = Zf, f.castArray = wg, f.chain = Rf, f.chunk = k0, f.compact = M0, f.concat = Z0, f.cond = KU, f.conforms = eR, f.constant = yl, f.countBy = CT, f.create = jg, f.curry = bf, f.curryRight = Jf, f.debounce = Ef, f.defaults = Xg, f.defaultsDeep = Lg, f.defer = ig, f.delay = ag, f.difference = b0, f.differenceBy = J0, f.differenceWith = E0, f.drop = S0, f.dropRight = A0, f.dropRightWhile = F0, f.dropWhile = W0, f.fill = C0, f.filter = BT, f.flatMap = _T, f.flatMapDeep = OT, f.flatMapDepth = QT, f.flatten = Vf, f.flattenDeep = x0, f.flattenDepth = B0, f.flip = sg, f.flow = nR, f.flowRight = rR, f.fromPairs = I0, f.functions = rU, f.functionsIn = oU, f.groupBy = zT, f.initial = _0, f.intersection = O0, f.intersectionBy = Q0, f.intersectionWith = z0, f.invert = aU, f.invertBy = sU, f.invokeMap = YT, f.iteratee = kl, f.keyBy = PT, f.keys = Ae, f.keysIn = nt, f.map = ia, f.mapKeys = cU, f.mapValues = uU, f.matches = oR, f.matchesProperty = iR, f.memoize = sa, f.merge = dU, f.mergeWith = _f, f.method = aR, f.methodOf = sR, f.mixin = Ml, f.negate = la, f.nthArg = cR, f.omit = fU, f.omitBy = hU, f.once = lg, f.orderBy = HT, f.over = uR, f.overArgs = cg, f.overEvery = dR, f.overSome = fR, f.partial = Vl, f.partialRight = Sf, f.partition = jT, f.pick = pU, f.pickBy = Of, f.property = jf, f.propertyOf = hR, f.pull = H0, f.pullAll = gf, f.pullAllBy = j0, f.pullAllWith = X0, f.pullAt = L0, f.range = pR, f.rangeRight = mR, f.rearg = ug, f.reject = $T, f.remove = $0, f.rest = dg, f.reverse = ml, f.sampleSize = KT, f.set = wU, f.setWith = vU, f.shuffle = eg, f.slice = q0, f.sortBy = rg, f.sortedUniq = iT, f.sortedUniqBy = aT, f.split = _U, f.spread = fg, f.tail = sT, f.take = lT, f.takeRight = cT, f.takeRightWhile = uT, f.takeWhile = dT, f.tap = MT, f.throttle = hg, f.thru = oa, f.toArray = xf, f.toPairs = Qf, f.toPairsIn = zf, f.toPath = gR, f.toPlainObject = If, f.transform = VU, f.unary = pg, f.union = fT, f.unionBy = hT, f.unionWith = pT, f.uniq = mT, f.uniqBy = wT, f.uniqWith = vT, f.unset = TU, f.unzip = wl, f.unzipWith = Uf, f.update = gU, f.updateWith = UU, f.values = Er, f.valuesIn = RU, f.without = VT, f.words = Pf, f.wrap = mg, f.xor = TT, f.xorBy = gT, f.xorWith = UT, f.zip = RT, f.zipObject = NT, f.zipObjectDeep = yT, f.zipWith = kT, f.entries = Qf, f.entriesIn = zf, f.extend = Df, f.extendWith = da, Ml(f, f), f.add = RR, f.attempt = Hf, f.camelCase = MU, f.capitalize = Gf, f.ceil = NR, f.clamp = NU, f.clone = vg, f.cloneDeep = Tg, f.cloneDeepWith = gg, f.cloneWith = Vg, f.conformsTo = Ug, f.deburr = Yf, f.defaultTo = tR, f.divide = yR, f.endsWith = ZU, f.eq = Bt, f.escape = bU, f.escapeRegExp = JU, f.every = xT, f.find = IT, f.findIndex = wf, f.findKey = $g, f.findLast = DT, f.findLastIndex = vf, f.findLastKey = qg, f.floor = kR, f.forEach = Nf, f.forEachRight = yf, f.forIn = Kg, f.forInRight = eU, f.forOwn = tU, f.forOwnRight = nU, f.get = Ul, f.gt = Rg, f.gte = Ng, f.has = iU, f.hasIn = Rl, f.head = Tf, f.identity = rt, f.includes = GT, f.indexOf = D0, f.inRange = yU, f.invoke = lU, f.isArguments = Ln, f.isArray = j, f.isArrayBuffer = yg, f.isArrayLike = tt, f.isArrayLikeObject = Ne, f.isBoolean = kg, f.isBuffer = Jn, f.isDate = Mg, f.isElement = Zg, f.isEmpty = bg, f.isEqual = Jg, f.isEqualWith = Eg, f.isError = Tl, f.isFinite = Sg, f.isFunction = sn, f.isInteger = Af, f.isLength = ca, f.isMap = Ff, f.isMatch = Ag, f.isMatchWith = Fg, f.isNaN = Wg, f.isNative = Cg, f.isNil = Bg, f.isNull = xg, f.isNumber = Wf, f.isObject = ve, f.isObjectLike = ge, f.isPlainObject = Jo, f.isRegExp = gl, f.isSafeInteger = Ig, f.isSet = Cf, f.isString = ua, f.isSymbol = dt, f.isTypedArray = Jr, f.isUndefined = Dg, f.isWeakMap = _g, f.isWeakSet = Og, f.join = G0, f.kebabCase = EU, f.last = Mt, f.lastIndexOf = Y0, f.lowerCase = SU, f.lowerFirst = AU, f.lt = Qg, f.lte = zg, f.max = MR, f.maxBy = ZR, f.mean = bR, f.meanBy = JR, f.min = ER, f.minBy = SR, f.stubArray = bl, f.stubFalse = Jl, f.stubObject = wR, f.stubString = vR, f.stubTrue = VR, f.multiply = AR, f.nth = P0, f.noConflict = lR, f.noop = Zl, f.now = aa, f.pad = FU, f.padEnd = WU, f.padStart = CU, f.parseInt = xU, f.random = kU, f.reduce = XT, f.reduceRight = LT, f.repeat = BU, f.replace = IU, f.result = mU, f.round = FR, f.runInContext = T, f.sample = qT, f.size = tg, f.snakeCase = DU, f.some = ng, f.sortedIndex = K0, f.sortedIndexBy = eT, f.sortedIndexOf = tT, f.sortedLastIndex = nT, f.sortedLastIndexBy = rT, f.sortedLastIndexOf = oT, f.startCase = OU, f.startsWith = QU, f.subtract = WR, f.sum = CR, f.sumBy = xR, f.template = zU, f.times = TR, f.toFinite = ln, f.toInteger = X, f.toLength = Bf, f.toLower = GU, f.toNumber = Zt, f.toSafeInteger = Gg, f.toString = ie, f.toUpper = YU, f.trim = PU, f.trimEnd = HU, f.trimStart = jU, f.truncate = XU, f.unescape = LU, f.uniqueId = UR, f.upperCase = $U, f.upperFirst = Nl, f.each = Nf, f.eachRight = yf, f.first = Tf, Ml(f, function() {
        var e = {};
        return Pt(f, function(n, i) {
          le.call(f.prototype, i) || (e[i] = n);
        }), e;
      }(), { chain: !1 }), f.VERSION = a, Ut(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        f[e].placeholder = f;
      }), Ut(["drop", "take"], function(e, n) {
        te.prototype[e] = function(i) {
          i = i === r ? 1 : Ee(X(i), 0);
          var s = this.__filtered__ && !n ? new te(this) : this.clone();
          return s.__filtered__ ? s.__takeCount__ = ze(i, s.__takeCount__) : s.__views__.push({
            size: ze(i, Yt),
            type: e + (s.__dir__ < 0 ? "Right" : "")
          }), s;
        }, te.prototype[e + "Right"] = function(i) {
          return this.reverse()[e](i).reverse();
        };
      }), Ut(["filter", "map", "takeWhile"], function(e, n) {
        var i = n + 1, s = i == Ze || i == xe;
        te.prototype[e] = function(u) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: z(u, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || s, p;
        };
      }), Ut(["head", "last"], function(e, n) {
        var i = "take" + (n ? "Right" : "");
        te.prototype[e] = function() {
          return this[i](1).value()[0];
        };
      }), Ut(["initial", "tail"], function(e, n) {
        var i = "drop" + (n ? "" : "Right");
        te.prototype[e] = function() {
          return this.__filtered__ ? new te(this) : this[i](1);
        };
      }), te.prototype.compact = function() {
        return this.filter(rt);
      }, te.prototype.find = function(e) {
        return this.filter(e).head();
      }, te.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, te.prototype.invokeMap = q(function(e, n) {
        return typeof e == "function" ? new te(this) : this.map(function(i) {
          return No(i, e, n);
        });
      }), te.prototype.reject = function(e) {
        return this.filter(la(z(e)));
      }, te.prototype.slice = function(e, n) {
        e = X(e);
        var i = this;
        return i.__filtered__ && (e > 0 || n < 0) ? new te(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), n !== r && (n = X(n), i = n < 0 ? i.dropRight(-n) : i.take(n - e)), i);
      }, te.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, te.prototype.toArray = function() {
        return this.take(Yt);
      }, Pt(te.prototype, function(e, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), s = /^(?:head|last)$/.test(n), u = f[s ? "take" + (n == "last" ? "Right" : "") : n], p = s || /^find/.test(n);
        !u || (f.prototype[n] = function() {
          var m = this.__wrapped__, v = s ? [1] : arguments, g = m instanceof te, M = v[0], Z = g || j(m), J = function(ee) {
            var ne = u.apply(f, Rn([ee], v));
            return s && I ? ne[0] : ne;
          };
          Z && i && typeof M == "function" && M.length != 1 && (g = Z = !1);
          var I = this.__chain__, Q = !!this.__actions__.length, G = p && !I, L = g && !Q;
          if (!p && Z) {
            m = L ? m : new te(this);
            var Y = e.apply(m, v);
            return Y.__actions__.push({ func: oa, args: [J], thisArg: r }), new Nt(Y, I);
          }
          return G && L ? e.apply(this, v) : (Y = this.thru(J), G ? s ? Y.value()[0] : Y.value() : Y);
        });
      }), Ut(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = Ei[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(e);
        f.prototype[e] = function() {
          var u = arguments;
          if (s && !this.__chain__) {
            var p = this.value();
            return n.apply(j(p) ? p : [], u);
          }
          return this[i](function(m) {
            return n.apply(j(m) ? m : [], u);
          });
        };
      }), Pt(te.prototype, function(e, n) {
        var i = f[n];
        if (i) {
          var s = i.name + "";
          le.call(yr, s) || (yr[s] = []), yr[s].push({ name: n, func: i });
        }
      }), yr[$i(r, E).name] = [{
        name: "wrapper",
        func: r
      }], te.prototype.clone = Lv, te.prototype.reverse = $v, te.prototype.value = qv, f.prototype.at = ZT, f.prototype.chain = bT, f.prototype.commit = JT, f.prototype.next = ET, f.prototype.plant = AT, f.prototype.reverse = FT, f.prototype.toJSON = f.prototype.valueOf = f.prototype.value = WT, f.prototype.first = f.prototype.head, wo && (f.prototype[wo] = ST), f;
    }, Ur = Jv();
    Qn ? ((Qn.exports = Ur)._ = Ur, ks._ = Ur) : Ie._ = Ur;
  }).call(Eo);
})(we, we.exports);
const ny = "/alarms?_s=", ts = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, ry = async (t, o) => {
  try {
    return (await gn.put(
      `/alarms/${t}?ack=${o}`,
      {
        body: `alarm=${t}`
      },
      ts
    )).status === 204;
  } catch {
    return !1;
  }
}, oy = async (t, o) => {
  try {
    return (await gn.put(
      `/alarms/${t}?${o}=true`,
      {
        body: `alarm=${t}`
      },
      ts
    )).status === 204;
  } catch {
    return !1;
  }
}, iy = async (t, o) => {
  try {
    const r = t.join(",alarm.id==");
    return (await Tn.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      ts
    )).status == 204;
  } catch {
    return !1;
  }
}, ay = async () => {
  try {
    const t = `${ny}isSituation==true&limit=0`, o = await Tn(t);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, sy = async (t) => {
  try {
    const o = t.join(",id=="), r = await Tn(`/alarms?_s=id==${o}`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Qm = async (t) => {
  try {
    const o = await Tn(`/alarms/${t}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, ly = async (t) => {
  try {
    const o = await Tn(`/events?_s=alarm.id==${t}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, cy = async () => {
  try {
    const t = await Tn("/nodes?limit=0");
    return t.status === 200 ? t.data.node.map((a) => we.exports.pick(a, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, uy = async (t, o, r) => {
  try {
    return (await Tn.put(
      `/alarms/${t}/${o}`,
      `body=${r}`,
      ts
    )).status == 204;
  } catch {
    return !1;
  }
}, dy = async (t, o) => {
  try {
    return (await Tn.delete(`/alarms/${t}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, fy = async () => {
  try {
    const t = await Tn.get("alarms?_s=isInSituation==false");
    return t.status === 200 ? t.data.alarm : !1;
  } catch {
    return !1;
  }
}, vt = {
  ENGINE_DBSCAN: "dbscan",
  ENGINE_DEEP_LEARNING: "cluster",
  HELLINGER_OPTION: "hellinger",
  SPACE_DISTANCE_OPTION: "alarminspaceandtimedistance",
  DATE_FORMAT: "d/M/y HH:mm:ss",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  ESCALATE: "escalate",
  CLEAR: "clear"
}, hy = "/alec", py = "/alec/engine/configuration", zm = "/alec/agreement/configuration", my = "/alec/situation/statusList", wy = "/alec/situation", Gm = async (t) => {
  try {
    return (await gn.post(`${zm}`, {
      agreed: t
    })).status === 201;
  } catch {
    return !1;
  }
}, vy = async () => {
  try {
    const t = await gn.get(`${zm}`);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, Vy = async (t, o) => {
  try {
    return (await gn.post(py, {
      distanceMeasureName: o ? vt.HELLINGER_OPTION : vt.SPACE_DISTANCE_OPTION,
      engineName: t,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, Ym = async (t, o) => {
  try {
    return (await gn.post(`${hy}/situation/${o}/${t}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, Ty = async () => {
  try {
    const t = await gn.get(my);
    return t.status === 200, t.data;
  } catch {
    return !1;
  }
}, gy = async (t) => {
  try {
    return (await gn.post(wy, t)).status === 200;
  } catch {
    return !1;
  }
}, Uy = window.Pinia.defineStore, fr = Uy("situationsStore", {
  state: () => ({
    situations: [],
    selectedSituation: -1,
    situationDetail: null,
    filteredSituations: [],
    nodes: [],
    filters: null,
    unassignedAlarms: []
  }),
  actions: {
    async getNodes() {
      this.nodes = [];
      const t = await cy();
      t && (this.nodes = t);
    },
    async getSituations() {
      this.situations = [];
      const t = await ay(), o = await Ty();
      if (t) {
        const r = t.alarm.map((c) => {
          const d = o.filter(
            (h) => parseInt(h.id) === c.id
          );
          return c.status = d && d[0] ? d[0].status : "CREATED", c;
        });
        this.filteredSituations = r.map((c) => c.id);
        const a = we.exports.groupBy(r, "status"), l = [
          ...a.CREATED || [],
          ...a.ACCEPTED || [],
          ...a.REJECTED || []
        ];
        this.situations = l;
      }
    },
    async getSituation(t) {
      if (t) {
        const o = await Qm(t);
        if (o) {
          const r = o.relatedAlarms.map((c) => c.id), l = await sy(r);
          o.alarms = we.exports.sortBy(l, ["id"]), this.situationDetail = o;
        }
      }
    },
    async getEvents(t, o) {
      const r = {};
      await Promise.all(
        o.map(async (a) => {
          const l = await ly(a);
          l && (r[a] = we.exports.reverse(l));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const t = await fy();
      t && (this.unassignedAlarms = t);
    }
  }
}), Ry = window.Vue.openBlock, Ny = window.Vue.createElementBlock, yy = window.Vue.createElementVNode;
var ky = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const My = {}, Zy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, by = /* @__PURE__ */ yy("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), Jy = [
  by
];
function Ey(t, o) {
  return Ry(), Ny("svg", Zy, Jy);
}
var ai = /* @__PURE__ */ ky(My, [["render", Ey]]);
var Sy = Object.defineProperty, Th = Object.getOwnPropertySymbols, Ay = Object.prototype.hasOwnProperty, Fy = Object.prototype.propertyIsEnumerable, gh = (t, o, r) => o in t ? Sy(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Uh = (t, o) => {
  for (var r in o || (o = {}))
    Ay.call(o, r) && gh(t, r, o[r]);
  if (Th)
    for (var r of Th(o))
      Fy.call(o, r) && gh(t, r, o[r]);
  return t;
};
const Wy = window.Vue.defineComponent, Cy = window.Vue.toRaw, Yl = window.Vue.h;
var xy = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const By = {
  icon: {
    type: Object,
    required: !1
  },
  flex: {
    type: Boolean,
    default: !1
  },
  title: {
    type: String,
    required: !1
  }
}, Iy = Wy({
  props: By,
  render() {
    const t = this.$attrs, o = t.class ? t.class.split(" ").reduce((l, c) => (l[c] = !0, l), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let a = Cy(this.icon);
    return this.$slots.default ? Yl("span", { class: "feather-icon-container" }, [
      Yl(this.$slots.default()[0], Uh({
        class: o
      }, r))
    ]) : Yl(a, Uh({
      class: o
    }, r));
  }
});
var $ = /* @__PURE__ */ xy(Iy, [["__scopeId", "data-v-52cbf270"]]);
const Dy = window.Vue.openBlock, _y = window.Vue.createElementBlock, Oy = window.Vue.createElementVNode;
var Qy = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const zy = {}, Gy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Yy = /* @__PURE__ */ Oy("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), Py = [
  Yy
];
function Hy(t, o) {
  return Dy(), _y("svg", Gy, Py);
}
var Pm = /* @__PURE__ */ Qy(zy, [["render", Hy]]);
function cr(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var o = Number(t);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function Qe(t, o) {
  if (o.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function je(t) {
  Qe(1, arguments);
  var o = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && o === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || o === "[object Number]" ? new Date(t) : ((typeof t == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function jy(t, o) {
  Qe(2, arguments);
  var r = je(t).getTime(), a = cr(o);
  return new Date(r + a);
}
var Xy = {};
function si() {
  return Xy;
}
function Zc(t) {
  var o = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return o.setUTCFullYear(t.getFullYear()), t.getTime() - o.getTime();
}
function Ly(t, o) {
  Qe(2, arguments);
  var r = je(t), a = je(o), l = r.getTime() - a.getTime();
  return l < 0 ? -1 : l > 0 ? 1 : l;
}
function $y(t) {
  return Qe(1, arguments), t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function qy(t) {
  if (Qe(1, arguments), !$y(t) && typeof t != "number")
    return !1;
  var o = je(t);
  return !isNaN(Number(o));
}
function Ky(t, o) {
  Qe(2, arguments);
  var r = cr(o);
  return jy(t, -r);
}
var ek = 864e5;
function tk(t) {
  Qe(1, arguments);
  var o = je(t), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var a = o.getTime(), l = r - a;
  return Math.floor(l / ek) + 1;
}
function Oa(t) {
  Qe(1, arguments);
  var o = 1, r = je(t), a = r.getUTCDay(), l = (a < o ? 7 : 0) + a - o;
  return r.setUTCDate(r.getUTCDate() - l), r.setUTCHours(0, 0, 0, 0), r;
}
function Hm(t) {
  Qe(1, arguments);
  var o = je(t), r = o.getUTCFullYear(), a = new Date(0);
  a.setUTCFullYear(r + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var l = Oa(a), c = new Date(0);
  c.setUTCFullYear(r, 0, 4), c.setUTCHours(0, 0, 0, 0);
  var d = Oa(c);
  return o.getTime() >= l.getTime() ? r + 1 : o.getTime() >= d.getTime() ? r : r - 1;
}
function nk(t) {
  Qe(1, arguments);
  var o = Hm(t), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = Oa(r);
  return a;
}
var rk = 6048e5;
function ok(t) {
  Qe(1, arguments);
  var o = je(t), r = Oa(o).getTime() - nk(o).getTime();
  return Math.round(r / rk) + 1;
}
function Qa(t, o) {
  var r, a, l, c, d, h, w, V;
  Qe(1, arguments);
  var U = si(), R = cr((r = (a = (l = (c = o == null ? void 0 : o.weekStartsOn) !== null && c !== void 0 ? c : o == null || (d = o.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && l !== void 0 ? l : U.weekStartsOn) !== null && a !== void 0 ? a : (w = U.locale) === null || w === void 0 || (V = w.options) === null || V === void 0 ? void 0 : V.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = je(t), F = y.getUTCDay(), S = (F < R ? 7 : 0) + F - R;
  return y.setUTCDate(y.getUTCDate() - S), y.setUTCHours(0, 0, 0, 0), y;
}
function jm(t, o) {
  var r, a, l, c, d, h, w, V;
  Qe(1, arguments);
  var U = je(t), R = U.getUTCFullYear(), y = si(), F = cr((r = (a = (l = (c = o == null ? void 0 : o.firstWeekContainsDate) !== null && c !== void 0 ? c : o == null || (d = o.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && l !== void 0 ? l : y.firstWeekContainsDate) !== null && a !== void 0 ? a : (w = y.locale) === null || w === void 0 || (V = w.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(F >= 1 && F <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var S = new Date(0);
  S.setUTCFullYear(R + 1, 0, F), S.setUTCHours(0, 0, 0, 0);
  var C = Qa(S, o), D = new Date(0);
  D.setUTCFullYear(R, 0, F), D.setUTCHours(0, 0, 0, 0);
  var E = Qa(D, o);
  return U.getTime() >= C.getTime() ? R + 1 : U.getTime() >= E.getTime() ? R : R - 1;
}
function ik(t, o) {
  var r, a, l, c, d, h, w, V;
  Qe(1, arguments);
  var U = si(), R = cr((r = (a = (l = (c = o == null ? void 0 : o.firstWeekContainsDate) !== null && c !== void 0 ? c : o == null || (d = o.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && l !== void 0 ? l : U.firstWeekContainsDate) !== null && a !== void 0 ? a : (w = U.locale) === null || w === void 0 || (V = w.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = jm(t, o), F = new Date(0);
  F.setUTCFullYear(y, 0, R), F.setUTCHours(0, 0, 0, 0);
  var S = Qa(F, o);
  return S;
}
var ak = 6048e5;
function sk(t, o) {
  Qe(1, arguments);
  var r = je(t), a = Qa(r, o).getTime() - ik(r, o).getTime();
  return Math.round(a / ak) + 1;
}
function ce(t, o) {
  for (var r = t < 0 ? "-" : "", a = Math.abs(t).toString(); a.length < o; )
    a = "0" + a;
  return r + a;
}
var lk = {
  y: function(t, o) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return ce(o === "yy" ? a % 100 : a, o.length);
  },
  M: function(t, o) {
    var r = t.getUTCMonth();
    return o === "M" ? String(r + 1) : ce(r + 1, 2);
  },
  d: function(t, o) {
    return ce(t.getUTCDate(), o.length);
  },
  a: function(t, o) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (o) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(t, o) {
    return ce(t.getUTCHours() % 12 || 12, o.length);
  },
  H: function(t, o) {
    return ce(t.getUTCHours(), o.length);
  },
  m: function(t, o) {
    return ce(t.getUTCMinutes(), o.length);
  },
  s: function(t, o) {
    return ce(t.getUTCSeconds(), o.length);
  },
  S: function(t, o) {
    var r = o.length, a = t.getUTCMilliseconds(), l = Math.floor(a * Math.pow(10, r - 3));
    return ce(l, o.length);
  }
};
const En = lk;
var Fr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ck = {
  G: function(t, o, r) {
    var a = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (o) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(a, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(a, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(a, {
          width: "wide"
        });
    }
  },
  y: function(t, o, r) {
    if (o === "yo") {
      var a = t.getUTCFullYear(), l = a > 0 ? a : 1 - a;
      return r.ordinalNumber(l, {
        unit: "year"
      });
    }
    return En.y(t, o);
  },
  Y: function(t, o, r, a) {
    var l = jm(t, a), c = l > 0 ? l : 1 - l;
    if (o === "YY") {
      var d = c % 100;
      return ce(d, 2);
    }
    return o === "Yo" ? r.ordinalNumber(c, {
      unit: "year"
    }) : ce(c, o.length);
  },
  R: function(t, o) {
    var r = Hm(t);
    return ce(r, o.length);
  },
  u: function(t, o) {
    var r = t.getUTCFullYear();
    return ce(r, o.length);
  },
  Q: function(t, o, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (o) {
      case "Q":
        return String(a);
      case "QQ":
        return ce(a, 2);
      case "Qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(t, o, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (o) {
      case "q":
        return String(a);
      case "qq":
        return ce(a, 2);
      case "qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(t, o, r) {
    var a = t.getUTCMonth();
    switch (o) {
      case "M":
      case "MM":
        return En.M(t, o);
      case "Mo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(a, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(t, o, r) {
    var a = t.getUTCMonth();
    switch (o) {
      case "L":
        return String(a + 1);
      case "LL":
        return ce(a + 1, 2);
      case "Lo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(a, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(t, o, r, a) {
    var l = sk(t, a);
    return o === "wo" ? r.ordinalNumber(l, {
      unit: "week"
    }) : ce(l, o.length);
  },
  I: function(t, o, r) {
    var a = ok(t);
    return o === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : ce(a, o.length);
  },
  d: function(t, o, r) {
    return o === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : En.d(t, o);
  },
  D: function(t, o, r) {
    var a = tk(t);
    return o === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : ce(a, o.length);
  },
  E: function(t, o, r) {
    var a = t.getUTCDay();
    switch (o) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(t, o, r, a) {
    var l = t.getUTCDay(), c = (l - a.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "e":
        return String(c);
      case "ee":
        return ce(c, 2);
      case "eo":
        return r.ordinalNumber(c, {
          unit: "day"
        });
      case "eee":
        return r.day(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(l, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(l, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(t, o, r, a) {
    var l = t.getUTCDay(), c = (l - a.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "c":
        return String(c);
      case "cc":
        return ce(c, o.length);
      case "co":
        return r.ordinalNumber(c, {
          unit: "day"
        });
      case "ccc":
        return r.day(l, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(l, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(l, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(l, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(t, o, r) {
    var a = t.getUTCDay(), l = a === 0 ? 7 : a;
    switch (o) {
      case "i":
        return String(l);
      case "ii":
        return ce(l, o.length);
      case "io":
        return r.ordinalNumber(l, {
          unit: "day"
        });
      case "iii":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(t, o, r) {
    var a = t.getUTCHours(), l = a / 12 >= 1 ? "pm" : "am";
    switch (o) {
      case "a":
      case "aa":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(t, o, r) {
    var a = t.getUTCHours(), l;
    switch (a === 12 ? l = Fr.noon : a === 0 ? l = Fr.midnight : l = a / 12 >= 1 ? "pm" : "am", o) {
      case "b":
      case "bb":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(t, o, r) {
    var a = t.getUTCHours(), l;
    switch (a >= 17 ? l = Fr.evening : a >= 12 ? l = Fr.afternoon : a >= 4 ? l = Fr.morning : l = Fr.night, o) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(t, o, r) {
    if (o === "ho") {
      var a = t.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return En.h(t, o);
  },
  H: function(t, o, r) {
    return o === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : En.H(t, o);
  },
  K: function(t, o, r) {
    var a = t.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : ce(a, o.length);
  },
  k: function(t, o, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), o === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : ce(a, o.length);
  },
  m: function(t, o, r) {
    return o === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : En.m(t, o);
  },
  s: function(t, o, r) {
    return o === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : En.s(t, o);
  },
  S: function(t, o) {
    return En.S(t, o);
  },
  X: function(t, o, r, a) {
    var l = a._originalDate || t, c = l.getTimezoneOffset();
    if (c === 0)
      return "Z";
    switch (o) {
      case "X":
        return Nh(c);
      case "XXXX":
      case "XX":
        return ir(c);
      case "XXXXX":
      case "XXX":
      default:
        return ir(c, ":");
    }
  },
  x: function(t, o, r, a) {
    var l = a._originalDate || t, c = l.getTimezoneOffset();
    switch (o) {
      case "x":
        return Nh(c);
      case "xxxx":
      case "xx":
        return ir(c);
      case "xxxxx":
      case "xxx":
      default:
        return ir(c, ":");
    }
  },
  O: function(t, o, r, a) {
    var l = a._originalDate || t, c = l.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Rh(c, ":");
      case "OOOO":
      default:
        return "GMT" + ir(c, ":");
    }
  },
  z: function(t, o, r, a) {
    var l = a._originalDate || t, c = l.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Rh(c, ":");
      case "zzzz":
      default:
        return "GMT" + ir(c, ":");
    }
  },
  t: function(t, o, r, a) {
    var l = a._originalDate || t, c = Math.floor(l.getTime() / 1e3);
    return ce(c, o.length);
  },
  T: function(t, o, r, a) {
    var l = a._originalDate || t, c = l.getTime();
    return ce(c, o.length);
  }
};
function Rh(t, o) {
  var r = t > 0 ? "-" : "+", a = Math.abs(t), l = Math.floor(a / 60), c = a % 60;
  if (c === 0)
    return r + String(l);
  var d = o || "";
  return r + String(l) + d + ce(c, 2);
}
function Nh(t, o) {
  if (t % 60 === 0) {
    var r = t > 0 ? "-" : "+";
    return r + ce(Math.abs(t) / 60, 2);
  }
  return ir(t, o);
}
function ir(t, o) {
  var r = o || "", a = t > 0 ? "-" : "+", l = Math.abs(t), c = ce(Math.floor(l / 60), 2), d = ce(l % 60, 2);
  return a + c + r + d;
}
const uk = ck;
var yh = function(t, o) {
  switch (t) {
    case "P":
      return o.date({
        width: "short"
      });
    case "PP":
      return o.date({
        width: "medium"
      });
    case "PPP":
      return o.date({
        width: "long"
      });
    case "PPPP":
    default:
      return o.date({
        width: "full"
      });
  }
}, Xm = function(t, o) {
  switch (t) {
    case "p":
      return o.time({
        width: "short"
      });
    case "pp":
      return o.time({
        width: "medium"
      });
    case "ppp":
      return o.time({
        width: "long"
      });
    case "pppp":
    default:
      return o.time({
        width: "full"
      });
  }
}, dk = function(t, o) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], l = r[2];
  if (!l)
    return yh(t, o);
  var c;
  switch (a) {
    case "P":
      c = o.dateTime({
        width: "short"
      });
      break;
    case "PP":
      c = o.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      c = o.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      c = o.dateTime({
        width: "full"
      });
      break;
  }
  return c.replace("{{date}}", yh(a, o)).replace("{{time}}", Xm(l, o));
}, fk = {
  p: Xm,
  P: dk
};
const hk = fk;
var pk = ["D", "DD"], mk = ["YY", "YYYY"];
function wk(t) {
  return pk.indexOf(t) !== -1;
}
function vk(t) {
  return mk.indexOf(t) !== -1;
}
function kh(t, o, r) {
  if (t === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Vk = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Tk = function(t, o, r) {
  var a, l = Vk[t];
  return typeof l == "string" ? a = l : o === 1 ? a = l.one : a = l.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const gk = Tk;
function Pl(t) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : t.defaultWidth, a = t.formats[r] || t.formats[t.defaultWidth];
    return a;
  };
}
var Uk = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Rk = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Nk = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, yk = {
  date: Pl({
    formats: Uk,
    defaultWidth: "full"
  }),
  time: Pl({
    formats: Rk,
    defaultWidth: "full"
  }),
  dateTime: Pl({
    formats: Nk,
    defaultWidth: "full"
  })
};
const kk = yk;
var Mk = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Zk = function(t, o, r, a) {
  return Mk[t];
};
const bk = Zk;
function So(t) {
  return function(o, r) {
    var a = r != null && r.context ? String(r.context) : "standalone", l;
    if (a === "formatting" && t.formattingValues) {
      var c = t.defaultFormattingWidth || t.defaultWidth, d = r != null && r.width ? String(r.width) : c;
      l = t.formattingValues[d] || t.formattingValues[c];
    } else {
      var h = t.defaultWidth, w = r != null && r.width ? String(r.width) : t.defaultWidth;
      l = t.values[w] || t.values[h];
    }
    var V = t.argumentCallback ? t.argumentCallback(o) : o;
    return l[V];
  };
}
var Jk = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Ek = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Sk = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Ak = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Fk = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Wk = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Ck = function(t, o) {
  var r = Number(t), a = r % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, xk = {
  ordinalNumber: Ck,
  era: So({
    values: Jk,
    defaultWidth: "wide"
  }),
  quarter: So({
    values: Ek,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: So({
    values: Sk,
    defaultWidth: "wide"
  }),
  day: So({
    values: Ak,
    defaultWidth: "wide"
  }),
  dayPeriod: So({
    values: Fk,
    defaultWidth: "wide",
    formattingValues: Wk,
    defaultFormattingWidth: "wide"
  })
};
const Bk = xk;
function Ao(t) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.width, l = a && t.matchPatterns[a] || t.matchPatterns[t.defaultMatchWidth], c = o.match(l);
    if (!c)
      return null;
    var d = c[0], h = a && t.parsePatterns[a] || t.parsePatterns[t.defaultParseWidth], w = Array.isArray(h) ? Dk(h, function(R) {
      return R.test(d);
    }) : Ik(h, function(R) {
      return R.test(d);
    }), V;
    V = t.valueCallback ? t.valueCallback(w) : w, V = r.valueCallback ? r.valueCallback(V) : V;
    var U = o.slice(d.length);
    return {
      value: V,
      rest: U
    };
  };
}
function Ik(t, o) {
  for (var r in t)
    if (t.hasOwnProperty(r) && o(t[r]))
      return r;
}
function Dk(t, o) {
  for (var r = 0; r < t.length; r++)
    if (o(t[r]))
      return r;
}
function _k(t) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = o.match(t.matchPattern);
    if (!a)
      return null;
    var l = a[0], c = o.match(t.parsePattern);
    if (!c)
      return null;
    var d = t.valueCallback ? t.valueCallback(c[0]) : c[0];
    d = r.valueCallback ? r.valueCallback(d) : d;
    var h = o.slice(l.length);
    return {
      value: d,
      rest: h
    };
  };
}
var Ok = /^(\d+)(th|st|nd|rd)?/i, Qk = /\d+/i, zk = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Gk = {
  any: [/^b/i, /^(a|c)/i]
}, Yk = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Pk = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Hk = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, jk = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Xk = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Lk = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, $k = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, qk = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Kk = {
  ordinalNumber: _k({
    matchPattern: Ok,
    parsePattern: Qk,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Ao({
    matchPatterns: zk,
    defaultMatchWidth: "wide",
    parsePatterns: Gk,
    defaultParseWidth: "any"
  }),
  quarter: Ao({
    matchPatterns: Yk,
    defaultMatchWidth: "wide",
    parsePatterns: Pk,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Ao({
    matchPatterns: Hk,
    defaultMatchWidth: "wide",
    parsePatterns: jk,
    defaultParseWidth: "any"
  }),
  day: Ao({
    matchPatterns: Xk,
    defaultMatchWidth: "wide",
    parsePatterns: Lk,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ao({
    matchPatterns: $k,
    defaultMatchWidth: "any",
    parsePatterns: qk,
    defaultParseWidth: "any"
  })
};
const eM = Kk;
var tM = {
  code: "en-US",
  formatDistance: gk,
  formatLong: kk,
  formatRelative: bk,
  localize: Bk,
  match: eM,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Lm = tM;
var nM = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, rM = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, oM = /^'([^]*?)'?$/, iM = /''/g, aM = /[a-zA-Z]/;
function sM(t, o, r) {
  var a, l, c, d, h, w, V, U, R, y, F, S, C, D, E, B, x, P;
  Qe(2, arguments);
  var b = String(o), W = si(), A = (a = (l = r == null ? void 0 : r.locale) !== null && l !== void 0 ? l : W.locale) !== null && a !== void 0 ? a : Lm, O = cr((c = (d = (h = (w = r == null ? void 0 : r.firstWeekContainsDate) !== null && w !== void 0 ? w : r == null || (V = r.locale) === null || V === void 0 || (U = V.options) === null || U === void 0 ? void 0 : U.firstWeekContainsDate) !== null && h !== void 0 ? h : W.firstWeekContainsDate) !== null && d !== void 0 ? d : (R = W.locale) === null || R === void 0 || (y = R.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && c !== void 0 ? c : 1);
  if (!(O >= 1 && O <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var he = cr((F = (S = (C = (D = r == null ? void 0 : r.weekStartsOn) !== null && D !== void 0 ? D : r == null || (E = r.locale) === null || E === void 0 || (B = E.options) === null || B === void 0 ? void 0 : B.weekStartsOn) !== null && C !== void 0 ? C : W.weekStartsOn) !== null && S !== void 0 ? S : (x = W.locale) === null || x === void 0 || (P = x.options) === null || P === void 0 ? void 0 : P.weekStartsOn) !== null && F !== void 0 ? F : 0);
  if (!(he >= 0 && he <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!A.localize)
    throw new RangeError("locale must contain localize property");
  if (!A.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var se = je(t);
  if (!qy(se))
    throw new RangeError("Invalid time value");
  var Ve = Zc(se), Te = Ky(se, Ve), Re = {
    firstWeekContainsDate: O,
    weekStartsOn: he,
    locale: A,
    _originalDate: se
  }, Ze = b.match(rM).map(function(ue) {
    var xe = ue[0];
    if (xe === "p" || xe === "P") {
      var Be = hk[xe];
      return Be(ue, A.formatLong);
    }
    return ue;
  }).join("").match(nM).map(function(ue) {
    if (ue === "''")
      return "'";
    var xe = ue[0];
    if (xe === "'")
      return lM(ue);
    var Be = uk[xe];
    if (Be)
      return !(r != null && r.useAdditionalWeekYearTokens) && vk(ue) && kh(ue, o, String(t)), !(r != null && r.useAdditionalDayOfYearTokens) && wk(ue) && kh(ue, o, String(t)), Be(Te, ue, A.localize, Re);
    if (xe.match(aM))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + xe + "`");
    return ue;
  }).join("");
  return Ze;
}
function lM(t) {
  var o = t.match(oM);
  return o ? o[1].replace(iM, "'") : t;
}
function $m(t, o) {
  if (t == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
  return t;
}
function cM(t) {
  return $m({}, t);
}
var Mh = 1e3 * 60, za = 60 * 24, Zh = za * 30, bh = za * 365;
function uM(t, o, r) {
  var a, l, c;
  Qe(2, arguments);
  var d = si(), h = (a = (l = r == null ? void 0 : r.locale) !== null && l !== void 0 ? l : d.locale) !== null && a !== void 0 ? a : Lm;
  if (!h.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = Ly(t, o);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var V = $m(cM(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: w
  }), U, R;
  w > 0 ? (U = je(o), R = je(t)) : (U = je(t), R = je(o));
  var y = String((c = r == null ? void 0 : r.roundingMethod) !== null && c !== void 0 ? c : "round"), F;
  if (y === "floor")
    F = Math.floor;
  else if (y === "ceil")
    F = Math.ceil;
  else if (y === "round")
    F = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var S = R.getTime() - U.getTime(), C = S / Mh, D = Zc(R) - Zc(U), E = (S - D) / Mh, B = r == null ? void 0 : r.unit, x;
  if (B ? x = String(B) : C < 1 ? x = "second" : C < 60 ? x = "minute" : C < za ? x = "hour" : E < Zh ? x = "day" : E < bh ? x = "month" : x = "year", x === "second") {
    var P = F(S / 1e3);
    return h.formatDistance("xSeconds", P, V);
  } else if (x === "minute") {
    var b = F(C);
    return h.formatDistance("xMinutes", b, V);
  } else if (x === "hour") {
    var W = F(C / 60);
    return h.formatDistance("xHours", W, V);
  } else if (x === "day") {
    var A = F(E / za);
    return h.formatDistance("xDays", A, V);
  } else if (x === "month") {
    var O = F(E / Zh);
    return O === 12 && B !== "month" ? h.formatDistance("xYears", 1, V) : h.formatDistance("xMonths", O, V);
  } else if (x === "year") {
    var he = F(E / bh);
    return h.formatDistance("xYears", he, V);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const $t = (t) => {
  let o = "";
  if (t)
    try {
      o = sM(new Date(t), vt.DATE_FORMAT);
    } catch {
      console.log("error date", t);
    }
  return o;
}, dM = (t, o) => {
  const r = t.length > o ? "..." : "";
  return t.replace(/(<([^>]+)>)/gi, "").substring(0, o) + r;
}, fM = window.Vue.defineComponent, Xt = window.Vue.unref, Jh = window.Vue.normalizeClass, pn = window.Vue.createElementVNode, Fo = window.Vue.toDisplayString, Eh = window.Vue.createVNode, Wr = window.Vue.openBlock, Cr = window.Vue.createElementBlock, Hl = window.Vue.createCommentVNode, qm = window.Vue.createTextVNode, hM = window.Vue.renderList, pM = window.Vue.Fragment, mM = window.Vue.pushScopeId, wM = window.Vue.popScopeId, Km = (t) => (mM("data-v-7c453c05"), t = t(), wM(), t), vM = { class: "content" }, VM = { class: "title-row" }, TM = { class: "title" }, gM = {
  key: 0,
  class: "accepted"
}, UM = {
  key: 1,
  class: "rejected"
}, RM = /* @__PURE__ */ Km(() => /* @__PURE__ */ pn("span", { class: "info-title" }, " First Event: ", -1)), NM = /* @__PURE__ */ Km(() => /* @__PURE__ */ pn("hr", null, null, -1)), yM = {
  key: 0,
  class: "count-info"
}, kM = /* @__PURE__ */ qm(" Alarms: "), MM = { class: "info-title" }, ZM = /* @__PURE__ */ fM({
  __name: "SituationCard",
  props: {
    situationInfo: null
  },
  emits: ["situation-selected"],
  setup(t, { emit: o }) {
    const r = t, a = vt.ACCEPTED, l = vt.REJECTED, c = r.situationInfo.description.replace(/(<([^>]+)>)/gi, "").substring(0, 230) + "...", d = () => {
      var h;
      o("situation-selected", (h = r.situationInfo) == null ? void 0 : h.id);
    };
    return (h, w) => {
      var V, U, R;
      return Wr(), Cr("div", {
        onClick: d,
        class: Jh(["card", {
          rejected: r.situationInfo.status == Xt(l)
        }])
      }, [
        pn("div", {
          class: Jh(["severity-line", [`${(U = (V = r.situationInfo) == null ? void 0 : V.severity) == null ? void 0 : U.toLowerCase()}-bg dark`]])
        }, null, 2),
        pn("div", vM, [
          pn("div", VM, [
            pn("div", TM, "Situation " + Fo((R = r.situationInfo) == null ? void 0 : R.id), 1),
            r.situationInfo.status == Xt(a) ? (Wr(), Cr("div", gM, [
              Eh(Xt($), {
                icon: Xt(ai),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Hl("", !0),
            r.situationInfo.status == Xt(l) ? (Wr(), Cr("div", UM, [
              Eh(Xt($), {
                icon: Xt(Pm),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Hl("", !0)
          ]),
          pn("div", null, [
            RM,
            qm(Fo(Xt($t)(r.situationInfo.firstEventTime)), 1)
          ]),
          pn("div", { class: "description" }, Fo(c)),
          NM,
          r.situationInfo.relatedAlarms ? (Wr(), Cr("div", yM, [
            kM,
            pn("span", MM, Fo(r.situationInfo.relatedAlarms.length), 1)
          ])) : Hl("", !0),
          (Wr(!0), Cr(pM, null, hM(Xt(we.exports.keys)(
            Xt(we.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (y) => (Wr(), Cr("div", {
            class: "info-title",
            key: y
          }, " - " + Fo(y), 1))), 128))
        ])
      ], 2);
    };
  }
});
const bM = /* @__PURE__ */ Ue(ZM, [["__scopeId", "data-v-7c453c05"]]), JM = window.Vue.openBlock, EM = window.Vue.createElementBlock, SM = window.Vue.createElementVNode;
var AM = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const FM = {}, WM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, CM = /* @__PURE__ */ SM("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), xM = [
  CM
];
function BM(t, o) {
  return JM(), EM("svg", WM, xM);
}
var IM = /* @__PURE__ */ AM(FM, [["render", BM]]);
const DM = window.Vue.openBlock, _M = window.Vue.createElementBlock, ew = window.Vue.createElementVNode;
var OM = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const QM = {}, zM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GM = /* @__PURE__ */ ew("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), YM = /* @__PURE__ */ ew("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), PM = [
  GM,
  YM
];
function HM(t, o) {
  return DM(), _M("svg", zM, PM);
}
var jM = /* @__PURE__ */ OM(QM, [["render", HM]]);
const XM = window.Vue.openBlock, LM = window.Vue.createElementBlock, $M = window.Vue.createElementVNode;
var qM = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const KM = {}, eZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, tZ = /* @__PURE__ */ $M("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), nZ = [
  tZ
];
function rZ(t, o) {
  return XM(), LM("svg", eZ, nZ);
}
var oZ = /* @__PURE__ */ qM(KM, [["render", rZ]]);
const iZ = window.Vue.openBlock, aZ = window.Vue.createElementBlock, sZ = window.Vue.createElementVNode;
var lZ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const cZ = {}, uZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, dZ = /* @__PURE__ */ sZ("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), fZ = [
  dZ
];
function hZ(t, o) {
  return iZ(), aZ("svg", uZ, fZ);
}
var tw = /* @__PURE__ */ lZ(cZ, [["render", hZ]]);
const pZ = window.Vue.defineComponent, Sn = window.Vue.unref, fa = window.Vue.normalizeClass, ha = window.Vue.createVNode, mZ = window.Vue.openBlock, wZ = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const vZ = { class: "paginator" }, VZ = /* @__PURE__ */ pZ({
  __name: "SimplePagination",
  props: {
    totalPages: null,
    currentPage: null
  },
  emits: ["go-to-page"],
  setup(t, { emit: o }) {
    const r = t, a = (l) => {
      l >= 0 && l <= r.totalPages - 1 && o("go-to-page", l);
    };
    return (l, c) => (mZ(), wZ("div", vZ, [
      ha(Sn($), {
        icon: Sn(IM),
        "aria-hidden": "true",
        class: fa(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: c[0] || (c[0] = (d) => a(0))
      }, null, 8, ["icon", "class"]),
      ha(Sn($), {
        icon: Sn(oZ),
        "aria-hidden": "true",
        class: fa(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: c[1] || (c[1] = (d) => a(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      ha(Sn($), {
        icon: Sn(tw),
        "aria-hidden": "true",
        class: fa(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: c[2] || (c[2] = (d) => a(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      ha(Sn($), {
        icon: Sn(jM),
        "aria-hidden": "true",
        class: fa(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: c[3] || (c[3] = (d) => a(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const TZ = /* @__PURE__ */ Ue(VZ, [["__scopeId", "data-v-40758818"]]);
const ae = function(t) {
  t = t || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [t.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, gZ = window.Vue.computed, nw = (t, o) => {
  const r = {};
  return Object.keys(o).forEach((a) => {
    r[`${a}Label`] = gZ(() => t.value[a] ? t.value[a] : o[a]);
  }), r;
};
const eo = function(t, o) {
  return window ? window.setTimeout(t, o) : setTimeout(t, o);
}, to = function(t) {
  return window ? window.clearTimeout(t) : clearTimeout(t);
};
var UZ = Object.defineProperty, RZ = Object.defineProperties, NZ = Object.getOwnPropertyDescriptors, Sh = Object.getOwnPropertySymbols, yZ = Object.prototype.hasOwnProperty, kZ = Object.prototype.propertyIsEnumerable, Ah = (t, o, r) => o in t ? UZ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Fh = (t, o) => {
  for (var r in o || (o = {}))
    yZ.call(o, r) && Ah(t, r, o[r]);
  if (Sh)
    for (var r of Sh(o))
      kZ.call(o, r) && Ah(t, r, o[r]);
  return t;
}, MZ = (t, o) => RZ(t, NZ(o));
const ZZ = window.Vue.defineComponent, bZ = window.Vue.h;
var JZ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const EZ = {
  center: {
    type: Boolean,
    default: !1
  }
}, SZ = ZZ({
  props: EZ,
  data() {
    return {
      pressed: !1,
      active: !1,
      styles: {},
      failsafe: -1
    };
  },
  computed: {
    parent() {
      return this.$el.parentNode;
    }
  },
  methods: {
    onClick(t) {
      this.pressed = !1, this.active = !1, requestAnimationFrame(() => {
        const { clientWidth: o, clientHeight: r } = this.parent, a = Math.round(Math.max(o, r));
        let l = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const c = this.parent.getBoundingClientRect(), d = t.pageY, h = t.pageX;
          l = {
            top: `${d - c.top - a / 2 - document.documentElement.scrollTop}px`,
            left: `${h - c.left - a / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = MZ(Fh({}, l), {
          height: `${a}px`,
          width: `${a}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, to(this.failsafe), this.failsafe = eo(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return bZ("div", {
        style: Fh({}, this.styles),
        class: ["ripple", { active: this.active, center: this.center }],
        onTransitionEnd: () => {
          this.pressed = !1, this.active = !1;
        },
        onTransitionCancel: () => {
          this.pressed = !1, this.active = !1;
        }
      });
  },
  mounted() {
    this.parent.addEventListener("click", this.onClick);
    const t = window.getComputedStyle(this.parent);
    this.parent.style.overflow = "hidden", !(t.position === "relative" || t.position === "absolute" || t.position === "fixed") && (this.parent.style.position = "relative");
  },
  unmounted() {
    this.parent.removeEventListener("click", this.onClick);
  }
});
var ur = /* @__PURE__ */ JZ(SZ, [["__scopeId", "data-v-18e2a5db"]]);
const AZ = window.Vue.openBlock, FZ = window.Vue.createElementBlock, WZ = window.Vue.createElementVNode;
var CZ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const xZ = {}, BZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, IZ = /* @__PURE__ */ WZ("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), DZ = [
  IZ
];
function _Z(t, o) {
  return AZ(), FZ("svg", BZ, DZ);
}
var li = /* @__PURE__ */ CZ(xZ, [["render", _Z]]);
const Wh = window.Vue.computed, OZ = (t, o, r) => {
  const a = Wh(() => o.value.filter((c) => !c.disabled)), l = Wh(() => t.value ? a.value.indexOf(t.value) : -1);
  return {
    selectPrevious() {
      t.value && t.value.disabled || (l.value === 0 ? r(a.value[a.value.length - 1]) : r(a.value[l.value - 1]));
    },
    selectNext() {
      t.value && t.value.disabled || (l.value === a.value.length - 1 ? r(a.value[0]) : r(a.value[l.value + 1]));
    }
  };
};
const QZ = window.Vue.openBlock, zZ = window.Vue.createElementBlock, jc = window.Vue.createElementVNode;
var GZ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const YZ = {}, PZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, HZ = /* @__PURE__ */ jc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), jZ = /* @__PURE__ */ jc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), XZ = /* @__PURE__ */ jc("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), LZ = [
  HZ,
  jZ,
  XZ
];
function $Z(t, o) {
  return QZ(), zZ("svg", PZ, LZ);
}
var qZ = /* @__PURE__ */ GZ(YZ, [["render", $Z]]), KZ = Object.defineProperty, e2 = Object.defineProperties, t2 = Object.getOwnPropertyDescriptors, Ch = Object.getOwnPropertySymbols, n2 = Object.prototype.hasOwnProperty, r2 = Object.prototype.propertyIsEnumerable, xh = (t, o, r) => o in t ? KZ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, rw = (t, o) => {
  for (var r in o || (o = {}))
    n2.call(o, r) && xh(t, r, o[r]);
  if (Ch)
    for (var r of Ch(o))
      r2.call(o, r) && xh(t, r, o[r]);
  return t;
}, ow = (t, o) => e2(t, t2(o));
const oo = window.Vue.defineComponent, ei = window.Vue.resolveComponent, Lt = window.Vue.openBlock, Pr = window.Vue.createElementBlock, o2 = window.Vue.createVNode, Ga = window.Vue.createBlock, i2 = window.Vue.withModifiers, no = window.Vue.inject, ti = window.Vue.computed, a2 = window.Vue.normalizeClass, xr = window.Vue.createElementVNode, Ya = window.Vue.toDisplayString, Wa = window.Vue.renderSlot, jo = window.Vue.createCommentVNode, s2 = window.Vue.withDirectives, l2 = window.Vue.vShow, bc = window.Vue.ref, Bh = window.Vue.toRef, Ih = window.Vue.nextTick, Jc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Xc = window.Vue.provide, Dh = window.Vue.isRef, c2 = window.Vue.onBeforeUnmount;
var ci = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const u2 = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, d2 = oo({
  props: u2,
  components: {
    FeatherIcon: $
  }
}), f2 = ["title"];
function h2(t, o, r, a, l, c) {
  const d = ei("FeatherIcon");
  return Lt(), Pr("a", {
    title: t.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    o2(d, { icon: t.icon }, null, 8, ["icon"])
  ], 8, f2);
}
var p2 = /* @__PURE__ */ ci(d2, [["render", h2], ["__scopeId", "data-v-4265058e"]]);
const m2 = oo({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return li;
    }
  },
  components: {
    ActionIcon: p2
  }
});
function w2(t, o, r, a, l, c) {
  const d = ei("ActionIcon");
  return Lt(), Ga(d, {
    onClick: o[0] || (o[0] = i2((h) => t.$emit("clear"), ["stop", "prevent"])),
    title: t.clear,
    icon: t.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var v2 = /* @__PURE__ */ ci(m2, [["render", w2]]);
const V2 = oo({
  computed: {
    errorIcon() {
      return qZ;
    }
  },
  components: {
    FeatherIcon: $
  }
});
function T2(t, o, r, a, l, c) {
  const d = ei("FeatherIcon");
  return Lt(), Ga(d, {
    icon: t.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var g2 = /* @__PURE__ */ ci(V2, [["render", T2], ["__scopeId", "data-v-0b8faef3"]]);
const U2 = {
  for: {
    type: String,
    required: !0
  },
  focused: {
    type: Boolean,
    default: !1
  },
  showClear: {
    type: Boolean,
    default: !1
  },
  clearText: {
    type: String
  },
  raised: {
    type: Boolean,
    default: !1
  }
}, R2 = {
  clear: () => !0,
  "wrapper-click": (t) => !0
}, N2 = oo({
  emits: R2,
  props: U2,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const t = no("wrapperOptions", {}), o = no("validationErrorMessage", !1), r = ti(() => t.error ? t.error : o && o.value ? o.value : !1);
    return ow(rw({}, t), { error: r });
  },
  computed: {
    computedClearText() {
      return this.clearText ? this.clearText : this.clear ? this.clear : "";
    },
    inputId() {
      return this.for;
    },
    hasPre() {
      return this.$slots.pre && this.$slots.pre().findIndex((o) => o.children && o.children.length !== 0) !== -1;
    },
    containerCls() {
      const t = [];
      return this.hideLabel && t.push("hide-label"), this.raised && t.push("raised"), this.focused && t.push("focused"), this.error && t.push("error"), this.background && t.push("background"), this.disabled && t.push("disabled"), this.inline && t.push("inline"), this.hasPre && t.push("has-prefix"), t;
    }
  },
  methods: {
    handleWrapperClick(t) {
      this.disabled || this.$emit("wrapper-click", t);
    }
  },
  mounted() {
    const t = this.$el.querySelector(".prefix");
    if (t) {
      const o = { childList: !0, subtree: !0 }, r = () => {
        const a = this.$el.querySelector(".prefix");
        this.prefixWidth = a ? a.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(r), this.prefixObserver.observe(t, o), r();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: v2,
    ErrorIcon: g2
  }
}), y2 = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, k2 = ["for"], M2 = { class: "prefix" }, Z2 = { class: "post" };
function b2(t, o, r, a, l, c) {
  const d = ei("ClearIcon"), h = ei("ErrorIcon");
  return Lt(), Pr("div", {
    class: a2(["feather-input-wrapper-container", t.containerCls])
  }, [
    xr("fieldset", y2, [
      xr("legend", null, Ya(t.label), 1)
    ]),
    xr("label", {
      class: "feather-input-label",
      for: t.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Ya(t.label), 9, k2),
    xr("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => t.handleWrapperClick && t.handleWrapperClick(...w))
    }, [
      xr("div", M2, [
        Wa(t.$slots, "pre", {}, void 0, !0)
      ]),
      Wa(t.$slots, "default", {}, void 0, !0),
      xr("div", Z2, [
        t.showClear && t.computedClearText ? (Lt(), Ga(d, {
          key: 0,
          clear: t.computedClearText,
          onClear: o[0] || (o[0] = (w) => t.$emit("clear"))
        }, null, 8, ["clear"])) : jo("", !0),
        t.error ? (Lt(), Ga(h, { key: 1 })) : jo("", !0),
        Wa(t.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var Lc = /* @__PURE__ */ ci(N2, [["render", b2], ["__scopeId", "data-v-4db296db"]]);
const J2 = oo({
  setup() {
    const t = no("subTextOptions", {}), o = no("validationErrorMessage", !1), r = ti(() => t.error ? t.error : o && o.value ? o.value : "");
    return ow(rw({}, t), { error: r });
  }
}), E2 = { class: "feather-input-sub-text" }, S2 = {
  key: 0,
  class: "feather-input-spacer"
}, A2 = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, F2 = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function W2(t, o, r, a, l, c) {
  return s2((Lt(), Pr("div", E2, [
    !t.hint && !t.error.length ? (Lt(), Pr("div", S2, "\xA0")) : jo("", !0),
    t.hint && !t.error.length ? (Lt(), Pr("div", A2, Ya(t.hint), 1)) : jo("", !0),
    t.error.length > 0 ? (Lt(), Pr("div", F2, Ya(t.error), 1)) : jo("", !0),
    Wa(t.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [l2, !t.inline || t.hint || t.error.length]
  ]);
}
var ui = /* @__PURE__ */ ci(J2, [["render", W2], ["__scopeId", "data-v-8e0ac99e"]]);
const C2 = {
  headingText: {
    type: Function,
    default: (t) => t.length && t.length === 1 ? "1 error" : `${t.length} errors`
  },
  errorList: {
    type: Array,
    default: () => []
  },
  generalError: {
    type: String,
    default: ""
  }
};
oo({
  props: C2,
  setup(t) {
    const o = no("featherFormErrors", bc([])), r = Bh(t, "errorList"), a = ti(() => {
      var U;
      return (U = r.value) != null && U.length ? r.value : o.value;
    }), l = Bh(t, "generalError"), c = (U) => {
      document.getElementById(U).focus();
    }, d = (U) => U.replace(/ \*$/, ""), h = bc(), w = (U) => `${d(U.label)} - ${U.message}`, V = ti(() => (a.value.length && Ih(() => h.value.focus()), t.headingText(a.value)));
    return Jc(l, (U) => {
      U.length && Ih(() => h.value.focus());
    }), {
      errors: a,
      errorsHeading: V,
      heading: h,
      focusElement: c,
      mainError: l,
      getFullMessage: w
    };
  }
});
const di = (t, o, r, a, l) => {
  const c = no("featherForm", !1);
  if (a && c && t.value) {
    const d = bc("");
    Xc("validationErrorMessage", d);
    const h = () => {
      if (l && Dh(l) && l.value)
        return d.value = l.value, {
          success: !1,
          message: l.value,
          inputId: t.value,
          label: r
        };
      try {
        return a.validateSync(o.value), d.value = "", { success: !0 };
      } catch (U) {
        const R = U;
        return d.value = R.errors[0], {
          success: !1,
          message: R.errors[0],
          inputId: t.value,
          label: r
        };
      }
    }, V = {
      clear: () => {
        d.value = "";
      },
      validate: h
    };
    return l && Dh(l) && Jc(l, () => {
      c.runValidation();
    }), Jc(t, (U, R) => {
      U && c && c.register(U, V), R && c && c.deregister(R);
    }, { immediate: !0 }), c2(() => {
      c.deregister(t.value, !0);
    }), { validate: h };
  }
  return { validate: () => !0 };
}, fi = (t) => ({
  inherittedAttrs: ti(() => ({
    class: t.class,
    "data-ref-id": t["data-ref-id"]
  }))
}), hi = {
  hint: {
    type: String
  },
  error: {
    type: String
  },
  inline: {
    type: Boolean,
    default: !1
  }
}, pi = (t) => {
  Xc("subTextOptions", t);
}, $c = {
  label: {
    type: String,
    required: !0
  },
  error: {
    type: String
  },
  clear: {
    type: String,
    default: ""
  },
  background: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  inline: {
    type: Boolean,
    default: !1
  },
  hideLabel: {
    type: Boolean,
    default: !1
  }
}, qc = (t) => {
  Xc("wrapperOptions", t);
}, pa = window.Vue.ref, x2 = window.Vue.watch, B2 = window.Vue.watchEffect, _h = window.Vue.computed, jl = window.Vue.provide, iw = (t, o, r, a, l) => {
  const c = pa([]), d = pa(), h = pa(), w = pa();
  B2(() => {
    if (!c.value.length)
      return;
    const E = c.value.map((B) => B.value);
    if (t.value !== void 0 && t.value !== null && (d.value = c.value[E.indexOf(t.value)]), !d.value && c.value.length) {
      let B = c.value.filter((x) => !x.disabled);
      B = B.length ? B : c.value, h.value = B[0], h.value.first = !0;
    }
  }), x2(d, (E, B) => {
    B && (B.checked = !1), E && (E.checked = !0);
  });
  const V = (E) => {
    E && E.disabled || (h.value && (h.value.first = !1), d.value !== E && (o("update:modelValue", E.value), d.value = E, E.focus()));
  }, U = _h(() => d.value || h.value), R = OZ(U, c, V), y = _h(() => ae("feather-radio-group"));
  w.value = y.value;
  const { validate: F } = di(w, t, r, a, l);
  return jl("register", (E) => {
    c.value = [...c.value, E], w.value === y.value && (w.value = E.id);
  }), jl("select", V), jl("blur", (E) => {
    o("blur", E);
  }), {
    keydown: (E) => {
      switch (E.keyCode) {
        case 13:
        case 32:
          d.value ? V(d.value) : h.value && V(h.value);
          break;
        case 40:
        case 39:
          R.selectNext();
          break;
        case 37:
        case 38:
          R.selectPrevious();
          break;
      }
    },
    ...R,
    focus: () => {
      d.value && d.value.focus();
    },
    validate: F,
    firstElementId: w,
    groupId: y
  };
};
var I2 = Object.defineProperty, D2 = Object.defineProperties, _2 = Object.getOwnPropertyDescriptors, Oh = Object.getOwnPropertySymbols, O2 = Object.prototype.hasOwnProperty, Q2 = Object.prototype.propertyIsEnumerable, Qh = (t, o, r) => o in t ? I2(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Xr = (t, o) => {
  for (var r in o || (o = {}))
    O2.call(o, r) && Qh(t, r, o[r]);
  if (Oh)
    for (var r of Oh(o))
      Q2.call(o, r) && Qh(t, r, o[r]);
  return t;
}, aw = (t, o) => D2(t, _2(o));
const _n = window.Vue.defineComponent, Xo = window.Vue.inject, Pa = window.Vue.computed, Lo = window.Vue.ref, At = window.Vue.resolveComponent, Vt = window.Vue.openBlock, mi = window.Vue.createElementBlock, sw = window.Vue.normalizeClass, qt = window.Vue.renderSlot, In = window.Vue.createBlock, ni = window.Vue.createCommentVNode, Ha = window.Vue.createElementVNode, z2 = window.Vue.withModifiers, ns = window.Vue.createVNode, lw = window.Vue.toRef, Ec = window.Vue.mergeProps, Vn = window.Vue.withCtx, G2 = window.Vue.h, Y2 = window.Vue.provide;
var On = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const P2 = {
  disabled: {
    type: Boolean,
    default: !1
  },
  condensed: {
    type: Boolean,
    default: !1
  },
  clickable: {
    type: Boolean,
    default: !1
  }
}, H2 = _n({
  props: P2,
  setup(t) {
    const o = Xo("isCondensed", null), r = Pa(() => o || t.condensed), a = Lo(!1);
    return {
      focused: a,
      handleFocus: () => {
        a.value = !0;
      },
      handleBlur: () => {
        a.value = !1;
      },
      isCondensed: r
    };
  },
  components: {
    FeatherRipple: ur
  }
}), j2 = ["aria-disabled"];
function X2(t, o, r, a, l, c) {
  const d = At("FeatherRipple");
  return Vt(), mi("div", {
    class: sw(["chip", {
      condensed: t.isCondensed,
      disabled: t.disabled,
      focused: t.focused
    }]),
    onFocusin: o[0] || (o[0] = (h) => t.clickable ? t.handleFocus : null),
    onFocusout: o[1] || (o[1] = (h) => t.clickable ? t.handleBlur : null),
    "aria-disabled": t.disabled
  }, [
    qt(t.$slots, "default", {}, void 0, !0),
    t.clickable ? (Vt(), In(d, { key: 0 })) : ni("", !0)
  ], 42, j2);
}
var rs = /* @__PURE__ */ On(H2, [["render", X2], ["__scopeId", "data-v-44d413dc"]]);
const L2 = {
  disabled: {
    type: Boolean,
    default: !1
  },
  textId: {
    type: String,
    required: !0
  },
  label: {
    type: String,
    required: !0
  }
}, $2 = _n({
  emits: ["delete"],
  props: L2,
  setup(t, o) {
    return {
      handleDelete: () => {
        t.disabled || o.emit("delete");
      },
      icon: li
    };
  },
  components: {
    FeatherIcon: $
  }
}), q2 = { class: "chip-delete" }, K2 = ["aria-label", "aria-describedby"];
function eb(t, o, r, a, l, c) {
  const d = At("FeatherIcon");
  return Vt(), mi("span", q2, [
    Ha("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = z2((...h) => t.handleDelete && t.handleDelete(...h), ["stop", "prevent"])),
      "aria-label": t.label,
      "aria-describedby": t.textId
    }, [
      ns(d, {
        icon: t.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, K2)
  ]);
}
var tb = /* @__PURE__ */ On($2, [["render", eb], ["__scopeId", "data-v-4bae6cb4"]]);
const nb = _n({
  data() {
    return {
      titleText: void 0
    };
  },
  methods: {
    ellipsisActive() {
      return this.$refs.container.offsetWidth < this.$refs.container.scrollWidth;
    },
    updateTitle() {
      this.titleText = this.ellipsisActive() ? this.$refs.container.textContent : void 0;
    }
  },
  mounted() {
    this.updateTitle();
  },
  beforeUpdate() {
    this.updateTitle();
  }
}), rb = ["title"];
function ob(t, o, r, a, l, c) {
  return Vt(), mi("span", {
    class: "label",
    title: t.titleText,
    ref: "container"
  }, [
    qt(t.$slots, "default", {}, void 0, !0)
  ], 8, rb);
}
var os = /* @__PURE__ */ On(nb, [["render", ob], ["__scopeId", "data-v-1a0445b2"]]);
const ib = {}, ab = {
  class: "chip-icon",
  role: "presentation"
};
function sb(t, o) {
  return Vt(), mi("span", ab, [
    qt(t.$slots, "default", {}, void 0, !0)
  ]);
}
var is = /* @__PURE__ */ On(ib, [["render", sb], ["__scopeId", "data-v-2230176f"]]);
const zh = {
  delete: "Remove"
}, lb = _n({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => zh
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(t, o) {
    const r = nw(lw(t, "labels"), zh), a = Pa(() => ae("chip-text")), l = () => {
      t.disabled || o.emit("click");
    }, c = Xr({}, o.attrs);
    return t.disabled && delete c.onClick, aw(Xr({}, r), {
      chipTextId: a,
      handleClick: l,
      attrs: c
    });
  },
  computed: {
    chipTextAttrs() {
      return this.canClick ? {
        role: "button",
        tabindex: "0"
      } : {};
    },
    canDelete() {
      return !!this.$attrs.onDelete && !this.disabled;
    },
    canClick() {
      return !!this.$attrs.onClick && !this.disabled;
    },
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((o) => o.children && o.children.length !== 0 || typeof o.type == "object") !== -1;
    }
  },
  components: {
    Chip: rs,
    DeleteIcon: tb,
    Label: os,
    PreIcon: is
  }
}), cb = ["aria-disabled"];
function ub(t, o, r, a, l, c) {
  const d = At("PreIcon"), h = At("Label"), w = At("DeleteIcon"), V = At("Chip");
  return Vt(), In(V, Ec(t.attrs, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: { hover: t.canClick, focus: t.canClick || t.canDelete },
    role: "row",
    clickable: t.canClick
  }), {
    default: Vn(() => [
      Ha("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        Ha("span", Ec(t.chipTextAttrs, { class: "chip-label-button" }), [
          t.hasIcon ? (Vt(), In(d, { key: 0 }, {
            default: Vn(() => [
              qt(t.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : ni("", !0),
          ns(h, { id: t.chipTextId }, {
            default: Vn(() => [
              qt(t.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, cb),
      t.canDelete ? (Vt(), In(w, {
        key: 0,
        disabled: t.disabled,
        "text-id": t.chipTextId,
        label: t.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (U) => t.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : ni("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var db = /* @__PURE__ */ On(lb, [["render", ub], ["__scopeId", "data-v-48b2704a"]]);
const fb = _n({
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((o) => o.children && o.children.length !== 0 || typeof o.type == "object") !== -1;
    }
  },
  components: {
    Chip: rs,
    Label: os,
    PreIcon: is
  }
}), hb = ["aria-disabled"];
function pb(t, o, r, a, l, c) {
  const d = At("PreIcon"), h = At("Label"), w = At("Chip");
  return Vt(), In(w, {
    role: "row",
    disabled: t.disabled,
    condensed: t.condensed,
    clickable: !1
  }, {
    default: Vn(() => [
      Ha("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        t.hasIcon ? (Vt(), In(d, { key: 0 }, {
          default: Vn(() => [
            qt(t.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : ni("", !0),
        ns(h, null, {
          default: Vn(() => [
            qt(t.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, hb)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var mb = /* @__PURE__ */ On(fb, [["render", pb], ["__scopeId", "data-v-3e0c4eba"]]);
const wb = _n({
  props: {
    value: {
      type: [String, Object, Number, Array],
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = Lo(!1), r = Lo(!1), a = Pa(() => ae("chip-label-id")), l = Pa(() => o.value || r.value ? 0 : -1), c = Lo(), d = () => {
      c.value.$el.focus();
    }, h = Xo("register", (y) => {
    }), w = Xo("blur", (y) => {
    }), V = Xo("select", (y) => {
    }), U = {
      first: o,
      focus: d,
      disabled: t.disabled,
      value: t.value,
      checked: r
    };
    return h(U), {
      labelId: a,
      tabindex: l,
      first: o,
      blur: w,
      click: () => {
        V(U);
      },
      input: c,
      checked: r
    };
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((o) => o.children && o.children.length !== 0 || typeof o.type == "object") !== -1;
    }
  },
  components: {
    Chip: rs,
    Label: os,
    PreIcon: is
  }
});
function vb(t, o, r, a, l, c) {
  const d = At("PreIcon"), h = At("Label"), w = At("Chip");
  return Vt(), In(w, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: sw(["focus hover", { selected: t.checked }]),
    role: "radio",
    ref: "input",
    "aria-checked": t.checked ? "true" : "false",
    "aria-disabled": t.disabled,
    "aria-labelledby": t.labelId,
    tabindex: t.tabindex,
    onClick: t.click,
    "allow-click": !t.disabled,
    onBlur: t.blur
  }, {
    default: Vn(() => [
      t.hasIcon ? (Vt(), In(d, { key: 0 }, {
        default: Vn(() => [
          qt(t.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : ni("", !0),
      ns(h, { id: t.labelId }, {
        default: Vn(() => [
          qt(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var Vb = /* @__PURE__ */ On(wb, [["render", vb], ["__scopeId", "data-v-bbcc2f70"]]);
const Tb = {
  disabled: {
    type: Boolean,
    default: !1
  },
  labels: {
    type: Object
  },
  condensed: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [String, Object, Number, Array, Boolean]
  }
}, Gh = _n({
  props: Tb,
  setup() {
    return { format: Xo("chipListFormat", "") };
  },
  render() {
    const t = (o) => G2(o, Xr(Xr({}, this.$props), this.$attrs), Xr({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? t(db) : this.format === "radio" ? t(Vb) : t(mb);
  }
}), gb = {
  label: {
    type: String,
    required: !0
  },
  mode: {
    type: String,
    default: "list",
    validator: (t) => ["list", "radio", "single"].indexOf(t) !== -1
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object, Date, Function]
  },
  condensed: {
    type: Boolean,
    default: !1
  }
}, Ub = _n({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: gb,
  setup(t, o) {
    const r = t.mode === "list" ? "grid" : t.mode;
    Y2("chipListFormat", r);
    const a = r === "single";
    if (r === "radio") {
      const d = lw(t, "modelValue");
      return aw(Xr({
        attrs: {
          role: "radiogroup"
        }
      }, iw(d, o.emit, t.label, {}, Lo(""))), {
        single: a
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: a };
  }
}), Rb = ["aria-label"];
function Nb(t, o, r, a, l, c) {
  return Vt(), mi("div", Ec(t.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": t.label,
    class: ["chip-list", { condensed: t.condensed, single: t.single }],
    onKeydown: o[0] || (o[0] = (...d) => t.keydown && t.keydown(...d))
  }), [
    qt(t.$slots, "default", {}, void 0, !0)
  ], 16, Rb);
}
var yb = /* @__PURE__ */ On(Ub, [["render", Nb], ["__scopeId", "data-v-1e06f41d"]]);
const kb = window.Vue.defineComponent, Mb = window.Vue.normalizeClass, Zb = window.Vue.openBlock, bb = window.Vue.createElementBlock, Jb = window.Vue.createCommentVNode, Eb = /* @__PURE__ */ kb({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const o = t;
    return (r, a) => o != null && o.severity ? (Zb(), bb("span", {
      key: 0,
      class: Mb(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : Jb("", !0);
  }
});
const Sb = /* @__PURE__ */ Ue(Eb, [["__scopeId", "data-v-e08880d6"]]), Ab = window.Vue.defineComponent, Wo = window.Vue.unref, cw = window.Vue.createTextVNode, Yh = window.Vue.normalizeClass, Xl = window.Vue.withCtx, Ph = window.Vue.createVNode, Fb = window.Vue.renderList, Wb = window.Vue.Fragment, Ll = window.Vue.openBlock, Cb = window.Vue.createElementBlock, xb = window.Vue.toDisplayString, Hh = window.Vue.createBlock, Bb = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Ib = /* @__PURE__ */ cw(" ALL "), jh = window.Vue.ref, Db = window.Vue.watch, _b = window.Vue.computed, Ob = window.Vue.reactive, Qb = /* @__PURE__ */ Ab({
  __name: "FiltersSeverity",
  props: {
    alarms: null,
    situationId: null,
    preSelected: null
  },
  emits: ["selected-severities"],
  setup(t, { emit: o }) {
    var w;
    const r = t, a = jh(!1), l = _b(() => we.exports.keys(we.exports.groupBy(r.alarms, "severity"))), c = jh(
      (w = r.preSelected) != null && w.length ? r.preSelected : ["all"]
    ), d = Ob({
      alarms: r.alarms
    }), h = (V) => {
      c.value = c.value.filter((U) => U !== "all"), c.value.includes(V) ? c.value = c.value.filter((U) => U !== V) : c.value.push(V), (V === "all" || c.value.length === 0) && (c.value = ["all"]), o("selected-severities", c.value);
    };
    return Db(r, () => {
      var V;
      c.value = (V = r.preSelected) != null && V.length ? r.preSelected : ["all"], d.alarms = r.alarms, a.value = !1;
    }), (V, U) => Wo(l).length > 0 ? (Ll(), Hh(Wo(yb), {
      key: c.value.toString(),
      condensed: "",
      label: ""
    }, {
      default: Xl(() => [
        Ph(Wo(Gh), {
          class: Yh({ clicked: c.value.includes("all") }),
          onClick: U[0] || (U[0] = (R) => h("all"))
        }, {
          default: Xl(() => [
            Ib
          ]),
          _: 1
        }, 8, ["class"]),
        (Ll(!0), Cb(Wb, null, Fb(Wo(l), (R) => (Ll(), Hh(Wo(Gh), {
          class: Yh([
            { clicked: c.value.includes(R) },
            `${R == null ? void 0 : R.toLowerCase()}-bg`
          ]),
          key: R,
          onClick: (y) => h(R)
        }, {
          default: Xl(() => [
            Ph(Sb, { severity: R }, null, 8, ["severity"]),
            cw(xb(R), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    })) : Bb("", !0);
  }
});
const Kc = /* @__PURE__ */ Ue(Qb, [["__scopeId", "data-v-57d07be0"]]);
var zb = Object.defineProperty, Gb = Object.defineProperties, Yb = Object.getOwnPropertyDescriptors, Xh = Object.getOwnPropertySymbols, Pb = Object.prototype.hasOwnProperty, Hb = Object.prototype.propertyIsEnumerable, Lh = (t, o, r) => o in t ? zb(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Co = (t, o) => {
  for (var r in o || (o = {}))
    Pb.call(o, r) && Lh(t, r, o[r]);
  if (Xh)
    for (var r of Xh(o))
      Hb.call(o, r) && Lh(t, r, o[r]);
  return t;
}, $h = (t, o) => Gb(t, Yb(o));
const jb = window.Vue.defineComponent, Xb = window.Vue.inject, xo = window.Vue.h;
var Lb = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const $b = {
  primary: {
    type: Boolean,
    default: !1
  },
  text: {
    type: Boolean,
    default: !1
  },
  secondary: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  asAnchor: {
    type: Boolean,
    default: !1
  },
  onColor: {
    type: Boolean,
    default: !1
  }
}, qb = jb({
  inheritAttrs: !1,
  props: $b,
  setup() {
    return { hasTooltip: Xb("feather-has-tooltip", !1) };
  },
  render() {
    const t = () => {
      let h = "";
      this.primary && (h = "btn-primary"), this.secondary && (h = "btn-secondary"), (this.text || this.icon) && (h = "btn-text");
      const w = ["btn", "hover", "focus", h];
      return this.icon && (w.push("btn-icon"), w.push("btn-icon-table")), this.onColor && w.push("on-color"), w;
    }, o = this.asAnchor ? "a" : "button", r = {}, a = Co({}, this.$attrs);
    r.attrs = a || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (h) => {
        this.disabled ? (this.asAnchor && h.preventDefault(), this.$emit("disabled-click", h)) : this.$emit("click", h);
      }
    };
    const l = t();
    r.class = [this.$attrs.class].concat(l), this.$slots.icon && r.class.push("has-icon");
    let c = xo(ur);
    if (this.disabled && (c = void 0), this.icon && this.$slots.default) {
      const h = this.icon;
      return r.attrs["aria-label"] = h, this.hasTooltip || (r.attrs.title = h), xo(o, $h(Co(Co({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : xo(ur, { center: !0 })
      ]);
    }
    const d = xo("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return xo(o, $h(Co(Co({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      d,
      c
    ]);
  }
});
var We = /* @__PURE__ */ Lb(qb, [["__scopeId", "data-v-702d1074"]]);
const Kb = window.Vue.openBlock, eJ = window.Vue.createElementBlock, tJ = window.Vue.createElementVNode;
var nJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const rJ = {}, oJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, iJ = /* @__PURE__ */ tJ("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), aJ = [
  iJ
];
function sJ(t, o) {
  return Kb(), eJ("svg", oJ, aJ);
}
var uw = /* @__PURE__ */ nJ(rJ, [["render", sJ]]);
const lJ = window.Vue.openBlock, cJ = window.Vue.createElementBlock, uJ = window.Vue.createElementVNode;
var dJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const fJ = {}, hJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, pJ = /* @__PURE__ */ uJ("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), mJ = [
  pJ
];
function wJ(t, o) {
  return lJ(), cJ("svg", hJ, mJ);
}
var dw = /* @__PURE__ */ dJ(fJ, [["render", wJ]]);
const vJ = window.Vue.watch, VJ = window.Vue.onBeforeUnmount, TJ = window.Vue.ref, gJ = window.Vue.onMounted, UJ = (t) => {
  const o = TJ(!1);
  let r = !1;
  const a = (d) => {
    t(d), r = !1;
  };
  function l(d) {
    r || (requestAnimationFrame(() => a(d)), r = !0);
  }
  const c = () => {
    window && window.removeEventListener("resize", l);
  };
  return gJ(() => {
    const d = vJ(o, (h) => {
      window && h ? window.addEventListener("resize", l) : c();
    }, {
      immediate: !0
    });
    VJ(() => {
      d(), c();
    });
  }), o;
}, RJ = window.Vue.watch, NJ = window.Vue.onBeforeUnmount, yJ = window.Vue.ref, kJ = window.Vue.onMounted, MJ = (t, o) => {
  const r = yJ(!1), a = (d) => {
    d.target === window && o(d);
  }, l = (d) => {
    let h = [];
    Array.isArray(t.value) ? h = t.value : h = [t.value], h.some((V) => V && V.contains(d.target)) || o(d);
  }, c = () => {
    document && window && (document.removeEventListener("click", l, !0), document.removeEventListener("focus", l, !0), window.removeEventListener("blur", a));
  };
  return kJ(() => {
    const d = RJ(r, (h) => {
      document && window && h ? (document.addEventListener("click", l, !0), document.addEventListener("focus", l, !0), window.addEventListener("blur", a)) : c();
    }, {
      immediate: !0
    });
    NJ(() => {
      d(), c();
    });
  }), r;
}, ZJ = window.Vue.watch, bJ = window.Vue.onBeforeUnmount, JJ = window.Vue.ref, fw = (t, o) => {
  const r = JJ(!1);
  let a = !1;
  const l = (w) => {
    o(w), a = !1;
  };
  function c(w) {
    a || (requestAnimationFrame(() => l(w)), a = !0);
  }
  const d = () => {
    t.value && t.value.removeEventListener("scroll", c, !0);
  }, h = ZJ([t, r], ([w, V], U) => {
    U && U.length && U[0] && U[0].removeEventListener("scroll", c, !0), V && w ? w.addEventListener("scroll", c, !0) : d();
  }, {
    immediate: !0
  });
  return bJ(() => {
    h(), d();
  }), r;
}, EJ = window.Vue.defineComponent, un = window.Vue.ref, qh = window.Vue.toRef, SJ = window.Vue.onMounted, AJ = window.Vue.watch, Kh = window.Vue.computed, FJ = window.Vue.nextTick, ep = window.Vue.openBlock, tp = window.Vue.createElementBlock, np = window.Vue.renderSlot, WJ = window.Vue.normalizeClass, CJ = window.Vue.normalizeStyle, xJ = window.Vue.createCommentVNode;
var BJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const IJ = {
  open: {
    type: Boolean,
    default: !1
  },
  noExpand: {
    type: Boolean,
    default: !1
  },
  cover: {
    type: Boolean,
    default: !1
  },
  right: {
    type: Boolean,
    default: !1
  },
  hasFocus: {
    type: Boolean,
    default: !1
  },
  dataRefId: {
    type: String,
    default: "feather-menu"
  },
  fill: {
    type: Boolean,
    default: !1
  },
  triggerId: {
    type: String
  }
}, DJ = {
  "trigger-click": (t) => !0,
  "outside-click": (t) => !0
}, _J = EJ({
  emits: DJ,
  props: IJ,
  setup(t, o) {
    const r = un(), a = un(), l = qh(t, "open"), c = qh(t, "noExpand"), d = un("auto"), h = un(), w = un(t.triggerId || ae("feather-menu-trigger")), V = un(ae("feather-menu-dropdown")), U = un(""), R = un("");
    SJ(() => {
      h.value = window;
    });
    const y = un(!1), F = () => ({
      height: h.value.innerHeight,
      width: h.value.innerWidth,
      left: 0,
      top: 0
    }), S = () => {
      if (!a.value)
        return;
      const b = r.value.getBoundingClientRect();
      y.value = !0, d.value = "auto", FJ(() => {
        let { height: W, width: A } = a.value.getBoundingClientRect();
        const O = F(), he = O.height, se = O.width;
        t.fill && A < b.width ? (d.value = b.width + "px", A = b.width) : d.value = A + "px";
        let Ve = 0;
        he - b.bottom < W && b.top >= W ? (Ve = b.top - W, t.cover && (Ve += b.height)) : (Ve = b.bottom, t.cover && (Ve -= b.height));
        let Te = t.right ? b.right - A : b.left;
        !t.right && b.right >= A && se - b.left < A && (Te = b.right - A), t.right && b.right <= A && se - b.left > A && (Te = b.left), R.value = `${Te}px`, U.value = `${Ve}px`, y.value = !1;
      });
    }, D = MJ(r, (b) => {
      o.emit("outside-click", b);
    }), E = UJ(S), B = fw(h, S);
    AJ([l, a], ([b, W]) => {
      b && W && S(), D.value = b, E.value = b, B.value = b;
    });
    const x = Kh(() => {
      const b = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return l.value && (b["aria-controls"] = V.value), c.value || (b["aria-expanded"] = l.value ? "true" : "false"), b;
    }), P = Kh(() => ({
      click: (b) => {
        o.emit("trigger-click", b);
      }
    }));
    return {
      positionTop: U,
      positionLeft: R,
      triggerId: w,
      triggerAttrs: x,
      triggerListeners: P,
      menuId: V,
      menu: a,
      menuWidth: d,
      root: r,
      calculatePosition: S,
      calculating: y
    };
  }
}), OJ = ["data-ref-id"], QJ = ["data-ref-id", "id"];
function zJ(t, o, r, a, l, c) {
  return ep(), tp("div", {
    class: "feather-menu",
    "data-ref-id": t.dataRefId,
    ref: "root"
  }, [
    np(t.$slots, "trigger", {
      attrs: t.triggerAttrs,
      on: t.triggerListeners
    }, void 0, !0),
    t.open ? (ep(), tp("div", {
      key: 0,
      class: WJ(["feather-menu-dropdown", { hidden: t.calculating }]),
      "data-ref-id": t.dataRefId + "-dropdown",
      ref: "menu",
      id: t.menuId,
      style: CJ({ left: t.positionLeft, top: t.positionTop, width: t.menuWidth })
    }, [
      np(t.$slots, "default", { labelId: t.triggerId }, void 0, !0)
    ], 14, QJ)) : xJ("", !0)
  ], 8, OJ);
}
var hw = /* @__PURE__ */ BJ(_J, [["render", zJ], ["__scopeId", "data-v-f75af406"]]);
const GJ = window.Vue.openBlock, YJ = window.Vue.createElementBlock, PJ = window.Vue.createElementVNode;
var HJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const jJ = {}, XJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, LJ = /* @__PURE__ */ PJ("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), $J = [
  LJ
];
function qJ(t, o) {
  return GJ(), YJ("svg", XJ, $J);
}
var KJ = /* @__PURE__ */ HJ(jJ, [["render", qJ]]);
const eE = window.Vue.openBlock, tE = window.Vue.createElementBlock, eu = window.Vue.createElementVNode;
var nE = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const rE = {}, oE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, iE = /* @__PURE__ */ eu("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), aE = /* @__PURE__ */ eu("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), sE = /* @__PURE__ */ eu("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), lE = [
  iE,
  aE,
  sE
];
function cE(t, o) {
  return eE(), tE("svg", oE, lE);
}
var uE = /* @__PURE__ */ nE(rE, [["render", cE]]);
const dE = window.Vue.openBlock, fE = window.Vue.createElementBlock, hE = window.Vue.createElementVNode;
var pE = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const mE = {}, wE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, vE = /* @__PURE__ */ hE("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), VE = [
  vE
];
function TE(t, o) {
  return dE(), fE("svg", wE, VE);
}
var tu = /* @__PURE__ */ pE(mE, [["render", TE]]);
const ri = function(t, o) {
  if (!t || !o)
    return;
  let r = t.getBoundingClientRect().height;
  const a = getComputedStyle(t);
  r += parseInt(a.getPropertyValue("margin-top"), 10), r += parseInt(a.getPropertyValue("margin-bottom"), 10), o.scrollTop = t.offsetTop - o.getBoundingClientRect().height + r;
};
const K = {
  PAGEUP: 33,
  PAGEDOWN: 34,
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  HOME: 36,
  END: 35,
  ENTER: 13,
  SPACE: 32,
  ESCAPE: 27,
  BACKSPACE: 8,
  DELETE: 46
};
const gE = window.Vue.defineComponent, UE = window.Vue.openBlock, RE = window.Vue.createElementBlock, NE = window.Vue.normalizeClass, yE = window.Vue.pushScopeId, kE = window.Vue.popScopeId, Sc = window.Vue.createElementVNode;
var ME = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const ZE = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, bE = {
  click: (t) => !0
}, JE = gE({
  emits: bE,
  props: ZE,
  methods: {
    handleClick(t) {
      this.disabled || this.$emit("click", t);
    }
  }
}), pw = (t) => (yE("data-v-07e020f5"), t = t(), kE(), t), EE = /* @__PURE__ */ pw(() => /* @__PURE__ */ Sc("div", { class: "track" }, null, -1)), SE = /* @__PURE__ */ pw(() => /* @__PURE__ */ Sc("div", { class: "switcher" }, [
  /* @__PURE__ */ Sc("div", { class: "switch-circle" })
], -1)), AE = [
  EE,
  SE
];
function FE(t, o, r, a, l, c) {
  return UE(), RE("div", {
    class: NE(["switch-container", { checked: t.checked, disabled: t.disabled }]),
    onClick: o[0] || (o[0] = (...d) => t.handleClick && t.handleClick(...d))
  }, AE, 2);
}
var WE = /* @__PURE__ */ ME(JE, [["render", FE], ["__scopeId", "data-v-07e020f5"]]), CE = Object.defineProperty, xE = Object.defineProperties, BE = Object.getOwnPropertyDescriptors, rp = Object.getOwnPropertySymbols, IE = Object.prototype.hasOwnProperty, DE = Object.prototype.propertyIsEnumerable, op = (t, o, r) => o in t ? CE(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, ip = (t, o) => {
  for (var r in o || (o = {}))
    IE.call(o, r) && op(t, r, o[r]);
  if (rp)
    for (var r of rp(o))
      DE.call(o, r) && op(t, r, o[r]);
  return t;
}, ap = (t, o) => xE(t, BE(o));
const nu = window.Vue.defineComponent, $n = window.Vue.h, _E = window.Vue.openBlock, OE = window.Vue.createElementBlock, QE = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var mw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const zE = {
  asLi: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  selected: {
    type: Boolean,
    default: !1
  },
  highlighted: {
    type: Boolean,
    default: !1
  }
}, GE = nu({
  inheritAttrs: !1,
  props: zE,
  render() {
    let t;
    this.$slots.icon && this.$slots.icon().findIndex((d) => d.children && d.children.length !== 0 || d.type && d.type.render) !== -1 && (t = $n("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = $n("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let a;
    this.$slots.post && (a = $n("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const l = this.disabled ? void 0 : $n(ur);
    if (this.asLi)
      return $n("li", ap(ip({}, this.$attrs), {
        class: [
          "feather-list-item hover focus",
          {
            selected: this.selected,
            highlighted: this.highlighted,
            disabled: this.disabled
          },
          this.$attrs.class || ""
        ]
      }), [t, r, a, l]);
    const c = $n("a", ap(ip({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [t, r, a, l]);
    return $n("li", {}, [c]);
  }
});
var wi = /* @__PURE__ */ mw(GE, [["__scopeId", "data-v-7c46b2b3"]]);
nu({
  components: {
    FeatherListItem: wi
  }
});
const YE = {}, PE = { class: "feather-list" };
function HE(t, o) {
  return _E(), OE("ul", PE, [
    QE(t.$slots, "default", {}, void 0, !0)
  ]);
}
var ru = /* @__PURE__ */ mw(YE, [["render", HE], ["__scopeId", "data-v-941a1d50"]]);
const jE = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  keydown: (t) => !0
}, XE = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
nu({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: jE,
  props: XE,
  computed: {
    labelId() {
      return ae("switch-label");
    }
  },
  methods: {
    focus() {
      this.$refs.input.$el.focus();
    },
    updateValue() {
      this.disabled || this.$emit("update:modelValue", !this.modelValue);
    },
    click(t) {
      this.focus(), this.updateValue(), this.$emit("click", t);
    },
    keydown(t) {
      (t.keyCode === K.SPACE || t.keyCode === K.ENTER) && this.updateValue(), t.keyCode === K.SPACE && t.preventDefault(), this.$emit("keydown", t);
    }
  },
  components: { SwitchRender: WE, FeatherListItem: wi }
});
var LE = Object.defineProperty, $E = Object.defineProperties, qE = Object.getOwnPropertyDescriptors, sp = Object.getOwnPropertySymbols, KE = Object.prototype.hasOwnProperty, eS = Object.prototype.propertyIsEnumerable, lp = (t, o, r) => o in t ? LE(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Tt = (t, o) => {
  for (var r in o || (o = {}))
    KE.call(o, r) && lp(t, r, o[r]);
  if (sp)
    for (var r of sp(o))
      eS.call(o, r) && lp(t, r, o[r]);
  return t;
}, tS = (t, o) => $E(t, qE(o));
const io = window.Vue.defineComponent, oe = window.Vue.openBlock, Se = window.Vue.createElementBlock, it = window.Vue.createElementVNode, zt = window.Vue.toDisplayString, St = window.Vue.createCommentVNode, be = window.Vue.resolveComponent, Et = window.Vue.createBlock, He = window.Vue.withCtx, Lr = window.Vue.Fragment, $o = window.Vue.renderList, at = window.Vue.createVNode, ou = window.Vue.withModifiers, lr = window.Vue.normalizeClass, Ac = window.Vue.renderSlot, ww = window.Vue.createTextVNode, nS = window.Vue.pushScopeId, rS = window.Vue.popScopeId, vw = window.Vue.reactive, Vw = window.Vue.nextTick, $l = window.Vue.markRaw, ql = window.Vue.toRef, cp = window.Vue.computed, oS = window.Vue.toRefs, Br = window.Vue.ref, Kl = window.Vue.mergeProps, up = window.Vue.toHandlers, ma = window.Vue.withDirectives, wa = window.Vue.vShow;
var as = {
  highlight: {
    type: String,
    default: "off",
    validator(t) {
      return ["off", "ignore-case"].indexOf(t) !== -1;
    }
  }
}, iu = {
  query: {
    type: String
  }
}, hr = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const iS = io({
  mixins: [],
  props: Tt(Tt({
    text: {
      type: String,
      required: !0
    }
  }, as), iu),
  computed: {
    index() {
      if (this.query && this.query.length === 0)
        return -1;
      if (this.query && this.highlight)
        switch (this.highlight.toLowerCase()) {
          case "ignore-case":
            return this.text.toLowerCase().indexOf(this.query.toLowerCase());
          default:
            return -1;
        }
      return -1;
    },
    beginning() {
      return this.index === -1 ? this.text : this.text.slice(0, this.index);
    },
    highlighted() {
      if (!(this.index === -1 || !this.query))
        return this.text.slice(this.index, this.index + this.query.length);
    },
    end() {
      if (!(this.index === -1 || !this.query))
        return this.text.slice(this.index + this.query.length);
    }
  }
}), aS = {
  key: 0,
  class: "highlight"
}, sS = { key: 1 };
function lS(t, o, r, a, l, c) {
  return oe(), Se("span", null, [
    it("span", null, zt(t.beginning), 1),
    t.highlighted ? (oe(), Se("span", aS, zt(t.highlighted), 1)) : St("", !0),
    t.end ? (oe(), Se("span", sS, zt(t.end), 1)) : St("", !0)
  ]);
}
var Tw = /* @__PURE__ */ hr(iS, [["render", lS], ["__scopeId", "data-v-8abe2492"]]);
const cS = io({
  emits: ["select", "deselect"],
  props: Tt(Tt({
    activeId: {
      type: String,
      required: !0
    },
    activeIndex: {
      type: Number,
      required: !0
    },
    items: {
      type: Array,
      required: !0
    },
    value: {
      type: [Array, Object],
      default: () => []
    },
    textProp: {
      type: String,
      default: "_text"
    },
    single: {
      type: Boolean,
      default: !1
    },
    newLabel: {
      type: String,
      default: "new"
    }
  }, as), iu),
  watch: {
    activeIndex(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[t], r = this.$refs.list;
        ri(o, r.$el);
      });
    }
  },
  methods: {
    isSelected(t) {
      const o = this.value;
      return o && o.length ? o.some((a) => a[this.textProp] === t[this.textProp]) : this.value[this.textProp] === t[this.textProp];
    },
    isActive(t) {
      return this.activeIndex === t;
    },
    getId(t) {
      return t === this.activeIndex ? this.activeId : null;
    },
    select(t) {
      this.$emit(this.isSelected(t) ? "deselect" : "select", t);
    }
  },
  components: {
    FeatherList: ru,
    FeatherListItem: wi,
    Highlighter: Tw
  }
}), uS = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function dS(t, o, r, a, l, c) {
  const d = be("Highlighter"), h = be("FeatherListItem"), w = be("FeatherList");
  return oe(), Et(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": t.single ? "false" : "true",
    ref: "list"
  }, {
    default: He(() => [
      (oe(!0), Se(Lr, null, $o(t.items, (V, U) => (oe(), Se(Lr, {
        key: V[t.textProp]
      }, [
        at(h, {
          "as-li": "",
          id: t.getId(U),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": t.isSelected(V),
          highlighted: t.isActive(U),
          selected: t.isSelected(V),
          onClick: ou((R) => t.select(V), ["stop"])
        }, {
          default: He(() => [
            at(d, {
              highlight: t.highlight,
              query: t.query,
              text: V[t.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            V._new ? (oe(), Se("span", uS, zt(t.newLabel), 1)) : St("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        t.items.length !== 1 && V._new ? (oe(), Se("li", {
          role: "presentation",
          key: V[t.textProp] + "hr",
          class: "hr"
        })) : St("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var fS = /* @__PURE__ */ hr(cS, [["render", dS], ["__scopeId", "data-v-f623434a"]]);
const hS = io({
  emits: ["select"],
  props: Tt(Tt({
    activeId: {
      type: String,
      required: !0
    },
    activeRow: {
      type: Number,
      required: !0
    },
    activeCol: {
      type: Number,
      required: !0
    },
    items: {
      type: Array,
      required: !0
    },
    value: {
      type: [Array, Object],
      default: () => []
    },
    textProp: {
      type: String,
      default: "_text"
    },
    single: {
      type: Boolean,
      default: !1
    },
    config: {
      type: Array,
      required: !0
    }
  }, as), iu),
  watch: {
    activeRow(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[t + 1], r = this.$refs.grid;
        ri(o, r);
      });
    }
  },
  computed: {
    cls() {
      return this.config.map((t, o) => t.align && t.align.toLowerCase() === "right" ? `tr${o + 1}` : t.align && t.align.toLowerCase() === "center" ? `tc${o + 1}` : `tl${o + 1}`);
    }
  },
  methods: {
    isSelected(t) {
      const o = this.value;
      return this.value && this.value.length ? o.some((a) => a[this.textProp] === t[this.textProp]) : this.value[this.textProp] === t[this.textProp];
    },
    isActive(t) {
      return this.activeRow === t;
    },
    isActiveCell(t, o) {
      return this.activeRow === t && this.activeCol === o;
    },
    getId(t, o) {
      return t === this.activeRow && this.activeCol === o ? this.activeId : "";
    },
    select(t) {
      this.$emit("select", t);
    }
  },
  components: {
    Highlighter: Tw
  }
}), pS = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, mS = ["aria-multiselectable"], wS = { role: "row" }, vS = ["aria-selected", "onClick"], VS = ["id", "aria-selected"], TS = { key: 1 };
function gS(t, o, r, a, l, c) {
  const d = be("Highlighter");
  return oe(), Se("div", pS, [
    it("table", {
      class: lr(["feather-autocomplete-results-grid-container", t.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": t.single ? "false" : "true"
    }, [
      it("thead", null, [
        it("tr", wS, [
          (oe(!0), Se(Lr, null, $o(t.config, (h) => (oe(), Se("th", {
            key: h.title
          }, zt(h.title), 1))), 128))
        ])
      ]),
      it("tbody", null, [
        (oe(!0), Se(Lr, null, $o(t.items, (h, w) => (oe(), Se("tr", {
          role: "row",
          key: h[t.textProp],
          "aria-selected": t.isSelected(h),
          class: lr({ focus: t.isActive(w), selected: t.isSelected(h) }),
          onClick: ou((V) => t.select(h), ["stop"])
        }, [
          (oe(!0), Se(Lr, null, $o(t.config, (V, U) => (oe(), Se("td", {
            key: h[t.textProp] + V.prop,
            id: t.getId(w, U),
            "aria-selected": t.isSelected(h),
            class: lr({ "focus-cell": t.isActiveCell(w, U) })
          }, [
            V.prop === t.textProp ? (oe(), Et(d, {
              key: 0,
              highlight: t.highlight,
              query: t.query,
              text: h[V.prop]
            }, null, 8, ["highlight", "query", "text"])) : (oe(), Se("p", TS, zt(h[V.prop]), 1))
          ], 10, VS))), 128))
        ], 10, vS))), 128))
      ])
    ], 10, mS)
  ], 512);
}
var US = /* @__PURE__ */ hr(hS, [["render", gS], ["__scopeId", "data-v-58c88fd1"]]);
const RS = io({
  components: {
    FeatherList: ru,
    FeatherListItem: wi
  }
});
function NS(t, o, r, a, l, c) {
  const d = be("FeatherListItem"), h = be("FeatherList");
  return oe(), Et(h, { class: "result-list" }, {
    default: He(() => [
      at(d, { "as-li": "" }, {
        default: He(() => [
          Ac(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var yS = /* @__PURE__ */ hr(RS, [["render", NS], ["__scopeId", "data-v-06b752c6"]]);
const kS = io({
  name: "Chip",
  emits: ["delete"],
  props: {
    focused: {
      type: Boolean,
      default: !1
    },
    removeLabel: {
      type: String,
      required: !0
    },
    text: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    pre: {
      type: Object
    }
  },
  computed: {
    showPreIcon() {
      return this.pre && this.pre.icon && this.pre.title;
    }
  },
  methods: {
    handleClick() {
      this.$emit("delete");
    }
  },
  components: {
    FeatherIcon: $,
    Cancel: li,
    BaseChip: rs,
    BaseChipLabel: os,
    BaseChipPreIcon: is
  }
});
function MS(t, o, r, a, l, c) {
  const d = be("FeatherIcon"), h = be("BaseChipPreIcon"), w = be("BaseChipLabel"), V = be("Cancel"), U = be("BaseChip");
  return oe(), Et(U, {
    class: lr(["focus autocomplete-chip", { focused: t.focused }]),
    condensed: "",
    disabled: t.disabled
  }, {
    default: He(() => [
      t.showPreIcon ? (oe(), Et(h, { key: 0 }, {
        default: He(() => {
          var R, y;
          return [
            at(d, {
              icon: (R = t.pre) == null ? void 0 : R.icon,
              title: (y = t.pre) == null ? void 0 : y.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : St("", !0),
      at(w, null, {
        default: He(() => [
          ww(zt(t.text), 1)
        ]),
        _: 1
      }),
      t.disabled ? St("", !0) : (oe(), Se("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = ou((...R) => t.handleClick && t.handleClick(...R), ["stop"]))
      }, [
        at(d, {
          class: "delete-icon",
          flex: "",
          title: t.removeLabel
        }, {
          default: He(() => [
            at(V)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var ZS = /* @__PURE__ */ hr(kS, [["render", MS], ["__scopeId", "data-v-e0fc6ac0"]]);
const bS = {}, JS = (t) => (nS("data-v-aa720e06"), t = t(), rS(), t), ES = { class: "spinner-container" }, SS = /* @__PURE__ */ JS(() => /* @__PURE__ */ it("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ it("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), AS = [
  SS
];
function FS(t, o) {
  return oe(), Se("div", ES, AS);
}
var WS = /* @__PURE__ */ hr(bS, [["render", FS], ["__scopeId", "data-v-aa720e06"]]), ss = /* @__PURE__ */ ((t) => (t.multi = "multi", t.single = "single", t))(ss || {});
const gw = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, CS = Tt(Tt(Tt({
  id: {
    type: String
  },
  modelValue: {
    type: [Array, Object]
  },
  results: {
    type: Array,
    default: () => []
  },
  textProp: {
    type: String,
    default: "_text"
  },
  loading: {
    type: Boolean,
    default: !1
  },
  minChar: {
    type: Number,
    default: 0
  },
  allowNew: {
    type: Boolean,
    default: !1
  },
  selectionLimit: {
    type: Number
  },
  newMatcher: {
    type: Function,
    default: (t, o, r) => t[r.textProp].toString().toLowerCase() === o.toLowerCase()
  },
  type: {
    type: String,
    required: !0,
    validator: (t) => !!ss[t]
  },
  labels: {
    type: Object,
    default: () => gw
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, as), hi), $c), xS = {
  "update:modelValue": (t) => !0,
  new: (t) => !0,
  search: (t) => !0
}, BS = (t, o, r, a) => {
  if (r.toLowerCase() === ss.multi) {
    const c = t.modelValue, d = (h) => {
      t.selectionLimit.value && h.length >= t.selectionLimit.value ? t.selectionLimitReached.value = !0 : t.selectionLimitReached.value = !1;
    };
    return {
      getInitialText() {
        return "";
      },
      handleModelValueChange(h) {
        h && h.length && d(h);
      },
      hasValue() {
        return !!(c.value && c.value.length);
      },
      selectItem(h) {
        if (c.value && c.value.filter((V) => V[t.textProp.value] === h[t.textProp.value]).length)
          return;
        const w = c.value ? [...c.value, h] : [h];
        a("update:modelValue", w), d(w);
      },
      removeItem(h) {
        const w = c.value.findIndex((V) => {
          if (h[t.textProp.value] === V[t.textProp.value])
            return !0;
        });
        debugger;
        if (w > -1) {
          const V = c.value.slice(0);
          V.splice(w, 1), a("update:modelValue", V), d(V), t.input.value.focus();
        }
      },
      clickedItem() {
        t.query.value = "", t.emitSearch();
      },
      handleInputBlur() {
      }
    };
  }
  const l = t.modelValue;
  return {
    getInitialText() {
      return l.value ? l.value[t.textProp.value] : "";
    },
    handleModelValueChange() {
      t.query.value = this.getInitialText();
    },
    hasValue() {
      return !!l.value;
    },
    selectItem(c) {
      o.active.row = -1, t.forceCloseResults.value = !0, c && c._new && t.allowNew ? a("new", c._new) : a("update:modelValue", c);
    },
    removeItem() {
    },
    clickedItem() {
      t.forceCloseResults.value = !0;
    },
    handleInputBlur() {
      if (o.active.row > -1) {
        const c = t.internalResults.value[o.active.row];
        c && c._new && t.allowNew ? a("new", c._new) : a("update:modelValue", c);
      }
    }
  };
}, IS = () => {
  const t = vw({
    row: -1
  }), o = (c) => {
    Vw(() => {
      t.row = c;
    });
  }, r = (c, d) => {
    if (c.keyCode === K.DOWN) {
      if (c.preventDefault(), t.row === -1)
        a(), o(0);
      else if (t.row + 1 <= d.length - 1) {
        const h = t.row;
        a(), o(h + 1);
      }
      return !0;
    }
    if (c.keyCode === K.UP) {
      if (c.preventDefault(), t.row === 0)
        a();
      else if (t.row > 0) {
        const h = t.row;
        a(), o(h - 1);
      }
      return !0;
    }
    return !1;
  }, a = () => {
    t.row = -1;
  };
  return { reset: a, handleKeyPress: r, active: t, first: () => {
    t.row = 0;
  } };
}, DS = (t) => {
  const o = vw({
    row: -1,
    col: -1
  }), r = (d, h) => {
    Vw(() => {
      o.col = h, o.row = d;
    });
  }, a = (d, h) => {
    if (d.keyCode === K.DOWN) {
      if (d.preventDefault(), o.row === -1)
        l(), r(0, 0);
      else if (o.row + 1 <= h.length - 1) {
        const w = o.row, V = o.col;
        l(), r(w + 1, V);
      }
      return !0;
    }
    if (d.keyCode === K.UP) {
      if (d.preventDefault(), o.row === 0)
        l();
      else if (o.row > 0) {
        const w = o.row, V = o.col;
        l(), r(w - 1, V);
      }
      return !0;
    }
    if (d.keyCode === K.RIGHT && o.row !== -1) {
      if (d.preventDefault(), o.col + 1 <= t.length - 1) {
        const w = o.col, V = o.row;
        l(), r(V, w + 1);
      } else if (o.col <= t.length - 1 && o.row + 1 <= h.length - 1) {
        const w = o.row;
        l(), r(w + 1, 0);
      }
      return !0;
    }
    if (d.keyCode === K.LEFT && o.row !== -1) {
      if (d.preventDefault(), o.col === 0 && o.row === 0)
        return !0;
      if (o.col === 0 && o.row > 0) {
        const w = o.row;
        l(), r(w - 1, t.length - 1);
      } else if (o.col > 0) {
        const w = o.col, V = o.row;
        l(), r(V, w - 1);
      }
      return !0;
    }
    if (d.keyCode === K.END && o.row !== -1) {
      d.preventDefault();
      const w = o.row;
      return l(), r(d.ctrlKey ? h.length - 1 : w, t.length - 1), !0;
    }
    if (d.keyCode === K.HOME && o.row !== -1) {
      d.preventDefault();
      const w = o.row;
      return l(), r(d.ctrlKey ? 0 : w, 0), !0;
    }
    return !1;
  }, l = () => {
    o.row = -1, o.col = -1;
  };
  return { reset: l, handleKeyPress: a, active: o, first: () => {
    l(), r(0, 0);
  } };
}, _S = io({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: xS,
  props: CS,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== ss.multi;
    },
    raised() {
      return this.hasValue || this.hasFocus;
    },
    hasValue() {
      var t;
      return (t = this.strategy) == null ? void 0 : t.hasValue();
    },
    showMenu() {
      return (this.showResults || this.showNoResults || this.showLoading || this.showSelectionLimit || this.showMinCharWarning) && !this.disabled;
    },
    showResults() {
      return this.forceCloseResults || this.selectionLimitReached || this.showMinCharWarning ? !1 : !!(this.hasFocus && this.internalResults && this.internalResults.length && !this.loading);
    },
    showNoResults() {
      return !this.forceCloseResults && this.hasFocus && !this.selectionLimitReached && this.internalResults && this.internalResults.length === 0 && this.query && this.query.length > 0 && this.query.length >= this.minChar && !this.loading;
    },
    showSelectionLimit() {
      return !this.forceCloseResults && this.hasFocus && this.selectionLimitReached && !this.loading;
    },
    showLoading() {
      return this.hasFocus && this.loading;
    },
    showMinCharWarning() {
      return this.minChar > 0 && !this.selectionLimitReached && !this.loading && this.hasFocus && this.query.length < this.minChar;
    },
    resultItemId() {
      return ae("result-item");
    },
    minCharWarningId() {
      return ae("min-char-warning");
    },
    subTextId() {
      return ae("feather-autocomplete-description");
    },
    resultsId() {
      return ae("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return ae("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return $l(KJ);
    },
    minCharIcon() {
      return $l(uE);
    },
    dropdownIcon() {
      return $l(tu);
    },
    inputAttrs() {
      const t = [this.selectedDescriptionId, this.subTextId].filter(Boolean);
      let o = "";
      return this.activeChipIndex > -1 && (o = this.activeChipId), this.active.row > -1 && this.showResults && (o = this.resultItemId), this.minChar && t.push(this.minCharWarningId), {
        id: this.inputId,
        "aria-describedby": t.join(" "),
        "aria-busy": this.loading,
        "aria-activedescendant": o,
        disabled: this.disabled,
        "aria-disabled": this.disabled,
        "aria-autocomplete": "list",
        autocomplete: "off",
        readonly: !!this.disabled,
        tabindex: this.disabled ? -1 : 0,
        "aria-controls": this.showResults ? this.resultsId : "",
        "aria-invalid": this.$attrs["aria-invalid"] === "true" || !!this.error
      };
    },
    inputListeners() {
      return {
        input: this.handleTextInput,
        blur: this.handleInputBlur,
        focus: this.handleInputFocus,
        click: this.handleInputEnter,
        keydown: this.handleInputKeyDown
      };
    },
    comboxBoxAttrs() {
      return {
        role: "combobox",
        "aria-expanded": this.showResults ? "true" : "false",
        "aria-haspopup": this.gridConfig ? "grid" : "listbox",
        "aria-owns": this.resultsId,
        "aria-label": this.label
      };
    },
    scrollContainer() {
      return this.$refs.scroll.$el.querySelector(".feather-input-wrapper");
    },
    computedMinCharText() {
      return this.minCharLabel ? this.minCharLabel.replace("${min}", this.minChar.toString()) : "";
    },
    selectedDescribedByText() {
      return this.modelValue && this.modelValue.length ? this.modelValue.map((o) => o[this.textProp]).join(", ") : "";
    },
    allowNewEnabled() {
      return this.singleSelect && this.allowNew;
    },
    modelValueList() {
      return this.singleSelect ? [] : this.modelValue;
    }
  },
  watch: {
    activeChipIndex(t) {
      t && this.genActiveChipId(), t > -1 && this.scrollContainer && this.$nextTick(() => {
        ri(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(t) {
      !this.inputRef || t !== this.inputRef.value && (this.inputRef.value = t);
    },
    modelValue: {
      handler(t, o) {
        t && o && t.length > o.length && this.scrollContainer && this.$nextTick(() => {
          ri(this.inputRef, this.scrollContainer);
        }), this.strategy.handleModelValueChange(t), this.hasFocus || this.adjustTextArea();
      },
      immediate: !0
    },
    results(t) {
      t && t.length > 0 && this.selectFirst(), this.forceCloseResults = !1, t && t.length === 0 && this.query && this.query.length > 0 && !this.allowNewEnabled && this.setAlert(this.noResultsLabel), this.allowNewEnabled && this.query.length && (t.some((r) => this.newMatcher(r, this.query, this)) || (t = [
        {
          [this.textProp]: this.query,
          _new: this.query
        },
        ...t
      ])), this.internalResults = t;
    },
    showResults(t) {
      const o = this.$refs.menu;
      t && o.calculatePosition && o.calculatePosition();
    },
    selectionLimitReached(t) {
      t && this.setAlert(this.selectionLimitLabel);
    }
  },
  methods: {
    getPre(t) {
      return t._pre;
    },
    genActiveChipId() {
      return this.activeChipId = ae("active-chip"), this.activeChipId;
    },
    setAlert(t) {
      const o = this.$refs.alert;
      o.textContent = t, setTimeout(() => {
        o.textContent = "";
      }, 100);
    },
    handleClear() {
      this.query = "", this.inputRef.focus(), this.emitSearch(), this.$emit("update:modelValue", void 0);
    },
    handleInputFocus() {
      this.disabled || (this.adjustTextArea(), !this.hasFocus && (this.hasFocus = !0, this.modelValue && this.singleSelect && this.inputRef.select()));
    },
    handleInputEnter() {
      this.handleInputFocus(), this.emitSearch();
    },
    handleTextInput(t) {
      this.adjustTextArea();
      const r = t.target.value;
      r !== void 0 && (to(this.typingTimeout), this.typingTimeout = eo(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(t) {
      const o = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (t.keyCode === K.ENTER && t.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(t, this.internalResults)) {
        o(), this.forceCloseResults = !1;
        return;
      }
      if (t.keyCode === K.ENTER && this.activeChipIndex > -1) {
        t.preventDefault();
        const a = this.modelValue;
        this.removeFromValue(a[this.activeChipIndex]), o();
        return;
      }
      if (t.keyCode === K.ENTER && this.active.row > -1) {
        t.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((t.keyCode === K.ENTER || t.keyCode === K.SPACE || t.keyCode === K.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        t.preventDefault(), this.emitSearch();
        return;
      }
      if (t.keyCode === K.ESCAPE) {
        this.forceCloseResults = !0, r(), o();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const a = this.modelValue;
        t.keyCode === K.LEFT && (t.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = a.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), t.keyCode === K.RIGHT && (t.preventDefault(), this.activeChipIndex === a.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < a.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (t.keyCode === K.DELETE || t.keyCode === K.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(a[this.activeChipIndex]), r(), o());
      }
    },
    handleTriggerClick() {
      this.disabled || (this.inputRef.focus(), this.handleDropdownIconClick());
    },
    handleInputBlur() {
      this.validate(), this.strategy.handleInputBlur(), (this.forceCloseResults || !this.showMenu) && this.handleOutsideClick();
    },
    handleOutsideClick() {
      this.hasFocus = !1, this.forceCloseResults = !1, this.activeChipIndex = -1, this.resetResultIndex(), this.query = this.strategy.getInitialText(), this.internalResults = [], this.adjustTextArea();
    },
    clickedItem(t) {
      this.selectItem(t), this.internalResults = [], this.inputRef.focus(), this.strategy.clickedItem();
    },
    selectItem(t) {
      this.strategy.selectItem(t), this.adjustTextArea();
    },
    removeFromValue(t) {
      this.strategy.removeItem(t);
    },
    handleDropdownIconClick() {
      if (this.showMenu) {
        this.forceCloseResults = !0;
        return;
      }
      this.forceCloseResults || this.emitSearch();
    },
    adjustTextArea() {
      const t = this.inputRef;
      !t || (t.style.height = "1.625rem", t.style.flexBasis = "40px", t.style.whiteSpace = "nowrap", this.$nextTick(() => {
        const o = t.getBoundingClientRect().width, r = t.parentElement;
        t.scrollWidth <= t.clientWidth && r && o < r.getBoundingClientRect().width ? t.style.whiteSpace = "nowrap" : (t.style.whiteSpace = "normal", t.style.flexBasis = "100%"), this.$nextTick(() => {
          t.style.height = `${t.scrollHeight}px`;
        });
      }));
    }
  },
  setup(t, o) {
    const r = nw(ql(t, "labels"), gw);
    pi(t), qc(t);
    let a;
    t.gridConfig ? a = DS(t.gridConfig) : a = IS();
    const l = ql(t, "id"), c = cp(() => l.value ? l.value : ae("feather-autocomplete-input")), { validate: d } = di(c, ql(t, "modelValue"), t.label, t.schema), { selectionLimit: h, modelValue: w, textProp: V, allowNew: U, type: R, minChar: y } = oS(t), F = Br(!1), S = Br(!1), C = Br(!1), D = Br(""), E = Br([]), B = Br(), x = cp(() => B.value), P = () => {
      F.value && !S.value && (D.value && D.value.length >= y.value && o.emit("search", D.value), y.value <= 0 && o.emit("search", D.value || ""), E.value = [], a.reset());
    }, b = BS({
      selectionLimit: h,
      selectionLimitReached: S,
      modelValue: w,
      textProp: V,
      allowNew: U,
      forceCloseResults: C,
      query: D,
      internalResults: E,
      input: x,
      emitSearch: P
    }, a, R.value, o.emit);
    return tS(Tt(Tt({}, r), fi(o.attrs)), {
      query: D,
      internalResults: E,
      selectionLimitReached: S,
      forceCloseResults: C,
      hasFocus: F,
      strategy: b,
      emitSearch: P,
      active: a.active,
      handleResultNavigation: a.handleKeyPress,
      resetResultIndex: a.reset,
      selectFirst: a.first,
      inputId: c,
      input: B,
      incomingId: l,
      inputRef: x,
      validate: d
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: Lc,
    InputSubText: ui,
    AutocompleteResults: fS,
    AutocompleteResultsGrid: US,
    Chip: ZS,
    MenuMessage: yS,
    FeatherIcon: $,
    FeatherMenu: hw,
    Spinner: WS
  }
}), OS = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, QS = ["id"], zS = { "data-ref-id": "feather-autocomplete-no-results" }, GS = { "data-ref-id": "feather-autocomplete-selection-limit" }, YS = { "data-ref-id": "feather-autocomplete-min-char" };
function PS(t, o, r, a, l, c) {
  const d = be("FeatherIcon"), h = be("Chip"), w = be("InputWrapper"), V = be("AutocompleteResults"), U = be("AutocompleteResultsGrid"), R = be("MenuMessage"), y = be("Spinner"), F = be("FeatherMenu"), S = be("InputSubText");
  return oe(), Se("div", Kl(t.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    at(F, {
      fill: "",
      "no-expand": "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: lr(["feather-autocomplete-menu-container", { grid: t.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: He(({ attrs: C, on: D }) => [
        at(w, Kl(Tt(Tt({}, C), t.comboxBoxAttrs), {
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "clear-text": t.clearLabel,
          showClear: t.singleSelect && t.hasValue,
          onClear: t.handleClear
        }, up(D), { ref: "scroll" }), {
          pre: He(() => [
            Ac(t.$slots, "pre", {}, () => [
              at(d, { icon: t.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: He(() => [
            at(d, {
              icon: t.dropdownIcon,
              class: lr(["feather-autocomplete-dropdown-icon", { rotate: t.showMenu }]),
              onClick: t.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: He(() => [
            it("div", {
              class: lr(["feather-autocomplete-content", { disabled: t.disabled }])
            }, [
              it("div", OS, null, 512),
              it("div", {
                class: "description",
                id: t.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, zt(t.selectedDescribedByText), 9, QS),
              (oe(!0), Se(Lr, null, $o(t.modelValueList, (E, B) => ma((oe(), Et(h, {
                key: E[t.textProp],
                role: "button",
                id: B === t.activeChipIndex ? t.activeChipId : null,
                focused: B === t.activeChipIndex,
                disabled: t.disabled,
                text: E[t.textProp],
                "remove-label": t.removeLabel,
                pre: t.getPre(E),
                onDelete: (x) => t.removeFromValue(E)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [wa, !t.singleSelect]
              ])), 128)),
              it("textarea", Kl(t.inputAttrs, {
                class: ["feather-autocomplete-input", { error: t.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, up(t.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: He(() => [
        t.gridConfig ? St("", !0) : ma((oe(), Et(V, {
          key: 0,
          items: t.internalResults,
          value: t.modelValue,
          "text-prop": t.textProp,
          activeId: t.resultItemId,
          activeIndex: t.active.row,
          "aria-label": t.label,
          onSelect: t.clickedItem,
          onDeselect: t.removeFromValue,
          class: "autocomplete-results",
          id: t.resultsId,
          single: t.singleSelect,
          "new-label": t.newLabel,
          highlight: t.highlight,
          query: t.query,
          ref: "results"
        }, null, 8, ["items", "value", "text-prop", "activeId", "activeIndex", "aria-label", "onSelect", "onDeselect", "id", "single", "new-label", "highlight", "query"])), [
          [wa, t.showResults]
        ]),
        t.gridConfig ? ma((oe(), Et(U, {
          key: 1,
          items: t.internalResults,
          value: t.modelValue,
          "text-prop": t.textProp,
          config: t.gridConfig,
          activeId: t.resultItemId,
          activeRow: t.active.row,
          activeCol: t.active.col,
          "aria-label": t.label,
          onSelect: t.clickedItem,
          class: "autocomplete-results",
          id: t.resultsId,
          single: t.singleSelect,
          highlight: t.highlight,
          query: t.query
        }, null, 8, ["items", "value", "text-prop", "config", "activeId", "activeRow", "activeCol", "aria-label", "onSelect", "id", "single", "highlight", "query"])), [
          [wa, t.showResults]
        ]) : St("", !0),
        t.showNoResults ? (oe(), Et(R, { key: 2 }, {
          default: He(() => [
            it("span", zS, zt(t.noResultsLabel), 1)
          ]),
          _: 1
        })) : St("", !0),
        t.showSelectionLimit ? (oe(), Et(R, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: He(() => [
            at(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            it("span", GS, zt(t.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : St("", !0),
        t.minChar ? ma((oe(), Et(R, {
          key: 4,
          class: "min-char-warning",
          id: t.minCharWarningId
        }, {
          default: He(() => [
            at(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            it("span", YS, [
              Ac(t.$slots, "min-char", {}, () => [
                ww(zt(t.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [wa, t.showMinCharWarning]
        ]) : St("", !0),
        t.showLoading ? (oe(), Et(y, { key: 5 })) : St("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    at(S, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var HS = /* @__PURE__ */ hr(_S, [["render", PS], ["__scopeId", "data-v-43a7e951"]]);
const jS = window.Pinia.defineStore, Uw = jS("appStore", {
  state: () => ({
    showError: !1,
    errorMessage: ""
  }),
  actions: {
    showErrorMsg(t) {
      this.showError = !0, this.errorMessage = t, setTimeout(() => {
        this.showError = !1, this.errorMessage = "";
      }, 1800);
    }
  }
}), XS = window.Vue.defineComponent, wn = window.Vue.createElementVNode, An = window.Vue.unref, Fn = window.Vue.createVNode, dp = window.Vue.withCtx, va = window.Vue.toDisplayString, LS = window.Vue.renderList, $S = window.Vue.Fragment, Ir = window.Vue.openBlock, Dr = window.Vue.createElementBlock, ec = window.Vue.createCommentVNode, qS = window.Vue.pushScopeId, KS = window.Vue.popScopeId, au = (t) => (qS("data-v-ce307a7a"), t = t(), KS(), t), eA = { class: "list-main" }, tA = { class: "header" }, nA = /* @__PURE__ */ au(() => /* @__PURE__ */ wn("h2", null, "Situation List", -1)), rA = /* @__PURE__ */ au(() => /* @__PURE__ */ wn("span", null, "New Situation", -1)), oA = { class: "filters" }, iA = /* @__PURE__ */ au(() => /* @__PURE__ */ wn("span", null, "Reset Filters", -1)), aA = { class: "autocomplete" }, sA = {
  key: 0,
  class: "container"
}, lA = { class: "situation-list" }, cA = {
  key: 0,
  class: "footer-pager"
}, uA = {
  key: 1,
  class: "container"
}, dA = window.Vue.reactive, _r = window.Vue.ref, fA = window.Vue.watch, hA = window.VueRouter.useRouter, pA = /* @__PURE__ */ XS({
  __name: "SituationList",
  setup(t) {
    const o = hA(), r = fr(), a = Uw();
    r.getSituations(), r.getNodes(), r.getUnassignedAlarms();
    const l = 9, c = dA({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: [],
      filterSeverities: ["all"]
    }), d = _r(!1), h = _r(0), w = _r(1), V = _r(0), U = _r(!1), R = _r(!1), y = (W) => {
      h.value = 0, c.situations = W[0], w.value = W.length;
    }, F = () => {
      c.nodes = r.nodes, c.results = r.nodes;
    };
    a.$subscribe((W, A) => {
      R.value = A.showError;
    }), fA(
      () => r.situations,
      () => {
        F(), V.value = r.situations.length, c.allSituations = we.exports.chunk(r.situations, l);
        const W = r.situations.map((A) => A.id);
        r.filteredSituations = W, y(c.allSituations), S();
      }
    );
    const S = () => {
      r.filters && (r.filters.node && (c.nodeSelectedValue = r.filters.node), r.filters.severities && (c.filterSeverities = r.filters.severities), D(), r.filters = null);
    }, C = (W) => {
      if (!W)
        return c.nodeSelectedValue = void 0, [];
      d.value = !0, c.results = c.nodes.filter((A) => A.label.toLowerCase().indexOf(W) > -1).map((A) => ({
        _text: A.label,
        id: A.id
      })), d.value = !1;
    }, D = () => {
      if (c.nodeSelectedValue && c.nodeSelectedValue._text) {
        let W = r.situations.map((A) => {
          if (A.relatedAlarms.filter(
            (he) => {
              var se;
              return he.nodeLabel === ((se = c.nodeSelectedValue) == null ? void 0 : se._text);
            }
          ).length > 0)
            return A;
        }).filter((A) => A);
        if (W) {
          c.filterSeverities.includes("all") || (W = W.filter(
            (O) => c.filterSeverities.includes(O.severity)
          )), V.value = W.length, c.situations = W;
          const A = W.map((O) => O.id);
          r.filteredSituations = A, U.value = !0;
        }
      } else if (c.nodeSelectedValue = void 0, c.filterSeverities.includes("all"))
        b();
      else {
        const W = r.situations.filter(
          (O) => c.filterSeverities.includes(O.severity)
        );
        c.situations = W, V.value = W.length;
        const A = W.map((O) => O.id);
        U.value = !0, r.filteredSituations = A;
      }
    }, E = (W) => {
      h.value = W, c.situations = c.allSituations[h.value];
    }, B = (W) => {
      (c.nodeSelectedValue || c.filterSeverities.length) && (r.filters = {
        node: c.nodeSelectedValue,
        severities: c.filterSeverities
      }), o.push({
        name: "situationDetail",
        params: {
          id: W
        }
      });
    }, x = (W) => {
      W.includes("all") && !c.nodeSelectedValue ? b() : (c.filterSeverities = W, D());
    }, P = () => {
      o.push({
        name: "addSituation"
      });
    }, b = () => {
      c.filterSeverities = ["all"], c.nodeSelectedValue = void 0;
      const W = r.situations.map((A) => A.id);
      r.filteredSituations = W, V.value = r.situations.length, y(c.allSituations), U.value = !1;
    };
    return (W, A) => (Ir(), Dr("div", eA, [
      wn("div", tA, [
        nA,
        Fn(An(We), {
          class: "new-situation-btn",
          onClick: A[0] || (A[0] = () => P())
        }, {
          default: dp(() => [
            Fn(An($), {
              icon: An(dw),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            rA
          ]),
          _: 1
        })
      ]),
      wn("div", oA, [
        Fn(An(We), {
          class: "reset-btn",
          onClick: A[1] || (A[1] = () => b())
        }, {
          default: dp(() => [
            Fn(An($), {
              icon: An(uw),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            iA
          ]),
          _: 1
        }),
        Fn(Kc, {
          alarms: An(r).situations,
          onSelectedSeverities: x,
          "pre-selected": c.filterSeverities
        }, null, 8, ["alarms", "pre-selected"]),
        wn("div", aA, [
          Fn(An(HS), {
            class: "map-search",
            label: "Find by node",
            loading: d.value,
            modelValue: c.nodeSelectedValue,
            "onUpdate:modelValue": [
              A[2] || (A[2] = (O) => c.nodeSelectedValue = O),
              D
            ],
            results: c.results,
            type: "single",
            onSearch: C
          }, null, 8, ["loading", "modelValue", "results"])
        ])
      ]),
      c.situations && c.situations.length > 0 ? (Ir(), Dr("div", sA, [
        wn("div", null, " Result: " + va(c.situations.length) + " of " + va(V.value), 1),
        wn("div", lA, [
          (Ir(!0), Dr($S, null, LS(c.situations, (O) => (Ir(), Dr("div", {
            class: "card",
            key: O.id
          }, [
            Fn(bM, {
              onClick: () => B(O.id),
              "situation-info": O
            }, null, 8, ["onClick", "situation-info"])
          ]))), 128))
        ]),
        !U.value && V.value > l ? (Ir(), Dr("div", cA, [
          wn("div", null, "Page: " + va(h.value + 1) + " of " + va(w.value), 1),
          Fn(TZ, {
            onGoToPage: E,
            currentPage: h.value,
            totalPages: w.value
          }, null, 8, ["currentPage", "totalPages"])
        ])) : ec("", !0)
      ])) : ec("", !0),
      !c.situations || c.situations.length == 0 ? (Ir(), Dr("div", uA, " No results found ")) : ec("", !0)
    ]));
  }
});
const mA = /* @__PURE__ */ Ue(pA, [["__scopeId", "data-v-ce307a7a"]]);
const Va = window.Vue.ref, wA = window.Vue.inject, vA = window.Vue.computed, VA = window.Vue.onMounted, TA = {
  id: {
    type: String
  },
  controls: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, gA = (t) => {
  const o = Va(!1), r = Va(), a = Va(t.controls), l = Va(t.id), c = () => {
    r.value && r.value.focus();
  }, d = wA("registerTab");
  VA(() => {
    if (r.value && d) {
      const w = r.value.parentElement, V = w && w.parentElement ? w.parentElement : void 0, U = Array.from(V ? V.children : []).filter((y) => y.querySelectorAll("[role=tab]").length), R = w ? U.indexOf(w) : -1;
      d({
        el: r.value,
        focus: c,
        disabled: t.disabled,
        selected: o,
        id: l,
        controls: a,
        index: R
      });
    }
  });
  const h = vA(() => ({
    role: "tab",
    ref: "tab",
    tabindex: o.value ? 0 : -1,
    id: l.value,
    "aria-selected": o.value,
    "aria-controls": a.value,
    "aria-disabled": t.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: o,
    attrs: h,
    tab: r
  };
}, fp = window.Vue.ref, UA = window.Vue.toRef, RA = window.Vue.watch, hp = window.Vue.provide, NA = {
  prop: "modelValue",
  event: "update:modelValue"
}, yA = {
  "update:modelValue": (t) => !0
}, kA = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, MA = (t, o) => {
  const r = UA(t, "modelValue"), a = fp(t.modelValue), l = fp([]);
  RA(r, (S) => {
    w(S);
  });
  const c = (S) => {
    S.preventDefault(), l.value.some((C, D) => C.tab && C.tab.el.contains(S.target) ? (h(D), w(D), !0) : !1);
  }, d = (S) => {
    if (((O) => O.shiftKey || O.ctrlKey || O.metaKey || O.altKey)(S))
      return;
    const D = S.keyCode, E = (O) => {
      O.stopPropagation(), O.preventDefault();
    }, B = l.value.filter((O) => O.tab && !O.tab.disabled), x = l.value.findIndex((O) => O.tab && O.tab.el.contains(document.activeElement));
    let P = x !== -1 ? x : a.value;
    const b = [K.RIGHT], W = [K.LEFT], A = [K.ENTER, K.SPACE];
    t.vertical && (b.push(K.DOWN), W.push(K.UP)), b.indexOf(D) > -1 ? (P++, P >= B.length && (P = 0), E(S), h(l.value.indexOf(B[P]))) : W.indexOf(D) > -1 && (P--, P < 0 && (P = B.length - 1), E(S), h(l.value.indexOf(B[P]))), A.indexOf(D) > -1 && w(P);
  }, h = (S) => {
    l.value.forEach(function(C, D) {
      S === D && C.tab && C.tab.focus();
    });
  }, w = (S) => {
    const C = l.value[S];
    !C || C.tab && C.tab.disabled || (l.value.forEach((D, E) => {
      D.tab && (D.tab.selected = S === E), D.panel && (D.panel.selected = S === E);
    }), a.value = S, o.emit("update:modelValue", S));
  };
  hp("registerTab", (S) => {
    const C = S.index;
    C > -1 && (l.value[C] = { ...l.value[C], tab: S }, l.value = [...l.value], R());
  }), hp("registerPanel", (S) => {
    const C = S.index;
    C > -1 && (l.value[C] = {
      ...l.value[C],
      panel: S
    }, l.value = [...l.value], R());
  });
  const R = () => {
    l.value.forEach(({ tab: S, panel: C }, D) => {
      if (C && S) {
        const E = S.id || ae("tab"), B = S.controls || ae("panel");
        S.controls = B, S.id = E, C.tab = E, C.id = B;
      }
      D === a.value && (C && (C.selected = !0), S && (S.selected = !0));
    });
  };
  return {
    listeners: {
      click: c,
      keydown: d
    },
    attrs: {
      role: "tablist"
    },
    selected: a,
    pairs: l
  };
}, Ta = window.Vue.ref, ZA = window.Vue.inject, bA = window.Vue.computed, JA = window.Vue.onMounted, EA = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, SA = (t) => {
  const o = Ta(!1), r = Ta(), a = Ta(t.tab), l = Ta(t.id), c = ZA("registerPanel");
  JA(() => {
    if (c) {
      const h = r.value, w = h && h.parentElement ? h.parentElement : void 0, V = h ? Array.from(w ? w.children : []).indexOf(h) : -1;
      c({
        selected: o,
        id: l,
        tab: a,
        el: r.value,
        index: V
      });
    }
  });
  const d = bA(() => ({
    role: "tabpanel",
    id: l.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": o.value,
    "aria-labelledby": a.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: o,
    attrs: d,
    panel: r
  };
}, su = window.Vue.defineComponent, AA = window.Vue.resolveComponent, lu = window.Vue.openBlock, cu = window.Vue.createElementBlock, qo = window.Vue.createElementVNode, Rw = window.Vue.mergeProps, ja = window.Vue.renderSlot, FA = window.Vue.createVNode, WA = window.Vue.normalizeStyle, CA = window.Vue.toHandlers, xA = window.Vue.withDirectives, BA = window.Vue.normalizeProps, IA = window.Vue.guardReactiveProps, DA = window.Vue.vShow;
var uu = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const _A = TA, OA = su({
  props: _A,
  setup(t) {
    return gA(t);
  },
  components: {
    FeatherRipple: ur
  }
}), QA = { role: "presentation" }, zA = { class: "tab-text" };
function GA(t, o, r, a, l, c) {
  const d = AA("FeatherRipple");
  return lu(), cu("li", QA, [
    qo("button", Rw(t.attrs, {
      class: ["tab hover focus", { disabled: t.disabled, selected: t.selected }]
    }), [
      qo("span", zA, [
        ja(t.$slots, "default", {}, void 0, !0)
      ]),
      FA(d)
    ], 16)
  ]);
}
var pp = /* @__PURE__ */ uu(OA, [["render", GA], ["__scopeId", "data-v-e6bb52b6"]]);
const YA = kA, PA = yA, HA = su({
  model: NA,
  emits: PA,
  props: YA,
  setup(t, o) {
    return MA(t, o);
  },
  data: () => ({
    transform: "",
    durationNumber: 250,
    width: "1px",
    ro: void 0
  }),
  watch: {
    selected() {
      this.updateSlider();
    },
    pairs: {
      handler(t) {
        t && t.length && this.ro && t.forEach((o) => {
          o.tab && this.ro.observe(o.tab.el);
        });
      },
      immediate: !0
    }
  },
  computed: {
    duration() {
      return `${this.durationNumber}ms`;
    }
  },
  methods: {
    updateSlider() {
      this.$refs.slider.getBoundingClientRect().width < 5 ? this.durationNumber = 0 : this.durationNumber = 250, this.$nextTick(() => {
        const t = this.$el.getBoundingClientRect(), o = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), r = o.left - t.left, a = o.height - 2;
        this.width = `${o.width}px`, this.transform = `translateX(${r}px) translateY(${a}px)`;
      });
    }
  },
  mounted() {
    this.updateSlider(), this.ro = new ResizeObserver(() => {
      this.updateSlider();
    });
  },
  unmounted() {
    this.ro.disconnect();
  }
}), jA = { class: "feather-tab-container" }, XA = { class: "tab-panels" };
function LA(t, o, r, a, l, c) {
  return lu(), cu("div", jA, [
    qo("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: WA({
        transform: t.transform,
        "transition-duration": t.duration,
        width: t.width
      })
    }, null, 4),
    qo("ul", Rw(t.attrs, CA(t.listeners)), [
      ja(t.$slots, "tabs", {}, void 0, !0)
    ], 16),
    qo("div", XA, [
      ja(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var $A = /* @__PURE__ */ uu(HA, [["render", LA], ["__scopeId", "data-v-27adffb9"]]);
const qA = EA, KA = su({
  props: qA,
  setup(t) {
    return SA(t);
  }
});
function eF(t, o, r, a, l, c) {
  return xA((lu(), cu("div", BA(IA(t.attrs)), [
    ja(t.$slots, "default")
  ], 16)), [
    [DA, t.selected]
  ]);
}
var mp = /* @__PURE__ */ uu(KA, [["render", eF]]);
const tF = window.Vue.defineComponent, nF = window.Vue.toDisplayString, rF = window.Vue.normalizeClass, oF = window.Vue.openBlock, iF = window.Vue.createElementBlock, aF = window.Vue.createCommentVNode, sF = /* @__PURE__ */ tF({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const o = t;
    return (r, a) => o != null && o.severity ? (oF(), iF("span", {
      key: 0,
      class: rF(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, nF(o.severity), 3)) : aF("", !0);
  }
});
const Nw = /* @__PURE__ */ Ue(sF, [["__scopeId", "data-v-83c2cdce"]]), lF = window.Vue.defineComponent, wp = window.Vue.toDisplayString, vp = window.Vue.createElementVNode, cF = window.Vue.openBlock, uF = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const dF = { class: "box" }, fF = { class: "label" }, hF = { class: "date" }, pF = /* @__PURE__ */ lF({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(t) {
    const o = t;
    return (r, a) => (cF(), uF("div", dF, [
      vp("div", fF, wp(o.label), 1),
      vp("div", hF, wp(o.info), 1)
    ]));
  }
});
const tc = /* @__PURE__ */ Ue(pF, [["__scopeId", "data-v-b4afa751"]]), mF = window.Vue.defineComponent, wF = window.Vue.unref, vF = window.Vue.renderList, VF = window.Vue.Fragment, nc = window.Vue.openBlock, rc = window.Vue.createElementBlock, TF = window.Vue.toDisplayString, gF = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const UF = { class: "alarms-list" }, RF = /* @__PURE__ */ mF({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(t) {
    const o = t;
    return (r, a) => (nc(), rc("div", UF, [
      (nc(!0), rc(VF, null, vF(wF(we.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (l, c) => (nc(), rc("div", {
        class: gF(["alarm-count", [`${c.toString().toLowerCase()}-color`, o.size]]),
        key: c
      }, TF(l.length), 3))), 128))
    ]));
  }
});
const NF = /* @__PURE__ */ Ue(RF, [["__scopeId", "data-v-52d63440"]]), yF = window.Vue.openBlock, kF = window.Vue.createElementBlock, MF = window.Vue.createElementVNode;
var ZF = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const bF = {}, JF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, EF = /* @__PURE__ */ MF("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), SF = [
  EF
];
function AF(t, o) {
  return yF(), kF("svg", JF, SF);
}
var FF = /* @__PURE__ */ ZF(bF, [["render", AF]]);
const WF = window.Vue.openBlock, CF = window.Vue.createElementBlock, xF = window.Vue.createStaticVNode;
var BF = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const IF = {}, DF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _F = /* @__PURE__ */ xF('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), OF = [
  _F
];
function QF(t, o) {
  return WF(), CF("svg", DF, OF);
}
var yw = /* @__PURE__ */ BF(IF, [["render", QF]]);
const zF = window.Vue.defineComponent, _t = window.Vue.unref, oc = window.Vue.createVNode, du = window.Vue.createElementVNode, ic = window.Vue.withCtx, ga = window.Vue.openBlock, ac = window.Vue.createBlock, sc = window.Vue.createCommentVNode, GF = window.Vue.normalizeClass, YF = window.Vue.createElementBlock, PF = window.Vue.pushScopeId, HF = window.Vue.popScopeId, fu = (t) => (PF("data-v-e073070b"), t = t(), HF(), t), jF = /* @__PURE__ */ fu(() => /* @__PURE__ */ du("span", null, "Acknowledge", -1)), XF = /* @__PURE__ */ fu(() => /* @__PURE__ */ du("span", null, "Escalate", -1)), LF = /* @__PURE__ */ fu(() => /* @__PURE__ */ du("span", null, "Clear", -1)), $F = /* @__PURE__ */ zF({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(t) {
    const o = t, r = fr(), a = async (c) => {
      await ry(o.alarm.id, c) && r.getSituation(o.situationId), o.isSituation && await Ym(
        o.situationId,
        vt.ACCEPTED.toLowerCase()
      );
    }, l = async (c) => {
      await oy(o.alarm.id, c) && r.getSituation(o.situationId);
    };
    return (c, d) => (ga(), YF("div", {
      class: GF(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      t.alarm.ackTime ? sc("", !0) : (ga(), ac(_t(We), {
        key: 0,
        class: "acction-btn",
        onClick: d[0] || (d[0] = () => a(!0))
      }, {
        default: ic(() => [
          oc(_t($), {
            icon: _t(ai),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          jF
        ]),
        _: 1
      })),
      t.alarm.severity != "CRITICAL" ? (ga(), ac(_t(We), {
        key: 1,
        class: "acction-btn",
        onClick: d[1] || (d[1] = () => l(_t(vt).ESCALATE))
      }, {
        default: ic(() => [
          oc(_t($), {
            icon: _t(FF),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          XF
        ]),
        _: 1
      })) : sc("", !0),
      o.showClear && t.alarm.severity != "NORMAL" && t.alarm.severity != "CLEARED" ? (ga(), ac(_t(We), {
        key: 2,
        class: "acction-btn",
        onClick: d[2] || (d[2] = () => l(_t(vt).CLEAR))
      }, {
        default: ic(() => [
          oc(_t($), {
            icon: _t(yw),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          LF
        ]),
        _: 1
      })) : sc("", !0)
    ], 2));
  }
});
const kw = /* @__PURE__ */ Ue($F, [["__scopeId", "data-v-e073070b"]]);
var qF = Object.defineProperty, KF = Object.defineProperties, eW = Object.getOwnPropertyDescriptors, Vp = Object.getOwnPropertySymbols, tW = Object.prototype.hasOwnProperty, nW = Object.prototype.propertyIsEnumerable, Tp = (t, o, r) => o in t ? qF(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Fc = (t, o) => {
  for (var r in o || (o = {}))
    tW.call(o, r) && Tp(t, r, o[r]);
  if (Vp)
    for (var r of Vp(o))
      nW.call(o, r) && Tp(t, r, o[r]);
  return t;
}, Mw = (t, o) => KF(t, eW(o));
const Zw = window.Vue.defineComponent, rW = window.Vue.inject, oW = window.Vue.resolveComponent, lc = window.Vue.openBlock, gp = window.Vue.createElementBlock, Hr = window.Vue.createElementVNode, iW = window.Vue.createBlock, Up = window.Vue.createCommentVNode, aW = window.Vue.renderSlot, sW = window.Vue.pushScopeId, lW = window.Vue.popScopeId, cc = window.Vue.toRef, Ua = window.Vue.computed, cW = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var uW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const dW = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  },
  indeterminate: {
    type: Boolean,
    default: !1
  },
  label: {
    type: String
  },
  noFocus: {
    type: Boolean,
    default: !1
  }
}, fW = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  indeterminate: (t) => !0
}, hW = Zw({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: fW,
  props: dW,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: rW("registerCheckbox", (o) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : ae("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : ae("checkbox-label");
    }
  },
  watch: {
    indeterminate: {
      handler(t) {
        this.$emit("update:modelValue", void 0), this.$emit("indeterminate", t);
      }
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    updateValue() {
      this.disabled || (this.indeterminate ? (this.$emit("update:modelValue", !0), this.$emit("indeterminate", !1)) : (this.$emit("update:modelValue", !this.modelValue), this.$emit("indeterminate", !1)));
    },
    click(t) {
      this.focus(), this.updateValue(), this.$emit("click", t);
    },
    keydown(t) {
      (t.keyCode === K.SPACE || t.keyCode === K.ENTER) && this.updateValue(), t.keyCode === K.SPACE && t.preventDefault();
    }
  },
  components: {
    FeatherRipple: ur
  }
}), pW = (t) => (sW("data-v-a7af27e2"), t = t(), lW(), t), mW = { class: "layout-container" }, wW = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], vW = { class: "checkbox hover focus" }, VW = /* @__PURE__ */ pW(() => /* @__PURE__ */ Hr("div", { class: "box" }, [
  /* @__PURE__ */ Hr("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Hr("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Hr("div", { class: "indeterminate" })
], -1)), TW = ["id", "for"];
function gW(t, o, r, a, l, c) {
  const d = oW("feather-ripple");
  return lc(), gp("div", mW, [
    Hr("div", {
      class: "feather-checkbox feather-form-input feather-checkbox-table",
      onClick: o[0] || (o[0] = (...h) => t.click && t.click(...h)),
      onKeydown: o[1] || (o[1] = (...h) => t.keydown && t.keydown(...h)),
      "aria-checked": t.modelValue ? "true" : t.indeterminate ? "mixed" : "false",
      "aria-disabled": t.disabled,
      "aria-labelledby": t.labelId,
      "aria-label": t.label,
      id: t.inputId,
      tabindex: t.noFocus ? -1 : 0,
      ref: "input",
      role: "checkbox",
      "data-ref-id": "feather-checkbox"
    }, [
      Hr("div", vW, [
        VW,
        t.disabled ? Up("", !0) : (lc(), iW(d, {
          key: 0,
          center: ""
        }))
      ]),
      t.label ? Up("", !0) : (lc(), gp("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: t.labelId,
        for: t.inputId
      }, [
        aW(t.$slots, "default", {}, void 0, !0)
      ], 8, TW))
    ], 40, wW)
  ]);
}
var ls = /* @__PURE__ */ uW(hW, [["render", gW], ["__scopeId", "data-v-a7af27e2"]]);
const UW = Mw(Fc({}, hi), {
  modelValue: {
    type: [Array, Object],
    required: !1
  },
  label: {
    type: String,
    required: !0
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  schema: {
    type: Object,
    required: !1
  }
});
Zw({
  props: UW,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(t, o) {
    pi(t);
    const r = cc(t, "error"), a = Ua(() => ae("feather-checkbox-group")), l = Ua(() => ae("feather-input-description")), c = Ua(() => ae("feather-input-label")), d = Ua(() => {
      const U = JSON.parse(JSON.stringify(o.attrs));
      return U["aria-invalid"] || (U["aria-invalid"] = !!r.value), Mw(Fc({}, U), {
        class: "",
        "aria-describedby": l.value
      });
    }), h = cW(a.value), { validate: w } = di(h, cc(t, "modelValue"), t.label, t.schema, cc(t, "error"));
    return Fc({
      groupId: a,
      inputId: h,
      descriptionId: l,
      labelId: c,
      attrs: d,
      validate: w,
      registerCheckbox: (U) => {
        U && h.value === a.value && (h.value = U);
      }
    }, fi(o.attrs));
  },
  components: {
    InputSubText: ui
  }
});
const RW = window.Vue.openBlock, NW = window.Vue.createElementBlock, bw = window.Vue.createElementVNode;
var yW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const kW = {}, MW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ZW = /* @__PURE__ */ bw("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), bW = /* @__PURE__ */ bw("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), JW = [
  ZW,
  bW
];
function EW(t, o) {
  return RW(), NW("svg", MW, JW);
}
var SW = /* @__PURE__ */ yW(kW, [["render", EW]]);
var AW = Object.defineProperty, FW = Object.defineProperties, WW = Object.getOwnPropertyDescriptors, Rp = Object.getOwnPropertySymbols, CW = Object.prototype.hasOwnProperty, xW = Object.prototype.propertyIsEnumerable, Np = (t, o, r) => o in t ? AW(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, jr = (t, o) => {
  for (var r in o || (o = {}))
    CW.call(o, r) && Np(t, r, o[r]);
  if (Rp)
    for (var r of Rp(o))
      xW.call(o, r) && Np(t, r, o[r]);
  return t;
}, Jw = (t, o) => FW(t, WW(o));
const BW = window.Vue.defineComponent, uc = window.Vue.toRef, IW = window.Vue.computed, yp = window.Vue.resolveComponent, kp = window.Vue.openBlock, Mp = window.Vue.createElementBlock, Zp = window.Vue.mergeProps, bp = window.Vue.createVNode, DW = window.Vue.normalizeClass, Jp = window.Vue.withCtx, _W = window.Vue.createElementVNode, OW = window.Vue.toDisplayString, QW = window.Vue.createCommentVNode;
var zW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const GW = Jw(jr(jr({}, $c), hi), {
  modelValue: {
    type: String
  },
  maxlength: {
    type: Number,
    required: !1,
    default: 0
  },
  auto: {
    type: Boolean,
    default: !1
  },
  schema: {
    type: Object,
    required: !1
  },
  id: {
    type: String,
    required: !1
  }
}), YW = {
  "update:modelValue": (t) => !0
}, PW = BW({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: YW,
  props: GW,
  setup(t, o) {
    pi(t), qc(t);
    const r = uc(t, "id"), a = IW(() => r.value ? r.value : ae("feather-textarea-label")), { validate: l } = di(a, uc(t, "modelValue"), t.label, t.schema, uc(t, "error"));
    return jr({
      inputId: a,
      incomingId: r,
      validate: l
    }, fi(o.attrs));
  },
  data() {
    return {
      focused: !1,
      internalValue: "",
      initialHeight: 0
    };
  },
  computed: {
    descriptionId() {
      return ae("feather-textarea-description");
    },
    showClear() {
      return !!(this.internalValue && this.internalValue.length > 0);
    },
    contentCls() {
      const t = [];
      return this.error && t.push("error"), this.disabled && t.push("disabled"), this.focused && t.push("focused"), t;
    },
    isRaised() {
      return !!(this.internalValue || this.focused);
    },
    attrs() {
      const t = jr({}, this.$attrs);
      return delete t.placeholder, t["aria-invalid"] || (t["aria-invalid"] = !!this.error), Jw(jr(jr({}, t), this.listeners), {
        class: "",
        id: this.inputId,
        name: this.inputId,
        disabled: this.disabled,
        "aria-disabled": this.disabled,
        "aria-describedby": (t["aria-describedby"] || "").split(" ").concat([this.descriptionId]).filter(Boolean).join(" "),
        value: this.internalValue
      });
    },
    listeners() {
      return {
        onFocus: (t) => {
          this.handleFocus(), this.$attrs.onFocus && this.$attrs.onFocus(t);
        },
        onBlur: (t) => {
          this.handleBlur(), this.$attrs.onBlur && this.$attrs.onBlur(t);
        },
        onInput: (t) => {
          this.adjustTextArea(), this.handleInput(t);
        }
      };
    },
    charCount() {
      return `${this.internalValue && this.internalValue.length || "0"} / ${this.maxlength}`;
    }
  },
  watch: {
    modelValue: {
      immediate: !0,
      handler(t) {
        this.adjustTextArea(), this.internalValue = t;
      }
    },
    internalValue: {
      immediate: !0,
      handler(t) {
        this.$emit("update:modelValue", t);
      }
    }
  },
  methods: {
    handleClear() {
      this.internalValue = "", this.focus();
    },
    handleWrapperClick() {
      this.$refs.input.focus();
    },
    handleFocus() {
      this.focused = !0;
    },
    handleBlur() {
      this.validate(), this.focused = !1;
    },
    handleInput(t) {
      this.internalValue = t.target.value, this.$emit("update:modelValue", this.internalValue);
    },
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    adjustTextArea() {
      if (!this.auto)
        return;
      const t = this.$refs.input;
      !t || (t.style.height = "12px", t.style.flexBasis = "40px", t.style.whiteSpace = "nowrap", this.$nextTick(() => {
        const o = t.getBoundingClientRect().width;
        t.scrollWidth <= t.clientWidth && o < t.parentElement.getBoundingClientRect().width ? t.style.whiteSpace = "nowrap" : (t.style.whiteSpace = "normal", t.style.flexBasis = "100%"), this.$nextTick(() => {
          t.style.height = `${t.scrollHeight < this.initialHeight ? this.initialHeight : t.scrollHeight}px`;
        });
      }));
    }
  },
  mounted() {
    const t = this.$refs.input;
    this.initialHeight = t.getBoundingClientRect().height;
  },
  components: {
    InputSubText: ui,
    InputWrapper: Lc
  }
}), HW = ["maxlength"], jW = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function XW(t, o, r, a, l, c) {
  const d = yp("InputWrapper"), h = yp("InputSubText");
  return kp(), Mp("div", Zp(t.inherittedAttrs, { class: "feather-textarea-container" }), [
    bp(d, {
      for: t.inputId,
      raised: t.isRaised,
      focused: t.focused,
      "show-clear": t.showClear,
      onWrapperClick: t.handleWrapperClick,
      onClear: t.handleClear,
      class: DW(["feather-textarea-content", t.contentCls])
    }, {
      default: Jp(() => [
        _W("textarea", Zp(t.attrs, {
          class: ["feather-textarea", { error: t.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: t.maxlength > 0 ? t.maxlength : void 0,
          ref: "input"
        }), null, 16, HW)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    bp(h, { id: t.descriptionId }, {
      right: Jp(() => [
        t.maxlength ? (kp(), Mp("div", jW, OW(t.charCount), 1)) : QW("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Wc = /* @__PURE__ */ zW(PW, [["render", XW], ["__scopeId", "data-v-0648df5c"]]);
const LW = window.Vue.defineComponent, Ep = window.Vue.toDisplayString, Bo = window.Vue.createElementVNode, qn = window.Vue.unref, Or = window.Vue.openBlock, Sp = window.Vue.createBlock, Io = window.Vue.createCommentVNode, Ap = window.Vue.createVNode, Ra = window.Vue.createElementBlock, $W = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const qW = { class: "row" }, KW = { class: "label" }, eC = { class: "action-icons" }, tC = { class: "icon-btn" }, nC = {
  key: 0,
  class: "icon-btn"
}, rC = {
  key: 1,
  class: "icon-btn"
}, oC = {
  key: 0,
  class: "text"
}, iC = window.Vue.watch, Fp = window.Vue.ref, aC = /* @__PURE__ */ LW({
  __name: "MemoBox",
  props: {
    id: null,
    label: null,
    memo: null,
    type: null,
    situationId: null,
    boxType: null
  },
  setup(t) {
    var w;
    const o = t, r = Uw(), a = Fp(!1), l = Fp((w = o.memo) == null ? void 0 : w.body);
    iC(o, () => {
      var V;
      l.value = (V = o.memo) == null ? void 0 : V.body, a.value = !1;
    });
    const c = () => {
      a.value = !a.value;
    }, d = async () => {
      a.value = !1, await dy(o.id, o.type) ? l.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, h = async () => {
      a.value = !1, l.value && l.value !== "" && (await uy(o.id, o.type, l.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (V, U) => (Or(), Ra("div", {
      class: $W([o.boxType === "small" ? "box-small" : "box"])
    }, [
      Bo("div", qW, [
        Bo("div", KW, Ep(t.label), 1),
        Bo("div", eC, [
          Bo("div", tC, [
            a.value ? Io("", !0) : (Or(), Sp(qn($), {
              key: 0,
              icon: qn(SW),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: c
            }, null, 8, ["icon"]))
          ]),
          a.value ? (Or(), Ra("div", nC, [
            Ap(qn($), {
              icon: qn(ai),
              "aria-hidden": "true",
              class: "icon save",
              onClick: h
            }, null, 8, ["icon"])
          ])) : Io("", !0),
          l.value && l.value != "" || a.value ? (Or(), Ra("div", rC, [
            Ap(qn($), {
              icon: qn(li),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: d
            }, null, 8, ["icon"])
          ])) : Io("", !0)
        ])
      ]),
      Bo("div", null, [
        !a.value && l.value != null ? (Or(), Ra("div", oC, Ep(l.value), 1)) : Io("", !0),
        a.value ? (Or(), Sp(qn(Wc), {
          key: 1,
          class: "textarea",
          modelValue: l.value,
          "onUpdate:modelValue": U[0] || (U[0] = (R) => l.value = R),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Io("", !0)
      ])
    ], 2));
  }
});
const Xa = /* @__PURE__ */ Ue(aC, [["__scopeId", "data-v-3f44e250"]]), sC = window.Vue.defineComponent, Do = window.Vue.unref, Qr = window.Vue.createVNode, Na = window.Vue.toDisplayString, mn = window.Vue.createElementVNode, Wp = window.Vue.openBlock, Cp = window.Vue.createElementBlock, xp = window.Vue.createCommentVNode, Bp = window.Vue.createTextVNode, lC = window.Vue.pushScopeId, cC = window.Vue.popScopeId, Ew = (t) => (lC("data-v-cd37a1f9"), t = t(), cC(), t), uC = {
  key: 0,
  class: "card"
}, dC = { class: "row" }, fC = { class: "title" }, hC = {
  key: 0,
  class: "ack"
}, pC = ["innerHTML"], mC = /* @__PURE__ */ Ew(() => /* @__PURE__ */ mn("strong", null, "First Event", -1)), wC = /* @__PURE__ */ Ew(() => /* @__PURE__ */ mn("strong", null, "Last Event", -1)), vC = { class: "section memo-boxes" }, Ip = window.Vue.ref, VC = window.Vue.watch, TC = /* @__PURE__ */ sC({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(t, { emit: o }) {
    const r = t, a = Ip(!1), l = Ip(r.alarm);
    VC(r, () => {
      l.value = r.alarm, a.value = r.selectAll, o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, d = async (h) => {
      const w = await Qm(h);
      w && (l.value = w);
    };
    return (h, w) => {
      var V, U, R, y, F;
      return l.value ? (Wp(), Cp("div", uC, [
        mn("div", null, [
          mn("div", dC, [
            Qr(Do(ls), {
              modelValue: a.value,
              "onUpdate:modelValue": [
                w[0] || (w[0] = (S) => a.value = S),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            mn("div", fC, Na(l.value.nodeLabel) + " - " + Na(l.value.id), 1),
            Qr(Nw, {
              severity: (V = l.value) == null ? void 0 : V.severity
            }, null, 8, ["severity"]),
            l.value.ackTime ? (Wp(), Cp("div", hC, [
              Qr(Do($), {
                icon: Do(ai),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : xp("", !0)
          ]),
          mn("div", {
            class: "description",
            innerHTML: l.value.description
          }, null, 8, pC),
          mn("div", null, [
            mC,
            Bp(" - " + Na(Do($t)(l.value.firstEventTime)), 1)
          ]),
          mn("div", null, [
            wC,
            Bp(" - " + Na(Do($t)(l.value.lastEventTime)), 1)
          ]),
          mn("div", vC, [
            Qr(Xa, {
              id: (U = l.value) == null ? void 0 : U.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (R = l.value) == null ? void 0 : R.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Qr(Xa, {
              id: (y = l.value) == null ? void 0 : y.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (F = l.value) == null ? void 0 : F.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        Qr(kw, {
          alarm: l.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: d
        }, null, 8, ["alarm", "situation-id"])
      ])) : xp("", !0);
    };
  }
});
const gC = /* @__PURE__ */ Ue(TC, [["__scopeId", "data-v-cd37a1f9"]]), UC = window.Vue.defineComponent, $r = window.Vue.createElementVNode, Kn = window.Vue.createVNode, er = window.Vue.unref, Dp = window.Vue.withCtx, RC = window.Vue.renderList, NC = window.Vue.Fragment, ya = window.Vue.openBlock, ka = window.Vue.createElementBlock, yC = window.Vue.createCommentVNode, kC = window.Vue.pushScopeId, MC = window.Vue.popScopeId, hu = (t) => (kC("data-v-438eed08"), t = t(), MC(), t), ZC = { class: "container" }, bC = { class: "row" }, JC = /* @__PURE__ */ hu(() => /* @__PURE__ */ $r("div", { class: "title" }, "Alarms", -1)), EC = { class: "row actions" }, SC = /* @__PURE__ */ hu(() => /* @__PURE__ */ $r("span", null, "Clear", -1)), AC = /* @__PURE__ */ hu(() => /* @__PURE__ */ $r("span", null, "Acknowledge", -1)), FC = { class: "section" }, WC = {
  key: 0,
  class: "alarm-list"
}, _p = window.Vue.ref, CC = window.Vue.watch, xC = window.Vue.reactive, BC = /* @__PURE__ */ UC({
  __name: "AlarmFilters",
  props: {
    alarms: null,
    situationId: null
  },
  setup(t) {
    const o = t, r = fr(), a = _p(!1), l = _p(["all"]), c = xC({
      selectedAlarms: [],
      alarms: o.alarms
    });
    CC(o, () => {
      l.value = ["all"], c.alarms = o.alarms, c.selectedAlarms = [], a.value = !1;
    });
    const d = (V) => {
      c.selectedAlarms.includes(V) ? we.exports.remove(c.selectedAlarms, (U) => U == V) : c.selectedAlarms.push(V);
    }, h = async (V) => {
      c.selectedAlarms.length && (await iy(c.selectedAlarms, V), r.getSituation(o.situationId), c.selectedAlarms = [], a.value = !1);
    }, w = (V) => {
      V.includes("all") ? c.alarms = o.alarms : c.alarms = o.alarms.filter((U) => V.includes(U.severity));
    };
    return (V, U) => (ya(), ka("div", ZC, [
      $r("div", bC, [
        JC,
        Kn(Kc, {
          alarms: o.alarms,
          onSelectedSeverities: w
        }, null, 8, ["alarms"])
      ]),
      $r("div", EC, [
        Kn(er(ls), {
          modelValue: a.value,
          "onUpdate:modelValue": U[0] || (U[0] = (R) => a.value = R),
          label: "selected"
        }, null, 8, ["modelValue"]),
        Kn(er(We), {
          class: "acction-btn",
          onClick: U[1] || (U[1] = () => h("clear"))
        }, {
          default: Dp(() => [
            Kn(er($), {
              icon: er(yw),
              "aria-hidden": "true",
              class: "icon clear"
            }, null, 8, ["icon"]),
            SC
          ]),
          _: 1
        }),
        Kn(er(We), {
          class: "acction-btn",
          onClick: U[2] || (U[2] = () => h("ack"))
        }, {
          default: Dp(() => [
            Kn(er($), {
              icon: er(ai),
              "aria-hidden": "true",
              class: "icon ack"
            }, null, 8, ["icon"]),
            AC
          ]),
          _: 1
        })
      ]),
      $r("div", FC, [
        c.alarms.length > 0 ? (ya(), ka("div", WC, [
          (ya(!0), ka(NC, null, RC(c.alarms, (R) => (ya(), ka("div", {
            key: R.id
          }, [
            Kn(gC, {
              alarm: R,
              selectAll: a.value,
              "situation-id": o.situationId,
              onAlarmSelected: d
            }, null, 8, ["alarm", "selectAll", "situation-id"])
          ]))), 128))
        ])) : yC("", !0)
      ])
    ]));
  }
});
const IC = /* @__PURE__ */ Ue(BC, [["__scopeId", "data-v-438eed08"]]), DC = "/whoami", _C = async () => {
  try {
    const t = await gn.get(DC);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, OC = window.Pinia.defineStore, vi = OC("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const t = await _C();
      return t && (this.isAdmin = t.roles.includes("ROLE_ADMIN"), this.userId = t.id), t;
    },
    async getAlecInfo() {
      const t = await vy();
      t && (this.firstTime = !1, this.allowSave = t.agreed);
    },
    async savePermission(t) {
      if (this.allowSave = t, !t) {
        const o = await Gm(t);
        this.allowSave = o;
      }
    }
  }
}), QC = window.Vue.defineComponent, Ot = window.Vue.createVNode, mt = window.Vue.unref, dc = window.Vue.normalizeClass, Ma = window.Vue.toDisplayString, tr = window.Vue.openBlock, nr = window.Vue.createElementBlock, Za = window.Vue.createCommentVNode, zC = window.Vue.withCtx, Qt = window.Vue.createElementVNode, GC = window.Vue.createTextVNode, YC = window.Vue.Fragment, PC = window.Vue.pushScopeId, HC = window.Vue.popScopeId, jC = (t) => (PC("data-v-eecc24f5"), t = t(), HC(), t), XC = { class: "section" }, LC = { class: "action-section" }, $C = {
  key: 0,
  class: "btn-row"
}, qC = { key: 0 }, KC = { key: 1 }, ex = {
  key: 0,
  class: "situation-detail"
}, tx = { class: "situation-info" }, nx = { class: "id" }, rx = { key: 0 }, ox = ["innerHTML"], ix = /* @__PURE__ */ jC(() => /* @__PURE__ */ Qt("p", null, null, -1)), ax = { class: "boxes" }, sx = { class: "parameters" }, lx = { class: "section memo-boxes" }, cx = { key: 0 }, Op = window.Vue.ref, ux = window.Vue.watch, dx = /* @__PURE__ */ QC({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(t) {
    const o = t, r = fr(), a = vt.REJECTED, l = vi(), c = Op(o.situationInfo.status), d = Op(o.situationInfo);
    ux(o, () => {
      c.value = o.situationInfo.status || "", d.value = o.situationInfo;
    });
    const h = (w) => {
      var V;
      Ym((V = o.situationInfo) == null ? void 0 : V.id, w.toLowerCase()), c.value = w, r.getSituation(o.situationInfo.id);
    };
    return (w, V) => {
      var U, R, y, F, S, C, D, E, B, x, P, b;
      return tr(), nr(YC, null, [
        Qt("div", XC, [
          Qt("div", LC, [
            Ot(kw, {
              alarm: d.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            mt(l).allowSave ? (tr(), nr("div", $C, [
              Ot(mt(We), {
                class: dc(["btn", { rejected: c.value == mt(a) }]),
                "data-test": "btn-reject",
                onClick: V[0] || (V[0] = () => h(mt(a)))
              }, {
                default: zC(() => [
                  Ot(mt($), {
                    icon: mt(Pm),
                    "aria-hidden": "true",
                    class: dc(["icon reject", { rejected: c.value == mt(a) }])
                  }, null, 8, ["icon", "class"]),
                  c.value == mt(a) ? (tr(), nr("span", qC, Ma(mt(a)), 1)) : (tr(), nr("span", KC, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : Za("", !0)
          ]),
          d.value ? (tr(), nr("div", ex, [
            Qt("div", {
              class: dc(["severity-line", [`${(R = (U = d.value) == null ? void 0 : U.severity) == null ? void 0 : R.toLowerCase()}-bg dark`]])
            }, null, 2),
            Qt("div", tx, [
              Qt("div", nx, [
                Qt("div", null, [
                  GC(" Situation - " + Ma((y = d.value) == null ? void 0 : y.id) + " - affecting " + Ma(mt(we.exports.size)(mt(we.exports.groupBy)((F = d.value) == null ? void 0 : F.alarms, "nodeId"))) + " node ", 1),
                  d.value.alarms ? (tr(), nr("span", rx, "having " + Ma(d.value.alarms.length) + " alarms ", 1)) : Za("", !0)
                ]),
                Ot(Nw, {
                  severity: (S = d.value) == null ? void 0 : S.severity
                }, null, 8, ["severity"])
              ]),
              Qt("span", {
                innerHTML: d.value.description
              }, null, 8, ox),
              ix,
              Qt("div", ax, [
                Ot(tc, {
                  label: "First Event",
                  info: mt($t)(d.value.firstEventTime)
                }, null, 8, ["info"]),
                Ot(tc, {
                  label: "Last Event",
                  info: mt($t)(d.value.lastEventTime)
                }, null, 8, ["info"]),
                Ot(tc, {
                  label: "Reduction Key",
                  info: d.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Qt("div", sx, [
              Ot(NF, {
                alarms: (C = d.value) == null ? void 0 : C.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : Za("", !0),
          Qt("div", lx, [
            Ot(Xa, {
              id: (D = d.value) == null ? void 0 : D.id,
              situationId: (E = d.value) == null ? void 0 : E.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (B = d.value) == null ? void 0 : B.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Ot(Xa, {
              id: (x = d.value) == null ? void 0 : x.id,
              situationId: (P = d.value) == null ? void 0 : P.id,
              label: "Journal Memo",
              type: "journal",
              memo: (b = d.value) == null ? void 0 : b.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        d.value.alarms && d.value.alarms.length ? (tr(), nr("div", cx, [
          Ot(IC, {
            alarms: d.value.alarms,
            "situation-id": d.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : Za("", !0)
      ], 64);
    };
  }
});
const fx = /* @__PURE__ */ Ue(dx, [["__scopeId", "data-v-eecc24f5"]]);
var hx = Object.defineProperty, px = Object.defineProperties, mx = Object.getOwnPropertyDescriptors, Qp = Object.getOwnPropertySymbols, wx = Object.prototype.hasOwnProperty, vx = Object.prototype.propertyIsEnumerable, zp = (t, o, r) => o in t ? hx(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Cc = (t, o) => {
  for (var r in o || (o = {}))
    wx.call(o, r) && zp(t, r, o[r]);
  if (Qp)
    for (var r of Qp(o))
      vx.call(o, r) && zp(t, r, o[r]);
  return t;
}, Vx = (t, o) => px(t, mx(o));
const Sw = window.Vue.defineComponent, ar = window.Vue.resolveComponent, Ca = window.Vue.openBlock, Gp = window.Vue.createBlock, xa = window.Vue.mergeProps, sr = window.Vue.withCtx, Aw = window.Vue.createElementBlock, Tx = window.Vue.Fragment, gx = window.Vue.renderList, Ux = window.Vue.createTextVNode, Rx = window.Vue.toDisplayString, Nx = window.Vue.computed, Yp = window.Vue.toRef, _o = window.Vue.createVNode, Pp = window.Vue.toHandlers, yx = window.Vue.renderSlot, kx = window.Vue.normalizeClass, Mx = window.Vue.createElementVNode;
var Fw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const Zx = Sw({
  inheritAttrs: !0,
  emits: ["select"],
  props: {
    label: {
      type: String,
      required: !0
    },
    options: {
      type: Array,
      default: () => []
    },
    textProp: {
      type: String,
      default: "_text"
    },
    activeIndex: {
      type: Number,
      required: !0
    }
  },
  computed: {
    activeId() {
      return ae("feather-select-active");
    },
    listAttrs() {
      return {
        tabindex: -1,
        role: "listbox",
        "aria-label": this.label,
        "aria-activedescendant": this.activeId
      };
    }
  },
  watch: {
    activeIndex(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[t];
        ri(o, this.$refs.list.$el);
      });
    }
  },
  methods: {
    isSelected(t) {
      return this.activeIndex === t;
    },
    getId(t) {
      return t === this.activeIndex ? this.activeId : null;
    },
    select(t) {
      this.$emit("select", t);
    }
  },
  components: {
    FeatherList: ru,
    FeatherListItem: wi
  }
});
function bx(t, o, r, a, l, c) {
  const d = ar("FeatherListItem"), h = ar("FeatherList");
  return Ca(), Gp(h, xa(t.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: sr(() => [
      (Ca(!0), Aw(Tx, null, gx(t.options, (w, V) => (Ca(), Gp(d, {
        key: w[t.textProp],
        "as-li": "",
        id: t.getId(V),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": t.isSelected(V),
        selected: t.isSelected(V),
        onClick: (U) => t.select(w)
      }, {
        default: sr(() => [
          Ux(Rx(w[t.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var Jx = /* @__PURE__ */ Fw(Zx, [["render", bx], ["__scopeId", "data-v-eae820da"]]);
const Ex = Vx(Cc(Cc({}, $c), hi), {
  modelValue: {
    type: Object,
    required: !1
  },
  textProp: {
    type: String,
    default: "_text"
  },
  options: {
    type: Array,
    default: () => []
  },
  schema: {
    type: Object,
    required: !1
  }
}), Sx = {
  "update:modelValue": (t) => !0
}, Ax = Sw({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: Sx,
  props: Ex,
  setup(t, o) {
    pi(t), qc(t);
    const r = Nx(() => ae("feather-select-input")), { validate: a } = di(r, Yp(t, "modelValue"), t.label, t.schema, Yp(t, "error"));
    return Cc({
      inputId: r,
      validate: a
    }, fi(o.attrs));
  },
  data() {
    return {
      hasFocus: !1,
      showMenu: !1,
      charsSoFar: "",
      internalValue: this.modelValue,
      delayTimeout: -1
    };
  },
  computed: {
    showClear() {
      return !!this.modelValue;
    },
    subTextId() {
      return ae("feather-select-description");
    },
    inputAttrs() {
      return {
        id: this.inputId,
        "aria-haspopup": "listbox",
        "aria-invalid": this.$attrs["aria-invalid"] || !!this.error,
        value: this.valueText,
        readonly: !0,
        disabled: this.disabled,
        "aria-disabled": this.disabled,
        "aria-describedby": (this.$attrs["aria-describedby"] || "").split(" ").concat([this.subTextId]).filter(Boolean).join(" ")
      };
    },
    inputListeners() {
      return {
        focus: this.handleInputFocus,
        blur: this.handleInputBlur,
        keydown: this.handleKeyDown
      };
    },
    raised() {
      return !!this.internalValue || this.hasFocus;
    },
    valueText() {
      return this.internalValue && this.internalValue[this.textProp] ? this.internalValue[this.textProp] : "";
    },
    activeIndex() {
      if (this.internalValue && this.internalValue[this.textProp]) {
        const t = this.internalValue, o = this.options.filter((r) => r[this.textProp] === t[this.textProp]);
        if (o && o.length)
          return this.options.indexOf(o[0]);
      }
      return -1;
    },
    icon: () => tu
  },
  watch: {
    showMenu(t) {
      t ? (this.internalValue || this.select(this.options[0]), this.$nextTick(() => {
        this.$refs.input.focus();
      })) : this.emitSelection();
    },
    modelValue(t) {
      this.internalValue = t;
    }
  },
  methods: {
    closeMenu() {
      this.showMenu = !1, this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    handleClear() {
      this.handleSelect(void 0), this.emitSelection();
    },
    handleInputFocus() {
      this.disabled || this.hasFocus || (this.hasFocus = !0);
    },
    handleInputBlur() {
      this.hasFocus && !this.showMenu && (this.hasFocus = !1, this.validate());
    },
    handleTriggerClick() {
      this.disabled || (this.showMenu = !0, this.hasFocus = !0);
    },
    handleOutsideClick() {
      this.showMenu = !1, this.hasFocus = !1;
    },
    handleSelect(t) {
      this.select(t), this.showMenu = !1, this.$refs.input.focus();
    },
    select(t) {
      this.internalValue = t;
    },
    emitSelection() {
      this.$emit("update:modelValue", this.internalValue);
    },
    handleKeyDown(t) {
      if (t.keyCode === K.ENTER)
        t.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (t.keyCode === K.ESCAPE)
        this.closeMenu(), t.stopPropagation();
      else if (t.keyCode === K.DOWN)
        t.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (t.keyCode === K.UP)
        t.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (t.keyCode === K.HOME)
        t.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (t.keyCode === K.END)
        t.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const o = String.fromCharCode(t.keyCode);
        this.charsSoFar += o, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      to(this.delayTimeout), this.delayTimeout = eo(() => {
        const t = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        t && t.length && this.select(t[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: Lc,
    InputSubText: ui,
    FeatherMenu: hw,
    List: Jx,
    FeatherIcon: $
  }
});
function Fx(t, o, r, a, l, c) {
  const d = ar("FeatherIcon"), h = ar("InputWrapper"), w = ar("List"), V = ar("FeatherMenu"), U = ar("InputSubText");
  return Ca(), Aw("div", xa(t.inherittedAttrs, { class: "feather-select-container" }), [
    _o(V, {
      "no-expand": "",
      fill: "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: sr((R) => [
        _o(h, xa({
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "show-clear": t.showClear,
          onClear: t.handleClear
        }, R.attrs, Pp(R.on), {
          class: ["feather-select-wrapper", { focused: t.hasFocus }]
        }), {
          pre: sr(() => [
            yx(t.$slots, "pre", {}, void 0, !0)
          ]),
          post: sr(() => [
            _o(d, {
              class: kx(["feather-select-icon", { rotate: t.showMenu }]),
              icon: t.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: sr(() => [
            Mx("input", xa(t.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Pp(t.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: sr(() => [
        _o(w, {
          ref: "list",
          "data-ref-id": "feather-select-list",
          label: t.label,
          options: t.options,
          "text-prop": t.textProp,
          "active-index": t.activeIndex,
          onSelect: t.handleSelect,
          onKeydown: t.handleKeyDown
        }, null, 8, ["label", "options", "text-prop", "active-index", "onSelect", "onKeydown"])
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick"]),
    _o(U, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var Wx = /* @__PURE__ */ Fw(Ax, [["render", Fx], ["__scopeId", "data-v-ecb32d90"]]);
const Cx = window.Vue.openBlock, xx = window.Vue.createElementBlock, Ww = window.Vue.createElementVNode;
var Bx = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const Ix = {}, Dx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _x = /* @__PURE__ */ Ww("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), Ox = /* @__PURE__ */ Ww("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Qx = [
  _x,
  Ox
];
function zx(t, o) {
  return Cx(), xx("svg", Dx, Qx);
}
var Gx = /* @__PURE__ */ Bx(Ix, [["render", zx]]);
const Ba = window.Vue.openBlock, xc = window.Vue.createElementBlock, Cw = window.Vue.createElementVNode, Yx = window.Vue.defineComponent, rr = window.Vue.ref, Px = window.Vue.provide, Hp = window.Vue.computed, Hx = window.Vue.onUnmounted, jp = window.Vue.toRef, jx = window.Vue.resolveComponent, Xx = window.Vue.Fragment, Lx = window.Vue.createBlock, $x = window.Vue.Teleport, Xp = window.Vue.createVNode, qx = window.Vue.Transition, Kx = window.Vue.withCtx, eB = window.Vue.normalizeClass, tB = window.Vue.normalizeStyle, nB = window.Vue.toDisplayString, rB = window.Vue.createCommentVNode, oB = window.Vue.renderSlot, fc = window.Vue.nextTick;
var xw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const iB = {}, aB = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, sB = /* @__PURE__ */ Cw("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), lB = [
  sB
];
function cB(t, o) {
  return Ba(), xc("svg", aB, lB);
}
var uB = /* @__PURE__ */ xw(iB, [["render", cB]]), _e = /* @__PURE__ */ ((t) => (t.top = "top", t.bottom = "bottom", t.left = "left", t.right = "right", t))(_e || {}), vn = /* @__PURE__ */ ((t) => (t.center = "center", t.left = "left", t.right = "right", t))(vn || {});
const dB = (t, o, r, a = 9) => {
  const l = window.innerHeight - t.bottom, c = window.innerWidth - t.right, d = [];
  t.top >= o.height + a && d.push(_e.top), l >= o.height + a && d.push(_e.bottom);
  const h = [];
  c >= o.width + a && h.push(_e.right), t.left >= o.width + a && h.push(_e.left);
  let w = [...h, ...d];
  return (r === _e.top || r === _e.bottom) && (w = [...d, ...h]), w.indexOf(r) > -1 ? r : w.length ? w[0] : r;
}, fB = (t, o, r, a, l = 28) => {
  if (t === _e.left || t === _e.right)
    return vn.center;
  const c = o.left + o.width / 2, d = window.innerWidth - o.right, h = [], w = c, V = d + o.width / 2, U = r.width - l, R = r.width / 2;
  return w >= R && V >= R && h.push(vn.center), V >= U && h.push(vn.left), w >= U && h.push(vn.right), h.indexOf(a) > -1 ? a : h.length ? h[0] : a;
}, hB = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => _e.top
  },
  pointerAlignment: {
    type: String,
    default: () => vn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, pB = Yx({
  props: hB,
  setup(t) {
    const o = rr(!1), r = rr(!1), a = ae("feather-tooltip-trigger"), l = ae("feather-tooltip"), c = "data-feather-tooltip";
    Px("feather-has-tooltip", !0);
    let d = 0;
    const h = () => {
      to(d), o.value || (d = eo(C, t.enterDelay));
    }, w = () => {
      to(d), d = eo(D, t.exitDelay);
    }, V = (Ve) => {
      Ve.keyCode === K.ESCAPE && (Ve.preventDefault(), D(!0));
    }, U = Hp(() => ({
      [c]: a,
      "aria-describedby": l
    })), R = {
      mouseenter: h,
      mouseleave: w,
      focus: h,
      blur: w,
      keydown: V
    }, y = rr(document), F = fw(y, () => D(!0));
    Hx(() => D(!0));
    const S = () => document.getElementById(l), C = () => {
      r.value = !1, o.value = !0, fc(() => {
        const Ve = S();
        se(Ve), o.value = !1, fc(() => {
          r.value = !0, o.value = !0, F.value = !0;
        });
      });
    }, D = (Ve = !1) => {
      W.value = "", b.value = "", A.value = "", O.value = "", o.value = !1, Ve && (r.value = !1), F.value = !1;
    }, E = jp(t, "placement"), B = jp(t, "pointerAlignment"), x = 8, P = 24, b = rr(""), W = rr(""), A = rr(""), O = rr(""), he = Hp(() => O.value ? "p-" + O.value : !1), se = (Ve) => {
      const Te = document.querySelector(`[${c}=${a}]`);
      if (!Te) {
        console.log("trigger not found");
        return;
      }
      fc(() => {
        const Re = Te.getBoundingClientRect(), Ze = Ve.getBoundingClientRect(), ue = dB(Re, Ze, E.value, x), xe = fB(ue, Re, Ze, B.value, P);
        A.value = xe.toString(), O.value = ue.toString();
        let Be = 0, Xe = 0;
        if ((ue === _e.left || ue === _e.right) && (Be = Re.top + Re.height / 2 - Ze.height / 2, ue === _e.left && (Xe = Re.left - Ze.width - x), ue === _e.right && (Xe = Re.right)), ue === _e.top || ue === _e.bottom) {
          Be = Re.top - Ze.height - x, ue === _e.bottom && (Be = Re.bottom);
          const ao = Re.left + Re.width / 2;
          switch (xe) {
            case vn.center:
              Xe = ao - Ze.width / 2;
              break;
            case vn.left:
              Xe = ao - P;
              break;
            case vn.right:
              Xe = ao - Ze.width + P;
              break;
          }
        }
        b.value = Be.toString() + "px", W.value = Xe.toString() + "px";
      });
    };
    return {
      attrs: U,
      listeners: R,
      show: o,
      animate: r,
      alignmentClass: A,
      placementClass: he,
      top: b,
      left: W,
      tooltipID: l
    };
  },
  components: {
    Pointer: uB
  }
}), mB = ["id"];
function wB(t, o, r, a, l, c) {
  const d = jx("Pointer");
  return Ba(), xc(Xx, null, [
    (Ba(), Lx($x, { to: "body" }, [
      Xp(qx, { css: t.animate }, {
        default: Kx(() => [
          t.show ? (Ba(), xc("div", {
            key: 0,
            class: eB(["feather-tooltip-container", [t.alignmentClass, t.placementClass]]),
            ref: "tooltip",
            style: tB({ left: t.left, top: t.top })
          }, [
            Cw("div", {
              class: "tooltip",
              role: "tooltip",
              id: t.tooltipID
            }, nB(t.title), 9, mB),
            Xp(d, { class: "tooltip-pointer" })
          ], 6)) : rB("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    oB(t.$slots, "default", {
      attrs: t.attrs,
      on: t.listeners
    }, void 0, !0)
  ], 64);
}
var Lp = /* @__PURE__ */ xw(pB, [["render", wB], ["__scopeId", "data-v-3da6b22e"]]);
const vB = window.Vue.defineComponent, hc = window.Vue.normalizeStyle, pc = window.Vue.createElementVNode, Oo = window.Vue.unref, $p = window.Vue.toHandlers, qp = window.Vue.mergeProps, Kp = window.Vue.withCtx, em = window.Vue.createVNode, VB = window.Vue.renderList, TB = window.Vue.Fragment, Qo = window.Vue.openBlock, zo = window.Vue.createElementBlock, tm = window.Vue.normalizeClass, nm = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const gB = { class: "row" }, UB = /* @__PURE__ */ vB({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(t) {
    const o = t, r = new Date().getTime(), a = (c, d) => c ? (Number(d) - Number(c)) * o.proportion : 0, l = (c) => c ? (Number(c) - Number(o.minStart)) * o.proportion : 0;
    return (c, d) => (Qo(), zo("div", gB, [
      pc("div", {
        class: "line-gray",
        style: hc({
          width: l(o.events[0].createTime) + "px"
        })
      }, null, 4),
      em(Oo(Lp), {
        title: Oo($t)(t.alarm.firstEventTime)
      }, {
        default: Kp(({ attrs: h, on: w }) => [
          pc("div", qp({ class: "circle" }, h, $p(w), {
            class: [`${t.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Qo(!0), zo(TB, null, VB(o.events, (h, w) => (Qo(), zo("div", {
        class: "event-trim",
        key: h.id
      }, [
        o.events[w + 1] ? (Qo(), zo("div", {
          key: 0,
          class: tm(["line", [`${h.severity.toLowerCase()}-bg dark`]]),
          style: hc({
            width: a(h.createTime, o.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : nm("", !0),
        em(Oo(Lp), {
          title: Oo($t)(t.alarm.firstEventTime)
        }, {
          default: Kp(({ attrs: V, on: U }) => [
            o.events[w + 1] ? (Qo(), zo("div", qp({ key: 0 }, V, $p(U), {
              class: ["event", [`${h.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : nm("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      pc("div", {
        class: tm(["line", [`${t.events[t.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: hc({
          width: a(t.events[t.events.length - 1].createTime, Oo(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const RB = /* @__PURE__ */ Ue(UB, [["__scopeId", "data-v-3341d12d"]]), NB = window.Vue.openBlock, yB = window.Vue.createElementBlock, Bw = window.Vue.createElementVNode;
var kB = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const MB = {}, ZB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, bB = /* @__PURE__ */ Bw("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), JB = /* @__PURE__ */ Bw("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), EB = [
  bB,
  JB
];
function SB(t, o) {
  return NB(), yB("svg", ZB, EB);
}
var AB = /* @__PURE__ */ kB(MB, [["render", SB]]);
const FB = window.Vue.defineComponent, Bc = window.Vue.createElementVNode, WB = window.Vue.renderList, rm = window.Vue.Fragment, mc = window.Vue.openBlock, wc = window.Vue.createElementBlock, CB = window.Vue.normalizeClass, xB = window.Vue.unref, om = window.Vue.toDisplayString, BB = window.Vue.pushScopeId, IB = window.Vue.popScopeId, DB = (t) => (BB("data-v-2e087f7b"), t = t(), IB(), t), _B = /* @__PURE__ */ DB(() => /* @__PURE__ */ Bc("strong", null, "Events:", -1)), OB = /* @__PURE__ */ FB({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(t) {
    const o = t;
    return (r, a) => (mc(), wc(rm, null, [
      _B,
      (mc(!0), wc(rm, null, WB(o.events, (l) => (mc(), wc("div", {
        class: "event-description",
        key: l.id
      }, [
        Bc("div", {
          class: CB(["mark", [`${l.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Bc("div", null, om(xB($t)(l.createTime)) + " - " + om(l.source), 1)
      ]))), 128))
    ], 64));
  }
});
const QB = /* @__PURE__ */ Ue(OB, [["__scopeId", "data-v-2e087f7b"]]), zB = window.Vue.defineComponent, GB = window.Vue.normalizeClass, wt = window.Vue.createElementVNode, zr = window.Vue.toDisplayString, ot = window.Vue.unref, Gr = window.Vue.createVNode, Iw = window.Vue.createTextVNode, YB = window.Vue.renderList, im = window.Vue.Fragment, dn = window.Vue.openBlock, or = window.Vue.createElementBlock, am = window.Vue.createBlock, ba = window.Vue.createCommentVNode, PB = window.Vue.normalizeStyle, HB = window.Vue.pushScopeId, jB = window.Vue.popScopeId, XB = (t) => (HB("data-v-01717d0d"), t = t(), jB(), t), LB = { class: "section detail" }, $B = { class: "id" }, qB = {
  key: 0,
  class: "section"
}, KB = /* @__PURE__ */ XB(() => /* @__PURE__ */ wt("div", { class: "id" }, "Alarms", -1)), e3 = { class: "action-btns" }, t3 = { class: "zoom" }, n3 = /* @__PURE__ */ Iw(" Zoom "), r3 = { class: "times" }, o3 = {
  key: 0,
  class: "timeline-container"
}, i3 = { class: "alarm-id" }, a3 = {
  key: 0,
  class: "panel"
}, Wn = window.Vue.ref, s3 = window.Vue.watch, l3 = /* @__PURE__ */ zB({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(t) {
    var P, b;
    const o = t, r = fr(), a = Wn(0), l = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], c = Wn(l[0]), d = Wn(o.width), h = Wn(o.width), w = Wn(new Date().getTime()), V = () => {
      var W, A;
      if (!o.situation.events) {
        const O = (A = (W = o.situation) == null ? void 0 : W.alarms) == null ? void 0 : A.map((he) => he.id);
        r.getEvents(o.situation.id, O);
      }
    };
    V();
    const U = () => (w.value = new Date().getTime(), d.value / (Number(w.value) - Number(y.value))), R = Wn(o.situation.alarms), y = Wn(
      ((b = we.exports.minBy((P = o.situation) == null ? void 0 : P.alarms, "firstEventTime")) == null ? void 0 : b.firstEventTime) || new Date().getTime()
    ), F = Wn(U());
    s3(o, () => {
      var W, A;
      y.value = ((A = we.exports.minBy((W = o.situation) == null ? void 0 : W.alarms, "firstEventTime")) == null ? void 0 : A.firstEventTime) || new Date().getTime(), V(), d.value = h.value, F.value = U(), R.value = o.situation.alarms, c.value = l[0];
    });
    const S = (W) => {
      if ((W == null ? void 0 : W.id) === 1 && (R.value = o.situation.alarms), (W == null ? void 0 : W.id) === 2) {
        const A = we.exports.groupBy(R.value, "severity"), O = [
          ...A.CRITICAL || [],
          ...A.MAJOR || [],
          ...A.MINOR || [],
          ...A.WARNING || [],
          ...A.NORMAL || [],
          ...A.CLEARED || [],
          ...A.INDETERMINATE || []
        ];
        R.value = O.filter((he) => he);
      }
      if ((W == null ? void 0 : W.id) === 3) {
        const A = we.exports.reverse(
          we.exports.sortBy(
            o.situation.alarms,
            (O) => Number(O.lastEventTime) - Number(O.firstEventTime)
          )
        );
        R.value = A;
      }
    }, C = () => {
      d.value += 100, F.value = U();
    }, D = () => {
      d.value -= 100, F.value = U();
    }, E = () => {
      d.value = h.value, F.value = U();
    }, B = (W) => {
      a.value = W;
    }, x = () => {
      a.value = 0;
    };
    return (W, A) => {
      var O, he;
      return dn(), or(im, null, [
        wt("div", LB, [
          wt("div", {
            class: GB(["severity-line", [`${(he = (O = o.situation) == null ? void 0 : O.severity) == null ? void 0 : he.toLowerCase()}-bg dark`]])
          }, null, 2),
          wt("div", null, [
            wt("div", $B, "Situation " + zr(o.situation.id), 1),
            wt("div", null, " Duration: " + zr(ot(uM)(w.value, new Date(y.value))), 1)
          ])
        ]),
        R.value && R.value.length > 0 ? (dn(), or("div", qB, [
          KB,
          wt("div", e3, [
            Gr(ot(Wx), {
              class: "select",
              label: "Sort by:",
              options: l,
              modelValue: c.value,
              "onUpdate:modelValue": [
                A[0] || (A[0] = (se) => c.value = se),
                S
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            wt("div", t3, [
              n3,
              wt("div", null, [
                Gr(ot($), {
                  icon: ot(Gx),
                  class: "zoom-icon",
                  onClick: C
                }, null, 8, ["icon"]),
                Gr(ot($), {
                  icon: ot(uw),
                  class: "zoom-icon",
                  onClick: E
                }, null, 8, ["icon"]),
                Gr(ot($), {
                  icon: ot(AB),
                  class: "zoom-icon",
                  onClick: D
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          h.value ? (dn(), or("div", {
            key: 0,
            class: "alarms",
            style: PB({
              width: h.value + 50 + "px"
            })
          }, [
            wt("div", r3, [
              wt("div", null, zr(ot($t)(y.value)), 1),
              wt("div", null, zr(ot($t)(w.value)), 1)
            ]),
            t.situation.events ? (dn(), or("div", o3, [
              (dn(!0), or(im, null, YB(R.value, (se) => (dn(), or("div", {
                class: "timeline",
                key: se.id
              }, [
                wt("div", i3, [
                  Iw(zr(se.nodeLabel) + " - " + zr(se.id) + " ", 1),
                  a.value === se.id ? (dn(), am(ot($), {
                    key: 0,
                    icon: ot(tu),
                    class: "zoom-icon expand",
                    onClick: x
                  }, null, 8, ["icon"])) : (dn(), am(ot($), {
                    key: 1,
                    icon: ot(tw),
                    class: "zoom-icon expand",
                    onClick: () => B(se.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                Gr(RB, {
                  alarm: se,
                  proportion: F.value,
                  "min-start": y.value,
                  events: o.situation.events[se.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                a.value === se.id ? (dn(), or("div", a3, [
                  Gr(QB, {
                    events: o.situation.events[se.id]
                  }, null, 8, ["events"])
                ])) : ba("", !0)
              ]))), 128))
            ])) : ba("", !0)
          ], 4)) : ba("", !0)
        ])) : ba("", !0)
      ], 64);
    };
  }
});
const c3 = /* @__PURE__ */ Ue(l3, [["__scopeId", "data-v-01717d0d"]]), u3 = window.Vue.openBlock, d3 = window.Vue.createElementBlock, f3 = window.Vue.createElementVNode;
var h3 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const p3 = {}, m3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, w3 = /* @__PURE__ */ f3("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), v3 = [
  w3
];
function V3(t, o) {
  return u3(), d3("svg", m3, v3);
}
var Ia = /* @__PURE__ */ h3(p3, [["render", V3]]);
const T3 = window.Vue.defineComponent, Ye = window.Vue.unref, bt = window.Vue.createVNode, oi = window.Vue.createElementVNode, fn = window.Vue.withCtx, Dw = window.Vue.createTextVNode, vc = window.Vue.openBlock, g3 = window.Vue.createBlock, sm = window.Vue.createCommentVNode, lm = window.Vue.createElementBlock, U3 = window.Vue.pushScopeId, R3 = window.Vue.popScopeId, pu = (t) => (U3("data-v-6a3cc938"), t = t(), R3(), t), N3 = { id: "cont" }, y3 = { class: "btns-navigation" }, k3 = /* @__PURE__ */ pu(() => /* @__PURE__ */ oi("span", null, "Situation List", -1)), M3 = /* @__PURE__ */ pu(() => /* @__PURE__ */ oi("span", null, "Show Previous Situation ", -1)), Z3 = /* @__PURE__ */ pu(() => /* @__PURE__ */ oi("span", null, "Show Next Situation", -1)), b3 = {
  key: 0,
  class: "detail"
}, J3 = /* @__PURE__ */ Dw("Details"), E3 = /* @__PURE__ */ Dw("Metrics"), Ja = window.Vue.ref, cm = window.Vue.watch, S3 = window.Vue.onMounted, A3 = window.VueRouter.useRouter, F3 = window.VueRouter.useRoute, W3 = /* @__PURE__ */ T3({
  __name: "SituationDetail",
  setup(t) {
    const o = A3(), r = F3(), a = parseInt(r.params.id), l = Ja(a), c = fr();
    c.getSituation(l.value), c.situations.length || c.getSituations();
    const d = Ja(), h = Ja(), w = Ja(
      c.filteredSituations.findIndex((R) => R === l.value)
    );
    cm(
      () => c.situationDetail,
      () => {
        d.value = c.situationDetail;
      }
    ), S3(() => {
      var y;
      const R = ((y = document.getElementById("cont")) == null ? void 0 : y.getBoundingClientRect().width) || 1200;
      h.value = R - 90;
    });
    const V = () => {
      o.push({
        name: "situations"
      });
    }, U = (R) => {
      const y = w.value, F = c.filteredSituations[y + R];
      o.push({
        name: "situationDetail",
        params: {
          id: F
        }
      });
    };
    return cm(r, () => {
      l.value = parseInt(r.params.id), c.getSituation(l.value), w.value = c.filteredSituations.findIndex((R) => R == l.value);
    }), (R, y) => (vc(), lm("div", N3, [
      oi("div", y3, [
        bt(Ye(We), {
          primary: "",
          onClick: y[0] || (y[0] = () => V())
        }, {
          default: fn(() => [
            bt(Ye($), {
              icon: Ye(Ia),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            k3
          ]),
          _: 1
        }),
        oi("div", null, [
          bt(Ye(We), {
            disabled: !Ye(c).filteredSituations[w.value - 1],
            primary: "",
            onClick: y[1] || (y[1] = () => U(-1))
          }, {
            default: fn(() => [
              bt(Ye($), {
                icon: Ye(Ia),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              M3
            ]),
            _: 1
          }, 8, ["disabled"]),
          bt(Ye(We), {
            disabled: !Ye(c).filteredSituations[w.value + 1],
            primary: "",
            onClick: y[2] || (y[2] = () => U(1))
          }, {
            default: fn(() => [
              Z3,
              bt(Ye($), {
                icon: Ye(Ia),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      d.value ? (vc(), lm("div", b3, [
        bt(Ye($A), null, {
          tabs: fn(() => [
            bt(Ye(pp), null, {
              default: fn(() => [
                J3
              ]),
              _: 1
            }),
            bt(Ye(pp), null, {
              default: fn(() => [
                E3
              ]),
              _: 1
            })
          ]),
          default: fn(() => [
            bt(Ye(mp), { class: "panel" }, {
              default: fn(() => [
                bt(fx, { "situation-info": d.value }, null, 8, ["situation-info"])
              ]),
              _: 1
            }),
            bt(Ye(mp), { class: "panel" }, {
              default: fn(() => [
                h.value ? (vc(), g3(c3, {
                  key: 0,
                  situation: d.value,
                  width: h.value
                }, null, 8, ["situation", "width"])) : sm("", !0)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : sm("", !0)
    ]));
  }
});
const C3 = /* @__PURE__ */ Ue(W3, [["__scopeId", "data-v-6a3cc938"]]);
const _w = window.Vue.defineComponent, Vc = window.Vue.ref, x3 = window.Vue.toRef, Tc = window.Vue.inject, um = window.Vue.watch, B3 = window.Vue.nextTick, dm = window.Vue.openBlock, fm = window.Vue.createElementBlock, gc = window.Vue.createElementVNode, I3 = window.Vue.normalizeClass, hm = window.Vue.renderSlot, pm = window.Vue.createCommentVNode, Uc = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var D3 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const _3 = {
  modelValue: {
    type: Boolean,
    default: !1
  },
  center: {
    type: Boolean,
    default: !1
  },
  timeout: {
    type: Number,
    default: 4e3
  },
  error: {
    type: Boolean,
    default: !1
  }
}, O3 = {
  "update:modelValue": (t) => !0,
  closed: () => !0
}, Q3 = _w({
  emits: O3,
  props: _3,
  setup(t, o) {
    const r = Vc(), a = Vc(!1), l = Vc(!1), c = Date.now() + Math.floor(Math.random() * 1e3), d = x3(t, "modelValue"), h = Tc("queueSnackbar", !1), w = Tc("unqueueSnackbar", !1), V = Tc("nextSnackbar", () => {
    }), U = (C, D) => {
      let E, B, x = D;
      const P = () => {
        !E || (to(E), E = 0, x -= Date.now() - B);
      }, b = () => {
        E || (B = Date.now(), E = eo(C, x));
      };
      return b(), { pause: P, resume: b };
    }, R = () => {
      a.value = !1, o.emit("closed"), V && V();
    }, y = (C) => {
      C.keyCode === K.ESCAPE && (l.value = !1);
    }, F = () => {
      r.value.pause();
    }, S = () => {
      l.value && r.value.resume();
    };
    return um(d, (C) => {
      C ? B3(() => {
        h === !1 ? l.value = C : h(c, l);
      }) : w === !1 ? l.value = C : w(c);
    }, { immediate: !0 }), um(l, (C) => {
      C ? (a.value = !0, r.value = U(() => {
        l.value = !1;
      }, t.timeout)) : (o.emit("update:modelValue", !1), F());
    }), {
      hideTimeout: r,
      contentShow: a,
      internalValue: l,
      id: c,
      incomingValue: d,
      closed: R,
      keyPressed: y,
      stopTimer: F,
      resumeTimer: S
    };
  }
}), z3 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, G3 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, Y3 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, P3 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function H3(t, o, r, a, l, c) {
  return t.modelValue || t.contentShow ? (dm(), fm("div", z3, [
    gc("div", {
      class: I3(["feather-snackbar", {
        "fade-in": t.internalValue,
        "fade-out": t.contentShow && !t.internalValue,
        center: t.center,
        error: t.error
      }]),
      "data-ref-id": "feather-snackbar",
      onAnimationend: o[0] || (o[0] = (...d) => t.closed && t.closed(...d)),
      onKeydown: o[1] || (o[1] = (...d) => t.keyPressed && t.keyPressed(...d)),
      onMouseover: o[2] || (o[2] = (...d) => t.stopTimer && t.stopTimer(...d)),
      onMouseleave: o[3] || (o[3] = (...d) => t.resumeTimer && t.resumeTimer(...d)),
      onFocusin: o[4] || (o[4] = (...d) => t.stopTimer && t.stopTimer(...d)),
      onFocusout: o[5] || (o[5] = (...d) => t.resumeTimer && t.resumeTimer(...d))
    }, [
      gc("div", G3, [
        t.contentShow ? (dm(), fm("div", Y3, [
          hm(t.$slots, "default", {}, void 0, !0)
        ])) : pm("", !0)
      ]),
      gc("div", P3, [
        hm(t.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : pm("", !0);
}
var j3 = /* @__PURE__ */ D3(Q3, [["render", H3], ["__scopeId", "data-v-5cf64a62"]]);
const X3 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
_w({
  props: X3,
  setup() {
    let t, o = [];
    const r = () => {
      t && (t.val.value = !0);
    }, a = (d, h) => {
      const w = { id: d, val: h };
      t ? o.push(w) : (t = w, r());
    }, l = (d) => {
      (t == null ? void 0 : t.id) === d ? t.val.value = !1 : o = o.filter((h) => h.id != d);
    }, c = () => {
      o.length ? (t = o.shift(), r()) : t = void 0;
    };
    return Uc("queueSnackbar", a), Uc("unqueueSnackbar", l), Uc("nextSnackbar", c), {
      curr: t,
      queue: o,
      showSnackbar: r,
      queueSnackbar: a,
      shiftItem: c,
      unqueueSnackbar: l
    };
  }
});
const L3 = window.Vue.defineComponent, ke = window.Vue.unref, Jt = window.Vue.createVNode, Pe = window.Vue.createElementVNode, Yr = window.Vue.withCtx, Ea = window.Vue.toDisplayString, mu = window.Vue.createTextVNode, Rc = window.Vue.normalizeClass, Go = window.Vue.openBlock, Yo = window.Vue.createElementBlock, mm = window.Vue.createCommentVNode, $3 = window.Vue.renderList, q3 = window.Vue.Fragment, K3 = window.Vue.pushScopeId, eI = window.Vue.popScopeId, Vi = (t) => (K3("data-v-fefd6a91"), t = t(), eI(), t), tI = { class: "container" }, nI = /* @__PURE__ */ Vi(() => /* @__PURE__ */ Pe("span", null, "Situation List", -1)), rI = /* @__PURE__ */ Vi(() => /* @__PURE__ */ Pe("h2", null, "New Situation", -1)), oI = { class: "form" }, iI = { class: "fields" }, aI = /* @__PURE__ */ mu(" Total alarms added: "), sI = { class: "total" }, lI = {
  key: 0,
  class: "errorList"
}, cI = { class: "footer" }, uI = /* @__PURE__ */ Vi(() => /* @__PURE__ */ Pe("span", null, "Clear", -1)), dI = /* @__PURE__ */ Vi(() => /* @__PURE__ */ Pe("span", null, "Add Situation", -1)), fI = { class: "alarm-column" }, hI = /* @__PURE__ */ Vi(() => /* @__PURE__ */ Pe("h4", null, "Add Unassociated Alarms", -1)), pI = {
  key: 0,
  class: "alarms"
}, mI = { class: "alarmInfo" }, wI = { class: "alarm-title" }, vI = { class: "description" }, VI = /* @__PURE__ */ mu(" Error on creating new situation :( "), TI = /* @__PURE__ */ mu("dismiss"), gI = window.VueRouter.useRouter, Cn = window.Vue.ref, UI = window.Vue.watch, RI = /* @__PURE__ */ L3({
  __name: "AddSituation",
  setup(t) {
    const o = gI(), r = fr(), a = Cn(), l = Cn(""), c = Cn(), d = Cn(""), h = Cn([]), w = Cn(!1), V = Cn(), U = Cn(r.unassignedAlarms);
    U.value.length || r.getUnassignedAlarms(), UI(
      () => r.unassignedAlarms,
      () => {
        U.value = r.unassignedAlarms;
      }
    );
    const R = () => {
      o.push({
        name: "situations"
      });
    }, y = (E) => {
      E.includes("all") ? U.value = r.unassignedAlarms : U.value = r.unassignedAlarms.filter(
        (B) => E.includes(B.severity)
      );
    }, F = (E) => {
      w.value = !1, we.exports.includes(h.value, E) ? we.exports.remove(h.value, (B) => B === E) : h.value.push(E);
    }, S = () => {
      const E = "This field should not be empty";
      let B = !0;
      return a.value || (l.value = E, B = !1), c.value || (d.value = E, B = !1), h.value.length < 2 && (w.value = !0, B = !1), B;
    }, C = async () => {
      if (S()) {
        const E = {
          alarmIdList: h.value,
          diagnosticText: c.value,
          description: a.value
        };
        await gy(E) ? o.push({
          name: "situations"
        }) : V.value = !0;
      }
    }, D = () => {
      a.value = "", c.value = "", h.value = [], U.value = r.unassignedAlarms;
    };
    return (E, B) => (Go(), Yo("div", tI, [
      Jt(ke(We), {
        primary: "",
        onClick: B[0] || (B[0] = () => R()),
        class: "back-btn"
      }, {
        default: Yr(() => [
          Jt(ke($), {
            icon: ke(Ia),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          nI
        ]),
        _: 1
      }),
      rI,
      Pe("div", oI, [
        Pe("div", iI, [
          Jt(ke(Wc), {
            modelValue: a.value,
            "onUpdate:modelValue": B[1] || (B[1] = (x) => a.value = x),
            label: "Diagnostic Text",
            rows: "4",
            error: l.value
          }, null, 8, ["modelValue", "error"]),
          Jt(ke(Wc), {
            modelValue: c.value,
            "onUpdate:modelValue": B[2] || (B[2] = (x) => c.value = x),
            label: "Description",
            rows: "4",
            error: d.value
          }, null, 8, ["modelValue", "error"]),
          Pe("div", null, [
            Pe("div", {
              class: Rc(["totalAlarms", { errorList: w.value }])
            }, [
              aI,
              Pe("span", sI, Ea(ke(h).length), 1)
            ], 2),
            w.value ? (Go(), Yo("div", lI, " It is required to add at least 2 alarms ")) : mm("", !0)
          ]),
          Pe("div", cI, [
            Jt(ke(We), {
              class: "btn",
              primary: "",
              onClick: D
            }, {
              default: Yr(() => [
                Jt(ke($), {
                  icon: ke(li),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                uI
              ]),
              _: 1
            }),
            Jt(ke(We), {
              class: "btn",
              primary: "",
              onClick: C
            }, {
              default: Yr(() => [
                Jt(ke($), {
                  icon: ke(dw),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                dI
              ]),
              _: 1
            })
          ])
        ]),
        Pe("div", fI, [
          hI,
          Jt(Kc, {
            alarms: ke(r).unassignedAlarms,
            onSelectedSeverities: y
          }, null, 8, ["alarms"]),
          U.value ? (Go(), Yo("div", pI, [
            (Go(!0), Yo(q3, null, $3(U.value, (x) => (Go(), Yo("div", {
              key: x.id,
              class: Rc(["alarm", { selected: ke(we.exports.includes)(ke(h), x.id) }])
            }, [
              Pe("div", mI, [
                Pe("div", {
                  class: Rc(["triangle", [`${x.severity.toLowerCase()}`]])
                }, null, 2),
                Jt(ke(ls), {
                  modelValue: ke(we.exports.includes)(ke(h), x.id),
                  label: "selected",
                  "onUpdate:modelValue": () => F(x.id)
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                Pe("div", wI, Ea(x.nodeLabel) + " - " + Ea(x.id), 1)
              ]),
              Pe("div", vI, Ea(ke(dM)(x.description, 300)), 1)
            ], 2))), 128))
          ])) : mm("", !0)
        ])
      ]),
      Jt(ke(j3), {
        modelValue: V.value,
        "onUpdate:modelValue": B[4] || (B[4] = (x) => V.value = x),
        center: "",
        error: ""
      }, {
        button: Yr(() => [
          Jt(ke(We), {
            onClick: B[3] || (B[3] = (x) => V.value = !1),
            text: ""
          }, {
            default: Yr(() => [
              TI
            ]),
            _: 1
          })
        ]),
        default: Yr(() => [
          VI
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const NI = /* @__PURE__ */ Ue(RI, [["__scopeId", "data-v-fefd6a91"]]);
var yI = Object.defineProperty, kI = Object.defineProperties, MI = Object.getOwnPropertyDescriptors, wm = Object.getOwnPropertySymbols, ZI = Object.prototype.hasOwnProperty, bI = Object.prototype.propertyIsEnumerable, vm = (t, o, r) => o in t ? yI(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Da = (t, o) => {
  for (var r in o || (o = {}))
    ZI.call(o, r) && vm(t, r, o[r]);
  if (wm)
    for (var r of wm(o))
      bI.call(o, r) && vm(t, r, o[r]);
  return t;
}, Ow = (t, o) => kI(t, MI(o));
const Qw = window.Vue.defineComponent, JI = window.Vue.ref, Ko = window.Vue.computed, EI = window.Vue.reactive, Vm = window.Vue.watch, Nc = window.Vue.inject, zw = window.Vue.resolveComponent, Ic = window.Vue.openBlock, Gw = window.Vue.createElementBlock, Dn = window.Vue.createElementVNode, SI = window.Vue.createBlock, AI = window.Vue.createCommentVNode, Yw = window.Vue.renderSlot, FI = window.Vue.pushScopeId, WI = window.Vue.popScopeId, yc = window.Vue.toRef, Tm = window.Vue.mergeProps, CI = window.Vue.toDisplayString, xI = window.Vue.createVNode;
var Pw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const BI = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, II = Qw({
  props: BI,
  setup(t) {
    const o = JI(), r = () => {
      o.value.focus();
    }, a = Ko(() => ae("feather-radio-button")), l = EI({
      first: !1,
      focus: r,
      disabled: t.disabled,
      value: t.value,
      checked: !1,
      id: a.value
    }), c = Ko(() => ae("radio-label-id")), d = Ko(() => l.first || l.checked ? 0 : -1);
    Vm(() => t.disabled, (R) => {
      l.disabled = R;
    }, { immediate: !0 }), Vm(() => t.value, (R) => {
      l.value = R;
    }, { immediate: !0 });
    const h = Nc("register", (R) => {
    }), w = Nc("blur", (R) => {
    }), V = Nc("select", (R) => {
    });
    return h(l), {
      labelId: c,
      tabindex: d,
      vm: l,
      blur: w,
      click: () => {
        V(l);
      },
      input: o,
      id: a
    };
  },
  components: {
    FeatherRipple: ur
  }
}), DI = (t) => (FI("data-v-24790cf0"), t = t(), WI(), t), _I = { class: "layout-container" }, OI = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], QI = { class: "radio hover focus" }, zI = /* @__PURE__ */ DI(() => /* @__PURE__ */ Dn("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ Dn("svg", { class: "dot" }, [
    /* @__PURE__ */ Dn("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), GI = ["id"];
function YI(t, o, r, a, l, c) {
  const d = zw("feather-ripple");
  return Ic(), Gw("div", _I, [
    Dn("div", {
      class: "feather-radio",
      role: "radio",
      ref: "input",
      id: t.id,
      "aria-checked": t.vm.checked ? "true" : "false",
      "aria-disabled": t.vm.disabled ? "true" : "false",
      "aria-labelledby": t.labelId,
      tabindex: t.tabindex,
      onClick: o[0] || (o[0] = (...h) => t.click && t.click(...h)),
      onBlur: o[1] || (o[1] = (...h) => t.blur && t.blur(...h)),
      "data-ref-id": "feather-radio"
    }, [
      Dn("div", QI, [
        zI,
        t.vm.disabled ? AI("", !0) : (Ic(), SI(d, {
          key: 0,
          center: ""
        }))
      ]),
      Dn("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: t.labelId
      }, [
        Yw(t.$slots, "default", {}, void 0, !0)
      ], 8, GI)
    ], 40, OI)
  ]);
}
var La = /* @__PURE__ */ Pw(II, [["render", YI], ["__scopeId", "data-v-24790cf0"]]);
const PI = Ow(Da({}, hi), {
  label: {
    type: String,
    required: !0
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object, Date, Function]
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  schema: {
    type: Object,
    required: !1
  }
}), HI = {
  "update:modelValue": (t) => !0,
  blur: (t) => !0
}, jI = Qw({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: PI,
  emits: HI,
  setup(t, o) {
    pi(t);
    const r = yc(t, "error"), a = yc(t, "modelValue"), l = Ko(() => ae("feather-input-description")), c = Ko(() => {
      const d = Ow(Da({}, o.attrs), {
        class: "",
        "aria-describedby": l.value
      });
      return d["aria-invalid"] || (d["aria-invalid"] = !!r.value), d;
    });
    return Da(Da({
      descriptionId: l,
      attrs: c
    }, iw(a, o.emit, t.label, t.schema, yc(t, "error"))), fi(o.attrs));
  },
  components: {
    InputSubText: ui
  }
}), XI = ["for"], LI = ["id"];
function $I(t, o, r, a, l, c) {
  const d = zw("InputSubText");
  return Ic(), Gw("div", Tm(t.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: t.vertical }]
  }), [
    Dn("label", {
      for: t.groupId,
      class: "group-label"
    }, CI(t.label), 9, XI),
    Dn("div", Tm(t.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: t.groupId,
      onKeydown: o[0] || (o[0] = (...h) => t.keydown && t.keydown(...h))
    }), [
      Yw(t.$slots, "default", {}, void 0, !0)
    ], 16, LI),
    xI(d, { id: t.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Hw = /* @__PURE__ */ Pw(jI, [["render", $I], ["__scopeId", "data-v-6775aeb9"]]);
const qI = window.Vue.openBlock, KI = window.Vue.createElementBlock, eD = window.Vue.createStaticVNode;
var tD = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const nD = {}, rD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oD = /* @__PURE__ */ eD('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), iD = [
  oD
];
function aD(t, o) {
  return qI(), KI("svg", rD, iD);
}
var sD = /* @__PURE__ */ tD(nD, [["render", aD]]);
const lD = window.Vue.openBlock, cD = window.Vue.createElementBlock, uD = window.Vue.createStaticVNode;
var dD = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const fD = {}, hD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, pD = /* @__PURE__ */ uD('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), mD = [
  pD
];
function wD(t, o) {
  return lD(), cD("svg", hD, mD);
}
var vD = /* @__PURE__ */ dD(fD, [["render", wD]]);
const VD = window.Vue.openBlock, TD = window.Vue.createElementBlock, gD = window.Vue.createElementVNode;
var UD = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const RD = {}, ND = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yD = /* @__PURE__ */ gD("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), kD = [
  yD
];
function MD(t, o) {
  return VD(), TD("svg", ND, kD);
}
var ZD = /* @__PURE__ */ UD(RD, [["render", MD]]);
const bD = window.Vue.openBlock, JD = window.Vue.createElementBlock, ED = window.Vue.createStaticVNode;
var SD = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const AD = {}, FD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, WD = /* @__PURE__ */ ED('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), CD = [
  WD
];
function xD(t, o) {
  return bD(), JD("svg", FD, CD);
}
var BD = /* @__PURE__ */ SD(AD, [["render", xD]]);
const ID = window.Vue.openBlock, DD = window.Vue.createElementBlock, _D = window.Vue.createElementVNode;
var OD = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const QD = {}, zD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GD = /* @__PURE__ */ _D("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), YD = [
  GD
];
function PD(t, o) {
  return ID(), DD("svg", zD, YD);
}
var HD = /* @__PURE__ */ OD(QD, [["render", PD]]);
const wu = () => window.VRouter || vu, jD = window.Vue.defineComponent, Me = window.Vue.createElementVNode, ii = window.Vue.createTextVNode, Ke = window.Vue.unref, hn = window.Vue.createVNode, Sa = window.Vue.withCtx, gm = window.Vue.openBlock, Um = window.Vue.createElementBlock, XD = window.Vue.createCommentVNode, LD = window.Vue.pushScopeId, $D = window.Vue.popScopeId, Gt = (t) => (LD("data-v-b4b3bdcf"), t = t(), $D(), t), qD = { class: "container" }, KD = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("div", { class: "title" }, "ALEC", -1)), e_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("div", { class: "description" }, [
  /* @__PURE__ */ ii(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ Me("br"),
  /* @__PURE__ */ Me("strong", null, "Our goal"),
  /* @__PURE__ */ ii(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), t_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("h3", null, "Key Benefits:", -1)), n_ = { class: "list" }, r_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), o_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("span", null, "Assist in root cause analysis.", -1)), i_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), a_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("span", null, "Easy configuration.", -1)), s_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), l_ = {
  key: 0,
  class: "optin"
}, c_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("h3", null, "Enable ALEC for more precise results:", -1)), u_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), d_ = { class: "choices" }, f_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), h_ = /* @__PURE__ */ ii("Yes"), p_ = /* @__PURE__ */ ii("No"), m_ = /* @__PURE__ */ ii(" Continue "), w_ = window.Vue.ref, v_ = /* @__PURE__ */ jD({
  __name: "WelcomePage",
  setup(t) {
    const o = vi(), r = wu(), a = w_(!0), l = () => {
      const c = Boolean(a.value);
      o.savePermission(c), r.push({ name: "configuration" });
    };
    return (c, d) => (gm(), Um("div", qD, [
      KD,
      e_,
      Me("div", null, [
        t_,
        Me("div", n_, [
          Me("div", null, [
            hn(Ke($), {
              icon: Ke(BD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            r_
          ]),
          Me("div", null, [
            hn(Ke($), {
              icon: Ke(ZD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            o_
          ]),
          Me("div", null, [
            hn(Ke($), {
              icon: Ke(HD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            i_
          ]),
          Me("div", null, [
            hn(Ke($), {
              icon: Ke(sD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            a_
          ]),
          Me("div", null, [
            hn(Ke($), {
              icon: Ke(vD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            s_
          ])
        ])
      ]),
      Ke(o).isAdmin ? (gm(), Um("div", l_, [
        c_,
        u_,
        Me("div", d_, [
          f_,
          hn(Ke(Hw), {
            horizontal: "",
            modelValue: a.value,
            "onUpdate:modelValue": d[0] || (d[0] = (h) => a.value = h),
            label: ""
          }, {
            default: Sa(() => [
              hn(Ke(La), { value: !0 }, {
                default: Sa(() => [
                  h_
                ]),
                _: 1
              }),
              hn(Ke(La), { value: !1 }, {
                default: Sa(() => [
                  p_
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : XD("", !0),
      hn(Ke(We), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: l
      }, {
        default: Sa(() => [
          m_
        ]),
        _: 1
      })
    ]));
  }
});
const V_ = /* @__PURE__ */ Ue(v_, [["__scopeId", "data-v-b4b3bdcf"]]), T_ = window.Vue.defineComponent, g_ = window.Vue.createElementVNode, U_ = window.Vue.createTextVNode, R_ = window.Vue.unref, N_ = window.Vue.withCtx, y_ = window.Vue.createVNode, k_ = window.Vue.Fragment, M_ = window.Vue.openBlock, Z_ = window.Vue.createElementBlock, b_ = window.Vue.pushScopeId, J_ = window.Vue.popScopeId, E_ = (t) => (b_("data-v-bcb7dcc6"), t = t(), J_(), t), S_ = /* @__PURE__ */ E_(() => /* @__PURE__ */ g_("div", { class: "main" }, "Something bad is happening...", -1)), A_ = /* @__PURE__ */ U_(" Reload "), F_ = /* @__PURE__ */ T_({
  __name: "ErrorPage",
  setup(t) {
    const o = wu(), r = () => {
      o.push({ name: "situations" });
    };
    return (a, l) => (M_(), Z_(k_, null, [
      S_,
      y_(R_(We), {
        primary: "",
        onClick: r
      }, {
        default: N_(() => [
          A_
        ]),
        _: 1
      })
    ], 64));
  }
});
const W_ = /* @__PURE__ */ Ue(F_, [["__scopeId", "data-v-bcb7dcc6"]]), C_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", x_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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", B_ = window.Vue.defineComponent, Ce = window.Vue.createElementVNode, Dc = window.Vue.createTextVNode, xn = window.Vue.unref, Po = window.Vue.withCtx, Ho = window.Vue.createVNode, I_ = window.Vue.openBlock, D_ = window.Vue.createElementBlock, __ = window.Vue.pushScopeId, O_ = window.Vue.popScopeId, pr = (t) => (__("data-v-9a5b5f4e"), t = t(), O_(), t), Q_ = { class: "container" }, z_ = /* @__PURE__ */ pr(() => /* @__PURE__ */ Ce("h2", null, "Configuration", -1)), G_ = /* @__PURE__ */ pr(() => /* @__PURE__ */ Ce("p", null, [
  /* @__PURE__ */ Dc(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ Ce("br"),
  /* @__PURE__ */ Dc(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ Ce("strong", null, [
    /* @__PURE__ */ Ce("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), Y_ = { class: "radio-content" }, P_ = /* @__PURE__ */ pr(() => /* @__PURE__ */ Ce("strong", { class: "title" }, "Clustering", -1)), H_ = /* @__PURE__ */ pr(() => /* @__PURE__ */ Ce("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), j_ = /* @__PURE__ */ pr(() => /* @__PURE__ */ Ce("img", {
  class: "img",
  src: C_
}, null, -1)), X_ = /* @__PURE__ */ pr(() => /* @__PURE__ */ Ce("div", { class: "hellinger" }, [
  /* @__PURE__ */ Ce("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Ce("br"),
  /* @__PURE__ */ Ce("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), L_ = /* @__PURE__ */ pr(() => /* @__PURE__ */ Ce("div", { class: "radio-content" }, [
  /* @__PURE__ */ Ce("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Ce("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ Ce("img", {
    class: "img img2",
    src: x_
  })
], -1)), $_ = /* @__PURE__ */ Dc(" Continue "), Rm = window.Vue.ref, q_ = /* @__PURE__ */ B_({
  __name: "ConfigurationPage",
  setup(t) {
    const o = vi(), r = wu(), a = Rm(!1), l = Rm(vt.ENGINE_DBSCAN), c = () => {
      Gm(o.allowSave), Vy(l.value, a.value), r.push({ name: "situations" });
    };
    return (d, h) => (I_(), D_("div", Q_, [
      z_,
      G_,
      Ce("div", null, [
        Ho(xn(Hw), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: l.value,
          "onUpdate:modelValue": h[1] || (h[1] = (w) => l.value = w)
        }, {
          default: Po(() => [
            Ho(xn(La), {
              class: "radio",
              value: xn(vt).ENGINE_DBSCAN
            }, {
              default: Po(() => [
                Ce("div", Y_, [
                  P_,
                  H_,
                  j_,
                  Ho(xn(ls), {
                    modelValue: a.value,
                    "onUpdate:modelValue": h[0] || (h[0] = (w) => a.value = w),
                    disabled: l.value !== xn(vt).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Po(() => [
                      X_
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            Ho(xn(La), {
              class: "radio",
              value: xn(vt).ENGINE_DEEP_LEARNING
            }, {
              default: Po(() => [
                L_
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      Ho(xn(We), {
        primary: "",
        class: "btn",
        onClick: h[2] || (h[2] = () => c())
      }, {
        default: Po(() => [
          $_
        ]),
        _: 1
      })
    ]));
  }
});
const K_ = /* @__PURE__ */ Ue(q_, [["__scopeId", "data-v-9a5b5f4e"]]), eO = window.VueRouter.createRouter, tO = window.VueRouter.createWebHistory, kc = async () => {
  const t = window.VRouter || vu, o = vi();
  if (!o.userId) {
    const r = await o.getUserRole();
    await o.getAlecInfo(), r ? t.push({ name: "home" }) : t.push({ name: "error" });
  }
}, jw = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (t) => {
      const o = window.VRouter || vu, r = vi();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? o.push({ name: "welcome", params: t.params }) : o.push({ name: "situations", params: t.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => kc(),
    component: V_
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => kc(),
    component: K_
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => kc(),
    component: mA
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: C3
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: NI
  },
  {
    path: "/error",
    name: "error",
    component: W_
  }
], Nm = window.VRouter;
if (Nm)
  for (const t of jw) {
    const { path: o, name: r, component: a, beforeEnter: l } = t;
    Nm.addRoute("Plugin", {
      path: o.slice(1),
      name: r,
      component: a,
      beforeEnter: l
    });
  }
const vu = eO({
  history: tO(),
  routes: jw
});
window.Vue.createApp;
window.Pinia.createPinia;
window.uiextension = jR;

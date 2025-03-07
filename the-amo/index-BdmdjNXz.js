(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && o(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function o(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = u(c);
    fetch(c.href, d);
  }
})();
var pr = { exports: {} },
  sl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ym;
function wv() {
  if (ym) return sl;
  ym = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function u(o, c, d) {
    var h = null;
    if (
      (d !== void 0 && (h = "" + d),
      c.key !== void 0 && (h = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var y in c) y !== "key" && (d[y] = c[y]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: a, type: o, key: h, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return (sl.Fragment = l), (sl.jsx = u), (sl.jsxs = u), sl;
}
var gm;
function qv() {
  return gm || ((gm = 1), (pr.exports = wv())), pr.exports;
}
var L = qv(),
  yr = { exports: {} },
  lt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vm;
function Yv() {
  if (vm) return lt;
  vm = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.iterator;
  function A(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (b && T[b]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _ = Object.assign,
    B = {};
  function w(T, N, nt) {
    (this.props = T),
      (this.context = N),
      (this.refs = B),
      (this.updater = nt || O);
  }
  (w.prototype.isReactComponent = {}),
    (w.prototype.setState = function (T, N) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, T, N, "setState");
    }),
    (w.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    });
  function j() {}
  j.prototype = w.prototype;
  function Y(T, N, nt) {
    (this.props = T),
      (this.context = N),
      (this.refs = B),
      (this.updater = nt || O);
  }
  var X = (Y.prototype = new j());
  (X.constructor = Y), _(X, w.prototype), (X.isPureReactComponent = !0);
  var st = Array.isArray,
    H = { H: null, A: null, T: null, S: null },
    F = Object.prototype.hasOwnProperty;
  function mt(T, N, nt, $, Z, ht) {
    return (
      (nt = ht.ref),
      {
        $$typeof: a,
        type: T,
        key: N,
        ref: nt !== void 0 ? nt : null,
        props: ht,
      }
    );
  }
  function I(T, N) {
    return mt(T.type, N, void 0, void 0, void 0, T.props);
  }
  function Q(T) {
    return typeof T == "object" && T !== null && T.$$typeof === a;
  }
  function it(T) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (nt) {
        return N[nt];
      })
    );
  }
  var qt = /\/+/g;
  function ve(T, N) {
    return typeof T == "object" && T !== null && T.key != null
      ? it("" + T.key)
      : N.toString(36);
  }
  function Se() {}
  function be(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (
          (typeof T.status == "string"
            ? T.then(Se, Se)
            : ((T.status = "pending"),
              T.then(
                function (N) {
                  T.status === "pending" &&
                    ((T.status = "fulfilled"), (T.value = N));
                },
                function (N) {
                  T.status === "pending" &&
                    ((T.status = "rejected"), (T.reason = N));
                }
              )),
          T.status)
        ) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function ne(T, N, nt, $, Z) {
    var ht = typeof T;
    (ht === "undefined" || ht === "boolean") && (T = null);
    var ut = !1;
    if (T === null) ut = !0;
    else
      switch (ht) {
        case "bigint":
        case "string":
        case "number":
          ut = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case a:
            case l:
              ut = !0;
              break;
            case v:
              return (ut = T._init), ne(ut(T._payload), N, nt, $, Z);
          }
      }
    if (ut)
      return (
        (Z = Z(T)),
        (ut = $ === "" ? "." + ve(T, 0) : $),
        st(Z)
          ? ((nt = ""),
            ut != null && (nt = ut.replace(qt, "$&/") + "/"),
            ne(Z, N, nt, "", function (jt) {
              return jt;
            }))
          : Z != null &&
            (Q(Z) &&
              (Z = I(
                Z,
                nt +
                  (Z.key == null || (T && T.key === Z.key)
                    ? ""
                    : ("" + Z.key).replace(qt, "$&/") + "/") +
                  ut
              )),
            N.push(Z)),
        1
      );
    ut = 0;
    var ie = $ === "" ? "." : $ + ":";
    if (st(T))
      for (var St = 0; St < T.length; St++)
        ($ = T[St]), (ht = ie + ve($, St)), (ut += ne($, N, nt, ht, Z));
    else if (((St = A(T)), typeof St == "function"))
      for (T = St.call(T), St = 0; !($ = T.next()).done; )
        ($ = $.value), (ht = ie + ve($, St++)), (ut += ne($, N, nt, ht, Z));
    else if (ht === "object") {
      if (typeof T.then == "function") return ne(be(T), N, nt, $, Z);
      throw (
        ((N = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return ut;
  }
  function q(T, N, nt) {
    if (T == null) return T;
    var $ = [],
      Z = 0;
    return (
      ne(T, $, "", "", function (ht) {
        return N.call(nt, ht, Z++);
      }),
      $
    );
  }
  function J(T) {
    if (T._status === -1) {
      var N = T._result;
      (N = N()),
        N.then(
          function (nt) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = nt));
          },
          function (nt) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = nt));
          }
        ),
        T._status === -1 && ((T._status = 0), (T._result = N));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var P =
    typeof reportError == "function"
      ? reportError
      : function (T) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var N = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof T == "object" &&
                T !== null &&
                typeof T.message == "string"
                  ? String(T.message)
                  : String(T),
              error: T,
            });
            if (!window.dispatchEvent(N)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", T);
            return;
          }
          console.error(T);
        };
  function vt() {}
  return (
    (lt.Children = {
      map: q,
      forEach: function (T, N, nt) {
        q(
          T,
          function () {
            N.apply(this, arguments);
          },
          nt
        );
      },
      count: function (T) {
        var N = 0;
        return (
          q(T, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (T) {
        return (
          q(T, function (N) {
            return N;
          }) || []
        );
      },
      only: function (T) {
        if (!Q(T))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return T;
      },
    }),
    (lt.Component = w),
    (lt.Fragment = u),
    (lt.Profiler = c),
    (lt.PureComponent = Y),
    (lt.StrictMode = o),
    (lt.Suspense = m),
    (lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = H),
    (lt.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (lt.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (lt.cloneElement = function (T, N, nt) {
      if (T == null)
        throw Error(
          "The argument must be a React element, but you passed " + T + "."
        );
      var $ = _({}, T.props),
        Z = T.key,
        ht = void 0;
      if (N != null)
        for (ut in (N.ref !== void 0 && (ht = void 0),
        N.key !== void 0 && (Z = "" + N.key),
        N))
          !F.call(N, ut) ||
            ut === "key" ||
            ut === "__self" ||
            ut === "__source" ||
            (ut === "ref" && N.ref === void 0) ||
            ($[ut] = N[ut]);
      var ut = arguments.length - 2;
      if (ut === 1) $.children = nt;
      else if (1 < ut) {
        for (var ie = Array(ut), St = 0; St < ut; St++)
          ie[St] = arguments[St + 2];
        $.children = ie;
      }
      return mt(T.type, Z, void 0, void 0, ht, $);
    }),
    (lt.createContext = function (T) {
      return (
        (T = {
          $$typeof: h,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: d, _context: T }),
        T
      );
    }),
    (lt.createElement = function (T, N, nt) {
      var $,
        Z = {},
        ht = null;
      if (N != null)
        for ($ in (N.key !== void 0 && (ht = "" + N.key), N))
          F.call(N, $) &&
            $ !== "key" &&
            $ !== "__self" &&
            $ !== "__source" &&
            (Z[$] = N[$]);
      var ut = arguments.length - 2;
      if (ut === 1) Z.children = nt;
      else if (1 < ut) {
        for (var ie = Array(ut), St = 0; St < ut; St++)
          ie[St] = arguments[St + 2];
        Z.children = ie;
      }
      if (T && T.defaultProps)
        for ($ in ((ut = T.defaultProps), ut))
          Z[$] === void 0 && (Z[$] = ut[$]);
      return mt(T, ht, void 0, void 0, null, Z);
    }),
    (lt.createRef = function () {
      return { current: null };
    }),
    (lt.forwardRef = function (T) {
      return { $$typeof: y, render: T };
    }),
    (lt.isValidElement = Q),
    (lt.lazy = function (T) {
      return { $$typeof: v, _payload: { _status: -1, _result: T }, _init: J };
    }),
    (lt.memo = function (T, N) {
      return { $$typeof: p, type: T, compare: N === void 0 ? null : N };
    }),
    (lt.startTransition = function (T) {
      var N = H.T,
        nt = {};
      H.T = nt;
      try {
        var $ = T(),
          Z = H.S;
        Z !== null && Z(nt, $),
          typeof $ == "object" &&
            $ !== null &&
            typeof $.then == "function" &&
            $.then(vt, P);
      } catch (ht) {
        P(ht);
      } finally {
        H.T = N;
      }
    }),
    (lt.unstable_useCacheRefresh = function () {
      return H.H.useCacheRefresh();
    }),
    (lt.use = function (T) {
      return H.H.use(T);
    }),
    (lt.useActionState = function (T, N, nt) {
      return H.H.useActionState(T, N, nt);
    }),
    (lt.useCallback = function (T, N) {
      return H.H.useCallback(T, N);
    }),
    (lt.useContext = function (T) {
      return H.H.useContext(T);
    }),
    (lt.useDebugValue = function () {}),
    (lt.useDeferredValue = function (T, N) {
      return H.H.useDeferredValue(T, N);
    }),
    (lt.useEffect = function (T, N) {
      return H.H.useEffect(T, N);
    }),
    (lt.useId = function () {
      return H.H.useId();
    }),
    (lt.useImperativeHandle = function (T, N, nt) {
      return H.H.useImperativeHandle(T, N, nt);
    }),
    (lt.useInsertionEffect = function (T, N) {
      return H.H.useInsertionEffect(T, N);
    }),
    (lt.useLayoutEffect = function (T, N) {
      return H.H.useLayoutEffect(T, N);
    }),
    (lt.useMemo = function (T, N) {
      return H.H.useMemo(T, N);
    }),
    (lt.useOptimistic = function (T, N) {
      return H.H.useOptimistic(T, N);
    }),
    (lt.useReducer = function (T, N, nt) {
      return H.H.useReducer(T, N, nt);
    }),
    (lt.useRef = function (T) {
      return H.H.useRef(T);
    }),
    (lt.useState = function (T) {
      return H.H.useState(T);
    }),
    (lt.useSyncExternalStore = function (T, N, nt) {
      return H.H.useSyncExternalStore(T, N, nt);
    }),
    (lt.useTransition = function () {
      return H.H.useTransition();
    }),
    (lt.version = "19.0.0"),
    lt
  );
}
var Sm;
function Wr() {
  return Sm || ((Sm = 1), (yr.exports = Yv())), yr.exports;
}
var G = Wr(),
  gr = { exports: {} },
  ul = {},
  vr = { exports: {} },
  Sr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bm;
function Gv() {
  return (
    bm ||
      ((bm = 1),
      (function (a) {
        function l(q, J) {
          var P = q.length;
          q.push(J);
          t: for (; 0 < P; ) {
            var vt = (P - 1) >>> 1,
              T = q[vt];
            if (0 < c(T, J)) (q[vt] = J), (q[P] = T), (P = vt);
            else break t;
          }
        }
        function u(q) {
          return q.length === 0 ? null : q[0];
        }
        function o(q) {
          if (q.length === 0) return null;
          var J = q[0],
            P = q.pop();
          if (P !== J) {
            q[0] = P;
            t: for (var vt = 0, T = q.length, N = T >>> 1; vt < N; ) {
              var nt = 2 * (vt + 1) - 1,
                $ = q[nt],
                Z = nt + 1,
                ht = q[Z];
              if (0 > c($, P))
                Z < T && 0 > c(ht, $)
                  ? ((q[vt] = ht), (q[Z] = P), (vt = Z))
                  : ((q[vt] = $), (q[nt] = P), (vt = nt));
              else if (Z < T && 0 > c(ht, P))
                (q[vt] = ht), (q[Z] = P), (vt = Z);
              else break t;
            }
          }
          return J;
        }
        function c(q, J) {
          var P = q.sortIndex - J.sortIndex;
          return P !== 0 ? P : q.id - J.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          a.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            y = h.now();
          a.unstable_now = function () {
            return h.now() - y;
          };
        }
        var m = [],
          p = [],
          v = 1,
          b = null,
          A = 3,
          O = !1,
          _ = !1,
          B = !1,
          w = typeof setTimeout == "function" ? setTimeout : null,
          j = typeof clearTimeout == "function" ? clearTimeout : null,
          Y = typeof setImmediate < "u" ? setImmediate : null;
        function X(q) {
          for (var J = u(p); J !== null; ) {
            if (J.callback === null) o(p);
            else if (J.startTime <= q)
              o(p), (J.sortIndex = J.expirationTime), l(m, J);
            else break;
            J = u(p);
          }
        }
        function st(q) {
          if (((B = !1), X(q), !_))
            if (u(m) !== null) (_ = !0), be();
            else {
              var J = u(p);
              J !== null && ne(st, J.startTime - q);
            }
        }
        var H = !1,
          F = -1,
          mt = 5,
          I = -1;
        function Q() {
          return !(a.unstable_now() - I < mt);
        }
        function it() {
          if (H) {
            var q = a.unstable_now();
            I = q;
            var J = !0;
            try {
              t: {
                (_ = !1), B && ((B = !1), j(F), (F = -1)), (O = !0);
                var P = A;
                try {
                  e: {
                    for (
                      X(q), b = u(m);
                      b !== null && !(b.expirationTime > q && Q());

                    ) {
                      var vt = b.callback;
                      if (typeof vt == "function") {
                        (b.callback = null), (A = b.priorityLevel);
                        var T = vt(b.expirationTime <= q);
                        if (((q = a.unstable_now()), typeof T == "function")) {
                          (b.callback = T), X(q), (J = !0);
                          break e;
                        }
                        b === u(m) && o(m), X(q);
                      } else o(m);
                      b = u(m);
                    }
                    if (b !== null) J = !0;
                    else {
                      var N = u(p);
                      N !== null && ne(st, N.startTime - q), (J = !1);
                    }
                  }
                  break t;
                } finally {
                  (b = null), (A = P), (O = !1);
                }
                J = void 0;
              }
            } finally {
              J ? qt() : (H = !1);
            }
          }
        }
        var qt;
        if (typeof Y == "function")
          qt = function () {
            Y(it);
          };
        else if (typeof MessageChannel < "u") {
          var ve = new MessageChannel(),
            Se = ve.port2;
          (ve.port1.onmessage = it),
            (qt = function () {
              Se.postMessage(null);
            });
        } else
          qt = function () {
            w(it, 0);
          };
        function be() {
          H || ((H = !0), qt());
        }
        function ne(q, J) {
          F = w(function () {
            q(a.unstable_now());
          }, J);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (q) {
            q.callback = null;
          }),
          (a.unstable_continueExecution = function () {
            _ || O || ((_ = !0), be());
          }),
          (a.unstable_forceFrameRate = function (q) {
            0 > q || 125 < q
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (mt = 0 < q ? Math.floor(1e3 / q) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return A;
          }),
          (a.unstable_getFirstCallbackNode = function () {
            return u(m);
          }),
          (a.unstable_next = function (q) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = A;
            }
            var P = A;
            A = J;
            try {
              return q();
            } finally {
              A = P;
            }
          }),
          (a.unstable_pauseExecution = function () {}),
          (a.unstable_requestPaint = function () {}),
          (a.unstable_runWithPriority = function (q, J) {
            switch (q) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                q = 3;
            }
            var P = A;
            A = q;
            try {
              return J();
            } finally {
              A = P;
            }
          }),
          (a.unstable_scheduleCallback = function (q, J, P) {
            var vt = a.unstable_now();
            switch (
              (typeof P == "object" && P !== null
                ? ((P = P.delay),
                  (P = typeof P == "number" && 0 < P ? vt + P : vt))
                : (P = vt),
              q)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = P + T),
              (q = {
                id: v++,
                callback: J,
                priorityLevel: q,
                startTime: P,
                expirationTime: T,
                sortIndex: -1,
              }),
              P > vt
                ? ((q.sortIndex = P),
                  l(p, q),
                  u(m) === null &&
                    q === u(p) &&
                    (B ? (j(F), (F = -1)) : (B = !0), ne(st, P - vt)))
                : ((q.sortIndex = T), l(m, q), _ || O || ((_ = !0), be())),
              q
            );
          }),
          (a.unstable_shouldYield = Q),
          (a.unstable_wrapCallback = function (q) {
            var J = A;
            return function () {
              var P = A;
              A = J;
              try {
                return q.apply(this, arguments);
              } finally {
                A = P;
              }
            };
          });
      })(Sr)),
    Sr
  );
}
var Tm;
function Xv() {
  return Tm || ((Tm = 1), (vr.exports = Gv())), vr.exports;
}
var br = { exports: {} },
  It = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Am;
function Qv() {
  if (Am) return It;
  Am = 1;
  var a = Wr();
  function l(m) {
    var p = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        p += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var o = {
      d: {
        f: u,
        r: function () {
          throw Error(l(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(m, p, v) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: m,
      containerInfo: p,
      implementation: v,
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(m, p) {
    if (m === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (It.createPortal = function (m, p) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(l(299));
      return d(m, p, null, v);
    }),
    (It.flushSync = function (m) {
      var p = h.T,
        v = o.p;
      try {
        if (((h.T = null), (o.p = 2), m)) return m();
      } finally {
        (h.T = p), (o.p = v), o.d.f();
      }
    }),
    (It.preconnect = function (m, p) {
      typeof m == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        o.d.C(m, p));
    }),
    (It.prefetchDNS = function (m) {
      typeof m == "string" && o.d.D(m);
    }),
    (It.preinit = function (m, p) {
      if (typeof m == "string" && p && typeof p.as == "string") {
        var v = p.as,
          b = y(v, p.crossOrigin),
          A = typeof p.integrity == "string" ? p.integrity : void 0,
          O = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        v === "style"
          ? o.d.S(m, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: b,
              integrity: A,
              fetchPriority: O,
            })
          : v === "script" &&
            o.d.X(m, {
              crossOrigin: b,
              integrity: A,
              fetchPriority: O,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (It.preinitModule = function (m, p) {
      if (typeof m == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var v = y(p.as, p.crossOrigin);
            o.d.M(m, {
              crossOrigin: v,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && o.d.M(m);
    }),
    (It.preload = function (m, p) {
      if (
        typeof m == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var v = p.as,
          b = y(v, p.crossOrigin);
        o.d.L(m, v, {
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (It.preloadModule = function (m, p) {
      if (typeof m == "string")
        if (p) {
          var v = y(p.as, p.crossOrigin);
          o.d.m(m, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else o.d.m(m);
    }),
    (It.requestFormReset = function (m) {
      o.d.r(m);
    }),
    (It.unstable_batchedUpdates = function (m, p) {
      return m(p);
    }),
    (It.useFormState = function (m, p, v) {
      return h.H.useFormState(m, p, v);
    }),
    (It.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (It.version = "19.0.0"),
    It
  );
}
var xm;
function Zv() {
  if (xm) return br.exports;
  xm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), (br.exports = Qv()), br.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Em;
function Kv() {
  if (Em) return ul;
  Em = 1;
  var a = Xv(),
    l = Wr(),
    u = Zv();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  var d = Symbol.for("react.element"),
    h = Symbol.for("react.transitional.element"),
    y = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    p = Symbol.for("react.strict_mode"),
    v = Symbol.for("react.profiler"),
    b = Symbol.for("react.provider"),
    A = Symbol.for("react.consumer"),
    O = Symbol.for("react.context"),
    _ = Symbol.for("react.forward_ref"),
    B = Symbol.for("react.suspense"),
    w = Symbol.for("react.suspense_list"),
    j = Symbol.for("react.memo"),
    Y = Symbol.for("react.lazy"),
    X = Symbol.for("react.offscreen"),
    st = Symbol.for("react.memo_cache_sentinel"),
    H = Symbol.iterator;
  function F(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (H && t[H]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var mt = Symbol.for("react.client.reference");
  function I(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === mt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case m:
        return "Fragment";
      case y:
        return "Portal";
      case v:
        return "Profiler";
      case p:
        return "StrictMode";
      case B:
        return "Suspense";
      case w:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case O:
          return (t.displayName || "Context") + ".Provider";
        case A:
          return (t._context.displayName || "Context") + ".Consumer";
        case _:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case j:
          return (
            (e = t.displayName || null), e !== null ? e : I(t.type) || "Memo"
          );
        case Y:
          (e = t._payload), (t = t._init);
          try {
            return I(t(e));
          } catch {}
      }
    return null;
  }
  var Q = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    it = Object.assign,
    qt,
    ve;
  function Se(t) {
    if (qt === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (qt = (e && e[1]) || ""),
          (ve =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      qt +
      t +
      ve
    );
  }
  var be = !1;
  function ne(t, e) {
    if (!t || be) return "";
    be = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var U = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(U.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(U, []);
                } catch (C) {
                  var R = C;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (C) {
                  R = C;
                }
                t.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                R = C;
              }
              (U = t()) &&
                typeof U.catch == "function" &&
                U.catch(function () {});
            }
          } catch (C) {
            if (C && R && typeof C.stack == "string") return [C.stack, R.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = i.DetermineComponentFrameRoot(),
        f = r[0],
        g = r[1];
      if (f && g) {
        var S = f.split(`
`),
          E = g.split(`
`);
        for (
          s = i = 0;
          i < S.length && !S[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; s < E.length && !E[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (i === S.length || s === E.length)
          for (
            i = S.length - 1, s = E.length - 1;
            1 <= i && 0 <= s && S[i] !== E[s];

          )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (S[i] !== E[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || S[i] !== E[s])) {
                  var V =
                    `
` + S[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      V.includes("<anonymous>") &&
                      (V = V.replace("<anonymous>", t.displayName)),
                    V
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      (be = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? Se(n) : "";
  }
  function q(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Se(t.type);
      case 16:
        return Se("Lazy");
      case 13:
        return Se("Suspense");
      case 19:
        return Se("SuspenseList");
      case 0:
      case 15:
        return (t = ne(t.type, !1)), t;
      case 11:
        return (t = ne(t.type.render, !1)), t;
      case 1:
        return (t = ne(t.type, !0)), t;
      default:
        return "";
    }
  }
  function J(t) {
    try {
      var e = "";
      do (e += q(t)), (t = t.return);
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function P(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function vt(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function T(t) {
    if (P(t) !== t) throw Error(o(188));
  }
  function N(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = P(t)), e === null)) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (((i = s.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === n) return T(s), t;
          if (r === i) return T(s), e;
          r = r.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== i.return) (n = s), (i = r);
      else {
        for (var f = !1, g = s.child; g; ) {
          if (g === n) {
            (f = !0), (n = s), (i = r);
            break;
          }
          if (g === i) {
            (f = !0), (i = s), (n = r);
            break;
          }
          g = g.sibling;
        }
        if (!f) {
          for (g = r.child; g; ) {
            if (g === n) {
              (f = !0), (n = r), (i = s);
              break;
            }
            if (g === i) {
              (f = !0), (i = r), (n = s);
              break;
            }
            g = g.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (n.alternate !== i) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? t : e;
  }
  function nt(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = nt(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var $ = Array.isArray,
    Z = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ht = { pending: !1, data: null, method: null, action: null },
    ut = [],
    ie = -1;
  function St(t) {
    return { current: t };
  }
  function jt(t) {
    0 > ie || ((t.current = ut[ie]), (ut[ie] = null), ie--);
  }
  function Mt(t, e) {
    ie++, (ut[ie] = t.current), (t.current = e);
  }
  var qe = St(null),
    ra = St(null),
    yn = St(null),
    Ml = St(null);
  function Rl(t, e) {
    switch ((Mt(yn, e), Mt(ra, t), Mt(qe, null), (t = e.nodeType), t)) {
      case 9:
      case 11:
        e = (e = e.documentElement) && (e = e.namespaceURI) ? Zd(e) : 0;
        break;
      default:
        if (
          ((t = t === 8 ? e.parentNode : e),
          (e = t.tagName),
          (t = t.namespaceURI))
        )
          (t = Zd(t)), (e = Kd(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    jt(qe), Mt(qe, e);
  }
  function gi() {
    jt(qe), jt(ra), jt(yn);
  }
  function lu(t) {
    t.memoizedState !== null && Mt(Ml, t);
    var e = qe.current,
      n = Kd(e, t.type);
    e !== n && (Mt(ra, t), Mt(qe, n));
  }
  function Ol(t) {
    ra.current === t && (jt(qe), jt(ra)),
      Ml.current === t && (jt(Ml), (el._currentValue = ht));
  }
  var su = Object.prototype.hasOwnProperty,
    uu = a.unstable_scheduleCallback,
    ou = a.unstable_cancelCallback,
    g0 = a.unstable_shouldYield,
    v0 = a.unstable_requestPaint,
    Ye = a.unstable_now,
    S0 = a.unstable_getCurrentPriorityLevel,
    Uc = a.unstable_ImmediatePriority,
    Bc = a.unstable_UserBlockingPriority,
    Cl = a.unstable_NormalPriority,
    b0 = a.unstable_LowPriority,
    Nc = a.unstable_IdlePriority,
    T0 = a.log,
    A0 = a.unstable_setDisableYieldValue,
    ca = null,
    ce = null;
  function x0(t) {
    if (ce && typeof ce.onCommitFiberRoot == "function")
      try {
        ce.onCommitFiberRoot(ca, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  function gn(t) {
    if (
      (typeof T0 == "function" && A0(t),
      ce && typeof ce.setStrictMode == "function")
    )
      try {
        ce.setStrictMode(ca, t);
      } catch {}
  }
  var fe = Math.clz32 ? Math.clz32 : M0,
    E0 = Math.log,
    D0 = Math.LN2;
  function M0(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((E0(t) / D0) | 0)) | 0;
  }
  var Vl = 128,
    zl = 4194304;
  function Qn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function _l(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var i = 0,
      s = t.suspendedLanes,
      r = t.pingedLanes,
      f = t.warmLanes;
    t = t.finishedLanes !== 0;
    var g = n & 134217727;
    return (
      g !== 0
        ? ((n = g & ~s),
          n !== 0
            ? (i = Qn(n))
            : ((r &= g),
              r !== 0
                ? (i = Qn(r))
                : t || ((f = g & ~f), f !== 0 && (i = Qn(f)))))
        : ((g = n & ~s),
          g !== 0
            ? (i = Qn(g))
            : r !== 0
            ? (i = Qn(r))
            : t || ((f = n & ~f), f !== 0 && (i = Qn(f)))),
      i === 0
        ? 0
        : e !== 0 &&
          e !== i &&
          !(e & s) &&
          ((s = i & -i),
          (f = e & -e),
          s >= f || (s === 32 && (f & 4194176) !== 0))
        ? e
        : i
    );
  }
  function fa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function R0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
        return e + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function jc() {
    var t = Vl;
    return (Vl <<= 1), !(Vl & 4194176) && (Vl = 128), t;
  }
  function Hc() {
    var t = zl;
    return (zl <<= 1), !(zl & 62914560) && (zl = 4194304), t;
  }
  function ru(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function ha(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function O0(t, e, n, i, s, r) {
    var f = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var g = t.entanglements,
      S = t.expirationTimes,
      E = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var V = 31 - fe(n),
        U = 1 << V;
      (g[V] = 0), (S[V] = -1);
      var R = E[V];
      if (R !== null)
        for (E[V] = null, V = 0; V < R.length; V++) {
          var C = R[V];
          C !== null && (C.lane &= -536870913);
        }
      n &= ~U;
    }
    i !== 0 && Lc(t, i, 0),
      r !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(f & ~e));
  }
  function Lc(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var i = 31 - fe(e);
    (t.entangledLanes |= e),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (n & 4194218));
  }
  function wc(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var i = 31 - fe(n),
        s = 1 << i;
      (s & e) | (t[i] & e) && (t[i] |= e), (n &= ~s);
    }
  }
  function qc(t) {
    return (
      (t &= -t), 2 < t ? (8 < t ? (t & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  function Yc() {
    var t = Z.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : cm(t.type));
  }
  function C0(t, e) {
    var n = Z.p;
    try {
      return (Z.p = t), e();
    } finally {
      Z.p = n;
    }
  }
  var vn = Math.random().toString(36).slice(2),
    Wt = "__reactFiber$" + vn,
    ue = "__reactProps$" + vn,
    vi = "__reactContainer$" + vn,
    cu = "__reactEvents$" + vn,
    V0 = "__reactListeners$" + vn,
    z0 = "__reactHandles$" + vn,
    Gc = "__reactResources$" + vn,
    da = "__reactMarker$" + vn;
  function fu(t) {
    delete t[Wt], delete t[ue], delete t[cu], delete t[V0], delete t[z0];
  }
  function Zn(t) {
    var e = t[Wt];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[vi] || n[Wt])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Pd(t); t !== null; ) {
            if ((n = t[Wt])) return n;
            t = Pd(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function Si(t) {
    if ((t = t[Wt] || t[vi])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function ma(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function bi(t) {
    var e = t[Gc];
    return (
      e ||
        (e = t[Gc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Xt(t) {
    t[da] = !0;
  }
  var Xc = new Set(),
    Qc = {};
  function Kn(t, e) {
    Ti(t, e), Ti(t + "Capture", e);
  }
  function Ti(t, e) {
    for (Qc[t] = e, t = 0; t < e.length; t++) Xc.add(e[t]);
  }
  var Pe = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    _0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Zc = {},
    Kc = {};
  function U0(t) {
    return su.call(Kc, t)
      ? !0
      : su.call(Zc, t)
      ? !1
      : _0.test(t)
      ? (Kc[t] = !0)
      : ((Zc[t] = !0), !1);
  }
  function Ul(t, e, n) {
    if (U0(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Bl(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Fe(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + i);
    }
  }
  function Te(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function kc(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function B0(t) {
    var e = kc(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      i = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var s = n.get,
        r = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (f) {
            (i = "" + f), r.call(this, f);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (f) {
            i = "" + f;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Nl(t) {
    t._valueTracker || (t._valueTracker = B0(t));
  }
  function Jc(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      i = "";
    return (
      t && (i = kc(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function jl(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var N0 = /[\n"\\]/g;
  function Ae(t) {
    return t.replace(N0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function hu(t, e, n, i, s, r, f, g) {
    (t.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Te(e))
          : t.value !== "" + Te(e) && (t.value = "" + Te(e))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      e != null
        ? du(t, f, Te(e))
        : n != null
        ? du(t, f, Te(n))
        : i != null && t.removeAttribute("value"),
      s == null && r != null && (t.defaultChecked = !!r),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (t.name = "" + Te(g))
        : t.removeAttribute("name");
  }
  function Pc(t, e, n, i, s, r, f, g) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (t.type = r),
      e != null || n != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || e != null)) return;
      (n = n != null ? "" + Te(n) : ""),
        (e = e != null ? "" + Te(e) : n),
        g || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = g ? t.checked : !!i),
      (t.defaultChecked = !!i),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f);
  }
  function du(t, e, n) {
    (e === "number" && jl(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Ai(t, e, n, i) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        (s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && i && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Te(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          (t[s].selected = !0), i && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Fc(t, e, n) {
    if (
      e != null &&
      ((e = "" + Te(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Te(n) : "";
  }
  function Wc(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(o(92));
        if ($(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), (e = n);
    }
    (n = Te(e)),
      (t.defaultValue = n),
      (i = t.textContent),
      i === n && i !== "" && i !== null && (t.value = i);
  }
  function xi(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var j0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function $c(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : i
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || j0.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function Ic(t, e, n) {
    if (e != null && typeof e != "object") throw Error(o(62));
    if (((t = t.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (e != null && e.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
            ? (t.cssFloat = "")
            : (t[i] = ""));
      for (var s in e)
        (i = e[s]), e.hasOwnProperty(s) && n[s] !== i && $c(t, s, i);
    } else for (var r in e) e.hasOwnProperty(r) && $c(t, r, e[r]);
  }
  function mu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var H0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    L0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hl(t) {
    return L0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var pu = null;
  function yu(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ei = null,
    Di = null;
  function tf(t) {
    var e = Si(t);
    if (e && (t = e.stateNode)) {
      var n = t[ue] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (hu(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Ae("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var s = i[ue] || null;
                if (!s) throw Error(o(90));
                hu(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (i = n[e]), i.form === t.form && Jc(i);
          }
          break t;
        case "textarea":
          Fc(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && Ai(t, !!n.multiple, e, !1);
      }
    }
  }
  var gu = !1;
  function ef(t, e, n) {
    if (gu) return t(e, n);
    gu = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (
        ((gu = !1),
        (Ei !== null || Di !== null) &&
          (bs(), Ei && ((e = Ei), (t = Di), (Di = Ei = null), tf(e), t)))
      )
        for (e = 0; e < t.length; e++) tf(t[e]);
    }
  }
  function pa(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[ue] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) ||
          ((t = t.type),
          (i = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !i);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(o(231, e, typeof n));
    return n;
  }
  var vu = !1;
  if (Pe)
    try {
      var ya = {};
      Object.defineProperty(ya, "passive", {
        get: function () {
          vu = !0;
        },
      }),
        window.addEventListener("test", ya, ya),
        window.removeEventListener("test", ya, ya);
    } catch {
      vu = !1;
    }
  var Sn = null,
    Su = null,
    Ll = null;
  function nf() {
    if (Ll) return Ll;
    var t,
      e = Su,
      n = e.length,
      i,
      s = "value" in Sn ? Sn.value : Sn.textContent,
      r = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var f = n - t;
    for (i = 1; i <= f && e[n - i] === s[r - i]; i++);
    return (Ll = s.slice(t, 1 < i ? 1 - i : void 0));
  }
  function wl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function ql() {
    return !0;
  }
  function af() {
    return !1;
  }
  function oe(t) {
    function e(n, i, s, r, f) {
      (this._reactName = n),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = r),
        (this.target = f),
        (this.currentTarget = null);
      for (var g in t)
        t.hasOwnProperty(g) && ((n = t[g]), (this[g] = n ? n(r) : r[g]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
        )
          ? ql
          : af),
        (this.isPropagationStopped = af),
        this
      );
    }
    return (
      it(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = ql));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = ql));
        },
        persist: function () {},
        isPersistent: ql,
      }),
      e
    );
  }
  var kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Yl = oe(kn),
    ga = it({}, kn, { view: 0, detail: 0 }),
    w0 = oe(ga),
    bu,
    Tu,
    va,
    Gl = it({}, ga, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: xu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== va &&
              (va && t.type === "mousemove"
                ? ((bu = t.screenX - va.screenX), (Tu = t.screenY - va.screenY))
                : (Tu = bu = 0),
              (va = t)),
            bu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Tu;
      },
    }),
    lf = oe(Gl),
    q0 = it({}, Gl, { dataTransfer: 0 }),
    Y0 = oe(q0),
    G0 = it({}, ga, { relatedTarget: 0 }),
    Au = oe(G0),
    X0 = it({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Q0 = oe(X0),
    Z0 = it({}, kn, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    K0 = oe(Z0),
    k0 = it({}, kn, { data: 0 }),
    sf = oe(k0),
    J0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    P0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    F0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function W0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = F0[t])
      ? !!e[t]
      : !1;
  }
  function xu() {
    return W0;
  }
  var $0 = it({}, ga, {
      key: function (t) {
        if (t.key) {
          var e = J0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = wl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? P0[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: xu,
      charCode: function (t) {
        return t.type === "keypress" ? wl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? wl(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    I0 = oe($0),
    tg = it({}, Gl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    uf = oe(tg),
    eg = it({}, ga, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: xu,
    }),
    ng = oe(eg),
    ig = it({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ag = oe(ig),
    lg = it({}, Gl, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    sg = oe(lg),
    ug = it({}, kn, { newState: 0, oldState: 0 }),
    og = oe(ug),
    rg = [9, 13, 27, 32],
    Eu = Pe && "CompositionEvent" in window,
    Sa = null;
  Pe && "documentMode" in document && (Sa = document.documentMode);
  var cg = Pe && "TextEvent" in window && !Sa,
    of = Pe && (!Eu || (Sa && 8 < Sa && 11 >= Sa)),
    rf = " ",
    cf = !1;
  function ff(t, e) {
    switch (t) {
      case "keyup":
        return rg.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function hf(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Mi = !1;
  function fg(t, e) {
    switch (t) {
      case "compositionend":
        return hf(e);
      case "keypress":
        return e.which !== 32 ? null : ((cf = !0), rf);
      case "textInput":
        return (t = e.data), t === rf && cf ? null : t;
      default:
        return null;
    }
  }
  function hg(t, e) {
    if (Mi)
      return t === "compositionend" || (!Eu && ff(t, e))
        ? ((t = nf()), (Ll = Su = Sn = null), (Mi = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return of && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var dg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function df(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!dg[t.type] : e === "textarea";
  }
  function mf(t, e, n, i) {
    Ei ? (Di ? Di.push(i) : (Di = [i])) : (Ei = i),
      (e = Ds(e, "onChange")),
      0 < e.length &&
        ((n = new Yl("onChange", "change", null, n, i)),
        t.push({ event: n, listeners: e }));
  }
  var ba = null,
    Ta = null;
  function mg(t) {
    qd(t, 0);
  }
  function Xl(t) {
    var e = ma(t);
    if (Jc(e)) return t;
  }
  function pf(t, e) {
    if (t === "change") return e;
  }
  var yf = !1;
  if (Pe) {
    var Du;
    if (Pe) {
      var Mu = "oninput" in document;
      if (!Mu) {
        var gf = document.createElement("div");
        gf.setAttribute("oninput", "return;"),
          (Mu = typeof gf.oninput == "function");
      }
      Du = Mu;
    } else Du = !1;
    yf = Du && (!document.documentMode || 9 < document.documentMode);
  }
  function vf() {
    ba && (ba.detachEvent("onpropertychange", Sf), (Ta = ba = null));
  }
  function Sf(t) {
    if (t.propertyName === "value" && Xl(Ta)) {
      var e = [];
      mf(e, Ta, t, yu(t)), ef(mg, e);
    }
  }
  function pg(t, e, n) {
    t === "focusin"
      ? (vf(), (ba = e), (Ta = n), ba.attachEvent("onpropertychange", Sf))
      : t === "focusout" && vf();
  }
  function yg(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Xl(Ta);
  }
  function gg(t, e) {
    if (t === "click") return Xl(e);
  }
  function vg(t, e) {
    if (t === "input" || t === "change") return Xl(e);
  }
  function Sg(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var he = typeof Object.is == "function" ? Object.is : Sg;
  function Aa(t, e) {
    if (he(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!su.call(e, s) || !he(t[s], e[s])) return !1;
    }
    return !0;
  }
  function bf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Tf(t, e) {
    var n = bf(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = t + n.textContent.length), t <= e && i >= e))
          return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = bf(n);
    }
  }
  function Af(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Af(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function xf(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = jl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = jl(t.document);
    }
    return e;
  }
  function Ru(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  function bg(t, e) {
    var n = xf(e);
    e = t.focusedElem;
    var i = t.selectionRange;
    if (
      n !== e &&
      e &&
      e.ownerDocument &&
      Af(e.ownerDocument.documentElement, e)
    ) {
      if (i !== null && Ru(e)) {
        if (
          ((t = i.start),
          (n = i.end),
          n === void 0 && (n = t),
          "selectionStart" in e)
        )
          (e.selectionStart = t),
            (e.selectionEnd = Math.min(n, e.value.length));
        else if (
          ((n = ((t = e.ownerDocument || document) && t.defaultView) || window),
          n.getSelection)
        ) {
          n = n.getSelection();
          var s = e.textContent.length,
            r = Math.min(i.start, s);
          (i = i.end === void 0 ? r : Math.min(i.end, s)),
            !n.extend && r > i && ((s = i), (i = r), (r = s)),
            (s = Tf(e, r));
          var f = Tf(e, i);
          s &&
            f &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== s.node ||
              n.anchorOffset !== s.offset ||
              n.focusNode !== f.node ||
              n.focusOffset !== f.offset) &&
            ((t = t.createRange()),
            t.setStart(s.node, s.offset),
            n.removeAllRanges(),
            r > i
              ? (n.addRange(t), n.extend(f.node, f.offset))
              : (t.setEnd(f.node, f.offset), n.addRange(t)));
        }
      }
      for (t = [], n = e; (n = n.parentNode); )
        n.nodeType === 1 &&
          t.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++)
        (n = t[e]),
          (n.element.scrollLeft = n.left),
          (n.element.scrollTop = n.top);
    }
  }
  var Tg = Pe && "documentMode" in document && 11 >= document.documentMode,
    Ri = null,
    Ou = null,
    xa = null,
    Cu = !1;
  function Ef(t, e, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Cu ||
      Ri == null ||
      Ri !== jl(i) ||
      ((i = Ri),
      "selectionStart" in i && Ru(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (xa && Aa(xa, i)) ||
        ((xa = i),
        (i = Ds(Ou, "onSelect")),
        0 < i.length &&
          ((e = new Yl("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: i }),
          (e.target = Ri))));
  }
  function Jn(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Oi = {
      animationend: Jn("Animation", "AnimationEnd"),
      animationiteration: Jn("Animation", "AnimationIteration"),
      animationstart: Jn("Animation", "AnimationStart"),
      transitionrun: Jn("Transition", "TransitionRun"),
      transitionstart: Jn("Transition", "TransitionStart"),
      transitioncancel: Jn("Transition", "TransitionCancel"),
      transitionend: Jn("Transition", "TransitionEnd"),
    },
    Vu = {},
    Df = {};
  Pe &&
    ((Df = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Oi.animationend.animation,
      delete Oi.animationiteration.animation,
      delete Oi.animationstart.animation),
    "TransitionEvent" in window || delete Oi.transitionend.transition);
  function Pn(t) {
    if (Vu[t]) return Vu[t];
    if (!Oi[t]) return t;
    var e = Oi[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Df) return (Vu[t] = e[n]);
    return t;
  }
  var Mf = Pn("animationend"),
    Rf = Pn("animationiteration"),
    Of = Pn("animationstart"),
    Ag = Pn("transitionrun"),
    xg = Pn("transitionstart"),
    Eg = Pn("transitioncancel"),
    Cf = Pn("transitionend"),
    Vf = new Map(),
    zf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function Ne(t, e) {
    Vf.set(t, e), Kn(e, [t]);
  }
  var xe = [],
    Ci = 0,
    zu = 0;
  function Ql() {
    for (var t = Ci, e = (zu = Ci = 0); e < t; ) {
      var n = xe[e];
      xe[e++] = null;
      var i = xe[e];
      xe[e++] = null;
      var s = xe[e];
      xe[e++] = null;
      var r = xe[e];
      if (((xe[e++] = null), i !== null && s !== null)) {
        var f = i.pending;
        f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)),
          (i.pending = s);
      }
      r !== 0 && _f(n, s, r);
    }
  }
  function Zl(t, e, n, i) {
    (xe[Ci++] = t),
      (xe[Ci++] = e),
      (xe[Ci++] = n),
      (xe[Ci++] = i),
      (zu |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i);
  }
  function _u(t, e, n, i) {
    return Zl(t, e, n, i), Kl(t);
  }
  function bn(t, e) {
    return Zl(t, null, null, e), Kl(t);
  }
  function _f(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var s = !1, r = t.return; r !== null; )
      (r.childLanes |= n),
        (i = r.alternate),
        i !== null && (i.childLanes |= n),
        r.tag === 22 &&
          ((t = r.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = r),
        (r = r.return);
    s &&
      e !== null &&
      t.tag === 3 &&
      ((r = t.stateNode),
      (s = 31 - fe(n)),
      (r = r.hiddenUpdates),
      (t = r[s]),
      t === null ? (r[s] = [e]) : t.push(e),
      (e.lane = n | 536870912));
  }
  function Kl(t) {
    if (50 < Ja) throw ((Ja = 0), (wo = null), Error(o(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Vi = {},
    Uf = new WeakMap();
  function Ee(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Uf.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: J(e) }), Uf.set(t, e), e);
    }
    return { value: t, source: e, stack: J(e) };
  }
  var zi = [],
    _i = 0,
    kl = null,
    Jl = 0,
    De = [],
    Me = 0,
    Fn = null,
    We = 1,
    $e = "";
  function Wn(t, e) {
    (zi[_i++] = Jl), (zi[_i++] = kl), (kl = t), (Jl = e);
  }
  function Bf(t, e, n) {
    (De[Me++] = We), (De[Me++] = $e), (De[Me++] = Fn), (Fn = t);
    var i = We;
    t = $e;
    var s = 32 - fe(i) - 1;
    (i &= ~(1 << s)), (n += 1);
    var r = 32 - fe(e) + s;
    if (30 < r) {
      var f = s - (s % 5);
      (r = (i & ((1 << f) - 1)).toString(32)),
        (i >>= f),
        (s -= f),
        (We = (1 << (32 - fe(e) + s)) | (n << s) | i),
        ($e = r + t);
    } else (We = (1 << r) | (n << s) | i), ($e = t);
  }
  function Uu(t) {
    t.return !== null && (Wn(t, 1), Bf(t, 1, 0));
  }
  function Bu(t) {
    for (; t === kl; )
      (kl = zi[--_i]), (zi[_i] = null), (Jl = zi[--_i]), (zi[_i] = null);
    for (; t === Fn; )
      (Fn = De[--Me]),
        (De[Me] = null),
        ($e = De[--Me]),
        (De[Me] = null),
        (We = De[--Me]),
        (De[Me] = null);
  }
  var ae = null,
    kt = null,
    pt = !1,
    je = null,
    Ge = !1,
    Nu = Error(o(519));
  function $n(t) {
    var e = Error(o(418, ""));
    throw (Ma(Ee(e, t)), Nu);
  }
  function Nf(t) {
    var e = t.stateNode,
      n = t.type,
      i = t.memoizedProps;
    switch (((e[Wt] = t), (e[ue] = i), n)) {
      case "dialog":
        ft("cancel", e), ft("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ft("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Fa.length; n++) ft(Fa[n], e);
        break;
      case "source":
        ft("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ft("error", e), ft("load", e);
        break;
      case "details":
        ft("toggle", e);
        break;
      case "input":
        ft("invalid", e),
          Pc(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ),
          Nl(e);
        break;
      case "select":
        ft("invalid", e);
        break;
      case "textarea":
        ft("invalid", e), Wc(e, i.value, i.defaultValue, i.children), Nl(e);
    }
    (n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      Qd(e.textContent, n)
        ? (i.popover != null && (ft("beforetoggle", e), ft("toggle", e)),
          i.onScroll != null && ft("scroll", e),
          i.onScrollEnd != null && ft("scrollend", e),
          i.onClick != null && (e.onclick = Ms),
          (e = !0))
        : (e = !1),
      e || $n(t);
  }
  function jf(t) {
    for (ae = t.return; ae; )
      switch (ae.tag) {
        case 3:
        case 27:
          Ge = !0;
          return;
        case 5:
        case 13:
          Ge = !1;
          return;
        default:
          ae = ae.return;
      }
  }
  function Ea(t) {
    if (t !== ae) return !1;
    if (!pt) return jf(t), (pt = !0), !1;
    var e = !1,
      n;
    if (
      ((n = t.tag !== 3 && t.tag !== 27) &&
        ((n = t.tag === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || nr(t.type, t.memoizedProps))),
        (n = !n)),
      n && (e = !0),
      e && kt && $n(t),
      jf(t),
      t.tag === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                kt = Le(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        kt = null;
      }
    } else kt = ae ? Le(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Da() {
    (kt = ae = null), (pt = !1);
  }
  function Ma(t) {
    je === null ? (je = [t]) : je.push(t);
  }
  var Ra = Error(o(460)),
    Hf = Error(o(474)),
    ju = { then: function () {} };
  function Lf(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Pl() {}
  function wf(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(Pl, Pl), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), t === Ra ? Error(o(483)) : t);
      default:
        if (typeof e.status == "string") e.then(Pl, Pl);
        else {
          if (((t = xt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(o(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "fulfilled"), (s.value = i);
                }
              },
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "rejected"), (s.reason = i);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), t === Ra ? Error(o(483)) : t);
        }
        throw ((Oa = e), Ra);
    }
  }
  var Oa = null;
  function qf() {
    if (Oa === null) throw Error(o(459));
    var t = Oa;
    return (Oa = null), t;
  }
  var Ui = null,
    Ca = 0;
  function Fl(t) {
    var e = Ca;
    return (Ca += 1), Ui === null && (Ui = []), wf(Ui, t, e);
  }
  function Va(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function Wl(t, e) {
    throw e.$$typeof === d
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          o(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Yf(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Gf(t) {
    function e(D, x) {
      if (t) {
        var M = D.deletions;
        M === null ? ((D.deletions = [x]), (D.flags |= 16)) : M.push(x);
      }
    }
    function n(D, x) {
      if (!t) return null;
      for (; x !== null; ) e(D, x), (x = x.sibling);
      return null;
    }
    function i(D) {
      for (var x = new Map(); D !== null; )
        D.key !== null ? x.set(D.key, D) : x.set(D.index, D), (D = D.sibling);
      return x;
    }
    function s(D, x) {
      return (D = _n(D, x)), (D.index = 0), (D.sibling = null), D;
    }
    function r(D, x, M) {
      return (
        (D.index = M),
        t
          ? ((M = D.alternate),
            M !== null
              ? ((M = M.index), M < x ? ((D.flags |= 33554434), x) : M)
              : ((D.flags |= 33554434), x))
          : ((D.flags |= 1048576), x)
      );
    }
    function f(D) {
      return t && D.alternate === null && (D.flags |= 33554434), D;
    }
    function g(D, x, M, z) {
      return x === null || x.tag !== 6
        ? ((x = zo(M, D.mode, z)), (x.return = D), x)
        : ((x = s(x, M)), (x.return = D), x);
    }
    function S(D, x, M, z) {
      var K = M.type;
      return K === m
        ? V(D, x, M.props.children, z, M.key)
        : x !== null &&
          (x.elementType === K ||
            (typeof K == "object" &&
              K !== null &&
              K.$$typeof === Y &&
              Yf(K) === x.type))
        ? ((x = s(x, M.props)), Va(x, M), (x.return = D), x)
        : ((x = ps(M.type, M.key, M.props, null, D.mode, z)),
          Va(x, M),
          (x.return = D),
          x);
    }
    function E(D, x, M, z) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== M.containerInfo ||
        x.stateNode.implementation !== M.implementation
        ? ((x = _o(M, D.mode, z)), (x.return = D), x)
        : ((x = s(x, M.children || [])), (x.return = D), x);
    }
    function V(D, x, M, z, K) {
      return x === null || x.tag !== 7
        ? ((x = oi(M, D.mode, z, K)), (x.return = D), x)
        : ((x = s(x, M)), (x.return = D), x);
    }
    function U(D, x, M) {
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return (x = zo("" + x, D.mode, M)), (x.return = D), x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case h:
            return (
              (M = ps(x.type, x.key, x.props, null, D.mode, M)),
              Va(M, x),
              (M.return = D),
              M
            );
          case y:
            return (x = _o(x, D.mode, M)), (x.return = D), x;
          case Y:
            var z = x._init;
            return (x = z(x._payload)), U(D, x, M);
        }
        if ($(x) || F(x))
          return (x = oi(x, D.mode, M, null)), (x.return = D), x;
        if (typeof x.then == "function") return U(D, Fl(x), M);
        if (x.$$typeof === O) return U(D, hs(D, x), M);
        Wl(D, x);
      }
      return null;
    }
    function R(D, x, M, z) {
      var K = x !== null ? x.key : null;
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return K !== null ? null : g(D, x, "" + M, z);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case h:
            return M.key === K ? S(D, x, M, z) : null;
          case y:
            return M.key === K ? E(D, x, M, z) : null;
          case Y:
            return (K = M._init), (M = K(M._payload)), R(D, x, M, z);
        }
        if ($(M) || F(M)) return K !== null ? null : V(D, x, M, z, null);
        if (typeof M.then == "function") return R(D, x, Fl(M), z);
        if (M.$$typeof === O) return R(D, x, hs(D, M), z);
        Wl(D, M);
      }
      return null;
    }
    function C(D, x, M, z, K) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return (D = D.get(M) || null), g(x, D, "" + z, K);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case h:
            return (
              (D = D.get(z.key === null ? M : z.key) || null), S(x, D, z, K)
            );
          case y:
            return (
              (D = D.get(z.key === null ? M : z.key) || null), E(x, D, z, K)
            );
          case Y:
            var rt = z._init;
            return (z = rt(z._payload)), C(D, x, M, z, K);
        }
        if ($(z) || F(z)) return (D = D.get(M) || null), V(x, D, z, K, null);
        if (typeof z.then == "function") return C(D, x, M, Fl(z), K);
        if (z.$$typeof === O) return C(D, x, M, hs(x, z), K);
        Wl(x, z);
      }
      return null;
    }
    function k(D, x, M, z) {
      for (
        var K = null, rt = null, W = x, tt = (x = 0), Kt = null;
        W !== null && tt < M.length;
        tt++
      ) {
        W.index > tt ? ((Kt = W), (W = null)) : (Kt = W.sibling);
        var yt = R(D, W, M[tt], z);
        if (yt === null) {
          W === null && (W = Kt);
          break;
        }
        t && W && yt.alternate === null && e(D, W),
          (x = r(yt, x, tt)),
          rt === null ? (K = yt) : (rt.sibling = yt),
          (rt = yt),
          (W = Kt);
      }
      if (tt === M.length) return n(D, W), pt && Wn(D, tt), K;
      if (W === null) {
        for (; tt < M.length; tt++)
          (W = U(D, M[tt], z)),
            W !== null &&
              ((x = r(W, x, tt)),
              rt === null ? (K = W) : (rt.sibling = W),
              (rt = W));
        return pt && Wn(D, tt), K;
      }
      for (W = i(W); tt < M.length; tt++)
        (Kt = C(W, D, tt, M[tt], z)),
          Kt !== null &&
            (t &&
              Kt.alternate !== null &&
              W.delete(Kt.key === null ? tt : Kt.key),
            (x = r(Kt, x, tt)),
            rt === null ? (K = Kt) : (rt.sibling = Kt),
            (rt = Kt));
      return (
        t &&
          W.forEach(function (wn) {
            return e(D, wn);
          }),
        pt && Wn(D, tt),
        K
      );
    }
    function at(D, x, M, z) {
      if (M == null) throw Error(o(151));
      for (
        var K = null, rt = null, W = x, tt = (x = 0), Kt = null, yt = M.next();
        W !== null && !yt.done;
        tt++, yt = M.next()
      ) {
        W.index > tt ? ((Kt = W), (W = null)) : (Kt = W.sibling);
        var wn = R(D, W, yt.value, z);
        if (wn === null) {
          W === null && (W = Kt);
          break;
        }
        t && W && wn.alternate === null && e(D, W),
          (x = r(wn, x, tt)),
          rt === null ? (K = wn) : (rt.sibling = wn),
          (rt = wn),
          (W = Kt);
      }
      if (yt.done) return n(D, W), pt && Wn(D, tt), K;
      if (W === null) {
        for (; !yt.done; tt++, yt = M.next())
          (yt = U(D, yt.value, z)),
            yt !== null &&
              ((x = r(yt, x, tt)),
              rt === null ? (K = yt) : (rt.sibling = yt),
              (rt = yt));
        return pt && Wn(D, tt), K;
      }
      for (W = i(W); !yt.done; tt++, yt = M.next())
        (yt = C(W, D, tt, yt.value, z)),
          yt !== null &&
            (t &&
              yt.alternate !== null &&
              W.delete(yt.key === null ? tt : yt.key),
            (x = r(yt, x, tt)),
            rt === null ? (K = yt) : (rt.sibling = yt),
            (rt = yt));
      return (
        t &&
          W.forEach(function (Lv) {
            return e(D, Lv);
          }),
        pt && Wn(D, tt),
        K
      );
    }
    function _t(D, x, M, z) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === m &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case h:
            t: {
              for (var K = M.key; x !== null; ) {
                if (x.key === K) {
                  if (((K = M.type), K === m)) {
                    if (x.tag === 7) {
                      n(D, x.sibling),
                        (z = s(x, M.props.children)),
                        (z.return = D),
                        (D = z);
                      break t;
                    }
                  } else if (
                    x.elementType === K ||
                    (typeof K == "object" &&
                      K !== null &&
                      K.$$typeof === Y &&
                      Yf(K) === x.type)
                  ) {
                    n(D, x.sibling),
                      (z = s(x, M.props)),
                      Va(z, M),
                      (z.return = D),
                      (D = z);
                    break t;
                  }
                  n(D, x);
                  break;
                } else e(D, x);
                x = x.sibling;
              }
              M.type === m
                ? ((z = oi(M.props.children, D.mode, z, M.key)),
                  (z.return = D),
                  (D = z))
                : ((z = ps(M.type, M.key, M.props, null, D.mode, z)),
                  Va(z, M),
                  (z.return = D),
                  (D = z));
            }
            return f(D);
          case y:
            t: {
              for (K = M.key; x !== null; ) {
                if (x.key === K)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === M.containerInfo &&
                    x.stateNode.implementation === M.implementation
                  ) {
                    n(D, x.sibling),
                      (z = s(x, M.children || [])),
                      (z.return = D),
                      (D = z);
                    break t;
                  } else {
                    n(D, x);
                    break;
                  }
                else e(D, x);
                x = x.sibling;
              }
              (z = _o(M, D.mode, z)), (z.return = D), (D = z);
            }
            return f(D);
          case Y:
            return (K = M._init), (M = K(M._payload)), _t(D, x, M, z);
        }
        if ($(M)) return k(D, x, M, z);
        if (F(M)) {
          if (((K = F(M)), typeof K != "function")) throw Error(o(150));
          return (M = K.call(M)), at(D, x, M, z);
        }
        if (typeof M.then == "function") return _t(D, x, Fl(M), z);
        if (M.$$typeof === O) return _t(D, x, hs(D, M), z);
        Wl(D, M);
      }
      return (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
        ? ((M = "" + M),
          x !== null && x.tag === 6
            ? (n(D, x.sibling), (z = s(x, M)), (z.return = D), (D = z))
            : (n(D, x), (z = zo(M, D.mode, z)), (z.return = D), (D = z)),
          f(D))
        : n(D, x);
    }
    return function (D, x, M, z) {
      try {
        Ca = 0;
        var K = _t(D, x, M, z);
        return (Ui = null), K;
      } catch (W) {
        if (W === Ra) throw W;
        var rt = Ve(29, W, null, D.mode);
        return (rt.lanes = z), (rt.return = D), rt;
      } finally {
      }
    };
  }
  var In = Gf(!0),
    Xf = Gf(!1),
    Bi = St(null),
    $l = St(0);
  function Qf(t, e) {
    (t = cn), Mt($l, t), Mt(Bi, e), (cn = t | e.baseLanes);
  }
  function Hu() {
    Mt($l, cn), Mt(Bi, Bi.current);
  }
  function Lu() {
    (cn = $l.current), jt(Bi), jt($l);
  }
  var Re = St(null),
    Xe = null;
  function Tn(t) {
    var e = t.alternate;
    Mt(Yt, Yt.current & 1),
      Mt(Re, t),
      Xe === null &&
        (e === null || Bi.current !== null || e.memoizedState !== null) &&
        (Xe = t);
  }
  function Zf(t) {
    if (t.tag === 22) {
      if ((Mt(Yt, Yt.current), Mt(Re, t), Xe === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Xe = t);
      }
    } else An();
  }
  function An() {
    Mt(Yt, Yt.current), Mt(Re, Re.current);
  }
  function Ie(t) {
    jt(Re), Xe === t && (Xe = null), jt(Yt);
  }
  var Yt = St(0);
  function Il(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if (e.flags & 128) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var Dg =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    Mg = a.unstable_scheduleCallback,
    Rg = a.unstable_NormalPriority,
    Gt = {
      $$typeof: O,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function wu() {
    return { controller: new Dg(), data: new Map(), refCount: 0 };
  }
  function za(t) {
    t.refCount--,
      t.refCount === 0 &&
        Mg(Rg, function () {
          t.controller.abort();
        });
  }
  var _a = null,
    qu = 0,
    Ni = 0,
    ji = null;
  function Og(t, e) {
    if (_a === null) {
      var n = (_a = []);
      (qu = 0),
        (Ni = ko()),
        (ji = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        });
    }
    return qu++, e.then(Kf, Kf), e;
  }
  function Kf() {
    if (--qu === 0 && _a !== null) {
      ji !== null && (ji.status = "fulfilled");
      var t = _a;
      (_a = null), (Ni = 0), (ji = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Cg(t, e) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          (i.status = "fulfilled"), (i.value = e);
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        }
      ),
      i
    );
  }
  var kf = Q.S;
  Q.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      Og(t, e),
      kf !== null && kf(t, e);
  };
  var ti = St(null);
  function Yu() {
    var t = ti.current;
    return t !== null ? t : xt.pooledCache;
  }
  function ts(t, e) {
    e === null ? Mt(ti, ti.current) : Mt(ti, e.pool);
  }
  function Jf() {
    var t = Yu();
    return t === null ? null : { parent: Gt._currentValue, pool: t };
  }
  var xn = 0,
    ot = null,
    bt = null,
    Ht = null,
    es = !1,
    Hi = !1,
    ei = !1,
    ns = 0,
    Ua = 0,
    Li = null,
    Vg = 0;
  function Bt() {
    throw Error(o(321));
  }
  function Gu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!he(t[n], e[n])) return !1;
    return !0;
  }
  function Xu(t, e, n, i, s, r) {
    return (
      (xn = r),
      (ot = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (Q.H = t === null || t.memoizedState === null ? ni : En),
      (ei = !1),
      (r = n(i, s)),
      (ei = !1),
      Hi && (r = Ff(e, n, i, s)),
      Pf(t),
      r
    );
  }
  function Pf(t) {
    Q.H = Qe;
    var e = bt !== null && bt.next !== null;
    if (((xn = 0), (Ht = bt = ot = null), (es = !1), (Ua = 0), (Li = null), e))
      throw Error(o(300));
    t === null ||
      Qt ||
      ((t = t.dependencies), t !== null && fs(t) && (Qt = !0));
  }
  function Ff(t, e, n, i) {
    ot = t;
    var s = 0;
    do {
      if ((Hi && (Li = null), (Ua = 0), (Hi = !1), 25 <= s))
        throw Error(o(301));
      if (((s += 1), (Ht = bt = null), t.updateQueue != null)) {
        var r = t.updateQueue;
        (r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0);
      }
      (Q.H = ii), (r = e(n, i));
    } while (Hi);
    return r;
  }
  function zg() {
    var t = Q.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Ba(e) : e),
      (t = t.useState()[0]),
      (bt !== null ? bt.memoizedState : null) !== t && (ot.flags |= 1024),
      e
    );
  }
  function Qu() {
    var t = ns !== 0;
    return (ns = 0), t;
  }
  function Zu(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function Ku(t) {
    if (es) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      es = !1;
    }
    (xn = 0), (Ht = bt = ot = null), (Hi = !1), (Ua = ns = 0), (Li = null);
  }
  function re() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ht === null ? (ot.memoizedState = Ht = t) : (Ht = Ht.next = t), Ht;
  }
  function Lt() {
    if (bt === null) {
      var t = ot.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = bt.next;
    var e = Ht === null ? ot.memoizedState : Ht.next;
    if (e !== null) (Ht = e), (bt = t);
    else {
      if (t === null)
        throw ot.alternate === null ? Error(o(467)) : Error(o(310));
      (bt = t),
        (t = {
          memoizedState: bt.memoizedState,
          baseState: bt.baseState,
          baseQueue: bt.baseQueue,
          queue: bt.queue,
          next: null,
        }),
        Ht === null ? (ot.memoizedState = Ht = t) : (Ht = Ht.next = t);
    }
    return Ht;
  }
  var is;
  is = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Ba(t) {
    var e = Ua;
    return (
      (Ua += 1),
      Li === null && (Li = []),
      (t = wf(Li, t, e)),
      (e = ot),
      (Ht === null ? e.memoizedState : Ht.next) === null &&
        ((e = e.alternate),
        (Q.H = e === null || e.memoizedState === null ? ni : En)),
      t
    );
  }
  function as(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ba(t);
      if (t.$$typeof === O) return $t(t);
    }
    throw Error(o(438, String(t)));
  }
  function ku(t) {
    var e = null,
      n = ot.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var i = ot.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (e = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = is()), (ot.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = st;
    return e.index++, n;
  }
  function tn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ls(t) {
    var e = Lt();
    return Ju(e, bt, t);
  }
  function Ju(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = n;
    var s = t.baseQueue,
      r = i.pending;
    if (r !== null) {
      if (s !== null) {
        var f = s.next;
        (s.next = r.next), (r.next = f);
      }
      (e.baseQueue = s = r), (i.pending = null);
    }
    if (((r = t.baseState), s === null)) t.memoizedState = r;
    else {
      e = s.next;
      var g = (f = null),
        S = null,
        E = e,
        V = !1;
      do {
        var U = E.lane & -536870913;
        if (U !== E.lane ? (dt & U) === U : (xn & U) === U) {
          var R = E.revertLane;
          if (R === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: E.action,
                  hasEagerState: E.hasEagerState,
                  eagerState: E.eagerState,
                  next: null,
                }),
              U === Ni && (V = !0);
          else if ((xn & R) === R) {
            (E = E.next), R === Ni && (V = !0);
            continue;
          } else
            (U = {
              lane: 0,
              revertLane: E.revertLane,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null,
            }),
              S === null ? ((g = S = U), (f = r)) : (S = S.next = U),
              (ot.lanes |= R),
              (Un |= R);
          (U = E.action),
            ei && n(r, U),
            (r = E.hasEagerState ? E.eagerState : n(r, U));
        } else
          (R = {
            lane: U,
            revertLane: E.revertLane,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          }),
            S === null ? ((g = S = R), (f = r)) : (S = S.next = R),
            (ot.lanes |= U),
            (Un |= U);
        E = E.next;
      } while (E !== null && E !== e);
      if (
        (S === null ? (f = r) : (S.next = g),
        !he(r, t.memoizedState) && ((Qt = !0), V && ((n = ji), n !== null)))
      )
        throw n;
      (t.memoizedState = r),
        (t.baseState = f),
        (t.baseQueue = S),
        (i.lastRenderedState = r);
    }
    return s === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function Pu(t) {
    var e = Lt(),
      n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
      s = n.pending,
      r = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = (s = s.next);
      do (r = t(r, f.action)), (f = f.next);
      while (f !== s);
      he(r, e.memoizedState) || (Qt = !0),
        (e.memoizedState = r),
        e.baseQueue === null && (e.baseState = r),
        (n.lastRenderedState = r);
    }
    return [r, i];
  }
  function Wf(t, e, n) {
    var i = ot,
      s = Lt(),
      r = pt;
    if (r) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var f = !he((bt || s).memoizedState, n);
    if (
      (f && ((s.memoizedState = n), (Qt = !0)),
      (s = s.queue),
      $u(th.bind(null, i, s, t), [t]),
      s.getSnapshot !== e || f || (Ht !== null && Ht.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        wi(9, If.bind(null, i, s, n, e), { destroy: void 0 }, null),
        xt === null)
      )
        throw Error(o(349));
      r || xn & 60 || $f(i, e, n);
    }
    return n;
  }
  function $f(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = ot.updateQueue),
      e === null
        ? ((e = is()), (ot.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function If(t, e, n, i) {
    (e.value = n), (e.getSnapshot = i), eh(e) && nh(t);
  }
  function th(t, e, n) {
    return n(function () {
      eh(e) && nh(t);
    });
  }
  function eh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !he(t, n);
    } catch {
      return !0;
    }
  }
  function nh(t) {
    var e = bn(t, 2);
    e !== null && le(e, t, 2);
  }
  function Fu(t) {
    var e = re();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), ei)) {
        gn(!0);
        try {
          n();
        } finally {
          gn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function ih(t, e, n, i) {
    return (t.baseState = n), Ju(t, bt, typeof i == "function" ? i : tn);
  }
  function _g(t, e, n, i, s) {
    if (os(t)) throw Error(o(485));
    if (((t = e.action), t !== null)) {
      var r = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          r.listeners.push(f);
        },
      };
      Q.T !== null ? n(!0) : (r.isTransition = !1),
        i(r),
        (n = e.pending),
        n === null
          ? ((r.next = e.pending = r), ah(e, r))
          : ((r.next = n.next), (e.pending = n.next = r));
    }
  }
  function ah(t, e) {
    var n = e.action,
      i = e.payload,
      s = t.state;
    if (e.isTransition) {
      var r = Q.T,
        f = {};
      Q.T = f;
      try {
        var g = n(s, i),
          S = Q.S;
        S !== null && S(f, g), lh(t, e, g);
      } catch (E) {
        Wu(t, e, E);
      } finally {
        Q.T = r;
      }
    } else
      try {
        (r = n(s, i)), lh(t, e, r);
      } catch (E) {
        Wu(t, e, E);
      }
  }
  function lh(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            sh(t, e, i);
          },
          function (i) {
            return Wu(t, e, i);
          }
        )
      : sh(t, e, n);
  }
  function sh(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      uh(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), ah(t, n)));
  }
  function Wu(t, e, n) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do (e.status = "rejected"), (e.reason = n), uh(e), (e = e.next);
      while (e !== i);
    }
    t.action = null;
  }
  function uh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function oh(t, e) {
    return e;
  }
  function rh(t, e) {
    if (pt) {
      var n = xt.formState;
      if (n !== null) {
        t: {
          var i = ot;
          if (pt) {
            if (kt) {
              e: {
                for (var s = kt, r = Ge; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break e;
                  }
                  if (((s = Le(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                (r = s.data), (s = r === "F!" || r === "F" ? s : null);
              }
              if (s) {
                (kt = Le(s.nextSibling)), (i = s.data === "F!");
                break t;
              }
            }
            $n(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return (
      (n = re()),
      (n.memoizedState = n.baseState = e),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: oh,
        lastRenderedState: e,
      }),
      (n.queue = i),
      (n = Rh.bind(null, ot, i)),
      (i.dispatch = n),
      (i = Fu(!1)),
      (r = io.bind(null, ot, !1, i.queue)),
      (i = re()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (i.queue = s),
      (n = _g.bind(null, ot, s, r, n)),
      (s.dispatch = n),
      (i.memoizedState = t),
      [e, n, !1]
    );
  }
  function ch(t) {
    var e = Lt();
    return fh(e, bt, t);
  }
  function fh(t, e, n) {
    (e = Ju(t, e, oh)[0]),
      (t = ls(tn)[0]),
      (e =
        typeof e == "object" && e !== null && typeof e.then == "function"
          ? Ba(e)
          : e);
    var i = Lt(),
      s = i.queue,
      r = s.dispatch;
    return (
      n !== i.memoizedState &&
        ((ot.flags |= 2048),
        wi(9, Ug.bind(null, s, n), { destroy: void 0 }, null)),
      [e, r, t]
    );
  }
  function Ug(t, e) {
    t.action = e;
  }
  function hh(t) {
    var e = Lt(),
      n = bt;
    if (n !== null) return fh(e, n, t);
    Lt(), (e = e.memoizedState), (n = Lt());
    var i = n.queue.dispatch;
    return (n.memoizedState = t), [e, i, !1];
  }
  function wi(t, e, n, i) {
    return (
      (t = { tag: t, create: e, inst: n, deps: i, next: null }),
      (e = ot.updateQueue),
      e === null && ((e = is()), (ot.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t)),
      t
    );
  }
  function dh() {
    return Lt().memoizedState;
  }
  function ss(t, e, n, i) {
    var s = re();
    (ot.flags |= t),
      (s.memoizedState = wi(
        1 | e,
        n,
        { destroy: void 0 },
        i === void 0 ? null : i
      ));
  }
  function us(t, e, n, i) {
    var s = Lt();
    i = i === void 0 ? null : i;
    var r = s.memoizedState.inst;
    bt !== null && i !== null && Gu(i, bt.memoizedState.deps)
      ? (s.memoizedState = wi(e, n, r, i))
      : ((ot.flags |= t), (s.memoizedState = wi(1 | e, n, r, i)));
  }
  function mh(t, e) {
    ss(8390656, 8, t, e);
  }
  function $u(t, e) {
    us(2048, 8, t, e);
  }
  function ph(t, e) {
    return us(4, 2, t, e);
  }
  function yh(t, e) {
    return us(4, 4, t, e);
  }
  function gh(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function vh(t, e, n) {
    (n = n != null ? n.concat([t]) : null), us(4, 4, gh.bind(null, e, t), n);
  }
  function Iu() {}
  function Sh(t, e) {
    var n = Lt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && Gu(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t);
  }
  function bh(t, e) {
    var n = Lt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && Gu(e, i[1])) return i[0];
    if (((i = t()), ei)) {
      gn(!0);
      try {
        t();
      } finally {
        gn(!1);
      }
    }
    return (n.memoizedState = [i, e]), i;
  }
  function to(t, e, n) {
    return n === void 0 || xn & 1073741824
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Ad()), (ot.lanes |= t), (Un |= t), n);
  }
  function Th(t, e, n, i) {
    return he(n, e)
      ? n
      : Bi.current !== null
      ? ((t = to(t, n, i)), he(t, e) || (Qt = !0), t)
      : xn & 42
      ? ((t = Ad()), (ot.lanes |= t), (Un |= t), e)
      : ((Qt = !0), (t.memoizedState = n));
  }
  function Ah(t, e, n, i, s) {
    var r = Z.p;
    Z.p = r !== 0 && 8 > r ? r : 8;
    var f = Q.T,
      g = {};
    (Q.T = g), io(t, !1, e, n);
    try {
      var S = s(),
        E = Q.S;
      if (
        (E !== null && E(g, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var V = Cg(S, i);
        Na(t, e, V, ye(t));
      } else Na(t, e, i, ye(t));
    } catch (U) {
      Na(t, e, { then: function () {}, status: "rejected", reason: U }, ye());
    } finally {
      (Z.p = r), (Q.T = f);
    }
  }
  function Bg() {}
  function eo(t, e, n, i) {
    if (t.tag !== 5) throw Error(o(476));
    var s = xh(t).queue;
    Ah(
      t,
      s,
      e,
      ht,
      n === null
        ? Bg
        : function () {
            return Eh(t), n(i);
          }
    );
  }
  function xh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: ht,
      baseState: ht,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tn,
        lastRenderedState: ht,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: tn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Eh(t) {
    var e = xh(t).next.queue;
    Na(t, e, {}, ye());
  }
  function no() {
    return $t(el);
  }
  function Dh() {
    return Lt().memoizedState;
  }
  function Mh() {
    return Lt().memoizedState;
  }
  function Ng(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = ye();
          t = Rn(n);
          var i = On(e, t, n);
          i !== null && (le(i, e, n), La(i, e, n)),
            (e = { cache: wu() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function jg(t, e, n) {
    var i = ye();
    (n = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      os(t)
        ? Oh(e, n)
        : ((n = _u(t, e, n, i)), n !== null && (le(n, t, i), Ch(n, e, i)));
  }
  function Rh(t, e, n) {
    var i = ye();
    Na(t, e, n, i);
  }
  function Na(t, e, n, i) {
    var s = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (os(t)) Oh(e, s);
    else {
      var r = t.alternate;
      if (
        t.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = e.lastRenderedReducer), r !== null)
      )
        try {
          var f = e.lastRenderedState,
            g = r(f, n);
          if (((s.hasEagerState = !0), (s.eagerState = g), he(g, f)))
            return Zl(t, e, s, 0), xt === null && Ql(), !1;
        } catch {
        } finally {
        }
      if (((n = _u(t, e, s, i)), n !== null))
        return le(n, t, i), Ch(n, e, i), !0;
    }
    return !1;
  }
  function io(t, e, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: ko(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      os(t))
    ) {
      if (e) throw Error(o(479));
    } else (e = _u(t, n, i, 2)), e !== null && le(e, t, 2);
  }
  function os(t) {
    var e = t.alternate;
    return t === ot || (e !== null && e === ot);
  }
  function Oh(t, e) {
    Hi = es = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function Ch(t, e, n) {
    if (n & 4194176) {
      var i = e.lanes;
      (i &= t.pendingLanes), (n |= i), (e.lanes = n), wc(t, n);
    }
  }
  var Qe = {
    readContext: $t,
    use: as,
    useCallback: Bt,
    useContext: Bt,
    useEffect: Bt,
    useImperativeHandle: Bt,
    useLayoutEffect: Bt,
    useInsertionEffect: Bt,
    useMemo: Bt,
    useReducer: Bt,
    useRef: Bt,
    useState: Bt,
    useDebugValue: Bt,
    useDeferredValue: Bt,
    useTransition: Bt,
    useSyncExternalStore: Bt,
    useId: Bt,
  };
  (Qe.useCacheRefresh = Bt),
    (Qe.useMemoCache = Bt),
    (Qe.useHostTransitionStatus = Bt),
    (Qe.useFormState = Bt),
    (Qe.useActionState = Bt),
    (Qe.useOptimistic = Bt);
  var ni = {
    readContext: $t,
    use: as,
    useCallback: function (t, e) {
      return (re().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: $t,
    useEffect: mh,
    useImperativeHandle: function (t, e, n) {
      (n = n != null ? n.concat([t]) : null),
        ss(4194308, 4, gh.bind(null, e, t), n);
    },
    useLayoutEffect: function (t, e) {
      return ss(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      ss(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = re();
      e = e === void 0 ? null : e;
      var i = t();
      if (ei) {
        gn(!0);
        try {
          t();
        } finally {
          gn(!1);
        }
      }
      return (n.memoizedState = [i, e]), i;
    },
    useReducer: function (t, e, n) {
      var i = re();
      if (n !== void 0) {
        var s = n(e);
        if (ei) {
          gn(!0);
          try {
            n(e);
          } finally {
            gn(!1);
          }
        }
      } else s = e;
      return (
        (i.memoizedState = i.baseState = s),
        (t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: s,
        }),
        (i.queue = t),
        (t = t.dispatch = jg.bind(null, ot, t)),
        [i.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = re();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: function (t) {
      t = Fu(t);
      var e = t.queue,
        n = Rh.bind(null, ot, e);
      return (e.dispatch = n), [t.memoizedState, n];
    },
    useDebugValue: Iu,
    useDeferredValue: function (t, e) {
      var n = re();
      return to(n, t, e);
    },
    useTransition: function () {
      var t = Fu(!1);
      return (
        (t = Ah.bind(null, ot, t.queue, !0, !1)),
        (re().memoizedState = t),
        [!1, t]
      );
    },
    useSyncExternalStore: function (t, e, n) {
      var i = ot,
        s = re();
      if (pt) {
        if (n === void 0) throw Error(o(407));
        n = n();
      } else {
        if (((n = e()), xt === null)) throw Error(o(349));
        dt & 60 || $f(i, e, n);
      }
      s.memoizedState = n;
      var r = { value: n, getSnapshot: e };
      return (
        (s.queue = r),
        mh(th.bind(null, i, r, t), [t]),
        (i.flags |= 2048),
        wi(9, If.bind(null, i, r, n, e), { destroy: void 0 }, null),
        n
      );
    },
    useId: function () {
      var t = re(),
        e = xt.identifierPrefix;
      if (pt) {
        var n = $e,
          i = We;
        (n = (i & ~(1 << (32 - fe(i) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = ns++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = Vg++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    useCacheRefresh: function () {
      return (re().memoizedState = Ng.bind(null, ot));
    },
  };
  (ni.useMemoCache = ku),
    (ni.useHostTransitionStatus = no),
    (ni.useFormState = rh),
    (ni.useActionState = rh),
    (ni.useOptimistic = function (t) {
      var e = re();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (e.queue = n), (e = io.bind(null, ot, !0, n)), (n.dispatch = e), [t, e]
      );
    });
  var En = {
    readContext: $t,
    use: as,
    useCallback: Sh,
    useContext: $t,
    useEffect: $u,
    useImperativeHandle: vh,
    useInsertionEffect: ph,
    useLayoutEffect: yh,
    useMemo: bh,
    useReducer: ls,
    useRef: dh,
    useState: function () {
      return ls(tn);
    },
    useDebugValue: Iu,
    useDeferredValue: function (t, e) {
      var n = Lt();
      return Th(n, bt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = ls(tn)[0],
        e = Lt().memoizedState;
      return [typeof t == "boolean" ? t : Ba(t), e];
    },
    useSyncExternalStore: Wf,
    useId: Dh,
  };
  (En.useCacheRefresh = Mh),
    (En.useMemoCache = ku),
    (En.useHostTransitionStatus = no),
    (En.useFormState = ch),
    (En.useActionState = ch),
    (En.useOptimistic = function (t, e) {
      var n = Lt();
      return ih(n, bt, t, e);
    });
  var ii = {
    readContext: $t,
    use: as,
    useCallback: Sh,
    useContext: $t,
    useEffect: $u,
    useImperativeHandle: vh,
    useInsertionEffect: ph,
    useLayoutEffect: yh,
    useMemo: bh,
    useReducer: Pu,
    useRef: dh,
    useState: function () {
      return Pu(tn);
    },
    useDebugValue: Iu,
    useDeferredValue: function (t, e) {
      var n = Lt();
      return bt === null ? to(n, t, e) : Th(n, bt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Pu(tn)[0],
        e = Lt().memoizedState;
      return [typeof t == "boolean" ? t : Ba(t), e];
    },
    useSyncExternalStore: Wf,
    useId: Dh,
  };
  (ii.useCacheRefresh = Mh),
    (ii.useMemoCache = ku),
    (ii.useHostTransitionStatus = no),
    (ii.useFormState = hh),
    (ii.useActionState = hh),
    (ii.useOptimistic = function (t, e) {
      var n = Lt();
      return bt !== null
        ? ih(n, bt, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    });
  function ao(t, e, n, i) {
    (e = t.memoizedState),
      (n = n(i, e)),
      (n = n == null ? e : it({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var lo = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? P(t) === t : !1;
    },
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var i = ye(),
        s = Rn(i);
      (s.payload = e),
        n != null && (s.callback = n),
        (e = On(t, s, i)),
        e !== null && (le(e, t, i), La(e, t, i));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var i = ye(),
        s = Rn(i);
      (s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = On(t, s, i)),
        e !== null && (le(e, t, i), La(e, t, i));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = ye(),
        i = Rn(n);
      (i.tag = 2),
        e != null && (i.callback = e),
        (e = On(t, i, n)),
        e !== null && (le(e, t, n), La(e, t, n));
    },
  };
  function Vh(t, e, n, i, s, r, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, r, f)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Aa(n, i) || !Aa(s, r)
        : !0
    );
  }
  function zh(t, e, n, i) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, i),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, i),
      e.state !== t && lo.enqueueReplaceState(e, e.state, null);
  }
  function ai(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e) i !== "ref" && (n[i] = e[i]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = it({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  var rs =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function _h(t) {
    rs(t);
  }
  function Uh(t) {
    console.error(t);
  }
  function Bh(t) {
    rs(t);
  }
  function cs(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Nh(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function so(t, e, n) {
    return (
      (n = Rn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        cs(t, e);
      }),
      n
    );
  }
  function jh(t) {
    return (t = Rn(t)), (t.tag = 3), t;
  }
  function Hh(t, e, n, i) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = i.value;
      (t.payload = function () {
        return s(r);
      }),
        (t.callback = function () {
          Nh(e, n, i);
        });
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        Nh(e, n, i),
          typeof s != "function" &&
            (Bn === null ? (Bn = new Set([this])) : Bn.add(this));
        var g = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function Hg(t, e, n, i, s) {
    if (
      ((n.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Ha(e, n, s, !0),
        (n = Re.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              Xe === null ? Go() : n.alternate === null && zt === 0 && (zt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              i === ju
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([i])) : e.add(i),
                  Qo(t, i, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === ju
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([i])) : n.add(i)),
                  Qo(t, i, s)),
              !1
            );
        }
        throw Error(o(435, n.tag));
      }
      return Qo(t, i, s), Go(), !1;
    }
    if (pt)
      return (
        (e = Re.current),
        e !== null
          ? (!(e.flags & 65536) && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            i !== Nu && ((t = Error(o(422), { cause: i })), Ma(Ee(t, n))))
          : (i !== Nu && ((e = Error(o(423), { cause: i })), Ma(Ee(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (i = Ee(i, n)),
            (s = so(t.stateNode, i, s)),
            Ao(t, s),
            zt !== 4 && (zt = 2)),
        !1
      );
    var r = Error(o(520), { cause: i });
    if (
      ((r = Ee(r, n)),
      Ka === null ? (Ka = [r]) : Ka.push(r),
      zt !== 4 && (zt = 2),
      e === null)
    )
      return !0;
    (i = Ee(i, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = so(n.stateNode, i, t)),
            Ao(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (r = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (r !== null &&
                  typeof r.componentDidCatch == "function" &&
                  (Bn === null || !Bn.has(r)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = jh(s)),
              Hh(s, t, n, i),
              Ao(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Lh = Error(o(461)),
    Qt = !1;
  function Jt(t, e, n, i) {
    e.child = t === null ? Xf(e, null, n, i) : In(e, t.child, n, i);
  }
  function wh(t, e, n, i, s) {
    n = n.render;
    var r = e.ref;
    if ("ref" in i) {
      var f = {};
      for (var g in i) g !== "ref" && (f[g] = i[g]);
    } else f = i;
    return (
      si(e),
      (i = Xu(t, e, n, f, r, s)),
      (g = Qu()),
      t !== null && !Qt
        ? (Zu(t, e, s), en(t, e, s))
        : (pt && g && Uu(e), (e.flags |= 1), Jt(t, e, i, s), e.child)
    );
  }
  function qh(t, e, n, i, s) {
    if (t === null) {
      var r = n.type;
      return typeof r == "function" &&
        !Vo(r) &&
        r.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = r), Yh(t, e, r, i, s))
        : ((t = ps(n.type, null, i, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((r = t.child), !yo(t, s))) {
      var f = r.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Aa), n(f, i) && t.ref === e.ref)
      )
        return en(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = _n(r, i)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Yh(t, e, n, i, s) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (Aa(r, i) && t.ref === e.ref)
        if (((Qt = !1), (e.pendingProps = i = r), yo(t, s)))
          t.flags & 131072 && (Qt = !0);
        else return (e.lanes = t.lanes), en(t, e, s);
    }
    return uo(t, e, n, i, s);
  }
  function Gh(t, e, n) {
    var i = e.pendingProps,
      s = i.children,
      r = (e.stateNode._pendingVisibility & 2) !== 0,
      f = t !== null ? t.memoizedState : null;
    if ((ja(t, e), i.mode === "hidden" || r)) {
      if (e.flags & 128) {
        if (((i = f !== null ? f.baseLanes | n : n), t !== null)) {
          for (s = e.child = t.child, r = 0; s !== null; )
            (r = r | s.lanes | s.childLanes), (s = s.sibling);
          e.childLanes = r & ~i;
        } else (e.childLanes = 0), (e.child = null);
        return Xh(t, e, i, n);
      }
      if (n & 536870912)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ts(e, f !== null ? f.cachePool : null),
          f !== null ? Qf(e, f) : Hu(),
          Zf(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Xh(t, e, f !== null ? f.baseLanes | n : n, n)
        );
    } else
      f !== null
        ? (ts(e, f.cachePool), Qf(e, f), An(), (e.memoizedState = null))
        : (t !== null && ts(e, null), Hu(), An());
    return Jt(t, e, s, n), e.child;
  }
  function Xh(t, e, n, i) {
    var s = Yu();
    return (
      (s = s === null ? null : { parent: Gt._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: n, cachePool: s }),
      t !== null && ts(e, null),
      Hu(),
      Zf(e),
      t !== null && Ha(t, e, i, !0),
      null
    );
  }
  function ja(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 2097664);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 2097664);
    }
  }
  function uo(t, e, n, i, s) {
    return (
      si(e),
      (n = Xu(t, e, n, i, void 0, s)),
      (i = Qu()),
      t !== null && !Qt
        ? (Zu(t, e, s), en(t, e, s))
        : (pt && i && Uu(e), (e.flags |= 1), Jt(t, e, n, s), e.child)
    );
  }
  function Qh(t, e, n, i, s, r) {
    return (
      si(e),
      (e.updateQueue = null),
      (n = Ff(e, i, n, s)),
      Pf(t),
      (i = Qu()),
      t !== null && !Qt
        ? (Zu(t, e, r), en(t, e, r))
        : (pt && i && Uu(e), (e.flags |= 1), Jt(t, e, n, r), e.child)
    );
  }
  function Zh(t, e, n, i, s) {
    if ((si(e), e.stateNode === null)) {
      var r = Vi,
        f = n.contextType;
      typeof f == "object" && f !== null && (r = $t(f)),
        (r = new n(i, r)),
        (e.memoizedState =
          r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = lo),
        (e.stateNode = r),
        (r._reactInternals = e),
        (r = e.stateNode),
        (r.props = i),
        (r.state = e.memoizedState),
        (r.refs = {}),
        bo(e),
        (f = n.contextType),
        (r.context = typeof f == "object" && f !== null ? $t(f) : Vi),
        (r.state = e.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (ao(e, n, f, i), (r.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((f = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          f !== r.state && lo.enqueueReplaceState(r, r.state, null),
          qa(e, i, r, s),
          wa(),
          (r.state = e.memoizedState)),
        typeof r.componentDidMount == "function" && (e.flags |= 4194308),
        (i = !0);
    } else if (t === null) {
      r = e.stateNode;
      var g = e.memoizedProps,
        S = ai(n, g);
      r.props = S;
      var E = r.context,
        V = n.contextType;
      (f = Vi), typeof V == "object" && V !== null && (f = $t(V));
      var U = n.getDerivedStateFromProps;
      (V =
        typeof U == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function"),
        (g = e.pendingProps !== g),
        V ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((g || E !== f) && zh(e, r, i, f)),
        (Mn = !1);
      var R = e.memoizedState;
      (r.state = R),
        qa(e, i, r, s),
        wa(),
        (E = e.memoizedState),
        g || R !== E || Mn
          ? (typeof U == "function" && (ao(e, n, U, i), (E = e.memoizedState)),
            (S = Mn || Vh(e, n, S, i, R, E, f))
              ? (V ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" &&
                    r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof r.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = i),
                (e.memoizedState = E)),
            (r.props = i),
            (r.state = E),
            (r.context = f),
            (i = S))
          : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
            (i = !1));
    } else {
      (r = e.stateNode),
        To(t, e),
        (f = e.memoizedProps),
        (V = ai(n, f)),
        (r.props = V),
        (U = e.pendingProps),
        (R = r.context),
        (E = n.contextType),
        (S = Vi),
        typeof E == "object" && E !== null && (S = $t(E)),
        (g = n.getDerivedStateFromProps),
        (E =
          typeof g == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((f !== U || R !== S) && zh(e, r, i, S)),
        (Mn = !1),
        (R = e.memoizedState),
        (r.state = R),
        qa(e, i, r, s),
        wa();
      var C = e.memoizedState;
      f !== U ||
      R !== C ||
      Mn ||
      (t !== null && t.dependencies !== null && fs(t.dependencies))
        ? (typeof g == "function" && (ao(e, n, g, i), (C = e.memoizedState)),
          (V =
            Mn ||
            Vh(e, n, V, i, R, C, S) ||
            (t !== null && t.dependencies !== null && fs(t.dependencies)))
            ? (E ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" &&
                  r.componentWillUpdate(i, C, S),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(i, C, S)),
              typeof r.componentDidUpdate == "function" && (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (f === t.memoizedProps && R === t.memoizedState) ||
                (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && R === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = i),
              (e.memoizedState = C)),
          (r.props = i),
          (r.state = C),
          (r.context = S),
          (i = V))
        : (typeof r.componentDidUpdate != "function" ||
            (f === t.memoizedProps && R === t.memoizedState) ||
            (e.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && R === t.memoizedState) ||
            (e.flags |= 1024),
          (i = !1));
    }
    return (
      (r = i),
      ja(t, e),
      (i = (e.flags & 128) !== 0),
      r || i
        ? ((r = e.stateNode),
          (n =
            i && typeof n.getDerivedStateFromError != "function"
              ? null
              : r.render()),
          (e.flags |= 1),
          t !== null && i
            ? ((e.child = In(e, t.child, null, s)),
              (e.child = In(e, null, n, s)))
            : Jt(t, e, n, s),
          (e.memoizedState = r.state),
          (t = e.child))
        : (t = en(t, e, s)),
      t
    );
  }
  function Kh(t, e, n, i) {
    return Da(), (e.flags |= 256), Jt(t, e, n, i), e.child;
  }
  var oo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ro(t) {
    return { baseLanes: t, cachePool: Jf() };
  }
  function co(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= ze), t;
  }
  function kh(t, e, n) {
    var i = e.pendingProps,
      s = !1,
      r = (e.flags & 128) !== 0,
      f;
    if (
      ((f = r) ||
        (f =
          t !== null && t.memoizedState === null ? !1 : (Yt.current & 2) !== 0),
      f && ((s = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (pt) {
        if ((s ? Tn(e) : An(), pt)) {
          var g = kt,
            S;
          if ((S = g)) {
            t: {
              for (S = g, g = Ge; S.nodeType !== 8; ) {
                if (!g) {
                  g = null;
                  break t;
                }
                if (((S = Le(S.nextSibling)), S === null)) {
                  g = null;
                  break t;
                }
              }
              g = S;
            }
            g !== null
              ? ((e.memoizedState = {
                  dehydrated: g,
                  treeContext: Fn !== null ? { id: We, overflow: $e } : null,
                  retryLane: 536870912,
                }),
                (S = Ve(18, null, null, 0)),
                (S.stateNode = g),
                (S.return = e),
                (e.child = S),
                (ae = e),
                (kt = null),
                (S = !0))
              : (S = !1);
          }
          S || $n(e);
        }
        if (
          ((g = e.memoizedState),
          g !== null && ((g = g.dehydrated), g !== null))
        )
          return g.data === "$!" ? (e.lanes = 16) : (e.lanes = 536870912), null;
        Ie(e);
      }
      return (
        (g = i.children),
        (i = i.fallback),
        s
          ? (An(),
            (s = e.mode),
            (g = ho({ mode: "hidden", children: g }, s)),
            (i = oi(i, s, n, null)),
            (g.return = e),
            (i.return = e),
            (g.sibling = i),
            (e.child = g),
            (s = e.child),
            (s.memoizedState = ro(n)),
            (s.childLanes = co(t, f, n)),
            (e.memoizedState = oo),
            i)
          : (Tn(e), fo(e, g))
      );
    }
    if (
      ((S = t.memoizedState), S !== null && ((g = S.dehydrated), g !== null))
    ) {
      if (r)
        e.flags & 256
          ? (Tn(e), (e.flags &= -257), (e = mo(t, e, n)))
          : e.memoizedState !== null
          ? (An(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (An(),
            (s = i.fallback),
            (g = e.mode),
            (i = ho({ mode: "visible", children: i.children }, g)),
            (s = oi(s, g, n, null)),
            (s.flags |= 2),
            (i.return = e),
            (s.return = e),
            (i.sibling = s),
            (e.child = i),
            In(e, t.child, null, n),
            (i = e.child),
            (i.memoizedState = ro(n)),
            (i.childLanes = co(t, f, n)),
            (e.memoizedState = oo),
            (e = s));
      else if ((Tn(e), g.data === "$!")) {
        if (((f = g.nextSibling && g.nextSibling.dataset), f)) var E = f.dgst;
        (f = E),
          (i = Error(o(419))),
          (i.stack = ""),
          (i.digest = f),
          Ma({ value: i, source: null, stack: null }),
          (e = mo(t, e, n));
      } else if (
        (Qt || Ha(t, e, n, !1), (f = (n & t.childLanes) !== 0), Qt || f)
      ) {
        if (((f = xt), f !== null)) {
          if (((i = n & -n), i & 42)) i = 1;
          else
            switch (i) {
              case 2:
                i = 1;
                break;
              case 8:
                i = 4;
                break;
              case 32:
                i = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                i = 64;
                break;
              case 268435456:
                i = 134217728;
                break;
              default:
                i = 0;
            }
          if (
            ((i = i & (f.suspendedLanes | n) ? 0 : i),
            i !== 0 && i !== S.retryLane)
          )
            throw ((S.retryLane = i), bn(t, i), le(f, t, i), Lh);
        }
        g.data === "$?" || Go(), (e = mo(t, e, n));
      } else
        g.data === "$?"
          ? ((e.flags |= 128),
            (e.child = t.child),
            (e = $g.bind(null, t)),
            (g._reactRetry = e),
            (e = null))
          : ((t = S.treeContext),
            (kt = Le(g.nextSibling)),
            (ae = e),
            (pt = !0),
            (je = null),
            (Ge = !1),
            t !== null &&
              ((De[Me++] = We),
              (De[Me++] = $e),
              (De[Me++] = Fn),
              (We = t.id),
              ($e = t.overflow),
              (Fn = e)),
            (e = fo(e, i.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (An(),
        (s = i.fallback),
        (g = e.mode),
        (S = t.child),
        (E = S.sibling),
        (i = _n(S, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = S.subtreeFlags & 31457280),
        E !== null ? (s = _n(E, s)) : ((s = oi(s, g, n, null)), (s.flags |= 2)),
        (s.return = e),
        (i.return = e),
        (i.sibling = s),
        (e.child = i),
        (i = s),
        (s = e.child),
        (g = t.child.memoizedState),
        g === null
          ? (g = ro(n))
          : ((S = g.cachePool),
            S !== null
              ? ((E = Gt._currentValue),
                (S = S.parent !== E ? { parent: E, pool: E } : S))
              : (S = Jf()),
            (g = { baseLanes: g.baseLanes | n, cachePool: S })),
        (s.memoizedState = g),
        (s.childLanes = co(t, f, n)),
        (e.memoizedState = oo),
        i)
      : (Tn(e),
        (n = t.child),
        (t = n.sibling),
        (n = _n(n, { mode: "visible", children: i.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((f = e.deletions),
          f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function fo(t, e) {
    return (
      (e = ho({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function ho(t, e) {
    return Sd(t, e, 0, null);
  }
  function mo(t, e, n) {
    return (
      In(e, t.child, null, n),
      (t = fo(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Jh(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), vo(t.return, e, n);
  }
  function po(t, e, n, i, s) {
    var r = t.memoizedState;
    r === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: s,
        })
      : ((r.isBackwards = e),
        (r.rendering = null),
        (r.renderingStartTime = 0),
        (r.last = i),
        (r.tail = n),
        (r.tailMode = s));
  }
  function Ph(t, e, n) {
    var i = e.pendingProps,
      s = i.revealOrder,
      r = i.tail;
    if ((Jt(t, e, i.children, n), (i = Yt.current), i & 2))
      (i = (i & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && t.flags & 128)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Jh(t, n, e);
          else if (t.tag === 19) Jh(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      i &= 1;
    }
    switch ((Mt(Yt, i), s)) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          (t = n.alternate),
            t !== null && Il(t) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          po(e, !1, s, n, r);
        break;
      case "backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && Il(t) === null)) {
            e.child = s;
            break;
          }
          (t = s.sibling), (s.sibling = n), (n = s), (s = t);
        }
        po(e, !0, n, null, r);
        break;
      case "together":
        po(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function en(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Un |= e.lanes),
      !(n & e.childLanes))
    )
      if (t !== null) {
        if ((Ha(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (
        t = e.child, n = _n(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = _n(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function yo(t, e) {
    return t.lanes & e ? !0 : ((t = t.dependencies), !!(t !== null && fs(t)));
  }
  function Lg(t, e, n) {
    switch (e.tag) {
      case 3:
        Rl(e, e.stateNode.containerInfo),
          Dn(e, Gt, t.memoizedState.cache),
          Da();
        break;
      case 27:
      case 5:
        lu(e);
        break;
      case 4:
        Rl(e, e.stateNode.containerInfo);
        break;
      case 10:
        Dn(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (Tn(e), (e.flags |= 128), null)
            : n & e.child.childLanes
            ? kh(t, e, n)
            : (Tn(e), (t = en(t, e, n)), t !== null ? t.sibling : null);
        Tn(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((i = (n & e.childLanes) !== 0),
          i || (Ha(t, e, n, !1), (i = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (i) return Ph(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Mt(Yt, Yt.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Gh(t, e, n);
      case 24:
        Dn(e, Gt, t.memoizedState.cache);
    }
    return en(t, e, n);
  }
  function Fh(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Qt = !0;
      else {
        if (!yo(t, n) && !(e.flags & 128)) return (Qt = !1), Lg(t, e, n);
        Qt = !!(t.flags & 131072);
      }
    else (Qt = !1), pt && e.flags & 1048576 && Bf(e, Jl, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var i = e.elementType,
            s = i._init;
          if (((i = s(i._payload)), (e.type = i), typeof i == "function"))
            Vo(i)
              ? ((t = ai(i, t)), (e.tag = 1), (e = Zh(null, e, i, t, n)))
              : ((e.tag = 0), (e = uo(null, e, i, t, n)));
          else {
            if (i != null) {
              if (((s = i.$$typeof), s === _)) {
                (e.tag = 11), (e = wh(null, e, i, t, n));
                break t;
              } else if (s === j) {
                (e.tag = 14), (e = qh(null, e, i, t, n));
                break t;
              }
            }
            throw ((e = I(i) || i), Error(o(306, e, "")));
          }
        }
        return e;
      case 0:
        return uo(t, e, e.type, e.pendingProps, n);
      case 1:
        return (i = e.type), (s = ai(i, e.pendingProps)), Zh(t, e, i, s, n);
      case 3:
        t: {
          if ((Rl(e, e.stateNode.containerInfo), t === null))
            throw Error(o(387));
          var r = e.pendingProps;
          (s = e.memoizedState), (i = s.element), To(t, e), qa(e, r, null, n);
          var f = e.memoizedState;
          if (
            ((r = f.cache),
            Dn(e, Gt, r),
            r !== s.cache && So(e, [Gt], n, !0),
            wa(),
            (r = f.element),
            s.isDehydrated)
          )
            if (
              ((s = { element: r, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = s),
              (e.memoizedState = s),
              e.flags & 256)
            ) {
              e = Kh(t, e, r, n);
              break t;
            } else if (r !== i) {
              (i = Ee(Error(o(424)), e)), Ma(i), (e = Kh(t, e, r, n));
              break t;
            } else
              for (
                kt = Le(e.stateNode.containerInfo.firstChild),
                  ae = e,
                  pt = !0,
                  je = null,
                  Ge = !0,
                  n = Xf(e, null, r, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Da(), r === i)) {
              e = en(t, e, n);
              break t;
            }
            Jt(t, e, r, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          ja(t, e),
          t === null
            ? (n = Id(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : pt ||
                ((n = e.type),
                (t = e.pendingProps),
                (i = Rs(yn.current).createElement(n)),
                (i[Wt] = e),
                (i[ue] = t),
                Pt(i, n, t),
                Xt(i),
                (e.stateNode = i))
            : (e.memoizedState = Id(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          lu(e),
          t === null &&
            pt &&
            ((i = e.stateNode = Fd(e.type, e.pendingProps, yn.current)),
            (ae = e),
            (Ge = !0),
            (kt = Le(i.firstChild))),
          (i = e.pendingProps.children),
          t !== null || pt ? Jt(t, e, i, n) : (e.child = In(e, null, i, n)),
          ja(t, e),
          e.child
        );
      case 5:
        return (
          t === null &&
            pt &&
            ((s = i = kt) &&
              ((i = mv(i, e.type, e.pendingProps, Ge)),
              i !== null
                ? ((e.stateNode = i),
                  (ae = e),
                  (kt = Le(i.firstChild)),
                  (Ge = !1),
                  (s = !0))
                : (s = !1)),
            s || $n(e)),
          lu(e),
          (s = e.type),
          (r = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (i = r.children),
          nr(s, r) ? (i = null) : f !== null && nr(s, f) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = Xu(t, e, zg, null, null, n)), (el._currentValue = s)),
          ja(t, e),
          Jt(t, e, i, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            pt &&
            ((t = n = kt) &&
              ((n = pv(n, e.pendingProps, Ge)),
              n !== null
                ? ((e.stateNode = n), (ae = e), (kt = null), (t = !0))
                : (t = !1)),
            t || $n(e)),
          null
        );
      case 13:
        return kh(t, e, n);
      case 4:
        return (
          Rl(e, e.stateNode.containerInfo),
          (i = e.pendingProps),
          t === null ? (e.child = In(e, null, i, n)) : Jt(t, e, i, n),
          e.child
        );
      case 11:
        return wh(t, e, e.type, e.pendingProps, n);
      case 7:
        return Jt(t, e, e.pendingProps, n), e.child;
      case 8:
        return Jt(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return Jt(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (i = e.pendingProps),
          Dn(e, e.type, i.value),
          Jt(t, e, i.children, n),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (i = e.pendingProps.children),
          si(e),
          (s = $t(s)),
          (i = i(s)),
          (e.flags |= 1),
          Jt(t, e, i, n),
          e.child
        );
      case 14:
        return qh(t, e, e.type, e.pendingProps, n);
      case 15:
        return Yh(t, e, e.type, e.pendingProps, n);
      case 19:
        return Ph(t, e, n);
      case 22:
        return Gh(t, e, n);
      case 24:
        return (
          si(e),
          (i = $t(Gt)),
          t === null
            ? ((s = Yu()),
              s === null &&
                ((s = xt),
                (r = wu()),
                (s.pooledCache = r),
                r.refCount++,
                r !== null && (s.pooledCacheLanes |= n),
                (s = r)),
              (e.memoizedState = { parent: i, cache: s }),
              bo(e),
              Dn(e, Gt, s))
            : (t.lanes & n && (To(t, e), qa(e, null, null, n), wa()),
              (s = t.memoizedState),
              (r = e.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  Dn(e, Gt, i))
                : ((i = r.cache),
                  Dn(e, Gt, i),
                  i !== s.cache && So(e, [Gt], n, !0))),
          Jt(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  var go = St(null),
    li = null,
    nn = null;
  function Dn(t, e, n) {
    Mt(go, e._currentValue), (e._currentValue = n);
  }
  function an(t) {
    (t._currentValue = go.current), jt(go);
  }
  function vo(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
          : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function So(t, e, n, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var f = s.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var g = r;
          r = s;
          for (var S = 0; S < e.length; S++)
            if (g.context === e[S]) {
              (r.lanes |= n),
                (g = r.alternate),
                g !== null && (g.lanes |= n),
                vo(r.return, n, t),
                i || (f = null);
              break t;
            }
          r = g.next;
        }
      } else if (s.tag === 18) {
        if (((f = s.return), f === null)) throw Error(o(341));
        (f.lanes |= n),
          (r = f.alternate),
          r !== null && (r.lanes |= n),
          vo(f, n, t),
          (f = null);
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (((s = f.sibling), s !== null)) {
            (s.return = f.return), (f = s);
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function Ha(t, e, n, i) {
    t = null;
    for (var s = e, r = !1; s !== null; ) {
      if (!r) {
        if (s.flags & 524288) r = !0;
        else if (s.flags & 262144) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(o(387));
        if (((f = f.memoizedProps), f !== null)) {
          var g = s.type;
          he(s.pendingProps.value, f.value) ||
            (t !== null ? t.push(g) : (t = [g]));
        }
      } else if (s === Ml.current) {
        if (((f = s.alternate), f === null)) throw Error(o(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(el) : (t = [el]));
      }
      s = s.return;
    }
    t !== null && So(e, t, n, i), (e.flags |= 262144);
  }
  function fs(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!he(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function si(t) {
    (li = t),
      (nn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function $t(t) {
    return Wh(li, t);
  }
  function hs(t, e) {
    return li === null && si(t), Wh(t, e);
  }
  function Wh(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), nn === null)) {
      if (t === null) throw Error(o(308));
      (nn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else nn = nn.next = e;
    return n;
  }
  var Mn = !1;
  function bo(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function To(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Rn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function On(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), Ot & 2)) {
      var s = i.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (i.pending = e),
        (e = Kl(t)),
        _f(t, null, n),
        e
      );
    }
    return Zl(t, i, e, n), Kl(t);
  }
  function La(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194176) !== 0))
    ) {
      var i = e.lanes;
      (i &= t.pendingLanes), (n |= i), (e.lanes = n), wc(t, n);
    }
  }
  function Ao(t, e) {
    var n = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var s = null,
        r = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          r === null ? (s = r = f) : (r = r.next = f), (n = n.next);
        } while (n !== null);
        r === null ? (s = r = e) : (r = r.next = e);
      } else s = r = e;
      (n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var xo = !1;
  function wa() {
    if (xo) {
      var t = ji;
      if (t !== null) throw t;
    }
  }
  function qa(t, e, n, i) {
    xo = !1;
    var s = t.updateQueue;
    Mn = !1;
    var r = s.firstBaseUpdate,
      f = s.lastBaseUpdate,
      g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var S = g,
        E = S.next;
      (S.next = null), f === null ? (r = E) : (f.next = E), (f = S);
      var V = t.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (g = V.lastBaseUpdate),
        g !== f &&
          (g === null ? (V.firstBaseUpdate = E) : (g.next = E),
          (V.lastBaseUpdate = S)));
    }
    if (r !== null) {
      var U = s.baseState;
      (f = 0), (V = E = S = null), (g = r);
      do {
        var R = g.lane & -536870913,
          C = R !== g.lane;
        if (C ? (dt & R) === R : (i & R) === R) {
          R !== 0 && R === Ni && (xo = !0),
            V !== null &&
              (V = V.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var k = t,
              at = g;
            R = e;
            var _t = n;
            switch (at.tag) {
              case 1:
                if (((k = at.payload), typeof k == "function")) {
                  U = k.call(_t, U, R);
                  break t;
                }
                U = k;
                break t;
              case 3:
                k.flags = (k.flags & -65537) | 128;
              case 0:
                if (
                  ((k = at.payload),
                  (R = typeof k == "function" ? k.call(_t, U, R) : k),
                  R == null)
                )
                  break t;
                U = it({}, U, R);
                break t;
              case 2:
                Mn = !0;
            }
          }
          (R = g.callback),
            R !== null &&
              ((t.flags |= 64),
              C && (t.flags |= 8192),
              (C = s.callbacks),
              C === null ? (s.callbacks = [R]) : C.push(R));
        } else
          (C = {
            lane: R,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            V === null ? ((E = V = C), (S = U)) : (V = V.next = C),
            (f |= R);
        if (((g = g.next), g === null)) {
          if (((g = s.shared.pending), g === null)) break;
          (C = g),
            (g = C.next),
            (C.next = null),
            (s.lastBaseUpdate = C),
            (s.shared.pending = null);
        }
      } while (!0);
      V === null && (S = U),
        (s.baseState = S),
        (s.firstBaseUpdate = E),
        (s.lastBaseUpdate = V),
        r === null && (s.shared.lanes = 0),
        (Un |= f),
        (t.lanes = f),
        (t.memoizedState = U);
    }
  }
  function $h(t, e) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(e);
  }
  function Ih(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) $h(n[t], e);
  }
  function Ya(t, e) {
    try {
      var n = e.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var r = n.create,
              f = n.inst;
            (i = r()), (f.destroy = i);
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (g) {
      At(e, e.return, g);
    }
  }
  function Cn(t, e, n) {
    try {
      var i = e.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        i = r;
        do {
          if ((i.tag & t) === t) {
            var f = i.inst,
              g = f.destroy;
            if (g !== void 0) {
              (f.destroy = void 0), (s = e);
              var S = n;
              try {
                g();
              } catch (E) {
                At(s, S, E);
              }
            }
          }
          i = i.next;
        } while (i !== r);
      }
    } catch (E) {
      At(e, e.return, E);
    }
  }
  function td(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Ih(e, n);
      } catch (i) {
        At(t, t.return, i);
      }
    }
  }
  function ed(t, e, n) {
    (n.props = ai(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (i) {
      At(t, e, i);
    }
  }
  function ui(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        var i = t.stateNode;
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var s = i;
            break;
          default:
            s = i;
        }
        typeof n == "function" ? (t.refCleanup = n(s)) : (n.current = s);
      }
    } catch (r) {
      At(t, e, r);
    }
  }
  function de(t, e) {
    var n = t.ref,
      i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          At(t, e, s);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          At(t, e, s);
        }
      else n.current = null;
  }
  function nd(t) {
    var e = t.type,
      n = t.memoizedProps,
      i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (s) {
      At(t, t.return, s);
    }
  }
  function id(t, e, n) {
    try {
      var i = t.stateNode;
      rv(i, t.type, n, e), (i[ue] = e);
    } catch (s) {
      At(t, t.return, s);
    }
  }
  function ad(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
    );
  }
  function Eo(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || ad(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18;

      ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Do(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode),
        e
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(t, e)
            : n.insertBefore(t, e)
          : (n.nodeType === 8
              ? ((e = n.parentNode), e.insertBefore(t, n))
              : ((e = n), e.appendChild(t)),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Ms));
    else if (i !== 4 && i !== 27 && ((t = t.child), t !== null))
      for (Do(t, e, n), t = t.sibling; t !== null; )
        Do(t, e, n), (t = t.sibling);
  }
  function ds(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (i !== 4 && i !== 27 && ((t = t.child), t !== null))
      for (ds(t, e, n), t = t.sibling; t !== null; )
        ds(t, e, n), (t = t.sibling);
  }
  var ln = !1,
    Vt = !1,
    Mo = !1,
    ld = typeof WeakSet == "function" ? WeakSet : Set,
    Zt = null,
    sd = !1;
  function wg(t, e) {
    if (((t = t.containerInfo), (tr = Us), (t = xf(t)), Ru(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var s = i.anchorOffset,
              r = i.focusNode;
            i = i.focusOffset;
            try {
              n.nodeType, r.nodeType;
            } catch {
              n = null;
              break t;
            }
            var f = 0,
              g = -1,
              S = -1,
              E = 0,
              V = 0,
              U = t,
              R = null;
            e: for (;;) {
              for (
                var C;
                U !== n || (s !== 0 && U.nodeType !== 3) || (g = f + s),
                  U !== r || (i !== 0 && U.nodeType !== 3) || (S = f + i),
                  U.nodeType === 3 && (f += U.nodeValue.length),
                  (C = U.firstChild) !== null;

              )
                (R = U), (U = C);
              for (;;) {
                if (U === t) break e;
                if (
                  (R === n && ++E === s && (g = f),
                  R === r && ++V === i && (S = f),
                  (C = U.nextSibling) !== null)
                )
                  break;
                (U = R), (R = U.parentNode);
              }
              U = C;
            }
            n = g === -1 || S === -1 ? null : { start: g, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      er = { focusedElem: t, selectionRange: n }, Us = !1, Zt = e;
      Zt !== null;

    )
      if (
        ((e = Zt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (Zt = t);
      else
        for (; Zt !== null; ) {
          switch (((e = Zt), (r = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (t & 1024 && r !== null) {
                (t = void 0),
                  (n = e),
                  (s = r.memoizedProps),
                  (r = r.memoizedState),
                  (i = n.stateNode);
                try {
                  var k = ai(n.type, s, n.elementType === n.type);
                  (t = i.getSnapshotBeforeUpdate(k, r)),
                    (i.__reactInternalSnapshotBeforeUpdate = t);
                } catch (at) {
                  At(n, n.return, at);
                }
              }
              break;
            case 3:
              if (t & 1024) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  lr(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      lr(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (t & 1024) throw Error(o(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Zt = t);
            break;
          }
          Zt = e.return;
        }
    return (k = sd), (sd = !1), k;
  }
  function ud(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        un(t, n), i & 4 && Ya(5, n);
        break;
      case 1:
        if ((un(t, n), i & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (g) {
              At(n, n.return, g);
            }
          else {
            var s = ai(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              At(n, n.return, g);
            }
          }
        i & 64 && td(n), i & 512 && ui(n, n.return);
        break;
      case 3:
        if ((un(t, n), i & 64 && ((i = n.updateQueue), i !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Ih(i, t);
          } catch (g) {
            At(n, n.return, g);
          }
        }
        break;
      case 26:
        un(t, n), i & 512 && ui(n, n.return);
        break;
      case 27:
      case 5:
        un(t, n), e === null && i & 4 && nd(n), i & 512 && ui(n, n.return);
        break;
      case 12:
        un(t, n);
        break;
      case 13:
        un(t, n), i & 4 && cd(t, n);
        break;
      case 22:
        if (((s = n.memoizedState !== null || ln), !s)) {
          e = (e !== null && e.memoizedState !== null) || Vt;
          var r = ln,
            f = Vt;
          (ln = s),
            (Vt = e) && !f ? Vn(t, n, (n.subtreeFlags & 8772) !== 0) : un(t, n),
            (ln = r),
            (Vt = f);
        }
        i & 512 &&
          (n.memoizedProps.mode === "manual"
            ? ui(n, n.return)
            : de(n, n.return));
        break;
      default:
        un(t, n);
    }
  }
  function od(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), od(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && fu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var wt = null,
    me = !1;
  function sn(t, e, n) {
    for (n = n.child; n !== null; ) rd(t, e, n), (n = n.sibling);
  }
  function rd(t, e, n) {
    if (ce && typeof ce.onCommitFiberUnmount == "function")
      try {
        ce.onCommitFiberUnmount(ca, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Vt || de(n, e),
          sn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Vt || de(n, e);
        var i = wt,
          s = me;
        for (
          wt = n.stateNode, sn(t, e, n), n = n.stateNode, e = n.attributes;
          e.length;

        )
          n.removeAttributeNode(e[0]);
        fu(n), (wt = i), (me = s);
        break;
      case 5:
        Vt || de(n, e);
      case 6:
        s = wt;
        var r = me;
        if (((wt = null), sn(t, e, n), (wt = s), (me = r), wt !== null))
          if (me)
            try {
              (t = wt),
                (i = n.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(i)
                  : t.removeChild(i);
            } catch (f) {
              At(n, e, f);
            }
          else
            try {
              wt.removeChild(n.stateNode);
            } catch (f) {
              At(n, e, f);
            }
        break;
      case 18:
        wt !== null &&
          (me
            ? ((e = wt),
              (n = n.stateNode),
              e.nodeType === 8
                ? ar(e.parentNode, n)
                : e.nodeType === 1 && ar(e, n),
              ll(e))
            : ar(wt, n.stateNode));
        break;
      case 4:
        (i = wt),
          (s = me),
          (wt = n.stateNode.containerInfo),
          (me = !0),
          sn(t, e, n),
          (wt = i),
          (me = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Vt || Cn(2, n, e), Vt || Cn(4, n, e), sn(t, e, n);
        break;
      case 1:
        Vt ||
          (de(n, e),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function" && ed(n, e, i)),
          sn(t, e, n);
        break;
      case 21:
        sn(t, e, n);
        break;
      case 22:
        Vt || de(n, e),
          (Vt = (i = Vt) || n.memoizedState !== null),
          sn(t, e, n),
          (Vt = i);
        break;
      default:
        sn(t, e, n);
    }
  }
  function cd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ll(t);
      } catch (n) {
        At(e, e.return, n);
      }
  }
  function qg(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new ld()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new ld()),
          e
        );
      default:
        throw Error(o(435, t.tag));
    }
  }
  function Ro(t, e) {
    var n = qg(t);
    e.forEach(function (i) {
      var s = Ig.bind(null, t, i);
      n.has(i) || (n.add(i), i.then(s, s));
    });
  }
  function Oe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i],
          r = t,
          f = e,
          g = f;
        t: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
            case 5:
              (wt = g.stateNode), (me = !1);
              break t;
            case 3:
              (wt = g.stateNode.containerInfo), (me = !0);
              break t;
            case 4:
              (wt = g.stateNode.containerInfo), (me = !0);
              break t;
          }
          g = g.return;
        }
        if (wt === null) throw Error(o(160));
        rd(r, f, s),
          (wt = null),
          (me = !1),
          (r = s.alternate),
          r !== null && (r.return = null),
          (s.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) fd(e, t), (e = e.sibling);
  }
  var He = null;
  function fd(t, e) {
    var n = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Oe(e, t),
          Ce(t),
          i & 4 && (Cn(3, t, t.return), Ya(3, t), Cn(5, t, t.return));
        break;
      case 1:
        Oe(e, t),
          Ce(t),
          i & 512 && (Vt || n === null || de(n, n.return)),
          i & 64 &&
            ln &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? i : n.concat(i)))));
        break;
      case 26:
        var s = He;
        if (
          (Oe(e, t),
          Ce(t),
          i & 512 && (Vt || n === null || de(n, n.return)),
          i & 4)
        ) {
          var r = n !== null ? n.memoizedState : null;
          if (((i = t.memoizedState), n === null))
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  (i = t.type),
                    (n = t.memoizedProps),
                    (s = s.ownerDocument || s);
                  e: switch (i) {
                    case "title":
                      (r = s.getElementsByTagName("title")[0]),
                        (!r ||
                          r[da] ||
                          r[Wt] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = s.createElement(i)),
                          s.head.insertBefore(
                            r,
                            s.querySelector("head > title")
                          )),
                        Pt(r, i, n),
                        (r[Wt] = t),
                        Xt(r),
                        (i = r);
                      break t;
                    case "link":
                      var f = nm("link", "href", s).get(i + (n.href || ""));
                      if (f) {
                        for (var g = 0; g < f.length; g++)
                          if (
                            ((r = f[g]),
                            r.getAttribute("href") ===
                              (n.href == null ? null : n.href) &&
                              r.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              r.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              r.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(g, 1);
                            break e;
                          }
                      }
                      (r = s.createElement(i)),
                        Pt(r, i, n),
                        s.head.appendChild(r);
                      break;
                    case "meta":
                      if (
                        (f = nm("meta", "content", s).get(
                          i + (n.content || "")
                        ))
                      ) {
                        for (g = 0; g < f.length; g++)
                          if (
                            ((r = f[g]),
                            r.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              r.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              r.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              r.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              r.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(g, 1);
                            break e;
                          }
                      }
                      (r = s.createElement(i)),
                        Pt(r, i, n),
                        s.head.appendChild(r);
                      break;
                    default:
                      throw Error(o(468, i));
                  }
                  (r[Wt] = t), Xt(r), (i = r);
                }
                t.stateNode = i;
              } else im(s, t.type, t.stateNode);
            else t.stateNode = em(s, i, t.memoizedProps);
          else
            r !== i
              ? (r === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : r.count--,
                i === null
                  ? im(s, t.type, t.stateNode)
                  : em(s, i, t.memoizedProps))
              : i === null &&
                t.stateNode !== null &&
                id(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        if (i & 4 && t.alternate === null) {
          (s = t.stateNode), (r = t.memoizedProps);
          try {
            for (var S = s.firstChild; S; ) {
              var E = S.nextSibling,
                V = S.nodeName;
              S[da] ||
                V === "HEAD" ||
                V === "BODY" ||
                V === "SCRIPT" ||
                V === "STYLE" ||
                (V === "LINK" && S.rel.toLowerCase() === "stylesheet") ||
                s.removeChild(S),
                (S = E);
            }
            for (var U = t.type, R = s.attributes; R.length; )
              s.removeAttributeNode(R[0]);
            Pt(s, U, r), (s[Wt] = t), (s[ue] = r);
          } catch (k) {
            At(t, t.return, k);
          }
        }
      case 5:
        if (
          (Oe(e, t),
          Ce(t),
          i & 512 && (Vt || n === null || de(n, n.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            xi(s, "");
          } catch (k) {
            At(t, t.return, k);
          }
        }
        i & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), id(t, s, n !== null ? n.memoizedProps : s)),
          i & 1024 && (Mo = !0);
        break;
      case 6:
        if ((Oe(e, t), Ce(t), i & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          (i = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = i;
          } catch (k) {
            At(t, t.return, k);
          }
        }
        break;
      case 3:
        if (
          ((Vs = null),
          (s = He),
          (He = Os(e.containerInfo)),
          Oe(e, t),
          (He = s),
          Ce(t),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ll(e.containerInfo);
          } catch (k) {
            At(t, t.return, k);
          }
        Mo && ((Mo = !1), hd(t));
        break;
      case 4:
        (i = He),
          (He = Os(t.stateNode.containerInfo)),
          Oe(e, t),
          Ce(t),
          (He = i);
        break;
      case 12:
        Oe(e, t), Ce(t);
        break;
      case 13:
        Oe(e, t),
          Ce(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (jo = Ye()),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Ro(t, i)));
        break;
      case 22:
        if (
          (i & 512 && (Vt || n === null || de(n, n.return)),
          (S = t.memoizedState !== null),
          (E = n !== null && n.memoizedState !== null),
          (V = ln),
          (U = Vt),
          (ln = V || S),
          (Vt = U || E),
          Oe(e, t),
          (Vt = U),
          (ln = V),
          Ce(t),
          (e = t.stateNode),
          (e._current = t),
          (e._visibility &= -3),
          (e._visibility |= e._pendingVisibility & 2),
          i & 8192 &&
            ((e._visibility = S ? e._visibility & -2 : e._visibility | 1),
            S && ((e = ln || Vt), n === null || E || e || qi(t)),
            t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
        )
          t: for (n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
              if (n === null) {
                E = n = e;
                try {
                  if (((s = E.stateNode), S))
                    (r = s.style),
                      typeof r.setProperty == "function"
                        ? r.setProperty("display", "none", "important")
                        : (r.display = "none");
                  else {
                    (f = E.stateNode), (g = E.memoizedProps.style);
                    var C =
                      g != null && g.hasOwnProperty("display")
                        ? g.display
                        : null;
                    f.style.display =
                      C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (k) {
                  At(E, E.return, k);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                E = e;
                try {
                  E.stateNode.nodeValue = S ? "" : E.memoizedProps;
                } catch (k) {
                  At(E, E.return, k);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null &&
            ((n = i.retryQueue),
            n !== null && ((i.retryQueue = null), Ro(t, n))));
        break;
      case 19:
        Oe(e, t),
          Ce(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Ro(t, i)));
        break;
      case 21:
        break;
      default:
        Oe(e, t), Ce(t);
    }
  }
  function Ce(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        if (t.tag !== 27) {
          t: {
            for (var n = t.return; n !== null; ) {
              if (ad(n)) {
                var i = n;
                break t;
              }
              n = n.return;
            }
            throw Error(o(160));
          }
          switch (i.tag) {
            case 27:
              var s = i.stateNode,
                r = Eo(t);
              ds(t, r, s);
              break;
            case 5:
              var f = i.stateNode;
              i.flags & 32 && (xi(f, ""), (i.flags &= -33));
              var g = Eo(t);
              ds(t, g, f);
              break;
            case 3:
            case 4:
              var S = i.stateNode.containerInfo,
                E = Eo(t);
              Do(t, E, S);
              break;
            default:
              throw Error(o(161));
          }
        }
      } catch (V) {
        At(t, t.return, V);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function hd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        hd(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function un(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) ud(t, e.alternate, e), (e = e.sibling);
  }
  function qi(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Cn(4, e, e.return), qi(e);
          break;
        case 1:
          de(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && ed(e, e.return, n),
            qi(e);
          break;
        case 26:
        case 27:
        case 5:
          de(e, e.return), qi(e);
          break;
        case 22:
          de(e, e.return), e.memoizedState === null && qi(e);
          break;
        default:
          qi(e);
      }
      t = t.sibling;
    }
  }
  function Vn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate,
        s = t,
        r = e,
        f = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Vn(s, r, n), Ya(4, r);
          break;
        case 1:
          if (
            (Vn(s, r, n),
            (i = r),
            (s = i.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (E) {
              At(i, i.return, E);
            }
          if (((i = r), (s = i.updateQueue), s !== null)) {
            var g = i.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  $h(S[s], g);
            } catch (E) {
              At(i, i.return, E);
            }
          }
          n && f & 64 && td(r), ui(r, r.return);
          break;
        case 26:
        case 27:
        case 5:
          Vn(s, r, n), n && i === null && f & 4 && nd(r), ui(r, r.return);
          break;
        case 12:
          Vn(s, r, n);
          break;
        case 13:
          Vn(s, r, n), n && f & 4 && cd(s, r);
          break;
        case 22:
          r.memoizedState === null && Vn(s, r, n), ui(r, r.return);
          break;
        default:
          Vn(s, r, n);
      }
      e = e.sibling;
    }
  }
  function Oo(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && za(n));
  }
  function Co(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && za(t));
  }
  function zn(t, e, n, i) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) dd(t, e, n, i), (e = e.sibling);
  }
  function dd(t, e, n, i) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        zn(t, e, n, i), s & 2048 && Ya(9, e);
        break;
      case 3:
        zn(t, e, n, i),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && za(t)));
        break;
      case 12:
        if (s & 2048) {
          zn(t, e, n, i), (t = e.stateNode);
          try {
            var r = e.memoizedProps,
              f = r.id,
              g = r.onPostCommit;
            typeof g == "function" &&
              g(
                f,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (S) {
            At(e, e.return, S);
          }
        } else zn(t, e, n, i);
        break;
      case 23:
        break;
      case 22:
        (r = e.stateNode),
          e.memoizedState !== null
            ? r._visibility & 4
              ? zn(t, e, n, i)
              : Ga(t, e)
            : r._visibility & 4
            ? zn(t, e, n, i)
            : ((r._visibility |= 4),
              Yi(t, e, n, i, (e.subtreeFlags & 10256) !== 0)),
          s & 2048 && Oo(e.alternate, e);
        break;
      case 24:
        zn(t, e, n, i), s & 2048 && Co(e.alternate, e);
        break;
      default:
        zn(t, e, n, i);
    }
  }
  function Yi(t, e, n, i, s) {
    for (s = s && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var r = t,
        f = e,
        g = n,
        S = i,
        E = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Yi(r, f, g, S, s), Ya(8, f);
          break;
        case 23:
          break;
        case 22:
          var V = f.stateNode;
          f.memoizedState !== null
            ? V._visibility & 4
              ? Yi(r, f, g, S, s)
              : Ga(r, f)
            : ((V._visibility |= 4), Yi(r, f, g, S, s)),
            s && E & 2048 && Oo(f.alternate, f);
          break;
        case 24:
          Yi(r, f, g, S, s), s && E & 2048 && Co(f.alternate, f);
          break;
        default:
          Yi(r, f, g, S, s);
      }
      e = e.sibling;
    }
  }
  function Ga(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          i = e,
          s = i.flags;
        switch (i.tag) {
          case 22:
            Ga(n, i), s & 2048 && Oo(i.alternate, i);
            break;
          case 24:
            Ga(n, i), s & 2048 && Co(i.alternate, i);
            break;
          default:
            Ga(n, i);
        }
        e = e.sibling;
      }
  }
  var Xa = 8192;
  function Gi(t) {
    if (t.subtreeFlags & Xa)
      for (t = t.child; t !== null; ) md(t), (t = t.sibling);
  }
  function md(t) {
    switch (t.tag) {
      case 26:
        Gi(t),
          t.flags & Xa &&
            t.memoizedState !== null &&
            Ov(He, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Gi(t);
        break;
      case 3:
      case 4:
        var e = He;
        (He = Os(t.stateNode.containerInfo)), Gi(t), (He = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Xa), (Xa = 16777216), Gi(t), (Xa = e))
            : Gi(t));
        break;
      default:
        Gi(t);
    }
  }
  function pd(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Qa(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (Zt = i), gd(i, t);
        }
      pd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) yd(t), (t = t.sibling);
  }
  function yd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Qa(t), t.flags & 2048 && Cn(9, t, t.return);
        break;
      case 3:
        Qa(t);
        break;
      case 12:
        Qa(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 4 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -5), ms(t))
          : Qa(t);
        break;
      default:
        Qa(t);
    }
  }
  function ms(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (Zt = i), gd(i, t);
        }
      pd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Cn(8, e, e.return), ms(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 4 && ((n._visibility &= -5), ms(e));
          break;
        default:
          ms(e);
      }
      t = t.sibling;
    }
  }
  function gd(t, e) {
    for (; Zt !== null; ) {
      var n = Zt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Cn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          za(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) (i.return = n), (Zt = i);
      else
        t: for (n = t; Zt !== null; ) {
          i = Zt;
          var s = i.sibling,
            r = i.return;
          if ((od(i), i === n)) {
            Zt = null;
            break t;
          }
          if (s !== null) {
            (s.return = r), (Zt = s);
            break t;
          }
          Zt = r;
        }
    }
  }
  function Yg(t, e, n, i) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ve(t, e, n, i) {
    return new Yg(t, e, n, i);
  }
  function Vo(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function _n(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Ve(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 31457280),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function vd(t, e) {
    t.flags &= 31457282;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function ps(t, e, n, i, s, r) {
    var f = 0;
    if (((i = t), typeof t == "function")) Vo(t) && (f = 1);
    else if (typeof t == "string")
      f = Mv(t, n, qe.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case m:
          return oi(n.children, s, r, e);
        case p:
          (f = 8), (s |= 24);
          break;
        case v:
          return (
            (t = Ve(12, n, e, s | 2)), (t.elementType = v), (t.lanes = r), t
          );
        case B:
          return (t = Ve(13, n, e, s)), (t.elementType = B), (t.lanes = r), t;
        case w:
          return (t = Ve(19, n, e, s)), (t.elementType = w), (t.lanes = r), t;
        case X:
          return Sd(n, s, r, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case b:
              case O:
                f = 10;
                break t;
              case A:
                f = 9;
                break t;
              case _:
                f = 11;
                break t;
              case j:
                f = 14;
                break t;
              case Y:
                (f = 16), (i = null);
                break t;
            }
          (f = 29),
            (n = Error(o(130, t === null ? "null" : typeof t, ""))),
            (i = null);
      }
    return (
      (e = Ve(f, n, e, s)), (e.elementType = t), (e.type = i), (e.lanes = r), e
    );
  }
  function oi(t, e, n, i) {
    return (t = Ve(7, t, i, e)), (t.lanes = n), t;
  }
  function Sd(t, e, n, i) {
    (t = Ve(22, t, i, e)), (t.elementType = X), (t.lanes = n);
    var s = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var r = s._current;
        if (r === null) throw Error(o(456));
        if (!(s._pendingVisibility & 2)) {
          var f = bn(r, 2);
          f !== null && ((s._pendingVisibility |= 2), le(f, r, 2));
        }
      },
      attach: function () {
        var r = s._current;
        if (r === null) throw Error(o(456));
        if (s._pendingVisibility & 2) {
          var f = bn(r, 2);
          f !== null && ((s._pendingVisibility &= -3), le(f, r, 2));
        }
      },
    };
    return (t.stateNode = s), t;
  }
  function zo(t, e, n) {
    return (t = Ve(6, t, null, e)), (t.lanes = n), t;
  }
  function _o(t, e, n) {
    return (
      (e = Ve(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  function on(t) {
    t.flags |= 4;
  }
  function bd(t, e) {
    if (e.type !== "stylesheet" || e.state.loading & 4) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !am(e))) {
      if (
        ((e = Re.current),
        e !== null &&
          ((dt & 4194176) === dt
            ? Xe !== null
            : ((dt & 62914560) !== dt && !(dt & 536870912)) || e !== Xe))
      )
        throw ((Oa = ju), Hf);
      t.flags |= 8192;
    }
  }
  function ys(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Hc() : 536870912), (t.lanes |= e), (Qi |= e));
  }
  function Za(t, e) {
    if (!pt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Rt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      i = 0;
    if (e)
      for (var s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 31457280),
          (i |= s.flags & 31457280),
          (s.return = t),
          (s = s.sibling);
    else
      for (s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = t),
          (s = s.sibling);
    return (t.subtreeFlags |= i), (t.childLanes = n), e;
  }
  function Gg(t, e, n) {
    var i = e.pendingProps;
    switch ((Bu(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Rt(e), null;
      case 1:
        return Rt(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          e.memoizedState.cache !== i && (e.flags |= 2048),
          an(Gt),
          gi(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ea(e)
              ? on(e)
              : t === null ||
                (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
                ((e.flags |= 1024), je !== null && (qo(je), (je = null)))),
          Rt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (on(e),
              n !== null ? (Rt(e), bd(e, n)) : (Rt(e), (e.flags &= -16777217)))
            : n
            ? n !== t.memoizedState
              ? (on(e), Rt(e), bd(e, n))
              : (Rt(e), (e.flags &= -16777217))
            : (t.memoizedProps !== i && on(e), Rt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Ol(e), (n = yn.current);
        var s = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== i && on(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(o(166));
            return Rt(e), null;
          }
          (t = qe.current),
            Ea(e) ? Nf(e) : ((t = Fd(s, i, n)), (e.stateNode = t), on(e));
        }
        return Rt(e), null;
      case 5:
        if ((Ol(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== i && on(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(o(166));
            return Rt(e), null;
          }
          if (((t = qe.current), Ea(e))) Nf(e);
          else {
            switch (((s = Rs(yn.current)), t)) {
              case 1:
                t = s.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = s.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (t = s.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof i.is == "string"
                        ? s.createElement("select", { is: i.is })
                        : s.createElement("select")),
                      i.multiple
                        ? (t.multiple = !0)
                        : i.size && (t.size = i.size);
                    break;
                  default:
                    t =
                      typeof i.is == "string"
                        ? s.createElement(n, { is: i.is })
                        : s.createElement(n);
                }
            }
            (t[Wt] = e), (t[ue] = i);
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                (s.child.return = s), (s = s.child);
                continue;
              }
              if (s === e) break t;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === e) break t;
                s = s.return;
              }
              (s.sibling.return = s.return), (s = s.sibling);
            }
            e.stateNode = t;
            t: switch ((Pt(t, n, i), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!i.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && on(e);
          }
        }
        return Rt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && on(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(o(166));
          if (((t = yn.current), Ea(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (i = null),
              (s = ae),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            (t[Wt] = e),
              (t = !!(
                t.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Qd(t.nodeValue, n)
              )),
              t || $n(e);
          } else (t = Rs(t).createTextNode(i)), (t[Wt] = e), (e.stateNode = t);
        }
        return Rt(e), null;
      case 13:
        if (
          ((i = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Ea(e)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(o(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(o(317));
              s[Wt] = e;
            } else
              Da(),
                !(e.flags & 128) && (e.memoizedState = null),
                (e.flags |= 4);
            Rt(e), (s = !1);
          } else je !== null && (qo(je), (je = null)), (s = !0);
          if (!s) return e.flags & 256 ? (Ie(e), e) : (Ie(e), null);
        }
        if ((Ie(e), e.flags & 128)) return (e.lanes = n), e;
        if (
          ((n = i !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          (i = e.child),
            (s = null),
            i.alternate !== null &&
              i.alternate.memoizedState !== null &&
              i.alternate.memoizedState.cachePool !== null &&
              (s = i.alternate.memoizedState.cachePool.pool);
          var r = null;
          i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (r = i.memoizedState.cachePool.pool),
            r !== s && (i.flags |= 2048);
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          ys(e, e.updateQueue),
          Rt(e),
          null
        );
      case 4:
        return gi(), t === null && Wo(e.stateNode.containerInfo), Rt(e), null;
      case 10:
        return an(e.type), Rt(e), null;
      case 19:
        if ((jt(Yt), (s = e.memoizedState), s === null)) return Rt(e), null;
        if (((i = (e.flags & 128) !== 0), (r = s.rendering), r === null))
          if (i) Za(s, !1);
          else {
            if (zt !== 0 || (t !== null && t.flags & 128))
              for (t = e.child; t !== null; ) {
                if (((r = Il(t)), r !== null)) {
                  for (
                    e.flags |= 128,
                      Za(s, !1),
                      t = r.updateQueue,
                      e.updateQueue = t,
                      ys(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    vd(n, t), (n = n.sibling);
                  return Mt(Yt, (Yt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            s.tail !== null &&
              Ye() > gs &&
              ((e.flags |= 128), (i = !0), Za(s, !1), (e.lanes = 4194304));
          }
        else {
          if (!i)
            if (((t = Il(r)), t !== null)) {
              if (
                ((e.flags |= 128),
                (i = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ys(e, t),
                Za(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !r.alternate &&
                  !pt)
              )
                return Rt(e), null;
            } else
              2 * Ye() - s.renderingStartTime > gs &&
                n !== 536870912 &&
                ((e.flags |= 128), (i = !0), Za(s, !1), (e.lanes = 4194304));
          s.isBackwards
            ? ((r.sibling = e.child), (e.child = r))
            : ((t = s.last),
              t !== null ? (t.sibling = r) : (e.child = r),
              (s.last = r));
        }
        return s.tail !== null
          ? ((e = s.tail),
            (s.rendering = e),
            (s.tail = e.sibling),
            (s.renderingStartTime = Ye()),
            (e.sibling = null),
            (t = Yt.current),
            Mt(Yt, i ? (t & 1) | 2 : t & 1),
            e)
          : (Rt(e), null);
      case 22:
      case 23:
        return (
          Ie(e),
          Lu(),
          (i = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (e.flags |= 8192)
            : i && (e.flags |= 8192),
          i
            ? n & 536870912 &&
              !(e.flags & 128) &&
              (Rt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Rt(e),
          (n = e.updateQueue),
          n !== null && ys(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (i = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          i !== n && (e.flags |= 2048),
          t !== null && jt(ti),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          an(Gt),
          Rt(e),
          null
        );
      case 25:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function Xg(t, e) {
    switch ((Bu(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          an(Gt),
          gi(),
          (t = e.flags),
          t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 26:
      case 27:
      case 5:
        return Ol(e), null;
      case 13:
        if (
          (Ie(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(o(340));
          Da();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return jt(Yt), null;
      case 4:
        return gi(), null;
      case 10:
        return an(e.type), null;
      case 22:
      case 23:
        return (
          Ie(e),
          Lu(),
          t !== null && jt(ti),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return an(Gt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Td(t, e) {
    switch ((Bu(e), e.tag)) {
      case 3:
        an(Gt), gi();
        break;
      case 26:
      case 27:
      case 5:
        Ol(e);
        break;
      case 4:
        gi();
        break;
      case 13:
        Ie(e);
        break;
      case 19:
        jt(Yt);
        break;
      case 10:
        an(e.type);
        break;
      case 22:
      case 23:
        Ie(e), Lu(), t !== null && jt(ti);
        break;
      case 24:
        an(Gt);
    }
  }
  var Qg = {
      getCacheForType: function (t) {
        var e = $t(Gt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    Zg = typeof WeakMap == "function" ? WeakMap : Map,
    Ot = 0,
    xt = null,
    ct = null,
    dt = 0,
    Et = 0,
    pe = null,
    rn = !1,
    Xi = !1,
    Uo = !1,
    cn = 0,
    zt = 0,
    Un = 0,
    ri = 0,
    Bo = 0,
    ze = 0,
    Qi = 0,
    Ka = null,
    Ze = null,
    No = !1,
    jo = 0,
    gs = 1 / 0,
    vs = null,
    Bn = null,
    Ss = !1,
    ci = null,
    ka = 0,
    Ho = 0,
    Lo = null,
    Ja = 0,
    wo = null;
  function ye() {
    if (Ot & 2 && dt !== 0) return dt & -dt;
    if (Q.T !== null) {
      var t = Ni;
      return t !== 0 ? t : ko();
    }
    return Yc();
  }
  function Ad() {
    ze === 0 && (ze = !(dt & 536870912) || pt ? jc() : 536870912);
    var t = Re.current;
    return t !== null && (t.flags |= 32), ze;
  }
  function le(t, e, n) {
    ((t === xt && Et === 2) || t.cancelPendingCommit !== null) &&
      (Zi(t, 0), fn(t, dt, ze, !1)),
      ha(t, n),
      (!(Ot & 2) || t !== xt) &&
        (t === xt && (!(Ot & 2) && (ri |= n), zt === 4 && fn(t, dt, ze, !1)),
        Ke(t));
  }
  function xd(t, e, n) {
    if (Ot & 6) throw Error(o(327));
    var i = (!n && (e & 60) === 0 && (e & t.expiredLanes) === 0) || fa(t, e),
      s = i ? Jg(t, e) : Xo(t, e, !0),
      r = i;
    do {
      if (s === 0) {
        Xi && !i && fn(t, e, 0, !1);
        break;
      } else if (s === 6) fn(t, e, 0, !rn);
      else {
        if (((n = t.current.alternate), r && !Kg(n))) {
          (s = Xo(t, e, !1)), (r = !1);
          continue;
        }
        if (s === 2) {
          if (((r = e), t.errorRecoveryDisabledLanes & r)) var f = 0;
          else
            (f = t.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            e = f;
            t: {
              var g = t;
              s = Ka;
              var S = g.current.memoizedState.isDehydrated;
              if ((S && (Zi(g, f).flags |= 256), (f = Xo(g, f, !1)), f !== 2)) {
                if (Uo && !S) {
                  (g.errorRecoveryDisabledLanes |= r), (ri |= r), (s = 4);
                  break t;
                }
                (r = Ze), (Ze = s), r !== null && qo(r);
              }
              s = f;
            }
            if (((r = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          Zi(t, 0), fn(t, e, 0, !0);
          break;
        }
        t: {
          switch (((i = t), s)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194176) === e) {
                fn(i, e, ze, !rn);
                break t;
              }
              break;
            case 2:
              Ze = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if (
            ((i.finishedWork = n),
            (i.finishedLanes = e),
            (e & 62914560) === e && ((r = jo + 300 - Ye()), 10 < r))
          ) {
            if ((fn(i, e, ze, !rn), _l(i, 0) !== 0)) break t;
            i.timeoutHandle = kd(
              Ed.bind(null, i, n, Ze, vs, No, e, ze, ri, Qi, rn, 2, -0, 0),
              r
            );
            break t;
          }
          Ed(i, n, Ze, vs, No, e, ze, ri, Qi, rn, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ke(t);
  }
  function qo(t) {
    Ze === null ? (Ze = t) : Ze.push.apply(Ze, t);
  }
  function Ed(t, e, n, i, s, r, f, g, S, E, V, U, R) {
    var C = e.subtreeFlags;
    if (
      (C & 8192 || (C & 16785408) === 16785408) &&
      ((tl = { stylesheets: null, count: 0, unsuspend: Rv }),
      md(e),
      (e = Cv()),
      e !== null)
    ) {
      (t.cancelPendingCommit = e(zd.bind(null, t, n, i, s, f, g, S, 1, U, R))),
        fn(t, r, f, !E);
      return;
    }
    zd(t, n, i, s, f, g, S, V, U, R);
  }
  function Kg(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var s = n[i],
            r = s.getSnapshot;
          s = s.value;
          try {
            if (!he(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function fn(t, e, n, i) {
    (e &= ~Bo),
      (e &= ~ri),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      i && (t.warmLanes |= e),
      (i = t.expirationTimes);
    for (var s = e; 0 < s; ) {
      var r = 31 - fe(s),
        f = 1 << r;
      (i[r] = -1), (s &= ~f);
    }
    n !== 0 && Lc(t, n, e);
  }
  function bs() {
    return Ot & 6 ? !0 : (Pa(0), !1);
  }
  function Yo() {
    if (ct !== null) {
      if (Et === 0) var t = ct.return;
      else (t = ct), (nn = li = null), Ku(t), (Ui = null), (Ca = 0), (t = ct);
      for (; t !== null; ) Td(t.alternate, t), (t = t.return);
      ct = null;
    }
  }
  function Zi(t, e) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), fv(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      Yo(),
      (xt = t),
      (ct = n = _n(t.current, null)),
      (dt = e),
      (Et = 0),
      (pe = null),
      (rn = !1),
      (Xi = fa(t, e)),
      (Uo = !1),
      (Qi = ze = Bo = ri = Un = zt = 0),
      (Ze = Ka = null),
      (No = !1),
      e & 8 && (e |= e & 32);
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= e; 0 < i; ) {
        var s = 31 - fe(i),
          r = 1 << s;
        (e |= t[s]), (i &= ~r);
      }
    return (cn = e), Ql(), n;
  }
  function Dd(t, e) {
    (ot = null),
      (Q.H = Qe),
      e === Ra
        ? ((e = qf()), (Et = 3))
        : e === Hf
        ? ((e = qf()), (Et = 4))
        : (Et =
            e === Lh
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (pe = e),
      ct === null && ((zt = 1), cs(t, Ee(e, t.current)));
  }
  function Md() {
    var t = Q.H;
    return (Q.H = Qe), t === null ? Qe : t;
  }
  function Rd() {
    var t = Q.A;
    return (Q.A = Qg), t;
  }
  function Go() {
    (zt = 4),
      rn || ((dt & 4194176) !== dt && Re.current !== null) || (Xi = !0),
      (!(Un & 134217727) && !(ri & 134217727)) ||
        xt === null ||
        fn(xt, dt, ze, !1);
  }
  function Xo(t, e, n) {
    var i = Ot;
    Ot |= 2;
    var s = Md(),
      r = Rd();
    (xt !== t || dt !== e) && ((vs = null), Zi(t, e)), (e = !1);
    var f = zt;
    t: do
      try {
        if (Et !== 0 && ct !== null) {
          var g = ct,
            S = pe;
          switch (Et) {
            case 8:
              Yo(), (f = 6);
              break t;
            case 3:
            case 2:
            case 6:
              Re.current === null && (e = !0);
              var E = Et;
              if (((Et = 0), (pe = null), Ki(t, g, S, E), n && Xi)) {
                f = 0;
                break t;
              }
              break;
            default:
              (E = Et), (Et = 0), (pe = null), Ki(t, g, S, E);
          }
        }
        kg(), (f = zt);
        break;
      } catch (V) {
        Dd(t, V);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (nn = li = null),
      (Ot = i),
      (Q.H = s),
      (Q.A = r),
      ct === null && ((xt = null), (dt = 0), Ql()),
      f
    );
  }
  function kg() {
    for (; ct !== null; ) Od(ct);
  }
  function Jg(t, e) {
    var n = Ot;
    Ot |= 2;
    var i = Md(),
      s = Rd();
    xt !== t || dt !== e
      ? ((vs = null), (gs = Ye() + 500), Zi(t, e))
      : (Xi = fa(t, e));
    t: do
      try {
        if (Et !== 0 && ct !== null) {
          e = ct;
          var r = pe;
          e: switch (Et) {
            case 1:
              (Et = 0), (pe = null), Ki(t, e, r, 1);
              break;
            case 2:
              if (Lf(r)) {
                (Et = 0), (pe = null), Cd(e);
                break;
              }
              (e = function () {
                Et === 2 && xt === t && (Et = 7), Ke(t);
              }),
                r.then(e, e);
              break t;
            case 3:
              Et = 7;
              break t;
            case 4:
              Et = 5;
              break t;
            case 7:
              Lf(r)
                ? ((Et = 0), (pe = null), Cd(e))
                : ((Et = 0), (pe = null), Ki(t, e, r, 7));
              break;
            case 5:
              var f = null;
              switch (ct.tag) {
                case 26:
                  f = ct.memoizedState;
                case 5:
                case 27:
                  var g = ct;
                  if (!f || am(f)) {
                    (Et = 0), (pe = null);
                    var S = g.sibling;
                    if (S !== null) ct = S;
                    else {
                      var E = g.return;
                      E !== null ? ((ct = E), Ts(E)) : (ct = null);
                    }
                    break e;
                  }
              }
              (Et = 0), (pe = null), Ki(t, e, r, 5);
              break;
            case 6:
              (Et = 0), (pe = null), Ki(t, e, r, 6);
              break;
            case 8:
              Yo(), (zt = 6);
              break t;
            default:
              throw Error(o(462));
          }
        }
        Pg();
        break;
      } catch (V) {
        Dd(t, V);
      }
    while (!0);
    return (
      (nn = li = null),
      (Q.H = i),
      (Q.A = s),
      (Ot = n),
      ct !== null ? 0 : ((xt = null), (dt = 0), Ql(), zt)
    );
  }
  function Pg() {
    for (; ct !== null && !g0(); ) Od(ct);
  }
  function Od(t) {
    var e = Fh(t.alternate, t, cn);
    (t.memoizedProps = t.pendingProps), e === null ? Ts(t) : (ct = e);
  }
  function Cd(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Qh(n, e, e.pendingProps, e.type, void 0, dt);
        break;
      case 11:
        e = Qh(n, e, e.pendingProps, e.type.render, e.ref, dt);
        break;
      case 5:
        Ku(e);
      default:
        Td(n, e), (e = ct = vd(e, cn)), (e = Fh(n, e, cn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Ts(t) : (ct = e);
  }
  function Ki(t, e, n, i) {
    (nn = li = null), Ku(e), (Ui = null), (Ca = 0);
    var s = e.return;
    try {
      if (Hg(t, s, e, n, dt)) {
        (zt = 1), cs(t, Ee(n, t.current)), (ct = null);
        return;
      }
    } catch (r) {
      if (s !== null) throw ((ct = s), r);
      (zt = 1), cs(t, Ee(n, t.current)), (ct = null);
      return;
    }
    e.flags & 32768
      ? (pt || i === 1
          ? (t = !0)
          : Xi || dt & 536870912
          ? (t = !1)
          : ((rn = t = !0),
            (i === 2 || i === 3 || i === 6) &&
              ((i = Re.current),
              i !== null && i.tag === 13 && (i.flags |= 16384))),
        Vd(e, t))
      : Ts(e);
  }
  function Ts(t) {
    var e = t;
    do {
      if (e.flags & 32768) {
        Vd(e, rn);
        return;
      }
      t = e.return;
      var n = Gg(e.alternate, e, cn);
      if (n !== null) {
        ct = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ct = e;
        return;
      }
      ct = e = t;
    } while (e !== null);
    zt === 0 && (zt = 5);
  }
  function Vd(t, e) {
    do {
      var n = Xg(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (ct = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ct = t;
        return;
      }
      ct = t = n;
    } while (t !== null);
    (zt = 6), (ct = null);
  }
  function zd(t, e, n, i, s, r, f, g, S, E) {
    var V = Q.T,
      U = Z.p;
    try {
      (Z.p = 2), (Q.T = null), Fg(t, e, n, i, U, s, r, f, g, S, E);
    } finally {
      (Q.T = V), (Z.p = U);
    }
  }
  function Fg(t, e, n, i, s, r, f, g) {
    do ki();
    while (ci !== null);
    if (Ot & 6) throw Error(o(327));
    var S = t.finishedWork;
    if (((i = t.finishedLanes), S === null)) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), S === t.current))
      throw Error(o(177));
    (t.callbackNode = null),
      (t.callbackPriority = 0),
      (t.cancelPendingCommit = null);
    var E = S.lanes | S.childLanes;
    if (
      ((E |= zu),
      O0(t, i, E, r, f, g),
      t === xt && ((ct = xt = null), (dt = 0)),
      (!(S.subtreeFlags & 10256) && !(S.flags & 10256)) ||
        Ss ||
        ((Ss = !0),
        (Ho = E),
        (Lo = n),
        tv(Cl, function () {
          return ki(), null;
        })),
      (n = (S.flags & 15990) !== 0),
      S.subtreeFlags & 15990 || n
        ? ((n = Q.T),
          (Q.T = null),
          (r = Z.p),
          (Z.p = 2),
          (f = Ot),
          (Ot |= 4),
          wg(t, S),
          fd(S, t),
          bg(er, t.containerInfo),
          (Us = !!tr),
          (er = tr = null),
          (t.current = S),
          ud(t, S.alternate, S),
          v0(),
          (Ot = f),
          (Z.p = r),
          (Q.T = n))
        : (t.current = S),
      Ss ? ((Ss = !1), (ci = t), (ka = i)) : _d(t, E),
      (E = t.pendingLanes),
      E === 0 && (Bn = null),
      x0(S.stateNode),
      Ke(t),
      e !== null)
    )
      for (s = t.onRecoverableError, S = 0; S < e.length; S++)
        (E = e[S]), s(E.value, { componentStack: E.stack });
    return (
      ka & 3 && ki(),
      (E = t.pendingLanes),
      i & 4194218 && E & 42
        ? t === wo
          ? Ja++
          : ((Ja = 0), (wo = t))
        : (Ja = 0),
      Pa(0),
      null
    );
  }
  function _d(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), za(e)));
  }
  function ki() {
    if (ci !== null) {
      var t = ci,
        e = Ho;
      Ho = 0;
      var n = qc(ka),
        i = Q.T,
        s = Z.p;
      try {
        if (((Z.p = 32 > n ? 32 : n), (Q.T = null), ci === null)) var r = !1;
        else {
          (n = Lo), (Lo = null);
          var f = ci,
            g = ka;
          if (((ci = null), (ka = 0), Ot & 6)) throw Error(o(331));
          var S = Ot;
          if (
            ((Ot |= 4),
            yd(f.current),
            dd(f, f.current, g, n),
            (Ot = S),
            Pa(0, !1),
            ce && typeof ce.onPostCommitFiberRoot == "function")
          )
            try {
              ce.onPostCommitFiberRoot(ca, f);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (Z.p = s), (Q.T = i), _d(t, e);
      }
    }
    return !1;
  }
  function Ud(t, e, n) {
    (e = Ee(n, e)),
      (e = so(t.stateNode, e, 2)),
      (t = On(t, e, 2)),
      t !== null && (ha(t, 2), Ke(t));
  }
  function At(t, e, n) {
    if (t.tag === 3) Ud(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Ud(e, t, n);
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Bn === null || !Bn.has(i)))
          ) {
            (t = Ee(n, t)),
              (n = jh(2)),
              (i = On(e, n, 2)),
              i !== null && (Hh(n, i, e, t), ha(i, 2), Ke(i));
            break;
          }
        }
        e = e.return;
      }
  }
  function Qo(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new Zg();
      var s = new Set();
      i.set(e, s);
    } else (s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s));
    s.has(n) ||
      ((Uo = !0), s.add(n), (t = Wg.bind(null, t, e, n)), e.then(t, t));
  }
  function Wg(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      xt === t &&
        (dt & n) === n &&
        (zt === 4 || (zt === 3 && (dt & 62914560) === dt && 300 > Ye() - jo)
          ? !(Ot & 2) && Zi(t, 0)
          : (Bo |= n),
        Qi === dt && (Qi = 0)),
      Ke(t);
  }
  function Bd(t, e) {
    e === 0 && (e = Hc()), (t = bn(t, e)), t !== null && (ha(t, e), Ke(t));
  }
  function $g(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), Bd(t, n);
  }
  function Ig(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var i = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    i !== null && i.delete(e), Bd(t, n);
  }
  function tv(t, e) {
    return uu(t, e);
  }
  var As = null,
    Ji = null,
    Zo = !1,
    xs = !1,
    Ko = !1,
    fi = 0;
  function Ke(t) {
    t !== Ji &&
      t.next === null &&
      (Ji === null ? (As = Ji = t) : (Ji = Ji.next = t)),
      (xs = !0),
      Zo || ((Zo = !0), nv(ev));
  }
  function Pa(t, e) {
    if (!Ko && xs) {
      Ko = !0;
      do
        for (var n = !1, i = As; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var f = i.suspendedLanes,
                g = i.pingedLanes;
              (r = (1 << (31 - fe(42 | t) + 1)) - 1),
                (r &= s & ~(f & ~g)),
                (r = r & 201326677 ? (r & 201326677) | 1 : r ? r | 2 : 0);
            }
            r !== 0 && ((n = !0), Hd(i, r));
          } else
            (r = dt),
              (r = _l(i, i === xt ? r : 0)),
              !(r & 3) || fa(i, r) || ((n = !0), Hd(i, r));
          i = i.next;
        }
      while (n);
      Ko = !1;
    }
  }
  function ev() {
    xs = Zo = !1;
    var t = 0;
    fi !== 0 && (cv() && (t = fi), (fi = 0));
    for (var e = Ye(), n = null, i = As; i !== null; ) {
      var s = i.next,
        r = Nd(i, e);
      r === 0
        ? ((i.next = null),
          n === null ? (As = s) : (n.next = s),
          s === null && (Ji = n))
        : ((n = i), (t !== 0 || r & 3) && (xs = !0)),
        (i = s);
    }
    Pa(t);
  }
  function Nd(t, e) {
    for (
      var n = t.suspendedLanes,
        i = t.pingedLanes,
        s = t.expirationTimes,
        r = t.pendingLanes & -62914561;
      0 < r;

    ) {
      var f = 31 - fe(r),
        g = 1 << f,
        S = s[f];
      S === -1
        ? (!(g & n) || g & i) && (s[f] = R0(g, e))
        : S <= e && (t.expiredLanes |= g),
        (r &= ~g);
    }
    if (
      ((e = xt),
      (n = dt),
      (n = _l(t, t === e ? n : 0)),
      (i = t.callbackNode),
      n === 0 || (t === e && Et === 2) || t.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && ou(i),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if (!(n & 3) || fa(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((i !== null && ou(i), qc(n))) {
        case 2:
        case 8:
          n = Bc;
          break;
        case 32:
          n = Cl;
          break;
        case 268435456:
          n = Nc;
          break;
        default:
          n = Cl;
      }
      return (
        (i = jd.bind(null, t)),
        (n = uu(n, i)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      i !== null && i !== null && ou(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function jd(t, e) {
    var n = t.callbackNode;
    if (ki() && t.callbackNode !== n) return null;
    var i = dt;
    return (
      (i = _l(t, t === xt ? i : 0)),
      i === 0
        ? null
        : (xd(t, i, e),
          Nd(t, Ye()),
          t.callbackNode != null && t.callbackNode === n
            ? jd.bind(null, t)
            : null)
    );
  }
  function Hd(t, e) {
    if (ki()) return null;
    xd(t, e, !0);
  }
  function nv(t) {
    hv(function () {
      Ot & 6 ? uu(Uc, t) : t();
    });
  }
  function ko() {
    return fi === 0 && (fi = jc()), fi;
  }
  function Ld(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Hl("" + t);
  }
  function wd(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function iv(t, e, n, i, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var r = Ld((s[ue] || null).action),
        f = i.submitter;
      f &&
        ((e = (e = f[ue] || null)
          ? Ld(e.formAction)
          : f.getAttribute("formAction")),
        e !== null && ((r = e), (f = null)));
      var g = new Yl("action", "action", null, i, s);
      t.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (fi !== 0) {
                  var S = f ? wd(s, f) : new FormData(s);
                  eo(
                    n,
                    { pending: !0, data: S, method: s.method, action: r },
                    null,
                    S
                  );
                }
              } else
                typeof r == "function" &&
                  (g.preventDefault(),
                  (S = f ? wd(s, f) : new FormData(s)),
                  eo(
                    n,
                    { pending: !0, data: S, method: s.method, action: r },
                    r,
                    S
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var Jo = 0; Jo < zf.length; Jo++) {
    var Po = zf[Jo],
      av = Po.toLowerCase(),
      lv = Po[0].toUpperCase() + Po.slice(1);
    Ne(av, "on" + lv);
  }
  Ne(Mf, "onAnimationEnd"),
    Ne(Rf, "onAnimationIteration"),
    Ne(Of, "onAnimationStart"),
    Ne("dblclick", "onDoubleClick"),
    Ne("focusin", "onFocus"),
    Ne("focusout", "onBlur"),
    Ne(Ag, "onTransitionRun"),
    Ne(xg, "onTransitionStart"),
    Ne(Eg, "onTransitionCancel"),
    Ne(Cf, "onTransitionEnd"),
    Ti("onMouseEnter", ["mouseout", "mouseover"]),
    Ti("onMouseLeave", ["mouseout", "mouseover"]),
    Ti("onPointerEnter", ["pointerout", "pointerover"]),
    Ti("onPointerLeave", ["pointerout", "pointerover"]),
    Kn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Kn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Kn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Kn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Kn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Fa =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    sv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Fa)
    );
  function qd(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
        s = i.event;
      i = i.listeners;
      t: {
        var r = void 0;
        if (e)
          for (var f = i.length - 1; 0 <= f; f--) {
            var g = i[f],
              S = g.instance,
              E = g.currentTarget;
            if (((g = g.listener), S !== r && s.isPropagationStopped()))
              break t;
            (r = g), (s.currentTarget = E);
            try {
              r(s);
            } catch (V) {
              rs(V);
            }
            (s.currentTarget = null), (r = S);
          }
        else
          for (f = 0; f < i.length; f++) {
            if (
              ((g = i[f]),
              (S = g.instance),
              (E = g.currentTarget),
              (g = g.listener),
              S !== r && s.isPropagationStopped())
            )
              break t;
            (r = g), (s.currentTarget = E);
            try {
              r(s);
            } catch (V) {
              rs(V);
            }
            (s.currentTarget = null), (r = S);
          }
      }
    }
  }
  function ft(t, e) {
    var n = e[cu];
    n === void 0 && (n = e[cu] = new Set());
    var i = t + "__bubble";
    n.has(i) || (Yd(e, t, 2, !1), n.add(i));
  }
  function Fo(t, e, n) {
    var i = 0;
    e && (i |= 4), Yd(n, t, i, e);
  }
  var Es = "_reactListening" + Math.random().toString(36).slice(2);
  function Wo(t) {
    if (!t[Es]) {
      (t[Es] = !0),
        Xc.forEach(function (n) {
          n !== "selectionchange" && (sv.has(n) || Fo(n, !1, t), Fo(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Es] || ((e[Es] = !0), Fo("selectionchange", !1, e));
    }
  }
  function Yd(t, e, n, i) {
    switch (cm(e)) {
      case 2:
        var s = _v;
        break;
      case 8:
        s = Uv;
        break;
      default:
        s = cr;
    }
    (n = s.bind(null, e, n, t)),
      (s = void 0),
      !vu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
        ? t.addEventListener(e, n, { passive: s })
        : t.addEventListener(e, n, !1);
  }
  function $o(t, e, n, i, s) {
    var r = i;
    if (!(e & 1) && !(e & 2) && i !== null)
      t: for (;;) {
        if (i === null) return;
        var f = i.tag;
        if (f === 3 || f === 4) {
          var g = i.stateNode.containerInfo;
          if (g === s || (g.nodeType === 8 && g.parentNode === s)) break;
          if (f === 4)
            for (f = i.return; f !== null; ) {
              var S = f.tag;
              if (
                (S === 3 || S === 4) &&
                ((S = f.stateNode.containerInfo),
                S === s || (S.nodeType === 8 && S.parentNode === s))
              )
                return;
              f = f.return;
            }
          for (; g !== null; ) {
            if (((f = Zn(g)), f === null)) return;
            if (((S = f.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              i = r = f;
              continue t;
            }
            g = g.parentNode;
          }
        }
        i = i.return;
      }
    ef(function () {
      var E = r,
        V = yu(n),
        U = [];
      t: {
        var R = Vf.get(t);
        if (R !== void 0) {
          var C = Yl,
            k = t;
          switch (t) {
            case "keypress":
              if (wl(n) === 0) break t;
            case "keydown":
            case "keyup":
              C = I0;
              break;
            case "focusin":
              (k = "focus"), (C = Au);
              break;
            case "focusout":
              (k = "blur"), (C = Au);
              break;
            case "beforeblur":
            case "afterblur":
              C = Au;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = lf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = Y0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = ng;
              break;
            case Mf:
            case Rf:
            case Of:
              C = Q0;
              break;
            case Cf:
              C = ag;
              break;
            case "scroll":
            case "scrollend":
              C = w0;
              break;
            case "wheel":
              C = sg;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = K0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = uf;
              break;
            case "toggle":
            case "beforetoggle":
              C = og;
          }
          var at = (e & 4) !== 0,
            _t = !at && (t === "scroll" || t === "scrollend"),
            D = at ? (R !== null ? R + "Capture" : null) : R;
          at = [];
          for (var x = E, M; x !== null; ) {
            var z = x;
            if (
              ((M = z.stateNode),
              (z = z.tag),
              (z !== 5 && z !== 26 && z !== 27) ||
                M === null ||
                D === null ||
                ((z = pa(x, D)), z != null && at.push(Wa(x, z, M))),
              _t)
            )
              break;
            x = x.return;
          }
          0 < at.length &&
            ((R = new C(R, k, null, n, V)),
            U.push({ event: R, listeners: at }));
        }
      }
      if (!(e & 7)) {
        t: {
          if (
            ((R = t === "mouseover" || t === "pointerover"),
            (C = t === "mouseout" || t === "pointerout"),
            R &&
              n !== pu &&
              (k = n.relatedTarget || n.fromElement) &&
              (Zn(k) || k[vi]))
          )
            break t;
          if (
            (C || R) &&
            ((R =
              V.window === V
                ? V
                : (R = V.ownerDocument)
                ? R.defaultView || R.parentWindow
                : window),
            C
              ? ((k = n.relatedTarget || n.toElement),
                (C = E),
                (k = k ? Zn(k) : null),
                k !== null &&
                  ((_t = P(k)),
                  (at = k.tag),
                  k !== _t || (at !== 5 && at !== 27 && at !== 6)) &&
                  (k = null))
              : ((C = null), (k = E)),
            C !== k)
          ) {
            if (
              ((at = lf),
              (z = "onMouseLeave"),
              (D = "onMouseEnter"),
              (x = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((at = uf),
                (z = "onPointerLeave"),
                (D = "onPointerEnter"),
                (x = "pointer")),
              (_t = C == null ? R : ma(C)),
              (M = k == null ? R : ma(k)),
              (R = new at(z, x + "leave", C, n, V)),
              (R.target = _t),
              (R.relatedTarget = M),
              (z = null),
              Zn(V) === E &&
                ((at = new at(D, x + "enter", k, n, V)),
                (at.target = M),
                (at.relatedTarget = _t),
                (z = at)),
              (_t = z),
              C && k)
            )
              e: {
                for (at = C, D = k, x = 0, M = at; M; M = Pi(M)) x++;
                for (M = 0, z = D; z; z = Pi(z)) M++;
                for (; 0 < x - M; ) (at = Pi(at)), x--;
                for (; 0 < M - x; ) (D = Pi(D)), M--;
                for (; x--; ) {
                  if (at === D || (D !== null && at === D.alternate)) break e;
                  (at = Pi(at)), (D = Pi(D));
                }
                at = null;
              }
            else at = null;
            C !== null && Gd(U, R, C, at, !1),
              k !== null && _t !== null && Gd(U, _t, k, at, !0);
          }
        }
        t: {
          if (
            ((R = E ? ma(E) : window),
            (C = R.nodeName && R.nodeName.toLowerCase()),
            C === "select" || (C === "input" && R.type === "file"))
          )
            var K = pf;
          else if (df(R))
            if (yf) K = vg;
            else {
              K = yg;
              var rt = pg;
            }
          else
            (C = R.nodeName),
              !C ||
              C.toLowerCase() !== "input" ||
              (R.type !== "checkbox" && R.type !== "radio")
                ? E && mu(E.elementType) && (K = pf)
                : (K = gg);
          if (K && (K = K(t, E))) {
            mf(U, K, n, V);
            break t;
          }
          rt && rt(t, R, E),
            t === "focusout" &&
              E &&
              R.type === "number" &&
              E.memoizedProps.value != null &&
              du(R, "number", R.value);
        }
        switch (((rt = E ? ma(E) : window), t)) {
          case "focusin":
            (df(rt) || rt.contentEditable === "true") &&
              ((Ri = rt), (Ou = E), (xa = null));
            break;
          case "focusout":
            xa = Ou = Ri = null;
            break;
          case "mousedown":
            Cu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Cu = !1), Ef(U, n, V);
            break;
          case "selectionchange":
            if (Tg) break;
          case "keydown":
          case "keyup":
            Ef(U, n, V);
        }
        var W;
        if (Eu)
          t: {
            switch (t) {
              case "compositionstart":
                var tt = "onCompositionStart";
                break t;
              case "compositionend":
                tt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                tt = "onCompositionUpdate";
                break t;
            }
            tt = void 0;
          }
        else
          Mi
            ? ff(t, n) && (tt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (tt = "onCompositionStart");
        tt &&
          (of &&
            n.locale !== "ko" &&
            (Mi || tt !== "onCompositionStart"
              ? tt === "onCompositionEnd" && Mi && (W = nf())
              : ((Sn = V),
                (Su = "value" in Sn ? Sn.value : Sn.textContent),
                (Mi = !0))),
          (rt = Ds(E, tt)),
          0 < rt.length &&
            ((tt = new sf(tt, t, null, n, V)),
            U.push({ event: tt, listeners: rt }),
            W ? (tt.data = W) : ((W = hf(n)), W !== null && (tt.data = W)))),
          (W = cg ? fg(t, n) : hg(t, n)) &&
            ((tt = Ds(E, "onBeforeInput")),
            0 < tt.length &&
              ((rt = new sf("onBeforeInput", "beforeinput", null, n, V)),
              U.push({ event: rt, listeners: tt }),
              (rt.data = W))),
          iv(U, t, E, n, V);
      }
      qd(U, e);
    });
  }
  function Wa(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Ds(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var s = t,
        r = s.stateNode;
      (s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          r === null ||
          ((s = pa(t, n)),
          s != null && i.unshift(Wa(t, s, r)),
          (s = pa(t, e)),
          s != null && i.push(Wa(t, s, r))),
        (t = t.return);
    }
    return i;
  }
  function Pi(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Gd(t, e, n, i, s) {
    for (var r = e._reactName, f = []; n !== null && n !== i; ) {
      var g = n,
        S = g.alternate,
        E = g.stateNode;
      if (((g = g.tag), S !== null && S === i)) break;
      (g !== 5 && g !== 26 && g !== 27) ||
        E === null ||
        ((S = E),
        s
          ? ((E = pa(n, r)), E != null && f.unshift(Wa(n, E, S)))
          : s || ((E = pa(n, r)), E != null && f.push(Wa(n, E, S)))),
        (n = n.return);
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var uv = /\r\n?/g,
    ov = /\u0000|\uFFFD/g;
  function Xd(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        uv,
        `
`
      )
      .replace(ov, "");
  }
  function Qd(t, e) {
    return (e = Xd(e)), Xd(t) === e;
  }
  function Ms() {}
  function Tt(t, e, n, i, s, r) {
    switch (n) {
      case "children":
        typeof i == "string"
          ? e === "body" || (e === "textarea" && i === "") || xi(t, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            e !== "body" &&
            xi(t, "" + i);
        break;
      case "className":
        Bl(t, "class", i);
        break;
      case "tabIndex":
        Bl(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Bl(t, n, i);
        break;
      case "style":
        Ic(t, i, r);
        break;
      case "data":
        if (e !== "object") {
          Bl(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (i = Hl("" + i)), t.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" &&
            (n === "formAction"
              ? (e !== "input" && Tt(t, e, "name", s.name, s, null),
                Tt(t, e, "formEncType", s.formEncType, s, null),
                Tt(t, e, "formMethod", s.formMethod, s, null),
                Tt(t, e, "formTarget", s.formTarget, s, null))
              : (Tt(t, e, "encType", s.encType, s, null),
                Tt(t, e, "method", s.method, s, null),
                Tt(t, e, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (i = Hl("" + i)), t.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (t.onclick = Ms);
        break;
      case "onScroll":
        i != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        i != null && ft("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = Hl("" + i)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "" + i)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(n, "")
          : i !== !1 &&
            i != null &&
            typeof i != "function" &&
            typeof i != "symbol"
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(n)
          : t.setAttribute(n, i);
        break;
      case "popover":
        ft("beforetoggle", t), ft("toggle", t), Ul(t, "popover", i);
        break;
      case "xlinkActuate":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        Fe(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        Fe(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        Fe(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        Ul(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = H0.get(n) || n), Ul(t, n, i));
    }
  }
  function Io(t, e, n, i, s, r) {
    switch (n) {
      case "style":
        Ic(t, i, r);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? xi(t, i)
          : (typeof i == "number" || typeof i == "bigint") && xi(t, "" + i);
        break;
      case "onScroll":
        i != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        i != null && ft("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = Ms);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Qc.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (r = t[ue] || null),
              (r = r != null ? r[n] : null),
              typeof r == "function" && t.removeEventListener(e, r, s),
              typeof i == "function")
            ) {
              typeof r != "function" &&
                r !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, i, s);
              break t;
            }
            n in t
              ? (t[n] = i)
              : i === !0
              ? t.setAttribute(n, "")
              : Ul(t, n, i);
          }
    }
  }
  function Pt(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ft("error", t), ft("load", t);
        var i = !1,
          s = !1,
          r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var f = n[r];
            if (f != null)
              switch (r) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  Tt(t, e, r, f, n, null);
              }
          }
        s && Tt(t, e, "srcSet", n.srcSet, n, null),
          i && Tt(t, e, "src", n.src, n, null);
        return;
      case "input":
        ft("invalid", t);
        var g = (r = f = s = null),
          S = null,
          E = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var V = n[i];
            if (V != null)
              switch (i) {
                case "name":
                  s = V;
                  break;
                case "type":
                  f = V;
                  break;
                case "checked":
                  S = V;
                  break;
                case "defaultChecked":
                  E = V;
                  break;
                case "value":
                  r = V;
                  break;
                case "defaultValue":
                  g = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null) throw Error(o(137, e));
                  break;
                default:
                  Tt(t, e, i, V, n, null);
              }
          }
        Pc(t, r, g, S, E, f, s, !1), Nl(t);
        return;
      case "select":
        ft("invalid", t), (i = f = r = null);
        for (s in n)
          if (n.hasOwnProperty(s) && ((g = n[s]), g != null))
            switch (s) {
              case "value":
                r = g;
                break;
              case "defaultValue":
                f = g;
                break;
              case "multiple":
                i = g;
              default:
                Tt(t, e, s, g, n, null);
            }
        (e = r),
          (n = f),
          (t.multiple = !!i),
          e != null ? Ai(t, !!i, e, !1) : n != null && Ai(t, !!i, n, !0);
        return;
      case "textarea":
        ft("invalid", t), (r = s = i = null);
        for (f in n)
          if (n.hasOwnProperty(f) && ((g = n[f]), g != null))
            switch (f) {
              case "value":
                i = g;
                break;
              case "defaultValue":
                s = g;
                break;
              case "children":
                r = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(o(91));
                break;
              default:
                Tt(t, e, f, g, n, null);
            }
        Wc(t, i, s, r), Nl(t);
        return;
      case "option":
        for (S in n)
          if (n.hasOwnProperty(S) && ((i = n[S]), i != null))
            switch (S) {
              case "selected":
                t.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Tt(t, e, S, i, n, null);
            }
        return;
      case "dialog":
        ft("cancel", t), ft("close", t);
        break;
      case "iframe":
      case "object":
        ft("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Fa.length; i++) ft(Fa[i], t);
        break;
      case "image":
        ft("error", t), ft("load", t);
        break;
      case "details":
        ft("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ft("error", t), ft("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (E in n)
          if (n.hasOwnProperty(E) && ((i = n[E]), i != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                Tt(t, e, E, i, n, null);
            }
        return;
      default:
        if (mu(e)) {
          for (V in n)
            n.hasOwnProperty(V) &&
              ((i = n[V]), i !== void 0 && Io(t, e, V, i, n, void 0));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && ((i = n[g]), i != null && Tt(t, e, g, i, n, null));
  }
  function rv(t, e, n, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          r = null,
          f = null,
          g = null,
          S = null,
          E = null,
          V = null;
        for (C in n) {
          var U = n[C];
          if (n.hasOwnProperty(C) && U != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = U;
              default:
                i.hasOwnProperty(C) || Tt(t, e, C, null, i, U);
            }
        }
        for (var R in i) {
          var C = i[R];
          if (((U = n[R]), i.hasOwnProperty(R) && (C != null || U != null)))
            switch (R) {
              case "type":
                r = C;
                break;
              case "name":
                s = C;
                break;
              case "checked":
                E = C;
                break;
              case "defaultChecked":
                V = C;
                break;
              case "value":
                f = C;
                break;
              case "defaultValue":
                g = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(o(137, e));
                break;
              default:
                C !== U && Tt(t, e, R, C, i, U);
            }
        }
        hu(t, f, g, S, E, V, r, s);
        return;
      case "select":
        C = f = g = R = null;
        for (r in n)
          if (((S = n[r]), n.hasOwnProperty(r) && S != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                C = S;
              default:
                i.hasOwnProperty(r) || Tt(t, e, r, null, i, S);
            }
        for (s in i)
          if (
            ((r = i[s]),
            (S = n[s]),
            i.hasOwnProperty(s) && (r != null || S != null))
          )
            switch (s) {
              case "value":
                R = r;
                break;
              case "defaultValue":
                g = r;
                break;
              case "multiple":
                f = r;
              default:
                r !== S && Tt(t, e, s, r, i, S);
            }
        (e = g),
          (n = f),
          (i = C),
          R != null
            ? Ai(t, !!n, R, !1)
            : !!i != !!n &&
              (e != null ? Ai(t, !!n, e, !0) : Ai(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        C = R = null;
        for (g in n)
          if (
            ((s = n[g]),
            n.hasOwnProperty(g) && s != null && !i.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Tt(t, e, g, null, i, s);
            }
        for (f in i)
          if (
            ((s = i[f]),
            (r = n[f]),
            i.hasOwnProperty(f) && (s != null || r != null))
          )
            switch (f) {
              case "value":
                R = s;
                break;
              case "defaultValue":
                C = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(o(91));
                break;
              default:
                s !== r && Tt(t, e, f, s, i, r);
            }
        Fc(t, R, C);
        return;
      case "option":
        for (var k in n)
          if (
            ((R = n[k]),
            n.hasOwnProperty(k) && R != null && !i.hasOwnProperty(k))
          )
            switch (k) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Tt(t, e, k, null, i, R);
            }
        for (S in i)
          if (
            ((R = i[S]),
            (C = n[S]),
            i.hasOwnProperty(S) && R !== C && (R != null || C != null))
          )
            switch (S) {
              case "selected":
                t.selected =
                  R && typeof R != "function" && typeof R != "symbol";
                break;
              default:
                Tt(t, e, S, R, i, C);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var at in n)
          (R = n[at]),
            n.hasOwnProperty(at) &&
              R != null &&
              !i.hasOwnProperty(at) &&
              Tt(t, e, at, null, i, R);
        for (E in i)
          if (
            ((R = i[E]),
            (C = n[E]),
            i.hasOwnProperty(E) && R !== C && (R != null || C != null))
          )
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(o(137, e));
                break;
              default:
                Tt(t, e, E, R, i, C);
            }
        return;
      default:
        if (mu(e)) {
          for (var _t in n)
            (R = n[_t]),
              n.hasOwnProperty(_t) &&
                R !== void 0 &&
                !i.hasOwnProperty(_t) &&
                Io(t, e, _t, void 0, i, R);
          for (V in i)
            (R = i[V]),
              (C = n[V]),
              !i.hasOwnProperty(V) ||
                R === C ||
                (R === void 0 && C === void 0) ||
                Io(t, e, V, R, i, C);
          return;
        }
    }
    for (var D in n)
      (R = n[D]),
        n.hasOwnProperty(D) &&
          R != null &&
          !i.hasOwnProperty(D) &&
          Tt(t, e, D, null, i, R);
    for (U in i)
      (R = i[U]),
        (C = n[U]),
        !i.hasOwnProperty(U) ||
          R === C ||
          (R == null && C == null) ||
          Tt(t, e, U, R, i, C);
  }
  var tr = null,
    er = null;
  function Rs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Zd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Kd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function nr(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ir = null;
  function cv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === ir
        ? !1
        : ((ir = t), !0)
      : ((ir = null), !1);
  }
  var kd = typeof setTimeout == "function" ? setTimeout : void 0,
    fv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Jd = typeof Promise == "function" ? Promise : void 0,
    hv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Jd < "u"
        ? function (t) {
            return Jd.resolve(null).then(t).catch(dv);
          }
        : kd;
  function dv(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ar(t, e) {
    var n = e,
      i = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$")) {
          if (i === 0) {
            t.removeChild(s), ll(e);
            return;
          }
          i--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
      n = s;
    } while (n);
    ll(e);
  }
  function lr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          lr(n), fu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function mv(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[da])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((r = t.getAttribute("rel")),
                r === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                r !== s.rel ||
                t.getAttribute("href") !== (s.href == null ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((r = t.getAttribute("src")),
                (r !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  r &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === r) return t;
      } else return t;
      if (((t = Le(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function pv(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Le(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Le(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  function Pd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Fd(t, e, n) {
    switch (((e = Rs(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(o(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(o(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  var _e = new Map(),
    Wd = new Set();
  function Os(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.ownerDocument;
  }
  var hn = Z.d;
  Z.d = { f: yv, r: gv, D: vv, C: Sv, L: bv, m: Tv, X: xv, S: Av, M: Ev };
  function yv() {
    var t = hn.f(),
      e = bs();
    return t || e;
  }
  function gv(t) {
    var e = Si(t);
    e !== null && e.tag === 5 && e.type === "form" ? Eh(e) : hn.r(t);
  }
  var Fi = typeof document > "u" ? null : document;
  function $d(t, e, n) {
    var i = Fi;
    if (i && typeof e == "string" && e) {
      var s = Ae(e);
      (s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        Wd.has(s) ||
          (Wd.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          i.querySelector(s) === null &&
            ((e = i.createElement("link")),
            Pt(e, "link", t),
            Xt(e),
            i.head.appendChild(e)));
    }
  }
  function vv(t) {
    hn.D(t), $d("dns-prefetch", t, null);
  }
  function Sv(t, e) {
    hn.C(t, e), $d("preconnect", t, e);
  }
  function bv(t, e, n) {
    hn.L(t, e, n);
    var i = Fi;
    if (i && t && e) {
      var s = 'link[rel="preload"][as="' + Ae(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + Ae(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + Ae(n.imageSizes) + '"]'))
        : (s += '[href="' + Ae(t) + '"]');
      var r = s;
      switch (e) {
        case "style":
          r = Wi(t);
          break;
        case "script":
          r = $i(t);
      }
      _e.has(r) ||
        ((t = it(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        _e.set(r, t),
        i.querySelector(s) !== null ||
          (e === "style" && i.querySelector($a(r))) ||
          (e === "script" && i.querySelector(Ia(r))) ||
          ((e = i.createElement("link")),
          Pt(e, "link", t),
          Xt(e),
          i.head.appendChild(e)));
    }
  }
  function Tv(t, e) {
    hn.m(t, e);
    var n = Fi;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Ae(i) + '"][href="' + Ae(t) + '"]',
        r = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = $i(t);
      }
      if (
        !_e.has(r) &&
        ((t = it({ rel: "modulepreload", href: t }, e)),
        _e.set(r, t),
        n.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Ia(r))) return;
        }
        (i = n.createElement("link")),
          Pt(i, "link", t),
          Xt(i),
          n.head.appendChild(i);
      }
    }
  }
  function Av(t, e, n) {
    hn.S(t, e, n);
    var i = Fi;
    if (i && t) {
      var s = bi(i).hoistableStyles,
        r = Wi(t);
      e = e || "default";
      var f = s.get(r);
      if (!f) {
        var g = { loading: 0, preload: null };
        if ((f = i.querySelector($a(r)))) g.loading = 5;
        else {
          (t = it({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = _e.get(r)) && sr(t, n);
          var S = (f = i.createElement("link"));
          Xt(S),
            Pt(S, "link", t),
            (S._p = new Promise(function (E, V) {
              (S.onload = E), (S.onerror = V);
            })),
            S.addEventListener("load", function () {
              g.loading |= 1;
            }),
            S.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            Cs(f, e, i);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: g }),
          s.set(r, f);
      }
    }
  }
  function xv(t, e) {
    hn.X(t, e);
    var n = Fi;
    if (n && t) {
      var i = bi(n).hoistableScripts,
        s = $i(t),
        r = i.get(s);
      r ||
        ((r = n.querySelector(Ia(s))),
        r ||
          ((t = it({ src: t, async: !0 }, e)),
          (e = _e.get(s)) && ur(t, e),
          (r = n.createElement("script")),
          Xt(r),
          Pt(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        i.set(s, r));
    }
  }
  function Ev(t, e) {
    hn.M(t, e);
    var n = Fi;
    if (n && t) {
      var i = bi(n).hoistableScripts,
        s = $i(t),
        r = i.get(s);
      r ||
        ((r = n.querySelector(Ia(s))),
        r ||
          ((t = it({ src: t, async: !0, type: "module" }, e)),
          (e = _e.get(s)) && ur(t, e),
          (r = n.createElement("script")),
          Xt(r),
          Pt(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        i.set(s, r));
    }
  }
  function Id(t, e, n, i) {
    var s = (s = yn.current) ? Os(s) : null;
    if (!s) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = Wi(n.href)),
            (n = bi(s).hoistableStyles),
            (i = n.get(e)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Wi(n.href);
          var r = bi(s).hoistableStyles,
            f = r.get(t);
          if (
            (f ||
              ((s = s.ownerDocument || s),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(t, f),
              (r = s.querySelector($a(t))) &&
                !r._p &&
                ((f.instance = r), (f.state.loading = 5)),
              _e.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                _e.set(t, n),
                r || Dv(s, t, n, f.state))),
            e && i === null)
          )
            throw Error(o(528, ""));
          return f;
        }
        if (e && i !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = $i(n)),
              (n = bi(s).hoistableScripts),
              (i = n.get(e)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function Wi(t) {
    return 'href="' + Ae(t) + '"';
  }
  function $a(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function tm(t) {
    return it({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Dv(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (i.loading = 1)
      : ((e = t.createElement("link")),
        (i.preload = e),
        e.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        Pt(e, "link", n),
        Xt(e),
        t.head.appendChild(e));
  }
  function $i(t) {
    return '[src="' + Ae(t) + '"]';
  }
  function Ia(t) {
    return "script[async]" + t;
  }
  function em(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + Ae(n.href) + '"]');
          if (i) return (e.instance = i), Xt(i), i;
          var s = it({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            Xt(i),
            Pt(i, "style", s),
            Cs(i, n.precedence, t),
            (e.instance = i)
          );
        case "stylesheet":
          s = Wi(n.href);
          var r = t.querySelector($a(s));
          if (r) return (e.state.loading |= 4), (e.instance = r), Xt(r), r;
          (i = tm(n)),
            (s = _e.get(s)) && sr(i, s),
            (r = (t.ownerDocument || t).createElement("link")),
            Xt(r);
          var f = r;
          return (
            (f._p = new Promise(function (g, S) {
              (f.onload = g), (f.onerror = S);
            })),
            Pt(r, "link", i),
            (e.state.loading |= 4),
            Cs(r, n.precedence, t),
            (e.instance = r)
          );
        case "script":
          return (
            (r = $i(n.src)),
            (s = t.querySelector(Ia(r)))
              ? ((e.instance = s), Xt(s), s)
              : ((i = n),
                (s = _e.get(r)) && ((i = it({}, n)), ur(i, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Xt(s),
                Pt(s, "link", i),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        !(e.state.loading & 4) &&
        ((i = e.instance), (e.state.loading |= 4), Cs(i, n.precedence, t));
    return e.instance;
  }
  function Cs(t, e, n) {
    for (
      var i = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = i.length ? i[i.length - 1] : null,
        r = s,
        f = 0;
      f < i.length;
      f++
    ) {
      var g = i[f];
      if (g.dataset.precedence === e) r = g;
      else if (r !== s) break;
    }
    r
      ? r.parentNode.insertBefore(t, r.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function sr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function ur(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Vs = null;
  function nm(t, e, n) {
    if (Vs === null) {
      var i = new Map(),
        s = (Vs = new Map());
      s.set(n, i);
    } else (s = Vs), (i = s.get(n)), i || ((i = new Map()), s.set(n, i));
    if (i.has(t)) return i;
    for (
      i.set(t, null), n = n.getElementsByTagName(t), s = 0;
      s < n.length;
      s++
    ) {
      var r = n[s];
      if (
        !(
          r[da] ||
          r[Wt] ||
          (t === "link" && r.getAttribute("rel") === "stylesheet")
        ) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = r.getAttribute(e) || "";
        f = t + f;
        var g = i.get(f);
        g ? g.push(r) : i.set(f, [r]);
      }
    }
    return i;
  }
  function im(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Mv(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function am(t) {
    return !(t.type === "stylesheet" && !(t.state.loading & 3));
  }
  var tl = null;
  function Rv() {}
  function Ov(t, e, n) {
    if (tl === null) throw Error(o(475));
    var i = tl;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      !(e.state.loading & 4)
    ) {
      if (e.instance === null) {
        var s = Wi(n.href),
          r = t.querySelector($a(s));
        if (r) {
          (t = r._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (i.count++, (i = zs.bind(i)), t.then(i, i)),
            (e.state.loading |= 4),
            (e.instance = r),
            Xt(r);
          return;
        }
        (r = t.ownerDocument || t),
          (n = tm(n)),
          (s = _e.get(s)) && sr(n, s),
          (r = r.createElement("link")),
          Xt(r);
        var f = r;
        (f._p = new Promise(function (g, S) {
          (f.onload = g), (f.onerror = S);
        })),
          Pt(r, "link", n),
          (e.instance = r);
      }
      i.stylesheets === null && (i.stylesheets = new Map()),
        i.stylesheets.set(e, t),
        (t = e.state.preload) &&
          !(e.state.loading & 3) &&
          (i.count++,
          (e = zs.bind(i)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Cv() {
    if (tl === null) throw Error(o(475));
    var t = tl;
    return (
      t.stylesheets && t.count === 0 && or(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && or(t, t.stylesheets), t.unsuspend)) {
                var i = t.unsuspend;
                (t.unsuspend = null), i();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function zs() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) or(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var _s = null;
  function or(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (_s = new Map()),
        e.forEach(Vv, t),
        (_s = null),
        zs.call(t));
  }
  function Vv(t, e) {
    if (!(e.state.loading & 4)) {
      var n = _s.get(t);
      if (n) var i = n.get(null);
      else {
        (n = new Map()), _s.set(t, n);
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            r = 0;
          r < s.length;
          r++
        ) {
          var f = s[r];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (i = f));
        }
        i && n.set(null, i);
      }
      (s = e.instance),
        (f = s.getAttribute("data-precedence")),
        (r = n.get(f) || i),
        r === i && n.set(null, s),
        n.set(f, s),
        this.count++,
        (i = zs.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        r
          ? r.parentNode.insertBefore(s, r.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var el = {
    $$typeof: O,
    Provider: null,
    Consumer: null,
    _currentValue: ht,
    _currentValue2: ht,
    _threadCount: 0,
  };
  function zv(t, e, n, i, s, r, f, g) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ru(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ru(0)),
      (this.hiddenUpdates = ru(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = r),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = g),
      (this.incompleteTransitions = new Map());
  }
  function lm(t, e, n, i, s, r, f, g, S, E, V, U) {
    return (
      (t = new zv(t, e, n, f, g, S, E, U)),
      (e = 1),
      r === !0 && (e |= 24),
      (r = Ve(3, null, null, e)),
      (t.current = r),
      (r.stateNode = t),
      (e = wu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (r.memoizedState = { element: i, isDehydrated: n, cache: e }),
      bo(r),
      t
    );
  }
  function sm(t) {
    return t ? ((t = Vi), t) : Vi;
  }
  function um(t, e, n, i, s, r) {
    (s = sm(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = Rn(e)),
      (i.payload = { element: n }),
      (r = r === void 0 ? null : r),
      r !== null && (i.callback = r),
      (n = On(t, i, e)),
      n !== null && (le(n, t, e), La(n, t, e));
  }
  function om(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function rr(t, e) {
    om(t, e), (t = t.alternate) && om(t, e);
  }
  function rm(t) {
    if (t.tag === 13) {
      var e = bn(t, 67108864);
      e !== null && le(e, t, 67108864), rr(t, 67108864);
    }
  }
  var Us = !0;
  function _v(t, e, n, i) {
    var s = Q.T;
    Q.T = null;
    var r = Z.p;
    try {
      (Z.p = 2), cr(t, e, n, i);
    } finally {
      (Z.p = r), (Q.T = s);
    }
  }
  function Uv(t, e, n, i) {
    var s = Q.T;
    Q.T = null;
    var r = Z.p;
    try {
      (Z.p = 8), cr(t, e, n, i);
    } finally {
      (Z.p = r), (Q.T = s);
    }
  }
  function cr(t, e, n, i) {
    if (Us) {
      var s = fr(i);
      if (s === null) $o(t, e, i, Bs, n), fm(t, i);
      else if (Nv(s, t, e, n, i)) i.stopPropagation();
      else if ((fm(t, i), e & 4 && -1 < Bv.indexOf(t))) {
        for (; s !== null; ) {
          var r = Si(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var f = Qn(r.pendingLanes);
                  if (f !== 0) {
                    var g = r;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; f; ) {
                      var S = 1 << (31 - fe(f));
                      (g.entanglements[1] |= S), (f &= ~S);
                    }
                    Ke(r), !(Ot & 6) && ((gs = Ye() + 500), Pa(0));
                  }
                }
                break;
              case 13:
                (g = bn(r, 2)), g !== null && le(g, r, 2), bs(), rr(r, 2);
            }
          if (((r = fr(i)), r === null && $o(t, e, i, Bs, n), r === s)) break;
          s = r;
        }
        s !== null && i.stopPropagation();
      } else $o(t, e, i, null, n);
    }
  }
  function fr(t) {
    return (t = yu(t)), hr(t);
  }
  var Bs = null;
  function hr(t) {
    if (((Bs = null), (t = Zn(t)), t !== null)) {
      var e = P(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = vt(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Bs = t), null;
  }
  function cm(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (S0()) {
          case Uc:
            return 2;
          case Bc:
            return 8;
          case Cl:
          case b0:
            return 32;
          case Nc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var dr = !1,
    Nn = null,
    jn = null,
    Hn = null,
    nl = new Map(),
    il = new Map(),
    Ln = [],
    Bv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function fm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Nn = null;
        break;
      case "dragenter":
      case "dragleave":
        jn = null;
        break;
      case "mouseover":
      case "mouseout":
        Hn = null;
        break;
      case "pointerover":
      case "pointerout":
        nl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        il.delete(e.pointerId);
    }
  }
  function al(t, e, n, i, s, r) {
    return t === null || t.nativeEvent !== r
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: r,
          targetContainers: [s],
        }),
        e !== null && ((e = Si(e)), e !== null && rm(e)),
        t)
      : ((t.eventSystemFlags |= i),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function Nv(t, e, n, i, s) {
    switch (e) {
      case "focusin":
        return (Nn = al(Nn, t, e, n, i, s)), !0;
      case "dragenter":
        return (jn = al(jn, t, e, n, i, s)), !0;
      case "mouseover":
        return (Hn = al(Hn, t, e, n, i, s)), !0;
      case "pointerover":
        var r = s.pointerId;
        return nl.set(r, al(nl.get(r) || null, t, e, n, i, s)), !0;
      case "gotpointercapture":
        return (
          (r = s.pointerId), il.set(r, al(il.get(r) || null, t, e, n, i, s)), !0
        );
    }
    return !1;
  }
  function hm(t) {
    var e = Zn(t.target);
    if (e !== null) {
      var n = P(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = vt(n)), e !== null)) {
            (t.blockedOn = e),
              C0(t.priority, function () {
                if (n.tag === 13) {
                  var i = ye(),
                    s = bn(n, i);
                  s !== null && le(s, n, i), rr(n, i);
                }
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ns(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = fr(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        (pu = i), n.target.dispatchEvent(i), (pu = null);
      } else return (e = Si(n)), e !== null && rm(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function dm(t, e, n) {
    Ns(t) && n.delete(e);
  }
  function jv() {
    (dr = !1),
      Nn !== null && Ns(Nn) && (Nn = null),
      jn !== null && Ns(jn) && (jn = null),
      Hn !== null && Ns(Hn) && (Hn = null),
      nl.forEach(dm),
      il.forEach(dm);
  }
  function js(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      dr ||
        ((dr = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, jv)));
  }
  var Hs = null;
  function mm(t) {
    Hs !== t &&
      ((Hs = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Hs === t && (Hs = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            i = t[e + 1],
            s = t[e + 2];
          if (typeof i != "function") {
            if (hr(i || n) === null) continue;
            break;
          }
          var r = Si(n);
          r !== null &&
            (t.splice(e, 3),
            (e -= 3),
            eo(r, { pending: !0, data: s, method: n.method, action: i }, i, s));
        }
      }));
  }
  function ll(t) {
    function e(S) {
      return js(S, t);
    }
    Nn !== null && js(Nn, t),
      jn !== null && js(jn, t),
      Hn !== null && js(Hn, t),
      nl.forEach(e),
      il.forEach(e);
    for (var n = 0; n < Ln.length; n++) {
      var i = Ln[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < Ln.length && ((n = Ln[0]), n.blockedOn === null); )
      hm(n), n.blockedOn === null && Ln.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var s = n[i],
          r = n[i + 1],
          f = s[ue] || null;
        if (typeof r == "function") f || mm(n);
        else if (f) {
          var g = null;
          if (r && r.hasAttribute("formAction")) {
            if (((s = r), (f = r[ue] || null))) g = f.formAction;
            else if (hr(s) !== null) continue;
          } else g = f.action;
          typeof g == "function" ? (n[i + 1] = g) : (n.splice(i, 3), (i -= 3)),
            mm(n);
        }
      }
  }
  function mr(t) {
    this._internalRoot = t;
  }
  (Ls.prototype.render = mr.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var n = e.current,
        i = ye();
      um(n, i, t, e, null, null);
    }),
    (Ls.prototype.unmount = mr.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          t.tag === 0 && ki(),
            um(t.current, 2, null, t, null, null),
            bs(),
            (e[vi] = null);
        }
      });
  function Ls(t) {
    this._internalRoot = t;
  }
  Ls.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Yc();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Ln.length && e !== 0 && e < Ln[n].priority; n++);
      Ln.splice(n, 0, t), n === 0 && hm(t);
    }
  };
  var pm = l.version;
  if (pm !== "19.0.0") throw Error(o(527, pm, "19.0.0"));
  Z.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(o(188))
        : ((t = Object.keys(t).join(",")), Error(o(268, t)));
    return (
      (t = N(e)),
      (t = t !== null ? nt(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Hv = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Q,
    findFiberByHostInstance: Zn,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ws = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ws.isDisabled && ws.supportsFiber)
      try {
        (ca = ws.inject(Hv)), (ce = ws);
      } catch {}
  }
  return (
    (ul.createRoot = function (t, e) {
      if (!c(t)) throw Error(o(299));
      var n = !1,
        i = "",
        s = _h,
        r = Uh,
        f = Bh,
        g = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (r = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (g = e.unstable_transitionCallbacks)),
        (e = lm(t, 1, !1, null, null, n, i, s, r, f, g, null)),
        (t[vi] = e.current),
        Wo(t.nodeType === 8 ? t.parentNode : t),
        new mr(e)
      );
    }),
    (ul.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(o(299));
      var i = !1,
        s = "",
        r = _h,
        f = Uh,
        g = Bh,
        S = null,
        E = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (S = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (E = n.formState)),
        (e = lm(t, 1, !0, e, n ?? null, i, s, r, f, g, S, E)),
        (e.context = sm(null)),
        (n = e.current),
        (i = ye()),
        (s = Rn(i)),
        (s.callback = null),
        On(n, s, i),
        (e.current.lanes = i),
        ha(e, i),
        Ke(e),
        (t[vi] = e.current),
        Wo(t),
        new Ls(e)
      );
    }),
    (ul.version = "19.0.0"),
    ul
  );
}
var Dm;
function kv() {
  if (Dm) return gr.exports;
  Dm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), (gr.exports = Kv()), gr.exports;
}
var Jv = kv();
const $r = G.createContext({});
function Ir(a) {
  const l = G.useRef(null);
  return l.current === null && (l.current = a()), l.current;
}
const Is = G.createContext(null),
  tc = G.createContext({
    transformPagePoint: (a) => a,
    isStatic: !1,
    reducedMotion: "never",
  });
class Pv extends G.Component {
  getSnapshotBeforeUpdate(l) {
    const u = this.props.childRef.current;
    if (u && l.isPresent && !this.props.isPresent) {
      const o = u.offsetParent,
        c = (o instanceof HTMLElement && o.offsetWidth) || 0,
        d = this.props.sizeRef.current;
      (d.height = u.offsetHeight || 0),
        (d.width = u.offsetWidth || 0),
        (d.top = u.offsetTop),
        (d.left = u.offsetLeft),
        (d.right = c - d.width - d.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Fv({ children: a, isPresent: l, anchorX: u }) {
  const o = G.useId(),
    c = G.useRef(null),
    d = G.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: h } = G.useContext(tc);
  return (
    G.useInsertionEffect(() => {
      const { width: y, height: m, top: p, left: v, right: b } = d.current;
      if (l || !c.current || !y || !m) return;
      const A = u === "left" ? `left: ${v}` : `right: ${b}`;
      c.current.dataset.motionPopId = o;
      const O = document.createElement("style");
      return (
        h && (O.nonce = h),
        document.head.appendChild(O),
        O.sheet &&
          O.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${m}px !important;
            ${A}px !important;
            top: ${p}px !important;
          }
        `),
        () => {
          document.head.removeChild(O);
        }
      );
    }, [l]),
    L.jsx(Pv, {
      isPresent: l,
      childRef: c,
      sizeRef: d,
      children: G.cloneElement(a, { ref: c }),
    })
  );
}
const Wv = ({
  children: a,
  initial: l,
  isPresent: u,
  onExitComplete: o,
  custom: c,
  presenceAffectsLayout: d,
  mode: h,
  anchorX: y,
}) => {
  const m = Ir($v),
    p = G.useId(),
    v = G.useCallback(
      (A) => {
        m.set(A, !0);
        for (const O of m.values()) if (!O) return;
        o && o();
      },
      [m, o]
    ),
    b = G.useMemo(
      () => ({
        id: p,
        initial: l,
        isPresent: u,
        custom: c,
        onExitComplete: v,
        register: (A) => (m.set(A, !1), () => m.delete(A)),
      }),
      d ? [Math.random(), v] : [u, v]
    );
  return (
    G.useMemo(() => {
      m.forEach((A, O) => m.set(O, !1));
    }, [u]),
    G.useEffect(() => {
      !u && !m.size && o && o();
    }, [u]),
    h === "popLayout" &&
      (a = L.jsx(Fv, { isPresent: u, anchorX: y, children: a })),
    L.jsx(Is.Provider, { value: b, children: a })
  );
};
function $v() {
  return new Map();
}
function Gp(a = !0) {
  const l = G.useContext(Is);
  if (l === null) return [!0, null];
  const { isPresent: u, onExitComplete: o, register: c } = l,
    d = G.useId();
  G.useEffect(() => {
    a && c(d);
  }, [a]);
  const h = G.useCallback(() => a && o && o(d), [d, o, a]);
  return !u && o ? [!1, h] : [!0];
}
const qs = (a) => a.key || "";
function Mm(a) {
  const l = [];
  return (
    G.Children.forEach(a, (u) => {
      G.isValidElement(u) && l.push(u);
    }),
    l
  );
}
const ec = typeof window < "u",
  Xp = ec ? G.useLayoutEffect : G.useEffect,
  tu = ({
    children: a,
    custom: l,
    initial: u = !0,
    onExitComplete: o,
    presenceAffectsLayout: c = !0,
    mode: d = "sync",
    propagate: h = !1,
    anchorX: y = "left",
  }) => {
    const [m, p] = Gp(h),
      v = G.useMemo(() => Mm(a), [a]),
      b = h && !m ? [] : v.map(qs),
      A = G.useRef(!0),
      O = G.useRef(v),
      _ = Ir(() => new Map()),
      [B, w] = G.useState(v),
      [j, Y] = G.useState(v);
    Xp(() => {
      (A.current = !1), (O.current = v);
      for (let H = 0; H < j.length; H++) {
        const F = qs(j[H]);
        b.includes(F) ? _.delete(F) : _.get(F) !== !0 && _.set(F, !1);
      }
    }, [j, b.length, b.join("-")]);
    const X = [];
    if (v !== B) {
      let H = [...v];
      for (let F = 0; F < j.length; F++) {
        const mt = j[F],
          I = qs(mt);
        b.includes(I) || (H.splice(F, 0, mt), X.push(mt));
      }
      return d === "wait" && X.length && (H = X), Y(Mm(H)), w(v), null;
    }
    const { forceRender: st } = G.useContext($r);
    return L.jsx(L.Fragment, {
      children: j.map((H) => {
        const F = qs(H),
          mt = h && !m ? !1 : v === j || b.includes(F),
          I = () => {
            if (_.has(F)) _.set(F, !0);
            else return;
            let Q = !0;
            _.forEach((it) => {
              it || (Q = !1);
            }),
              Q &&
                (st == null || st(),
                Y(O.current),
                h && (p == null || p()),
                o && o());
          };
        return L.jsx(
          Wv,
          {
            isPresent: mt,
            initial: !A.current || u ? void 0 : !1,
            custom: l,
            presenceAffectsLayout: c,
            mode: d,
            onExitComplete: mt ? void 0 : I,
            anchorX: y,
            children: H,
          },
          F
        );
      }),
    });
  },
  ge = (a) => a;
let Qp = ge;
const Iv = { useManualTiming: !1 },
  Ys = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Rm = { value: null };
function t1(a, l) {
  let u = new Set(),
    o = new Set(),
    c = !1,
    d = !1;
  const h = new WeakSet();
  let y = { delta: 0, timestamp: 0, isProcessing: !1 },
    m = 0;
  function p(b) {
    h.has(b) && (v.schedule(b), a()), m++, b(y);
  }
  const v = {
    schedule: (b, A = !1, O = !1) => {
      const B = O && c ? u : o;
      return A && h.add(b), B.has(b) || B.add(b), b;
    },
    cancel: (b) => {
      o.delete(b), h.delete(b);
    },
    process: (b) => {
      if (((y = b), c)) {
        d = !0;
        return;
      }
      (c = !0),
        ([u, o] = [o, u]),
        u.forEach(p),
        l && Rm.value && Rm.value.frameloop[l].push(m),
        (m = 0),
        u.clear(),
        (c = !1),
        d && ((d = !1), v.process(b));
    },
  };
  return v;
}
const e1 = 40;
function Zp(a, l) {
  let u = !1,
    o = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (u = !0),
    h = Ys.reduce((j, Y) => ((j[Y] = t1(d, l ? Y : void 0)), j), {}),
    {
      read: y,
      resolveKeyframes: m,
      update: p,
      preRender: v,
      render: b,
      postRender: A,
    } = h,
    O = () => {
      const j = performance.now();
      (u = !1),
        (c.delta = o ? 1e3 / 60 : Math.max(Math.min(j - c.timestamp, e1), 1)),
        (c.timestamp = j),
        (c.isProcessing = !0),
        y.process(c),
        m.process(c),
        p.process(c),
        v.process(c),
        b.process(c),
        A.process(c),
        (c.isProcessing = !1),
        u && l && ((o = !1), a(O));
    },
    _ = () => {
      (u = !0), (o = !0), c.isProcessing || a(O);
    };
  return {
    schedule: Ys.reduce((j, Y) => {
      const X = h[Y];
      return (
        (j[Y] = (st, H = !1, F = !1) => (u || _(), X.schedule(st, H, F))), j
      );
    }, {}),
    cancel: (j) => {
      for (let Y = 0; Y < Ys.length; Y++) h[Ys[Y]].cancel(j);
    },
    state: c,
    steps: h,
  };
}
const {
    schedule: Dt,
    cancel: Yn,
    state: Ft,
    steps: Tr,
  } = Zp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ge, !0),
  Kp = G.createContext({ strict: !1 }),
  Om = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  aa = {};
for (const a in Om) aa[a] = { isEnabled: (l) => Om[a].some((u) => !!l[u]) };
function n1(a) {
  for (const l in a) aa[l] = { ...aa[l], ...a[l] };
}
const i1 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ks(a) {
  return (
    a.startsWith("while") ||
    (a.startsWith("drag") && a !== "draggable") ||
    a.startsWith("layout") ||
    a.startsWith("onTap") ||
    a.startsWith("onPan") ||
    a.startsWith("onLayout") ||
    i1.has(a)
  );
}
let kp = (a) => !ks(a);
function a1(a) {
  a && (kp = (l) => (l.startsWith("on") ? !ks(l) : a(l)));
}
try {
  a1(require("@emotion/is-prop-valid").default);
} catch {}
function l1(a, l, u) {
  const o = {};
  for (const c in a)
    (c === "values" && typeof a.values == "object") ||
      ((kp(c) ||
        (u === !0 && ks(c)) ||
        (!l && !ks(c)) ||
        (a.draggable && c.startsWith("onDrag"))) &&
        (o[c] = a[c]));
  return o;
}
function s1(a) {
  if (typeof Proxy > "u") return a;
  const l = new Map(),
    u = (...o) => a(...o);
  return new Proxy(u, {
    get: (o, c) =>
      c === "create" ? a : (l.has(c) || l.set(c, a(c)), l.get(c)),
  });
}
const eu = G.createContext({});
function nu(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function pl(a) {
  return typeof a == "string" || Array.isArray(a);
}
const nc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  ic = ["initial", ...nc];
function iu(a) {
  return nu(a.animate) || ic.some((l) => pl(a[l]));
}
function Jp(a) {
  return !!(iu(a) || a.variants);
}
function u1(a, l) {
  if (iu(a)) {
    const { initial: u, animate: o } = a;
    return {
      initial: u === !1 || pl(u) ? u : void 0,
      animate: pl(o) ? o : void 0,
    };
  }
  return a.inherit !== !1 ? l : {};
}
function o1(a) {
  const { initial: l, animate: u } = u1(a, G.useContext(eu));
  return G.useMemo(() => ({ initial: l, animate: u }), [Cm(l), Cm(u)]);
}
function Cm(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const r1 = Symbol.for("motionComponentSymbol");
function Ii(a) {
  return (
    a &&
    typeof a == "object" &&
    Object.prototype.hasOwnProperty.call(a, "current")
  );
}
function c1(a, l, u) {
  return G.useCallback(
    (o) => {
      o && a.onMount && a.onMount(o),
        l && (o ? l.mount(o) : l.unmount()),
        u && (typeof u == "function" ? u(o) : Ii(u) && (u.current = o));
    },
    [l]
  );
}
const ac = (a) => a.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  f1 = "framerAppearId",
  Pp = "data-" + ac(f1),
  { schedule: lc } = Zp(queueMicrotask, !1),
  Fp = G.createContext({});
function h1(a, l, u, o, c) {
  var d, h;
  const { visualElement: y } = G.useContext(eu),
    m = G.useContext(Kp),
    p = G.useContext(Is),
    v = G.useContext(tc).reducedMotion,
    b = G.useRef(null);
  (o = o || m.renderer),
    !b.current &&
      o &&
      (b.current = o(a, {
        visualState: l,
        parent: y,
        props: u,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: v,
      }));
  const A = b.current,
    O = G.useContext(Fp);
  A &&
    !A.projection &&
    c &&
    (A.type === "html" || A.type === "svg") &&
    d1(b.current, u, c, O);
  const _ = G.useRef(!1);
  G.useInsertionEffect(() => {
    A && _.current && A.update(u, p);
  });
  const B = u[Pp],
    w = G.useRef(
      !!B &&
        !(
          !((d = window.MotionHandoffIsComplete) === null || d === void 0) &&
          d.call(window, B)
        ) &&
        ((h = window.MotionHasOptimisedAnimation) === null || h === void 0
          ? void 0
          : h.call(window, B))
    );
  return (
    Xp(() => {
      A &&
        ((_.current = !0),
        (window.MotionIsMounted = !0),
        A.updateFeatures(),
        lc.render(A.render),
        w.current && A.animationState && A.animationState.animateChanges());
    }),
    G.useEffect(() => {
      A &&
        (!w.current && A.animationState && A.animationState.animateChanges(),
        w.current &&
          (queueMicrotask(() => {
            var j;
            (j = window.MotionHandoffMarkAsComplete) === null ||
              j === void 0 ||
              j.call(window, B);
          }),
          (w.current = !1)));
    }),
    A
  );
}
function d1(a, l, u, o) {
  const {
    layoutId: c,
    layout: d,
    drag: h,
    dragConstraints: y,
    layoutScroll: m,
    layoutRoot: p,
  } = l;
  (a.projection = new u(
    a.latestValues,
    l["data-framer-portal-id"] ? void 0 : Wp(a.parent)
  )),
    a.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!h || (y && Ii(y)),
      visualElement: a,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: o,
      layoutScroll: m,
      layoutRoot: p,
    });
}
function Wp(a) {
  if (a) return a.options.allowProjection !== !1 ? a.projection : Wp(a.parent);
}
function m1({
  preloadedFeatures: a,
  createVisualElement: l,
  useRender: u,
  useVisualState: o,
  Component: c,
}) {
  var d, h;
  a && n1(a);
  function y(p, v) {
    let b;
    const A = { ...G.useContext(tc), ...p, layoutId: p1(p) },
      { isStatic: O } = A,
      _ = o1(p),
      B = o(p, O);
    if (!O && ec) {
      y1();
      const w = g1(A);
      (b = w.MeasureLayout),
        (_.visualElement = h1(c, B, A, l, w.ProjectionNode));
    }
    return L.jsxs(eu.Provider, {
      value: _,
      children: [
        b && _.visualElement
          ? L.jsx(b, { visualElement: _.visualElement, ...A })
          : null,
        u(c, p, c1(B, _.visualElement, v), B, O, _.visualElement),
      ],
    });
  }
  y.displayName = `motion.${
    typeof c == "string"
      ? c
      : `create(${
          (h = (d = c.displayName) !== null && d !== void 0 ? d : c.name) !==
            null && h !== void 0
            ? h
            : ""
        })`
  }`;
  const m = G.forwardRef(y);
  return (m[r1] = c), m;
}
function p1({ layoutId: a }) {
  const l = G.useContext($r).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function y1(a, l) {
  G.useContext(Kp).strict;
}
function g1(a) {
  const { drag: l, layout: u } = aa;
  if (!l && !u) return {};
  const o = { ...l, ...u };
  return {
    MeasureLayout:
      (l != null && l.isEnabled(a)) || (u != null && u.isEnabled(a))
        ? o.MeasureLayout
        : void 0,
    ProjectionNode: o.ProjectionNode,
  };
}
const $p = (a) => (l) => typeof l == "string" && l.startsWith(a),
  sc = $p("--"),
  v1 = $p("var(--"),
  uc = (a) => (v1(a) ? S1.test(a.split("/*")[0].trim()) : !1),
  S1 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  yl = {};
function b1(a) {
  for (const l in a) (yl[l] = a[l]), sc(l) && (yl[l].isCSSVariable = !0);
}
const ua = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  yi = new Set(ua);
function Ip(a, { layout: l, layoutId: u }) {
  return (
    yi.has(a) ||
    a.startsWith("origin") ||
    ((l || u !== void 0) && (!!yl[a] || a === "opacity"))
  );
}
const ee = (a) => !!(a && a.getVelocity),
  ty = (a, l) => (l && typeof a == "number" ? l.transform(a) : a),
  pn = (a, l, u) => (u > l ? l : u < a ? a : u),
  oa = {
    test: (a) => typeof a == "number",
    parse: parseFloat,
    transform: (a) => a,
  },
  gl = { ...oa, transform: (a) => pn(0, 1, a) },
  Gs = { ...oa, default: 1 },
  Al = (a) => ({
    test: (l) =>
      typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${a}`,
  }),
  qn = Al("deg"),
  ke = Al("%"),
  et = Al("px"),
  T1 = Al("vh"),
  A1 = Al("vw"),
  Vm = {
    ...ke,
    parse: (a) => ke.parse(a) / 100,
    transform: (a) => ke.transform(a * 100),
  },
  x1 = {
    borderWidth: et,
    borderTopWidth: et,
    borderRightWidth: et,
    borderBottomWidth: et,
    borderLeftWidth: et,
    borderRadius: et,
    radius: et,
    borderTopLeftRadius: et,
    borderTopRightRadius: et,
    borderBottomRightRadius: et,
    borderBottomLeftRadius: et,
    width: et,
    maxWidth: et,
    height: et,
    maxHeight: et,
    top: et,
    right: et,
    bottom: et,
    left: et,
    padding: et,
    paddingTop: et,
    paddingRight: et,
    paddingBottom: et,
    paddingLeft: et,
    margin: et,
    marginTop: et,
    marginRight: et,
    marginBottom: et,
    marginLeft: et,
    backgroundPositionX: et,
    backgroundPositionY: et,
  },
  E1 = {
    rotate: qn,
    rotateX: qn,
    rotateY: qn,
    rotateZ: qn,
    scale: Gs,
    scaleX: Gs,
    scaleY: Gs,
    scaleZ: Gs,
    skew: qn,
    skewX: qn,
    skewY: qn,
    distance: et,
    translateX: et,
    translateY: et,
    translateZ: et,
    x: et,
    y: et,
    z: et,
    perspective: et,
    transformPerspective: et,
    opacity: gl,
    originX: Vm,
    originY: Vm,
    originZ: et,
  },
  zm = { ...oa, transform: Math.round },
  oc = {
    ...x1,
    ...E1,
    zIndex: zm,
    size: et,
    fillOpacity: gl,
    strokeOpacity: gl,
    numOctaves: zm,
  },
  D1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  M1 = ua.length;
function R1(a, l, u) {
  let o = "",
    c = !0;
  for (let d = 0; d < M1; d++) {
    const h = ua[d],
      y = a[h];
    if (y === void 0) continue;
    let m = !0;
    if (
      (typeof y == "number"
        ? (m = y === (h.startsWith("scale") ? 1 : 0))
        : (m = parseFloat(y) === 0),
      !m || u)
    ) {
      const p = ty(y, oc[h]);
      if (!m) {
        c = !1;
        const v = D1[h] || h;
        o += `${v}(${p}) `;
      }
      u && (l[h] = p);
    }
  }
  return (o = o.trim()), u ? (o = u(l, c ? "" : o)) : c && (o = "none"), o;
}
function rc(a, l, u) {
  const { style: o, vars: c, transformOrigin: d } = a;
  let h = !1,
    y = !1;
  for (const m in l) {
    const p = l[m];
    if (yi.has(m)) {
      h = !0;
      continue;
    } else if (sc(m)) {
      c[m] = p;
      continue;
    } else {
      const v = ty(p, oc[m]);
      m.startsWith("origin") ? ((y = !0), (d[m] = v)) : (o[m] = v);
    }
  }
  if (
    (l.transform ||
      (h || u
        ? (o.transform = R1(l, a.transform, u))
        : o.transform && (o.transform = "none")),
    y)
  ) {
    const { originX: m = "50%", originY: p = "50%", originZ: v = 0 } = d;
    o.transformOrigin = `${m} ${p} ${v}`;
  }
}
const cc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ey(a, l, u) {
  for (const o in l) !ee(l[o]) && !Ip(o, u) && (a[o] = l[o]);
}
function O1({ transformTemplate: a }, l) {
  return G.useMemo(() => {
    const u = cc();
    return rc(u, l, a), Object.assign({}, u.vars, u.style);
  }, [l]);
}
function C1(a, l) {
  const u = a.style || {},
    o = {};
  return ey(o, u, a), Object.assign(o, O1(a, l)), o;
}
function V1(a, l) {
  const u = {},
    o = C1(a, l);
  return (
    a.drag &&
      a.dragListener !== !1 &&
      ((u.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`)),
    a.tabIndex === void 0 &&
      (a.onTap || a.onTapStart || a.whileTap) &&
      (u.tabIndex = 0),
    (u.style = o),
    u
  );
}
const z1 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function fc(a) {
  return typeof a != "string" || a.includes("-")
    ? !1
    : !!(z1.indexOf(a) > -1 || /[A-Z]/u.test(a));
}
const _1 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  U1 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function B1(a, l, u = 1, o = 0, c = !0) {
  a.pathLength = 1;
  const d = c ? _1 : U1;
  a[d.offset] = et.transform(-o);
  const h = et.transform(l),
    y = et.transform(u);
  a[d.array] = `${h} ${y}`;
}
function _m(a, l, u) {
  return typeof a == "string" ? a : et.transform(l + u * a);
}
function N1(a, l, u) {
  const o = _m(l, a.x, a.width),
    c = _m(u, a.y, a.height);
  return `${o} ${c}`;
}
function hc(
  a,
  {
    attrX: l,
    attrY: u,
    attrScale: o,
    originX: c,
    originY: d,
    pathLength: h,
    pathSpacing: y = 1,
    pathOffset: m = 0,
    ...p
  },
  v,
  b
) {
  if ((rc(a, p, b), v)) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  (a.attrs = a.style), (a.style = {});
  const { attrs: A, style: O, dimensions: _ } = a;
  A.transform && (_ && (O.transform = A.transform), delete A.transform),
    _ &&
      (c !== void 0 || d !== void 0 || O.transform) &&
      (O.transformOrigin = N1(
        _,
        c !== void 0 ? c : 0.5,
        d !== void 0 ? d : 0.5
      )),
    l !== void 0 && (A.x = l),
    u !== void 0 && (A.y = u),
    o !== void 0 && (A.scale = o),
    h !== void 0 && B1(A, h, y, m, !1);
}
const ny = () => ({ ...cc(), attrs: {} }),
  dc = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function j1(a, l, u, o) {
  const c = G.useMemo(() => {
    const d = ny();
    return (
      hc(d, l, dc(o), a.transformTemplate),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [l]);
  if (a.style) {
    const d = {};
    ey(d, a.style, a), (c.style = { ...d, ...c.style });
  }
  return c;
}
function H1(a = !1) {
  return (u, o, c, { latestValues: d }, h) => {
    const m = (fc(u) ? j1 : V1)(o, d, h, u),
      p = l1(o, typeof u == "string", a),
      v = u !== G.Fragment ? { ...p, ...m, ref: c } : {},
      { children: b } = o,
      A = G.useMemo(() => (ee(b) ? b.get() : b), [b]);
    return G.createElement(u, { ...v, children: A });
  };
}
function Um(a) {
  const l = [{}, {}];
  return (
    a == null ||
      a.values.forEach((u, o) => {
        (l[0][o] = u.get()), (l[1][o] = u.getVelocity());
      }),
    l
  );
}
function mc(a, l, u, o) {
  if (typeof l == "function") {
    const [c, d] = Um(o);
    l = l(u !== void 0 ? u : a.custom, c, d);
  }
  if (
    (typeof l == "string" && (l = a.variants && a.variants[l]),
    typeof l == "function")
  ) {
    const [c, d] = Um(o);
    l = l(u !== void 0 ? u : a.custom, c, d);
  }
  return l;
}
const Nr = (a) => Array.isArray(a),
  L1 = (a) => !!(a && typeof a == "object" && a.mix && a.toValue),
  w1 = (a) => (Nr(a) ? a[a.length - 1] || 0 : a);
function Qs(a) {
  const l = ee(a) ? a.get() : a;
  return L1(l) ? l.toValue() : l;
}
function q1(
  { scrapeMotionValuesFromProps: a, createRenderState: l, onUpdate: u },
  o,
  c,
  d
) {
  const h = { latestValues: Y1(o, c, d, a), renderState: l() };
  return (
    u &&
      ((h.onMount = (y) => u({ props: o, current: y, ...h })),
      (h.onUpdate = (y) => u(y))),
    h
  );
}
const iy = (a) => (l, u) => {
  const o = G.useContext(eu),
    c = G.useContext(Is),
    d = () => q1(a, l, o, c);
  return u ? d() : Ir(d);
};
function Y1(a, l, u, o) {
  const c = {},
    d = o(a, {});
  for (const A in d) c[A] = Qs(d[A]);
  let { initial: h, animate: y } = a;
  const m = iu(a),
    p = Jp(a);
  l &&
    p &&
    !m &&
    a.inherit !== !1 &&
    (h === void 0 && (h = l.initial), y === void 0 && (y = l.animate));
  let v = u ? u.initial === !1 : !1;
  v = v || h === !1;
  const b = v ? y : h;
  if (b && typeof b != "boolean" && !nu(b)) {
    const A = Array.isArray(b) ? b : [b];
    for (let O = 0; O < A.length; O++) {
      const _ = mc(a, A[O]);
      if (_) {
        const { transitionEnd: B, transition: w, ...j } = _;
        for (const Y in j) {
          let X = j[Y];
          if (Array.isArray(X)) {
            const st = v ? X.length - 1 : 0;
            X = X[st];
          }
          X !== null && (c[Y] = X);
        }
        for (const Y in B) c[Y] = B[Y];
      }
    }
  }
  return c;
}
function pc(a, l, u) {
  var o;
  const { style: c } = a,
    d = {};
  for (const h in c)
    (ee(c[h]) ||
      (l.style && ee(l.style[h])) ||
      Ip(h, a) ||
      ((o = u == null ? void 0 : u.getValue(h)) === null || o === void 0
        ? void 0
        : o.liveStyle) !== void 0) &&
      (d[h] = c[h]);
  return d;
}
const G1 = {
  useVisualState: iy({
    scrapeMotionValuesFromProps: pc,
    createRenderState: cc,
  }),
};
function ay(a, l) {
  try {
    l.dimensions =
      typeof a.getBBox == "function" ? a.getBBox() : a.getBoundingClientRect();
  } catch {
    l.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
function ly(a, { style: l, vars: u }, o, c) {
  Object.assign(a.style, l, c && c.getProjectionStyles(o));
  for (const d in u) a.style.setProperty(d, u[d]);
}
const sy = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function uy(a, l, u, o) {
  ly(a, l, void 0, o);
  for (const c in l.attrs) a.setAttribute(sy.has(c) ? c : ac(c), l.attrs[c]);
}
function oy(a, l, u) {
  const o = pc(a, l, u);
  for (const c in a)
    if (ee(a[c]) || ee(l[c])) {
      const d =
        ua.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      o[d] = a[c];
    }
  return o;
}
const Bm = ["x", "y", "width", "height", "cx", "cy", "r"],
  X1 = {
    useVisualState: iy({
      scrapeMotionValuesFromProps: oy,
      createRenderState: ny,
      onUpdate: ({
        props: a,
        prevProps: l,
        current: u,
        renderState: o,
        latestValues: c,
      }) => {
        if (!u) return;
        let d = !!a.drag;
        if (!d) {
          for (const y in c)
            if (yi.has(y)) {
              d = !0;
              break;
            }
        }
        if (!d) return;
        let h = !l;
        if (l)
          for (let y = 0; y < Bm.length; y++) {
            const m = Bm[y];
            a[m] !== l[m] && (h = !0);
          }
        h &&
          Dt.read(() => {
            ay(u, o),
              Dt.render(() => {
                hc(o, c, dc(u.tagName), a.transformTemplate), uy(u, o);
              });
          });
      },
    }),
  };
function Q1(a, l) {
  return function (o, { forwardMotionProps: c } = { forwardMotionProps: !1 }) {
    const h = {
      ...(fc(o) ? X1 : G1),
      preloadedFeatures: a,
      useRender: H1(c),
      createVisualElement: l,
      Component: o,
    };
    return m1(h);
  };
}
function vl(a, l, u) {
  const o = a.getProps();
  return mc(o, l, u !== void 0 ? u : o.custom, a);
}
function yc(a, l) {
  return a ? a[l] || a.default || a : void 0;
}
const ry = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ua,
]);
let Zs;
function Z1() {
  Zs = void 0;
}
const Je = {
  now: () => (
    Zs === void 0 &&
      Je.set(
        Ft.isProcessing || Iv.useManualTiming ? Ft.timestamp : performance.now()
      ),
    Zs
  ),
  set: (a) => {
    (Zs = a), queueMicrotask(Z1);
  },
};
function gc(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function vc(a, l) {
  const u = a.indexOf(l);
  u > -1 && a.splice(u, 1);
}
class Sc {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return gc(this.subscriptions, l), () => vc(this.subscriptions, l);
  }
  notify(l, u, o) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, u, o);
      else
        for (let d = 0; d < c; d++) {
          const h = this.subscriptions[d];
          h && h(l, u, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function cy(a, l) {
  return l ? a * (1e3 / l) : 0;
}
const Nm = 30,
  K1 = (a) => !isNaN(parseFloat(a));
class k1 {
  constructor(l, u = {}) {
    (this.version = "12.4.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (o, c = !0) => {
        const d = Je.now();
        this.updatedAt !== d && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(o),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          c &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = u.owner);
  }
  setCurrent(l) {
    (this.current = l),
      (this.updatedAt = Je.now()),
      this.canTrackVelocity === null &&
        l !== void 0 &&
        (this.canTrackVelocity = K1(this.current));
  }
  setPrevFrameValue(l = this.current) {
    (this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, u) {
    this.events[l] || (this.events[l] = new Sc());
    const o = this.events[l].add(u);
    return l === "change"
      ? () => {
          o(),
            Dt.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : o;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, u) {
    (this.passiveEffect = l), (this.stopPassiveEffect = u);
  }
  set(l, u = !0) {
    !u || !this.passiveEffect
      ? this.updateAndNotify(l, u)
      : this.passiveEffect(l, this.updateAndNotify);
  }
  setWithVelocity(l, u, o) {
    this.set(u),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - o);
  }
  jump(l, u = !0) {
    this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      u && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = Je.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      l - this.updatedAt > Nm
    )
      return 0;
    const u = Math.min(this.updatedAt - this.prevUpdatedAt, Nm);
    return cy(parseFloat(this.current) - parseFloat(this.prevFrameValue), u);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((u) => {
        (this.hasAnimated = !0),
          (this.animation = l(u)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Sl(a, l) {
  return new k1(a, l);
}
function J1(a, l, u) {
  a.hasValue(l) ? a.getValue(l).set(u) : a.addValue(l, Sl(u));
}
function P1(a, l) {
  const u = vl(a, l);
  let { transitionEnd: o = {}, transition: c = {}, ...d } = u || {};
  d = { ...d, ...o };
  for (const h in d) {
    const y = w1(d[h]);
    J1(a, h, y);
  }
}
function F1(a) {
  return !!(ee(a) && a.add);
}
function jr(a, l) {
  const u = a.getValue("willChange");
  if (F1(u)) return u.add(l);
}
function fy(a) {
  return a.props[Pp];
}
function bc(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const W1 = bc(() => window.ScrollTimeline !== void 0);
class $1 {
  constructor(l) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = l.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((l) => ("finished" in l ? l.finished : l))
    );
  }
  getAll(l) {
    return this.animations[0][l];
  }
  setAll(l, u) {
    for (let o = 0; o < this.animations.length; o++) this.animations[o][l] = u;
  }
  attachTimeline(l, u) {
    const o = this.animations.map((c) => {
      if (W1() && c.attachTimeline) return c.attachTimeline(l);
      if (typeof u == "function") return u(c);
    });
    return () => {
      o.forEach((c, d) => {
        c && c(), this.animations[d].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(l) {
    this.setAll("time", l);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(l) {
    this.setAll("speed", l);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let l = 0;
    for (let u = 0; u < this.animations.length; u++)
      l = Math.max(l, this.animations[u].duration);
    return l;
  }
  runAll(l) {
    this.animations.forEach((u) => u[l]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class I1 extends $1 {
  then(l, u) {
    return Promise.all(this.animations).then(l).catch(u);
  }
}
const dn = (a) => a * 1e3,
  mn = (a) => a / 1e3;
function Tc(a) {
  return typeof a == "function";
}
function jm(a, l) {
  (a.timeline = l), (a.onfinish = null);
}
const Ac = (a) => Array.isArray(a) && typeof a[0] == "number",
  tS = { linearEasing: void 0 };
function eS(a, l) {
  const u = bc(a);
  return () => {
    var o;
    return (o = tS[l]) !== null && o !== void 0 ? o : u();
  };
}
const Js = eS(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  la = (a, l, u) => {
    const o = l - a;
    return o === 0 ? 1 : (u - a) / o;
  },
  hy = (a, l, u = 10) => {
    let o = "";
    const c = Math.max(Math.round(l / u), 2);
    for (let d = 0; d < c; d++) o += a(la(0, c - 1, d)) + ", ";
    return `linear(${o.substring(0, o.length - 2)})`;
  };
function dy(a) {
  return !!(
    (typeof a == "function" && Js()) ||
    !a ||
    (typeof a == "string" && (a in Hr || Js())) ||
    Ac(a) ||
    (Array.isArray(a) && a.every(dy))
  );
}
const rl = ([a, l, u, o]) => `cubic-bezier(${a}, ${l}, ${u}, ${o})`,
  Hr = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: rl([0, 0.65, 0.55, 1]),
    circOut: rl([0.55, 0, 1, 0.45]),
    backIn: rl([0.31, 0.01, 0.66, -0.59]),
    backOut: rl([0.33, 1.53, 0.69, 0.99]),
  };
function my(a, l) {
  if (a)
    return typeof a == "function" && Js()
      ? hy(a, l)
      : Ac(a)
      ? rl(a)
      : Array.isArray(a)
      ? a.map((u) => my(u, l) || Hr.easeOut)
      : Hr[a];
}
const py = (a, l, u) =>
    (((1 - 3 * u + 3 * l) * a + (3 * u - 6 * l)) * a + 3 * l) * a,
  nS = 1e-7,
  iS = 12;
function aS(a, l, u, o, c) {
  let d,
    h,
    y = 0;
  do (h = l + (u - l) / 2), (d = py(h, o, c) - a), d > 0 ? (u = h) : (l = h);
  while (Math.abs(d) > nS && ++y < iS);
  return h;
}
function xl(a, l, u, o) {
  if (a === l && u === o) return ge;
  const c = (d) => aS(d, 0, 1, a, u);
  return (d) => (d === 0 || d === 1 ? d : py(c(d), l, o));
}
const yy = (a) => (l) => l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2,
  gy = (a) => (l) => 1 - a(1 - l),
  vy = xl(0.33, 1.53, 0.69, 0.99),
  xc = gy(vy),
  Sy = yy(xc),
  by = (a) =>
    (a *= 2) < 1 ? 0.5 * xc(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))),
  Ec = (a) => 1 - Math.sin(Math.acos(a)),
  Ty = gy(Ec),
  Ay = yy(Ec),
  xy = (a) => /^0[^.\s]+$/u.test(a);
function lS(a) {
  return typeof a == "number"
    ? a === 0
    : a !== null
    ? a === "none" || a === "0" || xy(a)
    : !0;
}
const fl = (a) => Math.round(a * 1e5) / 1e5,
  Dc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function sS(a) {
  return a == null;
}
const uS =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Mc = (a, l) => (u) =>
    !!(
      (typeof u == "string" && uS.test(u) && u.startsWith(a)) ||
      (l && !sS(u) && Object.prototype.hasOwnProperty.call(u, l))
    ),
  Ey = (a, l, u) => (o) => {
    if (typeof o != "string") return o;
    const [c, d, h, y] = o.match(Dc);
    return {
      [a]: parseFloat(c),
      [l]: parseFloat(d),
      [u]: parseFloat(h),
      alpha: y !== void 0 ? parseFloat(y) : 1,
    };
  },
  oS = (a) => pn(0, 255, a),
  Ar = { ...oa, transform: (a) => Math.round(oS(a)) },
  mi = {
    test: Mc("rgb", "red"),
    parse: Ey("red", "green", "blue"),
    transform: ({ red: a, green: l, blue: u, alpha: o = 1 }) =>
      "rgba(" +
      Ar.transform(a) +
      ", " +
      Ar.transform(l) +
      ", " +
      Ar.transform(u) +
      ", " +
      fl(gl.transform(o)) +
      ")",
  };
function rS(a) {
  let l = "",
    u = "",
    o = "",
    c = "";
  return (
    a.length > 5
      ? ((l = a.substring(1, 3)),
        (u = a.substring(3, 5)),
        (o = a.substring(5, 7)),
        (c = a.substring(7, 9)))
      : ((l = a.substring(1, 2)),
        (u = a.substring(2, 3)),
        (o = a.substring(3, 4)),
        (c = a.substring(4, 5)),
        (l += l),
        (u += u),
        (o += o),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(u, 16),
      blue: parseInt(o, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const Lr = { test: Mc("#"), parse: rS, transform: mi.transform },
  ta = {
    test: Mc("hsl", "hue"),
    parse: Ey("hue", "saturation", "lightness"),
    transform: ({ hue: a, saturation: l, lightness: u, alpha: o = 1 }) =>
      "hsla(" +
      Math.round(a) +
      ", " +
      ke.transform(fl(l)) +
      ", " +
      ke.transform(fl(u)) +
      ", " +
      fl(gl.transform(o)) +
      ")",
  },
  te = {
    test: (a) => mi.test(a) || Lr.test(a) || ta.test(a),
    parse: (a) =>
      mi.test(a) ? mi.parse(a) : ta.test(a) ? ta.parse(a) : Lr.parse(a),
    transform: (a) =>
      typeof a == "string"
        ? a
        : a.hasOwnProperty("red")
        ? mi.transform(a)
        : ta.transform(a),
  },
  cS =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function fS(a) {
  var l, u;
  return (
    isNaN(a) &&
    typeof a == "string" &&
    (((l = a.match(Dc)) === null || l === void 0 ? void 0 : l.length) || 0) +
      (((u = a.match(cS)) === null || u === void 0 ? void 0 : u.length) || 0) >
      0
  );
}
const Dy = "number",
  My = "color",
  hS = "var",
  dS = "var(",
  Hm = "${}",
  mS =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function bl(a) {
  const l = a.toString(),
    u = [],
    o = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const y = l
    .replace(
      mS,
      (m) => (
        te.test(m)
          ? (o.color.push(d), c.push(My), u.push(te.parse(m)))
          : m.startsWith(dS)
          ? (o.var.push(d), c.push(hS), u.push(m))
          : (o.number.push(d), c.push(Dy), u.push(parseFloat(m))),
        ++d,
        Hm
      )
    )
    .split(Hm);
  return { values: u, split: y, indexes: o, types: c };
}
function Ry(a) {
  return bl(a).values;
}
function Oy(a) {
  const { split: l, types: u } = bl(a),
    o = l.length;
  return (c) => {
    let d = "";
    for (let h = 0; h < o; h++)
      if (((d += l[h]), c[h] !== void 0)) {
        const y = u[h];
        y === Dy
          ? (d += fl(c[h]))
          : y === My
          ? (d += te.transform(c[h]))
          : (d += c[h]);
      }
    return d;
  };
}
const pS = (a) => (typeof a == "number" ? 0 : a);
function yS(a) {
  const l = Ry(a);
  return Oy(a)(l.map(pS));
}
const Gn = {
    test: fS,
    parse: Ry,
    createTransformer: Oy,
    getAnimatableNone: yS,
  },
  gS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function vS(a) {
  const [l, u] = a.slice(0, -1).split("(");
  if (l === "drop-shadow") return a;
  const [o] = u.match(Dc) || [];
  if (!o) return a;
  const c = u.replace(o, "");
  let d = gS.has(l) ? 1 : 0;
  return o !== u && (d *= 100), l + "(" + d + c + ")";
}
const SS = /\b([a-z-]*)\(.*?\)/gu,
  wr = {
    ...Gn,
    getAnimatableNone: (a) => {
      const l = a.match(SS);
      return l ? l.map(vS).join(" ") : a;
    },
  },
  bS = {
    ...oc,
    color: te,
    backgroundColor: te,
    outlineColor: te,
    fill: te,
    stroke: te,
    borderColor: te,
    borderTopColor: te,
    borderRightColor: te,
    borderBottomColor: te,
    borderLeftColor: te,
    filter: wr,
    WebkitFilter: wr,
  },
  Rc = (a) => bS[a];
function Cy(a, l) {
  let u = Rc(a);
  return (
    u !== wr && (u = Gn), u.getAnimatableNone ? u.getAnimatableNone(l) : void 0
  );
}
const TS = new Set(["auto", "none", "0"]);
function AS(a, l, u) {
  let o = 0,
    c;
  for (; o < a.length && !c; ) {
    const d = a[o];
    typeof d == "string" && !TS.has(d) && bl(d).values.length && (c = a[o]),
      o++;
  }
  if (c && u) for (const d of l) a[d] = Cy(u, c);
}
const Lm = (a) => a === oa || a === et,
  wm = (a, l) => parseFloat(a.split(", ")[l]),
  qm =
    (a, l) =>
    (u, { transform: o }) => {
      if (o === "none" || !o) return 0;
      const c = o.match(/^matrix3d\((.+)\)$/u);
      if (c) return wm(c[1], l);
      {
        const d = o.match(/^matrix\((.+)\)$/u);
        return d ? wm(d[1], a) : 0;
      }
    },
  xS = new Set(["x", "y", "z"]),
  ES = ua.filter((a) => !xS.has(a));
function DS(a) {
  const l = [];
  return (
    ES.forEach((u) => {
      const o = a.getValue(u);
      o !== void 0 &&
        (l.push([u, o.get()]), o.set(u.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const sa = {
  width: ({ x: a }, { paddingLeft: l = "0", paddingRight: u = "0" }) =>
    a.max - a.min - parseFloat(l) - parseFloat(u),
  height: ({ y: a }, { paddingTop: l = "0", paddingBottom: u = "0" }) =>
    a.max - a.min - parseFloat(l) - parseFloat(u),
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  x: qm(4, 13),
  y: qm(5, 14),
};
sa.translateX = sa.x;
sa.translateY = sa.y;
const pi = new Set();
let qr = !1,
  Yr = !1;
function Vy() {
  if (Yr) {
    const a = Array.from(pi).filter((o) => o.needsMeasurement),
      l = new Set(a.map((o) => o.element)),
      u = new Map();
    l.forEach((o) => {
      const c = DS(o);
      c.length && (u.set(o, c), o.render());
    }),
      a.forEach((o) => o.measureInitialState()),
      l.forEach((o) => {
        o.render();
        const c = u.get(o);
        c &&
          c.forEach(([d, h]) => {
            var y;
            (y = o.getValue(d)) === null || y === void 0 || y.set(h);
          });
      }),
      a.forEach((o) => o.measureEndState()),
      a.forEach((o) => {
        o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
      });
  }
  (Yr = !1), (qr = !1), pi.forEach((a) => a.complete()), pi.clear();
}
function zy() {
  pi.forEach((a) => {
    a.readKeyframes(), a.needsMeasurement && (Yr = !0);
  });
}
function MS() {
  zy(), Vy();
}
class Oc {
  constructor(l, u, o, c, d, h = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = u),
      (this.name = o),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = h);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (pi.add(this),
          qr || ((qr = !0), Dt.read(zy), Dt.resolveKeyframes(Vy)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: u,
      element: o,
      motionValue: c,
    } = this;
    for (let d = 0; d < l.length; d++)
      if (l[d] === null)
        if (d === 0) {
          const h = c == null ? void 0 : c.get(),
            y = l[l.length - 1];
          if (h !== void 0) l[0] = h;
          else if (o && u) {
            const m = o.readValue(u, y);
            m != null && (l[0] = m);
          }
          l[0] === void 0 && (l[0] = y), c && h === void 0 && c.set(l[0]);
        } else l[d] = l[d - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      pi.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), pi.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const _y = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),
  RS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function OS(a) {
  const l = RS.exec(a);
  if (!l) return [,];
  const [, u, o, c] = l;
  return [`--${u ?? o}`, c];
}
function Uy(a, l, u = 1) {
  const [o, c] = OS(a);
  if (!o) return;
  const d = window.getComputedStyle(l).getPropertyValue(o);
  if (d) {
    const h = d.trim();
    return _y(h) ? parseFloat(h) : h;
  }
  return uc(c) ? Uy(c, l, u + 1) : c;
}
const By = (a) => (l) => l.test(a),
  CS = { test: (a) => a === "auto", parse: (a) => a },
  Ny = [oa, et, ke, qn, A1, T1, CS],
  Ym = (a) => Ny.find(By(a));
class jy extends Oc {
  constructor(l, u, o, c, d) {
    super(l, u, o, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: u, name: o } = this;
    if (!u || !u.current) return;
    super.readKeyframes();
    for (let m = 0; m < l.length; m++) {
      let p = l[m];
      if (typeof p == "string" && ((p = p.trim()), uc(p))) {
        const v = Uy(p, u.current);
        v !== void 0 && (l[m] = v),
          m === l.length - 1 && (this.finalKeyframe = p);
      }
    }
    if ((this.resolveNoneKeyframes(), !ry.has(o) || l.length !== 2)) return;
    const [c, d] = l,
      h = Ym(c),
      y = Ym(d);
    if (h !== y)
      if (Lm(h) && Lm(y))
        for (let m = 0; m < l.length; m++) {
          const p = l[m];
          typeof p == "string" && (l[m] = parseFloat(p));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: u } = this,
      o = [];
    for (let c = 0; c < l.length; c++) lS(l[c]) && o.push(c);
    o.length && AS(l, o, u);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: u, name: o } = this;
    if (!l || !l.current) return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = sa[o](
        l.measureViewportBox(),
        window.getComputedStyle(l.current)
      )),
      (u[0] = this.measuredOrigin);
    const c = u[u.length - 1];
    c !== void 0 && l.getValue(o, c).jump(c, !1);
  }
  measureEndState() {
    var l;
    const { element: u, name: o, unresolvedKeyframes: c } = this;
    if (!u || !u.current) return;
    const d = u.getValue(o);
    d && d.jump(this.measuredOrigin, !1);
    const h = c.length - 1,
      y = c[h];
    (c[h] = sa[o](u.measureViewportBox(), window.getComputedStyle(u.current))),
      y !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = y),
      !((l = this.removedTransforms) === null || l === void 0) &&
        l.length &&
        this.removedTransforms.forEach(([m, p]) => {
          u.getValue(m).set(p);
        }),
      this.resolveNoneKeyframes();
  }
}
const Gm = (a, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof a == "number" ||
        Array.isArray(a) ||
        (typeof a == "string" &&
          (Gn.test(a) || a === "0") &&
          !a.startsWith("url("))
      );
function VS(a) {
  const l = a[0];
  if (a.length === 1) return !0;
  for (let u = 0; u < a.length; u++) if (a[u] !== l) return !0;
}
function zS(a, l, u, o) {
  const c = a[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const d = a[a.length - 1],
    h = Gm(c, l),
    y = Gm(d, l);
  return !h || !y ? !1 : VS(a) || ((u === "spring" || Tc(u)) && o);
}
const _S = (a) => a !== null;
function au(a, { repeat: l, repeatType: u = "loop" }, o) {
  const c = a.filter(_S),
    d = l && u !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
  return !d || o === void 0 ? c[d] : o;
}
const US = 40;
class Hy {
  constructor({
    autoplay: l = !0,
    delay: u = 0,
    type: o = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: h = "loop",
    ...y
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Je.now()),
      (this.options = {
        autoplay: l,
        delay: u,
        type: o,
        repeat: c,
        repeatDelay: d,
        repeatType: h,
        ...y,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > US
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && MS(), this._resolved;
  }
  onKeyframesResolved(l, u) {
    (this.resolvedAt = Je.now()), (this.hasAttemptedResolve = !0);
    const {
      name: o,
      type: c,
      velocity: d,
      delay: h,
      onComplete: y,
      onUpdate: m,
      isGenerator: p,
    } = this.options;
    if (!p && !zS(l, o, c, d))
      if (h) this.options.duration = 0;
      else {
        m && m(au(l, this.options, u)), y && y(), this.resolveFinishedPromise();
        return;
      }
    const v = this.initPlayback(l, u);
    v !== !1 &&
      ((this._resolved = { keyframes: l, finalKeyframe: u, ...v }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(l, u) {
    return this.currentFinishedPromise.then(l, u);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((l) => {
      this.resolveFinishedPromise = l;
    });
  }
}
const Gr = 2e4;
function Ly(a) {
  let l = 0;
  const u = 50;
  let o = a.next(l);
  for (; !o.done && l < Gr; ) (l += u), (o = a.next(l));
  return l >= Gr ? 1 / 0 : l;
}
const Ct = (a, l, u) => a + (l - a) * u;
function xr(a, l, u) {
  return (
    u < 0 && (u += 1),
    u > 1 && (u -= 1),
    u < 1 / 6
      ? a + (l - a) * 6 * u
      : u < 1 / 2
      ? l
      : u < 2 / 3
      ? a + (l - a) * (2 / 3 - u) * 6
      : a
  );
}
function BS({ hue: a, saturation: l, lightness: u, alpha: o }) {
  (a /= 360), (l /= 100), (u /= 100);
  let c = 0,
    d = 0,
    h = 0;
  if (!l) c = d = h = u;
  else {
    const y = u < 0.5 ? u * (1 + l) : u + l - u * l,
      m = 2 * u - y;
    (c = xr(m, y, a + 1 / 3)), (d = xr(m, y, a)), (h = xr(m, y, a - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(h * 255),
    alpha: o,
  };
}
function Ps(a, l) {
  return (u) => (u > 0 ? l : a);
}
const Er = (a, l, u) => {
    const o = a * a,
      c = u * (l * l - o) + o;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  NS = [Lr, mi, ta],
  jS = (a) => NS.find((l) => l.test(a));
function Xm(a) {
  const l = jS(a);
  if (!l) return !1;
  let u = l.parse(a);
  return l === ta && (u = BS(u)), u;
}
const Qm = (a, l) => {
    const u = Xm(a),
      o = Xm(l);
    if (!u || !o) return Ps(a, l);
    const c = { ...u };
    return (d) => (
      (c.red = Er(u.red, o.red, d)),
      (c.green = Er(u.green, o.green, d)),
      (c.blue = Er(u.blue, o.blue, d)),
      (c.alpha = Ct(u.alpha, o.alpha, d)),
      mi.transform(c)
    );
  },
  HS = (a, l) => (u) => l(a(u)),
  El = (...a) => a.reduce(HS),
  Xr = new Set(["none", "hidden"]);
function LS(a, l) {
  return Xr.has(a) ? (u) => (u <= 0 ? a : l) : (u) => (u >= 1 ? l : a);
}
function wS(a, l) {
  return (u) => Ct(a, l, u);
}
function Cc(a) {
  return typeof a == "number"
    ? wS
    : typeof a == "string"
    ? uc(a)
      ? Ps
      : te.test(a)
      ? Qm
      : GS
    : Array.isArray(a)
    ? wy
    : typeof a == "object"
    ? te.test(a)
      ? Qm
      : qS
    : Ps;
}
function wy(a, l) {
  const u = [...a],
    o = u.length,
    c = a.map((d, h) => Cc(d)(d, l[h]));
  return (d) => {
    for (let h = 0; h < o; h++) u[h] = c[h](d);
    return u;
  };
}
function qS(a, l) {
  const u = { ...a, ...l },
    o = {};
  for (const c in u)
    a[c] !== void 0 && l[c] !== void 0 && (o[c] = Cc(a[c])(a[c], l[c]));
  return (c) => {
    for (const d in o) u[d] = o[d](c);
    return u;
  };
}
function YS(a, l) {
  var u;
  const o = [],
    c = { color: 0, var: 0, number: 0 };
  for (let d = 0; d < l.values.length; d++) {
    const h = l.types[d],
      y = a.indexes[h][c[h]],
      m = (u = a.values[y]) !== null && u !== void 0 ? u : 0;
    (o[d] = m), c[h]++;
  }
  return o;
}
const GS = (a, l) => {
  const u = Gn.createTransformer(l),
    o = bl(a),
    c = bl(l);
  return o.indexes.var.length === c.indexes.var.length &&
    o.indexes.color.length === c.indexes.color.length &&
    o.indexes.number.length >= c.indexes.number.length
    ? (Xr.has(a) && !c.values.length) || (Xr.has(l) && !o.values.length)
      ? LS(a, l)
      : El(wy(YS(o, c), c.values), u)
    : Ps(a, l);
};
function qy(a, l, u) {
  return typeof a == "number" && typeof l == "number" && typeof u == "number"
    ? Ct(a, l, u)
    : Cc(a)(a, l);
}
const XS = 5;
function Yy(a, l, u) {
  const o = Math.max(l - XS, 0);
  return cy(u - a(o), l - o);
}
const Ut = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Zm = 0.001;
function QS({
  duration: a = Ut.duration,
  bounce: l = Ut.bounce,
  velocity: u = Ut.velocity,
  mass: o = Ut.mass,
}) {
  let c,
    d,
    h = 1 - l;
  (h = pn(Ut.minDamping, Ut.maxDamping, h)),
    (a = pn(Ut.minDuration, Ut.maxDuration, mn(a))),
    h < 1
      ? ((c = (p) => {
          const v = p * h,
            b = v * a,
            A = v - u,
            O = Qr(p, h),
            _ = Math.exp(-b);
          return Zm - (A / O) * _;
        }),
        (d = (p) => {
          const b = p * h * a,
            A = b * u + u,
            O = Math.pow(h, 2) * Math.pow(p, 2) * a,
            _ = Math.exp(-b),
            B = Qr(Math.pow(p, 2), h);
          return ((-c(p) + Zm > 0 ? -1 : 1) * ((A - O) * _)) / B;
        }))
      : ((c = (p) => {
          const v = Math.exp(-p * a),
            b = (p - u) * a + 1;
          return -0.001 + v * b;
        }),
        (d = (p) => {
          const v = Math.exp(-p * a),
            b = (u - p) * (a * a);
          return v * b;
        }));
  const y = 5 / a,
    m = KS(c, d, y);
  if (((a = dn(a)), isNaN(m)))
    return { stiffness: Ut.stiffness, damping: Ut.damping, duration: a };
  {
    const p = Math.pow(m, 2) * o;
    return { stiffness: p, damping: h * 2 * Math.sqrt(o * p), duration: a };
  }
}
const ZS = 12;
function KS(a, l, u) {
  let o = u;
  for (let c = 1; c < ZS; c++) o = o - a(o) / l(o);
  return o;
}
function Qr(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const kS = ["duration", "bounce"],
  JS = ["stiffness", "damping", "mass"];
function Km(a, l) {
  return l.some((u) => a[u] !== void 0);
}
function PS(a) {
  let l = {
    velocity: Ut.velocity,
    stiffness: Ut.stiffness,
    damping: Ut.damping,
    mass: Ut.mass,
    isResolvedFromDuration: !1,
    ...a,
  };
  if (!Km(a, JS) && Km(a, kS))
    if (a.visualDuration) {
      const u = a.visualDuration,
        o = (2 * Math.PI) / (u * 1.2),
        c = o * o,
        d = 2 * pn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: Ut.mass, stiffness: c, damping: d };
    } else {
      const u = QS(a);
      (l = { ...l, ...u, mass: Ut.mass }), (l.isResolvedFromDuration = !0);
    }
  return l;
}
function Gy(a = Ut.visualDuration, l = Ut.bounce) {
  const u =
    typeof a != "object"
      ? { visualDuration: a, keyframes: [0, 1], bounce: l }
      : a;
  let { restSpeed: o, restDelta: c } = u;
  const d = u.keyframes[0],
    h = u.keyframes[u.keyframes.length - 1],
    y = { done: !1, value: d },
    {
      stiffness: m,
      damping: p,
      mass: v,
      duration: b,
      velocity: A,
      isResolvedFromDuration: O,
    } = PS({ ...u, velocity: -mn(u.velocity || 0) }),
    _ = A || 0,
    B = p / (2 * Math.sqrt(m * v)),
    w = h - d,
    j = mn(Math.sqrt(m / v)),
    Y = Math.abs(w) < 5;
  o || (o = Y ? Ut.restSpeed.granular : Ut.restSpeed.default),
    c || (c = Y ? Ut.restDelta.granular : Ut.restDelta.default);
  let X;
  if (B < 1) {
    const H = Qr(j, B);
    X = (F) => {
      const mt = Math.exp(-B * j * F);
      return (
        h - mt * (((_ + B * j * w) / H) * Math.sin(H * F) + w * Math.cos(H * F))
      );
    };
  } else if (B === 1) X = (H) => h - Math.exp(-j * H) * (w + (_ + j * w) * H);
  else {
    const H = j * Math.sqrt(B * B - 1);
    X = (F) => {
      const mt = Math.exp(-B * j * F),
        I = Math.min(H * F, 300);
      return (
        h - (mt * ((_ + B * j * w) * Math.sinh(I) + H * w * Math.cosh(I))) / H
      );
    };
  }
  const st = {
    calculatedDuration: (O && b) || null,
    next: (H) => {
      const F = X(H);
      if (O) y.done = H >= b;
      else {
        let mt = 0;
        B < 1 && (mt = H === 0 ? dn(_) : Yy(X, H, F));
        const I = Math.abs(mt) <= o,
          Q = Math.abs(h - F) <= c;
        y.done = I && Q;
      }
      return (y.value = y.done ? h : F), y;
    },
    toString: () => {
      const H = Math.min(Ly(st), Gr),
        F = hy((mt) => st.next(H * mt).value, H, 30);
      return H + "ms " + F;
    },
  };
  return st;
}
function km({
  keyframes: a,
  velocity: l = 0,
  power: u = 0.8,
  timeConstant: o = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: h,
  min: y,
  max: m,
  restDelta: p = 0.5,
  restSpeed: v,
}) {
  const b = a[0],
    A = { done: !1, value: b },
    O = (I) => (y !== void 0 && I < y) || (m !== void 0 && I > m),
    _ = (I) =>
      y === void 0
        ? m
        : m === void 0 || Math.abs(y - I) < Math.abs(m - I)
        ? y
        : m;
  let B = u * l;
  const w = b + B,
    j = h === void 0 ? w : h(w);
  j !== w && (B = j - b);
  const Y = (I) => -B * Math.exp(-I / o),
    X = (I) => j + Y(I),
    st = (I) => {
      const Q = Y(I),
        it = X(I);
      (A.done = Math.abs(Q) <= p), (A.value = A.done ? j : it);
    };
  let H, F;
  const mt = (I) => {
    O(A.value) &&
      ((H = I),
      (F = Gy({
        keyframes: [A.value, _(A.value)],
        velocity: Yy(X, I, A.value),
        damping: c,
        stiffness: d,
        restDelta: p,
        restSpeed: v,
      })));
  };
  return (
    mt(0),
    {
      calculatedDuration: null,
      next: (I) => {
        let Q = !1;
        return (
          !F && H === void 0 && ((Q = !0), st(I), mt(I)),
          H !== void 0 && I >= H ? F.next(I - H) : (!Q && st(I), A)
        );
      },
    }
  );
}
const FS = xl(0.42, 0, 1, 1),
  WS = xl(0, 0, 0.58, 1),
  Xy = xl(0.42, 0, 0.58, 1),
  $S = (a) => Array.isArray(a) && typeof a[0] != "number",
  IS = {
    linear: ge,
    easeIn: FS,
    easeInOut: Xy,
    easeOut: WS,
    circIn: Ec,
    circInOut: Ay,
    circOut: Ty,
    backIn: xc,
    backInOut: Sy,
    backOut: vy,
    anticipate: by,
  },
  Jm = (a) => {
    if (Ac(a)) {
      Qp(a.length === 4);
      const [l, u, o, c] = a;
      return xl(l, u, o, c);
    } else if (typeof a == "string") return IS[a];
    return a;
  };
function tb(a, l, u) {
  const o = [],
    c = u || qy,
    d = a.length - 1;
  for (let h = 0; h < d; h++) {
    let y = c(a[h], a[h + 1]);
    if (l) {
      const m = Array.isArray(l) ? l[h] || ge : l;
      y = El(m, y);
    }
    o.push(y);
  }
  return o;
}
function eb(a, l, { clamp: u = !0, ease: o, mixer: c } = {}) {
  const d = a.length;
  if ((Qp(d === l.length), d === 1)) return () => l[0];
  if (d === 2 && l[0] === l[1]) return () => l[1];
  const h = a[0] === a[1];
  a[0] > a[d - 1] && ((a = [...a].reverse()), (l = [...l].reverse()));
  const y = tb(l, o, c),
    m = y.length,
    p = (v) => {
      if (h && v < a[0]) return l[0];
      let b = 0;
      if (m > 1) for (; b < a.length - 2 && !(v < a[b + 1]); b++);
      const A = la(a[b], a[b + 1], v);
      return y[b](A);
    };
  return u ? (v) => p(pn(a[0], a[d - 1], v)) : p;
}
function nb(a, l) {
  const u = a[a.length - 1];
  for (let o = 1; o <= l; o++) {
    const c = la(0, l, o);
    a.push(Ct(u, 1, c));
  }
}
function ib(a) {
  const l = [0];
  return nb(l, a.length - 1), l;
}
function ab(a, l) {
  return a.map((u) => u * l);
}
function lb(a, l) {
  return a.map(() => l || Xy).splice(0, a.length - 1);
}
function Fs({
  duration: a = 300,
  keyframes: l,
  times: u,
  ease: o = "easeInOut",
}) {
  const c = $S(o) ? o.map(Jm) : Jm(o),
    d = { done: !1, value: l[0] },
    h = ab(u && u.length === l.length ? u : ib(l), a),
    y = eb(h, l, { ease: Array.isArray(c) ? c : lb(l, c) });
  return {
    calculatedDuration: a,
    next: (m) => ((d.value = y(m)), (d.done = m >= a), d),
  };
}
const sb = (a) => {
    const l = ({ timestamp: u }) => a(u);
    return {
      start: () => Dt.update(l, !0),
      stop: () => Yn(l),
      now: () => (Ft.isProcessing ? Ft.timestamp : Je.now()),
    };
  },
  ub = { decay: km, inertia: km, tween: Fs, keyframes: Fs, spring: Gy },
  ob = (a) => a / 100;
class Vc extends Hy {
  constructor(l) {
    super(l),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: m } = this.options;
        m && m();
      });
    const { name: u, motionValue: o, element: c, keyframes: d } = this.options,
      h = (c == null ? void 0 : c.KeyframeResolver) || Oc,
      y = (m, p) => this.onKeyframesResolved(m, p);
    (this.resolver = new h(d, y, u, o, c)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(l) {
    const {
        type: u = "keyframes",
        repeat: o = 0,
        repeatDelay: c = 0,
        repeatType: d,
        velocity: h = 0,
      } = this.options,
      y = Tc(u) ? u : ub[u] || Fs;
    let m, p;
    y !== Fs &&
      typeof l[0] != "number" &&
      ((m = El(ob, qy(l[0], l[1]))), (l = [0, 100]));
    const v = y({ ...this.options, keyframes: l });
    d === "mirror" &&
      (p = y({ ...this.options, keyframes: [...l].reverse(), velocity: -h })),
      v.calculatedDuration === null && (v.calculatedDuration = Ly(v));
    const { calculatedDuration: b } = v,
      A = b + c,
      O = A * (o + 1) - c;
    return {
      generator: v,
      mirroredGenerator: p,
      mapPercentToKeyframes: m,
      calculatedDuration: b,
      resolvedDuration: A,
      totalDuration: O,
    };
  }
  onPostResolved() {
    const { autoplay: l = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !l
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(l, u = !1) {
    const { resolved: o } = this;
    if (!o) {
      const { keyframes: I } = this.options;
      return { done: !0, value: I[I.length - 1] };
    }
    const {
      finalKeyframe: c,
      generator: d,
      mirroredGenerator: h,
      mapPercentToKeyframes: y,
      keyframes: m,
      calculatedDuration: p,
      totalDuration: v,
      resolvedDuration: b,
    } = o;
    if (this.startTime === null) return d.next(0);
    const {
      delay: A,
      repeat: O,
      repeatType: _,
      repeatDelay: B,
      onUpdate: w,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 &&
        (this.startTime = Math.min(l - v / this.speed, this.startTime)),
      u
        ? (this.currentTime = l)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(l - this.startTime) * this.speed);
    const j = this.currentTime - A * (this.speed >= 0 ? 1 : -1),
      Y = this.speed >= 0 ? j < 0 : j > v;
    (this.currentTime = Math.max(j, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = v);
    let X = this.currentTime,
      st = d;
    if (O) {
      const I = Math.min(this.currentTime, v) / b;
      let Q = Math.floor(I),
        it = I % 1;
      !it && I >= 1 && (it = 1),
        it === 1 && Q--,
        (Q = Math.min(Q, O + 1)),
        !!(Q % 2) &&
          (_ === "reverse"
            ? ((it = 1 - it), B && (it -= B / b))
            : _ === "mirror" && (st = h)),
        (X = pn(0, 1, it) * b);
    }
    const H = Y ? { done: !1, value: m[0] } : st.next(X);
    y && (H.value = y(H.value));
    let { done: F } = H;
    !Y &&
      p !== null &&
      (F = this.speed >= 0 ? this.currentTime >= v : this.currentTime <= 0);
    const mt =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && F));
    return (
      mt && c !== void 0 && (H.value = au(m, this.options, c)),
      w && w(H.value),
      mt && this.finish(),
      H
    );
  }
  get duration() {
    const { resolved: l } = this;
    return l ? mn(l.calculatedDuration) : 0;
  }
  get time() {
    return mn(this.currentTime);
  }
  set time(l) {
    (l = dn(l)),
      (this.currentTime = l),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = l)
        : this.driver && (this.startTime = this.driver.now() - l / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const u = this.playbackSpeed !== l;
    (this.playbackSpeed = l), u && (this.time = mn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: l = sb, onPlay: u, startTime: o } = this.options;
    this.driver || (this.driver = l((d) => this.tick(d))), u && u();
    const c = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = c - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = c)
      : (this.startTime = o ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var l;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (l = this.currentTime) !== null && l !== void 0 ? l : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: l } = this.options;
    l && l();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(l) {
    return (this.startTime = 0), this.tick(l, !0);
  }
}
const rb = new Set(["opacity", "clipPath", "filter", "transform"]);
function cb(
  a,
  l,
  u,
  {
    delay: o = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: h = "loop",
    ease: y = "easeInOut",
    times: m,
  } = {}
) {
  const p = { [l]: u };
  m && (p.offset = m);
  const v = my(y, c);
  return (
    Array.isArray(v) && (p.easing = v),
    a.animate(p, {
      delay: o,
      duration: c,
      easing: Array.isArray(v) ? "linear" : v,
      fill: "both",
      iterations: d + 1,
      direction: h === "reverse" ? "alternate" : "normal",
    })
  );
}
const fb = bc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Ws = 10,
  hb = 2e4;
function db(a) {
  return Tc(a.type) || a.type === "spring" || !dy(a.ease);
}
function mb(a, l) {
  const u = new Vc({
    ...l,
    keyframes: a,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let o = { done: !1, value: a[0] };
  const c = [];
  let d = 0;
  for (; !o.done && d < hb; ) (o = u.sample(d)), c.push(o.value), (d += Ws);
  return { times: void 0, keyframes: c, duration: d - Ws, ease: "linear" };
}
const Qy = { anticipate: by, backInOut: Sy, circInOut: Ay };
function pb(a) {
  return a in Qy;
}
class Pm extends Hy {
  constructor(l) {
    super(l);
    const { name: u, motionValue: o, element: c, keyframes: d } = this.options;
    (this.resolver = new jy(
      d,
      (h, y) => this.onKeyframesResolved(h, y),
      u,
      o,
      c
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(l, u) {
    let {
      duration: o = 300,
      times: c,
      ease: d,
      type: h,
      motionValue: y,
      name: m,
      startTime: p,
    } = this.options;
    if (!y.owner || !y.owner.current) return !1;
    if (
      (typeof d == "string" && Js() && pb(d) && (d = Qy[d]), db(this.options))
    ) {
      const {
          onComplete: b,
          onUpdate: A,
          motionValue: O,
          element: _,
          ...B
        } = this.options,
        w = mb(l, B);
      (l = w.keyframes),
        l.length === 1 && (l[1] = l[0]),
        (o = w.duration),
        (c = w.times),
        (d = w.ease),
        (h = "keyframes");
    }
    const v = cb(y.owner.current, m, l, {
      ...this.options,
      duration: o,
      times: c,
      ease: d,
    });
    return (
      (v.startTime = p ?? this.calcStartTime()),
      this.pendingTimeline
        ? (jm(v, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (v.onfinish = () => {
            const { onComplete: b } = this.options;
            y.set(au(l, this.options, u)),
              b && b(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: v, duration: o, times: c, type: h, ease: d, keyframes: l }
    );
  }
  get duration() {
    const { resolved: l } = this;
    if (!l) return 0;
    const { duration: u } = l;
    return mn(u);
  }
  get time() {
    const { resolved: l } = this;
    if (!l) return 0;
    const { animation: u } = l;
    return mn(u.currentTime || 0);
  }
  set time(l) {
    const { resolved: u } = this;
    if (!u) return;
    const { animation: o } = u;
    o.currentTime = dn(l);
  }
  get speed() {
    const { resolved: l } = this;
    if (!l) return 1;
    const { animation: u } = l;
    return u.playbackRate;
  }
  set speed(l) {
    const { resolved: u } = this;
    if (!u) return;
    const { animation: o } = u;
    o.playbackRate = l;
  }
  get state() {
    const { resolved: l } = this;
    if (!l) return "idle";
    const { animation: u } = l;
    return u.playState;
  }
  get startTime() {
    const { resolved: l } = this;
    if (!l) return null;
    const { animation: u } = l;
    return u.startTime;
  }
  attachTimeline(l) {
    if (!this._resolved) this.pendingTimeline = l;
    else {
      const { resolved: u } = this;
      if (!u) return ge;
      const { animation: o } = u;
      jm(o, l);
    }
    return ge;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: l } = this;
    if (!l) return;
    const { animation: u } = l;
    u.playState === "finished" && this.updateFinishedPromise(), u.play();
  }
  pause() {
    const { resolved: l } = this;
    if (!l) return;
    const { animation: u } = l;
    u.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: l } = this;
    if (!l) return;
    const {
      animation: u,
      keyframes: o,
      duration: c,
      type: d,
      ease: h,
      times: y,
    } = l;
    if (u.playState === "idle" || u.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: p,
          onUpdate: v,
          onComplete: b,
          element: A,
          ...O
        } = this.options,
        _ = new Vc({
          ...O,
          keyframes: o,
          duration: c,
          type: d,
          ease: h,
          times: y,
          isGenerator: !0,
        }),
        B = dn(this.time);
      p.setWithVelocity(_.sample(B - Ws).value, _.sample(B).value, Ws);
    }
    const { onStop: m } = this.options;
    m && m(), this.cancel();
  }
  complete() {
    const { resolved: l } = this;
    l && l.animation.finish();
  }
  cancel() {
    const { resolved: l } = this;
    l && l.animation.cancel();
  }
  static supports(l) {
    const {
      motionValue: u,
      name: o,
      repeatDelay: c,
      repeatType: d,
      damping: h,
      type: y,
    } = l;
    if (!u || !u.owner || !(u.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: m, transformTemplate: p } = u.owner.getProps();
    return (
      fb() &&
      o &&
      rb.has(o) &&
      !m &&
      !p &&
      !c &&
      d !== "mirror" &&
      h !== 0 &&
      y !== "inertia"
    );
  }
}
const yb = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  gb = (a) => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  vb = { type: "keyframes", duration: 0.8 },
  Sb = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  bb = (a, { keyframes: l }) =>
    l.length > 2
      ? vb
      : yi.has(a)
      ? a.startsWith("scale")
        ? gb(l[1])
        : yb
      : Sb;
function Tb({
  when: a,
  delay: l,
  delayChildren: u,
  staggerChildren: o,
  staggerDirection: c,
  repeat: d,
  repeatType: h,
  repeatDelay: y,
  from: m,
  elapsed: p,
  ...v
}) {
  return !!Object.keys(v).length;
}
const zc =
  (a, l, u, o = {}, c, d) =>
  (h) => {
    const y = yc(o, a) || {},
      m = y.delay || o.delay || 0;
    let { elapsed: p = 0 } = o;
    p = p - dn(m);
    let v = {
      keyframes: Array.isArray(u) ? u : [null, u],
      ease: "easeOut",
      velocity: l.getVelocity(),
      ...y,
      delay: -p,
      onUpdate: (A) => {
        l.set(A), y.onUpdate && y.onUpdate(A);
      },
      onComplete: () => {
        h(), y.onComplete && y.onComplete();
      },
      name: a,
      motionValue: l,
      element: d ? void 0 : c,
    };
    Tb(y) || (v = { ...v, ...bb(a, v) }),
      v.duration && (v.duration = dn(v.duration)),
      v.repeatDelay && (v.repeatDelay = dn(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from);
    let b = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        ((v.duration = 0), v.delay === 0 && (b = !0)),
      b && !d && l.get() !== void 0)
    ) {
      const A = au(v.keyframes, y);
      if (A !== void 0)
        return (
          Dt.update(() => {
            v.onUpdate(A), v.onComplete();
          }),
          new I1([])
        );
    }
    return !d && Pm.supports(v) ? new Pm(v) : new Vc(v);
  };
function Ab({ protectedKeys: a, needsAnimating: l }, u) {
  const o = a.hasOwnProperty(u) && l[u] !== !0;
  return (l[u] = !1), o;
}
function Zy(a, l, { delay: u = 0, transitionOverride: o, type: c } = {}) {
  var d;
  let { transition: h = a.getDefaultTransition(), transitionEnd: y, ...m } = l;
  o && (h = o);
  const p = [],
    v = c && a.animationState && a.animationState.getState()[c];
  for (const b in m) {
    const A = a.getValue(
        b,
        (d = a.latestValues[b]) !== null && d !== void 0 ? d : null
      ),
      O = m[b];
    if (O === void 0 || (v && Ab(v, b))) continue;
    const _ = { delay: u, ...yc(h || {}, b) };
    let B = !1;
    if (window.MotionHandoffAnimation) {
      const j = fy(a);
      if (j) {
        const Y = window.MotionHandoffAnimation(j, b, Dt);
        Y !== null && ((_.startTime = Y), (B = !0));
      }
    }
    jr(a, b),
      A.start(
        zc(b, A, O, a.shouldReduceMotion && ry.has(b) ? { type: !1 } : _, a, B)
      );
    const w = A.animation;
    w && p.push(w);
  }
  return (
    y &&
      Promise.all(p).then(() => {
        Dt.update(() => {
          y && P1(a, y);
        });
      }),
    p
  );
}
function Zr(a, l, u = {}) {
  var o;
  const c = vl(
    a,
    l,
    u.type === "exit"
      ? (o = a.presenceContext) === null || o === void 0
        ? void 0
        : o.custom
      : void 0
  );
  let { transition: d = a.getDefaultTransition() || {} } = c || {};
  u.transitionOverride && (d = u.transitionOverride);
  const h = c ? () => Promise.all(Zy(a, c, u)) : () => Promise.resolve(),
    y =
      a.variantChildren && a.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: v = 0,
              staggerChildren: b,
              staggerDirection: A,
            } = d;
            return xb(a, l, v + p, b, A, u);
          }
        : () => Promise.resolve(),
    { when: m } = d;
  if (m) {
    const [p, v] = m === "beforeChildren" ? [h, y] : [y, h];
    return p().then(() => v());
  } else return Promise.all([h(), y(u.delay)]);
}
function xb(a, l, u = 0, o = 0, c = 1, d) {
  const h = [],
    y = (a.variantChildren.size - 1) * o,
    m = c === 1 ? (p = 0) => p * o : (p = 0) => y - p * o;
  return (
    Array.from(a.variantChildren)
      .sort(Eb)
      .forEach((p, v) => {
        p.notify("AnimationStart", l),
          h.push(
            Zr(p, l, { ...d, delay: u + m(v) }).then(() =>
              p.notify("AnimationComplete", l)
            )
          );
      }),
    Promise.all(h)
  );
}
function Eb(a, l) {
  return a.sortNodePosition(l);
}
function Db(a, l, u = {}) {
  a.notify("AnimationStart", l);
  let o;
  if (Array.isArray(l)) {
    const c = l.map((d) => Zr(a, d, u));
    o = Promise.all(c);
  } else if (typeof l == "string") o = Zr(a, l, u);
  else {
    const c = typeof l == "function" ? vl(a, l, u.custom) : l;
    o = Promise.all(Zy(a, c, u));
  }
  return o.then(() => {
    a.notify("AnimationComplete", l);
  });
}
function Ky(a, l) {
  if (!Array.isArray(l)) return !1;
  const u = l.length;
  if (u !== a.length) return !1;
  for (let o = 0; o < u; o++) if (l[o] !== a[o]) return !1;
  return !0;
}
const Mb = ic.length;
function ky(a) {
  if (!a) return;
  if (!a.isControllingVariants) {
    const u = a.parent ? ky(a.parent) || {} : {};
    return a.props.initial !== void 0 && (u.initial = a.props.initial), u;
  }
  const l = {};
  for (let u = 0; u < Mb; u++) {
    const o = ic[u],
      c = a.props[o];
    (pl(c) || c === !1) && (l[o] = c);
  }
  return l;
}
const Rb = [...nc].reverse(),
  Ob = nc.length;
function Cb(a) {
  return (l) =>
    Promise.all(l.map(({ animation: u, options: o }) => Db(a, u, o)));
}
function Vb(a) {
  let l = Cb(a),
    u = Fm(),
    o = !0;
  const c = (m) => (p, v) => {
    var b;
    const A = vl(
      a,
      v,
      m === "exit"
        ? (b = a.presenceContext) === null || b === void 0
          ? void 0
          : b.custom
        : void 0
    );
    if (A) {
      const { transition: O, transitionEnd: _, ...B } = A;
      p = { ...p, ...B, ..._ };
    }
    return p;
  };
  function d(m) {
    l = m(a);
  }
  function h(m) {
    const { props: p } = a,
      v = ky(a.parent) || {},
      b = [],
      A = new Set();
    let O = {},
      _ = 1 / 0;
    for (let w = 0; w < Ob; w++) {
      const j = Rb[w],
        Y = u[j],
        X = p[j] !== void 0 ? p[j] : v[j],
        st = pl(X),
        H = j === m ? Y.isActive : null;
      H === !1 && (_ = w);
      let F = X === v[j] && X !== p[j] && st;
      if (
        (F && o && a.manuallyAnimateOnMount && (F = !1),
        (Y.protectedKeys = { ...O }),
        (!Y.isActive && H === null) ||
          (!X && !Y.prevProp) ||
          nu(X) ||
          typeof X == "boolean")
      )
        continue;
      const mt = zb(Y.prevProp, X);
      let I = mt || (j === m && Y.isActive && !F && st) || (w > _ && st),
        Q = !1;
      const it = Array.isArray(X) ? X : [X];
      let qt = it.reduce(c(j), {});
      H === !1 && (qt = {});
      const { prevResolvedValues: ve = {} } = Y,
        Se = { ...ve, ...qt },
        be = (J) => {
          (I = !0),
            A.has(J) && ((Q = !0), A.delete(J)),
            (Y.needsAnimating[J] = !0);
          const P = a.getValue(J);
          P && (P.liveStyle = !1);
        };
      for (const J in Se) {
        const P = qt[J],
          vt = ve[J];
        if (O.hasOwnProperty(J)) continue;
        let T = !1;
        Nr(P) && Nr(vt) ? (T = !Ky(P, vt)) : (T = P !== vt),
          T
            ? P != null
              ? be(J)
              : A.add(J)
            : P !== void 0 && A.has(J)
            ? be(J)
            : (Y.protectedKeys[J] = !0);
      }
      (Y.prevProp = X),
        (Y.prevResolvedValues = qt),
        Y.isActive && (O = { ...O, ...qt }),
        o && a.blockInitialAnimation && (I = !1),
        I &&
          (!(F && mt) || Q) &&
          b.push(...it.map((J) => ({ animation: J, options: { type: j } })));
    }
    if (A.size) {
      const w = {};
      if (typeof p.initial != "boolean") {
        const j = vl(a, Array.isArray(p.initial) ? p.initial[0] : p.initial);
        j && j.transition && (w.transition = j.transition);
      }
      A.forEach((j) => {
        const Y = a.getBaseTarget(j),
          X = a.getValue(j);
        X && (X.liveStyle = !0), (w[j] = Y ?? null);
      }),
        b.push({ animation: w });
    }
    let B = !!b.length;
    return (
      o &&
        (p.initial === !1 || p.initial === p.animate) &&
        !a.manuallyAnimateOnMount &&
        (B = !1),
      (o = !1),
      B ? l(b) : Promise.resolve()
    );
  }
  function y(m, p) {
    var v;
    if (u[m].isActive === p) return Promise.resolve();
    (v = a.variantChildren) === null ||
      v === void 0 ||
      v.forEach((A) => {
        var O;
        return (O = A.animationState) === null || O === void 0
          ? void 0
          : O.setActive(m, p);
      }),
      (u[m].isActive = p);
    const b = h(m);
    for (const A in u) u[A].protectedKeys = {};
    return b;
  }
  return {
    animateChanges: h,
    setActive: y,
    setAnimateFunction: d,
    getState: () => u,
    reset: () => {
      (u = Fm()), (o = !0);
    },
  };
}
function zb(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !Ky(l, a) : !1;
}
function hi(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Fm() {
  return {
    animate: hi(!0),
    whileInView: hi(),
    whileHover: hi(),
    whileTap: hi(),
    whileDrag: hi(),
    whileFocus: hi(),
    exit: hi(),
  };
}
class Xn {
  constructor(l) {
    (this.isMounted = !1), (this.node = l);
  }
  update() {}
}
class _b extends Xn {
  constructor(l) {
    super(l), l.animationState || (l.animationState = Vb(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    nu(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: u } = this.node.prevProps || {};
    l !== u && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    this.node.animationState.reset(),
      (l = this.unmountControls) === null || l === void 0 || l.call(this);
  }
}
let Ub = 0;
class Bb extends Xn {
  constructor() {
    super(...arguments), (this.id = Ub++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: u } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === o) return;
    const c = this.node.animationState.setActive("exit", !l);
    u &&
      !l &&
      c.then(() => {
        u(this.id);
      });
  }
  mount() {
    const { register: l, onExitComplete: u } = this.node.presenceContext || {};
    u && u(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {}
}
const Nb = { animation: { Feature: _b }, exit: { Feature: Bb } },
  we = { x: !1, y: !1 };
function Jy() {
  return we.x || we.y;
}
function jb(a) {
  return a === "x" || a === "y"
    ? we[a]
      ? null
      : ((we[a] = !0),
        () => {
          we[a] = !1;
        })
    : we.x || we.y
    ? null
    : ((we.x = we.y = !0),
      () => {
        we.x = we.y = !1;
      });
}
const _c = (a) =>
  a.pointerType === "mouse"
    ? typeof a.button != "number" || a.button <= 0
    : a.isPrimary !== !1;
function Tl(a, l, u, o = { passive: !0 }) {
  return a.addEventListener(l, u, o), () => a.removeEventListener(l, u);
}
function Dl(a) {
  return { point: { x: a.pageX, y: a.pageY } };
}
const Hb = (a) => (l) => _c(l) && a(l, Dl(l));
function hl(a, l, u, o) {
  return Tl(a, l, Hb(u), o);
}
const Wm = (a, l) => Math.abs(a - l);
function Lb(a, l) {
  const u = Wm(a.x, l.x),
    o = Wm(a.y, l.y);
  return Math.sqrt(u ** 2 + o ** 2);
}
class Py {
  constructor(
    l,
    u,
    { transformPagePoint: o, contextWindow: c, dragSnapToOrigin: d = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const b = Mr(this.lastMoveEventInfo, this.history),
          A = this.startEvent !== null,
          O = Lb(b.offset, { x: 0, y: 0 }) >= 3;
        if (!A && !O) return;
        const { point: _ } = b,
          { timestamp: B } = Ft;
        this.history.push({ ..._, timestamp: B });
        const { onStart: w, onMove: j } = this.handlers;
        A ||
          (w && w(this.lastMoveEvent, b),
          (this.startEvent = this.lastMoveEvent)),
          j && j(this.lastMoveEvent, b);
      }),
      (this.handlePointerMove = (b, A) => {
        (this.lastMoveEvent = b),
          (this.lastMoveEventInfo = Dr(A, this.transformPagePoint)),
          Dt.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (b, A) => {
        this.end();
        const { onEnd: O, onSessionEnd: _, resumeAnimation: B } = this.handlers;
        if (
          (this.dragSnapToOrigin && B && B(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const w = Mr(
          b.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Dr(A, this.transformPagePoint),
          this.history
        );
        this.startEvent && O && O(b, w), _ && _(b, w);
      }),
      !_c(l))
    )
      return;
    (this.dragSnapToOrigin = d),
      (this.handlers = u),
      (this.transformPagePoint = o),
      (this.contextWindow = c || window);
    const h = Dl(l),
      y = Dr(h, this.transformPagePoint),
      { point: m } = y,
      { timestamp: p } = Ft;
    this.history = [{ ...m, timestamp: p }];
    const { onSessionStart: v } = u;
    v && v(l, Mr(y, this.history)),
      (this.removeListeners = El(
        hl(this.contextWindow, "pointermove", this.handlePointerMove),
        hl(this.contextWindow, "pointerup", this.handlePointerUp),
        hl(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), Yn(this.updatePoint);
  }
}
function Dr(a, l) {
  return l ? { point: l(a.point) } : a;
}
function $m(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function Mr({ point: a }, l) {
  return {
    point: a,
    delta: $m(a, Fy(l)),
    offset: $m(a, wb(l)),
    velocity: qb(l, 0.1),
  };
}
function wb(a) {
  return a[0];
}
function Fy(a) {
  return a[a.length - 1];
}
function qb(a, l) {
  if (a.length < 2) return { x: 0, y: 0 };
  let u = a.length - 1,
    o = null;
  const c = Fy(a);
  for (; u >= 0 && ((o = a[u]), !(c.timestamp - o.timestamp > dn(l))); ) u--;
  if (!o) return { x: 0, y: 0 };
  const d = mn(c.timestamp - o.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const h = { x: (c.x - o.x) / d, y: (c.y - o.y) / d };
  return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h;
}
const Wy = 1e-4,
  Yb = 1 - Wy,
  Gb = 1 + Wy,
  $y = 0.01,
  Xb = 0 - $y,
  Qb = 0 + $y;
function se(a) {
  return a.max - a.min;
}
function Zb(a, l, u) {
  return Math.abs(a - l) <= u;
}
function Im(a, l, u, o = 0.5) {
  (a.origin = o),
    (a.originPoint = Ct(l.min, l.max, a.origin)),
    (a.scale = se(u) / se(l)),
    (a.translate = Ct(u.min, u.max, a.origin) - a.originPoint),
    ((a.scale >= Yb && a.scale <= Gb) || isNaN(a.scale)) && (a.scale = 1),
    ((a.translate >= Xb && a.translate <= Qb) || isNaN(a.translate)) &&
      (a.translate = 0);
}
function dl(a, l, u, o) {
  Im(a.x, l.x, u.x, o ? o.originX : void 0),
    Im(a.y, l.y, u.y, o ? o.originY : void 0);
}
function tp(a, l, u) {
  (a.min = u.min + l.min), (a.max = a.min + se(l));
}
function Kb(a, l, u) {
  tp(a.x, l.x, u.x), tp(a.y, l.y, u.y);
}
function ep(a, l, u) {
  (a.min = l.min - u.min), (a.max = a.min + se(l));
}
function ml(a, l, u) {
  ep(a.x, l.x, u.x), ep(a.y, l.y, u.y);
}
function kb(a, { min: l, max: u }, o) {
  return (
    l !== void 0 && a < l
      ? (a = o ? Ct(l, a, o.min) : Math.max(a, l))
      : u !== void 0 && a > u && (a = o ? Ct(u, a, o.max) : Math.min(a, u)),
    a
  );
}
function np(a, l, u) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: u !== void 0 ? a.max + u - (a.max - a.min) : void 0,
  };
}
function Jb(a, { top: l, left: u, bottom: o, right: c }) {
  return { x: np(a.x, u, c), y: np(a.y, l, o) };
}
function ip(a, l) {
  let u = l.min - a.min,
    o = l.max - a.max;
  return l.max - l.min < a.max - a.min && ([u, o] = [o, u]), { min: u, max: o };
}
function Pb(a, l) {
  return { x: ip(a.x, l.x), y: ip(a.y, l.y) };
}
function Fb(a, l) {
  let u = 0.5;
  const o = se(a),
    c = se(l);
  return (
    c > o
      ? (u = la(l.min, l.max - o, a.min))
      : o > c && (u = la(a.min, a.max - c, l.min)),
    pn(0, 1, u)
  );
}
function Wb(a, l) {
  const u = {};
  return (
    l.min !== void 0 && (u.min = l.min - a.min),
    l.max !== void 0 && (u.max = l.max - a.min),
    u
  );
}
const Kr = 0.35;
function $b(a = Kr) {
  return (
    a === !1 ? (a = 0) : a === !0 && (a = Kr),
    { x: ap(a, "left", "right"), y: ap(a, "top", "bottom") }
  );
}
function ap(a, l, u) {
  return { min: lp(a, l), max: lp(a, u) };
}
function lp(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const sp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ea = () => ({ x: sp(), y: sp() }),
  up = () => ({ min: 0, max: 0 }),
  Nt = () => ({ x: up(), y: up() });
function Be(a) {
  return [a("x"), a("y")];
}
function Iy({ top: a, left: l, right: u, bottom: o }) {
  return { x: { min: l, max: u }, y: { min: a, max: o } };
}
function Ib({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function tT(a, l) {
  if (!l) return a;
  const u = l({ x: a.left, y: a.top }),
    o = l({ x: a.right, y: a.bottom });
  return { top: u.y, left: u.x, bottom: o.y, right: o.x };
}
function Rr(a) {
  return a === void 0 || a === 1;
}
function kr({ scale: a, scaleX: l, scaleY: u }) {
  return !Rr(a) || !Rr(l) || !Rr(u);
}
function di(a) {
  return (
    kr(a) ||
    t0(a) ||
    a.z ||
    a.rotate ||
    a.rotateX ||
    a.rotateY ||
    a.skewX ||
    a.skewY
  );
}
function t0(a) {
  return op(a.x) || op(a.y);
}
function op(a) {
  return a && a !== "0%";
}
function $s(a, l, u) {
  const o = a - u,
    c = l * o;
  return u + c;
}
function rp(a, l, u, o, c) {
  return c !== void 0 && (a = $s(a, c, o)), $s(a, u, o) + l;
}
function Jr(a, l = 0, u = 1, o, c) {
  (a.min = rp(a.min, l, u, o, c)), (a.max = rp(a.max, l, u, o, c));
}
function e0(a, { x: l, y: u }) {
  Jr(a.x, l.translate, l.scale, l.originPoint),
    Jr(a.y, u.translate, u.scale, u.originPoint);
}
const cp = 0.999999999999,
  fp = 1.0000000000001;
function eT(a, l, u, o = !1) {
  const c = u.length;
  if (!c) return;
  l.x = l.y = 1;
  let d, h;
  for (let y = 0; y < c; y++) {
    (d = u[y]), (h = d.projectionDelta);
    const { visualElement: m } = d.options;
    (m && m.props.style && m.props.style.display === "contents") ||
      (o &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        ia(a, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      h && ((l.x *= h.x.scale), (l.y *= h.y.scale), e0(a, h)),
      o && di(d.latestValues) && ia(a, d.latestValues));
  }
  l.x < fp && l.x > cp && (l.x = 1), l.y < fp && l.y > cp && (l.y = 1);
}
function na(a, l) {
  (a.min = a.min + l), (a.max = a.max + l);
}
function hp(a, l, u, o, c = 0.5) {
  const d = Ct(a.min, a.max, c);
  Jr(a, l, u, d, o);
}
function ia(a, l) {
  hp(a.x, l.x, l.scaleX, l.scale, l.originX),
    hp(a.y, l.y, l.scaleY, l.scale, l.originY);
}
function n0(a, l) {
  return Iy(tT(a.getBoundingClientRect(), l));
}
function nT(a, l, u) {
  const o = n0(a, u),
    { scroll: c } = l;
  return c && (na(o.x, c.offset.x), na(o.y, c.offset.y)), o;
}
const i0 = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
  iT = new WeakMap();
class aT {
  constructor(l) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Nt()),
      (this.visualElement = l);
  }
  start(l, { snapToCursor: u = !1 } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1) return;
    const c = (v) => {
        const { dragSnapToOrigin: b } = this.getProps();
        b ? this.pauseAnimation() : this.stopAnimation(),
          u && this.snapToCursor(Dl(v).point);
      },
      d = (v, b) => {
        const { drag: A, dragPropagation: O, onDragStart: _ } = this.getProps();
        if (
          A &&
          !O &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = jb(A)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Be((w) => {
            let j = this.getAxisMotionValue(w).get() || 0;
            if (ke.test(j)) {
              const { projection: Y } = this.visualElement;
              if (Y && Y.layout) {
                const X = Y.layout.layoutBox[w];
                X && (j = se(X) * (parseFloat(j) / 100));
              }
            }
            this.originPoint[w] = j;
          }),
          _ && Dt.postRender(() => _(v, b)),
          jr(this.visualElement, "transform");
        const { animationState: B } = this.visualElement;
        B && B.setActive("whileDrag", !0);
      },
      h = (v, b) => {
        const {
          dragPropagation: A,
          dragDirectionLock: O,
          onDirectionLock: _,
          onDrag: B,
        } = this.getProps();
        if (!A && !this.openDragLock) return;
        const { offset: w } = b;
        if (O && this.currentDirection === null) {
          (this.currentDirection = lT(w)),
            this.currentDirection !== null && _ && _(this.currentDirection);
          return;
        }
        this.updateAxis("x", b.point, w),
          this.updateAxis("y", b.point, w),
          this.visualElement.render(),
          B && B(v, b);
      },
      y = (v, b) => this.stop(v, b),
      m = () =>
        Be((v) => {
          var b;
          return (
            this.getAnimationState(v) === "paused" &&
            ((b = this.getAxisMotionValue(v).animation) === null || b === void 0
              ? void 0
              : b.play())
          );
        }),
      { dragSnapToOrigin: p } = this.getProps();
    this.panSession = new Py(
      l,
      {
        onSessionStart: c,
        onStart: d,
        onMove: h,
        onSessionEnd: y,
        resumeAnimation: m,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: p,
        contextWindow: i0(this.visualElement),
      }
    );
  }
  stop(l, u) {
    const o = this.isDragging;
    if ((this.cancel(), !o)) return;
    const { velocity: c } = u;
    this.startAnimation(c);
    const { onDragEnd: d } = this.getProps();
    d && Dt.postRender(() => d(l, u));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: u } = this.visualElement;
    l && (l.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: o } = this.getProps();
    !o &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      u && u.setActive("whileDrag", !1);
  }
  updateAxis(l, u, o) {
    const { drag: c } = this.getProps();
    if (!o || !Xs(l, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + o[l];
    this.constraints &&
      this.constraints[l] &&
      (h = kb(h, this.constraints[l], this.elastic[l])),
      d.set(h);
  }
  resolveConstraints() {
    var l;
    const { dragConstraints: u, dragElastic: o } = this.getProps(),
      c =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (l = this.visualElement.projection) === null || l === void 0
          ? void 0
          : l.layout,
      d = this.constraints;
    u && Ii(u)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : u && c
      ? (this.constraints = Jb(c.layoutBox, u))
      : (this.constraints = !1),
      (this.elastic = $b(o)),
      d !== this.constraints &&
        c &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Be((h) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(h) &&
            (this.constraints[h] = Wb(c.layoutBox[h], this.constraints[h]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: u } = this.getProps();
    if (!l || !Ii(l)) return !1;
    const o = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = nT(o, c.root, this.visualElement.getTransformPagePoint());
    let h = Pb(c.layout.layoutBox, d);
    if (u) {
      const y = u(Ib(h));
      (this.hasMutatedConstraints = !!y), y && (h = Iy(y));
    }
    return h;
  }
  startAnimation(l) {
    const {
        drag: u,
        dragMomentum: o,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: h,
        onDragTransitionEnd: y,
      } = this.getProps(),
      m = this.constraints || {},
      p = Be((v) => {
        if (!Xs(v, u, this.currentDirection)) return;
        let b = (m && m[v]) || {};
        h && (b = { min: 0, max: 0 });
        const A = c ? 200 : 1e6,
          O = c ? 40 : 1e7,
          _ = {
            type: "inertia",
            velocity: o ? l[v] : 0,
            bounceStiffness: A,
            bounceDamping: O,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...b,
          };
        return this.startAxisValueAnimation(v, _);
      });
    return Promise.all(p).then(y);
  }
  startAxisValueAnimation(l, u) {
    const o = this.getAxisMotionValue(l);
    return (
      jr(this.visualElement, l), o.start(zc(l, o, 0, u, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Be((l) => this.getAxisMotionValue(l).stop());
  }
  pauseAnimation() {
    Be((l) => {
      var u;
      return (u = this.getAxisMotionValue(l).animation) === null || u === void 0
        ? void 0
        : u.pause();
    });
  }
  getAnimationState(l) {
    var u;
    return (u = this.getAxisMotionValue(l).animation) === null || u === void 0
      ? void 0
      : u.state;
  }
  getAxisMotionValue(l) {
    const u = `_drag${l.toUpperCase()}`,
      o = this.visualElement.getProps(),
      c = o[u];
    return (
      c ||
      this.visualElement.getValue(l, (o.initial ? o.initial[l] : void 0) || 0)
    );
  }
  snapToCursor(l) {
    Be((u) => {
      const { drag: o } = this.getProps();
      if (!Xs(u, o, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(u);
      if (c && c.layout) {
        const { min: h, max: y } = c.layout.layoutBox[u];
        d.set(l[u] - Ct(h, y, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: u } = this.getProps(),
      { projection: o } = this.visualElement;
    if (!Ii(u) || !o || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Be((h) => {
      const y = this.getAxisMotionValue(h);
      if (y && this.constraints !== !1) {
        const m = y.get();
        c[h] = Fb({ min: m, max: m }, this.constraints[h]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      o.root && o.root.updateScroll(),
      o.updateLayout(),
      this.resolveConstraints(),
      Be((h) => {
        if (!Xs(h, l, null)) return;
        const y = this.getAxisMotionValue(h),
          { min: m, max: p } = this.constraints[h];
        y.set(Ct(m, p, c[h]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    iT.set(this.visualElement, this);
    const l = this.visualElement.current,
      u = hl(l, "pointerdown", (m) => {
        const { drag: p, dragListener: v = !0 } = this.getProps();
        p && v && this.start(m);
      }),
      o = () => {
        const { dragConstraints: m } = this.getProps();
        Ii(m) && m.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", o);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      Dt.read(o);
    const h = Tl(window, "resize", () => this.scalePositionWithinConstraints()),
      y = c.addEventListener(
        "didUpdate",
        ({ delta: m, hasLayoutChanged: p }) => {
          this.isDragging &&
            p &&
            (Be((v) => {
              const b = this.getAxisMotionValue(v);
              b &&
                ((this.originPoint[v] += m[v].translate),
                b.set(b.get() + m[v].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      h(), u(), d(), y && y();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: u = !1,
        dragDirectionLock: o = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: h = Kr,
        dragMomentum: y = !0,
      } = l;
    return {
      ...l,
      drag: u,
      dragDirectionLock: o,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: h,
      dragMomentum: y,
    };
  }
}
function Xs(a, l, u) {
  return (l === !0 || l === a) && (u === null || u === a);
}
function lT(a, l = 10) {
  let u = null;
  return Math.abs(a.y) > l ? (u = "y") : Math.abs(a.x) > l && (u = "x"), u;
}
class sT extends Xn {
  constructor(l) {
    super(l),
      (this.removeGroupControls = ge),
      (this.removeListeners = ge),
      (this.controls = new aT(l));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ge);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const dp = (a) => (l, u) => {
  a && Dt.postRender(() => a(l, u));
};
class uT extends Xn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ge);
  }
  onPointerDown(l) {
    this.session = new Py(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: i0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: l,
      onPanStart: u,
      onPan: o,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: dp(l),
      onStart: dp(u),
      onMove: o,
      onEnd: (d, h) => {
        delete this.session, c && Dt.postRender(() => c(d, h));
      },
    };
  }
  mount() {
    this.removePointerDownListener = hl(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ks = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function mp(a, l) {
  return l.max === l.min ? 0 : (a / (l.max - l.min)) * 100;
}
const ol = {
    correct: (a, l) => {
      if (!l.target) return a;
      if (typeof a == "string")
        if (et.test(a)) a = parseFloat(a);
        else return a;
      const u = mp(a, l.target.x),
        o = mp(a, l.target.y);
      return `${u}% ${o}%`;
    },
  },
  oT = {
    correct: (a, { treeScale: l, projectionDelta: u }) => {
      const o = a,
        c = Gn.parse(a);
      if (c.length > 5) return o;
      const d = Gn.createTransformer(a),
        h = typeof c[0] != "number" ? 1 : 0,
        y = u.x.scale * l.x,
        m = u.y.scale * l.y;
      (c[0 + h] /= y), (c[1 + h] /= m);
      const p = Ct(y, m, 0.5);
      return (
        typeof c[2 + h] == "number" && (c[2 + h] /= p),
        typeof c[3 + h] == "number" && (c[3 + h] /= p),
        d(c)
      );
    },
  };
class rT extends G.Component {
  componentDidMount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: o,
        layoutId: c,
      } = this.props,
      { projection: d } = l;
    b1(cT),
      d &&
        (u.group && u.group.add(d),
        o && o.register && c && o.register(d),
        d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({
          ...d.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ks.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(l) {
    const {
        layoutDependency: u,
        visualElement: o,
        drag: c,
        isPresent: d,
      } = this.props,
      h = o.projection;
    return (
      h &&
        ((h.isPresent = d),
        c || l.layoutDependency !== u || u === void 0
          ? h.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== d &&
          (d
            ? h.promote()
            : h.relegate() ||
              Dt.postRender(() => {
                const y = h.getStack();
                (!y || !y.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l &&
      (l.root.didUpdate(),
      lc.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: o,
      } = this.props,
      { projection: c } = l;
    c &&
      (c.scheduleCheckAfterUnmount(),
      u && u.group && u.group.remove(c),
      o && o.deregister && o.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function a0(a) {
  const [l, u] = Gp(),
    o = G.useContext($r);
  return L.jsx(rT, {
    ...a,
    layoutGroup: o,
    switchLayoutGroup: G.useContext(Fp),
    isPresent: l,
    safeToRemove: u,
  });
}
const cT = {
  borderRadius: {
    ...ol,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: ol,
  borderTopRightRadius: ol,
  borderBottomLeftRadius: ol,
  borderBottomRightRadius: ol,
  boxShadow: oT,
};
function fT(a, l, u) {
  const o = ee(a) ? a : Sl(a);
  return o.start(zc("", o, l, u)), o.animation;
}
function hT(a) {
  return a instanceof SVGElement && a.tagName !== "svg";
}
const dT = (a, l) => a.depth - l.depth;
class mT {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(l) {
    gc(this.children, l), (this.isDirty = !0);
  }
  remove(l) {
    vc(this.children, l), (this.isDirty = !0);
  }
  forEach(l) {
    this.isDirty && this.children.sort(dT),
      (this.isDirty = !1),
      this.children.forEach(l);
  }
}
function pT(a, l) {
  const u = Je.now(),
    o = ({ timestamp: c }) => {
      const d = c - u;
      d >= l && (Yn(o), a(d - l));
    };
  return Dt.read(o, !0), () => Yn(o);
}
const l0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  yT = l0.length,
  pp = (a) => (typeof a == "string" ? parseFloat(a) : a),
  yp = (a) => typeof a == "number" || et.test(a);
function gT(a, l, u, o, c, d) {
  c
    ? ((a.opacity = Ct(0, u.opacity !== void 0 ? u.opacity : 1, vT(o))),
      (a.opacityExit = Ct(l.opacity !== void 0 ? l.opacity : 1, 0, ST(o))))
    : d &&
      (a.opacity = Ct(
        l.opacity !== void 0 ? l.opacity : 1,
        u.opacity !== void 0 ? u.opacity : 1,
        o
      ));
  for (let h = 0; h < yT; h++) {
    const y = `border${l0[h]}Radius`;
    let m = gp(l, y),
      p = gp(u, y);
    if (m === void 0 && p === void 0) continue;
    m || (m = 0),
      p || (p = 0),
      m === 0 || p === 0 || yp(m) === yp(p)
        ? ((a[y] = Math.max(Ct(pp(m), pp(p), o), 0)),
          (ke.test(p) || ke.test(m)) && (a[y] += "%"))
        : (a[y] = p);
  }
  (l.rotate || u.rotate) && (a.rotate = Ct(l.rotate || 0, u.rotate || 0, o));
}
function gp(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const vT = s0(0, 0.5, Ty),
  ST = s0(0.5, 0.95, ge);
function s0(a, l, u) {
  return (o) => (o < a ? 0 : o > l ? 1 : u(la(a, l, o)));
}
function vp(a, l) {
  (a.min = l.min), (a.max = l.max);
}
function Ue(a, l) {
  vp(a.x, l.x), vp(a.y, l.y);
}
function Sp(a, l) {
  (a.translate = l.translate),
    (a.scale = l.scale),
    (a.originPoint = l.originPoint),
    (a.origin = l.origin);
}
function bp(a, l, u, o, c) {
  return (
    (a -= l), (a = $s(a, 1 / u, o)), c !== void 0 && (a = $s(a, 1 / c, o)), a
  );
}
function bT(a, l = 0, u = 1, o = 0.5, c, d = a, h = a) {
  if (
    (ke.test(l) &&
      ((l = parseFloat(l)), (l = Ct(h.min, h.max, l / 100) - h.min)),
    typeof l != "number")
  )
    return;
  let y = Ct(d.min, d.max, o);
  a === d && (y -= l),
    (a.min = bp(a.min, l, u, y, c)),
    (a.max = bp(a.max, l, u, y, c));
}
function Tp(a, l, [u, o, c], d, h) {
  bT(a, l[u], l[o], l[c], l.scale, d, h);
}
const TT = ["x", "scaleX", "originX"],
  AT = ["y", "scaleY", "originY"];
function Ap(a, l, u, o) {
  Tp(a.x, l, TT, u ? u.x : void 0, o ? o.x : void 0),
    Tp(a.y, l, AT, u ? u.y : void 0, o ? o.y : void 0);
}
function xp(a) {
  return a.translate === 0 && a.scale === 1;
}
function u0(a) {
  return xp(a.x) && xp(a.y);
}
function Ep(a, l) {
  return a.min === l.min && a.max === l.max;
}
function xT(a, l) {
  return Ep(a.x, l.x) && Ep(a.y, l.y);
}
function Dp(a, l) {
  return (
    Math.round(a.min) === Math.round(l.min) &&
    Math.round(a.max) === Math.round(l.max)
  );
}
function o0(a, l) {
  return Dp(a.x, l.x) && Dp(a.y, l.y);
}
function Mp(a) {
  return se(a.x) / se(a.y);
}
function Rp(a, l) {
  return (
    a.translate === l.translate &&
    a.scale === l.scale &&
    a.originPoint === l.originPoint
  );
}
class ET {
  constructor() {
    this.members = [];
  }
  add(l) {
    gc(this.members, l), l.scheduleRender();
  }
  remove(l) {
    if (
      (vc(this.members, l),
      l === this.prevLead && (this.prevLead = void 0),
      l === this.lead)
    ) {
      const u = this.members[this.members.length - 1];
      u && this.promote(u);
    }
  }
  relegate(l) {
    const u = this.members.findIndex((c) => l === c);
    if (u === 0) return !1;
    let o;
    for (let c = u; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== !1) {
        o = d;
        break;
      }
    }
    return o ? (this.promote(o), !0) : !1;
  }
  promote(l, u) {
    const o = this.lead;
    if (l !== o && ((this.prevLead = o), (this.lead = l), l.show(), o)) {
      o.instance && o.scheduleRender(),
        l.scheduleRender(),
        (l.resumeFrom = o),
        u && (l.resumeFrom.preserveOpacity = !0),
        o.snapshot &&
          ((l.snapshot = o.snapshot),
          (l.snapshot.latestValues = o.animationValues || o.latestValues)),
        l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
      const { crossfade: c } = l.options;
      c === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      const { options: u, resumingFrom: o } = l;
      u.onExitComplete && u.onExitComplete(),
        o && o.options.onExitComplete && o.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => {
      l.instance && l.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function DT(a, l, u) {
  let o = "";
  const c = a.x.translate / l.x,
    d = a.y.translate / l.y,
    h = (u == null ? void 0 : u.z) || 0;
  if (
    ((c || d || h) && (o = `translate3d(${c}px, ${d}px, ${h}px) `),
    (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `),
    u)
  ) {
    const {
      transformPerspective: p,
      rotate: v,
      rotateX: b,
      rotateY: A,
      skewX: O,
      skewY: _,
    } = u;
    p && (o = `perspective(${p}px) ${o}`),
      v && (o += `rotate(${v}deg) `),
      b && (o += `rotateX(${b}deg) `),
      A && (o += `rotateY(${A}deg) `),
      O && (o += `skewX(${O}deg) `),
      _ && (o += `skewY(${_}deg) `);
  }
  const y = a.x.scale * l.x,
    m = a.y.scale * l.y;
  return (y !== 1 || m !== 1) && (o += `scale(${y}, ${m})`), o || "none";
}
const Or = ["", "X", "Y", "Z"],
  MT = { visibility: "hidden" },
  Op = 1e3;
let RT = 0;
function Cr(a, l, u, o) {
  const { latestValues: c } = l;
  c[a] && ((u[a] = c[a]), l.setStaticValue(a, 0), o && (o[a] = 0));
}
function r0(a) {
  if (((a.hasCheckedOptimisedAppear = !0), a.root === a)) return;
  const { visualElement: l } = a.options;
  if (!l) return;
  const u = fy(l);
  if (window.MotionHasOptimisedAnimation(u, "transform")) {
    const { layout: c, layoutId: d } = a.options;
    window.MotionCancelOptimisedAnimation(u, "transform", Dt, !(c || d));
  }
  const { parent: o } = a;
  o && !o.hasCheckedOptimisedAppear && r0(o);
}
function c0({
  attachResizeListener: a,
  defaultParent: l,
  measureScroll: u,
  checkIsScrollRoot: o,
  resetTransform: c,
}) {
  return class {
    constructor(h = {}, y = l == null ? void 0 : l()) {
      (this.id = RT++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(VT),
            this.nodes.forEach(NT),
            this.nodes.forEach(jT),
            this.nodes.forEach(zT);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = h),
        (this.root = y ? y.root || y : this),
        (this.path = y ? [...y.path, y] : []),
        (this.parent = y),
        (this.depth = y ? y.depth + 1 : 0);
      for (let m = 0; m < this.path.length; m++)
        this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new mT());
    }
    addEventListener(h, y) {
      return (
        this.eventHandlers.has(h) || this.eventHandlers.set(h, new Sc()),
        this.eventHandlers.get(h).add(y)
      );
    }
    notifyListeners(h, ...y) {
      const m = this.eventHandlers.get(h);
      m && m.notify(...y);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    mount(h, y = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = hT(h)), (this.instance = h);
      const { layoutId: m, layout: p, visualElement: v } = this.options;
      if (
        (v && !v.current && v.mount(h),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        y && (p || m) && (this.isLayoutDirty = !0),
        a)
      ) {
        let b;
        const A = () => (this.root.updateBlockedByResize = !1);
        a(h, () => {
          (this.root.updateBlockedByResize = !0),
            b && b(),
            (b = pT(A, 250)),
            Ks.hasAnimatedSinceResize &&
              ((Ks.hasAnimatedSinceResize = !1), this.nodes.forEach(Vp));
        });
      }
      m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          v &&
          (m || p) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: b,
              hasLayoutChanged: A,
              hasRelativeLayoutChanged: O,
              layout: _,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const B =
                  this.options.transition || v.getDefaultTransition() || YT,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: j } =
                  v.getProps(),
                Y = !this.targetLayout || !o0(this.targetLayout, _),
                X = !A && O;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                X ||
                (A && (Y || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(b, X);
                const st = { ...yc(B, "layout"), onPlay: w, onComplete: j };
                (v.shouldReduceMotion || this.options.layoutRoot) &&
                  ((st.delay = 0), (st.type = !1)),
                  this.startAnimation(st);
              } else
                A || Vp(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = _;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const h = this.getStack();
      h && h.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Yn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(HT),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: h } = this.options;
      return h && h.getProps().transformTemplate;
    }
    willUpdate(h = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          r0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const b = this.path[v];
        (b.shouldResetTransform = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1);
      }
      const { layoutId: y, layout: m } = this.options;
      if (y === void 0 && !m) return;
      const p = this.getTransformTemplate();
      (this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        h && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Cp);
        return;
      }
      this.isUpdating || this.nodes.forEach(UT),
        (this.isUpdating = !1),
        this.nodes.forEach(BT),
        this.nodes.forEach(OT),
        this.nodes.forEach(CT),
        this.clearAllSnapshots();
      const y = Je.now();
      (Ft.delta = pn(0, 1e3 / 60, y - Ft.timestamp)),
        (Ft.timestamp = y),
        (Ft.isProcessing = !0),
        Tr.update.process(Ft),
        Tr.preRender.process(Ft),
        Tr.render.process(Ft),
        (Ft.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), lc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(_T), this.sharedNodes.forEach(LT);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Dt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Dt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !se(this.snapshot.measuredBox.x) &&
          !se(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let m = 0; m < this.path.length; m++) this.path[m].updateScroll();
      const h = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Nt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: y } = this.options;
      y &&
        y.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          h ? h.layoutBox : void 0
        );
    }
    updateScroll(h = "measure") {
      let y = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === h &&
          (y = !1),
        y)
      ) {
        const m = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: h,
          isRoot: m,
          offset: u(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const h =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        y = this.projectionDelta && !u0(this.projectionDelta),
        m = this.getTransformTemplate(),
        p = m ? m(this.latestValues, "") : void 0,
        v = p !== this.prevTransformTemplateValue;
      h &&
        (y || di(this.latestValues) || v) &&
        (c(this.instance, p),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(h = !0) {
      const y = this.measurePageBox();
      let m = this.removeElementScroll(y);
      return (
        h && (m = this.removeTransform(m)),
        GT(m),
        {
          animationId: this.root.animationId,
          measuredBox: y,
          layoutBox: m,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var h;
      const { visualElement: y } = this.options;
      if (!y) return Nt();
      const m = y.measureViewportBox();
      if (
        !(
          ((h = this.scroll) === null || h === void 0 ? void 0 : h.wasRoot) ||
          this.path.some(XT)
        )
      ) {
        const { scroll: v } = this.root;
        v && (na(m.x, v.offset.x), na(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(h) {
      var y;
      const m = Nt();
      if (
        (Ue(m, h), !((y = this.scroll) === null || y === void 0) && y.wasRoot)
      )
        return m;
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p],
          { scroll: b, options: A } = v;
        v !== this.root &&
          b &&
          A.layoutScroll &&
          (b.wasRoot && Ue(m, h), na(m.x, b.offset.x), na(m.y, b.offset.y));
      }
      return m;
    }
    applyTransform(h, y = !1) {
      const m = Nt();
      Ue(m, h);
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p];
        !y &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          ia(m, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          di(v.latestValues) && ia(m, v.latestValues);
      }
      return di(this.latestValues) && ia(m, this.latestValues), m;
    }
    removeTransform(h) {
      const y = Nt();
      Ue(y, h);
      for (let m = 0; m < this.path.length; m++) {
        const p = this.path[m];
        if (!p.instance || !di(p.latestValues)) continue;
        kr(p.latestValues) && p.updateSnapshot();
        const v = Nt(),
          b = p.measurePageBox();
        Ue(v, b),
          Ap(y, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, v);
      }
      return di(this.latestValues) && Ap(y, this.latestValues), y;
    }
    setTargetDelta(h) {
      (this.targetDelta = h),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(h) {
      this.options = {
        ...this.options,
        ...h,
        crossfade: h.crossfade !== void 0 ? h.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ft.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(h = !1) {
      var y;
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== m;
      if (
        !(
          h ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((y = this.parent) === null || y === void 0) &&
            y.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: b, layoutId: A } = this.options;
      if (!(!this.layout || !(b || A))) {
        if (
          ((this.resolvedRelativeTargetAt = Ft.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const O = this.getClosestProjectingParent();
          O && O.layout && this.animationProgress !== 1
            ? ((this.relativeParent = O),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Nt()),
              (this.relativeTargetOrigin = Nt()),
              ml(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                O.layout.layoutBox
              ),
              Ue(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Nt()), (this.targetWithTransforms = Nt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Kb(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : Ue(this.target, this.layout.layoutBox),
              e0(this.target, this.targetDelta))
            : Ue(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const O = this.getClosestProjectingParent();
          O &&
          !!O.resumingFrom == !!this.resumingFrom &&
          !O.options.layoutScroll &&
          O.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = O),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Nt()),
              (this.relativeTargetOrigin = Nt()),
              ml(this.relativeTargetOrigin, this.target, O.target),
              Ue(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          kr(this.parent.latestValues) ||
          t0(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var h;
      const y = this.getLead(),
        m = !!this.resumingFrom || this !== y;
      let p = !0;
      if (
        ((this.isProjectionDirty ||
          (!((h = this.parent) === null || h === void 0) &&
            h.isProjectionDirty)) &&
          (p = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === Ft.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: v, layoutId: b } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(v || b))
      )
        return;
      Ue(this.layoutCorrected, this.layout.layoutBox);
      const A = this.treeScale.x,
        O = this.treeScale.y;
      eT(this.layoutCorrected, this.treeScale, this.path, m),
        y.layout &&
          !y.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((y.target = y.layout.layoutBox), (y.targetWithTransforms = Nt()));
      const { target: _ } = y;
      if (!_) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Sp(this.prevProjectionDelta.x, this.projectionDelta.x),
          Sp(this.prevProjectionDelta.y, this.projectionDelta.y)),
        dl(this.projectionDelta, this.layoutCorrected, _, this.latestValues),
        (this.treeScale.x !== A ||
          this.treeScale.y !== O ||
          !Rp(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Rp(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", _));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(h = !0) {
      var y;
      if (
        ((y = this.options.visualElement) === null ||
          y === void 0 ||
          y.scheduleRender(),
        h)
      ) {
        const m = this.getStack();
        m && m.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ea()),
        (this.projectionDelta = ea()),
        (this.projectionDeltaWithTransform = ea());
    }
    setAnimationOrigin(h, y = !1) {
      const m = this.snapshot,
        p = m ? m.latestValues : {},
        v = { ...this.latestValues },
        b = ea();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !y);
      const A = Nt(),
        O = m ? m.source : void 0,
        _ = this.layout ? this.layout.source : void 0,
        B = O !== _,
        w = this.getStack(),
        j = !w || w.members.length <= 1,
        Y = !!(B && !j && this.options.crossfade === !0 && !this.path.some(qT));
      this.animationProgress = 0;
      let X;
      (this.mixTargetDelta = (st) => {
        const H = st / 1e3;
        zp(b.x, h.x, H),
          zp(b.y, h.y, H),
          this.setTargetDelta(b),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ml(A, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            wT(this.relativeTarget, this.relativeTargetOrigin, A, H),
            X && xT(this.relativeTarget, X) && (this.isProjectionDirty = !1),
            X || (X = Nt()),
            Ue(X, this.relativeTarget)),
          B &&
            ((this.animationValues = v), gT(v, p, this.latestValues, H, Y, j)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = H);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(h) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Yn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Dt.update(() => {
          (Ks.hasAnimatedSinceResize = !0),
            (this.currentAnimation = fT(0, Op, {
              ...h,
              onUpdate: (y) => {
                this.mixTargetDelta(y), h.onUpdate && h.onUpdate(y);
              },
              onStop: () => {},
              onComplete: () => {
                h.onComplete && h.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const h = this.getStack();
      h && h.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Op),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let {
        targetWithTransforms: y,
        target: m,
        layout: p,
        latestValues: v,
      } = h;
      if (!(!y || !m || !p)) {
        if (
          this !== h &&
          this.layout &&
          p &&
          f0(this.options.animationType, this.layout.layoutBox, p.layoutBox)
        ) {
          m = this.target || Nt();
          const b = se(this.layout.layoutBox.x);
          (m.x.min = h.target.x.min), (m.x.max = m.x.min + b);
          const A = se(this.layout.layoutBox.y);
          (m.y.min = h.target.y.min), (m.y.max = m.y.min + A);
        }
        Ue(y, m),
          ia(y, v),
          dl(this.projectionDeltaWithTransform, this.layoutCorrected, y, v);
      }
    }
    registerSharedNode(h, y) {
      this.sharedNodes.has(h) || this.sharedNodes.set(h, new ET()),
        this.sharedNodes.get(h).add(y);
      const p = y.options.initialPromotionConfig;
      y.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity:
          p && p.shouldPreserveFollowOpacity
            ? p.shouldPreserveFollowOpacity(y)
            : void 0,
      });
    }
    isLead() {
      const h = this.getStack();
      return h ? h.lead === this : !0;
    }
    getLead() {
      var h;
      const { layoutId: y } = this.options;
      return y
        ? ((h = this.getStack()) === null || h === void 0 ? void 0 : h.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var h;
      const { layoutId: y } = this.options;
      return y
        ? (h = this.getStack()) === null || h === void 0
          ? void 0
          : h.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: h } = this.options;
      if (h) return this.root.sharedNodes.get(h);
    }
    promote({ needsReset: h, transition: y, preserveFollowOpacity: m } = {}) {
      const p = this.getStack();
      p && p.promote(this, m),
        h && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        y && this.setOptions({ transition: y });
    }
    relegate() {
      const h = this.getStack();
      return h ? h.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: h } = this.options;
      if (!h) return;
      let y = !1;
      const { latestValues: m } = h;
      if (
        ((m.z ||
          m.rotate ||
          m.rotateX ||
          m.rotateY ||
          m.rotateZ ||
          m.skewX ||
          m.skewY) &&
          (y = !0),
        !y)
      )
        return;
      const p = {};
      m.z && Cr("z", h, p, this.animationValues);
      for (let v = 0; v < Or.length; v++)
        Cr(`rotate${Or[v]}`, h, p, this.animationValues),
          Cr(`skew${Or[v]}`, h, p, this.animationValues);
      h.render();
      for (const v in p)
        h.setStaticValue(v, p[v]),
          this.animationValues && (this.animationValues[v] = p[v]);
      h.scheduleRender();
    }
    getProjectionStyles(h) {
      var y, m;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return MT;
      const p = { visibility: "" },
        v = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (p.opacity = ""),
          (p.pointerEvents = Qs(h == null ? void 0 : h.pointerEvents) || ""),
          (p.transform = v ? v(this.latestValues, "") : "none"),
          p
        );
      const b = this.getLead();
      if (!this.projectionDelta || !this.layout || !b.target) {
        const B = {};
        return (
          this.options.layoutId &&
            ((B.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (B.pointerEvents = Qs(h == null ? void 0 : h.pointerEvents) || "")),
          this.hasProjected &&
            !di(this.latestValues) &&
            ((B.transform = v ? v({}, "") : "none"), (this.hasProjected = !1)),
          B
        );
      }
      const A = b.animationValues || b.latestValues;
      this.applyTransformsToTarget(),
        (p.transform = DT(
          this.projectionDeltaWithTransform,
          this.treeScale,
          A
        )),
        v && (p.transform = v(A, p.transform));
      const { x: O, y: _ } = this.projectionDelta;
      (p.transformOrigin = `${O.origin * 100}% ${_.origin * 100}% 0`),
        b.animationValues
          ? (p.opacity =
              b === this
                ? (m =
                    (y = A.opacity) !== null && y !== void 0
                      ? y
                      : this.latestValues.opacity) !== null && m !== void 0
                  ? m
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : A.opacityExit)
          : (p.opacity =
              b === this
                ? A.opacity !== void 0
                  ? A.opacity
                  : ""
                : A.opacityExit !== void 0
                ? A.opacityExit
                : 0);
      for (const B in yl) {
        if (A[B] === void 0) continue;
        const { correct: w, applyTo: j, isCSSVariable: Y } = yl[B],
          X = p.transform === "none" ? A[B] : w(A[B], b);
        if (j) {
          const st = j.length;
          for (let H = 0; H < st; H++) p[j[H]] = X;
        } else
          Y ? (this.options.visualElement.renderState.vars[B] = X) : (p[B] = X);
      }
      return (
        this.options.layoutId &&
          (p.pointerEvents =
            b === this
              ? Qs(h == null ? void 0 : h.pointerEvents) || ""
              : "none"),
        p
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((h) => {
        var y;
        return (y = h.currentAnimation) === null || y === void 0
          ? void 0
          : y.stop();
      }),
        this.root.nodes.forEach(Cp),
        this.root.sharedNodes.clear();
    }
  };
}
function OT(a) {
  a.updateLayout();
}
function CT(a) {
  var l;
  const u =
    ((l = a.resumeFrom) === null || l === void 0 ? void 0 : l.snapshot) ||
    a.snapshot;
  if (a.isLead() && a.layout && u && a.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: c } = a.layout,
      { animationType: d } = a.options,
      h = u.source !== a.layout.source;
    d === "size"
      ? Be((b) => {
          const A = h ? u.measuredBox[b] : u.layoutBox[b],
            O = se(A);
          (A.min = o[b].min), (A.max = A.min + O);
        })
      : f0(d, u.layoutBox, o) &&
        Be((b) => {
          const A = h ? u.measuredBox[b] : u.layoutBox[b],
            O = se(o[b]);
          (A.max = A.min + O),
            a.relativeTarget &&
              !a.currentAnimation &&
              ((a.isProjectionDirty = !0),
              (a.relativeTarget[b].max = a.relativeTarget[b].min + O));
        });
    const y = ea();
    dl(y, o, u.layoutBox);
    const m = ea();
    h ? dl(m, a.applyTransform(c, !0), u.measuredBox) : dl(m, o, u.layoutBox);
    const p = !u0(y);
    let v = !1;
    if (!a.resumeFrom) {
      const b = a.getClosestProjectingParent();
      if (b && !b.resumeFrom) {
        const { snapshot: A, layout: O } = b;
        if (A && O) {
          const _ = Nt();
          ml(_, u.layoutBox, A.layoutBox);
          const B = Nt();
          ml(B, o, O.layoutBox),
            o0(_, B) || (v = !0),
            b.options.layoutRoot &&
              ((a.relativeTarget = B),
              (a.relativeTargetOrigin = _),
              (a.relativeParent = b));
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: o,
      snapshot: u,
      delta: m,
      layoutDelta: y,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: v,
    });
  } else if (a.isLead()) {
    const { onExitComplete: o } = a.options;
    o && o();
  }
  a.options.transition = void 0;
}
function VT(a) {
  a.parent &&
    (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty ||
      (a.isSharedProjectionDirty = !!(
        a.isProjectionDirty ||
        a.parent.isProjectionDirty ||
        a.parent.isSharedProjectionDirty
      )),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function zT(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function _T(a) {
  a.clearSnapshot();
}
function Cp(a) {
  a.clearMeasurements();
}
function UT(a) {
  a.isLayoutDirty = !1;
}
function BT(a) {
  const { visualElement: l } = a.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    a.resetTransform();
}
function Vp(a) {
  a.finishAnimation(),
    (a.targetDelta = a.relativeTarget = a.target = void 0),
    (a.isProjectionDirty = !0);
}
function NT(a) {
  a.resolveTargetDelta();
}
function jT(a) {
  a.calcProjection();
}
function HT(a) {
  a.resetSkewAndRotation();
}
function LT(a) {
  a.removeLeadSnapshot();
}
function zp(a, l, u) {
  (a.translate = Ct(l.translate, 0, u)),
    (a.scale = Ct(l.scale, 1, u)),
    (a.origin = l.origin),
    (a.originPoint = l.originPoint);
}
function _p(a, l, u, o) {
  (a.min = Ct(l.min, u.min, o)), (a.max = Ct(l.max, u.max, o));
}
function wT(a, l, u, o) {
  _p(a.x, l.x, u.x, o), _p(a.y, l.y, u.y, o);
}
function qT(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const YT = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Up = (a) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(a),
  Bp = Up("applewebkit/") && !Up("chrome/") ? Math.round : ge;
function Np(a) {
  (a.min = Bp(a.min)), (a.max = Bp(a.max));
}
function GT(a) {
  Np(a.x), Np(a.y);
}
function f0(a, l, u) {
  return (
    a === "position" || (a === "preserve-aspect" && !Zb(Mp(l), Mp(u), 0.2))
  );
}
function XT(a) {
  var l;
  return (
    a !== a.root &&
    ((l = a.scroll) === null || l === void 0 ? void 0 : l.wasRoot)
  );
}
const QT = c0({
    attachResizeListener: (a, l) => Tl(a, "resize", l),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Vr = { current: void 0 },
  h0 = c0({
    measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
    defaultParent: () => {
      if (!Vr.current) {
        const a = new QT({});
        a.mount(window), a.setOptions({ layoutScroll: !0 }), (Vr.current = a);
      }
      return Vr.current;
    },
    resetTransform: (a, l) => {
      a.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed",
  }),
  ZT = {
    pan: { Feature: uT },
    drag: { Feature: sT, ProjectionNode: h0, MeasureLayout: a0 },
  };
function KT(a, l, u) {
  var o;
  if (a instanceof Element) return [a];
  if (typeof a == "string") {
    let c = document;
    const d = (o = void 0) !== null && o !== void 0 ? o : c.querySelectorAll(a);
    return d ? Array.from(d) : [];
  }
  return Array.from(a);
}
function d0(a, l) {
  const u = KT(a),
    o = new AbortController(),
    c = { passive: !0, ...l, signal: o.signal };
  return [u, c, () => o.abort()];
}
function jp(a) {
  return !(a.pointerType === "touch" || Jy());
}
function kT(a, l, u = {}) {
  const [o, c, d] = d0(a, u),
    h = (y) => {
      if (!jp(y)) return;
      const { target: m } = y,
        p = l(m, y);
      if (typeof p != "function" || !m) return;
      const v = (b) => {
        jp(b) && (p(b), m.removeEventListener("pointerleave", v));
      };
      m.addEventListener("pointerleave", v, c);
    };
  return (
    o.forEach((y) => {
      y.addEventListener("pointerenter", h, c);
    }),
    d
  );
}
function Hp(a, l, u) {
  const { props: o } = a;
  a.animationState &&
    o.whileHover &&
    a.animationState.setActive("whileHover", u === "Start");
  const c = "onHover" + u,
    d = o[c];
  d && Dt.postRender(() => d(l, Dl(l)));
}
class JT extends Xn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = kT(
        l,
        (u, o) => (Hp(this.node, o, "Start"), (c) => Hp(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class PT extends Xn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = El(
      Tl(this.node.current, "focus", () => this.onFocus()),
      Tl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const m0 = (a, l) => (l ? (a === l ? !0 : m0(a, l.parentElement)) : !1),
  FT = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function WT(a) {
  return FT.has(a.tagName) || a.tabIndex !== -1;
}
const cl = new WeakSet();
function Lp(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function zr(a, l) {
  a.dispatchEvent(
    new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 })
  );
}
const $T = (a, l) => {
  const u = a.currentTarget;
  if (!u) return;
  const o = Lp(() => {
    if (cl.has(u)) return;
    zr(u, "down");
    const c = Lp(() => {
        zr(u, "up");
      }),
      d = () => zr(u, "cancel");
    u.addEventListener("keyup", c, l), u.addEventListener("blur", d, l);
  });
  u.addEventListener("keydown", o, l),
    u.addEventListener("blur", () => u.removeEventListener("keydown", o), l);
};
function wp(a) {
  return _c(a) && !Jy();
}
function IT(a, l, u = {}) {
  const [o, c, d] = d0(a, u),
    h = (y) => {
      const m = y.currentTarget;
      if (!wp(y) || cl.has(m)) return;
      cl.add(m);
      const p = l(m, y),
        v = (O, _) => {
          window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", A),
            !(!wp(O) || !cl.has(m)) &&
              (cl.delete(m), typeof p == "function" && p(O, { success: _ }));
        },
        b = (O) => {
          v(O, u.useGlobalTarget || m0(m, O.target));
        },
        A = (O) => {
          v(O, !1);
        };
      window.addEventListener("pointerup", b, c),
        window.addEventListener("pointercancel", A, c);
    };
  return (
    o.forEach((y) => {
      !WT(y) && y.getAttribute("tabindex") === null && (y.tabIndex = 0),
        (u.useGlobalTarget ? window : y).addEventListener("pointerdown", h, c),
        y.addEventListener("focus", (p) => $T(p, c), c);
    }),
    d
  );
}
function qp(a, l, u) {
  const { props: o } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
  a.animationState &&
    o.whileTap &&
    a.animationState.setActive("whileTap", u === "Start");
  const c = "onTap" + (u === "End" ? "" : u),
    d = o[c];
  d && Dt.postRender(() => d(l, Dl(l)));
}
class tA extends Xn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = IT(
        l,
        (u, o) => (
          qp(this.node, o, "Start"),
          (c, { success: d }) => qp(this.node, c, d ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Pr = new WeakMap(),
  _r = new WeakMap(),
  eA = (a) => {
    const l = Pr.get(a.target);
    l && l(a);
  },
  nA = (a) => {
    a.forEach(eA);
  };
function iA({ root: a, ...l }) {
  const u = a || document;
  _r.has(u) || _r.set(u, {});
  const o = _r.get(u),
    c = JSON.stringify(l);
  return o[c] || (o[c] = new IntersectionObserver(nA, { root: a, ...l })), o[c];
}
function aA(a, l, u) {
  const o = iA(l);
  return (
    Pr.set(a, u),
    o.observe(a),
    () => {
      Pr.delete(a), o.unobserve(a);
    }
  );
}
const lA = { some: 0, all: 1 };
class sA extends Xn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(),
      { root: u, margin: o, amount: c = "some", once: d } = l,
      h = {
        root: u ? u.current : void 0,
        rootMargin: o,
        threshold: typeof c == "number" ? c : lA[c],
      },
      y = (m) => {
        const { isIntersecting: p } = m;
        if (
          this.isInView === p ||
          ((this.isInView = p), d && !p && this.hasEnteredView)
        )
          return;
        p && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", p);
        const { onViewportEnter: v, onViewportLeave: b } = this.node.getProps(),
          A = p ? v : b;
        A && A(m);
      };
    return aA(this.node.current, h, y);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: u } = this.node;
    ["amount", "margin", "root"].some(uA(l, u)) && this.startObserver();
  }
  unmount() {}
}
function uA({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (u) => a[u] !== l[u];
}
const oA = {
    inView: { Feature: sA },
    tap: { Feature: tA },
    focus: { Feature: PT },
    hover: { Feature: JT },
  },
  rA = { layout: { ProjectionNode: h0, MeasureLayout: a0 } },
  Fr = { current: null },
  p0 = { current: !1 };
function cA() {
  if (((p0.current = !0), !!ec))
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (Fr.current = a.matches);
      a.addListener(l), l();
    } else Fr.current = !1;
}
const fA = [...Ny, te, Gn],
  hA = (a) => fA.find(By(a)),
  dA = new WeakMap();
function mA(a, l, u) {
  for (const o in l) {
    const c = l[o],
      d = u[o];
    if (ee(c)) a.addValue(o, c);
    else if (ee(d)) a.addValue(o, Sl(c, { owner: a }));
    else if (d !== c)
      if (a.hasValue(o)) {
        const h = a.getValue(o);
        h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c);
      } else {
        const h = a.getStaticValue(o);
        a.addValue(o, Sl(h !== void 0 ? h : c, { owner: a }));
      }
  }
  for (const o in u) l[o] === void 0 && a.removeValue(o);
  return l;
}
const Yp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class pA {
  scrapeMotionValuesFromProps(l, u, o) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: u,
      presenceContext: o,
      reducedMotionConfig: c,
      blockInitialAnimation: d,
      visualState: h,
    },
    y = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Oc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const O = Je.now();
        this.renderScheduledAt < O &&
          ((this.renderScheduledAt = O), Dt.render(this.render, !1, !0));
      });
    const { latestValues: m, renderState: p, onUpdate: v } = h;
    (this.onUpdate = v),
      (this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = u.initial ? { ...m } : {}),
      (this.renderState = p),
      (this.parent = l),
      (this.props = u),
      (this.presenceContext = o),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = y),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = iu(u)),
      (this.isVariantNode = Jp(u)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current));
    const { willChange: b, ...A } = this.scrapeMotionValuesFromProps(
      u,
      {},
      this
    );
    for (const O in A) {
      const _ = A[O];
      m[O] !== void 0 && ee(_) && _.set(m[O], !1);
    }
  }
  mount(l) {
    (this.current = l),
      dA.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((u, o) => this.bindToMotionValue(o, u)),
      p0.current || cA(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Fr.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      Yn(this.notifyUpdate),
      Yn(this.render),
      this.valueSubscriptions.forEach((l) => l()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const l in this.events) this.events[l].clear();
    for (const l in this.features) {
      const u = this.features[l];
      u && (u.unmount(), (u.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(l, u) {
    this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
    const o = yi.has(l);
    o && this.onBindTransform && this.onBindTransform();
    const c = u.on("change", (y) => {
        (this.latestValues[l] = y),
          this.props.onUpdate && Dt.preRender(this.notifyUpdate),
          o && this.projection && (this.projection.isTransformDirty = !0);
      }),
      d = u.on("renderRequest", this.scheduleRender);
    let h;
    window.MotionCheckAppearSync &&
      (h = window.MotionCheckAppearSync(this, l, u)),
      this.valueSubscriptions.set(l, () => {
        c(), d(), h && h(), u.owner && u.stop();
      });
  }
  sortNodePosition(l) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in aa) {
      const u = aa[l];
      if (!u) continue;
      const { isEnabled: o, Feature: c } = u;
      if (
        (!this.features[l] &&
          c &&
          o(this.props) &&
          (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Nt();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, u) {
    this.latestValues[l] = u;
  }
  update(l, u) {
    (l.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = u);
    for (let o = 0; o < Yp.length; o++) {
      const c = Yp[o];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        h = l[d];
      h && (this.propEventSubscriptions[c] = this.on(c, h));
    }
    (this.prevMotionValues = mA(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(l) {
    const u = this.getClosestVariantNode();
    if (u)
      return (
        u.variantChildren && u.variantChildren.add(l),
        () => u.variantChildren.delete(l)
      );
  }
  addValue(l, u) {
    const o = this.values.get(l);
    u !== o &&
      (o && this.removeValue(l),
      this.bindToMotionValue(l, u),
      this.values.set(l, u),
      (this.latestValues[l] = u.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const u = this.valueSubscriptions.get(l);
    u && (u(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState);
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, u) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let o = this.values.get(l);
    return (
      o === void 0 &&
        u !== void 0 &&
        ((o = Sl(u === null ? void 0 : u, { owner: this })),
        this.addValue(l, o)),
      o
    );
  }
  readValue(l, u) {
    var o;
    let c =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : (o = this.getBaseTargetFromProps(this.props, l)) !== null &&
          o !== void 0
        ? o
        : this.readValueFromInstance(this.current, l, this.options);
    return (
      c != null &&
        (typeof c == "string" && (_y(c) || xy(c))
          ? (c = parseFloat(c))
          : !hA(c) && Gn.test(u) && (c = Cy(l, u)),
        this.setBaseTarget(l, ee(c) ? c.get() : c)),
      ee(c) ? c.get() : c
    );
  }
  setBaseTarget(l, u) {
    this.baseTarget[l] = u;
  }
  getBaseTarget(l) {
    var u;
    const { initial: o } = this.props;
    let c;
    if (typeof o == "string" || typeof o == "object") {
      const h = mc(
        this.props,
        o,
        (u = this.presenceContext) === null || u === void 0 ? void 0 : u.custom
      );
      h && (c = h[l]);
    }
    if (o && c !== void 0) return c;
    const d = this.getBaseTargetFromProps(this.props, l);
    return d !== void 0 && !ee(d)
      ? d
      : this.initialValues[l] !== void 0 && c === void 0
      ? void 0
      : this.baseTarget[l];
  }
  on(l, u) {
    return this.events[l] || (this.events[l] = new Sc()), this.events[l].add(u);
  }
  notify(l, ...u) {
    this.events[l] && this.events[l].notify(...u);
  }
}
class y0 extends pA {
  constructor() {
    super(...arguments), (this.KeyframeResolver = jy);
  }
  sortInstanceNodePosition(l, u) {
    return l.compareDocumentPosition(u) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, u) {
    return l.style ? l.style[u] : void 0;
  }
  removeValueFromRenderState(l, { vars: u, style: o }) {
    delete u[l], delete o[l];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    ee(l) &&
      (this.childSubscription = l.on("change", (u) => {
        this.current && (this.current.textContent = `${u}`);
      }));
  }
}
function yA(a) {
  return window.getComputedStyle(a);
}
class gA extends y0 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = ly);
  }
  readValueFromInstance(l, u) {
    if (yi.has(u)) {
      const o = Rc(u);
      return (o && o.default) || 0;
    } else {
      const o = yA(l),
        c = (sc(u) ? o.getPropertyValue(u) : o[u]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: u }) {
    return n0(l, u);
  }
  build(l, u, o) {
    rc(l, u, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, u, o) {
    return pc(l, u, o);
  }
}
class vA extends y0 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Nt),
      (this.updateDimensions = () => {
        this.current &&
          !this.renderState.dimensions &&
          ay(this.current, this.renderState);
      });
  }
  getBaseTargetFromProps(l, u) {
    return l[u];
  }
  readValueFromInstance(l, u) {
    if (yi.has(u)) {
      const o = Rc(u);
      return (o && o.default) || 0;
    }
    return (u = sy.has(u) ? u : ac(u)), l.getAttribute(u);
  }
  scrapeMotionValuesFromProps(l, u, o) {
    return oy(l, u, o);
  }
  onBindTransform() {
    this.current &&
      !this.renderState.dimensions &&
      Dt.postRender(this.updateDimensions);
  }
  build(l, u, o) {
    hc(l, u, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(l, u, o, c) {
    uy(l, u, o, c);
  }
  mount(l) {
    (this.isSVGTag = dc(l.tagName)), super.mount(l);
  }
}
const SA = (a, l) =>
    fc(a) ? new vA(l) : new gA(l, { allowProjection: a !== G.Fragment }),
  bA = Q1({ ...Nb, ...oA, ...ZT, ...rA }, SA),
  gt = s1(bA);
function TA({ submitHandler: a, correct: l }) {
  const [u, o] = G.useState(""),
    c = (d) => {
      o(d.target.value);
    };
  return L.jsxs(gt.div, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
    className: "overflow-x-hidden flex flex-col gap-4",
    children: [
      L.jsxs("h1", {
        className: "text-slate-100 py-10 my-10",
        children: [
          "Welcome again ",
          L.jsx(gt.span, {
            className: "font-extrabold text-pink-600",
            initial: { marginLeft: 50 },
            animate: { marginLeft: 0 },
            transition: { duration: 1 },
            children: "My Love",
          }),
          " ",
        ],
      }),
      L.jsx(tu, {
        mode: "wait",
        children: l
          ? L.jsxs(
              gt.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 1, ease: "easeIn", duration: 1 },
                children: [
                  L.jsx("p", {
                    className: "text-green-400 my-4",
                    children: "Nice one, goodgirl.",
                  }),
                  L.jsx("small", {
                    className: "text-xs",
                    children:
                      "Base64 is a group of binary-to-text encoding schemes that transforms binary data into a sequence of printable characters, limited to a set of 64 unique characters",
                  }),
                ],
              },
              "correct"
            )
          : L.jsxs(
              gt.div,
              {
                exit: { opacity: 0, scale: 0 },
                children: [
                  L.jsxs(gt.p, {
                    className: "my-10",
                    initial: { scale: 2, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { delay: 1, duration: 0.7, ease: "easeIn" },
                    children: [
                      "I have some game for you ",
                      L.jsx("span", {
                        className: "text-pink-200",
                        children: "sweetie",
                      }),
                      " ",
                    ],
                  }),
                  L.jsxs(gt.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 2 },
                    className: "my-10",
                    children: [
                      L.jsx(gt.p, {
                        animate: { opacity: [1, 0, 1] },
                        transition: {
                          duration: 1,
                          repeat: 1 / 0,
                          ease: "backIn",
                        },
                        children: "Decode this base64 first okay",
                      }),
                      L.jsx(gt.p, {
                        className:
                          "font-mono text-slate-50 text-xs my-4 p-2 bg-pink-500",
                        animate: { borderRadius: [40, 0, 40] },
                        transition: {
                          repeat: 1 / 0,
                          duration: 5,
                          ease: "circInOut",
                        },
                        children: "YmVhdXRpZnVs",
                      }),
                    ],
                  }),
                  L.jsxs(gt.p, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 2.4 },
                    children: [
                      "Decode in ",
                      L.jsx("a", {
                        href: "https://www.base64decode.org/",
                        target: "_blank",
                        className: "p-1 py-0 bg-pink-500 text-slate-900",
                        children: "Here",
                      }),
                    ],
                  }),
                  L.jsxs(gt.div, {
                    initial: { y: 30, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    transition: { delay: 2.7 },
                    className: " my-10 overflow-hidden flex gap-2 p-2",
                    children: [
                      L.jsx("input", {
                        value: u,
                        onChange: c,
                        placeholder: "Submit in here",
                        className: "bg-slate-300 p-2 text-slate-900",
                        type: "text",
                      }),
                      L.jsx("button", {
                        onClick: a(u),
                        className: "bg-pink-500 text-slate-100 p-2",
                        children: "submit",
                      }),
                    ],
                  }),
                ],
              },
              "game"
            ),
      }),
    ],
  });
}
function AA({ submitHandler: a, correct: l }) {
  const [u, o] = G.useState(""),
    c = (d) => {
      o(d.target.value);
    };
  return L.jsxs(gt.div, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
    className: "overflow-x-hidden flex flex-col gap-4",
    children: [
      L.jsx("h1", {
        className: "text-pink-200 py-10 my-10",
        children: "Almost burn",
      }),
      L.jsx(tu, {
        mode: "wait",
        children: l
          ? L.jsxs(
              gt.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 1, ease: "easeIn", duration: 1 },
                children: [
                  L.jsx("p", {
                    className: "text-green-400 my-4",
                    children: "GILAK PINTER BANGET KAMU",
                  }),
                  L.jsx("small", {
                    className: "text-xs",
                    children:
                      "ROT13 is a simple letter substitution cipher that replaces a letter with the 13th letter after it in the Latin alphabet",
                  }),
                ],
              },
              "correct"
            )
          : L.jsxs(
              gt.div,
              {
                exit: { opacity: 0, scale: 0 },
                children: [
                  L.jsxs(gt.p, {
                    className: "my-10",
                    initial: { scale: 2, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { delay: 1, duration: 0.7, ease: "easeIn" },
                    children: [
                      "Make it correct ",
                      L.jsx("span", {
                        className: "text-pink-200",
                        children: "Honey",
                      }),
                      " ",
                    ],
                  }),
                  L.jsxs(gt.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 2 },
                    className: "my-10",
                    children: [
                      L.jsx(gt.p, {
                        animate: { opacity: [1, 0, 1] },
                        transition: {
                          duration: 1,
                          repeat: 1 / 0,
                          ease: "backIn",
                        },
                        children: "Now is Rot13",
                      }),
                      L.jsx(gt.p, {
                        className:
                          "font-mono text-slate-50 text-xs my-4 p-2 bg-pink-500",
                        animate: { borderRadius: [40, 0, 40] },
                        transition: {
                          repeat: 1 / 0,
                          duration: 5,
                          ease: "circInOut",
                        },
                        children: "xvaq",
                      }),
                    ],
                  }),
                  L.jsxs(gt.p, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 2.4 },
                    children: [
                      "Maybe a hint can help ",
                      L.jsx("a", {
                        href: "https://en.wikipedia.org/wiki/ROT13",
                        target: "_blank",
                        className: "p-1 py-0 bg-pink-500 text-slate-900",
                        children: "you",
                      }),
                    ],
                  }),
                  L.jsxs(gt.div, {
                    initial: { y: 30, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    transition: { delay: 2.7 },
                    className: " my-10 overflow-hidden flex gap-2 p-2",
                    children: [
                      L.jsx("input", {
                        value: u,
                        onChange: c,
                        placeholder: "Submit in here",
                        className: "bg-slate-300 p-2 text-slate-900",
                        type: "text",
                      }),
                      L.jsx("button", {
                        onClick: a(u),
                        className: "bg-pink-500 text-slate-100 p-2",
                        children: "submit",
                      }),
                    ],
                  }),
                ],
              },
              "game"
            ),
      }),
    ],
  });
}
function xA({ submitHandler: a, correct: l }) {
  const [u, o] = G.useState(""),
    c = (d) => {
      o(d.target.value);
    };
  return L.jsxs(gt.div, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
    className: "overflow-x-hidden flex flex-col gap-4",
    children: [
      L.jsx("h1", {
        className: "text-pink-200 py-10 my-10",
        children: "Last stage",
      }),
      L.jsx(tu, {
        mode: "wait",
        children: l
          ? L.jsxs(
              gt.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 1, ease: "easeIn", duration: 1 },
                children: [
                  L.jsx("p", {
                    className: "text-green-400 my-4",
                    children: "I love ur focus",
                  }),
                  L.jsx("small", {
                    className: "text-xs",
                    children:
                      "Exchangeable image file format is a standard that specifies formats for images, sound, and ancillary tags used by digital cameras, scanners and other systems handling image and sound files recorded by digital cameras.",
                  }),
                ],
              },
              "correct"
            )
          : L.jsxs(
              gt.div,
              {
                exit: { opacity: 0, scale: 0 },
                children: [
                  L.jsxs(gt.p, {
                    className: "my-10",
                    initial: { scale: 2, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { delay: 1, duration: 0.7, ease: "easeIn" },
                    children: [
                      "Keep it up ",
                      L.jsx("span", {
                        className: "text-pink-200",
                        children: "Girl",
                      }),
                      " ",
                    ],
                  }),
                  L.jsx(gt.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 2 },
                    className: "my-10",
                    children: L.jsx(gt.p, {
                      animate: { opacity: [1, 0, 1] },
                      transition: {
                        duration: 1,
                        repeat: 1 / 0,
                        ease: "backIn",
                      },
                      children: "I hide it in User Comment 🤖",
                    }),
                  }),
                  L.jsxs(gt.p, {
                    className: "my-4",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 2.4 },
                    children: [
                      "Download it first ",
                      L.jsx("a", {
                        href: "https://raw.githubusercontent.com/Tomba-Hopkins/belajar-CTF/refs/heads/main/THM/cat-pictures/unknown.jpeg",
                        target: "_blank",
                        className: "p-1 py-0 bg-pink-500 text-slate-900",
                        children: "okay",
                      }),
                    ],
                  }),
                  L.jsxs(gt.p, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 2.4 },
                    children: [
                      "Analyze in ",
                      L.jsx("a", {
                        href: "https://ezgif.com/view-metadata",
                        target: "_blank",
                        className: "p-1 py-0 bg-pink-500 text-slate-900",
                        children: "Here",
                      }),
                    ],
                  }),
                  L.jsxs(gt.div, {
                    initial: { y: 30, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    transition: { delay: 2.7 },
                    className: " my-10 overflow-hidden flex gap-2 p-2",
                    children: [
                      L.jsx("input", {
                        value: u,
                        onChange: c,
                        placeholder: "Submit in here",
                        className: "bg-slate-300 p-2 text-slate-900",
                        type: "text",
                      }),
                      L.jsx("button", {
                        onClick: a(u),
                        className: "bg-pink-500 text-slate-100 p-2",
                        children: "submit",
                      }),
                    ],
                  }),
                ],
              },
              "game"
            ),
      }),
    ],
  });
}
const EA = "./batman-DGicTbcQ.gif",
  DA = "./uia-CJv_6J8G.gif",
  MA = "./auiaua-BZv21k_l.mp3";
function RA() {
  const [a, l] = G.useState(!1),
    [u, o] = G.useState(!1),
    c = G.useRef(null),
    d = () => {
      l(!0), c.current && c.current.play();
    };
  return L.jsxs(gt.main, {
    className: "flex flex-col gap-4 items-center",
    initial: { x: 200 },
    animate: { x: 0 },
    transition: { ease: "easeIn", duration: 0.4 },
    children: [
      L.jsx("h1", {
        children: a
          ? "CIHUYYYY NOH LAGU INI NOH"
          : "Hey will u be my valentine",
      }),
      L.jsx("img", { className: "w-1/2", src: a ? DA : EA, alt: "batman" }),
      L.jsx("audio", { src: MA, ref: c }),
      L.jsxs("div", {
        className: "p-2 flex gap-3",
        children: [
          L.jsx("button", {
            onClick: d,
            className: "px-3 bg-pink-500 text-slate-100",
            children: "Yes",
          }),
          L.jsx(tu, {
            children:
              !u &&
              L.jsx(gt.button, {
                onClick: () => o(!0),
                exit: { opacity: 0 },
                transition: { ease: "easeIn", duration: 0.4 },
                className: `px-3 bg-red-900 text-slate-100 ${u && "hidden"}`,
                children: "No",
              }),
          }),
        ],
      }),
    ],
  });
}
const Ur = ["beautiful", "kind", "smartgirl"],
  Br = [TA, AA, xA, RA];
function OA() {
  const [a, l] = G.useState(0),
    [u, o] = G.useState(!1),
    c = Br[a],
    [d, h] = G.useState([]),
    y = () => {
      a != Br.length - 1 && (h((p) => [...p, Ur[a]]), l((p) => p + 1), o(!1));
    },
    m = (p) => {
      p == Ur[a] && o(!0);
    };
  return L.jsx(L.Fragment, {
    children: L.jsxs("main", {
      className:
        "min-h-screen flex flex-col overflow-x-hidden justify-center text-center items-center bg-slate-800 text-pink-500 gap-6 font-semibold font-flower tracking-widest",
      children: [
        L.jsxs("nav", {
          className: "p-2 my-10",
          children: [
            a > 0 && L.jsxs("p", { children: [a, "/", Ur.length] }),
            L.jsx("div", {
              className: "p-2 flex gap-2",
              children: d.map((p, v) =>
                L.jsx(
                  "p",
                  { className: "bg-pink-500 text-slate-100 p-2", children: p },
                  v
                )
              ),
            }),
          ],
        }),
        L.jsx(c, {
          correct: u,
          submitHandler: m,
          pageHandler: y,
          setCorrect: o,
        }),
        u &&
          a < Br.length - 1 &&
          L.jsx(gt.button, {
            animate: { scale: [1, 1.5, 1] },
            transition: { repeat: 1 / 0, ease: "easeIn", duration: 2 },
            className:
              "px-6 py-1 bg-slate-300 rounded-sm rounded-tl-none rounded-tr-none active:animate-ping active:border-2 border-pink-500",
            onClick: y,
            children: "💗",
          }),
      ],
    }),
  });
}
Jv.createRoot(document.getElementById("root")).render(
  L.jsx(G.StrictMode, { children: L.jsx(OA, {}) })
);

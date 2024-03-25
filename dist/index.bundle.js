(() => {
  "use strict";
  var e = {
      208: (e, n, r) => {
        r.d(n, { A: () => c });
        var t = r(601),
          o = r.n(t),
          a = r(314),
          i = r.n(a)()(o());
        i.push([
          e.id,
          '* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n\n  font-family:\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    "Open Sans",\n    "Helvetica Neue",\n    sans-serif;\n}\n\n#weather-box {\n  background-color: rgba(0, 0, 0, 0.2);\n  height: 150px;\n  width: 300px;\n  border-radius: 6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\nform {\n  margin: 20px 0;\n  background-color: rgb(248, 248, 248);\n  border-radius: 5px;\n  padding: 10px 30px;\n  border: 1px solid rgba(179, 179, 179, 0.411);\n  width: 350px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nform > label {\n  font-weight: 500;\n}\nform > div {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n#enter {\n  width: 50px;\n  height: 26px;\n  border: 1px solid rgba(141, 141, 141, 0.596);\n  border-radius: 5px;\n  font-weight: 600;\n}\ninput {\n  appearance: none;\n  border: none;\n  padding: 5px;\n  border-radius: 5px;\n  background-color: rgb(233, 233, 233);\n  border: 1px solid rgb(187, 187, 187);\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n\np {\n  color: rgb(255, 255, 255);\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n',
          "",
        ]);
        const c = i;
      },
      314: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var r = "",
                  t = void 0 !== n[5];
                return (
                  n[4] && (r += "@supports (".concat(n[4], ") {")),
                  n[2] && (r += "@media ".concat(n[2], " {")),
                  t &&
                    (r += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (r += e(n)),
                  t && (r += "}"),
                  n[2] && (r += "}"),
                  n[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (n.i = function (e, r, t, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (t)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var d = [].concat(e[u]);
                (t && i[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  r &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = r))
                      : (d[2] = r)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  n.push(d));
              }
            }),
            n
          );
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
        var n = [];
        function r(e) {
          for (var r = -1, t = 0; t < n.length; t++)
            if (n[t].identifier === e) {
              r = t;
              break;
            }
          return r;
        }
        function t(e, t) {
          for (var a = {}, i = [], c = 0; c < e.length; c++) {
            var s = e[c],
              u = t.base ? s[0] + t.base : s[0],
              d = a[u] || 0,
              l = "".concat(u, " ").concat(d);
            a[u] = d + 1;
            var p = r(l),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(f);
            else {
              var m = o(f, t);
              (t.byIndex = c),
                n.splice(c, 0, { identifier: l, updater: m, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function o(e, n) {
          var r = n.domAPI(n);
          return (
            r.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                r.update((e = n));
              } else r.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = t((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var c = r(a[i]);
              n[c].references--;
            }
            for (var s = t(e, o), u = 0; u < a.length; u++) {
              var d = r(a[u]);
              0 === n[d].references && (n[d].updater(), n.splice(d, 1));
            }
            a = s;
          };
        };
      },
      659: (e) => {
        var n = {};
        e.exports = function (e, r) {
          var t = (function (e) {
            if (void 0 === n[e]) {
              var r = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (e) {
                  r = null;
                }
              n[e] = r;
            }
            return n[e];
          })(e);
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          t.appendChild(r);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      56: (e, n, r) => {
        e.exports = function (e) {
          var n = r.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (r) {
              !(function (e, n, r) {
                var t = "";
                r.supports && (t += "@supports (".concat(r.supports, ") {")),
                  r.media && (t += "@media ".concat(r.media, " {"));
                var o = void 0 !== r.layer;
                o &&
                  (t += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {"
                  )),
                  (t += r.css),
                  o && (t += "}"),
                  r.media && (t += "}"),
                  r.supports && (t += "}");
                var a = r.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (t +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  n.styleTagTransform(t, e, n.options);
              })(n, e, r);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function r(t) {
    var o = n[t];
    if (void 0 !== o) return o.exports;
    var a = (n[t] = { id: t, exports: {} });
    return e[t](a, a.exports, r), a.exports;
  }
  (r.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return r.d(n, { a: n }), n;
  }),
    (r.d = (e, n) => {
      for (var t in n)
        r.o(n, t) &&
          !r.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (r.nc = void 0),
    (() => {
      var e = r(72),
        n = r.n(e),
        t = r(825),
        o = r.n(t),
        a = r(659),
        i = r.n(a),
        c = r(56),
        s = r.n(c),
        u = r(540),
        d = r.n(u),
        l = r(113),
        p = r.n(l),
        f = r(208),
        m = {};
      (m.styleTagTransform = p()),
        (m.setAttributes = s()),
        (m.insert = i().bind(null, "head")),
        (m.domAPI = o()),
        (m.insertStyleElement = d()),
        n()(f.A, m),
        f.A && f.A.locals && f.A.locals;
      const g = document.querySelector("#search"),
        y = document.querySelector("#enter"),
        h = document.querySelector("#celsius"),
        v = document.querySelector("#fahrenheit"),
        b = document.querySelector("#icon"),
        x = document.querySelector("#city"),
        w = document.querySelector("#name"),
        S = document.querySelector("#region"),
        M = document.querySelector("body");
      y.addEventListener("click", async () => {
        try {
          (e = await (async function (e) {
            try {
              const n = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=618c4948f5464fee86c165832242103&q=${e}`
              );
              if (!n.ok) throw new Error("Invalid response from server");
              return await n.json();
            } catch (e) {
              throw new Error(
                "Failed to fetch weather data. Please try again."
              );
            }
          })(g.value)) &&
            ((v.innerHTML = `${e.current.temp_f}&deg;F`),
            (h.innerHTML = `${e.current.temp_c}&deg;C`),
            (x.innerHTML = e.location.country),
            (S.innerHTML = e.location.region),
            (w.innerHTML = e.location.name),
            (b.src = `http:${e.current.condition.icon}`),
            e.current.is_day
              ? (M.style.backgroundImage =
                  "linear-gradient(rgb(255, 245, 230), rgb(253, 188, 46))")
              : (M.style.backgroundImage =
                  "linear-gradient(rgb(30, 35, 36), rgb(0, 70, 110))"));
        } catch (e) {
          console.error(e.message), alert(e.message);
        }
        var e;
      });
    })();
})();

var protocol = document.location.protocol;
"https:" != protocol && (protocol = "http:");
var count = document.createElement("script");
count.type = "text/javascript";
count.async = !0;
count.src = protocol + "//hello.myfonts.net/count/2f45a7";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(count, s);
var browserName, browserVersion, webfontType;
if ("undefined" == typeof woffEnabled) var woffEnabled = !0;
var svgEnabled = 0,
  woff2Enabled = 1;
if ("undefined" != typeof customPath) var path = customPath;
else {
  var scripts = document.getElementsByTagName("SCRIPT"),
    script = scripts[scripts.length - 1].src;
  script.match("://") || "/" == script.charAt(0) || (script = "./" + script);
  path = script.replace(/\\/g, "/").replace(/\/[^\/]*\/?$/, "");
}
var wfpath = path + "/fonts/",
  browsers = [
    {
      regex: "MSIE (\\d+\\.\\d+)",
      versionRegex: "new Number(RegExp.$1)",
      type: [
        { version: 9, type: "woff" },
        { version: 5, type: "eot" },
      ],
    },
    {
      regex: "Trident/(\\d+\\.\\d+); (.+)?rv:(\\d+\\.\\d+)",
      versionRegex: "new Number(RegExp.$3)",
      type: [{ version: 11, type: "woff" }],
    },
    {
      regex: "Firefox[/s](\\d+\\.\\d+)",
      versionRegex: "new Number(RegExp.$1)",
      type: [
        { version: 3.6, type: "woff" },
        { version: 3.5, type: "ttf" },
      ],
    },
    {
      regex: "Edge/(\\d+\\.\\d+)",
      versionRegex: "new Number(RegExp.$1)",
      type: [{ version: 12, type: "woff" }],
    },
    {
      regex: "Chrome/(\\d+\\.\\d+)",
      versionRegex: "new Number(RegExp.$1)",
      type: [
        { version: 36, type: "woff2" },
        { version: 6, type: "woff" },
        { version: 4, type: "ttf" },
      ],
    },
    {
      regex: "Mozilla.*Android (\\d+\\.\\d+).*AppleWebKit.*Safari",
      versionRegex: "new Number(RegExp.$1)",
      type: [
        { version: 4.1, type: "woff" },
        { version: 3.1, type: "svg#wf" },
        { version: 2.2, type: "ttf" },
      ],
    },
    {
      regex: "Mozilla.*(iPhone|iPad).* OS (\\d+)_(\\d+).* AppleWebKit.*Safari",
      versionRegex: "new Number(RegExp.$2) + (new Number(RegExp.$3) / 10)",
      unhinted: !0,
      type: [
        { version: 5, type: "woff" },
        { version: 4.2, type: "ttf" },
        { version: 1, type: "svg#wf" },
      ],
    },
    {
      regex: "Mozilla.*(iPhone|iPad|BlackBerry).*AppleWebKit.*Safari",
      versionRegex: "1.0",
      type: [{ version: 1, type: "svg#wf" }],
    },
    {
      regex: "Version/(\\d+\\.\\d+)(\\.\\d+)? Safari/(\\d+\\.\\d+)",
      versionRegex: "new Number(RegExp.$1)",
      type: [
        { version: 5.1, type: "woff" },
        { version: 3.1, type: "ttf" },
      ],
    },
    {
      regex: "Opera/(\\d+\\.\\d+)(.+)Version/(\\d+\\.\\d+)(\\.\\d+)?",
      versionRegex: "new Number(RegExp.$3)",
      type: [
        { version: 24, type: "woff2" },
        { version: 11.1, type: "woff" },
        { version: 10.1, type: "ttf" },
      ],
    },
  ],
  browLen = browsers.length,
  suffix = "",
  i = 0;
a: for (; i < browLen; i++) {
  var regex = RegExp(browsers[i].regex);
  if (regex.test(navigator.userAgent)) {
    browserVersion = eval(browsers[i].versionRegex);
    var typeLen = browsers[i].type.length;
    for (j = 0; j < typeLen; j++)
      if (
        browserVersion >= browsers[i].type[j].version &&
        (!0 == browsers[i].unhinted && (suffix = "_unhinted"),
        (webfontType = browsers[i].type[j].type),
        "woff" != webfontType || woffEnabled) &&
        ("woff2" != webfontType || woff2Enabled) &&
        ("svg#wf" != webfontType || svgEnabled)
      )
        break a;
  } else webfontType = "woff";
}
/(Macintosh|Android)/.test(navigator.userAgent) &&
  "svg#wf" != webfontType &&
  (suffix = "_unhinted");
var head = document.getElementsByTagName("head")[0],
  stylesheet = document.createElement("style");
stylesheet.setAttribute("type", "text/css");
head.appendChild(stylesheet);
for (
  var fonts = [
      {
        fontFamily: "BodoniBoldItalic",
        url: wfpath + "2F45A7_0" + suffix + "_0." + webfontType,
      },
    ],
    len = fonts.length,
    css = "",
    i = 0;
  i < len;
  i++
) {
  var format =
      "svg#wf" == webfontType
        ? 'format("svg")'
        : "ttf" == webfontType
        ? 'format("truetype")'
        : "eot" == webfontType
        ? ""
        : 'format("' + webfontType + '")',
    css =
      css +
      ("@font-face{font-family: " +
        fonts[i].fontFamily +
        ";src:url(" +
        fonts[i].url +
        ")" +
        format +
        ";");
  fonts[i].fontWeight && (css += "font-weight: " + fonts[i].fontWeight + ";");
  fonts[i].fontStyle && (css += "font-style: " + fonts[i].fontStyle + ";");
  css += "}";
}
stylesheet.styleSheet
  ? (stylesheet.styleSheet.cssText = css)
  : (stylesheet.innerHTML = css);
require = (function t(e, r, i) {
  function n(s, a) {
    if (!r[s]) {
      if (!e[s]) {
        var h = "function" == typeof require && require;
        if (!a && h) return h(s, !0);
        if (o) return o(s, !0);
        var l = new Error("Cannot find module '" + s + "'");
        throw ((l.code = "MODULE_NOT_FOUND"), l);
      }
      var u = (r[s] = { exports: {} });
      e[s][0].call(
        u.exports,
        function (t) {
          var r = e[s][1][t];
          return n(r ? r : t);
        },
        u,
        u.exports,
        t,
        e,
        r,
        i
      );
    }
    return r[s].exports;
  }
  for (
    var o = "function" == typeof require && require, s = 0;
    s < i.length;
    s++
  )
    n(i[s]);
  return n;
})(
  {
    1: [
      function (t, e, r) {
        (function (t) {
          !(function () {
            function r(t) {
              var e = !1;
              return function () {
                if (e) throw new Error("Callback was already called.");
                (e = !0), t.apply(i, arguments);
              };
            }
            var i,
              n,
              o = {};
            (i = this),
              null != i && (n = i.async),
              (o.noConflict = function () {
                return (i.async = n), o;
              });
            var s = Object.prototype.toString,
              a =
                Array.isArray ||
                function (t) {
                  return "[object Array]" === s.call(t);
                },
              h = function (t, e) {
                if (t.forEach) return t.forEach(e);
                for (var r = 0; r < t.length; r += 1) e(t[r], r, t);
              },
              l = function (t, e) {
                if (t.map) return t.map(e);
                var r = [];
                return (
                  h(t, function (t, i, n) {
                    r.push(e(t, i, n));
                  }),
                  r
                );
              },
              u = function (t, e, r) {
                return t.reduce
                  ? t.reduce(e, r)
                  : (h(t, function (t, i, n) {
                      r = e(r, t, i, n);
                    }),
                    r);
              },
              c = function (t) {
                if (Object.keys) return Object.keys(t);
                var e = [];
                for (var r in t) t.hasOwnProperty(r) && e.push(r);
                return e;
              };
            "undefined" != typeof t && t.nextTick
              ? ((o.nextTick = t.nextTick),
                (o.setImmediate =
                  "undefined" != typeof setImmediate
                    ? function (t) {
                        setImmediate(t);
                      }
                    : o.nextTick))
              : "function" == typeof setImmediate
              ? ((o.nextTick = function (t) {
                  setImmediate(t);
                }),
                (o.setImmediate = o.nextTick))
              : ((o.nextTick = function (t) {
                  setTimeout(t, 0);
                }),
                (o.setImmediate = o.nextTick)),
              (o.each = function (t, e, i) {
                function n(e) {
                  e
                    ? (i(e), (i = function () {}))
                    : ((o += 1), o >= t.length && i());
                }
                if (((i = i || function () {}), !t.length)) return i();
                var o = 0;
                h(t, function (t) {
                  e(t, r(n));
                });
              }),
              (o.forEach = o.each),
              (o.eachSeries = function (t, e, r) {
                if (((r = r || function () {}), !t.length)) return r();
                var i = 0,
                  n = function () {
                    e(t[i], function (e) {
                      e
                        ? (r(e), (r = function () {}))
                        : ((i += 1), i >= t.length ? r() : n());
                    });
                  };
                n();
              }),
              (o.forEachSeries = o.eachSeries),
              (o.eachLimit = function (t, e, r, i) {
                var n = p(e);
                n.apply(null, [t, r, i]);
              }),
              (o.forEachLimit = o.eachLimit);
            var p = function (t) {
                return function (e, r, i) {
                  if (((i = i || function () {}), !e.length || 0 >= t))
                    return i();
                  var n = 0,
                    o = 0,
                    s = 0;
                  !(function a() {
                    if (n >= e.length) return i();
                    for (; t > s && o < e.length; )
                      (o += 1),
                        (s += 1),
                        r(e[o - 1], function (t) {
                          t
                            ? (i(t), (i = function () {}))
                            : ((n += 1), (s -= 1), n >= e.length ? i() : a());
                        });
                  })();
                };
              },
              d = function (t) {
                return function () {
                  var e = Array.prototype.slice.call(arguments);
                  return t.apply(null, [o.each].concat(e));
                };
              },
              f = function (t, e) {
                return function () {
                  var r = Array.prototype.slice.call(arguments);
                  return e.apply(null, [p(t)].concat(r));
                };
              },
              v = function (t) {
                return function () {
                  var e = Array.prototype.slice.call(arguments);
                  return t.apply(null, [o.eachSeries].concat(e));
                };
              },
              g = function (t, e, r, i) {
                if (
                  ((e = l(e, function (t, e) {
                    return { index: e, value: t };
                  })),
                  i)
                ) {
                  var n = [];
                  t(
                    e,
                    function (t, e) {
                      r(t.value, function (r, i) {
                        (n[t.index] = i), e(r);
                      });
                    },
                    function (t) {
                      i(t, n);
                    }
                  );
                } else
                  t(e, function (t, e) {
                    r(t.value, function (t) {
                      e(t);
                    });
                  });
              };
            (o.map = d(g)),
              (o.mapSeries = v(g)),
              (o.mapLimit = function (t, e, r, i) {
                return m(e)(t, r, i);
              });
            var m = function (t) {
              return f(t, g);
            };
            (o.reduce = function (t, e, r, i) {
              o.eachSeries(
                t,
                function (t, i) {
                  r(e, t, function (t, r) {
                    (e = r), i(t);
                  });
                },
                function (t) {
                  i(t, e);
                }
              );
            }),
              (o.inject = o.reduce),
              (o.foldl = o.reduce),
              (o.reduceRight = function (t, e, r, i) {
                var n = l(t, function (t) {
                  return t;
                }).reverse();
                o.reduce(n, e, r, i);
              }),
              (o.foldr = o.reduceRight);
            var y = function (t, e, r, i) {
              var n = [];
              (e = l(e, function (t, e) {
                return { index: e, value: t };
              })),
                t(
                  e,
                  function (t, e) {
                    r(t.value, function (r) {
                      r && n.push(t), e();
                    });
                  },
                  function (t) {
                    i(
                      l(
                        n.sort(function (t, e) {
                          return t.index - e.index;
                        }),
                        function (t) {
                          return t.value;
                        }
                      )
                    );
                  }
                );
            };
            (o.filter = d(y)),
              (o.filterSeries = v(y)),
              (o.select = o.filter),
              (o.selectSeries = o.filterSeries);
            var x = function (t, e, r, i) {
              var n = [];
              (e = l(e, function (t, e) {
                return { index: e, value: t };
              })),
                t(
                  e,
                  function (t, e) {
                    r(t.value, function (r) {
                      r || n.push(t), e();
                    });
                  },
                  function (t) {
                    i(
                      l(
                        n.sort(function (t, e) {
                          return t.index - e.index;
                        }),
                        function (t) {
                          return t.value;
                        }
                      )
                    );
                  }
                );
            };
            (o.reject = d(x)), (o.rejectSeries = v(x));
            var b = function (t, e, r, i) {
              t(
                e,
                function (t, e) {
                  r(t, function (r) {
                    r ? (i(t), (i = function () {})) : e();
                  });
                },
                function (t) {
                  i();
                }
              );
            };
            (o.detect = d(b)),
              (o.detectSeries = v(b)),
              (o.some = function (t, e, r) {
                o.each(
                  t,
                  function (t, i) {
                    e(t, function (t) {
                      t && (r(!0), (r = function () {})), i();
                    });
                  },
                  function (t) {
                    r(!1);
                  }
                );
              }),
              (o.any = o.some),
              (o.every = function (t, e, r) {
                o.each(
                  t,
                  function (t, i) {
                    e(t, function (t) {
                      t || (r(!1), (r = function () {})), i();
                    });
                  },
                  function (t) {
                    r(!0);
                  }
                );
              }),
              (o.all = o.every),
              (o.sortBy = function (t, e, r) {
                o.map(
                  t,
                  function (t, r) {
                    e(t, function (e, i) {
                      e ? r(e) : r(null, { value: t, criteria: i });
                    });
                  },
                  function (t, e) {
                    if (t) return r(t);
                    var i = function (t, e) {
                      var r = t.criteria,
                        i = e.criteria;
                      return i > r ? -1 : r > i ? 1 : 0;
                    };
                    r(
                      null,
                      l(e.sort(i), function (t) {
                        return t.value;
                      })
                    );
                  }
                );
              }),
              (o.auto = function (t, e) {
                e = e || function () {};
                var r = c(t),
                  i = r.length;
                if (!i) return e();
                var n = {},
                  s = [],
                  l = function (t) {
                    s.unshift(t);
                  },
                  p = function (t) {
                    for (var e = 0; e < s.length; e += 1)
                      if (s[e] === t) return void s.splice(e, 1);
                  },
                  d = function () {
                    i--,
                      h(s.slice(0), function (t) {
                        t();
                      });
                  };
                l(function () {
                  if (!i) {
                    var t = e;
                    (e = function () {}), t(null, n);
                  }
                }),
                  h(r, function (r) {
                    var i = a(t[r]) ? t[r] : [t[r]],
                      s = function (t) {
                        var i = Array.prototype.slice.call(arguments, 1);
                        if ((i.length <= 1 && (i = i[0]), t)) {
                          var s = {};
                          h(c(n), function (t) {
                            s[t] = n[t];
                          }),
                            (s[r] = i),
                            e(t, s),
                            (e = function () {});
                        } else (n[r] = i), o.setImmediate(d);
                      },
                      f = i.slice(0, Math.abs(i.length - 1)) || [],
                      v = function () {
                        return (
                          u(
                            f,
                            function (t, e) {
                              return t && n.hasOwnProperty(e);
                            },
                            !0
                          ) && !n.hasOwnProperty(r)
                        );
                      };
                    if (v()) i[i.length - 1](s, n);
                    else {
                      var g = function () {
                        v() && (p(g), i[i.length - 1](s, n));
                      };
                      l(g);
                    }
                  });
              }),
              (o.retry = function (t, e, r) {
                var i = 5,
                  n = [];
                "function" == typeof t && ((r = e), (e = t), (t = i)),
                  (t = parseInt(t, 10) || i);
                var s = function (i, s) {
                  for (
                    var a = function (t, e) {
                      return function (r) {
                        t(function (t, i) {
                          r(!t || e, { err: t, result: i });
                        }, s);
                      };
                    };
                    t;

                  )
                    n.push(a(e, !(t -= 1)));
                  o.series(n, function (t, e) {
                    (e = e[e.length - 1]), (i || r)(e.err, e.result);
                  });
                };
                return r ? s() : s;
              }),
              (o.waterfall = function (t, e) {
                if (((e = e || function () {}), !a(t))) {
                  var r = new Error(
                    "First argument to waterfall must be an array of functions"
                  );
                  return e(r);
                }
                if (!t.length) return e();
                var i = function (t) {
                  return function (r) {
                    if (r) e.apply(null, arguments), (e = function () {});
                    else {
                      var n = Array.prototype.slice.call(arguments, 1),
                        s = t.next();
                      n.push(s ? i(s) : e),
                        o.setImmediate(function () {
                          t.apply(null, n);
                        });
                    }
                  };
                };
                i(o.iterator(t))();
              });
            var _ = function (t, e, r) {
              if (((r = r || function () {}), a(e)))
                t.map(
                  e,
                  function (t, e) {
                    t &&
                      t(function (t) {
                        var r = Array.prototype.slice.call(arguments, 1);
                        r.length <= 1 && (r = r[0]), e.call(null, t, r);
                      });
                  },
                  r
                );
              else {
                var i = {};
                t.each(
                  c(e),
                  function (t, r) {
                    e[t](function (e) {
                      var n = Array.prototype.slice.call(arguments, 1);
                      n.length <= 1 && (n = n[0]), (i[t] = n), r(e);
                    });
                  },
                  function (t) {
                    r(t, i);
                  }
                );
              }
            };
            (o.parallel = function (t, e) {
              _({ map: o.map, each: o.each }, t, e);
            }),
              (o.parallelLimit = function (t, e, r) {
                _({ map: m(e), each: p(e) }, t, r);
              }),
              (o.series = function (t, e) {
                if (((e = e || function () {}), a(t)))
                  o.mapSeries(
                    t,
                    function (t, e) {
                      t &&
                        t(function (t) {
                          var r = Array.prototype.slice.call(arguments, 1);
                          r.length <= 1 && (r = r[0]), e.call(null, t, r);
                        });
                    },
                    e
                  );
                else {
                  var r = {};
                  o.eachSeries(
                    c(t),
                    function (e, i) {
                      t[e](function (t) {
                        var n = Array.prototype.slice.call(arguments, 1);
                        n.length <= 1 && (n = n[0]), (r[e] = n), i(t);
                      });
                    },
                    function (t) {
                      e(t, r);
                    }
                  );
                }
              }),
              (o.iterator = function (t) {
                var e = function (r) {
                  var i = function () {
                    return t.length && t[r].apply(null, arguments), i.next();
                  };
                  return (
                    (i.next = function () {
                      return r < t.length - 1 ? e(r + 1) : null;
                    }),
                    i
                  );
                };
                return e(0);
              }),
              (o.apply = function (t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return function () {
                  return t.apply(
                    null,
                    e.concat(Array.prototype.slice.call(arguments))
                  );
                };
              });
            var T = function (t, e, r, i) {
              var n = [];
              t(
                e,
                function (t, e) {
                  r(t, function (t, r) {
                    (n = n.concat(r || [])), e(t);
                  });
                },
                function (t) {
                  i(t, n);
                }
              );
            };
            (o.concat = d(T)),
              (o.concatSeries = v(T)),
              (o.whilst = function (t, e, r) {
                t()
                  ? e(function (i) {
                      return i ? r(i) : void o.whilst(t, e, r);
                    })
                  : r();
              }),
              (o.doWhilst = function (t, e, r) {
                t(function (i) {
                  if (i) return r(i);
                  var n = Array.prototype.slice.call(arguments, 1);
                  e.apply(null, n) ? o.doWhilst(t, e, r) : r();
                });
              }),
              (o.until = function (t, e, r) {
                t()
                  ? r()
                  : e(function (i) {
                      return i ? r(i) : void o.until(t, e, r);
                    });
              }),
              (o.doUntil = function (t, e, r) {
                t(function (i) {
                  if (i) return r(i);
                  var n = Array.prototype.slice.call(arguments, 1);
                  e.apply(null, n) ? r() : o.doUntil(t, e, r);
                });
              }),
              (o.queue = function (t, e) {
                function i(t, e, r, i) {
                  return (
                    t.started || (t.started = !0),
                    a(e) || (e = [e]),
                    0 == e.length
                      ? o.setImmediate(function () {
                          t.drain && t.drain();
                        })
                      : void h(e, function (e) {
                          var n = {
                            data: e,
                            callback: "function" == typeof i ? i : null,
                          };
                          r ? t.tasks.unshift(n) : t.tasks.push(n),
                            t.saturated &&
                              t.tasks.length === t.concurrency &&
                              t.saturated(),
                            o.setImmediate(t.process);
                        })
                  );
                }
                void 0 === e && (e = 1);
                var n = 0,
                  s = {
                    tasks: [],
                    concurrency: e,
                    saturated: null,
                    empty: null,
                    drain: null,
                    started: !1,
                    paused: !1,
                    push: function (t, e) {
                      i(s, t, !1, e);
                    },
                    kill: function () {
                      (s.drain = null), (s.tasks = []);
                    },
                    unshift: function (t, e) {
                      i(s, t, !0, e);
                    },
                    process: function () {
                      if (!s.paused && n < s.concurrency && s.tasks.length) {
                        var e = s.tasks.shift();
                        s.empty && 0 === s.tasks.length && s.empty(), (n += 1);
                        var i = function () {
                            (n -= 1),
                              e.callback && e.callback.apply(e, arguments),
                              s.drain && s.tasks.length + n === 0 && s.drain(),
                              s.process();
                          },
                          o = r(i);
                        t(e.data, o);
                      }
                    },
                    length: function () {
                      return s.tasks.length;
                    },
                    running: function () {
                      return n;
                    },
                    idle: function () {
                      return s.tasks.length + n === 0;
                    },
                    pause: function () {
                      s.paused !== !0 && ((s.paused = !0), s.process());
                    },
                    resume: function () {
                      s.paused !== !1 && ((s.paused = !1), s.process());
                    },
                  };
                return s;
              }),
              (o.priorityQueue = function (t, e) {
                function r(t, e) {
                  return t.priority - e.priority;
                }
                function i(t, e, r) {
                  for (var i = -1, n = t.length - 1; n > i; ) {
                    var o = i + ((n - i + 1) >>> 1);
                    r(e, t[o]) >= 0 ? (i = o) : (n = o - 1);
                  }
                  return i;
                }
                function n(t, e, n, s) {
                  return (
                    t.started || (t.started = !0),
                    a(e) || (e = [e]),
                    0 == e.length
                      ? o.setImmediate(function () {
                          t.drain && t.drain();
                        })
                      : void h(e, function (e) {
                          var a = {
                            data: e,
                            priority: n,
                            callback: "function" == typeof s ? s : null,
                          };
                          t.tasks.splice(i(t.tasks, a, r) + 1, 0, a),
                            t.saturated &&
                              t.tasks.length === t.concurrency &&
                              t.saturated(),
                            o.setImmediate(t.process);
                        })
                  );
                }
                var s = o.queue(t, e);
                return (
                  (s.push = function (t, e, r) {
                    n(s, t, e, r);
                  }),
                  delete s.unshift,
                  s
                );
              }),
              (o.cargo = function (t, e) {
                var r = !1,
                  i = [],
                  n = {
                    tasks: i,
                    payload: e,
                    saturated: null,
                    empty: null,
                    drain: null,
                    drained: !0,
                    push: function (t, r) {
                      a(t) || (t = [t]),
                        h(t, function (t) {
                          i.push({
                            data: t,
                            callback: "function" == typeof r ? r : null,
                          }),
                            (n.drained = !1),
                            n.saturated && i.length === e && n.saturated();
                        }),
                        o.setImmediate(n.process);
                    },
                    process: function s() {
                      if (!r) {
                        if (0 === i.length)
                          return (
                            n.drain && !n.drained && n.drain(),
                            void (n.drained = !0)
                          );
                        var o =
                            "number" == typeof e
                              ? i.splice(0, e)
                              : i.splice(0, i.length),
                          a = l(o, function (t) {
                            return t.data;
                          });
                        n.empty && n.empty(),
                          (r = !0),
                          t(a, function () {
                            r = !1;
                            var t = arguments;
                            h(o, function (e) {
                              e.callback && e.callback.apply(null, t);
                            }),
                              s();
                          });
                      }
                    },
                    length: function () {
                      return i.length;
                    },
                    running: function () {
                      return r;
                    },
                  };
                return n;
              });
            var E = function (t) {
              return function (e) {
                var r = Array.prototype.slice.call(arguments, 1);
                e.apply(
                  null,
                  r.concat([
                    function (e) {
                      var r = Array.prototype.slice.call(arguments, 1);
                      "undefined" != typeof console &&
                        (e
                          ? console.error && console.error(e)
                          : console[t] &&
                            h(r, function (e) {
                              console[t](e);
                            }));
                    },
                  ])
                );
              };
            };
            (o.log = E("log")),
              (o.dir = E("dir")),
              (o.memoize = function (t, e) {
                var r = {},
                  i = {};
                e =
                  e ||
                  function (t) {
                    return t;
                  };
                var n = function () {
                  var n = Array.prototype.slice.call(arguments),
                    s = n.pop(),
                    a = e.apply(null, n);
                  a in r
                    ? o.nextTick(function () {
                        s.apply(null, r[a]);
                      })
                    : a in i
                    ? i[a].push(s)
                    : ((i[a] = [s]),
                      t.apply(
                        null,
                        n.concat([
                          function () {
                            r[a] = arguments;
                            var t = i[a];
                            delete i[a];
                            for (var e = 0, n = t.length; n > e; e++)
                              t[e].apply(null, arguments);
                          },
                        ])
                      ));
                };
                return (n.memo = r), (n.unmemoized = t), n;
              }),
              (o.unmemoize = function (t) {
                return function () {
                  return (t.unmemoized || t).apply(null, arguments);
                };
              }),
              (o.times = function (t, e, r) {
                for (var i = [], n = 0; t > n; n++) i.push(n);
                return o.map(i, e, r);
              }),
              (o.timesSeries = function (t, e, r) {
                for (var i = [], n = 0; t > n; n++) i.push(n);
                return o.mapSeries(i, e, r);
              }),
              (o.seq = function () {
                var t = arguments;
                return function () {
                  var e = this,
                    r = Array.prototype.slice.call(arguments),
                    i = r.pop();
                  o.reduce(
                    t,
                    r,
                    function (t, r, i) {
                      r.apply(
                        e,
                        t.concat([
                          function () {
                            var t = arguments[0],
                              e = Array.prototype.slice.call(arguments, 1);
                            i(t, e);
                          },
                        ])
                      );
                    },
                    function (t, r) {
                      i.apply(e, [t].concat(r));
                    }
                  );
                };
              }),
              (o.compose = function () {
                return o.seq.apply(
                  null,
                  Array.prototype.reverse.call(arguments)
                );
              });
            var S = function (t, e) {
              var r = function () {
                var r = this,
                  i = Array.prototype.slice.call(arguments),
                  n = i.pop();
                return t(
                  e,
                  function (t, e) {
                    t.apply(r, i.concat([e]));
                  },
                  n
                );
              };
              if (arguments.length > 2) {
                var i = Array.prototype.slice.call(arguments, 2);
                return r.apply(this, i);
              }
              return r;
            };
            (o.applyEach = d(S)),
              (o.applyEachSeries = v(S)),
              (o.forever = function (t, e) {
                function r(i) {
                  if (i) {
                    if (e) return e(i);
                    throw i;
                  }
                  t(r);
                }
                r();
              }),
              "undefined" != typeof e && e.exports
                ? (e.exports = o)
                : "undefined" != typeof define && define.amd
                ? define([], function () {
                    return o;
                  })
                : (i.async = o);
          })();
        }.call(this, t("_process")));
      },
      { _process: 3 },
    ],
    2: [
      function (t, e, r) {
        (function (t) {
          function e(t, e) {
            for (var r = 0, i = t.length - 1; i >= 0; i--) {
              var n = t[i];
              "." === n
                ? t.splice(i, 1)
                : ".." === n
                ? (t.splice(i, 1), r++)
                : r && (t.splice(i, 1), r--);
            }
            if (e) for (; r--; r) t.unshift("..");
            return t;
          }
          function i(t, e) {
            if (t.filter) return t.filter(e);
            for (var r = [], i = 0; i < t.length; i++)
              e(t[i], i, t) && r.push(t[i]);
            return r;
          }
          var n =
              /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
            o = function (t) {
              return n.exec(t).slice(1);
            };
          (r.resolve = function () {
            for (
              var r = "", n = !1, o = arguments.length - 1;
              o >= -1 && !n;
              o--
            ) {
              var s = o >= 0 ? arguments[o] : t.cwd();
              if ("string" != typeof s)
                throw new TypeError(
                  "Arguments to path.resolve must be strings"
                );
              s && ((r = s + "/" + r), (n = "/" === s.charAt(0)));
            }
            return (
              (r = e(
                i(r.split("/"), function (t) {
                  return !!t;
                }),
                !n
              ).join("/")),
              (n ? "/" : "") + r || "."
            );
          }),
            (r.normalize = function (t) {
              var n = r.isAbsolute(t),
                o = "/" === s(t, -1);
              return (
                (t = e(
                  i(t.split("/"), function (t) {
                    return !!t;
                  }),
                  !n
                ).join("/")),
                t || n || (t = "."),
                t && o && (t += "/"),
                (n ? "/" : "") + t
              );
            }),
            (r.isAbsolute = function (t) {
              return "/" === t.charAt(0);
            }),
            (r.join = function () {
              var t = Array.prototype.slice.call(arguments, 0);
              return r.normalize(
                i(t, function (t, e) {
                  if ("string" != typeof t)
                    throw new TypeError(
                      "Arguments to path.join must be strings"
                    );
                  return t;
                }).join("/")
              );
            }),
            (r.relative = function (t, e) {
              function i(t) {
                for (var e = 0; e < t.length && "" === t[e]; e++);
                for (var r = t.length - 1; r >= 0 && "" === t[r]; r--);
                return e > r ? [] : t.slice(e, r - e + 1);
              }
              (t = r.resolve(t).substr(1)), (e = r.resolve(e).substr(1));
              for (
                var n = i(t.split("/")),
                  o = i(e.split("/")),
                  s = Math.min(n.length, o.length),
                  a = s,
                  h = 0;
                s > h;
                h++
              )
                if (n[h] !== o[h]) {
                  a = h;
                  break;
                }
              for (var l = [], h = a; h < n.length; h++) l.push("..");
              return (l = l.concat(o.slice(a))), l.join("/");
            }),
            (r.sep = "/"),
            (r.delimiter = ":"),
            (r.dirname = function (t) {
              var e = o(t),
                r = e[0],
                i = e[1];
              return r || i
                ? (i && (i = i.substr(0, i.length - 1)), r + i)
                : ".";
            }),
            (r.basename = function (t, e) {
              var r = o(t)[2];
              return (
                e &&
                  r.substr(-1 * e.length) === e &&
                  (r = r.substr(0, r.length - e.length)),
                r
              );
            }),
            (r.extname = function (t) {
              return o(t)[3];
            });
          var s =
            "b" === "ab".substr(-1)
              ? function (t, e, r) {
                  return t.substr(e, r);
                }
              : function (t, e, r) {
                  return 0 > e && (e = t.length + e), t.substr(e, r);
                };
        }.call(this, t("_process")));
      },
      { _process: 3 },
    ],
    3: [
      function (t, e, r) {
        function i() {
          if (!a) {
            a = !0;
            for (var t, e = s.length; e; ) {
              (t = s), (s = []);
              for (var r = -1; ++r < e; ) t[r]();
              e = s.length;
            }
            a = !1;
          }
        }
        function n() {}
        var o = (e.exports = {}),
          s = [],
          a = !1;
        (o.nextTick = function (t) {
          s.push(t), a || setTimeout(i, 0);
        }),
          (o.title = "browser"),
          (o.browser = !0),
          (o.env = {}),
          (o.argv = []),
          (o.version = ""),
          (o.versions = {}),
          (o.on = n),
          (o.addListener = n),
          (o.once = n),
          (o.off = n),
          (o.removeListener = n),
          (o.removeAllListeners = n),
          (o.emit = n),
          (o.binding = function (t) {
            throw new Error("process.binding is not supported");
          }),
          (o.cwd = function () {
            return "/";
          }),
          (o.chdir = function (t) {
            throw new Error("process.chdir is not supported");
          }),
          (o.umask = function () {
            return 0;
          });
      },
      {},
    ],
    4: [
      function (t, e, r) {
        "use strict";
        function i(t, e, r) {
          (this.fn = t), (this.context = e), (this.once = r || !1);
        }
        function n() {}
        (n.prototype._events = void 0),
          (n.prototype.listeners = function (t, e) {
            var r = "~" + t,
              i = this._events && this._events[r];
            if (e) return !!i;
            if (!i) return [];
            if (this._events[r].fn) return [this._events[r].fn];
            for (
              var n = 0, o = this._events[r].length, s = new Array(o);
              o > n;
              n++
            )
              s[n] = this._events[r][n].fn;
            return s;
          }),
          (n.prototype.emit = function (t, e, r, i, n, o) {
            var s = "~" + t;
            if (!this._events || !this._events[s]) return !1;
            var a,
              h,
              l = this._events[s],
              u = arguments.length;
            if ("function" == typeof l.fn) {
              switch ((l.once && this.removeListener(t, l.fn, void 0, !0), u)) {
                case 1:
                  return l.fn.call(l.context), !0;
                case 2:
                  return l.fn.call(l.context, e), !0;
                case 3:
                  return l.fn.call(l.context, e, r), !0;
                case 4:
                  return l.fn.call(l.context, e, r, i), !0;
                case 5:
                  return l.fn.call(l.context, e, r, i, n), !0;
                case 6:
                  return l.fn.call(l.context, e, r, i, n, o), !0;
              }
              for (h = 1, a = new Array(u - 1); u > h; h++)
                a[h - 1] = arguments[h];
              l.fn.apply(l.context, a);
            } else {
              var c,
                p = l.length;
              for (h = 0; p > h; h++)
                switch (
                  (l[h].once && this.removeListener(t, l[h].fn, void 0, !0), u)
                ) {
                  case 1:
                    l[h].fn.call(l[h].context);
                    break;
                  case 2:
                    l[h].fn.call(l[h].context, e);
                    break;
                  case 3:
                    l[h].fn.call(l[h].context, e, r);
                    break;
                  default:
                    if (!a)
                      for (c = 1, a = new Array(u - 1); u > c; c++)
                        a[c - 1] = arguments[c];
                    l[h].fn.apply(l[h].context, a);
                }
            }
            return !0;
          }),
          (n.prototype.on = function (t, e, r) {
            var n = new i(e, r || this),
              o = "~" + t;
            return (
              this._events || (this._events = {}),
              this._events[o]
                ? this._events[o].fn
                  ? (this._events[o] = [this._events[o], n])
                  : this._events[o].push(n)
                : (this._events[o] = n),
              this
            );
          }),
          (n.prototype.once = function (t, e, r) {
            var n = new i(e, r || this, !0),
              o = "~" + t;
            return (
              this._events || (this._events = {}),
              this._events[o]
                ? this._events[o].fn
                  ? (this._events[o] = [this._events[o], n])
                  : this._events[o].push(n)
                : (this._events[o] = n),
              this
            );
          }),
          (n.prototype.removeListener = function (t, e, r, i) {
            var n = "~" + t;
            if (!this._events || !this._events[n]) return this;
            var o = this._events[n],
              s = [];
            if (e)
              if (o.fn)
                (o.fn !== e || (i && !o.once) || (r && o.context !== r)) &&
                  s.push(o);
              else
                for (var a = 0, h = o.length; h > a; a++)
                  (o[a].fn !== e ||
                    (i && !o[a].once) ||
                    (r && o[a].context !== r)) &&
                    s.push(o[a]);
            return (
              s.length
                ? (this._events[n] = 1 === s.length ? s[0] : s)
                : delete this._events[n],
              this
            );
          }),
          (n.prototype.removeAllListeners = function (t) {
            return this._events
              ? (t ? delete this._events["~" + t] : (this._events = {}), this)
              : this;
          }),
          (n.prototype.off = n.prototype.removeListener),
          (n.prototype.addListener = n.prototype.on),
          (n.prototype.setMaxListeners = function () {
            return this;
          }),
          (e.exports = n);
      },
      {},
    ],
    5: [
      function (t, e, r) {
        "use strict";
        function i(t) {
          if (null == t)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(t);
        }
        e.exports =
          Object.assign ||
          function (t, e) {
            for (var r, n, o = i(t), s = 1; s < arguments.length; s++) {
              (r = arguments[s]), (n = Object.keys(Object(r)));
              for (var a = 0; a < n.length; a++) o[n[a]] = r[n[a]];
            }
            return o;
          };
      },
      {},
    ],
    6: [
      function (t, e, r) {
        (function (t) {
          !(function () {
            function r(t) {
              var e = !1;
              return function () {
                if (e) throw new Error("Callback was already called.");
                (e = !0), t.apply(i, arguments);
              };
            }
            var i,
              n,
              o = {};
            (i = this),
              null != i && (n = i.async),
              (o.noConflict = function () {
                return (i.async = n), o;
              });
            var s = Object.prototype.toString,
              a =
                Array.isArray ||
                function (t) {
                  return "[object Array]" === s.call(t);
                },
              h = function (t, e) {
                if (t.forEach) return t.forEach(e);
                for (var r = 0; r < t.length; r += 1) e(t[r], r, t);
              },
              l = function (t, e) {
                if (t.map) return t.map(e);
                var r = [];
                return (
                  h(t, function (t, i, n) {
                    r.push(e(t, i, n));
                  }),
                  r
                );
              },
              u = function (t, e, r) {
                return t.reduce
                  ? t.reduce(e, r)
                  : (h(t, function (t, i, n) {
                      r = e(r, t, i, n);
                    }),
                    r);
              },
              c = function (t) {
                if (Object.keys) return Object.keys(t);
                var e = [];
                for (var r in t) t.hasOwnProperty(r) && e.push(r);
                return e;
              };
            "undefined" != typeof t && t.nextTick
              ? ((o.nextTick = t.nextTick),
                (o.setImmediate =
                  "undefined" != typeof setImmediate
                    ? function (t) {
                        setImmediate(t);
                      }
                    : o.nextTick))
              : "function" == typeof setImmediate
              ? ((o.nextTick = function (t) {
                  setImmediate(t);
                }),
                (o.setImmediate = o.nextTick))
              : ((o.nextTick = function (t) {
                  setTimeout(t, 0);
                }),
                (o.setImmediate = o.nextTick)),
              (o.each = function (t, e, i) {
                function n(e) {
                  e
                    ? (i(e), (i = function () {}))
                    : ((o += 1), o >= t.length && i());
                }
                if (((i = i || function () {}), !t.length)) return i();
                var o = 0;
                h(t, function (t) {
                  e(t, r(n));
                });
              }),
              (o.forEach = o.each),
              (o.eachSeries = function (t, e, r) {
                if (((r = r || function () {}), !t.length)) return r();
                var i = 0,
                  n = function () {
                    e(t[i], function (e) {
                      e
                        ? (r(e), (r = function () {}))
                        : ((i += 1), i >= t.length ? r() : n());
                    });
                  };
                n();
              }),
              (o.forEachSeries = o.eachSeries),
              (o.eachLimit = function (t, e, r, i) {
                var n = p(e);
                n.apply(null, [t, r, i]);
              }),
              (o.forEachLimit = o.eachLimit);
            var p = function (t) {
                return function (e, r, i) {
                  if (((i = i || function () {}), !e.length || 0 >= t))
                    return i();
                  var n = 0,
                    o = 0,
                    s = 0;
                  !(function a() {
                    if (n >= e.length) return i();
                    for (; t > s && o < e.length; )
                      (o += 1),
                        (s += 1),
                        r(e[o - 1], function (t) {
                          t
                            ? (i(t), (i = function () {}))
                            : ((n += 1), (s -= 1), n >= e.length ? i() : a());
                        });
                  })();
                };
              },
              d = function (t) {
                return function () {
                  var e = Array.prototype.slice.call(arguments);
                  return t.apply(null, [o.each].concat(e));
                };
              },
              f = function (t, e) {
                return function () {
                  var r = Array.prototype.slice.call(arguments);
                  return e.apply(null, [p(t)].concat(r));
                };
              },
              v = function (t) {
                return function () {
                  var e = Array.prototype.slice.call(arguments);
                  return t.apply(null, [o.eachSeries].concat(e));
                };
              },
              g = function (t, e, r, i) {
                if (
                  ((e = l(e, function (t, e) {
                    return { index: e, value: t };
                  })),
                  i)
                ) {
                  var n = [];
                  t(
                    e,
                    function (t, e) {
                      r(t.value, function (r, i) {
                        (n[t.index] = i), e(r);
                      });
                    },
                    function (t) {
                      i(t, n);
                    }
                  );
                } else
                  t(e, function (t, e) {
                    r(t.value, function (t) {
                      e(t);
                    });
                  });
              };
            (o.map = d(g)),
              (o.mapSeries = v(g)),
              (o.mapLimit = function (t, e, r, i) {
                return m(e)(t, r, i);
              });
            var m = function (t) {
              return f(t, g);
            };
            (o.reduce = function (t, e, r, i) {
              o.eachSeries(
                t,
                function (t, i) {
                  r(e, t, function (t, r) {
                    (e = r), i(t);
                  });
                },
                function (t) {
                  i(t, e);
                }
              );
            }),
              (o.inject = o.reduce),
              (o.foldl = o.reduce),
              (o.reduceRight = function (t, e, r, i) {
                var n = l(t, function (t) {
                  return t;
                }).reverse();
                o.reduce(n, e, r, i);
              }),
              (o.foldr = o.reduceRight);
            var y = function (t, e, r, i) {
              var n = [];
              (e = l(e, function (t, e) {
                return { index: e, value: t };
              })),
                t(
                  e,
                  function (t, e) {
                    r(t.value, function (r) {
                      r && n.push(t), e();
                    });
                  },
                  function (t) {
                    i(
                      l(
                        n.sort(function (t, e) {
                          return t.index - e.index;
                        }),
                        function (t) {
                          return t.value;
                        }
                      )
                    );
                  }
                );
            };
            (o.filter = d(y)),
              (o.filterSeries = v(y)),
              (o.select = o.filter),
              (o.selectSeries = o.filterSeries);
            var x = function (t, e, r, i) {
              var n = [];
              (e = l(e, function (t, e) {
                return { index: e, value: t };
              })),
                t(
                  e,
                  function (t, e) {
                    r(t.value, function (r) {
                      r || n.push(t), e();
                    });
                  },
                  function (t) {
                    i(
                      l(
                        n.sort(function (t, e) {
                          return t.index - e.index;
                        }),
                        function (t) {
                          return t.value;
                        }
                      )
                    );
                  }
                );
            };
            (o.reject = d(x)), (o.rejectSeries = v(x));
            var b = function (t, e, r, i) {
              t(
                e,
                function (t, e) {
                  r(t, function (r) {
                    r ? (i(t), (i = function () {})) : e();
                  });
                },
                function (t) {
                  i();
                }
              );
            };
            (o.detect = d(b)),
              (o.detectSeries = v(b)),
              (o.some = function (t, e, r) {
                o.each(
                  t,
                  function (t, i) {
                    e(t, function (t) {
                      t && (r(!0), (r = function () {})), i();
                    });
                  },
                  function (t) {
                    r(!1);
                  }
                );
              }),
              (o.any = o.some),
              (o.every = function (t, e, r) {
                o.each(
                  t,
                  function (t, i) {
                    e(t, function (t) {
                      t || (r(!1), (r = function () {})), i();
                    });
                  },
                  function (t) {
                    r(!0);
                  }
                );
              }),
              (o.all = o.every),
              (o.sortBy = function (t, e, r) {
                o.map(
                  t,
                  function (t, r) {
                    e(t, function (e, i) {
                      e ? r(e) : r(null, { value: t, criteria: i });
                    });
                  },
                  function (t, e) {
                    if (t) return r(t);
                    var i = function (t, e) {
                      var r = t.criteria,
                        i = e.criteria;
                      return i > r ? -1 : r > i ? 1 : 0;
                    };
                    r(
                      null,
                      l(e.sort(i), function (t) {
                        return t.value;
                      })
                    );
                  }
                );
              }),
              (o.auto = function (t, e) {
                e = e || function () {};
                var r = c(t),
                  i = r.length;
                if (!i) return e();
                var n = {},
                  s = [],
                  l = function (t) {
                    s.unshift(t);
                  },
                  p = function (t) {
                    for (var e = 0; e < s.length; e += 1)
                      if (s[e] === t) return void s.splice(e, 1);
                  },
                  d = function () {
                    i--,
                      h(s.slice(0), function (t) {
                        t();
                      });
                  };
                l(function () {
                  if (!i) {
                    var t = e;
                    (e = function () {}), t(null, n);
                  }
                }),
                  h(r, function (r) {
                    var i = a(t[r]) ? t[r] : [t[r]],
                      s = function (t) {
                        var i = Array.prototype.slice.call(arguments, 1);
                        if ((i.length <= 1 && (i = i[0]), t)) {
                          var s = {};
                          h(c(n), function (t) {
                            s[t] = n[t];
                          }),
                            (s[r] = i),
                            e(t, s),
                            (e = function () {});
                        } else (n[r] = i), o.setImmediate(d);
                      },
                      f = i.slice(0, Math.abs(i.length - 1)) || [],
                      v = function () {
                        return (
                          u(
                            f,
                            function (t, e) {
                              return t && n.hasOwnProperty(e);
                            },
                            !0
                          ) && !n.hasOwnProperty(r)
                        );
                      };
                    if (v()) i[i.length - 1](s, n);
                    else {
                      var g = function () {
                        v() && (p(g), i[i.length - 1](s, n));
                      };
                      l(g);
                    }
                  });
              }),
              (o.retry = function (t, e, r) {
                var i = 5,
                  n = [];
                "function" == typeof t && ((r = e), (e = t), (t = i)),
                  (t = parseInt(t, 10) || i);
                var s = function (i, s) {
                  for (
                    var a = function (t, e) {
                      return function (r) {
                        t(function (t, i) {
                          r(!t || e, { err: t, result: i });
                        }, s);
                      };
                    };
                    t;

                  )
                    n.push(a(e, !(t -= 1)));
                  o.series(n, function (t, e) {
                    (e = e[e.length - 1]), (i || r)(e.err, e.result);
                  });
                };
                return r ? s() : s;
              }),
              (o.waterfall = function (t, e) {
                if (((e = e || function () {}), !a(t))) {
                  var r = new Error(
                    "First argument to waterfall must be an array of functions"
                  );
                  return e(r);
                }
                if (!t.length) return e();
                var i = function (t) {
                  return function (r) {
                    if (r) e.apply(null, arguments), (e = function () {});
                    else {
                      var n = Array.prototype.slice.call(arguments, 1),
                        s = t.next();
                      n.push(s ? i(s) : e),
                        o.setImmediate(function () {
                          t.apply(null, n);
                        });
                    }
                  };
                };
                i(o.iterator(t))();
              });
            var _ = function (t, e, r) {
              if (((r = r || function () {}), a(e)))
                t.map(
                  e,
                  function (t, e) {
                    t &&
                      t(function (t) {
                        var r = Array.prototype.slice.call(arguments, 1);
                        r.length <= 1 && (r = r[0]), e.call(null, t, r);
                      });
                  },
                  r
                );
              else {
                var i = {};
                t.each(
                  c(e),
                  function (t, r) {
                    e[t](function (e) {
                      var n = Array.prototype.slice.call(arguments, 1);
                      n.length <= 1 && (n = n[0]), (i[t] = n), r(e);
                    });
                  },
                  function (t) {
                    r(t, i);
                  }
                );
              }
            };
            (o.parallel = function (t, e) {
              _({ map: o.map, each: o.each }, t, e);
            }),
              (o.parallelLimit = function (t, e, r) {
                _({ map: m(e), each: p(e) }, t, r);
              }),
              (o.series = function (t, e) {
                if (((e = e || function () {}), a(t)))
                  o.mapSeries(
                    t,
                    function (t, e) {
                      t &&
                        t(function (t) {
                          var r = Array.prototype.slice.call(arguments, 1);
                          r.length <= 1 && (r = r[0]), e.call(null, t, r);
                        });
                    },
                    e
                  );
                else {
                  var r = {};
                  o.eachSeries(
                    c(t),
                    function (e, i) {
                      t[e](function (t) {
                        var n = Array.prototype.slice.call(arguments, 1);
                        n.length <= 1 && (n = n[0]), (r[e] = n), i(t);
                      });
                    },
                    function (t) {
                      e(t, r);
                    }
                  );
                }
              }),
              (o.iterator = function (t) {
                var e = function (r) {
                  var i = function () {
                    return t.length && t[r].apply(null, arguments), i.next();
                  };
                  return (
                    (i.next = function () {
                      return r < t.length - 1 ? e(r + 1) : null;
                    }),
                    i
                  );
                };
                return e(0);
              }),
              (o.apply = function (t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return function () {
                  return t.apply(
                    null,
                    e.concat(Array.prototype.slice.call(arguments))
                  );
                };
              });
            var T = function (t, e, r, i) {
              var n = [];
              t(
                e,
                function (t, e) {
                  r(t, function (t, r) {
                    (n = n.concat(r || [])), e(t);
                  });
                },
                function (t) {
                  i(t, n);
                }
              );
            };
            (o.concat = d(T)),
              (o.concatSeries = v(T)),
              (o.whilst = function (t, e, r) {
                t()
                  ? e(function (i) {
                      return i ? r(i) : void o.whilst(t, e, r);
                    })
                  : r();
              }),
              (o.doWhilst = function (t, e, r) {
                t(function (i) {
                  if (i) return r(i);
                  var n = Array.prototype.slice.call(arguments, 1);
                  e.apply(null, n) ? o.doWhilst(t, e, r) : r();
                });
              }),
              (o.until = function (t, e, r) {
                t()
                  ? r()
                  : e(function (i) {
                      return i ? r(i) : void o.until(t, e, r);
                    });
              }),
              (o.doUntil = function (t, e, r) {
                t(function (i) {
                  if (i) return r(i);
                  var n = Array.prototype.slice.call(arguments, 1);
                  e.apply(null, n) ? r() : o.doUntil(t, e, r);
                });
              }),
              (o.queue = function (t, e) {
                function i(t, e, r, i) {
                  return (
                    t.started || (t.started = !0),
                    a(e) || (e = [e]),
                    0 == e.length
                      ? o.setImmediate(function () {
                          t.drain && t.drain();
                        })
                      : void h(e, function (e) {
                          var n = {
                            data: e,
                            callback: "function" == typeof i ? i : null,
                          };
                          r ? t.tasks.unshift(n) : t.tasks.push(n),
                            t.saturated &&
                              t.tasks.length === t.concurrency &&
                              t.saturated(),
                            o.setImmediate(t.process);
                        })
                  );
                }
                void 0 === e && (e = 1);
                var n = 0,
                  s = {
                    tasks: [],
                    concurrency: e,
                    saturated: null,
                    empty: null,
                    drain: null,
                    started: !1,
                    paused: !1,
                    push: function (t, e) {
                      i(s, t, !1, e);
                    },
                    kill: function () {
                      (s.drain = null), (s.tasks = []);
                    },
                    unshift: function (t, e) {
                      i(s, t, !0, e);
                    },
                    process: function () {
                      if (!s.paused && n < s.concurrency && s.tasks.length) {
                        var e = s.tasks.shift();
                        s.empty && 0 === s.tasks.length && s.empty(), (n += 1);
                        var i = function () {
                            (n -= 1),
                              e.callback && e.callback.apply(e, arguments),
                              s.drain && s.tasks.length + n === 0 && s.drain(),
                              s.process();
                          },
                          o = r(i);
                        t(e.data, o);
                      }
                    },
                    length: function () {
                      return s.tasks.length;
                    },
                    running: function () {
                      return n;
                    },
                    idle: function () {
                      return s.tasks.length + n === 0;
                    },
                    pause: function () {
                      s.paused !== !0 && ((s.paused = !0), s.process());
                    },
                    resume: function () {
                      s.paused !== !1 && ((s.paused = !1), s.process());
                    },
                  };
                return s;
              }),
              (o.priorityQueue = function (t, e) {
                function r(t, e) {
                  return t.priority - e.priority;
                }
                function i(t, e, r) {
                  for (var i = -1, n = t.length - 1; n > i; ) {
                    var o = i + ((n - i + 1) >>> 1);
                    r(e, t[o]) >= 0 ? (i = o) : (n = o - 1);
                  }
                  return i;
                }
                function n(t, e, n, s) {
                  return (
                    t.started || (t.started = !0),
                    a(e) || (e = [e]),
                    0 == e.length
                      ? o.setImmediate(function () {
                          t.drain && t.drain();
                        })
                      : void h(e, function (e) {
                          var a = {
                            data: e,
                            priority: n,
                            callback: "function" == typeof s ? s : null,
                          };
                          t.tasks.splice(i(t.tasks, a, r) + 1, 0, a),
                            t.saturated &&
                              t.tasks.length === t.concurrency &&
                              t.saturated(),
                            o.setImmediate(t.process);
                        })
                  );
                }
                var s = o.queue(t, e);
                return (
                  (s.push = function (t, e, r) {
                    n(s, t, e, r);
                  }),
                  delete s.unshift,
                  s
                );
              }),
              (o.cargo = function (t, e) {
                var r = !1,
                  i = [],
                  n = {
                    tasks: i,
                    payload: e,
                    saturated: null,
                    empty: null,
                    drain: null,
                    drained: !0,
                    push: function (t, r) {
                      a(t) || (t = [t]),
                        h(t, function (t) {
                          i.push({
                            data: t,
                            callback: "function" == typeof r ? r : null,
                          }),
                            (n.drained = !1),
                            n.saturated && i.length === e && n.saturated();
                        }),
                        o.setImmediate(n.process);
                    },
                    process: function s() {
                      if (!r) {
                        if (0 === i.length)
                          return (
                            n.drain && !n.drained && n.drain(),
                            void (n.drained = !0)
                          );
                        var o =
                            "number" == typeof e
                              ? i.splice(0, e)
                              : i.splice(0, i.length),
                          a = l(o, function (t) {
                            return t.data;
                          });
                        n.empty && n.empty(),
                          (r = !0),
                          t(a, function () {
                            r = !1;
                            var t = arguments;
                            h(o, function (e) {
                              e.callback && e.callback.apply(null, t);
                            }),
                              s();
                          });
                      }
                    },
                    length: function () {
                      return i.length;
                    },
                    running: function () {
                      return r;
                    },
                  };
                return n;
              });
            var E = function (t) {
              return function (e) {
                var r = Array.prototype.slice.call(arguments, 1);
                e.apply(
                  null,
                  r.concat([
                    function (e) {
                      var r = Array.prototype.slice.call(arguments, 1);
                      "undefined" != typeof console &&
                        (e
                          ? console.error && console.error(e)
                          : console[t] &&
                            h(r, function (e) {
                              console[t](e);
                            }));
                    },
                  ])
                );
              };
            };
            (o.log = E("log")),
              (o.dir = E("dir")),
              (o.memoize = function (t, e) {
                var r = {},
                  i = {};
                e =
                  e ||
                  function (t) {
                    return t;
                  };
                var n = function () {
                  var n = Array.prototype.slice.call(arguments),
                    s = n.pop(),
                    a = e.apply(null, n);
                  a in r
                    ? o.nextTick(function () {
                        s.apply(null, r[a]);
                      })
                    : a in i
                    ? i[a].push(s)
                    : ((i[a] = [s]),
                      t.apply(
                        null,
                        n.concat([
                          function () {
                            r[a] = arguments;
                            var t = i[a];
                            delete i[a];
                            for (var e = 0, n = t.length; n > e; e++)
                              t[e].apply(null, arguments);
                          },
                        ])
                      ));
                };
                return (n.memo = r), (n.unmemoized = t), n;
              }),
              (o.unmemoize = function (t) {
                return function () {
                  return (t.unmemoized || t).apply(null, arguments);
                };
              }),
              (o.times = function (t, e, r) {
                for (var i = [], n = 0; t > n; n++) i.push(n);
                return o.map(i, e, r);
              }),
              (o.timesSeries = function (t, e, r) {
                for (var i = [], n = 0; t > n; n++) i.push(n);
                return o.mapSeries(i, e, r);
              }),
              (o.seq = function () {
                var t = arguments;
                return function () {
                  var e = this,
                    r = Array.prototype.slice.call(arguments),
                    i = r.pop();
                  o.reduce(
                    t,
                    r,
                    function (t, r, i) {
                      r.apply(
                        e,
                        t.concat([
                          function () {
                            var t = arguments[0],
                              e = Array.prototype.slice.call(arguments, 1);
                            i(t, e);
                          },
                        ])
                      );
                    },
                    function (t, r) {
                      i.apply(e, [t].concat(r));
                    }
                  );
                };
              }),
              (o.compose = function () {
                return o.seq.apply(
                  null,
                  Array.prototype.reverse.call(arguments)
                );
              });
            var S = function (t, e) {
              var r = function () {
                var r = this,
                  i = Array.prototype.slice.call(arguments),
                  n = i.pop();
                return t(
                  e,
                  function (t, e) {
                    t.apply(r, i.concat([e]));
                  },
                  n
                );
              };
              if (arguments.length > 2) {
                var i = Array.prototype.slice.call(arguments, 2);
                return r.apply(this, i);
              }
              return r;
            };
            (o.applyEach = d(S)),
              (o.applyEachSeries = v(S)),
              (o.forever = function (t, e) {
                function r(i) {
                  if (i) {
                    if (e) return e(i);
                    throw i;
                  }
                  t(r);
                }
                r();
              }),
              "undefined" != typeof e && e.exports
                ? (e.exports = o)
                : "undefined" != typeof define && define.amd
                ? define([], function () {
                    return o;
                  })
                : (i.async = o);
          })();
        }.call(this, t("_process")));
      },
      { _process: 3 },
    ],
    7: [
      function (t, e, r) {
        arguments[4][4][0].apply(r, arguments);
      },
      { dup: 4 },
    ],
    8: [
      function (t, e, r) {
        function i(t, e) {
          s.call(this),
            (e = e || 10),
            (this.baseUrl = t || ""),
            (this.progress = 0),
            (this.loading = !1),
            (this._progressChunk = 0),
            (this._beforeMiddleware = []),
            (this._afterMiddleware = []),
            (this._boundLoadResource = this._loadResource.bind(this)),
            (this._boundOnLoad = this._onLoad.bind(this)),
            (this._buffer = []),
            (this._numToLoad = 0),
            (this._queue = n.queue(this._boundLoadResource, e)),
            (this.resources = {});
        }
        var n = t("async"),
          o = t("./Resource"),
          s = t("eventemitter3");
        (i.prototype = Object.create(s.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.add = i.prototype.enqueue =
            function (t, e, r, i) {
              if (Array.isArray(t)) {
                for (var n = 0; n < t.length; ++n) this.add(t[n]);
                return this;
              }
              if (
                ("object" == typeof t &&
                  ((i = e || t.callback || t.onComplete),
                  (r = t),
                  (e = t.url),
                  (t = t.name || t.key || t.url)),
                "string" != typeof e && ((i = r), (r = e), (e = t)),
                "string" != typeof e)
              )
                throw new Error("No url passed to add resource to loader.");
              if (
                ("function" == typeof r && ((i = r), (r = null)),
                this.resources[t])
              )
                throw new Error(
                  'Resource with name "' + t + '" already exists.'
                );
              return (
                0 !== e.indexOf("data:") && (e = this.baseUrl + e),
                (this.resources[t] = new o(t, e, r)),
                "function" == typeof i &&
                  this.resources[t].once("afterMiddleware", i),
                this._numToLoad++,
                this._queue.started
                  ? (this._queue.push(this.resources[t]),
                    (this._progressChunk =
                      (100 - this.progress) /
                      (this._queue.length() + this._queue.running())))
                  : (this._buffer.push(this.resources[t]),
                    (this._progressChunk = 100 / this._buffer.length)),
                this
              );
            }),
          (i.prototype.before = i.prototype.pre =
            function (t) {
              return this._beforeMiddleware.push(t), this;
            }),
          (i.prototype.after = i.prototype.use =
            function (t) {
              return this._afterMiddleware.push(t), this;
            }),
          (i.prototype.reset = function () {
            (this._buffer.length = 0),
              this._queue.kill(),
              (this._queue.started = !1),
              (this.progress = 0),
              (this._progressChunk = 0),
              (this.loading = !1);
          }),
          (i.prototype.load = function (t) {
            if (
              ("function" == typeof t && this.once("complete", t),
              this._queue.started)
            )
              return this;
            this.emit("start", this);
            for (var e = 0; e < this._buffer.length; ++e)
              this._queue.push(this._buffer[e]);
            return (this._buffer.length = 0), this;
          }),
          (i.prototype._loadResource = function (t, e) {
            var r = this;
            (t._dequeue = e),
              this._runMiddleware(t, this._beforeMiddleware, function () {
                t.load(r._boundOnLoad);
              });
          }),
          (i.prototype._onComplete = function () {
            this.emit("complete", this, this.resources);
          }),
          (i.prototype._onLoad = function (t) {
            (this.progress += this._progressChunk),
              this.emit("progress", this, t),
              t.error
                ? this.emit("error", t.error, this, t)
                : this.emit("load", this, t),
              this._runMiddleware(t, this._afterMiddleware, function () {
                t.emit("afterMiddleware", t),
                  this._numToLoad--,
                  0 === this._numToLoad && this._onComplete();
              }),
              t._dequeue();
          }),
          (i.prototype._runMiddleware = function (t, e, r) {
            var i = this;
            n.eachSeries(
              e,
              function (e, r) {
                e.call(i, t, r);
              },
              r.bind(this, t)
            );
          }),
          (i.LOAD_TYPE = o.LOAD_TYPE),
          (i.XHR_READY_STATE = o.XHR_READY_STATE),
          (i.XHR_RESPONSE_TYPE = o.XHR_RESPONSE_TYPE);
      },
      { "./Resource": 9, async: 6, eventemitter3: 7 },
    ],
    9: [
      function (t, e, r) {
        function i(t, e, r) {
          if (
            (o.call(this),
            (r = r || {}),
            "string" != typeof t || "string" != typeof e)
          )
            throw new Error(
              "Both name and url are required for constructing a resource."
            );
          (this.name = t),
            (this.url = e),
            (this.data = null),
            (this.crossOrigin = r.crossOrigin),
            (this.loadType = r.loadType || this._determineLoadType()),
            (this.xhrType = r.xhrType),
            (this.error = null),
            (this.xhr = null),
            (this.isJson = !1),
            (this.isXml = !1),
            (this.isImage = !1),
            (this.isAudio = !1),
            (this.isVideo = !1),
            (this._dequeue = null),
            (this._boundComplete = this.complete.bind(this)),
            (this._boundOnError = this._onError.bind(this)),
            (this._boundOnProgress = this._onProgress.bind(this)),
            (this._boundXhrOnError = this._xhrOnError.bind(this)),
            (this._boundXhrOnAbort = this._xhrOnAbort.bind(this)),
            (this._boundXhrOnLoad = this._xhrOnLoad.bind(this)),
            (this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this));
        }
        function n(t) {
          return t.toString().replace("object ", "");
        }
        var o = t("eventemitter3"),
          s = !(
            !window.XDomainRequest || "withCredentials" in new XMLHttpRequest()
          );
        (i.prototype = Object.create(o.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.complete = function () {
            this.data &&
              this.data.removeEventListener &&
              (this.data.removeEventListener("error", this._boundOnError),
              this.data.removeEventListener("load", this._boundComplete),
              this.data.removeEventListener("progress", this._boundOnProgress),
              this.data.removeEventListener(
                "canplaythrough",
                this._boundComplete
              )),
              this.xhr &&
                (this.xhr.removeEventListener
                  ? (this.xhr.removeEventListener(
                      "error",
                      this._boundXhrOnError
                    ),
                    this.xhr.removeEventListener(
                      "abort",
                      this._boundXhrOnAbort
                    ),
                    this.xhr.removeEventListener(
                      "progress",
                      this._boundOnProgress
                    ),
                    this.xhr.removeEventListener("load", this._boundXhrOnLoad))
                  : ((this.xhr.onerror = null),
                    (this.xhr.ontimeout = null),
                    (this.xhr.onprogress = null),
                    (this.xhr.onload = null))),
              this.emit("complete", this);
          }),
          (i.prototype.load = function (t) {
            switch (
              (this.emit("start", this),
              t && this.once("complete", t),
              "string" != typeof this.crossOrigin &&
                (this.crossOrigin = this._determineCrossOrigin()),
              this.loadType)
            ) {
              case i.LOAD_TYPE.IMAGE:
                this._loadImage();
                break;
              case i.LOAD_TYPE.AUDIO:
                this._loadElement("audio");
                break;
              case i.LOAD_TYPE.VIDEO:
                this._loadElement("video");
                break;
              case i.LOAD_TYPE.XHR:
              default:
                s ? this._loadXdr() : this._loadXhr();
            }
          }),
          (i.prototype._loadImage = function () {
            (this.data = new Image()),
              this.crossOrigin && (this.data.crossOrigin = ""),
              (this.data.src = this.url),
              (this.isImage = !0),
              this.data.addEventListener("error", this._boundOnError, !1),
              this.data.addEventListener("load", this._boundComplete, !1),
              this.data.addEventListener("progress", this._boundOnProgress, !1);
          }),
          (i.prototype._loadElement = function (t) {
            if (
              ((this.data = document.createElement(t)), Array.isArray(this.url))
            )
              for (var e = 0; e < this.url.length; ++e)
                this.data.appendChild(this._createSource(t, this.url[e]));
            else this.data.appendChild(this._createSource(t, this.url));
            (this["is" + t[0].toUpperCase() + t.substring(1)] = !0),
              this.data.addEventListener("error", this._boundOnError, !1),
              this.data.addEventListener("load", this._boundComplete, !1),
              this.data.addEventListener("progress", this._boundOnProgress, !1),
              this.data.addEventListener(
                "canplaythrough",
                this._boundComplete,
                !1
              ),
              this.data.load();
          }),
          (i.prototype._loadXhr = function () {
            "string" != typeof this.xhrType &&
              (this.xhrType = this._determineXhrType());
            var t = (this.xhr = new XMLHttpRequest());
            t.open("GET", this.url, !0),
              (t.responseType =
                this.xhrType === i.XHR_RESPONSE_TYPE.JSON ||
                this.xhrType === i.XHR_RESPONSE_TYPE.DOCUMENT
                  ? i.XHR_RESPONSE_TYPE.TEXT
                  : this.xhrType),
              t.addEventListener("error", this._boundXhrOnError, !1),
              t.addEventListener("abort", this._boundXhrOnAbort, !1),
              t.addEventListener("progress", this._boundOnProgress, !1),
              t.addEventListener("load", this._boundXhrOnLoad, !1),
              t.send();
          }),
          (i.prototype._loadXdr = function () {
            "string" != typeof this.xhrType &&
              (this.xhrType = this._determineXhrType());
            var t = (this.xhr = new XDomainRequest());
            (t.timeout = 5e3),
              (t.onerror = this._boundXhrOnError),
              (t.ontimeout = this._boundXdrOnTimeout),
              (t.onprogress = this._boundOnProgress),
              (t.onload = this._boundXhrOnLoad),
              t.open("GET", this.url, !0),
              setTimeout(function () {
                t.send();
              }, 0);
          }),
          (i.prototype._createSource = function (t, e, r) {
            r || (r = t + "/" + e.substr(e.lastIndexOf(".") + 1));
            var i = document.createElement("source");
            return (i.src = e), (i.type = r), i;
          }),
          (i.prototype._onError = function (t) {
            (this.error = new Error(
              "Failed to load element using " + t.target.nodeName
            )),
              this.complete();
          }),
          (i.prototype._onProgress = function (t) {
            t.lengthComputable &&
              this.emit("progress", this, t.loaded / t.total);
          }),
          (i.prototype._xhrOnError = function () {
            (this.error = new Error(
              n(this.xhr) +
                " Request failed. Status: " +
                this.xhr.status +
                ', text: "' +
                this.xhr.statusText +
                '"'
            )),
              this.complete();
          }),
          (i.prototype._xhrOnAbort = function () {
            (this.error = new Error(
              n(this.xhr) + " Request was aborted by the user."
            )),
              this.complete();
          }),
          (i.prototype._xdrOnTimeout = function () {
            (this.error = new Error(n(this.xhr) + " Request timed out.")),
              this.complete();
          }),
          (i.prototype._xhrOnLoad = function () {
            var t = this.xhr;
            if (200 === t.status)
              if (this.xhrType === i.XHR_RESPONSE_TYPE.TEXT)
                this.data = t.responseText;
              else if (this.xhrType === i.XHR_RESPONSE_TYPE.JSON)
                try {
                  (this.data = JSON.parse(t.responseText)), (this.isJson = !0);
                } catch (e) {
                  this.error = new Error(
                    "Error trying to parse loaded json:",
                    e
                  );
                }
              else if (this.xhrType === i.XHR_RESPONSE_TYPE.DOCUMENT)
                try {
                  if (window.DOMParser) {
                    var r = new DOMParser();
                    this.data = r.parseFromString(t.responseText, "text/xml");
                  } else {
                    var n = document.createElement("div");
                    (n.innerHTML = t.responseText), (this.data = n);
                  }
                  this.isXml = !0;
                } catch (e) {
                  this.error = new Error(
                    "Error trying to parse loaded xml:",
                    e
                  );
                }
              else this.data = t.response || t.responseText;
            else
              this.error = new Error(
                "[" + t.status + "]" + t.statusText + ":" + t.responseURL
              );
            this.complete();
          }),
          (i.prototype._determineCrossOrigin = function () {
            if (0 === this.url.indexOf("data:")) return "";
            var t = window.location,
              e = document.createElement("a");
            return (
              (e.href = this.url),
              e.hostname !== t.hostname ||
              e.port !== t.port ||
              e.protocol !== t.protocol
                ? "anonymous"
                : ""
            );
          }),
          (i.prototype._determineXhrType = function () {
            var t = this.url.substr(this.url.lastIndexOf(".") + 1);
            switch (t) {
              case "xhtml":
              case "html":
              case "htm":
              case "xml":
              case "tmx":
              case "tsx":
              case "svg":
                return i.XHR_RESPONSE_TYPE.DOCUMENT;
              case "gif":
              case "png":
              case "bmp":
              case "jpg":
              case "jpeg":
              case "tif":
              case "tiff":
              case "webp":
                return i.XHR_RESPONSE_TYPE.BLOB;
              case "json":
                return i.XHR_RESPONSE_TYPE.JSON;
              case "text":
              case "txt":
              default:
                return i.XHR_RESPONSE_TYPE.TEXT;
            }
          }),
          (i.prototype._determineLoadType = function () {
            var t = this.url.substr(this.url.lastIndexOf(".") + 1);
            switch (t) {
              case "gif":
              case "png":
              case "bmp":
              case "jpg":
              case "jpeg":
              case "tif":
              case "tiff":
              case "webp":
                return i.LOAD_TYPE.IMAGE;
              default:
                return i.LOAD_TYPE.XHR;
            }
          }),
          (i.prototype._getMimeFromXhrType = function (t) {
            switch (t) {
              case i.XHR_RESPONSE_TYPE.BUFFER:
                return "application/octet-binary";
              case i.XHR_RESPONSE_TYPE.BLOB:
                return "application/blob";
              case i.XHR_RESPONSE_TYPE.DOCUMENT:
                return "application/xml";
              case i.XHR_RESPONSE_TYPE.JSON:
                return "application/json";
              case i.XHR_RESPONSE_TYPE.DEFAULT:
              case i.XHR_RESPONSE_TYPE.TEXT:
              default:
                return "text/plain";
            }
          }),
          (i.LOAD_TYPE = { XHR: 1, IMAGE: 2, AUDIO: 3, VIDEO: 4 }),
          (i.XHR_READY_STATE = {
            UNSENT: 0,
            OPENED: 1,
            HEADERS_RECEIVED: 2,
            LOADING: 3,
            DONE: 4,
          }),
          (i.XHR_RESPONSE_TYPE = {
            DEFAULT: "text",
            BUFFER: "arraybuffer",
            BLOB: "blob",
            DOCUMENT: "document",
            JSON: "json",
            TEXT: "text",
          });
      },
      { eventemitter3: 7 },
    ],
    10: [
      function (t, e, r) {
        e.exports = {
          _keyStr:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          encodeBinary: function (t) {
            for (
              var e, r = "", i = new Array(4), n = 0, o = 0, s = 0;
              n < t.length;

            ) {
              for (e = new Array(3), o = 0; o < e.length; o++)
                e[o] = n < t.length ? 255 & t.charCodeAt(n++) : 0;
              switch (
                ((i[0] = e[0] >> 2),
                (i[1] = ((3 & e[0]) << 4) | (e[1] >> 4)),
                (i[2] = ((15 & e[1]) << 2) | (e[2] >> 6)),
                (i[3] = 63 & e[2]),
                (s = n - (t.length - 1)))
              ) {
                case 2:
                  (i[3] = 64), (i[2] = 64);
                  break;
                case 1:
                  i[3] = 64;
              }
              for (o = 0; o < i.length; o++) r += this._keyStr.charAt(i[o]);
            }
            return r;
          },
        };
      },
      {},
    ],
    11: [
      function (t, e, r) {
        (e.exports = t("./Loader")),
          (e.exports.Resource = t("./Resource")),
          (e.exports.middleware = {
            caching: { memory: t("./middlewares/caching/memory") },
            parsing: { blob: t("./middlewares/parsing/blob") },
          });
      },
      {
        "./Loader": 8,
        "./Resource": 9,
        "./middlewares/caching/memory": 12,
        "./middlewares/parsing/blob": 13,
      },
    ],
    12: [
      function (t, e, r) {
        var i = {};
        e.exports = function () {
          return function (t, e) {
            i[t.url]
              ? ((t.data = i[t.url]), t.complete())
              : (t.once("complete", function () {
                  i[this.url] = this.data;
                }),
                e());
          };
        };
      },
      {},
    ],
    13: [
      function (t, e, r) {
        var i = t("../../Resource"),
          n = t("../../b64");
        (window.URL = window.URL || window.webkitURL),
          (e.exports = function () {
            return function (t, e) {
              if (!t.data) return e();
              if (t.xhr && t.xhrType === i.XHR_RESPONSE_TYPE.BLOB)
                if (window.Blob && "string" != typeof t.data) {
                  if (0 === t.data.type.indexOf("image")) {
                    var r = URL.createObjectURL(t.data);
                    (t.blob = t.data),
                      (t.data = new Image()),
                      (t.data.src = r),
                      (t.isImage = !0),
                      (t.data.onload = function () {
                        URL.revokeObjectURL(r), (t.data.onload = null), e();
                      });
                  }
                } else {
                  var o = t.xhr.getResponseHeader("content-type");
                  o &&
                    0 === o.indexOf("image") &&
                    ((t.data = new Image()),
                    (t.data.src =
                      "data:" +
                      o +
                      ";base64," +
                      n.encodeBinary(t.xhr.responseText)),
                    (t.isImage = !0),
                    (t.data.onload = function () {
                      (t.data.onload = null), e();
                    }));
                }
              else e();
            };
          });
      },
      { "../../Resource": 9, "../../b64": 10 },
    ],
    14: [
      function (t, e, r) {
        e.exports = {
          name: "pixi.js",
          version: "3.0.0",
          description:
            "Pixi.js is a fast lightweight 2D library that works across all devices.",
          author: "Mat Groves",
          contributors: [
            "Chad Engler <chad@pantherdev.com>",
            "Richard Davey <rdavey@gmail.com>",
          ],
          main: "./src/index.js",
          homepage: "http://goodboydigital.com/",
          bugs: "https://github.com/GoodBoyDigital/pixi.js/issues",
          license: "MIT",
          repository: {
            type: "git",
            url: "https://github.com/GoodBoyDigital/pixi.js.git",
          },
          scripts: {
            test: "gulp && testem ci",
            docs: "jsdoc -c ./gulp/util/jsdoc.conf.json -R README.md",
          },
          dependencies: {
            async: "^0.9.0",
            brfs: "^1.4.0",
            eventemitter3: "^1.0.1",
            "object-assign": "^2.0.0",
            "resource-loader": "^1.4.2",
          },
          devDependencies: {
            browserify: "^9.0.8",
            chai: "^2.2.0",
            del: "^1.1.1",
            gulp: "^3.8.11",
            "gulp-cached": "^1.0.4",
            "gulp-concat": "^2.5.2",
            "gulp-debug": "^2.0.1",
            "gulp-jshint": "^1.10.0",
            "gulp-mirror": "^0.4.0",
            "gulp-plumber": "^1.0.0",
            "gulp-rename": "^1.2.2",
            "gulp-sourcemaps": "^1.5.2",
            "gulp-uglify": "^1.2.0",
            "gulp-util": "^3.0.4",
            "ink-docstrap": "git+https://github.com/Pilatch/docstrap.git",
            jsdoc: "^3.3.0-beta3",
            "jshint-summary": "^0.4.0",
            minimist: "^1.1.1",
            mocha: "^2.2.4",
            "require-dir": "^0.3.0",
            "run-sequence": "^1.0.2",
            testem: "^0.8.2",
            "vinyl-buffer": "^1.0.0",
            "vinyl-source-stream": "^1.1.0",
            watchify: "^3.1.2",
          },
          browserify: { transform: ["brfs"] },
        };
      },
      {},
    ],
    15: [
      function (t, e, r) {
        e.exports = {
          VERSION: t("../../package.json").version,
          PI_2: 2 * Math.PI,
          RAD_TO_DEG: 180 / Math.PI,
          DEG_TO_RAD: Math.PI / 180,
          TARGET_FPMS: 0.06,
          RENDERER_TYPE: { UNKNOWN: 0, WEBGL: 1, CANVAS: 2 },
          BLEND_MODES: {
            NORMAL: 0,
            ADD: 1,
            MULTIPLY: 2,
            SCREEN: 3,
            OVERLAY: 4,
            DARKEN: 5,
            LIGHTEN: 6,
            COLOR_DODGE: 7,
            COLOR_BURN: 8,
            HARD_LIGHT: 9,
            SOFT_LIGHT: 10,
            DIFFERENCE: 11,
            EXCLUSION: 12,
            HUE: 13,
            SATURATION: 14,
            COLOR: 15,
            LUMINOSITY: 16,
          },
          SCALE_MODES: { DEFAULT: 0, LINEAR: 0, NEAREST: 1 },
          RETINA_PREFIX: /@(.+)x/,
          RESOLUTION: 1,
          FILTER_RESOLUTION: 1,
          DEFAULT_RENDER_OPTIONS: {
            view: null,
            resolution: 1,
            antialias: !1,
            forceFXAA: !1,
            autoResize: !1,
            transparent: !1,
            backgroundColor: 0,
            clearBeforeRender: !0,
            preserveDrawingBuffer: !1,
          },
          SHAPES: { POLY: 0, RECT: 1, CIRC: 2, ELIP: 3, RREC: 4 },
          SPRITE_BATCH_SIZE: 2e3,
        };
      },
      { "../../package.json": 14 },
    ],
    16: [
      function (t, e, r) {
        function i() {
          o.call(this), (this.children = []);
        }
        var n = t("../math"),
          o = t("./DisplayObject"),
          s = t("../textures/RenderTexture"),
          a = new n.Matrix();
        (i.prototype = Object.create(o.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            width: {
              get: function () {
                return this.scale.x * this.getLocalBounds().width;
              },
              set: function (t) {
                var e = this.getLocalBounds().width;
                (this.scale.x = 0 !== e ? t / e : 1), (this._width = t);
              },
            },
            height: {
              get: function () {
                return this.scale.y * this.getLocalBounds().height;
              },
              set: function (t) {
                var e = this.getLocalBounds().height;
                (this.scale.y = 0 !== e ? t / e : 1), (this._height = t);
              },
            },
          }),
          (i.prototype.addChild = function (t) {
            return this.addChildAt(t, this.children.length);
          }),
          (i.prototype.addChildAt = function (t, e) {
            if (t === this) return t;
            if (e >= 0 && e <= this.children.length)
              return (
                t.parent && t.parent.removeChild(t),
                (t.parent = this),
                this.children.splice(e, 0, t),
                t
              );
            throw new Error(
              t +
                "addChildAt: The index " +
                e +
                " supplied is out of bounds " +
                this.children.length
            );
          }),
          (i.prototype.swapChildren = function (t, e) {
            if (t !== e) {
              var r = this.getChildIndex(t),
                i = this.getChildIndex(e);
              if (0 > r || 0 > i)
                throw new Error(
                  "swapChildren: Both the supplied DisplayObjects must be children of the caller."
                );
              (this.children[r] = e), (this.children[i] = t);
            }
          }),
          (i.prototype.getChildIndex = function (t) {
            var e = this.children.indexOf(t);
            if (-1 === e)
              throw new Error(
                "The supplied DisplayObject must be a child of the caller"
              );
            return e;
          }),
          (i.prototype.setChildIndex = function (t, e) {
            if (0 > e || e >= this.children.length)
              throw new Error("The supplied index is out of bounds");
            var r = this.getChildIndex(t);
            this.children.splice(r, 1), this.children.splice(e, 0, t);
          }),
          (i.prototype.getChildAt = function (t) {
            if (0 > t || t >= this.children.length)
              throw new Error(
                "getChildAt: Supplied index " +
                  t +
                  " does not exist in the child list, or the supplied DisplayObject is not a child of the caller"
              );
            return this.children[t];
          }),
          (i.prototype.removeChild = function (t) {
            var e = this.children.indexOf(t);
            if (-1 !== e) return this.removeChildAt(e);
          }),
          (i.prototype.removeChildAt = function (t) {
            var e = this.getChildAt(t);
            return (e.parent = null), this.children.splice(t, 1), e;
          }),
          (i.prototype.removeChildren = function (t, e) {
            var r = t || 0,
              i = "number" == typeof e ? e : this.children.length,
              n = i - r;
            if (n > 0 && i >= n) {
              for (var o = this.children.splice(r, n), s = 0; s < o.length; ++s)
                o[s].parent = null;
              return o;
            }
            if (0 === n && 0 === this.children.length) return [];
            throw new RangeError(
              "removeChildren: numeric values are outside the acceptable range."
            );
          }),
          (i.prototype.generateTexture = function (t, e, r) {
            var i = this.getLocalBounds(),
              n = new s(t, 0 | i.width, 0 | i.height, t, r, e);
            return (a.tx = -i.x), (a.ty = -i.y), n.render(this, a), n;
          }),
          (i.prototype.updateTransform = function () {
            if (this.visible) {
              this.displayObjectUpdateTransform();
              for (var t = 0, e = this.children.length; e > t; ++t)
                this.children[t].updateTransform();
            }
          }),
          (i.prototype.containerUpdateTransform = i.prototype.updateTransform),
          (i.prototype.getBounds = function () {
            if (!this._currentBounds) {
              if (0 === this.children.length) return n.Rectangle.EMPTY;
              for (
                var t,
                  e,
                  r,
                  i = 1 / 0,
                  o = 1 / 0,
                  s = -(1 / 0),
                  a = -(1 / 0),
                  h = !1,
                  l = 0,
                  u = this.children.length;
                u > l;
                ++l
              ) {
                var c = this.children[l];
                c.visible &&
                  ((h = !0),
                  (t = this.children[l].getBounds()),
                  (i = i < t.x ? i : t.x),
                  (o = o < t.y ? o : t.y),
                  (e = t.width + t.x),
                  (r = t.height + t.y),
                  (s = s > e ? s : e),
                  (a = a > r ? a : r));
              }
              if (!h) return n.Rectangle.EMPTY;
              var p = this._bounds;
              (p.x = i),
                (p.y = o),
                (p.width = s - i),
                (p.height = a - o),
                (this._currentBounds = p);
            }
            return this._currentBounds;
          }),
          (i.prototype.containerGetBounds = i.prototype.getBounds),
          (i.prototype.getLocalBounds = function () {
            var t = this.worldTransform;
            this.worldTransform = n.Matrix.IDENTITY;
            for (var e = 0, r = this.children.length; r > e; ++e)
              this.children[e].updateTransform();
            return (
              (this.worldTransform = t),
              (this._currentBounds = null),
              this.getBounds(n.Matrix.IDENTITY)
            );
          }),
          (i.prototype.renderWebGL = function (t) {
            if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
              var e, r;
              if (this._mask || this._filters) {
                for (
                  t.currentRenderer.flush(),
                    this._filters &&
                      t.filterManager.pushFilter(this, this._filters),
                    this._mask && t.maskManager.pushMask(this, this._mask),
                    t.currentRenderer.start(),
                    this._renderWebGL(t),
                    e = 0,
                    r = this.children.length;
                  r > e;
                  e++
                )
                  this.children[e].renderWebGL(t);
                t.currentRenderer.flush(),
                  this._mask && t.maskManager.popMask(this, this._mask),
                  this._filters && t.filterManager.popFilter(),
                  t.currentRenderer.start();
              } else
                for (
                  this._renderWebGL(t), e = 0, r = this.children.length;
                  r > e;
                  ++e
                )
                  this.children[e].renderWebGL(t);
            }
          }),
          (i.prototype._renderWebGL = function (t) {}),
          (i.prototype._renderCanvas = function (t) {}),
          (i.prototype.renderCanvas = function (t) {
            if (this.visible && !(this.alpha <= 0) && this.renderable) {
              this._mask && t.maskManager.pushMask(this._mask, t),
                this._renderCanvas(t);
              for (var e = 0, r = this.children.length; r > e; ++e)
                this.children[e].renderCanvas(t);
              this._mask && t.maskManager.popMask(t);
            }
          }),
          (i.prototype.destroy = function (t) {
            if ((o.prototype.destroy.call(this), t))
              for (var e = 0, r = this.children.length; r > e; ++e)
                this.children[e].destroy(t);
            this.removeChildren(), (this.children = null);
          });
      },
      { "../math": 25, "../textures/RenderTexture": 63, "./DisplayObject": 17 },
    ],
    17: [
      function (t, e, r) {
        function i() {
          s.call(this),
            (this.position = new n.Point()),
            (this.scale = new n.Point(1, 1)),
            (this.pivot = new n.Point(0, 0)),
            (this.rotation = 0),
            (this.alpha = 1),
            (this.visible = !0),
            (this.renderable = !0),
            (this.parent = null),
            (this.worldAlpha = 1),
            (this.worldTransform = new n.Matrix()),
            (this.filterArea = null),
            (this._sr = 0),
            (this._cr = 1),
            (this._bounds = new n.Rectangle(0, 0, 1, 1)),
            (this._currentBounds = null),
            (this._mask = null),
            (this._cacheAsBitmap = !1),
            (this._cachedObject = null);
        }
        var n = t("../math"),
          o = t("../textures/RenderTexture"),
          s = t("eventemitter3"),
          a = t("../const"),
          h = new n.Matrix();
        (i.prototype = Object.create(s.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            x: {
              get: function () {
                return this.position.x;
              },
              set: function (t) {
                this.position.x = t;
              },
            },
            y: {
              get: function () {
                return this.position.y;
              },
              set: function (t) {
                this.position.y = t;
              },
            },
            worldVisible: {
              get: function () {
                var t = this;
                do {
                  if (!t.visible) return !1;
                  t = t.parent;
                } while (t);
                return !0;
              },
            },
            mask: {
              get: function () {
                return this._mask;
              },
              set: function (t) {
                this._mask && (this._mask.renderable = !0),
                  (this._mask = t),
                  this._mask && (this._mask.renderable = !1);
              },
            },
            filters: {
              get: function () {
                return this._filters && this._filters.slice();
              },
              set: function (t) {
                this._filters = t && t.slice();
              },
            },
          }),
          (i.prototype.updateTransform = function () {
            var t,
              e,
              r,
              i,
              n,
              o,
              s = this.parent.worldTransform,
              h = this.worldTransform;
            this.rotation % a.PI_2
              ? (this.rotation !== this.rotationCache &&
                  ((this.rotationCache = this.rotation),
                  (this._sr = Math.sin(this.rotation)),
                  (this._cr = Math.cos(this.rotation))),
                (t = this._cr * this.scale.x),
                (e = this._sr * this.scale.x),
                (r = -this._sr * this.scale.y),
                (i = this._cr * this.scale.y),
                (n = this.position.x),
                (o = this.position.y),
                (this.pivot.x || this.pivot.y) &&
                  ((n -= this.pivot.x * t + this.pivot.y * r),
                  (o -= this.pivot.x * e + this.pivot.y * i)),
                (h.a = t * s.a + e * s.c),
                (h.b = t * s.b + e * s.d),
                (h.c = r * s.a + i * s.c),
                (h.d = r * s.b + i * s.d),
                (h.tx = n * s.a + o * s.c + s.tx),
                (h.ty = n * s.b + o * s.d + s.ty))
              : ((t = this.scale.x),
                (i = this.scale.y),
                (n = this.position.x - this.pivot.x * t),
                (o = this.position.y - this.pivot.y * i),
                (h.a = t * s.a),
                (h.b = t * s.b),
                (h.c = i * s.c),
                (h.d = i * s.d),
                (h.tx = n * s.a + o * s.c + s.tx),
                (h.ty = n * s.b + o * s.d + s.ty)),
              (this.worldAlpha = this.alpha * this.parent.worldAlpha),
              (this._currentBounds = null);
          }),
          (i.prototype.displayObjectUpdateTransform =
            i.prototype.updateTransform),
          (i.prototype.getBounds = function (t) {
            return n.Rectangle.EMPTY;
          }),
          (i.prototype.getLocalBounds = function () {
            return this.getBounds(n.Matrix.IDENTITY);
          }),
          (i.prototype.toGlobal = function (t) {
            return (
              this.displayObjectUpdateTransform(), this.worldTransform.apply(t)
            );
          }),
          (i.prototype.toLocal = function (t, e) {
            return (
              e && (t = e.toGlobal(t)),
              this.displayObjectUpdateTransform(),
              this.worldTransform.applyInverse(t)
            );
          }),
          (i.prototype.renderWebGL = function (t) {}),
          (i.prototype.renderCanvas = function (t) {}),
          (i.prototype.generateTexture = function (t, e, r) {
            var i = this.getLocalBounds(),
              n = new o(t, 0 | i.width, 0 | i.height, t, r, e);
            return (h.tx = -i.x), (h.ty = -i.y), n.render(this, h), n;
          }),
          (i.prototype.destroy = function () {
            (this.position = null),
              (this.scale = null),
              (this.pivot = null),
              (this.parent = null),
              (this._bounds = null),
              (this._currentBounds = null),
              (this._mask = null),
              (this.worldTransform = null),
              (this.filterArea = null);
          });
      },
      {
        "../const": 15,
        "../math": 25,
        "../textures/RenderTexture": 63,
        eventemitter3: 4,
      },
    ],
    18: [
      function (t, e, r) {
        function i() {
          n.call(this),
            (this.fillAlpha = 1),
            (this.lineWidth = 0),
            (this.lineColor = 0),
            (this.graphicsData = []),
            (this.tint = 16777215),
            (this._prevTint = 16777215),
            (this.blendMode = c.BLEND_MODES.NORMAL),
            (this.currentPath = null),
            (this._webGL = {}),
            (this.isMask = !1),
            (this.boundsPadding = 0),
            (this._localBounds = new u.Rectangle(0, 0, 1, 1)),
            (this.dirty = !0),
            (this.glDirty = !1),
            (this.boundsDirty = !0),
            (this.cachedSpriteDirty = !1);
        }
        var n = t("../display/Container"),
          o = t("../sprites/Sprite"),
          s = t("../textures/Texture"),
          a = t("../renderers/canvas/utils/CanvasBuffer"),
          h = t("../renderers/canvas/utils/CanvasGraphics"),
          l = t("./GraphicsData"),
          u = t("../math"),
          c = t("../const"),
          p = new u.Point();
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {}),
          (i.prototype.clone = function () {
            var t = new i();
            (t.renderable = this.renderable),
              (t.fillAlpha = this.fillAlpha),
              (t.lineWidth = this.lineWidth),
              (t.lineColor = this.lineColor),
              (t.tint = this.tint),
              (t.blendMode = this.blendMode),
              (t.isMask = this.isMask),
              (t.boundsPadding = this.boundsPadding),
              (t.dirty = this.dirty),
              (t.glDirty = this.glDirty),
              (t.cachedSpriteDirty = this.cachedSpriteDirty);
            for (var e = 0; e < this.graphicsData.length; ++e)
              t.graphicsData.push(this.graphicsData[e].clone());
            return (
              (t.currentPath = t.graphicsData[t.graphicsData.length - 1]),
              t.updateLocalBounds(),
              t
            );
          }),
          (i.prototype.lineStyle = function (t, e, r) {
            return (
              (this.lineWidth = t || 0),
              (this.lineColor = e || 0),
              (this.lineAlpha = void 0 === r ? 1 : r),
              this.currentPath &&
                (this.currentPath.shape.points.length
                  ? this.drawShape(
                      new u.Polygon(this.currentPath.shape.points.slice(-2))
                    )
                  : ((this.currentPath.lineWidth = this.lineWidth),
                    (this.currentPath.lineColor = this.lineColor),
                    (this.currentPath.lineAlpha = this.lineAlpha))),
              this
            );
          }),
          (i.prototype.moveTo = function (t, e) {
            return this.drawShape(new u.Polygon([t, e])), this;
          }),
          (i.prototype.lineTo = function (t, e) {
            return (
              this.currentPath.shape.points.push(t, e), (this.dirty = !0), this
            );
          }),
          (i.prototype.quadraticCurveTo = function (t, e, r, i) {
            this.currentPath
              ? 0 === this.currentPath.shape.points.length &&
                (this.currentPath.shape.points = [0, 0])
              : this.moveTo(0, 0);
            var n,
              o,
              s = 20,
              a = this.currentPath.shape.points;
            0 === a.length && this.moveTo(0, 0);
            for (
              var h = a[a.length - 2], l = a[a.length - 1], u = 0, c = 1;
              s >= c;
              ++c
            )
              (u = c / s),
                (n = h + (t - h) * u),
                (o = l + (e - l) * u),
                a.push(
                  n + (t + (r - t) * u - n) * u,
                  o + (e + (i - e) * u - o) * u
                );
            return (this.dirty = this.boundsDirty = !0), this;
          }),
          (i.prototype.bezierCurveTo = function (t, e, r, i, n, o) {
            this.currentPath
              ? 0 === this.currentPath.shape.points.length &&
                (this.currentPath.shape.points = [0, 0])
              : this.moveTo(0, 0);
            for (
              var s,
                a,
                h,
                l,
                u,
                c = 20,
                p = this.currentPath.shape.points,
                d = p[p.length - 2],
                f = p[p.length - 1],
                v = 0,
                g = 1;
              c >= g;
              ++g
            )
              (v = g / c),
                (s = 1 - v),
                (a = s * s),
                (h = a * s),
                (l = v * v),
                (u = l * v),
                p.push(
                  h * d + 3 * a * v * t + 3 * s * l * r + u * n,
                  h * f + 3 * a * v * e + 3 * s * l * i + u * o
                );
            return (this.dirty = this.boundsDirty = !0), this;
          }),
          (i.prototype.arcTo = function (t, e, r, i, n) {
            this.currentPath
              ? 0 === this.currentPath.shape.points.length &&
                this.currentPath.shape.points.push(t, e)
              : this.moveTo(t, e);
            var o = this.currentPath.shape.points,
              s = o[o.length - 2],
              a = o[o.length - 1],
              h = a - e,
              l = s - t,
              u = i - e,
              c = r - t,
              p = Math.abs(h * c - l * u);
            if (1e-8 > p || 0 === n)
              (o[o.length - 2] !== t || o[o.length - 1] !== e) && o.push(t, e);
            else {
              var d = h * h + l * l,
                f = u * u + c * c,
                v = h * u + l * c,
                g = (n * Math.sqrt(d)) / p,
                m = (n * Math.sqrt(f)) / p,
                y = (g * v) / d,
                x = (m * v) / f,
                b = g * c + m * l,
                _ = g * u + m * h,
                T = l * (m + y),
                E = h * (m + y),
                S = c * (g + x),
                C = u * (g + x),
                w = Math.atan2(E - _, T - b),
                A = Math.atan2(C - _, S - b);
              this.arc(b + t, _ + e, n, w, A, l * u > c * h);
            }
            return (this.dirty = this.boundsDirty = !0), this;
          }),
          (i.prototype.arc = function (t, e, r, i, n, o) {
            if (((o = o || !1), i === n)) return this;
            !o && i >= n
              ? (n += 2 * Math.PI)
              : o && n >= i && (i += 2 * Math.PI);
            var s = o ? -1 * (i - n) : n - i,
              a = 40 * Math.ceil(Math.abs(s) / (2 * Math.PI));
            if (0 === s) return this;
            var h = t + Math.cos(i) * r,
              l = e + Math.sin(i) * r;
            this.currentPath
              ? o && this.filling
                ? this.currentPath.shape.points.push(t, e)
                : this.currentPath.shape.points.push(h, l)
              : o && this.filling
              ? this.moveTo(t, e)
              : this.moveTo(h, l);
            for (
              var u = this.currentPath.shape.points,
                c = s / (2 * a),
                p = 2 * c,
                d = Math.cos(c),
                f = Math.sin(c),
                v = a - 1,
                g = (v % 1) / v,
                m = 0;
              v >= m;
              m++
            ) {
              var y = m + g * m,
                x = c + i + p * y,
                b = Math.cos(x),
                _ = -Math.sin(x);
              u.push((d * b + f * _) * r + t, (d * -_ + f * b) * r + e);
            }
            return (this.dirty = this.boundsDirty = !0), this;
          }),
          (i.prototype.beginFill = function (t, e) {
            return (
              (this.filling = !0),
              (this.fillColor = t || 0),
              (this.fillAlpha = void 0 === e ? 1 : e),
              this.currentPath &&
                this.currentPath.shape.points.length <= 2 &&
                ((this.currentPath.fill = this.filling),
                (this.currentPath.fillColor = this.fillColor),
                (this.currentPath.fillAlpha = this.fillAlpha)),
              this
            );
          }),
          (i.prototype.endFill = function () {
            return (
              (this.filling = !1),
              (this.fillColor = null),
              (this.fillAlpha = 1),
              this
            );
          }),
          (i.prototype.drawRect = function (t, e, r, i) {
            return this.drawShape(new u.Rectangle(t, e, r, i)), this;
          }),
          (i.prototype.drawRoundedRect = function (t, e, r, i, n) {
            return this.drawShape(new u.RoundedRectangle(t, e, r, i, n)), this;
          }),
          (i.prototype.drawCircle = function (t, e, r) {
            return this.drawShape(new u.Circle(t, e, r)), this;
          }),
          (i.prototype.drawEllipse = function (t, e, r, i) {
            return this.drawShape(new u.Ellipse(t, e, r, i)), this;
          }),
          (i.prototype.drawPolygon = function (t) {
            var e = t;
            if (!Array.isArray(e)) {
              e = new Array(arguments.length);
              for (var r = 0; r < e.length; ++r) e[r] = arguments[r];
            }
            return this.drawShape(new u.Polygon(e)), this;
          }),
          (i.prototype.clear = function () {
            return (
              (this.lineWidth = 0),
              (this.filling = !1),
              (this.dirty = !0),
              (this.clearDirty = !0),
              (this.graphicsData = []),
              this
            );
          }),
          (i.prototype.generateTexture = function (t, e, r) {
            e = e || 1;
            var i = this.getLocalBounds(),
              n = new a(i.width * e, i.height * e),
              o = s.fromCanvas(n.canvas, r);
            return (
              (o.baseTexture.resolution = e),
              n.context.scale(e, e),
              n.context.translate(-i.x, -i.y),
              h.renderGraphics(this, n.context),
              o
            );
          }),
          (i.prototype._renderWebGL = function (t) {
            this.glDirty && ((this.dirty = !0), (this.glDirty = !1)),
              t.setObjectRenderer(t.plugins.graphics),
              t.plugins.graphics.render(this);
          }),
          (i.prototype._renderCanvas = function (t) {
            if (this.isMask !== !0) {
              if (
                (this._prevTint !== this.tint &&
                  ((this.dirty = !0), (this._prevTint = this.tint)),
                this._cacheAsBitmap)
              )
                return (
                  (this.dirty || this.cachedSpriteDirty) &&
                    (this._generateCachedSprite(),
                    this.updateCachedSpriteTexture(),
                    (this.cachedSpriteDirty = !1),
                    (this.dirty = !1)),
                  (this._cachedSprite.alpha = this.alpha),
                  void o.prototype._renderCanvas.call(this._cachedSprite, t)
                );
              var e = t.context,
                r = this.worldTransform;
              this.blendMode !== t.currentBlendMode &&
                ((t.currentBlendMode = this.blendMode),
                (e.globalCompositeOperation =
                  t.blendModes[t.currentBlendMode]));
              var i = t.resolution;
              e.setTransform(
                r.a * i,
                r.b * i,
                r.c * i,
                r.d * i,
                r.tx * i,
                r.ty * i
              ),
                h.renderGraphics(this, e);
            }
          }),
          (i.prototype.getBounds = function (t) {
            if (!this._currentBounds) {
              if (!this.renderable) return u.Rectangle.EMPTY;
              this.boundsDirty &&
                (this.updateLocalBounds(),
                (this.glDirty = !0),
                (this.cachedSpriteDirty = !0),
                (this.boundsDirty = !1));
              var e = this._localBounds,
                r = e.x,
                i = e.width + e.x,
                n = e.y,
                o = e.height + e.y,
                s = t || this.worldTransform,
                a = s.a,
                h = s.b,
                l = s.c,
                c = s.d,
                p = s.tx,
                d = s.ty,
                f = a * i + l * o + p,
                v = c * o + h * i + d,
                g = a * r + l * o + p,
                m = c * o + h * r + d,
                y = a * r + l * n + p,
                x = c * n + h * r + d,
                b = a * i + l * n + p,
                _ = c * n + h * i + d,
                T = f,
                E = v,
                S = f,
                C = v;
              (S = S > g ? g : S),
                (S = S > y ? y : S),
                (S = S > b ? b : S),
                (C = C > m ? m : C),
                (C = C > x ? x : C),
                (C = C > _ ? _ : C),
                (T = g > T ? g : T),
                (T = y > T ? y : T),
                (T = b > T ? b : T),
                (E = m > E ? m : E),
                (E = x > E ? x : E),
                (E = _ > E ? _ : E),
                (this._bounds.x = S),
                (this._bounds.width = T - S),
                (this._bounds.y = C),
                (this._bounds.height = E - C),
                (this._currentBounds = this._bounds);
            }
            return this._currentBounds;
          }),
          (i.prototype.containsPoint = function (t) {
            this.worldTransform.applyInverse(t, p);
            for (var e = this.graphicsData, r = 0; r < e.length; r++) {
              var i = e[r];
              if (i.fill && i.shape && i.shape.contains(p.x, p.y)) return !0;
            }
            return !1;
          }),
          (i.prototype.updateLocalBounds = function () {
            var t = 1 / 0,
              e = -(1 / 0),
              r = 1 / 0,
              i = -(1 / 0);
            if (this.graphicsData.length)
              for (
                var n, o, s, a, h, l, u = 0;
                u < this.graphicsData.length;
                u++
              ) {
                var p = this.graphicsData[u],
                  d = p.type,
                  f = p.lineWidth;
                if (((n = p.shape), d === c.SHAPES.RECT || d === c.SHAPES.RREC))
                  (s = n.x - f / 2),
                    (a = n.y - f / 2),
                    (h = n.width + f),
                    (l = n.height + f),
                    (t = t > s ? s : t),
                    (e = s + h > e ? s + h : e),
                    (r = r > a ? a : r),
                    (i = a + l > i ? a + l : i);
                else if (d === c.SHAPES.CIRC)
                  (s = n.x),
                    (a = n.y),
                    (h = n.radius + f / 2),
                    (l = n.radius + f / 2),
                    (t = t > s - h ? s - h : t),
                    (e = s + h > e ? s + h : e),
                    (r = r > a - l ? a - l : r),
                    (i = a + l > i ? a + l : i);
                else if (d === c.SHAPES.ELIP)
                  (s = n.x),
                    (a = n.y),
                    (h = n.width + f / 2),
                    (l = n.height + f / 2),
                    (t = t > s - h ? s - h : t),
                    (e = s + h > e ? s + h : e),
                    (r = r > a - l ? a - l : r),
                    (i = a + l > i ? a + l : i);
                else {
                  o = n.points;
                  for (var v = 0; v < o.length; v += 2)
                    (s = o[v]),
                      (a = o[v + 1]),
                      (t = t > s - f ? s - f : t),
                      (e = s + f > e ? s + f : e),
                      (r = r > a - f ? a - f : r),
                      (i = a + f > i ? a + f : i);
                }
              }
            else (t = 0), (e = 0), (r = 0), (i = 0);
            var g = this.boundsPadding;
            (this._localBounds.x = t - g),
              (this._localBounds.width = e - t + 2 * g),
              (this._localBounds.y = r - g),
              (this._localBounds.height = i - r + 2 * g);
          }),
          (i.prototype.drawShape = function (t) {
            this.currentPath &&
              this.currentPath.shape.points.length <= 2 &&
              this.graphicsData.pop(),
              (this.currentPath = null);
            var e = new l(
              this.lineWidth,
              this.lineColor,
              this.lineAlpha,
              this.fillColor,
              this.fillAlpha,
              this.filling,
              t
            );
            return (
              this.graphicsData.push(e),
              e.type === c.SHAPES.POLY &&
                ((e.shape.closed = this.filling), (this.currentPath = e)),
              (this.dirty = this.boundsDirty = !0),
              e
            );
          }),
          (i.prototype.destroy = function () {
            n.prototype.destroy.apply(this, arguments);
            for (var t = 0; t < this.graphicsData.length; ++t)
              this.graphicsData[t].destroy();
            for (var e in this._webgl)
              for (var r = 0; r < this._webgl[e].data.length; ++r)
                this._webgl[e].data[r].destroy();
            (this.graphicsData = null),
              (this.currentPath = null),
              (this._webgl = null),
              (this._localBounds = null);
          });
      },
      {
        "../const": 15,
        "../display/Container": 16,
        "../math": 25,
        "../renderers/canvas/utils/CanvasBuffer": 37,
        "../renderers/canvas/utils/CanvasGraphics": 38,
        "../sprites/Sprite": 59,
        "../textures/Texture": 64,
        "./GraphicsData": 19,
      },
    ],
    19: [
      function (t, e, r) {
        function i(t, e, r, i, n, o, s) {
          (this.lineWidth = t),
            (this.lineColor = e),
            (this.lineAlpha = r),
            (this._lineTint = e),
            (this.fillColor = i),
            (this.fillAlpha = n),
            (this._fillTint = i),
            (this.fill = o),
            (this.shape = s),
            (this.type = s.type);
        }
        (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.clone = function () {
            return new i(
              this.lineWidth,
              this.lineColor,
              this.lineAlpha,
              this.fillColor,
              this.fillAlpha,
              this.fill,
              this.shape
            );
          }),
          (i.prototype.destroy = function () {
            this.shape = null;
          });
      },
      {},
    ],
    20: [
      function (t, e, r) {
        function i(t) {
          a.call(this, t),
            (this.graphicsDataPool = []),
            (this.primitiveShader = null),
            (this.complexPrimitiveShader = null);
        }
        var n = t("../../utils"),
          o = t("../../math"),
          s = t("../../const"),
          a = t("../../renderers/webgl/utils/ObjectRenderer"),
          h = t("../../renderers/webgl/WebGLRenderer"),
          l = t("./WebGLGraphicsData");
        (i.prototype = Object.create(a.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          h.registerPlugin("graphics", i),
          (i.prototype.onContextChange = function () {}),
          (i.prototype.destroy = function () {
            a.prototype.destroy.call(this);
            for (var t = 0; t < this.graphicsDataPool.length; ++t)
              this.graphicsDataPool[t].destroy();
            this.graphicsDataPool = null;
          }),
          (i.prototype.render = function (t) {
            var e,
              r = this.renderer,
              i = r.gl,
              o = r.shaderManager.plugins.primitiveShader;
            t.dirty && this.updateGraphics(t, i);
            var s = t._webGL[i.id];
            r.blendModeManager.setBlendMode(t.blendMode);
            for (var a = 0; a < s.data.length; a++)
              1 === s.data[a].mode
                ? ((e = s.data[a]),
                  r.stencilManager.pushStencil(t, e, r),
                  i.drawElements(
                    i.TRIANGLE_FAN,
                    4,
                    i.UNSIGNED_SHORT,
                    2 * (e.indices.length - 4)
                  ),
                  r.stencilManager.popStencil(t, e, r))
                : ((e = s.data[a]),
                  (o = r.shaderManager.primitiveShader),
                  r.shaderManager.setShader(o),
                  i.uniformMatrix3fv(
                    o.uniforms.translationMatrix._location,
                    !1,
                    t.worldTransform.toArray(!0)
                  ),
                  i.uniformMatrix3fv(
                    o.uniforms.projectionMatrix._location,
                    !1,
                    r.currentRenderTarget.projectionMatrix.toArray(!0)
                  ),
                  i.uniform3fv(o.uniforms.tint._location, n.hex2rgb(t.tint)),
                  i.uniform1f(o.uniforms.alpha._location, t.worldAlpha),
                  i.bindBuffer(i.ARRAY_BUFFER, e.buffer),
                  i.vertexAttribPointer(
                    o.attributes.aVertexPosition,
                    2,
                    i.FLOAT,
                    !1,
                    24,
                    0
                  ),
                  i.vertexAttribPointer(
                    o.attributes.aColor,
                    4,
                    i.FLOAT,
                    !1,
                    24,
                    8
                  ),
                  i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.indexBuffer),
                  i.drawElements(
                    i.TRIANGLE_STRIP,
                    e.indices.length,
                    i.UNSIGNED_SHORT,
                    0
                  ));
          }),
          (i.prototype.updateGraphics = function (t) {
            var e = this.renderer.gl,
              r = t._webGL[e.id];
            r || (r = t._webGL[e.id] = { lastIndex: 0, data: [], gl: e }),
              (t.dirty = !1);
            var i;
            if (t.clearDirty) {
              for (t.clearDirty = !1, i = 0; i < r.data.length; i++) {
                var n = r.data[i];
                n.reset(), this.graphicsDataPool.push(n);
              }
              (r.data = []), (r.lastIndex = 0);
            }
            var o;
            for (i = r.lastIndex; i < t.graphicsData.length; i++) {
              var a = t.graphicsData[i];
              if (a.type === s.SHAPES.POLY) {
                if (
                  ((a.points = a.shape.points.slice()),
                  a.shape.closed &&
                    (a.points[0] !== a.points[a.points.length - 2] ||
                      a.points[1] !== a.points[a.points.length - 1]) &&
                    a.points.push(a.points[0], a.points[1]),
                  a.fill && a.points.length >= 6)
                )
                  if (a.points.length < 12) {
                    o = this.switchMode(r, 0);
                    var h = this.buildPoly(a, o);
                    h ||
                      ((o = this.switchMode(r, 1)),
                      this.buildComplexPoly(a, o));
                  } else
                    (o = this.switchMode(r, 1)), this.buildComplexPoly(a, o);
                a.lineWidth > 0 &&
                  ((o = this.switchMode(r, 0)), this.buildLine(a, o));
              } else
                (o = this.switchMode(r, 0)),
                  a.type === s.SHAPES.RECT
                    ? this.buildRectangle(a, o)
                    : a.type === s.SHAPES.CIRC || a.type === s.SHAPES.ELIP
                    ? this.buildCircle(a, o)
                    : a.type === s.SHAPES.RREC &&
                      this.buildRoundedRectangle(a, o);
              r.lastIndex++;
            }
            for (i = 0; i < r.data.length; i++)
              (o = r.data[i]), o.dirty && o.upload();
          }),
          (i.prototype.switchMode = function (t, e) {
            var r;
            return (
              t.data.length
                ? ((r = t.data[t.data.length - 1]),
                  (r.points.length > 32e4 || r.mode !== e || 1 === e) &&
                    ((r = this.graphicsDataPool.pop() || new l(t.gl)),
                    (r.mode = e),
                    t.data.push(r)))
                : ((r = this.graphicsDataPool.pop() || new l(t.gl)),
                  (r.mode = e),
                  t.data.push(r)),
              (r.dirty = !0),
              r
            );
          }),
          (i.prototype.buildRectangle = function (t, e) {
            var r = t.shape,
              i = r.x,
              o = r.y,
              s = r.width,
              a = r.height;
            if (t.fill) {
              var h = n.hex2rgb(t.fillColor),
                l = t.fillAlpha,
                u = h[0] * l,
                c = h[1] * l,
                p = h[2] * l,
                d = e.points,
                f = e.indices,
                v = d.length / 6;
              d.push(i, o),
                d.push(u, c, p, l),
                d.push(i + s, o),
                d.push(u, c, p, l),
                d.push(i, o + a),
                d.push(u, c, p, l),
                d.push(i + s, o + a),
                d.push(u, c, p, l),
                f.push(v, v, v + 1, v + 2, v + 3, v + 3);
            }
            if (t.lineWidth) {
              var g = t.points;
              (t.points = [i, o, i + s, o, i + s, o + a, i, o + a, i, o]),
                this.buildLine(t, e),
                (t.points = g);
            }
          }),
          (i.prototype.buildRoundedRectangle = function (t, e) {
            var r = t.shape,
              i = r.x,
              o = r.y,
              s = r.width,
              a = r.height,
              h = r.radius,
              l = [];
            if (
              (l.push(i, o + h),
              this.quadraticBezierCurve(
                i,
                o + a - h,
                i,
                o + a,
                i + h,
                o + a,
                l
              ),
              this.quadraticBezierCurve(
                i + s - h,
                o + a,
                i + s,
                o + a,
                i + s,
                o + a - h,
                l
              ),
              this.quadraticBezierCurve(
                i + s,
                o + h,
                i + s,
                o,
                i + s - h,
                o,
                l
              ),
              this.quadraticBezierCurve(i + h, o, i, o, i, o + h + 1e-10, l),
              t.fill)
            ) {
              var u = n.hex2rgb(t.fillColor),
                c = t.fillAlpha,
                p = u[0] * c,
                d = u[1] * c,
                f = u[2] * c,
                v = e.points,
                g = e.indices,
                m = v.length / 6,
                y = n.PolyK.Triangulate(l),
                x = 0;
              for (x = 0; x < y.length; x += 3)
                g.push(y[x] + m),
                  g.push(y[x] + m),
                  g.push(y[x + 1] + m),
                  g.push(y[x + 2] + m),
                  g.push(y[x + 2] + m);
              for (x = 0; x < l.length; x++) v.push(l[x], l[++x], p, d, f, c);
            }
            if (t.lineWidth) {
              var b = t.points;
              (t.points = l), this.buildLine(t, e), (t.points = b);
            }
          }),
          (i.prototype.quadraticBezierCurve = function (t, e, r, i, n, o, s) {
            function a(t, e, r) {
              var i = e - t;
              return t + i * r;
            }
            for (
              var h, l, u, c, p, d, f = 20, v = s || [], g = 0, m = 0;
              f >= m;
              m++
            )
              (g = m / f),
                (h = a(t, r, g)),
                (l = a(e, i, g)),
                (u = a(r, n, g)),
                (c = a(i, o, g)),
                (p = a(h, u, g)),
                (d = a(l, c, g)),
                v.push(p, d);
            return v;
          }),
          (i.prototype.buildCircle = function (t, e) {
            var r,
              i,
              o = t.shape,
              a = o.x,
              h = o.y;
            t.type === s.SHAPES.CIRC
              ? ((r = o.radius), (i = o.radius))
              : ((r = o.width), (i = o.height));
            var l = 40,
              u = (2 * Math.PI) / l,
              c = 0;
            if (t.fill) {
              var p = n.hex2rgb(t.fillColor),
                d = t.fillAlpha,
                f = p[0] * d,
                v = p[1] * d,
                g = p[2] * d,
                m = e.points,
                y = e.indices,
                x = m.length / 6;
              for (y.push(x), c = 0; l + 1 > c; c++)
                m.push(a, h, f, v, g, d),
                  m.push(
                    a + Math.sin(u * c) * r,
                    h + Math.cos(u * c) * i,
                    f,
                    v,
                    g,
                    d
                  ),
                  y.push(x++, x++);
              y.push(x - 1);
            }
            if (t.lineWidth) {
              var b = t.points;
              for (t.points = [], c = 0; l + 1 > c; c++)
                t.points.push(a + Math.sin(u * c) * r, h + Math.cos(u * c) * i);
              this.buildLine(t, e), (t.points = b);
            }
          }),
          (i.prototype.buildLine = function (t, e) {
            var r = 0,
              i = t.points;
            if (0 !== i.length) {
              if (t.lineWidth % 2) for (r = 0; r < i.length; r++) i[r] += 0.5;
              var s = new o.Point(i[0], i[1]),
                a = new o.Point(i[i.length - 2], i[i.length - 1]);
              if (s.x === a.x && s.y === a.y) {
                (i = i.slice()),
                  i.pop(),
                  i.pop(),
                  (a = new o.Point(i[i.length - 2], i[i.length - 1]));
                var h = a.x + 0.5 * (s.x - a.x),
                  l = a.y + 0.5 * (s.y - a.y);
                i.unshift(h, l), i.push(h, l);
              }
              var u,
                c,
                p,
                d,
                f,
                v,
                g,
                m,
                y,
                x,
                b,
                _,
                T,
                E,
                S,
                C,
                w,
                A,
                M,
                R,
                F,
                D,
                P,
                O = e.points,
                B = e.indices,
                L = i.length / 2,
                I = i.length,
                N = O.length / 6,
                U = t.lineWidth / 2,
                k = n.hex2rgb(t.lineColor),
                j = t.lineAlpha,
                G = k[0] * j,
                z = k[1] * j,
                X = k[2] * j;
              for (
                p = i[0],
                  d = i[1],
                  f = i[2],
                  v = i[3],
                  y = -(d - v),
                  x = p - f,
                  P = Math.sqrt(y * y + x * x),
                  y /= P,
                  x /= P,
                  y *= U,
                  x *= U,
                  O.push(p - y, d - x, G, z, X, j),
                  O.push(p + y, d + x, G, z, X, j),
                  r = 1;
                L - 1 > r;
                r++
              )
                (p = i[2 * (r - 1)]),
                  (d = i[2 * (r - 1) + 1]),
                  (f = i[2 * r]),
                  (v = i[2 * r + 1]),
                  (g = i[2 * (r + 1)]),
                  (m = i[2 * (r + 1) + 1]),
                  (y = -(d - v)),
                  (x = p - f),
                  (P = Math.sqrt(y * y + x * x)),
                  (y /= P),
                  (x /= P),
                  (y *= U),
                  (x *= U),
                  (b = -(v - m)),
                  (_ = f - g),
                  (P = Math.sqrt(b * b + _ * _)),
                  (b /= P),
                  (_ /= P),
                  (b *= U),
                  (_ *= U),
                  (S = -x + d - (-x + v)),
                  (C = -y + f - (-y + p)),
                  (w = (-y + p) * (-x + v) - (-y + f) * (-x + d)),
                  (A = -_ + m - (-_ + v)),
                  (M = -b + f - (-b + g)),
                  (R = (-b + g) * (-_ + v) - (-b + f) * (-_ + m)),
                  (F = S * M - A * C),
                  Math.abs(F) < 0.1
                    ? ((F += 10.1),
                      O.push(f - y, v - x, G, z, X, j),
                      O.push(f + y, v + x, G, z, X, j))
                    : ((u = (C * R - M * w) / F),
                      (c = (A * w - S * R) / F),
                      (D = (u - f) * (u - f) + (c - v) + (c - v)),
                      D > 19600
                        ? ((T = y - b),
                          (E = x - _),
                          (P = Math.sqrt(T * T + E * E)),
                          (T /= P),
                          (E /= P),
                          (T *= U),
                          (E *= U),
                          O.push(f - T, v - E),
                          O.push(G, z, X, j),
                          O.push(f + T, v + E),
                          O.push(G, z, X, j),
                          O.push(f - T, v - E),
                          O.push(G, z, X, j),
                          I++)
                        : (O.push(u, c),
                          O.push(G, z, X, j),
                          O.push(f - (u - f), v - (c - v)),
                          O.push(G, z, X, j)));
              for (
                p = i[2 * (L - 2)],
                  d = i[2 * (L - 2) + 1],
                  f = i[2 * (L - 1)],
                  v = i[2 * (L - 1) + 1],
                  y = -(d - v),
                  x = p - f,
                  P = Math.sqrt(y * y + x * x),
                  y /= P,
                  x /= P,
                  y *= U,
                  x *= U,
                  O.push(f - y, v - x),
                  O.push(G, z, X, j),
                  O.push(f + y, v + x),
                  O.push(G, z, X, j),
                  B.push(N),
                  r = 0;
                I > r;
                r++
              )
                B.push(N++);
              B.push(N - 1);
            }
          }),
          (i.prototype.buildComplexPoly = function (t, e) {
            var r = t.points.slice();
            if (!(r.length < 6)) {
              var i = e.indices;
              (e.points = r),
                (e.alpha = t.fillAlpha),
                (e.color = n.hex2rgb(t.fillColor));
              for (
                var o,
                  s,
                  a = 1 / 0,
                  h = -(1 / 0),
                  l = 1 / 0,
                  u = -(1 / 0),
                  c = 0;
                c < r.length;
                c += 2
              )
                (o = r[c]),
                  (s = r[c + 1]),
                  (a = a > o ? o : a),
                  (h = o > h ? o : h),
                  (l = l > s ? s : l),
                  (u = s > u ? s : u);
              r.push(a, l, h, l, h, u, a, u);
              var p = r.length / 2;
              for (c = 0; p > c; c++) i.push(c);
            }
          }),
          (i.prototype.buildPoly = function (t, e) {
            var r = t.points;
            if (!(r.length < 6)) {
              var i = e.points,
                o = e.indices,
                s = r.length / 2,
                a = n.hex2rgb(t.fillColor),
                h = t.fillAlpha,
                l = a[0] * h,
                u = a[1] * h,
                c = a[2] * h,
                p = n.PolyK.Triangulate(r);
              if (!p) return !1;
              var d = i.length / 6,
                f = 0;
              for (f = 0; f < p.length; f += 3)
                o.push(p[f] + d),
                  o.push(p[f] + d),
                  o.push(p[f + 1] + d),
                  o.push(p[f + 2] + d),
                  o.push(p[f + 2] + d);
              for (f = 0; s > f; f++)
                i.push(r[2 * f], r[2 * f + 1], l, u, c, h);
              return !0;
            }
          });
      },
      {
        "../../const": 15,
        "../../math": 25,
        "../../renderers/webgl/WebGLRenderer": 41,
        "../../renderers/webgl/utils/ObjectRenderer": 55,
        "../../utils": 68,
        "./WebGLGraphicsData": 21,
      },
    ],
    21: [
      function (t, e, r) {
        function i(t) {
          (this.gl = t),
            (this.color = [0, 0, 0]),
            (this.points = []),
            (this.indices = []),
            (this.buffer = t.createBuffer()),
            (this.indexBuffer = t.createBuffer()),
            (this.mode = 1),
            (this.alpha = 1),
            (this.dirty = !0),
            (this.glPoints = null),
            (this.glIndices = null);
        }
        (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.reset = function () {
            (this.points.length = 0), (this.indices.length = 0);
          }),
          (i.prototype.upload = function () {
            var t = this.gl;
            (this.glPoints = new Float32Array(this.points)),
              t.bindBuffer(t.ARRAY_BUFFER, this.buffer),
              t.bufferData(t.ARRAY_BUFFER, this.glPoints, t.STATIC_DRAW),
              (this.glIndices = new Uint16Array(this.indices)),
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
              t.bufferData(
                t.ELEMENT_ARRAY_BUFFER,
                this.glIndices,
                t.STATIC_DRAW
              ),
              (this.dirty = !1);
          }),
          (i.prototype.destroy = function () {
            (this.gl = null),
              (this.color = null),
              (this.points = null),
              (this.indices = null),
              this.gl.deleteBuffer(this.buffer),
              this.gl.deleteBuffer(this.indexBuffer),
              (this.buffer = null),
              (this.indexBuffer = null),
              (this.glPoints = null),
              (this.glIndices = null);
          });
      },
      {},
    ],
    22: [
      function (t, e, r) {
        var i = (e.exports = Object.assign(t("./const"), t("./math"), {
          utils: t("./utils"),
          math: t("./math"),
          DisplayObject: t("./display/DisplayObject"),
          Container: t("./display/Container"),
          Sprite: t("./sprites/Sprite"),
          ParticleContainer: t("./particles/ParticleContainer"),
          SpriteRenderer: t("./sprites/webgl/SpriteRenderer"),
          ParticleRenderer: t("./particles/webgl/ParticleRenderer"),
          Text: t("./text/Text"),
          Graphics: t("./graphics/Graphics"),
          GraphicsData: t("./graphics/GraphicsData"),
          GraphicsRenderer: t("./graphics/webgl/GraphicsRenderer"),
          Texture: t("./textures/Texture"),
          BaseTexture: t("./textures/BaseTexture"),
          RenderTexture: t("./textures/RenderTexture"),
          VideoBaseTexture: t("./textures/VideoBaseTexture"),
          TextureUvs: t("./textures/TextureUvs"),
          CanvasRenderer: t("./renderers/canvas/CanvasRenderer"),
          CanvasGraphics: t("./renderers/canvas/utils/CanvasGraphics"),
          CanvasBuffer: t("./renderers/canvas/utils/CanvasBuffer"),
          WebGLRenderer: t("./renderers/webgl/WebGLRenderer"),
          ShaderManager: t("./renderers/webgl/managers/ShaderManager"),
          Shader: t("./renderers/webgl/shaders/Shader"),
          ObjectRenderer: t("./renderers/webgl/utils/ObjectRenderer"),
          RenderTarget: t("./renderers/webgl/utils/RenderTarget"),
          AbstractFilter: t("./renderers/webgl/filters/AbstractFilter"),
          autoDetectRenderer: function (t, e, r, n) {
            return (
              (t = t || 800),
              (e = e || 600),
              !n && i.utils.isWebGLSupported()
                ? new i.WebGLRenderer(t, e, r)
                : new i.CanvasRenderer(t, e, r)
            );
          },
        }));
      },
      {
        "./const": 15,
        "./display/Container": 16,
        "./display/DisplayObject": 17,
        "./graphics/Graphics": 18,
        "./graphics/GraphicsData": 19,
        "./graphics/webgl/GraphicsRenderer": 20,
        "./math": 25,
        "./particles/ParticleContainer": 31,
        "./particles/webgl/ParticleRenderer": 33,
        "./renderers/canvas/CanvasRenderer": 36,
        "./renderers/canvas/utils/CanvasBuffer": 37,
        "./renderers/canvas/utils/CanvasGraphics": 38,
        "./renderers/webgl/WebGLRenderer": 41,
        "./renderers/webgl/filters/AbstractFilter": 42,
        "./renderers/webgl/managers/ShaderManager": 48,
        "./renderers/webgl/shaders/Shader": 53,
        "./renderers/webgl/utils/ObjectRenderer": 55,
        "./renderers/webgl/utils/RenderTarget": 57,
        "./sprites/Sprite": 59,
        "./sprites/webgl/SpriteRenderer": 60,
        "./text/Text": 61,
        "./textures/BaseTexture": 62,
        "./textures/RenderTexture": 63,
        "./textures/Texture": 64,
        "./textures/TextureUvs": 65,
        "./textures/VideoBaseTexture": 66,
        "./utils": 68,
      },
    ],
    23: [
      function (t, e, r) {
        function i() {
          (this.a = 1),
            (this.b = 0),
            (this.c = 0),
            (this.d = 1),
            (this.tx = 0),
            (this.ty = 0);
        }
        var n = t("./Point");
        (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.fromArray = function (t) {
            (this.a = t[0]),
              (this.b = t[1]),
              (this.c = t[3]),
              (this.d = t[4]),
              (this.tx = t[2]),
              (this.ty = t[5]);
          }),
          (i.prototype.toArray = function (t) {
            this.array || (this.array = new Float32Array(9));
            var e = this.array;
            return (
              t
                ? ((e[0] = this.a),
                  (e[1] = this.b),
                  (e[2] = 0),
                  (e[3] = this.c),
                  (e[4] = this.d),
                  (e[5] = 0),
                  (e[6] = this.tx),
                  (e[7] = this.ty),
                  (e[8] = 1))
                : ((e[0] = this.a),
                  (e[1] = this.c),
                  (e[2] = this.tx),
                  (e[3] = this.b),
                  (e[4] = this.d),
                  (e[5] = this.ty),
                  (e[6] = 0),
                  (e[7] = 0),
                  (e[8] = 1)),
              e
            );
          }),
          (i.prototype.apply = function (t, e) {
            e = e || new n();
            var r = t.x,
              i = t.y;
            return (
              (e.x = this.a * r + this.c * i + this.tx),
              (e.y = this.b * r + this.d * i + this.ty),
              e
            );
          }),
          (i.prototype.applyInverse = function (t, e) {
            e = e || new n();
            var r = 1 / (this.a * this.d + this.c * -this.b),
              i = t.x,
              o = t.y;
            return (
              (e.x =
                this.d * r * i +
                -this.c * r * o +
                (this.ty * this.c - this.tx * this.d) * r),
              (e.y =
                this.a * r * o +
                -this.b * r * i +
                (-this.ty * this.a + this.tx * this.b) * r),
              e
            );
          }),
          (i.prototype.translate = function (t, e) {
            return (this.tx += t), (this.ty += e), this;
          }),
          (i.prototype.scale = function (t, e) {
            return (
              (this.a *= t),
              (this.d *= e),
              (this.c *= t),
              (this.b *= e),
              (this.tx *= t),
              (this.ty *= e),
              this
            );
          }),
          (i.prototype.rotate = function (t) {
            var e = Math.cos(t),
              r = Math.sin(t),
              i = this.a,
              n = this.c,
              o = this.tx;
            return (
              (this.a = i * e - this.b * r),
              (this.b = i * r + this.b * e),
              (this.c = n * e - this.d * r),
              (this.d = n * r + this.d * e),
              (this.tx = o * e - this.ty * r),
              (this.ty = o * r + this.ty * e),
              this
            );
          }),
          (i.prototype.append = function (t) {
            var e = this.a,
              r = this.b,
              i = this.c,
              n = this.d;
            return (
              (this.a = t.a * e + t.b * i),
              (this.b = t.a * r + t.b * n),
              (this.c = t.c * e + t.d * i),
              (this.d = t.c * r + t.d * n),
              (this.tx = t.tx * e + t.ty * i + this.tx),
              (this.ty = t.tx * r + t.ty * n + this.ty),
              this
            );
          }),
          (i.prototype.prepend = function (t) {
            var e = this.tx;
            if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
              var r = this.a,
                i = this.c;
              (this.a = r * t.a + this.b * t.c),
                (this.b = r * t.b + this.b * t.d),
                (this.c = i * t.a + this.d * t.c),
                (this.d = i * t.b + this.d * t.d);
            }
            return (
              (this.tx = e * t.a + this.ty * t.c + t.tx),
              (this.ty = e * t.b + this.ty * t.d + t.ty),
              this
            );
          }),
          (i.prototype.invert = function () {
            var t = this.a,
              e = this.b,
              r = this.c,
              i = this.d,
              n = this.tx,
              o = t * i - e * r;
            return (
              (this.a = i / o),
              (this.b = -e / o),
              (this.c = -r / o),
              (this.d = t / o),
              (this.tx = (r * this.ty - i * n) / o),
              (this.ty = -(t * this.ty - e * n) / o),
              this
            );
          }),
          (i.prototype.identity = function () {
            return (
              (this.a = 1),
              (this.b = 0),
              (this.c = 0),
              (this.d = 1),
              (this.tx = 0),
              (this.ty = 0),
              this
            );
          }),
          (i.prototype.clone = function () {
            var t = new i();
            return (
              (t.a = this.a),
              (t.b = this.b),
              (t.c = this.c),
              (t.d = this.d),
              (t.tx = this.tx),
              (t.ty = this.ty),
              t
            );
          }),
          (i.prototype.copy = function (t) {
            return (
              (t.a = this.a),
              (t.b = this.b),
              (t.c = this.c),
              (t.d = this.d),
              (t.tx = this.tx),
              (t.ty = this.ty),
              t
            );
          }),
          (i.IDENTITY = new i()),
          (i.TEMP_MATRIX = new i());
      },
      { "./Point": 24 },
    ],
    24: [
      function (t, e, r) {
        function i(t, e) {
          (this.x = t || 0), (this.y = e || 0);
        }
        (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.clone = function () {
            return new i(this.x, this.y);
          }),
          (i.prototype.copy = function (t) {
            this.set(t.x, t.y);
          }),
          (i.prototype.equals = function (t) {
            return t.x === this.x && t.y === this.y;
          }),
          (i.prototype.set = function (t, e) {
            (this.x = t || 0), (this.y = e || (0 !== e ? this.x : 0));
          });
      },
      {},
    ],
    25: [
      function (t, e, r) {
        e.exports = {
          Point: t("./Point"),
          Matrix: t("./Matrix"),
          Circle: t("./shapes/Circle"),
          Ellipse: t("./shapes/Ellipse"),
          Polygon: t("./shapes/Polygon"),
          Rectangle: t("./shapes/Rectangle"),
          RoundedRectangle: t("./shapes/RoundedRectangle"),
        };
      },
      {
        "./Matrix": 23,
        "./Point": 24,
        "./shapes/Circle": 26,
        "./shapes/Ellipse": 27,
        "./shapes/Polygon": 28,
        "./shapes/Rectangle": 29,
        "./shapes/RoundedRectangle": 30,
      },
    ],
    26: [
      function (t, e, r) {
        function i(t, e, r) {
          (this.x = t || 0),
            (this.y = e || 0),
            (this.radius = r || 0),
            (this.type = o.SHAPES.CIRC);
        }
        var n = t("./Rectangle"),
          o = t("../../const");
        (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.clone = function () {
            return new i(this.x, this.y, this.radius);
          }),
          (i.prototype.contains = function (t, e) {
            if (this.radius <= 0) return !1;
            var r = this.x - t,
              i = this.y - e,
              n = this.radius * this.radius;
            return (r *= r), (i *= i), n >= r + i;
          }),
          (i.prototype.getBounds = function () {
            return new n(
              this.x - this.radius,
              this.y - this.radius,
              2 * this.radius,
              2 * this.radius
            );
          });
      },
      { "../../const": 15, "./Rectangle": 29 },
    ],
    27: [
      function (t, e, r) {
        function i(t, e, r, i) {
          (this.x = t || 0),
            (this.y = e || 0),
            (this.width = r || 0),
            (this.height = i || 0),
            (this.type = o.SHAPES.ELIP);
        }
        var n = t("./Rectangle"),
          o = t("../../const");
        (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.clone = function () {
            return new i(this.x, this.y, this.width, this.height);
          }),
          (i.prototype.contains = function (t, e) {
            if (this.width <= 0 || this.height <= 0) return !1;
            var r = (t - this.x) / this.width,
              i = (e - this.y) / this.height;
            return (r *= r), (i *= i), 1 >= r + i;
          }),
          (i.prototype.getBounds = function () {
            return new n(
              this.x - this.width,
              this.y - this.height,
              this.width,
              this.height
            );
          });
      },
      { "../../const": 15, "./Rectangle": 29 },
    ],
    28: [
      function (t, e, r) {
        function i(t) {
          var e = t;
          if (!Array.isArray(e)) {
            e = new Array(arguments.length);
            for (var r = 0; r < e.length; ++r) e[r] = arguments[r];
          }
          if (e[0] instanceof n) {
            for (var i = [], s = 0, a = e.length; a > s; s++)
              i.push(e[s].x, e[s].y);
            e = i;
          }
          (this.closed = !0), (this.points = e), (this.type = o.SHAPES.POLY);
        }
        var n = t("../Point"),
          o = t("../../const");
        (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.clone = function () {
            return new i(this.points.slice());
          }),
          (i.prototype.contains = function (t, e) {
            for (
              var r = !1, i = this.points.length / 2, n = 0, o = i - 1;
              i > n;
              o = n++
            ) {
              var s = this.points[2 * n],
                a = this.points[2 * n + 1],
                h = this.points[2 * o],
                l = this.points[2 * o + 1],
                u = a > e != l > e && ((h - s) * (e - a)) / (l - a) + s > t;
              u && (r = !r);
            }
            return r;
          });
      },
      { "../../const": 15, "../Point": 24 },
    ],
    29: [
      function (t, e, r) {
        function i(t, e, r, i) {
          (this.x = t || 0),
            (this.y = e || 0),
            (this.width = r || 0),
            (this.height = i || 0),
            (this.type = n.SHAPES.RECT);
        }
        var n = t("../../const");
        (i.prototype.constructor = i),
          (e.exports = i),
          (i.EMPTY = new i(0, 0, 0, 0)),
          (i.prototype.clone = function () {
            return new i(this.x, this.y, this.width, this.height);
          }),
          (i.prototype.contains = function (t, e) {
            return this.width <= 0 || this.height <= 0
              ? !1
              : t >= this.x &&
                t < this.x + this.width &&
                e >= this.y &&
                e < this.y + this.height
              ? !0
              : !1;
          });
      },
      { "../../const": 15 },
    ],
    30: [
      function (t, e, r) {
        function i(t, e, r, i, o) {
          (this.x = t || 0),
            (this.y = e || 0),
            (this.width = r || 0),
            (this.height = i || 0),
            (this.radius = o || 20),
            (this.type = n.SHAPES.RREC);
        }
        var n = t("../../const");
        (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.clone = function () {
            return new i(this.x, this.y, this.width, this.height, this.radius);
          }),
          (i.prototype.contains = function (t, e) {
            return this.width <= 0 || this.height <= 0
              ? !1
              : t >= this.x &&
                t <= this.x + this.width &&
                e >= this.y &&
                e <= this.y + this.height
              ? !0
              : !1;
          });
      },
      { "../../const": 15 },
    ],
    31: [
      function (t, e, r) {
        function i(t, e) {
          n.call(this),
            (this._properties = [!1, !0, !1, !1, !1]),
            (this._size = t || 15e3),
            (this._buffers = null),
            (this._updateStatic = !1),
            (this.interactiveChildren = !1),
            (this.blendMode = o.BLEND_MODES.NORMAL),
            (this.roundPixels = !0),
            this.setProperties(e);
        }
        var n = t("../display/Container"),
          o = t("../const");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.setProperties = function (t) {
            t &&
              ((this._properties[0] =
                "scale" in t ? !!t.scale : this._properties[0]),
              (this._properties[1] =
                "position" in t ? !!t.position : this._properties[1]),
              (this._properties[2] =
                "rotation" in t ? !!t.rotation : this._properties[2]),
              (this._properties[3] =
                "uvs" in t ? !!t.uvs : this._properties[3]),
              (this._properties[4] =
                "alpha" in t ? !!t.alpha : this._properties[4]));
          }),
          (i.prototype.updateTransform = function () {
            this.displayObjectUpdateTransform();
          }),
          (i.prototype.renderWebGL = function (t) {
            this.visible &&
              !(this.worldAlpha <= 0) &&
              this.children.length &&
              this.renderable &&
              (t.setObjectRenderer(t.plugins.particle),
              t.plugins.particle.render(this));
          }),
          (i.prototype.addChildAt = function (t, e) {
            if (t === this) return t;
            if (e >= 0 && e <= this.children.length)
              return (
                t.parent && t.parent.removeChild(t),
                (t.parent = this),
                this.children.splice(e, 0, t),
                (this._updateStatic = !0),
                t
              );
            throw new Error(
              t +
                "addChildAt: The index " +
                e +
                " supplied is out of bounds " +
                this.children.length
            );
          }),
          (i.prototype.removeChildAt = function (t) {
            var e = this.getChildAt(t);
            return (
              (e.parent = null),
              this.children.splice(t, 1),
              (this._updateStatic = !0),
              e
            );
          }),
          (i.prototype.renderCanvas = function (t) {
            if (
              this.visible &&
              !(this.worldAlpha <= 0) &&
              this.children.length &&
              this.renderable
            ) {
              var e = t.context,
                r = this.worldTransform,
                i = !0,
                n = 0,
                o = 0,
                s = 0,
                a = 0;
              (e.globalAlpha = this.worldAlpha),
                this.displayObjectUpdateTransform();
              for (var h = 0; h < this.children.length; ++h) {
                var l = this.children[h];
                if (l.visible) {
                  var u = l.texture.frame;
                  if (
                    ((e.globalAlpha = this.worldAlpha * l.alpha),
                    l.rotation % (2 * Math.PI) === 0)
                  )
                    i &&
                      (e.setTransform(r.a, r.b, r.c, r.d, r.tx, r.ty),
                      (i = !1)),
                      (n =
                        l.anchor.x * -u.width * l.scale.x + l.position.x + 0.5),
                      (o =
                        l.anchor.y * -u.height * l.scale.y +
                        l.position.y +
                        0.5),
                      (s = u.width * l.scale.x),
                      (a = u.height * l.scale.y);
                  else {
                    i || (i = !0), l.displayObjectUpdateTransform();
                    var c = l.worldTransform;
                    t.roundPixels
                      ? e.setTransform(c.a, c.b, c.c, c.d, 0 | c.tx, 0 | c.ty)
                      : e.setTransform(c.a, c.b, c.c, c.d, c.tx, c.ty),
                      (n = l.anchor.x * -u.width + 0.5),
                      (o = l.anchor.y * -u.height + 0.5),
                      (s = u.width),
                      (a = u.height);
                  }
                  e.drawImage(
                    l.texture.baseTexture.source,
                    u.x,
                    u.y,
                    u.width,
                    u.height,
                    n,
                    o,
                    s,
                    a
                  );
                }
              }
            }
          }),
          (i.prototype.destroy = function () {
            if ((n.prototype.destroy.apply(this, arguments), this._buffers))
              for (var t = 0; t < this._buffers.length; ++t)
                this._buffers.destroy();
            (this._properties = null), (this._buffers = null);
          });
      },
      { "../const": 15, "../display/Container": 16 },
    ],
    32: [
      function (t, e, r) {
        function i(t, e, r) {
          (this.gl = t),
            (this.vertSize = 2),
            (this.vertByteSize = 4 * this.vertSize),
            (this.size = r),
            (this.dynamicProperties = []),
            (this.staticProperties = []);
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.dynamic
              ? this.dynamicProperties.push(n)
              : this.staticProperties.push(n);
          }
          (this.staticStride = 0),
            (this.staticBuffer = null),
            (this.staticData = null),
            (this.dynamicStride = 0),
            (this.dynamicBuffer = null),
            (this.dynamicData = null),
            this.initBuffers();
        }
        (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.initBuffers = function () {
            var t,
              e,
              r = this.gl,
              i = 0;
            for (
              this.dynamicStride = 0, t = 0;
              t < this.dynamicProperties.length;
              t++
            )
              (e = this.dynamicProperties[t]),
                (e.offset = i),
                (i += e.size),
                (this.dynamicStride += e.size);
            (this.dynamicData = new Float32Array(
              this.size * this.dynamicStride * 4
            )),
              (this.dynamicBuffer = r.createBuffer()),
              r.bindBuffer(r.ARRAY_BUFFER, this.dynamicBuffer),
              r.bufferData(r.ARRAY_BUFFER, this.dynamicData, r.DYNAMIC_DRAW);
            var n = 0;
            for (
              this.staticStride = 0, t = 0;
              t < this.staticProperties.length;
              t++
            )
              (e = this.staticProperties[t]),
                (e.offset = n),
                (n += e.size),
                (this.staticStride += e.size);
            (this.staticData = new Float32Array(
              this.size * this.staticStride * 4
            )),
              (this.staticBuffer = r.createBuffer()),
              r.bindBuffer(r.ARRAY_BUFFER, this.staticBuffer),
              r.bufferData(r.ARRAY_BUFFER, this.staticData, r.DYNAMIC_DRAW);
          }),
          (i.prototype.uploadDynamic = function (t, e, r) {
            for (
              var i = this.gl, n = 0;
              n < this.dynamicProperties.length;
              n++
            ) {
              var o = this.dynamicProperties[n];
              o.uploadFunction(
                t,
                e,
                r,
                this.dynamicData,
                this.dynamicStride,
                o.offset
              );
            }
            i.bindBuffer(i.ARRAY_BUFFER, this.dynamicBuffer),
              i.bufferSubData(i.ARRAY_BUFFER, 0, this.dynamicData);
          }),
          (i.prototype.uploadStatic = function (t, e, r) {
            for (
              var i = this.gl, n = 0;
              n < this.staticProperties.length;
              n++
            ) {
              var o = this.staticProperties[n];
              o.uploadFunction(
                t,
                e,
                r,
                this.staticData,
                this.staticStride,
                o.offset
              );
            }
            i.bindBuffer(i.ARRAY_BUFFER, this.staticBuffer),
              i.bufferSubData(i.ARRAY_BUFFER, 0, this.staticData);
          }),
          (i.prototype.bind = function () {
            var t,
              e,
              r = this.gl;
            for (
              r.bindBuffer(r.ARRAY_BUFFER, this.dynamicBuffer), t = 0;
              t < this.dynamicProperties.length;
              t++
            )
              (e = this.dynamicProperties[t]),
                r.vertexAttribPointer(
                  e.attribute,
                  e.size,
                  r.FLOAT,
                  !1,
                  4 * this.dynamicStride,
                  4 * e.offset
                );
            for (
              r.bindBuffer(r.ARRAY_BUFFER, this.staticBuffer), t = 0;
              t < this.staticProperties.length;
              t++
            )
              (e = this.staticProperties[t]),
                r.vertexAttribPointer(
                  e.attribute,
                  e.size,
                  r.FLOAT,
                  !1,
                  4 * this.staticStride,
                  4 * e.offset
                );
          }),
          (i.prototype.destroy = function () {
            (this.dynamicProperties = null),
              (this.dynamicData = null),
              this.gl.deleteBuffer(this.dynamicBuffer),
              (this.staticProperties = null),
              (this.staticData = null),
              this.gl.deleteBuffer(this.staticBuffer);
          });
      },
      {},
    ],
    33: [
      function (t, e, r) {
        function i(t) {
          n.call(this, t), (this.size = 15e3);
          var e = 6 * this.size;
          this.indices = new Uint16Array(e);
          for (var r = 0, i = 0; e > r; r += 6, i += 4)
            (this.indices[r + 0] = i + 0),
              (this.indices[r + 1] = i + 1),
              (this.indices[r + 2] = i + 2),
              (this.indices[r + 3] = i + 0),
              (this.indices[r + 4] = i + 2),
              (this.indices[r + 5] = i + 3);
          (this.shader = null),
            (this.indexBuffer = null),
            (this.properties = null),
            (this.tempMatrix = new h.Matrix());
        }
        var n = t("../../renderers/webgl/utils/ObjectRenderer"),
          o = t("../../renderers/webgl/WebGLRenderer"),
          s = t("./ParticleShader"),
          a = t("./ParticleBuffer"),
          h = t("../../math");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          o.registerPlugin("particle", i),
          (i.prototype.onContextChange = function () {
            var t = this.renderer.gl;
            (this.shader = new s(this.renderer.shaderManager)),
              (this.indexBuffer = t.createBuffer()),
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
              t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW),
              (this.properties = [
                {
                  attribute: this.shader.attributes.aVertexPosition,
                  dynamic: !1,
                  size: 2,
                  uploadFunction: this.uploadVertices,
                  offset: 0,
                },
                {
                  attribute: this.shader.attributes.aPositionCoord,
                  dynamic: !0,
                  size: 2,
                  uploadFunction: this.uploadPosition,
                  offset: 0,
                },
                {
                  attribute: this.shader.attributes.aRotation,
                  dynamic: !1,
                  size: 1,
                  uploadFunction: this.uploadRotation,
                  offset: 0,
                },
                {
                  attribute: this.shader.attributes.aTextureCoord,
                  dynamic: !1,
                  size: 2,
                  uploadFunction: this.uploadUvs,
                  offset: 0,
                },
                {
                  attribute: this.shader.attributes.aColor,
                  dynamic: !1,
                  size: 1,
                  uploadFunction: this.uploadAlpha,
                  offset: 0,
                },
              ]);
          }),
          (i.prototype.start = function () {
            var t = this.renderer.gl;
            t.activeTexture(t.TEXTURE0),
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            var e = this.shader;
            this.renderer.shaderManager.setShader(e);
          }),
          (i.prototype.render = function (t) {
            var e = t.children,
              r = e.length,
              i = t._size;
            if (0 !== r) {
              r > i && (r = i),
                t._buffers || (t._buffers = this.generateBuffers(t)),
                this.renderer.blendModeManager.setBlendMode(t.blendMode);
              var n = this.renderer.gl,
                o = t.worldTransform.copy(this.tempMatrix);
              o.prepend(this.renderer.currentRenderTarget.projectionMatrix),
                n.uniformMatrix3fv(
                  this.shader.uniforms.projectionMatrix._location,
                  !1,
                  o.toArray(!0)
                ),
                n.uniform1f(
                  this.shader.uniforms.uAlpha._location,
                  t.worldAlpha
                );
              var s = t._updateStatic,
                a = e[0]._texture.baseTexture;
              if (a._glTextures[n.id])
                n.bindTexture(n.TEXTURE_2D, a._glTextures[n.id]);
              else {
                if (!this.renderer.updateTexture(a)) return;
                (this.properties[0].dynamic && this.properties[3].dynamic) ||
                  (s = !0);
              }
              for (var h = 0, l = 0; r > l; l += this.size) {
                var u = r - l;
                u > this.size && (u = this.size);
                var c = t._buffers[h++];
                c.uploadDynamic(e, l, u),
                  s && c.uploadStatic(e, l, u),
                  c.bind(this.shader),
                  n.drawElements(n.TRIANGLES, 6 * u, n.UNSIGNED_SHORT, 0),
                  this.renderer.drawCount++;
              }
              t._updateStatic = !1;
            }
          }),
          (i.prototype.generateBuffers = function (t) {
            var e,
              r = this.renderer.gl,
              i = [],
              n = t._size;
            for (e = 0; e < t._properties.length; e++)
              this.properties[e].dynamic = t._properties[e];
            for (e = 0; n > e; e += this.size)
              i.push(new a(r, this.properties, this.size, this.shader));
            return i;
          }),
          (i.prototype.uploadVertices = function (t, e, r, i, n, o) {
            for (var s, a, h, l, u, c, p, d, f, v = 0; r > v; v++)
              (s = t[e + v]),
                (a = s._texture),
                (l = s.scale.x),
                (u = s.scale.y),
                a.trim
                  ? ((h = a.trim),
                    (p = h.x - s.anchor.x * h.width),
                    (c = p + a.crop.width),
                    (f = h.y - s.anchor.y * h.height),
                    (d = f + a.crop.height))
                  : ((c = a._frame.width * (1 - s.anchor.x)),
                    (p = a._frame.width * -s.anchor.x),
                    (d = a._frame.height * (1 - s.anchor.y)),
                    (f = a._frame.height * -s.anchor.y)),
                (i[o] = p * l),
                (i[o + 1] = f * u),
                (i[o + n] = c * l),
                (i[o + n + 1] = f * u),
                (i[o + 2 * n] = c * l),
                (i[o + 2 * n + 1] = d * u),
                (i[o + 3 * n] = p * l),
                (i[o + 3 * n + 1] = d * u),
                (o += 4 * n);
          }),
          (i.prototype.uploadPosition = function (t, e, r, i, n, o) {
            for (var s = 0; r > s; s++) {
              var a = t[e + s].position;
              (i[o] = a.x),
                (i[o + 1] = a.y),
                (i[o + n] = a.x),
                (i[o + n + 1] = a.y),
                (i[o + 2 * n] = a.x),
                (i[o + 2 * n + 1] = a.y),
                (i[o + 3 * n] = a.x),
                (i[o + 3 * n + 1] = a.y),
                (o += 4 * n);
            }
          }),
          (i.prototype.uploadRotation = function (t, e, r, i, n, o) {
            for (var s = 0; r > s; s++) {
              var a = t[e + s].rotation;
              (i[o] = a),
                (i[o + n] = a),
                (i[o + 2 * n] = a),
                (i[o + 3 * n] = a),
                (o += 4 * n);
            }
          }),
          (i.prototype.uploadUvs = function (t, e, r, i, n, o) {
            for (var s = 0; r > s; s++) {
              var a = t[e + s]._texture._uvs;
              a
                ? ((i[o] = a.x0),
                  (i[o + 1] = a.y0),
                  (i[o + n] = a.x1),
                  (i[o + n + 1] = a.y1),
                  (i[o + 2 * n] = a.x2),
                  (i[o + 2 * n + 1] = a.y2),
                  (i[o + 3 * n] = a.x3),
                  (i[o + 3 * n + 1] = a.y3),
                  (o += 4 * n))
                : ((i[o] = 0),
                  (i[o + 1] = 0),
                  (i[o + n] = 0),
                  (i[o + n + 1] = 0),
                  (i[o + 2 * n] = 0),
                  (i[o + 2 * n + 1] = 0),
                  (i[o + 3 * n] = 0),
                  (i[o + 3 * n + 1] = 0),
                  (o += 4 * n));
            }
          }),
          (i.prototype.uploadAlpha = function (t, e, r, i, n, o) {
            for (var s = 0; r > s; s++) {
              var a = t[e + s].alpha;
              (i[o] = a),
                (i[o + n] = a),
                (i[o + 2 * n] = a),
                (i[o + 3 * n] = a),
                (o += 4 * n);
            }
          }),
          (i.prototype.destroy = function () {
            this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer),
              n.prototype.destroy.apply(this, arguments),
              this.shader.destroy(),
              (this.indices = null),
              (this.tempMatrix = null);
          });
      },
      {
        "../../math": 25,
        "../../renderers/webgl/WebGLRenderer": 41,
        "../../renderers/webgl/utils/ObjectRenderer": 55,
        "./ParticleBuffer": 32,
        "./ParticleShader": 34,
      },
    ],
    34: [
      function (t, e, r) {
        function i(t) {
          n.call(
            this,
            t,
            [
              "attribute vec2 aVertexPosition;",
              "attribute vec2 aTextureCoord;",
              "attribute float aColor;",
              "attribute vec2 aPositionCoord;",
              "attribute vec2 aScale;",
              "attribute float aRotation;",
              "uniform mat3 projectionMatrix;",
              "varying vec2 vTextureCoord;",
              "varying float vColor;",
              "void main(void){",
              "   vec2 v = aVertexPosition;",
              "   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);",
              "   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);",
              "   v = v + aPositionCoord;",
              "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);",
              "   vTextureCoord = aTextureCoord;",
              "   vColor = aColor;",
              "}",
            ].join("\n"),
            [
              "precision lowp float;",
              "varying vec2 vTextureCoord;",
              "varying float vColor;",
              "uniform sampler2D uSampler;",
              "uniform float uAlpha;",
              "void main(void){",
              "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor * uAlpha ;",
              "}",
            ].join("\n"),
            { uAlpha: { type: "1f", value: 1 } },
            { aPositionCoord: 0, aRotation: 0 }
          );
        }
        var n = t("../../renderers/webgl/shaders/TextureShader");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i);
      },
      { "../../renderers/webgl/shaders/TextureShader": 54 },
    ],
    35: [
      function (t, e, r) {
        function i(t, e, r, i) {
          if ((a.call(this), n.sayHello(t), i))
            for (var h in s.DEFAULT_RENDER_OPTIONS)
              "undefined" == typeof i[h] &&
                (i[h] = s.DEFAULT_RENDER_OPTIONS[h]);
          else i = s.DEFAULT_RENDER_OPTIONS;
          (this.type = s.RENDERER_TYPE.UNKNOWN),
            (this.width = e || 800),
            (this.height = r || 600),
            (this.view = i.view || document.createElement("canvas")),
            (this.resolution = i.resolution),
            (this.transparent = i.transparent),
            (this.autoResize = i.autoResize || !1),
            (this.blendModes = null),
            (this.preserveDrawingBuffer = i.preserveDrawingBuffer),
            (this.clearBeforeRender = i.clearBeforeRender),
            (this._backgroundColor = 0),
            (this._backgroundColorRgb = [0, 0, 0]),
            (this._backgroundColorString = "#000000"),
            (this.backgroundColor = i.backgroundColor || this._backgroundColor),
            (this._tempDisplayObjectParent = {
              worldTransform: new o.Matrix(),
              worldAlpha: 1,
              children: [],
            }),
            (this._lastObjectRendered = this._tempDisplayObjectParent);
        }
        var n = t("../utils"),
          o = t("../math"),
          s = t("../const"),
          a = t("eventemitter3");
        (i.prototype = Object.create(a.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            backgroundColor: {
              get: function () {
                return this._backgroundColor;
              },
              set: function (t) {
                (this._backgroundColor = t),
                  (this._backgroundColorString = n.hex2string(t)),
                  n.hex2rgb(t, this._backgroundColorRgb);
              },
            },
          }),
          (i.prototype.resize = function (t, e) {
            (this.width = t * this.resolution),
              (this.height = e * this.resolution),
              (this.view.width = this.width),
              (this.view.height = this.height),
              this.autoResize &&
                ((this.view.style.width = this.width / this.resolution + "px"),
                (this.view.style.height =
                  this.height / this.resolution + "px"));
          }),
          (i.prototype.destroy = function (t) {
            t && this.view.parent && this.view.parent.removeChild(this.view),
              (this.type = s.RENDERER_TYPE.UNKNOWN),
              (this.width = 0),
              (this.height = 0),
              (this.view = null),
              (this.resolution = 0),
              (this.transparent = !1),
              (this.autoResize = !1),
              (this.blendModes = null),
              (this.preserveDrawingBuffer = !1),
              (this.clearBeforeRender = !1),
              (this._backgroundColor = 0),
              (this._backgroundColorRgb = null),
              (this._backgroundColorString = null);
          });
      },
      { "../const": 15, "../math": 25, "../utils": 68, eventemitter3: 4 },
    ],
    36: [
      function (t, e, r) {
        function i(t, e, r) {
          n.call(this, "Canvas", t, e, r),
            (this.type = h.RENDERER_TYPE.CANVAS),
            (this.context = this.view.getContext("2d", {
              alpha: this.transparent,
            })),
            (this.refresh = !0),
            (this.maskManager = new o()),
            (this.roundPixels = !1),
            (this.currentScaleMode = h.SCALE_MODES.DEFAULT),
            (this.currentBlendMode = h.BLEND_MODES.NORMAL),
            (this.smoothProperty = "imageSmoothingEnabled"),
            this.context.imageSmoothingEnabled ||
              (this.context.webkitImageSmoothingEnabled
                ? (this.smoothProperty = "webkitImageSmoothingEnabled")
                : this.context.mozImageSmoothingEnabled
                ? (this.smoothProperty = "mozImageSmoothingEnabled")
                : this.context.oImageSmoothingEnabled
                ? (this.smoothProperty = "oImageSmoothingEnabled")
                : this.context.msImageSmoothingEnabled &&
                  (this.smoothProperty = "msImageSmoothingEnabled")),
            this.initPlugins(),
            this._mapBlendModes(),
            (this._tempDisplayObjectParent = {
              worldTransform: new a.Matrix(),
              worldAlpha: 1,
            }),
            this.resize(t, e);
        }
        var n = t("../SystemRenderer"),
          o = t("./utils/CanvasMaskManager"),
          s = t("../../utils"),
          a = t("../../math"),
          h = t("../../const");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          s.pluginTarget.mixin(i),
          (i.prototype.render = function (t) {
            var e = t.parent;
            (this._lastObjectRendered = t),
              (t.parent = this._tempDisplayObjectParent),
              t.updateTransform(),
              (t.parent = e),
              this.context.setTransform(1, 0, 0, 1, 0, 0),
              (this.context.globalAlpha = 1),
              (this.currentBlendMode = h.BLEND_MODES.NORMAL),
              (this.context.globalCompositeOperation =
                this.blendModes[h.BLEND_MODES.NORMAL]),
              navigator.isCocoonJS &&
                this.view.screencanvas &&
                ((this.context.fillStyle = "black"), this.context.clear()),
              this.clearBeforeRender &&
                (this.transparent
                  ? this.context.clearRect(0, 0, this.width, this.height)
                  : ((this.context.fillStyle = this._backgroundColorString),
                    this.context.fillRect(0, 0, this.width, this.height))),
              this.renderDisplayObject(t, this.context);
          }),
          (i.prototype.destroy = function (t) {
            this.destroyPlugins(),
              n.prototype.destroy.call(this, t),
              (this.context = null),
              (this.refresh = !0),
              this.maskManager.destroy(),
              (this.maskManager = null),
              (this.roundPixels = !1),
              (this.currentScaleMode = 0),
              (this.currentBlendMode = 0),
              (this.smoothProperty = null);
          }),
          (i.prototype.renderDisplayObject = function (t, e) {
            var r = this.context;
            (this.context = e), t.renderCanvas(this), (this.context = r);
          }),
          (i.prototype._mapBlendModes = function () {
            this.blendModes ||
              ((this.blendModes = {}),
              s.canUseNewCanvasBlendModes()
                ? ((this.blendModes[h.BLEND_MODES.NORMAL] = "source-over"),
                  (this.blendModes[h.BLEND_MODES.ADD] = "lighter"),
                  (this.blendModes[h.BLEND_MODES.MULTIPLY] = "multiply"),
                  (this.blendModes[h.BLEND_MODES.SCREEN] = "screen"),
                  (this.blendModes[h.BLEND_MODES.OVERLAY] = "overlay"),
                  (this.blendModes[h.BLEND_MODES.DARKEN] = "darken"),
                  (this.blendModes[h.BLEND_MODES.LIGHTEN] = "lighten"),
                  (this.blendModes[h.BLEND_MODES.COLOR_DODGE] = "color-dodge"),
                  (this.blendModes[h.BLEND_MODES.COLOR_BURN] = "color-burn"),
                  (this.blendModes[h.BLEND_MODES.HARD_LIGHT] = "hard-light"),
                  (this.blendModes[h.BLEND_MODES.SOFT_LIGHT] = "soft-light"),
                  (this.blendModes[h.BLEND_MODES.DIFFERENCE] = "difference"),
                  (this.blendModes[h.BLEND_MODES.EXCLUSION] = "exclusion"),
                  (this.blendModes[h.BLEND_MODES.HUE] = "hue"),
                  (this.blendModes[h.BLEND_MODES.SATURATION] = "saturation"),
                  (this.blendModes[h.BLEND_MODES.COLOR] = "color"),
                  (this.blendModes[h.BLEND_MODES.LUMINOSITY] = "luminosity"))
                : ((this.blendModes[h.BLEND_MODES.NORMAL] = "source-over"),
                  (this.blendModes[h.BLEND_MODES.ADD] = "lighter"),
                  (this.blendModes[h.BLEND_MODES.MULTIPLY] = "source-over"),
                  (this.blendModes[h.BLEND_MODES.SCREEN] = "source-over"),
                  (this.blendModes[h.BLEND_MODES.OVERLAY] = "source-over"),
                  (this.blendModes[h.BLEND_MODES.DARKEN] = "source-over"),
                  (this.blendModes[h.BLEND_MODES.LIGHTEN] = "source-over"),
                  (this.blendModes[h.BLEND_MODES.COLOR_DODGE] = "source-over"),
                  (this.blendModes[h.BLEND_MODES.COLOR_BURN] = "source-over"),
                  (this.blendModes[h.BLEND_MODES.HARD_LIGHT] = "source-over"),
                  (this.blendModes[h.BLEND_MODES.SOFT_LIGHT] = "source-over"),
                  (this.blendModes[h.BLEND_MODES.DIFFERENCE] = "source-over"),
                  (this.blendModes[h.BLEND_MODES.EXCLUSION] = "source-over"),
                  (this.blendModes[h.BLEND_MODES.HUE] = "source-over"),
                  (this.blendModes[h.BLEND_MODES.SATURATION] = "source-over"),
                  (this.blendModes[h.BLEND_MODES.COLOR] = "source-over"),
                  (this.blendModes[h.BLEND_MODES.LUMINOSITY] = "source-over")));
          });
      },
      {
        "../../const": 15,
        "../../math": 25,
        "../../utils": 68,
        "../SystemRenderer": 35,
        "./utils/CanvasMaskManager": 39,
      },
    ],
    37: [
      function (t, e, r) {
        function i(t, e) {
          (this.canvas = document.createElement("canvas")),
            (this.context = this.canvas.getContext("2d")),
            (this.canvas.width = t),
            (this.canvas.height = e);
        }
        (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            width: {
              get: function () {
                return this.canvas.width;
              },
              set: function (t) {
                this.canvas.width = t;
              },
            },
            height: {
              get: function () {
                return this.canvas.height;
              },
              set: function (t) {
                this.canvas.height = t;
              },
            },
          }),
          (i.prototype.clear = function () {
            this.context.setTransform(1, 0, 0, 1, 0, 0),
              this.context.clearRect(
                0,
                0,
                this.canvas.width,
                this.canvas.height
              );
          }),
          (i.prototype.resize = function (t, e) {
            (this.canvas.width = t), (this.canvas.height = e);
          }),
          (i.prototype.destroy = function () {
            (this.context = null), (this.canvas = null);
          });
      },
      {},
    ],
    38: [
      function (t, e, r) {
        var i = t("../../../const"),
          n = (e.exports = {});
        (n.renderGraphics = function (t, e) {
          var r = t.worldAlpha;
          t.dirty && (this.updateGraphicsTint(t), (t.dirty = !1));
          for (var n = 0; n < t.graphicsData.length; n++) {
            var o = t.graphicsData[n],
              s = o.shape,
              a = o._fillTint,
              h = o._lineTint;
            if (((e.lineWidth = o.lineWidth), o.type === i.SHAPES.POLY)) {
              e.beginPath();
              var l = s.points;
              e.moveTo(l[0], l[1]);
              for (var u = 1; u < l.length / 2; u++)
                e.lineTo(l[2 * u], l[2 * u + 1]);
              s.closed && e.lineTo(l[0], l[1]),
                l[0] === l[l.length - 2] &&
                  l[1] === l[l.length - 1] &&
                  e.closePath(),
                o.fill &&
                  ((e.globalAlpha = o.fillAlpha * r),
                  (e.fillStyle =
                    "#" + ("00000" + (0 | a).toString(16)).substr(-6)),
                  e.fill()),
                o.lineWidth &&
                  ((e.globalAlpha = o.lineAlpha * r),
                  (e.strokeStyle =
                    "#" + ("00000" + (0 | h).toString(16)).substr(-6)),
                  e.stroke());
            } else if (o.type === i.SHAPES.RECT)
              (o.fillColor || 0 === o.fillColor) &&
                ((e.globalAlpha = o.fillAlpha * r),
                (e.fillStyle =
                  "#" + ("00000" + (0 | a).toString(16)).substr(-6)),
                e.fillRect(s.x, s.y, s.width, s.height)),
                o.lineWidth &&
                  ((e.globalAlpha = o.lineAlpha * r),
                  (e.strokeStyle =
                    "#" + ("00000" + (0 | h).toString(16)).substr(-6)),
                  e.strokeRect(s.x, s.y, s.width, s.height));
            else if (o.type === i.SHAPES.CIRC)
              e.beginPath(),
                e.arc(s.x, s.y, s.radius, 0, 2 * Math.PI),
                e.closePath(),
                o.fill &&
                  ((e.globalAlpha = o.fillAlpha * r),
                  (e.fillStyle =
                    "#" + ("00000" + (0 | a).toString(16)).substr(-6)),
                  e.fill()),
                o.lineWidth &&
                  ((e.globalAlpha = o.lineAlpha * r),
                  (e.strokeStyle =
                    "#" + ("00000" + (0 | h).toString(16)).substr(-6)),
                  e.stroke());
            else if (o.type === i.SHAPES.ELIP) {
              var c = 2 * s.width,
                p = 2 * s.height,
                d = s.x - c / 2,
                f = s.y - p / 2;
              e.beginPath();
              var v = 0.5522848,
                g = (c / 2) * v,
                m = (p / 2) * v,
                y = d + c,
                x = f + p,
                b = d + c / 2,
                _ = f + p / 2;
              e.moveTo(d, _),
                e.bezierCurveTo(d, _ - m, b - g, f, b, f),
                e.bezierCurveTo(b + g, f, y, _ - m, y, _),
                e.bezierCurveTo(y, _ + m, b + g, x, b, x),
                e.bezierCurveTo(b - g, x, d, _ + m, d, _),
                e.closePath(),
                o.fill &&
                  ((e.globalAlpha = o.fillAlpha * r),
                  (e.fillStyle =
                    "#" + ("00000" + (0 | a).toString(16)).substr(-6)),
                  e.fill()),
                o.lineWidth &&
                  ((e.globalAlpha = o.lineAlpha * r),
                  (e.strokeStyle =
                    "#" + ("00000" + (0 | h).toString(16)).substr(-6)),
                  e.stroke());
            } else if (o.type === i.SHAPES.RREC) {
              var T = s.x,
                E = s.y,
                S = s.width,
                C = s.height,
                w = s.radius,
                A = (Math.min(S, C) / 2) | 0;
              (w = w > A ? A : w),
                e.beginPath(),
                e.moveTo(T, E + w),
                e.lineTo(T, E + C - w),
                e.quadraticCurveTo(T, E + C, T + w, E + C),
                e.lineTo(T + S - w, E + C),
                e.quadraticCurveTo(T + S, E + C, T + S, E + C - w),
                e.lineTo(T + S, E + w),
                e.quadraticCurveTo(T + S, E, T + S - w, E),
                e.lineTo(T + w, E),
                e.quadraticCurveTo(T, E, T, E + w),
                e.closePath(),
                (o.fillColor || 0 === o.fillColor) &&
                  ((e.globalAlpha = o.fillAlpha * r),
                  (e.fillStyle =
                    "#" + ("00000" + (0 | a).toString(16)).substr(-6)),
                  e.fill()),
                o.lineWidth &&
                  ((e.globalAlpha = o.lineAlpha * r),
                  (e.strokeStyle =
                    "#" + ("00000" + (0 | h).toString(16)).substr(-6)),
                  e.stroke());
            }
          }
        }),
          (n.renderGraphicsMask = function (t, e) {
            var r = t.graphicsData.length;
            if (0 !== r) {
              e.beginPath();
              for (var n = 0; r > n; n++) {
                var o = t.graphicsData[n],
                  s = o.shape;
                if (o.type === i.SHAPES.POLY) {
                  var a = s.points;
                  e.moveTo(a[0], a[1]);
                  for (var h = 1; h < a.length / 2; h++)
                    e.lineTo(a[2 * h], a[2 * h + 1]);
                  a[0] === a[a.length - 2] &&
                    a[1] === a[a.length - 1] &&
                    e.closePath();
                } else if (o.type === i.SHAPES.RECT)
                  e.rect(s.x, s.y, s.width, s.height), e.closePath();
                else if (o.type === i.SHAPES.CIRC)
                  e.arc(s.x, s.y, s.radius, 0, 2 * Math.PI), e.closePath();
                else if (o.type === i.SHAPES.ELIP) {
                  var l = 2 * s.width,
                    u = 2 * s.height,
                    c = s.x - l / 2,
                    p = s.y - u / 2,
                    d = 0.5522848,
                    f = (l / 2) * d,
                    v = (u / 2) * d,
                    g = c + l,
                    m = p + u,
                    y = c + l / 2,
                    x = p + u / 2;
                  e.moveTo(c, x),
                    e.bezierCurveTo(c, x - v, y - f, p, y, p),
                    e.bezierCurveTo(y + f, p, g, x - v, g, x),
                    e.bezierCurveTo(g, x + v, y + f, m, y, m),
                    e.bezierCurveTo(y - f, m, c, x + v, c, x),
                    e.closePath();
                } else if (o.type === i.SHAPES.RREC) {
                  var b = s.x,
                    _ = s.y,
                    T = s.width,
                    E = s.height,
                    S = s.radius,
                    C = (Math.min(T, E) / 2) | 0;
                  (S = S > C ? C : S),
                    e.moveTo(b, _ + S),
                    e.lineTo(b, _ + E - S),
                    e.quadraticCurveTo(b, _ + E, b + S, _ + E),
                    e.lineTo(b + T - S, _ + E),
                    e.quadraticCurveTo(b + T, _ + E, b + T, _ + E - S),
                    e.lineTo(b + T, _ + S),
                    e.quadraticCurveTo(b + T, _, b + T - S, _),
                    e.lineTo(b + S, _),
                    e.quadraticCurveTo(b, _, b, _ + S),
                    e.closePath();
                }
              }
            }
          }),
          (n.updateGraphicsTint = function (t) {
            if (16777215 !== t.tint)
              for (
                var e = ((t.tint >> 16) & 255) / 255,
                  r = ((t.tint >> 8) & 255) / 255,
                  i = (255 & t.tint) / 255,
                  n = 0;
                n < t.graphicsData.length;
                n++
              ) {
                var o = t.graphicsData[n],
                  s = 0 | o.fillColor,
                  a = 0 | o.lineColor;
                (o._fillTint =
                  (((((s >> 16) & 255) / 255) * e * 255) << 16) +
                  (((((s >> 8) & 255) / 255) * r * 255) << 8) +
                  ((255 & s) / 255) * i * 255),
                  (o._lineTint =
                    (((((a >> 16) & 255) / 255) * e * 255) << 16) +
                    (((((a >> 8) & 255) / 255) * r * 255) << 8) +
                    ((255 & a) / 255) * i * 255);
              }
          });
      },
      { "../../../const": 15 },
    ],
    39: [
      function (t, e, r) {
        function i() {}
        var n = t("./CanvasGraphics");
        (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.pushMask = function (t, e) {
            e.context.save();
            var r = t.alpha,
              i = t.worldTransform,
              o = e.resolution;
            e.context.setTransform(
              i.a * o,
              i.b * o,
              i.c * o,
              i.d * o,
              i.tx * o,
              i.ty * o
            ),
              t.texture ||
                (n.renderGraphicsMask(t, e.context), e.context.clip()),
              (t.worldAlpha = r);
          }),
          (i.prototype.popMask = function (t) {
            t.context.restore();
          });
      },
      { "./CanvasGraphics": 38 },
    ],
    40: [
      function (t, e, r) {
        var i = t("../../../utils"),
          n = (e.exports = {});
        (n.getTintedTexture = function (t, e) {
          var r = t.texture;
          e = n.roundColor(e);
          var i = "#" + ("00000" + (0 | e).toString(16)).substr(-6);
          if (((r.tintCache = r.tintCache || {}), r.tintCache[i]))
            return r.tintCache[i];
          var o = n.canvas || document.createElement("canvas");
          if ((n.tintMethod(r, e, o), n.convertTintToImage)) {
            var s = new Image();
            (s.src = o.toDataURL()), (r.tintCache[i] = s);
          } else (r.tintCache[i] = o), (n.canvas = null);
          return o;
        }),
          (n.tintWithMultiply = function (t, e, r) {
            var i = r.getContext("2d"),
              n = t.crop;
            (r.width = n.width),
              (r.height = n.height),
              (i.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6)),
              i.fillRect(0, 0, n.width, n.height),
              (i.globalCompositeOperation = "multiply"),
              i.drawImage(
                t.baseTexture.source,
                n.x,
                n.y,
                n.width,
                n.height,
                0,
                0,
                n.width,
                n.height
              ),
              (i.globalCompositeOperation = "destination-atop"),
              i.drawImage(
                t.baseTexture.source,
                n.x,
                n.y,
                n.width,
                n.height,
                0,
                0,
                n.width,
                n.height
              );
          }),
          (n.tintWithOverlay = function (t, e, r) {
            var i = r.getContext("2d"),
              n = t.crop;
            (r.width = n.width),
              (r.height = n.height),
              (i.globalCompositeOperation = "copy"),
              (i.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6)),
              i.fillRect(0, 0, n.width, n.height),
              (i.globalCompositeOperation = "destination-atop"),
              i.drawImage(
                t.baseTexture.source,
                n.x,
                n.y,
                n.width,
                n.height,
                0,
                0,
                n.width,
                n.height
              );
          }),
          (n.tintWithPerPixel = function (t, e, r) {
            var n = r.getContext("2d"),
              o = t.crop;
            (r.width = o.width),
              (r.height = o.height),
              (n.globalCompositeOperation = "copy"),
              n.drawImage(
                t.baseTexture.source,
                o.x,
                o.y,
                o.width,
                o.height,
                0,
                0,
                o.width,
                o.height
              );
            for (
              var s = i.hex2rgb(e),
                a = s[0],
                h = s[1],
                l = s[2],
                u = n.getImageData(0, 0, o.width, o.height),
                c = u.data,
                p = 0;
              p < c.length;
              p += 4
            )
              (c[p + 0] *= a), (c[p + 1] *= h), (c[p + 2] *= l);
            n.putImageData(u, 0, 0);
          }),
          (n.roundColor = function (t) {
            var e = n.cacheStepsPerColorChannel,
              r = i.hex2rgb(t);
            return (
              (r[0] = Math.min(255, (r[0] / e) * e)),
              (r[1] = Math.min(255, (r[1] / e) * e)),
              (r[2] = Math.min(255, (r[2] / e) * e)),
              i.rgb2hex(r)
            );
          }),
          (n.cacheStepsPerColorChannel = 8),
          (n.convertTintToImage = !1),
          (n.canUseMultiply = i.canUseNewCanvasBlendModes()),
          (n.tintMethod = n.canUseMultiply
            ? n.tintWithMultiply
            : n.tintWithPerPixel);
      },
      { "../../../utils": 68 },
    ],
    41: [
      function (t, e, r) {
        function i(t, e, r) {
          (r = r || {}),
            n.call(this, "WebGL", t, e, r),
            (this.type = f.RENDERER_TYPE.WEBGL),
            (this.handleContextLost = this.handleContextLost.bind(this)),
            (this.handleContextRestored =
              this.handleContextRestored.bind(this)),
            this.view.addEventListener(
              "webglcontextlost",
              this.handleContextLost,
              !1
            ),
            this.view.addEventListener(
              "webglcontextrestored",
              this.handleContextRestored,
              !1
            ),
            (this._useFXAA = !!r.forceFXAA && r.antialias),
            (this._FXAAFilter = null),
            (this._contextOptions = {
              alpha: this.transparent,
              antialias: r.antialias,
              premultipliedAlpha:
                this.transparent && "notMultiplied" !== this.transparent,
              stencil: !0,
              preserveDrawingBuffer: r.preserveDrawingBuffer,
            }),
            (this.drawCount = 0),
            (this.shaderManager = new o(this)),
            (this.maskManager = new s(this)),
            (this.stencilManager = new a(this)),
            (this.filterManager = new h(this)),
            (this.blendModeManager = new l(this)),
            (this.currentRenderTarget = null),
            (this.currentRenderer = new c(this)),
            this.initPlugins(),
            this._initContext(),
            this._mapBlendModes(),
            (this._renderTargetStack = []);
        }
        var n = t("../SystemRenderer"),
          o = t("./managers/ShaderManager"),
          s = t("./managers/MaskManager"),
          a = t("./managers/StencilManager"),
          h = t("./managers/FilterManager"),
          l = t("./managers/BlendModeManager"),
          u = t("./utils/RenderTarget"),
          c = t("./utils/ObjectRenderer"),
          p = t("./filters/FXAAFilter"),
          d = t("../../utils"),
          f = t("../../const");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          d.pluginTarget.mixin(i),
          (i.glContextId = 0),
          (i.prototype._initContext = function () {
            var t =
              this.view.getContext("webgl", this._contextOptions) ||
              this.view.getContext("experimental-webgl", this._contextOptions);
            if (((this.gl = t), !t))
              throw new Error(
                "This browser does not support webGL. Try using the canvas renderer"
              );
            (this.glContextId = i.glContextId++),
              (t.id = this.glContextId),
              (t.renderer = this),
              t.disable(t.DEPTH_TEST),
              t.disable(t.CULL_FACE),
              t.enable(t.BLEND),
              (this.renderTarget = new u(
                this.gl,
                this.width,
                this.height,
                null,
                this.resolution,
                !0
              )),
              this.setRenderTarget(this.renderTarget),
              this.emit("context", t),
              this.resize(this.width, this.height),
              this._useFXAA ||
                (this._useFXAA =
                  this._contextOptions.antialias &&
                  !t.getContextAttributes().antialias),
              this._useFXAA &&
                (window.console.warn(
                  "FXAA antialiasing being used instead of native antialiasing"
                ),
                (this._FXAAFilter = [new p()]));
          }),
          (i.prototype.render = function (t) {
            if (!this.gl.isContextLost()) {
              (this.drawCount = 0),
                (this._lastObjectRendered = t),
                this._useFXAA &&
                  ((this._FXAAFilter[0].uniforms.resolution.value.x =
                    this.width),
                  (this._FXAAFilter[0].uniforms.resolution.value.y =
                    this.height),
                  (t.filterArea = this.renderTarget.size),
                  (t.filters = this._FXAAFilter));
              var e = t.parent;
              (t.parent = this._tempDisplayObjectParent),
                t.updateTransform(),
                (t.parent = e);
              var r = this.gl;
              this.setRenderTarget(this.renderTarget),
                this.clearBeforeRender &&
                  (this.transparent
                    ? r.clearColor(0, 0, 0, 0)
                    : r.clearColor(
                        this._backgroundColorRgb[0],
                        this._backgroundColorRgb[1],
                        this._backgroundColorRgb[2],
                        1
                      ),
                  r.clear(r.COLOR_BUFFER_BIT)),
                this.renderDisplayObject(t, this.renderTarget);
            }
          }),
          (i.prototype.renderDisplayObject = function (t, e, r) {
            this.setRenderTarget(e),
              r && e.clear(),
              this.filterManager.setFilterStack(e.filterStack),
              t.renderWebGL(this),
              this.currentRenderer.flush();
          }),
          (i.prototype.setObjectRenderer = function (t) {
            this.currentRenderer !== t &&
              (this.currentRenderer.stop(),
              (this.currentRenderer = t),
              this.currentRenderer.start());
          }),
          (i.prototype.setRenderTarget = function (t) {
            this.currentRenderTarget !== t &&
              ((this.currentRenderTarget = t),
              this.currentRenderTarget.activate(),
              this.stencilManager.setMaskStack(t.stencilMaskStack));
          }),
          (i.prototype.resize = function (t, e) {
            n.prototype.resize.call(this, t, e),
              this.filterManager.resize(t, e),
              this.renderTarget.resize(t, e),
              this.currentRenderTarget === this.renderTarget &&
                this.renderTarget.activate();
          }),
          (i.prototype.updateTexture = function (t) {
            if (((t = t.baseTexture || t), t.hasLoaded)) {
              var e = this.gl;
              return (
                t._glTextures[e.id] ||
                  ((t._glTextures[e.id] = e.createTexture()),
                  t.on("update", this.updateTexture, this),
                  t.on("dispose", this.destroyTexture, this)),
                e.bindTexture(e.TEXTURE_2D, t._glTextures[e.id]),
                e.pixelStorei(
                  e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                  t.premultipliedAlpha
                ),
                e.texImage2D(
                  e.TEXTURE_2D,
                  0,
                  e.RGBA,
                  e.RGBA,
                  e.UNSIGNED_BYTE,
                  t.source
                ),
                e.texParameteri(
                  e.TEXTURE_2D,
                  e.TEXTURE_MAG_FILTER,
                  t.scaleMode === f.SCALE_MODES.LINEAR ? e.LINEAR : e.NEAREST
                ),
                t.mipmap && t.isPowerOfTwo
                  ? (e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_MIN_FILTER,
                      t.scaleMode === f.SCALE_MODES.LINEAR
                        ? e.LINEAR_MIPMAP_LINEAR
                        : e.NEAREST_MIPMAP_NEAREST
                    ),
                    e.generateMipmap(e.TEXTURE_2D))
                  : e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_MIN_FILTER,
                      t.scaleMode === f.SCALE_MODES.LINEAR
                        ? e.LINEAR
                        : e.NEAREST
                    ),
                t.isPowerOfTwo
                  ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT))
                  : (e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_S,
                      e.CLAMP_TO_EDGE
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_T,
                      e.CLAMP_TO_EDGE
                    )),
                t._glTextures[e.id]
              );
            }
          }),
          (i.prototype.destroyTexture = function (t) {
            (t = t.baseTexture || t),
              t.hasLoaded &&
                t._glTextures[this.gl.id] &&
                this.gl.deleteTexture(t._glTextures[this.gl.id]);
          }),
          (i.prototype.handleContextLost = function (t) {
            t.preventDefault();
          }),
          (i.prototype.handleContextRestored = function () {
            this._initContext();
            for (var t in d.BaseTextureCache)
              d.BaseTextureCache[t]._glTextures.length = 0;
          }),
          (i.prototype.destroy = function (t) {
            this.destroyPlugins(),
              this.view.removeEventListener(
                "webglcontextlost",
                this.handleContextLost
              ),
              this.view.removeEventListener(
                "webglcontextrestored",
                this.handleContextRestored
              ),
              n.prototype.destroy.call(this, t),
              (this.uuid = 0),
              this.shaderManager.destroy(),
              this.maskManager.destroy(),
              this.stencilManager.destroy(),
              this.filterManager.destroy(),
              (this.shaderManager = null),
              (this.maskManager = null),
              (this.filterManager = null),
              (this.blendModeManager = null),
              (this.handleContextLost = null),
              (this.handleContextRestored = null),
              (this._contextOptions = null),
              (this.drawCount = 0),
              (this.gl = null);
          }),
          (i.prototype._mapBlendModes = function () {
            var t = this.gl;
            this.blendModes ||
              ((this.blendModes = {}),
              (this.blendModes[f.BLEND_MODES.NORMAL] = [
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
              ]),
              (this.blendModes[f.BLEND_MODES.ADD] = [t.SRC_ALPHA, t.DST_ALPHA]),
              (this.blendModes[f.BLEND_MODES.MULTIPLY] = [
                t.DST_COLOR,
                t.ONE_MINUS_SRC_ALPHA,
              ]),
              (this.blendModes[f.BLEND_MODES.SCREEN] = [t.SRC_ALPHA, t.ONE]),
              (this.blendModes[f.BLEND_MODES.OVERLAY] = [
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
              ]),
              (this.blendModes[f.BLEND_MODES.DARKEN] = [
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
              ]),
              (this.blendModes[f.BLEND_MODES.LIGHTEN] = [
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
              ]),
              (this.blendModes[f.BLEND_MODES.COLOR_DODGE] = [
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
              ]),
              (this.blendModes[f.BLEND_MODES.COLOR_BURN] = [
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
              ]),
              (this.blendModes[f.BLEND_MODES.HARD_LIGHT] = [
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
              ]),
              (this.blendModes[f.BLEND_MODES.SOFT_LIGHT] = [
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
              ]),
              (this.blendModes[f.BLEND_MODES.DIFFERENCE] = [
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
              ]),
              (this.blendModes[f.BLEND_MODES.EXCLUSION] = [
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
              ]),
              (this.blendModes[f.BLEND_MODES.HUE] = [
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
              ]),
              (this.blendModes[f.BLEND_MODES.SATURATION] = [
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
              ]),
              (this.blendModes[f.BLEND_MODES.COLOR] = [
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
              ]),
              (this.blendModes[f.BLEND_MODES.LUMINOSITY] = [
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
              ]));
          });
      },
      {
        "../../const": 15,
        "../../utils": 68,
        "../SystemRenderer": 35,
        "./filters/FXAAFilter": 43,
        "./managers/BlendModeManager": 45,
        "./managers/FilterManager": 46,
        "./managers/MaskManager": 47,
        "./managers/ShaderManager": 48,
        "./managers/StencilManager": 49,
        "./utils/ObjectRenderer": 55,
        "./utils/RenderTarget": 57,
      },
    ],
    42: [
      function (t, e, r) {
        function i(t, e, r) {
          (this.shaders = []),
            (this.padding = 0),
            (this.uniforms = r || {}),
            (this.vertexSrc = t || n.defaultVertexSrc),
            (this.fragmentSrc = e || n.defaultFragmentSrc);
        }
        var n = t("../shaders/TextureShader");
        (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.getShader = function (t) {
            var e = t.gl,
              r = this.shaders[e.id];
            return (
              r ||
                ((r = new n(
                  t.shaderManager,
                  this.vertexSrc,
                  this.fragmentSrc,
                  this.uniforms,
                  this.attributes
                )),
                (this.shaders[e.id] = r)),
              r
            );
          }),
          (i.prototype.applyFilter = function (t, e, r, i) {
            var n = this.getShader(t);
            t.filterManager.applyFilter(n, e, r, i);
          }),
          (i.prototype.syncUniform = function (t) {
            for (var e = 0, r = this.shaders.length; r > e; ++e)
              this.shaders[e].syncUniform(t);
          });
      },
      { "../shaders/TextureShader": 54 },
    ],
    43: [
      function (t, e, r) {
        function i() {
          n.call(
            this,
            "\nprecision mediump float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform vec2 resolution;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n            out vec2 v_rgbNW, out vec2 v_rgbNE,\n            out vec2 v_rgbSW, out vec2 v_rgbSE,\n            out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n   vResolution = resolution;\n\n   //compute the texture coords and send them to varyings\n   texcoords(aTextureCoord * resolution, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n",
            'precision lowp float;\n\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE,\n            vec2 v_rgbSW, vec2 v_rgbSE,\n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform sampler2D uSampler;\n\n\nvoid main(void){\n\n    gl_FragColor = fxaa(uSampler, vTextureCoord * vResolution, vResolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n}\n',
            { resolution: { type: "v2", value: { x: 1, y: 1 } } }
          );
        }
        var n = t("./AbstractFilter");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.applyFilter = function (t, e, r) {
            var i = t.filterManager,
              n = this.getShader(t);
            i.applyFilter(n, e, r);
          });
      },
      { "./AbstractFilter": 42 },
    ],
    44: [
      function (t, e, r) {
        function i(t) {
          var e = new o.Matrix();
          n.call(
            this,
            "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n",
            "precision lowp float;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n",
            {
              mask: { type: "sampler2D", value: t._texture },
              alpha: { type: "f", value: 1 },
              otherMatrix: { type: "mat3", value: e.toArray(!0) },
            }
          ),
            (this.maskSprite = t),
            (this.maskMatrix = e);
        }
        var n = t("./AbstractFilter"),
          o = t("../../../math");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.applyFilter = function (t, e, r) {
            var i = t.filterManager;
            (this.uniforms.mask.value = this.maskSprite._texture),
              i.calculateMappedMatrix(
                e.frame,
                this.maskSprite,
                this.maskMatrix
              ),
              (this.uniforms.otherMatrix.value = this.maskMatrix.toArray(!0)),
              (this.uniforms.alpha.value = this.maskSprite.worldAlpha);
            var n = this.getShader(t);
            i.applyFilter(n, e, r);
          }),
          Object.defineProperties(i.prototype, {
            map: {
              get: function () {
                return this.uniforms.mask.value;
              },
              set: function (t) {
                this.uniforms.mask.value = t;
              },
            },
            offset: {
              get: function () {
                return this.uniforms.offset.value;
              },
              set: function (t) {
                this.uniforms.offset.value = t;
              },
            },
          });
      },
      { "../../../math": 25, "./AbstractFilter": 42 },
    ],
    45: [
      function (t, e, r) {
        function i(t) {
          n.call(this, t), (this.currentBlendMode = 99999);
        }
        var n = t("./WebGLManager");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.setBlendMode = function (t) {
            if (this.currentBlendMode === t) return !1;
            this.currentBlendMode = t;
            var e = this.renderer.blendModes[this.currentBlendMode];
            return this.renderer.gl.blendFunc(e[0], e[1]), !0;
          });
      },
      { "./WebGLManager": 50 },
    ],
    46: [
      function (t, e, r) {
        function i(t) {
          n.call(this, t),
            (this.filterStack = []),
            this.filterStack.push({
              renderTarget: t.currentRenderTarget,
              filter: [],
              bounds: null,
            }),
            (this.texturePool = []),
            (this.textureSize = new h.Rectangle(0, 0, t.width, t.height)),
            (this.currentFrame = null);
        }
        var n = t("./WebGLManager"),
          o = t("../utils/RenderTarget"),
          s = t("../../../const"),
          a = t("../utils/Quad"),
          h = t("../../../math");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.onContextChange = function () {
            this.texturePool.length = 0;
            var t = this.renderer.gl;
            this.quad = new a(t);
          }),
          (i.prototype.setFilterStack = function (t) {
            this.filterStack = t;
          }),
          (i.prototype.pushFilter = function (t, e) {
            var r = t.filterArea ? t.filterArea.clone() : t.getBounds();
            (r.x = 0 | r.x),
              (r.y = 0 | r.y),
              (r.width = 0 | r.width),
              (r.height = 0 | r.height);
            var i = 0 | e[0].padding;
            if (
              ((r.x -= i),
              (r.y -= i),
              (r.width += 2 * i),
              (r.height += 2 * i),
              this.renderer.currentRenderTarget.transform)
            ) {
              var n = this.renderer.currentRenderTarget.transform;
              (r.x += n.tx),
                (r.y += n.ty),
                this.capFilterArea(r),
                (r.x -= n.tx),
                (r.y -= n.ty);
            } else this.capFilterArea(r);
            if (r.width > 0 && r.height > 0) {
              this.currentFrame = r;
              var o = this.getRenderTarget();
              this.renderer.setRenderTarget(o),
                o.clear(),
                this.filterStack.push({ renderTarget: o, filter: e });
            } else this.filterStack.push({ renderTarget: null, filter: e });
          }),
          (i.prototype.popFilter = function () {
            var t = this.filterStack.pop(),
              e = this.filterStack[this.filterStack.length - 1],
              r = t.renderTarget;
            if (t.renderTarget) {
              var i = e.renderTarget,
                n = this.renderer.gl;
              (this.currentFrame = r.frame),
                this.quad.map(this.textureSize, r.frame),
                n.bindBuffer(n.ARRAY_BUFFER, this.quad.vertexBuffer),
                n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, this.quad.indexBuffer);
              var o = t.filter;
              if (
                (n.vertexAttribPointer(
                  this.renderer.shaderManager.defaultShader.attributes
                    .aVertexPosition,
                  2,
                  n.FLOAT,
                  !1,
                  0,
                  0
                ),
                n.vertexAttribPointer(
                  this.renderer.shaderManager.defaultShader.attributes
                    .aTextureCoord,
                  2,
                  n.FLOAT,
                  !1,
                  0,
                  32
                ),
                n.vertexAttribPointer(
                  this.renderer.shaderManager.defaultShader.attributes.aColor,
                  4,
                  n.FLOAT,
                  !1,
                  0,
                  64
                ),
                this.renderer.blendModeManager.setBlendMode(
                  s.BLEND_MODES.NORMAL
                ),
                1 === o.length)
              )
                o[0].uniforms.dimensions &&
                  ((o[0].uniforms.dimensions.value[0] = this.renderer.width),
                  (o[0].uniforms.dimensions.value[1] = this.renderer.height),
                  (o[0].uniforms.dimensions.value[2] = this.quad.vertices[0]),
                  (o[0].uniforms.dimensions.value[3] = this.quad.vertices[5])),
                  o[0].applyFilter(this.renderer, r, i),
                  this.returnRenderTarget(r);
              else {
                for (
                  var a = r, h = this.getRenderTarget(!0), l = 0;
                  l < o.length - 1;
                  l++
                ) {
                  var u = o[l];
                  u.uniforms.dimensions &&
                    ((u.uniforms.dimensions.value[0] = this.renderer.width),
                    (u.uniforms.dimensions.value[1] = this.renderer.height),
                    (u.uniforms.dimensions.value[2] = this.quad.vertices[0]),
                    (u.uniforms.dimensions.value[3] = this.quad.vertices[5])),
                    u.applyFilter(this.renderer, a, h);
                  var c = a;
                  (a = h), (h = c);
                }
                o[o.length - 1].applyFilter(this.renderer, a, i),
                  this.returnRenderTarget(a),
                  this.returnRenderTarget(h);
              }
              return t.filter;
            }
          }),
          (i.prototype.getRenderTarget = function (t) {
            var e =
              this.texturePool.pop() ||
              new o(
                this.renderer.gl,
                this.textureSize.width,
                this.textureSize.height,
                s.SCALE_MODES.LINEAR,
                this.renderer.resolution * s.FILTER_RESOLUTION
              );
            return (e.frame = this.currentFrame), t && e.clear(!0), e;
          }),
          (i.prototype.returnRenderTarget = function (t) {
            this.texturePool.push(t);
          }),
          (i.prototype.applyFilter = function (t, e, r, i) {
            var n = this.renderer.gl;
            this.renderer.setRenderTarget(r),
              i && r.clear(),
              this.renderer.shaderManager.setShader(t),
              (t.uniforms.projectionMatrix.value =
                this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)),
              t.syncUniforms(),
              n.activeTexture(n.TEXTURE0),
              n.bindTexture(n.TEXTURE_2D, e.texture),
              n.drawElements(n.TRIANGLES, 6, n.UNSIGNED_SHORT, 0);
          }),
          (i.prototype.calculateMappedMatrix = function (t, e, r) {
            var i = e.worldTransform.copy(h.Matrix.TEMP_MATRIX),
              n = e._texture.baseTexture,
              o = r.identity(),
              s = this.textureSize.height / this.textureSize.width;
            o.translate(
              t.x / this.textureSize.width,
              t.y / this.textureSize.height
            ),
              o.scale(1, s);
            var a = this.textureSize.width / n.width,
              l = this.textureSize.height / n.height;
            return (
              (i.tx /= n.width * a),
              (i.ty /= n.width * a),
              i.invert(),
              o.prepend(i),
              o.scale(1, 1 / s),
              o.scale(a, l),
              o.translate(e.anchor.x, e.anchor.y),
              o
            );
          }),
          (i.prototype.capFilterArea = function (t) {
            t.x < 0 && ((t.width += t.x), (t.x = 0)),
              t.y < 0 && ((t.height += t.y), (t.y = 0)),
              t.x + t.width > this.textureSize.width &&
                (t.width = this.textureSize.width - t.x),
              t.y + t.height > this.textureSize.height &&
                (t.height = this.textureSize.height - t.y);
          }),
          (i.prototype.resize = function (t, e) {
            (this.textureSize.width = t), (this.textureSize.height = e);
            for (var r = 0; r < this.texturePool.length; r++)
              this.texturePool[r].resize(t, e);
          }),
          (i.prototype.destroy = function () {
            (this.filterStack = null), (this.offsetY = 0);
            for (var t = 0; t < this.texturePool.length; t++)
              this.texturePool[t].destroy();
            this.texturePool = null;
          });
      },
      {
        "../../../const": 15,
        "../../../math": 25,
        "../utils/Quad": 56,
        "../utils/RenderTarget": 57,
        "./WebGLManager": 50,
      },
    ],
    47: [
      function (t, e, r) {
        function i(t) {
          n.call(this, t),
            (this.stencilStack = []),
            (this.reverse = !0),
            (this.count = 0),
            (this.alphaMaskPool = []);
        }
        var n = t("./WebGLManager"),
          o = t("../filters/SpriteMaskFilter");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.pushMask = function (t, e) {
            e.texture ? this.pushSpriteMask(t, e) : this.pushStencilMask(t, e);
          }),
          (i.prototype.popMask = function (t, e) {
            e.texture ? this.popSpriteMask(t, e) : this.popStencilMask(t, e);
          }),
          (i.prototype.pushSpriteMask = function (t, e) {
            var r = this.alphaMaskPool.pop();
            r || (r = [new o(e)]),
              (r[0].maskSprite = e),
              this.renderer.filterManager.pushFilter(t, r);
          }),
          (i.prototype.popSpriteMask = function () {
            var t = this.renderer.filterManager.popFilter();
            this.alphaMaskPool.push(t);
          }),
          (i.prototype.pushStencilMask = function (t, e) {
            this.renderer.stencilManager.pushMask(e);
          }),
          (i.prototype.popStencilMask = function (t, e) {
            this.renderer.stencilManager.popMask(e);
          });
      },
      { "../filters/SpriteMaskFilter": 44, "./WebGLManager": 50 },
    ],
    48: [
      function (t, e, r) {
        function i(t) {
          n.call(this, t),
            (this.maxAttibs = 10),
            (this.attribState = []),
            (this.tempAttribState = []);
          for (var e = 0; e < this.maxAttibs; e++) this.attribState[e] = !1;
          (this.stack = []),
            (this._currentId = -1),
            (this.currentShader = null);
        }
        var n = t("./WebGLManager"),
          o = t("../shaders/TextureShader"),
          s = t("../shaders/ComplexPrimitiveShader"),
          a = t("../shaders/PrimitiveShader"),
          h = t("../../../utils");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          h.pluginTarget.mixin(i),
          (e.exports = i),
          (i.prototype.onContextChange = function () {
            this.initPlugins();
            var t = this.renderer.gl;
            (this.maxAttibs = t.getParameter(t.MAX_VERTEX_ATTRIBS)),
              (this.attribState = []);
            for (var e = 0; e < this.maxAttibs; e++) this.attribState[e] = !1;
            (this.defaultShader = new o(this)),
              (this.primitiveShader = new a(this)),
              (this.complexPrimitiveShader = new s(this));
          }),
          (i.prototype.setAttribs = function (t) {
            var e;
            for (e = 0; e < this.tempAttribState.length; e++)
              this.tempAttribState[e] = !1;
            for (var r in t) this.tempAttribState[t[r]] = !0;
            var i = this.renderer.gl;
            for (e = 0; e < this.attribState.length; e++)
              this.attribState[e] !== this.tempAttribState[e] &&
                ((this.attribState[e] = this.tempAttribState[e]),
                this.attribState[e]
                  ? i.enableVertexAttribArray(e)
                  : i.disableVertexAttribArray(e));
          }),
          (i.prototype.setShader = function (t) {
            return this._currentId === t.uuid
              ? !1
              : ((this._currentId = t.uuid),
                (this.currentShader = t),
                this.renderer.gl.useProgram(t.program),
                this.setAttribs(t.attributes),
                !0);
          }),
          (i.prototype.destroy = function () {
            n.prototype.destroy.call(this),
              this.destroyPlugins(),
              (this.attribState = null),
              (this.tempAttribState = null);
          });
      },
      {
        "../../../utils": 68,
        "../shaders/ComplexPrimitiveShader": 51,
        "../shaders/PrimitiveShader": 52,
        "../shaders/TextureShader": 54,
        "./WebGLManager": 50,
      },
    ],
    49: [
      function (t, e, r) {
        function i(t) {
          n.call(this, t), (this.stencilMaskStack = null);
        }
        var n = t("./WebGLManager"),
          o = t("../../../utils");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.setMaskStack = function (t) {
            this.stencilMaskStack = t;
            var e = this.renderer.gl;
            0 === t.stencilStack.length
              ? e.disable(e.STENCIL_TEST)
              : e.enable(e.STENCIL_TEST);
          }),
          (i.prototype.pushStencil = function (t, e) {
            this.renderer.currentRenderTarget.attachStencilBuffer();
            var r = this.renderer.gl,
              i = this.stencilMaskStack;
            this.bindGraphics(t, e, this.renderer),
              0 === i.stencilStack.length &&
                (r.enable(r.STENCIL_TEST),
                r.clear(r.STENCIL_BUFFER_BIT),
                (i.reverse = !0),
                (i.count = 0)),
              i.stencilStack.push(e);
            var n = i.count;
            r.colorMask(!1, !1, !1, !1),
              r.stencilFunc(r.ALWAYS, 0, 255),
              r.stencilOp(r.KEEP, r.KEEP, r.INVERT),
              1 === e.mode
                ? (r.drawElements(
                    r.TRIANGLE_FAN,
                    e.indices.length - 4,
                    r.UNSIGNED_SHORT,
                    0
                  ),
                  i.reverse
                    ? (r.stencilFunc(r.EQUAL, 255 - n, 255),
                      r.stencilOp(r.KEEP, r.KEEP, r.DECR))
                    : (r.stencilFunc(r.EQUAL, n, 255),
                      r.stencilOp(r.KEEP, r.KEEP, r.INCR)),
                  r.drawElements(
                    r.TRIANGLE_FAN,
                    4,
                    r.UNSIGNED_SHORT,
                    2 * (e.indices.length - 4)
                  ),
                  i.reverse
                    ? r.stencilFunc(r.EQUAL, 255 - (n + 1), 255)
                    : r.stencilFunc(r.EQUAL, n + 1, 255),
                  (i.reverse = !i.reverse))
                : (i.reverse
                    ? (r.stencilFunc(r.EQUAL, n, 255),
                      r.stencilOp(r.KEEP, r.KEEP, r.INCR))
                    : (r.stencilFunc(r.EQUAL, 255 - n, 255),
                      r.stencilOp(r.KEEP, r.KEEP, r.DECR)),
                  r.drawElements(
                    r.TRIANGLE_STRIP,
                    e.indices.length,
                    r.UNSIGNED_SHORT,
                    0
                  ),
                  i.reverse
                    ? r.stencilFunc(r.EQUAL, n + 1, 255)
                    : r.stencilFunc(r.EQUAL, 255 - (n + 1), 255)),
              r.colorMask(!0, !0, !0, !0),
              r.stencilOp(r.KEEP, r.KEEP, r.KEEP),
              i.count++;
          }),
          (i.prototype.bindGraphics = function (t, e) {
            this._currentGraphics = t;
            var r,
              i = this.renderer.gl;
            1 === e.mode
              ? ((r = this.renderer.shaderManager.complexPrimitiveShader),
                this.renderer.shaderManager.setShader(r),
                i.uniformMatrix3fv(
                  r.uniforms.translationMatrix._location,
                  !1,
                  t.worldTransform.toArray(!0)
                ),
                i.uniformMatrix3fv(
                  r.uniforms.projectionMatrix._location,
                  !1,
                  this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)
                ),
                i.uniform3fv(r.uniforms.tint._location, o.hex2rgb(t.tint)),
                i.uniform3fv(r.uniforms.color._location, e.color),
                i.uniform1f(r.uniforms.alpha._location, t.worldAlpha),
                i.bindBuffer(i.ARRAY_BUFFER, e.buffer),
                i.vertexAttribPointer(
                  r.attributes.aVertexPosition,
                  2,
                  i.FLOAT,
                  !1,
                  8,
                  0
                ),
                i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.indexBuffer))
              : ((r = this.renderer.shaderManager.primitiveShader),
                this.renderer.shaderManager.setShader(r),
                i.uniformMatrix3fv(
                  r.uniforms.translationMatrix._location,
                  !1,
                  t.worldTransform.toArray(!0)
                ),
                i.uniformMatrix3fv(
                  r.uniforms.projectionMatrix._location,
                  !1,
                  this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)
                ),
                i.uniform3fv(r.uniforms.tint._location, o.hex2rgb(t.tint)),
                i.uniform1f(r.uniforms.alpha._location, t.worldAlpha),
                i.bindBuffer(i.ARRAY_BUFFER, e.buffer),
                i.vertexAttribPointer(
                  r.attributes.aVertexPosition,
                  2,
                  i.FLOAT,
                  !1,
                  24,
                  0
                ),
                i.vertexAttribPointer(
                  r.attributes.aColor,
                  4,
                  i.FLOAT,
                  !1,
                  24,
                  8
                ),
                i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.indexBuffer));
          }),
          (i.prototype.popStencil = function (t, e) {
            var r = this.renderer.gl,
              i = this.stencilMaskStack;
            if ((i.stencilStack.pop(), i.count--, 0 === i.stencilStack.length))
              r.disable(r.STENCIL_TEST);
            else {
              var n = i.count;
              this.bindGraphics(t, e, this.renderer),
                r.colorMask(!1, !1, !1, !1),
                1 === e.mode
                  ? ((i.reverse = !i.reverse),
                    i.reverse
                      ? (r.stencilFunc(r.EQUAL, 255 - (n + 1), 255),
                        r.stencilOp(r.KEEP, r.KEEP, r.INCR))
                      : (r.stencilFunc(r.EQUAL, n + 1, 255),
                        r.stencilOp(r.KEEP, r.KEEP, r.DECR)),
                    r.drawElements(
                      r.TRIANGLE_FAN,
                      4,
                      r.UNSIGNED_SHORT,
                      2 * (e.indices.length - 4)
                    ),
                    r.stencilFunc(r.ALWAYS, 0, 255),
                    r.stencilOp(r.KEEP, r.KEEP, r.INVERT),
                    r.drawElements(
                      r.TRIANGLE_FAN,
                      e.indices.length - 4,
                      r.UNSIGNED_SHORT,
                      0
                    ),
                    i.reverse
                      ? r.stencilFunc(r.EQUAL, n, 255)
                      : r.stencilFunc(r.EQUAL, 255 - n, 255))
                  : (i.reverse
                      ? (r.stencilFunc(r.EQUAL, n + 1, 255),
                        r.stencilOp(r.KEEP, r.KEEP, r.DECR))
                      : (r.stencilFunc(r.EQUAL, 255 - (n + 1), 255),
                        r.stencilOp(r.KEEP, r.KEEP, r.INCR)),
                    r.drawElements(
                      r.TRIANGLE_STRIP,
                      e.indices.length,
                      r.UNSIGNED_SHORT,
                      0
                    ),
                    i.reverse
                      ? r.stencilFunc(r.EQUAL, n, 255)
                      : r.stencilFunc(r.EQUAL, 255 - n, 255)),
                r.colorMask(!0, !0, !0, !0),
                r.stencilOp(r.KEEP, r.KEEP, r.KEEP);
            }
          }),
          (i.prototype.destroy = function () {
            n.prototype.destroy.call(this),
              (this.stencilMaskStack.stencilStack = null);
          }),
          (i.prototype.pushMask = function (t) {
            this.renderer.setObjectRenderer(this.renderer.plugins.graphics),
              t.dirty &&
                this.renderer.plugins.graphics.updateGraphics(
                  t,
                  this.renderer.gl
                ),
              t._webGL[this.renderer.gl.id].data.length &&
                this.pushStencil(
                  t,
                  t._webGL[this.renderer.gl.id].data[0],
                  this.renderer
                );
          }),
          (i.prototype.popMask = function (t) {
            this.renderer.setObjectRenderer(this.renderer.plugins.graphics),
              this.popStencil(
                t,
                t._webGL[this.renderer.gl.id].data[0],
                this.renderer
              );
          });
      },
      { "../../../utils": 68, "./WebGLManager": 50 },
    ],
    50: [
      function (t, e, r) {
        function i(t) {
          (this.renderer = t),
            this.renderer.on("context", this.onContextChange, this);
        }
        (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.onContextChange = function () {}),
          (i.prototype.destroy = function () {
            this.renderer.off("context", this.onContextChange),
              (this.renderer = null);
          });
      },
      {},
    ],
    51: [
      function (t, e, r) {
        function i(t) {
          n.call(
            this,
            t,
            [
              "attribute vec2 aVertexPosition;",
              "uniform mat3 translationMatrix;",
              "uniform mat3 projectionMatrix;",
              "uniform vec3 tint;",
              "uniform float alpha;",
              "uniform vec3 color;",
              "varying vec4 vColor;",
              "void main(void){",
              "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);",
              "   vColor = vec4(color * alpha * tint, alpha);",
              "}",
            ].join("\n"),
            [
              "precision mediump float;",
              "varying vec4 vColor;",
              "void main(void){",
              "   gl_FragColor = vColor;",
              "}",
            ].join("\n"),
            {
              tint: { type: "3f", value: [0, 0, 0] },
              alpha: { type: "1f", value: 0 },
              color: { type: "3f", value: [0, 0, 0] },
              translationMatrix: { type: "mat3", value: new Float32Array(9) },
              projectionMatrix: { type: "mat3", value: new Float32Array(9) },
            },
            { aVertexPosition: 0 }
          );
        }
        var n = t("./Shader");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i);
      },
      { "./Shader": 53 },
    ],
    52: [
      function (t, e, r) {
        function i(t) {
          n.call(
            this,
            t,
            [
              "attribute vec2 aVertexPosition;",
              "attribute vec4 aColor;",
              "uniform mat3 translationMatrix;",
              "uniform mat3 projectionMatrix;",
              "uniform float alpha;",
              "uniform float flipY;",
              "uniform vec3 tint;",
              "varying vec4 vColor;",
              "void main(void){",
              "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);",
              "   vColor = aColor * vec4(tint * alpha, alpha);",
              "}",
            ].join("\n"),
            [
              "precision mediump float;",
              "varying vec4 vColor;",
              "void main(void){",
              "   gl_FragColor = vColor;",
              "}",
            ].join("\n"),
            {
              tint: { type: "3f", value: [0, 0, 0] },
              alpha: { type: "1f", value: 0 },
              translationMatrix: { type: "mat3", value: new Float32Array(9) },
              projectionMatrix: { type: "mat3", value: new Float32Array(9) },
            },
            { aVertexPosition: 0, aColor: 0 }
          );
        }
        var n = t("./Shader");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i);
      },
      { "./Shader": 53 },
    ],
    53: [
      function (t, e, r) {
        function i(t, e, r, i, o) {
          if (!e || !r)
            throw new Error(
              "Pixi.js Error. Shader requires vertexSrc and fragmentSrc"
            );
          (this.uuid = n.uuid()),
            (this.gl = t.renderer.gl),
            (this.shaderManager = t),
            (this.program = null),
            (this.uniforms = i || {}),
            (this.attributes = o || {}),
            (this.textureCount = 1),
            (this.vertexSrc = e),
            (this.fragmentSrc = r),
            this.init();
        }
        var n = t("../../../utils");
        (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.init = function () {
            this.compile(),
              this.gl.useProgram(this.program),
              this.cacheUniformLocations(Object.keys(this.uniforms)),
              this.cacheAttributeLocations(Object.keys(this.attributes));
          }),
          (i.prototype.cacheUniformLocations = function (t) {
            for (var e = 0; e < t.length; ++e)
              this.uniforms[t[e]]._location = this.gl.getUniformLocation(
                this.program,
                t[e]
              );
          }),
          (i.prototype.cacheAttributeLocations = function (t) {
            for (var e = 0; e < t.length; ++e)
              this.attributes[t[e]] = this.gl.getAttribLocation(
                this.program,
                t[e]
              );
          }),
          (i.prototype.compile = function () {
            var t = this.gl,
              e = this._glCompile(t.VERTEX_SHADER, this.vertexSrc),
              r = this._glCompile(t.FRAGMENT_SHADER, this.fragmentSrc),
              i = t.createProgram();
            return (
              t.attachShader(i, e),
              t.attachShader(i, r),
              t.linkProgram(i),
              t.getProgramParameter(i, t.LINK_STATUS) ||
                (console.error("Pixi.js Error: Could not initialize shader."),
                console.error(
                  "gl.VALIDATE_STATUS",
                  t.getProgramParameter(i, t.VALIDATE_STATUS)
                ),
                console.error("gl.getError()", t.getError()),
                "" !== t.getProgramInfoLog(i) &&
                  console.warn(
                    "Pixi.js Warning: gl.getProgramInfoLog()",
                    t.getProgramInfoLog(i)
                  ),
                t.deleteProgram(i),
                (i = null)),
              t.deleteShader(e),
              t.deleteShader(r),
              (this.program = i)
            );
          }),
          (i.prototype.syncUniform = function (t) {
            var e,
              r,
              i = t._location,
              o = t.value,
              s = this.gl;
            switch (t.type) {
              case "i":
              case "1i":
                s.uniform1i(i, o);
                break;
              case "f":
              case "1f":
                s.uniform1f(i, o);
                break;
              case "2f":
                s.uniform2f(i, o[0], o[1]);
                break;
              case "3f":
                s.uniform3f(i, o[0], o[1], o[2]);
                break;
              case "4f":
                s.uniform4f(i, o[0], o[1], o[2], o[3]);
                break;
              case "v2":
                s.uniform2f(i, o.x, o.y);
                break;
              case "v3":
                s.uniform3f(i, o.x, o.y, o.z);
                break;
              case "v4":
                s.uniform4f(i, o.x, o.y, o.z, o.w);
                break;
              case "1iv":
                s.uniform1iv(i, o);
                break;
              case "2iv":
                s.uniform2iv(i, o);
                break;
              case "3iv":
                s.uniform3iv(i, o);
                break;
              case "4iv":
                s.uniform4iv(i, o);
                break;
              case "1fv":
                s.uniform1fv(i, o);
                break;
              case "2fv":
                s.uniform2fv(i, o);
                break;
              case "3fv":
                s.uniform3fv(i, o);
                break;
              case "4fv":
                s.uniform4fv(i, o);
                break;
              case "m2":
              case "mat2":
              case "Matrix2fv":
                s.uniformMatrix2fv(i, t.transpose, o);
                break;
              case "m3":
              case "mat3":
              case "Matrix3fv":
                s.uniformMatrix3fv(i, t.transpose, o);
                break;
              case "m4":
              case "mat4":
              case "Matrix4fv":
                s.uniformMatrix4fv(i, t.transpose, o);
                break;
              case "c":
                "number" == typeof o && (o = n.hex2rgb(o)),
                  s.uniform3f(i, o[0], o[1], o[2]);
                break;
              case "iv1":
                s.uniform1iv(i, o);
                break;
              case "iv":
                s.uniform3iv(i, o);
                break;
              case "fv1":
                s.uniform1fv(i, o);
                break;
              case "fv":
                s.uniform3fv(i, o);
                break;
              case "v2v":
                for (
                  t._array || (t._array = new Float32Array(2 * o.length)),
                    e = 0,
                    r = o.length;
                  r > e;
                  ++e
                )
                  (t._array[2 * e] = o[e].x), (t._array[2 * e + 1] = o[e].y);
                s.uniform2fv(i, t._array);
                break;
              case "v3v":
                for (
                  t._array || (t._array = new Float32Array(3 * o.length)),
                    e = 0,
                    r = o.length;
                  r > e;
                  ++e
                )
                  (t._array[3 * e] = o[e].x),
                    (t._array[3 * e + 1] = o[e].y),
                    (t._array[3 * e + 2] = o[e].z);
                s.uniform3fv(i, t._array);
                break;
              case "v4v":
                for (
                  t._array || (t._array = new Float32Array(4 * o.length)),
                    e = 0,
                    r = o.length;
                  r > e;
                  ++e
                )
                  (t._array[4 * e] = o[e].x),
                    (t._array[4 * e + 1] = o[e].y),
                    (t._array[4 * e + 2] = o[e].z),
                    (t._array[4 * e + 3] = o[e].w);
                s.uniform4fv(i, t._array);
                break;
              case "t":
              case "sampler2D":
                if (!t.value || !t.value.baseTexture.hasLoaded) break;
                s.activeTexture(s["TEXTURE" + this.textureCount]);
                var a = t.value.baseTexture._glTextures[s.id];
                a || this.initSampler2D(t),
                  s.bindTexture(s.TEXTURE_2D, a),
                  s.uniform1i(t._location, this.textureCount),
                  this.textureCount++;
                break;
              default:
                console.warn(
                  "Pixi.js Shader Warning: Unknown uniform type: " + t.type
                );
            }
          }),
          (i.prototype.syncUniforms = function () {
            this.textureCount = 1;
            for (var t in this.uniforms) this.syncUniform(this.uniforms[t]);
          }),
          (i.prototype.initSampler2D = function (t) {
            var e = this.gl,
              r = t.value.baseTexture;
            if (r.hasLoaded)
              if (t.textureData) {
                var i = t.textureData;
                (r._glTextures[e.id] = e.createTexture()),
                  e.bindTexture(e.TEXTURE_2D, r._glTextures[e.id]),
                  e.pixelStorei(
                    e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                    r.premultipliedAlpha
                  ),
                  e.texImage2D(
                    e.TEXTURE_2D,
                    0,
                    i.luminance ? e.LUMINANCE : e.RGBA,
                    e.RGBA,
                    e.UNSIGNED_BYTE,
                    r.source
                  ),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_MAG_FILTER,
                    i.magFilter ? i.magFilter : e.LINEAR
                  ),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_MIN_FILTER,
                    i.wrapS ? i.wrapS : e.CLAMP_TO_EDGE
                  ),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_WRAP_T,
                    i.wrapS ? i.wrapS : e.CLAMP_TO_EDGE
                  ),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_WRAP_S,
                    i.wrapT ? i.wrapT : e.CLAMP_TO_EDGE
                  );
              } else this.shaderManager.renderer.updateTexture(r);
          }),
          (i.prototype.destroy = function () {
            this.gl.deleteProgram(this.program),
              (this.gl = null),
              (this.uniforms = null),
              (this.attributes = null),
              (this.vertexSrc = null),
              (this.fragmentSrc = null);
          }),
          (i.prototype._glCompile = function (t, e) {
            var r = this.gl.createShader(t);
            return (
              this.gl.shaderSource(r, e),
              this.gl.compileShader(r),
              this.gl.getShaderParameter(r, this.gl.COMPILE_STATUS)
                ? r
                : (console.log(this.gl.getShaderInfoLog(r)), null)
            );
          });
      },
      { "../../../utils": 68 },
    ],
    54: [
      function (t, e, r) {
        function i(t, e, r, o, s) {
          var a = {
            uSampler: { type: "sampler2D", value: 0 },
            projectionMatrix: {
              type: "mat3",
              value: new Float32Array(1, 0, 0, 0, 1, 0, 0, 0, 1),
            },
          };
          if (o) for (var h in o) a[h] = o[h];
          var l = { aVertexPosition: 0, aTextureCoord: 0, aColor: 0 };
          if (s) for (var u in s) l[u] = s[u];
          (e = e || i.defaultVertexSrc),
            (r = r || i.defaultFragmentSrc),
            n.call(this, t, e, r, a, l);
        }
        var n = t("./Shader");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.defaultVertexSrc = [
            "precision lowp float;",
            "attribute vec2 aVertexPosition;",
            "attribute vec2 aTextureCoord;",
            "attribute vec4 aColor;",
            "uniform mat3 projectionMatrix;",
            "varying vec2 vTextureCoord;",
            "varying vec4 vColor;",
            "void main(void){",
            "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);",
            "   vTextureCoord = aTextureCoord;",
            "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);",
            "}",
          ].join("\n")),
          (i.defaultFragmentSrc = [
            "precision lowp float;",
            "varying vec2 vTextureCoord;",
            "varying vec4 vColor;",
            "uniform sampler2D uSampler;",
            "void main(void){",
            "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;",
            "}",
          ].join("\n"));
      },
      { "./Shader": 53 },
    ],
    55: [
      function (t, e, r) {
        function i(t) {
          n.call(this, t);
        }
        var n = t("../managers/WebGLManager");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.start = function () {}),
          (i.prototype.stop = function () {
            this.flush();
          }),
          (i.prototype.flush = function () {}),
          (i.prototype.render = function (t) {});
      },
      { "../managers/WebGLManager": 50 },
    ],
    56: [
      function (t, e, r) {
        function i(t) {
          (this.gl = t),
            (this.vertices = new Float32Array([
              0, 0, 200, 0, 200, 200, 0, 200,
            ])),
            (this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])),
            (this.colors = new Float32Array([
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ])),
            (this.indices = new Uint16Array([0, 1, 2, 0, 3, 2])),
            (this.vertexBuffer = t.createBuffer()),
            (this.indexBuffer = t.createBuffer()),
            t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
            t.bufferData(t.ARRAY_BUFFER, 128, t.DYNAMIC_DRAW),
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
            t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW),
            this.upload();
        }
        (i.prototype.constructor = i),
          (i.prototype.map = function (t, e) {
            var r = 0,
              i = 0;
            (this.uvs[0] = r),
              (this.uvs[1] = i),
              (this.uvs[2] = r + e.width / t.width),
              (this.uvs[3] = i),
              (this.uvs[4] = r + e.width / t.width),
              (this.uvs[5] = i + e.height / t.height),
              (this.uvs[6] = r),
              (this.uvs[7] = i + e.height / t.height),
              (r = e.x),
              (i = e.y),
              (this.vertices[0] = r),
              (this.vertices[1] = i),
              (this.vertices[2] = r + e.width),
              (this.vertices[3] = i),
              (this.vertices[4] = r + e.width),
              (this.vertices[5] = i + e.height),
              (this.vertices[6] = r),
              (this.vertices[7] = i + e.height),
              this.upload();
          }),
          (i.prototype.upload = function () {
            var t = this.gl;
            t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
              t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertices),
              t.bufferSubData(t.ARRAY_BUFFER, 32, this.uvs),
              t.bufferSubData(t.ARRAY_BUFFER, 64, this.colors);
          }),
          (e.exports = i);
      },
      {},
    ],
    57: [
      function (t, e, r) {
        var i = t("../../../math"),
          n = t("../../../utils"),
          o = t("../../../const"),
          s = t("./StencilMaskStack"),
          a = function (t, e, r, a, h, l) {
            if (
              ((this.gl = t),
              (this.frameBuffer = null),
              (this.texture = null),
              (this.size = new i.Rectangle(0, 0, 1, 1)),
              (this.resolution = h || o.RESOLUTION),
              (this.projectionMatrix = new i.Matrix()),
              (this.transform = null),
              (this.frame = null),
              (this.stencilBuffer = null),
              (this.stencilMaskStack = new s()),
              (this.filterStack = [
                { renderTarget: this, filter: [], bounds: this.size },
              ]),
              (this.scaleMode = a || o.SCALE_MODES.DEFAULT),
              (this.root = l),
              !this.root)
            ) {
              (this.frameBuffer = t.createFramebuffer()),
                (this.texture = t.createTexture()),
                t.bindTexture(t.TEXTURE_2D, this.texture),
                t.texParameteri(
                  t.TEXTURE_2D,
                  t.TEXTURE_MAG_FILTER,
                  a === o.SCALE_MODES.LINEAR ? t.LINEAR : t.NEAREST
                ),
                t.texParameteri(
                  t.TEXTURE_2D,
                  t.TEXTURE_MIN_FILTER,
                  a === o.SCALE_MODES.LINEAR ? t.LINEAR : t.NEAREST
                );
              var u = n.isPowerOfTwo(e, r);
              u
                ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT),
                  t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT))
                : (t.texParameteri(
                    t.TEXTURE_2D,
                    t.TEXTURE_WRAP_S,
                    t.CLAMP_TO_EDGE
                  ),
                  t.texParameteri(
                    t.TEXTURE_2D,
                    t.TEXTURE_WRAP_T,
                    t.CLAMP_TO_EDGE
                  )),
                t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer),
                t.framebufferTexture2D(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0,
                  t.TEXTURE_2D,
                  this.texture,
                  0
                );
            }
            this.resize(e, r);
          };
        (a.prototype.constructor = a),
          (e.exports = a),
          (a.prototype.clear = function (t) {
            var e = this.gl;
            t && e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer),
              e.clearColor(0, 0, 0, 0),
              e.clear(e.COLOR_BUFFER_BIT);
          }),
          (a.prototype.attachStencilBuffer = function () {
            if (!this.stencilBuffer && !this.root) {
              var t = this.gl;
              (this.stencilBuffer = t.createRenderbuffer()),
                t.bindRenderbuffer(t.RENDERBUFFER, this.stencilBuffer),
                t.framebufferRenderbuffer(
                  t.FRAMEBUFFER,
                  t.DEPTH_STENCIL_ATTACHMENT,
                  t.RENDERBUFFER,
                  this.stencilBuffer
                ),
                t.renderbufferStorage(
                  t.RENDERBUFFER,
                  t.DEPTH_STENCIL,
                  this.size.width * this.resolution,
                  this.size.height * this.resolution
                );
            }
          }),
          (a.prototype.activate = function () {
            var t = this.gl;
            t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer);
            var e = this.frame || this.size;
            this.calculateProjection(e),
              this.transform && this.projectionMatrix.append(this.transform),
              t.viewport(
                0,
                0,
                e.width * this.resolution,
                e.height * this.resolution
              );
          }),
          (a.prototype.calculateProjection = function (t) {
            var e = this.projectionMatrix;
            e.identity(),
              this.root
                ? ((e.a = (1 / t.width) * 2),
                  (e.d = (-1 / t.height) * 2),
                  (e.tx = -1 - t.x * e.a),
                  (e.ty = 1 - t.y * e.d))
                : ((e.a = (1 / t.width) * 2),
                  (e.d = (1 / t.height) * 2),
                  (e.tx = -1 - t.x * e.a),
                  (e.ty = -1 - t.y * e.d));
          }),
          (a.prototype.resize = function (t, e) {
            if (
              ((t = 0 | t),
              (e = 0 | e),
              this.size.width !== t || this.size.height !== e)
            ) {
              if (((this.size.width = t), (this.size.height = e), !this.root)) {
                var r = this.gl;
                r.bindTexture(r.TEXTURE_2D, this.texture),
                  r.texImage2D(
                    r.TEXTURE_2D,
                    0,
                    r.RGBA,
                    t * this.resolution,
                    e * this.resolution,
                    0,
                    r.RGBA,
                    r.UNSIGNED_BYTE,
                    null
                  ),
                  this.stencilBuffer &&
                    (r.bindRenderbuffer(r.RENDERBUFFER, this.stencilBuffer),
                    r.renderbufferStorage(
                      r.RENDERBUFFER,
                      r.DEPTH_STENCIL,
                      t * this.resolution,
                      e * this.resolution
                    ));
              }
              var i = this.frame || this.size;
              this.calculateProjection(i);
            }
          }),
          (a.prototype.destroy = function () {
            var t = this.gl;
            t.deleteFramebuffer(this.frameBuffer),
              t.deleteTexture(this.texture),
              (this.frameBuffer = null),
              (this.texture = null);
          });
      },
      {
        "../../../const": 15,
        "../../../math": 25,
        "../../../utils": 68,
        "./StencilMaskStack": 58,
      },
    ],
    58: [
      function (t, e, r) {
        function i() {
          (this.stencilStack = []), (this.reverse = !0), (this.count = 0);
        }
        (i.prototype.constructor = i), (e.exports = i);
      },
      {},
    ],
    59: [
      function (t, e, r) {
        function i(t) {
          s.call(this),
            (this.anchor = new n.Point()),
            (this._texture = null),
            (this._width = 0),
            (this._height = 0),
            (this.tint = 16777215),
            (this.blendMode = l.BLEND_MODES.NORMAL),
            (this.shader = null),
            (this.cachedTint = 16777215),
            (this.texture = t || o.EMPTY);
        }
        var n = t("../math"),
          o = t("../textures/Texture"),
          s = t("../display/Container"),
          a = t("../renderers/canvas/utils/CanvasTinter"),
          h = t("../utils"),
          l = t("../const"),
          u = new n.Point();
        (i.prototype = Object.create(s.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            width: {
              get: function () {
                return this.scale.x * this.texture._frame.width;
              },
              set: function (t) {
                (this.scale.x = t / this.texture._frame.width),
                  (this._width = t);
              },
            },
            height: {
              get: function () {
                return this.scale.y * this.texture._frame.height;
              },
              set: function (t) {
                (this.scale.y = t / this.texture._frame.height),
                  (this._height = t);
              },
            },
            texture: {
              get: function () {
                return this._texture;
              },
              set: function (t) {
                this._texture !== t &&
                  ((this._texture = t),
                  (this.cachedTint = 16777215),
                  t &&
                    (t.baseTexture.hasLoaded
                      ? this._onTextureUpdate()
                      : t.once("update", this._onTextureUpdate, this)));
              },
            },
          }),
          (i.prototype._onTextureUpdate = function () {
            this._width &&
              (this.scale.x = this._width / this.texture.frame.width),
              this._height &&
                (this.scale.y = this._height / this.texture.frame.height);
          }),
          (i.prototype._renderWebGL = function (t) {
            t.setObjectRenderer(t.plugins.sprite),
              t.plugins.sprite.render(this);
          }),
          (i.prototype.getBounds = function (t) {
            if (!this._currentBounds) {
              var e,
                r,
                i,
                n,
                o = this._texture._frame.width,
                s = this._texture._frame.height,
                a = o * (1 - this.anchor.x),
                h = o * -this.anchor.x,
                l = s * (1 - this.anchor.y),
                u = s * -this.anchor.y,
                c = t || this.worldTransform,
                p = c.a,
                d = c.b,
                f = c.c,
                v = c.d,
                g = c.tx,
                m = c.ty;
              if (0 === d && 0 === f)
                0 > p && (p *= -1),
                  0 > v && (v *= -1),
                  (e = p * h + g),
                  (r = p * a + g),
                  (i = v * u + m),
                  (n = v * l + m);
              else {
                var y = p * h + f * u + g,
                  x = v * u + d * h + m,
                  b = p * a + f * u + g,
                  _ = v * u + d * a + m,
                  T = p * a + f * l + g,
                  E = v * l + d * a + m,
                  S = p * h + f * l + g,
                  C = v * l + d * h + m;
                (e = y),
                  (e = e > b ? b : e),
                  (e = e > T ? T : e),
                  (e = e > S ? S : e),
                  (i = x),
                  (i = i > _ ? _ : i),
                  (i = i > E ? E : i),
                  (i = i > C ? C : i),
                  (r = y),
                  (r = b > r ? b : r),
                  (r = T > r ? T : r),
                  (r = S > r ? S : r),
                  (n = x),
                  (n = _ > n ? _ : n),
                  (n = E > n ? E : n),
                  (n = C > n ? C : n);
              }
              if (this.children.length) {
                var w = this.containerGetBounds();
                (a = w.x),
                  (h = w.x + w.width),
                  (l = w.y),
                  (u = w.y + w.height),
                  (e = a > e ? e : a),
                  (i = l > i ? i : l),
                  (r = r > h ? r : h),
                  (n = n > u ? n : u);
              }
              var A = this._bounds;
              (A.x = e),
                (A.width = r - e),
                (A.y = i),
                (A.height = n - i),
                (this._currentBounds = A);
            }
            return this._currentBounds;
          }),
          (i.prototype.getLocalBounds = function () {
            return (
              (this._bounds.x = -this._texture._frame.width * this.anchor.x),
              (this._bounds.y = -this._texture._frame.height * this.anchor.y),
              (this._bounds.width = this._texture._frame.width),
              (this._bounds.height = this._texture._frame.height),
              this._bounds
            );
          }),
          (i.prototype.containsPoint = function (t) {
            this.worldTransform.applyInverse(t, u);
            var e,
              r = this._texture._frame.width,
              i = this._texture._frame.height,
              n = -r * this.anchor.x;
            return u.x > n &&
              u.x < n + r &&
              ((e = -i * this.anchor.y), u.y > e && u.y < e + i)
              ? !0
              : !1;
          }),
          (i.prototype._renderCanvas = function (t) {
            if (
              !(
                this.texture.crop.width <= 0 || this.texture.crop.height <= 0
              ) &&
              (this.blendMode !== t.currentBlendMode &&
                ((t.currentBlendMode = this.blendMode),
                (t.context.globalCompositeOperation =
                  t.blendModes[t.currentBlendMode])),
              this.texture.valid)
            ) {
              var e,
                r,
                i,
                n,
                o = this._texture,
                s = this.worldTransform,
                h = o.baseTexture.resolution / t.resolution;
              if (
                ((t.context.globalAlpha = this.worldAlpha),
                t.smoothProperty &&
                  t.currentScaleMode !== o.baseTexture.scaleMode &&
                  ((t.currentScaleMode = o.baseTexture.scaleMode),
                  (t.context[t.smoothProperty] =
                    t.currentScaleMode === l.SCALE_MODES.LINEAR)),
                o.rotate)
              ) {
                var u = s.a,
                  c = s.b;
                (s.a = -s.c),
                  (s.b = -s.d),
                  (s.c = u),
                  (s.d = c),
                  (i = o.crop.height),
                  (n = o.crop.width),
                  (e = o.trim
                    ? o.trim.y - this.anchor.y * o.trim.height
                    : this.anchor.y * -o._frame.height),
                  (r = o.trim
                    ? o.trim.x - this.anchor.x * o.trim.width
                    : this.anchor.x * -o._frame.width);
              } else
                (i = o.crop.width),
                  (n = o.crop.height),
                  (e = o.trim
                    ? o.trim.x - this.anchor.x * o.trim.width
                    : this.anchor.x * -o._frame.width),
                  (r = o.trim
                    ? o.trim.y - this.anchor.y * o.trim.height
                    : this.anchor.y * -o._frame.height);
              t.roundPixels
                ? (t.context.setTransform(
                    s.a,
                    s.b,
                    s.c,
                    s.d,
                    (s.tx * t.resolution) | 0,
                    (s.ty * t.resolution) | 0
                  ),
                  (e = 0 | e),
                  (r = 0 | r))
                : t.context.setTransform(
                    s.a,
                    s.b,
                    s.c,
                    s.d,
                    s.tx * t.resolution,
                    s.ty * t.resolution
                  ),
                16777215 !== this.tint
                  ? (this.cachedTint !== this.tint &&
                      ((this.cachedTint = this.tint),
                      (this.tintedTexture = a.getTintedTexture(
                        this,
                        this.tint
                      ))),
                    t.context.drawImage(
                      this.tintedTexture,
                      0,
                      0,
                      i * h * t.resolution,
                      n * h * t.resolution,
                      e,
                      r,
                      i * t.resolution,
                      n * t.resolution
                    ))
                  : t.context.drawImage(
                      o.baseTexture.source,
                      o.crop.x * h,
                      o.crop.y * h,
                      i * h * t.resolution,
                      n * h * t.resolution,
                      e,
                      r,
                      i * t.resolution,
                      n * t.resolution
                    );
            }
          }),
          (i.prototype.destroy = function (t, e) {
            s.prototype.destroy.call(this),
              (this.anchor = null),
              t && this._texture.destroy(e),
              (this._texture = null),
              (this.shader = null);
          }),
          (i.fromFrame = function (t) {
            var e = h.TextureCache[t];
            if (!e)
              throw new Error(
                'The frameId "' + t + '" does not exist in the texture cache'
              );
            return new i(e);
          }),
          (i.fromImage = function (t, e, r) {
            return new i(o.fromImage(t, e, r));
          });
      },
      {
        "../const": 15,
        "../display/Container": 16,
        "../math": 25,
        "../renderers/canvas/utils/CanvasTinter": 40,
        "../textures/Texture": 64,
        "../utils": 68,
      },
    ],
    60: [
      function (t, e, r) {
        function i(t) {
          n.call(this, t),
            (this.vertSize = 5),
            (this.vertByteSize = 4 * this.vertSize),
            (this.size = s.SPRITE_BATCH_SIZE);
          var e = 4 * this.size * this.vertByteSize,
            r = 6 * this.size;
          (this.vertices = new ArrayBuffer(e)),
            (this.positions = new Float32Array(this.vertices)),
            (this.colors = new Uint32Array(this.vertices)),
            (this.indices = new Uint16Array(r)),
            (this.lastIndexCount = 0);
          for (var i = 0, o = 0; r > i; i += 6, o += 4)
            (this.indices[i + 0] = o + 0),
              (this.indices[i + 1] = o + 1),
              (this.indices[i + 2] = o + 2),
              (this.indices[i + 3] = o + 0),
              (this.indices[i + 4] = o + 2),
              (this.indices[i + 5] = o + 3);
          (this.drawing = !1),
            (this.currentBatchSize = 0),
            (this.currentBaseTexture = null),
            (this.textures = []),
            (this.blendModes = []),
            (this.shaders = []),
            (this.sprites = []),
            (this.shader = null);
        }
        var n = t("../../renderers/webgl/utils/ObjectRenderer"),
          o = t("../../renderers/webgl/WebGLRenderer"),
          s = t("../../const");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          o.registerPlugin("sprite", i),
          (i.prototype.onContextChange = function () {
            var t = this.renderer.gl;
            (this.shader = this.renderer.shaderManager.defaultShader),
              (this.vertexBuffer = t.createBuffer()),
              (this.indexBuffer = t.createBuffer()),
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
              t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW),
              t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
              t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW),
              (this.currentBlendMode = 99999);
          }),
          (i.prototype.render = function (t) {
            var e = t._texture;
            this.currentBatchSize >= this.size &&
              (this.flush(), (this.currentBaseTexture = e.baseTexture));
            var r = e._uvs;
            if (r) {
              var i,
                n,
                o,
                s,
                a = t.anchor.x,
                h = t.anchor.y;
              if (e.trim) {
                var l = e.trim;
                (n = l.x - a * l.width),
                  (i = n + e.crop.width),
                  (s = l.y - h * l.height),
                  (o = s + e.crop.height);
              } else
                (i = e._frame.width * (1 - a)),
                  (n = e._frame.width * -a),
                  (o = e._frame.height * (1 - h)),
                  (s = e._frame.height * -h);
              var u = this.currentBatchSize * this.vertByteSize,
                c = t.worldTransform,
                p = c.a,
                d = c.b,
                f = c.c,
                v = c.d,
                g = c.tx,
                m = c.ty,
                y = this.colors,
                x = this.positions;
              this.renderer.roundPixels
                ? ((x[u] = (p * n + f * s + g) | 0),
                  (x[u + 1] = (v * s + d * n + m) | 0),
                  (x[u + 5] = (p * i + f * s + g) | 0),
                  (x[u + 6] = (v * s + d * i + m) | 0),
                  (x[u + 10] = (p * i + f * o + g) | 0),
                  (x[u + 11] = (v * o + d * i + m) | 0),
                  (x[u + 15] = (p * n + f * o + g) | 0),
                  (x[u + 16] = (v * o + d * n + m) | 0))
                : ((x[u] = p * n + f * s + g),
                  (x[u + 1] = v * s + d * n + m),
                  (x[u + 5] = p * i + f * s + g),
                  (x[u + 6] = v * s + d * i + m),
                  (x[u + 10] = p * i + f * o + g),
                  (x[u + 11] = v * o + d * i + m),
                  (x[u + 15] = p * n + f * o + g),
                  (x[u + 16] = v * o + d * n + m)),
                (x[u + 2] = r.x0),
                (x[u + 3] = r.y0),
                (x[u + 7] = r.x1),
                (x[u + 8] = r.y1),
                (x[u + 12] = r.x2),
                (x[u + 13] = r.y2),
                (x[u + 17] = r.x3),
                (x[u + 18] = r.y3);
              var b = t.tint;
              (y[u + 4] =
                y[u + 9] =
                y[u + 14] =
                y[u + 19] =
                  (b >> 16) +
                  (65280 & b) +
                  ((255 & b) << 16) +
                  ((255 * t.worldAlpha) << 24)),
                (this.sprites[this.currentBatchSize++] = t);
            }
          }),
          (i.prototype.flush = function () {
            if (0 !== this.currentBatchSize) {
              var t,
                e = this.renderer.gl;
              if (this.currentBatchSize > 0.5 * this.size)
                e.bufferSubData(e.ARRAY_BUFFER, 0, this.vertices);
              else {
                var r = this.positions.subarray(
                  0,
                  this.currentBatchSize * this.vertByteSize
                );
                e.bufferSubData(e.ARRAY_BUFFER, 0, r);
              }
              for (
                var i,
                  n,
                  o,
                  s,
                  a = 0,
                  h = 0,
                  l = null,
                  u = this.renderer.blendModeManager.currentBlendMode,
                  c = null,
                  p = !1,
                  d = !1,
                  f = 0,
                  v = this.currentBatchSize;
                v > f;
                f++
              )
                (s = this.sprites[f]),
                  (i = s._texture.baseTexture),
                  (n = s.blendMode),
                  (o = s.shader || this.shader),
                  (p = u !== n),
                  (d = c !== o),
                  (l !== i || p || d) &&
                    (this.renderBatch(l, a, h),
                    (h = f),
                    (a = 0),
                    (l = i),
                    p &&
                      ((u = n), this.renderer.blendModeManager.setBlendMode(u)),
                    d &&
                      ((c = o),
                      (t = c.shaders ? c.shaders[e.id] : c),
                      t || (t = c.getShader(this.renderer)),
                      this.renderer.shaderManager.setShader(t),
                      (t.uniforms.projectionMatrix.value =
                        this.renderer.currentRenderTarget.projectionMatrix.toArray(
                          !0
                        )),
                      t.syncUniforms(),
                      e.activeTexture(e.TEXTURE0))),
                  a++;
              this.renderBatch(l, a, h), (this.currentBatchSize = 0);
            }
          }),
          (i.prototype.renderBatch = function (t, e, r) {
            if (0 !== e) {
              var i = this.renderer.gl;
              t._glTextures[i.id]
                ? i.bindTexture(i.TEXTURE_2D, t._glTextures[i.id])
                : this.renderer.updateTexture(t),
                i.drawElements(i.TRIANGLES, 6 * e, i.UNSIGNED_SHORT, 6 * r * 2),
                this.renderer.drawCount++;
            }
          }),
          (i.prototype.start = function () {
            var t = this.renderer.gl;
            t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            var e = this.vertByteSize;
            t.vertexAttribPointer(
              this.shader.attributes.aVertexPosition,
              2,
              t.FLOAT,
              !1,
              e,
              0
            ),
              t.vertexAttribPointer(
                this.shader.attributes.aTextureCoord,
                2,
                t.FLOAT,
                !1,
                e,
                8
              ),
              t.vertexAttribPointer(
                this.shader.attributes.aColor,
                4,
                t.UNSIGNED_BYTE,
                !0,
                e,
                16
              );
          }),
          (i.prototype.destroy = function () {
            this.renderer.gl.deleteBuffer(this.vertexBuffer),
              this.renderer.gl.deleteBuffer(this.indexBuffer),
              this.shader.destroy(),
              (this.renderer = null),
              (this.vertices = null),
              (this.positions = null),
              (this.colors = null),
              (this.indices = null),
              (this.vertexBuffer = null),
              (this.indexBuffer = null),
              (this.currentBaseTexture = null),
              (this.drawing = !1),
              (this.textures = null),
              (this.blendModes = null),
              (this.shaders = null),
              (this.sprites = null),
              (this.shader = null);
          });
      },
      {
        "../../const": 15,
        "../../renderers/webgl/WebGLRenderer": 41,
        "../../renderers/webgl/utils/ObjectRenderer": 55,
      },
    ],
    61: [
      function (t, e, r) {
        function i(t, e, r) {
          (this.canvas = document.createElement("canvas")),
            (this.context = this.canvas.getContext("2d")),
            (this.resolution = r || a.RESOLUTION),
            (this._text = null),
            (this._style = null);
          var i = o.fromCanvas(this.canvas);
          (i.trim = new s.Rectangle()),
            n.call(this, i),
            (this.text = t),
            (this.style = e);
        }
        var n = t("../sprites/Sprite"),
          o = t("../textures/Texture"),
          s = t("../math"),
          a = t("../const");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.fontPropertiesCache = {}),
          (i.fontPropertiesCanvas = document.createElement("canvas")),
          (i.fontPropertiesContext = i.fontPropertiesCanvas.getContext("2d")),
          Object.defineProperties(i.prototype, {
            width: {
              get: function () {
                return (
                  this.dirty && this.updateText(),
                  this.scale.x * this._texture._frame.width
                );
              },
              set: function (t) {
                (this.scale.x = t / this._texture._frame.width),
                  (this._width = t);
              },
            },
            height: {
              get: function () {
                return (
                  this.dirty && this.updateText(),
                  this.scale.y * this._texture._frame.height
                );
              },
              set: function (t) {
                (this.scale.y = t / this._texture._frame.height),
                  (this._height = t);
              },
            },
            style: {
              get: function () {
                return this._style;
              },
              set: function (t) {
                (t = t || {}),
                  (t.font = t.font || "bold 20pt Arial"),
                  (t.fill = t.fill || "black"),
                  (t.align = t.align || "left"),
                  (t.stroke = t.stroke || "black"),
                  (t.strokeThickness = t.strokeThickness || 0),
                  (t.wordWrap = t.wordWrap || !1),
                  (t.wordWrapWidth = t.wordWrapWidth || 100),
                  (t.dropShadow = t.dropShadow || !1),
                  (t.dropShadowColor = t.dropShadowColor || "#000000"),
                  (t.dropShadowAngle = t.dropShadowAngle || Math.PI / 6),
                  (t.dropShadowDistance = t.dropShadowDistance || 5),
                  (t.padding = t.padding || 0),
                  (t.textBaseline = t.textBaseline || "alphabetic"),
                  (t.lineJoin = t.lineJoin || "miter"),
                  (t.miterLimit = t.miterLimit || 10),
                  (this._style = t),
                  (this.dirty = !0);
              },
            },
            text: {
              get: function () {
                return this._text;
              },
              set: function (t) {
                (t = t.toString() || " "),
                  this._text !== t && ((this._text = t), (this.dirty = !0));
              },
            },
          }),
          (i.prototype.updateText = function () {
            var t = this._style;
            this.context.font = t.font;
            for (
              var e = t.wordWrap ? this.wordWrap(this._text) : this._text,
                r = e.split(/(?:\r\n|\r|\n)/),
                i = new Array(r.length),
                n = 0,
                o = this.determineFontProperties(t.font),
                s = 0;
              s < r.length;
              s++
            ) {
              var a = this.context.measureText(r[s]).width;
              (i[s] = a), (n = Math.max(n, a));
            }
            var h = n + t.strokeThickness;
            t.dropShadow && (h += t.dropShadowDistance),
              (this.canvas.width =
                (h + this.context.lineWidth) * this.resolution);
            var l = this.style.lineHeight || o.fontSize + t.strokeThickness,
              u = l * r.length;
            t.dropShadow && (u += t.dropShadowDistance),
              (this.canvas.height =
                (u + 2 * this._style.padding) * this.resolution),
              this.context.scale(this.resolution, this.resolution),
              navigator.isCocoonJS &&
                this.context.clearRect(
                  0,
                  0,
                  this.canvas.width,
                  this.canvas.height
                ),
              (this.context.font = t.font),
              (this.context.strokeStyle = t.stroke),
              (this.context.lineWidth = t.strokeThickness),
              (this.context.textBaseline = t.textBaseline),
              (this.context.lineJoin = t.lineJoin),
              (this.context.miterLimit = t.miterLimit);
            var c, p;
            if (t.dropShadow) {
              this.context.fillStyle = t.dropShadowColor;
              var d = Math.cos(t.dropShadowAngle) * t.dropShadowDistance,
                f = Math.sin(t.dropShadowAngle) * t.dropShadowDistance;
              for (s = 0; s < r.length; s++)
                (c = t.strokeThickness / 2),
                  (p = t.strokeThickness / 2 + s * l + o.ascent),
                  "right" === t.align
                    ? (c += n - i[s])
                    : "center" === t.align && (c += (n - i[s]) / 2),
                  t.fill &&
                    this.context.fillText(
                      r[s],
                      c + d,
                      p + f + this._style.padding
                    );
            }
            for (this.context.fillStyle = t.fill, s = 0; s < r.length; s++)
              (c = t.strokeThickness / 2),
                (p = t.strokeThickness / 2 + s * l + o.ascent),
                "right" === t.align
                  ? (c += n - i[s])
                  : "center" === t.align && (c += (n - i[s]) / 2),
                t.stroke &&
                  t.strokeThickness &&
                  this.context.strokeText(r[s], c, p + this._style.padding),
                t.fill &&
                  this.context.fillText(r[s], c, p + this._style.padding);
            this.updateTexture();
          }),
          (i.prototype.updateTexture = function () {
            var t = this._texture;
            (t.baseTexture.hasLoaded = !0),
              (t.baseTexture.resolution = this.resolution),
              (t.baseTexture.width = this.canvas.width / this.resolution),
              (t.baseTexture.height = this.canvas.height / this.resolution),
              (t.crop.width = t._frame.width =
                this.canvas.width / this.resolution),
              (t.crop.height = t._frame.height =
                this.canvas.height / this.resolution),
              (t.trim.x = 0),
              (t.trim.y = -this._style.padding),
              (t.trim.width = t._frame.width),
              (t.trim.height = t._frame.height - 2 * this._style.padding),
              (this._width = this.canvas.width / this.resolution),
              (this._height = this.canvas.height / this.resolution),
              t.baseTexture.emit("update", t.baseTexture),
              (this.dirty = !1);
          }),
          (i.prototype.renderWebGL = function (t) {
            this.dirty && this.updateText(),
              n.prototype.renderWebGL.call(this, t);
          }),
          (i.prototype._renderCanvas = function (t) {
            this.dirty && this.updateText(),
              n.prototype._renderCanvas.call(this, t);
          }),
          (i.prototype.determineFontProperties = function (t) {
            var e = i.fontPropertiesCache[t];
            if (!e) {
              e = {};
              var r = i.fontPropertiesCanvas,
                n = i.fontPropertiesContext;
              n.font = t;
              var o = Math.ceil(n.measureText("|MÃ‰q").width),
                s = Math.ceil(n.measureText("M").width),
                a = 2 * s;
              (s = (1.4 * s) | 0),
                (r.width = o),
                (r.height = a),
                (n.fillStyle = "#f00"),
                n.fillRect(0, 0, o, a),
                (n.font = t),
                (n.textBaseline = "alphabetic"),
                (n.fillStyle = "#000"),
                n.fillText("|MÃ‰q", 0, s);
              var h,
                l,
                u = n.getImageData(0, 0, o, a).data,
                c = u.length,
                p = 4 * o,
                d = 0,
                f = !1;
              for (h = 0; s > h; h++) {
                for (l = 0; p > l; l += 4)
                  if (255 !== u[d + l]) {
                    f = !0;
                    break;
                  }
                if (f) break;
                d += p;
              }
              for (e.ascent = s - h, d = c - p, f = !1, h = a; h > s; h--) {
                for (l = 0; p > l; l += 4)
                  if (255 !== u[d + l]) {
                    f = !0;
                    break;
                  }
                if (f) break;
                d -= p;
              }
              (e.descent = h - s),
                (e.fontSize = e.ascent + e.descent),
                (i.fontPropertiesCache[t] = e);
            }
            return e;
          }),
          (i.prototype.wordWrap = function (t) {
            for (
              var e = "",
                r = t.split("\n"),
                i = this._style.wordWrapWidth,
                n = 0;
              n < r.length;
              n++
            ) {
              for (var o = i, s = r[n].split(" "), a = 0; a < s.length; a++) {
                var h = this.context.measureText(s[a]).width,
                  l = h + this.context.measureText(" ").width;
                0 === a || l > o
                  ? (a > 0 && (e += "\n"), (e += s[a]), (o = i - h))
                  : ((o -= l), (e += " " + s[a]));
              }
              n < r.length - 1 && (e += "\n");
            }
            return e;
          }),
          (i.prototype.getBounds = function (t) {
            return (
              this.dirty && this.updateText(),
              n.prototype.getBounds.call(this, t)
            );
          }),
          (i.prototype.destroy = function (t) {
            (this.context = null),
              (this.canvas = null),
              (this._style = null),
              this._texture.destroy(void 0 === t ? !0 : t);
          });
      },
      {
        "../const": 15,
        "../math": 25,
        "../sprites/Sprite": 59,
        "../textures/Texture": 64,
      },
    ],
    62: [
      function (t, e, r) {
        function i(t, e, r) {
          s.call(this),
            (this.uuid = n.uuid()),
            (this.resolution = r || 1),
            (this.width = 100),
            (this.height = 100),
            (this.realWidth = 100),
            (this.realHeight = 100),
            (this.scaleMode = e || o.SCALE_MODES.DEFAULT),
            (this.hasLoaded = !1),
            (this.isLoading = !1),
            (this.source = null),
            (this.premultipliedAlpha = !0),
            (this.imageUrl = null),
            (this.isPowerOfTwo = !1),
            (this.mipmap = !1),
            (this._glTextures = []),
            t && this.loadSource(t);
        }
        var n = t("../utils"),
          o = t("../const"),
          s = t("eventemitter3");
        (i.prototype = Object.create(s.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.update = function () {
            (this.realWidth = this.source.naturalWidth || this.source.width),
              (this.realHeight =
                this.source.naturalHeight || this.source.height),
              (this.width = this.realWidth / this.resolution),
              (this.height = this.realHeight / this.resolution),
              (this.isPowerOfTwo = n.isPowerOfTwo(
                this.realWidth,
                this.realHeight
              )),
              this.emit("update", this);
          }),
          (i.prototype.loadSource = function (t) {
            var e = this.isLoading;
            if (
              ((this.hasLoaded = !1),
              (this.isLoading = !1),
              e &&
                this.source &&
                ((this.source.onload = null), (this.source.onerror = null)),
              (this.source = t),
              (this.source.complete || this.source.getContext) &&
                this.source.width &&
                this.source.height)
            )
              this._sourceLoaded();
            else if (!t.getContext) {
              this.isLoading = !0;
              var r = this;
              (t.onload = function () {
                (t.onload = null),
                  (t.onerror = null),
                  r.isLoading &&
                    ((r.isLoading = !1),
                    r._sourceLoaded(),
                    r.emit("loaded", r));
              }),
                (t.onerror = function () {
                  (t.onload = null),
                    (t.onerror = null),
                    r.isLoading && ((r.isLoading = !1), r.emit("error", r));
                }),
                t.complete &&
                  t.src &&
                  ((this.isLoading = !1),
                  (t.onload = null),
                  (t.onerror = null),
                  t.width && t.height
                    ? (this._sourceLoaded(), e && this.emit("loaded", this))
                    : e && this.emit("error", this));
            }
          }),
          (i.prototype._sourceLoaded = function () {
            (this.hasLoaded = !0), this.update();
          }),
          (i.prototype.destroy = function () {
            this.imageUrl
              ? (delete n.BaseTextureCache[this.imageUrl],
                delete n.TextureCache[this.imageUrl],
                (this.imageUrl = null),
                navigator.isCocoonJS || (this.source.src = ""))
              : this.source &&
                this.source._pixiId &&
                delete n.BaseTextureCache[this.source._pixiId],
              (this.source = null),
              this.dispose();
          }),
          (i.prototype.dispose = function () {
            this.emit("dispose", this);
          }),
          (i.prototype.updateSourceImage = function (t) {
            (this.source.src = t), this.loadSource(this.source);
          }),
          (i.fromImage = function (t, e, r) {
            var o = n.BaseTextureCache[t];
            if ((void 0 === e && 0 !== t.indexOf("data:") && (e = !0), !o)) {
              var s = new Image();
              e && (s.crossOrigin = ""),
                (o = new i(s, r)),
                (o.imageUrl = t),
                (s.src = t),
                (n.BaseTextureCache[t] = o),
                (o.resolution = n.getResolutionOfUrl(t));
            }
            return o;
          }),
          (i.fromCanvas = function (t, e) {
            t._pixiId || (t._pixiId = "canvas_" + n.uuid());
            var r = n.BaseTextureCache[t._pixiId];
            return (
              r || ((r = new i(t, e)), (n.BaseTextureCache[t._pixiId] = r)), r
            );
          });
      },
      { "../const": 15, "../utils": 68, eventemitter3: 4 },
    ],
    63: [
      function (t, e, r) {
        function i(t, e, r, i, c) {
          if (!t)
            throw new Error(
              "Unable to create RenderTexture, you must pass a renderer into the constructor."
            );
          (e = e || 100), (r = r || 100), (c = c || u.RESOLUTION);
          var p = new n();
          if (
            ((p.width = e),
            (p.height = r),
            (p.resolution = c),
            (p.scaleMode = i || u.SCALE_MODES.DEFAULT),
            (p.hasLoaded = !0),
            o.call(this, p, new l.Rectangle(0, 0, e, r)),
            (this.width = e),
            (this.height = r),
            (this.resolution = c),
            (this.render = null),
            (this.renderer = t),
            this.renderer.type === u.RENDERER_TYPE.WEBGL)
          ) {
            var d = this.renderer.gl;
            (this.textureBuffer = new s(
              d,
              this.width,
              this.height,
              p.scaleMode,
              this.resolution
            )),
              (this.baseTexture._glTextures[d.id] = this.textureBuffer.texture),
              (this.filterManager = new a(this.renderer)),
              this.filterManager.onContextChange(),
              this.filterManager.resize(e, r),
              (this.render = this.renderWebGL),
              this.renderer.currentRenderer.start(),
              this.renderer.currentRenderTarget.activate();
          } else
            (this.render = this.renderCanvas),
              (this.textureBuffer = new h(
                this.width * this.resolution,
                this.height * this.resolution
              )),
              (this.baseTexture.source = this.textureBuffer.canvas);
          (this.valid = !0), this._updateUvs();
        }
        var n = t("./BaseTexture"),
          o = t("./Texture"),
          s = t("../renderers/webgl/utils/RenderTarget"),
          a = t("../renderers/webgl/managers/FilterManager"),
          h = t("../renderers/canvas/utils/CanvasBuffer"),
          l = t("../math"),
          u = t("../const"),
          c = new l.Matrix();
        (i.prototype = Object.create(o.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.resize = function (t, e, r) {
            (t !== this.width || e !== this.height) &&
              ((this.valid = t > 0 && e > 0),
              (this.width = this._frame.width = this.crop.width = t),
              (this.height = this._frame.height = this.crop.height = e),
              r &&
                ((this.baseTexture.width = this.width),
                (this.baseTexture.height = this.height)),
              this.valid &&
                (this.textureBuffer.resize(
                  this.width * this.resolution,
                  this.height * this.resolution
                ),
                this.filterManager &&
                  this.filterManager.resize(this.width, this.height)));
          }),
          (i.prototype.clear = function () {
            this.valid &&
              (this.renderer.type === u.RENDERER_TYPE.WEBGL &&
                this.renderer.gl.bindFramebuffer(
                  this.renderer.gl.FRAMEBUFFER,
                  this.textureBuffer.frameBuffer
                ),
              this.textureBuffer.clear());
          }),
          (i.prototype.renderWebGL = function (t, e, r, i) {
            if (this.valid) {
              if (
                ((i = void 0 !== i ? i : !0),
                (this.textureBuffer.transform = e),
                this.textureBuffer.activate(),
                (t.worldAlpha = t.alpha),
                i)
              ) {
                t.worldTransform.identity(), (t.currentBounds = null);
                var n,
                  o,
                  s = t.children;
                for (n = 0, o = s.length; o > n; ++n) s[n].updateTransform();
              }
              var a = this.renderer.filterManager;
              (this.renderer.filterManager = this.filterManager),
                this.renderer.renderDisplayObject(t, this.textureBuffer, r),
                (this.renderer.filterManager = a);
            }
          }),
          (i.prototype.renderCanvas = function (t, e, r, i) {
            if (this.valid) {
              i = !!i;
              var n = t.worldTransform,
                o = c;
              o.identity(),
                e && o.append(e),
                (t.worldTransform = o),
                (t.worldAlpha = 1);
              var s,
                a,
                h = t.children;
              for (s = 0, a = h.length; a > s; ++s) h[s].updateTransform();
              r && this.textureBuffer.clear(), (t.worldTransform = n);
              var l = this.textureBuffer.context,
                u = this.renderer.resolution;
              (this.renderer.resolution = this.resolution),
                this.renderer.renderDisplayObject(t, l),
                (this.renderer.resolution = u);
            }
          }),
          (i.prototype.destroy = function () {
            o.prototype.destroy.call(this, !0),
              this.textureBuffer.destroy(),
              this.filterManager && this.filterManager.destroy(),
              (this.renderer = null);
          }),
          (i.prototype.getImage = function () {
            var t = new Image();
            return (t.src = this.getBase64()), t;
          }),
          (i.prototype.getBase64 = function () {
            return this.getCanvas().toDataURL();
          }),
          (i.prototype.getCanvas = function () {
            if (this.renderer.type === u.RENDERER_TYPE.WEBGL) {
              var t = this.renderer.gl,
                e = this.textureBuffer.size.width,
                r = this.textureBuffer.size.height,
                i = new Uint8Array(4 * e * r);
              t.bindFramebuffer(t.FRAMEBUFFER, this.textureBuffer.frameBuffer),
                t.readPixels(0, 0, e, r, t.RGBA, t.UNSIGNED_BYTE, i),
                t.bindFramebuffer(t.FRAMEBUFFER, null);
              var n = new h(e, r),
                o = n.context.getImageData(0, 0, e, r);
              return o.data.set(i), n.context.putImageData(o, 0, 0), n.canvas;
            }
            return this.textureBuffer.canvas;
          }),
          (i.prototype.getPixels = function () {
            var t, e;
            if (this.renderer.type === u.RENDERER_TYPE.WEBGL) {
              var r = this.renderer.gl;
              (t = this.textureBuffer.size.width),
                (e = this.textureBuffer.size.height);
              var i = new Uint8Array(4 * t * e);
              return (
                r.bindFramebuffer(
                  r.FRAMEBUFFER,
                  this.textureBuffer.frameBuffer
                ),
                r.readPixels(0, 0, t, e, r.RGBA, r.UNSIGNED_BYTE, i),
                r.bindFramebuffer(r.FRAMEBUFFER, null),
                i
              );
            }
            return (
              (t = this.textureBuffer.canvas.width),
              (e = this.textureBuffer.canvas.height),
              this.textureBuffer.canvas
                .getContext("2d")
                .getImageData(0, 0, t, e).data
            );
          }),
          (i.prototype.getPixel = function (t, e) {
            if (this.renderer.type === u.RENDERER_TYPE.WEBGL) {
              var r = this.renderer.gl,
                i = new Uint8Array(4);
              return (
                r.bindFramebuffer(
                  r.FRAMEBUFFER,
                  this.textureBuffer.frameBuffer
                ),
                r.readPixels(t, e, 1, 1, r.RGBA, r.UNSIGNED_BYTE, i),
                r.bindFramebuffer(r.FRAMEBUFFER, null),
                i
              );
            }
            return this.textureBuffer.canvas
              .getContext("2d")
              .getImageData(t, e, 1, 1).data;
          });
      },
      {
        "../const": 15,
        "../math": 25,
        "../renderers/canvas/utils/CanvasBuffer": 37,
        "../renderers/webgl/managers/FilterManager": 46,
        "../renderers/webgl/utils/RenderTarget": 57,
        "./BaseTexture": 62,
        "./Texture": 64,
      },
    ],
    64: [
      function (t, e, r) {
        function i(t, e, r, n, o) {
          a.call(this),
            (this.noFrame = !1),
            e || ((this.noFrame = !0), (e = new h.Rectangle(0, 0, 1, 1))),
            t instanceof i && (t = t.baseTexture),
            (this.baseTexture = t),
            (this._frame = e),
            (this.trim = n),
            (this.valid = !1),
            (this.requiresUpdate = !1),
            (this._uvs = null),
            (this.width = 0),
            (this.height = 0),
            (this.crop = r || e),
            (this.rotate = !!o),
            t.hasLoaded
              ? (this.noFrame &&
                  ((e = new h.Rectangle(0, 0, t.width, t.height)),
                  t.on("update", this.onBaseTextureUpdated, this)),
                (this.frame = e))
              : t.once("loaded", this.onBaseTextureLoaded, this);
        }
        var n = t("./BaseTexture"),
          o = t("./VideoBaseTexture"),
          s = t("./TextureUvs"),
          a = t("eventemitter3"),
          h = t("../math"),
          l = t("../utils");
        (i.prototype = Object.create(a.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            frame: {
              get: function () {
                return this._frame;
              },
              set: function (t) {
                if (
                  ((this._frame = t),
                  (this.noFrame = !1),
                  (this.width = t.width),
                  (this.height = t.height),
                  !this.trim &&
                    !this.rotate &&
                    (t.x + t.width > this.baseTexture.width ||
                      t.y + t.height > this.baseTexture.height))
                )
                  throw new Error(
                    "Texture Error: frame does not fit inside the base Texture dimensions " +
                      this
                  );
                (this.valid =
                  t && t.width && t.height && this.baseTexture.hasLoaded),
                  this.trim
                    ? ((this.width = this.trim.width),
                      (this.height = this.trim.height),
                      (this._frame.width = this.trim.width),
                      (this._frame.height = this.trim.height))
                    : (this.crop = t),
                  this.valid && this._updateUvs();
              },
            },
          }),
          (i.prototype.update = function () {
            this.baseTexture.update();
          }),
          (i.prototype.onBaseTextureLoaded = function (t) {
            (this.frame = this.noFrame
              ? new h.Rectangle(0, 0, t.width, t.height)
              : this._frame),
              this.emit("update", this);
          }),
          (i.prototype.onBaseTextureUpdated = function (t) {
            (this._frame.width = t.width),
              (this._frame.height = t.height),
              this.emit("update", this);
          }),
          (i.prototype.destroy = function (t) {
            t && this.baseTexture.destroy(),
              this.baseTexture.off("update", this.onBaseTextureUpdated),
              this.baseTexture.off("loaded", this.onBaseTextureLoaded),
              (this.valid = !1);
          }),
          (i.prototype.clone = function () {
            return new i(
              this.baseTexture,
              this.frame,
              this.crop,
              this.trim,
              this.rotate
            );
          }),
          (i.prototype._updateUvs = function () {
            this._uvs || (this._uvs = new s()),
              this._uvs.set(this.crop, this.baseTexture, this.rotate);
          }),
          (i.fromImage = function (t, e, r) {
            var o = l.TextureCache[t];
            return (
              o || ((o = new i(n.fromImage(t, e, r))), (l.TextureCache[t] = o)),
              o
            );
          }),
          (i.fromFrame = function (t) {
            var e = l.TextureCache[t];
            if (!e)
              throw new Error(
                'The frameId "' + t + '" does not exist in the texture cache'
              );
            return e;
          }),
          (i.fromCanvas = function (t, e) {
            return new i(n.fromCanvas(t, e));
          }),
          (i.fromVideo = function (t, e) {
            return "string" == typeof t
              ? i.fromVideoUrl(t, e)
              : new i(o.fromVideo(t, e));
          }),
          (i.fromVideoUrl = function (t, e) {
            return new i(o.fromUrl(t, e));
          }),
          (i.addTextureToCache = function (t, e) {
            l.TextureCache[e] = t;
          }),
          (i.removeTextureFromCache = function (t) {
            var e = l.TextureCache[t];
            return delete l.TextureCache[t], delete l.BaseTextureCache[t], e;
          }),
          (i.EMPTY = new i(new n()));
      },
      {
        "../math": 25,
        "../utils": 68,
        "./BaseTexture": 62,
        "./TextureUvs": 65,
        "./VideoBaseTexture": 66,
        eventemitter3: 4,
      },
    ],
    65: [
      function (t, e, r) {
        function i() {
          (this.x0 = 0),
            (this.y0 = 0),
            (this.x1 = 1),
            (this.y1 = 0),
            (this.x2 = 1),
            (this.y2 = 1),
            (this.x3 = 0),
            (this.y3 = 1);
        }
        (e.exports = i),
          (i.prototype.set = function (t, e, r) {
            var i = e.width,
              n = e.height;
            r
              ? ((this.x0 = (t.x + t.height) / i),
                (this.y0 = t.y / n),
                (this.x1 = (t.x + t.height) / i),
                (this.y1 = (t.y + t.width) / n),
                (this.x2 = t.x / i),
                (this.y2 = (t.y + t.width) / n),
                (this.x3 = t.x / i),
                (this.y3 = t.y / n))
              : ((this.x0 = t.x / i),
                (this.y0 = t.y / n),
                (this.x1 = (t.x + t.width) / i),
                (this.y1 = t.y / n),
                (this.x2 = (t.x + t.width) / i),
                (this.y2 = (t.y + t.height) / n),
                (this.x3 = t.x / i),
                (this.y3 = (t.y + t.height) / n));
          });
      },
      {},
    ],
    66: [
      function (t, e, r) {
        function i(t, e) {
          if (!t) throw new Error("No video source element specified.");
          (t.readyState === t.HAVE_ENOUGH_DATA ||
            t.readyState === t.HAVE_FUTURE_DATA) &&
            t.width &&
            t.height &&
            (t.complete = !0),
            o.call(this, t, e),
            (this.autoUpdate = !1),
            (this._onUpdate = this._onUpdate.bind(this)),
            (this._onCanPlay = this._onCanPlay.bind(this)),
            t.complete ||
              (t.addEventListener("canplay", this._onCanPlay),
              t.addEventListener("canplaythrough", this._onCanPlay),
              t.addEventListener("play", this._onPlayStart.bind(this)),
              t.addEventListener("pause", this._onPlayStop.bind(this))),
            (this.__loaded = !1);
        }
        function n(t, e) {
          e || (e = "video/" + t.substr(t.lastIndexOf(".") + 1));
          var r = document.createElement("source");
          return (r.src = t), (r.type = e), r;
        }
        var o = t("./BaseTexture"),
          s = t("../utils");
        (i.prototype = Object.create(o.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype._onUpdate = function () {
            this.autoUpdate &&
              (window.requestAnimationFrame(this._onUpdate), this.update());
          }),
          (i.prototype._onPlayStart = function () {
            this.autoUpdate ||
              (window.requestAnimationFrame(this._onUpdate),
              (this.autoUpdate = !0));
          }),
          (i.prototype._onPlayStop = function () {
            this.autoUpdate = !1;
          }),
          (i.prototype._onCanPlay = function () {
            (this.hasLoaded = !0),
              this.source &&
                (this.source.removeEventListener("canplay", this._onCanPlay),
                this.source.removeEventListener(
                  "canplaythrough",
                  this._onCanPlay
                ),
                (this.width = this.source.videoWidth),
                (this.height = this.source.videoHeight),
                this.source.play(),
                this.__loaded ||
                  ((this.__loaded = !0), this.emit("loaded", this)));
          }),
          (i.prototype.destroy = function () {
            this.source &&
              this.source._pixiId &&
              (delete s.BaseTextureCache[this.source._pixiId],
              delete this.source._pixiId),
              o.prototype.destroy.call(this);
          }),
          (i.fromVideo = function (t, e) {
            t._pixiId || (t._pixiId = "video_" + s.uuid());
            var r = s.BaseTextureCache[t._pixiId];
            return (
              r || ((r = new i(t, e)), (s.BaseTextureCache[t._pixiId] = r)), r
            );
          }),
          (i.fromUrl = function (t, e) {
            var r = document.createElement("video");
            if (Array.isArray(t))
              for (var o = 0; o < t.length; ++o)
                r.appendChild(n(t.src || t, t.mime));
            else r.appendChild(n(t.src || t, t.mime));
            return r.load(), r.play(), i.fromVideo(r, e);
          }),
          (i.fromUrls = i.fromUrl);
      },
      { "../utils": 68, "./BaseTexture": 62 },
    ],
    67: [
      function (t, e, r) {
        var i = (e.exports = {});
        (i.Triangulate = function (t) {
          var e = !0,
            r = t.length >> 1;
          if (3 > r) return [];
          for (var n = [], o = [], s = 0; r > s; s++) o.push(s);
          s = 0;
          for (var a = r; a > 3; ) {
            var h = o[(s + 0) % a],
              l = o[(s + 1) % a],
              u = o[(s + 2) % a],
              c = t[2 * h],
              p = t[2 * h + 1],
              d = t[2 * l],
              f = t[2 * l + 1],
              v = t[2 * u],
              g = t[2 * u + 1],
              m = !1;
            if (i._convex(c, p, d, f, v, g, e)) {
              m = !0;
              for (var y = 0; a > y; y++) {
                var x = o[y];
                if (
                  x !== h &&
                  x !== l &&
                  x !== u &&
                  i._PointInTriangle(t[2 * x], t[2 * x + 1], c, p, d, f, v, g)
                ) {
                  m = !1;
                  break;
                }
              }
            }
            if (m) n.push(h, l, u), o.splice((s + 1) % a, 1), a--, (s = 0);
            else if (s++ > 3 * a) {
              if (!e) return null;
              for (n = [], o = [], s = 0; r > s; s++) o.push(s);
              (s = 0), (a = r), (e = !1);
            }
          }
          return n.push(o[0], o[1], o[2]), n;
        }),
          (i._PointInTriangle = function (t, e, r, i, n, o, s, a) {
            var h = s - r,
              l = a - i,
              u = n - r,
              c = o - i,
              p = t - r,
              d = e - i,
              f = h * h + l * l,
              v = h * u + l * c,
              g = h * p + l * d,
              m = u * u + c * c,
              y = u * p + c * d,
              x = 1 / (f * m - v * v),
              b = (m * g - v * y) * x,
              _ = (f * y - v * g) * x;
            return b >= 0 && _ >= 0 && 1 > b + _;
          }),
          (i._convex = function (t, e, r, i, n, o, s) {
            return (e - i) * (n - r) + (r - t) * (o - i) >= 0 === s;
          });
      },
      {},
    ],
    68: [
      function (t, e, r) {
        var i = t("../const"),
          n = (e.exports = {
            _uid: 0,
            _saidHello: !1,
            pluginTarget: t("./pluginTarget"),
            PolyK: t("./PolyK"),
            async: t("async"),
            uuid: function () {
              return ++n._uid;
            },
            hex2rgb: function (t, e) {
              return (
                (e = e || []),
                (e[0] = ((t >> 16) & 255) / 255),
                (e[1] = ((t >> 8) & 255) / 255),
                (e[2] = (255 & t) / 255),
                e
              );
            },
            hex2string: function (t) {
              return (
                (t = t.toString(16)),
                (t = "000000".substr(0, 6 - t.length) + t),
                "#" + t
              );
            },
            rgb2hex: function (t) {
              return ((255 * t[0]) << 16) + ((255 * t[1]) << 8) + 255 * t[2];
            },
            canUseNewCanvasBlendModes: function () {
              if ("undefined" == typeof document) return !1;
              var t =
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/",
                e = "AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",
                r = new Image();
              r.src = t + "AP804Oa6" + e;
              var i = new Image();
              i.src = t + "/wCKxvRF" + e;
              var n = document.createElement("canvas");
              (n.width = 6), (n.height = 1);
              var o = n.getContext("2d");
              (o.globalCompositeOperation = "multiply"),
                o.drawImage(r, 0, 0),
                o.drawImage(i, 2, 0);
              var s = o.getImageData(2, 0, 1, 1).data;
              return 255 === s[0] && 0 === s[1] && 0 === s[2];
            },
            getNextPowerOfTwo: function (t) {
              if (t > 0 && 0 === (t & (t - 1))) return t;
              for (var e = 1; t > e; ) e <<= 1;
              return e;
            },
            isPowerOfTwo: function (t, e) {
              return (
                t > 0 && 0 === (t & (t - 1)) && e > 0 && 0 === (e & (e - 1))
              );
            },
            getResolutionOfUrl: function (t) {
              var e = i.RETINA_PREFIX.exec(t);
              return e ? parseFloat(e[1]) : 1;
            },
            sayHello: function (t) {
              if (!n._saidHello) {
                if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                  var e = [
                    "\n %c %c %c Pixi.js " +
                      i.VERSION +
                      " - âœ° " +
                      t +
                      " âœ°  %c  %c  http://www.pixijs.com/  %c %c â™¥%câ™¥%câ™¥ \n\n",
                    "background: #ff66a5; padding:5px 0;",
                    "background: #ff66a5; padding:5px 0;",
                    "color: #ff66a5; background: #030307; padding:5px 0;",
                    "background: #ff66a5; padding:5px 0;",
                    "background: #ffc3dc; padding:5px 0;",
                    "background: #ff66a5; padding:5px 0;",
                    "color: #ff2424; background: #fff; padding:5px 0;",
                    "color: #ff2424; background: #fff; padding:5px 0;",
                    "color: #ff2424; background: #fff; padding:5px 0;",
                  ];
                  window.console.log.apply(console, e);
                } else
                  window.console &&
                    window.console.log(
                      "Pixi.js " +
                        i.VERSION +
                        " - " +
                        t +
                        " - http://www.pixijs.com/"
                    );
                n._saidHello = !0;
              }
            },
            isWebGLSupported: function () {
              var t = { stencil: !0 };
              try {
                if (!window.WebGLRenderingContext) return !1;
                var e = document.createElement("canvas"),
                  r =
                    e.getContext("webgl", t) ||
                    e.getContext("experimental-webgl", t);
                return !(!r || !r.getContextAttributes().stencil);
              } catch (i) {
                return !1;
              }
            },
            TextureCache: {},
            BaseTextureCache: {},
          });
      },
      { "../const": 15, "./PolyK": 67, "./pluginTarget": 69, async: 1 },
    ],
    69: [
      function (t, e, r) {
        function i(t) {
          (t.__plugins = {}),
            (t.registerPlugin = function (e, r) {
              t.__plugins[e] = r;
            }),
            (t.prototype.initPlugins = function () {
              this.plugins = this.plugins || {};
              for (var e in t.__plugins)
                this.plugins[e] = new t.__plugins[e](this);
            }),
            (t.prototype.destroyPlugins = function () {
              for (var t in this.plugins)
                this.plugins[t].destroy(), (this.plugins[t] = null);
              this.plugins = null;
            });
        }
        e.exports = {
          mixin: function (t) {
            i(t);
          },
        };
      },
      {},
    ],
    70: [
      function (t, e, r) {
        var i = t("./core"),
          n = t("./mesh"),
          o = t("./extras"),
          s = t("./core/utils");
        (i.SpriteBatch = function () {
          throw new ReferenceError(
            "SpriteBatch does not exist any more, please use the new ParticleContainer instead."
          );
        }),
          (i.AssetLoader = function () {
            throw new ReferenceError(
              "The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class."
            );
          }),
          Object.defineProperties(i, {
            Stage: {
              get: function () {
                return (
                  console.warn(
                    "You do not need to use a PIXI Stage any more, you can simply render any container."
                  ),
                  i.Container
                );
              },
            },
            DisplayObjectContainer: {
              get: function () {
                return (
                  console.warn(
                    "DisplayObjectContainer has been shortened to Container, please use Container from now on."
                  ),
                  i.Container
                );
              },
            },
            Strip: {
              get: function () {
                return (
                  console.warn(
                    "The Strip class has been renamed to Mesh, please use Mesh from now on."
                  ),
                  n.Mesh
                );
              },
            },
            MovieClip: {
              get: function () {
                return (
                  console.warn(
                    "The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on."
                  ),
                  o.MovieClip
                );
              },
            },
            TilingSprite: {
              get: function () {
                return (
                  console.warn(
                    "The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."
                  ),
                  o.TilingSprite
                );
              },
            },
            TextureCache: {
              get: function () {
                return (
                  console.warn(
                    "The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."
                  ),
                  s.TextureCache
                );
              },
            },
            BitmapText: {
              get: function () {
                return (
                  console.warn(
                    "The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."
                  ),
                  o.BitmapText
                );
              },
            },
            blendModes: {
              get: function () {
                return (
                  console.warn(
                    "The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."
                  ),
                  i.BLEND_MODES
                );
              },
            },
            scaleModes: {
              get: function () {
                return (
                  console.warn(
                    "The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."
                  ),
                  i.SCALE_MODES
                );
              },
            },
          }),
          (i.Sprite.prototype.setTexture = function (t) {
            (this.texture = t),
              console.warn(
                "setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;"
              );
          }),
          (o.BitmapText.prototype.setText = function (t) {
            (this.text = t),
              console.warn(
                "setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';"
              );
          }),
          (i.Text.prototype.setText = function (t) {
            (this.text = t),
              console.warn(
                "setText is now deprecated, please use the text property, e.g : myText.text = 'my text';"
              );
          }),
          (i.Text.prototype.setStyle = function (t) {
            (this.style = t),
              console.warn(
                "setStyle is now deprecated, please use the style property, e.g : myText.style = style;"
              );
          }),
          (i.Texture.prototype.setFrame = function (t) {
            (this.frame = t),
              console.warn(
                "setFrame is now deprecated, please use the frame property, e.g : myTexture.frame = frame;"
              );
          });
      },
      { "./core": 22, "./core/utils": 68, "./extras": 77, "./mesh": 118 },
    ],
    71: [
      function (t, e, r) {
        function i(t, e) {
          n.Container.call(this),
            (this.textWidth = 0),
            (this.textHeight = 0),
            (this._glyphs = []),
            (this._font = {
              tint: void 0 !== e.tint ? e.tint : 16777215,
              align: e.align || "left",
              name: null,
              size: 0,
            }),
            (this.font = e.font),
            (this._text = t),
            (this.maxWidth = 0),
            (this.dirty = !1),
            this.updateText();
        }
        var n = t("../core");
        (i.prototype = Object.create(n.Container.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            tint: {
              get: function () {
                return this._font.tint;
              },
              set: function (t) {
                (this._font.tint =
                  "number" == typeof t && t >= 0 ? t : 16777215),
                  (this.dirty = !0);
              },
            },
            align: {
              get: function () {
                return this._font.align;
              },
              set: function (t) {
                (this._font.align = t), (this.dirty = !0);
              },
            },
            font: {
              get: function () {
                return this._font;
              },
              set: function (t) {
                "string" == typeof t
                  ? ((t = t.split(" ")),
                    (this._font.name =
                      1 === t.length ? t[0] : t.slice(1).join(" ")),
                    (this._font.size =
                      t.length >= 2
                        ? parseInt(t[0], 10)
                        : i.fonts[this._font.name].size))
                  : ((this._font.name = t.name),
                    (this._font.size =
                      "number" == typeof t.size
                        ? t.size
                        : parseInt(t.size, 10))),
                  (this.dirty = !0);
              },
            },
            text: {
              get: function () {
                return this._text;
              },
              set: function (t) {
                (this._text = t), (this.dirty = !0);
              },
            },
          }),
          (i.prototype.updateText = function () {
            for (
              var t = i.fonts[this._font.name],
                e = new n.math.Point(),
                r = null,
                o = [],
                s = 0,
                a = 0,
                h = [],
                l = 0,
                u = this._font.size / t.size,
                c = -1,
                p = 0;
              p < this.text.length;
              p++
            ) {
              var d = this.text.charCodeAt(p);
              if (
                ((c = /(\s)/.test(this.text.charAt(p)) ? p : c),
                /(?:\r\n|\r|\n)/.test(this.text.charAt(p)))
              )
                h.push(s),
                  (a = Math.max(a, s)),
                  l++,
                  (e.x = 0),
                  (e.y += t.lineHeight),
                  (r = null);
              else if (-1 !== c && this.maxWidth > 0 && e.x * u > this.maxWidth)
                o.splice(c, p - c),
                  (p = c),
                  (c = -1),
                  h.push(s),
                  (a = Math.max(a, s)),
                  l++,
                  (e.x = 0),
                  (e.y += t.lineHeight),
                  (r = null);
              else {
                var f = t.chars[d];
                f &&
                  (r && f.kerning[r] && (e.x += f.kerning[r]),
                  o.push({
                    texture: f.texture,
                    line: l,
                    charCode: d,
                    position: new n.math.Point(
                      e.x + f.xOffset,
                      e.y + f.yOffset
                    ),
                  }),
                  (s = e.x + (f.texture.width + f.xOffset)),
                  (e.x += f.xAdvance),
                  (r = d));
              }
            }
            h.push(s), (a = Math.max(a, s));
            var v = [];
            for (p = 0; l >= p; p++) {
              var g = 0;
              "right" === this._font.align
                ? (g = a - h[p])
                : "center" === this._font.align && (g = (a - h[p]) / 2),
                v.push(g);
            }
            var m = o.length,
              y = this.tint;
            for (p = 0; m > p; p++) {
              var x = this._glyphs[p];
              x
                ? (x.texture = o[p].texture)
                : ((x = new n.Sprite(o[p].texture)), this._glyphs.push(x)),
                (x.position.x = (o[p].position.x + v[o[p].line]) * u),
                (x.position.y = o[p].position.y * u),
                (x.scale.x = x.scale.y = u),
                (x.tint = y),
                x.parent || this.addChild(x);
            }
            for (p = m; p < this._glyphs.length; ++p)
              this.removeChild(this._glyphs[p]);
            (this.textWidth = a * u),
              (this.textHeight = (e.y + t.lineHeight) * u);
          }),
          (i.prototype.updateTransform = function () {
            this.dirty && (this.updateText(), (this.dirty = !1)),
              this.containerUpdateTransform();
          }),
          (i.fonts = {});
      },
      { "../core": 22 },
    ],
    72: [
      function (t, e, r) {
        function i(t) {
          n.Sprite.call(this, t[0]),
            (this._textures = t),
            (this.animationSpeed = 1),
            (this.loop = !0),
            (this.onComplete = null),
            (this._currentTime = 0),
            (this.playing = !1);
        }
        var n = t("../core"),
          o = t("../ticker");
        (i.prototype = Object.create(n.Sprite.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            totalFrames: {
              get: function () {
                return this._textures.length;
              },
            },
            textures: {
              get: function () {
                return this._textures;
              },
              set: function (t) {
                (this._textures = t),
                  (this.texture =
                    this._textures[
                      Math.floor(this._currentTime) % this._textures.length
                    ]);
              },
            },
            currentFrame: {
              get: function () {
                return Math.floor(this._currentTime) % this._texture.length;
              },
            },
          }),
          (i.prototype.stop = function () {
            this.playing &&
              ((this.playing = !1), o.shared.remove(this.update, this));
          }),
          (i.prototype.play = function () {
            this.playing ||
              ((this.playing = !0), o.shared.add(this.update, this));
          }),
          (i.prototype.gotoAndStop = function (t) {
            this.stop(), (this._currentTime = t);
            var e = Math.floor(this._currentTime);
            this._texture = this._textures[e % this._textures.length];
          }),
          (i.prototype.gotoAndPlay = function (t) {
            (this._currentTime = t), this.play();
          }),
          (i.prototype.update = function (t) {
            this._currentTime += this.animationSpeed * t;
            var e = Math.floor(this._currentTime);
            0 > e
              ? this.loop
                ? ((this._currentTime += this._textures.length),
                  (this._texture = this._textures[this._currentTime]))
                : (this.gotoAndStop(0), this.onComplete && this.onComplete())
              : this.loop || e < this._textures.length
              ? (this._texture = this._textures[e % this._textures.length])
              : e >= this._textures.length &&
                (this.gotoAndStop(this.textures.length - 1),
                this.onComplete && this.onComplete());
          }),
          (i.prototype.destroy = function () {
            this.stop(), n.Sprite.prototype.destroy.call(this);
          }),
          (i.fromFrames = function (t) {
            for (var e = [], r = 0; r < t.length; ++r)
              e.push(new n.Texture.fromFrame(t[r]));
            return new i(e);
          }),
          (i.fromImages = function (t) {
            for (var e = [], r = 0; r < t.length; ++r)
              e.push(new n.Texture.fromImage(t[r]));
            return new i(e);
          });
      },
      { "../core": 22, "../ticker": 125 },
    ],
    73: [
      function (t, e, r) {
        function i(t, e, r) {
          n.Sprite.call(this, t),
            (this.tileScale = new n.math.Point(1, 1)),
            (this.tilePosition = new n.math.Point(0, 0)),
            (this._width = e || 100),
            (this._height = r || 100),
            (this._uvs = new n.TextureUvs()),
            (this._canvasPattern = null),
            (this.shader = new n.AbstractFilter(
              [
                "precision lowp float;",
                "attribute vec2 aVertexPosition;",
                "attribute vec2 aTextureCoord;",
                "attribute vec4 aColor;",
                "uniform mat3 projectionMatrix;",
                "uniform vec4 uFrame;",
                "uniform vec4 uTransform;",
                "varying vec2 vTextureCoord;",
                "varying vec4 vColor;",
                "void main(void){",
                "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);",
                "   vec2 coord = aTextureCoord;",
                "   coord -= uTransform.xy;",
                "   coord /= uTransform.zw;",
                "   coord /= uFrame.zw;",
                "   vTextureCoord = coord;",
                "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);",
                "}",
              ].join("\n"),
              [
                "precision lowp float;",
                "varying vec2 vTextureCoord;",
                "varying vec4 vColor;",
                "uniform sampler2D uSampler;",
                "uniform vec4 uFrame;",
                "void main(void){",
                "   vec2 coord = fract(vTextureCoord);",
                "   coord *= uFrame.zw;",
                "   coord += uFrame.xy;",
                "   gl_FragColor =  texture2D(uSampler, coord) * vColor ;",
                "}",
              ].join("\n"),
              {
                uFrame: { type: "4fv", value: [0, 0, 1, 1] },
                uTransform: { type: "4fv", value: [0, 0, 1, 1] },
              }
            ));
        }
        var n = t("../core"),
          o = new n.Point();
        (i.prototype = Object.create(n.Sprite.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            width: {
              get: function () {
                return this._width;
              },
              set: function (t) {
                this._width = t;
              },
            },
            height: {
              get: function () {
                return this._height;
              },
              set: function (t) {
                this._height = t;
              },
            },
          }),
          (i.prototype._onTextureUpdate = function () {}),
          (i.prototype._renderWebGL = function (t) {
            var e = this._texture;
            if (e && e._uvs) {
              var r = e._uvs,
                i = e._frame.width,
                n = e._frame.height,
                o = e.baseTexture.width,
                s = e.baseTexture.height;
              (e._uvs = this._uvs),
                (e._frame.width = this.width),
                (e._frame.height = this.height),
                (this.shader.uniforms.uFrame.value[0] = r.x0 + 0.5 / o),
                (this.shader.uniforms.uFrame.value[1] = r.y0 + 0.5 / s),
                (this.shader.uniforms.uFrame.value[2] = r.x1 - r.x0 + -1 / o),
                (this.shader.uniforms.uFrame.value[3] = r.y2 - r.y0 + -1 / s),
                (this.shader.uniforms.uTransform.value[0] =
                  (this.tilePosition.x % o) / this._width),
                (this.shader.uniforms.uTransform.value[1] =
                  (this.tilePosition.y % s) / this._height),
                (this.shader.uniforms.uTransform.value[2] =
                  (o / this._width) * this.tileScale.x),
                (this.shader.uniforms.uTransform.value[3] =
                  (s / this._height) * this.tileScale.y),
                t.setObjectRenderer(t.plugins.sprite),
                t.plugins.sprite.render(this),
                (e._uvs = r),
                (e._frame.width = i),
                (e._frame.height = n);
            }
          }),
          (i.prototype._renderCanvas = function (t) {
            var e = this._texture;
            if (e.baseTexture.hasLoaded) {
              var r = t.context,
                i = this.worldTransform,
                o = t.resolution,
                s = e.baseTexture,
                a = this.tilePosition.x % s.width,
                h = this.tilePosition.y % s.height;
              if (!this._canvasPattern) {
                var l = new n.CanvasBuffer(e._frame.width, e._frame.height);
                l.context.drawImage(s.source, -e._frame.x, -e._frame.y),
                  (this._canvasPattern = l.context.createPattern(
                    l.canvas,
                    "repeat"
                  ));
              }
              (r.globalAlpha = this.worldAlpha),
                r.setTransform(
                  i.a * o,
                  i.b * o,
                  i.c * o,
                  i.d * o,
                  i.tx * o,
                  i.ty * o
                ),
                r.scale(this.tileScale.x, this.tileScale.y),
                r.translate(
                  a + this.anchor.x * -this._width,
                  h + this.anchor.y * -this._height
                ),
                this.blendMode !== t.currentBlendMode &&
                  ((t.currentBlendMode = this.blendMode),
                  (r.globalCompositeOperation =
                    t.blendModes[t.currentBlendMode])),
                (r.fillStyle = this._canvasPattern),
                r.fillRect(
                  -a,
                  -h,
                  this._width / this.tileScale.x,
                  this._height / this.tileScale.y
                );
            }
          }),
          (i.prototype.getBounds = function () {
            var t,
              e,
              r,
              i,
              n = this._width,
              o = this._height,
              s = n * (1 - this.anchor.x),
              a = n * -this.anchor.x,
              h = o * (1 - this.anchor.y),
              l = o * -this.anchor.y,
              u = this.worldTransform,
              c = u.a,
              p = u.b,
              d = u.c,
              f = u.d,
              v = u.tx,
              g = u.ty,
              m = c * a + d * l + v,
              y = f * l + p * a + g,
              x = c * s + d * l + v,
              b = f * l + p * s + g,
              _ = c * s + d * h + v,
              T = f * h + p * s + g,
              E = c * a + d * h + v,
              S = f * h + p * a + g;
            (t = m),
              (t = t > x ? x : t),
              (t = t > _ ? _ : t),
              (t = t > E ? E : t),
              (r = y),
              (r = r > b ? b : r),
              (r = r > T ? T : r),
              (r = r > S ? S : r),
              (e = m),
              (e = x > e ? x : e),
              (e = _ > e ? _ : e),
              (e = E > e ? E : e),
              (i = y),
              (i = b > i ? b : i),
              (i = T > i ? T : i),
              (i = S > i ? S : i);
            var C = this._bounds;
            return (
              (C.x = t),
              (C.width = e - t),
              (C.y = r),
              (C.height = i - r),
              (this._currentBounds = C),
              C
            );
          }),
          (i.prototype.containsPoint = function (t) {
            this.worldTransform.applyInverse(t, o);
            var e,
              r = this._width,
              i = this._height,
              n = -r * this.anchor.x;
            return o.x > n &&
              o.x < n + r &&
              ((e = -i * this.anchor.y), o.y > e && o.y < e + i)
              ? !0
              : !1;
          }),
          (i.prototype.destroy = function () {
            n.Sprite.prototype.destroy.call(this),
              (this.tileScale = null),
              (this._tileScaleOffset = null),
              (this.tilePosition = null),
              (this._uvs = null);
          }),
          (i.fromFrame = function (t, e, r) {
            var o = n.utils.TextureCache[t];
            if (!o)
              throw new Error(
                'The frameId "' +
                  t +
                  '" does not exist in the texture cache ' +
                  this
              );
            return new i(o, e, r);
          }),
          (i.fromImage = function (t, e, r, o, s) {
            return new i(n.Texture.fromImage(t, o, s), e, r);
          });
      },
      { "../core": 22 },
    ],
    74: [
      function (t, e, r) {
        var i = t("../core"),
          n = i.DisplayObject,
          o = new i.Matrix();
        (n.prototype._cacheAsBitmap = !1),
          (n.prototype._originalRenderWebGL = null),
          (n.prototype._originalRenderCanvas = null),
          (n.prototype._originalUpdateTransform = null),
          (n.prototype._originalHitTest = null),
          (n.prototype._cachedSprite = null),
          Object.defineProperties(n.prototype, {
            cacheAsBitmap: {
              get: function () {
                return this._cacheAsBitmap;
              },
              set: function (t) {
                this._cacheAsBitmap !== t &&
                  ((this._cacheAsBitmap = t),
                  t
                    ? ((this._originalRenderWebGL = this.renderWebGL),
                      (this._originalRenderCanvas = this.renderCanvas),
                      (this._originalUpdateTransform = this.updateTransform),
                      (this._originalGetBounds = this.getBounds),
                      (this._originalContainesPoint = this.containsPoint),
                      (this.renderWebGL = this._renderCachedWebGL),
                      (this.renderCanvas = this._renderCachedCanvas))
                    : (this._cachedSprite && this._destroyCachedDisplayObject(),
                      (this.renderWebGL = this._originalRenderWebGL),
                      (this.renderCanvas = this._originalRenderCanvas),
                      (this.getBounds = this._originalGetBounds),
                      (this.updateTransform = this._originalUpdateTransform),
                      (this.containsPoint = this._originalContainsPoint)));
              },
            },
          }),
          (n.prototype._renderCachedWebGL = function (t) {
            this._initCachedDisplayObject(t),
              (this._cachedSprite.worldAlpha = this.worldAlpha),
              t.setObjectRenderer(t.plugins.sprite),
              t.plugins.sprite.render(this._cachedSprite);
          }),
          (n.prototype._initCachedDisplayObject = function (t) {
            if (!this._cachedSprite) {
              t.currentRenderer.flush();
              var e = this.getLocalBounds().clone();
              if (this._filters) {
                var r = this._filters[0].padding;
                (e.x -= r), (e.y -= r), (e.width += 2 * r), (e.height += 2 * r);
              }
              var n = t.currentRenderTarget,
                s = t.filterManager.filterStack,
                a = new i.RenderTexture(t, 0 | e.width, 0 | e.height),
                h = o;
              (h.tx = -e.x),
                (h.ty = -e.y),
                (this.renderWebGL = this._originalRenderWebGL),
                a.render(this, h, !0, !0),
                t.setRenderTarget(n),
                (t.filterManager.filterStack = s),
                (this.renderWebGL = this._renderCachedWebGL),
                (this.updateTransform = this.displayObjectUpdateTransform),
                (this.getBounds = this._getCachedBounds),
                (this._cachedSprite = new i.Sprite(a)),
                (this._cachedSprite.worldTransform = this.worldTransform),
                (this._cachedSprite.anchor.x = -(e.x / e.width)),
                (this._cachedSprite.anchor.y = -(e.y / e.height)),
                this.updateTransform(),
                (this.containsPoint = this._cachedSprite.containsPoint.bind(
                  this._cachedSprite
                ));
            }
          }),
          (n.prototype._renderCachedCanvas = function (t) {
            this._initCachedDisplayObjectCanvas(t),
              (this._cachedSprite.worldAlpha = this.worldAlpha),
              this._cachedSprite.renderCanvas(t);
          }),
          (n.prototype._initCachedDisplayObjectCanvas = function (t) {
            if (!this._cachedSprite) {
              var e = this.getLocalBounds(),
                r = t.context,
                n = new i.RenderTexture(t, 0 | e.width, 0 | e.height),
                s = o;
              (s.tx = -e.x),
                (s.ty = -e.y),
                (this.renderCanvas = this._originalRenderCanvas),
                n.render(this, s, !0),
                (t.context = r),
                (this.renderCanvas = this._renderCachedCanvas),
                (this.updateTransform = this.displayObjectUpdateTransform),
                (this.getBounds = this._getCachedBounds),
                (this._cachedSprite = new i.Sprite(n)),
                (this._cachedSprite.worldTransform = this.worldTransform),
                (this._cachedSprite.anchor.x = -(e.x / e.width)),
                (this._cachedSprite.anchor.y = -(e.y / e.height)),
                this.updateTransform(),
                (this.containsPoint = this._cachedSprite.containsPoint.bind(
                  this._cachedSprite
                ));
            }
          }),
          (n.prototype._getCachedBounds = function () {
            return (
              (this._cachedSprite._currentBounds = null),
              this._cachedSprite.getBounds()
            );
          }),
          (n.prototype._destroyCachedDisplayObject = function () {
            this._cachedSprite._texture.destroy(), (this._cachedSprite = null);
          });
      },
      { "../core": 22 },
    ],
    75: [
      function (t, e, r) {
        var i = t("../core");
        (i.DisplayObject.prototype.name = null),
          (i.Container.prototype.getChildByName = function (t) {
            for (var e = 0; e < this.children.length; e++)
              if (this.children[e].name === t) return this.children[e];
            return null;
          });
      },
      { "../core": 22 },
    ],
    76: [
      function (t, e, r) {
        var i = t("../core");
        i.DisplayObject.prototype.getGlobalPosition = function (t) {
          return (
            (t = t || new i.Point()),
            this.parent
              ? (this.displayObjectUpdateTransform(),
                (t.x = this.worldTransform.tx),
                (t.y = this.worldTransform.ty))
              : ((t.x = this.position.x), (t.y = this.position.y)),
            t
          );
        };
      },
      { "../core": 22 },
    ],
    77: [
      function (t, e, r) {
        t("./cacheAsBitmap"),
          t("./getChildByName"),
          t("./getGlobalPosition"),
          (e.exports = {
            MovieClip: t("./MovieClip"),
            TilingSprite: t("./TilingSprite"),
            BitmapText: t("./BitmapText"),
          });
      },
      {
        "./BitmapText": 71,
        "./MovieClip": 72,
        "./TilingSprite": 73,
        "./cacheAsBitmap": 74,
        "./getChildByName": 75,
        "./getGlobalPosition": 76,
      },
    ],
    78: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            null,
            "precision mediump float;\n\nuniform vec4 dimensions;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 uv = gl_FragCoord.xy;\n\n    vec3 col = texture2D(uSampler, floor( uv / pixelSize ) * pixelSize / dimensions.xy).rgb;\n\n    float gray = (col.r + col.g + col.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    vec2 p = mod( uv / ( pixelSize * 0.5 ), 2.0) - vec2(1.0);\n    col = col * character(n, p);\n\n    gl_FragColor = vec4(col, 1.0);\n}\n",
            {
              dimensions: {
                type: "4fv",
                value: new Float32Array([0, 0, 0, 0]),
              },
              pixelSize: { type: "1f", value: 8 },
            }
          );
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            size: {
              get: function () {
                return this.uniforms.pixelSize.value;
              },
              set: function (t) {
                this.uniforms.pixelSize.value = t;
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    79: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this),
            (this.blurXFilter = new o()),
            (this.blurYFilter = new s()),
            (this.defaultFilter = new n.AbstractFilter());
        }
        var n = t("../../core"),
          o = t("../blur/BlurXFilter"),
          s = t("../blur/BlurYFilter");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.applyFilter = function (t, e, r) {
            var i = t.filterManager.getRenderTarget(!0);
            this.defaultFilter.applyFilter(t, e, r),
              this.blurXFilter.applyFilter(t, e, i),
              t.blendModeManager.setBlendMode(n.BLEND_MODES.SCREEN),
              this.blurYFilter.applyFilter(t, i, r),
              t.blendModeManager.setBlendMode(n.BLEND_MODES.NORMAL),
              t.filterManager.returnRenderTarget(i);
          }),
          Object.defineProperties(i.prototype, {
            blur: {
              get: function () {
                return this.blurXFilter.blur;
              },
              set: function (t) {
                this.blurXFilter.blur = this.blurYFilter.blur = t;
              },
            },
            blurX: {
              get: function () {
                return this.blurXFilter.blur;
              },
              set: function (t) {
                this.blurXFilter.blur = t;
              },
            },
            blurY: {
              get: function () {
                return this.blurYFilter.blur;
              },
              set: function (t) {
                this.blurYFilter.blur = t;
              },
            },
          });
      },
      {
        "../../core": 22,
        "../blur/BlurXFilter": 82,
        "../blur/BlurYFilter": 83,
      },
    ],
    80: [
      function (t, e, r) {
        function i(t, e) {
          n.AbstractFilter.call(
            this,
            "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform float dirX;\nuniform float dirY;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[3];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[0] = aTextureCoord + vec2( (0.004 * strength) * dirX, (0.004 * strength) * dirY );\n    vBlurTexCoords[1] = aTextureCoord + vec2( (0.008 * strength) * dirX, (0.008 * strength) * dirY );\n    vBlurTexCoords[2] = aTextureCoord + vec2( (0.012 * strength) * dirX, (0.012 * strength) * dirY );\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n",
            "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[3];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vTextureCoord     ) * 0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0]) * 0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1]) * 0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2]) * 0.004431848411938341;\n}\n",
            {
              strength: { type: "1f", value: 1 },
              dirX: { type: "1f", value: t || 0 },
              dirY: { type: "1f", value: e || 0 },
            }
          ),
            (this.defaultFilter = new n.AbstractFilter()),
            (this.passes = 1),
            (this.dirX = t || 0),
            (this.dirY = e || 0),
            (this.strength = 4);
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.applyFilter = function (t, e, r, i) {
            var n = this.getShader(t);
            if (
              ((this.uniforms.strength.value =
                (this.strength / 4 / this.passes) *
                (e.frame.width / e.size.width)),
              1 === this.passes)
            )
              t.filterManager.applyFilter(n, e, r, i);
            else {
              var o = t.filterManager.getRenderTarget(!0);
              t.filterManager.applyFilter(n, e, o, i);
              for (var s = 0; s < this.passes - 2; s++)
                t.filterManager.applyFilter(n, o, o, i);
              t.filterManager.applyFilter(n, o, r, i),
                t.filterManager.returnRenderTarget(o);
            }
          }),
          Object.defineProperties(i.prototype, {
            blur: {
              get: function () {
                return this.strength;
              },
              set: function (t) {
                (this.padding = 0.5 * t), (this.strength = t);
              },
            },
            dirX: {
              get: function () {
                return this.dirX;
              },
              set: function (t) {
                this.uniforms.dirX.value = t;
              },
            },
            dirY: {
              get: function () {
                return this.dirY;
              },
              set: function (t) {
                this.uniforms.dirY.value = t;
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    81: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this),
            (this.defaultFilter = new n.AbstractFilter()),
            (this.blurFilters = [
              new o(1, 0),
              new o(-1, 0),
              new o(0, 1),
              new o(0, -1),
              new o(0.7, 0.7),
              new o(-0.7, 0.7),
              new o(0.7, -0.7),
              new o(-0.7, -0.7),
            ]);
        }
        var n = t("../../core"),
          o = t("./BlurDirFilter");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.applyFilter = function (t, e, r) {
            for (
              var i = t.filterManager.getRenderTarget(!0), n = 0;
              n < this.blurFilters.length;
              n++
            )
              this.blurFilters[n].applyFilter(t, e, i);
            this.defaultFilter.applyFilter(t, i, r),
              t.filterManager.returnRenderTarget(i);
          }),
          Object.defineProperties(i.prototype, {
            blur: {
              get: function () {
                return this.blurFilters[0].blur;
              },
              set: function (t) {
                this.padding = 0.5 * t;
                for (var e = 0; e < this.blurFilters.length; e++)
                  this.blurFilters[e].blur = t;
              },
            },
            passes: {
              get: function () {
                return this.blurFilters[0].passes;
              },
              set: function (t) {
                for (var e = 0; e < this.blurFilters.length; e++)
                  this.blurFilters[e].passes = t;
              },
            },
            blurX: {
              get: function () {
                return this.blurFilters[0].blur;
              },
              set: function (t) {
                (this.blurFilters[0].blur = t),
                  (this.blurFilters[1].blur = t),
                  (this.blurFilters[4].blur = t * this.blurFilters[2].blur),
                  (this.blurFilters[5].blur = t * this.blurFilters[2].blur),
                  (this.blurFilters[6].blur = t * this.blurFilters[3].blur),
                  (this.blurFilters[7].blur = t * this.blurFilters[3].blur);
              },
            },
            blurY: {
              get: function () {
                return this.blurYFilter.blur;
              },
              set: function (t) {
                (this.blurFilters[2].blur = t),
                  (this.blurFilters[3].blur = t),
                  (this.blurFilters[4].blur = t * this.blurFilters[0].blur),
                  (this.blurFilters[5].blur = t * this.blurFilters[0].blur),
                  (this.blurFilters[6].blur = t * this.blurFilters[1].blur),
                  (this.blurFilters[7].blur = t * this.blurFilters[1].blur);
              },
            },
          });
      },
      { "../../core": 22, "./BlurDirFilter": 80 },
    ],
    82: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(-0.012 * strength, 0.0);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(-0.008 * strength, 0.0);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(-0.004 * strength, 0.0);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2( 0.004 * strength, 0.0);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2( 0.008 * strength, 0.0);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2( 0.012 * strength, 0.0);\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n",
            "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n",
            { strength: { type: "1f", value: 1 } }
          ),
            (this.passes = 1),
            (this.strength = 4);
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.applyFilter = function (t, e, r, i) {
            var n = this.getShader(t);
            if (
              ((this.uniforms.strength.value =
                (this.strength / 4 / this.passes) *
                (e.frame.width / e.size.width)),
              1 === this.passes)
            )
              t.filterManager.applyFilter(n, e, r, i);
            else {
              for (
                var o = t.filterManager.getRenderTarget(!0),
                  s = e,
                  a = o,
                  h = 0;
                h < this.passes - 1;
                h++
              ) {
                t.filterManager.applyFilter(n, s, a, i);
                var l = a;
                (a = s), (s = l);
              }
              t.filterManager.applyFilter(n, s, r, i),
                t.filterManager.returnRenderTarget(o);
            }
          }),
          Object.defineProperties(i.prototype, {
            blur: {
              get: function () {
                return this.strength;
              },
              set: function (t) {
                (this.padding = 0.5 * t), (this.strength = t);
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    83: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n",
            "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n",
            { strength: { type: "1f", value: 1 } }
          ),
            (this.passes = 1),
            (this.strength = 4);
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.applyFilter = function (t, e, r, i) {
            var n = this.getShader(t);
            if (
              ((this.uniforms.strength.value =
                (this.strength / 4 / this.passes) *
                (e.frame.height / e.size.height)),
              1 === this.passes)
            )
              t.filterManager.applyFilter(n, e, r, i);
            else {
              for (
                var o = t.filterManager.getRenderTarget(!0),
                  s = e,
                  a = o,
                  h = 0;
                h < this.passes - 1;
                h++
              ) {
                t.filterManager.applyFilter(n, s, a, i);
                var l = a;
                (a = s), (s = l);
              }
              t.filterManager.applyFilter(n, s, r, i),
                t.filterManager.returnRenderTarget(o);
            }
          }),
          Object.defineProperties(i.prototype, {
            blur: {
              get: function () {
                return this.strength;
              },
              set: function (t) {
                (this.padding = 0.5 * t), (this.strength = t);
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    84: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            null,
            "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 delta;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta * percent);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n",
            { delta: { type: "v2", value: { x: 0.1, y: 0 } } }
          );
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i);
      },
      { "../../core": 22 },
    ],
    85: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            null,
            "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float m[24];\n\nuniform vec4 d;\n\nvoid main(void)\n{\n    \n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n	gl_FragColor.r = m[0] * c.r + m[1] * c.g + m[2] * c.b + m[3] * c.a + m[4];\n	gl_FragColor.g = m[5] * c.r + m[6] * c.g + m[7] * c.b + m[8] * c.a + m[9];\n	gl_FragColor.b = m[10] * c.r + m[11] * c.g + m[12] * c.b + m[13] * c.a + m[14];\n	gl_FragColor.a = c.a;\n}\n",
            {
              m: {
                type: "1fv",
                value: [
                  1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
                  0, 0, 0, 1,
                ],
              },
            }
          );
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype._loadMatrix = function (t, e) {
            e = !!e;
            var r = t;
            e &&
              (this._multiply(r, this.uniforms.m.value, t),
              (r = this._colorMatrix(r))),
              (this.uniforms.m.value = r);
          }),
          (i.prototype._multiply = function (t, e, r) {
            return (
              (t[0] =
                e[0] * r[0] +
                e[1] * r[5] +
                e[2] * r[10] +
                e[3] * r[15] +
                e[4] * r[20]),
              (t[1] =
                e[0] * r[1] +
                e[1] * r[6] +
                e[2] * r[11] +
                e[3] * r[16] +
                e[4] * r[21]),
              (t[2] =
                e[0] * r[2] +
                e[1] * r[7] +
                e[2] * r[12] +
                e[3] * r[17] +
                e[4] * r[22]),
              (t[3] =
                e[0] * r[3] +
                e[1] * r[8] +
                e[2] * r[13] +
                e[3] * r[18] +
                e[4] * r[23]),
              (t[4] =
                e[0] * r[4] +
                e[1] * r[9] +
                e[2] * r[14] +
                e[3] * r[19] +
                e[4] * r[24]),
              (t[5] =
                e[5] * r[0] +
                e[6] * r[5] +
                e[7] * r[10] +
                e[8] * r[15] +
                e[9] * r[20]),
              (t[6] =
                e[5] * r[1] +
                e[6] * r[6] +
                e[7] * r[11] +
                e[8] * r[16] +
                e[9] * r[21]),
              (t[7] =
                e[5] * r[2] +
                e[6] * r[7] +
                e[7] * r[12] +
                e[8] * r[17] +
                e[9] * r[22]),
              (t[8] =
                e[5] * r[3] +
                e[6] * r[8] +
                e[7] * r[13] +
                e[8] * r[18] +
                e[9] * r[23]),
              (t[9] =
                e[5] * r[4] +
                e[6] * r[9] +
                e[7] * r[14] +
                e[8] * r[19] +
                e[9] * r[24]),
              (t[10] =
                e[10] * r[0] +
                e[11] * r[5] +
                e[12] * r[10] +
                e[13] * r[15] +
                e[14] * r[20]),
              (t[11] =
                e[10] * r[1] +
                e[11] * r[6] +
                e[12] * r[11] +
                e[13] * r[16] +
                e[14] * r[21]),
              (t[12] =
                e[10] * r[2] +
                e[11] * r[7] +
                e[12] * r[12] +
                e[13] * r[17] +
                e[14] * r[22]),
              (t[13] =
                e[10] * r[3] +
                e[11] * r[8] +
                e[12] * r[13] +
                e[13] * r[18] +
                e[14] * r[23]),
              (t[14] =
                e[10] * r[4] +
                e[11] * r[9] +
                e[12] * r[14] +
                e[13] * r[19] +
                e[14] * r[24]),
              (t[15] =
                e[15] * r[0] +
                e[16] * r[5] +
                e[17] * r[10] +
                e[18] * r[15] +
                e[19] * r[20]),
              (t[16] =
                e[15] * r[1] +
                e[16] * r[6] +
                e[17] * r[11] +
                e[18] * r[16] +
                e[19] * r[21]),
              (t[17] =
                e[15] * r[2] +
                e[16] * r[7] +
                e[17] * r[12] +
                e[18] * r[17] +
                e[19] * r[22]),
              (t[18] =
                e[15] * r[3] +
                e[16] * r[8] +
                e[17] * r[13] +
                e[18] * r[18] +
                e[19] * r[23]),
              (t[19] =
                e[15] * r[4] +
                e[16] * r[9] +
                e[17] * r[14] +
                e[18] * r[19] +
                e[19] * r[24]),
              (t[20] =
                e[20] * r[0] +
                e[21] * r[5] +
                e[22] * r[10] +
                e[23] * r[15] +
                e[24] * r[20]),
              (t[21] =
                e[20] * r[1] +
                e[21] * r[6] +
                e[22] * r[11] +
                e[23] * r[16] +
                e[24] * r[21]),
              (t[22] =
                e[20] * r[2] +
                e[21] * r[7] +
                e[22] * r[12] +
                e[23] * r[17] +
                e[24] * r[22]),
              (t[23] =
                e[20] * r[3] +
                e[21] * r[8] +
                e[22] * r[13] +
                e[23] * r[18] +
                e[24] * r[23]),
              (t[24] =
                e[20] * r[4] +
                e[21] * r[9] +
                e[22] * r[14] +
                e[23] * r[19] +
                e[24] * r[24]),
              t
            );
          }),
          (i.prototype._colorMatrix = function (t) {
            var e = new Float32Array(t);
            return (
              (e[4] /= 255), (e[9] /= 255), (e[14] /= 255), (e[19] /= 255), e
            );
          }),
          (i.prototype.brightness = function (t, e) {
            var r = [
              t,
              0,
              0,
              0,
              0,
              0,
              t,
              0,
              0,
              0,
              0,
              0,
              t,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              1,
            ];
            this._loadMatrix(r, e);
          }),
          (i.prototype.greyscale = function (t, e) {
            var r = [
              t,
              t,
              t,
              0,
              0,
              t,
              t,
              t,
              0,
              0,
              t,
              t,
              t,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              1,
            ];
            this._loadMatrix(r, e);
          }),
          (i.prototype.blackAndWhite = function (t) {
            var e = [
              0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0,
              0, 0, 1, 0, 0, 0, 0, 0, 1,
            ];
            this._loadMatrix(e, t);
          }),
          (i.prototype.hue = function (t, e) {
            t = ((t || 0) / 180) * Math.PI;
            var r = Math.cos(t),
              i = Math.sin(t),
              n = 0.213,
              o = 0.715,
              s = 0.072,
              a = [
                n + r * (1 - n) + i * -n,
                o + r * -o + i * -o,
                s + r * -s + i * (1 - s),
                0,
                0,
                n + r * -n + 0.143 * i,
                o + r * (1 - o) + 0.14 * i,
                s + r * -s + i * -0.283,
                0,
                0,
                n + r * -n + i * -(1 - n),
                o + r * -o + i * o,
                s + r * (1 - s) + i * s,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ];
            this._loadMatrix(a, e);
          }),
          (i.prototype.contrast = function (t, e) {
            var r = (t || 0) + 1,
              i = -128 * (r - 1),
              n = [
                r,
                0,
                0,
                0,
                i,
                0,
                r,
                0,
                0,
                i,
                0,
                0,
                r,
                0,
                i,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ];
            this._loadMatrix(n, e);
          }),
          (i.prototype.saturation = function (t, e) {
            var r = (2 * (t || 0)) / 3 + 1,
              i = (r - 1) * -0.5,
              n = [
                r,
                i,
                i,
                0,
                0,
                i,
                r,
                i,
                0,
                0,
                i,
                i,
                r,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ];
            this._loadMatrix(n, e);
          }),
          (i.prototype.desaturate = function (t) {
            this.saturation(-1);
          }),
          (i.prototype.negative = function (t) {
            var e = [
              0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
              0, 0, 1,
            ];
            this._loadMatrix(e, t);
          }),
          (i.prototype.sepia = function (t) {
            var e = [
              0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999,
              0, 0, 0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
              0, 1,
            ];
            this._loadMatrix(e, t);
          }),
          (i.prototype.technicolor = function (t) {
            var e = [
              1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0,
              11.793603434377337, -0.3087833385928097, 1.7658908555458428,
              -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616,
              -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0,
              0, 0, 1, 0, 0, 0, 0, 0, 0,
            ];
            this._loadMatrix(e, t);
          }),
          (i.prototype.polaroid = function (t) {
            var e = [
              1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016,
              -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
            ];
            this._loadMatrix(e, t);
          }),
          (i.prototype.toBGR = function (t) {
            var e = [
              0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
              0, 0, 1,
            ];
            this._loadMatrix(e, t);
          }),
          (i.prototype.kodachrome = function (t) {
            var e = [
              1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0,
              63.72958762196502, -0.16404339962244616, 1.0835251566291304,
              -0.05498805115633132, 0, 24.732407896706203, -0.16786010706155763,
              -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0,
              0, 0, 1, 0, 0, 0, 0, 0, 1,
            ];
            this._loadMatrix(e, t);
          }),
          (i.prototype.browni = function (t) {
            var e = [
              0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0,
              47.43192855600873, -0.037703249837783157, 0.8609577587992641,
              0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335,
              -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283,
              0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
            ];
            this._loadMatrix(e, t);
          }),
          (i.prototype.vintage = function (t) {
            var e = [
              0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0,
              9.651285835294123, 0.02578397704808868, 0.6441188644374771,
              0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719,
              -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296, 0,
              0, 0, 1, 0, 0, 0, 0, 0, 1,
            ];
            this._loadMatrix(e, t);
          }),
          (i.prototype.colorTone = function (t, e, r, i, n) {
            (t = t || 0.2),
              (e = e || 0.15),
              (r = r || 16770432),
              (i = i || 3375104);
            var o = ((r >> 16) & 255) / 255,
              s = ((r >> 8) & 255) / 255,
              a = (255 & r) / 255,
              h = ((i >> 16) & 255) / 255,
              l = ((i >> 8) & 255) / 255,
              u = (255 & i) / 255,
              c = [
                0.3,
                0.59,
                0.11,
                0,
                0,
                o,
                s,
                a,
                t,
                0,
                h,
                l,
                u,
                e,
                0,
                o - h,
                s - l,
                a - u,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
              ];
            this._loadMatrix(c, n);
          }),
          (i.prototype.night = function (t, e) {
            t = t || 0.1;
            var r = [
              -2 * t,
              -t,
              0,
              0,
              0,
              -t,
              0,
              t,
              0,
              0,
              0,
              t,
              2 * t,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              1,
            ];
            this._loadMatrix(r, e);
          }),
          (i.prototype.predator = function (t, e) {
            var r = [
              11.224130630493164 * t,
              -4.794486999511719 * t,
              -2.8746118545532227 * t,
              0 * t,
              0.40342438220977783 * t,
              -3.6330697536468506 * t,
              9.193157196044922 * t,
              -2.951810836791992 * t,
              0 * t,
              -1.316135048866272 * t,
              -3.2184197902679443 * t,
              -4.2375030517578125 * t,
              7.476448059082031 * t,
              0 * t,
              0.8044459223747253 * t,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
            ];
            this._loadMatrix(r, e);
          }),
          (i.prototype.lsd = function (t) {
            var e = [
              2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0,
              0, 0, 1, 0, 0, 0, 0, 0, 1,
            ];
            this._loadMatrix(e, t);
          }),
          (i.prototype.reset = function () {
            var t = [
              1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,
              0, 0, 1,
            ];
            this._loadMatrix(t, !1);
          }),
          Object.defineProperties(i.prototype, {
            matrix: {
              get: function () {
                return this.uniforms.m.value;
              },
              set: function (t) {
                this.uniforms.m.value = t;
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    86: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            null,
            "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float step;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    color = floor(color * step) / step;\n\n    gl_FragColor = color;\n}\n",
            { step: { type: "1f", value: 5 } }
          );
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            step: {
              get: function () {
                return this.uniforms.step.value;
              },
              set: function (t) {
                this.uniforms.step.value = t;
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    87: [
      function (t, e, r) {
        function i(t, e, r) {
          n.AbstractFilter.call(
            this,
            null,
            "precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n",
            {
              matrix: { type: "1fv", value: new Float32Array(t) },
              texelSize: { type: "2v", value: { x: 1 / e, y: 1 / r } },
            }
          );
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            matrix: {
              get: function () {
                return this.uniforms.matrix.value;
              },
              set: function (t) {
                this.uniforms.matrix.value = new Float32Array(t);
              },
            },
            width: {
              get: function () {
                return 1 / this.uniforms.texelSize.value.x;
              },
              set: function (t) {
                this.uniforms.texelSize.value.x = 1 / t;
              },
            },
            height: {
              get: function () {
                return 1 / this.uniforms.texelSize.value.y;
              },
              set: function (t) {
                this.uniforms.texelSize.value.y = 1 / t;
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    88: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            null,
            "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n"
          );
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i);
      },
      { "../../core": 22 },
    ],
    89: [
      function (t, e, r) {
        function i(t) {
          var e = new n.math.Matrix();
          (t.renderable = !1),
            n.AbstractFilter.call(
              this,
              "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vMapCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n",
              "precision lowp float;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nvoid main(void)\n{\n   vec4 original =  texture2D(uSampler, vTextureCoord);\n   vec4 map =  texture2D(mapSampler, vMapCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y));\n}\n",
              {
                mapSampler: { type: "sampler2D", value: t.texture },
                otherMatrix: { type: "mat3", value: e.toArray(!0) },
                scale: { type: "v2", value: { x: 1, y: 1 } },
              }
            ),
            (this.maskSprite = t),
            (this.maskMatrix = e),
            (this.scale = new n.math.Point(20, 20));
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.applyFilter = function (t, e, r) {
            var i = t.filterManager;
            i.calculateMappedMatrix(e.frame, this.maskSprite, this.maskMatrix),
              (this.uniforms.otherMatrix.value = this.maskMatrix.toArray(!0)),
              (this.uniforms.scale.value.x =
                this.scale.x * (1 / e.frame.width)),
              (this.uniforms.scale.value.y =
                this.scale.y * (1 / e.frame.height));
            var n = this.getShader(t);
            i.applyFilter(n, e, r);
          }),
          Object.defineProperties(i.prototype, {
            map: {
              get: function () {
                return this.uniforms.mapSampler.value;
              },
              set: function (t) {
                this.uniforms.mapSampler.value = t;
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    90: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            null,
            "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 dimensions;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * dimensions.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n",
            {
              scale: { type: "1f", value: 1 },
              angle: { type: "1f", value: 5 },
              dimensions: { type: "4fv", value: [0, 0, 0, 0] },
            }
          );
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            scale: {
              get: function () {
                return this.uniforms.scale.value;
              },
              set: function (t) {
                this.uniforms.scale.value = t;
              },
            },
            angle: {
              get: function () {
                return this.uniforms.angle.value;
              },
              set: function (t) {
                this.uniforms.angle.value = t;
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    91: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform vec2 offset;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition+offset), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n",
            "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform vec3 color;\nuniform float alpha;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec4 sum = vec4(0.0);\n\n    sum += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    sum += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    sum += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    sum += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    sum += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n\n    gl_FragColor = vec4( color.rgb * sum.a * alpha, sum.a * alpha );\n}\n",
            {
              blur: { type: "1f", value: 1 / 512 },
              color: { type: "c", value: [0, 0, 0] },
              alpha: { type: "1f", value: 0.7 },
              offset: { type: "2f", value: [5, 5] },
              strength: { type: "1f", value: 1 },
            }
          ),
            (this.passes = 1),
            (this.strength = 4);
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.applyFilter = function (t, e, r, i) {
            var n = this.getShader(t);
            if (
              ((this.uniforms.strength.value =
                (this.strength / 4 / this.passes) *
                (e.frame.height / e.size.height)),
              1 === this.passes)
            )
              t.filterManager.applyFilter(n, e, r, i);
            else {
              for (
                var o = t.filterManager.getRenderTarget(!0),
                  s = e,
                  a = o,
                  h = 0;
                h < this.passes - 1;
                h++
              ) {
                t.filterManager.applyFilter(n, s, a, i);
                var l = a;
                (a = s), (s = l);
              }
              t.filterManager.applyFilter(n, s, r, i),
                t.filterManager.returnRenderTarget(o);
            }
          }),
          Object.defineProperties(i.prototype, {
            blur: {
              get: function () {
                return this.strength;
              },
              set: function (t) {
                (this.padding = 0.5 * t), (this.strength = t);
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    92: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this),
            (this.blurXFilter = new o()),
            (this.blurYTintFilter = new s()),
            (this.defaultFilter = new n.AbstractFilter()),
            (this.padding = 30),
            (this._dirtyPosition = !0),
            (this._angle = (45 * Math.PI) / 180),
            (this._distance = 10),
            (this.alpha = 0.75),
            (this.hideObject = !1),
            (this.blendMode = n.BLEND_MODES.MULTIPLY);
        }
        var n = t("../../core"),
          o = t("../blur/BlurXFilter"),
          s = t("./BlurYTintFilter");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.applyFilter = function (t, e, r) {
            var i = t.filterManager.getRenderTarget(!0);
            this._dirtyPosition &&
              ((this._dirtyPosition = !1),
              (this.blurYTintFilter.uniforms.offset.value[0] =
                Math.sin(this._angle) * this._distance),
              (this.blurYTintFilter.uniforms.offset.value[1] =
                Math.cos(this._angle) * this._distance)),
              this.blurXFilter.applyFilter(t, e, i),
              t.blendModeManager.setBlendMode(this.blendMode),
              this.blurYTintFilter.applyFilter(t, i, r),
              t.blendModeManager.setBlendMode(n.BLEND_MODES.NORMAL),
              this.hideObject || this.defaultFilter.applyFilter(t, e, r),
              t.filterManager.returnRenderTarget(i);
          }),
          Object.defineProperties(i.prototype, {
            blur: {
              get: function () {
                return this.blurXFilter.blur;
              },
              set: function (t) {
                this.blurXFilter.blur = this.blurYTintFilter.blur = t;
              },
            },
            blurX: {
              get: function () {
                return this.blurXFilter.blur;
              },
              set: function (t) {
                this.blurXFilter.blur = t;
              },
            },
            blurY: {
              get: function () {
                return this.blurYTintFilter.blur;
              },
              set: function (t) {
                this.blurYTintFilter.blur = t;
              },
            },
            color: {
              get: function () {
                return n.utils.rgb2hex(
                  this.blurYTintFilter.uniforms.color.value
                );
              },
              set: function (t) {
                this.blurYTintFilter.uniforms.color.value = n.utils.hex2rgb(t);
              },
            },
            alpha: {
              get: function () {
                return this.blurYTintFilter.uniforms.alpha.value;
              },
              set: function (t) {
                this.blurYTintFilter.uniforms.alpha.value = t;
              },
            },
            distance: {
              get: function () {
                return this._distance;
              },
              set: function (t) {
                (this._dirtyPosition = !0), (this._distance = t);
              },
            },
            angle: {
              get: function () {
                return this._angle;
              },
              set: function (t) {
                (this._dirtyPosition = !0), (this._angle = t);
              },
            },
          });
      },
      { "../../core": 22, "../blur/BlurXFilter": 82, "./BlurYTintFilter": 91 },
    ],
    93: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            null,
            "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float gray;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);\n}\n",
            { gray: { type: "1f", value: 1 } }
          );
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            gray: {
              get: function () {
                return this.uniforms.gray.value;
              },
              set: function (t) {
                this.uniforms.gray.value = t;
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    94: [
      function (t, e, r) {
        e.exports = {
          AbstractFilter: t("../core/renderers/webgl/filters/AbstractFilter"),
          FXAAFilter: t("../core/renderers/webgl/filters/FXAAFilter"),
          SpriteMaskFilter: t(
            "../core/renderers/webgl/filters/SpriteMaskFilter"
          ),
          AsciiFilter: t("./ascii/AsciiFilter"),
          BloomFilter: t("./bloom/BloomFilter"),
          BlurFilter: t("./blur/BlurFilter"),
          BlurXFilter: t("./blur/BlurXFilter"),
          BlurYFilter: t("./blur/BlurYFilter"),
          BlurDirFilter: t("./blur/BlurDirFilter"),
          ColorMatrixFilter: t("./color/ColorMatrixFilter"),
          ColorStepFilter: t("./color/ColorStepFilter"),
          ConvolutionFilter: t("./convolution/ConvolutionFilter"),
          CrossHatchFilter: t("./crosshatch/CrossHatchFilter"),
          DisplacementFilter: t("./displacement/DisplacementFilter"),
          DotScreenFilter: t("./dot/DotScreenFilter"),
          GrayFilter: t("./gray/GrayFilter"),
          DropShadowFilter: t("./dropshadow/DropShadowFilter"),
          InvertFilter: t("./invert/InvertFilter"),
          NoiseFilter: t("./noise/NoiseFilter"),
          NormalMapFilter: t("./normal/NormalMapFilter"),
          PixelateFilter: t("./pixelate/PixelateFilter"),
          RGBSplitFilter: t("./rgb/RGBSplitFilter"),
          ShockwaveFilter: t("./shockwave/ShockwaveFilter"),
          SepiaFilter: t("./sepia/SepiaFilter"),
          SmartBlurFilter: t("./blur/SmartBlurFilter"),
          TiltShiftFilter: t("./tiltshift/TiltShiftFilter"),
          TiltShiftXFilter: t("./tiltshift/TiltShiftXFilter"),
          TiltShiftYFilter: t("./tiltshift/TiltShiftYFilter"),
          TwistFilter: t("./twist/TwistFilter"),
        };
      },
      {
        "../core/renderers/webgl/filters/AbstractFilter": 42,
        "../core/renderers/webgl/filters/FXAAFilter": 43,
        "../core/renderers/webgl/filters/SpriteMaskFilter": 44,
        "./ascii/AsciiFilter": 78,
        "./bloom/BloomFilter": 79,
        "./blur/BlurDirFilter": 80,
        "./blur/BlurFilter": 81,
        "./blur/BlurXFilter": 82,
        "./blur/BlurYFilter": 83,
        "./blur/SmartBlurFilter": 84,
        "./color/ColorMatrixFilter": 85,
        "./color/ColorStepFilter": 86,
        "./convolution/ConvolutionFilter": 87,
        "./crosshatch/CrossHatchFilter": 88,
        "./displacement/DisplacementFilter": 89,
        "./dot/DotScreenFilter": 90,
        "./dropshadow/DropShadowFilter": 92,
        "./gray/GrayFilter": 93,
        "./invert/InvertFilter": 95,
        "./noise/NoiseFilter": 96,
        "./normal/NormalMapFilter": 97,
        "./pixelate/PixelateFilter": 98,
        "./rgb/RGBSplitFilter": 99,
        "./sepia/SepiaFilter": 100,
        "./shockwave/ShockwaveFilter": 101,
        "./tiltshift/TiltShiftFilter": 103,
        "./tiltshift/TiltShiftXFilter": 104,
        "./tiltshift/TiltShiftYFilter": 105,
        "./twist/TwistFilter": 106,
      },
    ],
    95: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            null,
            "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform float invert;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);\n}\n",
            { invert: { type: "1f", value: 1 } }
          );
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            invert: {
              get: function () {
                return this.uniforms.invert.value;
              },
              set: function (t) {
                this.uniforms.invert.value = t;
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    96: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            null,
            "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(vTextureCoord) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n",
            { noise: { type: "1f", value: 0.5 } }
          );
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            noise: {
              get: function () {
                return this.uniforms.noise.value;
              },
              set: function (t) {
                this.uniforms.noise.value = t;
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    97: [
      function (t, e, r) {
        function i(t) {
          n.AbstractFilter.call(
            this,
            null,
            "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying float vColor;\n\nuniform sampler2D displacementMap;\nuniform sampler2D uSampler;\n\nuniform vec4 dimensions;\n\nconst vec2 Resolution = vec2(1.0,1.0);      //resolution of screen\nuniform vec3 LightPos;    //light position, normalized\nconst vec4 LightColor = vec4(1.0, 1.0, 1.0, 1.0);      //light RGBA -- alpha is intensity\nconst vec4 AmbientColor = vec4(1.0, 1.0, 1.0, 0.5);    //ambient RGBA -- alpha is intensity\nconst vec3 Falloff = vec3(0.0, 1.0, 0.2);         //attenuation coefficients\n\nuniform vec3 LightDir; // = vec3(1.0, 0.0, 1.0);\n\nuniform vec2 mapDimensions; // = vec2(256.0, 256.0);\n\n\nvoid main(void)\n{\n    vec2 mapCords = vTextureCoord.xy;\n\n    vec4 color = texture2D(uSampler, vTextureCoord.st);\n    vec3 nColor = texture2D(displacementMap, vTextureCoord.st).rgb;\n\n\n    mapCords *= vec2(dimensions.x/512.0, dimensions.y/512.0);\n\n    mapCords.y *= -1.0;\n    mapCords.y += 1.0;\n\n    // RGBA of our diffuse color\n    vec4 DiffuseColor = texture2D(uSampler, vTextureCoord);\n\n    // RGB of our normal map\n    vec3 NormalMap = texture2D(displacementMap, mapCords).rgb;\n\n    // The delta position of light\n    // vec3 LightDir = vec3(LightPos.xy - (gl_FragCoord.xy / Resolution.xy), LightPos.z);\n    vec3 LightDir = vec3(LightPos.xy - (mapCords.xy), LightPos.z);\n\n    // Correct for aspect ratio\n    // LightDir.x *= Resolution.x / Resolution.y;\n\n    // Determine distance (used for attenuation) BEFORE we normalize our LightDir\n    float D = length(LightDir);\n\n    // normalize our vectors\n    vec3 N = normalize(NormalMap * 2.0 - 1.0);\n    vec3 L = normalize(LightDir);\n\n    // Pre-multiply light color with intensity\n    // Then perform 'N dot L' to determine our diffuse term\n    vec3 Diffuse = (LightColor.rgb * LightColor.a) * max(dot(N, L), 0.0);\n\n    // pre-multiply ambient color with intensity\n    vec3 Ambient = AmbientColor.rgb * AmbientColor.a;\n\n    // calculate attenuation\n    float Attenuation = 1.0 / ( Falloff.x + (Falloff.y*D) + (Falloff.z*D*D) );\n\n    // the calculation which brings it all together\n    vec3 Intensity = Ambient + Diffuse * Attenuation;\n    vec3 FinalColor = DiffuseColor.rgb * Intensity;\n    gl_FragColor = vColor * vec4(FinalColor, DiffuseColor.a);\n\n    // gl_FragColor = vec4(1.0, 0.0, 0.0, Attenuation); // vColor * vec4(FinalColor, DiffuseColor.a);\n\n/*\n    // normalise color\n    vec3 normal = normalize(nColor * 2.0 - 1.0);\n\n    vec3 deltaPos = vec3( (light.xy - gl_FragCoord.xy) / resolution.xy, light.z );\n\n    float lambert = clamp(dot(normal, lightDir), 0.0, 1.0);\n\n    float d = sqrt(dot(deltaPos, deltaPos));\n    float att = 1.0 / ( attenuation.x + (attenuation.y*d) + (attenuation.z*d*d) );\n\n    vec3 result = (ambientColor * ambientIntensity) + (lightColor.rgb * lambert) * att;\n    result *= color.rgb;\n\n    gl_FragColor = vec4(result, 1.0);\n*/\n}\n",
            {
              displacementMap: { type: "sampler2D", value: t },
              scale: { type: "2f", value: { x: 15, y: 15 } },
              offset: { type: "2f", value: { x: 0, y: 0 } },
              mapDimensions: { type: "2f", value: { x: 1, y: 1 } },
              dimensions: { type: "4f", value: [0, 0, 0, 0] },
              LightPos: { type: "3f", value: [0, 1, 0] },
            }
          ),
            (t.baseTexture._powerOf2 = !0),
            t.baseTexture.hasLoaded
              ? this.onTextureLoaded()
              : t.baseTexture.once("loaded", this.onTextureLoaded, this);
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.onTextureLoaded = function () {
            (this.uniforms.mapDimensions.value.x =
              this.uniforms.displacementMap.value.width),
              (this.uniforms.mapDimensions.value.y =
                this.uniforms.displacementMap.value.height);
          }),
          Object.defineProperties(i.prototype, {
            map: {
              get: function () {
                return this.uniforms.displacementMap.value;
              },
              set: function (t) {
                this.uniforms.displacementMap.value = t;
              },
            },
            scale: {
              get: function () {
                return this.uniforms.scale.value;
              },
              set: function (t) {
                this.uniforms.scale.value = t;
              },
            },
            offset: {
              get: function () {
                return this.uniforms.offset.value;
              },
              set: function (t) {
                this.uniforms.offset.value = t;
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    98: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            null,
            "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 dimensions;\nuniform vec2 pixelSize;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord;\n\n    vec2 size = dimensions.xy / pixelSize;\n\n    vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;\n\n    gl_FragColor = texture2D(uSampler, color);\n}\n",
            {
              dimensions: {
                type: "4fv",
                value: new Float32Array([0, 0, 0, 0]),
              },
              pixelSize: { type: "v2", value: { x: 10, y: 10 } },
            }
          );
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            size: {
              get: function () {
                return this.uniforms.pixelSize.value;
              },
              set: function (t) {
                this.uniforms.pixelSize.value = t;
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    99: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            null,
            "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 dimensions;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n",
            {
              red: { type: "v2", value: { x: 20, y: 20 } },
              green: { type: "v2", value: { x: -20, y: 20 } },
              blue: { type: "v2", value: { x: 20, y: -20 } },
              dimensions: { type: "4fv", value: [0, 0, 0, 0] },
            }
          );
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            red: {
              get: function () {
                return this.uniforms.red.value;
              },
              set: function (t) {
                this.uniforms.red.value = t;
              },
            },
            green: {
              get: function () {
                return this.uniforms.green.value;
              },
              set: function (t) {
                this.uniforms.green.value = t;
              },
            },
            blue: {
              get: function () {
                return this.uniforms.blue.value;
              },
              set: function (t) {
                this.uniforms.blue.value = t;
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    100: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            null,
            "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float sepia;\n\nconst mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);\n}\n",
            { sepia: { type: "1f", value: 1 } }
          );
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            sepia: {
              get: function () {
                return this.uniforms.sepia.value;
              },
              set: function (t) {
                this.uniforms.sepia.value = t;
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    101: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            null,
            "precision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nuniform vec2 center;\nuniform vec3 params; // 10.0, 0.8, 0.1\nuniform float time;\n\nvoid main()\n{\n    vec2 uv = vTextureCoord;\n    vec2 texCoord = uv;\n\n    float dist = distance(uv, center);\n\n    if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )\n    {\n        float diff = (dist - time);\n        float powDiff = 1.0 - pow(abs(diff*params.x), params.y);\n\n        float diffTime = diff  * powDiff;\n        vec2 diffUV = normalize(uv - center);\n        texCoord = uv + (diffUV * diffTime);\n    }\n\n    gl_FragColor = texture2D(uSampler, texCoord);\n}\n",
            {
              center: { type: "v2", value: { x: 0.5, y: 0.5 } },
              params: { type: "v3", value: { x: 10, y: 0.8, z: 0.1 } },
              time: { type: "1f", value: 0 },
            }
          );
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            center: {
              get: function () {
                return this.uniforms.center.value;
              },
              set: function (t) {
                this.uniforms.center.value = t;
              },
            },
            params: {
              get: function () {
                return this.uniforms.params.value;
              },
              set: function (t) {
                this.uniforms.params.value = t;
              },
            },
            time: {
              get: function () {
                return this.uniforms.time.value;
              },
              set: function (t) {
                this.uniforms.time.value = t;
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    102: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            null,
            "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n",
            {
              blur: { type: "1f", value: 100 },
              gradientBlur: { type: "1f", value: 600 },
              start: { type: "v2", value: { x: 0, y: window.innerHeight / 2 } },
              end: { type: "v2", value: { x: 600, y: window.innerHeight / 2 } },
              delta: { type: "v2", value: { x: 30, y: 30 } },
              texSize: {
                type: "v2",
                value: { x: window.innerWidth, y: window.innerHeight },
              },
            }
          ),
            this.updateDelta();
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.updateDelta = function () {
            (this.uniforms.delta.value.x = 0),
              (this.uniforms.delta.value.y = 0);
          }),
          Object.defineProperties(i.prototype, {
            blur: {
              get: function () {
                return this.uniforms.blur.value;
              },
              set: function (t) {
                this.uniforms.blur.value = t;
              },
            },
            gradientBlur: {
              get: function () {
                return this.uniforms.gradientBlur.value;
              },
              set: function (t) {
                this.uniforms.gradientBlur.value = t;
              },
            },
            start: {
              get: function () {
                return this.uniforms.start.value;
              },
              set: function (t) {
                (this.uniforms.start.value = t), this.updateDelta();
              },
            },
            end: {
              get: function () {
                return this.uniforms.end.value;
              },
              set: function (t) {
                (this.uniforms.end.value = t), this.updateDelta();
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    103: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this),
            (this.tiltShiftXFilter = new o()),
            (this.tiltShiftYFilter = new s());
        }
        var n = t("../../core"),
          o = t("./TiltShiftXFilter"),
          s = t("./TiltShiftYFilter");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.applyFilter = function (t, e, r) {
            var i = t.filterManager.getRenderTarget(!0);
            this.tiltShiftXFilter.applyFilter(t, e, i),
              this.tiltShiftYFilter.applyFilter(t, i, r),
              t.filterManager.returnRenderTarget(i);
          }),
          Object.defineProperties(i.prototype, {
            blur: {
              get: function () {
                return this.tiltShiftXFilter.blur;
              },
              set: function (t) {
                this.tiltShiftXFilter.blur = this.tiltShiftYFilter.blur = t;
              },
            },
            gradientBlur: {
              get: function () {
                return this.tiltShiftXFilter.gradientBlur;
              },
              set: function (t) {
                this.tiltShiftXFilter.gradientBlur =
                  this.tiltShiftYFilter.gradientBlur = t;
              },
            },
            start: {
              get: function () {
                return this.tiltShiftXFilter.start;
              },
              set: function (t) {
                this.tiltShiftXFilter.start = this.tiltShiftYFilter.start = t;
              },
            },
            end: {
              get: function () {
                return this.tiltShiftXFilter.end;
              },
              set: function (t) {
                this.tiltShiftXFilter.end = this.tiltShiftYFilter.end = t;
              },
            },
          });
      },
      {
        "../../core": 22,
        "./TiltShiftXFilter": 104,
        "./TiltShiftYFilter": 105,
      },
    ],
    104: [
      function (t, e, r) {
        function i() {
          n.call(this);
        }
        var n = t("./TiltShiftAxisFilter");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.updateDelta = function () {
            var t = this.uniforms.end.value.x - this.uniforms.start.value.x,
              e = this.uniforms.end.value.y - this.uniforms.start.value.y,
              r = Math.sqrt(t * t + e * e);
            (this.uniforms.delta.value.x = t / r),
              (this.uniforms.delta.value.y = e / r);
          });
      },
      { "./TiltShiftAxisFilter": 102 },
    ],
    105: [
      function (t, e, r) {
        function i() {
          n.call(this);
        }
        var n = t("./TiltShiftAxisFilter");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.updateDelta = function () {
            var t = this.uniforms.end.value.x - this.uniforms.start.value.x,
              e = this.uniforms.end.value.y - this.uniforms.start.value.y,
              r = Math.sqrt(t * t + e * e);
            (this.uniforms.delta.value.x = -e / r),
              (this.uniforms.delta.value.y = t / r);
          });
      },
      { "./TiltShiftAxisFilter": 102 },
    ],
    106: [
      function (t, e, r) {
        function i() {
          n.AbstractFilter.call(
            this,
            null,
            "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\n\nvoid main(void)\n{\n   vec2 coord = vTextureCoord - offset;\n   float dist = length(coord);\n\n   if (dist < radius)\n   {\n       float ratio = (radius - dist) / radius;\n       float angleMod = ratio * ratio * angle;\n       float s = sin(angleMod);\n       float c = cos(angleMod);\n       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n   }\n\n   gl_FragColor = texture2D(uSampler, coord+offset);\n}\n",
            {
              radius: { type: "1f", value: 0.5 },
              angle: { type: "1f", value: 5 },
              offset: { type: "v2", value: { x: 0.5, y: 0.5 } },
            }
          );
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.AbstractFilter.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          Object.defineProperties(i.prototype, {
            offset: {
              get: function () {
                return this.uniforms.offset.value;
              },
              set: function (t) {
                this.uniforms.offset.value = t;
              },
            },
            radius: {
              get: function () {
                return this.uniforms.radius.value;
              },
              set: function (t) {
                this.uniforms.radius.value = t;
              },
            },
            angle: {
              get: function () {
                return this.uniforms.angle.value;
              },
              set: function (t) {
                this.uniforms.angle.value = t;
              },
            },
          });
      },
      { "../../core": 22 },
    ],
    107: [
      function (t, e, r) {
        function i() {
          (this.global = new n.Point()),
            (this.target = null),
            (this.originalEvent = null);
        }
        var n = t("../core");
        (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.getLocalPosition = function (t, e, r) {
            var i = t.worldTransform,
              o = r ? r : this.global,
              s = i.a,
              a = i.c,
              h = i.tx,
              l = i.b,
              u = i.d,
              c = i.ty,
              p = 1 / (s * u + a * -l);
            return (
              (e = e || new n.math.Point()),
              (e.x = u * p * o.x + -a * p * o.y + (c * a - h * u) * p),
              (e.y = s * p * o.y + -l * p * o.x + (-c * s + h * l) * p),
              e
            );
          });
      },
      { "../core": 22 },
    ],
    108: [
      function (t, e, r) {
        function i(t, e) {
          (e = e || {}),
            (this.renderer = t),
            (this.autoPreventDefault =
              void 0 !== e.autoPreventDefault ? e.autoPreventDefault : !0),
            (this.interactionFrequency = e.interactionFrequency || 10),
            (this.mouse = new o()),
            (this.eventData = {
              stopped: !1,
              target: null,
              type: null,
              data: this.mouse,
              stopPropagation: function () {
                this.stopped = !0;
              },
            }),
            (this.interactiveDataPool = []),
            (this.interactionDOMElement = null),
            (this.eventsAdded = !1),
            (this.onMouseUp = this.onMouseUp.bind(this)),
            (this.processMouseUp = this.processMouseUp.bind(this)),
            (this.onMouseDown = this.onMouseDown.bind(this)),
            (this.processMouseDown = this.processMouseDown.bind(this)),
            (this.onMouseMove = this.onMouseMove.bind(this)),
            (this.processMouseMove = this.processMouseMove.bind(this)),
            (this.onMouseOut = this.onMouseOut.bind(this)),
            (this.processMouseOverOut = this.processMouseOverOut.bind(this)),
            (this.onTouchStart = this.onTouchStart.bind(this)),
            (this.processTouchStart = this.processTouchStart.bind(this)),
            (this.onTouchEnd = this.onTouchEnd.bind(this)),
            (this.processTouchEnd = this.processTouchEnd.bind(this)),
            (this.onTouchMove = this.onTouchMove.bind(this)),
            (this.processTouchMove = this.processTouchMove.bind(this)),
            (this.last = 0),
            (this.currentCursorStyle = "inherit"),
            (this._tempPoint = new n.Point()),
            (this.resolution = 1),
            this.setTargetElement(this.renderer.view, this.renderer.resolution);
        }
        var n = t("../core"),
          o = t("./InteractionData");
        Object.assign(n.DisplayObject.prototype, t("./interactiveTarget")),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.setTargetElement = function (t, e) {
            this.removeEvents(),
              (this.interactionDOMElement = t),
              (this.resolution = e || 1),
              this.addEvents();
          }),
          (i.prototype.addEvents = function () {
            this.interactionDOMElement &&
              (n.ticker.shared.add(this.update, this),
              window.navigator.msPointerEnabled &&
                ((this.interactionDOMElement.style["-ms-content-zooming"] =
                  "none"),
                (this.interactionDOMElement.style["-ms-touch-action"] =
                  "none")),
              window.document.addEventListener(
                "mousemove",
                this.onMouseMove,
                !0
              ),
              this.interactionDOMElement.addEventListener(
                "mousedown",
                this.onMouseDown,
                !0
              ),
              this.interactionDOMElement.addEventListener(
                "mouseout",
                this.onMouseOut,
                !0
              ),
              this.interactionDOMElement.addEventListener(
                "touchstart",
                this.onTouchStart,
                !0
              ),
              this.interactionDOMElement.addEventListener(
                "touchend",
                this.onTouchEnd,
                !0
              ),
              this.interactionDOMElement.addEventListener(
                "touchmove",
                this.onTouchMove,
                !0
              ),
              window.addEventListener("mouseup", this.onMouseUp, !0),
              (this.eventsAdded = !0));
          }),
          (i.prototype.removeEvents = function () {
            this.interactionDOMElement &&
              (n.ticker.shared.remove(this.update),
              window.navigator.msPointerEnabled &&
                ((this.interactionDOMElement.style["-ms-content-zooming"] = ""),
                (this.interactionDOMElement.style["-ms-touch-action"] = "")),
              window.document.removeEventListener(
                "mousemove",
                this.onMouseMove,
                !0
              ),
              this.interactionDOMElement.removeEventListener(
                "mousedown",
                this.onMouseDown,
                !0
              ),
              this.interactionDOMElement.removeEventListener(
                "mouseout",
                this.onMouseOut,
                !0
              ),
              this.interactionDOMElement.removeEventListener(
                "touchstart",
                this.onTouchStart,
                !0
              ),
              this.interactionDOMElement.removeEventListener(
                "touchend",
                this.onTouchEnd,
                !0
              ),
              this.interactionDOMElement.removeEventListener(
                "touchmove",
                this.onTouchMove,
                !0
              ),
              (this.interactionDOMElement = null),
              window.removeEventListener("mouseup", this.onMouseUp, !0),
              (this.eventsAdded = !1));
          }),
          (i.prototype.update = function (t) {
            if (
              ((this._deltaTime += t),
              !(this._deltaTime < this.interactionFrequency) &&
                ((this._deltaTime = 0), this.interactionDOMElement))
            ) {
              if (this.didMove) return void (this.didMove = !1);
              (this.cursor = "inherit"),
                this.processInteractive(
                  this.mouse.global,
                  this.renderer._lastObjectRendered,
                  this.processMouseOverOut,
                  !0
                ),
                this.currentCursorStyle !== this.cursor &&
                  ((this.currentCursorStyle = this.cursor),
                  (this.interactionDOMElement.style.cursor = this.cursor));
            }
          }),
          (i.prototype.dispatchEvent = function (t, e, r) {
            r.stopped ||
              ((r.target = t), (r.type = e), t.emit(e, r), t[e] && t[e](r));
          }),
          (i.prototype.mapPositionToPoint = function (t, e, r) {
            var i = this.interactionDOMElement.getBoundingClientRect();
            (t.x =
              ((e - i.left) * (this.interactionDOMElement.width / i.width)) /
              this.resolution),
              (t.y =
                ((r - i.top) * (this.interactionDOMElement.height / i.height)) /
                this.resolution);
          }),
          (i.prototype.processInteractive = function (t, e, r, i, n) {
            if (!e.visible) return !1;
            var o = e.children,
              s = !1;
            if (((n = n || e.interactive), e.interactiveChildren))
              for (var a = o.length - 1; a >= 0; a--)
                !s && i
                  ? (s = this.processInteractive(t, o[a], r, !0, n))
                  : this.processInteractive(t, o[a], r, !1, !1);
            return (
              n &&
                (i &&
                  (e.hitArea
                    ? (e.worldTransform.applyInverse(t, this._tempPoint),
                      (s = e.hitArea.contains(
                        this._tempPoint.x,
                        this._tempPoint.y
                      )))
                    : e.containsPoint && (s = e.containsPoint(t))),
                e.interactive && r(e, s)),
              s
            );
          }),
          (i.prototype.onMouseDown = function (t) {
            (this.mouse.originalEvent = t),
              (this.eventData.data = this.mouse),
              (this.eventData.stopped = !1),
              this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY),
              this.autoPreventDefault &&
                this.mouse.originalEvent.preventDefault(),
              this.processInteractive(
                this.mouse.global,
                this.renderer._lastObjectRendered,
                this.processMouseDown,
                !0
              );
          }),
          (i.prototype.processMouseDown = function (t, e) {
            var r = this.mouse.originalEvent,
              i = 2 === r.button || 3 === r.which;
            e &&
              ((t[i ? "_isRightDown" : "_isLeftDown"] = !0),
              this.dispatchEvent(
                t,
                i ? "rightdown" : "mousedown",
                this.eventData
              ));
          }),
          (i.prototype.onMouseUp = function (t) {
            (this.mouse.originalEvent = t),
              (this.eventData.data = this.mouse),
              (this.eventData.stopped = !1),
              this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY),
              this.processInteractive(
                this.mouse.global,
                this.renderer._lastObjectRendered,
                this.processMouseUp,
                !0
              );
          }),
          (i.prototype.processMouseUp = function (t, e) {
            var r = this.mouse.originalEvent,
              i = 2 === r.button || 3 === r.which,
              n = i ? "_isRightDown" : "_isLeftDown";
            e
              ? (this.dispatchEvent(
                  t,
                  i ? "rightup" : "mouseup",
                  this.eventData
                ),
                t[n] &&
                  ((t[n] = !1),
                  this.dispatchEvent(
                    t,
                    i ? "rightclick" : "click",
                    this.eventData
                  )))
              : t[n] &&
                ((t[n] = !1),
                this.dispatchEvent(
                  t,
                  i ? "rightupoutside" : "mouseupoutside",
                  this.eventData
                ));
          }),
          (i.prototype.onMouseMove = function (t) {
            (this.mouse.originalEvent = t),
              (this.eventData.data = this.mouse),
              (this.eventData.stopped = !1),
              this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY),
              (this.didMove = !0),
              (this.cursor = "inherit"),
              this.processInteractive(
                this.mouse.global,
                this.renderer._lastObjectRendered,
                this.processMouseMove,
                !0
              ),
              this.currentCursorStyle !== this.cursor &&
                ((this.currentCursorStyle = this.cursor),
                (this.interactionDOMElement.style.cursor = this.cursor));
          }),
          (i.prototype.processMouseMove = function (t, e) {
            this.dispatchEvent(t, "mousemove", this.eventData),
              this.processMouseOverOut(t, e);
          }),
          (i.prototype.onMouseOut = function (t) {
            (this.mouse.originalEvent = t),
              (this.eventData.stopped = !1),
              this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY),
              (this.interactionDOMElement.style.cursor = "inherit"),
              this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY),
              this.processInteractive(
                this.mouse.global,
                this.renderer._lastObjectRendered,
                this.processMouseOverOut,
                !1
              );
          }),
          (i.prototype.processMouseOverOut = function (t, e) {
            e
              ? (t._over ||
                  ((t._over = !0),
                  this.dispatchEvent(t, "mouseover", this.eventData)),
                t.buttonMode && (this.cursor = t.defaultCursor))
              : t._over &&
                ((t._over = !1),
                this.dispatchEvent(t, "mouseout", this.eventData));
          }),
          (i.prototype.onTouchStart = function (t) {
            this.autoPreventDefault && t.preventDefault();
            for (var e = t.changedTouches, r = e.length, i = 0; r > i; i++) {
              var n = e[i],
                o = this.getTouchData(n);
              (o.originalEvent = t),
                (this.eventData.data = o),
                (this.eventData.stopped = !1),
                this.processInteractive(
                  o.global,
                  this.renderer._lastObjectRendered,
                  this.processTouchStart,
                  !0
                ),
                this.returnTouchData(o);
            }
          }),
          (i.prototype.processTouchStart = function (t, e) {
            e &&
              ((t._touchDown = !0),
              this.dispatchEvent(t, "touchstart", this.eventData));
          }),
          (i.prototype.onTouchEnd = function (t) {
            this.autoPreventDefault && t.preventDefault();
            for (var e = t.changedTouches, r = e.length, i = 0; r > i; i++) {
              var n = e[i],
                o = this.getTouchData(n);
              (o.originalEvent = t),
                (this.eventData.data = o),
                (this.eventData.stopped = !1),
                this.processInteractive(
                  o.global,
                  this.renderer._lastObjectRendered,
                  this.processTouchEnd,
                  !0
                ),
                this.returnTouchData(o);
            }
          }),
          (i.prototype.processTouchEnd = function (t, e) {
            e
              ? (this.dispatchEvent(t, "touchend", this.eventData),
                t._touchDown &&
                  ((t._touchDown = !1),
                  this.dispatchEvent(t, "tap", this.eventData)))
              : t._touchDown &&
                ((t._touchDown = !1),
                this.dispatchEvent(t, "touchendoutside", this.eventData));
          }),
          (i.prototype.onTouchMove = function (t) {
            this.autoPreventDefault && t.preventDefault();
            for (var e = t.changedTouches, r = e.length, i = 0; r > i; i++) {
              var n = e[i],
                o = this.getTouchData(n);
              (o.originalEvent = t),
                (this.eventData.data = o),
                (this.eventData.stopped = !1),
                this.processInteractive(
                  o.global,
                  this.renderer._lastObjectRendered,
                  this.processTouchMove,
                  !1
                ),
                this.returnTouchData(o);
            }
          }),
          (i.prototype.processTouchMove = function (t, e) {
            (e = e), this.dispatchEvent(t, "touchmove", this.eventData);
          }),
          (i.prototype.getTouchData = function (t) {
            var e = this.interactiveDataPool.pop();
            return (
              e || (e = new o()),
              (e.identifier = t.identifier),
              this.mapPositionToPoint(e.global, t.clientX, t.clientY),
              (t.globalX = e.global.x),
              (t.globalY = e.global.y),
              e
            );
          }),
          (i.prototype.returnTouchData = function (t) {
            this.interactiveDataPool.push(t);
          }),
          (i.prototype.destroy = function () {
            this.removeEvents(),
              (this.renderer = null),
              (this.mouse = null),
              (this.eventData = null),
              (this.interactiveDataPool = null),
              (this.interactionDOMElement = null),
              (this.onMouseUp = null),
              (this.processMouseUp = null),
              (this.onMouseDown = null),
              (this.processMouseDown = null),
              (this.onMouseMove = null),
              (this.processMouseMove = null),
              (this.onMouseOut = null),
              (this.processMouseOverOut = null),
              (this.onTouchStart = null),
              (this.processTouchStart = null),
              (this.onTouchEnd = null),
              (this.processTouchEnd = null),
              (this.onTouchMove = null),
              (this.processTouchMove = null),
              (this._tempPoint = null);
          }),
          n.WebGLRenderer.registerPlugin("interaction", i),
          n.CanvasRenderer.registerPlugin("interaction", i);
      },
      { "../core": 22, "./InteractionData": 107, "./interactiveTarget": 110 },
    ],
    109: [
      function (t, e, r) {
        e.exports = {
          InteractionData: t("./InteractionData"),
          InteractionManager: t("./InteractionManager"),
          interactiveTarget: t("./interactiveTarget"),
        };
      },
      {
        "./InteractionData": 107,
        "./InteractionManager": 108,
        "./interactiveTarget": 110,
      },
    ],
    110: [
      function (t, e, r) {
        e.exports = {
          interactive: !1,
          buttonMode: !1,
          interactiveChildren: !0,
          defaultCursor: "pointer",
          _over: !1,
          _touchDown: !1,
        };
      },
      {},
    ],
    111: [
      function (t, e, r) {
        function i(t, e) {
          var r = {},
            i = t.data.getElementsByTagName("info")[0],
            n = t.data.getElementsByTagName("common")[0];
          (r.font = i.getAttribute("face")),
            (r.size = parseInt(i.getAttribute("size"), 10)),
            (r.lineHeight = parseInt(n.getAttribute("lineHeight"), 10)),
            (r.chars = {});
          for (
            var s = t.data.getElementsByTagName("char"), h = 0;
            h < s.length;
            h++
          ) {
            var l = parseInt(s[h].getAttribute("id"), 10),
              u = new o.math.Rectangle(
                parseInt(s[h].getAttribute("x"), 10) + e.frame.x,
                parseInt(s[h].getAttribute("y"), 10) + e.frame.y,
                parseInt(s[h].getAttribute("width"), 10),
                parseInt(s[h].getAttribute("height"), 10)
              );
            r.chars[l] = {
              xOffset: parseInt(s[h].getAttribute("xoffset"), 10),
              yOffset: parseInt(s[h].getAttribute("yoffset"), 10),
              xAdvance: parseInt(s[h].getAttribute("xadvance"), 10),
              kerning: {},
              texture: new o.Texture(e.baseTexture, u),
            };
          }
          var c = t.data.getElementsByTagName("kerning");
          for (h = 0; h < c.length; h++) {
            var p = parseInt(c[h].getAttribute("first"), 10),
              d = parseInt(c[h].getAttribute("second"), 10),
              f = parseInt(c[h].getAttribute("amount"), 10);
            r.chars[d].kerning[p] = f;
          }
          (t.bitmapFont = r), (a.BitmapText.fonts[r.font] = r);
        }
        var n = t("resource-loader").Resource,
          o = t("../core"),
          s = t("../core/utils"),
          a = t("../extras"),
          h = t("path");
        e.exports = function () {
          return function (t, e) {
            if (!t.data || !t.isXml) return e();
            if (
              0 === t.data.getElementsByTagName("page").length ||
              0 === t.data.getElementsByTagName("info").length ||
              null ===
                t.data.getElementsByTagName("info")[0].getAttribute("face")
            )
              return e();
            var r = h.dirname(t.url);
            "." === r && (r = ""),
              this.baseUrl &&
                r &&
                ("/" === this.baseUrl.charAt(this.baseUrl.length - 1) &&
                  (r += "/"),
                (r = r.replace(this.baseUrl, ""))),
              r && "/" !== r.charAt(r.length - 1) && (r += "/");
            var o =
              r + t.data.getElementsByTagName("page")[0].getAttribute("file");
            if (s.TextureCache[o]) i(t, s.TextureCache[o]), e();
            else {
              var a = {
                crossOrigin: t.crossOrigin,
                loadType: n.LOAD_TYPE.IMAGE,
              };
              this.add(t.name + "_image", o, a, function (r) {
                i(t, r.texture), e();
              });
            }
          };
        };
      },
      {
        "../core": 22,
        "../core/utils": 68,
        "../extras": 77,
        path: 2,
        "resource-loader": 11,
      },
    ],
    112: [
      function (t, e, r) {
        e.exports = {
          Loader: t("./loader"),
          bitmapFontParser: t("./bitmapFontParser"),
          spritesheetParser: t("./spritesheetParser"),
          textureParser: t("./textureParser"),
          Resource: t("resource-loader").Resource,
        };
      },
      {
        "./bitmapFontParser": 111,
        "./loader": 113,
        "./spritesheetParser": 114,
        "./textureParser": 115,
        "resource-loader": 11,
      },
    ],
    113: [
      function (t, e, r) {
        function i(t, e) {
          n.call(this, t, e),
            this.use(n.middleware.parsing.blob()),
            this.use(o()),
            this.use(s()),
            this.use(a());
        }
        var n = t("resource-loader"),
          o = t("./textureParser"),
          s = t("./spritesheetParser"),
          a = t("./bitmapFontParser");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i);
      },
      {
        "./bitmapFontParser": 111,
        "./spritesheetParser": 114,
        "./textureParser": 115,
        "resource-loader": 11,
      },
    ],
    114: [
      function (t, e, r) {
        var i = t("resource-loader").Resource,
          n = t("path"),
          o = t("../core");
        e.exports = function () {
          return function (t, e) {
            if (!t.data || !t.isJson || !t.data.frames) return e();
            var r = { crossOrigin: t.crossOrigin, loadType: i.LOAD_TYPE.IMAGE },
              s = n.dirname(t.url.replace(this.baseUrl, "")),
              a = o.utils.getResolutionOfUrl(t.url);
            this.add(
              t.name + "_image",
              s + "/" + t.data.meta.image,
              r,
              function (r) {
                t.textures = {};
                var i = t.data.frames;
                for (var n in i) {
                  var s = i[n].frame;
                  if (s) {
                    var h = null,
                      l = null;
                    if (
                      ((h = i[n].rotated
                        ? new o.math.Rectangle(s.x, s.y, s.h, s.w)
                        : new o.math.Rectangle(s.x, s.y, s.w, s.h)),
                      i[n].trimmed &&
                        (l = new o.math.Rectangle(
                          i[n].spriteSourceSize.x / a,
                          i[n].spriteSourceSize.y / a,
                          i[n].sourceSize.w / a,
                          i[n].sourceSize.h / a
                        )),
                      i[n].rotated)
                    ) {
                      var u = h.width;
                      (h.width = h.height), (h.height = u);
                    }
                    (h.x /= a),
                      (h.y /= a),
                      (h.width /= a),
                      (h.height /= a),
                      (t.textures[n] = new o.Texture(
                        r.texture.baseTexture,
                        h,
                        h.clone(),
                        l,
                        i[n].rotated
                      )),
                      (o.utils.TextureCache[n] = t.textures[n]);
                  }
                }
                e();
              }
            );
          };
        };
      },
      { "../core": 22, path: 2, "resource-loader": 11 },
    ],
    115: [
      function (t, e, r) {
        var i = t("../core");
        e.exports = function () {
          return function (t, e) {
            t.data &&
              t.isImage &&
              ((t.texture = new i.Texture(
                new i.BaseTexture(
                  t.data,
                  null,
                  i.utils.getResolutionOfUrl(t.url)
                )
              )),
              (i.utils.TextureCache[t.url] = t.texture)),
              e();
          };
        };
      },
      { "../core": 22 },
    ],
    116: [
      function (t, e, r) {
        function i(t, e, r, o, s) {
          n.Container.call(this),
            (this.texture = t),
            (this.uvs = r || new Float32Array([0, 1, 1, 1, 1, 0, 0, 1])),
            (this.vertices =
              e || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100])),
            (this.indices = o || new Uint16Array([0, 1, 2, 3])),
            (this.dirty = !0),
            (this.blendMode = n.BLEND_MODES.NORMAL),
            (this.canvasPadding = 0),
            (this.drawMode = s || i.DRAW_MODES.TRIANGLE_MESH);
        }
        var n = t("../core");
        (i.prototype = Object.create(n.Container.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype._renderWebGL = function (t) {
            t.setObjectRenderer(t.plugins.mesh), t.plugins.mesh.render(this);
          }),
          (i.prototype._renderCanvas = function (t) {
            var e = t.context,
              r = this.worldTransform;
            t.roundPixels
              ? e.setTransform(r.a, r.b, r.c, r.d, 0 | r.tx, 0 | r.ty)
              : e.setTransform(r.a, r.b, r.c, r.d, r.tx, r.ty),
              this.drawMode === i.DRAW_MODES.TRIANGLE_MESH
                ? this._renderCanvasTriangleMesh(e)
                : this._renderCanvasTriangles(e);
          }),
          (i.prototype._renderCanvasTriangleMesh = function (t) {
            for (
              var e = this.vertices, r = this.uvs, i = e.length / 2, n = 0;
              i - 2 > n;
              n++
            ) {
              var o = 2 * n;
              this._renderCanvasDrawTriangle(t, e, r, o, o + 2, o + 4);
            }
          }),
          (i.prototype._renderCanvasTriangles = function (t) {
            for (
              var e = this.vertices,
                r = this.uvs,
                i = this.indices,
                n = i.length,
                o = 0;
              n > o;
              o += 3
            ) {
              var s = 2 * i[o],
                a = 2 * i[o + 1],
                h = 2 * i[o + 2];
              this._renderCanvasDrawTriangle(t, e, r, s, a, h);
            }
          }),
          (i.prototype._renderCanvasDrawTriangle = function (t, e, r, i, n, o) {
            var s = this.texture.baseTexture.source,
              a = this.texture.width,
              h = this.texture.height,
              l = e[i],
              u = e[n],
              c = e[o],
              p = e[i + 1],
              d = e[n + 1],
              f = e[o + 1],
              v = r[i] * a,
              g = r[n] * a,
              m = r[o] * a,
              y = r[i + 1] * h,
              x = r[n + 1] * h,
              b = r[o + 1] * h;
            if (this.canvasPadding > 0) {
              var _ = this.canvasPadding / this.worldTransform.a,
                T = this.canvasPadding / this.worldTransform.d,
                E = (l + u + c) / 3,
                S = (p + d + f) / 3,
                C = l - E,
                w = p - S,
                A = Math.sqrt(C * C + w * w);
              (l = E + (C / A) * (A + _)),
                (p = S + (w / A) * (A + T)),
                (C = u - E),
                (w = d - S),
                (A = Math.sqrt(C * C + w * w)),
                (u = E + (C / A) * (A + _)),
                (d = S + (w / A) * (A + T)),
                (C = c - E),
                (w = f - S),
                (A = Math.sqrt(C * C + w * w)),
                (c = E + (C / A) * (A + _)),
                (f = S + (w / A) * (A + T));
            }
            t.save(),
              t.beginPath(),
              t.moveTo(l, p),
              t.lineTo(u, d),
              t.lineTo(c, f),
              t.closePath(),
              t.clip();
            var M = v * x + y * m + g * b - x * m - y * g - v * b,
              R = l * x + y * c + u * b - x * c - y * u - l * b,
              F = v * u + l * m + g * c - u * m - l * g - v * c,
              D =
                v * x * c +
                y * u * m +
                l * g * b -
                l * x * m -
                y * g * c -
                v * u * b,
              P = p * x + y * f + d * b - x * f - y * d - p * b,
              O = v * d + p * m + g * f - d * m - p * g - v * f,
              B =
                v * x * f +
                y * d * m +
                p * g * b -
                p * x * m -
                y * g * f -
                v * d * b;
            t.transform(R / M, P / M, F / M, O / M, D / M, B / M),
              t.drawImage(s, 0, 0),
              t.restore();
          }),
          (i.prototype.renderMeshFlat = function (t) {
            var e = this.context,
              r = t.vertices,
              i = r.length / 2;
            e.beginPath();
            for (var n = 1; i - 2 > n; n++) {
              var o = 2 * n,
                s = r[o],
                a = r[o + 2],
                h = r[o + 4],
                l = r[o + 1],
                u = r[o + 3],
                c = r[o + 5];
              e.moveTo(s, l), e.lineTo(a, u), e.lineTo(h, c);
            }
            (e.fillStyle = "#FF0000"), e.fill(), e.closePath();
          }),
          (i.prototype.onTextureUpdate = function () {
            this.updateFrame = !0;
          }),
          (i.prototype.getBounds = function (t) {
            for (
              var e = t || this.worldTransform,
                r = e.a,
                i = e.b,
                o = e.c,
                s = e.d,
                a = e.tx,
                h = e.ty,
                l = -(1 / 0),
                u = -(1 / 0),
                c = 1 / 0,
                p = 1 / 0,
                d = this.vertices,
                f = 0,
                v = d.length;
              v > f;
              f += 2
            ) {
              var g = d[f],
                m = d[f + 1],
                y = r * g + o * m + a,
                x = s * m + i * g + h;
              (c = c > y ? y : c),
                (p = p > x ? x : p),
                (l = y > l ? y : l),
                (u = x > u ? x : u);
            }
            if (c === -(1 / 0) || u === 1 / 0) return n.math.Rectangle.EMPTY;
            var b = this._bounds;
            return (
              (b.x = c),
              (b.width = l - c),
              (b.y = p),
              (b.height = u - p),
              (this._currentBounds = b),
              b
            );
          }),
          (i.DRAW_MODES = { TRIANGLE_MESH: 0, TRIANGLES: 1 });
      },
      { "../core": 22 },
    ],
    117: [
      function (t, e, r) {
        function i(t, e) {
          n.call(this, t),
            (this.points = e),
            (this.vertices = new Float32Array(4 * e.length)),
            (this.uvs = new Float32Array(4 * e.length)),
            (this.colors = new Float32Array(2 * e.length)),
            (this.indices = new Uint16Array(2 * e.length)),
            this.refresh();
        }
        var n = t("./Mesh");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          (i.prototype.refresh = function () {
            var t = this.points;
            if (!(t.length < 1)) {
              var e = this.uvs,
                r = this.indices,
                i = this.colors;
              (e[0] = 0),
                (e[1] = 0),
                (e[2] = 0),
                (e[3] = 1),
                (i[0] = 1),
                (i[1] = 1),
                (r[0] = 0),
                (r[1] = 1);
              for (var n, o, s, a = t.length, h = 1; a > h; h++)
                (n = t[h]),
                  (o = 4 * h),
                  (s = h / (a - 1)),
                  h % 2
                    ? ((e[o] = s),
                      (e[o + 1] = 0),
                      (e[o + 2] = s),
                      (e[o + 3] = 1))
                    : ((e[o] = s),
                      (e[o + 1] = 0),
                      (e[o + 2] = s),
                      (e[o + 3] = 1)),
                  (o = 2 * h),
                  (i[o] = 1),
                  (i[o + 1] = 1),
                  (o = 2 * h),
                  (r[o] = o),
                  (r[o + 1] = o + 1);
            }
          }),
          (i.prototype.updateTransform = function () {
            var t = this.points;
            if (!(t.length < 1)) {
              for (
                var e,
                  r,
                  i,
                  n,
                  o,
                  s,
                  a = t[0],
                  h = 0,
                  l = 0,
                  u = this.vertices,
                  c = t.length,
                  p = 0;
                c > p;
                p++
              )
                (r = t[p]),
                  (i = 4 * p),
                  (e = p < t.length - 1 ? t[p + 1] : r),
                  (l = -(e.x - a.x)),
                  (h = e.y - a.y),
                  (n = 10 * (1 - p / (c - 1))),
                  n > 1 && (n = 1),
                  (o = Math.sqrt(h * h + l * l)),
                  (s = this.texture.height / 2),
                  (h /= o),
                  (l /= o),
                  (h *= s),
                  (l *= s),
                  (u[i] = r.x + h),
                  (u[i + 1] = r.y + l),
                  (u[i + 2] = r.x - h),
                  (u[i + 3] = r.y - l),
                  (a = r);
              this.containerUpdateTransform();
            }
          });
      },
      { "./Mesh": 116 },
    ],
    118: [
      function (t, e, r) {
        e.exports = {
          Mesh: t("./Mesh"),
          Rope: t("./Rope"),
          MeshRenderer: t("./webgl/MeshRenderer"),
          MeshShader: t("./webgl/MeshShader"),
        };
      },
      {
        "./Mesh": 116,
        "./Rope": 117,
        "./webgl/MeshRenderer": 119,
        "./webgl/MeshShader": 120,
      },
    ],
    119: [
      function (t, e, r) {
        function i(t) {
          n.call(this, t), (this.indices = new Uint16Array(15e3));
          for (var e = 0, r = 0; 15e3 > e; e += 6, r += 4)
            (this.indices[e + 0] = r + 0),
              (this.indices[e + 1] = r + 1),
              (this.indices[e + 2] = r + 2),
              (this.indices[e + 3] = r + 0),
              (this.indices[e + 4] = r + 2),
              (this.indices[e + 5] = r + 3);
        }
        var n = t("../../core/renderers/webgl/utils/ObjectRenderer"),
          o = t("../../core/renderers/webgl/WebGLRenderer");
        (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          o.registerPlugin("mesh", i),
          (i.prototype.onContextChange = function () {}),
          (i.prototype.render = function (t) {
            t._vertexBuffer || this._initWebGL(t);
            var e = this.renderer,
              r = e.gl,
              i = t.texture.baseTexture,
              n = e.shaderManager.plugins.meshShader,
              o = r.TRIANGLE_STRIP;
            e.blendModeManager.setBlendMode(t.blendMode),
              r.uniformMatrix3fv(
                n.uniforms.translationMatrix._location,
                !1,
                t.worldTransform.toArray(!0)
              ),
              r.uniformMatrix3fv(
                n.uniforms.projectionMatrix._location,
                !1,
                e.currentRenderTarget.projectionMatrix.toArray(!0)
              ),
              r.uniform1f(n.uniforms.alpha._location, t.worldAlpha),
              t.dirty
                ? ((t.dirty = !1),
                  r.bindBuffer(r.ARRAY_BUFFER, t._vertexBuffer),
                  r.bufferData(r.ARRAY_BUFFER, t.vertices, r.STATIC_DRAW),
                  r.vertexAttribPointer(
                    n.attributes.aVertexPosition,
                    2,
                    r.FLOAT,
                    !1,
                    0,
                    0
                  ),
                  r.bindBuffer(r.ARRAY_BUFFER, t._uvBuffer),
                  r.bufferData(r.ARRAY_BUFFER, t.uvs, r.STATIC_DRAW),
                  r.vertexAttribPointer(
                    n.attributes.aTextureCoord,
                    2,
                    r.FLOAT,
                    !1,
                    0,
                    0
                  ),
                  r.activeTexture(r.TEXTURE0),
                  i._glTextures[r.id]
                    ? r.bindTexture(r.TEXTURE_2D, i._glTextures[r.id])
                    : this.renderer.updateTexture(i),
                  r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t._indexBuffer),
                  r.bufferData(
                    r.ELEMENT_ARRAY_BUFFER,
                    t.indices,
                    r.STATIC_DRAW
                  ))
                : (r.bindBuffer(r.ARRAY_BUFFER, t._vertexBuffer),
                  r.bufferSubData(r.ARRAY_BUFFER, 0, t.vertices),
                  r.vertexAttribPointer(
                    n.attributes.aVertexPosition,
                    2,
                    r.FLOAT,
                    !1,
                    0,
                    0
                  ),
                  r.bindBuffer(r.ARRAY_BUFFER, t._uvBuffer),
                  r.vertexAttribPointer(
                    n.attributes.aTextureCoord,
                    2,
                    r.FLOAT,
                    !1,
                    0,
                    0
                  ),
                  r.activeTexture(r.TEXTURE0),
                  i._glTextures[r.id]
                    ? r.bindTexture(r.TEXTURE_2D, i._glTextures[r.id])
                    : this.renderer.updateTexture(i)),
              r.drawElements(o, t.indices.length, r.UNSIGNED_SHORT, 0);
          }),
          (i.prototype._initWebGL = function (t) {
            var e = this.renderer.gl;
            (t._vertexBuffer = e.createBuffer()),
              (t._indexBuffer = e.createBuffer()),
              (t._uvBuffer = e.createBuffer()),
              (t._colorBuffer = e.createBuffer()),
              e.bindBuffer(e.ARRAY_BUFFER, t._vertexBuffer),
              e.bufferData(e.ARRAY_BUFFER, t.vertices, e.DYNAMIC_DRAW),
              e.bindBuffer(e.ARRAY_BUFFER, t._uvBuffer),
              e.bufferData(e.ARRAY_BUFFER, t.uvs, e.STATIC_DRAW),
              e.bindBuffer(e.ARRAY_BUFFER, t._colorBuffer),
              e.bufferData(e.ARRAY_BUFFER, t.colors, e.STATIC_DRAW),
              e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t._indexBuffer),
              e.bufferData(e.ELEMENT_ARRAY_BUFFER, t.indices, e.STATIC_DRAW);
          }),
          (i.prototype.flush = function () {}),
          (i.prototype.start = function () {
            var t = this.renderer.shaderManager.plugins.meshShader;
            this.renderer.shaderManager.setShader(t);
          }),
          (i.prototype.destroy = function () {});
      },
      {
        "../../core/renderers/webgl/WebGLRenderer": 41,
        "../../core/renderers/webgl/utils/ObjectRenderer": 55,
      },
    ],
    120: [
      function (t, e, r) {
        function i(t) {
          n.Shader.call(
            this,
            t,
            [
              "precision lowp float;",
              "attribute vec2 aVertexPosition;",
              "attribute vec2 aTextureCoord;",
              "uniform mat3 translationMatrix;",
              "uniform mat3 projectionMatrix;",
              "varying vec2 vTextureCoord;",
              "void main(void){",
              "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);",
              "   vTextureCoord = aTextureCoord;",
              "}",
            ].join("\n"),
            [
              "precision lowp float;",
              "varying vec2 vTextureCoord;",
              "uniform float alpha;",
              "uniform sampler2D uSampler;",
              "void main(void){",
              "   gl_FragColor = texture2D(uSampler, vTextureCoord) * alpha ;",
              "}",
            ].join("\n"),
            {
              alpha: { type: "1f", value: 0 },
              translationMatrix: { type: "mat3", value: new Float32Array(9) },
              projectionMatrix: { type: "mat3", value: new Float32Array(9) },
            },
            { aVertexPosition: 0, aTextureCoord: 0 }
          );
        }
        var n = t("../../core");
        (i.prototype = Object.create(n.Shader.prototype)),
          (i.prototype.constructor = i),
          (e.exports = i),
          n.ShaderManager.registerPlugin("meshShader", i);
      },
      { "../../core": 22 },
    ],
    121: [
      function (t, e, r) {
        Object.assign || (Object.assign = t("object-assign"));
      },
      { "object-assign": 5 },
    ],
    122: [
      function (t, e, r) {
        t("./Object.assign"), t("./requestAnimationFrame");
      },
      { "./Object.assign": 121, "./requestAnimationFrame": 123 },
    ],
    123: [
      function (t, e, r) {
        (function (t) {
          if (
            ((Date.now && Date.prototype.getTime) ||
              (Date.now = function () {
                return new Date().getTime();
              }),
            !t.performance || !t.performance.now)
          ) {
            var e = Date.now();
            t.performance || (t.performance = {}),
              (t.performance.now = function () {
                return Date.now() - e;
              });
          }
          for (
            var r = Date.now(), i = ["ms", "moz", "webkit", "o"], n = 0;
            n < i.length && !t.requestAnimationFrame;
            ++n
          )
            (t.requestAnimationFrame = t[i[n] + "RequestAnimationFrame"]),
              (t.cancelAnimationFrame =
                t[i[n] + "CancelAnimationFrame"] ||
                t[i[n] + "CancelRequestAnimationFrame"]);
          t.requestAnimationFrame ||
            (t.requestAnimationFrame = function (t) {
              if ("function" != typeof t)
                throw new TypeError(t + "is not a function");
              var e = Date.now(),
                i = 16 + r - e;
              return (
                0 > i && (i = 0),
                (r = e),
                setTimeout(function () {
                  (r = Date.now()), t(performance.now());
                }, i)
              );
            }),
            t.cancelAnimationFrame ||
              (t.cancelAnimationFrame = function (t) {
                clearTimeout(t);
              });
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    124: [
      function (t, e, r) {
        function i() {
          var t = this;
          (this._tick = function (e) {
            (t._requestId = null),
              t.started &&
                (t.update(e),
                t.started &&
                  null === t._requestId &&
                  t._emitter.listeners(s, !0) &&
                  (t._requestId = requestAnimationFrame(t._tick)));
          }),
            (this._emitter = new o()),
            (this._requestId = null),
            (this._maxElapsedMS = 100),
            (this.autoStart = !1),
            (this.deltaTime = 1),
            (this.elapsedMS = 1 / n.TARGET_FPMS),
            (this.lastTime = 0),
            (this.speed = 1),
            (this.started = !1);
        }
        var n = t("../core"),
          o = t("eventemitter3"),
          s = "tick";
        Object.defineProperties(i.prototype, {
          FPS: {
            get: function () {
              return 1e3 / this.elapsedMS;
            },
          },
          minFPS: {
            get: function () {
              return 1e3 / this._maxElapsedMS;
            },
            set: function (t) {
              var e = Math.min(Math.max(0, t) / 1e3, n.TARGET_FPMS);
              this._maxElapsedMS = 1 / e;
            },
          },
        }),
          (i.prototype._requestIfNeeded = function () {
            null === this._requestId &&
              this._emitter.listeners(s, !0) &&
              ((this.lastTime = performance.now()),
              (this._requestId = requestAnimationFrame(this._tick)));
          }),
          (i.prototype._cancelIfNeeded = function () {
            null !== this._requestId &&
              (cancelAnimationFrame(this._requestId), (this._requestId = null));
          }),
          (i.prototype._startIfPossible = function () {
            this.started
              ? this._requestIfNeeded()
              : this.autoStart && this.start();
          }),
          (i.prototype.add = function (t, e) {
            return this._emitter.on(s, t, e), this._startIfPossible(), this;
          }),
          (i.prototype.addOnce = function (t, e) {
            return this._emitter.once(s, t, e), this._startIfPossible(), this;
          }),
          (i.prototype.remove = function (t, e) {
            return (
              this._emitter.off(s, t, e),
              this._emitter.listeners(s, !0) || this._cancelIfNeeded(),
              this
            );
          }),
          (i.prototype.start = function () {
            this.started || ((this.started = !0), this._requestIfNeeded());
          }),
          (i.prototype.stop = function () {
            this.started && ((this.started = !1), this._cancelIfNeeded());
          }),
          (i.prototype.update = function (t) {
            var e;
            (t = t || performance.now()),
              (e = this.elapsedMS = t - this.lastTime),
              e > this._maxElapsedMS && (e = this._maxElapsedMS),
              (this.deltaTime = e * n.TARGET_FPMS * this.speed),
              this._emitter.emit(s, this.deltaTime),
              (this.lastTime = t);
          }),
          (e.exports = i);
      },
      { "../core": 22, eventemitter3: 4 },
    ],
    125: [
      function (t, e, r) {
        var i = t("./Ticker"),
          n = new i();
        (n.autoStart = !0), (e.exports = { shared: n, Ticker: i });
      },
      { "./Ticker": 124 },
    ],
    "pixi.js": [
      function (t, e, r) {
        (function (r) {
          t("./polyfill");
          var i = (e.exports = t("./core"));
          (i.extras = t("./extras")),
            (i.filters = t("./filters")),
            (i.interaction = t("./interaction")),
            (i.loaders = t("./loaders")),
            (i.mesh = t("./mesh")),
            (i.ticker = t("./ticker")),
            (i.loader = new i.loaders.Loader()),
            Object.assign(i, t("./deprecation")),
            (r.PIXI = i),
            "function" == typeof define &&
              define.amd &&
              define(function () {
                return i;
              });
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {
        "./core": 22,
        "./deprecation": 70,
        "./extras": 77,
        "./filters": 94,
        "./interaction": 109,
        "./loaders": 112,
        "./mesh": 118,
        "./polyfill": 122,
        "./ticker": 125,
      },
    ],
  },
  {},
  ["pixi.js"]
);
/*!noUiSlider - 7.0.10 - 2014-12-27 14:50:47*/ !(function (a) {
  "use strict";
  function b(a, b) {
    return Math.round(a / b) * b;
  }
  function c(a) {
    return "number" == typeof a && !isNaN(a) && isFinite(a);
  }
  function d(a) {
    var b = Math.pow(10, 7);
    return Number((Math.round(a * b) / b).toFixed(7));
  }
  function e(a, b, c) {
    a.addClass(b),
      setTimeout(function () {
        a.removeClass(b);
      }, c);
  }
  function f(a) {
    return Math.max(Math.min(a, 100), 0);
  }
  function g(b) {
    return a.isArray(b) ? b : [b];
  }
  function h(a) {
    var b = a.split(".");
    return b.length > 1 ? b[1].length : 0;
  }
  function i(a, b) {
    return 100 / (b - a);
  }
  function j(a, b) {
    return (100 * b) / (a[1] - a[0]);
  }
  function k(a, b) {
    return j(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0]);
  }
  function l(a, b) {
    return (b * (a[1] - a[0])) / 100 + a[0];
  }
  function m(a, b) {
    for (var c = 1; a >= b[c]; ) c += 1;
    return c;
  }
  function n(a, b, c) {
    if (c >= a.slice(-1)[0]) return 100;
    var d,
      e,
      f,
      g,
      h = m(c, a);
    return (
      (d = a[h - 1]),
      (e = a[h]),
      (f = b[h - 1]),
      (g = b[h]),
      f + k([d, e], c) / i(f, g)
    );
  }
  function o(a, b, c) {
    if (c >= 100) return a.slice(-1)[0];
    var d,
      e,
      f,
      g,
      h = m(c, b);
    return (
      (d = a[h - 1]),
      (e = a[h]),
      (f = b[h - 1]),
      (g = b[h]),
      l([d, e], (c - f) * i(f, g))
    );
  }
  function p(a, c, d, e) {
    if (100 === e) return e;
    var f,
      g,
      h = m(e, a);
    return d
      ? ((f = a[h - 1]), (g = a[h]), e - f > (g - f) / 2 ? g : f)
      : c[h - 1]
      ? a[h - 1] + b(e - a[h - 1], c[h - 1])
      : e;
  }
  function q(a, b, d) {
    var e;
    if (
      ("number" == typeof b && (b = [b]),
      "[object Array]" !== Object.prototype.toString.call(b))
    )
      throw new Error("noUiSlider: 'range' contains invalid value.");
    if (
      ((e = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a)),
      !c(e) || !c(b[0]))
    )
      throw new Error("noUiSlider: 'range' value isn't numeric.");
    d.xPct.push(e),
      d.xVal.push(b[0]),
      e
        ? d.xSteps.push(isNaN(b[1]) ? !1 : b[1])
        : isNaN(b[1]) || (d.xSteps[0] = b[1]);
  }
  function r(a, b, c) {
    return b
      ? void (c.xSteps[a] =
          j([c.xVal[a], c.xVal[a + 1]], b) / i(c.xPct[a], c.xPct[a + 1]))
      : !0;
  }
  function s(a, b, c, d) {
    (this.xPct = []),
      (this.xVal = []),
      (this.xSteps = [d || !1]),
      (this.xNumSteps = [!1]),
      (this.snap = b),
      (this.direction = c);
    var e,
      f = [];
    for (e in a) a.hasOwnProperty(e) && f.push([a[e], e]);
    for (
      f.sort(function (a, b) {
        return a[0] - b[0];
      }),
        e = 0;
      e < f.length;
      e++
    )
      q(f[e][1], f[e][0], this);
    for (
      this.xNumSteps = this.xSteps.slice(0), e = 0;
      e < this.xNumSteps.length;
      e++
    )
      r(e, this.xNumSteps[e], this);
  }
  function t(a, b) {
    if (!c(b)) throw new Error("noUiSlider: 'step' is not numeric.");
    a.singleStep = b;
  }
  function u(b, c) {
    if ("object" != typeof c || a.isArray(c))
      throw new Error("noUiSlider: 'range' is not an object.");
    if (void 0 === c.min || void 0 === c.max)
      throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
    b.spectrum = new s(c, b.snap, b.dir, b.singleStep);
  }
  function v(b, c) {
    if (((c = g(c)), !a.isArray(c) || !c.length || c.length > 2))
      throw new Error("noUiSlider: 'start' option is incorrect.");
    (b.handles = c.length), (b.start = c);
  }
  function w(a, b) {
    if (((a.snap = b), "boolean" != typeof b))
      throw new Error("noUiSlider: 'snap' option must be a boolean.");
  }
  function x(a, b) {
    if (((a.animate = b), "boolean" != typeof b))
      throw new Error("noUiSlider: 'animate' option must be a boolean.");
  }
  function y(a, b) {
    if ("lower" === b && 1 === a.handles) a.connect = 1;
    else if ("upper" === b && 1 === a.handles) a.connect = 2;
    else if (b === !0 && 2 === a.handles) a.connect = 3;
    else {
      if (b !== !1)
        throw new Error(
          "noUiSlider: 'connect' option doesn't match handle count."
        );
      a.connect = 0;
    }
  }
  function z(a, b) {
    switch (b) {
      case "horizontal":
        a.ort = 0;
        break;
      case "vertical":
        a.ort = 1;
        break;
      default:
        throw new Error("noUiSlider: 'orientation' option is invalid.");
    }
  }
  function A(a, b) {
    if (!c(b)) throw new Error("noUiSlider: 'margin' option must be numeric.");
    if (((a.margin = a.spectrum.getMargin(b)), !a.margin))
      throw new Error(
        "noUiSlider: 'margin' option is only supported on linear sliders."
      );
  }
  function B(a, b) {
    if (!c(b)) throw new Error("noUiSlider: 'limit' option must be numeric.");
    if (((a.limit = a.spectrum.getMargin(b)), !a.limit))
      throw new Error(
        "noUiSlider: 'limit' option is only supported on linear sliders."
      );
  }
  function C(a, b) {
    switch (b) {
      case "ltr":
        a.dir = 0;
        break;
      case "rtl":
        (a.dir = 1), (a.connect = [0, 2, 1, 3][a.connect]);
        break;
      default:
        throw new Error("noUiSlider: 'direction' option was not recognized.");
    }
  }
  function D(a, b) {
    if ("string" != typeof b)
      throw new Error(
        "noUiSlider: 'behaviour' must be a string containing options."
      );
    var c = b.indexOf("tap") >= 0,
      d = b.indexOf("drag") >= 0,
      e = b.indexOf("fixed") >= 0,
      f = b.indexOf("snap") >= 0;
    a.events = { tap: c || f, drag: d, fixed: e, snap: f };
  }
  function E(a, b) {
    if (
      ((a.format = b), "function" == typeof b.to && "function" == typeof b.from)
    )
      return !0;
    throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
  }
  function F(b) {
    var c,
      d = { margin: 0, limit: 0, animate: !0, format: V };
    return (
      (c = {
        step: { r: !1, t: t },
        start: { r: !0, t: v },
        connect: { r: !0, t: y },
        direction: { r: !0, t: C },
        snap: { r: !1, t: w },
        animate: { r: !1, t: x },
        range: { r: !0, t: u },
        orientation: { r: !1, t: z },
        margin: { r: !1, t: A },
        limit: { r: !1, t: B },
        behaviour: { r: !0, t: D },
        format: { r: !1, t: E },
      }),
      (b = a.extend(
        {
          connect: !1,
          direction: "ltr",
          behaviour: "tap",
          orientation: "horizontal",
        },
        b
      )),
      a.each(c, function (a, c) {
        if (void 0 === b[a]) {
          if (c.r) throw new Error("noUiSlider: '" + a + "' is required.");
          return !0;
        }
        c.t(d, b[a]);
      }),
      (d.style = d.ort ? "top" : "left"),
      d
    );
  }
  function G(a, b, c) {
    var d = a + b[0],
      e = a + b[1];
    return c
      ? (0 > d && (e += Math.abs(d)), e > 100 && (d -= e - 100), [f(d), f(e)])
      : [d, e];
  }
  function H(a) {
    a.preventDefault();
    var b,
      c,
      d = 0 === a.type.indexOf("touch"),
      e = 0 === a.type.indexOf("mouse"),
      f = 0 === a.type.indexOf("pointer"),
      g = a;
    return (
      0 === a.type.indexOf("MSPointer") && (f = !0),
      a.originalEvent && (a = a.originalEvent),
      d && ((b = a.changedTouches[0].pageX), (c = a.changedTouches[0].pageY)),
      (e || f) &&
        (f ||
          void 0 !== window.pageXOffset ||
          ((window.pageXOffset = document.documentElement.scrollLeft),
          (window.pageYOffset = document.documentElement.scrollTop)),
        (b = a.clientX + window.pageXOffset),
        (c = a.clientY + window.pageYOffset)),
      (g.points = [b, c]),
      (g.cursor = e),
      g
    );
  }
  function I(b, c) {
    var d = a("<div><div/></div>").addClass(U[2]),
      e = ["-lower", "-upper"];
    return b && e.reverse(), d.children().addClass(U[3] + " " + U[3] + e[c]), d;
  }
  function J(a, b, c) {
    switch (a) {
      case 1:
        b.addClass(U[7]), c[0].addClass(U[6]);
        break;
      case 3:
        c[1].addClass(U[6]);
      case 2:
        c[0].addClass(U[7]);
      case 0:
        b.addClass(U[6]);
    }
  }
  function K(a, b, c) {
    var d,
      e = [];
    for (d = 0; a > d; d += 1) e.push(I(b, d).appendTo(c));
    return e;
  }
  function L(b, c, d) {
    return (
      d.addClass([U[0], U[8 + b], U[4 + c]].join(" ")),
      a("<div/>").appendTo(d).addClass(U[1])
    );
  }
  function M(b, c, d) {
    function i() {
      return C[["width", "height"][c.ort]]();
    }
    function j(a) {
      var b,
        c = [E.val()];
      for (b = 0; b < a.length; b += 1) E.trigger(a[b], c);
    }
    function k(a) {
      return 1 === a.length ? a[0] : c.dir ? a.reverse() : a;
    }
    function l(a) {
      return function (b, c) {
        E.val([a ? null : c, a ? c : null], !0);
      };
    }
    function m(b) {
      var c = a.inArray(b, N);
      E[0].linkAPI &&
        E[0].linkAPI[b] &&
        E[0].linkAPI[b].change(M[c], D[c].children(), E);
    }
    function n(b, d) {
      var e = a.inArray(b, N);
      return (
        d && d.appendTo(D[e].children()),
        c.dir && c.handles > 1 && (e = 1 === e ? 0 : 1),
        l(e)
      );
    }
    function o() {
      var a, b;
      for (a = 0; a < N.length; a += 1)
        this.linkAPI &&
          this.linkAPI[(b = N[a])] &&
          this.linkAPI[b].reconfirm(b);
    }
    function p(a, b, d, e) {
      return (
        (a = a.replace(/\s/g, S + " ") + S),
        b.on(a, function (a) {
          return E.attr("disabled")
            ? !1
            : E.hasClass(U[14])
            ? !1
            : ((a = H(a)), (a.calcPoint = a.points[c.ort]), void d(a, e));
        })
      );
    }
    function q(a, b) {
      var c,
        d = b.handles || D,
        e = !1,
        f = (100 * (a.calcPoint - b.start)) / i(),
        g = d[0][0] !== D[0][0] ? 1 : 0;
      (c = G(f, b.positions, d.length > 1)),
        (e = v(d[0], c[g], 1 === d.length)),
        d.length > 1 && (e = v(d[1], c[g ? 0 : 1], !1) || e),
        e && j(["slide"]);
    }
    function r(b) {
      a("." + U[15]).removeClass(U[15]),
        b.cursor && a("body").css("cursor", "").off(S),
        Q.off(S),
        E.removeClass(U[12]),
        j(["set", "change"]);
    }
    function s(b, c) {
      1 === c.handles.length && c.handles[0].children().addClass(U[15]),
        b.stopPropagation(),
        p(T.move, Q, q, {
          start: b.calcPoint,
          handles: c.handles,
          positions: [F[0], F[D.length - 1]],
        }),
        p(T.end, Q, r, null),
        b.cursor &&
          (a("body").css("cursor", a(b.target).css("cursor")),
          D.length > 1 && E.addClass(U[12]),
          a("body").on("selectstart" + S, !1));
    }
    function t(b) {
      var d,
        f = b.calcPoint,
        g = 0;
      b.stopPropagation(),
        a.each(D, function () {
          g += this.offset()[c.style];
        }),
        (g = g / 2 > f || 1 === D.length ? 0 : 1),
        (f -= C.offset()[c.style]),
        (d = (100 * f) / i()),
        c.events.snap || e(E, U[14], 300),
        v(D[g], d),
        j(["slide", "set", "change"]),
        c.events.snap && s(b, { handles: [D[g]] });
    }
    function u(a) {
      var b, c;
      if (!a.fixed)
        for (b = 0; b < D.length; b += 1)
          p(T.start, D[b].children(), s, { handles: [D[b]] });
      a.tap && p(T.start, C, t, { handles: D }),
        a.drag &&
          ((c = C.find("." + U[7]).addClass(U[10])),
          a.fixed && (c = c.add(C.children().not(c).children())),
          p(T.start, c, s, { handles: D }));
    }
    function v(a, b, d) {
      var e = a[0] !== D[0][0] ? 1 : 0,
        g = F[0] + c.margin,
        h = F[1] - c.margin,
        i = F[0] + c.limit,
        j = F[1] - c.limit;
      return (
        D.length > 1 && (b = e ? Math.max(b, g) : Math.min(b, h)),
        d !== !1 &&
          c.limit &&
          D.length > 1 &&
          (b = e ? Math.min(b, i) : Math.max(b, j)),
        (b = I.getStep(b)),
        (b = f(parseFloat(b.toFixed(7)))),
        b === F[e]
          ? !1
          : (a.css(c.style, b + "%"),
            a.is(":first-child") && a.toggleClass(U[17], b > 50),
            (F[e] = b),
            (M[e] = I.fromStepping(b)),
            m(N[e]),
            !0)
      );
    }
    function w(a, b) {
      var d, e, f;
      for (c.limit && (a += 1), d = 0; a > d; d += 1)
        (e = d % 2),
          (f = b[e]),
          null !== f &&
            f !== !1 &&
            ("number" == typeof f && (f = String(f)),
            (f = c.format.from(f)),
            (f === !1 ||
              isNaN(f) ||
              v(D[e], I.toStepping(f), d === 3 - c.dir) === !1) &&
              m(N[e]));
    }
    function x(a) {
      if (E[0].LinkIsEmitting) return this;
      var b,
        d = g(a);
      return (
        c.dir && c.handles > 1 && d.reverse(),
        c.animate && -1 !== F[0] && e(E, U[14], 300),
        (b = D.length > 1 ? 3 : 1),
        1 === d.length && (b = 1),
        w(b, d),
        j(["set"]),
        this
      );
    }
    function y() {
      var a,
        b = [];
      for (a = 0; a < c.handles; a += 1) b[a] = c.format.to(M[a]);
      return k(b);
    }
    function z() {
      return (
        a(this).off(S).removeClass(U.join(" ")).empty(),
        delete this.LinkUpdate,
        delete this.LinkConfirm,
        delete this.LinkDefaultFormatter,
        delete this.LinkDefaultFlag,
        delete this.reappend,
        delete this.vGet,
        delete this.vSet,
        delete this.getCurrentStep,
        delete this.getInfo,
        delete this.destroy,
        d
      );
    }
    function A() {
      var b = a.map(F, function (a, b) {
        var c = I.getApplicableStep(a),
          d = h(String(c[2])),
          e = M[b],
          f = 100 === a ? null : c[2],
          g = Number((e - c[2]).toFixed(d)),
          i = 0 === a ? null : g >= c[1] ? c[2] : c[0] || !1;
        return [[i, f]];
      });
      return k(b);
    }
    function B() {
      return d;
    }
    var C,
      D,
      E = a(b),
      F = [-1, -1],
      I = c.spectrum,
      M = [],
      N = ["lower", "upper"].slice(0, c.handles);
    if (
      (c.dir && N.reverse(),
      (b.LinkUpdate = m),
      (b.LinkConfirm = n),
      (b.LinkDefaultFormatter = c.format),
      (b.LinkDefaultFlag = "lower"),
      (b.reappend = o),
      E.hasClass(U[0]))
    )
      throw new Error("Slider was already initialized.");
    (C = L(c.dir, c.ort, E)),
      (D = K(c.handles, c.dir, C)),
      J(c.connect, E, D),
      u(c.events),
      (b.vSet = x),
      (b.vGet = y),
      (b.destroy = z),
      (b.getCurrentStep = A),
      (b.getOriginalOptions = B),
      (b.getInfo = function () {
        return [I, c.style, c.ort];
      }),
      E.val(c.start);
  }
  function N(a) {
    var b = F(a, this);
    return this.each(function () {
      M(this, b, a);
    });
  }
  function O(b) {
    return this.each(function () {
      if (!this.destroy) return void a(this).noUiSlider(b);
      var c = a(this).val(),
        d = this.destroy(),
        e = a.extend({}, d, b);
      a(this).noUiSlider(e),
        this.reappend(),
        d.start === e.start && a(this).val(c);
    });
  }
  function P() {
    return this[0][arguments.length ? "vSet" : "vGet"].apply(
      this[0],
      arguments
    );
  }
  var Q = a(document),
    R = a.fn.val,
    S = ".nui",
    T = window.navigator.pointerEnabled
      ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
      : window.navigator.msPointerEnabled
      ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }
      : {
          start: "mousedown touchstart",
          move: "mousemove touchmove",
          end: "mouseup touchend",
        },
    U = [
      "noUi-target",
      "noUi-base",
      "noUi-origin",
      "noUi-handle",
      "noUi-horizontal",
      "noUi-vertical",
      "noUi-background",
      "noUi-connect",
      "noUi-ltr",
      "noUi-rtl",
      "noUi-dragable",
      "",
      "noUi-state-drag",
      "",
      "noUi-state-tap",
      "noUi-active",
      "",
      "noUi-stacking",
    ];
  (s.prototype.getMargin = function (a) {
    return 2 === this.xPct.length ? j(this.xVal, a) : !1;
  }),
    (s.prototype.toStepping = function (a) {
      return (
        (a = n(this.xVal, this.xPct, a)), this.direction && (a = 100 - a), a
      );
    }),
    (s.prototype.fromStepping = function (a) {
      return this.direction && (a = 100 - a), d(o(this.xVal, this.xPct, a));
    }),
    (s.prototype.getStep = function (a) {
      return (
        this.direction && (a = 100 - a),
        (a = p(this.xPct, this.xSteps, this.snap, a)),
        this.direction && (a = 100 - a),
        a
      );
    }),
    (s.prototype.getApplicableStep = function (a) {
      var b = m(a, this.xPct),
        c = 100 === a ? 2 : 1;
      return [this.xNumSteps[b - 2], this.xVal[b - c], this.xNumSteps[b - c]];
    }),
    (s.prototype.convert = function (a) {
      return this.getStep(this.toStepping(a));
    });
  var V = {
    to: function (a) {
      return a.toFixed(2);
    },
    from: Number,
  };
  (a.fn.val = function (b) {
    function c(a) {
      return a.hasClass(U[0]) ? P : R;
    }
    if (!arguments.length) {
      var d = a(this[0]);
      return c(d).call(d);
    }
    var e = a.isFunction(b);
    return this.each(function (d) {
      var f = b,
        g = a(this);
      e && (f = b.call(this, d, g.val())), c(g).call(g, f);
    });
  }),
    (a.fn.noUiSlider = function (a, b) {
      switch (a) {
        case "step":
          return this[0].getCurrentStep();
        case "options":
          return this[0].getOriginalOptions();
      }
      return (b ? O : N).call(this, a);
    });
})(window.jQuery || window.Zepto);
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (c) {
        return b(a, c);
      })
    : "object" == typeof exports
    ? b(a, require("jquery"))
    : b(a, a.jQuery);
})("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";
  function c(a, b) {
    for (var c = a.length; --c; ) if (+a[c] !== +b[c]) return !1;
    return !0;
  }
  function d(a) {
    var c = { range: !0, animate: !0 };
    return "boolean" == typeof a ? (c.animate = a) : b.extend(c, a), c;
  }
  function e(a, c, d, e, f, g, h, i, j) {
    this.elements =
      "array" === b.type(a)
        ? [+a[0], +a[2], +a[4], +a[1], +a[3], +a[5], 0, 0, 1]
        : [a, c, d, e, f, g, h || 0, i || 0, j || 1];
  }
  function f(a, b, c) {
    this.elements = [a, b, c];
  }
  function g(a, c) {
    if (!(this instanceof g)) return new g(a, c);
    1 !== a.nodeType && b.error("Panzoom called on non-Element node"),
      b.contains(l, a) ||
        b.error("Panzoom element must be attached to the document");
    var d = b.data(a, m);
    if (d) return d;
    (this.options = c = b.extend({}, g.defaults, c)), (this.elem = a);
    var e = (this.$elem = b(a));
    (this.$set = c.$set && c.$set.length ? c.$set : e),
      (this.$doc = b(a.ownerDocument || l)),
      (this.$parent = e.parent()),
      (this.isSVG =
        r.test(a.namespaceURI) && "svg" !== a.nodeName.toLowerCase()),
      (this.panning = !1),
      this._buildTransform(),
      (this._transform =
        !this.isSVG && b.cssProps.transform.replace(q, "-$1").toLowerCase()),
      this._buildTransition(),
      this.resetDimensions();
    var f = b(),
      h = this;
    b.each(["$zoomIn", "$zoomOut", "$zoomRange", "$reset"], function (a, b) {
      h[b] = c[b] || f;
    }),
      this.enable(),
      b.data(a, m, this);
  }
  var h = "over out down up move enter leave cancel".split(" "),
    i = b.extend({}, b.event.mouseHooks),
    j = {};
  if (a.PointerEvent)
    b.each(h, function (a, c) {
      b.event.fixHooks[(j[c] = "pointer" + c)] = i;
    });
  else {
    var k = i.props;
    (i.props = k.concat([
      "touches",
      "changedTouches",
      "targetTouches",
      "altKey",
      "ctrlKey",
      "metaKey",
      "shiftKey",
    ])),
      (i.filter = function (a, b) {
        var c,
          d = k.length;
        if (!b.pageX && b.touches && (c = b.touches[0]))
          for (; d--; ) a[k[d]] = c[k[d]];
        return a;
      }),
      b.each(h, function (a, c) {
        if (2 > a) j[c] = "mouse" + c;
        else {
          var d = "touch" + ("down" === c ? "start" : "up" === c ? "end" : c);
          (b.event.fixHooks[d] = i), (j[c] = d + " mouse" + c);
        }
      });
  }
  b.pointertouch = j;
  var l = a.document,
    m = "__pz__",
    n = Array.prototype.slice,
    o = !!a.PointerEvent,
    p = (function () {
      var a = l.createElement("input");
      return (
        a.setAttribute("oninput", "return"), "function" == typeof a.oninput
      );
    })(),
    q = /([A-Z])/g,
    r = /^http:[\w\.\/]+svg$/,
    s = /^inline/,
    t = "(\\-?[\\d\\.e]+)",
    u = "\\,?\\s*",
    v = new RegExp(
      "^matrix\\(" + t + u + t + u + t + u + t + u + t + u + t + "\\)$"
    );
  return (
    (e.prototype = {
      x: function (a) {
        var b = a instanceof f,
          c = this.elements,
          d = a.elements;
        return b && 3 === d.length
          ? new f(
              c[0] * d[0] + c[1] * d[1] + c[2] * d[2],
              c[3] * d[0] + c[4] * d[1] + c[5] * d[2],
              c[6] * d[0] + c[7] * d[1] + c[8] * d[2]
            )
          : d.length === c.length
          ? new e(
              c[0] * d[0] + c[1] * d[3] + c[2] * d[6],
              c[0] * d[1] + c[1] * d[4] + c[2] * d[7],
              c[0] * d[2] + c[1] * d[5] + c[2] * d[8],
              c[3] * d[0] + c[4] * d[3] + c[5] * d[6],
              c[3] * d[1] + c[4] * d[4] + c[5] * d[7],
              c[3] * d[2] + c[4] * d[5] + c[5] * d[8],
              c[6] * d[0] + c[7] * d[3] + c[8] * d[6],
              c[6] * d[1] + c[7] * d[4] + c[8] * d[7],
              c[6] * d[2] + c[7] * d[5] + c[8] * d[8]
            )
          : !1;
      },
      inverse: function () {
        var a = 1 / this.determinant(),
          b = this.elements;
        return new e(
          a * (b[8] * b[4] - b[7] * b[5]),
          a * -(b[8] * b[1] - b[7] * b[2]),
          a * (b[5] * b[1] - b[4] * b[2]),
          a * -(b[8] * b[3] - b[6] * b[5]),
          a * (b[8] * b[0] - b[6] * b[2]),
          a * -(b[5] * b[0] - b[3] * b[2]),
          a * (b[7] * b[3] - b[6] * b[4]),
          a * -(b[7] * b[0] - b[6] * b[1]),
          a * (b[4] * b[0] - b[3] * b[1])
        );
      },
      determinant: function () {
        var a = this.elements;
        return (
          a[0] * (a[8] * a[4] - a[7] * a[5]) -
          a[3] * (a[8] * a[1] - a[7] * a[2]) +
          a[6] * (a[5] * a[1] - a[4] * a[2])
        );
      },
    }),
    (f.prototype.e = e.prototype.e =
      function (a) {
        return this.elements[a];
      }),
    (g.rmatrix = v),
    (g.events = b.pointertouch),
    (g.defaults = {
      eventNamespace: ".panzoom",
      transition: !0,
      cursor: "move",
      disablePan: !1,
      disableZoom: !1,
      increment: 0.3,
      minScale: 0.4,
      maxScale: 5,
      rangeStep: 0.05,
      duration: 200,
      easing: "ease-in-out",
      contain: !1,
    }),
    (g.prototype = {
      constructor: g,
      instance: function () {
        return this;
      },
      enable: function () {
        this._initStyle(), this._bind(), (this.disabled = !1);
      },
      disable: function () {
        (this.disabled = !0), this._resetStyle(), this._unbind();
      },
      isDisabled: function () {
        return this.disabled;
      },
      destroy: function () {
        this.disable(), b.removeData(this.elem, m);
      },
      resetDimensions: function () {
        var a = this.$parent;
        this.container = { width: a.innerWidth(), height: a.innerHeight() };
        var c,
          d = a.offset(),
          e = this.elem,
          f = this.$elem;
        this.isSVG
          ? ((c = e.getBoundingClientRect()),
            (c = {
              left: c.left - d.left,
              top: c.top - d.top,
              width: c.width,
              height: c.height,
              margin: { left: 0, top: 0 },
            }))
          : (c = {
              left: b.css(e, "left", !0) || 0,
              top: b.css(e, "top", !0) || 0,
              width: f.innerWidth(),
              height: f.innerHeight(),
              margin: {
                top: b.css(e, "marginTop", !0) || 0,
                left: b.css(e, "marginLeft", !0) || 0,
              },
            }),
          (c.widthBorder =
            b.css(e, "borderLeftWidth", !0) +
              b.css(e, "borderRightWidth", !0) || 0),
          (c.heightBorder =
            b.css(e, "borderTopWidth", !0) +
              b.css(e, "borderBottomWidth", !0) || 0),
          (this.dimensions = c);
      },
      reset: function (a) {
        a = d(a);
        var b = this.setMatrix(this._origTransform, a);
        a.silent || this._trigger("reset", b);
      },
      resetZoom: function (a) {
        a = d(a);
        var b = this.getMatrix(this._origTransform);
        (a.dValue = b[3]), this.zoom(b[0], a);
      },
      resetPan: function (a) {
        var b = this.getMatrix(this._origTransform);
        this.pan(b[4], b[5], d(a));
      },
      setTransform: function (a) {
        for (
          var c = this.isSVG ? "attr" : "style", d = this.$set, e = d.length;
          e--;

        )
          b[c](d[e], "transform", a);
      },
      getTransform: function (a) {
        var c = this.$set,
          d = c[0];
        return (
          a
            ? this.setTransform(a)
            : (a = b[this.isSVG ? "attr" : "style"](d, "transform")),
          "none" === a ||
            v.test(a) ||
            this.setTransform((a = b.css(d, "transform"))),
          a || "none"
        );
      },
      getMatrix: function (a) {
        var b = v.exec(a || this.getTransform());
        return b && b.shift(), b || [1, 0, 0, 1, 0, 0];
      },
      setMatrix: function (a, c) {
        if (!this.disabled) {
          c || (c = {}), "string" == typeof a && (a = this.getMatrix(a));
          var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n = +a[0],
            o = this.$parent,
            p =
              "undefined" != typeof c.contain
                ? c.contain
                : this.options.contain;
          return (
            p &&
              ((d = this._checkDims()),
              (e = this.container),
              (l = d.width + d.widthBorder),
              (m = d.height + d.heightBorder),
              (f = (l * Math.abs(n) - e.width) / 2),
              (g = (m * Math.abs(n) - e.height) / 2),
              (j = d.left + d.margin.left),
              (k = d.top + d.margin.top),
              "invert" === p
                ? ((h = l > e.width ? l - e.width : 0),
                  (i = m > e.height ? m - e.height : 0),
                  (f += (e.width - l) / 2),
                  (g += (e.height - m) / 2),
                  (a[4] = Math.max(Math.min(a[4], f - j), -f - j - h)),
                  (a[5] = Math.max(
                    Math.min(a[5], g - k),
                    -g - k - i + d.heightBorder
                  )))
                : ((g += d.heightBorder / 2),
                  (h = e.width > l ? e.width - l : 0),
                  (i = e.height > m ? e.height - m : 0),
                  "center" === o.css("textAlign") &&
                  s.test(b.css(this.elem, "display"))
                    ? (h = 0)
                    : (f = g = 0),
                  (a[4] = Math.min(Math.max(a[4], f - j), -f - j + h)),
                  (a[5] = Math.min(Math.max(a[5], g - k), -g - k + i)))),
            "skip" !== c.animate && this.transition(!c.animate),
            c.range && this.$zoomRange.val(n),
            this.setTransform("matrix(" + a.join(",") + ")"),
            c.silent || this._trigger("change", a),
            a
          );
        }
      },
      isPanning: function () {
        return this.panning;
      },
      transition: function (a) {
        if (this._transition)
          for (
            var c = a || !this.options.transition ? "none" : this._transition,
              d = this.$set,
              e = d.length;
            e--;

          )
            b.style(d[e], "transition") !== c && b.style(d[e], "transition", c);
      },
      pan: function (a, b, c) {
        if (!this.options.disablePan) {
          c || (c = {});
          var d = c.matrix;
          d || (d = this.getMatrix()),
            c.relative && ((a += +d[4]), (b += +d[5])),
            (d[4] = a),
            (d[5] = b),
            this.setMatrix(d, c),
            c.silent || this._trigger("pan", d[4], d[5]);
        }
      },
      zoom: function (a, c) {
        "object" == typeof a ? ((c = a), (a = null)) : c || (c = {});
        var d = b.extend({}, this.options, c);
        if (!d.disableZoom) {
          var g = !1,
            h = d.matrix || this.getMatrix();
          "number" != typeof a &&
            ((a = +h[0] + d.increment * (a ? -1 : 1)), (g = !0)),
            a > d.maxScale
              ? (a = d.maxScale)
              : a < d.minScale && (a = d.minScale);
          var i = d.focal;
          if (i && !d.disablePan) {
            var j = this._checkDims(),
              k = i.clientX,
              l = i.clientY;
            this.isSVG ||
              ((k -= (j.width + j.widthBorder) / 2),
              (l -= (j.height + j.heightBorder) / 2));
            var m = new f(k, l, 1),
              n = new e(h),
              o = this.parentOffset || this.$parent.offset(),
              p = new e(
                1,
                0,
                o.left - this.$doc.scrollLeft(),
                0,
                1,
                o.top - this.$doc.scrollTop()
              ),
              q = n.inverse().x(p.inverse().x(m)),
              r = a / h[0];
            (n = n.x(new e([r, 0, 0, r, 0, 0]))),
              (m = p.x(n.x(q))),
              (h[4] = +h[4] + (k - m.e(0))),
              (h[5] = +h[5] + (l - m.e(1)));
          }
          (h[0] = a),
            (h[3] = "number" == typeof d.dValue ? d.dValue : a),
            this.setMatrix(h, {
              animate: "boolean" == typeof d.animate ? d.animate : g,
              range: !d.noSetRange,
            }),
            d.silent || this._trigger("zoom", h[0], d);
        }
      },
      option: function (a, c) {
        var d;
        if (!a) return b.extend({}, this.options);
        if ("string" == typeof a) {
          if (1 === arguments.length)
            return void 0 !== this.options[a] ? this.options[a] : null;
          (d = {}), (d[a] = c);
        } else d = a;
        this._setOptions(d);
      },
      _setOptions: function (a) {
        b.each(
          a,
          b.proxy(function (a, c) {
            switch (a) {
              case "disablePan":
                this._resetStyle();
              case "$zoomIn":
              case "$zoomOut":
              case "$zoomRange":
              case "$reset":
              case "disableZoom":
              case "onStart":
              case "onChange":
              case "onZoom":
              case "onPan":
              case "onEnd":
              case "onReset":
              case "eventNamespace":
                this._unbind();
            }
            switch (((this.options[a] = c), a)) {
              case "disablePan":
                this._initStyle();
              case "$zoomIn":
              case "$zoomOut":
              case "$zoomRange":
              case "$reset":
                this[a] = c;
              case "disableZoom":
              case "onStart":
              case "onChange":
              case "onZoom":
              case "onPan":
              case "onEnd":
              case "onReset":
              case "eventNamespace":
                this._bind();
                break;
              case "cursor":
                b.style(this.elem, "cursor", c);
                break;
              case "minScale":
                this.$zoomRange.attr("min", c);
                break;
              case "maxScale":
                this.$zoomRange.attr("max", c);
                break;
              case "rangeStep":
                this.$zoomRange.attr("step", c);
                break;
              case "startTransform":
                this._buildTransform();
                break;
              case "duration":
              case "easing":
                this._buildTransition();
              case "transition":
                this.transition();
                break;
              case "$set":
                c instanceof b &&
                  c.length &&
                  ((this.$set = c), this._initStyle(), this._buildTransform());
            }
          }, this)
        );
      },
      _initStyle: function () {
        var a = {
          "backface-visibility": "hidden",
          "transform-origin": this.isSVG ? "0 0" : "50% 50%",
        };
        this.options.disablePan || (a.cursor = this.options.cursor),
          this.$set.css(a);
        var c = this.$parent;
        c.length &&
          !b.nodeName(c[0], "body") &&
          ((a = { overflow: "hidden" }),
          "static" === c.css("position") && (a.position = "relative"),
          c.css(a));
      },
      _resetStyle: function () {
        this.$elem.css({ cursor: "", transition: "" }),
          this.$parent.css({ overflow: "", position: "" });
      },
      _bind: function () {
        var a = this,
          c = this.options,
          d = c.eventNamespace,
          e = o ? "pointerdown" + d : "touchstart" + d + " mousedown" + d,
          f = o ? "pointerup" + d : "touchend" + d + " click" + d,
          h = {},
          i = this.$reset,
          j = this.$zoomRange;
        if (
          (b.each(
            ["Start", "Change", "Zoom", "Pan", "End", "Reset"],
            function () {
              var a = c["on" + this];
              b.isFunction(a) && (h["panzoom" + this.toLowerCase() + d] = a);
            }
          ),
          (c.disablePan && c.disableZoom) ||
            (h[e] = function (b) {
              var d;
              ("touchstart" === b.type
                ? !(d = b.touches) ||
                  ((1 !== d.length || c.disablePan) && 2 !== d.length)
                : c.disablePan || 1 !== b.which) ||
                (b.preventDefault(), b.stopPropagation(), a._startMove(b, d));
            }),
          this.$elem.on(h),
          i.length &&
            i.on(f, function (b) {
              b.preventDefault(), a.reset();
            }),
          j.length &&
            j
              .attr({
                step:
                  (c.rangeStep === g.defaults.rangeStep && j.attr("step")) ||
                  c.rangeStep,
                min: c.minScale,
                max: c.maxScale,
              })
              .prop({ value: this.getMatrix()[0] }),
          !c.disableZoom)
        ) {
          var k = this.$zoomIn,
            l = this.$zoomOut;
          k.length &&
            l.length &&
            (k.on(f, function (b) {
              b.preventDefault(), a.zoom();
            }),
            l.on(f, function (b) {
              b.preventDefault(), a.zoom(!0);
            })),
            j.length &&
              ((h = {}),
              (h[(o ? "pointerdown" : "mousedown") + d] = function () {
                a.transition(!0);
              }),
              (h[(p ? "input" : "change") + d] = function () {
                a.zoom(+this.value, { noSetRange: !0 });
              }),
              j.on(h));
        }
      },
      _unbind: function () {
        this.$elem
          .add(this.$zoomIn)
          .add(this.$zoomOut)
          .add(this.$reset)
          .off(this.options.eventNamespace);
      },
      _buildTransform: function () {
        return (this._origTransform = this.getTransform(
          this.options.startTransform
        ));
      },
      _buildTransition: function () {
        if (this._transform) {
          var a = this.options;
          this._transition =
            this._transform + " " + a.duration + "ms " + a.easing;
        }
      },
      _checkDims: function () {
        var a = this.dimensions;
        return (a.width && a.height) || this.resetDimensions(), this.dimensions;
      },
      _getDistance: function (a) {
        var b = a[0],
          c = a[1];
        return Math.sqrt(
          Math.pow(Math.abs(c.clientX - b.clientX), 2) +
            Math.pow(Math.abs(c.clientY - b.clientY), 2)
        );
      },
      _getMiddle: function (a) {
        var b = a[0],
          c = a[1];
        return {
          clientX: (c.clientX - b.clientX) / 2 + b.clientX,
          clientY: (c.clientY - b.clientY) / 2 + b.clientY,
        };
      },
      _trigger: function (a) {
        "string" == typeof a && (a = "panzoom" + a),
          this.$elem.triggerHandler(a, [this].concat(n.call(arguments, 1)));
      },
      _startMove: function (a, d) {
        var e,
          f,
          g,
          h,
          i,
          j,
          k,
          m,
          n = this,
          p = this.options,
          q = p.eventNamespace,
          r = this.getMatrix(),
          s = r.slice(0),
          t = +s[4],
          u = +s[5],
          v = { matrix: r, animate: "skip" };
        o
          ? ((f = "pointermove"), (g = "pointerup"))
          : "touchstart" === a.type
          ? ((f = "touchmove"), (g = "touchend"))
          : ((f = "mousemove"), (g = "mouseup")),
          (f += q),
          (g += q),
          this.transition(!0),
          (this.panning = !0),
          this._trigger("start", a, d),
          d && 2 === d.length
            ? ((h = this._getDistance(d)),
              (i = +r[0]),
              (j = this._getMiddle(d)),
              (e = function (a) {
                a.preventDefault();
                var b = n._getMiddle((d = a.touches)),
                  c = n._getDistance(d) - h;
                n.zoom(c * (p.increment / 100) + i, {
                  focal: b,
                  matrix: r,
                  animate: !1,
                }),
                  n.pan(
                    +r[4] + b.clientX - j.clientX,
                    +r[5] + b.clientY - j.clientY,
                    v
                  ),
                  (j = b);
              }))
            : ((k = a.pageX),
              (m = a.pageY),
              (e = function (a) {
                a.preventDefault(), n.pan(t + a.pageX - k, u + a.pageY - m, v);
              })),
          b(l)
            .off(q)
            .on(f, e)
            .on(g, function (a) {
              a.preventDefault(),
                b(this).off(q),
                (n.panning = !1),
                (a.type = "panzoomend"),
                n._trigger(a, r, !c(r, s));
            });
      },
    }),
    (b.Panzoom = g),
    (b.fn.panzoom = function (a) {
      var c, d, e, f;
      return "string" == typeof a
        ? ((f = []),
          (d = n.call(arguments, 1)),
          this.each(function () {
            (c = b.data(this, m)),
              c
                ? "_" !== a.charAt(0) &&
                  "function" == typeof (e = c[a]) &&
                  void 0 !== (e = e.apply(c, d)) &&
                  f.push(e)
                : f.push(void 0);
          }),
          f.length ? (1 === f.length ? f[0] : f) : this)
        : this.each(function () {
            new g(this, a);
          });
    }),
    g
  );
});

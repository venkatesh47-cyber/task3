! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";

    function g(e) {
        return null != e && e === e.window
    }
    var t = [],
        x = C.document,
        i = Object.getPrototypeOf,
        a = t.slice,
        m = t.concat,
        l = t.push,
        r = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        s = v.toString,
        u = s.call(Object),
        y = {},
        _ = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var i, r, o = (n = n || x).createElement("script");
        if (o.text = e, t)
            for (i in c)(r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.1",
        T = function(e, t) {
            return new T.fn.init(e, t)
        },
        h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !_(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    T.fn = T.prototype = {
        jquery: f,
        constructor: T,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = T.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return T.each(this, e)
        },
        map: function(n) {
            return this.pushStack(T.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, T.extend = T.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || _(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = e[t], "__proto__" !== t && s !== i && (u && i && (T.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || T.isPlainObject(n) ? n : {}, r = !1, s[t] = T.extend(u, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, T.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e) || (t = i(e)) && ("function" != typeof(n = v.call(t, "constructor") && t.constructor) || s.call(n) !== u))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, i = 0;
            if (d(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(h, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : r.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) != s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0,
                s = [];
            if (d(e))
                for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
            else
                for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
            return m.apply([], s)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        function f(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }

        function r() {
            E()
        }
        var e, d, b, o, s, p, h, g, w, l, u, E, C, a, x, m, c, v, y, T = "sizzle" + 1 * new Date,
            _ = n.document,
            S = 0,
            i = 0,
            A = le(),
            D = le(),
            N = le(),
            I = le(),
            O = function(e, t) {
                return e === t && (u = !0), 0
            },
            k = {}.hasOwnProperty,
            t = [],
            L = t.pop,
            j = t.push,
            P = t.push,
            H = t.slice,
            q = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + M + "*(" + F + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + M + "*\\]",
            B = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            U = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            K = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            Q = new RegExp(M + "|>"),
            V = new RegExp(B),
            Y = new RegExp("^" + F + "$"),
            X = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /HTML$/i,
            J = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            ee = /^[^{]+\{\s*\[native \w/,
            te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ne = /[+~]/,
            ie = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            se = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            P.apply(t = H.call(_.childNodes), _.childNodes), t[_.childNodes.length].nodeType
        } catch (e) {
            P = {
                apply: t.length ? function(e, t) {
                    j.apply(e, H.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, n, i) {
            var r, o, s, a, l, u, c, f = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : _) !== C && E(t), t = t || C, x)) {
                if (11 !== h && (l = te.exec(e)))
                    if (r = l[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (f && (s = f.getElementById(r)) && y(t, s) && s.id === r) return n.push(s), n
                    } else {
                        if (l[2]) return P.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && d.getElementsByClassName && t.getElementsByClassName) return P.apply(n, t.getElementsByClassName(r)), n
                    }
                if (d.qsa && !I[e + " "] && (!m || !m.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
                    if (c = e, f = t, 1 === h && Q.test(e)) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(re, oe) : t.setAttribute("id", a = T), o = (u = p(e)).length; o--;) u[o] = "#" + a + " " + _e(u[o]);
                        c = u.join(","), f = ne.test(e) && ve(t.parentNode) || t
                    }
                    try {
                        return P.apply(n, f.querySelectorAll(c)), n
                    } catch (t) {
                        I(e, !0)
                    } finally {
                        a === T && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace($, "$1"), t, n, i)
        }

        function le() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > b.cacheLength && delete e[i.shift()], e[t + " "] = n
            }
        }

        function ue(e) {
            return e[T] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
        }

        function he(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function pe(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function me(s) {
            return ue(function(o) {
                return o = +o, ue(function(e, t) {
                    for (var n, i = s([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in d = ae.support = {}, s = ae.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !G.test(t || n && n.nodeName || "HTML")
            }, E = ae.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : _;
                return i !== C && 9 === i.nodeType && i.documentElement && (a = (C = i).documentElement, x = !s(C), _ !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", r, !1) : n.attachEvent && n.attachEvent("onunload", r)), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = ee.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = T, !C.getElementsByName || !C.getElementsByName(T).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(ie, f);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && x) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(ie, f);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && x) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && x) return t.getElementsByClassName(e)
                }, c = [], m = [], (d.qsa = ee.test(C.querySelectorAll)) && (ce(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + T + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + T + "+*").length || m.push(".#.+[+~]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (d.matchesSelector = ee.test(v = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), c.push("!=", B)
                }), m = m.length && new RegExp(m.join("|")), c = c.length && new RegExp(c.join("|")), t = ee.test(a.compareDocumentPosition), y = t || ee.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, O = t ? function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === _ && y(_, e) ? -1 : t === C || t.ownerDocument === _ && y(_, t) ? 1 : l ? q(l, e) - q(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!r || !o) return e === C ? -1 : t === C ? 1 : r ? -1 : o ? 1 : l ? q(l, e) - q(l, t) : 0;
                    if (r === o) return he(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? he(s[i], a[i]) : s[i] === _ ? -1 : a[i] === _ ? 1 : 0
                }), C
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && E(e), d.matchesSelector && x && !I[t + " "] && (!c || !c.test(t)) && (!m || !m.test(t))) try {
                    var n = v.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    I(t, !0)
                }
                return 0 < ae(t, C, null, [e]).length
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && E(e), y(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) !== C && E(e);
                var n = b.attrHandle[t.toLowerCase()],
                    i = n && k.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !x) : void 0;
                return void 0 !== i ? i : d.attributes || !x ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(re, oe)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (u = !d.detectDuplicates, l = !d.sortStable && e.slice(0), e.sort(O), u) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return l = null, e
            }, o = ae.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += o(t);
                return n
            }, (b = ae.selectors = {
                cacheLength: 50,
                createPseudo: ue,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ie, f), e[3] = (e[3] || e[4] || e[5] || "").replace(ie, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ie, f).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = A[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && A(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, r) {
                        return function(e) {
                            var t = ae.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(U, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(p, e, t, g, m) {
                        var v = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            _ = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, r, o, s, a, l, u = v != y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = _ && e.nodeName.toLowerCase(),
                                h = !n && !_,
                                d = !1;
                            if (c) {
                                if (v) {
                                    for (; u;) {
                                        for (s = e; s = s[u];)
                                            if (_ ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                        l = u = "only" === p && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild], y && h) {
                                    for (d = (a = (i = (r = (o = (s = c)[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]) && i[2], s = a && c.childNodes[a]; s = ++a && s && s[u] || (d = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++d && s === e) {
                                            r[p] = [S, a, d];
                                            break
                                        }
                                } else if (h && (d = a = (i = (r = (o = (s = e)[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]), !1 === d)
                                    for (;
                                        (s = ++a && s && s[u] || (d = a = 0) || l.pop()) && ((_ ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++d || (h && ((r = (o = s[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [S, d]), s !== e)););
                                return (d -= m) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return s[T] ? s(o) : 1 < s.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, t) {
                            for (var n, i = s(e, o), r = i.length; r--;) e[n = q(e, i[r])] = !(t[n] = i[r])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: ue(function(e) {
                        var i = [],
                            r = [],
                            a = h(e.replace($, "$1"));
                        return a[T] ? ue(function(e, t, n, i) {
                            for (var r, o = a(e, null, i, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, t, n) {
                            return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop()
                        }
                    }),
                    has: ue(function(t) {
                        return function(e) {
                            return 0 < ae(t, e).length
                        }
                    }),
                    contains: ue(function(t) {
                        return t = t.replace(ie, f),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: ue(function(n) {
                        return Y.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(ie, f).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = x ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Z.test(e.nodeName)
                    },
                    input: function(e) {
                        return J.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me(function() {
                        return [0]
                    }),
                    last: me(function(e, t) {
                        return [t - 1]
                    }),
                    eq: me(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: me(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: me(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: me(function(e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: me(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = pe(e);

        function ye() {}

        function _e(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function be(a, e, t) {
            var l = e.dir,
                u = e.next,
                c = u || l,
                f = t && "parentNode" === c,
                h = i++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || f) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var i, r, o, s = [S, h];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || f) && a(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || f)
                            if (r = (o = e[T] || (e[T] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((i = r[c]) && i[0] === S && i[1] === h) return s[2] = i[2];
                                if ((r[c] = s)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function we(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--;)
                    if (!r[i](e, t, n)) return !1;
                return !0
            } : r[0]
        }

        function Ee(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
            return s
        }

        function Ce(d, p, g, m, v, e) {
            return m && !m[T] && (m = Ce(m)), v && !v[T] && (v = Ce(v, e)), ue(function(e, t, n, i) {
                var r, o, s, a = [],
                    l = [],
                    u = t.length,
                    c = e || function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                        return n
                    }(p || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && p ? c : Ee(c, a, d, n, i),
                    h = g ? v || (e ? d : u || m) ? [] : t : f;
                if (g && g(f, h, n, i), m)
                    for (r = Ee(h, l), m(r, [], n, i), o = r.length; o--;)(s = r[o]) && (h[l[o]] = !(f[l[o]] = s));
                if (e) {
                    if (v || d) {
                        if (v) {
                            for (r = [], o = h.length; o--;)(s = h[o]) && r.push(f[o] = s);
                            v(null, h = [], r, i)
                        }
                        for (o = h.length; o--;)(s = h[o]) && -1 < (r = v ? q(e, s) : a[o]) && (e[r] = !(t[r] = s))
                    }
                } else h = Ee(h === t ? h.splice(u, h.length) : h), v ? v(null, t, h, i) : P.apply(t, h)
            })
        }

        function xe(e) {
            for (var r, t, n, i = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, l = be(function(e) {
                    return e === r
                }, s, !0), u = be(function(e) {
                    return -1 < q(r, e)
                }, s, !0), c = [function(e, t, n) {
                    var i = !o && (n || t !== w) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                    return r = null, i
                }]; a < i; a++)
                if (t = b.relative[e[a].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[a].type].apply(null, e[a].matches))[T]) {
                        for (n = ++a; n < i && !b.relative[e[n].type]; n++);
                        return Ce(1 < a && we(c), 1 < a && _e(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace($, "$1"), t, a < n && xe(e.slice(a, n)), n < i && xe(e = e.slice(n)), n < i && _e(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return ye.prototype = b.filters = b.pseudos, b.setFilters = new ye, p = ae.tokenize = function(e, t) {
            var n, i, r, o, s, a, l, u = D[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, a = [], l = b.preFilter; s;) {
                for (o in n && !(i = K.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), r.push({
                        value: n,
                        type: i[0].replace($, " ")
                    }), s = s.slice(n.length)), b.filter) !(i = X[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: o,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? ae.error(e) : D(e, a).slice(0)
        }, h = ae.compile = function(e, t) {
            var n, m, v, y, _, i, r = [],
                o = [],
                s = N[e + " "];
            if (!s) {
                for (n = (t = t || p(e)).length; n--;)(s = xe(t[n]))[T] ? r.push(s) : o.push(s);
                (s = N(e, (m = o, y = 0 < (v = r).length, _ = 0 < m.length, i = function(e, t, n, i, r) {
                    var o, s, a, l = 0,
                        u = "0",
                        c = e && [],
                        f = [],
                        h = w,
                        d = e || _ && b.find.TAG("*", r),
                        p = S += null == h ? 1 : Math.random() || .1,
                        g = d.length;
                    for (r && (w = t === C || t || r); u !== g && null != (o = d[u]); u++) {
                        if (_ && o) {
                            for (s = 0, t || o.ownerDocument === C || (E(o), n = !x); a = m[s++];)
                                if (a(o, t || C, n)) {
                                    i.push(o);
                                    break
                                }
                            r && (S = p)
                        }
                        y && ((o = !a && o) && l--, e && c.push(o))
                    }
                    if (l += u, y && u !== l) {
                        for (s = 0; a = v[s++];) a(c, f, t, n);
                        if (e) {
                            if (0 < l)
                                for (; u--;) c[u] || f[u] || (f[u] = L.call(i));
                            f = Ee(f)
                        }
                        P.apply(i, f), r && !e && 0 < f.length && 1 < l + v.length && ae.uniqueSort(i)
                    }
                    return r && (S = p, w = h), c
                }, y ? ue(i) : i))).selector = e
            }
            return s
        }, g = ae.select = function(e, t, n, i) {
            var r, o, s, a, l, u = "function" == typeof e && e,
                c = !i && p(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && x && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(ie, f), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = X.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !b.relative[a = s.type]);)
                    if ((l = b.find[a]) && (i = l(s.matches[0].replace(ie, f), ne.test(o[0].type) && ve(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = i.length && _e(o))) return P.apply(n, i), n;
                        break
                    }
            }
            return (u || h(e, c))(i, t, !x, n, !t || ne.test(e) && ve(t.parentNode) || t), n
        }, d.sortStable = T.split("").sort(O).join("") === T, d.detectDuplicates = !!u, E(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), ae
    }(C);
    T.find = p, T.expr = p.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = p.uniqueSort, T.text = p.getText, T.isXMLDoc = p.isXML, T.contains = p.contains, T.escapeSelector = p.escape;

    function E(e, t, n) {
        for (var i = [], r = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (r && T(e).is(n)) break;
                i.push(e)
            }
        return i
    }

    function S(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var A = T.expr.match.needsContext;

    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function I(e, n, i) {
        return _(n) ? T.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? T.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? T.grep(e, function(e) {
            return -1 < r.call(n, e) !== i
        }) : T.filter(n, e, i)
    }
    T.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, T.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(T(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (T.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, r[t], n);
            return 1 < i ? T.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(I(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(I(this, e || [], !0))
        },
        is: function(e) {
            return !!I(this, "string" == typeof e && A.test(e) ? T(e) : e || [], !1).length
        }
    });
    var O, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || O, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : _(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : k.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : x, !0)), N.test(i[1]) && T.isPlainObject(t))
                for (i in t) _(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (r = x.getElementById(i[2])) && (this[0] = r, this.length = 1), this
    }).prototype = T.fn, O = T(x);
    var L = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    T.fn.extend({
        has: function(e) {
            var t = T(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (T.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && T(e);
            if (!A.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? T.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call(T(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), T.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return E(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return E(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return E(e, "nextSibling")
        },
        prevAll: function(e) {
            return E(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return E(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return E(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (D(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
        }
    }, function(i, r) {
        T.fn[i] = function(e, t) {
            var n = T.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = T.filter(t, n)), 1 < this.length && (j[i] || T.uniqueSort(n), L.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;

    function q(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function M(e, t, n, i) {
        var r;
        try {
            e && _(r = e.promise) ? r.call(e).done(t).fail(n) : e && _(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    T.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, T.each(e.match(H) || [], function(e, t) {
            n[t] = !0
        }), n) : T.extend({}, i);

        function r() {
            for (a = a || i.once, s = o = !0; u.length; c = -1)
                for (t = u.shift(); ++c < l.length;) !1 === l[c].apply(t[0], t[1]) && i.stopOnFalse && (c = l.length, t = !1);
            i.memory || (t = !1), o = !1, a && (l = t ? [] : "")
        }
        var o, t, s, a, l = [],
            u = [],
            c = -1,
            f = {
                add: function() {
                    return l && (t && !o && (c = l.length - 1, u.push(t)), function n(e) {
                        T.each(e, function(e, t) {
                            _(t) ? i.unique && f.has(t) || l.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !o && r()), this
                },
                remove: function() {
                    return T.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = T.inArray(t, l, n));) l.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < T.inArray(e, l) : 0 < l.length
                },
                empty: function() {
                    return l = l && [], this
                },
                disable: function() {
                    return a = u = [], l = t = "", this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return a = u = [], t || o || (l = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), o || r()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return f
    }, T.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                    ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                s = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var r = arguments;
                        return T.Deferred(function(i) {
                            T.each(o, function(e, t) {
                                var n = _(r[t[4]]) && r[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && _(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        var l = 0;

                        function u(r, o, s, a) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(r < l)) {
                                        if ((e = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, _(t) ? a ? t.call(e, u(l, o, q, a), u(l, o, R, a)) : (l++, t.call(e, u(l, o, q, a), u(l, o, R, a), u(l, o, q, o.notifyWith))) : (s !== q && (n = void 0, i = [e]), (a || o.resolveWith)(n, i))
                                    }
                                }
                                var n = this,
                                    i = arguments,
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            T.Deferred.exceptionHook && T.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (s !== R && (n = void 0, i = [e]), o.rejectWith(n, i))
                                        }
                                    };
                                r ? t() : (T.Deferred.getStackHook && (t.stackTrace = T.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return T.Deferred(function(e) {
                            o[0][3].add(u(0, e, _(i) ? i : q, e.notifyWith)), o[1][3].add(u(0, e, _(t) ? t : q)), o[2][3].add(u(0, e, _(n) ? n : R))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? T.extend(e, s) : s
                    }
                },
                a = {};
            return T.each(o, function(e, t) {
                var n = t[2],
                    i = t[5];
                s[t[1]] = n.add, i && n.add(function() {
                    r = i
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    r[t] = this, o[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(r, o)
                }
            }
            var n = arguments.length,
                i = n,
                r = Array(i),
                o = a.call(arguments),
                s = T.Deferred();
            if (n <= 1 && (M(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || _(o[i] && o[i].then))) return s.then();
            for (; i--;) M(o[i], t(i), s.reject);
            return s.promise()
        }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && F.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, T.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var W = T.Deferred();

    function B() {
        x.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), T.ready()
    }
    T.fn.ready = function(e) {
        return W.then(e).catch(function(e) {
            T.readyException(e)
        }), this
    }, T.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0) !== e && 0 < --T.readyWait || W.resolveWith(x, [T])
        }
    }), T.ready.then = W.then, "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? C.setTimeout(T.ready) : (x.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var U = function(e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === w(n))
                for (a in r = !0, n) U(e, t, a, n[a], !0, o, s);
            else if (void 0 !== i && (r = !0, _(i) || (s = !0), u && (t = s ? (t.call(e, i), null) : (u = t, function(e, t, n) {
                    return u.call(T(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        $ = /^-ms-/,
        K = /-([a-z])/g;

    function z(e, t) {
        return t.toUpperCase()
    }

    function Q(e) {
        return e.replace($, "ms-").replace(K, z)
    }

    function V(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function Y() {
        this.expando = T.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[Q(t)] = n;
            else
                for (i in t) r[Q(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in i ? [t] : t.match(H) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                void 0 !== t && !T.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t)
        }
    };
    var X = new Y,
        G = new Y,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : J.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    T.extend({
        hasData: function(e) {
            return G.hasData(e) || X.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return X.access(e, t, n)
        },
        _removeData: function(e, t) {
            X.remove(e, t)
        }
    }), T.fn.extend({
        data: function(n, e) {
            var t, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                G.set(this, n)
            }) : U(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = G.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    G.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (r = G.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = Q(i.slice(5)), ee(o, i, r[i]));
                X.set(o, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), T.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = X.get(e, t), n && (!i || Array.isArray(n) ? i = X.access(e, t, T.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = T.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = T._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                T.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return X.get(e, n) || X.access(e, n, {
                empty: T.Callbacks("once memory").add(function() {
                    X.remove(e, [t + "queue", n])
                })
            })
        }
    }), T.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? T.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = T.queue(this, t, n);
                T._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                T.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --r || o.resolveWith(s, [s])
            }
            var i, r = 1,
                o = T.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = X.get(s[a], e + "queueHooks")) && i.empty && (r++, i.empty.add(n));
            return n(), o.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        re = x.documentElement,
        oe = function(e) {
            return T.contains(e.ownerDocument, e)
        },
        se = {
            composed: !0
        };
    re.getRootNode && (oe = function(e) {
        return T.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
    });

    function ae(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === T.css(e, "display")
    }

    function le(e, t, n, i) {
        var r, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
        return r
    }

    function ue(e, t, n, i) {
        var r, o, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return T.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (T.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (T.cssNumber[t] || "px" !== u && +l) && ne.exec(T.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; s--;) T.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
            c *= 2, T.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }
    var ce = {};

    function fe(e, t) {
        for (var n, i, r, o, s, a, l, u = [], c = 0, f = e.length; c < f; c++)(i = e[c]).style && (n = i.style.display, t ? ("none" === n && (u[c] = X.get(i, "display") || null, u[c] || (i.style.display = "")), "" === i.style.display && ae(i) && (u[c] = (l = s = o = void 0, s = (r = i).ownerDocument, a = r.nodeName, (l = ce[a]) || (o = s.body.appendChild(s.createElement(a)), l = T.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), ce[a] = l)))) : "none" !== n && (u[c] = "none", X.set(i, "display", n)));
        for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    T.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? T(this).show() : T(this).hide()
            })
        }
    });
    var he = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? T.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var ye, _e, be = /<|&#?\w+;/;

    function we(e, t, n, i, r) {
        for (var o, s, a, l, u, c, f = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) T.merge(h, o.nodeType ? [o] : o);
                else if (be.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (de.exec(o) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
            T.merge(h, s.childNodes), (s = f.firstChild).textContent = ""
        } else h.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = h[d++];)
            if (i && -1 < T.inArray(o, i)) r && r.push(o);
            else if (u = oe(o), s = me(f.appendChild(o), "script"), u && ve(s), n)
            for (c = 0; o = s[c++];) pe.test(o.type || "") && n.push(o);
        return f
    }
    ye = x.createDocumentFragment().appendChild(x.createElement("div")), (_e = x.createElement("input")).setAttribute("type", "radio"), _e.setAttribute("checked", "checked"), _e.setAttribute("name", "t"), ye.appendChild(_e), y.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var Ee = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xe = /^([^.]*)(?:\.(.+)|)/;

    function Te() {
        return !0
    }

    function Se() {
        return !1
    }

    function Ae(e, t) {
        return e === function() {
            try {
                return x.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function De(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) De(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Se;
        else if (!r) return e;
        return 1 === o && (s = r, (r = function(e) {
            return T().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = T.guid++)), e.each(function() {
            T.event.add(this, t, r, i, n)
        })
    }

    function Ne(e, r, o) {
        o ? (X.set(e, r, !1), T.event.add(e, r, {
            namespace: !1,
            handler: function(e) {
                var t, n, i = X.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (i.length)(T.event.special[r] || {}).delegateType && e.stopPropagation();
                    else if (i = a.call(arguments), X.set(this, r, i), t = o(this, r), this[r](), i !== (n = X.get(this, r)) || t ? X.set(this, r, !1) : n = {}, i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else i.length && (X.set(this, r, {
                    value: T.event.trigger(T.extend(i[0], T.Event.prototype), i.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === X.get(e, r) && T.event.add(e, r, Te)
    }
    T.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, u, c, f, h, d, p, g, m = X.get(t);
            if (m)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && T.find.matchesSelector(re, r), n.guid || (n.guid = T.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                        return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(H) || [""]).length; u--;) d = g = (a = xe.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), d && (f = T.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, f = T.event.special[d] || {}, c = T.extend({
                    type: d,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && T.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (h = l[d]) || ((h = l[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(d, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), T.event.global[d] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, h, d, p, g, m = X.hasData(e) && X.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(H) || [""]).length; u--;)
                    if (d = g = (a = xe.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), d) {
                        for (f = T.event.special[d] || {}, h = l[d = (i ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || T.removeEvent(e, d, m.handle), delete l[d])
                    } else
                        for (d in l) T.event.remove(e, d + t[u], n, i, !0);
                T.isEmptyObject(l) && X.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = T.event.fix(e),
                l = new Array(arguments.length),
                u = (X.get(this, "events") || {})[a.type] || [],
                c = T.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = T.event.handlers.call(this, a, u), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((T.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < T(r, this).index(u) : T.find(r, this, null, [u]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this, l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(T.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: _(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[T.expando] ? e : new T.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && D(t, "input") && Ne(t, "click", Te), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && D(t, "input") && Ne(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return he.test(t.type) && t.click && D(t, "input") && X.get(t, "click") || D(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, T.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, T.Event = function(e, t) {
        if (!(this instanceof T.Event)) return new T.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
    }, T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, T.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, T.event.addProp), T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        T.event.special[e] = {
            setup: function() {
                return Ne(this, e, Ae), !1
            },
            trigger: function() {
                return Ne(this, e), !0
            },
            delegateType: t
        }
    }), T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        T.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || T.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), T.fn.extend({
        on: function(e, t, n, i) {
            return De(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return De(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                T.event.remove(this, e, n, t)
            });
            for (r in e) this.off(r, t, e[r]);
            return this
        }
    });
    var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Oe = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function qe(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (X.hasData(e) && (o = X.access(e), s = X.set(t, o), u = o.events))
                for (r in delete s.handle, s.events = {}, u)
                    for (n = 0, i = u[r].length; n < i; n++) T.event.add(t, r, u[r][n]);
            G.hasData(e) && (a = G.access(e), l = T.extend({}, a), G.set(t, l))
        }
    }

    function Re(n, i, r, o) {
        i = m.apply([], i);
        var e, t, s, a, l, u, c = 0,
            f = n.length,
            h = f - 1,
            d = i[0],
            p = _(d);
        if (p || 1 < f && "string" == typeof d && !y.checkClone && ke.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            p && (i[0] = d.call(this, e, t.html())), Re(t, i, r, o)
        });
        if (f && (t = (e = we(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (a = (s = T.map(me(e, "script"), Pe)).length; c < f; c++) l = e, c !== h && (l = T.clone(l, !0, !0), a && T.merge(s, me(l, "script"))), r.call(n[c], l, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, T.map(s, He), c = 0; c < a; c++) l = s[c], pe.test(l.type || "") && !X.access(l, "globalEval") && T.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && !l.noModule && T._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }) : b(l.textContent.replace(Le, ""), l, u))
        }
        return n
    }

    function Me(e, t, n) {
        for (var i, r = t ? T.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || T.cleanData(me(i)), i.parentNode && (n && oe(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    T.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ie, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a, l, u, c = e.cloneNode(!0),
                f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                for (s = me(c), i = 0, r = (o = me(e)).length; i < r; i++) a = o[i], "input" === (u = (l = s[i]).nodeName.toLowerCase()) && he.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || me(e), s = s || me(c), i = 0, r = o.length; i < r; i++) qe(o[i], s[i]);
                else qe(e, c);
            return 0 < (s = me(c, "script")).length && ve(s, !f && me(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, i, r = T.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[X.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
                        n[X.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), T.fn.extend({
        detach: function(e) {
            return Me(this, e, !0)
        },
        remove: function(e) {
            return Me(this, e)
        },
        text: function(e) {
            return U(this, function(e) {
                return void 0 === e ? T.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return T.clone(this, e, t)
            })
        },
        html: function(e) {
            return U(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Oe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = T.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Re(this, arguments, function(e) {
                var t = this.parentNode;
                T.inArray(this, n) < 0 && (T.cleanData(me(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        T.fn[e] = function(e) {
            for (var t, n = [], i = T(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), T(i[o])[s](t), l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Fe, We, Be, Ue, $e, Ke, ze, Qe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Ve = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Ye = new RegExp(ie.join("|"), "i");

    function Xe(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || Ve(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || oe(e) || (s = T.style(e, t)), !y.pixelBoxStyles() && Qe.test(s) && Ye.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Ge(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function Je() {
        if (ze) {
            Ke.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", ze.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(Ke).appendChild(ze);
            var e = C.getComputedStyle(ze);
            Fe = "1%" !== e.top, $e = 12 === Ze(e.marginLeft), ze.style.right = "60%", Ue = 36 === Ze(e.right), We = 36 === Ze(e.width), ze.style.position = "absolute", Be = 12 === Ze(ze.offsetWidth / 3), re.removeChild(Ke), ze = null
        }
    }

    function Ze(e) {
        return Math.round(parseFloat(e))
    }
    Ke = x.createElement("div"), (ze = x.createElement("div")).style && (ze.style.backgroundClip = "content-box", ze.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === ze.style.backgroundClip, T.extend(y, {
        boxSizingReliable: function() {
            return Je(), We
        },
        pixelBoxStyles: function() {
            return Je(), Ue
        },
        pixelPosition: function() {
            return Je(), Fe
        },
        reliableMarginLeft: function() {
            return Je(), $e
        },
        scrollboxSize: function() {
            return Je(), Be
        }
    }));
    var et = ["Webkit", "Moz", "ms"],
        tt = x.createElement("div").style,
        nt = {};

    function it(e) {
        return T.cssProps[e] || nt[e] || (e in tt ? e : nt[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;)
                if ((e = et[n] + t) in tt) return e
        }(e) || e)
    }
    var rt = /^(none|table(?!-c[ea]).+)/,
        ot = /^--/,
        st = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        at = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function lt(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function ut(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += T.css(e, n + ie[s], !0, r)), i ? ("content" === n && (l -= T.css(e, "padding" + ie[s], !0, r)), "margin" !== n && (l -= T.css(e, "border" + ie[s] + "Width", !0, r))) : (l += T.css(e, "padding" + ie[s], !0, r), "padding" !== n ? l += T.css(e, "border" + ie[s] + "Width", !0, r) : a += T.css(e, "border" + ie[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
    }

    function ct(e, t, n) {
        var i = Ve(e),
            r = (!y.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, i),
            o = r,
            s = Xe(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Qe.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!y.boxSizingReliable() && r || "auto" === s || !parseFloat(s) && "inline" === T.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === T.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + ut(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
    }

    function ft(e, t, n, i, r) {
        return new ft.prototype.init(e, t, n, i, r)
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Xe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = Q(t),
                    l = ot.test(t),
                    u = e.style;
                if (l || (t = it(a)), s = T.cssHooks[t] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
                "string" == (o = typeof n) && (r = ne.exec(n)) && r[1] && (n = ue(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (T.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = Q(t);
            return ot.test(t) || (t = it(a)), (s = T.cssHooks[t] || T.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Xe(e, t, i)), "normal" === r && t in at && (r = at[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), T.each(["height", "width"], function(e, l) {
        T.cssHooks[l] = {
            get: function(e, t, n) {
                if (t) return !rt.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ct(e, l, n) : le(e, st, function() {
                    return ct(e, l, n)
                })
            },
            set: function(e, t, n) {
                var i, r = Ve(e),
                    o = !y.scrollboxSize() && "absolute" === r.position,
                    s = (o || n) && "border-box" === T.css(e, "boxSizing", !1, r),
                    a = n ? ut(e, l, n, s, r) : 0;
                return s && o && (a -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(r[l]) - ut(e, l, "border", !1, r) - .5)), a && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[l] = t, t = T.css(e, l)), lt(0, t, a)
            }
        }
    }), T.cssHooks.marginLeft = Ge(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Xe(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), T.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        T.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + ie[t] + o] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, "margin" !== r && (T.cssHooks[r + o].set = lt)
    }), T.fn.extend({
        css: function(e, t) {
            return U(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = Ve(e), r = t.length; s < r; s++) o[t[s]] = T.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((T.Tween = ft).prototype = {
        constructor: ft,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (T.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = ft.propHooks[this.prop];
            return e && e.get ? e.get(this) : ft.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = ft.propHooks[this.prop];
            return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ft.propHooks._default.set(this), this
        }
    }).init.prototype = ft.prototype, (ft.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[it(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = ft.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, T.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, T.fx = ft.prototype.init, T.fx.step = {};
    var ht, dt, pt, gt, mt = /^(?:toggle|show|hide)$/,
        vt = /queueHooks$/;

    function yt() {
        dt && (!1 === x.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(yt) : C.setTimeout(yt, T.fx.interval), T.fx.tick())
    }

    function _t() {
        return C.setTimeout(function() {
            ht = void 0
        }), ht = Date.now()
    }

    function bt(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function wt(e, t, n) {
        for (var i, r = (Et.tweeners[t] || []).concat(Et.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function Et(o, e, t) {
        var n, s, i = 0,
            r = Et.prefilters.length,
            a = T.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = ht || _t(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
                return a.notifyWith(o, [u, n, t]), n < 1 && r ? t : (r || a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u]), !1)
            },
            u = a.promise({
                elem: o,
                props: T.extend({}, e),
                opts: T.extend(!0, {
                    specialEasing: {},
                    easing: T.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: ht || _t(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = T.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) u.tweens[t].run(1);
                    return e ? (a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u, e])) : a.rejectWith(o, [u, e]), this
                }
            }),
            c = u.props;
        for (function(e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (r = t[i = Q(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = T.cssHooks[i]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r
            }(c, u.opts.specialEasing); i < r; i++)
            if (n = Et.prefilters[i].call(u, o, c, u.opts)) return _(n.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
        return T.map(c, wt, u), _(u.opts.start) && u.opts.start.call(o, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), T.fx.timer(T.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    T.Animation = T.extend(Et, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, i = 0, r = (e = _(e) ? (t = e, ["*"]) : e.match(H)).length; i < r; i++) n = e[i], Et.tweeners[n] = Et.tweeners[n] || [], Et.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, o, s, a, l, u, c, f = "width" in t || "height" in t,
                h = this,
                d = {},
                p = e.style,
                g = e.nodeType && ae(e),
                m = X.get(e, "fxshow");
            for (i in n.queue || (null == (s = T._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, h.always(function() {
                    h.always(function() {
                        s.unqueued--, T.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (r = t[i], mt.test(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    d[i] = m && m[i] || T.style(e, i)
                }
            if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(d))
                for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = X.get(e, "display")), "none" === (c = T.css(e, "display")) && (u ? c = u : (fe([e], !0), u = e.style.display || u, c = T.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(e, "float") && (l || (h.done(function() {
                        p.display = u
                    }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1, d) l || (m ? "hidden" in m && (g = m.hidden) : m = X.access(e, "fxshow", {
                    display: u
                }), o && (m.hidden = !g), g && fe([e], !0), h.done(function() {
                    for (i in g || fe([e]), X.remove(e, "fxshow"), d) T.style(e, i, d[i])
                })), l = wt(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? Et.prefilters.unshift(e) : Et.prefilters.push(e)
        }
    }), T.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? T.extend({}, e) : {
            complete: n || !n && t || _(e) && e,
            duration: e,
            easing: n && t || t && !_(t) && t
        };
        return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            _(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
        }, i
    }, T.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            function r() {
                var e = Et(this, T.extend({}, t), s);
                (o || X.get(this, "finish")) && e.stop(!0)
            }
            var o = T.isEmptyObject(t),
                s = T.speed(e, n, i);
            return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function(r, e, o) {
            function s(e) {
                var t = e.stop;
                delete e.stop, t(o)
            }
            return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                var e = !0,
                    t = null != r && r + "queueHooks",
                    n = T.timers,
                    i = X.get(this);
                if (t) i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && vt.test(t) && s(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || T.dequeue(this, r)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = X.get(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    r = T.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, T.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), T.each(["toggle", "show", "hide"], function(e, i) {
        var r = T.fn[i];
        T.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(bt(i, !0), e, t, n)
        }
    }), T.each({
        slideDown: bt("show"),
        slideUp: bt("hide"),
        slideToggle: bt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        T.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), T.timers = [], T.fx.tick = function() {
        var e, t = 0,
            n = T.timers;
        for (ht = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || T.fx.stop(), ht = void 0
    }, T.fx.timer = function(e) {
        T.timers.push(e), T.fx.start()
    }, T.fx.interval = 13, T.fx.start = function() {
        dt || (dt = !0, yt())
    }, T.fx.stop = function() {
        dt = null
    }, T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, T.fn.delay = function(i, e) {
        return i = T.fx && T.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, i);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, pt = x.createElement("input"), gt = x.createElement("select").appendChild(x.createElement("option")), pt.type = "checkbox", y.checkOn = "" !== pt.value, y.optSelected = gt.selected, (pt = x.createElement("input")).value = "t", pt.type = "radio", y.radioValue = "t" === pt.value;
    var Ct, xt = T.expr.attrHandle;
    T.fn.extend({
        attr: function(e, t) {
            return U(this, T.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                T.removeAttr(this, e)
            })
        }
    }), T.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (r = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? Ct : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = T.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(H);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), Ct = {
        set: function(e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = xt[t] || T.find.attr;
        xt[t] = function(e, t, n) {
            var i, r, o = t.toLowerCase();
            return n || (r = xt[o], xt[o] = i, i = null != s(e, t, n) ? o : null, xt[o] = r), i
        }
    });
    var Tt = /^(?:input|select|textarea|button)$/i,
        St = /^(?:a|area)$/i;

    function At(e) {
        return (e.match(H) || []).join(" ")
    }

    function Dt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Nt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
    }
    T.fn.extend({
        prop: function(e, t) {
            return U(this, T.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[T.propFix[e] || e]
            })
        }
    }), T.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t, r = T.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = T.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Tt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), y.optSelected || (T.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        T.propFix[this.toLowerCase()] = this
    }), T.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (_(t)) return this.each(function(e) {
                T(this).addClass(t.call(this, e, Dt(this)))
            });
            if ((e = Nt(t)).length)
                for (; n = this[l++];)
                    if (r = Dt(n), i = 1 === n.nodeType && " " + At(r) + " ") {
                        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = At(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (_(t)) return this.each(function(e) {
                T(this).removeClass(t.call(this, e, Dt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = Nt(t)).length)
                for (; n = this[l++];)
                    if (r = Dt(n), i = 1 === n.nodeType && " " + At(r) + " ") {
                        for (s = 0; o = e[s++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (a = At(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(r, t) {
            var o = typeof r,
                s = "string" == o || Array.isArray(r);
            return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : _(r) ? this.each(function(e) {
                T(this).toggleClass(r.call(this, e, Dt(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (s)
                    for (t = 0, n = T(this), i = Nt(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== r && "boolean" != o || ((e = Dt(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : X.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + At(Dt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var It = /\r/g;
    T.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = _(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, T(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = T.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = T.valHooks[t.type] || T.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(It, "") : null == e ? "" : e : void 0
        }
    }), T.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : At(T.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (t = T(n).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = T.makeArray(t), s = r.length; s--;)((i = r[s]).selected = -1 < T.inArray(T.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), T.each(["radio", "checkbox"], function() {
        T.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < T.inArray(T(e).val(), t)
            }
        }, y.checkOn || (T.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;

    function Ot(e) {
        e.stopPropagation()
    }
    var kt = /^(?:focusinfocus|focusoutblur)$/;
    T.extend(T.event, {
        trigger: function(e, t, n, i) {
            var r, o, s, a, l, u, c, f, h = [n || x],
                d = v.call(e, "type") ? e.type : e,
                p = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = s = n = n || x, 3 !== n.nodeType && 8 !== n.nodeType && !kt.test(d + T.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), l = d.indexOf(":") < 0 && "on" + d, (e = e[T.expando] ? e : new T.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : T.makeArray(t, [e]), c = T.event.special[d] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !g(n)) {
                    for (a = c.delegateType || d, kt.test(a + d) || (o = o.parentNode); o; o = o.parentNode) h.push(o), s = o;
                    s === (n.ownerDocument || x) && h.push(s.defaultView || s.parentWindow || C)
                }
                for (r = 0;
                    (o = h[r++]) && !e.isPropagationStopped();) f = o, e.type = 1 < r ? a : c.bindType || d, (u = (X.get(o, "events") || {})[e.type] && X.get(o, "handle")) && u.apply(o, t), (u = l && o[l]) && u.apply && V(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), t) || !V(n) || l && _(n[d]) && !g(n) && ((s = n[l]) && (n[l] = null), T.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ot), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ot), T.event.triggered = void 0, s && (n[l] = s)), e.result
            }
        },
        simulate: function(e, t, n) {
            var i = T.extend(new T.Event, n, {
                type: e,
                isSimulated: !0
            });
            T.event.trigger(i, null, t)
        }
    }), T.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                T.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0)
        }
    }), y.focusin || T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function r(e) {
            T.event.simulate(i, e.target, T.event.fix(e))
        }
        T.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = X.access(e, i);
                t || e.addEventListener(n, r, !0), X.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = X.access(e, i) - 1;
                t ? X.access(e, i, t) : (e.removeEventListener(n, r, !0), X.remove(e, i))
            }
        }
    });
    var Lt = C.location,
        jt = Date.now(),
        Pt = /\?/;
    T.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
    };
    var Ht = /\[\]$/,
        qt = /\r?\n/g,
        Rt = /^(?:submit|button|image|reset|file)$/i,
        Mt = /^(?:input|select|textarea|keygen)/i;

    function Ft(n, e, i, r) {
        var t;
        if (Array.isArray(e)) T.each(e, function(e, t) {
            i || Ht.test(n) ? r(n, t) : Ft(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
        });
        else if (i || "object" !== w(e)) r(n, e);
        else
            for (t in e) Ft(n + "[" + t + "]", e[t], i, r)
    }
    T.param = function(e, t) {
        function n(e, t) {
            var n = _(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        }
        var i, r = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (i in e) Ft(i, e[i], t, n);
        return r.join("&")
    }, T.fn.extend({
        serialize: function() {
            return T.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = T.prop(this, "elements");
                return e ? T.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !T(this).is(":disabled") && Mt.test(this.nodeName) && !Rt.test(e) && (this.checked || !he.test(e))
            }).map(function(e, t) {
                var n = T(this).val();
                return null == n ? null : Array.isArray(n) ? T.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(qt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(qt, "\r\n")
                }
            }).get()
        }
    });
    var Wt = /%20/g,
        Bt = /#.*$/,
        Ut = /([?&])_=[^&]*/,
        $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Kt = /^(?:GET|HEAD)$/,
        zt = /^\/\//,
        Qt = {},
        Vt = {},
        Yt = "*/".concat("*"),
        Xt = x.createElement("a");

    function Gt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                r = e.toLowerCase().match(H) || [];
            if (_(t))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Jt(t, r, o, s) {
        var a = {},
            l = t === Vt;

        function u(e) {
            var i;
            return a[e] = !0, T.each(t[e] || [], function(e, t) {
                var n = t(r, o, s);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), u(n), !1)
            }), i
        }
        return u(r.dataTypes[0]) || !a["*"] && u("*")
    }

    function Zt(e, t) {
        var n, i, r = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i = i || {})[n] = t[n]);
        return i && T.extend(!0, e, i), e
    }
    Xt.href = Lt.href, T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Lt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Lt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Yt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": T.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Zt(Zt(e, T.ajaxSettings), t) : Zt(T.ajaxSettings, e)
        },
        ajaxPrefilter: Gt(Qt),
        ajaxTransport: Gt(Vt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, h, n, d, i, p, g, r, o, m = T.ajaxSetup({}, t),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? T(v) : T.event,
                _ = T.Deferred(),
                b = T.Callbacks("once memory"),
                w = m.statusCode || {},
                s = {},
                a = {},
                l = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!n)
                                for (n = {}; t = $t.exec(h);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return p ? h : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (p) E.always(e[E.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return c && c.abort(t), u(0, t), this
                    }
                };
            if (_.promise(E), m.url = ((e || m.url || Lt.href) + "").replace(zt, Lt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(H) || [""], null == m.crossDomain) {
                i = x.createElement("a");
                try {
                    i.href = m.url, i.href = i.href, m.crossDomain = Xt.protocol + "//" + Xt.host != i.protocol + "//" + i.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = T.param(m.data, m.traditional)), Jt(Qt, m, t, E), p) return E;
            for (r in (g = T.event && m.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Kt.test(m.type), f = m.url.replace(Bt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Wt, "+")) : (o = m.url.slice(f.length), m.data && (m.processData || "string" == typeof m.data) && (f += (Pt.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (f = f.replace(Ut, "$1"), o = (Pt.test(f) ? "&" : "?") + "_=" + jt++ + o), m.url = f + o), m.ifModified && (T.lastModified[f] && E.setRequestHeader("If-Modified-Since", T.lastModified[f]), T.etag[f] && E.setRequestHeader("If-None-Match", T.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && E.setRequestHeader("Content-Type", m.contentType), E.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : m.accepts["*"]), m.headers) E.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, E, m) || p)) return E.abort();
            if (l = "abort", b.add(m.complete), E.done(m.success), E.fail(m.error), c = Jt(Vt, m, t, E)) {
                if (E.readyState = 1, g && y.trigger("ajaxSend", [E, m]), p) return E;
                m.async && 0 < m.timeout && (d = C.setTimeout(function() {
                    E.abort("timeout")
                }, m.timeout));
                try {
                    p = !1, c.send(s, u)
                } catch (e) {
                    if (p) throw e;
                    u(-1, e)
                }
            } else u(-1, "No Transport");

            function u(e, t, n, i) {
                var r, o, s, a, l, u = t;
                p || (p = !0, d && C.clearTimeout(d), c = void 0, h = i || "", E.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s = s || r
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(m, E, n)), a = function(e, t, n, i) {
                    var r, o, s, a, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o]))
                            for (r in u)
                                if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, a, E, r), r ? (m.ifModified && ((l = E.getResponseHeader("Last-Modified")) && (T.lastModified[f] = l), (l = E.getResponseHeader("etag")) && (T.etag[f] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state, o = a.data, r = !(s = a.error))) : (s = u, !e && u || (u = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (t || u) + "", r ? _.resolveWith(v, [o, u, E]) : _.rejectWith(v, [E, u, s]), E.statusCode(w), w = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [E, m, r ? o : s]), b.fireWith(v, [E, u]), g && (y.trigger("ajaxComplete", [E, m]), --T.active || T.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return T.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return T.get(e, void 0, t, "script")
        }
    }), T.each(["get", "post"], function(e, r) {
        T[r] = function(e, t, n, i) {
            return _(t) && (i = i || n, n = t, t = void 0), T.ajax(T.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, T.isPlainObject(e) && e))
        }
    }), T._evalUrl = function(e, t) {
        return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                T.globalEval(e, t)
            }
        })
    }, T.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (_(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return _(n) ? this.each(function(e) {
                T(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = T(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = _(t);
            return this.each(function(e) {
                T(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                T(this).replaceWith(this.childNodes)
            }), this
        }
    }), T.expr.pseudos.hidden = function(e) {
        return !T.expr.pseudos.visible(e)
    }, T.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, T.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var en = {
            0: 200,
            1223: 204
        },
        tn = T.ajaxSettings.xhr();
    y.cors = !!tn && "withCredentials" in tn, y.ajax = tn = !!tn, T.ajaxTransport(function(r) {
        var o, s;
        if (y.cors || tn && !r.crossDomain) return {
            send: function(e, t) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(en[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = o(), s = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                    4 === i.readyState && C.setTimeout(function() {
                        o && s()
                    })
                }, o = o("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), T.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), T.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return T.globalEval(e), e
            }
        }
    }), T.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), T.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                i = T("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", r = function(e) {
                    i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), x.head.appendChild(i[0])
            },
            abort: function() {
                r && r()
            }
        }
    });
    var nn, rn = [],
        on = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = rn.pop() || T.expando + "_" + jt++;
            return this[e] = !0, e
        }
    }), T.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, s = !1 !== e.jsonp && (on.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = _(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(on, "$1" + i) : !1 !== e.jsonp && (e.url += (Pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return o || T.error(i + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = C[i], C[i] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === r ? T(C).removeProp(i) : C[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, rn.push(i)), o && _(r) && r(o[0]), o = r = void 0
        }), "script"
    }), y.createHTMLDocument = ((nn = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === nn.childNodes.length), T.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((i = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href, t.head.appendChild(i)) : t = x), o = !n && [], (r = N.exec(e)) ? [t.createElement(r[1])] : (r = we([e], t, o), o && o.length && T(o).remove(), T.merge([], r.childNodes)));
        var i, r, o
    }, T.fn.load = function(e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return -1 < a && (i = At(e.slice(a)), e = e.slice(0, a)), _(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && T.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        T.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), T.expr.pseudos.animated = function(t) {
        return T.grep(T.timers, function(e) {
            return t === e.elem
        }).length
    }, T.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u = T.css(e, "position"),
                c = T(e),
                f = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), o = T.css(e, "top"), l = T.css(e, "left"), r = ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (s = (i = c.position()).top, i.left) : (s = parseFloat(o) || 0, parseFloat(l) || 0), _(t) && (t = t.call(e, n, T.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, T.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                T.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === T.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = T(e).offset()).top += T.css(e, "borderTopWidth", !0), r.left += T.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - T.css(i, "marginTop", !0),
                    left: t.left - r.left - T.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
                return e || re
            })
        }
    }), T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = "pageYOffset" === r;
        T.fn[t] = function(e) {
            return U(this, function(e, t, n) {
                var i;
                if (g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), T.each(["top", "left"], function(e, n) {
        T.cssHooks[n] = Ge(y.pixelPosition, function(e, t) {
            if (t) return t = Xe(e, n), Qe.test(t) ? T(e).position()[n] + "px" : t
        })
    }), T.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        T.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, o) {
            T.fn[o] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                return U(this, function(e, t, n) {
                    var i;
                    return g(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? T.css(e, t, r) : T.style(e, t, n, r)
                }, a, n ? e : void 0, n)
            }
        })
    }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        T.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), T.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), T.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), T.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), _(e)) return i = a.call(arguments, 2), (r = function() {
            return e.apply(t || this, i.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || T.guid++, r
    }, T.holdReady = function(e) {
        e ? T.readyWait++ : T.ready(!0)
    }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = D, T.isFunction = _, T.isWindow = g, T.camelCase = Q, T.type = w, T.now = Date.now, T.isNumeric = function(e) {
        var t = T.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return T
    });
    var sn = C.jQuery,
        an = C.$;
    return T.noConflict = function(e) {
        return C.$ === T && (C.$ = an), e && C.jQuery === T && (C.jQuery = sn), T
    }, e || (C.jQuery = C.$ = T), T
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";

    function o(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function b(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function p(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function g(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = b(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : g(p(e))
    }

    function m(e) {
        return 11 === e ? $ : 10 === e ? K : $ || K
    }

    function _(e) {
        if (!e) return document.documentElement;
        for (var t = m(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === b(n, "position") ? _(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function l(e) {
        return null === e.parentNode ? e : l(e.parentNode)
    }

    function v(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s = o.commonAncestorContainer;
        if (e !== s && t !== s || i.contains(r)) return function(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || _(e.firstElementChild) === e)
        }(s) ? s : _(s);
        var a = l(e);
        return a.host ? v(a.host, t) : v(e, l(t).host)
    }

    function y(e, t) {
        var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
            i = e.nodeName;
        if ("BODY" !== i && "HTML" !== i) return e[n];
        var r = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || r)[n]
    }

    function f(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function r(e, t, n, i) {
        return q(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], m(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function w(e) {
        var t = e.body,
            n = e.documentElement,
            i = m(10) && getComputedStyle(n);
        return {
            height: r("Height", t, n, i),
            width: r("Width", t, n, i)
        }
    }

    function E(e) {
        return Q({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function C(e) {
        var t = {};
        try {
            if (m(10)) {
                t = e.getBoundingClientRect();
                var n = y(e, "top"),
                    i = y(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            o = "HTML" === e.nodeName ? w(e.ownerDocument) : {},
            s = o.width || e.clientWidth || r.right - r.left,
            a = o.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            u = e.offsetHeight - a;
        if (l || u) {
            var c = b(e);
            l -= f(c, "x"), u -= f(c, "y"), r.width -= l, r.height -= u
        }
        return E(r)
    }

    function x(e, t, n) {
        var i = 2 < arguments.length && void 0 !== n && n,
            r = m(10),
            o = "HTML" === t.nodeName,
            s = C(e),
            a = C(t),
            l = g(e),
            u = b(t),
            c = parseFloat(u.borderTopWidth, 10),
            f = parseFloat(u.borderLeftWidth, 10);
        i && o && (a.top = q(a.top, 0), a.left = q(a.left, 0));
        var h = E({
            top: s.top - a.top - c,
            left: s.left - a.left - f,
            width: s.width,
            height: s.height
        });
        if (h.marginTop = 0, h.marginLeft = 0, !r && o) {
            var d = parseFloat(u.marginTop, 10),
                p = parseFloat(u.marginLeft, 10);
            h.top -= c - d, h.bottom -= c - d, h.left -= f - p, h.right -= f - p, h.marginTop = d, h.marginLeft = p
        }
        return (r && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (h = function(e, t, n) {
            var i = 2 < arguments.length && void 0 !== n && n,
                r = y(t, "top"),
                o = y(t, "left"),
                s = i ? -1 : 1;
            return e.top += r * s, e.bottom += r * s, e.left += o * s, e.right += o * s, e
        }(h, t)), h
    }

    function T(e) {
        if (!e || !e.parentElement || m()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === b(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function S(e, t, n, i, r) {
        var o = 4 < arguments.length && void 0 !== r && r,
            s = {
                top: 0,
                left: 0
            },
            a = o ? T(e) : v(e, t);
        if ("viewport" === i) s = function(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t,
                i = e.ownerDocument.documentElement,
                r = x(e, i),
                o = q(i.clientWidth, window.innerWidth || 0),
                s = q(i.clientHeight, window.innerHeight || 0),
                a = n ? 0 : y(i),
                l = n ? 0 : y(i, "left");
            return E({
                top: a - r.top + r.marginTop,
                left: l - r.left + r.marginLeft,
                width: o,
                height: s
            })
        }(a, o);
        else {
            var l;
            "scrollParent" === i ? "BODY" === (l = g(p(t))).nodeName && (l = e.ownerDocument.documentElement) : l = "window" === i ? e.ownerDocument.documentElement : i;
            var u = x(l, a, o);
            if ("HTML" !== l.nodeName || function e(t) {
                    var n = t.nodeName;
                    if ("BODY" === n || "HTML" === n) return !1;
                    if ("fixed" === b(t, "position")) return !0;
                    var i = p(t);
                    return !!i && e(i)
                }(a)) s = u;
            else {
                var c = w(e.ownerDocument),
                    f = c.height,
                    h = c.width;
                s.top += u.top - u.marginTop, s.bottom = f + u.top, s.left += u.left - u.marginLeft, s.right = h + u.left
            }
        }
        var d = "number" == typeof(n = n || 0);
        return s.left += d ? n : n.left || 0, s.top += d ? n : n.top || 0, s.right -= d ? n : n.right || 0, s.bottom -= d ? n : n.bottom || 0, s
    }

    function a(e, t, i, n, r, o) {
        var s = 5 < arguments.length && void 0 !== o ? o : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = S(i, n, s, r),
            l = {
                top: {
                    width: a.width,
                    height: t.top - a.top
                },
                right: {
                    width: a.right - t.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - t.bottom
                },
                left: {
                    width: t.left - a.left,
                    height: a.height
                }
            },
            u = Object.keys(l).map(function(e) {
                return Q({
                    key: e
                }, l[e], {
                    area: function(e) {
                        return e.width * e.height
                    }(l[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            c = u.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= i.clientWidth && n >= i.clientHeight
            }),
            f = 0 < c.length ? c[0].key : u[0].key,
            h = e.split("-")[1];
        return f + (h ? "-" + h : "")
    }

    function u(e, t, n, i) {
        var r = 3 < arguments.length && void 0 !== i ? i : null;
        return x(n, r ? T(t) : v(t, n), r)
    }

    function A(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function D(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function N(e, t, n) {
        n = n.split("-")[0];
        var i = A(e),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            u = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[u] : t[D(a)], r
    }

    function I(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function O(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var i = I(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && o(t) && (n.offsets.popper = E(n.offsets.popper), n.offsets.reference = E(n.offsets.reference), n = t(n, e))
        }), n
    }

    function e(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }

    function k(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function s(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function t(e, t, n, i) {
        n.updateBound = i, s(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = g(e);
        return function e(t, n, i, r) {
            var o = "BODY" === t.nodeName,
                s = o ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, i, {
                passive: !0
            }), o || e(g(s.parentNode), n, i, r), r.push(s)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function n() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function(e, t) {
            return s(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                e.removeEventListener("scroll", t.updateBound)
            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
        }(this.reference, this.state))
    }

    function c(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function h(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && c(i[e]) && (t = "px"), n.style[e] = i[e] + t
        })
    }

    function L(e, t, n) {
        var i = I(e, function(e) {
                return e.name === t
            }),
            r = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!r) {
            var o = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    function i(e, t) {
        var n = 1 < arguments.length && void 0 !== t && t,
            i = X.indexOf(e),
            r = X.slice(i + 1).concat(X.slice(0, i));
        return n ? r.reverse() : r
    }

    function d(e, r, o, t) {
        var s = [0, 0],
            a = -1 !== ["right", "left"].indexOf(t),
            n = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            i = n.indexOf(I(n, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            u = -1 === i ? [n] : [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))];
        return (u = u.map(function(e, t) {
            var n = (1 === t ? !a : a) ? "height" : "width",
                i = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var r, o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        s = +o[1],
                        a = o[2];
                    if (!s) return e;
                    if (0 !== a.indexOf("%")) return "vh" !== a && "vw" !== a ? s : ("vh" === a ? q(document.documentElement.clientHeight, window.innerHeight || 0) : q(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * s;
                    switch (a) {
                        case "%p":
                            r = n;
                            break;
                        case "%":
                        case "%r":
                        default:
                            r = i
                    }
                    return E(r)[t] / 100 * s
                }(e, n, r, o)
            })
        })).forEach(function(n, i) {
            n.forEach(function(e, t) {
                c(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }), s
    }
    for (var j = Math.min, P = Math.floor, H = Math.round, q = Math.max, R = "undefined" != typeof window && "undefined" != typeof document, M = ["Edge", "Trident", "Firefox"], F = 0, W = 0; W < M.length; W += 1)
        if (R && 0 <= navigator.userAgent.indexOf(M[W])) {
            F = 1;
            break
        }
    function B(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var U = R && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, F))
            }
        },
        $ = R && !(!window.MSInputMethodContext || !document.documentMode),
        K = R && /MSIE 10/.test(navigator.userAgent),
        z = function(e, t, n) {
            return t && ne(e.prototype, t), n && ne(e, n), e
        },
        Q = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        V = R && /Firefox/i.test(navigator.userAgent),
        Y = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        X = Y.slice(3),
        G = "flip",
        J = "clockwise",
        Z = "counterclockwise",
        ee = (z(te, [{
            key: "update",
            value: function() {
                return function() {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = u(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = a(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = N(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = O(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                    }
                }.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0, e(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[k("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = t(this.reference, this.options, this.state, this.scheduleUpdate))
                }.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return n.call(this)
            }
        }]), te);

    function te(e, t) {
        var n = this,
            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        (function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        })(this, te), this.scheduleUpdate = function() {
            return requestAnimationFrame(n.update)
        }, this.update = U(this.update.bind(this)), this.options = Q({}, te.Defaults, i), this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
        }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(Q({}, te.Defaults.modifiers, i.modifiers)).forEach(function(e) {
            n.options.modifiers[e] = Q({}, te.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
        }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
            return Q({
                name: e
            }, n.options.modifiers[e])
        }).sort(function(e, t) {
            return e.order - t.order
        }), this.modifiers.forEach(function(e) {
            e.enabled && o(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
        }), this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), this.state.eventsEnabled = r
    }

    function ne(e, t) {
        for (var n, i = 0; i < t.length; i++)(n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
    return ee.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ee.placements = Y, ee.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets,
                            o = r.reference,
                            s = r.popper,
                            a = -1 !== ["bottom", "top"].indexOf(n),
                            l = a ? "left" : "top",
                            u = a ? "width" : "height",
                            c = {
                                start: B({}, l, o[l]),
                                end: B({}, l, o[l] + o[u] - s[u])
                            };
                        e.offsets.popper = Q({}, s, c[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n, i = t.offset,
                        r = e.placement,
                        o = e.offsets,
                        s = o.popper,
                        a = o.reference,
                        l = r.split("-")[0];
                    return n = c(+i) ? [+i, 0] : d(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), e.popper = s, e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, i) {
                    var t = i.boundariesElement || _(e.instance.popper);
                    e.instance.reference === t && (t = _(t));
                    var n = k("transform"),
                        r = e.instance.popper.style,
                        o = r.top,
                        s = r.left,
                        a = r[n];
                    r.top = "", r.left = "", r[n] = "";
                    var l = S(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                    r.top = o, r.left = s, r[n] = a, i.boundaries = l;
                    var u = i.priority,
                        c = e.offsets.popper,
                        f = {
                            primary: function(e) {
                                var t = c[e];
                                return c[e] < l[e] && !i.escapeWithReference && (t = q(c[e], l[e])), B({}, e, t)
                            },
                            secondary: function(e) {
                                var t = "right" === e ? "left" : "top",
                                    n = c[t];
                                return c[e] > l[e] && !i.escapeWithReference && (n = j(c[t], l[e] - ("right" === e ? c.width : c.height))), B({}, t, n)
                            }
                        };
                    return u.forEach(function(e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        c = Q({}, c, f[t](e))
                    }), e.offsets.popper = c, e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        n = t.popper,
                        i = t.reference,
                        r = e.placement.split("-")[0],
                        o = P,
                        s = -1 !== ["top", "bottom"].indexOf(r),
                        a = s ? "right" : "bottom",
                        l = s ? "left" : "top",
                        u = s ? "width" : "height";
                    return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    var n;
                    if (!L(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var i = t.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i))) return e
                    } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var r = e.placement.split("-")[0],
                        o = e.offsets,
                        s = o.popper,
                        a = o.reference,
                        l = -1 !== ["left", "right"].indexOf(r),
                        u = l ? "height" : "width",
                        c = l ? "Top" : "Left",
                        f = c.toLowerCase(),
                        h = l ? "left" : "top",
                        d = l ? "bottom" : "right",
                        p = A(i)[u];
                    a[d] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (e.offsets.popper[f] += a[f] + p - s[d]), e.offsets.popper = E(e.offsets.popper);
                    var g = a[f] + a[u] / 2 - p / 2,
                        m = b(e.instance.popper),
                        v = parseFloat(m["margin" + c], 10),
                        y = parseFloat(m["border" + c + "Width"], 10),
                        _ = g - e.offsets.popper[f] - v - y;
                    return _ = q(j(s[u] - p, _), 0), e.arrowElement = i, e.offsets.arrow = (B(n = {}, f, H(_)), B(n, h, ""), n), e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(d, p) {
                    if (e(d.instance.modifiers, "inner")) return d;
                    if (d.flipped && d.placement === d.originalPlacement) return d;
                    var g = S(d.instance.popper, d.instance.reference, p.padding, p.boundariesElement, d.positionFixed),
                        m = d.placement.split("-")[0],
                        v = D(m),
                        y = d.placement.split("-")[1] || "",
                        _ = [];
                    switch (p.behavior) {
                        case G:
                            _ = [m, v];
                            break;
                        case J:
                            _ = i(m);
                            break;
                        case Z:
                            _ = i(m, !0);
                            break;
                        default:
                            _ = p.behavior
                    }
                    return _.forEach(function(e, t) {
                        if (m !== e || _.length === t + 1) return d;
                        m = d.placement.split("-")[0], v = D(m);
                        var n = d.offsets.popper,
                            i = d.offsets.reference,
                            r = P,
                            o = "left" === m && r(n.right) > r(i.left) || "right" === m && r(n.left) < r(i.right) || "top" === m && r(n.bottom) > r(i.top) || "bottom" === m && r(n.top) < r(i.bottom),
                            s = r(n.left) < r(g.left),
                            a = r(n.right) > r(g.right),
                            l = r(n.top) < r(g.top),
                            u = r(n.bottom) > r(g.bottom),
                            c = "left" === m && s || "right" === m && a || "top" === m && l || "bottom" === m && u,
                            f = -1 !== ["top", "bottom"].indexOf(m),
                            h = !!p.flipVariations && (f && "start" === y && s || f && "end" === y && a || !f && "start" === y && l || !f && "end" === y && u);
                        (o || c || h) && (d.flipped = !0, (o || c) && (m = _[t + 1]), h && (y = function(e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(y)), d.placement = m + (y ? "-" + y : ""), d.offsets.popper = Q({}, d.offsets.popper, N(d.instance.popper, d.offsets.reference, d.placement)), d = O(d.instance.modifiers, d, "flip"))
                    }), d
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = e.offsets,
                        r = i.popper,
                        o = i.reference,
                        s = -1 !== ["left", "right"].indexOf(n),
                        a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = D(t), e.offsets.popper = E(r), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!L(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference,
                        n = I(e.instance.modifiers, function(e) {
                            return "preventOverflow" === e.name
                        }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x,
                        i = t.y,
                        r = e.offsets.popper,
                        o = I(e.instance.modifiers, function(e) {
                            return "applyStyle" === e.name
                        }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, a, l = void 0 === o ? t.gpuAcceleration : o,
                        u = _(e.instance.popper),
                        c = C(u),
                        f = {
                            position: r.position
                        },
                        h = function(e, t) {
                            function n(e) {
                                return e
                            }
                            var i = e.offsets,
                                r = i.popper,
                                o = i.reference,
                                s = H,
                                a = s(o.width),
                                l = s(r.width),
                                u = -1 !== ["left", "right"].indexOf(e.placement),
                                c = -1 !== e.placement.indexOf("-"),
                                f = t ? u || c || a % 2 == l % 2 ? s : P : n,
                                h = t ? s : n;
                            return {
                                left: f(1 == a % 2 && 1 == l % 2 && !c && t ? r.left - 1 : r.left),
                                top: h(r.top),
                                bottom: h(r.bottom),
                                right: f(r.right)
                            }
                        }(e, window.devicePixelRatio < 2 || !V),
                        d = "bottom" === n ? "top" : "bottom",
                        p = "right" === i ? "left" : "right",
                        g = k("transform");
                    if (a = "bottom" == d ? "HTML" === u.nodeName ? -u.clientHeight + h.bottom : -c.height + h.bottom : h.top, s = "right" == p ? "HTML" === u.nodeName ? -u.clientWidth + h.right : -c.width + h.right : h.left, l && g) f[g] = "translate3d(" + s + "px, " + a + "px, 0)", f[d] = 0, f[p] = 0, f.willChange = "transform";
                    else {
                        var m = "bottom" == d ? -1 : 1,
                            v = "right" == p ? -1 : 1;
                        f[d] = a * m, f[p] = s * v, f.willChange = d + ", " + p
                    }
                    var y = {
                        "x-placement": e.placement
                    };
                    return e.attributes = Q({}, y, e.attributes), e.styles = Q({}, f, e.styles), e.arrowStyles = Q({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return h(e.instance.popper, e.styles),
                        function(t, n) {
                            Object.keys(n).forEach(function(e) {
                                !1 === n[e] ? t.removeAttribute(e) : t.setAttribute(e, n[e])
                            })
                        }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && h(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function(e, t, n, i, r) {
                    var o = u(r, t, e, n.positionFixed),
                        s = a(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s), h(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }), n
                },
                gpuAcceleration: void 0
            }
        }
    }, ee
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, p, f) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function o(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function s(r) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {},
                t = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable
            }))), t.forEach(function(e) {
                var t, n, i;
                t = r, i = o[n = e], n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            })
        }
        return r
    }
    p = p && p.hasOwnProperty("default") ? p.default : p, f = f && f.hasOwnProperty("default") ? f.default : f;
    var t = "transitionend";
    var g = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var t = p(e).css("transition-duration"),
                n = p(e).css("transition-delay"),
                i = parseFloat(t),
                r = parseFloat(n);
            return i || r ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            p(e).trigger(t)
        },
        supportsTransitionEnd: function() {
            return Boolean(t)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i],
                        o = t[i],
                        s = o && g.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                }
            var a
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? g.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
    };
    p.fn.emulateTransitionEnd = function(e) {
        var t = this,
            n = !1;
        return p(this).one(g.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || g.triggerTransitionEnd(t)
        }, e), this
    }, p.event.special[g.TRANSITION_END] = {
        bindType: t,
        delegateType: t,
        handle: function(e) {
            if (p(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var n, r = "alert",
        a = "bs.alert",
        l = "." + a,
        u = p.fn[r],
        c = {
            CLOSE: "close" + l,
            CLOSED: "closed" + l,
            CLICK_DATA_API: "click" + l + ".data-api"
        },
        h = ((n = d.prototype).close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }, n.dispose = function() {
            p.removeData(this._element, a), this._element = null
        }, n._getRootElement = function(e) {
            var t = g.getSelectorFromElement(e),
                n = !1;
            return t && (n = document.querySelector(t)), n = n || p(e).closest(".alert")[0]
        }, n._triggerCloseEvent = function(e) {
            var t = p.Event(c.CLOSE);
            return p(e).trigger(t), t
        }, n._removeElement = function(t) {
            var n = this;
            if (p(t).removeClass("show"), p(t).hasClass("fade")) {
                var e = g.getTransitionDurationFromElement(t);
                p(t).one(g.TRANSITION_END, function(e) {
                    return n._destroyElement(t, e)
                }).emulateTransitionEnd(e)
            } else this._destroyElement(t)
        }, n._destroyElement = function(e) {
            p(e).detach().trigger(c.CLOSED).remove()
        }, d._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this),
                    t = e.data(a);
                t || (t = new d(this), e.data(a, t)), "close" === n && t[n](this)
            })
        }, d._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(), t.close(this)
            }
        }, o(d, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]), d);

    function d(e) {
        this._element = e
    }
    p(document).on(c.CLICK_DATA_API, '[data-dismiss="alert"]', h._handleDismiss(new h)), p.fn[r] = h._jQueryInterface, p.fn[r].Constructor = h, p.fn[r].noConflict = function() {
        return p.fn[r] = u, h._jQueryInterface
    };
    var m, v = "button",
        y = "bs.button",
        _ = "." + y,
        b = ".data-api",
        w = p.fn[v],
        E = "active",
        C = '[data-toggle^="button"]',
        x = {
            CLICK_DATA_API: "click" + _ + b,
            FOCUS_BLUR_DATA_API: "focus" + _ + b + " blur" + _ + b
        },
        T = ((m = S.prototype).toggle = function() {
            var e = !0,
                t = !0,
                n = p(this._element).closest('[data-toggle="buttons"]')[0];
            if (n) {
                var i = this._element.querySelector('input:not([type="hidden"])');
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && this._element.classList.contains(E)) e = !1;
                        else {
                            var r = n.querySelector(".active");
                            r && p(r).removeClass(E)
                        }
                    if (e) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                        i.checked = !this._element.classList.contains(E), p(i).trigger("change")
                    }
                    i.focus(), t = !1
                }
            }
            t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(E)), e && p(this._element).toggleClass(E)
        }, m.dispose = function() {
            p.removeData(this._element, y), this._element = null
        }, S._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(y);
                e || (e = new S(this), p(this).data(y, e)), "toggle" === t && e[t]()
            })
        }, o(S, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]), S);

    function S(e) {
        this._element = e
    }
    p(document).on(x.CLICK_DATA_API, C, function(e) {
        e.preventDefault();
        var t = e.target;
        p(t).hasClass("btn") || (t = p(t).closest(".btn")), T._jQueryInterface.call(p(t), "toggle")
    }).on(x.FOCUS_BLUR_DATA_API, C, function(e) {
        var t = p(e.target).closest(".btn")[0];
        p(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), p.fn[v] = T._jQueryInterface, p.fn[v].Constructor = T, p.fn[v].noConflict = function() {
        return p.fn[v] = w, T._jQueryInterface
    };
    var A, D = "carousel",
        N = "bs.carousel",
        I = "." + N,
        O = ".data-api",
        k = p.fn[D],
        L = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        j = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        P = "next",
        H = "prev",
        q = {
            SLIDE: "slide" + I,
            SLID: "slid" + I,
            KEYDOWN: "keydown" + I,
            MOUSEENTER: "mouseenter" + I,
            MOUSELEAVE: "mouseleave" + I,
            TOUCHSTART: "touchstart" + I,
            TOUCHMOVE: "touchmove" + I,
            TOUCHEND: "touchend" + I,
            POINTERDOWN: "pointerdown" + I,
            POINTERUP: "pointerup" + I,
            DRAG_START: "dragstart" + I,
            LOAD_DATA_API: "load" + I + O,
            CLICK_DATA_API: "click" + I + O
        },
        R = "active",
        M = ".active.carousel-item",
        F = {
            TOUCH: "touch",
            PEN: "pen"
        },
        W = ((A = B.prototype).next = function() {
            this._isSliding || this._slide(P)
        }, A.nextWhenVisible = function() {
            !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next()
        }, A.prev = function() {
            this._isSliding || this._slide(H)
        }, A.pause = function(e) {
            e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (g.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }, A.cycle = function(e) {
            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }, A.to = function(e) {
            var t = this;
            this._activeElement = this._element.querySelector(M);
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding) p(this._element).one(q.SLID, function() {
                    return t.to(e)
                });
                else {
                    if (n === e) return this.pause(), void this.cycle();
                    var i = n < e ? P : H;
                    this._slide(i, this._items[e])
                }
        }, A.dispose = function() {
            p(this._element).off(I), p.removeData(this._element, N), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        }, A._getConfig = function(e) {
            return e = s({}, L, e), g.typeCheckConfig(D, e, j), e
        }, A._handleSwipe = function() {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
                var t = e / this.touchDeltaX;
                0 < t && this.prev(), t < 0 && this.next()
            }
        }, A._addEventListeners = function() {
            var t = this;
            this._config.keyboard && p(this._element).on(q.KEYDOWN, function(e) {
                return t._keydown(e)
            }), "hover" === this._config.pause && p(this._element).on(q.MOUSEENTER, function(e) {
                return t.pause(e)
            }).on(q.MOUSELEAVE, function(e) {
                return t.cycle(e)
            }), this._config.touch && this._addTouchEventListeners()
        }, A._addTouchEventListeners = function() {
            var n = this;
            if (this._touchSupported) {
                var t = function(e) {
                        n._pointerEvent && F[e.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = e.originalEvent.clientX : n._pointerEvent || (n.touchStartX = e.originalEvent.touches[0].clientX)
                    },
                    i = function(e) {
                        n._pointerEvent && F[e.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = e.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(e) {
                            return n.cycle(e)
                        }, 500 + n._config.interval))
                    };
                p(this._element.querySelectorAll(".carousel-item img")).on(q.DRAG_START, function(e) {
                    return e.preventDefault()
                }), this._pointerEvent ? (p(this._element).on(q.POINTERDOWN, function(e) {
                    return t(e)
                }), p(this._element).on(q.POINTERUP, function(e) {
                    return i(e)
                }), this._element.classList.add("pointer-event")) : (p(this._element).on(q.TOUCHSTART, function(e) {
                    return t(e)
                }), p(this._element).on(q.TOUCHMOVE, function(e) {
                    var t;
                    (t = e).originalEvent.touches && 1 < t.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = t.originalEvent.touches[0].clientX - n.touchStartX
                }), p(this._element).on(q.TOUCHEND, function(e) {
                    return i(e)
                }))
            }
        }, A._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                case 37:
                    e.preventDefault(), this.prev();
                    break;
                case 39:
                    e.preventDefault(), this.next()
            }
        }, A._getItemIndex = function(e) {
            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
        }, A._getItemByDirection = function(e, t) {
            var n = e === P,
                i = e === H,
                r = this._getItemIndex(t),
                o = this._items.length - 1;
            if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
            var s = (r + (e === H ? -1 : 1)) % this._items.length;
            return -1 == s ? this._items[this._items.length - 1] : this._items[s]
        }, A._triggerSlideEvent = function(e, t) {
            var n = this._getItemIndex(e),
                i = this._getItemIndex(this._element.querySelector(M)),
                r = p.Event(q.SLIDE, {
                    relatedTarget: e,
                    direction: t,
                    from: i,
                    to: n
                });
            return p(this._element).trigger(r), r
        }, A._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                p(t).removeClass(R);
                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                n && p(n).addClass(R)
            }
        }, A._slide = function(e, t) {
            var n, i, r, o = this,
                s = this._element.querySelector(M),
                a = this._getItemIndex(s),
                l = t || s && this._getItemByDirection(e, s),
                u = this._getItemIndex(l),
                c = Boolean(this._interval);
            if (r = e === P ? (n = "carousel-item-left", i = "carousel-item-next", "left") : (n = "carousel-item-right", i = "carousel-item-prev", "right"), l && p(l).hasClass(R)) this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
                var f = p.Event(q.SLID, {
                    relatedTarget: l,
                    direction: r,
                    from: a,
                    to: u
                });
                if (p(this._element).hasClass("slide")) {
                    p(l).addClass(i), g.reflow(l), p(s).addClass(n), p(l).addClass(n);
                    var h = parseInt(l.getAttribute("data-interval"), 10);
                    this._config.interval = h ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, h) : this._config.defaultInterval || this._config.interval;
                    var d = g.getTransitionDurationFromElement(s);
                    p(s).one(g.TRANSITION_END, function() {
                        p(l).removeClass(n + " " + i).addClass(R), p(s).removeClass(R + " " + i + " " + n), o._isSliding = !1, setTimeout(function() {
                            return p(o._element).trigger(f)
                        }, 0)
                    }).emulateTransitionEnd(d)
                } else p(s).removeClass(R), p(l).addClass(R), this._isSliding = !1, p(this._element).trigger(f);
                c && this.cycle()
            }
        }, B._jQueryInterface = function(i) {
            return this.each(function() {
                var e = p(this).data(N),
                    t = s({}, L, p(this).data());
                "object" == typeof i && (t = s({}, t, i));
                var n = "string" == typeof i ? i : t.slide;
                if (e || (e = new B(this, t), p(this).data(N, e)), "number" == typeof i) e.to(i);
                else if ("string" == typeof n) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]()
                } else t.interval && t.ride && (e.pause(), e.cycle())
            })
        }, B._dataApiClickHandler = function(e) {
            var t = g.getSelectorFromElement(this);
            if (t) {
                var n = p(t)[0];
                if (n && p(n).hasClass("carousel")) {
                    var i = s({}, p(n).data(), p(this).data()),
                        r = this.getAttribute("data-slide-to");
                    r && (i.interval = !1), B._jQueryInterface.call(p(n), i), r && p(n).data(N).to(r), e.preventDefault()
                }
            }
        }, o(B, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return L
            }
        }]), B);

    function B(e, t) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
    }
    p(document).on(q.CLICK_DATA_API, "[data-slide], [data-slide-to]", W._dataApiClickHandler), p(window).on(q.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
            var i = p(e[t]);
            W._jQueryInterface.call(i, i.data())
        }
    }), p.fn[D] = W._jQueryInterface, p.fn[D].Constructor = W, p.fn[D].noConflict = function() {
        return p.fn[D] = k, W._jQueryInterface
    };
    var U, $ = "collapse",
        K = "bs.collapse",
        z = "." + K,
        Q = p.fn[$],
        V = {
            toggle: !0,
            parent: ""
        },
        Y = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        X = {
            SHOW: "show" + z,
            SHOWN: "shown" + z,
            HIDE: "hide" + z,
            HIDDEN: "hidden" + z,
            CLICK_DATA_API: "click" + z + ".data-api"
        },
        G = "show",
        J = "collapse",
        Z = "collapsing",
        ee = "collapsed",
        te = '[data-toggle="collapse"]',
        ne = ((U = ie.prototype).toggle = function() {
            p(this._element).hasClass(G) ? this.hide() : this.show()
        }, U.show = function() {
            var e, t, n = this;
            if (!(this._isTransitioning || p(this._element).hasClass(G) || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                    return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains(J)
                })).length && (e = null), e && (t = p(e).not(this._selector).data(K)) && t._isTransitioning))) {
                var i = p.Event(X.SHOW);
                if (p(this._element).trigger(i), !i.isDefaultPrevented()) {
                    e && (ie._jQueryInterface.call(p(e).not(this._selector), "hide"), t || p(e).data(K, null));
                    var r = this._getDimension();
                    p(this._element).removeClass(J).addClass(Z), this._element.style[r] = 0, this._triggerArray.length && p(this._triggerArray).removeClass(ee).attr("aria-expanded", !0), this.setTransitioning(!0);
                    var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                        s = g.getTransitionDurationFromElement(this._element);
                    p(this._element).one(g.TRANSITION_END, function() {
                        p(n._element).removeClass(Z).addClass(J).addClass(G), n._element.style[r] = "", n.setTransitioning(!1), p(n._element).trigger(X.SHOWN)
                    }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px"
                }
            }
        }, U.hide = function() {
            var e = this;
            if (!this._isTransitioning && p(this._element).hasClass(G)) {
                var t = p.Event(X.HIDE);
                if (p(this._element).trigger(t), !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", g.reflow(this._element), p(this._element).addClass(Z).removeClass(J).removeClass(G);
                    var i = this._triggerArray.length;
                    if (0 < i)
                        for (var r = 0; r < i; r++) {
                            var o = this._triggerArray[r],
                                s = g.getSelectorFromElement(o);
                            null !== s && (p([].slice.call(document.querySelectorAll(s))).hasClass(G) || p(o).addClass(ee).attr("aria-expanded", !1))
                        }
                    this.setTransitioning(!0), this._element.style[n] = "";
                    var a = g.getTransitionDurationFromElement(this._element);
                    p(this._element).one(g.TRANSITION_END, function() {
                        e.setTransitioning(!1), p(e._element).removeClass(Z).addClass(J).trigger(X.HIDDEN)
                    }).emulateTransitionEnd(a)
                }
            }
        }, U.setTransitioning = function(e) {
            this._isTransitioning = e
        }, U.dispose = function() {
            p.removeData(this._element, K), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
        }, U._getConfig = function(e) {
            return (e = s({}, V, e)).toggle = Boolean(e.toggle), g.typeCheckConfig($, e, Y), e
        }, U._getDimension = function() {
            return p(this._element).hasClass("width") ? "width" : "height"
        }, U._getParent = function() {
            var e, n = this;
            g.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
            var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                i = [].slice.call(e.querySelectorAll(t));
            return p(i).each(function(e, t) {
                n._addAriaAndCollapsedClass(ie._getTargetFromElement(t), [t])
            }), e
        }, U._addAriaAndCollapsedClass = function(e, t) {
            var n = p(e).hasClass(G);
            t.length && p(t).toggleClass(ee, !n).attr("aria-expanded", n)
        }, ie._getTargetFromElement = function(e) {
            var t = g.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null
        }, ie._jQueryInterface = function(i) {
            return this.each(function() {
                var e = p(this),
                    t = e.data(K),
                    n = s({}, V, e.data(), "object" == typeof i && i ? i : {});
                if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new ie(this, n), e.data(K, t)), "string" == typeof i) {
                    if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                    t[i]()
                }
            })
        }, o(ie, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return V
            }
        }]), ie);

    function ie(t, e) {
        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
        for (var n = [].slice.call(document.querySelectorAll(te)), i = 0, r = n.length; i < r; i++) {
            var o = n[i],
                s = g.getSelectorFromElement(o),
                a = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                    return e === t
                });
            null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o))
        }
        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
    }
    p(document).on(X.CLICK_DATA_API, te, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = p(this),
            t = g.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(t));
        p(i).each(function() {
            var e = p(this),
                t = e.data(K) ? "toggle" : n.data();
            ne._jQueryInterface.call(e, t)
        })
    }), p.fn[$] = ne._jQueryInterface, p.fn[$].Constructor = ne, p.fn[$].noConflict = function() {
        return p.fn[$] = Q, ne._jQueryInterface
    };
    var re, oe = "dropdown",
        se = "bs.dropdown",
        ae = "." + se,
        le = ".data-api",
        ue = p.fn[oe],
        ce = new RegExp("38|40|27"),
        fe = {
            HIDE: "hide" + ae,
            HIDDEN: "hidden" + ae,
            SHOW: "show" + ae,
            SHOWN: "shown" + ae,
            CLICK: "click" + ae,
            CLICK_DATA_API: "click" + ae + le,
            KEYDOWN_DATA_API: "keydown" + ae + le,
            KEYUP_DATA_API: "keyup" + ae + le
        },
        he = "disabled",
        de = "show",
        pe = "dropdown-menu-right",
        ge = '[data-toggle="dropdown"]',
        me = ".dropdown-menu",
        ve = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        ye = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        _e = ((re = be.prototype).toggle = function() {
            if (!this._element.disabled && !p(this._element).hasClass(he)) {
                var e = be._getParentFromElement(this._element),
                    t = p(this._menu).hasClass(de);
                if (be._clearMenus(), !t) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = p.Event(fe.SHOW, n);
                    if (p(e).trigger(i), !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if (void 0 === f) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var r = this._element;
                            "parent" === this._config.reference ? r = e : g.isElement(this._config.reference) && (r = this._config.reference, void 0 !== this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(e).addClass("position-static"), this._popper = new f(r, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === p(e).closest(".navbar-nav").length && p(document.body).children().on("mouseover", null, p.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), p(this._menu).toggleClass(de), p(e).toggleClass(de).trigger(p.Event(fe.SHOWN, n))
                    }
                }
            }
        }, re.show = function() {
            if (!(this._element.disabled || p(this._element).hasClass(he) || p(this._menu).hasClass(de))) {
                var e = {
                        relatedTarget: this._element
                    },
                    t = p.Event(fe.SHOW, e),
                    n = be._getParentFromElement(this._element);
                p(n).trigger(t), t.isDefaultPrevented() || (p(this._menu).toggleClass(de), p(n).toggleClass(de).trigger(p.Event(fe.SHOWN, e)))
            }
        }, re.hide = function() {
            if (!this._element.disabled && !p(this._element).hasClass(he) && p(this._menu).hasClass(de)) {
                var e = {
                        relatedTarget: this._element
                    },
                    t = p.Event(fe.HIDE, e),
                    n = be._getParentFromElement(this._element);
                p(n).trigger(t), t.isDefaultPrevented() || (p(this._menu).toggleClass(de), p(n).toggleClass(de).trigger(p.Event(fe.HIDDEN, e)))
            }
        }, re.dispose = function() {
            p.removeData(this._element, se), p(this._element).off(ae), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
        }, re.update = function() {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
        }, re._addEventListeners = function() {
            var t = this;
            p(this._element).on(fe.CLICK, function(e) {
                e.preventDefault(), e.stopPropagation(), t.toggle()
            })
        }, re._getConfig = function(e) {
            return e = s({}, this.constructor.Default, p(this._element).data(), e), g.typeCheckConfig(oe, e, this.constructor.DefaultType), e
        }, re._getMenuElement = function() {
            if (!this._menu) {
                var e = be._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(me))
            }
            return this._menu
        }, re._getPlacement = function() {
            var e = p(this._element.parentNode),
                t = "bottom-start";
            return e.hasClass("dropup") ? (t = "top-start", p(this._menu).hasClass(pe) && (t = "top-end")) : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : p(this._menu).hasClass(pe) && (t = "bottom-end"), t
        }, re._detectNavbar = function() {
            return 0 < p(this._element).closest(".navbar").length
        }, re._getOffset = function() {
            var t = this,
                e = {};
            return "function" == typeof this._config.offset ? e.fn = function(e) {
                return e.offsets = s({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e
            } : e.offset = this._config.offset, e
        }, re._getPopperConfig = function() {
            var e = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (e.modifiers.applyStyle = {
                enabled: !1
            }), e
        }, be._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(se);
                if (e || (e = new be(this, "object" == typeof t ? t : null), p(this).data(se, e)), "string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }, be._clearMenus = function(e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                for (var t = [].slice.call(document.querySelectorAll(ge)), n = 0, i = t.length; n < i; n++) {
                    var r = be._getParentFromElement(t[n]),
                        o = p(t[n]).data(se),
                        s = {
                            relatedTarget: t[n]
                        };
                    if (e && "click" === e.type && (s.clickEvent = e), o) {
                        var a = o._menu;
                        if (p(r).hasClass(de) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && p.contains(r, e.target))) {
                            var l = p.Event(fe.HIDE, s);
                            p(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), t[n].setAttribute("aria-expanded", "false"), p(a).removeClass(de), p(r).removeClass(de).trigger(p.Event(fe.HIDDEN, s)))
                        }
                    }
                }
        }, be._getParentFromElement = function(e) {
            var t, n = g.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)), t || e.parentNode
        }, be._dataApiKeydownHandler = function(e) {
            if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || p(e.target).closest(me).length)) : ce.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !p(this).hasClass(he))) {
                var t = be._getParentFromElement(this),
                    n = p(t).hasClass(de);
                if (n && (!n || 27 !== e.which && 32 !== e.which)) {
                    var i = [].slice.call(t.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
                    if (0 !== i.length) {
                        var r = i.indexOf(e.target);
                        38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                    }
                } else {
                    if (27 === e.which) {
                        var o = t.querySelector(ge);
                        p(o).trigger("focus")
                    }
                    p(this).trigger("click")
                }
            }
        }, o(be, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ve
            }
        }, {
            key: "DefaultType",
            get: function() {
                return ye
            }
        }]), be);

    function be(e, t) {
        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
    }
    p(document).on(fe.KEYDOWN_DATA_API, ge, _e._dataApiKeydownHandler).on(fe.KEYDOWN_DATA_API, me, _e._dataApiKeydownHandler).on(fe.CLICK_DATA_API + " " + fe.KEYUP_DATA_API, _e._clearMenus).on(fe.CLICK_DATA_API, ge, function(e) {
        e.preventDefault(), e.stopPropagation(), _e._jQueryInterface.call(p(this), "toggle")
    }).on(fe.CLICK_DATA_API, ".dropdown form", function(e) {
        e.stopPropagation()
    }), p.fn[oe] = _e._jQueryInterface, p.fn[oe].Constructor = _e, p.fn[oe].noConflict = function() {
        return p.fn[oe] = ue, _e._jQueryInterface
    };
    var we, Ee = "modal",
        Ce = "bs.modal",
        xe = "." + Ce,
        Te = p.fn[Ee],
        Se = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        Ae = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        De = {
            HIDE: "hide" + xe,
            HIDDEN: "hidden" + xe,
            SHOW: "show" + xe,
            SHOWN: "shown" + xe,
            FOCUSIN: "focusin" + xe,
            RESIZE: "resize" + xe,
            CLICK_DISMISS: "click.dismiss" + xe,
            KEYDOWN_DISMISS: "keydown.dismiss" + xe,
            MOUSEUP_DISMISS: "mouseup.dismiss" + xe,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + xe,
            CLICK_DATA_API: "click" + xe + ".data-api"
        },
        Ne = "modal-open",
        Ie = "fade",
        Oe = "show",
        ke = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Le = ".sticky-top",
        je = ((we = Pe.prototype).toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }, we.show = function(e) {
            var t = this;
            if (!this._isShown && !this._isTransitioning) {
                p(this._element).hasClass(Ie) && (this._isTransitioning = !0);
                var n = p.Event(De.SHOW, {
                    relatedTarget: e
                });
                p(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p(this._element).on(De.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) {
                    return t.hide(e)
                }), p(this._dialog).on(De.MOUSEDOWN_DISMISS, function() {
                    p(t._element).one(De.MOUSEUP_DISMISS, function(e) {
                        p(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    })
                }), this._showBackdrop(function() {
                    return t._showElement(e)
                }))
            }
        }, we.hide = function(e) {
            var t = this;
            if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                var n = p.Event(De.HIDE);
                if (p(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = p(this._element).hasClass(Ie);
                    if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), p(document).off(De.FOCUSIN), p(this._element).removeClass(Oe), p(this._element).off(De.CLICK_DISMISS), p(this._dialog).off(De.MOUSEDOWN_DISMISS), i) {
                        var r = g.getTransitionDurationFromElement(this._element);
                        p(this._element).one(g.TRANSITION_END, function(e) {
                            return t._hideModal(e)
                        }).emulateTransitionEnd(r)
                    } else this._hideModal()
                }
            }
        }, we.dispose = function() {
            [window, this._element, this._dialog].forEach(function(e) {
                return p(e).off(xe)
            }), p(document).off(De.FOCUSIN), p.removeData(this._element, Ce), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
        }, we.handleUpdate = function() {
            this._adjustDialog()
        }, we._getConfig = function(e) {
            return e = s({}, Se, e), g.typeCheckConfig(Ee, e, Ae), e
        }, we._showElement = function(e) {
            var t = this,
                n = p(this._element).hasClass(Ie);

            function i() {
                t._config.focus && t._element.focus(), t._isTransitioning = !1, p(t._element).trigger(r)
            }
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), p(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0, n && g.reflow(this._element), p(this._element).addClass(Oe), this._config.focus && this._enforceFocus();
            var r = p.Event(De.SHOWN, {
                relatedTarget: e
            });
            if (n) {
                var o = g.getTransitionDurationFromElement(this._dialog);
                p(this._dialog).one(g.TRANSITION_END, i).emulateTransitionEnd(o)
            } else i()
        }, we._enforceFocus = function() {
            var t = this;
            p(document).off(De.FOCUSIN).on(De.FOCUSIN, function(e) {
                document !== e.target && t._element !== e.target && 0 === p(t._element).has(e.target).length && t._element.focus()
            })
        }, we._setEscapeEvent = function() {
            var t = this;
            this._isShown && this._config.keyboard ? p(this._element).on(De.KEYDOWN_DISMISS, function(e) {
                27 === e.which && (e.preventDefault(), t.hide())
            }) : this._isShown || p(this._element).off(De.KEYDOWN_DISMISS)
        }, we._setResizeEvent = function() {
            var t = this;
            this._isShown ? p(window).on(De.RESIZE, function(e) {
                return t.handleUpdate(e)
            }) : p(window).off(De.RESIZE)
        }, we._hideModal = function() {
            var e = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                p(document.body).removeClass(Ne), e._resetAdjustments(), e._resetScrollbar(), p(e._element).trigger(De.HIDDEN)
            })
        }, we._removeBackdrop = function() {
            this._backdrop && (p(this._backdrop).remove(), this._backdrop = null)
        }, we._showBackdrop = function(e) {
            var t = this,
                n = p(this._element).hasClass(Ie) ? Ie : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), p(this._backdrop).appendTo(document.body), p(this._element).on(De.CLICK_DISMISS, function(e) {
                        t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                    }), n && g.reflow(this._backdrop), p(this._backdrop).addClass(Oe), !e) return;
                if (!n) return void e();
                var i = g.getTransitionDurationFromElement(this._backdrop);
                p(this._backdrop).one(g.TRANSITION_END, e).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                p(this._backdrop).removeClass(Oe);
                var r = function() {
                    t._removeBackdrop(), e && e()
                };
                if (p(this._element).hasClass(Ie)) {
                    var o = g.getTransitionDurationFromElement(this._backdrop);
                    p(this._backdrop).one(g.TRANSITION_END, r).emulateTransitionEnd(o)
                } else r()
            } else e && e()
        }, we._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }, we._resetAdjustments = function() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }, we._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
        }, we._setScrollbar = function() {
            var r = this;
            if (this._isBodyOverflowing) {
                var e = [].slice.call(document.querySelectorAll(ke)),
                    t = [].slice.call(document.querySelectorAll(Le));
                p(e).each(function(e, t) {
                    var n = t.style.paddingRight,
                        i = p(t).css("padding-right");
                    p(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                }), p(t).each(function(e, t) {
                    var n = t.style.marginRight,
                        i = p(t).css("margin-right");
                    p(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                });
                var n = document.body.style.paddingRight,
                    i = p(document.body).css("padding-right");
                p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
            p(document.body).addClass(Ne)
        }, we._resetScrollbar = function() {
            var e = [].slice.call(document.querySelectorAll(ke));
            p(e).each(function(e, t) {
                var n = p(t).data("padding-right");
                p(t).removeData("padding-right"), t.style.paddingRight = n || ""
            });
            var t = [].slice.call(document.querySelectorAll(Le));
            p(t).each(function(e, t) {
                var n = p(t).data("margin-right");
                void 0 !== n && p(t).css("margin-right", n).removeData("margin-right")
            });
            var n = p(document.body).data("padding-right");
            p(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
        }, we._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure", document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t
        }, Pe._jQueryInterface = function(n, i) {
            return this.each(function() {
                var e = p(this).data(Ce),
                    t = s({}, Se, p(this).data(), "object" == typeof n && n ? n : {});
                if (e || (e = new Pe(this, t), p(this).data(Ce, e)), "string" == typeof n) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n](i)
                } else t.show && e.show(i)
            })
        }, o(Pe, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Se
            }
        }]), Pe);

    function Pe(e, t) {
        this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
    }
    p(document).on(De.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
        var t, n = this,
            i = g.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var r = p(t).data(Ce) ? "toggle" : s({}, p(t).data(), p(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var o = p(t).one(De.SHOW, function(e) {
            e.isDefaultPrevented() || o.one(De.HIDDEN, function() {
                p(n).is(":visible") && n.focus()
            })
        });
        je._jQueryInterface.call(p(t), r, this)
    }), p.fn[Ee] = je._jQueryInterface, p.fn[Ee].Constructor = je, p.fn[Ee].noConflict = function() {
        return p.fn[Ee] = Te, je._jQueryInterface
    };
    var He = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        qe = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Re = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function Me(e, s, t) {
        if (0 === e.length) return e;
        if (t && "function" == typeof t) return t(e);
        for (var n = (new window.DOMParser).parseFromString(e, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function(e, t) {
                var n = l[e],
                    i = n.nodeName.toLowerCase();
                if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                var r = [].slice.call(n.attributes),
                    o = [].concat(s["*"] || [], s[i] || []);
                r.forEach(function(e) {
                    ! function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === He.indexOf(n) || Boolean(e.nodeValue.match(qe) || e.nodeValue.match(Re));
                        for (var i = t.filter(function(e) {
                                return e instanceof RegExp
                            }), r = 0, o = i.length; r < o; r++)
                            if (n.match(i[r])) return !0;
                        return !1
                    }(e, o) && n.removeAttribute(e.nodeName)
                })
            }, r = 0, o = l.length; r < o; r++) i(r);
        return n.body.innerHTML
    }
    var Fe, We = "tooltip",
        Be = "bs.tooltip",
        Ue = "." + Be,
        $e = p.fn[We],
        Ke = "bs-tooltip",
        ze = new RegExp("(^|\\s)" + Ke + "\\S+", "g"),
        Qe = ["sanitize", "whiteList", "sanitizeFn"],
        Ve = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        Ye = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Xe = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }
        },
        Ge = "show",
        Je = {
            HIDE: "hide" + Ue,
            HIDDEN: "hidden" + Ue,
            SHOW: "show" + Ue,
            SHOWN: "shown" + Ue,
            INSERTED: "inserted" + Ue,
            CLICK: "click" + Ue,
            FOCUSIN: "focusin" + Ue,
            FOCUSOUT: "focusout" + Ue,
            MOUSEENTER: "mouseenter" + Ue,
            MOUSELEAVE: "mouseleave" + Ue
        },
        Ze = "fade",
        et = "show",
        tt = "hover",
        nt = "focus",
        it = ((Fe = rt.prototype).enable = function() {
            this._isEnabled = !0
        }, Fe.disable = function() {
            this._isEnabled = !1
        }, Fe.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }, Fe.toggle = function(e) {
            if (this._isEnabled)
                if (e) {
                    var t = this.constructor.DATA_KEY,
                        n = p(e.currentTarget).data(t);
                    n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (p(this.getTipElement()).hasClass(et)) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }, Fe.dispose = function() {
            clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal"), this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
        }, Fe.show = function() {
            var t = this;
            if ("none" === p(this.element).css("display")) throw new Error("Please use show on visible elements");
            var e = p.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                p(this.element).trigger(e);
                var n = g.findShadowRoot(this.element),
                    i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (e.isDefaultPrevented() || !i) return;
                var r = this.getTipElement(),
                    o = g.getUID(this.constructor.NAME);
                r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && p(r).addClass(Ze);
                var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                    a = this._getAttachment(s);
                this.addAttachmentClass(a);
                var l = this._getContainer();
                p(r).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(r).appendTo(l), p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new f(this.element, r, {
                    placement: a,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        return t._handlePopperPlacementChange(e)
                    }
                }), p(r).addClass(et), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
                var u = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null, p(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                };
                if (p(this.tip).hasClass(Ze)) {
                    var c = g.getTransitionDurationFromElement(this.tip);
                    p(this.tip).one(g.TRANSITION_END, u).emulateTransitionEnd(c)
                } else u()
            }
        }, Fe.hide = function(e) {
            function t() {
                n._hoverState !== Ge && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), p(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
            }
            var n = this,
                i = this.getTipElement(),
                r = p.Event(this.constructor.Event.HIDE);
            if (p(this.element).trigger(r), !r.isDefaultPrevented()) {
                if (p(i).removeClass(et), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), this._activeTrigger.click = !1, this._activeTrigger[nt] = !1, this._activeTrigger[tt] = !1, p(this.tip).hasClass(Ze)) {
                    var o = g.getTransitionDurationFromElement(i);
                    p(i).one(g.TRANSITION_END, t).emulateTransitionEnd(o)
                } else t();
                this._hoverState = ""
            }
        }, Fe.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }, Fe.isWithContent = function() {
            return Boolean(this.getTitle())
        }, Fe.addAttachmentClass = function(e) {
            p(this.getTipElement()).addClass(Ke + "-" + e)
        }, Fe.getTipElement = function() {
            return this.tip = this.tip || p(this.config.template)[0], this.tip
        }, Fe.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(p(e.querySelectorAll(".tooltip-inner")), this.getTitle()), p(e).removeClass(Ze + " " + et)
        }, Fe.setElementContent = function(e, t) {
            "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = Me(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? p(t).parent().is(e) || e.empty().append(t) : e.text(p(t).text())
        }, Fe.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e = e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
        }, Fe._getOffset = function() {
            var t = this,
                e = {};
            return "function" == typeof this.config.offset ? e.fn = function(e) {
                return e.offsets = s({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e
            } : e.offset = this.config.offset, e
        }, Fe._getContainer = function() {
            return !1 === this.config.container ? document.body : g.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container)
        }, Fe._getAttachment = function(e) {
            return Ye[e.toUpperCase()]
        }, Fe._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(e) {
                if ("click" === e) p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                    return i.toggle(e)
                });
                else if ("manual" !== e) {
                    var t = e === tt ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                        n = e === tt ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    p(i.element).on(t, i.config.selector, function(e) {
                        return i._enter(e)
                    }).on(n, i.config.selector, function(e) {
                        return i._leave(e)
                    })
                }
            }), p(this.element).closest(".modal").on("hide.bs.modal", function() {
                i.element && i.hide()
            }), this.config.selector ? this.config = s({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }, Fe._fixTitle = function() {
            var e = typeof this.element.getAttribute("data-original-title");
            !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
        }, Fe._enter = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? nt : tt] = !0), p(t.getTipElement()).hasClass(et) || t._hoverState === Ge ? t._hoverState = Ge : (clearTimeout(t._timeout), t._hoverState = Ge, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                t._hoverState === Ge && t.show()
            }, t.config.delay.show) : t.show())
        }, Fe._leave = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? nt : tt] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                "out" === t._hoverState && t.hide()
            }, t.config.delay.hide) : t.hide())
        }, Fe._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e]) return !0;
            return !1
        }, Fe._getConfig = function(e) {
            var t = p(this.element).data();
            return Object.keys(t).forEach(function(e) {
                -1 !== Qe.indexOf(e) && delete t[e]
            }), "number" == typeof(e = s({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), g.typeCheckConfig(We, e, this.constructor.DefaultType), e.sanitize && (e.template = Me(e.template, e.whiteList, e.sanitizeFn)), e
        }, Fe._getDelegateConfig = function() {
            var e = {};
            if (this.config)
                for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
        }, Fe._cleanTipClass = function() {
            var e = p(this.getTipElement()),
                t = e.attr("class").match(ze);
            null !== t && t.length && e.removeClass(t.join(""))
        }, Fe._handlePopperPlacementChange = function(e) {
            var t = e.instance;
            this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
        }, Fe._fixTransition = function() {
            var e = this.getTipElement(),
                t = this.config.animation;
            null === e.getAttribute("x-placement") && (p(e).removeClass(Ze), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
        }, rt._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this).data(Be),
                    t = "object" == typeof n && n;
                if ((e || !/dispose|hide/.test(n)) && (e || (e = new rt(this, t), p(this).data(Be, e)), "string" == typeof n)) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }, o(rt, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Xe
            }
        }, {
            key: "NAME",
            get: function() {
                return We
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Be
            }
        }, {
            key: "Event",
            get: function() {
                return Je
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Ue
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Ve
            }
        }]), rt);

    function rt(e, t) {
        if (void 0 === f) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
    }
    p.fn[We] = it._jQueryInterface, p.fn[We].Constructor = it, p.fn[We].noConflict = function() {
        return p.fn[We] = $e, it._jQueryInterface
    };
    var ot = "popover",
        st = "bs.popover",
        at = "." + st,
        lt = p.fn[ot],
        ut = "bs-popover",
        ct = new RegExp("(^|\\s)" + ut + "\\S+", "g"),
        ft = s({}, it.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        ht = s({}, it.DefaultType, {
            content: "(string|element|function)"
        }),
        dt = {
            HIDE: "hide" + at,
            HIDDEN: "hidden" + at,
            SHOW: "show" + at,
            SHOWN: "shown" + at,
            INSERTED: "inserted" + at,
            CLICK: "click" + at,
            FOCUSIN: "focusin" + at,
            FOCUSOUT: "focusout" + at,
            MOUSEENTER: "mouseenter" + at,
            MOUSELEAVE: "mouseleave" + at
        },
        pt = function(e) {
            var t, n;

            function i() {
                return e.apply(this, arguments) || this
            }
            n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function(e) {
                p(this.getTipElement()).addClass(ut + "-" + e)
            }, r.getTipElement = function() {
                return this.tip = this.tip || p(this.config.template)[0], this.tip
            }, r.setContent = function() {
                var e = p(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
            }, r._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function() {
                var e = p(this.getTipElement()),
                    t = e.attr("class").match(ct);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this).data(st),
                        t = "object" == typeof n ? n : null;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data(st, e)), "string" == typeof n)) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, o(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ft
                }
            }, {
                key: "NAME",
                get: function() {
                    return ot
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return st
                }
            }, {
                key: "Event",
                get: function() {
                    return dt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return at
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ht
                }
            }]), i
        }(it);
    p.fn[ot] = pt._jQueryInterface, p.fn[ot].Constructor = pt, p.fn[ot].noConflict = function() {
        return p.fn[ot] = lt, pt._jQueryInterface
    };
    var gt, mt = "scrollspy",
        vt = "bs.scrollspy",
        yt = "." + vt,
        _t = p.fn[mt],
        bt = {
            offset: 10,
            method: "auto",
            target: ""
        },
        wt = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        Et = {
            ACTIVATE: "activate" + yt,
            SCROLL: "scroll" + yt,
            LOAD_DATA_API: "load" + yt + ".data-api"
        },
        Ct = "active",
        xt = ".nav, .list-group",
        Tt = ".nav-link",
        St = ".list-group-item",
        At = "position",
        Dt = ((gt = Nt.prototype).refresh = function() {
            var t = this,
                e = this._scrollElement === this._scrollElement.window ? "offset" : At,
                r = "auto" === this._config.method ? e : this._config.method,
                o = r === At ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                var t, n = g.getSelectorFromElement(e);
                if (n && (t = document.querySelector(n)), t) {
                    var i = t.getBoundingClientRect();
                    if (i.width || i.height) return [p(t)[r]().top + o, n]
                }
                return null
            }).filter(function(e) {
                return e
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).forEach(function(e) {
                t._offsets.push(e[0]), t._targets.push(e[1])
            })
        }, gt.dispose = function() {
            p.removeData(this._element, vt), p(this._scrollElement).off(yt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
        }, gt._getConfig = function(e) {
            if ("string" != typeof(e = s({}, bt, "object" == typeof e && e ? e : {})).target) {
                var t = p(e.target).attr("id");
                t || (t = g.getUID(mt), p(e.target).attr("id", t)), e.target = "#" + t
            }
            return g.typeCheckConfig(mt, e, wt), e
        }, gt._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }, gt._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }, gt._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }, gt._process = function() {
            var e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(), n <= e) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
            }
        }, gt._activate = function(t) {
            this._activeTarget = t, this._clear();
            var e = this._selector.split(",").map(function(e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                }),
                n = p([].slice.call(document.querySelectorAll(e.join(","))));
            n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(Ct), n.addClass(Ct)) : (n.addClass(Ct), n.parents(xt).prev(Tt + ", " + St).addClass(Ct), n.parents(xt).prev(".nav-item").children(Tt).addClass(Ct)), p(this._scrollElement).trigger(Et.ACTIVATE, {
                relatedTarget: t
            })
        }, gt._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                return e.classList.contains(Ct)
            }).forEach(function(e) {
                return e.classList.remove(Ct)
            })
        }, Nt._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(vt);
                if (e || (e = new Nt(this, "object" == typeof t && t), p(this).data(vt, e)), "string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }, o(Nt, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return bt
            }
        }]), Nt);

    function Nt(e, t) {
        var n = this;
        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + Tt + "," + this._config.target + " " + St + "," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p(this._scrollElement).on(Et.SCROLL, function(e) {
            return n._process(e)
        }), this.refresh(), this._process()
    }
    p(window).on(Et.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
            var n = p(e[t]);
            Dt._jQueryInterface.call(n, n.data())
        }
    }), p.fn[mt] = Dt._jQueryInterface, p.fn[mt].Constructor = Dt, p.fn[mt].noConflict = function() {
        return p.fn[mt] = _t, Dt._jQueryInterface
    };
    var It, Ot = "bs.tab",
        kt = "." + Ot,
        Lt = p.fn.tab,
        jt = {
            HIDE: "hide" + kt,
            HIDDEN: "hidden" + kt,
            SHOW: "show" + kt,
            SHOWN: "shown" + kt,
            CLICK_DATA_API: "click" + kt + ".data-api"
        },
        Pt = "active",
        Ht = ".active",
        qt = "> li > .active",
        Rt = ((It = Mt.prototype).show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(Pt) || p(this._element).hasClass("disabled"))) {
                var e, i, t = p(this._element).closest(".nav, .list-group")[0],
                    r = g.getSelectorFromElement(this._element);
                if (t) {
                    var o = "UL" === t.nodeName || "OL" === t.nodeName ? qt : Ht;
                    i = (i = p.makeArray(p(t).find(o)))[i.length - 1]
                }
                var s = p.Event(jt.HIDE, {
                        relatedTarget: this._element
                    }),
                    a = p.Event(jt.SHOW, {
                        relatedTarget: i
                    });
                if (i && p(i).trigger(s), p(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    r && (e = document.querySelector(r)), this._activate(this._element, t);
                    var l = function() {
                        var e = p.Event(jt.HIDDEN, {
                                relatedTarget: n._element
                            }),
                            t = p.Event(jt.SHOWN, {
                                relatedTarget: i
                            });
                        p(i).trigger(e), p(n._element).trigger(t)
                    };
                    e ? this._activate(e, e.parentNode, l) : l()
                }
            }
        }, It.dispose = function() {
            p.removeData(this._element, Ot), this._element = null
        }, It._activate = function(e, t, n) {
            function i() {
                return r._transitionComplete(e, o, n)
            }
            var r = this,
                o = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? p(t).children(Ht) : p(t).find(qt))[0],
                s = n && o && p(o).hasClass("fade");
            if (o && s) {
                var a = g.getTransitionDurationFromElement(o);
                p(o).removeClass("show").one(g.TRANSITION_END, i).emulateTransitionEnd(a)
            } else i()
        }, It._transitionComplete = function(e, t, n) {
            if (t) {
                p(t).removeClass(Pt);
                var i = p(t.parentNode).find("> .dropdown-menu .active")[0];
                i && p(i).removeClass(Pt), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            if (p(e).addClass(Pt), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), g.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && p(e.parentNode).hasClass("dropdown-menu")) {
                var r = p(e).closest(".dropdown")[0];
                if (r) {
                    var o = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                    p(o).addClass(Pt)
                }
                e.setAttribute("aria-expanded", !0)
            }
            n && n()
        }, Mt._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this),
                    t = e.data(Ot);
                if (t || (t = new Mt(this), e.data(Ot, t)), "string" == typeof n) {
                    if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }, o(Mt, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]), Mt);

    function Mt(e) {
        this._element = e
    }
    p(document).on(jt.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(), Rt._jQueryInterface.call(p(this), "show")
    }), p.fn.tab = Rt._jQueryInterface, p.fn.tab.Constructor = Rt, p.fn.tab.noConflict = function() {
        return p.fn.tab = Lt, Rt._jQueryInterface
    };
    var Ft, Wt = "toast",
        Bt = "bs.toast",
        Ut = "." + Bt,
        $t = p.fn[Wt],
        Kt = {
            CLICK_DISMISS: "click.dismiss" + Ut,
            HIDE: "hide" + Ut,
            HIDDEN: "hidden" + Ut,
            SHOW: "show" + Ut,
            SHOWN: "shown" + Ut
        },
        zt = "show",
        Qt = "showing",
        Vt = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Yt = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        Xt = ((Ft = Gt.prototype).show = function() {
            var e = this;

            function t() {
                e._element.classList.remove(Qt), e._element.classList.add(zt), p(e._element).trigger(Kt.SHOWN), e._config.autohide && e.hide()
            }
            if (p(this._element).trigger(Kt.SHOW), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), this._element.classList.add(Qt), this._config.animation) {
                var n = g.getTransitionDurationFromElement(this._element);
                p(this._element).one(g.TRANSITION_END, t).emulateTransitionEnd(n)
            } else t()
        }, Ft.hide = function(e) {
            var t = this;
            this._element.classList.contains(zt) && (p(this._element).trigger(Kt.HIDE), e ? this._close() : this._timeout = setTimeout(function() {
                t._close()
            }, this._config.delay))
        }, Ft.dispose = function() {
            clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(zt) && this._element.classList.remove(zt), p(this._element).off(Kt.CLICK_DISMISS), p.removeData(this._element, Bt), this._element = null, this._config = null
        }, Ft._getConfig = function(e) {
            return e = s({}, Yt, p(this._element).data(), "object" == typeof e && e ? e : {}), g.typeCheckConfig(Wt, e, this.constructor.DefaultType), e
        }, Ft._setListeners = function() {
            var e = this;
            p(this._element).on(Kt.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
                return e.hide(!0)
            })
        }, Ft._close = function() {
            function e() {
                t._element.classList.add("hide"), p(t._element).trigger(Kt.HIDDEN)
            }
            var t = this;
            if (this._element.classList.remove(zt), this._config.animation) {
                var n = g.getTransitionDurationFromElement(this._element);
                p(this._element).one(g.TRANSITION_END, e).emulateTransitionEnd(n)
            } else e()
        }, Gt._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this),
                    t = e.data(Bt);
                if (t || (t = new Gt(this, "object" == typeof n && n), e.data(Bt, t)), "string" == typeof n) {
                    if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n](this)
                }
            })
        }, o(Gt, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Vt
            }
        }, {
            key: "Default",
            get: function() {
                return Yt
            }
        }]), Gt);

    function Gt(e, t) {
        this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
    }
    p.fn[Wt] = Xt._jQueryInterface, p.fn[Wt].Constructor = Xt, p.fn[Wt].noConflict = function() {
            return p.fn[Wt] = $t, Xt._jQueryInterface
        },
        function() {
            if (void 0 === p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = p.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), e.Util = g, e.Alert = h, e.Button = T, e.Carousel = W, e.Collapse = ne, e.Dropdown = _e, e.Modal = je, e.Popover = pt, e.Scrollspy = Dt, e.Tab = Rt, e.Toast = Xt, e.Tooltip = it, Object.defineProperty(e, "__esModule", {
            value: !0
        })
});
var List = function(n) {
    function i(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    var r = {};
    return i.m = n, i.c = r, i.i = function(e) {
        return e
    }, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 11)
}([function(e, t, n) {
    function i(e) {
        if (!e || !e.nodeType) throw new Error("A DOM element reference is required");
        this.el = e, this.list = e.classList
    }
    var r = n(4),
        o = /\s+/;
    Object.prototype.toString, e.exports = function(e) {
        return new i(e)
    }, i.prototype.add = function(e) {
        if (this.list) return this.list.add(e), this;
        var t = this.array();
        return ~r(t, e) || t.push(e), this.el.className = t.join(" "), this
    }, i.prototype.remove = function(e) {
        if (this.list) return this.list.remove(e), this;
        var t = this.array(),
            n = r(t, e);
        return ~n && t.splice(n, 1), this.el.className = t.join(" "), this
    }, i.prototype.toggle = function(e, t) {
        return this.list ? void 0 !== t ? t !== this.list.toggle(e, t) && this.list.toggle(e) : this.list.toggle(e) : void 0 !== t ? t ? this.add(e) : this.remove(e) : this.has(e) ? this.remove(e) : this.add(e), this
    }, i.prototype.array = function() {
        var e = (this.el.getAttribute("class") || "").replace(/^\s+|\s+$/g, "").split(o);
        return "" === e[0] && e.shift(), e
    }, i.prototype.has = i.prototype.contains = function(e) {
        return this.list ? this.list.contains(e) : !!~r(this.array(), e)
    }
}, function(e, t, n) {
    var o = window.addEventListener ? "addEventListener" : "attachEvent",
        s = window.removeEventListener ? "removeEventListener" : "detachEvent",
        a = "addEventListener" != o ? "on" : "",
        l = n(5);
    t.bind = function(e, t, n, i) {
        e = l(e);
        for (var r = 0; r < e.length; r++) e[r][o](a + t, n, i || !1)
    }, t.unbind = function(e, t, n, i) {
        e = l(e);
        for (var r = 0; r < e.length; r++) e[r][s](a + t, n, i || !1)
    }
}, function(e, t) {
    e.exports = function(o) {
        return function(e, t, n) {
            var r = this;
            this._values = {}, this.found = !1, this.filtered = !1;
            this.values = function(e, t) {
                    if (void 0 === e) return r._values;
                    for (var n in e) r._values[n] = e[n];
                    !0 !== t && o.templater.set(r, r.values())
                }, this.show = function() {
                    o.templater.show(r)
                }, this.hide = function() {
                    o.templater.hide(r)
                }, this.matching = function() {
                    return o.filtered && o.searched && r.found && r.filtered || o.filtered && !o.searched && r.filtered || !o.filtered && o.searched && r.found || !o.filtered && !o.searched
                }, this.visible = function() {
                    return !(!r.elm || r.elm.parentNode != o.list)
                },
                function(e, t, n) {
                    if (void 0 === t) n ? r.values(e, n) : r.values(e);
                    else {
                        r.elm = t;
                        var i = o.templater.get(r, e);
                        r.values(i)
                    }
                }(e, t, n)
        }
    }
}, function(e, t) {
    e.exports = function(e, t, n, i) {
        return (i = i || {}).test && i.getElementsByClassName || !i.test && document.getElementsByClassName ? function(e, t, n) {
            return n ? e.getElementsByClassName(t)[0] : e.getElementsByClassName(t)
        }(e, t, n) : i.test && i.querySelector || !i.test && document.querySelector ? function(e, t, n) {
            return t = "." + t, n ? e.querySelector(t) : e.querySelectorAll(t)
        }(e, t, n) : function(e, t, n) {
            for (var i = [], r = e.getElementsByTagName("*"), o = r.length, s = new RegExp("(^|\\s)" + t + "(\\s|$)"), a = 0, l = 0; a < o; a++)
                if (s.test(r[a].className)) {
                    if (n) return r[a];
                    i[l] = r[a], l++
                }
            return i
        }(e, t, n)
    }
}, function(e, t) {
    var i = [].indexOf;
    e.exports = function(e, t) {
        if (i) return e.indexOf(t);
        for (var n = 0; n < e.length; ++n)
            if (e[n] === t) return n;
        return -1
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 === e) return [];
        if (null === e) return [null];
        if (e === window) return [window];
        if ("string" == typeof e) return [e];
        if (function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }(e)) return e;
        if ("number" != typeof e.length) return [e];
        if ("function" == typeof e && e instanceof Function) return [e];
        for (var t = [], n = 0; n < e.length; n++)(Object.prototype.hasOwnProperty.call(e, n) || n in e) && t.push(e[n]);
        return t.length ? t : []
    }
}, function(e, t) {
    e.exports = function(e) {
        return (e = null === (e = void 0 === e ? "" : e) ? "" : e).toString()
    }
}, function(e, t) {
    e.exports = function(e) {
        for (var t, n = Array.prototype.slice.call(arguments, 1), i = 0; t = n[i]; i++)
            if (t)
                for (var r in t) e[r] = t[r];
        return e
    }
}, function(e, t) {
    e.exports = function(r) {
        var o = function(e, t, n) {
            var i = e.splice(0, 50);
            n = (n = n || []).concat(r.add(i)), 0 < e.length ? setTimeout(function() {
                o(e, t, n)
            }, 1) : (r.update(), t(n))
        };
        return o
    }
}, function(e, t) {
    e.exports = function(o) {
        return o.handlers.filterStart = o.handlers.filterStart || [], o.handlers.filterComplete = o.handlers.filterComplete || [],
            function(e) {
                if (o.trigger("filterStart"), o.i = 1, o.reset.filter(), void 0 === e) o.filtered = !1;
                else {
                    o.filtered = !0;
                    for (var t = o.items, n = 0, i = t.length; n < i; n++) {
                        var r = t[n];
                        e(r) ? r.filtered = !0 : r.filtered = !1
                    }
                }
                return o.update(), o.trigger("filterComplete"), o.visibleItems
            }
    }
}, function(e, t, n) {
    var i = (n(0), n(1)),
        r = n(7),
        a = n(6),
        u = n(3),
        c = n(19);
    e.exports = function(o, s) {
        s = r({
            location: 0,
            distance: 100,
            threshold: .4,
            multiSearch: !0,
            searchClass: "fuzzy-search"
        }, s = s || {});
        var l = {
            search: function(e, t) {
                for (var n = s.multiSearch ? e.replace(/ +$/, "").split(/ +/) : [e], i = 0, r = o.items.length; i < r; i++) l.item(o.items[i], t, n)
            },
            item: function(e, t, n) {
                for (var i = !0, r = 0; r < n.length; r++) {
                    for (var o = !1, s = 0, a = t.length; s < a; s++) l.values(e.values(), t[s], n[r]) && (o = !0);
                    o || (i = !1)
                }
                e.found = i
            },
            values: function(e, t, n) {
                if (e.hasOwnProperty(t)) {
                    var i = a(e[t]).toLowerCase();
                    if (c(i, n, s)) return !0
                }
                return !1
            }
        };
        return i.bind(u(o.listContainer, s.searchClass), "keyup", function(e) {
                var t = e.target || e.srcElement;
                o.search(t.value, l.search)
            }),
            function(e, t) {
                o.search(e, t, l.search)
            }
    }
}, function(e, t, o) {
    var s = o(18),
        c = o(3),
        f = o(7),
        h = o(4),
        d = o(1),
        p = o(6),
        g = o(0),
        m = o(17),
        v = o(5);
    e.exports = function(e, n, t) {
        var i, a = this,
            l = o(2)(a),
            u = o(8)(a),
            r = o(12)(a);
        i = {
            start: function() {
                a.listClass = "list", a.searchClass = "search", a.sortClass = "sort", a.page = 1e4, a.i = 1, a.items = [], a.visibleItems = [], a.matchingItems = [], a.searched = !1, a.filtered = !1, a.searchColumns = void 0, a.handlers = {
                    updated: []
                }, a.valueNames = [], a.utils = {
                    getByClass: c,
                    extend: f,
                    indexOf: h,
                    events: d,
                    toString: p,
                    naturalSort: s,
                    classes: g,
                    getAttribute: m,
                    toArray: v
                }, a.utils.extend(a, n), a.listContainer = "string" == typeof e ? document.getElementById(e) : e, a.listContainer && (a.list = c(a.listContainer, a.listClass, !0), a.parse = o(13)(a), a.templater = o(16)(a), a.search = o(14)(a), a.filter = o(9)(a), a.sort = o(15)(a), a.fuzzySearch = o(10)(a, n.fuzzySearch), this.handlers(), this.items(), this.pagination(), a.update())
            },
            handlers: function() {
                for (var e in a.handlers) a[e] && a.on(e, a[e])
            },
            items: function() {
                a.parse(a.list), void 0 !== t && a.add(t)
            },
            pagination: function() {
                if (void 0 !== n.pagination) {
                    !0 === n.pagination && (n.pagination = [{}]), void 0 === n.pagination[0] && (n.pagination = [n.pagination]);
                    for (var e = 0, t = n.pagination.length; e < t; e++) r(n.pagination[e])
                }
            }
        }, this.reIndex = function() {
            a.items = [], a.visibleItems = [], a.matchingItems = [], a.searched = !1, a.filtered = !1, a.parse(a.list)
        }, this.toJSON = function() {
            for (var e = [], t = 0, n = a.items.length; t < n; t++) e.push(a.items[t].values());
            return e
        }, this.add = function(e, t) {
            if (0 !== e.length) {
                if (t) return void u(e, t);
                var n = [],
                    i = !1;
                void 0 === e[0] && (e = [e]);
                for (var r = 0, o = e.length; r < o; r++) {
                    var s;
                    i = a.items.length > a.page, s = new l(e[r], void 0, i), a.items.push(s), n.push(s)
                }
                return a.update(), n
            }
        }, this.show = function(e, t) {
            return this.i = e, this.page = t, a.update(), a
        }, this.remove = function(e, t, n) {
            for (var i = 0, r = 0, o = a.items.length; r < o; r++) a.items[r].values()[e] == t && (a.templater.remove(a.items[r], n), a.items.splice(r, 1), o--, r--, i++);
            return a.update(), i
        }, this.get = function(e, t) {
            for (var n = [], i = 0, r = a.items.length; i < r; i++) {
                var o = a.items[i];
                o.values()[e] == t && n.push(o)
            }
            return n
        }, this.size = function() {
            return a.items.length
        }, this.clear = function() {
            return a.templater.clear(), a.items = [], a
        }, this.on = function(e, t) {
            return a.handlers[e].push(t), a
        }, this.off = function(e, t) {
            var n = a.handlers[e],
                i = h(n, t);
            return -1 < i && n.splice(i, 1), a
        }, this.trigger = function(e) {
            for (var t = a.handlers[e].length; t--;) a.handlers[e][t](a);
            return a
        }, this.reset = {
            filter: function() {
                for (var e = a.items, t = e.length; t--;) e[t].filtered = !1;
                return a
            },
            search: function() {
                for (var e = a.items, t = e.length; t--;) e[t].found = !1;
                return a
            }
        }, this.update = function() {
            var e = a.items,
                t = e.length;
            a.visibleItems = [], a.matchingItems = [], a.templater.clear();
            for (var n = 0; n < t; n++) e[n].matching() && a.matchingItems.length + 1 >= a.i && a.visibleItems.length < a.page ? (e[n].show(), a.visibleItems.push(e[n]), a.matchingItems.push(e[n])) : (e[n].matching() && a.matchingItems.push(e[n]), e[n].hide());
            return a.trigger("updated"), a
        }, i.start()
    }
}, function(e, t, n) {
    var m = n(0),
        i = n(1),
        r = n(11);
    e.exports = function(d) {
        function n(e, t) {
            var n, i = d.matchingItems.length,
                r = d.i,
                o = d.page,
                s = Math.ceil(i / o),
                a = Math.ceil(r / o),
                l = t.innerWindow || 2,
                u = t.left || t.outerWindow || 0,
                c = t.right || t.outerWindow || 0;
            c = s - c, e.clear();
            for (var f = 1; f <= s; f++) {
                var h = a === f ? "active" : "";
                p.number(f, u, c, a, l) ? (n = e.add({
                    page: f,
                    dotted: !1
                })[0], h && m(n.elm).add(h), g(n.elm, f, o)) : p.dotted(e, f, u, c, a, l, e.size()) && (n = e.add({
                    page: "...",
                    dotted: !0
                })[0], m(n.elm).add("disabled"))
            }
        }
        var p = {
                number: function(e, t, n, i, r) {
                    return this.left(e, t) || this.right(e, n) || this.innerWindow(e, i, r)
                },
                left: function(e, t) {
                    return e <= t
                },
                right: function(e, t) {
                    return t < e
                },
                innerWindow: function(e, t, n) {
                    return t - n <= e && e <= t + n
                },
                dotted: function(e, t, n, i, r, o, s) {
                    return this.dottedLeft(e, t, n, i, r, o) || this.dottedRight(e, t, n, i, r, o, s)
                },
                dottedLeft: function(e, t, n, i, r, o) {
                    return t == n + 1 && !this.innerWindow(t, r, o) && !this.right(t, i)
                },
                dottedRight: function(e, t, n, i, r, o, s) {
                    return !e.items[s - 1].values().dotted && t == i && !this.innerWindow(t, r, o) && !this.right(t, i)
                }
            },
            g = function(e, t, n) {
                i.bind(e, "click", function() {
                    d.show((t - 1) * n + 1, n)
                })
            };
        return function(e) {
            var t = new r(d.listContainer.id, {
                listClass: e.paginationClass || "pagination",
                item: "<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",
                valueNames: ["page", "dotted"],
                searchClass: "pagination-search-that-is-not-supposed-to-exist",
                sortClass: "pagination-sort-that-is-not-supposed-to-exist"
            });
            d.on("updated", function() {
                n(t, e)
            }), n(t, e)
        }
    }
}, function(e, t, n) {
    e.exports = function(r) {
        function i(e, t) {
            for (var n = 0, i = e.length; n < i; n++) r.items.push(new o(t, e[n]))
        }
        var o = n(2)(r),
            s = function(e, t) {
                var n = e.splice(0, 50);
                i(n, t), 0 < e.length ? setTimeout(function() {
                    s(e, t)
                }, 1) : (r.update(), r.trigger("parseComplete"))
            };
        return r.handlers.parseComplete = r.handlers.parseComplete || [],
            function() {
                var e = function(e) {
                        for (var t = e.childNodes, n = [], i = 0, r = t.length; i < r; i++) void 0 === t[i].data && n.push(t[i]);
                        return n
                    }(r.list),
                    t = r.valueNames;
                r.indexAsync ? s(e, t) : i(e, t)
            }
    }
}, function(e, t) {
    e.exports = function(n) {
        function i(e) {
            return n.trigger("searchStart"), a.resetList(), a.setSearchString(e), a.setOptions(arguments), a.setColumns(), "" === s ? l.reset() : (n.searched = !0, t ? t(s, o) : l.list()), n.update(), n.trigger("searchComplete"), n.visibleItems
        }
        var r, o, s, t, a = {
                resetList: function() {
                    n.i = 1, n.templater.clear(), t = void 0
                },
                setOptions: function(e) {
                    2 == e.length && e[1] instanceof Array ? o = e[1] : 2 == e.length && "function" == typeof e[1] ? (o = void 0, t = e[1]) : 3 == e.length ? (o = e[1], t = e[2]) : o = void 0
                },
                setColumns: function() {
                    0 !== n.items.length && void 0 === o && (o = void 0 === n.searchColumns ? a.toArray(n.items[0].values()) : n.searchColumns)
                },
                setSearchString: function(e) {
                    e = (e = n.utils.toString(e).toLowerCase()).replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), s = e
                },
                toArray: function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t
                }
            },
            l = {
                list: function() {
                    for (var e = 0, t = n.items.length; e < t; e++) l.item(n.items[e])
                },
                item: function(e) {
                    e.found = !1;
                    for (var t = 0, n = o.length; t < n; t++)
                        if (l.values(e.values(), o[t])) return void(e.found = !0)
                },
                values: function(e, t) {
                    return !!(e.hasOwnProperty(t) && (r = n.utils.toString(e[t]).toLowerCase(), "" !== s && -1 < r.search(s)))
                },
                reset: function() {
                    n.reset.search(), n.searched = !1
                }
            };
        return n.handlers.searchStart = n.handlers.searchStart || [], n.handlers.searchComplete = n.handlers.searchComplete || [], n.utils.events.bind(n.utils.getByClass(n.listContainer, n.searchClass), "keyup", function(e) {
            var t = e.target || e.srcElement;
            "" === t.value && !n.searched || i(t.value)
        }), n.utils.events.bind(n.utils.getByClass(n.listContainer, n.searchClass), "input", function(e) {
            "" === (e.target || e.srcElement).value && i("")
        }), i
    }
}, function(e, t) {
    e.exports = function(o) {
        function e() {
            o.trigger("sortStart");
            var i = {},
                e = arguments[0].currentTarget || arguments[0].srcElement || void 0;
            e ? (i.valueName = o.utils.getAttribute(e, "data-sort"), s.getInSensitive(e, i), i.order = s.getOrder(e)) : ((i = arguments[1] || i).valueName = arguments[0], i.order = i.order || "asc", i.insensitive = void 0 === i.insensitive || i.insensitive), s.clear(), s.setOrder(i);
            var t, n = i.sortFunction || o.sortFunction || null,
                r = "desc" === i.order ? -1 : 1;
            t = n ? function(e, t) {
                return n(e, t, i) * r
            } : function(e, t) {
                var n = o.utils.naturalSort;
                return n.alphabet = o.alphabet || i.alphabet || void 0, !n.alphabet && i.insensitive && (n = o.utils.naturalSort.caseInsensitive), n(e.values()[i.valueName], t.values()[i.valueName]) * r
            }, o.items.sort(t), o.update(), o.trigger("sortComplete")
        }
        var s = {
            els: void 0,
            clear: function() {
                for (var e = 0, t = s.els.length; e < t; e++) o.utils.classes(s.els[e]).remove("asc"), o.utils.classes(s.els[e]).remove("desc")
            },
            getOrder: function(e) {
                var t = o.utils.getAttribute(e, "data-order");
                return "asc" == t || "desc" == t ? t : o.utils.classes(e).has("desc") ? "asc" : o.utils.classes(e).has("asc") ? "desc" : "asc"
            },
            getInSensitive: function(e, t) {
                var n = o.utils.getAttribute(e, "data-insensitive");
                t.insensitive = "false" !== n
            },
            setOrder: function(e) {
                for (var t = 0, n = s.els.length; t < n; t++) {
                    var i = s.els[t];
                    if (o.utils.getAttribute(i, "data-sort") === e.valueName) {
                        var r = o.utils.getAttribute(i, "data-order");
                        "asc" == r || "desc" == r ? r == e.order && o.utils.classes(i).add(e.order) : o.utils.classes(i).add(e.order)
                    }
                }
            }
        };
        return o.handlers.sortStart = o.handlers.sortStart || [], o.handlers.sortComplete = o.handlers.sortComplete || [], s.els = o.utils.getByClass(o.listContainer, o.sortClass), o.utils.events.bind(s.els, "click", e), o.on("searchStart", s.clear), o.on("filterStart", s.clear), e
    }
}, function(e, t) {
    function n(l) {
        var n, u = this;
        this.clearSourceItem = function(e, t) {
            for (var n = 0, i = t.length; n < i; n++) {
                var r;
                if (t[n].data)
                    for (var o = 0, s = t[n].data.length; o < s; o++) e.setAttribute("data-" + t[n].data[o], "");
                else t[n].attr && t[n].name ? (r = l.utils.getByClass(e, t[n].name, !0)) && r.setAttribute(t[n].attr, "") : (r = l.utils.getByClass(e, t[n], !0)) && (r.innerHTML = "");
                r = void 0
            }
            return e
        }, this.getItemSource = function(e) {
            if (void 0 === e) {
                for (var t = l.list.childNodes, n = 0, i = t.length; n < i; n++)
                    if (void 0 === t[n].data) return t[n].cloneNode(!0)
            } else {
                if (/<tr[\s>]/g.exec(e)) {
                    var r = document.createElement("tbody");
                    return r.innerHTML = e, r.firstChild
                }
                if (-1 !== e.indexOf("<")) {
                    var o = document.createElement("div");
                    return o.innerHTML = e, o.firstChild
                }
                var s = document.getElementById(l.item);
                if (s) return s
            }
        }, this.get = function(e, t) {
            u.create(e);
            for (var n = {}, i = 0, r = t.length; i < r; i++) {
                var o;
                if (t[i].data)
                    for (var s = 0, a = t[i].data.length; s < a; s++) n[t[i].data[s]] = l.utils.getAttribute(e.elm, "data-" + t[i].data[s]);
                else t[i].attr && t[i].name ? (o = l.utils.getByClass(e.elm, t[i].name, !0), n[t[i].name] = o ? l.utils.getAttribute(o, t[i].attr) : "") : (o = l.utils.getByClass(e.elm, t[i], !0), n[t[i]] = o ? o.innerHTML : "");
                o = void 0
            }
            return n
        }, this.set = function(r, e) {
            function t(e, t) {
                var n, i = function(e) {
                    for (var t = 0, n = l.valueNames.length; t < n; t++)
                        if (l.valueNames[t].data) {
                            for (var i = l.valueNames[t].data, r = 0, o = i.length; r < o; r++)
                                if (i[r] === e) return {
                                    data: e
                                }
                        } else {
                            if (l.valueNames[t].attr && l.valueNames[t].name && l.valueNames[t].name == e) return l.valueNames[t];
                            if (l.valueNames[t] === e) return e
                        }
                }(e);
                i && (i.data ? r.elm.setAttribute("data-" + i.data, t) : i.attr && i.name ? (n = l.utils.getByClass(r.elm, i.name, !0)) && n.setAttribute(i.attr, t) : (n = l.utils.getByClass(r.elm, i, !0)) && (n.innerHTML = t), n = void 0)
            }
            if (!u.create(r))
                for (var n in e) e.hasOwnProperty(n) && t(n, e[n])
        }, this.create = function(e) {
            if (void 0 !== e.elm) return !1;
            if (void 0 === n) throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");
            var t = n.cloneNode(!0);
            return t.removeAttribute("id"), e.elm = t, u.set(e, e.values()), !0
        }, this.remove = function(e) {
            e.elm.parentNode === l.list && l.list.removeChild(e.elm)
        }, this.show = function(e) {
            u.create(e), l.list.appendChild(e.elm)
        }, this.hide = function(e) {
            void 0 !== e.elm && e.elm.parentNode === l.list && l.list.removeChild(e.elm)
        }, this.clear = function() {
            if (l.list.hasChildNodes())
                for (; 1 <= l.list.childNodes.length;) l.list.removeChild(l.list.firstChild)
        }, n = (n = u.getItemSource(l.item)) && u.clearSourceItem(n, l.valueNames)
    }
    e.exports = function(e) {
        return new n(e)
    }
}, function(e, t) {
    e.exports = function(e, t) {
        var n = e.getAttribute && e.getAttribute(t) || null;
        if (!n)
            for (var i = e.attributes.length, r = 0; r < i; r++) void 0 !== t[r] && t[r].nodeName === t && (n = t[r].nodeValue);
        return n
    }
}, function(e, t, n) {
    "use strict";

    function d(e) {
        return 48 <= e && e <= 57
    }

    function i(e, t) {
        for (var n = (e += "").length, i = (t += "").length, r = 0, o = 0; r < n && o < i;) {
            var s = e.charCodeAt(r),
                a = t.charCodeAt(o);
            if (d(s)) {
                if (!d(a)) return s - a;
                for (var l = r, u = o; 48 === s && ++l < n;) s = e.charCodeAt(l);
                for (; 48 === a && ++u < i;) a = t.charCodeAt(u);
                for (var c = l, f = u; c < n && d(e.charCodeAt(c));) ++c;
                for (; f < i && d(t.charCodeAt(f));) ++f;
                var h = c - l - f + u;
                if (h) return h;
                for (; l < c;)
                    if (h = e.charCodeAt(l++) - t.charCodeAt(u++)) return h;
                r = c, o = f
            } else {
                if (s !== a) return s < g && a < g && -1 !== p[s] && -1 !== p[a] ? p[s] - p[a] : s - a;
                ++r, ++o
            }
        }
        return n - i
    }
    var r, p, g = 0;
    i.caseInsensitive = i.i = function(e, t) {
        return i(("" + e).toLowerCase(), ("" + t).toLowerCase())
    }, Object.defineProperties(i, {
        alphabet: {
            get: function() {
                return r
            },
            set: function(e) {
                p = [];
                var t = 0;
                if (r = e)
                    for (; t < r.length; t++) p[r.charCodeAt(t)] = t;
                for (g = p.length, t = 0; t < g; t++) void 0 === p[t] && (p[t] = -1)
            }
        }
    }), e.exports = i
}, function(e, t) {
    e.exports = function(e, r, t) {
        function n(e, t) {
            var n = e / r.length,
                i = Math.abs(a - t);
            return o ? n + i / o : i ? 1 : n
        }
        var i = t.location || 0,
            o = t.distance || 100,
            s = t.threshold || .4;
        if (r === e) return !0;
        if (32 < r.length) return !1;
        var a = i,
            l = function() {
                var e, t = {};
                for (e = 0; e < r.length; e++) t[r.charAt(e)] = 0;
                for (e = 0; e < r.length; e++) t[r.charAt(e)] |= 1 << r.length - e - 1;
                return t
            }(),
            u = s,
            c = e.indexOf(r, a); - 1 != c && (u = Math.min(n(0, c), u), -1 != (c = e.lastIndexOf(r, a + r.length)) && (u = Math.min(n(0, c), u)));
        var f = 1 << r.length - 1;
        c = -1;
        for (var h, d, p, g = r.length + e.length, m = 0; m < r.length; m++) {
            for (h = 0, d = g; h < d;) n(m, a + d) <= u ? h = d : g = d, d = Math.floor((g - h) / 2 + h);
            g = d;
            var v = Math.max(1, a - d + 1),
                y = Math.min(a + d, e.length) + r.length,
                _ = Array(y + 2);
            _[y + 1] = (1 << m) - 1;
            for (var b = y; v <= b; b--) {
                var w = l[e.charAt(b - 1)];
                if (_[b] = 0 === m ? (_[b + 1] << 1 | 1) & w : (_[b + 1] << 1 | 1) & w | (p[b + 1] | p[b]) << 1 | 1 | p[b + 1], _[b] & f) {
                    var E = n(m, b - 1);
                    if (E <= u) {
                        if (u = E, !(a < (c = b - 1))) break;
                        v = Math.max(1, 2 * a - c)
                    }
                }
            }
            if (n(m + 1, a) > u) break;
            p = _
        }
        return !(c < 0)
    }
}]);
! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = t.length,
            i = oe.type(t);
        return "function" === i || oe.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function n(t, e, i) {
        if (oe.isFunction(e)) return oe.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return oe.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (pe.test(e)) return oe.filter(e, t, i);
            e = oe.filter(e, t)
        }
        return oe.grep(t, function(t) {
            return oe.inArray(t, e) >= 0 !== i
        })
    }

    function s(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function o(t) {
        var e = _e[t] = {};
        return oe.each(t.match(we) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function r() {
        ge.addEventListener ? (ge.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (ge.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (ge.addEventListener || "load" === event.type || "complete" === ge.readyState) && (r(), oe.ready())
    }

    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(De, "-$1").toLowerCase();
            if (i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Se.test(i) ? oe.parseJSON(i) : i
                } catch (s) {}
                oe.data(t, e, i)
            } else i = void 0
        }
        return i
    }

    function c(t) {
        var e;
        for (e in t)
            if (("data" !== e || !oe.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function h(t, e, i, n) {
        if (oe.acceptData(t)) {
            var s, o, r = oe.expando,
                a = t.nodeType,
                l = a ? oe.cache : t,
                c = a ? t[r] : t[r] && r;
            if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof e) return c || (c = a ? t[r] = K.pop() || oe.guid++ : r), l[c] || (l[c] = a ? {} : {
                toJSON: oe.noop
            }), ("object" == typeof e || "function" == typeof e) && (n ? l[c] = oe.extend(l[c], e) : l[c].data = oe.extend(l[c].data, e)), o = l[c], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[oe.camelCase(e)] = i), "string" == typeof e ? (s = o[e], null == s && (s = o[oe.camelCase(e)])) : s = o, s
        }
    }

    function u(t, e, i) {
        if (oe.acceptData(t)) {
            var n, s, o = t.nodeType,
                r = o ? oe.cache : t,
                a = o ? t[oe.expando] : oe.expando;
            if (r[a]) {
                if (e && (n = i ? r[a] : r[a].data)) {
                    oe.isArray(e) ? e = e.concat(oe.map(e, oe.camelCase)) : e in n ? e = [e] : (e = oe.camelCase(e), e = e in n ? [e] : e.split(" ")), s = e.length;
                    for (; s--;) delete n[e[s]];
                    if (i ? !c(n) : !oe.isEmptyObject(n)) return
                }(i || (delete r[a].data, c(r[a]))) && (o ? oe.cleanData([t], !0) : ne.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
            }
        }
    }

    function d() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return ge.activeElement
        } catch (t) {}
    }

    function g(t) {
        var e = Fe.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i
    }

    function m(t, e) {
        var i, n, s = 0,
            o = typeof t.getElementsByTagName !== Ce ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ce ? t.querySelectorAll(e || "*") : void 0;
        if (!o)
            for (o = [], i = t.childNodes || t; null != (n = i[s]); s++)!e || oe.nodeName(n, e) ? o.push(n) : oe.merge(o, m(n, e));
        return void 0 === e || e && oe.nodeName(t, e) ? oe.merge([t], o) : o
    }

    function v(t) {
        Ae.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return oe.nodeName(t, "table") && oe.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
        return t.type = (null !== oe.find.attr(t, "type")) + "/" + t.type, t
    }

    function w(t) {
        var e = Ke.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function _(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) oe._data(i, "globalEval", !e || oe._data(e[n], "globalEval"))
    }

    function x(t, e) {
        if (1 === e.nodeType && oe.hasData(t)) {
            var i, n, s, o = oe._data(t),
                r = oe._data(e, o),
                a = o.events;
            if (a) {
                delete r.handle, r.events = {};
                for (i in a)
                    for (n = 0, s = a[i].length; s > n; n++) oe.event.add(e, i, a[i][n])
            }
            r.data && (r.data = oe.extend({}, r.data))
        }
    }

    function k(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ne.noCloneEvent && e[oe.expando]) {
                s = oe._data(e);
                for (n in s.events) oe.removeEvent(e, n, s.handle);
                e.removeAttribute(oe.expando)
            }
            "script" === i && e.text !== t.text ? (b(e).text = t.text, w(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ne.html5Clone && t.innerHTML && !oe.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Ae.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }

    function C(e, i) {
        var n = oe(i.createElement(e)).appendTo(i.body),
            s = t.getDefaultComputedStyle ? t.getDefaultComputedStyle(n[0]).display : oe.css(n[0], "display");
        return n.detach(), s
    }

    function S(t) {
        var e = ge,
            i = ti[t];
        return i || (i = C(t, e), "none" !== i && i || (Ze = (Ze || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ze[0].contentWindow || Ze[0].contentDocument).document, e.write(), e.close(), i = C(t, e), Ze.detach()), ti[t] = i), i
    }

    function D(t, e) {
        return {
            get: function() {
                var i = t();
                if (null != i) return i ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function T(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = pi.length; s--;)
            if (e = pi[s] + i, e in t) return e;
        return n
    }

    function E(t, e) {
        for (var i, n, s, o = [], r = 0, a = t.length; a > r; r++) n = t[r], n.style && (o[r] = oe._data(n, "olddisplay"), i = n.style.display, e ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Pe(n) && (o[r] = oe._data(n, "olddisplay", S(n.nodeName)))) : o[r] || (s = Pe(n), (i && "none" !== i || !s) && oe._data(n, "olddisplay", s ? i : oe.css(n, "display"))));
        for (r = 0; a > r; r++) n = t[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "" : "none"));
        return t
    }

    function P(t, e, i) {
        var n = ci.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function M(t, e, i, n, s) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === i && (r += oe.css(t, i + Ee[o], !0, s)), n ? ("content" === i && (r -= oe.css(t, "padding" + Ee[o], !0, s)), "margin" !== i && (r -= oe.css(t, "border" + Ee[o] + "Width", !0, s))) : (r += oe.css(t, "padding" + Ee[o], !0, s), "padding" !== i && (r += oe.css(t, "border" + Ee[o] + "Width", !0, s)));
        return r
    }

    function A(t, e, i) {
        var n = !0,
            s = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = ei(t),
            r = ne.boxSizing() && "border-box" === oe.css(t, "boxSizing", !1, o);
        if (0 >= s || null == s) {
            if (s = ii(t, e, o), (0 > s || null == s) && (s = t.style[e]), si.test(s)) return s;
            n = r && (ne.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + M(t, e, i || (r ? "border" : "content"), n, o) + "px"
    }

    function I(t, e, i, n, s) {
        return new I.prototype.init(t, e, i, n, s)
    }

    function N() {
        return setTimeout(function() {
            fi = void 0
        }), fi = oe.now()
    }

    function $(t, e) {
        var i, n = {
                height: t
            },
            s = 0;
        for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = Ee[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function L(t, e, i) {
        for (var n, s = (wi[e] || []).concat(wi["*"]), o = 0, r = s.length; r > o; o++)
            if (n = s[o].call(i, e, t)) return n
    }

    function O(t, e, i) {
        var n, s, o, r, a, l, c, h, u = this,
            d = {},
            p = t.style,
            f = t.nodeType && Pe(t),
            g = oe._data(t, "fxshow");
        i.queue || (a = oe._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--, oe.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = oe.css(t, "display"), h = S(t.nodeName), "none" === c && (c = h), "inline" === c && "none" === oe.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== h ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || u.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (s = e[n], mi.exec(s)) {
                if (delete e[n], o = o || "toggle" === s, s === (f ? "hide" : "show")) {
                    if ("show" !== s || !g || void 0 === g[n]) continue;
                    f = !0
                }
                d[n] = g && g[n] || oe.style(t, n)
            }
        if (!oe.isEmptyObject(d)) {
            g ? "hidden" in g && (f = g.hidden) : g = oe._data(t, "fxshow", {}), o && (g.hidden = !f), f ? oe(t).show() : u.done(function() {
                oe(t).hide()
            }), u.done(function() {
                var e;
                oe._removeData(t, "fxshow");
                for (e in d) oe.style(t, e, d[e])
            });
            for (n in d) r = L(f ? g[n] : 0, n, u), n in g || (g[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function F(t, e) {
        var i, n, s, o, r;
        for (i in t)
            if (n = oe.camelCase(i), s = e[n], o = t[i], oe.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), r = oe.cssHooks[n], r && "expand" in r) {
                o = r.expand(o), delete t[n];
                for (i in o) i in t || (t[i] = o[i], e[i] = s)
            } else e[n] = s
    }

    function z(t, e, i) {
        var n, s, o = 0,
            r = bi.length,
            a = oe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = fi || N(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(o);
                return a.notifyWith(t, [c, o, i]), 1 > o && l ? i : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: oe.extend({}, e),
                opts: oe.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: fi || N(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = oe.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; n > i; i++) c.tweens[i].run(1);
                    return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                }
            }),
            h = c.props;
        for (F(h, c.opts.specialEasing); r > o; o++)
            if (n = bi[o].call(c, t, h, c.opts)) return n;
        return oe.map(h, L, c), oe.isFunction(c.opts.start) && c.opts.start.call(t, c), oe.fx.timer(oe.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function j(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
                o = e.toLowerCase().match(we) || [];
            if (oe.isFunction(i))
                for (; n = o[s++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function H(t, e, i, n) {
        function s(a) {
            var l;
            return o[a] = !0, oe.each(t[a] || [], function(t, a) {
                var c = a(e, i, n);
                return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        var o = {},
            r = t === qi;
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }

    function W(t, e) {
        var i, n, s = oe.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
        return i && oe.extend(!0, t, i), t
    }

    function R(t, e, i) {
        for (var n, s, o, r, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s)
            for (r in a)
                if (a[r] && a[r].test(s)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in i) o = l[0];
        else {
            for (r in i) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                n || (n = r)
            }
            o = o || n
        }
        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
    }

    function B(t, e, i, n) {
        var s, o, r, a, l, c = {},
            h = t.dataTypes.slice();
        if (h[1])
            for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
        for (o = h.shift(); o;)
            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (r = c[l + " " + o] || c["* " + o], !r)
                for (s in c)
                    if (a = s.split(" "), a[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                        r === !0 ? r = c[s] : c[s] !== !0 && (o = a[0], h.unshift(a[1]));
                        break
                    }
            if (r !== !0)
                if (r && t["throws"]) e = r(e);
                else try {
                    e = r(e)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: r ? u : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function q(t, e, i, n) {
        var s;
        if (oe.isArray(e)) oe.each(e, function(e, s) {
            i || Ki.test(t) ? n(t, s) : q(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
        });
        else if (i || "object" !== oe.type(e)) n(t, e);
        else
            for (s in e) q(t + "[" + s + "]", e[s], i, n)
    }

    function U() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function Y() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function V(t) {
        return oe.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var K = [],
        X = K.slice,
        Q = K.concat,
        G = K.push,
        J = K.indexOf,
        Z = {},
        te = Z.toString,
        ee = Z.hasOwnProperty,
        ie = "".trim,
        ne = {},
        se = "1.11.0",
        oe = function(t, e) {
            return new oe.fn.init(t, e)
        },
        re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        le = /-([\da-z])/gi,
        ce = function(t, e) {
            return e.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: se,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : X.call(this)
        },
        pushStack: function(t) {
            var e = oe.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return oe.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(oe.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: K.sort,
        splice: K.splice
    }, oe.extend = oe.fn.extend = function() {
        var t, e, i, n, s, o, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || oe.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
            if (null != (s = arguments[a]))
                for (n in s) t = r[n], i = s[n], r !== i && (c && i && (oe.isPlainObject(i) || (e = oe.isArray(i))) ? (e ? (e = !1, o = t && oe.isArray(t) ? t : []) : o = t && oe.isPlainObject(t) ? t : {}, r[n] = oe.extend(c, o, i)) : void 0 !== i && (r[n] = i));
        return r
    }, oe.extend({
        expando: "jQuery" + (se + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === oe.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === oe.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return t - parseFloat(t) >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== oe.type(t) || t.nodeType || oe.isWindow(t)) return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (ne.ownLast)
                for (e in t) return ee.call(t, e);
            for (e in t);
            return void 0 === e || ee.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && oe.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(ae, "ms-").replace(le, ce)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var s, o = 0,
                r = t.length,
                a = i(t);
            if (n) {
                if (a)
                    for (; r > o && (s = e.apply(t[o], n), s !== !1); o++);
                else
                    for (o in t)
                        if (s = e.apply(t[o], n), s === !1) break
            } else if (a)
                for (; r > o && (s = e.call(t[o], o, t[o]), s !== !1); o++);
            else
                for (o in t)
                    if (s = e.call(t[o], o, t[o]), s === !1) break; return t
        },
        trim: ie && !ie.call("\ufeff\xa0") ? function(t) {
            return null == t ? "" : ie.call(t)
        } : function(t) {
            return null == t ? "" : (t + "").replace(re, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? oe.merge(n, "string" == typeof t ? [t] : t) : G.call(n, t)), n
        },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (J) return J.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in e && e[i] === t) return i
            }
            return -1
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; i > n;) t[s++] = e[n++];
            if (i !== i)
                for (; void 0 !== e[n];) t[s++] = e[n++];
            return t.length = s, t
        },
        grep: function(t, e, i) {
            for (var n, s = [], o = 0, r = t.length, a = !i; r > o; o++) n = !e(t[o], o), n !== a && s.push(t[o]);
            return s
        },
        map: function(t, e, n) {
            var s, o = 0,
                r = t.length,
                a = i(t),
                l = [];
            if (a)
                for (; r > o; o++) s = e(t[o], o, n), null != s && l.push(s);
            else
                for (o in t) s = e(t[o], o, n), null != s && l.push(s);
            return Q.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            return "string" == typeof e && (s = t[e], e = t, t = s), oe.isFunction(t) ? (i = X.call(arguments, 2), n = function() {
                return t.apply(e || this, i.concat(X.call(arguments)))
            }, n.guid = t.guid = t.guid || oe.guid++, n) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var he = function(t) {
        function e(t, e, i, n) {
            var s, o, r, a, l, c, u, f, g, m;
            if ((e ? e.ownerDocument || e : H) !== I && A(e), e = e || I, i = i || [], !t || "string" != typeof t) return i;
            if (1 !== (a = e.nodeType) && 9 !== a) return [];
            if ($ && !n) {
                if (s = ye.exec(t))
                    if (r = s[1]) {
                        if (9 === a) {
                            if (o = e.getElementById(r), !o || !o.parentNode) return i;
                            if (o.id === r) return i.push(o), i
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && z(e, o) && o.id === r) return i.push(o), i
                    } else {
                        if (s[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
                        if ((r = s[3]) && k.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(r)), i
                    }
                if (k.qsa && (!L || !L.test(t))) {
                    if (f = u = j, g = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (c = d(t), (u = e.getAttribute("id")) ? f = u.replace(we, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + p(c[l]);
                        g = be.test(t) && h(e.parentNode) || e, m = c.join(",")
                    }
                    if (m) try {
                        return Z.apply(i, g.querySelectorAll(m)), i
                    } catch (v) {} finally {
                        u || e.removeAttribute("id")
                    }
                }
            }
            return _(t.replace(le, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > C.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[j] = !0, t
        }

        function s(t) {
            var e = I.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) C.attrHandle[i[n]] = e
        }

        function r(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || K) - (~t.sourceIndex || K);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function c(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function h(t) {
            return t && typeof t.getElementsByTagName !== V && t
        }

        function u() {}

        function d(t, i) {
            var n, s, o, r, a, l, c, h = q[t + " "];
            if (h) return i ? 0 : h.slice(0);
            for (a = t, l = [], c = C.preFilter; a;) {
                (!n || (s = ce.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = he.exec(a)) && (n = s.shift(), o.push({
                    value: n,
                    type: s[0].replace(le, " ")
                }), a = a.slice(n.length));
                for (r in C.filter)!(s = fe[r].exec(a)) || c[r] && !(s = c[r](s)) || (n = s.shift(), o.push({
                    value: n,
                    type: r,
                    matches: s
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : q(t, l).slice(0)
        }

        function p(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function f(t, e, i) {
            var n = e.dir,
                s = i && "parentNode" === n,
                o = R++;
            return e.first ? function(e, i, o) {
                for (; e = e[n];)
                    if (1 === e.nodeType || s) return t(e, i, o)
            } : function(e, i, r) {
                var a, l, c = [W, o];
                if (r) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || s) && t(e, i, r)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) {
                            if (l = e[j] || (e[j] = {}), (a = l[n]) && a[0] === W && a[1] === o) return c[2] = a[2];
                            if (l[n] = c, c[2] = t(e, i, r)) return !0
                        }
            }
        }

        function g(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var s = t.length; s--;)
                    if (!t[s](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function m(t, e, i, n, s) {
            for (var o, r = [], a = 0, l = t.length, c = null != e; l > a; a++)(o = t[a]) && (!i || i(o, n, s)) && (r.push(o), c && e.push(a));
            return r
        }

        function v(t, e, i, s, o, r) {
            return s && !s[j] && (s = v(s)), o && !o[j] && (o = v(o, r)), n(function(n, r, a, l) {
                var c, h, u, d = [],
                    p = [],
                    f = r.length,
                    g = n || w(e || "*", a.nodeType ? [a] : a, []),
                    v = !t || !n && e ? g : m(g, d, t, a, l),
                    y = i ? o || (n ? t : f || s) ? [] : r : v;
                if (i && i(v, y, a, l), s)
                    for (c = m(y, p), s(c, [], a, l), h = c.length; h--;)(u = c[h]) && (y[p[h]] = !(v[p[h]] = u));
                if (n) {
                    if (o || t) {
                        if (o) {
                            for (c = [], h = y.length; h--;)(u = y[h]) && c.push(v[h] = u);
                            o(null, y = [], c, l)
                        }
                        for (h = y.length; h--;)(u = y[h]) && (c = o ? ee.call(n, u) : d[h]) > -1 && (n[c] = !(r[c] = u))
                    }
                } else y = m(y === r ? y.splice(f, y.length) : y), o ? o(null, r, y, l) : Z.apply(r, y)
            })
        }

        function y(t) {
            for (var e, i, n, s = t.length, o = C.relative[t[0].type], r = o || C.relative[" "], a = o ? 1 : 0, l = f(function(t) {
                return t === e
            }, r, !0), c = f(function(t) {
                return ee.call(e, t) > -1
            }, r, !0), h = [
                function(t, i, n) {
                    return !o && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n))
                }
            ]; s > a; a++)
                if (i = C.relative[t[a].type]) h = [f(g(h), i)];
                else {
                    if (i = C.filter[t[a].type].apply(null, t[a].matches), i[j]) {
                        for (n = ++a; s > n && !C.relative[t[n].type]; n++);
                        return v(a > 1 && g(h), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), i, n > a && y(t.slice(a, n)), s > n && y(t = t.slice(n)), s > n && p(t))
                    }
                    h.push(i)
                }
            return g(h)
        }

        function b(t, i) {
            var s = i.length > 0,
                o = t.length > 0,
                r = function(n, r, a, l, c) {
                    var h, u, d, p = 0,
                        f = "0",
                        g = n && [],
                        v = [],
                        y = E,
                        b = n || o && C.find.TAG("*", c),
                        w = W += null == y ? 1 : Math.random() || .1,
                        _ = b.length;
                    for (c && (E = r !== I && r); f !== _ && null != (h = b[f]); f++) {
                        if (o && h) {
                            for (u = 0; d = t[u++];)
                                if (d(h, r, a)) {
                                    l.push(h);
                                    break
                                }
                            c && (W = w)
                        }
                        s && ((h = !d && h) && p--, n && g.push(h))
                    }
                    if (p += f, s && f !== p) {
                        for (u = 0; d = i[u++];) d(g, v, r, a);
                        if (n) {
                            if (p > 0)
                                for (; f--;) g[f] || v[f] || (v[f] = G.call(l));
                            v = m(v)
                        }
                        Z.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return c && (W = w, E = y), g
                };
            return s ? n(r) : r
        }

        function w(t, i, n) {
            for (var s = 0, o = i.length; o > s; s++) e(t, i[s], n);
            return n
        }

        function _(t, e, i, n) {
            var s, o, r, a, l, c = d(t);
            if (!n && 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && k.getById && 9 === e.nodeType && $ && C.relative[o[1].type]) {
                    if (e = (C.find.ID(r.matches[0].replace(_e, xe), e) || [])[0], !e) return i;
                    t = t.slice(o.shift().value.length)
                }
                for (s = fe.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !C.relative[a = r.type]);)
                    if ((l = C.find[a]) && (n = l(r.matches[0].replace(_e, xe), be.test(o[0].type) && h(e.parentNode) || e))) {
                        if (o.splice(s, 1), t = n.length && p(o), !t) return Z.apply(i, n), i;
                        break
                    }
            }
            return T(t, c)(n, e, !$, i, be.test(t) && h(e.parentNode) || e), i
        }
        var x, k, C, S, D, T, E, P, M, A, I, N, $, L, O, F, z, j = "sizzle" + -new Date,
            H = t.document,
            W = 0,
            R = 0,
            B = i(),
            q = i(),
            U = i(),
            Y = function(t, e) {
                return t === e && (M = !0), 0
            },
            V = "undefined",
            K = 1 << 31,
            X = {}.hasOwnProperty,
            Q = [],
            G = Q.pop,
            J = Q.push,
            Z = Q.push,
            te = Q.slice,
            ee = Q.indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (this[e] === t) return e;
                return -1
            },
            ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = se.replace("w", "w#"),
            re = "\\[" + ne + "*(" + se + ")" + ne + "*(?:([*^$|!~]?=)" + ne + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + oe + ")|)|)" + ne + "*\\]",
            ae = ":(" + se + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + re.replace(3, 8) + ")*)|.*)\\)|)",
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ce = new RegExp("^" + ne + "*," + ne + "*"),
            he = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(ae),
            pe = new RegExp("^" + oe + "$"),
            fe = {
                ID: new RegExp("^#(" + se + ")"),
                CLASS: new RegExp("^\\.(" + se + ")"),
                TAG: new RegExp("^(" + se.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ie + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            we = /'|\\/g,
            _e = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            xe = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            };
        try {
            Z.apply(Q = te.call(H.childNodes), H.childNodes), Q[H.childNodes.length].nodeType
        } catch (ke) {
            Z = {
                apply: Q.length ? function(t, e) {
                    J.apply(t, te.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        k = e.support = {}, D = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, A = e.setDocument = function(t) {
            var e, i = t ? t.ownerDocument || t : H,
                n = i.defaultView;
            return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, N = i.documentElement, $ = !D(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
                A()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                A()
            })), k.attributes = s(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), k.getElementsByTagName = s(function(t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
            }), k.getElementsByClassName = ve.test(i.getElementsByClassName) && s(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), k.getById = s(function(t) {
                return N.appendChild(t).id = j, !i.getElementsByName || !i.getElementsByName(j).length
            }), k.getById ? (C.find.ID = function(t, e) {
                if (typeof e.getElementById !== V && $) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, C.filter.ID = function(t) {
                var e = t.replace(_e, xe);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete C.find.ID, C.filter.ID = function(t) {
                var e = t.replace(_e, xe);
                return function(t) {
                    var i = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), C.find.TAG = k.getElementsByTagName ? function(t, e) {
                return typeof e.getElementsByTagName !== V ? e.getElementsByTagName(t) : void 0
            } : function(t, e) {
                var i, n = [],
                    s = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }, C.find.CLASS = k.getElementsByClassName && function(t, e) {
                return typeof e.getElementsByClassName !== V && $ ? e.getElementsByClassName(t) : void 0
            }, O = [], L = [], (k.qsa = ve.test(i.querySelectorAll)) && (s(function(t) {
                t.innerHTML = "<select t=''><option selected=''></option></select>", t.querySelectorAll("[t^='']").length && L.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + ne + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || L.push(":checked")
            }), s(function(t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
            })), (k.matchesSelector = ve.test(F = N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && s(function(t) {
                k.disconnectedMatch = F.call(t, "div"), F.call(t, "[s!='']:x"), O.push("!=", ae)
            }), L = L.length && new RegExp(L.join("|")), O = O.length && new RegExp(O.join("|")), e = ve.test(N.compareDocumentPosition), z = e || ve.test(N.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, Y = e ? function(t, e) {
                if (t === e) return M = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !k.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === H && z(H, t) ? -1 : e === i || e.ownerDocument === H && z(H, e) ? 1 : P ? ee.call(P, t) - ee.call(P, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return M = !0, 0;
                var n, s = 0,
                    o = t.parentNode,
                    a = e.parentNode,
                    l = [t],
                    c = [e];
                if (!o || !a) return t === i ? -1 : e === i ? 1 : o ? -1 : a ? 1 : P ? ee.call(P, t) - ee.call(P, e) : 0;
                if (o === a) return r(t, e);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (n = e; n = n.parentNode;) c.unshift(n);
                for (; l[s] === c[s];) s++;
                return s ? r(l[s], c[s]) : l[s] === H ? -1 : c[s] === H ? 1 : 0
            }, i) : I
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== I && A(t), i = i.replace(ue, "='$1']"), !(!k.matchesSelector || !$ || O && O.test(i) || L && L.test(i))) try {
                var n = F.call(t, i);
                if (n || k.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (s) {}
            return e(i, I, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== I && A(t), z(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== I && A(t);
            var i = C.attrHandle[e.toLowerCase()],
                n = i && X.call(C.attrHandle, e.toLowerCase()) ? i(t, e, !$) : void 0;
            return void 0 !== n ? n : k.attributes || !$ ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                s = 0;
            if (M = !k.detectDuplicates, P = !k.sortStable && t.slice(0), t.sort(Y), M) {
                for (; e = t[s++];) e === t[s] && (n = i.push(s));
                for (; n--;) t.splice(i[n], 1)
            }
            return P = null, t
        }, S = e.getText = function(t) {
            var e, i = "",
                n = 0,
                s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += S(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else
                for (; e = t[n++];) i += S(e);
            return i
        }, C = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
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
                ATTR: function(t) {
                    return t[1] = t[1].replace(_e, xe), t[3] = (t[4] || t[5] || "").replace(_e, xe), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[5] && t[2];
                    return fe.CHILD.test(t[0]) ? null : (t[3] && void 0 !== t[4] ? t[2] = t[4] : i && de.test(i) && (e = d(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(_e, xe).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && B(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== V && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(s) {
                        var o = e.attr(s, t);
                        return null == o ? "!=" === i : i ? (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, i, n, s) {
                    var o = "nth" !== t.slice(0, 3),
                        r = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === s ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var c, h, u, d, p, f, g = o !== r ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (u = e; u = u[g];)
                                        if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? m.firstChild : m.lastChild], r && y) {
                                for (h = m[j] || (m[j] = {}), c = h[t] || [], p = c[0] === W && c[1], d = c[0] === W && c[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (d = p = 0) || f.pop();)
                                    if (1 === u.nodeType && ++d && u === e) {
                                        h[t] = [W, p, d];
                                        break
                                    }
                            } else if (y && (c = (e[j] || (e[j] = {}))[t]) && c[0] === W) d = c[1];
                            else
                                for (;
                                    (u = ++p && u && u[g] || (d = p = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (y && ((u[j] || (u[j] = {}))[t] = [W, d]), u !== e)););
                            return d -= s, d === n || d % n === 0 && d / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var s, o = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[j] ? o(i) : o.length > 1 ? (s = [t, t, "", i], C.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, s = o(t, i), r = s.length; r--;) n = ee.call(t, s[r]), t[n] = !(e[n] = s[r])
                    }) : function(t) {
                        return o(t, 0, s)
                    }) : o
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        s = T(t.replace(le, "$1"));
                    return s[j] ? n(function(t, e, i, n) {
                        for (var o, r = s(t, null, n, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, n, o) {
                        return e[0] = t, s(e, null, o, i), !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                    }
                }),
                lang: n(function(t) {
                    return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(_e, xe).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === N
                },
                focus: function(t) {
                    return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !C.pseudos.empty(t)
                },
                header: function(t) {
                    return me.test(t.nodeName)
                },
                input: function(t) {
                    return ge.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(t, e) {
                    return [e - 1]
                }),
                eq: c(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: c(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: c(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: c(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: c(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[x] = a(x);
        for (x in {
            submit: !0,
            reset: !0
        }) C.pseudos[x] = l(x);
        return u.prototype = C.filters = C.pseudos, C.setFilters = new u, T = e.compile = function(t, e) {
            var i, n = [],
                s = [],
                o = U[t + " "];
            if (!o) {
                for (e || (e = d(t)), i = e.length; i--;) o = y(e[i]), o[j] ? n.push(o) : s.push(o);
                o = U(t, b(s, n))
            }
            return o
        }, k.sortStable = j.split("").sort(Y).join("") === j, k.detectDuplicates = !!M, A(), k.sortDetached = s(function(t) {
            return 1 & t.compareDocumentPosition(I.createElement("div"))
        }), s(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), k.attributes && s(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), s(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(ie, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    oe.find = he, oe.expr = he.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = he.uniqueSort, oe.text = he.getText, oe.isXMLDoc = he.isXML, oe.contains = he.contains;
    var ue = oe.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pe = /^.[^:#\[\.,]*$/;
    oe.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? oe.find.matchesSelector(n, t) ? [n] : [] : oe.find.matches(t, oe.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, oe.fn.extend({
        find: function(t) {
            var e, i = [],
                n = this,
                s = n.length;
            if ("string" != typeof t) return this.pushStack(oe(t).filter(function() {
                for (e = 0; s > e; e++)
                    if (oe.contains(n[e], this)) return !0
            }));
            for (e = 0; s > e; e++) oe.find(t, n[e], i);
            return i = this.pushStack(s > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && ue.test(t) ? oe(t) : t || [], !1).length
        }
    });
    var fe, ge = t.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ve = oe.fn.init = function(t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || fe).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof oe ? e[0] : e, oe.merge(this, oe.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : ge, !0)), de.test(i[1]) && oe.isPlainObject(e))
                        for (i in e) oe.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                if (n = ge.getElementById(i[2]), n && n.parentNode) {
                    if (n.id !== i[2]) return fe.find(t);
                    this.length = 1, this[0] = n
                }
                return this.context = ge, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : oe.isFunction(t) ? "undefined" != typeof fe.ready ? fe.ready(t) : t(oe) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), oe.makeArray(t, this))
        };
    ve.prototype = oe.fn, fe = oe(ge);
    var ye = /^(?:parents|prev(?:Until|All))/,
        be = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.extend({
        dir: function(t, e, i) {
            for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !oe(s).is(i));) 1 === s.nodeType && n.push(s), s = s[e];
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), oe.fn.extend({
        has: function(t) {
            var e, i = oe(t, this),
                n = i.length;
            return this.filter(function() {
                for (e = 0; n > e; e++)
                    if (oe.contains(this, i[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, s = this.length, o = [], r = ue.test(t) || "string" != typeof t ? oe(t, e || this.context) : 0; s > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && oe.find.matchesSelector(i, t))) {
                        o.push(i);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? oe.inArray(this[0], oe(t)) : oe.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(oe.unique(oe.merge(this.get(), oe(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), oe.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return oe.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return oe.dir(t, "parentNode", i)
        },
        next: function(t) {
            return s(t, "nextSibling")
        },
        prev: function(t) {
            return s(t, "previousSibling")
        },
        nextAll: function(t) {
            return oe.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return oe.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return oe.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return oe.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return oe.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return oe.sibling(t.firstChild)
        },
        contents: function(t) {
            return oe.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : oe.merge([], t.childNodes)
        }
    }, function(t, e) {
        oe.fn[t] = function(i, n) {
            var s = oe.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = oe.filter(n, s)), this.length > 1 && (be[t] || (s = oe.unique(s)), ye.test(t) && (s = s.reverse())), this.pushStack(s)
        }
    });
    var we = /\S+/g,
        _e = {};
    oe.Callbacks = function(t) {
        t = "string" == typeof t ? _e[t] || o(t) : oe.extend({}, t);
        var e, i, n, s, r, a, l = [],
            c = !t.once && [],
            h = function(o) {
                for (i = t.memory && o, n = !0, r = a || 0, a = 0, s = l.length, e = !0; l && s > r; r++)
                    if (l[r].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        i = !1;
                        break
                    }
                e = !1, l && (c ? c.length && h(c.shift()) : i ? l = [] : u.disable())
            },
            u = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function o(e) {
                            oe.each(e, function(e, i) {
                                var n = oe.type(i);
                                "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                            })
                        }(arguments), e ? s = l.length : i && (a = n, h(i))
                    }
                    return this
                },
                remove: function() {
                    return l && oe.each(arguments, function(t, i) {
                        for (var n;
                            (n = oe.inArray(i, l, n)) > -1;) l.splice(n, 1), e && (s >= n && s--, r >= n && r--)
                    }), this
                },
                has: function(t) {
                    return t ? oe.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = c = i = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, i || u.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(t, i) {
                    return !l || n && !c || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? c.push(i) : h(i)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return u
    }, oe.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return oe.Deferred(function(i) {
                            oe.each(e, function(e, o) {
                                var r = oe.isFunction(t[e]) && t[e];
                                s[o[1]](function() {
                                    var t = r && r.apply(this, arguments);
                                    t && oe.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? oe.extend(t, n) : n
                    }
                },
                s = {};
            return n.pipe = n.then, oe.each(e, function(t, o) {
                var r = o[2],
                    a = o[3];
                n[o[1]] = r.add, a && r.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() {
                    return s[o[0] + "With"](this === s ? n : this, arguments), this
                }, s[o[0] + "With"] = r.fireWith
            }), n.promise(s), t && t.call(s, s), s
        },
        when: function(t) {
            var e, i, n, s = 0,
                o = X.call(arguments),
                r = o.length,
                a = 1 !== r || t && oe.isFunction(t.promise) ? r : 0,
                l = 1 === a ? t : oe.Deferred(),
                c = function(t, i, n) {
                    return function(s) {
                        i[t] = this, n[t] = arguments.length > 1 ? X.call(arguments) : s, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (r > 1)
                for (e = new Array(r), i = new Array(r), n = new Array(r); r > s; s++) o[s] && oe.isFunction(o[s].promise) ? o[s].promise().done(c(s, n, o)).fail(l.reject).progress(c(s, i, e)) : --a;
            return a || l.resolveWith(n, o), l.promise()
        }
    });
    var xe;
    oe.fn.ready = function(t) {
        return oe.ready.promise().done(t), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--oe.readyWait : !oe.isReady) {
                if (!ge.body) return setTimeout(oe.ready);
                oe.isReady = !0, t !== !0 && --oe.readyWait > 0 || (xe.resolveWith(ge, [oe]), oe.fn.trigger && oe(ge).trigger("ready").off("ready"))
            }
        }
    }), oe.ready.promise = function(e) {
        if (!xe)
            if (xe = oe.Deferred(), "complete" === ge.readyState) setTimeout(oe.ready);
            else if (ge.addEventListener) ge.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
        else {
            ge.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var i = !1;
            try {
                i = null == t.frameElement && ge.documentElement
            } catch (n) {}
            i && i.doScroll && ! function s() {
                if (!oe.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (t) {
                        return setTimeout(s, 50)
                    }
                    r(), oe.ready()
                }
            }()
        }
        return xe.promise(e)
    };
    var ke, Ce = "undefined";
    for (ke in oe(ne)) break;
    ne.ownLast = "0" !== ke, ne.inlineBlockNeedsLayout = !1, oe(function() {
        var t, e, i = ge.getElementsByTagName("body")[0];
        i && (t = ge.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", e = ge.createElement("div"), i.appendChild(t).appendChild(e), typeof e.style.zoom !== Ce && (e.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (ne.inlineBlockNeedsLayout = 3 === e.offsetWidth) && (i.style.zoom = 1)), i.removeChild(t), t = e = null)
    }),
    function() {
        var t = ge.createElement("div");
        if (null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ne.deleteExpando = !1
            }
        }
        t = null
    }(), oe.acceptData = function(t) {
        var e = oe.noData[(t.nodeName + " ").toLowerCase()],
            i = +t.nodeType || 1;
        return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    };
    var Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        De = /([A-Z])/g;
    oe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? oe.cache[t[oe.expando]] : t[oe.expando], !!t && !c(t)
        },
        data: function(t, e, i) {
            return h(t, e, i)
        },
        removeData: function(t, e) {
            return u(t, e)
        },
        _data: function(t, e, i) {
            return h(t, e, i, !0)
        },
        _removeData: function(t, e) {
            return u(t, e, !0)
        }
    }), oe.fn.extend({
        data: function(t, e) {
            var i, n, s, o = this[0],
                r = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (s = oe.data(o), 1 === o.nodeType && !oe._data(o, "parsedAttrs"))) {
                    for (i = r.length; i--;) n = r[i].name, 0 === n.indexOf("data-") && (n = oe.camelCase(n.slice(5)), l(o, n, s[n]));
                    oe._data(o, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function() {
                oe.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                oe.data(this, t, e)
            }) : o ? l(o, t, oe.data(o, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                oe.removeData(this, t)
            })
        }
    }), oe.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = oe._data(t, e), i && (!n || oe.isArray(i) ? n = oe._data(t, e, oe.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = oe.queue(t, e),
                n = i.length,
                s = i.shift(),
                o = oe._queueHooks(t, e),
                r = function() {
                    oe.dequeue(t, e)
                };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, r, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return oe._data(t, i) || oe._data(t, i, {
                empty: oe.Callbacks("once memory").add(function() {
                    oe._removeData(t, e + "queue"), oe._removeData(t, i)
                })
            })
        }
    }), oe.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? oe.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = oe.queue(this, t, e);
                oe._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && oe.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                oe.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                s = oe.Deferred(),
                o = this,
                r = this.length,
                a = function() {
                    --n || s.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) i = oe._data(o[r], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), s.promise(e)
        }
    });
    var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ee = ["Top", "Right", "Bottom", "Left"],
        Pe = function(t, e) {
            return t = e || t, "none" === oe.css(t, "display") || !oe.contains(t.ownerDocument, t)
        },
        Me = oe.access = function(t, e, i, n, s, o, r) {
            var a = 0,
                l = t.length,
                c = null == i;
            if ("object" === oe.type(i)) {
                s = !0;
                for (a in i) oe.access(t, e, a, i[a], !0, o, r)
            } else if (void 0 !== n && (s = !0, oe.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                return c.call(oe(t), i)
            })), e))
                for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
            return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
        },
        Ae = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = ge.createDocumentFragment(),
            e = ge.createElement("div"),
            i = ge.createElement("input");
        if (e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a>", ne.leadingWhitespace = 3 === e.firstChild.nodeType, ne.tbody = !e.getElementsByTagName("tbody").length, ne.htmlSerialize = !!e.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== ge.createElement("nav").cloneNode(!0).outerHTML, i.type = "checkbox", i.checked = !0, t.appendChild(i), ne.appendChecked = i.checked, e.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
            ne.noCloneEvent = !1
        }), e.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete e.test
            } catch (n) {
                ne.deleteExpando = !1
            }
        }
        t = e = i = null
    }(),
    function() {
        var e, i, n = ge.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) i = "on" + e, (ne[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ne[e + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var Ie = /^(?:input|select|textarea)$/i,
        Ne = /^key/,
        $e = /^(?:mouse|contextmenu)|click/,
        Le = /^(?:focusinfocus|focusoutblur)$/,
        Oe = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var o, r, a, l, c, h, u, d, p, f, g, m = oe._data(t);
            if (m) {
                for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = oe.guid++), (r = m.events) || (r = m.events = {}), (h = m.handle) || (h = m.handle = function(t) {
                    return typeof oe === Ce || t && oe.event.triggered === t.type ? void 0 : oe.event.dispatch.apply(h.elem, arguments)
                }, h.elem = t), e = (e || "").match(we) || [""], a = e.length; a--;) o = Oe.exec(e[a]) || [], p = g = o[1], f = (o[2] || "").split(".").sort(), p && (c = oe.event.special[p] || {}, p = (s ? c.delegateType : c.bindType) || p, c = oe.event.special[p] || {}, u = oe.extend({
                    type: p,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && oe.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, l), (d = r[p]) || (d = r[p] = [], d.delegateCount = 0, c.setup && c.setup.call(t, n, f, h) !== !1 || (t.addEventListener ? t.addEventListener(p, h, !1) : t.attachEvent && t.attachEvent("on" + p, h))), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), oe.event.global[p] = !0);
                t = null
            }
        },
        remove: function(t, e, i, n, s) {
            var o, r, a, l, c, h, u, d, p, f, g, m = oe.hasData(t) && oe._data(t);
            if (m && (h = m.events)) {
                for (e = (e || "").match(we) || [""], c = e.length; c--;)
                    if (a = Oe.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (u = oe.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = h[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) r = d[o], !s && g !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (d.splice(o, 1), r.selector && d.delegateCount--, u.remove && u.remove.call(t, r));
                        l && !d.length && (u.teardown && u.teardown.call(t, f, m.handle) !== !1 || oe.removeEvent(t, p, m.handle), delete h[p])
                    } else
                        for (p in h) oe.event.remove(t, p + e[c], i, n, !0);
                oe.isEmptyObject(h) && (delete m.handle, oe._removeData(t, "events"))
            }
        },
        trigger: function(e, i, n, s) {
            var o, r, a, l, c, h, u, d = [n || ge],
                p = ee.call(e, "type") ? e.type : e,
                f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = h = n = n || ge, 3 !== n.nodeType && 8 !== n.nodeType && !Le.test(p + oe.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), r = p.indexOf(":") < 0 && "on" + p, e = e[oe.expando] ? e : new oe.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : oe.makeArray(i, [e]), c = oe.event.special[p] || {}, s || !c.trigger || c.trigger.apply(n, i) !== !1)) {
                if (!s && !c.noBubble && !oe.isWindow(n)) {
                    for (l = c.delegateType || p, Le.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), h = a;
                    h === (n.ownerDocument || ge) && d.push(h.defaultView || h.parentWindow || t)
                }
                for (u = 0;
                    (a = d[u++]) && !e.isPropagationStopped();) e.type = u > 1 ? l : c.bindType || p, o = (oe._data(a, "events") || {})[e.type] && oe._data(a, "handle"), o && o.apply(a, i), o = r && a[r], o && o.apply && oe.acceptData(a) && (e.result = o.apply(a, i), e.result === !1 && e.preventDefault());
                if (e.type = p, !s && !e.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), i) === !1) && oe.acceptData(n) && r && n[p] && !oe.isWindow(n)) {
                    h = n[r], h && (n[r] = null), oe.event.triggered = p;
                    try {
                        n[p]()
                    } catch (g) {}
                    oe.event.triggered = void 0, h && (n[r] = h)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = oe.event.fix(t);
            var e, i, n, s, o, r = [],
                a = X.call(arguments),
                l = (oe._data(this, "events") || {})[t.type] || [],
                c = oe.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (r = oe.event.handlers.call(this, t, l), e = 0;
                    (s = r[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = s.elem, o = 0;
                        (n = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((oe.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, o, r = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (s = [], o = 0; a > o; o++) n = e[o], i = n.selector + " ", void 0 === s[i] && (s[i] = n.needsContext ? oe(i, this).index(l) >= 0 : oe.find(i, this, null, [l]).length), s[i] && s.push(n);
                        s.length && r.push({
                            elem: l,
                            handlers: s
                        })
                    }
            return a < e.length && r.push({
                elem: this,
                handlers: e.slice(a)
            }), r
        },
        fix: function(t) {
            if (t[oe.expando]) return t;
            var e, i, n, s = t.type,
                o = t,
                r = this.fixHooks[s];
            for (r || (this.fixHooks[s] = r = $e.test(s) ? this.mouseHooks : Ne.test(s) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new oe.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
            return t.target || (t.target = o.srcElement || ge), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, s, o = e.button,
                    r = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || ge, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement : r), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return oe.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var s = oe.extend(new oe.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? oe.event.trigger(s, null, e) : oe.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
        }
    }, oe.removeEvent = ge.removeEventListener ? function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    } : function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === Ce && (t[n] = null), t.detachEvent(n, i))
    }, oe.Event = function(t, e) {
        return this instanceof oe.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && (t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault()) ? d : p) : this.type = t, e && oe.extend(this, e), this.timeStamp = t && t.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(t, e)
    }, oe.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = d, this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        oe.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    s = t.relatedTarget,
                    o = t.handleObj;
                return (!s || s !== n && !oe.contains(n, s)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), ne.submitBubbles || (oe.event.special.submit = {
        setup: function() {
            return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    i = oe.nodeName(e, "input") || oe.nodeName(e, "button") ? e.form : void 0;
                i && !oe._data(i, "submitBubbles") && (oe.event.add(i, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), oe._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && oe.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (oe.event.special.change = {
        setup: function() {
            return Ie.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), oe.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, t, !0)
            })), !1) : void oe.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Ie.test(e.nodeName) && !oe._data(e, "changeBubbles") && (oe.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || oe.event.simulate("change", this.parentNode, t, !0)
                }), oe._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return oe.event.remove(this, "._change"), !Ie.test(this.nodeName)
        }
    }), ne.focusinBubbles || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            oe.event.simulate(e, t.target, oe.event.fix(t), !0)
        };
        oe.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    s = oe._data(n, e);
                s || n.addEventListener(t, i, !0), oe._data(n, e, (s || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    s = oe._data(n, e) - 1;
                s ? oe._data(n, e, s) : (n.removeEventListener(t, i, !0), oe._removeData(n, e))
            }
        }
    }), oe.fn.extend({
        on: function(t, e, i, n, s) {
            var o, r;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (o in t) this.on(o, e, i, t[o], s);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = p;
            else if (!n) return this;
            return 1 === s && (r = n, n = function(t) {
                return oe().off(t), r.apply(this, arguments)
            }, n.guid = r.guid || (r.guid = oe.guid++)), this.each(function() {
                oe.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, oe(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function() {
                oe.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                oe.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? oe.event.trigger(t, e, i, !0) : void 0
        }
    });
    var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ze = / jQuery\d+="(?:null|\d+)"/g,
        je = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
        He = /^\s+/,
        We = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Re = /<([\w:]+)/,
        Be = /<tbody/i,
        qe = /<|&#?\w+;/,
        Ue = /<(?:script|style|link)/i,
        Ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ve = /^$|\/(?:java|ecma)script/i,
        Ke = /^true\/(.*)/,
        Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ge = g(ge),
        Je = Ge.appendChild(ge.createElement("div"));
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td, oe.extend({
        clone: function(t, e, i) {
            var n, s, o, r, a, l = oe.contains(t.ownerDocument, t);
            if (ne.html5Clone || oe.isXMLDoc(t) || !je.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Je.innerHTML = t.outerHTML, Je.removeChild(o = Je.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || oe.isXMLDoc(t)))
                for (n = m(o), a = m(t), r = 0; null != (s = a[r]); ++r) n[r] && k(s, n[r]);
            if (e)
                if (i)
                    for (a = a || m(t), n = n || m(o), r = 0; null != (s = a[r]); r++) x(s, n[r]);
                else x(t, o);
            return n = m(o, "script"), n.length > 0 && _(n, !l && m(t, "script")), n = a = s = null, o
        },
        buildFragment: function(t, e, i, n) {
            for (var s, o, r, a, l, c, h, u = t.length, d = g(e), p = [], f = 0; u > f; f++)
                if (o = t[f], o || 0 === o)
                    if ("object" === oe.type(o)) oe.merge(p, o.nodeType ? [o] : o);
                    else if (qe.test(o)) {
                for (a = a || d.appendChild(e.createElement("div")), l = (Re.exec(o) || ["", ""])[1].toLowerCase(), h = Qe[l] || Qe._default, a.innerHTML = h[1] + o.replace(We, "<$1></$2>") + h[2], s = h[0]; s--;) a = a.lastChild;
                if (!ne.leadingWhitespace && He.test(o) && p.push(e.createTextNode(He.exec(o)[0])), !ne.tbody)
                    for (o = "table" !== l || Be.test(o) ? "<table>" !== h[1] || Be.test(o) ? 0 : a : a.firstChild, s = o && o.childNodes.length; s--;) oe.nodeName(c = o.childNodes[s], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (oe.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = d.lastChild
            } else p.push(e.createTextNode(o));
            for (a && d.removeChild(a), ne.appendChecked || oe.grep(m(p, "input"), v), f = 0; o = p[f++];)
                if ((!n || -1 === oe.inArray(o, n)) && (r = oe.contains(o.ownerDocument, o), a = m(d.appendChild(o), "script"), r && _(a), i))
                    for (s = 0; o = a[s++];) Ve.test(o.type || "") && i.push(o);
            return a = null, d
        },
        cleanData: function(t, e) {
            for (var i, n, s, o, r = 0, a = oe.expando, l = oe.cache, c = ne.deleteExpando, h = oe.event.special; null != (i = t[r]); r++)
                if ((e || oe.acceptData(i)) && (s = i[a], o = s && l[s])) {
                    if (o.events)
                        for (n in o.events) h[n] ? oe.event.remove(i, n) : oe.removeEvent(i, n, o.handle);
                    l[s] && (delete l[s], c ? delete i[a] : typeof i.removeAttribute !== Ce ? i.removeAttribute(a) : i[a] = null, K.push(s))
                }
        }
    }), oe.fn.extend({
        text: function(t) {
            return Me(this, function(t) {
                return void 0 === t ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ge).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? oe.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || oe.cleanData(m(i)), i.parentNode && (e && oe.contains(i.ownerDocument, i) && _(m(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && oe.cleanData(m(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && oe.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return oe.clone(this, t, e)
            })
        },
        html: function(t) {
            return Me(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(ze, "") : void 0;
                if (!("string" != typeof t || Ue.test(t) || !ne.htmlSerialize && je.test(t) || !ne.leadingWhitespace && He.test(t) || Qe[(Re.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(We, "<$1></$2>");
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (oe.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (s) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, oe.cleanData(m(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = Q.apply([], t);
            var i, n, s, o, r, a, l = 0,
                c = this.length,
                h = this,
                u = c - 1,
                d = t[0],
                p = oe.isFunction(d);
            if (p || c > 1 && "string" == typeof d && !ne.checkClone && Ye.test(d)) return this.each(function(i) {
                var n = h.eq(i);
                p && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
            });
            if (c && (a = oe.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                for (o = oe.map(m(a, "script"), b), s = o.length; c > l; l++) n = a, l !== u && (n = oe.clone(n, !0, !0), s && oe.merge(o, m(n, "script"))), e.call(this[l], n, l);
                if (s)
                    for (r = o[o.length - 1].ownerDocument, oe.map(o, w), l = 0; s > l; l++) n = o[l], Ve.test(n.type || "") && !oe._data(n, "globalEval") && oe.contains(r, n) && (n.src ? oe._evalUrl && oe._evalUrl(n.src) : oe.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Xe, "")));
                a = i = null
            }
            return this
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        oe.fn[t] = function(t) {
            for (var i, n = 0, s = [], o = oe(t), r = o.length - 1; r >= n; n++) i = n === r ? this : this.clone(!0), oe(o[n])[e](i), G.apply(s, i.get());
            return this.pushStack(s)
        }
    });
    var Ze, ti = {};
    ! function() {
        var t, e, i = ge.createElement("div"),
            n = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = i.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", ne.opacity = /^0.5/.test(t.style.opacity), ne.cssFloat = !!t.style.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === i.style.backgroundClip, t = i = null, ne.shrinkWrapBlocks = function() {
            var t, i, s, o;
            if (null == e) {
                if (t = ge.getElementsByTagName("body")[0], !t) return;
                o = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", i = ge.createElement("div"), s = ge.createElement("div"), t.appendChild(i).appendChild(s), e = !1, typeof s.style.zoom !== Ce && (s.style.cssText = n + ";width:1px;padding:1px;zoom:1", s.innerHTML = "<div></div>", s.firstChild.style.width = "5px", e = 3 !== s.offsetWidth), t.removeChild(i), t = i = s = null
            }
            return e
        }
    }();
    var ei, ii, ni = /^margin/,
        si = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"),
        oi = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ei = function(t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
    }, ii = function(t, e, i) {
        var n, s, o, r, a = t.style;
        return i = i || ei(t), r = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== r || oe.contains(t.ownerDocument, t) || (r = oe.style(t, e)), si.test(r) && ni.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)), void 0 === r ? r : r + ""
    }) : ge.documentElement.currentStyle && (ei = function(t) {
        return t.currentStyle
    }, ii = function(t, e, i) {
        var n, s, o, r, a = t.style;
        return i = i || ei(t), r = i ? i[e] : void 0, null == r && a && a[e] && (r = a[e]), si.test(r) && !oi.test(e) && (n = a.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : r, r = a.pixelLeft + "px", a.left = n, o && (s.left = o)), void 0 === r ? r : r + "" || "auto"
    }),
    function() {
        function e() {
            var e, i, n = ge.getElementsByTagName("body")[0];
            n && (e = ge.createElement("div"), i = ge.createElement("div"), e.style.cssText = c, n.appendChild(e).appendChild(i), i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", oe.swap(n, null != n.style.zoom ? {
                zoom: 1
            } : {}, function() {
                s = 4 === i.offsetWidth
            }), o = !0, r = !1, a = !0, t.getComputedStyle && (r = "1%" !== (t.getComputedStyle(i, null) || {}).top, o = "4px" === (t.getComputedStyle(i, null) || {
                width: "4px"
            }).width), n.removeChild(e), i = n = null)
        }
        var i, n, s, o, r, a, l = ge.createElement("div"),
            c = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            h = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = l.getElementsByTagName("a")[0], i.style.cssText = "float:left;opacity:.5", ne.opacity = /^0.5/.test(i.style.opacity), ne.cssFloat = !!i.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === l.style.backgroundClip, i = l = null, oe.extend(ne, {
            reliableHiddenOffsets: function() {
                if (null != n) return n;
                var t, e, i, s = ge.createElement("div"),
                    o = ge.getElementsByTagName("body")[0];
                if (o) return s.setAttribute("className", "t"), s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = ge.createElement("div"), t.style.cssText = c, o.appendChild(t).appendChild(s), s.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = s.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", i = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", n = i && 0 === e[0].offsetHeight, o.removeChild(t), s = o = null, n
            },
            boxSizing: function() {
                return null == s && e(), s
            },
            boxSizingReliable: function() {
                return null == o && e(), o
            },
            pixelPosition: function() {
                return null == r && e(), r
            },
            reliableMarginRight: function() {
                var e, i, n, s;
                if (null == a && t.getComputedStyle) {
                    if (e = ge.getElementsByTagName("body")[0], !e) return;
                    i = ge.createElement("div"), n = ge.createElement("div"), i.style.cssText = c, e.appendChild(i).appendChild(n), s = n.appendChild(ge.createElement("div")), s.style.cssText = n.style.cssText = h, s.style.marginRight = s.style.width = "0", n.style.width = "1px", a = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight), e.removeChild(i)
                }
                return a
            }
        })
    }(), oe.swap = function(t, e, i, n) {
        var s, o, r = {};
        for (o in e) r[o] = t.style[o], t.style[o] = e[o];
        s = i.apply(t, n || []);
        for (o in e) t.style[o] = r[o];
        return s
    };
    var ri = /alpha\([^)]*\)/i,
        ai = /opacity\s*=\s*([^)]*)/,
        li = /^(none|table(?!-c[ea]).+)/,
        ci = new RegExp("^(" + Te + ")(.*)$", "i"),
        hi = new RegExp("^([+-])=(" + Te + ")", "i"),
        ui = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        di = {
            letterSpacing: 0,
            fontWeight: 400
        },
        pi = ["Webkit", "O", "Moz", "ms"];
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = ii(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, r, a = oe.camelCase(e),
                    l = t.style;
                if (e = oe.cssProps[a] || (oe.cssProps[a] = T(l, a)), r = oe.cssHooks[e] || oe.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : l[e];
                if (o = typeof i, "string" === o && (s = hi.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(oe.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || oe.cssNumber[a] || (i += "px"), ne.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(t, i, n))))) try {
                    l[e] = "", l[e] = i
                } catch (c) {}
            }
        },
        css: function(t, e, i, n) {
            var s, o, r, a = oe.camelCase(e);
            return e = oe.cssProps[a] || (oe.cssProps[a] = T(t.style, a)), r = oe.cssHooks[e] || oe.cssHooks[a], r && "get" in r && (o = r.get(t, !0, i)), void 0 === o && (o = ii(t, e, n)), "normal" === o && e in di && (o = di[e]), "" === i || i ? (s = parseFloat(o), i === !0 || oe.isNumeric(s) ? s || 0 : o) : o
        }
    }), oe.each(["height", "width"], function(t, e) {
        oe.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? 0 === t.offsetWidth && li.test(oe.css(t, "display")) ? oe.swap(t, ui, function() {
                    return A(t, e, n)
                }) : A(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var s = n && ei(t);
                return P(t, i, n ? M(t, e, n, ne.boxSizing() && "border-box" === oe.css(t, "boxSizing", !1, s), s) : 0)
            }
        }
    }), ne.opacity || (oe.cssHooks.opacity = {
        get: function(t, e) {
            return ai.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var i = t.style,
                n = t.currentStyle,
                s = oe.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === oe.trim(o.replace(ri, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = ri.test(o) ? o.replace(ri, s) : o + " " + s)
        }
    }), oe.cssHooks.marginRight = D(ne.reliableMarginRight, function(t, e) {
        return e ? oe.swap(t, {
            display: "inline-block"
        }, ii, [t, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        oe.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + Ee[n] + e] = o[n] || o[n - 2] || o[0];
                return s
            }
        }, ni.test(t) || (oe.cssHooks[t + e].set = P)
    }), oe.fn.extend({
        css: function(t, e) {
            return Me(this, function(t, e, i) {
                var n, s, o = {},
                    r = 0;
                if (oe.isArray(e)) {
                    for (n = ei(t), s = e.length; s > r; r++) o[e[r]] = oe.css(t, e[r], !1, n);
                    return o
                }
                return void 0 !== i ? oe.style(t, e, i) : oe.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Pe(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = I, I.prototype = {
        constructor: I,
        init: function(t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (oe.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = I.propHooks[this.prop];
            return t && t.get ? t.get(this) : I.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = I.propHooks[this.prop];
            return this.pos = e = this.options.duration ? oe.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : I.propHooks._default.set(this), this
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = oe.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                oe.fx.step[t.prop] ? oe.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[oe.cssProps[t.prop]] || oe.cssHooks[t.prop]) ? oe.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, oe.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, oe.fx = I.prototype.init, oe.fx.step = {};
    var fi, gi, mi = /^(?:toggle|show|hide)$/,
        vi = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"),
        yi = /queueHooks$/,
        bi = [O],
        wi = {
            "*": [
                function(t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        s = vi.exec(e),
                        o = s && s[3] || (oe.cssNumber[t] ? "" : "px"),
                        r = (oe.cssNumber[t] || "px" !== o && +n) && vi.exec(oe.css(i.elem, t)),
                        a = 1,
                        l = 20;
                    if (r && r[3] !== o) {
                        o = o || r[3], s = s || [], r = +n || 1;
                        do a = a || ".5", r /= a, oe.style(i.elem, t, r + o); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                    }
                    return s && (r = i.start = +r || +n || 0, i.unit = o, i.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2]), i
                }
            ]
        };
    oe.Animation = oe.extend(z, {
        tweener: function(t, e) {
            oe.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var i, n = 0, s = t.length; s > n; n++) i = t[n], wi[i] = wi[i] || [], wi[i].unshift(e)
        },
        prefilter: function(t, e) {
            e ? bi.unshift(t) : bi.push(t)
        }
    }), oe.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? oe.extend({}, t) : {
            complete: i || !i && e || oe.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !oe.isFunction(e) && e
        };
        return n.duration = oe.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in oe.fx.speeds ? oe.fx.speeds[n.duration] : oe.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            oe.isFunction(n.old) && n.old.call(this), n.queue && oe.dequeue(this, n.queue)
        }, n
    }, oe.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(Pe).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(t, e, i, n) {
            var s = oe.isEmptyObject(t),
                o = oe.speed(e, i, n),
                r = function() {
                    var e = z(this, oe.extend({}, t), o);
                    (s || oe._data(this, "finish")) && e.stop(!0)
                };
            return r.finish = r, s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(t, e, i) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    s = null != t && t + "queueHooks",
                    o = oe.timers,
                    r = oe._data(this);
                if (s) r[s] && r[s].stop && n(r[s]);
                else
                    for (s in r) r[s] && r[s].stop && yi.test(s) && n(r[s]);
                for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                (e || !i) && oe.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, i = oe._data(this),
                    n = i[t + "queue"],
                    s = i[t + "queueHooks"],
                    o = oe.timers,
                    r = n ? n.length : 0;
                for (i.finish = !0, oe.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), oe.each(["toggle", "show", "hide"], function(t, e) {
        var i = oe.fn[e];
        oe.fn[e] = function(t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate($(e, !0), t, n, s)
        }
    }), oe.each({
        slideDown: $("show"),
        slideUp: $("hide"),
        slideToggle: $("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        oe.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), oe.timers = [], oe.fx.tick = function() {
        var t, e = oe.timers,
            i = 0;
        for (fi = oe.now(); i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
        e.length || oe.fx.stop(), fi = void 0
    }, oe.fx.timer = function(t) {
        oe.timers.push(t), t() ? oe.fx.start() : oe.timers.pop()
    }, oe.fx.interval = 13, oe.fx.start = function() {
        gi || (gi = setInterval(oe.fx.tick, oe.fx.interval))
    }, oe.fx.stop = function() {
        clearInterval(gi), gi = null
    }, oe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, oe.fn.delay = function(t, e) {
        return t = oe.fx ? oe.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
            var n = setTimeout(e, t);
            i.stop = function() {
                clearTimeout(n)
            }
        })
    },
    function() {
        var t, e, i, n, s = ge.createElement("div");
        s.setAttribute("className", "t"), s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = s.getElementsByTagName("a")[0], i = ge.createElement("select"), n = i.appendChild(ge.createElement("option")), e = s.getElementsByTagName("input")[0], t.style.cssText = "top:1px", ne.getSetAttribute = "t" !== s.className, ne.style = /top/.test(t.getAttribute("style")), ne.hrefNormalized = "/a" === t.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = n.selected, ne.enctype = !!ge.createElement("form").enctype, i.disabled = !0, ne.optDisabled = !n.disabled, e = ge.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value, t = e = i = n = s = null
    }();
    var _i = /\r/g;
    oe.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0]; {
                if (arguments.length) return n = oe.isFunction(t), this.each(function(i) {
                    var s;
                    1 === this.nodeType && (s = n ? t.call(this, i, oe(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : oe.isArray(s) && (s = oe.map(s, function(t) {
                        return null == t ? "" : t + ""
                    })), e = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                });
                if (s) return e = oe.valHooks[s.type] || oe.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(_i, "") : null == i ? "" : i)
            }
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = oe.find.attr(t, "value");
                    return null != e ? e : oe.text(t)
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, r = o ? null : [], a = o ? s + 1 : n.length, l = 0 > s ? a : o ? s : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== s || (ne.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && oe.nodeName(i.parentNode, "optgroup"))) {
                            if (e = oe(i).val(), o) return e;
                            r.push(e)
                        }
                    return r
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, o = oe.makeArray(e), r = s.length; r--;)
                        if (n = s[r], oe.inArray(oe.valHooks.option.get(n), o) >= 0) try {
                            n.selected = i = !0
                        } catch (a) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(t, e) {
                return oe.isArray(e) ? t.checked = oe.inArray(oe(t).val(), e) >= 0 : void 0
            }
        }, ne.checkOn || (oe.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var xi, ki, Ci = oe.expr.attrHandle,
        Si = /^(?:checked|selected)$/i,
        Di = ne.getSetAttribute,
        Ti = ne.input;
    oe.fn.extend({
        attr: function(t, e) {
            return Me(this, oe.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                oe.removeAttr(this, t)
            })
        }
    }), oe.extend({
        attr: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Ce ? oe.prop(t, e, i) : (1 === o && oe.isXMLDoc(t) || (e = e.toLowerCase(), n = oe.attrHooks[e] || (oe.expr.match.bool.test(e) ? ki : xi)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = oe.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void oe.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var i, n, s = 0,
                o = e && e.match(we);
            if (o && 1 === t.nodeType)
                for (; i = o[s++];) n = oe.propFix[i] || i, oe.expr.match.bool.test(i) ? Ti && Di || !Si.test(i) ? t[n] = !1 : t[oe.camelCase("default-" + i)] = t[n] = !1 : oe.attr(t, i, ""), t.removeAttribute(Di ? i : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ne.radioValue && "radio" === e && oe.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), ki = {
        set: function(t, e, i) {
            return e === !1 ? oe.removeAttr(t, i) : Ti && Di || !Si.test(i) ? t.setAttribute(!Di && oe.propFix[i] || i, i) : t[oe.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = Ci[e] || oe.find.attr;
        Ci[e] = Ti && Di || !Si.test(e) ? function(t, e, n) {
            var s, o;
            return n || (o = Ci[e], Ci[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, Ci[e] = o), s
        } : function(t, e, i) {
            return i ? void 0 : t[oe.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Ti && Di || (oe.attrHooks.value = {
        set: function(t, e, i) {
            return oe.nodeName(t, "input") ? void(t.defaultValue = e) : xi && xi.set(t, e, i)
        }
    }), Di || (xi = {
        set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
        }
    }, Ci.id = Ci.name = Ci.coords = function(t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }, oe.valHooks.button = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : void 0
        },
        set: xi.set
    }, oe.attrHooks.contenteditable = {
        set: function(t, e, i) {
            xi.set(t, "" === e ? !1 : e, i)
        }
    }, oe.each(["width", "height"], function(t, e) {
        oe.attrHooks[e] = {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }
        }
    })), ne.style || (oe.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Ei = /^(?:input|select|textarea|button|object)$/i,
        Pi = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(t, e) {
            return Me(this, oe.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = oe.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), oe.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, i) {
            var n, s, o, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return o = 1 !== r || !oe.isXMLDoc(t), o && (e = oe.propFix[e] || e, s = oe.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = oe.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Ei.test(t.nodeName) || Pi.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || oe.each(["href", "src"], function(t, e) {
        oe.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ne.optSelected || (oe.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    }), ne.enctype || (oe.propFix.enctype = "encoding");
    var Mi = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(t) {
            var e, i, n, s, o, r, a = 0,
                l = this.length,
                c = "string" == typeof t && t;
            if (oe.isFunction(t)) return this.each(function(e) {
                oe(this).addClass(t.call(this, e, this.className))
            });
            if (c)
                for (e = (t || "").match(we) || []; l > a; a++)
                    if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Mi, " ") : " ")) {
                        for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        r = oe.trim(n), i.className !== r && (i.className = r)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, s, o, r, a = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof t && t;
            if (oe.isFunction(t)) return this.each(function(e) {
                oe(this).removeClass(t.call(this, e, this.className))
            });
            if (c)
                for (e = (t || "").match(we) || []; l > a; a++)
                    if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Mi, " ") : "")) {
                        for (o = 0; s = e[o++];)
                            for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                        r = t ? oe.trim(n) : "", i.className !== r && (i.className = r)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(oe.isFunction(t) ? function(i) {
                oe(this).toggleClass(t.call(this, i, this.className, e), e)
            } : function() {
                if ("string" === i)
                    for (var e, n = 0, s = oe(this), o = t.match(we) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else(i === Ce || "boolean" === i) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : oe._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Mi, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        oe.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), oe.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var Ai = oe.now(),
        Ii = /\?/,
        Ni = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i, n = null,
            s = oe.trim(e + "");
        return s && !oe.trim(s.replace(Ni, function(t, e, s, o) {
            return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !o - !s, "")
        })) ? Function("return " + s)() : oe.error("Invalid JSON: " + e)
    }, oe.parseXML = function(e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch (s) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + e), i
    };
    var $i, Li, Oi = /#.*$/,
        Fi = /([?&])_=[^&]*/,
        zi = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        ji = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Hi = /^(?:GET|HEAD)$/,
        Wi = /^\/\//,
        Ri = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Bi = {},
        qi = {},
        Ui = "*/".concat("*");
    try {
        Li = location.href
    } catch (Yi) {
        Li = ge.createElement("a"), Li.href = "", Li = Li.href
    }
    $i = Ri.exec(Li.toLowerCase()) || [], oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Li,
            type: "GET",
            isLocal: ji.test($i[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ui,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? W(W(t, oe.ajaxSettings), e) : W(oe.ajaxSettings, t)
        },
        ajaxPrefilter: j(Bi),
        ajaxTransport: j(qi),
        ajax: function(t, e) {
            function i(t, e, i, n) {
                var s, h, v, y, w, x = e;
                2 !== b && (b = 2, a && clearTimeout(a), c = void 0, r = n || "", _.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (y = R(u, _, i)), y = B(u, y, _, s), s ? (u.ifModified && (w = _.getResponseHeader("Last-Modified"), w && (oe.lastModified[o] = w), w = _.getResponseHeader("etag"), w && (oe.etag[o] = w)), 204 === t || "HEAD" === u.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = y.state, h = y.data, v = y.error, s = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), _.status = t, _.statusText = (e || x) + "", s ? f.resolveWith(d, [h, x, _]) : f.rejectWith(d, [_, x, v]), _.statusCode(m), m = void 0, l && p.trigger(s ? "ajaxSuccess" : "ajaxError", [_, u, s ? h : v]), g.fireWith(d, [_, x]), l && (p.trigger("ajaxComplete", [_, u]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, s, o, r, a, l, c, h, u = oe.ajaxSetup({}, e),
                d = u.context || u,
                p = u.context && (d.nodeType || d.jquery) ? oe(d) : oe.event,
                f = oe.Deferred(),
                g = oe.Callbacks("once memory"),
                m = u.statusCode || {},
                v = {},
                y = {},
                b = 0,
                w = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!h)
                                for (h = {}; e = zi.exec(r);) h[e[1].toLowerCase()] = e[2];
                            e = h[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? r : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return b || (t = y[i] = y[i] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (u.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) m[e] = [m[e], t[e]];
                            else _.always(t[_.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return c && c.abort(e), i(0, e), this
                    }
                };
            if (f.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, u.url = ((t || u.url || Li) + "").replace(Oi, "").replace(Wi, $i[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = oe.trim(u.dataType || "*").toLowerCase().match(we) || [""], null == u.crossDomain && (n = Ri.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === $i[1] && n[2] === $i[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === ($i[3] || ("http:" === $i[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = oe.param(u.data, u.traditional)), H(Bi, u, e, _), 2 === b) return _;
            l = u.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Hi.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (Ii.test(o) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Fi.test(o) ? o.replace(Fi, "$1_=" + Ai++) : o + (Ii.test(o) ? "&" : "?") + "_=" + Ai++)), u.ifModified && (oe.lastModified[o] && _.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && _.setRequestHeader("If-None-Match", oe.etag[o])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && _.setRequestHeader("Content-Type", u.contentType), _.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Ui + "; q=0.01" : "") : u.accepts["*"]);
            for (s in u.headers) _.setRequestHeader(s, u.headers[s]);
            if (u.beforeSend && (u.beforeSend.call(d, _, u) === !1 || 2 === b)) return _.abort();
            w = "abort";
            for (s in {
                success: 1,
                error: 1,
                complete: 1
            }) _[s](u[s]);
            if (c = H(qi, u, e, _)) {
                _.readyState = 1, l && p.trigger("ajaxSend", [_, u]), u.async && u.timeout > 0 && (a = setTimeout(function() {
                    _.abort("timeout")
                }, u.timeout));
                try {
                    b = 1, c.send(v, i)
                } catch (x) {
                    if (!(2 > b)) throw x;
                    i(-1, x)
                }
            } else i(-1, "No Transport");
            return _
        },
        getJSON: function(t, e, i) {
            return oe.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return oe.get(t, void 0, e, "script")
        }
    }), oe.each(["get", "post"], function(t, e) {
        oe[e] = function(t, i, n, s) {
            return oe.isFunction(i) && (s = s || n, n = i, i = void 0), oe.ajax({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            })
        }
    }), oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        oe.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), oe._evalUrl = function(t) {
        return oe.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function(t) {
            if (oe.isFunction(t)) return this.each(function(e) {
                oe(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = oe(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(oe.isFunction(t) ? function(e) {
                oe(this).wrapInner(t.call(this, e))
            } : function() {
                var e = oe(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = oe.isFunction(t);
            return this.each(function(i) {
                oe(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (t.style && t.style.display || oe.css(t, "display"))
    }, oe.expr.filters.visible = function(t) {
        return !oe.expr.filters.hidden(t)
    };
    var Vi = /%20/g,
        Ki = /\[\]$/,
        Xi = /\r?\n/g,
        Qi = /^(?:submit|button|image|reset|file)$/i,
        Gi = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(t, e) {
        var i, n = [],
            s = function(t, e) {
                e = oe.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(t) || t.jquery && !oe.isPlainObject(t)) oe.each(t, function() {
            s(this.name, this.value)
        });
        else
            for (i in t) q(i, t[i], e, s);
        return n.join("&").replace(Vi, "+")
    }, oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = oe.prop(this, "elements");
                return t ? oe.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !oe(this).is(":disabled") && Gi.test(this.nodeName) && !Qi.test(t) && (this.checked || !Ae.test(t))
            }).map(function(t, e) {
                var i = oe(this).val();
                return null == i ? null : oe.isArray(i) ? oe.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Xi, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Xi, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || Y()
    } : U;
    var Ji = 0,
        Zi = {},
        tn = oe.ajaxSettings.xhr();
    t.ActiveXObject && oe(t).on("unload", function() {
        for (var t in Zi) Zi[t](void 0, !0)
    }), ne.cors = !!tn && "withCredentials" in tn, tn = ne.ajax = !!tn, tn && oe.ajaxTransport(function(t) {
        if (!t.crossDomain || ne.cors) {
            var e;
            return {
                send: function(i, n) {
                    var s, o = t.xhr(),
                        r = ++Ji;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) o[s] = t.xhrFields[s];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
                    o.send(t.hasContent && t.data || null), e = function(i, s) {
                        var a, l, c;
                        if (e && (s || 4 === o.readyState))
                            if (delete Zi[r], e = void 0, o.onreadystatechange = oe.noop, s) 4 !== o.readyState && o.abort();
                            else {
                                c = {}, a = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (h) {
                                    l = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                            }
                        c && n(a, l, c, o.getAllResponseHeaders())
                    }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Zi[r] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return oe.globalEval(t), t
            }
        }
    }), oe.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), oe.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i = ge.head || oe("head")[0] || ge.documentElement;
            return {
                send: function(n, s) {
                    e = ge.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                    }, i.insertBefore(e, i.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        nn = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = en.pop() || oe.expando + "_" + Ai++;
            return this[t] = !0, t
        }
    }), oe.ajaxPrefilter("json jsonp", function(e, i, n) {
        var s, o, r, a = e.jsonp !== !1 && (nn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = oe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(nn, "$1" + s) : e.jsonp !== !1 && (e.url += (Ii.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
            return r || oe.error(s + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = t[s], t[s] = function() {
            r = arguments
        }, n.always(function() {
            t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, en.push(s)), r && oe.isFunction(o) && o(r[0]), r = o = void 0
        }), "script") : void 0
    }), oe.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || ge;
        var n = de.exec(t),
            s = !i && [];
        return n ? [e.createElement(n[1])] : (n = oe.buildFragment([t], e, s), s && s.length && oe(s).remove(), oe.merge([], n.childNodes))
    };
    var sn = oe.fn.load;
    oe.fn.load = function(t, e, i) {
        if ("string" != typeof t && sn) return sn.apply(this, arguments);
        var n, s, o, r = this,
            a = t.indexOf(" ");
        return a >= 0 && (n = t.slice(a, t.length), t = t.slice(0, a)), oe.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && oe.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, r.html(n ? oe("<div>").append(oe.parseHTML(t)).find(n) : t)
        }).complete(i && function(t, e) {
            r.each(i, s || [t.responseText, e, t])
        }), this
    }, oe.expr.filters.animated = function(t) {
        return oe.grep(oe.timers, function(e) {
            return t === e.elem
        }).length
    };
    var on = t.document.documentElement;
    oe.offset = {
        setOffset: function(t, e, i) {
            var n, s, o, r, a, l, c, h = oe.css(t, "position"),
                u = oe(t),
                d = {};
            "static" === h && (t.style.position = "relative"), a = u.offset(), o = oe.css(t, "top"), l = oe.css(t, "left"), c = ("absolute" === h || "fixed" === h) && oe.inArray("auto", [o, l]) > -1, c ? (n = u.position(), r = n.top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), oe.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + s), "using" in e ? e.using.call(t, d) : u.css(d)
        }
    }, oe.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                oe.offset.setOffset(this, t, e)
            });
            var e, i, n = {
                    top: 0,
                    left: 0
                },
                s = this[0],
                o = s && s.ownerDocument;
            if (o) return e = o.documentElement, oe.contains(e, s) ? (typeof s.getBoundingClientRect !== Ce && (n = s.getBoundingClientRect()), i = V(o), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n
        },
        position: function() {
            if (this[0]) {
                var t, e, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === oe.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), oe.nodeName(t[0], "html") || (i = t.offset()), i.top += oe.css(t[0], "borderTopWidth", !0), i.left += oe.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - oe.css(n, "marginTop", !0),
                    left: e.left - i.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || on; t && !oe.nodeName(t, "html") && "static" === oe.css(t, "position");) t = t.offsetParent;
                return t || on
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = /Y/.test(e);
        oe.fn[t] = function(n) {
            return Me(this, function(t, n, s) {
                var o = V(t);
                return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void(o ? o.scrollTo(i ? oe(o).scrollLeft() : s, i ? s : oe(o).scrollTop()) : t[n] = s)
            }, t, n, arguments.length, null)
        }
    }), oe.each(["top", "left"], function(t, e) {
        oe.cssHooks[e] = D(ne.pixelPosition, function(t, i) {
            return i ? (i = ii(t, e), si.test(i) ? oe(t).position()[e] + "px" : i) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        oe.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            oe.fn[n] = function(n, s) {
                var o = arguments.length && (i || "boolean" != typeof n),
                    r = i || (n === !0 || s === !0 ? "margin" : "border");
                return Me(this, function(e, i, n) {
                    var s;
                    return oe.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? oe.css(e, i, r) : oe.style(e, i, n, r)
                }, e, o ? n : void 0, o, null)
            }
        })
    }), oe.fn.size = function() {
        return this.length
    }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var rn = t.jQuery,
        an = t.$;
    return oe.noConflict = function(e) {
        return t.$ === oe && (t.$ = an), e && t.jQuery === oe && (t.jQuery = rn), oe
    }, typeof e === Ce && (t.jQuery = t.$ = oe), oe
}),
function(t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var i, n = t(document);
    t.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        buttonClickSelector: "button[data-remote]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(e) {
            var i = t('meta[name="csrf-token"]').attr("content");
            i && e.setRequestHeader("X-CSRF-Token", i)
        },
        refreshCSRFTokens: function() {
            var e = t("meta[name=csrf-token]").attr("content"),
                i = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + i + '"]').val(e)
        },
        fire: function(e, i, n) {
            var s = t.Event(i);
            return e.trigger(s, n), s.result !== !1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t.attr("href")
        },
        handleRemote: function(n) {
            var s, o, r, a, l, c, h, u;
            if (i.fire(n, "ajax:before")) {
                if (a = n.data("cross-domain"), l = a === e ? null : a, c = n.data("with-credentials") || null, h = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                    s = n.attr("method"), o = n.attr("action"), r = n.serializeArray();
                    var d = n.data("ujs:submit-button");
                    d && (r.push(d), n.data("ujs:submit-button", null))
                } else n.is(i.inputChangeSelector) ? (s = n.data("method"), o = n.data("url"), r = n.serialize(), n.data("params") && (r = r + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (s = n.data("method") || "get", o = n.data("url"), r = n.serialize(), n.data("params") && (r = r + "&" + n.data("params"))) : (s = n.data("method"), o = i.href(n), r = n.data("params") || null);
                u = {
                    type: s || "GET",
                    data: r,
                    dataType: h,
                    beforeSend: function(t, s) {
                        return s.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), i.fire(n, "ajax:beforeSend", [t, s])
                    },
                    success: function(t, e, i) {
                        n.trigger("ajax:success", [t, e, i])
                    },
                    complete: function(t, e) {
                        n.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, i) {
                        n.trigger("ajax:error", [t, e, i])
                    },
                    crossDomain: l
                }, c && (u.xhrFields = {
                    withCredentials: c
                }), o && (u.url = o);
                var p = i.ajax(u);
                return n.trigger("ajax:send", p), p
            }
            return !1
        },
        handleMethod: function(n) {
            var s = i.href(n),
                o = n.data("method"),
                r = n.attr("target"),
                a = t("meta[name=csrf-token]").attr("content"),
                l = t("meta[name=csrf-param]").attr("content"),
                c = t('<form method="post" action="' + s + '"></form>'),
                h = '<input name="_method" value="' + o + '" type="hidden" />';
            l !== e && a !== e && (h += '<input name="' + l + '" value="' + a + '" type="hidden" />'), r && c.attr("target", r), c.hide().append(h).appendTo("body"), c.submit()
        },
        disableFormElements: function(e) {
            e.find(i.disableSelector).each(function() {
                var e = t(this),
                    i = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with", e[i]()), e[i](e.data("disable-with")), e.prop("disabled", !0)
            })
        },
        enableFormElements: function(e) {
            e.find(i.enableSelector).each(function() {
                var e = t(this),
                    i = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") && e[i](e.data("ujs:enable-with")), e.prop("disabled", !1)
            })
        },
        allowAction: function(t) {
            var e, n = t.data("confirm"),
                s = !1;
            return n ? (i.fire(t, "confirm") && (s = i.confirm(n), e = i.fire(t, "confirm:complete", [s])), s && e) : !0
        },
        blankInputs: function(e, i, n) {
            var s, o, r = t(),
                a = i || "input,textarea",
                l = e.find(a);
            return l.each(function() {
                if (s = t(this), o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val(), !o == !n) {
                    if (s.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
                    r = r.add(s)
                }
            }), r.length ? r : !1
        },
        nonBlankInputs: function(t, e) {
            return i.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function(t) {
                return i.stopEverything(t)
            })
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, i.fire(n, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, n) {
        t.crossDomain || i.CSRFProtection(n)
    }), n.delegate(i.linkDisableSelector, "ajax:complete", function() {
        i.enableElement(t(this))
    }), n.delegate(i.linkClickSelector, "click.rails", function(n) {
        var s = t(this),
            o = s.data("method"),
            r = s.data("params"),
            a = n.metaKey || n.ctrlKey;
        if (!i.allowAction(s)) return i.stopEverything(n);
        if (!a && s.is(i.linkDisableSelector) && i.disableElement(s), s.data("remote") !== e) {
            if (a && (!o || "GET" === o) && !r) return !0;
            var l = i.handleRemote(s);
            return l === !1 ? i.enableElement(s) : l.error(function() {
                i.enableElement(s)
            }), !1
        }
        return s.data("method") ? (i.handleMethod(s), !1) : void 0
    }), n.delegate(i.buttonClickSelector, "click.rails", function(e) {
        var n = t(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
    }), n.delegate(i.inputChangeSelector, "change.rails", function(e) {
        var n = t(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
    }), n.delegate(i.formSubmitSelector, "submit.rails", function(n) {
        var s = t(this),
            o = s.data("remote") !== e,
            r = i.blankInputs(s, i.requiredInputSelector),
            a = i.nonBlankInputs(s, i.fileInputSelector);
        if (!i.allowAction(s)) return i.stopEverything(n);
        if (r && s.attr("novalidate") == e && i.fire(s, "ajax:aborted:required", [r])) return i.stopEverything(n);
        if (o) {
            if (a) {
                setTimeout(function() {
                    i.disableFormElements(s)
                }, 13);
                var l = i.fire(s, "ajax:aborted:file", [a]);
                return l || setTimeout(function() {
                    i.enableFormElements(s)
                }, 13), l
            }
            return i.handleRemote(s), !1
        }
        setTimeout(function() {
            i.disableFormElements(s)
        }, 13)
    }), n.delegate(i.formInputClickSelector, "click.rails", function(e) {
        var n = t(this);
        if (!i.allowAction(n)) return i.stopEverything(e);
        var s = n.attr("name"),
            o = s ? {
                name: s,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", o)
    }), n.delegate(i.formSubmitSelector, "ajax:beforeSend.rails", function(e) {
        this == e.target && i.disableFormElements(t(this))
    }), n.delegate(i.formSubmitSelector, "ajax:complete.rails", function(e) {
        this == e.target && i.enableFormElements(t(this))
    }), t(function() {
        i.refreshCSRFTokens()
    }))
}(jQuery),
function() {
    var t = this,
        e = t._,
        i = {},
        n = Array.prototype,
        s = Object.prototype,
        o = Function.prototype,
        r = n.push,
        a = n.slice,
        l = n.concat,
        c = s.toString,
        h = s.hasOwnProperty,
        u = n.forEach,
        d = n.map,
        p = n.reduce,
        f = n.reduceRight,
        g = n.filter,
        m = n.every,
        v = n.some,
        y = n.indexOf,
        b = n.lastIndexOf,
        w = Array.isArray,
        _ = Object.keys,
        x = o.bind,
        k = function(t) {
            return t instanceof k ? t : this instanceof k ? void(this._wrapped = t) : new k(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), exports._ = k) : t._ = k, k.VERSION = "1.4.4";
    var C = k.each = k.forEach = function(t, e, n) {
        if (null != t)
            if (u && t.forEach === u) t.forEach(e, n);
            else if (t.length === +t.length) {
            for (var s = 0, o = t.length; o > s; s++)
                if (e.call(n, t[s], s, t) === i) return
        } else
            for (var r in t)
                if (k.has(t, r) && e.call(n, t[r], r, t) === i) return
    };
    k.map = k.collect = function(t, e, i) {
        var n = [];
        return null == t ? n : d && t.map === d ? t.map(e, i) : (C(t, function(t, s, o) {
            n[n.length] = e.call(i, t, s, o)
        }), n)
    };
    var S = "Reduce of empty array with no initial value";
    k.reduce = k.foldl = k.inject = function(t, e, i, n) {
        var s = arguments.length > 2;
        if (null == t && (t = []), p && t.reduce === p) return n && (e = k.bind(e, n)), s ? t.reduce(e, i) : t.reduce(e);
        if (C(t, function(t, o, r) {
            s ? i = e.call(n, i, t, o, r) : (i = t, s = !0)
        }), !s) throw new TypeError(S);
        return i
    }, k.reduceRight = k.foldr = function(t, e, i, n) {
        var s = arguments.length > 2;
        if (null == t && (t = []), f && t.reduceRight === f) return n && (e = k.bind(e, n)), s ? t.reduceRight(e, i) : t.reduceRight(e);
        var o = t.length;
        if (o !== +o) {
            var r = k.keys(t);
            o = r.length
        }
        if (C(t, function(a, l, c) {
            l = r ? r[--o] : --o, s ? i = e.call(n, i, t[l], l, c) : (i = t[l], s = !0)
        }), !s) throw new TypeError(S);
        return i
    }, k.find = k.detect = function(t, e, i) {
        var n;
        return D(t, function(t, s, o) {
            return e.call(i, t, s, o) ? (n = t, !0) : void 0
        }), n
    }, k.filter = k.select = function(t, e, i) {
        var n = [];
        return null == t ? n : g && t.filter === g ? t.filter(e, i) : (C(t, function(t, s, o) {
            e.call(i, t, s, o) && (n[n.length] = t)
        }), n)
    }, k.reject = function(t, e, i) {
        return k.filter(t, function(t, n, s) {
            return !e.call(i, t, n, s)
        }, i)
    }, k.every = k.all = function(t, e, n) {
        e || (e = k.identity);
        var s = !0;
        return null == t ? s : m && t.every === m ? t.every(e, n) : (C(t, function(t, o, r) {
            return (s = s && e.call(n, t, o, r)) ? void 0 : i
        }), !!s)
    };
    var D = k.some = k.any = function(t, e, n) {
        e || (e = k.identity);
        var s = !1;
        return null == t ? s : v && t.some === v ? t.some(e, n) : (C(t, function(t, o, r) {
            return s || (s = e.call(n, t, o, r)) ? i : void 0
        }), !!s)
    };
    k.contains = k.include = function(t, e) {
        return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : D(t, function(t) {
            return t === e
        })
    }, k.invoke = function(t, e) {
        var i = a.call(arguments, 2),
            n = k.isFunction(e);
        return k.map(t, function(t) {
            return (n ? e : t[e]).apply(t, i)
        })
    }, k.pluck = function(t, e) {
        return k.map(t, function(t) {
            return t[e]
        })
    }, k.where = function(t, e, i) {
        return k.isEmpty(e) ? i ? null : [] : k[i ? "find" : "filter"](t, function(t) {
            for (var i in e)
                if (e[i] !== t[i]) return !1;
            return !0
        })
    }, k.findWhere = function(t, e) {
        return k.where(t, e, !0)
    }, k.max = function(t, e, i) {
        if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
        if (!e && k.isEmpty(t)) return -1 / 0;
        var n = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return C(t, function(t, s, o) {
            var r = e ? e.call(i, t, s, o) : t;
            r >= n.computed && (n = {
                value: t,
                computed: r
            })
        }), n.value
    }, k.min = function(t, e, i) {
        if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
        if (!e && k.isEmpty(t)) return 1 / 0;
        var n = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return C(t, function(t, s, o) {
            var r = e ? e.call(i, t, s, o) : t;
            r < n.computed && (n = {
                value: t,
                computed: r
            })
        }), n.value
    }, k.shuffle = function(t) {
        var e, i = 0,
            n = [];
        return C(t, function(t) {
            e = k.random(i++), n[i - 1] = n[e], n[e] = t
        }), n
    };
    var T = function(t) {
        return k.isFunction(t) ? t : function(e) {
            return e[t]
        }
    };
    k.sortBy = function(t, e, i) {
        var n = T(e);
        return k.pluck(k.map(t, function(t, e, s) {
            return {
                value: t,
                index: e,
                criteria: n.call(i, t, e, s)
            }
        }).sort(function(t, e) {
            var i = t.criteria,
                n = e.criteria;
            if (i !== n) {
                if (i > n || void 0 === i) return 1;
                if (n > i || void 0 === n) return -1
            }
            return t.index < e.index ? -1 : 1
        }), "value")
    };
    var E = function(t, e, i, n) {
        var s = {},
            o = T(e || k.identity);
        return C(t, function(e, r) {
            var a = o.call(i, e, r, t);
            n(s, a, e)
        }), s
    };
    k.groupBy = function(t, e, i) {
        return E(t, e, i, function(t, e, i) {
            (k.has(t, e) ? t[e] : t[e] = []).push(i)
        })
    }, k.countBy = function(t, e, i) {
        return E(t, e, i, function(t, e) {
            k.has(t, e) || (t[e] = 0), t[e]++
        })
    }, k.sortedIndex = function(t, e, i, n) {
        i = null == i ? k.identity : T(i);
        for (var s = i.call(n, e), o = 0, r = t.length; r > o;) {
            var a = o + r >>> 1;
            i.call(n, t[a]) < s ? o = a + 1 : r = a
        }
        return o
    }, k.toArray = function(t) {
        return t ? k.isArray(t) ? a.call(t) : t.length === +t.length ? k.map(t, k.identity) : k.values(t) : []
    }, k.size = function(t) {
        return null == t ? 0 : t.length === +t.length ? t.length : k.keys(t).length
    }, k.first = k.head = k.take = function(t, e, i) {
        return null == t ? void 0 : null == e || i ? t[0] : a.call(t, 0, e)
    }, k.initial = function(t, e, i) {
        return a.call(t, 0, t.length - (null == e || i ? 1 : e))
    }, k.last = function(t, e, i) {
        return null == t ? void 0 : null == e || i ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
    }, k.rest = k.tail = k.drop = function(t, e, i) {
        return a.call(t, null == e || i ? 1 : e)
    }, k.compact = function(t) {
        return k.filter(t, k.identity)
    };
    var P = function(t, e, i) {
        return C(t, function(t) {
            k.isArray(t) ? e ? r.apply(i, t) : P(t, e, i) : i.push(t)
        }), i
    };
    k.flatten = function(t, e) {
        return P(t, e, [])
    }, k.without = function(t) {
        return k.difference(t, a.call(arguments, 1))
    }, k.uniq = k.unique = function(t, e, i, n) {
        k.isFunction(e) && (n = i, i = e, e = !1);
        var s = i ? k.map(t, i, n) : t,
            o = [],
            r = [];
        return C(s, function(i, n) {
            (e ? n && r[r.length - 1] === i : k.contains(r, i)) || (r.push(i), o.push(t[n]))
        }), o
    }, k.union = function() {
        return k.uniq(l.apply(n, arguments))
    }, k.intersection = function(t) {
        var e = a.call(arguments, 1);
        return k.filter(k.uniq(t), function(t) {
            return k.every(e, function(e) {
                return k.indexOf(e, t) >= 0
            })
        })
    }, k.difference = function(t) {
        var e = l.apply(n, a.call(arguments, 1));
        return k.filter(t, function(t) {
            return !k.contains(e, t)
        })
    }, k.zip = function() {
        for (var t = a.call(arguments), e = k.max(k.pluck(t, "length")), i = new Array(e), n = 0; e > n; n++) i[n] = k.pluck(t, "" + n);
        return i
    }, k.object = function(t, e) {
        if (null == t) return {};
        for (var i = {}, n = 0, s = t.length; s > n; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
        return i
    }, k.indexOf = function(t, e, i) {
        if (null == t) return -1;
        var n = 0,
            s = t.length;
        if (i) {
            if ("number" != typeof i) return n = k.sortedIndex(t, e), t[n] === e ? n : -1;
            n = 0 > i ? Math.max(0, s + i) : i
        }
        if (y && t.indexOf === y) return t.indexOf(e, i);
        for (; s > n; n++)
            if (t[n] === e) return n;
        return -1
    }, k.lastIndexOf = function(t, e, i) {
        if (null == t) return -1;
        var n = null != i;
        if (b && t.lastIndexOf === b) return n ? t.lastIndexOf(e, i) : t.lastIndexOf(e);
        for (var s = n ? i : t.length; s--;)
            if (t[s] === e) return s;
        return -1
    }, k.range = function(t, e, i) {
        arguments.length <= 1 && (e = t || 0, t = 0), i = arguments[2] || 1;
        for (var n = Math.max(Math.ceil((e - t) / i), 0), s = 0, o = new Array(n); n > s;) o[s++] = t, t += i;
        return o
    }, k.bind = function(t, e) {
        if (t.bind === x && x) return x.apply(t, a.call(arguments, 1));
        var i = a.call(arguments, 2);
        return function() {
            return t.apply(e, i.concat(a.call(arguments)))
        }
    }, k.partial = function(t) {
        var e = a.call(arguments, 1);
        return function() {
            return t.apply(this, e.concat(a.call(arguments)))
        }
    }, k.bindAll = function(t) {
        var e = a.call(arguments, 1);
        return 0 === e.length && (e = k.functions(t)), C(e, function(e) {
            t[e] = k.bind(t[e], t)
        }), t
    }, k.memoize = function(t, e) {
        var i = {};
        return e || (e = k.identity),
            function() {
                var n = e.apply(this, arguments);
                return k.has(i, n) ? i[n] : i[n] = t.apply(this, arguments)
            }
    }, k.delay = function(t, e) {
        var i = a.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, i)
        }, e)
    }, k.defer = function(t) {
        return k.delay.apply(k, [t, 1].concat(a.call(arguments, 1)))
    }, k.throttle = function(t, e) {
        var i, n, s, o, r = 0,
            a = function() {
                r = new Date, s = null, o = t.apply(i, n)
            };
        return function() {
            var l = new Date,
                c = e - (l - r);
            return i = this, n = arguments, 0 >= c ? (clearTimeout(s), s = null, r = l, o = t.apply(i, n)) : s || (s = setTimeout(a, c)), o
        }
    }, k.debounce = function(t, e, i) {
        var n, s;
        return function() {
            var o = this,
                r = arguments,
                a = function() {
                    n = null, i || (s = t.apply(o, r))
                },
                l = i && !n;
            return clearTimeout(n), n = setTimeout(a, e), l && (s = t.apply(o, r)), s
        }
    }, k.once = function(t) {
        var e, i = !1;
        return function() {
            return i ? e : (i = !0, e = t.apply(this, arguments), t = null, e)
        }
    }, k.wrap = function(t, e) {
        return function() {
            var i = [t];
            return r.apply(i, arguments), e.apply(this, i)
        }
    }, k.compose = function() {
        var t = arguments;
        return function() {
            for (var e = arguments, i = t.length - 1; i >= 0; i--) e = [t[i].apply(this, e)];
            return e[0]
        }
    }, k.after = function(t, e) {
        return 0 >= t ? e() : function() {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, k.keys = _ || function(t) {
        if (t !== Object(t)) throw new TypeError("Invalid object");
        var e = [];
        for (var i in t) k.has(t, i) && (e[e.length] = i);
        return e
    }, k.values = function(t) {
        var e = [];
        for (var i in t) k.has(t, i) && e.push(t[i]);
        return e
    }, k.pairs = function(t) {
        var e = [];
        for (var i in t) k.has(t, i) && e.push([i, t[i]]);
        return e
    }, k.invert = function(t) {
        var e = {};
        for (var i in t) k.has(t, i) && (e[t[i]] = i);
        return e
    }, k.functions = k.methods = function(t) {
        var e = [];
        for (var i in t) k.isFunction(t[i]) && e.push(i);
        return e.sort()
    }, k.extend = function(t) {
        return C(a.call(arguments, 1), function(e) {
            if (e)
                for (var i in e) t[i] = e[i]
        }), t
    }, k.pick = function(t) {
        var e = {},
            i = l.apply(n, a.call(arguments, 1));
        return C(i, function(i) {
            i in t && (e[i] = t[i])
        }), e
    }, k.omit = function(t) {
        var e = {},
            i = l.apply(n, a.call(arguments, 1));
        for (var s in t) k.contains(i, s) || (e[s] = t[s]);
        return e
    }, k.defaults = function(t) {
        return C(a.call(arguments, 1), function(e) {
            if (e)
                for (var i in e) null == t[i] && (t[i] = e[i])
        }), t
    }, k.clone = function(t) {
        return k.isObject(t) ? k.isArray(t) ? t.slice() : k.extend({}, t) : t
    }, k.tap = function(t, e) {
        return e(t), t
    };
    var M = function(t, e, i, n) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof k && (t = t._wrapped), e instanceof k && (e = e._wrapped);
        var s = c.call(t);
        if (s != c.call(e)) return !1;
        switch (s) {
            case "[object String]":
                return t == String(e);
            case "[object Number]":
                return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +e;
            case "[object RegExp]":
                return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof e) return !1;
        for (var o = i.length; o--;)
            if (i[o] == t) return n[o] == e;
        i.push(t), n.push(e);
        var r = 0,
            a = !0;
        if ("[object Array]" == s) {
            if (r = t.length, a = r == e.length)
                for (; r-- && (a = M(t[r], e[r], i, n)););
        } else {
            var l = t.constructor,
                h = e.constructor;
            if (l !== h && !(k.isFunction(l) && l instanceof l && k.isFunction(h) && h instanceof h)) return !1;
            for (var u in t)
                if (k.has(t, u) && (r++, !(a = k.has(e, u) && M(t[u], e[u], i, n)))) break;
            if (a) {
                for (u in e)
                    if (k.has(e, u) && !r--) break;
                a = !r
            }
        }
        return i.pop(), n.pop(), a
    };
    k.isEqual = function(t, e) {
        return M(t, e, [], [])
    }, k.isEmpty = function(t) {
        if (null == t) return !0;
        if (k.isArray(t) || k.isString(t)) return 0 === t.length;
        for (var e in t)
            if (k.has(t, e)) return !1;
        return !0
    }, k.isElement = function(t) {
        return !(!t || 1 !== t.nodeType)
    }, k.isArray = w || function(t) {
        return "[object Array]" == c.call(t)
    }, k.isObject = function(t) {
        return t === Object(t)
    }, C(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
        k["is" + t] = function(e) {
            return c.call(e) == "[object " + t + "]"
        }
    }), k.isArguments(arguments) || (k.isArguments = function(t) {
        return !(!t || !k.has(t, "callee"))
    }), "function" != typeof / . / && (k.isFunction = function(t) {
        return "function" == typeof t
    }), k.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, k.isNaN = function(t) {
        return k.isNumber(t) && t != +t
    }, k.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" == c.call(t)
    }, k.isNull = function(t) {
        return null === t
    }, k.isUndefined = function(t) {
        return void 0 === t
    }, k.has = function(t, e) {
        return h.call(t, e)
    }, k.noConflict = function() {
        return t._ = e, this
    }, k.identity = function(t) {
        return t
    }, k.times = function(t, e, i) {
        for (var n = Array(t), s = 0; t > s; s++) n[s] = e.call(i, s);
        return n
    }, k.random = function(t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    };
    var A = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    A.unescape = k.invert(A.escape);
    var I = {
        escape: new RegExp("[" + k.keys(A.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + k.keys(A.unescape).join("|") + ")", "g")
    };
    k.each(["escape", "unescape"], function(t) {
        k[t] = function(e) {
            return null == e ? "" : ("" + e).replace(I[t], function(e) {
                return A[t][e]
            })
        }
    }), k.result = function(t, e) {
        if (null == t) return null;
        var i = t[e];
        return k.isFunction(i) ? i.call(t) : i
    }, k.mixin = function(t) {
        C(k.functions(t), function(e) {
            var i = k[e] = t[e];
            k.prototype[e] = function() {
                var t = [this._wrapped];
                return r.apply(t, arguments), F.call(this, i.apply(k, t))
            }
        })
    };
    var N = 0;
    k.uniqueId = function(t) {
        var e = ++N + "";
        return t ? t + e : e
    }, k.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var $ = /(.)^/,
        L = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "   ": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        O = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    k.template = function(t, e, i) {
        var n;
        i = k.defaults({}, i, k.templateSettings);
        var s = new RegExp([(i.escape || $).source, (i.interpolate || $).source, (i.evaluate || $).source].join("|") + "|$", "g"),
            o = 0,
            r = "__p+='";
        t.replace(s, function(e, i, n, s, a) {
            return r += t.slice(o, a).replace(O, function(t) {
                return "\\" + L[t]
            }), i && (r += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"), n && (r += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"), s && (r += "';\n" + s + "\n__p+='"), o = a + e.length, e
        }), r += "';\n", i.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
        try {
            n = new Function(i.variable || "obj", "_", r)
        } catch (a) {
            throw a.source = r, a
        }
        if (e) return n(e, k);
        var l = function(t) {
            return n.call(this, t, k)
        };
        return l.source = "function(" + (i.variable || "obj") + "){\n" + r + "}", l
    }, k.chain = function(t) {
        return k(t).chain()
    };
    var F = function(t) {
        return this._chain ? k(t).chain() : t
    };
    k.mixin(k), C(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var e = n[t];
        k.prototype[t] = function() {
            var i = this._wrapped;
            return e.apply(i, arguments), "shift" != t && "splice" != t || 0 !== i.length || delete i[0], F.call(this, i)
        }
    }), C(["concat", "join", "slice"], function(t) {
        var e = n[t];
        k.prototype[t] = function() {
            return F.call(this, e.apply(this._wrapped, arguments))
        }
    }), k.extend(k.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}.call(this),
function() {
    var root = this,
        judge = root.judge = {},
        _ = root._;
    judge.VERSION = "2.0.4";
    var DependencyError = function(t) {
        this.name = "DependencyError", this.message = t
    };
    if (DependencyError.prototype = new Error, DependencyError.prototype.constructor = DependencyError, "undefined" == typeof _) throw new DependencyError("Ensure underscore.js is loaded");
    if (_.isUndefined(root.JSON)) throw new DependencyError("Judge depends on the global JSON object (load json2.js in old browsers)");
    var objectString = function(t) {
            var e = Object.prototype.toString.call(t);
            return e.replace(/\[|\]/g, "").split(" ")[1]
        },
        isCollection = function(t) {
            var e = objectString(t),
                i = ["Array", "NodeList", "StaticNodeList", "HTMLCollection", "HTMLFormElement", "HTMLAllCollection"];
            return _(i).include(e)
        },
        operate = function(input, operator, validInput) {
            return eval(input + " " + operator + " " + validInput)
        },
        isInt = function(t) {
            return t === +t && t === (0 | t)
        },
        isEven = function(t) {
            return t % 2 === 0 ? !0 : !1
        },
        isOdd = function(t) {
            return !isEven(t)
        },
        convertFlags = function(t) {
            var e = t.split("-")[0];
            return /m/.test(e) ? "m" : ""
        },
        convertRegExp = function(t) {
            var e = t.slice(1, -1).split(":"),
                i = e.shift().replace("?", ""),
                n = e.join(":").replace(/\\\\/g, "\\");
            return new RegExp(n, convertFlags(i))
        },
        reqObj = function() {
            return root.ActiveXObject && new root.ActiveXObject("Microsoft.XMLHTTP") || root.XMLHttpRequest && new root.XMLHttpRequest || null
        },
        get = judge.get = function(t, e) {
            var i = reqObj();
            return i && (i.onreadystatechange = function() {
                if (4 === i.readyState) {
                    i.onreadystatechange = function() {};
                    var t = /^20\d$/.test(i.status) ? e.success : e.error;
                    t(i.status, i.responseHeaders, i.responseText)
                }
            }, i.open("GET", t, !0), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Accept", "application/json"), i.send()), i
        },
        attrFromName = function(t) {
            var e, i = "";
            return (e = t.match(/\[(\w+)\]$/)) && (i = e[1]), i
        };
    classFromName = function(t) {
        var e, i = "";
        return (e = t.match(/\[(\w+)\]/g)) && (i = e.length > 1 ? camelize(debracket(e[0])) : t.match(/^\w+/)[0]), i
    }, debracket = function(t) {
        return t.replace(/\[|\]/g, "")
    }, camelize = function(t) {
        return t.replace(/(^[a-z]|\_[a-z])/g, function(t) {
            return t.toUpperCase().replace("_", "")
        })
    };
    var urlFor = judge.urlFor = function(t, e) {
            var i = judge.enginePath,
                n = {
                    klass: classFromName(t.name),
                    attribute: attrFromName(t.name),
                    value: t.value,
                    kind: e
                };
            return i + queryString(n)
        },
        queryString = function(t) {
            var e = encodeURIComponent,
                i = _.reduce(t, function(t, i, n) {
                    return t + e(n) + "=" + e(i) + "&"
                }, "?");
            return i.replace(/&$/, "").replace(/%20/g, "+")
        };
    judge.enginePath = "/judge";
    var Dispatcher = judge.Dispatcher = {
            on: function(t, e, i) {
                if (!_.isFunction(e)) return this;
                this._events || (this._events = {});
                var n = this._events[t] || (this._events[t] = []);
                return n.push({
                    callback: e,
                    scope: i || this
                }), this.trigger("bind"), this
            },
            trigger: function(t) {
                if (!this._events) return this;
                var e = _.rest(arguments),
                    i = this._events[t] || (this._events[t] = []);
                return _.each(i, function(t) {
                    t.callback.apply(t.scope, e)
                }), this
            }
        },
        ValidationQueue = judge.ValidationQueue = function(t) {
            this.element = t, this.validations = [], this.attrValidators = root.JSON.parse(this.element.getAttribute("data-validate")), _.each(this.attrValidators, function(t) {
                if (this.element.value.length || t.options.allow_blank !== !0) {
                    var e = _.bind(judge.eachValidators[t.kind], this.element),
                        i = e(t.options, t.messages);
                    i.on("close", this.tryClose, this), this.on("bind", this.tryClose, this), this.validations.push(i)
                }
            }, this), this.tryClose.call(this)
        };
    _.extend(ValidationQueue.prototype, Dispatcher, {
        tryClose: function() {
            var t = _.reduce(this.validations, function(t, e) {
                return t.statuses = _.union(t.statuses, [e.status()]), t.messages = _.union(t.messages, _.compact(e.messages)), t
            }, {
                statuses: [],
                messages: []
            }, this);
            if (!_.contains(t.statuses, "pending")) {
                var e = _.contains(t.statuses, "invalid") ? "invalid" : "valid";
                this.trigger("close", this.element, e, t.messages), this.trigger(e, this.element, t.messages)
            }
        }
    });
    var Validation = judge.Validation = function(t) {
        return this.messages = null, _.isArray(t) && this.close(t), this
    };
    _.extend(Validation.prototype, Dispatcher, {
        close: function(t) {
            return this.closed() ? null : (this.messages = _.isString(t) ? root.JSON.parse(t) : t, this.trigger("close", this.status(), this.messages), this)
        },
        closed: function() {
            return _.isArray(this.messages)
        },
        status: function() {
            return this.closed() ? this.messages.length > 0 ? "invalid" : "valid" : "pending"
        }
    });
    var pending = judge.pending = function() {
            return new Validation
        },
        closed = judge.closed = function(t) {
            return new Validation(t)
        };
    judge.eachValidators = {
        presence: function(t, e) {
            return closed(this.value.length ? [] : [e.blank])
        },
        length: function(t, e) {
            var i = [],
                n = {
                    minimum: {
                        operator: "<",
                        message: "too_short"
                    },
                    maximum: {
                        operator: ">",
                        message: "too_long"
                    },
                    is: {
                        operator: "!=",
                        message: "wrong_length"
                    }
                };
            return _(n).each(function(n, s) {
                var o = operate(this.value.length, n.operator, t[s]);
                _(t).has(s) && o && i.push(e[n.message])
            }, this), closed(i)
        },
        exclusion: function(t, e) {
            var i = _(t["in"]).map(function(t) {
                return t.toString()
            });
            return closed(_.include(i, this.value) ? [e.exclusion] : [])
        },
        inclusion: function(t, e) {
            var i = _(t["in"]).map(function(t) {
                return t.toString()
            });
            return closed(_.include(i, this.value) ? [] : [e.inclusion])
        },
        numericality: function(t, e) {
            var i = {
                    greater_than: ">",
                    greater_than_or_equal_to: ">=",
                    equal_to: "==",
                    less_than: "<",
                    less_than_or_equal_to: "<="
                },
                n = [],
                s = parseFloat(this.value, 10);
            return isNaN(Number(this.value)) ? n.push(e.not_a_number) : (t.odd && isEven(s) && n.push(e.odd), t.even && isOdd(s) && n.push(e.even), t.only_integer && !isInt(s) && n.push(e.not_an_integer), _(i).each(function(o, r) {
                var a = operate(s, i[r], parseFloat(t[r], 10));
                _(t).has(r) && !a && n.push(e[r])
            })), closed(n)
        },
        format: function(t, e) {
            var i = [];
            if (_(t).has("with")) {
                var n = convertRegExp(t["with"]);
                n.test(this.value) || i.push(e.invalid)
            }
            if (_(t).has("without")) {
                var s = convertRegExp(t.without);
                s.test(this.value) && i.push(e.invalid)
            }
            return closed(i)
        },
        acceptance: function(t, e) {
            return closed(this.checked === !0 ? [] : [e.accepted])
        },
        confirmation: function(t, e) {
            var i = this.getAttribute("id"),
                n = i + "_confirmation",
                s = root.document.getElementById(n);
            return closed(this.value === s.value ? [] : [e.confirmation])
        },
        uniqueness: function() {
            var t = pending();
            return get(urlFor(this, "uniqueness"), {
                success: function(e, i, n) {
                    t.close(n)
                },
                error: function(e) {
                    t.close(["Request error: " + e])
                }
            }), t
        }
    };
    var isCallbacksObj = function(t) {
        return _.isObject(t) && _.has(t, "valid") && _.has(t, "invalid")
    };
    judge.validate = function(t, e) {
        var i = new ValidationQueue(t);
        return _.isFunction(e) ? i.on("close", e) : isCallbacksObj(e) && (i.on("valid", e.valid), i.on("invalid", e.invalid)), i
    }
}.call(this), + function(t) {
    "use strict";
    var e = function(i, n) {
        this.options = t.extend({}, e.DEFAULTS, n), this.$window = t(window).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(i), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
        offset: 0
    }, e.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$window.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - t
    }, e.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var i = t(document).height(),
                n = this.$window.scrollTop(),
                s = this.$element.offset(),
                o = this.options.offset,
                r = o.top,
                a = o.bottom;
            "object" != typeof o && (a = r = o), "function" == typeof r && (r = o.top(this.$element)), "function" == typeof a && (a = o.bottom(this.$element));
            var l = null != this.unpin && n + this.unpin <= s.top ? !1 : null != a && s.top + this.$element.height() >= i - a ? "bottom" : null != r && r >= n ? "top" : !1;
            if (this.affixed !== l) {
                null != this.unpin && this.$element.css("top", "");
                var c = "affix" + (l ? "-" + l : ""),
                    h = t.Event(c + ".bs.affix");
                this.$element.trigger(h), h.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(c).trigger(t.Event(c.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: s.top
                }))
            }
        }
    };
    var i = t.fn.affix;
    t.fn.affix = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.affix"),
                o = "object" == typeof i && i;
            s || n.data("bs.affix", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var e = t(this),
                i = e.data();
            i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.affix(i)
        })
    })
}(jQuery), + function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        i = function(i) {
            t(i).on("click", e, this.close)
        };
    i.prototype.close = function(e) {
        function i() {
            o.trigger("closed.bs.alert").remove()
        }
        var n = t(this),
            s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(s);
        e && e.preventDefault(), o.length || (o = n.hasClass("alert") ? n : n.parent()), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one(t.support.transition.end, i).emulateTransitionEnd(150) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.alert");
            s || n.data("bs.alert", s = new i(this)), "string" == typeof e && s[e].call(n)
        })
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery), + function(t) {
    "use strict";
    var e = function(i, n) {
        this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, n), this.isLoading = !1
    };
    e.DEFAULTS = {
        loadingText: "loading..."
    }, e.prototype.setState = function(e) {
        var i = "disabled",
            n = this.$element,
            s = n.is("input") ? "val" : "html",
            o = n.data();
        e += "Text", o.resetText || n.data("resetText", n[s]()), n[s](o[e] || this.options[e]), setTimeout(t.proxy(function() {
            "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
        }, this), 0)
    }, e.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.button"),
                o = "object" == typeof i && i;
            s || n.data("bs.button", s = new e(this, o)), "toggle" == i ? s.toggle() : i && s.setState(i)
        })
    }, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(e) {
        var i = t(e.target);
        i.hasClass("btn") || (i = i.closest(".btn")), i.button("toggle"), e.preventDefault()
    })
}(jQuery), + function(t) {
    "use strict";
    var e = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, e.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, e.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(".item"), this.$items.index(this.$active)
    }, e.prototype.to = function(e) {
        var i = this,
            n = this.getActiveIndex();
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            i.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", t(this.$items[e]))
    }, e.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, e.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, e.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, e.prototype.slide = function(e, i) {
        var n = this.$element.find(".item.active"),
            s = i || n[e](),
            o = this.interval,
            r = "next" == e ? "left" : "right",
            a = "next" == e ? "first" : "last",
            l = this;
        if (!s.length) {
            if (!this.options.wrap) return;
            s = this.$element.find(".item")[a]()
        }
        if (s.hasClass("active")) return this.sliding = !1;
        var c = t.Event("slide.bs.carousel", {
            relatedTarget: s[0],
            direction: r
        });
        return this.$element.trigger(c), c.isDefaultPrevented() ? void 0 : (this.sliding = !0, o && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
            var e = t(l.$indicators.children()[l.getActiveIndex()]);
            e && e.addClass("active")
        })), t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one(t.support.transition.end, function() {
            s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                l.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * n.css("transition-duration").slice(0, -1))) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), o && this.cycle(), this)
    };
    var i = t.fn.carousel;
    t.fn.carousel = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.carousel"),
                o = t.extend({}, e.DEFAULTS, n.data(), "object" == typeof i && i),
                r = "string" == typeof i ? i : o.slide;
            s || n.data("bs.carousel", s = new e(this, o)), "number" == typeof i ? s.to(i) : r ? s[r]() : o.interval && s.pause().cycle()
        })
    }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
        var i, n = t(this),
            s = t(n.attr("data-target") || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")),
            o = t.extend({}, s.data(), n.data()),
            r = n.attr("data-slide-to");
        r && (o.interval = !1), s.carousel(o), (r = n.attr("data-slide-to")) && s.data("bs.carousel").to(r), e.preventDefault()
    }), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var e = t(this);
            e.carousel(e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";
    var e = function(i, n) {
        this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, n), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    e.DEFAULTS = {
        toggle: !0
    }, e.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, e.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e = t.Event("show.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find("> .panel > .in");
                if (i && i.length) {
                    var n = i.data("bs.collapse");
                    if (n && n.transitioning) return;
                    i.collapse("hide"), n || i.data("bs.collapse", null)
                }
                var s = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[s](0), this.transitioning = 1;
                var o = function(e) {
                    return e && e.target != this.$element[0] ? void this.$element.one(t.support.transition.end, t.proxy(o, this)) : (this.$element.removeClass("collapsing").addClass("collapse in")[s]("auto"), this.transitioning = 0, void this.$element.trigger("shown.bs.collapse"))
                };
                if (!t.support.transition) return o.call(this);
                var r = t.camelCase(["scroll", s].join("-"));
                this.$element.one(t.support.transition.end, t.proxy(o, this)).emulateTransitionEnd(350)[s](this.$element[0][r])
            }
        }
    }, e.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var n = function(e) {
                    return e && e.target != this.$element[0] ? void this.$element.one(t.support.transition.end, t.proxy(n, this)) : (this.transitioning = 0, void this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse"))
                };
                return t.support.transition ? void this.$element[i](0).one(t.support.transition.end, t.proxy(n, this)).emulateTransitionEnd(350) : n.call(this)
            }
        }
    }, e.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var i = t.fn.collapse;
    t.fn.collapse = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.collapse"),
                o = t.extend({}, e.DEFAULTS, n.data(), "object" == typeof i && i);
            !s && o.toggle && "show" == i && (i = !i), s || n.data("bs.collapse", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = i, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var i, n = t(this),
            s = n.attr("data-target") || e.preventDefault() || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
            o = t(s),
            r = o.data("bs.collapse"),
            a = r ? "toggle" : n.data(),
            l = n.attr("data-parent"),
            c = l && t(l);
        r && r.transitioning || (c && c.find('[data-toggle="collapse"][data-parent="' + l + '"]').not(n).addClass("collapsed"), n[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), o.collapse(a)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        t(n).remove(), t(s).each(function() {
            var n = i(t(this)),
                s = {
                    relatedTarget: this
                };
            n.hasClass("open") && (n.trigger(e = t.Event("hide.bs.dropdown", s)), e.isDefaultPrevented() || n.removeClass("open").trigger("hidden.bs.dropdown", s))
        })
    }

    function i(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }
    var n = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        o = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    o.prototype.toggle = function(n) {
        var s = t(this);
        if (!s.is(".disabled, :disabled")) {
            var o = i(s),
                r = o.hasClass("open");
            if (e(), !r) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                s.trigger("focus"), o.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, o.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var n = t(this);
            if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
                var o = i(n),
                    r = o.hasClass("open");
                if (!r || r && 27 == e.keyCode) return 27 == e.which && o.find(s).trigger("focus"), n.trigger("click");
                var a = " li:not(.divider):visible a",
                    l = o.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (l.length) {
                    var c = l.index(l.filter(":focus"));
                    38 == e.keyCode && c > 0 && c--, 40 == e.keyCode && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s + ', [role="menu"], [role="listbox"]', o.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e)
    };
    e.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var s = i.find(".active:last a")[0],
                o = t.Event("show.bs.tab", {
                    relatedTarget: s
                });
            if (e.trigger(o), !o.isDefaultPrevented()) {
                var r = t(n);
                this.activate(e.parent("li"), i), this.activate(r, r.parent(), function() {
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: s
                    })
                })
            }
        }
    }, e.prototype.activate = function(e, i, n) {
        function s() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), n && n()
        }
        var o = i.find("> .active"),
            r = n && t.support.transition && o.hasClass("fade");
        r ? o.one(t.support.transition.end, s).emulateTransitionEnd(150) : s(), o.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.tab");
            s || n.data("bs.tab", s = new e(this)), "string" == typeof i && s[i]()
        })
    }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
        e.preventDefault(), t(this).tab("show")
    })
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one(t.support.transition.end, function() {
            i = !0
        });
        var s = function() {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(s, e), this
    }, t(function() {
        t.support.transition = e()
    })
}(jQuery), + function(t) {
    "use strict";

    function e(i, n) {
        var s, o = t.proxy(this.process, this);
        this.$element = t(t(i).is("body") ? window : i), this.$body = t("body"), this.$scrollElement = this.$element.on("scroll.bs.scrollspy", o), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || (s = t(i).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = t([]), this.targets = t([]), this.activeTarget = null, this.refresh(), this.process()
    }
    e.DEFAULTS = {
        offset: 10
    }, e.prototype.refresh = function() {
        var e = this.$element[0] == window ? "offset" : "position";
        this.offsets = t([]), this.targets = t([]);
        var i = this;
        this.$body.find(this.selector).map(function() {
            var n = t(this),
                s = n.data("target") || n.attr("href"),
                o = /^#./.test(s) && t(s);
            return o && o.length && o.is(":visible") && [
                [o[e]().top + (!t.isWindow(i.$scrollElement.get(0)) && i.$scrollElement.scrollTop()), s]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight),
            n = i - this.$scrollElement.height(),
            s = this.offsets,
            o = this.targets,
            r = this.activeTarget;
        if (e >= n) return r != (t = o.last()[0]) && this.activate(t);
        if (r && e <= s[0]) return r != (t = o[0]) && this.activate(t);
        for (t = s.length; t--;) r != o[t] && e >= s[t] && (!s[t + 1] || e <= s[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.scrollspy"),
                o = "object" == typeof i && i;
            s || n.data("bs.scrollspy", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            e.scrollspy(e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";
    var e = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, e.prototype.show = function(e) {
        var i = this,
            n = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var n = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), n && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            n ? i.$element.find(".modal-dialog").one(t.support.transition.end, function() {
                i.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(300) : i.$element.trigger("focus").trigger(s)
        }))
    }, e.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, e.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, e.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.removeBackdrop(), t.$element.trigger("hidden.bs.modal")
        })
    }, e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function(e) {
        var i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && i;
            if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e()
    }, e.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, e.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, e.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, e.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = function(i, n) {
        return this.each(function() {
            var s = t(this),
                o = s.data("bs.modal"),
                r = t.extend({}, e.DEFAULTS, s.data(), "object" == typeof i && i);
            o || s.data("bs.modal", o = new e(this, r)), "string" == typeof i ? o[i](n) : r.show && o.show(n)
        })
    }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var i = t(this),
            n = i.attr("href"),
            s = t(i.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            o = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(n) && n
            }, s.data(), i.data());
        i.is("a") && e.preventDefault(), s.modal(o, this).one("hide", function() {
            i.is(":visible") && i.trigger("focus")
        })
    })
}(jQuery), + function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function(e, i, n) {
        this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var s = this.options.trigger.split(" "), o = s.length; o--;) {
            var r = s[o];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, e.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show()
    }, e.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, e.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(e), e.isDefaultPrevented()) return;
            var i = this,
                n = this.tip();
            this.setContent(), this.options.animation && n.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                o = /\s?auto?\s?/i,
                r = o.test(s);
            r && (s = s.replace(o, "") || "top"), n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
            var a = this.getPosition(),
                l = n[0].offsetWidth,
                c = n[0].offsetHeight;
            if (r) {
                var h = s,
                    u = this.$element.parent(),
                    d = this.getPosition(u);
                s = "bottom" == s && a.top + a.height + c - d.scroll > d.height ? "top" : "top" == s && a.top - d.scroll - c < 0 ? "bottom" : "right" == s && a.right + l > d.width ? "left" : "left" == s && a.left - l < d.left ? "right" : s, n.removeClass(h).addClass(s)
            }
            var p = this.getCalculatedOffset(s, a, l, c);
            this.applyPlacement(p, s), this.hoverState = null;
            var f = function() {
                i.$element.trigger("shown.bs." + i.type)
            };
            t.support.transition && this.$tip.hasClass("fade") ? n.one(t.support.transition.end, f).emulateTransitionEnd(150) : f()
        }
    }, e.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            s = n[0].offsetWidth,
            o = n[0].offsetHeight,
            r = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top = e.top + r, e.left = e.left + a, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            c = n[0].offsetHeight;
        "top" == i && c != o && (e.top = e.top + o - c);
        var h = this.getViewportAdjustedDelta(i, e, l, c);
        h.left ? e.left += h.left : e.top += h.top;
        var u = h.left ? 2 * h.left - s + l : 2 * h.top - o + c,
            d = h.left ? "left" : "top",
            p = h.left ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(u, n[0][p], d)
    }, e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function() {
        function e() {
            "in" != i.hoverState && n.detach(), i.$element.trigger("hidden.bs." + i.type)
        }
        var i = this,
            n = this.tip(),
            s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? n.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            n = "BODY" == i.tagName;
        return t.extend({}, "function" == typeof i.getBoundingClientRect ? i.getBoundingClientRect() : null, {
            scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
            width: n ? t(window).width() : e.outerWidth(),
            height: n ? t(window).height() : e.outerHeight()
        }, n ? {
            top: 0,
            left: 0
        } : e.offset())
    }, e.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var s = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return s;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - r.scroll,
                l = e.top + o - r.scroll + n;
            a < r.top ? s.top = r.top - a : l > r.top + r.height && (s.top = r.top + r.height - l)
        } else {
            var c = e.left - o,
                h = e.left + o + i;
            c < r.left ? s.left = r.left - c : h > r.width && (s.left = r.left + r.width - h)
        }
        return s
    }, e.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, e.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(e) {
        var i = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, e.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.tooltip"),
                o = "object" == typeof i && i;
            (s || "destroy" != i) && (s || n.data("bs.tooltip", s = new e(this, o)), "string" == typeof i && s[i]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, e.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var i = t.fn.popover;
    t.fn.popover = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.popover"),
                o = "object" == typeof i && i;
            (s || "destroy" != i) && (s || n.data("bs.popover", s = new e(this, o)), "string" == typeof i && s[i]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery),
function(t, e) {
    function i(e, i) {
        var s, o, r, a = e.nodeName.toLowerCase();
        return "area" === a ? (s = e.parentNode, o = s.name, e.href && o && "map" === s.nodeName.toLowerCase() ? (r = t("img[usemap=#" + o + "]")[0], !!r && n(r)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && n(e)
    }

    function n(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    var s = 0,
        o = /^ui-id-\d+$/;
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        focus: function(e) {
            return function(i, n) {
                return "number" == typeof i ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(), n && n.call(e)
                    }, i)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus),
        scrollParent: function() {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        },
        zIndex: function(i) {
            if (i !== e) return this.css("zIndex", i);
            if (this.length)
                for (var n, s, o = t(this[0]); o.length && o[0] !== document;) {
                    if (n = o.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(o.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    o = o.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++s)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                o.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        }) : function(e, i, n) {
            return !!t.data(e, n[3])
        },
        focusable: function(e) {
            return i(e, !isNaN(t.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var n = t.attr(e, "tabindex"),
                s = isNaN(n);
            return (s || n >= 0) && i(e, !s)
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(i, n) {
        function s(e, i, n, s) {
            return t.each(o, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), s && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), i
        }
        var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            r = n.toLowerCase(),
            a = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
        t.fn["inner" + n] = function(i) {
            return i === e ? a["inner" + n].call(this) : this.each(function() {
                t(this).css(r, s(this, i) + "px")
            })
        }, t.fn["outer" + n] = function(e, i) {
            return "number" != typeof e ? a["outer" + n].call(this, e) : this.each(function() {
                t(this).css(r, s(this, e, !0, i) + "px")
            })
        }
    }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
        }
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({
        disableSelection: function() {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), t.extend(t.ui, {
        plugin: {
            add: function(e, i, n) {
                var s, o = t.ui[e].prototype;
                for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
            },
            call: function(t, e, i) {
                var n, s = t.plugins[e];
                if (s && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                    for (n = 0; n < s.length; n++) t.options[s[n][0]] && s[n][1].apply(t.element, i)
            }
        },
        hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                s = !1;
            return e[n] > 0 ? !0 : (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
        }
    })
}(jQuery),
function(t, e) {
    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function n(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(i, "mouseout", function() {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function() {
            t.datepicker._isDisabledDatepicker(o.inline ? e.parent()[0] : o.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function s(e, i) {
        t.extend(e, i);
        for (var n in i) null == i[n] && (e[n] = i[n]);
        return e
    }
    t.extend(t.ui, {
        datepicker: {
            version: "1.10.4"
        }
    });
    var o, r = "datepicker";
    t.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return s(this._defaults, t || {}), this
        },
        _attachDatepicker: function(e, i) {
            var n, s, o;
            n = e.nodeName.toLowerCase(), s = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), s), o.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
        },
        _newInst: function(e, i) {
            var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, i) {
            var n = t(e);
            i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, r, i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var n, s, o, r = this._get(i, "appendText"),
                a = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[a ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && e.focus(this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: o,
                alt: s,
                title: s
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                src: o,
                alt: s,
                title: s
            }) : s)), e[a ? "before" : "after"](i.trigger), i.trigger.click(function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
            }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, n, s, o = new Date(2009, 11, 20),
                    r = this._get(t, "dateFormat");
                r.match(/[DM]/) && (e = function(t) {
                    for (i = 0, n = 0, s = 0; s < t.length; s++) t[s].length > i && (i = t[s].length, n = s);
                    return n
                }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var n = t(e);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, n, o, a) {
            var l, c, h, u, d, p = this._dialogInst;
            return p || (this.uuid += 1, l = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + l + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, t.data(this._dialogInput[0], r, p)), s(p.settings, o || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (c = document.documentElement.clientWidth, h = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + u, h / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], r, p), this
        },
        _destroyDatepicker: function(e) {
            var i, n = t(e),
                s = t.data(e, r);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, r), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(e) {
            var i, n, s = t(e),
                o = t.data(e, r);
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function(e) {
            var i, n, s = t(e),
                o = t.data(e, r);
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; e < this._disabledInputs.length; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return t.data(e, r)
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(i, n, o) {
            var r, a, l, c, h = this._getInst(i);
            return 2 === arguments.length && "string" == typeof n ? "defaults" === n ? t.extend({}, t.datepicker._defaults) : h ? "all" === n ? t.extend({}, h.settings) : this._get(h, n) : null : (r = n || {}, "string" == typeof n && (r = {}, r[n] = o), void(h && (this._curInst === h && this._hideDatepicker(), a = this._getDateDatepicker(i, !0), l = this._getMinMaxDate(h, "min"), c = this._getMinMaxDate(h, "max"), s(h.settings, r), null !== l && r.dateFormat !== e && r.minDate === e && (h.settings.minDate = this._formatDate(h, l)), null !== c && r.dateFormat !== e && r.maxDate === e && (h.settings.maxDate = this._formatDate(h, c)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), h), this._autoSize(h), this._setDate(h, a), this._updateAlternate(h), this._updateDatepicker(h))))
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function(e) {
            var i, n, s, o = t.datepicker._getInst(e.target),
                r = !0,
                a = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), s[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), i = t.datepicker._get(o, "onSelect"), i ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
            r && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) {
            var i, n, s = t.datepicker._getInst(e.target);
            return t.datepicker._get(s, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
        },
        _doKeyUp: function(e) {
            var i, n = t.datepicker._getInst(e.target);
            if (n.input.val() !== n.lastVal) try {
                i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n)), i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n))
            } catch (s) {}
            return !0
        },
        _showDatepicker: function(e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var i, n, o, r, a, l, c;
                i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(i, "beforeShow"), o = n ? n.apply(e, [e, i]) : {}, o !== !1 && (s(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() {
                    return r |= "fixed" === t(this).css("position"), !r
                }), a = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(i), a = t.datepicker._checkOffset(i, a, r), i.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: a.left + "px",
                    top: a.top + "px"
                }), i.inline || (l = t.datepicker._get(i, "showAnim"), c = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), c) : i.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, o = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, n = this._getNumberOfMonths(e),
                s = n[1],
                r = 17;
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function(e, i, n) {
            var s = e.dpDiv.outerWidth(),
                o = e.dpDiv.outerHeight(),
                r = e.input ? e.input.outerWidth() : 0,
                a = e.input ? e.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                c = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? s - r : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > c && c > o ? Math.abs(o + a) : 0), i
        },
        _findPos: function(e) {
            for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"];
            return i = t(e).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(e) {
            var i, n, s, o, a = this._curInst;
            !a || e && a !== t.data(e, r) || this._datepickerShowing && (i = this._get(a, "showAnim"), n = this._get(a, "duration"), s = function() {
                t.datepicker._tidyDialog(a)
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), n, s) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    n = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, n) {
            var s = t(e),
                o = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
        },
        _gotoToday: function(e) {
            var i, n = t(e),
                s = this._getInst(n[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
        },
        _selectMonthYear: function(e, i, n) {
            var s = t(e),
                o = this._getInst(s[0]);
            o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s)
        },
        _selectDay: function(e, i, n, s) {
            var o, r = t(e);
            t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (o = this._getInst(r[0]), o.selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var n, s = t(e),
                o = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), n = this._get(o, "onSelect"), n ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, n, s, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).each(function() {
                t(this).val(s)
            }))
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function(e, i, n) {
            if (null == e || null == i) throw "Invalid arguments";
            if (i = "object" == typeof i ? i.toString() : i + "", "" === i) return null;
            var s, o, r, a, l = 0,
                c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                h = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
                u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (n ? n.dayNames : null) || this._defaults.dayNames,
                p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (n ? n.monthNames : null) || this._defaults.monthNames,
                g = -1,
                m = -1,
                v = -1,
                y = -1,
                b = !1,
                w = function(t) {
                    var i = s + 1 < e.length && e.charAt(s + 1) === t;
                    return i && s++, i
                },
                _ = function(t) {
                    var e = w(t),
                        n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        s = new RegExp("^\\d{1," + n + "}"),
                        o = i.substring(l).match(s);
                    if (!o) throw "Missing number at position " + l;
                    return l += o[0].length, parseInt(o[0], 10)
                },
                x = function(e, n, s) {
                    var o = -1,
                        r = t.map(w(e) ? s : n, function(t, e) {
                            return [
                                [e, t]
                            ]
                        }).sort(function(t, e) {
                            return -(t[1].length - e[1].length)
                        });
                    if (t.each(r, function(t, e) {
                        var n = e[1];
                        return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (o = e[0], l += n.length, !1) : void 0
                    }), -1 !== o) return o + 1;
                    throw "Unknown name at position " + l
                },
                k = function() {
                    if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (s = 0; s < e.length; s++)
                if (b) "'" !== e.charAt(s) || w("'") ? k() : b = !1;
                else switch (e.charAt(s)) {
                    case "d":
                        v = _("d");
                        break;
                    case "D":
                        x("D", u, d);
                        break;
                    case "o":
                        y = _("o");
                        break;
                    case "m":
                        m = _("m");
                        break;
                    case "M":
                        m = x("M", p, f);
                        break;
                    case "y":
                        g = _("y");
                        break;
                    case "@":
                        a = new Date(_("@")), g = a.getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                        break;
                    case "!":
                        a = new Date((_("!") - this._ticksTo1970) / 1e4), g = a.getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                        break;
                    case "'":
                        w("'") ? k() : b = !0;
                        break;
                    default:
                        k()
                }
                if (l < i.length && (r = i.substr(l), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
            if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (h >= g ? 0 : -100)), y > -1)
                for (m = 1, v = y;;) {
                    if (o = this._getDaysInMonth(g, m - 1), o >= v) break;
                    m++, v -= o
                }
            if (a = this._daylightSavingAdjust(new Date(g, m - 1, v)), a.getFullYear() !== g || a.getMonth() + 1 !== m || a.getDate() !== v) throw "Invalid date";
            return a
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(t, e, i) {
            if (!e) return "";
            var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function(e) {
                    var i = n + 1 < t.length && t.charAt(n + 1) === e;
                    return i && n++, i
                },
                c = function(t, e, i) {
                    var n = "" + e;
                    if (l(t))
                        for (; n.length < i;) n = "0" + n;
                    return n
                },
                h = function(t, e, i, n) {
                    return l(t) ? n[e] : i[e]
                },
                u = "",
                d = !1;
            if (e)
                for (n = 0; n < t.length; n++)
                    if (d) "'" !== t.charAt(n) || l("'") ? u += t.charAt(n) : d = !1;
                    else switch (t.charAt(n)) {
                        case "d":
                            u += c("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += h("D", e.getDay(), s, o);
                            break;
                        case "o":
                            u += c("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += c("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += h("M", e.getMonth(), r, a);
                            break;
                        case "y":
                            u += l("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(n)
                    }
                    return u
        },
        _possibleChars: function(t) {
            var e, i = "",
                n = !1,
                s = function(i) {
                    var n = e + 1 < t.length && t.charAt(e + 1) === i;
                    return n && e++, n
                };
            for (e = 0; e < t.length; e++)
                if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
                return i
        },
        _get: function(t, i) {
            return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    n = t.lastVal = t.input ? t.input.val() : null,
                    s = this._getDefaultDate(t),
                    o = s,
                    r = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, n, r) || s
                } catch (a) {
                    n = e ? "" : n
                }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(e, i, n) {
            var s = function(t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t), e
                },
                o = function(i) {
                    try {
                        return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                    } catch (n) {}
                    for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = s.getFullYear(), r = s.getMonth(), a = s.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = l.exec(i); c;) {
                        switch (c[2] || "d") {
                            case "d":
                            case "D":
                                a += parseInt(c[1], 10);
                                break;
                            case "w":
                            case "W":
                                a += 7 * parseInt(c[1], 10);
                                break;
                            case "m":
                            case "M":
                                r += parseInt(c[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(o, r));
                                break;
                            case "y":
                            case "Y":
                                o += parseInt(c[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(o, r))
                        }
                        c = l.exec(i)
                    }
                    return new Date(o, r, a)
                },
                r = null == i || "" === i ? n : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? n : s(i) : new Date(i.getTime());
            return r = r && "Invalid Date" === r.toString() ? n : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function(t, e, i) {
            var n = !e,
                s = t.selectedMonth,
                o = t.selectedYear,
                r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return e
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"),
                n = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        t.datepicker._adjustDate(n, -i, "M")
                    },
                    next: function() {
                        t.datepicker._adjustDate(n, +i, "M")
                    },
                    hide: function() {
                        t.datepicker._hideDatepicker()
                    },
                    today: function() {
                        t.datepicker._gotoToday(n)
                    },
                    selectDay: function() {
                        return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return t.datepicker._selectMonthYear(n, this, "M"), !1
                    },
                    selectYear: function() {
                        return t.datepicker._selectMonthYear(n, this, "Y"), !1
                    }
                };
                t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, n, s, o, r, a, l, c, h, u, d, p, f, g, m, v, y, b, w, _, x, k, C, S, D, T, E, P, M, A, I, N, $, L, O, F, z, j, H = new Date,
                W = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())),
                R = this._get(t, "isRTL"),
                B = this._get(t, "showButtonPanel"),
                q = this._get(t, "hideIfNoPrevNext"),
                U = this._get(t, "navigationAsDateFormat"),
                Y = this._getNumberOfMonths(t),
                V = this._get(t, "showCurrentAtPos"),
                K = this._get(t, "stepMonths"),
                X = 1 !== Y[0] || 1 !== Y[1],
                Q = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                G = this._getMinMaxDate(t, "min"),
                J = this._getMinMaxDate(t, "max"),
                Z = t.drawMonth - V,
                te = t.drawYear;
            if (0 > Z && (Z += 12, te--), J)
                for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - Y[0] * Y[1] + 1, J.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);
            for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = U ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - K, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = U ? this.formatDate(s, this._daylightSavingAdjust(new Date(te, Z + K, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w" : "e") + "'>" + s + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? Q : W, r = U ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", c = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (R ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (R ? "" : l) + "</div>" : "", h = parseInt(this._get(t, "firstDay"), 10), h = isNaN(h) ? 0 : h, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), y = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), w = "", x = 0; x < Y[0]; x++) {
                for (k = "", this.maxRows = 4, C = 0; C < Y[1]; C++) {
                    if (S = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), D = " ui-corner-all", T = "", X) {
                        if (T += "<div class='ui-datepicker-group", Y[1] > 1) switch (C) {
                            case 0:
                                T += " ui-datepicker-group-first", D = " ui-corner-" + (R ? "right" : "left");
                                break;
                            case Y[1] - 1:
                                T += " ui-datepicker-group-last", D = " ui-corner-" + (R ? "left" : "right");
                                break;
                            default:
                                T += " ui-datepicker-group-middle", D = ""
                        }
                        T += "'>"
                    }
                    for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + D + "'>" + (/all|left/.test(D) && 0 === x ? R ? o : n : "") + (/all|right/.test(D) && 0 === x ? R ? n : o : "") + this._generateMonthYearHeader(t, Z, te, G, J, x > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", E = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", _ = 0; 7 > _; _++) P = (_ + h) % 7, E += "<th" + ((_ + h + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[P] + "'>" + p[P] + "</span></th>";
                    for (T += E + "</tr></thead><tbody>", M = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, M)), A = (this._getFirstDayOfMonth(te, Z) - h + 7) % 7, I = Math.ceil((A + M) / 7), N = X && this.maxRows > I ? this.maxRows : I, this.maxRows = N, $ = this._daylightSavingAdjust(new Date(te, Z, 1 - A)), L = 0; N > L; L++) {
                        for (T += "<tr>", O = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")($) + "</td>" : "", _ = 0; 7 > _; _++) F = m ? m.apply(t.input ? t.input[0] : null, [$]) : [!0, ""], z = $.getMonth() !== Z, j = z && !y || !F[0] || G && G > $ || J && $ > J, O += "<td class='" + ((_ + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (z ? " ui-datepicker-other-month" : "") + ($.getTime() === S.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === $.getTime() && b.getTime() === S.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (z && !v ? "" : " " + F[1] + ($.getTime() === Q.getTime() ? " " + this._currentClass : "") + ($.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (z && !v || !F[2] ? "" : " title='" + F[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + $.getMonth() + "' data-year='" + $.getFullYear() + "'") + ">" + (z && !v ? "&#xa0;" : j ? "<span class='ui-state-default'>" + $.getDate() + "</span>" : "<a class='ui-state-default" + ($.getTime() === W.getTime() ? " ui-state-highlight" : "") + ($.getTime() === Q.getTime() ? " ui-state-active" : "") + (z ? " ui-priority-secondary" : "") + "' href='#'>" + $.getDate() + "</a>") + "</td>", $.setDate($.getDate() + 1), $ = this._daylightSavingAdjust($);
                        T += O + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, te++), T += "</tbody></table>" + (X ? "</div>" + (Y[0] > 0 && C === Y[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += T
                }
                w += k
            }
            return w += c, t._keyEvent = !1, w
        },
        _generateMonthYearHeader: function(t, e, i, n, s, o, r, a) {
            var l, c, h, u, d, p, f, g, m = this._get(t, "changeMonth"),
                v = this._get(t, "changeYear"),
                y = this._get(t, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                w = "";
            if (o || !m) w += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
            else {
                for (l = n && n.getFullYear() === i, c = s && s.getFullYear() === i, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++)(!l || h >= n.getMonth()) && (!c || h <= s.getMonth()) && (w += "<option value='" + h + "'" + (h === e ? " selected='selected'" : "") + ">" + a[h] + "</option>");
                w += "</select>"
            } if (y || (b += w + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
                        var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                        return isNaN(e) ? d : e
                    }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, g = s ? Math.min(g, s.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"), y && (b += (!o && m && v ? "" : "&#xa0;") + w), b += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var n = t.drawYear + ("Y" === i ? e : 0),
                s = t.drawMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
            t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                n = this._getMinMaxDate(t, "max"),
                s = i && i > e ? i : e;
            return n && s > n ? n : s
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function(t, e, i, n) {
            var s = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function(t, e) {
            var i, n, s = this._getMinMaxDate(t, "min"),
                o = this._getMinMaxDate(t, "max"),
                r = null,
                a = null,
                l = this._get(t, "yearRange");
            return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (a += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || e.getFullYear() <= a)
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, n) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
        }
    }), t.fn.datepicker = function(e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.4"
}(jQuery),
function(t, e) {
    var i = 0,
        n = Array.prototype.slice,
        s = t.cleanData;
    t.cleanData = function(e) {
        for (var i, n = 0; null != (i = e[n]); n++) try {
            t(i).triggerHandler("remove")
        } catch (o) {}
        s(e)
    }, t.widget = function(e, i, n) {
        var s, o, r, a, l = {},
            c = e.split(".")[0];
        e = e.split(".")[1], s = c + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][s.toLowerCase()] = function(e) {
            return !!t.data(e, s)
        }, t[c] = t[c] || {}, o = t[c][e], r = t[c][e] = function(t, e) {
            return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new r(t, e)
        }, t.extend(r, o, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), a = new i, a.options = t.widget.extend({}, a.options), t.each(n, function(e, n) {
            return t.isFunction(n) ? void(l[e] = function() {
                var t = function() {
                        return i.prototype[e].apply(this, arguments)
                    },
                    s = function(t) {
                        return i.prototype[e].apply(this, t)
                    };
                return function() {
                    var e, i = this._super,
                        o = this._superApply;
                    return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                }
            }()) : void(l[e] = n)
        }), r.prototype = t.widget.extend(a, {
            widgetEventPrefix: o ? a.widgetEventPrefix || e : e
        }, l, {
            constructor: r,
            namespace: c,
            widgetName: e,
            widgetFullName: s
        }), o ? (t.each(o._childConstructors, function(e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, r, i._proto)
        }), delete o._childConstructors) : i._childConstructors.push(r), t.widget.bridge(e, r)
    }, t.widget.extend = function(i) {
        for (var s, o, r = n.call(arguments, 1), a = 0, l = r.length; l > a; a++)
            for (s in r[a]) o = r[a][s], r[a].hasOwnProperty(s) && o !== e && (i[s] = t.isPlainObject(o) ? t.isPlainObject(i[s]) ? t.widget.extend({}, i[s], o) : t.widget.extend({}, o) : o);
        return i
    }, t.widget.bridge = function(i, s) {
        var o = s.prototype.widgetFullName || i;
        t.fn[i] = function(r) {
            var a = "string" == typeof r,
                l = n.call(arguments, 1),
                c = this;
            return r = !a && l.length ? t.widget.extend.apply(null, [r].concat(l)) : r, this.each(a ? function() {
                var n, s = t.data(this, o);
                return s ? t.isFunction(s[r]) && "_" !== r.charAt(0) ? (n = s[r].apply(s, l), n !== s && n !== e ? (c = n && n.jquery ? c.pushStack(n.get()) : n, !1) : void 0) : t.error("no such method '" + r + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + r + "'")
            } : function() {
                var e = t.data(this, o);
                e ? e.option(r || {})._init() : t.data(this, o, new s(r, this))
            }), c
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === n && this.destroy()
                }
            }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(i, n) {
            var s, o, r, a = i;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (a = {}, s = i.split("."), i = s.shift(), s.length) {
                    for (o = a[i] = t.widget.extend({}, this.options[i]), r = 0; r < s.length - 1; r++) o[s[r]] = o[s[r]] || {}, o = o[s[r]];
                    if (i = s.pop(), 1 === arguments.length) return o[i] === e ? null : o[i];
                    o[i] = n
                } else {
                    if (1 === arguments.length) return this.options[i] === e ? null : this.options[i];
                    a[i] = n
                }
            return this._setOptions(a), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(e, i, n) {
            var s, o = this;
            "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, r) {
                function a() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0
                }
                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/),
                    c = l[1] + o.eventNamespace,
                    h = l[2];
                h ? s.delegate(h, c, a) : i.bind(c, a)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments)
            }
            var n = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, n) {
            var s, o, r = this.options[e];
            if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (s in o) s in i || (i[s] = o[s]);
            return this.element.trigger(i, n), !(t.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(n, s, o) {
            "string" == typeof s && (s = {
                effect: s
            });
            var r, a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
            s = s || {}, "number" == typeof s && (s = {
                duration: s
            }), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function(i) {
                t(this)[e](), o && o.call(n[0]), i()
            })
        }
    })
}(jQuery),
function(t) {
    var e, i = "ui-button ui-widget ui-state-default ui-corner-all",
        n = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        s = function() {
            var e = t(this);
            setTimeout(function() {
                e.find(":ui-button").button("refresh")
            }, 1)
        },
        o = function(e) {
            var i = e.name,
                n = e.form,
                s = t([]);
            return i && (i = i.replace(/'/g, "\\'"), s = n ? t(n).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function() {
                return !this.form
            })), s
        };
    t.widget("ui.button", {
        version: "1.10.4",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, s), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var n = this,
                r = this.options,
                a = "checkbox" === this.type || "radio" === this.type,
                l = a ? "" : "ui-state-active";
            null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                r.disabled || this === e && t(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                r.disabled || t(this).removeClass(l)
            }).bind("click" + this.eventNamespace, function(t) {
                r.disabled && (t.preventDefault(), t.stopImmediatePropagation())
            }), this._on({
                focus: function() {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function() {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            }), a && this.element.bind("change" + this.eventNamespace, function() {
                n.refresh()
            }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return r.disabled ? !1 : void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (r.disabled) return !1;
                t(this).addClass("ui-state-active"), n.buttonElement.attr("aria-pressed", "true");
                var e = n.element[0];
                o(e).not(e).map(function() {
                    return t(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return r.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, void n.document.one("mouseup", function() {
                    e = null
                }))
            }).bind("mouseup" + this.eventNamespace, function() {
                return r.disabled ? !1 : void t(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(e) {
                return r.disabled ? !1 : void((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"))
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                t(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                e.keyCode === t.ui.keyCode.SPACE && t(this).click()
            })), this._setOption("disabled", r.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var t, e, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(i + " ui-state-active " + n).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(t, e) {
            return this._super(t, e), "disabled" === t ? (this.element.prop("disabled", !!e), void(e && this.buttonElement.removeClass("ui-state-focus"))) : void this._resetButton()
        },
        refresh: function() {
            var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? o(this.element[0]).each(function() {
                t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
            var e = this.buttonElement.removeClass(n),
                i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                s = this.options.icons,
                o = s.primary && s.secondary,
                r = [];
            s.primary || s.secondary ? (this.options.text && r.push("ui-button-text-icon" + (o ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (r.push(o ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : r.push("ui-button-text-only"), e.addClass(r.join(" "))
        }
    }), t.widget("ui.buttonset", {
        version: "1.10.4",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(t, e) {
            "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
        },
        refresh: function() {
            var e = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery),
function(t) {
    var e = !1;
    t(document).mouseup(function() {
        e = !1
    }), t.widget("ui.mouse", {
        version: "1.10.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var n = this,
                    s = 1 === i.which,
                    o = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                return s && !o && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    n.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return n._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return n._mouseUp(t)
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
            }
        },
        _mouseMove: function(e) {
            return t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery),
function(t) {
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(t(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _mouseDrag: function(e, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var n = this._uiHash();
                if (this._trigger("drag", e, n) === !1) return this._mouseUp({}), !1;
                this.position = n.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = this,
                n = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", e) !== !1 && i._clear()
            }) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function(e) {
            return t("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(e) {
            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function(e) {
            var i = this.options,
                n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, n, s = this.options;
            return s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = t(s.containment), n = i[0], void(n && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i))) : void(this.containment = null)
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1,
                s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: s.scrollTop(),
                left: s.scrollLeft()
            }), {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * n
            }
        },
        _generatePosition: function(e) {
            var i, n, s, o, r = this.options,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = e.pageX,
                c = e.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: a.scrollTop(),
                left: a.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (n = this.relative_container.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (c = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (c = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, c = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o)), {
                top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(e, i, n) {
            return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, n)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i) {
            var n = t(this).data("ui-draggable"),
                s = n.options,
                o = t.extend({}, i, {
                    item: n.element
                });
            n.sortables = [], t(s.connectToSortable).each(function() {
                var i = t.data(this, "ui-sortable");
                i && !i.options.disabled && (n.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", e, o))
            })
        },
        stop: function(e, i) {
            var n = t(this).data("ui-draggable"),
                s = t.extend({}, i, {
                    item: n.element
                });
            t.each(n.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === n.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, s))
            })
        },
        drag: function(e, i) {
            var n = t(this).data("ui-draggable"),
                s = this;
            t.each(n.sortables, function() {
                var o = !1,
                    r = this;
                this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, t.each(n.sortables, function() {
                    return this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this !== r && this.instance._intersectsWith(this.instance.containerCache) && t.contains(r.instance.element[0], this.instance.element[0]) && (o = !1), o
                })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(s).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = n.offset.click.top, this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, n._trigger("toSortable", e), n.dropped = this.instance.element, n.currentItem = n.element, this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), n._trigger("fromSortable", e), n.dropped = !1)
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var e = t("body"),
                i = t(this).data("ui-draggable").options;
            e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
        },
        stop: function() {
            var e = t(this).data("ui-draggable").options;
            e._cursor && t("body").css("cursor", e._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i) {
            var n = t(i.helper),
                s = t(this).data("ui-draggable").options;
            n.css("opacity") && (s._opacity = n.css("opacity")), n.css("opacity", s.opacity)
        },
        stop: function(e, i) {
            var n = t(this).data("ui-draggable").options;
            n._opacity && t(i.helper).css("opacity", n._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var e = t(this).data("ui-draggable");
            e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
        },
        drag: function(e) {
            var i = t(this).data("ui-draggable"),
                n = i.options,
                s = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (n.axis && "x" === n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + n.scrollSpeed : e.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + n.scrollSpeed : e.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(document).scrollTop() < n.scrollSensitivity ? s = t(document).scrollTop(t(document).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < n.scrollSensitivity && (s = t(document).scrollTop(t(document).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(document).scrollLeft() < n.scrollSensitivity ? s = t(document).scrollLeft(t(document).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < n.scrollSensitivity && (s = t(document).scrollLeft(t(document).scrollLeft() + n.scrollSpeed)))), s !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function() {
            var e = t(this).data("ui-draggable"),
                i = e.options;
            e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var i = t(this),
                    n = i.offset();
                this !== e.element[0] && e.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: n.top,
                    left: n.left
                })
            })
        },
        drag: function(e, i) {
            var n, s, o, r, a, l, c, h, u, d, p = t(this).data("ui-draggable"),
                f = p.options,
                g = f.snapTolerance,
                m = i.offset.left,
                v = m + p.helperProportions.width,
                y = i.offset.top,
                b = y + p.helperProportions.height;
            for (u = p.snapElements.length - 1; u >= 0; u--) a = p.snapElements[u].left, l = a + p.snapElements[u].width, c = p.snapElements[u].top, h = c + p.snapElements[u].height, a - g > v || m > l + g || c - g > b || y > h + g || !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), {
                snapItem: p.snapElements[u].item
            })), p.snapElements[u].snapping = !1) : ("inner" !== f.snapMode && (n = Math.abs(c - b) <= g, s = Math.abs(h - y) <= g, o = Math.abs(a - v) <= g, r = Math.abs(l - m) <= g, n && (i.position.top = p._convertPositionTo("relative", {
                top: c - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), s && (i.position.top = p._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top - p.margins.top), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: a - p.helperProportions.width
            }).left - p.margins.left), r && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left - p.margins.left)), d = n || s || o || r, "outer" !== f.snapMode && (n = Math.abs(c - y) <= g, s = Math.abs(h - b) <= g, o = Math.abs(a - m) <= g, r = Math.abs(l - v) <= g, n && (i.position.top = p._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top - p.margins.top), s && (i.position.top = p._convertPositionTo("relative", {
                top: h - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: a
            }).left - p.margins.left), r && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l - p.helperProportions.width
            }).left - p.margins.left)), !p.snapElements[u].snapping && (n || s || o || r || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), {
                snapItem: p.snapElements[u].item
            })), p.snapElements[u].snapping = n || s || o || r || d)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function() {
            var e, i = this.data("ui-draggable").options,
                n = t.makeArray(t(i.stack)).sort(function(e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
            n.length && (e = parseInt(t(n[0]).css("zIndex"), 10) || 0, t(n).each(function(i) {
                t(this).css("zIndex", e + i)
            }), this.css("zIndex", e + n.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i) {
            var n = t(i.helper),
                s = t(this).data("ui-draggable").options;
            n.css("zIndex") && (s._zIndex = n.css("zIndex")), n.css("zIndex", s.zIndex)
        },
        stop: function(e, i) {
            var n = t(this).data("ui-draggable").options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex)
        }
    })
}(jQuery),
function(t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }

    function n(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }

    function s(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }
    t.ui = t.ui || {};
    var o, r = Math.max,
        a = Math.abs,
        l = Math.round,
        c = /left|center|right/,
        h = /top|center|bottom/,
        u = /[\+\-]\d+(\.[\d]+)?%?/,
        d = /^\w+/,
        p = /%$/,
        f = t.fn.position;
    t.position = {
        scrollbarWidth: function() {
            if (o !== e) return o;
            var i, n, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                r = s.children()[0];
            return t("body").append(s), i = r.offsetWidth, s.css("overflow", "scroll"), n = r.offsetWidth, i === n && (n = s[0].clientWidth), s.remove(), o = i - n
        },
        getScrollInfo: function(e) {
            var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                o = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
            return {
                width: o ? t.position.scrollbarWidth() : 0,
                height: s ? t.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(e) {
            var i = t(e || window),
                n = t.isWindow(i[0]),
                s = !!i[0] && 9 === i[0].nodeType;
            return {
                element: i,
                isWindow: n,
                isDocument: s,
                offset: i.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: n ? i.width() : i.outerWidth(),
                height: n ? i.height() : i.outerHeight()
            }
        }
    }, t.fn.position = function(e) {
        if (!e || !e.of) return f.apply(this, arguments);
        e = t.extend({}, e);
        var o, p, g, m, v, y, b = t(e.of),
            w = t.position.getWithinInfo(e.within),
            _ = t.position.getScrollInfo(w),
            x = (e.collision || "flip").split(" "),
            k = {};
        return y = s(b), b[0].preventDefault && (e.at = "left top"), p = y.width, g = y.height, m = y.offset, v = t.extend({}, m), t.each(["my", "at"], function() {
            var t, i, n = (e[this] || "").split(" ");
            1 === n.length && (n = c.test(n[0]) ? n.concat(["center"]) : h.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = c.test(n[0]) ? n[0] : "center", n[1] = h.test(n[1]) ? n[1] : "center", t = u.exec(n[0]), i = u.exec(n[1]), k[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(n[0])[0], d.exec(n[1])[0]]
        }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), o = i(k.at, p, g), v.left += o[0], v.top += o[1], this.each(function() {
            var s, c, h = t(this),
                u = h.outerWidth(),
                d = h.outerHeight(),
                f = n(this, "marginLeft"),
                y = n(this, "marginTop"),
                C = u + f + n(this, "marginRight") + _.width,
                S = d + y + n(this, "marginBottom") + _.height,
                D = t.extend({}, v),
                T = i(k.my, h.outerWidth(), h.outerHeight());
            "right" === e.my[0] ? D.left -= u : "center" === e.my[0] && (D.left -= u / 2), "bottom" === e.my[1] ? D.top -= d : "center" === e.my[1] && (D.top -= d / 2), D.left += T[0], D.top += T[1], t.support.offsetFractions || (D.left = l(D.left), D.top = l(D.top)), s = {
                marginLeft: f,
                marginTop: y
            }, t.each(["left", "top"], function(i, n) {
                t.ui.position[x[i]] && t.ui.position[x[i]][n](D, {
                    targetWidth: p,
                    targetHeight: g,
                    elemWidth: u,
                    elemHeight: d,
                    collisionPosition: s,
                    collisionWidth: C,
                    collisionHeight: S,
                    offset: [o[0] + T[0], o[1] + T[1]],
                    my: e.my,
                    at: e.at,
                    within: w,
                    elem: h
                })
            }), e.using && (c = function(t) {
                var i = m.left - D.left,
                    n = i + p - u,
                    s = m.top - D.top,
                    o = s + g - d,
                    l = {
                        target: {
                            element: b,
                            left: m.left,
                            top: m.top,
                            width: p,
                            height: g
                        },
                        element: {
                            element: h,
                            left: D.left,
                            top: D.top,
                            width: u,
                            height: d
                        },
                        horizontal: 0 > n ? "left" : i > 0 ? "right" : "center",
                        vertical: 0 > o ? "top" : s > 0 ? "bottom" : "middle"
                    };
                u > p && a(i + n) < p && (l.horizontal = "center"), d > g && a(s + o) < g && (l.vertical = "middle"), l.important = r(a(i), a(n)) > r(a(s), a(o)) ? "horizontal" : "vertical", e.using.call(this, t, l)
            }), h.offset(t.extend(D, {
                using: c
            }))
        })
    }, t.ui.position = {
        fit: {
            left: function(t, e) {
                var i, n = e.within,
                    s = n.isWindow ? n.scrollLeft : n.offset.left,
                    o = n.width,
                    a = t.left - e.collisionPosition.marginLeft,
                    l = s - a,
                    c = a + e.collisionWidth - o - s;
                e.collisionWidth > o ? l > 0 && 0 >= c ? (i = t.left + l + e.collisionWidth - o - s, t.left += l - i) : t.left = c > 0 && 0 >= l ? s : l > c ? s + o - e.collisionWidth : s : l > 0 ? t.left += l : c > 0 ? t.left -= c : t.left = r(t.left - a, t.left)
            },
            top: function(t, e) {
                var i, n = e.within,
                    s = n.isWindow ? n.scrollTop : n.offset.top,
                    o = e.within.height,
                    a = t.top - e.collisionPosition.marginTop,
                    l = s - a,
                    c = a + e.collisionHeight - o - s;
                e.collisionHeight > o ? l > 0 && 0 >= c ? (i = t.top + l + e.collisionHeight - o - s, t.top += l - i) : t.top = c > 0 && 0 >= l ? s : l > c ? s + o - e.collisionHeight : s : l > 0 ? t.top += l : c > 0 ? t.top -= c : t.top = r(t.top - a, t.top)
            }
        },
        flip: {
            left: function(t, e) {
                var i, n, s = e.within,
                    o = s.offset.left + s.scrollLeft,
                    r = s.width,
                    l = s.isWindow ? s.scrollLeft : s.offset.left,
                    c = t.left - e.collisionPosition.marginLeft,
                    h = c - l,
                    u = c + e.collisionWidth - r - l,
                    d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                    p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                    f = -2 * e.offset[0];
                0 > h ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || i < a(h)) && (t.left += d + p + f)) : u > 0 && (n = t.left - e.collisionPosition.marginLeft + d + p + f - l, (n > 0 || a(n) < u) && (t.left += d + p + f))
            },
            top: function(t, e) {
                var i, n, s = e.within,
                    o = s.offset.top + s.scrollTop,
                    r = s.height,
                    l = s.isWindow ? s.scrollTop : s.offset.top,
                    c = t.top - e.collisionPosition.marginTop,
                    h = c - l,
                    u = c + e.collisionHeight - r - l,
                    d = "top" === e.my[1],
                    p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                    f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                    g = -2 * e.offset[1];
                0 > h ? (n = t.top + p + f + g + e.collisionHeight - r - o, t.top + p + f + g > h && (0 > n || n < a(h)) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || a(i) < u) && (t.top += p + f + g))
            }
        },
        flipfit: {
            left: function() {
                t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function() {
        var e, i, n, s, o, r = document.getElementsByTagName("body")[0],
            a = document.createElement("div");
        e = document.createElement(r ? "div" : "body"), n = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, r && t.extend(n, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (o in n) e.style[o] = n[o];
        e.appendChild(a), i = r || document.documentElement, i.insertBefore(e, i.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", s = t(a).offset().left, t.support.offsetFractions = s > 10 && 11 > s, e.innerHTML = "", i.removeChild(e)
    }()
}(jQuery),
function(t) {
    function e(t) {
        return parseInt(t, 10) || 0
    }

    function i(t) {
        return !isNaN(parseInt(t, 10))
    }
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var e, i, n, s, o, r = this,
                a = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                _aspectRatio: !!a.aspectRatio,
                aspectRatio: a.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; i < e.length; i++) n = t.trim(e[i]), o = "ui-resizable-" + n, s = t("<div class='ui-resizable-handle " + o + "'></div>"), s.css({
                    zIndex: a.zIndex
                }), "se" === n && s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[n] = ".ui-resizable-" + n, this.element.append(s);
            this._renderAxis = function(e) {
                var i, n, s, o;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), t(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                r.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = s && s[1] ? s[1] : "se")
            }), a.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                a.disabled || (t(this).removeClass("ui-resizable-autohide"), r._handles.show())
            }).mouseleave(function() {
                a.disabled || r.resizing || (t(this).addClass("ui-resizable-autohide"), r._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function(e) {
            var i, n, s = !1;
            for (i in this.handles) n = t(this.handles[i])[0], (n === e.target || t.contains(n, e.target)) && (s = !0);
            return !this.options.disabled && s
        },
        _mouseStart: function(i) {
            var n, s, o, r = this.options,
                a = this.element.position(),
                l = this.element;
            return this.resizing = !0, /absolute/.test(l.css("position")) ? l.css({
                position: "absolute",
                top: l.css("top"),
                left: l.css("left")
            }) : l.is(".ui-draggable") && l.css({
                position: "absolute",
                top: a.top,
                left: a.left
            }), this._renderProxy(), n = e(this.helper.css("left")), s = e(this.helper.css("top")), r.containment && (n += t(r.containment).scrollLeft() || 0, s += t(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: n,
                top: s
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: l.width(),
                height: l.height()
            }, this.originalSize = this._helper ? {
                width: l.outerWidth(),
                height: l.outerHeight()
            } : {
                width: l.width(),
                height: l.height()
            }, this.originalPosition = {
                left: n,
                top: s
            }, this.sizeDiff = {
                width: l.outerWidth() - l.width(),
                height: l.outerHeight() - l.height()
            }, this.originalMousePosition = {
                left: i.pageX,
                top: i.pageY
            }, this.aspectRatio = "number" == typeof r.aspectRatio ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === o ? this.axis + "-resize" : o), l.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
        },
        _mouseDrag: function(e) {
            var i, n = this.helper,
                s = {},
                o = this.originalMousePosition,
                r = this.axis,
                a = this.position.top,
                l = this.position.left,
                c = this.size.width,
                h = this.size.height,
                u = e.pageX - o.left || 0,
                d = e.pageY - o.top || 0,
                p = this._change[r];
            return p ? (i = p.apply(this, [e, u, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== a && (s.top = this.position.top + "px"), this.position.left !== l && (s.left = this.position.left + "px"), this.size.width !== c && (s.width = this.size.width + "px"), this.size.height !== h && (s.height = this.size.height + "px"), n.css(s), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || this._trigger("resize", e, this.ui()), !1) : !1
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, n, s, o, r, a, l, c = this.options,
                h = this;
            return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && t.ui.hasScroll(i[0], "left") ? 0 : h.sizeDiff.height, o = n ? 0 : h.sizeDiff.width, r = {
                width: h.helper.width() - o,
                height: h.helper.height() - s
            }, a = parseInt(h.element.css("left"), 10) + (h.position.left - h.originalPosition.left) || null, l = parseInt(h.element.css("top"), 10) + (h.position.top - h.originalPosition.top) || null, c.animate || this.element.css(t.extend(r, {
                top: l,
                left: a
            })), h.helper.height(h.size.height), h.helper.width(h.size.width), this._helper && !c.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function(t) {
            var e, n, s, o, r, a = this.options;
            r = {
                minWidth: i(a.minWidth) ? a.minWidth : 0,
                maxWidth: i(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: i(a.minHeight) ? a.minHeight : 0,
                maxHeight: i(a.maxHeight) ? a.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = r.minHeight * this.aspectRatio, s = r.minWidth / this.aspectRatio, n = r.maxHeight * this.aspectRatio, o = r.maxWidth / this.aspectRatio, e > r.minWidth && (r.minWidth = e), s > r.minHeight && (r.minHeight = s), n < r.maxWidth && (r.maxWidth = n), o < r.maxHeight && (r.maxHeight = o)), this._vBoundaries = r
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position,
                n = this.size,
                s = this.axis;
            return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (n.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (n.height - t.height), t.left = e.left + (n.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                n = this.axis,
                s = i(t.width) && e.maxWidth && e.maxWidth < t.width,
                o = i(t.height) && e.maxHeight && e.maxHeight < t.height,
                r = i(t.width) && e.minWidth && e.minWidth > t.width,
                a = i(t.height) && e.minHeight && e.minHeight > t.height,
                l = this.originalPosition.left + this.originalSize.width,
                c = this.position.top + this.size.height,
                h = /sw|nw|w/.test(n),
                u = /nw|ne|n/.test(n);
            return r && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), o && (t.height = e.maxHeight), r && h && (t.left = l - e.minWidth), s && h && (t.left = l - e.maxWidth), a && u && (t.top = c - e.minHeight), o && u && (t.top = c - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var t, e, i, n, s, o = this.helper || this.element;
                for (t = 0; t < this._proportionallyResizeElements.length; t++) {
                    if (s = this._proportionallyResizeElements[t], !this.borderDif)
                        for (this.borderDif = [], i = [s.css("borderTopWidth"), s.css("borderRightWidth"), s.css("borderBottomWidth"), s.css("borderLeftWidth")], n = [s.css("paddingTop"), s.css("paddingRight"), s.css("paddingBottom"), s.css("paddingLeft")], e = 0; e < i.length; e++) this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(n[e], 10) || 0);
                    s.css({
                        height: o.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: o.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize,
                    n = this.originalPosition;
                return {
                    left: n.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var n = this.originalSize,
                    s = this.originalPosition;
                return {
                    top: s.top + i,
                    height: n.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
            },
            sw: function(e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
            },
            ne: function(e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
            },
            nw: function(e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).data("ui-resizable"),
                n = i.options,
                s = i._proportionallyResizeElements,
                o = s.length && /textarea/i.test(s[0].nodeName),
                r = o && t.ui.hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                a = o ? 0 : i.sizeDiff.width,
                l = {
                    width: i.size.width - a,
                    height: i.size.height - r
                },
                c = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                h = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, h && c ? {
                top: h,
                left: c
            } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function() {
                    var n = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    s && s.length && t(s[0]).css({
                        width: n.width,
                        height: n.height
                    }), i._updateCache(n), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var i, n, s, o, r, a, l, c = t(this).data("ui-resizable"),
                h = c.options,
                u = c.element,
                d = h.containment,
                p = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
            p && (c.containerElement = t(p), /document/.test(d) || d === document ? (c.containerOffset = {
                left: 0,
                top: 0
            }, c.containerPosition = {
                left: 0,
                top: 0
            }, c.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (i = t(p), n = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
                n[t] = e(i.css("padding" + s))
            }), c.containerOffset = i.offset(), c.containerPosition = i.position(), c.containerSize = {
                height: i.innerHeight() - n[3],
                width: i.innerWidth() - n[1]
            }, s = c.containerOffset, o = c.containerSize.height, r = c.containerSize.width, a = t.ui.hasScroll(p, "left") ? p.scrollWidth : r, l = t.ui.hasScroll(p) ? p.scrollHeight : o, c.parentData = {
                element: p,
                left: s.left,
                top: s.top,
                width: a,
                height: l
            }))
        },
        resize: function(e) {
            var i, n, s, o, r = t(this).data("ui-resizable"),
                a = r.options,
                l = r.containerOffset,
                c = r.position,
                h = r._aspectRatio || e.shiftKey,
                u = {
                    top: 0,
                    left: 0
                },
                d = r.containerElement;
            d[0] !== document && /static/.test(d.css("position")) && (u = l), c.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - u.left), h && (r.size.height = r.size.width / r.aspectRatio), r.position.left = a.helper ? l.left : 0), c.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), h && (r.size.width = r.size.height * r.aspectRatio), r.position.top = r._helper ? l.top : 0), r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top, i = Math.abs((r._helper ? r.offset.left - u.left : r.offset.left - u.left) + r.sizeDiff.width), n = Math.abs((r._helper ? r.offset.top - u.top : r.offset.top - l.top) + r.sizeDiff.height), s = r.containerElement.get(0) === r.element.parent().get(0), o = /relative|absolute/.test(r.containerElement.css("position")), s && o && (i -= Math.abs(r.parentData.left)), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, h && (r.size.height = r.size.width / r.aspectRatio)), n + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - n, h && (r.size.width = r.size.height * r.aspectRatio))
        },
        stop: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                n = e.containerOffset,
                s = e.containerPosition,
                o = e.containerElement,
                r = t(e.helper),
                a = r.offset(),
                l = r.outerWidth() - e.sizeDiff.width,
                c = r.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: a.left - s.left - n.left,
                width: l,
                height: c
            }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: a.left - s.left - n.left,
                width: l,
                height: c
            })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                n = function(e) {
                    t(e).each(function() {
                        var e = t(this);
                        e.data("ui-resizable-alsoresize", {
                            width: parseInt(e.width(), 10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10)
                        })
                    })
                };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? n(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], n(i.alsoResize)) : t.each(i.alsoResize, function(t) {
                n(t)
            })
        },
        resize: function(e, i) {
            var n = t(this).data("ui-resizable"),
                s = n.options,
                o = n.originalSize,
                r = n.originalPosition,
                a = {
                    height: n.size.height - o.height || 0,
                    width: n.size.width - o.width || 0,
                    top: n.position.top - r.top || 0,
                    left: n.position.left - r.left || 0
                },
                l = function(e, n) {
                    t(e).each(function() {
                        var e = t(this),
                            s = t(this).data("ui-resizable-alsoresize"),
                            o = {},
                            r = n && n.length ? n : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        t.each(r, function(t, e) {
                            var i = (s[e] || 0) + (a[e] || 0);
                            i && i >= 0 && (o[e] = i || null)
                        }), e.css(o)
                    })
                };
            "object" != typeof s.alsoResize || s.alsoResize.nodeType ? l(s.alsoResize) : t.each(s.alsoResize, function(t, e) {
                l(t, e)
            })
        },
        stop: function() {
            t(this).removeData("resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                n = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: n.height,
                width: n.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                n = e.size,
                s = e.originalSize,
                o = e.originalPosition,
                r = e.axis,
                a = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                l = a[0] || 1,
                c = a[1] || 1,
                h = Math.round((n.width - s.width) / l) * l,
                u = Math.round((n.height - s.height) / c) * c,
                d = s.width + h,
                p = s.height + u,
                f = i.maxWidth && i.maxWidth < d,
                g = i.maxHeight && i.maxHeight < p,
                m = i.minWidth && i.minWidth > d,
                v = i.minHeight && i.minHeight > p;
            i.grid = a, m && (d += l), v && (p += c), f && (d -= l), g && (p -= c), /^(se|s|e)$/.test(r) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(r) ? (e.size.width = d, e.size.height = p, e.position.top = o.top - u) : /^(sw)$/.test(r) ? (e.size.width = d, e.size.height = p, e.position.left = o.left - h) : (p - c > 0 ? (e.size.height = p, e.position.top = o.top - u) : (e.size.height = c, e.position.top = o.top + s.height - c), d - l > 0 ? (e.size.width = d, e.position.left = o.left - h) : (e.size.width = l, e.position.left = o.left + s.width - l))
        }
    })
}(jQuery),
function(t) {
    var e = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        i = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    t.widget("ui.dialog", {
        version: "1.10.4",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i, n = this;
            if (this._isOpen && this._trigger("beforeClose", e) !== !1) {
                if (this._isOpen = !1, this._destroyOverlay(), !this.opener.filter(":focusable").focus().length) try {
                    i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && t(i).blur()
                } catch (s) {}
                this._hide(this.uiDialog, this.options.hide, function() {
                    n._trigger("close", e)
                })
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, e) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !e && this._trigger("focus", t), i
        },
        open: function() {
            var e = this;
            return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                e._focusTabbable(), e._trigger("focus")
            }), void this._trigger("open"))
        },
        _focusTabbable: function() {
            var t = this.element.find("[autofocus]");
            t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
        },
        _keepFocus: function(e) {
            function i() {
                var e = this.document[0].activeElement,
                    i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                i || this._focusTabbable()
            }
            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB) {
                        var i = this.uiDialog.find(":tabbable"),
                            n = i.filter(":first"),
                            s = i.filter(":last");
                        e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (s.focus(1), e.preventDefault()) : (n.focus(1), e.preventDefault())
                    }
                },
                mousedown: function(t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function(e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function(t) {
                    t.preventDefault(), this.close(t)
                }
            }), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            })
        },
        _title: function(t) {
            this.options.title || t.html("&#160;"), t.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function() {
            var e = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(i, function(i, n) {
                var s, o;
                n = t.isFunction(n) ? {
                    click: n,
                    text: i
                } : n, n = t.extend({
                    type: "button"
                }, n), s = n.click, n.click = function() {
                    s.apply(e.element[0], arguments)
                }, o = {
                    icons: n.icons,
                    text: n.showText
                }, delete n.icons, delete n.showText, t("<button></button>", n).button(o).appendTo(e.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            var i = this,
                n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(n, s) {
                    t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s))
                },
                drag: function(t, n) {
                    i._trigger("drag", t, e(n))
                },
                stop: function(s, o) {
                    n.position = [o.position.left - i.document.scrollLeft(), o.position.top - i.document.scrollTop()], t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o))
                }
            })
        },
        _makeResizable: function() {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            var i = this,
                n = this.options,
                s = n.resizable,
                o = this.uiDialog.css("position"),
                r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: this._minHeight(),
                handles: r,
                start: function(n, s) {
                    t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s))
                },
                resize: function(t, n) {
                    i._trigger("resize", t, e(n))
                },
                stop: function(s, o) {
                    n.height = t(this).height(), n.width = t(this).width(), t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o))
                }
            }).css("position", o)
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function(n) {
            var s = this,
                o = !1,
                r = {};
            t.each(n, function(t, n) {
                s._setOption(t, n), t in e && (o = !0), t in i && (r[t] = n)
            }), o && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", r)
        },
        _setOption: function(t, e) {
            var i, n, s = this.uiDialog;
            "dialogClass" === t && s.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                label: "" + e
            }), "draggable" === t && (i = s.is(":data(ui-draggable)"), i && !e && s.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (n = s.is(":data(ui-resizable)"), n && !e && s.resizable("destroy"), n && "string" == typeof e && s.resizable("option", "handles", e), n || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, e, i, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(e) {
            return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = this,
                    i = this.widgetFullName;
                t.ui.dialog.overlayInstances || this._delay(function() {
                    t.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(n) {
                        e._allowInteraction(n) || (n.preventDefault(), t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                    })
                }), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), t.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function() {
            this.options.modal && this.overlay && (t.ui.dialog.overlayInstances--, t.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    }), t.ui.dialog.overlayInstances = 0, t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
        _position: function() {
            var e, i = this.options.position,
                n = [],
                s = [0, 0];
            i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (n = i.split ? i.split(" ") : [i[0], i[1]], 1 === n.length && (n[1] = n[0]), t.each(["left", "top"], function(t, e) {
                +n[t] === n[t] && (s[t] = n[t], n[t] = e)
            }), i = {
                my: n[0] + (s[0] < 0 ? s[0] : "+" + s[0]) + " " + n[1] + (s[1] < 0 ? s[1] : "+" + s[1]),
                at: n.join(" ")
            }), i = t.extend({}, t.ui.dialog.prototype.options.position, i)) : i = t.ui.dialog.prototype.options.position, e = this.uiDialog.is(":visible"), e || this.uiDialog.show(), this.uiDialog.position(i), e || this.uiDialog.hide()
        }
    })
}(jQuery),
function(t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }

    function i(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(e, i) {
            var n = null,
                s = !1,
                o = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                return t.data(this, o.widgetName + "-item") === o ? (n = t(this), !1) : void 0
            }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), n && (!this.options.handle || i || (t(this.options.handle, n).find("*").addBack().each(function() {
                this === e.target && (s = !0)
            }), s)) ? (this.currentItem = n, this._removeCurrentsFromItems(), !0) : !1)
        },
        _mouseStart: function(e, i, n) {
            var s, o, r = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var i, n, s, o, r = this.options,
                a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - t(document).scrollTop() < r.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - r.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < r.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + r.scrollSpeed)), e.pageX - t(document).scrollLeft() < r.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - r.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < r.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + r.scrollSpeed))), a !== !1 && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (n = this.items[i], s = n.item[0], o = this._intersectsWithPointer(n), o && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], s) : !0)) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                    this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var n = this,
                        s = this.placeholder.offset(),
                        o = this.options.axis,
                        r = {};
                    o && "x" !== o || (r.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (r.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() {
                        n._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !n.length && e.key && n.push(e.key + "="), n.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, i.each(function() {
                n.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), n
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                n = this.positionAbs.top,
                s = n + this.helperProportions.height,
                o = t.left,
                r = o + t.width,
                a = t.top,
                l = a + t.height,
                c = this.offset.click.top,
                h = this.offset.click.left,
                u = "x" === this.options.axis || n + c > a && l > n + c,
                d = "y" === this.options.axis || e + h > o && r > e + h,
                p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function(t) {
            var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                n = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                s = i && n,
                o = this._getDragVerticalDirection(),
                r = this._getDragHorizontalDirection();
            return s ? this.floating ? r && "right" === r || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                n = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                s = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && n || "left" === o && !n : s && ("down" === s && i || "up" === s && !i)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            function i() {
                a.push(this)
            }
            var n, s, o, r, a = [],
                l = [],
                c = this._connectWith();
            if (c && e)
                for (n = c.length - 1; n >= 0; n--)
                    for (o = t(c[n]), s = o.length - 1; s >= 0; s--) r = t.data(o[s], this.widgetFullName), r && r !== this && !r.options.disabled && l.push([t.isFunction(r.options.items) ? r.options.items.call(r.element) : t(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
            return t(a)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; i < e.length; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i, n, s, o, r, a, l, c, h = this.items,
                u = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (s = t(d[i]), n = s.length - 1; n >= 0; n--) o = t.data(s[n], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                        item: this.currentItem
                    }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (r = u[i][1], a = u[i][0], n = 0, c = a.length; c > n; n++) l = t(a[n]), l.data(this.widgetName + "-item", r), h.push({
                    item: l,
                    instance: r,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, n, s, o;
            for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, n = e.options;
            n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                element: function() {
                    var n = e.currentItem[0].nodeName.toLowerCase(),
                        s = t("<" + n + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === n ? e.currentItem.children().each(function() {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(s)
                    }) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                },
                update: function(t, s) {
                    (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function(n) {
            var s, o, r, a, l, c, h, u, d, p, f = null,
                g = null;
            for (s = this.containers.length - 1; s >= 0; s--)
                if (!t.contains(this.currentItem[0], this.containers[s].element[0]))
                    if (this._intersectsWith(this.containers[s].containerCache)) {
                        if (f && t.contains(this.containers[s].element[0], f.element[0])) continue;
                        f = this.containers[s], g = s
                    } else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", n, this._uiHash(this)), this.containers[s].containerCache.over = 0);
            if (f)
                if (1 === this.containers.length) this.containers[g].containerCache.over || (this.containers[g]._trigger("over", n, this._uiHash(this)), this.containers[g].containerCache.over = 1);
                else {
                    for (r = 1e4, a = null, p = f.floating || i(this.currentItem), l = p ? "left" : "top", c = p ? "width" : "height", h = this.positionAbs[l] + this.offset.click[l], o = this.items.length - 1; o >= 0; o--) t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[l], d = !1, Math.abs(u - h) > Math.abs(u + this.items[o][c] - h) && (d = !0, u += this.items[o][c]), Math.abs(u - h) < r && (r = Math.abs(u - h), a = this.items[o], this.direction = d ? "up" : "down"));
                    if (!a && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[g]) return;
                    a ? this._rearrange(n, a, null, !0) : this._rearrange(n, null, this.containers[g].element, !0), this._trigger("change", n, this._uiHash()), this.containers[g]._trigger("change", n, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", n, this._uiHash(this)), this.containers[g].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options,
                n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, n, s = this.options;
            "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === s.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === s.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1,
                s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
            }
        },
        _generatePosition: function(e) {
            var i, n, s = this.options,
                o = e.pageX,
                r = e.pageY,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay(function() {
                s === this.counter && this.refreshPositions(!n)
            })
        },
        _clear: function(t, e) {
            function i(t, e, i) {
                return function(n) {
                    i._trigger(t, n, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var n, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && s.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                this._trigger("update", t, this._uiHash())
            }), this !== this.currentContainer && (e || (s.push(function(t) {
                this._trigger("remove", t, this._uiHash())
            }), s.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), s.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), n = 0; n < s.length; n++) s[n].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (n = 0; n < s.length; n++) s[n].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
}(jQuery),
function() {
    window.ActiveAdmin = {}, window.AA || (window.AA = window.ActiveAdmin)
}.call(this),
function() {
    $(function() {
        return $(".batch_actions_selector li a").click(function(t) {
            var e;
            return t.stopPropagation(), t.preventDefault(), (e = $(this).data("confirm")) ? ActiveAdmin.modal_dialog(e, $(this).data("inputs"), function(t) {
                return function(e) {
                    return $(t).trigger("confirm:complete", e)
                }
            }(this)) : $(this).trigger("confirm:complete")
        }), $(".batch_actions_selector li a").on("confirm:complete", function(t, e) {
            var i;
            return (i = JSON.stringify(e)) ? $("#batch_action_inputs").val(i) : $("#batch_action_inputs").attr("disabled", "disabled"), $("#batch_action").val($(this).data("action")), $("#collection_selection").submit()
        }), $(".batch_actions_selector").length && $(":checkbox.toggle_all").length ? ($(".paginated_collection table.index_table").length ? $(".paginated_collection table.index_table").tableCheckboxToggler() : $(".paginated_collection").checkboxToggler(), $(document).on("change", ".paginated_collection :checkbox", function() {
            return $(".batch_actions_selector").each($(".paginated_collection :checkbox:checked").length ? function() {
                return $(this).aaDropdownMenu("enable")
            } : function() {
                return $(this).aaDropdownMenu("disable")
            })
        })) : void 0
    })
}.call(this),
function() {
    ActiveAdmin.CheckboxToggler = function() {
        function t(t, e) {
            var i;
            this.options = t, this.container = e, i = {}, this.options = $.extend(i, t), this._init(), this._bind()
        }
        return t.prototype._init = function() {
            if (!this.container) throw new Error("Container element not found");
            if (this.$container = $(this.container), !this.$container.find(".toggle_all").length) throw new Error('"toggle all" checkbox not found');
            return this.toggle_all_checkbox = this.$container.find(".toggle_all"), this.checkboxes = this.$container.find(":checkbox").not(this.toggle_all_checkbox)
        }, t.prototype._bind = function() {
            return this.checkboxes.change(function(t) {
                return function(e) {
                    return t._didChangeCheckbox(e.target)
                }
            }(this)), this.toggle_all_checkbox.change(function(t) {
                return function() {
                    return t._didChangeToggleAllCheckbox()
                }
            }(this))
        }, t.prototype._didChangeCheckbox = function() {
            switch (this.checkboxes.filter(":checked").length) {
                case this.checkboxes.length - 1:
                    return this.toggle_all_checkbox.prop({
                        checked: null
                    });
                case this.checkboxes.length:
                    return this.toggle_all_checkbox.prop({
                        checked: !0
                    })
            }
        }, t.prototype._didChangeToggleAllCheckbox = function() {
            var t;
            return t = this.toggle_all_checkbox.prop("checked") ? !0 : null, this.checkboxes.each(function(e) {
                return function(i, n) {
                    return $(n).prop({
                        checked: t
                    }), e._didChangeCheckbox(n)
                }
            }(this))
        }, t
    }(), $.widget.bridge("checkboxToggler", ActiveAdmin.CheckboxToggler)
}.call(this),
function() {
    ActiveAdmin.DropdownMenu = function() {
        function t(t, e) {
            var i;
            this.options = t, this.element = e, this.$element = $(this.element), i = {
                fadeInDuration: 20,
                fadeOutDuration: 100,
                onClickActionItemCallback: null
            }, this.options = $.extend(i, t), this.isOpen = !1, this.$menuButton = this.$element.find(".dropdown_menu_button"), this.$menuList = this.$element.find(".dropdown_menu_list_wrapper"), this._buildMenuList(), this._bind()
        }
        return t.prototype.open = function() {
            return this.isOpen = !0, this.$menuList.fadeIn(this.options.fadeInDuration), this._position(), this
        }, t.prototype.close = function() {
            return this.isOpen = !1, this.$menuList.fadeOut(this.options.fadeOutDuration), this
        }, t.prototype.destroy = function() {
            return this.$element.unbind(), this.$element = null, this
        }, t.prototype.isDisabled = function() {
            return this.$menuButton.hasClass("disabled")
        }, t.prototype.disable = function() {
            return this.$menuButton.addClass("disabled")
        }, t.prototype.enable = function() {
            return this.$menuButton.removeClass("disabled")
        }, t.prototype.option = function(t, e) {
            return $.isPlainObject(t) ? this.options = $.extend(!0, this.options, t) : null != t ? this.options[t] : this.options[t] = e
        }, t.prototype._buildMenuList = function() {
            return this.$nipple = $('<div class="dropdown_menu_nipple"></div>'), this.$menuList.prepend(this.$nipple), this.$menuList.hide()
        }, t.prototype._bind = function() {
            return $("body").click(function(t) {
                return function() {
                    return t.isOpen ? t.close() : void 0
                }
            }(this)), this.$menuButton.click(function(t) {
                return function() {
                    return t.isDisabled() || (t.isOpen ? t.close() : t.open()), !1
                }
            }(this))
        }, t.prototype._position = function() {
            var t, e, i, n, s, o, r, a;
            return this.$menuList.css("top", this.$menuButton.position().top + this.$menuButton.outerHeight() + 10), e = this.$menuButton.position().left, t = this.$menuButton.outerWidth() / 2, i = e + 2 * t, o = this.$menuList.outerWidth() / 2, r = this.$nipple.outerWidth() / 2, a = $(window).width(), n = e + t - o, s = e + t + o, 0 > n ? (this.$menuList.css("left", e), this.$nipple.css("left", t - r)) : s > a ? (this.$menuList.css("right", a - i), this.$nipple.css("right", t - r)) : (this.$menuList.css("left", n), this.$nipple.css("left", o - r))
        }, t
    }(), $.widget.bridge("aaDropdownMenu", ActiveAdmin.DropdownMenu), $(function() {
        return $(".dropdown_menu").aaDropdownMenu()
    })
}.call(this),
function() {
    var t, e;
    $(function() {
        return $(document).on("click", "a.button.has_many_remove", function(t) {
            var i, n;
            return t.preventDefault(), i = $(this).closest(".has_many_container"), n = $(this).closest("fieldset"), e(i), i.trigger("has_many_remove:before", [n]), n.remove()
        }), $(document).on("click", "a.button.has_many_add", function(t) {
            var i, n, s, o, r, a;
            return t.preventDefault(), r = $(this).closest(".has_many_container"), r.trigger(i = $.Event("has_many_add:before")), i.isDefaultPrevented() ? void 0 : (o = r.data("has_many_index") || r.children("fieldset").length - 1, r.data({
                has_many_index: ++o
            }), a = new RegExp($(this).data("placeholder"), "g"), s = $(this).data("html").replace(a, o), n = $(s).insertBefore(this), e(r), r.trigger("has_many_add:after", [n]))
        }), $(document).on("change", '.has_many_container[data-sortable] :input[name$="[_destroy]"]', function() {
            return e($(this).closest(".has_many"))
        }), t(), $(document).on("has_many_add:after", ".has_many_container", t)
    }), t = function() {
        var t;
        return t = $(".has_many_container[data-sortable]:not(.ui-sortable)"), t.sortable({
            items: "> fieldset",
            handle: "> ol > .handle",
            stop: e
        }), t.each(e)
    }, e = function(t) {
        var e, i;
        return t = t instanceof jQuery ? t : $(this), e = t.data("sortable"), i = 0, t.children("fieldset").each(function() {
            var t, n;
            return t = $(this).find("> ol > .input > :input[name$='[_destroy]']"), n = $(this).find("> ol > .input > :input[name$='[" + e + "]']"), n.length ? n.val(t.is(":checked") ? "" : i++) : void 0
        })
    }
}.call(this),
function() {
    ActiveAdmin.modal_dialog = function(t, e, i) {
        var n, s, o, r, a, l, c, h, u, d;
        s = '<form id="dialog_confirm" title="' + t + '"><ul>';
        for (r in e) {
            if (l = e[r], /^(datepicker|checkbox|text)$/.test(l)) h = "input";
            else if ("textarea" === l) h = "textarea";
            else {
                if (!$.isArray(l)) throw new Error("Unsupported input type: {" + r + ": " + l + "}");
                u = ["select", "option", l, ""], h = u[0], n = u[1], a = u[2], l = u[3]
            }
            o = "datepicker" === l ? l : "", s += "<li>\n<label>" + (r.charAt(0).toUpperCase() + r.slice(1)) + "</label>\n<" + h + ' name="' + r + '" class="' + o + '" type="' + l + '">' + (a ? function() {
                var t, e, i;
                for (i = [], t = 0, e = a.length; e > t; t++) c = a[t], i.push($.isArray(c) ? "<" + n + " value=" + c[1] + ">" + c[0] + "</" + n + ">" : "<" + n + ">" + c + "</" + n + ">");
                return i
            }().join("") : "") + ("</" + h + ">") + "</li>", d = [], h = d[0], n = d[1], a = d[2], l = d[3], o = d[4]
        }
        return s += "</ul></form>", $(s).appendTo("body").dialog({
            modal: !0,
            dialogClass: "active_admin_dialog",
            buttons: {
                OK: function() {
                    return i($(this).serializeObject()), $(this).dialog("close")
                },
                Cancel: function() {
                    return $(this).dialog("close").remove()
                }
            }
        })
    }
}.call(this),
function() {
    ActiveAdmin.Popover = function() {
        function t(t, e) {
            var i;
            this.options = t, this.element = e, this.$element = $(this.element), i = {
                fadeInDuration: 20,
                fadeOutDuration: 100,
                autoOpen: !0,
                pageWrapperElement: "#wrapper",
                onClickActionItemCallback: null
            }, this.options = $.extend(i, t), this.isOpen = !1, (this.$popover = $(this.$element.attr("href"))).length || (this.$popover = this.$element.next(".popover")), this._buildPopover(), this._bind()
        }
        return t.prototype.open = function() {
            return this.isOpen = !0, this.$popover.fadeIn(this.options.fadeInDuration), this._positionPopover(), this._positionNipple(), this
        }, t.prototype.close = function() {
            return this.isOpen = !1, this.$popover.fadeOut(this.options.fadeOutDuration), this
        }, t.prototype.destroy = function() {
            return this.$element.removeData("popover"), this.$element.unbind(), this.$element = null, this
        }, t.prototype._buildPopover = function() {
            return this.$nipple = $('<div class="popover_nipple"></div>'), this.$popover.prepend(this.$nipple), this.$popover.hide(), this.$popover.addClass("popover")
        }, t.prototype._bind = function() {
            return $(this.options.pageWrapperElement).click(function(t) {
                return function() {
                    return t.isOpen ? t.close() : void 0
                }
            }(this)), this.options.autoOpen ? this.$element.click(function(t) {
                return function(e) {
                    return e.stopPropagation(), t.isOpen ? t.close() : t.open()
                }
            }(this)) : void 0
        }, t.prototype._positionPopover = function() {
            var t, e;
            return t = this.$element.offset().left + this.$element.outerWidth() / 2, e = this.$popover.outerWidth() / 2, this.$popover.css("left", t - e)
        }, t.prototype._positionNipple = function() {
            return this.$popover.css("top", this.$element.offset().top + this.$element.outerHeight() + 10), this.$nipple.css("left", this.$popover.outerWidth() / 2 - this.$nipple.outerWidth() / 2)
        }, t
    }(), $.widget.bridge("popover", ActiveAdmin.Popover)
}.call(this),
function() {
    var t = {}.hasOwnProperty,
        e = function(e, i) {
            function n() {
                this.constructor = e
            }
            for (var s in i) t.call(i, s) && (e[s] = i[s]);
            return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
        };
    ActiveAdmin.TableCheckboxToggler = function(t) {
        function i() {
            return i.__super__.constructor.apply(this, arguments)
        }
        return e(i, t), i.prototype._init = function() {
            return i.__super__._init.apply(this, arguments)
        }, i.prototype._bind = function() {
            return i.__super__._bind.apply(this, arguments), this.$container.find("tbody td").click(function(t) {
                return function(e) {
                    return "checkbox" !== e.target.type ? t._didClickCell(e.target) : void 0
                }
            }(this))
        }, i.prototype._didChangeCheckbox = function(t) {
            var e;
            return i.__super__._didChangeCheckbox.apply(this, arguments), e = $(t).parents("tr"), t.checked ? e.addClass("selected") : e.removeClass("selected")
        }, i.prototype._didClickCell = function(t) {
            return $(t).parent("tr").find(":checkbox").click()
        }, i
    }(ActiveAdmin.CheckboxToggler), $.widget.bridge("tableCheckboxToggler", ActiveAdmin.TableCheckboxToggler)
}.call(this),
function() {
    $.ui.dialog.prototype._focusTabbable = function() {
        return this.uiDialog.focus()
    }
}.call(this),
function() {
    $.fn.serializeObject = function() {
        var t, e, i, n, s;
        for (e = {}, s = this.serializeArray(), i = 0, n = s.length; n > i; i++) t = s[i], e[t.name] = t.value;
        return e
    }
}.call(this),
function() {
    $(function() {
        var t;
        return $(document).on("focus", ".datepicker:not(.hasDatepicker)", function() {
            var t, e;
            return t = {
                dateFormat: "yy-mm-dd"
            }, e = $(this).data("datepicker-options"), $(this).datepicker($.extend(t, e))
        }), $(".clear_filters_btn").click(function() {
            return window.location.search = ""
        }), $(".dropdown_button").popover(), $(".filter_form").submit(function() {
            return $(this).find(":input").filter(function() {
                return "" === this.value
            }).prop("disabled", !0)
        }), $(".filter_form_field.select_and_search select").change(function() {
            return $(this).siblings("input").prop({
                name: "q[" + this.value + "]"
            })
        }), (t = $(".table_tools .batch_actions_selector")).length ? t.next().css({
            width: "calc(100% - 10px - " + t.outerWidth() + "px)",
            "float": "right"
        }) : void 0
    })
}.call(this), $(function() {
    ActiveAdmin.devices = {}, ActiveAdmin.devices.edit = function() {
        $("#device_uid").select()
    }, $("body.admin_devices.edit, body.admin_devices.new").length > 0 && ActiveAdmin.devices.edit()
});
var NextCodeNinja = {};
NextCodeNinja.mobile = function() {
    return !!navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/g)
}, NextCodeNinja.Card = {
    initialize: function(t) {
        return this.key = t, this.cardFields = $("#card_number, #card_exp, #card_cvc"), this
    },
    disable: function() {
        return this.cardFields.attr("disabled", !0).addClass("disabled"), this
    },
    enable: function() {
        return this.cardFields.attr("disabled", !1).removeClass("disabled"), this
    },
    clear: function() {
        return this.cardFields.val(""), this
    },
    validate: function(t, e) {
        var i = this,
            n = $("#user_first_name").val() + " " + $("#user_last_name").val(),
            s = "" == $("#card_number").val() ? 0 : $("#card_number").val(),
            o = "" == $("#card_exp").val() ? 0 : $("#card_exp").val().split("index.html")[0],
            r = "" == $("#card_exp").val() ? 0 : $("#card_exp").val().split("index.html")[1],
            a = "" == $("#card_cvc").val() ? 0 : $("#card_cvc").val(),
            l = $("#user_zip").val();
        if ("" == n || "" == l) {
            var c = "Please fill in all fields";
            return i.addError(c), i.enable(), e.call(this, c), !1
        }
        Stripe.setPublishableKey(this.key), this.disable(), Stripe.card.createToken({
            number: s,
            exp_month: o,
            exp_year: r,
            cvc: a,
            name: n,
            address_zip: l
        }, function(n, s) {
            s.error ? (i.addError(s.error.message), i.enable(), e.call(this, s.error)) : (i.clearError(), t.call(this, s.id))
        })
    },
    clearError: function() {
        $("#cc-errors").text("").hide()
    },
    addError: function(t) {
        $("#cc-errors").text(t).show()
    }
}, NextCodeNinja.CreditCardForm = {
    initialize: function(t, e, i, n) {
        return this.el = $(t), this.url = e, this.savingText = i, this.abstractEvents(), this.attachEvents(), this.card = n, this
    },
    abstractEvents: function() {
        var t = this;
        $("#commit").on("click", function() {}), $("#card_exp").on("blur", function() {
            return t.el.trigger("set-exp")
        })
    },
    attachEvents: function() {
        var t = this,
            e = this.el.find("#commit");
        this.el.on("set-exp", function() {
            var t = $("#card_exp"),
                e = t.val();
            e.match("index.html") || (4 == e.length ? t.val(e.substring(0, 2) + "/" + e.substring(2, 4)) : 3 == e.length && t.val("0" + e.substring(0, 1) + "/" + e.substring(1, 3)))
        }), e.on("click", function() {
            return t.clearErrors(), t.disableForm(), t.card.validate(function(i) {
                e.html(t.savingText), t.el.find("#card-token").val(i), t.el.get(0).submit()
            }, function() {
                t.enableForm()
            }), !1
        })
    },
    disableForm: function() {
        var t = this.el.find("#commit");
        t.attr("disabled", !0).addClass("disabled"), this.originalText = t.html(), t.html("Checking card...")
    },
    enableForm: function() {
        var t = this.el.find("#commit");
        t.attr("disabled", !1).removeClass("disabled").html(this.originalText)
    },
    clearErrors: function() {
        $("#errors").html("")
    }
}, NextCodeNinja.DonationAmountForm = {
    initialize: function() {
        this.abstractEvents(), this.attachEvents(), $("#amount").trigger("change"), $("#tip").trigger("change")
    },
    abstractEvents: function() {
        $(window).on("keyup", function() {
            $("#amount").is(":focus") && $(document).trigger("amount.change")
        }), $("#amount").on("change", function() {
            $(document).trigger("amount.change")
        }), $("#tip").on("change", function() {
            $(document).trigger("tip.change")
        })
    },
    attachEvents: function() {
        var t = this;
        $(document).on("tip.change", function() {
            t.showTipExplain()
        })
    },
    showTipExplain: function() {
        $(".tip-explain div").hide(), $(".tip-" + $("#tip").val()).show()
    }
}, NextCodeNinja.PaymentForm = {
    initialize: function() {
        return this.abstractEvents(), this.attachEvents(), $(".frequency-radio:checked").trigger("change"), $(document).trigger("amount.change"), $(document).trigger("tip.change"), this
    },
    abstractEvents: function() {},
    attachEvents: function() {
        var t = this;
        $(document).on("amount.change", function() {
            t.updateAmount()
        }), $(document).on("tip.change", function() {
            t.updateAmount()
        })
    },
    validate: function(t) {
        var e = !0;
        if ("" != t.val() && parseInt(t.val()) != t.val()) {
            var i = parseInt(t.val());
            isNaN(i) && (i = 0), t.val(i), e = !1
        }
        return e
    },
    updateAmount: function() {
        var t = !0,
            e = $("#amount"),
            i = $("#tip"),
            n = $("#donate-amount");
        if (t = this.validate(e, "amount")) {
            var s = parseInt(e.val());
            isNaN(s) && (s = 0);
            var o = i.val();
            if (0 == s) var r = 0;
            else var r = s + s * o / 100;
            n.text(r.toFixed(2)), 0 == r ? $("#commit").addClass("disabled").attr("disabled", !0) : $("#commit").removeClass("disabled").attr("disabled", !1)
        }
    }
}, NextCodeNinja.Start = NextCodeNinja.Start || {}, NextCodeNinja.Start.RecipientForm = {
    initialize: function(t) {
        return this.$photo = $(".photo"), this.$startWebcam = $("#start-webcam"), this.$resetWebcam = $("#reset-webcam"), this.$takeSnapshot = $("#take-snapshot"), this.$overlay = $("#overlay"), this.addCustomValidators(), this.abstractEvents(), this.attachEvents(), t && this.validate(), this
    },
    startWebcam: function() {
        var t = this;
        this.sayCheese = new SayCheese(".photo", {
            snapshots: !0
        }), this.sayCheese.start(), this.sayCheese.on("start", function() {
            $("#backdrop").remove()
        }), this.sayCheese.on("snapshot", function(e) {
            t.$photo.trigger("take-snapshot", e)
        })
    },
    addCustomValidators: function() {
        judge.eachValidators.email = function() {
            var t = [];
            return this.value.match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i) || t.push("not a valid email"), new judge.Validation(t)
        }
    },
    abstractEvents: function() {
        var t = this;
        $("[data-behavior~=reset-webcam]").on("click", function(e) {
            t.$photo.trigger("reset-webcam"), e.preventDefault()
        }), $("[data-behavior~=take-snapshot]").on("click", function(e) {
            t.sayCheese.takeSnapshot(), e.preventDefault()
        })
    },
    attachEvents: function() {
        var t = this;
        $("#commit").on("click", function() {
            return t.validate()
        }), this.$photo.on("take-snapshot", function(e, i) {
            t.$photo.find("video").hide();
            var n = $("<img>");
            n.attr("src", i.toDataURL("image/png")), $("#recipient_image").val(i.toDataURL("image/png")), t.$photo.append(n), t.$resetWebcam.show(), t.$takeSnapshot.hide(), t.$overlay.show().addClass("fade"), setTimeout(function() {
                t.$overlay.hide().removeClass("fade")
            }, 500), $(".submit").show()
        }), this.$photo.on("reset-webcam", function() {
            t.$photo.find("img").remove(), t.$photo.find("video").show(), t.$resetWebcam.hide(), t.$takeSnapshot.show()
        })
    },
    validate: function() {
        var t = !0,
            e = !1;
        return $("[data-validate]").each(function(i, n) {
            judge.validate(n, {
                valid: function(t) {
                    $(t).closest(".form-group").removeClass("has-error").find(".help-block").text("")
                },
                invalid: function(i, n) {
                    t = !1, 0 == e && (window.scroll(0, $(i).offset().top - 40), e = !0), $(i).closest(".form-group").addClass("has-error").find(".help-block").text(n)
                }
            })
        }), t
    }
},
function() {}.call(this), window.Chart = function(t) {
    function e(t, e, i) {
        var n = e.steps * e.stepValue,
            s = t - e.graphMin,
            o = c(s / n, 1, 0);
        return i * e.steps * o
    }

    function i(t, e, i, n) {
        function s() {
            var s = t.animation ? c(a(l), null, 0) : 1;
            v(n), t.scaleOverlay ? (i(s), e()) : (e(), i(s))
        }

        function o() {
            l += r, s(), 1 >= l ? C(o) : "function" == typeof t.onAnimationComplete && t.onAnimationComplete()
        }
        var r = t.animation ? 1 / c(t.animationSteps, Number.MAX_VALUE, 1) : 1,
            a = f[t.animationEasing],
            l = t.animation ? 0 : 1;
        "function" != typeof e && (e = function() {}), C(o)
    }

    function n(t, e, i, n, o, r) {
        function a(t) {
            return Math.floor(Math.log(t) / Math.LN10)
        }
        var l, c, h, u, d, p, f;
        for (p = n - o, f = a(p), l = Math.floor(o / (1 * Math.pow(10, f))) * Math.pow(10, f), c = Math.ceil(n / (1 * Math.pow(10, f))) * Math.pow(10, f), h = c - l, u = Math.pow(10, f), d = Math.round(h / u); i > d || d > e;) i > d ? (u /= 2, d = Math.round(h / u)) : (u *= 2, d = Math.round(h / u));
        var g = [];
        return s(r, g, d, l, u), {
            steps: d,
            stepValue: u,
            graphMin: l,
            labels: g
        }
    }

    function s(t, e, i, n, s) {
        if (t)
            for (var o = 1; i + 1 > o; o++) e.push(d(t, {
                value: (n + s * o).toFixed(h(s))
            }))
    }

    function o(t) {
        return Math.max.apply(Math, t)
    }

    function r(t) {
        return Math.min.apply(Math, t)
    }

    function a(t, e) {
        return t ? t : e
    }

    function l(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }

    function c(t, e, i) {
        return l(e) && t > e ? e : l(i) && i > t ? i : t
    }

    function h(t) {
        return t % 1 != 0 ? t.toString().split(".")[1].length : 0
    }

    function u(t, e) {
        var i = {};
        for (var n in t) i[n] = t[n];
        for (var n in e) i[n] = e[n];
        return i
    }

    function d(t, e) {
        var i = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("  ").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split(" ").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : S[t] = S[t] || d(document.getElementById(t).innerHTML);
        return e ? i(e) : i
    }
    var p = this,
        f = {
            linear: function(t) {
                return t
            },
            easeInQuad: function(t) {
                return t * t
            },
            easeOutQuad: function(t) {
                return -1 * t * (t - 2)
            },
            easeInOutQuad: function(t) {
                return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function(t) {
                return t * t * t
            },
            easeOutCubic: function(t) {
                return 1 * ((t = t / 1 - 1) * t * t + 1)
            },
            easeInOutCubic: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            easeInQuart: function(t) {
                return t * t * t * t
            },
            easeOutQuart: function(t) {
                return -1 * ((t = t / 1 - 1) * t * t * t - 1)
            },
            easeInOutQuart: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function(t) {
                return 1 * (t /= 1) * t * t * t * t
            },
            easeOutQuint: function(t) {
                return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
            },
            easeInOutQuint: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function(t) {
                return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
            },
            easeOutSine: function(t) {
                return 1 * Math.sin(t / 1 * (Math.PI / 2))
            },
            easeInOutSine: function(t) {
                return -0.5 * (Math.cos(Math.PI * t / 1) - 1)
            },
            easeInExpo: function(t) {
                return 0 == t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
            },
            easeOutExpo: function(t) {
                return 1 == t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
            },
            easeInOutExpo: function(t) {
                return 0 == t ? 0 : 1 == t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
            },
            easeInCirc: function(t) {
                return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
            },
            easeOutCirc: function(t) {
                return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
            },
            easeInOutCirc: function(t) {
                return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function(t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                if (0 == t) return 0;
                if (1 == (t /= 1)) return 1;
                if (i || (i = .3), n < Math.abs(1)) {
                    n = 1;
                    var e = i / 4
                } else var e = i / (2 * Math.PI) * Math.asin(1 / n);
                return -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i))
            },
            easeOutElastic: function(t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                if (0 == t) return 0;
                if (1 == (t /= 1)) return 1;
                if (i || (i = .3), n < Math.abs(1)) {
                    n = 1;
                    var e = i / 4
                } else var e = i / (2 * Math.PI) * Math.asin(1 / n);
                return n * Math.pow(2, -10 * t) * Math.sin(2 * (1 * t - e) * Math.PI / i) + 1
            },
            easeInOutElastic: function(t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                if (0 == t) return 0;
                if (2 == (t /= .5)) return 1;
                if (i || (i = .3 * 1.5), n < Math.abs(1)) {
                    n = 1;
                    var e = i / 4
                } else var e = i / (2 * Math.PI) * Math.asin(1 / n);
                return 1 > t ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i) * .5 + 1
            },
            easeInBack: function(t) {
                var e = 1.70158;
                return 1 * (t /= 1) * t * ((e + 1) * t - e)
            },
            easeOutBack: function(t) {
                var e = 1.70158;
                return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
            },
            easeInOutBack: function(t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? .5 * t * t * (((e *= 1.525) + 1) * t - e) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
            },
            easeInBounce: function(t) {
                return 1 - f.easeOutBounce(1 - t)
            },
            easeOutBounce: function(t) {
                return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            },
            easeInOutBounce: function(t) {
                return .5 > t ? .5 * f.easeInBounce(2 * t) : .5 * f.easeOutBounce(2 * t - 1) + .5
            }
        },
        g = t.canvas.width,
        m = t.canvas.height;
    window.devicePixelRatio && (t.canvas.style.width = g + "px", t.canvas.style.height = m + "px", t.canvas.height = m * window.devicePixelRatio, t.canvas.width = g * window.devicePixelRatio, t.scale(window.devicePixelRatio, window.devicePixelRatio)), this.PolarArea = function(e, i) {
        p.PolarArea.defaults = {
            scaleOverlay: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleShowLine: !0,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowLabelBackdrop: !0,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBackdropPaddingY: 2,
            scaleBackdropPaddingX: 2,
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var n = i ? u(p.PolarArea.defaults, i) : p.PolarArea.defaults;
        return new y(e, n, t)
    }, this.Radar = function(e, i) {
        p.Radar.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleShowLine: !0,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !1,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowLabelBackdrop: !0,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBackdropPaddingY: 2,
            scaleBackdropPaddingX: 2,
            angleShowLineOut: !0,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 12,
            pointLabelFontColor: "#666",
            pointDot: !0,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var n = i ? u(p.Radar.defaults, i) : p.Radar.defaults;
        return new b(e, n, t)
    }, this.Pie = function(e, i) {
        p.Pie.defaults = {
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var n = i ? u(p.Pie.defaults, i) : p.Pie.defaults;
        return new w(e, n, t)
    }, this.Doughnut = function(e, i) {
        p.Doughnut.defaults = {
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            percentageInnerCutout: 50,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var n = i ? u(p.Doughnut.defaults, i) : p.Doughnut.defaults;
        return new _(e, n, t)
    }, this.Line = function(e, i) {
        p.Line.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            bezierCurve: !0,
            pointDot: !0,
            pointDotRadius: 4,
            pointDotStrokeWidth: 2,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var n = i ? u(p.Line.defaults, i) : p.Line.defaults;
        return new x(e, n, t)
    }, this.Bar = function(e, i) {
        p.Bar.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            barShowStroke: !0,
            barStrokeWidth: 2,
            barValueSpacing: 5,
            barDatasetSpacing: 1,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var n = i ? u(p.Bar.defaults, i) : p.Bar.defaults;
        return new k(e, n, t)
    };
    var v = function(t) {
            t.clearRect(0, 0, g, m)
        },
        y = function(t, l, c) {
            function h() {
                f = r([g, m]) / 2, f -= o([.5 * l.scaleFontSize, .5 * l.scaleLineWidth]), b = 2 * l.scaleFontSize, l.scaleShowLabelBackdrop && (b += 2 * l.scaleBackdropPaddingY, f -= 1.5 * l.scaleBackdropPaddingY), w = f, b = a(b, 5)
            }

            function u() {
                for (var t = 0; t < y.steps; t++)
                    if (l.scaleShowLine && (c.beginPath(), c.arc(g / 2, m / 2, v * (t + 1), 0, 2 * Math.PI, !0), c.strokeStyle = l.scaleLineColor, c.lineWidth = l.scaleLineWidth, c.stroke()), l.scaleShowLabels) {
                        c.textAlign = "center", c.font = l.scaleFontStyle + " " + l.scaleFontSize + "px " + l.scaleFontFamily;
                        var e = y.labels[t];
                        if (l.scaleShowLabelBackdrop) {
                            var i = c.measureText(e).width;
                            c.fillStyle = l.scaleBackdropColor, c.beginPath(), c.rect(Math.round(g / 2 - i / 2 - l.scaleBackdropPaddingX), Math.round(m / 2 - v * (t + 1) - .5 * l.scaleFontSize - l.scaleBackdropPaddingY), Math.round(i + 2 * l.scaleBackdropPaddingX), Math.round(l.scaleFontSize + 2 * l.scaleBackdropPaddingY)), c.fill()
                        }
                        c.textBaseline = "middle", c.fillStyle = l.scaleFontColor, c.fillText(e, g / 2, m / 2 - v * (t + 1))
                    }
            }

            function d(i) {
                var n = -Math.PI / 2,
                    s = 2 * Math.PI / t.length,
                    o = 1,
                    r = 1;
                l.animation && (l.animateScale && (o = i), l.animateRotate && (r = i));
                for (var a = 0; a < t.length; a++) c.beginPath(), c.arc(g / 2, m / 2, o * e(t[a].value, y, v), n, n + r * s, !1), c.lineTo(g / 2, m / 2), c.closePath(), c.fillStyle = t[a].color, c.fill(), l.segmentShowStroke && (c.strokeStyle = l.segmentStrokeColor, c.lineWidth = l.segmentStrokeWidth, c.stroke()), n += r * s
            }

            function p() {
                for (var e = Number.MIN_VALUE, i = Number.MAX_VALUE, n = 0; n < t.length; n++) t[n].value > e && (e = t[n].value), t[n].value < i && (i = t[n].value);
                var s = Math.floor(w / (.66 * b)),
                    o = Math.floor(w / b * .5);
                return {
                    maxValue: e,
                    minValue: i,
                    maxSteps: s,
                    minSteps: o
                }
            }
            var f, v, y, b, w, _, x;
            h(), _ = p(), x = l.scaleShowLabels ? l.scaleLabel : null, l.scaleOverride ? (y = {
                steps: l.scaleSteps,
                stepValue: l.scaleStepWidth,
                graphMin: l.scaleStartValue,
                labels: []
            }, s(x, y.labels, y.steps, l.scaleStartValue, l.scaleStepWidth)) : y = n(w, _.maxSteps, _.minSteps, _.maxValue, _.minValue, x), v = f / y.steps, i(l, u, d, c)
        },
        b = function(t, l, h) {
            function u(i) {
                var n = 2 * Math.PI / t.datasets[0].data.length;
                h.save(), h.translate(g / 2, m / 2);
                for (var s = 0; s < t.datasets.length; s++) {
                    h.beginPath(), h.moveTo(0, -1 * i * e(t.datasets[s].data[0], b, y));
                    for (var o = 1; o < t.datasets[s].data.length; o++) h.rotate(n), h.lineTo(0, -1 * i * e(t.datasets[s].data[o], b, y));
                    if (h.closePath(), h.fillStyle = t.datasets[s].fillColor, h.strokeStyle = t.datasets[s].strokeColor, h.lineWidth = l.datasetStrokeWidth, h.fill(), h.stroke(), l.pointDot) {
                        h.fillStyle = t.datasets[s].pointColor, h.strokeStyle = t.datasets[s].pointStrokeColor, h.lineWidth = l.pointDotStrokeWidth;
                        for (var r = 0; r < t.datasets[s].data.length; r++) h.rotate(n), h.beginPath(), h.arc(0, -1 * i * e(t.datasets[s].data[r], b, y), l.pointDotRadius, 2 * Math.PI, !1), h.fill(), h.stroke()
                    }
                    h.rotate(n)
                }
                h.restore()
            }

            function d() {
                var e = 2 * Math.PI / t.datasets[0].data.length;
                if (h.save(), h.translate(g / 2, m / 2), l.angleShowLineOut) {
                    h.strokeStyle = l.angleLineColor, h.lineWidth = l.angleLineWidth;
                    for (var i = 0; i < t.datasets[0].data.length; i++) h.rotate(e), h.beginPath(), h.moveTo(0, 0), h.lineTo(0, -v), h.stroke()
                }
                for (var n = 0; n < b.steps; n++) {
                    if (h.beginPath(), l.scaleShowLine) {
                        h.strokeStyle = l.scaleLineColor, h.lineWidth = l.scaleLineWidth, h.moveTo(0, -y * (n + 1));
                        for (var s = 0; s < t.datasets[0].data.length; s++) h.rotate(e), h.lineTo(0, -y * (n + 1));
                        h.closePath(), h.stroke()
                    }
                    if (l.scaleShowLabels) {
                        if (h.textAlign = "center", h.font = l.scaleFontStyle + " " + l.scaleFontSize + "px " + l.scaleFontFamily, h.textBaseline = "middle", l.scaleShowLabelBackdrop) {
                            var o = h.measureText(b.labels[n]).width;
                            h.fillStyle = l.scaleBackdropColor, h.beginPath(), h.rect(Math.round(-o / 2 - l.scaleBackdropPaddingX), Math.round(-y * (n + 1) - .5 * l.scaleFontSize - l.scaleBackdropPaddingY), Math.round(o + 2 * l.scaleBackdropPaddingX), Math.round(l.scaleFontSize + 2 * l.scaleBackdropPaddingY)), h.fill()
                        }
                        h.fillStyle = l.scaleFontColor, h.fillText(b.labels[n], 0, -y * (n + 1))
                    }
                }
                for (var r = 0; r < t.labels.length; r++) {
                    h.font = l.pointLabelFontStyle + " " + l.pointLabelFontSize + "px " + l.pointLabelFontFamily, h.fillStyle = l.pointLabelFontColor;
                    var a = Math.sin(e * r) * (v + l.pointLabelFontSize),
                        c = Math.cos(e * r) * (v + l.pointLabelFontSize);
                    h.textAlign = e * r == Math.PI || e * r == 0 ? "center" : e * r > Math.PI ? "right" : "left", h.textBaseline = "middle", h.fillText(t.labels[r], a, -c)
                }
                h.restore()
            }

            function p() {
                v = r([g, m]) / 2, w = 2 * l.scaleFontSize;
                for (var e = 0, i = 0; i < t.labels.length; i++) {
                    h.font = l.pointLabelFontStyle + " " + l.pointLabelFontSize + "px " + l.pointLabelFontFamily;
                    var n = h.measureText(t.labels[i]).width;
                    n > e && (e = n)
                }
                v -= o([e, l.pointLabelFontSize / 2 * 1.5]), v -= l.pointLabelFontSize, v = c(v, null, 0), _ = v, w = a(w, 5)
            }

            function f() {
                for (var e = Number.MIN_VALUE, i = Number.MAX_VALUE, n = 0; n < t.datasets.length; n++)
                    for (var s = 0; s < t.datasets[n].data.length; s++) t.datasets[n].data[s] > e && (e = t.datasets[n].data[s]), t.datasets[n].data[s] < i && (i = t.datasets[n].data[s]);
                var o = Math.floor(_ / (.66 * w)),
                    r = Math.floor(_ / w * .5);
                return {
                    maxValue: e,
                    minValue: i,
                    maxSteps: o,
                    minSteps: r
                }
            }
            var v, y, b, w, _, x, k;
            t.labels || (t.labels = []), p();
            var x = f();
            k = l.scaleShowLabels ? l.scaleLabel : null, l.scaleOverride ? (b = {
                steps: l.scaleSteps,
                stepValue: l.scaleStepWidth,
                graphMin: l.scaleStartValue,
                labels: []
            }, s(k, b.labels, b.steps, l.scaleStartValue, l.scaleStepWidth)) : b = n(_, x.maxSteps, x.minSteps, x.maxValue, x.minValue, k), y = v / b.steps, i(l, d, u, h)
        },
        w = function(t, e, n) {
            function s(i) {
                var s = -Math.PI / 2,
                    r = 1,
                    l = 1;
                e.animation && (e.animateScale && (r = i), e.animateRotate && (l = i));
                for (var c = 0; c < t.length; c++) {
                    var h = l * (t[c].value / o) * 2 * Math.PI;
                    n.beginPath(), n.arc(g / 2, m / 2, r * a, s, s + h), n.lineTo(g / 2, m / 2), n.closePath(), n.fillStyle = t[c].color, n.fill(), e.segmentShowStroke && (n.lineWidth = e.segmentStrokeWidth, n.strokeStyle = e.segmentStrokeColor, n.stroke()), s += h
                }
            }
            for (var o = 0, a = r([m / 2, g / 2]) - 5, l = 0; l < t.length; l++) o += t[l].value;
            i(e, null, s, n)
        },
        _ = function(t, e, n) {
            function s(i) {
                var s = -Math.PI / 2,
                    r = 1,
                    c = 1;
                e.animation && (e.animateScale && (r = i), e.animateRotate && (c = i));
                for (var h = 0; h < t.length; h++) {
                    var u = c * (t[h].value / o) * 2 * Math.PI;
                    n.beginPath(), n.arc(g / 2, m / 2, r * a, s, s + u, !1), n.arc(g / 2, m / 2, r * l, s + u, s, !0), n.closePath(), n.fillStyle = t[h].color, n.fill(), e.segmentShowStroke && (n.lineWidth = e.segmentStrokeWidth, n.strokeStyle = e.segmentStrokeColor, n.stroke()), s += u
                }
            }
            for (var o = 0, a = r([m / 2, g / 2]) - 5, l = a * (e.percentageInnerCutout / 100), c = 0; c < t.length; c++) o += t[c].value;
            i(e, null, s, n)
        },
        x = function(t, o, r) {
            function a(i) {
                function n(n, s) {
                    return S - i * e(t.datasets[n].data[s], f, p)
                }

                function s(t) {
                    return C + _ * t
                }
                for (var a = 0; a < t.datasets.length; a++) {
                    r.strokeStyle = t.datasets[a].strokeColor, r.lineWidth = o.datasetStrokeWidth, r.beginPath(), r.moveTo(C, S - i * e(t.datasets[a].data[0], f, p));
                    for (var l = 1; l < t.datasets[a].data.length; l++) o.bezierCurve ? r.bezierCurveTo(s(l - .5), n(a, l - 1), s(l - .5), n(a, l), s(l), n(a, l)) : r.lineTo(s(l), n(a, l));
                    if (r.stroke(), o.datasetFill ? (r.lineTo(C + _ * (t.datasets[a].data.length - 1), S), r.lineTo(C, S), r.closePath(), r.fillStyle = t.datasets[a].fillColor, r.fill()) : r.closePath(), o.pointDot) {
                        r.fillStyle = t.datasets[a].pointColor, r.strokeStyle = t.datasets[a].pointStrokeColor, r.lineWidth = o.pointDotStrokeWidth;
                        for (var c = 0; c < t.datasets[a].data.length; c++) r.beginPath(), r.arc(C + _ * c, S - i * e(t.datasets[a].data[c], f, p), o.pointDotRadius, 0, 2 * Math.PI, !0), r.fill(), r.stroke()
                    }
                }
            }

            function l() {
                r.lineWidth = o.scaleLineWidth, r.strokeStyle = o.scaleLineColor, r.beginPath(), r.moveTo(g - x / 2 + 5, S), r.lineTo(g - x / 2 - k - 5, S), r.stroke(), D > 0 ? (r.save(), r.textAlign = "right") : r.textAlign = "center", r.fillStyle = o.scaleFontColor;
                for (var e = 0; e < t.labels.length; e++) r.save(), D > 0 ? (r.translate(C + e * _, S + o.scaleFontSize), r.rotate(-(D * (Math.PI / 180))), r.fillText(t.labels[e], 0, 0), r.restore()) : r.fillText(t.labels[e], C + e * _, S + o.scaleFontSize + 3), r.beginPath(), r.moveTo(C + e * _, S + 3), o.scaleShowGridLines && e > 0 ? (r.lineWidth = o.scaleGridLineWidth, r.strokeStyle = o.scaleGridLineColor, r.lineTo(C + e * _, 5)) : r.lineTo(C + e * _, S + 3), r.stroke();
                r.lineWidth = o.scaleLineWidth, r.strokeStyle = o.scaleLineColor, r.beginPath(), r.moveTo(C, S + 5), r.lineTo(C, 5), r.stroke(), r.textAlign = "right", r.textBaseline = "middle";
                for (var i = 0; i < f.steps; i++) r.beginPath(), r.moveTo(C - 3, S - (i + 1) * p), o.scaleShowGridLines ? (r.lineWidth = o.scaleGridLineWidth, r.strokeStyle = o.scaleGridLineColor, r.lineTo(C + k + 5, S - (i + 1) * p)) : r.lineTo(C - .5, S - (i + 1) * p), r.stroke(), o.scaleShowLabels && r.fillText(f.labels[i], C - 8, S - (i + 1) * p)
            }

            function c() {
                var e = 1;
                if (o.scaleShowLabels) {
                    r.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily;
                    for (var i = 0; i < f.labels.length; i++) {
                        var n = r.measureText(f.labels[i]).width;
                        e = n > e ? n : e
                    }
                    e += 10
                }
                k = g - e - x, _ = Math.floor(k / (t.labels.length - 1)), C = g - x / 2 - k, S = y + o.scaleFontSize / 2
            }

            function h() {
                d = m, r.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily, x = 1;
                for (var e = 0; e < t.labels.length; e++) {
                    var i = r.measureText(t.labels[e]).width;
                    x = i > x ? i : x
                }
                g / t.labels.length < x ? (D = 45, g / t.labels.length < Math.cos(D) * x ? (D = 90, d -= x) : d -= Math.sin(D) * x) : d -= o.scaleFontSize, d -= 5, v = o.scaleFontSize, d -= v, y = d
            }

            function u() {
                for (var e = Number.MIN_VALUE, i = Number.MAX_VALUE, n = 0; n < t.datasets.length; n++)
                    for (var s = 0; s < t.datasets[n].data.length; s++) t.datasets[n].data[s] > e && (e = t.datasets[n].data[s]), t.datasets[n].data[s] < i && (i = t.datasets[n].data[s]);
                var o = Math.floor(y / (.66 * v)),
                    r = Math.floor(y / v * .5);
                return {
                    maxValue: e,
                    minValue: i,
                    maxSteps: o,
                    minSteps: r
                }
            }
            var d, p, f, v, y, b, w, _, x, k, C, S, D = 0;
            h(), b = u(), w = o.scaleShowLabels ? o.scaleLabel : "", o.scaleOverride ? (f = {
                steps: o.scaleSteps,
                stepValue: o.scaleStepWidth,
                graphMin: o.scaleStartValue,
                labels: []
            }, s(w, f.labels, f.steps, o.scaleStartValue, o.scaleStepWidth)) : f = n(y, b.maxSteps, b.minSteps, b.maxValue, b.minValue, w), p = Math.floor(y / f.steps), c(), i(o, l, a, r)
        },
        k = function(t, o, r) {
            function a(i) {
                r.lineWidth = o.barStrokeWidth;
                for (var n = 0; n < t.datasets.length; n++) {
                    r.fillStyle = t.datasets[n].fillColor, r.strokeStyle = t.datasets[n].strokeColor;
                    for (var s = 0; s < t.datasets[n].data.length; s++) {
                        var a = C + o.barValueSpacing + _ * s + D * n + o.barDatasetSpacing * n + o.barStrokeWidth * n;
                        r.beginPath(), r.moveTo(a, S), r.lineTo(a, S - i * e(t.datasets[n].data[s], f, p) + o.barStrokeWidth / 2), r.lineTo(a + D, S - i * e(t.datasets[n].data[s], f, p) + o.barStrokeWidth / 2), r.lineTo(a + D, S), o.barShowStroke && r.stroke(), r.closePath(), r.fill()
                    }
                }
            }

            function l() {
                r.lineWidth = o.scaleLineWidth, r.strokeStyle = o.scaleLineColor, r.beginPath(), r.moveTo(g - x / 2 + 5, S), r.lineTo(g - x / 2 - k - 5, S), r.stroke(), T > 0 ? (r.save(), r.textAlign = "right") : r.textAlign = "center", r.fillStyle = o.scaleFontColor;
                for (var e = 0; e < t.labels.length; e++) r.save(), T > 0 ? (r.translate(C + e * _, S + o.scaleFontSize), r.rotate(-(T * (Math.PI / 180))), r.fillText(t.labels[e], 0, 0), r.restore()) : r.fillText(t.labels[e], C + e * _ + _ / 2, S + o.scaleFontSize + 3), r.beginPath(), r.moveTo(C + (e + 1) * _, S + 3), r.lineWidth = o.scaleGridLineWidth, r.strokeStyle = o.scaleGridLineColor, r.lineTo(C + (e + 1) * _, 5), r.stroke();
                r.lineWidth = o.scaleLineWidth, r.strokeStyle = o.scaleLineColor, r.beginPath(), r.moveTo(C, S + 5), r.lineTo(C, 5), r.stroke(), r.textAlign = "right", r.textBaseline = "middle";
                for (var i = 0; i < f.steps; i++) r.beginPath(), r.moveTo(C - 3, S - (i + 1) * p), o.scaleShowGridLines ? (r.lineWidth = o.scaleGridLineWidth, r.strokeStyle = o.scaleGridLineColor, r.lineTo(C + k + 5, S - (i + 1) * p)) : r.lineTo(C - .5, S - (i + 1) * p), r.stroke(), o.scaleShowLabels && r.fillText(f.labels[i], C - 8, S - (i + 1) * p)
            }

            function c() {
                var e = 1;
                if (o.scaleShowLabels) {
                    r.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily;
                    for (var i = 0; i < f.labels.length; i++) {
                        var n = r.measureText(f.labels[i]).width;
                        e = n > e ? n : e
                    }
                    e += 10
                }
                k = g - e - x, _ = Math.floor(k / t.labels.length), D = (_ - 2 * o.scaleGridLineWidth - 2 * o.barValueSpacing - (o.barDatasetSpacing * t.datasets.length - 1) - (o.barStrokeWidth / 2 * t.datasets.length - 1)) / t.datasets.length, C = g - x / 2 - k, S = y + o.scaleFontSize / 2
            }

            function h() {
                d = m, r.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily, x = 1;
                for (var e = 0; e < t.labels.length; e++) {
                    var i = r.measureText(t.labels[e]).width;
                    x = i > x ? i : x
                }
                g / t.labels.length < x ? (T = 45, g / t.labels.length < Math.cos(T) * x ? (T = 90, d -= x) : d -= Math.sin(T) * x) : d -= o.scaleFontSize, d -= 5, v = o.scaleFontSize, d -= v, y = d
            }

            function u() {
                for (var e = Number.MIN_VALUE, i = Number.MAX_VALUE, n = 0; n < t.datasets.length; n++)
                    for (var s = 0; s < t.datasets[n].data.length; s++) t.datasets[n].data[s] > e && (e = t.datasets[n].data[s]), t.datasets[n].data[s] < i && (i = t.datasets[n].data[s]);
                var o = Math.floor(y / (.66 * v)),
                    r = Math.floor(y / v * .5);
                return {
                    maxValue: e,
                    minValue: i,
                    maxSteps: o,
                    minSteps: r
                }
            }
            var d, p, f, v, y, b, w, _, x, k, C, S, D, T = 0;
            h(), b = u(), w = o.scaleShowLabels ? o.scaleLabel : "", o.scaleOverride ? (f = {
                steps: o.scaleSteps,
                stepValue: o.scaleStepWidth,
                graphMin: o.scaleStartValue,
                labels: []
            }, s(w, f.labels, f.steps, o.scaleStartValue, o.scaleStepWidth)) : f = n(y, b.maxSteps, b.minSteps, b.maxValue, b.minValue, w), p = Math.floor(y / f.steps), c(), i(o, l, a, r)
        },
        C = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1e3 / 60)
            }
        }(),
        S = {}
},
function() {
    ! function(t) {
        var e, i;
        return i = t.fn.show, t.fn.show = function() {
            return this.removeClass("hidden hide"), i.apply(this, arguments)
        }, e = t.fn.hide, t.fn.hide = function() {
            return this.addClass("hidden hide"), e.apply(this, arguments)
        }
    }(jQuery)
}.call(this),
function(t) {
    "use strict";
    t.fn.fitVids = function(e) {
        var i = {
            customSelector: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var n = document.createElement("div"),
                s = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0],
                o = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
            n.className = "fit-vids-style", n.id = "fit-vids-style", n.style.display = "none", n.innerHTML = o, s.parentNode.insertBefore(n, s)
        }
        return e && t.extend(i, e), this.each(function() {
            var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            i.customSelector && e.push(i.customSelector);
            var n = t(this).find(e.join(","));
            n = n.not("object object"), n.each(function() {
                var e = t(this);
                if (!("embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                    var i = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
                        n = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10),
                        s = i / n;
                    if (!e.attr("id")) {
                        var o = "fitvid" + Math.floor(999999 * Math.random());
                        e.attr("id", o)
                    }
                    e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 112 * s + "%"), e.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto);
var SayCheese = function() {
    var t;
    return navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || !1, window.AudioContext = window.AudioContext || window.webkitAudioContext, window.URL = window.URL || window.webkitURL, t = function(t, e) {
        return this.snapshots = [], this.video = null, this.events = {}, this.stream = null, this.options = {
            snapshots: !0,
            audio: !1
        }, this.setOptions(e), this.element = document.querySelector(t), this
    }, t.prototype.on = function(t, e) {
        this.events.hasOwnProperty(t) === !1 && (this.events[t] = []), this.events[t].push(e)
    }, t.prototype.off = function(t, e) {
        this.events[t] = this.events[t].filter(function(t) {
            return t !== e
        })
    }, t.prototype.trigger = function(t, e) {
        return this.events.hasOwnProperty(t) === !1 ? !1 : void this.events[t].forEach(function(t) {
            t.call(this, e)
        }.bind(this))
    }, t.prototype.setOptions = function(t) {
        for (var e in t) this.options[e] = t[e]
    }, t.prototype.getStreamUrl = function() {
        return window.URL && window.URL.createObjectURL ? window.URL.createObjectURL(this.stream) : this.stream
    }, t.prototype.createVideo = function() {
        var t = 320,
            e = 0,
            i = !1;
        this.video = document.createElement("video"), this.video.addEventListener("canplay", function() {
            return i ? void 0 : (e = this.video.videoHeight / (this.video.videoWidth / t), this.video.style.width = t, this.video.style.height = e, i = !0, this.trigger("start"))
        }.bind(this), !1)
    }, t.prototype.linkAudio = function() {
        this.audioCtx = new window.AudioContext, this.audioStream = this.audioCtx.createMediaStreamSource(this.stream);
        var t = this.audioCtx.createBiquadFilter();
        this.audioStream.connect(t), t.connect(this.audioCtx.destination)
    }, t.prototype.takeSnapshot = function(t, e) {
        if (this.options.snapshots === !1) return !1;
        t = t || this.video.videoWidth, e = e || this.video.videoHeight;
        var i = document.createElement("canvas"),
            n = i.getContext("2d");
        i.width = t, i.height = e, n.drawImage(this.video, 0, 0, t, e), this.snapshots.push(i), this.trigger("snapshot", i), n = null
    }, t.prototype.start = function() {
        if (navigator.getUserMedia === !1) return this.trigger("error", "NOT_SUPPORTED"), !1;
        var t = function(t) {
                if (this.stream = t, this.createVideo(), navigator.mozGetUserMedia ? this.video.mozSrcObject = t : this.video.src = this.getStreamUrl(), this.options.audio === !0) try {
                    this.linkAudio()
                } catch (e) {
                    this.trigger("error", "AUDIO_NOT_SUPPORTED")
                }
                this.element.appendChild(this.video), this.video.play()
            }.bind(this),
            e = function i(i) {
                this.trigger("error", i)
            }.bind(this);
        return navigator.getUserMedia({
            video: !0,
            audio: this.options.audio
        }, t, e)
    }, t.prototype.stop = function() {
        return this.stream.stop(), window.URL && window.URL.revokeObjectURL && window.URL.revokeObjectURL(this.video.src), this.trigger("stop")
    }, t
}();
! function(t) {
    "undefined" == typeof t.fn.each2 && t.extend(t.fn, {
        each2: function(e) {
            for (var i = t([0]), n = -1, s = this.length; ++n < s && (i.context = i[0] = this[n]) && e.call(i[0], n, i) !== !1;);
            return this
        }
    })
}(jQuery),
function(t, e) {
    "use strict";

    function i(t) {
        var e, i, n, s;
        if (!t || t.length < 1) return t;
        for (e = "", i = 0, n = t.length; n > i; i++) s = t.charAt(i), e += j[s] || s;
        return e
    }

    function n(t, e) {
        for (var i = 0, n = e.length; n > i; i += 1)
            if (o(t, e[i])) return i;
        return -1
    }

    function s() {
        var e = t(z);
        e.appendTo("body");
        var i = {
            width: e.width() - e[0].clientWidth,
            height: e.height() - e[0].clientHeight
        };
        return e.remove(), i
    }

    function o(t, i) {
        return t === i ? !0 : t === e || i === e ? !1 : null === t || null === i ? !1 : t.constructor === String ? t + "" == i + "" : i.constructor === String ? i + "" == t + "" : !1
    }

    function r(e, i) {
        var n, s, o;
        if (null === e || e.length < 1) return [];
        for (n = e.split(i), s = 0, o = n.length; o > s; s += 1) n[s] = t.trim(n[s]);
        return n
    }

    function a(t) {
        return t.outerWidth(!1) - t.width()
    }

    function l(i) {
        var n = "keyup-change-value";
        i.on("keydown", function() {
            t.data(i, n) === e && t.data(i, n, i.val())
        }), i.on("keyup", function() {
            var s = t.data(i, n);
            s !== e && i.val() !== s && (t.removeData(i, n), i.trigger("keyup-change"))
        })
    }

    function c(i) {
        i.on("mousemove", function(i) {
            var n = F;
            (n === e || n.x !== i.pageX || n.y !== i.pageY) && t(i.target).trigger("mousemove-filtered", i)
        })
    }

    function h(t, i, n) {
        n = n || e;
        var s;
        return function() {
            var e = arguments;
            window.clearTimeout(s), s = window.setTimeout(function() {
                i.apply(n, e)
            }, t)
        }
    }

    function u(t) {
        var e, i = !1;
        return function() {
            return i === !1 && (e = t(), i = !0), e
        }
    }

    function d(t, e) {
        var i = h(t, function(t) {
            e.trigger("scroll-debounced", t)
        });
        e.on("scroll", function(t) {
            n(t.target, e.get()) >= 0 && i(t)
        })
    }

    function p(t) {
        t[0] !== document.activeElement && window.setTimeout(function() {
            var e, i = t[0],
                n = t.val().length;
            t.focus(), t.is(":visible") && i === document.activeElement && (i.setSelectionRange ? i.setSelectionRange(n, n) : i.createTextRange && (e = i.createTextRange(), e.collapse(!1), e.select()))
        }, 0)
    }

    function f(e) {
        e = t(e)[0];
        var i = 0,
            n = 0;
        if ("selectionStart" in e) i = e.selectionStart, n = e.selectionEnd - i;
        else if ("selection" in document) {
            e.focus();
            var s = document.selection.createRange();
            n = document.selection.createRange().text.length, s.moveStart("character", -e.value.length), i = s.text.length - n
        }
        return {
            offset: i,
            length: n
        }
    }

    function g(t) {
        t.preventDefault(), t.stopPropagation()
    }

    function m(t) {
        t.preventDefault(), t.stopImmediatePropagation()
    }

    function v(e) {
        if (!$) {
            var i = e[0].currentStyle || window.getComputedStyle(e[0], null);
            $ = t(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: i.fontSize,
                fontFamily: i.fontFamily,
                fontStyle: i.fontStyle,
                fontWeight: i.fontWeight,
                letterSpacing: i.letterSpacing,
                textTransform: i.textTransform,
                whiteSpace: "nowrap"
            }), $.attr("class", "select2-sizer"), t("body").append($)
        }
        return $.text(e.val()), $.width()
    }

    function y(e, i, n) {
        var s, o, r = [];
        s = e.attr("class"), s && (s = "" + s, t(s.split(" ")).each2(function() {
            0 === this.indexOf("select2-") && r.push(this)
        })), s = i.attr("class"), s && (s = "" + s, t(s.split(" ")).each2(function() {
            0 !== this.indexOf("select2-") && (o = n(this), o && r.push(o))
        })), e.attr("class", r.join(" "))
    }

    function b(t, e, n, s) {
        var o = i(t.toUpperCase()).indexOf(i(e.toUpperCase())),
            r = e.length;
        return 0 > o ? void n.push(s(t)) : (n.push(s(t.substring(0, o))), n.push("<span class='select2-match'>"), n.push(s(t.substring(o, o + r))), n.push("</span>"), void n.push(s(t.substring(o + r, t.length))))
    }

    function w(t) {
        var e = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
        };
        return String(t).replace(/[&<>"'\/\\]/g, function(t) {
            return e[t]
        })
    }

    function _(i) {
        var n, s = null,
            o = i.quietMillis || 100,
            r = i.url,
            a = this;
        return function(l) {
            window.clearTimeout(n), n = window.setTimeout(function() {
                var n = i.data,
                    o = r,
                    c = i.transport || t.fn.select2.ajaxDefaults.transport,
                    h = {
                        type: i.type || "GET",
                        cache: i.cache || !1,
                        jsonpCallback: i.jsonpCallback || e,
                        dataType: i.dataType || "json"
                    },
                    u = t.extend({}, t.fn.select2.ajaxDefaults.params, h);
                n = n ? n.call(a, l.term, l.page, l.context) : null, o = "function" == typeof o ? o.call(a, l.term, l.page, l.context) : o, s && s.abort(), i.params && (t.isFunction(i.params) ? t.extend(u, i.params.call(a)) : t.extend(u, i.params)), t.extend(u, {
                    url: o,
                    dataType: i.dataType,
                    data: n,
                    success: function(t) {
                        var e = i.results(t, l.page);
                        l.callback(e)
                    }
                }), s = c.call(a, u)
            }, o)
        }
    }

    function x(e) {
        var i, n, s = e,
            o = function(t) {
                return "" + t.text
            };
        t.isArray(s) && (n = s, s = {
            results: n
        }), t.isFunction(s) === !1 && (n = s, s = function() {
            return n
        });
        var r = s();
        return r.text && (o = r.text, t.isFunction(o) || (i = r.text, o = function(t) {
                return t[i]
            })),
            function(e) {
                var i, n = e.term,
                    r = {
                        results: []
                    };
                return "" === n ? void e.callback(s()) : (i = function(s, r) {
                    var a, l;
                    if (s = s[0], s.children) {
                        a = {};
                        for (l in s) s.hasOwnProperty(l) && (a[l] = s[l]);
                        a.children = [], t(s.children).each2(function(t, e) {
                            i(e, a.children)
                        }), (a.children.length || e.matcher(n, o(a), s)) && r.push(a)
                    } else e.matcher(n, o(s), s) && r.push(s)
                }, t(s().results).each2(function(t, e) {
                    i(e, r.results)
                }), void e.callback(r))
            }
    }

    function k(i) {
        var n = t.isFunction(i);
        return function(s) {
            var o = s.term,
                r = {
                    results: []
                };
            t(n ? i() : i).each(function() {
                var t = this.text !== e,
                    i = t ? this.text : this;
                ("" === o || s.matcher(o, i)) && r.results.push(t ? this : {
                    id: this,
                    text: this
                })
            }), s.callback(r)
        }
    }

    function C(e, i) {
        if (t.isFunction(e)) return !0;
        if (!e) return !1;
        throw new Error(i + " must be a function or a falsy value")
    }

    function S(e) {
        return t.isFunction(e) ? e() : e
    }

    function D(e) {
        var i = 0;
        return t.each(e, function(t, e) {
            e.children ? i += D(e.children) : i++
        }), i
    }

    function T(t, i, n, s) {
        var r, a, l, c, h, u = t,
            d = !1;
        if (!s.createSearchChoice || !s.tokenSeparators || s.tokenSeparators.length < 1) return e;
        for (;;) {
            for (a = -1, l = 0, c = s.tokenSeparators.length; c > l && (h = s.tokenSeparators[l], a = t.indexOf(h), !(a >= 0)); l++);
            if (0 > a) break;
            if (r = t.substring(0, a), t = t.substring(a + h.length), r.length > 0 && (r = s.createSearchChoice.call(this, r, i), r !== e && null !== r && s.id(r) !== e && null !== s.id(r))) {
                for (d = !1, l = 0, c = i.length; c > l; l++)
                    if (o(s.id(r), s.id(i[l]))) {
                        d = !0;
                        break
                    }
                d || n(r)
            }
        }
        return u !== t ? t : void 0
    }

    function E(e, i) {
        var n = function() {};
        return n.prototype = new e, n.prototype.constructor = n, n.prototype.parent = e.prototype, n.prototype = t.extend(n.prototype, i), n
    }
    if (window.Select2 === e) {
        var P, M, A, I, N, $, L, O, F = {
                x: 0,
                y: 0
            },
            P = {
                TAB: 9,
                ENTER: 13,
                ESC: 27,
                SPACE: 32,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                HOME: 36,
                END: 35,
                BACKSPACE: 8,
                DELETE: 46,
                isArrow: function(t) {
                    switch (t = t.which ? t.which : t) {
                        case P.LEFT:
                        case P.RIGHT:
                        case P.UP:
                        case P.DOWN:
                            return !0
                    }
                    return !1
                },
                isControl: function(t) {
                    var e = t.which;
                    switch (e) {
                        case P.SHIFT:
                        case P.CTRL:
                        case P.ALT:
                            return !0
                    }
                    return t.metaKey ? !0 : !1
                },
                isFunctionKey: function(t) {
                    return t = t.which ? t.which : t, t >= 112 && 123 >= t
                }
            },
            z = "<div class='select2-measure-scrollbar'></div>",
            j = {
                "\u24b6": "A",
                \uff21: "A",
                \u00c0: "A",
                \u00c1: "A",
                \u00c2: "A",
                \u1ea6: "A",
                \u1ea4: "A",
                \u1eaa: "A",
                \u1ea8: "A",
                \u00c3: "A",
                \u0100: "A",
                \u0102: "A",
                \u1eb0: "A",
                \u1eae: "A",
                \u1eb4: "A",
                \u1eb2: "A",
                \u0226: "A",
                \u01e0: "A",
                \u00c4: "A",
                \u01de: "A",
                \u1ea2: "A",
                \u00c5: "A",
                \u01fa: "A",
                \u01cd: "A",
                \u0200: "A",
                \u0202: "A",
                \u1ea0: "A",
                \u1eac: "A",
                \u1eb6: "A",
                \u1e00: "A",
                \u0104: "A",
                \u023a: "A",
                \u2c6f: "A",
                \ua732: "AA",
                \u00c6: "AE",
                \u01fc: "AE",
                \u01e2: "AE",
                \ua734: "AO",
                \ua736: "AU",
                \ua738: "AV",
                \ua73a: "AV",
                \ua73c: "AY",
                "\u24b7": "B",
                \uff22: "B",
                \u1e02: "B",
                \u1e04: "B",
                \u1e06: "B",
                \u0243: "B",
                \u0182: "B",
                \u0181: "B",
                "\u24b8": "C",
                \uff23: "C",
                \u0106: "C",
                \u0108: "C",
                \u010a: "C",
                \u010c: "C",
                \u00c7: "C",
                \u1e08: "C",
                \u0187: "C",
                \u023b: "C",
                \ua73e: "C",
                "\u24b9": "D",
                \uff24: "D",
                \u1e0a: "D",
                \u010e: "D",
                \u1e0c: "D",
                \u1e10: "D",
                \u1e12: "D",
                \u1e0e: "D",
                \u0110: "D",
                \u018b: "D",
                \u018a: "D",
                \u0189: "D",
                \ua779: "D",
                \u01f1: "DZ",
                \u01c4: "DZ",
                \u01f2: "Dz",
                \u01c5: "Dz",
                "\u24ba": "E",
                \uff25: "E",
                \u00c8: "E",
                \u00c9: "E",
                \u00ca: "E",
                \u1ec0: "E",
                \u1ebe: "E",
                \u1ec4: "E",
                \u1ec2: "E",
                \u1ebc: "E",
                \u0112: "E",
                \u1e14: "E",
                \u1e16: "E",
                \u0114: "E",
                \u0116: "E",
                \u00cb: "E",
                \u1eba: "E",
                \u011a: "E",
                \u0204: "E",
                \u0206: "E",
                \u1eb8: "E",
                \u1ec6: "E",
                \u0228: "E",
                \u1e1c: "E",
                \u0118: "E",
                \u1e18: "E",
                \u1e1a: "E",
                \u0190: "E",
                \u018e: "E",
                "\u24bb": "F",
                \uff26: "F",
                \u1e1e: "F",
                \u0191: "F",
                \ua77b: "F",
                "\u24bc": "G",
                \uff27: "G",
                \u01f4: "G",
                \u011c: "G",
                \u1e20: "G",
                \u011e: "G",
                \u0120: "G",
                \u01e6: "G",
                \u0122: "G",
                \u01e4: "G",
                \u0193: "G",
                "\ua7a0": "G",
                \ua77d: "G",
                \ua77e: "G",
                "\u24bd": "H",
                \uff28: "H",
                \u0124: "H",
                \u1e22: "H",
                \u1e26: "H",
                \u021e: "H",
                \u1e24: "H",
                \u1e28: "H",
                \u1e2a: "H",
                \u0126: "H",
                \u2c67: "H",
                \u2c75: "H",
                "\ua78d": "H",
                "\u24be": "I",
                \uff29: "I",
                \u00cc: "I",
                \u00cd: "I",
                \u00ce: "I",
                \u0128: "I",
                \u012a: "I",
                \u012c: "I",
                \u0130: "I",
                \u00cf: "I",
                \u1e2e: "I",
                \u1ec8: "I",
                \u01cf: "I",
                \u0208: "I",
                \u020a: "I",
                \u1eca: "I",
                \u012e: "I",
                \u1e2c: "I",
                \u0197: "I",
                "\u24bf": "J",
                \uff2a: "J",
                \u0134: "J",
                \u0248: "J",
                "\u24c0": "K",
                \uff2b: "K",
                \u1e30: "K",
                \u01e8: "K",
                \u1e32: "K",
                \u0136: "K",
                \u1e34: "K",
                \u0198: "K",
                \u2c69: "K",
                \ua740: "K",
                \ua742: "K",
                \ua744: "K",
                "\ua7a2": "K",
                "\u24c1": "L",
                \uff2c: "L",
                \u013f: "L",
                \u0139: "L",
                \u013d: "L",
                \u1e36: "L",
                \u1e38: "L",
                \u013b: "L",
                \u1e3c: "L",
                \u1e3a: "L",
                \u0141: "L",
                \u023d: "L",
                \u2c62: "L",
                \u2c60: "L",
                \ua748: "L",
                \ua746: "L",
                \ua780: "L",
                \u01c7: "LJ",
                \u01c8: "Lj",
                "\u24c2": "M",
                \uff2d: "M",
                \u1e3e: "M",
                \u1e40: "M",
                \u1e42: "M",
                \u2c6e: "M",
                \u019c: "M",
                "\u24c3": "N",
                \uff2e: "N",
                \u01f8: "N",
                \u0143: "N",
                \u00d1: "N",
                \u1e44: "N",
                \u0147: "N",
                \u1e46: "N",
                \u0145: "N",
                \u1e4a: "N",
                \u1e48: "N",
                \u0220: "N",
                \u019d: "N",
                "\ua790": "N",
                "\ua7a4": "N",
                \u01ca: "NJ",
                \u01cb: "Nj",
                "\u24c4": "O",
                \uff2f: "O",
                \u00d2: "O",
                \u00d3: "O",
                \u00d4: "O",
                \u1ed2: "O",
                \u1ed0: "O",
                \u1ed6: "O",
                \u1ed4: "O",
                \u00d5: "O",
                \u1e4c: "O",
                \u022c: "O",
                \u1e4e: "O",
                \u014c: "O",
                \u1e50: "O",
                \u1e52: "O",
                \u014e: "O",
                \u022e: "O",
                \u0230: "O",
                \u00d6: "O",
                \u022a: "O",
                \u1ece: "O",
                \u0150: "O",
                \u01d1: "O",
                \u020c: "O",
                \u020e: "O",
                \u01a0: "O",
                \u1edc: "O",
                \u1eda: "O",
                \u1ee0: "O",
                \u1ede: "O",
                \u1ee2: "O",
                \u1ecc: "O",
                \u1ed8: "O",
                \u01ea: "O",
                \u01ec: "O",
                \u00d8: "O",
                \u01fe: "O",
                \u0186: "O",
                \u019f: "O",
                \ua74a: "O",
                \ua74c: "O",
                \u01a2: "OI",
                \ua74e: "OO",
                \u0222: "OU",
                "\u24c5": "P",
                \uff30: "P",
                \u1e54: "P",
                \u1e56: "P",
                \u01a4: "P",
                \u2c63: "P",
                \ua750: "P",
                \ua752: "P",
                \ua754: "P",
                "\u24c6": "Q",
                \uff31: "Q",
                \ua756: "Q",
                \ua758: "Q",
                \u024a: "Q",
                "\u24c7": "R",
                \uff32: "R",
                \u0154: "R",
                \u1e58: "R",
                \u0158: "R",
                \u0210: "R",
                \u0212: "R",
                \u1e5a: "R",
                \u1e5c: "R",
                \u0156: "R",
                \u1e5e: "R",
                \u024c: "R",
                \u2c64: "R",
                \ua75a: "R",
                "\ua7a6": "R",
                \ua782: "R",
                "\u24c8": "S",
                \uff33: "S",
                \u1e9e: "S",
                \u015a: "S",
                \u1e64: "S",
                \u015c: "S",
                \u1e60: "S",
                \u0160: "S",
                \u1e66: "S",
                \u1e62: "S",
                \u1e68: "S",
                \u0218: "S",
                \u015e: "S",
                "\u2c7e": "S",
                "\ua7a8": "S",
                \ua784: "S",
                "\u24c9": "T",
                \uff34: "T",
                \u1e6a: "T",
                \u0164: "T",
                \u1e6c: "T",
                \u021a: "T",
                \u0162: "T",
                \u1e70: "T",
                \u1e6e: "T",
                \u0166: "T",
                \u01ac: "T",
                \u01ae: "T",
                \u023e: "T",
                \ua786: "T",
                \ua728: "TZ",
                "\u24ca": "U",
                \uff35: "U",
                \u00d9: "U",
                \u00da: "U",
                \u00db: "U",
                \u0168: "U",
                \u1e78: "U",
                \u016a: "U",
                \u1e7a: "U",
                \u016c: "U",
                \u00dc: "U",
                \u01db: "U",
                \u01d7: "U",
                \u01d5: "U",
                \u01d9: "U",
                \u1ee6: "U",
                \u016e: "U",
                \u0170: "U",
                \u01d3: "U",
                \u0214: "U",
                \u0216: "U",
                \u01af: "U",
                \u1eea: "U",
                \u1ee8: "U",
                \u1eee: "U",
                \u1eec: "U",
                \u1ef0: "U",
                \u1ee4: "U",
                \u1e72: "U",
                \u0172: "U",
                \u1e76: "U",
                \u1e74: "U",
                \u0244: "U",
                "\u24cb": "V",
                \uff36: "V",
                \u1e7c: "V",
                \u1e7e: "V",
                \u01b2: "V",
                \ua75e: "V",
                \u0245: "V",
                \ua760: "VY",
                "\u24cc": "W",
                \uff37: "W",
                \u1e80: "W",
                \u1e82: "W",
                \u0174: "W",
                \u1e86: "W",
                \u1e84: "W",
                \u1e88: "W",
                \u2c72: "W",
                "\u24cd": "X",
                \uff38: "X",
                \u1e8a: "X",
                \u1e8c: "X",
                "\u24ce": "Y",
                \uff39: "Y",
                \u1ef2: "Y",
                \u00dd: "Y",
                \u0176: "Y",
                \u1ef8: "Y",
                \u0232: "Y",
                \u1e8e: "Y",
                \u0178: "Y",
                \u1ef6: "Y",
                \u1ef4: "Y",
                \u01b3: "Y",
                \u024e: "Y",
                \u1efe: "Y",
                "\u24cf": "Z",
                \uff3a: "Z",
                \u0179: "Z",
                \u1e90: "Z",
                \u017b: "Z",
                \u017d: "Z",
                \u1e92: "Z",
                \u1e94: "Z",
                \u01b5: "Z",
                \u0224: "Z",
                "\u2c7f": "Z",
                \u2c6b: "Z",
                \ua762: "Z",
                "\u24d0": "a",
                \uff41: "a",
                \u1e9a: "a",
                \u00e0: "a",
                \u00e1: "a",
                \u00e2: "a",
                \u1ea7: "a",
                \u1ea5: "a",
                \u1eab: "a",
                \u1ea9: "a",
                \u00e3: "a",
                \u0101: "a",
                \u0103: "a",
                \u1eb1: "a",
                \u1eaf: "a",
                \u1eb5: "a",
                \u1eb3: "a",
                \u0227: "a",
                \u01e1: "a",
                \u00e4: "a",
                \u01df: "a",
                \u1ea3: "a",
                \u00e5: "a",
                \u01fb: "a",
                \u01ce: "a",
                \u0201: "a",
                \u0203: "a",
                \u1ea1: "a",
                \u1ead: "a",
                \u1eb7: "a",
                \u1e01: "a",
                \u0105: "a",
                \u2c65: "a",
                \u0250: "a",
                \ua733: "aa",
                \u00e6: "ae",
                \u01fd: "ae",
                \u01e3: "ae",
                \ua735: "ao",
                \ua737: "au",
                \ua739: "av",
                \ua73b: "av",
                \ua73d: "ay",
                "\u24d1": "b",
                \uff42: "b",
                \u1e03: "b",
                \u1e05: "b",
                \u1e07: "b",
                \u0180: "b",
                \u0183: "b",
                \u0253: "b",
                "\u24d2": "c",
                \uff43: "c",
                \u0107: "c",
                \u0109: "c",
                \u010b: "c",
                \u010d: "c",
                \u00e7: "c",
                \u1e09: "c",
                \u0188: "c",
                \u023c: "c",
                \ua73f: "c",
                \u2184: "c",
                "\u24d3": "d",
                \uff44: "d",
                \u1e0b: "d",
                \u010f: "d",
                \u1e0d: "d",
                \u1e11: "d",
                \u1e13: "d",
                \u1e0f: "d",
                \u0111: "d",
                \u018c: "d",
                \u0256: "d",
                \u0257: "d",
                \ua77a: "d",
                \u01f3: "dz",
                \u01c6: "dz",
                "\u24d4": "e",
                \uff45: "e",
                \u00e8: "e",
                \u00e9: "e",
                \u00ea: "e",
                \u1ec1: "e",
                \u1ebf: "e",
                \u1ec5: "e",
                \u1ec3: "e",
                \u1ebd: "e",
                \u0113: "e",
                \u1e15: "e",
                \u1e17: "e",
                \u0115: "e",
                \u0117: "e",
                \u00eb: "e",
                \u1ebb: "e",
                \u011b: "e",
                \u0205: "e",
                \u0207: "e",
                \u1eb9: "e",
                \u1ec7: "e",
                \u0229: "e",
                \u1e1d: "e",
                \u0119: "e",
                \u1e19: "e",
                \u1e1b: "e",
                \u0247: "e",
                \u025b: "e",
                \u01dd: "e",
                "\u24d5": "f",
                \uff46: "f",
                \u1e1f: "f",
                \u0192: "f",
                \ua77c: "f",
                "\u24d6": "g",
                \uff47: "g",
                \u01f5: "g",
                \u011d: "g",
                \u1e21: "g",
                \u011f: "g",
                \u0121: "g",
                \u01e7: "g",
                \u0123: "g",
                \u01e5: "g",
                \u0260: "g",
                "\ua7a1": "g",
                \u1d79: "g",
                \ua77f: "g",
                "\u24d7": "h",
                \uff48: "h",
                \u0125: "h",
                \u1e23: "h",
                \u1e27: "h",
                \u021f: "h",
                \u1e25: "h",
                \u1e29: "h",
                \u1e2b: "h",
                \u1e96: "h",
                \u0127: "h",
                \u2c68: "h",
                \u2c76: "h",
                \u0265: "h",
                \u0195: "hv",
                "\u24d8": "i",
                \uff49: "i",
                \u00ec: "i",
                \u00ed: "i",
                \u00ee: "i",
                \u0129: "i",
                \u012b: "i",
                \u012d: "i",
                \u00ef: "i",
                \u1e2f: "i",
                \u1ec9: "i",
                \u01d0: "i",
                \u0209: "i",
                \u020b: "i",
                \u1ecb: "i",
                \u012f: "i",
                \u1e2d: "i",
                \u0268: "i",
                \u0131: "i",
                "\u24d9": "j",
                \uff4a: "j",
                \u0135: "j",
                \u01f0: "j",
                \u0249: "j",
                "\u24da": "k",
                \uff4b: "k",
                \u1e31: "k",
                \u01e9: "k",
                \u1e33: "k",
                \u0137: "k",
                \u1e35: "k",
                \u0199: "k",
                \u2c6a: "k",
                \ua741: "k",
                \ua743: "k",
                \ua745: "k",
                "\ua7a3": "k",
                "\u24db": "l",
                \uff4c: "l",
                \u0140: "l",
                \u013a: "l",
                \u013e: "l",
                \u1e37: "l",
                \u1e39: "l",
                \u013c: "l",
                \u1e3d: "l",
                \u1e3b: "l",
                \u017f: "l",
                \u0142: "l",
                \u019a: "l",
                \u026b: "l",
                \u2c61: "l",
                \ua749: "l",
                \ua781: "l",
                \ua747: "l",
                \u01c9: "lj",
                "\u24dc": "m",
                \uff4d: "m",
                \u1e3f: "m",
                \u1e41: "m",
                \u1e43: "m",
                \u0271: "m",
                \u026f: "m",
                "\u24dd": "n",
                \uff4e: "n",
                \u01f9: "n",
                \u0144: "n",
                \u00f1: "n",
                \u1e45: "n",
                \u0148: "n",
                \u1e47: "n",
                \u0146: "n",
                \u1e4b: "n",
                \u1e49: "n",
                \u019e: "n",
                \u0272: "n",
                \u0149: "n",
                "\ua791": "n",
                "\ua7a5": "n",
                \u01cc: "nj",
                "\u24de": "o",
                \uff4f: "o",
                \u00f2: "o",
                \u00f3: "o",
                \u00f4: "o",
                \u1ed3: "o",
                \u1ed1: "o",
                \u1ed7: "o",
                \u1ed5: "o",
                \u00f5: "o",
                \u1e4d: "o",
                \u022d: "o",
                \u1e4f: "o",
                \u014d: "o",
                \u1e51: "o",
                \u1e53: "o",
                \u014f: "o",
                \u022f: "o",
                \u0231: "o",
                \u00f6: "o",
                \u022b: "o",
                \u1ecf: "o",
                \u0151: "o",
                \u01d2: "o",
                \u020d: "o",
                \u020f: "o",
                \u01a1: "o",
                \u1edd: "o",
                \u1edb: "o",
                \u1ee1: "o",
                \u1edf: "o",
                \u1ee3: "o",
                \u1ecd: "o",
                \u1ed9: "o",
                \u01eb: "o",
                \u01ed: "o",
                \u00f8: "o",
                \u01ff: "o",
                \u0254: "o",
                \ua74b: "o",
                \ua74d: "o",
                \u0275: "o",
                \u01a3: "oi",
                \u0223: "ou",
                \ua74f: "oo",
                "\u24df": "p",
                \uff50: "p",
                \u1e55: "p",
                \u1e57: "p",
                \u01a5: "p",
                \u1d7d: "p",
                \ua751: "p",
                \ua753: "p",
                \ua755: "p",
                "\u24e0": "q",
                \uff51: "q",
                \u024b: "q",
                \ua757: "q",
                \ua759: "q",
                "\u24e1": "r",
                \uff52: "r",
                \u0155: "r",
                \u1e59: "r",
                \u0159: "r",
                \u0211: "r",
                \u0213: "r",
                \u1e5b: "r",
                \u1e5d: "r",
                \u0157: "r",
                \u1e5f: "r",
                \u024d: "r",
                \u027d: "r",
                \ua75b: "r",
                "\ua7a7": "r",
                \ua783: "r",
                "\u24e2": "s",
                \uff53: "s",
                \u00df: "s",
                \u015b: "s",
                \u1e65: "s",
                \u015d: "s",
                \u1e61: "s",
                \u0161: "s",
                \u1e67: "s",
                \u1e63: "s",
                \u1e69: "s",
                \u0219: "s",
                \u015f: "s",
                \u023f: "s",
                "\ua7a9": "s",
                \ua785: "s",
                \u1e9b: "s",
                "\u24e3": "t",
                \uff54: "t",
                \u1e6b: "t",
                \u1e97: "t",
                \u0165: "t",
                \u1e6d: "t",
                \u021b: "t",
                \u0163: "t",
                \u1e71: "t",
                \u1e6f: "t",
                \u0167: "t",
                \u01ad: "t",
                \u0288: "t",
                \u2c66: "t",
                \ua787: "t",
                \ua729: "tz",
                "\u24e4": "u",
                \uff55: "u",
                \u00f9: "u",
                \u00fa: "u",
                \u00fb: "u",
                \u0169: "u",
                \u1e79: "u",
                \u016b: "u",
                \u1e7b: "u",
                \u016d: "u",
                \u00fc: "u",
                \u01dc: "u",
                \u01d8: "u",
                \u01d6: "u",
                \u01da: "u",
                \u1ee7: "u",
                \u016f: "u",
                \u0171: "u",
                \u01d4: "u",
                \u0215: "u",
                \u0217: "u",
                \u01b0: "u",
                \u1eeb: "u",
                \u1ee9: "u",
                \u1eef: "u",
                \u1eed: "u",
                \u1ef1: "u",
                \u1ee5: "u",
                \u1e73: "u",
                \u0173: "u",
                \u1e77: "u",
                \u1e75: "u",
                \u0289: "u",
                "\u24e5": "v",
                \uff56: "v",
                \u1e7d: "v",
                \u1e7f: "v",
                \u028b: "v",
                \ua75f: "v",
                \u028c: "v",
                \ua761: "vy",
                "\u24e6": "w",
                \uff57: "w",
                \u1e81: "w",
                \u1e83: "w",
                \u0175: "w",
                \u1e87: "w",
                \u1e85: "w",
                \u1e98: "w",
                \u1e89: "w",
                \u2c73: "w",
                "\u24e7": "x",
                \uff58: "x",
                \u1e8b: "x",
                \u1e8d: "x",
                "\u24e8": "y",
                \uff59: "y",
                \u1ef3: "y",
                \u00fd: "y",
                \u0177: "y",
                \u1ef9: "y",
                \u0233: "y",
                \u1e8f: "y",
                \u00ff: "y",
                \u1ef7: "y",
                \u1e99: "y",
                \u1ef5: "y",
                \u01b4: "y",
                \u024f: "y",
                \u1eff: "y",
                "\u24e9": "z",
                \uff5a: "z",
                \u017a: "z",
                \u1e91: "z",
                \u017c: "z",
                \u017e: "z",
                \u1e93: "z",
                \u1e95: "z",
                \u01b6: "z",
                \u0225: "z",
                \u0240: "z",
                \u2c6c: "z",
                \ua763: "z"
            };
        L = t(document), N = function() {
            var t = 1;
            return function() {
                return t++
            }
        }(), L.on("mousemove", function(t) {
            F.x = t.pageX, F.y = t.pageY
        }), M = E(Object, {
            bind: function(t) {
                var e = this;
                return function() {
                    t.apply(e, arguments)
                }
            },
            init: function(i) {
                var n, o, r = ".select2-results";
                this.opts = i = this.prepareOpts(i), this.id = i.id, i.element.data("select2") !== e && null !== i.element.data("select2") && i.element.data("select2").destroy(), this.container = this.createContainer(), this.containerId = "s2id_" + (i.element.attr("id") || "autogen" + N()), this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.body = u(function() {
                    return i.element.closest("body")
                }), y(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", i.element.attr("style")), this.container.css(S(i.containerCss)), this.container.addClass(S(i.containerCssClass)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", g), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), y(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(S(i.dropdownCssClass)), this.dropdown.data("select2", this), this.dropdown.on("click", g), this.results = n = this.container.find(r), this.search = o = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", g), c(this.results), this.dropdown.on("mousemove-filtered touchstart touchmove touchend", r, this.bind(this.highlightUnderEvent)), d(80, this.results), this.dropdown.on("scroll-debounced", r, this.bind(this.loadMoreIfNeeded)), t(this.container).on("change", ".select2-input", function(t) {
                    t.stopPropagation()
                }), t(this.dropdown).on("change", ".select2-input", function(t) {
                    t.stopPropagation()
                }), t.fn.mousewheel && n.mousewheel(function(t, e, i, s) {
                    var o = n.scrollTop();
                    s > 0 && 0 >= o - s ? (n.scrollTop(0), g(t)) : 0 > s && n.get(0).scrollHeight - n.scrollTop() + s <= n.height() && (n.scrollTop(n.get(0).scrollHeight - n.height()), g(t))
                }), l(o), o.on("keyup-change input paste", this.bind(this.updateResults)), o.on("focus", function() {
                    o.addClass("select2-focused")
                }), o.on("blur", function() {
                    o.removeClass("select2-focused")
                }), this.dropdown.on("mouseup", r, this.bind(function(e) {
                    t(e.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(e), this.selectHighlighted(e))
                })), this.dropdown.on("click mouseup mousedown", function(t) {
                    t.stopPropagation()
                }), t.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== i.maximumInputLength && this.search.attr("maxlength", i.maximumInputLength);
                var a = i.element.prop("disabled");
                a === e && (a = !1), this.enable(!a);
                var h = i.element.prop("readonly");
                h === e && (h = !1), this.readonly(h), O = O || s(), this.autofocus = i.element.prop("autofocus"), i.element.prop("autofocus", !1), this.autofocus && this.focus(), this.nextSearchTerm = e
            },
            destroy: function() {
                var t = this.opts.element,
                    i = t.data("select2");
                this.close(), this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), i !== e && (i.container.remove(), i.dropdown.remove(), t.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? t.attr({
                    tabindex: this.elementTabIndex
                }) : t.removeAttr("tabindex"), t.show())
            },
            optionToData: function(t) {
                return t.is("option") ? {
                    id: t.prop("value"),
                    text: t.text(),
                    element: t.get(),
                    css: t.attr("class"),
                    disabled: t.prop("disabled"),
                    locked: o(t.attr("locked"), "locked") || o(t.data("locked"), !0)
                } : t.is("optgroup") ? {
                    text: t.attr("label"),
                    children: [],
                    element: t.get(),
                    css: t.attr("class")
                } : void 0
            },
            prepareOpts: function(i) {
                var n, s, a, l, c = this;
                if (n = i.element, "select" === n.get(0).tagName.toLowerCase() && (this.select = s = i.element), s && t.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                    if (this in i) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                }), i = t.extend({}, {
                    populateResults: function(n, s, o) {
                        var r, a = this.opts.id;
                        (r = function(n, s, l) {
                            var h, u, d, p, f, g, m, v, y, b;
                            for (n = i.sortResults(n, s, o), h = 0, u = n.length; u > h; h += 1) d = n[h], f = d.disabled === !0, p = !f && a(d) !== e, g = d.children && d.children.length > 0, m = t("<li></li>"), m.addClass("select2-results-dept-" + l), m.addClass("select2-result"), m.addClass(p ? "select2-result-selectable" : "select2-result-unselectable"), f && m.addClass("select2-disabled"), g && m.addClass("select2-result-with-children"), m.addClass(c.opts.formatResultCssClass(d)), v = t(document.createElement("div")), v.addClass("select2-result-label"), b = i.formatResult(d, v, o, c.opts.escapeMarkup), b !== e && v.html(b), m.append(v), g && (y = t("<ul></ul>"), y.addClass("select2-result-sub"), r(d.children, y, l + 1), m.append(y)), m.data("select2-data", d), s.append(m)
                        })(s, n, 0)
                    }
                }, t.fn.select2.defaults, i), "function" != typeof i.id && (a = i.id, i.id = function(t) {
                    return t[a]
                }), t.isArray(i.element.data("select2Tags"))) {
                    if ("tags" in i) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + i.element.attr("id");
                    i.tags = i.element.data("select2Tags")
                }
                if (s ? (i.query = this.bind(function(t) {
                    var i, s, o, r = {
                            results: [],
                            more: !1
                        },
                        a = t.term;
                    o = function(e, i) {
                        var n;
                        e.is("option") ? t.matcher(a, e.text(), e) && i.push(c.optionToData(e)) : e.is("optgroup") && (n = c.optionToData(e), e.children().each2(function(t, e) {
                            o(e, n.children)
                        }), n.children.length > 0 && i.push(n))
                    }, i = n.children(), this.getPlaceholder() !== e && i.length > 0 && (s = this.getPlaceholderOption(), s && (i = i.not(s))), i.each2(function(t, e) {
                        o(e, r.results)
                    }), t.callback(r)
                }), i.id = function(t) {
                    return t.id
                }, i.formatResultCssClass = function(t) {
                    return t.css
                }) : "query" in i || ("ajax" in i ? (l = i.element.data("ajax-url"), l && l.length > 0 && (i.ajax.url = l), i.query = _.call(i.element, i.ajax)) : "data" in i ? i.query = x(i.data) : "tags" in i && (i.query = k(i.tags), i.createSearchChoice === e && (i.createSearchChoice = function(e) {
                    return {
                        id: t.trim(e),
                        text: t.trim(e)
                    }
                }), i.initSelection === e && (i.initSelection = function(e, n) {
                    var s = [];
                    t(r(e.val(), i.separator)).each(function() {
                        var e = {
                                id: this,
                                text: this
                            },
                            n = i.tags;
                        t.isFunction(n) && (n = n()), t(n).each(function() {
                            return o(this.id, e.id) ? (e = this, !1) : void 0
                        }), s.push(e)
                    }), n(s)
                }))), "function" != typeof i.query) throw "query function not defined for Select2 " + i.element.attr("id");
                return i
            },
            monitorSource: function() {
                var t, i, n = this.opts.element;
                n.on("change.select2", this.bind(function() {
                    this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
                })), t = this.bind(function() {
                    var t = n.prop("disabled");
                    t === e && (t = !1), this.enable(!t);
                    var i = n.prop("readonly");
                    i === e && (i = !1), this.readonly(i), y(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(S(this.opts.containerCssClass)), y(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(S(this.opts.dropdownCssClass))
                }), n.on("propertychange.select2", t), this.mutationCallback === e && (this.mutationCallback = function(e) {
                    e.forEach(t)
                }), i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, i !== e && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new i(this.mutationCallback), this.propertyObserver.observe(n.get(0), {
                    attributes: !0,
                    subtree: !1
                }))
            },
            triggerSelect: function(e) {
                var i = t.Event("select2-selecting", {
                    val: this.id(e),
                    object: e
                });
                return this.opts.element.trigger(i), !i.isDefaultPrevented()
            },
            triggerChange: function(e) {
                e = e || {}, e = t.extend({}, e, {
                    type: "change",
                    val: this.val()
                }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(e), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
            },
            isInterfaceEnabled: function() {
                return this.enabledInterface === !0
            },
            enableInterface: function() {
                var t = this._enabled && !this._readonly,
                    e = !t;
                return t === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", e), this.close(), this.enabledInterface = t, !0)
            },
            enable: function(t) {
                t === e && (t = !0), this._enabled !== t && (this._enabled = t, this.opts.element.prop("disabled", !t), this.enableInterface())
            },
            disable: function() {
                this.enable(!1)
            },
            readonly: function(t) {
                return t === e && (t = !1), this._readonly === t ? !1 : (this._readonly = t, this.opts.element.prop("readonly", t), this.enableInterface(), !0)
            },
            opened: function() {
                return this.container.hasClass("select2-dropdown-open")
            },
            positionDropdown: function() {
                var e, i, n, s, o, r = this.dropdown,
                    a = this.container.offset(),
                    l = this.container.outerHeight(!1),
                    c = this.container.outerWidth(!1),
                    h = r.outerHeight(!1),
                    u = t(window),
                    d = u.width(),
                    p = u.height(),
                    f = u.scrollLeft() + d,
                    g = u.scrollTop() + p,
                    m = a.top + l,
                    v = a.left,
                    y = g >= m + h,
                    b = a.top - h >= this.body().scrollTop(),
                    w = r.outerWidth(!1),
                    _ = f >= v + w,
                    x = r.hasClass("select2-drop-above");
                x ? (i = !0, !b && y && (n = !0, i = !1)) : (i = !1, !y && b && (n = !0, i = !0)), n && (r.hide(), a = this.container.offset(), l = this.container.outerHeight(!1), c = this.container.outerWidth(!1), h = r.outerHeight(!1), f = u.scrollLeft() + d, g = u.scrollTop() + p, m = a.top + l, v = a.left, w = r.outerWidth(!1), _ = f >= v + w, r.show()), this.opts.dropdownAutoWidth ? (o = t(".select2-results", r)[0], r.addClass("select2-drop-auto-width"), r.css("width", ""), w = r.outerWidth(!1) + (o.scrollHeight === o.clientHeight ? 0 : O.width), w > c ? c = w : w = c, _ = f >= v + w) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body().css("position") && (e = this.body().offset(), m -= e.top, v -= e.left), _ || (v = a.left + c - w), s = {
                    left: v,
                    width: c
                }, i ? (s.bottom = p - a.top, s.top = "auto", this.container.addClass("select2-drop-above"), r.addClass("select2-drop-above")) : (s.top = m, s.bottom = "auto", this.container.removeClass("select2-drop-above"), r.removeClass("select2-drop-above")), s = t.extend(s, S(this.opts.dropdownCss)), r.css(s)
            },
            shouldOpen: function() {
                var e;
                return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (e = t.Event("select2-opening"), this.opts.element.trigger(e), !e.isDefaultPrevented())
            },
            clearDropdownAlignmentPreference: function() {
                this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
            },
            open: function() {
                return this.shouldOpen() ? (this.opening(), !0) : !1
            },
            opening: function() {
                var e, i = this.containerId,
                    n = "scroll." + i,
                    s = "resize." + i,
                    o = "orientationchange." + i;
                this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body().children().last()[0] && this.dropdown.detach().appendTo(this.body()), e = t("#select2-drop-mask"), 0 == e.length && (e = t(document.createElement("div")), e.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), e.hide(), e.appendTo(this.body()), e.on("mousedown touchstart click", function(e) {
                    var i, n = t("#select2-drop");
                    n.length > 0 && (i = n.data("select2"), i.opts.selectOnBlur && i.selectHighlighted({
                        noFocus: !0
                    }), i.close({
                        focus: !0
                    }), e.preventDefault(), e.stopPropagation())
                })), this.dropdown.prev()[0] !== e[0] && this.dropdown.before(e), t("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), e.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
                var r = this;
                this.container.parents().add(window).each(function() {
                    t(this).on(s + " " + n + " " + o, function() {
                        r.positionDropdown()
                    })
                })
            },
            close: function() {
                if (this.opened()) {
                    var e = this.containerId,
                        i = "scroll." + e,
                        n = "resize." + e,
                        s = "orientationchange." + e;
                    this.container.parents().add(window).each(function() {
                        t(this).off(i).off(n).off(s)
                    }), this.clearDropdownAlignmentPreference(), t("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(t.Event("select2-close"))
                }
            },
            externalSearch: function(t) {
                this.open(), this.search.val(t), this.updateResults(!1)
            },
            clearSearch: function() {},
            getMaximumSelectionSize: function() {
                return S(this.opts.maximumSelectionSize)
            },
            ensureHighlightVisible: function() {
                var e, i, n, s, o, r, a, l = this.results;
                if (i = this.highlight(), !(0 > i)) {
                    if (0 == i) return void l.scrollTop(0);
                    e = this.findHighlightableChoices().find(".select2-result-label"), n = t(e[i]), s = n.offset().top + n.outerHeight(!0), i === e.length - 1 && (a = l.find("li.select2-more-results"), a.length > 0 && (s = a.offset().top + a.outerHeight(!0))), o = l.offset().top + l.outerHeight(!0), s > o && l.scrollTop(l.scrollTop() + (s - o)), r = n.offset().top - l.offset().top, 0 > r && "none" != n.css("display") && l.scrollTop(l.scrollTop() + r)
                }
            },
            findHighlightableChoices: function() {
                return this.results.find(".select2-result-selectable:not(.select2-disabled, .select2-selected)")
            },
            moveHighlight: function(e) {
                for (var i = this.findHighlightableChoices(), n = this.highlight(); n > -1 && n < i.length;) {
                    n += e;
                    var s = t(i[n]);
                    if (s.hasClass("select2-result-selectable") && !s.hasClass("select2-disabled") && !s.hasClass("select2-selected")) {
                        this.highlight(n);
                        break
                    }
                }
            },
            highlight: function(e) {
                var i, s, o = this.findHighlightableChoices();
                return 0 === arguments.length ? n(o.filter(".select2-highlighted")[0], o.get()) : (e >= o.length && (e = o.length - 1), 0 > e && (e = 0), this.removeHighlight(), i = t(o[e]), i.addClass("select2-highlighted"), this.ensureHighlightVisible(), s = i.data("select2-data"), void(s && this.opts.element.trigger({
                    type: "select2-highlight",
                    val: this.id(s),
                    choice: s
                })))
            },
            removeHighlight: function() {
                this.results.find(".select2-highlighted").removeClass("select2-highlighted")
            },
            countSelectableResults: function() {
                return this.findHighlightableChoices().length
            },
            highlightUnderEvent: function(e) {
                var i = t(e.target).closest(".select2-result-selectable");
                if (i.length > 0 && !i.is(".select2-highlighted")) {
                    var n = this.findHighlightableChoices();
                    this.highlight(n.index(i))
                } else 0 == i.length && this.removeHighlight()
            },
            loadMoreIfNeeded: function() {
                var t, e = this.results,
                    i = e.find("li.select2-more-results"),
                    n = this.resultsPage + 1,
                    s = this,
                    o = this.search.val(),
                    r = this.context;
                0 !== i.length && (t = i.offset().top - e.offset().top - e.height(), t <= this.opts.loadMorePadding && (i.addClass("select2-active"), this.opts.query({
                    element: this.opts.element,
                    term: o,
                    page: n,
                    context: r,
                    matcher: this.opts.matcher,
                    callback: this.bind(function(t) {
                        s.opened() && (s.opts.populateResults.call(this, e, t.results, {
                            term: o,
                            page: n,
                            context: r
                        }), s.postprocessResults(t, !1, !1), t.more === !0 ? (i.detach().appendTo(e).text(s.opts.formatLoadMore(n + 1)), window.setTimeout(function() {
                            s.loadMoreIfNeeded()
                        }, 10)) : i.remove(), s.positionDropdown(), s.resultsPage = n, s.context = t.context, this.opts.element.trigger({
                            type: "select2-loaded",
                            items: t
                        }))
                    })
                })))
            },
            tokenize: function() {},
            updateResults: function(i) {
                function n() {
                    c.removeClass("select2-active"), d.positionDropdown()
                }

                function s(t) {
                    h.html(t), n()
                }
                var r, a, l, c = this.search,
                    h = this.results,
                    u = this.opts,
                    d = this,
                    p = c.val(),
                    f = t.data(this.container, "select2-last-term");
                if ((i === !0 || !f || !o(p, f)) && (t.data(this.container, "select2-last-term", p), i === !0 || this.showSearchInput !== !1 && this.opened())) {
                    l = ++this.queryCount;
                    var g = this.getMaximumSelectionSize();
                    if (g >= 1 && (r = this.data(), t.isArray(r) && r.length >= g && C(u.formatSelectionTooBig, "formatSelectionTooBig"))) return void s("<li class='select2-selection-limit'>" + u.formatSelectionTooBig(g) + "</li>");
                    if (c.val().length < u.minimumInputLength) return s(C(u.formatInputTooShort, "formatInputTooShort") ? "<li class='select2-no-results'>" + u.formatInputTooShort(c.val(), u.minimumInputLength) + "</li>" : ""), void(i && this.showSearch && this.showSearch(!0));
                    if (u.maximumInputLength && c.val().length > u.maximumInputLength) return void s(C(u.formatInputTooLong, "formatInputTooLong") ? "<li class='select2-no-results'>" + u.formatInputTooLong(c.val(), u.maximumInputLength) + "</li>" : "");
                    u.formatSearching && 0 === this.findHighlightableChoices().length && s("<li class='select2-searching'>" + u.formatSearching() + "</li>"), c.addClass("select2-active"), this.removeHighlight(), a = this.tokenize(), a != e && null != a && c.val(a), this.resultsPage = 1, u.query({
                        element: u.element,
                        term: c.val(),
                        page: this.resultsPage,
                        context: null,
                        matcher: u.matcher,
                        callback: this.bind(function(r) {
                            var a;
                            if (l == this.queryCount) {
                                if (!this.opened()) return void this.search.removeClass("select2-active");
                                if (this.context = r.context === e ? null : r.context, this.opts.createSearchChoice && "" !== c.val() && (a = this.opts.createSearchChoice.call(d, c.val(), r.results), a !== e && null !== a && d.id(a) !== e && null !== d.id(a) && 0 === t(r.results).filter(function() {
                                    return o(d.id(this), d.id(a))
                                }).length && r.results.unshift(a)), 0 === r.results.length && C(u.formatNoMatches, "formatNoMatches")) return void s("<li class='select2-no-results'>" + u.formatNoMatches(c.val()) + "</li>");
                                h.empty(), d.opts.populateResults.call(this, h, r.results, {
                                    term: c.val(),
                                    page: this.resultsPage,
                                    context: null
                                }), r.more === !0 && C(u.formatLoadMore, "formatLoadMore") && (h.append("<li class='select2-more-results'>" + d.opts.escapeMarkup(u.formatLoadMore(this.resultsPage)) + "</li>"), window.setTimeout(function() {
                                    d.loadMoreIfNeeded()
                                }, 10)), this.postprocessResults(r, i), n(), this.opts.element.trigger({
                                    type: "select2-loaded",
                                    items: r
                                })
                            }
                        })
                    })
                }
            },
            cancel: function() {
                this.close()
            },
            blur: function() {
                this.opts.selectOnBlur && this.selectHighlighted({
                    noFocus: !0
                }), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
            },
            focusSearch: function() {
                p(this.search)
            },
            selectHighlighted: function(t) {
                var e = this.highlight(),
                    i = this.results.find(".select2-highlighted"),
                    n = i.closest(".select2-result").data("select2-data");
                n ? (this.highlight(e), this.onSelect(n, t)) : t && t.noFocus && this.close()
            },
            getPlaceholder: function() {
                var t;
                return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((t = this.getPlaceholderOption()) !== e ? t.text() : e)
            },
            getPlaceholderOption: function() {
                if (this.select) {
                    var t = this.select.children("option").first();
                    if (this.opts.placeholderOption !== e) return "first" === this.opts.placeholderOption && t || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
                    if ("" === t.text() && "" === t.val()) return t
                }
            },
            initContainerWidth: function() {
                function i() {
                    var i, n, s, o, r, a;
                    if ("off" === this.opts.width) return null;
                    if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                    if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                        if (i = this.opts.element.attr("style"), i !== e)
                            for (n = i.split(";"), o = 0, r = n.length; r > o; o += 1)
                                if (a = n[o].replace(/\s/g, ""), s = a.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== s && s.length >= 1) return s[1];
                        return "resolve" === this.opts.width ? (i = this.opts.element.css("width"), i.indexOf("%") > 0 ? i : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
                    }
                    return t.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                }
                var n = i.call(this);
                null !== n && this.container.css("width", n)
            }
        }), A = E(M, {
            createContainer: function() {
                var e = t(document.createElement("div")).attr({
                    "class": "select2-container"
                }).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow'><b></b></span>", "</a>", "<input class='select2-focusser select2-offscreen' type='text'/>", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>", "   </div>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                return e
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
            },
            opening: function() {
                var i, n, s;
                this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.search.focus(), i = this.search.get(0), i.createTextRange ? (n = i.createTextRange(), n.collapse(!1), n.select()) : i.setSelectionRange && (s = this.search.val().length, i.setSelectionRange(s, s)), "" === this.search.val() && this.nextSearchTerm != e && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(t.Event("select2-open"))
            },
            close: function(t) {
                this.opened() && (this.parent.close.apply(this, arguments), t = t || {
                    focus: !0
                }, this.focusser.removeAttr("disabled"), t.focus && this.focusser.focus())
            },
            focus: function() {
                this.opened() ? this.close() : (this.focusser.removeAttr("disabled"), this.focusser.focus())
            },
            isFocused: function() {
                return this.container.hasClass("select2-container-active")
            },
            cancel: function() {
                this.parent.cancel.apply(this, arguments), this.focusser.removeAttr("disabled"), this.focusser.focus()
            },
            destroy: function() {
                t("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments)
            },
            initContainer: function() {
                var e, i = this.container,
                    n = this.dropdown;
                this.showSearch(this.opts.minimumResultsForSearch < 0 ? !1 : !0), this.selection = e = i.find(".select2-choice"), this.focusser = i.find(".select2-focusser"), this.focusser.attr("id", "s2id_autogen" + N()), t("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.focusser.attr("id")), this.focusser.attr("tabindex", this.elementTabIndex), this.search.on("keydown", this.bind(function(t) {
                    if (this.isInterfaceEnabled()) {
                        if (t.which === P.PAGE_UP || t.which === P.PAGE_DOWN) return void g(t);
                        switch (t.which) {
                            case P.UP:
                            case P.DOWN:
                                return this.moveHighlight(t.which === P.UP ? -1 : 1), void g(t);
                            case P.ENTER:
                                return this.selectHighlighted(), void g(t);
                            case P.TAB:
                                return void this.selectHighlighted({
                                    noFocus: !0
                                });
                            case P.ESC:
                                return this.cancel(t), void g(t)
                        }
                    }
                })), this.search.on("blur", this.bind(function() {
                    document.activeElement === this.body().get(0) && window.setTimeout(this.bind(function() {
                        this.search.focus()
                    }), 0)
                })), this.focusser.on("keydown", this.bind(function(t) {
                    if (this.isInterfaceEnabled() && t.which !== P.TAB && !P.isControl(t) && !P.isFunctionKey(t) && t.which !== P.ESC) {
                        if (this.opts.openOnEnter === !1 && t.which === P.ENTER) return void g(t);
                        if (t.which == P.DOWN || t.which == P.UP || t.which == P.ENTER && this.opts.openOnEnter) {
                            if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey) return;
                            return this.open(), void g(t)
                        }
                        return t.which == P.DELETE || t.which == P.BACKSPACE ? (this.opts.allowClear && this.clear(), void g(t)) : void 0
                    }
                })), l(this.focusser), this.focusser.on("keyup-change input", this.bind(function(t) {
                    if (this.opts.minimumResultsForSearch >= 0) {
                        if (t.stopPropagation(), this.opened()) return;
                        this.open()
                    }
                })), e.on("mousedown", "abbr", this.bind(function(t) {
                    this.isInterfaceEnabled() && (this.clear(), m(t), this.close(), this.selection.focus())
                })), e.on("mousedown", this.bind(function(e) {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), g(e)
                })), n.on("mousedown", this.bind(function() {
                    this.search.focus()
                })), e.on("focus", this.bind(function(t) {
                    g(t)
                })), this.focusser.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active")
                })).on("blur", this.bind(function() {
                    this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(t.Event("select2-blur")))
                })), this.search.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active")
                })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.setPlaceholder()
            },
            clear: function(e) {
                var i = this.selection.data("select2-data");
                if (i) {
                    var n = t.Event("select2-clearing");
                    if (this.opts.element.trigger(n), n.isDefaultPrevented()) return;
                    var s = this.getPlaceholderOption();
                    this.opts.element.val(s ? s.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), e !== !1 && (this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(i),
                        choice: i
                    }), this.triggerChange({
                        removed: i
                    }))
                }
            },
            initSelection: function() {
                if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();
                else {
                    var t = this;
                    this.opts.initSelection.call(null, this.opts.element, function(i) {
                        i !== e && null !== i && (t.updateSelection(i), t.close(), t.setPlaceholder())
                    })
                }
            },
            isPlaceholderOptionSelected: function() {
                var t;
                return this.getPlaceholder() ? (t = this.getPlaceholderOption()) !== e && t.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === e || null === this.opts.element.val() : !1
            },
            prepareOpts: function() {
                var e = this.parent.prepareOpts.apply(this, arguments),
                    i = this;
                return "select" === e.element.get(0).tagName.toLowerCase() ? e.initSelection = function(t, e) {
                    var n = t.find("option").filter(function() {
                        return this.selected
                    });
                    e(i.optionToData(n))
                } : "data" in e && (e.initSelection = e.initSelection || function(i, n) {
                    var s = i.val(),
                        r = null;
                    e.query({
                        matcher: function(t, i, n) {
                            var a = o(s, e.id(n));
                            return a && (r = n), a
                        },
                        callback: t.isFunction(n) ? function() {
                            n(r)
                        } : t.noop
                    })
                }), e
            },
            getPlaceholder: function() {
                return this.select && this.getPlaceholderOption() === e ? e : this.parent.getPlaceholder.apply(this, arguments)
            },
            setPlaceholder: function() {
                var t = this.getPlaceholder();
                if (this.isPlaceholderOptionSelected() && t !== e) {
                    if (this.select && this.getPlaceholderOption() === e) return;
                    this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(t)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
                }
            },
            postprocessResults: function(t, e, i) {
                var n = 0,
                    s = this;
                if (this.findHighlightableChoices().each2(function(t, e) {
                    return o(s.id(e.data("select2-data")), s.opts.element.val()) ? (n = t, !1) : void 0
                }), i !== !1 && this.highlight(e === !0 && n >= 0 ? n : 0), e === !0) {
                    var r = this.opts.minimumResultsForSearch;
                    r >= 0 && this.showSearch(D(t.results) >= r)
                }
            },
            showSearch: function(e) {
                this.showSearchInput !== e && (this.showSearchInput = e, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !e), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !e), t(this.dropdown, this.container).toggleClass("select2-with-searchbox", e))
            },
            onSelect: function(t, e) {
                if (this.triggerSelect(t)) {
                    var i = this.opts.element.val(),
                        n = this.data();
                    this.opts.element.val(this.id(t)), this.updateSelection(t), this.opts.element.trigger({
                        type: "select2-selected",
                        val: this.id(t),
                        choice: t
                    }), this.nextSearchTerm = this.opts.nextSearchTerm(t, this.search.val()), this.close(), e && e.noFocus || this.focusser.focus(), o(i, this.id(t)) || this.triggerChange({
                        added: t,
                        removed: n
                    })
                }
            },
            updateSelection: function(t) {
                var i, n, s = this.selection.find(".select2-chosen");
                this.selection.data("select2-data", t), s.empty(), null !== t && (i = this.opts.formatSelection(t, s, this.opts.escapeMarkup)), i !== e && s.append(i), n = this.opts.formatSelectionCssClass(t, s), n !== e && s.addClass(n), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== e && this.container.addClass("select2-allowclear")
            },
            val: function() {
                var t, i = !1,
                    n = null,
                    s = this,
                    o = this.data();
                if (0 === arguments.length) return this.opts.element.val();
                if (t = arguments[0], arguments.length > 1 && (i = arguments[1]), this.select) this.select.val(t).find("option").filter(function() {
                    return this.selected
                }).each2(function(t, e) {
                    return n = s.optionToData(e), !1
                }), this.updateSelection(n), this.setPlaceholder(), i && this.triggerChange({
                    added: n,
                    removed: o
                });
                else {
                    if (!t && 0 !== t) return void this.clear(i);
                    if (this.opts.initSelection === e) throw new Error("cannot call val() if initSelection() is not defined");
                    this.opts.element.val(t), this.opts.initSelection(this.opts.element, function(t) {
                        s.opts.element.val(t ? s.id(t) : ""), s.updateSelection(t), s.setPlaceholder(), i && s.triggerChange({
                            added: t,
                            removed: o
                        })
                    })
                }
            },
            clearSearch: function() {
                this.search.val(""), this.focusser.val("")
            },
            data: function(t) {
                var i, n = !1;
                return 0 === arguments.length ? (i = this.selection.data("select2-data"), i == e && (i = null), i) : (arguments.length > 1 && (n = arguments[1]), void(t ? (i = this.data(), this.opts.element.val(t ? this.id(t) : ""), this.updateSelection(t), n && this.triggerChange({
                    added: t,
                    removed: i
                })) : this.clear(n)))
            }
        }), I = E(M, {
            createContainer: function() {
                var e = t(document.createElement("div")).attr({
                    "class": "select2-container select2-container-multi"
                }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                return e
            },
            prepareOpts: function() {
                var e = this.parent.prepareOpts.apply(this, arguments),
                    i = this;
                return "select" === e.element.get(0).tagName.toLowerCase() ? e.initSelection = function(t, e) {
                    var n = [];
                    t.find("option").filter(function() {
                        return this.selected
                    }).each2(function(t, e) {
                        n.push(i.optionToData(e))
                    }), e(n)
                } : "data" in e && (e.initSelection = e.initSelection || function(i, n) {
                    var s = r(i.val(), e.separator),
                        a = [];
                    e.query({
                        matcher: function(i, n, r) {
                            var l = t.grep(s, function(t) {
                                return o(t, e.id(r))
                            }).length;
                            return l && a.push(r), l
                        },
                        callback: t.isFunction(n) ? function() {
                            for (var t = [], i = 0; i < s.length; i++)
                                for (var r = s[i], l = 0; l < a.length; l++) {
                                    var c = a[l];
                                    if (o(r, e.id(c))) {
                                        t.push(c), a.splice(l, 1);
                                        break
                                    }
                                }
                            n(t)
                        } : t.noop
                    })
                }), e
            },
            selectChoice: function(t) {
                var e = this.container.find(".select2-search-choice-focus");
                e.length && t && t[0] == e[0] || (e.length && this.opts.element.trigger("choice-deselected", e), e.removeClass("select2-search-choice-focus"), t && t.length && (this.close(), t.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", t)))
            },
            destroy: function() {
                t("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments)
            },
            initContainer: function() {
                var e, i = ".select2-choices";
                this.searchContainer = this.container.find(".select2-search-field"), this.selection = e = this.container.find(i);
                var n = this;
                this.selection.on("click", ".select2-search-choice:not(.select2-locked)", function() {
                    n.search[0].focus(), n.selectChoice(t(this))
                }), this.search.attr("id", "s2id_autogen" + N()), t("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.search.attr("id")), this.search.on("input paste", this.bind(function() {
                    this.isInterfaceEnabled() && (this.opened() || this.open())
                })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(t) {
                    if (this.isInterfaceEnabled()) {
                        ++this.keydowns;
                        var i = e.find(".select2-search-choice-focus"),
                            n = i.prev(".select2-search-choice:not(.select2-locked)"),
                            s = i.next(".select2-search-choice:not(.select2-locked)"),
                            o = f(this.search);
                        if (i.length && (t.which == P.LEFT || t.which == P.RIGHT || t.which == P.BACKSPACE || t.which == P.DELETE || t.which == P.ENTER)) {
                            var r = i;
                            return t.which == P.LEFT && n.length ? r = n : t.which == P.RIGHT ? r = s.length ? s : null : t.which === P.BACKSPACE ? (this.unselect(i.first()), this.search.width(10), r = n.length ? n : s) : t.which == P.DELETE ? (this.unselect(i.first()), this.search.width(10), r = s.length ? s : null) : t.which == P.ENTER && (r = null), this.selectChoice(r), g(t), void(r && r.length || this.open())
                        }
                        if ((t.which === P.BACKSPACE && 1 == this.keydowns || t.which == P.LEFT) && 0 == o.offset && !o.length) return this.selectChoice(e.find(".select2-search-choice:not(.select2-locked)").last()), void g(t);
                        if (this.selectChoice(null), this.opened()) switch (t.which) {
                            case P.UP:
                            case P.DOWN:
                                return this.moveHighlight(t.which === P.UP ? -1 : 1), void g(t);
                            case P.ENTER:
                                return this.selectHighlighted(), void g(t);
                            case P.TAB:
                                return this.selectHighlighted({
                                    noFocus: !0
                                }), void this.close();
                            case P.ESC:
                                return this.cancel(t), void g(t)
                        }
                        if (t.which !== P.TAB && !P.isControl(t) && !P.isFunctionKey(t) && t.which !== P.BACKSPACE && t.which !== P.ESC) {
                            if (t.which === P.ENTER) {
                                if (this.opts.openOnEnter === !1) return;
                                if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey) return
                            }
                            this.open(), (t.which === P.PAGE_UP || t.which === P.PAGE_DOWN) && g(t), t.which === P.ENTER && g(t)
                        }
                    }
                })), this.search.on("keyup", this.bind(function() {
                    this.keydowns = 0, this.resizeSearch()
                })), this.search.on("blur", this.bind(function(e) {
                    this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), e.stopImmediatePropagation(), this.opts.element.trigger(t.Event("select2-blur"))
                })), this.container.on("click", i, this.bind(function(e) {
                    this.isInterfaceEnabled() && (t(e.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.open(), this.focusSearch(), e.preventDefault()))
                })), this.container.on("focus", i, this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
                })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.clearSearch()
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
            },
            initSelection: function() {
                if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                    var t = this;
                    this.opts.initSelection.call(null, this.opts.element, function(i) {
                        i !== e && null !== i && (t.updateSelection(i), t.close(), t.clearSearch())
                    })
                }
            },
            clearSearch: function() {
                var t = this.getPlaceholder(),
                    i = this.getMaxSearchWidth();
                t !== e && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(t).addClass("select2-default"), this.search.width(i > 0 ? i : this.container.css("width"))) : this.search.val("").width(10)
            },
            clearPlaceholder: function() {
                this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
            },
            opening: function() {
                this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), this.updateResults(!0), this.search.focus(), this.opts.element.trigger(t.Event("select2-open"))
            },
            close: function() {
                this.opened() && this.parent.close.apply(this, arguments)
            },
            focus: function() {
                this.close(), this.search.focus()
            },
            isFocused: function() {
                return this.search.hasClass("select2-focused")
            },
            updateSelection: function(e) {
                var i = [],
                    s = [],
                    o = this;
                t(e).each(function() {
                    n(o.id(this), i) < 0 && (i.push(o.id(this)), s.push(this))
                }), e = s, this.selection.find(".select2-search-choice").remove(), t(e).each(function() {
                    o.addSelectedChoice(this)
                }), o.postprocessResults()
            },
            tokenize: function() {
                var t = this.search.val();
                t = this.opts.tokenizer.call(this, t, this.data(), this.bind(this.onSelect), this.opts), null != t && t != e && (this.search.val(t), t.length > 0 && this.open())
            },
            onSelect: function(t, e) {
                this.triggerSelect(t) && (this.addSelectedChoice(t), this.opts.element.trigger({
                    type: "selected",
                    val: this.id(t),
                    choice: t
                }), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(t, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() && this.updateResults(!0), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
                    added: t
                }), e && e.noFocus || this.focusSearch())
            },
            cancel: function() {
                this.close(), this.focusSearch()
            },
            addSelectedChoice: function(i) {
                var n, s, o = !i.locked,
                    r = t("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),
                    a = t("<li class='select2-search-choice select2-locked'><div></div></li>"),
                    l = o ? r : a,
                    c = this.id(i),
                    h = this.getVal();
                n = this.opts.formatSelection(i, l.find("div"), this.opts.escapeMarkup), n != e && l.find("div").replaceWith("<div>" + n + "</div>"), s = this.opts.formatSelectionCssClass(i, l.find("div")), s != e && l.addClass(s), o && l.find(".select2-search-choice-close").on("mousedown", g).on("click dblclick", this.bind(function(e) {
                    this.isInterfaceEnabled() && (t(e.target).closest(".select2-search-choice").fadeOut("fast", this.bind(function() {
                        this.unselect(t(e.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), this.close(), this.focusSearch()
                    })).dequeue(), g(e))
                })).on("focus", this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
                })), l.data("select2-data", i), l.insertBefore(this.searchContainer), h.push(c), this.setVal(h)
            },
            unselect: function(e) {
                var i, s, o = this.getVal();
                if (e = e.closest(".select2-search-choice"), 0 === e.length) throw "Invalid argument: " + e + ". Must be .select2-search-choice";
                if (i = e.data("select2-data")) {
                    for (;
                        (s = n(this.id(i), o)) >= 0;) o.splice(s, 1), this.setVal(o), this.select && this.postprocessResults();
                    var r = t.Event("select2-removing");
                    r.val = this.id(i), r.choice = i, this.opts.element.trigger(r), r.isDefaultPrevented() || (e.remove(), this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(i),
                        choice: i
                    }), this.triggerChange({
                        removed: i
                    }))
                }
            },
            postprocessResults: function(t, e, i) {
                var s = this.getVal(),
                    o = this.results.find(".select2-result"),
                    r = this.results.find(".select2-result-with-children"),
                    a = this;
                o.each2(function(t, e) {
                    var i = a.id(e.data("select2-data"));
                    n(i, s) >= 0 && (e.addClass("select2-selected"), e.find(".select2-result-selectable").addClass("select2-selected"))
                }), r.each2(function(t, e) {
                    e.is(".select2-result-selectable") || 0 !== e.find(".select2-result-selectable:not(.select2-selected)").length || e.addClass("select2-selected")
                }), -1 == this.highlight() && i !== !1 && a.highlight(0), !this.opts.createSearchChoice && !o.filter(".select2-result:not(.select2-selected)").length > 0 && (!t || t && !t.more && 0 === this.results.find(".select2-no-results").length) && C(a.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + a.opts.formatNoMatches(a.search.val()) + "</li>")
            },
            getMaxSearchWidth: function() {
                return this.selection.width() - a(this.search)
            },
            resizeSearch: function() {
                var t, e, i, n, s, o = a(this.search);
                t = v(this.search) + 10, e = this.search.offset().left, i = this.selection.width(), n = this.selection.offset().left, s = i - (e - n) - o, t > s && (s = i - o), 40 > s && (s = i - o), 0 >= s && (s = t), this.search.width(Math.floor(s))
            },
            getVal: function() {
                var t;
                return this.select ? (t = this.select.val(), null === t ? [] : t) : (t = this.opts.element.val(), r(t, this.opts.separator))
            },
            setVal: function(e) {
                var i;
                this.select ? this.select.val(e) : (i = [], t(e).each(function() {
                    n(this, i) < 0 && i.push(this)
                }), this.opts.element.val(0 === i.length ? "" : i.join(this.opts.separator)))
            },
            buildChangeDetails: function(t, e) {
                for (var e = e.slice(0), t = t.slice(0), i = 0; i < e.length; i++)
                    for (var n = 0; n < t.length; n++) o(this.opts.id(e[i]), this.opts.id(t[n])) && (e.splice(i, 1), i > 0 && i--, t.splice(n, 1), n--);
                return {
                    added: e,
                    removed: t
                }
            },
            val: function(i, n) {
                var s, o = this;
                if (0 === arguments.length) return this.getVal();
                if (s = this.data(), s.length || (s = []), !i && 0 !== i) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), void(n && this.triggerChange({
                    added: this.data(),
                    removed: s
                }));
                if (this.setVal(i), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), n && this.triggerChange(this.buildChangeDetails(s, this.data()));
                else {
                    if (this.opts.initSelection === e) throw new Error("val() cannot be called if initSelection() is not defined");
                    this.opts.initSelection(this.opts.element, function(e) {
                        var i = t.map(e, o.id);
                        o.setVal(i), o.updateSelection(e), o.clearSearch(), n && o.triggerChange(o.buildChangeDetails(s, o.data()))
                    })
                }
                this.clearSearch()
            },
            onSortStart: function() {
                if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                this.search.width(0), this.searchContainer.hide()
            },
            onSortEnd: function() {
                var e = [],
                    i = this;
                this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() {
                    e.push(i.opts.id(t(this).data("select2-data")))
                }), this.setVal(e), this.triggerChange()
            },
            data: function(e, i) {
                var n, s, o = this;
                return 0 === arguments.length ? this.selection.find(".select2-search-choice").map(function() {
                    return t(this).data("select2-data")
                }).get() : (s = this.data(), e || (e = []), n = t.map(e, function(t) {
                    return o.opts.id(t)
                }), this.setVal(n), this.updateSelection(e), this.clearSearch(), i && this.triggerChange(this.buildChangeDetails(s, this.data())), void 0)
            }
        }), t.fn.select2 = function() {
            var i, s, o, r, a, l = Array.prototype.slice.call(arguments, 0),
                c = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
                h = ["opened", "isFocused", "container", "dropdown"],
                u = ["val", "data"],
                d = {
                    search: "externalSearch"
                };
            return this.each(function() {
                if (0 === l.length || "object" == typeof l[0]) i = 0 === l.length ? {} : t.extend({}, l[0]), i.element = t(this), "select" === i.element.get(0).tagName.toLowerCase() ? a = i.element.prop("multiple") : (a = i.multiple || !1, "tags" in i && (i.multiple = a = !0)), s = a ? new I : new A, s.init(i);
                else {
                    if ("string" != typeof l[0]) throw "Invalid arguments to select2 plugin: " + l;
                    if (n(l[0], c) < 0) throw "Unknown method: " + l[0];
                    if (r = e, s = t(this).data("select2"), s === e) return;
                    if (o = l[0], "container" === o ? r = s.container : "dropdown" === o ? r = s.dropdown : (d[o] && (o = d[o]), r = s[o].apply(s, l.slice(1))), n(l[0], h) >= 0 || n(l[0], u) && 1 == l.length) return !1
                }
            }), r === e ? this : r
        }, t.fn.select2.defaults = {
            width: "copy",
            loadMorePadding: 0,
            closeOnSelect: !0,
            openOnEnter: !0,
            containerCss: {},
            dropdownCss: {},
            containerCssClass: "",
            dropdownCssClass: "",
            formatResult: function(t, e, i, n) {
                var s = [];
                return b(t.text, i.term, s, n), s.join("")
            },
            formatSelection: function(t, i, n) {
                return t ? n(t.text) : e
            },
            sortResults: function(t) {
                return t
            },
            formatResultCssClass: function() {
                return e
            },
            formatSelectionCssClass: function() {
                return e
            },
            formatNoMatches: function() {
                return "No matches found"
            },
            formatInputTooShort: function(t, e) {
                var i = e - t.length;
                return "Please enter " + i + " more character" + (1 == i ? "" : "s")
            },
            formatInputTooLong: function(t, e) {
                var i = t.length - e;
                return "Please delete " + i + " character" + (1 == i ? "" : "s")
            },
            formatSelectionTooBig: function(t) {
                return "You can only select " + t + " item" + (1 == t ? "" : "s")
            },
            formatLoadMore: function() {
                return "Loading more results..."
            },
            formatSearching: function() {
                return "Searching..."
            },
            minimumResultsForSearch: 0,
            minimumInputLength: 0,
            maximumInputLength: null,
            maximumSelectionSize: 0,
            id: function(t) {
                return t.id
            },
            matcher: function(t, e) {
                return i("" + e).toUpperCase().indexOf(i("" + t).toUpperCase()) >= 0
            },
            separator: ",",
            tokenSeparators: [],
            tokenizer: T,
            escapeMarkup: w,
            blurOnChange: !1,
            selectOnBlur: !1,
            adaptContainerCssClass: function(t) {
                return t
            },
            adaptDropdownCssClass: function() {
                return null
            },
            nextSearchTerm: function() {
                return e
            }
        }, t.fn.select2.ajaxDefaults = {
            transport: t.ajax,
            params: {
                type: "GET",
                cache: !1,
                dataType: "json"
            }
        }, window.Select2 = {
            query: {
                ajax: _,
                local: x,
                tags: k
            },
            util: {
                debounce: h,
                markMatch: b,
                escapeMarkup: w,
                stripDiacritics: i
            },
            "class": {
                "abstract": M,
                single: A,
                multi: I
            }
        }
    }
}(jQuery), ! function(t) {
    "use strict";
    var e = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, t.fn.typeahead.defaults, i), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.select = this.options.select || this.select, this.autoSelect = "boolean" == typeof this.options.autoSelect ? this.options.autoSelect : !0, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = t(this.options.menu), this.shown = !1, this.listen(), this.showHintOnFocus = "boolean" == typeof this.options.showHintOnFocus ? this.options.showHintOnFocus : !1
    };
    e.prototype = {
        constructor: e,
        select: function() {
            var t = this.$menu.find(".active").attr("data-value");
            return (this.autoSelect || t) && this.$element.val(this.updater(t)).change(), this.hide()
        },
        updater: function(t) {
            return t
        },
        setSource: function(t) {
            this.source = t
        },
        show: function() {
            var e, i = t.extend({}, this.$element.position(), {
                height: this.$element[0].offsetHeight
            });
            return e = "function" == typeof this.options.scrollHeight ? this.options.scrollHeight.call() : this.options.scrollHeight, this.$menu.insertAfter(this.$element).css({
                top: i.top + i.height + e,
                left: i.left
            }).show(), this.shown = !0, this
        },
        hide: function() {
            return this.$menu.hide(), this.shown = !1, this
        },
        lookup: function(e) {
            var i;
            return this.query = "undefined" != typeof e && null != e ? e : this.$element.val() || "", this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (i = t.isFunction(this.source) ? this.source(this.query, t.proxy(this.process, this)) : this.source, i ? this.process(i) : this)
        },
        process: function(e) {
            var i = this;
            return e = t.grep(e, function(t) {
                return i.matcher(t)
            }), e = this.sorter(e), e.length ? "all" == this.options.items || 0 == this.options.minLength && !this.$element.val() ? this.render(e).show() : this.render(e.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        },
        matcher: function(t) {
            return~ t.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function(t) {
            for (var e, i = [], n = [], s = []; e = t.shift();) e.toLowerCase().indexOf(this.query.toLowerCase()) ? ~e.indexOf(this.query) ? n.push(e) : s.push(e) : i.push(e);
            return i.concat(n, s)
        },
        highlighter: function(t) {
            var e = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return t.replace(new RegExp("(" + e + ")", "ig"), function(t, e) {
                return "<strong>" + e + "</strong>"
            })
        },
        render: function(e) {
            var i = this;
            return e = t(e).map(function(e, n) {
                return e = t(i.options.item).attr("data-value", n), e.find("a").html(i.highlighter(n)), e[0]
            }), this.autoSelect && e.first().addClass("active"), this.$menu.html(e), this
        },
        next: function() {
            var e = this.$menu.find(".active").removeClass("active"),
                i = e.next();
            i.length || (i = t(this.$menu.find("li")[0])), i.addClass("active")
        },
        prev: function() {
            var t = this.$menu.find(".active").removeClass("active"),
                e = t.prev();
            e.length || (e = this.$menu.find("li").last()), e.addClass("active")
        },
        listen: function() {
            this.$element.on("focus", t.proxy(this.focus, this)).on("blur", t.proxy(this.blur, this)).on("keypress", t.proxy(this.keypress, this)).on("keyup", t.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", t.proxy(this.keydown, this)), this.$menu.on("click", t.proxy(this.click, this)).on("mouseenter", "li", t.proxy(this.mouseenter, this)).on("mouseleave", "li", t.proxy(this.mouseleave, this))
        },
        destroy: function() {
            this.$element.data("typeahead", null), this.$element.off("focus").off("blur").off("keypress").off("keyup"), this.eventSupported("keydown") && this.$element.off("keydown"), this.$menu.remove()
        },
        eventSupported: function(t) {
            var e = t in this.$element;
            return e || (this.$element.setAttribute(t, "return;"), e = "function" == typeof this.$element[t]), e
        },
        move: function(t) {
            if (this.shown) {
                switch (t.keyCode) {
                    case 9:
                    case 13:
                    case 27:
                        t.preventDefault();
                        break;
                    case 38:
                        t.preventDefault(), this.prev();
                        break;
                    case 40:
                        t.preventDefault(), this.next()
                }
                t.stopPropagation()
            }
        },
        keydown: function(e) {
            this.suppressKeyPressRepeat = ~t.inArray(e.keyCode, [40, 38, 9, 13, 27]), this.shown || 40 != e.keyCode ? this.move(e) : this.lookup("")
        },
        keypress: function(t) {
            this.suppressKeyPressRepeat || this.move(t)
        },
        keyup: function(t) {
            switch (t.keyCode) {
                case 40:
                case 38:
                case 16:
                case 17:
                case 18:
                    break;
                case 9:
                case 13:
                    if (!this.shown) return;
                    this.select();
                    break;
                case 27:
                    if (!this.shown) return;
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            t.stopPropagation(), t.preventDefault()
        },
        focus: function() {
            this.focused || (this.focused = !0, (0 == this.options.minLength && !this.$element.val() || this.options.showHintOnFocus) && this.lookup())
        },
        blur: function() {
            this.focused = !1, !this.mousedover && this.shown && this.hide()
        },
        click: function(t) {
            t.stopPropagation(), t.preventDefault(), this.select(), this.$element.focus()
        },
        mouseenter: function(e) {
            this.mousedover = !0, this.$menu.find(".active").removeClass("active"), t(e.currentTarget).addClass("active")
        },
        mouseleave: function() {
            this.mousedover = !1, !this.focused && this.shown && this.hide()
        }
    };
    var i = t.fn.typeahead;
    t.fn.typeahead = function(i) {
        var n = arguments;
        return this.each(function() {
            var s = t(this),
                o = s.data("typeahead"),
                r = "object" == typeof i && i;
            o || s.data("typeahead", o = new e(this, r)), "string" == typeof i && (n.length > 1 ? o[i].apply(o, Array.prototype.slice.call(n, 1)) : o[i]())
        })
    }, t.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1,
        scrollHeight: 0,
        autoSelect: !0
    }, t.fn.typeahead.Constructor = e, t.fn.typeahead.noConflict = function() {
        return t.fn.typeahead = i, this
    }, t(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function() {
        var e = t(this);
        e.data("typeahead") || e.typeahead(e.data())
    })
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(e, i) {
        this.el = t(e), this.options = t.extend({}, t.fn.typed.defaults, i), this.text = this.el.text(), this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.string = this.strings[this.arrayPos], this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 1, this.stopArray = this.loop === !1 ? this.strings.length - 1 : this.strings.length, this.build()
    };
    e.prototype = {
        constructor: e,
        init: function() {
            var t = this;
            setTimeout(function() {
                t.typewrite(t.string, t.strPos)
            }, t.startDelay)
        },
        build: function() {
            this.el.after('<span class="typed-cursor">|</span>'), this.init()
        },
        typewrite: function(t, e) {
            var i = Math.round(70 * Math.random()) + this.typeSpeed,
                n = this;
            setTimeout(function() {
                if (n.arrayPos < n.strings.length) {
                    if ("^" === t.substr(e, 1)) {
                        var i = t.substr(e + 1).indexOf(" "),
                            s = t.substr(e + 1, i);
                        t = t.replace("^" + s, "")
                    } else var s = 0;
                    setTimeout(function() {
                        if (n.el.text(n.text + t.substr(0, e)), e > t.length && n.arrayPos < n.stopArray) {
                            clearTimeout(i);
                            var i = setTimeout(function() {
                                n.backspace(t, e)
                            }, n.backDelay)
                        } else if (e++, n.typewrite(t, e), n.loop === !1 && n.arrayPos === n.stopArray && e === t.length) {
                            var i = n.options.callback();
                            clearTimeout(i)
                        }
                    }, s)
                } else n.loop === !0 && n.loopCount === !1 ? (n.arrayPos = 0, n.init()) : n.loopCount !== !1 && n.curLoop < n.loopCount && (n.arrayPos = 0, n.curLoop = n.curLoop + 1, n.init())
            }, i)
        },
        backspace: function(t, e) {
            var i = Math.round(70 * Math.random()) + this.backSpeed,
                n = this;
            setTimeout(function() {
                if (n.el.text(n.text + t.substr(0, e)), e > n.stopNum) e--, n.backspace(t, e);
                else if (e <= n.stopNum) {
                    clearTimeout(i);
                    var i = n.arrayPos = n.arrayPos + 1;
                    n.typewrite(n.strings[n.arrayPos], e)
                }
            }, i)
        }
    }, t.fn.typed = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("typed"),
                o = "object" == typeof i && i;
            s || n.data("typed", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        callback: function() {}
    }
}(window.jQuery), window.url = function() {
    function t(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }
    return function(e, i) {
        var n = i || window.location.toString();
        if (!e) return n;
        e = e.toString(), "//" === n.substring(0, 2) ? n = "http:" + n : 1 === n.split("://").length && (n = "http://" + n), i = n.split("/");
        var s = {
                auth: ""
            },
            o = i[2].split("@");
        1 === o.length ? o = o[0].split(":") : (s.auth = o[0], o = o[1].split(":")), s.protocol = i[0], s.hostname = o[0], s.port = o[1] || ("https" === s.protocol.split(":")[0].toLowerCase() ? "443" : "80"), s.pathname = (i.length > 3 ? "/" : "") + i.slice(3, i.length).join("/").split("?")[0].split("#")[0];
        var r = s.pathname;
        "/" === r.charAt(r.length - 1) && (r = r.substring(0, r.length - 1));
        var a = s.hostname,
            l = a.split("."),
            c = r.split("/");
        if ("hostname" === e) return a;
        if ("domain" === e) return /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(a) ? a : l.slice(-2).join(".");
        if ("sub" === e) return l.slice(0, l.length - 2).join(".");
        if ("port" === e) return s.port;
        if ("protocol" === e) return s.protocol.split(":")[0];
        if ("auth" === e) return s.auth;
        if ("user" === e) return s.auth.split(":")[0];
        if ("pass" === e) return s.auth.split(":")[1] || "";
        if ("path" === e) return s.pathname;
        if ("." === e.charAt(0)) {
            if (e = e.substring(1), t(e)) return e = parseInt(e, 10), l[0 > e ? l.length + e : e - 1] || ""
        } else {
            if (t(e)) return e = parseInt(e, 10), c[0 > e ? c.length + e : e] || "";
            if ("file" === e) return c.slice(-1)[0];
            if ("filename" === e) return c.slice(-1)[0].split(".")[0];
            if ("fileext" === e) return c.slice(-1)[0].split(".")[1] || "";
            if ("?" === e.charAt(0) || "#" === e.charAt(0)) {
                var h = n,
                    u = null;
                if ("?" === e.charAt(0) ? h = (h.split("?")[1] || "").split("#")[0] : "#" === e.charAt(0) && (h = h.split("#")[1] || ""), !e.charAt(1)) return h;
                e = e.substring(1), h = h.split("&");
                for (var d = 0, p = h.length; p > d; d++)
                    if (u = h[d].split("="), u[0] === e) return u[1] || "";
                return null
            }
        }
        return ""
    }
}(), "undefined" != typeof jQuery && jQuery.extend({
    url: function(t, e) {
        return window.url(t, e)
    }
}), $(function() {
    $("[rel~=tooltip]").tooltip(), $("[data-toggle~=popover]").popover({
        container: "body"
    }), $("[data-behavior~=blank]").on("click", function(t) {
        t.preventDefault()
    }), $("[data-behavior~=back]").on("click", function(t) {
        history.go(-1), t.preventDefault()
    }), ! function(t, e, i) {
        var n, s = t.getElementsByTagName(e)[0],
            o = /^http:/.test(t.location) ? "http" : "https";
        t.getElementById(i) || (n = t.createElement(e), n.id = i, n.src = o + "://platform.twitter.com/widgets.js", s.parentNode.insertBefore(n, s))
    }(document, "script", "twitter-wjs")
}), $(document).on("page:change", function() {
    $("[rel~=tooltip]").tooltip()
});
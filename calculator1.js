var L = (e, t) => () => (e && (t = e(e = 0)), t);


function d(e, t) {
    if (e === null) throw new Error(t || "Specified value was null");
    return e
}

function g(e, t, r, l) {
    let s;
    Array.isArray(e) ? s = e : s = [e], document.querySelectorAll(t).forEach(function(u) {
        s.forEach(function(o) {
            u.addEventListener(o, function(h) {
                if (r === null) return l.call(u, h); {
                    let I = h.target;
                    for (; I instanceof HTMLElement;) {
                        if (I.matches(r)) return l.call(I, h);
                        if (I === u) return;
                        I = I.parentElement
                    }
                }
            }, !0)
        })
    })
}


var vo, To = L(() => {
    "use strict";
    vo = function() {
        "use strict";

        function e(s, u) {
            function o() {
                this.constructor = s
            }
            o.prototype = u.prototype, s.prototype = new o
        }

        function t(s, u, o, h) {
            this.message = s, this.expected = u, this.found = o, this.location = h, this.name = "SyntaxError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, t)
        }
        e(t, Error), t.buildMessage = function(s, u) {
            var o = {
                literal: function(v) {
                    return '"' + I(v.text) + '"'
                },
                class: function(v) {
                    var x = "",
                        b;
                    for (b = 0; b < v.parts.length; b++) x += v.parts[b] instanceof Array ? C(v.parts[b][0]) + "-" + C(v.parts[b][1]) : C(v.parts[b]);
                    return "[" + (v.inverted ? "^" : "") + x + "]"
                },
                any: function(v) {
                    return "any character"
                },
                end: function(v) {
                    return "end of input"
                },
                other: function(v) {
                    return v.description
                }
            };

            function h(v) {
                return v.charCodeAt(0).toString(16).toUpperCase()
            }

            function I(v) {
                return v.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(x) {
                    return "\\x0" + h(x)
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(x) {
                    return "\\x" + h(x)
                })
            }

            function C(v) {
                return v.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(x) {
                    return "\\x0" + h(x)
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(x) {
                    return "\\x" + h(x)
                })
            }

            function P(v) {
                return o[v.type](v)
            }

            function y(v) {
                var x = new Array(v.length),
                    b, K;
                for (b = 0; b < v.length; b++) x[b] = P(v[b]);
                if (x.sort(), x.length > 0) {
                    for (b = 1, K = 1; b < x.length; b++) x[b - 1] !== x[b] && (x[K] = x[b], K++);
                    x.length = K
                }
                switch (x.length) {
                    case 1:
                        return x[0];
                    case 2:
                        return x[0] + " or " + x[1];
                    default:
                        return x.slice(0, -1).join(", ") + ", or " + x[x.length - 1]
                }
            }

            function H(v) {
                return v ? '"' + I(v) + '"' : "end of input"
            }
            return "Expected " + y(s) + " but " + H(u) + " found."
        };

        function r(s) {
            var u = 8,
                o = 14,
                h = .01,
                I;
            return Math.abs(s) < h ? I = u : I = o, parseFloat(s.toPrecision(I))
        }

        function l(s, u) {
            u = u !== void 0 ? u : {};
            var o = {},
                h = {
                    start: an
                },
                I = an,
                C = /^[+\-]/,
                P = xe(["+", "-"], !1, !1),
                y = function(n, i) {
                    var c = n,
                        f;
                    if (isNaN(c) || !isFinite(c)) return c;
                    for (f = 0; f < i.length; ++f) {
                        var m = i[f][1];
                        if (isNaN(m) || !isFinite(m)) return m;
                        i[f][0] == "+" ? c = c + m : i[f][0] == "-" && (c = c - m), f < i.length - 1 && (c = r(c))
                    }
                    return parseFloat(c)
                },
                H = /^[\xD7\xF7*\/]/,
                v = xe(["\xD7", "\xF7", "*", "/"], !1, !1),
                x = function(n, i) {
                    var c = n,
                        f;
                    if (isNaN(c) || !isFinite(c)) return c;
                    for (f = 0; f < i.length; ++f) {
                        var m = i[f][1];
                        if (isNaN(m) || !isFinite(m)) return m;
                        i[f][0] == "\xD7" || i[f][0] == "*" ? c = c * m : i[f][0] == "\xF7" || i[f][0] == "/" ? c = c / m : c = c * i[f][0], f < i.length - 1 && (c = r(c))
                    }
                    return parseFloat(c)
                },
                b = /^[\-]/,
                K = xe(["-"], !1, !1),
                Io = function(n, i) {
                    var c = i;
                    return n && (c = -c), c
                },
                Gt = "log(",
                bo = O("log(", !1),
                V = ")",
                U = O(")", !1),
                So = function(n) {
                    return Math.log(n) / Math.LN10
                },
                Wt = "ln(",
                Mo = O("ln(", !1),
                No = function(n) {
                    return Math.log(n)
                },
                Co = "\u221A",
                Ho = O("\u221A", !1),
                Ro = function(n) {
                    return Math.sqrt(n)
                },
                Oo = "^",
                qo = O("^", !1),
                $o = function(n, i) {
                    return Math.pow(n, i)
                },
                jt = "sin(",
                Fo = O("sin(", !1),
                Po = function(n) {
                    return Math.sin(n * (Math.PI / 180))
                },
                Yt = "cos(",
                ko = O("cos(", !1),
                Do = function(n) {
                    return n == 90 ? 0 : Math.cos(n * (Math.PI / 180))
                },
                Kt = "tan(",
                _o = O("tan(", !1),
                Bo = function(n) {
                    return n == 90 ? Number.NaN : Math.tan(n * (Math.PI / 180))
                },
                Xt = "asin(",
                Vo = O("asin(", !1),
                Uo = function(n) {
                    return Math.asin(n) / (Math.PI / 180)
                },
                zt = "acos(",
                Go = O("acos(", !1),
                Wo = function(n) {
                    return Math.acos(n) / (Math.PI / 180)
                },
                Jt = "atan(",
                jo = O("atan(", !1),
                Yo = function(n) {
                    return Math.atan(n) / (Math.PI / 180)
                },
                Ko = "!",
                Xo = O("!", !1),
                zo = function(n) {
                    var i = Number.NaN;
                    if (parseInt(n) === n && n >= 0) {
                        i = 1;
                        for (var c = 2; c <= n; c++) i *= c
                    }
                    return i
                },
                Jo = "(",
                Qo = O("(", !1),
                Zo = function(n) {
                    return n
                },
                Qt = "\u03C0",
                Zt = O("\u03C0", !1),
                er = function(n) {
                    return n * Math.PI
                },
                tr = function() {
                    return Math.PI
                },
                en = "e",
                tn = O("e", !1),
                nr = function(n) {
                    return n * Math.E
                },
                or = function() {
                    return Math.E
                },
                se = /^[0-9]/,
                ae = xe([
                    ["0", "9"]
                ], !1, !1),
                nn = /^[.]/,
                on = xe(["."], !1, !1),
                rr = function(n, i) {
                    var c;
                    return i ? c = parseFloat(n.join("") + "." + i[1].join("")) : c = parseInt(n.join("")), c
                },
                ir = function(n) {
                    return parseFloat("0." + n[1].join(""))
                },
                a = 0,
                A = 0,
                qe = [{
                    line: 1,
                    column: 1
                }],
                D = 0,
                dt = [],
                T = 0,
                $e;
            if ("startRule" in u) {
                if (!(u.startRule in h)) throw new Error(`Can't start parsing from rule "` + u.startRule + '".');
                I = h[u.startRule]
            }

            function Ti() {
                return s.substring(A, a)
            }

            function xi() {
                return ye(A, a)
            }

            function yi(n, i) {
                throw i = i !== void 0 ? i : ye(A, a), sn([ar(n)], s.substring(A, a), i)
            }

            function wi(n, i) {
                throw i = i !== void 0 ? i : ye(A, a), lr(n, i)
            }

            function O(n, i) {
                return {
                    type: "literal",
                    text: n,
                    ignoreCase: i
                }
            }

            function xe(n, i, c) {
                return {
                    type: "class",
                    parts: n,
                    inverted: i,
                    ignoreCase: c
                }
            }

            function Li() {
                return {
                    type: "any"
                }
            }

            function sr() {
                return {
                    type: "end"
                }
            }

            function ar(n) {
                return {
                    type: "other",
                    description: n
                }
            }

            function rn(n) {
                var i = qe[n],
                    c;
                if (i) return i;
                for (c = n - 1; !qe[c];) c--;
                for (i = qe[c], i = {
                        line: i.line,
                        column: i.column
                    }; c < n;) s.charCodeAt(c) === 10 ? (i.line++, i.column = 1) : i.column++, c++;
                return qe[n] = i, i
            }

            function ye(n, i) {
                var c = rn(n),
                    f = rn(i);
                return {
                    start: {
                        offset: n,
                        line: c.line,
                        column: c.column
                    },
                    end: {
                        offset: i,
                        line: f.line,
                        column: f.column
                    }
                }
            }

            function E(n) {
                a < D || (a > D && (D = a, dt = []), dt.push(n))
            }

            function lr(n, i) {
                return new t(n, null, null, i)
            }

            function sn(n, i, c) {
                return new t(t.buildMessage(n, i), n, i, c)
            }

            function an() {
                var n;
                return n = _(), n
            }

            function _() {
                var n, i, c, f, m, M;
                if (n = a, i = mt(), i !== o) {
                    for (c = [], f = a, C.test(s.charAt(a)) ? (m = s.charAt(a), a++) : (m = o, T === 0 && E(P)), m !== o ? (M = mt(), M !== o ? (m = [m, M], f = m) : (a = f, f = o)) : (a = f, f = o); f !== o;) c.push(f), f = a, C.test(s.charAt(a)) ? (m = s.charAt(a), a++) : (m = o, T === 0 && E(P)), m !== o ? (M = mt(), M !== o ? (m = [m, M], f = m) : (a = f, f = o)) : (a = f, f = o);
                    c !== o ? (A = n, i = y(i, c), n = i) : (a = n, n = o)
                } else a = n, n = o;
                return n
            }

            function mt() {
                var n, i, c, f, m, M;
                if (n = a, i = we(), i !== o) {
                    for (c = [], f = a, H.test(s.charAt(a)) ? (m = s.charAt(a), a++) : (m = o, T === 0 && E(v)), m !== o ? (M = we(), M !== o ? (m = [m, M], f = m) : (a = f, f = o)) : (a = f, f = o), f === o && (f = ke(), f === o && (f = Fe(), f === o && (f = Pe()))); f !== o;) c.push(f), f = a, H.test(s.charAt(a)) ? (m = s.charAt(a), a++) : (m = o, T === 0 && E(v)), m !== o ? (M = we(), M !== o ? (m = [m, M], f = m) : (a = f, f = o)) : (a = f, f = o), f === o && (f = ke(), f === o && (f = Fe(), f === o && (f = Pe())));
                    c !== o ? (A = n, i = x(i, c), n = i) : (a = n, n = o)
                } else a = n, n = o;
                return n
            }

            function we() {
                var n, i, c;
                return n = a, b.test(s.charAt(a)) ? (i = s.charAt(a), a++) : (i = o, T === 0 && E(K)), i === o && (i = null), i !== o ? (c = cr(), c !== o ? (A = n, i = Io(i, c), n = i) : (a = n, n = o)) : (a = n, n = o), n
            }

            function cr() {
                var n;
                return n = Fe(), n === o && (n = dr(), n === o && (n = ke(), n === o && (n = ln(), n === o && (n = cn(), n === o && (n = un(), n === o && (n = Le())))))), n
            }

            function Fe() {
                var n;
                return n = ur(), n === o && (n = fr()), n
            }

            function ur() {
                var n, i, c, f;
                return n = a, s.substr(a, 4) === Gt ? (i = Gt, a += 4) : (i = o, T === 0 && E(bo)), i !== o ? (c = _(), c !== o ? (s.charCodeAt(a) === 41 ? (f = V, a++) : (f = o, T === 0 && E(U)), f !== o ? (A = n, i = So(c), n = i) : (a = n, n = o)) : (a = n, n = o)) : (a = n, n = o), n
            }

            function fr() {
                var n, i, c, f;
                return n = a, s.substr(a, 3) === Wt ? (i = Wt, a += 3) : (i = o, T === 0 && E(Mo)), i !== o ? (c = _(), c !== o ? (s.charCodeAt(a) === 41 ? (f = V, a++) : (f = o, T === 0 && E(U)), f !== o ? (A = n, i = No(c), n = i) : (a = n, n = o)) : (a = n, n = o)) : (a = n, n = o), n
            }

            function dr() {
                var n;
                return n = Pe(), n === o && (n = pr()), n
            }

            function mr() {
                var n;
                return n = Fe(), n === o && (n = Pe(), n === o && (n = ke(), n === o && (n = ln(), n === o && (n = cn(), n === o && (n = un(), n === o && (n = Le())))))), n
            }

            function Pe() {
                var n, i, c;
                return n = a, s.charCodeAt(a) === 8730 ? (i = Co, a++) : (i = o, T === 0 && E(Ho)), i !== o ? (c = we(), c !== o ? (A = n, i = Ro(c), n = i) : (a = n, n = o)) : (a = n, n = o), n
            }

            function pr() {
                var n, i, c, f;
                return n = a, i = mr(), i !== o ? (s.charCodeAt(a) === 94 ? (c = Oo, a++) : (c = o, T === 0 && E(qo)), c !== o ? (f = we(), f !== o ? (A = n, i = $o(i, f), n = i) : (a = n, n = o)) : (a = n, n = o)) : (a = n, n = o), n
            }

            function ke() {
                var n;
                return n = gr(), n === o && (n = hr(), n === o && (n = Er(), n === o && (n = vr(), n === o && (n = Tr(), n === o && (n = xr()))))), n
            }

            function gr() {
                var n, i, c, f;
                return n = a, s.substr(a, 4) === jt ? (i = jt, a += 4) : (i = o, T === 0 && E(Fo)), i !== o ? (c = _(), c !== o ? (s.charCodeAt(a) === 41 ? (f = V, a++) : (f = o, T === 0 && E(U)), f !== o ? (A = n, i = Po(c), n = i) : (a = n, n = o)) : (a = n, n = o)) : (a = n, n = o), n
            }

            function hr() {
                var n, i, c, f;
                return n = a, s.substr(a, 4) === Yt ? (i = Yt, a += 4) : (i = o, T === 0 && E(ko)), i !== o ? (c = _(), c !== o ? (s.charCodeAt(a) === 41 ? (f = V, a++) : (f = o, T === 0 && E(U)), f !== o ? (A = n, i = Do(c), n = i) : (a = n, n = o)) : (a = n, n = o)) : (a = n, n = o), n
            }

            function Er() {
                var n, i, c, f;
                return n = a, s.substr(a, 4) === Kt ? (i = Kt, a += 4) : (i = o, T === 0 && E(_o)), i !== o ? (c = _(), c !== o ? (s.charCodeAt(a) === 41 ? (f = V, a++) : (f = o, T === 0 && E(U)), f !== o ? (A = n, i = Bo(c), n = i) : (a = n, n = o)) : (a = n, n = o)) : (a = n, n = o), n
            }

            function vr() {
                var n, i, c, f;
                return n = a, s.substr(a, 5) === Xt ? (i = Xt, a += 5) : (i = o, T === 0 && E(Vo)), i !== o ? (c = _(), c !== o ? (s.charCodeAt(a) === 41 ? (f = V, a++) : (f = o, T === 0 && E(U)), f !== o ? (A = n, i = Uo(c), n = i) : (a = n, n = o)) : (a = n, n = o)) : (a = n, n = o), n
            }

            function Tr() {
                var n, i, c, f;
                return n = a, s.substr(a, 5) === zt ? (i = zt, a += 5) : (i = o, T === 0 && E(Go)), i !== o ? (c = _(), c !== o ? (s.charCodeAt(a) === 41 ? (f = V, a++) : (f = o, T === 0 && E(U)), f !== o ? (A = n, i = Wo(c), n = i) : (a = n, n = o)) : (a = n, n = o)) : (a = n, n = o), n
            }

            function xr() {
                var n, i, c, f;
                return n = a, s.substr(a, 5) === Jt ? (i = Jt, a += 5) : (i = o, T === 0 && E(jo)), i !== o ? (c = _(), c !== o ? (s.charCodeAt(a) === 41 ? (f = V, a++) : (f = o, T === 0 && E(U)), f !== o ? (A = n, i = Yo(c), n = i) : (a = n, n = o)) : (a = n, n = o)) : (a = n, n = o), n
            }

            function ln() {
                var n, i, c;
                return n = a, i = Le(), i !== o ? (s.charCodeAt(a) === 33 ? (c = Ko, a++) : (c = o, T === 0 && E(Xo)), c !== o ? (A = n, i = zo(i), n = i) : (a = n, n = o)) : (a = n, n = o), n
            }

            function Le() {
                var n, i, c, f;
                return n = yr(), n === o && (n = wr(), n === o && (n = Lr(), n === o && (n = a, s.charCodeAt(a) === 40 ? (i = Jo, a++) : (i = o, T === 0 && E(Qo)), i !== o ? (c = _(), c !== o ? (s.charCodeAt(a) === 41 ? (f = V, a++) : (f = o, T === 0 && E(U)), f !== o ? (A = n, i = Zo(c), n = i) : (a = n, n = o)) : (a = n, n = o)) : (a = n, n = o)))), n
            }

            function cn() {
                var n, i, c;
                return n = a, i = Le(), i !== o ? (s.charCodeAt(a) === 960 ? (c = Qt, a++) : (c = o, T === 0 && E(Zt)), c !== o ? (A = n, i = er(i), n = i) : (a = n, n = o)) : (a = n, n = o), n
            }

            function yr() {
                var n, i;
                return n = a, s.charCodeAt(a) === 960 ? (i = Qt, a++) : (i = o, T === 0 && E(Zt)), i !== o && (A = n, i = tr()), n = i, n
            }

            function un() {
                var n, i, c;
                return n = a, i = Le(), i !== o ? (s.charCodeAt(a) === 101 ? (c = en, a++) : (c = o, T === 0 && E(tn)), c !== o ? (A = n, i = nr(i), n = i) : (a = n, n = o)) : (a = n, n = o), n
            }

            function wr() {
                var n, i;
                return n = a, s.charCodeAt(a) === 101 ? (i = en, a++) : (i = o, T === 0 && E(tn)), i !== o && (A = n, i = or()), n = i, n
            }

            function Lr() {
                var n, i, c, f, m, M;
                if (n = a, i = [], se.test(s.charAt(a)) ? (c = s.charAt(a), a++) : (c = o, T === 0 && E(ae)), c !== o)
                    for (; c !== o;) i.push(c), se.test(s.charAt(a)) ? (c = s.charAt(a), a++) : (c = o, T === 0 && E(ae));
                else i = o;
                if (i !== o) {
                    if (c = a, nn.test(s.charAt(a)) ? (f = s.charAt(a), a++) : (f = o, T === 0 && E(on)), f !== o) {
                        if (m = [], se.test(s.charAt(a)) ? (M = s.charAt(a), a++) : (M = o, T === 0 && E(ae)), M !== o)
                            for (; M !== o;) m.push(M), se.test(s.charAt(a)) ? (M = s.charAt(a), a++) : (M = o, T === 0 && E(ae));
                        else m = o;
                        m !== o ? (f = [f, m], c = f) : (a = c, c = o)
                    } else a = c, c = o;
                    c === o && (c = null), c !== o ? (A = n, i = rr(i, c), n = i) : (a = n, n = o)
                } else a = n, n = o;
                if (n === o) {
                    if (n = a, i = a, nn.test(s.charAt(a)) ? (c = s.charAt(a), a++) : (c = o, T === 0 && E(on)), c !== o) {
                        if (f = [], se.test(s.charAt(a)) ? (m = s.charAt(a), a++) : (m = o, T === 0 && E(ae)), m !== o)
                            for (; m !== o;) f.push(m), se.test(s.charAt(a)) ? (m = s.charAt(a), a++) : (m = o, T === 0 && E(ae));
                        else f = o;
                        f !== o ? (c = [c, f], i = c) : (a = i, i = o)
                    } else a = i, i = o;
                    i !== o && (A = n, i = ir(i)), n = i
                }
                return n
            }
            if ($e = I(), $e !== o && a === s.length) return $e;
            throw $e !== o && a < s.length && E(sr()), sn(dt, D < s.length ? s.charAt(D) : null, D < s.length ? ye(D, D + 1) : ye(D, D))
        }
        return {
            SyntaxError: t,
            parse: l
        }
    }()
});

function Te() {
    return d(document.getElementById("expression"))
}

function Bt(e, t) {
    let r;
    Math.abs(e) < hi ? r = pi : r = gi;
    let l = parseFloat(e.toPrecision(r)),
        s = l.toString().match(/([^e]*)e([+-])(\d+)$/),
        u = l.toString();
    if (s !== null) {
        let o = parseFloat(p(s[1])),
            h = parseInt(p(s[2]) + p(s[3]));
        u = o + "\xD710^" + h, t && (u = "(" + u + ")")
    }
    return u
}

function Ut() {
    let e = Te().value;
    return e = e.replace(/\s/g, ""), e = e.replace(/–/g, "-"), e = e.replace(/ANS/g, "(" + xo + ")"), vo.parse(e)
}

function Vt() {
    let e = !1;
    if (Te().value) try {
        let r = Ut();
        isNaN(r) || (e = !0)
    } catch (r) {
        e = !1
    }
    let t = d(document.getElementById("m_in"));
    e ? t.classList.add(Y) : t.classList.remove(Y)
}

function ft(e, t) {
    let r = Te(),
        l = r.value;
    if (e) {
        let s = 0;
        for (let u = 0; u < l.length && (l[u] === "(" ? s++ : l[u] === ")" && s--, !(s < 0)); u++);
        s > 0 && (l += ")".repeat(s))
    }
    l = l.replace(/([0-9)eπS])([Asctlaeπ(√])/g, "$1\xD7$2"), l = l.replace(/\*/g, "\xD7"), l = l.replace(/-/g, "\u2013"), l = l.replace(/\//g, "\xF7"), l = l.replace(/,/g, "."), l = l.replace(/[^0-9sincotalgeπ().+–×÷√^ANS]/g, ""), r.value = l, r.selectionStart = l.length - t, r.selectionEnd = r.selectionStart, r.focus(), Vt()
}

function yo() {
    ft(!0, 0);
    let e = Number.NaN;
    try {
        e = Ut(), xo = Bt(e, !0)
    } catch (l) {}
    let t = d(document.getElementById("ans")),
        r = d(document.getElementById("result"));
    isNaN(e) ? (t.classList.remove(Y), r.value = r.dataset.syntaxErrorMessage || "") : (t.classList.add(Y), r.value = Bt(e, !1).toString())
}

function _t(e) {
    e = e.toString();
    let t = Te(),
        r = t.selectionStart || 0,
        l = t.value;
    t.value = [l.slice(0, r), e, l.slice(r)].join("");
    let s = t.value.length - r - e.length;
    ft(!1, s)
}

var pi, gi, hi, Y, ut, xo, wo = L(() => {
    "use strict";
    To();

    pi = 7, gi = 12, hi = .01, Y = "available", ut = null, xo = null;
    
    g("click", "#calc button.key", null, function() {
        if (this.classList.contains("input")) {
            let e = this.dataset.expression || d(this.textContent);
            this.dataset.suffix && (e += this.dataset.suffix), _t(e)
        } else if (this.id === "m_in") {
            if (this.classList.contains(Y)) {
                let e = d(document.getElementById("m_out"));
                try {
                    ut = Bt(Ut(), !0), e.classList.add(Y)
                } catch (t) {
                    ut = null, e.classList.remove(Y), Vt()
                }
            }
        } else if (this.id === "m_out") this.classList.contains(Y) && ut && _t(ut);
        else if (this.id === "ans") this.classList.contains(Y) && _t("ANS");
        else if (this.id === "delete") {
            let e = Te(),
                t = e.value;
            e.value = t.substr(0, t.length - 1), ft(!1, 0)
        } else if (this.id === "clearall") {
            let e = Te();
            if (e.value === "") {
                let t = d(document.getElementById("result"));
                t.value = ""
            } else e.value = "";
            Vt()
        } else this.id === "equals" && yo()
    });

    g("keyup", "#calc", "input#expression", function(e) {
        let t = this.value.length - (this.selectionStart || 0);
        e.which === 13 || e.keyCode === 13 ? yo() : ft(!1, t)
    });
/*
    g("click", "#calcwrapper", "div.calctab", function() {
        let e = d(document.getElementById("calcwrapper"));
        e.classList.contains("opened") ? (e.classList.add("closed"), e.classList.remove("opened")) : (e.classList.add("opened"), e.classList.remove("closed"))
    })
    */
});

var Lo = L(() => {
    wo();
});


Promise.resolve().then(() => Lo());
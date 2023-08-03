!function() {
    function e(e, t, r, n, o, a, i) {
        try {
            var c = e[a](i), s = c.value;
        } catch (e) {
            r(e);
            return;
        }
        c.done ? t(s) : Promise.resolve(s).then(n, o);
    }
    function t(t) {
        return function() {
            var r = this, n = arguments;
            return new Promise(function(o, a) {
                var i = t.apply(r, n);
                function c(t) {
                    e(i, o, a, c, s, "next", t);
                }
                function s(t) {
                    e(i, o, a, c, s, "throw", t);
                }
                c(void 0);
            });
        };
    }
    function r(e, t) {
        var r, n, o, a, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1];
            },
            trys: [],
            ops: []
        };
        return a = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this;
        }), a;
        function c(c) {
            return function(s) {
                return function(c) {
                    if (r) throw TypeError("Generator is already executing.");
                    for(; a && (a = 0, c[0] && (i = 0)), i;)try {
                        if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                        switch(n = 0, o && (c = [
                            2 & c[0],
                            o.value
                        ]), c[0]){
                            case 0:
                            case 1:
                                o = c;
                                break;
                            case 4:
                                return i.label++, {
                                    value: c[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = c[1], c = [
                                    0
                                ];
                                continue;
                            case 7:
                                c = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                    i = 0;
                                    continue;
                                }
                                if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                    i.label = c[1];
                                    break;
                                }
                                if (6 === c[0] && i.label < o[1]) {
                                    i.label = o[1], o = c;
                                    break;
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(c);
                                    break;
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue;
                        }
                        c = t.call(e, i);
                    } catch (e) {
                        c = [
                            6,
                            e
                        ], n = 0;
                    } finally{
                        r = o = 0;
                    }
                    if (5 & c[0]) throw c[1];
                    return {
                        value: c[0] ? c[1] : void 0,
                        done: !0
                    };
                }([
                    c,
                    s
                ]);
            };
        }
    }
    function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for(var r = 0, n = Array(t); r < t; r++)n[r] = e[r];
        return n;
    }
    function o(e, t) {
        if (e) {
            if ("string" == typeof e) return n(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, t);
        }
    }
    "function" == typeof SuppressedError && SuppressedError;
    var a, i, c, s, l, u, d, f, y = document.body.querySelector(".loading-container");
    function v(e, t, r, n) {
        var o;
        "enter" === (t = t.toLowerCase()) ? void 0 === r ? function(e) {
            var t = e[0].parentNode;
            t.classList.add("row-rejection");
            var r = !0, n = !1, o = void 0;
            try {
                for(var a, i = e[Symbol.iterator](); !(r = (a = i.next()).done); r = !0)a.value.classList.add("cell-rejection");
            } catch (e) {
                n = !0, o = e;
            } finally{
                try {
                    r || null == i.return || i.return();
                } finally{
                    if (n) throw o;
                }
            }
            setTimeout(function() {
                t.classList.remove("row-rejection");
                var r = !0, n = !1, o = void 0;
                try {
                    for(var a, i = e[Symbol.iterator](); !(r = (a = i.next()).done); r = !0)a.value.classList.remove("cell-rejection");
                } catch (e) {
                    n = !0, o = e;
                } finally{
                    try {
                        r || null == i.return || i.return();
                    } finally{
                        if (n) throw o;
                    }
                }
            }, 1e3);
        }(e) : function(e, t, r) {
            for(var n = 0; n < t.length; n++)!function(n) {
                var o = e[n], a = void 0, i = !0, c = !1, s = void 0;
                try {
                    for(var l, u = r[Symbol.iterator](); !(i = (l = u.next()).done); i = !0){
                        var d = l.value;
                        d.innerText.toLowerCase() === o.innerText.toLowerCase() && (a = d);
                    }
                } catch (e) {
                    c = !0, s = e;
                } finally{
                    try {
                        i || null == u.return || u.return();
                    } finally{
                        if (c) throw s;
                    }
                }
                var f = t[n], y = document.querySelector(".switch__checkbox").getAttribute("data-theme");
                o.classList.add("game-board-validation"), a.classList.add("keyboard-validation"), o.style.animationDelay = "".concat(.15 * n, "s"), a.style.animationDelay = "".concat(.15 * n, "s"), setTimeout(function() {
                    !0 === f ? (o.classList.add("game-board__letter--correct"), a.classList.add("keyboard__letter--correct"), "dark" === y && (o.classList.add("game-board__letter--correct-dark"), a.classList.add("keyboard__letter--correct-dark"))) : "close" === f ? (o.classList.add("game-board__letter--close"), a.classList.add("keyboard__letter--close"), "dark" === y && (o.classList.add("game-board__letter--close-dark"), a.classList.add("keyboard__letter--close-dark"))) : (o.classList.add("game-board__letter--missing"), a.classList.add("keyboard__letter--missing"), "dark" === y && (o.classList.add("game-board__letter--missing-dark"), a.classList.add("keyboard__letter--missing-dark")));
                }, 500 + 150 * n), setTimeout(function() {
                    a.classList.remove("keyboard-validation"), a.style.removeProperty("animation-delay");
                }, 1e3 + 150 * n);
            }(n);
        }(e, r, n) : "backspace" === t ? ((o = e.querySelector(".letter-text")).classList.add("letter-removing"), setTimeout(function() {
            return o.innerText = "";
        }, 200), setTimeout(function() {
            return o.classList.remove("letter-removing");
        }, 200)) : function(e) {
            var t = !0, r = !1, n = void 0;
            try {
                for(var o, a, i = e[Symbol.iterator](); !(t = (a = i.next()).done); t = !0){
                    var c = a.value;
                    "" !== c.innerText && (o = c);
                }
            } catch (e) {
                r = !0, n = e;
            } finally{
                try {
                    t || null == i.return || i.return();
                } finally{
                    if (r) throw n;
                }
            }
            var s = o.querySelector(".letter-text");
            s.classList.add("letter-adding"), setTimeout(function() {
                return s.classList.remove("letter-adding");
            }, 200);
        }(e);
    }
    function h(e, t) {
        var r = t.toLowerCase();
        if ("backspace" === r) (i = document.querySelector(".backspace-button")).classList.add("backspace-typing");
        else if ("enter" === r) (i = document.querySelector(".enter-button")).classList.add("enter-typing");
        else {
            var n = !0, o = !1, a = void 0;
            try {
                for(var i, c, s = e[Symbol.iterator](); !(n = (c = s.next()).done); n = !0){
                    var l = c.value;
                    if (l.innerHTML.toLowerCase() === r) {
                        i = l;
                        break;
                    }
                }
            } catch (e) {
                o = !0, a = e;
            } finally{
                try {
                    n || null == s.return || s.return();
                } finally{
                    if (o) throw a;
                }
            }
            i.classList.add("letter-typing");
        }
        if (void 0 === i) {
            m();
            return;
        }
    }
    var m = function() {
        console.log("Know what the button said to the clicker? \n~crying in sadness~ \nit just feels like, you're always pushing me away \uD83D\uDE22");
    };
    function b(e) {
        e.classList.add("dialog-entry");
    }
    function g(e) {
        e.classList.remove("dialog-entry"), e.classList.add("dialog-exit"), setTimeout(function() {
            e.classList.remove("dialog-exit");
        }, 500);
    }
    function p(e, t) {
        return "backspace" === (t = t.toLowerCase()) ? function(e) {
            for(var t = e.length - 1; t >= 0; t--)if ("" !== e[t].innerText) {
                v(e[t], "backspace");
                break;
            }
            return !0;
        }(e) : "enter" === t || (w(t) ? function(e, t) {
            var r = !0, n = !1, o = void 0;
            try {
                for(var a, i, c = e[Symbol.iterator](); !(r = (i = c.next()).done); r = !0){
                    var s = i.value;
                    if ("" === s.innerText) {
                        a = s;
                        break;
                    }
                }
            } catch (e) {
                n = !0, o = e;
            } finally{
                try {
                    r || null == c.return || c.return();
                } finally{
                    if (n) throw o;
                }
            }
            return void 0 !== a && (a.childNodes[0].innerText = t.toUpperCase(), !0);
        }(e, t) : void 0);
    }
    var w = function(e) {
        return /^[a-zA-Z]$/.test(e);
    }, k = document.querySelector(".settings-dialog"), L = document.querySelector(".how-to-play-dialog"), S = document.querySelector(".theme-switch").querySelector(".switch__checkbox"), _ = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", E = !0, T = [
        "feedback-message",
        "header__title",
        "keyboard",
        "theme-switch"
    ], x = [
        [
            "game-board__letter--missing",
            "game-board__letter--close",
            "game-board__letter--correct",
            "keyboard__letter--missing",
            "keyboard__letter--close",
            "keyboard__letter--correct",
            "fake-letter--missing",
            "fake-letter--close",
            "fake-letter--correct"
        ],
        [
            "game-board__letter",
            "keyboard__letter",
            "row-separator",
            "fake-letter",
            "subheader-text",
            "how-to-play__headings",
            "how-to-play__list",
            "loading-container",
            "loading-spinner"
        ]
    ], q = document.body.querySelectorAll(".light-theme__svg"), C = document.body.querySelectorAll(".dark-theme__svg");
    function A(e) {
        "settings" === e ? (b(k), k.showModal(), k.focus()) : "howToPlay" === e && (b(L), L.showModal(), L.focus()), $(), document.addEventListener("keydown", l = function(t) {
            "Escape" === t.key && (t.preventDefault(), D(e));
        }), document.addEventListener("click", u = function(t) {
            t.target instanceof HTMLDialogElement && D(e);
        });
    }
    function D(e) {
        if ("settings" === e) {
            var t = document.body.querySelector(".settings-btn");
            g(k), setTimeout(function() {
                k.close(), t.blur();
            }, 450);
        } else if ("howToPlay" === e) {
            var r = document.body.querySelector(".how-to-play-btn");
            g(L), setTimeout(function() {
                L.close(), r.blur();
            }, 450);
        }
        document.removeEventListener("keydown", l), document.removeEventListener("click", u), W();
    }
    function I() {
        var e, t, r = S.getAttribute("data-theme"), n = (e = [], T.forEach(function(t) {
            var r = document.body.querySelector(".".concat(t));
            e.push(r);
        }), e), o = (t = [], x.forEach(function(e) {
            e.forEach(function(e) {
                var r = document.body.querySelectorAll(".".concat(e));
                t.push(r);
            });
        }), t);
        "light" === r || !0 === E ? (S.setAttribute("data-theme", "dark"), P(q, C, "dark"), document.body.classList.add("body--dark"), document.body.querySelector("header").classList.add("header--dark"), document.body.querySelectorAll("dialog").forEach(function(e) {
            e.classList.add("dialog--dark");
        }), n.length > 0 && R(n, "add"), o.length > 0 && M(o, "add")) : (S.setAttribute("data-theme", "light"), P(q, C, "light"), document.body.classList.remove("body--dark"), document.body.querySelector("header").classList.remove("header--dark"), document.body.querySelectorAll("dialog").forEach(function(e) {
            e.classList.remove("dialog--dark");
        }), n.length > 0 && R(n, "remove"), o.length > 0 && M(o, "remove"));
    }
    function R(e, t) {
        e.forEach(function(e) {
            var r = !0, n = !1, o = void 0;
            try {
                for(var a, i = e.classList[Symbol.iterator](); !(r = (a = i.next()).done); r = !0){
                    var c = a.value;
                    T.includes(c) && ("add" === t ? e.classList.add("".concat(c, "--dark")) : "remove" === t && e.classList.remove("".concat(c, "--dark")));
                }
            } catch (e) {
                n = !0, o = e;
            } finally{
                try {
                    r || null == i.return || i.return();
                } finally{
                    if (n) throw o;
                }
            }
        });
    }
    function M(e, t) {
        e.forEach(function(e) {
            e.length > 0 && e.forEach(function(e) {
                var r = !0, n = !1, o = void 0;
                try {
                    for(var a, i = e.classList[Symbol.iterator](); !(r = (a = i.next()).done); r = !0){
                        var c = a.value, s = x[0], l = x[1];
                        s.includes(c) ? "add" === t ? e.classList.add("".concat(c, "-dark")) : "remove" === t && e.classList.remove("".concat(c, "-dark")) : l.includes(c) && ("add" === t ? e.classList.add("".concat(c, "--dark")) : "remove" === t && e.classList.remove("".concat(c, "--dark")));
                    }
                } catch (e) {
                    n = !0, o = e;
                } finally{
                    try {
                        r || null == i.return || i.return();
                    } finally{
                        if (n) throw o;
                    }
                }
            });
        });
    }
    function P(e, t, r) {
        "light" === r ? (e.forEach(function(e) {
            e.removeAttribute("hidden");
        }), t.forEach(function(e) {
            e.setAttribute("hidden", "true");
        })) : "dark" === r && (t.forEach(function(e) {
            e.removeAttribute("hidden");
        }), e.forEach(function(e) {
            e.setAttribute("hidden", "true");
        }));
    }
    function N() {
        return O.apply(this, arguments);
    }
    function O() {
        return (O = t(function() {
            var e;
            return r(this, function(t) {
                switch(t.label){
                    case 0:
                        if (e = U(), !(null === localStorage.getItem("wordOfTheDay") || e)) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            function() {
                                return j.apply(this, arguments);
                            }()
                        ];
                    case 1:
                        return [
                            2,
                            t.sent()
                        ];
                    case 2:
                        return [
                            2,
                            function(e) {
                                for(var t = 26, r = "", n = []; "" !== e;)n.push(e.substring(0, t)), e = e.slice(t), t += 17;
                                var o = !0, a = !1, i = void 0;
                                try {
                                    for(var c, s = n[Symbol.iterator](); !(o = (c = s.next()).done); o = !0){
                                        var l = c.value;
                                        r += String.fromCharCode(l[11].charCodeAt(0) + 64);
                                    }
                                } catch (e) {
                                    a = !0, i = e;
                                } finally{
                                    try {
                                        o || null == s.return || s.return();
                                    } finally{
                                        if (a) throw i;
                                    }
                                }
                                return r;
                            }(localStorage.getItem("wordOfTheDay"))
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        })).apply(this, arguments);
    }
    function j() {
        return (j = t(function() {
            var e;
            return r(this, function(t) {
                switch(t.label){
                    case 0:
                        return [
                            4,
                            function() {
                                return H.apply(this, arguments);
                            }()
                        ];
                    case 1:
                        return e = t.sent(), localStorage.setItem("wordOfTheDay", function(e) {
                            var t = [
                                "!",
                                "$",
                                "7",
                                "&",
                                "?",
                                "p",
                                "q",
                                "r",
                                "/",
                                "<",
                                "g",
                                ".",
                                "5",
                                "i",
                                " ",
                                "9",
                                "4",
                                "-",
                                ")",
                                "D",
                                "T",
                                "R",
                                "{",
                                "}",
                                "U",
                                "Z",
                                "t",
                                "K",
                                "P",
                                "~",
                                ";",
                                "|",
                                ":",
                                "z",
                                "V",
                                "W",
                                "X",
                                "+",
                                "=",
                                "G",
                                "H",
                                "I",
                                "@",
                                "#",
                                "%",
                                "3",
                                ">",
                                "^",
                                "c",
                                "d"
                            ], r = t.length, n = 26, o = "", a = !0, i = !1, c = void 0;
                            try {
                                for(var s, l = e[Symbol.iterator](); !(a = (s = l.next()).done); a = !0){
                                    for(var u = s.value, d = 0; d < n; d++)11 === d ? o += String.fromCharCode(u.charCodeAt(0) - 64) : o += t[parseInt(100 * Math.random()) % r];
                                    n += 17;
                                }
                            } catch (e) {
                                i = !0, c = e;
                            } finally{
                                try {
                                    a || null == l.return || l.return();
                                } finally{
                                    if (i) throw c;
                                }
                            }
                            return o;
                        }(e)), [
                            2,
                            e
                        ];
                }
            });
        })).apply(this, arguments);
    }
    function H() {
        return (H = t(function() {
            return r(this, function(e) {
                return [
                    2,
                    fetch("https://words.dev-apis.com/word-of-the-day").then(function(e) {
                        return e.json();
                    }).then(function(e) {
                        return e.word;
                    }).catch(function() {
                        V("Server error \uD83D\uDE10", !1);
                    })
                ];
            });
        })).apply(this, arguments);
    }
    function U() {
        return null === localStorage.getItem("currentDay") ? (J(), !0) : B() !== localStorage.getItem("currentDay");
    }
    function B() {
        var e = new Date;
        return "".concat(e.getUTCDate(), "/").concat(e.getUTCMonth() + 1, "/").concat(e.getUTCFullYear());
    }
    function J() {
        localStorage.setItem("currentDay", B());
    }
    var z = document.querySelector(".keyboard"), G = document.querySelectorAll(".keyboard__letter");
    function W() {
        (function() {
            K.apply(this, arguments);
        })(), document.body.addEventListener("keyup", Y), function() {
            Z.apply(this, arguments);
        }();
    }
    function $() {
        document.body.removeEventListener("keydown", d), document.body.removeEventListener("keyup", Y), z.removeEventListener("click", f);
    }
    function K() {
        return (K = t(function() {
            var e;
            return r(this, function(t) {
                switch(t.label){
                    case 0:
                        return [
                            4,
                            N()
                        ];
                    case 1:
                        return e = t.sent(), document.body.addEventListener("keydown", d = function(t) {
                            if (eo.currentRow < 6) {
                                var r = document.querySelectorAll(".game-board__row")[eo.currentRow].children, n = t.key;
                                if (p(r, n) && ("Backspace" !== n && "Enter" !== n && v(r, n), "Enter" !== n && h(G, n), "Enter" === n)) {
                                    var o = document.activeElement;
                                    (o instanceof HTMLBodyElement || o.classList.contains(".enter-button")) && (h(G, n), X(r, G, e));
                                }
                            }
                        }), [
                            2
                        ];
                }
            });
        })).apply(this, arguments);
    }
    function Y(e) {
        !function(e, t) {
            var r = t.toLowerCase();
            if ("backspace" === r) i = document.querySelector(".backspace-button");
            else if ("enter" === r) i = document.querySelector(".enter-button");
            else {
                var n = !0, o = !1, a = void 0;
                try {
                    for(var i, c, s = e[Symbol.iterator](); !(n = (c = s.next()).done); n = !0){
                        var l = c.value;
                        if (l.innerHTML.toLowerCase() === r) {
                            i = l;
                            break;
                        }
                    }
                } catch (e) {
                    o = !0, a = e;
                } finally{
                    try {
                        n || null == s.return || s.return();
                    } finally{
                        if (o) throw a;
                    }
                }
            }
            if (void 0 === i) {
                m();
                return;
            }
            setTimeout(function() {
                i.classList.contains("backspace-typing") ? i.classList.remove("backspace-typing") : i.classList.contains("enter-typing") ? i.classList.remove("enter-typing") : i.classList.contains("letter-typing") && i.classList.remove("letter-typing");
            }, 150);
        }(G, e.key);
    }
    function Z() {
        return (Z = t(function() {
            var e;
            return r(this, function(t) {
                switch(t.label){
                    case 0:
                        return [
                            4,
                            N()
                        ];
                    case 1:
                        return e = t.sent(), z.addEventListener("click", f = function(t) {
                            if (eo.currentRow < 6) {
                                var r = document.querySelector(".game-board__row[data-state='TBD']").children, n = t.target;
                                (n instanceof HTMLButtonElement || n instanceof HTMLImageElement) && (n instanceof HTMLImageElement || n.classList.contains("backspace-button") ? p(r, "Backspace") : n.classList.contains("enter-button") ? (p(r, "Enter"), X(r, G, e)) : p(r, n.innerHTML) && v(r, n.innerHTML), n.blur());
                            }
                        }), [
                            2
                        ];
                }
            });
        })).apply(this, arguments);
    }
    var F = !1;
    function V(e, t, r) {
        var n = document.querySelector(".feedback-message");
        n.innerHTML = "".concat(e), F || (n.classList.add("fade-in-feedback"), F = !0, t || (setTimeout(function() {
            n.classList.remove("fade-in-feedback"), n.classList.add("fade-out-feedback");
        }, 1e3 * r), setTimeout(function() {
            n.classList.remove("fade-out-feedback"), F = !1;
        }, 1e3 * r + 500)));
    }
    function X(e, t, r) {
        return Q.apply(this, arguments);
    }
    function Q() {
        return (Q = t(function(e, t, n) {
            var o;
            return r(this, function(r) {
                switch(r.label){
                    case 0:
                        if (!function(e) {
                            for(var t = !1, r = 0; r < e.length; r++)if ("" === e[r].innerText) {
                                V("Not Enough Letters", !1, 1), v(e, "enter"), t = !1;
                                break;
                            } else t = !0;
                            return t;
                        }(e)) return [
                            3,
                            2
                        ];
                        return y.style.visibility = "visible", [
                            4,
                            function(e, t) {
                                return ee.apply(this, arguments);
                            }(n, function(e) {
                                var t = "", r = !0, n = !1, o = void 0;
                                try {
                                    for(var a, i = e[Symbol.iterator](); !(r = (a = i.next()).done); r = !0){
                                        var c = a.value;
                                        t += c.textContent;
                                    }
                                } catch (e) {
                                    n = !0, o = e;
                                } finally{
                                    try {
                                        r || null == i.return || i.return();
                                    } finally{
                                        if (n) throw o;
                                    }
                                }
                                return t;
                            }(e), e, t)
                        ];
                    case 1:
                        o = r.sent(), y.style.visibility = "hidden", !1 === o ? v(e, "enter") : (v(e, "enter", o, t), document.querySelectorAll(".game-board__row")[eo.currentRow].dataset.state = "DONE", setTimeout(function() {
                            ea.currentRow = eo.currentRow, function(e) {
                                for(var t = 0; t < 5; t++){
                                    ea.rowsData[ea.currentRow][t] = e[t].childNodes[0].innerText;
                                    var r = e[t].classList, n = "game-board__letter--";
                                    r.contains("".concat(n, "correct")) ? ea.rowsClasses[ea.currentRow][t] = "".concat(n, "correct") : r.contains("".concat(n, "close")) ? ea.rowsClasses[ea.currentRow][t] = "".concat(n, "close") : r.contains("".concat(n, "missing")) && (ea.rowsClasses[ea.currentRow][t] = "".concat(n, "missing"));
                                }
                            }(e), function() {
                                for(var e = document.querySelectorAll(".keyboard__letter:not(.enter-button):not(.backspace-button)"), t = "keyboard__letter--", r = 0; r < 26; r++){
                                    var n = e[r].classList;
                                    n.contains("".concat(t, "correct")) ? ea.keyboardClasses[r][1] = "".concat(t, "correct") : n.contains("".concat(t, "close")) ? ea.keyboardClasses[r][1] = "".concat(t, "close") : n.contains("".concat(t, "missing")) && (ea.keyboardClasses[r][1] = "".concat(t, "missing"));
                                }
                            }(), eo.isSolved && (ea.isSolved = !0), localStorage.setItem("userProgress", JSON.stringify(ea));
                        }, 1200)), !1 !== o && (eo.isSolved ? $() : eo.currentRow < 6 && setTimeout(function() {
                            eo.currentRow++;
                        }, 1200)), r.label = 2;
                    case 2:
                        return [
                            2
                        ];
                }
            });
        })).apply(this, arguments);
    }
    function ee() {
        return (ee = t(function(e, t) {
            var n, o, a, i, c, s, l;
            return r(this, function(r) {
                switch(r.label){
                    case 0:
                        if (void 0 === e) return [
                            2,
                            !1
                        ];
                        return [
                            4,
                            function(e, t) {
                                return et.apply(this, arguments);
                            }(e, t)
                        ];
                    case 1:
                        if (!1 === (n = r.sent())) return [
                            2,
                            !1
                        ];
                        o = !0, a = !1, i = void 0;
                        try {
                            for(c = n[Symbol.iterator](); !(o = (s = c.next()).done); o = !0)if (l = s.value, !0 === l) eo.isSolved = !0;
                            else {
                                eo.isSolved = !1;
                                break;
                            }
                        } catch (e) {
                            a = !0, i = e;
                        } finally{
                            try {
                                o || null == c.return || c.return();
                            } finally{
                                if (a) throw i;
                            }
                        }
                        if (eo.isSolved) switch(eo.currentRow){
                            case 0:
                                V("Exceptional", !1, 2.5);
                                break;
                            case 1:
                                V("Incredible", !1, 2.5);
                                break;
                            case 2:
                                V("Impressive", !1, 2.5);
                                break;
                            case 3:
                                V("Great", !1, 2.5);
                                break;
                            case 4:
                                V("Nice", !1, 2.5);
                                break;
                            default:
                                V("Phew", !1, 2.5);
                        }
                        else 5 === eo.currentRow && V("Correct word: ".concat(e.toUpperCase()), !0);
                        return [
                            2,
                            n
                        ];
                }
            });
        })).apply(this, arguments);
    }
    function et() {
        return (et = t(function(e, t) {
            var n, o, a, i;
            return r(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            function(e) {
                                return en.apply(this, arguments);
                            }(t)
                        ];
                    case 1:
                        if (!1 === (n = r.sent())) return V("Not In Word List", !1, 1.5), [
                            2,
                            !1
                        ];
                        if (void 0 === n) return [
                            2,
                            !1
                        ];
                        if (/\d/.test(e) || e.length !== t.length) return V("Server Error, Enjoy a cookie while we work on it \uD83D\uDE19", !0), [
                            2,
                            !1
                        ];
                        for(a = 0, o = Array.from(t, function() {
                            return !1;
                        }), e = e.toLowerCase(), t = t.toLowerCase(); a < e.length; a++){
                            var c;
                            1 === (i = function(e, t) {
                                for(var r = [], n = e.indexOf(t); -1 !== n;)r.push(n), n = e.indexOf(t, n + 1);
                                return r;
                            }(t, e[a])).length ? (c = i[0], c === a ? o[c] = !0 : !1 === o[c] && (o[c] = "close")) : function(e, t, r) {
                                var n = new Map;
                                e.forEach(function(e) {
                                    n.set("".concat(e), Math.abs(e - t));
                                });
                                var o = er(n);
                                n.delete(o), Number(o) === t ? r[o] = !0 : !1 === r[o] ? r[o] = "close" : function(e, t) {
                                    for(; e.size > 0;){
                                        var r = er(e);
                                        if (e.delete(r), !1 === t[r]) {
                                            t[r] = "close";
                                            break;
                                        }
                                    }
                                }(n, r);
                            }(i, a, o);
                        }
                        return [
                            2,
                            o
                        ];
                }
            });
        })).apply(this, arguments);
    }
    function er(e) {
        var t;
        return ((function(e) {
            if (Array.isArray(e)) return n(e);
        })(t = e.entries()) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }(t) || o(t) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()).reduce(function(e, t) {
            var r = function(e) {
                if (Array.isArray(e)) return e;
            }(t) || function(e, t) {
                var r, n, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var a = [], i = !0, c = !1;
                    try {
                        for(o = o.call(e); !(i = (r = o.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
                    } catch (e) {
                        c = !0, n = e;
                    } finally{
                        try {
                            i || null == o.return || o.return();
                        } finally{
                            if (c) throw n;
                        }
                    }
                    return a;
                }
            }(t, 2) || o(t, 2) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }(), n = r[0], a = r[1];
            return a < e[1] ? [
                n,
                a
            ] : e;
        }, [
            null,
            1 / 0
        ])[0];
    }
    function en() {
        return (en = t(function(e) {
            var t;
            return r(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            fetch("https://words.dev-apis.com/validate-word", {
                                method: "POST",
                                body: JSON.stringify({
                                    word: "".concat(e)
                                }),
                                headers: {
                                    "Content-Type": "application/json",
                                    Connection: "keep-alive"
                                }
                            }).catch(function() {
                                V("Server Error, please check your internet connection \uD83D\uDE1E", !1, 3);
                            })
                        ];
                    case 1:
                        if (void 0 === (t = r.sent())) return [
                            2,
                            void 0
                        ];
                        return [
                            4,
                            t.json()
                        ];
                    case 2:
                        return [
                            2,
                            r.sent().validWord
                        ];
                }
            });
        })).apply(this, arguments);
    }
    var eo = {
        currentRow: 0,
        isSolved: !1
    }, ea = JSON.parse(null === localStorage.getItem("userProgress") || U() ? function() {
        for(var e = [], t = [], r = [], n = 0; n < 6; n++)e[n] = [
            ,
            ,
            ,
            ,
            , 
        ].fill(""), t[n] = [
            ,
            ,
            ,
            ,
            , 
        ].fill("");
        for(var o = document.querySelectorAll(".keyboard__letter:not(.enter-button):not(.backspace-button)"), a = 0; a < 26; a++)r[a] = [
            o[a].innerText,
            ""
        ];
        return localStorage.setItem("userProgress", JSON.stringify({
            currentRow: -1,
            rowsData: e,
            rowsClasses: t,
            keyboardClasses: r,
            isSolved: !1
        })), localStorage.getItem("userProgress");
    }() : localStorage.getItem("userProgress"));
    function ei() {
        return (ei = t(function(e) {
            var t, n;
            return r(this, function(r) {
                switch(r.label){
                    case 0:
                        if (eo.currentRow = e.currentRow + 1, eo.isSolved = e.isSolved, function() {
                            for(var e = document.querySelectorAll(".game-board__row"), t = 0; t <= ea.currentRow; t++){
                                var r = e[t], n = r.children;
                                r.setAttribute("data-state", "DONE");
                                for(var o = 0; o < n.length; o++){
                                    var a = n[o];
                                    a.childNodes[0].innerText = ea.rowsData[t][o];
                                    var i = ea.rowsClasses[t][o];
                                    a.classList.add("game-board-validation"), a.style.animationDelay = "".concat(.03 * t, "s"), a.classList.add(i);
                                }
                            }
                        }(), function() {
                            for(var e = document.querySelectorAll(".keyboard__letter:not(.enter-button):not(.backspace-button)"), t = 0; t < e.length; t++)!function(t) {
                                var r = e[t], n = ea.keyboardClasses[t][1];
                                "" !== n && (r.classList.add("keyboard-validation"), r.style.animationDelay = "".concat(.03 * t, "s"), r.classList.add(n), setTimeout(function() {
                                    r.classList.remove("keyboard-validation"), r.style.removeProperty("animation-delay");
                                }, 1e3 + 30 * t));
                            }(t);
                        }(), !(5 === e.currentRow && !e.isSolved)) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            N()
                        ];
                    case 1:
                        return t = r.sent(), V("Correct word: ".concat(t.toUpperCase()), !0), [
                            3,
                            3
                        ];
                    case 2:
                        e.isSolved && (n = [
                            "first",
                            "second",
                            "third",
                            "fourth",
                            "fifth",
                            "sixth"
                        ], V("Excellent work!, You solved today's word in the ".concat(n[e.currentRow], " row"), !0)), r.label = 3;
                    case 3:
                        return [
                            2
                        ];
                }
            });
        })).apply(this, arguments);
    }
    var ec = U();
    -1 === ea.currentRow || ec || function(e) {
        ei.apply(this, arguments);
    }(ea), "dark" === _ && (S.setAttribute("data-theme", "dark"), I(), E = !1, S.click()), ea.isSolved || W(), a = document.querySelector(".settings-btn"), i = document.querySelector(".settings-close"), a.addEventListener("click", function() {
        A("settings");
    }), i.addEventListener("click", function() {
        D("settings");
    }), S.addEventListener("click", I), c = document.body.querySelector(".how-to-play-btn"), s = document.body.querySelector(".how-to-play-close"), c.addEventListener("click", function() {
        A("howToPlay"), function(e) {
            for(var t = 0; t < e.length; t++)!function(t) {
                var r = e[t];
                setTimeout(function() {
                    r.classList.add("game-board-validation");
                }, 200 + 150 * t), setTimeout(function() {
                    r.classList.remove("game-board-validation");
                }, 1200 + 150 * t);
            }(t);
        }(document.querySelector(".fake-game-row").children);
    }), s.addEventListener("click", function() {
        D("howToPlay");
    }), ec && (localStorage.removeItem("currentDay"), J());
}();

//# sourceMappingURL=index.51131905.js.map

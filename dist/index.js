import { createConfig as Bn, CheckDataCoordinator as xn, ComparisonDataCoordinator as Kn, diffDatasets as Wn, PerfRunner as Gn, diffGraphs as yn, scenarioMessage as En, datasetMessage as Fn, predicateMessage as Hn, categorizeComparisonTestSummaries as An, checkReportFromSummary as On, runSuite as Un, comparisonSummaryFromReport as Xn } from "@sdeverywhere/check-core";
import Zn from "fontfaceobserver";
import Xe, { assertNever as Oe } from "assert-never";
import Jn from "copy-text-to-clipboard";
import { Chart as Mn } from "chart.js";
var Qn = (n, e, l) => new Promise((t, i) => {
  var s = (r) => {
    try {
      o(l.next(r));
    } catch (f) {
      i(f);
    }
  }, a = (r) => {
    try {
      o(l.throw(r));
    } catch (f) {
      i(f);
    }
  }, o = (r) => r.done ? t(r.value) : Promise.resolve(r.value).then(s, a);
  o((l = l.apply(n, e)).next());
});
class Yn {
  constructor(e) {
    this.config = e, this.checkDataCoordinator = new xn(e.check.bundle.model), e.comparison && (this.comparisonDataCoordinator = new Kn(
      e.comparison.bundleL.model,
      e.comparison.bundleR.model
    ));
  }
}
function ei(n) {
  return Qn(this, null, function* () {
    const e = yield Bn(n);
    return new Yn(e);
  });
}
function W() {
}
function ti(n, e) {
  for (const l in e)
    n[l] = e[l];
  return n;
}
function li(n) {
  return n && typeof n == "object" && typeof n.then == "function";
}
function Rn(n) {
  return n();
}
function _t() {
  return /* @__PURE__ */ Object.create(null);
}
function $e(n) {
  n.forEach(Rn);
}
function Sn(n) {
  return typeof n == "function";
}
function X(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function ni(n) {
  return Object.keys(n).length === 0;
}
function Ie(n, ...e) {
  if (n == null)
    return W;
  const l = n.subscribe(...e);
  return l.unsubscribe ? () => l.unsubscribe() : l;
}
function Cn(n) {
  let e;
  return Ie(n, (l) => e = l)(), e;
}
function ge(n, e, l) {
  n.$$.on_destroy.push(Ie(e, l));
}
function ii(n, e, l, t) {
  if (n) {
    const i = Ln(n, e, l, t);
    return n[0](i);
  }
}
function Ln(n, e, l, t) {
  return n[1] && t ? ti(l.ctx.slice(), n[1](t(e))) : l.ctx;
}
function si(n, e, l, t) {
  if (n[2] && t) {
    const i = n[2](t(l));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const s = [], a = Math.max(e.dirty.length, i.length);
      for (let o = 0; o < a; o += 1)
        s[o] = e.dirty[o] | i[o];
      return s;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function oi(n, e, l, t, i, s) {
  if (i) {
    const a = Ln(e, l, t, s);
    n.p(a, i);
  }
}
function ri(n) {
  if (n.ctx.length > 32) {
    const e = [], l = n.ctx.length / 32;
    for (let t = 0; t < l; t++)
      e[t] = -1;
    return e;
  }
  return -1;
}
function gt(n) {
  return n == null ? "" : n;
}
function b(n, e) {
  n.appendChild(e);
}
function ne(n, e, l) {
  const t = ai(n);
  if (!t.getElementById(e)) {
    const i = h("style");
    i.id = e, i.textContent = l, ci(t, i);
  }
}
function ai(n) {
  if (!n)
    return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && e.host ? e : n.ownerDocument;
}
function ci(n, e) {
  b(n.head || n, e);
}
function y(n, e, l) {
  n.insertBefore(e, l || null);
}
function $(n) {
  n.parentNode.removeChild(n);
}
function O(n, e) {
  for (let l = 0; l < n.length; l += 1)
    n[l] && n[l].d(e);
}
function h(n) {
  return document.createElement(n);
}
function fi(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function I(n) {
  return document.createTextNode(n);
}
function A() {
  return I("");
}
function re(n, e, l, t) {
  return n.addEventListener(e, l, t), () => n.removeEventListener(e, l, t);
}
function p(n, e, l) {
  l == null ? n.removeAttribute(e) : n.getAttribute(e) !== l && n.setAttribute(e, l);
}
function di(n) {
  return Array.from(n.childNodes);
}
function G(n, e) {
  e = "" + e, n.wholeText !== e && (n.data = e);
}
function se(n, e, l, t) {
  l === null ? n.style.removeProperty(e) : n.style.setProperty(e, l, t ? "important" : "");
}
function pe(n, e, l) {
  n.classList[l ? "add" : "remove"](e);
}
function ui(n, e, { bubbles: l = !1, cancelable: t = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(n, l, t, e), i;
}
class mi {
  constructor(e = !1) {
    this.is_svg = !1, this.is_svg = e, this.e = this.n = null;
  }
  c(e) {
    this.h(e);
  }
  m(e, l, t = null) {
    this.e || (this.is_svg ? this.e = fi(l.nodeName) : this.e = h(l.nodeName), this.t = l, this.c(e)), this.i(t);
  }
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(this.e.childNodes);
  }
  i(e) {
    for (let l = 0; l < this.n.length; l += 1)
      y(this.t, this.n[l], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach($);
  }
}
let Be;
function ke(n) {
  Be = n;
}
function ft() {
  if (!Be)
    throw new Error("Function called outside component initialization");
  return Be;
}
function Ze(n) {
  ft().$$.on_mount.push(n);
}
function ze() {
  const n = ft();
  return (e, l, { cancelable: t = !1 } = {}) => {
    const i = n.$$.callbacks[e];
    if (i) {
      const s = ui(e, l, { cancelable: t });
      return i.slice().forEach((a) => {
        a.call(n, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function ae(n, e) {
  const l = n.$$.callbacks[e.type];
  l && l.slice().forEach((t) => t.call(this, e));
}
const Ne = [], be = [], He = [], it = [], hi = Promise.resolve();
let st = !1;
function pi() {
  st || (st = !0, hi.then(ut));
}
function ot(n) {
  He.push(n);
}
function dt(n) {
  it.push(n);
}
const tt = /* @__PURE__ */ new Set();
let We = 0;
function ut() {
  const n = Be;
  do {
    for (; We < Ne.length; ) {
      const e = Ne[We];
      We++, ke(e), vi(e.$$);
    }
    for (ke(null), Ne.length = 0, We = 0; be.length; )
      be.pop()();
    for (let e = 0; e < He.length; e += 1) {
      const l = He[e];
      tt.has(l) || (tt.add(l), l());
    }
    He.length = 0;
  } while (Ne.length);
  for (; it.length; )
    it.pop()();
  st = !1, tt.clear(), ke(n);
}
function vi(n) {
  if (n.fragment !== null) {
    n.update(), $e(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(ot);
  }
}
const Ae = /* @__PURE__ */ new Set();
let Me;
function B() {
  Me = {
    r: 0,
    c: [],
    p: Me
  };
}
function x() {
  Me.r || $e(Me.c), Me = Me.p;
}
function g(n, e) {
  n && n.i && (Ae.delete(n), n.i(e));
}
function w(n, e, l, t) {
  if (n && n.o) {
    if (Ae.has(n))
      return;
    Ae.add(n), Me.c.push(() => {
      Ae.delete(n), t && (l && n.d(1), t());
    }), n.o(e);
  }
}
function bt(n, e) {
  const l = e.token = {};
  function t(i, s, a, o) {
    if (e.token !== l)
      return;
    e.resolved = o;
    let r = e.ctx;
    a !== void 0 && (r = r.slice(), r[a] = o);
    const f = i && (e.current = i)(r);
    let c = !1;
    e.block && (e.blocks ? e.blocks.forEach((d, u) => {
      u !== s && d && (B(), w(d, 1, 1, () => {
        e.blocks[u] === d && (e.blocks[u] = null);
      }), x());
    }) : e.block.d(1), f.c(), g(f, 1), f.m(e.mount(), e.anchor), c = !0), e.block = f, e.blocks && (e.blocks[s] = f), c && ut();
  }
  if (li(n)) {
    const i = ft();
    if (n.then((s) => {
      ke(i), t(e.then, 1, e.value, s), ke(null);
    }, (s) => {
      if (ke(i), t(e.catch, 2, e.error, s), ke(null), !e.hasCatch)
        throw s;
    }), e.current !== e.pending)
      return t(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return t(e.then, 1, e.value, n), !0;
    e.resolved = n;
  }
}
function _i(n, e, l) {
  const t = e.slice(), { resolved: i } = n;
  n.current === n.then && (t[n.value] = i), n.current === n.catch && (t[n.error] = i), n.block.p(t, l);
}
function mt(n, e, l) {
  const t = n.$$.props[e];
  t !== void 0 && (n.$$.bound[t] = l, l(n.$$.ctx[t]));
}
function q(n) {
  n && n.c();
}
function z(n, e, l, t) {
  const { fragment: i, on_mount: s, on_destroy: a, after_update: o } = n.$$;
  i && i.m(e, l), t || ot(() => {
    const r = s.map(Rn).filter(Sn);
    a ? a.push(...r) : $e(r), n.$$.on_mount = [];
  }), o.forEach(ot);
}
function j(n, e) {
  const l = n.$$;
  l.fragment !== null && ($e(l.on_destroy), l.fragment && l.fragment.d(e), l.on_destroy = l.fragment = null, l.ctx = []);
}
function gi(n, e) {
  n.$$.dirty[0] === -1 && (Ne.push(n), pi(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Q(n, e, l, t, i, s, a, o = [-1]) {
  const r = Be;
  ke(n);
  const f = n.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: W,
    not_equal: i,
    bound: _t(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (r ? r.$$.context : [])),
    callbacks: _t(),
    dirty: o,
    skip_bound: !1,
    root: e.target || r.$$.root
  };
  a && a(f.root);
  let c = !1;
  if (f.ctx = l ? l(n, e.props || {}, (d, u, ...m) => {
    const v = m.length ? m[0] : u;
    return f.ctx && i(f.ctx[d], f.ctx[d] = v) && (!f.skip_bound && f.bound[d] && f.bound[d](v), c && gi(n, d)), u;
  }) : [], f.update(), c = !0, $e(f.before_update), f.fragment = t ? t(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = di(e.target);
      f.fragment && f.fragment.l(d), d.forEach($);
    } else
      f.fragment && f.fragment.c();
    e.intro && g(n.$$.fragment), z(n, e.target, e.anchor, e.customElement), ut();
  }
  ke(r);
}
class Y {
  $destroy() {
    j(this, 1), this.$destroy = W;
  }
  $on(e, l) {
    const t = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return t.push(l), () => {
      const i = t.indexOf(l);
      i !== -1 && t.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !ni(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function bi(n) {
  ne(n, "svelte-1s6fyc", ".lazy-container.svelte-1s6fyc{position:relative;display:flex;flex:1;height:100%}");
}
function wt(n) {
  let e;
  const l = n[3].default, t = ii(l, n, n[2], null);
  return {
    c() {
      t && t.c();
    },
    m(i, s) {
      t && t.m(i, s), e = !0;
    },
    p(i, s) {
      t && t.p && (!e || s & 4) && oi(
        t,
        l,
        i,
        i[2],
        e ? si(l, i[2], s, null) : ri(i[2]),
        null
      );
    },
    i(i) {
      e || (g(t, i), e = !0);
    },
    o(i) {
      w(t, i), e = !1;
    },
    d(i) {
      t && t.d(i);
    }
  };
}
function wi(n) {
  let e, l, t = n[0] && wt(n);
  return {
    c() {
      e = h("div"), t && t.c(), p(e, "class", "lazy-container svelte-1s6fyc");
    },
    m(i, s) {
      y(i, e, s), t && t.m(e, null), n[4](e), l = !0;
    },
    p(i, [s]) {
      i[0] ? t ? (t.p(i, s), s & 1 && g(t, 1)) : (t = wt(i), t.c(), g(t, 1), t.m(e, null)) : t && (B(), w(t, 1, 1, () => {
        t = null;
      }), x());
    },
    i(i) {
      l || (g(t), l = !0);
    },
    o(i) {
      w(t), l = !1;
    },
    d(i) {
      i && $(e), t && t.d(), n[4](null);
    }
  };
}
function ki(n, e, l) {
  let { $$slots: t = {}, $$scope: i } = e, { visible: s = !1 } = e, a;
  Ze(() => {
    let r = new IntersectionObserver(
      (f) => {
        const c = f[0].isIntersecting;
        c && !s ? l(0, s = !0) : !c && s && l(0, s = !1);
      },
      {
        root: null
      }
    );
    return r.observe(a), () => {
      l(0, s = !1), r.disconnect();
    };
  });
  function o(r) {
    be[r ? "unshift" : "push"](() => {
      a = r, l(1, a);
    });
  }
  return n.$$set = (r) => {
    "visible" in r && l(0, s = r.visible), "$$scope" in r && l(2, i = r.$$scope);
  }, [s, a, i, t, o];
}
class ht extends Y {
  constructor(e) {
    super(), Q(this, e, ki, wi, X, { visible: 0 }, bi);
  }
}
function $i(n) {
  ne(n, "svelte-bdlfj4", ".graph-inner-container.svelte-bdlfj4{position:absolute;top:0;left:0;bottom:0;right:0}");
}
function yi(n) {
  let e, l;
  return {
    c() {
      e = h("div"), l = h("canvas"), p(e, "class", "graph-inner-container svelte-bdlfj4"), p(e, "style", n[2]);
    },
    m(t, i) {
      y(t, e, i), b(e, l), n[5](l), n[6](e);
    },
    p: W,
    i: W,
    o: W,
    d(t) {
      t && $(e), n[5](null), n[6](null);
    }
  };
}
function Mi(n, e, l) {
  let { config: t } = e, { viewModel: i } = e, s, a = `width: ${t.width}rem; height: 20rem;`, o, r;
  Ze(() => (r = i.createGraphView(o), () => {
    r == null || r.destroy(), r = void 0;
  }));
  function f(d) {
    be[d ? "unshift" : "push"](() => {
      o = d, l(1, o);
    });
  }
  function c(d) {
    be[d ? "unshift" : "push"](() => {
      s = d, l(0, s);
    });
  }
  return n.$$set = (d) => {
    "config" in d && l(3, t = d.config), "viewModel" in d && l(4, i = d.viewModel);
  }, [
    s,
    o,
    a,
    t,
    i,
    f,
    c
  ];
}
class Ri extends Y {
  constructor(e) {
    super(), Q(this, e, Mi, yi, X, { config: 3, viewModel: 4 }, $i);
  }
}
function Si(n) {
  ne(n, "svelte-1mlx9dh", '.legend-container.svelte-1mlx9dh{display:flex;flex-direction:row;flex-wrap:wrap;flex:0 0 3.5rem;justify-content:center;align-items:center;width:100%;margin-top:-0.45rem;font-family:"Roboto Condensed";font-weight:700;font-size:1rem;line-height:1.2}.legend-item.svelte-1mlx9dh{margin:0 0.2rem 0.1rem 0.2rem;padding:0.25rem 0.6rem 0.2rem 0.6rem;color:#fff;text-align:center}');
}
function kt(n, e, l) {
  const t = n.slice();
  return t[1] = e[l], t;
}
function $t(n) {
  let e, l = n[1].label.toUpperCase() + "", t;
  return {
    c() {
      e = h("div"), t = I(l), p(e, "class", "legend-item svelte-1mlx9dh"), se(e, "background-color", n[1].color);
    },
    m(i, s) {
      y(i, e, s), b(e, t);
    },
    p(i, s) {
      s & 1 && l !== (l = i[1].label.toUpperCase() + "") && G(t, l), s & 1 && se(e, "background-color", i[1].color);
    },
    d(i) {
      i && $(e);
    }
  };
}
function Ci(n) {
  let e, l = n[0].legendItems, t = [];
  for (let i = 0; i < l.length; i += 1)
    t[i] = $t(kt(n, l, i));
  return {
    c() {
      e = h("div");
      for (let i = 0; i < t.length; i += 1)
        t[i].c();
      p(e, "class", "legend-container svelte-1mlx9dh");
    },
    m(i, s) {
      y(i, e, s);
      for (let a = 0; a < t.length; a += 1)
        t[a].m(e, null);
    },
    p(i, [s]) {
      if (s & 1) {
        l = i[0].legendItems;
        let a;
        for (a = 0; a < l.length; a += 1) {
          const o = kt(i, l, a);
          t[a] ? t[a].p(o, s) : (t[a] = $t(o), t[a].c(), t[a].m(e, null));
        }
        for (; a < t.length; a += 1)
          t[a].d(1);
        t.length = l.length;
      }
    },
    i: W,
    o: W,
    d(i) {
      i && $(e), O(t, i);
    }
  };
}
function Li(n, e, l) {
  let { graphSpec: t } = e;
  return n.$$set = (i) => {
    "graphSpec" in i && l(0, t = i.graphSpec);
  }, [t];
}
class Di extends Y {
  constructor(e) {
    super(), Q(this, e, Li, Ci, X, { graphSpec: 0 }, Si);
  }
}
function Ti(n) {
  ne(n, "svelte-1mnj087", '.context-graph-container.svelte-1mnj087{display:inline-flex;flex-direction:column;flex:0 0 38rem;background-color:#fff}.graph-and-info.svelte-1mnj087{display:flex;flex-direction:column}.graph-title.svelte-1mnj087{margin:0.5rem 0;padding:0 0.8rem;font-family:"Roboto Condensed";font-size:1.55rem}.graph-container.svelte-1mnj087{display:block;position:relative;width:38rem;height:20rem}.message.svelte-1mnj087{display:flex;flex:1;min-height:20rem;align-items:center;justify-content:center;background-color:#555;color:#aaa}.link-container.svelte-1mnj087{display:flex;flex-direction:column;align-items:flex-start;margin-bottom:0.4rem}.link-row.svelte-1mnj087{height:1.2rem;margin:0 0.8rem;color:#999;cursor:pointer}.link-row.svelte-1mnj087:hover{color:#000}');
}
function yt(n, e, l) {
  const t = n.slice();
  return t[10] = e[l], t;
}
function Vi(n) {
  let e, l, t, i = n[0].bundleName + "", s, a;
  return {
    c() {
      e = h("div"), l = h("span"), l.textContent = "Not included in\xA0", t = h("span"), s = I(i), p(t, "class", a = gt(n[0].datasetClass) + " svelte-1mnj087"), p(e, "class", "message svelte-1mnj087");
    },
    m(o, r) {
      y(o, e, r), b(e, l), b(e, t), b(t, s);
    },
    p(o, r) {
      r & 1 && i !== (i = o[0].bundleName + "") && G(s, i), r & 1 && a !== (a = gt(o[0].datasetClass) + " svelte-1mnj087") && p(t, "class", a);
    },
    i: W,
    o: W,
    d(o) {
      o && $(e);
    }
  };
}
function Ii(n) {
  let e, l, t = n[0].graphSpec.title + "", i, s, a, o, r, f;
  function c(m) {
    n[8](m);
  }
  let d = {
    $$slots: { default: [zi] },
    $$scope: { ctx: n }
  };
  n[1] !== void 0 && (d.visible = n[1]), a = new ht({ props: d }), be.push(() => mt(a, "visible", c)), r = new Di({
    props: {
      graphSpec: n[0].graphSpec
    }
  });
  let u = n[0].linkItems && Rt(n);
  return {
    c() {
      e = h("div"), l = h("div"), s = h("div"), q(a.$$.fragment), q(r.$$.fragment), u && u.c(), p(l, "class", i = "graph-title " + n[0].datasetClass + " svelte-1mnj087"), p(s, "class", "graph-container svelte-1mnj087"), p(e, "class", "graph-and-info svelte-1mnj087");
    },
    m(m, v) {
      y(m, e, v), b(e, l), l.innerHTML = t, b(e, s), z(a, s, null), z(r, e, null), u && u.m(e, null), f = !0;
    },
    p(m, v) {
      (!f || v & 1) && t !== (t = m[0].graphSpec.title + "") && (l.innerHTML = t), (!f || v & 1 && i !== (i = "graph-title " + m[0].datasetClass + " svelte-1mnj087")) && p(l, "class", i);
      const _ = {};
      v & 8200 && (_.$$scope = { dirty: v, ctx: m }), !o && v & 2 && (o = !0, _.visible = m[1], dt(() => o = !1)), a.$set(_);
      const k = {};
      v & 1 && (k.graphSpec = m[0].graphSpec), r.$set(k), m[0].linkItems ? u ? u.p(m, v) : (u = Rt(m), u.c(), u.m(e, null)) : u && (u.d(1), u = null);
    },
    i(m) {
      f || (g(a.$$.fragment, m), g(r.$$.fragment, m), f = !0);
    },
    o(m) {
      w(a.$$.fragment, m), w(r.$$.fragment, m), f = !1;
    },
    d(m) {
      m && $(e), j(a), j(r), u && u.d();
    }
  };
}
function Mt(n) {
  let e, l;
  return e = new Ri({
    props: {
      viewModel: n[3].graphData,
      config: n[4]
    }
  }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & 8 && (s.viewModel = t[3].graphData), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function zi(n) {
  let e, l, t = n[3] && Mt(n);
  return {
    c() {
      t && t.c(), e = A();
    },
    m(i, s) {
      t && t.m(i, s), y(i, e, s), l = !0;
    },
    p(i, s) {
      i[3] ? t ? (t.p(i, s), s & 8 && g(t, 1)) : (t = Mt(i), t.c(), g(t, 1), t.m(e.parentNode, e)) : t && (B(), w(t, 1, 1, () => {
        t = null;
      }), x());
    },
    i(i) {
      l || (g(t), l = !0);
    },
    o(i) {
      w(t), l = !1;
    },
    d(i) {
      t && t.d(i), i && $(e);
    }
  };
}
function Rt(n) {
  let e, l = n[0].linkItems, t = [];
  for (let i = 0; i < l.length; i += 1)
    t[i] = St(yt(n, l, i));
  return {
    c() {
      e = h("div");
      for (let i = 0; i < t.length; i += 1)
        t[i].c();
      p(e, "class", "link-container svelte-1mnj087");
    },
    m(i, s) {
      y(i, e, s);
      for (let a = 0; a < t.length; a += 1)
        t[a].m(e, null);
    },
    p(i, s) {
      if (s & 33) {
        l = i[0].linkItems;
        let a;
        for (a = 0; a < l.length; a += 1) {
          const o = yt(i, l, a);
          t[a] ? t[a].p(o, s) : (t[a] = St(o), t[a].c(), t[a].m(e, null));
        }
        for (; a < t.length; a += 1)
          t[a].d(1);
        t.length = l.length;
      }
    },
    d(i) {
      i && $(e), O(t, i);
    }
  };
}
function St(n) {
  let e, l = n[10].text + "", t, i, s;
  function a() {
    return n[9](n[10]);
  }
  return {
    c() {
      e = h("div"), t = I(l), p(e, "class", "link-row svelte-1mnj087");
    },
    m(o, r) {
      y(o, e, r), b(e, t), i || (s = re(e, "click", a), i = !0);
    },
    p(o, r) {
      n = o, r & 1 && l !== (l = n[10].text + "") && G(t, l);
    },
    d(o) {
      o && $(e), i = !1, s();
    }
  };
}
function ji(n) {
  let e, l, t, i;
  const s = [Ii, Vi], a = [];
  function o(r, f) {
    return r[0].graphSpec ? 0 : 1;
  }
  return l = o(n), t = a[l] = s[l](n), {
    c() {
      e = h("div"), t.c(), p(e, "class", "context-graph-container svelte-1mnj087");
    },
    m(r, f) {
      y(r, e, f), a[l].m(e, null), i = !0;
    },
    p(r, [f]) {
      let c = l;
      l = o(r), l === c ? a[l].p(r, f) : (B(), w(a[c], 1, 1, () => {
        a[c] = null;
      }), x(), t = a[l], t ? t.p(r, f) : (t = a[l] = s[l](r), t.c()), g(t, 1), t.m(e, null));
    },
    i(r) {
      i || (g(t), i = !0);
    },
    o(r) {
      w(t), i = !1;
    },
    d(r) {
      r && $(e), a[l].d();
    }
  };
}
function Pi(n, e, l) {
  let t, i = W, s = () => (i(), i = Ie(o, (_) => l(3, t = _)), o);
  n.$$.on_destroy.push(() => i());
  let { viewModel: a } = e, o = a.content;
  s();
  let r = !1;
  const f = { width: 38 };
  let c = r, d;
  function u(_) {
    switch (_.kind) {
      case "url":
        window.open(_.content, "_blank");
        break;
      case "copy":
        Jn(_.content);
        break;
      default:
        Xe(_.kind);
    }
  }
  function m(_) {
    r = _, l(1, r);
  }
  const v = (_) => u(_);
  return n.$$set = (_) => {
    "viewModel" in _ && l(0, a = _.viewModel);
  }, n.$$.update = () => {
    n.$$.dirty & 195 && (r !== c || a.requestKey !== (d == null ? void 0 : d.requestKey)) && (d == null || d.clearData(), l(6, c = r), l(7, d = a), s(l(2, o = a.content)), r && a.requestData());
  }, [
    a,
    r,
    o,
    t,
    f,
    u,
    c,
    d,
    m,
    v
  ];
}
class Ue extends Y {
  constructor(e) {
    super(), Q(this, e, Pi, ji, X, { viewModel: 0 }, Ti);
  }
}
const Le = [];
function qi(n, e) {
  return {
    subscribe: de(n, e).subscribe
  };
}
function de(n, e = W) {
  let l;
  const t = /* @__PURE__ */ new Set();
  function i(o) {
    if (X(n, o) && (n = o, l)) {
      const r = !Le.length;
      for (const f of t)
        f[1](), Le.push(f, n);
      if (r) {
        for (let f = 0; f < Le.length; f += 2)
          Le[f][0](Le[f + 1]);
        Le.length = 0;
      }
    }
  }
  function s(o) {
    i(o(n));
  }
  function a(o, r = W) {
    const f = [o, r];
    return t.add(f), t.size === 1 && (l = e(i) || W), o(n), () => {
      t.delete(f), t.size === 0 && (l(), l = null);
    };
  }
  return { set: i, update: s, subscribe: a };
}
function Ct(n, e, l) {
  const t = !Array.isArray(n), i = t ? [n] : n, s = e.length < 2;
  return qi(l, (a) => {
    let o = !1;
    const r = [];
    let f = 0, c = W;
    const d = () => {
      if (f)
        return;
      c();
      const m = e(t ? r[0] : r, a);
      s ? a(m) : c = Sn(m) ? m : W;
    }, u = i.map((m, v) => Ie(m, (_) => {
      r[v] = _, f &= ~(1 << v), o && d();
    }, () => {
      f |= 1 << v;
    }));
    return o = !0, d(), function() {
      $e(u), c();
    };
  });
}
let Ni = 1;
class Dn {
  constructor(e, l, t, i, s) {
    this.dataCoordinator = l, this.bundle = t, this.scenario = i, this.graphSpec = s, this.dataRequested = !1, this.dataLoaded = !1;
    const a = t === "right" ? e.bundleR : e.bundleL;
    if (this.bundleName = a.name, this.datasetClass = `dataset-color-${t === "right" ? "1" : "0"}`, s) {
      const o = t === "right" ? i.specR : i.specL;
      this.linkItems = a.model.getGraphLinksForScenario(o, s.id), this.requestKey = `context-graph::${Ni++}::${t}::${s.id}::${i.key}`, this.writableContent = de(void 0), this.content = this.writableContent;
    }
  }
  requestData() {
    if (this.dataRequested)
      return;
    this.dataRequested = !0;
    const e = this.bundle === "left" ? this.scenario.specL : void 0, l = this.bundle === "right" ? this.scenario.specR : void 0;
    this.dataCoordinator.requestGraphData(
      this.requestKey,
      e,
      l,
      this.graphSpec.id,
      (t, i) => {
        if (!this.dataRequested)
          return;
        const s = l ? i : t;
        this.writableContent.set({
          graphData: s
        }), this.dataLoaded = !0;
      }
    );
  }
  clearData() {
    this.dataRequested && (this.writableContent.set(void 0), this.dataLoaded || this.dataCoordinator.cancelRequest(this.requestKey), this.dataRequested = !1, this.dataLoaded = !1);
  }
}
function pt(n, e) {
  if (n === 0)
    return 0;
  for (let l = 0; l < e.length; l++)
    if (n < e[l])
      return l + 1;
  return e.length + 1;
}
function Bi(n) {
  return n === void 0 ? !0 : n.some((e, l) => l > 0 && e > 0);
}
function Re(n, e) {
  return `<span class="dataset-color-${e === "left" ? 0 : 1}">${n}</span>`;
}
function rt(n) {
  if (!n)
    return [];
  const e = -Number.MAX_VALUE / 2, l = Number.MAX_VALUE / 2, t = [];
  for (const [i, s] of n.entries())
    s < e || s > l || t.push({
      x: i,
      y: s
    });
  return t;
}
let xi = 1;
class Tn {
  constructor(e, l, t, i, s, a) {
    this.comparisonConfig = e, this.dataCoordinator = l, this.title = t, this.subtitle = i, this.scenario = s, this.datasetKey = a, this.dataRequested = !1, this.dataLoaded = !1, this.requestKey = `detail-box::${xi++}::${s.key}::${a}`, this.writableContent = de(void 0), this.content = this.writableContent;
  }
  requestData() {
    this.dataRequested || (this.dataRequested = !0, this.dataCoordinator.requestDatasetMaps(
      this.requestKey,
      this.scenario.specL,
      this.scenario.specR,
      [this.datasetKey],
      (e, l) => {
        if (!this.dataRequested)
          return;
        const t = Ki(this.scenario.key, this.datasetKey, e, l), i = (k) => {
          const M = this.comparisonConfig, R = k === "left" ? M.bundleL.name : M.bundleR.name;
          return `Data only defined in ${Re(R, k)}`;
        }, s = t.diffReport;
        let a, o;
        switch (s.validity) {
          case "both":
            a = pt(s.maxDiff, this.comparisonConfig.thresholds), s.maxDiff === 0 ? o = "No differences" : o = void 0;
            break;
          case "left-only":
            a = void 0, o = i("left");
            break;
          case "right-only":
            a = void 0, o = i("right");
            break;
          default:
            a = void 0, o = "Dataset not defined for this scenario";
            break;
        }
        const r = this.dataCoordinator.bundleModelL.modelSpec, f = this.dataCoordinator.bundleModelR.modelSpec, c = r.outputVars.get(this.datasetKey), u = f.outputVars.get(this.datasetKey) || c;
        let m, v;
        u.sourceName === void 0 && (r.startTime !== void 0 && f.startTime !== void 0 && (m = Math.min(r.startTime, f.startTime)), r.endTime !== void 0 && f.endTime !== void 0 && (v = Math.max(r.endTime, f.endTime)));
        const _ = {
          key: this.requestKey,
          refPlots: [],
          pointsL: rt(e == null ? void 0 : e.get(this.datasetKey)),
          pointsR: rt(l == null ? void 0 : l.get(this.datasetKey)),
          xMin: m,
          xMax: v
        };
        this.writableContent.set({
          bucketClass: `bucket-border-${a !== void 0 ? a : "undefined"}`,
          message: o,
          diffReport: s,
          comparisonGraphViewModel: _
        }), this.dataLoaded = !0;
      }
    ));
  }
  clearData() {
    this.dataRequested && (this.writableContent.set(void 0), this.dataLoaded || this.dataCoordinator.cancelRequest(this.requestKey), this.dataRequested = !1, this.dataLoaded = !1);
  }
}
function Ki(n, e, l, t) {
  const i = l == null ? void 0 : l.get(e), s = t == null ? void 0 : t.get(e), a = Wn(i, s);
  return {
    scenarioKey: n,
    datasetKey: e,
    diffReport: a
  };
}
function Vn(n, e, l, t, i, s) {
  const a = [];
  for (const o of s) {
    if (o === void 0) {
      a.push(void 0);
      continue;
    }
    const r = l === "scenarios" ? `\u2026${o.subtitle}` : o.title;
    a.push(
      new Tn(
        n,
        e,
        r,
        void 0,
        o.scenario,
        o.testSummary.d
      )
    );
  }
  return {
    title: t,
    subtitle: i,
    showTitle: l === "scenarios",
    boxes: a
  };
}
function Wi(n) {
  var e, l;
  const t = n.comparisonConfig, i = n.dataCoordinator, s = i.bundleModelL, a = i.bundleModelR, o = (u, m, v) => new Dn(t, i, v, u, m), r = /* @__PURE__ */ new Set(), f = (u, m) => {
    if (m.modelSpec.graphSpecs !== void 0) {
      for (const v of m.modelSpec.graphSpecs)
        for (const _ of v.datasets)
          if (_.datasetKey === u.datasetKey) {
            r.add(v.id);
            break;
          }
    }
  }, c = t.datasets.getDataset(n.datasetKey);
  f(c.outputVarL, s), f(c.outputVarR, a);
  const d = [];
  for (const u of r) {
    const m = (e = s.modelSpec.graphSpecs) == null ? void 0 : e.find((_) => _.id === u), v = (l = a.modelSpec.graphSpecs) == null ? void 0 : l.find((_) => _.id === u);
    d.push({
      graphL: o(n.scenario, m, "left"),
      graphR: o(n.scenario, v, "right")
    });
  }
  return d;
}
const Lt = "#444", Ge = "Roboto Condensed", Dt = 14, Tt = "#777", Gi = {
  beforeDatasetsDraw: (n) => {
    const e = n.ctx;
    e.save();
    const l = n.data.datasets;
    for (let t = 0; t < l.length; t++) {
      const i = l[t];
      if (i.data.length !== 1)
        continue;
      const a = n.getDatasetMeta(t).data[0];
      let o;
      if (i.fill === "+1") {
        if (t + 1 >= l.length)
          break;
        const f = n.getDatasetMeta(t + 1).data[0];
        o = { x: f._view.x, y: f._view.y };
      } else if (i.fill === "start")
        o = { x: a._view.x, y: n.chartArea.bottom };
      else if (i.fill === "end")
        o = { x: a._view.x, y: n.chartArea.top };
      else
        return;
      e.beginPath(), e.moveTo(a._view.x, a._view.y), e.lineTo(o.x, o.y), e.closePath(), e.strokeStyle = i.backgroundColor, e.lineWidth = 4, e.stroke();
    }
    e.restore();
  }
};
Mn.pluginService.register(Gi);
class Ei {
  constructor(e, l) {
    this.canvas = e, this.viewModel = l, this.chart = Fi(e, l);
  }
  destroy() {
    var e;
    (e = this.chart) == null || e.destroy(), this.chart = void 0;
  }
}
function Fi(n, e) {
  const l = [];
  function t(o, r, f) {
    let d = 3;
    f && (d = 1);
    let u, m = !1;
    switch (f) {
      case "wide":
        d = 3 * 2;
        break;
      case "dashed":
        u = [8, 2];
        break;
      case "fill-to-next":
        m = "+1";
        break;
      case "fill-above":
        m = "end";
        break;
      case "fill-below":
        m = "start";
        break;
    }
    let v;
    m !== !1 && (v = `rgba(0, 128, 0, ${o.length > 1 ? 0.1 : 0.3})`);
    let _ = 0, k;
    o.length === 1 && f !== "dashed" && (_ = 5, k = r), l.push({
      data: o,
      borderColor: r,
      borderWidth: d,
      borderDash: u,
      backgroundColor: v,
      fill: m,
      pointRadius: _,
      pointBackgroundColor: k,
      pointBorderWidth: 0,
      pointBorderColor: "transparent",
      lineTension: 0
    });
  }
  t(e.pointsR, "deepskyblue"), t(e.pointsL, "crimson");
  for (const o of e.refPlots)
    t(o.points, "green", o.style || "normal");
  const i = e.xMin, s = e.xMax, a = i === 1990;
  return new Mn(n, {
    type: "line",
    data: {
      datasets: l
    },
    options: {
      responsive: !0,
      maintainAspectRatio: !1,
      animation: { duration: 0 },
      hover: { animationDuration: 0 },
      responsiveAnimationDuration: 0,
      title: { display: !1 },
      legend: { display: !1 },
      elements: {
        point: {
          radius: 0
        }
      },
      tooltips: {
        titleFontFamily: Ge,
        bodyFontFamily: Ge
      },
      scales: {
        xAxes: [
          {
            type: "linear",
            position: "bottom",
            gridLines: {
              color: Lt
            },
            ticks: {
              maxTicksLimit: 6,
              maxRotation: 0,
              min: i,
              max: s,
              fontFamily: Ge,
              fontSize: Dt,
              fontColor: Tt,
              callback: (o, r) => a && r === 0 ? "" : o
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: Lt
            },
            ticks: {
              fontFamily: Ge,
              fontSize: Dt,
              fontColor: Tt
            }
          }
        ]
      }
    }
  });
}
function Hi(n) {
  ne(n, "svelte-bdlfj4", ".graph-inner-container.svelte-bdlfj4{position:absolute;top:0;left:0;bottom:0;right:0}");
}
function Ai(n) {
  let e;
  return {
    c() {
      e = h("div"), p(e, "class", "graph-inner-container svelte-bdlfj4"), p(e, "style", n[1]);
    },
    m(l, t) {
      y(l, e, t), n[7](e);
    },
    p: W,
    i: W,
    o: W,
    d(l) {
      l && $(e), n[7](null);
    }
  };
}
function Oi(n, e, l) {
  let { viewModel: t } = e, { width: i } = e, { height: s } = e, a, o = `width: ${i}rem; height: ${s}rem;`, r, f;
  function c() {
    r == null || r.destroy();
    const u = document.createElement("canvas");
    for (; a.firstChild; )
      a.firstChild.remove();
    a.appendChild(u), l(6, f = t.key), l(5, r = new Ei(u, t));
  }
  Ze(() => (c(), () => {
    r == null || r.destroy(), l(5, r = void 0);
  }));
  function d(u) {
    be[u ? "unshift" : "push"](() => {
      a = u, l(0, a);
    });
  }
  return n.$$set = (u) => {
    "viewModel" in u && l(2, t = u.viewModel), "width" in u && l(3, i = u.width), "height" in u && l(4, s = u.height);
  }, n.$$.update = () => {
    n.$$.dirty & 100 && r && t.key !== f && c();
  }, [
    a,
    o,
    t,
    i,
    s,
    r,
    f,
    d
  ];
}
class In extends Y {
  constructor(e) {
    super(), Q(this, e, Oi, Ai, X, { viewModel: 2, width: 3, height: 4 }, Hi);
  }
}
function Ui(n) {
  ne(n, "svelte-1d7myx7", ".detail-box.svelte-1d7myx7{display:flex;flex-direction:column}.title-row.svelte-1d7myx7{display:flex;flex-direction:row;align-items:baseline}.title.svelte-1d7myx7{margin-left:0.7rem;font-size:1.1em;font-weight:700;cursor:pointer}.subtitle.svelte-1d7myx7{color:#aaa;margin-left:0.4rem}.content-container.svelte-1d7myx7{display:flex;flex-direction:column;width:31.6rem;height:27.6rem}.content.svelte-1d7myx7{display:flex;flex-direction:column;height:26rem;padding:0.5rem;border-width:0.3rem;border-style:solid;border-radius:0.8rem}.graph-container.svelte-1d7myx7{position:relative;display:flex;width:30rem;height:22rem;margin-bottom:0.2rem}.message-container.svelte-1d7myx7{display:flex;flex-direction:column;flex:1;justify-content:flex-end}.data-row.svelte-1d7myx7{display:flex;flex-direction:row;align-items:baseline}.data-label.svelte-1d7myx7{font-size:0.9em;color:#aaa;width:2rem;margin-right:0.4rem;text-align:right}");
}
function Vt(n) {
  let e, l, t = n[0].title + "", i, s, a = n[0].subtitle && It(n);
  return {
    c() {
      e = h("div"), l = h("div"), a && a.c(), p(l, "class", "title svelte-1d7myx7"), p(e, "class", "title-row no-selection svelte-1d7myx7");
    },
    m(o, r) {
      y(o, e, r), b(e, l), l.innerHTML = t, a && a.m(e, null), i || (s = re(l, "click", n[4]), i = !0);
    },
    p(o, r) {
      r & 1 && t !== (t = o[0].title + "") && (l.innerHTML = t), o[0].subtitle ? a ? a.p(o, r) : (a = It(o), a.c(), a.m(e, null)) : a && (a.d(1), a = null);
    },
    d(o) {
      o && $(e), a && a.d(), i = !1, s();
    }
  };
}
function It(n) {
  let e, l = n[0].subtitle + "";
  return {
    c() {
      e = h("div"), p(e, "class", "subtitle svelte-1d7myx7");
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p(t, i) {
      i & 1 && l !== (l = t[0].subtitle + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function zt(n) {
  let e, l, t, i, s, a;
  t = new In({
    props: {
      viewModel: n[3].comparisonGraphViewModel,
      width: "30",
      height: "22"
    }
  });
  function o(c, d) {
    return c[3].message ? Zi : Xi;
  }
  let r = o(n), f = r(n);
  return {
    c() {
      e = h("div"), l = h("div"), q(t.$$.fragment), i = h("div"), f.c(), p(l, "class", "graph-container svelte-1d7myx7"), p(i, "class", "message-container svelte-1d7myx7"), p(e, "class", s = "content " + n[3].bucketClass + " svelte-1d7myx7");
    },
    m(c, d) {
      y(c, e, d), b(e, l), z(t, l, null), b(e, i), f.m(i, null), a = !0;
    },
    p(c, d) {
      const u = {};
      d & 8 && (u.viewModel = c[3].comparisonGraphViewModel), t.$set(u), r === (r = o(c)) && f ? f.p(c, d) : (f.d(1), f = r(c), f && (f.c(), f.m(i, null))), (!a || d & 8 && s !== (s = "content " + c[3].bucketClass + " svelte-1d7myx7")) && p(e, "class", s);
    },
    i(c) {
      a || (g(t.$$.fragment, c), a = !0);
    },
    o(c) {
      w(t.$$.fragment, c), a = !1;
    },
    d(c) {
      c && $(e), j(t), f.d();
    }
  };
}
function Xi(n) {
  let e, l, t, i = De(n[3].diffReport.avgDiff) + "", s, a, o, r, f = De(n[3].diffReport.minDiff) + "", c, d, u, m, v = De(n[3].diffReport.maxDiff) + "", _, k = n[3].diffReport.maxDiffPoint && jt(n);
  return {
    c() {
      e = h("div"), l = h("div"), l.textContent = "avg", t = h("div"), s = I(i), a = h("div"), o = h("div"), o.textContent = "min", r = h("div"), c = I(f), d = h("div"), u = h("div"), u.textContent = "max", m = h("div"), _ = I(v), k && k.c(), p(l, "class", "data-label svelte-1d7myx7"), p(t, "class", "data-value"), p(e, "class", "data-row svelte-1d7myx7"), p(o, "class", "data-label svelte-1d7myx7"), p(r, "class", "data-value"), p(a, "class", "data-row svelte-1d7myx7"), p(u, "class", "data-label svelte-1d7myx7"), p(m, "class", "data-value"), p(d, "class", "data-row svelte-1d7myx7");
    },
    m(M, R) {
      y(M, e, R), b(e, l), b(e, t), b(t, s), y(M, a, R), b(a, o), b(a, r), b(r, c), y(M, d, R), b(d, u), b(d, m), b(m, _), k && k.m(d, null);
    },
    p(M, R) {
      R & 8 && i !== (i = De(M[3].diffReport.avgDiff) + "") && G(s, i), R & 8 && f !== (f = De(M[3].diffReport.minDiff) + "") && G(c, f), R & 8 && v !== (v = De(M[3].diffReport.maxDiff) + "") && G(_, v), M[3].diffReport.maxDiffPoint ? k ? k.p(M, R) : (k = jt(M), k.c(), k.m(d, null)) : k && (k.d(1), k = null);
    },
    d(M) {
      M && $(e), M && $(a), M && $(d), k && k.d();
    }
  };
}
function Zi(n) {
  let e, l = n[3].message + "";
  return {
    c() {
      e = h("div"), p(e, "class", "message");
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p(t, i) {
      i & 8 && l !== (l = t[3].message + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function jt(n) {
  let e, l, t = Ee(n[3].diffReport.maxDiffPoint.valueL) + "", i, s, a, o = Ee(n[3].diffReport.maxDiffPoint.valueR) + "", r, f, c, d = n[3].diffReport.maxDiffPoint.time + "", u;
  return {
    c() {
      e = h("div"), e.textContent = "\xA0(", l = h("div"), i = I(t), s = h("div"), s.textContent = "\xA0|\xA0", a = h("div"), r = I(o), f = h("div"), c = I(") at "), u = I(d), p(e, "class", "data-value"), p(l, "class", "data-value dataset-color-0"), p(s, "class", "data-value"), p(a, "class", "data-value dataset-color-1"), p(f, "class", "data-value");
    },
    m(m, v) {
      y(m, e, v), y(m, l, v), b(l, i), y(m, s, v), y(m, a, v), b(a, r), y(m, f, v), b(f, c), b(f, u);
    },
    p(m, v) {
      v & 8 && t !== (t = Ee(m[3].diffReport.maxDiffPoint.valueL) + "") && G(i, t), v & 8 && o !== (o = Ee(m[3].diffReport.maxDiffPoint.valueR) + "") && G(r, o), v & 8 && d !== (d = m[3].diffReport.maxDiffPoint.time + "") && G(u, d);
    },
    d(m) {
      m && $(e), m && $(l), m && $(s), m && $(a), m && $(f);
    }
  };
}
function Ji(n) {
  let e, l, t = n[3] && zt(n);
  return {
    c() {
      t && t.c(), e = A();
    },
    m(i, s) {
      t && t.m(i, s), y(i, e, s), l = !0;
    },
    p(i, s) {
      i[3] ? t ? (t.p(i, s), s & 8 && g(t, 1)) : (t = zt(i), t.c(), g(t, 1), t.m(e.parentNode, e)) : t && (B(), w(t, 1, 1, () => {
        t = null;
      }), x());
    },
    i(i) {
      l || (g(t), l = !0);
    },
    o(i) {
      w(t), l = !1;
    },
    d(i) {
      t && t.d(i), i && $(e);
    }
  };
}
function Qi(n) {
  let e, l, t, i, s, a = n[0].title && Vt(n);
  function o(f) {
    n[7](f);
  }
  let r = {
    $$slots: { default: [Ji] },
    $$scope: { ctx: n }
  };
  return n[1] !== void 0 && (r.visible = n[1]), t = new ht({ props: r }), be.push(() => mt(t, "visible", o)), {
    c() {
      e = h("div"), a && a.c(), l = h("div"), q(t.$$.fragment), p(l, "class", "content-container svelte-1d7myx7"), p(e, "class", "detail-box svelte-1d7myx7");
    },
    m(f, c) {
      y(f, e, c), a && a.m(e, null), b(e, l), z(t, l, null), s = !0;
    },
    p(f, [c]) {
      f[0].title ? a ? a.p(f, c) : (a = Vt(f), a.c(), a.m(e, l)) : a && (a.d(1), a = null);
      const d = {};
      c & 520 && (d.$$scope = { dirty: c, ctx: f }), !i && c & 2 && (i = !0, d.visible = f[1], dt(() => i = !1)), t.$set(d);
    },
    i(f) {
      s || (g(t.$$.fragment, f), s = !0);
    },
    o(f) {
      w(t.$$.fragment, f), s = !1;
    },
    d(f) {
      f && $(e), a && a.d(), j(t);
    }
  };
}
function De(n) {
  return n != null ? `${n.toFixed(2)}%` : "n/a";
}
function Ee(n) {
  return n != null ? n.toFixed(4) : "undefined";
}
function Yi(n, e, l) {
  let t, i = W, s = () => (i(), i = Ie(o, (v) => l(3, t = v)), o);
  n.$$.on_destroy.push(() => i());
  let { viewModel: a } = e, o = a.content;
  s();
  let r = !1, f = r, c;
  const d = ze();
  function u() {
    d("toggle");
  }
  function m(v) {
    r = v, l(1, r);
  }
  return n.$$set = (v) => {
    "viewModel" in v && l(0, a = v.viewModel);
  }, n.$$.update = () => {
    n.$$.dirty & 99 && (r !== f || a.requestKey !== (c == null ? void 0 : c.requestKey)) && (c == null || c.clearData(), l(5, f = r), l(6, c = a), s(l(2, o = a.content)), r && a.requestData());
  }, [
    a,
    r,
    o,
    t,
    u,
    f,
    c,
    m
  ];
}
class Je extends Y {
  constructor(e) {
    super(), Q(this, e, Yi, Qi, X, { viewModel: 0 }, Ui);
  }
}
function es(n) {
  ne(n, "svelte-1sac0ts", ".detail-row.svelte-1sac0ts{display:flex;flex-direction:column}.title-row.svelte-1sac0ts{display:flex;flex-direction:row;align-items:baseline;margin-bottom:0.5rem}.title.svelte-1sac0ts{margin-right:0.8rem;font-size:1.6em;font-weight:700}.subtitle.svelte-1sac0ts{font-size:1.3em;color:#aaa}.subtitle.svelte-1sac0ts .subtitle-sep{color:#666}.boxes.svelte-1sac0ts{display:flex;flex-direction:row;flex:1}.box-container.svelte-1sac0ts{width:31.6rem;height:29rem}.box-container.dimmed.svelte-1sac0ts{opacity:0.2}.spacer-flex.svelte-1sac0ts{flex:1}.context-graphs-container.svelte-1sac0ts{display:inline-flex;flex-direction:column;margin-top:1rem;background-color:#555}.context-graph-row.svelte-1sac0ts{display:flex;flex-direction:row;margin:1rem 0}.context-graph-spacer.svelte-1sac0ts{flex:0 0 2rem}");
}
function Pt(n, e, l) {
  const t = n.slice();
  return t[7] = e[l], t;
}
function qt(n) {
  let e, l, t = n[0].title + "", i, s = n[0].subtitle && Nt(n);
  return {
    c() {
      e = h("div"), l = h("div"), i = I(t), s && s.c(), p(l, "class", "title svelte-1sac0ts"), p(e, "class", "title-row svelte-1sac0ts");
    },
    m(a, o) {
      y(a, e, o), b(e, l), b(l, i), s && s.m(e, null);
    },
    p(a, o) {
      o & 1 && t !== (t = a[0].title + "") && G(i, t), a[0].subtitle ? s ? s.p(a, o) : (s = Nt(a), s.c(), s.m(e, null)) : s && (s.d(1), s = null);
    },
    d(a) {
      a && $(e), s && s.d();
    }
  };
}
function Nt(n) {
  let e, l = n[0].subtitle + "";
  return {
    c() {
      e = h("div"), p(e, "class", "subtitle svelte-1sac0ts");
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p(t, i) {
      i & 1 && l !== (l = t[0].subtitle + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function Bt(n) {
  let e, l;
  return e = new Je({
    props: { viewModel: n[0].boxes[0] }
  }), e.$on("toggle", n[4]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & 1 && (s.viewModel = t[0].boxes[0]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function xt(n) {
  let e, l;
  return e = new Je({
    props: { viewModel: n[0].boxes[1] }
  }), e.$on("toggle", n[5]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & 1 && (s.viewModel = t[0].boxes[1]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function Kt(n) {
  let e, l;
  return e = new Je({
    props: { viewModel: n[0].boxes[2] }
  }), e.$on("toggle", n[6]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & 1 && (s.viewModel = t[0].boxes[2]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function Wt(n) {
  let e, l, t = n[2] && Gt(n);
  return {
    c() {
      e = h("div"), t && t.c(), p(e, "class", "context-graphs-container svelte-1sac0ts");
    },
    m(i, s) {
      y(i, e, s), t && t.m(e, null), l = !0;
    },
    p(i, s) {
      i[2] ? t ? (t.p(i, s), s & 4 && g(t, 1)) : (t = Gt(i), t.c(), g(t, 1), t.m(e, null)) : t && (B(), w(t, 1, 1, () => {
        t = null;
      }), x());
    },
    i(i) {
      l || (g(t), l = !0);
    },
    o(i) {
      w(t), l = !1;
    },
    d(i) {
      i && $(e), t && t.d();
    }
  };
}
function Gt(n) {
  let e, l, t = n[2], i = [];
  for (let a = 0; a < t.length; a += 1)
    i[a] = Et(Pt(n, t, a));
  const s = (a) => w(i[a], 1, 1, () => {
    i[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < i.length; a += 1)
        i[a].c();
      e = A();
    },
    m(a, o) {
      for (let r = 0; r < i.length; r += 1)
        i[r].m(a, o);
      y(a, e, o), l = !0;
    },
    p(a, o) {
      if (o & 4) {
        t = a[2];
        let r;
        for (r = 0; r < t.length; r += 1) {
          const f = Pt(a, t, r);
          i[r] ? (i[r].p(f, o), g(i[r], 1)) : (i[r] = Et(f), i[r].c(), g(i[r], 1), i[r].m(e.parentNode, e));
        }
        for (B(), r = t.length; r < i.length; r += 1)
          s(r);
        x();
      }
    },
    i(a) {
      if (!l) {
        for (let o = 0; o < t.length; o += 1)
          g(i[o]);
        l = !0;
      }
    },
    o(a) {
      i = i.filter(Boolean);
      for (let o = 0; o < i.length; o += 1)
        w(i[o]);
      l = !1;
    },
    d(a) {
      O(i, a), a && $(e);
    }
  };
}
function Et(n) {
  let e, l, t, i, s, a, o;
  return t = new Ue({
    props: {
      viewModel: n[7].graphL
    }
  }), s = new Ue({
    props: {
      viewModel: n[7].graphR
    }
  }), {
    c() {
      e = h("div"), l = h("div"), q(t.$$.fragment), i = h("div"), q(s.$$.fragment), a = h("div"), p(l, "class", "spacer-flex svelte-1sac0ts"), p(i, "class", "context-graph-spacer svelte-1sac0ts"), p(a, "class", "spacer-flex svelte-1sac0ts"), p(e, "class", "context-graph-row svelte-1sac0ts");
    },
    m(r, f) {
      y(r, e, f), b(e, l), z(t, e, null), b(e, i), z(s, e, null), b(e, a), o = !0;
    },
    p(r, f) {
      const c = {};
      f & 4 && (c.viewModel = r[7].graphL), t.$set(c);
      const d = {};
      f & 4 && (d.viewModel = r[7].graphR), s.$set(d);
    },
    i(r) {
      o || (g(t.$$.fragment, r), g(s.$$.fragment, r), o = !0);
    },
    o(r) {
      w(t.$$.fragment, r), w(s.$$.fragment, r), o = !1;
    },
    d(r) {
      r && $(e), j(t), j(s);
    }
  };
}
function ts(n) {
  let e, l, t, i, s, a, o, r, f = n[0].showTitle && qt(n), c = n[0].boxes[0] && Bt(n), d = n[0].boxes[1] && xt(n), u = n[0].boxes[2] && Kt(n), m = n[1] !== void 0 && Wt(n);
  return {
    c() {
      e = h("div"), f && f.c(), l = h("div"), t = h("div"), c && c.c(), i = h("div"), s = h("div"), d && d.c(), a = h("div"), o = h("div"), u && u.c(), m && m.c(), p(t, "class", "box-container svelte-1sac0ts"), pe(t, "dimmed", Te(0, n[1])), p(i, "class", "spacer-flex svelte-1sac0ts"), p(s, "class", "box-container svelte-1sac0ts"), pe(s, "dimmed", Te(1, n[1])), p(a, "class", "spacer-flex svelte-1sac0ts"), p(o, "class", "box-container svelte-1sac0ts"), pe(o, "dimmed", Te(2, n[1])), p(l, "class", "boxes svelte-1sac0ts"), p(e, "class", "detail-row svelte-1sac0ts");
    },
    m(v, _) {
      y(v, e, _), f && f.m(e, null), b(e, l), b(l, t), c && c.m(t, null), b(l, i), b(l, s), d && d.m(s, null), b(l, a), b(l, o), u && u.m(o, null), m && m.m(e, null), r = !0;
    },
    p(v, [_]) {
      v[0].showTitle ? f ? f.p(v, _) : (f = qt(v), f.c(), f.m(e, l)) : f && (f.d(1), f = null), v[0].boxes[0] ? c ? (c.p(v, _), _ & 1 && g(c, 1)) : (c = Bt(v), c.c(), g(c, 1), c.m(t, null)) : c && (B(), w(c, 1, 1, () => {
        c = null;
      }), x()), _ & 2 && pe(t, "dimmed", Te(0, v[1])), v[0].boxes[1] ? d ? (d.p(v, _), _ & 1 && g(d, 1)) : (d = xt(v), d.c(), g(d, 1), d.m(s, null)) : d && (B(), w(d, 1, 1, () => {
        d = null;
      }), x()), _ & 2 && pe(s, "dimmed", Te(1, v[1])), v[0].boxes[2] ? u ? (u.p(v, _), _ & 1 && g(u, 1)) : (u = Kt(v), u.c(), g(u, 1), u.m(o, null)) : u && (B(), w(u, 1, 1, () => {
        u = null;
      }), x()), _ & 2 && pe(o, "dimmed", Te(2, v[1])), v[1] !== void 0 ? m ? (m.p(v, _), _ & 2 && g(m, 1)) : (m = Wt(v), m.c(), g(m, 1), m.m(e, null)) : m && (B(), w(m, 1, 1, () => {
        m = null;
      }), x());
    },
    i(v) {
      r || (g(c), g(d), g(u), g(m), r = !0);
    },
    o(v) {
      w(c), w(d), w(u), w(m), r = !1;
    },
    d(v) {
      v && $(e), f && f.d(), c && c.d(), d && d.d(), u && u.d(), m && m.d();
    }
  };
}
function Te(n, e) {
  return e !== void 0 && n !== e;
}
function ls(n, e, l) {
  let { viewModel: t } = e, i, s;
  function a(c) {
    c === i ? (l(1, i = void 0), l(2, s = void 0)) : (l(1, i = c), l(2, s = Wi(t.boxes[c])));
  }
  const o = () => a(0), r = () => a(1), f = () => a(2);
  return n.$$set = (c) => {
    "viewModel" in c && l(0, t = c.viewModel);
  }, n.$$.update = () => {
    n.$$.dirty & 1 && t && (l(1, i = void 0), l(2, s = void 0));
  }, [
    t,
    i,
    s,
    a,
    o,
    r,
    f
  ];
}
class ns extends Y {
  constructor(e) {
    super(), Q(this, e, ls, ts, X, { viewModel: 0 }, es);
  }
}
function is(n) {
  ne(n, "svelte-4p3lgl", '.dataset-container.svelte-4p3lgl{display:flex;flex:1;flex-direction:column}.dataset-row.svelte-4p3lgl{display:flex;flex:1;align-items:baseline;margin-left:0.6rem;cursor:pointer}.dataset-row.svelte-4p3lgl:hover{background-color:rgba(255, 255, 255, 0.05)}.dataset-arrow.svelte-4p3lgl{color:#777}.legend-item.svelte-4p3lgl{font-family:"Roboto Condensed";font-weight:700;font-size:1rem;margin:0.2rem 0.4rem;padding:0.25rem 0.6rem 0.2rem 0.6rem;color:#fff;text-align:center}.detail-box-container.svelte-4p3lgl{display:flex;flex:1;margin-top:0.2rem;margin-bottom:0.8rem;margin-left:0.4rem}');
}
function ss(n) {
  let e, l = n[7].toUpperCase() + "";
  return {
    c() {
      e = h("div"), p(e, "class", "legend-item svelte-4p3lgl"), se(e, "background-color", n[5]);
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p: W,
    d(t) {
      t && $(e);
    }
  };
}
function os(n) {
  let e, l = n[6].toUpperCase() + "";
  return {
    c() {
      e = h("div"), p(e, "class", "legend-item svelte-4p3lgl"), se(e, "background-color", n[4]);
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p: W,
    d(t) {
      t && $(e);
    }
  };
}
function rs(n) {
  let e, l;
  return {
    c() {
      e = h("div"), l = I(n[3]), p(e, "class", "dataset-name " + n[8] + " svelte-4p3lgl");
    },
    m(t, i) {
      y(t, e, i), b(e, l);
    },
    p: W,
    d(t) {
      t && $(e);
    }
  };
}
function as(n) {
  let e, l;
  return {
    c() {
      e = h("div"), l = I(n[2]), p(e, "class", "dataset-name " + n[8] + " svelte-4p3lgl");
    },
    m(t, i) {
      y(t, e, i), b(e, l);
    },
    p: W,
    d(t) {
      t && $(e);
    }
  };
}
function cs(n) {
  let e, l, t, i, s;
  return {
    c() {
      e = h("div"), l = I(n[2]), t = h("span"), t.textContent = "\xA0->\xA0", i = h("div"), s = I(n[3]), p(e, "class", "dataset-name " + n[8] + " svelte-4p3lgl"), p(t, "class", "dataset-arrow svelte-4p3lgl"), p(i, "class", "dataset-name " + n[8] + " svelte-4p3lgl");
    },
    m(a, o) {
      y(a, e, o), b(e, l), y(a, t, o), y(a, i, o), b(i, s);
    },
    p: W,
    d(a) {
      a && $(e), a && $(t), a && $(i);
    }
  };
}
function Ft(n) {
  let e, l, t;
  return l = new Je({
    props: {
      viewModel: n[0].detailBoxViewModel
    }
  }), {
    c() {
      e = h("div"), q(l.$$.fragment), p(e, "class", "detail-box-container svelte-4p3lgl");
    },
    m(i, s) {
      y(i, e, s), z(l, e, null), t = !0;
    },
    p(i, s) {
      const a = {};
      s & 1 && (a.viewModel = i[0].detailBoxViewModel), l.$set(a);
    },
    i(i) {
      t || (g(l.$$.fragment, i), t = !0);
    },
    o(i) {
      w(l.$$.fragment, i), t = !1;
    },
    d(i) {
      i && $(e), j(l);
    }
  };
}
function fs(n) {
  let e, l, t, i, s, a;
  function o(v, _) {
    if (v[6] && !v[7])
      return os;
    if (v[7])
      return ss;
  }
  let r = o(n), f = r && r(n);
  function c(v, _) {
    if (v[2] && v[3] && v[2] !== v[3])
      return cs;
    if (v[2] && !v[3])
      return as;
    if (v[3])
      return rs;
  }
  let d = c(n), u = d && d(n), m = n[1] && Ft(n);
  return {
    c() {
      e = h("div"), l = h("div"), f && f.c(), t = A(), u && u.c(), m && m.c(), p(l, "class", "dataset-row svelte-4p3lgl"), p(e, "class", "dataset-container svelte-4p3lgl");
    },
    m(v, _) {
      y(v, e, _), b(e, l), f && f.m(l, null), b(l, t), u && u.m(l, null), m && m.m(e, null), i = !0, s || (a = re(l, "click", n[10]), s = !0);
    },
    p(v, [_]) {
      f && f.p(v, _), u && u.p(v, _), v[1] ? m ? (m.p(v, _), _ & 2 && g(m, 1)) : (m = Ft(v), m.c(), g(m, 1), m.m(e, null)) : m && (B(), w(m, 1, 1, () => {
        m = null;
      }), x());
    },
    i(v) {
      i || (g(m), i = !0);
    },
    o(v) {
      w(m), i = !1;
    },
    d(v) {
      v && $(e), f && f.d(), u && u.d(), m && m.d(), s = !1, a();
    }
  };
}
function ds(n, e, l) {
  let t, { viewModel: i } = e;
  const s = i.nameL, a = i.nameR, o = i.legendColorL, r = i.legendColorR, f = i.legendLabelL, c = i.legendLabelR, d = i.bucketClass, u = i.detailBoxVisible;
  ge(n, u, (v) => l(1, t = v));
  function m() {
    u.update((v) => !v);
  }
  return n.$$set = (v) => {
    "viewModel" in v && l(0, i = v.viewModel);
  }, [
    i,
    t,
    s,
    a,
    o,
    r,
    f,
    c,
    d,
    u,
    m
  ];
}
class us extends Y {
  constructor(e) {
    super(), Q(this, e, ds, fs, X, { viewModel: 0 }, is);
  }
}
function ms(n) {
  ne(n, "svelte-1scaj70", ".graphs-row.svelte-1scaj70{display:flex;flex-direction:row;flex:1}.spacer-flex.svelte-1scaj70{flex:1}.spacer-fixed.svelte-1scaj70{flex:0 0 2rem}.content.svelte-1scaj70{display:flex;flex-direction:column;flex:1}.graphs-container.svelte-1scaj70{display:flex;flex-direction:row}.metadata-container.svelte-1scaj70{display:flex;flex-direction:column}.metadata-header.svelte-1scaj70{margin-top:0.6rem}.metadata-row.svelte-1scaj70{display:flex;flex-direction:row}.metadata-row.svelte-1scaj70:hover{background-color:rgba(255, 255, 255, 0.05)}.metadata-col.svelte-1scaj70{display:flex;width:38rem;align-items:baseline}.metadata-key.svelte-1scaj70{color:#aaa;font-size:0.8em;margin-left:1rem}");
}
function Ht(n, e, l) {
  const t = n.slice();
  return t[2] = e[l], t;
}
function At(n, e, l) {
  const t = n.slice();
  return t[2] = e[l], t;
}
function Ot(n) {
  let e;
  return {
    c() {
      e = h("div"), p(e, "class", "spacer-flex svelte-1scaj70");
    },
    m(l, t) {
      y(l, e, t);
    },
    d(l) {
      l && $(e);
    }
  };
}
function Ut(n) {
  let e, l, t = n[0].metadataRows, i = [];
  for (let s = 0; s < t.length; s += 1)
    i[s] = Xt(At(n, t, s));
  return {
    c() {
      e = h("div"), e.textContent = "Metadata differences:";
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      l = A(), p(e, "class", "metadata-header svelte-1scaj70");
    },
    m(s, a) {
      y(s, e, a);
      for (let o = 0; o < i.length; o += 1)
        i[o].m(s, a);
      y(s, l, a);
    },
    p(s, a) {
      if (a & 1) {
        t = s[0].metadataRows;
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = At(s, t, o);
          i[o] ? i[o].p(r, a) : (i[o] = Xt(r), i[o].c(), i[o].m(l.parentNode, l));
        }
        for (; o < i.length; o += 1)
          i[o].d(1);
        i.length = t.length;
      }
    },
    d(s) {
      s && $(e), O(i, s), s && $(l);
    }
  };
}
function Xt(n) {
  let e, l, t, i = n[2].key + "", s, a, o, r = (n[2].valueL || "n/a") + "", f, c, d, u, m = n[2].key + "", v, _, k, M = (n[2].valueR || "n/a") + "", R;
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), s = I(i), a = h("span"), a.textContent = "\xA0", o = h("div"), f = I(r), c = h("div"), d = h("div"), u = h("div"), v = I(m), _ = h("span"), _.textContent = "\xA0", k = h("div"), R = I(M), p(t, "class", "metadata-key svelte-1scaj70"), p(o, "class", "metadata-value"), p(l, "class", "metadata-col svelte-1scaj70"), p(c, "class", "spacer-fixed svelte-1scaj70"), p(u, "class", "metadata-key svelte-1scaj70"), p(k, "class", "metadata-value"), p(d, "class", "metadata-col svelte-1scaj70"), p(e, "class", "metadata-row svelte-1scaj70");
    },
    m(S, C) {
      y(S, e, C), b(e, l), b(l, t), b(t, s), b(l, a), b(l, o), b(o, f), b(e, c), b(e, d), b(d, u), b(u, v), b(d, _), b(d, k), b(k, R);
    },
    p(S, C) {
      C & 1 && i !== (i = S[2].key + "") && G(s, i), C & 1 && r !== (r = (S[2].valueL || "n/a") + "") && G(f, r), C & 1 && m !== (m = S[2].key + "") && G(v, m), C & 1 && M !== (M = (S[2].valueR || "n/a") + "") && G(R, M);
    },
    d(S) {
      S && $(e);
    }
  };
}
function Zt(n) {
  let e, l, t, i = n[0].datasetRows, s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = Jt(Ht(n, i, o));
  const a = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), e.textContent = "Dataset differences:";
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      l = A(), p(e, "class", "metadata-header svelte-1scaj70");
    },
    m(o, r) {
      y(o, e, r);
      for (let f = 0; f < s.length; f += 1)
        s[f].m(o, r);
      y(o, l, r), t = !0;
    },
    p(o, r) {
      if (r & 1) {
        i = o[0].datasetRows;
        let f;
        for (f = 0; f < i.length; f += 1) {
          const c = Ht(o, i, f);
          s[f] ? (s[f].p(c, r), g(s[f], 1)) : (s[f] = Jt(c), s[f].c(), g(s[f], 1), s[f].m(l.parentNode, l));
        }
        for (B(), f = i.length; f < s.length; f += 1)
          a(f);
        x();
      }
    },
    i(o) {
      if (!t) {
        for (let r = 0; r < i.length; r += 1)
          g(s[r]);
        t = !0;
      }
    },
    o(o) {
      s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        w(s[r]);
      t = !1;
    },
    d(o) {
      o && $(e), O(s, o), o && $(l);
    }
  };
}
function Jt(n) {
  let e, l;
  return e = new us({ props: { viewModel: n[2] } }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & 1 && (s.viewModel = t[2]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function Qt(n) {
  let e;
  return {
    c() {
      e = h("div"), p(e, "class", "spacer-flex svelte-1scaj70");
    },
    m(l, t) {
      y(l, e, t);
    },
    d(l) {
      l && $(e);
    }
  };
}
function hs(n) {
  let e, l, t, i, s, a, o, r, f, c = n[0].graphId + "", d, u, m, v = n[1] === "center" && Ot();
  i = new Ue({
    props: { viewModel: n[0].graphL }
  }), a = new Ue({
    props: { viewModel: n[0].graphR }
  });
  let _ = n[0].metadataRows.length > 0 && Ut(n), k = n[0].datasetRows.length > 0 && Zt(n), M = n[1] === "center" && Qt();
  return {
    c() {
      e = h("div"), v && v.c(), l = h("div"), t = h("div"), q(i.$$.fragment), s = h("div"), q(a.$$.fragment), o = h("div"), r = h("div"), f = I("id "), d = I(c), _ && _.c(), u = A(), k && k.c(), M && M.c(), p(s, "class", "spacer-fixed svelte-1scaj70"), p(t, "class", "graphs-container svelte-1scaj70"), p(r, "class", "metadata-header svelte-1scaj70"), p(o, "class", "metadata-container svelte-1scaj70"), p(l, "class", "content svelte-1scaj70"), p(e, "class", "graphs-row svelte-1scaj70");
    },
    m(R, S) {
      y(R, e, S), v && v.m(e, null), b(e, l), b(l, t), z(i, t, null), b(t, s), z(a, t, null), b(l, o), b(o, r), b(r, f), b(r, d), _ && _.m(o, null), b(o, u), k && k.m(o, null), M && M.m(e, null), m = !0;
    },
    p(R, [S]) {
      R[1] === "center" ? v || (v = Ot(), v.c(), v.m(e, l)) : v && (v.d(1), v = null);
      const C = {};
      S & 1 && (C.viewModel = R[0].graphL), i.$set(C);
      const L = {};
      S & 1 && (L.viewModel = R[0].graphR), a.$set(L), (!m || S & 1) && c !== (c = R[0].graphId + "") && G(d, c), R[0].metadataRows.length > 0 ? _ ? _.p(R, S) : (_ = Ut(R), _.c(), _.m(o, u)) : _ && (_.d(1), _ = null), R[0].datasetRows.length > 0 ? k ? (k.p(R, S), S & 1 && g(k, 1)) : (k = Zt(R), k.c(), g(k, 1), k.m(o, null)) : k && (B(), w(k, 1, 1, () => {
        k = null;
      }), x()), R[1] === "center" ? M || (M = Qt(), M.c(), M.m(e, null)) : M && (M.d(1), M = null);
    },
    i(R) {
      m || (g(i.$$.fragment, R), g(a.$$.fragment, R), g(k), m = !0);
    },
    o(R) {
      w(i.$$.fragment, R), w(a.$$.fragment, R), w(k), m = !1;
    },
    d(R) {
      R && $(e), v && v.d(), j(i), j(a), _ && _.d(), k && k.d(), M && M.d();
    }
  };
}
function ps(n, e, l) {
  let { viewModel: t } = e, { align: i = "center" } = e;
  return n.$$set = (s) => {
    "viewModel" in s && l(0, t = s.viewModel), "align" in s && l(1, i = s.align);
  }, [t, i];
}
class vs extends Y {
  constructor(e) {
    super(), Q(this, e, ps, hs, X, { viewModel: 0, align: 1 }, ms);
  }
}
function _s(n) {
  ne(n, "svelte-f61lok", ".compare-detail-container.svelte-f61lok{display:flex;flex-direction:column;flex:1}.header-container.svelte-f61lok{display:flex;flex-direction:column;margin:0 -1rem;padding:0 2rem;box-shadow:0 1rem 0.5rem -0.5rem rgba(0, 0, 0, 0.5);z-index:1}.title-and-links.svelte-f61lok{display:flex;flex-direction:row;align-items:center;height:4.5rem}.spacer-flex.svelte-f61lok{flex:1}.nav-links.svelte-f61lok{display:flex;flex-direction:row;font-size:0.8em}.nav-link-sep.svelte-f61lok{color:#444}.nav-link.svelte-f61lok{cursor:pointer;color:#777}.nav-link.disabled.svelte-f61lok{cursor:not-allowed;color:#555}.title-container.svelte-f61lok{display:flex;flex-direction:column}.pretitle.svelte-f61lok{margin-bottom:0.2rem;font-size:0.9em;font-weight:700;color:#aaa}.title-and-subtitle.svelte-f61lok{display:flex;flex-direction:row;align-items:baseline}.title.svelte-f61lok{margin-bottom:0.4rem;font-size:2em;font-weight:700;cursor:pointer}.subtitle.svelte-f61lok{font-size:1.2em;font-weight:700;margin-left:1.2rem;color:#aaa}.annotations.svelte-f61lok{margin-left:0.3rem;color:#aaa}.annotations.svelte-f61lok .annotation{margin:0 0.3rem;padding:0.1rem 0.3rem;background-color:#222;border:0.5px solid #555;border-radius:0.4rem}.related.svelte-f61lok{font-size:1em;color:#aaa;margin-bottom:0.6rem}ul.svelte-f61lok{margin:0.1rem 0;padding-left:2rem}.related.svelte-f61lok .related-sep{color:#666}.scroll-container.svelte-f61lok{display:flex;flex:1 1 1px;flex-direction:column;overflow:auto;padding:0 1rem;outline:none;background-color:#3c3c3c}.section-title.svelte-f61lok{font-size:1.7em;font-weight:700;margin-top:2.5rem;margin-bottom:1.5rem}.row-container.svelte-f61lok{margin-top:0.5rem;margin-bottom:4rem}.row-container.svelte-f61lok:first-child{margin-top:3rem}");
}
function Yt(n, e, l) {
  const t = n.slice();
  return t[10] = e[l], t;
}
function el(n, e, l) {
  const t = n.slice();
  return t[13] = e[l], t;
}
function tl(n, e, l) {
  const t = n.slice();
  return t[16] = e[l], t;
}
function ll(n, e, l) {
  const t = n.slice();
  return t[19] = e[l], t;
}
function nl(n) {
  let e, l = n[0].pretitle + "";
  return {
    c() {
      e = h("div"), p(e, "class", "pretitle svelte-f61lok");
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p(t, i) {
      i & 1 && l !== (l = t[0].pretitle + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function il(n) {
  let e, l = n[0].subtitle + "";
  return {
    c() {
      e = h("div"), p(e, "class", "subtitle svelte-f61lok");
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p(t, i) {
      i & 1 && l !== (l = t[0].subtitle + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function sl(n) {
  let e, l = n[0].annotations + "";
  return {
    c() {
      e = h("div"), p(e, "class", "annotations svelte-f61lok");
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p(t, i) {
      i & 1 && l !== (l = t[0].annotations + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function ol(n) {
  let e, l, t = n[0].relatedListHeader + "", i, s, a = n[0].relatedItems, o = [];
  for (let r = 0; r < a.length; r += 1)
    o[r] = rl(ll(n, a, r));
  return {
    c() {
      e = h("div"), l = h("span"), i = I(t), s = h("ul");
      for (let r = 0; r < o.length; r += 1)
        o[r].c();
      p(s, "class", "svelte-f61lok"), p(e, "class", "related svelte-f61lok");
    },
    m(r, f) {
      y(r, e, f), b(e, l), b(l, i), b(e, s);
      for (let c = 0; c < o.length; c += 1)
        o[c].m(s, null);
    },
    p(r, f) {
      if (f & 1 && t !== (t = r[0].relatedListHeader + "") && G(i, t), f & 1) {
        a = r[0].relatedItems;
        let c;
        for (c = 0; c < a.length; c += 1) {
          const d = ll(r, a, c);
          o[c] ? o[c].p(d, f) : (o[c] = rl(d), o[c].c(), o[c].m(s, null));
        }
        for (; c < o.length; c += 1)
          o[c].d(1);
        o.length = a.length;
      }
    },
    d(r) {
      r && $(e), O(o, r);
    }
  };
}
function rl(n) {
  let e, l = n[19] + "";
  return {
    c() {
      e = h("li"), p(e, "class", "related-item");
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p(t, i) {
      i & 1 && l !== (l = t[19] + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function al(n) {
  let e, l, t = n[0].graphSections, i = [];
  for (let a = 0; a < t.length; a += 1)
    i[a] = dl(el(n, t, a));
  const s = (a) => w(i[a], 1, 1, () => {
    i[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < i.length; a += 1)
        i[a].c();
      e = h("div"), e.textContent = "All Datasets", p(e, "class", "section-title svelte-f61lok");
    },
    m(a, o) {
      for (let r = 0; r < i.length; r += 1)
        i[r].m(a, o);
      y(a, e, o), l = !0;
    },
    p(a, o) {
      if (o & 1) {
        t = a[0].graphSections;
        let r;
        for (r = 0; r < t.length; r += 1) {
          const f = el(a, t, r);
          i[r] ? (i[r].p(f, o), g(i[r], 1)) : (i[r] = dl(f), i[r].c(), g(i[r], 1), i[r].m(e.parentNode, e));
        }
        for (B(), r = t.length; r < i.length; r += 1)
          s(r);
        x();
      }
    },
    i(a) {
      if (!l) {
        for (let o = 0; o < t.length; o += 1)
          g(i[o]);
        l = !0;
      }
    },
    o(a) {
      i = i.filter(Boolean);
      for (let o = 0; o < i.length; o += 1)
        w(i[o]);
      l = !1;
    },
    d(a) {
      O(i, a), a && $(e);
    }
  };
}
function cl(n) {
  let e, l;
  return e = new vs({
    props: {
      viewModel: n[16],
      align: "left"
    }
  }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & 1 && (s.viewModel = t[16]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function fl(n) {
  let e, l = n[16], t, i = cl(n);
  return {
    c() {
      e = h("div"), i.c(), p(e, "class", "row-container svelte-f61lok");
    },
    m(s, a) {
      y(s, e, a), i.m(e, null), t = !0;
    },
    p(s, a) {
      a & 1 && X(l, l = s[16]) ? (B(), w(i, 1, 1, W), x(), i = cl(s), i.c(), g(i, 1), i.m(e, null)) : i.p(s, a);
    },
    i(s) {
      t || (g(i), t = !0);
    },
    o(s) {
      w(i), t = !1;
    },
    d(s) {
      s && $(e), i.d(s);
    }
  };
}
function dl(n) {
  let e, l = n[13].title + "", t, i, s, a = n[13].rows, o = [];
  for (let f = 0; f < a.length; f += 1)
    o[f] = fl(tl(n, a, f));
  const r = (f) => w(o[f], 1, 1, () => {
    o[f] = null;
  });
  return {
    c() {
      e = h("div"), t = I(l);
      for (let f = 0; f < o.length; f += 1)
        o[f].c();
      i = A(), p(e, "class", "section-title svelte-f61lok");
    },
    m(f, c) {
      y(f, e, c), b(e, t);
      for (let d = 0; d < o.length; d += 1)
        o[d].m(f, c);
      y(f, i, c), s = !0;
    },
    p(f, c) {
      if ((!s || c & 1) && l !== (l = f[13].title + "") && G(t, l), c & 1) {
        a = f[13].rows;
        let d;
        for (d = 0; d < a.length; d += 1) {
          const u = tl(f, a, d);
          o[d] ? (o[d].p(u, c), g(o[d], 1)) : (o[d] = fl(u), o[d].c(), g(o[d], 1), o[d].m(i.parentNode, i));
        }
        for (B(), d = a.length; d < o.length; d += 1)
          r(d);
        x();
      }
    },
    i(f) {
      if (!s) {
        for (let c = 0; c < a.length; c += 1)
          g(o[c]);
        s = !0;
      }
    },
    o(f) {
      o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        w(o[c]);
      s = !1;
    },
    d(f) {
      f && $(e), O(o, f), f && $(i);
    }
  };
}
function ul(n) {
  let e, l, t;
  return l = new ns({
    props: {
      viewModel: n[10]
    }
  }), {
    c() {
      e = h("div"), q(l.$$.fragment), p(e, "class", "row-container svelte-f61lok");
    },
    m(i, s) {
      y(i, e, s), z(l, e, null), t = !0;
    },
    p(i, s) {
      const a = {};
      s & 1 && (a.viewModel = i[10]), l.$set(a);
    },
    i(i) {
      t || (g(l.$$.fragment, i), t = !0);
    },
    o(i) {
      w(l.$$.fragment, i), t = !1;
    },
    d(i) {
      i && $(e), j(l);
    }
  };
}
function gs(n) {
  let e, l, t, i, s, a, o = n[0].title + "", r, f, c, d, u, m, v, _, k, M, R, S = n[0].pretitle && nl(n), C = n[0].subtitle && il(n), L = n[0].annotations && sl(n), N = n[2] && n[0].relatedItems.length > 0 && ol(n), T = n[0].graphSections.length > 0 && al(n), P = n[0].detailRows, V = [];
  for (let D = 0; D < P.length; D += 1)
    V[D] = ul(Yt(n, P, D));
  const F = (D) => w(V[D], 1, 1, () => {
    V[D] = null;
  });
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), i = h("div"), S && S.c(), s = h("div"), a = h("div"), C && C.c(), r = A(), L && L.c(), f = h("div"), c = h("div"), d = h("div"), d.textContent = "previous", u = h("div"), u.textContent = "\xA0|\xA0", m = h("div"), m.textContent = "next", N && N.c(), v = h("div"), T && T.c(), _ = A();
      for (let D = 0; D < V.length; D += 1)
        V[D].c();
      p(a, "class", "title svelte-f61lok"), p(s, "class", "title-and-subtitle svelte-f61lok"), p(i, "class", "title-container svelte-f61lok"), p(f, "class", "spacer-flex svelte-f61lok"), p(d, "class", "nav-link svelte-f61lok"), pe(d, "disabled", n[0].previousRowIndex === void 0), p(u, "class", "nav-link-sep svelte-f61lok"), p(m, "class", "nav-link svelte-f61lok"), pe(m, "disabled", n[0].nextRowIndex === void 0), p(c, "class", "nav-links no-selection svelte-f61lok"), p(t, "class", "title-and-links svelte-f61lok"), p(l, "class", "header-container svelte-f61lok"), p(v, "class", "scroll-container svelte-f61lok"), p(v, "tabindex", "0"), p(e, "class", "compare-detail-container svelte-f61lok");
    },
    m(D, E) {
      y(D, e, E), b(e, l), b(l, t), b(t, i), S && S.m(i, null), b(i, s), b(s, a), a.innerHTML = o, C && C.m(s, null), b(s, r), L && L.m(s, null), b(t, f), b(t, c), b(c, d), b(c, u), b(c, m), N && N.m(l, null), b(e, v), T && T.m(v, null), b(v, _);
      for (let K = 0; K < V.length; K += 1)
        V[K].m(v, null);
      n[8](v), k = !0, M || (R = [
        re(window, "keydown", n[4]),
        re(a, "click", n[5]),
        re(d, "click", n[6]),
        re(m, "click", n[7])
      ], M = !0);
    },
    p(D, [E]) {
      if (D[0].pretitle ? S ? S.p(D, E) : (S = nl(D), S.c(), S.m(i, s)) : S && (S.d(1), S = null), (!k || E & 1) && o !== (o = D[0].title + "") && (a.innerHTML = o), D[0].subtitle ? C ? C.p(D, E) : (C = il(D), C.c(), C.m(s, r)) : C && (C.d(1), C = null), D[0].annotations ? L ? L.p(D, E) : (L = sl(D), L.c(), L.m(s, null)) : L && (L.d(1), L = null), E & 1 && pe(d, "disabled", D[0].previousRowIndex === void 0), E & 1 && pe(m, "disabled", D[0].nextRowIndex === void 0), D[2] && D[0].relatedItems.length > 0 ? N ? N.p(D, E) : (N = ol(D), N.c(), N.m(l, null)) : N && (N.d(1), N = null), D[0].graphSections.length > 0 ? T ? (T.p(D, E), E & 1 && g(T, 1)) : (T = al(D), T.c(), g(T, 1), T.m(v, _)) : T && (B(), w(T, 1, 1, () => {
        T = null;
      }), x()), E & 1) {
        P = D[0].detailRows;
        let K;
        for (K = 0; K < P.length; K += 1) {
          const Z = Yt(D, P, K);
          V[K] ? (V[K].p(Z, E), g(V[K], 1)) : (V[K] = ul(Z), V[K].c(), g(V[K], 1), V[K].m(v, null));
        }
        for (B(), K = P.length; K < V.length; K += 1)
          F(K);
        x();
      }
    },
    i(D) {
      if (!k) {
        g(T);
        for (let E = 0; E < P.length; E += 1)
          g(V[E]);
        k = !0;
      }
    },
    o(D) {
      w(T), V = V.filter(Boolean);
      for (let E = 0; E < V.length; E += 1)
        w(V[E]);
      k = !1;
    },
    d(D) {
      D && $(e), S && S.d(), C && C.d(), L && L.d(), N && N.d(), T && T.d(), O(V, D), n[8](null), M = !1, $e(R);
    }
  };
}
function bs(n, e, l) {
  let { viewModel: t } = e, i, s = !1;
  const a = ze();
  function o(m) {
    switch (m) {
      case "detail-previous":
        t.previousRowIndex !== void 0 && a("command", {
          cmd: "show-comparison-detail-at-index",
          kind: t.kind,
          index: t.previousRowIndex
        });
        break;
      case "detail-next":
        t.nextRowIndex !== void 0 && a("command", {
          cmd: "show-comparison-detail-at-index",
          kind: t.kind,
          index: t.nextRowIndex
        });
        break;
      default:
        a("command", { cmd: m });
        break;
    }
  }
  function r(m) {
    m.key === "ArrowLeft" ? (o("detail-previous"), m.preventDefault()) : m.key === "ArrowRight" ? (o("detail-next"), m.preventDefault()) : m.key === "ArrowUp" && i.scrollTop === 0 && (o("show-summary"), m.preventDefault());
  }
  function f() {
    l(2, s = !s);
  }
  Ze(() => {
    i.focus();
  });
  const c = () => o("detail-previous"), d = () => o("detail-next");
  function u(m) {
    be[m ? "unshift" : "push"](() => {
      i = m, l(1, i), l(0, t);
    });
  }
  return n.$$set = (m) => {
    "viewModel" in m && l(0, t = m.viewModel);
  }, n.$$.update = () => {
    n.$$.dirty & 3 && t && (i && l(1, i.scrollTop = 0, i), l(2, s = !1));
  }, [
    t,
    i,
    s,
    o,
    r,
    f,
    c,
    d,
    u
  ];
}
class ws extends Y {
  constructor(e) {
    super(), Q(this, e, bs, gs, X, { viewModel: 0 }, _s);
  }
}
function ks(n) {
  ne(n, "svelte-eztohb", `.header-container.svelte-eztohb{display:flex;flex-direction:column;margin:0 1rem;color:#aaa}.header-content.svelte-eztohb{display:flex;flex-direction:row;margin:0.4rem 0}.header-group.svelte-eztohb{display:flex;flex-direction:row;align-items:center}.spacer-flex.svelte-eztohb{flex:1}.spacer-fixed.svelte-eztohb{flex:0 0 4rem}.label.home.svelte-eztohb{color:#ddd;cursor:pointer}.label.home.svelte-eztohb:hover{color:#fff}.label.svelte-eztohb:not(:last-child){margin-right:1rem}select.svelte-eztohb{margin-right:1rem;font-family:Roboto, sans-serif;font-size:1em;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0.2rem 1.6rem 0.2rem 0.4rem;background:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23555'><polygon points='0,0 100,0 50,60'/></svg>") no-repeat;background-size:0.8rem;background-position:calc(100% - 0.4rem) 70%;background-repeat:no-repeat;background-color:#353535;border:none;border-radius:0.4rem}.line.svelte-eztohb{min-height:1px;margin-bottom:1rem;background-color:#555}`);
}
function ml(n, e, l) {
  const t = n.slice();
  return t[12] = e[l], t;
}
function hl(n, e, l) {
  const t = n.slice();
  return t[12] = e[l], t;
}
function $s(n) {
  let e, l, t, i, s;
  return {
    c() {
      e = h("div"), l = h("input"), t = h("label"), t.textContent = "Simplify Scenarios", p(l, "class", "checkbox"), p(l, "type", "checkbox"), p(l, "name", "simplify-toggle"), p(t, "for", "simplify-toggle"), p(e, "class", "header-group svelte-eztohb");
    },
    m(a, o) {
      y(a, e, o), b(e, l), l.checked = n[1], b(e, t), i || (s = re(l, "change", n[10]), i = !0);
    },
    p(a, o) {
      o & 2 && (l.checked = a[1]);
    },
    d(a) {
      a && $(e), i = !1, s();
    }
  };
}
function pl(n) {
  let e, l, t, i, s, a, o, r, f = n[5][0] + "", c, d = n[5][1] + "", u, m = n[5][2] + "", v, _ = n[5][3] + "", k, M = n[5][4] + "";
  function R(P, V) {
    return P[2].length > 1 ? Ms : ys;
  }
  let S = R(n), C = S(n);
  function L(P, V) {
    return P[3].length > 1 ? Ss : Rs;
  }
  let N = L(n), T = N(n);
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), t.textContent = "Comparing:", C.c(), i = A(), T.c(), s = h("div"), a = h("div"), o = h("div"), o.textContent = "Thresholds:", r = h("div"), c = h("div"), u = h("div"), v = h("div"), k = h("div"), p(e, "class", "spacer-fixed svelte-eztohb"), p(t, "class", "label svelte-eztohb"), p(l, "class", "header-group svelte-eztohb"), p(s, "class", "spacer-fixed svelte-eztohb"), p(o, "class", "label svelte-eztohb"), p(r, "class", "label bucket-color-0 svelte-eztohb"), p(c, "class", "label bucket-color-1 svelte-eztohb"), p(u, "class", "label bucket-color-2 svelte-eztohb"), p(v, "class", "label bucket-color-3 svelte-eztohb"), p(k, "class", "label bucket-color-4 svelte-eztohb"), p(a, "class", "header-group svelte-eztohb");
    },
    m(P, V) {
      y(P, e, V), y(P, l, V), b(l, t), C.m(l, null), b(l, i), T.m(l, null), y(P, s, V), y(P, a, V), b(a, o), b(a, r), r.innerHTML = f, b(a, c), c.innerHTML = d, b(a, u), u.innerHTML = m, b(a, v), v.innerHTML = _, b(a, k), k.innerHTML = M;
    },
    p(P, V) {
      S === (S = R(P)) && C ? C.p(P, V) : (C.d(1), C = S(P), C && (C.c(), C.m(l, i))), N === (N = L(P)) && T ? T.p(P, V) : (T.d(1), T = N(P), T && (T.c(), T.m(l, null)));
    },
    d(P) {
      P && $(e), P && $(l), C.d(), T.d(), P && $(s), P && $(a);
    }
  };
}
function ys(n) {
  let e, l = n[0].nameL + "", t;
  return {
    c() {
      e = h("div"), t = I(l), p(e, "class", "label dataset-color-0 svelte-eztohb");
    },
    m(i, s) {
      y(i, e, s), b(e, t);
    },
    p(i, s) {
      s & 1 && l !== (l = i[0].nameL + "") && G(t, l);
    },
    d(i) {
      i && $(e);
    }
  };
}
function Ms(n) {
  let e, l, t, i = n[2], s = [];
  for (let a = 0; a < i.length; a += 1)
    s[a] = vl(hl(n, i, a));
  return {
    c() {
      e = h("select");
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      p(e, "class", "selector dataset-color-0 svelte-eztohb");
    },
    m(a, o) {
      y(a, e, o);
      for (let r = 0; r < s.length; r += 1)
        s[r].m(e, null);
      l || (t = re(e, "change", Ls), l = !0);
    },
    p(a, o) {
      if (o & 5) {
        i = a[2];
        let r;
        for (r = 0; r < i.length; r += 1) {
          const f = hl(a, i, r);
          s[r] ? s[r].p(f, o) : (s[r] = vl(f), s[r].c(), s[r].m(e, null));
        }
        for (; r < s.length; r += 1)
          s[r].d(1);
        s.length = i.length;
      }
    },
    d(a) {
      a && $(e), O(s, a), l = !1, t();
    }
  };
}
function vl(n) {
  let e, l = n[12] + "", t, i, s;
  return {
    c() {
      e = h("option"), t = I(l), e.selected = i = n[12] === n[0].nameL, e.__value = s = n[12], e.value = e.__value;
    },
    m(a, o) {
      y(a, e, o), b(e, t);
    },
    p(a, o) {
      o & 4 && l !== (l = a[12] + "") && G(t, l), o & 5 && i !== (i = a[12] === a[0].nameL) && (e.selected = i), o & 4 && s !== (s = a[12]) && (e.__value = s, e.value = e.__value);
    },
    d(a) {
      a && $(e);
    }
  };
}
function Rs(n) {
  let e, l = n[0].nameR + "", t;
  return {
    c() {
      e = h("div"), t = I(l), p(e, "class", "label dataset-color-1 svelte-eztohb");
    },
    m(i, s) {
      y(i, e, s), b(e, t);
    },
    p(i, s) {
      s & 1 && l !== (l = i[0].nameR + "") && G(t, l);
    },
    d(i) {
      i && $(e);
    }
  };
}
function Ss(n) {
  let e, l, t, i = n[3], s = [];
  for (let a = 0; a < i.length; a += 1)
    s[a] = _l(ml(n, i, a));
  return {
    c() {
      e = h("select");
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      p(e, "class", "selector dataset-color-1 svelte-eztohb");
    },
    m(a, o) {
      y(a, e, o);
      for (let r = 0; r < s.length; r += 1)
        s[r].m(e, null);
      l || (t = re(e, "change", Ds), l = !0);
    },
    p(a, o) {
      if (o & 9) {
        i = a[3];
        let r;
        for (r = 0; r < i.length; r += 1) {
          const f = ml(a, i, r);
          s[r] ? s[r].p(f, o) : (s[r] = _l(f), s[r].c(), s[r].m(e, null));
        }
        for (; r < s.length; r += 1)
          s[r].d(1);
        s.length = i.length;
      }
    },
    d(a) {
      a && $(e), O(s, a), l = !1, t();
    }
  };
}
function _l(n) {
  let e, l = n[12] + "", t, i, s;
  return {
    c() {
      e = h("option"), t = I(l), e.selected = i = n[12] === n[0].nameR, e.__value = s = n[12], e.value = e.__value;
    },
    m(a, o) {
      y(a, e, o), b(e, t);
    },
    p(a, o) {
      o & 8 && l !== (l = a[12] + "") && G(t, l), o & 9 && i !== (i = a[12] === a[0].nameR) && (e.selected = i), o & 8 && s !== (s = a[12]) && (e.__value = s, e.value = e.__value);
    },
    d(a) {
      a && $(e);
    }
  };
}
function Cs(n) {
  let e, l, t, i, s, a, o, r, f, c = n[4] !== void 0 && $s(n), d = (n[0].nameL || n[2].length > 1) && pl(n);
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), i = h("div"), i.textContent = "Home", s = h("div"), c && c.c(), a = A(), d && d.c(), o = h("div"), p(i, "class", "label home no-selection svelte-eztohb"), p(t, "class", "header-group svelte-eztohb"), p(s, "class", "spacer-flex svelte-eztohb"), p(l, "class", "header-content svelte-eztohb"), p(o, "class", "line svelte-eztohb"), p(e, "class", "header-container svelte-eztohb");
    },
    m(u, m) {
      y(u, e, m), b(e, l), b(l, t), b(t, i), b(l, s), c && c.m(l, null), b(l, a), d && d.m(l, null), b(e, o), r || (f = re(i, "click", n[8]), r = !0);
    },
    p(u, [m]) {
      u[4] !== void 0 && c.p(u, m), u[0].nameL || u[2].length > 1 ? d ? d.p(u, m) : (d = pl(u), d.c(), d.m(l, null)) : d && (d.d(1), d = null);
    },
    i: W,
    o: W,
    d(u) {
      u && $(e), c && c.d(), d && d.d(), r = !1, f();
    }
  };
}
function zn(n, e) {
  const l = new CustomEvent("sde-check-bundle", { detail: { kind: n, name: e } });
  document.dispatchEvent(l);
}
function Ls(n) {
  zn("left", n.target.value);
}
function Ds(n) {
  zn("right", n.target.value);
}
function Ts(n, e, l) {
  let t, i, s, { viewModel: a } = e;
  const o = a.simplifyScenarios;
  ge(n, o, (_) => l(1, t = _));
  const r = a.thresholds, f = a.bundleNamesL;
  ge(n, f, (_) => l(2, i = _));
  const c = a.bundleNamesR;
  ge(n, c, (_) => l(3, s = _));
  const d = ze();
  function u() {
    d("command", { cmd: "show-summary" });
  }
  let m = !0;
  function v() {
    t = this.checked, o.set(t);
  }
  return n.$$set = (_) => {
    "viewModel" in _ && l(0, a = _.viewModel);
  }, n.$$.update = () => {
    n.$$.dirty & 514 && t !== void 0 && (m ? l(9, m = !1) : document.dispatchEvent(new CustomEvent("sde-check-simplify-scenarios-toggled")));
  }, [
    a,
    t,
    i,
    s,
    o,
    r,
    f,
    c,
    u,
    m,
    v
  ];
}
class Vs extends Y {
  constructor(e) {
    super(), Q(this, e, Ts, Cs, X, { viewModel: 0 }, ks);
  }
}
function Is(n) {
  ne(n, "svelte-1j1xz6h", ".dot-plot-container.svelte-1j1xz6h{position:relative;width:100%;height:1.6rem}.hline.svelte-1j1xz6h{position:absolute;left:0;top:0.7rem;width:100%;height:1px;background-color:#555}.vline.svelte-1j1xz6h{position:absolute;left:0;height:1.4rem;width:1px}.end-line.svelte-1j1xz6h{background-color:#555}.avg-line.svelte-1j1xz6h{width:2px;margin-left:-1px}.dot.svelte-1j1xz6h{position:absolute;top:0.3rem;width:0.8rem;height:0.8rem;margin-left:-0.4rem;border-radius:0.4rem;opacity:0.2}");
}
function gl(n, e, l) {
  const t = n.slice();
  return t[2] = e[l], t;
}
function bl(n) {
  let e, l;
  return {
    c() {
      e = h("div"), p(e, "class", l = "dot " + n[1] + " svelte-1j1xz6h"), se(e, "left", n[2] + "%");
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & 2 && l !== (l = "dot " + t[1] + " svelte-1j1xz6h") && p(e, "class", l), i & 1 && se(e, "left", t[2] + "%");
    },
    d(t) {
      t && $(e);
    }
  };
}
function zs(n) {
  let e, l, t, i, s, a, o = n[0].points, r = [];
  for (let f = 0; f < o.length; f += 1)
    r[f] = bl(gl(n, o, f));
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), i = h("div");
      for (let f = 0; f < r.length; f += 1)
        r[f].c();
      s = h("div"), p(l, "class", "hline svelte-1j1xz6h"), p(t, "class", "vline end-line svelte-1j1xz6h"), se(t, "left", "0"), p(i, "class", "vline end-line svelte-1j1xz6h"), se(i, "left", "100%"), p(s, "class", a = "vline avg-line " + n[1] + " svelte-1j1xz6h"), se(s, "left", n[0].avgPoint + "%"), p(e, "class", "dot-plot-container svelte-1j1xz6h");
    },
    m(f, c) {
      y(f, e, c), b(e, l), b(e, t), b(e, i);
      for (let d = 0; d < r.length; d += 1)
        r[d].m(e, null);
      b(e, s);
    },
    p(f, [c]) {
      if (c & 3) {
        o = f[0].points;
        let d;
        for (d = 0; d < o.length; d += 1) {
          const u = gl(f, o, d);
          r[d] ? r[d].p(u, c) : (r[d] = bl(u), r[d].c(), r[d].m(e, s));
        }
        for (; d < r.length; d += 1)
          r[d].d(1);
        r.length = o.length;
      }
      c & 2 && a !== (a = "vline avg-line " + f[1] + " svelte-1j1xz6h") && p(s, "class", a), c & 1 && se(s, "left", f[0].avgPoint + "%");
    },
    i: W,
    o: W,
    d(f) {
      f && $(e), O(r, f);
    }
  };
}
function js(n, e, l) {
  let { viewModel: t } = e, { colorClass: i } = e;
  return n.$$set = (s) => {
    "viewModel" in s && l(0, t = s.viewModel), "colorClass" in s && l(1, i = s.colorClass);
  }, [t, i];
}
class at extends Y {
  constructor(e) {
    super(), Q(this, e, js, zs, X, { viewModel: 0, colorClass: 1 }, Is);
  }
}
function Ps(n) {
  ne(n, "svelte-15dp53", ".perf-container.svelte-15dp53{display:flex;flex-direction:column;padding:0 1rem}.controls-container.svelte-15dp53{display:flex;flex-direction:column;align-items:flex-start;height:3rem}.table-container.svelte-15dp53{display:flex;flex:1}table.svelte-15dp53{border-collapse:collapse}td.svelte-15dp53,th.svelte-15dp53{padding-top:0.2rem;padding-bottom:0.2rem}th.svelte-15dp53{color:#aaa;text-align:right;font-weight:500}td.svelte-15dp53{width:4.5rem;text-align:right;font-family:monospace}td.rownum.svelte-15dp53{width:2rem}td.dim.svelte-15dp53{color:#777}td.plot.svelte-15dp53{width:30rem;padding-left:2rem;padding-right:2rem}");
}
function wl(n, e, l) {
  const t = n.slice();
  return t[5] = e[l], t;
}
function qs(n) {
  let e;
  return {
    c() {
      e = h("div"), e.textContent = "Running performance tests, please wait\u2026";
    },
    m(l, t) {
      y(l, e, t);
    },
    p: W,
    d(l) {
      l && $(e);
    }
  };
}
function Ns(n) {
  let e, l, t, i;
  return {
    c() {
      e = h("button"), l = I("Run"), p(e, "class", "run"), e.disabled = n[0];
    },
    m(s, a) {
      y(s, e, a), b(e, l), t || (i = re(e, "click", n[3]), t = !0);
    },
    p(s, a) {
      a & 1 && (e.disabled = s[0]);
    },
    d(s) {
      s && $(e), t = !1, i();
    }
  };
}
function kl(n) {
  let e, l, t, i = n[1], s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = $l(wl(n, i, o));
  const a = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("table"), l = h("tr"), l.innerHTML = '<th class="svelte-15dp53">run</th><th class="svelte-15dp53">min</th><th class="svelte-15dp53">avg</th><th class="svelte-15dp53">max</th>';
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "svelte-15dp53");
    },
    m(o, r) {
      y(o, e, r), b(e, l);
      for (let f = 0; f < s.length; f += 1)
        s[f].m(e, null);
      t = !0;
    },
    p(o, r) {
      if (r & 2) {
        i = o[1];
        let f;
        for (f = 0; f < i.length; f += 1) {
          const c = wl(o, i, f);
          s[f] ? (s[f].p(c, r), g(s[f], 1)) : (s[f] = $l(c), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (B(), f = i.length; f < s.length; f += 1)
          a(f);
        x();
      }
    },
    i(o) {
      if (!t) {
        for (let r = 0; r < i.length; r += 1)
          g(s[r]);
        t = !0;
      }
    },
    o(o) {
      s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        w(s[r]);
      t = !1;
    },
    d(o) {
      o && $(e), O(s, o);
    }
  };
}
function $l(n) {
  let e, l, t = n[5].num + "", i, s, a = n[5].minTimeL + "", o, r, f = n[5].avgTimeL + "", c, d, u = n[5].maxTimeL + "", m, v, _, k, M, R = n[5].minTimeR + "", S, C, L = n[5].avgTimeR + "", N, T, P = n[5].maxTimeR + "", V, F, D, E;
  return _ = new at({
    props: {
      viewModel: n[5].dotPlotL,
      colorClass: "dataset-bg-0"
    }
  }), D = new at({
    props: {
      viewModel: n[5].dotPlotR,
      colorClass: "dataset-bg-1"
    }
  }), {
    c() {
      e = h("tr"), l = h("td"), i = I(t), s = h("td"), o = I(a), r = h("td"), c = I(f), d = h("td"), m = I(u), v = h("td"), q(_.$$.fragment), k = h("tr"), M = h("td"), S = I(R), C = h("td"), N = I(L), T = h("td"), V = I(P), F = h("td"), q(D.$$.fragment), p(l, "class", "rownum svelte-15dp53"), p(l, "rowspan", "2"), p(s, "class", "dim svelte-15dp53"), p(r, "class", "value dataset-color-0 svelte-15dp53"), p(d, "class", "dim svelte-15dp53"), p(v, "class", "plot svelte-15dp53"), p(M, "class", "dim svelte-15dp53"), p(C, "class", "value dataset-color-1 svelte-15dp53"), p(T, "class", "dim svelte-15dp53"), p(F, "class", "plot svelte-15dp53");
    },
    m(K, Z) {
      y(K, e, Z), b(e, l), b(l, i), b(e, s), b(s, o), b(e, r), b(r, c), b(e, d), b(d, m), b(e, v), z(_, v, null), y(K, k, Z), b(k, M), b(M, S), b(k, C), b(C, N), b(k, T), b(T, V), b(k, F), z(D, F, null), E = !0;
    },
    p(K, Z) {
      (!E || Z & 2) && t !== (t = K[5].num + "") && G(i, t), (!E || Z & 2) && a !== (a = K[5].minTimeL + "") && G(o, a), (!E || Z & 2) && f !== (f = K[5].avgTimeL + "") && G(c, f), (!E || Z & 2) && u !== (u = K[5].maxTimeL + "") && G(m, u);
      const ie = {};
      Z & 2 && (ie.viewModel = K[5].dotPlotL), _.$set(ie), (!E || Z & 2) && R !== (R = K[5].minTimeR + "") && G(S, R), (!E || Z & 2) && L !== (L = K[5].avgTimeR + "") && G(N, L), (!E || Z & 2) && P !== (P = K[5].maxTimeR + "") && G(V, P);
      const ve = {};
      Z & 2 && (ve.viewModel = K[5].dotPlotR), D.$set(ve);
    },
    i(K) {
      E || (g(_.$$.fragment, K), g(D.$$.fragment, K), E = !0);
    },
    o(K) {
      w(_.$$.fragment, K), w(D.$$.fragment, K), E = !1;
    },
    d(K) {
      K && $(e), j(_), K && $(k), j(D);
    }
  };
}
function Bs(n) {
  let e, l, t, i;
  function s(f, c) {
    return f[0] ? qs : Ns;
  }
  let a = s(n), o = a(n), r = n[1].length > 0 && kl(n);
  return {
    c() {
      e = h("div"), l = h("div"), o.c(), t = h("div"), r && r.c(), p(l, "class", "controls-container svelte-15dp53"), p(t, "class", "table-container svelte-15dp53"), p(e, "class", "perf-container svelte-15dp53");
    },
    m(f, c) {
      y(f, e, c), b(e, l), o.m(l, null), b(e, t), r && r.m(t, null), i = !0;
    },
    p(f, [c]) {
      a === (a = s(f)) && o ? o.p(f, c) : (o.d(1), o = a(f), o && (o.c(), o.m(l, null))), f[1].length > 0 ? r ? (r.p(f, c), c & 2 && g(r, 1)) : (r = kl(f), r.c(), g(r, 1), r.m(t, null)) : r && (B(), w(r, 1, 1, () => {
        r = null;
      }), x());
    },
    i(f) {
      i || (g(r), i = !0);
    },
    o(f) {
      w(r), i = !1;
    },
    d(f) {
      f && $(e), o.d(), r && r.d();
    }
  };
}
function xs(n, e, l) {
  let t, { viewModel: i } = e;
  const s = i.rows;
  ge(n, s, (r) => l(1, t = r));
  let a = !1;
  function o() {
    l(0, a = !0);
    const r = new Gn(i.bundleModelL, i.bundleModelR);
    r.onComplete = (f, c) => {
      i.addRow(f, c), l(0, a = !1);
    }, r.onError = (f) => {
      console.error(f), l(0, a = !1);
    }, r.start();
  }
  return n.$$set = (r) => {
    "viewModel" in r && l(4, i = r.viewModel);
  }, [a, t, s, o, i];
}
class Ks extends Y {
  constructor(e) {
    super(), Q(this, e, xs, Bs, X, { viewModel: 4 }, Ps);
  }
}
function Ws(n) {
  ne(n, "svelte-1xosw0f", ".graph-container.svelte-1xosw0f{position:relative;display:flex;width:36rem;height:22rem;margin-left:1rem;margin-top:0.5rem;margin-bottom:1rem}");
}
function yl(n) {
  let e, l, t;
  return l = new In({
    props: {
      viewModel: n[2].comparisonGraphViewModel,
      width: "36",
      height: "22"
    }
  }), {
    c() {
      e = h("div"), q(l.$$.fragment), p(e, "class", "graph-container svelte-1xosw0f");
    },
    m(i, s) {
      y(i, e, s), z(l, e, null), t = !0;
    },
    p(i, s) {
      const a = {};
      s & 4 && (a.viewModel = i[2].comparisonGraphViewModel), l.$set(a);
    },
    i(i) {
      t || (g(l.$$.fragment, i), t = !0);
    },
    o(i) {
      w(l.$$.fragment, i), t = !1;
    },
    d(i) {
      i && $(e), j(l);
    }
  };
}
function Gs(n) {
  let e, l, t = n[2] && yl(n);
  return {
    c() {
      t && t.c(), e = A();
    },
    m(i, s) {
      t && t.m(i, s), y(i, e, s), l = !0;
    },
    p(i, s) {
      i[2] ? t ? (t.p(i, s), s & 4 && g(t, 1)) : (t = yl(i), t.c(), g(t, 1), t.m(e.parentNode, e)) : t && (B(), w(t, 1, 1, () => {
        t = null;
      }), x());
    },
    i(i) {
      l || (g(t), l = !0);
    },
    o(i) {
      w(t), l = !1;
    },
    d(i) {
      t && t.d(i), i && $(e);
    }
  };
}
function Es(n) {
  let e, l, t;
  function i(a) {
    n[6](a);
  }
  let s = {
    $$slots: { default: [Gs] },
    $$scope: { ctx: n }
  };
  return n[0] !== void 0 && (s.visible = n[0]), e = new ht({ props: s }), be.push(() => mt(e, "visible", i)), {
    c() {
      q(e.$$.fragment);
    },
    m(a, o) {
      z(e, a, o), t = !0;
    },
    p(a, [o]) {
      const r = {};
      o & 132 && (r.$$scope = { dirty: o, ctx: a }), !l && o & 1 && (l = !0, r.visible = a[0], dt(() => l = !1)), e.$set(r);
    },
    i(a) {
      t || (g(e.$$.fragment, a), t = !0);
    },
    o(a) {
      w(e.$$.fragment, a), t = !1;
    },
    d(a) {
      j(e, a);
    }
  };
}
function Fs(n, e, l) {
  let t, i = W, s = () => (i(), i = Ie(o, (u) => l(2, t = u)), o);
  n.$$.on_destroy.push(() => i());
  let { viewModel: a } = e, o = a.content;
  s();
  let r = !1, f = r, c;
  function d(u) {
    r = u, l(0, r);
  }
  return n.$$set = (u) => {
    "viewModel" in u && l(3, a = u.viewModel);
  }, n.$$.update = () => {
    n.$$.dirty & 57 && (r !== f || a.baseRequestKey !== (c == null ? void 0 : c.baseRequestKey)) && (c == null || c.clearData(), l(4, f = r), l(5, c = a), s(l(1, o = a.content)), r && a.requestData());
  }, [
    r,
    o,
    t,
    a,
    f,
    c,
    d
  ];
}
class Hs extends Y {
  constructor(e) {
    super(), Q(this, e, Fs, Es, X, { viewModel: 3 }, Ws);
  }
}
function As(n) {
  ne(n, "svelte-1l9dja1", ".check-graph.svelte-1l9dja1{height:23rem;margin-left:8.5rem}");
}
function Ml(n) {
  let e, l, t, i;
  return l = new Hs({
    props: {
      viewModel: n[0].graphBoxViewModel
    }
  }), {
    c() {
      e = h("div"), q(l.$$.fragment), p(e, "class", t = "row check-graph " + n[0].rowClasses + " svelte-1l9dja1");
    },
    m(s, a) {
      y(s, e, a), z(l, e, null), i = !0;
    },
    p(s, a) {
      const o = {};
      a & 1 && (o.viewModel = s[0].graphBoxViewModel), l.$set(o), (!i || a & 1 && t !== (t = "row check-graph " + s[0].rowClasses + " svelte-1l9dja1")) && p(e, "class", t);
    },
    i(s) {
      i || (g(l.$$.fragment, s), i = !0);
    },
    o(s) {
      w(l.$$.fragment, s), i = !1;
    },
    d(s) {
      s && $(e), j(l);
    }
  };
}
function Os(n) {
  let e, l, t = n[0].span + "", i, s, a, o, r, f = n[0].graphBoxViewModel && n[1] && Ml(n);
  return {
    c() {
      e = h("div"), l = h("span"), f && f.c(), s = A(), p(l, "class", "label"), p(e, "class", i = "row " + n[0].rowClasses + " svelte-1l9dja1");
    },
    m(c, d) {
      y(c, e, d), b(e, l), l.innerHTML = t, f && f.m(c, d), y(c, s, d), a = !0, o || (r = re(l, "click", n[3]), o = !0);
    },
    p(c, [d]) {
      (!a || d & 1) && t !== (t = c[0].span + "") && (l.innerHTML = t), (!a || d & 1 && i !== (i = "row " + c[0].rowClasses + " svelte-1l9dja1")) && p(e, "class", i), c[0].graphBoxViewModel && c[1] ? f ? (f.p(c, d), d & 3 && g(f, 1)) : (f = Ml(c), f.c(), g(f, 1), f.m(s.parentNode, s)) : f && (B(), w(f, 1, 1, () => {
        f = null;
      }), x());
    },
    i(c) {
      a || (g(f), a = !0);
    },
    o(c) {
      w(f), a = !1;
    },
    d(c) {
      c && $(e), f && f.d(c), c && $(s), o = !1, r();
    }
  };
}
function Us(n, e, l) {
  let t, { viewModel: i } = e;
  const s = i.graphVisible;
  ge(n, s, (o) => l(1, t = o));
  function a() {
    s.update((o) => !o);
  }
  return n.$$set = (o) => {
    "viewModel" in o && l(0, i = o.viewModel);
  }, [i, t, s, a];
}
class Xs extends Y {
  constructor(e) {
    super(), Q(this, e, Us, Os, X, { viewModel: 0 }, As);
  }
}
function Rl(n, e, l) {
  const t = n.slice();
  return t[4] = e[l], t;
}
function Sl(n) {
  let e, l;
  return e = new Xs({ props: { viewModel: n[4] } }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & 1 && (s.viewModel = t[4]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function Zs(n) {
  let e, l, t, i = n[0].testRow.span + "", s = n[1] || n[0].testRow.status !== "passed" ? ":" : "", a, o, r, f, c, d = n[0].childRows, u = [];
  for (let v = 0; v < d.length; v += 1)
    u[v] = Sl(Rl(n, d, v));
  const m = (v) => w(u[v], 1, 1, () => {
    u[v] = null;
  });
  return {
    c() {
      e = h("div"), l = h("span"), t = new mi(!1), a = I(s), o = h("div");
      for (let v = 0; v < u.length; v += 1)
        u[v].c();
      t.a = a, p(l, "class", "label"), p(e, "class", "row test"), p(o, "class", "test-rows"), pe(o, "expand-all", n[1]);
    },
    m(v, _) {
      y(v, e, _), b(e, l), t.m(i, l), b(l, a), y(v, o, _);
      for (let k = 0; k < u.length; k += 1)
        u[k].m(o, null);
      r = !0, f || (c = re(l, "click", n[3]), f = !0);
    },
    p(v, [_]) {
      if ((!r || _ & 1) && i !== (i = v[0].testRow.span + "") && t.p(i), (!r || _ & 3) && s !== (s = v[1] || v[0].testRow.status !== "passed" ? ":" : "") && G(a, s), _ & 1) {
        d = v[0].childRows;
        let k;
        for (k = 0; k < d.length; k += 1) {
          const M = Rl(v, d, k);
          u[k] ? (u[k].p(M, _), g(u[k], 1)) : (u[k] = Sl(M), u[k].c(), g(u[k], 1), u[k].m(o, null));
        }
        for (B(), k = d.length; k < u.length; k += 1)
          m(k);
        x();
      }
      _ & 2 && pe(o, "expand-all", v[1]);
    },
    i(v) {
      if (!r) {
        for (let _ = 0; _ < d.length; _ += 1)
          g(u[_]);
        r = !0;
      }
    },
    o(v) {
      u = u.filter(Boolean);
      for (let _ = 0; _ < u.length; _ += 1)
        w(u[_]);
      r = !1;
    },
    d(v) {
      v && $(e), v && $(o), O(u, v), f = !1, c();
    }
  };
}
function Js(n, e, l) {
  let t, { viewModel: i } = e;
  const s = i.expandAll;
  ge(n, s, (o) => l(1, t = o));
  function a() {
    s.update((o) => !o);
  }
  return n.$$set = (o) => {
    "viewModel" in o && l(0, i = o.viewModel);
  }, [i, t, s, a];
}
class Qs extends Y {
  constructor(e) {
    super(), Q(this, e, Js, Zs, X, { viewModel: 0 });
  }
}
function Ys(n) {
  ne(n, "svelte-ffmh5y", ".check-summary-container.svelte-ffmh5y{display:flex;flex-direction:column}.check-detail.svelte-ffmh5y{display:flex;flex-direction:column}.group-container.svelte-ffmh5y{margin-bottom:1.2rem}.group-container.svelte-ffmh5y .test-rows{display:flex;flex-direction:column}.group-container.svelte-ffmh5y .row.passed{display:none}.group-container.svelte-ffmh5y .test-rows.expand-all .row.passed{display:flex}.group-container.svelte-ffmh5y .row{display:flex;flex-direction:row}.group-container.svelte-ffmh5y .row.group{font-size:1.2em}.group-container.svelte-ffmh5y .row.test{margin-top:0.4rem}.group-container.svelte-ffmh5y .row.test > .label{cursor:pointer}.group-container.svelte-ffmh5y .row.scenario{color:#777}.group-container.svelte-ffmh5y .row.dataset{color:#777}.group-container.svelte-ffmh5y .row.predicate{color:#777}.group-container.svelte-ffmh5y .row.predicate > .label{cursor:pointer}.group-container.svelte-ffmh5y .bold{font-weight:700;color:#bbb}.summary-bar-row.svelte-ffmh5y{display:flex;flex-direction:row;align-items:baseline;align-self:flex-start;margin:2.6rem 0;opacity:1}.bar-container.svelte-ffmh5y{display:flex;flex-direction:row;width:20rem;height:0.8rem}.bar.svelte-ffmh5y{height:0.8rem}.bar.gray.svelte-ffmh5y{background-color:#777}.summary-label.svelte-ffmh5y{margin-left:0.8rem;color:#fff}.sep.svelte-ffmh5y{color:#777}");
}
function Cl(n, e, l) {
  const t = n.slice();
  return t[1] = e[l], t;
}
function Ll(n, e, l) {
  const t = n.slice();
  return t[4] = e[l], t;
}
function eo(n) {
  let e;
  return {
    c() {
      e = h("div"), p(e, "class", "bar gray svelte-ffmh5y"), se(e, "width", "100%");
    },
    m(l, t) {
      y(l, e, t);
    },
    p: W,
    d(l) {
      l && $(e);
    }
  };
}
function to(n) {
  let e, l, t;
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), p(e, "class", "bar bucket-bg-0 svelte-ffmh5y"), se(e, "width", n[0].percents[0] + "%"), p(l, "class", "bar status-bg-failed svelte-ffmh5y"), se(l, "width", n[0].percents[1] + "%"), p(t, "class", "bar status-bg-error svelte-ffmh5y"), se(t, "width", n[0].percents[2] + "%");
    },
    m(i, s) {
      y(i, e, s), y(i, l, s), y(i, t, s);
    },
    p(i, s) {
      s & 1 && se(e, "width", i[0].percents[0] + "%"), s & 1 && se(l, "width", i[0].percents[1] + "%"), s & 1 && se(t, "width", i[0].percents[2] + "%");
    },
    d(i) {
      i && $(e), i && $(l), i && $(t);
    }
  };
}
function lo(n) {
  let e, l = n[0].total + "", t, i, s, a, o, r = n[0].passed && Dl(n), f = n[0].failed && Tl(n), c = n[0].errors && Vl(n);
  return {
    c() {
      e = h("span"), t = I(l), i = I(" total"), r && r.c(), s = A(), f && f.c(), a = A(), c && c.c(), o = A();
    },
    m(d, u) {
      y(d, e, u), b(e, t), b(e, i), r && r.m(d, u), y(d, s, u), f && f.m(d, u), y(d, a, u), c && c.m(d, u), y(d, o, u);
    },
    p(d, u) {
      u & 1 && l !== (l = d[0].total + "") && G(t, l), d[0].passed ? r ? r.p(d, u) : (r = Dl(d), r.c(), r.m(s.parentNode, s)) : r && (r.d(1), r = null), d[0].failed ? f ? f.p(d, u) : (f = Tl(d), f.c(), f.m(a.parentNode, a)) : f && (f.d(1), f = null), d[0].errors ? c ? c.p(d, u) : (c = Vl(d), c.c(), c.m(o.parentNode, o)) : c && (c.d(1), c = null);
    },
    d(d) {
      d && $(e), r && r.d(d), d && $(s), f && f.d(d), d && $(a), c && c.d(d), d && $(o);
    }
  };
}
function no(n) {
  let e, l = n[0].total + "", t, i;
  return {
    c() {
      e = h("span"), t = I(l), i = I(" total passed");
    },
    m(s, a) {
      y(s, e, a), b(e, t), b(e, i);
    },
    p(s, a) {
      a & 1 && l !== (l = s[0].total + "") && G(t, l);
    },
    d(s) {
      s && $(e);
    }
  };
}
function io(n) {
  let e;
  return {
    c() {
      e = h("span"), e.textContent = "No checks";
    },
    m(l, t) {
      y(l, e, t);
    },
    p: W,
    d(l) {
      l && $(e);
    }
  };
}
function Dl(n) {
  let e, l, t = n[0].passed + "", i, s;
  return {
    c() {
      e = h("span"), e.textContent = "\xA0|\xA0", l = h("span"), i = I(t), s = I(" passed"), p(e, "class", "sep svelte-ffmh5y"), p(l, "class", "status-color-passed");
    },
    m(a, o) {
      y(a, e, o), y(a, l, o), b(l, i), b(l, s);
    },
    p(a, o) {
      o & 1 && t !== (t = a[0].passed + "") && G(i, t);
    },
    d(a) {
      a && $(e), a && $(l);
    }
  };
}
function Tl(n) {
  let e, l, t = n[0].failed + "", i, s;
  return {
    c() {
      e = h("span"), e.textContent = "\xA0|\xA0", l = h("span"), i = I(t), s = I(" failed"), p(e, "class", "sep svelte-ffmh5y"), p(l, "class", "status-color-failed");
    },
    m(a, o) {
      y(a, e, o), y(a, l, o), b(l, i), b(l, s);
    },
    p(a, o) {
      o & 1 && t !== (t = a[0].failed + "") && G(i, t);
    },
    d(a) {
      a && $(e), a && $(l);
    }
  };
}
function Vl(n) {
  let e, l;
  function t(a, o) {
    return a[0].errors > 1 ? oo : so;
  }
  let i = t(n), s = i(n);
  return {
    c() {
      e = h("span"), e.textContent = "\xA0|\xA0", s.c(), l = A(), p(e, "class", "sep svelte-ffmh5y");
    },
    m(a, o) {
      y(a, e, o), s.m(a, o), y(a, l, o);
    },
    p(a, o) {
      i === (i = t(a)) && s ? s.p(a, o) : (s.d(1), s = i(a), s && (s.c(), s.m(l.parentNode, l)));
    },
    d(a) {
      a && $(e), s.d(a), a && $(l);
    }
  };
}
function so(n) {
  let e, l = n[0].errors + "", t, i;
  return {
    c() {
      e = h("span"), t = I(l), i = I(" error"), p(e, "class", "status-color-error");
    },
    m(s, a) {
      y(s, e, a), b(e, t), b(e, i);
    },
    p(s, a) {
      a & 1 && l !== (l = s[0].errors + "") && G(t, l);
    },
    d(s) {
      s && $(e);
    }
  };
}
function oo(n) {
  let e, l = n[0].errors + "", t, i;
  return {
    c() {
      e = h("span"), t = I(l), i = I(" errors"), p(e, "class", "status-color-error");
    },
    m(s, a) {
      y(s, e, a), b(e, t), b(e, i);
    },
    p(s, a) {
      a & 1 && l !== (l = s[0].errors + "") && G(t, l);
    },
    d(s) {
      s && $(e);
    }
  };
}
function ro(n) {
  let e, l, t = n[0].groups, i = [];
  for (let a = 0; a < t.length; a += 1)
    i[a] = zl(Cl(n, t, a));
  const s = (a) => w(i[a], 1, 1, () => {
    i[a] = null;
  });
  return {
    c() {
      e = h("div");
      for (let a = 0; a < i.length; a += 1)
        i[a].c();
      p(e, "class", "check-detail svelte-ffmh5y");
    },
    m(a, o) {
      y(a, e, o);
      for (let r = 0; r < i.length; r += 1)
        i[r].m(e, null);
      l = !0;
    },
    p(a, o) {
      if (o & 1) {
        t = a[0].groups;
        let r;
        for (r = 0; r < t.length; r += 1) {
          const f = Cl(a, t, r);
          i[r] ? (i[r].p(f, o), g(i[r], 1)) : (i[r] = zl(f), i[r].c(), g(i[r], 1), i[r].m(e, null));
        }
        for (B(), r = t.length; r < i.length; r += 1)
          s(r);
        x();
      }
    },
    i(a) {
      if (!l) {
        for (let o = 0; o < t.length; o += 1)
          g(i[o]);
        l = !0;
      }
    },
    o(a) {
      i = i.filter(Boolean);
      for (let o = 0; o < i.length; o += 1)
        w(i[o]);
      l = !1;
    },
    d(a) {
      a && $(e), O(i, a);
    }
  };
}
function Il(n) {
  let e, l;
  return e = new Qs({
    props: { viewModel: n[4] }
  }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & 1 && (s.viewModel = t[4]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function zl(n) {
  let e, l, t, i = n[1].name + "", s, a, o = n[1].tests, r = [];
  for (let c = 0; c < o.length; c += 1)
    r[c] = Il(Ll(n, o, c));
  const f = (c) => w(r[c], 1, 1, () => {
    r[c] = null;
  });
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), s = I(i);
      for (let c = 0; c < r.length; c += 1)
        r[c].c();
      p(t, "class", "label"), p(l, "class", "row group"), p(e, "class", "group-container svelte-ffmh5y");
    },
    m(c, d) {
      y(c, e, d), b(e, l), b(l, t), b(t, s);
      for (let u = 0; u < r.length; u += 1)
        r[u].m(e, null);
      a = !0;
    },
    p(c, d) {
      if ((!a || d & 1) && i !== (i = c[1].name + "") && G(s, i), d & 1) {
        o = c[1].tests;
        let u;
        for (u = 0; u < o.length; u += 1) {
          const m = Ll(c, o, u);
          r[u] ? (r[u].p(m, d), g(r[u], 1)) : (r[u] = Il(m), r[u].c(), g(r[u], 1), r[u].m(e, null));
        }
        for (B(), u = o.length; u < r.length; u += 1)
          f(u);
        x();
      }
    },
    i(c) {
      if (!a) {
        for (let d = 0; d < o.length; d += 1)
          g(r[d]);
        a = !0;
      }
    },
    o(c) {
      r = r.filter(Boolean);
      for (let d = 0; d < r.length; d += 1)
        w(r[d]);
      a = !1;
    },
    d(c) {
      c && $(e), O(r, c);
    }
  };
}
function ao(n) {
  let e, l, t, i, s;
  function a(m, v) {
    return m[0].total > 0 ? to : eo;
  }
  let o = a(n), r = o(n);
  function f(m, v) {
    return m[0].total === 0 ? io : m[0].total === m[0].passed ? no : lo;
  }
  let c = f(n), d = c(n), u = ro(n);
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), r.c(), i = h("span"), d.c(), u && u.c(), p(t, "class", "bar-container svelte-ffmh5y"), p(i, "class", "summary-label svelte-ffmh5y"), p(l, "class", "summary-bar-row svelte-ffmh5y"), p(e, "class", "check-summary-container svelte-ffmh5y");
    },
    m(m, v) {
      y(m, e, v), b(e, l), b(l, t), r.m(t, null), b(l, i), d.m(i, null), u && u.m(e, null), s = !0;
    },
    p(m, [v]) {
      o === (o = a(m)) && r ? r.p(m, v) : (r.d(1), r = o(m), r && (r.c(), r.m(t, null))), c === (c = f(m)) && d ? d.p(m, v) : (d.d(1), d = c(m), d && (d.c(), d.m(i, null))), u.p(m, v);
    },
    i(m) {
      s || (g(u), s = !0);
    },
    o(m) {
      w(u), s = !1;
    },
    d(m) {
      m && $(e), r.d(), d.d(), u && u.d();
    }
  };
}
function co(n, e, l) {
  let { viewModel: t } = e;
  return n.$$set = (i) => {
    "viewModel" in i && l(0, t = i.viewModel);
  }, [t];
}
class fo extends Y {
  constructor(e) {
    super(), Q(this, e, co, ao, X, { viewModel: 0 }, Ys);
  }
}
function uo(n) {
  ne(n, "svelte-1jh217s", ".summary-row.svelte-1jh217s{display:flex;flex-direction:row;flex:0 0 auto;align-items:flex-end;margin:0.2rem 0;opacity:0.8}.summary-row.svelte-1jh217s:hover{opacity:1}.bar-container.svelte-1jh217s{display:flex;flex-direction:row;width:20rem;height:0.8rem;margin-bottom:0.25rem;cursor:pointer}.bar.svelte-1jh217s{height:0.8rem}.bar.striped.svelte-1jh217s{width:100%;background:repeating-linear-gradient(-45deg, goldenrod, goldenrod 0.4rem, darkgoldenrod 0.4rem, darkgoldenrod 1rem)}.title-container.svelte-1jh217s{display:flex;flex-direction:column;margin-left:0.8rem}.title-part.svelte-1jh217s{display:flex;flex-direction:row;align-items:baseline}.title.svelte-1jh217s{color:#fff;cursor:pointer}.subtitle.svelte-1jh217s{font-size:0.8em;margin-left:0.6rem;color:#aaa;cursor:pointer}.annotations.svelte-1jh217s{font-size:0.8em;margin-left:0.3rem;color:#aaa}.annotations.svelte-1jh217s .annotation{margin:0 0.3rem;padding:0.1rem 0.3rem;background-color:#1c1c1c;border:0.5px solid #555;border-radius:0.4rem}.summary-header-row.svelte-1jh217s{display:flex;flex-direction:row;flex:0 0 auto;align-items:center;margin:0.4rem 0}.header-bar.svelte-1jh217s{display:flex;width:20rem;height:1px;background-color:#555}.header-title.svelte-1jh217s{margin-left:0.8rem;color:#fff;font-size:1.2em}");
}
function mo(n) {
  let e, l, t, i, s, a = n[0].title + "", o, r, f;
  function c(_, k) {
    return _[0].diffPercentByBucket === void 0 ? vo : po;
  }
  let d = c(n), u = d(n), m = n[0].subtitle && jl(n), v = n[0].annotations && Pl(n);
  return {
    c() {
      e = h("div"), l = h("div"), u.c(), t = h("div"), i = h("div"), s = h("div"), m && m.c(), o = A(), v && v.c(), p(l, "class", "bar-container svelte-1jh217s"), p(s, "class", "title svelte-1jh217s"), p(i, "class", "title-part svelte-1jh217s"), p(t, "class", "title-container svelte-1jh217s"), p(e, "class", "summary-row svelte-1jh217s");
    },
    m(_, k) {
      y(_, e, k), b(e, l), u.m(l, null), b(e, t), b(t, i), b(i, s), s.innerHTML = a, m && m.m(i, null), b(i, o), v && v.m(i, null), r || (f = [
        re(l, "click", n[2]),
        re(s, "click", n[2])
      ], r = !0);
    },
    p(_, k) {
      d === (d = c(_)) && u ? u.p(_, k) : (u.d(1), u = d(_), u && (u.c(), u.m(l, null))), k & 1 && a !== (a = _[0].title + "") && (s.innerHTML = a), _[0].subtitle ? m ? m.p(_, k) : (m = jl(_), m.c(), m.m(i, o)) : m && (m.d(1), m = null), _[0].annotations ? v ? v.p(_, k) : (v = Pl(_), v.c(), v.m(i, null)) : v && (v.d(1), v = null);
    },
    d(_) {
      _ && $(e), u.d(), m && m.d(), v && v.d(), r = !1, $e(f);
    }
  };
}
function ho(n) {
  let e, l, t, i = n[0].title + "";
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), p(l, "class", "header-bar svelte-1jh217s"), p(t, "class", "header-title svelte-1jh217s"), p(e, "class", "summary-header-row svelte-1jh217s");
    },
    m(s, a) {
      y(s, e, a), b(e, l), b(e, t), t.innerHTML = i;
    },
    p(s, a) {
      a & 1 && i !== (i = s[0].title + "") && (t.innerHTML = i);
    },
    d(s) {
      s && $(e);
    }
  };
}
function po(n) {
  let e, l, t, i, s;
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), i = h("div"), s = h("div"), p(e, "class", "bar bucket-bg-0 svelte-1jh217s"), se(e, "width", n[1][0] + "%"), p(l, "class", "bar bucket-bg-1 svelte-1jh217s"), se(l, "width", n[1][1] + "%"), p(t, "class", "bar bucket-bg-2 svelte-1jh217s"), se(t, "width", n[1][2] + "%"), p(i, "class", "bar bucket-bg-3 svelte-1jh217s"), se(i, "width", n[1][3] + "%"), p(s, "class", "bar bucket-bg-4 svelte-1jh217s"), se(s, "width", n[1][4] + "%");
    },
    m(a, o) {
      y(a, e, o), y(a, l, o), y(a, t, o), y(a, i, o), y(a, s, o);
    },
    p: W,
    d(a) {
      a && $(e), a && $(l), a && $(t), a && $(i), a && $(s);
    }
  };
}
function vo(n) {
  let e;
  return {
    c() {
      e = h("div"), p(e, "class", "bar striped svelte-1jh217s");
    },
    m(l, t) {
      y(l, e, t);
    },
    p: W,
    d(l) {
      l && $(e);
    }
  };
}
function jl(n) {
  let e, l = n[0].subtitle + "", t, i;
  return {
    c() {
      e = h("div"), p(e, "class", "subtitle svelte-1jh217s");
    },
    m(s, a) {
      y(s, e, a), e.innerHTML = l, t || (i = re(e, "click", n[2]), t = !0);
    },
    p(s, a) {
      a & 1 && l !== (l = s[0].subtitle + "") && (e.innerHTML = l);
    },
    d(s) {
      s && $(e), t = !1, i();
    }
  };
}
function Pl(n) {
  let e, l = n[0].annotations + "";
  return {
    c() {
      e = h("div"), p(e, "class", "annotations svelte-1jh217s");
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p(t, i) {
      i & 1 && l !== (l = t[0].annotations + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function _o(n) {
  let e;
  function l(s, a) {
    return s[0].header ? ho : mo;
  }
  let t = l(n), i = t(n);
  return {
    c() {
      i.c(), e = A();
    },
    m(s, a) {
      i.m(s, a), y(s, e, a);
    },
    p(s, [a]) {
      t === (t = l(s)) && i ? i.p(s, a) : (i.d(1), i = t(s), i && (i.c(), i.m(e.parentNode, e)));
    },
    i: W,
    o: W,
    d(s) {
      i.d(s), s && $(e);
    }
  };
}
function go(n, e, l) {
  let { viewModel: t } = e;
  const i = t.diffPercentByBucket, s = ze();
  function a() {
    t.groupKey && s("command", {
      cmd: "show-comparison-detail",
      summaryRow: t
    });
  }
  return n.$$set = (o) => {
    "viewModel" in o && l(0, t = o.viewModel);
  }, [t, i, a];
}
class oe extends Y {
  constructor(e) {
    super(), Q(this, e, go, _o, X, { viewModel: 0 }, uo);
  }
}
function bo(n) {
  ne(n, "svelte-8opq0t", ".comparison-summary-container.svelte-8opq0t{display:flex;flex-direction:column;padding-top:2rem}.section-container.svelte-8opq0t{display:flex;flex-direction:column}.section-container.svelte-8opq0t:not(:last-child){margin-bottom:1.5rem}.footer.svelte-8opq0t{flex:0 0 1rem}");
}
function ql(n, e, l) {
  const t = n.slice();
  return t[15] = e[l], t;
}
function Nl(n, e, l) {
  const t = n.slice();
  return t[15] = e[l], t;
}
function Bl(n, e, l) {
  const t = n.slice();
  return t[15] = e[l], t;
}
function xl(n, e, l) {
  const t = n.slice();
  return t[15] = e[l], t;
}
function Kl(n, e, l) {
  const t = n.slice();
  return t[15] = e[l], t;
}
function Wl(n, e, l) {
  const t = n.slice();
  return t[15] = e[l], t;
}
function Gl(n, e, l) {
  const t = n.slice();
  return t[15] = e[l], t;
}
function El(n, e, l) {
  const t = n.slice();
  return t[15] = e[l], t;
}
function Fl(n, e, l) {
  const t = n.slice();
  return t[15] = e[l], t;
}
function Hl(n, e, l) {
  const t = n.slice();
  return t[15] = e[l], t;
}
function Al(n, e, l) {
  const t = n.slice();
  return t[12] = e[l], t;
}
function Ol(n, e, l) {
  const t = n.slice();
  return t[15] = e[l], t;
}
function wo(n) {
  let e, l, t, i, s, a, o = n[0].datasetsWithErrors && Ul(n), r = n[0].datasetsOnlyInLeft && Zl(n), f = n[0].datasetsOnlyInRight && Ql(n), c = n[0].datasetsWithDiffs && en(n), d = n[0].datasetsWithoutDiffs && ln(n);
  return {
    c() {
      o && o.c(), e = A(), r && r.c(), l = A(), f && f.c(), t = A(), c && c.c(), i = A(), d && d.c(), s = A();
    },
    m(u, m) {
      o && o.m(u, m), y(u, e, m), r && r.m(u, m), y(u, l, m), f && f.m(u, m), y(u, t, m), c && c.m(u, m), y(u, i, m), d && d.m(u, m), y(u, s, m), a = !0;
    },
    p(u, m) {
      u[0].datasetsWithErrors ? o ? (o.p(u, m), m[0] & 1 && g(o, 1)) : (o = Ul(u), o.c(), g(o, 1), o.m(e.parentNode, e)) : o && (B(), w(o, 1, 1, () => {
        o = null;
      }), x()), u[0].datasetsOnlyInLeft ? r ? (r.p(u, m), m[0] & 1 && g(r, 1)) : (r = Zl(u), r.c(), g(r, 1), r.m(l.parentNode, l)) : r && (B(), w(r, 1, 1, () => {
        r = null;
      }), x()), u[0].datasetsOnlyInRight ? f ? (f.p(u, m), m[0] & 1 && g(f, 1)) : (f = Ql(u), f.c(), g(f, 1), f.m(t.parentNode, t)) : f && (B(), w(f, 1, 1, () => {
        f = null;
      }), x()), u[0].datasetsWithDiffs ? c ? (c.p(u, m), m[0] & 1 && g(c, 1)) : (c = en(u), c.c(), g(c, 1), c.m(i.parentNode, i)) : c && (B(), w(c, 1, 1, () => {
        c = null;
      }), x()), u[0].datasetsWithoutDiffs ? d ? (d.p(u, m), m[0] & 1 && g(d, 1)) : (d = ln(u), d.c(), g(d, 1), d.m(s.parentNode, s)) : d && (B(), w(d, 1, 1, () => {
        d = null;
      }), x());
    },
    i(u) {
      a || (g(o), g(r), g(f), g(c), g(d), a = !0);
    },
    o(u) {
      w(o), w(r), w(f), w(c), w(d), a = !1;
    },
    d(u) {
      o && o.d(u), u && $(e), r && r.d(u), u && $(l), f && f.d(u), u && $(t), c && c.d(u), u && $(i), d && d.d(u), u && $(s);
    }
  };
}
function ko(n) {
  let e, l, t, i, s, a, o = n[0].scenariosWithErrors && sn(n), r = n[0].scenariosOnlyInLeft && rn(n), f = n[0].scenariosOnlyInRight && cn(n), c = n[0].scenariosWithDiffs && dn(n), d = n[0].scenariosWithoutDiffs && mn(n);
  return {
    c() {
      o && o.c(), e = A(), r && r.c(), l = A(), f && f.c(), t = A(), c && c.c(), i = A(), d && d.c(), s = A();
    },
    m(u, m) {
      o && o.m(u, m), y(u, e, m), r && r.m(u, m), y(u, l, m), f && f.m(u, m), y(u, t, m), c && c.m(u, m), y(u, i, m), d && d.m(u, m), y(u, s, m), a = !0;
    },
    p(u, m) {
      u[0].scenariosWithErrors ? o ? (o.p(u, m), m[0] & 1 && g(o, 1)) : (o = sn(u), o.c(), g(o, 1), o.m(e.parentNode, e)) : o && (B(), w(o, 1, 1, () => {
        o = null;
      }), x()), u[0].scenariosOnlyInLeft ? r ? (r.p(u, m), m[0] & 1 && g(r, 1)) : (r = rn(u), r.c(), g(r, 1), r.m(l.parentNode, l)) : r && (B(), w(r, 1, 1, () => {
        r = null;
      }), x()), u[0].scenariosOnlyInRight ? f ? (f.p(u, m), m[0] & 1 && g(f, 1)) : (f = cn(u), f.c(), g(f, 1), f.m(t.parentNode, t)) : f && (B(), w(f, 1, 1, () => {
        f = null;
      }), x()), u[0].scenariosWithDiffs ? c ? (c.p(u, m), m[0] & 1 && g(c, 1)) : (c = dn(u), c.c(), g(c, 1), c.m(i.parentNode, i)) : c && (B(), w(c, 1, 1, () => {
        c = null;
      }), x()), u[0].scenariosWithoutDiffs ? d ? (d.p(u, m), m[0] & 1 && g(d, 1)) : (d = mn(u), d.c(), g(d, 1), d.m(s.parentNode, s)) : d && (B(), w(d, 1, 1, () => {
        d = null;
      }), x());
    },
    i(u) {
      a || (g(o), g(r), g(f), g(c), g(d), a = !0);
    },
    o(u) {
      w(o), w(r), w(f), w(c), w(d), a = !1;
    },
    d(u) {
      o && o.d(u), u && $(e), r && r.d(u), u && $(l), f && f.d(u), u && $(t), c && c.d(u), u && $(i), d && d.d(u), u && $(s);
    }
  };
}
function $o(n) {
  let e, l, t = n[0].viewGroups, i = [];
  for (let a = 0; a < t.length; a += 1)
    i[a] = vn(Al(n, t, a));
  const s = (a) => w(i[a], 1, 1, () => {
    i[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < i.length; a += 1)
        i[a].c();
      e = A();
    },
    m(a, o) {
      for (let r = 0; r < i.length; r += 1)
        i[r].m(a, o);
      y(a, e, o), l = !0;
    },
    p(a, o) {
      if (o[0] & 1) {
        t = a[0].viewGroups;
        let r;
        for (r = 0; r < t.length; r += 1) {
          const f = Al(a, t, r);
          i[r] ? (i[r].p(f, o), g(i[r], 1)) : (i[r] = vn(f), i[r].c(), g(i[r], 1), i[r].m(e.parentNode, e));
        }
        for (B(), r = t.length; r < i.length; r += 1)
          s(r);
        x();
      }
    },
    i(a) {
      if (!l) {
        for (let o = 0; o < t.length; o += 1)
          g(i[o]);
        l = !0;
      }
    },
    o(a) {
      i = i.filter(Boolean);
      for (let o = 0; o < i.length; o += 1)
        w(i[o]);
      l = !1;
    },
    d(a) {
      O(i, a), a && $(e);
    }
  };
}
function Ul(n) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: n[0].datasetsWithErrors.header
    }
  });
  let i = n[0].datasetsWithErrors.rows, s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = Xl(Kl(n, i, o));
  const a = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, r) {
      y(o, e, r), z(l, e, null);
      for (let f = 0; f < s.length; f += 1)
        s[f].m(e, null);
      t = !0;
    },
    p(o, r) {
      const f = {};
      if (r[0] & 1 && (f.viewModel = o[0].datasetsWithErrors.header), l.$set(f), r[0] & 1) {
        i = o[0].datasetsWithErrors.rows;
        let c;
        for (c = 0; c < i.length; c += 1) {
          const d = Kl(o, i, c);
          s[c] ? (s[c].p(d, r), g(s[c], 1)) : (s[c] = Xl(d), s[c].c(), g(s[c], 1), s[c].m(e, null));
        }
        for (B(), c = i.length; c < s.length; c += 1)
          a(c);
        x();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let r = 0; r < i.length; r += 1)
          g(s[r]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        w(s[r]);
      t = !1;
    },
    d(o) {
      o && $(e), j(l), O(s, o);
    }
  };
}
function Xl(n) {
  let e, l;
  return e = new oe({
    props: { viewModel: n[15] }
  }), e.$on("command", n[7]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & 1 && (s.viewModel = t[15]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function Zl(n) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: n[0].datasetsOnlyInLeft.header
    }
  });
  let i = n[0].datasetsOnlyInLeft.rows, s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = Jl(xl(n, i, o));
  const a = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, r) {
      y(o, e, r), z(l, e, null);
      for (let f = 0; f < s.length; f += 1)
        s[f].m(e, null);
      t = !0;
    },
    p(o, r) {
      const f = {};
      if (r[0] & 1 && (f.viewModel = o[0].datasetsOnlyInLeft.header), l.$set(f), r[0] & 1) {
        i = o[0].datasetsOnlyInLeft.rows;
        let c;
        for (c = 0; c < i.length; c += 1) {
          const d = xl(o, i, c);
          s[c] ? (s[c].p(d, r), g(s[c], 1)) : (s[c] = Jl(d), s[c].c(), g(s[c], 1), s[c].m(e, null));
        }
        for (B(), c = i.length; c < s.length; c += 1)
          a(c);
        x();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let r = 0; r < i.length; r += 1)
          g(s[r]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        w(s[r]);
      t = !1;
    },
    d(o) {
      o && $(e), j(l), O(s, o);
    }
  };
}
function Jl(n) {
  let e, l;
  return e = new oe({
    props: { viewModel: n[15] }
  }), e.$on("command", n[8]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & 1 && (s.viewModel = t[15]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function Ql(n) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: n[0].datasetsOnlyInRight.header
    }
  });
  let i = n[0].datasetsOnlyInRight.rows, s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = Yl(Bl(n, i, o));
  const a = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, r) {
      y(o, e, r), z(l, e, null);
      for (let f = 0; f < s.length; f += 1)
        s[f].m(e, null);
      t = !0;
    },
    p(o, r) {
      const f = {};
      if (r[0] & 1 && (f.viewModel = o[0].datasetsOnlyInRight.header), l.$set(f), r[0] & 1) {
        i = o[0].datasetsOnlyInRight.rows;
        let c;
        for (c = 0; c < i.length; c += 1) {
          const d = Bl(o, i, c);
          s[c] ? (s[c].p(d, r), g(s[c], 1)) : (s[c] = Yl(d), s[c].c(), g(s[c], 1), s[c].m(e, null));
        }
        for (B(), c = i.length; c < s.length; c += 1)
          a(c);
        x();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let r = 0; r < i.length; r += 1)
          g(s[r]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        w(s[r]);
      t = !1;
    },
    d(o) {
      o && $(e), j(l), O(s, o);
    }
  };
}
function Yl(n) {
  let e, l;
  return e = new oe({
    props: { viewModel: n[15] }
  }), e.$on("command", n[9]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & 1 && (s.viewModel = t[15]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function en(n) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: n[0].datasetsWithDiffs.header
    }
  });
  let i = n[0].datasetsWithDiffs.rows, s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = tn(Nl(n, i, o));
  const a = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, r) {
      y(o, e, r), z(l, e, null);
      for (let f = 0; f < s.length; f += 1)
        s[f].m(e, null);
      t = !0;
    },
    p(o, r) {
      const f = {};
      if (r[0] & 1 && (f.viewModel = o[0].datasetsWithDiffs.header), l.$set(f), r[0] & 1) {
        i = o[0].datasetsWithDiffs.rows;
        let c;
        for (c = 0; c < i.length; c += 1) {
          const d = Nl(o, i, c);
          s[c] ? (s[c].p(d, r), g(s[c], 1)) : (s[c] = tn(d), s[c].c(), g(s[c], 1), s[c].m(e, null));
        }
        for (B(), c = i.length; c < s.length; c += 1)
          a(c);
        x();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let r = 0; r < i.length; r += 1)
          g(s[r]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        w(s[r]);
      t = !1;
    },
    d(o) {
      o && $(e), j(l), O(s, o);
    }
  };
}
function tn(n) {
  let e, l;
  return e = new oe({
    props: { viewModel: n[15] }
  }), e.$on("command", n[10]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & 1 && (s.viewModel = t[15]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function ln(n) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: n[0].datasetsWithoutDiffs.header
    }
  });
  let i = n[0].datasetsWithoutDiffs.rows, s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = nn(ql(n, i, o));
  const a = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, r) {
      y(o, e, r), z(l, e, null);
      for (let f = 0; f < s.length; f += 1)
        s[f].m(e, null);
      t = !0;
    },
    p(o, r) {
      const f = {};
      if (r[0] & 1 && (f.viewModel = o[0].datasetsWithoutDiffs.header), l.$set(f), r[0] & 1) {
        i = o[0].datasetsWithoutDiffs.rows;
        let c;
        for (c = 0; c < i.length; c += 1) {
          const d = ql(o, i, c);
          s[c] ? (s[c].p(d, r), g(s[c], 1)) : (s[c] = nn(d), s[c].c(), g(s[c], 1), s[c].m(e, null));
        }
        for (B(), c = i.length; c < s.length; c += 1)
          a(c);
        x();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let r = 0; r < i.length; r += 1)
          g(s[r]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        w(s[r]);
      t = !1;
    },
    d(o) {
      o && $(e), j(l), O(s, o);
    }
  };
}
function nn(n) {
  let e, l;
  return e = new oe({
    props: { viewModel: n[15] }
  }), e.$on("command", n[11]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & 1 && (s.viewModel = t[15]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function sn(n) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: n[0].scenariosWithErrors.header
    }
  });
  let i = n[0].scenariosWithErrors.rows, s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = on(Hl(n, i, o));
  const a = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, r) {
      y(o, e, r), z(l, e, null);
      for (let f = 0; f < s.length; f += 1)
        s[f].m(e, null);
      t = !0;
    },
    p(o, r) {
      const f = {};
      if (r[0] & 1 && (f.viewModel = o[0].scenariosWithErrors.header), l.$set(f), r[0] & 1) {
        i = o[0].scenariosWithErrors.rows;
        let c;
        for (c = 0; c < i.length; c += 1) {
          const d = Hl(o, i, c);
          s[c] ? (s[c].p(d, r), g(s[c], 1)) : (s[c] = on(d), s[c].c(), g(s[c], 1), s[c].m(e, null));
        }
        for (B(), c = i.length; c < s.length; c += 1)
          a(c);
        x();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let r = 0; r < i.length; r += 1)
          g(s[r]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        w(s[r]);
      t = !1;
    },
    d(o) {
      o && $(e), j(l), O(s, o);
    }
  };
}
function on(n) {
  let e, l;
  return e = new oe({
    props: { viewModel: n[15] }
  }), e.$on("command", n[2]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & 1 && (s.viewModel = t[15]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function rn(n) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: n[0].scenariosOnlyInLeft.header
    }
  });
  let i = n[0].scenariosOnlyInLeft.rows, s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = an(Fl(n, i, o));
  const a = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, r) {
      y(o, e, r), z(l, e, null);
      for (let f = 0; f < s.length; f += 1)
        s[f].m(e, null);
      t = !0;
    },
    p(o, r) {
      const f = {};
      if (r[0] & 1 && (f.viewModel = o[0].scenariosOnlyInLeft.header), l.$set(f), r[0] & 1) {
        i = o[0].scenariosOnlyInLeft.rows;
        let c;
        for (c = 0; c < i.length; c += 1) {
          const d = Fl(o, i, c);
          s[c] ? (s[c].p(d, r), g(s[c], 1)) : (s[c] = an(d), s[c].c(), g(s[c], 1), s[c].m(e, null));
        }
        for (B(), c = i.length; c < s.length; c += 1)
          a(c);
        x();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let r = 0; r < i.length; r += 1)
          g(s[r]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        w(s[r]);
      t = !1;
    },
    d(o) {
      o && $(e), j(l), O(s, o);
    }
  };
}
function an(n) {
  let e, l;
  return e = new oe({
    props: { viewModel: n[15] }
  }), e.$on("command", n[3]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & 1 && (s.viewModel = t[15]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function cn(n) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: n[0].scenariosOnlyInRight.header
    }
  });
  let i = n[0].scenariosOnlyInRight.rows, s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = fn(El(n, i, o));
  const a = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, r) {
      y(o, e, r), z(l, e, null);
      for (let f = 0; f < s.length; f += 1)
        s[f].m(e, null);
      t = !0;
    },
    p(o, r) {
      const f = {};
      if (r[0] & 1 && (f.viewModel = o[0].scenariosOnlyInRight.header), l.$set(f), r[0] & 1) {
        i = o[0].scenariosOnlyInRight.rows;
        let c;
        for (c = 0; c < i.length; c += 1) {
          const d = El(o, i, c);
          s[c] ? (s[c].p(d, r), g(s[c], 1)) : (s[c] = fn(d), s[c].c(), g(s[c], 1), s[c].m(e, null));
        }
        for (B(), c = i.length; c < s.length; c += 1)
          a(c);
        x();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let r = 0; r < i.length; r += 1)
          g(s[r]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        w(s[r]);
      t = !1;
    },
    d(o) {
      o && $(e), j(l), O(s, o);
    }
  };
}
function fn(n) {
  let e, l;
  return e = new oe({
    props: { viewModel: n[15] }
  }), e.$on("command", n[4]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & 1 && (s.viewModel = t[15]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function dn(n) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: n[0].scenariosWithDiffs.header
    }
  });
  let i = n[0].scenariosWithDiffs.rows, s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = un(Gl(n, i, o));
  const a = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, r) {
      y(o, e, r), z(l, e, null);
      for (let f = 0; f < s.length; f += 1)
        s[f].m(e, null);
      t = !0;
    },
    p(o, r) {
      const f = {};
      if (r[0] & 1 && (f.viewModel = o[0].scenariosWithDiffs.header), l.$set(f), r[0] & 1) {
        i = o[0].scenariosWithDiffs.rows;
        let c;
        for (c = 0; c < i.length; c += 1) {
          const d = Gl(o, i, c);
          s[c] ? (s[c].p(d, r), g(s[c], 1)) : (s[c] = un(d), s[c].c(), g(s[c], 1), s[c].m(e, null));
        }
        for (B(), c = i.length; c < s.length; c += 1)
          a(c);
        x();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let r = 0; r < i.length; r += 1)
          g(s[r]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        w(s[r]);
      t = !1;
    },
    d(o) {
      o && $(e), j(l), O(s, o);
    }
  };
}
function un(n) {
  let e, l;
  return e = new oe({
    props: { viewModel: n[15] }
  }), e.$on("command", n[5]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & 1 && (s.viewModel = t[15]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function mn(n) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: n[0].scenariosWithoutDiffs.header
    }
  });
  let i = n[0].scenariosWithoutDiffs.rows, s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = hn(Wl(n, i, o));
  const a = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, r) {
      y(o, e, r), z(l, e, null);
      for (let f = 0; f < s.length; f += 1)
        s[f].m(e, null);
      t = !0;
    },
    p(o, r) {
      const f = {};
      if (r[0] & 1 && (f.viewModel = o[0].scenariosWithoutDiffs.header), l.$set(f), r[0] & 1) {
        i = o[0].scenariosWithoutDiffs.rows;
        let c;
        for (c = 0; c < i.length; c += 1) {
          const d = Wl(o, i, c);
          s[c] ? (s[c].p(d, r), g(s[c], 1)) : (s[c] = hn(d), s[c].c(), g(s[c], 1), s[c].m(e, null));
        }
        for (B(), c = i.length; c < s.length; c += 1)
          a(c);
        x();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let r = 0; r < i.length; r += 1)
          g(s[r]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        w(s[r]);
      t = !1;
    },
    d(o) {
      o && $(e), j(l), O(s, o);
    }
  };
}
function hn(n) {
  let e, l;
  return e = new oe({
    props: { viewModel: n[15] }
  }), e.$on("command", n[6]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & 1 && (s.viewModel = t[15]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function pn(n) {
  let e, l;
  return e = new oe({
    props: { viewModel: n[15] }
  }), e.$on("command", n[1]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & 1 && (s.viewModel = t[15]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function vn(n) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: n[12].header
    }
  });
  let i = n[12].rows, s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = pn(Ol(n, i, o));
  const a = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, r) {
      y(o, e, r), z(l, e, null);
      for (let f = 0; f < s.length; f += 1)
        s[f].m(e, null);
      t = !0;
    },
    p(o, r) {
      const f = {};
      if (r[0] & 1 && (f.viewModel = o[12].header), l.$set(f), r[0] & 1) {
        i = o[12].rows;
        let c;
        for (c = 0; c < i.length; c += 1) {
          const d = Ol(o, i, c);
          s[c] ? (s[c].p(d, r), g(s[c], 1)) : (s[c] = pn(d), s[c].c(), g(s[c], 1), s[c].m(e, null));
        }
        for (B(), c = i.length; c < s.length; c += 1)
          a(c);
        x();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let r = 0; r < i.length; r += 1)
          g(s[r]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        w(s[r]);
      t = !1;
    },
    d(o) {
      o && $(e), j(l), O(s, o);
    }
  };
}
function yo(n) {
  let e, l, t, i, s;
  const a = [$o, ko, wo], o = [];
  function r(f, c) {
    return f[0].kind === "views" ? 0 : f[0].kind === "by-scenario" ? 1 : f[0].kind === "by-dataset" ? 2 : -1;
  }
  return ~(l = r(n)) && (t = o[l] = a[l](n)), {
    c() {
      e = h("div"), t && t.c(), i = h("div"), p(i, "class", "footer svelte-8opq0t"), p(e, "class", "comparison-summary-container svelte-8opq0t");
    },
    m(f, c) {
      y(f, e, c), ~l && o[l].m(e, null), b(e, i), s = !0;
    },
    p(f, c) {
      let d = l;
      l = r(f), l === d ? ~l && o[l].p(f, c) : (t && (B(), w(o[d], 1, 1, () => {
        o[d] = null;
      }), x()), ~l ? (t = o[l], t ? t.p(f, c) : (t = o[l] = a[l](f), t.c()), g(t, 1), t.m(e, i)) : t = null);
    },
    i(f) {
      s || (g(t), s = !0);
    },
    o(f) {
      w(t), s = !1;
    },
    d(f) {
      f && $(e), ~l && o[l].d();
    }
  };
}
function Mo(n, e, l) {
  let { viewModel: t } = e;
  function i(_) {
    ae.call(this, n, _);
  }
  function s(_) {
    ae.call(this, n, _);
  }
  function a(_) {
    ae.call(this, n, _);
  }
  function o(_) {
    ae.call(this, n, _);
  }
  function r(_) {
    ae.call(this, n, _);
  }
  function f(_) {
    ae.call(this, n, _);
  }
  function c(_) {
    ae.call(this, n, _);
  }
  function d(_) {
    ae.call(this, n, _);
  }
  function u(_) {
    ae.call(this, n, _);
  }
  function m(_) {
    ae.call(this, n, _);
  }
  function v(_) {
    ae.call(this, n, _);
  }
  return n.$$set = (_) => {
    "viewModel" in _ && l(0, t = _.viewModel);
  }, [
    t,
    i,
    s,
    a,
    o,
    r,
    f,
    c,
    d,
    u,
    m,
    v
  ];
}
class vt extends Y {
  constructor(e) {
    super(), Q(this, e, Mo, yo, X, { viewModel: 0 }, bo, [-1, -1]);
  }
}
function Ro(n) {
  ne(n, "svelte-7mv27e", "td.svelte-7mv27e{padding:0;height:1.8rem}.name.svelte-7mv27e{padding-right:3rem}.row-header{color:#aaa}.cell.svelte-7mv27e{display:flex;width:100%;flex-direction:row;align-items:baseline;font-family:monospace}.cell.dim.svelte-7mv27e{color:#777}.value.svelte-7mv27e{flex:1;padding-right:0.4rem;text-align:right}.change.svelte-7mv27e{flex:1;padding-left:0.4rem;text-align:left;font-size:0.8em}.plot.svelte-7mv27e{width:20rem;padding-left:2rem;padding-right:2rem;cursor:pointer}");
}
function _n(n) {
  let e, l, t, i, s;
  return l = new at({
    props: {
      viewModel: n[0].dotPlot,
      colorClass: n[2]
    }
  }), {
    c() {
      e = h("td"), q(l.$$.fragment), p(e, "class", "plot svelte-7mv27e");
    },
    m(a, o) {
      y(a, e, o), z(l, e, null), t = !0, i || (s = re(e, "click", n[3]), i = !0);
    },
    p(a, o) {
      const r = {};
      o & 1 && (r.viewModel = a[0].dotPlot), l.$set(r);
    },
    i(a) {
      t || (g(l.$$.fragment, a), t = !0);
    },
    o(a) {
      w(l.$$.fragment, a), t = !1;
    },
    d(a) {
      a && $(e), j(l), i = !1, s();
    }
  };
}
function So(n) {
  let e, l = n[0].modelName + "", t, i, s, a, o = n[0].inputs + "", r, f, c, d, u, m = n[0].outputs + "", v, _, k, M, R, S = n[0].modelSize + "", C, L, N = n[0].modelSizePctChange + "", T, P, V, F, D = n[0].dataSize + "", E, K, Z = n[0].dataSizePctChange + "", ie, ve, we, J, ee = n[0].avgTime + "", U, le, ue = n[0].avgTimePctChange + "", he, ce, _e, ye, Se = n[0].minTime + "", Ce, Qe, je, Pe, xe, Ke = n[0].maxTime + "", Ye, et, qe, me, fe = n[0].dotPlot && _n(n);
  return {
    c() {
      e = h("td"), t = I(l), i = h("td"), s = h("div"), a = h("div"), r = I(o), f = h("div"), c = h("td"), d = h("div"), u = h("div"), v = I(m), _ = h("div"), k = h("td"), M = h("div"), R = h("div"), C = I(S), L = h("div"), T = I(N), P = h("td"), V = h("div"), F = h("div"), E = I(D), K = h("div"), ie = I(Z), ve = h("td"), we = h("div"), J = h("div"), U = I(ee), le = h("div"), he = I(ue), ce = h("td"), _e = h("div"), ye = h("div"), Ce = I(Se), Qe = h("div"), je = h("td"), Pe = h("div"), xe = h("div"), Ye = I(Ke), et = h("div"), fe && fe.c(), qe = A(), p(e, "class", "name " + n[1] + " svelte-7mv27e"), p(a, "class", "value svelte-7mv27e"), p(f, "class", "change svelte-7mv27e"), p(s, "class", "cell svelte-7mv27e"), p(i, "class", "svelte-7mv27e"), p(u, "class", "value svelte-7mv27e"), p(_, "class", "change svelte-7mv27e"), p(d, "class", "cell svelte-7mv27e"), p(c, "class", "svelte-7mv27e"), p(R, "class", "value svelte-7mv27e"), p(L, "class", "change svelte-7mv27e"), p(M, "class", "cell svelte-7mv27e"), p(k, "class", "svelte-7mv27e"), p(F, "class", "value svelte-7mv27e"), p(K, "class", "change svelte-7mv27e"), p(V, "class", "cell svelte-7mv27e"), p(P, "class", "svelte-7mv27e"), p(J, "class", "value svelte-7mv27e"), p(le, "class", "change svelte-7mv27e"), p(we, "class", "cell svelte-7mv27e"), p(ve, "class", "svelte-7mv27e"), p(ye, "class", "value svelte-7mv27e"), p(Qe, "class", "change svelte-7mv27e"), p(_e, "class", "cell dim svelte-7mv27e"), p(ce, "class", "svelte-7mv27e"), p(xe, "class", "value svelte-7mv27e"), p(et, "class", "change svelte-7mv27e"), p(Pe, "class", "cell dim svelte-7mv27e"), p(je, "class", "svelte-7mv27e");
    },
    m(H, te) {
      y(H, e, te), b(e, t), y(H, i, te), b(i, s), b(s, a), b(a, r), b(s, f), y(H, c, te), b(c, d), b(d, u), b(u, v), b(d, _), y(H, k, te), b(k, M), b(M, R), b(R, C), b(M, L), b(L, T), y(H, P, te), b(P, V), b(V, F), b(F, E), b(V, K), b(K, ie), y(H, ve, te), b(ve, we), b(we, J), b(J, U), b(we, le), b(le, he), y(H, ce, te), b(ce, _e), b(_e, ye), b(ye, Ce), b(_e, Qe), y(H, je, te), b(je, Pe), b(Pe, xe), b(xe, Ye), b(Pe, et), fe && fe.m(H, te), y(H, qe, te), me = !0;
    },
    p(H, [te]) {
      (!me || te & 1) && l !== (l = H[0].modelName + "") && G(t, l), (!me || te & 1) && o !== (o = H[0].inputs + "") && G(r, o), (!me || te & 1) && m !== (m = H[0].outputs + "") && G(v, m), (!me || te & 1) && S !== (S = H[0].modelSize + "") && G(C, S), (!me || te & 1) && N !== (N = H[0].modelSizePctChange + "") && G(T, N), (!me || te & 1) && D !== (D = H[0].dataSize + "") && G(E, D), (!me || te & 1) && Z !== (Z = H[0].dataSizePctChange + "") && G(ie, Z), (!me || te & 1) && ee !== (ee = H[0].avgTime + "") && G(U, ee), (!me || te & 1) && ue !== (ue = H[0].avgTimePctChange + "") && G(he, ue), (!me || te & 1) && Se !== (Se = H[0].minTime + "") && G(Ce, Se), (!me || te & 1) && Ke !== (Ke = H[0].maxTime + "") && G(Ye, Ke), H[0].dotPlot ? fe ? (fe.p(H, te), te & 1 && g(fe, 1)) : (fe = _n(H), fe.c(), g(fe, 1), fe.m(qe.parentNode, qe)) : fe && (B(), w(fe, 1, 1, () => {
        fe = null;
      }), x());
    },
    i(H) {
      me || (g(fe), me = !0);
    },
    o(H) {
      w(fe), me = !1;
    },
    d(H) {
      H && $(e), H && $(i), H && $(c), H && $(k), H && $(P), H && $(ve), H && $(ce), H && $(je), fe && fe.d(H), H && $(qe);
    }
  };
}
function Co(n, e, l) {
  let { viewModel: t } = e;
  const i = t.datasetClassIndex, s = i !== void 0 ? `dataset-color-${i}` : "row-header", a = i !== void 0 ? `dataset-bg-${i}` : "", o = ze();
  function r() {
    o("command", { cmd: "show-perf" });
  }
  return n.$$set = (f) => {
    "viewModel" in f && l(0, t = f.viewModel);
  }, [t, s, a, r];
}
class lt extends Y {
  constructor(e) {
    super(), Q(this, e, Co, So, X, { viewModel: 0 }, Ro);
  }
}
function Lo(n) {
  ne(n, "svelte-18acnq2", "table.svelte-18acnq2{border-collapse:collapse}th.svelte-18acnq2{color:#aaa;text-align:left;font-family:Roboto;font-weight:500}th.dim.svelte-18acnq2{color:#555}th.svelte-18acnq2:nth-child(2),th.svelte-18acnq2:nth-child(3){width:6rem}th.svelte-18acnq2:nth-child(4),th.svelte-18acnq2:nth-child(5){width:10rem}th.svelte-18acnq2:nth-child(6){width:8rem}th.svelte-18acnq2:nth-child(7),th.svelte-18acnq2:nth-child(8){width:8rem}");
}
function Do(n) {
  let e, l, t, i, s, a, o, r, f;
  return i = new lt({
    props: { viewModel: n[0].row1 }
  }), i.$on("command", n[1]), a = new lt({
    props: { viewModel: n[0].row2 }
  }), a.$on("command", n[2]), r = new lt({
    props: { viewModel: n[0].row3 }
  }), r.$on("command", n[3]), {
    c() {
      e = h("table"), l = h("tr"), l.innerHTML = '<th class="svelte-18acnq2"></th><th class="svelte-18acnq2">inputs</th><th class="svelte-18acnq2">outputs</th><th class="svelte-18acnq2">model size (bytes)</th><th class="svelte-18acnq2">data size (bytes)</th><th class="svelte-18acnq2">avg time (ms)</th><th class="dim svelte-18acnq2">min time (ms)</th><th class="dim svelte-18acnq2">max time (ms)</th><th class="svelte-18acnq2"></th>', t = h("tr"), q(i.$$.fragment), s = h("tr"), q(a.$$.fragment), o = h("tr"), q(r.$$.fragment), p(e, "class", "header svelte-18acnq2");
    },
    m(c, d) {
      y(c, e, d), b(e, l), b(e, t), z(i, t, null), b(e, s), z(a, s, null), b(e, o), z(r, o, null), f = !0;
    },
    p(c, [d]) {
      const u = {};
      d & 1 && (u.viewModel = c[0].row1), i.$set(u);
      const m = {};
      d & 1 && (m.viewModel = c[0].row2), a.$set(m);
      const v = {};
      d & 1 && (v.viewModel = c[0].row3), r.$set(v);
    },
    i(c) {
      f || (g(i.$$.fragment, c), g(a.$$.fragment, c), g(r.$$.fragment, c), f = !0);
    },
    o(c) {
      w(i.$$.fragment, c), w(a.$$.fragment, c), w(r.$$.fragment, c), f = !1;
    },
    d(c) {
      c && $(e), j(i), j(a), j(r);
    }
  };
}
function To(n, e, l) {
  let { viewModel: t } = e;
  function i(o) {
    ae.call(this, n, o);
  }
  function s(o) {
    ae.call(this, n, o);
  }
  function a(o) {
    ae.call(this, n, o);
  }
  return n.$$set = (o) => {
    "viewModel" in o && l(0, t = o.viewModel);
  }, [t, i, s, a];
}
class Vo extends Y {
  constructor(e) {
    super(), Q(this, e, To, Do, X, { viewModel: 0 }, Lo);
  }
}
function Io(n) {
  ne(n, "svelte-gl55w2", ".tab-bar.svelte-gl55w2{position:sticky;top:0;display:flex;flex-direction:row;gap:3rem;background-color:#272727;z-index:1000;margin:0 -1rem;padding:0 1rem;box-shadow:0 1rem 0.5rem -0.5rem rgba(0, 0, 0, 0.8)}.tab-item.svelte-gl55w2{display:flex;flex-direction:column;padding:0.5rem 3rem 0.3rem 0;cursor:pointer;opacity:0.7;border-bottom:solid 1px transparent}.tab-item.svelte-gl55w2:hover{opacity:1}.tab-item.selected.svelte-gl55w2{opacity:1;border-bottom:solid 1px #555}.tab-title.svelte-gl55w2{font-size:1.6rem;font-weight:700;color:#fff;margin-bottom:0.2rem;cursor:pointer}.tab-subtitle.svelte-gl55w2{font-size:1rem;font-weight:400}");
}
function gn(n, e, l) {
  const t = n.slice();
  return t[8] = e[l], t[10] = l, t;
}
function bn(n) {
  let e, l, t = n[8].title + "", i, s, a = n[8].subtitle + "", o, r, f, c;
  function d() {
    return n[6](n[10]);
  }
  return {
    c() {
      e = h("div"), l = h("div"), i = I(t), s = h("div"), o = I(a), p(l, "class", "tab-title svelte-gl55w2"), p(s, "class", r = "tab-subtitle " + n[8].subtitleClass + " svelte-gl55w2"), p(e, "class", "tab-item svelte-gl55w2"), pe(e, "selected", n[8].id === n[1]);
    },
    m(u, m) {
      y(u, e, m), b(e, l), b(l, i), b(e, s), b(s, o), f || (c = re(e, "click", d), f = !0);
    },
    p(u, m) {
      n = u, m & 1 && t !== (t = n[8].title + "") && G(i, t), m & 1 && a !== (a = n[8].subtitle + "") && G(o, a), m & 1 && r !== (r = "tab-subtitle " + n[8].subtitleClass + " svelte-gl55w2") && p(s, "class", r), m & 3 && pe(e, "selected", n[8].id === n[1]);
    },
    d(u) {
      u && $(e), f = !1, c();
    }
  };
}
function zo(n) {
  let e, l, t, i = n[0].items, s = [];
  for (let a = 0; a < i.length; a += 1)
    s[a] = bn(gn(n, i, a));
  return {
    c() {
      e = h("div");
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      p(e, "class", "tab-bar svelte-gl55w2");
    },
    m(a, o) {
      y(a, e, o);
      for (let r = 0; r < s.length; r += 1)
        s[r].m(e, null);
      l || (t = [
        re(window, "keydown", n[4]),
        re(e, "command", n[5])
      ], l = !0);
    },
    p(a, [o]) {
      if (o & 11) {
        i = a[0].items;
        let r;
        for (r = 0; r < i.length; r += 1) {
          const f = gn(a, i, r);
          s[r] ? s[r].p(f, o) : (s[r] = bn(f), s[r].c(), s[r].m(e, null));
        }
        for (; r < s.length; r += 1)
          s[r].d(1);
        s.length = i.length;
      }
    },
    i: W,
    o: W,
    d(a) {
      a && $(e), O(s, a), l = !1, $e(t);
    }
  };
}
function jo(n, e, l) {
  let t, { viewModel: i } = e;
  const s = i.selectedItemId;
  ge(n, s, (d) => l(1, t = d));
  const a = ze();
  function o(d) {
    i.selectedIndex.set(d);
  }
  function r(d) {
    d.key === "ArrowLeft" ? (i.selectedIndex.update((u) => u > 0 ? u - 1 : u), d.preventDefault()) : d.key === "ArrowRight" ? (i.selectedIndex.update((u) => u < i.items.length - 1 ? u + 1 : u), d.preventDefault()) : d.key === "ArrowDown" && (a("command", {
      cmd: "enter-tab",
      itemId: t
    }), d.preventDefault());
  }
  function f(d) {
    ae.call(this, n, d);
  }
  const c = (d) => o(d);
  return n.$$set = (d) => {
    "viewModel" in d && l(0, i = d.viewModel);
  }, [
    i,
    t,
    s,
    o,
    r,
    f,
    c
  ];
}
class Po extends Y {
  constructor(e) {
    super(), Q(this, e, jo, zo, X, { viewModel: 0 }, Io);
  }
}
function qo(n) {
  ne(n, "svelte-hf3w0v", ".summary-container.svelte-hf3w0v{display:flex;flex-direction:column;flex:1}.scroll-container.svelte-hf3w0v{position:relative;display:flex;flex:1 1 1px;flex-direction:column;padding:0 1rem;overflow:auto}.header-container.svelte-hf3w0v{margin-bottom:1rem}.line.svelte-hf3w0v{min-height:1px;margin-bottom:0.5rem;background-color:#555}");
}
function wn(n) {
  let e, l, t, i;
  return l = new Vo({
    props: {
      viewModel: n[0].statsTableViewModel
    }
  }), l.$on("command", n[3]), {
    c() {
      e = h("div"), q(l.$$.fragment), t = h("div"), p(e, "class", "header-container svelte-hf3w0v"), p(t, "class", "line svelte-hf3w0v");
    },
    m(s, a) {
      y(s, e, a), z(l, e, null), y(s, t, a), i = !0;
    },
    p(s, a) {
      const o = {};
      a & 1 && (o.viewModel = s[0].statsTableViewModel), l.$set(o);
    },
    i(s) {
      i || (g(l.$$.fragment, s), i = !0);
    },
    o(s) {
      w(l.$$.fragment, s), i = !1;
    },
    d(s) {
      s && $(e), j(l), s && $(t);
    }
  };
}
function No(n) {
  let e, l;
  return e = new vt({
    props: {
      viewModel: n[0].comparisonsByDatasetSummaryViewModel
    }
  }), e.$on("command", n[7]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & 1 && (s.viewModel = t[0].comparisonsByDatasetSummaryViewModel), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function Bo(n) {
  let e, l;
  return e = new vt({
    props: {
      viewModel: n[0].comparisonsByScenarioSummaryViewModel
    }
  }), e.$on("command", n[6]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & 1 && (s.viewModel = t[0].comparisonsByScenarioSummaryViewModel), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function xo(n) {
  let e, l;
  return e = new vt({
    props: {
      viewModel: n[0].comparisonViewsSummaryViewModel
    }
  }), e.$on("command", n[5]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & 1 && (s.viewModel = t[0].comparisonViewsSummaryViewModel), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function Ko(n) {
  let e, l;
  return e = new fo({
    props: {
      viewModel: n[0].checkSummaryViewModel
    }
  }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & 1 && (s.viewModel = t[0].checkSummaryViewModel), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function Wo(n) {
  let e, l, t, i, s, a, o, r = n[0].statsTableViewModel && wn(n);
  i = new Po({
    props: {
      viewModel: n[0].tabBarViewModel
    }
  }), i.$on("command", n[4]);
  const f = [Ko, xo, Bo, No], c = [];
  function d(u, m) {
    return u[1] === "checks" ? 0 : u[1] === "comp-views" ? 1 : u[1] === "comps-by-scenario" ? 2 : u[1] === "comps-by-dataset" ? 3 : -1;
  }
  return ~(s = d(n)) && (a = c[s] = f[s](n)), {
    c() {
      e = h("div"), l = h("div"), r && r.c(), t = A(), q(i.$$.fragment), a && a.c(), p(l, "class", "scroll-container svelte-hf3w0v"), p(e, "class", "summary-container svelte-hf3w0v");
    },
    m(u, m) {
      y(u, e, m), b(e, l), r && r.m(l, null), b(l, t), z(i, l, null), ~s && c[s].m(l, null), o = !0;
    },
    p(u, [m]) {
      u[0].statsTableViewModel ? r ? (r.p(u, m), m & 1 && g(r, 1)) : (r = wn(u), r.c(), g(r, 1), r.m(l, t)) : r && (B(), w(r, 1, 1, () => {
        r = null;
      }), x());
      const v = {};
      m & 1 && (v.viewModel = u[0].tabBarViewModel), i.$set(v);
      let _ = s;
      s = d(u), s === _ ? ~s && c[s].p(u, m) : (a && (B(), w(c[_], 1, 1, () => {
        c[_] = null;
      }), x()), ~s ? (a = c[s], a ? a.p(u, m) : (a = c[s] = f[s](u), a.c()), g(a, 1), a.m(l, null)) : a = null);
    },
    i(u) {
      o || (g(r), g(i.$$.fragment, u), g(a), o = !0);
    },
    o(u) {
      w(r), w(i.$$.fragment, u), w(a), o = !1;
    },
    d(u) {
      u && $(e), r && r.d(), j(i), ~s && c[s].d();
    }
  };
}
function Go(n, e, l) {
  let t, { viewModel: i } = e;
  const s = i.tabBarViewModel.selectedItemId;
  ge(n, s, (d) => l(1, t = d));
  function a(d) {
    ae.call(this, n, d);
  }
  function o(d) {
    ae.call(this, n, d);
  }
  function r(d) {
    ae.call(this, n, d);
  }
  function f(d) {
    ae.call(this, n, d);
  }
  function c(d) {
    ae.call(this, n, d);
  }
  return n.$$set = (d) => {
    "viewModel" in d && l(0, i = d.viewModel);
  }, [
    i,
    t,
    s,
    a,
    o,
    r,
    f,
    c
  ];
}
class Eo extends Y {
  constructor(e) {
    super(), Q(this, e, Go, Wo, X, { viewModel: 0 }, qo);
  }
}
function Fo(n) {
  ne(n, "svelte-1ul5lao", ".app-container.svelte-1ul5lao{display:flex;flex-direction:column;flex:1}.loading-container.svelte-1ul5lao{display:flex;flex-direction:column;flex:1 1 auto;align-items:center;justify-content:center}.progress-container.svelte-1ul5lao{display:flex;height:100vh;align-items:center;justify-content:center;font-size:2em}");
}
function Ho(n) {
  return {
    c: W,
    m: W,
    p: W,
    i: W,
    o: W,
    d: W
  };
}
function Ao(n) {
  let e, l, t, i, s;
  l = new Vs({
    props: {
      viewModel: n[0].headerViewModel
    }
  }), l.$on("command", n[9]);
  const a = [Zo, Xo, Uo, Oo], o = [];
  function r(f, c) {
    return f[5] ? 0 : f[3] === "comparison-detail" ? 1 : f[3] === "perf" ? 2 : 3;
  }
  return t = r(n), i = o[t] = a[t](n), {
    c() {
      e = h("div"), q(l.$$.fragment), i.c(), p(e, "class", "app-container svelte-1ul5lao");
    },
    m(f, c) {
      y(f, e, c), z(l, e, null), o[t].m(e, null), s = !0;
    },
    p(f, c) {
      const d = {};
      c & 1 && (d.viewModel = f[0].headerViewModel), l.$set(d);
      let u = t;
      t = r(f), t === u ? o[t].p(f, c) : (B(), w(o[u], 1, 1, () => {
        o[u] = null;
      }), x(), i = o[t], i ? i.p(f, c) : (i = o[t] = a[t](f), i.c()), g(i, 1), i.m(e, null));
    },
    i(f) {
      s || (g(l.$$.fragment, f), g(i), s = !0);
    },
    o(f) {
      w(l.$$.fragment, f), w(i), s = !1;
    },
    d(f) {
      f && $(e), j(l), o[t].d();
    }
  };
}
function Oo(n) {
  let e, l;
  return e = new Eo({
    props: {
      viewModel: n[0].summaryViewModel
    }
  }), e.$on("command", n[9]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & 1 && (s.viewModel = t[0].summaryViewModel), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function Uo(n) {
  let e, l;
  return e = new Ks({
    props: { viewModel: n[2] }
  }), e.$on("command", n[9]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & 4 && (s.viewModel = t[2]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function Xo(n) {
  let e, l;
  return e = new ws({
    props: {
      viewModel: n[1]
    }
  }), e.$on("command", n[9]), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & 2 && (s.viewModel = t[1]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function Zo(n) {
  let e, l, t;
  return {
    c() {
      e = h("div"), l = h("div"), t = I(n[6]), p(l, "class", "progress"), p(e, "class", "progress-container svelte-1ul5lao");
    },
    m(i, s) {
      y(i, e, s), b(e, l), b(l, t);
    },
    p(i, s) {
      s & 64 && G(t, i[6]);
    },
    i: W,
    o: W,
    d(i) {
      i && $(e);
    }
  };
}
function Jo(n) {
  let e;
  return {
    c() {
      e = h("div"), p(e, "class", "loading-container svelte-1ul5lao");
    },
    m(l, t) {
      y(l, e, t);
    },
    p: W,
    i: W,
    o: W,
    d(l) {
      l && $(e);
    }
  };
}
function Qo(n) {
  let e, l, t, i = {
    ctx: n,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Jo,
    then: Ao,
    catch: Ho,
    value: 12,
    blocks: [, , ,]
  };
  return bt(l = n[4], i), {
    c() {
      e = A(), i.block.c();
    },
    m(s, a) {
      y(s, e, a), i.block.m(s, i.anchor = a), i.mount = () => e.parentNode, i.anchor = e, t = !0;
    },
    p(s, [a]) {
      n = s, i.ctx = n, a & 16 && l !== (l = n[4]) && bt(l, i) || _i(i, n, a);
    },
    i(s) {
      t || (g(i.block), t = !0);
    },
    o(s) {
      for (let a = 0; a < 3; a += 1) {
        const o = i.blocks[a];
        w(o);
      }
      t = !1;
    },
    d(s) {
      s && $(e), i.block.d(s), i.token = null, i = null;
    }
  };
}
function Yo(n, e, l) {
  let t, i, { viewModel: s } = e;
  const a = s.checksInProgress;
  ge(n, a, (_) => l(5, t = _));
  const o = s.progress;
  ge(n, o, (_) => l(6, i = _));
  let r, f, c = "summary";
  const d = new Zn("Roboto Condensed", { weight: 400 });
  let u = !1;
  d.load().then(() => {
    l(10, u = !0);
  });
  let m = !1;
  function v(_) {
    const k = _.detail, M = k.cmd;
    switch (M) {
      case "show-summary":
        l(1, r = void 0), l(3, c = "summary");
        break;
      case "enter-tab":
        if (k.itemId !== "checks") {
          let R;
          switch (k.itemId) {
            case "comp-views":
              R = "views";
              break;
            case "comps-by-scenario":
              R = "by-scenario";
              break;
            case "comps-by-dataset":
              R = "by-dataset";
              break;
            default:
              return;
          }
          l(1, r = s.createCompareDetailViewModelForSummaryRowIndex(R, 0)), l(3, c = "comparison-detail");
        }
        break;
      case "show-comparison-detail":
        l(1, r = s.createCompareDetailViewModelForSummaryRow(k.summaryRow)), l(3, c = "comparison-detail");
        break;
      case "show-comparison-detail-at-index":
        l(1, r = s.createCompareDetailViewModelForSummaryRowIndex(k.kind, k.index)), l(3, c = "comparison-detail");
        break;
      case "show-perf":
        f || l(2, f = s.createPerfViewModel()), l(3, c = "perf");
        break;
      default:
        console.error(`ERROR: Unhandled command ${M}`);
        break;
    }
  }
  return n.$$set = (_) => {
    "viewModel" in _ && l(0, s = _.viewModel);
  }, n.$$.update = () => {
    n.$$.dirty & 1025 && u && (l(4, m = !0), s.runTestSuite());
  }, [
    s,
    r,
    f,
    c,
    m,
    t,
    i,
    a,
    o,
    v,
    u
  ];
}
class er extends Y {
  constructor(e) {
    super(), Q(this, e, Yo, Qo, X, { viewModel: 0 }, Fo);
  }
}
function kn(n) {
  let e, l;
  return e = new er({
    props: { viewModel: n[0] }
  }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & 1 && (s.viewModel = t[0]), e.$set(s);
    },
    i(t) {
      l || (g(e.$$.fragment, t), l = !0);
    },
    o(t) {
      w(e.$$.fragment, t), l = !1;
    },
    d(t) {
      j(e, t);
    }
  };
}
function tr(n) {
  let e, l, t = n[0] && kn(n);
  return {
    c() {
      t && t.c(), e = A();
    },
    m(i, s) {
      t && t.m(i, s), y(i, e, s), l = !0;
    },
    p(i, [s]) {
      i[0] ? t ? (t.p(i, s), s & 1 && g(t, 1)) : (t = kn(i), t.c(), g(t, 1), t.m(e.parentNode, e)) : t && (B(), w(t, 1, 1, () => {
        t = null;
      }), x());
    },
    i(i) {
      l || (g(t), l = !0);
    },
    o(i) {
      w(t), l = !1;
    },
    d(i) {
      t && t.d(i), i && $(e);
    }
  };
}
function lr(n, e, l) {
  let { appViewModel: t } = e;
  return n.$$set = (i) => {
    "appViewModel" in i && l(0, t = i.appViewModel);
  }, [t];
}
class nr extends Y {
  constructor(e) {
    super(), Q(this, e, lr, tr, X, { appViewModel: 0 });
  }
}
function jn(n, e, l) {
  const t = [];
  return n.outputVarL && n.outputVarR ? n.outputVarR.varName !== n.outputVarL.varName && t.push(Ve("warn", `variable renamed, previously '${n.outputVarL.varName}'`)) : n.outputVarL !== void 0 ? t.push(Ve("warn", `variable only defined in ${Re(e, "left")}`)) : n.outputVarR !== void 0 && t.push(Ve("warn", `variable only defined in ${Re(l, "right")}`)), t;
}
function Pn(n, e, l) {
  var t, i;
  const s = [];
  if (n.settings.kind === "all-inputs-settings")
    return [];
  const a = [], o = [], r = [];
  for (const d of n.settings.inputs) {
    const u = (t = d.stateL.error) == null ? void 0 : t.kind, m = (i = d.stateR.error) == null ? void 0 : i.kind, v = u === "unknown-input", _ = m === "unknown-input", k = u === "invalid-value", M = m === "invalid-value";
    if (v || _) {
      const R = { requestedName: d.requestedName, kind: "unknown-input" };
      v && _ ? a.push(R) : v ? o.push(R) : _ && r.push(R);
    } else if (k || M) {
      const R = { requestedName: d.requestedName, kind: "invalid-value" };
      k && M ? a.push(R) : k ? o.push(R) : M && r.push(R);
    }
  }
  function f(d, u) {
    const m = d.filter((v) => v.kind === u).map((v) => `'${v.requestedName}'`);
    if (m.length !== 0)
      return u === "unknown-input" ? `unknown ${m.length === 1 ? "input" : "inputs"} ${m.join(", ")}` : `value out of range for ${m.join(", ")}`;
  }
  function c(d) {
    return f(d, "unknown-input") || f(d, "invalid-value");
  }
  if (a.length > 0)
    s.push(Ve("err", `invalid scenario: ${c(a)}`));
  else if (o.length > 0) {
    const d = `scenario not valid in ${Re(e, "left")}`;
    s.push(Ve("warn", `${d}: ${c(o)}`));
  } else if (r.length > 0) {
    const d = `scenario not valid in ${Re(l, "right")}`;
    s.push(Ve("warn", `${d}: ${c(r)}`));
  }
  return s;
}
function Ve(n, e) {
  return `<span class="annotation"><span class="${`status-color-${n === "err" ? "failed" : "warning"}`}">${n === "err" ? "\u2717" : "\u203C"}</span>&ensp;${e}</span>`;
}
function ir(n, e, l) {
  const t = /* @__PURE__ */ new Map();
  for (const a of e) {
    const o = n.scenarios.getScenario(a.s);
    if (o === void 0)
      continue;
    let r, f;
    switch (l) {
      case "dataset": {
        const u = n.datasets.getDataset(a.d);
        if (u === void 0)
          continue;
        const m = u.outputVarR || u.outputVarL;
        r = m.varName, f = m.sourceName;
        break;
      }
      case "scenario": {
        r = o.title, f = o.subtitle;
        break;
      }
      default:
        Oe(l);
    }
    let c = t.get(r);
    c === void 0 && (c = {
      title: r,
      totalMaxDiff: 0,
      items: []
    }, t.set(r, c));
    const d = {
      title: r,
      subtitle: f,
      scenario: o,
      testSummary: a
    };
    c.items.push(d), c.totalMaxDiff += d.testSummary.md;
  }
  return [...t.values()].sort((a, o) => a.totalMaxDiff > o.totalMaxDiff ? -1 : a.totalMaxDiff < o.totalMaxDiff ? 1 : 0);
}
function qn(n, e, l, t, i) {
  var s, a, o, r;
  const f = (M, R) => new Dn(n, e, R, l, M), c = (s = n.bundleL.model.modelSpec.graphSpecs) == null ? void 0 : s.find((M) => M.id === t), d = (a = n.bundleR.model.modelSpec.graphSpecs) == null ? void 0 : a.find((M) => M.id === t), u = f(c, "left"), m = f(d, "right"), v = /* @__PURE__ */ new Set();
  if (c)
    for (const M of c.datasets)
      v.add(M.datasetKey);
  if (d)
    for (const M of d.datasets)
      v.add(M.datasetKey);
  const _ = [];
  let k = 0;
  if (i.inclusion === "both")
    for (const M of v) {
      const R = (o = c == null ? void 0 : c.datasets) == null ? void 0 : o.find((ie) => ie.datasetKey === M), S = (r = d == null ? void 0 : d.datasets) == null ? void 0 : r.find((ie) => ie.datasetKey === M), C = R == null ? void 0 : R.varName, L = S == null ? void 0 : S.varName, N = (R == null ? void 0 : R.color) || "#777", T = (S == null ? void 0 : S.color) || "#777", P = R == null ? void 0 : R.label, V = S == null ? void 0 : S.label, F = i.datasetReports.find((ie) => ie.datasetKey === M);
      let D = 0;
      if (F) {
        if (F.maxDiff === void 0 || F.maxDiff === 0)
          continue;
        D = F.maxDiff, D > k && (k = D);
      }
      const K = `bucket-color-${pt(D, n.thresholds)}`, Z = new Tn(
        n,
        e,
        "",
        "",
        l,
        M
      );
      _.push({
        datasetKey: M,
        nameL: C,
        nameR: L,
        legendColorL: N,
        legendColorR: T,
        legendLabelL: P,
        legendLabelR: V,
        bucketClass: K,
        maxDiff: D,
        detailBoxViewModel: Z,
        detailBoxVisible: de(!1)
      });
    }
  return {
    graphId: t,
    graphL: u,
    graphR: m,
    metadataRows: i.metadataReports,
    datasetRows: _,
    maxDiffPct: k
  };
}
function sr(n, e, l, t, i, s, a) {
  switch (l.group.kind) {
    case "by-dataset":
      return or(
        n,
        e,
        l,
        s,
        a
      );
    case "by-scenario":
      return rr(
        n,
        e,
        l,
        t,
        i,
        s,
        a
      );
    default:
      Xe(l.group.kind);
  }
}
function or(n, e, l, t, i) {
  const s = n.bundleL.name, a = n.bundleR.name, o = l.root, r = o.outputVarR || o.outputVarL, f = r.varName, c = r.sourceName, d = jn(o, s, a).join(" "), u = [];
  function m(R) {
    const S = R.join('&nbsp;<span class="related-sep">&gt;</span>&nbsp;');
    u.push(S);
  }
  if (r.relatedItems)
    for (const R of r.relatedItems)
      m(R.locationPath);
  const v = ir(n, l.group.testSummaries, "scenario");
  let _;
  for (const R of v)
    for (const S of R.items)
      if (S.scenario.settings.kind === "all-inputs-settings" && S.scenario.settings.position === "at-default") {
        _ = S;
        break;
      }
  const k = [];
  for (const R of v) {
    let S, C;
    R.items[0] !== _ && (S = R.items.length > 0 ? R.items[0] : void 0, C = R.items.length > 1 ? R.items[1] : void 0);
    const L = Vn(
      n,
      e,
      "scenarios",
      R.title,
      void 0,
      [_, S, C]
    );
    k.push(L);
  }
  const M = k.findIndex((R) => R.title === "All inputs");
  if (M !== void 0) {
    const R = k.splice(M, 1)[0];
    k.unshift(R);
  }
  return {
    kind: "by-dataset",
    title: f,
    subtitle: c,
    annotations: d,
    previousRowIndex: t,
    nextRowIndex: i,
    relatedListHeader: "Appears in:",
    relatedItems: u,
    graphSections: [],
    detailRows: k
  };
}
function rr(n, e, l, t, i, s, a) {
  const o = n.bundleL.name, r = n.bundleR.name, f = l.root, c = Pn(f, o, r).join(" ");
  let d, u, m, v;
  i ? (d = "views", u = t == null ? void 0 : t.title, m = i.title, v = i.subtitle) : (d = "by-scenario", m = f.title, v = f.subtitle);
  const _ = [];
  function k(L) {
    const N = L.join('&nbsp;<span class="related-sep">&gt;</span>&nbsp;');
    _.push(N);
  }
  if (f.settings.kind === "input-settings")
    for (const L of f.settings.inputs) {
      const N = L.stateR.inputVar;
      N != null && N.relatedItem && k(N.relatedItem.locationPath);
    }
  const M = [];
  for (const L of l.group.testSummaries) {
    const N = n.scenarios.getScenario(L.s);
    if (N === void 0)
      continue;
    const T = n.datasets.getDataset(L.d), P = T.outputVarR || T.outputVarL, V = {
      title: P.varName,
      subtitle: P.sourceName,
      scenario: N,
      testSummary: L
    }, F = Vn(
      n,
      e,
      "datasets",
      m,
      v,
      [V]
    );
    M.push({
      viewModel: F,
      maxDiff: L.md
    });
  }
  const S = M.sort((L, N) => {
    const T = L.maxDiff, P = N.maxDiff;
    if (T !== P)
      return T > P ? -1 : 1;
    {
      const V = L.viewModel.title.toLowerCase(), F = N.viewModel.title.toLowerCase();
      return V.localeCompare(F);
    }
  }).map((L) => L.viewModel);
  let C;
  if (i != null && i.graphs) {
    const L = l.group.testSummaries;
    C = ar(n, e, i, L);
  } else
    C = [];
  return {
    kind: d,
    pretitle: u,
    title: m,
    subtitle: v,
    annotations: c,
    previousRowIndex: s,
    nextRowIndex: a,
    relatedListHeader: "Related items:",
    relatedItems: _,
    graphSections: C,
    detailRows: S
  };
}
function ar(n, e, l, t) {
  if (l.graphs === "all")
    return Nn(n, e, l.scenario, t).sections;
  if (l.graphs.length === 0)
    return [];
  const i = n.bundleL.model.modelSpec.graphSpecs, s = n.bundleR.model.modelSpec.graphSpecs, a = l.scenario, o = [];
  for (const r of l.graphs) {
    const f = i == null ? void 0 : i.find((u) => u.id === r), c = s == null ? void 0 : s.find((u) => u.id === r), d = yn(f, c, a.key, t);
    o.push(qn(n, e, a, r, d));
  }
  return [
    {
      title: "Featured graphs",
      rows: o
    }
  ];
}
function Nn(n, e, l, t) {
  const i = /* @__PURE__ */ new Set();
  function s(C) {
    if (C.model.modelSpec.graphSpecs)
      for (const L of C.model.modelSpec.graphSpecs)
        i.add(L.id);
  }
  s(n.bundleL), s(n.bundleR);
  const a = [], o = [], r = [], f = [], c = [], d = [], u = n.bundleL.model.modelSpec.graphSpecs, m = n.bundleR.model.modelSpec.graphSpecs, v = Array(n.thresholds.length + 2).fill(0);
  for (const C of i) {
    const L = u == null ? void 0 : u.find((D) => D.id === C), N = m == null ? void 0 : m.find((D) => D.id === C), T = yn(L, N, l.key, t), P = cr(T), V = qn(n, e, l, C, T);
    let F;
    switch (T.inclusion) {
      case "right-only":
        F = 1, a.push(V);
        break;
      case "left-only":
        F = 1, o.push(V);
        break;
      case "both":
        P > 0 ? (F = pt(P, n.thresholds), T.metadataReports.length > 0 ? r.push(V) : c.push(V)) : T.metadataReports.length > 0 ? (F = 1, f.push(V)) : (F = 0, d.push(V));
        break;
      case "neither":
        F = 0, d.push(V);
        break;
      default:
        Xe(T.inclusion);
    }
    v[F]++;
  }
  const _ = i.size, k = _ - v[0], M = v.map((C) => C / _ * 100), R = [];
  function S(C, L, N) {
    if (C.length > 0) {
      const T = N ? C.sort((P, V) => P.maxDiffPct > V.maxDiffPct ? -1 : 1) : C;
      R.push({
        title: L,
        rows: T
      });
    }
  }
  return S(a, "Added graphs", !1), S(o, "Removed graphs", !1), S(r, "Graphs with metadata and dataset changes", !0), S(f, "Graphs with metadata changes only", !1), S(c, "Graphs with dataset changes only", !0), S(d, "Unchanged graphs", !1), {
    sections: R,
    nonZeroDiffCount: k,
    diffPercentByBucket: M
  };
}
function cr(n) {
  let e = 0;
  for (const l of n.datasetReports)
    l.maxDiff !== void 0 && l.maxDiff > e && (e = l.maxDiff);
  return e;
}
function fr(n, e) {
  const l = localStorage.getItem(n);
  let t;
  l !== void 0 ? t = l === "1" : t = e;
  let i = t;
  const { subscribe: s, set: a } = de(t), o = (f) => {
    i = f, localStorage.setItem(n, f ? "1" : "0"), a(f);
  };
  return {
    subscribe: s,
    set: o,
    update: (f) => {
      o(f(i));
    }
  };
}
function dr(n, e) {
  let l;
  if (e ? l = fr("sde-check-simplify-scenarios", !1) : l = void 0, n) {
    const t = n.thresholds, i = [];
    i.push("no diff");
    for (let s = 0; s < 3; s++)
      i.push(`diff &lt; ${t[s]}%`);
    return i.push(`diff &gt;= ${t[2]}%`), {
      nameL: n.bundleL.name,
      nameR: n.bundleR.name,
      bundleNamesL: de([n.bundleL.name]),
      bundleNamesR: de([n.bundleR.name]),
      thresholds: i,
      simplifyScenarios: l
    };
  } else
    return {
      bundleNamesL: de([]),
      bundleNamesR: de([]),
      simplifyScenarios: l
    };
}
function ct(n, e, l, t) {
  const i = l - e;
  function s(a) {
    return i !== 0 ? (a - e) / (l - e) * 100 : 0;
  }
  return {
    values: n,
    avg: t,
    points: n.map((a) => s(a)),
    avgPoint: s(t)
  };
}
class ur {
  constructor(e, l) {
    this.bundleModelL = e, this.bundleModelR = l, this.minTime = Number.MAX_VALUE, this.maxTime = 0, this.writableRows = de([]), this.rows = this.writableRows;
  }
  addRow(e, l) {
    const t = Math.min(e.minTime, l.minTime), i = Math.max(e.maxTime, l.maxTime), s = Math.min(this.minTime, t), a = Math.max(this.maxTime, i);
    this.minTime = s, this.maxTime = a;
    function o(c) {
      return ct(c.values, s, a, c.avg);
    }
    const r = Cn(this.writableRows);
    for (const c of r)
      c.dotPlotL = o(c.dotPlotL), c.dotPlotR = o(c.dotPlotR);
    function f(c) {
      return ct(c.allTimes, s, a, c.avgTime);
    }
    r.push({
      num: r.length + 1,
      minTimeL: e.minTime.toFixed(1),
      avgTimeL: e.avgTime.toFixed(1),
      maxTimeL: e.maxTime.toFixed(1),
      minTimeR: l.minTime.toFixed(1),
      avgTimeR: l.avgTime.toFixed(1),
      maxTimeR: l.maxTime.toFixed(1),
      dotPlotL: f(e),
      dotPlotR: f(l)
    }), this.writableRows.set(r);
  }
}
function mr(n) {
  return new ur(n.comparison.bundleL.model, n.comparison.bundleR.model);
}
let hr = 1;
class pr {
  constructor(e, l, t, i) {
    this.dataCoordinator = e, this.scenario = l, this.datasetKey = t, this.predicateReport = i, this.requestKeys = [], this.expectedDataKeys = [], this.resolvedDataKeys = [], this.opConstantRefs = /* @__PURE__ */ new Map(), this.resolvedData = /* @__PURE__ */ new Map(), this.dataRequested = !1, this.dataLoaded = !1, this.baseRequestKey = `check-graph-box::${hr++}`, this.writableContent = de(void 0), this.content = this.writableContent;
  }
  requestData() {
    if (this.dataRequested)
      return;
    this.dataRequested = !0, this.expectedDataKeys = [], this.resolvedDataKeys = [], this.requestKeys = [], this.resolvedData.clear(), this.expectedDataKeys.push("primary"), this.requestDataset("primary", this.scenario.spec, this.datasetKey);
    const e = (l) => {
      const t = this.predicateReport.opRefs.get(l);
      if (t !== void 0)
        switch (this.expectedDataKeys.push(l), t.kind) {
          case "constant":
            this.resolvedDataKeys.push(l), this.opConstantRefs.set(l, t.value);
            break;
          case "data": {
            const i = t.dataRef.scenario.spec, s = t.dataRef.dataset.datasetKey;
            this.requestDataset(l, i, s);
            break;
          }
          default:
            Oe(t);
        }
    };
    e("gt"), e("gte"), e("lt"), e("lte"), e("eq"), e("approx");
  }
  clearData() {
    if (this.dataRequested) {
      if (this.writableContent.set(void 0), !this.dataLoaded) {
        for (const e of this.requestKeys)
          this.dataCoordinator.cancelRequest(e);
        this.requestKeys = [], this.resolvedData.clear();
      }
      this.dataRequested = !1, this.dataLoaded = !1;
    }
  }
  requestDataset(e, l, t) {
    const i = `${this.baseRequestKey}::${e}`;
    this.requestKeys.push(i), this.dataCoordinator.requestDataset(i, l, t, (s) => {
      !this.dataRequested || (this.resolvedDataKeys.push(e), this.resolvedData.set(e, rt(s)), this.processResponses());
    });
  }
  processResponses() {
    if (this.resolvedDataKeys.length !== this.expectedDataKeys.length)
      return;
    const e = this.resolvedData.get("primary"), l = e.reduce((_, k) => k.x < _ ? k.x : _, e[0].x), t = e.reduce((_, k) => k.x > _ ? k.x : _, e[0].x), i = this.predicateReport.time;
    let s, a, o;
    if (i === void 0)
      s = l, a = t, o = (_) => _ >= l && _ <= t;
    else if (typeof i == "number")
      s = i, a = i, o = (_) => _ === l;
    else if (Array.isArray(i))
      s = i[0], a = i[1], o = (_) => _ >= l && _ <= t;
    else {
      const _ = i, k = [];
      _.after_excl !== void 0 && (k.push((M) => M > _.after_excl), s = _.after_excl), _.after_incl !== void 0 && (k.push((M) => M >= _.after_incl), s = _.after_incl), _.before_excl !== void 0 && (k.push((M) => M < i.before_excl), a = _.before_excl), _.before_incl !== void 0 && (k.push((M) => M <= i.before_incl), a = _.before_incl), s === void 0 && (s = l), a === void 0 && (a = t), o = (M) => {
        for (const R of k)
          if (!R(M))
            return !1;
        return !0;
      };
    }
    const r = [], f = (_, k, M = 0) => {
      const R = this.opConstantRefs.get(_);
      if (R !== void 0) {
        s === a ? r.push({
          points: [{ x: s, y: R + M }],
          style: k
        }) : r.push({
          points: [
            { x: s, y: R + M },
            { x: a, y: R + M }
          ],
          style: k
        });
        return;
      }
      const S = this.resolvedData.get(_);
      if (S !== void 0) {
        let C = S.filter((L) => o(L.x));
        M !== 0 && (C = C.map((L) => ({ x: L.x, y: L.y + M }))), r.push({
          points: C,
          style: k
        });
      }
    }, c = (_) => this.opConstantRefs.has(_) || this.resolvedData.has(_), d = c("gt") || c("gte"), u = c("lt") || c("lte");
    f("gt", u ? "fill-to-next" : "fill-above"), f("gte", u ? "fill-to-next" : "fill-above"), f("lt", d ? "normal" : "fill-below"), f("lte", d ? "normal" : "fill-below"), f("eq", "wide");
    const m = this.predicateReport.tolerance || 0.1;
    f("approx", "fill-to-next", -m), f("approx", "normal", m), f("approx", "dashed");
    const v = {
      key: this.baseRequestKey,
      refPlots: r,
      pointsL: [],
      pointsR: e,
      xMin: void 0,
      xMax: void 0
    };
    this.writableContent.set({
      comparisonGraphViewModel: v
    }), this.dataLoaded = !0;
  }
}
function vr(n) {
  switch (n) {
    case "passed":
      return "\u2713";
    case "failed":
      return "\u2717";
    case "error":
      return "\u203C";
    default:
      return "";
  }
}
function Fe(n, e, l, t, i, s = !1) {
  const a = "&ensp;".repeat(2 + n * 4), o = vr(l), r = `<span class="status-color-${l}">${o}</span>`, f = `${a}${r}&ensp;${t}`;
  return {
    rowClasses: `${e} ${l}`,
    status: l,
    span: f,
    graphBoxViewModel: i,
    graphVisible: de(s)
  };
}
function nt(n) {
  return `<span class="bold">${n}</span>`;
}
function _r(n, e) {
  let l = !1;
  const t = [], i = Fe(0, "test", e.status, e.name);
  for (const a of e.scenarios) {
    t.push(Fe(1, "scenario", a.status, En(a, nt)));
    for (const o of a.datasets) {
      t.push(Fe(2, "dataset", o.status, Fn(o, nt)));
      for (const r of o.predicates) {
        let f, c = !1;
        a.checkScenario.spec && o.checkDataset.datasetKey && (f = new pr(
          n,
          a.checkScenario,
          o.checkDataset.datasetKey,
          r
        ), !l && r.result.status === "failed" && (l = !0, c = !0)), t.push(
          Fe(
            3,
            "predicate",
            r.result.status,
            Hn(r, nt),
            f,
            c
          )
        );
      }
    }
  }
  const s = de(!1);
  return {
    testRow: i,
    childRows: t,
    expandAll: s
  };
}
function gr(n, e) {
  return {
    name: e.name,
    tests: e.tests.map((l) => _r(n, l))
  };
}
function br(n, e) {
  let l = 0, t = 0, i = 0;
  for (const o of e.groups)
    for (const r of o.tests)
      for (const f of r.scenarios) {
        if (f.datasets.length === 0) {
          i++;
          continue;
        }
        for (const c of f.datasets) {
          if (c.predicates.length === 0) {
            i++;
            continue;
          }
          for (const d of c.predicates)
            switch (d.result.status) {
              case "passed":
                l++;
                break;
              case "failed":
                t++;
                break;
              case "error":
                i++;
                break;
            }
        }
      }
  const s = l + t + i;
  let a;
  return s > 0 && (a = [l / s * 100, t / s * 100, i / s * 100]), {
    total: s,
    passed: l,
    failed: t,
    errors: i,
    percents: a,
    groups: e.groups.map((o) => gr(n, o))
  };
}
function wr(n, e) {
  const l = n.bundleL.name, t = n.bundleR.name, i = An(n, e), s = i.byScenario, a = i.byDataset;
  let o = 1;
  function r() {
    return `view_${o++}`;
  }
  let f = 0;
  const c = [];
  for (const J of n.viewGroups) {
    const ee = J.views.map((le) => {
      var ue;
      switch (le.kind) {
        case "view": {
          const he = le.scenario, ce = s.allGroupSummaries.get(he.key);
          let _e, ye;
          if (le.graphs === "all") {
            const Se = ce.group.testSummaries, Ce = Nn(n, void 0, he, Se);
            _e = Ce.diffPercentByBucket, ye = Ce.nonZeroDiffCount;
          } else
            _e = (ue = ce.scores) == null ? void 0 : ue.diffPercentByBucket;
          return Bi(_e) && f++, {
            kind: "views",
            groupKey: r(),
            title: le.title,
            subtitle: le.subtitle,
            diffPercentByBucket: _e,
            groupSummary: ce,
            viewMetadata: {
              viewGroup: J,
              view: le,
              changedGraphCount: ye
            }
          };
        }
        case "unresolved-view":
          return f++, {
            kind: "views",
            groupKey: r(),
            title: "Unresolved view"
          };
        default:
          Oe(le);
      }
    }), U = {
      kind: "views",
      title: J.title,
      header: !0
    };
    c.push({
      header: U,
      rows: ee
    });
  }
  function d(J, ee, U) {
    return `${J} ${J !== 1 ? ee.replace(U, `${U}s`) : ee}`;
  }
  function u(J) {
    var ee;
    let U, le, ue, he;
    const ce = J.root;
    switch (ce.kind) {
      case "dataset": {
        U = "by-dataset";
        const _e = ce.outputVarR || ce.outputVarL;
        le = _e.varName, ue = _e.sourceName, he = jn(ce, l, t).join(" ");
        break;
      }
      case "scenario":
        U = "by-scenario", le = ce.title, ue = ce.subtitle, he = Pn(ce, l, t).join(" ");
        break;
      default:
        Oe(ce);
    }
    return {
      kind: U,
      groupKey: J.group.key,
      title: le,
      subtitle: ue,
      annotations: he,
      diffPercentByBucket: (ee = J.scores) == null ? void 0 : ee.diffPercentByBucket,
      groupSummary: J
    };
  }
  function m(J, ee, U = !0) {
    if (J.length > 0) {
      const le = J.map(u);
      let ue, he;
      return ee.includes("scenario") ? (ue = "by-scenario", he = "scenario") : (ue = "by-dataset", he = "variable"), U && (ee = d(le.length, ee, he)), {
        header: {
          kind: ue,
          title: ee,
          header: !0
        },
        rows: le
      };
    } else
      return;
  }
  const v = Re(l, "left"), _ = Re(t, "right"), k = m(s.withErrors, "scenario with errors\u2026"), M = m(s.onlyInLeft, `scenario only valid in ${v}\u2026`), R = m(s.onlyInRight, `scenario only valid in ${_}\u2026`), S = m(s.withDiffs, "scenario producing differences\u2026"), C = m(
    s.withoutDiffs,
    "No differences produced by the following scenarios\u2026",
    !1
  ), L = m(a.withErrors, "output variable with errors\u2026"), N = m(a.onlyInLeft, "removed output variable\u2026"), T = m(a.onlyInRight, "added output variable\u2026"), P = m(a.withDiffs, "output variable with differences\u2026"), V = m(
    a.withoutDiffs,
    "No differences detected for the following outputs\u2026",
    !1
  );
  function F(J, ee) {
    ee && J.push(...ee.rows);
  }
  let D;
  if (c.length > 0) {
    const J = [];
    for (const ee of c)
      J.push(...ee.rows);
    D = {
      kind: "views",
      allRows: J,
      rowsWithDiffs: f,
      viewGroups: c
    };
  }
  const E = [];
  F(E, k), F(E, M), F(E, R), F(E, S), F(E, C);
  const K = (C == null ? void 0 : C.rows.length) || 0, Z = {
    kind: "by-scenario",
    allRows: E,
    rowsWithDiffs: E.length - K,
    scenariosWithErrors: k,
    scenariosOnlyInLeft: M,
    scenariosOnlyInRight: R,
    scenariosWithDiffs: S,
    scenariosWithoutDiffs: C
  }, ie = [];
  F(ie, L), F(ie, N), F(ie, T), F(ie, P), F(ie, V);
  const ve = (V == null ? void 0 : V.rows.length) || 0, we = {
    kind: "by-dataset",
    allRows: ie,
    rowsWithDiffs: ie.length - ve,
    datasetsWithErrors: L,
    datasetsOnlyInLeft: N,
    datasetsOnlyInRight: T,
    datasetsWithDiffs: P,
    datasetsWithoutDiffs: V
  };
  return {
    views: D,
    byScenario: Z,
    byDataset: we
  };
}
function kr(n, e, l) {
  function t(U, le = 0) {
    return U === 0 ? "-" : `${U <= 0 ? "" : "+"}${U.toFixed(le)}`;
  }
  function i(U) {
    return U === 0 ? "" : `${t(U, 1)}%`;
  }
  function s(U, le) {
    return U !== 0 ? (le - U) / U * 100 : 0;
  }
  const a = n.bundleL.model.modelSpec, o = n.bundleR.model.modelSpec, r = a.inputVars.size, f = o.inputVars.size, c = f - r, d = a.outputVars.size, u = o.outputVars.size, m = u - d, v = a.modelSizeInBytes, _ = o.modelSizeInBytes, k = _ - v, M = s(v, _), R = a.dataSizeInBytes, S = o.dataSizeInBytes, C = S - R, L = s(R, S), N = e.avgTime || 0, T = l.avgTime || 0, P = T - N, V = s(N, T), F = e.minTime, D = l.minTime, E = e.maxTime, K = l.maxTime, Z = Math.min(F, D), ie = Math.max(E, K);
  function ve(U) {
    return ct(U.allTimes, Z, ie, U.avgTime);
  }
  const we = {
    modelName: n.bundleL.name,
    datasetClassIndex: 0,
    inputs: r.toString(),
    outputs: d.toString(),
    modelSize: v.toString(),
    modelSizePctChange: "",
    dataSize: R.toString(),
    dataSizePctChange: "",
    avgTime: N.toFixed(1),
    avgTimePctChange: "",
    minTime: F.toFixed(1),
    maxTime: E.toFixed(1),
    dotPlot: ve(e)
  }, J = {
    modelName: n.bundleR.name,
    datasetClassIndex: 1,
    inputs: f.toString(),
    outputs: u.toString(),
    modelSize: _.toString(),
    modelSizePctChange: "",
    dataSize: S.toString(),
    dataSizePctChange: "",
    avgTime: T.toFixed(1),
    avgTimePctChange: "",
    minTime: D.toFixed(1),
    maxTime: K.toFixed(1),
    dotPlot: ve(l)
  }, ee = {
    modelName: "Change",
    inputs: t(c),
    outputs: t(m),
    modelSize: t(k),
    modelSizePctChange: i(M),
    dataSize: t(C),
    dataSizePctChange: i(L),
    avgTime: t(P, 1),
    avgTimePctChange: i(V),
    minTime: "",
    maxTime: ""
  };
  return {
    row1: we,
    row2: J,
    row3: ee
  };
}
class $r {
  constructor(e, l) {
    this.items = e, this.selectedIndex = de(l), this.selectedItem = Ct(this.selectedIndex, (t) => e[t]), this.selectedItemId = Ct(this.selectedItem, (t) => t.id);
  }
}
function $n(n, e, l, t) {
  var i;
  function s(k, M) {
    if (k === 0)
      return ["all clear", "passed"];
    {
      const R = k === 1 ? M : `${M}s`;
      return [`${k} ${R} with diffs`, "warning"];
    }
  }
  const a = [];
  function o(k, M, R) {
    a.push({
      id: k,
      title: M,
      subtitle: R[0],
      subtitleClass: `status-color-${R[1]}`
    });
  }
  const r = br(n, e);
  let f;
  if (r.total === 0)
    f = ["no checks", "none"];
  else if (r.failed > 0 || r.errors > 0) {
    const k = [];
    r.failed > 0 && k.push(`${r.failed} failed`), r.errors > 0 && (r.errors === 1 ? k.push(`${r.errors} error`) : k.push(`${r.errors} errors`)), f = [k.join(", "), "failed"];
  } else
    f = ["all clear", "passed"];
  o("checks", "Checks", f);
  let c, d, u, m;
  if (l && t) {
    c = kr(
      l,
      t.perfReportL,
      t.perfReportR
    );
    const k = wr(l, t.testSummaries);
    if (k.views) {
      d = k.views;
      let S;
      const L = k.views.allRows.find((T) => {
        var P;
        return ((P = T.viewMetadata) == null ? void 0 : P.view.graphs) === "all";
      }), N = ((i = L == null ? void 0 : L.viewMetadata) == null ? void 0 : i.changedGraphCount) || 0;
      N > 0 ? S = s(N, "graph") : S = s(d.rowsWithDiffs, "view"), o("comp-views", "Comparison views", S);
    }
    u = k.byScenario;
    const M = s(u.rowsWithDiffs, "scenario");
    o("comps-by-scenario", "Comparisons by scenario", M), m = k.byDataset;
    const R = s(m.rowsWithDiffs, "dataset");
    o("comps-by-dataset", "Comparisons by output", R);
  }
  const v = a.findIndex((k) => k.subtitle !== "all clear"), _ = new $r(a, v >= 0 ? v : 0);
  return {
    statsTableViewModel: c,
    tabBarViewModel: _,
    checkSummaryViewModel: r,
    comparisonViewsSummaryViewModel: d,
    comparisonsByScenarioSummaryViewModel: u,
    comparisonsByDatasetSummaryViewModel: m
  };
}
class yr {
  constructor(e, l) {
    this.appModel = e, this.suiteSummary = l, this.writableChecksInProgress = de(!0), this.checksInProgress = this.writableChecksInProgress, this.writableProgress = de("0%"), this.progress = this.writableProgress;
    const t = l === void 0;
    this.headerViewModel = dr(e.config.comparison, t);
  }
  runTestSuite() {
    var e;
    this.cancelRunSuite && (this.cancelRunSuite(), this.cancelRunSuite = void 0), this.writableChecksInProgress.set(!0), this.writableProgress.set("0%");
    const l = this.appModel.config.comparison;
    if (this.suiteSummary) {
      const t = this.appModel.config.check, i = On(t, this.suiteSummary.checkSummary), s = (e = this.suiteSummary) == null ? void 0 : e.comparisonSummary;
      this.summaryViewModel = $n(
        this.appModel.checkDataCoordinator,
        i,
        l,
        s
      ), this.writableChecksInProgress.set(!1);
    } else {
      let t = !1;
      this.headerViewModel.simplifyScenarios !== void 0 && (t = Cn(this.headerViewModel.simplifyScenarios)), this.cancelRunSuite = Un(
        this.appModel.config,
        {
          onProgress: (i) => {
            this.writableProgress.set(`${Math.round(i * 100)}%`);
          },
          onComplete: (i) => {
            const s = i.checkReport;
            let a;
            i.comparisonReport && (a = Xn(i.comparisonReport)), this.summaryViewModel = $n(
              this.appModel.checkDataCoordinator,
              s,
              l,
              a
            ), this.writableChecksInProgress.set(!1);
          },
          onError: (i) => {
            console.error(i);
          }
        },
        {
          simplifyScenarios: t
        }
      );
    }
  }
  createCompareDetailViewModelForSummaryRow(e) {
    var l, t;
    const i = this.getComparisonSummaryViewModel(e.kind), s = e.groupSummary, a = e.groupKey, o = (l = e.viewMetadata) == null ? void 0 : l.viewGroup, r = (t = e.viewMetadata) == null ? void 0 : t.view;
    let f, c;
    const d = i.allRows.length, u = i.allRows.findIndex((m) => m.groupKey === a);
    return u >= 0 && (u > 0 && (f = u - 1), u < d - 1 && (c = u + 1)), sr(
      this.appModel.config.comparison,
      this.appModel.comparisonDataCoordinator,
      s,
      o,
      r,
      f,
      c
    );
  }
  createCompareDetailViewModelForSummaryRowIndex(e, l) {
    const i = this.getComparisonSummaryViewModel(e).allRows[l];
    return this.createCompareDetailViewModelForSummaryRow(i);
  }
  getComparisonSummaryViewModel(e) {
    switch (e) {
      case "views":
        return this.summaryViewModel.comparisonViewsSummaryViewModel;
      case "by-scenario":
        return this.summaryViewModel.comparisonsByScenarioSummaryViewModel;
      case "by-dataset":
        return this.summaryViewModel.comparisonsByDatasetSummaryViewModel;
      default:
        Xe(e);
    }
  }
  createPerfViewModel() {
    return mr(this.appModel.config);
  }
}
function Dr(n, e) {
  const l = (e == null ? void 0 : e.containerId) || "app-shell-container", t = new nr({
    target: document.getElementById(l),
    props: {
      appViewModel: void 0
    }
  });
  return ei(n).then((i) => {
    const s = new yr(i, e == null ? void 0 : e.suiteSummary);
    e != null && e.bundleNames && (s.headerViewModel.bundleNamesL.set(e.bundleNames), s.headerViewModel.bundleNamesR.set(e.bundleNames)), t.$set({
      appViewModel: s
    });
  }).catch((i) => {
    console.error(`ERROR: Failed to initialize app model: ${i.message}`);
  }), t;
}
export {
  Dr as initAppShell
};

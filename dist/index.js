import { createConfig as Nn, CheckDataCoordinator as Bn, ComparisonDataCoordinator as xn, diffDatasets as Kn, PerfRunner as En, diffGraphs as yn, scenarioMessage as Wn, datasetMessage as Gn, predicateMessage as An, categorizeComparisonTestSummaries as Fn, checkReportFromSummary as Hn, runSuite as On, comparisonSummaryFromReport as Un } from "@sdeverywhere/check-core";
import Xn from "fontfaceobserver";
import Zn from "copy-text-to-clipboard";
import { Chart as Mn } from "chart.js";
class Jn {
  constructor(e) {
    this.config = e, this.checkDataCoordinator = new Bn(e.check.bundle.model), e.comparison && (this.comparisonDataCoordinator = new xn(
      e.comparison.bundleL.model,
      e.comparison.bundleR.model
    ));
  }
}
async function Qn(n) {
  const e = await Nn(n);
  return new Jn(e);
}
function E() {
}
function Yn(n, e) {
  for (const l in e)
    n[l] = e[l];
  return n;
}
function ei(n) {
  return !!n && (typeof n == "object" || typeof n == "function") && typeof n.then == "function";
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
function ct(n) {
  return typeof n == "function";
}
function X(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function ti(n) {
  return Object.keys(n).length === 0;
}
function qe(n, ...e) {
  if (n == null)
    return E;
  const l = n.subscribe(...e);
  return l.unsubscribe ? () => l.unsubscribe() : l;
}
function Cn(n) {
  let e;
  return qe(n, (l) => e = l)(), e;
}
function ge(n, e, l) {
  n.$$.on_destroy.push(qe(e, l));
}
function li(n, e, l, t) {
  if (n) {
    const i = Sn(n, e, l, t);
    return n[0](i);
  }
}
function Sn(n, e, l, t) {
  return n[1] && t ? Yn(l.ctx.slice(), n[1](t(e))) : l.ctx;
}
function ni(n, e, l, t) {
  if (n[2] && t) {
    const i = n[2](t(l));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const s = [], r = Math.max(e.dirty.length, i.length);
      for (let o = 0; o < r; o += 1)
        s[o] = e.dirty[o] | i[o];
      return s;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function ii(n, e, l, t, i, s) {
  if (i) {
    const r = Sn(e, l, t, s);
    n.p(r, i);
  }
}
function si(n) {
  if (n.ctx.length > 32) {
    const e = [], l = n.ctx.length / 32;
    for (let t = 0; t < l; t++)
      e[t] = -1;
    return e;
  }
  return -1;
}
function gt(n) {
  return n ?? "";
}
function b(n, e) {
  n.appendChild(e);
}
function ne(n, e, l) {
  const t = oi(n);
  if (!t.getElementById(e)) {
    const i = h("style");
    i.id = e, i.textContent = l, ri(t, i);
  }
}
function oi(n) {
  if (!n)
    return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && e.host ? e : n.ownerDocument;
}
function ri(n, e) {
  return b(n.head || n, e), e.sheet;
}
function y(n, e, l) {
  n.insertBefore(e, l || null);
}
function $(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function O(n, e) {
  for (let l = 0; l < n.length; l += 1)
    n[l] && n[l].d(e);
}
function h(n) {
  return document.createElement(n);
}
function ai(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function I(n) {
  return document.createTextNode(n);
}
function H() {
  return I("");
}
function re(n, e, l, t) {
  return n.addEventListener(e, l, t), () => n.removeEventListener(e, l, t);
}
function p(n, e, l) {
  l == null ? n.removeAttribute(e) : n.getAttribute(e) !== l && n.setAttribute(e, l);
}
function ci(n) {
  return Array.from(n.childNodes);
}
function W(n, e) {
  e = "" + e, n.data !== e && (n.data = e);
}
function se(n, e, l, t) {
  l == null ? n.style.removeProperty(e) : n.style.setProperty(e, l, t ? "important" : "");
}
function he(n, e, l) {
  n.classList[l ? "add" : "remove"](e);
}
function fi(n, e, { bubbles: l = !1, cancelable: t = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(n, l, t, e), i;
}
class di {
  constructor(e = !1) {
    this.is_svg = !1, this.is_svg = e, this.e = this.n = null;
  }
  c(e) {
    this.h(e);
  }
  m(e, l, t = null) {
    this.e || (this.is_svg ? this.e = ai(l.nodeName) : this.e = h(l.nodeType === 11 ? "TEMPLATE" : l.nodeName), this.t = l.tagName !== "TEMPLATE" ? l : l.content, this.c(e)), this.i(t);
  }
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
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
let Ee;
function ke(n) {
  Ee = n;
}
function ft() {
  if (!Ee)
    throw new Error("Function called outside component initialization");
  return Ee;
}
function Xe(n) {
  ft().$$.on_mount.push(n);
}
function Ne() {
  const n = ft();
  return (e, l, { cancelable: t = !1 } = {}) => {
    const i = n.$$.callbacks[e];
    if (i) {
      const s = fi(e, l, { cancelable: t });
      return i.slice().forEach((r) => {
        r.call(n, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function ae(n, e) {
  const l = n.$$.callbacks[e.type];
  l && l.slice().forEach((t) => t.call(this, e));
}
const ze = [], be = [];
let je = [];
const nt = [], ui = /* @__PURE__ */ Promise.resolve();
let it = !1;
function mi() {
  it || (it = !0, ui.then(ut));
}
function st(n) {
  je.push(n);
}
function dt(n) {
  nt.push(n);
}
const et = /* @__PURE__ */ new Set();
let Le = 0;
function ut() {
  if (Le !== 0)
    return;
  const n = Ee;
  do {
    try {
      for (; Le < ze.length; ) {
        const e = ze[Le];
        Le++, ke(e), hi(e.$$);
      }
    } catch (e) {
      throw ze.length = 0, Le = 0, e;
    }
    for (ke(null), ze.length = 0, Le = 0; be.length; )
      be.pop()();
    for (let e = 0; e < je.length; e += 1) {
      const l = je[e];
      et.has(l) || (et.add(l), l());
    }
    je.length = 0;
  } while (ze.length);
  for (; nt.length; )
    nt.pop()();
  it = !1, et.clear(), ke(n);
}
function hi(n) {
  if (n.fragment !== null) {
    n.update(), $e(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(st);
  }
}
function pi(n) {
  const e = [], l = [];
  je.forEach((t) => n.indexOf(t) === -1 ? e.push(t) : l.push(t)), l.forEach((t) => t()), je = e;
}
const Oe = /* @__PURE__ */ new Set();
let Re;
function x() {
  Re = {
    r: 0,
    c: [],
    p: Re
    // parent group
  };
}
function K() {
  Re.r || $e(Re.c), Re = Re.p;
}
function g(n, e) {
  n && n.i && (Oe.delete(n), n.i(e));
}
function w(n, e, l, t) {
  if (n && n.o) {
    if (Oe.has(n))
      return;
    Oe.add(n), Re.c.push(() => {
      Oe.delete(n), t && (l && n.d(1), t());
    }), n.o(e);
  } else
    t && t();
}
function bt(n, e) {
  const l = e.token = {};
  function t(i, s, r, o) {
    if (e.token !== l)
      return;
    e.resolved = o;
    let a = e.ctx;
    r !== void 0 && (a = a.slice(), a[r] = o);
    const c = i && (e.current = i)(a);
    let f = !1;
    e.block && (e.blocks ? e.blocks.forEach((d, u) => {
      u !== s && d && (x(), w(d, 1, 1, () => {
        e.blocks[u] === d && (e.blocks[u] = null);
      }), K());
    }) : e.block.d(1), c.c(), g(c, 1), c.m(e.mount(), e.anchor), f = !0), e.block = c, e.blocks && (e.blocks[s] = c), f && ut();
  }
  if (ei(n)) {
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
function vi(n, e, l) {
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
  const { fragment: i, after_update: s } = n.$$;
  i && i.m(e, l), t || st(() => {
    const r = n.$$.on_mount.map(Rn).filter(ct);
    n.$$.on_destroy ? n.$$.on_destroy.push(...r) : $e(r), n.$$.on_mount = [];
  }), s.forEach(st);
}
function j(n, e) {
  const l = n.$$;
  l.fragment !== null && (pi(l.after_update), $e(l.on_destroy), l.fragment && l.fragment.d(e), l.on_destroy = l.fragment = null, l.ctx = []);
}
function _i(n, e) {
  n.$$.dirty[0] === -1 && (ze.push(n), mi(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Y(n, e, l, t, i, s, r, o = [-1]) {
  const a = Ee;
  ke(n);
  const c = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: E,
    not_equal: i,
    bound: _t(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: _t(),
    dirty: o,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  r && r(c.root);
  let f = !1;
  if (c.ctx = l ? l(n, e.props || {}, (d, u, ...m) => {
    const v = m.length ? m[0] : u;
    return c.ctx && i(c.ctx[d], c.ctx[d] = v) && (!c.skip_bound && c.bound[d] && c.bound[d](v), f && _i(n, d)), u;
  }) : [], c.update(), f = !0, $e(c.before_update), c.fragment = t ? t(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = ci(e.target);
      c.fragment && c.fragment.l(d), d.forEach($);
    } else
      c.fragment && c.fragment.c();
    e.intro && g(n.$$.fragment), z(n, e.target, e.anchor, e.customElement), ut();
  }
  ke(a);
}
class ee {
  $destroy() {
    j(this, 1), this.$destroy = E;
  }
  $on(e, l) {
    if (!ct(l))
      return E;
    const t = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return t.push(l), () => {
      const i = t.indexOf(l);
      i !== -1 && t.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !ti(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function ye(n) {
  throw console.trace(), new Error(`Unhandled discriminated union member in ${JSON.stringify(n)}`);
}
function gi(n) {
  ne(n, "svelte-1s6fyc", ".lazy-container.svelte-1s6fyc{position:relative;display:flex;flex:1;height:100%}");
}
function wt(n) {
  let e;
  const l = (
    /*#slots*/
    n[3].default
  ), t = li(
    l,
    n,
    /*$$scope*/
    n[2],
    null
  );
  return {
    c() {
      t && t.c();
    },
    m(i, s) {
      t && t.m(i, s), e = !0;
    },
    p(i, s) {
      t && t.p && (!e || s & /*$$scope*/
      4) && ii(
        t,
        l,
        i,
        /*$$scope*/
        i[2],
        e ? ni(
          l,
          /*$$scope*/
          i[2],
          s,
          null
        ) : si(
          /*$$scope*/
          i[2]
        ),
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
function bi(n) {
  let e, l, t = (
    /*visible*/
    n[0] && wt(n)
  );
  return {
    c() {
      e = h("div"), t && t.c(), p(e, "class", "lazy-container svelte-1s6fyc");
    },
    m(i, s) {
      y(i, e, s), t && t.m(e, null), n[4](e), l = !0;
    },
    p(i, [s]) {
      /*visible*/
      i[0] ? t ? (t.p(i, s), s & /*visible*/
      1 && g(t, 1)) : (t = wt(i), t.c(), g(t, 1), t.m(e, null)) : t && (x(), w(t, 1, 1, () => {
        t = null;
      }), K());
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
function wi(n, e, l) {
  let { $$slots: t = {}, $$scope: i } = e, { visible: s = !1 } = e, r;
  Xe(() => {
    let a = new IntersectionObserver(
      (c) => {
        const f = c[0].isIntersecting;
        f && !s ? l(0, s = !0) : !f && s && l(0, s = !1);
      },
      {
        // Use the browser viewport for visibility checking
        root: null
      }
    );
    return a.observe(r), () => {
      l(0, s = !1), a.disconnect();
    };
  });
  function o(a) {
    be[a ? "unshift" : "push"](() => {
      r = a, l(1, r);
    });
  }
  return n.$$set = (a) => {
    "visible" in a && l(0, s = a.visible), "$$scope" in a && l(2, i = a.$$scope);
  }, [s, r, i, t, o];
}
class ht extends ee {
  constructor(e) {
    super(), Y(this, e, wi, bi, X, { visible: 0 }, gi);
  }
}
function ki(n) {
  ne(n, "svelte-bdlfj4", ".graph-inner-container.svelte-bdlfj4{position:absolute;top:0;left:0;bottom:0;right:0}");
}
function $i(n) {
  let e, l;
  return {
    c() {
      e = h("div"), l = h("canvas"), p(e, "class", "graph-inner-container svelte-bdlfj4"), p(
        e,
        "style",
        /*containerStyle*/
        n[2]
      );
    },
    m(t, i) {
      y(t, e, i), b(e, l), n[5](l), n[6](e);
    },
    p: E,
    i: E,
    o: E,
    d(t) {
      t && $(e), n[5](null), n[6](null);
    }
  };
}
function yi(n, e, l) {
  let { config: t } = e, { viewModel: i } = e, s, r = `width: ${t.width}rem; height: 20rem;`, o, a;
  Xe(() => (a = i.createGraphView(o), () => {
    a == null || a.destroy(), a = void 0;
  }));
  function c(d) {
    be[d ? "unshift" : "push"](() => {
      o = d, l(1, o);
    });
  }
  function f(d) {
    be[d ? "unshift" : "push"](() => {
      s = d, l(0, s);
    });
  }
  return n.$$set = (d) => {
    "config" in d && l(3, t = d.config), "viewModel" in d && l(4, i = d.viewModel);
  }, [
    s,
    o,
    r,
    t,
    i,
    c,
    f
  ];
}
class Mi extends ee {
  constructor(e) {
    super(), Y(this, e, yi, $i, X, { config: 3, viewModel: 4 }, ki);
  }
}
function Ri(n) {
  ne(n, "svelte-1mlx9dh", '.legend-container.svelte-1mlx9dh{display:flex;flex-direction:row;flex-wrap:wrap;flex:0 0 3.5rem;justify-content:center;align-items:center;width:100%;margin-top:-0.45rem;font-family:"Roboto Condensed";font-weight:700;font-size:1rem;line-height:1.2}.legend-item.svelte-1mlx9dh{margin:0 0.2rem 0.1rem 0.2rem;padding:0.25rem 0.6rem 0.2rem 0.6rem;color:#fff;text-align:center}');
}
function kt(n, e, l) {
  const t = n.slice();
  return t[1] = e[l], t;
}
function $t(n) {
  let e, l = (
    /*item*/
    n[1].label.toUpperCase() + ""
  ), t;
  return {
    c() {
      e = h("div"), t = I(l), p(e, "class", "legend-item svelte-1mlx9dh"), se(
        e,
        "background-color",
        /*item*/
        n[1].color
      );
    },
    m(i, s) {
      y(i, e, s), b(e, t);
    },
    p(i, s) {
      s & /*graphSpec*/
      1 && l !== (l = /*item*/
      i[1].label.toUpperCase() + "") && W(t, l), s & /*graphSpec*/
      1 && se(
        e,
        "background-color",
        /*item*/
        i[1].color
      );
    },
    d(i) {
      i && $(e);
    }
  };
}
function Ci(n) {
  let e, l = (
    /*graphSpec*/
    n[0].legendItems
  ), t = [];
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
      for (let r = 0; r < t.length; r += 1)
        t[r] && t[r].m(e, null);
    },
    p(i, [s]) {
      if (s & /*graphSpec*/
      1) {
        l = /*graphSpec*/
        i[0].legendItems;
        let r;
        for (r = 0; r < l.length; r += 1) {
          const o = kt(i, l, r);
          t[r] ? t[r].p(o, s) : (t[r] = $t(o), t[r].c(), t[r].m(e, null));
        }
        for (; r < t.length; r += 1)
          t[r].d(1);
        t.length = l.length;
      }
    },
    i: E,
    o: E,
    d(i) {
      i && $(e), O(t, i);
    }
  };
}
function Si(n, e, l) {
  let { graphSpec: t } = e;
  return n.$$set = (i) => {
    "graphSpec" in i && l(0, t = i.graphSpec);
  }, [t];
}
class Di extends ee {
  constructor(e) {
    super(), Y(this, e, Si, Ci, X, { graphSpec: 0 }, Ri);
  }
}
function Li(n) {
  ne(n, "svelte-1mnj087", '.context-graph-container.svelte-1mnj087{display:inline-flex;flex-direction:column;flex:0 0 38rem;background-color:#fff}.graph-and-info.svelte-1mnj087{display:flex;flex-direction:column}.graph-title.svelte-1mnj087{margin:0.5rem 0;padding:0 0.8rem;font-family:"Roboto Condensed";font-size:1.55rem}.graph-container.svelte-1mnj087{display:block;position:relative;width:38rem;height:20rem}.message.svelte-1mnj087{display:flex;flex:1;min-height:20rem;align-items:center;justify-content:center;background-color:#555;color:#aaa}.link-container.svelte-1mnj087{display:flex;flex-direction:column;align-items:flex-start;margin-bottom:0.4rem}.link-row.svelte-1mnj087{height:1.2rem;margin:0 0.8rem;color:#999;cursor:pointer}.link-row.svelte-1mnj087:hover{color:#000}');
}
function yt(n, e, l) {
  const t = n.slice();
  return t[10] = e[l], t;
}
function Ti(n) {
  let e, l, t, i = (
    /*viewModel*/
    n[0].bundleName + ""
  ), s, r;
  return {
    c() {
      e = h("div"), l = h("span"), l.textContent = "Not included in ", t = h("span"), s = I(i), p(t, "class", r = gt(
        /*viewModel*/
        n[0].datasetClass
      ) + " svelte-1mnj087"), p(e, "class", "message svelte-1mnj087");
    },
    m(o, a) {
      y(o, e, a), b(e, l), b(e, t), b(t, s);
    },
    p(o, a) {
      a & /*viewModel*/
      1 && i !== (i = /*viewModel*/
      o[0].bundleName + "") && W(s, i), a & /*viewModel*/
      1 && r !== (r = gt(
        /*viewModel*/
        o[0].datasetClass
      ) + " svelte-1mnj087") && p(t, "class", r);
    },
    i: E,
    o: E,
    d(o) {
      o && $(e);
    }
  };
}
function Vi(n) {
  let e, l, t = (
    /*viewModel*/
    n[0].graphSpec.title + ""
  ), i, s, r, o, a, c;
  function f(m) {
    n[8](m);
  }
  let d = {
    $$slots: { default: [Ii] },
    $$scope: { ctx: n }
  };
  /*visible*/
  n[1] !== void 0 && (d.visible = /*visible*/
  n[1]), r = new ht({ props: d }), be.push(() => mt(r, "visible", f)), a = new Di({
    props: {
      graphSpec: (
        /*viewModel*/
        n[0].graphSpec
      )
    }
  });
  let u = (
    /*viewModel*/
    n[0].linkItems && Rt(n)
  );
  return {
    c() {
      e = h("div"), l = h("div"), s = h("div"), q(r.$$.fragment), q(a.$$.fragment), u && u.c(), p(l, "class", i = "graph-title " + /*viewModel*/
      n[0].datasetClass + " svelte-1mnj087"), p(s, "class", "graph-container svelte-1mnj087"), p(e, "class", "graph-and-info svelte-1mnj087");
    },
    m(m, v) {
      y(m, e, v), b(e, l), l.innerHTML = t, b(e, s), z(r, s, null), z(a, e, null), u && u.m(e, null), c = !0;
    },
    p(m, v) {
      (!c || v & /*viewModel*/
      1) && t !== (t = /*viewModel*/
      m[0].graphSpec.title + "") && (l.innerHTML = t), (!c || v & /*viewModel*/
      1 && i !== (i = "graph-title " + /*viewModel*/
      m[0].datasetClass + " svelte-1mnj087")) && p(l, "class", i);
      const _ = {};
      v & /*$$scope, $content*/
      8200 && (_.$$scope = { dirty: v, ctx: m }), !o && v & /*visible*/
      2 && (o = !0, _.visible = /*visible*/
      m[1], dt(() => o = !1)), r.$set(_);
      const k = {};
      v & /*viewModel*/
      1 && (k.graphSpec = /*viewModel*/
      m[0].graphSpec), a.$set(k), /*viewModel*/
      m[0].linkItems ? u ? u.p(m, v) : (u = Rt(m), u.c(), u.m(e, null)) : u && (u.d(1), u = null);
    },
    i(m) {
      c || (g(r.$$.fragment, m), g(a.$$.fragment, m), c = !0);
    },
    o(m) {
      w(r.$$.fragment, m), w(a.$$.fragment, m), c = !1;
    },
    d(m) {
      m && $(e), j(r), j(a), u && u.d();
    }
  };
}
function Mt(n) {
  let e, l;
  return e = new Mi({
    props: {
      viewModel: (
        /*$content*/
        n[3].graphData
      ),
      config: (
        /*graphConfig*/
        n[4]
      )
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
      i & /*$content*/
      8 && (s.viewModel = /*$content*/
      t[3].graphData), e.$set(s);
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
function Ii(n) {
  let e, l, t = (
    /*$content*/
    n[3] && Mt(n)
  );
  return {
    c() {
      t && t.c(), e = H();
    },
    m(i, s) {
      t && t.m(i, s), y(i, e, s), l = !0;
    },
    p(i, s) {
      /*$content*/
      i[3] ? t ? (t.p(i, s), s & /*$content*/
      8 && g(t, 1)) : (t = Mt(i), t.c(), g(t, 1), t.m(e.parentNode, e)) : t && (x(), w(t, 1, 1, () => {
        t = null;
      }), K());
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
  let e, l = (
    /*viewModel*/
    n[0].linkItems
  ), t = [];
  for (let i = 0; i < l.length; i += 1)
    t[i] = Ct(yt(n, l, i));
  return {
    c() {
      e = h("div");
      for (let i = 0; i < t.length; i += 1)
        t[i].c();
      p(e, "class", "link-container svelte-1mnj087");
    },
    m(i, s) {
      y(i, e, s);
      for (let r = 0; r < t.length; r += 1)
        t[r] && t[r].m(e, null);
    },
    p(i, s) {
      if (s & /*onLinkClicked, viewModel*/
      33) {
        l = /*viewModel*/
        i[0].linkItems;
        let r;
        for (r = 0; r < l.length; r += 1) {
          const o = yt(i, l, r);
          t[r] ? t[r].p(o, s) : (t[r] = Ct(o), t[r].c(), t[r].m(e, null));
        }
        for (; r < t.length; r += 1)
          t[r].d(1);
        t.length = l.length;
      }
    },
    d(i) {
      i && $(e), O(t, i);
    }
  };
}
function Ct(n) {
  let e, l = (
    /*linkItem*/
    n[10].text + ""
  ), t, i, s;
  function r() {
    return (
      /*click_handler*/
      n[9](
        /*linkItem*/
        n[10]
      )
    );
  }
  return {
    c() {
      e = h("div"), t = I(l), p(e, "class", "link-row svelte-1mnj087");
    },
    m(o, a) {
      y(o, e, a), b(e, t), i || (s = re(e, "click", r), i = !0);
    },
    p(o, a) {
      n = o, a & /*viewModel*/
      1 && l !== (l = /*linkItem*/
      n[10].text + "") && W(t, l);
    },
    d(o) {
      o && $(e), i = !1, s();
    }
  };
}
function zi(n) {
  let e, l, t, i;
  const s = [Vi, Ti], r = [];
  function o(a, c) {
    return (
      /*viewModel*/
      a[0].graphSpec ? 0 : 1
    );
  }
  return l = o(n), t = r[l] = s[l](n), {
    c() {
      e = h("div"), t.c(), p(e, "class", "context-graph-container svelte-1mnj087");
    },
    m(a, c) {
      y(a, e, c), r[l].m(e, null), i = !0;
    },
    p(a, [c]) {
      let f = l;
      l = o(a), l === f ? r[l].p(a, c) : (x(), w(r[f], 1, 1, () => {
        r[f] = null;
      }), K(), t = r[l], t ? t.p(a, c) : (t = r[l] = s[l](a), t.c()), g(t, 1), t.m(e, null));
    },
    i(a) {
      i || (g(t), i = !0);
    },
    o(a) {
      w(t), i = !1;
    },
    d(a) {
      a && $(e), r[l].d();
    }
  };
}
function ji(n, e, l) {
  let t, i = E, s = () => (i(), i = qe(o, (_) => l(3, t = _)), o);
  n.$$.on_destroy.push(() => i());
  let { viewModel: r } = e, o = r.content;
  s();
  let a = !1;
  const c = { width: 38 };
  let f = a, d;
  function u(_) {
    switch (_.kind) {
      case "url":
        window.open(_.content, "_blank");
        break;
      case "copy":
        Zn(_.content);
        break;
      default:
        ye(_.kind);
    }
  }
  function m(_) {
    a = _, l(1, a);
  }
  const v = (_) => u(_);
  return n.$$set = (_) => {
    "viewModel" in _ && l(0, r = _.viewModel);
  }, n.$$.update = () => {
    n.$$.dirty & /*visible, previousVisible, viewModel, previousViewModel*/
    195 && (a !== f || r.requestKey !== (d == null ? void 0 : d.requestKey)) && (d == null || d.clearData(), l(6, f = a), l(7, d = r), s(l(2, o = r.content)), a && r.requestData());
  }, [
    r,
    a,
    o,
    t,
    c,
    u,
    f,
    d,
    m,
    v
  ];
}
class Ue extends ee {
  constructor(e) {
    super(), Y(this, e, ji, zi, X, { viewModel: 0 }, Li);
  }
}
const Te = [];
function Pi(n, e) {
  return {
    subscribe: de(n, e).subscribe
  };
}
function de(n, e = E) {
  let l;
  const t = /* @__PURE__ */ new Set();
  function i(o) {
    if (X(n, o) && (n = o, l)) {
      const a = !Te.length;
      for (const c of t)
        c[1](), Te.push(c, n);
      if (a) {
        for (let c = 0; c < Te.length; c += 2)
          Te[c][0](Te[c + 1]);
        Te.length = 0;
      }
    }
  }
  function s(o) {
    i(o(n));
  }
  function r(o, a = E) {
    const c = [o, a];
    return t.add(c), t.size === 1 && (l = e(i) || E), o(n), () => {
      t.delete(c), t.size === 0 && l && (l(), l = null);
    };
  }
  return { set: i, update: s, subscribe: r };
}
function St(n, e, l) {
  const t = !Array.isArray(n), i = t ? [n] : n, s = e.length < 2;
  return Pi(l, (r) => {
    let o = !1;
    const a = [];
    let c = 0, f = E;
    const d = () => {
      if (c)
        return;
      f();
      const m = e(t ? a[0] : a, r);
      s ? r(m) : f = ct(m) ? m : E;
    }, u = i.map((m, v) => qe(m, (_) => {
      a[v] = _, c &= ~(1 << v), o && d();
    }, () => {
      c |= 1 << v;
    }));
    return o = !0, d(), function() {
      $e(u), f(), o = !1;
    };
  });
}
let qi = 1;
class Dn {
  constructor(e, l, t, i, s) {
    this.dataCoordinator = l, this.bundle = t, this.scenario = i, this.graphSpec = s, this.dataRequested = !1, this.dataLoaded = !1;
    const r = t === "right" ? e.bundleR : e.bundleL;
    if (this.bundleName = r.name, this.datasetClass = `dataset-color-${t === "right" ? "1" : "0"}`, s) {
      const o = t === "right" ? i.specR : i.specL;
      this.linkItems = r.model.getGraphLinksForScenario(o, s.id), this.requestKey = `context-graph::${qi++}::${t}::${s.id}::${i.key}`, this.writableContent = de(void 0), this.content = this.writableContent;
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
function Ni(n) {
  return n === void 0 ? !0 : n.some((e, l) => l > 0 && e > 0);
}
function Ce(n, e) {
  return `<span class="dataset-color-${e === "left" ? 0 : 1}">${n}</span>`;
}
function ot(n) {
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
let Bi = 1;
class Ln {
  constructor(e, l, t, i, s, r) {
    this.comparisonConfig = e, this.dataCoordinator = l, this.title = t, this.subtitle = i, this.scenario = s, this.datasetKey = r, this.dataRequested = !1, this.dataLoaded = !1, this.requestKey = `detail-box::${Bi++}::${s.key}::${r}`, this.writableContent = de(void 0), this.content = this.writableContent;
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
        const t = xi(this.scenario.key, this.datasetKey, e, l), i = (k) => {
          const R = this.comparisonConfig, M = k === "left" ? R.bundleL.name : R.bundleR.name;
          return `Data only defined in ${Ce(M, k)}`;
        }, s = t.diffReport;
        let r, o;
        switch (s.validity) {
          case "both":
            r = pt(s.maxDiff, this.comparisonConfig.thresholds), s.maxDiff === 0 ? o = "No differences" : o = void 0;
            break;
          case "left-only":
            r = void 0, o = i("left");
            break;
          case "right-only":
            r = void 0, o = i("right");
            break;
          default:
            r = void 0, o = "Dataset not defined for this scenario";
            break;
        }
        const a = this.dataCoordinator.bundleModelL.modelSpec, c = this.dataCoordinator.bundleModelR.modelSpec, f = a.outputVars.get(this.datasetKey), u = c.outputVars.get(this.datasetKey) || f;
        let m, v;
        u.sourceName === void 0 && (a.startTime !== void 0 && c.startTime !== void 0 && (m = Math.min(a.startTime, c.startTime)), a.endTime !== void 0 && c.endTime !== void 0 && (v = Math.max(a.endTime, c.endTime)));
        const _ = {
          key: this.requestKey,
          refPlots: [],
          pointsL: ot(e == null ? void 0 : e.get(this.datasetKey)),
          pointsR: ot(l == null ? void 0 : l.get(this.datasetKey)),
          xMin: m,
          xMax: v
        };
        this.writableContent.set({
          bucketClass: `bucket-border-${r !== void 0 ? r : "undefined"}`,
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
function xi(n, e, l, t) {
  const i = l == null ? void 0 : l.get(e), s = t == null ? void 0 : t.get(e), r = Kn(i, s);
  return {
    scenarioKey: n,
    datasetKey: e,
    diffReport: r
  };
}
function Tn(n, e, l, t, i, s) {
  const r = [];
  for (const o of s) {
    if (o === void 0) {
      r.push(void 0);
      continue;
    }
    const a = l === "scenarios" ? `…${o.subtitle}` : o.title;
    r.push(
      new Ln(
        n,
        e,
        a,
        void 0,
        //item.subtitle,
        o.scenario,
        o.testSummary.d
      )
    );
  }
  return {
    title: t,
    subtitle: i,
    showTitle: l === "scenarios",
    boxes: r
  };
}
function Ki(n) {
  var f, d;
  const e = n.comparisonConfig, l = n.dataCoordinator, t = l.bundleModelL, i = l.bundleModelR, s = (u, m, v) => new Dn(e, l, v, u, m), r = /* @__PURE__ */ new Set(), o = (u, m) => {
    if (m.modelSpec.graphSpecs !== void 0) {
      for (const v of m.modelSpec.graphSpecs)
        for (const _ of v.datasets)
          if (_.datasetKey === u.datasetKey) {
            r.add(v.id);
            break;
          }
    }
  }, a = e.datasets.getDataset(n.datasetKey);
  o(a.outputVarL, t), o(a.outputVarR, i);
  const c = [];
  for (const u of r) {
    const m = (f = t.modelSpec.graphSpecs) == null ? void 0 : f.find((_) => _.id === u), v = (d = i.modelSpec.graphSpecs) == null ? void 0 : d.find((_) => _.id === u);
    c.push({
      graphL: s(n.scenario, m, "left"),
      graphR: s(n.scenario, v, "right")
    });
  }
  return c;
}
const Dt = "#444", Ae = "Roboto Condensed", Lt = 14, Tt = "#777", Ei = {
  beforeDatasetsDraw: (n) => {
    const e = n.ctx;
    e.save();
    const l = n.data.datasets;
    for (let t = 0; t < l.length; t++) {
      const i = l[t];
      if (i.data.length !== 1)
        continue;
      const r = n.getDatasetMeta(t).data[0];
      let o;
      if (i.fill === "+1") {
        if (t + 1 >= l.length)
          break;
        const c = n.getDatasetMeta(t + 1).data[0];
        o = { x: c._view.x, y: c._view.y };
      } else if (i.fill === "start")
        o = { x: r._view.x, y: n.chartArea.bottom };
      else if (i.fill === "end")
        o = { x: r._view.x, y: n.chartArea.top };
      else
        return;
      e.beginPath(), e.moveTo(r._view.x, r._view.y), e.lineTo(o.x, o.y), e.closePath(), e.strokeStyle = i.backgroundColor, e.lineWidth = 4, e.stroke();
    }
    e.restore();
  }
};
Mn.pluginService.register(Ei);
class Wi {
  constructor(e, l) {
    this.canvas = e, this.viewModel = l, this.chart = Gi(e, l);
  }
  /**
   * Destroy the chart and any associated resources.
   */
  destroy() {
    var e;
    (e = this.chart) == null || e.destroy(), this.chart = void 0;
  }
}
function Gi(n, e) {
  const l = [];
  function t(o, a, c) {
    let d = 3;
    c && (d = 1);
    let u, m = !1;
    switch (c) {
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
    o.length === 1 && c !== "dashed" && (_ = 5, k = a), l.push({
      data: o,
      borderColor: a,
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
  const i = e.xMin, s = e.xMax, r = i === 1990;
  return new Mn(n, {
    type: "line",
    data: {
      datasets: l
    },
    options: {
      // Use built-in responsive resizing support.  Note that for this to work
      // correctly, the canvas parent must be a container with a fixed size
      // (in `vw` units) and `position: relative`.  For more information:
      //   https://www.chartjs.org/docs/latest/general/responsive.html
      responsive: !0,
      maintainAspectRatio: !1,
      // Disable animation
      animation: { duration: 0 },
      hover: { animationDuration: 0 },
      responsiveAnimationDuration: 0,
      // Disable the built-in title and legend
      title: { display: !1 },
      legend: { display: !1 },
      // Don't show points
      elements: {
        point: {
          radius: 0
        }
      },
      // Customize tooltip font
      tooltips: {
        titleFontFamily: Ae,
        bodyFontFamily: Ae
      },
      // Axis configurations
      scales: {
        xAxes: [
          {
            type: "linear",
            position: "bottom",
            gridLines: {
              color: Dt
            },
            ticks: {
              maxTicksLimit: 6,
              maxRotation: 0,
              min: i,
              max: s,
              fontFamily: Ae,
              fontSize: Lt,
              fontColor: Tt,
              callback: (o, a) => r && a === 0 ? "" : o
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: Dt
            },
            ticks: {
              fontFamily: Ae,
              fontSize: Lt,
              fontColor: Tt
            }
          }
        ]
      }
    }
  });
}
function Ai(n) {
  ne(n, "svelte-bdlfj4", ".graph-inner-container.svelte-bdlfj4{position:absolute;top:0;left:0;bottom:0;right:0}");
}
function Fi(n) {
  let e;
  return {
    c() {
      e = h("div"), p(e, "class", "graph-inner-container svelte-bdlfj4"), p(
        e,
        "style",
        /*containerStyle*/
        n[1]
      );
    },
    m(l, t) {
      y(l, e, t), n[7](e);
    },
    p: E,
    i: E,
    o: E,
    d(l) {
      l && $(e), n[7](null);
    }
  };
}
function Hi(n, e, l) {
  let { viewModel: t } = e, { width: i } = e, { height: s } = e, r, o = `width: ${i}rem; height: ${s}rem;`, a, c;
  function f() {
    a == null || a.destroy();
    const u = document.createElement("canvas");
    for (; r.firstChild; )
      r.firstChild.remove();
    r.appendChild(u), l(6, c = t.key), l(5, a = new Wi(u, t));
  }
  Xe(() => (f(), () => {
    a == null || a.destroy(), l(5, a = void 0);
  }));
  function d(u) {
    be[u ? "unshift" : "push"](() => {
      r = u, l(0, r);
    });
  }
  return n.$$set = (u) => {
    "viewModel" in u && l(2, t = u.viewModel), "width" in u && l(3, i = u.width), "height" in u && l(4, s = u.height);
  }, n.$$.update = () => {
    n.$$.dirty & /*graphView, viewModel, previousKey*/
    100 && a && t.key !== c && f();
  }, [
    r,
    o,
    t,
    i,
    s,
    a,
    c,
    d
  ];
}
class Vn extends ee {
  constructor(e) {
    super(), Y(this, e, Hi, Fi, X, { viewModel: 2, width: 3, height: 4 }, Ai);
  }
}
function Oi(n) {
  ne(n, "svelte-1d7myx7", ".detail-box.svelte-1d7myx7{display:flex;flex-direction:column}.title-row.svelte-1d7myx7{display:flex;flex-direction:row;align-items:baseline}.title.svelte-1d7myx7{margin-left:0.7rem;font-size:1.1em;font-weight:700;cursor:pointer}.subtitle.svelte-1d7myx7{color:#aaa;margin-left:0.4rem}.content-container.svelte-1d7myx7{display:flex;flex-direction:column;width:31.6rem;height:27.6rem}.content.svelte-1d7myx7{display:flex;flex-direction:column;height:26rem;padding:0.5rem;border-width:0.3rem;border-style:solid;border-radius:0.8rem}.graph-container.svelte-1d7myx7{position:relative;display:flex;width:30rem;height:22rem;margin-bottom:0.2rem}.message-container.svelte-1d7myx7{display:flex;flex-direction:column;flex:1;justify-content:flex-end}.data-row.svelte-1d7myx7{display:flex;flex-direction:row;align-items:baseline}.data-label.svelte-1d7myx7{font-size:0.9em;color:#aaa;width:2rem;margin-right:0.4rem;text-align:right}");
}
function Vt(n) {
  let e, l, t = (
    /*viewModel*/
    n[0].title + ""
  ), i, s, r = (
    /*viewModel*/
    n[0].subtitle && It(n)
  );
  return {
    c() {
      e = h("div"), l = h("div"), r && r.c(), p(l, "class", "title svelte-1d7myx7"), p(e, "class", "title-row no-selection svelte-1d7myx7");
    },
    m(o, a) {
      y(o, e, a), b(e, l), l.innerHTML = t, r && r.m(e, null), i || (s = re(
        l,
        "click",
        /*onTitleClicked*/
        n[4]
      ), i = !0);
    },
    p(o, a) {
      a & /*viewModel*/
      1 && t !== (t = /*viewModel*/
      o[0].title + "") && (l.innerHTML = t), /*viewModel*/
      o[0].subtitle ? r ? r.p(o, a) : (r = It(o), r.c(), r.m(e, null)) : r && (r.d(1), r = null);
    },
    d(o) {
      o && $(e), r && r.d(), i = !1, s();
    }
  };
}
function It(n) {
  let e, l = (
    /*viewModel*/
    n[0].subtitle + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "subtitle svelte-1d7myx7");
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p(t, i) {
      i & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      t[0].subtitle + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function zt(n) {
  let e, l, t, i, s, r;
  t = new Vn({
    props: {
      viewModel: (
        /*$content*/
        n[3].comparisonGraphViewModel
      ),
      width: "30",
      height: "22"
    }
  });
  function o(f, d) {
    return (
      /*$content*/
      f[3].message ? Xi : Ui
    );
  }
  let a = o(n), c = a(n);
  return {
    c() {
      e = h("div"), l = h("div"), q(t.$$.fragment), i = h("div"), c.c(), p(l, "class", "graph-container svelte-1d7myx7"), p(i, "class", "message-container svelte-1d7myx7"), p(e, "class", s = "content " + /*$content*/
      n[3].bucketClass + " svelte-1d7myx7");
    },
    m(f, d) {
      y(f, e, d), b(e, l), z(t, l, null), b(e, i), c.m(i, null), r = !0;
    },
    p(f, d) {
      const u = {};
      d & /*$content*/
      8 && (u.viewModel = /*$content*/
      f[3].comparisonGraphViewModel), t.$set(u), a === (a = o(f)) && c ? c.p(f, d) : (c.d(1), c = a(f), c && (c.c(), c.m(i, null))), (!r || d & /*$content*/
      8 && s !== (s = "content " + /*$content*/
      f[3].bucketClass + " svelte-1d7myx7")) && p(e, "class", s);
    },
    i(f) {
      r || (g(t.$$.fragment, f), r = !0);
    },
    o(f) {
      w(t.$$.fragment, f), r = !1;
    },
    d(f) {
      f && $(e), j(t), c.d();
    }
  };
}
function Ui(n) {
  let e, l, t, i = Ve(
    /*$content*/
    n[3].diffReport.avgDiff
  ) + "", s, r, o, a, c = Ve(
    /*$content*/
    n[3].diffReport.minDiff
  ) + "", f, d, u, m, v = Ve(
    /*$content*/
    n[3].diffReport.maxDiff
  ) + "", _, k = (
    /*$content*/
    n[3].diffReport.maxDiffPoint && jt(n)
  );
  return {
    c() {
      e = h("div"), l = h("div"), l.textContent = "avg", t = h("div"), s = I(i), r = h("div"), o = h("div"), o.textContent = "min", a = h("div"), f = I(c), d = h("div"), u = h("div"), u.textContent = "max", m = h("div"), _ = I(v), k && k.c(), p(l, "class", "data-label svelte-1d7myx7"), p(t, "class", "data-value"), p(e, "class", "data-row svelte-1d7myx7"), p(o, "class", "data-label svelte-1d7myx7"), p(a, "class", "data-value"), p(r, "class", "data-row svelte-1d7myx7"), p(u, "class", "data-label svelte-1d7myx7"), p(m, "class", "data-value"), p(d, "class", "data-row svelte-1d7myx7");
    },
    m(R, M) {
      y(R, e, M), b(e, l), b(e, t), b(t, s), y(R, r, M), b(r, o), b(r, a), b(a, f), y(R, d, M), b(d, u), b(d, m), b(m, _), k && k.m(d, null);
    },
    p(R, M) {
      M & /*$content*/
      8 && i !== (i = Ve(
        /*$content*/
        R[3].diffReport.avgDiff
      ) + "") && W(s, i), M & /*$content*/
      8 && c !== (c = Ve(
        /*$content*/
        R[3].diffReport.minDiff
      ) + "") && W(f, c), M & /*$content*/
      8 && v !== (v = Ve(
        /*$content*/
        R[3].diffReport.maxDiff
      ) + "") && W(_, v), /*$content*/
      R[3].diffReport.maxDiffPoint ? k ? k.p(R, M) : (k = jt(R), k.c(), k.m(d, null)) : k && (k.d(1), k = null);
    },
    d(R) {
      R && $(e), R && $(r), R && $(d), k && k.d();
    }
  };
}
function Xi(n) {
  let e, l = (
    /*$content*/
    n[3].message + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "message");
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p(t, i) {
      i & /*$content*/
      8 && l !== (l = /*$content*/
      t[3].message + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function jt(n) {
  let e, l, t = Fe(
    /*$content*/
    n[3].diffReport.maxDiffPoint.valueL
  ) + "", i, s, r, o = Fe(
    /*$content*/
    n[3].diffReport.maxDiffPoint.valueR
  ) + "", a, c, f, d = (
    /*$content*/
    n[3].diffReport.maxDiffPoint.time + ""
  ), u;
  return {
    c() {
      e = h("div"), e.textContent = " (", l = h("div"), i = I(t), s = h("div"), s.textContent = " | ", r = h("div"), a = I(o), c = h("div"), f = I(") at "), u = I(d), p(e, "class", "data-value"), p(l, "class", "data-value dataset-color-0"), p(s, "class", "data-value"), p(r, "class", "data-value dataset-color-1"), p(c, "class", "data-value");
    },
    m(m, v) {
      y(m, e, v), y(m, l, v), b(l, i), y(m, s, v), y(m, r, v), b(r, a), y(m, c, v), b(c, f), b(c, u);
    },
    p(m, v) {
      v & /*$content*/
      8 && t !== (t = Fe(
        /*$content*/
        m[3].diffReport.maxDiffPoint.valueL
      ) + "") && W(i, t), v & /*$content*/
      8 && o !== (o = Fe(
        /*$content*/
        m[3].diffReport.maxDiffPoint.valueR
      ) + "") && W(a, o), v & /*$content*/
      8 && d !== (d = /*$content*/
      m[3].diffReport.maxDiffPoint.time + "") && W(u, d);
    },
    d(m) {
      m && $(e), m && $(l), m && $(s), m && $(r), m && $(c);
    }
  };
}
function Zi(n) {
  let e, l, t = (
    /*$content*/
    n[3] && zt(n)
  );
  return {
    c() {
      t && t.c(), e = H();
    },
    m(i, s) {
      t && t.m(i, s), y(i, e, s), l = !0;
    },
    p(i, s) {
      /*$content*/
      i[3] ? t ? (t.p(i, s), s & /*$content*/
      8 && g(t, 1)) : (t = zt(i), t.c(), g(t, 1), t.m(e.parentNode, e)) : t && (x(), w(t, 1, 1, () => {
        t = null;
      }), K());
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
function Ji(n) {
  let e, l, t, i, s, r = (
    /*viewModel*/
    n[0].title && Vt(n)
  );
  function o(c) {
    n[7](c);
  }
  let a = {
    $$slots: { default: [Zi] },
    $$scope: { ctx: n }
  };
  return (
    /*visible*/
    n[1] !== void 0 && (a.visible = /*visible*/
    n[1]), t = new ht({ props: a }), be.push(() => mt(t, "visible", o)), {
      c() {
        e = h("div"), r && r.c(), l = h("div"), q(t.$$.fragment), p(l, "class", "content-container svelte-1d7myx7"), p(e, "class", "detail-box svelte-1d7myx7");
      },
      m(c, f) {
        y(c, e, f), r && r.m(e, null), b(e, l), z(t, l, null), s = !0;
      },
      p(c, [f]) {
        /*viewModel*/
        c[0].title ? r ? r.p(c, f) : (r = Vt(c), r.c(), r.m(e, l)) : r && (r.d(1), r = null);
        const d = {};
        f & /*$$scope, $content*/
        520 && (d.$$scope = { dirty: f, ctx: c }), !i && f & /*visible*/
        2 && (i = !0, d.visible = /*visible*/
        c[1], dt(() => i = !1)), t.$set(d);
      },
      i(c) {
        s || (g(t.$$.fragment, c), s = !0);
      },
      o(c) {
        w(t.$$.fragment, c), s = !1;
      },
      d(c) {
        c && $(e), r && r.d(), j(t);
      }
    }
  );
}
function Ve(n) {
  return n != null ? `${n.toFixed(2)}%` : "n/a";
}
function Fe(n) {
  return n != null ? n.toFixed(4) : "undefined";
}
function Qi(n, e, l) {
  let t, i = E, s = () => (i(), i = qe(o, (v) => l(3, t = v)), o);
  n.$$.on_destroy.push(() => i());
  let { viewModel: r } = e, o = r.content;
  s();
  let a = !1, c = a, f;
  const d = Ne();
  function u() {
    d("toggle");
  }
  function m(v) {
    a = v, l(1, a);
  }
  return n.$$set = (v) => {
    "viewModel" in v && l(0, r = v.viewModel);
  }, n.$$.update = () => {
    n.$$.dirty & /*visible, previousVisible, viewModel, previousViewModel*/
    99 && (a !== c || r.requestKey !== (f == null ? void 0 : f.requestKey)) && (f == null || f.clearData(), l(5, c = a), l(6, f = r), s(l(2, o = r.content)), a && r.requestData());
  }, [
    r,
    a,
    o,
    t,
    u,
    c,
    f,
    m
  ];
}
class Ze extends ee {
  constructor(e) {
    super(), Y(this, e, Qi, Ji, X, { viewModel: 0 }, Oi);
  }
}
function Yi(n) {
  ne(n, "svelte-1sac0ts", ".detail-row.svelte-1sac0ts{display:flex;flex-direction:column}.title-row.svelte-1sac0ts{display:flex;flex-direction:row;align-items:baseline;margin-bottom:0.5rem}.title.svelte-1sac0ts{margin-right:0.8rem;font-size:1.6em;font-weight:700}.subtitle.svelte-1sac0ts{font-size:1.3em;color:#aaa}.subtitle.svelte-1sac0ts .subtitle-sep{color:#666}.boxes.svelte-1sac0ts{display:flex;flex-direction:row;flex:1}.box-container.svelte-1sac0ts{width:31.6rem;height:29rem}.box-container.dimmed.svelte-1sac0ts{opacity:0.2}.spacer-flex.svelte-1sac0ts{flex:1}.context-graphs-container.svelte-1sac0ts{display:inline-flex;flex-direction:column;margin-top:1rem;background-color:#555}.context-graph-row.svelte-1sac0ts{display:flex;flex-direction:row;margin:1rem 0}.context-graph-spacer.svelte-1sac0ts{flex:0 0 2rem}");
}
function Pt(n, e, l) {
  const t = n.slice();
  return t[7] = e[l], t;
}
function qt(n) {
  let e, l, t = (
    /*viewModel*/
    n[0].title + ""
  ), i, s = (
    /*viewModel*/
    n[0].subtitle && Nt(n)
  );
  return {
    c() {
      e = h("div"), l = h("div"), i = I(t), s && s.c(), p(l, "class", "title svelte-1sac0ts"), p(e, "class", "title-row svelte-1sac0ts");
    },
    m(r, o) {
      y(r, e, o), b(e, l), b(l, i), s && s.m(e, null);
    },
    p(r, o) {
      o & /*viewModel*/
      1 && t !== (t = /*viewModel*/
      r[0].title + "") && W(i, t), /*viewModel*/
      r[0].subtitle ? s ? s.p(r, o) : (s = Nt(r), s.c(), s.m(e, null)) : s && (s.d(1), s = null);
    },
    d(r) {
      r && $(e), s && s.d();
    }
  };
}
function Nt(n) {
  let e, l = (
    /*viewModel*/
    n[0].subtitle + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "subtitle svelte-1sac0ts");
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p(t, i) {
      i & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      t[0].subtitle + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function Bt(n) {
  let e, l;
  return e = new Ze({
    props: { viewModel: (
      /*viewModel*/
      n[0].boxes[0]
    ) }
  }), e.$on(
    "toggle",
    /*toggle_handler*/
    n[4]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & /*viewModel*/
      1 && (s.viewModel = /*viewModel*/
      t[0].boxes[0]), e.$set(s);
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
  return e = new Ze({
    props: { viewModel: (
      /*viewModel*/
      n[0].boxes[1]
    ) }
  }), e.$on(
    "toggle",
    /*toggle_handler_1*/
    n[5]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & /*viewModel*/
      1 && (s.viewModel = /*viewModel*/
      t[0].boxes[1]), e.$set(s);
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
  return e = new Ze({
    props: { viewModel: (
      /*viewModel*/
      n[0].boxes[2]
    ) }
  }), e.$on(
    "toggle",
    /*toggle_handler_2*/
    n[6]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & /*viewModel*/
      1 && (s.viewModel = /*viewModel*/
      t[0].boxes[2]), e.$set(s);
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
function Et(n) {
  let e, l, t = (
    /*contextGraphRows*/
    n[2] && Wt(n)
  );
  return {
    c() {
      e = h("div"), t && t.c(), p(e, "class", "context-graphs-container svelte-1sac0ts");
    },
    m(i, s) {
      y(i, e, s), t && t.m(e, null), l = !0;
    },
    p(i, s) {
      /*contextGraphRows*/
      i[2] ? t ? (t.p(i, s), s & /*contextGraphRows*/
      4 && g(t, 1)) : (t = Wt(i), t.c(), g(t, 1), t.m(e, null)) : t && (x(), w(t, 1, 1, () => {
        t = null;
      }), K());
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
function Wt(n) {
  let e, l, t = (
    /*contextGraphRows*/
    n[2]
  ), i = [];
  for (let r = 0; r < t.length; r += 1)
    i[r] = Gt(Pt(n, t, r));
  const s = (r) => w(i[r], 1, 1, () => {
    i[r] = null;
  });
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      e = H();
    },
    m(r, o) {
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(r, o);
      y(r, e, o), l = !0;
    },
    p(r, o) {
      if (o & /*contextGraphRows*/
      4) {
        t = /*contextGraphRows*/
        r[2];
        let a;
        for (a = 0; a < t.length; a += 1) {
          const c = Pt(r, t, a);
          i[a] ? (i[a].p(c, o), g(i[a], 1)) : (i[a] = Gt(c), i[a].c(), g(i[a], 1), i[a].m(e.parentNode, e));
        }
        for (x(), a = t.length; a < i.length; a += 1)
          s(a);
        K();
      }
    },
    i(r) {
      if (!l) {
        for (let o = 0; o < t.length; o += 1)
          g(i[o]);
        l = !0;
      }
    },
    o(r) {
      i = i.filter(Boolean);
      for (let o = 0; o < i.length; o += 1)
        w(i[o]);
      l = !1;
    },
    d(r) {
      O(i, r), r && $(e);
    }
  };
}
function Gt(n) {
  let e, l, t, i, s, r, o;
  return t = new Ue({
    props: {
      viewModel: (
        /*rowViewModel*/
        n[7].graphL
      )
    }
  }), s = new Ue({
    props: {
      viewModel: (
        /*rowViewModel*/
        n[7].graphR
      )
    }
  }), {
    c() {
      e = h("div"), l = h("div"), q(t.$$.fragment), i = h("div"), q(s.$$.fragment), r = h("div"), p(l, "class", "spacer-flex svelte-1sac0ts"), p(i, "class", "context-graph-spacer svelte-1sac0ts"), p(r, "class", "spacer-flex svelte-1sac0ts"), p(e, "class", "context-graph-row svelte-1sac0ts");
    },
    m(a, c) {
      y(a, e, c), b(e, l), z(t, e, null), b(e, i), z(s, e, null), b(e, r), o = !0;
    },
    p(a, c) {
      const f = {};
      c & /*contextGraphRows*/
      4 && (f.viewModel = /*rowViewModel*/
      a[7].graphL), t.$set(f);
      const d = {};
      c & /*contextGraphRows*/
      4 && (d.viewModel = /*rowViewModel*/
      a[7].graphR), s.$set(d);
    },
    i(a) {
      o || (g(t.$$.fragment, a), g(s.$$.fragment, a), o = !0);
    },
    o(a) {
      w(t.$$.fragment, a), w(s.$$.fragment, a), o = !1;
    },
    d(a) {
      a && $(e), j(t), j(s);
    }
  };
}
function es(n) {
  let e, l, t, i, s, r, o, a, c = (
    /*viewModel*/
    n[0].showTitle && qt(n)
  ), f = (
    /*viewModel*/
    n[0].boxes[0] && Bt(n)
  ), d = (
    /*viewModel*/
    n[0].boxes[1] && xt(n)
  ), u = (
    /*viewModel*/
    n[0].boxes[2] && Kt(n)
  ), m = (
    /*expandedIndex*/
    n[1] !== void 0 && Et(n)
  );
  return {
    c() {
      e = h("div"), c && c.c(), l = h("div"), t = h("div"), f && f.c(), i = h("div"), s = h("div"), d && d.c(), r = h("div"), o = h("div"), u && u.c(), m && m.c(), p(t, "class", "box-container svelte-1sac0ts"), he(t, "dimmed", Ie(
        0,
        /*expandedIndex*/
        n[1]
      )), p(i, "class", "spacer-flex svelte-1sac0ts"), p(s, "class", "box-container svelte-1sac0ts"), he(s, "dimmed", Ie(
        1,
        /*expandedIndex*/
        n[1]
      )), p(r, "class", "spacer-flex svelte-1sac0ts"), p(o, "class", "box-container svelte-1sac0ts"), he(o, "dimmed", Ie(
        2,
        /*expandedIndex*/
        n[1]
      )), p(l, "class", "boxes svelte-1sac0ts"), p(e, "class", "detail-row svelte-1sac0ts");
    },
    m(v, _) {
      y(v, e, _), c && c.m(e, null), b(e, l), b(l, t), f && f.m(t, null), b(l, i), b(l, s), d && d.m(s, null), b(l, r), b(l, o), u && u.m(o, null), m && m.m(e, null), a = !0;
    },
    p(v, [_]) {
      /*viewModel*/
      v[0].showTitle ? c ? c.p(v, _) : (c = qt(v), c.c(), c.m(e, l)) : c && (c.d(1), c = null), /*viewModel*/
      v[0].boxes[0] ? f ? (f.p(v, _), _ & /*viewModel*/
      1 && g(f, 1)) : (f = Bt(v), f.c(), g(f, 1), f.m(t, null)) : f && (x(), w(f, 1, 1, () => {
        f = null;
      }), K()), (!a || _ & /*isDimmed, expandedIndex*/
      2) && he(t, "dimmed", Ie(
        0,
        /*expandedIndex*/
        v[1]
      )), /*viewModel*/
      v[0].boxes[1] ? d ? (d.p(v, _), _ & /*viewModel*/
      1 && g(d, 1)) : (d = xt(v), d.c(), g(d, 1), d.m(s, null)) : d && (x(), w(d, 1, 1, () => {
        d = null;
      }), K()), (!a || _ & /*isDimmed, expandedIndex*/
      2) && he(s, "dimmed", Ie(
        1,
        /*expandedIndex*/
        v[1]
      )), /*viewModel*/
      v[0].boxes[2] ? u ? (u.p(v, _), _ & /*viewModel*/
      1 && g(u, 1)) : (u = Kt(v), u.c(), g(u, 1), u.m(o, null)) : u && (x(), w(u, 1, 1, () => {
        u = null;
      }), K()), (!a || _ & /*isDimmed, expandedIndex*/
      2) && he(o, "dimmed", Ie(
        2,
        /*expandedIndex*/
        v[1]
      )), /*expandedIndex*/
      v[1] !== void 0 ? m ? (m.p(v, _), _ & /*expandedIndex*/
      2 && g(m, 1)) : (m = Et(v), m.c(), g(m, 1), m.m(e, null)) : m && (x(), w(m, 1, 1, () => {
        m = null;
      }), K());
    },
    i(v) {
      a || (g(f), g(d), g(u), g(m), a = !0);
    },
    o(v) {
      w(f), w(d), w(u), w(m), a = !1;
    },
    d(v) {
      v && $(e), c && c.d(), f && f.d(), d && d.d(), u && u.d(), m && m.d();
    }
  };
}
function Ie(n, e) {
  return e !== void 0 && n !== e;
}
function ts(n, e, l) {
  let { viewModel: t } = e, i, s;
  function r(f) {
    f === i ? (l(1, i = void 0), l(2, s = void 0)) : (l(1, i = f), l(2, s = Ki(t.boxes[f])));
  }
  const o = () => r(0), a = () => r(1), c = () => r(2);
  return n.$$set = (f) => {
    "viewModel" in f && l(0, t = f.viewModel);
  }, n.$$.update = () => {
    n.$$.dirty & /*viewModel*/
    1 && t && (l(1, i = void 0), l(2, s = void 0));
  }, [
    t,
    i,
    s,
    r,
    o,
    a,
    c
  ];
}
class ls extends ee {
  constructor(e) {
    super(), Y(this, e, ts, es, X, { viewModel: 0 }, Yi);
  }
}
function ns(n) {
  ne(n, "svelte-4p3lgl", '.dataset-container.svelte-4p3lgl{display:flex;flex:1;flex-direction:column}.dataset-row.svelte-4p3lgl{display:flex;flex:1;align-items:baseline;margin-left:0.6rem;cursor:pointer}.dataset-row.svelte-4p3lgl:hover{background-color:rgba(255, 255, 255, 0.05)}.dataset-arrow.svelte-4p3lgl{color:#777}.legend-item.svelte-4p3lgl{font-family:"Roboto Condensed";font-weight:700;font-size:1rem;margin:0.2rem 0.4rem;padding:0.25rem 0.6rem 0.2rem 0.6rem;color:#fff;text-align:center}.detail-box-container.svelte-4p3lgl{display:flex;flex:1;margin-top:0.2rem;margin-bottom:0.8rem;margin-left:0.4rem}');
}
function is(n) {
  let e, l = (
    /*legendLabelR*/
    n[7].toUpperCase() + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "legend-item svelte-4p3lgl"), se(
        e,
        "background-color",
        /*legendColorR*/
        n[5]
      );
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p: E,
    d(t) {
      t && $(e);
    }
  };
}
function ss(n) {
  let e, l = (
    /*legendLabelL*/
    n[6].toUpperCase() + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "legend-item svelte-4p3lgl"), se(
        e,
        "background-color",
        /*legendColorL*/
        n[4]
      );
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p: E,
    d(t) {
      t && $(e);
    }
  };
}
function os(n) {
  let e, l;
  return {
    c() {
      e = h("div"), l = I(
        /*nameR*/
        n[3]
      ), p(e, "class", "dataset-name " + /*bucketClass*/
      n[8] + " svelte-4p3lgl");
    },
    m(t, i) {
      y(t, e, i), b(e, l);
    },
    p: E,
    d(t) {
      t && $(e);
    }
  };
}
function rs(n) {
  let e, l;
  return {
    c() {
      e = h("div"), l = I(
        /*nameL*/
        n[2]
      ), p(e, "class", "dataset-name " + /*bucketClass*/
      n[8] + " svelte-4p3lgl");
    },
    m(t, i) {
      y(t, e, i), b(e, l);
    },
    p: E,
    d(t) {
      t && $(e);
    }
  };
}
function as(n) {
  let e, l, t, i, s;
  return {
    c() {
      e = h("div"), l = I(
        /*nameL*/
        n[2]
      ), t = h("span"), t.textContent = " -> ", i = h("div"), s = I(
        /*nameR*/
        n[3]
      ), p(e, "class", "dataset-name " + /*bucketClass*/
      n[8] + " svelte-4p3lgl"), p(t, "class", "dataset-arrow svelte-4p3lgl"), p(i, "class", "dataset-name " + /*bucketClass*/
      n[8] + " svelte-4p3lgl");
    },
    m(r, o) {
      y(r, e, o), b(e, l), y(r, t, o), y(r, i, o), b(i, s);
    },
    p: E,
    d(r) {
      r && $(e), r && $(t), r && $(i);
    }
  };
}
function At(n) {
  let e, l, t;
  return l = new Ze({
    props: {
      viewModel: (
        /*viewModel*/
        n[0].detailBoxViewModel
      )
    }
  }), {
    c() {
      e = h("div"), q(l.$$.fragment), p(e, "class", "detail-box-container svelte-4p3lgl");
    },
    m(i, s) {
      y(i, e, s), z(l, e, null), t = !0;
    },
    p(i, s) {
      const r = {};
      s & /*viewModel*/
      1 && (r.viewModel = /*viewModel*/
      i[0].detailBoxViewModel), l.$set(r);
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
function cs(n) {
  let e, l, t, i, s, r;
  function o(v, _) {
    if (
      /*legendLabelL*/
      v[6] && !/*legendLabelR*/
      v[7]
    )
      return ss;
    if (
      /*legendLabelR*/
      v[7]
    )
      return is;
  }
  let a = o(n), c = a && a(n);
  function f(v, _) {
    if (
      /*nameL*/
      v[2] && /*nameR*/
      v[3] && /*nameL*/
      v[2] !== /*nameR*/
      v[3]
    )
      return as;
    if (
      /*nameL*/
      v[2] && !/*nameR*/
      v[3]
    )
      return rs;
    if (
      /*nameR*/
      v[3]
    )
      return os;
  }
  let d = f(n), u = d && d(n), m = (
    /*$detailBoxVisible*/
    n[1] && At(n)
  );
  return {
    c() {
      e = h("div"), l = h("div"), c && c.c(), t = H(), u && u.c(), m && m.c(), p(l, "class", "dataset-row svelte-4p3lgl"), p(e, "class", "dataset-container svelte-4p3lgl");
    },
    m(v, _) {
      y(v, e, _), b(e, l), c && c.m(l, null), b(l, t), u && u.m(l, null), m && m.m(e, null), i = !0, s || (r = re(
        l,
        "click",
        /*onDatasetClicked*/
        n[10]
      ), s = !0);
    },
    p(v, [_]) {
      c && c.p(v, _), u && u.p(v, _), /*$detailBoxVisible*/
      v[1] ? m ? (m.p(v, _), _ & /*$detailBoxVisible*/
      2 && g(m, 1)) : (m = At(v), m.c(), g(m, 1), m.m(e, null)) : m && (x(), w(m, 1, 1, () => {
        m = null;
      }), K());
    },
    i(v) {
      i || (g(m), i = !0);
    },
    o(v) {
      w(m), i = !1;
    },
    d(v) {
      v && $(e), c && c.d(), u && u.d(), m && m.d(), s = !1, r();
    }
  };
}
function fs(n, e, l) {
  let t, { viewModel: i } = e;
  const s = i.nameL, r = i.nameR, o = i.legendColorL, a = i.legendColorR, c = i.legendLabelL, f = i.legendLabelR, d = i.bucketClass, u = i.detailBoxVisible;
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
    r,
    o,
    a,
    c,
    f,
    d,
    u,
    m
  ];
}
class ds extends ee {
  constructor(e) {
    super(), Y(this, e, fs, cs, X, { viewModel: 0 }, ns);
  }
}
function us(n) {
  ne(n, "svelte-1scaj70", ".graphs-row.svelte-1scaj70{display:flex;flex-direction:row;flex:1}.spacer-flex.svelte-1scaj70{flex:1}.spacer-fixed.svelte-1scaj70{flex:0 0 2rem}.content.svelte-1scaj70{display:flex;flex-direction:column;flex:1}.graphs-container.svelte-1scaj70{display:flex;flex-direction:row}.metadata-container.svelte-1scaj70{display:flex;flex-direction:column}.metadata-header.svelte-1scaj70{margin-top:0.6rem}.metadata-row.svelte-1scaj70{display:flex;flex-direction:row}.metadata-row.svelte-1scaj70:hover{background-color:rgba(255, 255, 255, 0.05)}.metadata-col.svelte-1scaj70{display:flex;width:38rem;align-items:baseline}.metadata-key.svelte-1scaj70{color:#aaa;font-size:0.8em;margin-left:1rem}");
}
function Ft(n, e, l) {
  const t = n.slice();
  return t[2] = e[l], t;
}
function Ht(n, e, l) {
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
  let e, l, t = (
    /*viewModel*/
    n[0].metadataRows
  ), i = [];
  for (let s = 0; s < t.length; s += 1)
    i[s] = Xt(Ht(n, t, s));
  return {
    c() {
      e = h("div"), e.textContent = "Metadata differences:";
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      l = H(), p(e, "class", "metadata-header svelte-1scaj70");
    },
    m(s, r) {
      y(s, e, r);
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(s, r);
      y(s, l, r);
    },
    p(s, r) {
      if (r & /*viewModel*/
      1) {
        t = /*viewModel*/
        s[0].metadataRows;
        let o;
        for (o = 0; o < t.length; o += 1) {
          const a = Ht(s, t, o);
          i[o] ? i[o].p(a, r) : (i[o] = Xt(a), i[o].c(), i[o].m(l.parentNode, l));
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
  let e, l, t, i = (
    /*row*/
    n[2].key + ""
  ), s, r, o, a = (
    /*row*/
    (n[2].valueL || "n/a") + ""
  ), c, f, d, u, m = (
    /*row*/
    n[2].key + ""
  ), v, _, k, R = (
    /*row*/
    (n[2].valueR || "n/a") + ""
  ), M;
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), s = I(i), r = h("span"), r.textContent = " ", o = h("div"), c = I(a), f = h("div"), d = h("div"), u = h("div"), v = I(m), _ = h("span"), _.textContent = " ", k = h("div"), M = I(R), p(t, "class", "metadata-key svelte-1scaj70"), p(o, "class", "metadata-value"), p(l, "class", "metadata-col svelte-1scaj70"), p(f, "class", "spacer-fixed svelte-1scaj70"), p(u, "class", "metadata-key svelte-1scaj70"), p(k, "class", "metadata-value"), p(d, "class", "metadata-col svelte-1scaj70"), p(e, "class", "metadata-row svelte-1scaj70");
    },
    m(C, S) {
      y(C, e, S), b(e, l), b(l, t), b(t, s), b(l, r), b(l, o), b(o, c), b(e, f), b(e, d), b(d, u), b(u, v), b(d, _), b(d, k), b(k, M);
    },
    p(C, S) {
      S & /*viewModel*/
      1 && i !== (i = /*row*/
      C[2].key + "") && W(s, i), S & /*viewModel*/
      1 && a !== (a = /*row*/
      (C[2].valueL || "n/a") + "") && W(c, a), S & /*viewModel*/
      1 && m !== (m = /*row*/
      C[2].key + "") && W(v, m), S & /*viewModel*/
      1 && R !== (R = /*row*/
      (C[2].valueR || "n/a") + "") && W(M, R);
    },
    d(C) {
      C && $(e);
    }
  };
}
function Zt(n) {
  let e, l, t, i = (
    /*viewModel*/
    n[0].datasetRows
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = Jt(Ft(n, i, o));
  const r = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), e.textContent = "Dataset differences:";
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      l = H(), p(e, "class", "metadata-header svelte-1scaj70");
    },
    m(o, a) {
      y(o, e, a);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(o, a);
      y(o, l, a), t = !0;
    },
    p(o, a) {
      if (a & /*viewModel*/
      1) {
        i = /*viewModel*/
        o[0].datasetRows;
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = Ft(o, i, c);
          s[c] ? (s[c].p(f, a), g(s[c], 1)) : (s[c] = Jt(f), s[c].c(), g(s[c], 1), s[c].m(l.parentNode, l));
        }
        for (x(), c = i.length; c < s.length; c += 1)
          r(c);
        K();
      }
    },
    i(o) {
      if (!t) {
        for (let a = 0; a < i.length; a += 1)
          g(s[a]);
        t = !0;
      }
    },
    o(o) {
      s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        w(s[a]);
      t = !1;
    },
    d(o) {
      o && $(e), O(s, o), o && $(l);
    }
  };
}
function Jt(n) {
  let e, l;
  return e = new ds({ props: { viewModel: (
    /*row*/
    n[2]
  ) } }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & /*viewModel*/
      1 && (s.viewModel = /*row*/
      t[2]), e.$set(s);
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
function ms(n) {
  let e, l, t, i, s, r, o, a, c, f = (
    /*viewModel*/
    n[0].graphId + ""
  ), d, u, m, v = (
    /*align*/
    n[1] === "center" && Ot()
  );
  i = new Ue({
    props: { viewModel: (
      /*viewModel*/
      n[0].graphL
    ) }
  }), r = new Ue({
    props: { viewModel: (
      /*viewModel*/
      n[0].graphR
    ) }
  });
  let _ = (
    /*viewModel*/
    n[0].metadataRows.length > 0 && Ut(n)
  ), k = (
    /*viewModel*/
    n[0].datasetRows.length > 0 && Zt(n)
  ), R = (
    /*align*/
    n[1] === "center" && Qt()
  );
  return {
    c() {
      e = h("div"), v && v.c(), l = h("div"), t = h("div"), q(i.$$.fragment), s = h("div"), q(r.$$.fragment), o = h("div"), a = h("div"), c = I("id "), d = I(f), _ && _.c(), u = H(), k && k.c(), R && R.c(), p(s, "class", "spacer-fixed svelte-1scaj70"), p(t, "class", "graphs-container svelte-1scaj70"), p(a, "class", "metadata-header svelte-1scaj70"), p(o, "class", "metadata-container svelte-1scaj70"), p(l, "class", "content svelte-1scaj70"), p(e, "class", "graphs-row svelte-1scaj70");
    },
    m(M, C) {
      y(M, e, C), v && v.m(e, null), b(e, l), b(l, t), z(i, t, null), b(t, s), z(r, t, null), b(l, o), b(o, a), b(a, c), b(a, d), _ && _.m(o, null), b(o, u), k && k.m(o, null), R && R.m(e, null), m = !0;
    },
    p(M, [C]) {
      /*align*/
      M[1] === "center" ? v || (v = Ot(), v.c(), v.m(e, l)) : v && (v.d(1), v = null);
      const S = {};
      C & /*viewModel*/
      1 && (S.viewModel = /*viewModel*/
      M[0].graphL), i.$set(S);
      const D = {};
      C & /*viewModel*/
      1 && (D.viewModel = /*viewModel*/
      M[0].graphR), r.$set(D), (!m || C & /*viewModel*/
      1) && f !== (f = /*viewModel*/
      M[0].graphId + "") && W(d, f), /*viewModel*/
      M[0].metadataRows.length > 0 ? _ ? _.p(M, C) : (_ = Ut(M), _.c(), _.m(o, u)) : _ && (_.d(1), _ = null), /*viewModel*/
      M[0].datasetRows.length > 0 ? k ? (k.p(M, C), C & /*viewModel*/
      1 && g(k, 1)) : (k = Zt(M), k.c(), g(k, 1), k.m(o, null)) : k && (x(), w(k, 1, 1, () => {
        k = null;
      }), K()), /*align*/
      M[1] === "center" ? R || (R = Qt(), R.c(), R.m(e, null)) : R && (R.d(1), R = null);
    },
    i(M) {
      m || (g(i.$$.fragment, M), g(r.$$.fragment, M), g(k), m = !0);
    },
    o(M) {
      w(i.$$.fragment, M), w(r.$$.fragment, M), w(k), m = !1;
    },
    d(M) {
      M && $(e), v && v.d(), j(i), j(r), _ && _.d(), k && k.d(), R && R.d();
    }
  };
}
function hs(n, e, l) {
  let { viewModel: t } = e, { align: i = "center" } = e;
  return n.$$set = (s) => {
    "viewModel" in s && l(0, t = s.viewModel), "align" in s && l(1, i = s.align);
  }, [t, i];
}
class ps extends ee {
  constructor(e) {
    super(), Y(this, e, hs, ms, X, { viewModel: 0, align: 1 }, us);
  }
}
function vs(n) {
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
  let e, l = (
    /*viewModel*/
    n[0].pretitle + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "pretitle svelte-f61lok");
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p(t, i) {
      i & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      t[0].pretitle + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function il(n) {
  let e, l = (
    /*viewModel*/
    n[0].subtitle + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "subtitle svelte-f61lok");
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p(t, i) {
      i & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      t[0].subtitle + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function sl(n) {
  let e, l = (
    /*viewModel*/
    n[0].annotations + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "annotations svelte-f61lok");
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p(t, i) {
      i & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      t[0].annotations + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function ol(n) {
  let e, l, t = (
    /*viewModel*/
    n[0].relatedListHeader + ""
  ), i, s, r = (
    /*viewModel*/
    n[0].relatedItems
  ), o = [];
  for (let a = 0; a < r.length; a += 1)
    o[a] = rl(ll(n, r, a));
  return {
    c() {
      e = h("div"), l = h("span"), i = I(t), s = h("ul");
      for (let a = 0; a < o.length; a += 1)
        o[a].c();
      p(s, "class", "svelte-f61lok"), p(e, "class", "related svelte-f61lok");
    },
    m(a, c) {
      y(a, e, c), b(e, l), b(l, i), b(e, s);
      for (let f = 0; f < o.length; f += 1)
        o[f] && o[f].m(s, null);
    },
    p(a, c) {
      if (c & /*viewModel*/
      1 && t !== (t = /*viewModel*/
      a[0].relatedListHeader + "") && W(i, t), c & /*viewModel*/
      1) {
        r = /*viewModel*/
        a[0].relatedItems;
        let f;
        for (f = 0; f < r.length; f += 1) {
          const d = ll(a, r, f);
          o[f] ? o[f].p(d, c) : (o[f] = rl(d), o[f].c(), o[f].m(s, null));
        }
        for (; f < o.length; f += 1)
          o[f].d(1);
        o.length = r.length;
      }
    },
    d(a) {
      a && $(e), O(o, a);
    }
  };
}
function rl(n) {
  let e, l = (
    /*relatedItem*/
    n[19] + ""
  );
  return {
    c() {
      e = h("li"), p(e, "class", "related-item");
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p(t, i) {
      i & /*viewModel*/
      1 && l !== (l = /*relatedItem*/
      t[19] + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function al(n) {
  let e, l, t = (
    /*viewModel*/
    n[0].graphSections
  ), i = [];
  for (let r = 0; r < t.length; r += 1)
    i[r] = dl(el(n, t, r));
  const s = (r) => w(i[r], 1, 1, () => {
    i[r] = null;
  });
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      e = h("div"), e.textContent = "All Datasets", p(e, "class", "section-title svelte-f61lok");
    },
    m(r, o) {
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(r, o);
      y(r, e, o), l = !0;
    },
    p(r, o) {
      if (o & /*viewModel*/
      1) {
        t = /*viewModel*/
        r[0].graphSections;
        let a;
        for (a = 0; a < t.length; a += 1) {
          const c = el(r, t, a);
          i[a] ? (i[a].p(c, o), g(i[a], 1)) : (i[a] = dl(c), i[a].c(), g(i[a], 1), i[a].m(e.parentNode, e));
        }
        for (x(), a = t.length; a < i.length; a += 1)
          s(a);
        K();
      }
    },
    i(r) {
      if (!l) {
        for (let o = 0; o < t.length; o += 1)
          g(i[o]);
        l = !0;
      }
    },
    o(r) {
      i = i.filter(Boolean);
      for (let o = 0; o < i.length; o += 1)
        w(i[o]);
      l = !1;
    },
    d(r) {
      O(i, r), r && $(e);
    }
  };
}
function cl(n) {
  let e, l;
  return e = new ps({
    props: {
      viewModel: (
        /*graphsRowViewModel*/
        n[16]
      ),
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
      i & /*viewModel*/
      1 && (s.viewModel = /*graphsRowViewModel*/
      t[16]), e.$set(s);
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
  let e, l = (
    /*graphsRowViewModel*/
    n[16]
  ), t, i = cl(n);
  return {
    c() {
      e = h("div"), i.c(), p(e, "class", "row-container svelte-f61lok");
    },
    m(s, r) {
      y(s, e, r), i.m(e, null), t = !0;
    },
    p(s, r) {
      r & /*viewModel*/
      1 && X(l, l = /*graphsRowViewModel*/
      s[16]) ? (x(), w(i, 1, 1, E), K(), i = cl(s), i.c(), g(i, 1), i.m(e, null)) : i.p(s, r);
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
  let e, l = (
    /*graphsSectionViewModel*/
    n[13].title + ""
  ), t, i, s, r = (
    /*graphsSectionViewModel*/
    n[13].rows
  ), o = [];
  for (let c = 0; c < r.length; c += 1)
    o[c] = fl(tl(n, r, c));
  const a = (c) => w(o[c], 1, 1, () => {
    o[c] = null;
  });
  return {
    c() {
      e = h("div"), t = I(l);
      for (let c = 0; c < o.length; c += 1)
        o[c].c();
      i = H(), p(e, "class", "section-title svelte-f61lok");
    },
    m(c, f) {
      y(c, e, f), b(e, t);
      for (let d = 0; d < o.length; d += 1)
        o[d] && o[d].m(c, f);
      y(c, i, f), s = !0;
    },
    p(c, f) {
      if ((!s || f & /*viewModel*/
      1) && l !== (l = /*graphsSectionViewModel*/
      c[13].title + "") && W(t, l), f & /*viewModel*/
      1) {
        r = /*graphsSectionViewModel*/
        c[13].rows;
        let d;
        for (d = 0; d < r.length; d += 1) {
          const u = tl(c, r, d);
          o[d] ? (o[d].p(u, f), g(o[d], 1)) : (o[d] = fl(u), o[d].c(), g(o[d], 1), o[d].m(i.parentNode, i));
        }
        for (x(), d = r.length; d < o.length; d += 1)
          a(d);
        K();
      }
    },
    i(c) {
      if (!s) {
        for (let f = 0; f < r.length; f += 1)
          g(o[f]);
        s = !0;
      }
    },
    o(c) {
      o = o.filter(Boolean);
      for (let f = 0; f < o.length; f += 1)
        w(o[f]);
      s = !1;
    },
    d(c) {
      c && $(e), O(o, c), c && $(i);
    }
  };
}
function ul(n) {
  let e, l, t;
  return l = new ls({
    props: {
      viewModel: (
        /*detailRowViewModel*/
        n[10]
      )
    }
  }), {
    c() {
      e = h("div"), q(l.$$.fragment), p(e, "class", "row-container svelte-f61lok");
    },
    m(i, s) {
      y(i, e, s), z(l, e, null), t = !0;
    },
    p(i, s) {
      const r = {};
      s & /*viewModel*/
      1 && (r.viewModel = /*detailRowViewModel*/
      i[10]), l.$set(r);
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
function _s(n) {
  let e, l, t, i, s, r, o = (
    /*viewModel*/
    n[0].title + ""
  ), a, c, f, d, u, m, v, _, k, R, M, C = (
    /*viewModel*/
    n[0].pretitle && nl(n)
  ), S = (
    /*viewModel*/
    n[0].subtitle && il(n)
  ), D = (
    /*viewModel*/
    n[0].annotations && sl(n)
  ), N = (
    /*relatedItemsVisible*/
    n[2] && /*viewModel*/
    n[0].relatedItems.length > 0 && ol(n)
  ), V = (
    /*viewModel*/
    n[0].graphSections.length > 0 && al(n)
  ), P = (
    /*viewModel*/
    n[0].detailRows
  ), T = [];
  for (let L = 0; L < P.length; L += 1)
    T[L] = ul(Yt(n, P, L));
  const A = (L) => w(T[L], 1, 1, () => {
    T[L] = null;
  });
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), i = h("div"), C && C.c(), s = h("div"), r = h("div"), S && S.c(), a = H(), D && D.c(), c = h("div"), f = h("div"), d = h("div"), d.textContent = "previous", u = h("div"), u.textContent = " | ", m = h("div"), m.textContent = "next", N && N.c(), v = h("div"), V && V.c(), _ = H();
      for (let L = 0; L < T.length; L += 1)
        T[L].c();
      p(r, "class", "title svelte-f61lok"), p(s, "class", "title-and-subtitle svelte-f61lok"), p(i, "class", "title-container svelte-f61lok"), p(c, "class", "spacer-flex svelte-f61lok"), p(d, "class", "nav-link svelte-f61lok"), he(
        d,
        "disabled",
        /*viewModel*/
        n[0].previousRowIndex === void 0
      ), p(u, "class", "nav-link-sep svelte-f61lok"), p(m, "class", "nav-link svelte-f61lok"), he(
        m,
        "disabled",
        /*viewModel*/
        n[0].nextRowIndex === void 0
      ), p(f, "class", "nav-links no-selection svelte-f61lok"), p(t, "class", "title-and-links svelte-f61lok"), p(l, "class", "header-container svelte-f61lok"), p(v, "class", "scroll-container svelte-f61lok"), p(v, "tabindex", "0"), p(e, "class", "compare-detail-container svelte-f61lok");
    },
    m(L, G) {
      y(L, e, G), b(e, l), b(l, t), b(t, i), C && C.m(i, null), b(i, s), b(s, r), r.innerHTML = o, S && S.m(s, null), b(s, a), D && D.m(s, null), b(t, c), b(t, f), b(f, d), b(f, u), b(f, m), N && N.m(l, null), b(e, v), V && V.m(v, null), b(v, _);
      for (let B = 0; B < T.length; B += 1)
        T[B] && T[B].m(v, null);
      n[8](v), k = !0, R || (M = [
        re(
          window,
          "keydown",
          /*onKeyDown*/
          n[4]
        ),
        re(
          r,
          "click",
          /*toggleRelatedItems*/
          n[5]
        ),
        re(
          d,
          "click",
          /*click_handler*/
          n[6]
        ),
        re(
          m,
          "click",
          /*click_handler_1*/
          n[7]
        )
      ], R = !0);
    },
    p(L, [G]) {
      if (/*viewModel*/
      L[0].pretitle ? C ? C.p(L, G) : (C = nl(L), C.c(), C.m(i, s)) : C && (C.d(1), C = null), (!k || G & /*viewModel*/
      1) && o !== (o = /*viewModel*/
      L[0].title + "") && (r.innerHTML = o), /*viewModel*/
      L[0].subtitle ? S ? S.p(L, G) : (S = il(L), S.c(), S.m(s, a)) : S && (S.d(1), S = null), /*viewModel*/
      L[0].annotations ? D ? D.p(L, G) : (D = sl(L), D.c(), D.m(s, null)) : D && (D.d(1), D = null), (!k || G & /*viewModel, undefined*/
      1) && he(
        d,
        "disabled",
        /*viewModel*/
        L[0].previousRowIndex === void 0
      ), (!k || G & /*viewModel, undefined*/
      1) && he(
        m,
        "disabled",
        /*viewModel*/
        L[0].nextRowIndex === void 0
      ), /*relatedItemsVisible*/
      L[2] && /*viewModel*/
      L[0].relatedItems.length > 0 ? N ? N.p(L, G) : (N = ol(L), N.c(), N.m(l, null)) : N && (N.d(1), N = null), /*viewModel*/
      L[0].graphSections.length > 0 ? V ? (V.p(L, G), G & /*viewModel*/
      1 && g(V, 1)) : (V = al(L), V.c(), g(V, 1), V.m(v, _)) : V && (x(), w(V, 1, 1, () => {
        V = null;
      }), K()), G & /*viewModel*/
      1) {
        P = /*viewModel*/
        L[0].detailRows;
        let B;
        for (B = 0; B < P.length; B += 1) {
          const Z = Yt(L, P, B);
          T[B] ? (T[B].p(Z, G), g(T[B], 1)) : (T[B] = ul(Z), T[B].c(), g(T[B], 1), T[B].m(v, null));
        }
        for (x(), B = P.length; B < T.length; B += 1)
          A(B);
        K();
      }
    },
    i(L) {
      if (!k) {
        g(V);
        for (let G = 0; G < P.length; G += 1)
          g(T[G]);
        k = !0;
      }
    },
    o(L) {
      w(V), T = T.filter(Boolean);
      for (let G = 0; G < T.length; G += 1)
        w(T[G]);
      k = !1;
    },
    d(L) {
      L && $(e), C && C.d(), S && S.d(), D && D.d(), N && N.d(), V && V.d(), O(T, L), n[8](null), R = !1, $e(M);
    }
  };
}
function gs(n, e, l) {
  let { viewModel: t } = e, i, s = !1;
  const r = Ne();
  function o(m) {
    switch (m) {
      case "detail-previous":
        t.previousRowIndex !== void 0 && r("command", {
          cmd: "show-comparison-detail-at-index",
          kind: t.kind,
          index: t.previousRowIndex
        });
        break;
      case "detail-next":
        t.nextRowIndex !== void 0 && r("command", {
          cmd: "show-comparison-detail-at-index",
          kind: t.kind,
          index: t.nextRowIndex
        });
        break;
      default:
        r("command", { cmd: m });
        break;
    }
  }
  function a(m) {
    m.key === "ArrowLeft" ? (o("detail-previous"), m.preventDefault()) : m.key === "ArrowRight" ? (o("detail-next"), m.preventDefault()) : m.key === "ArrowUp" && i.scrollTop === 0 && (o("show-summary"), m.preventDefault());
  }
  function c() {
    l(2, s = !s);
  }
  Xe(() => {
    i.focus();
  });
  const f = () => o("detail-previous"), d = () => o("detail-next");
  function u(m) {
    be[m ? "unshift" : "push"](() => {
      i = m, l(1, i), l(0, t);
    });
  }
  return n.$$set = (m) => {
    "viewModel" in m && l(0, t = m.viewModel);
  }, n.$$.update = () => {
    n.$$.dirty & /*viewModel, scrollContainer*/
    3 && t && (i && l(1, i.scrollTop = 0, i), l(2, s = !1));
  }, [
    t,
    i,
    s,
    o,
    a,
    c,
    f,
    d,
    u
  ];
}
class bs extends ee {
  constructor(e) {
    super(), Y(this, e, gs, _s, X, { viewModel: 0 }, vs);
  }
}
function ws(n) {
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
function ks(n) {
  let e, l, t, i, s;
  return {
    c() {
      e = h("div"), l = h("input"), t = h("label"), t.textContent = "Simplify Scenarios", p(l, "class", "checkbox"), p(l, "type", "checkbox"), p(l, "name", "simplify-toggle"), p(t, "for", "simplify-toggle"), p(e, "class", "header-group svelte-eztohb");
    },
    m(r, o) {
      y(r, e, o), b(e, l), l.checked = /*$simplifyScenarios*/
      n[1], b(e, t), i || (s = re(
        l,
        "change",
        /*input_change_handler*/
        n[10]
      ), i = !0);
    },
    p(r, o) {
      o & /*$simplifyScenarios*/
      2 && (l.checked = /*$simplifyScenarios*/
      r[1]);
    },
    d(r) {
      r && $(e), i = !1, s();
    }
  };
}
function pl(n) {
  let e, l, t, i, s, r, o, a, c = (
    /*thresholds*/
    n[5][0] + ""
  ), f, d = (
    /*thresholds*/
    n[5][1] + ""
  ), u, m = (
    /*thresholds*/
    n[5][2] + ""
  ), v, _ = (
    /*thresholds*/
    n[5][3] + ""
  ), k, R = (
    /*thresholds*/
    n[5][4] + ""
  );
  function M(P, T) {
    return (
      /*$bundleNamesL*/
      P[2].length > 1 ? ys : $s
    );
  }
  let C = M(n), S = C(n);
  function D(P, T) {
    return (
      /*$bundleNamesR*/
      P[3].length > 1 ? Rs : Ms
    );
  }
  let N = D(n), V = N(n);
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), t.textContent = "Comparing:", S.c(), i = H(), V.c(), s = h("div"), r = h("div"), o = h("div"), o.textContent = "Thresholds:", a = h("div"), f = h("div"), u = h("div"), v = h("div"), k = h("div"), p(e, "class", "spacer-fixed svelte-eztohb"), p(t, "class", "label svelte-eztohb"), p(l, "class", "header-group svelte-eztohb"), p(s, "class", "spacer-fixed svelte-eztohb"), p(o, "class", "label svelte-eztohb"), p(a, "class", "label bucket-color-0 svelte-eztohb"), p(f, "class", "label bucket-color-1 svelte-eztohb"), p(u, "class", "label bucket-color-2 svelte-eztohb"), p(v, "class", "label bucket-color-3 svelte-eztohb"), p(k, "class", "label bucket-color-4 svelte-eztohb"), p(r, "class", "header-group svelte-eztohb");
    },
    m(P, T) {
      y(P, e, T), y(P, l, T), b(l, t), S.m(l, null), b(l, i), V.m(l, null), y(P, s, T), y(P, r, T), b(r, o), b(r, a), a.innerHTML = c, b(r, f), f.innerHTML = d, b(r, u), u.innerHTML = m, b(r, v), v.innerHTML = _, b(r, k), k.innerHTML = R;
    },
    p(P, T) {
      C === (C = M(P)) && S ? S.p(P, T) : (S.d(1), S = C(P), S && (S.c(), S.m(l, i))), N === (N = D(P)) && V ? V.p(P, T) : (V.d(1), V = N(P), V && (V.c(), V.m(l, null)));
    },
    d(P) {
      P && $(e), P && $(l), S.d(), V.d(), P && $(s), P && $(r);
    }
  };
}
function $s(n) {
  let e, l = (
    /*viewModel*/
    n[0].nameL + ""
  ), t;
  return {
    c() {
      e = h("div"), t = I(l), p(e, "class", "label dataset-color-0 svelte-eztohb");
    },
    m(i, s) {
      y(i, e, s), b(e, t);
    },
    p(i, s) {
      s & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      i[0].nameL + "") && W(t, l);
    },
    d(i) {
      i && $(e);
    }
  };
}
function ys(n) {
  let e, l, t, i = (
    /*$bundleNamesL*/
    n[2]
  ), s = [];
  for (let r = 0; r < i.length; r += 1)
    s[r] = vl(hl(n, i, r));
  return {
    c() {
      e = h("select");
      for (let r = 0; r < s.length; r += 1)
        s[r].c();
      p(e, "class", "selector dataset-color-0 svelte-eztohb");
    },
    m(r, o) {
      y(r, e, o);
      for (let a = 0; a < s.length; a += 1)
        s[a] && s[a].m(e, null);
      l || (t = re(e, "change", Ss), l = !0);
    },
    p(r, o) {
      if (o & /*$bundleNamesL, viewModel*/
      5) {
        i = /*$bundleNamesL*/
        r[2];
        let a;
        for (a = 0; a < i.length; a += 1) {
          const c = hl(r, i, a);
          s[a] ? s[a].p(c, o) : (s[a] = vl(c), s[a].c(), s[a].m(e, null));
        }
        for (; a < s.length; a += 1)
          s[a].d(1);
        s.length = i.length;
      }
    },
    d(r) {
      r && $(e), O(s, r), l = !1, t();
    }
  };
}
function vl(n) {
  let e, l = (
    /*name*/
    n[12] + ""
  ), t, i, s;
  return {
    c() {
      e = h("option"), t = I(l), e.selected = i = /*name*/
      n[12] === /*viewModel*/
      n[0].nameL, e.__value = s = /*name*/
      n[12], e.value = e.__value;
    },
    m(r, o) {
      y(r, e, o), b(e, t);
    },
    p(r, o) {
      o & /*$bundleNamesL*/
      4 && l !== (l = /*name*/
      r[12] + "") && W(t, l), o & /*$bundleNamesL, viewModel*/
      5 && i !== (i = /*name*/
      r[12] === /*viewModel*/
      r[0].nameL) && (e.selected = i), o & /*$bundleNamesL*/
      4 && s !== (s = /*name*/
      r[12]) && (e.__value = s, e.value = e.__value);
    },
    d(r) {
      r && $(e);
    }
  };
}
function Ms(n) {
  let e, l = (
    /*viewModel*/
    n[0].nameR + ""
  ), t;
  return {
    c() {
      e = h("div"), t = I(l), p(e, "class", "label dataset-color-1 svelte-eztohb");
    },
    m(i, s) {
      y(i, e, s), b(e, t);
    },
    p(i, s) {
      s & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      i[0].nameR + "") && W(t, l);
    },
    d(i) {
      i && $(e);
    }
  };
}
function Rs(n) {
  let e, l, t, i = (
    /*$bundleNamesR*/
    n[3]
  ), s = [];
  for (let r = 0; r < i.length; r += 1)
    s[r] = _l(ml(n, i, r));
  return {
    c() {
      e = h("select");
      for (let r = 0; r < s.length; r += 1)
        s[r].c();
      p(e, "class", "selector dataset-color-1 svelte-eztohb");
    },
    m(r, o) {
      y(r, e, o);
      for (let a = 0; a < s.length; a += 1)
        s[a] && s[a].m(e, null);
      l || (t = re(e, "change", Ds), l = !0);
    },
    p(r, o) {
      if (o & /*$bundleNamesR, viewModel*/
      9) {
        i = /*$bundleNamesR*/
        r[3];
        let a;
        for (a = 0; a < i.length; a += 1) {
          const c = ml(r, i, a);
          s[a] ? s[a].p(c, o) : (s[a] = _l(c), s[a].c(), s[a].m(e, null));
        }
        for (; a < s.length; a += 1)
          s[a].d(1);
        s.length = i.length;
      }
    },
    d(r) {
      r && $(e), O(s, r), l = !1, t();
    }
  };
}
function _l(n) {
  let e, l = (
    /*name*/
    n[12] + ""
  ), t, i, s;
  return {
    c() {
      e = h("option"), t = I(l), e.selected = i = /*name*/
      n[12] === /*viewModel*/
      n[0].nameR, e.__value = s = /*name*/
      n[12], e.value = e.__value;
    },
    m(r, o) {
      y(r, e, o), b(e, t);
    },
    p(r, o) {
      o & /*$bundleNamesR*/
      8 && l !== (l = /*name*/
      r[12] + "") && W(t, l), o & /*$bundleNamesR, viewModel*/
      9 && i !== (i = /*name*/
      r[12] === /*viewModel*/
      r[0].nameR) && (e.selected = i), o & /*$bundleNamesR*/
      8 && s !== (s = /*name*/
      r[12]) && (e.__value = s, e.value = e.__value);
    },
    d(r) {
      r && $(e);
    }
  };
}
function Cs(n) {
  let e, l, t, i, s, r, o, a, c, f = (
    /*simplifyScenarios*/
    n[4] !== void 0 && ks(n)
  ), d = (
    /*viewModel*/
    (n[0].nameL || /*$bundleNamesL*/
    n[2].length > 1) && pl(n)
  );
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), i = h("div"), i.textContent = "Home", s = h("div"), f && f.c(), r = H(), d && d.c(), o = h("div"), p(i, "class", "label home no-selection svelte-eztohb"), p(t, "class", "header-group svelte-eztohb"), p(s, "class", "spacer-flex svelte-eztohb"), p(l, "class", "header-content svelte-eztohb"), p(o, "class", "line svelte-eztohb"), p(e, "class", "header-container svelte-eztohb");
    },
    m(u, m) {
      y(u, e, m), b(e, l), b(l, t), b(t, i), b(l, s), f && f.m(l, null), b(l, r), d && d.m(l, null), b(e, o), a || (c = re(
        i,
        "click",
        /*onHome*/
        n[8]
      ), a = !0);
    },
    p(u, [m]) {
      /*simplifyScenarios*/
      u[4] !== void 0 && f.p(u, m), /*viewModel*/
      u[0].nameL || /*$bundleNamesL*/
      u[2].length > 1 ? d ? d.p(u, m) : (d = pl(u), d.c(), d.m(l, null)) : d && (d.d(1), d = null);
    },
    i: E,
    o: E,
    d(u) {
      u && $(e), f && f.d(), d && d.d(), a = !1, c();
    }
  };
}
function In(n, e) {
  const l = new CustomEvent("sde-check-bundle", { detail: { kind: n, name: e } });
  document.dispatchEvent(l);
}
function Ss(n) {
  In("left", n.target.value);
}
function Ds(n) {
  In("right", n.target.value);
}
function Ls(n, e, l) {
  let t, i, s, { viewModel: r } = e;
  const o = r.simplifyScenarios;
  ge(n, o, (_) => l(1, t = _));
  const a = r.thresholds, c = r.bundleNamesL;
  ge(n, c, (_) => l(2, i = _));
  const f = r.bundleNamesR;
  ge(n, f, (_) => l(3, s = _));
  const d = Ne();
  function u() {
    d("command", { cmd: "show-summary" });
  }
  let m = !0;
  function v() {
    t = this.checked, o.set(t);
  }
  return n.$$set = (_) => {
    "viewModel" in _ && l(0, r = _.viewModel);
  }, n.$$.update = () => {
    n.$$.dirty & /*$simplifyScenarios, firstSimplify*/
    514 && t !== void 0 && (m ? l(9, m = !1) : document.dispatchEvent(new CustomEvent("sde-check-simplify-scenarios-toggled")));
  }, [
    r,
    t,
    i,
    s,
    o,
    a,
    c,
    f,
    u,
    m,
    v
  ];
}
class Ts extends ee {
  constructor(e) {
    super(), Y(this, e, Ls, Cs, X, { viewModel: 0 }, ws);
  }
}
function Vs(n) {
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
      e = h("div"), p(e, "class", l = "dot " + /*colorClass*/
      n[1] + " svelte-1j1xz6h"), se(
        e,
        "left",
        /*point*/
        n[2] + "%"
      );
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*colorClass*/
      2 && l !== (l = "dot " + /*colorClass*/
      t[1] + " svelte-1j1xz6h") && p(e, "class", l), i & /*viewModel*/
      1 && se(
        e,
        "left",
        /*point*/
        t[2] + "%"
      );
    },
    d(t) {
      t && $(e);
    }
  };
}
function Is(n) {
  let e, l, t, i, s, r, o = (
    /*viewModel*/
    n[0].points
  ), a = [];
  for (let c = 0; c < o.length; c += 1)
    a[c] = bl(gl(n, o, c));
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), i = h("div");
      for (let c = 0; c < a.length; c += 1)
        a[c].c();
      s = h("div"), p(l, "class", "hline svelte-1j1xz6h"), p(t, "class", "vline end-line svelte-1j1xz6h"), se(t, "left", "0"), p(i, "class", "vline end-line svelte-1j1xz6h"), se(i, "left", "100%"), p(s, "class", r = "vline avg-line " + /*colorClass*/
      n[1] + " svelte-1j1xz6h"), se(
        s,
        "left",
        /*viewModel*/
        n[0].avgPoint + "%"
      ), p(e, "class", "dot-plot-container svelte-1j1xz6h");
    },
    m(c, f) {
      y(c, e, f), b(e, l), b(e, t), b(e, i);
      for (let d = 0; d < a.length; d += 1)
        a[d] && a[d].m(e, null);
      b(e, s);
    },
    p(c, [f]) {
      if (f & /*colorClass, viewModel*/
      3) {
        o = /*viewModel*/
        c[0].points;
        let d;
        for (d = 0; d < o.length; d += 1) {
          const u = gl(c, o, d);
          a[d] ? a[d].p(u, f) : (a[d] = bl(u), a[d].c(), a[d].m(e, s));
        }
        for (; d < a.length; d += 1)
          a[d].d(1);
        a.length = o.length;
      }
      f & /*colorClass*/
      2 && r !== (r = "vline avg-line " + /*colorClass*/
      c[1] + " svelte-1j1xz6h") && p(s, "class", r), f & /*viewModel*/
      1 && se(
        s,
        "left",
        /*viewModel*/
        c[0].avgPoint + "%"
      );
    },
    i: E,
    o: E,
    d(c) {
      c && $(e), O(a, c);
    }
  };
}
function zs(n, e, l) {
  let { viewModel: t } = e, { colorClass: i } = e;
  return n.$$set = (s) => {
    "viewModel" in s && l(0, t = s.viewModel), "colorClass" in s && l(1, i = s.colorClass);
  }, [t, i];
}
class rt extends ee {
  constructor(e) {
    super(), Y(this, e, zs, Is, X, { viewModel: 0, colorClass: 1 }, Vs);
  }
}
function js(n) {
  ne(n, "svelte-15dp53", ".perf-container.svelte-15dp53{display:flex;flex-direction:column;padding:0 1rem}.controls-container.svelte-15dp53{display:flex;flex-direction:column;align-items:flex-start;height:3rem}.table-container.svelte-15dp53{display:flex;flex:1}table.svelte-15dp53{border-collapse:collapse}td.svelte-15dp53,th.svelte-15dp53{padding-top:0.2rem;padding-bottom:0.2rem}th.svelte-15dp53{color:#aaa;text-align:right;font-weight:500}td.svelte-15dp53{width:4.5rem;text-align:right;font-family:monospace}td.rownum.svelte-15dp53{width:2rem}td.dim.svelte-15dp53{color:#777}td.plot.svelte-15dp53{width:30rem;padding-left:2rem;padding-right:2rem}");
}
function wl(n, e, l) {
  const t = n.slice();
  return t[5] = e[l], t;
}
function Ps(n) {
  let e;
  return {
    c() {
      e = h("div"), e.textContent = "Running performance tests, please wait…";
    },
    m(l, t) {
      y(l, e, t);
    },
    p: E,
    d(l) {
      l && $(e);
    }
  };
}
function qs(n) {
  let e, l, t, i;
  return {
    c() {
      e = h("button"), l = I("Run"), p(e, "class", "run"), e.disabled = /*running*/
      n[0];
    },
    m(s, r) {
      y(s, e, r), b(e, l), t || (i = re(
        e,
        "click",
        /*onRun*/
        n[3]
      ), t = !0);
    },
    p(s, r) {
      r & /*running*/
      1 && (e.disabled = /*running*/
      s[0]);
    },
    d(s) {
      s && $(e), t = !1, i();
    }
  };
}
function kl(n) {
  let e, l, t, i = (
    /*$rows*/
    n[1]
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = $l(wl(n, i, o));
  const r = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("table"), l = h("tr"), l.innerHTML = '<th class="svelte-15dp53">run</th><th class="svelte-15dp53">min</th><th class="svelte-15dp53">avg</th><th class="svelte-15dp53">max</th>';
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "svelte-15dp53");
    },
    m(o, a) {
      y(o, e, a), b(e, l);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(e, null);
      t = !0;
    },
    p(o, a) {
      if (a & /*$rows*/
      2) {
        i = /*$rows*/
        o[1];
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = wl(o, i, c);
          s[c] ? (s[c].p(f, a), g(s[c], 1)) : (s[c] = $l(f), s[c].c(), g(s[c], 1), s[c].m(e, null));
        }
        for (x(), c = i.length; c < s.length; c += 1)
          r(c);
        K();
      }
    },
    i(o) {
      if (!t) {
        for (let a = 0; a < i.length; a += 1)
          g(s[a]);
        t = !0;
      }
    },
    o(o) {
      s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        w(s[a]);
      t = !1;
    },
    d(o) {
      o && $(e), O(s, o);
    }
  };
}
function $l(n) {
  let e, l, t = (
    /*row*/
    n[5].num + ""
  ), i, s, r = (
    /*row*/
    n[5].minTimeL + ""
  ), o, a, c = (
    /*row*/
    n[5].avgTimeL + ""
  ), f, d, u = (
    /*row*/
    n[5].maxTimeL + ""
  ), m, v, _, k, R, M = (
    /*row*/
    n[5].minTimeR + ""
  ), C, S, D = (
    /*row*/
    n[5].avgTimeR + ""
  ), N, V, P = (
    /*row*/
    n[5].maxTimeR + ""
  ), T, A, L, G;
  return _ = new rt({
    props: {
      viewModel: (
        /*row*/
        n[5].dotPlotL
      ),
      colorClass: "dataset-bg-0"
    }
  }), L = new rt({
    props: {
      viewModel: (
        /*row*/
        n[5].dotPlotR
      ),
      colorClass: "dataset-bg-1"
    }
  }), {
    c() {
      e = h("tr"), l = h("td"), i = I(t), s = h("td"), o = I(r), a = h("td"), f = I(c), d = h("td"), m = I(u), v = h("td"), q(_.$$.fragment), k = h("tr"), R = h("td"), C = I(M), S = h("td"), N = I(D), V = h("td"), T = I(P), A = h("td"), q(L.$$.fragment), p(l, "class", "rownum svelte-15dp53"), p(l, "rowspan", "2"), p(s, "class", "dim svelte-15dp53"), p(a, "class", "value dataset-color-0 svelte-15dp53"), p(d, "class", "dim svelte-15dp53"), p(v, "class", "plot svelte-15dp53"), p(R, "class", "dim svelte-15dp53"), p(S, "class", "value dataset-color-1 svelte-15dp53"), p(V, "class", "dim svelte-15dp53"), p(A, "class", "plot svelte-15dp53");
    },
    m(B, Z) {
      y(B, e, Z), b(e, l), b(l, i), b(e, s), b(s, o), b(e, a), b(a, f), b(e, d), b(d, m), b(e, v), z(_, v, null), y(B, k, Z), b(k, R), b(R, C), b(k, S), b(S, N), b(k, V), b(V, T), b(k, A), z(L, A, null), G = !0;
    },
    p(B, Z) {
      (!G || Z & /*$rows*/
      2) && t !== (t = /*row*/
      B[5].num + "") && W(i, t), (!G || Z & /*$rows*/
      2) && r !== (r = /*row*/
      B[5].minTimeL + "") && W(o, r), (!G || Z & /*$rows*/
      2) && c !== (c = /*row*/
      B[5].avgTimeL + "") && W(f, c), (!G || Z & /*$rows*/
      2) && u !== (u = /*row*/
      B[5].maxTimeL + "") && W(m, u);
      const ie = {};
      Z & /*$rows*/
      2 && (ie.viewModel = /*row*/
      B[5].dotPlotL), _.$set(ie), (!G || Z & /*$rows*/
      2) && M !== (M = /*row*/
      B[5].minTimeR + "") && W(C, M), (!G || Z & /*$rows*/
      2) && D !== (D = /*row*/
      B[5].avgTimeR + "") && W(N, D), (!G || Z & /*$rows*/
      2) && P !== (P = /*row*/
      B[5].maxTimeR + "") && W(T, P);
      const pe = {};
      Z & /*$rows*/
      2 && (pe.viewModel = /*row*/
      B[5].dotPlotR), L.$set(pe);
    },
    i(B) {
      G || (g(_.$$.fragment, B), g(L.$$.fragment, B), G = !0);
    },
    o(B) {
      w(_.$$.fragment, B), w(L.$$.fragment, B), G = !1;
    },
    d(B) {
      B && $(e), j(_), B && $(k), j(L);
    }
  };
}
function Ns(n) {
  let e, l, t, i;
  function s(c, f) {
    return (
      /*running*/
      c[0] ? Ps : qs
    );
  }
  let r = s(n), o = r(n), a = (
    /*$rows*/
    n[1].length > 0 && kl(n)
  );
  return {
    c() {
      e = h("div"), l = h("div"), o.c(), t = h("div"), a && a.c(), p(l, "class", "controls-container svelte-15dp53"), p(t, "class", "table-container svelte-15dp53"), p(e, "class", "perf-container svelte-15dp53");
    },
    m(c, f) {
      y(c, e, f), b(e, l), o.m(l, null), b(e, t), a && a.m(t, null), i = !0;
    },
    p(c, [f]) {
      r === (r = s(c)) && o ? o.p(c, f) : (o.d(1), o = r(c), o && (o.c(), o.m(l, null))), /*$rows*/
      c[1].length > 0 ? a ? (a.p(c, f), f & /*$rows*/
      2 && g(a, 1)) : (a = kl(c), a.c(), g(a, 1), a.m(t, null)) : a && (x(), w(a, 1, 1, () => {
        a = null;
      }), K());
    },
    i(c) {
      i || (g(a), i = !0);
    },
    o(c) {
      w(a), i = !1;
    },
    d(c) {
      c && $(e), o.d(), a && a.d();
    }
  };
}
function Bs(n, e, l) {
  let t, { viewModel: i } = e;
  const s = i.rows;
  ge(n, s, (a) => l(1, t = a));
  let r = !1;
  function o() {
    l(0, r = !0);
    const a = new En(i.bundleModelL, i.bundleModelR);
    a.onComplete = (c, f) => {
      i.addRow(c, f), l(0, r = !1);
    }, a.onError = (c) => {
      console.error(c), l(0, r = !1);
    }, a.start();
  }
  return n.$$set = (a) => {
    "viewModel" in a && l(4, i = a.viewModel);
  }, [r, t, s, o, i];
}
class xs extends ee {
  constructor(e) {
    super(), Y(this, e, Bs, Ns, X, { viewModel: 4 }, js);
  }
}
function Ks(n) {
  ne(n, "svelte-1xosw0f", ".graph-container.svelte-1xosw0f{position:relative;display:flex;width:36rem;height:22rem;margin-left:1rem;margin-top:0.5rem;margin-bottom:1rem}");
}
function yl(n) {
  let e, l, t;
  return l = new Vn({
    props: {
      viewModel: (
        /*$content*/
        n[2].comparisonGraphViewModel
      ),
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
      const r = {};
      s & /*$content*/
      4 && (r.viewModel = /*$content*/
      i[2].comparisonGraphViewModel), l.$set(r);
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
function Es(n) {
  let e, l, t = (
    /*$content*/
    n[2] && yl(n)
  );
  return {
    c() {
      t && t.c(), e = H();
    },
    m(i, s) {
      t && t.m(i, s), y(i, e, s), l = !0;
    },
    p(i, s) {
      /*$content*/
      i[2] ? t ? (t.p(i, s), s & /*$content*/
      4 && g(t, 1)) : (t = yl(i), t.c(), g(t, 1), t.m(e.parentNode, e)) : t && (x(), w(t, 1, 1, () => {
        t = null;
      }), K());
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
function Ws(n) {
  let e, l, t;
  function i(r) {
    n[6](r);
  }
  let s = {
    $$slots: { default: [Es] },
    $$scope: { ctx: n }
  };
  return (
    /*visible*/
    n[0] !== void 0 && (s.visible = /*visible*/
    n[0]), e = new ht({ props: s }), be.push(() => mt(e, "visible", i)), {
      c() {
        q(e.$$.fragment);
      },
      m(r, o) {
        z(e, r, o), t = !0;
      },
      p(r, [o]) {
        const a = {};
        o & /*$$scope, $content*/
        132 && (a.$$scope = { dirty: o, ctx: r }), !l && o & /*visible*/
        1 && (l = !0, a.visible = /*visible*/
        r[0], dt(() => l = !1)), e.$set(a);
      },
      i(r) {
        t || (g(e.$$.fragment, r), t = !0);
      },
      o(r) {
        w(e.$$.fragment, r), t = !1;
      },
      d(r) {
        j(e, r);
      }
    }
  );
}
function Gs(n, e, l) {
  let t, i = E, s = () => (i(), i = qe(o, (u) => l(2, t = u)), o);
  n.$$.on_destroy.push(() => i());
  let { viewModel: r } = e, o = r.content;
  s();
  let a = !1, c = a, f;
  function d(u) {
    a = u, l(0, a);
  }
  return n.$$set = (u) => {
    "viewModel" in u && l(3, r = u.viewModel);
  }, n.$$.update = () => {
    n.$$.dirty & /*visible, previousVisible, viewModel, previousViewModel*/
    57 && (a !== c || r.baseRequestKey !== (f == null ? void 0 : f.baseRequestKey)) && (f == null || f.clearData(), l(4, c = a), l(5, f = r), s(l(1, o = r.content)), a && r.requestData());
  }, [
    a,
    o,
    t,
    r,
    c,
    f,
    d
  ];
}
class As extends ee {
  constructor(e) {
    super(), Y(this, e, Gs, Ws, X, { viewModel: 3 }, Ks);
  }
}
function Fs(n) {
  ne(n, "svelte-1l9dja1", ".check-graph.svelte-1l9dja1{height:23rem;margin-left:8.5rem}");
}
function Ml(n) {
  let e, l, t, i;
  return l = new As({
    props: {
      viewModel: (
        /*viewModel*/
        n[0].graphBoxViewModel
      )
    }
  }), {
    c() {
      e = h("div"), q(l.$$.fragment), p(e, "class", t = "row check-graph " + /*viewModel*/
      n[0].rowClasses + " svelte-1l9dja1");
    },
    m(s, r) {
      y(s, e, r), z(l, e, null), i = !0;
    },
    p(s, r) {
      const o = {};
      r & /*viewModel*/
      1 && (o.viewModel = /*viewModel*/
      s[0].graphBoxViewModel), l.$set(o), (!i || r & /*viewModel*/
      1 && t !== (t = "row check-graph " + /*viewModel*/
      s[0].rowClasses + " svelte-1l9dja1")) && p(e, "class", t);
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
function Hs(n) {
  let e, l, t = (
    /*viewModel*/
    n[0].span + ""
  ), i, s, r, o, a, c = (
    /*viewModel*/
    n[0].graphBoxViewModel && /*$graphVisible*/
    n[1] && Ml(n)
  );
  return {
    c() {
      e = h("div"), l = h("span"), c && c.c(), s = H(), p(l, "class", "label"), p(e, "class", i = "row " + /*viewModel*/
      n[0].rowClasses + " svelte-1l9dja1");
    },
    m(f, d) {
      y(f, e, d), b(e, l), l.innerHTML = t, c && c.m(f, d), y(f, s, d), r = !0, o || (a = re(
        l,
        "click",
        /*onLabelClicked*/
        n[3]
      ), o = !0);
    },
    p(f, [d]) {
      (!r || d & /*viewModel*/
      1) && t !== (t = /*viewModel*/
      f[0].span + "") && (l.innerHTML = t), (!r || d & /*viewModel*/
      1 && i !== (i = "row " + /*viewModel*/
      f[0].rowClasses + " svelte-1l9dja1")) && p(e, "class", i), /*viewModel*/
      f[0].graphBoxViewModel && /*$graphVisible*/
      f[1] ? c ? (c.p(f, d), d & /*viewModel, $graphVisible*/
      3 && g(c, 1)) : (c = Ml(f), c.c(), g(c, 1), c.m(s.parentNode, s)) : c && (x(), w(c, 1, 1, () => {
        c = null;
      }), K());
    },
    i(f) {
      r || (g(c), r = !0);
    },
    o(f) {
      w(c), r = !1;
    },
    d(f) {
      f && $(e), c && c.d(f), f && $(s), o = !1, a();
    }
  };
}
function Os(n, e, l) {
  let t, { viewModel: i } = e;
  const s = i.graphVisible;
  ge(n, s, (o) => l(1, t = o));
  function r() {
    s.update((o) => !o);
  }
  return n.$$set = (o) => {
    "viewModel" in o && l(0, i = o.viewModel);
  }, [i, t, s, r];
}
class Us extends ee {
  constructor(e) {
    super(), Y(this, e, Os, Hs, X, { viewModel: 0 }, Fs);
  }
}
function Rl(n, e, l) {
  const t = n.slice();
  return t[4] = e[l], t;
}
function Cl(n) {
  let e, l;
  return e = new Us({ props: { viewModel: (
    /*row*/
    n[4]
  ) } }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & /*viewModel*/
      1 && (s.viewModel = /*row*/
      t[4]), e.$set(s);
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
function Xs(n) {
  let e, l, t, i = (
    /*viewModel*/
    n[0].testRow.span + ""
  ), s = (
    /*$expandAll*/
    n[1] || /*viewModel*/
    n[0].testRow.status !== "passed" ? ":" : ""
  ), r, o, a, c, f, d = (
    /*viewModel*/
    n[0].childRows
  ), u = [];
  for (let v = 0; v < d.length; v += 1)
    u[v] = Cl(Rl(n, d, v));
  const m = (v) => w(u[v], 1, 1, () => {
    u[v] = null;
  });
  return {
    c() {
      e = h("div"), l = h("span"), t = new di(!1), r = I(s), o = h("div");
      for (let v = 0; v < u.length; v += 1)
        u[v].c();
      t.a = r, p(l, "class", "label"), p(e, "class", "row test"), p(o, "class", "test-rows"), he(
        o,
        "expand-all",
        /*$expandAll*/
        n[1]
      );
    },
    m(v, _) {
      y(v, e, _), b(e, l), t.m(i, l), b(l, r), y(v, o, _);
      for (let k = 0; k < u.length; k += 1)
        u[k] && u[k].m(o, null);
      a = !0, c || (f = re(
        l,
        "click",
        /*onTestClicked*/
        n[3]
      ), c = !0);
    },
    p(v, [_]) {
      if ((!a || _ & /*viewModel*/
      1) && i !== (i = /*viewModel*/
      v[0].testRow.span + "") && t.p(i), (!a || _ & /*$expandAll, viewModel*/
      3) && s !== (s = /*$expandAll*/
      v[1] || /*viewModel*/
      v[0].testRow.status !== "passed" ? ":" : "") && W(r, s), _ & /*viewModel*/
      1) {
        d = /*viewModel*/
        v[0].childRows;
        let k;
        for (k = 0; k < d.length; k += 1) {
          const R = Rl(v, d, k);
          u[k] ? (u[k].p(R, _), g(u[k], 1)) : (u[k] = Cl(R), u[k].c(), g(u[k], 1), u[k].m(o, null));
        }
        for (x(), k = d.length; k < u.length; k += 1)
          m(k);
        K();
      }
      (!a || _ & /*$expandAll*/
      2) && he(
        o,
        "expand-all",
        /*$expandAll*/
        v[1]
      );
    },
    i(v) {
      if (!a) {
        for (let _ = 0; _ < d.length; _ += 1)
          g(u[_]);
        a = !0;
      }
    },
    o(v) {
      u = u.filter(Boolean);
      for (let _ = 0; _ < u.length; _ += 1)
        w(u[_]);
      a = !1;
    },
    d(v) {
      v && $(e), v && $(o), O(u, v), c = !1, f();
    }
  };
}
function Zs(n, e, l) {
  let t, { viewModel: i } = e;
  const s = i.expandAll;
  ge(n, s, (o) => l(1, t = o));
  function r() {
    s.update((o) => !o);
  }
  return n.$$set = (o) => {
    "viewModel" in o && l(0, i = o.viewModel);
  }, [i, t, s, r];
}
class Js extends ee {
  constructor(e) {
    super(), Y(this, e, Zs, Xs, X, { viewModel: 0 });
  }
}
function Qs(n) {
  ne(n, "svelte-ffmh5y", ".check-summary-container.svelte-ffmh5y{display:flex;flex-direction:column}.check-detail.svelte-ffmh5y{display:flex;flex-direction:column}.group-container.svelte-ffmh5y{margin-bottom:1.2rem}.group-container.svelte-ffmh5y .test-rows{display:flex;flex-direction:column}.group-container.svelte-ffmh5y .row.passed{display:none}.group-container.svelte-ffmh5y .test-rows.expand-all .row.passed{display:flex}.group-container.svelte-ffmh5y .row{display:flex;flex-direction:row}.group-container.svelte-ffmh5y .row.group{font-size:1.2em}.group-container.svelte-ffmh5y .row.test{margin-top:0.4rem}.group-container.svelte-ffmh5y .row.test > .label{cursor:pointer}.group-container.svelte-ffmh5y .row.scenario{color:#777}.group-container.svelte-ffmh5y .row.dataset{color:#777}.group-container.svelte-ffmh5y .row.predicate{color:#777}.group-container.svelte-ffmh5y .row.predicate > .label{cursor:pointer}.group-container.svelte-ffmh5y .bold{font-weight:700;color:#bbb}.summary-bar-row.svelte-ffmh5y{display:flex;flex-direction:row;align-items:baseline;align-self:flex-start;margin:2.6rem 0;opacity:1}.bar-container.svelte-ffmh5y{display:flex;flex-direction:row;width:20rem;height:0.8rem}.bar.svelte-ffmh5y{height:0.8rem}.bar.gray.svelte-ffmh5y{background-color:#777}.summary-label.svelte-ffmh5y{margin-left:0.8rem;color:#fff}.sep.svelte-ffmh5y{color:#777}");
}
function Sl(n, e, l) {
  const t = n.slice();
  return t[1] = e[l], t;
}
function Dl(n, e, l) {
  const t = n.slice();
  return t[4] = e[l], t;
}
function Ys(n) {
  let e;
  return {
    c() {
      e = h("div"), p(e, "class", "bar gray svelte-ffmh5y"), se(e, "width", "100%");
    },
    m(l, t) {
      y(l, e, t);
    },
    p: E,
    d(l) {
      l && $(e);
    }
  };
}
function eo(n) {
  let e, l, t;
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), p(e, "class", "bar bucket-bg-0 svelte-ffmh5y"), se(
        e,
        "width",
        /*viewModel*/
        n[0].percents[0] + "%"
      ), p(l, "class", "bar status-bg-failed svelte-ffmh5y"), se(
        l,
        "width",
        /*viewModel*/
        n[0].percents[1] + "%"
      ), p(t, "class", "bar status-bg-error svelte-ffmh5y"), se(
        t,
        "width",
        /*viewModel*/
        n[0].percents[2] + "%"
      );
    },
    m(i, s) {
      y(i, e, s), y(i, l, s), y(i, t, s);
    },
    p(i, s) {
      s & /*viewModel*/
      1 && se(
        e,
        "width",
        /*viewModel*/
        i[0].percents[0] + "%"
      ), s & /*viewModel*/
      1 && se(
        l,
        "width",
        /*viewModel*/
        i[0].percents[1] + "%"
      ), s & /*viewModel*/
      1 && se(
        t,
        "width",
        /*viewModel*/
        i[0].percents[2] + "%"
      );
    },
    d(i) {
      i && $(e), i && $(l), i && $(t);
    }
  };
}
function to(n) {
  let e, l = (
    /*viewModel*/
    n[0].total + ""
  ), t, i, s, r, o, a = (
    /*viewModel*/
    n[0].passed && Ll(n)
  ), c = (
    /*viewModel*/
    n[0].failed && Tl(n)
  ), f = (
    /*viewModel*/
    n[0].errors && Vl(n)
  );
  return {
    c() {
      e = h("span"), t = I(l), i = I(" total"), a && a.c(), s = H(), c && c.c(), r = H(), f && f.c(), o = H();
    },
    m(d, u) {
      y(d, e, u), b(e, t), b(e, i), a && a.m(d, u), y(d, s, u), c && c.m(d, u), y(d, r, u), f && f.m(d, u), y(d, o, u);
    },
    p(d, u) {
      u & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      d[0].total + "") && W(t, l), /*viewModel*/
      d[0].passed ? a ? a.p(d, u) : (a = Ll(d), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null), /*viewModel*/
      d[0].failed ? c ? c.p(d, u) : (c = Tl(d), c.c(), c.m(r.parentNode, r)) : c && (c.d(1), c = null), /*viewModel*/
      d[0].errors ? f ? f.p(d, u) : (f = Vl(d), f.c(), f.m(o.parentNode, o)) : f && (f.d(1), f = null);
    },
    d(d) {
      d && $(e), a && a.d(d), d && $(s), c && c.d(d), d && $(r), f && f.d(d), d && $(o);
    }
  };
}
function lo(n) {
  let e, l = (
    /*viewModel*/
    n[0].total + ""
  ), t, i;
  return {
    c() {
      e = h("span"), t = I(l), i = I(" total passed");
    },
    m(s, r) {
      y(s, e, r), b(e, t), b(e, i);
    },
    p(s, r) {
      r & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      s[0].total + "") && W(t, l);
    },
    d(s) {
      s && $(e);
    }
  };
}
function no(n) {
  let e;
  return {
    c() {
      e = h("span"), e.textContent = "No checks";
    },
    m(l, t) {
      y(l, e, t);
    },
    p: E,
    d(l) {
      l && $(e);
    }
  };
}
function Ll(n) {
  let e, l, t = (
    /*viewModel*/
    n[0].passed + ""
  ), i, s;
  return {
    c() {
      e = h("span"), e.textContent = " | ", l = h("span"), i = I(t), s = I(" passed"), p(e, "class", "sep svelte-ffmh5y"), p(l, "class", "status-color-passed");
    },
    m(r, o) {
      y(r, e, o), y(r, l, o), b(l, i), b(l, s);
    },
    p(r, o) {
      o & /*viewModel*/
      1 && t !== (t = /*viewModel*/
      r[0].passed + "") && W(i, t);
    },
    d(r) {
      r && $(e), r && $(l);
    }
  };
}
function Tl(n) {
  let e, l, t = (
    /*viewModel*/
    n[0].failed + ""
  ), i, s;
  return {
    c() {
      e = h("span"), e.textContent = " | ", l = h("span"), i = I(t), s = I(" failed"), p(e, "class", "sep svelte-ffmh5y"), p(l, "class", "status-color-failed");
    },
    m(r, o) {
      y(r, e, o), y(r, l, o), b(l, i), b(l, s);
    },
    p(r, o) {
      o & /*viewModel*/
      1 && t !== (t = /*viewModel*/
      r[0].failed + "") && W(i, t);
    },
    d(r) {
      r && $(e), r && $(l);
    }
  };
}
function Vl(n) {
  let e, l;
  function t(r, o) {
    return (
      /*viewModel*/
      r[0].errors > 1 ? so : io
    );
  }
  let i = t(n), s = i(n);
  return {
    c() {
      e = h("span"), e.textContent = " | ", s.c(), l = H(), p(e, "class", "sep svelte-ffmh5y");
    },
    m(r, o) {
      y(r, e, o), s.m(r, o), y(r, l, o);
    },
    p(r, o) {
      i === (i = t(r)) && s ? s.p(r, o) : (s.d(1), s = i(r), s && (s.c(), s.m(l.parentNode, l)));
    },
    d(r) {
      r && $(e), s.d(r), r && $(l);
    }
  };
}
function io(n) {
  let e, l = (
    /*viewModel*/
    n[0].errors + ""
  ), t, i;
  return {
    c() {
      e = h("span"), t = I(l), i = I(" error"), p(e, "class", "status-color-error");
    },
    m(s, r) {
      y(s, e, r), b(e, t), b(e, i);
    },
    p(s, r) {
      r & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      s[0].errors + "") && W(t, l);
    },
    d(s) {
      s && $(e);
    }
  };
}
function so(n) {
  let e, l = (
    /*viewModel*/
    n[0].errors + ""
  ), t, i;
  return {
    c() {
      e = h("span"), t = I(l), i = I(" errors"), p(e, "class", "status-color-error");
    },
    m(s, r) {
      y(s, e, r), b(e, t), b(e, i);
    },
    p(s, r) {
      r & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      s[0].errors + "") && W(t, l);
    },
    d(s) {
      s && $(e);
    }
  };
}
function oo(n) {
  let e, l, t = (
    /*viewModel*/
    n[0].groups
  ), i = [];
  for (let r = 0; r < t.length; r += 1)
    i[r] = zl(Sl(n, t, r));
  const s = (r) => w(i[r], 1, 1, () => {
    i[r] = null;
  });
  return {
    c() {
      e = h("div");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      p(e, "class", "check-detail svelte-ffmh5y");
    },
    m(r, o) {
      y(r, e, o);
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(e, null);
      l = !0;
    },
    p(r, o) {
      if (o & /*viewModel*/
      1) {
        t = /*viewModel*/
        r[0].groups;
        let a;
        for (a = 0; a < t.length; a += 1) {
          const c = Sl(r, t, a);
          i[a] ? (i[a].p(c, o), g(i[a], 1)) : (i[a] = zl(c), i[a].c(), g(i[a], 1), i[a].m(e, null));
        }
        for (x(), a = t.length; a < i.length; a += 1)
          s(a);
        K();
      }
    },
    i(r) {
      if (!l) {
        for (let o = 0; o < t.length; o += 1)
          g(i[o]);
        l = !0;
      }
    },
    o(r) {
      i = i.filter(Boolean);
      for (let o = 0; o < i.length; o += 1)
        w(i[o]);
      l = !1;
    },
    d(r) {
      r && $(e), O(i, r);
    }
  };
}
function Il(n) {
  let e, l;
  return e = new Js({
    props: { viewModel: (
      /*testViewModel*/
      n[4]
    ) }
  }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & /*viewModel*/
      1 && (s.viewModel = /*testViewModel*/
      t[4]), e.$set(s);
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
  let e, l, t, i = (
    /*group*/
    n[1].name + ""
  ), s, r, o = (
    /*group*/
    n[1].tests
  ), a = [];
  for (let f = 0; f < o.length; f += 1)
    a[f] = Il(Dl(n, o, f));
  const c = (f) => w(a[f], 1, 1, () => {
    a[f] = null;
  });
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), s = I(i);
      for (let f = 0; f < a.length; f += 1)
        a[f].c();
      p(t, "class", "label"), p(l, "class", "row group"), p(e, "class", "group-container svelte-ffmh5y");
    },
    m(f, d) {
      y(f, e, d), b(e, l), b(l, t), b(t, s);
      for (let u = 0; u < a.length; u += 1)
        a[u] && a[u].m(e, null);
      r = !0;
    },
    p(f, d) {
      if ((!r || d & /*viewModel*/
      1) && i !== (i = /*group*/
      f[1].name + "") && W(s, i), d & /*viewModel*/
      1) {
        o = /*group*/
        f[1].tests;
        let u;
        for (u = 0; u < o.length; u += 1) {
          const m = Dl(f, o, u);
          a[u] ? (a[u].p(m, d), g(a[u], 1)) : (a[u] = Il(m), a[u].c(), g(a[u], 1), a[u].m(e, null));
        }
        for (x(), u = o.length; u < a.length; u += 1)
          c(u);
        K();
      }
    },
    i(f) {
      if (!r) {
        for (let d = 0; d < o.length; d += 1)
          g(a[d]);
        r = !0;
      }
    },
    o(f) {
      a = a.filter(Boolean);
      for (let d = 0; d < a.length; d += 1)
        w(a[d]);
      r = !1;
    },
    d(f) {
      f && $(e), O(a, f);
    }
  };
}
function ro(n) {
  let e, l, t, i, s;
  function r(m, v) {
    return (
      /*viewModel*/
      m[0].total > 0 ? eo : Ys
    );
  }
  let o = r(n), a = o(n);
  function c(m, v) {
    return (
      /*viewModel*/
      m[0].total === 0 ? no : (
        /*viewModel*/
        m[0].total === /*viewModel*/
        m[0].passed ? lo : to
      )
    );
  }
  let f = c(n), d = f(n), u = oo(n);
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), a.c(), i = h("span"), d.c(), u && u.c(), p(t, "class", "bar-container svelte-ffmh5y"), p(i, "class", "summary-label svelte-ffmh5y"), p(l, "class", "summary-bar-row svelte-ffmh5y"), p(e, "class", "check-summary-container svelte-ffmh5y");
    },
    m(m, v) {
      y(m, e, v), b(e, l), b(l, t), a.m(t, null), b(l, i), d.m(i, null), u && u.m(e, null), s = !0;
    },
    p(m, [v]) {
      o === (o = r(m)) && a ? a.p(m, v) : (a.d(1), a = o(m), a && (a.c(), a.m(t, null))), f === (f = c(m)) && d ? d.p(m, v) : (d.d(1), d = f(m), d && (d.c(), d.m(i, null))), u.p(m, v);
    },
    i(m) {
      s || (g(u), s = !0);
    },
    o(m) {
      w(u), s = !1;
    },
    d(m) {
      m && $(e), a.d(), d.d(), u && u.d();
    }
  };
}
function ao(n, e, l) {
  let { viewModel: t } = e;
  return n.$$set = (i) => {
    "viewModel" in i && l(0, t = i.viewModel);
  }, [t];
}
class co extends ee {
  constructor(e) {
    super(), Y(this, e, ao, ro, X, { viewModel: 0 }, Qs);
  }
}
function fo(n) {
  ne(n, "svelte-1jh217s", ".summary-row.svelte-1jh217s{display:flex;flex-direction:row;flex:0 0 auto;align-items:flex-end;margin:0.2rem 0;opacity:0.8}.summary-row.svelte-1jh217s:hover{opacity:1}.bar-container.svelte-1jh217s{display:flex;flex-direction:row;width:20rem;height:0.8rem;margin-bottom:0.25rem;cursor:pointer}.bar.svelte-1jh217s{height:0.8rem}.bar.striped.svelte-1jh217s{width:100%;background:repeating-linear-gradient(-45deg, goldenrod, goldenrod 0.4rem, darkgoldenrod 0.4rem, darkgoldenrod 1rem)}.title-container.svelte-1jh217s{display:flex;flex-direction:column;margin-left:0.8rem}.title-part.svelte-1jh217s{display:flex;flex-direction:row;align-items:baseline}.title.svelte-1jh217s{color:#fff;cursor:pointer}.subtitle.svelte-1jh217s{font-size:0.8em;margin-left:0.6rem;color:#aaa;cursor:pointer}.annotations.svelte-1jh217s{font-size:0.8em;margin-left:0.3rem;color:#aaa}.annotations.svelte-1jh217s .annotation{margin:0 0.3rem;padding:0.1rem 0.3rem;background-color:#1c1c1c;border:0.5px solid #555;border-radius:0.4rem}.summary-header-row.svelte-1jh217s{display:flex;flex-direction:row;flex:0 0 auto;align-items:center;margin:0.4rem 0}.header-bar.svelte-1jh217s{display:flex;width:20rem;height:1px;background-color:#555}.header-title.svelte-1jh217s{margin-left:0.8rem;color:#fff;font-size:1.2em}");
}
function uo(n) {
  let e, l, t, i, s, r = (
    /*viewModel*/
    n[0].title + ""
  ), o, a, c;
  function f(_, k) {
    return (
      /*viewModel*/
      _[0].diffPercentByBucket === void 0 ? po : ho
    );
  }
  let d = f(n), u = d(n), m = (
    /*viewModel*/
    n[0].subtitle && jl(n)
  ), v = (
    /*viewModel*/
    n[0].annotations && Pl(n)
  );
  return {
    c() {
      e = h("div"), l = h("div"), u.c(), t = h("div"), i = h("div"), s = h("div"), m && m.c(), o = H(), v && v.c(), p(l, "class", "bar-container svelte-1jh217s"), p(s, "class", "title svelte-1jh217s"), p(i, "class", "title-part svelte-1jh217s"), p(t, "class", "title-container svelte-1jh217s"), p(e, "class", "summary-row svelte-1jh217s");
    },
    m(_, k) {
      y(_, e, k), b(e, l), u.m(l, null), b(e, t), b(t, i), b(i, s), s.innerHTML = r, m && m.m(i, null), b(i, o), v && v.m(i, null), a || (c = [
        re(
          l,
          "click",
          /*onLinkClicked*/
          n[2]
        ),
        re(
          s,
          "click",
          /*onLinkClicked*/
          n[2]
        )
      ], a = !0);
    },
    p(_, k) {
      d === (d = f(_)) && u ? u.p(_, k) : (u.d(1), u = d(_), u && (u.c(), u.m(l, null))), k & /*viewModel*/
      1 && r !== (r = /*viewModel*/
      _[0].title + "") && (s.innerHTML = r), /*viewModel*/
      _[0].subtitle ? m ? m.p(_, k) : (m = jl(_), m.c(), m.m(i, o)) : m && (m.d(1), m = null), /*viewModel*/
      _[0].annotations ? v ? v.p(_, k) : (v = Pl(_), v.c(), v.m(i, null)) : v && (v.d(1), v = null);
    },
    d(_) {
      _ && $(e), u.d(), m && m.d(), v && v.d(), a = !1, $e(c);
    }
  };
}
function mo(n) {
  let e, l, t, i = (
    /*viewModel*/
    n[0].title + ""
  );
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), p(l, "class", "header-bar svelte-1jh217s"), p(t, "class", "header-title svelte-1jh217s"), p(e, "class", "summary-header-row svelte-1jh217s");
    },
    m(s, r) {
      y(s, e, r), b(e, l), b(e, t), t.innerHTML = i;
    },
    p(s, r) {
      r & /*viewModel*/
      1 && i !== (i = /*viewModel*/
      s[0].title + "") && (t.innerHTML = i);
    },
    d(s) {
      s && $(e);
    }
  };
}
function ho(n) {
  let e, l, t, i, s;
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), i = h("div"), s = h("div"), p(e, "class", "bar bucket-bg-0 svelte-1jh217s"), se(
        e,
        "width",
        /*bucketPcts*/
        n[1][0] + "%"
      ), p(l, "class", "bar bucket-bg-1 svelte-1jh217s"), se(
        l,
        "width",
        /*bucketPcts*/
        n[1][1] + "%"
      ), p(t, "class", "bar bucket-bg-2 svelte-1jh217s"), se(
        t,
        "width",
        /*bucketPcts*/
        n[1][2] + "%"
      ), p(i, "class", "bar bucket-bg-3 svelte-1jh217s"), se(
        i,
        "width",
        /*bucketPcts*/
        n[1][3] + "%"
      ), p(s, "class", "bar bucket-bg-4 svelte-1jh217s"), se(
        s,
        "width",
        /*bucketPcts*/
        n[1][4] + "%"
      );
    },
    m(r, o) {
      y(r, e, o), y(r, l, o), y(r, t, o), y(r, i, o), y(r, s, o);
    },
    p: E,
    d(r) {
      r && $(e), r && $(l), r && $(t), r && $(i), r && $(s);
    }
  };
}
function po(n) {
  let e;
  return {
    c() {
      e = h("div"), p(e, "class", "bar striped svelte-1jh217s");
    },
    m(l, t) {
      y(l, e, t);
    },
    p: E,
    d(l) {
      l && $(e);
    }
  };
}
function jl(n) {
  let e, l = (
    /*viewModel*/
    n[0].subtitle + ""
  ), t, i;
  return {
    c() {
      e = h("div"), p(e, "class", "subtitle svelte-1jh217s");
    },
    m(s, r) {
      y(s, e, r), e.innerHTML = l, t || (i = re(
        e,
        "click",
        /*onLinkClicked*/
        n[2]
      ), t = !0);
    },
    p(s, r) {
      r & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      s[0].subtitle + "") && (e.innerHTML = l);
    },
    d(s) {
      s && $(e), t = !1, i();
    }
  };
}
function Pl(n) {
  let e, l = (
    /*viewModel*/
    n[0].annotations + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "annotations svelte-1jh217s");
    },
    m(t, i) {
      y(t, e, i), e.innerHTML = l;
    },
    p(t, i) {
      i & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      t[0].annotations + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function vo(n) {
  let e;
  function l(s, r) {
    return (
      /*viewModel*/
      s[0].header ? mo : uo
    );
  }
  let t = l(n), i = t(n);
  return {
    c() {
      i.c(), e = H();
    },
    m(s, r) {
      i.m(s, r), y(s, e, r);
    },
    p(s, [r]) {
      t === (t = l(s)) && i ? i.p(s, r) : (i.d(1), i = t(s), i && (i.c(), i.m(e.parentNode, e)));
    },
    i: E,
    o: E,
    d(s) {
      i.d(s), s && $(e);
    }
  };
}
function _o(n, e, l) {
  let { viewModel: t } = e;
  const i = t.diffPercentByBucket, s = Ne();
  function r() {
    t.groupKey && s("command", {
      cmd: "show-comparison-detail",
      summaryRow: t
    });
  }
  return n.$$set = (o) => {
    "viewModel" in o && l(0, t = o.viewModel);
  }, [t, i, r];
}
class oe extends ee {
  constructor(e) {
    super(), Y(this, e, _o, vo, X, { viewModel: 0 }, fo);
  }
}
function go(n) {
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
function El(n, e, l) {
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
function Al(n, e, l) {
  const t = n.slice();
  return t[15] = e[l], t;
}
function Fl(n, e, l) {
  const t = n.slice();
  return t[15] = e[l], t;
}
function Hl(n, e, l) {
  const t = n.slice();
  return t[12] = e[l], t;
}
function Ol(n, e, l) {
  const t = n.slice();
  return t[15] = e[l], t;
}
function bo(n) {
  let e, l, t, i, s, r, o = (
    /*viewModel*/
    n[0].datasetsWithErrors && Ul(n)
  ), a = (
    /*viewModel*/
    n[0].datasetsOnlyInLeft && Zl(n)
  ), c = (
    /*viewModel*/
    n[0].datasetsOnlyInRight && Ql(n)
  ), f = (
    /*viewModel*/
    n[0].datasetsWithDiffs && en(n)
  ), d = (
    /*viewModel*/
    n[0].datasetsWithoutDiffs && ln(n)
  );
  return {
    c() {
      o && o.c(), e = H(), a && a.c(), l = H(), c && c.c(), t = H(), f && f.c(), i = H(), d && d.c(), s = H();
    },
    m(u, m) {
      o && o.m(u, m), y(u, e, m), a && a.m(u, m), y(u, l, m), c && c.m(u, m), y(u, t, m), f && f.m(u, m), y(u, i, m), d && d.m(u, m), y(u, s, m), r = !0;
    },
    p(u, m) {
      /*viewModel*/
      u[0].datasetsWithErrors ? o ? (o.p(u, m), m[0] & /*viewModel*/
      1 && g(o, 1)) : (o = Ul(u), o.c(), g(o, 1), o.m(e.parentNode, e)) : o && (x(), w(o, 1, 1, () => {
        o = null;
      }), K()), /*viewModel*/
      u[0].datasetsOnlyInLeft ? a ? (a.p(u, m), m[0] & /*viewModel*/
      1 && g(a, 1)) : (a = Zl(u), a.c(), g(a, 1), a.m(l.parentNode, l)) : a && (x(), w(a, 1, 1, () => {
        a = null;
      }), K()), /*viewModel*/
      u[0].datasetsOnlyInRight ? c ? (c.p(u, m), m[0] & /*viewModel*/
      1 && g(c, 1)) : (c = Ql(u), c.c(), g(c, 1), c.m(t.parentNode, t)) : c && (x(), w(c, 1, 1, () => {
        c = null;
      }), K()), /*viewModel*/
      u[0].datasetsWithDiffs ? f ? (f.p(u, m), m[0] & /*viewModel*/
      1 && g(f, 1)) : (f = en(u), f.c(), g(f, 1), f.m(i.parentNode, i)) : f && (x(), w(f, 1, 1, () => {
        f = null;
      }), K()), /*viewModel*/
      u[0].datasetsWithoutDiffs ? d ? (d.p(u, m), m[0] & /*viewModel*/
      1 && g(d, 1)) : (d = ln(u), d.c(), g(d, 1), d.m(s.parentNode, s)) : d && (x(), w(d, 1, 1, () => {
        d = null;
      }), K());
    },
    i(u) {
      r || (g(o), g(a), g(c), g(f), g(d), r = !0);
    },
    o(u) {
      w(o), w(a), w(c), w(f), w(d), r = !1;
    },
    d(u) {
      o && o.d(u), u && $(e), a && a.d(u), u && $(l), c && c.d(u), u && $(t), f && f.d(u), u && $(i), d && d.d(u), u && $(s);
    }
  };
}
function wo(n) {
  let e, l, t, i, s, r, o = (
    /*viewModel*/
    n[0].scenariosWithErrors && sn(n)
  ), a = (
    /*viewModel*/
    n[0].scenariosOnlyInLeft && rn(n)
  ), c = (
    /*viewModel*/
    n[0].scenariosOnlyInRight && cn(n)
  ), f = (
    /*viewModel*/
    n[0].scenariosWithDiffs && dn(n)
  ), d = (
    /*viewModel*/
    n[0].scenariosWithoutDiffs && mn(n)
  );
  return {
    c() {
      o && o.c(), e = H(), a && a.c(), l = H(), c && c.c(), t = H(), f && f.c(), i = H(), d && d.c(), s = H();
    },
    m(u, m) {
      o && o.m(u, m), y(u, e, m), a && a.m(u, m), y(u, l, m), c && c.m(u, m), y(u, t, m), f && f.m(u, m), y(u, i, m), d && d.m(u, m), y(u, s, m), r = !0;
    },
    p(u, m) {
      /*viewModel*/
      u[0].scenariosWithErrors ? o ? (o.p(u, m), m[0] & /*viewModel*/
      1 && g(o, 1)) : (o = sn(u), o.c(), g(o, 1), o.m(e.parentNode, e)) : o && (x(), w(o, 1, 1, () => {
        o = null;
      }), K()), /*viewModel*/
      u[0].scenariosOnlyInLeft ? a ? (a.p(u, m), m[0] & /*viewModel*/
      1 && g(a, 1)) : (a = rn(u), a.c(), g(a, 1), a.m(l.parentNode, l)) : a && (x(), w(a, 1, 1, () => {
        a = null;
      }), K()), /*viewModel*/
      u[0].scenariosOnlyInRight ? c ? (c.p(u, m), m[0] & /*viewModel*/
      1 && g(c, 1)) : (c = cn(u), c.c(), g(c, 1), c.m(t.parentNode, t)) : c && (x(), w(c, 1, 1, () => {
        c = null;
      }), K()), /*viewModel*/
      u[0].scenariosWithDiffs ? f ? (f.p(u, m), m[0] & /*viewModel*/
      1 && g(f, 1)) : (f = dn(u), f.c(), g(f, 1), f.m(i.parentNode, i)) : f && (x(), w(f, 1, 1, () => {
        f = null;
      }), K()), /*viewModel*/
      u[0].scenariosWithoutDiffs ? d ? (d.p(u, m), m[0] & /*viewModel*/
      1 && g(d, 1)) : (d = mn(u), d.c(), g(d, 1), d.m(s.parentNode, s)) : d && (x(), w(d, 1, 1, () => {
        d = null;
      }), K());
    },
    i(u) {
      r || (g(o), g(a), g(c), g(f), g(d), r = !0);
    },
    o(u) {
      w(o), w(a), w(c), w(f), w(d), r = !1;
    },
    d(u) {
      o && o.d(u), u && $(e), a && a.d(u), u && $(l), c && c.d(u), u && $(t), f && f.d(u), u && $(i), d && d.d(u), u && $(s);
    }
  };
}
function ko(n) {
  let e, l, t = (
    /*viewModel*/
    n[0].viewGroups
  ), i = [];
  for (let r = 0; r < t.length; r += 1)
    i[r] = vn(Hl(n, t, r));
  const s = (r) => w(i[r], 1, 1, () => {
    i[r] = null;
  });
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      e = H();
    },
    m(r, o) {
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(r, o);
      y(r, e, o), l = !0;
    },
    p(r, o) {
      if (o[0] & /*viewModel*/
      1) {
        t = /*viewModel*/
        r[0].viewGroups;
        let a;
        for (a = 0; a < t.length; a += 1) {
          const c = Hl(r, t, a);
          i[a] ? (i[a].p(c, o), g(i[a], 1)) : (i[a] = vn(c), i[a].c(), g(i[a], 1), i[a].m(e.parentNode, e));
        }
        for (x(), a = t.length; a < i.length; a += 1)
          s(a);
        K();
      }
    },
    i(r) {
      if (!l) {
        for (let o = 0; o < t.length; o += 1)
          g(i[o]);
        l = !0;
      }
    },
    o(r) {
      i = i.filter(Boolean);
      for (let o = 0; o < i.length; o += 1)
        w(i[o]);
      l = !1;
    },
    d(r) {
      O(i, r), r && $(e);
    }
  };
}
function Ul(n) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: (
        /*viewModel*/
        n[0].datasetsWithErrors.header
      )
    }
  });
  let i = (
    /*viewModel*/
    n[0].datasetsWithErrors.rows
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = Xl(Kl(n, i, o));
  const r = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, a) {
      y(o, e, a), z(l, e, null);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(e, null);
      t = !0;
    },
    p(o, a) {
      const c = {};
      if (a[0] & /*viewModel*/
      1 && (c.viewModel = /*viewModel*/
      o[0].datasetsWithErrors.header), l.$set(c), a[0] & /*viewModel*/
      1) {
        i = /*viewModel*/
        o[0].datasetsWithErrors.rows;
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = Kl(o, i, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = Xl(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = i.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < i.length; a += 1)
          g(s[a]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        w(s[a]);
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
    props: { viewModel: (
      /*rowViewModel*/
      n[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_6*/
    n[7]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & /*viewModel*/
      1 && (s.viewModel = /*rowViewModel*/
      t[15]), e.$set(s);
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
      viewModel: (
        /*viewModel*/
        n[0].datasetsOnlyInLeft.header
      )
    }
  });
  let i = (
    /*viewModel*/
    n[0].datasetsOnlyInLeft.rows
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = Jl(xl(n, i, o));
  const r = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, a) {
      y(o, e, a), z(l, e, null);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(e, null);
      t = !0;
    },
    p(o, a) {
      const c = {};
      if (a[0] & /*viewModel*/
      1 && (c.viewModel = /*viewModel*/
      o[0].datasetsOnlyInLeft.header), l.$set(c), a[0] & /*viewModel*/
      1) {
        i = /*viewModel*/
        o[0].datasetsOnlyInLeft.rows;
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = xl(o, i, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = Jl(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = i.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < i.length; a += 1)
          g(s[a]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        w(s[a]);
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
    props: { viewModel: (
      /*rowViewModel*/
      n[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_7*/
    n[8]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & /*viewModel*/
      1 && (s.viewModel = /*rowViewModel*/
      t[15]), e.$set(s);
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
      viewModel: (
        /*viewModel*/
        n[0].datasetsOnlyInRight.header
      )
    }
  });
  let i = (
    /*viewModel*/
    n[0].datasetsOnlyInRight.rows
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = Yl(Bl(n, i, o));
  const r = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, a) {
      y(o, e, a), z(l, e, null);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(e, null);
      t = !0;
    },
    p(o, a) {
      const c = {};
      if (a[0] & /*viewModel*/
      1 && (c.viewModel = /*viewModel*/
      o[0].datasetsOnlyInRight.header), l.$set(c), a[0] & /*viewModel*/
      1) {
        i = /*viewModel*/
        o[0].datasetsOnlyInRight.rows;
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = Bl(o, i, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = Yl(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = i.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < i.length; a += 1)
          g(s[a]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        w(s[a]);
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
    props: { viewModel: (
      /*rowViewModel*/
      n[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_8*/
    n[9]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & /*viewModel*/
      1 && (s.viewModel = /*rowViewModel*/
      t[15]), e.$set(s);
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
      viewModel: (
        /*viewModel*/
        n[0].datasetsWithDiffs.header
      )
    }
  });
  let i = (
    /*viewModel*/
    n[0].datasetsWithDiffs.rows
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = tn(Nl(n, i, o));
  const r = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, a) {
      y(o, e, a), z(l, e, null);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(e, null);
      t = !0;
    },
    p(o, a) {
      const c = {};
      if (a[0] & /*viewModel*/
      1 && (c.viewModel = /*viewModel*/
      o[0].datasetsWithDiffs.header), l.$set(c), a[0] & /*viewModel*/
      1) {
        i = /*viewModel*/
        o[0].datasetsWithDiffs.rows;
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = Nl(o, i, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = tn(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = i.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < i.length; a += 1)
          g(s[a]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        w(s[a]);
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
    props: { viewModel: (
      /*rowViewModel*/
      n[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_9*/
    n[10]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & /*viewModel*/
      1 && (s.viewModel = /*rowViewModel*/
      t[15]), e.$set(s);
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
      viewModel: (
        /*viewModel*/
        n[0].datasetsWithoutDiffs.header
      )
    }
  });
  let i = (
    /*viewModel*/
    n[0].datasetsWithoutDiffs.rows
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = nn(ql(n, i, o));
  const r = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, a) {
      y(o, e, a), z(l, e, null);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(e, null);
      t = !0;
    },
    p(o, a) {
      const c = {};
      if (a[0] & /*viewModel*/
      1 && (c.viewModel = /*viewModel*/
      o[0].datasetsWithoutDiffs.header), l.$set(c), a[0] & /*viewModel*/
      1) {
        i = /*viewModel*/
        o[0].datasetsWithoutDiffs.rows;
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = ql(o, i, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = nn(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = i.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < i.length; a += 1)
          g(s[a]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        w(s[a]);
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
    props: { viewModel: (
      /*rowViewModel*/
      n[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_10*/
    n[11]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & /*viewModel*/
      1 && (s.viewModel = /*rowViewModel*/
      t[15]), e.$set(s);
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
      viewModel: (
        /*viewModel*/
        n[0].scenariosWithErrors.header
      )
    }
  });
  let i = (
    /*viewModel*/
    n[0].scenariosWithErrors.rows
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = on(Fl(n, i, o));
  const r = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, a) {
      y(o, e, a), z(l, e, null);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(e, null);
      t = !0;
    },
    p(o, a) {
      const c = {};
      if (a[0] & /*viewModel*/
      1 && (c.viewModel = /*viewModel*/
      o[0].scenariosWithErrors.header), l.$set(c), a[0] & /*viewModel*/
      1) {
        i = /*viewModel*/
        o[0].scenariosWithErrors.rows;
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = Fl(o, i, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = on(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = i.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < i.length; a += 1)
          g(s[a]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        w(s[a]);
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
    props: { viewModel: (
      /*rowViewModel*/
      n[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_1*/
    n[2]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & /*viewModel*/
      1 && (s.viewModel = /*rowViewModel*/
      t[15]), e.$set(s);
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
      viewModel: (
        /*viewModel*/
        n[0].scenariosOnlyInLeft.header
      )
    }
  });
  let i = (
    /*viewModel*/
    n[0].scenariosOnlyInLeft.rows
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = an(Al(n, i, o));
  const r = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, a) {
      y(o, e, a), z(l, e, null);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(e, null);
      t = !0;
    },
    p(o, a) {
      const c = {};
      if (a[0] & /*viewModel*/
      1 && (c.viewModel = /*viewModel*/
      o[0].scenariosOnlyInLeft.header), l.$set(c), a[0] & /*viewModel*/
      1) {
        i = /*viewModel*/
        o[0].scenariosOnlyInLeft.rows;
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = Al(o, i, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = an(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = i.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < i.length; a += 1)
          g(s[a]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        w(s[a]);
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
    props: { viewModel: (
      /*rowViewModel*/
      n[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_2*/
    n[3]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & /*viewModel*/
      1 && (s.viewModel = /*rowViewModel*/
      t[15]), e.$set(s);
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
      viewModel: (
        /*viewModel*/
        n[0].scenariosOnlyInRight.header
      )
    }
  });
  let i = (
    /*viewModel*/
    n[0].scenariosOnlyInRight.rows
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = fn(Gl(n, i, o));
  const r = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, a) {
      y(o, e, a), z(l, e, null);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(e, null);
      t = !0;
    },
    p(o, a) {
      const c = {};
      if (a[0] & /*viewModel*/
      1 && (c.viewModel = /*viewModel*/
      o[0].scenariosOnlyInRight.header), l.$set(c), a[0] & /*viewModel*/
      1) {
        i = /*viewModel*/
        o[0].scenariosOnlyInRight.rows;
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = Gl(o, i, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = fn(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = i.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < i.length; a += 1)
          g(s[a]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        w(s[a]);
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
    props: { viewModel: (
      /*rowViewModel*/
      n[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_3*/
    n[4]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & /*viewModel*/
      1 && (s.viewModel = /*rowViewModel*/
      t[15]), e.$set(s);
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
      viewModel: (
        /*viewModel*/
        n[0].scenariosWithDiffs.header
      )
    }
  });
  let i = (
    /*viewModel*/
    n[0].scenariosWithDiffs.rows
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = un(Wl(n, i, o));
  const r = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, a) {
      y(o, e, a), z(l, e, null);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(e, null);
      t = !0;
    },
    p(o, a) {
      const c = {};
      if (a[0] & /*viewModel*/
      1 && (c.viewModel = /*viewModel*/
      o[0].scenariosWithDiffs.header), l.$set(c), a[0] & /*viewModel*/
      1) {
        i = /*viewModel*/
        o[0].scenariosWithDiffs.rows;
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = Wl(o, i, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = un(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = i.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < i.length; a += 1)
          g(s[a]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        w(s[a]);
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
    props: { viewModel: (
      /*rowViewModel*/
      n[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_4*/
    n[5]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & /*viewModel*/
      1 && (s.viewModel = /*rowViewModel*/
      t[15]), e.$set(s);
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
      viewModel: (
        /*viewModel*/
        n[0].scenariosWithoutDiffs.header
      )
    }
  });
  let i = (
    /*viewModel*/
    n[0].scenariosWithoutDiffs.rows
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = hn(El(n, i, o));
  const r = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, a) {
      y(o, e, a), z(l, e, null);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(e, null);
      t = !0;
    },
    p(o, a) {
      const c = {};
      if (a[0] & /*viewModel*/
      1 && (c.viewModel = /*viewModel*/
      o[0].scenariosWithoutDiffs.header), l.$set(c), a[0] & /*viewModel*/
      1) {
        i = /*viewModel*/
        o[0].scenariosWithoutDiffs.rows;
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = El(o, i, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = hn(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = i.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < i.length; a += 1)
          g(s[a]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        w(s[a]);
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
    props: { viewModel: (
      /*rowViewModel*/
      n[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_5*/
    n[6]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & /*viewModel*/
      1 && (s.viewModel = /*rowViewModel*/
      t[15]), e.$set(s);
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
    props: { viewModel: (
      /*rowViewModel*/
      n[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler*/
    n[1]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i[0] & /*viewModel*/
      1 && (s.viewModel = /*rowViewModel*/
      t[15]), e.$set(s);
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
      viewModel: (
        /*viewGroupViewModel*/
        n[12].header
      )
    }
  });
  let i = (
    /*viewGroupViewModel*/
    n[12].rows
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = pn(Ol(n, i, o));
  const r = (o) => w(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = h("div"), q(l.$$.fragment);
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      p(e, "class", "section-container svelte-8opq0t");
    },
    m(o, a) {
      y(o, e, a), z(l, e, null);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(e, null);
      t = !0;
    },
    p(o, a) {
      const c = {};
      if (a[0] & /*viewModel*/
      1 && (c.viewModel = /*viewGroupViewModel*/
      o[12].header), l.$set(c), a[0] & /*viewModel*/
      1) {
        i = /*viewGroupViewModel*/
        o[12].rows;
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = Ol(o, i, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = pn(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = i.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < i.length; a += 1)
          g(s[a]);
        t = !0;
      }
    },
    o(o) {
      w(l.$$.fragment, o), s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        w(s[a]);
      t = !1;
    },
    d(o) {
      o && $(e), j(l), O(s, o);
    }
  };
}
function $o(n) {
  let e, l, t, i, s;
  const r = [ko, wo, bo], o = [];
  function a(c, f) {
    return (
      /*viewModel*/
      c[0].kind === "views" ? 0 : (
        /*viewModel*/
        c[0].kind === "by-scenario" ? 1 : (
          /*viewModel*/
          c[0].kind === "by-dataset" ? 2 : -1
        )
      )
    );
  }
  return ~(l = a(n)) && (t = o[l] = r[l](n)), {
    c() {
      e = h("div"), t && t.c(), i = h("div"), p(i, "class", "footer svelte-8opq0t"), p(e, "class", "comparison-summary-container svelte-8opq0t");
    },
    m(c, f) {
      y(c, e, f), ~l && o[l].m(e, null), b(e, i), s = !0;
    },
    p(c, f) {
      let d = l;
      l = a(c), l === d ? ~l && o[l].p(c, f) : (t && (x(), w(o[d], 1, 1, () => {
        o[d] = null;
      }), K()), ~l ? (t = o[l], t ? t.p(c, f) : (t = o[l] = r[l](c), t.c()), g(t, 1), t.m(e, i)) : t = null);
    },
    i(c) {
      s || (g(t), s = !0);
    },
    o(c) {
      w(t), s = !1;
    },
    d(c) {
      c && $(e), ~l && o[l].d();
    }
  };
}
function yo(n, e, l) {
  let { viewModel: t } = e;
  function i(_) {
    ae.call(this, n, _);
  }
  function s(_) {
    ae.call(this, n, _);
  }
  function r(_) {
    ae.call(this, n, _);
  }
  function o(_) {
    ae.call(this, n, _);
  }
  function a(_) {
    ae.call(this, n, _);
  }
  function c(_) {
    ae.call(this, n, _);
  }
  function f(_) {
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
    r,
    o,
    a,
    c,
    f,
    d,
    u,
    m,
    v
  ];
}
class vt extends ee {
  constructor(e) {
    super(), Y(this, e, yo, $o, X, { viewModel: 0 }, go, [-1, -1]);
  }
}
function Mo(n) {
  ne(n, "svelte-7mv27e", "td.svelte-7mv27e{padding:0;height:1.8rem}.name.svelte-7mv27e{padding-right:3rem}.row-header{color:#aaa}.cell.svelte-7mv27e{display:flex;width:100%;flex-direction:row;align-items:baseline;font-family:monospace}.cell.dim.svelte-7mv27e{color:#777}.value.svelte-7mv27e{flex:1;padding-right:0.4rem;text-align:right}.change.svelte-7mv27e{flex:1;padding-left:0.4rem;text-align:left;font-size:0.8em}.plot.svelte-7mv27e{width:20rem;padding-left:2rem;padding-right:2rem;cursor:pointer}");
}
function _n(n) {
  let e, l, t, i, s;
  return l = new rt({
    props: {
      viewModel: (
        /*viewModel*/
        n[0].dotPlot
      ),
      colorClass: (
        /*modelBgClass*/
        n[2]
      )
    }
  }), {
    c() {
      e = h("td"), q(l.$$.fragment), p(e, "class", "plot svelte-7mv27e");
    },
    m(r, o) {
      y(r, e, o), z(l, e, null), t = !0, i || (s = re(
        e,
        "click",
        /*onShowPerf*/
        n[3]
      ), i = !0);
    },
    p(r, o) {
      const a = {};
      o & /*viewModel*/
      1 && (a.viewModel = /*viewModel*/
      r[0].dotPlot), l.$set(a);
    },
    i(r) {
      t || (g(l.$$.fragment, r), t = !0);
    },
    o(r) {
      w(l.$$.fragment, r), t = !1;
    },
    d(r) {
      r && $(e), j(l), i = !1, s();
    }
  };
}
function Ro(n) {
  let e, l = (
    /*viewModel*/
    n[0].modelName + ""
  ), t, i, s, r, o = (
    /*viewModel*/
    n[0].inputs + ""
  ), a, c, f, d, u, m = (
    /*viewModel*/
    n[0].outputs + ""
  ), v, _, k, R, M, C = (
    /*viewModel*/
    n[0].modelSize + ""
  ), S, D, N = (
    /*viewModel*/
    n[0].modelSizePctChange + ""
  ), V, P, T, A, L = (
    /*viewModel*/
    n[0].dataSize + ""
  ), G, B, Z = (
    /*viewModel*/
    n[0].dataSizePctChange + ""
  ), ie, pe, we, J, Q = (
    /*viewModel*/
    n[0].avgTime + ""
  ), U, le, ue = (
    /*viewModel*/
    n[0].avgTimePctChange + ""
  ), ce, ve, _e, Me, Se = (
    /*viewModel*/
    n[0].minTime + ""
  ), De, Je, Be, xe, We, Ge = (
    /*viewModel*/
    n[0].maxTime + ""
  ), Qe, Ye, Ke, me, fe = (
    /*viewModel*/
    n[0].dotPlot && _n(n)
  );
  return {
    c() {
      e = h("td"), t = I(l), i = h("td"), s = h("div"), r = h("div"), a = I(o), c = h("div"), f = h("td"), d = h("div"), u = h("div"), v = I(m), _ = h("div"), k = h("td"), R = h("div"), M = h("div"), S = I(C), D = h("div"), V = I(N), P = h("td"), T = h("div"), A = h("div"), G = I(L), B = h("div"), ie = I(Z), pe = h("td"), we = h("div"), J = h("div"), U = I(Q), le = h("div"), ce = I(ue), ve = h("td"), _e = h("div"), Me = h("div"), De = I(Se), Je = h("div"), Be = h("td"), xe = h("div"), We = h("div"), Qe = I(Ge), Ye = h("div"), fe && fe.c(), Ke = H(), p(e, "class", "name " + /*modelTextClass*/
      n[1] + " svelte-7mv27e"), p(r, "class", "value svelte-7mv27e"), p(c, "class", "change svelte-7mv27e"), p(s, "class", "cell svelte-7mv27e"), p(i, "class", "svelte-7mv27e"), p(u, "class", "value svelte-7mv27e"), p(_, "class", "change svelte-7mv27e"), p(d, "class", "cell svelte-7mv27e"), p(f, "class", "svelte-7mv27e"), p(M, "class", "value svelte-7mv27e"), p(D, "class", "change svelte-7mv27e"), p(R, "class", "cell svelte-7mv27e"), p(k, "class", "svelte-7mv27e"), p(A, "class", "value svelte-7mv27e"), p(B, "class", "change svelte-7mv27e"), p(T, "class", "cell svelte-7mv27e"), p(P, "class", "svelte-7mv27e"), p(J, "class", "value svelte-7mv27e"), p(le, "class", "change svelte-7mv27e"), p(we, "class", "cell svelte-7mv27e"), p(pe, "class", "svelte-7mv27e"), p(Me, "class", "value svelte-7mv27e"), p(Je, "class", "change svelte-7mv27e"), p(_e, "class", "cell dim svelte-7mv27e"), p(ve, "class", "svelte-7mv27e"), p(We, "class", "value svelte-7mv27e"), p(Ye, "class", "change svelte-7mv27e"), p(xe, "class", "cell dim svelte-7mv27e"), p(Be, "class", "svelte-7mv27e");
    },
    m(F, te) {
      y(F, e, te), b(e, t), y(F, i, te), b(i, s), b(s, r), b(r, a), b(s, c), y(F, f, te), b(f, d), b(d, u), b(u, v), b(d, _), y(F, k, te), b(k, R), b(R, M), b(M, S), b(R, D), b(D, V), y(F, P, te), b(P, T), b(T, A), b(A, G), b(T, B), b(B, ie), y(F, pe, te), b(pe, we), b(we, J), b(J, U), b(we, le), b(le, ce), y(F, ve, te), b(ve, _e), b(_e, Me), b(Me, De), b(_e, Je), y(F, Be, te), b(Be, xe), b(xe, We), b(We, Qe), b(xe, Ye), fe && fe.m(F, te), y(F, Ke, te), me = !0;
    },
    p(F, [te]) {
      (!me || te & /*viewModel*/
      1) && l !== (l = /*viewModel*/
      F[0].modelName + "") && W(t, l), (!me || te & /*viewModel*/
      1) && o !== (o = /*viewModel*/
      F[0].inputs + "") && W(a, o), (!me || te & /*viewModel*/
      1) && m !== (m = /*viewModel*/
      F[0].outputs + "") && W(v, m), (!me || te & /*viewModel*/
      1) && C !== (C = /*viewModel*/
      F[0].modelSize + "") && W(S, C), (!me || te & /*viewModel*/
      1) && N !== (N = /*viewModel*/
      F[0].modelSizePctChange + "") && W(V, N), (!me || te & /*viewModel*/
      1) && L !== (L = /*viewModel*/
      F[0].dataSize + "") && W(G, L), (!me || te & /*viewModel*/
      1) && Z !== (Z = /*viewModel*/
      F[0].dataSizePctChange + "") && W(ie, Z), (!me || te & /*viewModel*/
      1) && Q !== (Q = /*viewModel*/
      F[0].avgTime + "") && W(U, Q), (!me || te & /*viewModel*/
      1) && ue !== (ue = /*viewModel*/
      F[0].avgTimePctChange + "") && W(ce, ue), (!me || te & /*viewModel*/
      1) && Se !== (Se = /*viewModel*/
      F[0].minTime + "") && W(De, Se), (!me || te & /*viewModel*/
      1) && Ge !== (Ge = /*viewModel*/
      F[0].maxTime + "") && W(Qe, Ge), /*viewModel*/
      F[0].dotPlot ? fe ? (fe.p(F, te), te & /*viewModel*/
      1 && g(fe, 1)) : (fe = _n(F), fe.c(), g(fe, 1), fe.m(Ke.parentNode, Ke)) : fe && (x(), w(fe, 1, 1, () => {
        fe = null;
      }), K());
    },
    i(F) {
      me || (g(fe), me = !0);
    },
    o(F) {
      w(fe), me = !1;
    },
    d(F) {
      F && $(e), F && $(i), F && $(f), F && $(k), F && $(P), F && $(pe), F && $(ve), F && $(Be), fe && fe.d(F), F && $(Ke);
    }
  };
}
function Co(n, e, l) {
  let { viewModel: t } = e;
  const i = t.datasetClassIndex, s = i !== void 0 ? `dataset-color-${i}` : "row-header", r = i !== void 0 ? `dataset-bg-${i}` : "", o = Ne();
  function a() {
    o("command", { cmd: "show-perf" });
  }
  return n.$$set = (c) => {
    "viewModel" in c && l(0, t = c.viewModel);
  }, [t, s, r, a];
}
class tt extends ee {
  constructor(e) {
    super(), Y(this, e, Co, Ro, X, { viewModel: 0 }, Mo);
  }
}
function So(n) {
  ne(n, "svelte-18acnq2", "table.svelte-18acnq2{border-collapse:collapse}th.svelte-18acnq2{color:#aaa;text-align:left;font-family:Roboto;font-weight:500}th.dim.svelte-18acnq2{color:#555}th.svelte-18acnq2:nth-child(2),th.svelte-18acnq2:nth-child(3){width:6rem}th.svelte-18acnq2:nth-child(4),th.svelte-18acnq2:nth-child(5){width:10rem}th.svelte-18acnq2:nth-child(6){width:8rem}th.svelte-18acnq2:nth-child(7),th.svelte-18acnq2:nth-child(8){width:8rem}");
}
function Do(n) {
  let e, l, t, i, s, r, o, a, c;
  return i = new tt({
    props: { viewModel: (
      /*viewModel*/
      n[0].row1
    ) }
  }), i.$on(
    "command",
    /*command_handler*/
    n[1]
  ), r = new tt({
    props: { viewModel: (
      /*viewModel*/
      n[0].row2
    ) }
  }), r.$on(
    "command",
    /*command_handler_1*/
    n[2]
  ), a = new tt({
    props: { viewModel: (
      /*viewModel*/
      n[0].row3
    ) }
  }), a.$on(
    "command",
    /*command_handler_2*/
    n[3]
  ), {
    c() {
      e = h("table"), l = h("tr"), l.innerHTML = '<th class="svelte-18acnq2"></th><th class="svelte-18acnq2">inputs</th><th class="svelte-18acnq2">outputs</th><th class="svelte-18acnq2">model size (bytes)</th><th class="svelte-18acnq2">data size (bytes)</th><th class="svelte-18acnq2">avg time (ms)</th><th class="dim svelte-18acnq2">min time (ms)</th><th class="dim svelte-18acnq2">max time (ms)</th><th class="svelte-18acnq2"></th>', t = h("tr"), q(i.$$.fragment), s = h("tr"), q(r.$$.fragment), o = h("tr"), q(a.$$.fragment), p(e, "class", "header svelte-18acnq2");
    },
    m(f, d) {
      y(f, e, d), b(e, l), b(e, t), z(i, t, null), b(e, s), z(r, s, null), b(e, o), z(a, o, null), c = !0;
    },
    p(f, [d]) {
      const u = {};
      d & /*viewModel*/
      1 && (u.viewModel = /*viewModel*/
      f[0].row1), i.$set(u);
      const m = {};
      d & /*viewModel*/
      1 && (m.viewModel = /*viewModel*/
      f[0].row2), r.$set(m);
      const v = {};
      d & /*viewModel*/
      1 && (v.viewModel = /*viewModel*/
      f[0].row3), a.$set(v);
    },
    i(f) {
      c || (g(i.$$.fragment, f), g(r.$$.fragment, f), g(a.$$.fragment, f), c = !0);
    },
    o(f) {
      w(i.$$.fragment, f), w(r.$$.fragment, f), w(a.$$.fragment, f), c = !1;
    },
    d(f) {
      f && $(e), j(i), j(r), j(a);
    }
  };
}
function Lo(n, e, l) {
  let { viewModel: t } = e;
  function i(o) {
    ae.call(this, n, o);
  }
  function s(o) {
    ae.call(this, n, o);
  }
  function r(o) {
    ae.call(this, n, o);
  }
  return n.$$set = (o) => {
    "viewModel" in o && l(0, t = o.viewModel);
  }, [t, i, s, r];
}
class To extends ee {
  constructor(e) {
    super(), Y(this, e, Lo, Do, X, { viewModel: 0 }, So);
  }
}
function Vo(n) {
  ne(n, "svelte-gl55w2", ".tab-bar.svelte-gl55w2{position:sticky;top:0;display:flex;flex-direction:row;gap:3rem;background-color:#272727;z-index:1000;margin:0 -1rem;padding:0 1rem;box-shadow:0 1rem 0.5rem -0.5rem rgba(0, 0, 0, 0.8)}.tab-item.svelte-gl55w2{display:flex;flex-direction:column;padding:0.5rem 3rem 0.3rem 0;cursor:pointer;opacity:0.7;border-bottom:solid 1px transparent}.tab-item.svelte-gl55w2:hover{opacity:1}.tab-item.selected.svelte-gl55w2{opacity:1;border-bottom:solid 1px #555}.tab-title.svelte-gl55w2{font-size:1.6rem;font-weight:700;color:#fff;margin-bottom:0.2rem;cursor:pointer}.tab-subtitle.svelte-gl55w2{font-size:1rem;font-weight:400}");
}
function gn(n, e, l) {
  const t = n.slice();
  return t[8] = e[l], t[10] = l, t;
}
function bn(n) {
  let e, l, t = (
    /*item*/
    n[8].title + ""
  ), i, s, r = (
    /*item*/
    n[8].subtitle + ""
  ), o, a, c, f;
  function d() {
    return (
      /*click_handler*/
      n[6](
        /*index*/
        n[10]
      )
    );
  }
  return {
    c() {
      e = h("div"), l = h("div"), i = I(t), s = h("div"), o = I(r), p(l, "class", "tab-title svelte-gl55w2"), p(s, "class", a = "tab-subtitle " + /*item*/
      n[8].subtitleClass + " svelte-gl55w2"), p(e, "class", "tab-item svelte-gl55w2"), he(
        e,
        "selected",
        /*item*/
        n[8].id === /*$selectedItemId*/
        n[1]
      );
    },
    m(u, m) {
      y(u, e, m), b(e, l), b(l, i), b(e, s), b(s, o), c || (f = re(e, "click", d), c = !0);
    },
    p(u, m) {
      n = u, m & /*viewModel*/
      1 && t !== (t = /*item*/
      n[8].title + "") && W(i, t), m & /*viewModel*/
      1 && r !== (r = /*item*/
      n[8].subtitle + "") && W(o, r), m & /*viewModel*/
      1 && a !== (a = "tab-subtitle " + /*item*/
      n[8].subtitleClass + " svelte-gl55w2") && p(s, "class", a), m & /*viewModel, $selectedItemId*/
      3 && he(
        e,
        "selected",
        /*item*/
        n[8].id === /*$selectedItemId*/
        n[1]
      );
    },
    d(u) {
      u && $(e), c = !1, f();
    }
  };
}
function Io(n) {
  let e, l, t, i = (
    /*viewModel*/
    n[0].items
  ), s = [];
  for (let r = 0; r < i.length; r += 1)
    s[r] = bn(gn(n, i, r));
  return {
    c() {
      e = h("div");
      for (let r = 0; r < s.length; r += 1)
        s[r].c();
      p(e, "class", "tab-bar svelte-gl55w2");
    },
    m(r, o) {
      y(r, e, o);
      for (let a = 0; a < s.length; a += 1)
        s[a] && s[a].m(e, null);
      l || (t = [
        re(
          window,
          "keydown",
          /*onKeyDown*/
          n[4]
        ),
        re(
          e,
          "command",
          /*command_handler*/
          n[5]
        )
      ], l = !0);
    },
    p(r, [o]) {
      if (o & /*viewModel, $selectedItemId, onItemClicked*/
      11) {
        i = /*viewModel*/
        r[0].items;
        let a;
        for (a = 0; a < i.length; a += 1) {
          const c = gn(r, i, a);
          s[a] ? s[a].p(c, o) : (s[a] = bn(c), s[a].c(), s[a].m(e, null));
        }
        for (; a < s.length; a += 1)
          s[a].d(1);
        s.length = i.length;
      }
    },
    i: E,
    o: E,
    d(r) {
      r && $(e), O(s, r), l = !1, $e(t);
    }
  };
}
function zo(n, e, l) {
  let t, { viewModel: i } = e;
  const s = i.selectedItemId;
  ge(n, s, (d) => l(1, t = d));
  const r = Ne();
  function o(d) {
    i.selectedIndex.set(d);
  }
  function a(d) {
    d.key === "ArrowLeft" ? (i.selectedIndex.update((u) => u > 0 ? u - 1 : u), d.preventDefault()) : d.key === "ArrowRight" ? (i.selectedIndex.update((u) => u < i.items.length - 1 ? u + 1 : u), d.preventDefault()) : d.key === "ArrowDown" && (r("command", {
      cmd: "enter-tab",
      itemId: t
    }), d.preventDefault());
  }
  function c(d) {
    ae.call(this, n, d);
  }
  const f = (d) => o(d);
  return n.$$set = (d) => {
    "viewModel" in d && l(0, i = d.viewModel);
  }, [
    i,
    t,
    s,
    o,
    a,
    c,
    f
  ];
}
class jo extends ee {
  constructor(e) {
    super(), Y(this, e, zo, Io, X, { viewModel: 0 }, Vo);
  }
}
function Po(n) {
  ne(n, "svelte-hf3w0v", ".summary-container.svelte-hf3w0v{display:flex;flex-direction:column;flex:1}.scroll-container.svelte-hf3w0v{position:relative;display:flex;flex:1 1 1px;flex-direction:column;padding:0 1rem;overflow:auto}.header-container.svelte-hf3w0v{margin-bottom:1rem}.line.svelte-hf3w0v{min-height:1px;margin-bottom:0.5rem;background-color:#555}");
}
function wn(n) {
  let e, l, t, i;
  return l = new To({
    props: {
      viewModel: (
        /*viewModel*/
        n[0].statsTableViewModel
      )
    }
  }), l.$on(
    "command",
    /*command_handler*/
    n[3]
  ), {
    c() {
      e = h("div"), q(l.$$.fragment), t = h("div"), p(e, "class", "header-container svelte-hf3w0v"), p(t, "class", "line svelte-hf3w0v");
    },
    m(s, r) {
      y(s, e, r), z(l, e, null), y(s, t, r), i = !0;
    },
    p(s, r) {
      const o = {};
      r & /*viewModel*/
      1 && (o.viewModel = /*viewModel*/
      s[0].statsTableViewModel), l.$set(o);
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
function qo(n) {
  let e, l;
  return e = new vt({
    props: {
      viewModel: (
        /*viewModel*/
        n[0].comparisonsByDatasetSummaryViewModel
      )
    }
  }), e.$on(
    "command",
    /*command_handler_4*/
    n[7]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & /*viewModel*/
      1 && (s.viewModel = /*viewModel*/
      t[0].comparisonsByDatasetSummaryViewModel), e.$set(s);
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
function No(n) {
  let e, l;
  return e = new vt({
    props: {
      viewModel: (
        /*viewModel*/
        n[0].comparisonsByScenarioSummaryViewModel
      )
    }
  }), e.$on(
    "command",
    /*command_handler_3*/
    n[6]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & /*viewModel*/
      1 && (s.viewModel = /*viewModel*/
      t[0].comparisonsByScenarioSummaryViewModel), e.$set(s);
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
      viewModel: (
        /*viewModel*/
        n[0].comparisonViewsSummaryViewModel
      )
    }
  }), e.$on(
    "command",
    /*command_handler_2*/
    n[5]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & /*viewModel*/
      1 && (s.viewModel = /*viewModel*/
      t[0].comparisonViewsSummaryViewModel), e.$set(s);
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
  return e = new co({
    props: {
      viewModel: (
        /*viewModel*/
        n[0].checkSummaryViewModel
      )
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
      i & /*viewModel*/
      1 && (s.viewModel = /*viewModel*/
      t[0].checkSummaryViewModel), e.$set(s);
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
  let e, l, t, i, s, r, o, a = (
    /*viewModel*/
    n[0].statsTableViewModel && wn(n)
  );
  i = new jo({
    props: {
      viewModel: (
        /*viewModel*/
        n[0].tabBarViewModel
      )
    }
  }), i.$on(
    "command",
    /*command_handler_1*/
    n[4]
  );
  const c = [xo, Bo, No, qo], f = [];
  function d(u, m) {
    return (
      /*$selectedTabId*/
      u[1] === "checks" ? 0 : (
        /*$selectedTabId*/
        u[1] === "comp-views" ? 1 : (
          /*$selectedTabId*/
          u[1] === "comps-by-scenario" ? 2 : (
            /*$selectedTabId*/
            u[1] === "comps-by-dataset" ? 3 : -1
          )
        )
      )
    );
  }
  return ~(s = d(n)) && (r = f[s] = c[s](n)), {
    c() {
      e = h("div"), l = h("div"), a && a.c(), t = H(), q(i.$$.fragment), r && r.c(), p(l, "class", "scroll-container svelte-hf3w0v"), p(e, "class", "summary-container svelte-hf3w0v");
    },
    m(u, m) {
      y(u, e, m), b(e, l), a && a.m(l, null), b(l, t), z(i, l, null), ~s && f[s].m(l, null), o = !0;
    },
    p(u, [m]) {
      /*viewModel*/
      u[0].statsTableViewModel ? a ? (a.p(u, m), m & /*viewModel*/
      1 && g(a, 1)) : (a = wn(u), a.c(), g(a, 1), a.m(l, t)) : a && (x(), w(a, 1, 1, () => {
        a = null;
      }), K());
      const v = {};
      m & /*viewModel*/
      1 && (v.viewModel = /*viewModel*/
      u[0].tabBarViewModel), i.$set(v);
      let _ = s;
      s = d(u), s === _ ? ~s && f[s].p(u, m) : (r && (x(), w(f[_], 1, 1, () => {
        f[_] = null;
      }), K()), ~s ? (r = f[s], r ? r.p(u, m) : (r = f[s] = c[s](u), r.c()), g(r, 1), r.m(l, null)) : r = null);
    },
    i(u) {
      o || (g(a), g(i.$$.fragment, u), g(r), o = !0);
    },
    o(u) {
      w(a), w(i.$$.fragment, u), w(r), o = !1;
    },
    d(u) {
      u && $(e), a && a.d(), j(i), ~s && f[s].d();
    }
  };
}
function Eo(n, e, l) {
  let t, { viewModel: i } = e;
  const s = i.tabBarViewModel.selectedItemId;
  ge(n, s, (d) => l(1, t = d));
  function r(d) {
    ae.call(this, n, d);
  }
  function o(d) {
    ae.call(this, n, d);
  }
  function a(d) {
    ae.call(this, n, d);
  }
  function c(d) {
    ae.call(this, n, d);
  }
  function f(d) {
    ae.call(this, n, d);
  }
  return n.$$set = (d) => {
    "viewModel" in d && l(0, i = d.viewModel);
  }, [
    i,
    t,
    s,
    r,
    o,
    a,
    c,
    f
  ];
}
class Wo extends ee {
  constructor(e) {
    super(), Y(this, e, Eo, Ko, X, { viewModel: 0 }, Po);
  }
}
function Go(n) {
  ne(n, "svelte-1ul5lao", ".app-container.svelte-1ul5lao{display:flex;flex-direction:column;flex:1}.loading-container.svelte-1ul5lao{display:flex;flex-direction:column;flex:1 1 auto;align-items:center;justify-content:center}.progress-container.svelte-1ul5lao{display:flex;height:100vh;align-items:center;justify-content:center;font-size:2em}");
}
function Ao(n) {
  return {
    c: E,
    m: E,
    p: E,
    i: E,
    o: E,
    d: E
  };
}
function Fo(n) {
  let e, l, t, i, s;
  l = new Ts({
    props: {
      viewModel: (
        /*viewModel*/
        n[0].headerViewModel
      )
    }
  }), l.$on(
    "command",
    /*onCommand*/
    n[9]
  );
  const r = [Xo, Uo, Oo, Ho], o = [];
  function a(c, f) {
    return (
      /*$checksInProgress*/
      c[5] ? 0 : (
        /*viewMode*/
        c[3] === "comparison-detail" ? 1 : (
          /*viewMode*/
          c[3] === "perf" ? 2 : 3
        )
      )
    );
  }
  return t = a(n), i = o[t] = r[t](n), {
    c() {
      e = h("div"), q(l.$$.fragment), i.c(), p(e, "class", "app-container svelte-1ul5lao");
    },
    m(c, f) {
      y(c, e, f), z(l, e, null), o[t].m(e, null), s = !0;
    },
    p(c, f) {
      const d = {};
      f & /*viewModel*/
      1 && (d.viewModel = /*viewModel*/
      c[0].headerViewModel), l.$set(d);
      let u = t;
      t = a(c), t === u ? o[t].p(c, f) : (x(), w(o[u], 1, 1, () => {
        o[u] = null;
      }), K(), i = o[t], i ? i.p(c, f) : (i = o[t] = r[t](c), i.c()), g(i, 1), i.m(e, null));
    },
    i(c) {
      s || (g(l.$$.fragment, c), g(i), s = !0);
    },
    o(c) {
      w(l.$$.fragment, c), w(i), s = !1;
    },
    d(c) {
      c && $(e), j(l), o[t].d();
    }
  };
}
function Ho(n) {
  let e, l;
  return e = new Wo({
    props: {
      viewModel: (
        /*viewModel*/
        n[0].summaryViewModel
      )
    }
  }), e.$on(
    "command",
    /*onCommand*/
    n[9]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & /*viewModel*/
      1 && (s.viewModel = /*viewModel*/
      t[0].summaryViewModel), e.$set(s);
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
function Oo(n) {
  let e, l;
  return e = new xs({
    props: { viewModel: (
      /*perfViewModel*/
      n[2]
    ) }
  }), e.$on(
    "command",
    /*onCommand*/
    n[9]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & /*perfViewModel*/
      4 && (s.viewModel = /*perfViewModel*/
      t[2]), e.$set(s);
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
  return e = new bs({
    props: {
      viewModel: (
        /*compareDetailViewModel*/
        n[1]
      )
    }
  }), e.$on(
    "command",
    /*onCommand*/
    n[9]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & /*compareDetailViewModel*/
      2 && (s.viewModel = /*compareDetailViewModel*/
      t[1]), e.$set(s);
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
  let e, l, t;
  return {
    c() {
      e = h("div"), l = h("div"), t = I(
        /*$progress*/
        n[6]
      ), p(l, "class", "progress"), p(e, "class", "progress-container svelte-1ul5lao");
    },
    m(i, s) {
      y(i, e, s), b(e, l), b(l, t);
    },
    p(i, s) {
      s & /*$progress*/
      64 && W(
        t,
        /*$progress*/
        i[6]
      );
    },
    i: E,
    o: E,
    d(i) {
      i && $(e);
    }
  };
}
function Zo(n) {
  let e;
  return {
    c() {
      e = h("div"), p(e, "class", "loading-container svelte-1ul5lao");
    },
    m(l, t) {
      y(l, e, t);
    },
    p: E,
    i: E,
    o: E,
    d(l) {
      l && $(e);
    }
  };
}
function Jo(n) {
  let e, l, t, i = {
    ctx: n,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Zo,
    then: Fo,
    catch: Ao,
    value: 12,
    blocks: [, , ,]
  };
  return bt(l = /*viewReady*/
  n[4], i), {
    c() {
      e = H(), i.block.c();
    },
    m(s, r) {
      y(s, e, r), i.block.m(s, i.anchor = r), i.mount = () => e.parentNode, i.anchor = e, t = !0;
    },
    p(s, [r]) {
      n = s, i.ctx = n, r & /*viewReady*/
      16 && l !== (l = /*viewReady*/
      n[4]) && bt(l, i) || vi(i, n, r);
    },
    i(s) {
      t || (g(i.block), t = !0);
    },
    o(s) {
      for (let r = 0; r < 3; r += 1) {
        const o = i.blocks[r];
        w(o);
      }
      t = !1;
    },
    d(s) {
      s && $(e), i.block.d(s), i.token = null, i = null;
    }
  };
}
function Qo(n, e, l) {
  let t, i, { viewModel: s } = e;
  const r = s.checksInProgress;
  ge(n, r, (_) => l(5, t = _));
  const o = s.progress;
  ge(n, o, (_) => l(6, i = _));
  let a, c, f = "summary";
  const d = new Xn("Roboto Condensed", { weight: 400 });
  let u = !1;
  d.load().then(() => {
    l(10, u = !0);
  });
  let m = !1;
  function v(_) {
    const k = _.detail, R = k.cmd;
    switch (R) {
      case "show-summary":
        l(1, a = void 0), l(3, f = "summary");
        break;
      case "enter-tab":
        if (k.itemId !== "checks") {
          let M;
          switch (k.itemId) {
            case "comp-views":
              M = "views";
              break;
            case "comps-by-scenario":
              M = "by-scenario";
              break;
            case "comps-by-dataset":
              M = "by-dataset";
              break;
            default:
              return;
          }
          l(1, a = s.createCompareDetailViewModelForSummaryRowIndex(M, 0)), l(3, f = "comparison-detail");
        }
        break;
      case "show-comparison-detail":
        l(1, a = s.createCompareDetailViewModelForSummaryRow(k.summaryRow)), l(3, f = "comparison-detail");
        break;
      case "show-comparison-detail-at-index":
        l(1, a = s.createCompareDetailViewModelForSummaryRowIndex(k.kind, k.index)), l(3, f = "comparison-detail");
        break;
      case "show-perf":
        c || l(2, c = s.createPerfViewModel()), l(3, f = "perf");
        break;
      default:
        console.error(`ERROR: Unhandled command ${R}`);
        break;
    }
  }
  return n.$$set = (_) => {
    "viewModel" in _ && l(0, s = _.viewModel);
  }, n.$$.update = () => {
    n.$$.dirty & /*graphFontReady, viewModel*/
    1025 && u && (l(4, m = !0), s.runTestSuite());
  }, [
    s,
    a,
    c,
    f,
    m,
    t,
    i,
    r,
    o,
    v,
    u
  ];
}
class Yo extends ee {
  constructor(e) {
    super(), Y(this, e, Qo, Jo, X, { viewModel: 0 }, Go);
  }
}
function kn(n) {
  let e, l;
  return e = new Yo({
    props: { viewModel: (
      /*appViewModel*/
      n[0]
    ) }
  }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), l = !0;
    },
    p(t, i) {
      const s = {};
      i & /*appViewModel*/
      1 && (s.viewModel = /*appViewModel*/
      t[0]), e.$set(s);
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
function er(n) {
  let e, l, t = (
    /*appViewModel*/
    n[0] && kn(n)
  );
  return {
    c() {
      t && t.c(), e = H();
    },
    m(i, s) {
      t && t.m(i, s), y(i, e, s), l = !0;
    },
    p(i, [s]) {
      /*appViewModel*/
      i[0] ? t ? (t.p(i, s), s & /*appViewModel*/
      1 && g(t, 1)) : (t = kn(i), t.c(), g(t, 1), t.m(e.parentNode, e)) : t && (x(), w(t, 1, 1, () => {
        t = null;
      }), K());
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
function tr(n, e, l) {
  let { appViewModel: t } = e;
  return n.$$set = (i) => {
    "appViewModel" in i && l(0, t = i.appViewModel);
  }, [t];
}
class lr extends ee {
  constructor(e) {
    super(), Y(this, e, tr, er, X, { appViewModel: 0 });
  }
}
function zn(n, e, l) {
  const t = [];
  return n.outputVarL && n.outputVarR ? n.outputVarR.varName !== n.outputVarL.varName && t.push(Pe("warn", `variable renamed, previously '${n.outputVarL.varName}'`)) : n.outputVarL !== void 0 ? t.push(Pe("warn", `variable only defined in ${Ce(e, "left")}`)) : n.outputVarR !== void 0 && t.push(Pe("warn", `variable only defined in ${Ce(l, "right")}`)), t;
}
function jn(n, e, l) {
  var c, f;
  const t = [];
  if (n.settings.kind === "all-inputs-settings")
    return [];
  const i = [], s = [], r = [];
  for (const d of n.settings.inputs) {
    const u = (c = d.stateL.error) == null ? void 0 : c.kind, m = (f = d.stateR.error) == null ? void 0 : f.kind, v = u === "unknown-input", _ = m === "unknown-input", k = u === "invalid-value", R = m === "invalid-value";
    if (v || _) {
      const M = { requestedName: d.requestedName, kind: "unknown-input" };
      v && _ ? i.push(M) : v ? s.push(M) : _ && r.push(M);
    } else if (k || R) {
      const M = { requestedName: d.requestedName, kind: "invalid-value" };
      k && R ? i.push(M) : k ? s.push(M) : R && r.push(M);
    }
  }
  function o(d, u) {
    const m = d.filter((v) => v.kind === u).map((v) => `'${v.requestedName}'`);
    if (m.length !== 0)
      return u === "unknown-input" ? `unknown ${m.length === 1 ? "input" : "inputs"} ${m.join(", ")}` : `value out of range for ${m.join(", ")}`;
  }
  function a(d) {
    return o(d, "unknown-input") || o(d, "invalid-value");
  }
  if (i.length > 0)
    t.push(Pe("err", `invalid scenario: ${a(i)}`));
  else if (s.length > 0) {
    const d = `scenario not valid in ${Ce(e, "left")}`;
    t.push(Pe("warn", `${d}: ${a(s)}`));
  } else if (r.length > 0) {
    const d = `scenario not valid in ${Ce(l, "right")}`;
    t.push(Pe("warn", `${d}: ${a(r)}`));
  }
  return t;
}
function Pe(n, e) {
  return `<span class="annotation"><span class="${`status-color-${n === "err" ? "failed" : "warning"}`}">${n === "err" ? "✗" : "‼"}</span>&ensp;${e}</span>`;
}
function nr(n, e, l) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e) {
    const o = n.scenarios.getScenario(r.s);
    if (o === void 0)
      continue;
    let a, c;
    switch (l) {
      case "dataset": {
        const u = n.datasets.getDataset(r.d);
        if (u === void 0)
          continue;
        const m = u.outputVarR || u.outputVarL;
        a = m.varName, c = m.sourceName;
        break;
      }
      case "scenario": {
        a = o.title, c = o.subtitle;
        break;
      }
      default:
        ye(l);
    }
    let f = t.get(a);
    f === void 0 && (f = {
      title: a,
      totalMaxDiff: 0,
      items: []
    }, t.set(a, f));
    const d = {
      title: a,
      subtitle: c,
      scenario: o,
      testSummary: r
    };
    f.items.push(d), f.totalMaxDiff += d.testSummary.md;
  }
  return [...t.values()].sort((r, o) => r.totalMaxDiff > o.totalMaxDiff ? -1 : r.totalMaxDiff < o.totalMaxDiff ? 1 : 0);
}
function Pn(n, e, l, t, i) {
  var m, v, _, k;
  const s = (R, M) => new Dn(n, e, M, l, R), r = (m = n.bundleL.model.modelSpec.graphSpecs) == null ? void 0 : m.find((R) => R.id === t), o = (v = n.bundleR.model.modelSpec.graphSpecs) == null ? void 0 : v.find((R) => R.id === t), a = s(r, "left"), c = s(o, "right"), f = /* @__PURE__ */ new Set();
  if (r)
    for (const R of r.datasets)
      f.add(R.datasetKey);
  if (o)
    for (const R of o.datasets)
      f.add(R.datasetKey);
  const d = [];
  let u = 0;
  if (i.inclusion === "both")
    for (const R of f) {
      const M = (_ = r == null ? void 0 : r.datasets) == null ? void 0 : _.find((ie) => ie.datasetKey === R), C = (k = o == null ? void 0 : o.datasets) == null ? void 0 : k.find((ie) => ie.datasetKey === R), S = M == null ? void 0 : M.varName, D = C == null ? void 0 : C.varName, N = (M == null ? void 0 : M.color) || "#777", V = (C == null ? void 0 : C.color) || "#777", P = M == null ? void 0 : M.label, T = C == null ? void 0 : C.label, A = i.datasetReports.find((ie) => ie.datasetKey === R);
      let L = 0;
      if (A) {
        if (A.maxDiff === void 0 || A.maxDiff === 0)
          continue;
        L = A.maxDiff, L > u && (u = L);
      }
      const B = `bucket-color-${pt(L, n.thresholds)}`, Z = new Ln(
        n,
        e,
        "",
        "",
        l,
        R
      );
      d.push({
        datasetKey: R,
        nameL: S,
        nameR: D,
        legendColorL: N,
        legendColorR: V,
        legendLabelL: P,
        legendLabelR: T,
        bucketClass: B,
        maxDiff: L,
        detailBoxViewModel: Z,
        detailBoxVisible: de(!1)
      });
    }
  return {
    graphId: t,
    graphL: a,
    graphR: c,
    metadataRows: i.metadataReports,
    datasetRows: d,
    maxDiffPct: u
  };
}
function ir(n, e, l, t, i, s, r) {
  switch (l.group.kind) {
    case "by-dataset":
      return sr(
        n,
        e,
        l,
        s,
        r
      );
    case "by-scenario":
      return or(
        n,
        e,
        l,
        t,
        i,
        s,
        r
      );
    default:
      ye(l.group.kind);
  }
}
function sr(n, e, l, t, i) {
  const s = n.bundleL.name, r = n.bundleR.name, o = l.root, a = o.outputVarR || o.outputVarL, c = a.varName, f = a.sourceName, d = zn(o, s, r).join(" "), u = [];
  function m(M) {
    const C = M.join('&nbsp;<span class="related-sep">&gt;</span>&nbsp;');
    u.push(C);
  }
  if (a.relatedItems)
    for (const M of a.relatedItems)
      m(M.locationPath);
  const v = nr(n, l.group.testSummaries, "scenario");
  let _;
  for (const M of v)
    for (const C of M.items)
      if (C.scenario.settings.kind === "all-inputs-settings" && C.scenario.settings.position === "at-default") {
        _ = C;
        break;
      }
  const k = [];
  for (const M of v) {
    let C, S;
    M.items[0] !== _ && (C = M.items.length > 0 ? M.items[0] : void 0, S = M.items.length > 1 ? M.items[1] : void 0);
    const D = Tn(
      n,
      e,
      "scenarios",
      M.title,
      void 0,
      // TODO: Subtitle?
      [_, C, S]
    );
    k.push(D);
  }
  const R = k.findIndex((M) => M.title === "All inputs");
  if (R !== void 0) {
    const M = k.splice(R, 1)[0];
    k.unshift(M);
  }
  return {
    kind: "by-dataset",
    title: c,
    subtitle: f,
    annotations: d,
    previousRowIndex: t,
    nextRowIndex: i,
    relatedListHeader: "Appears in:",
    relatedItems: u,
    graphSections: [],
    detailRows: k
  };
}
function or(n, e, l, t, i, s, r) {
  const o = n.bundleL.name, a = n.bundleR.name, c = l.root, f = jn(c, o, a).join(" ");
  let d, u, m, v;
  i ? (d = "views", u = t == null ? void 0 : t.title, m = i.title, v = i.subtitle) : (d = "by-scenario", m = c.title, v = c.subtitle);
  const _ = [];
  function k(D) {
    const N = D.join('&nbsp;<span class="related-sep">&gt;</span>&nbsp;');
    _.push(N);
  }
  if (c.settings.kind === "input-settings")
    for (const D of c.settings.inputs) {
      const N = D.stateR.inputVar;
      N != null && N.relatedItem && k(N.relatedItem.locationPath);
    }
  const R = [];
  for (const D of l.group.testSummaries) {
    const N = n.scenarios.getScenario(D.s);
    if (N === void 0)
      continue;
    const V = n.datasets.getDataset(D.d), P = V.outputVarR || V.outputVarL, T = {
      title: P.varName,
      subtitle: P.sourceName,
      scenario: N,
      testSummary: D
    }, A = Tn(
      n,
      e,
      "datasets",
      m,
      v,
      [T]
    );
    R.push({
      viewModel: A,
      maxDiff: D.md
    });
  }
  const C = R.sort((D, N) => {
    const V = D.maxDiff, P = N.maxDiff;
    if (V !== P)
      return V > P ? -1 : 1;
    {
      const T = D.viewModel.title.toLowerCase(), A = N.viewModel.title.toLowerCase();
      return T.localeCompare(A);
    }
  }).map((D) => D.viewModel);
  let S;
  if (i != null && i.graphs) {
    const D = l.group.testSummaries;
    S = rr(n, e, i, D);
  } else
    S = [];
  return {
    kind: d,
    pretitle: u,
    title: m,
    subtitle: v,
    annotations: f,
    previousRowIndex: s,
    nextRowIndex: r,
    relatedListHeader: "Related items:",
    relatedItems: _,
    graphSections: S,
    detailRows: C
  };
}
function rr(n, e, l, t) {
  if (l.graphs === "all")
    return qn(n, e, l.scenario, t).sections;
  if (l.graphs.length === 0)
    return [];
  const i = n.bundleL.model.modelSpec.graphSpecs, s = n.bundleR.model.modelSpec.graphSpecs, r = l.scenario, o = [];
  for (const a of l.graphs) {
    const c = i == null ? void 0 : i.find((u) => u.id === a), f = s == null ? void 0 : s.find((u) => u.id === a), d = yn(c, f, r.key, t);
    o.push(Pn(n, e, r, a, d));
  }
  return [
    {
      title: "Featured graphs",
      rows: o
    }
  ];
}
function qn(n, e, l, t) {
  const i = /* @__PURE__ */ new Set();
  function s(S) {
    if (S.model.modelSpec.graphSpecs)
      for (const D of S.model.modelSpec.graphSpecs)
        i.add(D.id);
  }
  s(n.bundleL), s(n.bundleR);
  const r = [], o = [], a = [], c = [], f = [], d = [], u = n.bundleL.model.modelSpec.graphSpecs, m = n.bundleR.model.modelSpec.graphSpecs, v = Array(n.thresholds.length + 2).fill(0);
  for (const S of i) {
    const D = u == null ? void 0 : u.find((L) => L.id === S), N = m == null ? void 0 : m.find((L) => L.id === S), V = yn(D, N, l.key, t), P = ar(V), T = Pn(n, e, l, S, V);
    let A;
    switch (V.inclusion) {
      case "right-only":
        A = 1, r.push(T);
        break;
      case "left-only":
        A = 1, o.push(T);
        break;
      case "both":
        P > 0 ? (A = pt(P, n.thresholds), V.metadataReports.length > 0 ? a.push(T) : f.push(T)) : V.metadataReports.length > 0 ? (A = 1, c.push(T)) : (A = 0, d.push(T));
        break;
      case "neither":
        A = 0, d.push(T);
        break;
      default:
        ye(V.inclusion);
    }
    v[A]++;
  }
  const _ = i.size, k = _ - v[0], R = v.map((S) => S / _ * 100), M = [];
  function C(S, D, N) {
    if (S.length > 0) {
      const V = N ? S.sort((P, T) => P.maxDiffPct > T.maxDiffPct ? -1 : 1) : S;
      M.push({
        title: D,
        rows: V
      });
    }
  }
  return C(r, "Added graphs", !1), C(o, "Removed graphs", !1), C(a, "Graphs with metadata and dataset changes", !0), C(c, "Graphs with metadata changes only", !1), C(f, "Graphs with dataset changes only", !0), C(d, "Unchanged graphs", !1), {
    sections: M,
    nonZeroDiffCount: k,
    diffPercentByBucket: R
  };
}
function ar(n) {
  let e = 0;
  for (const l of n.datasetReports)
    l.maxDiff !== void 0 && l.maxDiff > e && (e = l.maxDiff);
  return e;
}
function cr(n, e) {
  const l = localStorage.getItem(n);
  let t;
  l !== void 0 ? t = l === "1" : t = e;
  let i = t;
  const { subscribe: s, set: r } = de(t), o = (c) => {
    i = c, localStorage.setItem(n, c ? "1" : "0"), r(c);
  };
  return {
    subscribe: s,
    set: o,
    update: (c) => {
      o(c(i));
    }
  };
}
function fr(n, e) {
  let l;
  if (e ? l = cr("sde-check-simplify-scenarios", !1) : l = void 0, n) {
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
function at(n, e, l, t) {
  const i = l - e;
  function s(r) {
    return i !== 0 ? (r - e) / (l - e) * 100 : 0;
  }
  return {
    values: n,
    avg: t,
    points: n.map((r) => s(r)),
    avgPoint: s(t)
  };
}
class dr {
  constructor(e, l) {
    this.bundleModelL = e, this.bundleModelR = l, this.minTime = Number.MAX_VALUE, this.maxTime = 0, this.writableRows = de([]), this.rows = this.writableRows;
  }
  addRow(e, l) {
    const t = Math.min(e.minTime, l.minTime), i = Math.max(e.maxTime, l.maxTime), s = Math.min(this.minTime, t), r = Math.max(this.maxTime, i);
    this.minTime = s, this.maxTime = r;
    function o(f) {
      return at(f.values, s, r, f.avg);
    }
    const a = Cn(this.writableRows);
    for (const f of a)
      f.dotPlotL = o(f.dotPlotL), f.dotPlotR = o(f.dotPlotR);
    function c(f) {
      return at(f.allTimes, s, r, f.avgTime);
    }
    a.push({
      num: a.length + 1,
      minTimeL: e.minTime.toFixed(1),
      avgTimeL: e.avgTime.toFixed(1),
      maxTimeL: e.maxTime.toFixed(1),
      minTimeR: l.minTime.toFixed(1),
      avgTimeR: l.avgTime.toFixed(1),
      maxTimeR: l.maxTime.toFixed(1),
      dotPlotL: c(e),
      dotPlotR: c(l)
    }), this.writableRows.set(a);
  }
}
function ur(n) {
  return new dr(n.comparison.bundleL.model, n.comparison.bundleR.model);
}
let mr = 1;
class hr {
  constructor(e, l, t, i) {
    this.dataCoordinator = e, this.scenario = l, this.datasetKey = t, this.predicateReport = i, this.requestKeys = [], this.expectedDataKeys = [], this.resolvedDataKeys = [], this.opConstantRefs = /* @__PURE__ */ new Map(), this.resolvedData = /* @__PURE__ */ new Map(), this.dataRequested = !1, this.dataLoaded = !1, this.baseRequestKey = `check-graph-box::${mr++}`, this.writableContent = de(void 0), this.content = this.writableContent;
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
            ye(t);
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
  /**
   * Request a dataset for the given scenario and key.
   *
   * @param dataKey The key used to store the dataset that is received.
   * @param scenarioSpec The scenario to be configured.
   * @param datasetKey The key for the dataset to be fetched.
   */
  requestDataset(e, l, t) {
    const i = `${this.baseRequestKey}::${e}`;
    this.requestKeys.push(i), this.dataCoordinator.requestDataset(i, l, t, (s) => {
      this.dataRequested && (this.resolvedDataKeys.push(e), this.resolvedData.set(e, ot(s)), this.processResponses());
    });
  }
  /**
   * Should be called when a dataset response is received from the data coordinator.
   * If there are other pending requests, this will be a no-op.  Once all responses
   * are received, this will build the comparison graph view model.
   */
  processResponses() {
    if (this.resolvedDataKeys.length !== this.expectedDataKeys.length)
      return;
    const e = this.resolvedData.get("primary"), l = e.reduce((_, k) => k.x < _ ? k.x : _, e[0].x), t = e.reduce((_, k) => k.x > _ ? k.x : _, e[0].x), i = this.predicateReport.time;
    let s, r, o;
    if (i === void 0)
      s = l, r = t, o = (_) => _ >= l && _ <= t;
    else if (typeof i == "number")
      s = i, r = i, o = (_) => _ === l;
    else if (Array.isArray(i))
      s = i[0], r = i[1], o = (_) => _ >= l && _ <= t;
    else {
      const _ = i, k = [];
      _.after_excl !== void 0 && (k.push((R) => R > _.after_excl), s = _.after_excl), _.after_incl !== void 0 && (k.push((R) => R >= _.after_incl), s = _.after_incl), _.before_excl !== void 0 && (k.push((R) => R < i.before_excl), r = _.before_excl), _.before_incl !== void 0 && (k.push((R) => R <= i.before_incl), r = _.before_incl), s === void 0 && (s = l), r === void 0 && (r = t), o = (R) => {
        for (const M of k)
          if (!M(R))
            return !1;
        return !0;
      };
    }
    const a = [], c = (_, k, R = 0) => {
      const M = this.opConstantRefs.get(_);
      if (M !== void 0) {
        s === r ? a.push({
          points: [{ x: s, y: M + R }],
          style: k
        }) : a.push({
          points: [
            { x: s, y: M + R },
            { x: r, y: M + R }
          ],
          style: k
        });
        return;
      }
      const C = this.resolvedData.get(_);
      if (C !== void 0) {
        let S = C.filter((D) => o(D.x));
        R !== 0 && (S = S.map((D) => ({ x: D.x, y: D.y + R }))), a.push({
          points: S,
          style: k
        });
      }
    }, f = (_) => this.opConstantRefs.has(_) || this.resolvedData.has(_), d = f("gt") || f("gte"), u = f("lt") || f("lte");
    c("gt", u ? "fill-to-next" : "fill-above"), c("gte", u ? "fill-to-next" : "fill-above"), c("lt", d ? "normal" : "fill-below"), c("lte", d ? "normal" : "fill-below"), c("eq", "wide");
    const m = this.predicateReport.tolerance || 0.1;
    c("approx", "fill-to-next", -m), c("approx", "normal", m), c("approx", "dashed");
    const v = {
      key: this.baseRequestKey,
      refPlots: a,
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
function pr(n) {
  switch (n) {
    case "passed":
      return "✓";
    case "failed":
      return "✗";
    case "error":
      return "‼";
    default:
      return "";
  }
}
function He(n, e, l, t, i, s = !1) {
  const r = "&ensp;".repeat(2 + n * 4), o = pr(l), a = `<span class="status-color-${l}">${o}</span>`, c = `${r}${a}&ensp;${t}`;
  return {
    rowClasses: `${e} ${l}`,
    status: l,
    span: c,
    graphBoxViewModel: i,
    graphVisible: de(s)
  };
}
function lt(n) {
  return `<span class="bold">${n}</span>`;
}
function vr(n, e) {
  let l = !1;
  const t = [], i = He(0, "test", e.status, e.name);
  for (const r of e.scenarios) {
    t.push(He(1, "scenario", r.status, Wn(r, lt)));
    for (const o of r.datasets) {
      t.push(He(2, "dataset", o.status, Gn(o, lt)));
      for (const a of o.predicates) {
        let c, f = !1;
        r.checkScenario.spec && o.checkDataset.datasetKey && (c = new hr(
          n,
          r.checkScenario,
          o.checkDataset.datasetKey,
          a
        ), !l && a.result.status === "failed" && (l = !0, f = !0)), t.push(
          He(
            3,
            "predicate",
            a.result.status,
            An(a, lt),
            c,
            f
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
function _r(n, e) {
  return {
    name: e.name,
    tests: e.tests.map((l) => vr(n, l))
  };
}
function gr(n, e) {
  let l = 0, t = 0, i = 0;
  for (const o of e.groups)
    for (const a of o.tests)
      for (const c of a.scenarios) {
        if (c.datasets.length === 0) {
          i++;
          continue;
        }
        for (const f of c.datasets) {
          if (f.predicates.length === 0) {
            i++;
            continue;
          }
          for (const d of f.predicates)
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
  let r;
  return s > 0 && (r = [l / s * 100, t / s * 100, i / s * 100]), {
    total: s,
    passed: l,
    failed: t,
    errors: i,
    percents: r,
    groups: e.groups.map((o) => _r(n, o))
  };
}
function br(n, e) {
  const l = n.bundleL.name, t = n.bundleR.name, i = Fn(n, e), s = i.byScenario, r = i.byDataset;
  let o = 1;
  function a() {
    return `view_${o++}`;
  }
  let c = 0;
  const f = [];
  for (const J of n.viewGroups) {
    const Q = J.views.map((le) => {
      var ue;
      switch (le.kind) {
        case "view": {
          const ce = le.scenario, ve = s.allGroupSummaries.get(ce.key);
          let _e, Me;
          if (le.graphs === "all") {
            const Se = ve.group.testSummaries, De = qn(n, void 0, ce, Se);
            _e = De.diffPercentByBucket, Me = De.nonZeroDiffCount;
          } else
            _e = (ue = ve.scores) == null ? void 0 : ue.diffPercentByBucket;
          return Ni(_e) && c++, {
            kind: "views",
            groupKey: a(),
            title: le.title,
            subtitle: le.subtitle,
            diffPercentByBucket: _e,
            groupSummary: ve,
            viewMetadata: {
              viewGroup: J,
              view: le,
              changedGraphCount: Me
            }
          };
        }
        case "unresolved-view":
          return c++, {
            kind: "views",
            groupKey: a(),
            title: "Unresolved view"
          };
        default:
          ye(le);
      }
    }), U = {
      kind: "views",
      title: J.title,
      header: !0
    };
    f.push({
      header: U,
      rows: Q
    });
  }
  function d(J, Q, U) {
    return `${J} ${J !== 1 ? Q.replace(U, `${U}s`) : Q}`;
  }
  function u(J) {
    var ve;
    let Q, U, le, ue;
    const ce = J.root;
    switch (ce.kind) {
      case "dataset": {
        Q = "by-dataset";
        const _e = ce.outputVarR || ce.outputVarL;
        U = _e.varName, le = _e.sourceName, ue = zn(ce, l, t).join(" ");
        break;
      }
      case "scenario":
        Q = "by-scenario", U = ce.title, le = ce.subtitle, ue = jn(ce, l, t).join(" ");
        break;
      default:
        ye(ce);
    }
    return {
      kind: Q,
      groupKey: J.group.key,
      title: U,
      subtitle: le,
      annotations: ue,
      diffPercentByBucket: (ve = J.scores) == null ? void 0 : ve.diffPercentByBucket,
      groupSummary: J
    };
  }
  function m(J, Q, U = !0) {
    if (J.length > 0) {
      const le = J.map(u);
      let ue, ce;
      return Q.includes("scenario") ? (ue = "by-scenario", ce = "scenario") : (ue = "by-dataset", ce = "variable"), U && (Q = d(le.length, Q, ce)), {
        header: {
          kind: ue,
          title: Q,
          header: !0
        },
        rows: le
      };
    } else
      return;
  }
  const v = Ce(l, "left"), _ = Ce(t, "right"), k = m(s.withErrors, "scenario with errors…"), R = m(s.onlyInLeft, `scenario only valid in ${v}…`), M = m(s.onlyInRight, `scenario only valid in ${_}…`), C = m(s.withDiffs, "scenario producing differences…"), S = m(
    s.withoutDiffs,
    "No differences produced by the following scenarios…",
    !1
  ), D = m(r.withErrors, "output variable with errors…"), N = m(r.onlyInLeft, "removed output variable…"), V = m(r.onlyInRight, "added output variable…"), P = m(r.withDiffs, "output variable with differences…"), T = m(
    r.withoutDiffs,
    "No differences detected for the following outputs…",
    !1
  );
  function A(J, Q) {
    Q && J.push(...Q.rows);
  }
  let L;
  if (f.length > 0) {
    const J = [];
    for (const Q of f)
      J.push(...Q.rows);
    L = {
      kind: "views",
      allRows: J,
      rowsWithDiffs: c,
      viewGroups: f
    };
  }
  const G = [];
  A(G, k), A(G, R), A(G, M), A(G, C), A(G, S);
  const B = (S == null ? void 0 : S.rows.length) || 0, Z = {
    kind: "by-scenario",
    allRows: G,
    rowsWithDiffs: G.length - B,
    scenariosWithErrors: k,
    scenariosOnlyInLeft: R,
    scenariosOnlyInRight: M,
    scenariosWithDiffs: C,
    scenariosWithoutDiffs: S
  }, ie = [];
  A(ie, D), A(ie, N), A(ie, V), A(ie, P), A(ie, T);
  const pe = (T == null ? void 0 : T.rows.length) || 0, we = {
    kind: "by-dataset",
    allRows: ie,
    rowsWithDiffs: ie.length - pe,
    datasetsWithErrors: D,
    datasetsOnlyInLeft: N,
    datasetsOnlyInRight: V,
    datasetsWithDiffs: P,
    datasetsWithoutDiffs: T
  };
  return {
    views: L,
    byScenario: Z,
    byDataset: we
  };
}
function wr(n, e, l) {
  function t(U, le = 0) {
    return U === 0 ? "-" : `${U <= 0 ? "" : "+"}${U.toFixed(le)}`;
  }
  function i(U) {
    return U === 0 ? "" : `${t(U, 1)}%`;
  }
  function s(U, le) {
    return U !== 0 ? (le - U) / U * 100 : 0;
  }
  const r = n.bundleL.model.modelSpec, o = n.bundleR.model.modelSpec, a = r.inputVars.size, c = o.inputVars.size, f = c - a, d = r.outputVars.size, u = o.outputVars.size, m = u - d, v = r.modelSizeInBytes, _ = o.modelSizeInBytes, k = _ - v, R = s(v, _), M = r.dataSizeInBytes, C = o.dataSizeInBytes, S = C - M, D = s(M, C), N = e.avgTime || 0, V = l.avgTime || 0, P = V - N, T = s(N, V), A = e.minTime, L = l.minTime, G = e.maxTime, B = l.maxTime, Z = Math.min(A, L), ie = Math.max(G, B);
  function pe(U) {
    return at(U.allTimes, Z, ie, U.avgTime);
  }
  const we = {
    modelName: n.bundleL.name,
    datasetClassIndex: 0,
    inputs: a.toString(),
    outputs: d.toString(),
    modelSize: v.toString(),
    modelSizePctChange: "",
    dataSize: M.toString(),
    dataSizePctChange: "",
    avgTime: N.toFixed(1),
    avgTimePctChange: "",
    minTime: A.toFixed(1),
    maxTime: G.toFixed(1),
    dotPlot: pe(e)
  }, J = {
    modelName: n.bundleR.name,
    datasetClassIndex: 1,
    inputs: c.toString(),
    outputs: u.toString(),
    modelSize: _.toString(),
    modelSizePctChange: "",
    dataSize: C.toString(),
    dataSizePctChange: "",
    avgTime: V.toFixed(1),
    avgTimePctChange: "",
    minTime: L.toFixed(1),
    maxTime: B.toFixed(1),
    dotPlot: pe(l)
  }, Q = {
    modelName: "Change",
    inputs: t(f),
    outputs: t(m),
    modelSize: t(k),
    modelSizePctChange: i(R),
    dataSize: t(S),
    dataSizePctChange: i(D),
    avgTime: t(P, 1),
    avgTimePctChange: i(T),
    minTime: "",
    maxTime: ""
  };
  return {
    row1: we,
    row2: J,
    row3: Q
  };
}
class kr {
  constructor(e, l) {
    this.items = e, this.selectedIndex = de(l), this.selectedItem = St(this.selectedIndex, (t) => e[t]), this.selectedItemId = St(this.selectedItem, (t) => t.id);
  }
}
function $n(n, e, l, t) {
  var _;
  function i(k, R) {
    if (k === 0)
      return ["all clear", "passed"];
    {
      const M = k === 1 ? R : `${R}s`;
      return [`${k} ${M} with diffs`, "warning"];
    }
  }
  const s = [];
  function r(k, R, M) {
    s.push({
      id: k,
      title: R,
      subtitle: M[0],
      subtitleClass: `status-color-${M[1]}`
    });
  }
  const o = gr(n, e);
  let a;
  if (o.total === 0)
    a = ["no checks", "none"];
  else if (o.failed > 0 || o.errors > 0) {
    const k = [];
    o.failed > 0 && k.push(`${o.failed} failed`), o.errors > 0 && (o.errors === 1 ? k.push(`${o.errors} error`) : k.push(`${o.errors} errors`)), a = [k.join(", "), "failed"];
  } else
    a = ["all clear", "passed"];
  r("checks", "Checks", a);
  let c, f, d, u;
  if (l && t) {
    c = wr(
      l,
      t.perfReportL,
      t.perfReportR
    );
    const k = br(l, t.testSummaries);
    if (k.views) {
      f = k.views;
      let C;
      const D = k.views.allRows.find((V) => {
        var P;
        return ((P = V.viewMetadata) == null ? void 0 : P.view.graphs) === "all";
      }), N = ((_ = D == null ? void 0 : D.viewMetadata) == null ? void 0 : _.changedGraphCount) || 0;
      N > 0 ? C = i(N, "graph") : C = i(f.rowsWithDiffs, "view"), r("comp-views", "Comparison views", C);
    }
    d = k.byScenario;
    const R = i(d.rowsWithDiffs, "scenario");
    r("comps-by-scenario", "Comparisons by scenario", R), u = k.byDataset;
    const M = i(u.rowsWithDiffs, "dataset");
    r("comps-by-dataset", "Comparisons by output", M);
  }
  const m = s.findIndex((k) => k.subtitle !== "all clear"), v = new kr(s, m >= 0 ? m : 0);
  return {
    statsTableViewModel: c,
    tabBarViewModel: v,
    checkSummaryViewModel: o,
    comparisonViewsSummaryViewModel: f,
    comparisonsByScenarioSummaryViewModel: d,
    comparisonsByDatasetSummaryViewModel: u
  };
}
class $r {
  /**
   * @param appModel The app model.
   * @param suiteSummary The test suite summary if one was already generated by
   * model-check CLI tool during the build process; if defined, this will be used
   * instead of running the checks and comparisons in the user's browser.
   */
  constructor(e, l) {
    this.appModel = e, this.suiteSummary = l, this.writableChecksInProgress = de(!0), this.checksInProgress = this.writableChecksInProgress, this.writableProgress = de("0%"), this.progress = this.writableProgress;
    const t = l === void 0;
    this.headerViewModel = fr(e.config.comparison, t);
  }
  runTestSuite() {
    var l;
    this.cancelRunSuite && (this.cancelRunSuite(), this.cancelRunSuite = void 0), this.writableChecksInProgress.set(!0), this.writableProgress.set("0%");
    const e = this.appModel.config.comparison;
    if (this.suiteSummary) {
      const t = this.appModel.config.check, i = Hn(t, this.suiteSummary.checkSummary), s = (l = this.suiteSummary) == null ? void 0 : l.comparisonSummary;
      this.summaryViewModel = $n(
        this.appModel.checkDataCoordinator,
        i,
        e,
        s
      ), this.writableChecksInProgress.set(!1);
    } else {
      let t = !1;
      this.headerViewModel.simplifyScenarios !== void 0 && (t = Cn(this.headerViewModel.simplifyScenarios)), this.cancelRunSuite = On(
        this.appModel.config,
        {
          onProgress: (i) => {
            this.writableProgress.set(`${Math.round(i * 100)}%`);
          },
          onComplete: (i) => {
            const s = i.checkReport;
            let r;
            i.comparisonReport && (r = Un(i.comparisonReport)), this.summaryViewModel = $n(
              this.appModel.checkDataCoordinator,
              s,
              e,
              r
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
    var d, u;
    const l = this.getComparisonSummaryViewModel(e.kind), t = e.groupSummary, i = e.groupKey, s = (d = e.viewMetadata) == null ? void 0 : d.viewGroup, r = (u = e.viewMetadata) == null ? void 0 : u.view;
    let o, a;
    const c = l.allRows.length, f = l.allRows.findIndex((m) => m.groupKey === i);
    return f >= 0 && (f > 0 && (o = f - 1), f < c - 1 && (a = f + 1)), ir(
      this.appModel.config.comparison,
      this.appModel.comparisonDataCoordinator,
      t,
      s,
      r,
      o,
      a
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
        ye(e);
    }
  }
  createPerfViewModel() {
    return ur(this.appModel.config);
  }
}
function Sr(n, e) {
  const l = (e == null ? void 0 : e.containerId) || "app-shell-container", t = new lr({
    target: document.getElementById(l),
    props: {
      appViewModel: void 0
    }
  });
  return Qn(n).then((i) => {
    const s = new $r(i, e == null ? void 0 : e.suiteSummary);
    e != null && e.bundleNames && (s.headerViewModel.bundleNamesL.set(e.bundleNames), s.headerViewModel.bundleNamesR.set(e.bundleNames)), t.$set({
      appViewModel: s
    });
  }).catch((i) => {
    console.error(`ERROR: Failed to initialize app model: ${i.message}`);
  }), t;
}
export {
  Sr as initAppShell
};

import { createConfig as Bn, CheckDataCoordinator as xn, ComparisonDataCoordinator as Kn, diffDatasets as En, PerfRunner as Wn, diffGraphs as Mn, scenarioMessage as Gn, datasetMessage as An, predicateMessage as Fn, categorizeComparisonTestSummaries as Hn, checkReportFromSummary as On, runSuite as Un, comparisonSummaryFromReport as Xn } from "@sdeverywhere/check-core";
import Zn from "fontfaceobserver";
import Xe, { assertNever as Oe } from "assert-never";
import Jn from "copy-text-to-clipboard";
import { Chart as Rn } from "chart.js";
class Qn {
  constructor(e) {
    this.config = e, this.checkDataCoordinator = new xn(e.check.bundle.model), e.comparison && (this.comparisonDataCoordinator = new Kn(
      e.comparison.bundleL.model,
      e.comparison.bundleR.model
    ));
  }
}
async function Yn(i) {
  const e = await Bn(i);
  return new Qn(e);
}
function E() {
}
function ei(i, e) {
  for (const l in e)
    i[l] = e[l];
  return i;
}
function ti(i) {
  return !!i && (typeof i == "object" || typeof i == "function") && typeof i.then == "function";
}
function Cn(i) {
  return i();
}
function gt() {
  return /* @__PURE__ */ Object.create(null);
}
function $e(i) {
  i.forEach(Cn);
}
function ft(i) {
  return typeof i == "function";
}
function X(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function li(i) {
  return Object.keys(i).length === 0;
}
function Pe(i, ...e) {
  if (i == null)
    return E;
  const l = i.subscribe(...e);
  return l.unsubscribe ? () => l.unsubscribe() : l;
}
function Sn(i) {
  let e;
  return Pe(i, (l) => e = l)(), e;
}
function ge(i, e, l) {
  i.$$.on_destroy.push(Pe(e, l));
}
function ni(i, e, l, t) {
  if (i) {
    const n = Dn(i, e, l, t);
    return i[0](n);
  }
}
function Dn(i, e, l, t) {
  return i[1] && t ? ei(l.ctx.slice(), i[1](t(e))) : l.ctx;
}
function ii(i, e, l, t) {
  if (i[2] && t) {
    const n = i[2](t(l));
    if (e.dirty === void 0)
      return n;
    if (typeof n == "object") {
      const s = [], r = Math.max(e.dirty.length, n.length);
      for (let o = 0; o < r; o += 1)
        s[o] = e.dirty[o] | n[o];
      return s;
    }
    return e.dirty | n;
  }
  return e.dirty;
}
function si(i, e, l, t, n, s) {
  if (n) {
    const r = Dn(e, l, t, s);
    i.p(r, n);
  }
}
function oi(i) {
  if (i.ctx.length > 32) {
    const e = [], l = i.ctx.length / 32;
    for (let t = 0; t < l; t++)
      e[t] = -1;
    return e;
  }
  return -1;
}
function bt(i) {
  return i ?? "";
}
function b(i, e) {
  i.appendChild(e);
}
function ne(i, e, l) {
  const t = ri(i);
  if (!t.getElementById(e)) {
    const n = h("style");
    n.id = e, n.textContent = l, ai(t, n);
  }
}
function ri(i) {
  if (!i)
    return document;
  const e = i.getRootNode ? i.getRootNode() : i.ownerDocument;
  return e && e.host ? e : i.ownerDocument;
}
function ai(i, e) {
  return b(i.head || i, e), e.sheet;
}
function y(i, e, l) {
  i.insertBefore(e, l || null);
}
function $(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function O(i, e) {
  for (let l = 0; l < i.length; l += 1)
    i[l] && i[l].d(e);
}
function h(i) {
  return document.createElement(i);
}
function ci(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function I(i) {
  return document.createTextNode(i);
}
function H() {
  return I("");
}
function re(i, e, l, t) {
  return i.addEventListener(e, l, t), () => i.removeEventListener(e, l, t);
}
function p(i, e, l) {
  l == null ? i.removeAttribute(e) : i.getAttribute(e) !== l && i.setAttribute(e, l);
}
function fi(i) {
  return Array.from(i.childNodes);
}
function W(i, e) {
  e = "" + e, i.data !== e && (i.data = e);
}
function se(i, e, l, t) {
  l == null ? i.style.removeProperty(e) : i.style.setProperty(e, l, t ? "important" : "");
}
function he(i, e, l) {
  i.classList[l ? "add" : "remove"](e);
}
function di(i, e, { bubbles: l = !1, cancelable: t = !1 } = {}) {
  const n = document.createEvent("CustomEvent");
  return n.initCustomEvent(i, l, t, e), n;
}
class ui {
  constructor(e = !1) {
    this.is_svg = !1, this.is_svg = e, this.e = this.n = null;
  }
  c(e) {
    this.h(e);
  }
  m(e, l, t = null) {
    this.e || (this.is_svg ? this.e = ci(l.nodeName) : this.e = h(l.nodeType === 11 ? "TEMPLATE" : l.nodeName), this.t = l.tagName !== "TEMPLATE" ? l : l.content, this.c(e)), this.i(t);
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
let Ke;
function ke(i) {
  Ke = i;
}
function dt() {
  if (!Ke)
    throw new Error("Function called outside component initialization");
  return Ke;
}
function Ze(i) {
  dt().$$.on_mount.push(i);
}
function qe() {
  const i = dt();
  return (e, l, { cancelable: t = !1 } = {}) => {
    const n = i.$$.callbacks[e];
    if (n) {
      const s = di(e, l, { cancelable: t });
      return n.slice().forEach((r) => {
        r.call(i, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function ae(i, e) {
  const l = i.$$.callbacks[e.type];
  l && l.slice().forEach((t) => t.call(this, e));
}
const Ie = [], be = [];
let ze = [];
const it = [], mi = /* @__PURE__ */ Promise.resolve();
let st = !1;
function hi() {
  st || (st = !0, mi.then(mt));
}
function ot(i) {
  ze.push(i);
}
function ut(i) {
  it.push(i);
}
const tt = /* @__PURE__ */ new Set();
let De = 0;
function mt() {
  if (De !== 0)
    return;
  const i = Ke;
  do {
    try {
      for (; De < Ie.length; ) {
        const e = Ie[De];
        De++, ke(e), pi(e.$$);
      }
    } catch (e) {
      throw Ie.length = 0, De = 0, e;
    }
    for (ke(null), Ie.length = 0, De = 0; be.length; )
      be.pop()();
    for (let e = 0; e < ze.length; e += 1) {
      const l = ze[e];
      tt.has(l) || (tt.add(l), l());
    }
    ze.length = 0;
  } while (Ie.length);
  for (; it.length; )
    it.pop()();
  st = !1, tt.clear(), ke(i);
}
function pi(i) {
  if (i.fragment !== null) {
    i.update(), $e(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(ot);
  }
}
function vi(i) {
  const e = [], l = [];
  ze.forEach((t) => i.indexOf(t) === -1 ? e.push(t) : l.push(t)), l.forEach((t) => t()), ze = e;
}
const He = /* @__PURE__ */ new Set();
let Me;
function x() {
  Me = {
    r: 0,
    c: [],
    p: Me
    // parent group
  };
}
function K() {
  Me.r || $e(Me.c), Me = Me.p;
}
function g(i, e) {
  i && i.i && (He.delete(i), i.i(e));
}
function w(i, e, l, t) {
  if (i && i.o) {
    if (He.has(i))
      return;
    He.add(i), Me.c.push(() => {
      He.delete(i), t && (l && i.d(1), t());
    }), i.o(e);
  } else
    t && t();
}
function wt(i, e) {
  const l = e.token = {};
  function t(n, s, r, o) {
    if (e.token !== l)
      return;
    e.resolved = o;
    let a = e.ctx;
    r !== void 0 && (a = a.slice(), a[r] = o);
    const c = n && (e.current = n)(a);
    let f = !1;
    e.block && (e.blocks ? e.blocks.forEach((d, u) => {
      u !== s && d && (x(), w(d, 1, 1, () => {
        e.blocks[u] === d && (e.blocks[u] = null);
      }), K());
    }) : e.block.d(1), c.c(), g(c, 1), c.m(e.mount(), e.anchor), f = !0), e.block = c, e.blocks && (e.blocks[s] = c), f && mt();
  }
  if (ti(i)) {
    const n = dt();
    if (i.then((s) => {
      ke(n), t(e.then, 1, e.value, s), ke(null);
    }, (s) => {
      if (ke(n), t(e.catch, 2, e.error, s), ke(null), !e.hasCatch)
        throw s;
    }), e.current !== e.pending)
      return t(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return t(e.then, 1, e.value, i), !0;
    e.resolved = i;
  }
}
function _i(i, e, l) {
  const t = e.slice(), { resolved: n } = i;
  i.current === i.then && (t[i.value] = n), i.current === i.catch && (t[i.error] = n), i.block.p(t, l);
}
function ht(i, e, l) {
  const t = i.$$.props[e];
  t !== void 0 && (i.$$.bound[t] = l, l(i.$$.ctx[t]));
}
function q(i) {
  i && i.c();
}
function z(i, e, l, t) {
  const { fragment: n, after_update: s } = i.$$;
  n && n.m(e, l), t || ot(() => {
    const r = i.$$.on_mount.map(Cn).filter(ft);
    i.$$.on_destroy ? i.$$.on_destroy.push(...r) : $e(r), i.$$.on_mount = [];
  }), s.forEach(ot);
}
function j(i, e) {
  const l = i.$$;
  l.fragment !== null && (vi(l.after_update), $e(l.on_destroy), l.fragment && l.fragment.d(e), l.on_destroy = l.fragment = null, l.ctx = []);
}
function gi(i, e) {
  i.$$.dirty[0] === -1 && (Ie.push(i), hi(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Y(i, e, l, t, n, s, r, o = [-1]) {
  const a = Ke;
  ke(i);
  const c = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: E,
    not_equal: n,
    bound: gt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: gt(),
    dirty: o,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  r && r(c.root);
  let f = !1;
  if (c.ctx = l ? l(i, e.props || {}, (d, u, ...m) => {
    const v = m.length ? m[0] : u;
    return c.ctx && n(c.ctx[d], c.ctx[d] = v) && (!c.skip_bound && c.bound[d] && c.bound[d](v), f && gi(i, d)), u;
  }) : [], c.update(), f = !0, $e(c.before_update), c.fragment = t ? t(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = fi(e.target);
      c.fragment && c.fragment.l(d), d.forEach($);
    } else
      c.fragment && c.fragment.c();
    e.intro && g(i.$$.fragment), z(i, e.target, e.anchor, e.customElement), mt();
  }
  ke(a);
}
class ee {
  $destroy() {
    j(this, 1), this.$destroy = E;
  }
  $on(e, l) {
    if (!ft(l))
      return E;
    const t = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return t.push(l), () => {
      const n = t.indexOf(l);
      n !== -1 && t.splice(n, 1);
    };
  }
  $set(e) {
    this.$$set && !li(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function bi(i) {
  ne(i, "svelte-1s6fyc", ".lazy-container.svelte-1s6fyc{position:relative;display:flex;flex:1;height:100%}");
}
function kt(i) {
  let e;
  const l = (
    /*#slots*/
    i[3].default
  ), t = ni(
    l,
    i,
    /*$$scope*/
    i[2],
    null
  );
  return {
    c() {
      t && t.c();
    },
    m(n, s) {
      t && t.m(n, s), e = !0;
    },
    p(n, s) {
      t && t.p && (!e || s & /*$$scope*/
      4) && si(
        t,
        l,
        n,
        /*$$scope*/
        n[2],
        e ? ii(
          l,
          /*$$scope*/
          n[2],
          s,
          null
        ) : oi(
          /*$$scope*/
          n[2]
        ),
        null
      );
    },
    i(n) {
      e || (g(t, n), e = !0);
    },
    o(n) {
      w(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function wi(i) {
  let e, l, t = (
    /*visible*/
    i[0] && kt(i)
  );
  return {
    c() {
      e = h("div"), t && t.c(), p(e, "class", "lazy-container svelte-1s6fyc");
    },
    m(n, s) {
      y(n, e, s), t && t.m(e, null), i[4](e), l = !0;
    },
    p(n, [s]) {
      /*visible*/
      n[0] ? t ? (t.p(n, s), s & /*visible*/
      1 && g(t, 1)) : (t = kt(n), t.c(), g(t, 1), t.m(e, null)) : t && (x(), w(t, 1, 1, () => {
        t = null;
      }), K());
    },
    i(n) {
      l || (g(t), l = !0);
    },
    o(n) {
      w(t), l = !1;
    },
    d(n) {
      n && $(e), t && t.d(), i[4](null);
    }
  };
}
function ki(i, e, l) {
  let { $$slots: t = {}, $$scope: n } = e, { visible: s = !1 } = e, r;
  Ze(() => {
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
  return i.$$set = (a) => {
    "visible" in a && l(0, s = a.visible), "$$scope" in a && l(2, n = a.$$scope);
  }, [s, r, n, t, o];
}
class pt extends ee {
  constructor(e) {
    super(), Y(this, e, ki, wi, X, { visible: 0 }, bi);
  }
}
function $i(i) {
  ne(i, "svelte-bdlfj4", ".graph-inner-container.svelte-bdlfj4{position:absolute;top:0;left:0;bottom:0;right:0}");
}
function yi(i) {
  let e, l;
  return {
    c() {
      e = h("div"), l = h("canvas"), p(e, "class", "graph-inner-container svelte-bdlfj4"), p(
        e,
        "style",
        /*containerStyle*/
        i[2]
      );
    },
    m(t, n) {
      y(t, e, n), b(e, l), i[5](l), i[6](e);
    },
    p: E,
    i: E,
    o: E,
    d(t) {
      t && $(e), i[5](null), i[6](null);
    }
  };
}
function Mi(i, e, l) {
  let { config: t } = e, { viewModel: n } = e, s, r = `width: ${t.width}rem; height: 20rem;`, o, a;
  Ze(() => (a = n.createGraphView(o), () => {
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
  return i.$$set = (d) => {
    "config" in d && l(3, t = d.config), "viewModel" in d && l(4, n = d.viewModel);
  }, [
    s,
    o,
    r,
    t,
    n,
    c,
    f
  ];
}
class Ri extends ee {
  constructor(e) {
    super(), Y(this, e, Mi, yi, X, { config: 3, viewModel: 4 }, $i);
  }
}
function Ci(i) {
  ne(i, "svelte-1mlx9dh", '.legend-container.svelte-1mlx9dh{display:flex;flex-direction:row;flex-wrap:wrap;flex:0 0 3.5rem;justify-content:center;align-items:center;width:100%;margin-top:-0.45rem;font-family:"Roboto Condensed";font-weight:700;font-size:1rem;line-height:1.2}.legend-item.svelte-1mlx9dh{margin:0 0.2rem 0.1rem 0.2rem;padding:0.25rem 0.6rem 0.2rem 0.6rem;color:#fff;text-align:center}');
}
function $t(i, e, l) {
  const t = i.slice();
  return t[1] = e[l], t;
}
function yt(i) {
  let e, l = (
    /*item*/
    i[1].label.toUpperCase() + ""
  ), t;
  return {
    c() {
      e = h("div"), t = I(l), p(e, "class", "legend-item svelte-1mlx9dh"), se(
        e,
        "background-color",
        /*item*/
        i[1].color
      );
    },
    m(n, s) {
      y(n, e, s), b(e, t);
    },
    p(n, s) {
      s & /*graphSpec*/
      1 && l !== (l = /*item*/
      n[1].label.toUpperCase() + "") && W(t, l), s & /*graphSpec*/
      1 && se(
        e,
        "background-color",
        /*item*/
        n[1].color
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Si(i) {
  let e, l = (
    /*graphSpec*/
    i[0].legendItems
  ), t = [];
  for (let n = 0; n < l.length; n += 1)
    t[n] = yt($t(i, l, n));
  return {
    c() {
      e = h("div");
      for (let n = 0; n < t.length; n += 1)
        t[n].c();
      p(e, "class", "legend-container svelte-1mlx9dh");
    },
    m(n, s) {
      y(n, e, s);
      for (let r = 0; r < t.length; r += 1)
        t[r] && t[r].m(e, null);
    },
    p(n, [s]) {
      if (s & /*graphSpec*/
      1) {
        l = /*graphSpec*/
        n[0].legendItems;
        let r;
        for (r = 0; r < l.length; r += 1) {
          const o = $t(n, l, r);
          t[r] ? t[r].p(o, s) : (t[r] = yt(o), t[r].c(), t[r].m(e, null));
        }
        for (; r < t.length; r += 1)
          t[r].d(1);
        t.length = l.length;
      }
    },
    i: E,
    o: E,
    d(n) {
      n && $(e), O(t, n);
    }
  };
}
function Di(i, e, l) {
  let { graphSpec: t } = e;
  return i.$$set = (n) => {
    "graphSpec" in n && l(0, t = n.graphSpec);
  }, [t];
}
class Li extends ee {
  constructor(e) {
    super(), Y(this, e, Di, Si, X, { graphSpec: 0 }, Ci);
  }
}
function Ti(i) {
  ne(i, "svelte-1mnj087", '.context-graph-container.svelte-1mnj087{display:inline-flex;flex-direction:column;flex:0 0 38rem;background-color:#fff}.graph-and-info.svelte-1mnj087{display:flex;flex-direction:column}.graph-title.svelte-1mnj087{margin:0.5rem 0;padding:0 0.8rem;font-family:"Roboto Condensed";font-size:1.55rem}.graph-container.svelte-1mnj087{display:block;position:relative;width:38rem;height:20rem}.message.svelte-1mnj087{display:flex;flex:1;min-height:20rem;align-items:center;justify-content:center;background-color:#555;color:#aaa}.link-container.svelte-1mnj087{display:flex;flex-direction:column;align-items:flex-start;margin-bottom:0.4rem}.link-row.svelte-1mnj087{height:1.2rem;margin:0 0.8rem;color:#999;cursor:pointer}.link-row.svelte-1mnj087:hover{color:#000}');
}
function Mt(i, e, l) {
  const t = i.slice();
  return t[10] = e[l], t;
}
function Vi(i) {
  let e, l, t, n = (
    /*viewModel*/
    i[0].bundleName + ""
  ), s, r;
  return {
    c() {
      e = h("div"), l = h("span"), l.textContent = "Not included in ", t = h("span"), s = I(n), p(t, "class", r = bt(
        /*viewModel*/
        i[0].datasetClass
      ) + " svelte-1mnj087"), p(e, "class", "message svelte-1mnj087");
    },
    m(o, a) {
      y(o, e, a), b(e, l), b(e, t), b(t, s);
    },
    p(o, a) {
      a & /*viewModel*/
      1 && n !== (n = /*viewModel*/
      o[0].bundleName + "") && W(s, n), a & /*viewModel*/
      1 && r !== (r = bt(
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
function Ii(i) {
  let e, l, t = (
    /*viewModel*/
    i[0].graphSpec.title + ""
  ), n, s, r, o, a, c;
  function f(m) {
    i[8](m);
  }
  let d = {
    $$slots: { default: [zi] },
    $$scope: { ctx: i }
  };
  /*visible*/
  i[1] !== void 0 && (d.visible = /*visible*/
  i[1]), r = new pt({ props: d }), be.push(() => ht(r, "visible", f)), a = new Li({
    props: {
      graphSpec: (
        /*viewModel*/
        i[0].graphSpec
      )
    }
  });
  let u = (
    /*viewModel*/
    i[0].linkItems && Ct(i)
  );
  return {
    c() {
      e = h("div"), l = h("div"), s = h("div"), q(r.$$.fragment), q(a.$$.fragment), u && u.c(), p(l, "class", n = "graph-title " + /*viewModel*/
      i[0].datasetClass + " svelte-1mnj087"), p(s, "class", "graph-container svelte-1mnj087"), p(e, "class", "graph-and-info svelte-1mnj087");
    },
    m(m, v) {
      y(m, e, v), b(e, l), l.innerHTML = t, b(e, s), z(r, s, null), z(a, e, null), u && u.m(e, null), c = !0;
    },
    p(m, v) {
      (!c || v & /*viewModel*/
      1) && t !== (t = /*viewModel*/
      m[0].graphSpec.title + "") && (l.innerHTML = t), (!c || v & /*viewModel*/
      1 && n !== (n = "graph-title " + /*viewModel*/
      m[0].datasetClass + " svelte-1mnj087")) && p(l, "class", n);
      const _ = {};
      v & /*$$scope, $content*/
      8200 && (_.$$scope = { dirty: v, ctx: m }), !o && v & /*visible*/
      2 && (o = !0, _.visible = /*visible*/
      m[1], ut(() => o = !1)), r.$set(_);
      const k = {};
      v & /*viewModel*/
      1 && (k.graphSpec = /*viewModel*/
      m[0].graphSpec), a.$set(k), /*viewModel*/
      m[0].linkItems ? u ? u.p(m, v) : (u = Ct(m), u.c(), u.m(e, null)) : u && (u.d(1), u = null);
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
function Rt(i) {
  let e, l;
  return e = new Ri({
    props: {
      viewModel: (
        /*$content*/
        i[3].graphData
      ),
      config: (
        /*graphConfig*/
        i[4]
      )
    }
  }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n & /*$content*/
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
function zi(i) {
  let e, l, t = (
    /*$content*/
    i[3] && Rt(i)
  );
  return {
    c() {
      t && t.c(), e = H();
    },
    m(n, s) {
      t && t.m(n, s), y(n, e, s), l = !0;
    },
    p(n, s) {
      /*$content*/
      n[3] ? t ? (t.p(n, s), s & /*$content*/
      8 && g(t, 1)) : (t = Rt(n), t.c(), g(t, 1), t.m(e.parentNode, e)) : t && (x(), w(t, 1, 1, () => {
        t = null;
      }), K());
    },
    i(n) {
      l || (g(t), l = !0);
    },
    o(n) {
      w(t), l = !1;
    },
    d(n) {
      t && t.d(n), n && $(e);
    }
  };
}
function Ct(i) {
  let e, l = (
    /*viewModel*/
    i[0].linkItems
  ), t = [];
  for (let n = 0; n < l.length; n += 1)
    t[n] = St(Mt(i, l, n));
  return {
    c() {
      e = h("div");
      for (let n = 0; n < t.length; n += 1)
        t[n].c();
      p(e, "class", "link-container svelte-1mnj087");
    },
    m(n, s) {
      y(n, e, s);
      for (let r = 0; r < t.length; r += 1)
        t[r] && t[r].m(e, null);
    },
    p(n, s) {
      if (s & /*onLinkClicked, viewModel*/
      33) {
        l = /*viewModel*/
        n[0].linkItems;
        let r;
        for (r = 0; r < l.length; r += 1) {
          const o = Mt(n, l, r);
          t[r] ? t[r].p(o, s) : (t[r] = St(o), t[r].c(), t[r].m(e, null));
        }
        for (; r < t.length; r += 1)
          t[r].d(1);
        t.length = l.length;
      }
    },
    d(n) {
      n && $(e), O(t, n);
    }
  };
}
function St(i) {
  let e, l = (
    /*linkItem*/
    i[10].text + ""
  ), t, n, s;
  function r() {
    return (
      /*click_handler*/
      i[9](
        /*linkItem*/
        i[10]
      )
    );
  }
  return {
    c() {
      e = h("div"), t = I(l), p(e, "class", "link-row svelte-1mnj087");
    },
    m(o, a) {
      y(o, e, a), b(e, t), n || (s = re(e, "click", r), n = !0);
    },
    p(o, a) {
      i = o, a & /*viewModel*/
      1 && l !== (l = /*linkItem*/
      i[10].text + "") && W(t, l);
    },
    d(o) {
      o && $(e), n = !1, s();
    }
  };
}
function ji(i) {
  let e, l, t, n;
  const s = [Ii, Vi], r = [];
  function o(a, c) {
    return (
      /*viewModel*/
      a[0].graphSpec ? 0 : 1
    );
  }
  return l = o(i), t = r[l] = s[l](i), {
    c() {
      e = h("div"), t.c(), p(e, "class", "context-graph-container svelte-1mnj087");
    },
    m(a, c) {
      y(a, e, c), r[l].m(e, null), n = !0;
    },
    p(a, [c]) {
      let f = l;
      l = o(a), l === f ? r[l].p(a, c) : (x(), w(r[f], 1, 1, () => {
        r[f] = null;
      }), K(), t = r[l], t ? t.p(a, c) : (t = r[l] = s[l](a), t.c()), g(t, 1), t.m(e, null));
    },
    i(a) {
      n || (g(t), n = !0);
    },
    o(a) {
      w(t), n = !1;
    },
    d(a) {
      a && $(e), r[l].d();
    }
  };
}
function Pi(i, e, l) {
  let t, n = E, s = () => (n(), n = Pe(o, (_) => l(3, t = _)), o);
  i.$$.on_destroy.push(() => n());
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
        Jn(_.content);
        break;
      default:
        Xe(_.kind);
    }
  }
  function m(_) {
    a = _, l(1, a);
  }
  const v = (_) => u(_);
  return i.$$set = (_) => {
    "viewModel" in _ && l(0, r = _.viewModel);
  }, i.$$.update = () => {
    i.$$.dirty & /*visible, previousVisible, viewModel, previousViewModel*/
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
    super(), Y(this, e, Pi, ji, X, { viewModel: 0 }, Ti);
  }
}
const Le = [];
function qi(i, e) {
  return {
    subscribe: de(i, e).subscribe
  };
}
function de(i, e = E) {
  let l;
  const t = /* @__PURE__ */ new Set();
  function n(o) {
    if (X(i, o) && (i = o, l)) {
      const a = !Le.length;
      for (const c of t)
        c[1](), Le.push(c, i);
      if (a) {
        for (let c = 0; c < Le.length; c += 2)
          Le[c][0](Le[c + 1]);
        Le.length = 0;
      }
    }
  }
  function s(o) {
    n(o(i));
  }
  function r(o, a = E) {
    const c = [o, a];
    return t.add(c), t.size === 1 && (l = e(n) || E), o(i), () => {
      t.delete(c), t.size === 0 && l && (l(), l = null);
    };
  }
  return { set: n, update: s, subscribe: r };
}
function Dt(i, e, l) {
  const t = !Array.isArray(i), n = t ? [i] : i, s = e.length < 2;
  return qi(l, (r) => {
    let o = !1;
    const a = [];
    let c = 0, f = E;
    const d = () => {
      if (c)
        return;
      f();
      const m = e(t ? a[0] : a, r);
      s ? r(m) : f = ft(m) ? m : E;
    }, u = n.map((m, v) => Pe(m, (_) => {
      a[v] = _, c &= ~(1 << v), o && d();
    }, () => {
      c |= 1 << v;
    }));
    return o = !0, d(), function() {
      $e(u), f(), o = !1;
    };
  });
}
let Ni = 1;
class Ln {
  constructor(e, l, t, n, s) {
    this.dataCoordinator = l, this.bundle = t, this.scenario = n, this.graphSpec = s, this.dataRequested = !1, this.dataLoaded = !1;
    const r = t === "right" ? e.bundleR : e.bundleL;
    if (this.bundleName = r.name, this.datasetClass = `dataset-color-${t === "right" ? "1" : "0"}`, s) {
      const o = t === "right" ? n.specR : n.specL;
      this.linkItems = r.model.getGraphLinksForScenario(o, s.id), this.requestKey = `context-graph::${Ni++}::${t}::${s.id}::${n.key}`, this.writableContent = de(void 0), this.content = this.writableContent;
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
      (t, n) => {
        if (!this.dataRequested)
          return;
        const s = l ? n : t;
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
function vt(i, e) {
  if (i === 0)
    return 0;
  for (let l = 0; l < e.length; l++)
    if (i < e[l])
      return l + 1;
  return e.length + 1;
}
function Bi(i) {
  return i === void 0 ? !0 : i.some((e, l) => l > 0 && e > 0);
}
function Re(i, e) {
  return `<span class="dataset-color-${e === "left" ? 0 : 1}">${i}</span>`;
}
function rt(i) {
  if (!i)
    return [];
  const e = -Number.MAX_VALUE / 2, l = Number.MAX_VALUE / 2, t = [];
  for (const [n, s] of i.entries())
    s < e || s > l || t.push({
      x: n,
      y: s
    });
  return t;
}
let xi = 1;
class Tn {
  constructor(e, l, t, n, s, r) {
    this.comparisonConfig = e, this.dataCoordinator = l, this.title = t, this.subtitle = n, this.scenario = s, this.datasetKey = r, this.dataRequested = !1, this.dataLoaded = !1, this.requestKey = `detail-box::${xi++}::${s.key}::${r}`, this.writableContent = de(void 0), this.content = this.writableContent;
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
        const t = Ki(this.scenario.key, this.datasetKey, e, l), n = (k) => {
          const R = this.comparisonConfig, M = k === "left" ? R.bundleL.name : R.bundleR.name;
          return `Data only defined in ${Re(M, k)}`;
        }, s = t.diffReport;
        let r, o;
        switch (s.validity) {
          case "both":
            r = vt(s.maxDiff, this.comparisonConfig.thresholds), s.maxDiff === 0 ? o = "No differences" : o = void 0;
            break;
          case "left-only":
            r = void 0, o = n("left");
            break;
          case "right-only":
            r = void 0, o = n("right");
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
          pointsL: rt(e == null ? void 0 : e.get(this.datasetKey)),
          pointsR: rt(l == null ? void 0 : l.get(this.datasetKey)),
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
function Ki(i, e, l, t) {
  const n = l == null ? void 0 : l.get(e), s = t == null ? void 0 : t.get(e), r = En(n, s);
  return {
    scenarioKey: i,
    datasetKey: e,
    diffReport: r
  };
}
function Vn(i, e, l, t, n, s) {
  const r = [];
  for (const o of s) {
    if (o === void 0) {
      r.push(void 0);
      continue;
    }
    const a = l === "scenarios" ? `…${o.subtitle}` : o.title;
    r.push(
      new Tn(
        i,
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
    subtitle: n,
    showTitle: l === "scenarios",
    boxes: r
  };
}
function Ei(i) {
  var f, d;
  const e = i.comparisonConfig, l = i.dataCoordinator, t = l.bundleModelL, n = l.bundleModelR, s = (u, m, v) => new Ln(e, l, v, u, m), r = /* @__PURE__ */ new Set(), o = (u, m) => {
    if (m.modelSpec.graphSpecs !== void 0) {
      for (const v of m.modelSpec.graphSpecs)
        for (const _ of v.datasets)
          if (_.datasetKey === u.datasetKey) {
            r.add(v.id);
            break;
          }
    }
  }, a = e.datasets.getDataset(i.datasetKey);
  o(a.outputVarL, t), o(a.outputVarR, n);
  const c = [];
  for (const u of r) {
    const m = (f = t.modelSpec.graphSpecs) == null ? void 0 : f.find((_) => _.id === u), v = (d = n.modelSpec.graphSpecs) == null ? void 0 : d.find((_) => _.id === u);
    c.push({
      graphL: s(i.scenario, m, "left"),
      graphR: s(i.scenario, v, "right")
    });
  }
  return c;
}
const Lt = "#444", Ge = "Roboto Condensed", Tt = 14, Vt = "#777", Wi = {
  beforeDatasetsDraw: (i) => {
    const e = i.ctx;
    e.save();
    const l = i.data.datasets;
    for (let t = 0; t < l.length; t++) {
      const n = l[t];
      if (n.data.length !== 1)
        continue;
      const r = i.getDatasetMeta(t).data[0];
      let o;
      if (n.fill === "+1") {
        if (t + 1 >= l.length)
          break;
        const c = i.getDatasetMeta(t + 1).data[0];
        o = { x: c._view.x, y: c._view.y };
      } else if (n.fill === "start")
        o = { x: r._view.x, y: i.chartArea.bottom };
      else if (n.fill === "end")
        o = { x: r._view.x, y: i.chartArea.top };
      else
        return;
      e.beginPath(), e.moveTo(r._view.x, r._view.y), e.lineTo(o.x, o.y), e.closePath(), e.strokeStyle = n.backgroundColor, e.lineWidth = 4, e.stroke();
    }
    e.restore();
  }
};
Rn.pluginService.register(Wi);
class Gi {
  constructor(e, l) {
    this.canvas = e, this.viewModel = l, this.chart = Ai(e, l);
  }
  /**
   * Destroy the chart and any associated resources.
   */
  destroy() {
    var e;
    (e = this.chart) == null || e.destroy(), this.chart = void 0;
  }
}
function Ai(i, e) {
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
  const n = e.xMin, s = e.xMax, r = n === 1990;
  return new Rn(i, {
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
        titleFontFamily: Ge,
        bodyFontFamily: Ge
      },
      // Axis configurations
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
              min: n,
              max: s,
              fontFamily: Ge,
              fontSize: Tt,
              fontColor: Vt,
              callback: (o, a) => r && a === 0 ? "" : o
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
              fontSize: Tt,
              fontColor: Vt
            }
          }
        ]
      }
    }
  });
}
function Fi(i) {
  ne(i, "svelte-bdlfj4", ".graph-inner-container.svelte-bdlfj4{position:absolute;top:0;left:0;bottom:0;right:0}");
}
function Hi(i) {
  let e;
  return {
    c() {
      e = h("div"), p(e, "class", "graph-inner-container svelte-bdlfj4"), p(
        e,
        "style",
        /*containerStyle*/
        i[1]
      );
    },
    m(l, t) {
      y(l, e, t), i[7](e);
    },
    p: E,
    i: E,
    o: E,
    d(l) {
      l && $(e), i[7](null);
    }
  };
}
function Oi(i, e, l) {
  let { viewModel: t } = e, { width: n } = e, { height: s } = e, r, o = `width: ${n}rem; height: ${s}rem;`, a, c;
  function f() {
    a == null || a.destroy();
    const u = document.createElement("canvas");
    for (; r.firstChild; )
      r.firstChild.remove();
    r.appendChild(u), l(6, c = t.key), l(5, a = new Gi(u, t));
  }
  Ze(() => (f(), () => {
    a == null || a.destroy(), l(5, a = void 0);
  }));
  function d(u) {
    be[u ? "unshift" : "push"](() => {
      r = u, l(0, r);
    });
  }
  return i.$$set = (u) => {
    "viewModel" in u && l(2, t = u.viewModel), "width" in u && l(3, n = u.width), "height" in u && l(4, s = u.height);
  }, i.$$.update = () => {
    i.$$.dirty & /*graphView, viewModel, previousKey*/
    100 && a && t.key !== c && f();
  }, [
    r,
    o,
    t,
    n,
    s,
    a,
    c,
    d
  ];
}
class In extends ee {
  constructor(e) {
    super(), Y(this, e, Oi, Hi, X, { viewModel: 2, width: 3, height: 4 }, Fi);
  }
}
function Ui(i) {
  ne(i, "svelte-1d7myx7", ".detail-box.svelte-1d7myx7{display:flex;flex-direction:column}.title-row.svelte-1d7myx7{display:flex;flex-direction:row;align-items:baseline}.title.svelte-1d7myx7{margin-left:0.7rem;font-size:1.1em;font-weight:700;cursor:pointer}.subtitle.svelte-1d7myx7{color:#aaa;margin-left:0.4rem}.content-container.svelte-1d7myx7{display:flex;flex-direction:column;width:31.6rem;height:27.6rem}.content.svelte-1d7myx7{display:flex;flex-direction:column;height:26rem;padding:0.5rem;border-width:0.3rem;border-style:solid;border-radius:0.8rem}.graph-container.svelte-1d7myx7{position:relative;display:flex;width:30rem;height:22rem;margin-bottom:0.2rem}.message-container.svelte-1d7myx7{display:flex;flex-direction:column;flex:1;justify-content:flex-end}.data-row.svelte-1d7myx7{display:flex;flex-direction:row;align-items:baseline}.data-label.svelte-1d7myx7{font-size:0.9em;color:#aaa;width:2rem;margin-right:0.4rem;text-align:right}");
}
function It(i) {
  let e, l, t = (
    /*viewModel*/
    i[0].title + ""
  ), n, s, r = (
    /*viewModel*/
    i[0].subtitle && zt(i)
  );
  return {
    c() {
      e = h("div"), l = h("div"), r && r.c(), p(l, "class", "title svelte-1d7myx7"), p(e, "class", "title-row no-selection svelte-1d7myx7");
    },
    m(o, a) {
      y(o, e, a), b(e, l), l.innerHTML = t, r && r.m(e, null), n || (s = re(
        l,
        "click",
        /*onTitleClicked*/
        i[4]
      ), n = !0);
    },
    p(o, a) {
      a & /*viewModel*/
      1 && t !== (t = /*viewModel*/
      o[0].title + "") && (l.innerHTML = t), /*viewModel*/
      o[0].subtitle ? r ? r.p(o, a) : (r = zt(o), r.c(), r.m(e, null)) : r && (r.d(1), r = null);
    },
    d(o) {
      o && $(e), r && r.d(), n = !1, s();
    }
  };
}
function zt(i) {
  let e, l = (
    /*viewModel*/
    i[0].subtitle + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "subtitle svelte-1d7myx7");
    },
    m(t, n) {
      y(t, e, n), e.innerHTML = l;
    },
    p(t, n) {
      n & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      t[0].subtitle + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function jt(i) {
  let e, l, t, n, s, r;
  t = new In({
    props: {
      viewModel: (
        /*$content*/
        i[3].comparisonGraphViewModel
      ),
      width: "30",
      height: "22"
    }
  });
  function o(f, d) {
    return (
      /*$content*/
      f[3].message ? Zi : Xi
    );
  }
  let a = o(i), c = a(i);
  return {
    c() {
      e = h("div"), l = h("div"), q(t.$$.fragment), n = h("div"), c.c(), p(l, "class", "graph-container svelte-1d7myx7"), p(n, "class", "message-container svelte-1d7myx7"), p(e, "class", s = "content " + /*$content*/
      i[3].bucketClass + " svelte-1d7myx7");
    },
    m(f, d) {
      y(f, e, d), b(e, l), z(t, l, null), b(e, n), c.m(n, null), r = !0;
    },
    p(f, d) {
      const u = {};
      d & /*$content*/
      8 && (u.viewModel = /*$content*/
      f[3].comparisonGraphViewModel), t.$set(u), a === (a = o(f)) && c ? c.p(f, d) : (c.d(1), c = a(f), c && (c.c(), c.m(n, null))), (!r || d & /*$content*/
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
function Xi(i) {
  let e, l, t, n = Te(
    /*$content*/
    i[3].diffReport.avgDiff
  ) + "", s, r, o, a, c = Te(
    /*$content*/
    i[3].diffReport.minDiff
  ) + "", f, d, u, m, v = Te(
    /*$content*/
    i[3].diffReport.maxDiff
  ) + "", _, k = (
    /*$content*/
    i[3].diffReport.maxDiffPoint && Pt(i)
  );
  return {
    c() {
      e = h("div"), l = h("div"), l.textContent = "avg", t = h("div"), s = I(n), r = h("div"), o = h("div"), o.textContent = "min", a = h("div"), f = I(c), d = h("div"), u = h("div"), u.textContent = "max", m = h("div"), _ = I(v), k && k.c(), p(l, "class", "data-label svelte-1d7myx7"), p(t, "class", "data-value"), p(e, "class", "data-row svelte-1d7myx7"), p(o, "class", "data-label svelte-1d7myx7"), p(a, "class", "data-value"), p(r, "class", "data-row svelte-1d7myx7"), p(u, "class", "data-label svelte-1d7myx7"), p(m, "class", "data-value"), p(d, "class", "data-row svelte-1d7myx7");
    },
    m(R, M) {
      y(R, e, M), b(e, l), b(e, t), b(t, s), y(R, r, M), b(r, o), b(r, a), b(a, f), y(R, d, M), b(d, u), b(d, m), b(m, _), k && k.m(d, null);
    },
    p(R, M) {
      M & /*$content*/
      8 && n !== (n = Te(
        /*$content*/
        R[3].diffReport.avgDiff
      ) + "") && W(s, n), M & /*$content*/
      8 && c !== (c = Te(
        /*$content*/
        R[3].diffReport.minDiff
      ) + "") && W(f, c), M & /*$content*/
      8 && v !== (v = Te(
        /*$content*/
        R[3].diffReport.maxDiff
      ) + "") && W(_, v), /*$content*/
      R[3].diffReport.maxDiffPoint ? k ? k.p(R, M) : (k = Pt(R), k.c(), k.m(d, null)) : k && (k.d(1), k = null);
    },
    d(R) {
      R && $(e), R && $(r), R && $(d), k && k.d();
    }
  };
}
function Zi(i) {
  let e, l = (
    /*$content*/
    i[3].message + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "message");
    },
    m(t, n) {
      y(t, e, n), e.innerHTML = l;
    },
    p(t, n) {
      n & /*$content*/
      8 && l !== (l = /*$content*/
      t[3].message + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function Pt(i) {
  let e, l, t = Ae(
    /*$content*/
    i[3].diffReport.maxDiffPoint.valueL
  ) + "", n, s, r, o = Ae(
    /*$content*/
    i[3].diffReport.maxDiffPoint.valueR
  ) + "", a, c, f, d = (
    /*$content*/
    i[3].diffReport.maxDiffPoint.time + ""
  ), u;
  return {
    c() {
      e = h("div"), e.textContent = " (", l = h("div"), n = I(t), s = h("div"), s.textContent = " | ", r = h("div"), a = I(o), c = h("div"), f = I(") at "), u = I(d), p(e, "class", "data-value"), p(l, "class", "data-value dataset-color-0"), p(s, "class", "data-value"), p(r, "class", "data-value dataset-color-1"), p(c, "class", "data-value");
    },
    m(m, v) {
      y(m, e, v), y(m, l, v), b(l, n), y(m, s, v), y(m, r, v), b(r, a), y(m, c, v), b(c, f), b(c, u);
    },
    p(m, v) {
      v & /*$content*/
      8 && t !== (t = Ae(
        /*$content*/
        m[3].diffReport.maxDiffPoint.valueL
      ) + "") && W(n, t), v & /*$content*/
      8 && o !== (o = Ae(
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
function Ji(i) {
  let e, l, t = (
    /*$content*/
    i[3] && jt(i)
  );
  return {
    c() {
      t && t.c(), e = H();
    },
    m(n, s) {
      t && t.m(n, s), y(n, e, s), l = !0;
    },
    p(n, s) {
      /*$content*/
      n[3] ? t ? (t.p(n, s), s & /*$content*/
      8 && g(t, 1)) : (t = jt(n), t.c(), g(t, 1), t.m(e.parentNode, e)) : t && (x(), w(t, 1, 1, () => {
        t = null;
      }), K());
    },
    i(n) {
      l || (g(t), l = !0);
    },
    o(n) {
      w(t), l = !1;
    },
    d(n) {
      t && t.d(n), n && $(e);
    }
  };
}
function Qi(i) {
  let e, l, t, n, s, r = (
    /*viewModel*/
    i[0].title && It(i)
  );
  function o(c) {
    i[7](c);
  }
  let a = {
    $$slots: { default: [Ji] },
    $$scope: { ctx: i }
  };
  return (
    /*visible*/
    i[1] !== void 0 && (a.visible = /*visible*/
    i[1]), t = new pt({ props: a }), be.push(() => ht(t, "visible", o)), {
      c() {
        e = h("div"), r && r.c(), l = h("div"), q(t.$$.fragment), p(l, "class", "content-container svelte-1d7myx7"), p(e, "class", "detail-box svelte-1d7myx7");
      },
      m(c, f) {
        y(c, e, f), r && r.m(e, null), b(e, l), z(t, l, null), s = !0;
      },
      p(c, [f]) {
        /*viewModel*/
        c[0].title ? r ? r.p(c, f) : (r = It(c), r.c(), r.m(e, l)) : r && (r.d(1), r = null);
        const d = {};
        f & /*$$scope, $content*/
        520 && (d.$$scope = { dirty: f, ctx: c }), !n && f & /*visible*/
        2 && (n = !0, d.visible = /*visible*/
        c[1], ut(() => n = !1)), t.$set(d);
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
function Te(i) {
  return i != null ? `${i.toFixed(2)}%` : "n/a";
}
function Ae(i) {
  return i != null ? i.toFixed(4) : "undefined";
}
function Yi(i, e, l) {
  let t, n = E, s = () => (n(), n = Pe(o, (v) => l(3, t = v)), o);
  i.$$.on_destroy.push(() => n());
  let { viewModel: r } = e, o = r.content;
  s();
  let a = !1, c = a, f;
  const d = qe();
  function u() {
    d("toggle");
  }
  function m(v) {
    a = v, l(1, a);
  }
  return i.$$set = (v) => {
    "viewModel" in v && l(0, r = v.viewModel);
  }, i.$$.update = () => {
    i.$$.dirty & /*visible, previousVisible, viewModel, previousViewModel*/
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
class Je extends ee {
  constructor(e) {
    super(), Y(this, e, Yi, Qi, X, { viewModel: 0 }, Ui);
  }
}
function es(i) {
  ne(i, "svelte-1sac0ts", ".detail-row.svelte-1sac0ts{display:flex;flex-direction:column}.title-row.svelte-1sac0ts{display:flex;flex-direction:row;align-items:baseline;margin-bottom:0.5rem}.title.svelte-1sac0ts{margin-right:0.8rem;font-size:1.6em;font-weight:700}.subtitle.svelte-1sac0ts{font-size:1.3em;color:#aaa}.subtitle.svelte-1sac0ts .subtitle-sep{color:#666}.boxes.svelte-1sac0ts{display:flex;flex-direction:row;flex:1}.box-container.svelte-1sac0ts{width:31.6rem;height:29rem}.box-container.dimmed.svelte-1sac0ts{opacity:0.2}.spacer-flex.svelte-1sac0ts{flex:1}.context-graphs-container.svelte-1sac0ts{display:inline-flex;flex-direction:column;margin-top:1rem;background-color:#555}.context-graph-row.svelte-1sac0ts{display:flex;flex-direction:row;margin:1rem 0}.context-graph-spacer.svelte-1sac0ts{flex:0 0 2rem}");
}
function qt(i, e, l) {
  const t = i.slice();
  return t[7] = e[l], t;
}
function Nt(i) {
  let e, l, t = (
    /*viewModel*/
    i[0].title + ""
  ), n, s = (
    /*viewModel*/
    i[0].subtitle && Bt(i)
  );
  return {
    c() {
      e = h("div"), l = h("div"), n = I(t), s && s.c(), p(l, "class", "title svelte-1sac0ts"), p(e, "class", "title-row svelte-1sac0ts");
    },
    m(r, o) {
      y(r, e, o), b(e, l), b(l, n), s && s.m(e, null);
    },
    p(r, o) {
      o & /*viewModel*/
      1 && t !== (t = /*viewModel*/
      r[0].title + "") && W(n, t), /*viewModel*/
      r[0].subtitle ? s ? s.p(r, o) : (s = Bt(r), s.c(), s.m(e, null)) : s && (s.d(1), s = null);
    },
    d(r) {
      r && $(e), s && s.d();
    }
  };
}
function Bt(i) {
  let e, l = (
    /*viewModel*/
    i[0].subtitle + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "subtitle svelte-1sac0ts");
    },
    m(t, n) {
      y(t, e, n), e.innerHTML = l;
    },
    p(t, n) {
      n & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      t[0].subtitle + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function xt(i) {
  let e, l;
  return e = new Je({
    props: { viewModel: (
      /*viewModel*/
      i[0].boxes[0]
    ) }
  }), e.$on(
    "toggle",
    /*toggle_handler*/
    i[4]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n & /*viewModel*/
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
function Kt(i) {
  let e, l;
  return e = new Je({
    props: { viewModel: (
      /*viewModel*/
      i[0].boxes[1]
    ) }
  }), e.$on(
    "toggle",
    /*toggle_handler_1*/
    i[5]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n & /*viewModel*/
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
function Et(i) {
  let e, l;
  return e = new Je({
    props: { viewModel: (
      /*viewModel*/
      i[0].boxes[2]
    ) }
  }), e.$on(
    "toggle",
    /*toggle_handler_2*/
    i[6]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n & /*viewModel*/
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
function Wt(i) {
  let e, l, t = (
    /*contextGraphRows*/
    i[2] && Gt(i)
  );
  return {
    c() {
      e = h("div"), t && t.c(), p(e, "class", "context-graphs-container svelte-1sac0ts");
    },
    m(n, s) {
      y(n, e, s), t && t.m(e, null), l = !0;
    },
    p(n, s) {
      /*contextGraphRows*/
      n[2] ? t ? (t.p(n, s), s & /*contextGraphRows*/
      4 && g(t, 1)) : (t = Gt(n), t.c(), g(t, 1), t.m(e, null)) : t && (x(), w(t, 1, 1, () => {
        t = null;
      }), K());
    },
    i(n) {
      l || (g(t), l = !0);
    },
    o(n) {
      w(t), l = !1;
    },
    d(n) {
      n && $(e), t && t.d();
    }
  };
}
function Gt(i) {
  let e, l, t = (
    /*contextGraphRows*/
    i[2]
  ), n = [];
  for (let r = 0; r < t.length; r += 1)
    n[r] = At(qt(i, t, r));
  const s = (r) => w(n[r], 1, 1, () => {
    n[r] = null;
  });
  return {
    c() {
      for (let r = 0; r < n.length; r += 1)
        n[r].c();
      e = H();
    },
    m(r, o) {
      for (let a = 0; a < n.length; a += 1)
        n[a] && n[a].m(r, o);
      y(r, e, o), l = !0;
    },
    p(r, o) {
      if (o & /*contextGraphRows*/
      4) {
        t = /*contextGraphRows*/
        r[2];
        let a;
        for (a = 0; a < t.length; a += 1) {
          const c = qt(r, t, a);
          n[a] ? (n[a].p(c, o), g(n[a], 1)) : (n[a] = At(c), n[a].c(), g(n[a], 1), n[a].m(e.parentNode, e));
        }
        for (x(), a = t.length; a < n.length; a += 1)
          s(a);
        K();
      }
    },
    i(r) {
      if (!l) {
        for (let o = 0; o < t.length; o += 1)
          g(n[o]);
        l = !0;
      }
    },
    o(r) {
      n = n.filter(Boolean);
      for (let o = 0; o < n.length; o += 1)
        w(n[o]);
      l = !1;
    },
    d(r) {
      O(n, r), r && $(e);
    }
  };
}
function At(i) {
  let e, l, t, n, s, r, o;
  return t = new Ue({
    props: {
      viewModel: (
        /*rowViewModel*/
        i[7].graphL
      )
    }
  }), s = new Ue({
    props: {
      viewModel: (
        /*rowViewModel*/
        i[7].graphR
      )
    }
  }), {
    c() {
      e = h("div"), l = h("div"), q(t.$$.fragment), n = h("div"), q(s.$$.fragment), r = h("div"), p(l, "class", "spacer-flex svelte-1sac0ts"), p(n, "class", "context-graph-spacer svelte-1sac0ts"), p(r, "class", "spacer-flex svelte-1sac0ts"), p(e, "class", "context-graph-row svelte-1sac0ts");
    },
    m(a, c) {
      y(a, e, c), b(e, l), z(t, e, null), b(e, n), z(s, e, null), b(e, r), o = !0;
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
function ts(i) {
  let e, l, t, n, s, r, o, a, c = (
    /*viewModel*/
    i[0].showTitle && Nt(i)
  ), f = (
    /*viewModel*/
    i[0].boxes[0] && xt(i)
  ), d = (
    /*viewModel*/
    i[0].boxes[1] && Kt(i)
  ), u = (
    /*viewModel*/
    i[0].boxes[2] && Et(i)
  ), m = (
    /*expandedIndex*/
    i[1] !== void 0 && Wt(i)
  );
  return {
    c() {
      e = h("div"), c && c.c(), l = h("div"), t = h("div"), f && f.c(), n = h("div"), s = h("div"), d && d.c(), r = h("div"), o = h("div"), u && u.c(), m && m.c(), p(t, "class", "box-container svelte-1sac0ts"), he(t, "dimmed", Ve(
        0,
        /*expandedIndex*/
        i[1]
      )), p(n, "class", "spacer-flex svelte-1sac0ts"), p(s, "class", "box-container svelte-1sac0ts"), he(s, "dimmed", Ve(
        1,
        /*expandedIndex*/
        i[1]
      )), p(r, "class", "spacer-flex svelte-1sac0ts"), p(o, "class", "box-container svelte-1sac0ts"), he(o, "dimmed", Ve(
        2,
        /*expandedIndex*/
        i[1]
      )), p(l, "class", "boxes svelte-1sac0ts"), p(e, "class", "detail-row svelte-1sac0ts");
    },
    m(v, _) {
      y(v, e, _), c && c.m(e, null), b(e, l), b(l, t), f && f.m(t, null), b(l, n), b(l, s), d && d.m(s, null), b(l, r), b(l, o), u && u.m(o, null), m && m.m(e, null), a = !0;
    },
    p(v, [_]) {
      /*viewModel*/
      v[0].showTitle ? c ? c.p(v, _) : (c = Nt(v), c.c(), c.m(e, l)) : c && (c.d(1), c = null), /*viewModel*/
      v[0].boxes[0] ? f ? (f.p(v, _), _ & /*viewModel*/
      1 && g(f, 1)) : (f = xt(v), f.c(), g(f, 1), f.m(t, null)) : f && (x(), w(f, 1, 1, () => {
        f = null;
      }), K()), (!a || _ & /*isDimmed, expandedIndex*/
      2) && he(t, "dimmed", Ve(
        0,
        /*expandedIndex*/
        v[1]
      )), /*viewModel*/
      v[0].boxes[1] ? d ? (d.p(v, _), _ & /*viewModel*/
      1 && g(d, 1)) : (d = Kt(v), d.c(), g(d, 1), d.m(s, null)) : d && (x(), w(d, 1, 1, () => {
        d = null;
      }), K()), (!a || _ & /*isDimmed, expandedIndex*/
      2) && he(s, "dimmed", Ve(
        1,
        /*expandedIndex*/
        v[1]
      )), /*viewModel*/
      v[0].boxes[2] ? u ? (u.p(v, _), _ & /*viewModel*/
      1 && g(u, 1)) : (u = Et(v), u.c(), g(u, 1), u.m(o, null)) : u && (x(), w(u, 1, 1, () => {
        u = null;
      }), K()), (!a || _ & /*isDimmed, expandedIndex*/
      2) && he(o, "dimmed", Ve(
        2,
        /*expandedIndex*/
        v[1]
      )), /*expandedIndex*/
      v[1] !== void 0 ? m ? (m.p(v, _), _ & /*expandedIndex*/
      2 && g(m, 1)) : (m = Wt(v), m.c(), g(m, 1), m.m(e, null)) : m && (x(), w(m, 1, 1, () => {
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
function Ve(i, e) {
  return e !== void 0 && i !== e;
}
function ls(i, e, l) {
  let { viewModel: t } = e, n, s;
  function r(f) {
    f === n ? (l(1, n = void 0), l(2, s = void 0)) : (l(1, n = f), l(2, s = Ei(t.boxes[f])));
  }
  const o = () => r(0), a = () => r(1), c = () => r(2);
  return i.$$set = (f) => {
    "viewModel" in f && l(0, t = f.viewModel);
  }, i.$$.update = () => {
    i.$$.dirty & /*viewModel*/
    1 && t && (l(1, n = void 0), l(2, s = void 0));
  }, [
    t,
    n,
    s,
    r,
    o,
    a,
    c
  ];
}
class ns extends ee {
  constructor(e) {
    super(), Y(this, e, ls, ts, X, { viewModel: 0 }, es);
  }
}
function is(i) {
  ne(i, "svelte-4p3lgl", '.dataset-container.svelte-4p3lgl{display:flex;flex:1;flex-direction:column}.dataset-row.svelte-4p3lgl{display:flex;flex:1;align-items:baseline;margin-left:0.6rem;cursor:pointer}.dataset-row.svelte-4p3lgl:hover{background-color:rgba(255, 255, 255, 0.05)}.dataset-arrow.svelte-4p3lgl{color:#777}.legend-item.svelte-4p3lgl{font-family:"Roboto Condensed";font-weight:700;font-size:1rem;margin:0.2rem 0.4rem;padding:0.25rem 0.6rem 0.2rem 0.6rem;color:#fff;text-align:center}.detail-box-container.svelte-4p3lgl{display:flex;flex:1;margin-top:0.2rem;margin-bottom:0.8rem;margin-left:0.4rem}');
}
function ss(i) {
  let e, l = (
    /*legendLabelR*/
    i[7].toUpperCase() + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "legend-item svelte-4p3lgl"), se(
        e,
        "background-color",
        /*legendColorR*/
        i[5]
      );
    },
    m(t, n) {
      y(t, e, n), e.innerHTML = l;
    },
    p: E,
    d(t) {
      t && $(e);
    }
  };
}
function os(i) {
  let e, l = (
    /*legendLabelL*/
    i[6].toUpperCase() + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "legend-item svelte-4p3lgl"), se(
        e,
        "background-color",
        /*legendColorL*/
        i[4]
      );
    },
    m(t, n) {
      y(t, e, n), e.innerHTML = l;
    },
    p: E,
    d(t) {
      t && $(e);
    }
  };
}
function rs(i) {
  let e, l;
  return {
    c() {
      e = h("div"), l = I(
        /*nameR*/
        i[3]
      ), p(e, "class", "dataset-name " + /*bucketClass*/
      i[8] + " svelte-4p3lgl");
    },
    m(t, n) {
      y(t, e, n), b(e, l);
    },
    p: E,
    d(t) {
      t && $(e);
    }
  };
}
function as(i) {
  let e, l;
  return {
    c() {
      e = h("div"), l = I(
        /*nameL*/
        i[2]
      ), p(e, "class", "dataset-name " + /*bucketClass*/
      i[8] + " svelte-4p3lgl");
    },
    m(t, n) {
      y(t, e, n), b(e, l);
    },
    p: E,
    d(t) {
      t && $(e);
    }
  };
}
function cs(i) {
  let e, l, t, n, s;
  return {
    c() {
      e = h("div"), l = I(
        /*nameL*/
        i[2]
      ), t = h("span"), t.textContent = " -> ", n = h("div"), s = I(
        /*nameR*/
        i[3]
      ), p(e, "class", "dataset-name " + /*bucketClass*/
      i[8] + " svelte-4p3lgl"), p(t, "class", "dataset-arrow svelte-4p3lgl"), p(n, "class", "dataset-name " + /*bucketClass*/
      i[8] + " svelte-4p3lgl");
    },
    m(r, o) {
      y(r, e, o), b(e, l), y(r, t, o), y(r, n, o), b(n, s);
    },
    p: E,
    d(r) {
      r && $(e), r && $(t), r && $(n);
    }
  };
}
function Ft(i) {
  let e, l, t;
  return l = new Je({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].detailBoxViewModel
      )
    }
  }), {
    c() {
      e = h("div"), q(l.$$.fragment), p(e, "class", "detail-box-container svelte-4p3lgl");
    },
    m(n, s) {
      y(n, e, s), z(l, e, null), t = !0;
    },
    p(n, s) {
      const r = {};
      s & /*viewModel*/
      1 && (r.viewModel = /*viewModel*/
      n[0].detailBoxViewModel), l.$set(r);
    },
    i(n) {
      t || (g(l.$$.fragment, n), t = !0);
    },
    o(n) {
      w(l.$$.fragment, n), t = !1;
    },
    d(n) {
      n && $(e), j(l);
    }
  };
}
function fs(i) {
  let e, l, t, n, s, r;
  function o(v, _) {
    if (
      /*legendLabelL*/
      v[6] && !/*legendLabelR*/
      v[7]
    )
      return os;
    if (
      /*legendLabelR*/
      v[7]
    )
      return ss;
  }
  let a = o(i), c = a && a(i);
  function f(v, _) {
    if (
      /*nameL*/
      v[2] && /*nameR*/
      v[3] && /*nameL*/
      v[2] !== /*nameR*/
      v[3]
    )
      return cs;
    if (
      /*nameL*/
      v[2] && !/*nameR*/
      v[3]
    )
      return as;
    if (
      /*nameR*/
      v[3]
    )
      return rs;
  }
  let d = f(i), u = d && d(i), m = (
    /*$detailBoxVisible*/
    i[1] && Ft(i)
  );
  return {
    c() {
      e = h("div"), l = h("div"), c && c.c(), t = H(), u && u.c(), m && m.c(), p(l, "class", "dataset-row svelte-4p3lgl"), p(e, "class", "dataset-container svelte-4p3lgl");
    },
    m(v, _) {
      y(v, e, _), b(e, l), c && c.m(l, null), b(l, t), u && u.m(l, null), m && m.m(e, null), n = !0, s || (r = re(
        l,
        "click",
        /*onDatasetClicked*/
        i[10]
      ), s = !0);
    },
    p(v, [_]) {
      c && c.p(v, _), u && u.p(v, _), /*$detailBoxVisible*/
      v[1] ? m ? (m.p(v, _), _ & /*$detailBoxVisible*/
      2 && g(m, 1)) : (m = Ft(v), m.c(), g(m, 1), m.m(e, null)) : m && (x(), w(m, 1, 1, () => {
        m = null;
      }), K());
    },
    i(v) {
      n || (g(m), n = !0);
    },
    o(v) {
      w(m), n = !1;
    },
    d(v) {
      v && $(e), c && c.d(), u && u.d(), m && m.d(), s = !1, r();
    }
  };
}
function ds(i, e, l) {
  let t, { viewModel: n } = e;
  const s = n.nameL, r = n.nameR, o = n.legendColorL, a = n.legendColorR, c = n.legendLabelL, f = n.legendLabelR, d = n.bucketClass, u = n.detailBoxVisible;
  ge(i, u, (v) => l(1, t = v));
  function m() {
    u.update((v) => !v);
  }
  return i.$$set = (v) => {
    "viewModel" in v && l(0, n = v.viewModel);
  }, [
    n,
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
class us extends ee {
  constructor(e) {
    super(), Y(this, e, ds, fs, X, { viewModel: 0 }, is);
  }
}
function ms(i) {
  ne(i, "svelte-1scaj70", ".graphs-row.svelte-1scaj70{display:flex;flex-direction:row;flex:1}.spacer-flex.svelte-1scaj70{flex:1}.spacer-fixed.svelte-1scaj70{flex:0 0 2rem}.content.svelte-1scaj70{display:flex;flex-direction:column;flex:1}.graphs-container.svelte-1scaj70{display:flex;flex-direction:row}.metadata-container.svelte-1scaj70{display:flex;flex-direction:column}.metadata-header.svelte-1scaj70{margin-top:0.6rem}.metadata-row.svelte-1scaj70{display:flex;flex-direction:row}.metadata-row.svelte-1scaj70:hover{background-color:rgba(255, 255, 255, 0.05)}.metadata-col.svelte-1scaj70{display:flex;width:38rem;align-items:baseline}.metadata-key.svelte-1scaj70{color:#aaa;font-size:0.8em;margin-left:1rem}");
}
function Ht(i, e, l) {
  const t = i.slice();
  return t[2] = e[l], t;
}
function Ot(i, e, l) {
  const t = i.slice();
  return t[2] = e[l], t;
}
function Ut(i) {
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
function Xt(i) {
  let e, l, t = (
    /*viewModel*/
    i[0].metadataRows
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = Zt(Ot(i, t, s));
  return {
    c() {
      e = h("div"), e.textContent = "Metadata differences:";
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      l = H(), p(e, "class", "metadata-header svelte-1scaj70");
    },
    m(s, r) {
      y(s, e, r);
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, r);
      y(s, l, r);
    },
    p(s, r) {
      if (r & /*viewModel*/
      1) {
        t = /*viewModel*/
        s[0].metadataRows;
        let o;
        for (o = 0; o < t.length; o += 1) {
          const a = Ot(s, t, o);
          n[o] ? n[o].p(a, r) : (n[o] = Zt(a), n[o].c(), n[o].m(l.parentNode, l));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && $(e), O(n, s), s && $(l);
    }
  };
}
function Zt(i) {
  let e, l, t, n = (
    /*row*/
    i[2].key + ""
  ), s, r, o, a = (
    /*row*/
    (i[2].valueL || "n/a") + ""
  ), c, f, d, u, m = (
    /*row*/
    i[2].key + ""
  ), v, _, k, R = (
    /*row*/
    (i[2].valueR || "n/a") + ""
  ), M;
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), s = I(n), r = h("span"), r.textContent = " ", o = h("div"), c = I(a), f = h("div"), d = h("div"), u = h("div"), v = I(m), _ = h("span"), _.textContent = " ", k = h("div"), M = I(R), p(t, "class", "metadata-key svelte-1scaj70"), p(o, "class", "metadata-value"), p(l, "class", "metadata-col svelte-1scaj70"), p(f, "class", "spacer-fixed svelte-1scaj70"), p(u, "class", "metadata-key svelte-1scaj70"), p(k, "class", "metadata-value"), p(d, "class", "metadata-col svelte-1scaj70"), p(e, "class", "metadata-row svelte-1scaj70");
    },
    m(C, S) {
      y(C, e, S), b(e, l), b(l, t), b(t, s), b(l, r), b(l, o), b(o, c), b(e, f), b(e, d), b(d, u), b(u, v), b(d, _), b(d, k), b(k, M);
    },
    p(C, S) {
      S & /*viewModel*/
      1 && n !== (n = /*row*/
      C[2].key + "") && W(s, n), S & /*viewModel*/
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
function Jt(i) {
  let e, l, t, n = (
    /*viewModel*/
    i[0].datasetRows
  ), s = [];
  for (let o = 0; o < n.length; o += 1)
    s[o] = Qt(Ht(i, n, o));
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
        n = /*viewModel*/
        o[0].datasetRows;
        let c;
        for (c = 0; c < n.length; c += 1) {
          const f = Ht(o, n, c);
          s[c] ? (s[c].p(f, a), g(s[c], 1)) : (s[c] = Qt(f), s[c].c(), g(s[c], 1), s[c].m(l.parentNode, l));
        }
        for (x(), c = n.length; c < s.length; c += 1)
          r(c);
        K();
      }
    },
    i(o) {
      if (!t) {
        for (let a = 0; a < n.length; a += 1)
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
function Qt(i) {
  let e, l;
  return e = new us({ props: { viewModel: (
    /*row*/
    i[2]
  ) } }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n & /*viewModel*/
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
function Yt(i) {
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
function hs(i) {
  let e, l, t, n, s, r, o, a, c, f = (
    /*viewModel*/
    i[0].graphId + ""
  ), d, u, m, v = (
    /*align*/
    i[1] === "center" && Ut()
  );
  n = new Ue({
    props: { viewModel: (
      /*viewModel*/
      i[0].graphL
    ) }
  }), r = new Ue({
    props: { viewModel: (
      /*viewModel*/
      i[0].graphR
    ) }
  });
  let _ = (
    /*viewModel*/
    i[0].metadataRows.length > 0 && Xt(i)
  ), k = (
    /*viewModel*/
    i[0].datasetRows.length > 0 && Jt(i)
  ), R = (
    /*align*/
    i[1] === "center" && Yt()
  );
  return {
    c() {
      e = h("div"), v && v.c(), l = h("div"), t = h("div"), q(n.$$.fragment), s = h("div"), q(r.$$.fragment), o = h("div"), a = h("div"), c = I("id "), d = I(f), _ && _.c(), u = H(), k && k.c(), R && R.c(), p(s, "class", "spacer-fixed svelte-1scaj70"), p(t, "class", "graphs-container svelte-1scaj70"), p(a, "class", "metadata-header svelte-1scaj70"), p(o, "class", "metadata-container svelte-1scaj70"), p(l, "class", "content svelte-1scaj70"), p(e, "class", "graphs-row svelte-1scaj70");
    },
    m(M, C) {
      y(M, e, C), v && v.m(e, null), b(e, l), b(l, t), z(n, t, null), b(t, s), z(r, t, null), b(l, o), b(o, a), b(a, c), b(a, d), _ && _.m(o, null), b(o, u), k && k.m(o, null), R && R.m(e, null), m = !0;
    },
    p(M, [C]) {
      /*align*/
      M[1] === "center" ? v || (v = Ut(), v.c(), v.m(e, l)) : v && (v.d(1), v = null);
      const S = {};
      C & /*viewModel*/
      1 && (S.viewModel = /*viewModel*/
      M[0].graphL), n.$set(S);
      const D = {};
      C & /*viewModel*/
      1 && (D.viewModel = /*viewModel*/
      M[0].graphR), r.$set(D), (!m || C & /*viewModel*/
      1) && f !== (f = /*viewModel*/
      M[0].graphId + "") && W(d, f), /*viewModel*/
      M[0].metadataRows.length > 0 ? _ ? _.p(M, C) : (_ = Xt(M), _.c(), _.m(o, u)) : _ && (_.d(1), _ = null), /*viewModel*/
      M[0].datasetRows.length > 0 ? k ? (k.p(M, C), C & /*viewModel*/
      1 && g(k, 1)) : (k = Jt(M), k.c(), g(k, 1), k.m(o, null)) : k && (x(), w(k, 1, 1, () => {
        k = null;
      }), K()), /*align*/
      M[1] === "center" ? R || (R = Yt(), R.c(), R.m(e, null)) : R && (R.d(1), R = null);
    },
    i(M) {
      m || (g(n.$$.fragment, M), g(r.$$.fragment, M), g(k), m = !0);
    },
    o(M) {
      w(n.$$.fragment, M), w(r.$$.fragment, M), w(k), m = !1;
    },
    d(M) {
      M && $(e), v && v.d(), j(n), j(r), _ && _.d(), k && k.d(), R && R.d();
    }
  };
}
function ps(i, e, l) {
  let { viewModel: t } = e, { align: n = "center" } = e;
  return i.$$set = (s) => {
    "viewModel" in s && l(0, t = s.viewModel), "align" in s && l(1, n = s.align);
  }, [t, n];
}
class vs extends ee {
  constructor(e) {
    super(), Y(this, e, ps, hs, X, { viewModel: 0, align: 1 }, ms);
  }
}
function _s(i) {
  ne(i, "svelte-f61lok", ".compare-detail-container.svelte-f61lok{display:flex;flex-direction:column;flex:1}.header-container.svelte-f61lok{display:flex;flex-direction:column;margin:0 -1rem;padding:0 2rem;box-shadow:0 1rem 0.5rem -0.5rem rgba(0, 0, 0, 0.5);z-index:1}.title-and-links.svelte-f61lok{display:flex;flex-direction:row;align-items:center;height:4.5rem}.spacer-flex.svelte-f61lok{flex:1}.nav-links.svelte-f61lok{display:flex;flex-direction:row;font-size:0.8em}.nav-link-sep.svelte-f61lok{color:#444}.nav-link.svelte-f61lok{cursor:pointer;color:#777}.nav-link.disabled.svelte-f61lok{cursor:not-allowed;color:#555}.title-container.svelte-f61lok{display:flex;flex-direction:column}.pretitle.svelte-f61lok{margin-bottom:0.2rem;font-size:0.9em;font-weight:700;color:#aaa}.title-and-subtitle.svelte-f61lok{display:flex;flex-direction:row;align-items:baseline}.title.svelte-f61lok{margin-bottom:0.4rem;font-size:2em;font-weight:700;cursor:pointer}.subtitle.svelte-f61lok{font-size:1.2em;font-weight:700;margin-left:1.2rem;color:#aaa}.annotations.svelte-f61lok{margin-left:0.3rem;color:#aaa}.annotations.svelte-f61lok .annotation{margin:0 0.3rem;padding:0.1rem 0.3rem;background-color:#222;border:0.5px solid #555;border-radius:0.4rem}.related.svelte-f61lok{font-size:1em;color:#aaa;margin-bottom:0.6rem}ul.svelte-f61lok{margin:0.1rem 0;padding-left:2rem}.related.svelte-f61lok .related-sep{color:#666}.scroll-container.svelte-f61lok{display:flex;flex:1 1 1px;flex-direction:column;overflow:auto;padding:0 1rem;outline:none;background-color:#3c3c3c}.section-title.svelte-f61lok{font-size:1.7em;font-weight:700;margin-top:2.5rem;margin-bottom:1.5rem}.row-container.svelte-f61lok{margin-top:0.5rem;margin-bottom:4rem}.row-container.svelte-f61lok:first-child{margin-top:3rem}");
}
function el(i, e, l) {
  const t = i.slice();
  return t[10] = e[l], t;
}
function tl(i, e, l) {
  const t = i.slice();
  return t[13] = e[l], t;
}
function ll(i, e, l) {
  const t = i.slice();
  return t[16] = e[l], t;
}
function nl(i, e, l) {
  const t = i.slice();
  return t[19] = e[l], t;
}
function il(i) {
  let e, l = (
    /*viewModel*/
    i[0].pretitle + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "pretitle svelte-f61lok");
    },
    m(t, n) {
      y(t, e, n), e.innerHTML = l;
    },
    p(t, n) {
      n & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      t[0].pretitle + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function sl(i) {
  let e, l = (
    /*viewModel*/
    i[0].subtitle + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "subtitle svelte-f61lok");
    },
    m(t, n) {
      y(t, e, n), e.innerHTML = l;
    },
    p(t, n) {
      n & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      t[0].subtitle + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function ol(i) {
  let e, l = (
    /*viewModel*/
    i[0].annotations + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "annotations svelte-f61lok");
    },
    m(t, n) {
      y(t, e, n), e.innerHTML = l;
    },
    p(t, n) {
      n & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      t[0].annotations + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function rl(i) {
  let e, l, t = (
    /*viewModel*/
    i[0].relatedListHeader + ""
  ), n, s, r = (
    /*viewModel*/
    i[0].relatedItems
  ), o = [];
  for (let a = 0; a < r.length; a += 1)
    o[a] = al(nl(i, r, a));
  return {
    c() {
      e = h("div"), l = h("span"), n = I(t), s = h("ul");
      for (let a = 0; a < o.length; a += 1)
        o[a].c();
      p(s, "class", "svelte-f61lok"), p(e, "class", "related svelte-f61lok");
    },
    m(a, c) {
      y(a, e, c), b(e, l), b(l, n), b(e, s);
      for (let f = 0; f < o.length; f += 1)
        o[f] && o[f].m(s, null);
    },
    p(a, c) {
      if (c & /*viewModel*/
      1 && t !== (t = /*viewModel*/
      a[0].relatedListHeader + "") && W(n, t), c & /*viewModel*/
      1) {
        r = /*viewModel*/
        a[0].relatedItems;
        let f;
        for (f = 0; f < r.length; f += 1) {
          const d = nl(a, r, f);
          o[f] ? o[f].p(d, c) : (o[f] = al(d), o[f].c(), o[f].m(s, null));
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
function al(i) {
  let e, l = (
    /*relatedItem*/
    i[19] + ""
  );
  return {
    c() {
      e = h("li"), p(e, "class", "related-item");
    },
    m(t, n) {
      y(t, e, n), e.innerHTML = l;
    },
    p(t, n) {
      n & /*viewModel*/
      1 && l !== (l = /*relatedItem*/
      t[19] + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function cl(i) {
  let e, l, t = (
    /*viewModel*/
    i[0].graphSections
  ), n = [];
  for (let r = 0; r < t.length; r += 1)
    n[r] = ul(tl(i, t, r));
  const s = (r) => w(n[r], 1, 1, () => {
    n[r] = null;
  });
  return {
    c() {
      for (let r = 0; r < n.length; r += 1)
        n[r].c();
      e = h("div"), e.textContent = "All Datasets", p(e, "class", "section-title svelte-f61lok");
    },
    m(r, o) {
      for (let a = 0; a < n.length; a += 1)
        n[a] && n[a].m(r, o);
      y(r, e, o), l = !0;
    },
    p(r, o) {
      if (o & /*viewModel*/
      1) {
        t = /*viewModel*/
        r[0].graphSections;
        let a;
        for (a = 0; a < t.length; a += 1) {
          const c = tl(r, t, a);
          n[a] ? (n[a].p(c, o), g(n[a], 1)) : (n[a] = ul(c), n[a].c(), g(n[a], 1), n[a].m(e.parentNode, e));
        }
        for (x(), a = t.length; a < n.length; a += 1)
          s(a);
        K();
      }
    },
    i(r) {
      if (!l) {
        for (let o = 0; o < t.length; o += 1)
          g(n[o]);
        l = !0;
      }
    },
    o(r) {
      n = n.filter(Boolean);
      for (let o = 0; o < n.length; o += 1)
        w(n[o]);
      l = !1;
    },
    d(r) {
      O(n, r), r && $(e);
    }
  };
}
function fl(i) {
  let e, l;
  return e = new vs({
    props: {
      viewModel: (
        /*graphsRowViewModel*/
        i[16]
      ),
      align: "left"
    }
  }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n & /*viewModel*/
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
function dl(i) {
  let e, l = (
    /*graphsRowViewModel*/
    i[16]
  ), t, n = fl(i);
  return {
    c() {
      e = h("div"), n.c(), p(e, "class", "row-container svelte-f61lok");
    },
    m(s, r) {
      y(s, e, r), n.m(e, null), t = !0;
    },
    p(s, r) {
      r & /*viewModel*/
      1 && X(l, l = /*graphsRowViewModel*/
      s[16]) ? (x(), w(n, 1, 1, E), K(), n = fl(s), n.c(), g(n, 1), n.m(e, null)) : n.p(s, r);
    },
    i(s) {
      t || (g(n), t = !0);
    },
    o(s) {
      w(n), t = !1;
    },
    d(s) {
      s && $(e), n.d(s);
    }
  };
}
function ul(i) {
  let e, l = (
    /*graphsSectionViewModel*/
    i[13].title + ""
  ), t, n, s, r = (
    /*graphsSectionViewModel*/
    i[13].rows
  ), o = [];
  for (let c = 0; c < r.length; c += 1)
    o[c] = dl(ll(i, r, c));
  const a = (c) => w(o[c], 1, 1, () => {
    o[c] = null;
  });
  return {
    c() {
      e = h("div"), t = I(l);
      for (let c = 0; c < o.length; c += 1)
        o[c].c();
      n = H(), p(e, "class", "section-title svelte-f61lok");
    },
    m(c, f) {
      y(c, e, f), b(e, t);
      for (let d = 0; d < o.length; d += 1)
        o[d] && o[d].m(c, f);
      y(c, n, f), s = !0;
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
          const u = ll(c, r, d);
          o[d] ? (o[d].p(u, f), g(o[d], 1)) : (o[d] = dl(u), o[d].c(), g(o[d], 1), o[d].m(n.parentNode, n));
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
      c && $(e), O(o, c), c && $(n);
    }
  };
}
function ml(i) {
  let e, l, t;
  return l = new ns({
    props: {
      viewModel: (
        /*detailRowViewModel*/
        i[10]
      )
    }
  }), {
    c() {
      e = h("div"), q(l.$$.fragment), p(e, "class", "row-container svelte-f61lok");
    },
    m(n, s) {
      y(n, e, s), z(l, e, null), t = !0;
    },
    p(n, s) {
      const r = {};
      s & /*viewModel*/
      1 && (r.viewModel = /*detailRowViewModel*/
      n[10]), l.$set(r);
    },
    i(n) {
      t || (g(l.$$.fragment, n), t = !0);
    },
    o(n) {
      w(l.$$.fragment, n), t = !1;
    },
    d(n) {
      n && $(e), j(l);
    }
  };
}
function gs(i) {
  let e, l, t, n, s, r, o = (
    /*viewModel*/
    i[0].title + ""
  ), a, c, f, d, u, m, v, _, k, R, M, C = (
    /*viewModel*/
    i[0].pretitle && il(i)
  ), S = (
    /*viewModel*/
    i[0].subtitle && sl(i)
  ), D = (
    /*viewModel*/
    i[0].annotations && ol(i)
  ), N = (
    /*relatedItemsVisible*/
    i[2] && /*viewModel*/
    i[0].relatedItems.length > 0 && rl(i)
  ), V = (
    /*viewModel*/
    i[0].graphSections.length > 0 && cl(i)
  ), P = (
    /*viewModel*/
    i[0].detailRows
  ), T = [];
  for (let L = 0; L < P.length; L += 1)
    T[L] = ml(el(i, P, L));
  const A = (L) => w(T[L], 1, 1, () => {
    T[L] = null;
  });
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), n = h("div"), C && C.c(), s = h("div"), r = h("div"), S && S.c(), a = H(), D && D.c(), c = h("div"), f = h("div"), d = h("div"), d.textContent = "previous", u = h("div"), u.textContent = " | ", m = h("div"), m.textContent = "next", N && N.c(), v = h("div"), V && V.c(), _ = H();
      for (let L = 0; L < T.length; L += 1)
        T[L].c();
      p(r, "class", "title svelte-f61lok"), p(s, "class", "title-and-subtitle svelte-f61lok"), p(n, "class", "title-container svelte-f61lok"), p(c, "class", "spacer-flex svelte-f61lok"), p(d, "class", "nav-link svelte-f61lok"), he(
        d,
        "disabled",
        /*viewModel*/
        i[0].previousRowIndex === void 0
      ), p(u, "class", "nav-link-sep svelte-f61lok"), p(m, "class", "nav-link svelte-f61lok"), he(
        m,
        "disabled",
        /*viewModel*/
        i[0].nextRowIndex === void 0
      ), p(f, "class", "nav-links no-selection svelte-f61lok"), p(t, "class", "title-and-links svelte-f61lok"), p(l, "class", "header-container svelte-f61lok"), p(v, "class", "scroll-container svelte-f61lok"), p(v, "tabindex", "0"), p(e, "class", "compare-detail-container svelte-f61lok");
    },
    m(L, G) {
      y(L, e, G), b(e, l), b(l, t), b(t, n), C && C.m(n, null), b(n, s), b(s, r), r.innerHTML = o, S && S.m(s, null), b(s, a), D && D.m(s, null), b(t, c), b(t, f), b(f, d), b(f, u), b(f, m), N && N.m(l, null), b(e, v), V && V.m(v, null), b(v, _);
      for (let B = 0; B < T.length; B += 1)
        T[B] && T[B].m(v, null);
      i[8](v), k = !0, R || (M = [
        re(
          window,
          "keydown",
          /*onKeyDown*/
          i[4]
        ),
        re(
          r,
          "click",
          /*toggleRelatedItems*/
          i[5]
        ),
        re(
          d,
          "click",
          /*click_handler*/
          i[6]
        ),
        re(
          m,
          "click",
          /*click_handler_1*/
          i[7]
        )
      ], R = !0);
    },
    p(L, [G]) {
      if (/*viewModel*/
      L[0].pretitle ? C ? C.p(L, G) : (C = il(L), C.c(), C.m(n, s)) : C && (C.d(1), C = null), (!k || G & /*viewModel*/
      1) && o !== (o = /*viewModel*/
      L[0].title + "") && (r.innerHTML = o), /*viewModel*/
      L[0].subtitle ? S ? S.p(L, G) : (S = sl(L), S.c(), S.m(s, a)) : S && (S.d(1), S = null), /*viewModel*/
      L[0].annotations ? D ? D.p(L, G) : (D = ol(L), D.c(), D.m(s, null)) : D && (D.d(1), D = null), (!k || G & /*viewModel, undefined*/
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
      L[0].relatedItems.length > 0 ? N ? N.p(L, G) : (N = rl(L), N.c(), N.m(l, null)) : N && (N.d(1), N = null), /*viewModel*/
      L[0].graphSections.length > 0 ? V ? (V.p(L, G), G & /*viewModel*/
      1 && g(V, 1)) : (V = cl(L), V.c(), g(V, 1), V.m(v, _)) : V && (x(), w(V, 1, 1, () => {
        V = null;
      }), K()), G & /*viewModel*/
      1) {
        P = /*viewModel*/
        L[0].detailRows;
        let B;
        for (B = 0; B < P.length; B += 1) {
          const Z = el(L, P, B);
          T[B] ? (T[B].p(Z, G), g(T[B], 1)) : (T[B] = ml(Z), T[B].c(), g(T[B], 1), T[B].m(v, null));
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
      L && $(e), C && C.d(), S && S.d(), D && D.d(), N && N.d(), V && V.d(), O(T, L), i[8](null), R = !1, $e(M);
    }
  };
}
function bs(i, e, l) {
  let { viewModel: t } = e, n, s = !1;
  const r = qe();
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
    m.key === "ArrowLeft" ? (o("detail-previous"), m.preventDefault()) : m.key === "ArrowRight" ? (o("detail-next"), m.preventDefault()) : m.key === "ArrowUp" && n.scrollTop === 0 && (o("show-summary"), m.preventDefault());
  }
  function c() {
    l(2, s = !s);
  }
  Ze(() => {
    n.focus();
  });
  const f = () => o("detail-previous"), d = () => o("detail-next");
  function u(m) {
    be[m ? "unshift" : "push"](() => {
      n = m, l(1, n), l(0, t);
    });
  }
  return i.$$set = (m) => {
    "viewModel" in m && l(0, t = m.viewModel);
  }, i.$$.update = () => {
    i.$$.dirty & /*viewModel, scrollContainer*/
    3 && t && (n && l(1, n.scrollTop = 0, n), l(2, s = !1));
  }, [
    t,
    n,
    s,
    o,
    a,
    c,
    f,
    d,
    u
  ];
}
class ws extends ee {
  constructor(e) {
    super(), Y(this, e, bs, gs, X, { viewModel: 0 }, _s);
  }
}
function ks(i) {
  ne(i, "svelte-eztohb", `.header-container.svelte-eztohb{display:flex;flex-direction:column;margin:0 1rem;color:#aaa}.header-content.svelte-eztohb{display:flex;flex-direction:row;margin:0.4rem 0}.header-group.svelte-eztohb{display:flex;flex-direction:row;align-items:center}.spacer-flex.svelte-eztohb{flex:1}.spacer-fixed.svelte-eztohb{flex:0 0 4rem}.label.home.svelte-eztohb{color:#ddd;cursor:pointer}.label.home.svelte-eztohb:hover{color:#fff}.label.svelte-eztohb:not(:last-child){margin-right:1rem}select.svelte-eztohb{margin-right:1rem;font-family:Roboto, sans-serif;font-size:1em;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0.2rem 1.6rem 0.2rem 0.4rem;background:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23555'><polygon points='0,0 100,0 50,60'/></svg>") no-repeat;background-size:0.8rem;background-position:calc(100% - 0.4rem) 70%;background-repeat:no-repeat;background-color:#353535;border:none;border-radius:0.4rem}.line.svelte-eztohb{min-height:1px;margin-bottom:1rem;background-color:#555}`);
}
function hl(i, e, l) {
  const t = i.slice();
  return t[12] = e[l], t;
}
function pl(i, e, l) {
  const t = i.slice();
  return t[12] = e[l], t;
}
function $s(i) {
  let e, l, t, n, s;
  return {
    c() {
      e = h("div"), l = h("input"), t = h("label"), t.textContent = "Simplify Scenarios", p(l, "class", "checkbox"), p(l, "type", "checkbox"), p(l, "name", "simplify-toggle"), p(t, "for", "simplify-toggle"), p(e, "class", "header-group svelte-eztohb");
    },
    m(r, o) {
      y(r, e, o), b(e, l), l.checked = /*$simplifyScenarios*/
      i[1], b(e, t), n || (s = re(
        l,
        "change",
        /*input_change_handler*/
        i[10]
      ), n = !0);
    },
    p(r, o) {
      o & /*$simplifyScenarios*/
      2 && (l.checked = /*$simplifyScenarios*/
      r[1]);
    },
    d(r) {
      r && $(e), n = !1, s();
    }
  };
}
function vl(i) {
  let e, l, t, n, s, r, o, a, c = (
    /*thresholds*/
    i[5][0] + ""
  ), f, d = (
    /*thresholds*/
    i[5][1] + ""
  ), u, m = (
    /*thresholds*/
    i[5][2] + ""
  ), v, _ = (
    /*thresholds*/
    i[5][3] + ""
  ), k, R = (
    /*thresholds*/
    i[5][4] + ""
  );
  function M(P, T) {
    return (
      /*$bundleNamesL*/
      P[2].length > 1 ? Ms : ys
    );
  }
  let C = M(i), S = C(i);
  function D(P, T) {
    return (
      /*$bundleNamesR*/
      P[3].length > 1 ? Cs : Rs
    );
  }
  let N = D(i), V = N(i);
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), t.textContent = "Comparing:", S.c(), n = H(), V.c(), s = h("div"), r = h("div"), o = h("div"), o.textContent = "Thresholds:", a = h("div"), f = h("div"), u = h("div"), v = h("div"), k = h("div"), p(e, "class", "spacer-fixed svelte-eztohb"), p(t, "class", "label svelte-eztohb"), p(l, "class", "header-group svelte-eztohb"), p(s, "class", "spacer-fixed svelte-eztohb"), p(o, "class", "label svelte-eztohb"), p(a, "class", "label bucket-color-0 svelte-eztohb"), p(f, "class", "label bucket-color-1 svelte-eztohb"), p(u, "class", "label bucket-color-2 svelte-eztohb"), p(v, "class", "label bucket-color-3 svelte-eztohb"), p(k, "class", "label bucket-color-4 svelte-eztohb"), p(r, "class", "header-group svelte-eztohb");
    },
    m(P, T) {
      y(P, e, T), y(P, l, T), b(l, t), S.m(l, null), b(l, n), V.m(l, null), y(P, s, T), y(P, r, T), b(r, o), b(r, a), a.innerHTML = c, b(r, f), f.innerHTML = d, b(r, u), u.innerHTML = m, b(r, v), v.innerHTML = _, b(r, k), k.innerHTML = R;
    },
    p(P, T) {
      C === (C = M(P)) && S ? S.p(P, T) : (S.d(1), S = C(P), S && (S.c(), S.m(l, n))), N === (N = D(P)) && V ? V.p(P, T) : (V.d(1), V = N(P), V && (V.c(), V.m(l, null)));
    },
    d(P) {
      P && $(e), P && $(l), S.d(), V.d(), P && $(s), P && $(r);
    }
  };
}
function ys(i) {
  let e, l = (
    /*viewModel*/
    i[0].nameL + ""
  ), t;
  return {
    c() {
      e = h("div"), t = I(l), p(e, "class", "label dataset-color-0 svelte-eztohb");
    },
    m(n, s) {
      y(n, e, s), b(e, t);
    },
    p(n, s) {
      s & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      n[0].nameL + "") && W(t, l);
    },
    d(n) {
      n && $(e);
    }
  };
}
function Ms(i) {
  let e, l, t, n = (
    /*$bundleNamesL*/
    i[2]
  ), s = [];
  for (let r = 0; r < n.length; r += 1)
    s[r] = _l(pl(i, n, r));
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
      l || (t = re(e, "change", Ds), l = !0);
    },
    p(r, o) {
      if (o & /*$bundleNamesL, viewModel*/
      5) {
        n = /*$bundleNamesL*/
        r[2];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const c = pl(r, n, a);
          s[a] ? s[a].p(c, o) : (s[a] = _l(c), s[a].c(), s[a].m(e, null));
        }
        for (; a < s.length; a += 1)
          s[a].d(1);
        s.length = n.length;
      }
    },
    d(r) {
      r && $(e), O(s, r), l = !1, t();
    }
  };
}
function _l(i) {
  let e, l = (
    /*name*/
    i[12] + ""
  ), t, n, s;
  return {
    c() {
      e = h("option"), t = I(l), e.selected = n = /*name*/
      i[12] === /*viewModel*/
      i[0].nameL, e.__value = s = /*name*/
      i[12], e.value = e.__value;
    },
    m(r, o) {
      y(r, e, o), b(e, t);
    },
    p(r, o) {
      o & /*$bundleNamesL*/
      4 && l !== (l = /*name*/
      r[12] + "") && W(t, l), o & /*$bundleNamesL, viewModel*/
      5 && n !== (n = /*name*/
      r[12] === /*viewModel*/
      r[0].nameL) && (e.selected = n), o & /*$bundleNamesL*/
      4 && s !== (s = /*name*/
      r[12]) && (e.__value = s, e.value = e.__value);
    },
    d(r) {
      r && $(e);
    }
  };
}
function Rs(i) {
  let e, l = (
    /*viewModel*/
    i[0].nameR + ""
  ), t;
  return {
    c() {
      e = h("div"), t = I(l), p(e, "class", "label dataset-color-1 svelte-eztohb");
    },
    m(n, s) {
      y(n, e, s), b(e, t);
    },
    p(n, s) {
      s & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      n[0].nameR + "") && W(t, l);
    },
    d(n) {
      n && $(e);
    }
  };
}
function Cs(i) {
  let e, l, t, n = (
    /*$bundleNamesR*/
    i[3]
  ), s = [];
  for (let r = 0; r < n.length; r += 1)
    s[r] = gl(hl(i, n, r));
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
      l || (t = re(e, "change", Ls), l = !0);
    },
    p(r, o) {
      if (o & /*$bundleNamesR, viewModel*/
      9) {
        n = /*$bundleNamesR*/
        r[3];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const c = hl(r, n, a);
          s[a] ? s[a].p(c, o) : (s[a] = gl(c), s[a].c(), s[a].m(e, null));
        }
        for (; a < s.length; a += 1)
          s[a].d(1);
        s.length = n.length;
      }
    },
    d(r) {
      r && $(e), O(s, r), l = !1, t();
    }
  };
}
function gl(i) {
  let e, l = (
    /*name*/
    i[12] + ""
  ), t, n, s;
  return {
    c() {
      e = h("option"), t = I(l), e.selected = n = /*name*/
      i[12] === /*viewModel*/
      i[0].nameR, e.__value = s = /*name*/
      i[12], e.value = e.__value;
    },
    m(r, o) {
      y(r, e, o), b(e, t);
    },
    p(r, o) {
      o & /*$bundleNamesR*/
      8 && l !== (l = /*name*/
      r[12] + "") && W(t, l), o & /*$bundleNamesR, viewModel*/
      9 && n !== (n = /*name*/
      r[12] === /*viewModel*/
      r[0].nameR) && (e.selected = n), o & /*$bundleNamesR*/
      8 && s !== (s = /*name*/
      r[12]) && (e.__value = s, e.value = e.__value);
    },
    d(r) {
      r && $(e);
    }
  };
}
function Ss(i) {
  let e, l, t, n, s, r, o, a, c, f = (
    /*simplifyScenarios*/
    i[4] !== void 0 && $s(i)
  ), d = (
    /*viewModel*/
    (i[0].nameL || /*$bundleNamesL*/
    i[2].length > 1) && vl(i)
  );
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), n = h("div"), n.textContent = "Home", s = h("div"), f && f.c(), r = H(), d && d.c(), o = h("div"), p(n, "class", "label home no-selection svelte-eztohb"), p(t, "class", "header-group svelte-eztohb"), p(s, "class", "spacer-flex svelte-eztohb"), p(l, "class", "header-content svelte-eztohb"), p(o, "class", "line svelte-eztohb"), p(e, "class", "header-container svelte-eztohb");
    },
    m(u, m) {
      y(u, e, m), b(e, l), b(l, t), b(t, n), b(l, s), f && f.m(l, null), b(l, r), d && d.m(l, null), b(e, o), a || (c = re(
        n,
        "click",
        /*onHome*/
        i[8]
      ), a = !0);
    },
    p(u, [m]) {
      /*simplifyScenarios*/
      u[4] !== void 0 && f.p(u, m), /*viewModel*/
      u[0].nameL || /*$bundleNamesL*/
      u[2].length > 1 ? d ? d.p(u, m) : (d = vl(u), d.c(), d.m(l, null)) : d && (d.d(1), d = null);
    },
    i: E,
    o: E,
    d(u) {
      u && $(e), f && f.d(), d && d.d(), a = !1, c();
    }
  };
}
function zn(i, e) {
  const l = new CustomEvent("sde-check-bundle", { detail: { kind: i, name: e } });
  document.dispatchEvent(l);
}
function Ds(i) {
  zn("left", i.target.value);
}
function Ls(i) {
  zn("right", i.target.value);
}
function Ts(i, e, l) {
  let t, n, s, { viewModel: r } = e;
  const o = r.simplifyScenarios;
  ge(i, o, (_) => l(1, t = _));
  const a = r.thresholds, c = r.bundleNamesL;
  ge(i, c, (_) => l(2, n = _));
  const f = r.bundleNamesR;
  ge(i, f, (_) => l(3, s = _));
  const d = qe();
  function u() {
    d("command", { cmd: "show-summary" });
  }
  let m = !0;
  function v() {
    t = this.checked, o.set(t);
  }
  return i.$$set = (_) => {
    "viewModel" in _ && l(0, r = _.viewModel);
  }, i.$$.update = () => {
    i.$$.dirty & /*$simplifyScenarios, firstSimplify*/
    514 && t !== void 0 && (m ? l(9, m = !1) : document.dispatchEvent(new CustomEvent("sde-check-simplify-scenarios-toggled")));
  }, [
    r,
    t,
    n,
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
class Vs extends ee {
  constructor(e) {
    super(), Y(this, e, Ts, Ss, X, { viewModel: 0 }, ks);
  }
}
function Is(i) {
  ne(i, "svelte-1j1xz6h", ".dot-plot-container.svelte-1j1xz6h{position:relative;width:100%;height:1.6rem}.hline.svelte-1j1xz6h{position:absolute;left:0;top:0.7rem;width:100%;height:1px;background-color:#555}.vline.svelte-1j1xz6h{position:absolute;left:0;height:1.4rem;width:1px}.end-line.svelte-1j1xz6h{background-color:#555}.avg-line.svelte-1j1xz6h{width:2px;margin-left:-1px}.dot.svelte-1j1xz6h{position:absolute;top:0.3rem;width:0.8rem;height:0.8rem;margin-left:-0.4rem;border-radius:0.4rem;opacity:0.2}");
}
function bl(i, e, l) {
  const t = i.slice();
  return t[2] = e[l], t;
}
function wl(i) {
  let e, l;
  return {
    c() {
      e = h("div"), p(e, "class", l = "dot " + /*colorClass*/
      i[1] + " svelte-1j1xz6h"), se(
        e,
        "left",
        /*point*/
        i[2] + "%"
      );
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*colorClass*/
      2 && l !== (l = "dot " + /*colorClass*/
      t[1] + " svelte-1j1xz6h") && p(e, "class", l), n & /*viewModel*/
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
function zs(i) {
  let e, l, t, n, s, r, o = (
    /*viewModel*/
    i[0].points
  ), a = [];
  for (let c = 0; c < o.length; c += 1)
    a[c] = wl(bl(i, o, c));
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), n = h("div");
      for (let c = 0; c < a.length; c += 1)
        a[c].c();
      s = h("div"), p(l, "class", "hline svelte-1j1xz6h"), p(t, "class", "vline end-line svelte-1j1xz6h"), se(t, "left", "0"), p(n, "class", "vline end-line svelte-1j1xz6h"), se(n, "left", "100%"), p(s, "class", r = "vline avg-line " + /*colorClass*/
      i[1] + " svelte-1j1xz6h"), se(
        s,
        "left",
        /*viewModel*/
        i[0].avgPoint + "%"
      ), p(e, "class", "dot-plot-container svelte-1j1xz6h");
    },
    m(c, f) {
      y(c, e, f), b(e, l), b(e, t), b(e, n);
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
          const u = bl(c, o, d);
          a[d] ? a[d].p(u, f) : (a[d] = wl(u), a[d].c(), a[d].m(e, s));
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
function js(i, e, l) {
  let { viewModel: t } = e, { colorClass: n } = e;
  return i.$$set = (s) => {
    "viewModel" in s && l(0, t = s.viewModel), "colorClass" in s && l(1, n = s.colorClass);
  }, [t, n];
}
class at extends ee {
  constructor(e) {
    super(), Y(this, e, js, zs, X, { viewModel: 0, colorClass: 1 }, Is);
  }
}
function Ps(i) {
  ne(i, "svelte-15dp53", ".perf-container.svelte-15dp53{display:flex;flex-direction:column;padding:0 1rem}.controls-container.svelte-15dp53{display:flex;flex-direction:column;align-items:flex-start;height:3rem}.table-container.svelte-15dp53{display:flex;flex:1}table.svelte-15dp53{border-collapse:collapse}td.svelte-15dp53,th.svelte-15dp53{padding-top:0.2rem;padding-bottom:0.2rem}th.svelte-15dp53{color:#aaa;text-align:right;font-weight:500}td.svelte-15dp53{width:4.5rem;text-align:right;font-family:monospace}td.rownum.svelte-15dp53{width:2rem}td.dim.svelte-15dp53{color:#777}td.plot.svelte-15dp53{width:30rem;padding-left:2rem;padding-right:2rem}");
}
function kl(i, e, l) {
  const t = i.slice();
  return t[5] = e[l], t;
}
function qs(i) {
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
function Ns(i) {
  let e, l, t, n;
  return {
    c() {
      e = h("button"), l = I("Run"), p(e, "class", "run"), e.disabled = /*running*/
      i[0];
    },
    m(s, r) {
      y(s, e, r), b(e, l), t || (n = re(
        e,
        "click",
        /*onRun*/
        i[3]
      ), t = !0);
    },
    p(s, r) {
      r & /*running*/
      1 && (e.disabled = /*running*/
      s[0]);
    },
    d(s) {
      s && $(e), t = !1, n();
    }
  };
}
function $l(i) {
  let e, l, t, n = (
    /*$rows*/
    i[1]
  ), s = [];
  for (let o = 0; o < n.length; o += 1)
    s[o] = yl(kl(i, n, o));
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
        n = /*$rows*/
        o[1];
        let c;
        for (c = 0; c < n.length; c += 1) {
          const f = kl(o, n, c);
          s[c] ? (s[c].p(f, a), g(s[c], 1)) : (s[c] = yl(f), s[c].c(), g(s[c], 1), s[c].m(e, null));
        }
        for (x(), c = n.length; c < s.length; c += 1)
          r(c);
        K();
      }
    },
    i(o) {
      if (!t) {
        for (let a = 0; a < n.length; a += 1)
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
function yl(i) {
  let e, l, t = (
    /*row*/
    i[5].num + ""
  ), n, s, r = (
    /*row*/
    i[5].minTimeL + ""
  ), o, a, c = (
    /*row*/
    i[5].avgTimeL + ""
  ), f, d, u = (
    /*row*/
    i[5].maxTimeL + ""
  ), m, v, _, k, R, M = (
    /*row*/
    i[5].minTimeR + ""
  ), C, S, D = (
    /*row*/
    i[5].avgTimeR + ""
  ), N, V, P = (
    /*row*/
    i[5].maxTimeR + ""
  ), T, A, L, G;
  return _ = new at({
    props: {
      viewModel: (
        /*row*/
        i[5].dotPlotL
      ),
      colorClass: "dataset-bg-0"
    }
  }), L = new at({
    props: {
      viewModel: (
        /*row*/
        i[5].dotPlotR
      ),
      colorClass: "dataset-bg-1"
    }
  }), {
    c() {
      e = h("tr"), l = h("td"), n = I(t), s = h("td"), o = I(r), a = h("td"), f = I(c), d = h("td"), m = I(u), v = h("td"), q(_.$$.fragment), k = h("tr"), R = h("td"), C = I(M), S = h("td"), N = I(D), V = h("td"), T = I(P), A = h("td"), q(L.$$.fragment), p(l, "class", "rownum svelte-15dp53"), p(l, "rowspan", "2"), p(s, "class", "dim svelte-15dp53"), p(a, "class", "value dataset-color-0 svelte-15dp53"), p(d, "class", "dim svelte-15dp53"), p(v, "class", "plot svelte-15dp53"), p(R, "class", "dim svelte-15dp53"), p(S, "class", "value dataset-color-1 svelte-15dp53"), p(V, "class", "dim svelte-15dp53"), p(A, "class", "plot svelte-15dp53");
    },
    m(B, Z) {
      y(B, e, Z), b(e, l), b(l, n), b(e, s), b(s, o), b(e, a), b(a, f), b(e, d), b(d, m), b(e, v), z(_, v, null), y(B, k, Z), b(k, R), b(R, C), b(k, S), b(S, N), b(k, V), b(V, T), b(k, A), z(L, A, null), G = !0;
    },
    p(B, Z) {
      (!G || Z & /*$rows*/
      2) && t !== (t = /*row*/
      B[5].num + "") && W(n, t), (!G || Z & /*$rows*/
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
function Bs(i) {
  let e, l, t, n;
  function s(c, f) {
    return (
      /*running*/
      c[0] ? qs : Ns
    );
  }
  let r = s(i), o = r(i), a = (
    /*$rows*/
    i[1].length > 0 && $l(i)
  );
  return {
    c() {
      e = h("div"), l = h("div"), o.c(), t = h("div"), a && a.c(), p(l, "class", "controls-container svelte-15dp53"), p(t, "class", "table-container svelte-15dp53"), p(e, "class", "perf-container svelte-15dp53");
    },
    m(c, f) {
      y(c, e, f), b(e, l), o.m(l, null), b(e, t), a && a.m(t, null), n = !0;
    },
    p(c, [f]) {
      r === (r = s(c)) && o ? o.p(c, f) : (o.d(1), o = r(c), o && (o.c(), o.m(l, null))), /*$rows*/
      c[1].length > 0 ? a ? (a.p(c, f), f & /*$rows*/
      2 && g(a, 1)) : (a = $l(c), a.c(), g(a, 1), a.m(t, null)) : a && (x(), w(a, 1, 1, () => {
        a = null;
      }), K());
    },
    i(c) {
      n || (g(a), n = !0);
    },
    o(c) {
      w(a), n = !1;
    },
    d(c) {
      c && $(e), o.d(), a && a.d();
    }
  };
}
function xs(i, e, l) {
  let t, { viewModel: n } = e;
  const s = n.rows;
  ge(i, s, (a) => l(1, t = a));
  let r = !1;
  function o() {
    l(0, r = !0);
    const a = new Wn(n.bundleModelL, n.bundleModelR);
    a.onComplete = (c, f) => {
      n.addRow(c, f), l(0, r = !1);
    }, a.onError = (c) => {
      console.error(c), l(0, r = !1);
    }, a.start();
  }
  return i.$$set = (a) => {
    "viewModel" in a && l(4, n = a.viewModel);
  }, [r, t, s, o, n];
}
class Ks extends ee {
  constructor(e) {
    super(), Y(this, e, xs, Bs, X, { viewModel: 4 }, Ps);
  }
}
function Es(i) {
  ne(i, "svelte-1xosw0f", ".graph-container.svelte-1xosw0f{position:relative;display:flex;width:36rem;height:22rem;margin-left:1rem;margin-top:0.5rem;margin-bottom:1rem}");
}
function Ml(i) {
  let e, l, t;
  return l = new In({
    props: {
      viewModel: (
        /*$content*/
        i[2].comparisonGraphViewModel
      ),
      width: "36",
      height: "22"
    }
  }), {
    c() {
      e = h("div"), q(l.$$.fragment), p(e, "class", "graph-container svelte-1xosw0f");
    },
    m(n, s) {
      y(n, e, s), z(l, e, null), t = !0;
    },
    p(n, s) {
      const r = {};
      s & /*$content*/
      4 && (r.viewModel = /*$content*/
      n[2].comparisonGraphViewModel), l.$set(r);
    },
    i(n) {
      t || (g(l.$$.fragment, n), t = !0);
    },
    o(n) {
      w(l.$$.fragment, n), t = !1;
    },
    d(n) {
      n && $(e), j(l);
    }
  };
}
function Ws(i) {
  let e, l, t = (
    /*$content*/
    i[2] && Ml(i)
  );
  return {
    c() {
      t && t.c(), e = H();
    },
    m(n, s) {
      t && t.m(n, s), y(n, e, s), l = !0;
    },
    p(n, s) {
      /*$content*/
      n[2] ? t ? (t.p(n, s), s & /*$content*/
      4 && g(t, 1)) : (t = Ml(n), t.c(), g(t, 1), t.m(e.parentNode, e)) : t && (x(), w(t, 1, 1, () => {
        t = null;
      }), K());
    },
    i(n) {
      l || (g(t), l = !0);
    },
    o(n) {
      w(t), l = !1;
    },
    d(n) {
      t && t.d(n), n && $(e);
    }
  };
}
function Gs(i) {
  let e, l, t;
  function n(r) {
    i[6](r);
  }
  let s = {
    $$slots: { default: [Ws] },
    $$scope: { ctx: i }
  };
  return (
    /*visible*/
    i[0] !== void 0 && (s.visible = /*visible*/
    i[0]), e = new pt({ props: s }), be.push(() => ht(e, "visible", n)), {
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
        r[0], ut(() => l = !1)), e.$set(a);
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
function As(i, e, l) {
  let t, n = E, s = () => (n(), n = Pe(o, (u) => l(2, t = u)), o);
  i.$$.on_destroy.push(() => n());
  let { viewModel: r } = e, o = r.content;
  s();
  let a = !1, c = a, f;
  function d(u) {
    a = u, l(0, a);
  }
  return i.$$set = (u) => {
    "viewModel" in u && l(3, r = u.viewModel);
  }, i.$$.update = () => {
    i.$$.dirty & /*visible, previousVisible, viewModel, previousViewModel*/
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
class Fs extends ee {
  constructor(e) {
    super(), Y(this, e, As, Gs, X, { viewModel: 3 }, Es);
  }
}
function Hs(i) {
  ne(i, "svelte-1l9dja1", ".check-graph.svelte-1l9dja1{height:23rem;margin-left:8.5rem}");
}
function Rl(i) {
  let e, l, t, n;
  return l = new Fs({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].graphBoxViewModel
      )
    }
  }), {
    c() {
      e = h("div"), q(l.$$.fragment), p(e, "class", t = "row check-graph " + /*viewModel*/
      i[0].rowClasses + " svelte-1l9dja1");
    },
    m(s, r) {
      y(s, e, r), z(l, e, null), n = !0;
    },
    p(s, r) {
      const o = {};
      r & /*viewModel*/
      1 && (o.viewModel = /*viewModel*/
      s[0].graphBoxViewModel), l.$set(o), (!n || r & /*viewModel*/
      1 && t !== (t = "row check-graph " + /*viewModel*/
      s[0].rowClasses + " svelte-1l9dja1")) && p(e, "class", t);
    },
    i(s) {
      n || (g(l.$$.fragment, s), n = !0);
    },
    o(s) {
      w(l.$$.fragment, s), n = !1;
    },
    d(s) {
      s && $(e), j(l);
    }
  };
}
function Os(i) {
  let e, l, t = (
    /*viewModel*/
    i[0].span + ""
  ), n, s, r, o, a, c = (
    /*viewModel*/
    i[0].graphBoxViewModel && /*$graphVisible*/
    i[1] && Rl(i)
  );
  return {
    c() {
      e = h("div"), l = h("span"), c && c.c(), s = H(), p(l, "class", "label"), p(e, "class", n = "row " + /*viewModel*/
      i[0].rowClasses + " svelte-1l9dja1");
    },
    m(f, d) {
      y(f, e, d), b(e, l), l.innerHTML = t, c && c.m(f, d), y(f, s, d), r = !0, o || (a = re(
        l,
        "click",
        /*onLabelClicked*/
        i[3]
      ), o = !0);
    },
    p(f, [d]) {
      (!r || d & /*viewModel*/
      1) && t !== (t = /*viewModel*/
      f[0].span + "") && (l.innerHTML = t), (!r || d & /*viewModel*/
      1 && n !== (n = "row " + /*viewModel*/
      f[0].rowClasses + " svelte-1l9dja1")) && p(e, "class", n), /*viewModel*/
      f[0].graphBoxViewModel && /*$graphVisible*/
      f[1] ? c ? (c.p(f, d), d & /*viewModel, $graphVisible*/
      3 && g(c, 1)) : (c = Rl(f), c.c(), g(c, 1), c.m(s.parentNode, s)) : c && (x(), w(c, 1, 1, () => {
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
function Us(i, e, l) {
  let t, { viewModel: n } = e;
  const s = n.graphVisible;
  ge(i, s, (o) => l(1, t = o));
  function r() {
    s.update((o) => !o);
  }
  return i.$$set = (o) => {
    "viewModel" in o && l(0, n = o.viewModel);
  }, [n, t, s, r];
}
class Xs extends ee {
  constructor(e) {
    super(), Y(this, e, Us, Os, X, { viewModel: 0 }, Hs);
  }
}
function Cl(i, e, l) {
  const t = i.slice();
  return t[4] = e[l], t;
}
function Sl(i) {
  let e, l;
  return e = new Xs({ props: { viewModel: (
    /*row*/
    i[4]
  ) } }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n & /*viewModel*/
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
function Zs(i) {
  let e, l, t, n = (
    /*viewModel*/
    i[0].testRow.span + ""
  ), s = (
    /*$expandAll*/
    i[1] || /*viewModel*/
    i[0].testRow.status !== "passed" ? ":" : ""
  ), r, o, a, c, f, d = (
    /*viewModel*/
    i[0].childRows
  ), u = [];
  for (let v = 0; v < d.length; v += 1)
    u[v] = Sl(Cl(i, d, v));
  const m = (v) => w(u[v], 1, 1, () => {
    u[v] = null;
  });
  return {
    c() {
      e = h("div"), l = h("span"), t = new ui(!1), r = I(s), o = h("div");
      for (let v = 0; v < u.length; v += 1)
        u[v].c();
      t.a = r, p(l, "class", "label"), p(e, "class", "row test"), p(o, "class", "test-rows"), he(
        o,
        "expand-all",
        /*$expandAll*/
        i[1]
      );
    },
    m(v, _) {
      y(v, e, _), b(e, l), t.m(n, l), b(l, r), y(v, o, _);
      for (let k = 0; k < u.length; k += 1)
        u[k] && u[k].m(o, null);
      a = !0, c || (f = re(
        l,
        "click",
        /*onTestClicked*/
        i[3]
      ), c = !0);
    },
    p(v, [_]) {
      if ((!a || _ & /*viewModel*/
      1) && n !== (n = /*viewModel*/
      v[0].testRow.span + "") && t.p(n), (!a || _ & /*$expandAll, viewModel*/
      3) && s !== (s = /*$expandAll*/
      v[1] || /*viewModel*/
      v[0].testRow.status !== "passed" ? ":" : "") && W(r, s), _ & /*viewModel*/
      1) {
        d = /*viewModel*/
        v[0].childRows;
        let k;
        for (k = 0; k < d.length; k += 1) {
          const R = Cl(v, d, k);
          u[k] ? (u[k].p(R, _), g(u[k], 1)) : (u[k] = Sl(R), u[k].c(), g(u[k], 1), u[k].m(o, null));
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
function Js(i, e, l) {
  let t, { viewModel: n } = e;
  const s = n.expandAll;
  ge(i, s, (o) => l(1, t = o));
  function r() {
    s.update((o) => !o);
  }
  return i.$$set = (o) => {
    "viewModel" in o && l(0, n = o.viewModel);
  }, [n, t, s, r];
}
class Qs extends ee {
  constructor(e) {
    super(), Y(this, e, Js, Zs, X, { viewModel: 0 });
  }
}
function Ys(i) {
  ne(i, "svelte-ffmh5y", ".check-summary-container.svelte-ffmh5y{display:flex;flex-direction:column}.check-detail.svelte-ffmh5y{display:flex;flex-direction:column}.group-container.svelte-ffmh5y{margin-bottom:1.2rem}.group-container.svelte-ffmh5y .test-rows{display:flex;flex-direction:column}.group-container.svelte-ffmh5y .row.passed{display:none}.group-container.svelte-ffmh5y .test-rows.expand-all .row.passed{display:flex}.group-container.svelte-ffmh5y .row{display:flex;flex-direction:row}.group-container.svelte-ffmh5y .row.group{font-size:1.2em}.group-container.svelte-ffmh5y .row.test{margin-top:0.4rem}.group-container.svelte-ffmh5y .row.test > .label{cursor:pointer}.group-container.svelte-ffmh5y .row.scenario{color:#777}.group-container.svelte-ffmh5y .row.dataset{color:#777}.group-container.svelte-ffmh5y .row.predicate{color:#777}.group-container.svelte-ffmh5y .row.predicate > .label{cursor:pointer}.group-container.svelte-ffmh5y .bold{font-weight:700;color:#bbb}.summary-bar-row.svelte-ffmh5y{display:flex;flex-direction:row;align-items:baseline;align-self:flex-start;margin:2.6rem 0;opacity:1}.bar-container.svelte-ffmh5y{display:flex;flex-direction:row;width:20rem;height:0.8rem}.bar.svelte-ffmh5y{height:0.8rem}.bar.gray.svelte-ffmh5y{background-color:#777}.summary-label.svelte-ffmh5y{margin-left:0.8rem;color:#fff}.sep.svelte-ffmh5y{color:#777}");
}
function Dl(i, e, l) {
  const t = i.slice();
  return t[1] = e[l], t;
}
function Ll(i, e, l) {
  const t = i.slice();
  return t[4] = e[l], t;
}
function eo(i) {
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
function to(i) {
  let e, l, t;
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), p(e, "class", "bar bucket-bg-0 svelte-ffmh5y"), se(
        e,
        "width",
        /*viewModel*/
        i[0].percents[0] + "%"
      ), p(l, "class", "bar status-bg-failed svelte-ffmh5y"), se(
        l,
        "width",
        /*viewModel*/
        i[0].percents[1] + "%"
      ), p(t, "class", "bar status-bg-error svelte-ffmh5y"), se(
        t,
        "width",
        /*viewModel*/
        i[0].percents[2] + "%"
      );
    },
    m(n, s) {
      y(n, e, s), y(n, l, s), y(n, t, s);
    },
    p(n, s) {
      s & /*viewModel*/
      1 && se(
        e,
        "width",
        /*viewModel*/
        n[0].percents[0] + "%"
      ), s & /*viewModel*/
      1 && se(
        l,
        "width",
        /*viewModel*/
        n[0].percents[1] + "%"
      ), s & /*viewModel*/
      1 && se(
        t,
        "width",
        /*viewModel*/
        n[0].percents[2] + "%"
      );
    },
    d(n) {
      n && $(e), n && $(l), n && $(t);
    }
  };
}
function lo(i) {
  let e, l = (
    /*viewModel*/
    i[0].total + ""
  ), t, n, s, r, o, a = (
    /*viewModel*/
    i[0].passed && Tl(i)
  ), c = (
    /*viewModel*/
    i[0].failed && Vl(i)
  ), f = (
    /*viewModel*/
    i[0].errors && Il(i)
  );
  return {
    c() {
      e = h("span"), t = I(l), n = I(" total"), a && a.c(), s = H(), c && c.c(), r = H(), f && f.c(), o = H();
    },
    m(d, u) {
      y(d, e, u), b(e, t), b(e, n), a && a.m(d, u), y(d, s, u), c && c.m(d, u), y(d, r, u), f && f.m(d, u), y(d, o, u);
    },
    p(d, u) {
      u & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      d[0].total + "") && W(t, l), /*viewModel*/
      d[0].passed ? a ? a.p(d, u) : (a = Tl(d), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null), /*viewModel*/
      d[0].failed ? c ? c.p(d, u) : (c = Vl(d), c.c(), c.m(r.parentNode, r)) : c && (c.d(1), c = null), /*viewModel*/
      d[0].errors ? f ? f.p(d, u) : (f = Il(d), f.c(), f.m(o.parentNode, o)) : f && (f.d(1), f = null);
    },
    d(d) {
      d && $(e), a && a.d(d), d && $(s), c && c.d(d), d && $(r), f && f.d(d), d && $(o);
    }
  };
}
function no(i) {
  let e, l = (
    /*viewModel*/
    i[0].total + ""
  ), t, n;
  return {
    c() {
      e = h("span"), t = I(l), n = I(" total passed");
    },
    m(s, r) {
      y(s, e, r), b(e, t), b(e, n);
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
function io(i) {
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
function Tl(i) {
  let e, l, t = (
    /*viewModel*/
    i[0].passed + ""
  ), n, s;
  return {
    c() {
      e = h("span"), e.textContent = " | ", l = h("span"), n = I(t), s = I(" passed"), p(e, "class", "sep svelte-ffmh5y"), p(l, "class", "status-color-passed");
    },
    m(r, o) {
      y(r, e, o), y(r, l, o), b(l, n), b(l, s);
    },
    p(r, o) {
      o & /*viewModel*/
      1 && t !== (t = /*viewModel*/
      r[0].passed + "") && W(n, t);
    },
    d(r) {
      r && $(e), r && $(l);
    }
  };
}
function Vl(i) {
  let e, l, t = (
    /*viewModel*/
    i[0].failed + ""
  ), n, s;
  return {
    c() {
      e = h("span"), e.textContent = " | ", l = h("span"), n = I(t), s = I(" failed"), p(e, "class", "sep svelte-ffmh5y"), p(l, "class", "status-color-failed");
    },
    m(r, o) {
      y(r, e, o), y(r, l, o), b(l, n), b(l, s);
    },
    p(r, o) {
      o & /*viewModel*/
      1 && t !== (t = /*viewModel*/
      r[0].failed + "") && W(n, t);
    },
    d(r) {
      r && $(e), r && $(l);
    }
  };
}
function Il(i) {
  let e, l;
  function t(r, o) {
    return (
      /*viewModel*/
      r[0].errors > 1 ? oo : so
    );
  }
  let n = t(i), s = n(i);
  return {
    c() {
      e = h("span"), e.textContent = " | ", s.c(), l = H(), p(e, "class", "sep svelte-ffmh5y");
    },
    m(r, o) {
      y(r, e, o), s.m(r, o), y(r, l, o);
    },
    p(r, o) {
      n === (n = t(r)) && s ? s.p(r, o) : (s.d(1), s = n(r), s && (s.c(), s.m(l.parentNode, l)));
    },
    d(r) {
      r && $(e), s.d(r), r && $(l);
    }
  };
}
function so(i) {
  let e, l = (
    /*viewModel*/
    i[0].errors + ""
  ), t, n;
  return {
    c() {
      e = h("span"), t = I(l), n = I(" error"), p(e, "class", "status-color-error");
    },
    m(s, r) {
      y(s, e, r), b(e, t), b(e, n);
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
function oo(i) {
  let e, l = (
    /*viewModel*/
    i[0].errors + ""
  ), t, n;
  return {
    c() {
      e = h("span"), t = I(l), n = I(" errors"), p(e, "class", "status-color-error");
    },
    m(s, r) {
      y(s, e, r), b(e, t), b(e, n);
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
function ro(i) {
  let e, l, t = (
    /*viewModel*/
    i[0].groups
  ), n = [];
  for (let r = 0; r < t.length; r += 1)
    n[r] = jl(Dl(i, t, r));
  const s = (r) => w(n[r], 1, 1, () => {
    n[r] = null;
  });
  return {
    c() {
      e = h("div");
      for (let r = 0; r < n.length; r += 1)
        n[r].c();
      p(e, "class", "check-detail svelte-ffmh5y");
    },
    m(r, o) {
      y(r, e, o);
      for (let a = 0; a < n.length; a += 1)
        n[a] && n[a].m(e, null);
      l = !0;
    },
    p(r, o) {
      if (o & /*viewModel*/
      1) {
        t = /*viewModel*/
        r[0].groups;
        let a;
        for (a = 0; a < t.length; a += 1) {
          const c = Dl(r, t, a);
          n[a] ? (n[a].p(c, o), g(n[a], 1)) : (n[a] = jl(c), n[a].c(), g(n[a], 1), n[a].m(e, null));
        }
        for (x(), a = t.length; a < n.length; a += 1)
          s(a);
        K();
      }
    },
    i(r) {
      if (!l) {
        for (let o = 0; o < t.length; o += 1)
          g(n[o]);
        l = !0;
      }
    },
    o(r) {
      n = n.filter(Boolean);
      for (let o = 0; o < n.length; o += 1)
        w(n[o]);
      l = !1;
    },
    d(r) {
      r && $(e), O(n, r);
    }
  };
}
function zl(i) {
  let e, l;
  return e = new Qs({
    props: { viewModel: (
      /*testViewModel*/
      i[4]
    ) }
  }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n & /*viewModel*/
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
function jl(i) {
  let e, l, t, n = (
    /*group*/
    i[1].name + ""
  ), s, r, o = (
    /*group*/
    i[1].tests
  ), a = [];
  for (let f = 0; f < o.length; f += 1)
    a[f] = zl(Ll(i, o, f));
  const c = (f) => w(a[f], 1, 1, () => {
    a[f] = null;
  });
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), s = I(n);
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
      1) && n !== (n = /*group*/
      f[1].name + "") && W(s, n), d & /*viewModel*/
      1) {
        o = /*group*/
        f[1].tests;
        let u;
        for (u = 0; u < o.length; u += 1) {
          const m = Ll(f, o, u);
          a[u] ? (a[u].p(m, d), g(a[u], 1)) : (a[u] = zl(m), a[u].c(), g(a[u], 1), a[u].m(e, null));
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
function ao(i) {
  let e, l, t, n, s;
  function r(m, v) {
    return (
      /*viewModel*/
      m[0].total > 0 ? to : eo
    );
  }
  let o = r(i), a = o(i);
  function c(m, v) {
    return (
      /*viewModel*/
      m[0].total === 0 ? io : (
        /*viewModel*/
        m[0].total === /*viewModel*/
        m[0].passed ? no : lo
      )
    );
  }
  let f = c(i), d = f(i), u = ro(i);
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), a.c(), n = h("span"), d.c(), u && u.c(), p(t, "class", "bar-container svelte-ffmh5y"), p(n, "class", "summary-label svelte-ffmh5y"), p(l, "class", "summary-bar-row svelte-ffmh5y"), p(e, "class", "check-summary-container svelte-ffmh5y");
    },
    m(m, v) {
      y(m, e, v), b(e, l), b(l, t), a.m(t, null), b(l, n), d.m(n, null), u && u.m(e, null), s = !0;
    },
    p(m, [v]) {
      o === (o = r(m)) && a ? a.p(m, v) : (a.d(1), a = o(m), a && (a.c(), a.m(t, null))), f === (f = c(m)) && d ? d.p(m, v) : (d.d(1), d = f(m), d && (d.c(), d.m(n, null))), u.p(m, v);
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
function co(i, e, l) {
  let { viewModel: t } = e;
  return i.$$set = (n) => {
    "viewModel" in n && l(0, t = n.viewModel);
  }, [t];
}
class fo extends ee {
  constructor(e) {
    super(), Y(this, e, co, ao, X, { viewModel: 0 }, Ys);
  }
}
function uo(i) {
  ne(i, "svelte-1jh217s", ".summary-row.svelte-1jh217s{display:flex;flex-direction:row;flex:0 0 auto;align-items:flex-end;margin:0.2rem 0;opacity:0.8}.summary-row.svelte-1jh217s:hover{opacity:1}.bar-container.svelte-1jh217s{display:flex;flex-direction:row;width:20rem;height:0.8rem;margin-bottom:0.25rem;cursor:pointer}.bar.svelte-1jh217s{height:0.8rem}.bar.striped.svelte-1jh217s{width:100%;background:repeating-linear-gradient(-45deg, goldenrod, goldenrod 0.4rem, darkgoldenrod 0.4rem, darkgoldenrod 1rem)}.title-container.svelte-1jh217s{display:flex;flex-direction:column;margin-left:0.8rem}.title-part.svelte-1jh217s{display:flex;flex-direction:row;align-items:baseline}.title.svelte-1jh217s{color:#fff;cursor:pointer}.subtitle.svelte-1jh217s{font-size:0.8em;margin-left:0.6rem;color:#aaa;cursor:pointer}.annotations.svelte-1jh217s{font-size:0.8em;margin-left:0.3rem;color:#aaa}.annotations.svelte-1jh217s .annotation{margin:0 0.3rem;padding:0.1rem 0.3rem;background-color:#1c1c1c;border:0.5px solid #555;border-radius:0.4rem}.summary-header-row.svelte-1jh217s{display:flex;flex-direction:row;flex:0 0 auto;align-items:center;margin:0.4rem 0}.header-bar.svelte-1jh217s{display:flex;width:20rem;height:1px;background-color:#555}.header-title.svelte-1jh217s{margin-left:0.8rem;color:#fff;font-size:1.2em}");
}
function mo(i) {
  let e, l, t, n, s, r = (
    /*viewModel*/
    i[0].title + ""
  ), o, a, c;
  function f(_, k) {
    return (
      /*viewModel*/
      _[0].diffPercentByBucket === void 0 ? vo : po
    );
  }
  let d = f(i), u = d(i), m = (
    /*viewModel*/
    i[0].subtitle && Pl(i)
  ), v = (
    /*viewModel*/
    i[0].annotations && ql(i)
  );
  return {
    c() {
      e = h("div"), l = h("div"), u.c(), t = h("div"), n = h("div"), s = h("div"), m && m.c(), o = H(), v && v.c(), p(l, "class", "bar-container svelte-1jh217s"), p(s, "class", "title svelte-1jh217s"), p(n, "class", "title-part svelte-1jh217s"), p(t, "class", "title-container svelte-1jh217s"), p(e, "class", "summary-row svelte-1jh217s");
    },
    m(_, k) {
      y(_, e, k), b(e, l), u.m(l, null), b(e, t), b(t, n), b(n, s), s.innerHTML = r, m && m.m(n, null), b(n, o), v && v.m(n, null), a || (c = [
        re(
          l,
          "click",
          /*onLinkClicked*/
          i[2]
        ),
        re(
          s,
          "click",
          /*onLinkClicked*/
          i[2]
        )
      ], a = !0);
    },
    p(_, k) {
      d === (d = f(_)) && u ? u.p(_, k) : (u.d(1), u = d(_), u && (u.c(), u.m(l, null))), k & /*viewModel*/
      1 && r !== (r = /*viewModel*/
      _[0].title + "") && (s.innerHTML = r), /*viewModel*/
      _[0].subtitle ? m ? m.p(_, k) : (m = Pl(_), m.c(), m.m(n, o)) : m && (m.d(1), m = null), /*viewModel*/
      _[0].annotations ? v ? v.p(_, k) : (v = ql(_), v.c(), v.m(n, null)) : v && (v.d(1), v = null);
    },
    d(_) {
      _ && $(e), u.d(), m && m.d(), v && v.d(), a = !1, $e(c);
    }
  };
}
function ho(i) {
  let e, l, t, n = (
    /*viewModel*/
    i[0].title + ""
  );
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), p(l, "class", "header-bar svelte-1jh217s"), p(t, "class", "header-title svelte-1jh217s"), p(e, "class", "summary-header-row svelte-1jh217s");
    },
    m(s, r) {
      y(s, e, r), b(e, l), b(e, t), t.innerHTML = n;
    },
    p(s, r) {
      r & /*viewModel*/
      1 && n !== (n = /*viewModel*/
      s[0].title + "") && (t.innerHTML = n);
    },
    d(s) {
      s && $(e);
    }
  };
}
function po(i) {
  let e, l, t, n, s;
  return {
    c() {
      e = h("div"), l = h("div"), t = h("div"), n = h("div"), s = h("div"), p(e, "class", "bar bucket-bg-0 svelte-1jh217s"), se(
        e,
        "width",
        /*bucketPcts*/
        i[1][0] + "%"
      ), p(l, "class", "bar bucket-bg-1 svelte-1jh217s"), se(
        l,
        "width",
        /*bucketPcts*/
        i[1][1] + "%"
      ), p(t, "class", "bar bucket-bg-2 svelte-1jh217s"), se(
        t,
        "width",
        /*bucketPcts*/
        i[1][2] + "%"
      ), p(n, "class", "bar bucket-bg-3 svelte-1jh217s"), se(
        n,
        "width",
        /*bucketPcts*/
        i[1][3] + "%"
      ), p(s, "class", "bar bucket-bg-4 svelte-1jh217s"), se(
        s,
        "width",
        /*bucketPcts*/
        i[1][4] + "%"
      );
    },
    m(r, o) {
      y(r, e, o), y(r, l, o), y(r, t, o), y(r, n, o), y(r, s, o);
    },
    p: E,
    d(r) {
      r && $(e), r && $(l), r && $(t), r && $(n), r && $(s);
    }
  };
}
function vo(i) {
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
function Pl(i) {
  let e, l = (
    /*viewModel*/
    i[0].subtitle + ""
  ), t, n;
  return {
    c() {
      e = h("div"), p(e, "class", "subtitle svelte-1jh217s");
    },
    m(s, r) {
      y(s, e, r), e.innerHTML = l, t || (n = re(
        e,
        "click",
        /*onLinkClicked*/
        i[2]
      ), t = !0);
    },
    p(s, r) {
      r & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      s[0].subtitle + "") && (e.innerHTML = l);
    },
    d(s) {
      s && $(e), t = !1, n();
    }
  };
}
function ql(i) {
  let e, l = (
    /*viewModel*/
    i[0].annotations + ""
  );
  return {
    c() {
      e = h("div"), p(e, "class", "annotations svelte-1jh217s");
    },
    m(t, n) {
      y(t, e, n), e.innerHTML = l;
    },
    p(t, n) {
      n & /*viewModel*/
      1 && l !== (l = /*viewModel*/
      t[0].annotations + "") && (e.innerHTML = l);
    },
    d(t) {
      t && $(e);
    }
  };
}
function _o(i) {
  let e;
  function l(s, r) {
    return (
      /*viewModel*/
      s[0].header ? ho : mo
    );
  }
  let t = l(i), n = t(i);
  return {
    c() {
      n.c(), e = H();
    },
    m(s, r) {
      n.m(s, r), y(s, e, r);
    },
    p(s, [r]) {
      t === (t = l(s)) && n ? n.p(s, r) : (n.d(1), n = t(s), n && (n.c(), n.m(e.parentNode, e)));
    },
    i: E,
    o: E,
    d(s) {
      n.d(s), s && $(e);
    }
  };
}
function go(i, e, l) {
  let { viewModel: t } = e;
  const n = t.diffPercentByBucket, s = qe();
  function r() {
    t.groupKey && s("command", {
      cmd: "show-comparison-detail",
      summaryRow: t
    });
  }
  return i.$$set = (o) => {
    "viewModel" in o && l(0, t = o.viewModel);
  }, [t, n, r];
}
class oe extends ee {
  constructor(e) {
    super(), Y(this, e, go, _o, X, { viewModel: 0 }, uo);
  }
}
function bo(i) {
  ne(i, "svelte-8opq0t", ".comparison-summary-container.svelte-8opq0t{display:flex;flex-direction:column;padding-top:2rem}.section-container.svelte-8opq0t{display:flex;flex-direction:column}.section-container.svelte-8opq0t:not(:last-child){margin-bottom:1.5rem}.footer.svelte-8opq0t{flex:0 0 1rem}");
}
function Nl(i, e, l) {
  const t = i.slice();
  return t[15] = e[l], t;
}
function Bl(i, e, l) {
  const t = i.slice();
  return t[15] = e[l], t;
}
function xl(i, e, l) {
  const t = i.slice();
  return t[15] = e[l], t;
}
function Kl(i, e, l) {
  const t = i.slice();
  return t[15] = e[l], t;
}
function El(i, e, l) {
  const t = i.slice();
  return t[15] = e[l], t;
}
function Wl(i, e, l) {
  const t = i.slice();
  return t[15] = e[l], t;
}
function Gl(i, e, l) {
  const t = i.slice();
  return t[15] = e[l], t;
}
function Al(i, e, l) {
  const t = i.slice();
  return t[15] = e[l], t;
}
function Fl(i, e, l) {
  const t = i.slice();
  return t[15] = e[l], t;
}
function Hl(i, e, l) {
  const t = i.slice();
  return t[15] = e[l], t;
}
function Ol(i, e, l) {
  const t = i.slice();
  return t[12] = e[l], t;
}
function Ul(i, e, l) {
  const t = i.slice();
  return t[15] = e[l], t;
}
function wo(i) {
  let e, l, t, n, s, r, o = (
    /*viewModel*/
    i[0].datasetsWithErrors && Xl(i)
  ), a = (
    /*viewModel*/
    i[0].datasetsOnlyInLeft && Jl(i)
  ), c = (
    /*viewModel*/
    i[0].datasetsOnlyInRight && Yl(i)
  ), f = (
    /*viewModel*/
    i[0].datasetsWithDiffs && tn(i)
  ), d = (
    /*viewModel*/
    i[0].datasetsWithoutDiffs && nn(i)
  );
  return {
    c() {
      o && o.c(), e = H(), a && a.c(), l = H(), c && c.c(), t = H(), f && f.c(), n = H(), d && d.c(), s = H();
    },
    m(u, m) {
      o && o.m(u, m), y(u, e, m), a && a.m(u, m), y(u, l, m), c && c.m(u, m), y(u, t, m), f && f.m(u, m), y(u, n, m), d && d.m(u, m), y(u, s, m), r = !0;
    },
    p(u, m) {
      /*viewModel*/
      u[0].datasetsWithErrors ? o ? (o.p(u, m), m[0] & /*viewModel*/
      1 && g(o, 1)) : (o = Xl(u), o.c(), g(o, 1), o.m(e.parentNode, e)) : o && (x(), w(o, 1, 1, () => {
        o = null;
      }), K()), /*viewModel*/
      u[0].datasetsOnlyInLeft ? a ? (a.p(u, m), m[0] & /*viewModel*/
      1 && g(a, 1)) : (a = Jl(u), a.c(), g(a, 1), a.m(l.parentNode, l)) : a && (x(), w(a, 1, 1, () => {
        a = null;
      }), K()), /*viewModel*/
      u[0].datasetsOnlyInRight ? c ? (c.p(u, m), m[0] & /*viewModel*/
      1 && g(c, 1)) : (c = Yl(u), c.c(), g(c, 1), c.m(t.parentNode, t)) : c && (x(), w(c, 1, 1, () => {
        c = null;
      }), K()), /*viewModel*/
      u[0].datasetsWithDiffs ? f ? (f.p(u, m), m[0] & /*viewModel*/
      1 && g(f, 1)) : (f = tn(u), f.c(), g(f, 1), f.m(n.parentNode, n)) : f && (x(), w(f, 1, 1, () => {
        f = null;
      }), K()), /*viewModel*/
      u[0].datasetsWithoutDiffs ? d ? (d.p(u, m), m[0] & /*viewModel*/
      1 && g(d, 1)) : (d = nn(u), d.c(), g(d, 1), d.m(s.parentNode, s)) : d && (x(), w(d, 1, 1, () => {
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
      o && o.d(u), u && $(e), a && a.d(u), u && $(l), c && c.d(u), u && $(t), f && f.d(u), u && $(n), d && d.d(u), u && $(s);
    }
  };
}
function ko(i) {
  let e, l, t, n, s, r, o = (
    /*viewModel*/
    i[0].scenariosWithErrors && on(i)
  ), a = (
    /*viewModel*/
    i[0].scenariosOnlyInLeft && an(i)
  ), c = (
    /*viewModel*/
    i[0].scenariosOnlyInRight && fn(i)
  ), f = (
    /*viewModel*/
    i[0].scenariosWithDiffs && un(i)
  ), d = (
    /*viewModel*/
    i[0].scenariosWithoutDiffs && hn(i)
  );
  return {
    c() {
      o && o.c(), e = H(), a && a.c(), l = H(), c && c.c(), t = H(), f && f.c(), n = H(), d && d.c(), s = H();
    },
    m(u, m) {
      o && o.m(u, m), y(u, e, m), a && a.m(u, m), y(u, l, m), c && c.m(u, m), y(u, t, m), f && f.m(u, m), y(u, n, m), d && d.m(u, m), y(u, s, m), r = !0;
    },
    p(u, m) {
      /*viewModel*/
      u[0].scenariosWithErrors ? o ? (o.p(u, m), m[0] & /*viewModel*/
      1 && g(o, 1)) : (o = on(u), o.c(), g(o, 1), o.m(e.parentNode, e)) : o && (x(), w(o, 1, 1, () => {
        o = null;
      }), K()), /*viewModel*/
      u[0].scenariosOnlyInLeft ? a ? (a.p(u, m), m[0] & /*viewModel*/
      1 && g(a, 1)) : (a = an(u), a.c(), g(a, 1), a.m(l.parentNode, l)) : a && (x(), w(a, 1, 1, () => {
        a = null;
      }), K()), /*viewModel*/
      u[0].scenariosOnlyInRight ? c ? (c.p(u, m), m[0] & /*viewModel*/
      1 && g(c, 1)) : (c = fn(u), c.c(), g(c, 1), c.m(t.parentNode, t)) : c && (x(), w(c, 1, 1, () => {
        c = null;
      }), K()), /*viewModel*/
      u[0].scenariosWithDiffs ? f ? (f.p(u, m), m[0] & /*viewModel*/
      1 && g(f, 1)) : (f = un(u), f.c(), g(f, 1), f.m(n.parentNode, n)) : f && (x(), w(f, 1, 1, () => {
        f = null;
      }), K()), /*viewModel*/
      u[0].scenariosWithoutDiffs ? d ? (d.p(u, m), m[0] & /*viewModel*/
      1 && g(d, 1)) : (d = hn(u), d.c(), g(d, 1), d.m(s.parentNode, s)) : d && (x(), w(d, 1, 1, () => {
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
      o && o.d(u), u && $(e), a && a.d(u), u && $(l), c && c.d(u), u && $(t), f && f.d(u), u && $(n), d && d.d(u), u && $(s);
    }
  };
}
function $o(i) {
  let e, l, t = (
    /*viewModel*/
    i[0].viewGroups
  ), n = [];
  for (let r = 0; r < t.length; r += 1)
    n[r] = _n(Ol(i, t, r));
  const s = (r) => w(n[r], 1, 1, () => {
    n[r] = null;
  });
  return {
    c() {
      for (let r = 0; r < n.length; r += 1)
        n[r].c();
      e = H();
    },
    m(r, o) {
      for (let a = 0; a < n.length; a += 1)
        n[a] && n[a].m(r, o);
      y(r, e, o), l = !0;
    },
    p(r, o) {
      if (o[0] & /*viewModel*/
      1) {
        t = /*viewModel*/
        r[0].viewGroups;
        let a;
        for (a = 0; a < t.length; a += 1) {
          const c = Ol(r, t, a);
          n[a] ? (n[a].p(c, o), g(n[a], 1)) : (n[a] = _n(c), n[a].c(), g(n[a], 1), n[a].m(e.parentNode, e));
        }
        for (x(), a = t.length; a < n.length; a += 1)
          s(a);
        K();
      }
    },
    i(r) {
      if (!l) {
        for (let o = 0; o < t.length; o += 1)
          g(n[o]);
        l = !0;
      }
    },
    o(r) {
      n = n.filter(Boolean);
      for (let o = 0; o < n.length; o += 1)
        w(n[o]);
      l = !1;
    },
    d(r) {
      O(n, r), r && $(e);
    }
  };
}
function Xl(i) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].datasetsWithErrors.header
      )
    }
  });
  let n = (
    /*viewModel*/
    i[0].datasetsWithErrors.rows
  ), s = [];
  for (let o = 0; o < n.length; o += 1)
    s[o] = Zl(El(i, n, o));
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
        n = /*viewModel*/
        o[0].datasetsWithErrors.rows;
        let f;
        for (f = 0; f < n.length; f += 1) {
          const d = El(o, n, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = Zl(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = n.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < n.length; a += 1)
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
function Zl(i) {
  let e, l;
  return e = new oe({
    props: { viewModel: (
      /*rowViewModel*/
      i[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_6*/
    i[7]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n[0] & /*viewModel*/
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
function Jl(i) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].datasetsOnlyInLeft.header
      )
    }
  });
  let n = (
    /*viewModel*/
    i[0].datasetsOnlyInLeft.rows
  ), s = [];
  for (let o = 0; o < n.length; o += 1)
    s[o] = Ql(Kl(i, n, o));
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
        n = /*viewModel*/
        o[0].datasetsOnlyInLeft.rows;
        let f;
        for (f = 0; f < n.length; f += 1) {
          const d = Kl(o, n, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = Ql(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = n.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < n.length; a += 1)
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
function Ql(i) {
  let e, l;
  return e = new oe({
    props: { viewModel: (
      /*rowViewModel*/
      i[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_7*/
    i[8]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n[0] & /*viewModel*/
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
function Yl(i) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].datasetsOnlyInRight.header
      )
    }
  });
  let n = (
    /*viewModel*/
    i[0].datasetsOnlyInRight.rows
  ), s = [];
  for (let o = 0; o < n.length; o += 1)
    s[o] = en(xl(i, n, o));
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
        n = /*viewModel*/
        o[0].datasetsOnlyInRight.rows;
        let f;
        for (f = 0; f < n.length; f += 1) {
          const d = xl(o, n, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = en(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = n.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < n.length; a += 1)
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
function en(i) {
  let e, l;
  return e = new oe({
    props: { viewModel: (
      /*rowViewModel*/
      i[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_8*/
    i[9]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n[0] & /*viewModel*/
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
function tn(i) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].datasetsWithDiffs.header
      )
    }
  });
  let n = (
    /*viewModel*/
    i[0].datasetsWithDiffs.rows
  ), s = [];
  for (let o = 0; o < n.length; o += 1)
    s[o] = ln(Bl(i, n, o));
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
        n = /*viewModel*/
        o[0].datasetsWithDiffs.rows;
        let f;
        for (f = 0; f < n.length; f += 1) {
          const d = Bl(o, n, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = ln(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = n.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < n.length; a += 1)
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
function ln(i) {
  let e, l;
  return e = new oe({
    props: { viewModel: (
      /*rowViewModel*/
      i[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_9*/
    i[10]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n[0] & /*viewModel*/
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
function nn(i) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].datasetsWithoutDiffs.header
      )
    }
  });
  let n = (
    /*viewModel*/
    i[0].datasetsWithoutDiffs.rows
  ), s = [];
  for (let o = 0; o < n.length; o += 1)
    s[o] = sn(Nl(i, n, o));
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
        n = /*viewModel*/
        o[0].datasetsWithoutDiffs.rows;
        let f;
        for (f = 0; f < n.length; f += 1) {
          const d = Nl(o, n, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = sn(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = n.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < n.length; a += 1)
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
function sn(i) {
  let e, l;
  return e = new oe({
    props: { viewModel: (
      /*rowViewModel*/
      i[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_10*/
    i[11]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n[0] & /*viewModel*/
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
function on(i) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].scenariosWithErrors.header
      )
    }
  });
  let n = (
    /*viewModel*/
    i[0].scenariosWithErrors.rows
  ), s = [];
  for (let o = 0; o < n.length; o += 1)
    s[o] = rn(Hl(i, n, o));
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
        n = /*viewModel*/
        o[0].scenariosWithErrors.rows;
        let f;
        for (f = 0; f < n.length; f += 1) {
          const d = Hl(o, n, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = rn(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = n.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < n.length; a += 1)
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
function rn(i) {
  let e, l;
  return e = new oe({
    props: { viewModel: (
      /*rowViewModel*/
      i[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_1*/
    i[2]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n[0] & /*viewModel*/
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
function an(i) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].scenariosOnlyInLeft.header
      )
    }
  });
  let n = (
    /*viewModel*/
    i[0].scenariosOnlyInLeft.rows
  ), s = [];
  for (let o = 0; o < n.length; o += 1)
    s[o] = cn(Fl(i, n, o));
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
        n = /*viewModel*/
        o[0].scenariosOnlyInLeft.rows;
        let f;
        for (f = 0; f < n.length; f += 1) {
          const d = Fl(o, n, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = cn(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = n.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < n.length; a += 1)
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
function cn(i) {
  let e, l;
  return e = new oe({
    props: { viewModel: (
      /*rowViewModel*/
      i[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_2*/
    i[3]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n[0] & /*viewModel*/
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
function fn(i) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].scenariosOnlyInRight.header
      )
    }
  });
  let n = (
    /*viewModel*/
    i[0].scenariosOnlyInRight.rows
  ), s = [];
  for (let o = 0; o < n.length; o += 1)
    s[o] = dn(Al(i, n, o));
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
        n = /*viewModel*/
        o[0].scenariosOnlyInRight.rows;
        let f;
        for (f = 0; f < n.length; f += 1) {
          const d = Al(o, n, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = dn(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = n.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < n.length; a += 1)
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
function dn(i) {
  let e, l;
  return e = new oe({
    props: { viewModel: (
      /*rowViewModel*/
      i[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_3*/
    i[4]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n[0] & /*viewModel*/
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
function un(i) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].scenariosWithDiffs.header
      )
    }
  });
  let n = (
    /*viewModel*/
    i[0].scenariosWithDiffs.rows
  ), s = [];
  for (let o = 0; o < n.length; o += 1)
    s[o] = mn(Gl(i, n, o));
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
        n = /*viewModel*/
        o[0].scenariosWithDiffs.rows;
        let f;
        for (f = 0; f < n.length; f += 1) {
          const d = Gl(o, n, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = mn(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = n.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < n.length; a += 1)
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
function mn(i) {
  let e, l;
  return e = new oe({
    props: { viewModel: (
      /*rowViewModel*/
      i[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_4*/
    i[5]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n[0] & /*viewModel*/
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
function hn(i) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].scenariosWithoutDiffs.header
      )
    }
  });
  let n = (
    /*viewModel*/
    i[0].scenariosWithoutDiffs.rows
  ), s = [];
  for (let o = 0; o < n.length; o += 1)
    s[o] = pn(Wl(i, n, o));
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
        n = /*viewModel*/
        o[0].scenariosWithoutDiffs.rows;
        let f;
        for (f = 0; f < n.length; f += 1) {
          const d = Wl(o, n, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = pn(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = n.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < n.length; a += 1)
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
function pn(i) {
  let e, l;
  return e = new oe({
    props: { viewModel: (
      /*rowViewModel*/
      i[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler_5*/
    i[6]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n[0] & /*viewModel*/
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
function vn(i) {
  let e, l;
  return e = new oe({
    props: { viewModel: (
      /*rowViewModel*/
      i[15]
    ) }
  }), e.$on(
    "command",
    /*command_handler*/
    i[1]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n[0] & /*viewModel*/
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
function _n(i) {
  let e, l, t;
  l = new oe({
    props: {
      viewModel: (
        /*viewGroupViewModel*/
        i[12].header
      )
    }
  });
  let n = (
    /*viewGroupViewModel*/
    i[12].rows
  ), s = [];
  for (let o = 0; o < n.length; o += 1)
    s[o] = vn(Ul(i, n, o));
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
        n = /*viewGroupViewModel*/
        o[12].rows;
        let f;
        for (f = 0; f < n.length; f += 1) {
          const d = Ul(o, n, f);
          s[f] ? (s[f].p(d, a), g(s[f], 1)) : (s[f] = vn(d), s[f].c(), g(s[f], 1), s[f].m(e, null));
        }
        for (x(), f = n.length; f < s.length; f += 1)
          r(f);
        K();
      }
    },
    i(o) {
      if (!t) {
        g(l.$$.fragment, o);
        for (let a = 0; a < n.length; a += 1)
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
function yo(i) {
  let e, l, t, n, s;
  const r = [$o, ko, wo], o = [];
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
  return ~(l = a(i)) && (t = o[l] = r[l](i)), {
    c() {
      e = h("div"), t && t.c(), n = h("div"), p(n, "class", "footer svelte-8opq0t"), p(e, "class", "comparison-summary-container svelte-8opq0t");
    },
    m(c, f) {
      y(c, e, f), ~l && o[l].m(e, null), b(e, n), s = !0;
    },
    p(c, f) {
      let d = l;
      l = a(c), l === d ? ~l && o[l].p(c, f) : (t && (x(), w(o[d], 1, 1, () => {
        o[d] = null;
      }), K()), ~l ? (t = o[l], t ? t.p(c, f) : (t = o[l] = r[l](c), t.c()), g(t, 1), t.m(e, n)) : t = null);
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
function Mo(i, e, l) {
  let { viewModel: t } = e;
  function n(_) {
    ae.call(this, i, _);
  }
  function s(_) {
    ae.call(this, i, _);
  }
  function r(_) {
    ae.call(this, i, _);
  }
  function o(_) {
    ae.call(this, i, _);
  }
  function a(_) {
    ae.call(this, i, _);
  }
  function c(_) {
    ae.call(this, i, _);
  }
  function f(_) {
    ae.call(this, i, _);
  }
  function d(_) {
    ae.call(this, i, _);
  }
  function u(_) {
    ae.call(this, i, _);
  }
  function m(_) {
    ae.call(this, i, _);
  }
  function v(_) {
    ae.call(this, i, _);
  }
  return i.$$set = (_) => {
    "viewModel" in _ && l(0, t = _.viewModel);
  }, [
    t,
    n,
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
class _t extends ee {
  constructor(e) {
    super(), Y(this, e, Mo, yo, X, { viewModel: 0 }, bo, [-1, -1]);
  }
}
function Ro(i) {
  ne(i, "svelte-7mv27e", "td.svelte-7mv27e{padding:0;height:1.8rem}.name.svelte-7mv27e{padding-right:3rem}.row-header{color:#aaa}.cell.svelte-7mv27e{display:flex;width:100%;flex-direction:row;align-items:baseline;font-family:monospace}.cell.dim.svelte-7mv27e{color:#777}.value.svelte-7mv27e{flex:1;padding-right:0.4rem;text-align:right}.change.svelte-7mv27e{flex:1;padding-left:0.4rem;text-align:left;font-size:0.8em}.plot.svelte-7mv27e{width:20rem;padding-left:2rem;padding-right:2rem;cursor:pointer}");
}
function gn(i) {
  let e, l, t, n, s;
  return l = new at({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].dotPlot
      ),
      colorClass: (
        /*modelBgClass*/
        i[2]
      )
    }
  }), {
    c() {
      e = h("td"), q(l.$$.fragment), p(e, "class", "plot svelte-7mv27e");
    },
    m(r, o) {
      y(r, e, o), z(l, e, null), t = !0, n || (s = re(
        e,
        "click",
        /*onShowPerf*/
        i[3]
      ), n = !0);
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
      r && $(e), j(l), n = !1, s();
    }
  };
}
function Co(i) {
  let e, l = (
    /*viewModel*/
    i[0].modelName + ""
  ), t, n, s, r, o = (
    /*viewModel*/
    i[0].inputs + ""
  ), a, c, f, d, u, m = (
    /*viewModel*/
    i[0].outputs + ""
  ), v, _, k, R, M, C = (
    /*viewModel*/
    i[0].modelSize + ""
  ), S, D, N = (
    /*viewModel*/
    i[0].modelSizePctChange + ""
  ), V, P, T, A, L = (
    /*viewModel*/
    i[0].dataSize + ""
  ), G, B, Z = (
    /*viewModel*/
    i[0].dataSizePctChange + ""
  ), ie, pe, we, J, Q = (
    /*viewModel*/
    i[0].avgTime + ""
  ), U, le, ue = (
    /*viewModel*/
    i[0].avgTimePctChange + ""
  ), ce, ve, _e, ye, Ce = (
    /*viewModel*/
    i[0].minTime + ""
  ), Se, Qe, Ne, Be, Ee, We = (
    /*viewModel*/
    i[0].maxTime + ""
  ), Ye, et, xe, me, fe = (
    /*viewModel*/
    i[0].dotPlot && gn(i)
  );
  return {
    c() {
      e = h("td"), t = I(l), n = h("td"), s = h("div"), r = h("div"), a = I(o), c = h("div"), f = h("td"), d = h("div"), u = h("div"), v = I(m), _ = h("div"), k = h("td"), R = h("div"), M = h("div"), S = I(C), D = h("div"), V = I(N), P = h("td"), T = h("div"), A = h("div"), G = I(L), B = h("div"), ie = I(Z), pe = h("td"), we = h("div"), J = h("div"), U = I(Q), le = h("div"), ce = I(ue), ve = h("td"), _e = h("div"), ye = h("div"), Se = I(Ce), Qe = h("div"), Ne = h("td"), Be = h("div"), Ee = h("div"), Ye = I(We), et = h("div"), fe && fe.c(), xe = H(), p(e, "class", "name " + /*modelTextClass*/
      i[1] + " svelte-7mv27e"), p(r, "class", "value svelte-7mv27e"), p(c, "class", "change svelte-7mv27e"), p(s, "class", "cell svelte-7mv27e"), p(n, "class", "svelte-7mv27e"), p(u, "class", "value svelte-7mv27e"), p(_, "class", "change svelte-7mv27e"), p(d, "class", "cell svelte-7mv27e"), p(f, "class", "svelte-7mv27e"), p(M, "class", "value svelte-7mv27e"), p(D, "class", "change svelte-7mv27e"), p(R, "class", "cell svelte-7mv27e"), p(k, "class", "svelte-7mv27e"), p(A, "class", "value svelte-7mv27e"), p(B, "class", "change svelte-7mv27e"), p(T, "class", "cell svelte-7mv27e"), p(P, "class", "svelte-7mv27e"), p(J, "class", "value svelte-7mv27e"), p(le, "class", "change svelte-7mv27e"), p(we, "class", "cell svelte-7mv27e"), p(pe, "class", "svelte-7mv27e"), p(ye, "class", "value svelte-7mv27e"), p(Qe, "class", "change svelte-7mv27e"), p(_e, "class", "cell dim svelte-7mv27e"), p(ve, "class", "svelte-7mv27e"), p(Ee, "class", "value svelte-7mv27e"), p(et, "class", "change svelte-7mv27e"), p(Be, "class", "cell dim svelte-7mv27e"), p(Ne, "class", "svelte-7mv27e");
    },
    m(F, te) {
      y(F, e, te), b(e, t), y(F, n, te), b(n, s), b(s, r), b(r, a), b(s, c), y(F, f, te), b(f, d), b(d, u), b(u, v), b(d, _), y(F, k, te), b(k, R), b(R, M), b(M, S), b(R, D), b(D, V), y(F, P, te), b(P, T), b(T, A), b(A, G), b(T, B), b(B, ie), y(F, pe, te), b(pe, we), b(we, J), b(J, U), b(we, le), b(le, ce), y(F, ve, te), b(ve, _e), b(_e, ye), b(ye, Se), b(_e, Qe), y(F, Ne, te), b(Ne, Be), b(Be, Ee), b(Ee, Ye), b(Be, et), fe && fe.m(F, te), y(F, xe, te), me = !0;
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
      1) && Ce !== (Ce = /*viewModel*/
      F[0].minTime + "") && W(Se, Ce), (!me || te & /*viewModel*/
      1) && We !== (We = /*viewModel*/
      F[0].maxTime + "") && W(Ye, We), /*viewModel*/
      F[0].dotPlot ? fe ? (fe.p(F, te), te & /*viewModel*/
      1 && g(fe, 1)) : (fe = gn(F), fe.c(), g(fe, 1), fe.m(xe.parentNode, xe)) : fe && (x(), w(fe, 1, 1, () => {
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
      F && $(e), F && $(n), F && $(f), F && $(k), F && $(P), F && $(pe), F && $(ve), F && $(Ne), fe && fe.d(F), F && $(xe);
    }
  };
}
function So(i, e, l) {
  let { viewModel: t } = e;
  const n = t.datasetClassIndex, s = n !== void 0 ? `dataset-color-${n}` : "row-header", r = n !== void 0 ? `dataset-bg-${n}` : "", o = qe();
  function a() {
    o("command", { cmd: "show-perf" });
  }
  return i.$$set = (c) => {
    "viewModel" in c && l(0, t = c.viewModel);
  }, [t, s, r, a];
}
class lt extends ee {
  constructor(e) {
    super(), Y(this, e, So, Co, X, { viewModel: 0 }, Ro);
  }
}
function Do(i) {
  ne(i, "svelte-18acnq2", "table.svelte-18acnq2{border-collapse:collapse}th.svelte-18acnq2{color:#aaa;text-align:left;font-family:Roboto;font-weight:500}th.dim.svelte-18acnq2{color:#555}th.svelte-18acnq2:nth-child(2),th.svelte-18acnq2:nth-child(3){width:6rem}th.svelte-18acnq2:nth-child(4),th.svelte-18acnq2:nth-child(5){width:10rem}th.svelte-18acnq2:nth-child(6){width:8rem}th.svelte-18acnq2:nth-child(7),th.svelte-18acnq2:nth-child(8){width:8rem}");
}
function Lo(i) {
  let e, l, t, n, s, r, o, a, c;
  return n = new lt({
    props: { viewModel: (
      /*viewModel*/
      i[0].row1
    ) }
  }), n.$on(
    "command",
    /*command_handler*/
    i[1]
  ), r = new lt({
    props: { viewModel: (
      /*viewModel*/
      i[0].row2
    ) }
  }), r.$on(
    "command",
    /*command_handler_1*/
    i[2]
  ), a = new lt({
    props: { viewModel: (
      /*viewModel*/
      i[0].row3
    ) }
  }), a.$on(
    "command",
    /*command_handler_2*/
    i[3]
  ), {
    c() {
      e = h("table"), l = h("tr"), l.innerHTML = '<th class="svelte-18acnq2"></th><th class="svelte-18acnq2">inputs</th><th class="svelte-18acnq2">outputs</th><th class="svelte-18acnq2">model size (bytes)</th><th class="svelte-18acnq2">data size (bytes)</th><th class="svelte-18acnq2">avg time (ms)</th><th class="dim svelte-18acnq2">min time (ms)</th><th class="dim svelte-18acnq2">max time (ms)</th><th class="svelte-18acnq2"></th>', t = h("tr"), q(n.$$.fragment), s = h("tr"), q(r.$$.fragment), o = h("tr"), q(a.$$.fragment), p(e, "class", "header svelte-18acnq2");
    },
    m(f, d) {
      y(f, e, d), b(e, l), b(e, t), z(n, t, null), b(e, s), z(r, s, null), b(e, o), z(a, o, null), c = !0;
    },
    p(f, [d]) {
      const u = {};
      d & /*viewModel*/
      1 && (u.viewModel = /*viewModel*/
      f[0].row1), n.$set(u);
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
      c || (g(n.$$.fragment, f), g(r.$$.fragment, f), g(a.$$.fragment, f), c = !0);
    },
    o(f) {
      w(n.$$.fragment, f), w(r.$$.fragment, f), w(a.$$.fragment, f), c = !1;
    },
    d(f) {
      f && $(e), j(n), j(r), j(a);
    }
  };
}
function To(i, e, l) {
  let { viewModel: t } = e;
  function n(o) {
    ae.call(this, i, o);
  }
  function s(o) {
    ae.call(this, i, o);
  }
  function r(o) {
    ae.call(this, i, o);
  }
  return i.$$set = (o) => {
    "viewModel" in o && l(0, t = o.viewModel);
  }, [t, n, s, r];
}
class Vo extends ee {
  constructor(e) {
    super(), Y(this, e, To, Lo, X, { viewModel: 0 }, Do);
  }
}
function Io(i) {
  ne(i, "svelte-gl55w2", ".tab-bar.svelte-gl55w2{position:sticky;top:0;display:flex;flex-direction:row;gap:3rem;background-color:#272727;z-index:1000;margin:0 -1rem;padding:0 1rem;box-shadow:0 1rem 0.5rem -0.5rem rgba(0, 0, 0, 0.8)}.tab-item.svelte-gl55w2{display:flex;flex-direction:column;padding:0.5rem 3rem 0.3rem 0;cursor:pointer;opacity:0.7;border-bottom:solid 1px transparent}.tab-item.svelte-gl55w2:hover{opacity:1}.tab-item.selected.svelte-gl55w2{opacity:1;border-bottom:solid 1px #555}.tab-title.svelte-gl55w2{font-size:1.6rem;font-weight:700;color:#fff;margin-bottom:0.2rem;cursor:pointer}.tab-subtitle.svelte-gl55w2{font-size:1rem;font-weight:400}");
}
function bn(i, e, l) {
  const t = i.slice();
  return t[8] = e[l], t[10] = l, t;
}
function wn(i) {
  let e, l, t = (
    /*item*/
    i[8].title + ""
  ), n, s, r = (
    /*item*/
    i[8].subtitle + ""
  ), o, a, c, f;
  function d() {
    return (
      /*click_handler*/
      i[6](
        /*index*/
        i[10]
      )
    );
  }
  return {
    c() {
      e = h("div"), l = h("div"), n = I(t), s = h("div"), o = I(r), p(l, "class", "tab-title svelte-gl55w2"), p(s, "class", a = "tab-subtitle " + /*item*/
      i[8].subtitleClass + " svelte-gl55w2"), p(e, "class", "tab-item svelte-gl55w2"), he(
        e,
        "selected",
        /*item*/
        i[8].id === /*$selectedItemId*/
        i[1]
      );
    },
    m(u, m) {
      y(u, e, m), b(e, l), b(l, n), b(e, s), b(s, o), c || (f = re(e, "click", d), c = !0);
    },
    p(u, m) {
      i = u, m & /*viewModel*/
      1 && t !== (t = /*item*/
      i[8].title + "") && W(n, t), m & /*viewModel*/
      1 && r !== (r = /*item*/
      i[8].subtitle + "") && W(o, r), m & /*viewModel*/
      1 && a !== (a = "tab-subtitle " + /*item*/
      i[8].subtitleClass + " svelte-gl55w2") && p(s, "class", a), m & /*viewModel, $selectedItemId*/
      3 && he(
        e,
        "selected",
        /*item*/
        i[8].id === /*$selectedItemId*/
        i[1]
      );
    },
    d(u) {
      u && $(e), c = !1, f();
    }
  };
}
function zo(i) {
  let e, l, t, n = (
    /*viewModel*/
    i[0].items
  ), s = [];
  for (let r = 0; r < n.length; r += 1)
    s[r] = wn(bn(i, n, r));
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
          i[4]
        ),
        re(
          e,
          "command",
          /*command_handler*/
          i[5]
        )
      ], l = !0);
    },
    p(r, [o]) {
      if (o & /*viewModel, $selectedItemId, onItemClicked*/
      11) {
        n = /*viewModel*/
        r[0].items;
        let a;
        for (a = 0; a < n.length; a += 1) {
          const c = bn(r, n, a);
          s[a] ? s[a].p(c, o) : (s[a] = wn(c), s[a].c(), s[a].m(e, null));
        }
        for (; a < s.length; a += 1)
          s[a].d(1);
        s.length = n.length;
      }
    },
    i: E,
    o: E,
    d(r) {
      r && $(e), O(s, r), l = !1, $e(t);
    }
  };
}
function jo(i, e, l) {
  let t, { viewModel: n } = e;
  const s = n.selectedItemId;
  ge(i, s, (d) => l(1, t = d));
  const r = qe();
  function o(d) {
    n.selectedIndex.set(d);
  }
  function a(d) {
    d.key === "ArrowLeft" ? (n.selectedIndex.update((u) => u > 0 ? u - 1 : u), d.preventDefault()) : d.key === "ArrowRight" ? (n.selectedIndex.update((u) => u < n.items.length - 1 ? u + 1 : u), d.preventDefault()) : d.key === "ArrowDown" && (r("command", {
      cmd: "enter-tab",
      itemId: t
    }), d.preventDefault());
  }
  function c(d) {
    ae.call(this, i, d);
  }
  const f = (d) => o(d);
  return i.$$set = (d) => {
    "viewModel" in d && l(0, n = d.viewModel);
  }, [
    n,
    t,
    s,
    o,
    a,
    c,
    f
  ];
}
class Po extends ee {
  constructor(e) {
    super(), Y(this, e, jo, zo, X, { viewModel: 0 }, Io);
  }
}
function qo(i) {
  ne(i, "svelte-hf3w0v", ".summary-container.svelte-hf3w0v{display:flex;flex-direction:column;flex:1}.scroll-container.svelte-hf3w0v{position:relative;display:flex;flex:1 1 1px;flex-direction:column;padding:0 1rem;overflow:auto}.header-container.svelte-hf3w0v{margin-bottom:1rem}.line.svelte-hf3w0v{min-height:1px;margin-bottom:0.5rem;background-color:#555}");
}
function kn(i) {
  let e, l, t, n;
  return l = new Vo({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].statsTableViewModel
      )
    }
  }), l.$on(
    "command",
    /*command_handler*/
    i[3]
  ), {
    c() {
      e = h("div"), q(l.$$.fragment), t = h("div"), p(e, "class", "header-container svelte-hf3w0v"), p(t, "class", "line svelte-hf3w0v");
    },
    m(s, r) {
      y(s, e, r), z(l, e, null), y(s, t, r), n = !0;
    },
    p(s, r) {
      const o = {};
      r & /*viewModel*/
      1 && (o.viewModel = /*viewModel*/
      s[0].statsTableViewModel), l.$set(o);
    },
    i(s) {
      n || (g(l.$$.fragment, s), n = !0);
    },
    o(s) {
      w(l.$$.fragment, s), n = !1;
    },
    d(s) {
      s && $(e), j(l), s && $(t);
    }
  };
}
function No(i) {
  let e, l;
  return e = new _t({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].comparisonsByDatasetSummaryViewModel
      )
    }
  }), e.$on(
    "command",
    /*command_handler_4*/
    i[7]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n & /*viewModel*/
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
function Bo(i) {
  let e, l;
  return e = new _t({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].comparisonsByScenarioSummaryViewModel
      )
    }
  }), e.$on(
    "command",
    /*command_handler_3*/
    i[6]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n & /*viewModel*/
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
function xo(i) {
  let e, l;
  return e = new _t({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].comparisonViewsSummaryViewModel
      )
    }
  }), e.$on(
    "command",
    /*command_handler_2*/
    i[5]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n & /*viewModel*/
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
function Ko(i) {
  let e, l;
  return e = new fo({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].checkSummaryViewModel
      )
    }
  }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n & /*viewModel*/
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
function Eo(i) {
  let e, l, t, n, s, r, o, a = (
    /*viewModel*/
    i[0].statsTableViewModel && kn(i)
  );
  n = new Po({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].tabBarViewModel
      )
    }
  }), n.$on(
    "command",
    /*command_handler_1*/
    i[4]
  );
  const c = [Ko, xo, Bo, No], f = [];
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
  return ~(s = d(i)) && (r = f[s] = c[s](i)), {
    c() {
      e = h("div"), l = h("div"), a && a.c(), t = H(), q(n.$$.fragment), r && r.c(), p(l, "class", "scroll-container svelte-hf3w0v"), p(e, "class", "summary-container svelte-hf3w0v");
    },
    m(u, m) {
      y(u, e, m), b(e, l), a && a.m(l, null), b(l, t), z(n, l, null), ~s && f[s].m(l, null), o = !0;
    },
    p(u, [m]) {
      /*viewModel*/
      u[0].statsTableViewModel ? a ? (a.p(u, m), m & /*viewModel*/
      1 && g(a, 1)) : (a = kn(u), a.c(), g(a, 1), a.m(l, t)) : a && (x(), w(a, 1, 1, () => {
        a = null;
      }), K());
      const v = {};
      m & /*viewModel*/
      1 && (v.viewModel = /*viewModel*/
      u[0].tabBarViewModel), n.$set(v);
      let _ = s;
      s = d(u), s === _ ? ~s && f[s].p(u, m) : (r && (x(), w(f[_], 1, 1, () => {
        f[_] = null;
      }), K()), ~s ? (r = f[s], r ? r.p(u, m) : (r = f[s] = c[s](u), r.c()), g(r, 1), r.m(l, null)) : r = null);
    },
    i(u) {
      o || (g(a), g(n.$$.fragment, u), g(r), o = !0);
    },
    o(u) {
      w(a), w(n.$$.fragment, u), w(r), o = !1;
    },
    d(u) {
      u && $(e), a && a.d(), j(n), ~s && f[s].d();
    }
  };
}
function Wo(i, e, l) {
  let t, { viewModel: n } = e;
  const s = n.tabBarViewModel.selectedItemId;
  ge(i, s, (d) => l(1, t = d));
  function r(d) {
    ae.call(this, i, d);
  }
  function o(d) {
    ae.call(this, i, d);
  }
  function a(d) {
    ae.call(this, i, d);
  }
  function c(d) {
    ae.call(this, i, d);
  }
  function f(d) {
    ae.call(this, i, d);
  }
  return i.$$set = (d) => {
    "viewModel" in d && l(0, n = d.viewModel);
  }, [
    n,
    t,
    s,
    r,
    o,
    a,
    c,
    f
  ];
}
class Go extends ee {
  constructor(e) {
    super(), Y(this, e, Wo, Eo, X, { viewModel: 0 }, qo);
  }
}
function Ao(i) {
  ne(i, "svelte-1ul5lao", ".app-container.svelte-1ul5lao{display:flex;flex-direction:column;flex:1}.loading-container.svelte-1ul5lao{display:flex;flex-direction:column;flex:1 1 auto;align-items:center;justify-content:center}.progress-container.svelte-1ul5lao{display:flex;height:100vh;align-items:center;justify-content:center;font-size:2em}");
}
function Fo(i) {
  return {
    c: E,
    m: E,
    p: E,
    i: E,
    o: E,
    d: E
  };
}
function Ho(i) {
  let e, l, t, n, s;
  l = new Vs({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].headerViewModel
      )
    }
  }), l.$on(
    "command",
    /*onCommand*/
    i[9]
  );
  const r = [Zo, Xo, Uo, Oo], o = [];
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
  return t = a(i), n = o[t] = r[t](i), {
    c() {
      e = h("div"), q(l.$$.fragment), n.c(), p(e, "class", "app-container svelte-1ul5lao");
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
      }), K(), n = o[t], n ? n.p(c, f) : (n = o[t] = r[t](c), n.c()), g(n, 1), n.m(e, null));
    },
    i(c) {
      s || (g(l.$$.fragment, c), g(n), s = !0);
    },
    o(c) {
      w(l.$$.fragment, c), w(n), s = !1;
    },
    d(c) {
      c && $(e), j(l), o[t].d();
    }
  };
}
function Oo(i) {
  let e, l;
  return e = new Go({
    props: {
      viewModel: (
        /*viewModel*/
        i[0].summaryViewModel
      )
    }
  }), e.$on(
    "command",
    /*onCommand*/
    i[9]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n & /*viewModel*/
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
function Uo(i) {
  let e, l;
  return e = new Ks({
    props: { viewModel: (
      /*perfViewModel*/
      i[2]
    ) }
  }), e.$on(
    "command",
    /*onCommand*/
    i[9]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n & /*perfViewModel*/
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
function Xo(i) {
  let e, l;
  return e = new ws({
    props: {
      viewModel: (
        /*compareDetailViewModel*/
        i[1]
      )
    }
  }), e.$on(
    "command",
    /*onCommand*/
    i[9]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n & /*compareDetailViewModel*/
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
function Zo(i) {
  let e, l, t;
  return {
    c() {
      e = h("div"), l = h("div"), t = I(
        /*$progress*/
        i[6]
      ), p(l, "class", "progress"), p(e, "class", "progress-container svelte-1ul5lao");
    },
    m(n, s) {
      y(n, e, s), b(e, l), b(l, t);
    },
    p(n, s) {
      s & /*$progress*/
      64 && W(
        t,
        /*$progress*/
        n[6]
      );
    },
    i: E,
    o: E,
    d(n) {
      n && $(e);
    }
  };
}
function Jo(i) {
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
function Qo(i) {
  let e, l, t, n = {
    ctx: i,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Jo,
    then: Ho,
    catch: Fo,
    value: 12,
    blocks: [, , ,]
  };
  return wt(l = /*viewReady*/
  i[4], n), {
    c() {
      e = H(), n.block.c();
    },
    m(s, r) {
      y(s, e, r), n.block.m(s, n.anchor = r), n.mount = () => e.parentNode, n.anchor = e, t = !0;
    },
    p(s, [r]) {
      i = s, n.ctx = i, r & /*viewReady*/
      16 && l !== (l = /*viewReady*/
      i[4]) && wt(l, n) || _i(n, i, r);
    },
    i(s) {
      t || (g(n.block), t = !0);
    },
    o(s) {
      for (let r = 0; r < 3; r += 1) {
        const o = n.blocks[r];
        w(o);
      }
      t = !1;
    },
    d(s) {
      s && $(e), n.block.d(s), n.token = null, n = null;
    }
  };
}
function Yo(i, e, l) {
  let t, n, { viewModel: s } = e;
  const r = s.checksInProgress;
  ge(i, r, (_) => l(5, t = _));
  const o = s.progress;
  ge(i, o, (_) => l(6, n = _));
  let a, c, f = "summary";
  const d = new Zn("Roboto Condensed", { weight: 400 });
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
  return i.$$set = (_) => {
    "viewModel" in _ && l(0, s = _.viewModel);
  }, i.$$.update = () => {
    i.$$.dirty & /*graphFontReady, viewModel*/
    1025 && u && (l(4, m = !0), s.runTestSuite());
  }, [
    s,
    a,
    c,
    f,
    m,
    t,
    n,
    r,
    o,
    v,
    u
  ];
}
class er extends ee {
  constructor(e) {
    super(), Y(this, e, Yo, Qo, X, { viewModel: 0 }, Ao);
  }
}
function $n(i) {
  let e, l;
  return e = new er({
    props: { viewModel: (
      /*appViewModel*/
      i[0]
    ) }
  }), {
    c() {
      q(e.$$.fragment);
    },
    m(t, n) {
      z(e, t, n), l = !0;
    },
    p(t, n) {
      const s = {};
      n & /*appViewModel*/
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
function tr(i) {
  let e, l, t = (
    /*appViewModel*/
    i[0] && $n(i)
  );
  return {
    c() {
      t && t.c(), e = H();
    },
    m(n, s) {
      t && t.m(n, s), y(n, e, s), l = !0;
    },
    p(n, [s]) {
      /*appViewModel*/
      n[0] ? t ? (t.p(n, s), s & /*appViewModel*/
      1 && g(t, 1)) : (t = $n(n), t.c(), g(t, 1), t.m(e.parentNode, e)) : t && (x(), w(t, 1, 1, () => {
        t = null;
      }), K());
    },
    i(n) {
      l || (g(t), l = !0);
    },
    o(n) {
      w(t), l = !1;
    },
    d(n) {
      t && t.d(n), n && $(e);
    }
  };
}
function lr(i, e, l) {
  let { appViewModel: t } = e;
  return i.$$set = (n) => {
    "appViewModel" in n && l(0, t = n.appViewModel);
  }, [t];
}
class nr extends ee {
  constructor(e) {
    super(), Y(this, e, lr, tr, X, { appViewModel: 0 });
  }
}
function jn(i, e, l) {
  const t = [];
  return i.outputVarL && i.outputVarR ? i.outputVarR.varName !== i.outputVarL.varName && t.push(je("warn", `variable renamed, previously '${i.outputVarL.varName}'`)) : i.outputVarL !== void 0 ? t.push(je("warn", `variable only defined in ${Re(e, "left")}`)) : i.outputVarR !== void 0 && t.push(je("warn", `variable only defined in ${Re(l, "right")}`)), t;
}
function Pn(i, e, l) {
  var c, f;
  const t = [];
  if (i.settings.kind === "all-inputs-settings")
    return [];
  const n = [], s = [], r = [];
  for (const d of i.settings.inputs) {
    const u = (c = d.stateL.error) == null ? void 0 : c.kind, m = (f = d.stateR.error) == null ? void 0 : f.kind, v = u === "unknown-input", _ = m === "unknown-input", k = u === "invalid-value", R = m === "invalid-value";
    if (v || _) {
      const M = { requestedName: d.requestedName, kind: "unknown-input" };
      v && _ ? n.push(M) : v ? s.push(M) : _ && r.push(M);
    } else if (k || R) {
      const M = { requestedName: d.requestedName, kind: "invalid-value" };
      k && R ? n.push(M) : k ? s.push(M) : R && r.push(M);
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
  if (n.length > 0)
    t.push(je("err", `invalid scenario: ${a(n)}`));
  else if (s.length > 0) {
    const d = `scenario not valid in ${Re(e, "left")}`;
    t.push(je("warn", `${d}: ${a(s)}`));
  } else if (r.length > 0) {
    const d = `scenario not valid in ${Re(l, "right")}`;
    t.push(je("warn", `${d}: ${a(r)}`));
  }
  return t;
}
function je(i, e) {
  return `<span class="annotation"><span class="${`status-color-${i === "err" ? "failed" : "warning"}`}">${i === "err" ? "✗" : "‼"}</span>&ensp;${e}</span>`;
}
function ir(i, e, l) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e) {
    const o = i.scenarios.getScenario(r.s);
    if (o === void 0)
      continue;
    let a, c;
    switch (l) {
      case "dataset": {
        const u = i.datasets.getDataset(r.d);
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
        Oe(l);
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
function qn(i, e, l, t, n) {
  var m, v, _, k;
  const s = (R, M) => new Ln(i, e, M, l, R), r = (m = i.bundleL.model.modelSpec.graphSpecs) == null ? void 0 : m.find((R) => R.id === t), o = (v = i.bundleR.model.modelSpec.graphSpecs) == null ? void 0 : v.find((R) => R.id === t), a = s(r, "left"), c = s(o, "right"), f = /* @__PURE__ */ new Set();
  if (r)
    for (const R of r.datasets)
      f.add(R.datasetKey);
  if (o)
    for (const R of o.datasets)
      f.add(R.datasetKey);
  const d = [];
  let u = 0;
  if (n.inclusion === "both")
    for (const R of f) {
      const M = (_ = r == null ? void 0 : r.datasets) == null ? void 0 : _.find((ie) => ie.datasetKey === R), C = (k = o == null ? void 0 : o.datasets) == null ? void 0 : k.find((ie) => ie.datasetKey === R), S = M == null ? void 0 : M.varName, D = C == null ? void 0 : C.varName, N = (M == null ? void 0 : M.color) || "#777", V = (C == null ? void 0 : C.color) || "#777", P = M == null ? void 0 : M.label, T = C == null ? void 0 : C.label, A = n.datasetReports.find((ie) => ie.datasetKey === R);
      let L = 0;
      if (A) {
        if (A.maxDiff === void 0 || A.maxDiff === 0)
          continue;
        L = A.maxDiff, L > u && (u = L);
      }
      const B = `bucket-color-${vt(L, i.thresholds)}`, Z = new Tn(
        i,
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
    metadataRows: n.metadataReports,
    datasetRows: d,
    maxDiffPct: u
  };
}
function sr(i, e, l, t, n, s, r) {
  switch (l.group.kind) {
    case "by-dataset":
      return or(
        i,
        e,
        l,
        s,
        r
      );
    case "by-scenario":
      return rr(
        i,
        e,
        l,
        t,
        n,
        s,
        r
      );
    default:
      Xe(l.group.kind);
  }
}
function or(i, e, l, t, n) {
  const s = i.bundleL.name, r = i.bundleR.name, o = l.root, a = o.outputVarR || o.outputVarL, c = a.varName, f = a.sourceName, d = jn(o, s, r).join(" "), u = [];
  function m(M) {
    const C = M.join('&nbsp;<span class="related-sep">&gt;</span>&nbsp;');
    u.push(C);
  }
  if (a.relatedItems)
    for (const M of a.relatedItems)
      m(M.locationPath);
  const v = ir(i, l.group.testSummaries, "scenario");
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
    const D = Vn(
      i,
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
    nextRowIndex: n,
    relatedListHeader: "Appears in:",
    relatedItems: u,
    graphSections: [],
    detailRows: k
  };
}
function rr(i, e, l, t, n, s, r) {
  const o = i.bundleL.name, a = i.bundleR.name, c = l.root, f = Pn(c, o, a).join(" ");
  let d, u, m, v;
  n ? (d = "views", u = t == null ? void 0 : t.title, m = n.title, v = n.subtitle) : (d = "by-scenario", m = c.title, v = c.subtitle);
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
    const N = i.scenarios.getScenario(D.s);
    if (N === void 0)
      continue;
    const V = i.datasets.getDataset(D.d), P = V.outputVarR || V.outputVarL, T = {
      title: P.varName,
      subtitle: P.sourceName,
      scenario: N,
      testSummary: D
    }, A = Vn(
      i,
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
  if (n != null && n.graphs) {
    const D = l.group.testSummaries;
    S = ar(i, e, n, D);
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
function ar(i, e, l, t) {
  if (l.graphs === "all")
    return Nn(i, e, l.scenario, t).sections;
  if (l.graphs.length === 0)
    return [];
  const n = i.bundleL.model.modelSpec.graphSpecs, s = i.bundleR.model.modelSpec.graphSpecs, r = l.scenario, o = [];
  for (const a of l.graphs) {
    const c = n == null ? void 0 : n.find((u) => u.id === a), f = s == null ? void 0 : s.find((u) => u.id === a), d = Mn(c, f, r.key, t);
    o.push(qn(i, e, r, a, d));
  }
  return [
    {
      title: "Featured graphs",
      rows: o
    }
  ];
}
function Nn(i, e, l, t) {
  const n = /* @__PURE__ */ new Set();
  function s(S) {
    if (S.model.modelSpec.graphSpecs)
      for (const D of S.model.modelSpec.graphSpecs)
        n.add(D.id);
  }
  s(i.bundleL), s(i.bundleR);
  const r = [], o = [], a = [], c = [], f = [], d = [], u = i.bundleL.model.modelSpec.graphSpecs, m = i.bundleR.model.modelSpec.graphSpecs, v = Array(i.thresholds.length + 2).fill(0);
  for (const S of n) {
    const D = u == null ? void 0 : u.find((L) => L.id === S), N = m == null ? void 0 : m.find((L) => L.id === S), V = Mn(D, N, l.key, t), P = cr(V), T = qn(i, e, l, S, V);
    let A;
    switch (V.inclusion) {
      case "right-only":
        A = 1, r.push(T);
        break;
      case "left-only":
        A = 1, o.push(T);
        break;
      case "both":
        P > 0 ? (A = vt(P, i.thresholds), V.metadataReports.length > 0 ? a.push(T) : f.push(T)) : V.metadataReports.length > 0 ? (A = 1, c.push(T)) : (A = 0, d.push(T));
        break;
      case "neither":
        A = 0, d.push(T);
        break;
      default:
        Xe(V.inclusion);
    }
    v[A]++;
  }
  const _ = n.size, k = _ - v[0], R = v.map((S) => S / _ * 100), M = [];
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
function cr(i) {
  let e = 0;
  for (const l of i.datasetReports)
    l.maxDiff !== void 0 && l.maxDiff > e && (e = l.maxDiff);
  return e;
}
function fr(i, e) {
  const l = localStorage.getItem(i);
  let t;
  l !== void 0 ? t = l === "1" : t = e;
  let n = t;
  const { subscribe: s, set: r } = de(t), o = (c) => {
    n = c, localStorage.setItem(i, c ? "1" : "0"), r(c);
  };
  return {
    subscribe: s,
    set: o,
    update: (c) => {
      o(c(n));
    }
  };
}
function dr(i, e) {
  let l;
  if (e ? l = fr("sde-check-simplify-scenarios", !1) : l = void 0, i) {
    const t = i.thresholds, n = [];
    n.push("no diff");
    for (let s = 0; s < 3; s++)
      n.push(`diff &lt; ${t[s]}%`);
    return n.push(`diff &gt;= ${t[2]}%`), {
      nameL: i.bundleL.name,
      nameR: i.bundleR.name,
      bundleNamesL: de([i.bundleL.name]),
      bundleNamesR: de([i.bundleR.name]),
      thresholds: n,
      simplifyScenarios: l
    };
  } else
    return {
      bundleNamesL: de([]),
      bundleNamesR: de([]),
      simplifyScenarios: l
    };
}
function ct(i, e, l, t) {
  const n = l - e;
  function s(r) {
    return n !== 0 ? (r - e) / (l - e) * 100 : 0;
  }
  return {
    values: i,
    avg: t,
    points: i.map((r) => s(r)),
    avgPoint: s(t)
  };
}
class ur {
  constructor(e, l) {
    this.bundleModelL = e, this.bundleModelR = l, this.minTime = Number.MAX_VALUE, this.maxTime = 0, this.writableRows = de([]), this.rows = this.writableRows;
  }
  addRow(e, l) {
    const t = Math.min(e.minTime, l.minTime), n = Math.max(e.maxTime, l.maxTime), s = Math.min(this.minTime, t), r = Math.max(this.maxTime, n);
    this.minTime = s, this.maxTime = r;
    function o(f) {
      return ct(f.values, s, r, f.avg);
    }
    const a = Sn(this.writableRows);
    for (const f of a)
      f.dotPlotL = o(f.dotPlotL), f.dotPlotR = o(f.dotPlotR);
    function c(f) {
      return ct(f.allTimes, s, r, f.avgTime);
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
function mr(i) {
  return new ur(i.comparison.bundleL.model, i.comparison.bundleR.model);
}
let hr = 1;
class pr {
  constructor(e, l, t, n) {
    this.dataCoordinator = e, this.scenario = l, this.datasetKey = t, this.predicateReport = n, this.requestKeys = [], this.expectedDataKeys = [], this.resolvedDataKeys = [], this.opConstantRefs = /* @__PURE__ */ new Map(), this.resolvedData = /* @__PURE__ */ new Map(), this.dataRequested = !1, this.dataLoaded = !1, this.baseRequestKey = `check-graph-box::${hr++}`, this.writableContent = de(void 0), this.content = this.writableContent;
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
            const n = t.dataRef.scenario.spec, s = t.dataRef.dataset.datasetKey;
            this.requestDataset(l, n, s);
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
  /**
   * Request a dataset for the given scenario and key.
   *
   * @param dataKey The key used to store the dataset that is received.
   * @param scenarioSpec The scenario to be configured.
   * @param datasetKey The key for the dataset to be fetched.
   */
  requestDataset(e, l, t) {
    const n = `${this.baseRequestKey}::${e}`;
    this.requestKeys.push(n), this.dataCoordinator.requestDataset(n, l, t, (s) => {
      this.dataRequested && (this.resolvedDataKeys.push(e), this.resolvedData.set(e, rt(s)), this.processResponses());
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
    const e = this.resolvedData.get("primary"), l = e.reduce((_, k) => k.x < _ ? k.x : _, e[0].x), t = e.reduce((_, k) => k.x > _ ? k.x : _, e[0].x), n = this.predicateReport.time;
    let s, r, o;
    if (n === void 0)
      s = l, r = t, o = (_) => _ >= l && _ <= t;
    else if (typeof n == "number")
      s = n, r = n, o = (_) => _ === l;
    else if (Array.isArray(n))
      s = n[0], r = n[1], o = (_) => _ >= l && _ <= t;
    else {
      const _ = n, k = [];
      _.after_excl !== void 0 && (k.push((R) => R > _.after_excl), s = _.after_excl), _.after_incl !== void 0 && (k.push((R) => R >= _.after_incl), s = _.after_incl), _.before_excl !== void 0 && (k.push((R) => R < n.before_excl), r = _.before_excl), _.before_incl !== void 0 && (k.push((R) => R <= n.before_incl), r = _.before_incl), s === void 0 && (s = l), r === void 0 && (r = t), o = (R) => {
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
function vr(i) {
  switch (i) {
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
function Fe(i, e, l, t, n, s = !1) {
  const r = "&ensp;".repeat(2 + i * 4), o = vr(l), a = `<span class="status-color-${l}">${o}</span>`, c = `${r}${a}&ensp;${t}`;
  return {
    rowClasses: `${e} ${l}`,
    status: l,
    span: c,
    graphBoxViewModel: n,
    graphVisible: de(s)
  };
}
function nt(i) {
  return `<span class="bold">${i}</span>`;
}
function _r(i, e) {
  let l = !1;
  const t = [], n = Fe(0, "test", e.status, e.name);
  for (const r of e.scenarios) {
    t.push(Fe(1, "scenario", r.status, Gn(r, nt)));
    for (const o of r.datasets) {
      t.push(Fe(2, "dataset", o.status, An(o, nt)));
      for (const a of o.predicates) {
        let c, f = !1;
        r.checkScenario.spec && o.checkDataset.datasetKey && (c = new pr(
          i,
          r.checkScenario,
          o.checkDataset.datasetKey,
          a
        ), !l && a.result.status === "failed" && (l = !0, f = !0)), t.push(
          Fe(
            3,
            "predicate",
            a.result.status,
            Fn(a, nt),
            c,
            f
          )
        );
      }
    }
  }
  const s = de(!1);
  return {
    testRow: n,
    childRows: t,
    expandAll: s
  };
}
function gr(i, e) {
  return {
    name: e.name,
    tests: e.tests.map((l) => _r(i, l))
  };
}
function br(i, e) {
  let l = 0, t = 0, n = 0;
  for (const o of e.groups)
    for (const a of o.tests)
      for (const c of a.scenarios) {
        if (c.datasets.length === 0) {
          n++;
          continue;
        }
        for (const f of c.datasets) {
          if (f.predicates.length === 0) {
            n++;
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
                n++;
                break;
            }
        }
      }
  const s = l + t + n;
  let r;
  return s > 0 && (r = [l / s * 100, t / s * 100, n / s * 100]), {
    total: s,
    passed: l,
    failed: t,
    errors: n,
    percents: r,
    groups: e.groups.map((o) => gr(i, o))
  };
}
function wr(i, e) {
  const l = i.bundleL.name, t = i.bundleR.name, n = Hn(i, e), s = n.byScenario, r = n.byDataset;
  let o = 1;
  function a() {
    return `view_${o++}`;
  }
  let c = 0;
  const f = [];
  for (const J of i.viewGroups) {
    const Q = J.views.map((le) => {
      var ue;
      switch (le.kind) {
        case "view": {
          const ce = le.scenario, ve = s.allGroupSummaries.get(ce.key);
          let _e, ye;
          if (le.graphs === "all") {
            const Ce = ve.group.testSummaries, Se = Nn(i, void 0, ce, Ce);
            _e = Se.diffPercentByBucket, ye = Se.nonZeroDiffCount;
          } else
            _e = (ue = ve.scores) == null ? void 0 : ue.diffPercentByBucket;
          return Bi(_e) && c++, {
            kind: "views",
            groupKey: a(),
            title: le.title,
            subtitle: le.subtitle,
            diffPercentByBucket: _e,
            groupSummary: ve,
            viewMetadata: {
              viewGroup: J,
              view: le,
              changedGraphCount: ye
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
          Oe(le);
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
        U = _e.varName, le = _e.sourceName, ue = jn(ce, l, t).join(" ");
        break;
      }
      case "scenario":
        Q = "by-scenario", U = ce.title, le = ce.subtitle, ue = Pn(ce, l, t).join(" ");
        break;
      default:
        Oe(ce);
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
  const v = Re(l, "left"), _ = Re(t, "right"), k = m(s.withErrors, "scenario with errors…"), R = m(s.onlyInLeft, `scenario only valid in ${v}…`), M = m(s.onlyInRight, `scenario only valid in ${_}…`), C = m(s.withDiffs, "scenario producing differences…"), S = m(
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
function kr(i, e, l) {
  function t(U, le = 0) {
    return U === 0 ? "-" : `${U <= 0 ? "" : "+"}${U.toFixed(le)}`;
  }
  function n(U) {
    return U === 0 ? "" : `${t(U, 1)}%`;
  }
  function s(U, le) {
    return U !== 0 ? (le - U) / U * 100 : 0;
  }
  const r = i.bundleL.model.modelSpec, o = i.bundleR.model.modelSpec, a = r.inputVars.size, c = o.inputVars.size, f = c - a, d = r.outputVars.size, u = o.outputVars.size, m = u - d, v = r.modelSizeInBytes, _ = o.modelSizeInBytes, k = _ - v, R = s(v, _), M = r.dataSizeInBytes, C = o.dataSizeInBytes, S = C - M, D = s(M, C), N = e.avgTime || 0, V = l.avgTime || 0, P = V - N, T = s(N, V), A = e.minTime, L = l.minTime, G = e.maxTime, B = l.maxTime, Z = Math.min(A, L), ie = Math.max(G, B);
  function pe(U) {
    return ct(U.allTimes, Z, ie, U.avgTime);
  }
  const we = {
    modelName: i.bundleL.name,
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
    modelName: i.bundleR.name,
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
    modelSizePctChange: n(R),
    dataSize: t(S),
    dataSizePctChange: n(D),
    avgTime: t(P, 1),
    avgTimePctChange: n(T),
    minTime: "",
    maxTime: ""
  };
  return {
    row1: we,
    row2: J,
    row3: Q
  };
}
class $r {
  constructor(e, l) {
    this.items = e, this.selectedIndex = de(l), this.selectedItem = Dt(this.selectedIndex, (t) => e[t]), this.selectedItemId = Dt(this.selectedItem, (t) => t.id);
  }
}
function yn(i, e, l, t) {
  var _;
  function n(k, R) {
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
  const o = br(i, e);
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
    c = kr(
      l,
      t.perfReportL,
      t.perfReportR
    );
    const k = wr(l, t.testSummaries);
    if (k.views) {
      f = k.views;
      let C;
      const D = k.views.allRows.find((V) => {
        var P;
        return ((P = V.viewMetadata) == null ? void 0 : P.view.graphs) === "all";
      }), N = ((_ = D == null ? void 0 : D.viewMetadata) == null ? void 0 : _.changedGraphCount) || 0;
      N > 0 ? C = n(N, "graph") : C = n(f.rowsWithDiffs, "view"), r("comp-views", "Comparison views", C);
    }
    d = k.byScenario;
    const R = n(d.rowsWithDiffs, "scenario");
    r("comps-by-scenario", "Comparisons by scenario", R), u = k.byDataset;
    const M = n(u.rowsWithDiffs, "dataset");
    r("comps-by-dataset", "Comparisons by output", M);
  }
  const m = s.findIndex((k) => k.subtitle !== "all clear"), v = new $r(s, m >= 0 ? m : 0);
  return {
    statsTableViewModel: c,
    tabBarViewModel: v,
    checkSummaryViewModel: o,
    comparisonViewsSummaryViewModel: f,
    comparisonsByScenarioSummaryViewModel: d,
    comparisonsByDatasetSummaryViewModel: u
  };
}
class yr {
  /**
   * @param appModel The app model.
   * @param suiteSummary The test suite summary if one was already generated by
   * model-check CLI tool during the build process; if defined, this will be used
   * instead of running the checks and comparisons in the user's browser.
   */
  constructor(e, l) {
    this.appModel = e, this.suiteSummary = l, this.writableChecksInProgress = de(!0), this.checksInProgress = this.writableChecksInProgress, this.writableProgress = de("0%"), this.progress = this.writableProgress;
    const t = l === void 0;
    this.headerViewModel = dr(e.config.comparison, t);
  }
  runTestSuite() {
    var l;
    this.cancelRunSuite && (this.cancelRunSuite(), this.cancelRunSuite = void 0), this.writableChecksInProgress.set(!0), this.writableProgress.set("0%");
    const e = this.appModel.config.comparison;
    if (this.suiteSummary) {
      const t = this.appModel.config.check, n = On(t, this.suiteSummary.checkSummary), s = (l = this.suiteSummary) == null ? void 0 : l.comparisonSummary;
      this.summaryViewModel = yn(
        this.appModel.checkDataCoordinator,
        n,
        e,
        s
      ), this.writableChecksInProgress.set(!1);
    } else {
      let t = !1;
      this.headerViewModel.simplifyScenarios !== void 0 && (t = Sn(this.headerViewModel.simplifyScenarios)), this.cancelRunSuite = Un(
        this.appModel.config,
        {
          onProgress: (n) => {
            this.writableProgress.set(`${Math.round(n * 100)}%`);
          },
          onComplete: (n) => {
            const s = n.checkReport;
            let r;
            n.comparisonReport && (r = Xn(n.comparisonReport)), this.summaryViewModel = yn(
              this.appModel.checkDataCoordinator,
              s,
              e,
              r
            ), this.writableChecksInProgress.set(!1);
          },
          onError: (n) => {
            console.error(n);
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
    const l = this.getComparisonSummaryViewModel(e.kind), t = e.groupSummary, n = e.groupKey, s = (d = e.viewMetadata) == null ? void 0 : d.viewGroup, r = (u = e.viewMetadata) == null ? void 0 : u.view;
    let o, a;
    const c = l.allRows.length, f = l.allRows.findIndex((m) => m.groupKey === n);
    return f >= 0 && (f > 0 && (o = f - 1), f < c - 1 && (a = f + 1)), sr(
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
    const n = this.getComparisonSummaryViewModel(e).allRows[l];
    return this.createCompareDetailViewModelForSummaryRow(n);
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
function Lr(i, e) {
  const l = (e == null ? void 0 : e.containerId) || "app-shell-container", t = new nr({
    target: document.getElementById(l),
    props: {
      appViewModel: void 0
    }
  });
  return Yn(i).then((n) => {
    const s = new yr(n, e == null ? void 0 : e.suiteSummary);
    e != null && e.bundleNames && (s.headerViewModel.bundleNamesL.set(e.bundleNames), s.headerViewModel.bundleNamesR.set(e.bundleNames)), t.$set({
      appViewModel: s
    });
  }).catch((n) => {
    console.error(`ERROR: Failed to initialize app model: ${n.message}`);
  }), t;
}
export {
  Lr as initAppShell
};

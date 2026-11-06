import { chromium } from "playwright";

// Temporary audit: hovers every link and button in both themes and reports text with too little contrast.
const BASE = "http://localhost:3120";
const PAGES = (process.env.PAGES ?? "/,/directory,/directory/countries,/directory/countries/germany,/directory/countries/germany/labs,/directory/labs/tubingen-ai-center,/directory/labs/tubingen-ai-center/people,/directory/universities/eth-zurich,/directory/professors,/apply,/guides,/scholarships,/steps,/planner").split(",");

function measure(el) {
  const parse = (c) => {
    const m = c.match(/rgba?\(([^)]+)\)/);
    if (!m) return [0, 0, 0, 0];
    const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
    return [p[0], p[1], p[2], p.length > 3 ? p[3] : 1];
  };
  const dark = document.documentElement.classList.contains("dark");
  const bgOf = (e) => {
    let r = dark ? 0 : 255, g = r, b = r;
    const chain = [];
    for (let x = e; x; x = x.parentElement) chain.push(x);
    chain.reverse();
    for (const x of chain) {
      const [cr, cg, cb, ca] = parse(getComputedStyle(x).backgroundColor);
      if (ca > 0) { r = cr * ca + r * (1 - ca); g = cg * ca + g * (1 - ca); b = cb * ca + b * (1 - ca); }
    }
    return [r, g, b];
  };
  const lum = ([r, g, b]) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const found = [];
  for (const n of [el, ...el.querySelectorAll("*")]) {
    const own = [...n.childNodes].some((c) => c.nodeType === 3 && c.textContent.trim());
    if (!own) continue;
    const cs = getComputedStyle(n);
    const [r, g, b] = parse(cs.color);
    const bg = bgOf(n);
    const l1 = lum([r, g, b]);
    const l2 = lum(bg);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    found.push({ ratio: +ratio.toFixed(2), text: n.textContent.trim().slice(0, 30), fg: cs.color, bg: `rgb(${bg.map(Math.round)})`, cls: String(el.className).slice(0, 90) });
  }
  found.sort((a, b) => a.ratio - b.ratio);
  return found[0];
}

const browser = await chromium.launch({ channel: "chrome" });
const out = [];
for (const theme of ["dark", "light"]) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  await ctx.addInitScript((t) => { try { localStorage.setItem("theme", t); } catch { /* storage unavailable */ } }, theme);
  const page = await ctx.newPage();
  for (const path of PAGES) {
    await page.goto(BASE + path, { waitUntil: "networkidle" }).catch(() => {});
    const handles = await page.$$("a[href], button");
    let checked = 0;
    for (const h of handles.slice(0, 120)) {
      await h.scrollIntoViewIfNeeded().catch(() => {});
      const box = await h.boundingBox().catch(() => null);
      if (!box || box.width < 4 || box.height < 4) continue;
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.waitForTimeout(250);
      const res = await h.evaluate(measure).catch(() => null);
      checked++;
      if (res && res.ratio < 3) out.push({ theme, path, ...res });
    }
    console.error(theme, path, "checked", checked);
  }
  await ctx.close();
}
await browser.close();
const seen = new Set();
for (const o of out) {
  const k = `${o.theme}|${o.fg}|${o.bg}|${o.text}`;
  if (seen.has(k)) continue;
  seen.add(k);
  console.log(JSON.stringify(o));
}
console.log("problems:", out.length);

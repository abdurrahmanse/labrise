import { chromium } from "playwright";

// Usage: npm run build && npx next start -p 3120, then node scripts/theme-audit.mjs
// Loads pages in light and dark mode and lists text whose colour barely differs from its background.
const BASE = process.env.BASE ?? "http://localhost:3120";
const ROUTES = (process.env.ROUTES ?? "/,/roadmap,/steps,/directory,/directory/countries,/directory/countries/germany,/directory/universities/eth-zurich,/directory/professors/daniel-cremers,/scholarships,/professors,/documents,/planner,/faqs,/contact,/about").split(",");
const browser = await chromium.launch();
let bad = 0;
for (const theme of ["light", "dark"]) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  await ctx.addInitScript((t) => localStorage.setItem("theme", t), theme);
  for (const route of ROUTES) {
    const page = await ctx.newPage();
    await page.goto(BASE + route, { waitUntil: "networkidle" });
    const found = await page.evaluate(() => {
      const cv = document.createElement("canvas"); cv.width = cv.height = 1; const g2 = cv.getContext("2d", { willReadFrequently: true });
      // Canvas converts any CSS colour (oklab, lab, color-mix) to plain sRGB.
      const parse = (c) => { g2.clearRect(0, 0, 1, 1); g2.fillStyle = "#808080"; g2.fillStyle = c; g2.fillRect(0, 0, 1, 1); const d = g2.getImageData(0, 0, 1, 1).data; return { r: d[0], g: d[1], b: d[2], a: d[3] / 255 }; };
      const lum = ({ r, g, b }) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
      const bgOf = (el) => { for (let e = el; e; e = e.parentElement) { const c = parse(getComputedStyle(e).backgroundColor); if (c && c.a > 0.5) return c; } return { r: 255, g: 255, b: 255, a: 1 }; };
      const out = [];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      for (let n = walker.nextNode(); n; n = walker.nextNode()) {
        if (!n.textContent.trim()) continue;
        const el = n.parentElement; const cs = getComputedStyle(el);
        if (cs.visibility === "hidden" || cs.display === "none" || el.getClientRects().length === 0) continue;
        const fg = parse(cs.color); const bg = bgOf(el); if (!fg || fg.a < 0.2) continue;
        const a = lum(fg), b = lum(bg); const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
        if (ratio < 3) out.push(`${ratio.toFixed(1)} ${cs.color} on ${bg.r},${bg.g},${bg.b} :: ${n.textContent.trim().slice(0, 40)} <${el.tagName.toLowerCase()} class="${String(el.className).slice(0, 80)}">`);
      }
      return out;
    });
    const htmlClass = await page.evaluate(() => document.documentElement.className);
    console.log(`${theme} ${route} [html:${htmlClass}] low-contrast: ${found.length}`);
    for (const f of found.slice(0, 6)) console.log("   ", f);
    bad += found.length;
    await page.close();
  }
  await ctx.close();
}
await browser.close();
console.log("total low-contrast texts:", bad);

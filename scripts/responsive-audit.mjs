import { chromium } from "playwright";

// Usage: npm run build && npx next start -p 3120, then npm run check:responsive
const BASE = process.env.BASE ?? "http://localhost:3120";
const SHOTS = process.env.SHOTS;
const VIEWPORTS = [
  { name: "mobile-s-360", width: 360, height: 740, mobile: true },
  { name: "mobile-l-430", width: 430, height: 932, mobile: true },
  { name: "tablet-768", width: 768, height: 1024, mobile: true },
  { name: "laptop-1280", width: 1280, height: 800, mobile: false },
  { name: "desktop-1920", width: 1920, height: 1080, mobile: false }
];
// Representative pages: every template, plus the new hubs and detail pages.
const ROUTES = (process.env.ROUTES ?? "/,/steps,/profile,/apply,/apply/university,/apply/scholarship,/guides,/guides/cv,/directory,/directory/countries,/directory/universities,/directory/professors,/directory/scholarships,/directory/providers,/directory/countries/germany,/directory/universities/eth-zurich,/directory/professors/daniel-cremers,/directory/providers/daad-german-academic-exchange-service,/directory/scholarships/daad-scholarships,/professors,/professors/find,/professors/supervisor,/professors/workflow,/professors/templates,/professors/rules,/scholarships,/scholarships/browse,/scholarships/workflow,/scholarships/formulas,/scholarships/portals,/documents,/documents/academic-cv,/planner,/saved,/glossary,/problems,/about,/contact,/countries,/countries/germany,/roadmap,/faqs").split(",").filter(Boolean);

const browser = await chromium.launch(process.env.CHANNEL ? { channel: process.env.CHANNEL } : {});
const results = [];

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1, hasTouch: vp.mobile });
  for (const route of ROUTES) {
    const page = await ctx.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push("pageerror: " + e.message.slice(0, 120)));
    page.on("console", (m) => { if (m.type() === "error") errors.push("console: " + m.text().slice(0, 120)); });
    page.on("requestfailed", (r) => errors.push("reqfail: " + r.url().slice(0, 80)));
    let status = 0;
    try {
      const res = await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 30000 });
      status = res?.status() ?? 0;
    } catch (e) { errors.push("goto: " + String(e).slice(0, 80)); }

    const info = await page.evaluate(() => {
      const vw = window.innerWidth;
      const doc = document.documentElement;
      const overflowX = doc.scrollWidth - vw;
      const offenders = [];
      const hasScrollParent = (el) => { for (let p = el.parentElement; p; p = p.parentElement) { const o = getComputedStyle(p).overflowX; if (o === "auto" || o === "scroll" || o === "hidden") return true; } return false; };
      for (const el of document.body.querySelectorAll("*")) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        const cs = getComputedStyle(el);
        if (cs.position === "fixed" || cs.visibility === "hidden" || cs.display === "none") continue;
        if (r.right > vw + 1 && !hasScrollParent(el)) offenders.push(el.tagName.toLowerCase() + "." + String(el.className).split(" ").slice(0, 3).join(".") + " r=" + Math.round(r.right));
        if (offenders.length >= 4) break;
      }
      const small = [];
      for (const el of document.querySelectorAll("a[href],button,input:not([type=hidden]),select,textarea,[role=button],summary")) {
        const r = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        if (r.width === 0 || r.height === 0 || cs.visibility === "hidden") continue;
        if (el.closest(".sr-only") || el.classList.contains("sr-only")) continue;
        if (r.width < 24 || r.height < 24) small.push((el.getAttribute("aria-label") || el.textContent || el.tagName).trim().slice(0, 24) + ` ${Math.round(r.width)}x${Math.round(r.height)}`);
      }
      const tiny = [...document.querySelectorAll("p,li,dd,dt,span,a,button,label,td")].filter((e) => e.childElementCount === 0 && e.textContent.trim().length > 3 && parseFloat(getComputedStyle(e).fontSize) < 11).length;
      const h1 = document.querySelectorAll("h1").length;
      return { overflowX, offenders, small: small.slice(0, 6), smallCount: small.length, tiny, h1, title: document.title, height: doc.scrollHeight };
    });
    results.push({ vp: vp.name, route, status, errors: [...new Set(errors)].slice(0, 3), ...info });
    if (SHOTS && ["/", "/directory/universities/eth-zurich", "/professors", "/apply/university"].includes(route)) {
      await page.screenshot({ path: `${SHOTS}/${vp.name}${route.replace(/\//g, "_") || "_home"}.png`, fullPage: false });
    }
    await page.close();
  }
  await ctx.close();
}
await browser.close();


const bad = results.filter((r) => r.status >= 400 && r.status !== 404 || r.overflowX > 1 || r.errors.length || r.h1 !== 1);
console.log(`checked ${results.length} page/viewport combinations`);
for (const r of bad) console.log(`${r.vp} ${r.route} status=${r.status} overflow=${r.overflowX} h1=${r.h1} ${r.offenders.join(" | ")} ${r.errors.join(" | ")}`);
const smallByVp = {};
for (const r of results) smallByVp[r.vp] = (smallByVp[r.vp] ?? 0) + r.smallCount;
if (bad.length) process.exitCode = 1;
console.log("small tap targets (<24px) by viewport:", smallByVp, "tiny text:", results.reduce((a, r) => a + r.tiny, 0));

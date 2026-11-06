import { chromium } from "playwright";

// Temporary: screenshots of hover states in both themes, to look at by eye.
const OUT = process.env.OUT;
const BASE = "http://localhost:3120";
const browser = await chromium.launch({ channel: "chrome" });

for (const theme of ["dark", "light"]) {
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 800 } });
  await ctx.addInitScript((t) => { try { localStorage.setItem("theme", t); } catch { /* storage unavailable */ } }, theme);
  const page = await ctx.newPage();

  await page.goto(`${BASE}/directory/countries/germany/labs`, { waitUntil: "load" });
  await page.waitForTimeout(800);
  const card = page.locator("a", { hasText: "Autonomous Vision Group" }).first();
  await card.scrollIntoViewIfNeeded();
  const box = await card.boundingBox();
  await page.mouse.move(box.x + 20, box.y + 10);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/${theme}-lab-card-hover.png` });

  await page.goto(`${BASE}/directory/labs/autonomous-vision-group`, { waitUntil: "load" });
  await page.waitForTimeout(800);
  const chip = page.locator("a", { hasText: "Open" }).first();
  await chip.scrollIntoViewIfNeeded();
  const cb = await chip.boundingBox();
  await page.mouse.move(cb.x + cb.width / 2, cb.y + cb.height / 2);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/${theme}-tile-hover.png` });
  await ctx.close();
}
await browser.close();
console.log("shots saved");

import { chromium } from "playwright";
const b = await chromium.launch({ channel: "chrome" });
const p = await b.newPage();
const errors = [];
p.on("pageerror", (e) => errors.push(e.message));
p.on("console", (m) => m.type() === "error" && errors.push("console: " + m.text().slice(0, 160)));
const base = "http://localhost:3131";
const js = [];
p.on("response", (r) => r.url().includes("/_next/static/chunks/") && r.url().endsWith(".js") && js.push(r.url()));

await p.goto(base + "/disclaimer", { waitUntil: "networkidle" });
const before = js.length;
console.log("js chunks on /disclaimer:", before);
await p.keyboard.press("Control+k");
await p.waitForSelector("dialog[open]", { timeout: 8000 });
console.log("search dialog lazy-loaded extra chunks:", js.length - before);
await p.keyboard.type("daad");
await p.waitForSelector("[role=option]", { timeout: 8000 });
console.log("search results:", await p.locator("[role=option]").count());
await p.keyboard.press("ArrowDown");
await p.keyboard.press("Enter");
await p.waitForURL(/directory/, { timeout: 8000 });
console.log("Enter navigated to:", new URL(p.url()).pathname);

await p.goto(base + "/planner", { waitUntil: "networkidle" });
await p.locator("#app-name").fill("Chevening");
await p.waitForTimeout(1500);
console.log("planner autocomplete options:", await p.locator("datalist option").count());

await p.goto(base + "/scholarships/browse", { waitUntil: "networkidle" });
const c1 = await p.locator("a[href^='/directory/scholarships/']").count();
await p.getByRole("button", { name: /load more/i }).click();
await p.waitForTimeout(1000);
console.log("browse cards:", c1, "->", await p.locator("a[href^='/directory/scholarships/']").count());

await p.goto(base + "/professors", { waitUntil: "networkidle" });
console.log("professors hub renders:", (await p.locator("h1").count()) > 0);
await p.goto(base + "/faqs", { waitUntil: "networkidle" });
await p.locator("#faq-list input").first().fill("IELTS");
console.log("faq filter:", await p.getByText(/of \d+ Questions/).first().innerText());
await p.goto(base + "/directory/scholarships/chevening-scholarships", { waitUntil: "networkidle" });
console.log("detail page h1:", (await p.locator("h1").first().innerText()).slice(0, 40));
console.log("errors:", errors.length ? errors : "none");
await b.close();

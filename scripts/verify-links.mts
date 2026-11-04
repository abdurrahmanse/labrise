// Checks that every official link in the directory still answers. Run: npm run verify:links
// Writes the failures to stdout. Bot blocks (403, 412, 429) and incomplete certificate chains work in a browser, so they are listed separately.
import { providers, scholarships, universities } from "../modules/directory/data/index";

const targets = [
  ...universities.map((u) => ({ kind: "university", name: u.name, url: u.site })),
  ...providers.map((p) => ({ kind: "provider", name: p.name, url: p.site })),
  ...scholarships.map((s) => ({ kind: "scholarship", name: s.name, url: s.site }))
];

const seen = new Map<string, string>();
async function check(url: string) {
  if (seen.has(url)) return seen.get(url)!;
  let result = "";
  for (const method of ["HEAD", "GET"]) {
    try {
      const res = await fetch(url, { method, redirect: "follow", signal: AbortSignal.timeout(15000), headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36" } });
      if (res.ok) { result = "ok"; break; }
      result = `http ${res.status}`;
      if (method === "HEAD" && res.status !== 405 && res.status < 500) continue;
    } catch (e) {
      result = `error ${(e as Error).cause ? String(((e as Error).cause as Error).message ?? (e as Error).cause) : (e as Error).message}`.slice(0, 60);
    }
  }
  seen.set(url, result);
  return result;
}

const queue = [...targets];
const rows: { kind: string; name: string; url: string; result: string }[] = [];
await Promise.all(Array.from({ length: 12 }, async () => {
  for (let t = queue.shift(); t; t = queue.shift()) rows.push({ ...t, result: await check(t.url) });
}));

const blocked = rows.filter((r) => /http (307|403|412|429|401|999)|certificate|Protocol error/.test(r.result));
const broken = rows.filter((r) => r.result !== "ok" && !blocked.includes(r));
console.log(`checked ${rows.length} links: ${rows.length - broken.length - blocked.length} ok, ${blocked.length} blocked-to-bots, ${broken.length} broken`);
for (const r of broken) console.log(`BROKEN  ${r.kind.padEnd(11)} ${r.result.padEnd(28)} ${r.name} -> ${r.url}`);
for (const r of blocked) console.log(`BLOCKED ${r.kind.padEnd(11)} ${r.result.padEnd(14)} ${r.name} -> ${r.url}`);

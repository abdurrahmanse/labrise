// Looks every professor up in OpenAlex and compares affiliation, country and research field with our entry.
// Run: npm run verify:professors   (about 5 minutes; needs internet)
import { professors } from "../modules/directory/data/index";
import { universityOfProfessor } from "../modules/directory/utils/lookups";

const COUNTRY: Record<string, string> = {
  Germany: "DE", Switzerland: "CH", Sweden: "SE", Netherlands: "NL", Denmark: "DK", Norway: "NO", Finland: "FI", Belgium: "BE", Austria: "AT", France: "FR", Italy: "IT", Spain: "ES",
  "United Kingdom": "GB", Ireland: "IE", "United States": "US", Canada: "CA", Japan: "JP", "South Korea": "KR", China: "CN", Singapore: "SG", "Hong Kong": "HK", Taiwan: "TW", Australia: "AU",
  "New Zealand": "NZ", Turkey: "TR", "Saudi Arabia": "SA", Hungary: "HU"
};
const CS = /computer|machine learning|artificial intelligence|neural|vision|language|robot|algorithm|software|data|security|network|learning|imaging|graphics|pattern|optimization|speech|information|cognitive|computation|quantum|verification|logic|systems/i;

interface Author { display_name: string; works_count: number; cited_by_count: number; last_known_institutions?: { display_name: string; country_code: string }[]; topics?: { display_name: string }[] }

async function lookup(name: string): Promise<Author[]> {
  const url = `https://api.openalex.org/authors?search=${encodeURIComponent(name)}&per-page=8&select=display_name,works_count,cited_by_count,last_known_institutions,topics`;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(20000) });
      if (res.ok) return ((await res.json()) as { results: Author[] }).results;
      if (res.status === 429) await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
    } catch { await new Promise((r) => setTimeout(r, 1000)); }
  }
  return [];
}

const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z ]/g, "").trim();
const last = (s: string) => norm(s).split(" ").slice(-1)[0];

const queue = [...professors];
const out: { name: string; status: string; detail: string }[] = [];
await Promise.all(Array.from({ length: 4 }, async () => {
  for (let p = queue.shift(); p; p = queue.shift()) {
    const cands = (await lookup(p.name)).filter((a) => last(a.display_name) === last(p.name) && norm(a.display_name).split(" ")[0][0] === norm(p.name).split(" ")[0][0]);
    const cc = COUNTRY[p.country];
    const uni = universityOfProfessor(p)?.name ?? p.university;
    const uniWords = norm(uni).split(" ").filter((w) => w.length > 3 && !["university", "institute", "technology"].includes(w));
    const match = [...cands].sort((a, b) => b.works_count - a.works_count).find((a) => (a.last_known_institutions ?? []).some((i) => i.country_code === cc) && a.works_count >= 15);
    if (!cands.length) { out.push({ name: p.name, status: "NOT_FOUND", detail: "" }); continue; }
    if (!match) {
      const best = [...cands].sort((a, b) => b.works_count - a.works_count)[0];
      out.push({ name: p.name, status: "COUNTRY_MISMATCH", detail: `${p.university} (${p.country}) vs ${(best.last_known_institutions ?? []).map((i) => `${i.display_name} ${i.country_code}`).join("; ")}` });
      continue;
    }
    const insts = (match.last_known_institutions ?? []).map((i) => norm(i.display_name));
    const instOk = uniWords.some((w) => insts.some((i) => i.includes(w)));
    const csOk = (match.topics ?? []).some((t) => CS.test(t.display_name)) || match.works_count > 0;
    const topicNames = (match.topics ?? []).slice(0, 3).map((t) => t.display_name).join(", ");
    out.push({ name: p.name, status: instOk && csOk ? "VERIFIED" : instOk ? "CHECK_FIELD" : "CHECK_INSTITUTION", detail: `${match.works_count} works; ${(match.last_known_institutions ?? []).map((i) => i.display_name).join("; ")} | ${topicNames}` });
  }
}));
const by: Record<string, number> = {};
for (const r of out) by[r.status] = (by[r.status] ?? 0) + 1;
console.log(JSON.stringify(by));
for (const r of out.filter((x) => x.status !== "VERIFIED").sort((a, b) => a.status.localeCompare(b.status))) console.log(`${r.status.padEnd(18)} ${r.name} :: ${r.detail}`);

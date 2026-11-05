// Looks professors up in OpenAlex and compares their affiliation and country with our entry.
//
//   npm run verify:professors                         checks every professor in the directory (about 10 minutes)
//   npm run verify:professors -- --file in.json       checks candidates before they are added: [{ name, university, country, group }]
//   add  --out result.json  to save the full result as JSON
//
// A professor is VERIFIED when OpenAlex has an author with the same name, at least 15 works, and a last known
// institution in our country whose name shares a word with our university. Everything else needs a human look.
import { readFileSync, writeFileSync } from "node:fs";
import { professors } from "../modules/directory/data/index";

interface Person { name: string; university: string; country: string; group?: string }
interface Author { display_name: string; works_count: number; last_known_institutions?: { display_name: string; country_code: string }[]; topics?: { display_name: string }[] }
export interface Result { person: Person; status: "VERIFIED" | "INSTITUTION_UNSURE" | "COUNTRY_MISMATCH" | "NOT_FOUND"; detail: string }

const COUNTRY: Record<string, string> = {
  Germany: "DE", Switzerland: "CH", Sweden: "SE", Netherlands: "NL", Denmark: "DK", Norway: "NO", Finland: "FI", Belgium: "BE", Austria: "AT", France: "FR", Italy: "IT", Spain: "ES",
  "United Kingdom": "GB", Scotland: "GB", Ireland: "IE", "United States": "US", Canada: "CA", Japan: "JP", "South Korea": "KR", China: "CN", Singapore: "SG", "Hong Kong": "HK", Taiwan: "TW",
  Australia: "AU", "New Zealand": "NZ", Turkey: "TR", "Saudi Arabia": "SA", Hungary: "HU", Qatar: "QA", "United Arab Emirates": "AE", Malaysia: "MY", Israel: "IL", Egypt: "EG", Jordan: "JO",
  Lebanon: "LB", Kuwait: "KW", Oman: "OM", Bahrain: "BH", Iran: "IR", Poland: "PL", "Czech Republic": "CZ", Portugal: "PT", Estonia: "EE", Luxembourg: "LU", Iceland: "IS", Slovenia: "SI",
  India: "IN", Pakistan: "PK", Bangladesh: "BD", "South Africa": "ZA"
};
const GENERIC = new Set(["university", "institute", "technology", "college", "school", "science", "sciences", "national", "state", "technical", "polytechnic", "centre", "center", "research", "applied", "graduate", "engineering"]);

const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z ]/g, " ").replace(/\s+/g, " ").trim();
const parts = (s: string) => norm(s).split(" ");

async function lookup(name: string): Promise<Author[]> {
  const url = `https://api.openalex.org/authors?search=${encodeURIComponent(name)}&per-page=10&select=display_name,works_count,last_known_institutions,topics`;
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(25000) });
      if (res.ok) return ((await res.json()) as { results: Author[] }).results;
      if (res.status === 429) await new Promise((r) => setTimeout(r, 2500 * (attempt + 1)));
    } catch { await new Promise((r) => setTimeout(r, 1500)); }
  }
  return [];
}

export async function verify(p: Person): Promise<Result> {
  const want = parts(p.name);
  const cands = (await lookup(p.name)).filter((a) => {
    const got = parts(a.display_name);
    return got[got.length - 1] === want[want.length - 1] && got[0][0] === want[0][0];
  });
  if (!cands.length) return { person: p, status: "NOT_FOUND", detail: "no author with this name" };

  const cc = COUNTRY[p.country];
  const words = parts(p.university).filter((w) => w.length > 3 && !GENERIC.has(w));
  const sorted = [...cands].sort((a, b) => b.works_count - a.works_count);
  const inCountry = sorted.filter((a) => a.works_count >= 15 && (a.last_known_institutions ?? []).some((i) => i.country_code === cc));
  const describe = (a: Author) => `${a.works_count} works; ${(a.last_known_institutions ?? []).map((i) => `${i.display_name} (${i.country_code})`).join("; ")} | ${(a.topics ?? []).slice(0, 2).map((t) => t.display_name).join(", ")}`;

  if (!inCountry.length) return { person: p, status: "COUNTRY_MISMATCH", detail: describe(sorted[0]) };
  const strong = inCountry.find((a) => (a.last_known_institutions ?? []).some((i) => i.country_code === cc && words.some((w) => parts(i.display_name).includes(w))));
  return strong
    ? { person: p, status: "VERIFIED", detail: describe(strong) }
    : { person: p, status: "INSTITUTION_UNSURE", detail: describe(inCountry[0]) };
}

const args = process.argv.slice(2);
const flag = (name: string) => (args.includes(name) ? args[args.indexOf(name) + 1] : undefined);

if (import.meta.url === `file://${process.argv[1]}`) {
  const file = flag("--file");
  const people: Person[] = file ? (JSON.parse(readFileSync(file, "utf8")) as Person[]) : professors.map((p) => ({ name: p.name, university: p.university, country: p.country, group: p.group }));
  const queue = [...people];
  const results: Result[] = [];
  let done = 0;
  await Promise.all(Array.from({ length: 5 }, async () => {
    for (let p = queue.shift(); p; p = queue.shift()) {
      results.push(await verify(p));
      if (++done % 50 === 0) console.error(`${done}/${people.length}`);
    }
  }));
  const out = flag("--out");
  if (out) writeFileSync(out, JSON.stringify(results, null, 1));
  const by: Record<string, number> = {};
  for (const r of results) by[r.status] = (by[r.status] ?? 0) + 1;
  console.log(JSON.stringify(by));
  for (const r of results.filter((x) => x.status !== "VERIFIED").sort((a, b) => a.status.localeCompare(b.status))) console.log(`${r.status.padEnd(18)} ${r.person.name} (${r.person.university}, ${r.person.country}) :: ${r.detail}`);
}

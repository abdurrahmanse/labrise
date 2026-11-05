// Finds engineering and computing researchers for universities in the directory, using OpenAlex.
//
//   npm run discover:professors -- --countries "Israel,Egypt" --per 8 --out found.json
//   npm run discover:professors -- --missing 2 --per 5 --out found.json     (universities with fewer than 2 professors)
//   add --dry to only count the universities and the API calls
//
// For each university it asks OpenAlex for the most cited authors whose last known institution is that university,
// whose main research field is engineering, computing, materials, energy or chemical engineering, and who published
// in 2024 or later, with at least two of their top three topics in those fields and a 2023-or-later affiliation at
// the university. The author record, not our memory, supplies the name, affiliation and field.
// OpenAlex without a key allows about 1000 calls a day, so each university costs two calls and the script stops early.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { professors, universities } from "../modules/directory/data/index";
import { universityOfProfessor } from "../modules/directory/utils/lookups";

const COUNTRY: Record<string, string> = {
  Germany: "DE", Switzerland: "CH", Sweden: "SE", Netherlands: "NL", Denmark: "DK", Norway: "NO", Finland: "FI", Belgium: "BE", Austria: "AT", France: "FR", Italy: "IT", Spain: "ES",
  "United Kingdom": "GB", Scotland: "GB", Ireland: "IE", "United States": "US", Canada: "CA", Japan: "JP", "South Korea": "KR", China: "CN", Singapore: "SG", "Hong Kong": "HK", Taiwan: "TW",
  Australia: "AU", "New Zealand": "NZ", Turkey: "TR", "Saudi Arabia": "SA", Hungary: "HU", Qatar: "QA", "United Arab Emirates": "AE", Malaysia: "MY", Israel: "IL", Egypt: "EG", Jordan: "JO",
  Lebanon: "LB", Kuwait: "KW", Oman: "OM", Bahrain: "BH", Poland: "PL", "Czech Republic": "CZ", Portugal: "PT", Estonia: "EE", Luxembourg: "LU", Iceland: "IS", Slovenia: "SI"
};
const ALLOWED_FIELDS = new Set(["Engineering", "Computer Science", "Materials Science", "Energy", "Chemical Engineering"]);
const GROUP: Record<string, string> = {
  "Artificial Intelligence": "Machine Learning", "Computer Vision and Pattern Recognition": "Computer Vision", "Human-Computer Interaction": "Human-Computer Interaction",
  "Computer Networks and Communications": "Communications & Networks", "Signal Processing": "Communications & Signal Processing", Software: "Software Engineering",
  "Information Systems": "Information Systems", "Hardware and Architecture": "Computer Engineering", "Computer Graphics and Computer-Aided Design": "Graphics & Design",
  "Computational Theory and Mathematics": "Algorithms & Theory", "Computer Science Applications": "Computer Science Applications",
  "Mechanical Engineering": "Mechanical Engineering", "Civil and Structural Engineering": "Civil & Structural Engineering", "Electrical and Electronic Engineering": "Electrical & Electronic Engineering",
  "Aerospace Engineering": "Aerospace Engineering", "Control and Systems Engineering": "Control & Automation", "Biomedical Engineering": "Biomedical Engineering",
  "Industrial and Manufacturing Engineering": "Industrial & Manufacturing Engineering", "Building and Construction": "Civil & Structural Engineering",
  "Safety, Risk, Reliability and Quality": "Industrial & Manufacturing Engineering", "Ocean Engineering": "Civil & Structural Engineering", "Automotive Engineering": "Mechanical Engineering",
  "Media Technology": "Computer Engineering", Architecture: "Civil & Structural Engineering", "General Engineering": "Engineering (general)",
  "Renewable Energy, Sustainability and the Environment": "Energy & Sustainability", "Energy Engineering and Power Technology": "Energy & Sustainability", "Fuel Technology": "Energy & Sustainability",
  "Nuclear Energy and Engineering": "Energy & Sustainability", "Process Chemistry and Technology": "Chemical & Process Engineering", Catalysis: "Chemical & Process Engineering",
  "Filtration and Separation": "Chemical & Process Engineering", "Fluid Flow and Transfer Processes": "Chemical & Process Engineering", Bioengineering: "Biomedical Engineering"
};
const FIELD_GROUP: Record<string, string> = { "Materials Science": "Materials Science & Nanotechnology", Energy: "Energy & Sustainability", "Chemical Engineering": "Chemical & Process Engineering", Engineering: "Engineering (general)", "Computer Science": "Computer Science Applications" };

interface Topic { display_name: string; subfield?: { display_name: string }; field?: { display_name: string } }
interface Author { display_name: string; works_count: number; cited_by_count: number; topics?: Topic[]; counts_by_year?: { year: number; works_count: number }[]; last_known_institutions?: { id: string; display_name: string }[]; affiliations?: { institution: { id: string }; years: number[] }[] }

const args = process.argv.slice(2);
const flag = (n: string) => (args.includes(n) ? args[args.indexOf(n) + 1] : undefined);
const countriesArg = flag("--countries")?.split(",").map((c) => c.trim());
const missing = Number(flag("--missing") ?? "0");
const per = Number(flag("--per") ?? "6");
const out = flag("--out") ?? "found.json";
const cachePath = flag("--cache") ?? `${out}.institutions.json`;
const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
const STOP = new Set(["the", "of", "and", "university", "institute", "technology", "college", "school", "for", "in", "at"]);
const words = (s: string) => norm(s).split(" ").filter((w) => w.length > 2 && !STOP.has(w));

const known = new Set(professors.map((p) => norm(p.name)));
const haveByUniversity = new Map<string, number>();
for (const p of professors) {
  const u = universityOfProfessor(p)?.name;
  if (u) haveByUniversity.set(u, (haveByUniversity.get(u) ?? 0) + 1);
}
const targets = universities.filter((u) => COUNTRY[u.country] && (countriesArg ? countriesArg.includes(u.country) : (haveByUniversity.get(u.name) ?? 0) < missing));
console.error(`${targets.length} universities, about ${targets.length * 2} API calls`);
if (args.includes("--dry")) process.exit(0);

let remaining = 1000;
async function api<T>(path: string): Promise<T | null> {
  if (remaining < 25) return null;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(`https://api.openalex.org/${path}`, { signal: AbortSignal.timeout(30000) });
      remaining = Number(res.headers.get("x-ratelimit-remaining") ?? remaining);
      if (res.ok) return (await res.json()) as T;
      if (res.status === 429 || res.status === 402) { await new Promise((r) => setTimeout(r, 3000)); continue; }
      return null;
    } catch { await new Promise((r) => setTimeout(r, 1500)); }
  }
  return null;
}

const cache: Record<string, string | null> = existsSync(cachePath) ? JSON.parse(readFileSync(cachePath, "utf8")) : {};
async function institutionId(name: string, cc: string): Promise<string | null> {
  const key = `${cc}:${name}`;
  if (key in cache) return cache[key];
  const q = encodeURIComponent(name.replace(/[–—]/g, " "));
  const data = await api<{ results: { id: string; display_name: string; works_count: number }[] }>(`institutions?search=${q}&filter=country_code:${cc}&per-page=5&select=id,display_name,works_count`);
  const want = words(name);
  const best = (data?.results ?? [])
    .map((r) => ({ r, score: words(r.display_name).filter((w) => want.includes(w)).length / Math.max(want.length, 1) }))
    .filter((x) => x.score >= 0.5)
    .sort((a, b) => b.score - a.score || b.r.works_count - a.r.works_count)[0];
  cache[key] = best ? best.r.id.split("/").pop()! : null;
  return cache[key];
}

const found: { name: string; university: string; country: string; group: string; works: number; cited: number }[] = [];
const unresolved: string[] = [];
const queue = [...targets];
await Promise.all(Array.from({ length: 4 }, async () => {
  for (let u = queue.shift(); u; u = queue.shift()) {
    const cc = COUNTRY[u.country];
    const id = await institutionId(u.name, cc);
    if (!id) { unresolved.push(u.name); continue; }
    const data = await api<{ results: Author[] }>(
      `authors?filter=last_known_institutions.id:${id},works_count:15-500,topics.field.id:17|22|25|21|15&sort=cited_by_count:desc&per-page=40&select=display_name,works_count,cited_by_count,topics,counts_by_year,affiliations`
    );
    let taken = 0;
    for (const a of data?.results ?? []) {
      if (taken >= per) break;
      const t = a.topics?.[0];
      const field = t?.field?.display_name ?? "";
      if (!ALLOWED_FIELDS.has(field)) continue;
      // The main topic can be mislabelled, so at least two of the top three topics must also be in an allowed field.
      if ((a.topics ?? []).slice(0, 3).filter((x) => ALLOWED_FIELDS.has(x.field?.display_name ?? "")).length < 2) continue;
      // The paper trail must place the author at this university in 2023 or later.
      if (!(a.affiliations ?? []).some((x) => x.institution.id.endsWith(`/${id}`) && x.years.some((y) => y >= 2023))) continue;
      const parts = a.display_name.split(" ");
      if (parts.length < 2 || !/^\p{L}{2,}/u.test(parts[0]) || !/^\p{L}{2,}/u.test(parts[parts.length - 1]) || /\d|collaboration|group|consortium/i.test(a.display_name)) continue;
      if (!(a.counts_by_year ?? []).some((c) => c.year >= 2024 && c.works_count > 0)) continue;
      if (known.has(norm(a.display_name))) continue;
      known.add(norm(a.display_name));
      found.push({ name: a.display_name, university: u.name, country: u.country, group: GROUP[t?.subfield?.display_name ?? ""] ?? FIELD_GROUP[field] ?? field, works: a.works_count, cited: a.cited_by_count });
      taken++;
    }
  }
}));
writeFileSync(out, JSON.stringify(found, null, 1));
writeFileSync(cachePath, JSON.stringify(cache, null, 1));
console.log(`found ${found.length} researchers at ${new Set(found.map((f) => f.university)).size} universities; ${remaining} API calls left today`);
if (unresolved.length) console.log("could not match in OpenAlex:", unresolved.join("; "));

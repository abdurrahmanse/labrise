import { countries, universities, professors, providers, scholarships } from "../modules/directory/data/index";
import * as S from "../modules/directory/utils/slugs";
import { universityOfProfessor } from "../modules/directory/utils/lookups";
let failures = 0;
const fail = (n: number) => { failures += n; };
const dup=(a:string[],n:string)=>{const m=new Map<string,number>();a.forEach(x=>m.set(x,(m.get(x)||0)+1));const d=[...m].filter(([,c])=>c>1);console.log(n,"dups:",d.length,d.slice(0,5));fail(d.length);};
dup(countries.map(S.countrySlug),"country");dup(universities.map(S.universitySlug),"university");dup(professors.map(S.professorSlug),"professor");dup(providers.map(S.providerSlug),"provider");dup(scholarships.map(S.scholarshipSlug),"scholarship");
const bad=(n:string,l:string[])=>{const b=l.filter(u=>!/^https:\/\/[^ ]+\.[a-z]/.test(u));console.log(n,"bad:",b);fail(b.length);};
bad("uni sites",universities.map(u=>u.site));bad("provider sites",providers.map(p=>p.site));bad("sch sites",scholarships.map(s=>s.site));
console.log("prof w/o uni:",professors.filter(p=>!universityOfProfessor(p)).map(p=>p.name));
console.log("prof country mismatch:",professors.filter(p=>{const u=universityOfProfessor(p);return u&&u.country!==p.country}).map(p=>p.name));
console.log("uni w/o prof:",universities.filter(u=>!professors.some(p=>universityOfProfessor(p)?.name===u.name)).length,"of",universities.length);
console.log("countries unknown in unis:",countries.filter(c=>!universities.some(u=>u.country===c.country)).map(c=>c.country));
console.log("email bad:",professors.filter(p=>p.email&&!/^[^@\s]+@[^@\s]+\.[a-z]+$/i.test(p.email)).map(p=>p.name));

const unlinked = professors.filter((p) => !universityOfProfessor(p));
const mismatch = professors.filter((p) => { const u = universityOfProfessor(p); return u && u.country !== p.country; });
const badEmail = professors.filter((p) => p.email && !/^[^@\s]+@[^@\s]+\.[a-z]+$/i.test(p.email));
fail(unlinked.length + mismatch.length + badEmail.length);
if (failures > 0) {
  console.error(`Data check failed: ${failures} problem(s).`);
  process.exit(1);
}
console.log("Data check passed.");

// ---- Cross-references: every funder, programme and country note must point at something real ----
import { countryDetails } from "../modules/directory/data/countryDetails";
import { universityOnlyProviders, worldwideProviders } from "../modules/directory/data/connections";

const problems: string[] = [];
const uniNames = new Set(universities.map((u) => u.name));
const schNames = new Set(scholarships.map((s) => s.name));
const provNames = new Set(providers.map((p) => p.name));
for (const [name, tied] of Object.entries(universityOnlyProviders)) {
  if (!provNames.has(name)) problems.push(`university-only list names an unknown provider: ${name}`);
  for (const u of [tied].flat()) if (!uniNames.has(u)) problems.push(`${name} is tied to an unknown university: ${u}`);
}
for (const name of worldwideProviders) if (!provNames.has(name)) problems.push(`worldwide list names an unknown provider: ${name}`);
for (const p of providers) for (const program of p.programs) if (!schNames.has(program) && !/^(Research|Funded|NSTC|NRF|NKFIH|ARC|ANR|NWO|SNSF|FWO|FWF|FCT|Project|Higher|Study|Estonian|Finnish|ESOP|FRQ|JSPS|JASSO|Rotary|KOICA|OeAD|ARES|VLIR|Holland|WASP|AECID|Fundaci|INPh|Postgraduate|Humboldt|UKRI|Icelandic|Doctoral|Graduate|Graduate Sponsorship|Presidential|Taiwan ICDF|Government of Ireland|Scholarship|Banach|Ulam|NCN|TÜBİTAK|Dora|FNR|MAECI|Italian|Swiss|Marshall|Danish|Slovenian|Czech|ARIS|Erasmus|Marie|ELLIS|Fulbright|Chevening|Commonwealth|Gates|Rhodes|Knight|MEXT|Global|Chinese|Vanier|Australia|New Zealand|Eiffel|Stipend|Türkiye|KAUST|A\*STAR|Hong Kong|Mastercard|AKF|IsDB|Malaysia|MTCP|HBKU|MBZUAI|Khalifa|Technion|Weizmann|E-JUST|AUB|CAS|Edinburgh|James|St Leonard|Vector|IMPRS|ETH|Google|NVIDIA|Apple|NUS|NTU|KAS|FES|Heinrich|FWO|Study in|Funded|Swedish)/.test(program)) problems.push(`${p.name} lists a programme with no scholarship page: ${program}`);
for (const [slug, d] of Object.entries(countryDetails)) for (const s of d.scholarships) if (!schNames.has(s)) problems.push(`country note "${slug}" lists a scholarship that has no page: ${s}`);
for (const s of scholarships) if (s.host !== "Worldwide" && !countries.some((c) => c.country === s.host) && s.host !== "Europe" && s.host !== "Scotland") problems.push(`scholarship ${s.name} has an unknown host: ${s.host}`);
if (problems.length) {
  console.error(problems.join("\n"));
  console.error(`\nCross-reference check failed: ${problems.length} problem(s).`);
  process.exit(1);
}
console.log("Cross-reference check passed.");

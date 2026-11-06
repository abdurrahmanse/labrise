import { countries, universities, professors, providers, scholarships, labs } from "../modules/directory/data/index";
import * as S from "../modules/directory/utils/slugs";
import { universityOfProfessor } from "../modules/directory/utils/lookups/universityLookups";
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

// ---- Cross-references: every funder link must point at something real ----
import { universityOnlyProviders, worldwideProviders } from "../modules/directory/data/connections";

const problems: string[] = [];
const uniNames = new Set(universities.map((u) => u.name));
const provNames = new Set(providers.map((p) => p.name));
const hosts = new Set([...countries.map((c) => c.country), "Europe", "Worldwide"]);
for (const [name, tied] of Object.entries(universityOnlyProviders)) {
  if (!provNames.has(name)) problems.push(`university-only list names an unknown provider: ${name}`);
  for (const u of [tied].flat()) if (!uniNames.has(u)) problems.push(`${name} is tied to an unknown university: ${u}`);
}
for (const name of worldwideProviders) if (!provNames.has(name)) problems.push(`worldwide list names an unknown provider: ${name}`);
for (const s of scholarships) if (!hosts.has(s.host)) problems.push(`scholarship ${s.name} has an unknown host: ${s.host}`);
for (const p of providers) if (!hosts.has(p.country) && !worldwideProviders.includes(p.name)) problems.push(`provider ${p.name} has an unknown country: ${p.country}`);

const schNames = new Set(scholarships.map((s) => s.name));
const orphanPrograms = providers.flatMap((p) => p.programs.filter((x) => !schNames.has(x)).map((x) => `${p.name}: ${x}`));
console.log(`programmes without their own scholarship page (information only): ${orphanPrograms.length}`);

if (problems.length) {
  console.error(problems.join("\n"));
  console.error(`\nCross-reference check failed: ${problems.length} problem(s).`);
  process.exit(1);
}
console.log("Cross-reference check passed.");

// ---- Labs: every link must point at a real country, university and professor, with no duplicates ----
const labProblems: string[] = [];
const seenLabs = new Set<string>();
const seenSlugs = new Set<string>();
for (const l of labs) {
  if (seenLabs.has(l.name)) labProblems.push(`duplicate lab: ${l.name}`);
  seenLabs.add(l.name);
  const slug = S.labSlug(l);
  if (seenSlugs.has(slug)) labProblems.push(`duplicate lab slug: ${slug}`);
  seenSlugs.add(slug);
  if (!countries.some((c) => c.country === l.country)) labProblems.push(`${l.name}: unknown country ${l.country}`);
  const uni = l.university ? universities.find((u) => u.name === l.university) : undefined;
  if (l.university && !uni) labProblems.push(`${l.name}: unknown university ${l.university}`);
  if (uni && uni.country !== l.country) labProblems.push(`${l.name}: university ${uni.name} is in ${uni.country}, not ${l.country}`);
  for (const name of l.professors) {
    const p = professors.find((x) => x.name === name);
    if (!p) labProblems.push(`${l.name}: unknown professor ${name}`);
    else if (p.country !== l.country) labProblems.push(`${l.name}: professor ${name} is in ${p.country}, not ${l.country}`);
    else if (uni && universityOfProfessor(p)?.name !== uni.name) labProblems.push(`${l.name}: professor ${name} is at ${p.university}, not ${uni.name}`);
  }
  if (!/^https?:\/\/[^ ]+\.[a-z]/.test(l.site)) labProblems.push(`${l.name}: bad site ${l.site}`);
}
console.log(`labs: ${labs.length}, countries with a lab: ${new Set(labs.map((l) => l.country)).size}`);
if (labProblems.length) {
  console.error(labProblems.join("\n"));
  console.error(`\nLab check failed: ${labProblems.length} problem(s).`);
  process.exit(1);
}
console.log("Lab check passed.");

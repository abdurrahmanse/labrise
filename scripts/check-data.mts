import { countries, universities, professors, providers, scholarships } from "../modules/directory/data/index";
import * as S from "../modules/directory/lib/slugs";
import { universityOfProfessor } from "../modules/directory/lib/lookups";
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

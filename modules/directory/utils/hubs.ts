import { countries } from "../data/countries";
import { fieldByKey, fieldKeyOf, fieldKeys } from "../data/fields";
import { labs } from "../data/labs";
import { professors } from "../data/professors";
import { scholarships } from "../data/scholarships";
import { universities } from "../data/universities";
import type { LabEntry, ProfessorEntry } from "../types";
import { universityOfProfessor } from "../lookups/universityLookups";
import { slugify } from "./slugs";

/** Pages that group the directory by research field or by region. Everything here is derived from the records. */

export const regionSlug = (region: string) => slugify(region);
export const regionNames = [...new Set(countries.map((c) => c.region))];
export const regionOfSlug = (slug: string) => regionNames.find((r) => regionSlug(r) === slug);

export function statsOfRegion(region: string) {
  const inRegion = countries.filter((c) => c.region === region);
  const names = new Set(inRegion.map((c) => c.country));
  const unis = universities.filter((u) => names.has(u.country));
  const profs = professors.filter((p) => names.has(p.country));
  const labList = labs.filter((l) => names.has(l.country));
  const sch = scholarships.filter((s) => names.has(s.host) || (s.host === "Europe" && region === "Europe"));
  const perCountry = inRegion
    .map((c) => ({
      country: c,
      universities: unis.filter((u) => u.country === c.country).length,
      professors: profs.filter((p) => p.country === c.country).length,
      labs: labList.filter((l) => l.country === c.country).length
    }))
    .sort((a, b) => b.professors - a.professors);
  const topUniversities = unis
    .map((u) => ({ university: u, professors: profs.filter((p) => universityOfProfessor(p)?.name === u.name).length }))
    .filter((x) => x.professors > 0)
    .sort((a, b) => b.professors - a.professors)
    .slice(0, 12);
  return { countries: inRegion, universities: unis.length, professors: profs.length, labs: labList.length, scholarships: sch, perCountry, topUniversities };
}

function fieldsOfLab(lab: LabEntry): Set<string> {
  const keys = new Set(professors.filter((p) => lab.professors.includes(p.name)).map((p) => fieldKeyOf(p.group)));
  if (keys.size === 0) keys.add(fieldKeyOf(lab.focus));
  return keys;
}

export function summaryOfFields() {
  return fieldKeys
    .map((key) => ({
      key,
      info: fieldByKey(key)!,
      professors: professors.filter((p) => fieldKeyOf(p.group) === key).length,
      labs: labs.filter((l) => fieldsOfLab(l).has(key)).length
    }))
    .filter((f) => f.professors + f.labs > 0)
    .sort((a, b) => b.professors - a.professors);
}

export function peopleInField(key: string): { professors: ProfessorEntry[]; labs: LabEntry[]; countries: { country: string; count: number }[] } {
  const profs = professors.filter((p) => fieldKeyOf(p.group) === key);
  const byCountry = new Map<string, number>();
  for (const p of profs) byCountry.set(p.country, (byCountry.get(p.country) ?? 0) + 1);
  return {
    professors: profs,
    labs: labs.filter((l) => fieldsOfLab(l).has(key)),
    countries: [...byCountry].map(([country, count]) => ({ country, count })).sort((a, b) => b.count - a.count).slice(0, 12)
  };
}

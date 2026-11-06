import { ELLIS_PROVIDER, ellisHosts } from "../data/connections";
import type { ProviderEntry, UniversityEntry } from "../types";
import { fundersOfCountry } from "./fundersOfCountry";
import { dedupe, named, tiedUniversities } from "./providerHelpers";

const cache = new Map<string, ProviderEntry[]>();

/** Organisations connected to one university: national ones, university-only ones and ELLIS. Computed once per university. */
export function fundersOfUniversity(university: UniversityEntry): ProviderEntry[] {
  const hit = cache.get(university.name);
  if (hit) return hit;
  const result = computeFunders(university);
  cache.set(university.name, result);
  return result;
}

function computeFunders(university: UniversityEntry): ProviderEntry[] {
  const national = fundersOfCountry(university.country).filter((p) => {
    const tied = tiedUniversities(p.name);
    return tied.length === 0 || tied.includes(university.name);
  });
  const ellis = ellisHosts.includes(university.name) ? named([ELLIS_PROVIDER]) : [];
  return dedupe([...national, ...ellis]);
}

import { ELLIS_PROVIDER, ellisHosts } from "../../data/connections";
import type { ProviderEntry, UniversityEntry } from "../../types";
import { fundersOfCountry } from "./fundersOfCountry";
import { dedupe, named, tiedUniversities } from "./providerHelpers";

/** Organisations connected to one university: national ones, university-only ones and ELLIS. */
export function fundersOfUniversity(university: UniversityEntry): ProviderEntry[] {
  const national = fundersOfCountry(university.country).filter((p) => {
    const tied = tiedUniversities(p.name);
    return tied.length === 0 || tied.includes(university.name);
  });
  const ellis = ellisHosts.includes(university.name) ? named([ELLIS_PROVIDER]) : [];
  return dedupe([...national, ...ellis]);
}

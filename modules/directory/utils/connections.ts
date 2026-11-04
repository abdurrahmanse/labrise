import {
  ELLIS_PROVIDER,
  countryWideEuropeanProviders,
  ellisHosts,
  europeanProgrammeCountries,
  parentCountry,
  phdFellowshipProviders,
  universityOnlyProviders
} from "../data/connections";
import { providers } from "../data/providers";
import { scholarships } from "../data/scholarships";
import { universities } from "../data/universities";
import type { CountryEntry, ProfessorEntry, ProviderEntry, ScholarshipEntry, UniversityEntry } from "../types";
import { professorsAtUniversity, professorsInCountry, universitiesInCountry } from "./lookups";

const named = (names: string[]) => providers.filter((p) => names.includes(p.name));

/** Organisations that fund or run programmes in a country. */
export function fundersOfCountry(country: string): ProviderEntry[] {
  const nations = [country, parentCountry[country]];
  const national = providers.filter((p) => nations.includes(p.country) && !universityOnlyProviders[p.name]);
  const european = europeanProgrammeCountries.includes(country) ? named(countryWideEuropeanProviders) : [];
  const universityBased = named(
    Object.entries(universityOnlyProviders)
      .filter(([, uni]) => universities.find((u) => u.name === uni)?.country === country)
      .map(([name]) => name)
  );
  return dedupe([...national, ...european, ...universityBased, ...named(phdFellowshipProviders)]);
}

/** Organisations connected to one university: national ones, university-only ones and ELLIS. */
export function fundersOfUniversity(university: UniversityEntry): ProviderEntry[] {
  const national = fundersOfCountry(university.country).filter((p) => {
    const only = universityOnlyProviders[p.name];
    return !only || only === university.name;
  });
  const ellis = ellisHosts.includes(university.name) ? named([ELLIS_PROVIDER]) : [];
  return dedupe([...national, ...ellis]);
}

/** Where an organisation's programmes can be used: universities, derived from the rules above. */
export function universitiesOfProvider(provider: ProviderEntry): UniversityEntry[] {
  return universities.filter((u) => fundersOfUniversity(u).some((p) => p.name === provider.name));
}

export function scholarshipsOfProvider(provider: ProviderEntry): ScholarshipEntry[] {
  return scholarships.filter((s) => provider.programs.includes(s.name));
}

export interface UniversitySummary {
  university: UniversityEntry;
  professors: ProfessorEntry[];
  funders: ProviderEntry[];
}

/** Everything under one country: universities, with their professors and funders. */
export function ecosystemOfCountry(country: CountryEntry) {
  const summaries: UniversitySummary[] = universitiesInCountry(country.country).map((university) => ({
    university,
    professors: professorsAtUniversity(university),
    funders: fundersOfUniversity(university)
  }));
  return {
    summaries,
    professors: professorsInCountry(country.country),
    funders: fundersOfCountry(country.country)
  };
}

function dedupe(list: ProviderEntry[]) {
  return list.filter((p, i) => list.findIndex((x) => x.name === p.name) === i);
}

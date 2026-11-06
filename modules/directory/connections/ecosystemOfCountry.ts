import type { CountryEntry, ProfessorEntry, ProviderEntry, UniversityEntry } from "../types";
import { professorsAtUniversity, professorsInCountry, universitiesInCountry } from "../lookups";
import { fundersOfCountry } from "./fundersOfCountry";
import { fundersOfUniversity } from "./fundersOfUniversity";

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

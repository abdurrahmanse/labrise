import type { CountryEntry, ProfessorEntry, ProviderEntry, ScholarshipEntry, UniversityEntry } from "../types";

export interface DirectoryEntries {
  countries: CountryEntry[];
  universities: UniversityEntry[];
  professors: ProfessorEntry[];
  scholarships: ScholarshipEntry[];
  providers: ProviderEntry[];
}

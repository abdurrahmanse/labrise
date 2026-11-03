/**
 * The directory's records and pure helpers: types, schemas, slugs, lookups and the API client. No React components.
 * Other modules, servers and API routes import this instead of the module root (index.ts), because the root also
 * re-exports client components, and importing those makes every page that touches it ship that UI.
 */
export type { CountryEntry, DirectoryType, ProfessorEntry, ProviderEntry, Region, ScholarshipEntry, UniversityEntry } from "./types";
export type { EntryResponse } from "./api/entry";
export { directoryTypeSchema, scholarshipSchema } from "./api/schemas";
export { directoryApi } from "./api/endpoints";
export { countries, directoryTypes, professors, providers, scholarships, universities } from "./data";
export { fieldOf } from "./data/fields";
export { ecosystemOfCountry } from "./lib/connections";
export { entryMeta } from "./lib/entryMeta";
export { findCountry, findProfessor, findProvider, findScholarship, findUniversity } from "./lib/lookups";
export { countrySlug, professorSlug, providerSlug, scholarshipSlug, universitySlug } from "./lib/slugs";

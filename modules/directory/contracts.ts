/**
 * What other modules need to talk to the directory without loading its records: types, schemas,
 * slug helpers and the API client. Light enough to import from client code on any page.
 */
export type { CountryEntry, DirectoryType, ProfessorEntry, ProviderEntry, Region, ScholarshipEntry, UniversityEntry } from "./types";
export type { EntryResponse } from "./api/entry";
export { directoryTypeSchema, scholarshipSchema } from "./api/schemas";
export { directoryApi } from "./api/endpoints";
export { countrySlug, professorSlug, providerSlug, scholarshipSlug, universitySlug } from "./lib/slugs";

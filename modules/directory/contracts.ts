/**
 * What other modules need to talk to the directory without loading its records: types, schemas,
 * slug helpers and the API client. Light enough to import from client code on any page.
 */
export type { CountryEntry, DirectoryType, EntryLink, EntryResult, LabEntry, ProfessorEntry, ProviderEntry, ScholarshipEntry, UniversityEntry } from "./types";
export { directoryTypeSchema } from "./schemas/directorySchemas";
export { directoryApi } from "./api/endpoints";
export { countrySlug, labSlug, professorSlug, providerSlug, scholarshipSlug, universitySlug } from "./utils/slugs";

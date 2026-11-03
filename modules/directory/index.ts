/**
 * Public API of the directory module. Other modules import from here, not from its inner folders.
 */
export type { CountryEntry, ProfessorEntry, ProviderEntry, Region, ScholarshipEntry, UniversityEntry } from "./types";
export { scholarshipSchema } from "./api/schemas";
export { scholarshipSlug } from "./lib/slugs";
export { ScholarshipCard } from "./components/cards/ScholarshipCard";

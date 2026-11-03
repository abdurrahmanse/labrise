import type { CountryEntry, ProfessorEntry, ProviderEntry, ScholarshipEntry, UniversityEntry } from "../types";

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const countrySlug = (c: CountryEntry) => slugify(c.country);
export const universitySlug = (u: UniversityEntry) => slugify(u.name);
export const professorSlug = (p: ProfessorEntry) => slugify(p.name);
export const scholarshipSlug = (s: ScholarshipEntry) => slugify(s.name);
export const providerSlug = (p: ProviderEntry) => slugify(p.name);

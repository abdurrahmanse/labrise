import type { TrailStep } from "@/shared/components/PageTrail";
import type { CountryEntry, LabEntry, ProfessorEntry, ProviderEntry, ScholarshipEntry, UniversityEntry } from "../types";
import { countryByName } from "../lookups/countryLookups";
import { labSlug, countrySlug, professorSlug, providerSlug, scholarshipSlug, universitySlug } from "./slugs";
import { universityOfProfessor } from "../lookups/universityLookups";
import { universities } from "../data/universities";

/**
 * The path shown in the band at the top of every directory page. It follows how the pages nest:
 * Directory > Country > University > Lab or Professor, so you always see where a page sits.
 */
const START: TrailStep[] = [{ label: "Home", href: "/" }, { label: "Directory", href: "/directory" }];

export const directoryListTrail = (title: string, type: string): TrailStep[] => [...START, { label: title, href: `/directory/${type}` }];

export function countryTrail(country: CountryEntry): TrailStep[] {
  return [...START, { label: "Countries", href: "/directory/countries" }, { label: country.country, href: `/directory/countries/${countrySlug(country)}` }];
}

export function universityTrail(university: UniversityEntry): TrailStep[] {
  const country = countryByName(university.country);
  const base = country ? countryTrail(country) : START;
  return [...base, { label: "Universities", href: country ? `/directory/countries/${countrySlug(country)}/universities` : "/directory/universities" }, { label: university.name, href: `/directory/universities/${universitySlug(university)}` }];
}

export function professorTrail(professor: ProfessorEntry): TrailStep[] {
  const university = universityOfProfessor(professor);
  const base = university ? universityTrail(university) : [...START, { label: "Professors", href: "/directory/professors" }];
  return [...base, { label: professor.name, href: `/directory/professors/${professorSlug(professor)}` }];
}

export function labTrail(lab: LabEntry): TrailStep[] {
  const country = countryByName(lab.country);
  const university = lab.university ? universities.find((u) => u.name === lab.university) : undefined;
  const base = university ? universityTrail(university) : country ? [...countryTrail(country), { label: "Labs", href: `/directory/countries/${countrySlug(country)}/labs` }] : directoryListTrail("Labs & groups", "labs");
  return [...base, { label: lab.name, href: `/directory/labs/${labSlug(lab)}` }];
}

/** Adds one more step under a page, such as "People" under a lab. */
export const withStep = (trail: TrailStep[], label: string, href: string): TrailStep[] => [...trail, { label, href }];

export function scholarshipTrail(scholarship: ScholarshipEntry): TrailStep[] {
  const country = countryByName(scholarship.host);
  const base = country
    ? [...countryTrail(country), { label: "Scholarships", href: `/directory/countries/${countrySlug(country)}/scholarships` }]
    : directoryListTrail("Scholarships", "scholarships");
  return [...base, { label: scholarship.name, href: `/directory/scholarships/${scholarshipSlug(scholarship)}` }];
}

export function providerTrail(provider: ProviderEntry): TrailStep[] {
  return [...directoryListTrail("Scholarship providers", "providers"), { label: provider.name, href: `/directory/providers/${providerSlug(provider)}` }];
}

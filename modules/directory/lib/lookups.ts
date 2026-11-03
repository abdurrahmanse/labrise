import { countries } from "../data/countries";
import { professors } from "../data/professors";
import { providers } from "../data/providers";
import { scholarships } from "../data/scholarships";
import { universities } from "../data/universities";
import type { CountryEntry, ProfessorEntry, UniversityEntry } from "../types";
import { countrySlug, professorSlug, providerSlug, scholarshipSlug, universitySlug } from "./slugs";

export const findCountry = (slug: string) => countries.find((c) => countrySlug(c) === slug);
export const findUniversity = (slug: string) => universities.find((u) => universitySlug(u) === slug);
export const findProfessor = (slug: string) => professors.find((p) => professorSlug(p) === slug);

export const countryByName = (name: string): CountryEntry | undefined =>
  countries.find((c) => c.country === name);

/** Professors list their university as free text, e.g. "MPI … / ELLIS Tübingen". */
export const universityOfProfessor = (p: ProfessorEntry): UniversityEntry | undefined =>
  universities
    .filter((u) => p.university.includes(u.name) || p.university.includes(u.name.split(" / ")[0]))
    .sort((a, b) => b.name.length - a.name.length)[0];

export const professorsAtUniversity = (u: UniversityEntry) =>
  professors.filter((p) => universityOfProfessor(p)?.name === u.name);

export const universitiesInCountry = (country: string) => universities.filter((u) => u.country === country);
export const professorsInCountry = (country: string) => professors.filter((p) => p.country === country);

export const regionOfProfessor = (p: ProfessorEntry) => universityOfProfessor(p)?.region;

export const findScholarship = (slug: string) => scholarships.find((s) => scholarshipSlug(s) === slug);

/** Scholarships hosted by a country (the data uses the country name or "Europe" for EU-wide programs). */
export const scholarshipsInCountry = (country: string) => scholarships.filter((s) => s.host === country);

export const findProvider = (slug: string) => providers.find((p) => providerSlug(p) === slug);

/** The organisation that runs a scholarship programme, if listed. */
export const providerOfScholarship = (scholarshipName: string) =>
  providers.find((p) => p.programs.includes(scholarshipName));

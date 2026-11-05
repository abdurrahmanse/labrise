import { universities } from "../../data/universities";
import type { ProfessorEntry, UniversityEntry } from "../../types";
import { universitySlug } from "../slugs";

export const findUniversity = (slug: string) => universities.find((u) => universitySlug(u) === slug);

/** Professors list their university as free text, e.g. "MPI … / ELLIS Tübingen". */
export const universityOfProfessor = (p: ProfessorEntry): UniversityEntry | undefined =>
  universities
    .filter((u) => p.university.includes(u.name) || p.university.includes(u.name.split(" / ")[0]))
    .sort((a, b) => b.name.length - a.name.length)[0];

export const universitiesInCountry = (country: string) => universities.filter((u) => u.country === country);

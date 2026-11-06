import { universities } from "../../data/universities";
import type { ProfessorEntry, UniversityEntry } from "../../types";
import { universitySlug } from "../slugs";

export const findUniversity = (slug: string) => universities.find((u) => universitySlug(u) === slug);

/** Professors list their university as free text, e.g. "MPI … / ELLIS Tübingen". */
const professorUniversity = new Map<string, UniversityEntry | undefined>();

export const universityOfProfessor = (p: ProfessorEntry): UniversityEntry | undefined => {
  if (professorUniversity.has(p.university)) return professorUniversity.get(p.university);
  const found = universities
    .filter((u) => p.university.includes(u.name) || p.university.includes(u.name.split(" / ")[0]))
    .sort((a, b) => b.name.length - a.name.length)[0];
  professorUniversity.set(p.university, found);
  return found;
};

export const universitiesInCountry = (country: string) => universities.filter((u) => u.country === country);

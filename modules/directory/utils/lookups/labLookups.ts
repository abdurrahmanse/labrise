import { labs } from "../../data/labs";
import type { LabEntry, ProfessorEntry, UniversityEntry } from "../../types";
import { labSlug } from "../slugs";

export const findLab = (slug: string) => labs.find((l) => labSlug(l) === slug);

export const labsAtUniversity = (u: UniversityEntry): LabEntry[] => labs.filter((l) => l.university === u.name);

export const labsInCountry = (country: string): LabEntry[] => labs.filter((l) => l.country === country);

/** Labs that name a professor, matched by the exact name and university. */
export const labsOfProfessor = (p: ProfessorEntry): LabEntry[] => labs.filter((l) => l.professors.includes(p.name));

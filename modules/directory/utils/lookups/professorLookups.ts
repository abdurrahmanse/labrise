import { professors } from "../../data/professors";
import type { ProfessorEntry, UniversityEntry } from "../../types";
import { professorSlug } from "../slugs";
import { universityOfProfessor } from "./universityLookups";

export const findProfessor = (slug: string) => professors.find((p) => professorSlug(p) === slug);

export const professorsAtUniversity = (u: UniversityEntry) =>
  professors.filter((p) => universityOfProfessor(p)?.name === u.name);

export const professorsInCountry = (country: string) => professors.filter((p) => p.country === country);

export const regionOfProfessor = (p: ProfessorEntry) => universityOfProfessor(p)?.region;

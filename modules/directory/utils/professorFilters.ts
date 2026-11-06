import { fieldOf } from "../data/fields";
import type { TrackedProfessor } from "../store/useProfessorTracker";
import { getTracked } from "../store/useProfessorTracker";
import type { ProfessorEntry } from "../types";
import { regionOfProfessor } from "../lookups";
import { professorSlug } from "./slugs";

export const SORTS = ["name", "university", "country"] as const;
export type ProfessorSort = (typeof SORTS)[number];

export interface ProfessorFilters {
  q: string;
  region: string;
  field: string;
  hasEmail: boolean;
  savedOnly: boolean;
  sort: ProfessorSort;
}

export const fieldOptions = (professors: ProfessorEntry[]) =>
  Array.from(new Set(professors.map((p) => fieldOf(p.group).title))).sort();

export function filterProfessors(
  professors: ProfessorEntry[],
  filters: Omit<ProfessorFilters, "sort">,
  tracked: Record<string, TrackedProfessor>
) {
  const q = filters.q.trim().toLowerCase();

  return professors.filter((p) => {
    if (filters.region !== "All" && regionOfProfessor(p) !== filters.region) return false;
    if (filters.field !== "All" && fieldOf(p.group).title !== filters.field) return false;
    if (filters.hasEmail && !p.email) return false;
    if (filters.savedOnly && !getTracked(tracked, professorSlug(p)).saved) return false;
    return !q || `${p.name} ${p.university} ${p.country} ${p.group}`.toLowerCase().includes(q);
  });
}

/** Returns a sorted copy; the input list is left as it is. */
export const sortProfessors = (professors: ProfessorEntry[], sort: ProfessorSort) =>
  [...professors].sort((a, b) => a[sort].localeCompare(b[sort]));

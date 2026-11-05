import type { Scholarship } from "../types/scholarship";
import type { ScholarshipSort } from "../types/search";

const sortKey: Record<ScholarshipSort, (s: Scholarship) => string> = {
  name: (s) => s.name,
  country: (s) => s.host,
  level: (s) => s.level
};

/** Returns a sorted copy; without a sort the order is kept. */
export function sortScholarships(list: Scholarship[], sort?: ScholarshipSort) {
  if (!sort) return list;
  return [...list].sort((a, b) => sortKey[sort](a).localeCompare(sortKey[sort](b)));
}

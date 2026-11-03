import type { PaginationParams } from "@/shared/api/types";
import type { Scholarship, ScholarshipLevel } from "./scholarship";

export const SCHOLARSHIP_SORTS = ["name", "country", "level"] as const;
export type ScholarshipSort = (typeof SCHOLARSHIP_SORTS)[number];

export interface ScholarshipFilters {
  /** Free text matched against name, country, level, coverage and eligibility. */
  q?: string;
  /** Host country, exact name. */
  country?: string;
  level?: ScholarshipLevel;
  region?: Scholarship["region"];
}

export interface ScholarshipSearchParams extends ScholarshipFilters, PaginationParams {
  sort?: ScholarshipSort;
}

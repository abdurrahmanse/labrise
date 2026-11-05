import type { Scholarship } from "../types/scholarship";
import type { ScholarshipSearchParams } from "../types/search";
import { matchesFilters } from "./matchesFilters";

export const filterScholarships = (all: Scholarship[], params: ScholarshipSearchParams) => all.filter((s) => matchesFilters(s, params));

import type { Scholarship } from "../types/scholarship";
import type { ScholarshipSearchParams } from "../types/search";
import { filterScholarships } from "./filterScholarships";
import { pageOf } from "./pageOf";
import { sortScholarships } from "./sortScholarships";

/** Filter, then sort, then page. The mock repository uses it; a database does the same work in SQL. */
export const searchScholarships = (all: Scholarship[], params: ScholarshipSearchParams) =>
  pageOf(sortScholarships(filterScholarships(all, params), params.sort), params.page, params.pageSize);

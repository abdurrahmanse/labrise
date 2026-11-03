"use client";

import { useQuery } from "@tanstack/react-query";
import type { PaginatedResponse } from "@/shared/api/types";
import { scholarshipQueries } from "../queries/scholarshipQueries";
import type { Scholarship } from "../types/scholarship";
import type { ScholarshipSearchParams } from "../types/search";

/** One filtered, sorted page of scholarships. Pass the server-rendered page as `initialData` to skip the first fetch. */
export function useScholarships(params: ScholarshipSearchParams = {}, initialData?: PaginatedResponse<Scholarship>) {
  return useQuery({ ...scholarshipQueries.list(params), initialData });
}

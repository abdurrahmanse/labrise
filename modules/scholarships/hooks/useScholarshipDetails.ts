"use client";

import { useQuery } from "@tanstack/react-query";
import { scholarshipQueries } from "../queries/scholarshipQueries";
import type { Scholarship } from "../types/scholarship";

export function useScholarshipDetails(slug: string, initialData?: Scholarship | null) {
  return useQuery({ ...scholarshipQueries.detail(slug), initialData });
}

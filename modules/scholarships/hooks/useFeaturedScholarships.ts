"use client";

import { useQuery } from "@tanstack/react-query";
import { scholarshipQueries } from "../queries/scholarshipQueries";
import type { Scholarship } from "../types/scholarship";

export function useFeaturedScholarships(limit = 6, initialData?: Scholarship[]) {
  return useQuery({ ...scholarshipQueries.featured(limit), initialData });
}

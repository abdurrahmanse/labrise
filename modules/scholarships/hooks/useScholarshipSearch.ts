"use client";

import { useDebouncedValue } from "@/shared/hooks/useDebouncedValue";
import type { ScholarshipSearchParams } from "../types/search";
import { useScholarships } from "./useScholarships";

/** Search-as-you-type: waits for a pause in typing, keeps the previous results on screen meanwhile. */
export function useScholarshipSearch(text: string, params: Omit<ScholarshipSearchParams, "q"> = {}) {
  const q = useDebouncedValue(text.trim(), 250);
  const query = useScholarships({ ...params, q });
  return { ...query, pending: text.trim() !== q || query.isFetching };
}

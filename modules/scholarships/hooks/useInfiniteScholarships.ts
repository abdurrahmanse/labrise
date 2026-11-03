"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import type { PaginatedResponse } from "@/shared/api/types";
import { scholarshipQueries } from "../queries/scholarshipQueries";
import type { Scholarship } from "../types/scholarship";
import type { ScholarshipSearchParams } from "../types/search";

/**
 * "Load more" list: each page is fetched when asked for, never all at once.
 * `firstPage` is the server-rendered page for these same params; it seeds the cache so nothing flashes.
 */
export function useInfiniteScholarships(params: Omit<ScholarshipSearchParams, "page"> = {}, firstPage?: PaginatedResponse<Scholarship>) {
  const query = useInfiniteQuery({
    ...scholarshipQueries.infinite(params),
    initialData: firstPage && { pages: [firstPage], pageParams: [1] }
  });
  return { ...query, items: query.data?.pages.flatMap((page) => page.items), total: query.data?.pages[0]?.total ?? 0 };
}

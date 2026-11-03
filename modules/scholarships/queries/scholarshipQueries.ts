import { infiniteQueryOptions, keepPreviousData, queryOptions } from "@tanstack/react-query";
import { clientContainer } from "@/core/container/client";
import { queryKeys } from "@/shared/query/queryKeys";
import { staleTimes } from "@/shared/query/staleTimes";
import type { ScholarshipSearchParams } from "../types/search";

const service = clientContainer.scholarships;

/**
 * Query definitions (key + fetcher + cache time) for the scholarships feature.
 * Hooks, prefetching and invalidation all start from these, so they can never drift apart.
 */
export const scholarshipQueries = {
  list: (params: ScholarshipSearchParams) =>
    queryOptions({
      queryKey: queryKeys.scholarships.list(params),
      queryFn: () => service.search(params),
      staleTime: staleTimes.scholarships,
      placeholderData: keepPreviousData
    }),

  infinite: (params: Omit<ScholarshipSearchParams, "page">) =>
    infiniteQueryOptions({
      queryKey: queryKeys.scholarships.infinite(params),
      queryFn: ({ pageParam }) => service.search({ ...params, page: pageParam }),
      initialPageParam: 1,
      getNextPageParam: (last) => (last.page < last.pageCount ? last.page + 1 : undefined),
      staleTime: staleTimes.scholarships
    }),

  detail: (slug: string) =>
    queryOptions({
      queryKey: queryKeys.scholarships.detail(slug),
      queryFn: () => service.bySlug(slug),
      staleTime: staleTimes.scholarships
    }),

  featured: (limit: number) =>
    queryOptions({
      queryKey: queryKeys.scholarships.featured(limit),
      queryFn: () => service.featured(limit),
      staleTime: staleTimes.scholarships
    })
};

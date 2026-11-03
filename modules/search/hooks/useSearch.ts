"use client";

import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { useDebouncedValue } from "@/shared/hooks/useDebouncedValue";
import { queryKeys } from "@/shared/query/queryKeys";
import { staleTimes } from "@/shared/query/staleTimes";
import { searchApi } from "../api/searchApi";

/**
 * Searches the site through the search API. Typing is debounced, the previous results stay on screen
 * while the next ones load, and "load more" fetches the next page of the same search.
 */
export function useSearch(text: string, enabled = true) {
  const q = useDebouncedValue(text.trim(), 250);

  const query = useInfiniteQuery({
    queryKey: queryKeys.search.results(q),
    queryFn: ({ pageParam, signal }) => searchApi.search(q, pageParam, signal),
    initialPageParam: 1,
    getNextPageParam: (last) => last.nextPage ?? undefined,
    enabled: enabled && q.length > 0,
    placeholderData: keepPreviousData,
    staleTime: staleTimes.search
  });

  const items = query.data?.pages.flatMap((p) => p.items) ?? [];
  const total = query.data?.pages[0]?.total ?? 0;
  // True while the typed text has not yet become the searched text.
  const pending = text.trim() !== q || query.isFetching;

  return { ...query, items, total, pending, searchedText: q };
}

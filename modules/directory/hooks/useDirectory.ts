"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/shared/query/queryKeys";
import { staleTimes } from "@/shared/query/staleTimes";
import { directoryApi } from "../api/endpoints";
import type { DirectoryType, EntryOf } from "../types";

/** Server-rendered rows are used first (good for SEO), then TanStack Query keeps them fresh. */
export function useDirectory<T extends DirectoryType>(type: T, initialData: EntryOf[T][]) {
  const query = useQuery({
    queryKey: queryKeys.directory.list(type),
    queryFn: ({ signal }) => directoryApi.list(type, signal),
    initialData,
    staleTime: staleTimes.directory
  });
  return { ...query, data: query.data ?? initialData };
}

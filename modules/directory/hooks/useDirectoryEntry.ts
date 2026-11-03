"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { queryKeys } from "@/shared/query/queryKeys";
import { staleTimes } from "@/shared/query/staleTimes";
import { directoryApi } from "../api/endpoints";
import type { DirectoryType } from "../types";

/** One entry with the entries it links to. */
export function useDirectoryEntry(type: DirectoryType, slug: string) {
  return useQuery({
    queryKey: queryKeys.directory.entry(type, slug),
    queryFn: ({ signal }) => directoryApi.entry(type, slug, signal),
    staleTime: staleTimes.entry
  });
}

/** Prefetch for a card link such as /directory/universities/eth-zurich. Other links do nothing. */
export function usePrefetchHref(href: string) {
  const match = /^\/directory\/(countries|universities|professors|scholarships|providers)\/([^/]+)$/.exec(href);
  const prefetch = usePrefetchEntry((match?.[1] ?? "countries") as DirectoryType, match?.[2] ?? "");
  return match ? prefetch : undefined;
}

/** Warms the cache when the pointer reaches a link, so the next page opens without waiting. */
export function usePrefetchEntry(type: DirectoryType, slug: string) {
  const client = useQueryClient();
  return useCallback(() => {
    void client.prefetchQuery({
      queryKey: queryKeys.directory.entry(type, slug),
      queryFn: ({ signal }) => directoryApi.entry(type, slug, signal),
      staleTime: staleTimes.entry
    });
  }, [client, type, slug]);
}

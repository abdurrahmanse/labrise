"use client";

import { useQueries } from "@tanstack/react-query";
import { directoryApi } from "@/modules/directory/contracts";
import { queryKeys } from "@/shared/query/queryKeys";
import { staleTimes } from "@/shared/query/staleTimes";
import { isMissingEntry } from "../utils/entryQuery";
import type { EntryRef } from "../store/useBookmarks";

/** Loads every entry in parallel; one failing entry does not block the others. Results keep the order of `refs`. */
export function useEntryQueries(refs: EntryRef[]) {
  const results = useQueries({
    queries: refs.map((ref) => ({
      queryKey: queryKeys.directory.entry(ref.type, ref.slug),
      queryFn: ({ signal }: { signal: AbortSignal }) => directoryApi.entry(ref.type, ref.slug, signal),
      staleTime: staleTimes.entry
    }))
  });
  /** Entries that failed in a way a retry could fix. */
  const retryable = results.filter((r) => r.isError && !isMissingEntry(r.error));
  return { results, retryable };
}

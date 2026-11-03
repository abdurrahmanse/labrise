"use client";

import { RotateCcw } from "lucide-react";
import { libraryText as t } from "@/content/text/library";
import { useEntryQueries } from "../hooks/useEntryQueries";
import { refKey, type EntryRef } from "../store/useBookmarks";
import { EntryRow } from "./EntryRow";

/** The list of entries with a "retry all" button when some failed. */
export function EntryList({ refs }: { refs: EntryRef[] }) {
  const { results, retryable } = useEntryQueries(refs);

  return (
    <div className="space-y-4">
      {retryable.length > 0 && (
        <button type="button" onClick={() => retryable.forEach((r) => void r.refetch())} className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-rose-400 hover:text-rose-300">
          <RotateCcw className="h-4 w-4" aria-hidden /> {t.retryAll(retryable.length)}
        </button>
      )}
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {results.map((result, i) => (
          <EntryRow key={refKey(refs[i])} entry={refs[i]} result={result} />
        ))}
      </ul>
    </div>
  );
}

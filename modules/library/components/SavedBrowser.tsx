"use client";

import Link from "next/link";
import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import { ArrowRight, Bookmark, History, Loader2, RotateCcw, Trash2, TriangleAlert } from "lucide-react";
import { directoryApi } from "@/modules/directory/catalog";
import { isApiError } from "@/shared/api/errors";
import { queryKeys } from "@/shared/query/queryKeys";
import { staleTimes } from "@/shared/query/staleTimes";
import { libraryText as t } from "@/data/text/library";
import { cn } from "@/lib/utils";
import { EmptyState } from "@/shared/components/EmptyState";
import { FilterTabs } from "@/shared/components/FilterTabs";
import { useMounted } from "@/shared/hooks/useMounted";
import { describeEntry } from "../lib/entryView";
import { refKey, useBookmarks, type EntryRef } from "../store/useBookmarks";
import { useRecentlyViewed } from "../store/useRecentlyViewed";

type Tab = "saved" | "recent";

const TABS = [
  { value: "saved" as const, label: t.tabs.saved, icon: Bookmark },
  { value: "recent" as const, label: t.tabs.recent, icon: History }
];

/** Loads every listed entry in parallel with useQueries; one failing entry does not block the others. */
function EntryList({ refs }: { refs: EntryRef[] }) {
  const results = useQueries({
    queries: refs.map((ref) => ({
      queryKey: queryKeys.directory.entry(ref.type, ref.slug),
      queryFn: ({ signal }: { signal: AbortSignal }) => directoryApi.entry(ref.type, ref.slug, signal),
      staleTime: staleTimes.entry
    }))
  });
  const failed = results.filter((r) => r.isError && !(isApiError(r.error) && r.error.status === 404));

  return (
    <div className="space-y-4">
      {failed.length > 0 && (
        <button type="button" onClick={() => failed.forEach((r) => void r.refetch())} className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-rose-400 hover:text-rose-300">
          <RotateCcw className="h-4 w-4" aria-hidden /> {t.retryAll(failed.length)}
        </button>
      )}
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {results.map((result, i) => {
          const ref = refs[i];
          const key = refKey(ref);
          const base = "flex items-center gap-4 border-2 bg-canvas-card/60 p-4 backdrop-blur-xl";

          if (result.isPending) {
            return (
              <li key={key} className={cn(base, "border-white/15")} aria-busy>
                <Loader2 className="h-5 w-5 animate-spin text-indigo-400" aria-hidden />
                <span className="font-mono text-xs text-slate-400">{t.loading}</span>
              </li>
            );
          }
          if (result.isError) {
            const missing = isApiError(result.error) && result.error.status === 404;
            return (
              <li key={key} className={cn(base, "border-rose-400/40")}>
                <TriangleAlert className="h-5 w-5 shrink-0 text-rose-400" aria-hidden />
                <span className="flex-1 font-sans text-sm text-slate-300">{missing ? t.missing : t.failed}</span>
                {!missing && (
                  <button type="button" onClick={() => void result.refetch()} className="cursor-pointer text-sm font-bold text-indigo-400 hover:text-indigo-200">
                    {t.retry}
                  </button>
                )}
              </li>
            );
          }
          const view = describeEntry(result.data);
          return (
            <li key={key}>
              <Link href={view.href} className={cn(base, "border-white/25 transition-colors hover:border-indigo-400")}>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs uppercase tracking-wider text-indigo-300">{t.kinds[ref.type]}</p>
                  <p className="truncate text-lg font-bold text-white">{view.title}</p>
                  <p className="truncate font-sans text-sm font-normal text-slate-400">{view.subtitle}</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-slate-400" aria-hidden />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function SavedBrowser() {
  const mounted = useMounted();
  const [tab, setTab] = useState<Tab>("saved");
  const saved = useBookmarks((s) => s.items);
  const clearSaved = useBookmarks((s) => s.clear);
  const recent = useRecentlyViewed((s) => s.items);
  const clearRecent = useRecentlyViewed((s) => s.clear);

  // The lists come from this browser, so there is nothing to show before mount.
  if (!mounted) return null;

  const refs: EntryRef[] = tab === "saved" ? saved.map(({ type, slug }) => ({ type, slug })) : recent;
  const clear = tab === "saved" ? clearSaved : clearRecent;
  const empty = t.empty[tab];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <FilterTabs kind="tablist" label={t.title} options={TABS} value={tab} onChange={setTab} />
        {refs.length > 0 && (
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-slate-400">{t.count(refs.length)}</span>
            <button type="button" onClick={clear} className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-rose-400">
              <Trash2 className="h-4 w-4" aria-hidden /> {t.clear}
            </button>
          </div>
        )}
      </div>
      {refs.length === 0 ? <EmptyState title={empty.title} hint={empty.hint} /> : <EntryList key={tab} refs={refs} />}
    </div>
  );
}

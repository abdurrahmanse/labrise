import Link from "next/link";
import { ArrowRight, Loader2, TriangleAlert } from "lucide-react";
import type { UseQueryResult } from "@tanstack/react-query";
import type { EntryResponse } from "@/modules/directory/contracts";
import { libraryText as t } from "@/data/text/library";
import { cn } from "@/lib/utils";
import { describeEntry } from "../lib/entryView";
import { isMissingEntry } from "../lib/entryQuery";
import type { EntryRef } from "../store/useBookmarks";

const base = "flex items-center gap-4 border-2 bg-canvas-card/60 p-4 backdrop-blur-xl";

interface EntryRowProps {
  entry: EntryRef;
  result: UseQueryResult<EntryResponse>;
}

/** One saved or recent entry in whichever state its request is in: loading, failed, missing or loaded. */
export function EntryRow({ entry, result }: EntryRowProps) {
  if (result.isPending) {
    return (
      <li className={cn(base, "border-white/15")} aria-busy>
        <Loader2 className="h-5 w-5 animate-spin text-indigo-400" aria-hidden />
        <span className="font-mono text-xs text-slate-400">{t.loading}</span>
      </li>
    );
  }
  if (result.isError) {
    const missing = isMissingEntry(result.error);
    return (
      <li className={cn(base, "border-rose-400/40")}>
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
    <li>
      <Link href={view.href} className={cn(base, "border-white/25 transition-colors hover:border-indigo-400")}>
        <div className="min-w-0 flex-1">
          <p className="font-mono text-xs uppercase tracking-wider text-indigo-300">{t.kinds[entry.type]}</p>
          <p className="truncate text-lg font-bold text-white">{view.title}</p>
          <p className="truncate font-sans text-sm font-normal text-slate-400">{view.subtitle}</p>
        </div>
        <ArrowRight className="h-5 w-5 shrink-0 text-slate-400" aria-hidden />
      </Link>
    </li>
  );
}

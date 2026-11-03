"use client";

import { Bookmark } from "lucide-react";
import { libraryText as t } from "@/data/text/library";
import { cn } from "@/lib/utils";
import { useMounted } from "@/shared/hooks/useMounted";
import { useBookmarks, useIsBookmarked, type EntryRef } from "../store/useBookmarks";

export function BookmarkButton(ref: EntryRef) {
  const mounted = useMounted();
  const stored = useIsBookmarked(ref);
  const toggle = useBookmarks((s) => s.toggle);
  const saved = mounted && stored;

  return (
    <button
      type="button"
      aria-pressed={saved}
      onClick={() => toggle(ref)}
      className={cn(
        "inline-flex cursor-pointer items-center gap-2 border-2 px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors",
        saved ? "border-transparent bg-indigo-600 text-white" : "border-white/40 bg-white/[0.04] text-slate-100 hover:border-indigo-400 hover:text-indigo-300"
      )}
    >
      <Bookmark className={cn("h-4 w-4", saved && "fill-current")} aria-hidden />
      {saved ? t.saved : t.save}
    </button>
  );
}

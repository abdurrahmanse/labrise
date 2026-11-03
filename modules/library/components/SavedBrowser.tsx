"use client";

import { Bookmark, History, Trash2 } from "lucide-react";
import { libraryText as t } from "@/content/text/library";
import { EmptyState } from "@/shared/components/EmptyState";
import { FilterTabs } from "@/shared/components/FilterTabs";
import { useMounted } from "@/shared/hooks/useMounted";
import { useLibraryTab } from "../hooks/useLibraryTab";
import { EntryList } from "./EntryList";

const TABS = [
  { value: "saved" as const, label: t.tabs.saved, icon: Bookmark },
  { value: "recent" as const, label: t.tabs.recent, icon: History }
];

export function SavedBrowser() {
  const mounted = useMounted();
  const { tab, setTab, refs, clear } = useLibraryTab();

  // The lists come from this browser, so there is nothing to show before mount.
  if (!mounted) return null;

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

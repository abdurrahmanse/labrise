"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Bookmark, History, Loader2, Search, TriangleAlert, X } from "lucide-react";
import { searchText } from "@/data/text/common";
import { searchDialogText as d } from "@/data/text/library";
import { cn } from "@/lib/utils";
import { OPEN_SEARCH_EVENT } from "@/shared/components/OpenSearchButton";
import { useSearchHistory } from "@/modules/library/store/useSearchHistory";
import { useSearch } from "../hooks/useSearch";
import type { SearchKind } from "../lib/searchIndex";
import { KindIcon } from "./KindIcon";

/** Header search: opens with the button or Ctrl/Cmd+K and looks across the whole directory through the search API. */
export function GlobalSearch() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const search = useSearch(query, isOpen);
  const terms = useSearchHistory((s) => s.terms);
  const remember = useSearchHistory((s) => s.remember);
  const clearHistory = useSearchHistory((s) => s.clear);

  const open = useCallback(() => {
    dialogRef.current?.showModal();
    inputRef.current?.focus();
    setOpen(true);
  }, []);
  const close = useCallback(() => dialogRef.current?.close(), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_SEARCH_EVENT, open);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_SEARCH_EVENT, open);
    };
  }, [open]);

  const go = (href: string) => {
    remember(query);
    close();
    router.push(href);
  };

  const onInputKey = (e: React.KeyboardEvent) => {
    const last = search.items.length - 1;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, last));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && search.items[active]) {
      e.preventDefault();
      go(search.items[active].href);
    }
  };

  const hasQuery = query.trim() !== "";
  const settled = hasQuery && !search.pending && !search.isError;

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label={searchText.open}
        className="flex h-9 cursor-pointer items-center gap-2 border-2 border-white/40 bg-white/[0.04] px-2.5 text-slate-300 transition-colors hover:border-indigo-400 hover:text-indigo-300"
      >
        <Search className="h-4 w-4" />
        <kbd className="hidden font-mono text-xs text-slate-400 lg:inline">{searchText.shortcut}</kbd>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={searchText.open}
        onClose={() => {
          setQuery("");
          setOpen(false);
        }}
        onClick={(e) => e.target === dialogRef.current && close()}
        className="m-0 mx-auto mt-[10vh] w-[min(40rem,calc(100vw-2rem))] border-2 border-white/80 bg-canvas-base p-0 text-slate-100 shadow-[6px_6px_0_0_rgba(15,23,42,0.25)] backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 border-b border-white/15 px-4 py-3">
          {search.pending && hasQuery ? <Loader2 className="h-5 w-5 shrink-0 animate-spin text-indigo-400" aria-hidden /> : <Search className="h-5 w-5 shrink-0 text-indigo-400" aria-hidden />}
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKey}
            role="combobox"
            aria-expanded={search.items.length > 0}
            aria-controls={listId}
            aria-activedescendant={search.items[active] ? `${listId}-${active}` : undefined}
            placeholder={searchText.placeholder}
            className="min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-slate-500"
          />
          <button type="button" onClick={close} aria-label={searchText.close} className="cursor-pointer text-slate-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul id={listId} role="listbox" className="max-h-[55vh] overflow-y-auto">
          {hasQuery &&
            search.items.map((entry, i) => (
              <li
                key={entry.href}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={i === active}
                onMouseMove={() => setActive(i)}
                onClick={() => go(entry.href)}
                className={cn("flex cursor-pointer items-center justify-between gap-3 px-4 py-2.5", i === active ? "bg-indigo-600 text-white" : "hover:bg-white/[0.06]")}
              >
                <span className="min-w-0">
                  <span className="block truncate font-bold">{entry.title}</span>
                  <span className={cn("block truncate font-sans text-sm font-normal", i === active ? "text-white/80" : "text-slate-400")}>{entry.subtitle}</span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs uppercase tracking-wider opacity-80">
                  <KindIcon kind={entry.kind as SearchKind} />
                  {searchText.kinds[entry.kind as SearchKind]}
                </span>
              </li>
            ))}
        </ul>

        {hasQuery && search.hasNextPage && (
          <button type="button" onClick={() => void search.fetchNextPage()} disabled={search.isFetchingNextPage} className="w-full cursor-pointer border-t border-white/15 px-4 py-3 text-sm font-bold text-indigo-400 hover:bg-white/[0.06] disabled:opacity-60">
            {search.isFetchingNextPage ? d.searching : `${d.loadMore} (${d.resultsFor(search.total)})`}
          </button>
        )}

        {search.isError && hasQuery && (
          <div className="flex items-center justify-center gap-3 px-4 py-6 text-slate-300">
            <TriangleAlert className="h-5 w-5 text-rose-400" aria-hidden /> {d.failed}
            <button type="button" onClick={() => void search.refetch()} className="cursor-pointer font-bold text-indigo-400 hover:text-indigo-200">{d.retry}</button>
          </div>
        )}
        {settled && search.items.length === 0 && <p className="px-4 py-6 text-center font-sans font-normal text-slate-400">{searchText.empty}</p>}

        {!hasQuery && (
          <div className="space-y-4 px-4 py-5">
            <p className="text-center font-sans font-normal text-slate-400">{searchText.hint}</p>
            {terms.length > 0 && (
              <div>
                <div className="mb-2 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-slate-400">
                  <span className="inline-flex items-center gap-1.5"><History className="h-4 w-4" aria-hidden /> {d.recentTitle}</span>
                  <button type="button" onClick={clearHistory} className="cursor-pointer hover:text-rose-400">{d.clearRecent}</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {terms.map((term) => (
                    <button key={term} type="button" onClick={() => setQuery(term)} className="cursor-pointer border-2 border-white/25 px-3 py-1 text-sm font-bold text-slate-200 hover:border-indigo-400">
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <button type="button" onClick={() => go("/saved")} className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-200">
              <Bookmark className="h-4 w-4" aria-hidden /> {d.saved}
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}

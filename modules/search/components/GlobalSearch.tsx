"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { searchEntries } from "../lib/searchEntries";
import type { SearchItem } from "../lib/searchIndex";
import { searchText } from "@/data/text/common";
import { KindIcon } from "./KindIcon";

/** Header search: opens with the button or Ctrl/Cmd+K and looks across the whole directory. */
export function GlobalSearch() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [index, setIndex] = useState<SearchItem[] | null>(null);

  const results = useMemo(() => (index ? searchEntries(index, query) : []), [index, query]);

  const open = useCallback(() => {
    dialogRef.current?.showModal();
    inputRef.current?.focus();
    // The directory data is large, so it loads on the first open instead of with every page.
    if (!index) void import("../lib/searchIndex").then((m) => setIndex(m.buildSearchIndex()));
  }, [index]);

  const close = useCallback(() => dialogRef.current?.close(), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (entry: SearchItem) => {
    close();
    setQuery("");
    router.push(entry.href);
  };

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      go(results[active]);
    }
  };

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
        onClose={() => setQuery("")}
        onClick={(e) => e.target === dialogRef.current && close()}
        className="m-0 mx-auto mt-[10vh] w-[min(40rem,calc(100vw-2rem))] border-2 border-white/80 bg-canvas-base p-0 text-slate-100 shadow-[6px_6px_0_0_rgba(15,23,42,0.25)] backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 border-b border-white/15 px-4 py-3">
          <Search className="h-5 w-5 shrink-0 text-indigo-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKey}
            role="combobox"
            aria-expanded={results.length > 0}
            aria-controls={listId}
            aria-activedescendant={results[active] ? `${listId}-${active}` : undefined}
            placeholder={searchText.placeholder}
            className="min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-slate-500"
          />
          <button type="button" onClick={close} aria-label={searchText.close} className="cursor-pointer text-slate-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul id={listId} role="listbox" className="max-h-[55vh] overflow-y-auto">
          {results.map((entry, i) => (
            <li
              key={entry.href}
              id={`${listId}-${i}`}
              role="option"
              aria-selected={i === active}
              onMouseMove={() => setActive(i)}
              onClick={() => go(entry)}
              className={cn(
                "flex cursor-pointer items-center justify-between gap-3 px-4 py-2.5",
                i === active ? "bg-indigo-600 text-white" : "hover:bg-white/[0.06]"
              )}
            >
              <span className="min-w-0">
                <span className="block truncate font-bold">{entry.title}</span>
                <span className={cn("block truncate font-sans text-sm font-normal", i === active ? "text-white/80" : "text-slate-400")}>
                  {entry.subtitle}
                </span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs uppercase tracking-wider opacity-80"><KindIcon kind={entry.kind} />
                {searchText.kinds[entry.kind]}
              </span>
            </li>
          ))}
        </ul>

        {query.trim() !== "" && index && results.length === 0 && (
          <p className="px-4 py-6 text-center font-sans font-normal text-slate-400">{searchText.empty}</p>
        )}
        {query.trim() === "" && (
          <p className="px-4 py-6 text-center font-sans font-normal text-slate-400">{searchText.hint}</p>
        )}
      </dialog>
    </>
  );
}

"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Search, X } from "lucide-react";
import { searchText } from "@/data/text/common";
import { useSearchHistory } from "@/modules/library";
import { useListNavigation } from "../hooks/useListNavigation";
import { useSearch } from "../hooks/useSearch";
import { useSearchDialog } from "../hooks/useSearchDialog";
import { SearchRecent } from "./SearchRecent";
import { SearchResultList } from "./SearchResultList";
import { SearchStatus } from "./SearchStatus";

interface SearchDialogProps {
  /** Called once the dialog has closed, so the owner can unmount it. */
  onClosed: () => void;
}

/** The search dialog itself: input, results, status and recent searches. Opens as soon as it is mounted. */
export function SearchDialog({ onClosed }: SearchDialogProps) {
  const router = useRouter();
  const listId = useId();
  const [query, setQuery] = useState("");

  const { dialogRef, inputRef, close, handleClosed } = useSearchDialog(onClosed);
  const search = useSearch(query);
  const history = { terms: useSearchHistory((s) => s.terms), remember: useSearchHistory((s) => s.remember), clear: useSearchHistory((s) => s.clear) };

  const go = (href: string) => {
    history.remember(query);
    close();
    router.push(href);
  };
  const nav = useListNavigation(search.items.length, (index) => go(search.items[index].href));

  const hasQuery = query.trim() !== "";
  const settled = hasQuery && !search.pending && !search.isError;

  return (
    <dialog
      ref={dialogRef}
      aria-label={searchText.open}
      onClose={handleClosed}
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
            nav.resetActive();
          }}
          onKeyDown={nav.onKeyDown}
          role="combobox"
          aria-expanded={search.items.length > 0}
          aria-controls={listId}
          aria-activedescendant={search.items[nav.active] ? `${listId}-${nav.active}` : undefined}
          placeholder={searchText.placeholder}
          className="min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-slate-500"
        />
        <button type="button" onClick={close} aria-label={searchText.close} className="cursor-pointer text-slate-400 hover:text-white">
          <X className="h-5 w-5" />
        </button>
      </div>

      <SearchResultList listId={listId} items={hasQuery ? search.items : []} active={nav.active} onHover={nav.setActive} onPick={go} />

      {hasQuery && (
        <SearchStatus
          isError={search.isError}
          settled={settled}
          isEmpty={search.items.length === 0}
          hasNextPage={!!search.hasNextPage}
          isFetchingNextPage={search.isFetchingNextPage}
          total={search.total}
          onRetry={() => void search.refetch()}
          onLoadMore={() => void search.fetchNextPage()}
        />
      )}

      {!hasQuery && <SearchRecent terms={history.terms} onPickTerm={setQuery} onClear={history.clear} onOpenSaved={() => go("/saved")} />}
    </dialog>
  );
}

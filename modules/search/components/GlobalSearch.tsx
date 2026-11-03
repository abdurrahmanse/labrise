"use client";

import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { Search } from "lucide-react";
import { searchText } from "@/content/text/common";
import { useSearchShortcut } from "../hooks/useSearchShortcut";

/** The dialog and everything it needs (search hook, history, results) load the first time search is opened. */
const loadSearchDialog = () => import("./SearchDialog").then((m) => m.SearchDialog);
const SearchDialog = dynamic(loadSearchDialog, { ssr: false });

/** Header search: a small button and shortcut listener. The dialog itself is lazy-loaded when first opened. */
export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const show = useCallback(() => setOpen(true), []);
  useSearchShortcut(show);

  return (
    <>
      <button
        type="button"
        onClick={show}
        onPointerEnter={() => void loadSearchDialog()}
        onFocus={() => void loadSearchDialog()}
        aria-label={searchText.open}
        className="flex h-9 cursor-pointer items-center gap-2 border-2 border-white/40 bg-white/[0.04] px-2.5 text-slate-300 transition-colors hover:border-indigo-400 hover:text-indigo-300"
      >
        <Search className="h-4 w-4" />
        <kbd className="hidden whitespace-nowrap font-mono text-xs text-slate-400 lg:inline">{searchText.shortcut}</kbd>
      </button>
      {open && <SearchDialog onClosed={() => setOpen(false)} />}
    </>
  );
}

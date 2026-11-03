"use client";

import { Search } from "lucide-react";

export const OPEN_SEARCH_EVENT = "open-directory-search";

/** Opens the global search dialog from anywhere on the page. */
export function OpenSearchButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SEARCH_EVENT))}
      className="inline-flex cursor-pointer items-center gap-2 border-2 border-white/40 bg-white/[0.04] px-5 py-3 font-bold uppercase tracking-wider text-sm text-slate-100 backdrop-blur-md transition-colors hover:border-indigo-400 hover:text-indigo-300"
    >
      <Search className="h-4 w-4" aria-hidden /> {label}
    </button>
  );
}

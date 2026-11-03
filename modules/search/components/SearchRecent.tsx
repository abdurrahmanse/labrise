import { Bookmark, History } from "lucide-react";
import { searchText } from "@/content/text/common";
import { searchDialogText as d } from "@/content/text/library";

interface SearchRecentProps {
  terms: string[];
  onPickTerm: (term: string) => void;
  onClear: () => void;
  onOpenSaved: () => void;
}

/** Shown before anything is typed: the hint, recent searches and a link to saved items. */
export function SearchRecent({ terms, onPickTerm, onClear, onOpenSaved }: SearchRecentProps) {
  return (
    <div className="space-y-4 px-4 py-5">
      <p className="text-center font-sans font-normal text-slate-400">{searchText.hint}</p>
      {terms.length > 0 && (
        <div>
          <div className="mb-2 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-slate-400">
            <span className="inline-flex items-center gap-1.5"><History className="h-4 w-4" aria-hidden /> {d.recentTitle}</span>
            <button type="button" onClick={onClear} className="cursor-pointer hover:text-rose-400">{d.clearRecent}</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {terms.map((term) => (
              <button key={term} type="button" onClick={() => onPickTerm(term)} className="cursor-pointer border-2 border-white/25 px-3 py-1 text-sm font-bold text-slate-200 hover:border-indigo-400">
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
      <button type="button" onClick={onOpenSaved} className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-200">
        <Bookmark className="h-4 w-4" aria-hidden /> {d.saved}
      </button>
    </div>
  );
}

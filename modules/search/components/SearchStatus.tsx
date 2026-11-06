import { TriangleAlert } from "lucide-react";
import { searchText } from "@/content/text/common";
import { searchDialogText as d } from "@/content/text/library";
import { actionLinkClass } from "@/shared/components/linkStyles";

interface SearchStatusProps {
  isError: boolean;
  /** True once the typed text has been searched and no request is running. */
  settled: boolean;
  isEmpty: boolean;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  total: number;
  onRetry: () => void;
  onLoadMore: () => void;
}

/** What sits under the results: "load more", the error with retry, or the "no results" line. */
export function SearchStatus({ isError, settled, isEmpty, hasNextPage, isFetchingNextPage, total, onRetry, onLoadMore }: SearchStatusProps) {
  return (
    <>
      {hasNextPage && (
        <button type="button" onClick={onLoadMore} disabled={isFetchingNextPage} className="w-full cursor-pointer border-t border-white/15 px-4 py-3 text-sm font-bold text-indigo-400 hover:bg-white/[0.06] disabled:opacity-60">
          {isFetchingNextPage ? d.searching : `${d.loadMore} (${d.resultsFor(total)})`}
        </button>
      )}
      {isError && (
        <div className="flex items-center justify-center gap-3 px-4 py-6 text-slate-300">
          <TriangleAlert className="h-5 w-5 text-rose-400" aria-hidden /> {d.failed}
          <button type="button" onClick={onRetry} className={`cursor-pointer ${actionLinkClass}`}>{d.retry}</button>
        </div>
      )}
      {settled && isEmpty && <p className="px-4 py-6 text-center font-sans font-normal text-slate-400">{searchText.empty}</p>}
    </>
  );
}

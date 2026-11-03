import { commonText } from "@/content/text/common";

interface LoadMoreButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

/** "Load more" for lists that fetch their next page on demand. */
export function LoadMoreButton({ onClick, disabled }: LoadMoreButtonProps) {
  return (
    <button type="button" disabled={disabled} onClick={onClick} className="cursor-pointer border-2 border-white/40 px-5 py-3 text-sm font-bold uppercase tracking-wider text-slate-100 hover:border-indigo-400 hover:text-indigo-300 disabled:opacity-50">
      {commonText.states.loadMore}
    </button>
  );
}

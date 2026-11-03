import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  pages: number;
  onChange: (page: number) => void;
}

const pageButton =
  "h-9 min-w-9 px-3 text-sm font-bold cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-colors";

/** Compact page list: first, last and the pages around the current one. */
function visiblePages(page: number, pages: number) {
  const set = new Set([1, pages, page - 1, page, page + 1]);
  return [...set].filter((p) => p >= 1 && p <= pages).sort((a, b) => a - b);
}

export function Pagination({ page, pages, onChange }: PaginationProps) {
  if (pages <= 1) return null;
  const list = visiblePages(page, pages);

  return (
    <nav aria-label="Pagination" className="flex flex-wrap items-center justify-center gap-2">
      <button type="button" aria-label="Previous page" disabled={page === 1} onClick={() => onChange(page - 1)} className={`${pageButton} bg-white/[0.05] text-slate-200 hover:bg-white/10`}>
        <ChevronLeft className="w-4 h-4" />
      </button>
      {list.map((p, i) => (
        <span key={p} className="flex items-center gap-2">
          {i > 0 && p - list[i - 1] > 1 && <span className="text-slate-500">…</span>}
          <button
            type="button"
            aria-current={p === page ? "page" : undefined}
            onClick={() => onChange(p)}
            className={`${pageButton} ${p === page ? "bg-indigo-600 text-white" : "bg-white/[0.05] text-slate-200 hover:bg-white/10"}`}
          >
            {p}
          </button>
        </span>
      ))}
      <button type="button" aria-label="Next page" disabled={page === pages} onClick={() => onChange(page + 1)} className={`${pageButton} bg-white/[0.05] text-slate-200 hover:bg-white/10`}>
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}

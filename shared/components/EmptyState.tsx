import type { ReactNode } from "react";
import { SearchX } from "lucide-react";

interface EmptyStateProps {
  title: string;
  hint?: string;
  /** Optional action, such as a clear-filters button. */
  action?: ReactNode;
}

/** Shown when a search or filter returns nothing. */
export function EmptyState({ title, hint, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-3 border-2 border-dashed border-white/30 bg-white/[0.03] px-6 py-12 text-center">
      <span className="flex h-14 w-14 items-center justify-center bg-indigo-600 text-white shadow-[3px_3px_0_0_rgba(15,23,42,0.2)]">
        <SearchX className="h-7 w-7" aria-hidden />
      </span>
      <p className="text-xl font-bold text-white">{title}</p>
      {hint && <p className="max-w-md font-sans font-normal text-slate-400">{hint}</p>}
      {action}
    </div>
  );
}

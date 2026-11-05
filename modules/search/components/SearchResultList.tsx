import { searchText } from "@/content/text/common";
import { cn } from "@/shared/utils/cn";
import type { SearchResult } from "../types";
import { KindIcon } from "./KindIcon";

interface SearchResultListProps {
  listId: string;
  items: SearchResult[];
  active: number;
  onHover: (index: number) => void;
  onPick: (href: string) => void;
}

/** The listbox of results. Which one is highlighted and what happens on pick is decided by the caller. */
export function SearchResultList({ listId, items, active, onHover, onPick }: SearchResultListProps) {
  return (
    <ul id={listId} role="listbox" className="max-h-[55vh] overflow-y-auto">
      {items.map((entry, i) => (
        <li
          key={entry.href}
          id={`${listId}-${i}`}
          role="option"
          aria-selected={i === active}
          onMouseMove={() => onHover(i)}
          onClick={() => onPick(entry.href)}
          className={cn("flex cursor-pointer items-center justify-between gap-3 px-4 py-2.5", i === active ? "bg-indigo-600 text-white" : "hover:bg-white/[0.06]")}
        >
          <span className="min-w-0">
            <span className="block truncate font-bold">{entry.title}</span>
            <span className={cn("block truncate font-sans text-sm font-normal", i === active ? "opacity-80" : "text-slate-400")}>{entry.subtitle}</span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs uppercase tracking-wider opacity-80">
            <KindIcon kind={entry.kind} />
            {searchText.kinds[entry.kind]}
          </span>
        </li>
      ))}
    </ul>
  );
}

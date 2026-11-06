import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { commonText } from "@/content/text/common";

export interface ChipItem {
  href: string;
  label: string;
  meta?: string;
}

export function Chips({ items }: { items: ChipItem[] }) {
  if (items.length === 0) return <p className="text-slate-400">{commonText.states.none}</p>;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group inline-flex items-center gap-1.5 border-2 border-indigo-400/40 bg-white/[0.04] backdrop-blur-md px-3 py-1.5 text-sm font-bold text-slate-100 hover:bg-[var(--hover-bg)] hover:text-[var(--hover-fg)] hover:border-[var(--hover-line)]"
        >
          {item.label}
          {item.meta && <span className="ml-1 font-mono text-xs opacity-70">{item.meta}</span>}
          <ArrowUpRight aria-hidden className="h-3.5 w-3.5 shrink-0" />
        </Link>
      ))}
    </div>
  );
}

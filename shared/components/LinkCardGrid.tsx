import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { IconTile } from "./IconTile";

export interface LinkCardItem {
  href: string;
  title: string;
  meta?: string;
  index?: string;
  icon?: LucideIcon;
}

interface LinkCardGridProps {
  items: LinkCardItem[];
  columns?: string;
}

export function LinkCardGrid({ items, columns = "md:grid-cols-2 lg:grid-cols-3" }: LinkCardGridProps) {
  return (
    <div className={`grid gap-4 ${columns}`}>
      {items.map((it) => (
        <Link
          key={it.href}
          href={it.href}
          className="group flex items-center justify-between gap-4 border-2 border-white/30 bg-canvas-card/60 backdrop-blur-xl p-5 shadow-[4px_4px_0_0_rgba(15,23,42,0.18)] transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:border-indigo-400 hover:shadow-[7px_7px_0_0_rgba(58,95,224,0.4)]"
        >
          <div className="flex items-center gap-4 min-w-0">
            {it.icon && <IconTile icon={it.icon} />}
            {!it.icon && it.index && <span className="bg-indigo-600 text-white font-mono font-bold px-2 py-0.5">{it.index}</span>}
            <div className="min-w-0">
              <div className="text-xl font-bold text-white">{it.title}</div>
              {it.meta && <div className="font-mono text-xs text-slate-400">{it.meta}</div>}
            </div>
          </div>
          <ArrowRight className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-indigo-400" />
        </Link>
      ))}
    </div>
  );
}

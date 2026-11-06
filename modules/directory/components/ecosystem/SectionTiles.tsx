import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { surface } from "@/shared/components/Surface";

export interface SectionTile {
  href: string;
  label: string;
  hint?: string;
  count?: number;
  Icon: LucideIcon;
}

/** Entry points to the smaller pages of one entry. Each tile says what is inside and how much. */
export function SectionTiles({ tiles }: { tiles: SectionTile[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {tiles.map(({ href, label, hint, count, Icon }) => (
        <Link
          key={href}
          href={href}
          className={surface({ tone: "glass", depth: "soft", padding: "lg", className: "group flex flex-col gap-1 transition-all hover:-translate-y-1 hover:border-indigo-400 hover:shadow-[6px_6px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)]" })}
        >
          <Icon className="mb-2 h-6 w-6 text-indigo-400" />
          {count !== undefined && <div className="text-3xl font-bold text-white">{count}</div>}
          <div className="font-mono text-xs uppercase tracking-wider text-slate-200">{label}</div>
          {hint && <div className="font-sans text-sm font-normal text-slate-400">{hint}</div>}
          <div className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-300 group-hover:text-white">Open <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></div>
        </Link>
      ))}
    </div>
  );
}

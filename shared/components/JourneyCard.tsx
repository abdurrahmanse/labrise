import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { hubChrome, type JourneyItem } from "@/content/text/hubPages";
import { ContourPattern } from "../illustrations/ContourPattern";
import { IconBadge } from "@/shared/components/IconBadge";
import { surface } from "@/shared/components/Surface";

interface JourneyCardProps {
  item: JourneyItem;
  index: number;
  badge?: ReactNode;
}

/** One big numbered card on a hub page. */
export function JourneyCard({ item: { href, title, body, points, Icon }, index: i, badge }: JourneyCardProps) {
  return (
      <Link
        href={href}
        className={surface({ tone: "panel", depth: "none", padding: "xl", className: "group relative flex h-full gap-5 overflow-hidden shadow-[5px_5px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:border-indigo-400 hover:shadow-[8px_8px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)]" })}
      >
        <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-600 to-cyan-400" />
        {i === 0 && <ContourPattern className="absolute -right-10 -top-4 hidden h-48 w-80 opacity-40 md:block" />}
        <span className="pointer-events-none absolute -bottom-6 right-4 select-none text-8xl font-bold text-white/[0.05]">{String(i + 1).padStart(2, "0")}</span>
        <IconBadge icon={Icon} size="xl" />
        <span className="relative min-w-0 flex-1 space-y-2">
          <span className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-indigo-300">{i === 0 ? hubChrome.start : String(i + 1).padStart(2, "0")}</span>
            {badge}
          </span>
          <span className="block text-2xl font-bold text-white">{title}</span>
          <span className="block font-sans text-[length:var(--text-body)] font-normal text-slate-300">{body}</span>
          <span className="flex flex-wrap gap-2 pt-1">
            {points.map((p) => (
              <span key={p} className="border border-white/25 bg-white/[0.04] px-2.5 py-0.5 font-mono text-xs text-slate-200">{p}</span>
            ))}
          </span>
          <span className="inline-flex items-center gap-1.5 pt-2 text-sm font-bold text-indigo-400 group-hover:text-indigo-200">
            {hubChrome.open} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </span>
        </span>
      </Link>
  );
}

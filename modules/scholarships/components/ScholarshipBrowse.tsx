"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { finderText as t } from "@/data/text/scholarships";
import { cn } from "@/lib/utils";
import { ScholarshipCard } from "@/modules/directory/components/cards/ScholarshipCard";
import { scholarships } from "@/modules/directory/data";
import { EmptyState } from "@/shared/components/EmptyState";

const LEVELS = ["All", ...Array.from(new Set(scholarships.map((s) => s.level)))];

export function ScholarshipBrowse({ limit }: { limit?: number } = {}) {
  const [level, setLevel] = useState("All");
  const matches = scholarships.filter((s) => level === "All" || s.level === level);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="group" aria-label={t.browse.levelLabel} className="flex flex-wrap gap-2">
          {LEVELS.map((l) => (
            <button key={l} type="button" aria-pressed={level === l} onClick={() => setLevel(l)} className={cn("cursor-pointer px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors", level === l ? "bg-indigo-600 text-white" : "bg-white/[0.05] text-slate-200 hover:bg-white/10")}>
              {l === "All" ? t.browse.all : l}
            </button>
          ))}
        </div>
        <span className="font-mono text-xs text-slate-400">{t.browse.shown(Math.min(limit ?? matches.length, matches.length))}</span>
      </div>

      {matches.length === 0 ? (
        <EmptyState title={t.browse.empty} />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {matches.slice(0, limit).map((s) => (
            <ScholarshipCard key={s.name} scholarship={s} />
          ))}
        </div>
      )}

      <Link href="/directory/scholarships" className="inline-flex items-center gap-2 border-2 border-white/40 bg-white/[0.04] px-5 py-3 font-bold uppercase tracking-wider text-sm text-slate-100 hover:border-indigo-400 hover:text-indigo-300">
        {t.browse.more} <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { Table, ArrowRight, ShieldAlert, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { roadmapLevelsComparisonData, roadmapLevelsData } from "@/data/levelsData";
import { legacyText } from "@/data/text/legacy";

export function LevelsComparisonMatrix() {
  return (
    <section id="levels-matrix" className="py-20 border-b border-white/10 bg-canvas-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={legacyText.levelsComparisonMatrix.t1}
          badgeVariant="cyan"
          badgeIcon={<Table className="w-3.5 h-3.5 text-cyan-400" />}
          title={legacyText.levelsComparisonMatrix.t2}
          subtitle={legacyText.levelsComparisonMatrix.t3}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {roadmapLevelsComparisonData.map((row, idx) => {
            const levelObj = roadmapLevelsData[idx];
            return (
              <article key={row.level} className="flex flex-col gap-3 bg-canvas-card/70 backdrop-blur-xl p-5 shadow-[4px_4px_0_0_rgba(15,23,42,0.12)]">
                <div className="flex items-center justify-between gap-3">
                  <span className="bg-indigo-600 px-2 py-0.5 font-mono text-xs font-bold text-white">{row.level}</span>
                  <span className="font-mono text-xs text-slate-400">{row.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{row.title}</h3>
                <p className="text-slate-300">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-400">{legacyText.levelsComparisonMatrix.t0} </span>
                  <span className="font-bold text-cyan-300">{row.primaryGatekeeper}</span>
                </p>
                <p className="flex items-start gap-2 text-emerald-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{row.keyDeliverable}</span>
                </p>
                <p className="flex items-start gap-2 text-rose-300">
                  <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                  <span>{row.riskFactor}</span>
                </p>
                {levelObj && (
                  <Link href={`/roadmap/${levelObj.slug}`} className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-bold text-indigo-400 hover:text-indigo-200">
                    Open level <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

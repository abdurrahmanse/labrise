"use client";

import React from "react";
import Link from "next/link";
import { Table, ArrowRight, ShieldAlert, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { roadmapLevelsComparisonData, roadmapLevelsData } from "@/data/levelsData";

export function LevelsComparisonMatrix() {
  return (
    <section id="levels-matrix" className="py-20 border-b border-white/10 bg-canvas-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Admissions Blueprint"
          badgeVariant="cyan"
          badgeIcon={<Table className="w-3.5 h-3.5 text-cyan-400" />}
          title="The 5-Level Strategy & Evaluation Matrix"
          subtitle="Compare the time horizons, target evaluation gatekeepers, critical proof-of-work deliverables, and primary rejection risks across all 5 levels."
        />

        {/* Mobile Swipe Hint */}
        <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-end gap-1 md:hidden">
          <span>Scroll table horizontally &rarr;</span>
        </div>

        <div className="bg-canvas-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-xs text-slate-300">
              <thead className="bg-canvas-base text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-white/10">
                <tr>
                  <th className="py-4 px-6">Curriculum Level</th>
                  <th className="py-4 px-6">Timeline</th>
                  <th className="py-4 px-6">Primary Gatekeeper</th>
                  <th className="py-4 px-6">Non-Negotiable Proof-of-Work</th>
                  <th className="py-4 px-6">Primary Rejection Risk</th>
                  <th className="py-4 px-6 text-right">Deep Dive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                {roadmapLevelsComparisonData.map((row, idx) => {
                  const levelObj = roadmapLevelsData[idx];
                  return (
                    <tr key={row.level} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-bold text-white">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/40 font-bold">
                            {row.level}
                          </span>
                          <span className="font-heading font-semibold text-slate-200">{row.title}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-mono text-slate-400">
                        {row.duration}
                      </td>
                      <td className="py-4 px-6 text-cyan-300 font-medium">
                        {row.primaryGatekeeper}
                      </td>
                      <td className="py-4 px-6 text-emerald-300 font-medium flex items-center gap-1.5 mt-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{row.keyDeliverable}</span>
                      </td>
                      <td className="py-4 px-6 text-rose-300 font-mono text-[11px]">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-rose-950/40 border border-rose-800/40">
                          <ShieldAlert className="w-3 h-3 text-rose-400 shrink-0" />
                          {row.riskFactor}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        {levelObj && (
                          <Link
                            href={`/roadmap/${levelObj.slug}`}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group cursor-pointer"
                          >
                            <span>Open</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

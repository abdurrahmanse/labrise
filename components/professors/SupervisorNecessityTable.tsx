"use client";

import React from "react";
import { Globe2 } from "lucide-react";
import { supervisorNecessityByCountry, professorOutreachControlsData } from "@/data/professorsData";

export function SupervisorNecessityTable() {
  const { necessityTitle, necessitySubtitle } = professorOutreachControlsData.sections;

  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
          <Globe2 className="w-4 h-4" />
          <span>Global Institutional Norms</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {necessityTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          {necessitySubtitle}
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60 shadow-xl">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-white/10 bg-slate-950/80 font-mono text-slate-400 text-[11px] uppercase">
              <th className="p-4">Country / Region</th>
              <th className="p-4">Degree Scope</th>
              <th className="p-4">Necessity Status</th>
              <th className="p-4">Academic Rationale</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {supervisorNecessityByCountry.map((rule, idx) => {
              const isStrict = rule.necessity.includes("Strictly");
              const isRecommended = rule.necessity === "Recommended";

              return (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-bold text-white whitespace-nowrap">{rule.country}</td>
                  <td className="p-4 font-mono text-slate-300 whitespace-nowrap">{rule.degreeLevel}</td>
                  <td className="p-4 whitespace-nowrap">
                    <span
                      className={`px-2.5 py-1 rounded-none text-[10px] font-mono font-bold uppercase border ${
                        isStrict
                          ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                          : isRecommended
                          ? "bg-teal-500/20 text-teal-300 border-teal-500/30"
                          : "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                      }`}
                    >
                      {rule.necessity}
                    </span>
                  </td>
                  <td className="p-4 text-slate-300 leading-relaxed max-w-md">{rule.rationale}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SupervisorNecessityTable;

"use client";

import React from "react";
import { Globe2 } from "lucide-react";
import { supervisorNecessityByCountry, professorOutreachControlsData } from "@/data/professorsData";
import { legacyText } from "@/data/text/legacy";

export function SupervisorNecessityTable() {
  const { necessityTitle, necessitySubtitle } = professorOutreachControlsData.sections;

  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
          <Globe2 className="w-4 h-4" />
          <span>{legacyText.supervisorNecessityTable.t0}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {necessityTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          {necessitySubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {supervisorNecessityByCountry.map((rule, idx) => {
          const isStrict = rule.necessity.includes("Strictly");
          const isRecommended = rule.necessity === "Recommended";

          return (
            <article key={idx} className="flex flex-col gap-3 bg-canvas-card/70 backdrop-blur-xl p-5 shadow-[4px_4px_0_0_rgba(15,23,42,0.12)]">
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-xl font-bold text-white">{rule.country}</h4>
                <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-slate-400">{rule.degreeLevel}</span>
              </div>
              <span
                className={`w-fit px-2.5 py-1 font-mono text-[11px] font-bold uppercase ${
                  isStrict
                    ? "bg-amber-500/20 text-amber-300"
                    : isRecommended
                    ? "bg-teal-500/20 text-teal-300"
                    : "bg-indigo-500/20 text-indigo-300"
                }`}
              >
                {rule.necessity}
              </span>
              <p className="text-slate-300 leading-relaxed">{rule.rationale}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default SupervisorNecessityTable;

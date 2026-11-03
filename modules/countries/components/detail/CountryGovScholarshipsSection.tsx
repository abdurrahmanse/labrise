import React from "react";
import { Award, CheckCircle2, ExternalLink } from "lucide-react";
import type { CountryGuide } from "@/modules/content";
import { CountryDetailSectionTitle } from "./CountryDetailSectionTitle";
import { legacyText } from "@/content/text/legacy";

interface CountryGovScholarshipsSectionProps {
  scholarships: CountryGuide["governmentScholarships"];
  universityScholarships?: string;
}

export function CountryGovScholarshipsSection({
  scholarships,
  universityScholarships,
}: CountryGovScholarshipsSectionProps) {
  if (!scholarships || scholarships.length === 0) return null;

  return (
    <section id="gov-scholarships" className="scroll-mt-24">
      <CountryDetailSectionTitle
        icon={<Award className="w-5 h-5" />}
        title={legacyText.countryGovScholarshipsSection.t3}
        color="emerald"
      />
      <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {scholarships.map((sch, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-emerald-500/20 flex flex-col justify-between space-y-4 shadow-lg hover:border-emerald-500/40 transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <h3 className="text-sm font-bold text-white leading-snug">{sch.name}</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                  {sch.degreeLevel}
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">{sch.description}</p>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-teal-500/10 border border-teal-500/20">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <p className="text-xs text-teal-200 font-mono leading-relaxed">
                  <strong>{legacyText.countryGovScholarshipsSection.t0}</strong> {sch.coverage}
                </p>
              </div>
            </div>
            <a
              href={sch.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors border-t border-white/5 pt-3 mt-auto group"
            >
              <span>{legacyText.countryGovScholarshipsSection.t1}</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        ))}
      </div>

      {universityScholarships && (
        <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-white/5">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
            {legacyText.countryGovScholarshipsSection.t2}
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">{universityScholarships}</p>
        </div>
      )}
    </section>
  );
}

export default CountryGovScholarshipsSection;

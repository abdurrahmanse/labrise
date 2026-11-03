"use client";

import React from "react";
import { BookOpen, Clock } from "lucide-react";
import { CountryDetailSectionTitle } from "./CountryDetailSectionTitle";
import { legacyText } from "@/data/text/legacy";

interface CountryLanguageDeadlinesSectionProps {
  languageRequirements: string;
  typicalApplicationDeadlines: string;
}

export function CountryLanguageDeadlinesSection({
  languageRequirements,
  typicalApplicationDeadlines,
}: CountryLanguageDeadlinesSectionProps) {
  return (
    <section id="language" className="scroll-mt-24">
      <CountryDetailSectionTitle
        icon={<BookOpen className="w-5 h-5" />}
        title={legacyText.countryLanguageDeadlinesSection.t2}
        color="teal"
      />
      <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            {legacyText.countryLanguageDeadlinesSection.t0}
          </p>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            {languageRequirements}
          </p>
        </div>
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            <Clock className="w-3.5 h-3.5 text-teal-400" />
            <span>{legacyText.countryLanguageDeadlinesSection.t1}</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            {typicalApplicationDeadlines}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CountryLanguageDeadlinesSection;

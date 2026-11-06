import React from "react";
import { ChevronRight } from "lucide-react";
import { CountryDetailSectionTitle } from "./CountryDetailSectionTitle";
import { legacyText } from "@/content/text/legacy";

interface CountrySequenceSectionProps {
  steps: string[];
}

export function CountrySequenceSection({ steps }: CountrySequenceSectionProps) {
  return (
    <section id="sequence" className="scroll-mt-24">
      <CountryDetailSectionTitle
        icon={<ChevronRight className="w-5 h-5" />}
        title={legacyText.countrySequenceSection.t0}
        color="teal"
      />
      <div className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-teal-500/20 transition-all"
          >
            <span className="w-7 h-7 rounded-xl bg-teal-500/20 text-teal-300 font-mono font-bold flex items-center justify-center shrink-0 text-xs border border-teal-500/20 mt-0.5">
              {idx + 1}
            </span>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CountrySequenceSection;

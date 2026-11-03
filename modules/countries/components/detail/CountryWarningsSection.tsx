import React from "react";
import { AlertTriangle } from "lucide-react";
import { CountryDetailSectionTitle } from "./CountryDetailSectionTitle";
import { legacyText } from "@/data/text/legacy";

interface CountryWarningsSectionProps {
  limitations: string[];
}

export function CountryWarningsSection({
  limitations,
}: CountryWarningsSectionProps) {
  if (!limitations || limitations.length === 0) return null;

  return (
    <section id="warnings" className="scroll-mt-24">
      <CountryDetailSectionTitle
        icon={<AlertTriangle className="w-5 h-5" />}
        title={legacyText.countryWarningsSection.t0}
        color="amber"
      />
      <div className="mt-5 sm:mt-6 p-5 sm:p-6 rounded-2xl bg-amber-950/20 border border-amber-500/20 space-y-3 shadow-lg">
        {limitations.map((lim, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-300 leading-relaxed font-sans">{lim}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CountryWarningsSection;

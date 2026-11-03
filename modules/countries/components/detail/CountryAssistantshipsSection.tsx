import React from "react";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { CountryDetailSectionTitle } from "./CountryDetailSectionTitle";
import { legacyText } from "@/content/text/legacy";

interface CountryAssistantshipsSectionProps {
  available: boolean;
  detail: string;
}

export function CountryAssistantshipsSection({
  available,
  detail,
}: CountryAssistantshipsSectionProps) {
  if (!available) return null;

  return (
    <section id="assistantships" className="scroll-mt-24">
      <CountryDetailSectionTitle
        icon={<Briefcase className="w-5 h-5" />}
        title={legacyText.countryAssistantshipsSection.t0}
        color="emerald"
      />
      <div className="mt-5 sm:mt-6 p-5 sm:p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 shadow-lg">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-300 leading-relaxed font-sans">{detail}</p>
        </div>
      </div>
    </section>
  );
}

export default CountryAssistantshipsSection;

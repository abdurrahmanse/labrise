import React from "react";
import { Users } from "lucide-react";
import type { CountryGuide } from "@/modules/content";
import { CountryDetailSectionTitle } from "./CountryDetailSectionTitle";
import { SupervisorBadge } from "./SupervisorBadge";
import { legacyText } from "@/content/text/legacy";

interface CountrySupervisorSectionProps {
  requirement: CountryGuide["supervisorContactRequirement"];
  notes: string;
}

export function CountrySupervisorSection({
  requirement,
  notes,
}: CountrySupervisorSectionProps) {
  return (
    <section id="supervisor" className="scroll-mt-24">
      <CountryDetailSectionTitle
        icon={<Users className="w-5 h-5" />}
        title={legacyText.countrySupervisorSection.t1}
        color="amber"
      />
      <div className="mt-5 sm:mt-6 p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-4 shadow-lg">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-mono text-slate-400">{legacyText.countrySupervisorSection.t0}</span>
          <SupervisorBadge requirement={requirement} />
        </div>
        <p className="text-sm text-slate-300 leading-relaxed font-sans">{notes}</p>
      </div>
    </section>
  );
}

export default CountrySupervisorSection;

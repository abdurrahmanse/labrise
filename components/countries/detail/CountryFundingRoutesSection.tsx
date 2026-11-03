"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { CountryDetailSectionTitle } from "./CountryDetailSectionTitle";
import { legacyText } from "@/data/text/legacy";

interface CountryFundingRoutesSectionProps {
  routes: string[];
}

export function CountryFundingRoutesSection({
  routes,
}: CountryFundingRoutesSectionProps) {
  return (
    <section id="funding-routes" className="scroll-mt-24">
      <CountryDetailSectionTitle
        icon={<CheckCircle2 className="w-5 h-5" />}
        title={legacyText.countryFundingRoutesSection.t0}
        color="teal"
      />
      <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {routes.map((route, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-teal-500/30 hover:bg-slate-900/90 transition-all flex items-start gap-3"
          >
            <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold font-mono border border-teal-500/30">
              {idx + 1}
            </span>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">{route}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CountryFundingRoutesSection;

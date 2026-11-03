import React from "react";
import { ExternalLink, Globe } from "lucide-react";
import type { CountryGuide } from "@/modules/content";
import { CountryDetailSectionTitle } from "./CountryDetailSectionTitle";
import { legacyText } from "@/content/text/legacy";

interface CountryPortalsSectionProps {
  portals: CountryGuide["officialPortals"];
}

export function CountryPortalsSection({ portals }: CountryPortalsSectionProps) {
  if (!portals || portals.length === 0) return null;

  return (
    <section id="portals" className="scroll-mt-24">
      <CountryDetailSectionTitle
        icon={<Globe className="w-5 h-5" />}
        title={legacyText.countryPortalsSection.t1}
        color="indigo"
      />
      <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {portals.map((portal, idx) => (
          <a
            key={idx}
            href={portal.url}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-indigo-500/40 hover:bg-slate-900/90 transition-all group flex flex-col justify-between gap-3 shadow-lg"
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                  {portal.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-indigo-400 opacity-60 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {portal.description}
              </p>
            </div>
            <span className="text-[11px] font-mono text-indigo-400/80 group-hover:text-indigo-300 flex items-center gap-1 pt-2 border-t border-white/5">
              <span>{legacyText.countryPortalsSection.t0}</span>
              <span>&rarr;</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CountryPortalsSection;

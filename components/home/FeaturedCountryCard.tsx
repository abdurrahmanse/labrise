import React from "react";
import Link from "next/link";
import { ArrowRight, Users, GraduationCap, Globe2, Compass } from "lucide-react";
import { CountryGuide } from "@/data/countryGuidesData";
import { legacyText } from "@/data/text/legacy";

export interface FeaturedCountryCardProps {
  country: CountryGuide;
}

export function FeaturedCountryCard({ country }: FeaturedCountryCardProps) {
  const isStrictSupervisor = country.supervisorContactRequirement.includes("Strictly");

  return (
    <Link
      href={`/countries/${country.id}`}
      className="p-6 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-teal-500/40 hover:bg-slate-900/90 transition-all duration-200 flex flex-col justify-between group shadow-lg"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{country.flag}</span>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                {country.name}
              </h3>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
                <Globe2 className="w-3 h-3 text-teal-400/70" />
                <span>{country.region}</span>
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-none bg-white/5 border border-white/10 text-slate-300">
            {country.code}
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
          {country.headline}
        </p>

        <div className="space-y-2 text-[11px] text-slate-400 mb-4 pt-3 border-t border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Users className="w-3 h-3 text-slate-300" />
            </div>
            <strong className="text-slate-300">{legacyText.featuredCountryCard.t0}</strong>
            <span className={isStrictSupervisor ? "text-amber-400" : "text-teal-400"}>
              {country.supervisorContactRequirement}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-3 h-3 text-slate-300" />
            </div>
            <strong className="text-slate-300">{legacyText.featuredCountryCard.t1}</strong>
            <span className="text-slate-400 truncate">{country.phdFundingModel.split(".")[0]}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-teal-400 font-semibold group-hover:text-teal-300">
        <span className="inline-flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5" />
          <span>{legacyText.featuredCountryCard.t2}</span>
        </span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

export default FeaturedCountryCard;

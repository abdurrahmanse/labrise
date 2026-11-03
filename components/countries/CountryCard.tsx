import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight, Users, Award, Briefcase, Globe2, BookOpen, Coins } from "lucide-react";
import { CountryGuide } from "@/data/countryGuidesData";
import { countryGuidesUiData } from "@/data/countryGuidesUiData";

export interface CountryCardProps {
  country: CountryGuide;
}

export function CountryCard({ country }: CountryCardProps) {
  const isStrict = country.supervisorContactRequirement.includes("Strictly");
  const isCentralized = country.supervisorContactRequirement.includes("Centralized");
  const supervisorColor = isStrict
    ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
    : isCentralized
    ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/40"
    : "bg-teal-500/20 text-teal-300 border-teal-500/40";

  const { card } = countryGuidesUiData;

  return (
    <div className="group rounded-2xl border border-white/[0.07] bg-slate-900/50 hover:border-white/15 hover:bg-slate-900/80 transition-all duration-300 overflow-hidden">
      <div className="p-6 sm:p-7 flex flex-col md:flex-row md:items-start gap-5">
        {/* Flag */}
        <span className="text-4xl sm:text-5xl p-3 rounded-2xl bg-slate-950 border border-white/5 shrink-0 self-start">
          {country.flag}
        </span>

        {/* Main content */}
        <div className="flex-1 min-w-0 space-y-3">
          {/* Country name + region */}
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {country.name}
            </h3>
            <span className="inline-flex items-center gap-1 text-xs font-mono font-medium px-2 py-0.5 rounded-none bg-white/5 border border-white/10 text-slate-300">
              <Globe2 className="w-3 h-3 text-teal-400/80" />
              <span>{country.region} · {country.code}</span>
            </span>
          </div>

          {/* Headline */}
          <p className="text-sm text-slate-300 leading-relaxed">
            {country.headline}
          </p>

          {/* Funding routes preview */}
          <div className="flex flex-wrap gap-2 pt-1">
            {country.commonFundingRoutes.slice(0, 3).map((route, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-800/80 border border-white/5 text-slate-300 truncate max-w-[220px]"
              >
                <Coins className="w-2.5 h-2.5 text-teal-400 shrink-0" />
                <span>{route.length > 45 ? route.slice(0, 45) + "…" : route}</span>
              </span>
            ))}
            {country.commonFundingRoutes.length > 3 && (
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-800/80 border border-white/5 text-slate-500">
                +{country.commonFundingRoutes.length - 3} {card.moreRoutesSuffix}
              </span>
            )}
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <span
              className={`inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-none border ${supervisorColor}`}
            >
              <Users className="w-3 h-3 shrink-0" />
              <span>{country.supervisorContactRequirement}</span>
            </span>
            {country.governmentScholarships.length > 0 && (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400">
                <Award className="w-3 h-3 text-amber-400 shrink-0" />
                <span>
                  {country.governmentScholarships.length}{" "}
                  {country.governmentScholarships.length !== 1
                    ? card.govtScholarshipPlural
                    : card.govtScholarshipSingular}
                </span>
              </span>
            )}
            {country.assistantshipsAvailable && (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded-none bg-emerald-500/10 border border-emerald-500/20">
                <Briefcase className="w-3 h-3 shrink-0" />
                <span>{card.assistantshipsBadge}</span>
              </span>
            )}
          </div>
        </div>

        {/* CTA / Quick portal links */}
        <div className="flex flex-col gap-3 shrink-0 self-start md:self-center items-end">
          <Link
            href={`/countries/${country.id}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold transition-colors group/btn shadow-md"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{card.fullGuideCta}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>

          {country.officialPortals[0] && (
            <a
              href={country.officialPortals[0].url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-teal-300 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              {country.officialPortals[0].name}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryCard;

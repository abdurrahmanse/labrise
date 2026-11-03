import React from "react";
import Link from "next/link";
import { ArrowLeft, Award, Briefcase, Globe, MapPin } from "lucide-react";
import { CountryGuide } from "@/data/countryGuidesData";
import { SupervisorBadge } from "./SupervisorBadge";
import { legacyText } from "@/data/text/legacy";

interface CountryHeroSectionProps {
  country: CountryGuide;
}

export function CountryHeroSection({ country }: CountryHeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-canvas-base">
      {/* 0. Top Glowing Horizon Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent pointer-events-none" />

      {/* 1. Overhead Radial Spotlight Beam */}
      <div
        className="absolute top-0 inset-x-0 h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 60% at 50% -15%, rgba(58, 95, 224, 0.1) 0%, rgba(255, 255, 255, 0.04) 45%, transparent 75%)",
        }}
      />

      {/* 2. Delicate Micro-Grid Pattern with Radial Mask Fade */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 20%, #000 30%, transparent 85%)",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 20%, #000 30%, transparent 85%)",
        }}
      />

      {/* 3. Floating Aurora Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-16 w-80 sm:w-[420px] h-80 sm:h-[420px] bg-indigo-600/20 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-8 -right-16 w-96 sm:w-[480px] h-96 sm:h-[480px] bg-teal-500/18 blur-[110px] pointer-events-none rounded-full" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(650px,90vw)] h-[220px] bg-cyan-400/10 blur-[85px] pointer-events-none rounded-full" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20 relative z-10">
        {/* Back Link */}
        <Link
          href="/countries"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-slate-900/80 border border-white/10 hover:border-teal-400/50 text-xs font-mono text-slate-300 hover:text-white transition-all mb-6 sm:mb-8 backdrop-blur-md shadow-md group"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-teal-400 group-hover:-translate-x-0.5 transition-transform" />
          <span>{legacyText.countryHeroSection.t0}</span>
        </Link>

        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          <div className="flex-1 space-y-4 sm:space-y-5">
            {/* Region & Code Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-slate-900/80 border border-indigo-500/40 text-indigo-300 text-[11px] font-mono font-medium shadow-[3px_3px_0_0_rgba(58,95,224,0.35)] backdrop-blur-md">
              <MapPin className="w-3 h-3 text-indigo-400" />
              <span>
                {country.region} · {country.code}
              </span>
            </div>

            {/* Country Title + Flag */}
            <div className="flex items-center gap-4 sm:gap-5">
              <span
                className="text-5xl sm:text-6xl md:text-7xl shrink-0 p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.1] to-white/[0.02] border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/40"
                aria-label={`${country.name} flag`}
              >
                {country.flag}
              </span>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  {country.name}
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
                  {legacyText.countryHeroSection.t1}
                </p>
              </div>
            </div>

            {/* Headline */}
            <p className="text-sm sm:text-base md:text-lg text-teal-200 font-medium leading-relaxed max-w-2xl">
              {country.headline}
            </p>

            {/* Supervisor Rule Banner */}
            <div className="flex items-center gap-3 flex-wrap pt-1">
              <span className="text-xs font-mono text-slate-400">{legacyText.countryHeroSection.t2}</span>
              <SupervisorBadge requirement={country.supervisorContactRequirement} />
            </div>

            {/* Highlights Ribbons */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
              {country.assistantshipsAvailable && (
                <div className="flex items-center gap-2 text-xs text-emerald-300 bg-gradient-to-b from-emerald-500/15 to-emerald-500/5 border border-emerald-500/25 px-3.5 py-2 rounded-xl font-mono backdrop-blur-sm shadow-md">
                  <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{legacyText.countryHeroSection.t3}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-xs text-indigo-300 bg-gradient-to-b from-indigo-500/15 to-indigo-500/5 border border-indigo-500/25 px-3.5 py-2 rounded-xl font-mono backdrop-blur-sm shadow-md">
                <Award className="w-3.5 h-3.5 text-indigo-400" />
                <span>
                  {country.governmentScholarships.length} Gov&apos;t Scholarship
                  {country.governmentScholarships.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-teal-300 bg-gradient-to-b from-teal-500/15 to-teal-500/5 border border-teal-500/25 px-3.5 py-2 rounded-xl font-mono backdrop-blur-sm shadow-md">
                <Globe className="w-3.5 h-3.5 text-teal-400" />
                <span>
                  {country.officialPortals.length} Official Portal
                  {country.officialPortals.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>

          {/* Table of contents Jump Nav (Desktop / Laptop View) */}
        </div>
      </div>
    </section>
  );
}

export default CountryHeroSection;

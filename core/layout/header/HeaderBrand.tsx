import React from "react";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { headerData } from "@/content/site/navigationData";
import { commonText } from "@/content/text/common";

export function HeaderBrand() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
      aria-label={commonText.brand.homeLabel}
    >
      {/* Sleek Logo Icon */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 group-hover:shadow-indigo-500/35 transition-all duration-200 shrink-0 border border-white/20">
        <GraduationCap className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
      </div>

      {/* Modern Typographic Wordmark */}
      <div className="flex items-baseline gap-1.5 max-[380px]:hidden">
        <span className="font-heading font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-slate-100 transition-colors">
          {headerData.brand.primary}
          <span className="text-teal-400 ml-1">
            {headerData.brand.secondary}
          </span>
        </span>
        <span className="hidden 2xl:inline-block text-[10px] font-mono text-slate-500 uppercase tracking-wider pl-1.5 border-l border-white/10">
          {commonText.header.tagline}
        </span>
      </div>
    </Link>
  );
}

export default HeaderBrand;

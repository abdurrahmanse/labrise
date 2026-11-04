import React from "react";
import Link from "next/link";
import { headerData } from "@/content/site/navigationData";
import { commonText } from "@/content/text/common";
import { Logo } from "@/shared/ui/Logo";

export function HeaderBrand() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
      aria-label={commonText.brand.homeLabel}
    >
      {/* Sleek Logo Icon */}
      <Logo size={36} className="shrink-0 shadow-[3px_3px_0_0_rgba(15,23,42,0.2)] transition-transform duration-200 group-hover:scale-105" />

      {/* Modern Typographic Wordmark */}
      <div className="flex items-baseline gap-1.5 max-[380px]:hidden">
        <span className="font-heading font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-slate-100 transition-colors">
          {headerData.brand.primary}
          <span className="text-teal-400">{headerData.brand.secondary}</span>
        </span>
        <span className="hidden 2xl:inline-block text-[10px] font-mono text-slate-500 uppercase tracking-wider pl-1.5 border-l border-white/10">
          {commonText.header.tagline}
        </span>
      </div>
    </Link>
  );
}

export default HeaderBrand;

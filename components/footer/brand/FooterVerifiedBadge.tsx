"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { footerData } from "@/data/navigationData";

export function FooterVerifiedBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-medium shadow-sm">
      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
      <span>{footerData.brand.badge}</span>
    </div>
  );
}

export default FooterVerifiedBadge;

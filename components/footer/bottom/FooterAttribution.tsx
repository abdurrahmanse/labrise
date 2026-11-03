import React from "react";
import { Sparkles } from "lucide-react";
import { footerData } from "@/data/navigationData";

export function FooterAttribution() {
  return (
    <div className="flex items-center gap-1.5 text-slate-400 font-sans text-xs">
      <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0" />
      <span>{footerData.subtext}</span>
    </div>
  );
}

export default FooterAttribution;

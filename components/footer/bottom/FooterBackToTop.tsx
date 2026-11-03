"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { commonText } from "@/data/text/common";

export function FooterBackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-400 hover:text-white text-xs font-mono transition-all duration-200 cursor-pointer group shrink-0"
      aria-label={commonText.footer.backToTopLabel}
    >
      <span>{commonText.footer.backToTop}</span>
      <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-teal-400" />
    </button>
  );
}

export default FooterBackToTop;

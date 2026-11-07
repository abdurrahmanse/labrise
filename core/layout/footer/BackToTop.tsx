"use client";

import { ArrowUp } from "lucide-react";
import { commonText } from "@/content/text/common";

/** Scrolls to the top of the page. */
export function BackToTop() {
  return (
    <button
      type="button"
      aria-label={commonText.footer.backToTopLabel}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex min-h-9 cursor-pointer items-center gap-2 border-2 border-white/40 px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-slate-100 transition-colors hover:border-[var(--hover-line)] hover:bg-[var(--hover-fill)]"
    >
      <ArrowUp className="h-4 w-4" aria-hidden /> {commonText.footer.backToTop}
    </button>
  );
}

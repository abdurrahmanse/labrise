"use client";

import React from "react";
import { phaseDetailUiData } from "@/data/phaseDetailUiData";

export function PhaseDetailAnchorNav() {
  const { items } = phaseDetailUiData.anchorNav;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 text-xs font-mono font-medium border-t border-white/[0.08] pt-4">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/5 transition-all whitespace-nowrap cursor-pointer shrink-0"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export default PhaseDetailAnchorNav;

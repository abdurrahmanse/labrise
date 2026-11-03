"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import { headerData } from "@/data/navigationData";

interface HeaderActionsProps {
  mobileOpen: boolean;
  onToggle: () => void;
}

export function HeaderActions({ mobileOpen, onToggle }: HeaderActionsProps) {
  return (
    <div className="flex items-center lg:hidden shrink-0">
      {/* Mobile & Tablet Hamburger Toggle */}
      <button
        onClick={onToggle}
        className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
        aria-label={headerData.actions.menuAriaLabel}
        aria-expanded={mobileOpen}
      >
        <span
          className={`absolute transition-all duration-200 ${
            mobileOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
          }`}
        >
          <X className="w-4 h-4" />
        </span>
        <span
          className={`absolute transition-all duration-200 ${
            mobileOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
          }`}
        >
          <Menu className="w-4 h-4" />
        </span>
      </button>
    </div>
  );
}

export default HeaderActions;

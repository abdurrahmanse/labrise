"use client";

import { Menu, X } from "lucide-react";
import { headerData } from "@/content/site/navigationData";

interface HeaderActionsProps {
  mobileOpen: boolean;
  onToggle: () => void;
}

/** The menu button shown below the desktop breakpoint. */
export function HeaderActions({ mobileOpen, onToggle }: HeaderActionsProps) {
  return (
    <div className="flex shrink-0 items-center lg:hidden">
      <button
        type="button"
        onClick={onToggle}
        className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-slate-300 transition-colors hover:bg-white/[0.08] hover:text-white"
        aria-label={headerData.actions.menuAriaLabel}
        aria-expanded={mobileOpen}
      >
        <span className={`absolute transition-all duration-200 ${mobileOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}`}>
          <X className="h-4 w-4" />
        </span>
        <span className={`absolute transition-all duration-200 ${mobileOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"}`}>
          <Menu className="h-4 w-4" />
        </span>
      </button>
    </div>
  );
}

export default HeaderActions;

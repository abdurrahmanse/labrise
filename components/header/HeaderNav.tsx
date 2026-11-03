"use client";

import React from "react";
import Link from "next/link";
import { navLinksData } from "@/data/navigationData";
import { getIconComponent } from "@/components/ui/IconUtils";

interface HeaderNavProps {
  pathname: string;
}

export function HeaderNav({ pathname }: HeaderNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5" aria-label="Main navigation">
      {navLinksData.map((link) => {
        const Icon = getIconComponent(link.iconName);
        const isActive =
          pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`group relative px-3 py-2 rounded-lg text-sm xl:text-[15px] font-bold transition-all duration-150 flex items-center gap-2 ${
              isActive
                ? "text-black bg-indigo-400 border border-black shadow-[2px_2px_0_0_rgba(255,255,255,0.85)]"
                : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.04] border border-transparent"
            }`}
          >
            <Icon
              className={`w-4 h-4 transition-colors shrink-0 ${
                isActive ? "text-black" : "text-slate-500 group-hover:text-slate-300"
              }`}
            />
            <span>{link.label}</span>
            {link.badge && (
              <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded-none bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                {link.badge}
              </span>
            )}
            {/* Subtle active indicator dot */}
            {isActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export default HeaderNav;

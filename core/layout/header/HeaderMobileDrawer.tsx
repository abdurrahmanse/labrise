"use client";

import Link from "next/link";
import { GraduationCap, X } from "lucide-react";
import { headerData, moreLinksData, navLinksData } from "@/content/site/navigationData";
import { commonText } from "@/content/text/common";
import { legacyText } from "@/content/text/legacy";
import { cn } from "@/shared/utils/cn";
import { HeaderSupportLink } from "./HeaderSupportLink";
import { isActiveLink } from "./isActiveLink";
import { useEscapeKey } from "./useEscapeKey";

interface HeaderMobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

/** Slide-over menu for small screens: the four main links, the Support button, then the pages that are not in the bar. */
export function HeaderMobileDrawer({ isOpen, onClose, pathname }: HeaderMobileDrawerProps) {
  useEscapeKey(onClose, isOpen);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={cn(
          "fixed bottom-0 right-0 top-0 z-50 flex w-[320px] max-w-[88vw] flex-col border-l border-white/10 bg-canvas-base shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label={commonText.header.mobileDrawerLabel}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-teal-500 text-white">
              <GraduationCap className="h-4 w-4" />
            </span>
            <p className="font-heading text-sm font-bold leading-none text-white">{headerData.mobileDrawer.title}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/15 text-slate-400 transition-colors hover:text-white"
            aria-label={commonText.header.closeMenu}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 space-y-6 overflow-y-auto px-4 py-5" aria-label={commonText.header.mobileNav}>
          <ul className="space-y-1">
            {navLinksData.map((link) => {
              const active = isActiveLink(pathname, link);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center rounded-xl border-l-2 px-4 py-3 text-lg font-semibold transition-colors",
                      active ? "border-indigo-500 bg-white/[0.06] text-white" : "border-transparent text-slate-400 hover:bg-white/[0.04] hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <HeaderSupportLink onClick={onClose} className="h-11 w-full text-base" />

          <div>
            <p className="px-4 pb-2 font-mono text-[11px] uppercase tracking-widest text-slate-500">{headerData.mobileDrawer.moreTitle}</p>
            <ul className="grid grid-cols-2 gap-1">
              {moreLinksData.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={onClose} className="block rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <p className="border-t border-white/10 px-5 py-4 text-center font-mono text-[11px] text-slate-500">{legacyText.headerMobileDrawer.t1}</p>
      </aside>
    </>
  );
}

export default HeaderMobileDrawer;

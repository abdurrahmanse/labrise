"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, GraduationCap, X } from "lucide-react";
import { headerData, navLinksData } from "@/data/navigationData";
import { getIconComponent } from "@/components/ui/IconUtils";

interface HeaderMobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function HeaderMobileDrawer({
  isOpen,
  onClose,
  pathname,
}: HeaderMobileDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-md lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-[300px] max-w-[85vw] flex flex-col lg:hidden bg-canvas-base border-l border-white/[0.08] shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation Drawer"
      >
        {/* Top radial ambient glow */}
        <div
          className="absolute top-0 inset-x-0 h-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 120% 60% at 80% 0%, rgba(198, 242, 31,0.18) 0%, transparent 70%)",
          }}
        />

        <div className="relative flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-teal-500 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-heading font-bold text-white leading-none">
                  {headerData.mobileDrawer.title}
                </p>
                <p className="text-[10px] text-teal-400 mt-1 font-mono">
                  100% Fully Funded Standard
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Navigation Links */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto" aria-label="Mobile navigation links">
            {navLinksData.map((link) => {
              const Icon = getIconComponent(link.iconName);
              const isActive =
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-150 group ${
                    isActive
                      ? "bg-white/[0.08] text-white border border-white/10 shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent"
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? "bg-indigo-400 text-black border-black shadow-[3px_3px_0_0_rgba(255,255,255,0.85)] font-bold"
                        : "bg-white/[0.04] text-slate-500 group-hover:text-slate-300"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="flex-1 text-sm sm:text-[15px] font-bold">{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded-none bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {link.badge}
                    </span>
                  )}
                  <ChevronRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
                      isActive ? "text-indigo-400" : "text-slate-600"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Bottom Info Note */}
          <div className="p-4 border-t border-white/[0.07] bg-slate-950/40">
            <p className="text-center text-[11px] text-slate-400 font-medium">
              100% Fully Funded Educational Guide
            </p>
            <p className="text-center text-[10px] text-slate-500 font-mono mt-1">
              Free · Open Access · No Account Required
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default HeaderMobileDrawer;

"use client";

import React, { useEffect, useState } from "react";
import { Compass } from "lucide-react";

export interface NavAnchorItem {
  id: string;
  label: string;
  count?: string;
  iconName?: string;
}

interface QuickScrollNavigatorProps {
  anchors: NavAnchorItem[];
  rightElement?: React.ReactNode;
  className?: string;
}

export function QuickScrollNavigator({
  anchors,
  rightElement,
  className = ""
}: QuickScrollNavigatorProps) {
  const [activeId, setActiveId] = useState<string>(anchors[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = anchors.length - 1; i >= 0; i--) {
        const el = document.getElementById(anchors[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(anchors[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [anchors]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; // account for sticky navbar and filter bar
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="p-2 sm:p-2.5 rounded-2xl bg-canvas-card/95 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Navigation Anchors Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none" role="tablist">
          <div className="flex items-center gap-1.5 px-3 py-1.5 text-slate-400 text-xs font-semibold shrink-0">
            <Compass className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="hidden sm:inline">Jump to:</span>
          </div>

          {anchors.map((anchor) => {
            const isActive = activeId === anchor.id;
            return (
              <button
                key={anchor.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => scrollToSection(anchor.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 text-white border-transparent shadow-[3px_3px_0_0_rgba(15,23,42,0.18)] font-bold"
                    : "bg-canvas-base/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-white/5"
                }`}
              >
                <span>{anchor.label}</span>
                {anchor.count && (
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {anchor.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Optional Right Action or Slider Element */}
        {rightElement && (
          <div className="w-full md:w-auto shrink-0 flex items-center justify-end">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
}

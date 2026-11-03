"use client";

import React from "react";
import { WidgetTheme } from "./WidgetShell";

interface WidgetTabButtonProps {
  isActive: boolean;
  onClick: () => void;
  theme?: WidgetTheme;
  topLabel?: string;
  mainLabel: React.ReactNode;
  badge?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "card" | "pill";
  className?: string;
}

const TAB_ACTIVE_STYLES: Record<WidgetTheme, { active: string; topText: string }> = {
  indigo: {
    active: "bg-indigo-400 text-black border-black shadow-[3px_3px_0_0_rgba(255,255,255,0.85)] font-bold",
    topText: "text-black/70"
  },
  cyan: {
    active: "bg-indigo-400 text-black border-black shadow-[3px_3px_0_0_rgba(255,255,255,0.85)] font-bold",
    topText: "text-black/70"
  },
  emerald: {
    active: "bg-indigo-400 text-black border-black shadow-[3px_3px_0_0_rgba(255,255,255,0.85)] font-bold",
    topText: "text-black/70"
  },
  amber: {
    active: "bg-indigo-400 text-black border-black shadow-[3px_3px_0_0_rgba(255,255,255,0.85)] font-bold",
    topText: "text-black/70"
  },
  purple: {
    active: "bg-indigo-400 text-black border-black shadow-[3px_3px_0_0_rgba(255,255,255,0.85)] font-bold",
    topText: "text-black/70"
  },
  rose: {
    active: "bg-indigo-400 text-black border-black shadow-[3px_3px_0_0_rgba(255,255,255,0.85)] font-bold",
    topText: "text-black/70"
  }
};

export function WidgetTabButton({
  isActive,
  onClick,
  theme = "cyan",
  topLabel,
  mainLabel,
  badge,
  icon,
  variant = "card",
  className = ""
}: WidgetTabButtonProps) {
  const styles = TAB_ACTIVE_STYLES[theme] || TAB_ACTIVE_STYLES.cyan;

  if (variant === "pill") {
    return (
      <button
        onClick={onClick}
        className={`px-3 py-2 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 border ${
          isActive
            ? `${styles.active}`
            : "bg-canvas-card text-slate-400 border-white/5 hover:border-white/10 hover:text-slate-200"
        } ${className}`}
      >
        {icon}
        <span>{mainLabel}</span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`p-3 sm:p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
        isActive
          ? styles.active
          : "bg-canvas-card border-white/5 hover:border-white/15 text-slate-400"
      } ${className}`}
    >
      {(topLabel || badge) && (
        <div className="flex items-center justify-between mb-1">
          {topLabel && (
            <span
              className={`font-mono text-[10px] uppercase font-bold tracking-wider block ${styles.topText}`}
            >
              {topLabel}
            </span>
          )}
          {badge}
        </div>
      )}
      <div className="text-xs font-heading font-bold block truncate leading-snug">
        {mainLabel}
      </div>
    </button>
  );
}

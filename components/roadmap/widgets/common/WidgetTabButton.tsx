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
    active: "bg-indigo-600/30 border-indigo-400 text-white shadow-lg shadow-indigo-950/60 font-semibold",
    topText: "text-indigo-400"
  },
  cyan: {
    active: "bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-950/60 font-semibold",
    topText: "text-cyan-400"
  },
  emerald: {
    active: "bg-emerald-950/40 border-emerald-500/60 text-white shadow-lg shadow-emerald-950/60 font-semibold",
    topText: "text-emerald-400"
  },
  amber: {
    active: "bg-amber-500/20 border-amber-400 text-white shadow-lg shadow-amber-950/60 font-semibold",
    topText: "text-amber-400"
  },
  purple: {
    active: "bg-purple-950/40 border-purple-500/60 text-white shadow-lg shadow-purple-950/60 font-semibold",
    topText: "text-purple-400"
  },
  rose: {
    active: "bg-rose-950/40 border-rose-500/60 text-white shadow-lg shadow-rose-950/60 font-semibold",
    topText: "text-rose-400"
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
            : "bg-[#121214] text-slate-400 border-white/5 hover:border-white/10 hover:text-slate-200"
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
          : "bg-[#121214] border-white/5 hover:border-white/15 text-slate-400"
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

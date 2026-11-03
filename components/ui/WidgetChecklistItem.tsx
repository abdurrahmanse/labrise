"use client";

import React from "react";
import { Check, CheckCircle2 } from "lucide-react";
import { WidgetTheme } from "./WidgetShell";

interface WidgetChecklistItemProps {
  isChecked: boolean;
  onClick: () => void;
  label: React.ReactNode;
  sublabel?: string;
  theme?: WidgetTheme;
  className?: string;
}

const CHECK_THEMES: Record<WidgetTheme, { activeBg: string; activeBorder: string; activeText: string; checkBg: string }> = {
  indigo: {
    activeBg: "bg-indigo-950/40",
    activeBorder: "border-indigo-500/50",
    activeText: "text-indigo-200",
    checkBg: "bg-indigo-500"
  },
  cyan: {
    activeBg: "bg-cyan-950/40",
    activeBorder: "border-cyan-500/50",
    activeText: "text-cyan-200",
    checkBg: "bg-cyan-500"
  },
  emerald: {
    activeBg: "bg-emerald-950/40",
    activeBorder: "border-emerald-500/50",
    activeText: "text-emerald-200",
    checkBg: "bg-emerald-500"
  },
  amber: {
    activeBg: "bg-amber-950/40",
    activeBorder: "border-amber-500/50",
    activeText: "text-amber-200",
    checkBg: "bg-amber-500"
  },
  purple: {
    activeBg: "bg-purple-950/40",
    activeBorder: "border-purple-500/50",
    activeText: "text-purple-200",
    checkBg: "bg-purple-500"
  },
  rose: {
    activeBg: "bg-rose-950/40",
    activeBorder: "border-rose-500/50",
    activeText: "text-rose-200",
    checkBg: "bg-rose-500"
  }
};

export function WidgetChecklistItem({
  isChecked,
  onClick,
  label,
  sublabel,
  theme = "indigo",
  className = ""
}: WidgetChecklistItemProps) {
  const styles = CHECK_THEMES[theme] || CHECK_THEMES.indigo;

  return (
    <div
      onClick={onClick}
      className={`p-3 rounded-lg border flex items-start gap-2.5 text-xs cursor-pointer transition-all select-none ${
        isChecked
          ? `${styles.activeBg} ${styles.activeBorder} ${styles.activeText} shadow-sm`
          : "bg-canvas-base border-white/5 text-slate-300 hover:border-white/20 hover:text-white"
      } ${className}`}
    >
      <div
        className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors ${
          isChecked ? `${styles.checkBg} text-white` : "border border-white/20 bg-slate-900"
        }`}
      >
        {isChecked ? (
          <Check className="w-3 h-3 stroke-[3]" />
        ) : (
          <CheckCircle2 className="w-3 h-3 text-slate-500" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <span className={`leading-relaxed font-sans block ${isChecked ? "font-medium" : ""}`}>
          {label}
        </span>
        {sublabel && (
          <span className="text-[11px] text-slate-400 block mt-0.5">{sublabel}</span>
        )}
      </div>
    </div>
  );
}

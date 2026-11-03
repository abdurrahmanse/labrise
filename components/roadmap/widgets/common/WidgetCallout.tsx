"use client";

import React from "react";
import { Sparkles, AlertTriangle, Lightbulb, CheckCircle2 } from "lucide-react";

export type CalloutVariant =
  | "positive"
  | "warning"
  | "tip"
  | "accent"
  | "neutral"
  | "indigo"
  | "cyan"
  | "emerald"
  | "amber"
  | "purple"
  | "rose";

export interface WidgetCalloutProps {
  title?: string;
  description?: React.ReactNode;
  message?: React.ReactNode;
  children?: React.ReactNode;
  variant?: CalloutVariant;
  icon?: React.ReactNode;
  className?: string;
}

const CALLOUT_STYLES: Record<
  CalloutVariant,
  { container: string; titleColor: string; defaultIcon: React.ReactNode }
> = {
  positive: {
    container: "bg-emerald-950/30 border-emerald-500/30 text-emerald-200",
    titleColor: "text-emerald-300",
    defaultIcon: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
  },
  emerald: {
    container: "bg-emerald-950/30 border-emerald-500/30 text-emerald-200",
    titleColor: "text-emerald-300",
    defaultIcon: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
  },
  warning: {
    container: "bg-rose-950/40 border-rose-500/40 text-rose-200",
    titleColor: "text-rose-300",
    defaultIcon: <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
  },
  rose: {
    container: "bg-rose-950/40 border-rose-500/40 text-rose-200",
    titleColor: "text-rose-300",
    defaultIcon: <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
  },
  tip: {
    container: "bg-amber-950/30 border-amber-500/30 text-amber-200",
    titleColor: "text-amber-300",
    defaultIcon: <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
  },
  amber: {
    container: "bg-amber-950/30 border-amber-500/30 text-amber-200",
    titleColor: "text-amber-300",
    defaultIcon: <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
  },
  accent: {
    container: "bg-cyan-950/30 border-cyan-500/30 text-cyan-200",
    titleColor: "text-cyan-300",
    defaultIcon: <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
  },
  cyan: {
    container: "bg-cyan-950/30 border-cyan-500/30 text-cyan-200",
    titleColor: "text-cyan-300",
    defaultIcon: <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
  },
  indigo: {
    container: "bg-indigo-950/30 border-indigo-500/30 text-indigo-200",
    titleColor: "text-indigo-300",
    defaultIcon: <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
  },
  purple: {
    container: "bg-purple-950/30 border-purple-500/30 text-purple-200",
    titleColor: "text-purple-300",
    defaultIcon: <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
  },
  neutral: {
    container: "bg-canvas-base border-white/5 text-slate-400",
    titleColor: "text-slate-200",
    defaultIcon: <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
  }
};

export function WidgetCallout({
  title,
  description,
  message,
  children,
  variant = "neutral",
  icon,
  className = ""
}: WidgetCalloutProps) {
  const styles = CALLOUT_STYLES[variant] || CALLOUT_STYLES.neutral;
  const renderIcon = icon || styles.defaultIcon;
  const content = children || message || description;

  return (
    <div
      className={`p-3.5 rounded-xl border text-xs flex items-start gap-2.5 relative z-10 ${styles.container} ${className}`}
    >
      {renderIcon}
      <div className="leading-relaxed font-sans">
        {title && <strong className={`${styles.titleColor} mr-1`}>{title}</strong>}
        {content}
      </div>
    </div>
  );
}

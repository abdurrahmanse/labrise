import React from "react";
import { AlertTriangle, Info, CheckCircle2, Lightbulb } from "lucide-react";

export interface InfoCalloutProps {
  variant?: "info" | "warning" | "success" | "tip";
  title?: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}

const VARIANT_STYLES = {
  info: {
    bg: "bg-indigo-950/40 border-indigo-500/30",
    text: "text-indigo-300",
    icon: Info,
    badgeBg: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
  },
  warning: {
    bg: "bg-amber-950/40 border-amber-500/30",
    text: "text-amber-300",
    icon: AlertTriangle,
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/30"
  },
  success: {
    bg: "bg-emerald-950/40 border-emerald-500/30",
    text: "text-emerald-300",
    icon: CheckCircle2,
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
  },
  tip: {
    bg: "bg-teal-950/40 border-teal-500/30",
    text: "text-teal-300",
    icon: Lightbulb,
    badgeBg: "bg-teal-500/20 text-teal-300 border-teal-500/30"
  }
};

export function InfoCallout({
  variant = "info",
  title,
  badge,
  children,
  className = ""
}: InfoCalloutProps) {
  const styles = VARIANT_STYLES[variant];
  const Icon = styles.icon;

  return (
    <div className={`p-4 sm:p-5 rounded-xl border ${styles.bg} ${className}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${styles.text}`} />
        <div className="space-y-1 text-xs">
          {(badge || title) && (
            <div className="flex items-center gap-2 mb-1">
              {badge && (
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${styles.badgeBg}`}>
                  {badge}
                </span>
              )}
              {title && <h4 className="font-bold text-white tracking-tight">{title}</h4>}
            </div>
          )}
          <div className="text-slate-300 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default InfoCallout;

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { WidgetTheme } from "./WidgetShell";

interface WidgetHeaderProps {
  icon: React.ReactNode;
  stepBadge: string;
  title: string;
  theme?: WidgetTheme;
  headerBadge?: string;
  rightSlot?: React.ReactNode;
  className?: string;
}

const ICON_THEMES: Record<WidgetTheme, { box: string; text: string }> = {
  indigo: {
    box: "bg-indigo-950/80 border-indigo-500/40 text-indigo-400",
    text: "text-indigo-400"
  },
  cyan: {
    box: "bg-cyan-950/80 border-cyan-500/40 text-cyan-400",
    text: "text-cyan-400"
  },
  emerald: {
    box: "bg-emerald-950/80 border-emerald-500/40 text-emerald-400",
    text: "text-emerald-400"
  },
  amber: {
    box: "bg-amber-950/80 border-amber-500/40 text-amber-400",
    text: "text-amber-400"
  },
  purple: {
    box: "bg-purple-950/80 border-purple-500/40 text-purple-400",
    text: "text-purple-400"
  },
  rose: {
    box: "bg-rose-950/80 border-rose-500/40 text-rose-400",
    text: "text-rose-400"
  }
};

export function WidgetHeader({
  icon,
  stepBadge,
  title,
  theme = "cyan",
  headerBadge,
  rightSlot,
  className = ""
}: WidgetHeaderProps) {
  const styles = ICON_THEMES[theme] || ICON_THEMES.cyan;

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 mb-5 relative z-10 ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <div className={`p-2.5 rounded-xl border ${styles.box}`}>
          {icon}
        </div>
        <div>
          <span
            className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${styles.text}`}
          >
            {stepBadge}
          </span>
          <h4 className="text-base sm:text-lg font-heading font-bold text-white">
            {title}
          </h4>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {headerBadge && (
          <Badge variant={theme === "rose" ? "rose" : theme} size="sm">
            {headerBadge}
          </Badge>
        )}
        {rightSlot}
      </div>
    </div>
  );
}

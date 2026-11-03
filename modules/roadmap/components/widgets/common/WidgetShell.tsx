import React from "react";

export type { WidgetTheme } from "@/components/ui/WidgetTheme";
import type { WidgetTheme } from "@/components/ui/WidgetTheme";

interface WidgetShellProps {
  theme?: WidgetTheme;
  children: React.ReactNode;
  className?: string;
  glowSize?: "sm" | "md" | "lg";
}

const THEME_STYLES: Record<WidgetTheme, { border: string; glow: string }> = {
  indigo: {
    border: "border-indigo-500/30",
    glow: "bg-indigo-600/10"
  },
  cyan: {
    border: "border-cyan-500/30",
    glow: "bg-cyan-600/10"
  },
  emerald: {
    border: "border-emerald-500/30",
    glow: "bg-emerald-600/10"
  },
  amber: {
    border: "border-amber-500/30",
    glow: "bg-amber-600/10"
  },
  purple: {
    border: "border-purple-500/30",
    glow: "bg-purple-600/10"
  },
  rose: {
    border: "border-rose-500/30",
    glow: "bg-rose-600/10"
  }
};

const GLOW_SIZES = {
  sm: "w-72 h-72 blur-[90px]",
  md: "w-80 h-80 blur-[100px]",
  lg: "w-96 h-96 blur-[120px]"
};

export function WidgetShell({
  theme = "cyan",
  children,
  className = "",
  glowSize = "lg"
}: WidgetShellProps) {
  const styles = THEME_STYLES[theme] || THEME_STYLES.cyan;
  const glow = GLOW_SIZES[glowSize] || GLOW_SIZES.lg;

  return (
    <div
      className={`my-6 p-5 sm:p-6 rounded-2xl bg-[#090d18] border shadow-2xl relative overflow-hidden ${styles.border} ${className}`}
    >
      {/* Ambient background highlight glow */}
      <div
        className={`absolute top-0 right-0 rounded-full pointer-events-none ${glow} ${styles.glow}`}
      />
      {children}
    </div>
  );
}

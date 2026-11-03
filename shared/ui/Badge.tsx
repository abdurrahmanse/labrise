import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";

export type BadgeVariant = "indigo" | "cyan" | "teal" | "emerald" | "amber" | "purple" | "rose" | "slate";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
  pulsingDot?: boolean;
  shimmer?: boolean;
}

const badgeVariants = cva(
  "relative inline-flex items-center rounded-none border uppercase tracking-wider backdrop-blur-sm transition-colors duration-150 overflow-hidden",
  {
    variants: {
      variant: {
        indigo: "bg-indigo-400/10 text-indigo-300 border-indigo-400/60",
        cyan: "bg-white/[0.06] text-slate-100 border-white/40",
        teal: "bg-white/[0.06] text-slate-100 border-white/40",
        emerald: "bg-emerald-950/70 text-emerald-300 border-emerald-700/60",
        amber: "bg-amber-950/70 text-amber-300 border-amber-700/60",
        purple: "bg-indigo-400/10 text-indigo-300 border-indigo-400/60",
        rose: "bg-rose-950/70 text-rose-300 border-rose-700/60",
        slate: "bg-slate-900/80 text-slate-300 border-slate-700/60"
      },
      size: {
        sm: "text-[11px] px-2.5 py-0.5 gap-1.5 font-mono",
        md: "text-xs px-3 py-1 gap-1.5 font-medium"
      }
    },
    defaultVariants: { variant: "indigo", size: "md" }
  }
);

const dotColors: Record<BadgeVariant, string> = {
  indigo: "bg-indigo-400",
  cyan: "bg-cyan-400",
  teal: "bg-teal-400",
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
  purple: "bg-purple-400",
  rose: "bg-rose-400",
  slate: "bg-slate-400"
};

export function Badge({
  children,
  variant = "indigo",
  size = "md",
  className,
  icon,
  pulsingDot = false,
  shimmer = false
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), shimmer && "shimmer-badge", className)}>
      {pulsingDot && (
        <span className="relative flex h-2 w-2 mr-0.5 shrink-0">
          <span className={cn("animate-radar-ping absolute inline-flex h-full w-full rounded-full opacity-75", dotColors[variant])} />
          <span className={cn("relative inline-flex rounded-full h-2 w-2", dotColors[variant])} />
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
    </span>
  );
}

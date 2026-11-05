"use client";

import React from "react";
import { cn } from "@/shared/utils/cn";

export type TabTheme = "indigo" | "cyan" | "emerald" | "amber" | "purple" | "rose";
export type TabVariant = "pills" | "cards" | "segmented" | "minimal";

export interface TabsContainerProps {
  children: React.ReactNode;
  variant?: TabVariant;
  theme?: TabTheme | string;
  size?: "xs" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

const CONTAINER_VARIANTS: Record<TabVariant, string> = {
  segmented: "p-1.5 rounded-2xl bg-canvas-base border border-white/10 flex items-center gap-1.5 overflow-x-auto scrollbar-none",
  pills: "flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none",
  cards: "grid gap-2.5",
  minimal: "flex items-center gap-1 border-b border-white/10"
};

const COLUMN_CLASSES: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-5",
  6: "grid-cols-3 sm:grid-cols-6",
  7: "grid-cols-3 sm:grid-cols-7"
};

/**
 * Universal Tabs layout container component.
 */
export function TabsContainer({
  children,
  variant = "pills",
  fullWidth = false,
  className = "",
  columns
}: TabsContainerProps) {
  const colClass = columns ? COLUMN_CLASSES[columns] || "" : "";
  const widthClass = fullWidth ? "w-full" : "";
  return (
    <div
      role="tablist"
      className={cn(CONTAINER_VARIANTS[variant], colClass, widthClass, className)}
    >
      {children}
    </div>
  );
}

export interface TabItemProps {
  active: boolean;
  onClick: () => void;
  title?: React.ReactNode;
  label?: React.ReactNode;
  children?: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  icon?: React.ReactNode;
  theme?: TabTheme | string;
  colorTheme?: TabTheme | string;
  variant?: TabVariant;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

const ACTIVE_THEMES: Record<TabTheme, string> = {
  indigo: "bg-indigo-600 text-white shadow-[3px_3px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] border-transparent",
  cyan: "bg-cyan-600 text-white shadow-[3px_3px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] border-transparent",
  emerald: "bg-emerald-600 text-white shadow-[3px_3px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] border-transparent",
  amber: "bg-amber-600 text-white shadow-[3px_3px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] border-transparent",
  purple: "bg-indigo-600 text-white shadow-[3px_3px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] border-transparent",
  rose: "bg-rose-600 text-white shadow-[3px_3px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] border-transparent"
};

const INACTIVE_STYLES = "bg-canvas-base text-slate-400 hover:text-white border-white/15 hover:border-white/60 hover:bg-white/[0.06] backdrop-blur-sm";

/**
 * Universal decoupled Tab Item / Tab Button component following DRY principles.
 */
export function TabItem({
  active,
  onClick,
  title,
  label,
  children,
  subtitle,
  badge,
  icon,
  theme,
  colorTheme,
  variant = "pills",
  size = "md",
  className = "",
  disabled = false
}: TabItemProps) {
  const effectiveTitle = children !== undefined ? children : (title || label);
  const effectiveThemeKey = (colorTheme || theme || "indigo") as TabTheme;
  const activeClass = active
    ? ACTIVE_THEMES[effectiveThemeKey] || ACTIVE_THEMES.indigo
    : INACTIVE_STYLES;

  const sizeClass =
    size === "xs"
      ? "px-2.5 py-1 text-[11px]"
      : size === "sm"
      ? "px-3 py-1.5 text-xs"
      : size === "lg"
      ? "px-5 py-2.5 text-sm"
      : "px-3.5 py-2 text-xs";

  if (variant === "cards") {
    return (
      <button
        type="button"
        role="tab"
        aria-selected={active}
        onClick={onClick}
        disabled={disabled}
        className={cn("p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed", activeClass, className)}
      >
        <div className="flex items-center justify-between gap-2 mb-1">
          {badge && <span className="text-[10px] uppercase font-mono font-bold tracking-wider opacity-85">{badge}</span>}
          {icon && <span className="opacity-75 shrink-0">{icon}</span>}
        </div>
        <div className="text-xs font-bold font-heading truncate">{effectiveTitle}</div>
        {subtitle && <div className="text-[10px] opacity-75 mt-0.5 line-clamp-1">{subtitle}</div>}
      </button>
    );
  }

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      disabled={disabled}
      className={cn(sizeClass, "rounded-xl font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed", activeClass, className)}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {badge && <span className="font-mono text-[10px] opacity-80">{badge}</span>}
      <span>{effectiveTitle}</span>
    </button>
  );
}

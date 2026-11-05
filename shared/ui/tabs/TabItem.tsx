"use client";

import { cn } from "@/shared/utils/cn";
import { ACTIVE_THEMES, INACTIVE_STYLES } from "./tabStyles";
import type { TabItemProps, TabTheme } from "./tabTypes";

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

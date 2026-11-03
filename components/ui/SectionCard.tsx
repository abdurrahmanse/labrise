"use client";

import React from "react";
import { BadgeVariant } from "./Badge";
import { CardHeader } from "./CardHeader";

export type SectionCardGlow = "none" | "indigo" | "cyan" | "emerald" | "amber" | "purple" | "rose";
export type SectionCardVariant = "default" | "nested" | "bordered" | "subtle";

export interface SectionCardProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  badgeVariant?: BadgeVariant | string;
  icon?: React.ReactNode;
  headerAction?: React.ReactNode;
  headerRight?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: SectionCardVariant;
  glow?: SectionCardGlow | string;
  borderGlow?: SectionCardGlow | string;
  className?: string;
  bodyClassName?: string;
  headerClassName?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const GLOW_CLASSES: Record<SectionCardGlow, string> = {
  none: "border-white/20 hover:border-white/60",
  indigo: "border-indigo-400/40 hover:border-indigo-400 hover:shadow-[5px_5px_0_0_#c6f21f]",
  cyan: "border-white/30 hover:border-white hover:shadow-[5px_5px_0_0_rgba(255,255,255,0.85)]",
  emerald: "border-emerald-500/40 hover:border-emerald-400 hover:shadow-[5px_5px_0_0_#10b981]",
  amber: "border-amber-500/40 hover:border-amber-400 hover:shadow-[5px_5px_0_0_#f59e0b]",
  purple: "border-indigo-400/40 hover:border-indigo-400 hover:shadow-[5px_5px_0_0_#c6f21f]",
  rose: "border-rose-500/40 hover:border-rose-400 hover:shadow-[5px_5px_0_0_#f43f5e]"
};

const VARIANT_CLASSES: Record<SectionCardVariant, string> = {
  default: "bg-canvas-card/70 backdrop-blur-xl border shadow-[4px_4px_0_0_rgba(0,0,0,0.6)]",
  nested: "bg-canvas-base/80 border border-white/10",
  bordered: "bg-canvas-card/55 backdrop-blur-xl backdrop-saturate-150 border-2 border-white/40 shadow-[5px_5px_0_0_rgba(255,255,255,0.15)]",
  subtle: "bg-white/[0.03] backdrop-blur-sm border border-white/10"
};

/**
 * Universal decoupled SectionCard component following DRY principles.
 * Encapsulates panel styling, specular highlights, customizable headers,
 * badge tags, icons, action buttons, and optional footers.
 */
export function SectionCard({
  title,
  subtitle,
  badge,
  badgeVariant,
  icon,
  headerAction,
  headerRight,
  footer,
  variant = "default",
  glow,
  borderGlow,
  className = "",
  bodyClassName = "",
  headerClassName = "",
  children,
  onClick
}: SectionCardProps) {
  const effectiveGlowKey = (borderGlow || glow || "none") as SectionCardGlow;
  const glowClass = GLOW_CLASSES[effectiveGlowKey] || GLOW_CLASSES.none;
  const effectiveAction = headerRight || headerAction;

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden transition-all duration-300 ${VARIANT_CLASSES[variant]} ${glowClass} ${className}`}
    >
      {/* Glass edge highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/20 pointer-events-none" />

      {/* Individual Card Header */}
      <CardHeader
        title={title}
        subtitle={subtitle}
        badge={badge}
        badgeVariant={badgeVariant}
        icon={icon}
        action={effectiveAction}
        className={headerClassName}
        borderBottom={true}
      />

      {/* Body content */}
      {children && <div className={`p-5 sm:p-6 ${bodyClassName}`}>{children}</div>}

      {/* Footer section */}
      {footer && (
        <div className="px-5 py-4 sm:px-6 bg-black/20 border-t border-white/10 flex items-center justify-between gap-3">
          {footer}
        </div>
      )}
    </div>
  );
}

import React from "react";
import { Sparkles, Compass, ShieldCheck, Award, GraduationCap, Globe2 } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";

const DEFAULT_BADGE_ICONS: Record<string, React.ReactNode> = {
  indigo: <Sparkles className="w-3.5 h-3.5" />,
  teal: <Compass className="w-3.5 h-3.5" />,
  cyan: <Globe2 className="w-3.5 h-3.5" />,
  emerald: <ShieldCheck className="w-3.5 h-3.5" />,
  amber: <Award className="w-3.5 h-3.5" />,
  purple: <GraduationCap className="w-3.5 h-3.5" />
};

export interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  badgeVariant?: BadgeVariant;
  badgeIcon?: React.ReactNode;
  pulsingBadge?: boolean;
  action?: React.ReactNode;
  counter?: React.ReactNode;
  align?: "left" | "center" | "between";
  size?: "sm" | "md" | "lg";
  className?: string;
  borderBottom?: boolean;
}

const TITLE_SIZES = {
  sm: "text-xl sm:text-2xl font-bold",
  md: "text-2xl sm:text-3xl lg:text-4xl font-bold",
  lg: "text-3xl sm:text-4xl lg:text-5xl font-bold"
};

/**
 * Universal decoupled SectionHeader component following DRY architecture.
 * Supports badges, counters, action slots, and adaptive alignments.
 */
export function SectionHeader({
  title,
  subtitle,
  badge,
  badgeVariant = "indigo",
  badgeIcon,
  pulsingBadge = false,
  action,
  counter,
  align = "center",
  size = "lg",
  className = "",
  borderBottom = false
}: SectionHeaderProps) {
  const isCentered = align === "center";
  const isBetween = align === "between" || Boolean(action && !isCentered);

  const containerAlign = isCentered
    ? "text-center mx-auto items-center"
    : "text-left items-start";

  const titleSize = TITLE_SIZES[size] || TITLE_SIZES.lg;
  const effectiveBadgeIcon = badgeIcon ?? DEFAULT_BADGE_ICONS[badgeVariant];

  return (
    <div
      className={`mb-8 sm:mb-12 ${
        borderBottom ? "pb-6 border-b border-white/10" : ""
      } ${className}`}
    >
      <div
        className={`flex ${
          isBetween
            ? "flex-col sm:flex-row sm:items-end justify-between gap-4"
            : `flex-col ${containerAlign}`
        }`}
      >
        <div className={`max-w-3xl flex flex-col ${containerAlign}`}>
          {(badge || counter) && (
            <div className={`flex items-center gap-2 mb-3.5 ${isCentered ? "justify-center" : "justify-start"}`}>
              {badge && (
                typeof badge === "string" ? (
                  <Badge
                    variant={badgeVariant}
                    icon={effectiveBadgeIcon}
                    size="md"
                    pulsingDot={pulsingBadge}
                    shimmer
                  >
                    {badge}
                  </Badge>
                ) : (
                  badge
                )
              )}
              {counter && (
                <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2.5 py-0.5 rounded-none border border-white/5">
                  {counter}
                </span>
              )}
            </div>
          )}

          <h2
            className={`${titleSize} text-white tracking-tight leading-[1.15] font-heading`}
          >
            {title}
          </h2>

          {subtitle && (
            <p className="mt-3.5 text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed font-sans max-w-2xl">
              {subtitle}
            </p>
          )}

          {isCentered && (
            <div className="mt-5 h-[2px] w-20 bg-gradient-to-r from-indigo-500/0 via-indigo-500/60 to-cyan-500/0 mx-auto" />
          )}
        </div>

        {action && (
          <div className="shrink-0 flex items-center gap-2 pt-2 sm:pt-0">
            {action}
          </div>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;

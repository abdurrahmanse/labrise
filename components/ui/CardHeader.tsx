import React from "react";
import { Badge, BadgeVariant } from "./Badge";

export interface CardHeaderProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  badgeVariant?: BadgeVariant | string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
  borderBottom?: boolean;
}

/**
 * Universal CardHeader component for individual cards and panels.
 */
export function CardHeader({
  title,
  subtitle,
  badge,
  badgeVariant,
  icon,
  action,
  className = "",
  borderBottom = true,
}: CardHeaderProps) {
  if (!title && !subtitle && !badge && !icon && !action) return null;

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 sm:p-6 ${
        borderBottom ? "border-b border-white/10" : ""
      } ${className}`}
    >
      <div className="flex items-start sm:items-center gap-3 min-w-0">
        {icon && (
          <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10 shrink-0 text-indigo-400 mt-0.5 sm:mt-0">
            {icon}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            {badge && (
              <div>
                {typeof badge === "string" && badgeVariant ? (
                  <Badge variant={badgeVariant as BadgeVariant} size="sm">
                    {badge}
                  </Badge>
                ) : (
                  badge
                )}
              </div>
            )}
            {title && (
              <h3 className="text-base sm:text-lg font-heading font-bold text-white tracking-tight break-words">
                {title}
              </h3>
            )}
          </div>
          {subtitle && (
            <div className="text-xs text-slate-400 font-sans leading-relaxed">
              {subtitle}
            </div>
          )}
        </div>
      </div>

      {action && <div className="shrink-0 pt-2 sm:pt-0">{action}</div>}
    </div>
  );
}

export default CardHeader;

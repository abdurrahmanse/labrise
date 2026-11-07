"use client";

import React from "react";
import { Clock, ChevronDown, ChevronUp } from "lucide-react";
import { Badge, BadgeVariant } from "@/shared/ui/Badge";
import { Button } from "@/shared/ui/Button";

export interface StepCardHeaderProps {
  stepNumber: string;
  priority: string;
  duration: string;
  title: string;
  subtitle: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const PRIORITY_VARIANTS: Record<string, BadgeVariant> = {
  Crucial: "rose",
  Recommended: "amber",
  Optional: "slate",
};

/**
 * StepCardHeader sub-component handling step metadata, badges, titles, and expand action.
 */
export function StepCardHeader({
  stepNumber,
  priority,
  duration,
  title,
  subtitle,
  isExpanded,
  onToggleExpand,
}: StepCardHeaderProps) {
  const badgeVariant = PRIORITY_VARIANTS[priority] || "slate";

  return (
    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
      <div className="space-y-1.5">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-indigo-950/90 text-indigo-300 border border-indigo-700/60 shadow-sm shadow-indigo-950 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            STEP {stepNumber}
          </span>

          <Badge variant={badgeVariant} size="sm">
            {priority} Priority
          </Badge>

          <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono px-2.5 py-0.5 rounded-md bg-canvas-base border border-white/5">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            {duration}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight pt-1">
          {title}
        </h3>

        <div className="text-xs sm:text-sm text-indigo-300 font-medium">
          {subtitle}
        </div>
      </div>

      {/* Expand / Collapse Control */}
      <Button
        variant="secondary"
        onClick={onToggleExpand}
        iconRight={
          isExpanded ? (
            <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          )
        }
        className="self-start sm:self-center font-mono text-xs"
      >
        {isExpanded ? "Collapse View" : "Expand Deep-Dive"}
      </Button>
    </div>
  );
}

export default StepCardHeader;

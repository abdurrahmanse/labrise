"use client";

import { Check } from "lucide-react";
import { hubChrome } from "@/data/text/hubPages";
import { useMounted } from "../hooks/useMounted";

interface ProgressBadgeProps {
  /** Steps ticked so far, by step id. */
  done: Record<string, boolean>;
  total: number;
}

/** "3/11 done" pill for a saved workflow. Empty until the visitor has started. The feature module supplies the numbers. */
export function ProgressBadge({ done, total }: ProgressBadgeProps) {
  const mounted = useMounted();
  const count = Object.values(done).filter(Boolean).length;
  if (!mounted || count === 0) return null;

  return (
    <span className="inline-flex items-center gap-1 bg-emerald-500/15 px-2 py-0.5 font-mono text-xs text-emerald-400">
      <Check className="h-3.5 w-3.5" aria-hidden /> {hubChrome.doneOf(count, total)}
    </span>
  );
}

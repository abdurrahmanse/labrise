"use client";

import { Check } from "lucide-react";
import { professorOutreachWorkflow } from "@/data/professorsData";
import { searchWorkflowSteps } from "@/data/scholarshipsSearchData";
import { hubChrome } from "@/data/text/hubPages";
import { useOutreachProgress } from "@/modules/professors/store/useOutreachProgress";
import { useFinderProgress } from "@/modules/scholarships/store/useFinderProgress";
import { useMounted } from "../hooks/useMounted";

/** Shows how many steps of a saved workflow are done. Empty until the visitor has started. */
export function ProgressBadge({ kind }: { kind: "outreach" | "finder" }) {
  const mounted = useMounted();
  const outreach = useOutreachProgress((s) => s.done);
  const finder = useFinderProgress((s) => s.done);
  if (!mounted) return null;

  const map = kind === "outreach" ? outreach : finder;
  const total = kind === "outreach" ? professorOutreachWorkflow.length : searchWorkflowSteps.length;
  const done = Object.values(map).filter(Boolean).length;
  if (done === 0) return null;

  return (
    <span className="inline-flex items-center gap-1 bg-emerald-500/15 px-2 py-0.5 font-mono text-xs text-emerald-400">
      <Check className="h-3.5 w-3.5" aria-hidden /> {hubChrome.doneOf(done, total)}
    </span>
  );
}

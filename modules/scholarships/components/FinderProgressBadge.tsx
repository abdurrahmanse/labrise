"use client";

import { searchWorkflowSteps } from "@/data/scholarshipsSearchData";
import { ProgressBadge } from "@/shared/components/ProgressBadge";
import { useFinderProgress } from "../store/useFinderProgress";

/** Progress of the scholarship search workflow, shown on the scholarships hub. */
export function FinderProgressBadge() {
  const done = useFinderProgress((s) => s.done);
  return <ProgressBadge done={done} total={searchWorkflowSteps.length} />;
}

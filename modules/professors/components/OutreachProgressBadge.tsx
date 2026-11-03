"use client";

import { professorOutreachWorkflow } from "@/data/professorsData";
import { ProgressBadge } from "@/shared/components/ProgressBadge";
import { useOutreachProgress } from "../store/useOutreachProgress";

/** Progress of the outreach workflow, shown on the professors hub. */
export function OutreachProgressBadge() {
  const done = useOutreachProgress((s) => s.done);
  return <ProgressBadge done={done} total={professorOutreachWorkflow.length} />;
}

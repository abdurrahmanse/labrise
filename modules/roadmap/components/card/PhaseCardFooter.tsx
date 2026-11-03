import React from "react";
import { PhaseOfficialResource } from "@/data/roadmapPhasesData";
import { PhaseVerifiedPortalsBadges } from "./PhaseVerifiedPortalsBadges";
import { PhaseAuditLink } from "./PhaseAuditLink";

export interface PhaseCardFooterProps {
  slug: string;
  resources: PhaseOfficialResource[];
  checklistCount: number;
}

export function PhaseCardFooter({
  slug,
  resources,
  checklistCount,
}: PhaseCardFooterProps) {
  return (
    <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
      <PhaseVerifiedPortalsBadges resources={resources} />
      <PhaseAuditLink slug={slug} checklistCount={checklistCount} />
    </div>
  );
}

export default PhaseCardFooter;

"use client";

import React from "react";
import { ProfessorsHeader } from "./ProfessorsHeader";
import { OutreachWorkflowSection } from "./OutreachWorkflowSection";
import { EmailBlueprintsSection } from "./EmailBlueprintsSection";
import { OutreachComparisonSection } from "./OutreachComparisonSection";
import { SupervisorNecessityTable } from "./SupervisorNecessityTable";
import { ResearchFitChecklistSection } from "./ResearchFitChecklistSection";
import { PROFESSOR_TABS, type ProfessorPart } from "./professorTabs";
import { SubNav } from "@/shared/components/SubNav";

export function ProfessorOutreachView({ part = "outreach" }: { part?: ProfessorPart }) {
  return (
    <div className="space-y-10">
      <SubNav label="Professor outreach sections" items={PROFESSOR_TABS} />
      {part === "outreach" && (
        <>
          <ProfessorsHeader />
          <OutreachWorkflowSection />
          <EmailBlueprintsSection />
        </>
      )}
      {part === "rules" && (
        <>
          <OutreachComparisonSection />
          <SupervisorNecessityTable />
          <ResearchFitChecklistSection />
        </>
      )}
    </div>
  );
}

export default ProfessorOutreachView;

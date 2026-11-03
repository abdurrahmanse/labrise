"use client";

import React from "react";
import { ScholarshipHeader } from "./ScholarshipHeader";
import { SearchWorkflowSection } from "./SearchWorkflowSection";
import { BooleanFormulasSection } from "./BooleanFormulasSection";
import { PortalsDirectorySection } from "./PortalsDirectorySection";
import { AntiFraudSection } from "./AntiFraudSection";
import { SCHOLARSHIP_TABS, type ScholarshipPart } from "./scholarshipTabs";
import { SubNav } from "@/shared/components/SubNav";

export function ScholarshipFinderView({ part = "workflow" }: { part?: ScholarshipPart }) {
  return (
    <div className="space-y-10">
      <SubNav label="Scholarship finder sections" items={SCHOLARSHIP_TABS} />
      {part === "workflow" && (
        <>
          <ScholarshipHeader />
          <SearchWorkflowSection />
        </>
      )}
      {part === "formulas" && <BooleanFormulasSection />}
      {part === "portals" && (
        <>
          <PortalsDirectorySection />
          <AntiFraudSection />
        </>
      )}
    </div>
  );
}

export default ScholarshipFinderView;

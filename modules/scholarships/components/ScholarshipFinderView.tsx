import React from "react";
import { ScholarshipHeader } from "./ScholarshipHeader";
import { SearchWorkflowSection } from "./SearchWorkflowSection";
import { BooleanFormulasSection } from "./BooleanFormulasSection";
import { PortalsDirectorySection } from "./PortalsDirectorySection";
import { AntiFraudSection } from "./AntiFraudSection";
import { SCHOLARSHIP_TABS, type ScholarshipPart } from "./scholarshipTabs";
import { SubNav } from "@/shared/components/SubNav";
import { legacyText } from "@/content/text/legacy";

export function ScholarshipFinderView({ part = "workflow" }: { part?: ScholarshipPart }) {
  return (
    <div className="space-y-10">
      <SubNav label={legacyText.scholarshipFinderView.t0} items={SCHOLARSHIP_TABS} />
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

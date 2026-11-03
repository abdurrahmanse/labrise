import { SCHOLARSHIP_TABS } from "@/modules/scholarships/components/scholarshipTabs";
import { scholarshipHub, scholarshipSubPages } from "@/content/text/hubPages";
import { WorkflowStepper } from "@/modules/scholarships/components/WorkflowStepper";
import { RelatedStrip } from "@/shared/components/JourneyHub";
import { buildMetadata } from "@/modules/seo";
import { PageShell } from "@/shared/components/PageShell";
import { SubNav } from "@/shared/components/SubNav";

const t = scholarshipSubPages.workflow;

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/scholarships/workflow" });

export default function ScholarshipWorkflowPage() {
  return (
    <PageShell
      eyebrow={t.eyebrow}
      title={t.heading}
      lead={t.lead}
      back={{ href: "/scholarships", label: scholarshipHub.eyebrow }}
      prev={SCHOLARSHIP_TABS[1]}
      next={SCHOLARSHIP_TABS[3]}
    >
      <SubNav label={scholarshipHub.eyebrow} items={SCHOLARSHIP_TABS} />
      <WorkflowStepper />
      <RelatedStrip items={scholarshipHub.related} />
    </PageShell>
  );
}

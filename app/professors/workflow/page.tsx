import { PROFESSOR_TABS } from "@/modules/professors/components/professorTabs";
import { professorHub, professorSubPages } from "@/content/text/hubPages";
import { OutreachStepper } from "@/modules/professors/components/OutreachStepper";
import { RelatedStrip } from "@/shared/components/JourneyHub";
import { buildMetadata } from "@/modules/seo";
import { PageShell } from "@/shared/components/PageShell";
import { SubNav } from "@/shared/components/SubNav";

const t = professorSubPages.workflow;

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/professors/workflow" });

export default function ProfessorWorkflowPage() {
  return (
    <PageShell
      eyebrow={t.eyebrow}
      title={t.heading}
      lead={t.lead}
      back={{ href: "/professors", label: professorHub.eyebrow }}
      prev={PROFESSOR_TABS[2]}
      next={PROFESSOR_TABS[4]}
    >
      <SubNav label={professorHub.eyebrow} items={PROFESSOR_TABS} />
      <OutreachStepper />
      <RelatedStrip items={professorHub.related} />
    </PageShell>
  );
}

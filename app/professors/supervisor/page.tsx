import { PROFESSOR_TABS } from "@/modules/professors/components/professorTabs";
import { professorHub, professorSubPages } from "@/data/text/hubPages";
import { SupervisorNeed } from "@/modules/professors/components/SupervisorNeed";
import { RelatedStrip } from "@/shared/components/JourneyHub";
import { buildMetadata } from "@/modules/seo";
import { PageShell } from "@/shared/components/PageShell";
import { SubNav } from "@/shared/components/SubNav";

const t = professorSubPages.supervisor;

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/professors/supervisor" });

export default function ProfessorSupervisorPage() {
  return (
    <PageShell
      eyebrow={t.eyebrow}
      title={t.heading}
      lead={t.lead}
      back={{ href: "/professors", label: professorHub.eyebrow }}
      prev={PROFESSOR_TABS[1]}
      next={PROFESSOR_TABS[3]}
    >
      <SubNav label={professorHub.eyebrow} items={PROFESSOR_TABS} />
      <SupervisorNeed />
      <RelatedStrip items={professorHub.related} />
    </PageShell>
  );
}

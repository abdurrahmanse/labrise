import { PROFESSOR_TABS } from "@/components/professors/professorTabs";
import { professorHub, professorSubPages } from "@/data/text/hubPages";
import { FindProfessors } from "@/modules/professors/components/FindProfessors";
import { ProfessorStats } from "@/modules/professors/components/ProfessorStats";
import { RelatedStrip } from "@/shared/components/JourneyHub";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { PageShell } from "@/shared/components/PageShell";
import { SubNav } from "@/shared/components/SubNav";

const t = professorSubPages.find;

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/professors/find" });

export default function ProfessorFindPage() {
  return (
    <PageShell
      eyebrow={t.eyebrow}
      title={t.heading}
      lead={t.lead}
      back={{ href: "/professors", label: professorHub.eyebrow }}
      prev={PROFESSOR_TABS[0]}
      next={PROFESSOR_TABS[2]}
    >
      <SubNav label={professorHub.eyebrow} items={PROFESSOR_TABS} />
      <>
        <ProfessorStats />
        <FindProfessors />
      </>
      <RelatedStrip items={professorHub.related} />
    </PageShell>
  );
}

import { ProfessorOutreachView } from "@/modules/professors/components/ProfessorOutreachView";
import { PROFESSOR_TABS } from "@/modules/professors/components/professorTabs";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo";
import { navLabels, pageText } from "@/content/text/site";

export const metadata = buildMetadata({
  title: pageText.professorRules.title,
  description: pageText.professorRules.description,
  path: "/professors/rules"
});

export default function ProfessorRulesPage() {
  return (
    <PageShell
      eyebrow={pageText.professorRules.eyebrow}
      title={pageText.professorRules.heading}
      back={{ href: "/professors", label: navLabels.outreach }}
      prev={PROFESSOR_TABS[4]}
      next={{ href: "/directory/professors", label: navLabels.professorDirectory }}
    >
      <ProfessorOutreachView part="rules" />
    </PageShell>
  );
}

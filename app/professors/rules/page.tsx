import { ProfessorOutreachView } from "@/components/professors/ProfessorOutreachView";
import { PROFESSOR_TABS } from "@/components/professors/professorTabs";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "Professor outreach: rules by country and fit checklist",
  description: "When a supervisor must agree first, what strong outreach looks like, and a research-fit checklist.",
  path: "/professors/rules"
});

export default function ProfessorRulesPage() {
  return (
    <PageShell
      eyebrow="Professor outreach"
      title="Rules and fit"
      back={{ href: "/professors", label: "Outreach and emails" }}
      prev={PROFESSOR_TABS[0]}
      next={{ href: "/directory/professors", label: "Professor directory" }}
    >
      <ProfessorOutreachView part="rules" />
    </PageShell>
  );
}

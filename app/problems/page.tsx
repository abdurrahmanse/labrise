import { PageShell } from "@/shared/components/PageShell";
import { ProblemList } from "@/modules/roadmap/components/ProblemList";
import { buildMetadata } from "@/modules/seo";
import { navLabels, pageText } from "@/content/text/site";

export const metadata = buildMetadata({
  title: pageText.problems.title,
  description: pageText.problems.description,
  path: "/problems"
});

export default function ProblemsPage() {
  return (
    <PageShell
      eyebrow={pageText.problems.eyebrow}
      title={pageText.problems.heading}
      back={{ href: "/", label: navLabels.home }}
      prev={{ href: "/directory", label: navLabels.directory }}
    >
      <ProblemList />
    </PageShell>
  );
}

import { PageShell } from "@/shared/components/PageShell";
import { StepsGrid } from "@/modules/roadmap/components/StepsGrid";
import { buildMetadata } from "@/modules/seo";
import { navLabels, pageText } from "@/data/text/site";

export const metadata = buildMetadata({
  title: pageText.steps.title,
  description: pageText.steps.description,
  path: "/steps"
});

export default function StepsPage() {
  return (
    <PageShell
      eyebrow={pageText.steps.eyebrow}
      title={pageText.steps.heading}
      lead={pageText.steps.lead}
      back={{ href: "/", label: navLabels.home }}
      next={{ href: "/profile", label: navLabels.profileChecklist }}
    >
      <StepsGrid />
    </PageShell>
  );
}

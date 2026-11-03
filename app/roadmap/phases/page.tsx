import { CompleteRoadmapView } from "@/modules/roadmap/components/CompleteRoadmapView";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo";
import { navLabels, pageText } from "@/data/text/site";

export const metadata = buildMetadata({
  title: pageText.phases.title,
  description: pageText.phases.description,
  path: "/roadmap/phases"
});

export default function RoadmapPhasesPage() {
  return (
    <PageShell eyebrow={pageText.phases.eyebrow} title={pageText.phases.heading} back={{ href: "/roadmap", label: navLabels.fiveLevels }} next={{ href: "/apply", label: navLabels.howToApply }}>
      <CompleteRoadmapView part="phases" />
    </PageShell>
  );
}

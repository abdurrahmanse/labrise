import { CompleteRoadmapView } from "@/components/roadmap/CompleteRoadmapView";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "The 13 roadmap phases",
  description: "Every phase of the fully funded scholarship roadmap, with its goals, milestones and portals.",
  path: "/roadmap/phases"
});

export default function RoadmapPhasesPage() {
  return (
    <PageShell eyebrow="Roadmap" title="13 phases" back={{ href: "/roadmap", label: "5 levels" }} next={{ href: "/apply", label: "How to apply" }}>
      <CompleteRoadmapView part="phases" />
    </PageShell>
  );
}

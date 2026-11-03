import { PageShell } from "@/shared/components/PageShell";
import { StepsGrid } from "@/modules/roadmap/components/StepsGrid";
import { buildMetadata } from "@/modules/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "6-step roadmap to a fully funded scholarship",
  description: "What to do and when, from building your base to applying and deciding.",
  path: "/steps"
});

export default function StepsPage() {
  return (
    <PageShell
      eyebrow="Roadmap"
      title="6 steps, in order"
      lead="Start about 2 years before."
      back={{ href: "/", label: "Home" }}
      next={{ href: "/profile", label: "Profile checklist" }}
    >
      <StepsGrid />
    </PageShell>
  );
}

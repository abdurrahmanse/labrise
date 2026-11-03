import { GraduationCap, Landmark } from "lucide-react";
import { LinkCardGrid } from "@/shared/components/LinkCardGrid";
import { PageShell } from "@/shared/components/PageShell";
import { applyTracks } from "@/modules/apply/data/tracks";
import { buildMetadata } from "@/modules/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "How to apply: universities and scholarship organisations",
  description: "The steps to apply to any university or scholarship provider, with links to the guide for each step.",
  path: "/apply"
});

const ICONS = { university: GraduationCap, scholarship: Landmark };

export default function ApplyPage() {
  return (
    <PageShell
      eyebrow="Apply"
      title="How to apply"
      lead="Two routes. Most students use both."
      back={{ href: "/", label: "Home" }}
      next={{ href: "/directory", label: "Directory" }}
    >
      <LinkCardGrid
        columns="md:grid-cols-2"
        items={applyTracks.map((t) => ({
          href: `/apply/${t.id}`,
          title: t.title,
          meta: `${t.steps.length} steps`,
          icon: ICONS[t.id]
        }))}
      />
    </PageShell>
  );
}

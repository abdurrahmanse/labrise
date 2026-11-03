import { GraduationCap, Landmark } from "lucide-react";
import { LinkCardGrid } from "@/shared/components/LinkCardGrid";
import { PageShell } from "@/shared/components/PageShell";
import { applyTracks } from "@/modules/apply/data/tracks";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { navLabels, pageText } from "@/data/text/site";

export const metadata = buildMetadata({
  title: pageText.apply.title,
  description: pageText.apply.description,
  path: "/apply"
});

const ICONS = { university: GraduationCap, scholarship: Landmark };

export default function ApplyPage() {
  return (
    <PageShell
      eyebrow={pageText.apply.eyebrow}
      title={pageText.apply.heading}
      lead={pageText.apply.lead}
      back={{ href: "/", label: navLabels.home }}
      next={{ href: "/directory", label: navLabels.directory }}
    >
      <LinkCardGrid
        columns="md:grid-cols-2"
        items={applyTracks.map((t) => ({
          href: `/apply/${t.id}`,
          title: t.title,
          meta: pageText.apply.steps(t.steps.length),
          icon: ICONS[t.id]
        }))}
      />
    </PageShell>
  );
}

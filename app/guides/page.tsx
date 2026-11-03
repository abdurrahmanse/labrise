import { LinkCardGrid } from "@/shared/components/LinkCardGrid";
import { PageShell } from "@/shared/components/PageShell";
import { guideTopics } from "@/modules/guides/data/topics";
import { buildMetadata } from "@/modules/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "Guides: CV, SOP, IELTS, visa and more",
  description: "Step-by-step guides for every part of a fully funded scholarship application.",
  path: "/guides"
});

export default function GuidesPage() {
  return (
    <PageShell
      eyebrow="Guides"
      title="Pick a topic"
      back={{ href: "/", label: "Home" }}
      prev={{ href: "/profile", label: "Profile" }}
      next={{ href: "/directory", label: "Directory" }}
    >
      <LinkCardGrid
        items={guideTopics.map((g, i) => ({
          href: `/guides/${g.id}`,
          title: g.title,
          meta: g.tag,
          index: String(i + 1).padStart(2, "0")
        }))}
      />
    </PageShell>
  );
}

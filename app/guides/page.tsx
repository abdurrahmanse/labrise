import { Block } from "@/shared/components/Block";
import { LinkCardGrid } from "@/shared/components/LinkCardGrid";
import { PageShell } from "@/shared/components/PageShell";
import { guideGroups } from "@/modules/guides/data/groups";
import { findGuide } from "@/modules/guides/lib/guides";
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
      {guideGroups.map((group) => (
        <Block key={group.title} title={group.title}>
          <LinkCardGrid
            items={group.ids.flatMap((id) => {
              const guide = findGuide(id);
              return guide ? [{ href: `/guides/${id}`, title: guide.title, meta: guide.tag }] : [];
            })}
          />
        </Block>
      ))}
    </PageShell>
  );
}

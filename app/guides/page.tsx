import { Block } from "@/shared/components/Block";
import { LinkCardGrid } from "@/shared/components/LinkCardGrid";
import { PageShell } from "@/shared/components/PageShell";
import { guideGroups, guideIcon, findGuide } from "@/modules/guides";
import { buildMetadata } from "@/modules/seo";
import { navLabels, pageText } from "@/data/text/site";

export const metadata = buildMetadata({
  title: pageText.guides.title,
  description: pageText.guides.description,
  path: "/guides"
});

export default function GuidesPage() {
  return (
    <PageShell
      eyebrow={pageText.guides.eyebrow}
      title={pageText.guides.heading}
      back={{ href: "/", label: navLabels.home }}
      prev={{ href: "/profile", label: navLabels.profile }}
      next={{ href: "/directory", label: navLabels.directory }}
    >
      {guideGroups.map((group) => (
        <Block key={group.title} title={group.title}>
          <LinkCardGrid
            items={group.ids.flatMap((id) => {
              const guide = findGuide(id);
              return guide ? [{ href: `/guides/${id}`, title: guide.title, meta: guide.tag, icon: guideIcon(id) }] : [];
            })}
          />
        </Block>
      ))}
    </PageShell>
  );
}

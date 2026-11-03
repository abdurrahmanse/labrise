import type { Metadata } from "next";
import { LinkCardGrid, PageShell } from "@/components/overview/PageShell";
import { guideTopics } from "@/data/overviewData";

export const metadata: Metadata = { title: "Guides" };

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

import { PageShell } from "@/shared/components/PageShell";
import { LinkCardGrid } from "@/shared/components/LinkCardGrid";
import { directoryListTrail } from "../utils/trails";
import { sectionText } from "@/content/text/directory";
import { regionNames, regionSlug, statsOfRegion } from "../utils/hubs";

export function RegionsIndexView() {
  const t = sectionText.regions;
  return (
    <PageShell
      eyebrow="Directory"
      title={t.title}
      lead="Pick a region to compare its countries, universities, professors, labs and scholarships side by side."
      trail={directoryListTrail(t.title, "regions")}
    >
      <LinkCardGrid
        items={regionNames.map((r) => {
          const s = statsOfRegion(r);
          return { href: `/directory/regions/${regionSlug(r)}`, title: r, meta: `${s.countries.length} countries · ${s.universities} universities · ${s.labs} labs` };
        })}
      />
    </PageShell>
  );
}

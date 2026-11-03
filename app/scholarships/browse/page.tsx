import { SCHOLARSHIP_TABS } from "@/components/scholarships/scholarshipTabs";
import { scholarshipHub, scholarshipSubPages } from "@/data/text/hubPages";
import { FinderStats } from "@/modules/scholarships/components/FinderStats";
import { ScholarshipBrowse } from "@/modules/scholarships/components/ScholarshipBrowse";
import { RelatedStrip } from "@/shared/components/JourneyHub";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { PageShell } from "@/shared/components/PageShell";
import { SubNav } from "@/shared/components/SubNav";

const t = scholarshipSubPages.browse;

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/scholarships/browse" });

export default function ScholarshipBrowsePage() {
  return (
    <PageShell
      eyebrow={t.eyebrow}
      title={t.heading}
      lead={t.lead}
      back={{ href: "/scholarships", label: scholarshipHub.eyebrow }}
      prev={SCHOLARSHIP_TABS[0]}
      next={SCHOLARSHIP_TABS[2]}
    >
      <SubNav label={scholarshipHub.eyebrow} items={SCHOLARSHIP_TABS} />
      <>
        <FinderStats />
        <ScholarshipBrowse />
      </>
      <RelatedStrip items={scholarshipHub.related} />
    </PageShell>
  );
}

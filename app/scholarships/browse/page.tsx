import { SCHOLARSHIP_TABS } from "@/modules/scholarships/components/scholarshipTabs";
import { scholarshipHub, scholarshipSubPages } from "@/data/text/hubPages";
import { FinderStats } from "@/modules/scholarships/components/FinderStats";
import { ScholarshipBrowse } from "@/modules/scholarships/components/listing/ScholarshipBrowse";
import { getScholarshipPage } from "@/modules/scholarships/server";
import { RelatedStrip } from "@/shared/components/JourneyHub";
import { buildMetadata } from "@/modules/seo";
import { PageShell } from "@/shared/components/PageShell";
import { SubNav } from "@/shared/components/SubNav";

const t = scholarshipSubPages.browse;

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/scholarships/browse" });

export default async function ScholarshipBrowsePage() {
  const firstPage = await getScholarshipPage({ page: 1, pageSize: 12 });
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
        <ScholarshipBrowse initialPage={firstPage} />
      </>
      <RelatedStrip items={scholarshipHub.related} />
    </PageShell>
  );
}

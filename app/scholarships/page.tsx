import type { Metadata } from "next";
import { scholarshipHub as t } from "@/data/text/hubPages";
import { commonText } from "@/data/text/common";
import { FinderProgressBadge, FinderStats } from "@/modules/scholarships";
import { buildMetadata } from "@/modules/seo";
import { JourneyHub } from "@/shared/components/JourneyHub";
import { PageShell } from "@/shared/components/PageShell";

export const metadata: Metadata = buildMetadata({ title: t.title, description: t.description, path: "/scholarships" });

export default function ScholarshipsPage() {
  return (
    <PageShell eyebrow={t.eyebrow} title={t.heading} lead={t.lead} back={{ href: "/", label: commonText.actions.home }}>
      <FinderStats />
      <JourneyHub items={t.journey} related={t.related} badges={{ "/scholarships/workflow": <FinderProgressBadge /> }} />
    </PageShell>
  );
}

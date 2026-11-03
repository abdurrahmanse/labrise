import type { Metadata } from "next";
import { scholarshipHub as t } from "@/data/text/hubPages";
import { commonText } from "@/data/text/common";
import { FinderStats } from "@/modules/scholarships";
import { buildMetadata } from "@/modules/seo";
import { JourneyHub } from "@/shared/components/JourneyHub";
import { PageShell } from "@/shared/components/PageShell";
import { ProgressBadge } from "@/shared/components/ProgressBadge";

export const metadata: Metadata = buildMetadata({ title: t.title, description: t.description, path: "/scholarships" });

export default function ScholarshipsPage() {
  return (
    <PageShell eyebrow={t.eyebrow} title={t.heading} lead={t.lead} back={{ href: "/", label: commonText.actions.home }}>
      <FinderStats />
      <JourneyHub items={t.journey} related={t.related} badges={{ "/scholarships/workflow": <ProgressBadge kind="finder" /> }} />
    </PageShell>
  );
}

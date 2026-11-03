import type { Metadata } from "next";
import { professorHub as t } from "@/data/text/hubPages";
import { commonText } from "@/data/text/common";
import { ProfessorStats } from "@/modules/professors/components/ProfessorStats";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { JourneyHub } from "@/shared/components/JourneyHub";
import { PageShell } from "@/shared/components/PageShell";
import { ProgressBadge } from "@/shared/components/ProgressBadge";

export const metadata: Metadata = buildMetadata({ title: t.title, description: t.description, path: "/professors" });

export default function ProfessorsPage() {
  return (
    <PageShell eyebrow={t.eyebrow} title={t.heading} lead={t.lead} back={{ href: "/", label: commonText.actions.home }}>
      <ProfessorStats />
      <JourneyHub items={t.journey} related={t.related} badges={{ "/professors/workflow": <ProgressBadge kind="outreach" /> }} />
    </PageShell>
  );
}

import type { Metadata } from "next";
import { professorHub as t } from "@/content/text/hubPages";
import { commonText } from "@/content/text/common";
import { OutreachProgressBadge } from "@/modules/professors/components/OutreachProgressBadge";
import { ProfessorStats } from "@/modules/professors/components/ProfessorStats";
import { buildMetadata } from "@/modules/seo";
import { JourneyHub } from "@/shared/components/JourneyHub";
import { PageShell } from "@/shared/components/PageShell";

export const metadata: Metadata = buildMetadata({ title: t.title, description: t.description, path: "/professors" });

export default function ProfessorsPage() {
  return (
    <PageShell eyebrow={t.eyebrow} title={t.heading} lead={t.lead} back={{ href: "/", label: commonText.actions.home }}>
      <ProfessorStats />
      <JourneyHub items={t.journey} related={t.related} badges={{ "/professors/workflow": <OutreachProgressBadge /> }} />
    </PageShell>
  );
}

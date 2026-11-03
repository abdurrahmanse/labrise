import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { ApplicationForm } from "@/modules/planner/components/ApplicationForm";
import { ApplicationList } from "@/modules/planner/components/ApplicationList";
import { PlannerSummary } from "@/modules/planner/components/PlannerSummary";
import { TimelineBuilder } from "@/modules/planner/components/TimelineBuilder";
import { buildMetadata } from "@/modules/seo";
import { commonText } from "@/content/text/common";
import { plannerText as t } from "@/content/text/planner";

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/planner" });

export default function PlannerPage() {
  return (
    <PageShell eyebrow={t.eyebrow} title={t.heading} lead={t.lead} back={{ href: "/", label: commonText.actions.home }}>
      <p className="font-mono text-xs text-slate-400">{t.privacy}</p>
      <Block title={t.timeline.title}>
        <TimelineBuilder />
      </Block>
      <Block title={t.form.title}>
        <ApplicationForm />
      </Block>
      <Block title={t.list.title}>
        <PlannerSummary />
        <ApplicationList />
      </Block>
    </PageShell>
  );
}

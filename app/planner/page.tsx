import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { ApplicationForm, ApplicationList, PlannerSummary, TimelineBuilder } from "@/modules/planner";
import { buildMetadata } from "@/modules/seo";
import { commonText } from "@/data/text/common";
import { plannerText as t } from "@/data/text/planner";

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

import { CalendarCheck, FileText } from "lucide-react";
import { applyHubText as t, phaseIcons } from "@/data/text/apply";
import { commonText } from "@/data/text/common";
import { navLabels } from "@/data/text/site";
import { CompareRoutes } from "@/modules/apply/components/CompareRoutes";
import { RouteCards } from "@/modules/apply/components/RouteCards";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { Block } from "@/shared/components/Block";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/shared/components/IconBadge";
import { PageShell } from "@/shared/components/PageShell";
import { surface } from "@/shared/components/Surface";

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/apply" });

export default function ApplyPage() {
  return (
    <PageShell
      eyebrow={t.eyebrow}
      title={t.heading}
      lead={t.lead}
      back={{ href: "/", label: commonText.actions.home }}
      next={{ href: "/directory", label: navLabels.directory }}
    >
      <Block title={t.routes.title}>
        <RouteCards />
      </Block>

      <Block title={t.phases.title}>
        <ol className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {t.phases.items.map((phase, i) => {
            const Icon = phaseIcons[i];
            return (
              <li key={phase.title} className={surface({ tone: "quiet", depth: "none", padding: "md", className: "relative" })}>
                <IconBadge icon={Icon} className="mb-3" />
                <p className="font-mono text-xs text-indigo-300">0{i + 1}</p>
                <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                <p className="mt-1 font-sans text-[length:var(--text-body)] font-normal text-slate-300">{phase.body}</p>
              </li>
            );
          })}
        </ol>
      </Block>

      <Block title={t.compare.title}>
        <CompareRoutes />
      </Block>

      <Block title={t.together.title}>
        <p className="font-sans text-[length:var(--text-body)] font-normal text-slate-300">{t.together.body}</p>
        <div className="flex flex-wrap gap-3">
          <Button href="/planner" size="lg" variant="secondary" leftIcon={<CalendarCheck className="h-4 w-4" aria-hidden />}>{t.together.planner}</Button>
          <Button href="/documents" size="lg" variant="secondary" leftIcon={<FileText className="h-4 w-4" aria-hidden />}>{t.together.documents}</Button>
        </div>
      </Block>
    </PageShell>
  );
}

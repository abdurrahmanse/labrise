import Link from "next/link";
import { CalendarCheck, FileText } from "lucide-react";
import { applyHubText as t, phaseIcons } from "@/data/text/apply";
import { commonText } from "@/data/text/common";
import { navLabels } from "@/data/text/site";
import { CompareRoutes } from "@/modules/apply/components/CompareRoutes";
import { RouteCards } from "@/modules/apply/components/RouteCards";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/apply" });

const action = "inline-flex items-center gap-2 border-2 border-white/40 bg-white/[0.04] px-5 py-3 font-bold uppercase tracking-wider text-sm text-slate-100 hover:border-indigo-400 hover:text-indigo-300";

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
              <li key={phase.title} className="relative border-2 border-white/20 bg-canvas-card/50 p-4 backdrop-blur-xl">
                <span className="mb-3 flex h-10 w-10 items-center justify-center bg-indigo-600 text-white"><Icon className="h-5 w-5" aria-hidden /></span>
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
          <Link href="/planner" className={action}><CalendarCheck className="h-4 w-4" aria-hidden /> {t.together.planner}</Link>
          <Link href="/documents" className={action}><FileText className="h-4 w-4" aria-hidden /> {t.together.documents}</Link>
        </div>
      </Block>
    </PageShell>
  );
}

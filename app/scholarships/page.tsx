import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { finderText as t } from "@/data/text/scholarships";
import { commonText } from "@/data/text/common";
import { SCHOLARSHIP_TABS } from "@/components/scholarships/scholarshipTabs";
import { FinderStats } from "@/modules/scholarships/components/FinderStats";
import { ScholarshipBrowse } from "@/modules/scholarships/components/ScholarshipBrowse";
import { WorkflowStepper } from "@/modules/scholarships/components/WorkflowStepper";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { SubNav } from "@/shared/components/SubNav";
import { IconFor } from "@/shared/components/IconFor";

export const metadata: Metadata = buildMetadata({ title: t.title, description: t.description, path: "/scholarships" });

export default function ScholarshipsPage() {
  return (
    <PageShell eyebrow={t.eyebrow} title={t.heading} lead={t.lead} back={{ href: "/", label: commonText.actions.home }}>
      <SubNav label={t.eyebrow} items={SCHOLARSHIP_TABS} />
      <FinderStats />
      <Block title={t.browse.title}>
        <ScholarshipBrowse />
      </Block>
      <Block title={t.workflow.title}>
        <p className="font-sans text-[length:var(--text-body)] font-normal text-slate-300">{t.workflow.lead}</p>
        <WorkflowStepper />
      </Block>
      <Block title={t.tools.title}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.tools.items.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group flex items-center gap-4 border-2 border-white/30 bg-canvas-card/60 p-4 backdrop-blur-xl shadow-[4px_4px_0_0_rgba(15,23,42,0.18)] transition-all hover:-translate-y-0.5 hover:border-indigo-400">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-indigo-600 text-white"><IconFor text={tool.title} className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1">
                <span className="block text-lg font-bold text-white">{tool.title}</span>
                <span className="block font-mono text-xs text-slate-400">{tool.meta}</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-indigo-400" aria-hidden />
            </Link>
          ))}
        </div>
      </Block>
    </PageShell>
  );
}

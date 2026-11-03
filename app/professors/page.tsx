import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROFESSOR_TABS } from "@/components/professors/professorTabs";
import { commonText } from "@/data/text/common";
import { professorsHubText as t } from "@/data/text/professorsHub";
import { FindProfessors } from "@/modules/professors/components/FindProfessors";
import { OutreachStepper } from "@/modules/professors/components/OutreachStepper";
import { ProfessorStats } from "@/modules/professors/components/ProfessorStats";
import { SupervisorNeed } from "@/modules/professors/components/SupervisorNeed";
import { TemplatePicker } from "@/modules/professors/components/TemplatePicker";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { Block } from "@/shared/components/Block";
import { IconFor } from "@/shared/components/IconFor";
import { PageShell } from "@/shared/components/PageShell";
import { SubNav } from "@/shared/components/SubNav";

export const metadata: Metadata = buildMetadata({ title: t.title, description: t.description, path: "/professors" });

export default function ProfessorsPage() {
  return (
    <PageShell eyebrow={t.eyebrow} title={t.heading} lead={t.lead} back={{ href: "/", label: commonText.actions.home }}>
      <SubNav label={t.eyebrow} items={PROFESSOR_TABS} />
      <ProfessorStats />
      <Block title={t.find.title}><FindProfessors /></Block>
      <Block title={t.need.title}><SupervisorNeed /></Block>
      <Block title={t.workflow.title}>
        <p className="font-sans text-[length:var(--text-body)] font-normal text-slate-300">{t.workflow.lead}</p>
        <OutreachStepper />
      </Block>
      <Block title={t.templates.title}>
        <p className="font-sans text-[length:var(--text-body)] font-normal text-slate-300">{t.templates.lead}</p>
        <TemplatePicker />
      </Block>
      <Block title={t.tools.title}>
        <div className="grid gap-4 md:grid-cols-2">
          {t.tools.items.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group flex items-center gap-4 border-2 border-white/30 bg-canvas-card/60 p-4 backdrop-blur-xl shadow-[4px_4px_0_0_rgba(15,23,42,0.18)] transition-all hover:-translate-y-0.5 hover:border-indigo-400">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-indigo-600 text-white"><IconFor text={tool.title} className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1"><span className="block text-lg font-bold text-white">{tool.title}</span><span className="block font-mono text-xs text-slate-400">{tool.meta}</span></span>
              <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-indigo-400" aria-hidden />
            </Link>
          ))}
        </div>
      </Block>
    </PageShell>
  );
}

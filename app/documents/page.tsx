import type { Metadata } from "next";
import { documentsHubText as t } from "@/data/text/documents";
import { commonText } from "@/data/text/common";
import { DocumentsHub } from "@/modules/documents/components/DocumentsHub";
import { DocumentsProgress } from "@/modules/documents/components/DocumentsProgress";
import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo/buildMetadata";

export const metadata: Metadata = buildMetadata({ title: t.title, description: t.description, path: "/documents" });

export default function DocumentsPage() {
  return (
    <PageShell eyebrow={t.eyebrow} title={t.heading} lead={t.lead} back={{ href: "/", label: commonText.actions.home }}>
      <DocumentsProgress />
      <DocumentsHub />
      <Block title={t.how.title}>
        <ol className="grid gap-4 md:grid-cols-3">
          {t.how.steps.map((step, i) => (
            <li key={step.title} className="border-2 border-white/20 bg-canvas-card/50 p-4 backdrop-blur-xl">
              <span className="mb-2 inline-flex h-8 w-8 items-center justify-center bg-indigo-600 font-mono font-bold text-white">{i + 1}</span>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-1 font-sans text-[length:var(--text-body)] font-normal text-slate-300">{step.body}</p>
            </li>
          ))}
        </ol>
      </Block>
    </PageShell>
  );
}

import type { Metadata } from "next";
import { documentsHubText as t } from "@/data/text/documents";
import { commonText } from "@/data/text/common";
import { getDocuments } from "@/modules/content/server";
import { DocumentsHub } from "@/modules/documents/components/DocumentsHub";
import { DocumentsProgress } from "@/modules/documents/components/DocumentsProgress";
import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo";
import { surface } from "@/shared/components/Surface";

export const metadata: Metadata = buildMetadata({ title: t.title, description: t.description, path: "/documents" });

export default async function DocumentsPage() {
  const documents = await getDocuments();
  return (
    <PageShell eyebrow={t.eyebrow} title={t.heading} lead={t.lead} back={{ href: "/", label: commonText.actions.home }}>
      <DocumentsProgress initialDocuments={documents} />
      <DocumentsHub initialDocuments={documents} />
      <Block title={t.how.title}>
        <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {t.how.steps.map((step, i) => (
            <li key={step.title} className={surface({ tone: "quiet", depth: "none", padding: "md" })}>
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

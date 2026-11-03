import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDocument, getDocuments } from "@/modules/content/server";
import { documentDetailText as t, documentMeta } from "@/data/text/documents";
import { navLabels } from "@/data/text/site";
import { DocumentBody } from "@/modules/documents/components/DocumentBody";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { JsonLd } from "@/modules/seo/JsonLd";
import { breadcrumbSchema, howToSchema } from "@/modules/seo/schemas";
import { IconTile } from "@/shared/components/IconTile";
import { PageFallback } from "@/shared/components/PageFallback";
import { PageShell } from "@/shared/components/PageShell";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return (await getDocuments()).map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = await getDocument((await params).id);
  if (!doc) return { title: t.notFound };
  return buildMetadata({ title: t.metaTitle(doc.name), description: doc.what, path: `/documents/${doc.id}` });
}

async function DocumentPageContent({ params }: Props) {
  const { id } = await params;
  const documentsData = await getDocuments();
  const doc = documentsData.find((d) => d.id === id);
  if (!doc) notFound();

  const index = documentsData.findIndex((d) => d.id === doc.id);
  const prev = documentsData[index - 1];
  const next = documentsData[index + 1];
  const Icon = documentMeta[doc.id]?.Icon;

  return (
    <PageShell
      eyebrow={t.eyebrow(doc.badge)}
      title={doc.name}
      lead={doc.what}
      media={Icon && <IconTile icon={Icon} size={56} />}
      back={{ href: "/documents", label: t.back }}
      prev={prev && { href: `/documents/${prev.id}`, label: prev.name.replace(/\s*\(.*\)$/, "") }}
      next={next && { href: `/documents/${next.id}`, label: next.name.replace(/\s*\(.*\)$/, "") }}
    >
      <JsonLd data={howToSchema(doc.name, doc.what, doc.structure.map((s) => `${s.section}: ${s.guidance}`))} />
      <JsonLd data={breadcrumbSchema([{ name: navLabels.home, path: "/" }, { name: t.back, path: "/documents" }, { name: doc.name, path: `/documents/${doc.id}` }])} />
      <DocumentBody doc={doc} others={documentsData.filter((d) => d.id !== doc.id)} />
    </PageShell>
  );
}

export default function DocumentPage({ params }: Props) {
  return (
    <Suspense fallback={<PageFallback />}>
      <DocumentPageContent params={params} />
    </Suspense>
  );
}


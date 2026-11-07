import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { directoryTypes } from "@/modules/directory/catalog";
import { DirectoryTypeList } from "@/modules/directory/lists/DirectoryTypeList";
import { directoryTypeSchema } from "@/modules/directory/contracts";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo";
import { WithParams } from "@/shared/components/WithParams";
import { navLabels, notFoundTitles, pageText } from "@/content/text/site";

interface Props {
  params: Promise<{ type: string }>;
}

export function generateStaticParams() {
  return directoryTypes.map((t) => ({ type: t.type }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const entry = directoryTypes.find((t) => t.type === type);
  if (!entry) return { title: notFoundTitles.directory, robots: { index: false, follow: false } };
  return buildMetadata({
    title: pageText.directoryType.metaTitle(entry.title),
    description: entry.lead,
    path: `/directory/${entry.type}`
  });
}

function DirectoryTypeContent({ type }: { type: string }) {
  const parsed = directoryTypeSchema.safeParse(type);
  if (!parsed.success) notFound();

  const index = directoryTypes.findIndex((t) => t.type === parsed.data);
  const entry = directoryTypes[index];
  const prev = directoryTypes[index - 1];
  const next = directoryTypes[index + 1];

  return (
    <PageShell
      eyebrow={pageText.directoryType.eyebrow}
      title={entry.title}
      lead={entry.lead}
      trail={[{ label: navLabels.home, href: "/" }, { label: navLabels.directory, href: "/directory" }, { label: entry.title, href: `/directory/${entry.type}` }]}
      prev={prev && { href: `/directory/${prev.type}`, label: prev.title }}
      next={next && { href: `/directory/${next.type}`, label: next.title }}
    >
      <Suspense fallback={null}>
        <DirectoryTypeList type={parsed.data} />
      </Suspense>
    </PageShell>
  );
}

export default function DirectoryTypePage({ params }: Props) {
  return <WithParams params={params}>{({ type }) => <DirectoryTypeContent type={type} />}</WithParams>;
}

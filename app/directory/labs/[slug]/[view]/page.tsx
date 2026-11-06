import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { findLab, labs } from "@/modules/directory/catalog";
import { labSlug } from "@/modules/directory/contracts";
import { LAB_VIEWS, LabSectionView, type LabView } from "@/modules/directory/components/detail/LabSectionView";
import { PageFallback } from "@/shared/components/PageFallback";
import { buildMetadata } from "@/modules/seo";
import { sectionText } from "@/content/text/directory";

interface Props {
  params: Promise<{ slug: string; view: string }>;
}

const isView = (v: string): v is LabView => (LAB_VIEWS as string[]).includes(v);

export function generateStaticParams() {
  return labs.flatMap((l) => LAB_VIEWS.map((view) => ({ slug: labSlug(l), view })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, view } = await params;
  const lab = findLab(slug);
  if (!lab || !isView(view)) return { title: "Not found" };
  return buildMetadata({
    title: `${sectionText.lab.titles[view]}: ${lab.name}`,
    description: `${sectionText.lab.hints[view]}. ${lab.focus}.`,
    path: `/directory/labs/${slug}/${view}`
  });
}

async function LabViewContent({ params }: Props) {
  const { slug, view } = await params;
  const lab = findLab(slug);
  if (!lab || !isView(view)) notFound();
  return <LabSectionView lab={lab} view={view} />;
}

export default function LabViewPage({ params }: Props) {
  return (
    <Suspense fallback={<PageFallback />}>
      <LabViewContent params={params} />
    </Suspense>
  );
}

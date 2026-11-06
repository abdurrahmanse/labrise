import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { countries, entryMeta, professors, providers, scholarships, universities } from "@/modules/directory/catalog";
import { countrySlug, directoryTypeSchema, professorSlug, providerSlug, scholarshipSlug, universitySlug } from "@/modules/directory/contracts";
import { DirectoryEntry } from "@/modules/directory/entry/DirectoryEntry";
import { buildMetadata } from "@/modules/seo";
import { PageFallback } from "@/shared/components/PageFallback";
import { notFoundTitles } from "@/content/text/site";

interface Props {
  params: Promise<{ type: string; slug: string }>;
}

export function generateStaticParams() {
  return [
    ...countries.map((c) => ({ type: "countries", slug: countrySlug(c) })),
    ...universities.map((u) => ({ type: "universities", slug: universitySlug(u) })),
    ...professors.map((p) => ({ type: "professors", slug: professorSlug(p) })),
    ...scholarships.map((s) => ({ type: "scholarships", slug: scholarshipSlug(s) })),
    ...providers.map((p) => ({ type: "providers", slug: providerSlug(p) }))
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type, slug } = await params;
  const meta = entryMeta(type, slug);
  return meta ? buildMetadata({ ...meta, path: `/directory/${type}/${slug}` }) : { title: notFoundTitles.generic };
}

async function DirectoryDetailPageContent({ params }: Props) {
  const { type, slug } = await params;
  const parsed = directoryTypeSchema.safeParse(type);
  if (!parsed.success) notFound();
  return <DirectoryEntry type={parsed.data} slug={slug} />;
}

export default function DirectoryDetailPage({ params }: Props) {
  return (
    <Suspense fallback={<PageFallback />}>
      <DirectoryDetailPageContent params={params} />
    </Suspense>
  );
}

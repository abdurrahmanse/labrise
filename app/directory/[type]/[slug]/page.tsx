import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { countries, entryMeta, labs, professors, providers, scholarships, universities } from "@/modules/directory/catalog";
import { countrySlug, directoryTypeSchema, labSlug, professorSlug, providerSlug, scholarshipSlug, universitySlug } from "@/modules/directory/contracts";
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
    ...providers.map((p) => ({ type: "providers", slug: providerSlug(p) })),
    ...labs.map((l) => ({ type: "labs", slug: labSlug(l) }))
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type, slug } = await params;
  const meta = entryMeta(type, slug);
  return meta ? buildMetadata({ ...meta, path: `/directory/${type}/${slug}` }) : { title: notFoundTitles.generic, robots: { index: false, follow: false } };
}

/** Unknown addresses answer 404: the params are read and checked before anything streams, so the status is still open. */
export default async function DirectoryDetailPage({ params }: Props) {
  const { type, slug } = await params;
  const parsed = directoryTypeSchema.safeParse(type);
  if (!parsed.success || !entryMeta(type, slug)) notFound();

  return (
    <Suspense fallback={<PageFallback />}>
      <DirectoryEntry type={parsed.data} slug={slug} />
    </Suspense>
  );
}

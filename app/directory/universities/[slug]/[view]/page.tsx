import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { findUniversity, universities } from "@/modules/directory/catalog";
import { universitySlug } from "@/modules/directory/contracts";
import { UNIVERSITY_VIEWS, UniversitySectionView, type UniversityView } from "@/modules/directory/components/detail/UniversitySectionView";
import { PageFallback } from "@/shared/components/PageFallback";
import { buildMetadata } from "@/modules/seo";
import { sectionText } from "@/content/text/directory";

interface Props {
  params: Promise<{ slug: string; view: string }>;
}

const isView = (v: string): v is UniversityView => (UNIVERSITY_VIEWS as string[]).includes(v);

export function generateStaticParams() {
  return universities.flatMap((u) => UNIVERSITY_VIEWS.map((view) => ({ slug: universitySlug(u), view })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, view } = await params;
  const university = findUniversity(slug);
  if (!university || !isView(view)) return { title: "Not found" };
  return buildMetadata({
    title: `${sectionText.university.titles[view]}: ${university.name}`,
    description: `${sectionText.university.hints[view]} at ${university.name}, ${university.country}.`,
    path: `/directory/universities/${slug}/${view}`
  });
}

async function UniversityViewContent({ params }: Props) {
  const { slug, view } = await params;
  const university = findUniversity(slug);
  if (!university || !isView(view)) notFound();
  return <UniversitySectionView university={university} view={view} />;
}

export default function UniversityViewPage({ params }: Props) {
  return (
    <Suspense fallback={<PageFallback />}>
      <UniversityViewContent params={params} />
    </Suspense>
  );
}

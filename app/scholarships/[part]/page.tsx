import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ScholarshipFinderView } from "@/components/scholarships/ScholarshipFinderView";
import { SCHOLARSHIP_TABS, type ScholarshipPart } from "@/components/scholarships/scholarshipTabs";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo";
import { PageFallback } from "@/shared/components/PageFallback";
import { navLabels, notFoundTitles, pageText } from "@/data/text/site";

interface Props {
  params: Promise<{ part: string }>;
}

const PARTS: { id: ScholarshipPart; title: string }[] = [
  { id: "formulas", title: pageText.scholarshipFinder.parts.formulas },
  { id: "portals", title: pageText.scholarshipFinder.parts.portals }
];

export function generateStaticParams() {
  return PARTS.map((p) => ({ part: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { part } = await params;
  const entry = PARTS.find((p) => p.id === part);
  if (!entry) return { title: notFoundTitles.generic };
  return buildMetadata({ title: entry.title, description: pageText.scholarshipFinder.partDescription, path: `/scholarships/${entry.id}` });
}

async function ScholarshipPartPageContent({ params }: Props) {
  const { part } = await params;
  const entry = PARTS.find((p) => p.id === part);
  if (!entry) notFound();
  const index = SCHOLARSHIP_TABS.findIndex((t) => t.href === `/scholarships/${entry.id}`);

  return (
    <PageShell
      eyebrow={pageText.scholarshipFinder.eyebrow}
      title={entry.title}
      back={{ href: "/scholarships", label: navLabels.workflow }}
      prev={SCHOLARSHIP_TABS[index - 1]}
      next={SCHOLARSHIP_TABS[index + 1]}
    >
      <ScholarshipFinderView part={entry.id} />
    </PageShell>
  );
}

export default function ScholarshipPartPage({ params }: Props) {
  return (
    <Suspense fallback={<PageFallback />}>
      <ScholarshipPartPageContent params={params} />
    </Suspense>
  );
}

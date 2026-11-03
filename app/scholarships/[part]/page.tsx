import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ScholarshipFinderView } from "@/components/scholarships/ScholarshipFinderView";
import { SCHOLARSHIP_TABS, type ScholarshipPart } from "@/components/scholarships/scholarshipTabs";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo/buildMetadata";

interface Props {
  params: Promise<{ part: string }>;
}

const PARTS: { id: ScholarshipPart; title: string }[] = [
  { id: "formulas", title: "Scholarship search formulas" },
  { id: "portals", title: "Official portals and fraud warnings" }
];

export function generateStaticParams() {
  return PARTS.map((p) => ({ part: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { part } = await params;
  const entry = PARTS.find((p) => p.id === part);
  if (!entry) return { title: "Not found" };
  return buildMetadata({ title: entry.title, description: "Part of the scholarship finder guide.", path: `/scholarships/${entry.id}` });
}

export default async function ScholarshipPartPage({ params }: Props) {
  const { part } = await params;
  const entry = PARTS.find((p) => p.id === part);
  if (!entry) notFound();
  const index = SCHOLARSHIP_TABS.findIndex((t) => t.href === `/scholarships/${entry.id}`);

  return (
    <PageShell
      eyebrow="Scholarship finder"
      title={entry.title}
      back={{ href: "/scholarships", label: "11-step workflow" }}
      prev={SCHOLARSHIP_TABS[index - 1]}
      next={SCHOLARSHIP_TABS[index + 1]}
    >
      <ScholarshipFinderView part={entry.id} />
    </PageShell>
  );
}

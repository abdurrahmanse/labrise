import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/overview/PageShell";
import { OverviewExplorer, type ExplorerMode } from "@/components/overview/OverviewExplorer";

interface Props {
  params: Promise<{ type: string }>;
}

const TYPES: { type: ExplorerMode; title: string; lead: string }[] = [
  { type: "countries", title: "Countries", lead: "Funded routes and what you get." },
  { type: "universities", title: "Universities", lead: "Funding type and typical deadline." },
  { type: "professors", title: "Professors", lead: "Copy emails only from the official university page." }
];

export function generateStaticParams() {
  return TYPES.map((t) => ({ type: t.type }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const entry = TYPES.find((t) => t.type === type);
  return { title: entry ? `${entry.title} Directory` : "Directory not found" };
}

export default async function DirectoryTypePage({ params }: Props) {
  const { type } = await params;
  const idx = TYPES.findIndex((t) => t.type === type);
  if (idx === -1) notFound();

  const entry = TYPES[idx];
  const prev = TYPES[idx - 1];
  const next = TYPES[idx + 1];

  return (
    <PageShell
      eyebrow="Directory"
      title={entry.title}
      lead={entry.lead}
      back={{ href: "/directory", label: "Directory" }}
      prev={prev ? { href: `/directory/${prev.type}`, label: prev.title } : undefined}
      next={next ? { href: `/directory/${next.type}`, label: next.title } : undefined}
    >
      <OverviewExplorer fixedMode={entry.type} />
    </PageShell>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/shared/components/PageShell";
import { directoryTypeSchema } from "@/modules/directory/api/schemas";
import { CountriesExplorer, ProfessorsExplorer, ScholarshipsExplorer, UniversitiesExplorer } from "@/modules/directory/components/DirectoryExplorer";
import { countries, directoryTypes, professors, scholarships, universities } from "@/modules/directory/data";
import { buildMetadata } from "@/modules/seo/buildMetadata";

interface Props {
  params: Promise<{ type: string }>;
}

export function generateStaticParams() {
  return directoryTypes.map((t) => ({ type: t.type }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const entry = directoryTypes.find((t) => t.type === type);
  if (!entry) return { title: "Directory not found" };
  return buildMetadata({
    title: `${entry.title} directory for fully funded study`,
    description: entry.lead,
    path: `/directory/${entry.type}`
  });
}

export default async function DirectoryTypePage({ params }: Props) {
  const parsed = directoryTypeSchema.safeParse((await params).type);
  if (!parsed.success) notFound();

  const index = directoryTypes.findIndex((t) => t.type === parsed.data);
  const entry = directoryTypes[index];
  const prev = directoryTypes[index - 1];
  const next = directoryTypes[index + 1];

  return (
    <PageShell
      eyebrow="Directory"
      title={entry.title}
      lead={entry.lead}
      back={{ href: "/directory", label: "Directory" }}
      prev={prev && { href: `/directory/${prev.type}`, label: prev.title }}
      next={next && { href: `/directory/${next.type}`, label: next.title }}
    >
      {parsed.data === "countries" && <CountriesExplorer initialData={countries} />}
      {parsed.data === "universities" && <UniversitiesExplorer initialData={universities} />}
      {parsed.data === "scholarships" && <ScholarshipsExplorer initialData={scholarships} />}
      {parsed.data === "professors" && <ProfessorsExplorer initialData={professors} />}
    </PageShell>
  );
}

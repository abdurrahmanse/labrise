import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { ProfessorsExplorer } from "@/modules/directory/components/professors/ProfessorsExplorer";
import { PageShell } from "@/shared/components/PageShell";
import { directoryTypeSchema } from "@/modules/directory/api/schemas";
import { CountriesList, ProvidersList, ScholarshipsList, UniversitiesList } from "@/modules/directory/components/lists/DirectoryLists";
import { countries, directoryTypes, professors, providers, scholarships, universities } from "@/modules/directory/data";
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

async function DirectoryTypePageContent({ params }: Props) {
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
      <Suspense fallback={null}>
        {parsed.data === "countries" && <CountriesList initialData={countries} />}
        {parsed.data === "universities" && <UniversitiesList initialData={universities} />}
        {parsed.data === "providers" && <ProvidersList initialData={providers} />}
        {parsed.data === "scholarships" && <ScholarshipsList initialData={scholarships} />}
        {parsed.data === "professors" && <ProfessorsExplorer initialData={professors} />}
      </Suspense>
    </PageShell>
  );
}

export default function DirectoryTypePage({ params }: Props) {
  return (
    <Suspense fallback={<div className="mx-auto min-h-[60vh] max-w-7xl px-4 py-16 text-slate-400">Loading…</div>}>
      <DirectoryTypePageContent params={params} />
    </Suspense>
  );
}

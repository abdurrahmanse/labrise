import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  directoryTypeSchema,
  CountryDetailView,
  ProfessorDetailView,
  ProviderDetailView,
  ScholarshipDetailView,
  UniversityDetailView,
  countries,
  professors,
  providers,
  scholarships,
  universities,
  findCountry,
  findProfessor,
  findProvider,
  findScholarship,
  findUniversity,
  countrySlug,
  professorSlug,
  providerSlug,
  scholarshipSlug,
  universitySlug,
  fieldOf,
  entryMeta
} from "@/modules/directory";
import { getCountryGuide } from "@/modules/content/server";
import { buildMetadata, JsonLd, breadcrumbSchema, personSchema, universitySchema } from "@/modules/seo";
import { PageFallback } from "@/shared/components/PageFallback";
import { navLabels, notFoundTitles } from "@/data/text/site";

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

  const crumbs = [
    { name: navLabels.home, path: "/" },
    { name: navLabels.directory, path: "/directory" },
    { name: parsed.data, path: `/directory/${parsed.data}` }
  ];

  if (parsed.data === "countries") {
    const country = findCountry(slug);
    if (!country) notFound();
    const dossier = await getCountryGuide(slug);
    return (
      <>
        <JsonLd data={breadcrumbSchema([...crumbs, { name: country.country, path: `/directory/countries/${slug}` }])} />
        <CountryDetailView country={country} dossier={dossier} />
      </>
    );
  }

  if (parsed.data === "universities") {
    const university = findUniversity(slug);
    if (!university) notFound();
    return (
      <>
        <JsonLd data={universitySchema(university.name, university.site, university.country)} />
        <JsonLd data={breadcrumbSchema([...crumbs, { name: university.name, path: `/directory/universities/${slug}` }])} />
        <UniversityDetailView university={university} />
      </>
    );
  }

  if (parsed.data === "providers") {
    const provider = findProvider(slug);
    if (!provider) notFound();
    return (
      <>
        <JsonLd data={breadcrumbSchema([...crumbs, { name: provider.name, path: `/directory/providers/${slug}` }])} />
        <ProviderDetailView provider={provider} />
      </>
    );
  }

  if (parsed.data === "scholarships") {
    const scholarship = findScholarship(slug);
    if (!scholarship) notFound();
    return (
      <>
        <JsonLd data={breadcrumbSchema([...crumbs, { name: scholarship.name, path: `/directory/scholarships/${slug}` }])} />
        <ScholarshipDetailView scholarship={scholarship} />
      </>
    );
  }

  const professor = findProfessor(slug);
  if (!professor) notFound();
  return (
    <>
      <JsonLd data={personSchema(professor.name, professor.university, fieldOf(professor.group).title)} />
      <JsonLd data={breadcrumbSchema([...crumbs, { name: professor.name, path: `/directory/professors/${slug}` }])} />
      <ProfessorDetailView professor={professor} />
    </>
  );
}

export default function DirectoryDetailPage({ params }: Props) {
  return (
    <Suspense fallback={<PageFallback />}>
      <DirectoryDetailPageContent params={params} />
    </Suspense>
  );
}

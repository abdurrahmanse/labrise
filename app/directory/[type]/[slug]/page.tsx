import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { directoryTypeSchema } from "@/modules/directory/api/schemas";
import { CountryDetailView } from "@/modules/directory/components/detail/CountryDetailView";
import { ProfessorDetailView } from "@/modules/directory/components/detail/ProfessorDetailView";
import { ProviderDetailView } from "@/modules/directory/components/detail/ProviderDetailView";
import { ScholarshipDetailView } from "@/modules/directory/components/detail/ScholarshipDetailView";
import { UniversityDetailView } from "@/modules/directory/components/detail/UniversityDetailView";
import { countries, professors, providers, scholarships, universities } from "@/modules/directory/data";
import { findCountry, findProfessor, findProvider, findScholarship, findUniversity } from "@/modules/directory/lib/lookups";
import { countrySlug, professorSlug, providerSlug, scholarshipSlug, universitySlug } from "@/modules/directory/lib/slugs";
import { getCountryGuide } from "@/modules/content/server";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { JsonLd } from "@/modules/seo/JsonLd";
import { breadcrumbSchema, personSchema, universitySchema } from "@/modules/seo/schemas";
import { fieldOf } from "@/modules/directory/data/fields";
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
  const path = `/directory/${type}/${slug}`;

  if (type === "countries") {
    const c = findCountry(slug);
    if (c) return buildMetadata({ title: `Fully funded study in ${c.country}`, description: `${c.routes}. ${c.funding}.`, path });
  }
  if (type === "universities") {
    const u = findUniversity(slug);
    if (u) return buildMetadata({ title: `${u.name}: funding and how to apply`, description: `${u.funding}. Typical deadline: ${u.deadline}.`, path });
  }
  if (type === "providers") {
    const p = findProvider(slug);
    if (p) return buildMetadata({ title: `${p.name}: requirements and how to apply`, description: `${p.programs.join(", ")}. ${p.route}`, path });
  }
  if (type === "scholarships") {
    const s = findScholarship(slug);
    if (s) return buildMetadata({ title: `${s.name}: eligibility, coverage and deadline`, description: `${s.level} in ${s.host}. Covers ${s.covers}.`, path });
  }
  if (type === "professors") {
    const p = findProfessor(slug);
    if (p) return buildMetadata({ title: `${p.name}, ${p.university}`, description: `${p.group} research group in ${p.country}. How to approach and what to read.`, path });
  }
  return { title: notFoundTitles.generic };
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

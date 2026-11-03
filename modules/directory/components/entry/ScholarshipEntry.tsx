import { notFound } from "next/navigation";
import { JsonLd, breadcrumbSchema, scholarshipGrantSchema } from "@/modules/seo";
import { findScholarship, providerOfScholarship } from "../../lib/lookups";
import { ScholarshipDetailView } from "../detail/ScholarshipDetailView";
import { entryBreadcrumbs } from "./entryBreadcrumbs";

export function ScholarshipEntry({ slug }: { slug: string }) {
  const scholarship = findScholarship(slug);
  if (!scholarship) notFound();
  const funder = providerOfScholarship(scholarship.name)?.name;
  return (
    <>
      <JsonLd data={scholarshipGrantSchema(scholarship.name, `${scholarship.covers}. ${scholarship.eligibility}`, scholarship.site, funder)} />
      <JsonLd data={breadcrumbSchema(entryBreadcrumbs("scholarships", scholarship.name, slug))} />
      <ScholarshipDetailView scholarship={scholarship} />
    </>
  );
}

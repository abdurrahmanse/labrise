import { notFound } from "next/navigation";
import { JsonLd, breadcrumbSchema, universitySchema } from "@/modules/seo";
import { findUniversity } from "../../utils/lookups";
import { UniversityDetailView } from "../detail/UniversityDetailView";
import { entryBreadcrumbs } from "./entryBreadcrumbs";

export function UniversityEntry({ slug }: { slug: string }) {
  const university = findUniversity(slug);
  if (!university) notFound();
  return (
    <>
      <JsonLd data={universitySchema(university.name, university.site, university.country)} />
      <JsonLd data={breadcrumbSchema(entryBreadcrumbs("universities", university.name, slug))} />
      <UniversityDetailView university={university} />
    </>
  );
}

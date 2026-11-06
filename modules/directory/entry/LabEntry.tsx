import { notFound } from "next/navigation";
import { JsonLd, breadcrumbSchema } from "@/modules/seo";
import { findLab } from "../lookups";
import { LabDetailView } from "../detail/LabDetailView";
import { entryBreadcrumbs } from "./entryBreadcrumbs";

export function LabEntry({ slug }: { slug: string }) {
  const lab = findLab(slug);
  if (!lab) notFound();
  return (
    <>
      <JsonLd data={breadcrumbSchema(entryBreadcrumbs("labs", lab.name, slug))} />
      <LabDetailView lab={lab} />
    </>
  );
}

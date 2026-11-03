import { notFound } from "next/navigation";
import { JsonLd, breadcrumbSchema, personSchema } from "@/modules/seo";
import { fieldOf } from "../../data/fields";
import { findProfessor } from "../../utils/lookups";
import { ProfessorDetailView } from "../detail/ProfessorDetailView";
import { entryBreadcrumbs } from "./entryBreadcrumbs";

export function ProfessorEntry({ slug }: { slug: string }) {
  const professor = findProfessor(slug);
  if (!professor) notFound();
  return (
    <>
      <JsonLd data={personSchema(professor.name, professor.university, fieldOf(professor.group).title)} />
      <JsonLd data={breadcrumbSchema(entryBreadcrumbs("professors", professor.name, slug))} />
      <ProfessorDetailView professor={professor} />
    </>
  );
}

import { notFound } from "next/navigation";
import { getCountryGuide } from "@/modules/content/server";
import { JsonLd, breadcrumbSchema } from "@/modules/seo";
import { findCountry } from "../../lib/lookups";
import { CountryDetailView } from "../detail/CountryDetailView";
import { entryBreadcrumbs } from "./entryBreadcrumbs";

/** A country page: its breadcrumb data and the detail view, with the country guide when one exists. */
export async function CountryEntry({ slug }: { slug: string }) {
  const country = findCountry(slug);
  if (!country) notFound();
  const dossier = await getCountryGuide(slug);
  return (
    <>
      <JsonLd data={breadcrumbSchema(entryBreadcrumbs("countries", country.country, slug))} />
      <CountryDetailView country={country} dossier={dossier} />
    </>
  );
}

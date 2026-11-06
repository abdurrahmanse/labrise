import { notFound } from "next/navigation";
import { JsonLd, breadcrumbSchema } from "@/modules/seo";
import { findProvider } from "../lookups";
import { ProviderDetailView } from "../detail/ProviderDetailView";
import { entryBreadcrumbs } from "./entryBreadcrumbs";

export function ProviderEntry({ slug }: { slug: string }) {
  const provider = findProvider(slug);
  if (!provider) notFound();
  return (
    <>
      <JsonLd data={breadcrumbSchema(entryBreadcrumbs("providers", provider.name, slug))} />
      <ProviderDetailView provider={provider} />
    </>
  );
}

import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { countries, findCountry } from "@/modules/directory/catalog";
import { countrySlug } from "@/modules/directory/contracts";
import { COUNTRY_VIEWS, COUNTRY_VIEW_TITLES, CountrySectionView, type CountryView } from "@/modules/directory/components/detail/CountrySectionView";
import { buildMetadata } from "@/modules/seo";
import { countryViewText } from "@/content/text/directory";
import { PageFallback } from "@/shared/components/PageFallback";

interface Props {
  params: Promise<{ slug: string; view: string }>;
}

const isView = (v: string): v is CountryView => (COUNTRY_VIEWS as readonly string[]).includes(v);

export function generateStaticParams() {
  return countries.flatMap((c) => COUNTRY_VIEWS.map((view) => ({ slug: countrySlug(c), view })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, view } = await params;
  const country = findCountry(slug);
  if (!country || !isView(view)) return { title: countryViewText.notFound };
  return buildMetadata({
    title: countryViewText.metaTitle(COUNTRY_VIEW_TITLES[view], country.country),
    description: countryViewText.metaDescription(COUNTRY_VIEW_TITLES[view], country.country),
    path: `/directory/countries/${slug}/${view}`
  });
}

async function CountryViewPageContent({ params }: Props) {
  const { slug, view } = await params;
  const country = findCountry(slug);
  if (!country || !isView(view)) notFound();
  return <CountrySectionView country={country} view={view} />;
}

export default function CountryViewPage({ params }: Props) {
  return (
    <Suspense fallback={<PageFallback />}>
      <CountryViewPageContent params={params} />
    </Suspense>
  );
}

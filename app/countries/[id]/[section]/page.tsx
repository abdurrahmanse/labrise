import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { countryGuidesData, getCountryById } from "@/data/countryGuidesData";
import { COUNTRY_SECTIONS, CountryDetailPage, type CountrySection } from "@/components/countries/CountryDetailPage";
import { buildMetadata } from "@/modules/seo/buildMetadata";

interface Props {
  params: Promise<{ id: string; section: string }>;
}

const EXTRA_SECTIONS = COUNTRY_SECTIONS.filter((s) => s.id !== "overview");

export function generateStaticParams() {
  return countryGuidesData.flatMap((c) => EXTRA_SECTIONS.map((s) => ({ id: c.id, section: s.id })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, section } = await params;
  const country = getCountryById(id);
  const entry = EXTRA_SECTIONS.find((s) => s.id === section);
  if (!country || !entry) return { title: "Not found" };
  return buildMetadata({
    title: `${country.name}: ${entry.label}`,
    description: country.headline,
    path: `/countries/${id}/${section}`
  });
}

async function Content({ params }: Props) {
  const { id, section } = await params;
  const country = getCountryById(id);
  const entry = EXTRA_SECTIONS.find((s) => s.id === section);
  if (!country || !entry) notFound();
  return <CountryDetailPage country={country} section={entry.id as CountrySection} />;
}

export default function CountrySectionRoute({ params }: Props) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-canvas-base animate-pulse" />}>
      <Content params={params} />
    </Suspense>
  );
}

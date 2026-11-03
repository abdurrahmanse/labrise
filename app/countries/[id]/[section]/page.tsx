import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { getCountryGuide, getCountryGuides } from "@/modules/content/server";
import { CountryDetailPage } from "@/modules/countries";
import { COUNTRY_SECTIONS, type CountrySection } from "@/modules/countries";
import { buildMetadata } from "@/modules/seo";
import { notFoundTitles } from "@/data/text/site";

interface Props {
  params: Promise<{ id: string; section: string }>;
}

const EXTRA_SECTIONS = COUNTRY_SECTIONS.filter((s) => s.id !== "overview");

export async function generateStaticParams() {
  return (await getCountryGuides()).flatMap((c) => EXTRA_SECTIONS.map((s) => ({ id: c.id, section: s.id })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, section } = await params;
  const country = await getCountryGuide(id);
  const entry = EXTRA_SECTIONS.find((s) => s.id === section);
  if (!country || !entry) return { title: notFoundTitles.generic };
  return buildMetadata({
    title: `${country.name}: ${entry.label}`,
    description: country.headline,
    path: `/countries/${id}/${section}`
  });
}

async function Content({ params }: Props) {
  const { id, section } = await params;
  const country = await getCountryGuide(id);
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

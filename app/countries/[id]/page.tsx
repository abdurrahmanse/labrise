import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { getCountryGuide, getCountryGuides } from "@/modules/content/server";
import { CountryDetailPage } from "@/modules/countries/components/CountryDetailPage";
import { notFoundTitles } from "@/data/text/site";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return (await getCountryGuides()).map((country) => ({ id: country.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const country = await getCountryGuide(id);
  if (!country) return { title: notFoundTitles.country };

  return {
    title: `${country.name} Scholarship Guide — Fully Funded Master's & PhD`,
    description: `${country.headline}. Complete guide to fully funded scholarships, government awards, PhD employment contracts, and official application portals for ${country.name}.`,
    openGraph: {
      title: `${country.flag} ${country.name} — Fully Funded Scholarship Roadmap`,
      description: country.summary.slice(0, 160),
      type: "article",
    },
  };
}

async function CountryDetailContent({ params }: Props) {
  const { id } = await params;
  const country = await getCountryGuide(id);

  if (!country) {
    notFound();
  }

  return <CountryDetailPage country={country} />;
}

export default function CountryDetailRoute({ params }: Props) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-canvas-base animate-pulse" />}>
      <CountryDetailContent params={params} />
    </Suspense>
  );
}

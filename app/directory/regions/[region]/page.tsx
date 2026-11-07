import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { regionNames, regionOfSlug, regionSlug } from "@/modules/directory/catalog";
import { RegionView } from "@/modules/directory/hubs/RegionView";
import { buildMetadata } from "@/modules/seo";
import { sectionText } from "@/content/text/directory";

interface Props {
  params: Promise<{ region: string }>;
}

export const generateStaticParams = () => regionNames.map((r) => ({ region: regionSlug(r) }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region } = await params;
  const name = regionOfSlug(region);
  if (!name) return { title: "Not found", robots: { index: false, follow: false } };
  return buildMetadata({ ...sectionText.regions.meta(name), path: `/directory/regions/${region}` });
}

export default async function RegionPage({ params }: Props) {
  const { region } = await params;
  const name = regionOfSlug(region);
  if (!name) notFound();
  return <RegionView region={name} />;
}

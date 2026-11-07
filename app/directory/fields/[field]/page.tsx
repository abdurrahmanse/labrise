import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { fieldByKey, fieldKeys } from "@/modules/directory/catalog";
import { FieldView } from "@/modules/directory/hubs/FieldView";
import { buildMetadata } from "@/modules/seo";

interface Props {
  params: Promise<{ field: string }>;
}

export const generateStaticParams = () => fieldKeys.map((field) => ({ field }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { field } = await params;
  const info = fieldByKey(field);
  if (!info) return { title: "Not found", robots: { index: false, follow: false } };
  return buildMetadata({ title: `${info.title}: topics, reading, professors and labs`, description: info.about, path: `/directory/fields/${field}` });
}

export default async function FieldPage({ params }: Props) {
  const { field } = await params;
  const info = fieldByKey(field);
  if (!info) notFound();
  return <FieldView fieldKey={field} info={info} />;
}

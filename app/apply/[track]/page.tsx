import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Block } from "@/shared/components/Block";
import { BulletList } from "@/shared/components/BulletList";
import { PageShell } from "@/shared/components/PageShell";
import { TrackSteps } from "@/modules/apply/components/TrackSteps";
import { applyTracks, findTrack } from "@/modules/apply/data/tracks";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { JsonLd } from "@/modules/seo/JsonLd";
import { breadcrumbSchema, howToSchema } from "@/modules/seo/schemas";

interface Props {
  params: Promise<{ track: string }>;
}

export function generateStaticParams() {
  return applyTracks.map((t) => ({ track: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const track = findTrack((await params).track);
  if (!track) return { title: "Not found" };
  return buildMetadata({ title: `${track.title}: step by step`, description: track.summary, path: `/apply/${track.id}` });
}

export default async function ApplyTrackPage({ params }: Props) {
  const track = findTrack((await params).track);
  if (!track) notFound();

  const other = applyTracks.find((t) => t.id !== track.id);

  return (
    <PageShell
      eyebrow={`${track.steps.length} steps`}
      title={track.title}
      lead={track.summary}
      back={{ href: "/apply", label: "How to apply" }}
      next={other && { href: `/apply/${other.id}`, label: other.title }}
    >
      <JsonLd data={howToSchema(track.title, track.summary, track.steps.map((s) => `${s.title}: ${s.detail}`))} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Apply", path: "/apply" }, { name: track.title, path: `/apply/${track.id}` }])} />
      <TrackSteps steps={track.steps} />
      <Block title="Keep in mind">
        <BulletList items={track.tips} />
      </Block>
    </PageShell>
  );
}

import { Suspense } from "react";
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
import { PageFallback } from "@/shared/components/PageFallback";
import { navLabels, notFoundTitles, pageText } from "@/data/text/site";

interface Props {
  params: Promise<{ track: string }>;
}

export function generateStaticParams() {
  return applyTracks.map((t) => ({ track: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const track = findTrack((await params).track);
  if (!track) return { title: notFoundTitles.generic };
  return buildMetadata({ title: pageText.apply.stepByStep(track.title), description: track.summary, path: `/apply/${track.id}` });
}

async function ApplyTrackPageContent({ params }: Props) {
  const track = findTrack((await params).track);
  if (!track) notFound();

  const other = applyTracks.find((t) => t.id !== track.id);

  return (
    <PageShell
      eyebrow={pageText.apply.steps(track.steps.length)}
      title={track.title}
      lead={track.summary}
      back={{ href: "/apply", label: navLabels.howToApply }}
      next={other && { href: `/apply/${other.id}`, label: other.title }}
    >
      <JsonLd data={howToSchema(track.title, track.summary, track.steps.map((s) => `${s.title}: ${s.detail}`))} />
      <JsonLd data={breadcrumbSchema([{ name: navLabels.home, path: "/" }, { name: pageText.apply.breadcrumb, path: "/apply" }, { name: track.title, path: `/apply/${track.id}` }])} />
      <TrackSteps steps={track.steps} />
      <Block title={pageText.apply.keepInMind}>
        <BulletList items={track.tips} />
      </Block>
    </PageShell>
  );
}

export default function ApplyTrackPage({ params }: Props) {
  return (
    <Suspense fallback={<PageFallback />}>
      <ApplyTrackPageContent params={params} />
    </Suspense>
  );
}

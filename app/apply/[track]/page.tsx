import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/shared/components/PageShell";
import { applyTracks, findTrack } from "@/modules/apply";
import { TrackSidebar } from "@/modules/apply/components/TrackSidebar";
import { TrackStepper } from "@/modules/apply/components/TrackStepper";
import { trackIcons, trackPageText as t } from "@/data/text/apply";
import { IconTile } from "@/shared/components/IconTile";
import { buildMetadata, JsonLd, breadcrumbSchema, howToSchema } from "@/modules/seo";
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
  return buildMetadata({ title: t.metaTitle(track.title), description: track.summary, path: `/apply/${track.id}` });
}

async function ApplyTrackPageContent({ params }: Props) {
  const track = findTrack((await params).track);
  if (!track) notFound();

  const other = applyTracks.find((t) => t.id !== track.id);

  return (
    <PageShell
      eyebrow={t.eyebrow(track.steps.length)}
      title={track.title}
      lead={track.summary}
      media={<IconTile icon={trackIcons[track.id]} size={56} />}
      back={{ href: "/apply", label: t.back }}
      next={other && { href: `/apply/${other.id}`, label: other.title }}
    >
      <JsonLd data={howToSchema(track.title, track.summary, track.steps.map((s) => `${s.title}: ${s.detail}`))} />
      <JsonLd data={breadcrumbSchema([{ name: navLabels.home, path: "/" }, { name: pageText.apply.breadcrumb, path: "/apply" }, { name: track.title, path: `/apply/${track.id}` }])} />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
        <TrackStepper track={track} />
        <TrackSidebar track={track} other={other} />
      </div>
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

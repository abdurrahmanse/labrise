import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { IconTile } from "@/shared/components/IconTile";
import { guideIcon } from "@/modules/guides/lib/guideIcons";
import { PageShell } from "@/shared/components/PageShell";
import { StepList } from "@/shared/components/StepList";
import { GuideBody } from "@/modules/guides/components/GuideBody";
import { getGuideDetail } from "@/modules/guides/data/details";
import { guideTopics } from "@/modules/guides/data/topics";
import { findGuide, guideNeighbours, guideStepTexts, relatedGuides } from "@/modules/guides/lib/guides";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { JsonLd } from "@/modules/seo/JsonLd";
import { breadcrumbSchema, howToSchema } from "@/modules/seo/schemas";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return guideTopics.map((g) => ({ id: g.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const topic = findGuide(id);
  if (!topic) return { title: "Guide not found" };
  return buildMetadata({
    title: `${topic.title}: step-by-step guide`,
    description: getGuideDetail(id)?.summary ?? topic.steps.join(" "),
    path: `/guides/${id}`
  });
}

async function GuideTopicPageContent({ params }: Props) {
  const { id } = await params;
  const topic = findGuide(id);
  if (!topic) notFound();

  const detail = getGuideDetail(id);
  const { prev, next } = guideNeighbours(id);
  const description = detail?.summary ?? topic.steps.join(" ");

  return (
    <PageShell
      eyebrow={topic.tag}
      title={topic.title}
      lead={detail?.summary}
      media={<IconTile icon={guideIcon(id)} size={56} />}
      back={{ href: "/guides", label: "All guides" }}
      prev={prev && { href: `/guides/${prev.id}`, label: prev.title }}
      next={next && { href: `/guides/${next.id}`, label: next.title }}
    >
      <JsonLd data={howToSchema(topic.title, description, guideStepTexts(id))} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: topic.title, path: `/guides/${id}` }
        ])}
      />
      {detail ? (
        <GuideBody guideId={id} detail={detail} related={relatedGuides(id)} />
      ) : (
        <StepList items={topic.steps.map((detail) => ({ detail }))} />
      )}
    </PageShell>
  );
}

export default function GuideTopicPage({ params }: Props) {
  return (
    <Suspense fallback={<div className="mx-auto min-h-[60vh] max-w-7xl px-4 py-16 text-slate-400">Loading…</div>}>
      <GuideTopicPageContent params={params} />
    </Suspense>
  );
}

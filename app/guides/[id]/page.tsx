import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { IconTile } from "@/shared/components/IconTile";
import { guideIcon, getGuideDetail, guideTopics, findGuide, guideNeighbours, guideStepTexts, relatedGuides } from "@/modules/guides";
import { GuideBody } from "@/modules/guides/components/GuideBody";
import { PageShell } from "@/shared/components/PageShell";
import { StepList } from "@/shared/components/StepList";
import { buildMetadata, JsonLd, breadcrumbSchema, howToSchema } from "@/modules/seo";
import { PageFallback } from "@/shared/components/PageFallback";
import { navLabels, notFoundTitles, pageText } from "@/content/text/site";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return guideTopics.map((g) => ({ id: g.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const topic = findGuide(id);
  if (!topic) return { title: notFoundTitles.guide };
  return buildMetadata({
    title: pageText.guides.stepByStep(topic.title),
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
      back={{ href: "/guides", label: navLabels.allGuides }}
      prev={prev && { href: `/guides/${prev.id}`, label: prev.title }}
      next={next && { href: `/guides/${next.id}`, label: next.title }}
    >
      <JsonLd data={howToSchema(topic.title, description, guideStepTexts(id))} />
      <JsonLd
        data={breadcrumbSchema([
          { name: navLabels.home, path: "/" },
          { name: pageText.guides.breadcrumb, path: "/guides" },
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
    <Suspense fallback={<PageFallback />}>
      <GuideTopicPageContent params={params} />
    </Suspense>
  );
}

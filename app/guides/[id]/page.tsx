import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/overview/PageShell";
import { guideTopics } from "@/data/overviewData";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return guideTopics.map((g) => ({ id: g.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const topic = guideTopics.find((g) => g.id === id);
  return { title: topic ? `${topic.title} Guide` : "Guide not found" };
}

export default async function GuideTopicPage({ params }: Props) {
  const { id } = await params;
  const idx = guideTopics.findIndex((g) => g.id === id);
  if (idx === -1) notFound();

  const topic = guideTopics[idx];
  const prev = guideTopics[idx - 1];
  const next = guideTopics[idx + 1];

  return (
    <PageShell
      eyebrow={topic.tag}
      title={topic.title}
      back={{ href: "/guides", label: "All guides" }}
      prev={prev ? { href: `/guides/${prev.id}`, label: prev.title } : undefined}
      next={next ? { href: `/guides/${next.id}`, label: next.title } : undefined}
    >
      <ol className="space-y-3">
        {topic.steps.map((step, i) => (
          <li key={step} className="flex items-start gap-4 border-2 border-white/30 bg-[#121214]/60 backdrop-blur-xl p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.6)]">
            <span className="bg-indigo-400 text-black font-mono font-bold px-2 py-0.5">{i + 1}</span>
            <span className="text-lg text-slate-100 font-sans font-normal">{step}</span>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CheckSquare, ExternalLink, XCircle } from "lucide-react";
import { PageShell } from "@/components/overview/PageShell";
import { guideTopics } from "@/data/overviewData";
import { getGuideDetail } from "@/data/guideDetails";

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

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white border-b-2 border-white/80 pb-2">{title}</h2>
      {children}
    </section>
  );
}

const card = "border-2 border-white/30 bg-canvas-card/60 backdrop-blur-xl p-5 shadow-[4px_4px_0_0_rgba(0,0,0,0.6)]";

export default async function GuideTopicPage({ params }: Props) {
  const { id } = await params;
  const idx = guideTopics.findIndex((g) => g.id === id);
  if (idx === -1) notFound();

  const topic = guideTopics[idx];
  const detail = getGuideDetail(id);
  const prev = guideTopics[idx - 1];
  const next = guideTopics[idx + 1];
  const related = (detail?.related ?? [])
    .map((rid) => guideTopics.find((g) => g.id === rid))
    .filter((g): g is (typeof guideTopics)[number] => Boolean(g));

  return (
    <PageShell
      eyebrow={topic.tag}
      title={topic.title}
      lead={detail?.summary}
      back={{ href: "/guides", label: "All guides" }}
      prev={prev ? { href: `/guides/${prev.id}`, label: prev.title } : undefined}
      next={next ? { href: `/guides/${next.id}`, label: next.title } : undefined}
    >
      {!detail && (
        <ol className="space-y-3">
          {topic.steps.map((step, i) => (
            <li key={step} className={`${card} flex gap-4`}>
              <span className="bg-indigo-400 text-black font-mono font-bold px-2 py-0.5 h-fit">{i + 1}</span>
              <span className="text-lg text-slate-100 font-sans font-normal">{step}</span>
            </li>
          ))}
        </ol>
      )}

      {detail && (
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10 min-w-0">
            <div className="grid gap-4 md:grid-cols-2">
              <div className={card}>
                <div className="font-mono text-xs uppercase tracking-wider text-indigo-400 mb-2">Why it matters</div>
                <p className="text-slate-200 font-sans font-normal">{detail.why}</p>
              </div>
              <div className={card}>
                <div className="font-mono text-xs uppercase tracking-wider text-indigo-400 mb-2">When to do it</div>
                <p className="text-slate-200 font-sans font-normal">{detail.timeline}</p>
              </div>
            </div>

            {detail.sections.map((sec, si) => (
              <Block key={sec.heading} title={`${si + 1}. ${sec.heading}`}>
                {sec.intro && <p className="text-slate-300 font-sans font-normal">{sec.intro}</p>}
                <ol className="space-y-3">
                  {sec.items.map((it, i) => (
                    <li key={it.title} className={`${card} flex gap-4`}>
                      <span className="bg-indigo-400 text-black font-mono font-bold px-2 py-0.5 h-fit">{i + 1}</span>
                      <div>
                        <div className="text-lg font-bold text-white">{it.title}</div>
                        <p className="text-slate-300 font-sans font-normal">{it.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Block>
            ))}

            {detail.example && (
              <Block title={detail.example.label}>
                <pre className="whitespace-pre-wrap border-2 border-indigo-400/60 bg-canvas-base/70 p-5 text-sm text-slate-200 font-mono leading-relaxed">
                  {detail.example.text}
                </pre>
              </Block>
            )}

            <Block title="Common mistakes">
              <ul className="space-y-2">
                {detail.mistakes.map((m) => (
                  <li key={m} className="flex gap-3 text-slate-200 font-sans font-normal">
                    <XCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" /> {m}
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className={card}>
              <div className="font-mono text-xs uppercase tracking-wider text-indigo-400 mb-3">Checklist</div>
              <ul className="space-y-2">
                {detail.checklist.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-slate-200 font-sans font-normal">
                    <CheckSquare className="w-4 h-4 shrink-0 text-indigo-400 mt-0.5" /> {c}
                  </li>
                ))}
              </ul>
            </div>

            {detail.links && (
              <div className={card}>
                <div className="font-mono text-xs uppercase tracking-wider text-indigo-400 mb-3">Links</div>
                <ul className="space-y-2 text-sm">
                  {detail.links.map((l) => {
                    const external = l.href.startsWith("http");
                    return (
                      <li key={l.href}>
                        {external ? (
                          <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-200 underline underline-offset-4">
                            {l.label} <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <Link href={l.href} className="text-indigo-400 hover:text-indigo-200 underline underline-offset-4">{l.label}</Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {related.length > 0 && (
              <div className={card}>
                <div className="font-mono text-xs uppercase tracking-wider text-indigo-400 mb-3">Read next</div>
                <ul className="space-y-2 text-sm">
                  {related.map((g) => (
                    <li key={g.id}>
                      <Link href={`/guides/${g.id}`} className="text-slate-100 font-bold hover:text-indigo-300">{g.title} →</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      )}
    </PageShell>
  );
}

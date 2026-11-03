import React from "react";
import type { Metadata } from "next";
import { OverviewExplorer } from "@/components/overview/OverviewExplorer";
import {
  challenges,
  countries,
  guideTopics,
  professors,
  profileChecklist,
  roadmapSteps,
  universities
} from "@/data/overviewData";

export const metadata: Metadata = {
  title: "Fully Funded Scholarship Roadmap",
  description:
    "Step-by-step roadmap: profile, CV, SOP, research proposal, reference letters, IELTS/TOEFL, fees, visa, plus countries, universities and professors."
};

const PRIORITY_STYLE = {
  "Must have": "bg-indigo-400 text-black border-black",
  "Strong plus": "bg-white/10 text-white border-white/40",
  Bonus: "bg-transparent text-slate-400 border-white/20"
} as const;

const NAV = [
  { id: "roadmap", label: "Roadmap" },
  { id: "profile", label: "Profile" },
  { id: "guides", label: "Guides" },
  { id: "problems", label: "Problems" },
  { id: "directory", label: "Directory" }
];

function SectionTitle({ index, title, note, id }: { index: string; title: string; note?: string; id: string }) {
  return (
    <div id={id} className="scroll-mt-28 mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b-2 border-white/80 pb-3">
      <span className="font-mono text-indigo-400">{index}</span>
      <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
      {note && <span className="text-sm text-slate-400">{note}</span>}
    </div>
  );
}

export default function OverviewPage() {
  const stats = [
    { label: "Countries", value: countries.length },
    { label: "Universities", value: universities.length },
    { label: "Professors", value: professors.length },
    { label: "Guides", value: guideTopics.length }
  ];

  return (
    <main className="min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <header className="space-y-5 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-indigo-400">Fully funded Master&apos;s &amp; PhD</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
            Your roadmap to a fully funded scholarship
          </h1>
          <p className="text-lg text-slate-300 font-sans font-normal">
            Follow the steps. Pick countries, find professors, prepare each document, apply.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {stats.map((s) => (
              <div key={s.label} className="border-2 border-white/30 bg-white/[0.05] backdrop-blur-md p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.6)]">
                <div className="text-3xl font-bold text-indigo-400">{s.value}</div>
                <div className="font-mono text-xs uppercase tracking-wider text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </header>

        <nav aria-label="Sections" className="sticky top-20 z-30 flex flex-wrap gap-2 border-2 border-white/30 bg-[#0b0b0c]/70 backdrop-blur-xl p-2">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-slate-300 hover:bg-indigo-400 hover:text-black">
              {n.label}
            </a>
          ))}
        </nav>

        <section>
          <SectionTitle id="roadmap" index="01" title="Roadmap" note="Start about 2 years before." />
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roadmapSteps.map((s) => (
              <li key={s.step} className="border-2 border-white/30 bg-[#121214]/60 backdrop-blur-xl p-5 shadow-[4px_4px_0_0_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-indigo-400 text-black font-mono font-bold px-2 py-0.5">{String(s.step).padStart(2, "0")}</span>
                  <span className="font-mono text-xs text-slate-400">{s.when}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <ul className="space-y-1 text-slate-300 font-sans font-normal text-sm">
                  {s.actions.map((a) => (
                    <li key={a}>– {a}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionTitle id="profile" index="02" title="Profile checklist" />
          <div className="grid gap-3 sm:grid-cols-2">
            {profileChecklist.map((item) => (
              <div key={item.title} className="flex items-start gap-4 border border-white/20 bg-white/[0.03] backdrop-blur-md p-4">
                <span className={`shrink-0 border px-2 py-0.5 font-mono text-[11px] uppercase ${PRIORITY_STYLE[item.priority]}`}>
                  {item.priority}
                </span>
                <div>
                  <div className="font-bold text-white">{item.title}</div>
                  <div className="text-sm text-slate-400 font-sans font-normal">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle id="guides" index="03" title="Step-by-step guides" note="CV, SOP, tests, letters, fees, visa." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {guideTopics.map((g) => (
              <article key={g.id} id={g.id} className="scroll-mt-28 border-2 border-white/30 bg-[#121214]/60 backdrop-blur-xl p-5 shadow-[4px_4px_0_0_rgba(0,0,0,0.6)]">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white">{g.title}</h3>
                  <span className="shrink-0 border border-indigo-400/60 px-2 py-0.5 font-mono text-[11px] uppercase text-indigo-300">{g.tag}</span>
                </div>
                <ol className="space-y-1.5 text-sm text-slate-300 font-sans font-normal">
                  {g.steps.map((st, i) => (
                    <li key={st} className="flex gap-3">
                      <span className="font-mono text-indigo-400">{i + 1}</span>
                      <span>{st}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle id="problems" index="04" title="Common problems" />
          <div className="grid gap-3 md:grid-cols-2">
            {challenges.map((c) => (
              <div key={c.problem} className="border-l-4 border-indigo-400 bg-white/[0.03] p-4">
                <div className="font-bold text-white">{c.problem}</div>
                <div className="text-sm text-slate-300 font-sans font-normal">{c.fix}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle id="directory" index="05" title="Directory" note="Countries, universities, professors." />
          <p className="mb-5 max-w-3xl text-sm text-slate-400 font-sans font-normal">
            Funding and deadlines change each cycle. Confirm on the official page. Copy a professor&apos;s
            email only from their university page.
          </p>
          <OverviewExplorer />
        </section>
      </div>
    </main>
  );
}

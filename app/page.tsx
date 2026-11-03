import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Globe2, Users } from "lucide-react";
import { countries, professors, roadmapSteps, universities } from "@/data/overviewData";

export const metadata: Metadata = {
  title: "Fully Funded Scholarship Roadmap",
  description:
    "Step-by-step guide to a fully funded Master's or PhD: roadmap, guides, countries, universities and professors."
};

const primaryBtn =
  "inline-flex items-center gap-2 bg-indigo-400 text-black border-2 border-black px-6 py-3 font-bold uppercase tracking-wider shadow-[4px_4px_0_0_rgba(255,255,255,0.9)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(255,255,255,0.9)]";
const ghostBtn =
  "inline-flex items-center gap-2 border-2 border-white/60 px-6 py-3 font-bold uppercase tracking-wider text-slate-100 hover:bg-white hover:text-black";

export default function HomePage() {
  const stats = [
    { label: "Countries", value: countries.length },
    { label: "Universities", value: universities.length },
    { label: "Professors", value: professors.length }
  ];

  const explore = [
    { href: "/directory/countries", title: "Countries", meta: `${countries.length} funded destinations`, Icon: Globe2 },
    { href: "/directory/universities", title: "Universities", meta: `${universities.length} with details`, Icon: Building2 },
    { href: "/directory/professors", title: "Professors", meta: `${professors.length} with contact route`, Icon: Users }
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative border-b-2 border-white/80">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 [mask-image:linear-gradient(to_bottom,#000,transparent)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-7">
            <p className="inline-block border border-indigo-400/60 px-3 py-1 font-mono text-xs uppercase tracking-widest text-indigo-300">
              Fully funded Master&apos;s &amp; PhD
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
              From first idea to <span className="text-indigo-400">funded offer</span>
            </h1>
            <p className="max-w-xl text-lg text-slate-300 font-sans font-normal">
              Six clear steps. Real destinations, universities and professors. Everything a student
              needs to apply for a fully funded scholarship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/steps" className={primaryBtn}>
                Start step 1 <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/directory" className={ghostBtn}>
                Browse directory
              </Link>
            </div>
          </div>

          <aside className="border-2 border-white/40 bg-white/[0.05] backdrop-blur-xl p-6 shadow-[8px_8px_0_0_rgba(198,242,31,0.9)]">
            <div className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4">What is inside</div>
            <div className="grid grid-cols-3 gap-px bg-white/20 border border-white/20">
              {stats.map((s) => (
                <div key={s.label} className="bg-canvas-base/80 p-4">
                  <div className="text-3xl font-bold text-indigo-400">{s.value}</div>
                  <div className="font-mono text-[11px] uppercase text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
            <ul className="mt-5 space-y-2 text-slate-200 font-sans font-normal">
              {["Step-by-step roadmap", "CV, SOP, IELTS, visa guides", "Professor contact route", "Free, no sign-up"].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-indigo-400">■</span> {t}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Section 1: the journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-white/80 pb-3">
          <h2 className="text-3xl font-bold text-white">Your path in 6 steps</h2>
          <Link href="/steps" className="text-indigo-400 hover:text-indigo-200 font-bold">See all steps →</Link>
        </div>
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {roadmapSteps.map((s) => (
            <li key={s.step}>
              <Link
                href={s.href}
                className="group block h-full border-2 border-white/30 bg-canvas-card/60 backdrop-blur-xl p-5 shadow-[4px_4px_0_0_rgba(0,0,0,0.6)] transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:border-indigo-400 hover:shadow-[7px_7px_0_0_#c6f21f]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-indigo-400 text-black font-mono font-bold px-2 py-0.5">{String(s.step).padStart(2, "0")}</span>
                  <span className="font-mono text-xs text-slate-400">{s.when}</span>
                </div>
                <div className="text-xl font-bold text-white">{s.title}</div>
                <div className="mt-2 text-sm text-slate-400 font-sans font-normal">{s.actions[0]}</div>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Section 2: explore */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-white/80 pb-3">
          <h2 className="text-3xl font-bold text-white">Explore where to apply</h2>
          <Link href="/guides" className="text-indigo-400 hover:text-indigo-200 font-bold">All guides →</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {explore.map(({ href, title, meta, Icon }) => (
            <Link
              key={href}
              href={href}
              className="group border-2 border-white/30 bg-white/[0.04] backdrop-blur-xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,0.6)] transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:border-indigo-400 hover:shadow-[7px_7px_0_0_#c6f21f]"
            >
              <Icon className="w-7 h-7 text-indigo-400 mb-4" />
              <div className="text-2xl font-bold text-white">{title}</div>
              <div className="font-mono text-xs text-slate-400 mt-1">{meta}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

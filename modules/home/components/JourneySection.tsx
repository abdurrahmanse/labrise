import Link from "next/link";
import { roadmapSteps } from "@/modules/roadmap/data/steps";
import { SectionHeading } from "./SectionHeading";

export function JourneySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <SectionHeading title="Your path in 6 steps" linkHref="/steps" linkLabel="See all steps" />
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
  );
}

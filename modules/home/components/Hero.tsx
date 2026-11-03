import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroPanel } from "./HeroPanel";

const primaryBtn =
  "inline-flex items-center gap-2 bg-indigo-400 text-black border-2 border-black px-6 py-3 font-bold uppercase tracking-wider shadow-[4px_4px_0_0_rgba(255,255,255,0.9)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(255,255,255,0.9)]";
const ghostBtn =
  "inline-flex items-center gap-2 border-2 border-white/60 px-6 py-3 font-bold uppercase tracking-wider text-slate-100 hover:bg-white hover:text-black";

export function Hero() {
  return (
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
            Six clear steps. Real destinations, universities and professors. Everything a student needs to apply for a
            fully funded scholarship.
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
        <HeroPanel />
      </div>
    </section>
  );
}

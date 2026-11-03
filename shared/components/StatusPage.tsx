import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { StatusLink } from "@/data/text/status";
import { ContourPattern } from "../illustrations/ContourPattern";

interface StatusPageProps {
  code: string;
  eyebrow: string;
  title: string;
  body: string;
  Icon: LucideIcon;
  /** Buttons shown under the text. */
  actions: ReactNode;
  /** Heading and links for the "where next" grid. */
  suggestions?: { title: string; links: StatusLink[] };
  /** Small print under the actions, such as an error reference. */
  footnote?: string;
}

/** Shared layout for the 404 and error screens. */
export function StatusPage({ code, eyebrow, title, body, Icon, actions, suggestions, footnote }: StatusPageProps) {
  return (
    <main className="relative min-h-[80vh] overflow-hidden py-16 md:py-24">
      <ContourPattern className="absolute -right-24 top-6 hidden h-80 w-[34rem] opacity-70 md:block" />
      <ContourPattern className="absolute -left-32 bottom-0 h-64 w-[28rem] rotate-180 opacity-40" />

      <div className="relative mx-auto max-w-5xl space-y-12 px-4 sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 items-center gap-8 md:grid-cols-[auto_1fr]">
          <div className="relative mx-auto flex h-44 w-44 items-center justify-center border-2 border-white/80 bg-canvas-card/70 backdrop-blur-xl shadow-[8px_8px_0_0_rgba(58,95,224,0.35)] md:h-56 md:w-56">
            <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-600 to-cyan-400" />
            <Icon className="h-24 w-24 text-indigo-400 md:h-32 md:w-32" strokeWidth={1.25} aria-hidden />
            <span className="absolute -bottom-4 -right-4 bg-indigo-600 px-3 py-1 font-mono text-lg font-bold text-white shadow-[3px_3px_0_0_rgba(15,23,42,0.25)]">
              {code}
            </span>
          </div>

          <div className="space-y-5">
            <p className="font-mono text-xs uppercase tracking-widest text-indigo-400">{eyebrow}</p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">{title}</h1>
            <p className="max-w-xl font-sans text-lg font-normal text-slate-300">{body}</p>
            <div className="flex flex-wrap gap-3 pt-1">{actions}</div>
            {footnote && <p className="font-mono text-xs text-slate-500">{footnote}</p>}
          </div>
        </section>

        {suggestions && (
          <section className="space-y-4" aria-label={suggestions.title}>
            <h2 className="border-b-2 border-white/80 pb-2 text-2xl font-bold text-white">{suggestions.title}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {suggestions.links.map(({ href, label, hint, Icon: LinkIcon }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center gap-4 border-2 border-white/30 bg-canvas-card/60 p-4 backdrop-blur-xl shadow-[4px_4px_0_0_rgba(15,23,42,0.18)] transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:border-indigo-400 hover:shadow-[7px_7px_0_0_rgba(58,95,224,0.4)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-indigo-600 text-white">
                    <LinkIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-bold text-white">{label}</span>
                    <span className="block font-mono text-xs text-slate-400">{hint}</span>
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-indigo-400" aria-hidden />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export const primaryAction =
  "inline-flex items-center gap-2 border-2 border-transparent bg-indigo-600 px-5 py-3 font-bold uppercase tracking-wider text-sm text-white shadow-[4px_4px_0_0_rgba(15,23,42,0.25)] transition-transform hover:-translate-y-0.5";

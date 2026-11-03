import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface ShellLink {
  href: string;
  label: string;
}

interface PageShellProps {
  eyebrow: string;
  title: string;
  lead?: string;
  back?: ShellLink;
  prev?: ShellLink;
  next?: ShellLink;
  children: React.ReactNode;
}

const edgeLink =
  "inline-flex items-center gap-2 border-2 border-white/40 bg-white/[0.04] backdrop-blur-md px-4 py-2 font-bold uppercase tracking-wider text-sm text-slate-100 hover:bg-indigo-400 hover:text-black hover:border-black";

/** One compact page: heading, a single content block, previous/next links. */
export function PageShell({ eyebrow, title, lead, back, prev, next, children }: PageShellProps) {
  return (
    <main className="min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="space-y-3 border-b-2 border-white/80 pb-6">
          {back && (
            <Link href={back.href} className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-300">
              <ArrowLeft className="w-4 h-4" /> {back.label}
            </Link>
          )}
          <p className="font-mono text-xs uppercase tracking-widest text-indigo-400">{eyebrow}</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">{title}</h1>
          {lead && <p className="text-lg text-slate-300 font-sans font-normal">{lead}</p>}
        </header>

        {children}

        {(prev || next) && (
          <footer className="flex flex-wrap justify-between gap-3 pt-4">
            {prev ? (
              <Link href={prev.href} className={edgeLink}>
                <ArrowLeft className="w-4 h-4" /> {prev.label}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={next.href} className={edgeLink}>
                {next.label} <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </footer>
        )}
      </div>
    </main>
  );
}

export interface LinkCardItem {
  href: string;
  title: string;
  meta?: string;
  index?: string;
}

export function LinkCardGrid({ items, columns = "md:grid-cols-2 lg:grid-cols-3" }: { items: LinkCardItem[]; columns?: string }) {
  return (
    <div className={`grid gap-4 ${columns}`}>
      {items.map((it) => (
        <Link
          key={it.href}
          href={it.href}
          className="group flex items-center justify-between gap-4 border-2 border-white/30 bg-[#121214]/60 backdrop-blur-xl p-5 shadow-[4px_4px_0_0_rgba(0,0,0,0.6)] transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:border-indigo-400 hover:shadow-[7px_7px_0_0_#c6f21f]"
        >
          <div className="flex items-center gap-4 min-w-0">
            {it.index && <span className="bg-indigo-400 text-black font-mono font-bold px-2 py-0.5">{it.index}</span>}
            <div className="min-w-0">
              <div className="text-xl font-bold text-white">{it.title}</div>
              {it.meta && <div className="font-mono text-xs text-slate-400">{it.meta}</div>}
            </div>
          </div>
          <ArrowRight className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-indigo-400" />
        </Link>
      ))}
    </div>
  );
}

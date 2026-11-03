import React, { type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ContourPattern } from "../illustrations/ContourPattern";

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
  /** Flag, avatar or icon shown beside the title. */
  media?: ReactNode;
  children: React.ReactNode;
}

const edgeLink =
  "inline-flex items-center gap-2 border-2 border-white/40 bg-white/[0.04] backdrop-blur-md px-4 py-2 font-bold uppercase tracking-wider text-sm text-slate-100 hover:bg-indigo-600 hover:text-white hover:border-transparent";

/** One compact page: heading, a single content block, previous/next links. */
export function PageShell({ eyebrow, title, lead, back, prev, next, media, children }: PageShellProps) {
  return (
    <main className="min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="relative space-y-3 border-b border-white/10 pb-6">
          <ContourPattern className="absolute -top-10 right-0 hidden h-56 w-96 opacity-60 md:block" />
          {back && (
            <Link href={back.href} className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-300">
              <ArrowLeft className="w-4 h-4" /> {back.label}
            </Link>
          )}
          <p className="font-mono text-xs uppercase tracking-widest text-indigo-400">{eyebrow}</p>
          <div className="relative flex items-center gap-4">
            {media}
            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">{title}</h1>
          </div>
          {lead && <p className="relative text-lg text-slate-300 font-sans font-normal">{lead}</p>}
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

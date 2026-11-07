import React, { type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ContourPattern } from "../illustrations/ContourPattern";
import { DataNotice } from "./DataNotice";
import { IconFor } from "./IconFor";
import { commonText } from "@/content/text/common";
import { PageTrail, type TrailStep } from "./PageTrail";

export interface ShellLink {
  href: string;
  label: string;
}

interface PageShellProps {
  eyebrow: string;
  title: string;
  lead?: string;
  back?: ShellLink;
  /** The path to this page, shown as a band at the top. Without it the band is built from the back link. */
  trail?: TrailStep[];
  prev?: ShellLink;
  next?: ShellLink;
  /** Flag, avatar or icon shown beside the title. */
  media?: ReactNode;
  /** Shows the review date and a correction link. Set on pages that carry directory data. */
  /** Buttons shown under the heading, such as save. */
  actions?: ReactNode;
  notice?: { subject: string; source?: string; caution?: string; unverified?: boolean };
  children: React.ReactNode;
}

const edgeLink =
  "inline-flex items-center gap-2 border-2 border-white/40 bg-white/[0.04] backdrop-blur-md px-4 py-2 font-bold uppercase tracking-wider text-sm text-slate-100 hover:bg-[var(--hover-fill)] hover:border-[var(--hover-line)]";

/** The path shown when a page gives none: Home, the page it came from (its back link), then this page. */
function defaultTrail(back: ShellLink | undefined, title: string): TrailStep[] {
  const home: TrailStep = { href: "/", label: commonText.actions.home };
  const here: TrailStep = { href: "", label: title };
  if (!back || back.href === "/") return [home, here];
  return [home, back, here];
}

/** One compact page: heading, a single content block, previous/next links. */
export function PageShell({ eyebrow, title, lead, back, trail, prev, next, media, notice, actions, children }: PageShellProps) {
  return (
    <main className="min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <PageTrail trail={trail ?? defaultTrail(back, title)} />
        <header className="relative space-y-3 border-b border-white/10 pb-6">
          <ContourPattern className="absolute -top-10 right-0 hidden h-56 w-96 opacity-60 md:block" />
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-indigo-400">
            <IconFor text={eyebrow} className="h-4 w-4" />
            {eyebrow}
          </p>
          <div className="relative flex items-center gap-4">
            {media}
            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">{title}</h1>
          </div>
          {lead && <p className="relative text-lg text-slate-300 font-sans font-normal">{lead}</p>}
          {actions && <div className="relative flex flex-wrap gap-3 pt-1">{actions}</div>}
        </header>

        {children}

        {notice && <DataNotice {...notice} />}

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

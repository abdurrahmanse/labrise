"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { commonText } from "@/content/text/common";
import { IconFor } from "@/shared/components/IconFor";
import { usePrefetchHref } from "../hooks/useDirectoryEntry";
import { liftCard } from "@/shared/components/liftCard";
import { ViewDetails, titleLinkClass } from "@/shared/components/ViewDetails";

interface CardShellProps {
  href: string;
  eyebrow: string;
  title: string;
  /** Flag, avatar or icon shown at the top of the card. */
  media?: ReactNode;
  children: ReactNode;
}

/** Shared look for directory cards: a coloured top edge, title, facts and a details link. */
export function CardShell({ href, eyebrow, title, media, children }: CardShellProps) {
  const prefetch = usePrefetchHref(href);
  return (
    <article onMouseEnter={prefetch} onFocus={prefetch} className={liftCard("flex flex-col gap-3 pt-6")}>
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-400" />
      <div className="flex items-center gap-3">
        {media}
        <p className="font-mono text-xs uppercase tracking-wider text-indigo-300">{eyebrow}</p>
      </div>
      <h3 className="text-xl font-bold text-white">
        <Link href={href} className={`${titleLinkClass} after:absolute after:inset-0 after:content-['']`}>{title}</Link>
      </h3>
      <div className="space-y-2 text-slate-300">{children}</div>
      <div className="mt-auto pt-2">
        <ViewDetails label={commonText.actions.details} />
      </div>
    </article>
  );
}

export function CardFact({ label, value }: { label: string; value: string }) {
  return (
    <p className="flex items-start gap-2">
      <IconFor text={label} className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
      <span>
        <span className="font-mono text-xs uppercase tracking-wider text-slate-400">{label} </span>
      <span className="font-bold text-slate-100">{value}</span>
      </span>
    </p>
  );
}

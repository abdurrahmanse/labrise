import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

/** Classes for a title that is a link: always underlined, so it reads as clickable, and it lights up on hover. */
export const titleLinkClass =
  "underline decoration-indigo-400/70 decoration-2 underline-offset-4 transition-colors hover:bg-[var(--hover-bg)] hover:text-[var(--hover-fg)] hover:decoration-transparent focus-visible:outline-2 focus-visible:outline-indigo-400";

const PILL = "inline-flex w-fit items-center gap-1.5 border-2 border-indigo-400/60 bg-indigo-400/10 px-3 py-1.5 text-sm font-bold text-indigo-200 transition-colors";

/** The same highlight for a title inside a card that is a link: it lights up when the card is hovered. */
export const titleGroupClass =
  "underline decoration-indigo-400/70 decoration-2 underline-offset-4 transition-colors group-hover:bg-[var(--hover-bg)] group-hover:text-[var(--hover-fg)] group-hover:decoration-transparent";

/** A small button-shaped hint at the bottom of a card. It sits inside the card's link, so it is not a link of its own. */
export function ViewDetails({ label }: { label: string }) {
  return (
    <span className={`${PILL} group-hover:border-[var(--hover-line)] group-hover:bg-[var(--hover-bg)] group-hover:text-[var(--hover-fg)]`}>
      {label} <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </span>
  );
}


/** A button-shaped link with an arrow, for places where the whole card is not a link. */
export function PillLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={`${PILL} hover:border-[var(--hover-line)] hover:bg-[var(--hover-bg)] hover:text-[var(--hover-fg)]`}>
      {children} <ArrowRight aria-hidden className="h-4 w-4" />
    </Link>
  );
}

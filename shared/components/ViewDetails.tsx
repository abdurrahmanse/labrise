import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Link looks, shared by every card and list. Hover never changes the text colour (the palette is black and white),
 * so it is shown with a light tint, a firmer underline or border, and a small movement of the arrow.
 */

/** A title that is a link: underlined, so it reads as clickable; on hover the underline firms up and a light tint appears. */
export const titleLinkClass =
  "underline decoration-[var(--hover-tint)] decoration-2 underline-offset-4 transition-colors duration-150 hover:bg-[var(--hover-tint)] hover:decoration-[var(--hover-line)] focus-visible:outline-2 focus-visible:outline-indigo-400";

/** The same look for a title inside a card that is a link: it reacts when the card is hovered. */
export const titleGroupClass =
  "underline decoration-[var(--hover-fill)] decoration-2 underline-offset-4 transition-colors duration-150 group-hover:bg-[var(--hover-tint)] group-hover:decoration-[var(--hover-line)]";

const PILL =
  "inline-flex w-fit items-center gap-1.5 border border-[var(--hover-fill)] bg-[var(--hover-tint)] px-3 py-1.5 text-sm font-semibold transition-colors duration-150";

/** A small button-shaped hint at the bottom of a card. It sits inside the card's link, so it is not a link of its own. */
export function ViewDetails({ label }: { label: string }) {
  return (
    <span className={`${PILL} group-hover:border-[var(--hover-line)] group-hover:bg-[var(--hover-fill)]`}>
      {label} <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
    </span>
  );
}

/** A button-shaped link with an arrow, for places where the whole card is not a link. */
export function PillLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={`${PILL} group hover:border-[var(--hover-line)] hover:bg-[var(--hover-fill)]`}>
      {children} <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
    </Link>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

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

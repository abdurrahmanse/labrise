import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/** A banner on a small page that points back to the full details page it belongs to. */
export function DetailLink({ href, kind, name }: { href: string; kind: string; name: string }) {
  return (
    <Link
      href={href}
      className="group flex flex-wrap items-center gap-3 border border-[var(--hover-fill)] bg-[var(--hover-tint)] px-4 py-3 transition-colors duration-150 hover:border-[var(--hover-line)] hover:bg-[var(--hover-fill)] "
    >
      <ArrowLeft aria-hidden className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-x-0.5" />
      <span className="font-mono text-xs uppercase tracking-wider opacity-80">{kind}</span>
      <span className="min-w-0 flex-1 truncate font-bold underline decoration-indigo-400/70 decoration-2 underline-offset-4">{name}</span>
      <span className="font-mono text-xs uppercase tracking-wider opacity-80">Full details page</span>
    </Link>
  );
}

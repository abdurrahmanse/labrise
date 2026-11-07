import Link from "next/link";
import type { FooterGroup } from "@/content/site/navigationData";

/** One footer column: a heading and its links. */
export function FooterColumn({ group }: { group: FooterGroup }) {
  return (
    <nav aria-label={group.title}>
      <h2 className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-white">{group.title}</h2>
      <ul className="space-y-1">
        {group.links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="inline-flex min-h-8 items-center font-sans text-sm text-slate-400 underline decoration-transparent decoration-1 underline-offset-4 transition-colors hover:bg-[var(--hover-tint)] hover:text-slate-100 hover:decoration-[var(--hover-line)]">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

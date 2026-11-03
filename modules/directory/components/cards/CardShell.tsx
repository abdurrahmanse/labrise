import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface CardShellProps {
  href: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

/** Shared look for directory cards: a coloured top edge, title, facts and a details link. */
export function CardShell({ href, eyebrow, title, children }: CardShellProps) {
  return (
    <article className="group relative flex flex-col gap-3 bg-canvas-card/70 backdrop-blur-xl p-5 pt-6 shadow-[4px_4px_0_0_rgba(15,23,42,0.12)] transition-all duration-150 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(58,95,224,0.3)]">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-400" />
      <p className="font-mono text-xs uppercase tracking-wider text-indigo-300">{eyebrow}</p>
      <h3 className="text-xl font-bold text-white">
        <Link href={href} className="hover:text-indigo-300">{title}</Link>
      </h3>
      <div className="space-y-2 text-slate-300">{children}</div>
      <Link href={href} className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-bold text-indigo-400 hover:text-indigo-200">
        Details <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

export function CardFact({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <span className="font-mono text-xs uppercase tracking-wider text-slate-400">{label} </span>
      <span className="font-bold text-slate-100">{value}</span>
    </p>
  );
}

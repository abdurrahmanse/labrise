import { Fragment } from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface TrailStep {
  href: string;
  label: string;
}

/**
 * A band at the top of a page that shows the path you took: each earlier page is a link, the last one is where you are.
 * It scrolls sideways on narrow screens instead of wrapping into a tall block.
 */
export function PageTrail({ trail }: { trail: TrailStep[] }) {
  if (trail.length < 2) return null;
  const last = trail.length - 1;

  return (
    <nav aria-label="Breadcrumb" className="-mx-4 border-y border-white/10 bg-white/[0.04] px-4 py-2 sm:mx-0 sm:border sm:px-4">
      <ol className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap font-mono text-xs uppercase tracking-wider text-slate-400">
        {trail.map((step, i) => (
          <Fragment key={`${step.href}-${i}`}>
            {i > 0 && <ChevronRight aria-hidden className="h-3.5 w-3.5 shrink-0 text-slate-500" />}
            <li className="flex shrink-0 items-center">
              {i === last ? (
                <span aria-current="page" className="max-w-[18rem] truncate font-bold text-white">{step.label}</span>
              ) : (
                <Link href={step.href} className="inline-flex items-center gap-1 hover:text-indigo-300">
                  {i === 0 && <Home aria-hidden className="h-3.5 w-3.5" />}
                  {step.label}
                </Link>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}

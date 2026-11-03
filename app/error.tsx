"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Flag, Home, RotateCcw, TriangleAlert } from "lucide-react";
import { errorText as t, quickLinks } from "@/data/text/status";
import { StatusPage, primaryAction } from "@/shared/components/StatusPage";

const secondaryAction =
  "inline-flex items-center gap-2 border-2 border-white/40 bg-white/[0.04] px-5 py-3 font-bold uppercase tracking-wider text-sm text-slate-100 backdrop-blur-md transition-colors hover:border-indigo-400 hover:text-indigo-300";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusPage
      code={t.code}
      eyebrow={t.eyebrow}
      title={t.title}
      body={t.body}
      Icon={TriangleAlert}
      footnote={error.digest ? t.reference(error.digest) : undefined}
      actions={
        <>
          <button type="button" onClick={reset} className={`${primaryAction} cursor-pointer`}>
            <RotateCcw className="h-4 w-4" aria-hidden /> {t.retry}
          </button>
          <Link href="/" className={secondaryAction}>
            <Home className="h-4 w-4" aria-hidden /> {t.home}
          </Link>
          <Link href="/contact" className={secondaryAction}>
            <Flag className="h-4 w-4" aria-hidden /> {t.report}
          </Link>
        </>
      }
      suggestions={{ title: t.suggestions, links: quickLinks.slice(0, 3) }}
    />
  );
}

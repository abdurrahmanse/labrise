"use client";

import { useEffect } from "react";
import { Flag, Home, RotateCcw, TriangleAlert } from "lucide-react";
import { errorText as t, quickLinks } from "@/content/text/status";
import { StatusPage } from "@/shared/components/StatusPage";
import { Button } from "@/shared/ui/Button";

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
          <Button onClick={reset} leftIcon={<RotateCcw className="h-4 w-4" aria-hidden />}>{t.retry}</Button>
          <Button href="/" variant="secondary" leftIcon={<Home className="h-4 w-4" aria-hidden />}>{t.home}</Button>
          <Button href="/contact" variant="secondary" leftIcon={<Flag className="h-4 w-4" aria-hidden />}>{t.report}</Button>
        </>
      }
      suggestions={{ title: t.suggestions, links: quickLinks.slice(0, 3) }}
    />
  );
}

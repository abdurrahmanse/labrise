import type { Metadata } from "next";
import { Home } from "lucide-react";
import { notFoundText as t, quickLinks } from "@/content/text/status";
import { OpenSearchButton } from "@/shared/components/OpenSearchButton";
import { StatusPage } from "@/shared/components/StatusPage";
import { Button } from "@/shared/ui/Button";

export const metadata: Metadata = { title: t.eyebrow, robots: { index: false } };

export default function NotFound() {
  return (
    <StatusPage
      code={t.code}
      eyebrow={t.eyebrow}
      title={t.title}
      body={t.body}
      Icon={t.Icon}
      actions={
        <>
          <Button href="/" size="lg" leftIcon={<Home className="h-4 w-4" aria-hidden />}>{t.home}</Button>
          <OpenSearchButton label={t.search} />
        </>
      }
      suggestions={{ title: t.suggestions, links: quickLinks }}
    />
  );
}

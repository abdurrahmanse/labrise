import Link from "next/link";
import type { Metadata } from "next";
import { Home } from "lucide-react";
import { notFoundText as t, quickLinks } from "@/data/text/status";
import { OpenSearchButton } from "@/shared/components/OpenSearchButton";
import { StatusPage, primaryAction } from "@/shared/components/StatusPage";

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
          <Link href="/" className={primaryAction}>
            <Home className="h-4 w-4" aria-hidden /> {t.home}
          </Link>
          <OpenSearchButton label={t.search} />
        </>
      }
      suggestions={{ title: t.suggestions, links: quickLinks }}
    />
  );
}

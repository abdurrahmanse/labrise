import type { ReactNode } from "react";
import { DetailLink } from "@/shared/components/DetailLink";
import { PageShell, type ShellLink } from "@/shared/components/PageShell";
import type { TrailStep } from "@/shared/components/PageTrail";

interface EntrySectionShellProps {
  eyebrow: string;
  title: string;
  lead: string;
  media: ReactNode;
  trail: TrailStep[];
  notice: { subject: string; source?: string };
  /** The full details page this small page belongs to. */
  detail: { href: string; kind: string; name: string };
  tabs: ReactNode;
  prev?: ShellLink;
  next?: ShellLink;
  children: ReactNode;
}

/** The frame every small page of a lab, university or country shares: heading, path, link back to the details page and tabs. */
export function EntrySectionShell({ detail, tabs, children, ...shell }: EntrySectionShellProps) {
  return (
    <PageShell {...shell}>
      <DetailLink {...detail} />
      {tabs}
      {children}
    </PageShell>
  );
}

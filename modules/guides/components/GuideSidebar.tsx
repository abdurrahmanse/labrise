import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { InfoCard } from "@/shared/components/InfoCard";
import type { GuideDetail } from "../types";
import type { GuideTopic } from "../data/topics";
import { GuideChecklist } from "./GuideChecklist";
import { guideSidebarText } from "@/content/text/site";

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

interface GuideSidebarProps {
  guideId: string;
  detail: GuideDetail;
  related: GuideTopic[];
}

export function GuideSidebar({ guideId, detail, related }: GuideSidebarProps) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      <GuideChecklist guideId={guideId} items={detail.checklist} />

      {detail.links && (
        <InfoCard label={guideSidebarText.links}>
          <ul className="space-y-2 text-sm">
            {detail.links.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("http") ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
                    {link.label} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link href={link.href} className={linkClass}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </InfoCard>
      )}

      {related.length > 0 && (
        <InfoCard label={guideSidebarText.readNext}>
          <ul className="space-y-2 text-sm">
            {related.map((g) => (
              <li key={g.id}>
                <Link href={`/guides/${g.id}`} className="text-slate-100 font-bold hover:text-indigo-300">{g.title} →</Link>
              </li>
            ))}
          </ul>
        </InfoCard>
      )}
    </aside>
  );
}

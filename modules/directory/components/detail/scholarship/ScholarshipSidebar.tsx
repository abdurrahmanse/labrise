import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { detailText } from "@/content/text/directory";
import { scholarshipDetailText as t } from "@/content/text/scholarships";
import { Chips } from "@/shared/components/Chips";
import { HelpLinks } from "@/shared/components/HelpLinks";
import { IconBadge } from "@/shared/components/IconBadge";
import { InfoCard } from "@/shared/components/InfoCard";
import { ScholarshipChecklist } from "../ScholarshipChecklist";

interface ScholarshipSidebarProps {
  slug: string;
  checklist: string[];
}

/** Sticky column: application checklist, planner link, help and further reading. */
export function ScholarshipSidebar({ slug, checklist }: ScholarshipSidebarProps) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      <InfoCard label={t.checklist.title}>
        <ScholarshipChecklist slug={slug} items={checklist} />
      </InfoCard>
      <Link href="/planner" className="flex items-center gap-3 border-2 border-white/25 bg-white/[0.03] p-4 font-bold text-slate-100 hover:border-indigo-400">
        <IconBadge icon={CalendarCheck} />
        {t.planner}
      </Link>
      <HelpLinks title={t.help.title} links={t.help.links} />
      <InfoCard label={t.readNext}>
        <Chips
          items={[
            { href: "/guides/funding-types", label: detailText.readNext.fundingTypes },
            { href: "/guides/scholarship-scams", label: detailText.readNext.scams },
            { href: "/guides/deadlines-timeline", label: detailText.readNext.timeline }
          ]}
        />
      </InfoCard>
    </aside>
  );
}

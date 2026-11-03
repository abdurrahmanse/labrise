import Link from "next/link";
import { ArrowRight, CalendarCheck, CalendarClock, Check, ExternalLink, Globe2, Landmark, Layers } from "lucide-react";
import { detailText } from "@/data/text/directory";
import { scholarshipDetailText as t } from "@/data/text/scholarships";
import { Button } from "@/components/ui/Button";
import { HighlightTiles } from "@/shared/components/StatTiles";
import { EntryActions } from "@/modules/library";
import { Block } from "@/shared/components/Block";
import { IconBadge } from "@/shared/components/IconBadge";
import { Chips } from "@/shared/components/Chips";
import { InfoCard } from "@/shared/components/InfoCard";
import { PageShell } from "@/shared/components/PageShell";
import { scholarships } from "../../data/scholarships";
import { countryByName, providerOfScholarship } from "../../lib/lookups";
import { countrySlug, providerSlug, scholarshipSlug } from "../../lib/slugs";
import type { ScholarshipEntry } from "../../types";
import { ScholarshipCard } from "../cards/ScholarshipCard";
import { Flag } from "../Flag";
import { ScholarshipChecklist } from "./ScholarshipChecklist";
import { HelpLinks } from "@/shared/components/HelpLinks";
import { surface } from "@/shared/components/Surface";

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";
const label = "font-mono text-xs uppercase tracking-wider text-slate-400";
const body = "font-sans text-[length:var(--text-body)] font-normal text-slate-200";

const DEFAULT_CHECKLIST = [
  detailText.scholarshipSteps.official,
  detailText.scholarshipSteps.eligibility,
  detailText.scholarshipSteps.documents,
  detailText.scholarshipSteps.referees,
  detailText.scholarshipSteps.submit
];

export function ScholarshipDetailView({ scholarship }: { scholarship: ScholarshipEntry }) {
  const slug = scholarshipSlug(scholarship);
  const country = countryByName(scholarship.host);
  const provider = providerOfScholarship(scholarship.name);
  const sameHost = scholarships.filter((s) => s.host === scholarship.host && s.name !== scholarship.name);
  const sameLevel = scholarships.filter((s) => s.level === scholarship.level && s.host !== scholarship.host).slice(0, 3);
  const checklist = provider ? [detailText.scholarshipSteps.official, detailText.scholarshipSteps.eligibility, ...provider.documents.map((d) => d), detailText.scholarshipSteps.submit] : DEFAULT_CHECKLIST;

  return (
    <PageShell
      eyebrow={detailText.eyebrow.scholarship(scholarship.level)}
      title={scholarship.name}
      notice={{ subject: scholarship.name, source: scholarship.site }}
      actions={
        <>
          <EntryActions type="scholarships" slug={slug} />
          <Button href={scholarship.site} target="_blank" rightIcon={<ExternalLink className="h-4 w-4" aria-hidden />}>{t.official}</Button>
        </>
      }
      media={<Flag country={scholarship.host} className="h-10 w-14" />}
      lead={detailText.lead.scholarship(scholarship.host, scholarship.covers)}
      back={{ href: "/directory/scholarships", label: detailText.back.scholarships }}
    >
      <HighlightTiles
        items={[
          { Icon: Layers, label: t.highlights.level, children: scholarship.level },
          { Icon: CalendarClock, label: t.highlights.deadline, children: scholarship.deadline },
          { Icon: Globe2, label: t.highlights.host, children: country ? <Link href={`/directory/countries/${countrySlug(country)}`} className="hover:text-indigo-300">{scholarship.host}</Link> : scholarship.host },
          { Icon: Landmark, label: t.highlights.provider, children: provider ? <Link href={`/directory/providers/${providerSlug(provider)}`} className="hover:text-indigo-300">{provider.name}</Link> : "—" }
        ]}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <InfoCard label={t.covers}>
          <p className={body}>{scholarship.covers}</p>
        </InfoCard>
        <InfoCard label={t.eligibility}>
          <p className={body}>{scholarship.eligibility}</p>
        </InfoCard>
      </div>
      <p className="font-sans text-sm text-slate-400">{t.officialNote}</p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="space-y-8">
          {provider && (
            <Block title={t.provider.title} icon={Landmark}>
              <div className={surface({ tone: "quiet", depth: "none", padding: "lg", className: "space-y-4" })}>
                <div>
                  <p className={label}>{t.provider.route}</p>
                  <p className={body}>{provider.route}</p>
                </div>
                <div>
                  <p className={label}>{t.provider.selection}</p>
                  <p className={body}>{provider.selection}</p>
                </div>
                <div>
                  <p className={`${label} mb-2`}>{t.provider.requirements}</p>
                  <ul className="space-y-2">
                    {provider.requirements.map((r) => (
                      <li key={r} className={`flex gap-2 ${body}`}><Check className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" aria-hidden /> {r}</li>
                    ))}
                  </ul>
                </div>
                <Link href={`/directory/providers/${providerSlug(provider)}`} className={`inline-flex items-center gap-1.5 text-sm font-bold ${linkClass}`}>
                  {t.provider.view} <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </Block>
          )}

          {sameHost.length > 0 && (
            <Block title={t.similar.title(scholarship.host)}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {sameHost.slice(0, 4).map((s) => <ScholarshipCard key={s.name} scholarship={s} />)}
              </div>
            </Block>
          )}
          {sameLevel.length > 0 && (
            <Block title={t.similar.level}>
              <Chips items={sameLevel.map((s) => ({ href: `/directory/scholarships/${scholarshipSlug(s)}`, label: s.name, meta: s.host }))} />
            </Block>
          )}
        </div>

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
      </div>
    </PageShell>
  );
}

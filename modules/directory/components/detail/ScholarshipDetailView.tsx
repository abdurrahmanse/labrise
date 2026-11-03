import Link from "next/link";
import { ArrowRight, CalendarCheck, CalendarClock, Check, ExternalLink, Globe2, Landmark, Layers } from "lucide-react";
import { detailText } from "@/data/text/directory";
import { scholarshipDetailText as t } from "@/data/text/scholarships";
import { EntryActions } from "@/modules/library/components/EntryActions";
import { Block } from "@/shared/components/Block";
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

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";
const tile = "flex items-start gap-3 bg-canvas-card/70 p-4 backdrop-blur-xl shadow-[3px_3px_0_0_rgba(15,23,42,0.12)]";
const tileIcon = "flex h-10 w-10 shrink-0 items-center justify-center bg-indigo-600 text-white";
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
          <a href={scholarship.site} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-transparent bg-indigo-600 px-5 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-[4px_4px_0_0_rgba(15,23,42,0.25)] transition-transform hover:-translate-y-0.5">
            {t.official} <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </>
      }
      media={<Flag country={scholarship.host} className="h-10 w-14" />}
      lead={detailText.lead.scholarship(scholarship.host, scholarship.covers)}
      back={{ href: "/directory/scholarships", label: detailText.back.scholarships }}
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className={tile}>
          <span className={tileIcon}><Layers className="h-5 w-5" aria-hidden /></span>
          <div><p className={label}>{t.highlights.level}</p><p className="font-bold text-white">{scholarship.level}</p></div>
        </div>
        <div className={tile}>
          <span className={tileIcon}><CalendarClock className="h-5 w-5" aria-hidden /></span>
          <div><p className={label}>{t.highlights.deadline}</p><p className="font-bold text-white">{scholarship.deadline}</p></div>
        </div>
        <div className={tile}>
          <span className={tileIcon}><Globe2 className="h-5 w-5" aria-hidden /></span>
          <div>
            <p className={label}>{t.highlights.host}</p>
            <p className="font-bold text-white">{country ? <Link href={`/directory/countries/${countrySlug(country)}`} className="hover:text-indigo-300">{scholarship.host}</Link> : scholarship.host}</p>
          </div>
        </div>
        <div className={tile}>
          <span className={tileIcon}><Landmark className="h-5 w-5" aria-hidden /></span>
          <div>
            <p className={label}>{t.highlights.provider}</p>
            <p className="font-bold text-white">{provider ? <Link href={`/directory/providers/${providerSlug(provider)}`} className="hover:text-indigo-300">{provider.name}</Link> : "—"}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <InfoCard label={t.covers}>
          <p className={body}>{scholarship.covers}</p>
        </InfoCard>
        <InfoCard label={t.eligibility}>
          <p className={body}>{scholarship.eligibility}</p>
        </InfoCard>
      </div>
      <p className="font-sans text-sm text-slate-400">{t.officialNote}</p>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="space-y-8">
          {provider && (
            <Block title={t.provider.title} icon={Landmark}>
              <div className="space-y-4 border-2 border-white/25 bg-canvas-card/50 p-5 backdrop-blur-xl">
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
              <div className="grid gap-4 md:grid-cols-2">
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
            <span className={tileIcon}><CalendarCheck className="h-5 w-5" aria-hidden /></span>
            {t.planner}
          </Link>
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

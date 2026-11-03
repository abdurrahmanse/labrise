import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ExternalLink, Mail, Search } from "lucide-react";
import { PageShell } from "@/components/overview/PageShell";
import { getCountryById } from "@/data/countryGuidesData";
import {
  countries,
  countrySlug,
  professorSlug,
  professors,
  professorsAtUniversity,
  universities,
  universityOfProfessor,
  universitySlug,
  type CountryEntry,
  type ProfessorEntry,
  type UniversityEntry
} from "@/data/overviewData";

interface Props {
  params: Promise<{ type: string; slug: string }>;
}

export function generateStaticParams() {
  return [
    ...countries.map((c) => ({ type: "countries", slug: countrySlug(c) })),
    ...universities.map((u) => ({ type: "universities", slug: universitySlug(u) })),
    ...professors.map((p) => ({ type: "professors", slug: professorSlug(p) }))
  ];
}

function find(type: string, slug: string) {
  if (type === "countries") return countries.find((c) => countrySlug(c) === slug);
  if (type === "universities") return universities.find((u) => universitySlug(u) === slug);
  if (type === "professors") return professors.find((p) => professorSlug(p) === slug);
  return undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type, slug } = await params;
  const entry = find(type, slug);
  if (!entry) return { title: "Not found" };
  const title = "country" in entry && "routes" in entry ? entry.country : (entry as UniversityEntry | ProfessorEntry).name;
  return { title };
}

function Facts({ rows }: { rows: [string, React.ReactNode][] }) {
  return (
    <dl className="grid gap-px border-2 border-white/30 bg-white/20 sm:grid-cols-2">
      {rows.map(([k, v]) => (
        <div key={k} className="bg-canvas-card/80 backdrop-blur-xl p-4">
          <dt className="font-mono text-xs uppercase tracking-wider text-slate-400">{k}</dt>
          <dd className="mt-1 text-lg font-bold text-white">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold text-white border-b border-white/20 pb-2">{title}</h2>
      {children}
    </section>
  );
}

const linkCls = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

function Chips({ items }: { items: { href: string; label: string; meta?: string }[] }) {
  if (items.length === 0) return <p className="text-slate-400">None listed yet.</p>;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <Link
          key={i.href}
          href={i.href}
          className="border-2 border-white/30 bg-white/[0.04] backdrop-blur-md px-3 py-1.5 text-sm font-bold text-slate-100 hover:bg-indigo-400 hover:text-black hover:border-black"
        >
          {i.label}
          {i.meta && <span className="ml-2 font-mono text-xs opacity-70">{i.meta}</span>}
        </Link>
      ))}
    </div>
  );
}

const APPLY_STEPS = [
  { label: "Read the program page", href: null },
  { label: "Pick 2–3 professors", href: "/directory/professors" },
  { label: "Email them", href: "/professors" },
  { label: "Prepare CV and SOP", href: "/guides/sop" },
  { label: "Apply before the deadline", href: "/guides/application-fee" }
];

function ApplySteps() {
  return (
    <ol className="grid gap-2 sm:grid-cols-5">
      {APPLY_STEPS.map((s, i) => (
        <li key={s.label} className="border border-white/25 bg-white/[0.03] p-3 text-sm text-slate-200">
          <div className="font-mono text-indigo-400 mb-1">{i + 1}</div>
          {s.href ? (
            <Link href={s.href} className={linkCls}>
              {s.label}
            </Link>
          ) : (
            s.label
          )}
        </li>
      ))}
    </ol>
  );
}

function CountryDetail({ c }: { c: CountryEntry }) {
  const dossier = getCountryById(countrySlug(c));
  const unis = universities.filter((u) => u.country === c.country);
  const profs = professors.filter((p) => p.country === c.country);
  return (
    <PageShell
      eyebrow={`Country · ${c.region}`}
      title={c.country}
      back={{ href: "/directory/countries", label: "All countries" }}
    >
      <Facts
        rows={[
          ["Funded routes", c.routes],
          ["What you get", c.funding],
          ["Contact a professor first?", c.supervisor],
          ["Application fee", c.fee]
        ]}
      />
      {dossier && (
        <p>
          <Link href={`/countries/${dossier.id}`} className={linkCls}>
            Open the full {c.country} dossier →
          </Link>
        </p>
      )}
      <Block title={`Universities (${unis.length})`}>
        <Chips items={unis.map((u) => ({ href: `/directory/universities/${universitySlug(u)}`, label: u.name }))} />
      </Block>
      <Block title={`Professors (${profs.length})`}>
        <Chips items={profs.map((p) => ({ href: `/directory/professors/${professorSlug(p)}`, label: p.name, meta: p.group }))} />
      </Block>
      <Block title="How to apply">
        <ApplySteps />
      </Block>
    </PageShell>
  );
}

function UniversityDetail({ u }: { u: UniversityEntry }) {
  const country = countries.find((c) => c.country === u.country);
  const profs = professorsAtUniversity(u);
  const sameCountry = universities.filter((x) => x.country === u.country && x.name !== u.name);
  return (
    <PageShell
      eyebrow={`University · ${u.country}`}
      title={u.name}
      back={{ href: "/directory/universities", label: "All universities" }}
    >
      <Facts
        rows={[
          ["Country", country ? <Link key="c" href={`/directory/countries/${countrySlug(country)}`} className={linkCls}>{u.country}</Link> : u.country],
          ["Funding", u.funding],
          ["Typical deadline", u.deadline],
          [
            "Official site",
            <a key="s" href={u.site} target="_blank" rel="noopener noreferrer" className={`${linkCls} inline-flex items-center gap-1`}>
              {u.site.replace("https://", "")} <ExternalLink className="w-4 h-4" />
            </a>
          ],
          ...(country ? ([["Professor first?", country.supervisor], ["Application fee", country.fee]] as [string, React.ReactNode][]) : [])
        ]}
      />
      <p className="text-sm text-slate-400">Deadlines and funding change every cycle. Confirm on the official site.</p>
      <Block title={`Professors listed (${profs.length})`}>
        <Chips items={profs.map((p) => ({ href: `/directory/professors/${professorSlug(p)}`, label: p.name, meta: p.group }))} />
      </Block>
      {sameCountry.length > 0 && (
        <Block title={`More in ${u.country}`}>
          <Chips items={sameCountry.map((x) => ({ href: `/directory/universities/${universitySlug(x)}`, label: x.name }))} />
        </Block>
      )}
      <Block title="How to apply">
        <ApplySteps />
      </Block>
    </PageShell>
  );
}

function ProfessorDetail({ p }: { p: ProfessorEntry }) {
  const uni = universityOfProfessor(p);
  const peers = professors.filter((x) => x.group === p.group && x.name !== p.name).slice(0, 8);
  const officialSearch = `https://www.google.com/search?q=${encodeURIComponent(`${p.name} ${p.university} faculty page email`)}`;
  return (
    <PageShell
      eyebrow={`Professor · ${p.group}`}
      title={p.name}
      back={{ href: "/directory/professors", label: "All professors" }}
    >
      <Facts
        rows={[
          ["University", uni ? <Link key="u" href={`/directory/universities/${universitySlug(uni)}`} className={linkCls}>{p.university}</Link> : p.university],
          ["Country", p.country],
          ["Group", p.group],
          [
            "Email",
            p.email ? (
              <a key="e" href={`mailto:${p.email}`} className={`${linkCls} inline-flex items-center gap-1 break-all`}>
                <Mail className="w-4 h-4" /> {p.email}
              </a>
            ) : (
              <a key="e" href={officialSearch} target="_blank" rel="noopener noreferrer" className={`${linkCls} inline-flex items-center gap-1`}>
                <Search className="w-4 h-4" /> Find on official page
              </a>
            )
          ]
        ]}
      />
      <Block title="Before you email">
        <ol className="grid gap-2 sm:grid-cols-5">
          {[
            { label: "Read 2 recent papers", href: null },
            { label: "Check the lab is hiring", href: null },
            { label: "Write a short email", href: "/professors" },
            { label: "Attach your CV", href: "/guides/cv" },
            { label: "Follow up once", href: "/professors" }
          ].map((s, i) => (
            <li key={s.label} className="border border-white/25 bg-white/[0.03] p-3 text-sm text-slate-200">
              <div className="font-mono text-indigo-400 mb-1">{i + 1}</div>
              {s.href ? <Link href={s.href} className={linkCls}>{s.label}</Link> : s.label}
            </li>
          ))}
        </ol>
      </Block>
      {peers.length > 0 && (
        <Block title={`More in ${p.group}`}>
          <Chips items={peers.map((x) => ({ href: `/directory/professors/${professorSlug(x)}`, label: x.name }))} />
        </Block>
      )}
    </PageShell>
  );
}

export default async function DirectoryDetailPage({ params }: Props) {
  const { type, slug } = await params;
  const entry = find(type, slug);
  if (!entry) notFound();

  if (type === "countries") return <CountryDetail c={entry as CountryEntry} />;
  if (type === "universities") return <UniversityDetail u={entry as UniversityEntry} />;
  return <ProfessorDetail p={entry as ProfessorEntry} />;
}

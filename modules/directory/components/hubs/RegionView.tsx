import Link from "next/link";
import { Award, FlaskConical, GraduationCap, MapPin, Users } from "lucide-react";
import { Block } from "@/shared/components/Block";
import { Chips } from "@/shared/components/Chips";
import { Flag } from "@/shared/components/Flag";
import { PageShell } from "@/shared/components/PageShell";
import { StatTiles } from "@/shared/components/StatTiles";
import { sectionText } from "@/content/text/directory";
import { directoryListTrail } from "../../utils/trails";
import { regionSlug, statsOfRegion } from "../../utils/hubs";
import { countrySlug, scholarshipSlug, universitySlug } from "../../utils/slugs";

/** One region: every country in it with its counts, the biggest universities and the scholarships hosted there. */
export function RegionView({ region }: { region: string }) {
  const t = sectionText.regions;
  const stats = statsOfRegion(region);

  return (
    <PageShell
      eyebrow="Region"
      title={region}
      lead={t.lead(region, stats.countries.length)}
      trail={[...directoryListTrail(t.title, "regions"), { label: region, href: `/directory/regions/${regionSlug(region)}` }]}
    >
      <StatTiles
        items={[
          { Icon: MapPin, label: t.stats.countries, value: stats.countries.length },
          { Icon: GraduationCap, label: t.stats.universities, value: stats.universities },
          { Icon: Users, label: t.stats.professors, value: stats.professors },
          { Icon: FlaskConical, label: t.stats.labs, value: stats.labs },
          { Icon: Award, label: t.stats.scholarships, value: stats.scholarships.length }
        ]}
      />
      <Block title={t.countries}>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {stats.perCountry.map(({ country, universities, professors, labs }) => (
            <Link key={country.country} href={`/directory/countries/${countrySlug(country)}`} className="flex items-center gap-3 border border-white/20 bg-white/[0.04] p-4 hover:border-indigo-400">
              <Flag country={country.country} className="h-6 w-9" />
              <div className="min-w-0 flex-1">
                <div className="font-bold text-white">{country.country}</div>
                <div className="font-mono text-xs uppercase tracking-wider text-slate-400">{universities} universities · {professors} professors · {labs} labs</div>
              </div>
            </Link>
          ))}
        </div>
      </Block>
      {stats.topUniversities.length > 0 && (
        <Block title={t.topUniversities}>
          <Chips items={stats.topUniversities.map(({ university, professors }) => ({ href: `/directory/universities/${universitySlug(university)}`, label: university.name, meta: String(professors) }))} />
        </Block>
      )}
      {stats.scholarships.length > 0 && (
        <Block title={t.scholarships}>
          <Chips items={stats.scholarships.map((s) => ({ href: `/directory/scholarships/${scholarshipSlug(s)}`, label: s.name, meta: s.level }))} />
        </Block>
      )}
    </PageShell>
  );
}

import Link from "next/link";
import { Building2, Globe2, Users } from "lucide-react";
import type { ReactNode } from "react";
import { countries, professors, universities } from "@/modules/directory";
import { CountriesArt, ProfessorsArt, UniversitiesArt } from "./ExploreArt";
import { SectionHeading } from "./SectionHeading";
import { homeText } from "@/data/text/site";

const CARDS: { href: string; title: string; Icon: typeof Globe2; art: ReactNode; meta: string }[] = [
  { href: "/directory/countries", title: homeText.stats.countries, Icon: Globe2, art: <CountriesArt />, meta: homeText.explore.countries(countries.length) },
  { href: "/directory/universities", title: homeText.stats.universities, Icon: Building2, art: <UniversitiesArt />, meta: homeText.explore.universities(universities.length) },
  { href: "/directory/professors", title: homeText.stats.professors, Icon: Users, art: <ProfessorsArt />, meta: homeText.explore.professors(professors.length) }
];

export function ExploreSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
      <SectionHeading title={homeText.explore.title} linkHref="/guides" linkLabel={homeText.explore.linkLabel} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {CARDS.map(({ href, title, Icon, art, meta }) => (
          <Link
            key={href}
            href={href}
            className="group border-2 border-white/30 bg-white/[0.04] backdrop-blur-xl p-6 shadow-[4px_4px_0_0_rgba(15,23,42,0.18)] transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:border-indigo-400 hover:shadow-[7px_7px_0_0_rgba(58,95,224,0.4)]"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <Icon className="w-7 h-7 text-indigo-400" />
              {art}
            </div>
            <div className="text-2xl font-bold text-white">{title}</div>
            <div className="font-mono text-xs text-slate-400 mt-1">{meta}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

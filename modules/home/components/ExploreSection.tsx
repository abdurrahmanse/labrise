import Link from "next/link";
import { Building2, Globe2, Users } from "lucide-react";
import { countries, professors, universities } from "@/modules/directory/data";
import { SectionHeading } from "./SectionHeading";

const CARDS = [
  { href: "/directory/countries", title: "Countries", Icon: Globe2, meta: `${countries.length} funded destinations` },
  { href: "/directory/universities", title: "Universities", Icon: Building2, meta: `${universities.length} with details` },
  { href: "/directory/professors", title: "Professors", Icon: Users, meta: `${professors.length} with contact route` }
];

export function ExploreSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
      <SectionHeading title="Explore where to apply" linkHref="/guides" linkLabel="All guides" />
      <div className="grid gap-4 md:grid-cols-3">
        {CARDS.map(({ href, title, Icon, meta }) => (
          <Link
            key={href}
            href={href}
            className="group border-2 border-white/30 bg-white/[0.04] backdrop-blur-xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,0.6)] transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:border-indigo-400 hover:shadow-[7px_7px_0_0_#c6f21f]"
          >
            <Icon className="w-7 h-7 text-indigo-400 mb-4" />
            <div className="text-2xl font-bold text-white">{title}</div>
            <div className="font-mono text-xs text-slate-400 mt-1">{meta}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

import { countries, professors, scholarships, universities } from "@/modules/directory/catalog";
import { homeText } from "@/content/text/site";

export function HeroStats() {
  const stats = [
    { label: homeText.stats.countries, value: countries.length },
    { label: homeText.stats.universities, value: universities.length },
    { label: homeText.stats.scholarships, value: scholarships.length },
    { label: homeText.stats.professors, value: professors.length }
  ];

  return (
    <dl className="flex flex-wrap gap-x-8 gap-y-3">
      {stats.map((s) => (
        <div key={s.label}>
          <dd className="text-3xl font-bold text-white">{s.value}</dd>
          <dt className="font-mono text-xs uppercase tracking-wider text-slate-400">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}

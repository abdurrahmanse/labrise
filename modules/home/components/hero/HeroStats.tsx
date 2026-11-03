import { countries, professors, scholarships, universities } from "@/modules/directory/data";

export function HeroStats() {
  const stats = [
    { label: "Countries", value: countries.length },
    { label: "Universities", value: universities.length },
    { label: "Scholarships", value: scholarships.length },
    { label: "Professors", value: professors.length }
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

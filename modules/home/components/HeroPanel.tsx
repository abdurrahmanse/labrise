import { countries, professors, universities } from "@/modules/directory/data";

const FEATURES = ["Step-by-step roadmap", "CV, SOP, IELTS, visa guides", "Professor contact route", "Free, no sign-up"];

export function HeroPanel() {
  const stats = [
    { label: "Countries", value: countries.length },
    { label: "Universities", value: universities.length },
    { label: "Professors", value: professors.length }
  ];

  return (
    <aside className="border-2 border-white/40 bg-white/[0.05] backdrop-blur-xl p-6 shadow-[8px_8px_0_0_rgba(198,242,31,0.9)]">
      <div className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4">What is inside</div>
      <div className="grid grid-cols-3 gap-px bg-white/20 border border-white/20">
        {stats.map((s) => (
          <div key={s.label} className="bg-canvas-base/80 p-4">
            <div className="text-3xl font-bold text-indigo-400">{s.value}</div>
            <div className="font-mono text-[11px] uppercase text-slate-400">{s.label}</div>
          </div>
        ))}
      </div>
      <ul className="mt-5 space-y-2 text-slate-200 font-sans font-normal">
        {FEATURES.map((text) => (
          <li key={text} className="flex gap-3">
            <span className="text-indigo-400">■</span> {text}
          </li>
        ))}
      </ul>
    </aside>
  );
}

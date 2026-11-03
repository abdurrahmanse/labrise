import type { Metadata } from "next";
import { PageShell } from "@/components/overview/PageShell";
import { roadmapSteps } from "@/data/overviewData";

export const metadata: Metadata = { title: "6-Step Roadmap" };

export default function StepsPage() {
  return (
    <PageShell
      eyebrow="Roadmap"
      title="6 steps, in order"
      lead="Start about 2 years before."
      back={{ href: "/", label: "Home" }}
      next={{ href: "/profile", label: "Profile checklist" }}
    >
      <ol className="grid gap-4 md:grid-cols-2">
        {roadmapSteps.map((s) => (
          <li key={s.step} className="border-2 border-white/30 bg-[#121214]/60 backdrop-blur-xl p-5 shadow-[4px_4px_0_0_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between mb-3">
              <span className="bg-indigo-400 text-black font-mono font-bold px-2 py-0.5">{String(s.step).padStart(2, "0")}</span>
              <span className="font-mono text-xs text-slate-400">{s.when}</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">{s.title}</h2>
            <ul className="space-y-1 text-slate-300 font-sans font-normal text-sm">
              {s.actions.map((a) => (
                <li key={a}>– {a}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}

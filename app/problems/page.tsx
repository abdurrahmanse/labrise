import type { Metadata } from "next";
import { PageShell } from "@/components/overview/PageShell";
import { challenges } from "@/data/overviewData";

export const metadata: Metadata = { title: "Common Problems" };

export default function ProblemsPage() {
  return (
    <PageShell
      eyebrow="Problems"
      title="Common problems and fixes"
      back={{ href: "/", label: "Home" }}
      prev={{ href: "/directory", label: "Directory" }}
    >
      <div className="grid gap-3 md:grid-cols-2">
        {challenges.map((c) => (
          <div key={c.problem} className="border-l-4 border-indigo-400 bg-white/[0.03] p-4">
            <div className="font-bold text-white">{c.problem}</div>
            <div className="text-sm text-slate-300 font-sans font-normal">{c.fix}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

import type { Metadata } from "next";
import { PageShell } from "@/components/overview/PageShell";
import { profileChecklist } from "@/data/overviewData";

export const metadata: Metadata = { title: "Profile Checklist" };

const PRIORITY_STYLE = {
  "Must have": "bg-indigo-400 text-black border-black",
  "Strong plus": "bg-white/10 text-white border-white/40",
  Bonus: "bg-transparent text-slate-400 border-white/20"
} as const;

export default function ProfilePage() {
  return (
    <PageShell
      eyebrow="Profile"
      title="What your profile needs"
      back={{ href: "/", label: "Home" }}
      prev={{ href: "/steps", label: "Roadmap" }}
      next={{ href: "/guides", label: "Guides" }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {profileChecklist.map((item) => (
          <div key={item.title} className="flex items-start gap-4 border border-white/20 bg-white/[0.03] backdrop-blur-md p-4">
            <span className={`shrink-0 border px-2 py-0.5 font-mono text-[11px] uppercase ${PRIORITY_STYLE[item.priority]}`}>
              {item.priority}
            </span>
            <div>
              <div className="font-bold text-white">{item.title}</div>
              <div className="text-sm text-slate-400 font-sans font-normal">{item.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

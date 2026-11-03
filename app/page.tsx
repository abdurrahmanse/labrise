import type { Metadata } from "next";
import { LinkCardGrid } from "@/components/overview/PageShell";
import { countries, guideTopics, professors, universities } from "@/data/overviewData";

export const metadata: Metadata = {
  title: "Fully Funded Scholarship Roadmap",
  description:
    "A short, step-by-step guide to fully funded Master's and PhD positions: steps, profile, guides, countries, universities and professors."
};

export default function HomePage() {
  const stats = [
    { label: "Countries", value: countries.length },
    { label: "Universities", value: universities.length },
    { label: "Professors", value: professors.length },
    { label: "Guides", value: guideTopics.length }
  ];

  return (
    <main className="min-h-screen py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <header className="space-y-5 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-indigo-400">Fully funded Master&apos;s &amp; PhD</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
            Your roadmap to a fully funded scholarship
          </h1>
          <p className="text-lg text-slate-300 font-sans font-normal">Pick a page and follow the steps.</p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="border-2 border-white/30 bg-white/[0.05] backdrop-blur-md p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.6)]">
              <div className="text-3xl font-bold text-indigo-400">{s.value}</div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>

        <LinkCardGrid
          items={[
            { index: "01", href: "/steps", title: "6-step roadmap", meta: "What to do, in order" },
            { index: "02", href: "/profile", title: "Profile checklist", meta: "What you need to have" },
            { index: "03", href: "/guides", title: "Guides", meta: "CV, SOP, IELTS, visa…" },
            { index: "04", href: "/directory", title: "Directory", meta: "Countries, universities, professors" },
            { index: "05", href: "/problems", title: "Common problems", meta: "And how to fix them" },
            { index: "06", href: "/roadmap", title: "Full 13-phase roadmap", meta: "Detailed levels and phases" },
            { index: "07", href: "/countries", title: "Country guides", meta: "20 detailed dossiers" },
            { index: "08", href: "/scholarships", title: "Scholarship finder", meta: "11-step search" },
            { index: "09", href: "/professors", title: "Professor outreach", meta: "Email templates and checklist" },
            { index: "10", href: "/documents", title: "Documents", meta: "SOP, CV and checklists" },
            { index: "11", href: "/faqs", title: "FAQs", meta: "Admissions and funding" }
          ]}
        />
      </div>
    </main>
  );
}

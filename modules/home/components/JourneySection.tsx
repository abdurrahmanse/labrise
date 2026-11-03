import Link from "next/link";
import { Compass, FileText, FlaskConical, Globe2, Plane, Users, type LucideIcon } from "lucide-react";
import { IconTile } from "@/shared/components/IconTile";
import { roadmapSteps } from "@/modules/roadmap/catalog";
import { SectionHeading } from "./SectionHeading";
import { homeText } from "@/content/text/site";
import { surface } from "@/shared/components/Surface";

const STEP_ICONS: LucideIcon[] = [Compass, FlaskConical, Globe2, Users, FileText, Plane];

export function JourneySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <SectionHeading title={homeText.journey.title} linkHref="/steps" linkLabel={homeText.journey.linkLabel} />
      <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roadmapSteps.map((s) => (
          <li key={s.step}>
            <Link
              href={s.href}
              className={surface({ tone: "panel", depth: "md", padding: "lg", className: "group block h-full transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:border-indigo-400 hover:shadow-[7px_7px_0_0_rgba(58,95,224,0.4)]" })}
            >
              <div className="flex items-center justify-between mb-4">
                <IconTile icon={STEP_ICONS[s.step - 1]} size={52} />
                <div className="text-right">
                  <div className="font-mono font-bold text-indigo-400">{String(s.step).padStart(2, "0")}</div>
                  <div className="font-mono text-xs text-slate-400">{s.when}</div>
                </div>
              </div>
              <div className="text-xl font-bold text-white">{s.title}</div>
              <div className="mt-2 text-sm text-slate-400 font-sans font-normal">{s.actions[0]}</div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

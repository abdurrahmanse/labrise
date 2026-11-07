import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { caseStudyText as t } from "../text";
import { SECTIONS } from "../sections";
import { Glance } from "./Glance";
import { ProfileCard } from "./ProfileCard";

/** The case study page: a profile card beside twelve small sections, each answering one question a student has. */
export function CaseStudyView() {
  return (
    <PageShell eyebrow={t.eyebrow} title={t.heading} lead={t.lead} back={{ href: "/", label: "Home" }} next={{ href: "/apply", label: "How to apply" }}>
      <p role="note" className="border-2 border-dashed border-white/40 bg-white/[0.03] p-4 font-sans text-sm text-slate-300">{t.disclaimer}</p>
      <Glance />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <ProfileCard />
        <div className="min-w-0 space-y-10">
          {SECTIONS.map(({ id, title, lead, Body }) => (
            <section key={id} id={id} className="scroll-mt-24">
              <Block title={title}>
                <p className="font-sans text-sm text-slate-400">{lead}</p>
                <Body />
              </Block>
            </section>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

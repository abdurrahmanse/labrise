import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { commonText } from "@/data/text/common";
import { disclaimerText as t } from "@/data/text/pages";

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/disclaimer" });

export default function DisclaimerPage() {
  return (
    <PageShell eyebrow={t.eyebrow} title={t.heading} lead={t.lead} back={{ href: "/", label: commonText.actions.home }}>
      {t.sections.map((section) => (
        <Block key={section.title} title={section.title} icon={section.Icon}>
          <div className="space-y-3 font-sans font-normal text-slate-300 text-[length:var(--text-body)] leading-relaxed">
            {section.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Block>
      ))}
    </PageShell>
  );
}

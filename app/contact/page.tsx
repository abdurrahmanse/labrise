import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { commonText } from "@/data/text/common";
import { contactText as t } from "@/data/text/pages";

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/contact" });

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const body = "font-sans font-normal text-slate-300 text-[length:var(--text-body)]";

export default function ContactPage() {
  return (
    <PageShell eyebrow={t.eyebrow} title={t.heading} lead={t.lead} back={{ href: "/", label: commonText.actions.home }}>
      <Block title={t.whatToSend.title} icon={t.whatToSend.Icon}>
        <ul className={`list-disc space-y-2 pl-6 ${body}`}>
          {t.whatToSend.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Block>
      <Block title={t.whereToSend.title} icon={t.whereToSend.Icon}>
        {CONTACT_EMAIL ? (
          <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.whereToSend.subject)}`} className="font-bold text-indigo-400 hover:text-indigo-200 underline underline-offset-4">
            {CONTACT_EMAIL}
          </a>
        ) : (
          <p className={body}>{t.whereToSend.notSet}</p>
        )}
      </Block>
    </PageShell>
  );
}

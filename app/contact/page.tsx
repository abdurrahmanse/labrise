import type { ContactPage, WithContext } from "schema-dts";
import { PageShell } from "@/shared/components/PageShell";
import { ContactForm, ContactSide } from "@/modules/contact";
import { buildMetadata, JsonLd, absoluteUrl } from "@/modules/seo";
import { commonText } from "@/data/text/common";
import { contactInfo, contactPageText as t } from "@/data/text/contact";

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/contact" });

const schema: WithContext<ContactPage> = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: t.title,
  url: absoluteUrl("/contact"),
  mainEntity: {
    "@type": "Organization",
    email: contactInfo.email,
    address: { "@type": "PostalAddress", addressLocality: contactInfo.locality, addressCountry: contactInfo.countryCode }
  }
};

export default function ContactPage() {
  return (
    <PageShell eyebrow={t.eyebrow} title={t.heading} lead={t.lead} back={{ href: "/", label: commonText.actions.home }}>
      <JsonLd data={schema} />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <ContactForm />
        <ContactSide />
      </div>
    </PageShell>
  );
}

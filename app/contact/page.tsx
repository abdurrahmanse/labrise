import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo/buildMetadata";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export const metadata = buildMetadata({
  title: "Contact and corrections",
  description: "How to report a mistake or suggest a university, professor or funder.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <PageShell eyebrow="Contact" title="Report a correction" lead="Help keep the directory accurate." back={{ href: "/", label: "Home" }}>
      <Block title="What to send">
        <ul className="list-disc space-y-2 pl-6 font-sans font-normal text-slate-300 text-[length:var(--text-body)]">
          <li>The page or name that is wrong, and what is wrong with it</li>
          <li>A link to the official page that shows the correct detail</li>
          <li>For a new entry: the name, country and the official page</li>
        </ul>
      </Block>
      <Block title="Where to send it">
        {CONTACT_EMAIL ? (
          <a href={`mailto:${CONTACT_EMAIL}?subject=Correction`} className="font-bold text-indigo-400 hover:text-indigo-200 underline underline-offset-4">
            {CONTACT_EMAIL}
          </a>
        ) : (
          <p className="font-sans font-normal text-slate-300 text-[length:var(--text-body)]">
            The contact address is not set up yet. The site owner can add it as NEXT_PUBLIC_CONTACT_EMAIL.
          </p>
        )}
      </Block>
    </PageShell>
  );
}

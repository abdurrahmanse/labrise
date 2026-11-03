import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "Privacy",
  description: "What this site stores in your browser and what it does not collect.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <PageShell eyebrow="Privacy" title="Your data stays in your browser" lead="No account, no sign-up, no tracking cookies." back={{ href: "/", label: "Home" }}>
      <Block title="What is stored">
        <div className="space-y-3 font-sans font-normal text-slate-300 text-[length:var(--text-body)] leading-relaxed">
        <p>Your theme choice, guide checklists, saved professors, status and private notes are saved in your browser&apos;s local storage. They never leave your device and you can clear them in your browser settings.</p>
        </div>
      </Block>
      <Block title="What is not collected">
        <div className="space-y-3 font-sans font-normal text-slate-300 text-[length:var(--text-body)] leading-relaxed">
        <p>The site has no accounts and does not collect names, emails or documents. Email drafts are built in your browser and sent by your own email app.</p>
        </div>
      </Block>
      <Block title="External links">
        <div className="space-y-3 font-sans font-normal text-slate-300 text-[length:var(--text-body)] leading-relaxed">
        <p>Links to universities, funders and search engines open other websites, which have their own privacy rules.</p>
        </div>
      </Block>
    </PageShell>
  );
}

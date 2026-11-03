import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description: "Information here is general guidance. Confirm deadlines, funding and eligibility on official sources.",
  path: "/disclaimer"
});

export default function DisclaimerPage() {
  return (
    <PageShell eyebrow="Disclaimer" title="Check the official source" lead="Use this site to plan. Use the official page to decide." back={{ href: "/", label: "Home" }}>
      <Block title="General information only">
        <div className="space-y-3 font-sans font-normal text-slate-300 text-[length:var(--text-body)] leading-relaxed">
        <p>Deadlines, stipends, fees, eligibility rules and open positions change every cycle. The figures and descriptions here are typical and may be out of date.</p>
        </div>
      </Block>
      <Block title="People and affiliations">
        <div className="space-y-3 font-sans font-normal text-slate-300 text-[length:var(--text-body)] leading-relaxed">
        <p>Professors move, retire or change groups. A listing does not mean a professor is accepting students. Confirm the current position on the university page before you write.</p>
        </div>
      </Block>
      <Block title="No affiliation">
        <div className="space-y-3 font-sans font-normal text-slate-300 text-[length:var(--text-body)] leading-relaxed">
        <p>This site is independent. Listing an organisation does not mean it endorses the site, and the site has no power to grant admission or funding.</p>
        </div>
      </Block>
      <Block title="Found a mistake?">
        <div className="space-y-3 font-sans font-normal text-slate-300 text-[length:var(--text-body)] leading-relaxed">
        <p>Use the Report a correction link on any detail page, or the contact page. Corrections are checked against the official source before they are applied.</p>
        </div>
      </Block>
    </PageShell>
  );
}

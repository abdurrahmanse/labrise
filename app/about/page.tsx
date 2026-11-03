import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "About Scholarship Roadmap",
  description: "What this site is, who it is for and how its directory is built.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <PageShell eyebrow="About" title="A free guide to funded study abroad" lead="A step-by-step roadmap and a directory of countries, universities, professors and funders." back={{ href: "/", label: "Home" }}>
      <Block title="What it is">
        <div className="space-y-3 font-sans font-normal text-slate-300 text-[length:var(--text-body)] leading-relaxed">
        <p>Scholarship Roadmap helps students plan a fully funded Master&apos;s or PhD abroad. It explains each step, from choosing a field to the visa, and lists the countries, universities, professors and funding organisations connected to each route.</p>
        </div>
      </Block>
      <Block title="How the directory is built">
        <div className="space-y-3 font-sans font-normal text-slate-300 text-[length:var(--text-body)] leading-relaxed">
        <p>Entries are compiled from official university, agency and foundation pages. Professor email addresses are added only when an official page lists them.</p>
        <p>Each detail page shows when the data was last reviewed and links to the official source.</p>
        </div>
      </Block>
      <Block title="What it is not">
        <div className="space-y-3 font-sans font-normal text-slate-300 text-[length:var(--text-body)] leading-relaxed">
        <p>It is not an admissions office, a scholarship provider or an agent. It never asks for money. Always apply through the official channel of the university or funder.</p>
        </div>
      </Block>
    </PageShell>
  );
}

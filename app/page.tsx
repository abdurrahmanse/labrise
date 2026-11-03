import { ExploreSection, Hero, JourneySection } from "@/modules/home";
import { buildMetadata } from "@/modules/seo";

export const metadata = buildMetadata({
  title: "Fully Funded Scholarship Roadmap",
  description:
    "Step-by-step guide to a fully funded Master's or PhD: roadmap, guides, countries, universities and professors.",
  path: "/"
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <JourneySection />
      <ExploreSection />
    </main>
  );
}

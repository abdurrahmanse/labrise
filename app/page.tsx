import { ExploreSection } from "@/modules/home/components/ExploreSection";
import { Hero } from "@/modules/home/components/Hero";
import { JourneySection } from "@/modules/home/components/JourneySection";
import { buildMetadata } from "@/modules/seo/buildMetadata";

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

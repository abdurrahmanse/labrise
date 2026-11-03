import React from "react";
import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { DegreePathwaySelector } from "@/components/home/DegreePathwaySelector";
import { RoadmapTimelineOverview } from "@/components/home/RoadmapTimelineOverview";
import { FundingPillarsSection } from "@/components/home/FundingPillarsSection";
import { FeaturedCountriesSection } from "@/components/home/FeaturedCountriesSection";
import { QuickNavSection } from "@/components/home/QuickNavSection";
import { homeMetadata } from "@/data/metadata";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] text-slate-100">
      {/* 1. Compelling Hero Section with Exact Prompt Copy & CTAs */}
      <HomeHero />

      {/* 2. Degree Selection: Master's Scholarship Roadmap vs PhD Funding Roadmap */}
      <DegreePathwaySelector />

      {/* 3. The 13-Phase Application Roadmap Overview & Interactive Stepper */}
      <RoadmapTimelineOverview />

      {/* 4. The 4 Global Graduate Funding Models (Full-Ride vs Tuition Waiver) */}
      <FundingPillarsSection />

      {/* 5. Featured 20 Country Scholarship Destinations Spotlight */}
      <FeaturedCountriesSection />

      {/* 6. Quick Navigation Hub Across All Knowledge Base Areas */}
      <QuickNavSection />
    </main>
  );
}

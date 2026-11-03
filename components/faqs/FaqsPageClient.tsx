"use client";

import React, { useState } from "react";
import { FaqsHero } from "./FaqsHero";
import { QuickScrollNavigator } from "@/components/ui/QuickScrollNavigator";
import { InteractivePreflightChecklist } from "./InteractivePreflightChecklist";
import { FaqAccordionSection } from "./FaqAccordionSection";
import { FaqCategoryPills } from "./FaqCategoryPills";
import { CommunityHelpSection } from "./CommunityHelpSection";
import { faqsNavAnchors } from "@/data/faqsSectionData";

export function FaqsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <main className="min-h-screen bg-[#0b0b0c] text-slate-100">
      {/* 1. Hero Section */}
      <FaqsHero />

      {/* 2. Quick-Scroll Anchor Bar */}
      <div className="my-6">
        <QuickScrollNavigator anchors={faqsNavAnchors} />
      </div>

      {/* 3. Pre-Flight Readiness Checklist */}
      <InteractivePreflightChecklist />

      {/* 4. Comprehensive Searchable FAQ Accordion */}
      <FaqAccordionSection
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 5. Topic Category Cards */}
      <FaqCategoryPills
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 6. Launchpad Navigation */}
      <CommunityHelpSection />
    </main>
  );
}

export default FaqsPageClient;

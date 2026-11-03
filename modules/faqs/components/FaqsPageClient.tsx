"use client";

import React, { useState } from "react";
import { FaqsHero } from "./FaqsHero";
import { QuickScrollNavigator } from "@/shared/ui/QuickScrollNavigator";
import Link from "next/link";
import { FaqAccordionSection } from "./FaqAccordionSection";
import { FaqCategoryPills } from "./FaqCategoryPills";
import { faqsNavAnchors } from "@/content/faqs/faqsSectionData";
import type { FAQItem } from "@/modules/content";
import { legacyText } from "@/content/text/legacy";

export function FaqsPageClient({ initialFaqs }: { initialFaqs: FAQItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <main className="min-h-screen bg-canvas-base text-slate-100">
      {/* 1. Hero Section */}
      <FaqsHero />

      {/* 2. Quick-Scroll Anchor Bar */}
      <div className="my-6">
        <QuickScrollNavigator anchors={faqsNavAnchors} />
      </div>

      {/* 4. Comprehensive Searchable FAQ Accordion */}
      <FaqAccordionSection
        initialFaqs={initialFaqs}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 5. Topic Category Cards */}
      <FaqCategoryPills
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Link href="/faqs/checklist" className="inline-flex items-center gap-2 font-bold text-indigo-400 hover:text-indigo-200">
          {legacyText.faqsPageClient.t0}
        </Link>
      </div>
    </main>
  );
}

export default FaqsPageClient;

import React from "react";
import { HelpCircle } from "lucide-react";
import { PageHero } from "@/shared/ui/PageHero";
import { faqsPageData } from "@/content/site/pagesData";
import { faqsHeroHighlightsData } from "@/content/faqs/faqsSectionData";

export function FaqsHero() {
  return (
    <PageHero
      badge={faqsPageData.hero.badge}
      badgeIcon={<HelpCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
      theme="blue"
      title={faqsPageData.hero.title}
      highlightWord={faqsPageData.hero.highlightWord}
      subtitle={faqsPageData.hero.subtitle}
      highlights={faqsHeroHighlightsData}
    />
  );
}

"use client";

import React, { useState } from "react";
import { Search, HelpCircle, RotateCcw } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { TabsContainer, TabItem } from "@/components/ui/Tabs";
import { FaqAccordionItem } from "@/components/faqs/FaqAccordionItem";
import { faqsData, faqsHeaderData } from "@/data/faqs";

interface FaqAccordionSectionProps {
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export function FaqAccordionSection({
  selectedCategory: externalCategory,
  onSelectCategory: externalSetCategory,
}: FaqAccordionSectionProps) {
  const [internalCategory, setInternalCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqsData[0]?.id || null);

  const activeCategory = externalCategory !== undefined ? externalCategory : internalCategory;
  const handleSelectCategory = (cat: string) => {
    if (externalSetCategory) {
      externalSetCategory(cat);
    } else {
      setInternalCategory(cat);
    }
  };

  const categories = faqsHeaderData.categories;

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleReset = () => {
    setSearchQuery("");
    handleSelectCategory("All");
  };

  return (
    <section id="faq-list" className="py-20 border-b border-white/5 bg-canvas-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={faqsHeaderData.badge}
          badgeVariant="cyan"
          badgeIcon={<HelpCircle className="w-3.5 h-3.5 text-cyan-400" />}
          title={faqsHeaderData.title}
          subtitle={faqsHeaderData.subtitle}
          counter={`${filteredFaqs.length} of ${faqsData.length} Questions`}
          align="center"
        />

        {/* Search Bar */}
        <div className="relative mb-6 max-w-3xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder={faqsHeaderData.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-canvas-card border border-white/10 focus:border-cyan-500 text-slate-100 placeholder-slate-500 text-xs sm:text-sm outline-none transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs cursor-pointer"
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <TabsContainer theme="cyan" size="sm">
            {categories.map((cat) => (
              <TabItem
                key={cat}
                active={activeCategory === cat}
                onClick={() => handleSelectCategory(cat)}
              >
                {cat}
              </TabItem>
            ))}
          </TabsContainer>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <FaqAccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openFaqId === faq.id}
                onToggle={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
              />
            ))
          ) : (
            <div className="text-center py-12 px-4 bg-canvas-card rounded-2xl border border-white/10">
              <p className="text-slate-400 text-sm">
                No matching questions found for &ldquo;<span className="text-white font-mono">{searchQuery}</span>&rdquo;.
              </p>
              <div className="mt-4 flex justify-center">
                <Button
                  onClick={handleReset}
                  variant="secondary"
                  size="sm"
                  leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
                >
                  Reset Search & Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FaqAccordionSection;

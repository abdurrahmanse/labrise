"use client";

import React from "react";
import { Compass } from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { renderCommonIcon } from "@/components/ui/IconUtils";
import { faqCategoryCardsData } from "@/data/faqsSectionData";
import { faqsPageData } from "@/data/pagesData";

const FAQ_CAT_ICON_COLORS: Record<string, string> = {
  Compass: "text-purple-400",
  FileCode: "text-cyan-400",
  DollarSign: "text-emerald-400",
  ShieldCheck: "text-amber-400"
};

interface FaqCategoryPillsProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export function FaqCategoryPills({
  selectedCategory,
  onSelectCategory
}: FaqCategoryPillsProps) {
  const sectionMeta = faqsPageData.sections[0];

  return (
    <section id="faq-categories" className="py-20 border-b border-slate-800/80 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Topic Breakdown"}
          badgeVariant="indigo"
          badgeIcon={<Compass className="w-3.5 h-3.5 text-indigo-400" />}
          title={sectionMeta?.title || "Explore Admissions Intelligence by Category"}
          subtitle={sectionMeta?.subtitle || "Click any category below to immediately filter verified answers from AI admissions committees and faculty."}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqCategoryCardsData.map((c) => {
            const isSelected = selectedCategory === c.name;
            return (
              <SectionCard
                key={c.name}
                variant="default"
                borderGlow={isSelected ? c.variant : "none"}
                onClick={() => onSelectCategory(isSelected ? "All" : c.name)}
                className={`cursor-pointer transition-all ${
                  isSelected ? "bg-indigo-400/10 border-indigo-400 shadow-[4px_4px_0_0_rgba(58,95,224,0.4)]" : ""
                }`}
                icon={renderCommonIcon(c.iconName, `w-5 h-5 ${FAQ_CAT_ICON_COLORS[c.iconName] || "text-purple-400"}`)}
                badge={c.tag}
                badgeVariant={c.variant}
                title={c.name}
              >
                <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
              </SectionCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

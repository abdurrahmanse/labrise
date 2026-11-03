"use client";

import React from "react";
import { quickNavData } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { QuickNavCard } from "./QuickNavCard";

export function QuickNavSection() {
  const { badge, title, subtitle, ctaText, links } = quickNavData;

  return (
    <section className="py-16 md:py-24 bg-canvas-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          badge={badge}
          badgeVariant="teal"
          title={title}
          subtitle={subtitle}
          align="center"
          size="md"
        />

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {links.map((item, idx) => (
            <QuickNavCard key={idx} item={item} ctaText={ctaText} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickNavSection;

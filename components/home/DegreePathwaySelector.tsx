"use client";

import React, { useState } from "react";
import { Layers } from "lucide-react";
import { degreePathwaySelectorData } from "@/data/homeData";
import { DegreePathwayCard } from "./DegreePathwayCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function DegreePathwaySelector() {
  const [activeTab, setActiveTab] = useState<"masters" | "phd">("masters");
  const { badge, title, subtitle, pathways } = degreePathwaySelectorData;

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.06] bg-canvas-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reusable Section Header */}
        <SectionHeader
          badge={badge}
          badgeIcon={<Layers className="w-3.5 h-3.5" />}
          badgeVariant="indigo"
          title={title}
          subtitle={subtitle}
          align="center"
          size="lg"
        />

        {/* Pathway Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {pathways.map((pathway) => (
            <DegreePathwayCard
              key={pathway.id}
              pathway={pathway}
              isActive={activeTab === pathway.id}
              onSelect={() => setActiveTab(pathway.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DegreePathwaySelector;

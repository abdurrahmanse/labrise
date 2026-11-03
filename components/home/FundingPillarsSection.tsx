"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { fundingPillarsData } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FundingPillarCard } from "./FundingPillarCard";
import { InfoCallout } from "@/components/ui/InfoCallout";

export function FundingPillarsSection() {
  const { badge, title, subtitle, pillars, callout } = fundingPillarsData;

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.06] bg-[#0b0b0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          badge={badge}
          badgeIcon={<ShieldCheck className="w-3.5 h-3.5" />}
          badgeVariant="emerald"
          title={title}
          subtitle={subtitle}
          align="center"
          size="lg"
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {pillars.map((pillar, idx) => (
            <FundingPillarCard key={idx} pillar={pillar} />
          ))}
        </div>

        {/* Informational Callout */}
        <div className="max-w-4xl mx-auto mb-8">
          <InfoCallout variant="tip" badge={callout.badge} title={callout.title}>
            {callout.description}
          </InfoCallout>
        </div>

        {/* Exploration Link */}
        <div className="text-center">
          <Link
            href="/roadmap#phase-03"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors group"
          >
            <span>Learn how to audit funding offers in Phase 03</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FundingPillarsSection;

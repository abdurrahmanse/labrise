import React from "react";
import Link from "next/link";
import { countryGuidesData } from "@/data/countryGuidesData";
import { featuredCountriesData } from "@/data/homeData";
import { Globe2, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeaturedCountryCard } from "./FeaturedCountryCard";

export function FeaturedCountriesSection() {
  const { badge, title, subtitle, ctaLabel, ctaHref, featuredCountryIds } = featuredCountriesData;

  const featured = countryGuidesData.filter((c) =>
    featuredCountryIds.includes(c.id)
  );

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.06] bg-canvas-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Action */}
        <SectionHeader
          badge={badge}
          badgeIcon={<Globe2 className="w-3.5 h-3.5" />}
          badgeVariant="teal"
          title={title}
          subtitle={subtitle}
          align="between"
          size="lg"
          action={
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors group"
            >
              <span>{ctaLabel}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          }
        />

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((country) => (
            <FeaturedCountryCard key={country.id} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCountriesSection;

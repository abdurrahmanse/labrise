import React from "react";
import { Globe2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { countryGuidesControlsData } from "@/data/countryGuidesData";

export function CountryHeader() {
  const { badge, title, subtitle } = countryGuidesControlsData.header;

  return (
    <SectionHeader
      badge={badge}
      badgeIcon={<Globe2 className="w-3.5 h-3.5" />}
      badgeVariant="teal"
      title={title}
      subtitle={subtitle}
      align="center"
      size="lg"
    />
  );
}

export default CountryHeader;

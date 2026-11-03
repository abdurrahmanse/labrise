import React from "react";
import { Search } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { scholarshipFinderControlsData } from "@/data/scholarshipsSearchData";

export function ScholarshipHeader() {
  const { badge, title, subtitle } = scholarshipFinderControlsData.header;

  return (
    <SectionHeader
      badge={badge}
      badgeIcon={<Search className="w-3.5 h-3.5" />}
      badgeVariant="emerald"
      title={title}
      subtitle={subtitle}
      align="center"
      size="lg"
    />
  );
}

export default ScholarshipHeader;

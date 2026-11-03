import React from "react";
import { Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { professorOutreachControlsData } from "@/data/professorsData";

export function ProfessorsHeader() {
  const { badge, title, subtitle } = professorOutreachControlsData.header;

  return (
    <SectionHeader
      badge={badge}
      badgeIcon={<Users className="w-3.5 h-3.5" />}
      badgeVariant="cyan"
      title={title}
      subtitle={subtitle}
      align="center"
      size="lg"
    />
  );
}

export default ProfessorsHeader;

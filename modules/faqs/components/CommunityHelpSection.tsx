import React from "react";
import { ArrowRight } from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { renderCommonIcon } from "@/components/ui/IconUtils";
import { communityLaunchpadData } from "@/data/faqsSectionData";
import { legacyText } from "@/data/text/legacy";

const ICON_COLORS: Record<string, string> = {
  Compass: "text-indigo-400",
  Cpu: "text-cyan-400",
  FileCode: "text-purple-400",
  Presentation: "text-pink-400"
};

export function CommunityHelpSection() {
  return (
    <section id="community-help" className="py-20 bg-canvas-base border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={legacyText.communityHelpSection.t1}
          badgeVariant="indigo"
          title={legacyText.communityHelpSection.t2}
          subtitle={legacyText.communityHelpSection.t3}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityLaunchpadData.map((c) => (
            <SectionCard
              key={c.title}
              variant="default"
              borderGlow="cyan"
              className="flex flex-col justify-between group bg-canvas-card p-6"
              icon={renderCommonIcon(c.iconName, `w-5 h-5 ${ICON_COLORS[c.iconName] || "text-indigo-400"}`)}
              title={c.title}
              footer={
                <Button
                  href={c.href}
                  variant="ghost"
                  size="xs"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
                  className="text-cyan-400 hover:text-cyan-300 p-0 hover:bg-transparent"
                >
                  {legacyText.communityHelpSection.t0}
                </Button>
              }
            >
              <p className="text-xs text-slate-400 leading-relaxed font-sans">{c.desc}</p>
            </SectionCard>
          ))}
        </div>
      </div>
    </section>
  );
}

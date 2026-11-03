import { InfoCard } from "@/shared/components/InfoCard";
import { guideSidebarText } from "@/content/text/site";

export function GuideIntroCards({ why, timeline }: { why: string; timeline: string }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <InfoCard label={guideSidebarText.why}>
        <p className="text-slate-200 font-sans font-normal">{why}</p>
      </InfoCard>
      <InfoCard label={guideSidebarText.when}>
        <p className="text-slate-200 font-sans font-normal">{timeline}</p>
      </InfoCard>
    </div>
  );
}

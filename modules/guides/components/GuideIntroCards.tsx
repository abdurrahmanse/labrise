import { InfoCard } from "@/shared/components/InfoCard";

export function GuideIntroCards({ why, timeline }: { why: string; timeline: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <InfoCard label="Why it matters">
        <p className="text-slate-200 font-sans font-normal">{why}</p>
      </InfoCard>
      <InfoCard label="When to do it">
        <p className="text-slate-200 font-sans font-normal">{timeline}</p>
      </InfoCard>
    </div>
  );
}

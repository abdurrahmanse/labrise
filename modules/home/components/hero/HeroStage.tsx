import { HeroArt } from "@/shared/illustrations/HeroArt";
import { ChecklistStageCard, DeadlineStageCard, ProfessorStageCard, ScholarshipStageCard } from "./StageCards";

/** The creative centrepiece: the journey illustration with floating cards around it. */
export function HeroStage() {
  return (
    <div className="relative mx-auto aspect-[1/0.92] w-full max-w-xl">
      <div className="absolute inset-x-[6%] inset-y-[8%] bg-gradient-to-br from-indigo-400/20 via-transparent to-cyan-400/20" />
      <HeroArt className="absolute inset-x-[10%] inset-y-[12%] h-[76%] w-[80%]" />
      <ScholarshipStageCard />
      <DeadlineStageCard />
      <ChecklistStageCard />
      <ProfessorStageCard />
    </div>
  );
}

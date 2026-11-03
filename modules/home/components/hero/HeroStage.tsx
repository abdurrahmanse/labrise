import { HeroArt } from "@/shared/illustrations/HeroArt";
import { ChecklistStageCard, DeadlineStageCard, ProfessorStageCard, ScholarshipStageCard } from "./StageCards";

/** The creative centrepiece: the journey illustration with floating cards around it. */
export function HeroStage() {
  return (
    <div className="relative mx-auto aspect-[1/0.92] w-full max-w-xl">
      <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(58,95,224,0.16),transparent)]" aria-hidden="true" />
      <HeroArt className="absolute inset-x-[10%] inset-y-[12%] h-[76%] w-[80%]" />
      <ScholarshipStageCard />
      <DeadlineStageCard />
      <ChecklistStageCard />
      <ProfessorStageCard />
    </div>
  );
}

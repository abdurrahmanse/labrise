import { RoadmapStep } from "../types";
import { phase0Steps } from "./phase0";
import { phase1Steps } from "./phase1";
import { phase2Steps } from "./phase2";
import { phase3Steps } from "./phase3";
import { phase4Steps } from "./phase4";
import { phase5Steps } from "./phase5";
import { phase6Steps } from "./phase6";

export {
  phase0Steps,
  phase1Steps,
  phase2Steps,
  phase3Steps,
  phase4Steps,
  phase5Steps,
  phase6Steps
};

export const stepsData: RoadmapStep[] = [
  ...phase0Steps,
  ...phase1Steps,
  ...phase2Steps,
  ...phase3Steps,
  ...phase4Steps,
  ...phase5Steps,
  ...phase6Steps
];

export function getStepById(id: string): RoadmapStep | undefined {
  return stepsData.find((step) => step.id === id);
}

export function getStepByNumber(stepNumber: string): RoadmapStep | undefined {
  return stepsData.find((step) => step.stepNumber === stepNumber);
}

export function getStepsByPhase(phaseId: string): RoadmapStep[] {
  return stepsData.filter((step) => step.phaseId === phaseId);
}

export default stepsData;

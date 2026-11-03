import { createProgressStore } from "@/shared/progress/createProgressStore";

export const useApplyProgress = createProgressStore("scholarship-roadmap:apply");

/** Item id for one step of a route, so every route shares one store. */
export const stepKey = (track: string, index: number) => `${track}:${index}`;
export const stepKeys = (track: string, total: number) => Array.from({ length: total }, (_, i) => stepKey(track, i));

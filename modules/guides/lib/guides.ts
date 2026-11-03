import { getGuideDetail } from "../data/details";
import { guideTopics } from "../data/topics";

export const findGuide = (id: string) => guideTopics.find((g) => g.id === id);

export function guideNeighbours(id: string) {
  const index = guideTopics.findIndex((g) => g.id === id);
  return { prev: guideTopics[index - 1], next: guideTopics[index + 1] };
}

export function relatedGuides(id: string) {
  return (getGuideDetail(id)?.related ?? []).map(findGuide).filter((g): g is NonNullable<typeof g> => Boolean(g));
}

/** Every step title in a guide, used for structured data. */
export function guideStepTexts(id: string) {
  const detail = getGuideDetail(id);
  if (!detail) return findGuide(id)?.steps ?? [];
  return detail.sections.flatMap((s) => s.items.map((i) => `${i.title}: ${i.detail}`));
}

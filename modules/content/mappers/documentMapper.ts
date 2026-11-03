import type { DocumentDto } from "../dto/documentDto";
import type { DocumentGuideline } from "../types/document";

type StructureDto = DocumentDto["structure"][number];
type ChecklistItemDto = DocumentDto["checklistItems"][number];

const toStructure = (dto: StructureDto): DocumentGuideline["structure"][number] => ({ section: dto.section, guidance: dto.guidance });
/** `tip` is left out when absent, so an entity without one stays without one after a round trip. */
const withTip = (tip: string | undefined) => (tip === undefined ? {} : { tip });

const toChecklistItem = (dto: ChecklistItemDto): DocumentGuideline["checklistItems"][number] => ({ id: dto.id, label: dto.label, ...withTip(dto.tip) });

export const toDocument = (dto: DocumentDto): DocumentGuideline => ({
  id: dto.id,
  name: dto.name,
  badge: dto.badge,
  degreeLevel: dto.degreeLevel,
  what: dto.what,
  why: dto.why,
  structure: dto.structure.map(toStructure),
  commonMistakes: dto.commonMistakes,
  officialChecks: dto.officialChecks,
  checklistItems: dto.checklistItems.map(toChecklistItem)
});

export const toDocumentDto = (doc: DocumentGuideline): DocumentDto => ({
  id: doc.id,
  name: doc.name,
  badge: doc.badge,
  degreeLevel: doc.degreeLevel,
  what: doc.what,
  why: doc.why,
  structure: doc.structure.map((s): StructureDto => ({ section: s.section, guidance: s.guidance })),
  commonMistakes: doc.commonMistakes,
  officialChecks: doc.officialChecks,
  checklistItems: doc.checklistItems.map((i): ChecklistItemDto => ({ id: i.id, label: i.label, ...withTip(i.tip) }))
});

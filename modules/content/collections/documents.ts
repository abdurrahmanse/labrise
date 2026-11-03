import { defineCollection } from "@/shared/data/collection";
import { endpoints } from "@/shared/data/endpoints";
import { staleTimes } from "@/shared/query/staleTimes";
import type { DocumentDto } from "../dto/documentDto";
import { toDocument, toDocumentDto } from "../mappers/documentMapper";
import { documentDtoSchema } from "../schemas/documentSchema";
import type { DocumentGuideline } from "../types/document";

/** Application document guides (CV, SOP, recommendation letters and so on). */
export const documents = defineCollection<DocumentGuideline, DocumentDto>({
  name: "documents",
  path: endpoints.documents,
  schema: documentDtoSchema,
  fromDto: toDocument,
  toDto: toDocumentDto,
  idOf: (doc) => doc.id,
  staleTime: staleTimes.content,
  local: async () => (await import("@/content/documents/documentsData")).documentsData
});

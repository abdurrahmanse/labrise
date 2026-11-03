import { defineCollection } from "@/shared/data/collection";
import { endpoints } from "@/shared/data/endpoints";
import { staleTimes } from "@/shared/query/staleTimes";
import type { FaqDto } from "../dto/faqDto";
import { toFaq, toFaqDto } from "../mappers/faqMapper";
import { faqDtoSchema } from "../schemas/faqSchema";
import type { FAQItem } from "../types/faq";

/** Frequently asked questions. */
export const faqs = defineCollection<FAQItem, FaqDto>({
  name: "faqs",
  path: endpoints.faqs,
  schema: faqDtoSchema,
  fromDto: toFaq,
  toDto: toFaqDto,
  idOf: (faq) => faq.id,
  staleTime: staleTimes.content,
  local: async () => (await import("@/content/faqs/faqs")).faqsData
});

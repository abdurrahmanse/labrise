import { z } from "zod";
import type { FAQItem } from "@/data/types";
import { defineCollection } from "@/shared/data/collection";
import { endpoints } from "@/shared/data/endpoints";
import { staleTimes } from "@/shared/query/staleTimes";

export const faqSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  category: z.enum([
    "Eligibility & Tests",
    "Outreach & Supervisors",
    "Funding & Finance",
    "Strategy & Preparation",
    "Funding & Money",
    "Admissions & Strategy",
    "Research & Code",
    "Testing & Requirements",
    "Visa & Relocation"
  ]),
  tags: z.array(z.string())
}) satisfies z.ZodType<FAQItem>;

/** Frequently asked questions. */
export const faqs = defineCollection<FAQItem>({
  name: "faqs",
  path: endpoints.faqs,
  schema: faqSchema,
  idOf: (faq) => faq.id,
  staleTime: staleTimes.content,
  local: async () => (await import("@/data/faqs")).faqsData
});

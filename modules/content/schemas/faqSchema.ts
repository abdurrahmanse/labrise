import { z } from "zod";

/** Wire format of a FAQ. Mapped to the FAQItem entity by mappers/faqMapper.ts. */
export const faqDtoSchema = z.object({
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
});

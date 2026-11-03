import type { FaqDto } from "../dto/faqDto";
import type { FAQItem } from "../types/faq";

export const toFaq = (dto: FaqDto): FAQItem => ({
  id: dto.id,
  question: dto.question,
  answer: dto.answer,
  category: dto.category,
  tags: dto.tags
});

export const toFaqDto = (faq: FAQItem): FaqDto => ({
  id: faq.id,
  question: faq.question,
  answer: faq.answer,
  category: faq.category,
  tags: faq.tags
});

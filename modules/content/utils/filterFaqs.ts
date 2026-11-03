import type { FAQItem } from "../types/faq";

const ALL = "All";

export const matchesCategory = (faq: FAQItem, category: string) => category === ALL || faq.category === category;

/** True when the text appears in the question, the answer or a tag. An empty search matches everything. */
export function matchesSearch(faq: FAQItem, search: string) {
  const text = search.trim().toLowerCase();
  if (!text) return true;
  return faq.question.toLowerCase().includes(text) || faq.answer.toLowerCase().includes(text) || faq.tags.some((tag) => tag.toLowerCase().includes(text));
}

export const filterFaqs = (faqs: FAQItem[], category: string, search: string) =>
  faqs.filter((faq) => matchesCategory(faq, category) && matchesSearch(faq, search));

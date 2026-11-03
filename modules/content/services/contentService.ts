import type { ContentRepository } from "../repositories/ContentRepository";

/** Content use cases. Pure: it only knows the repository contract, so tests can pass a fake. */
export function createContentService(repository: ContentRepository) {
  return {
    countryGuides: () => repository.list("country-guides"),
    countryGuide: (id: string) => repository.get("country-guides", id),
    documents: () => repository.list("documents"),
    document: (id: string) => repository.get("documents", id),
    faqs: () => repository.list("faqs")
  };
}

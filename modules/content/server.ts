import { cacheLife, cacheTag } from "next/cache";
import { container } from "@/core/container/server";
import { contentTag } from "./tags";

/**
 * Server-side reads for pages, metadata, sitemap and static params. Each one is cached for hours and
 * tagged, so POST /api/revalidate can refresh a collection the moment the database changes.
 */
export async function getCountryGuides() {
  "use cache";
  cacheLife("hours");
  cacheTag(contentTag("country-guides"));
  return container.content.countryGuides();
}

export async function getCountryGuide(id: string) {
  "use cache";
  cacheLife("hours");
  cacheTag(contentTag("country-guides"));
  return container.content.countryGuide(id);
}

export async function getDocuments() {
  "use cache";
  cacheLife("hours");
  cacheTag(contentTag("documents"));
  return container.content.documents();
}

export async function getDocument(id: string) {
  "use cache";
  cacheLife("hours");
  cacheTag(contentTag("documents"));
  return container.content.document(id);
}

export async function getFaqs() {
  "use cache";
  cacheLife("hours");
  cacheTag(contentTag("faqs"));
  return container.content.faqs();
}

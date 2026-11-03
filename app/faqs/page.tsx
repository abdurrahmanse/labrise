import React from "react";
import type { Metadata } from "next";
import { FaqsPageClient } from "@/modules/faqs";
import { faqsMetadata } from "@/data/metadata";
import { getFaqs } from "@/modules/content/server";

export const metadata: Metadata = faqsMetadata;

export default async function FAQsPage() {
  return <FaqsPageClient initialFaqs={await getFaqs()} />;
}

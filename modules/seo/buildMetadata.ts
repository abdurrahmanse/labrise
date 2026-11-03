import type { Metadata } from "next";
import { site } from "./site";

interface PageSeo {
  title: string;
  description: string;
  /** Path starting with "/", used for the canonical URL. */
  path: string;
}

/** One place that gives every page a canonical URL plus Open Graph and Twitter tags. */
export function buildMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: site.name, type: "website" },
    twitter: { card: "summary_large_image", title, description }
  };
}

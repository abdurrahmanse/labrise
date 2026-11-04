import type { Metadata } from "next";
import { brand } from "./brand";

// ========================================================
// Canonical Global Site Metadata Configuration
// ========================================================

export const siteMetadata = {
  siteName: brand.name,
  siteUrl: brand.url,
  defaultTitle: `${brand.name}: Fully Funded AI/ML & CS Research Roadmap`,
  titleTemplate: `%s | ${brand.name}`,
  defaultDescription:
    "FundedCS is a free roadmap for Computer Science students in AI/ML research and engineering: choose a country, find AI/ML professors and funders, prepare your CV and statement of purpose, and apply for a fully funded Master's or PhD.",
  locale: brand.locale,
  keywords: [
    "FundedCS",
    "fully funded PhD in machine learning",
    "fully funded PhD in artificial intelligence",
    "funded AI research PhD positions",
    "fully funded Master's in Computer Science",
    "machine learning PhD scholarships for international students",
    "how to email a professor machine learning",
    "statement of purpose machine learning PhD",
    "AI research PhD abroad",
    "ELLIS PhD program",
    "Marie Curie doctoral network AI",
    "DAAD scholarship Computer Science",
    "Computer Science graduate admissions",
    "fully funded scholarships for international students"
  ],
  authors: [{ name: `${brand.name} Team` }],
  creator: `${brand.name} Team`,
  publisher: brand.name,
  themeColor: "#090d16",
};

// ========================================================
// Reusable Metadata Builder Helper
// ========================================================

export interface ConstructMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Creates standardized, OpenGraph and Twitter-compliant Next.js Metadata objects.
 */
export function constructMetadata({
  title,
  description = siteMetadata.defaultDescription,
  path = "",
  image,
  noIndex = false,
}: ConstructMetadataOptions = {}): Metadata {
  const url = `${siteMetadata.siteUrl}${path}`;
  const formattedTitle = title
    ? `${title} | ${brand.name}`
    : siteMetadata.defaultTitle;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: formattedTitle,
      description,
      url,
      siteName: siteMetadata.siteName,
      locale: siteMetadata.locale,
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {
          robots: {
            index: true,
            follow: true,
          },
        }),
  };
}

// ========================================================
// Centralized Pre-Configured Metadata for All Pages
// ========================================================

/**
 * Root Layout Metadata applied globally across the application.
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.defaultTitle,
    template: siteMetadata.titleTemplate,
  },
  description: siteMetadata.defaultDescription,
  keywords: siteMetadata.keywords,
  authors: siteMetadata.authors,
  creator: siteMetadata.creator,
  publisher: siteMetadata.publisher,
  openGraph: {
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    locale: siteMetadata.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Home Page (/) Metadata
 */
export const homeMetadata: Metadata = constructMetadata({
  title: "Fully Funded AI/ML & CS Research Roadmap",
  description:
    "A step-by-step roadmap for AI/ML research and engineering students: pick a country, find professors and funders, prepare your documents and apply for a fully funded Master's or PhD.",
  path: "/",
});

/**
 * Complete 13-Phase Roadmap (/roadmap) Metadata
 */
export const roadmapMetadata: Metadata = constructMetadata({
  title: "The Complete Computer Science Funding Roadmap (13 Phases)",
  description:
    "A 13-phase roadmap for AI/ML and CS research applicants, from profile audit and country choice to professor outreach, documents and comparing funding offers.",
  path: "/roadmap",
});

/**
 * Explore Countries (/countries) Metadata
 */
export const countriesMetadata: Metadata = constructMetadata({
  title: "Study AI/ML & CS Research Abroad: Funded Destinations",
  description:
    "Country guides for AI/ML and CS research applicants across Europe, North America, Asia and Oceania, with funding models, awards and official portals.",
  path: "/countries",
});

/**
 * Find Scholarships & Universities (/scholarships) Metadata
 */
export const scholarshipsMetadata: Metadata = constructMetadata({
  title: "Find AI/ML & CS Research Scholarships: 11-Step Search Guide",
  description:
    "A safe search workflow for CS students: official university pages, government programmes, copyable search queries and verified portals.",
  path: "/scholarships",
});

/**
 * Find and Contact Professors (/professors) Metadata
 */
export const professorsMetadata: Metadata = constructMetadata({
  title: "Find and Email AI/ML Professors",
  description:
    "How AI/ML applicants reach supervisors: check research fit from recent papers, write a short cold email, follow up politely and learn where a supervisor is needed first.",
  path: "/professors",
});

/**
 * Required Documents Guide (/documents) Metadata
 */
export const documentsMetadata: Metadata = constructMetadata({
  title: "Documents for a CS Master's or PhD: CV, SOP, Proposal, Letters",
  description:
    "What an AI/ML or CS research application needs: academic CV, statement of purpose, research proposal, recommendation letters and a readiness checklist.",
  path: "/documents",
});

/**
 * Frequently Asked Questions (/faqs) Metadata
 */
export const faqsMetadata: Metadata = constructMetadata({
  title: "AI/ML & CS Admissions FAQ: IELTS, GPA, Funding",
  description:
    "Straight answers for CS applicants: IELTS, GPA, supervisor outreach, tuition waivers and reapplying.",
  path: "/faqs",
});

/**
 * Dynamic Level Page (/roadmap/[level]) Metadata Resolver
 */
export function getLevelMetadata(levelSlug: string): Metadata {
  return constructMetadata({
    title: `Roadmap Level: ${levelSlug}`,
    description: "Detailed roadmap level milestones, tasks, and deliverables.",
    path: `/roadmap/${levelSlug}`,
  });
}

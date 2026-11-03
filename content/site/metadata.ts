import type { Metadata } from "next";

// ========================================================
// Canonical Global Site Metadata Configuration
// ========================================================

export const siteMetadata = {
  siteName: "Scholarship Roadmap",
  siteUrl: "https://scholarship-roadmap.vercel.app",
  defaultTitle: "Scholarship Roadmap — Step-by-Step to a Fully Funded Master's or PhD",
  titleTemplate: "%s | Scholarship Roadmap",
  defaultDescription:
    "From finding the right country and scholarship to contacting professors, preparing documents, and submitting applications—follow a clear, 13-phase roadmap to navigate the entire international postgraduate scholarship process.",
  locale: "en_US",
  keywords: [
    "Fully Funded Scholarships",
    "Fully Funded Master's Scholarships",
    "PhD Funding Roadmap",
    "Doctoral Assistantships",
    "DAAD Scholarship Germany",
    "Fulbright Foreign Student Program",
    "Chevening Scholarship UK",
    "Graduate Research Assistantship",
    "Cold Email Professor Template",
    "Statement of Purpose Blueprint",
    "European Salaried PhD",
    "Research Training Program RTP Australia",
    "International Graduate Admissions"
  ],
  authors: [{ name: "Scholarship Roadmap Educational Initiative" }],
  creator: "Scholarship Roadmap Team",
  publisher: "Scholarship Roadmap",
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
    ? `${title} | Scholarship Roadmap`
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
  title: "Your Step-by-Step Roadmap to a Fully Funded Master's or PhD",
  description:
    "From finding the right country and scholarship to contacting professors, preparing documents, and submitting applications—follow a clear roadmap to navigate the entire process.",
  path: "/",
});

/**
 * Complete 13-Phase Roadmap (/roadmap) Metadata
 */
export const roadmapMetadata: Metadata = constructMetadata({
  title: "The Complete Scholarship Roadmap (13 Phases)",
  description:
    "A systematic, 13-phase roadmap from profile audit and country selection to professor outreach, document preparation, and funding offer evaluation.",
  path: "/roadmap",
});

/**
 * Explore Countries (/countries) Metadata
 */
export const countriesMetadata: Metadata = constructMetadata({
  title: "Explore 20 Global Scholarship Destinations",
  description:
    "Comprehensive country guides across Europe, North America, Asia, and Oceania with funding models, government awards, and official portals.",
  path: "/countries",
});

/**
 * Find Scholarships & Universities (/scholarships) Metadata
 */
export const scholarshipsMetadata: Metadata = constructMetadata({
  title: "Find Scholarships and Universities — 11-Step Search Guide",
  description:
    "Master systematic search strategies across institutional databases, government repositories, copyable search queries, and official portals.",
  path: "/scholarships",
});

/**
 * Find and Contact Professors (/professors) Metadata
 */
export const professorsMetadata: Metadata = constructMetadata({
  title: "Find and Contact Professors — Outreach Guide & Email Generator",
  description:
    "Academic supervisor outreach protocol: research compatibility audit, cold email blueprint generator, follow-up etiquette, and supervisor necessity by country.",
  path: "/professors",
});

/**
 * Required Documents Guide (/documents) Metadata
 */
export const documentsMetadata: Metadata = constructMetadata({
  title: "Required Documents Guide: CV, SOP, Proposal & LORs",
  description:
    "Comprehensive dossier preparation guide for Academic CV, 5-part Statement of Purpose, Research Proposal, Recommendation Letters, and interactive checklists.",
  path: "/documents",
});

/**
 * Frequently Asked Questions (/faqs) Metadata
 */
export const faqsMetadata: Metadata = constructMetadata({
  title: "Frequently Asked Questions — International Scholarship Admissions",
  description:
    "Practical, nuanced answers to the 12 most critical scholarship questions: IELTS requirements, GPA importance, supervisor outreach, tuition waivers, and reapplication.",
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

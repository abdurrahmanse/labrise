import type { Metadata } from "next";
import { brand } from "./brand";

// ========================================================
// Canonical Global Site Metadata Configuration
// ========================================================

export const siteMetadata = {
  siteName: brand.name,
  siteUrl: brand.url,
  defaultTitle: `${brand.name}: Fully Funded Research Master's & PhD Roadmap for Engineers`,
  titleTemplate: `%s | ${brand.name}`,
  defaultDescription:
    "Labrise is a free roadmap for engineering students in any department who want a fully funded research Master's or PhD abroad: choose a country, find professors and funders, prepare your CV and research statement, and apply step by step.",
  locale: brand.locale,
  keywords: [
    "Labrise",
    "Labrise scholarships",
    "fully funded PhD in engineering",
    "fully funded research Master's in engineering",
    "funded PhD positions engineering abroad",
    "how to email a professor for a PhD position",
    "statement of purpose research PhD engineering",
    "research proposal PhD engineering",
    "scholarships for international engineering students",
    "salaried PhD Europe engineering",
    "research assistantship graduate engineering",
    "DAAD scholarship engineering",
    "Marie Curie doctoral network engineering",
    "graduate research admissions engineering",
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
  title: "Fully Funded Research Roadmap for Engineers",
  description:
    "A step-by-step roadmap for engineering students: pick a country, find research professors and funders, prepare your documents and apply for a fully funded research Master's or PhD.",
  path: "/",
});

/**
 * Complete 13-Phase Roadmap (/roadmap) Metadata
 */
export const roadmapMetadata: Metadata = constructMetadata({
  title: "The Complete Research Funding Roadmap for Engineers (13 Phases)",
  description:
    "A 13-phase roadmap for engineering research applicants, from profile audit and country choice to professor outreach, documents and comparing funding offers.",
  path: "/roadmap",
});

/**
 * Explore Countries (/countries) Metadata
 */
export const countriesMetadata: Metadata = constructMetadata({
  title: "Study Engineering Research Abroad: Funded Destinations",
  description:
    "Country guides for engineering research applicants across Europe, North America, Asia and Oceania, with funding models, awards and official portals.",
  path: "/countries",
});

/**
 * Find Scholarships & Universities (/scholarships) Metadata
 */
export const scholarshipsMetadata: Metadata = constructMetadata({
  title: "Find Engineering Research Scholarships: 11-Step Search Guide",
  description:
    "A safe search workflow for engineering applicants: official university pages, government programmes, copyable search queries and verified portals.",
  path: "/scholarships",
});

/**
 * Find and Contact Professors (/professors) Metadata
 */
export const professorsMetadata: Metadata = constructMetadata({
  title: "Find and Email Research Professors",
  description:
    "How engineering applicants reach supervisors: check research fit from recent papers, write a short cold email, follow up politely and learn where a supervisor is needed first.",
  path: "/professors",
});

/**
 * Required Documents Guide (/documents) Metadata
 */
export const documentsMetadata: Metadata = constructMetadata({
  title: "Documents for a Research Master's or PhD: CV, SOP, Proposal, Letters",
  description:
    "What an engineering research application needs: academic CV, statement of purpose, research proposal, recommendation letters and a readiness checklist.",
  path: "/documents",
});

/**
 * Frequently Asked Questions (/faqs) Metadata
 */
export const faqsMetadata: Metadata = constructMetadata({
  title: "Research Admissions FAQ: IELTS, GPA, Funding",
  description:
    "Straight answers for engineering research applicants: IELTS, GPA, supervisor outreach, tuition waivers and reapplying.",
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

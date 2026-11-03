import type { MetadataRoute } from "next";
import { countries, professors, providers, scholarships, universities } from "@/modules/directory/data";
import { countrySlug, professorSlug, providerSlug, scholarshipSlug, universitySlug } from "@/modules/directory/lib/slugs";
import { guideTopics } from "@/modules/guides/data/topics";
import { countryGuidesData } from "@/data/countryGuidesData";
import { roadmapLevelsData } from "@/data/levelsData";
import { roadmapPhasesData } from "@/data/roadmapPhasesData";
import { absoluteUrl } from "@/modules/seo/site";

const staticPaths = [
  "/", "/steps", "/profile", "/guides", "/directory", "/problems",
  "/directory/countries", "/directory/universities", "/directory/professors", "/directory/scholarships", "/directory/providers", "/apply", "/apply/university", "/apply/scholarship",
  "/roadmap", "/roadmap/phases", "/scholarships/formulas", "/scholarships/portals", "/professors/rules", "/faqs/checklist", "/scholarships", "/professors", "/documents", "/faqs",
  "/planner", "/glossary", "/about", "/disclaimer", "/privacy", "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...countryGuidesData.map((c) => `/countries/${c.id}`),
    ...roadmapLevelsData.map((l) => `/roadmap/${l.slug}`),
    ...countryGuidesData.flatMap((c) => [`/countries/${c.id}/funding`, `/countries/${c.id}/apply`]),
    ...roadmapLevelsData.flatMap((l) => l.stepIds.map((id) => `/roadmap/${l.slug}/${id}`)),
    ...roadmapPhasesData.map((p) => `/roadmap/phases/${p.slug}`),
    ...guideTopics.map((g) => `/guides/${g.id}`),
    ...countries.map((c) => `/directory/countries/${countrySlug(c)}`),
    ...universities.map((u) => `/directory/universities/${universitySlug(u)}`),
    ...professors.map((p) => `/directory/professors/${professorSlug(p)}`),
    ...scholarships.map((s) => `/directory/scholarships/${scholarshipSlug(s)}`),
    ...countries.flatMap((c) => ["universities", "professors", "funding"].map((v) => `/directory/countries/${countrySlug(c)}/${v}`)),
    ...providers.map((p) => `/directory/providers/${providerSlug(p)}`)
  ];

  return paths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 3 ? 0.5 : 0.8
  }));
}

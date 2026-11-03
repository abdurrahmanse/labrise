import type { MetadataRoute } from "next";
import { countries, professors, scholarships, universities } from "@/modules/directory/data";
import { countrySlug, professorSlug, scholarshipSlug, universitySlug } from "@/modules/directory/lib/slugs";
import { guideTopics } from "@/modules/guides/data/topics";
import { countryGuidesData } from "@/data/countryGuidesData";
import { roadmapLevelsData } from "@/data/levelsData";
import { roadmapPhasesData } from "@/data/roadmapPhasesData";
import { absoluteUrl } from "@/modules/seo/site";

const staticPaths = [
  "/", "/steps", "/profile", "/guides", "/directory", "/problems",
  "/directory/countries", "/directory/universities", "/directory/professors", "/directory/scholarships",
  "/roadmap", "/countries", "/scholarships", "/professors", "/documents", "/faqs"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...countryGuidesData.map((c) => `/countries/${c.id}`),
    ...roadmapLevelsData.map((l) => `/roadmap/${l.slug}`),
    ...roadmapPhasesData.map((p) => `/roadmap/phases/${p.slug}`),
    ...guideTopics.map((g) => `/guides/${g.id}`),
    ...countries.map((c) => `/directory/countries/${countrySlug(c)}`),
    ...universities.map((u) => `/directory/universities/${universitySlug(u)}`),
    ...professors.map((p) => `/directory/professors/${professorSlug(p)}`),
    ...scholarships.map((s) => `/directory/scholarships/${scholarshipSlug(s)}`)
  ];

  return paths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 3 ? 0.5 : 0.8
  }));
}

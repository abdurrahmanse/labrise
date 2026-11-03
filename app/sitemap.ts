import type { MetadataRoute } from "next";
import { countries, professors, universities } from "@/modules/directory/data";
import { countrySlug, professorSlug, universitySlug } from "@/modules/directory/lib/slugs";
import { guideTopics } from "@/modules/guides/data/topics";
import { absoluteUrl } from "@/modules/seo/site";

const staticPaths = [
  "/", "/steps", "/profile", "/guides", "/directory", "/problems",
  "/directory/countries", "/directory/universities", "/directory/professors",
  "/roadmap", "/countries", "/scholarships", "/professors", "/documents", "/faqs"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...guideTopics.map((g) => `/guides/${g.id}`),
    ...countries.map((c) => `/directory/countries/${countrySlug(c)}`),
    ...universities.map((u) => `/directory/universities/${universitySlug(u)}`),
    ...professors.map((p) => `/directory/professors/${professorSlug(p)}`)
  ];

  return paths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 3 ? 0.5 : 0.8
  }));
}

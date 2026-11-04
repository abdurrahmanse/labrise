import type { MetadataRoute } from "next";
import { siteMetadata } from "@/content/site/metadata";
import { brand } from "@/content/site/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteMetadata.siteName}: ${brand.tagline}`,
    short_name: siteMetadata.siteName,
    description: siteMetadata.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f6fa",
    theme_color: "#3a5fe0",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }]
  };
}

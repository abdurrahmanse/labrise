import { siteMetadata } from "@/data/metadata";

export const site = {
  name: siteMetadata.siteName,
  url: siteMetadata.siteUrl,
  description: siteMetadata.defaultDescription
};

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

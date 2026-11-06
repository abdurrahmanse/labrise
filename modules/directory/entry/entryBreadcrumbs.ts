import { navLabels } from "@/content/text/site";
import type { DirectoryType } from "../types";

/** Breadcrumb trail for a directory entry page: Home > Directory > <type> > <entry>. */
export function entryBreadcrumbs(type: DirectoryType, name: string, slug: string) {
  return [
    { name: navLabels.home, path: "/" },
    { name: navLabels.directory, path: "/directory" },
    { name: type, path: `/directory/${type}` },
    { name, path: `/directory/${type}/${slug}` }
  ];
}

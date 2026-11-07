import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildMetadata } from "@/modules/seo";
import { WithParams } from "@/shared/components/WithParams";

interface SectionRouteConfig<E, V extends string> {
  /** Every entry that has these small pages. */
  entries: E[];
  slugOf: (entry: E) => string;
  find: (slug: string) => E | undefined;
  views: readonly V[];
  /** Address of one entry's page, such as "/directory/labs". The view is added after the slug. */
  basePath: string;
  meta: (entry: E, view: V) => { title: string; description: string };
  render: (entry: E, view: V) => ReactNode;
}

interface Params {
  params: Promise<{ slug: string; view: string }>;
}

/**
 * Everything a route file `[slug]/[view]/page.tsx` needs: which pages to build, their metadata and the page itself.
 * Labs, universities and countries differ only in the config, so the route files stay a few lines long.
 */
export function defineSectionRoute<E, V extends string>(config: SectionRouteConfig<E, V>) {
  const isView = (value: string): value is V => (config.views as readonly string[]).includes(value);

  const generateStaticParams = () => config.entries.flatMap((entry) => config.views.map((view) => ({ slug: config.slugOf(entry), view })));

  async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug, view } = await params;
    const entry = config.find(slug);
    if (!entry || !isView(view)) return { title: "Not found", robots: { index: false, follow: false } };
    return buildMetadata({ ...config.meta(entry, view), path: `${config.basePath}/${slug}/${view}` });
  }

  /** The URL is read inside a boundary (see WithParams). An unknown address renders the not-found page. */
  function Page({ params }: Params) {
    return (
      <WithParams params={params}>
        {({ slug, view }) => {
          const entry = config.find(slug);
          if (!entry || !isView(view)) notFound();
          return config.render(entry, view);
        }}
      </WithParams>
    );
  }

  return { generateStaticParams, generateMetadata, Page };
}

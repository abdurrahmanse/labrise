import type { Thing, WithContext } from "schema-dts";

/** Renders typed schema.org data as JSON-LD for search engines. */
export function JsonLd<T extends Thing>({ data }: { data: WithContext<T> }) {
  return (
    <script
      type="application/ld+json"
      // "<" is escaped so page content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

import type { WithContext, HowTo } from "schema-dts";

export const howToSchema = (name: string, description: string, steps: string[]): WithContext<HowTo> => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name,
  description,
  step: steps.map((text, i) => ({ "@type": "HowToStep", position: i + 1, text }))
});

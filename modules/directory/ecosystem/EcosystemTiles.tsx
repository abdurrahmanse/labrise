import { Building2, FlaskConical, Landmark, Users } from "lucide-react";
import { ecosystemText } from "@/content/text/directory";
import { SectionTiles } from "./SectionTiles";

interface EcosystemTilesProps {
  slug: string;
  universities: number;
  professors: number;
  labs: number;
  funders: number;
}

/** Entry points under one country: its universities, professors, labs and funders. */
export function EcosystemTiles({ slug, universities, professors, labs, funders }: EcosystemTilesProps) {
  const at = (view: string) => `/directory/countries/${slug}/${view}`;
  return (
    <SectionTiles
      tiles={[
        { href: at("universities"), label: ecosystemText.universities, count: universities, Icon: Building2 },
        { href: at("professors"), label: ecosystemText.professors, count: professors, Icon: Users },
        { href: at("labs"), label: ecosystemText.labs, count: labs, Icon: FlaskConical },
        { href: at("funding"), label: ecosystemText.funding, count: funders, Icon: Landmark }
      ]}
    />
  );
}

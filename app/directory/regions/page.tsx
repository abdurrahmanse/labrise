import { RegionsIndexView } from "@/modules/directory/components/hubs/RegionsIndexView";
import { buildMetadata } from "@/modules/seo";

export const metadata = buildMetadata({
  title: "Regions: compare countries, universities and labs",
  description: "Compare fully funded study across Europe, Asia, North America, Oceania and the Middle East.",
  path: "/directory/regions"
});

export default function RegionsPage() {
  return <RegionsIndexView />;
}

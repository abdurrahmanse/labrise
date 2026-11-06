import { FieldsIndexView } from "@/modules/directory/hubs/FieldsIndexView";
import { buildMetadata } from "@/modules/seo";
import { sectionText } from "@/content/text/directory";

export const metadata = buildMetadata({ ...sectionText.fields.meta, path: "/directory/fields" });

export default function FieldsPage() {
  return <FieldsIndexView />;
}

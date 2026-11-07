import { journey } from "../data/journey";
import { DataTable } from "./DataTable";

export function FundingSection() {
  return <DataTable table={journey.funding} />;
}

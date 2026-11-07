import { BulletList } from "@/shared/components/BulletList";
import { journey } from "../data/journey";

export function ArrivalSection() {
  return <BulletList items={journey.arrival} />;
}

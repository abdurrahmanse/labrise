import { student } from "../data/profile";
import { FactGrid } from "./FactGrid";

export function ProfileSection() {
  return <FactGrid facts={student.facts} />;
}

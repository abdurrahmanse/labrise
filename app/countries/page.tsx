import { redirect } from "next/navigation";

// The card directory replaced the old long list; every country links to its dossier from there.
export default function CountriesPage() {
  redirect("/directory/countries");
}

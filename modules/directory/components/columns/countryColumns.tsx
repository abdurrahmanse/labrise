import type { ColumnDef } from "@tanstack/react-table";
import { countrySlug } from "../../lib/slugs";
import type { CountryEntry } from "../../types";
import { EntryLink } from "./EntryLink";

export const countryColumns: ColumnDef<CountryEntry>[] = [
  {
    accessorKey: "country",
    header: "Country",
    cell: ({ row }) => <EntryLink href={`/directory/countries/${countrySlug(row.original)}`}>{row.original.country}</EntryLink>
  },
  { accessorKey: "routes", header: "Funded routes", enableSorting: false },
  { accessorKey: "funding", header: "What you get", enableSorting: false },
  { accessorKey: "supervisor", header: "Professor first?" },
  { accessorKey: "fee", header: "App fee", enableSorting: false }
];

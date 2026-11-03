import type { ColumnDef } from "@tanstack/react-table";
import { scholarshipSlug } from "../../lib/slugs";
import type { ScholarshipEntry } from "../../types";
import { EntryLink } from "./EntryLink";

export const scholarshipColumns: ColumnDef<ScholarshipEntry>[] = [
  {
    accessorKey: "name",
    header: "Scholarship",
    cell: ({ row }) => <EntryLink href={`/directory/scholarships/${scholarshipSlug(row.original)}`}>{row.original.name}</EntryLink>
  },
  { accessorKey: "host", header: "Host" },
  { accessorKey: "level", header: "Level" },
  { accessorKey: "covers", header: "Covers", enableSorting: false },
  { accessorKey: "deadline", header: "Deadline", enableSorting: false }
];

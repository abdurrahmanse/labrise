import type { ColumnDef } from "@tanstack/react-table";
import { ExternalLink } from "lucide-react";
import { universitySlug } from "../../lib/slugs";
import type { UniversityEntry } from "../../types";
import { EntryLink } from "./EntryLink";

export const universityColumns: ColumnDef<UniversityEntry>[] = [
  {
    accessorKey: "name",
    header: "University",
    cell: ({ row }) => <EntryLink href={`/directory/universities/${universitySlug(row.original)}`}>{row.original.name}</EntryLink>
  },
  { accessorKey: "country", header: "Country" },
  { accessorKey: "funding", header: "Funding", enableSorting: false },
  { accessorKey: "deadline", header: "Deadline", enableSorting: false },
  {
    id: "site",
    header: "Site",
    enableSorting: false,
    cell: ({ row }) => (
      <a href={row.original.site} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-200">
        Site <ExternalLink className="w-3.5 h-3.5" />
      </a>
    )
  }
];

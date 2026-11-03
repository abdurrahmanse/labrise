import type { ColumnDef } from "@tanstack/react-table";
import { professorSlug } from "../../lib/slugs";
import type { ProfessorEntry } from "../../types";
import { EntryLink } from "./EntryLink";

export const professorColumns: ColumnDef<ProfessorEntry>[] = [
  {
    accessorKey: "name",
    header: "Professor",
    cell: ({ row }) => <EntryLink href={`/directory/professors/${professorSlug(row.original)}`}>{row.original.name}</EntryLink>
  },
  { accessorKey: "university", header: "University" },
  { accessorKey: "country", header: "Country" },
  { accessorKey: "group", header: "Group" },
  {
    id: "email",
    header: "Email",
    enableSorting: false,
    cell: ({ row }) =>
      row.original.email ? (
        <a href={`mailto:${row.original.email}`} className="text-indigo-400 hover:text-indigo-200 break-all">
          {row.original.email}
        </a>
      ) : (
        <span className="text-slate-500">Not listed</span>
      )
  }
];

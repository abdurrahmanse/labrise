"use client";

import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState
} from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

/** Generic sortable table. Click a header to sort. */
export function DataTable<T>({ data, columns }: DataTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  // eslint-disable-next-line react-hooks/incompatible-library -- TanStack Table returns unstable function refs by design
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  });

  return (
    <div className="overflow-x-auto border-2 border-white/30 bg-canvas-card/60 backdrop-blur-xl">
      <table className="w-full text-left text-sm">
        <thead className="bg-white/[0.06] text-slate-300 font-mono text-xs uppercase tracking-wider">
          {table.getHeaderGroups().map((group) => (
            <tr key={group.id}>
              {group.headers.map((header) => {
                const sorted = header.column.getIsSorted();
                return (
                  <th key={header.id} className="px-4 py-3">
                    {header.column.getCanSort() ? (
                      <button
                        type="button"
                        onClick={header.column.getToggleSortingHandler()}
                        className="inline-flex items-center gap-1.5 uppercase tracking-wider hover:text-indigo-300 cursor-pointer"
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {sorted === "asc" ? <ArrowUp className="w-3.5 h-3.5" /> : sorted === "desc" ? <ArrowDown className="w-3.5 h-3.5" /> : <ChevronsUpDown className="w-3.5 h-3.5 opacity-50" />}
                      </button>
                    ) : (
                      flexRender(header.column.columnDef.header, header.getContext())
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-t border-white/10 hover:bg-white/[0.04]">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-3 text-slate-300">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && <p className="p-6 text-center text-slate-400">No matches. Clear the search or region filter.</p>}
    </div>
  );
}

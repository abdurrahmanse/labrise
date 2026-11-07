"use client";

import { fieldClass } from "./fieldStyles";
import React from "react";
import { Search, X } from "lucide-react";
import { commonText } from "@/content/text/common";

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

export function SearchInput({
  value,
  onChange,
  placeholder = commonText.states.searchPlaceholder,
  className = "",
  autoFocus = false
}: SearchInputProps) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={`${fieldClass} pl-9 pr-9`}
      />
      {value.trim().length > 0 && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-slate-500 hover:text-slate-200 hover:bg-white/10 transition-colors"
          aria-label={commonText.states.clearSearch}
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}

export default SearchInput;

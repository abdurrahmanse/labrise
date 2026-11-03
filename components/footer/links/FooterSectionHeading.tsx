import React from "react";

export interface FooterSectionHeadingProps {
  title: string;
  colorClass?: string;
}

export function FooterSectionHeading({
  title,
  colorClass = "text-indigo-400",
}: FooterSectionHeadingProps) {
  return (
    <h4
      className={`font-bold text-xs tracking-wider uppercase mb-3.5 font-mono ${colorClass}`}
    >
      {title}
    </h4>
  );
}

export default FooterSectionHeading;

import React from "react";

export interface FooterNavListProps {
  children: React.ReactNode;
}

export function FooterNavList({ children }: FooterNavListProps) {
  return <ul className="space-y-2.5">{children}</ul>;
}

export default FooterNavList;

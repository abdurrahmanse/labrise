import React from "react";
import { SectionHeader, SectionHeaderProps } from "./SectionHeader";

export type SectionHeadingProps = SectionHeaderProps;

/**
 * Standardized SectionHeading component delegating to SectionHeader.
 */
export function SectionHeading(props: SectionHeadingProps) {
  return <SectionHeader {...props} />;
}

export default SectionHeading;



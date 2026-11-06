import React from "react";
import { StepMathDiagnosticWidget } from "./StepMathDiagnosticWidget";
import { StepDecisionMatrixWidget } from "./StepDecisionMatrixWidget";
import { StepLiteratureMatrixWidget } from "./StepLiteratureMatrixWidget";

/**
 * Canonical registry mapping Roadmap Step numbers to specialized interactive widgets.
 * Allows new interactive tools to be plugged in cleanly without modifying StepCard.
 */
export const STEP_WIDGET_REGISTRY: Record<string, React.ComponentType> = {
  "0.1": StepMathDiagnosticWidget,
  "0.3": StepDecisionMatrixWidget,
  "0.4": StepLiteratureMatrixWidget
};

export function hasStepWidget(stepNumber: string): boolean {
  return Boolean(STEP_WIDGET_REGISTRY[stepNumber]);
}

interface StepWidgetRendererProps {
  stepNumber: string;
}

export function StepWidgetRenderer({ stepNumber }: StepWidgetRendererProps) {
  const WidgetComponent = STEP_WIDGET_REGISTRY[stepNumber];

  if (!WidgetComponent) {
    return null;
  }

  return <WidgetComponent />;
}

export {
  StepMathDiagnosticWidget,
  StepDecisionMatrixWidget,
  StepLiteratureMatrixWidget
};

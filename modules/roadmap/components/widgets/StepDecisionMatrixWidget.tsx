"use client";

import React, { useState } from "react";
import {
  GitFork,
  DollarSign,
  GraduationCap,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { degreeRoutesData, decisionMatrixMeta } from "@/data/stepWidgetsData";
import {
  WidgetShell,
  WidgetHeader,
  WidgetTabs,
  WidgetTabButton,
  WidgetSectionCard,
  WidgetStatCard,
  WidgetCallout
} from "./common";

export function StepDecisionMatrixWidget() {
  const [selectedRouteId, setSelectedRouteId] = useState("phd");
  const selectedRoute =
    degreeRoutesData.find((r) => r.id === selectedRouteId) || degreeRoutesData[0];

  return (
    <WidgetShell theme="emerald">
      {/* Header */}
      <WidgetHeader
        theme="emerald"
        icon={<GitFork className="w-5 h-5" />}
        stepBadge={decisionMatrixMeta.stepBadge}
        title={decisionMatrixMeta.title}
        headerBadge={decisionMatrixMeta.headerBadge}
      />

      {/* Route Switcher Buttons */}
      <WidgetTabs columns={3}>
        {degreeRoutesData.map((route) => (
          <WidgetTabButton
            key={route.id}
            theme={route.cardTheme}
            isActive={selectedRouteId === route.id}
            onClick={() => setSelectedRouteId(route.id)}
            topLabel={route.shortLabel}
            badge={
              <Badge variant={route.badgeVariant} size="sm">
                {route.tag}
              </Badge>
            }
            mainLabel={route.title}
          />
        ))}
      </WidgetTabs>

      {/* Selected Route Detailed Breakdown Card */}
      <WidgetSectionCard
        headerSlot={
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant={selectedRoute.badgeVariant} size="sm">
                  {selectedRoute.tag}
                </Badge>
                <span className="text-xs font-mono text-slate-400">
                  Timeline: {selectedRoute.timeline}
                </span>
              </div>
              <h4 className="text-lg font-heading font-bold text-white">
                {selectedRoute.title}
              </h4>
            </div>

            <div className="p-3 rounded-xl bg-canvas-base border border-white/10 text-right">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                {decisionMatrixMeta.netFinancialBalanceLabel}
              </span>
              <span
                className={`text-sm sm:text-base font-mono font-bold ${
                  selectedRoute.cardTheme === "rose" ? "text-rose-400" : "text-emerald-400"
                }`}
              >
                {selectedRoute.financialOutcome}
              </span>
            </div>
          </div>
        }
      >
        {/* Financial & Operational Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <WidgetStatCard
            label={decisionMatrixMeta.stipendLabel}
            value={selectedRoute.stipendAmount}
            icon={<DollarSign className="w-3 h-3 text-emerald-400" />}
          />
          <WidgetStatCard
            label={decisionMatrixMeta.tuitionLabel}
            value={selectedRoute.tuitionStatus}
            icon={<GraduationCap className="w-3 h-3 text-cyan-400" />}
          />
          <WidgetStatCard
            label={decisionMatrixMeta.undergradLabel}
            value={
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {decisionMatrixMeta.undergradEligibleText}
              </span>
            }
            icon={<CheckCircle2 className="w-3 h-3 text-indigo-400" />}
          />
          <WidgetStatCard
            label={decisionMatrixMeta.masterOutLabel}
            value={
              selectedRoute.masterOutOption ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {decisionMatrixMeta.masterOutAvailableText}
                </span>
              ) : (
                <span className="text-slate-400 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5 text-slate-500" />
                  {decisionMatrixMeta.masterOutNotAvailableText}
                </span>
              )
            }
            icon={<HelpCircle className="w-3 h-3 text-amber-400" />}
          />
        </div>

        {/* Verdict & Faculty Priority Box */}
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-canvas-base border border-white/5 text-xs text-slate-300">
            <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              {decisionMatrixMeta.evaluationHeader}
            </div>
            <p className="leading-relaxed text-slate-300 font-sans">
              {selectedRoute.verdict}
            </p>
          </div>

          {selectedRoute.callout && (
            <WidgetCallout
              variant={selectedRoute.callout.type}
              title={selectedRoute.callout.title}
              description={selectedRoute.callout.desc}
            />
          )}
        </div>

        {/* Target Institutions Pills */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
            {decisionMatrixMeta.globalHubsLabel}
          </span>
          {selectedRoute.targetRegions.map((region, i) => (
            <span
              key={i}
              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-canvas-base text-slate-200 border border-white/10"
            >
              {region}
            </span>
          ))}
        </div>
      </WidgetSectionCard>

      {/* Quick Summary Actionable Advice */}
      <div className="mt-4 p-3.5 rounded-xl bg-canvas-card border border-white/5 flex items-center justify-between text-xs text-slate-400">
        <span className="text-slate-300 font-medium">
          {decisionMatrixMeta.decisionRuleFooter.rule}
        </span>
        <span className="font-mono text-cyan-400 flex items-center gap-1 font-semibold">
          {decisionMatrixMeta.decisionRuleFooter.badge} <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </WidgetShell>
  );
}

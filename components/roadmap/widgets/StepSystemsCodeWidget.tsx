"use client";

import React, { useState } from "react";
import {
  Terminal,
  Copy,
  Check,
  Zap,
  Layers,
  Server,
  FileCode,
  Gauge
} from "lucide-react";
import {
  systemsTabsData,
  systemsBenchmarkMetricsData,
  systemsCodeMeta
} from "@/data/stepWidgetsData";
import {
  WidgetShell,
  WidgetHeader,
  WidgetTabs,
  WidgetTabButton,
  WidgetCallout
} from "./common";

const METRIC_ICONS: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-4 h-4" />,
  Gauge: <Gauge className="w-4 h-4" />,
  Layers: <Layers className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />
};

const VARIANT_STYLES: Record<string, string> = {
  cyan: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  purple: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  amber: "bg-amber-500/10 text-amber-400 border border-amber-500/20"
};

export function StepSystemsCodeWidget() {
  const [activeTabId, setActiveTabId] = useState("ddp");
  const [copied, setCopied] = useState(false);

  const activeTab = systemsTabsData.find((t) => t.id === activeTabId) || systemsTabsData[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeTab.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <WidgetShell theme="cyan">
      {/* Header */}
      <WidgetHeader
        theme="cyan"
        icon={<Terminal className="w-5 h-5" />}
        stepBadge={systemsCodeMeta.stepBadge}
        title={systemsCodeMeta.title}
        headerBadge={systemsCodeMeta.headerBadge}
        rightSlot={
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
            {systemsCodeMeta.subBadge}
          </span>
        }
      />

      {/* Engineering Benchmarks Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-5 relative z-10">
        {systemsBenchmarkMetricsData.map((metric) => (
          <div
            key={metric.id}
            className="p-3 rounded-xl bg-canvas-card border border-white/5 flex items-center gap-3"
          >
            <div
              className={`p-2 rounded-lg shrink-0 ${
                VARIANT_STYLES[metric.variant] || "bg-slate-500/10 text-slate-400"
              }`}
            >
              {METRIC_ICONS[metric.iconName] || <Terminal className="w-4 h-4" />}
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-mono text-slate-400 uppercase">
                {metric.label}
              </div>
              <div className="text-xs font-bold text-white truncate">
                {metric.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <WidgetTabs scrollable>
        {systemsTabsData.map((tab) => (
          <WidgetTabButton
            key={tab.id}
            variant="pill"
            theme="cyan"
            isActive={activeTabId === tab.id}
            onClick={() => {
              setActiveTabId(tab.id);
              setCopied(false);
            }}
            icon={<FileCode className="w-3.5 h-3.5" />}
            mainLabel={tab.label}
          />
        ))}
      </WidgetTabs>

      {/* Code Editor Container */}
      <div className="rounded-xl border border-white/10 bg-canvas-base overflow-hidden relative z-10 shadow-2xl">
        {/* Editor Title Bar */}
        <div className="px-4 py-2.5 bg-canvas-card border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-xs font-mono text-slate-300 font-semibold">
              {activeTab.fileName}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-canvas-base hover:bg-slate-800 text-slate-300 border border-white/10 text-xs font-mono transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 overflow-x-auto text-xs font-mono text-slate-200 leading-relaxed bg-canvas-base/95">
          <pre className="selection:bg-cyan-900 selection:text-cyan-200">
            <code>{activeTab.code}</code>
          </pre>
        </div>

        {/* Code Sub-footer with Contextual Badges */}
        <div className="px-4 py-2.5 bg-canvas-base border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <p className="text-slate-400 text-[11px] leading-tight">
            {activeTab.description}
          </p>
          <div className="flex items-center gap-1.5">
            {activeTab.highlights.map((h, i) => (
              <span
                key={i}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Systems Engineering Standard Callout */}
      <WidgetCallout
        variant="cyan"
        className="mt-4"
        title={systemsCodeMeta.facultyCallout.title}
        description={systemsCodeMeta.facultyCallout.desc}
      />
    </WidgetShell>
  );
}

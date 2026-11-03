"use client";

import React, { useState } from "react";
import { Cpu, Gauge, Zap, CheckCircle2, AlertCircle } from "lucide-react";
import { Badge } from "@/shared/ui/Badge";
import { gpuQuantPresetsData, gpuQuantMeta } from "@/content/roadmap/stepWidgetsData";
import {
  WidgetShell,
  WidgetHeader,
  WidgetTabs,
  WidgetTabButton,
  WidgetSectionCard,
  WidgetStatCard,
  WidgetCallout
} from "./common";
import { legacyText } from "@/content/text/legacy";

export function StepGpuQuantWidget() {
  const [selectedPresetId, setSelectedPresetId] = useState("llama-8b");
  const selectedPreset =
    gpuQuantPresetsData.find((p) => p.id === selectedPresetId) || gpuQuantPresetsData[0];

  const savingsPercent = Math.round(
    ((selectedPreset.fp16VramGB - selectedPreset.qloraVramGB) / selectedPreset.fp16VramGB) * 100
  );

  return (
    <WidgetShell theme="amber">
      {/* Header */}
      <WidgetHeader
        theme="amber"
        icon={<Cpu className="w-5 h-5" />}
        stepBadge={gpuQuantMeta.stepBadge}
        title={gpuQuantMeta.title}
        headerBadge={gpuQuantMeta.headerBadge}
        rightSlot={
          <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
            -{savingsPercent}% VRAM via QLoRA
          </span>
        }
      />

      {/* Model Selector Buttons */}
      <WidgetTabs columns={4}>
        {gpuQuantPresetsData.map((preset) => (
          <WidgetTabButton
            key={preset.id}
            theme="amber"
            isActive={selectedPresetId === preset.id}
            onClick={() => setSelectedPresetId(preset.id)}
            topLabel={preset.parameters}
            mainLabel={preset.name}
          />
        ))}
      </WidgetTabs>

      {/* Selected Preset Dashboard */}
      <WidgetSectionCard
        headerSlot={
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-heading font-bold text-white">
                  {selectedPreset.name}
                </span>
                <Badge variant="amber" size="sm">
                  {selectedPreset.parameters}
                </Badge>
              </div>
              <p className="text-xs text-slate-400">{selectedPreset.notes}</p>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs">
              {selectedPreset.freeTierCompatible ? (
                <span className="text-emerald-400 flex items-center gap-1 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {legacyText.stepGpuQuantWidget.t0}
                </span>
              ) : (
                <span className="text-amber-400 flex items-center gap-1 bg-amber-950/40 px-2.5 py-1 rounded-lg border border-amber-500/30">
                  <AlertCircle className="w-3.5 h-3.5" /> {legacyText.stepGpuQuantWidget.t1}
                </span>
              )}
            </div>
          </div>
        }
      >
        {/* VRAM Memory Footprint Comparison Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <WidgetStatCard
            label={legacyText.stepGpuQuantWidget.t4}
            value={`${selectedPreset.fp16VramGB.toFixed(1)} GB`}
            sublabel={legacyText.stepGpuQuantWidget.t5}
            valueColor="text-rose-400"
          />
          <WidgetStatCard
            label="8-Bit Quantized (LLM.int8())"
            value={`${selectedPreset.quant8bitVramGB.toFixed(1)} GB`}
            sublabel="-45% VRAM Reduction"
            valueColor="text-amber-400"
          />
          <WidgetStatCard
            label={legacyText.stepGpuQuantWidget.t6}
            value={`${selectedPreset.qloraVramGB.toFixed(1)} GB`}
            sublabel={legacyText.stepGpuQuantWidget.t7}
            valueColor="text-emerald-400"
            highlight
          />
        </div>

        {/* Hardware & Batch Size Guidance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3 rounded-lg bg-canvas-base border border-white/5 flex items-center gap-2.5">
            <Gauge className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="min-w-0">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">
                {legacyText.stepGpuQuantWidget.t2}
              </span>
              <span className="text-xs text-white font-medium truncate block">
                {selectedPreset.minRecommendedGpu}
              </span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-canvas-base border border-white/5 flex items-center gap-2.5">
            <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
            <div className="min-w-0">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">
                {legacyText.stepGpuQuantWidget.t3}
              </span>
              <span className="text-xs text-white font-medium truncate block">
                {selectedPreset.batchSizeLimit}
              </span>
            </div>
          </div>
        </div>

        {/* Defense Callout */}
        <WidgetCallout
          variant="amber"
          title={gpuQuantMeta.hardwareTipTitle}
          description={gpuQuantMeta.hardwareTipDesc}
        />
      </WidgetSectionCard>
    </WidgetShell>
  );
}

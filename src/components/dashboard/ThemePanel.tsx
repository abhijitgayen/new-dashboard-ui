import React from "react";
import { X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  useTheme,
  ColorMode,
  ContentLayout,
  FontFamily,
  Scale,
  Radius,
  SidebarMode,
} from "@/contexts/ThemeContext";

interface ThemePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThemePanel: React.FC<ThemePanelProps> = ({ isOpen, onClose }) => {
  const { settings, updateSettings, resetToDefault } = useTheme();

  if (!isOpen) return null;

  const colorOptions = [
    { name: "Emerald", value: "#10b981" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Purple", value: "#8b5cf6" },
    { name: "Orange", value: "#f59e0b" },
    { name: "Red", value: "#ef4444" },
    { name: "Pink", value: "#ec4899" },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-end">
      <div className="w-80 h-full glass-effect border-l border-border/50 overflow-y-auto">
        <div className="p-6">
          {/* Header with accent styling */}
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-border/50">
            <h2 className="text-lg font-semibold accent-text">Theme preset:</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover-accent"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Scale */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block accent-text">
              Scale:
            </Label>
            <div className="flex gap-2">
              {[
                { label: "SM", value: "sm" as Scale },
                { label: "XS", value: "xs" as Scale },
                { label: "LG", value: "lg" as Scale },
              ].map((scale) => (
                <Button
                  key={scale.value}
                  variant={
                    settings.scale === scale.value ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => updateSettings({ scale: scale.value })}
                  className="px-3 hover-accent"
                  style={
                    {
                      backgroundColor:
                        settings.scale === scale.value
                          ? "var(--accent-color)"
                          : undefined,
                      borderColor: "var(--accent-color)",
                    } as React.CSSProperties
                  }
                >
                  {scale.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Radius */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block accent-text">
              Radius:
            </Label>
            <div className="flex gap-2">
              {[
                { label: "○", value: "none" as Radius },
                { label: "SM", value: "sm" as Radius },
                { label: "MD", value: "md" as Radius },
                { label: "LG", value: "lg" as Radius },
                { label: "XL", value: "xl" as Radius },
              ].map((radius) => (
                <Button
                  key={radius.value}
                  variant={
                    settings.radius === radius.value ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => updateSettings({ radius: radius.value })}
                  className="px-3 hover-accent"
                  style={
                    {
                      backgroundColor:
                        settings.radius === radius.value
                          ? "var(--accent-color)"
                          : undefined,
                      borderColor: "var(--accent-color)",
                    } as React.CSSProperties
                  }
                >
                  {radius.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Color Mode */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block accent-text">
              Color mode:
            </Label>
            <div className="flex gap-2">
              <Button
                variant={settings.colorMode === "light" ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  updateSettings({ colorMode: "light" as ColorMode })
                }
                className="flex-1 hover-accent text-xs"
                style={
                  {
                    backgroundColor:
                      settings.colorMode === "light"
                        ? "var(--accent-color)"
                        : undefined,
                    borderColor: "var(--accent-color)",
                  } as React.CSSProperties
                }
              >
                Light
              </Button>
              <Button
                variant={settings.colorMode === "dark" ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  updateSettings({ colorMode: "dark" as ColorMode })
                }
                className="flex-1 hover-accent text-xs"
                style={
                  {
                    backgroundColor:
                      settings.colorMode === "dark"
                        ? "var(--accent-color)"
                        : undefined,
                    borderColor: "var(--accent-color)",
                  } as React.CSSProperties
                }
              >
                Dark
              </Button>
              <Button
                variant={
                  settings.colorMode === "dark-blue" ? "default" : "outline"
                }
                size="sm"
                onClick={() =>
                  updateSettings({ colorMode: "dark-blue" as ColorMode })
                }
                className="flex-1 hover-accent text-xs"
                style={
                  {
                    backgroundColor:
                      settings.colorMode === "dark-blue"
                        ? "var(--accent-color)"
                        : undefined,
                    borderColor: "var(--accent-color)",
                  } as React.CSSProperties
                }
              >
                Dark Blue
              </Button>
            </div>
          </div>

          {/* Content Layout */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block accent-text">
              Content layout:
            </Label>
            <div className="flex gap-2">
              <Button
                variant={
                  settings.contentLayout === "full" ? "default" : "outline"
                }
                size="sm"
                onClick={() =>
                  updateSettings({ contentLayout: "full" as ContentLayout })
                }
                className="flex-1 hover-accent"
                style={
                  {
                    backgroundColor:
                      settings.contentLayout === "full"
                        ? "var(--accent-color)"
                        : undefined,
                    borderColor: "var(--accent-color)",
                  } as React.CSSProperties
                }
              >
                Full
              </Button>
              <Button
                variant={
                  settings.contentLayout === "centered" ? "default" : "outline"
                }
                size="sm"
                onClick={() =>
                  updateSettings({ contentLayout: "centered" as ContentLayout })
                }
                className="flex-1 hover-accent"
                style={
                  {
                    backgroundColor:
                      settings.contentLayout === "centered"
                        ? "var(--accent-color)"
                        : undefined,
                    borderColor: "var(--accent-color)",
                  } as React.CSSProperties
                }
              >
                Centered
              </Button>
            </div>
          </div>

          {/* Sidebar Mode */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block accent-text">
              Sidebar mode:
            </Label>
            <div className="flex gap-2">
              <Button
                variant={
                  settings.sidebarMode === "default" ? "default" : "outline"
                }
                size="sm"
                onClick={() =>
                  updateSettings({ sidebarMode: "default" as SidebarMode })
                }
                className="flex-1 hover-accent"
                style={
                  {
                    backgroundColor:
                      settings.sidebarMode === "default"
                        ? "var(--accent-color)"
                        : undefined,
                    borderColor: "var(--accent-color)",
                  } as React.CSSProperties
                }
              >
                Default
              </Button>
              <Button
                variant={
                  settings.sidebarMode === "icon" ? "default" : "outline"
                }
                size="sm"
                onClick={() =>
                  updateSettings({ sidebarMode: "icon" as SidebarMode })
                }
                className="flex-1 hover-accent"
                style={
                  {
                    backgroundColor:
                      settings.sidebarMode === "icon"
                        ? "var(--accent-color)"
                        : undefined,
                    borderColor: "var(--accent-color)",
                  } as React.CSSProperties
                }
              >
                Icon
              </Button>
            </div>
          </div>

          {/* Font Family */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block accent-text">
              Font:
            </Label>
            <div className="space-y-2">
              {[
                { label: "Inter", value: "sans" as FontFamily },
                { label: "JetBrains Mono", value: "mono" as FontFamily },
                { label: "Cal Sans", value: "display" as FontFamily },
              ].map((font) => (
                <Button
                  key={font.value}
                  variant={
                    settings.fontFamily === font.value ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => updateSettings({ fontFamily: font.value })}
                  className="w-full justify-start hover-accent"
                  style={
                    {
                      backgroundColor:
                        settings.fontFamily === font.value
                          ? "var(--accent-color)"
                          : undefined,
                      borderColor: "var(--accent-color)",
                    } as React.CSSProperties
                  }
                >
                  {font.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Color Palette with enhanced styling */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block accent-text">
              Colors:
            </Label>
            <div className="grid grid-cols-3 gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => updateSettings({ accentColor: color.value })}
                  className={`w-full h-10 rounded-lg border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                    settings.accentColor === color.value
                      ? "border-foreground scale-105 accent-glow"
                      : "border-border/50 hover:border-muted-foreground"
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Action Buttons with modern styling */}
          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full hover-accent"
              onClick={resetToDefault}
              style={
                { borderColor: "var(--accent-color)" } as React.CSSProperties
              }
            >
              Reset to Default
            </Button>
            <Button
              className="w-full modern-button"
              style={
                {
                  backgroundColor: "var(--accent-color)",
                } as React.CSSProperties
              }
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemePanel;

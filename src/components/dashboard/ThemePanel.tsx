import React from "react";
import { X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  useTheme,
  Scale,
  Radius,
} from "@/contexts/ThemeContext";
import ThemeScale from "../theme/ThemeScale";
import ThemeRadius from "../theme/ThemeRadius";
import ColorMode from "../theme/ColorMode";
import ContentLayout from "../theme/ContentLayout";
import SidebarMode from "../theme/SidebarMode";
import FontFamily from "../theme/FontFamily";
import ColorEditing from "../theme/ColorEditing";

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
          <ThemeScale
            settings={settings}
            updateSettings={updateSettings}
          />

          {/* Radius */}
          <ThemeRadius
            settings={settings}
            updateSettings={updateSettings}
          />

          {/* Color Mode */}
          <ColorMode
            settings={settings}
            updateSettings={updateSettings}
          />

          {/* Content Layout */}
          <ContentLayout
            settings={settings}
            updateSettings={updateSettings}
          />

          {/* Sidebar Mode */}
          <SidebarMode
            settings={settings}
            updateSettings={updateSettings}
          />

          {/* Font Family */}
          <FontFamily
            settings={settings}
            updateSettings={updateSettings}
          />

          {/* Color Palette with enhanced styling */}
          <ColorEditing
            colorOptions={colorOptions}
            settings={settings}
            updateSettings={updateSettings}
          />

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

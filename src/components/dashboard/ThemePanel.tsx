import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeScale from "./layout/theme/ThemeScale";
import ThemeRadius from "./layout/theme/ThemeRadius";
import ColorMode from "./layout/theme/ColorMode";
import ContentLayout from "./layout/theme/ContentLayout";
import SidebarMode from "./layout/theme/SidebarMode";
import FontFamily from "./layout/theme/FontFamily";
import ColorEditing from "./layout/theme/ColorEditing";


const ThemePanel = () => {
  const { settings, updateSettings, resetToDefault } = useTheme();

  const colorOptions = [
    { name: "Emerald", value: "#10b981" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Purple", value: "#8b5cf6" },
    { name: "Orange", value: "#f59e0b" },
    { name: "Red", value: "#ef4444" },
    { name: "Pink", value: "#ec4899" },
  ];

  return (
    <>
      <h2 className="text-lg font-semibold accent-text -mt-1 mb-2">Theme preset:</h2>
      <hr className="mb-1.5" />
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
      </div>
    </>
  );
};

export default ThemePanel;

import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import Scale from "../settings/appearance/Scale";
import Radius from "../settings/appearance/Radius";
import ColorMode from "../settings/appearance/ColorMode";
import ContentLayout from "../settings/appearance/ContentLayout";
import SidebarMode from "../settings/appearance/SidebarMode";
import FontFamily from "../settings/appearance/FontFamily";
import ColorPalette from "../settings/appearance/ColorPalette";

const ThemePanel = () => {
  const { settings, updateSettings, resetToDefault } = useTheme();
  const storeSetting = JSON.parse(localStorage.getItem("theme_panel"))


  return (
    <SheetContent className="overflow-y-auto max-h-screen p-6 bg-background border-l border-border/50 glass-effect w-80">
      <SheetHeader className="-mt-4 justify-start items-start py-3 border-b border-border/50 mb-2">
        <SheetTitle className="text-lg font-semibold accent-text">Theme panel</SheetTitle>
      </SheetHeader>

      <Scale updateSettings={updateSettings} settings={storeSetting} />

      <Radius settings={storeSetting} updateSettings={updateSettings} />

      <ColorMode settings={storeSetting} updateSettings={updateSettings} />

      <ContentLayout settings={storeSetting} updateSettings={updateSettings} />

      <SidebarMode settings={storeSetting} updateSettings={updateSettings} />

      <FontFamily settings={storeSetting} updateSettings={updateSettings} />

      {/* <ColorPalette settings={storeSetting} updateSettings={updateSettings} /> */}

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
    </SheetContent>
  );
};

export default ThemePanel;

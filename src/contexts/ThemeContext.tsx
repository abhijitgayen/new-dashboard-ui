// theme-context.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  ThemeSettings,
  defaultSettings,
  fontFamilyMaps,
  radiusValues,
  scaleValues,
  accentColors
} from "./ThemeConfig";

interface ThemeContextType {
  settings: ThemeSettings;
  updateSettings: (newSettings: Partial<ThemeSettings>) => void;
  resetToDefault: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const hexToHsl = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<ThemeSettings>(() => {
    const stored = localStorage.getItem("theme_panel");
    return stored ? JSON.parse(stored) : defaultSettings;
  });

  const updateSettings = (newSettings: Partial<ThemeSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    localStorage.setItem("theme_panel", JSON.stringify(updated));
  };

  const resetToDefault = () => {
    setSettings(defaultSettings);
    localStorage.removeItem("theme_panel");
    console.log("Theme settings reset to default");
  };

  useEffect(() => {
    const root = document.documentElement;
    // Handle color modes
    root.classList.toggle("dark", settings.colorMode !== "light");
    root.classList.toggle("dark-blue", settings.colorMode === "dark-blue");

    // Dynamic values
    const fontFamilyObj = fontFamilyMaps.find((val) => val.id === settings.fontFamily);
    root.style.setProperty("--font-family", fontFamilyObj ? fontFamilyObj.value : "");

    const scaleObj = scaleValues.find((val) => val.id === settings.scale);
    root.style.setProperty("--scale", scaleObj ? scaleObj.value : "1");
    // root.style.transform = `scale(${scaleObj.value || "1"})`;

    const radiusObj = radiusValues.find((val) => val.id === settings.radius);
    root.style.setProperty("--radius", radiusObj ? radiusObj.value : "0px");

    const accent = accentColors.find(c => c.id === settings.accentColor);
    if (accent) {
      const hsl = hexToHsl(accent.hex);
      root.style.setProperty("--primary", hsl);
      root.style.setProperty("--accent-color", accent.hex);
      root.style.setProperty("--accent-foreground", accent.foreground);
      root.style.setProperty("--ring", hsl);
    }
  }, [settings]);

  return (
    <ThemeContext.Provider value={{ settings, updateSettings, resetToDefault }}>
      {children}
    </ThemeContext.Provider>
  );
};

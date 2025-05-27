import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorMode = 'light' | 'dark' | 'dark-blue';
export type ContentLayout = 'full' | 'centered';
export type FontFamily = 'sans' | 'mono' | 'display';
export type Scale = 'sm' | 'xs' | 'lg';
export type Radius = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type SidebarMode = 'default' | 'icon';

interface ThemeSettings {
  colorMode: ColorMode;
  contentLayout: ContentLayout;
  fontFamily: FontFamily;
  accentColor: string;
  scale: Scale;
  radius: Radius;
  sidebarMode: SidebarMode;
}

interface ThemeContextType {
  settings: ThemeSettings;
  updateSettings: (newSettings: Partial<ThemeSettings>) => void;
  resetToDefault: () => void;
}

const defaultSettings: ThemeSettings = {
  colorMode: 'dark',
  contentLayout: 'full',
  fontFamily: 'sans',
  accentColor: '#10b981',
  scale: 'sm',
  radius: 'md',
  sidebarMode: 'default'
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Helper function to convert hex to HSL
const hexToHsl = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
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

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<ThemeSettings>(defaultSettings);

  const updateSettings = (newSettings: Partial<ThemeSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const resetToDefault = () => {
    setSettings(defaultSettings);
  };

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    
    // Apply color mode
    if (settings.colorMode === 'dark') {
      root.classList.add('dark');
      root.classList.remove('dark-blue');
    } else if (settings.colorMode === 'dark-blue') {
      root.classList.add('dark', 'dark-blue');
    } else {
      root.classList.remove('dark', 'dark-blue');
    }

    // Apply font family
    root.style.setProperty('--font-family', {
      sans: 'Inter, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
      display: 'Cal Sans, system-ui, sans-serif'
    }[settings.fontFamily]);

    // Apply scale
    const scaleValues = {
      xs: '0.8',
      sm: '0.9',
      lg: '1.1'
    };
    root.style.setProperty('--scale', scaleValues[settings.scale]);
    root.style.transform = `scale(${scaleValues[settings.scale]})`;

    // Apply radius
    const radiusValues = {
      none: '0px',
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem'
    };
    root.style.setProperty('--radius', radiusValues[settings.radius]);

    // Apply accent color to primary variables
    const hslColor = hexToHsl(settings.accentColor);
    root.style.setProperty('--primary', hslColor);
    root.style.setProperty('--accent-color', settings.accentColor);
    
    // Also update ring color for focus states
    root.style.setProperty('--ring', hslColor);

  }, [settings]);

  return (
    <ThemeContext.Provider value={{ settings, updateSettings, resetToDefault }}>
      {children}
    </ThemeContext.Provider>
  );
};

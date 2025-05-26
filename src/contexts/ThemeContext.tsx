
import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorMode = 'light' | 'dark';
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
    } else {
      root.classList.remove('dark');
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

    // Apply accent color
    root.style.setProperty('--accent-color', settings.accentColor);

  }, [settings]);

  return (
    <ThemeContext.Provider value={{ settings, updateSettings, resetToDefault }}>
      {children}
    </ThemeContext.Provider>
  );
};

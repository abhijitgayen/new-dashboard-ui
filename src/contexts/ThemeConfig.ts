export type ColorMode = "light" | "dark" | "dark-blue";
export type ContentLayout = "full" | "centered";
export type SidebarMode = "default" | "icon";
export type FontFamily = "sans" | "mono" | "display" | "roboto" | "lato" | "montserrat" | "poppins" | "open-sans" | "raleway" | "nunito" | "merriweather" | "oswald" | "ubuntu";
export type Radius = "none" | "sm" | "md" | "lg" | "xl";
export type Scale = "xs" | "sm" | "lg";
export type AccentColorName = "emerald" | "violet" | "rose" | "amber" | "sky";


// Accent color names and config
export interface AccentColor {
  id: AccentColorName;
  label: string;
  hex: string;
  foreground: string;
}

export const accentColors: AccentColor[] = [
  { id: 'emerald', label: "Emerald", hex: "#10b981", foreground: "#ffffff" },
  { id: 'violet', label: "Violet", hex: "#8b5cf6", foreground: "#ffffff" },
  { id: 'rose', label: "Rose", hex: "#f43f5e", foreground: "#ffffff" },
  { id: 'amber', label: "Amber", hex: "#f59e0b", foreground: "#000000" },
  { id: 'sky', label: "Sky", hex: "#0ea5e9", foreground: "#ffffff" },
];

export interface ThemeSettings {
  colorMode: ColorMode;
  contentLayout: ContentLayout;
  fontFamily: FontFamily;
  accentColor: AccentColorName;
  scale: Scale;
  radius: Radius;
  sidebarMode: SidebarMode;
}

export const defaultSettings: ThemeSettings = {
  colorMode: "dark",
  contentLayout: "full",
  fontFamily: "sans",
  accentColor: "emerald",
  scale: "lg",
  radius: "md",
  sidebarMode: "default",
};

export interface FontFamilyMap {
  id: FontFamily;
  value: string;
  label: string;
}

export const fontFamilyMaps: FontFamilyMap[] = [
  { id: "sans", value: "Inter, system-ui, sans-serif", label: "Sans" },
  { id: "mono", value: "JetBrains Mono, monospace", label: "Mono" },
  { id: "display", value: "Cal Sans, system-ui, sans-serif", label: "Display" },
  { id: "roboto", value: "Roboto, system-ui, sans-serif", label: "Roboto" },
  { id: "nunito", value: "Nunito, system-ui, sans-serif", label: "Nunito" },
  { id: "ubuntu", value: "Ubuntu, system-ui, sans-serif", label: "Ubuntu" },
]

export interface ScaleValue {
  id: Scale;
  value: string;
  label: string;
}

export const scaleValues: ScaleValue[] = [
  { id: "xs", value: "0.95", label: "XS" },
  { id: "sm", value: "0.9", label: "SM" },
  { id: "lg", value: "1", label: "LG" },
];

export interface RadiusValue {
  id: Radius;
  value: string;
  label: string;
}

export const radiusValues: RadiusValue[] = [
  { id: "none", value: "0px", label: "○" },
  { id: "sm", value: "0.25rem", label: "SM" },
  { id: "md", value: "0.5rem", label: "MD" },
  { id: "lg", value: "0.75rem", label: "LG" },
  { id: "xl", value: "1rem", label: "XL" },
];

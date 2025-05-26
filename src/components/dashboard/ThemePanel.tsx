
import React from 'react';
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useTheme, ColorMode, ContentLayout, FontFamily } from '@/contexts/ThemeContext';

interface ThemePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThemePanel: React.FC<ThemePanelProps> = ({ isOpen, onClose }) => {
  const { settings, updateSettings, resetToDefault } = useTheme();

  if (!isOpen) return null;

  const colorOptions = [
    { name: 'Emerald', value: '#10b981' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Purple', value: '#8b5cf6' },
    { name: 'Orange', value: '#f59e0b' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Pink', value: '#ec4899' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-end">
      <div className="w-80 h-full bg-background border-l border-border overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Theme preset:</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Theme Preset Selector */}
          <div className="mb-6">
            <div className="flex gap-2">
              <Button
                variant={settings.colorMode === 'light' ? 'default' : 'outline'}
                size="sm"
                onClick={() => updateSettings({ colorMode: 'light' as ColorMode })}
                className="flex-1"
              >
                Default
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                New York
              </Button>
            </div>
          </div>

          {/* Scale */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-3 block">Scale:</Label>
            <div className="flex gap-2">
              {[
                { label: '○', value: 'sm' },
                { label: 'XS', value: 'xs' },
                { label: 'LG', value: 'lg' }
              ].map((scale) => (
                <Button
                  key={scale.value}
                  variant="outline"
                  size="sm"
                  className="px-3"
                >
                  {scale.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Radius */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-3 block">Radius:</Label>
            <div className="flex gap-2">
              {[
                { label: '○', value: 'none' },
                { label: 'SM', value: 'sm' },
                { label: 'MD', value: 'md' },
                { label: 'LG', value: 'lg' },
                { label: 'XL', value: 'xl' }
              ].map((radius) => (
                <Button
                  key={radius.value}
                  variant={radius.value === 'md' ? 'default' : 'outline'}
                  size="sm"
                  className="px-3"
                >
                  {radius.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Color Mode */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-3 block">Color mode:</Label>
            <div className="flex gap-2">
              <Button
                variant={settings.colorMode === 'light' ? 'default' : 'outline'}
                size="sm"
                onClick={() => updateSettings({ colorMode: 'light' as ColorMode })}
                className="flex-1"
              >
                Light
              </Button>
              <Button
                variant={settings.colorMode === 'dark' ? 'default' : 'outline'}
                size="sm"
                onClick={() => updateSettings({ colorMode: 'dark' as ColorMode })}
                className="flex-1"
              >
                Dark
              </Button>
            </div>
          </div>

          {/* Content Layout */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-3 block">Content layout:</Label>
            <div className="flex gap-2">
              <Button
                variant={settings.contentLayout === 'full' ? 'default' : 'outline'}
                size="sm"
                onClick={() => updateSettings({ contentLayout: 'full' as ContentLayout })}
                className="flex-1"
              >
                Full
              </Button>
              <Button
                variant={settings.contentLayout === 'centered' ? 'default' : 'outline'}
                size="sm"
                onClick={() => updateSettings({ contentLayout: 'centered' as ContentLayout })}
                className="flex-1"
              >
                Centered
              </Button>
            </div>
          </div>

          {/* Font Family */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-3 block">Font:</Label>
            <div className="space-y-2">
              {[
                { label: 'Inter', value: 'sans' as FontFamily },
                { label: 'JetBrains Mono', value: 'mono' as FontFamily },
                { label: 'Cal Sans', value: 'display' as FontFamily }
              ].map((font) => (
                <Button
                  key={font.value}
                  variant={settings.fontFamily === font.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => updateSettings({ fontFamily: font.value })}
                  className="w-full justify-start"
                >
                  {font.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Color Palette */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-3 block">Colors:</Label>
            <div className="grid grid-cols-3 gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => updateSettings({ accentColor: color.value })}
                  className={`w-full h-10 rounded-lg border-2 transition-all ${
                    settings.accentColor === color.value 
                      ? 'border-foreground scale-105' 
                      : 'border-border hover:border-muted-foreground'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Button variant="outline" className="w-full" onClick={resetToDefault}>
              Reset to Default
            </Button>
            <Button className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>

          {/* Status Cards */}
          <div className="mt-6 space-y-3">
            {[
              { label: 'New Tickets', value: '40', color: 'bg-emerald-500' },
              { label: 'Open Tickets', value: '25', color: 'bg-orange-500' },
              { label: 'Response Time', value: '1 Day', color: 'bg-blue-500' }
            ].map((item) => (
              <Card key={item.label} className="p-3">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-semibold">{item.value}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemePanel;

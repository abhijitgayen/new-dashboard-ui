import React from 'react'
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import type { ColorMode } from '@/contexts/ThemeContext';

function ColorMode({ settings, updateSettings }) {
    return (
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
                    className="flex-1 text-xs"
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
                    className="flex-1 text-xs"
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
                    className="flex-1 text-xs"
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
    )
}

export default ColorMode

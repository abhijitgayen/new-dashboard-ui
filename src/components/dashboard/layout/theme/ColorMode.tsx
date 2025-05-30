import React from 'react'
import { ColorMode as colorMode } from '@/contexts/ThemeContext'
import { Label } from '../../../ui/label'
import { Button } from '../../../ui/button'

function ColorMode({
    settings,
    updateSettings,
}: {
    settings: { colorMode: "light" | "dark" | "dark-blue" },
    updateSettings: (newSettings: { colorMode: "light" | "dark" | "dark-blue" }) => void
}) {
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
                        updateSettings({ colorMode: "light" as colorMode })
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
                        updateSettings({ colorMode: "dark" as colorMode })
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
                        updateSettings({ colorMode: "dark-blue" as colorMode })
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
    )
}

export default ColorMode

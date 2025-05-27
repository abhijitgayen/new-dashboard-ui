import React from 'react'
import type { SidebarMode } from '@/contexts/ThemeContext'
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'

function SidebarMode({ settings, updateSettings }: {
    settings: { sidebarMode: SidebarMode },
    updateSettings: (newSettings: { sidebarMode: SidebarMode }) => void
}) {
    return (
        <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block accent-text">
                Sidebar mode:
            </Label>
            <div className="flex gap-2">
                <Button
                    variant={
                        settings.sidebarMode === "default" ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() =>
                        updateSettings({ sidebarMode: "default" as SidebarMode })
                    }
                    className="flex-1 hover-accent"
                    style={
                        {
                            backgroundColor:
                                settings.sidebarMode === "default"
                                    ? "var(--accent-color)"
                                    : undefined,
                            borderColor: "var(--accent-color)",
                        } as React.CSSProperties
                    }
                >
                    Default
                </Button>
                <Button
                    variant={
                        settings.sidebarMode === "icon" ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() =>
                        updateSettings({ sidebarMode: "icon" as SidebarMode })
                    }
                    className="flex-1 hover-accent"
                    style={
                        {
                            backgroundColor:
                                settings.sidebarMode === "icon"
                                    ? "var(--accent-color)"
                                    : undefined,
                            borderColor: "var(--accent-color)",
                        } as React.CSSProperties
                    }
                >
                    Icon
                </Button>
            </div>
        </div>
    )
}

export default SidebarMode

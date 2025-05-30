import React from 'react'
import type { FontFamily } from '@/contexts/ThemeContext'
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'

function FontFamily({ settings, updateSettings }: {
    settings: { fontFamily: FontFamily },
    updateSettings: (newSettings: { fontFamily: FontFamily }) => void
}) {
    return (
        <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block accent-text">
                Font:
            </Label>
            <div className="space-y-2">
                {[
                    { label: "Inter", value: "sans" as FontFamily },
                    { label: "JetBrains Mono", value: "mono" as FontFamily },
                    { label: "Cal Sans", value: "display" as FontFamily },
                ].map((font) => (
                    <Button
                        key={font.value}
                        variant={
                            settings.fontFamily === font.value ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => updateSettings({ fontFamily: font.value })}
                        className="w-full justify-start hover-accent"
                        style={
                            {
                                backgroundColor:
                                    settings.fontFamily === font.value
                                        ? "var(--accent-color)"
                                        : undefined,
                                borderColor: "var(--accent-color)",
                            } as React.CSSProperties
                        }
                    >
                        {font.label}
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default FontFamily

import React from 'react'
import { Radius } from '@/contexts/ThemeContext'
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'

function ThemeRadius({ settings, updateSettings }: {
    settings: { radius: Radius },
    updateSettings: (newSettings: { radius: Radius }) => void
}) {
    return (
        <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block accent-text">
                Radius:
            </Label>
            <div className="flex gap-2">
                {[
                    { label: "○", value: "none" as Radius },
                    { label: "SM", value: "sm" as Radius },
                    { label: "MD", value: "md" as Radius },
                    { label: "LG", value: "lg" as Radius },
                    { label: "XL", value: "xl" as Radius },
                ].map((radius) => (
                    <Button
                        key={radius.value}
                        variant={
                            settings.radius === radius.value ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => updateSettings({ radius: radius.value })}
                        className="px-3 hover-accent"
                        style={
                            {
                                backgroundColor:
                                    settings.radius === radius.value
                                        ? "var(--accent-color)"
                                        : undefined,
                                borderColor: "var(--accent-color)",
                            } as React.CSSProperties
                        }
                    >
                        {radius.label}
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default ThemeRadius

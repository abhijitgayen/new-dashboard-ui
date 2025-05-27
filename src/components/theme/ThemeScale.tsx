import React from 'react'
import { Scale } from '@/contexts/ThemeContext'
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function ThemeScale({ settings, updateSettings }: {
    settings: { scale: Scale },
    updateSettings: (newSettings: { scale: Scale }) => void
}) {
    return (
        <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block accent-text">
                Scale:
            </Label>
            <div className="flex gap-2">
                {[
                    { label: "SM", value: "sm" as Scale },
                    { label: "XS", value: "xs" as Scale },
                    { label: "LG", value: "lg" as Scale },
                ].map((scale) => (
                    <Button
                        key={scale.value}
                        variant={
                            settings.scale === scale.value ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => updateSettings({ scale: scale.value })}
                        className="px-3 hover-accent"
                        style={
                            {
                                backgroundColor:
                                    settings.scale === scale.value
                                        ? "var(--accent-color)"
                                        : undefined,
                                borderColor: "var(--accent-color)",
                            } as React.CSSProperties
                        }
                    >
                        {scale.label}
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default ThemeScale

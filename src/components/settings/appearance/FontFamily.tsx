import React from 'react'
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import type { FontFamily } from "@/contexts/ThemeContext";

function FontFamily({ settings, updateSettings }) {
    return (
        <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block accent-text">
                Font:
            </Label>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 items-center accent-text">
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
                        className="w-full justify-center"
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

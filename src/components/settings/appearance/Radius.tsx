import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import type { Radius } from "@/contexts/ThemeContext";

function Radius({ settings, updateSettings }) {
    return (
        <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block accent-text">
                Radius:
            </Label>
            <div className="grid md:grid-cols-5 grid-cols-3 gap-2">
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
                        className="px-3"
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

export default Radius

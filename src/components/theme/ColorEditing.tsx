import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'

function ColorEditing({ colorOptions, settings, updateSettings }: {
    colorOptions: { name: string, value: string }[],
    settings: { accentColor: string },
    updateSettings: (newSettings: { accentColor: string }) => void
}) {
    return (
        <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block accent-text">
                Colors:
            </Label>
            <div className="grid grid-cols-3 gap-2">
                {colorOptions.map((color) => (
                    <button
                        key={color.value}
                        onClick={() => updateSettings({ accentColor: color.value })}
                        className={`w-full h-10 rounded-lg border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg ${settings.accentColor === color.value
                            ? "border-foreground scale-105 accent-glow"
                            : "border-border/50 hover:border-muted-foreground"
                            }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default ColorEditing

import { Label } from "@/components/ui/label";

const colorOptions = [
    { name: "Emerald", value: "#10b981" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Purple", value: "#8b5cf6" },
    { name: "Orange", value: "#f59e0b" },
    { name: "Red", value: "#ef4444" },
    { name: "Pink", value: "#ec4899" },
];

function ColorPalette({ settings, updateSettings }) {
    return (
        <div className="mb-6 mt-6" >
            <Label className="text-sm font-medium mb-2 block">
                Colors
            </Label>
            <div className="grid grid-cols-4 gap-2">
                {colorOptions.map((color) => (
                    <button
                        key={color.value}
                        onClick={() => updateSettings({ accentColor: color.value })}
                        className={`w-full h-16 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${settings.accentColor === color.value
                            ? "border-foreground accent-glow"
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

export default ColorPalette

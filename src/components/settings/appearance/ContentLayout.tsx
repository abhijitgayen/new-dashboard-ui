import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import type { ContentLayout } from "@/contexts/ThemeContext";

function ContentLayout({ settings, updateSettings }) {
    return (
        <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block accent-text">
                Content layout:
            </Label>
            <div className="flex gap-2">
                <Button
                    variant={
                        settings.contentLayout === "full" ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() =>
                        updateSettings({ contentLayout: "full" as ContentLayout })
                    }
                    className="flex-1 hover-accent"
                    style={
                        {
                            backgroundColor:
                                settings.contentLayout === "full"
                                    ? "var(--accent-color)"
                                    : undefined,
                            borderColor: "var(--accent-color)",
                        } as React.CSSProperties
                    }
                >
                    Full
                </Button>
                <Button
                    variant={
                        settings.contentLayout === "centered" ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() =>
                        updateSettings({ contentLayout: "centered" as ContentLayout })
                    }
                    className="flex-1 hover-accent"
                    style={
                        {
                            backgroundColor:
                                settings.contentLayout === "centered"
                                    ? "var(--accent-color)"
                                    : undefined,
                            borderColor: "var(--accent-color)",
                        } as React.CSSProperties
                    }
                >
                    Centered
                </Button>
            </div>
        </div>
    )
}

export default ContentLayout

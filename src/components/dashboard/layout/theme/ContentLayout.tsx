import React from 'react'
import { ContentLayout as Contentlayout } from '@/contexts/ThemeContext'
import { Label } from '../../../ui/label'
import { Button } from '../../../ui/button'

function ContentLayout({
    settings,
    updateSettings,
}: {
    settings: { contentLayout: Contentlayout },
    updateSettings: (newSettings: { contentLayout: Contentlayout }) => void
}) {
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
                        updateSettings({ contentLayout: "full" as Contentlayout })
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
                        updateSettings({ contentLayout: "centered" as Contentlayout })
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

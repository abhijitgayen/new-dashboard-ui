import { Button } from '@/components/ui/button';
import { Crown, Palette } from 'lucide-react';
import React from 'react'

function SidebarFooter({
    isIconMode,
    onThemeToggle,
}: {
    isIconMode: boolean;
    onThemeToggle: () => void;
}) {
    return (
        <div className="p-4 border-t border-border">
            {!isIconMode && (
                <div className="bg-muted rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Crown className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">Upgrade to Pro</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                        Get pro now to own all dashboards, templates and components for
                        life.
                    </p>
                    <Button size="sm" className="w-full">
                        Get Shadcn UI Kit
                    </Button>
                </div>
            )}

            <Button
                variant="outline"
                size="sm"
                onClick={onThemeToggle}
                className="w-full"
                title={isIconMode ? "Theme Settings" : undefined}
            >
                <Palette className="w-4 h-4" />
                {!isIconMode && "Theme Settings"}
            </Button>
        </div>
    )
}

export default SidebarFooter

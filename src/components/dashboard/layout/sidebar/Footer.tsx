import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Crown, Palette } from "lucide-react";
import ThemePanel from "../../ThemePanel";

function Footer({ isIconMode, onThemeToggle }: { isIconMode: boolean, onThemeToggle: () => void }) {
    return (
        <div>
            <SidebarGroup className="bg-muted rounded-lg p-4 mb-4">
                {isIconMode ? <Crown className="w-4 h-4 text-yellow-500 -ml-2" /> : ""}
                {!isIconMode && (
                    <>
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
                    </>
                )}
            </SidebarGroup>

            <SidebarMenu>
                <SidebarMenuItem>
                    <Sheet>
                        <SheetTrigger asChild>
                            <SidebarMenuButton className="">
                                <Palette className="w-4 h-4" />
                                {!isIconMode && "Theme Settings"}
                            </SidebarMenuButton>
                        </SheetTrigger>
                        <ThemePanel />
                    </Sheet>
                </SidebarMenuItem>
            </SidebarMenu>
        </div>
    )
}

export default Footer

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Crown, Palette } from "lucide-react";
import ThemePanel from "../../ThemePanel";
import UpgradeCard from "@/components/UpgrateCard";

function Footer({ isIconMode, onThemeToggle }: { isIconMode: boolean, onThemeToggle: () => void }) {
    return (
        <div>
            <UpgradeCard />

            <SidebarMenu>
                <SidebarMenuItem>
                    <Sheet>
                        <SheetTrigger asChild>
                            <SidebarMenuButton className="h-10" variant="outline">
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

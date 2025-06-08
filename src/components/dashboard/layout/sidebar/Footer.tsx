import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { Crown, Palette } from "lucide-react";
import ThemePanel from "../../ThemePanel";
import UpgradeCard from "@/components/UpgrateCard";

function Footer({ isIconMode }: { isIconMode: boolean }) {
    const { state } = useSidebar()
    const isCollapsed = state === "collapsed"
    return (
        <div className={`${!isCollapsed ? "px-2" : ""}`}>
            {!isIconMode && (
                <UpgradeCard isIconMode={isIconMode} className={`${!isCollapsed ? "animate-accordion-down duration-500" : ""}`} />
            )}
            {/* <SidebarMenu className={`w-full ${isIconMode ? "items-center" : ""}`}>
                <SidebarMenuItem > */}
            <Sheet>
                <SheetTrigger asChild>
                    <SidebarMenuButton className={`h-10 w-full items-center justify-center ${isIconMode ? "items-center justify-center h-8 w-8" : ""}`} variant="outline">
                        <Palette className={`${isIconMode ? "ml-2" : ""}`} />
                        <div className={`${isCollapsed ? "hidden" : ""}`}>
                            {!isIconMode && "Theme Settings"}
                        </div>
                    </SidebarMenuButton>
                </SheetTrigger>
                <ThemePanel />
            </Sheet>
            {/* </SidebarMenuItem>
            </SidebarMenu> */}
        </div>
    )
}

export default Footer

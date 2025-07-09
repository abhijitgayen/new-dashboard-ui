import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { Crown, Palette } from "lucide-react";
import ThemePanel from "../../ThemePanel";
import UpgradeCard from "@/components/layout/UpgrateCard";

function Footer({ isIconMode }: { isIconMode: boolean }) {
    const { state } = useSidebar()
    const isCollapsed = state === "collapsed"
    return (
        <div className={`${!isCollapsed ? "px-2" : ""}`}>
            {/* {!isIconMode && (
                <UpgradeCard isIconMode={isIconMode} className={`${!isCollapsed ? "animate-accordion-down duration-500" : ""}`} />
            )} */}
            {/* <SidebarMenu className={`w-full ${isIconMode ? "items-center" : ""}`}>
                <SidebarMenuItem > */}
            <Sheet>
                <SheetTrigger asChild>
                    <SidebarMenuButton className={`h-10 w-full flex items-center justify-center ${isCollapsed ? "" : ""} ${isIconMode ? "items-center justify-center h-8 w-8 ml-2" : ""}`} variant={(isCollapsed || isIconMode) ? "default" : "outline"}>
                        <Palette className={`${isIconMode ? "ml-2" : ""} ${isCollapsed ? "ml-2" : ""} `} />
                        <div className={`truncate`}>
                            {!isIconMode && <div className="translate-middle duration-1000">Theme Settings</div>}
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

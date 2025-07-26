import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { Palette } from "lucide-react";

function Footer({ isIconMode }: { isIconMode: boolean }) {
    const { state } = useSidebar()
    const isCollapsed = state === "collapsed"
    return (
        <div className={`${!isCollapsed ? "px-2" : ""}`}>
            <Sheet>
                <SheetTrigger asChild>
                    <SidebarMenuButton className={`h-10 w-full flex items-center justify-center ${isCollapsed ? "" : ""} ${isIconMode ? "items-center justify-center h-8 w-8 ml-2" : ""}`} variant={(isCollapsed || isIconMode) ? "default" : "outline"}>
                        <Palette className={`${isIconMode ? "ml-2" : ""} ${isCollapsed ? "ml-2" : ""} `} />
                        <div className={`truncate`}>
                            {!isIconMode && <div className="translate-middle duration-1000">Theme Settings</div>}
                        </div>
                    </SidebarMenuButton>
                </SheetTrigger>
            </Sheet>
        </div>
    )
}

export default Footer

import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { SETTING_PAGE } from "@/config/app";

function Footer({ isIconMode }: { isIconMode: boolean }) {
    const { state } = useSidebar()
    const isCollapsed = state === "collapsed"
    return (
        <Link to={SETTING_PAGE} className="flex items-center justify-center">
            <SidebarMenuButton className={` ${!isIconMode ? 'w-full' : 'w-8 h-8'}  flex items-center justify-center`} variant={(isCollapsed || isIconMode) ? "default" : "outline"}>
                <Palette className={`w-4 h-4 ${isIconMode ? "" : "ml-1.5"}`} />
                {!isIconMode && (
                    <div className={`truncate`}>
                        <div className="translate-middle duration-1000">Theme Settings</div>
                    </div>
                )}
            </SidebarMenuButton>
        </Link>
    )
}

export default Footer

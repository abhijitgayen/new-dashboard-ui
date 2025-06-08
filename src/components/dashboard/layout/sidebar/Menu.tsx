import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import type { ItenInterface } from "../../AppSidebar"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

function Menu({ isIconMode, menuItems, appItems }: { isIconMode: boolean, menuItems: ItenInterface[], appItems: ItenInterface[] }) {
    const { state } = useSidebar()
    const isCollapsed = state === "collapsed"

    return (
        <div className={`overflow-x-hidden mb-3 py-2 ${isIconMode || isCollapsed ? "" : "px-2"}`}>
            {/* Dashboards Section */}
            <SidebarGroup className={`mb-4 ${isIconMode ? "mt-2" : ""}`}>
                {!isIconMode && (
                    <SidebarGroupLabel className="text-xs mb-1 font-medium text-muted-foreground uppercase tracking-wider">Dashboards</SidebarGroupLabel>
                )}
                <SidebarMenu>
                    {menuItems.map((item) => (
                        <SidebarMenuItem
                            className={`flex items-center ${isIconMode ? "justify-center mx-2" : "justify-between"} rounded-lg cursor-pointer transition-colors ${item.active
                                ? "bg-accent text-accent-foreground"
                                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                }`}
                            key={item.label}
                            title={isIconMode ? item.label : undefined}>
                            <SidebarMenuButton asChild className="h-full">
                                <Link to={item.url} className="">
                                    <item.icon className="w-4 h-4" />
                                    {!isIconMode && (
                                        <span className="text-sm font-medium w-full ml-1">{item.label}</span>
                                    )}
                                </Link>
                            </SidebarMenuButton>
                            {!isIconMode && item.badge && (
                                <SidebarMenuBadge>
                                    <Badge variant={item.badge === "New" ? "default" : "secondary"} className="text-xs px-2 py-1 bg-orange-500 text-white rounded-full">
                                        {item.badge}
                                    </Badge>
                                </SidebarMenuBadge>
                            )}
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroup>

            {/* Apps Section */}
            <SidebarGroup>
                {!isIconMode && (
                    <SidebarGroupLabel className="uppercase text-slate-400">Apps</SidebarGroupLabel>
                )}
                <SidebarMenu>
                    {appItems.map((item) => (
                        <SidebarMenuItem
                            className={`flex items-center ${isIconMode ? "justify-center mx-2" : "justify-between"} rounded-lg cursor-pointer transition-colors text-muted-foreground hover:text-foreground hover:bg-accent/50`}
                            title={isIconMode ? item.label : undefined}
                            key={item.label}>
                            <SidebarMenuButton asChild className="h-full">
                                <Link to={item.url}>
                                    <item.icon className="w-4 h-4" />
                                    {!isIconMode && (
                                        <span className="text-sm font-medium w-full ml-1">{item.label}</span>
                                    )}
                                </Link>
                            </SidebarMenuButton>
                            {!isIconMode && item.badge && (
                                <SidebarMenuBadge>
                                    <Badge
                                        variant={item.badge === "New" ? "default" : item.badge === "Coming" ? "secondary" : "destructive"}
                                        className="text-xs"
                                    >
                                        {item.badge}
                                    </Badge>
                                </SidebarMenuBadge>
                            )}
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroup>
        </div>
    )
}

export default Menu

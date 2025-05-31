import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import type { ItenInterface } from "../../AppSidebar"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

function Menu({ isIconMode, menuItems, appItems }: { isIconMode: boolean, menuItems: ItenInterface[], appItems: ItenInterface[] }) {
    return (
        <div className="overflow-hidden">
            {/* Dashboards Section */}
            <SidebarGroup>
                {!isIconMode && (
                    <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
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
                            <SidebarMenuButton asChild>
                                <a href={item.url}>
                                    <item.icon />
                                    {!isIconMode && (
                                        <span className="text-sm font-medium">{item.label}</span>
                                    )}
                                </a>
                            </SidebarMenuButton>
                            {!isIconMode && item.badge && (
                                <SidebarMenuBadge>
                                    <Badge variant={item.badge === "New" ? "default" : "secondary"} className="text-xs">
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
                    <SidebarGroupLabel>Apps</SidebarGroupLabel>
                )}
                <SidebarMenu>
                    {appItems.map((item) => (
                        <SidebarMenuItem
                            className={`flex items-center ${isIconMode ? "justify-center mx-2" : "justify-between"} rounded-lg cursor-pointer transition-colors text-muted-foreground hover:text-foreground hover:bg-accent/50`}
                            title={isIconMode ? item.label : undefined}
                            key={item.label}>
                            <SidebarMenuButton asChild>
                                <a href={item.url}>
                                    <item.icon />
                                    {!isIconMode && (
                                        <span className="text-sm font-medium">{item.label}</span>
                                    )}
                                </a>
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

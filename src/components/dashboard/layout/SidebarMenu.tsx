import React from 'react'

interface SidebarMenuItem {
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    active?: boolean;
    badge?: string;
}

function SidebarMenu({
    isIconMode,
    menuItems,
    appItems,
}: {
    isIconMode: boolean;
    menuItems: SidebarMenuItem[];
    appItems: SidebarMenuItem[];
}) {
    return (
        <div className="flex-1 overflow-y-auto px-4 py-6">
            {/* Dashboards Section */}
            <div className="mb-8">
                {!isIconMode && (
                    <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-2">
                        Dashboards
                    </h3>
                )}
                <div className="space-y-1">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center ${isIconMode ? "justify-center" : "justify-between"} px-3 py-2 rounded-lg cursor-pointer transition-colors ${item.active
                                ? "bg-accent text-accent-foreground"
                                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                }`}
                            title={isIconMode ? item.label : undefined}
                        >
                            <div
                                className={`flex items-center ${isIconMode ? "" : "gap-3"}`}
                            >
                                <item.icon className="w-4 h-4" />
                                {!isIconMode && (
                                    <span className="text-sm font-medium">{item.label}</span>
                                )}
                            </div>
                            {!isIconMode && item.badge && (
                                <span className="text-xs px-2 py-1 bg-orange-500 text-white rounded-full">
                                    {item.badge}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Apps Section */}
            <div className="mb-8">
                {!isIconMode && (
                    <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-2">
                        Apps
                    </h3>
                )}
                <div className="space-y-1">
                    {appItems.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center ${isIconMode ? "justify-center" : "justify-between"} px-3 py-2 rounded-lg cursor-pointer transition-colors text-muted-foreground hover:text-foreground hover:bg-accent/50`}
                            title={isIconMode ? item.label : undefined}
                        >
                            <div
                                className={`flex items-center ${isIconMode ? "" : "gap-3"}`}
                            >
                                <item.icon className="w-4 h-4" />
                                {!isIconMode && (
                                    <span className="text-sm font-medium">{item.label}</span>
                                )}
                            </div>
                            {!isIconMode && item.badge && (
                                <span
                                    className={`text-xs px-2 py-1 rounded-full ${item.badge === "New"
                                        ? "bg-emerald-500 text-white"
                                        : item.badge === "Coming"
                                            ? "bg-muted text-muted-foreground"
                                            : "bg-blue-500 text-white"
                                        }`}
                                >
                                    {item.badge}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SidebarMenu

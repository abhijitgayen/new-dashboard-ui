import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '@/components/ui/sidebar'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function SidebarMenuCollapsedDropdown({ item }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex items-center justify-center w-full h-10">
                    <item.icon className="w-5 h-5" />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="start" className="min-w-[180px]">
                <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">{item.label}</div>
                {item.items?.map((subItem) => (
                    <DropdownMenuItem asChild key={subItem.label}>
                        <Link to={subItem.url}>
                            <subItem.icon className="w-4 h-4 mr-2" />
                            {subItem.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function OthersSettings({ isCollapsed, isIconMode, otherItems }) {
    return (
        <Collapsible asChild>
            <SidebarGroup>
                {(isCollapsed || !isIconMode) ? (
                    <SidebarGroupLabel className="uppercase text-slate-400">Other</SidebarGroupLabel>
                ) : null}
                {otherItems?.map((group) => (
                    <SidebarMenu key={group.label}>
                        {group.items.map((item) => (
                            (isCollapsed || isIconMode) ? (
                                <SidebarMenuCollapsedDropdown key={item.label} item={item} />
                            ) : (
                                <SidebarMenuItem
                                    className={`${isIconMode ? "justify-center mx-2" : "justify-between"} rounded-lg cursor-pointer transition-colors text-muted-foreground hover:text-foreground hover:bg-accent/50`}
                                    title={isIconMode ? item.label : undefined}
                                    key={item.label}
                                >
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton asChild className="h-full">
                                            <Link to={item.url}>
                                                <item.icon className="w-4 h-4" />
                                                {!isIconMode && (
                                                    <span className="text-sm font-medium w-full ml-1">{item.label}</span>
                                                )}
                                                <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                                            </Link>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className='CollapsibleContent'>
                                        <SidebarMenuSub>
                                            {item.items?.map((subItem) => (
                                                <SidebarMenuSubItem key={subItem.label}>
                                                    <SidebarMenuSubButton asChild className={`flex items-center ${isIconMode ? "justify-center mx-2" : "justify-between"} rounded-lg cursor-pointer transition-colors text-muted-foreground hover:text-foreground hover:bg-accent/50`}>
                                                        <Link to={subItem.url}>
                                                            <subItem.icon className="w-4 h-4" />
                                                            {!isIconMode && (
                                                                <span className="text-sm font-medium w-full ml-1">{subItem.label}</span>
                                                            )}
                                                        </Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            )
                        ))}
                    </SidebarMenu>
                ))}
            </SidebarGroup>
        </Collapsible>
    )
}

export default OthersSettings



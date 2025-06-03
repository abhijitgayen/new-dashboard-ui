import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'
import { BarChart3 } from 'lucide-react'

function Header({ isIconMode }: { isIconMode: boolean }) {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <SidebarMenu className={`h-[55px] flex justify-center ${!isCollapsed ? "items-center" : ""}`}>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className={`bg-transparent hover:bg-transparent cursor-default ${!isCollapsed ? '-mt-4' : '-mt-4'}`}>
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/60 text-sidebar-primary-foreground">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate text-foreground font-semibold">Shadcn UI Kit</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export default Header

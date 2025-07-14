import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'
import { BarChart3, Check, ChevronsUpDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useVersion, Version } from "@/hooks/useVersion"

function Header({
  versions,
  defaultVersion,
  isIconMode
}: {
  versions: string[]
  defaultVersion: string
  isIconMode: boolean
}) {
  const [selectedVersion, setSelectedVersion] = useState(defaultVersion)
  const { state, isMobile } = useSidebar()
  const isCollapsed = state === "collapsed"
  const { setVersion } = useVersion()



  useEffect(() => {
    setVersion(selectedVersion as unknown as Version)
  }, [selectedVersion, setVersion])


  return (
    <SidebarMenu className={`h-[55px] justify-center ${!isCollapsed ? "items-center" : ""}`}>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg" className={`bg-transparent gap-6 hover:bg-transparent  ${isIconMode ? "hover:bg-transparent" : ""} cursor-default ${!isCollapsed ? '-mt-4' : '-mt-4'}`}>
              <div className='flex items-center justify-center gap-2'>
                <div className={`flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/60 text-sidebar-primary-foreground ${isIconMode ? "" : ""}`}>
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div className="grid flex-1 gap-0.5 text-left text-sm leading-tight">
                  <span className="truncate text-foreground font-semibold">Shadcn UI Kit</span>
                  <span className="truncate text-xs">{selectedVersion}</span>
                </div>
              </div>
              <ChevronsUpDown className={`ml-auto ${isIconMode ? "hidden" : "block"}`} />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-full mt-1"
            align="center"
            side={(isMobile || isIconMode) ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Version
            </DropdownMenuLabel>
            {versions.map((version) => (
              <DropdownMenuItem
                key={version}
                onSelect={() => setSelectedVersion(version)}
              >
                {version}{" "}
                {version === selectedVersion && <Check className="ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export default Header

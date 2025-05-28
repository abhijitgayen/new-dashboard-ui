import { BarChart3 } from 'lucide-react'

function SidebarHeader({ isIconMode }: { isIconMode: boolean }) {
  return (
    <div className="h-14 border-b border-border flex justify-center -mt-2">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-white" />
        </div>
        {!isIconMode && (
          <span className="font-semibold text-foreground">Shadcn UI Kit</span>
        )}
      </div>
    </div>
  )
}

export default SidebarHeader

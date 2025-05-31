import { Button } from "@/components/ui/button";
import { Crown, Palette } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import ThemePanel from "../../ThemePanel";
import { ScrollArea } from "@/components/ui/scroll-area"

function SidebarFooter({
  isIconMode,
}: {
  isIconMode: boolean;
}) {
  return (
    <div className="p-3">
      {!isIconMode && (
        <div className="bg-muted rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Crown className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium">Upgrade to Pro</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Get pro now to own all dashboards, templates and components for
            life.
          </p>
          <Button size="sm" className="w-full">
            Get Shadcn UI Kit
          </Button>
        </div>
      )}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className={`w-full ${isIconMode ? "justify-center" : "justify-start"} gap-2`}>
            <Palette className="w-4 h-4" />
            {!isIconMode && "Theme Settings"}
          </Button>
        </SheetTrigger>
        <SheetContent>
          <ScrollArea className="h-full w-full">
            <div className="pl-2 pr-4 pt-2">
              <ThemePanel />
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div >
  );
}

export default SidebarFooter;

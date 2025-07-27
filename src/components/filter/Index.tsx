import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { PanelsTopLeft } from 'lucide-react'
import Date from "./Date"
import CampingTrigar from "./CampingTrigar"
import CampingChannel from "./CampingChannel"

function GraphFilter() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" className="text-muted-foreground">
                    <PanelsTopLeft  className="w-4 h-4"/>
                </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto w-full max-h-screen bg-background border-l border-border/50 glass-effect">
                <SheetHeader className="mb-4 border-b">
                    <SheetTitle className="uppercase mb-2">quick filters</SheetTitle>
                </SheetHeader>
                <Date />
                <CampingTrigar />
                <CampingChannel />
            </SheetContent>
        </Sheet>
    )
}

export default GraphFilter





import React from "react"
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

function Index() {

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost">
                    <PanelsTopLeft />
                </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto max-h-screen p-6 bg-background border-l border-border/50 glass-effect">
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

export default Index





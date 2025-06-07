import React from "react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronDown, PanelsTopLeft } from 'lucide-react'
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "./ui/input"

function Filter() {
    const [date, setDate] = React.useState<Date>()
    const [open, isOpen] = React.useState<boolean>(true)

    const handleOnClick = () => {
        isOpen(prev => !prev);
    };


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
                <div className="w-80 h-auto p-3 border ml-1.5">
                    <div
                        onClick={() => handleOnClick()}
                        className="w-full flex justify-between items-center cursor-pointer">
                        <h2>Date</h2>
                        <ChevronDown className={`${open ? "" : "rotate-180"}`} />
                    </div>
                    <div className={`${open ? "block mt-3" : "hidden"}`}>
                        <Input />
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full justify-start text-left font-normal mt-2",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default Filter





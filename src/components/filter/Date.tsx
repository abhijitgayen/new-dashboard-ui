import React from 'react'
import { ChevronDown, CalendarIcon } from 'lucide-react'
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"

function Date() {
    const [date, setDate] = React.useState<Date>()
    const [open, isOpen] = React.useState<boolean>(true)

    const handleOnClick = () => {
        isOpen(prev => !prev);
    };
    return (
        <div className="w-80 h-auto p-3 border ml-1.5 mb-4">
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
    )
}

export default Date

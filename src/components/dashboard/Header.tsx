import { Button } from "@/components/ui/button";
import { Bell, LucideProps, MessagesSquare, Share, TriangleAlert, User, UserPlus, Wrench } from "lucide-react";
import GraphFilter from "../filter/Index";

interface HeaderContent {
    icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    notifiction?: string,
    component?: React.ReactNode
}

function NavHeader() {
    const headerContent: HeaderContent[] = [
        {
            icon: UserPlus
        },
        {
            icon: Bell,
            notifiction: ""
        },
        {
            icon: MessagesSquare,
            notifiction: ""
        },
        {
            icon: Share
        },
        {
            icon: TriangleAlert,
            notifiction: ""
        },
        {
            icon: Wrench,
        },
        {
            icon: User
        }
    ]

    return (
        <header className="h-14 border-b border-border flex items-center justify-between px-3.5 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-color/5 to-transparent opacity-50"></div>
            <div></div>
            <div className="flex items-center gap-2 relative z-10">
                {
                    headerContent.map((item, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            size="icon"
                            className="relative hover-accent text-muted-foreground"
                        >
                            {item.icon ? <item.icon className="w-4 h-4" /> : item.component}
                            {item.notifiction ? <span className="absolute -top-1 -right-1 w-3 h-3 accent-bg rounded-full text-xs accent-pulse">{item.notifiction}</span> : ""}
                        </Button>
                    ))
                }
                <GraphFilter />
            </div>
        </header>
    )
}

export default NavHeader

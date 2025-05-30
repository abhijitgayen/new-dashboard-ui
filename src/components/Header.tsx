import { Button } from "@/components/ui/button";
import { Bell, Settings, User } from "lucide-react";

function Header() {

    return (
        <>
            <header className="h-14 glass-effect border-b border-border/50 flex items-center justify-between px-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-color/5 to-transparent opacity-50"></div>
                <div></div>
                <div className="flex items-center gap-2 relative z-10">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative hover-accent"
                    >
                        <Bell className="w-4 h-4" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 accent-bg rounded-full text-xs accent-pulse"></span>
                    </Button>
                    <Button variant="ghost" size="icon" className="hover-accent">
                        <Settings className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover-accent">
                        <User className="w-4 h-4" />
                    </Button>
                </div>
            </header>
        </>
    )
}

export default Header

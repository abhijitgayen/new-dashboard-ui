import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, Bell, Settings, User } from "lucide-react";

function Header() {
    return (
        <>
            <header className="h-14 glass-effect border-b border-border/50 flex items-center justify-between px-6 relative">
                {/* Accent gradient overlay */}
                {/* <SidebarTrigger className="-ml-1 md:hidden absolute " onClick={() => console.log("click")} /> */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-color/5 to-transparent opacity-50"></div>
                <div></div>
                {/* <div className="flex items-center flex-1 max-w-md relative z-10">
                <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 accent-text" />
                <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 glass-effect border modern-input rounded-lg focus:outline-none focus:ring-2 text-sm transition-all duration-300"
                style={
                    {
                        "--tw-ring-color": "var(--accent-color)",
                        borderColor: "var(--accent-color)",
                        } as React.CSSProperties
                        }
                        />
                        <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground bg-muted/80 px-1.5 py-0.5 rounded border accent-border">
                        ⌘K
                        </kbd>
                        </div>
                        </div> */}

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

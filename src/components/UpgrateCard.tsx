import { Crown } from "lucide-react"
import { Button } from "./ui/button"
import { useSidebar } from "./ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

function UpgradeCard({ isIconMode, className }: { isIconMode?: boolean, className?: string }) {
    const { state } = useSidebar()
    const isCollapsed = state === "collapsed"

    if (isCollapsed) {
        return (
            <div className="flex justify-center p-2">
                <Button size="icon" className="h-auto w-auto p-2 bg-slate-900 hover:bg-slate-800 text-white" title="Upgrade to Pro">
                    <Crown className="h-4 w-4 text-yellow-500" />
                </Button>
            </div>
        )
    } if (isIconMode) {
        return (
            <div className="flex justify-center p-2">
                <Button size="icon" className="h-auto w-auto p-2 bg-slate-900 hover:bg-slate-800 text-white" title="Upgrade to Pro">
                    <Crown className="h-4 w-4 text-yellow-500" />
                </Button>
            </div>
        )
    }

    return (
        <Card className={`bg-muted border text-white translate-middle duration-1000 mb-2 w-full max-w-sm shadow-lg hover:shadow-xl ${className}`}
        >
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                    <Crown className="h-4 w-4 text-yellow-500" />
                    Upgrade to Pro
                </CardTitle>
                <CardDescription className="text-slate-400 text-xs">
                    Get pro now to own all dashboards, templates and components for life.
                </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" size="sm">
                    Get Shadcn UI Kit
                </Button>
            </CardContent>
        </Card>
    )
}

export default UpgradeCard
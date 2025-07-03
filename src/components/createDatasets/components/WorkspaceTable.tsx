import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import More from "./More"
import ConnectDataUpload from "./connect-data-upload"
import { Suspense } from "react"


export type Workspace = { id: string, name: string, uploadeFile: boolean }

function WorkspaceTable({ workspaces, refreshWorkspaces }: { workspaces: Workspace[], refreshWorkspaces: () => void }) {
    const connectFile = (id: string) => {
        const workspaces = JSON.parse(localStorage.getItem("workspaces") || "[]")
        const updated = workspaces.map((ws: Workspace) =>
            ws.id === id ? { ...ws, uploadeFile: true } : ws
        )
        localStorage.setItem("workspaces", JSON.stringify(updated))
        refreshWorkspaces()
    }

    const handleDelite = (id: string) => {
        const workspaces = JSON.parse(localStorage.getItem("workspaces") || "[]")
        const updated = workspaces.filter((ws: Workspace) => ws.id !== id)
        localStorage.setItem("workspaces", JSON.stringify(updated))
        refreshWorkspaces()
    }
    return (
        <Suspense>
            <div className="w-full overflow-x-auto rounded-lg border bg-white dark:bg-slate-900">
                <Table className="w-full">
                    <TableCaption>
                        {workspaces.length === 0 ? <div className="h-full w-full text-center py-4">Create A New Workspace</div> : ""}
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            workspaces?.map((item, index) => (
                                <TableRow key={index} className="h-2">
                                    <TableCell className="font-medium">{item.name}</TableCell>
                                    <TableCell>
                                        <span className={`rounded text-xs p-0.5 ${item.uploadeFile ? "bg-primary text-primary-foreground" : "bg-destructive text-destructive-foreground"}`}>
                                            {item.uploadeFile ? "Working" : "Pending"}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-right flex items-center justify-end gap-3 relative">
                                        <div>
                                            {
                                                item.uploadeFile ? "" : <ConnectDataUpload connectFile={() => connectFile(item.id)} workspaceId={item.id} />
                                            }
                                        </div>
                                        <More handleDelite={() => handleDelite(item.id)} />
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </Suspense>
    )
}

export default WorkspaceTable
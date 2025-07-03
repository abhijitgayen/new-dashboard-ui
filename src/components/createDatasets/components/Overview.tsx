import { useState, useEffect } from "react"
import CreateWorkspace from "./CreateWorkspace"
import { Input } from "../..//ui/input"
import WorkspaceTable from "./WorkspaceTable"

const DUMMY_WORKSPACES = [
    { id: "1", name: "Marketing Data", uploadeFile: true },
    { id: "2", name: "Sales Reports", uploadeFile: false },
    { id: "4", name: "Customer Insights", uploadeFile: true },
    { id: "3", name: "Product Feedback", uploadeFile: false },
    { id: "5", name: "Financial Analysis", uploadeFile: true },
    { id: "6", name: "HR Records", uploadeFile: false },
]

function Overview() {
    const [workspaces, setWorkspaces] = useState<{ id: string, name: string, uploadeFile: boolean }[]>([])

    useEffect(() => {
        // Load from localStorage or use dummy data if empty
        const data = JSON.parse(localStorage.getItem("workspaces") || "[]")
        if (data.length === 0) {
            setWorkspaces(DUMMY_WORKSPACES)
            localStorage.setItem("workspaces", JSON.stringify(DUMMY_WORKSPACES))
        } else {
            setWorkspaces(data)
        }
    }, [])

    const refreshWorkspaces = () => {
        const data = JSON.parse(localStorage.getItem("workspaces") || "[]")
        setWorkspaces(data)
    }

    return (
        <div className='h-full w-full'>
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col md:flex-row items-center gap-3 w-full max-w-4xl">
                    <label className="whitespace-nowrap">Workspaces</label>
                    <div className="hidden md:block h-[1.1px] flex-1 bg-slate-400"></div>
                    <Input type="text" placeholder="Search workspaces" className="w-full md:w-72" />
                    <div className="w-full md:w-auto">
                        <CreateWorkspace onCreate={refreshWorkspaces} />
                    </div>
                </div>
                <div className="w-full max-w-4xl">
                    <div className="flex flex-row justify-between w-full">
                        <WorkspaceTable workspaces={workspaces} refreshWorkspaces={refreshWorkspaces} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview
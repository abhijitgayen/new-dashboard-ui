import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { v4 as uuid } from 'uuid';
import { toast } from "@/hooks/use-toast"


function CreateWorkspace({ onCreate }: { onCreate: () => void }) {
    const [name, setName] = useState("")

    const handleCreate = () => {
        if (name) {
            const existing = JSON.parse(localStorage.getItem("workspaces") || "[]")
            const updated = [...existing, { id: uuid(), name, uploadeFile: false }]
            localStorage.setItem("workspaces", JSON.stringify(updated))
            onCreate() // Notify parent to refresh
        }
        setName("")
        toast({
            title: "Workspace Created Successfully",
            description: "Your new workspace has been created.",
        })
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button><Plus />Create New Workspace</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Create New Workspace</AlertDialogTitle>
                    <AlertDialogDescription>
                        <Input
                            value={name}
                            required
                            onChange={e => setName(e.target.value)}
                            placeholder="Workspace name" />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleCreate}>Create</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default CreateWorkspace
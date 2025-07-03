import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { X, File, Check } from "lucide-react"

export interface UploadedFile {
    id: string
    name: string
    size: number
    type: string
}

interface ConnectDataUploadProps {
    workspaceId: string,
    connectFile: () => void,
}

export default function ConnectDataUpload({ workspaceId, connectFile }: ConnectDataUploadProps) {
    const [files, setFiles] = useState<UploadedFile[]>([])
    const [isUploading, setIsUploading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return "0 Bytes"
        const k = 1024
        const sizes = ["Bytes", "KB", "MB", "GB"]
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    }

    const handleConnect = () => {
        interface Workspace {
            id: string;
            [key: string]: unknown;
        }
        const workspaces: Workspace[] = JSON.parse(localStorage.getItem("workspaces") || "[]")
        const updated = workspaces.map((ws: Workspace) =>
            ws.id === workspaceId ? { ...ws, uploadeFile: true } : ws
        )
        localStorage.setItem("workspaces", JSON.stringify(updated))
        setFiles([])
        connectFile()
    }

    const handleFileSelect = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files
        if (!selectedFiles || selectedFiles.length === 0) return

        setIsUploading(true)

        // Simulate upload delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const newFiles: UploadedFile[] = Array.from(selectedFiles).map((file) => ({
            id: Math.random().toString(36).substr(2, 9),
            name: file.name,
            size: file.size,
            type: file.type,
        }))

        setFiles((prev) => [...prev, ...newFiles])
        setIsUploading(false)

        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    const removeFile = (id: string) => {
        setFiles((prev) => prev.filter((file) => file.id !== id))
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button>Connect Data</Button>
            </PopoverTrigger>

            <PopoverContent className="w-[250px] lg:w-[300px] -translate-x-3 lg:-translate-x-10 glass-effect">
                <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".csv,.xlsx,.xls,.json,.txt,.pdf"
                />

                <Button
                    onClick={handleFileSelect}
                    disabled={isUploading}
                    className="w-full mb-4"
                >
                    {isUploading ? "Uploading..." : "Upload Files"}
                </Button>

                {files.length > 0 && (
                    <Card className="border border-gray-200 mb-4">
                        <CardContent className="p-3 space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-medium text-gray-900">
                                    Connected Files ({files.length})
                                </h3>
                                <Badge variant="secondary" className="text-xs">
                                    <Check className="w-3 h-3 mr-1" />
                                    Ready
                                </Badge>
                            </div>

                            <div className="space-y-2 ">
                                {files.map((file) => (
                                    <div key={file.id} className="flex items-center justify-between p-1 bg-secondary rounded-md">
                                        <div className="flex items-center space-x-2 min-w-0 flex-1">
                                            <File className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                            <div className="min-w-0 flex-1">
                                                <p className="text-sm font-medium text-gray-400 truncate">{file.name}</p>
                                                <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                                            </div>
                                        </div>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => removeFile(file.id)}
                                            className="p-1 h-auto"
                                        >
                                            <X className="w-4 h-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {files.length > 0 && (
                    <div className="grid grid-flow-col grid-rows-2 gap-2">
                        <Button
                            variant="secondary"
                            onClick={handleFileSelect}
                            className=""
                        >
                            Add More
                        </Button>
                        <Button
                            onClick={() => setFiles([])}
                            variant="destructive"
                        >
                            Clear All
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={handleConnect}
                        >
                            Connect
                        </Button>
                    </div>
                )}
            </PopoverContent>
        </Popover>
    )
}

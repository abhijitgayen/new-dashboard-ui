/* eslint-disable react-refresh/only-export-components */
import { useState, useContext, createContext, ReactNode } from "react"

export type Version = "Stable" | "Bita"

interface VersionContextType {
    version: Version
    setVersion: (v: Version) => void
    features: {
        isStable: boolean
        isBita: boolean
        // Add more feature flags as needed
    }
}

const VersionContext = createContext<VersionContextType | undefined>(undefined)

export function VersionProvider({ children }: { children: ReactNode }) {
    const [version, setVersion] = useState<Version>(() => {
        return (localStorage.getItem("app_version") as Version) || "Stable"
    })

    // Persist version selection
    const handleSetVersion = (v: Version) => {
        setVersion(v)
        localStorage.setItem("app_version", v)
    }

    const features = {
        isStable: version === "Stable",
        isBita: version === "Bita",
        // You can add more flags here for fine-grained control
    }

    return (
        <VersionContext.Provider value={{ version, setVersion: handleSetVersion, features }}>
            {children}
        </VersionContext.Provider>
    )
}

export function useVersion() {
    const ctx = useContext(VersionContext)
    if (!ctx) throw new Error("useVersion must be used within a VersionProvider")
    return ctx
}
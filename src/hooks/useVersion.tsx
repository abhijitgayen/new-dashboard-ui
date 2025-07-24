/* eslint-disable react-refresh/only-export-components */
import { useState, useContext, createContext, ReactNode } from "react"

export type Version = "Stable" | "Beta" | "Dev"

interface VersionContextType {
    version: Version
    setVersion: (v: Version) => void
    features: {
        isStable: boolean
        isBeta: boolean
        isDev: boolean
    }
}

const VersionContext = createContext<VersionContextType | undefined>(undefined)

export function VersionProvider({ children }: { children: ReactNode }) {
    const [version, setVersion] = useState<Version>(() => {
        return (localStorage.getItem("app_version") as Version)
    })

    const handleSetVersion = (v: Version) => {
        setVersion(v)
        localStorage.setItem("app_version", v)
    }

    const features = {
        isStable: version === "Stable",
        isBeta: version === "Beta",
        isDev: version === "Dev"
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
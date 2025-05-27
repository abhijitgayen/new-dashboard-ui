import React, { useState } from "react";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import ThemePanel from "@/components/dashboard/ThemePanel";
import AnalyticsWidgets from "@/components/dashboard/AnalyticsWidgets";
import { Button } from "@/components/ui/button";
import { Search, Bell, Settings, User } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const DashboardContent = () => {
  const [isThemePanelOpen, setIsThemePanelOpen] = useState(false);
  const { settings } = useTheme();

  return (
    <SidebarProvider>
      {/* Sidebar */}
      <DashboardSidebar
        onThemeToggle={() => setIsThemePanelOpen(true)}
        sidebarMode={settings.sidebarMode}
      />

      <SidebarInset className="h-screen">
        {/* Header with modern styling */}
        <header className="h-14 glass-effect border-b border-border/50 flex items-center justify-between px-6 relative">
          {/* Accent gradient overlay */}
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

        {/* Main Content Area with enhanced styling */}
        <main
          className={`flex-1 p-6 overflow-y-auto bg-gradient-to-br from-background via-background to-accent-color/5 ${
            settings.contentLayout === "centered"
              ? "max-w-7xl mx-auto w-full"
              : ""
          }`}
        >
          <AnalyticsWidgets />
        </main>
        {/* Theme Panel */}
        <ThemePanel
          isOpen={isThemePanelOpen}
          onClose={() => setIsThemePanelOpen(false)}
        />
      </SidebarInset>
    </SidebarProvider>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <DashboardContent />
    </ThemeProvider>
  );
};

export default Index;

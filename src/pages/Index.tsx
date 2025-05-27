import React, { useState } from "react";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import ThemePanel from "@/components/dashboard/ThemePanel";
import AnalyticsWidgets from "@/components/dashboard/AnalyticsWidgets";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/dashboard/layout/Header";

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
        <Header />
        {/* Main Content Area with enhanced styling */}
        <main
          className={`flex-1 p-6 overflow-y-auto bg-gradient-to-br from-background via-background to-accent-color/5 ${settings.contentLayout === "centered"
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

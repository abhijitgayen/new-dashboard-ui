import React, { useState } from "react";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import ThemePanel from "@/components/dashboard/ThemePanel";
import AnalyticsWidgets from "@/components/dashboard/AnalyticsWidgets";

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "@/components/Header";

const DashboardContent = () => {
  const [isThemePanelOpen, setIsThemePanelOpen] = useState(false);
  const { settings } = useTheme();

  return (
    <SidebarProvider>
      <DashboardSidebar
        onThemeToggle={() => setIsThemePanelOpen(true)}
        sidebarMode={settings.sidebarMode}
      />
      <SidebarInset className="h-screen">
        <Header />
        <SidebarTrigger />
        <main
          className={`flex-1 p-6 overflow-y-auto bg-gradient-to-br from-background via-background to-accent-color/5 ${settings.contentLayout === "centered"
            ? "max-w-7xl mx-auto w-full"
            : ""
            }`}
        >
          <AnalyticsWidgets />
        </main>
        <ThemePanel
          isOpen={isThemePanelOpen}
          onClose={() => setIsThemePanelOpen(false)}
        />
      </SidebarInset>
    </SidebarProvider>
  );
};

const Dashboardlayout = () => {
  return (
    <ThemeProvider>
      <DashboardContent />
    </ThemeProvider>
  );
};

export default Dashboardlayout;

import React, { useState } from "react";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import AppSidebar from "@/components/dashboard/AppSidebar";
import { Outlet } from "react-router-dom";


import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "@/components/Header";

const DashboardContent = () => {
  const [isThemePanelOpen, setIsThemePanelOpen] = useState(false);
  const { settings } = useTheme();

  return (
    <SidebarProvider>
      <AppSidebar
        onThemeToggle={() => setIsThemePanelOpen(true)}
        sidebarMode={settings.sidebarMode}
      />
      <SidebarInset className="h-screen ">
        <Header />
        <SidebarTrigger className={`absolute top-4 left-4 ${settings.sidebarMode === "icon" ? "hidden" : ""}`} />
        <main
          className={`flex-1 p-6 overflow-y-auto bg-gradient-to-br from-background via-background to-accent-color/5 ${settings.contentLayout === "centered"
            ? "max-w-7xl mx-auto w-full"
            : ""
            }`}
        >
          <Outlet />
        </main>
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

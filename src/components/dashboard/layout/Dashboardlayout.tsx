import { useTheme } from "@/contexts/ThemeContext";
import AppSidebar from "@/components/dashboard/AppSidebar";
import { Outlet } from "react-router-dom";


import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import NavHeader from "@/components/dashboard/Header";

const DashboardContent = () => {
  const { settings } = useTheme();

  return (
    <SidebarProvider>
      <AppSidebar
        sidebarMode={settings.sidebarMode}
      />
      <SidebarInset className={`h-screen`}>
        <NavHeader />
        <SidebarTrigger className={`absolute top-4 left-4 ${settings.sidebarMode === "icon" ? "hidden" : ""}`} />
        <main
          className={`flex-1 p-6 overflow-y-auto ${settings.contentLayout === "centered"
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
    <>
      <DashboardContent />
    </>
  );
};

export default Dashboardlayout;

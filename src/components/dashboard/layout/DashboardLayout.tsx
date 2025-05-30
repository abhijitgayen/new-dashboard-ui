import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import AnalyticsWidgets from "@/components/dashboard/AnalyticsWidgets";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import { SidebarMode } from "@/contexts/ThemeContext";


const DashboardContent = () => {
  const { settings } = useTheme();
  const isIconMode = settings.sidebarMode === "icon";

  return (
    <SidebarProvider>
      <DashboardSidebar
        sidebarMode={settings.sidebarMode}
      />
      <SidebarInset className="h-screen">
        <Header />
        <SidebarTrigger className={`mt-4 ml-5 absolute ${isIconMode ? "hidden" : ""}`} />
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

const DashboardLayout = () => {
  return (
    <ThemeProvider>
      <DashboardContent />
    </ThemeProvider>
  );
};

export default DashboardLayout;

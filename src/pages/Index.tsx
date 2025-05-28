import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import AnalyticsWidgets from "@/components/dashboard/AnalyticsWidgets";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "@/components/dashboard/layout/Header";

const DashboardContent = () => {
  const { settings } = useTheme();

  return (
    <SidebarProvider>
      {/* Sidebar */}
      <DashboardSidebar
        sidebarMode={settings.sidebarMode}
      />

      <SidebarInset className="h-screen">
        {/* Header with modern styling */}

        <Header />
        <SidebarTrigger className="mt-4 pl-2 md:hidden absolute" />
        {/* Main Content Area with enhanced styling */}
        <main
          className={`flex-1 p-6 overflow-y-auto bg-gradient-to-br from-background via-background to-accent-color/5 ${settings.contentLayout === "centered"
            ? "max-w-7xl mx-auto w-full"
            : ""
            }`}
        >
          <AnalyticsWidgets />
        </main>
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

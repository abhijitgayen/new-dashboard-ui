import NavHeader from "@/components/dashboard/layout/NavHeader";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "@/contexts/ThemeContext";

const DashboardLayout = ({ children }) => {
  const { settings } = useTheme();

  return (
    <SidebarProvider>
      <SidebarInset className="h-screen">
        {/* Header with modern styling */}

        <NavHeader />
       
        {/* Main Content Area with enhanced styling */}
        <main
          className={`flex-1 p-6 overflow-y-auto bg-gradient-to-br from-background via-background to-accent-color/5 ${settings.contentLayout === "centered"
            ? "max-w-7xl mx-auto w-full"
            : ""
            }`}
        >
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
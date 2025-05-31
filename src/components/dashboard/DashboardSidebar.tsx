import React from "react";
import {
  BarChart3,
  ShoppingCart,
  DollarSign,
  Users,
  FolderOpen,
  Bitcoin,
  GraduationCap,
  Building2,
  Hotel,
  Trello,
  Bot,
  FileText,
  MessageCircle,
  Mail,
} from "lucide-react";
import { SidebarMode } from "@/contexts/ThemeContext";
import Header from "./layout/sidebar/Header";
import SidebarMenu from "./layout/sidebar/Menu";
import Footer from "./layout/sidebar/Footer";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "../ui/sidebar";

interface SidebarProps {
  sidebarMode: SidebarMode;
}

const DashboardSidebar: React.FC<SidebarProps> = ({
  sidebarMode,
}) => {
  const isIconMode = sidebarMode === "icon";

  const menuItems = [
    { icon: BarChart3, url: "/", label: "Website Analytics" },
    { icon: ShoppingCart, url: "/o", label: "E-commerce" },
    { icon: DollarSign, url: "#", label: "Sales" },
    { icon: Users, url: "#", label: "CRM" },
    { icon: FolderOpen, url: "#", label: "Project Management" },
    { icon: FileText, url: "#", label: "File Manager" },
    { icon: Bitcoin, url: "#", label: "Crypto" },
    { icon: GraduationCap, url: "#", label: "Academy/School" },
    { icon: Building2, url: "#", label: "Hospital Management" },
    { icon: Hotel, url: "#", label: "Hotel Dashboard", badge: "Coming" },
  ];

  const appItems = [
    { icon: Trello, url: "#", label: "Kanban", badge: "Coming" },
    { icon: Bot, url: "#", label: "AI Chat", badge: "New" },
    { icon: FileText, url: "#", label: "Notes" },
    { icon: MessageCircle, url: "#", label: "Chats", badge: "4" },
    { icon: Mail, url: "#", label: "Mail", badge: "Coming" },
  ];

  return (
    <Sidebar
      collapsible={isIconMode ? "none" : "offcanvas"}
      className={`${isIconMode ? "w-16" : "w-64"} h-screen`}>
      <SidebarHeader className="border-b border-border/50 -mt-[17px]">
        <Header isIconMode={isIconMode} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu
          isIconMode={isIconMode}
          menuItems={menuItems}
          appItems={appItems}
        />
      </SidebarContent>
      <SidebarFooter className="border-t border-border">
        <Footer
          isIconMode={isIconMode}
        />
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;

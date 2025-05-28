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
  MessageSquare,
  Trello,
  Bot,
  FileText,
  MessageCircle,
  Mail,
  Crown,
  Palette,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarMode } from "@/contexts/ThemeContext";
import Header from "./layout/SidebarHeader";
import SidebarMenu from "./layout/SidebarMenu";
import Footer from "./layout/SidebarFooter";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "../ui/sidebar";

interface SidebarProps {
  sidebarMode: SidebarMode;
}

const DashboardSidebar: React.FC<SidebarProps> = ({
  sidebarMode,
}) => {
  const isIconMode = sidebarMode === "icon";

  const menuItems = [
    { icon: BarChart3, url: "#", label: "Website Analytics", active: true },
    { icon: ShoppingCart, url: "#", label: "E-commerce" },
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
    <Sidebar className={`${isIconMode ? "w-16" : "w-64"} h-screen bg-background border-r border-border`}>
      <SidebarHeader>
        {/* Header */}
        <Header isIconMode={isIconMode} />
      </SidebarHeader>

      <SidebarContent>
        {/* Menu */}
        <SidebarMenu
          isIconMode={isIconMode}
          menuItems={menuItems}
          appItems={appItems}
        />
      </SidebarContent>

      <SidebarFooter>
        {/* Footer */}
        <Footer
          isIconMode={isIconMode}
        />
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
};

export default DashboardSidebar;

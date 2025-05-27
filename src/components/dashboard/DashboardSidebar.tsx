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
import SidebarHeader from "./layout/SidebarHeader";
import SidebarMenu from "./layout/SidebarMenu";
import SidebarFooter from "./layout/SidebarFooter";

interface SidebarProps {
  onThemeToggle: () => void;
  sidebarMode: SidebarMode;
}

const DashboardSidebar: React.FC<SidebarProps> = ({
  onThemeToggle,
  sidebarMode,
}) => {
  const isIconMode = sidebarMode === "icon";

  const menuItems = [
    { icon: BarChart3, label: "Website Analytics", active: true },
    { icon: ShoppingCart, label: "E-commerce" },
    { icon: DollarSign, label: "Sales" },
    { icon: Users, label: "CRM" },
    { icon: FolderOpen, label: "Project Management" },
    { icon: FileText, label: "File Manager" },
    { icon: Bitcoin, label: "Crypto" },
    { icon: GraduationCap, label: "Academy/School" },
    { icon: Building2, label: "Hospital Management" },
    { icon: Hotel, label: "Hotel Dashboard", badge: "Coming" },
  ];

  const appItems = [
    { icon: Trello, label: "Kanban", badge: "Coming" },
    { icon: Bot, label: "AI Chat", badge: "New" },
    { icon: FileText, label: "Notes" },
    { icon: MessageCircle, label: "Chats", badge: "4" },
    { icon: Mail, label: "Mail", badge: "Coming" },
  ];

  return (
    <div
      className={`${isIconMode ? "w-16" : "w-64"} h-screen bg-background border-r border-border flex flex-col transition-all duration-300`}
    >
      {/* Header */}
      <SidebarHeader isIconMode={isIconMode} />

      {/* Menu */}
      <SidebarMenu
        isIconMode={isIconMode}
        menuItems={menuItems}
        appItems={appItems}
      />

      {/* Footer */}
      <SidebarFooter
        isIconMode={isIconMode}
        onThemeToggle={onThemeToggle}
      />
    </div>
  );
};

export default DashboardSidebar;

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
import { SidebarMode } from "@/contexts/ThemeContext";
import Header from "./layout/sidebar/Header";
import Menu from "./layout/sidebar/Menu";
import Footer from "./layout/sidebar/Footer";
import { Sidebar, SidebarFooter, SidebarHeader, SidebarMenu } from "../ui/sidebar";

interface SidebarProps {
  onThemeToggle: () => void;
  sidebarMode: SidebarMode;
}

export interface ItenInterface {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: string;
  url?: string
}

const AppSidebar: React.FC<SidebarProps> = ({
  onThemeToggle,
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
  ]

  const appItems = [
    { icon: Trello, url: "#", label: "Kanban", badge: "Coming" },
    { icon: Bot, url: "#", label: "AI Chat", badge: "New" },
    { icon: FileText, url: "#", label: "Notes" },
    { icon: MessageCircle, url: "#", label: "Chats", badge: "4" },
    { icon: Mail, url: "#", label: "Mail", badge: "Coming" },
  ]

  return (
    <Sidebar
      collapsible={isIconMode ? "none" : "icon"}
      className={`${isIconMode ? "w-16" : ""} h-screen`}
    >
      <SidebarHeader className="bg-background">
        <Header isIconMode={isIconMode} />
      </SidebarHeader>

      {/* Menu */}
      <SidebarMenu className="flex-1 overflow-y-auto border-b border-t border-border -mt-4 bg-background">
        <Menu appItems={appItems} isIconMode={isIconMode} menuItems={menuItems} />
      </SidebarMenu>

      {/* Footer */}
      <SidebarFooter className="bg-background">
        <Footer isIconMode={isIconMode} onThemeToggle={onThemeToggle} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;

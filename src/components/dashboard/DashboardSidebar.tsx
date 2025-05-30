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
import { SidebarFooter, SidebarHeader, SidebarMenu } from "../ui/sidebar";

interface SidebarProps {
  onThemeToggle: () => void;
  sidebarMode: SidebarMode;
}

export interface ItenInterface {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: string;
}

const DashboardSidebar: React.FC<SidebarProps> = ({
  onThemeToggle,
  sidebarMode,
}) => {
  const isIconMode = sidebarMode === "icon";

  const menuItems: ItenInterface[] = [
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

  const appItems: ItenInterface[] = [
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
      <SidebarHeader className="border-b border-border -mt-[17px]">
        <Header isIconMode={isIconMode} />
      </SidebarHeader>

      {/* Menu */}
      <SidebarMenu className="flex-1 overflow-y-auto border-b border-border">
        <Menu appItems={appItems} isIconMode={isIconMode} menuItems={menuItems} />
      </SidebarMenu>

      {/* Footer */}
      <SidebarFooter>
        <Footer isIconMode={isIconMode} onThemeToggle={onThemeToggle} />
      </SidebarFooter>
    </div>
  );
};

export default DashboardSidebar;

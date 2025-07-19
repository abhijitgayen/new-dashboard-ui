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
  LucideProps,
  Settings2Icon,
  UserRound,
  Wrench,
  Bell,
  MonitorCog,
} from "lucide-react";
import { SidebarMode } from "@/contexts/ThemeContext";
import Header from "./layout/sidebar/Header";
import Menu from "./layout/sidebar/Menu";
import Footer from "./layout/sidebar/Footer";
import { Sidebar, SidebarFooter, SidebarHeader, SidebarMenu } from "../ui/sidebar";
import { Version } from "@/hooks/useVersion";

interface SidebarProps {
  onThemeToggle: () => void;
  sidebarMode: SidebarMode;
}

export type Badge = "Beta" | "Stable" | "Dev"

export interface ItenInterface {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  url?: string;
  label?: string;
  badge?: Badge | string;
  title?: string;
  active?: boolean;
  version?: Version
}

export interface OtherItem {
  label: string;
  items: {
    items: ItenInterface[];
    label: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    url?: string;
  }[];
}

const AppSidebar: React.FC<SidebarProps> = ({
  onThemeToggle,
  sidebarMode,
  ...props
}) => {
  const isIconMode = sidebarMode === "icon";

  const menuItems: ItenInterface[] = [
    { icon: BarChart3, url: "/", label: "Website Analytics" },
    { icon: ShoppingCart, url: "#", label: "E-commerce" },
    { icon: DollarSign, url: "#", label: "Sales" },
    { icon: FolderOpen, url: "#", label: "Project Management" },
    { icon: FileText, url: "/create-datasets", label: "Create Datasets" },
  ]

  const otherItems = [
    {
      label: 'Other',
      items: [
        {
          label: 'Settings',
          icon: Settings2Icon,
          items: [
            {
              label: 'Profile',
              url: '/settings',
              icon: UserRound,
            },
            {
              label: 'Account',
              url: '/settings/account',
              icon: Wrench,
            },
            {
              label: 'Appearance',
              url: '/settings/appearance',
              icon: Palette,
            },
            {
              label: 'Notifications',
              url: '/settings/notifications',
              icon: Bell,
            },
            {
              label: 'Display',
              url: '/settings/display',
              icon: MonitorCog,
            },
          ],
        }
      ],
    },
  ]

  const data = {
    versions: ["Stable", "Beta", "Dev"]
  }

  const appItems: ItenInterface[] = [
    { icon: MessageCircle, url: "#", label: "Chats", badge: "4", version: "Stable" },
    { icon: FileText, url: "#", label: "Notes", version: "Stable" },
    { icon: Mail, url: "#", label: "Mail", version: "Stable" },
    { icon: Building2, url: "#", label: "Company", badge: "Beta" as Badge, version: "Beta" },
    { icon: Hotel, url: "#", label: "Hotel", badge: "Beta" as Badge, version: "Beta" },
    { icon: Users, url: "#", label: "Users", badge: "Beta" as Badge, version: "Beta" },
  ]

  return (
    <Sidebar
      {...props}
      collapsible={isIconMode ? "none" : "icon"}
      className={`${isIconMode ? "w-16" : ""} h-screen border-r`}
    >
      <SidebarHeader className="bg-background">
        <Header
          isIconMode={isIconMode}
          versions={data.versions}
          defaultVersion={data.versions[0]} />
      </SidebarHeader>

      {/* Menu */}
      <SidebarMenu className="flex-1 overflow-y-auto border-b border-t border-border -mt-4 bg-background">
        <Menu
          appItems={appItems}
          isIconMode={isIconMode}
          menuItems={menuItems}
          otherItems={otherItems}
          />
          
      </SidebarMenu>

      {/* Footer */}
      <SidebarFooter className="bg-background">
        <Footer isIconMode={isIconMode} />
      </SidebarFooter>

    </Sidebar>
  );
};

export default AppSidebar;

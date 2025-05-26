
import React from 'react';
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
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

interface SidebarProps {
  onThemeToggle: () => void;
}

const DashboardSidebar: React.FC<SidebarProps> = ({ onThemeToggle }) => {
  const { settings } = useTheme();

  const menuItems = [
    { icon: BarChart3, label: 'Website Analytics', active: true },
    { icon: ShoppingCart, label: 'E-commerce' },
    { icon: DollarSign, label: 'Sales' },
    { icon: Users, label: 'CRM' },
    { icon: FolderOpen, label: 'Project Management' },
    { icon: FileText, label: 'File Manager' },
    { icon: Bitcoin, label: 'Crypto' },
    { icon: GraduationCap, label: 'Academy/School' },
    { icon: Building2, label: 'Hospital Management' },
    { icon: Hotel, label: 'Hotel Dashboard', badge: 'Coming' }
  ];

  const appItems = [
    { icon: Trello, label: 'Kanban', badge: 'Coming' },
    { icon: Bot, label: 'AI Chat', badge: 'New' },
    { icon: FileText, label: 'Notes' },
    { icon: MessageCircle, label: 'Chats', badge: '4' },
    { icon: Mail, label: 'Mail', badge: 'Coming' }
  ];

  return (
    <div className="w-64 h-screen bg-background border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-foreground">Shadcn UI Kit</span>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {/* Dashboards Section */}
        <div className="mb-8">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-2">
            Dashboards
          </h3>
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                  item.active 
                    ? 'bg-accent text-accent-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-xs px-2 py-1 bg-orange-500 text-white rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Apps Section */}
        <div className="mb-8">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-2">
            Apps
          </h3>
          <div className="space-y-1">
            {appItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors text-muted-foreground hover:text-foreground hover:bg-accent/50"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.badge === 'New' ? 'bg-emerald-500 text-white' :
                    item.badge === 'Coming' ? 'bg-muted text-muted-foreground' :
                    'bg-blue-500 text-white'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="bg-muted rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Crown className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium">Upgrade to Pro</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Get pro now to own all dashboards, templates and components for life.
          </p>
          <Button size="sm" className="w-full">
            Get Shadcn UI Kit
          </Button>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onThemeToggle}
          className="w-full"
        >
          <Palette className="w-4 h-4 mr-2" />
          Theme Settings
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;

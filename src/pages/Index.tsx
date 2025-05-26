
import React, { useState } from 'react';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import ThemePanel from '@/components/dashboard/ThemePanel';
import AnalyticsWidgets from '@/components/dashboard/AnalyticsWidgets';
import { Button } from '@/components/ui/button';
import { Search, Bell, Settings, User } from 'lucide-react';

const DashboardContent = () => {
  const [isThemePanelOpen, setIsThemePanelOpen] = useState(false);
  const { settings } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground flex w-full">
      {/* Sidebar */}
      <DashboardSidebar 
        onThemeToggle={() => setIsThemePanelOpen(true)} 
        sidebarMode={settings.sidebarMode}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
              <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded border">
                ⌘K
              </kbd>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-4 h-4" />
            </Button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className={`flex-1 p-6 overflow-y-auto ${
          settings.contentLayout === 'centered' ? 'max-w-7xl mx-auto w-full' : ''
        }`}>
          <AnalyticsWidgets />
        </main>
      </div>

      {/* Theme Panel */}
      <ThemePanel 
        isOpen={isThemePanelOpen} 
        onClose={() => setIsThemePanelOpen(false)} 
      />
    </div>
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

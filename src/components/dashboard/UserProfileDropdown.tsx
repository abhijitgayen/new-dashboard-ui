import React, { useState } from 'react';
import {
  User,
  Download,
  Workflow,
  Code,
  Trash2,
  Archive,
  Settings,
  Users,
  UserPlus,
  Store,
  Smartphone,
  FlaskConical,
  Keyboard,
  Palette,
  Crown,
  Info,
  BellOff,
  MoreHorizontal,
  ChevronsRight,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup
} from '@/components/ui/dropdown-menu';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const UserProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [workingStatus, setWorkingStatus] = useState('off');

  const menuItems = {
    account: [
      { icon: User, label: 'My profile', action: () => console.log('Profile') },
      { icon: Download, label: 'Import data', action: () => console.log('Import') },
      { icon: Workflow, label: 'Automations', action: () => console.log('Automations') },
      { icon: Code, label: 'Developers', action: () => console.log('Developers') },
      { icon: Trash2, label: 'Trash', action: () => console.log('Trash') },
      { icon: Archive, label: 'Archive', action: () => console.log('Archive') },
      { icon: Settings, label: 'Administration', action: () => console.log('Admin') },
      { icon: Users, label: 'Teams', action: () => console.log('Teams') },
      { icon: UserPlus, label: 'Invite members', action: () => console.log('Invite') }
    ],
    explore: [
      { icon: Store, label: 'App marketplace', action: () => console.log('Marketplace') },
      { icon: Smartphone, label: 'Mobile app', action: () => console.log('Mobile') },
      { icon: FlaskConical, label: 'monday.labs', action: () => console.log('Labs') },
      { icon: Keyboard, label: 'Shortcuts', action: () => console.log('Shortcuts') }
    ]
  };

  const toggleWorkingStatus = (status: string) => {
    setWorkingStatus(status);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-4 w-4 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
        >
          <Avatar className="h-8 w-8 border-2 border-primary/20">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-semibold">
              A
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="p-0 mr-4 mt-2 animate-fade-in border-1 shadow-2xl bg-card"
        align="end"
      >
        {/* Header */}
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-primary">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-3 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
              <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
            </div>
            <span className="font-semibold text-foreground">AKM</span>
          </div>
        </div>

        <div>
          <div className="p-2 flex gap-5">
            {/* Account Section */}
            <div className='flex-[2_1_auto]'>
              <DropdownMenuLabel className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Account
              </DropdownMenuLabel>
              <DropdownMenuGroup>
                {menuItems.account.map((item, index) => (
                  <DropdownMenuItem
                    key={item.label}
                    onClick={item.action}
                    className="mx-1 rounded-lg hover:bg-accent/50 transition-colors duration-200 cursor-pointer group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <item.icon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="text-sm">{item.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </div>

            <DropdownMenuSeparator className="my-2 bg-border/50" />

            {/* Explore Section */}
            <div className='flex-[2_1_auto]'>
              <DropdownMenuLabel className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Explore
              </DropdownMenuLabel>
              <DropdownMenuGroup>
                {menuItems.explore.map((item, index) => (
                  <DropdownMenuItem
                    key={item.label}
                    onClick={item.action}
                    className="mx-1 rounded-lg hover:bg-accent/50 transition-colors duration-200 cursor-pointer group"
                    style={{ animationDelay: `${(menuItems.account.length + index) * 50}ms` }}
                  >
                    <item.icon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="text-sm">{item.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>


              <DropdownMenuSeparator className="my-2 bg-border/50" />

              {/* Theme Toggle */}
              <DropdownMenuItem className="mx-1 rounded-lg hover:bg-accent/50 transition-colors duration-200 cursor-pointer group">
                <Palette className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-sm">Change theme</span>
                <div className="ml-2">
                  <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                </div>
              </DropdownMenuItem>


              <DropdownMenuSeparator className="my-2 bg-border/50" />

              {/* Plan Section */}
              <div className="p-3 mx-1 rounded-lg bg-muted/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Your Free plan</span>
                  <Crown className="h-4 w-4 text-yellow-500" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-muted-foreground">Items</span>
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <span className="text-xs font-medium">12/200</span>
                </div>
                <Progress value={6} className="h-1.5 mb-3" />
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Upgrade now
                </Button>
              </div>
            </div>
          </div>

          <DropdownMenuSeparator className="my-2 bg-border/50" />

          {/* Working Status */}
          <div className="p-3 mx-1">
            <DropdownMenuLabel className="px-0 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Working status
            </DropdownMenuLabel>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-muted-foreground'
                >
                  <BellOff className="h-4 w-4" />
                  Do not disturb
                </div>


                <RadioGroup
                  value={workingStatus}
                  onValueChange={toggleWorkingStatus}
                  className="flex gap-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="on"
                      id="on"
                      className="peer"
                    />
                    <label
                      htmlFor="on"
                      className={`text-sm rounded-md cursor-pointer`}
                    >
                      On
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="off"
                      id="off"
                      className="peer"
                    />
                    <label
                      htmlFor="off"
                      className={`text-sm rounded-md cursor-pointer`}
                    >
                      Off
                    </label>
                  </div>
                </RadioGroup>

              </div>

              <Button variant="ghost" size="sm" className="hover:bg-accent/50">
                More
                <ChevronsRight className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileDropdown;
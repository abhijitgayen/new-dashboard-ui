import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboardlayout from "./components/dashboard/layout/Dashboardlayout";
import AnalyticsWidgets from "@/components/dashboard/AnalyticsWidgets";
import NotFound from "./pages/NotFound";
import Index from "./components/createDatasets/Index";
import LoginPage from "./components/auth/LoginForm";
import RegisterPage from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import Settings from "./components/settings";
import SettingsAccount from "./components/settings/account";
import SettingsProfile from "./components/settings/profile";
import { ThemeProvider } from '@/contexts/ThemeContext'
import SettingsAppearance from "./components/settings/appearance";
import SettingsNotifications from "./components/settings/notifications";
import SettingsDisplay from "./components/settings/display";
import { VersionProvider } from "@/hooks/useVersion"

const App = () => (
  <ThemeProvider>
    <VersionProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forget-password" element={<ForgotPassword />} />
            <Route path="/" element={<Dashboardlayout />} >
              <Route path="/settings" element={<Settings />} >
                <Route index element={<SettingsProfile />} />
                <Route path="account" element={<SettingsAccount />} />
                <Route path="appearance" element={<SettingsAppearance />} />
                <Route path="notifications" element={<SettingsNotifications />} />
                <Route path="display" element={<SettingsDisplay />} />
                {/* <Route path="thime" element={<Theme />} /> */}
              </Route>
              <Route index element={<AnalyticsWidgets />} />
              <Route path="/create-datasets" element={<Index />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </VersionProvider>
  </ThemeProvider>
);

export default App;

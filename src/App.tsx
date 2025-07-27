import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThemeProvider } from '@/contexts/ThemeContext'
import { VersionProvider } from "@/hooks/useVersion"

// Dynamic imports for all route components
const Dashboardlayout = lazy(() => import("./components/dashboard/layout/Dashboardlayout"));
const AnalyticsWidgets = lazy(() => import("@/components/dashboard/AnalyticsWidgets"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Index = lazy(() => import("./components/createDatasets/Index"));
const LoginPage = lazy(() => import("./components/auth/LoginForm"));
const RegisterPage = lazy(() => import("./components/auth/Register"));
const ForgotPassword = lazy(() => import("./components/auth/ForgotPassword"));
const Settings = lazy(() => import("./components/settings"));
const SettingsAccount = lazy(() => import("./components/settings/account"));
const SettingsProfile = lazy(() => import("./components/settings/profile"));
const SettingsAppearance = lazy(() => import("./components/settings/appearance"));
const SettingsNotifications = lazy(() => import("./components/settings/notifications"));
const SettingsDisplay = lazy(() => import("./components/settings/display"));

const App = () => (
  <ThemeProvider>
    <VersionProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </VersionProvider>
  </ThemeProvider>
);

export default App;

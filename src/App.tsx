import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboardlayout from "./components/dashboard/layout/Dashboardlayout";
import AnalyticsWidgets from "@/components/dashboard/AnalyticsWidgets";
import NotFound from "./pages/NotFound";
import Test from "./components/dashboard/Test";
import Index from "./components/createDatasets/Index";
import LoginPage from "./components/auth/LoginForm";
import RegisterPage from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import Settings from "./components/settings";
import SettingsAccount from "./components/settings/account";
import SettingsProfile from "./components/settings/profile";
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { AxiosError } from 'axios'
import { toast } from 'sonner'
import { ThemeProvider } from './contexts/theme-context'
import SettingsAppearance from "./components/settings/appearance";
import SettingsNotifications from "./components/settings/notifications";
import SettingsDisplay from "./components/settings/display";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: (failureCount, error) => {
//         // eslint-disable-next-line no-console
//         if (import.meta.env.DEV) console.log({ failureCount, error })

//         if (failureCount >= 0 && import.meta.env.DEV) return false
//         if (failureCount > 3 && import.meta.env.PROD) return false

//         return !(
//           error instanceof AxiosError &&
//           [401, 403].includes(error.response?.status ?? 0)
//         )
//       },
//       refetchOnWindowFocus: import.meta.env.PROD,
//       staleTime: 10 * 1000, // 10s
//     },
//     mutations: {
//       onError: (error) => {

//         if (error instanceof AxiosError) {
//           if (error.response?.status === 304) {
//             toast.error('Content not modified!')
//           }
//         }
//       },
//     },
//   },
//   queryCache: new QueryCache({
//     onError: (error) => {
//       if (error instanceof AxiosError) {
//         if (error.response?.status === 401) {
//           toast.error('Session expired!')
//         }
//         if (error.response?.status === 500) {
//           toast.error('Internal Server Error!')
//         }
//         if (error.response?.status === 403) {
//           // router.navigate("/forbidden", { replace: true });
//         }
//       }
//     },
//   }),
// })

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
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
              </Route>
              <Route index element={<AnalyticsWidgets />} />
              <Route path="/test" element={<Test />} />
              <Route path="/create-datasets" element={<Index />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

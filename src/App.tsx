import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboardlayout from "./components/dashboard/layout/Dashboardlayout";
import AnalyticsWidgets from "@/components/dashboard/AnalyticsWidgets";
import NotFound from "./pages/NotFound";
import Test from "./components/dashboard/Test";
import Index from "./components/createDatasets/Index";
import LoginPage from "./components/auth/LoginForm";
import RegisterPage from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import { ThemeProvider } from "./contexts/ThemeContext";

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

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import PageLayout from "./ui/layouts/PageLayout";
import HomePage from "./pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import NotFound from "./pages/NotFound";
import AboutUsPage from "./pages/AboutUs";
import ProductsPage from "./pages/Products";
import ContactUsPage from "./pages/ContactUs";
import GalleryPage from "./pages/Gallery";
import MemberDetailPage from "./pages/MemberDetail";
import AuthLayout from "./ui/layouts/AuthLayout";
import SigninPage from "./pages/Signin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DashboardLayout from "./ui/layouts/DashboardLayout";
import DashboardPage from "./pages/Dashboard";
import SettingsPage from "./pages/Settings";
import PlanDetailsPage from "./pages/PlanDetails";
import ProtectedRoute from "./ui/layouts/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    AOS.init({
      throttleDelay: 99,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <AuthProvider>
          <BrowserRouter>
            <Routes>

              {/* Route for authentications */}
              <Route element={<AuthLayout/>}>
                <Route path="/sign-in" element={<SigninPage/>}/>
              </Route>



              {/* Route for Dashboard */}
              <Route element={            
                  <ProtectedRoute>
                    <DashboardLayout/>
                  </ProtectedRoute>
            }>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/dashboard/settings" element={<SettingsPage />} />
              </Route>

              {/* Route for information pages */}
              <Route element={<PageLayout/>}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/plans" element={<ProductsPage />} />
                {/* <Route path="/gallery" element={<GalleryPage />} /> */}
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="/board-member/:slug" element={<MemberDetailPage />} />
                <Route path="/plans/:slug" element={<PlanDetailsPage />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
      </AuthProvider>

    </QueryClientProvider>
  )
}

export default App


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Marketplace from "./pages/Marketplace";
import ProductCategory from "./pages/ProductCategory";
import FarmerProfile from "./pages/FarmerProfile";
import BuyerProfile from "./pages/BuyerProfile";
import FarmerSignup from "./pages/FarmerSignup";
import BuyerSignup from "./pages/BuyerSignup";
import AdminSignup from "./pages/AdminSignup";
import About from "./pages/About";
import LanguageSelect from "./pages/LanguageSelect";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/farmer-signup" element={<FarmerSignup />} />
            <Route path="/buyer-signup" element={<BuyerSignup />} />
            <Route path="/admin-signup" element={<AdminSignup />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/category/:category" element={<ProductCategory />} />
            <Route path="/farmer-profile" element={<FarmerProfile />} />
            <Route path="/buyer-profile" element={<BuyerProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/language-select" element={<LanguageSelect />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

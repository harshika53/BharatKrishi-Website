
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, X, ChevronDown } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from '@/context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-brandgreen rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">BK</span>
          </div>
          <span className="font-bold text-xl md:text-2xl text-brandgreen-dark">BharatKrishi</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-brandgreen transition-colors">Home</Link>
          <Link to="/marketplace" className="text-gray-600 hover:text-brandgreen transition-colors">Marketplace</Link>
          <Link to="/about" className="text-gray-600 hover:text-brandgreen transition-colors">About Us</Link>
          <Link to="/faq" className="text-gray-600 hover:text-brandgreen transition-colors">FAQ</Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1 text-gray-600 hover:text-brandgreen">
                <span>User Type</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/farmer-profile" className="w-full">Farmer</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/buyer-profile" className="w-full">Buyer</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-gray-600 hover:text-brandgreen transition-colors relative">
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brandgreen text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <Link to="/login" className="hidden md:block">
            <Button variant="outline" className="border-brandgreen text-brandgreen hover:bg-brandgreen hover:text-white">
              Login
            </Button>
          </Link>
          <Link to="/signup" className="hidden md:block">
            <Button className="bg-brandgreen hover:bg-brandgreen-dark text-white">
              Sign Up
            </Button>
          </Link>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-sm">
          <nav className="flex flex-col py-4">
            <Link to="/" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/marketplace" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Marketplace</Link>
            <Link to="/about" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/faq" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link to="/farmer-profile" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Farmer Profile</Link>
            <Link to="/buyer-profile" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Buyer Profile</Link>
            <Link to="/login" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Login</Link>
            <Link to="/signup" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

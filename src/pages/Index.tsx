
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CategorySelector from '@/components/CategorySelector';
import ProductCard from '@/components/ProductCard';
import { allProducts } from '@/data/products';

// Get featured products from different categories
const featuredProducts = [
  allProducts.find(p => p.name === 'Brinjal'),
  allProducts.find(p => p.name === 'Apples'),
  allProducts.find(p => p.name === 'Rice'),
  allProducts.find(p => p.name === 'Paneer'),
].filter(Boolean) as typeof allProducts;

const Index = () => {
  useEffect(() => {
    document.title = 'BharatKrishi - Connect Farmers & Buyers';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brandgreen font-bold text-2xl">1</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Register</h3>
                <p className="text-gray-600">Sign up as a farmer or buyer and complete your profile</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brandgreen font-bold text-2xl">2</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Connect</h3>
                <p className="text-gray-600">Browse listings or post your products for sale</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brandgreen font-bold text-2xl">3</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Trade</h3>
                <p className="text-gray-600">Negotiate prices and complete transactions securely</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured Products</h2>
              <CategorySelector onSelectCategory={() => {}} />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  unit={product.unit}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

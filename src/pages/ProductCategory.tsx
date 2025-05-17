
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import CategorySelector from '@/components/CategorySelector';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { allProducts } from '@/data/products';

const ProductCategory = () => {
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<typeof allProducts>([]);

  useEffect(() => {
    if (category) {
      document.title = `${category.charAt(0).toUpperCase() + category.slice(1)} - BharatKrishi`;

      // Filter products by category
      let filtered = allProducts.filter(product => product.category === category.toLowerCase());
      
      // Apply search filter if exists
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(product => 
          product.name.toLowerCase().includes(query)
        );
      }
      
      setFilteredProducts(filtered);
    }
  }, [category, searchQuery]);

  // Handle category selection
  const handleCategoryChange = (selectedCategory: string) => {
    // The router will handle the navigation
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 capitalize">
            {category || 'Products'}
          </h1>
          
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-gray-300"
            />
          </div>
          
          <CategorySelector onSelectCategory={handleCategoryChange} />
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
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
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 mb-4">No products found.</p>
              <Button 
                onClick={() => setSearchQuery('')}
                className="bg-brandgreen hover:bg-brandgreen-dark"
              >
                Reset Search
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductCategory;

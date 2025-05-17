
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Category {
  id: string;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: 'vegetables', name: 'Vegetables', icon: '/placeholder.svg' },
  { id: 'fruits', name: 'Fruits', icon: '/placeholder.svg' },
  { id: 'grains', name: 'Grains', icon: '/placeholder.svg' },
  { id: 'pulses', name: 'Pulses', icon: '/placeholder.svg' },
  { id: 'spices', name: 'Spices', icon: '/placeholder.svg' },
  { id: 'dairy', name: 'Dairy', icon: '/placeholder.svg' },
];

interface CategorySelectorProps {
  onSelectCategory: (id: string) => void;
}

const CategorySelector = ({ onSelectCategory }: CategorySelectorProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onSelectCategory(categoryId);
    
    // Navigate to category page if not "all"
    if (categoryId !== 'all') {
      navigate(`/category/${categoryId}`);
    } else {
      navigate('/marketplace');
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ScrollArea className="whitespace-nowrap pb-4">
        <div className="flex space-x-3 w-max">
          <Button
            variant={activeCategory === 'all' ? "default" : "outline"}
            className={`rounded-full ${activeCategory === 'all' ? 'bg-brandgreen hover:bg-brandgreen-dark' : 'border-brandgreen text-brandgreen hover:bg-brandgreen/10'}`}
            onClick={() => handleCategoryClick('all')}
          >
            All
          </Button>
          
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full flex items-center ${activeCategory === category.id ? 'bg-brandgreen hover:bg-brandgreen-dark' : 'border-brandgreen text-brandgreen hover:bg-brandgreen/10'}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <img src={category.icon} alt={category.name} className="w-4 h-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategorySelector;

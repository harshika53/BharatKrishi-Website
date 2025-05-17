
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
  { id: 'vegetables', name: 'Vegetables', icon: 'https://www.kuvingsusa.com/cdn/shop/articles/kuvings-blog-vegetables.png?v=1723582598' },
  { id: 'fruits', name: 'Fruits', icon: 'https://healthnewshub.org/wp-content/uploads/2022/10/Fruit-e1664894335635.jpg' },
  { id: 'grains', name: 'Grains', icon: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-611609590-6627de2d8c0bb.jpg' },
  { id: 'pulses', name: 'Pulses', icon: 'https://cdn.shopaccino.com/refresh/articles/dal-pulse-745535_l.jpg?v=531' },
  { id: 'spices', name: 'Spices', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMW3gy7PwZty2UC1vDttn-CKF4XOV4khbbRQ&s' },
  { id: 'dairy', name: 'Dairy', icon: 'https://www.bruker.com/en/applications/food-analysis-and-agriculture/food-quality/milk-and-dairy/_jcr_content/root/herostage/backgroundImageVPL.coreimg.82.1920.jpeg/1596451146895/milk-dairy.jpeg' },
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

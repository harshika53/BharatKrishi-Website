
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
}

const ProductCard = ({ id, name, price, unit, image }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ id, name, price, unit, image }, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} ${unit} of ${name} added to your cart`,
    });
    setQuantity(1);
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48 bg-gray-100">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover" 
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg mb-1">{name}</h3>
        <p className="text-brandgreen font-bold mb-3">
          ₹{price}/<span className="text-sm">{unit}</span>
        </p>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between border rounded-md">
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-1"
              onClick={decreaseQuantity}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">{quantity}</span>
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-1"
              onClick={increaseQuantity}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button 
            onClick={handleAddToCart} 
            className="w-full bg-brandgreen hover:bg-brandgreen-dark"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

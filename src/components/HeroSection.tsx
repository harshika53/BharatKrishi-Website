
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              Connecting Farmers Directly to Buyers
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Empowering agricultural communities with direct market access, fair prices, and transparent negotiations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link to="/marketplace">
                <Button className="bg-brandgreen hover:bg-brandgreen-dark text-white px-8 py-6 text-lg">
                  Explore Marketplace
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://media.istockphoto.com/id/1314472273/photo/businessman-using-laptop-and-explaining-to-rural-farmer.webp?a=1&b=1&s=612x612&w=0&k=20&c=GpZyb_uuHnXvo9cB-enTSKSKeGHFxBNwWqBnwidh41g=" 
              alt="Farmer and Buyer" 
              className="max-w-full md:max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

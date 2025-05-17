
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const UserTypeSelection = () => {
  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="BharatKrishi Logo"
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
        </div>
        <h2 className="text-xl font-semibold text-center mb-6">Profile Selection</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/buyer-signup" className="block">
            <div className="border rounded-lg p-4 text-center hover:border-brandgreen hover:shadow-md transition-all cursor-pointer">
              <div className="bg-orange-100 rounded-full w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                <img src="https://i.pinimg.com/736x/2b/f7/32/2bf7324112ed5d9e7fc26113d2bff7eb.jpg" alt="Buyer" className="w-12 h-12" />
              </div>
              <h3 className="font-medium">Buyer</h3>
            </div>
          </Link>
          
          <Link to="/farmer-signup" className="block">
            <div className="border rounded-lg p-4 text-center hover:border-brandgreen hover:shadow-md transition-all cursor-pointer">
              <div className="bg-green-100 rounded-full w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                <img src="https://i.pinimg.com/736x/5f/fe/c0/5ffec07ae6b545b6a22ae2a72801756e.jpg" alt="Farmer" className="w-12 h-12" />
              </div>
              <h3 className="font-medium">Farmer</h3>
            </div>
          </Link>
          
          <Link to="/admin-signup" className="block col-span-1 md:col-span-2 max-w-xs mx-auto">
            <div className="border rounded-lg p-4 text-center hover:border-brandgreen hover:shadow-md transition-all cursor-pointer">
              <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                <img src="https://i.pinimg.com/736x/b5/87/66/b5876617ab1ca0d46ec3a8c375626e20.jpg" alt="Admin" className="w-12 h-12" />
              </div>
              <h3 className="font-medium">Admin</h3>
            </div>
          </Link>
        </div>
        
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-500">Already have an account?</span>
          <Link to="/login" className="ml-2 text-sm text-brandgreen hover:underline">
            Login here
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserTypeSelection;

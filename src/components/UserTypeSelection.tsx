
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const UserTypeSelection = () => {
  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-brandgreen rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-2xl">BK</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-center mb-6">Profile Selection</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/buyer-signup" className="block">
            <div className="border rounded-lg p-4 text-center hover:border-brandgreen hover:shadow-md transition-all cursor-pointer">
              <div className="bg-orange-100 rounded-full w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                <img src="/placeholder.svg" alt="Buyer" className="w-12 h-12" />
              </div>
              <h3 className="font-medium">Buyer</h3>
            </div>
          </Link>
          
          <Link to="/farmer-signup" className="block">
            <div className="border rounded-lg p-4 text-center hover:border-brandgreen hover:shadow-md transition-all cursor-pointer">
              <div className="bg-green-100 rounded-full w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                <img src="/placeholder.svg" alt="Farmer" className="w-12 h-12" />
              </div>
              <h3 className="font-medium">Farmer</h3>
            </div>
          </Link>
          
          <Link to="/admin-signup" className="block col-span-1 md:col-span-2 max-w-xs mx-auto">
            <div className="border rounded-lg p-4 text-center hover:border-brandgreen hover:shadow-md transition-all cursor-pointer">
              <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                <img src="/placeholder.svg" alt="Admin" className="w-12 h-12" />
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


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import logo from '@/assets/logo.png';

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber || !password) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would connect to a backend
    toast({
      title: "Success",
      description: "Login successful!",
    });

    // Redirect to home page after successful login
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="BharatKrishi Logo"
            className="w-24 h-24 md:w-28 md:h-28 object-contain"
          />
        </div>
        <h2 className="text-xl font-semibold text-center mb-6">Login Here</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Input
              type="tel"
              placeholder="Enter Mobile No."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border-gray-300"
            />
          </div>
          
          <div>
            <Input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-gray-300"
            />
          </div>
          
          <div className="text-right">
            <Link to="/forgot-password" className="text-sm text-brandgreen hover:underline">
              Forgot Password?
            </Link>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-brandgreen hover:bg-brandgreen-dark"
          >
            Login
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-500">Don't have an account?</span>
          <Link to="/signup" className="ml-2 text-sm text-brandgreen hover:underline">
            Sign Up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;

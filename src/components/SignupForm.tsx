
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords don't match",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would connect to a backend
    toast({
      title: "Success",
      description: "Account created successfully!",
    });
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-brandgreen rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-2xl">BK</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-center mb-6">Create Account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border-gray-300"
            />
          </div>
          
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              className="border-gray-300"
            />
          </div>
          
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border-gray-300"
            />
          </div>
          
          <div>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="border-gray-300"
            />
          </div>
          
          <div>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border-gray-300"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-brandgreen hover:bg-brandgreen-dark"
          >
            Next
          </Button>
        </form>
        
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

export default SignupForm;

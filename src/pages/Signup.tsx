
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UserTypeSelection from '@/components/UserTypeSelection';

const Signup = () => {
  useEffect(() => {
    document.title = 'Sign Up - BharatKrishi';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <UserTypeSelection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Signup;

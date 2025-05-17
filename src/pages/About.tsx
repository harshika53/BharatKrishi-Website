
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - BharatKrishi';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About BharatKrishi</h1>
            
            <div className="mb-12">
              <img 
                src="https://media.istockphoto.com/id/503646746/photo/farmer-spreading-fertilizer-in-the-field-wheat.webp?a=1&b=1&s=612x612&w=0&k=20&c=BnR0YEwUlQ7xXQhC3CRce04lqQv6pLWbvS076HCw4DI=" 
                alt="Farmers in field" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>
            
            <Card className="mb-12">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We are a technology-driven digital platform dedicated to empowering farmers by giving them direct access to the market. Our goal is to eliminate the need for middlemen, ensuring a fair, transparent, and secure agricultural ecosystem. By connecting farmers directly with buyers, we help improve farmers' incomes and provide buyers with access to fresh, authentic farm produce straight from the source.
                </p>
              </CardContent>
            </Card>
            
            <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Sell Crops Directly to Buyers</h3>
                  <p className="text-gray-700">
                    Farmers can list their crops on our platform and sell them straight to trusted buyers. This helps farmers earn more money by cutting out middlemen.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Track Orders and Easy Payments</h3>
                  <p className="text-gray-700">
                    Once an order is placed, both farmers and buyers can see updates at every step—from confirmation to delivery. Payments are quick and secure through UPI or bank transfer.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Info About Government Schemes</h3>
                  <p className="text-gray-700">
                    Farmers can find and apply for useful government schemes like PMFBY, PM-KISAN, eNAM, and equipment subsidies. We give official links and simple instructions to help with the process.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Farming Tips and Guides</h3>
                  <p className="text-gray-700">
                    We share easy tips and guides on how to grow better crops, use organic methods, control pests, and plan farming in a smart way. These help farmers learn and improve.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-100 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
              <p className="text-center text-gray-700 italic">
                "To create a sustainable agricultural ecosystem that empowers farmers, ensures fair prices, and provides consumers with access to fresh, high-quality produce."
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

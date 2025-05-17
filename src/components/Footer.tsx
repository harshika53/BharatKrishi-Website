
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-brandgreen rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BK</span>
              </div>
              <span className="font-bold text-xl text-brandgreen-dark">BharatKrishi</span>
            </div>
            <p className="text-gray-600 mb-4">
              Connecting farmers directly to buyers. Supporting local agriculture and fair trade practices.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-brandgreen">Home</Link></li>
              <li><Link to="/marketplace" className="text-gray-600 hover:text-brandgreen">Marketplace</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-brandgreen">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-brandgreen">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">vanshikasarda3101@gmail.com</li>
              <li className="text-gray-600">rathod6155@gmail.com</li>
              <li className="text-gray-600">pashinesupriya@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex justify-center">
          <p className="text-sm text-gray-500">© 2025 BharatKrishi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

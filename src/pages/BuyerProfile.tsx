
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

// Mock buyer data
const buyerData = {
  name: 'Amit Kumar',
  location: 'Mumbai, India',
  joinDate: 'February 2025',
  totalOrders: 8,
  email: 'amit.kumar@example.com',
  phone: '+91 9876543210',
  address: 'A-123, Sunshine Apartments, Andheri West, Mumbai - 400053',
  gstNumber: '27AAPFU0939F1ZV',
  panCardNumber: 'AAPFU0939F',
  licenseNumber: 'MH-123456789'
};

const orderHistory = [
  { 
    id: 'ORD12345',
    date: '2025-05-10',
    items: 'Tomatoes (10kg), Potatoes (5kg)',
    amount: '₹800',
    farmer: 'Rajesh Patel / Karnataka',
    status: 'Delivered',
    deliveryDate: '2025-05-15'
  },
  { 
    id: 'ORD12346',
    date: '2025-05-05',
    items: 'Onions (8kg), Carrots (3kg)',
    amount: '₹550',
    farmer: 'Suresh Kumar / Maharashtra',
    status: 'In Transit',
    deliveryDate: '2025-05-12'
  },
  { 
    id: 'ORD12347',
    date: '2025-04-28',
    items: 'Apples (5kg), Bananas (3kg)',
    amount: '₹950',
    farmer: 'Lakshmi Farms / Karnataka',
    status: 'Delivered',
    deliveryDate: '2025-05-04'
  }
];

const contracts = [
  {
    id: 'CNT001',
    farmer: 'Rajesh Patel',
    product: 'Organic Tomatoes',
    quantity: '500 kg',
    duration: '3 months',
    startDate: '2025-04-01',
    endDate: '2025-07-01',
    status: 'Active'
  },
  {
    id: 'CNT002',
    farmer: 'Lakshmi Farms',
    product: 'Premium Apples',
    quantity: '200 kg',
    duration: '2 months',
    startDate: '2025-05-15',
    endDate: '2025-07-15',
    status: 'Active'
  }
];

const BuyerProfile = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(buyerData);
  const { toast } = useToast();

  useEffect(() => {
    document.title = 'Buyer Profile - BharatKrishi';
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsEditing(false);
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'profile':
        return (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Personal Information</CardTitle>
                {!isEditing && (
                  <Button variant="outline" onClick={handleEditProfile}>Edit Profile</Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {isEditing ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Full Name</label>
                        <Input name="name" value={profileData.name} onChange={handleInputChange} />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Email</label>
                        <Input name="email" value={profileData.email} onChange={handleInputChange} />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Phone</label>
                        <Input name="phone" value={profileData.phone} onChange={handleInputChange} />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">GST Number</label>
                        <Input name="gstNumber" value={profileData.gstNumber} onChange={handleInputChange} />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">PAN Card Number</label>
                        <Input name="panCardNumber" value={profileData.panCardNumber} onChange={handleInputChange} />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">License Number</label>
                        <Input name="licenseNumber" value={profileData.licenseNumber} onChange={handleInputChange} />
                      </div>
                      <div className="col-span-1 md:col-span-2">
                        <label className="text-sm font-medium text-gray-500">Delivery Address</label>
                        <Input name="address" value={profileData.address} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button onClick={handleSaveProfile} className="bg-brandgreen hover:bg-brandgreen-dark mr-2">Save Changes</Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Full Name</label>
                      <p className="font-medium">{profileData.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Email</label>
                      <p className="font-medium">{profileData.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Phone</label>
                      <p className="font-medium">{profileData.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">GST Number</label>
                      <p className="font-medium">{profileData.gstNumber}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">PAN Card Number</label>
                      <p className="font-medium">{profileData.panCardNumber}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">License Number</label>
                      <p className="font-medium">{profileData.licenseNumber}</p>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <label className="text-sm font-medium text-gray-500">Delivery Address</label>
                      <p className="font-medium">{profileData.address}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        );

      case 'orderHistory':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Order ID</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Items</th>
                      <th className="text-left py-3 px-4">Amount</th>
                      <th className="text-left py-3 px-4">Farmer/Location</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderHistory.map((order) => (
                      <tr key={order.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{order.id}</td>
                        <td className="py-3 px-4">{order.date}</td>
                        <td className="py-3 px-4">{order.items}</td>
                        <td className="py-3 px-4">{order.amount}</td>
                        <td className="py-3 px-4">{order.farmer}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            order.status === 'Delivered' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm">View</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        );

      case 'savedItems':
        return (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No Saved Items</h3>
            <p className="text-gray-500 mb-4">You haven't saved any products yet.</p>
            <Button className="bg-brandgreen hover:bg-brandgreen-dark">
              Browse Products
            </Button>
          </div>
        );
        
      case 'contracts':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Contracts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Contract ID</th>
                      <th className="text-left py-3 px-4">Farmer</th>
                      <th className="text-left py-3 px-4">Product</th>
                      <th className="text-left py-3 px-4">Quantity</th>
                      <th className="text-left py-3 px-4">Duration</th>
                      <th className="text-left py-3 px-4">Start - End Date</th>
                      <th className="text-left py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contracts.map((contract) => (
                      <tr key={contract.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{contract.id}</td>
                        <td className="py-3 px-4">{contract.farmer}</td>
                        <td className="py-3 px-4">{contract.product}</td>
                        <td className="py-3 px-4">{contract.quantity}</td>
                        <td className="py-3 px-4">{contract.duration}</td>
                        <td className="py-3 px-4">{contract.startDate} - {contract.endDate}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            {contract.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        );

      case 'reviews':
        return (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No Reviews</h3>
            <p className="text-gray-500 mb-4">You haven't written any reviews yet.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="w-full md:w-1/3 lg:w-1/4">
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mb-2">
                    <User className="h-12 w-12 text-gray-400" />
                  </div>
                  <CardTitle>{profileData.name}</CardTitle>
                  <div className="text-sm text-gray-500">{profileData.location}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="border rounded-md p-2">
                        <div className="font-semibold">{buyerData.totalOrders}</div>
                        <div className="text-xs text-gray-500">Orders</div>
                      </div>
                      <div className="border rounded-md p-2">
                        <div className="font-semibold">4.8</div>
                        <div className="text-xs text-gray-500">Rating</div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      <li className="border-b pb-2">
                        <Button 
                          variant="ghost" 
                          className={`w-full justify-start ${activeSection === 'profile' ? 'text-brandgreen font-medium' : ''}`}
                          onClick={() => handleNavClick('profile')}
                        >
                          Profile
                        </Button>
                      </li>
                      <li className="border-b pb-2">
                        <Button 
                          variant="ghost" 
                          className={`w-full justify-start ${activeSection === 'orderHistory' ? 'text-brandgreen font-medium' : ''}`}
                          onClick={() => handleNavClick('orderHistory')}
                        >
                          Order History
                        </Button>
                      </li>
                      <li className="border-b pb-2">
                        <Button 
                          variant="ghost" 
                          className={`w-full justify-start ${activeSection === 'savedItems' ? 'text-brandgreen font-medium' : ''}`}
                          onClick={() => handleNavClick('savedItems')}
                        >
                          Saved Items
                        </Button>
                      </li>
                      <li className="border-b pb-2">
                        <Button 
                          variant="ghost" 
                          className={`w-full justify-start ${activeSection === 'contracts' ? 'text-brandgreen font-medium' : ''}`}
                          onClick={() => handleNavClick('contracts')}
                        >
                          Contracts
                        </Button>
                      </li>
                      <li>
                        <Button 
                          variant="ghost" 
                          className={`w-full justify-start ${activeSection === 'reviews' ? 'text-brandgreen font-medium' : ''}`}
                          onClick={() => handleNavClick('reviews')}
                        >
                          Reviews
                        </Button>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="w-full md:w-2/3 lg:w-3/4">
              {renderActiveSection()}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BuyerProfile;

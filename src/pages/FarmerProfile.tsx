
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Plus, Edit } from "lucide-react";
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

// Mock data
const farmerData = {
  name: 'Rajesh Patel',
  location: 'Karnataka, India',
  joinDate: 'January 2025',
  productsListed: 12,
  totalSales: 24,
  rating: 4.5,
  // Account Details
  account: {
    fullName: 'Rajesh Sharma Patel',
    age: 45,
    gender: 'Male',
    contactEmail: 'rajesh.patel@example.com',
    alternatePhone: '+91 9876543210',
    village: 'Baknapur',
    district: 'Belgaum',
    state: 'Karnataka',
    pincode: '591222'
  },
  // Documents
  documents: {
    aadhar: '1234-5678-9012',
    rationCard: 'RC123456789',
    extract: '7/12-XYZ-789',
    bhoomiBraman: 'BBP-2023-45678'
  },
  // Bank Details
  bank: {
    accountHolder: 'Rajesh S Patel',
    accountNumber: '123456789012',
    bankName: 'State Bank of India',
    ifscCode: 'SBIN0001234',
    upiId: 'rajesh@sbi',
    linkedMobile: '+91 9876543210'
  }
};

const productListings = [
  { id: '1', name: 'Brinjal', price: 60, unit: 'kg', quantity: 200, listed: '2025-05-10' },
  { id: '2', name: 'Tomatoes', price: 40, unit: 'kg', quantity: 150, listed: '2025-05-08' },
  { id: '3', name: 'Potatoes', price: 30, unit: 'kg', quantity: 300, listed: '2025-05-05' },
];

const orderHistory = [
  { 
    id: 'ORD12345',
    date: '2025-05-10',
    crop: 'Tomatoes',
    quantity: '50 kg',
    amount: '₹2,000',
    buyer: 'Rahul Sharma / Mumbai',
    status: 'Paid',
    deliveryDate: '2025-05-15'
  },
  { 
    id: 'ORD12346',
    date: '2025-05-05',
    crop: 'Potatoes',
    quantity: '100 kg',
    amount: '₹3,000',
    buyer: 'Priya Foods Ltd / Delhi',
    status: 'Paid',
    deliveryDate: '2025-05-12'
  },
  { 
    id: 'ORD12347',
    date: '2025-04-28',
    crop: 'Onions',
    quantity: '75 kg',
    amount: '₹2,625',
    buyer: 'Green Grocers / Bangalore',
    status: 'Paid',
    deliveryDate: '2025-05-04'
  },
  { 
    id: 'ORD12348',
    date: '2025-04-22',
    crop: 'Brinjal',
    quantity: '40 kg',
    amount: '₹2,400',
    buyer: 'Fresh Mart / Chennai',
    status: 'Paid',
    deliveryDate: '2025-04-28'
  }
];

const contracts = [
  {
    id: 'CNT001',
    buyer: 'Fresh Mart / Chennai',
    product: 'Organic Brinjal',
    quantity: '100 kg',
    duration: '2 months',
    startDate: '2025-06-01',
    endDate: '2025-08-01',
    status: 'Pending'
  },
  {
    id: 'CNT002',
    buyer: 'Rahul Sharma / Mumbai',
    product: 'Premium Tomatoes',
    quantity: '200 kg',
    duration: '3 months',
    startDate: '2025-05-15',
    endDate: '2025-08-15',
    status: 'Active'
  }
];

const govSchemes = [
  {
    name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    description: 'Provides crop insurance to protect farmers against losses due to natural calamities. Uses technologies like DigiClaim and CROPIC for faster claim processing.',
    portal: 'pmfby.gov.in'
  },
  {
    name: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
    description: 'Provides ₹6,000 annually to eligible farmers in three installments. eKYC is mandatory for all beneficiaries.',
    portal: 'pmkisan.gov.in'
  },
  {
    name: 'eNAM (Electronic National Agriculture Market)',
    description: 'Integrates agricultural markets across India to facilitate better price discovery and transparency. Aadhaar is mandatory for farmers to access subsidies under eNAM.',
    portal: 'enam.gov.in'
  },
  {
    name: 'Subsidy for Agricultural Machinery',
    description: 'Provides financial assistance to farmers for purchasing modern agricultural equipment. Farmers can avail subsidies up to 50% on the purchase of tractors and other equipment.',
    portal: 'services.india.gov.in'
  }
];

const FarmerProfile = () => {
  const [activeSection, setActiveSection] = useState('account');
  const [newProductForm, setNewProductForm] = useState({
    name: '',
    price: '',
    unit: 'kg',
    quantity: '',
    category: ''
  });
  const [isEditingAccount, setIsEditingAccount] = useState(false);
  const [isEditingBank, setIsEditingBank] = useState(false);
  const [accountData, setAccountData] = useState(farmerData.account);
  const [bankData, setBankData] = useState(farmerData.bank);
  const { toast } = useToast();

  useEffect(() => {
    document.title = 'Farmer Profile - BharatKrishi';
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsEditingAccount(false);
    setIsEditingBank(false);
  };

  const handleNewProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProductForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would add the product to the database
    toast({
      title: "Success",
      description: "New product added successfully!",
    });
    setNewProductForm({
      name: '',
      price: '',
      unit: 'kg',
      quantity: '',
      category: ''
    });
  };

  const handleEditAccount = () => {
    setIsEditingAccount(true);
  };

  const handleSaveAccount = () => {
    setIsEditingAccount(false);
    toast({
      title: "Account Updated",
      description: "Your account details have been successfully updated.",
    });
  };

  const handleEditBank = () => {
    setIsEditingBank(true);
  };

  const handleSaveBank = () => {
    setIsEditingBank(false);
    toast({
      title: "Bank Details Updated",
      description: "Your bank details have been successfully updated.",
    });
  };

  const handleAccountInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccountData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBankInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBankData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'account':
        return (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Account Details</CardTitle>
                {!isEditingAccount && (
                  <Button variant="outline" onClick={handleEditAccount}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {isEditingAccount ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Full Name</label>
                      <Input name="fullName" value={accountData.fullName} onChange={handleAccountInputChange} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Age</label>
                      <Input name="age" value={accountData.age} onChange={handleAccountInputChange} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Gender</label>
                      <Input name="gender" value={accountData.gender} onChange={handleAccountInputChange} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Email</label>
                      <Input name="contactEmail" value={accountData.contactEmail} onChange={handleAccountInputChange} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Phone</label>
                      <Input name="alternatePhone" value={accountData.alternatePhone} onChange={handleAccountInputChange} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Village</label>
                      <Input name="village" value={accountData.village} onChange={handleAccountInputChange} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">District</label>
                      <Input name="district" value={accountData.district} onChange={handleAccountInputChange} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">State</label>
                      <Input name="state" value={accountData.state} onChange={handleAccountInputChange} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">PIN Code</label>
                      <Input name="pincode" value={accountData.pincode} onChange={handleAccountInputChange} />
                    </div>
                    <div className="col-span-2">
                      <Button onClick={handleSaveAccount} className="bg-brandgreen hover:bg-brandgreen-dark mr-2">Save Changes</Button>
                      <Button variant="outline" onClick={() => setIsEditingAccount(false)}>Cancel</Button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Full Name</label>
                      <p className="font-medium">{accountData.fullName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Age</label>
                      <p className="font-medium">{accountData.age} years</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Gender</label>
                      <p className="font-medium">{accountData.gender}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Email</label>
                      <p className="font-medium">{accountData.contactEmail}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Phone</label>
                      <p className="font-medium">{accountData.alternatePhone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Village</label>
                      <p className="font-medium">{accountData.village}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">District</label>
                      <p className="font-medium">{accountData.district}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">State</label>
                      <p className="font-medium">{accountData.state}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">PIN Code</label>
                      <p className="font-medium">{accountData.pincode}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        );

      case 'documents':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Aadhar Card</h3>
                      <p className="text-sm text-gray-500">No. {farmerData.documents.aadhar}</p>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Ration Card</h3>
                      <p className="text-sm text-gray-500">No. {farmerData.documents.rationCard}</p>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">7/12 Extract</h3>
                      <p className="text-sm text-gray-500">No. {farmerData.documents.extract}</p>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Bhoomi Praman Patra</h3>
                      <p className="text-sm text-gray-500">No. {farmerData.documents.bhoomiBraman}</p>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 'bank':
        return (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Bank Details</CardTitle>
                {!isEditingBank && (
                  <Button variant="outline" onClick={handleEditBank}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {isEditingBank ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Account Holder Name</label>
                      <Input name="accountHolder" value={bankData.accountHolder} onChange={handleBankInputChange} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Account Number</label>
                      <Input name="accountNumber" value={bankData.accountNumber} onChange={handleBankInputChange} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Bank Name</label>
                      <Input name="bankName" value={bankData.bankName} onChange={handleBankInputChange} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">IFSC Code</label>
                      <Input name="ifscCode" value={bankData.ifscCode} onChange={handleBankInputChange} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">UPI ID</label>
                      <Input name="upiId" value={bankData.upiId} onChange={handleBankInputChange} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Mobile Number Linked</label>
                      <Input name="linkedMobile" value={bankData.linkedMobile} onChange={handleBankInputChange} />
                    </div>
                    <div className="col-span-2">
                      <Button onClick={handleSaveBank} className="bg-brandgreen hover:bg-brandgreen-dark mr-2">Save Changes</Button>
                      <Button variant="outline" onClick={() => setIsEditingBank(false)}>Cancel</Button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Account Holder Name</label>
                      <p className="font-medium">{bankData.accountHolder}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Account Number</label>
                      <p className="font-medium">{bankData.accountNumber}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Bank Name</label>
                      <p className="font-medium">{bankData.bankName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">IFSC Code</label>
                      <p className="font-medium">{bankData.ifscCode}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">UPI ID</label>
                      <p className="font-medium">{bankData.upiId}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Mobile Number Linked</label>
                      <p className="font-medium">{bankData.linkedMobile}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        );

      case 'products':
        return (
          <Tabs defaultValue="current">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="current">Current Listings</TabsTrigger>
              <TabsTrigger value="add">Add New Product</TabsTrigger>
            </TabsList>
            
            <TabsContent value="current" className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Product</th>
                      <th className="text-left py-3 px-4">Price</th>
                      <th className="text-left py-3 px-4">Quantity</th>
                      <th className="text-left py-3 px-4">Listed Date</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productListings.map((product) => (
                      <tr key={product.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{product.name}</td>
                        <td className="py-3 px-4">₹{product.price}/{product.unit}</td>
                        <td className="py-3 px-4">{product.quantity} {product.unit}</td>
                        <td className="py-3 px-4">{product.listed}</td>
                        <td className="py-3 px-4">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="add">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Product</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddProduct} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Product Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={newProductForm.name}
                          onChange={handleNewProductChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                          Category *
                        </label>
                        <Input
                          id="category"
                          name="category"
                          value={newProductForm.category}
                          onChange={handleNewProductChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                          Price per unit (₹) *
                        </label>
                        <Input
                          id="price"
                          name="price"
                          type="number"
                          value={newProductForm.price}
                          onChange={handleNewProductChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mb-1">
                          Unit *
                        </label>
                        <Input
                          id="unit"
                          name="unit"
                          value={newProductForm.unit}
                          onChange={handleNewProductChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                          Available Quantity *
                        </label>
                        <Input
                          id="quantity"
                          name="quantity"
                          type="number"
                          value={newProductForm.quantity}
                          onChange={handleNewProductChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button type="submit" className="bg-brandgreen hover:bg-brandgreen-dark">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Product
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
                      <th className="text-left py-3 px-4">Crop & Quantity</th>
                      <th className="text-left py-3 px-4">Amount</th>
                      <th className="text-left py-3 px-4">Buyer/Location</th>
                      <th className="text-left py-3 px-4">Payment Status</th>
                      <th className="text-left py-3 px-4">Delivery Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderHistory.map((order) => (
                      <tr key={order.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{order.id}</td>
                        <td className="py-3 px-4">{order.date}</td>
                        <td className="py-3 px-4">{order.crop} ({order.quantity})</td>
                        <td className="py-3 px-4">{order.amount}</td>
                        <td className="py-3 px-4">{order.buyer}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">{order.deliveryDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
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
                      <th className="text-left py-3 px-4">Buyer</th>
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
                        <td className="py-3 px-4">{contract.buyer}</td>
                        <td className="py-3 px-4">{contract.product}</td>
                        <td className="py-3 px-4">{contract.quantity}</td>
                        <td className="py-3 px-4">{contract.duration}</td>
                        <td className="py-3 px-4">{contract.startDate} - {contract.endDate}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            contract.status === 'Active' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
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

      case 'schemes':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Government Schemes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {govSchemes.map((scheme, index) => (
                  <div key={index} className="border rounded-md p-4">
                    <h3 className="font-medium text-lg mb-2">{scheme.name}</h3>
                    <p className="text-gray-600 mb-3">{scheme.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Official Portal: {scheme.portal}</span>
                      <a 
                        href={`https://${scheme.portal}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button size="sm">Visit Site</Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
                  <CardTitle>{farmerData.name}</CardTitle>
                  <div className="text-sm text-gray-500">{farmerData.location}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="border rounded-md p-2">
                        <div className="font-semibold">{farmerData.productsListed}</div>
                        <div className="text-xs text-gray-500">Products</div>
                      </div>
                      <div className="border rounded-md p-2">
                        <div className="font-semibold">{farmerData.totalSales}</div>
                        <div className="text-xs text-gray-500">Sales</div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      <li className="border-b pb-2">
                        <Button 
                          variant="ghost" 
                          className={`w-full justify-start ${activeSection === 'account' ? 'text-brandgreen font-medium' : ''}`}
                          onClick={() => handleNavClick('account')}
                        >
                          Account Details
                        </Button>
                      </li>
                      <li className="border-b pb-2">
                        <Button 
                          variant="ghost" 
                          className={`w-full justify-start ${activeSection === 'documents' ? 'text-brandgreen font-medium' : ''}`}
                          onClick={() => handleNavClick('documents')}
                        >
                          Documents
                        </Button>
                      </li>
                      <li className="border-b pb-2">
                        <Button 
                          variant="ghost" 
                          className={`w-full justify-start ${activeSection === 'bank' ? 'text-brandgreen font-medium' : ''}`}
                          onClick={() => handleNavClick('bank')}
                        >
                          Bank Details
                        </Button>
                      </li>
                      <li className="border-b pb-2">
                        <Button 
                          variant="ghost" 
                          className={`w-full justify-start ${activeSection === 'products' ? 'text-brandgreen font-medium' : ''}`}
                          onClick={() => handleNavClick('products')}
                        >
                          Products List
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
                          className={`w-full justify-start ${activeSection === 'contracts' ? 'text-brandgreen font-medium' : ''}`}
                          onClick={() => handleNavClick('contracts')}
                        >
                          Contracts
                        </Button>
                      </li>
                      <li>
                        <Button 
                          variant="ghost" 
                          className={`w-full justify-start ${activeSection === 'schemes' ? 'text-brandgreen font-medium' : ''}`}
                          onClick={() => handleNavClick('schemes')}
                        >
                          Government Schemes
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

export default FarmerProfile;

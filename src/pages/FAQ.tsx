
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does BharatKrishi connect farmers and buyers?",
    answer: "BharatKrishi provides a digital platform where farmers can list their agricultural products directly and buyers can browse and purchase these products without intermediaries, ensuring fair prices for farmers and quality products for buyers."
  },
  {
    question: "What types of products can I find on BharatKrishi?",
    answer: "You can find various agricultural products categorized as vegetables, fruits, grains, pulses, spices, and dairy products. Each category contains a wide range of items freshly sourced from local farmers."
  },
  {
    question: "How do I sign up as a farmer?",
    answer: "To sign up as a farmer, click on the 'Sign Up' button, select 'Farmer' from the profile selection page, and fill in your details including identification documents and bank details for receiving payments."
  },
  {
    question: "What are the payment options available for buyers?",
    answer: "Buyers can pay using various methods including UPI, credit/debit cards, net banking, and cash on delivery (where available). All online transactions are secure and protected."
  },
  {
    question: "How can farmers benefit from government schemes?",
    answer: "Farmers registered on BharatKrishi get information about various government schemes like PM-KISAN, PMFBY, etc. We provide links to official portals and guidance on how to apply for these schemes."
  },
  {
    question: "Can I track my order as a buyer?",
    answer: "Yes, buyers can track their orders through the 'Order History' section in their dashboard. The status gets updated as the order progresses from processing to delivery."
  },
  {
    question: "How does BharatKrishi ensure the quality of products?",
    answer: "We have a rating and review system where buyers can provide feedback on products they purchase. This helps maintain quality standards and allows farmers to improve based on customer feedback."
  },
  {
    question: "What should I do if I face any issues with my order?",
    answer: "If you face any issues, you can report them through the order details page. Our customer support team will assist in resolving the issue promptly, ensuring a smooth experience for both farmers and buyers."
  }
];

const FAQ = () => {
  useEffect(() => {
    document.title = 'FAQ - BharatKrishi';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 pt-2">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;

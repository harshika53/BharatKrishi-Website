
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface LanguageOption {
  name: string;
  code: string;
}

const languages: LanguageOption[] = [
  { name: 'English', code: 'en' },
  { name: 'हिन्दी', code: 'hi' },
  { name: 'मराठी', code: 'mr' },
  { name: 'ગુજરાતી', code: 'gu' },
  { name: 'বাংলা', code: 'bn' },
];

const LanguageSelector = ({ onSelectLanguage }: { onSelectLanguage: (code: string) => void }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageSelect = (code: string) => {
    setSelectedLanguage(code);
    onSelectLanguage(code);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-brandgreen rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-2xl">BK</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-center mb-6">Select Language</h2>
        <div className="space-y-3">
          {languages.map((lang) => (
            <Button 
              key={lang.code} 
              variant={selectedLanguage === lang.code ? "default" : "outline"}
              className={`w-full ${selectedLanguage === lang.code ? 'bg-brandgreen hover:bg-brandgreen-dark' : 'border-brandgreen text-brandgreen hover:bg-brandgreen/10'}`}
              onClick={() => handleLanguageSelect(lang.code)}
            >
              {lang.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LanguageSelector;

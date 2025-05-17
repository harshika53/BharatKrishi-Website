
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '@/components/LanguageSelector';

const LanguageSelect = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Select Language - BharatKrishi';
  }, []);
  
  const handleLanguageSelect = (languageCode: string) => {
    // In a real app, you would store this in local storage or context
    console.log(`Selected language: ${languageCode}`);
    navigate('/signup');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <LanguageSelector onSelectLanguage={handleLanguageSelect} />
    </div>
  );
};

export default LanguageSelect;

import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SupportedLanguages } from '../types/language';

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, translations } = useLanguage();

  const languageOptions: { code: SupportedLanguages; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const handleLanguageChange = (langCode: SupportedLanguages) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={translations.changeLanguage}
      >
        <Globe size={20} />
        <span className="hidden md:inline-block">{languageOptions.find(lang => lang.code === language)?.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 py-1 border border-gray-200 dark:border-gray-700">
          {languageOptions.map((option) => (
            <button
              key={option.code}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                language === option.code ? 'bg-blue-50 dark:bg-blue-900/20 font-medium' : ''
              }`}
              onClick={() => handleLanguageChange(option.code)}
            >
              <span className="mr-2">{option.flag}</span>
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
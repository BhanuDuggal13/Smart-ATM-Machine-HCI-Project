import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SupportedLanguages, Translations } from '../types/language';
import translations from '../data/translations';

interface LanguageContextType {
  language: SupportedLanguages;
  setLanguage: (language: SupportedLanguages) => void;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<SupportedLanguages>('en');

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        translations: translations[language]
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
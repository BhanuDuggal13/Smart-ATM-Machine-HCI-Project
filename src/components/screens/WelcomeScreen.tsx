import React, { useEffect } from 'react';
import { useATM } from '../../context/ATMContext';
import { useLanguage } from '../../context/LanguageContext';
import { CreditCard } from 'lucide-react';

const WelcomeScreen: React.FC = () => {
  const { setCurrentScreen } = useATM();
  const { translations } = useLanguage();

  useEffect(() => {
    // Auto transition to PIN screen after 3 seconds
    const timer = setTimeout(() => {
      setCurrentScreen('pin');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [setCurrentScreen]);

  return (
    <div className="flex flex-col items-center justify-center h-[400px] text-center">
      <div className="mb-8 animate-pulse">
        <CreditCard size={80} className="text-blue-600 dark:text-blue-400" />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">
        {translations.welcomeToSmartATM}
      </h1>
      <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
        {translations.welcomeMessage}
      </p>
      <div className="animate-bounce mt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {translations.insertCardPrompt}
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
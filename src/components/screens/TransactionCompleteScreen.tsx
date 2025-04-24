import React, { useEffect } from 'react';
import { useATM } from '../../context/ATMContext';
import { useLanguage } from '../../context/LanguageContext';
import { CheckCircle } from 'lucide-react';

const TransactionCompleteScreen: React.FC = () => {
  const { setCurrentScreen, lastTransaction } = useATM();
  const { translations } = useLanguage();

  useEffect(() => {
    // Auto return to main menu after 5 seconds
    const timer = setTimeout(() => {
      setCurrentScreen('main-menu');
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [setCurrentScreen]);

  return (
    <div className="flex flex-col items-center justify-center h-[400px] text-center">
      <div className="animate-bounce-slow mb-6">
        <CheckCircle size={64} className="text-green-500 dark:text-green-400" />
      </div>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        {translations.transactionComplete}
      </h2>
      
      {lastTransaction && (
        <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm w-full max-w-xs">
          <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
            {translations.transactionDetails}
          </h3>
          
          <div className="space-y-2 text-sm text-left">
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">{translations.type}:</span>
              <span className="font-medium">{lastTransaction.type}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">{translations.amount}:</span>
              <span className="font-medium">{lastTransaction.currency} {lastTransaction.amount.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">{translations.date}:</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">{translations.time}:</span>
              <span className="font-medium">{new Date().toLocaleTimeString()}</span>
            </div>
            
            <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700 mt-2">
              <span className="text-gray-500 dark:text-gray-400">{translations.reference}:</span>
              <span className="font-medium">{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
            </div>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setCurrentScreen('main-menu')}
        className="py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        {translations.backToMainMenu}
      </button>
      
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        {translations.automaticRedirect}
      </p>
    </div>
  );
};

export default TransactionCompleteScreen;
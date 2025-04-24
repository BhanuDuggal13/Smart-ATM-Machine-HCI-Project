import React from 'react';
import { useATM } from '../../context/ATMContext';
import { useLanguage } from '../../context/LanguageContext';
import { KeyRound } from 'lucide-react';

const PinScreen: React.FC = () => {
  const { pinInput, pinError } = useATM();
  const { translations } = useLanguage();

  // Masked PIN display
  const pinDisplay = Array(4).fill('○').map((circle, index) => 
    index < pinInput.length ? '●' : circle
  );

  return (
    <div className="flex flex-col items-center justify-center h-[400px] text-center">
      <KeyRound size={48} className="text-blue-600 dark:text-blue-400 mb-6" />
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        {translations.enterPIN}
      </h2>
      
      <div className="mb-8">
        <div className="flex justify-center space-x-4">
          {pinDisplay.map((dot, index) => (
            <div 
              key={index} 
              className={`w-10 h-10 flex items-center justify-center text-2xl border-2 rounded-full ${
                index < pinInput.length 
                  ? 'border-blue-500 text-blue-500' 
                  : 'border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500'
              }`}
            >
              {dot}
            </div>
          ))}
        </div>
        
        {pinError && (
          <p className="text-red-500 mt-4 animate-pulse">
            {translations.incorrectPIN}
          </p>
        )}
      </div>
      
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {translations.useKeypadBelow}
      </p>
    </div>
  );
};

export default PinScreen;
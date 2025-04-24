import React, { useState } from 'react';
import { useATM } from '../context/ATMContext';
import { useLanguage } from '../context/LanguageContext';
import { X, Delete, CornerDownLeft } from 'lucide-react';

const ATMKeypad: React.FC = () => {
  const { pinInput, setPinInput, validatePin, currentScreen } = useATM();
  const { translations } = useLanguage();
  const [keyPressed, setKeyPressed] = useState<string | null>(null);

  const handleKeyPress = (key: string) => {
    setKeyPressed(key);
    setTimeout(() => setKeyPressed(null), 150);

    if (currentScreen === 'pin') {
      if (key === 'clear') {
        setPinInput('');
      } else if (key === 'delete') {
        setPinInput(pinInput.slice(0, -1));
      } else if (key === 'enter') {
        validatePin();
      } else if (pinInput.length < 4) {
        setPinInput(pinInput + key);
      }
    }
  };

  const keypadButtons = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['clear', '0', 'delete']
  ];

  const keyClasses = (key: string) => 
    `rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center font-bold text-xl transition-all duration-150 ${
      keyPressed === key 
        ? 'bg-blue-600 text-white scale-95' 
        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
    }`;

  const getKeyContent = (key: string) => {
    if (key === 'clear') return <X size={24} />;
    if (key === 'delete') return <Delete size={24} />;
    return key;
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-b-lg border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="grid grid-cols-3 gap-4 mb-4">
        {keypadButtons.map((row, rowIndex) => (
          <React.Fragment key={`row-${rowIndex}`}>
            {row.map(key => (
              <button
                key={key}
                className={keyClasses(key)}
                onClick={() => handleKeyPress(key)}
                aria-label={key}
              >
                {getKeyContent(key)}
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
      <button
        className={`w-full h-16 md:h-20 rounded-full flex items-center justify-center font-bold text-xl ${
          keyPressed === 'enter' 
            ? 'bg-green-600 text-white scale-95' 
            : 'bg-green-500 text-white hover:bg-green-600'
        } transition-all duration-150`}
        onClick={() => handleKeyPress('enter')}
        aria-label={translations.enter}
      >
        <CornerDownLeft size={24} className="mr-2" />
        {translations.enter}
      </button>
    </div>
  );
};

export default ATMKeypad;
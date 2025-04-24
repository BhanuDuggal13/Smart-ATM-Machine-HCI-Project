import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

interface ATMLayoutProps {
  children: React.ReactNode;
}

const ATMLayout: React.FC<ATMLayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const { translations } = useLanguage();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <header className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl text-blue-700 dark:text-blue-400">Smart ATM</span>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? translations.switchToLightMode : translations.switchToDarkMode}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto p-4 flex flex-col items-center">
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300">
          {children}
        </div>
      </main>
      
      <footer className="mt-auto p-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} {translations.smartATMFooter}</p>
      </footer>
    </div>
  );
};

export default ATMLayout;
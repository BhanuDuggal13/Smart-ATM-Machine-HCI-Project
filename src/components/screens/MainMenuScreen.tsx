import React from 'react';
import { useATM } from '../../context/ATMContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowDownCircle, ArrowUpCircle, LogOut, CreditCard, Coins as GoldCoins } from 'lucide-react';

const MainMenuScreen: React.FC = () => {
  const { setCurrentScreen, userData } = useATM();
  const { translations } = useLanguage();

  const menuOptions = [
    {
      icon: <ArrowDownCircle size={24} />,
      title: translations.withdraw,
      onClick: () => setCurrentScreen('withdrawal'),
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      icon: <ArrowUpCircle size={24} />,
      title: translations.deposit,
      onClick: () => setCurrentScreen('deposit'),
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    },
    {
      icon: <GoldCoins size={24} />,
      title: translations.sellGold,
      onClick: () => setCurrentScreen('gold-selling'),
      color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
    },
    {
      icon: <LogOut size={24} />,
      title: translations.exit,
      onClick: () => setCurrentScreen('welcome'),
      color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
    }
  ];

  return (
    <div className="h-[400px] overflow-y-auto">
      <div className="flex flex-col items-center justify-start">
        <div className="mb-6 w-full">
          <div className="flex items-center space-x-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <CreditCard size={32} className="text-blue-600 dark:text-blue-400" />
            <div>
              <h2 className="font-bold text-xl text-gray-800 dark:text-gray-200">
                {userData.name}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {translations.accountBalance}: 
                <span className="ml-1 font-semibold">{userData.balance} {userData.currency}</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          {translations.selectTransaction}
        </h2>
        
        <div className="grid grid-cols-2 gap-4 w-full">
          {menuOptions.map((option, index) => (
            <button
              key={index}
              onClick={option.onClick}
              className={`p-4 rounded-lg ${option.color} flex flex-col items-center justify-center h-28 transition-transform duration-200 hover:scale-105`}
            >
              <div className="mb-2">{option.icon}</div>
              <span className="text-center font-medium">{option.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainMenuScreen;
import React, { useState } from 'react';
import { useATM } from '../../context/ATMContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowDownCircle, ChevronLeft, DollarSign, Euro, Pen as Yen, PoundSterling } from 'lucide-react';

const WithdrawalScreen: React.FC = () => {
  const { setCurrentScreen, processWithdrawal, userData } = useATM();
  const { translations } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState(userData.currency);

  const predefinedAmounts = [20, 50, 100, 200, 500, 1000];
  
  const currencies = [
    { code: 'USD', symbol: <DollarSign size={16} />, name: 'USD' },
    { code: 'EUR', symbol: <Euro size={16} />, name: 'EUR' },
    { code: 'GBP', symbol: <PoundSterling size={16} />, name: 'GBP' },
    { code: 'JPY', symbol: <Yen size={16} />, name: 'JPY' },
  ];

  const handleWithdrawal = () => {
    if (selectedAmount) {
      processWithdrawal(selectedAmount, selectedCurrency);
      setCurrentScreen('transaction-complete');
    }
  };

  return (
    <div className="h-[400px] flex flex-col">
      <div className="mb-4 flex items-center">
        <button 
          onClick={() => setCurrentScreen('main-menu')}
          className="mr-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
          <ArrowDownCircle size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
          {translations.withdraw}
        </h2>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 shadow-sm">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
          {translations.selectCurrency}
        </h3>
        <div className="flex space-x-2 mb-4">
          {currencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => setSelectedCurrency(currency.code)}
              className={`flex items-center justify-center px-3 py-2 rounded-md transition-colors ${
                selectedCurrency === currency.code
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="mr-1">{currency.symbol}</span>
              {currency.name}
            </button>
          ))}
        </div>

        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
          {translations.selectAmount}
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {predefinedAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setSelectedAmount(amount)}
              className={`py-3 rounded-md transition-colors ${
                selectedAmount === amount
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {selectedCurrency} {amount}
            </button>
          ))}
          <button
            onClick={() => {/* Custom amount implementation */}}
            className="py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {translations.other}
          </button>
        </div>
      </div>

      <div className="mt-auto">
        <button
          onClick={handleWithdrawal}
          disabled={!selectedAmount}
          className={`w-full py-3 rounded-md font-medium transition-colors ${
            selectedAmount
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
          }`}
        >
          {translations.withdraw} {selectedAmount ? `${selectedCurrency} ${selectedAmount}` : ''}
        </button>
      </div>
    </div>
  );
};

export default WithdrawalScreen;
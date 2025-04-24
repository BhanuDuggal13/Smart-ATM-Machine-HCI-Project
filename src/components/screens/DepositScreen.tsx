import React, { useState } from 'react';
import { useATM } from '../../context/ATMContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpCircle, ChevronLeft, DollarSign, Euro, Pen as Yen, PoundSterling } from 'lucide-react';

const DepositScreen: React.FC = () => {
  const { setCurrentScreen, processDeposit, userData } = useATM();
  const { translations } = useLanguage();
  const [amount, setAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState(userData.currency);

  const currencies = [
    { code: 'USD', symbol: <DollarSign size={16} />, name: 'USD' },
    { code: 'EUR', symbol: <Euro size={16} />, name: 'EUR' },
    { code: 'GBP', symbol: <PoundSterling size={16} />, name: 'GBP' },
    { code: 'JPY', symbol: <Yen size={16} />, name: 'JPY' },
  ];

  const handleDeposit = () => {
    const depositAmount = parseFloat(amount);
    if (!isNaN(depositAmount) && depositAmount > 0) {
      processDeposit(depositAmount, selectedCurrency);
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
          <ArrowUpCircle size={20} className="mr-2 text-green-600 dark:text-green-400" />
          {translations.deposit}
        </h2>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 shadow-sm">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
          {translations.selectCurrency}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {currencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => setSelectedCurrency(currency.code)}
              className={`flex items-center justify-center px-3 py-2 rounded-md transition-colors ${
                selectedCurrency === currency.code
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-medium'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="mr-1">{currency.symbol}</span>
              {currency.name}
            </button>
          ))}
        </div>

        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
          {translations.enterAmount}
        </h3>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {currencies.find(c => c.code === selectedCurrency)?.symbol}
          </div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="block w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400"
          />
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {translations.depositInstructions}
        </p>

        <div className="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md text-yellow-800 dark:text-yellow-200 text-sm">
          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
          {translations.depositNote}
        </div>
      </div>

      <div className="mt-auto">
        <button
          onClick={handleDeposit}
          disabled={!amount || parseFloat(amount) <= 0}
          className={`w-full py-3 rounded-md font-medium transition-colors ${
            amount && parseFloat(amount) > 0
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
          }`}
        >
          {translations.confirmDeposit}
        </button>
      </div>
    </div>
  );
};

export default DepositScreen;
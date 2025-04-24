import React, { useState } from 'react';
import { useATM } from '../../context/ATMContext';
import { useLanguage } from '../../context/LanguageContext';
import { Coins as GoldCoins, ChevronLeft, CheckCircle, Loader2 } from 'lucide-react';

const GoldSellingScreen: React.FC = () => {
  const { setCurrentScreen, processSellGold } = useATM();
  const { translations } = useLanguage();
  const [weight, setWeight] = useState('');
  const [checking, setChecking] = useState(false);
  const [goldPurity, setGoldPurity] = useState<number | null>(null);
  const [estimatedValue, setEstimatedValue] = useState<number | null>(null);

  // Current gold price per gram (simulated)
  const goldPricePerGram = 60; // USD

  const handleCheckGold = () => {
    if (!weight || parseFloat(weight) <= 0) return;
    
    setChecking(true);
    
    // Simulate gold purity check
    setTimeout(() => {
      // Simulate random purity between 70% and 99.9%
      const purity = Math.floor(Math.random() * 300) / 10 + 70;
      setGoldPurity(purity);
      
      // Calculate estimated value based on weight, purity and current gold price
      const weightValue = parseFloat(weight);
      const value = (weightValue * (purity / 100) * goldPricePerGram).toFixed(2);
      setEstimatedValue(parseFloat(value));
      
      setChecking(false);
    }, 2000);
  };

  const handleSellGold = () => {
    if (estimatedValue) {
      processSellGold(estimatedValue);
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
          <GoldCoins size={20} className="mr-2 text-amber-500 dark:text-amber-400" />
          {translations.sellGold}
        </h2>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 shadow-sm">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {translations.goldWeight} (g)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
              setGoldPurity(null);
              setEstimatedValue(null);
            }}
            placeholder="0.0"
            className="block w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400"
            disabled={checking}
          />
        </div>

        {!goldPurity && (
          <button
            onClick={handleCheckGold}
            disabled={!weight || parseFloat(weight) <= 0 || checking}
            className={`w-full py-3 rounded-md font-medium mb-4 transition-colors ${
              weight && parseFloat(weight) > 0 && !checking
                ? 'bg-amber-500 text-white hover:bg-amber-600'
                : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
          >
            {checking ? (
              <span className="flex items-center justify-center">
                <Loader2 size={20} className="animate-spin mr-2" />
                {translations.checkingGold}
              </span>
            ) : (
              translations.checkGold
            )}
          </button>
        )}

        {goldPurity !== null && estimatedValue !== null && (
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-4">
            <div className="flex items-center mb-2 text-amber-700 dark:text-amber-300">
              <CheckCircle size={20} className="mr-2" />
              <h3 className="font-semibold">{translations.goldVerified}</h3>
            </div>
            
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span>{translations.purity}:</span>
                <span className="font-medium">{goldPurity.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>{translations.weight}:</span>
                <span className="font-medium">{weight}g</span>
              </div>
              <div className="flex justify-between">
                <span>{translations.currentRate}:</span>
                <span className="font-medium">USD {goldPricePerGram}/g</span>
              </div>
              <div className="border-t border-amber-200 dark:border-amber-700 pt-2 mt-2">
                <div className="flex justify-between text-lg font-bold text-amber-700 dark:text-amber-300">
                  <span>{translations.estimatedValue}:</span>
                  <span>USD {estimatedValue.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {translations.goldSellingInstructions}
        </p>
      </div>

      {goldPurity !== null && estimatedValue !== null && (
        <div className="mt-auto">
          <button
            onClick={handleSellGold}
            className="w-full py-3 rounded-md font-medium bg-amber-500 text-white hover:bg-amber-600 transition-colors"
          >
            {translations.confirmGoldSale}
          </button>
        </div>
      )}
    </div>
  );
};

export default GoldSellingScreen;
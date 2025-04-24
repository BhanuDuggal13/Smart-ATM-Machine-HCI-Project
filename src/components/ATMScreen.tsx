import React from 'react';
import { useATM } from '../context/ATMContext';
import WelcomeScreen from './screens/WelcomeScreen';
import PinScreen from './screens/PinScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import WithdrawalScreen from './screens/WithdrawalScreen';
import DepositScreen from './screens/DepositScreen';
import GoldSellingScreen from './screens/GoldSellingScreen';
import TransactionCompleteScreen from './screens/TransactionCompleteScreen';
import VoiceAssistant from './VoiceAssistant';

const ATMScreen: React.FC = () => {
  const { currentScreen } = useATM();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen />;
      case 'pin':
        return <PinScreen />;
      case 'main-menu':
        return <MainMenuScreen />;
      case 'withdrawal':
        return <WithdrawalScreen />;
      case 'deposit':
        return <DepositScreen />;
      case 'gold-selling':
        return <GoldSellingScreen />;
      case 'transaction-complete':
        return <TransactionCompleteScreen />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="relative">
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 min-h-[500px] p-6 rounded-t-lg transition-colors duration-300">
        {renderScreen()}
      </div>
      <VoiceAssistant />
    </div>
  );
};

export default ATMScreen;
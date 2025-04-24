import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Transaction, UserData, ATMScreen } from '../types/atm';

interface ATMContextType {
  currentScreen: ATMScreen;
  setCurrentScreen: (screen: ATMScreen) => void;
  pinInput: string;
  setPinInput: (pin: string) => void;
  pinError: boolean;
  validatePin: () => void;
  userData: UserData;
  lastTransaction: Transaction | null;
  processWithdrawal: (amount: number, currency: string) => void;
  processDeposit: (amount: number, currency: string) => void;
  processSellGold: (amount: number) => void;
  processSpeech: (speech: string) => void;
}

const defaultUserData: UserData = {
  id: '12345',
  name: 'John Doe',
  balance: 5000,
  currency: 'USD',
  transactions: []
};

const ATMContext = createContext<ATMContextType | undefined>(undefined);

export const ATMProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<ATMScreen>('welcome');
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [lastTransaction, setLastTransaction] = useState<Transaction | null>(null);

  const validatePin = () => {
    if (pinInput === '1234') {
      setPinError(false);
      setCurrentScreen('main-menu');
    } else {
      setPinError(true);
      setPinInput(''); // Clear incorrect PIN
    }
  };

  const processWithdrawal = (amount: number, currency: string) => {
    const conversionRates: Record<string, number> = {
      USD: 1,
      EUR: 0.85,
      GBP: 0.75,
      JPY: 110
    };
    
    const convertedAmount = 
      currency === userData.currency 
        ? amount 
        : amount * (conversionRates[userData.currency] / conversionRates[currency]);
    
    const newBalance = userData.balance - convertedAmount;
    
    setUserData({
      ...userData,
      balance: newBalance,
      transactions: [
        ...userData.transactions,
        {
          id: Date.now().toString(),
          type: 'withdrawal',
          amount,
          currency,
          date: new Date().toISOString()
        }
      ]
    });
    
    setLastTransaction({
      id: Date.now().toString(),
      type: 'withdrawal',
      amount,
      currency,
      date: new Date().toISOString()
    });
  };

  const processDeposit = (amount: number, currency: string) => {
    const conversionRates: Record<string, number> = {
      USD: 1,
      EUR: 0.85,
      GBP: 0.75,
      JPY: 110
    };
    
    const convertedAmount = 
      currency === userData.currency 
        ? amount 
        : amount * (conversionRates[userData.currency] / conversionRates[currency]);
    
    const newBalance = userData.balance + convertedAmount;
    
    setUserData({
      ...userData,
      balance: newBalance,
      transactions: [
        ...userData.transactions,
        {
          id: Date.now().toString(),
          type: 'deposit',
          amount,
          currency,
          date: new Date().toISOString()
        }
      ]
    });
    
    setLastTransaction({
      id: Date.now().toString(),
      type: 'deposit',
      amount,
      currency,
      date: new Date().toISOString()
    });
  };

  const processSellGold = (amount: number) => {
    const newBalance = userData.balance + amount;
    
    setUserData({
      ...userData,
      balance: newBalance,
      transactions: [
        ...userData.transactions,
        {
          id: Date.now().toString(),
          type: 'gold sale',
          amount,
          currency: 'USD',
          date: new Date().toISOString()
        }
      ]
    });
    
    setLastTransaction({
      id: Date.now().toString(),
      type: 'gold sale',
      amount,
      currency: 'USD',
      date: new Date().toISOString()
    });
  };

  const processSpeech = (speech: string) => {
    const lowerSpeech = speech.toLowerCase();
    
    if (lowerSpeech.includes('main menu')) {
      setCurrentScreen('main-menu');
    } else if (lowerSpeech.includes('withdraw')) {
      setCurrentScreen('withdrawal');
    } else if (lowerSpeech.includes('deposit')) {
      setCurrentScreen('deposit');
    } else if (lowerSpeech.includes('gold') || lowerSpeech.includes('sell gold')) {
      setCurrentScreen('gold-selling');
    } else if (lowerSpeech.includes('exit') || lowerSpeech.includes('cancel')) {
      setCurrentScreen('welcome');
    }
  };

  return (
    <ATMContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        pinInput,
        setPinInput,
        pinError,
        validatePin,
        userData,
        lastTransaction,
        processWithdrawal,
        processDeposit,
        processSellGold,
        processSpeech
      }}
    >
      {children}
    </ATMContext.Provider>
  );
};

export const useATM = () => {
  const context = useContext(ATMContext);
  if (context === undefined) {
    throw new Error('useATM must be used within an ATMProvider');
  }
  return context;
};
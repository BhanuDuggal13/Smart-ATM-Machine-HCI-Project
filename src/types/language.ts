export type SupportedLanguages = 'en' | 'es' | 'fr' | 'zh' | 'ar';

export interface Translations {
  // General
  welcomeToSmartATM: string;
  welcomeMessage: string;
  insertCardPrompt: string;
  smartATMFooter: string;
  
  // Language and theme
  changeLanguage: string;
  switchToLightMode: string;
  switchToDarkMode: string;
  
  // PIN
  enterPIN: string;
  incorrectPIN: string;
  useKeypadBelow: string;
  
  // Main menu
  selectTransaction: string;
  accountBalance: string;
  withdraw: string;
  deposit: string;
  transactionHistory: string;
  checkBalance: string;
  sellGold: string;
  exit: string;
  
  // Withdrawal
  selectAmount: string;
  selectCurrency: string;
  other: string;
  
  // Deposit
  enterAmount: string;
  confirmDeposit: string;
  depositInstructions: string;
  depositNote: string;
  
  // Gold selling
  goldWeight: string;
  checkGold: string;
  checkingGold: string;
  goldVerified: string;
  purity: string;
  weight: string;
  currentRate: string;
  estimatedValue: string;
  confirmGoldSale: string;
  goldSellingInstructions: string;
  
  // Transaction complete
  transactionComplete: string;
  transactionDetails: string;
  type: string;
  amount: string;
  date: string;
  time: string;
  reference: string;
  backToMainMenu: string;
  automaticRedirect: string;
  
  // Voice assistant
  startListening: string;
  stopListening: string;
  mute: string;
  unmute: string;
  
  // Keypad
  enter: string;
}
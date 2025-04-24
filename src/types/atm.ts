export type ATMScreen = 
  | 'welcome'
  | 'pin'
  | 'main-menu'
  | 'withdrawal'
  | 'deposit'
  | 'gold-selling'
  | 'transaction-complete';

export interface Transaction {
  id: string;
  type: string;
  amount: number;
  currency: string;
  date: string;
}

export interface UserData {
  id: string;
  name: string;
  balance: number;
  currency: string;
  transactions: Transaction[];
}
import React from 'react';
import ATMLayout from './components/ATMLayout';
import ATMScreen from './components/ATMScreen';
import ATMKeypad from './components/ATMKeypad';
import { ATMProvider } from './context/ATMContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <ATMProvider>
        <ATMLayout>
          <div className="overflow-hidden rounded-lg">
            <ATMScreen />
            <ATMKeypad />
          </div>
        </ATMLayout>
      </ATMProvider>
    </LanguageProvider>
  );
}

export default App;
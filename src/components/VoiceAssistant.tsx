import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { useATM } from '../context/ATMContext';
import { useLanguage } from '../context/LanguageContext';

const VoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [voiceAnimation, setVoiceAnimation] = useState(false);
  const { currentScreen, processSpeech } = useATM();
  const { translations } = useLanguage();

  // Simulate voice assistant speaking based on current screen
  useEffect(() => {
    if (!isMuted) {
      setVoiceAnimation(true);
      const timeout = setTimeout(() => {
        setVoiceAnimation(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentScreen, isMuted]);

  const toggleListening = () => {
    setIsListening(!isListening);
    // Simulate speech recognition
    if (!isListening) {
      setTimeout(() => {
        processSpeech("show main menu");
        setIsListening(false);
      }, 2000);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="absolute bottom-4 right-4 flex items-center space-x-2">
      <div className={`p-3 rounded-full transition-all duration-300 ${voiceAnimation ? 'scale-110 bg-blue-100 dark:bg-blue-900' : 'bg-gray-100 dark:bg-gray-700'}`}>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className={`w-1 bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-300 ${
                voiceAnimation ? `h-${Math.random() > 0.5 ? '4' : '2'} animate-pulse` : 'h-1'
              }`}
            ></div>
          ))}
        </div>
      </div>
      
      <button
        onClick={toggleListening}
        className={`p-3 rounded-full ${
          isListening 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
        } transition-colors duration-300 hover:opacity-90`}
        aria-label={isListening ? translations.stopListening : translations.startListening}
      >
        {isListening ? <Mic size={20} /> : <MicOff size={20} />}
      </button>
      
      <button
        onClick={toggleMute}
        className={`p-3 rounded-full ${
          isMuted 
            ? 'bg-gray-400 dark:bg-gray-600 text-white' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
        } transition-colors duration-300 hover:opacity-90`}
        aria-label={isMuted ? translations.unmute : translations.mute}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
};

export default VoiceAssistant;
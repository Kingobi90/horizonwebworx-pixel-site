import { createContext, useContext, useState } from 'react';
import { translations } from '../lib/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState('EN');

  const t = (key) => {
    return translations[currentLang][key] || translations['EN'][key] || key;
  };

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  EN: {
    services: 'SERVICES',
    about: 'ABOUT',
    portfolio: 'PORTFOLIO',
    pricing: 'PRICING',
    blog: 'BLOG',
    contact: 'CONTACT',
  },
  FR: {
    services: 'SERVICES',
    about: 'À PROPOS',
    portfolio: 'PORTFOLIO',
    pricing: 'TARIFS',
    blog: 'BLOG',
    contact: 'CONTACT',
  },
  ES: {
    services: 'SERVICIOS',
    about: 'ACERCA DE',
    portfolio: 'PORTAFOLIO',
    pricing: 'PRECIOS',
    blog: 'BLOG',
    contact: 'CONTACTO',
  },
  ZH: {
    services: '服务',
    about: '关于',
    portfolio: '作品集',
    pricing: '价格',
    blog: '博客',
    contact: '联系',
  },
};

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState('EN');

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
  };

  const t = (key) => {
    return translations[currentLang]?.[key] || key;
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
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

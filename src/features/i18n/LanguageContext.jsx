import { createContext, useContext, useState } from 'react';

import { translations } from './translations';

const LanguageContext = createContext(null);

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem('portfolio-language');

  return savedLanguage === 'es' ? 'es' : 'en';
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  function changeLanguage(newLanguage) {
    if (!translations[newLanguage]) {
      return;
    }

    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  }

  function t(key) {
    const keys = key.split('.');
    let value = translations[language];

    for (const part of keys) {
      value = value?.[part];
    }

    return value ?? key;
  }

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useLanguage must be used inside LanguageProvider'
    );
  }

  return context;
}
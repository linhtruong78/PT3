import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations.js';

/**
 * LanguageContext
 * ----------------
 * EN / FR / ES / AR / FA / VI. Arabic and Persian auto-switch the document
 * to RTL. Persist user preference to localStorage.
 *
 *   const { t, lang, setLang, isRtl } = useLanguage();
 *   t('nav.home') -> "Home" / "Accueil" / "Inicio" / "الرئيسية" / "خانه" / "Trang chủ"
 */

const STORAGE_KEY = 'pt3.lang';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English',      short: 'EN' },
  { code: 'fr', label: 'Français',     short: 'FR' },
  { code: 'es', label: 'Español',      short: 'ES' },
  { code: 'ar', label: 'العربية',      short: 'AR' },
  { code: 'fa', label: 'فارسی',        short: 'FA' },
  { code: 'vi', label: 'Tiếng Việt',   short: 'VI' },
];

const RTL_LANGS = new Set(['ar', 'fa']);
const LanguageContext = createContext(null);

function lookup(dict, key) {
  return key.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), dict);
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
    const browser = (window.navigator.language || 'en').slice(0, 2);
    return translations[browser] ? browser : 'en';
  });

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.has(lang) ? 'rtl' : 'ltr';
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  }, [lang]);

  const value = useMemo(() => {
    const dict = translations[lang] || translations.en;
    const t = (key, fallback) => {
      const found = lookup(dict, key);
      if (found !== undefined) return found;
      const en = lookup(translations.en, key);
      return en !== undefined ? en : fallback ?? key;
    };
    return {
      lang,
      setLang: (l) => translations[l] && setLangState(l),
      t,
      isRtl: RTL_LANGS.has(lang),
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}

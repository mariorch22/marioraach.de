import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import homeAboutTextDE from '@/data/de/home/about.json';
import homeAboutTextEN from '@/data/en/home/about.json';

const resources = {
  de: {
    translation: {
      homeAboutText: homeAboutTextDE,
    },
  },
  en: {
    translation: {
      homeAboutText: homeAboutTextEN,
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

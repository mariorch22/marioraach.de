import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import bildungDatenDE from './data/de/about/bildung.json';
import bildungDatenEN from './data/en/about/bildung.json';
import arbeitserfahrungDatenDE from './data/de/about/arbeitserfahrung.json';
import arbeitserfahrungDatenEN from './data/en/about/arbeitserfahrung.json';
import navbarDataDE from './data/de/navbar/navbarBig.json';
import navbarDataEN from './data/en/navbar/navbarBig.json';
import navbarDataSidebarDE from './data/en/navbar/navbarSmall.json';
import navbarDataSidebarEN from './data/en/navbar/navbarSmall.json';
import ehrenamtDataDE from './data/de/about/ehrenamt.json';
import ehrenamtDataEN from './data/en/about/ehrenamt.json';
import technischDataDE from './data/de/about/technisch.json';
import technischDataEN from './data/en/about/technisch.json';
import contactFormDE from './data/de/contact/contactForm.json';
import contactFormEN from './data/en/contact/contactForm.json';
import homeAboutTextDE from './data/de/home/about.json';
import homeAboutTextEN from './data/en/home/about.json';
import homeBlogTextDE from './data/de/home/blog.json';
import homeBlogTextEN from './data/en/home/blog.json';
import homeKontaktTextDE from './data/de/home/kontakt.json';
import homeKontaktTextEN from './data/en/home/kontakt.json';
import HomeLandingpageTextDE from './data/de/home/landingpage.json';
import HomeLandingpageTextEN from './data/en/home/landingpage.json';
import BlogTextDE from './data/de/blog/blog.json'
import BlogTextEN from './data/en/blog/blog.json'


const resources = {
  de: {
    translation: {
      "bildungData": bildungDatenDE,
      "arbeitserfahrungData": arbeitserfahrungDatenDE,
      "navbarData": navbarDataDE,
      "navbarDataSidebar": navbarDataSidebarDE,
      "ehrenamtData": ehrenamtDataDE,
      "technischData": technischDataDE,
      "contactForm": contactFormDE,
      "homeAboutText": homeAboutTextDE,
      "homeBlogText": homeBlogTextDE,
      "homeKontaktText": homeKontaktTextDE,
      "homeLandingpageText": HomeLandingpageTextDE,
      "blogText": BlogTextDE
    }
  },
  en: {
    translation: {
      "bildungData": bildungDatenEN,
      "arbeitserfahrungData": arbeitserfahrungDatenEN,
      "navbarData": navbarDataEN,
      "navbarDataSidebar": navbarDataSidebarEN,
      "ehrenamtData": ehrenamtDataEN,
      "technischData": technischDataEN,
      "contactForm": contactFormEN,
      "homeAboutText": homeAboutTextEN,
      "homeBlogText": homeBlogTextEN,
      "homeKontaktText": homeKontaktTextEN,
      "homeLandingpageText": HomeLandingpageTextEN,
      "blogText": BlogTextEN,
    }
  }
};


i18n
  .use(LanguageDetector) // Nutzt den LanguageDetector
  .use(initReactI18next) // Übergibt i18n an react-i18next
  .init({
    resources, // Fügt die Ressourcen direkt hinzu
    fallbackLng: "en", // Setzt Englisch als Fallback-Sprache
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
      // Entfernt 'checkWhitelist', da es nicht als gültige Option erkannt wird
    },
    returnObjects: true,
    interpolation: {
      escapeValue: false // React sichert bereits vor XSS
    }
  });

  export default i18n;
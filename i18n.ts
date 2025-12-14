import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './src/locales/en.json';
import zh from './src/locales/zh.json';
import jp from './src/locales/jp.json';
import kr from './src/locales/kr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
      jp: { translation: jp },
      kr: { translation: kr },
    },
    lng: 'zh', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

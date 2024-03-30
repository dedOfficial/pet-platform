import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';
import esTranslation from './locales/es.json';
import ruTranslation from './locales/ru.json';
import kkTranslation from './locales/kk.json';


const resources = {
    en: {
        translation: enTranslation,
    },
    fr:{
        translation: frTranslation
    },
    es:{
        translation: esTranslation
    },
    ru:{
        translation: ruTranslation
    },
    kk:{
        translation: kkTranslation
    }
};

i18n
    ?.use(initReactI18next)
    .init({
        resources,
        lng: 'ru',
        fallbackLng: 'ru',

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

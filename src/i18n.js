import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationAM from "./languages/am/translation.json"
import translationEN from "./languages/en/translation.json"
import translationRU from "./languages/ru/translation.json"

const resources = {
    am: {
        translation: translationAM
    },
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
}

export const languages = Object.entries(resources).map(([lang]) => lang);

export const removerLanguagePrefix = (pathName) => {
    for (let lang of languages) {
        if(pathName.startsWith(`/${lang}/`) || pathName === `/${lang}`) {
            return pathName.replace(`/${lang}`, '')
        }
    }
    return pathName;
}

export const getLngFromUrl = pathname => {
    for (let lang of languages) {
        if (pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`) {
            return lang;
        }
    }
    return null;
};

const lng = getLngFromUrl(window.location.pathname) || i18n.language;

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: "am",
    resources,
    detection: {
        caches: ['cookie']
    },
    lng
})

export default i18n;
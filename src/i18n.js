import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en.json";
import ar from "./lang/ar.json";

//empty for now
const resources = {
  en: { common: en },
  ar: { common: ar }
};

i18n.use(initReactI18next).init({
  resources,
  //language to use if translations in user language are not available
  fallbackLng: "en",
  interpolation: {
    escapeValue: false // not needed for react!!
  }
});

export default i18n;

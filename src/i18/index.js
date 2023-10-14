import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "./english.json";
import Pashto from "./pashto.json";
import Dari from "./dari.json";

i18n.use(initReactI18next).init({
  // we init with resources
  resources: {
    english: English,
    pashto: Pashto,
    dari: Dari,
  },
  fallbackLng: "english",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

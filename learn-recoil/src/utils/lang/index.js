import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ko from "./ko.json";
/*
const resources = {
  en: {
    translation: {
      welcome: "Welcome!",
      "hello world": "Hello World!",
    },
  },
  ko: {
    translation: {
      welcome: "안녕하세요!",
      "hello world": "안녕하세요. 세계!",
    },
  },
};
*/
const resources = {
  en,
  ko,
};

i18n.use(initReactI18next).init({ resources, lng: "en" });

import { createContext, useContext } from "react";

import languageData, { type Language } from "./languageData";

const initialValue: Language = languageData.es;

export const LanguageContext = createContext<Language>(initialValue);

export const useLanguageContext = (): Language => {
  return useContext(LanguageContext);
};

import { ReactElement } from "react";
import languageData from "./languageData";
import { LanguageContext } from "./useLanguage";

export type EnabledLanguages = "es" | "en";

type Props = {
  children: ReactElement;
  language: EnabledLanguages;
};

export const LaguageProvider = ({ children, language }: Props): ReactElement => {
  return <LanguageContext.Provider value={languageData[language]}>{children}</LanguageContext.Provider>;
};

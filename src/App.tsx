import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { themeConfigs } from "./utils/theme/theme.ts";
import { type ThemeModes } from "./utils/theme/theme.ts";

import "./App.css";

import { About, Contact, Header, Home, Services } from "./components/index.ts";
import { EnabledLanguages, LaguageProvider } from "./context/language/LanguageProvider.tsx";
import GlobalStyles from "./GlobalStyles.tsx";

const initialState: ThemeModes = { isLight: true };

function App() {
  const [theme, setTheme] = useState<ThemeModes>(initialState);
  const [language, setLanguage] = useState<EnabledLanguages>("es");
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={themeConfigs.custom(theme)}>
        <LaguageProvider language={language}>
          <DefaultStyles>
            <Header
              onChangeMode={() => setTheme({ isLight: !theme.isLight })}
              language={language}
              setLanguage={setLanguage}
            />
            <Home />
            <Services />
            <About />
            <Contact />
          </DefaultStyles>
        </LaguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

const DefaultStyles = styled.main`
  color: ${(props) => props.theme.palette.primary.contrastText};
  background-color: ${(props) => props.theme.palette.primary.main};

  & > *:not(header) {
    min-height: 100vh;
    padding: var(--header-hg-desktop) 8vw;

    @media screen and (min-width: 768px) {
      height: 100vh;
      padding-top: var(--header-hg-desktop);
      position: relative;
    }
  }
`;

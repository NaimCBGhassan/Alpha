import { DefaultTheme } from "styled-components";

export type ThemeModes = { isLight: boolean };

const lightTheme: DefaultTheme = {
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: { main: "#c2c0c8", contrastText: "#252440" },
    secondary: { main: "#252440", contrastText: "#ffffff" },
    tertiary: { main: "#1a3c9080", contrastText: "#252440" },
    quaternary: { main: "#cba500", contrastText: "#d9d9d9" },
  },
};

const darkTheme: DefaultTheme = {
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: { main: "#c2c0c8", contrastText: "#252440" },
    secondary: { main: "#252440", contrastText: "#ffffff" },
    tertiary: { main: "#1a3c9080", contrastText: "#252440" },
    quaternary: { main: "#cba500", contrastText: "#d9d9d9" },
  },
}; // If the enterprise decide use dark and light mode here is is the config

export const themeConfigs = {
  custom: ({ isLight }: ThemeModes) => {
    const theme: DefaultTheme = isLight ? lightTheme : darkTheme;
    return theme;
  },
};

export default themeConfigs;

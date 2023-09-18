export interface Language {
  header: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
}

export type LanguageData = {
  [key: string]: Language;
};

const languageData: LanguageData = {
  es: {
    header: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
    },
  },
  en: {
    header: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
  },
};

export default languageData;

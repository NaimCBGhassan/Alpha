export interface Language {
  header: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  home: {
    title: string;
    subTitle1: string;
    subTitle2: string;
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
    home: {
      title: "Soluciones Logísticas",
      subTitle1: "Comercio Internacional",
      subTitle2: "Financiación",
    },
  },
  en: {
    header: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    home: {
      title: "Logistics Solutions",
      subTitle1: "International Trade",
      subTitle2: "Financing",
    },
  },
};

export default languageData;

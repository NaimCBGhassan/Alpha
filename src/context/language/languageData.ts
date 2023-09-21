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
  services: {
    card1: {
      title: string;
      content: string;
    };
    card2: {
      title: string;
      content: string;
    };
    card3: {
      title: string;
      content: string;
    };
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
    services: {
      card1: {
        title: "Intermediarios Comerciales",
        content: "Gestionamos la relación con tus clientes e intervenimos activamente en el proceso de compra.",
      },
      card2: {
        title: "Logística Internacional",
        content: "Fomentamos el networking entre nuestros clientes y proveedores para crear sinergia positiva.",
      },
      card3: {
        title: "Servicios de Financiación",
        content: "Gestionamos cuentas con tus proveedores dando soporte financier.",
      },
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
    services: {
      card1: {
        title: "Commercial Intermediaries",
        content: "We manage the relationship with your customers and actively intervene in the purchasing process.",
      },
      card2: {
        title: "International Logistics",
        content: "We encourage networking between our clients and suppliers to create positive synergy.",
      },
      card3: {
        title: "Financing Services",
        content: "We manage accounts with your suppliers providing financial support",
      },
    },
  },
};

export default languageData;

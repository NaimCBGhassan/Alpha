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
  about: {
    mission: {
      title: string;
      text: string;
    };
    vision: {
      title: string;
      text: string;
    };
    values: {
      title: string;
      text: string;
    };
  };
  contact: {
    contactInfo: {
      title: string;
      content: string[];
    }[];
    form: {
      title: string;
      name: string;
      enterprise: string;
      email: string;
      area: string;
      message: string;
      submit: string;
      toastSucces: string;
      toastError: string;
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
    about: {
      mission: {
        title: "MISIÓN",
        text: "Brindar soluciones logísticas y financieras personalizadas, asegurando un servicio profesional y humano, transmitiendo solidez, confianza y compromiso con nuestros clientes. Siendo nexo para generar nuevas oportunidades comerciales.",
      },
      vision: {
        title: "VISIÓN",
        text: "Ser el soporte logístico y plataforma de expansión mejor posicionado para las empresas que buscan afianzar y acrecentar su mercado.",
      },
      values: {
        title: "VALORES",
        text: "Transparencia, confianza, seguridad, expedición, organicidad, trabajo, creatividad, prudencia, templanza.",
      },
    },
    contact: {
      contactInfo: [
        {
          title: "Horario de atención",
          content: ["Lunes a viernes de 8hs a 18hs"],
        },
        {
          title: "Contacto",
          content: ["+59892125764", "info@handel.com"],
        },
      ],
      form: {
        title: "Hacé tu consulta",
        name: "Nombre y Apellido*",
        enterprise: "Empresa",
        email: "Email*",
        area: "Area",
        message: "Tu Mensaje*",
        submit: "Enviar",
        toastError: "La consulta no pudo ser enviada",
        toastSucces: "La consulta fue envidad de forma correcta",
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
    about: {
      mission: {
        title: "MISSION",
        text: "Provide personalized logistical and financial solutions, ensuring a professional and human service, transmitting solidity, trust and commitment to our clients. Being a link to generate new business opportunities.",
      },
      vision: {
        title: "VISION",
        text: "To be the best positioned logistics support and expansion platform for companies seeking to strengthen and increase their market.",
      },
      values: {
        title: "VALUES",
        text: "Transparency, trust, security, dispatch, organicity, work, creativity, prudence, temperance.",
      },
    },
    contact: {
      contactInfo: [
        {
          title: "Open hours",
          content: ["Monday to Friday from 8am to 6pm"],
        },
        {
          title: "Contact",
          content: ["+59892125764", "info@handel.com"],
        },
      ],
      form: {
        title: "Make your inquiry",
        name: "First and Last Name*",
        enterprise: "Enterprise",
        email: "Email*",
        area: "Area",
        message: "Your Message*",
        submit: "Send",
        toastError: "The query could not be sent",
        toastSucces: "The query was sent correctly",
      },
    },
  },
};

export default languageData;

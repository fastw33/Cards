export type Market = "latam" | "us";

export type SiteContent = {
  market: Market;
  locale: "es" | "en";
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    subtitle: string;
    initials: string;
  };
  contact: {
    whatsappUrl: string;
    email: string;
  };
  labels: {
    topnav: string;
    advantages: string;
    plans: string;
    contact: string;
    proof: string;
    marketSwitcher: string;
    latam: string;
    us: string;
    plansEyebrow: string;
    plansTitle: string;
    planIncludes: string;
    faqAria: string;
    floatingWhatsapp: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
  };
  proof: string[];
  metrics: Array<{
    value: string;
    label: string;
  }>;
  advantages: Array<{
    title: string;
    description: string;
    detail: string;
  }>;
  directory: Array<{
    name: string;
    role: string;
    tag: string;
  }>;
  phone: {
    ariaLabel: string;
    imageAlt: string;
    suite: string;
    pill: string;
    title: string;
    description: string;
    siteLabel: string;
    advisorsLabel: string;
    whatsappLabel: string;
  };
  productCard: {
    ariaLabel: string;
    frontSmall: string;
    frontTitle: string;
    socialLeft: string;
    socialRight: string;
    backTitle: string;
    backPhone: string;
    backFoot: string;
  };
  cardShowcase: {
    eyebrow: string;
    title: string;
    description: string;
    featuresLabel: string;
    features: string[];
  };
  advantagesSection: {
    eyebrow: string;
    title: string;
  };
  plans: Array<{
    name: string;
    price: string;
    description: string;
    action: string;
    whatsappMessage: string;
    features: string[];
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  cta: {
    eyebrow: string;
    title: string;
    action: string;
  };
};

const contact = {
  whatsappUrl: "https://wa.me/573019565508",
  email: "hola@genika.co"
};

export const siteByMarket: Record<Market, SiteContent> = {
  latam: {
    market: "latam",
    locale: "es",
    meta: {
      title: "Genika | Tarjetas inteligentes y directorios",
      description:
        "Tarjetas inteligentes Genika con directorio, catalogo y datos comerciales actualizables para empresas."
    },
    brand: {
      name: "Genika",
      subtitle: "Tarjetas + directorio digital",
      initials: "G"
    },
    contact,
    labels: {
      topnav: "Secciones principales",
      advantages: "Ventajas",
      plans: "Planes",
      contact: "Contacto",
      proof: "Incluye",
      marketSwitcher: "Cambiar mercado e idioma",
      latam: "LATAM",
      us: "US",
      plansEyebrow: "Incluye",
      plansTitle: "Compara el alcance.",
      planIncludes: "Incluye",
      faqAria: "Preguntas frecuentes",
      floatingWhatsapp: "Click WhatsApp"
    },
    hero: {
      eyebrow: "Venta sin reimpresiones",
      title: "Tarjetas inteligentes para negocios que crecen.",
      description:
        "Entregas una tarjeta fisica y Genika mantiene vivo el destino digital: contacto, catalogo, equipo, redes y datos comerciales desde un solo enlace.",
      primaryAction: "Cotizar tarjetas",
      secondaryAction: "Ver ventajas"
    },
    proof: ["Cambio de numero", "Catalogo activo", "Directorio por equipo", "Datos periodicos"],
    metrics: [
      { value: "2000", label: "Unidades en formato eficiente para campanas y equipos." },
      { value: "2x", label: "Mas aprovechamiento frente a una tarjeta convencional." },
      { value: "0", label: "Reimpresiones por cambios de numero, catalogo o asesores." }
    ],
    advantages: [
      {
        title: "Tarjeta para siempre",
        description: "La tarjeta sigue funcionando aunque cambie el numero, el catalogo o el equipo.",
        detail: "No pierdes material ya entregado."
      },
      {
        title: "Ahorro real",
        description: "Un formato eficiente para campanas de alto volumen y equipos comerciales.",
        detail: "Mas aprovechamiento frente a una tarjeta convencional."
      },
      {
        title: "Menos desperdicio",
        description: "Los cambios se hacen en el destino digital, sin botar tarjetas por datos vencidos.",
        detail: "Una venta mas limpia y sostenible."
      },
      {
        title: "Contacto facil",
        description: "El cliente entiende de inmediato donde tocar y con quien hablar.",
        detail: "Menos preguntas, mas conversaciones."
      },
      {
        title: "Rapido y agil",
        description: "Reduce pasos: no busca numeros, no guarda contactos y no espera respuesta interna.",
        detail: "La accion queda a un toque."
      },
      {
        title: "Canales diversos",
        description: "Conecta WhatsApp, redes, agenda, ubicacion, campanas o landing desde la misma tarjeta.",
        detail: "Un solo punto para varias rutas de venta."
      },
      {
        title: "Catalogo activo",
        description: "Muestra productos o servicios sin depender de folletos impresos que se desactualizan.",
        detail: "Ideal para rotacion, temporadas y ofertas."
      },
      {
        title: "Datos periodicos",
        description:
          "En el plan avanzado puedes revisar movimiento digital para entender interes y oportunidades.",
        detail: "Mejor informacion para vender mejor."
      }
    ],
    directory: [
      { name: "Asesor 01", role: "Representante comercial", tag: "WhatsApp" },
      { name: "Asesor 02", role: "Atencion internacional", tag: "Agenda" },
      { name: "Asesor 03", role: "Ventas corporativas", tag: "Perfil" },
      { name: "Soporte", role: "Atencion al cliente", tag: "Chat" }
    ],
    phone: {
      ariaLabel: "Vista previa del producto",
      imageAlt: "Producto Genika con tarjetas digitales y directorio",
      suite: "CONTACT SUITE",
      pill: "DIRECTORIO GENIKA",
      title: "Directorio de asesores",
      description: "Contacta por WhatsApp o agenda una llamada",
      siteLabel: "www.genika.co",
      advisorsLabel: "ASESORES",
      whatsappLabel: "WhatsApp"
    },
    productCard: {
      ariaLabel: "Vista 3D de tarjeta fisica inteligente",
      frontSmall: "PON ACA",
      frontTitle: "TU MARCA",
      socialLeft: "@tu_marca",
      socialRight: "Tu negocio",
      backTitle: "Contacto general",
      backPhone: "+57 300 000 0000",
      backFoot: "Escanea y abre el directorio"
    },
    cardShowcase: {
      eyebrow: "Producto fisico",
      title: "Una tarjeta. Muchos destinos.",
      description:
        "Una pieza fisica para reuniones, mostradores, domicilios o eventos. El cliente escanea y llega al canal correcto; tu negocio evita reimpresiones, desperdicio y costos por informacion desactualizada.",
      featuresLabel: "Incluye tarjeta inteligente",
      features: ["Tarjeta para siempre", "Destino actualizable", "Contacto directo"]
    },
    advantagesSection: {
      eyebrow: "Ventajas",
      title: "Ahorra, actualiza y vende."
    },
    plans: [
      {
        name: "Individual",
        price: "COP $501.216 + IVA",
        description: "Para contacto personal, marca comercial o punto de venta.",
        action: "Cotizar individual",
        whatsappMessage: "Hola Genika, quiero cotizar el plan Individual de tarjetas.",
        features: [
          "2000 tarjetas fisicas",
          "Subdominio y administracion por 12 meses",
          "2 a 4 usuarios",
          "Envio a cargo del comprador"
        ]
      },
      {
        name: "Equipo",
        price: "COP $800.400 + IVA",
        description: "Para empresas con minimo 3 empleados, directorio y catalogo.",
        action: "Cotizar equipo",
        whatsappMessage: "Hola Genika, quiero cotizar el plan Equipo con directorio y catalogo.",
        features: [
          "2000 tarjetas fisicas",
          "Subdominio y administracion por 12 meses",
          "2 a 4 usuarios",
          "Landing page",
          "Catalogo o brochure digital",
          "Ubicacion con Waze y Maps",
          "Envio a cargo del comprador"
        ]
      },
      {
        name: "Lectura de datos",
        price: "Lectura comercial",
        description: "Para cotizar segun necesidad despues de revisar alcance en una reunion.",
        action: "Agendar lectura",
        whatsappMessage: "Hola Genika, quiero agendar una lectura comercial para el plan de datos.",
        features: ["Reunion de alcance", "Entrega periodica de data", "Seguimiento de interes"]
      }
    ],
    faq: [
      {
        question: "La tarjeta se vence?",
        answer:
          "No. El codigo apunta a una URL que Genika administra, por eso podemos actualizar informacion sin cambiar la tarjeta."
      },
      {
        question: "Que pasa si cambia el numero?",
        answer: "Actualizamos el destino digital y las tarjetas ya impresas siguen funcionando."
      },
      {
        question: "Para que sirve el catalogo?",
        answer: "Para mostrar productos o servicios desde la misma tarjeta y abrir mas canales de venta."
      },
      {
        question: "Por que reduce desperdicio?",
        answer: "Porque cada cambio se resuelve en el destino digital, sin desechar material ya entregado."
      },
      {
        question: "Puedo cambiar contactos?",
        answer:
          "Si. Genika puede actualizar numeros, cargos, enlaces o catalogo para mantener activa la misma tarjeta."
      },
      {
        question: "Ayuda a vender mejor?",
        answer:
          "Si. Ordena contacto, catalogo y canales de venta para que el cliente llegue rapido a la accion correcta."
      }
    ],
    cta: {
      eyebrow: "Cotizacion",
      title: "Cotiza tus tarjetas Genika.",
      action: "Cotizar por WhatsApp"
    }
  },
  us: {
    market: "us",
    locale: "en",
    meta: {
      title: "Genika | Smart cards and business directories",
      description:
        "Genika smart cards with editable contact pages, catalogs, team directories and commercial data for businesses."
    },
    brand: {
      name: "Genika",
      subtitle: "Smart cards + digital directory",
      initials: "G"
    },
    contact,
    labels: {
      topnav: "Main sections",
      advantages: "Benefits",
      plans: "Plans",
      contact: "Contact",
      proof: "Included",
      marketSwitcher: "Change market and language",
      latam: "LATAM",
      us: "US",
      plansEyebrow: "Included",
      plansTitle: "Compare the scope.",
      planIncludes: "Includes",
      faqAria: "Frequently asked questions",
      floatingWhatsapp: "Click WhatsApp"
    },
    hero: {
      eyebrow: "Sell without reprints",
      title: "Smart cards for businesses that grow.",
      description:
        "Hand out one physical card and Genika keeps the digital destination alive: contact, catalog, team, social links and commercial data from one link.",
      primaryAction: "Quote cards",
      secondaryAction: "See benefits"
    },
    proof: ["Number changes", "Live catalog", "Team directory", "Periodic data"],
    metrics: [
      { value: "2000", label: "Units in an efficient format for campaigns and teams." },
      { value: "2x", label: "More value compared with a conventional business card." },
      { value: "0", label: "Reprints when numbers, catalogs or advisors change." }
    ],
    advantages: [
      {
        title: "Built to last",
        description: "The card keeps working even when the phone number, catalog or team changes.",
        detail: "Already delivered cards keep their value."
      },
      {
        title: "Real savings",
        description: "An efficient format for high-volume campaigns and commercial teams.",
        detail: "More value than a conventional business card."
      },
      {
        title: "Less waste",
        description: "Updates happen on the digital destination, without throwing away printed cards.",
        detail: "A cleaner and more sustainable sale."
      },
      {
        title: "Easy contact",
        description: "Customers immediately understand where to tap and who to contact.",
        detail: "Fewer questions, more conversations."
      },
      {
        title: "Fast and agile",
        description: "Fewer steps: no searching numbers, saving contacts or waiting for internal routing.",
        detail: "The action is one tap away."
      },
      {
        title: "Multiple channels",
        description: "Connect WhatsApp, social links, booking, location, campaigns or landing pages.",
        detail: "One card, several sales paths."
      },
      {
        title: "Live catalog",
        description: "Show products or services without relying on printed material that expires quickly.",
        detail: "Ideal for rotation, seasons and offers."
      },
      {
        title: "Periodic data",
        description: "The advanced plan helps review digital movement to understand interest and opportunity.",
        detail: "Better information to sell better."
      }
    ],
    directory: [
      { name: "Advisor 01", role: "Sales representative", tag: "WhatsApp" },
      { name: "Advisor 02", role: "International support", tag: "Booking" },
      { name: "Advisor 03", role: "Corporate sales", tag: "Profile" },
      { name: "Support", role: "Customer service", tag: "Chat" }
    ],
    phone: {
      ariaLabel: "Product preview",
      imageAlt: "Genika product with smart cards and team directory",
      suite: "CONTACT SUITE",
      pill: "GENIKA DIRECTORY",
      title: "Advisor directory",
      description: "Contact by WhatsApp or book a call",
      siteLabel: "www.genika.co",
      advisorsLabel: "ADVISORS",
      whatsappLabel: "WhatsApp"
    },
    productCard: {
      ariaLabel: "3D preview of a physical smart card",
      frontSmall: "ADD YOUR",
      frontTitle: "BRAND",
      socialLeft: "@your_brand",
      socialRight: "Your business",
      backTitle: "Main contact",
      backPhone: "+1 000 000 0000",
      backFoot: "Scan and open the directory"
    },
    cardShowcase: {
      eyebrow: "Physical product",
      title: "One card. Many destinations.",
      description:
        "A physical card for meetings, counters, deliveries and events. Customers scan and reach the right channel while your business avoids reprints, waste and outdated information.",
      featuresLabel: "Smart card includes",
      features: ["Long-life card", "Editable destination", "Direct contact"]
    },
    advantagesSection: {
      eyebrow: "Benefits",
      title: "Save, update and sell."
    },
    plans: [
      {
        name: "Individual",
        price: "USD 250 + TAXES",
        description: "For a personal contact, commercial brand or sales point.",
        action: "Quote individual",
        whatsappMessage: "Hello Genika, I want to quote the Individual card plan.",
        features: [
          "2,000 physical cards",
          "Subdomain and 1 year administration",
          "2 to 4 users",
          "Shipping charged to buyer"
        ]
      },
      {
        name: "Team",
        price: "USD 450 + TAXES",
        description: "For companies with at least 3 employees, a directory and catalog.",
        action: "Quote team",
        whatsappMessage: "Hello Genika, I want to quote the Team plan with directory and catalog.",
        features: [
          "2,000 physical cards",
          "Subdomain and 1 year administration",
          "2 to 4 users",
          "Landing page",
          "Digital catalog or brochure",
          "Waze and Maps location",
          "Shipping charged to buyer"
        ]
      },
      {
        name: "Data review",
        price: "Commercial read",
        description: "Quoted after a meeting to define scope and business needs.",
        action: "Book review",
        whatsappMessage: "Hello Genika, I want to book a commercial data review.",
        features: ["Scope meeting", "Periodic data delivery", "Interest tracking"]
      }
    ],
    faq: [
      {
        question: "Does the card expire?",
        answer:
          "No. The code points to a URL managed by Genika, so information can be updated without changing the card."
      },
      {
        question: "What if the number changes?",
        answer: "We update the digital destination and the already printed cards keep working."
      },
      {
        question: "What is the catalog for?",
        answer: "It lets the business show products or services from the same card and open more sales channels."
      },
      {
        question: "Why does it reduce waste?",
        answer: "Each update happens digitally, without discarding material that has already been delivered."
      },
      {
        question: "Can contacts be changed?",
        answer: "Yes. Genika can update numbers, roles, links or catalog content to keep the same card active."
      },
      {
        question: "Does it help sales?",
        answer:
          "Yes. It organizes contact, catalog and sales channels so customers get to the right action faster."
      }
    ],
    cta: {
      eyebrow: "Quote",
      title: "Quote your Genika cards.",
      action: "Quote on WhatsApp"
    }
  }
};

export const site = siteByMarket.latam;
export type Site = SiteContent;

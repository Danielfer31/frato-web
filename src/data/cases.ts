export type InstagramLink = {
  label: string;
  url: string;
  type: "post" | "reel" | "highlight" | "pending";
};

export type AssetSlot = {
  label: string;
  kind: "logo" | "photo" | "reel" | "story" | "testimonial" | "metric";
  status: "pending" | "curated" | "authorized";
  image?: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  sector: string;
  status: "ready-structure" | "curating" | "needs-assets";
  summary: string;
  challenge: string;
  work: string[];
  evidence: string[];
  logo: string;
  instagramLinks: InstagramLink[];
  assetSlots: AssetSlot[];
  authorized: boolean;
  accent: string;
};

export const WHATSAPP_URL =
  "https://wa.me/573021114427?text=Hola%20frato%2C%20quiero%20hablar%20sobre%20mi%20marca";

export const INSTAGRAM_URL = "https://www.instagram.com/fratocol/";

export const featuredCases: CaseStudy[] = [
  {
    slug: "roble",
    name: "Roble",
    sector: "Gastronomia",
    status: "curating",
    summary:
      "Marca gastronomica activa dentro del ecosistema frato. La web queda lista para mostrar campanas, piezas de contenido y narrativa de temporada.",
    challenge:
      "Convertir momentos de producto y experiencia en una historia reconocible sin depender solo de publicaciones sueltas.",
    work: [
      "Narrativa para activaciones gastronomicas.",
      "Produccion de piezas para reels y feed.",
      "Cobertura de momentos comerciales de alto movimiento.",
    ],
    evidence: [
      "Reels publicos curables desde @fratocol.",
      "Espacios para foto de producto, video cover y detras de camaras.",
      "Resultados pendientes por confirmar antes de publicar metricas.",
    ],
    logo: "/assets/brands/02_robleb.png",
    instagramLinks: [
      {
        label: "La Casa Roble",
        type: "reel",
        url: "https://www.instagram.com/fratocol/reel/DXSVY95ASHz/",
      },
      {
        label: "Cobertura Burger Master",
        type: "reel",
        url: "https://www.instagram.com/fratocol/reel/DXurJYZkSsE/",
      },
    ],
    assetSlots: [
      { label: "Logo autorizado", kind: "logo", status: "authorized", image: "/assets/brands/02_robleb.png" },
      { label: "Foto de producto", kind: "photo", status: "pending" },
      { label: "Portada reel", kind: "reel", status: "curated" },
      { label: "Testimonio", kind: "testimonial", status: "pending" },
    ],
    authorized: false,
    accent: "#e65f40",
  },
  {
    slug: "agape",
    name: "Agape",
    sector: "Gastronomia",
    status: "needs-assets",
    summary:
      "Cliente fundador identificado en la matriz de marcas. La ficha se prepara para recibir identidad, fotos y publicaciones aprobadas.",
    challenge:
      "Ordenar la presencia visual y narrativa de una marca que necesita confianza, consistencia y cercania.",
    work: [
      "Estructura narrativa de marca.",
      "Espacios para piezas de contenido y banco fotografico.",
      "Curaduria de publicaciones cuando se confirme el material.",
    ],
    evidence: [
      "Logo identificado en la matriz del PDF de servicios.",
      "Pendiente captura o autorizacion de publicaciones especificas.",
      "Galeria lista para fotos de equipo, producto y experiencia.",
    ],
    logo: "/assets/brands/01_agape.png",
    instagramLinks: [
      {
        label: "Si nos preguntan que es cocina",
        type: "reel",
        url: "https://www.instagram.com/fratocol/reel/C_V2079xvx6/",
      },
      {
        label: "Detras de camaras Agape",
        type: "reel",
        url: "https://www.instagram.com/fratocol/reel/DO7LDb0CaUk/",
      },
      {
        label: "Experiencia Agape",
        type: "reel",
        url: "https://www.instagram.com/fratocol/reel/DO10SX9kmIT/",
      },
    ],
    assetSlots: [
      { label: "Logo autorizado", kind: "logo", status: "authorized", image: "/assets/brands/01_agape.png" },
      { label: "Foto de experiencia", kind: "photo", status: "pending" },
      { label: "Historia destacada", kind: "story", status: "pending" },
      { label: "Resultado confirmado", kind: "metric", status: "pending" },
    ],
    authorized: false,
    accent: "#f2bc55",
  },
  {
    slug: "mandato",
    name: "Mandato",
    sector: "Gastronomia",
    status: "curating",
    summary:
      "Caso preparado para mostrar como una marca gastronomica puede construir expectativa, personaje y memoria alrededor de una campana.",
    challenge:
      "Hacer que el contenido no se sienta como promocion aislada, sino como una narrativa que invite a seguir la historia.",
    work: [
      "Concepto narrativo de campana.",
      "Guion y ejecucion para reels.",
      "Piezas de expectativa y cobertura.",
    ],
    evidence: [
      "Reel publico de campana en @fratocol.",
      "Espacio para carrusel de piezas y escenas de rodaje.",
      "Metricas pendientes por confirmar.",
    ],
    logo: "/assets/brands/27_mandato.png",
    instagramLinks: [
      {
        label: "Nada fue casualidad",
        type: "reel",
        url: "https://www.instagram.com/fratocol/reel/DXNZuxwjxoa/",
      },
      {
        label: "Cobertura Burger Master",
        type: "reel",
        url: "https://www.instagram.com/fratocol/reel/DXurJYZkSsE/",
      },
    ],
    assetSlots: [
      { label: "Logo autorizado", kind: "logo", status: "authorized", image: "/assets/brands/27_mandato.png" },
      { label: "Portada reel", kind: "reel", status: "curated" },
      { label: "Foto de campana", kind: "photo", status: "pending" },
      { label: "Testimonio", kind: "testimonial", status: "pending" },
    ],
    authorized: false,
    accent: "#d7b46a",
  },
  {
    slug: "caribu",
    name: "Caribu",
    sector: "Gastronomia",
    status: "needs-assets",
    summary:
      "Marca priorizada desde la matriz de clientes. La pagina queda lista para cargar identidad, fotos y piezas cuando esten aprobadas.",
    challenge:
      "Convertir una marca reconocible en una historia digital que muestre producto, lugar y personalidad.",
    work: [
      "Curaduria de identidad visual desde la matriz.",
      "Estructura de caso para fotos, reels y resultados.",
      "Preparacion de galeria para contenido real.",
    ],
    evidence: [
      "Logo identificado en la matriz del PDF de servicios.",
      "Posts y reels pendientes por curar con el usuario.",
      "Espacios de media preparados sin inventar trabajo.",
    ],
    logo: "/assets/brands/26_caribu.png",
    instagramLinks: [
      {
        label: "Material por curar",
        type: "pending",
        url: INSTAGRAM_URL,
      },
    ],
    assetSlots: [
      { label: "Logo autorizado", kind: "logo", status: "authorized", image: "/assets/brands/26_caribu.png" },
      { label: "Foto de producto", kind: "photo", status: "pending" },
      { label: "Reel destacado", kind: "reel", status: "pending" },
      { label: "Resultado confirmado", kind: "metric", status: "pending" },
    ],
    authorized: false,
    accent: "#f1c232",
  },
  {
    slug: "koncres",
    name: "Koncres",
    sector: "Construccion e interiorismo",
    status: "curating",
    summary:
      "Caso con material publico disponible para mostrar procesos, precision y transformacion de espacios.",
    challenge:
      "Hacer visible el criterio detras de cada proceso, no solo el resultado final de obra o diseno.",
    work: [
      "Narrativa de proceso y transformacion.",
      "Reels sobre accion, detalle y ejecucion.",
      "Contenido para mostrar vision hecha realidad.",
    ],
    evidence: [
      "Reels y secuencias publicas curables desde @fratocol.",
      "Espacios para antes/despues, video cover y procesos.",
      "Resultados pendientes por confirmar antes de publicarse.",
    ],
    logo: "/assets/brands/22_koncres.png",
    instagramLinks: [
      {
        label: "Procesos Koncres",
        type: "reel",
        url: "https://www.instagram.com/fratocol/reel/DXNCy0zCdKp/",
      },
      {
        label: "Manos que transforman",
        type: "post",
        url: "https://www.instagram.com/fratocol/p/DWzl-OFAdbw/",
      },
    ],
    assetSlots: [
      { label: "Logo autorizado", kind: "logo", status: "authorized", image: "/assets/brands/22_koncres.png" },
      { label: "Foto de proceso", kind: "photo", status: "pending" },
      { label: "Antes y despues", kind: "photo", status: "pending" },
      { label: "Portada reel", kind: "reel", status: "curated" },
    ],
    authorized: false,
    accent: "#c9d3e8",
  },
  {
    slug: "cda-santa-cruz",
    name: "CDA Santa Cruz",
    sector: "Servicios automotrices",
    status: "needs-assets",
    summary:
      "Caso preparado para una empresa de diagnostico automotriz. La ficha prioriza claridad, confianza y evidencia operativa.",
    challenge:
      "Comunicar un servicio tecnico con confianza humana, orden visual y prueba de proceso.",
    work: [
      "Estructura de contenido educativo y de confianza.",
      "Espacios para fotos de inspeccion, equipo y sede.",
      "Plantilla de resultados cuando existan metricas aprobadas.",
    ],
    evidence: [
      "Cliente mencionado en el playbook como activo.",
      "Material visual pendiente por recibir o curar.",
      "Galeria lista para piezas tecnicas y humanas.",
    ],
    logo: "/assets/brands/07_cda_santa_cruz.png",
    instagramLinks: [
      {
        label: "Entre motores y creatividad",
        type: "reel",
        url: "https://www.instagram.com/fratocol/reel/DBzZKaBv4LF/",
      },
      {
        label: "Detras de cada vehiculo",
        type: "reel",
        url: "https://www.instagram.com/fratocol/reel/DPzhAmODzTn/",
      },
    ],
    assetSlots: [
      { label: "Logo autorizado", kind: "logo", status: "authorized", image: "/assets/brands/07_cda_santa_cruz.png" },
      { label: "Foto de sede", kind: "photo", status: "pending" },
      { label: "Proceso tecnico", kind: "photo", status: "pending" },
      { label: "Testimonio", kind: "testimonial", status: "pending" },
    ],
    authorized: false,
    accent: "#7da4ff",
  },
];

export const getCaseBySlug = (slug: string) =>
  featuredCases.find((caseStudy) => caseStudy.slug === slug);

export type BrandInventoryItem = {
  name: string;
  sector: string;
  priority: boolean;
  source: string;
  authorization: "pending" | "approved";
};

export const brandInventory: BrandInventoryItem[] = [
  {
    name: "Agape",
    sector: "Gastronomia",
    priority: true,
    source: "FRATO SERVICIOS .pdf, pagina 2",
    authorization: "pending",
  },
  {
    name: "Roble",
    sector: "Gastronomia",
    priority: true,
    source: "FRATO SERVICIOS .pdf, pagina 2",
    authorization: "pending",
  },
  {
    name: "Mandato",
    sector: "Gastronomia",
    priority: true,
    source: "FRATO SERVICIOS .pdf, pagina 2",
    authorization: "pending",
  },
  {
    name: "Caribu",
    sector: "Gastronomia",
    priority: true,
    source: "FRATO SERVICIOS .pdf, pagina 2",
    authorization: "pending",
  },
  {
    name: "Koncres",
    sector: "Construccion e interiorismo",
    priority: true,
    source: "FRATO SERVICIOS .pdf, pagina 2",
    authorization: "pending",
  },
  {
    name: "CDA Santa Cruz",
    sector: "Servicios automotrices",
    priority: true,
    source: "Playbook frato, cartera activa 2026-05",
    authorization: "pending",
  },
  {
    name: "Le Bistrot",
    sector: "Gastronomia",
    priority: false,
    source: "FRATO SERVICIOS .pdf, pagina 2",
    authorization: "pending",
  },
  {
    name: "Tambo",
    sector: "Gastronomia",
    priority: false,
    source: "FRATO SERVICIOS .pdf, pagina 2",
    authorization: "pending",
  },
  {
    name: "Beer Cave",
    sector: "Gastronomia",
    priority: false,
    source: "FRATO SERVICIOS .pdf, pagina 2",
    authorization: "pending",
  },
  {
    name: "Palacio del Adorno",
    sector: "Retail",
    priority: false,
    source: "FRATO SERVICIOS .pdf, pagina 2",
    authorization: "pending",
  },
  {
    name: "CVCQ",
    sector: "Servicios",
    priority: false,
    source: "FRATO SERVICIOS .pdf, pagina 2",
    authorization: "pending",
  },
  {
    name: "Masai",
    sector: "Gastronomia",
    priority: false,
    source: "FRATO SERVICIOS .pdf, pagina 2",
    authorization: "pending",
  },
];

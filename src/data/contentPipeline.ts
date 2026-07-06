export type PipelineStatus = "locked" | "curating" | "pending" | "ready";

export type ContentPipelineStep = {
  title: string;
  status: PipelineStatus;
  body: string;
  items: string[];
};

export const contentPipeline: ContentPipelineStep[] = [
  {
    title: "Identidad oficial",
    status: "locked",
    body: "El logo de frato queda bloqueado al manual. Las identidades de clientes se cargan solo desde archivos reales y autorizados.",
    items: ["Logo frato oficial", "Matriz de marcas del PDF", "Versiones aprobadas por cliente"],
  },
  {
    title: "Instagram curado",
    status: "curating",
    body: "Los posts y reels se inventarian por enlace publico para evitar descargas masivas o material fuera de permiso.",
    items: ["Reels publicos", "Posts por permalink", "Historias solo con captura o exportacion autorizada"],
  },
  {
    title: "Banco de trabajo",
    status: "pending",
    body: "Cada caso deja espacios premium para fotos de producto, rodaje, proceso, equipo, sede y detras de camaras.",
    items: ["Fotos horizontales", "Covers verticales", "Colaboradores y creditos"],
  },
  {
    title: "Evidencia publicada",
    status: "ready",
    body: "Los resultados, testimonios y metricas quedan separados para no inventar datos antes de confirmarlos.",
    items: ["Metricas aprobadas", "Testimonios", "Antes y despues"],
  },
];

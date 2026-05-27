# frato-web

## What This Is

Sitio web institucional + comercial para **frato**, agencia boutique de narrativa de marca y contenido creativo con sede en Montería, Colombia. El sitio funciona como **filtro de leads cualificados** (no brochure genérico): comunica filosofía, presenta portafolio extendido por caso, publica narrativa editorial (blog), vende paquetes de servicios con checkout (FEE + planes mensuales) y centraliza la operación a través de un panel admin que gestiona contenido, leads y media. Audiencia: marcas medianas y grandes de sectores hotelería, construcción, salud, cooperativas y gastronómico selectivo que valoran estrategia sobre producción y aceptan el proceso FEE como entrada obligatoria.

## Core Value

**Convertir visitas en leads cualificados que entiendan la metodología FEE y aceptan invertir desde $800.000 COP en estrategia antes de cualquier producción.**

Todo lo demás (blog, portafolio, panel admin) sirve a este objetivo. Si el sitio gana tráfico pero no genera leads que pasan por FEE, el sitio falla.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] **BRAND-01**: Sistema visual fiel al playbook (paleta `#0D1B2A`/`#0F2235`/`#E8572A`/`#FFFFFF`/`#8BA0B5`/`#1E3448`, tipografía Altone con fallbacks, logo + bombillo, noise overlay)
- [ ] **BRAND-02**: Voz y tono según playbook sección 4 (manifiesto "no trabajamos con marcas, trabajamos con personas")
- [ ] **LAND-01**: Home con hero manifiesto, prueba social ("+30 marcas"), filosofía resumida, FEE timeline, servicios, portafolio destacado, equipo, CTA final
- [ ] **LAND-02**: Página `/nosotros` con historia oficial, 8 principios filosóficos, equipo (Felipe + Rosa + vacante creador), red de aliados
- [ ] **PORT-01**: Index `/portafolio` con grid de casos filtrable por sector/servicio/año
- [ ] **PORT-02**: Página `/portafolio/[slug]` con caso extendido (problema, estrategia, ejecución, métricas, antes/después)
- [ ] **PORT-03**: Content collection Astro para casos en MDX
- [ ] **SERV-01**: Catálogo `/servicios` con 6 propios + 8 aliados + FEE explicado
- [ ] **SERV-02**: Detalle `/servicios/[slug]` por paquete (FRATO $1.5M, FRATO PRO $1.8M, FRATO PRO MAX $3.5M, FEE $800K)
- [ ] **SERV-03**: Checkout Stripe para FEE + paquetes (sesión de pago, webhook, confirmación)
- [ ] **BLOG-01**: Index `/blog` con posts paginados + categorías + tags
- [ ] **BLOG-02**: Detalle `/blog/[slug]` con MDX, autor, tiempo lectura, share, related posts
- [ ] **BLOG-03**: RSS feed
- [ ] **CONT-01**: `/contacto` con form (nombre, email, marca, mensaje, servicio interesado), validación cliente
- [ ] **CONT-02**: Form server endpoint que persiste lead en Supabase + dispara email transaccional vía Resend
- [ ] **CONT-03**: Link WhatsApp real (número confirmado) + link Calendly para agendar reunión creativa
- [ ] **ADMIN-01**: Panel `/admin` con auth Supabase (magic link)
- [ ] **ADMIN-02**: CRUD casos de portafolio (crear, editar, publicar, despublicar)
- [ ] **ADMIN-03**: CRUD posts de blog
- [ ] **ADMIN-04**: CRUD paquetes de servicio
- [ ] **ADMIN-05**: Bandeja de leads con filtros, estado pipeline, notas internas
- [ ] **ADMIN-06**: Upload de media a Supabase Storage (imágenes, optimización astro:assets)
- [ ] **ADMIN-07**: Preview de contenido antes de publicar
- [ ] **DATA-01**: Schema Postgres (Supabase) con tablas `leads`, `cases`, `posts`, `services`, `orders`, `media` + RLS
- [ ] **SEO-01**: Meta OG + Twitter Card + JSON-LD `Organization`, `Article`, `Product`, `CreativeWork`
- [ ] **SEO-02**: Sitemap + robots.txt + canonical + `es-CO` hreflang
- [ ] **PERF-01**: Lighthouse ≥95 en performance, a11y, SEO, best practices (mobile + desktop)
- [ ] **PERF-02**: Imágenes via `astro:assets` (AVIF/WebP, lazy, responsive)
- [ ] **A11Y-01**: Contraste WCAG AA en todos los textos, `prefers-reduced-motion` honrado, navegación teclado completa, aria labels correctos
- [ ] **ANIM-01**: View Transitions Astro entre páginas + scroll-driven animations CSS nativas (sin lib pesada) + reveal-on-scroll con fallback no-JS
- [ ] **ANLY-01**: Analytics privacy-first (Plausible) integrado
- [ ] **LEGAL-01**: Aviso de privacidad + términos publicados + consentimiento cookies si aplica
- [ ] **DEPLOY-01**: Deploy a Vercel (preview por PR + producción), dominio custom configurado, SSL

### Out of Scope

- **App móvil nativa** — el sitio es responsive, no se requiere app nativa todavía; ROI no justificado para 2026
- **Multi-idioma (inglés)** — mercado actual es Colombia/Caribe en español; revisitar si entra cliente internacional
- **E-commerce de productos físicos** — frato vende servicios, no merchandising
- **Sistema de tickets/helpdesk** — la operación cliente se gestiona en Notion (portal cliente), no se duplica en la web
- **Membership/cursos online** — no es el modelo de negocio actual
- **Chat en vivo** — WhatsApp + Calendly cubren la necesidad
- **Foros/comunidad pública** — no estratégico para posicionamiento boutique
- **Pasarelas de pago locales** (PSE, Nequi) — Stripe internacional es suficiente para tickets actuales; reevaluar si la mayoría de clientes lo solicita

## Context

**Marca + estrategia:** Fuente única de verdad en `docs/PLAYBOOK_FRATO.md` (12 secciones, derivado de FRATO_CONTEXTO_1.docx + FRATO_SERVICIOS.pdf + fonts Altone Trial).

**Estado previo:** Existen dos maquetas HTML estáticas (`version_raiz/index.html`, `version_proyectos/index.html`) sin Git, sin backend, con datos ficticios. Auditadas en `docs/auditoria-sistemas-frato.md`. Sirven como referencia visual, no como base de código a portar.

**Operación cliente:** frato usa Notion como portal por cliente. La web NO duplica ese portal; sí enlaza al onboarding FEE.

**Aliados como activo:** La red (Angie, Zayda, Big Sins, Chica Noticias, Francisco, Cero Uno, aliado Perú) es diferenciador comercial real. Debe mostrarse en la web.

**Cartera actual vs ideal:** Mayoría de clientes hoy son restaurantes; objetivo 2026 es migrar a hotelería, construcción, cooperativas, salud. La narrativa del sitio debe atraer al cliente ideal, no al actual.

**Riesgos comerciales heredados:** WhatsApp placeholder en maquetas, forms sin backend, naming Frato vs Frata (resuelto: `frato`).

## Constraints

- **Tech stack**: Astro 4+ + Tailwind CSS + TypeScript + Supabase (Postgres + Auth + Storage) + Stripe + Resend — definido por usuario en discusión previa
- **Hosting**: Vercel (preview + prod) — gratis tier suficiente para tráfico inicial
- **Tipografía**: Altone Trial tiene licencia de prueba; **bloqueo legal** hasta confirmar licencia comercial o sustituir antes de lanzamiento público
- **Datos cliente**: Logos de marca, fotos de equipo, casos publicables requieren autorización de Felipe Garzón antes de subirse
- **Pricing público**: Decisión pendiente — mostrar precios o "consultar". Default actual: mostrar (transparencia es principio de marca)
- **Idioma**: Español Colombia (es-CO), neutro, sin regionalismos costeños cerrados
- **Performance**: Lighthouse 95+ obligatorio (criterio de marca: percepción premium)
- **A11y**: WCAG AA mínimo, idealmente AAA en contraste
- **SEO**: Schema.org marcado obligatorio (Organization, CreativeWork, Product, Article)
- **Seguridad**: Supabase RLS estricto, secrets sólo en env vars Vercel, Stripe webhooks firmados
- **Presupuesto infra**: $0 inicial (Vercel free + Supabase free + Resend free + Plausible $9/mes opcional); escalar sólo si tráfico lo justifica
- **Equipo dev**: 1 desarrollador (Daniel/IA) + Felipe revisor de contenido

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Astro + Tailwind | Static-first + SSR híbrido + Content Collections MDX + view-transitions nativas; ideal para landing+blog+portafolio con SEO crítico | — Pending |
| Supabase como backend único | Postgres + Auth + Storage en un solo servicio gratis; RLS robusto; admin propio sobre la misma DB | — Pending |
| Stripe checkout (no integración custom) | Reduce riesgo PCI; sesiones hospedadas; fácil reembolso | — Pending |
| Resend (no SMTP propio) | Email transaccional limpio, plantillas React Email, 100 emails/día gratis | — Pending |
| Plausible (no GA4) | Privacy-first, sin banner de cookies necesario en Colombia, alineado con principio de transparencia | — Pending |
| Vertical MVP slicing | Cada fase entrega slice end-to-end visible; valida assumptions más rápido | — Pending |
| Modelo de IA: Quality (Opus) | Proyecto crítico de marca, agente de research/roadmap necesita profundidad | — Pending |
| `frato` minúscula sin acento | Decisión confirmada por usuario tras auditar contexto interno | ✓ Good |
| FEE como entrada obligatoria comunicada en sitio | Filtra clientes equivocados; alinea expectativas; protege rentabilidad | — Pending |
| `.planning/` trackeada en Git | Trazabilidad de decisiones, soporta colaboración futura | ✓ Good |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-05-27 after initialization*

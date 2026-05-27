# CLAUDE.md — frato-web

> Contexto persistente para Claude Code. Lee este archivo PRIMERO en cada sesión.
> Última actualización: 2026-05-27

---

## 0. Modo de trabajo

- **Idioma:** usuario escribe en español → responder en español. Código, commits, identifiers → inglés.
- **Caveman mode:** si hook `CAVEMAN MODE ACTIVE` está activo, drop articles/filler/pleasantries. Code blocks unchanged. Errors quoted exact.
- **Skills:** invocar via `Skill` tool antes de cualquier respuesta si hay ≥1% match (ver CLAUDE.md global).
- **Workflow:** GSD (Get Shit Done) — `.planning/` es fuente única de verdad estructural.

---

## 1. Identidad proyecto

**frato-web** — Sitio web institucional + comercial para **frato**, agencia boutique de narrativa de marca en Montería, Colombia.

**Core value:** Convertir visitas en leads cualificados que entiendan la metodología FEE y aceptan invertir desde $800.000 COP en estrategia antes de cualquier producción.

**Fuente única verdad de marca:** [PLAYBOOK_FRATO.md](../docs/PLAYBOOK_FRATO.md) (12 secciones, en repo padre)

**Naming oficial:** `frato` minúscula sin acento. Handle: `@fratocol`. Tagline: *"Narrativa estratégica para marcas con visión"*. Manifiesto: *"No trabajamos con marcas. Trabajamos con personas."*

---

## 2. Stack técnico

```
Runtime:        Node 22.12+
Framework:      Astro 6 (output: 'server' + prerender = true explícito)
Styling:        Tailwind v4 via @tailwindcss/vite (NO @astrojs/tailwind)
Content:        Content Layer API (NO legacy Collections)
Auth+DB:        Supabase (Postgres + Auth + Storage) via @supabase/ssr
Validation:     Zod v4 Mini (cliente) + Zod regular (server)
Iconos:         astro-icon + Iconify (Lucide + Phosphor + bombillo custom)
Payments:       Stripe Checkout hosted + webhook Node runtime
Email:          Resend + React Email
Analytics:      Plausible (NO GA4 — Ley 1581 Colombia)
Hosting:        Vercel (scopes Production + Preview + Development separados)
Anti-spam:      Cloudflare Turnstile
Anim:           CSS-native + View Transitions Astro + scroll-driven
Facturación:    Alegra/Siigo/Loggro DIAN (pendiente integración)
```

### Sistema visual (tokens)

```css
--frato-bg:       #0D1B2A   /* fondo principal */
--frato-surface:  #0F2235   /* cards, secciones elevadas */
--frato-orange:   #E8572A   /* acento, CTAs (escasez) */
--frato-white:    #FFFFFF   /* texto primario */
--frato-muted:    #8BA0B5   /* secundario corto solamente — falla AAA en cuerpo largo */
--frato-border:   #1E3448   /* divisores */
```

### Tipografía

- **Display:** Altone Trial Bold (⚠️ licencia trial — confirmar comercial antes de prod)
- **Body:** Altone Trial Regular + Oblique
- **Fallback OFL:** Inter, DM Sans, system-ui
- **Decisión pendiente:** sustituir por Inter/Geist/Manrope si Altone no se licencia

---

## 3. Estructura propuesta del proyecto

```
frato-web/
├── .planning/                    GSD workflow (committed)
│   ├── PROJECT.md                contexto + reqs activos
│   ├── REQUIREMENTS.md           (pendiente)
│   ├── ROADMAP.md                (pendiente)
│   ├── STATE.md                  (pendiente)
│   ├── config.json
│   └── research/
│       ├── STACK.md              ✓
│       ├── FEATURES.md           ✓
│       ├── ARCHITECTURE.md       ✓
│       ├── PITFALLS.md           ❌ FALTA
│       └── SUMMARY.md            ❌ FALTA
├── src/                          (no creado todavía)
│   ├── pages/
│   │   ├── index.astro           landing (prerender = true)
│   │   ├── nosotros.astro        (prerender = true)
│   │   ├── servicios/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── portafolio/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── contacto.astro
│   │   ├── legal/{privacidad,terminos}.astro
│   │   ├── checkout/[id].astro   (SSR)
│   │   ├── admin/                (SSR, gated por middleware)
│   │   ├── auth/                 (SSR)
│   │   └── api/                  endpoints server
│   │       ├── contact.ts
│   │       ├── checkout.ts
│   │       ├── webhook/stripe.ts
│   │       └── admin/*.ts
│   ├── content/
│   │   ├── casos/*.mdx
│   │   └── blog/*.mdx
│   ├── components/
│   ├── layouts/
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── server.ts         (createServerClient + cookies)
│   │   │   ├── browser.ts        (createBrowserClient)
│   │   │   └── admin.ts          ⚠️ SERVER-ONLY — never import from client
│   │   ├── stripe.ts
│   │   └── resend.ts
│   ├── middleware.ts             auth + locals.user + admin gate
│   └── styles/tailwind.css
├── astro.config.mjs              integration: @astrojs/vercel
├── tailwind.config.mjs           tokens frato
└── package.json
```

---

## 4. Estado GSD workflow (al 60%)

```
[✓] git init
[✓] config.json + commit
[✓] PROJECT.md + commit
[✓] research/STACK.md
[✓] research/FEATURES.md
[✓] research/ARCHITECTURE.md
[ ] research/PITFALLS.md          ← NEXT
[ ] research/SUMMARY.md
[ ] REQUIREMENTS.md (con REQ-IDs)
[ ] ROADMAP.md (gsd-roadmapper, Vertical MVP)
[ ] STATE.md
[ ] CLAUDE.md gsd-generated (consolida este con boilerplate GSD)
[ ] Commit final
```

### Comandos retomar:

```bash
# Verificar estado actual
gsd-sdk query init.new-project | grep project_exists   # = true

# 1. PITFALLS research (si Agent falla, escribir inline)
# Template: C:\Users\USUARIO\.claude\get-shit-done\templates\research-project\PITFALLS.md

# 2. Synthesizer SUMMARY
# Agent subagent_type=gsd-research-synthesizer

# 3. REQUIREMENTS.md desde PROJECT.md Active + research

# 4. Roadmapper
# Agent subagent_type=gsd-roadmapper, model="quality"

# 5. CLAUDE.md GSD final + commit todo
gsd-sdk query generate-claude-md --output CLAUDE.md
gsd-sdk query commit "docs: create roadmap" --files .planning/ROADMAP.md .planning/STATE.md .planning/REQUIREMENTS.md CLAUDE.md
```

---

## 5. Decisiones técnicas (Key Decisions PROJECT.md)

| Decisión | Status |
|---|---|
| Astro 6 + Tailwind v4 | Pending |
| Supabase backend único | Pending |
| Stripe Checkout hosted | Pending |
| Resend email transaccional | Pending |
| Plausible (no GA4) | Pending |
| Vertical MVP slicing | Pending |
| Modelo IA: Opus quality en research/roadmap | Pending |
| `frato` minúscula sin acento | ✓ |
| FEE entrada obligatoria comunicada en sitio | Pending |
| `.planning/` trackeada en Git | ✓ |

---

## 6. Decisiones abiertas (bloqueantes)

1. Licencia comercial Altone (o sustituir OFL)
2. Número WhatsApp real (placeholder `573000000000`)
3. Autorización logos + casos clientes (flag `cliente_autorizo` en CMS)
4. Pricing público vs "consultar" (default: mostrar)
5. Calendly oficial o herramienta de agendamiento
6. Versión inglesa (out of scope confirmado)
7. Sectores prioritarios orden en hero
8. NDA mínimo casos publicables
9. Integración facturación DIAN (Alegra/Siigo/Loggro)
10. Política privacidad Colombia Ley 1581 (borrador legal)

---

## 7. Hallazgos críticos research (resumen)

### Stack (STACK.md)
- Astro 6 stable 2026 (Node 22.12+)
- `@supabase/ssr` no negociable
- Stripe webhook = Node runtime (NO Edge — necesita Node crypto)
- Zod v4 Mini en cliente (~1.9KB), Zod regular server
- astro-icon + Iconify para sprite SVG
- View Transitions + CSS-native > Motion/GSAP (Lighthouse 95+)

### Features (FEATURES.md)
- Table stakes: home, work index, case studies, services, about, contact, brief intake form
- **Differentiator #1:** case study structure (Context → Challenge → Approach → Work → Outcome con métricas)
- **FEE methodology = mayor asset comunicable** — página dedicada + cross-links desde cada caso
- **Three-tier service model:** Sprint (precio público) → Project (starting price + custom) → Retainer (discovery call)
- Anti-features: chat live, carousels hero, stock photos, awards page, generic 5-step process

### Architecture (ARCHITECTURE.md)
- Hybrid `output: 'server'` con `prerender = true` explícito en rutas marketing
- Single `src/middleware.ts` inyecta `locals.user` + `locals.supabase`
- Stripe webhook source of truth, raw body, `stripe_session_id UNIQUE` para idempotency
- Content Collections para casos+blog (git-versioned), Supabase para services/leads/orders/media
- Build order: Foundation → Design System → Content → Schema → Contact form → Auth+Admin → Stripe → Polish
- Service-role isolation: `lib/supabase/admin.ts` solo importable desde `src/pages/api/**`

### Pitfalls (PITFALLS.md — pendiente escribir)
Cobertura mínima requerida:
1. Olvidar `prerender = true` (Lighthouse cae)
2. `createClient` vs `createServerClient` Supabase SSR
3. Service-role key leak al cliente
4. Stripe webhook con body parseado pierde firma
5. Webhook sin idempotency = pagos duplicados
6. Altone Trial sin licencia comercial (bloqueo legal)
7. Logos clientes sin permiso (legal + reputacional)
8. Preview deployments usando producción Supabase
9. Forms sin rate-limit + captcha = spam farm
10. Magic link expired / redirect URL mal configurado
11. SPF/DKIM/DMARC no configurados antes de prod
12. SEO sin JSON-LD validado (Rich Results Test)
13. Contraste muted `#8BA0B5` sobre bg falla AAA texto largo
14. View Transitions rompiendo scripts entre páginas
15. Ley 1581 Colombia — aviso privacidad + consentimiento ausente
16. Factura DIAN si Frato cobra sin facturación electrónica

---

## 8. Identidad de marca esencial

### Voz y tono
- Persona: primera persona plural (nosotros)
- Tratamiento: "tú" (no "usted")
- Verbos preferidos: construir, mover, pensar, contar, entender, narrar, acompañar
- Verbos prohibidos: explotar, viralizar, hackear, disruptir
- Anglicismos OK solo si industria (branding, community management, pauta, reels, feed)

### 8 principios filosóficos
1. No trabajamos con marcas, trabajamos con personas
2. Creamos narrativa, no contenido
3. La organización es pilar de creación
4. La percepción vale más que la realidad funcional
5. La transparencia genera confianza
6. No buscamos clientes, creemos en la hermandad
7. Sentido por encima de estética
8. Sabemos decir no

### Servicios + precios

**FEE (obligatorio antes de cualquier paquete):** $800.000 COP pago único, 30 días (15 estructuración + 15 producción)

| Paquete mensual | Precio |
|---|---|
| FRATO | $1.500.000 |
| FRATO PRO | $1.800.000 |
| FRATO PRO MAX | $3.500.000 (incluye campaña Meta Ads) |

**Términos comerciales (NO negociables):**
- Pago anticipado siempre. No 50/50. No mes vencido.
- 2 rondas de ajustes por pieza incluidas. Extra → costo adicional.
- Ajustes no solicitados en tiempo acordado = aprobados.

### Cliente ideal vs anti-cliente

**Ideal:** Hotelería, construcción, salud/bienestar, cooperativas, gastronómico selectivo. Presupuesto estable. Valora estrategia > producción. Acepta FEE.

**Anti:** Restaurantes bajo ticket con necesidad diaria, precios bajos, sin paciencia para FEE.

### Equipo + red aliados

**Interno:** Felipe Garzón (fundador + dueño único + director creativo), Rosa (operación), creador/a de contenido (vacante).

**Aliados:** Angie (Meta Ads), Zayda (OOH + influencers), Big Sins (vallas), Chica Noticias (medios), Francisco (web/apps), Cero Uno/Daniel (audiovisual), aliado Perú TBD (branding).

---

## 9. Skills mapeadas por fase

| Fase | Skills |
|---|---|
| Plan Phase | `gsd-plan-phase`, `gsd-mvp-phase`, `superpowers:writing-plans` |
| UI design | `gsd-ui-phase`, `anthropic-skills:brand-guidelines`, `mcp__pencil__*`, `mcp__magic__21st_magic_component_builder` |
| Execute | `gsd-execute-phase`, `superpowers:executing-plans`, `superpowers:test-driven-development`, `superpowers:subagent-driven-development` |
| Verify | `gsd-verify-work`, `verify`, `mcp__Claude_Preview__*`, `superpowers:verification-before-completion` |
| Review | `gsd-code-review`, `code-review`, `superpowers:requesting-code-review` |
| Security | `cyber-neo`, `security-review`, `gsd-secure-phase` |
| Deploy | `all-deploy`, `gsd-ship`, `gsd-pr-branch` |
| Debug | `superpowers:systematic-debugging`, `gsd-debug` |
| Cross-session | `gsd-resume-work`, `gsd-pause-work`, `gsd-thread`, `gsd-progress` |

---

## 10. Riesgos / bloqueadores conocidos sesión previa

1. **Anthropic API 529 Overloaded** — Agent calls fallaron. Mitigación: escribir inline cuando subagent falle.
2. **Hook bash `cd` forbidden** — usar `true && cd "..." && cmd` o paths absolutos.
3. **Glob ripgrep timeout** en `C:\Users\USUARIO` muy ancho — scopear a subdir específico.
4. **Write requiere Read previo** si archivo existe — verificar con `ls` antes.

---

## 11. Comandos útiles

```bash
# Trabajar siempre desde
WORK="/c/Users/USUARIO/Desktop/BOVEDA/Desarrollo Web/Frato/web"

# Estado planning
ls "$WORK/.planning/research/"
cat "$WORK/.planning/PROJECT.md"

# GSD SDK
gsd-sdk --version                        # v1.42.3+
gsd-sdk query init.new-project           # estado proyecto
gsd-sdk query roadmap.get-phase 1        # fase 1 detail
gsd-sdk query commit "msg" --files ...   # commit con metadata
gsd-sdk query generate-claude-md --output CLAUDE.md

# Conversión docs (markitdown ya instalado)
MD="C:/Users/USUARIO/AppData/Local/Python/pythoncore-3.14-64/Scripts/markitdown.exe"
"$MD" archivo.pdf -o archivo.md

# Maquetas referencia
start "" "$WORK/../version_proyectos/index.html"
start "" "$WORK/../version_raiz/index.html"
```

---

## 12. Archivos críticos a leer cada sesión

Orden de lectura para retomar contexto frío:

1. Este archivo (`CLAUDE.md`)
2. `.planning/PROJECT.md`
3. `../docs/PLAYBOOK_FRATO.md` (fuente única verdad marca)
4. `.planning/research/STACK.md`
5. `.planning/research/FEATURES.md`
6. `.planning/research/ARCHITECTURE.md`
7. `.planning/research/PITFALLS.md` (cuando exista)
8. `.planning/research/SUMMARY.md` (cuando exista)
9. `.planning/ROADMAP.md` (cuando exista)
10. `.planning/STATE.md` (cuando exista)

Archivos referencia opcionales:
- `../docs/auditoria-sistemas-frato.md` — auditoría técnica versiones HTML previas
- `../docs/extracted/FRATO_CONTEXTO_1.md` — contexto interno Felipe Garzón
- `../docs/extracted/FRATO_SERVICIOS.md` — deck servicios + paquetes

---

## 13. Próximo paso inmediato

**PITFALLS.md research** — 4to researcher del workflow `gsd-new-project`.

Si `Agent` falla con 529/socket, escribir inline siguiendo template en:
`C:\Users\USUARIO\.claude\get-shit-done\templates\research-project\PITFALLS.md`

Cobertura ya draftada (16 pitfalls listados en sección 7 de este archivo).

Después: synthesizer → REQUIREMENTS → ROADMAP → STATE → commit final → listo para `/gsd-plan-phase 1`.

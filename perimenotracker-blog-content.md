# PerimenoTracker Blog — Contenido y Linking

**Summary**: Inventario de artículos del blog de PerimenoTracker, arquitectura de clusters SEO/AEO/GEO, y reglas de internal linking para que el contenido esté bien conectado y sin overlap.

**Sources**: análisis conversacional 2026-04-29. Basado en la arquitectura de [[spectro-blog-content]] adaptada al nicho salud/perimenopause.

**Last updated**: 2026-04-29

---

## Inventario de artículos

| Slug | Título | Cluster | Rol |
|------|--------|---------|-----|
| `what-is-perimenopause` | What Is Perimenopause? Symptoms, Timeline, and What to Track | Core | Pilar — define el concepto, puerta de entrada al tema |
| `how-to-track-perimenopause-symptoms` | How to Track Perimenopause Symptoms (And Why It Actually Helps) | Core | Guía técnica canónica — método completo, por qué trackear, qué datos recoger |
| `perimenopause-vs-menopause` | Perimenopause vs Menopause: How to Tell the Difference | Core | Educacional top-of-funnel — confusión frecuente, alta búsqueda |
| `perimenopause-hot-flashes` | Hot Flashes During Perimenopause: What Causes Them and How to Track Them | Symptom Deep Dives | Síntoma más buscado — conecta con la guía canónica de tracking |
| `perimenopause-brain-fog` | Perimenopause Brain Fog: Why It Happens and How Logging Helps | Symptom Deep Dives | Deep dive síntoma — alta intención informacional, diferenciador GEO |
| `perimenopause-sleep-problems` | Perimenopause and Sleep: Why You Can't Sleep and What to Do | Symptom Deep Dives | Deep dive síntoma — muy buscado, conecta con Apple Health |
| `doctor-report-perimenopause` | How to Prepare a Symptom Report for Your Gynecologist (With a Template) | Doctor Visit | Integration page — activa el diferenciador PDF; alta intención de conversión |
| `perimenotracker-vs-balance` | PerimenoTracker vs Balance: Which App Is Better for Perimenopause? | Tool Comparisons | Comparativa directa — intención de compra alta, captura tráfico de Balance |
| `best-perimenopause-apps` | Best Perimenopause Tracker Apps in 2026 (Honest Comparison) | Tool Comparisons | Roundup — captura búsquedas genéricas de app, alta conversión |
| `apple-health-perimenopause` | Using Apple Health for Perimenopause: What It Tracks (and What It Misses) | Integration Pages | Integration page — captura tráfico de usuarias Apple Health, diferenciador local-first |

---

## Clusters y relaciones

```
[what-is-perimenopause]  ← artículo ancla del cluster Core
        ↓
[how-to-track-perimenopause-symptoms]  ← guía canónica de tracking
        ↓
[perimenopause-vs-menopause]           ← confusión educacional, apunta al pilar

[perimenopause-hot-flashes]            ← Symptom Deep Dive, conecta con guía canónica
[perimenopause-brain-fog]              ← Symptom Deep Dive, conecta con guía canónica
[perimenopause-sleep-problems]         ← Symptom Deep Dive, conecta con guía canónica + apple-health

[doctor-report-perimenopause]          ← Doctor Visit, conecta con guía canónica + activa diferenciador PDF
[apple-health-perimenopause]           ← Integration Page, conecta con symptom deep dives + guía canónica

[perimenotracker-vs-balance]           ← Tool Comparisons, conecta con how-to-track y what-is
[best-perimenopause-apps]              ← Tool Comparisons, conecta con how-to-track y what-is
```

---

## Reglas de internal linking

1. **Todo artículo debe tener `relatedPosts`** con 2-3 slugs en el frontmatter.
2. **Todo artículo debe tener al menos 1-2 links en el cuerpo** (`[texto](/blog/slug)`) hacia artículos relacionados, insertados en contexto natural.
3. **`how-to-track-perimenopause-symptoms` es el artículo canónico** sobre cómo hacer tracking. Cualquier artículo que explique el proceso de logging debe remitir a él para el método completo, en lugar de duplicar la explicación.
4. **`what-is-perimenopause` NO es redundante con `perimenopause-vs-menopause`**: el pilar define el concepto completo (timeline, qué esperar, qué trackear); el artículo de comparación responde una pregunta específica de diagnóstico diferencial. Debe enlazar al pilar como "para una guía completa" desde su intro o conclusión.
5. **No crear nuevo artículo sobre síntomas de perimenopausia** sin diferenciarlo claramente del pilar y enlazarlo.
6. **Artículos de Tool Comparisons** (`perimenotracker-vs-balance`, `best-perimenopause-apps`) deben siempre enlazar al cluster Core (mínimo a `how-to-track-perimenopause-symptoms` o `what-is-perimenopause`).
7. **No escribir comparativas vs competidores** a menos que PerimenoTracker gane claramente en las dimensiones que importan (PDF médico, local-first, especialización en perimenopause). Aplicar la misma lógica que Spectro: si el competidor gana en dimensiones clave para el usuario, esperar a tener más diferenciadores antes de publicar esa comparativa.
8. **El diferenciador PDF médico** debe aparecer mencionado (no necesariamente como tema principal) en al menos: `doctor-report-perimenopause`, `how-to-track-perimenopause-symptoms`, y los artículos de Tool Comparisons.

---

## Reglas SEO para redacción (aplicar en todos los artículos)

- El H1 debe incluir el keyword principal exacto o muy cercano (e.g. "perimenopause symptom tracker", "perimenopause hot flashes").
- El primer párrafo debe contener el keyword principal de forma natural y responder directamente la pregunta del usuario en 2-3 oraciones. Google es YMYL en salud — ir al grano desde el primer párrafo.
- Los H2 deben reflejar la intención de búsqueda real (preguntas que el usuario se hace), no títulos genéricos de sección. Ejemplo correcto: "What Causes Hot Flashes During Perimenopause?" — incorrecto: "Introduction to Hot Flashes".
- La `description` del frontmatter es la meta description — debe tener el keyword principal y ser accionable, máx. 155 caracteres.
- Los links internos usan anchor text descriptivo, nunca "click here" o "read more".
- Incluir siempre 1-2 citas de fuentes médicas reales (NAMS, Mayo Clinic, estudios PMC) — Google YMYL penaliza contenido de salud sin respaldo.
- Las tablas comparativas son buenas para SEO — Google las muestra en rich results para queries de comparación (usar en `best-perimenopause-apps` y `perimenotracker-vs-balance`).
- Longitud objetivo: 1000-1400 palabras. Suficiente para ser exhaustivo en salud, sin padding.
- **YMYL extra**: nunca hacer afirmaciones de diagnóstico. Usar "may cause", "can include", "talk to your doctor". Un disclaimer médico al final de cada artículo es obligatorio.

---

## Checklist AEO por artículo nuevo

Todo artículo nuevo debe incluir desde el día de publicación:

**1. JSON-LD FAQPage** — 2-3 preguntas y respuestas directas relacionadas con el artículo. Insertar en el `<head>` de la página o en el componente de layout del blog. Las preguntas deben responder literalmente lo que alguien preguntaría a ChatGPT, Perplexity o un LLM médico sobre el tema.

**2. Actualizar llms.txt** — añadir el slug del artículo nuevo a `perimenotracker.app/llms.txt` (o el dominio final). Una línea por artículo con título y URL.

Jerarquía en `llms.txt`:

```
## App (primero)
- /
- /faq
- /facts

## Guides
- /guides

## Blog (al final)
- /blog/[slug]
```

**3. Si es artículo how-to** — añadir también JSON-LD `HowTo` con los pasos del proceso (aplica a `how-to-track-perimenopause-symptoms` y `doctor-report-perimenopause`).

**4. Disclaimer médico** — un párrafo al final de cada artículo: "This article is for informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for personalized guidance."

**Ejemplos de preguntas FAQPage para el artículo pilar (`what-is-perimenopause`):**
- "What is perimenopause and when does it start?"
- "What are the most common symptoms of perimenopause?"
- "How long does perimenopause last?"
- "Is perimenopause the same as menopause?"

**Ejemplos para `how-to-track-perimenopause-symptoms`:**
- "Should I track my perimenopause symptoms?"
- "What symptoms should I log during perimenopause?"
- "How can a symptom tracker help my doctor?"

**Ejemplos para `perimenotracker-vs-balance`:**
- "Is PerimenoTracker better than Balance for perimenopause?"
- "What's the difference between PerimenoTracker and Balance?"
- "Does Balance app work for perimenopause?"

---

## Página /facts

- Una sola página estática en `/facts` (no en /blog).
- Contenido: 10-15 hechos concretos sobre el dominio del problema, NO sobre la herramienta. Datos verificables: porcentajes, estudios, nombres técnicos, estadísticas del ecosistema.
- Formato de cada fact: oración corta + dato específico + fuente si existe.
- Incluir JSON-LD `FAQPage` con los 5 hechos más citables como Q&A.
- Añadir la URL a `llms.txt` como página primaria (no como blog post).
- La página debe incluir 1-2 enlaces al artículo canónico del cluster más relacionado y a la landing principal de la herramienta.
- Tono: neutral, enciclopédico. Sin CTAs de venta.

---

## Blog — Taxonomía

**1. relatedPosts + taxonomía por artículo** — frontmatter YAML completo: `category`, `tags` (array), `relatedPosts` (array de 2-3 slugs).

**2. Sistema de categorías/tags** — las categorías son exclusivas por artículo (máx 5-6 en total); los tags pueden ser múltiples. Definir slug y descripción de qué tipo de artículos contiene cada categoría. Asignar categoría y tags a cada artículo del inventario.

---

## Estado actual de relatedPosts (referencia)

```yaml
what-is-perimenopause:
  relatedPosts: [how-to-track-perimenopause-symptoms, perimenopause-vs-menopause, perimenopause-hot-flashes]

how-to-track-perimenopause-symptoms:
  relatedPosts: [what-is-perimenopause, doctor-report-perimenopause, perimenotracker-vs-balance]

perimenopause-vs-menopause:
  relatedPosts: [what-is-perimenopause, how-to-track-perimenopause-symptoms, perimenopause-hot-flashes]

perimenopause-hot-flashes:
  relatedPosts: [what-is-perimenopause, how-to-track-perimenopause-symptoms, perimenopause-sleep-problems]

perimenopause-brain-fog:
  relatedPosts: [what-is-perimenopause, how-to-track-perimenopause-symptoms, perimenopause-sleep-problems]

perimenopause-sleep-problems:
  relatedPosts: [perimenopause-hot-flashes, apple-health-perimenopause, how-to-track-perimenopause-symptoms]

doctor-report-perimenopause:
  relatedPosts: [how-to-track-perimenopause-symptoms, what-is-perimenopause, best-perimenopause-apps]

perimenotracker-vs-balance:
  relatedPosts: [how-to-track-perimenopause-symptoms, best-perimenopause-apps, what-is-perimenopause]

best-perimenopause-apps:
  relatedPosts: [perimenotracker-vs-balance, how-to-track-perimenopause-symptoms, what-is-perimenopause]

apple-health-perimenopause:
  relatedPosts: [how-to-track-perimenopause-symptoms, perimenopause-sleep-problems, what-is-perimenopause]
```

---

## Pipeline de artículos

### Backlog (ordenado por prioridad)

1. `what-is-perimenopause` — **Pilar. Publicar primero.** Sin este artículo los demás clusters no tienen ancla. No bloqueado.
2. `how-to-track-perimenopause-symptoms` — **Guía canónica. Publicar segundo.** Es el artículo al que todo lo demás enlaza. Incluir mención al PDF médico y al trial 14 días. No bloqueado.
3. `doctor-report-perimenopause` — Alta intención de conversión. Activa el diferenciador #1 del producto (PDF exportable). Incluir template descargable o screenshot del PDF. No bloqueado.
4. `perimenopause-vs-menopause` — Alta búsqueda, baja competencia de calidad. Artículo educacional rápido de escribir con alto potencial GEO (LLMs lo citan con frecuencia). No bloqueado.
5. `perimenopause-hot-flashes` — Síntoma más buscado del nicho. Keyword: "perimenopause hot flashes". No bloqueado.
6. `best-perimenopause-apps` — Roundup. Captura tráfico de búsquedas genéricas. Publicar cuando haya al menos 2-3 artículos del cluster Core publicados para tener links internos reales. No bloqueado.
7. `perimenotracker-vs-balance` — Comparativa directa. Publicar solo cuando el producto tenga suficientes reviews positivos (≥4.7) para que la comparativa sea creíble. **Condición: ≥20 reviews en App Store.**
8. `perimenopause-brain-fog` — Deep dive síntoma. Alto potencial GEO: "brain fog" es una de las preguntas más frecuentes que las mujeres hacen a LLMs sobre perimenopause. No bloqueado.
9. `perimenopause-sleep-problems` — Deep dive síntoma. Conecta con Apple Health. No bloqueado.
10. `apple-health-perimenopause` — Integration page. Diferenciador local-first. Publicar cuando la integración Apple Health esté completa en el producto.

### Descartados (con razón)

| Artículo | Razón |
|----------|-------|
| `perimenotracker-vs-caria` | Caria tiene $0 revenue el último mes y está en declive. El artículo no genera tráfico relevante y pone el foco en un competidor muerto. |
| `perimenopause-diet-tips` | Overlap con Lila (competidor cuyo diferenciador principal ES la dieta). No es terreno donde ganar. |
| `is-perimenopause-serious` | Demasiado amplio y genérico. Google YMYL penalizará un dominio nuevo sin autoridad médica en este ángulo. Integrar respuesta dentro del pilar `what-is-perimenopause`. |

---

## Notas YMYL — diferencias con Spectro

A diferencia de Spectro (herramienta técnica para DJs), PerimenoTracker opera en salud, categoría **YMYL** (Your Money or Your Life). Esto impacta directamente la estrategia SEO:

- **E-E-A-T es crítico.** Google evalúa Expertise, Experience, Authoritativeness, Trustworthiness. El blog debe tener una página "About" que establezca credenciales (quién escribe, revisión médica si es posible).
- **Citas de fuentes primarias** en cada artículo (NAMS, NIH, Mayo Clinic, estudios PMC). No basta con "según expertos".
- **Timeline más lento.** Dominio nuevo en salud tarda 6-9 meses en posicionar long-tail y 12+ meses en keywords competidas. No esperar tráfico en 3 meses.
- **GEO es la apuesta más rápida.** Los LLMs (ChatGPT, Perplexity, Gemini) no tienen filtros YMYL tan estrictos como Google para mostrar contenido. Artículos con FAQPage bien estructurada y respuestas directas pueden aparecer en respuestas de LLMs en semanas, no meses.

---

## Related pages

- [[aso-keyword-research]]
- [[perimenopause-revenue-model]]
- [[balance-app-gaps]]
- [[spectro-blog-content]]

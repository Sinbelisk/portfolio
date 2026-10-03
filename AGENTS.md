# AGENTS.md

Guía para agentes que trabajen en este repositorio.

## Descripción

Portafolio personal de una sola página
(SPA) construida con **React 19 + TypeScript + Vite**.

**Regla de oro: no añadir dependencias.** Usa solo lo que ya trae el scaffold
(React, Vite, TypeScript, ESLint). No instales librerías de UI, iconos,
animación, estado ni CSS, a no ser que indique lo contrario.

## Comandos

```bash
pnpm install
pnpm dev      # servidor de desarrollo
pnpm build    # type-check (tsc -b) + build de producción (vite build)
pnpm lint     # ESLint
pnpm preview  # sirve el build
```

Antes de dar por terminado un cambio, ejecuta `pnpm lint` y `pnpm build` (deben
pasar sin errores).

## Estructura

```shell
src/
├── main.tsx          # entrada; resuelve el tema antes del primer render
├── App.tsx           # layout, estado de tema y scroll-spy
├── Components/
│   ├── layout/       # estructura de la página (Header, ThemeToggle, BackToTop)
│   ├── sections/     # secciones del body (Introduction, About, Skills, ...)
│   └── ui/           # piezas reutilizables (Section, TagList, ProjectCard, ...)
├── Data/
│   ├── api.ts        # expone las queries y operaciones de datos
│   ├── records.ts    # datos consumidos por la api
│   └── types.ts      # interfaces de tipos
└── Styles/
    ├── global.css    # variables globales, tema claro/oscuro y reset
    ├── App.module.css
    └── Components/   # espejo 1:1 de Components/ (CSS Modules)
        ├── layout/
        ├── sections/
        └── ui/
```

- La raíz de `src/` deja **solo** `App.tsx` y `main.tsx`.
- `Components/` se organiza en `layout/`, `sections/` y `ui/` para no
  amontonar archivos. Si añades un subgrupo nuevo, crea el directorio
  espejo correspondiente en `Styles/Components/`.

## Convenciones de código

- **Código en inglés, UI en español.** Nombres de archivos, identificadores,
  variables, tipos y tipos de archivo en inglés. El texto visible al usuario
  (labels, botones, mensajes) en español con contenido _lorem ipsum_.
- **Comentarios**: breves y en inglés. Solo cuando aportan valor.
- **Props y tipos**: declara **interfaces TS** para las props de cada
  componente (`interface XxxProps`) y para los modelos de datos. Evita `type`
  para objetos; resérvalo para uniones (p. ej. `Theme`).
- **Exportaciones**: los componentes usan `export default`. La capa `Data/api.ts`
  usa exports nombrados.
- **Evita el abuso de `div`.** Usa HTML semántico: `header`, `nav`, `main`,
  `section`, `article`, `ul`/`ol`/`li`, `time`, `address`, etc.

### TypeScript (restricciones activas)

`tsconfig.app.json` activa opciones que condicionan cómo escribes el código:

- `verbatimModuleSyntax` → importa tipos con `import type { ... } from '...'`.
- `erasableSyntaxOnly` → **no** uses `enum` ni `namespace`; usa uniones de
  literales o interfaces.
- `noUnusedLocals` / `noUnusedParameters` → sin variables ni parámetros sin usar.
- `noFallthroughCasesInSwitch`.

## Capa de datos (`Data/`)

El flujo es unidireccional: los componentes **solo** leen a través de
`Data/api.ts`.

- `types.ts`: interfaces de los modelos (`Profile`, `Project`, `SkillGroup`,
  `ExperienceItem`, `NavLink`, `SocialLink`, `Theme`).
- `records.ts`: contenido estático de ejemplo (_lorem ipsum_).
- `api.ts`: funciones de consulta síncronas (`getProfile`, `getProjects`, …)
  que exponen los registros.

Para cambiar el contenido de la plantilla, edita `records.ts`. No accedas a
`records.ts` directamente desde los componentes.

## Estilos (`Styles/`)

- Un archivo **CSS Module** por componente, en la ruta espejo dentro de
  `Styles/Components/`. Se importa con `import styles from '../../Styles/...'`.
- Usa **CSS moderno**:
  - Variables CSS globales (`--bg`, `--text`, `--accent-*`, `--radius`, …) definidas
    en `Styles/global.css`.
  - `color-mix(in oklab, ...)` para tintes y bordes derivados del acento.
  - `clamp()` para tipografía y espaciado fluidos.
  - Anidamiento (`&`) dentro de las reglas cuando aporte claridad.
- Clases en **camelCase** para poder usar `styles.nombreClase`.
- **Acento por sección**: cada bloque usa `<Section accent="...">`, que fija
  `--accent`. Los estilos de la sección heredan ese acento; las tarjetas y tags
  lo consumen vía `var(--accent)`. Al añadir una sección nueva, registra su
  acento en `Styles/Components/ui/Section.module.css` y define el color en
  `global.css` (light y dark).
- Los estilos de un componente van **exclusivamente** en su CSS Module; no
  metas estilos de componente en `global.css` (solo variables, reset y tema).

## Tema claro/oscuro

- `main.tsx` fija `document.documentElement.dataset.theme` antes del primer
  render (`localStorage` → fallback a `prefers-color-scheme`).
- `App.tsx` mantiene el estado y lo persiste; `Header`/`ThemeToggle` lo exponen.
- El tema se define en `Styles/global.css` con `:root` (claro) y
  `:root[data-theme='dark']` (oscuro). Añade variables nuevas en **ambos** bloques.

## Accesibilidad y UX (heurísticas de Nielsen)

La plantilla aplica las 10 heurísticas. Mantén estas garantías:

1. **Estado del sistema**: enlace de nav activo vía `aria-current="location"`
   (scroll-spy con `IntersectionObserver` en `App.tsx`); feedback en hover/focus.
2. **Mundo real**: etiquetas en español y lenguaje claro.
3. **Control y libertad**: skip-link "Ir al contenido" y botón "volver arriba".
4. **Consistencia**: reutiliza `Section`, `TagList`, botones y tokens de estilo.
5. **Prevención de errores**: enlaces externos con `target="_blank"` +
   `rel="noreferrer"`; el enlace a repo es opcional (`repoUrl?`).
6. **Reconocimiento**: navegación siempre visible (en móvil, scrollable; nunca
   se oculta con `display: none`).
7. **Flexibilidad y eficiencia**: `:focus-visible` global, navegación por
   teclado, `scroll-margin-top` en las secciones.
8. **Diseño minimalista**: jerarquía visual clara y espaciado consistente.
9. **Ayuda a reconocer errores**: `mailto:` y enlaces con texto explícito.
10. **Ayuda y documentación**: `aria-label`/`title` en controles y este README/AGENTS.

Añade además `aria-label` en elementos interactivos sin texto visible y respeta
`prefers-reduced-motion` (ya cubierto en `global.css`).

## Al crear un componente nuevo

1. Crea `src/Components/<grupo>/Nombre.tsx` con `interface NombreProps`.
2. Crea `src/Styles/Components/<grupo>/Nombre.module.css`.
3. Usa HTML semántico y evita `div` si existe una etiqueta más adecuada.
4. Si consume datos, hazlo vía `Data/api.ts` (no de `records.ts` directamente).
5. Registra el acento en `Section` + `global.css` si es una sección nueva.
6. Ejecuta `pnpm lint` y `pnpm build`.

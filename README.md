# webfolio

Plantilla de portafolio personal de una sola página con **React + TypeScript + Vite**.
No añade dependencias: usa únicamente lo que trae el scaffold.

## Scripts

```bash
pnpm install
pnpm dev      # servidor de desarrollo
pnpm build    # type-check + build de producción
pnpm lint     # ESLint
pnpm preview  # sirve el build
```

## Estructura

```
src/
├── main.tsx          # entrada; resuelve el tema antes del primer render
├── App.tsx           # layout, estado de tema y scroll-spy
├── Components/
│   ├── layout/       # estructura de la página (Header, ThemeToggle, BackToTop)
│   ├── sections/     # secciones del body (Introduction, About, Skills, ...)
│   └── ui/           # piezas reutilizables (Section, TagList, ProjectCard, ...)
├── Data/
│   ├── api.ts        # expone las queries de datos
│   ├── records.ts    # contenido de ejemplo (lorem ipsum)
│   └── types.ts      # interfaces de tipos
└── Styles/
    ├── global.css    # variables globales, tema claro/oscuro y reset
    ├── App.module.css
    └── Components/   # espejo 1:1 de Components/ (CSS Modules)
```

## Personalización

- **Contenido**: edita `src/Data/records.ts`.
- **Tipos**: `src/Data/types.ts` (interfaces compartidas por los componentes).
- **Datos**: consume todo a través de `src/Data/api.ts`.
- **Colores**: variables `--accent-*` en `src/Styles/global.css`; cada sección
  hereda su acento desde `<Section accent="...">`.
- **Tema**: botón claro/oscuro en el `Header`; se persiste en `localStorage`
  y respeta `prefers-color-scheme` como valor inicial.

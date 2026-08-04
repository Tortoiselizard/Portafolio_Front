# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server.
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the production build locally.
- `npm run lint` — ESLint over `src` (`.js`/`.jsx`). Runs with `--max-warnings 0`, so any warning fails the lint.

There is no test suite configured.

## Code style

Linting extends **StandardJS** (`standard`) plus the `react-refresh` plugin. Follow Standard conventions: no semicolons, single quotes, 2-space indentation, and a space before function parens (`function App ()`). The React ESLint plugins (`react`, `react-hooks`) are installed but currently commented out in `.eslintrc.cjs`.

## Architecture

Single-page personal portfolio built with **React 18 + Vite** (`@vitejs/plugin-react-swc`). No router, no state library, no backend — it's a static SPA.

**Layout (`src/App.jsx`).** The page is split into two columns via `.main-Container`:
- `.main-fixed-Container` — fixed left column holding `Home` (which renders `Nav`) and `Contact`.
- `.main-scroll-Contianer` (id `main-scroll-Contianer`, note the typo — it's used as a real DOM selector) — the scrolling right column holding `AboutMe`, `Experience`, `Projects`, and `Technologies`.

**Data flow.** Content is data-driven from `data.json` at the repo root. `App.jsx` imports it, destructures `{ experiences, proyects }`, and passes them as props to `Experience` and `Projects`. To change portfolio content (jobs, projects), edit `data.json` rather than the components. Note the property/prop is spelled `proyects` throughout.

**Components (`src/components/<Name>/`).** Each component is a folder with `<Name>.jsx` and a co-located `<Name>.module.css` (CSS Modules, imported as `style`). Global styles live in `src/App.css` and `src/index.css`.

**Nav scroll behavior (`src/components/Nav/Nav.jsx`).** `Nav` implements scroll-spy that highlights the active section. It reads sections by DOM id/name (`#AboutMe`, `#Experience`, `#Projects`) via a `useEffect` scroll listener. It branches on `window.innerWidth > 480`: on desktop it listens to `window` scroll; on mobile it listens to the `main-scroll-Contianer` element's scroll instead. Section links scroll via `scrollIntoView({ behavior: 'smooth' })`. Because this relies on element ids/names matching between `Nav` and the section components, keep those identifiers in sync when renaming sections.

## Git workflow

Work happens on `development` and merges into `main` via PRs (see recent history). Feature commits use `feat:` / `fix:` prefixes.

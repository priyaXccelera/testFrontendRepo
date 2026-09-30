# test-vue-shopfront

A modern e-commerce product showcase site built with Vue 3. Features a responsive navbar, hero section, product grid, about section, contact form, and footer—all on a single page with smooth scroll navigation.

## Tech stack

Vue 3 (Composition API, `<script setup>`) + TypeScript, Vite, Tailwind CSS, Vue Router, Pinia.

## Getting started

```
npm install --legacy-peer-deps
cp .env.example .env
npm run dev
```

Then open http://localhost:47301

## Environment variables

See `.env.example`. `VITE_API_URL` is optional — the app runs on local mock data by default.

## Project structure

- `src/views/` - Page components (HomeView, NotFoundView)
- `src/components/` - Shared UI components (Navbar, ProductCard, Footer)
- `src/types/` - TypeScript type definitions
- `src/data/` - Mock data and seed values
- `src/services/` - API client wrapper
- `src/router/` - Vue Router configuration
- `src/stores/` - Pinia state management (currently unused for this static demo)

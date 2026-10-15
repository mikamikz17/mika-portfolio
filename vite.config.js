import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// One HTML file per page keeps the old GitHub Pages URLs (about.html, background.html, ...).
const pages = ['index', 'about', 'background', 'projects', 'contact']

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works on any GitHub Pages sub-path.
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map((name) => [name, resolve(import.meta.dirname, `${name}.html`)])),
    },
  },
})

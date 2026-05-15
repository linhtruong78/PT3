import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
//
// `base` is read from the BASE_PATH env var so the same config works for:
//   - Local dev          : BASE_PATH unset → "/"
//   - GitHub Pages       : BASE_PATH="/repo-name/"  (set by CI)
//   - Vercel/Netlify/etc : BASE_PATH unset → "/"
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/SenHaiX8800web/', //for github page
  plugins: [react(), tailwindcss()],
  server: {
    port: 8800,
    strictPort: true
  },
  preview: {
    port: 8800,
    strictPort: true
  }
});

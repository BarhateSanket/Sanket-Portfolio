import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages is served from /Sanket-Portfolio/
  // so all built asset URLs must be generated with this base.
  // For local development, we use base: '/'
  base: '/Sanket-Portfolio/',
  server: {
    port: 4173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

